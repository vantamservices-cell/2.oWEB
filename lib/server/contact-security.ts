import 'server-only';

import {createHmac} from 'node:crypto';
import {isIP} from 'node:net';

import {LOCALES, type Locale} from '../locales';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const INQUIRY_TYPES = ['consultation', 'single', 'packages', 'b2b'] as const;
const AUDIENCES = ['student', 'professional', 'family', 'organisation'] as const;
const SITUATION_STATUSES = ['before', 'after', 'found_housing', 'need_housing', 'organisation'] as const;
const GUARANTOR_CONTEXTS = ['yes', 'maybe', 'no'] as const;
const HOUSING_BUDGETS = ['under-700', '700-1000', '1000-1500', '1500-plus', 'not-sure'] as const;
const HOUSING_TYPES = ['room_student', 'studio', 'apartment', 'house', 'short_stay', 'not_sure'] as const;
const INDIVIDUAL_SERVICE_SLUGS = [
  'official_letter_action',
  'administration_problem_support',
  'lost_document_coordination',
  'university_administration_case',
  'academic_issue_support',
  'internship_administration',
  'work_insurance_transition',
  'employment_administration_check',
  'cak_svb_case_support',
  'housing_offer_contract_check',
  'landlord_problem_evidence_pack',
  'move_out_deposit_support',
  'emergency_relocation_coordination',
  'urgent_situation_assessment',
  'complex_urgent_case',
  'graduation_orientation_year_roadmap',
  'moving_leaving_netherlands',
] as const;
const MIN_FORM_FILL_MS = 1_500;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  inquiryType?: unknown;
  message?: unknown;
  consent?: unknown;
  language?: unknown;
  website?: unknown;
  sourceUrl?: unknown;
  audience?: unknown;
  movingDate?: unknown;
  city?: unknown;
  budget?: unknown;
  status?: unknown;
  guarantor?: unknown;
  help?: unknown;
  formStartedAt?: unknown;
};

export type ContactSubmission = {
  name: string;
  email: string;
  inquiryType: (typeof INQUIRY_TYPES)[number];
  message: string;
  locale: Locale;
  sourcePath: string;
  audience: (typeof AUDIENCES)[number] | null;
  movingDate: string | null;
  cityOrRegion: string | null;
  housingBudget: (typeof HOUSING_BUDGETS)[number] | null;
  situationStatus: (typeof SITUATION_STATUSES)[number] | null;
  guarantorContext: (typeof GUARANTOR_CONTEXTS)[number] | null;
  helpNeeded: string | null;
};

export type ContactConfiguration = {
  supabaseUrl: string;
  supabaseSecretKey: string;
  rateLimitSecret: string;
  allowedOrigins: Set<string>;
};

type ParseResult =
  | {status: 'valid'; submission: ContactSubmission}
  | {status: 'honeypot'}
  | {status: 'invalid'};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function normaliseSingleLine(value: unknown, maxLength: number) {
  if (typeof value !== 'string' || value.length > maxLength) return null;
  return value.replace(/[\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function normaliseMessage(value: unknown, maxLength: number) {
  if (typeof value !== 'string' || value.length > maxLength) return null;
  return value
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '')
    .replace(/\r\n?/g, '\n')
    .trim();
}

function optionalEnum<T extends readonly string[]>(value: unknown, allowed: T): T[number] | null | undefined {
  if (value === '' || value === null || value === undefined) return null;
  return typeof value === 'string' && allowed.includes(value) ? value as T[number] : undefined;
}

function requiredEnum<T extends readonly string[]>(value: unknown, allowed: T): T[number] | undefined {
  return typeof value === 'string' && allowed.includes(value) ? value as T[number] : undefined;
}

function normaliseOptionalSingleLine(value: unknown, maxLength: number) {
  if (value === '' || value === null || value === undefined) return null;
  const normalised = normaliseSingleLine(value, maxLength);
  return normalised || undefined;
}

function normaliseDate(value: unknown) {
  if (value === '' || value === null || value === undefined) return null;
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return undefined;

  const parsed = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value
    ? undefined
    : value;
}

function parseHelpNeeded(value: unknown) {
  if (typeof value !== 'string') return undefined;
  if (value === 'relocation_orientation') {
    return {
      helpNeeded: value,
      inquiryType: 'consultation' as const,
      isHousingSearch: false,
    };
  }

  if (value === 'vantam_start' || value === 'vantam_first_year' || value === 'vantam_continue') {
    return {
      helpNeeded: value,
      inquiryType: 'packages' as const,
      isHousingSearch: false,
    };
  }

  if (value === 'partnership') {
    return {
      helpNeeded: value,
      inquiryType: 'b2b' as const,
      isHousingSearch: false,
    };
  }

  const [prefix, suffix, extra] = value.split(':');
  if (prefix === 'individual_service'
    && extra === undefined
    && INDIVIDUAL_SERVICE_SLUGS.includes(suffix as (typeof INDIVIDUAL_SERVICE_SLUGS)[number])) {
    return {
      helpNeeded: value,
      inquiryType: 'single' as const,
      isHousingSearch: false,
    };
  }

  if ((prefix !== 'housing_ready' && prefix !== 'housing_campaign')
    || extra !== undefined
    || !HOUSING_TYPES.includes(suffix as (typeof HOUSING_TYPES)[number])) {
    return undefined;
  }

  return {
    helpNeeded: `${prefix}:${suffix}`,
    inquiryType: 'packages' as const,
    isHousingSearch: true,
  };
}

function normaliseSourcePath(value: unknown, allowedOrigins: Set<string>) {
  if (typeof value !== 'string' || value.length > 500) return '/';

  try {
    if (value.startsWith('/') && !value.startsWith('//')) {
      return new URL(value, 'https://source.invalid').pathname.slice(0, 300) || '/';
    }

    const parsed = new URL(value);
    return allowedOrigins.has(parsed.origin) ? parsed.pathname.slice(0, 300) || '/' : '/';
  } catch {
    return '/';
  }
}

function isValidFormTiming(value: unknown) {
  if (typeof value !== 'number' || !Number.isFinite(value) || !Number.isInteger(value) || value <= 0) return false;

  const elapsed = Date.now() - value;
  return elapsed >= MIN_FORM_FILL_MS;
}

function isLocalHostname(hostname: string) {
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1';
}

function isLocalDevelopmentOrigin(origin: string) {
  try {
    const parsed = new URL(origin);
    return process.env.NODE_ENV !== 'production'
      && (parsed.protocol === 'http:' || parsed.protocol === 'https:')
      && isLocalHostname(parsed.hostname);
  } catch {
    return false;
  }
}

function parseAllowedOrigins(value: string) {
  const origins = new Set<string>();

  for (const item of value.split(',')) {
    const candidate = item.trim();
    if (!candidate || candidate === '*') return null;

    try {
      const parsed = new URL(candidate);
      const isDevelopmentLocalhost = process.env.NODE_ENV !== 'production'
        && parsed.protocol === 'http:'
        && isLocalHostname(parsed.hostname);
      if ((parsed.protocol !== 'https:' && !isDevelopmentLocalhost)
        || parsed.username
        || parsed.password
        || parsed.pathname !== '/'
        || parsed.search
        || parsed.hash) {
        return null;
      }
      origins.add(parsed.origin);
    } catch {
      return null;
    }
  }

  return origins.size > 0 ? origins : null;
}

export function readContactConfiguration(): ContactConfiguration | null {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;
  const rateLimitSecret = process.env.CONTACT_RATE_LIMIT_SECRET;
  const allowedOriginsValue = process.env.CONTACT_ALLOWED_ORIGINS;

  if (!supabaseUrl || !supabaseSecretKey || !rateLimitSecret || !allowedOriginsValue || rateLimitSecret.length < 32) {
    return null;
  }

  let parsedSupabaseUrl: URL;
  try {
    parsedSupabaseUrl = new URL(supabaseUrl);
  } catch {
    return null;
  }

  if (parsedSupabaseUrl.protocol !== 'https:' || parsedSupabaseUrl.username || parsedSupabaseUrl.password) {
    return null;
  }

  const allowedOrigins = parseAllowedOrigins(allowedOriginsValue);
  if (!allowedOrigins) return null;

  return {
    supabaseUrl: parsedSupabaseUrl.origin,
    supabaseSecretKey,
    rateLimitSecret,
    allowedOrigins,
  };
}

export function isAllowedRequestOrigin(origin: string | null, allowedOrigins: Set<string>) {
  if (!origin) return false;

  try {
    const parsed = new URL(origin);
    const exactOrigin = parsed.origin;
    if (origin !== exactOrigin) return false;
    if (isLocalHostname(parsed.hostname)) return isLocalDevelopmentOrigin(exactOrigin);
    return allowedOrigins.has(exactOrigin) || isLocalDevelopmentOrigin(exactOrigin);
  } catch {
    return false;
  }
}

export function parseContactSubmission(value: unknown, allowedOrigins: Set<string>): ParseResult {
  if (!isRecord(value)) return {status: 'invalid'};
  const payload = value as ContactPayload;

  const website = normaliseSingleLine(payload.website, 200);
  if (website === null) return {status: 'invalid'};
  if (website) return {status: 'honeypot'};

  const name = normaliseSingleLine(payload.name, 120);
  const email = normaliseSingleLine(payload.email, 254)?.toLowerCase();
  const message = normaliseMessage(payload.message, 5000);
  const locale = requiredEnum(payload.language, LOCALES);
  const audience = optionalEnum(payload.audience, AUDIENCES);
  const cityOrRegion = normaliseOptionalSingleLine(payload.city, 80);
  const situationStatus = optionalEnum(payload.status, SITUATION_STATUSES);
  const parsedHelp = parseHelpNeeded(payload.help);
  const movingDate = situationStatus === 'before' ? normaliseDate(payload.movingDate) : null;
  const housingBudget = parsedHelp?.isHousingSearch ? optionalEnum(payload.budget, HOUSING_BUDGETS) : null;
  const guarantorContext = parsedHelp?.isHousingSearch ? optionalEnum(payload.guarantor, GUARANTOR_CONTEXTS) : null;

  if (!name
    || !email
    || !EMAIL_PATTERN.test(email)
    || !message
    || !locale
    || audience === undefined
    || movingDate === undefined
    || cityOrRegion === undefined
    || housingBudget === undefined
    || situationStatus === undefined
    || !parsedHelp
    || guarantorContext === undefined
    || payload.consent !== true
    || !isValidFormTiming(payload.formStartedAt)) {
    return {status: 'invalid'};
  }

  return {
    status: 'valid',
    submission: {
      name,
      email,
      inquiryType: parsedHelp.inquiryType,
      message,
      locale,
      sourcePath: normaliseSourcePath(payload.sourceUrl, allowedOrigins),
      audience,
      movingDate,
      cityOrRegion,
      housingBudget,
      situationStatus,
      guarantorContext,
      helpNeeded: parsedHelp.helpNeeded,
    },
  };
}

export function deriveClientIdentifier(requestHeaders: Headers, secret: string): string | null {
  const candidates = [
    requestHeaders.get('x-vercel-forwarded-for'),
    requestHeaders.get('x-forwarded-for'),
    requestHeaders.get('x-real-ip'),
  ];

  for (const candidate of candidates) {
    const firstAddress = candidate?.split(',')[0]?.trim();
    if (firstAddress && isIP(firstAddress)) {
      return createHmac('sha256', secret).update(firstAddress).digest('hex');
    }
  }

  return null;
}
