# Supabase Enquiry Workflow

Use the protected Supabase Dashboard for the minimal VANTAM enquiry workflow. There is no custom CRM dashboard or public admin API.

1. Check new enquiries daily in `contact_requests`.
2. Filter by `workflow_status = 'new'`.
3. Update `workflow_status` after real actions only: `contacted`, `consultation_proposed`, `consultation_booked`, `offer_sent`, `client`, `closed`, or `spam`.
4. Set `next_action_at` when a follow-up date is useful.
5. Use `internal_note` only for short operational context. Do not paste long conversations.
6. Update `last_meaningful_contact_at` only after genuine substantive contact that already occurred. This resets `deletion_due_at` to 12 months later for non-client enquiries.
7. Close enquiries that will not continue, or mark obvious junk as `spam`.
8. Never upload or paste passports, bank information, medical information, sensitive documents, or unnecessary special-category data.
9. Handle deletion requests promptly by finding the enquiry and deleting or escalating it according to the current privacy process.
10. Avoid uncontrolled CSV exports. Delete local exports when they are no longer needed.

Never use `retention_hold` as an operational status. Any legacy `retention_hold` record must be reviewed before applying the workflow migration.

Mark `client` only after an actual service relationship is formed. `client` keeps the original enquiry record and does not automatically delete it. Separate client-record retention rules still need a later decision.
