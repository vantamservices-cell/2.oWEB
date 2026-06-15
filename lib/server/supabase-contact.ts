import 'server-only';

import {createClient} from '@supabase/supabase-js';

import type {ContactSubmission} from './contact-security';

const DATABASE_TIMEOUT_MS = 8_000;

type SubmitContactRequest = ContactSubmission & {
  clientIdentifier: string;
  privacyPolicyVersion: string;
};

export type ContactStorageResult = 'stored' | 'rate_limited' | 'unavailable';

function createTimeoutFetch(timeoutMs: number): typeof fetch {
  return async (input, init) => {
    const timeoutSignal = AbortSignal.timeout(timeoutMs);
    const signal = init?.signal
      ? AbortSignal.any([init.signal, timeoutSignal])
      : timeoutSignal;

    return fetch(input, {...init, signal, cache: 'no-store'});
  };
}

export async function submitContactRequest(
  supabaseUrl: string,
  supabaseSecretKey: string,
  submission: SubmitContactRequest,
): Promise<ContactStorageResult> {
  try {
    const supabase = createClient(supabaseUrl, supabaseSecretKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false,
      },
      global: {
        fetch: createTimeoutFetch(DATABASE_TIMEOUT_MS),
      },
    });

    const {data, error} = await supabase.rpc('submit_contact_request', {
      p_client_identifier: submission.clientIdentifier,
      p_name: submission.name,
      p_email: submission.email,
      p_inquiry_type: submission.inquiryType,
      p_message: submission.message,
      p_locale: submission.locale,
      p_source_path: submission.sourcePath,
      p_audience: submission.audience,
      p_moving_date: submission.movingDate,
      p_city_or_region: submission.cityOrRegion,
      p_housing_budget: submission.housingBudget,
      p_situation_status: submission.situationStatus,
      p_guarantor_context: submission.guarantorContext,
      p_help_needed: submission.helpNeeded,
      p_privacy_policy_version: submission.privacyPolicyVersion,
    });

    if (error || typeof data !== 'boolean') return 'unavailable';
    return data ? 'stored' : 'rate_limited';
  } catch {
    return 'unavailable';
  }
}
