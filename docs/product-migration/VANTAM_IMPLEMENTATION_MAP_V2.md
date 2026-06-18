# VANTAM Implementation Map V2

## Files To Update
- `data.ts`
- `app/_components/vantam-home.tsx`
- `lib/server/contact-security.ts`
- `tests/unit/contact-security.test.ts`
- `tests/e2e/contact.spec.ts`
- `tests/e2e/production-smoke.spec.ts`
- `lib/locales.ts`
- `app/[lang]/page.tsx` if metadata wiring needs no further change
- `app/globals.css`
- `.agents/product-marketing.md`
- `lib/business.ts` only if the print footer wording needs alignment

## Implementation Order
1. Update the shared data tables and copy.
2. Update the contact parser and the form prefills.
3. Update metadata and the print/save-as-PDF wording.
4. Update the tests to cover the new public help identifiers.
5. Run targeted validation and then the full check set.

## Verification Targets
- No stale public names remain in the public code.
- EN, UK, and RU stay commercially equivalent.
- Housing fields only render for housing paths.
- Contact backend categories stay unchanged.
- The diff stays minimal and scoped to the migration.
