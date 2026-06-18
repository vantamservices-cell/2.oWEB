import {createHmac} from 'node:crypto';

import {describe, expect, it} from 'vitest';

import {
  deriveClientIdentifier,
  isAllowedRequestOrigin,
  parseContactSubmission,
} from '../../lib/server/contact-security';

const allowedOrigins = new Set(['https://www.vantam.xyz']);
const stableSecret = 'contact-rate-limit-secret-value-0123456789';
const rawIp = '203.0.113.10';

function makeHeaders(ip = rawIp) {
  return new Headers({'x-forwarded-for': ip});
}

function validContactPayload(overrides: Record<string, unknown> = {}) {
  return {
    name: 'Maria Smith',
    email: 'Maria.Smith@example.com',
    inquiryType: 'consultation',
    message: 'Need help with housing support.',
    consent: true,
    language: 'en',
    website: '',
    sourceUrl: 'https://www.vantam.xyz/en/contact?ref=home#hero',
    audience: 'student',
    movingDate: '',
    city: '',
    budget: '',
    status: 'after',
    guarantor: '',
    help: 'relocation_orientation',
    formStartedAt: Date.now() - 2000,
    ...overrides,
  };
}

describe('contact security helpers', () => {
  it('accepts a valid payload and minimises the source path', () => {
    const parsed = parseContactSubmission(validContactPayload(), allowedOrigins);

    expect(parsed.status).toBe('valid');
    if (parsed.status !== 'valid') return;

    expect(parsed.submission.email).toBe('maria.smith@example.com');
    expect(parsed.submission.sourcePath).toBe('/en/contact');
    expect(parsed.submission.helpNeeded).toBe('relocation_orientation');
  });

  it('reduces foreign source URLs to the root path', () => {
    const parsed = parseContactSubmission(
      validContactPayload({sourceUrl: 'https://evil.example/phish'}),
      allowedOrigins,
    );

    expect(parsed.status).toBe('valid');
    if (parsed.status !== 'valid') return;

    expect(parsed.submission.sourcePath).toBe('/');
  });

  it.each([
    ['missing privacy acknowledgement', {consent: false}],
    ['false privacy acknowledgement', {consent: false}],
    ['missing consent field', {consent: undefined}],
  ])('rejects %s', (_label, overrides) => {
    const parsed = parseContactSubmission(validContactPayload(overrides), allowedOrigins);
    expect(parsed.status).toBe('invalid');
  });

  it.each([
    ['email format', {email: 'not-an-email'}],
    ['message', {message: ''}],
    ['name length', {name: 'x'.repeat(121)}],
    ['message length', {message: 'x'.repeat(5001)}],
  ])('rejects invalid %s', (_label, overrides) => {
    const parsed = parseContactSubmission(validContactPayload(overrides), allowedOrigins);
    expect(parsed.status).toBe('invalid');
  });

  it.each([
    ['audience', {audience: 'invalid'}],
    ['language', {language: 'de'}],
    ['status', {status: 'elsewhere'}],
    ['help', {help: 'invalid'}],
    ['coarse individual service', {help: 'individual_service'}],
    ['legacy urgent consultation', {help: 'urgent_situation'}],
  ])('rejects invalid %s enum', (_label, overrides) => {
    const parsed = parseContactSubmission(validContactPayload(overrides), allowedOrigins);
    expect(parsed.status).toBe('invalid');
  });

  it.each([
    ['housing_ready', {help: 'housing_ready:room_student'}],
    ['housing_campaign', {help: 'housing_campaign:studio'}],
    ['packages', {help: 'vantam_first_year'}],
    ['individual service', {help: 'individual_service:official_letter_action'}],
    ['partner', {help: 'partnership'}],
  ])('accepts the %s help context', (_label, overrides) => {
    const parsed = parseContactSubmission(validContactPayload(overrides), allowedOrigins);
    expect(parsed.status).toBe('valid');
    if (parsed.status !== 'valid') return;
    expect(parsed.submission.helpNeeded).toBe(overrides.help);
  });

  it('classifies housing contexts under the packages inquiry bucket', () => {
    const parsed = parseContactSubmission(
      validContactPayload({help: 'housing_campaign:studio'}),
      allowedOrigins,
    );

    expect(parsed.status).toBe('valid');
    if (parsed.status !== 'valid') return;
    expect(parsed.submission.inquiryType).toBe('packages');
  });

  it('rejects an invalid date when the status requires one', () => {
    const parsed = parseContactSubmission(
      validContactPayload({status: 'before', movingDate: '2026-02-30'}),
      allowedOrigins,
    );

    expect(parsed.status).toBe('invalid');
  });

  it.each([
    ['missing form timing', {formStartedAt: undefined}],
    ['too-fast form timing', {formStartedAt: Date.now()}],
  ])('rejects %s', (_label, overrides) => {
    const parsed = parseContactSubmission(validContactPayload(overrides), allowedOrigins);
    expect(parsed.status).toBe('invalid');
  });

  it('treats the honeypot field as a silent trap', () => {
    const parsed = parseContactSubmission(validContactPayload({website: 'trap'}), allowedOrigins);
    expect(parsed.status).toBe('honeypot');
  });

  it('accepts the exact allowed origin and rejects foreign or missing origins', () => {
    expect(isAllowedRequestOrigin('https://www.vantam.xyz', allowedOrigins)).toBe(true);
    expect(isAllowedRequestOrigin('https://evil.example', allowedOrigins)).toBe(false);
    expect(isAllowedRequestOrigin(null, allowedOrigins)).toBe(false);
  });

  it('derives a stable HMAC client identifier and never stores the raw IP', () => {
    const headers = makeHeaders();
    const identifier = deriveClientIdentifier(headers, stableSecret);
    const expected = createHmac('sha256', stableSecret).update(rawIp).digest('hex');

    expect(identifier).toBe(expected);
    expect(identifier).toMatch(/^[0-9a-f]{64}$/);
    expect(identifier).not.toContain(rawIp);
  });
});
