# VANTAM website

## Run locally

**Prerequisites:** Node.js

1. Install dependencies with `npm install`.
2. Run the app with `npm run dev`.

The public pages can run without production secrets. `POST /api/contact` returns a generic `503` until its server-only configuration is available.

## Contact form

The form sends JSON to `POST /api/contact`. The Node.js route validates and minimises the payload, checks the exact request origin, applies anti-bot controls, derives an irreversible HMAC client identifier, and calls one Supabase PostgreSQL function. The browser never connects to Supabase and no Supabase key is exposed to client code.

The database function atomically enforces five requests per 15-minute bucket before storing the enquiry. Raw IP addresses, user-agent strings, arbitrary headers, complete source URLs, files, and database IDs are not stored or returned.

Required server-only environment variable names:

```env
SUPABASE_URL=
SUPABASE_SECRET_KEY=
CONTACT_RATE_LIMIT_SECRET=
CONTACT_ALLOWED_ORIGINS=https://www.vantam.xyz
```

Never add a `NEXT_PUBLIC_` prefix to these variables or commit their values.

## Database migration

The contact-storage migration is kept under `supabase/migrations/` for review and manual application through the Supabase Dashboard SQL Editor. Applying it creates locked contact and rate-limit tables, an atomic submission function, and a manual cleanup function. It does not create or activate a Cron schedule.

After the migration is applied, authorised staff can review enquiries through the Supabase Dashboard. The table is for minimal initial enquiries only and must not be used for passports, bank statements, medical information, guarantor documents, contracts, or other sensitive files.

Supabase secret keys bypass Row Level Security. RLS, revoked table privileges, and absent public policies provide defence in depth for public, `anon`, and `authenticated` access; they do not protect against misuse of the server secret. Keep that secret restricted to the server route and rotate it if exposure is suspected.
