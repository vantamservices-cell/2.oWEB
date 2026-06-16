# Withdrawal Request Workflow

Use this workflow for requests submitted through the public withdrawal page. It is separate from ordinary enquiries, contract acceptance, payment collection, and refund decisions.

## 0. Gmail setup

- Use Gmail API OAuth 2.0 only.
- Enable the Gmail API in the Google Cloud project that owns the sending mailbox.
- Configure an OAuth client, complete consent, and store a refresh token for the monitored account.
- Grant only the `https://www.googleapis.com/auth/gmail.send` scope needed for acknowledgements.
- Set `GMAIL_SENDER_ADDRESS` to the monitored Gmail address or an approved alias on that account.
- Do not use SMTP passwords, app passwords, or Resend for this flow.

## 1. Locate the request

- Search the withdrawal database by `public_reference`.
- Confirm the timestamp, current status, and whether `acknowledgement_sent_at` is present.
- Do not copy the full request into CRM notes.

## 2. Verify the contract

- Match the `contract_reference` against the relevant offer, confirmation, invoice, or accepted document set.
- Confirm the requester identity using the stored name and email together with the contract file.
- Check whether the service category and timing make the withdrawal request relevant to the specific contract.

## 3. Manual acknowledgement if Gmail failed

- If the request is stored but `acknowledgement_sent_at` is empty, treat the request as received but not yet acknowledged on a durable medium.
- Send the acknowledgement manually through the monitored Gmail mailbox.
- After manual delivery, update `status` to `acknowledged` and set `acknowledgement_sent_at`.
- Do not duplicate the request row.

## 4. Receipt is not legal acceptance

- Receipt of the request only confirms that VANTAM got the notice.
- Do not tell the customer that the request is legally valid unless the specific contract has been checked and the legal position is confirmed.

## 5. Status transitions

- `received`: request stored, acknowledgement not yet sent.
- `acknowledged`: acknowledgement email sent or manually confirmed.
- `under_review`: contract verification or legal review is in progress.
- `processed`: the operational follow-up is complete.
- `closed`: no further operational action is needed.

## 6. Escalation

- Escalate to the owner or legal reviewer if the contract reference is unclear, the request appears to fall into an exception, or the service was already completed.
- Escalate if the requester disputes the identity match or says the request was submitted in error.
- Escalate if there is any concern about statutory timing, proportional payment, or a possible loss of the withdrawal right.

## 7. Refund handling

- Treat refund handling as a separate decision from receipt of the withdrawal request.
- Confirm what amount, if any, is legally due before making any repayment or offset.
- Do not promise a refund in the acknowledgement email.

## 8. Retention

- Do not delete a withdrawal request until the applicable retention category has been established.
- If retention is later defined, apply it consistently and document the decision.
