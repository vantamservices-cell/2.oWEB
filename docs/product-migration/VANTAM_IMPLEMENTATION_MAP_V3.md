# VANTAM Implementation Map V3

## Primary Write Surfaces
- `.agents/product-marketing.md`
- `docs/product-migration/VANTAM_PRODUCT_ARCHITECTURE_V3.md`
- `docs/product-migration/VANTAM_WEBSITE_CONTENT_MASTER_V3.md`
- `docs/product-migration/VANTAM_IMPLEMENTATION_MAP_V3.md`
- `data.ts`
- `app/_components/vantam-home.tsx`
- `app/globals.css` only if needed for layout preservation
- `lib/server/contact-security.ts`
- `lib/locales.ts` if public metadata text changes materially
- `tests/unit/contact-security.test.ts`
- `tests/e2e/contact.spec.ts`
- `tests/e2e/production-smoke.spec.ts` only if required

## Protected Surfaces
Leave unchanged unless directly required:
- withdrawal flows
- privacy content and routes
- terms
- legal navigation
- Gmail/OAuth
- sitemap
- robots
- Supabase storage architecture
- `.gitignore`

## Authoritative Data Decisions
- `data.ts` becomes the main public content source for products, situations, service groups, Student Life Map preview, FAQ, scenarios, and contact option labels
- Remove duplicated authoritative public copy from `app/_components/vantam-home.tsx` where practical
- Keep EN, UK, and RU synchronized in the same pass

## UI Composition Decisions
- Preserve current documentary calm layout, hero composition, light/dark theme behavior, restrained motion, and short-card plus expanded-detail pattern
- Reorder sections to the final V3 order
- Keep `Start vs First Year` before consultation and the longer service catalogue
- Separate `Student Life Map Preview` from `How VANTAM works`
- Replace testimonial-style carousel content with the eight approved situations
- Keep cards compact and use structured detail blocks instead of dense comparison tables

## Contact And Validation Decisions
- Preserve top-level inquiry buckets: `consultation`, `packages`, `single`, `b2b`
- Accept only the approved identifiers from Product Architecture V3
- Housing fields render only for `housing_ready:*` and `housing_campaign:*`
- `vantam_continue` remains valid on the backend but is only exposed in returning-client FAQ/contact contexts
- Reject malformed or unknown help identifiers
- Preserve origin checks, honeypot, form timing, sanitisation, rate limiting, and no-PII logging
- Keep current text-based `help_needed` storage; no DB migration

## Required Public Identifier Map
- consultation: `relocation_orientation`
- packages:
- `vantam_start`
- `vantam_first_year`
- `vantam_continue`
- `housing_ready:<housing_type>`
- `housing_campaign:<housing_type>`
- single:
- `individual_service:official_letter_action`
- `individual_service:administration_problem_support`
- `individual_service:lost_document_coordination`
- `individual_service:university_administration_case`
- `individual_service:academic_issue_support`
- `individual_service:internship_administration`
- `individual_service:work_insurance_transition`
- `individual_service:employment_administration_check`
- `individual_service:cak_svb_case_support`
- `individual_service:housing_offer_contract_check`
- `individual_service:landlord_problem_evidence_pack`
- `individual_service:move_out_deposit_support`
- `individual_service:emergency_relocation_coordination`
- `individual_service:urgent_situation_assessment`
- `individual_service:complex_urgent_case`
- `individual_service:graduation_orientation_year_roadmap`
- `individual_service:moving_leaving_netherlands`
- b2b: `partnership`

## Implementation Order
1. Create the V3 docs
2. Update `.agents/product-marketing.md`
3. Rebuild product/system data in `data.ts`
4. Update `app/_components/vantam-home.tsx` to the V3 section order and content model
5. Make minimal CSS adjustments in `app/globals.css`
6. Update contact prefill and server parsing in `lib/server/contact-security.ts`
7. Update metadata text in `lib/locales.ts` if needed
8. Update print/save wording and exported package overview content
9. Search for stale public product names and retired labels
10. Update tests and run the required verification set

## Verification Targets
- Final homepage section order matches the V3 brief exactly
- Hero addresses both pre-arrival and already-resident students
- `VANTAM First Year` is the only recommended flagship
- Only one public consultation card remains
- Housing is separated from the main package comparison
- Individual services use four blocks and the approved service list
- Student Life Map shows seven areas and six statuses without portal implication
- Typical situations show exactly eight approved scenarios
- Contact prefills and parsing match the approved identifiers
- EN, UK, and RU are commercially identical
- No stale `Parent briefing`, `Priority situation call`, `After assessment`, public workload hours, or public hourly-rate language remains in active public code
