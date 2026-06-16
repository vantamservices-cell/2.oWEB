import {randomUUID} from 'node:crypto';
import {NextRequest, NextResponse} from 'next/server';

import {PRIVACY_POLICY_VERSION} from '@/lib/privacy-version';
import {
  deriveClientIdentifier,
  isAllowedRequestOrigin,
  parseWithdrawalSubmission,
  readWithdrawalConfiguration,
} from '@/lib/server/withdrawal-security';
import {
  acknowledgeWithdrawalRequest,
  submitWithdrawalRequest,
} from '@/lib/server/supabase-withdrawal';
import {sendWithdrawalAcknowledgementEmail} from '@/lib/server/gmail';

export const runtime = 'nodejs';

const MAX_REQUEST_BYTES = 16 * 1024;

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: {'Cache-Control': 'no-store'},
  });
}

function logWithdrawalFailure(requestId: string, stage: string, code: string) {
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
  const configuration = readWithdrawalConfiguration();

  if (!configuration) {
    logWithdrawalFailure(requestId, 'configuration', 'WITHDRAWAL_CONFIG_INVALID');
    return jsonResponse({error: 'The withdrawal service is temporarily unavailable.'}, 503);
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

  const parsed = parseWithdrawalSubmission(payload);
  if (parsed.status === 'honeypot') return jsonResponse({ok: true});
  if (parsed.status === 'invalid') {
    return jsonResponse({error: 'Please complete all required fields.'}, 400);
  }

  const clientIdentifier = deriveClientIdentifier(request.headers, configuration.rateLimitSecret);
  if (!clientIdentifier) {
    logWithdrawalFailure(requestId, 'client_ip', 'WITHDRAWAL_CLIENT_IP_UNAVAILABLE');
    return jsonResponse({error: 'The withdrawal service is temporarily unavailable.'}, 503);
  }

  const storageResult = await submitWithdrawalRequest(
    configuration.supabaseUrl,
    configuration.supabaseSecretKey,
    {
      ...parsed.submission,
      clientIdentifier,
      privacyPolicyVersion: PRIVACY_POLICY_VERSION,
    },
  );

  if (storageResult.status === 'rate_limited') {
    return jsonResponse(
      {error: 'Too many withdrawal requests. Please try again later.'},
      429,
    );
  }

  if (storageResult.status === 'unavailable') {
    logWithdrawalFailure(requestId, 'database', 'WITHDRAWAL_STORAGE_UNAVAILABLE');
    return jsonResponse({error: 'The withdrawal service is temporarily unavailable.'}, 503);
  }

  const acknowledgementSentAt = new Date().toISOString();
  const emailDelivered = await sendWithdrawalAcknowledgementEmail({
    googleClientId: configuration.googleClientId,
    googleClientSecret: configuration.googleClientSecret,
    googleRefreshToken: configuration.googleRefreshToken,
    gmailSenderAddress: configuration.gmailSenderAddress,
    to: parsed.submission.email,
    locale: parsed.submission.locale,
    publicReference: storageResult.publicReference,
    submittedAt: storageResult.createdAt,
    contractReference: parsed.submission.contractReference,
  });

  if (!emailDelivered) {
    logWithdrawalFailure(requestId, 'email', 'WITHDRAWAL_ACKNOWLEDGEMENT_FAILED');
    return jsonResponse({
      status: 'received_pending_acknowledgement',
      publicReference: storageResult.publicReference,
      submittedAt: storageResult.createdAt,
    });
  }

  const acknowledgementUpdated = await acknowledgeWithdrawalRequest(
    configuration.supabaseUrl,
    configuration.supabaseSecretKey,
    {
      publicReference: storageResult.publicReference,
      acknowledgementSentAt,
    },
  );

  if (!acknowledgementUpdated) {
    logWithdrawalFailure(requestId, 'database', 'WITHDRAWAL_ACKNOWLEDGEMENT_UPDATE_FAILED');
  }

  return jsonResponse({
    status: 'acknowledged',
    publicReference: storageResult.publicReference,
    submittedAt: storageResult.createdAt,
  });
}
