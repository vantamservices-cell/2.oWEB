import {randomUUID} from 'node:crypto';
import {NextRequest, NextResponse} from 'next/server';

import {
  deriveClientIdentifier,
  isAllowedRequestOrigin,
  parseContactSubmission,
  readContactConfiguration,
} from '@/lib/server/contact-security';
import {submitContactRequest} from '@/lib/server/supabase-contact';
import {PRIVACY_POLICY_VERSION} from '@/lib/privacy-version';

export const runtime = 'nodejs';

const MAX_REQUEST_BYTES = 16 * 1024;

function jsonResponse(body: {ok: true} | {error: string}, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: {'Cache-Control': 'no-store'},
  });
}

function logContactFailure(requestId: string, stage: string, code: string) {
  console.error(JSON.stringify({requestId, stage, code}));
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

export async function POST(request: NextRequest) {
  const requestId = randomUUID();
  const configuration = readContactConfiguration();

  if (!configuration) {
    logContactFailure(requestId, 'configuration', 'CONTACT_CONFIG_INVALID');
    return jsonResponse({error: 'The contact service is temporarily unavailable.'}, 503);
  }

  if (!isAllowedRequestOrigin(request.headers.get('origin'), configuration.allowedOrigins)) {
    return jsonResponse({error: 'Invalid request.'}, 403);
  }

  if (!isJsonContentType(request.headers.get('content-type'))) {
    return jsonResponse({error: 'Invalid request.'}, 415);
  }

  if (exceedsDeclaredBodyLimit(request.headers.get('content-length'))) {
    return jsonResponse({error: 'The request is too large.'}, 413);
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse({error: 'Invalid request.'}, 400);
  }

  if (Buffer.byteLength(rawBody, 'utf8') > MAX_REQUEST_BYTES) {
    return jsonResponse({error: 'The request is too large.'}, 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return jsonResponse({error: 'Invalid request.'}, 400);
  }

  const parsed = parseContactSubmission(payload, configuration.allowedOrigins);
  if (parsed.status === 'honeypot') return jsonResponse({ok: true});
  if (parsed.status === 'invalid') {
    return jsonResponse({error: 'Please complete all required fields.'}, 400);
  }

  const clientIdentifier = deriveClientIdentifier(request.headers, configuration.rateLimitSecret);
  if (!clientIdentifier) {
    logContactFailure(requestId, 'client_ip', 'CONTACT_CLIENT_IP_UNAVAILABLE');
    return jsonResponse({error: 'The contact service is temporarily unavailable.'}, 503);
  }

  const storageResult = await submitContactRequest(
    configuration.supabaseUrl,
    configuration.supabaseSecretKey,
    {
      ...parsed.submission,
      clientIdentifier,
      privacyPolicyVersion: PRIVACY_POLICY_VERSION,
    },
  );

  if (storageResult === 'rate_limited') {
    return jsonResponse(
      {error: 'Too many contact requests. Please try again later.'},
      429,
    );
  }

  if (storageResult === 'unavailable') {
    logContactFailure(requestId, 'database', 'CONTACT_STORAGE_UNAVAILABLE');
    return jsonResponse({error: 'The contact service is temporarily unavailable.'}, 503);
  }

  return jsonResponse({ok: true});
}
