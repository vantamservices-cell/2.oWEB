# VANTAM Legal and Compliance Decision Pack

Date: 2026-06-14

This is a working decision pack for the next implementation cycle. It is not legal advice, and it does not draft final policies or clauses. It separates confirmed requirements, official guidance, implementation recommendations, owner decisions, and legal-review items.

Revision note: this document is now historical context only. The current launch specification lives in `docs/LEGAL_IMPLEMENTATION_SPEC.md`. The main corrections in that spec are the repeal of the ODR platform, the unresolved public legal-name and address position, and the launch-blocker status of the housing success-fee model.

## 0. Current Repo Evidence

| Area | Current evidence in repository | What that means for tomorrow |
|---|---|---|
| Contact form | `app/page.tsx:1023-1048` collects name, email, inquiry type, message, consent, language, source URL, audience, moving date, city, budget, status, guarantor, help, plus a hidden honeypot field. | Privacy notice must cover the actual form fields and the email delivery flow. |
| Form backend | `app/api/contact/route.ts:89-240` sends data to Resend, replies to the visitor email, rate-limits by IP in memory, and rejects missing consent. | The privacy notice must name the email processor and describe the transfer path. |
| Public contact info | `app/page.tsx:716-720`, `app/page.tsx:1023-1052` show the public brand and contact area, with WhatsApp as a secondary option. | No public email, address, KVK, or VAT details are currently published in the page evidence. |
| Offer language | `data.ts:895-1134`, `data.ts:1149-1260` publish consultation prices, package prices, support windows, exclusions, and one consultation-credit note. | Terms, withdrawal, payment, cancellation, and refund wording are currently under-specified. |
| FAQ statements | `data.ts:1500-1575` says payment is confirmed in the written offer and cancellation/refund terms are also confirmed there, with no universal website policy yet. | The website already states that policy details are still owner-confirmed. |
| Footer and print view | `app/page.tsx:1052-1056` and `app/page.tsx:1056` should use the confirmed public business identity in print and footer. | Do not publish unconfirmed legal or address details. |
| Metadata and routing | `app/layout.tsx:11-68`, `app/robots.ts:1-12`, `app/sitemap.ts:1-9` are single-route and do not expose legal pages. | Legal pages and policy links are still absent. |
| Cookies and analytics | Repository scan found no `localStorage`, `sessionStorage`, analytics tags, pixels, embeds, or cookie banner code. | A cookie banner does not appear necessary under the current implementation. |

## 1. Official Sources Used

All sources below were accessed on 2026-06-14.

| ID | Official source | Link |
|---|---|---|
| S1 | Business.gov.nl, "How to comply with the rules for selling online" | [Link](https://business.gov.nl/products-services-and-innovation/digital-entrepreneurship/selling-online-how-to-comply-with-the-rules/) |
| S2 | Business.gov.nl, "10 steps to comply with the GDPR in the Netherlands" | [Link](https://business.gov.nl/running-your-business/legal-matters/how-to-make-your-business-gdpr-compliant/) |
| S3 | Business.gov.nl, "Drafting general terms and conditions" | [Link](https://business.gov.nl/running-your-business/legal-matters/drafting-general-terms-and-conditions/) |
| S4 | Business.gov.nl, "Consumer law: what are your clients' rights?" | [Link](https://business.gov.nl/running-your-business/legal-matters/consumer-law-your-rights-and-obligations-as-a-seller/) |
| S5 | Your Europe, "Setting up a business website for SMEs" | [Link](https://europa.eu/youreurope/business/running-business/digitalising/setting-up-business-website/index_en.htm) |
| S6 | Your Europe, "Your rights when shopping in the EU" | [Link](https://europa.eu/youreurope/citizens/consumers/shopping/shopping-consumer-rights/index_en.htm) |
| S7 | Your Europe, "Data protection and online privacy" | [Link](https://europa.eu/youreurope/citizens/consumers/internet-telecoms/data-protection-online-privacy/index_en.htm) |
| S8 | EDPB, "Guidelines, Recommendations, Best Practices" and publication list including Guidelines 2/2023 on Article 5(3) ePrivacy | [Link](https://www.edpb.europa.eu/our-work-tools/general-guidance/guidelines-recommendations-best-practices_en) |
| S9 | EUR-Lex, Directive 2002/58/EC PDF | [Link](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32002L0058) |
| S10 | Belastingdienst, "Btw-identificatienummer vermelden op uw website" | [Link](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/administratie_bijhouden/btw_nummer_vermelden_op_website/) |
| S11 | Belastingdienst, "Aan welke eisen moeten facturen voldoen voor uw btw-administratie?" | [Link](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/administratie_bijhouden/facturen_maken/factuureisen/factuureisen) |
| S12 | Belastingdienst, "Alles over uw btw-identificatienummer (btw-id) en omzetbelastingnummer (ob-nummer)" | [Link](https://www.belastingdienst.nl/wps/wcm/connect/nl/btw/content/btw-identificatienummer-en-omzetbelastingnummer) |
| S13 | EUR-Lex, Regulation (EU) 2024/3228 | [Link](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R3228) |

## 2. Business Identity Requirements

### Confirmed requirements and guidance

| Requirement | Status | What it means for VANTAM | Source |
|---|---|---|---|
| Trading name / identity | Confirmed legal requirement | The website must show the business identity, such as the trading name. | S5 |
| Legal physical and email address, plus telephone number | Confirmed legal requirement | The website must show a legal physical and email address and telephone number; if different, the legal address of the establishment. | S5 |
| Legal status, legal form, public register name, and registration number | Confirmed legal requirement | If registered in a trade or similar public register, the website must show the register name and registration number. | S5 |
| VAT identification number | Confirmed legal requirement if the activity charges VAT | If VAT applies to the service, the VAT ID must be shown on the website. | S5, S10 |
| ODR platform link | Replaced conclusion | Do not add an ODR platform link. Regulation (EU) 2024/3228 repealed Regulation 524/2013 with effect from 20 July 2025 and discontinued the ODR platform. | S13 |
| Privacy policy / cookie policy / other data-protection policies | Confirmed legal requirement for the website info set | The website must provide privacy policy, cookie policy, and related personal-data policies where applicable. | S5 |
| Terms and sale conditions during ordering | Confirmed legal requirement for the website info set | Applicable terms of sale and other sales-transaction information must be provided during ordering. | S5 |
| Supervisory authority details | Only if a professional authorisation scheme applies | Not currently evidenced for VANTAM. | S5 |
| Founder identity on the website | Not confirmed as a general requirement | Not generally required by the sources reviewed unless another regulated-profession rule applies. | S5 |
| Complaint procedure / complaint contact | Owner decision required | Useful operationally, but not established as a general website identity requirement in the reviewed sources for this offer. | S4, S5 |

### Owner-input table

| Field | Required or optional | Confirmed value | Owner input needed | Public placement | Official source |
|---|---|---|---|---|---|
| Trading name | Required | VANTAM | None if this is the public trading name | Header brand, footer, legal pages, invoices, quotes | S5 |
| Legal name | Required for the website identity set and invoices |  | Legal entity / sole-trader legal name | Footer legal block, invoices, quotes, Terms | S5, S11 |
| Legal form / status | Required for the website identity set |  | Sole trader / BV / other form | Footer legal block, Terms, invoices | S5 |
| KVK number | Required if registered |  | KVK number | Footer legal block, invoices, quotes | S5, S11 |
| VAT ID | Required if VAT is charged |  | VAT status and, if applicable, VAT ID | Footer legal block, invoices, quotes, website legal block | S5, S10, S12 |
| Public physical or visiting address | Required |  | Address and whether it is shielded | Footer legal block, contact page, invoices, quotes | S5, S11 |
| Contact recipient | Required | private server-only mailbox | Confirm the deployment secret that receives contact forms | Top contact strip, contact page, footer, invoices/quotes | S5 |
| Telephone number | Required by the website-info source reviewed |  | Publish a business phone number or obtain legal review before omitting it | Footer legal block, contact page, quote signature | S5 |
| Complaint contact | Owner decision required |  | Complaint email or complaint process | Terms, privacy notice, footer/support area | S4, S5 |
| Founder or responsible-person name | Optional unless another rule applies |  | Whether to publish it | About/support area only if desired; not required in the reviewed general rules | S5 |
| ODR link | Replaced conclusion | Do not publish an ODR link. The repeal in Regulation (EU) 2024/3228 controls. | None | Remove from footer and Terms | S13 |

### Smallest clear placement architecture

| Placement | What goes there | Why this is the smallest clear structure |
|---|---|---|
| Top contact strip | Public business email only, and a phone number only if confirmed | Keeps one visible contact channel on every page without overloading the homepage. |
| Footer legal block | Trading name, legal name, legal form, KVK, VAT, address, Privacy, Terms, Cookies, complaint contact | Satisfies the website-info set in one stable place. The ODR link has been removed from this recommendation. |
| Contact page / contact section | Same public email, complaint contact, privacy notice link, and form-purpose notice | Keeps privacy and enquiry handling close to the form. |
| Quote / invoice footer | Legal name, address, KVK, VAT, invoice-specific identity details | Matches invoicing rules and keeps transactional data together. |

### Public-address note

| Question | Decision status | Working conclusion |
|---|---|---|
| Can a shielded address replace the public address requirement? | Owner decision / legal-review item | The website identity duty still needs a lawful public-address answer for this exact setup. Do not invent an address. Treat the issue as unresolved until the owner confirms the registration setup with the relevant adviser or authority. | S5 |

## 3. Privacy Notice Requirements

### Current data flow that the privacy notice must cover

| Flow element | Current evidence in repo | Data involved | Privacy impact |
|---|---|---|---|
| Visitor submits enquiry | `app/page.tsx:1023-1048` | Name, email, inquiry type, message, consent, language, source URL, audience, moving date, city, budget, status, guarantor, help, honeypot | Must be listed in the privacy notice as the actual collected data categories. |
| Server receives enquiry | `app/api/contact/route.ts:89-240` | Same fields, plus IP-based rate-limit handling and request origin check | Must be described as processing to respond to enquiries and prevent abuse. |
| Email delivery | `app/api/contact/route.ts:199-220` | Visitor email, message body, metadata tags, sender and recipient mailboxes | Must name the email processor and the recipient mailbox. |
| Owner inbox | `README.md:13-31`, `app/api/contact/route.ts:91-92` | Delivered enquiry content | Must be named as a recipient or controller-side mailbox. |
| Hosting / logs | Not confirmed in repo | Request logs, deployment logs, server logs | Must be confirmed before final policy text is published. |

### Minimum privacy-notice content

| Content item | Status | What the notice should cover | Source |
|---|---|---|---|
| Controller identity and contact details | Confirmed requirement | Who controls the data and how to contact the controller. | S7 |
| Data categories | Confirmed guidance | What data is stored or forwarded, and what is merely optional. | S2, S7 |
| Purposes | Confirmed guidance | Replying to the enquiry, qualifying the request, preventing abuse, delivering email, and any future marketing only if separately enabled. | S2, S7 |
| Legal basis | Confirmed guidance | Use the least stretching basis that matches the real flow. The sources reviewed support contract steps, legitimate interest, and consent for different purposes; do not default everything to consent. | S2, S7 |
| Recipients / processors | Confirmed guidance | Name the email provider, hosting provider, and any future analytics or chat provider. | S2, S7 |
| International transfers | Confirmed guidance | If a processor sits outside the EEA, state the transfer and the safeguard. | S2 |
| Retention periods | Confirmed guidance | State how long enquiry data, logs, and emails are kept. | S2, S7 |
| Security approach | Confirmed guidance | State the relevant technical and organisational measures at a high level. | S2, S9 |
| Data-subject rights | Confirmed guidance | Access, correction, deletion, portability, restriction, withdrawal of consent where relevant, and complaint rights. | S7 |
| Complaint to supervisory authority | Confirmed guidance | The supervisory authority contact route must be described. | S7 |
| Privacy-request contact method | Confirmed guidance | A dedicated privacy email or other reliable contact method. | S7 |
| Automated decision-making | Required to disclose if used | No automated decision-making is evidenced in the current repo. The notice should say none occurs unless the owner later introduces it. | Repo evidence |

### Form checkbox decision

| Question | Status | Decision pack conclusion |
|---|---|---|
| Must the enquiry form force a mandatory privacy checkbox? | Owner decision / implementation recommendation | The reviewed rules require a clear privacy statement and clear information; they do not require the enquiry itself to be treated as consent. The current mandatory checkbox is better treated as an acknowledgement that the privacy notice was read, not as the legal basis for answering the enquiry. Keep marketing consent separate if marketing is ever introduced. | S2, S7 |

### What must be separated in wording

| Distinction | Why it matters |
|---|---|
| Acknowledgement that the user read the Privacy Policy | This is a UX acknowledgement only; it should not be presented as a substitute for lawful processing. |
| Consent for optional marketing | This must stay separate, voluntary, and opt-in. |
| Consent for non-essential cookies | This is separate from enquiry handling and only becomes relevant if optional tracking is added. |
| Processing needed to answer an enquiry or prepare a service agreement | This should be described as operational processing tied to the request, not automatically as marketing consent. |

## 4. Terms and Service Conditions

### Subject-area classification

| Subject | Classification | Decision pack note | Source |
|---|---|---|---|
| Identity of the contracting party | Owner decision required | Needs the legal entity name and legal form. | S3, S5 |
| Formation of the agreement | Can be derived from the current confirmed offer | The site already says work starts after scope and terms are agreed. | `data.ts:1507-1575` |
| Scope confirmation | Can be derived from the current confirmed offer | The FAQ and offer text already say the written offer confirms scope. | `data.ts:1547-1562` |
| Prices and VAT presentation | Owner decision required | VAT status is not confirmed. | S5, S10, S11, S12 |
| Invoices and payment timing | Owner decision required | The site says payment is confirmed in the written offer, but not the actual timing rule. | `data.ts:1547-1549` |
| Commencement of work | Can be derived from the current confirmed offer | Current wording says work starts after scope and terms are agreed. | `data.ts:1547-1549` |
| Client responsibilities | Owner decision required | Should match the actual service model and document flow. | S3 |
| Third-party fees | Can be derived from the current confirmed offer | Packages already say third-party fees are excluded. | `data.ts:953-963`, `data.ts:1034-1047`, `data.ts:1118-1132` |
| Service limitations | Can be derived from the current confirmed offer | The site already states remote-only or limited-case scope for several offers. | `data.ts:920-963`, `data.ts:992-1048`, `data.ts:1227-1236` |
| No housing guarantee | Can be derived from the current confirmed offer | Already stated publicly. | `app/page.tsx:921-925`, `data.ts:1227-1236`, `data.ts:1520-1523` |
| No legal representation | Can be derived from the current confirmed offer | Already stated publicly. | `app/page.tsx:921-925`, `data.ts:1232-1235`, `data.ts:1520-1523` |
| Communications and document accuracy | Owner decision required | Needs a clear rule on what the client must verify and what VANTAM may rely on. | S3 |
| Cancellation | Owner decision required and legal-review item | The site currently says the written offer controls cancellation terms and no universal public policy is published. | `data.ts:1559-1562` |
| Refunds | Owner decision required and legal-review item | Same as cancellation. | `data.ts:1559-1562` |
| Rescheduling | Owner decision required | Not yet stated publicly. | `data.ts:1507-1575` |
| Termination | Legal-review item | Needs to align with consumer and distance-contract rules if applicable. | S4, S6 |
| Complaints | Owner decision required | A simple complaint path should be defined, but the precise wording is not yet confirmed. | S3, S5 |
| Liability | Legal-review item | Terms can limit liability, but the reviewed source says liability cannot be refused in full. | S3 |
| Force majeure | Legal-review item | Should be reviewed before publishing any broad force-majeure wording. | S3 |
| Governing law | Legal-review item | Not yet confirmed in the repo. | S3 |
| Dispute handling | Owner decision required and legal-review item | The obsolete ODR link is no longer part of the website requirement. The exact internal handling flow still needs owner input. | S13 |
| Language and version precedence | Owner decision required | Important because the site is multilingual. | S3 |

### Terms structure recommendation

| Question | Recommendation |
|---|---|
| Should payment, cancellation, and refund rules remain inside Terms or become separate public pages? | Keep them inside Terms for tomorrow, with a tightly structured section and internal anchors. The current offer is still modest in size, the exact rules are still owner-confirmed, and there is no checkout flow yet. Split them into separate pages later if checkout is added, if consumer and B2B rules diverge materially, or if the owner wants a more detailed public policy set. |

## 5. Distance-Contract and Consumer Questions

### When the rules may apply

| Channel / workflow | Consumer-law relevance | Decision pack reading |
|---|---|---|
| Website enquiry | Can become a distance-sale pre-contract step | If a service is later agreed remotely, consumer rules may apply. |
| Email | Can become a remote agreement channel | Same as above. |
| WhatsApp | Can become a remote agreement channel | Same as above, plus extra privacy and provider issues. |
| Remote consultation booking | Likely distance contract if booked and paid remotely | Consumer cooling-off issues must be checked before publishing final terms. |
| Invoice payment | Contract stage, not the only legal trigger | Payment terms must be aligned with the final consumer/B2B classification. |
| Future online checkout | Clear distance-selling scenario | Requires the strongest pre-contract info and withdrawal flow. |

### What the official sources say

| Issue | Official reading | Source |
|---|---|---|
| Consumer vs business customer | Consumer law does not apply to sales to other businesses in the same way; consumer customers get the cooling-off protections. | S4 |
| Distance sales | If you sell services remotely, you must provide clear information about who you are, what you sell, the price, delivery, and cancellation. | S4 |
| Cooling-off period | Remote buyers are often entitled to a 14-day cooling-off period. | S4, S6 |
| Withdrawal timing | The EU consumer page says the 14-day period expires 14 days after the day the goods are received or the service contract is concluded. | S6 |
| Exceptions | Some specific-date services and some urgent repair-type services are excluded. | S6 |
| Payment timing | Consumer payment terms should be stated in the contract or general terms; the reviewed Dutch guidance says consumers should be given clear payment information before purchase. | S4 |
| Prepayment | The reviewed Dutch guidance says consumers generally should not be pushed beyond the permitted advance-payment structure, but the exact service-vs-product fit for VANTAM still needs confirmation before publishing a prepayment rule. | S4 |

### Facts and workflow decisions that must be confirmed

| Decision needed | Why it matters |
|---|---|
| Which offerings are consumer-facing and which are B2B only | The legal obligations differ. |
| Whether a consultation is a stand-alone service or merely an introductory sales step | This affects withdrawal and refund handling. |
| Whether any service starts before the withdrawal window ends | This affects the text needed around express request, acknowledgement, and any pro-rata charge. |
| Which offers are time-specific or urgent enough to fall into an exception | This may remove withdrawal rights for some flows. |
| Whether a future checkout will take payment immediately, by invoice, or by deposit | This affects payment timing and refund architecture. |
| Whether a package begins on a fixed date or after confirmation | This affects service-start language and cancellation windows. |
| Whether the consultation credit note remains public | This is a commercial promise that should not be left ambiguous. |

## 6. Payment, Cancellation, and Refund Architecture

### Published statements audit

| Topic | Published statement in repo | Status | Source file |
|---|---|---|---|
| Payment timing | "Payment is agreed in the written offer for the selected service or package. If the scope is still being clarified, VANTAM confirms the terms before work starts." | Confirmed public statement, but still too vague for final policy wording | `data.ts:1547-1549` |
| Consultation credit | Consultations can be credited toward any package within 14 days. | Confirmed public statement, but owner-confirmation is still needed | `data.ts:1161`, `data.ts:1175` |
| Cancellation | Cancellation/refund terms are confirmed in the written offer for the specific service or package. | Confirmed public statement that no universal policy exists yet | `data.ts:1559-1562` |
| Refunds | Same as cancellation. | Confirmed public statement that no universal policy exists yet | `data.ts:1559-1562` |
| Rescheduling | No explicit public rule found. | Absent | Repo scan |
| Urgent services | Same-day where possible / priority slot. | Confirmed public statement | `data.ts:1182-1190` |
| Package commencement | Support starts after the scope and terms are agreed. | Confirmed public statement | `data.ts:1533-1549` |
| Service completion | Time windows are tied to package durations and consultation lengths. | Confirmed public statement | `data.ts:920-1134`, `data.ts:1153-1190` |
| Third-party costs | Packages exclude third-party fees. | Confirmed public statement | `data.ts:953-963`, `data.ts:1034-1047`, `data.ts:1118-1132` |

### Items that should not remain public without confirmation

| Item | Why it should stay unpublished until confirmed |
|---|---|
| Exact payment due date | It is not yet fixed in the repo. |
| Exact cancellation window | It is not yet fixed in the repo. |
| Exact refund formula | It is not yet fixed in the repo. |
| Exact rescheduling window | It is not yet fixed in the repo. |
| Any promise that consultation credit always applies | The current note is already narrow and should stay explicit if retained. |
| Any promise that an urgent slot is always available | The current copy already softens this with "where possible"; keep it that way unless the owner confirms a stricter model. |

### Recommendation

| Question | Recommendation |
|---|---|
| Should payment/cancellation/refund rules stay in Terms or move to separate public pages? | Keep them inside Terms tomorrow. The current public policy surface is small, the offer is still being finalised, and separate pages would add structure without adding certainty. Revisit separate pages only if online checkout or materially different consumer/B2B rules are introduced. |

## 7. Cookies, Analytics, and Consent

### Repository inventory

| Technology | Current evidence | Purpose | Essential or optional | Likely consent requirement | Documentation needed |
|---|---|---|---|---|---|
| Cookies | No site-level cookie code identified in repo | None currently evident | N/A | No banner appears necessary now | If any are introduced, document type and purpose |
| localStorage | No matches found | None | N/A | No | None currently |
| sessionStorage | No matches found | None | N/A | No | None currently |
| Vercel Analytics | Not present | Would be page analytics | Optional | Consent likely if non-essential | Vendor, scope, and consent wording |
| Speed Insights | Not present | Performance metrics | Optional | Likely consent if it stores or reads non-essential identifiers | Vendor and data handling |
| Google Analytics | Not present | Traffic analytics | Optional | Consent required before load in the current EU model | Vendor documentation |
| Meta Pixel | Not present | Marketing measurement | Optional | Consent required before load | Vendor documentation |
| Embedded media | Not present | Third-party media playback | Optional | Consent may be needed if it sets tracking or non-essential storage | Embed provider documentation |
| Chat widgets | Not present | Support / chat | Optional | Likely consent or at least a notice because it is a third-party processor | Provider and retention details |
| Form provider | Resend via `app/api/contact/route.ts:199-220` | Email delivery for enquiries | Essential to the current enquiry flow | Not a cookie issue; disclose as processor/recipient | Processor terms and transfer details |

### Banner decision

| Question | Decision pack conclusion | Source |
|---|---|---|
| Does the current site need a cookie banner now? | No banner appears necessary under the current implementation, because the repo does not show non-essential cookies, analytics, pixels, or embedded third-party tracking. A simple cookie explanation is enough only if future functionality stays strictly necessary. | Repo scan, S8, S9 |

### What changes if analytics are introduced tomorrow

| Change | Required action |
|---|---|
| Optional analytics script is added | Block it until the user opts in if it is not strictly necessary. |
| Third-party measurement is added | Add the vendor to the privacy notice and cookie notice, and name the purpose and retention. |
| Minimal privacy impact configuration is desired | Prefer the smallest-necessary measurement set, avoid marketing pixels, and keep the analytics off until consent. |
| Tracking before consent would occur | Do not ship that configuration. The ePrivacy rules require clear information and the right to refuse for non-essential storage/access. | S8, S9 |

### Current legal reading on cookies

| Rule | Practical reading for VANTAM |
|---|---|
| Strictly necessary storage/access | Can be used without a banner if it is genuinely necessary for the requested service. |
| Non-essential storage/access | Needs clear information and refusal/consent handling. |
| Cookie walls | Avoid them unless legal review specifically approves a narrow exception. |

## 8. WhatsApp and Contact Channels

| Decision area | Current status | What must be confirmed | Privacy and operational implication |
|---|---|---|---|
| Public number | Not present in repo | Whether any WhatsApp number will be public | Do not invent a number. |
| Account type | Not present in repo | Personal vs business account | Affects privacy wording and operational continuity. |
| Prefilled message | Not present in repo | Exact prefilled text | Should limit sensitive data prompts. |
| Data transfer | Likely external provider involvement | Whether WhatsApp will be used at all | Treat as a separate third-party contact channel in the privacy notice if added. |
| Message content warning | Not present in repo | What users should not send | Users should not be invited to send sensitive or highly confidential information by WhatsApp. |
| Channel priority | Not present in repo | Primary, secondary, or fallback | Recommendation: fallback or secondary only until the account and handling rules are fixed. |
| Interaction with main enquiry form | Not present in repo | Whether WhatsApp is an alternative or a replacement | Recommendation: keep the form as the primary intake path and WhatsApp as a fallback or quick contact path only. |

### Recommendation

| Question | Recommendation |
|---|---|
| Should WhatsApp be the primary contact channel now? | No. Keep the main enquiry form and public email as the primary path. If WhatsApp is added later, publish it as a secondary/fallback channel with a short warning about what not to send and with a confirmed account type and response-time rule. |

## 9. Processors and Data Flow

| Stage | Data involved | Purpose | Processor / recipient | Current evidence in repo | Missing information | Likely privacy-document impact |
|---|---|---|---|---|---|---|
| Website visitor | Page views, contact actions | Access the site and submit an enquiry | Website host and browser environment | Site route and form exist | Hosting provider not confirmed in repo | Privacy notice must name the controller and explain web processing |
| Enquiry form | Form fields listed in `app/page.tsx:1023-1048` | Collect the enquiry and qualification context | Frontend form | Confirmed | None for the form fields themselves | Privacy notice must list categories and purposes |
| Hosting | Request logs, runtime logs, deployment logs | Serve the site and operate the app | Hosting provider | Not confirmed in repo | Hosting vendor, region, log retention | Must be named if it processes personal data |
| Form/API provider | JSON payload, sender/recipient metadata | Deliver the enquiry by email | Next.js API route + Resend | Confirmed by `app/api/contact/route.ts:199-220` | Exact Resend data region and transfer safeguards | Must be disclosed as processor/recipient and transfer point |
| Email delivery | Enquiry body, sender/recipient addresses, reply-to | Send and receive the enquiry | Resend and mailbox provider | Confirmed by `README.md:13-31` and `app/api/contact/route.ts:208-220` | Mailbox provider details and retention | Must be disclosed in the privacy notice |
| Owner inbox | Enquiry content and reply address | Review and answer enquiries | Owner mailbox | `CONTACT_TO_EMAIL` default and mail delivery path confirmed | Whether inbox is shared or delegated | Must be named as controller-side recipient |
| WhatsApp | Not currently present | Possible fallback contact | Not yet implemented | None | Number, account type, provider details | If added, must be disclosed as a separate channel |
| Analytics if introduced | Usage and interaction metrics | Measure site use | Vendor not yet chosen | None | Vendor choice and consent model | Privacy and cookie notices must be updated |
| Stored logs | Server logs, email logs, deployment logs | Debugging and accountability | Host, Resend, mail provider | In-memory rate limit in `app/api/contact/route.ts:33-87`; deployment logs not evidenced | Retention periods, access controls, exportability | Privacy notice must state retention and security approach |

## 10. Owner Decision Checklist

Fill these in before tomorrow's implementation.

| Decision | Exact question | Why it matters | Options | Depends on |
|---|---|---|---|---|
| Legal / trade name | What exact legal name should be published and used on invoices? | Required for identity and invoicing. | Sole trader legal name; company legal name; other | Footer, quotes, invoices, Terms |
| KVK | What is the KVK number? | Required if registered. | Publish / not yet registered / pending | Footer, invoices, quotes |
| VAT status | Does VANTAM charge VAT, use a VAT ID, or qualify for a special VAT treatment? | Affects public VAT display and invoice wording. | VAT registered; not VAT registered; other | Footer, invoices, pricing copy |
| Public address | What is the public physical or visiting address, and is it shielded? | Required on the website. | Full public address; shielded home address with alternative; other | Footer, contact page, quotes, invoices |
| Contact recipient | What server-side mailbox should receive website enquiries? | Current primary contact channel must stay private. | Keep private; rotate; add alias | Header strip, footer, contact page, invoices |
| Privacy contact | What email or channel handles privacy requests? | Required in the privacy notice. | Dedicated privacy email; same mailbox; other | Privacy policy |
| Complaint contact | What is the complaint contact or process? | Needed for service disputes and clarity. | Complaint email; support mailbox; form; other | Terms, footer, privacy notice |
| WhatsApp | Will WhatsApp exist, and if so, what number/account type? | Third-party contact channel and privacy issue. | No WhatsApp; secondary; fallback | Contact page, privacy notice |
| Response time | What response-time wording can VANTAM actually meet? | Public promise should be realistic. | Same-day; 24h; 2 business days; no promise | Header, contact page, FAQ |
| Payment timing | When is payment due for each offer? | Drives invoice and Terms wording. | Before work; on invoice; deposit; after delivery; mixed | Terms, invoices, offer copy |
| Payment methods | Which payment methods are accepted? | Impacts pricing and purchase flow. | Bank transfer; invoice; card; online checkout later | Terms, checkout, invoices |
| Cancellation window | What is the exact cancellation rule and deadline? | Consumer and B2B consequences differ. | Same day; 24h; 7 days; written-offer only; other | Terms, FAQ, offer copy |
| Rescheduling | What is the rescheduling rule? | Important for consultations and urgent calls. | Free; once free; fee after notice; other | Terms, FAQ, booking flow |
| Refund rules | When is a refund due, partial or full? | Affects dispute handling and withdrawal logic. | Full; partial; no refund after start; case-by-case | Terms, FAQ, checkout |
| Work start | When does work officially begin? | Matters for withdrawal and scope. | On payment; on written acceptance; on first call; other | Terms, offer, contact flow |
| Service timelines | What are the delivery or response windows for each offer? | Needed for accuracy and consumer transparency. | Fixed; best-effort; by case; other | Service cards, Terms, FAQ |
| Consultation credit | Does the 14-day consultation credit remain public? | A commercial promise that changes pricing economics. | Keep; remove; narrow; other | Consultation cards, Terms |
| Retention periods | How long are enquiries, logs, and support records kept? | Required in privacy notice. | Short; business/admin period; other | Privacy policy, internal handling |
| Analytics | Will analytics be added now? | Determines cookie and consent posture. | No analytics; privacy-preserving analytics; full analytics later | Cookie/privacy notices, header scripts |
| Marketing | Will marketing emails or remarketing exist? | Requires separate consent and opt-out handling. | No marketing; email newsletter later; ads later | Privacy policy, forms, email flows |
| Checkout | Will online checkout exist now or later? | Changes the entire consumer-contract flow. | No checkout now; later; invoice only | Website architecture, Terms, payments |

## 11. Implementation Map for Tomorrow

### A. Business identity and contacts

| Item | Files likely affected | Owner inputs required | Official requirements involved | Order | Validation needed | Out of scope |
|---|---|---|---|---|---|---|
| Public identity block | `app/page.tsx`, `app/layout.tsx`, `data.ts` | Legal name, KVK, VAT, address, phone | S5, S10, S11, S12 | First | Check every public placement against one source of truth | No new public pages beyond legal links |
| Footer contact block | `app/page.tsx` | Business email, phone/WhatsApp decision, complaint contact | S5 | First | Ensure the footer does not claim unconfirmed identity details | No invented location or founder bio |
| Invoice/quote identity | Future offer/invoice templates, README if needed | Legal name, address, KVK, VAT | S11 | First | Match invoice fields to tax rules | No checkout implementation |

### B. Privacy and Terms

| Item | Files likely affected | Owner inputs required | Official requirements involved | Order | Validation needed | Out of scope |
|---|---|---|---|---|---|---|
| Privacy policy structure | `app/page.tsx` footer links now; policy page later | Privacy contact, retention, hosting, processor names, transfer details | S2, S7 | Second | Every data field in the form must be covered | Final legal drafting text |
| Terms structure | Policy page later, footer links, FAQ copy | Payment timing, cancellation, refund, rescheduling, liability posture | S3, S4, S6 | Second | Check that public promises match the written offer | Broad legal disclaimers that are not needed |

### C. Form notice and consent

| Item | Files likely affected | Owner inputs required | Official requirements involved | Order | Validation needed | Out of scope |
|---|---|---|---|---|---|---|
| Form privacy notice text | `app/page.tsx` | Privacy notice link, privacy contact, consent wording choice | S2, S7 | Third | The notice must explain the actual form fields and the delivery path | Marketing copy |
| Consent checkbox treatment | `app/page.tsx`, `app/api/contact/route.ts` | Whether checkbox is acknowledgement or optional consent | S2, S7 | Third | Confirm the form can submit without conflating consent with contract necessity | Consent platform |

### D. Cookies and analytics

| Item | Files likely affected | Owner inputs required | Official requirements involved | Order | Validation needed | Out of scope |
|---|---|---|---|---|---|---|
| Cookie stance | `app/layout.tsx`, future policy page | Analytics decision, embed decision, cookie stance | S8, S9 | Fourth | Confirm nothing non-essential loads before consent | Consent platform build |
| Analytics choice | `app/layout.tsx`, future analytics helper | Vendor choice, consent model | S8, S9 | Fourth | Verify no tracking script ships before the decision | Marketing pixels |

### E. Structured-data inputs

| Item | Files likely affected | Owner inputs required | Official requirements involved | Order | Validation needed | Out of scope |
|---|---|---|---|---|---|---|
| Organization/contact schema inputs | `app/layout.tsx`, `data.ts` | Legal name, trading name, address, phone, email | S5 | Fifth | Schema values must match the public footer and contact details | Schema expansion beyond what is confirmed |

### F. Production verification

| Item | Files likely affected | Owner inputs required | Official requirements involved | Order | Validation needed | Out of scope |
|---|---|---|---|---|---|---|
| Public page audit | `app/page.tsx`, `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` | Final legal/contact inputs | S5, S10, S11 | Sixth | Confirm only the intended public routes are exposed and the legal links are present | Route redesign |
| Source-to-public-text check | `app/page.tsx`, `data.ts` | Final policy choices | S3, S4, S6, S7 | Sixth | Verify no statement promises more than the owner confirmed | New public policy pages |
| Secrets check | `app/api/contact/route.ts`, `.env.example`, deployment env | None beyond existing secrets | S2, S7 | Sixth | Confirm no secret value is exposed in code or docs | Secret-management redesign |

## 12. Key Conclusions

| Question | Decision pack conclusion |
|---|---|
| Is a cookie banner necessary now? | No, not under the current implementation. |
| What is the most important unresolved consumer-law question? | Whether any VANTAM service is a distance contract that starts before the withdrawal window ends, and if so what express-request and refund logic must be published. |
| What must remain unpublished until the owner confirms it? | Legal name, address, KVK, VAT, complaint contact, phone or WhatsApp, payment timing, cancellation window, refund rules, service-start rule, retention periods, and analytics choice. |
