import {randomUUID} from 'node:crypto';
import {NextRequest, NextResponse} from 'next/server';

export const runtime = 'nodejs';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  inquiryType?: unknown;
  message?: unknown;
  consent?: unknown;
  language?: unknown;
  website?: unknown;
  sourceUrl?: unknown;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const globalRateLimit = globalThis as typeof globalThis & {
  contactRateLimit?: Map<string, RateLimitEntry>;
};

const rateLimitStore = globalRateLimit.contactRateLimit ?? new Map<string, RateLimitEntry>();
globalRateLimit.contactRateLimit = rateLimitStore;

function cleanText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function cleanSingleLine(value: unknown, maxLength: number) {
  return cleanText(value, maxLength).replace(/[\r\n\t]+/g, ' ');
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    };

    return entities[character];
  });
}

function getClientIp(request: NextRequest) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || 'unknown';
}

function isRateLimited(clientIp: string) {
  if (clientIp === 'unknown') {
    return false;
  }

  const now = Date.now();
  const current = rateLimitStore.get(clientIp);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(clientIp, {count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS});
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  return false;
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'vantam.nl@proton.me';
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error('Contact form is not configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL.');
    return NextResponse.json(
      {error: 'Contact delivery is not configured.'},
      {status: 503},
    );
  }

  const origin = request.headers.get('origin');
  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json({error: 'Invalid request origin.'}, {status: 403});
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      {error: 'Too many contact requests. Please try again later.'},
      {status: 429},
    );
  }

  let payload: ContactPayload;

  try {
    payload = await request.json() as ContactPayload;
  } catch {
    return NextResponse.json({error: 'Invalid request.'}, {status: 400});
  }

  const name = cleanSingleLine(payload.name, 120);
  const email = cleanText(payload.email, 254).toLowerCase();
  const inquiryType = cleanSingleLine(payload.inquiryType, 80);
  const message = cleanText(payload.message, 5000);
  const language = cleanSingleLine(payload.language, 10) || 'unknown';
  const sourceUrl = cleanSingleLine(payload.sourceUrl, 500);
  const website = cleanText(payload.website, 200);

  // Bots frequently fill this hidden field. Return success without sending anything.
  if (website) {
    return NextResponse.json({ok: true});
  }

  if (!name || !EMAIL_PATTERN.test(email) || !inquiryType || !message || payload.consent !== true) {
    return NextResponse.json(
      {error: 'Please complete all required fields.'},
      {status: 400},
    );
  }

  const submittedAt = new Date().toISOString();
  const subject = `VANTAM website request: ${inquiryType} — ${name}`;
  const text = [
    'New VANTAM website request',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Request type: ${inquiryType}`,
    `Language: ${language}`,
    `Submitted: ${submittedAt}`,
    sourceUrl ? `Page: ${sourceUrl}` : '',
    '',
    'Message:',
    message,
    '',
    'The visitor consented to the processing of their data for a response to this request.',
  ].filter(Boolean).join('\n');

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:680px;margin:0 auto;color:#0f172a;line-height:1.6">
      <h1 style="font-size:22px;margin-bottom:20px">New VANTAM website request</h1>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
        <tbody>
          <tr><td style="padding:8px 0;color:#64748b;width:150px">Name</td><td style="padding:8px 0;font-weight:700">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Request type</td><td style="padding:8px 0">${escapeHtml(inquiryType)}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Language</td><td style="padding:8px 0">${escapeHtml(language)}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Submitted</td><td style="padding:8px 0">${escapeHtml(submittedAt)}</td></tr>
          ${sourceUrl ? `<tr><td style="padding:8px 0;color:#64748b">Page</td><td style="padding:8px 0">${escapeHtml(sourceUrl)}</td></tr>` : ''}
        </tbody>
      </table>
      <div style="padding:20px;background:#f1f5f9;border-radius:12px;white-space:pre-wrap">${escapeHtml(message)}</div>
      <p style="margin-top:20px;font-size:12px;color:#64748b">The visitor consented to the processing of their data for a response to this request.</p>
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': randomUUID(),
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        html,
        text,
        tags: [
          {name: 'source', value: 'website-contact'},
          {name: 'language', value: language.replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 256)},
        ],
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      const deliveryError = await response.text();
      console.error('Resend rejected contact email:', response.status, deliveryError);
      return NextResponse.json(
        {error: 'The request could not be delivered.'},
        {status: 502},
      );
    }

    const result = await response.json() as {id?: string};
    return NextResponse.json({ok: true, id: result.id});
  } catch (error) {
    console.error('Contact email delivery failed:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      {error: 'The request could not be delivered.'},
      {status: 502},
    );
  }
}
