import 'server-only';

import {createClient} from '@supabase/supabase-js';

import type {WithdrawalSubmission} from './withdrawal-security';

const DATABASE_TIMEOUT_MS = 8_000;

type SubmitWithdrawalRequest = WithdrawalSubmission & {
  clientIdentifier: string;
  privacyPolicyVersion: string;
};

export type WithdrawalStorageResult =
  | {status: 'stored'; publicReference: string; createdAt: string}
  | {status: 'rate_limited'}
  | {status: 'unavailable'};

type WithdrawalAcknowledgeUpdate = {
  publicReference: string;
  acknowledgementSentAt: string;
};

function createTimeoutFetch(timeoutMs: number): typeof fetch {
  return async (input, init) => {
    const timeoutSignal = AbortSignal.timeout(timeoutMs);
    const signal = init?.signal
      ? AbortSignal.any([init.signal, timeoutSignal])
      : timeoutSignal;

    return fetch(input, {...init, signal, cache: 'no-store'});
  };
}

function createAdminClient(supabaseUrl: string, supabaseSecretKey: string) {
  return createClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
    global: {
      fetch: createTimeoutFetch(DATABASE_TIMEOUT_MS),
    },
  });
}

export async function submitWithdrawalRequest(
  supabaseUrl: string,
  supabaseSecretKey: string,
  submission: SubmitWithdrawalRequest,
): Promise<WithdrawalStorageResult> {
  try {
    const supabase = createAdminClient(supabaseUrl, supabaseSecretKey);
    const {data, error} = await supabase.rpc('submit_withdrawal_request', {
      p_client_identifier: submission.clientIdentifier,
      p_name: submission.name,
      p_email: submission.email,
      p_contract_reference: submission.contractReference,
      p_service_description: submission.serviceDescription,
      p_locale: submission.locale,
      p_privacy_policy_version: submission.privacyPolicyVersion,
    });

    if (error || !data || typeof data !== 'object' || Array.isArray(data)) return {status: 'unavailable'};

    const result = data as Partial<{stored: boolean; public_reference: string; created_at: string}>;
    if (result.stored === false) return {status: 'rate_limited'};
    if (result.stored !== true || typeof result.public_reference !== 'string' || typeof result.created_at !== 'string') {
      return {status: 'unavailable'};
    }

    return {
      status: 'stored',
      publicReference: result.public_reference,
      createdAt: result.created_at,
    };
  } catch {
    return {status: 'unavailable'};
  }
}

export async function acknowledgeWithdrawalRequest(
  supabaseUrl: string,
  supabaseSecretKey: string,
  update: WithdrawalAcknowledgeUpdate,
) {
  try {
    const supabase = createAdminClient(supabaseUrl, supabaseSecretKey);
    const {error} = await supabase
      .from('withdrawal_requests')
      .update({
        status: 'acknowledged',
        acknowledgement_sent_at: update.acknowledgementSentAt,
      })
      .eq('public_reference', update.publicReference)
      .eq('status', 'received');

    return !error;
  } catch {
    return false;
  }
}
