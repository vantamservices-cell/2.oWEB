# Manual commercial workflow

Use these CRM statuses only: `new`, `contacted`, `consultation_proposed`, `consultation_booked`, `offer_sent`, `client`, `closed`, `spam`.

Preserved rules:

- form submission is not a contract
- consultation normally happens after payment
- consultation invoices are due within 3 calendar days
- one free consultation reschedule is allowed with at least 24 hours' notice
- no automatic no-show fee at launch
- eligible consultation credit may apply once within 14 calendar days
- extra work and third-party costs need advance written approval
- early start is separate from Terms acceptance
- Terms acceptance alone does not remove withdrawal rights
- no guaranteed external outcome
- no housing success fee
- no sensitive documents through the open form

| Stage | Action | Required document | CRM status | Evidence to retain | Hard stop |
| --- | --- | --- | --- | --- | --- |
| 1. Enquiry received | Log the enquiry, assign an enquiry ID, and classify it | Enquiry note | `new` or `spam` | Timestamp, source, raw message | Open form submission is only an enquiry |
| 2. Qualification | Check fit, urgency, and service type | Qualification note | `contacted` | Screening notes | Do not promise outcome or quote a package yet |
| 3. Consultation proposed | Send the consultation option, price, and timing | Consultation proposal email | `consultation_proposed` | Sent email and version used | Do not book until the scope and price are clear |
| 4. Consultation confirmation prepared | Draft the consultation confirmation with date, time, fee, and reschedule rule | Consultation confirmation template | `consultation_proposed` | Draft version and issue date | Do not send until trader details are verified |
| 5. Address and BTW details checked | Verify the business address and exact official BTW ID against the source document | Trader-details checklist | `consultation_proposed` | Checked source, dated checklist | HARD STOP — do not send or accept this document until the real business address has replaced the placeholder |
| 6. Consultation invoice issued | Send the consultation invoice | Invoice | `consultation_booked` | Invoice PDF and sent email | Consultation normally happens after payment |
| 7. Payment received | Confirm cleared payment before the call | Payment confirmation | `consultation_booked` | Bank or processor receipt | Do not start the consultation before payment unless a separate exception is approved |
| 8. Consultation completed | Deliver the call and send the agreed summary | Consultation notes | `contacted` | Notes, summary, meeting record | Do not add work outside the consultation scope |
| 9. Written service offer prepared | Draft the service offer or appendix | Service offer appendix | `offer_sent` | Offer version, date, and sent copy | No service starts until the same version is accepted |
| 10. Terms and consumer information attached | Attach the applicable Terms, withdrawal information, model form, and early-start request when relevant | Terms packet | `offer_sent` | Attachment list and version log | Do not mix versions or omit consumer documents |
| 11. Client accepts the same document versions | Capture acceptance of the exact same versions sent | Acceptance record | `client` | Acceptance timestamp and source | Do not accept if the versions differ |
| 12. Separate early-start request collected when applicable | Collect the separate early-start request only if work may begin during the withdrawal period | Early-start request | `client` | Signed or emailed request | Terms acceptance alone does not remove withdrawal rights |
| 13. Acceptance evidence stored | Archive the signed files, emails, and durable-medium copies | Acceptance archive | `client` | PDF archive, hashes, and sent copies | Do not rely on CRM notes alone |
| 14. Invoice issued | Send the work invoice with the agreed due date | Invoice | `client` | Invoice and sent email | Use the agreed payment term, often 3 calendar days |
| 15. Work starts | Start only after all start conditions are met | Kickoff note | `client` | Start timestamp and scope note | Do not start before acceptance, payment, and any required early-start request |
| 16. Scope changes approved in writing | Obtain written approval before extra work or third-party costs | Change approval | `client` | Written approval and updated scope | No implied scope creep or unapproved costs |
| 17. Work completed | Deliver the agreed work and close the task | Completion note | `client` | Completion email and deliverables | No guaranteed external outcome |
| 18. Cancellation, withdrawal, termination, or complaint recorded | Record the event and route any refund, response, or closure step | Notice or complaint record | `closed` | Notice, complaint log, and response sent | Do not delete evidence |
| 19. CRM record updated | Set the final status, retention category, and review or deletion date | Final CRM note | `closed` or `spam` | Final status log | Do not store passwords, unnecessary sensitive data, or full communication histories in notes |
