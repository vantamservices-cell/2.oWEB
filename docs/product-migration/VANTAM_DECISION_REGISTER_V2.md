# VANTAM Decision Register V2

## Confirmed Product Decisions
- Homepage positioning: student-led practical support for international students in the Netherlands.
- Public ladder:
  - Relocation Orientation: €59
  - VANTAM Start: €449
  - VANTAM First Year: €899, recommended
  - VANTAM Continue: returning-client-only in this cycle
- Housing path is separate from the main ladder:
  - Housing Ready: €249
  - Housing Search Campaign: €649
- Public process stages:
  - Assess
  - Map
  - Act & coordinate
  - Verify & continue
- Contact backend categories remain exactly:
  - consultation
  - single
  - packages
  - b2b
- Public help identifiers accepted:
  - relocation_orientation
  - vantam_start
  - vantam_first_year
  - vantam_continue
  - housing_ready:<housing_type>
  - housing_campaign:<housing_type>
  - individual_service
  - urgent_situation
  - partnership

## Protected Boundaries
- No change to withdrawal routes.
- No change to legal routes.
- No Supabase schema migration.
- No Gmail/OAuth changes.
- No Terms or Privacy rewrite.
- No claim of portal/dashboard access, guaranteed outcomes, response SLA, or regulated-advice role.
- No invented VAT or completion promise.

## Copy Rules
- Keep EN, UK, and RU commercially equivalent.
- Keep housing-specific fields visible only for housing paths.
- Preserve current `help_needed` text storage.
- Remove public references to the old package names and the old three-pillars framing.
