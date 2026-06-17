# Cycle 1 Production Verification

Required production variables:
- `SUPABASE_URL`
- `SUPABASE_SECRET_KEY`
- `CONTACT_RATE_LIMIT_SECRET`
- `CONTACT_ALLOWED_ORIGINS`
- `WITHDRAWAL_RATE_LIMIT_SECRET`
- `WITHDRAWAL_ALLOWED_ORIGINS`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_REFRESH_TOKEN`
- `GMAIL_SENDER_ADDRESS`

Migration verification:
- `supabase migration list`

Local checks:
- `npm run lint`
- `npm run test:unit`
- `npm run test:e2e`
- `npm run build`
- Local E2E remained blocked here because the test runner could not bind `127.0.0.1:3000`.
- GitHub Actions fallback workflow was added for `npm ci`, Playwright browser install, lint, unit, E2E, and build.

Gated production smoke:
- `RUN_PRODUCTION_SMOKE=1 PLAYWRIGHT_BASE_URL=https://www.vantam.xyz VANTAM_SMOKE_TEST_EMAIL=<external mailbox> npm run test:production-smoke`

Focused Vercel log check:
- Inspect only the smoke-test window for `/api/contact` and `/api/withdrawal`, then search for the synthetic marker and verify no secrets, raw IP addresses, or full request bodies appear in application logs.

Synthetic cleanup:
- Remove only the exact synthetic `CYCLE1-SMOKE-<timestamp>` contact row and withdrawal row after confirming the matching public reference and mailbox submission. Never use a broad delete.

Pass/fail checklist:
- [ ] Vercel production variables verified by name only
- [ ] Local and remote Supabase migration history matched
- [ ] Local lint passed
- [ ] Local unit tests passed
- [ ] Local E2E tests passed
- [ ] Local build passed
- [ ] GitHub Actions fallback workflow added for E2E execution evidence
- [ ] Production contact smoke test passed
- [ ] Production withdrawal smoke test passed
- [ ] Acknowledgement email received
- [ ] Logs stayed free of secrets and raw PII
- [ ] Synthetic records cleaned up safely

Final results:
- `HEAD` at start and end of this cycle: `0d9d629`
- Remote `main` at verification time: `f901e38`
- Vercel auth and link: inaccessible here; `vercel` could not complete login and no local `.vercel` link file was present
- Vercel production variable names: not verified because Vercel auth was unavailable
- Supabase link and migration history: inaccessible here; `supabase migration list` reported `Cannot find project ref. Have you run supabase link?`
- Production deployment: not verified from this environment
- Production smoke test: not run
- Gmail acknowledgement: not verified
- Logs: not checked because production smoke did not run
- Synthetic cleanup: none required
- Remaining blocker: local Playwright E2E cannot start because the test runner cannot bind `127.0.0.1:3000` in this environment
