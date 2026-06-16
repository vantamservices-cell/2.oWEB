import 'server-only';

import {createHmac} from 'node:crypto';
import {isIP} from 'node:net';

import {LOCALES, type Locale} from '../locales';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_FORM_FILL_MS = 1_500;
const MAX_REQUEST_BYTES = 16 * 1024;

type WithdrawalPayload = {
  name?: unknown;
  email?: unknown;
  contractReference?: unknown;
  serviceDescription?: unknown;
  locale?: unknown;
  confirmWithdrawal?: unknown;
  website?: unknown;
  formStartedAt?: unknown;
};

export type WithdrawalSubmission = {
  name: string;
  email: string;
  contractReference: string;
  serviceDescription: string;
  locale: Locale;
  confirmWithdrawal: true;
};

export type WithdrawalConfiguration = {
  supabaseUrl: string;
  supabaseSecretKey: string;
  rateLimitSecret: string;
  allowedOrigins: Set<string>;
  googleClientId: string;
  googleClientSecret: string;
  googleRefreshToken: string;
  gmailSenderAddress: string;
};

type ParseResult =
  | {status: 'valid'; submission: WithdrawalSubmission}
  | {status: 'honeypot'}
  | {status: 'invalid'};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function normaliseSingleLine(value: unknown, maxLength: number) {
  if (typeof value !== 'string' || value.length > maxLength) return null;
  return value.replace(/[\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function isJsonContentType(contentType: string | null) {
  return contentType?.split(';', 1)[0]?.trim().toLowerCase() === 'application/json';
}

function exceedsDeclaredBodyLimit(contentLength: string | null) {
  if (!contentLength) return false;
  if (!/^\d+$/.test(contentLength)) return true;

  const length = Number(contentLength);
  return !Number.isSafeInteger(length) || length > MAX_REQUEST_BYTES;
}

function isValidFormTiming(value: unknown) {
  if (typeof value !== 'number' || !Number.isFinite(value) || !Number.isInteger(value) || value <= 0) return false;
  return Date.now() - value >= MIN_FORM_FILL_MS;
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

function normaliseOriginPath(value: unknown, allowedOrigins: Set<string>) {
  if (typeof value !== 'string' || value.length > 300) return '/';

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

export function readWithdrawalConfiguration(): WithdrawalConfiguration | null {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;
  const rateLimitSecret = process.env.WITHDRAWAL_RATE_LIMIT_SECRET;
  const allowedOriginsValue = process.env.WITHDRAWAL_ALLOWED_ORIGINS;
  const googleClientId = process.env.GOOGLE_CLIENT_ID;
  const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const googleRefreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const gmailSenderAddress = process.env.GMAIL_SENDER_ADDRESS;

  if (!supabaseUrl
    || !supabaseSecretKey
    || !rateLimitSecret
    || !allowedOriginsValue
    || !googleClientId
    || !googleClientSecret
    || !googleRefreshToken
    || !gmailSenderAddress
    || rateLimitSecret.length < 32) {
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
    googleClientId,
    googleClientSecret,
    googleRefreshToken,
    gmailSenderAddress,
  };
}

export function parseWithdrawalSubmission(value: unknown): ParseResult {
  if (!isRecord(value)) return {status: 'invalid'};
  const payload = value as WithdrawalPayload;

  const website = normaliseSingleLine(payload.website, 200);
  if (website === null) return {status: 'invalid'};
  if (website) return {status: 'honeypot'};

  const name = normaliseSingleLine(payload.name, 120);
  const email = normaliseSingleLine(payload.email, 254)?.toLowerCase();
  const contractReference = normaliseSingleLine(payload.contractReference, 120);
  const serviceDescription = normaliseSingleLine(payload.serviceDescription, 160);
  const locale = typeof payload.locale === 'string' && LOCALES.includes(payload.locale as Locale)
    ? payload.locale as Locale
    : undefined;

  if (!name
    || !email
    || !EMAIL_PATTERN.test(email)
    || !contractReference
    || !serviceDescription
    || !locale
    || payload.confirmWithdrawal !== true
    || !isValidFormTiming(payload.formStartedAt)) {
    return {status: 'invalid'};
  }

  return {
    status: 'valid',
    submission: {
      name,
      email,
      contractReference,
      serviceDescription,
      locale,
      confirmWithdrawal: true,
    },
  };
}

export function isJsonRequest(contentType: string | null, contentLength: string | null) {
  return isJsonContentType(contentType) && !exceedsDeclaredBodyLimit(contentLength);
}

export function requestBodyTooLarge(contentLength: string | null) {
  return exceedsDeclaredBodyLimit(contentLength);
}

export function maxWithdrawalRequestBytes() {
  return MAX_REQUEST_BYTES;
}

export function normaliseWithdrawalSourcePath(value: unknown, allowedOrigins: Set<string>) {
  return normaliseOriginPath(value, allowedOrigins);
}
