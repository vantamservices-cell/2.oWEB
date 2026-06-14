# VANTAM Legal Implementation Spec

Access date for official sources: 2026-06-14.

This document turns the current repository, confirmed owner decisions, and current official Dutch/EU guidance into a launch specification for later code and copy changes. It is not public legal copy, and it does not replace Dutch legal review where the law or the source set remains unresolved.

## Executive decision summary

- **Confirmed owner decision**: contract formation stays written and explicit. VANTAM and the client only bind once both sides sign or otherwise formally accept the same written offer, agreement, or appendix.
- **Binding legal requirement**: consumer pre-contract information, withdrawal handling, and durable-medium confirmation follow the EU Consumer Rights Directive for remote service contracts.
- **Binding legal requirement**: the former EU ODR platform is gone. Do not add an ODR link to the website or Terms.
- **Launch blocker**: the housing success-fee model is too close to rental mediation and brokerage risk. Do not publish or charge it until Dutch legal review clears the exact activities and fee trigger.
- **Launch blocker**: the public legal identity set is incomplete because the proprietor’s full legal name, a public street or establishment address, and VAT status are not yet confirmed for publication.
- **Recommended implementation**: the contact form should stay on a privacy-acknowledgement flow, with separate opt-in marketing consent if marketing is ever added.
- **Recommended implementation**: retention must be category-specific. One blanket retention period for every enquiry, client file, log, and invoice is not defensible.

## Confirmed owner decisions

- **Confirmed owner decision**: VANTAM is the public brand, `VANTAM Services` is the registered trade name, the legal form is a Dutch eenmanszaak, the KvK number is `42080058`, the operating location is The Hague, the public email is `vantam.request@gmail.com`, and the public telephone / WhatsApp Business number is `+31 6 42 28 81 70`.
- **Confirmed owner decision**: response time is within one business day.
- **Confirmed owner decision**: no visiting office exists, and no public street address has been authorised.
- **Confirmed owner decision**: the VAT / BTW number is not yet available and must not be invented.
- **Confirmed owner decision**: the consultation happens first, VANTAM invoices after the consultation, and payment is due within 3 calendar days.
- **Confirmed owner decision**: ordinary enquiries from people who never become clients may be retained for up to 12 months after the last meaningful contact.
- **Confirmed owner decision**: VANTAM may start work before the end of the 14-day withdrawal period, but only after a separate express request from the consumer.
- **Confirmed owner decision**: the current site should not gain a cookie banner or tracking stack in this pass.
- **Confirmed owner decision**: the owner prefers English as the main contractual language, with Ukrainian and Russian as convenience translations, while Dutch law governs.

## Current repository and data-flow evidence

### Repository facts

- **Repository fact**: the app is a Next.js App Router site with one public landing page and a route-based language structure. See `app/page.tsx:1-5`, `app/[lang]/page.tsx:1-76`, `app/layout.tsx:1-58`, `lib/locales.ts:1-69`.
- **Repository fact**: `app/page.tsx` redirects `/` to `/en`, while `app/[lang]/page.tsx` renders locale pages and metadata.
- **Repository fact**: `lib/business.ts:3-40` already stores the public brand, the registered trade name, KvK number, operating city, public email, phone number, and WhatsApp Business number.
- **Repository fact**: `app/api/contact/route.ts:89-240` accepts `name`, `email`, `inquiryType`, `message`, `consent`, `language`, `sourceUrl`, `audience`, `movingDate`, `city`, `budget`, `status`, `guarantor`, `help`, and a hidden honeypot field, then forwards the message through Resend.
- **Repository fact**: `app/api/contact/route.ts:102-111` performs an origin check and an in-memory IP rate limit.
- **Repository fact**: `app/api/contact/route.ts:149-232` sends the visitor email as `reply_to`, adds timestamped text and HTML, and tags the delivery with `source` and `language`.
- **Repository fact**: `app/page.tsx:1118-1125` uses a required privacy consent checkbox in the contact form, and the footer currently publishes the public email, phone number, and WhatsApp link.
- **Repository fact**: `data.ts:1150-1177` contains consultation prices and a 14-day consultation credit note.
- **Repository fact**: `data.ts:1208-1237` contains the housing support description, a no-guarantee statement, and a no-representation statement.
- **Repository fact**: `data.ts:1543-1563` says payment is agreed in the written offer and cancellation or refund terms are confirmed in the written offer.
- **Repository fact**: `app/layout.tsx:13-29`, `app/robots.ts:1-12`, and `app/sitemap.ts:1-15` do not define legal pages.
- **Repository fact**: `rg` found no `localStorage`, `sessionStorage`, analytics tags, pixels, or cookie banner code in the inspected files.

### Current data flow

- **Repository fact**: visitor browser -> contact form -> `POST /api/contact` -> Resend -> recipient mailbox.
- **Repository fact**: the request includes personal data, possible housing preference data, and a free-text message.
- **Repository fact**: the response path includes the owner inbox and the visitor mailbox through `reply_to`.
- **Repository fact**: the route currently performs only lightweight anti-abuse controls, so production deployment should still be checked at the platform layer for durable rate limiting and logging.

## Official source register

| Source title | Official organisation | URL | Access date | Relevant rule or guidance | Classification |
|---|---|---|---|---|---|
| Directive 2011/83/EU on consumer rights | EUR-Lex | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011L0083 | 2026-06-14 | Article 6 pre-contract information, Article 7 and 8 durable-medium and confirmation rules, Article 9 withdrawal period, Article 14 proportional payment after early start | Binding legal requirement |
| Regulation (EU) 2016/679 (GDPR) | EUR-Lex | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679 | 2026-06-14 | Article 5 storage limitation, Article 6 lawful bases, Article 13 and 14 notice content, Article 15 access, Article 17 erasure, Article 28 processor contracts, Article 30 records, Article 32 security, Article 44 to 46 transfers | Binding legal requirement |
| Directive 2002/58/EC (ePrivacy) | EUR-Lex | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32002L0058 | 2026-06-14 | Article 5(3) consent unless storage or access is strictly necessary for the requested service | Binding legal requirement |
| Regulation (EU) 2024/3228 | EUR-Lex | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R3228 | 2026-06-14 | Repeals Regulation 524/2013 from 20 July 2025 and discontinues the ODR platform | Binding legal requirement |
| How to comply with the rules for selling online | Business.gov.nl | https://business.gov.nl/products-services-and-innovation/digital-entrepreneurship/selling-online-how-to-comply-with-the-rules/ | 2026-06-14 | Online sellers must be clear about who they are, what they sell, price, payment, delivery, cooling-off period, and order process | Official guidance |
| 10 steps to comply with the GDPR in the Netherlands | Business.gov.nl | https://business.gov.nl/running-your-business/legal-matters/how-to-make-your-business-gdpr-compliant/ | 2026-06-14 | Six lawful bases, privacy rights, and the need to make customer rights easy to exercise | Official guidance |
| Drafting general terms and conditions | Business.gov.nl | https://business.gov.nl/running-your-business/legal-matters/drafting-general-terms-and-conditions/ | 2026-06-14 | Customers must be able to read terms before concluding the agreement; filing at KVK is optional; force majeure and proof notes | Official guidance |
| Consumer law: what are your clients’ rights? | Business.gov.nl | https://business.gov.nl/running-your-business/legal-matters/consumer-law-your-rights-and-obligations-as-a-seller/ | 2026-06-14 | Remote sales rules, cooling-off period, payment terms in contract or terms, first reminder without extra costs, collection-cost reminder sequence | Official guidance |
| Data protection and online privacy | Your Europe | https://europa.eu/youreurope/citizens/consumers/internet-telecoms/data-protection-online-privacy/index_en.htm | 2026-06-14 | Rights to access and complaint handling for data subjects | Official guidance |
| Setting up a business website for SMEs | Your Europe | https://europa.eu/youreurope/business/running-business/digitalising/setting-up-business-website/index_en.htm | 2026-06-14 | Website identity and trading-information guidance; note that the old ODR item is now outdated because the regulation was repealed | Official guidance, stale on ODR |
| Btw-identificatienummer vermelden op uw website | Belastingdienst | https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/administratie_bijhouden/btw_nummer_vermelden_op_website/ | 2026-06-14 | VAT ID must be shown on the website if VAT applies | Official guidance |

## Contracting-party identity

- **Binding legal requirement**: consumer-facing business websites must identify who the trader is, and for remote sales the identity information includes a geographical address, email address, and telephone number.
- **Repository fact**: the current site already publishes the trade name, public email, telephone number, WhatsApp number, and KvK number in code, but not a public street or establishment address.
- **Unresolved**: the proprietor’s full legal name is not authorised for publication in this task, so the final contracting-party string cannot be published yet.
- **Recommended implementation**: private drafts should identify the contracting party as the actual natural person behind the eenmanszaak, because the eenmanszaak is not a separate legal person.
- **Launch blocker**: do not publish final Terms, quotes, or invoice templates until the legal name and the lawful public-address handling are confirmed by a Dutch lawyer, KVK, accountant, or the competent authority.
- **Recommended implementation**: keep the public brand as `VANTAM`, but separate the brand from the legal party line in every contract and invoice template.

## Contract formation and document hierarchy

- **Confirmed owner decision**: the contract forms only when both sides sign or otherwise formally accept the same written agreement, written offer, or appendix.
- **Binding legal requirement**: for distance service contracts, the trader must provide key pre-contract information before the consumer is bound, and the contract confirmation must be available on a durable medium.
- **Recommended implementation**: acceptable acceptance methods should include a signed PDF, a qualified or advanced e-signature, or an explicit email acceptance that names the exact offer or appendix version.
- **Recommended implementation**: the accepted version should be downloadable or otherwise retainable, and the final record should include the version ID, timestamp, signer, and document hash or archived PDF.
- **Recommended implementation**: the document hierarchy should be `signed appendix or offer` > `signed main service agreement` > `general Terms`.
- **Recommended implementation**: an appendix should override the general Terms only for the issue it expressly changes.
- **Recommended implementation**: if two documents conflict and neither expressly overrides the other, the safer fallback is to treat the conflict as unresolved and require a corrected signature set before performance starts.

## Consultation payment

- **Confirmed owner decision**: the consultation is performed first, then VANTAM invoices, and payment is due within 3 calendar days.
- **Recommended implementation**: the invoice should go out immediately after the consultation, ideally the same day or the next business day.
- **Recommended implementation**: the payment deadline is clear enough for both B2C and B2B only if the offer or appendix names the invoice date, due date, and currency.
- **Binding legal requirement**: for consumer customers, the contract or Terms should state the payment term, and late-payment collection costs cannot be presented as automatic unless the statutory reminder sequence has been followed.
- **Unresolved**: the exact Dutch consumer collection-cost notice wording was not reverified from an accessible official source in this run, so do not hard-code a collection-cost formula yet.
- **Recommended implementation**: the Terms should state the deadline only, then reserve statutory collection procedures for later notices.
- **Legal-review item**: any interest, penalty, or collection-cost clause needs Dutch law confirmation before publication.

## Housing-support and success-fee legal classification

- **Confirmed owner decision**: the intended service is client-side housing support, not landlord-side agency work, and VANTAM does not guarantee housing.
- **Confirmed owner decision**: the intended result definition is a binding residential tenancy agreement signed by the client and the landlord or authorised representative after VANTAM provided the agreed support.
- **Launch blocker**: the success-fee clause must not ship without specialist Dutch legal approval.
- **Unresolved**: I could not retrieve a current official Dutch source in this run that cleanly resolves every rental-mediation and double-representation edge case for this exact service model, so this section stays conservative.
- **Safest legally supportable model**: remove the result-linked success fee for launch, charge only a pre-agreed base fee or task fee for clearly client-side support work, and keep the service away from landlord representation, property matching as an intermediary, and any fee that depends on closing a tenancy.
- **Higher-risk model, do not implement without legal approval**: keep a fixed success fee that becomes due when a tenancy is signed, especially if VANTAM also contacts landlords or agents, helps frame the application, negotiates terms, or touches listings that are marketed by a landlord-side agent.
- **Wording that should never be used**: `broker`, `intermediary`, `we find you housing`, `we secure the tenancy`, `success fee for obtaining the lease`, `commission`, `agent`, `we act for the landlord`, or any phrase that sounds like brokerage while the model is still support-led.
- **Operational boundaries required in practice**: VANTAM should not hold itself out as a landlord agent, should not receive a landlord-side mandate, should not negotiate on the landlord side, should not take a fee that looks like brokerage commission, and should not let the success fee depend on VANTAM bringing the parties together.
- **Recommended implementation**: if a future legal review allows a result-related payment at all, bind it to a narrowly defined client-side administrative milestone that is not the tenancy conclusion itself.

## Individual offers and appendices

- **Confirmed owner decision**: packages, individual services, housing assignments, and additional requests may be agreed in a signed individual offer or appendix.
- **Recommended implementation**: each offer or appendix should state scope, deliverables, exclusions, price, base fee, any legally permitted success fee, payment timing, service period, client responsibilities, third-party costs, and special cancellation or rescheduling rules.
- **Recommended implementation**: the appendix should win on the specific issue it changes, but only if the text says so explicitly.
- **Recommended implementation**: the individual document should also identify which version of the general Terms it attaches to.
- **Recommended implementation**: if the appendix is silent, the general Terms fill the gap.

## Withdrawal and early commencement

- **Binding legal requirement**: for consumer service contracts concluded remotely, the withdrawal period is 14 days and starts when the service contract is concluded.
- **Binding legal requirement**: before the consumer is bound, the trader must give clear pre-contract information, including identity, geographical address, main characteristics, total price, payment terms, delivery or performance timing, withdrawal rights, complaint handling, and the contract duration or termination conditions where relevant.
- **Binding legal requirement**: if VANTAM starts work before the withdrawal period ends, the consumer must make a separate express request to start early.
- **Binding legal requirement**: the consumer must also acknowledge the possible obligation to pay a proportionate amount if the consumer withdraws after work has begun.
- **Binding legal requirement**: if the service is fully performed during the withdrawal period, the consumer can lose the withdrawal right only if prior express consent and the acknowledgement of the loss of the withdrawal right were both obtained, and the trader confirmed the arrangement on a durable medium.
- **Recommended implementation**: the workflow must separate at least four acknowledgements, namely `Terms acceptance`, `Privacy Policy acknowledgement`, `express early-start request`, and `withdrawal-right loss acknowledgement`.
- **Recommended implementation**: marketing consent, if ever introduced, must stay separate from the early-start and privacy acknowledgements.
- **Recommended implementation**: retain evidence of the signed or accepted version, the timestamp, the exact text shown, and the durable-medium confirmation.
- **Recommended implementation**: B2B contracts should not be given consumer cooling-off wording unless the buyer is a consumer.
- **Legal-review item**: confirm whether any specific VANTAM service category ever falls into a statutory exception that removes withdrawal rights, because that cannot be assumed from the current copy.

## Cancellation, changes, refunds, and partial performance

- **Confirmed owner decision**: before VANTAM starts work, cancellation or a scope change does not create a service fee.
- **Confirmed owner decision**: after work has started, the client pays only the amount or calculation method that was agreed in advance for work actually performed.
- **Confirmed owner decision**: documented non-refundable third-party costs may be payable if they were properly agreed in advance.
- **Recommended implementation**: cancellation, withdrawal, termination, and scope change should be defined separately, because they are not the same thing.
- **Recommended implementation**: if the client withdraws or cancels after work started, the invoice should show the performed tasks, the time or milestone basis, and any separately agreed third-party cost.
- **Recommended implementation**: any refund must return unearned amounts only, not amounts already earned under a valid written formula.
- **Recommended implementation**: do not use blanket language such as `all payments are non-refundable`.
- **Binding legal requirement**: consumer rights override any commercial wording that tries to remove statutory withdrawal or refund rights.
- **Legal-review item**: the exact partial-performance formula should be checked before launch so that it does not overcharge consumer clients.

## Rescheduling

- **Confirmed owner decision**: consultation rescheduling is free when requested at least 12 hours before the scheduled start, and if requested less than 12 hours before the scheduled start, 25 percent of the original consultation price is added to the replacement consultation.
- **Recommended implementation**: treat the late-change amount as a rescheduling fee or late-cancellation charge, not as a vague surcharge.
- **Recommended implementation**: add a genuine-emergency carve-out, because an inflexible 25 percent rule is more likely to look unfair to consumers than a proportional fee tied to actual loss.
- **Recommended implementation**: if the slot can be resold, the fee should be reduced or waived, because the actual loss is smaller.
- **Recommended implementation**: no-show treatment should be explicit, and it should say whether the fee equals the late-change fee, the full consultation fee, or something else.
- **Binding legal requirement**: any consumer rescheduling term must remain compatible with statutory withdrawal rights.
- **Legal-review item**: the 25 percent rule should not go live without a Dutch fairness review, especially for B2C bookings.

## Consultation credit

- **Confirmed owner decision**: a consultation may be credited toward a package purchased within 14 calendar days after the consultation.
- **Recommended implementation**: treat this as a commercial credit, not as the statutory withdrawal period.
- **Recommended implementation**: apply the credit once, to the same client, and only to the next qualifying package.
- **Recommended implementation**: cap the credit at the package price, so it never creates a cash refund or a negative invoice balance unless that is explicitly intended.
- **Recommended implementation**: show the credit as a separate negative line item or a separate credit note on the package invoice.
- **Recommended implementation**: if the consultation invoice is already overdue, it should still remain payable unless the credit is expressly documented as offsetting that invoice.
- **Recommended implementation**: keep the rule narrow and unambiguous, because broad or reusable credits are harder to administer and easier to dispute.

## Privacy data map

### Data categories

- **Repository fact**: the contact form collects `name`, `email`, `inquiryType`, `message`, `consent`, `language`, `sourceUrl`, `audience`, `movingDate`, `city`, `budget`, `status`, `guarantor`, `help`, and a hidden honeypot field.
- **Repository fact**: the route also derives `submittedAt` and captures the request origin and IP-derived rate-limiting state.
- **Repository fact**: the email delivery payload includes subject, plain text, HTML, tags, sender, recipient, and `reply_to`.

### Controller, purposes, and bases

- **Recommended implementation**: the controller should be described as VANTAM, operating through the `VANTAM Services` eenmanszaak, with the proprietor as the natural person controller once the legal name is confirmed.
- **Recommended implementation**: purposes should be split into `enquiry response`, `service qualification`, `service delivery`, `anti-abuse`, `technical logging`, and `optional marketing`.
- **Binding legal requirement**: the privacy notice must state the purposes and lawful bases in a way that matches the actual processing.
- **Recommended implementation**: use `contract steps` or `pre-contract request handling` for ordinary enquiry follow-up, `legitimate interest` for anti-abuse and basic security, and `consent` only for optional marketing or any non-essential tracking.
- **Binding legal requirement**: consent is not required just to reply to a request for a service quote or consultation if another lawful basis applies.

### Processors, recipients, and transfers

- **Repository fact**: Resend is a processor or at least a delivery vendor in the current flow, because the server calls `https://api.resend.com/emails`.
- **Repository fact**: the recipient mailbox is configured outside the repo in `CONTACT_TO_EMAIL`, so the exact mailbox provider is still deployment-specific.
- **Recommended implementation**: treat Gmail or any other mailbox provider as a recipient or sub-processor only after the actual mailbox setup is confirmed.
- **Recommended implementation**: treat WhatsApp Business as a separate external channel, not as part of the form pipeline, and describe it separately if client support moves there.
- **Unresolved**: I did not verify vendor transfer locations, DPAs, or SCCs in this run, so international-transfer language must stay conditional until vendor review is complete.
- **Legal-review item**: review the Resend terms, the mailbox provider terms, and the hosting provider terms before publishing the privacy notice.

### Rights and complaints

- **Binding legal requirement**: the notice should describe access, rectification, erasure, restriction, portability, objection where relevant, and the right to complain to the Dutch Data Protection Authority.
- **Recommended implementation**: publish one dedicated privacy contact channel, and reuse `vantam.request@gmail.com` only if that mailbox is actually monitored for privacy requests.
- **Recommended implementation**: the enquiry form should not use a mandatory consent checkbox as the legal basis for ordinary response handling. Use the checkbox as an acknowledgement of the privacy notice, not as a fake consent substitute.
- **Recommended implementation**: marketing consent, if added later, must stay separate and optional.

### Retention schedule

- **Confirmed owner decision**: ordinary non-client enquiries may be retained for up to 12 months after the last meaningful contact.
- **Recommended implementation**: delete or anonymise sooner when the enquiry is obviously spam, duplicate, or clearly unrelated to any service path.
- **Recommended implementation**: keep active client files only for as long as needed for service delivery, aftercare, dispute handling, and any statutory retention period that applies to the specific record type.
- **Legal-review item**: retain contracts and invoices for the statutory administration period, but confirm the exact period with the accountant before publication.
- **Recommended implementation**: keep abuse and rate-limit records only as long as needed to defend the service against abuse or to investigate incidents, then delete them.
- **Recommended implementation**: keep server and deployment logs for the shortest useful operational window, then roll them off.
- **Recommended implementation**: if WhatsApp conversations are copied into the client file, the copy in the file should become the source of truth and the original chat should be kept only as long as necessary.
- **Recommended implementation**: do not use one blanket retention period for all categories.

## Cookies and tracking

- **Repository fact**: the current repo does not show analytics, marketing pixels, third-party embeds, browser storage, or cookie-banner logic.
- **Binding legal requirement**: if the site stores or reads device information that is not strictly necessary for the service the user requested, consent becomes the default rule under the ePrivacy framework.
- **Recommended implementation**: no cookie banner is necessary for the current implementation if no non-essential cookies, pixels, analytics, or embedded third-party trackers are added.
- **Recommended implementation**: if future analytics or marketing tools are added, gate them behind consent and document them in the privacy and cookie notices before load.
- **Recommended implementation**: do not introduce storage or tracking just to support convenience features that are not needed for the service.

## Language and version strategy

- **Confirmed owner decision**: English is the main operational contractual language, Ukrainian and Russian are convenience translations, and Dutch law governs.
- **Recommended implementation**: the safest practical pattern is a separately signed language selection per contract, because it avoids a hidden-language-dispute problem and keeps the actual signed version explicit.
- **Recommended implementation**: if one controlling language must be chosen, use one version as the binding text and label the other languages as convenience translations only.
- **Recommended implementation**: do not use a language-precedence clause to erase mandatory consumer rights or to excuse misleading translations.
- **Legal-review item**: if consumer-facing legal copy is ever published in multiple languages, have the signed version and the translated copy reviewed together.

## Public-address and VAT blockers

- **Launch blocker**: do not publish final legal pages with an invented address, a placeholder address, or a fake VAT number.
- **Launch blocker**: do not call the legal identity section final until the lawful public-address treatment is confirmed.
- **Recommended implementation**: what can be drafted now is the internal structure of Terms, Privacy, and footer identity blocks, but only with placeholders kept private.
- **Recommended implementation**: what cannot be called final is any published legal footer or invoice block that omits or fabricates the legal name, address position, or VAT status.
- **Legal-review item**: confirm with a Dutch lawyer, KVK, or accountant whether a shielded establishment address may be used publicly for this exact eenmanszaak setup.
- **Binding legal requirement**: if VAT is charged, the VAT identification number must be shown on the website.
- **Recommended implementation**: if VAT is not yet available, leave that field empty in public-facing drafting and keep the issue visible in the launch checklist.

## Required public pages

- **Recommended implementation**: a Privacy Policy page is required for the future public launch because the site processes enquiry data and email delivery data.
- **Recommended implementation**: a Terms or Service Conditions page is required for the future public launch because VANTAM sells consultations, single services, and packages.
- **Recommended implementation**: a cookie page is only needed if non-essential tracking, analytics, or marketing tools are added.
- **Recommended implementation**: an accessible legal footer block should link to the privacy and terms pages and show the identity details that are legally confirmed.
- **Launch blocker**: do not publish the final public legal pages until the identity, address, VAT, and success-fee decisions are resolved.

## Required form changes

- **Recommended implementation**: split the form acknowledgements into separate controls for `Privacy Policy acknowledgement`, `Terms acceptance`, `express early-start request`, `withdrawal-right loss acknowledgement`, and `optional marketing consent`.
- **Recommended implementation**: keep the honeypot hidden and unchanged.
- **Recommended implementation**: keep the origin and rate-limit checks, but do not rely on them as the only abuse control.
- **Recommended implementation**: keep the qualification fields only if they are genuinely needed to route the request or prepare the service.
- **Recommended implementation**: add version metadata so the accepted form payload can be matched to the exact contract or appendix version later.
- **Recommended implementation**: ensure the form copy does not describe the privacy checkbox as the legal basis for service handling.

## Required contract and appendix changes

- **Recommended implementation**: every contract packet should state the parties, the exact service, the price, the due date, the document hierarchy, the accepted language version, and the exact appendix or offer version.
- **Recommended implementation**: contracts should state whether a consultation credit applies and how it is applied.
- **Recommended implementation**: contracts should state any third-party costs, the cancellation and refund rule, the rescheduling rule, and the partial-performance rule.
- **Recommended implementation**: if a success fee is ever approved, it should appear only in a separate appendix that is signed after legal review.
- **Recommended implementation**: the appendix should state that it overrides the general Terms only where it says so explicitly.
- **Recommended implementation**: archive the signed PDF or equivalent durable-medium record with a timestamp and version ID.

## Launch blockers

- **Launch blocker**: the housing success-fee clause is not cleared.
- **Launch blocker**: the public legal name and public-address position are not cleared.
- **Launch blocker**: the VAT position is not cleared.
- **Launch blocker**: the obsolete ODR platform link must not be added.
- **Launch blocker**: the collection-cost wording for consumer late payment is not yet source-verified to the level needed for final publication.
- **Launch blocker**: no public legal page should be treated as final while these gaps remain open.

## Items requiring Dutch legal review

- **Legal-review item**: contracting-party identification for a Dutch eenmanszaak when the proprietor’s full legal name is not yet authorised for publication.
- **Legal-review item**: whether a public or shielded establishment address can satisfy the website identity duty for this specific setup.
- **Legal-review item**: whether the housing support activities or the success fee create rental-mediation, brokerage, or double-representation risk.
- **Legal-review item**: whether the 25 percent late-rescheduling rule is proportionate for consumer customers.
- **Legal-review item**: the precise consumer collection-cost notice sequence and whether any formula should be stated publicly now.
- **Legal-review item**: the precise language-precedence structure for English, Ukrainian, Russian, and Dutch contract packets.
- **Legal-review item**: the exact retention schedule for client files, invoices, and communications.

## Implementation sequence

1. **Recommended implementation**: confirm the legal identity block, public-address position, and VAT position.
2. **Recommended implementation**: build the legal footer, Privacy Policy, and Terms skeletons from the confirmed identity block.
3. **Recommended implementation**: add the withdrawal and early-start workflow with separate acknowledgements and durable-medium recordkeeping.
4. **Recommended implementation**: finalise the consultation payment, rescheduling, cancellation, and credit rules.
5. **Recommended implementation**: defer the housing success-fee clause until Dutch legal review clears the classification.
6. **Recommended implementation**: verify vendor DPAs and transfer terms for Resend, the mailbox provider, the host, and WhatsApp Business.
7. **Recommended implementation**: only then publish the final public legal pages.

## Acceptance criteria for future code changes

- **Binding legal requirement**: the published privacy copy must match the actual data flow in `app/api/contact/route.ts`.
- **Binding legal requirement**: the published Terms must not include the obsolete ODR link.
- **Recommended implementation**: every accepted contract packet must be versioned, downloadable, and stored in a durable form.
- **Recommended implementation**: the contact form must keep privacy acknowledgement and marketing consent separate.
- **Recommended implementation**: the legal footer must show only confirmed identity details, and no fabricated address or VAT number.
- **Recommended implementation**: if a future change introduces tracking, it must also introduce the consent and notice work that the current repo does not need.
