begin;

alter table public.contact_requests
  add column next_action_at timestamptz,
  add column internal_note text,
  add column closed_reason text,
  add column updated_at timestamptz;

update public.contact_requests
set updated_at = created_at
where updated_at is null;

do $$
begin
  if exists (
    select 1
    from public.contact_requests
    where workflow_status = 'retention_hold'
  ) then
    raise exception 'legacy retention_hold enquiries require manual review before applying this migration';
  end if;
end;
$$;

alter table public.contact_requests
  alter column updated_at set default now(),
  alter column updated_at set not null,
  alter column workflow_status set default 'new';

alter table public.contact_requests
  drop constraint if exists contact_requests_workflow_status_check,
  drop constraint if exists contact_requests_explicit_retention_reason,
  drop constraint if exists contact_requests_new_retention_limit,
  drop constraint if exists contact_requests_non_client_retention_limit;

update public.contact_requests
set workflow_status = case workflow_status
    when 'in_progress' then 'contacted'
    when 'converted_client' then 'client'
    else workflow_status
  end,
  updated_at = statement_timestamp(),
  deletion_due_at = case
    when workflow_status = 'converted_client' then null
    else deletion_due_at
  end
where workflow_status in ('in_progress', 'converted_client');

update public.contact_requests
set deletion_due_at = last_meaningful_contact_at + interval '12 months'
where workflow_status <> 'client'
  and deletion_due_at is null;

alter table public.contact_requests
  add constraint contact_requests_workflow_status_check check (
    workflow_status in (
      'new',
      'contacted',
      'consultation_proposed',
      'consultation_booked',
      'offer_sent',
      'client',
      'closed',
      'spam'
    )
  ),
  add constraint contact_requests_internal_note_limit check (
    internal_note is null
    or char_length(internal_note) <= 1000
  ),
  add constraint contact_requests_closed_reason_limit check (
    closed_reason is null
    or char_length(closed_reason) <= 300
  ),
  add constraint contact_requests_closed_reason_status check (
    closed_reason is null
    or workflow_status in ('closed', 'spam')
  ),
  add constraint contact_requests_explicit_retention_reason check (
    deletion_due_at is not null
    or workflow_status = 'client'
  ),
  add constraint contact_requests_non_client_retention_limit check (
    workflow_status = 'client'
    or deletion_due_at <= last_meaningful_contact_at + interval '12 months'
  );

comment on column public.contact_requests.workflow_status is
  'Internal CRM-lite status for the enquiry workflow. Edit only through protected operational access such as the Supabase Dashboard.';
comment on column public.contact_requests.next_action_at is
  'Optional date/time for the next operational follow-up action.';
comment on column public.contact_requests.internal_note is
  'Short operational context only, up to 1000 characters. Must not contain passports, bank information, medical information, sensitive documents, full email or WhatsApp histories, or unnecessary special-category data.';
comment on column public.contact_requests.closed_reason is
  'Short reason used only when workflow_status is closed or spam.';
comment on column public.contact_requests.updated_at is
  'Automatically refreshed when an enquiry row is updated operationally.';
comment on column public.contact_requests.last_meaningful_contact_at is
  'Update only after genuine substantive contact. The operational trigger moves deletion_due_at to last_meaningful_contact_at plus 12 months for non-client enquiries.';
comment on column public.contact_requests.deletion_due_at is
  'Non-client enquiries are retained for up to 12 months after last meaningful contact. Client enquiries keep the original enquiry row with deletion_due_at null until separate client-record retention rules are decided.';

create index if not exists contact_requests_workflow_status_idx
  on public.contact_requests (workflow_status);

create index if not exists contact_requests_next_action_at_idx
  on public.contact_requests (next_action_at)
  where next_action_at is not null;

create or replace function public.set_contact_request_operational_timestamps()
returns trigger
language plpgsql
security invoker
set search_path = pg_catalog
as $$
begin
  new.updated_at := statement_timestamp();

  if new.last_meaningful_contact_at is distinct from old.last_meaningful_contact_at then
    if new.last_meaningful_contact_at < new.created_at then
      raise exception 'last_meaningful_contact_at must not be before created_at';
    end if;

    if new.last_meaningful_contact_at > statement_timestamp() then
      raise exception 'last_meaningful_contact_at must not be in the future';
    end if;

    if new.workflow_status <> 'client' then
      new.deletion_due_at := new.last_meaningful_contact_at + interval '12 months';
    end if;
  end if;

  if new.workflow_status = 'client' then
    new.deletion_due_at := null;
  elsif new.deletion_due_at is null then
    new.deletion_due_at := new.last_meaningful_contact_at + interval '12 months';
  end if;

  return new;
end;
$$;

comment on function public.set_contact_request_operational_timestamps() is
  'Internal trigger function only. Keeps updated_at current and preserves the 12-month deletion_due_at rule when last_meaningful_contact_at is deliberately changed.';

revoke all on function public.set_contact_request_operational_timestamps() from public, anon, authenticated, service_role;

drop trigger if exists contact_requests_operational_timestamps on public.contact_requests;
create trigger contact_requests_operational_timestamps
  before update on public.contact_requests
  for each row
  execute function public.set_contact_request_operational_timestamps();

alter table public.contact_requests enable row level security;

revoke all on table public.contact_requests from public, anon, authenticated, service_role;
revoke all on table public.contact_rate_limits from public, anon, authenticated, service_role;

commit;
