# Cycle 2 Open Blockers

Access date: 2026-06-16

This file records unresolved launch blockers for the English legal and commercial document foundation. Optional improvements are not listed as blockers.

## Launch Blockers

### 1. Required trader / business address before online B2C contracting

Why it matters: Consumer distance-contract information requires a trader address / geographical address before consumers are bound. The business address has not been authorised for website publication.

What may continue now: Internal drafting, document structure, source register, placeholder use, and non-public legal review preparation.

What must remain disabled: Launch-ready public B2C Terms, online consumer booking / checkout, and any final contract packet that omits the legally required address or publishes an invented address.

Closure evidence needed: Written owner approval and legal / accountant / KVK confirmation of the exact address treatment allowed for this Dutch eenmanszaak, plus the final address inserted in every document sent to a client.

### 2. Public BTW ID available, exact format still needs copying

Why it matters: VANTAM is registered for VAT, does not use KOR, and expects quarterly VAT returns. The public btw-identificatienummer is available from Belastingdienst, and the private omzetbelastingnummer must not be exposed.

What may continue now: Internal templates can show the exact BTW ID line copied from the official Belastingdienst document and state that the applicable VAT rate must be confirmed for each service.

What must remain disabled: Final client documents that legally require the trader-information block until the exact official format has been copied into the relevant template.

Closure evidence needed: The official public BTW ID from Belastingdienst, verified as the public btw-identificatienummer and copied into the relevant templates in the exact official format, with the private omzetbelastingnummer not exposed.

### 3. Housing success fee and tenant-side remuneration pending specialist Dutch review

Why it matters: Housing support may create Dutch rental mediation, brokerage, or tenant-side remuneration risk if fees depend on finding or securing housing or if VANTAM is treated as an intermediary.

What may continue now: Practical housing preparation, communication support, application-file preparation, rental-contract explanation, scam-risk awareness, and landlord-message support within a fixed or clearly agreed practical-support fee model.

What must remain disabled: Any housing success fee, result-linked tenancy fee, commission, tenant-side brokerage remuneration, landlord-side representation, or wording that VANTAM secures housing.

Closure evidence needed: Specialist Dutch legal written approval of the exact housing activities, fee trigger, role description, client disclosures, and contract wording.

### 4. Final Dutch legal review before launch

Why it matters: The documents are English drafts for a Dutch eenmanszaak and consumer-facing distance services. Final Dutch legal review is needed before public launch or paid B2C acceptance.

What may continue now: Internal preparation, owner review, quote-packet workflow design, and non-public revision.

What must remain disabled: Treating the Terms, withdrawal documents, early-start request, or templates as operational documents.

Closure evidence needed: Written owner approval plus documented legal-review comments resolved in the final documents. OWNER REVIEW REQUIRED — the owner must complete and record the final legal review before operational use.

### 5. Consumer late-payment collection wording not final

Why it matters: Consumer late-payment enforcement has mandatory Dutch reminder, interest, and collection-cost rules. Incorrect statutory percentages, amounts, or automatic penalties could be misleading or unfair.

What may continue now: Documents may state the agreed payment deadline and reserve lawful reminder / collection procedures.

What must remain disabled: Any automatic consumer collection-cost amount, unsupported statutory percentage, arbitrary penalty, or fixed collection formula.

Closure evidence needed: Current official-source verification or Dutch legal/accounting review of the exact reminder text, timing, interest wording, and collection-cost amounts.

### 6. Online withdrawal function - Dutch implementation status and technical implementation

Why it matters: VANTAM intends to conclude consumer distance service contracts through an online interface in a later acceptance flow. Where a withdrawal right exists and the contract is concluded through an online interface, Article 11a of Directive 2011/83/EU, as inserted by Directive (EU) 2023/2673, requires an online withdrawal function. EU Member States must apply the Directive's measures from 19 June 2026, but current Dutch official guidance says Dutch entry into force is expected and not yet final because it still depends on parliamentary passage and official publication.

What may continue now: Internal drafting, legal workflow planning, and the current non-contractual contact form for enquiries. This blocker does not prevent VANTAM from receiving enquiries through the current contact form because that form does not conclude a contract, accept Terms, create a payment obligation, or request early performance.

What must remain disabled: The online B2C acceptance flow must remain disabled if the applicable Dutch rule is in force and the required withdrawal function has not been implemented. Do not launch an online consumer contract flow that creates distance service contracts through an online interface without rechecking the Dutch implementation status immediately before launch.

Closure evidence needed:

1. current Dutch implementation law/status verified from an official source immediately before launching the online B2C acceptance flow;
2. withdrawal function implemented if required;
3. end-to-end confirmation and record-retention test completed.

Functional requirements to carry into the later Cycle 2C implementation:

- clear entry point such as "Withdraw from contract here";
- continuous availability during the withdrawal period;
- collection or confirmation of consumer name, contract-identifying details, and electronic acknowledgement destination;
- separate confirmation action such as "Confirm withdrawal";
- acknowledgement without undue delay on a durable medium containing the submitted content, date, and time;
- evidence retention;
- accessibility and multilingual consistency;
- no login requirement unless legally justified and the function remains genuinely easy to access.

## Website Alignment Required in a Later Focused Task

These are not blockers for creating the internal English legal document foundation, because the Cycle 2B task says not to modify website code.

### A. Public footer shows operating city but not the required full trader address

Current website evidence: the footer uses VANTAM Services, KvK 42080058, and The Hague / Netherlands from `lib/business.ts`.

Why alignment is needed: The legal documents mark the full trader address as unresolved and not launch-ready for online B2C contracting.

Later action: Once the address treatment is legally resolved, update the public legal footer and legal pages in a focused website task.

### B. Website consultation payment copy is less specific than Cycle 2B documents

Current website evidence: the FAQ says payment is agreed in the written offer and confirmed before work starts; consultation cards show prices but not the 3-calendar-day invoice term or payment-before-consultation rule.

Why alignment is needed: Cycle 2B confirms the consultation invoice is due within 3 calendar days and the consultation normally occurs after payment.

Later action: Add precise consultation payment and booking copy in a focused copy/legal UI task.

### C. Website does not publish the 24-hour consultation rescheduling rule

Current website evidence: no explicit public rescheduling rule was found in the consultation or FAQ copy.

Why alignment is needed: Cycle 2B confirms one free consultation rescheduling with at least 24 hours' notice and no automatic no-show penalty.

Later action: Add the rule in the relevant consultation confirmation and public Terms / booking flow once legal pages are implemented.

### D. Website cancellation and refund copy still says the written offer controls

Current website evidence: the FAQ says cancellation or refund terms are confirmed in the written offer and no universal website policy is published yet.

Why alignment is needed: The new documents define separate concepts for withdrawal, cancellation before work begins, termination after work begins, VANTAM termination, non-payment, lack of cooperation, and rescheduling.

Later action: Implement public Terms and align FAQ wording without changing the enquiry-only contact form.

### E. Website services remain informational and should stay enquiry-only

Current website evidence: service and package CTAs prefill the contact form; the Privacy Policy already says the open form is a minimal enquiry and does not create a contract or payment obligation.

Why alignment is needed: Future acceptance flow must preserve separation between enquiry, Terms acceptance, withdrawal information, and early-start request.

Later action: When a paid acceptance flow is built, add versioned durable-medium acceptance evidence and separate early-start consent.
