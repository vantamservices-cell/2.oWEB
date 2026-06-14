# VANTAM Next Cycle Preflight

Date: 2026-06-14

This document is a working map for the next development cycle. It reflects the current repository and the live production site, and it deliberately avoids implementation decisions that still need owner confirmation.

## 1. Current Architecture Map

### Stack and routing

- Next.js: `15.4.9` in `package.json`
- Routing model: App Router only
- Public routes currently present:
  - `/`
  - `/api/contact`
  - `/robots.txt`
  - `/sitemap.xml`
- No locale route folders exist yet (`app/uk`, `app/ru`, `app/en` do not exist)
- No middleware, route groups, or feature-flagged public pages were found

### Content and translation storage

- Homepage content is primarily stored in `data.ts`
- The homepage UI is rendered from one client component in `app/page.tsx`
- Language strings live in `data.ts` inside `DICTIONARY`
- Per-language content also lives in `data.ts` for:
  - `SINGLE_SERVICES`
  - `CONSULTATIONS_STORE`
  - `PREMIUM_PACKAGES`
  - `FAQS_STORE`
  - `PITFALLS`
  - `BLUEPRINT_CHECKLIST`
  - `TESTIMONIALS`
- The visible homepage uses local React state `lang` in `app/page.tsx`
- The current switcher updates state only; it does not change the URL and does not use `localStorage`

### Components and layout

- Root layout: `app/layout.tsx`
- Global styling: `app/globals.css`
- Local helper components inside `app/page.tsx`:
  - `BrandLogo`
  - `HeroScene`
  - `MessageIcon`
- Shared utility file exists at `utils.ts`, but it is not central to the homepage flow

### Metadata, sitemap, robots

- Metadata is currently defined in `app/layout.tsx`
- Canonical is set in `app/layout.tsx`
- Open Graph and Twitter metadata are also in `app/layout.tsx`
- Robots implementation: `app/robots.ts`
- Sitemap implementation: `app/sitemap.ts`
- Current production hostname in those files is `https://www.vantam.xyz`

### Form and API path

- The public enquiry form lives in `app/page.tsx`
- It submits with `fetch('/api/contact')`
- API route: `app/api/contact/route.ts`
- The route uses Node runtime and sends email through Resend
- The form currently preserves selected language, situation, service/package context and qualification fields in the payload

### Environment variables

- Current documented env vars:
  - `RESEND_API_KEY`
  - `CONTACT_TO_EMAIL`
  - `CONTACT_FROM_EMAIL`
- `.env.example` documents them
- `.env.local` exists locally and is gitignored

### Analytics and monitoring

- No product analytics library is wired into the app
- No Vercel Analytics or Speed Insights integration is present in the code
- No Sentry or similar error monitoring integration is present
- Next.js/OpenTelemetry packages appear only as transitive dependencies, not as app instrumentation

### Styling and reusable layout files

- `app/globals.css` contains the full visual system, responsive rules, print styles and dark theme
- The page is a single long-form marketing homepage with all sections in one file

## 2. Multilingual Routing Plan

### Recommended route structure

- Use real public subpaths:
  - `/uk`
  - `/ru`
  - `/en`
- Keep one shared homepage implementation and parameterize it by `lang`
- Do not duplicate the full homepage three times

### Root route behavior

- Recommended behavior: redirect `/` to `/uk`
- Use `/` only as a redirect or x-default entry, not as a second indexable Ukrainian page
- This avoids duplicate-content pressure and keeps a single canonical per language

### Required layout changes

- Move the current language-dependent homepage content behind a route-aware page component
- Add a shared layout or wrapper that reads `params.lang`
- Keep the current visual design and component structure
- Preserve client state only for non-language UI state such as theme, modal state and section toggles

### Server-rendered `html lang`

- Set `html lang` from the active route in the layout for each locale
- The current hardcoded `<html lang="uk">` in `app/layout.tsx` must become route-aware

### Metadata, canonicals, hreflang

- Each locale page should self-canonical
- Canonical examples:
  - `https://www.vantam.xyz/uk`
  - `https://www.vantam.xyz/ru`
  - `https://www.vantam.xyz/en`
- Add reciprocal hreflang alternates for all three language URLs
- Include the page itself in its hreflang set
- Add `x-default` only if `/` remains a real fallback entry
- Keep the production hostname consistent everywhere

### Sitemap and robots

- Sitemap should list only the real public locale URLs
- Do not add client-state-only URLs
- Robots should keep referencing the production sitemap

### Language switcher behavior

- Replace client-state language switching with route navigation
- The switcher should link to the matching locale URL
- Direct refresh and shared links should work because the locale becomes part of the URL
- Do not retain `localStorage` as the language source of truth

### Migration risks

- The current page is one large client component, so the route split will touch many strings and handlers at once
- The biggest risk is duplicating the page or leaving mixed server/client language sources
- The smallest safe migration keeps the data sources shared and changes only the route boundary plus metadata

### Expected files to change later

- `app/page.tsx`
- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `data.ts`
- likely new locale route files such as `app/[lang]/page.tsx` and `app/[lang]/layout.tsx`

## 3. Contacts And Public Business Identity

### Data that already exists in the repository

- Brand name: `VANTAM`
- Registered business name: `VANTAM Services`
- KvK number: `42080058`
- Operating location: `The Hague, Netherlands`
- WhatsApp Business display number: `+31 6 42 28 81 70`
- WhatsApp base URL: `https://wa.me/31642288170`
- Contact form and enquiry path already exist
- Public service pillars and pricing language already exist
- The package print footer should reuse the confirmed public business identity instead of hardcoded fallback text

### Data that must be confirmed by the owner

| Item | Needed for |
|---|---|
| WhatsApp number | contact point schema, footer, shared contact area |
| Registered business name | legal pages, footer, invoices |
| KvK number | legal footer, public identity |
| Operating city or region | contact page, footer, localized metadata |
| Response-time wording | contact form, footer, service pages |
| Complaint contact | terms, privacy, footer or support page |

### Data that must not be invented

- Legal entity name if the owner has not confirmed it
- VAT numbers
- Office address
- Complaint procedure details
- Any claim of office presence, licensing, guarantees or partner status

### Safest reusable configuration location

- Create one shared business identity source of truth, not scattered constants
- Best place: a dedicated config module such as a new shared file under `lib/`
- That source should feed:
  - metadata
  - footer
  - contact area
  - schema
  - legal pages

## 4. Legal And Consent Integration

### Minimum document architecture

- One Privacy Policy page
- One Terms / Service Conditions page
- Separate Cookie Policy only if future analytics or cookies make it necessary
- Payment, cancellation and refund terms can live in Terms if that is the owner’s preference and legal review supports it

### What the current site appears to need

- The current site already collects enquiry data and sends it to email
- No marketing analytics or third-party cookie stack is visible in the code
- That means the first legal implementation can likely stay lean:
  - Privacy Policy
  - Terms / Service Conditions

### Where the legal UI should connect

- Footer links in `app/page.tsx`
- A privacy acknowledgement line in the contact form in `app/page.tsx` that links to the matching locale policy
- Locale privacy routes at `/en/privacy`, `/uk/privacy`, and `/ru/privacy`
- Potential metadata links in `app/layout.tsx`

### Acknowledgement needed for an enquiry

- A privacy acknowledgement statement for using the submitted data to reply to the enquiry
- Keep marketing consent separate if marketing ever becomes a separate action
- Keep the current honeypot hidden from users

### Owner decisions still required

- Whether the payment, cancellation and refund rules belong in Terms or in a separate policy page
- Whether the site needs a Cookie Policy at all
- Whether analytics will be added and, if so, what tracking consent is required

## 5. Form And API Reliability

### Current submission flow

- Client form in `app/page.tsx`
- Submit handler calls `POST /api/contact`
- Server route in `app/api/contact/route.ts`
- Delivery provider: Resend

### Secrets and env vars

- `RESEND_API_KEY` is required server-side
- `CONTACT_FROM_EMAIL` is required server-side
- `CONTACT_TO_EMAIL` is required server-side
- No secret should be moved to the client or prefixed with `NEXT_PUBLIC_`

### Validation and safety

- Client-side required fields:
  - name
  - email
  - message
  - consent
- Server-side checks:
  - origin match
  - honeypot field `website`
  - email pattern
  - required fields
  - IP-based rate limiting
- Server sanitization:
  - `cleanText`
  - `cleanSingleLine`
  - `escapeHtml`

### Delivery and reply logic

- Recipient: `CONTACT_TO_EMAIL`
- Reply-To: visitor email
- Logging: errors only, not the full enquiry content

### Current anti-spam and duplicate protection

- Hidden honeypot field
- IP rate limit window in memory
- Resend idempotency key per request
- Client disables submit while sending

### Known production failure points

- Missing `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, or `CONTACT_TO_EMAIL`
- Invalid verified sender at Resend
- Reverse-proxy origin mismatch
- Rate limiting behind shared IPs
- Temporary provider outage
- In-memory rate-limit reset on deployment

### Smallest safe reliability sequence for next cycle

1. Confirm the public recipient and sender identity
2. Add a durable success/error logging convention
3. Tighten server validation and user-facing errors
4. Keep the honeypot and rate limit
5. Add duplicate prevention only if the owner sees resend duplication in real logs
6. Add a fallback contact path only if the owner wants a non-email recovery path

### Production test procedure for tomorrow

1. Confirm `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL` in production env
2. Open the homepage in each language route once routing exists
3. Submit one normal enquiry with valid data
4. Confirm the form shows success
5. Confirm the message appears in the destination mailbox
6. Confirm Reply-To is the visitor email
7. Confirm the hidden honeypot still returns success without delivery
8. Confirm invalid origin and missing required fields fail cleanly

## 6. Security Preflight

### Launch blocker

- `.env.local` exists locally and contains real secrets in the workspace
- That is fine for local development, but it must remain uncommitted and out of the public site

### Should fix

- No client-visible env vars are present in the repo, which is good
- The API route is the only place that should know the Resend key
- No dangerous HTML rendering is obvious in the frontend
- The API email body uses `escapeHtml`, which is correct
- No third-party scripts are wired into the homepage
- No explicit security headers are defined in the repo

### Optional hardening

- Add security headers later if the deployment policy supports them
- Consider a dedicated error-monitoring tool only after owner approval
- Review any future external links if WhatsApp or phone links are added

### Current secret-handling references

- `.gitignore` excludes `.env.*`
- `README.md` documents the required contact env vars
- `app/api/contact/route.ts` reads secrets only server-side

## 7. Structured Data And AI Search Visibility

### What is missing today

- No JSON-LD
- No `llms.txt`
- No crawler-rule file
- No AI-search-specific architecture

### Future schema map

| Schema type | When to add |
|---|---|
| `Organization` | after business name, city/region, contact point and brand identity are confirmed |
| `WebSite` | once routing and canonical host are stable |
| `Service` | for confirmed public services with stable names and descriptions |
| `ContactPoint` | after WhatsApp/phone/response-time details are confirmed |
| `Offer` | only for confirmed public prices and exact terms |
| `BreadcrumbList` | only after real multi-page navigation exists |
| `FAQPage` | only where the visible FAQ content stays stable |

### Required verified business values before schema can ship

- Legal or registered business name
- Canonical production hostname
- Contact email
- Optional phone / WhatsApp
- Operating city or region
- Responsible person or founder, if the owner wants it public
- Confirmed public prices
- Confirmed response-time or support-window wording

### AI-search visibility

- Keep the public site crawlable with standard HTML and normal robots rules
- Defer `llms.txt` and any crawler separation rules until the route and legal architecture are stable
- Future AI-referral tracking should be analytics-driven, not content-driven

## 8. Analytics And Monitoring Plan

### Current state

- No analytics package is wired into the app
- No event collection helper exists
- No production monitoring integration is present

### Minimum useful event set

- `enquiry_started`
- `enquiry_submitted`
- `enquiry_failed`
- `whatsapp_click`
- `email_click`
- `service_selected`
- `consultation_selected`
- `package_selected`
- `situation_selected`
- `language_changed`
- `calculator_completed`
- `planner_completed`

### Payload rules

- Do not send:
  - name
  - email
  - telephone
  - free-text message
  - uploaded documents
  - precise housing situation
- Send only non-PII context such as route, language, section, and high-level selection

### Where instrumentation would go later

- `app/page.tsx` for the current interaction handlers
- `app/layout.tsx` for root analytics wrappers if approved
- `app/api/contact/route.ts` for backend success/failure logging
- Future shared helper: `lib/analytics.ts` or similar

### Production monitoring options

- Vercel Analytics: add at root only if approved
- Vercel Speed Insights: add at root only if approved
- Error monitoring: add only after owner approval and after legal/cookie decisions

## 9. Copy And Typography Punch List

These items are high-confidence and visible in the current production render or current copy files. They are intentionally limited to concrete issues.

| Language | Section / component | Current wording or UI role | Recommended change | Severity | File |
|---|---|---|---|---|---|
| English | Print modal label | `OFFER PROSPECTUS NO` | Replace with a plain label such as `Offer no.` or `Proposal no.` | polish | `data.ts` |
| English | Thrive scope / modal | `weekly parent updates x 8` | Change to a natural sentence or a cleaner label if the owner confirms this inclusion | important | `data.ts` |
| English | Print footer | `VANTAM / THE HAGUE / +31 6 42 28 81 70` | Replace with the confirmed public identity and contact details | blocker for public identity consistency | `app/page.tsx` / `data.ts` |
| Ukrainian / Russian / English | Contact and package boundary text | Limits and exclusions are visually styled like footnotes | Increase prominence of essential limit text so it reads as core service scope, not tiny legal fine print | important | `app/globals.css` |
| Mobile | Header contact strip | Email link disappears below `767px` | Keep one visible contact affordance on mobile instead of hiding the only top-strip contact link | important | `app/globals.css` |
| Mobile | Language switcher and theme toggle | Small touch targets at ~390px | Increase to a more comfortable tap size if the route switcher becomes the language path | important | `app/globals.css` |
| Ukrainian / Russian | Housing service copy | Mixed English product name with local wording around it | Keep the product name if intended, but translate the supporting sentence fully and consistently | polish | `data.ts` |
| All languages | Package and service limits | Several key boundary lines are smaller than nearby body copy | Raise size/weight slightly so the boundary language does not feel secondary to the offer | polish | `app/globals.css` |

## 10. Next-Cycle Execution Order

### Pass 1: business source of truth and legal decisions

- Objective: stop identity and policy drift before any route work
- Skills: `copy-editing`, `seo-audit`, `web-design-guidelines`
- Scope: confirm business identity, legal pages, consent language, response-time wording
- Dependencies: owner confirmations from sections 3 and 4
- Owner inputs required: legal entity name, city/region, phone/WhatsApp, complaint contact, policy stance
- Expected files affected later: `data.ts`, `app/layout.tsx`, footer/contact components, new legal pages
- Validation required later: content review only
- Explicitly out of scope: multilingual routing, analytics, schema
- Relative effort: small

### Pass 2: route-based multilingual migration

- Objective: convert the current client-state language switcher into real public locale URLs
- Skills: `seo-audit`, `react-best-practices`
- Scope: shared homepage component, locale route files, canonical and hreflang, route-aware `html lang`
- Dependencies: pass 1 identity and copy decisions
- Owner inputs required: final language labels, default-language choice, `x-default` stance
- Expected files affected later: `app/page.tsx`, `app/[lang]/page.tsx`, `app/[lang]/layout.tsx`, `app/layout.tsx`, `app/sitemap.ts`
- Validation required later: build, direct refresh, locale metadata, canonical checks
- Explicitly out of scope: redesign, copy rewrite, new services
- Relative effort: large

### Pass 3: form reliability and contact system hardening

- Objective: make enquiry delivery dependable and testable
- Skills: `react-best-practices`, `copy-editing`
- Scope: final validation flow, user feedback, duplicate handling, fallback contact path
- Dependencies: pass 1 business identity and consent decisions
- Owner inputs required: final recipient mailbox, sender identity, retry/fallback preference
- Expected files affected later: `app/page.tsx`, `app/api/contact/route.ts`, `README.md`, env docs
- Validation required later: production-like submission tests, Resend logs, failure paths
- Explicitly out of scope: full CRM, marketing automation
- Relative effort: medium

### Pass 4: schema, AI visibility, analytics and monitoring

- Objective: add trust and measurement layers after the content and routing model is stable
- Skills: `seo-audit`, `web-design-guidelines`, `copy-editing`
- Scope: structured data, optional `llms.txt`, event tracking, monitoring hooks
- Dependencies: pass 1 and pass 2
- Owner inputs required: verified business identity, analytics vendor choice, cookie stance
- Expected files affected later: `app/layout.tsx`, route pages, `app/robots.ts`, `app/sitemap.ts`, future monitoring files
- Validation required later: rendered metadata, event tests, no PII in payloads
- Explicitly out of scope: content expansion, new pages beyond legal/route support
- Relative effort: medium

### Pass 5: copy and typography polish

- Objective: remove the remaining small but visible rough edges after the architecture work
- Skills: `copy-editing`, `web-design-guidelines`
- Scope: final language phrasing, boundary text hierarchy, mobile touch targets, footer clarity
- Dependencies: pass 2 and pass 3
- Owner inputs required: none beyond the confirmed business identity decisions
- Expected files affected later: `data.ts`, `app/globals.css`, `app/page.tsx`
- Validation required later: desktop and 390px review in all three languages
- Explicitly out of scope: redesign, offer changes, new claims
- Relative effort: small
