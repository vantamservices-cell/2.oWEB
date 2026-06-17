import {createHmac} from 'node:crypto';

import {describe, expect, it} from 'vitest';

import {
  deriveClientIdentifier,
  isAllowedRequestOrigin,
  parseWithdrawalSubmission,
} from '../../lib/server/withdrawal-security';

const allowedOrigins = new Set(['https://www.vantam.xyz']);
const stableSecret = 'withdrawal-rate-limit-secret-value-0123456789';
const rawIp = '198.51.100.42';

function makeHeaders(ip = rawIp) {
  return new Headers({'x-real-ip': ip});
}

function validWithdrawalPayload(overrides: Record<string, unknown> = {}) {
  return {
    name: 'Maria Smith',
    email: 'Maria.Smith@example.com',
    contractReference: 'SMOKE-CONTRACT-123',
    serviceDescription: 'Housing support consultation',
    locale: 'en',
    confirmWithdrawal: true,
    website: '',
    formStartedAt: Date.now() - 2000,
    ...overrides,
  };
}

describe('withdrawal security helpers', () => {
  it('accepts a valid payload', () => {
    const parsed = parseWithdrawalSubmission(validWithdrawalPayload());

    expect(parsed.status).toBe('valid');
    if (parsed.status !== 'valid') return;

    expect(parsed.submission.email).toBe('maria.smith@example.com');
    expect(parsed.submission.confirmWithdrawal).toBe(true);
  });

  it.each([
    ['email format', {email: 'not-an-email'}],
    ['contract reference', {contractReference: ''}],
    ['contract reference length', {contractReference: 'x'.repeat(121)}],
    ['service description', {serviceDescription: ''}],
  ])('rejects invalid %s', (_label, overrides) => {
    const parsed = parseWithdrawalSubmission(validWithdrawalPayload(overrides));
    expect(parsed.status).toBe('invalid');
  });

  it.each([
    ['locale', {locale: 'de'}],
    ['confirmation', {confirmWithdrawal: false}],
    ['confirmation field', {confirmWithdrawal: undefined}],
  ])('rejects invalid %s', (_label, overrides) => {
    const parsed = parseWithdrawalSubmission(validWithdrawalPayload(overrides));
    expect(parsed.status).toBe('invalid');
  });

  it.each([
    ['missing form timing', {formStartedAt: undefined}],
    ['too-fast form timing', {formStartedAt: Date.now()}],
  ])('rejects %s', (_label, overrides) => {
    const parsed = parseWithdrawalSubmission(validWithdrawalPayload(overrides));
    expect(parsed.status).toBe('invalid');
  });

  it('treats the honeypot field as a silent trap', () => {
    const parsed = parseWithdrawalSubmission(validWithdrawalPayload({website: 'trap'}));
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
