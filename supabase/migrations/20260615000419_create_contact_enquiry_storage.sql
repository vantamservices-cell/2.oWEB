begin;

create extension if not exists pgcrypto with schema extensions;

create table public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (
    char_length(email) between 3 and 254
    and email = lower(email)
    and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]{2,}$'
  ),
  inquiry_type text not null check (inquiry_type in ('consultation', 'single', 'packages', 'b2b')),
  message text not null check (char_length(message) between 1 and 5000),
  locale text not null check (locale in ('en', 'uk', 'ru')),
  source_path text not null check (
    char_length(source_path) between 1 and 300
    and source_path like '/%'
    and source_path not like '//%'
    and position('?' in source_path) = 0
    and position('#' in source_path) = 0
  ),
  audience text check (audience in ('student', 'professional', 'family', 'organisation')),
  moving_date date,
  city_or_region text check (char_length(city_or_region) between 1 and 80),
  housing_budget text check (housing_budget in ('under-700', '700-1000', '1000-1500', '1500-plus', 'not-sure')),
  situation_status text check (situation_status in ('before', 'after', 'found_housing', 'need_housing', 'organisation')),
  guarantor_context text check (guarantor_context in ('yes', 'maybe', 'no')),
  help_needed text check (char_length(help_needed) between 1 and 120),
  workflow_status text not null default 'new' check (
    workflow_status in ('new', 'in_progress', 'converted_client', 'closed', 'spam', 'retention_hold')
  ),
  privacy_policy_version text not null check (char_length(privacy_policy_version) between 1 and 40),
  privacy_acknowledged_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  last_meaningful_contact_at timestamptz not null default now(),
  deletion_due_at timestamptz default (now() + interval '12 months'),
  constraint contact_requests_explicit_retention_reason check (
    deletion_due_at is not null
    or workflow_status in ('converted_client', 'retention_hold')
  ),
  constraint contact_requests_contact_chronology check (
    last_meaningful_contact_at >= created_at
  ),
  constraint contact_requests_deletion_chronology check (
    deletion_due_at is null
    or deletion_due_at >= last_meaningful_contact_at
  ),
  constraint contact_requests_new_retention_limit check (
    workflow_status <> 'new'
    or deletion_due_at <= created_at + interval '12 months'
  ),
  constraint contact_requests_non_client_retention_limit check (
    workflow_status in ('converted_client', 'retention_hold')
    or deletion_due_at <= last_meaningful_contact_at + interval '12 months'
  )
);

comment on table public.contact_requests is
  'Initial enquiries only. Not approved for passports, bank statements, medical information, guarantor documents, contracts, or other sensitive files.';
comment on column public.contact_requests.deletion_due_at is
  'A null value requires an explicit converted_client or retention_hold workflow status; null must not silently mean indefinite retention.';

create index contact_requests_workflow_status_idx
  on public.contact_requests (workflow_status);
create index contact_requests_created_at_idx
  on public.contact_requests (created_at desc);
create index contact_requests_deletion_due_at_idx
  on public.contact_requests (deletion_due_at)
  where deletion_due_at is not null;

create table public.contact_rate_limits (
  client_identifier text not null check (client_identifier ~ '^[0-9a-f]{64}$'),
  window_started_at timestamptz not null,
  request_count integer not null check (request_count > 0),
  expires_at timestamptz not null,
  primary key (client_identifier, window_started_at),
  constraint contact_rate_limits_expiry check (expires_at > window_started_at)
);

comment on table public.contact_rate_limits is
  'Durable contact-form rate-limit buckets. client_identifier is an application-generated HMAC and must never contain a raw IP address.';

create index contact_rate_limits_expires_at_idx
  on public.contact_rate_limits (expires_at);

alter table public.contact_requests enable row level security;
alter table public.contact_rate_limits enable row level security;

revoke all on table public.contact_requests from public, anon, authenticated, service_role;
revoke all on table public.contact_rate_limits from public, anon, authenticated, service_role;

create or replace function public.submit_contact_request(
  p_client_identifier text,
  p_name text,
  p_email text,
  p_inquiry_type text,
  p_message text,
  p_locale text,
  p_source_path text,
  p_audience text,
  p_moving_date date,
  p_city_or_region text,
  p_housing_budget text,
  p_situation_status text,
  p_guarantor_context text,
  p_help_needed text,
  p_privacy_policy_version text
)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog
as $$
declare
  v_now timestamptz := statement_timestamp();
  v_window_started_at timestamptz;
  v_request_count integer;
begin
  if p_client_identifier !~ '^[0-9a-f]{64}$' then
    raise exception 'invalid contact rate-limit identifier';
  end if;

  v_window_started_at := date_bin(
    interval '15 minutes',
    v_now,
    timestamptz '2001-01-01 00:00:00+00'
  );

  insert into public.contact_rate_limits (
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
    request_count = public.contact_rate_limits.request_count + 1,
    expires_at = excluded.expires_at
  returning request_count into v_request_count;

  if v_request_count > 5 then
    return false;
  end if;

  insert into public.contact_requests (
    name,
    email,
    inquiry_type,
    message,
    locale,
    source_path,
    audience,
    moving_date,
    city_or_region,
    housing_budget,
    situation_status,
    guarantor_context,
    help_needed,
    privacy_policy_version,
    privacy_acknowledged_at,
    created_at,
    last_meaningful_contact_at,
    deletion_due_at
  ) values (
    p_name,
    lower(p_email),
    p_inquiry_type,
    p_message,
    p_locale,
    p_source_path,
    p_audience,
    p_moving_date,
    p_city_or_region,
    p_housing_budget,
    p_situation_status,
    p_guarantor_context,
    p_help_needed,
    p_privacy_policy_version,
    v_now,
    v_now,
    v_now,
    v_now + interval '12 months'
  );

  return true;
end;
$$;

comment on function public.submit_contact_request(
  text, text, text, text, text, text, text, text, date, text, text, text, text, text, text
) is
  'Atomically consumes a durable 5-per-15-minute rate-limit bucket and stores an initial enquiry. The Supabase secret key maps to service_role and bypasses RLS, so application validation and strict secret handling remain mandatory.';

revoke all on function public.submit_contact_request(
  text, text, text, text, text, text, text, text, date, text, text, text, text, text, text
) from public, anon, authenticated;
grant execute on function public.submit_contact_request(
  text, text, text, text, text, text, text, text, date, text, text, text, text, text, text
) to service_role;

create or replace function public.cleanup_contact_storage()
returns void
language plpgsql
security invoker
set search_path = pg_catalog
as $$
begin
  delete from public.contact_requests
  where deletion_due_at is not null
    and deletion_due_at < statement_timestamp();

  delete from public.contact_rate_limits
  where expires_at < statement_timestamp();
end;
$$;

comment on function public.cleanup_contact_storage() is
  'Security-invoker cleanup that idempotently deletes only due enquiry rows and expired contact rate-limit buckets. Run manually as the authorised database owner or schedule separately after Supabase Cron availability is verified.';

revoke all on function public.cleanup_contact_storage() from public, anon, authenticated, service_role;

commit;
