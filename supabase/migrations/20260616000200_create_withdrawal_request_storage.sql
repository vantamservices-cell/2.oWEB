begin;

create extension if not exists pgcrypto with schema extensions;

create table public.withdrawal_requests (
  id uuid primary key default gen_random_uuid(),
  public_reference text not null unique default (
    'WR-' || upper(substring(replace(gen_random_uuid()::text, '-', ''), 1, 16))
  ),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (
    char_length(email) between 3 and 254
    and email = lower(email)
    and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]{2,}$'
  ),
  contract_reference text not null check (char_length(contract_reference) between 1 and 120),
  service_description text not null check (char_length(service_description) between 1 and 160),
  locale text not null check (locale in ('en', 'uk', 'ru')),
  status text not null default 'received' check (
    status in ('received', 'acknowledged', 'under_review', 'processed', 'closed')
  ),
  acknowledgement_sent_at timestamptz,
  privacy_policy_version text not null check (char_length(privacy_policy_version) between 1 and 40),
  created_at timestamptz not null default now()
);

comment on table public.withdrawal_requests is
  'Online withdrawal-request records only. Do not store raw IP addresses, file uploads, client documents, or message-body logs. Retention is unresolved until the applicable contract/claim category is established.';
comment on column public.withdrawal_requests.public_reference is
  'Non-sequential public reference shown to the user and used for operational lookup.';
comment on column public.withdrawal_requests.status is
  'Internal workflow status only. Edit through protected operational access or the controlled server function.';
comment on column public.withdrawal_requests.acknowledgement_sent_at is
  'Recorded only after the Gmail acknowledgement is delivered.';
comment on column public.withdrawal_requests.privacy_policy_version is
  'Privacy Policy version in effect when the request was submitted.';

create index withdrawal_requests_created_at_idx
  on public.withdrawal_requests (created_at desc);

create index withdrawal_requests_status_created_at_idx
  on public.withdrawal_requests (status, created_at desc);

create table public.withdrawal_rate_limits (
  client_identifier text not null check (client_identifier ~ '^[0-9a-f]{64}$'),
  window_started_at timestamptz not null,
  request_count integer not null check (request_count > 0),
  expires_at timestamptz not null,
  primary key (client_identifier, window_started_at),
  constraint withdrawal_rate_limits_expiry check (expires_at > window_started_at)
);

comment on table public.withdrawal_rate_limits is
  'Durable withdrawal-request rate-limit buckets. client_identifier is an application-generated HMAC and must never contain a raw IP address.';

create index withdrawal_rate_limits_expires_at_idx
  on public.withdrawal_rate_limits (expires_at);

alter table public.withdrawal_requests enable row level security;
alter table public.withdrawal_rate_limits enable row level security;

revoke all on table public.withdrawal_requests from public, anon, authenticated, service_role;
revoke all on table public.withdrawal_rate_limits from public, anon, authenticated, service_role;

create or replace function public.submit_withdrawal_request(
  p_client_identifier text,
  p_name text,
  p_email text,
  p_contract_reference text,
  p_service_description text,
  p_locale text,
  p_privacy_policy_version text
)
returns jsonb
language plpgsql
security definer
set search_path = pg_catalog
as $$
declare
  v_now timestamptz := statement_timestamp();
  v_window_started_at timestamptz;
  v_request_count integer;
  v_public_reference text;
begin
  if p_client_identifier !~ '^[0-9a-f]{64}$' then
    raise exception 'invalid withdrawal rate-limit identifier';
  end if;

  v_window_started_at := date_bin(
    interval '15 minutes',
    v_now,
    timestamptz '2001-01-01 00:00:00+00'
  );

  insert into public.withdrawal_rate_limits (
    client_identifier,
    window_started_at,
    request_count,
    expires_at
  ) values (
    p_client_identifier,
    v_window_started_at,
    1,
    v_window_started_at + interval '15 minutes'
  )
  on conflict (client_identifier, window_started_at)
  do update set
    request_count = public.withdrawal_rate_limits.request_count + 1,
    expires_at = excluded.expires_at
  returning request_count into v_request_count;

  if v_request_count > 5 then
    return jsonb_build_object('stored', false);
  end if;

  insert into public.withdrawal_requests (
    name,
    email,
    contract_reference,
    service_description,
    locale,
    status,
    privacy_policy_version,
    acknowledgement_sent_at,
    created_at
  ) values (
    p_name,
    lower(p_email),
    p_contract_reference,
    p_service_description,
    p_locale,
    'received',
    p_privacy_policy_version,
    null,
    v_now
  )
  returning public_reference into v_public_reference;

  return jsonb_build_object(
    'stored',
    true,
    'public_reference',
    v_public_reference,
    'created_at',
    v_now
  );
end;
$$;

comment on function public.submit_withdrawal_request(
  text, text, text, text, text, text, text
) is
  'Atomically consumes a durable 5-per-15-minute withdrawal-request rate-limit bucket and stores a withdrawal request for protected server-side processing.';

revoke all on function public.submit_withdrawal_request(
  text, text, text, text, text, text, text
) from public, anon, authenticated;
grant execute on function public.submit_withdrawal_request(
  text, text, text, text, text, text, text
) to service_role;

create or replace function public.cleanup_withdrawal_storage()
returns void
language plpgsql
security invoker
set search_path = pg_catalog
as $$
begin
  delete from public.withdrawal_rate_limits
  where expires_at < statement_timestamp();
end;
$$;

comment on function public.cleanup_withdrawal_storage() is
  'Internal maintenance function. Removes expired withdrawal rate-limit rows only.';

revoke all on function public.cleanup_withdrawal_storage() from public, anon, authenticated, service_role;

commit;
