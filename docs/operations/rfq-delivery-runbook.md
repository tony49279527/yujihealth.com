# YUJI RFQ delivery runbook

## Current verified state — 2026-08-11

- Production `POST /api/contact/` returns HTTP `202` plus `X-RFQ-Status: accepted` only after the email provider accepts the request.
- Two controlled messages with no customer, health, or commercial data reached the connected owner mailbox.
- Inbox placement was inconsistent: the pre-release test reached Inbox; the post-release test reached Spam.
- The configured sender domain is not `yujihealth.com`. It authenticated for that different domain, so delivery works, but the public brand/sender alignment is not final.

## Required owner setup

1. In the approved email provider, add a YUJI-controlled sending subdomain such as `mail.yujihealth.com` or another domain selected by Operations.
2. Publish only the provider-issued SPF/DKIM records through the authorized DNS owner. Preserve existing SPF policy and avoid creating multiple conflicting SPF TXT records.
3. Add DMARC monitoring for the organizational domain with a policy selected by the domain owner; do not tighten enforcement before aggregate/authentication results are reviewed.
4. Set the production `RESEND_FROM` to a mailbox on the verified YUJI sender domain. Keep `INQUIRY_TO` private and keep `PUBLIC_CONTACT_EMAIL` aligned with the website.
5. Configure provider delivery, bounce, complaint, and suppression events to a private operations destination. Do not place RFQ message text or customer fields in analytics.
6. Name an English/Chinese inquiry owner and a backup. Define an internal response target only after staffing and test evidence exist; do not publish an unproven SLA.

## Acceptance test

Use a dedicated controlled test identity and no customer data. Record:

- release/commit and test timestamp;
- API status and `X-RFQ-Status` value;
- provider message ID in server logs;
- SPF, DKIM, and DMARC results for the intended YUJI sender domain;
- mailbox arrival and placement (Inbox, tab, Spam, or missing);
- bounce/complaint event behavior;
- owner acknowledgement and internal handoff time.

Pass requires HTTP `202`, provider ID, mailbox arrival outside Spam, intended-domain authentication, and a recorded owner handoff. Run at least one additional test to a different mailbox provider before treating placement as stable. A small test set is operational validation, not a deliverability-rate claim.

## Rollback

If the new sender fails authentication or delivery, restore the previously working provider configuration, keep the website email fallback visible, and record the failure. Do not change DNS, provider account settings, or production environment variables without the authorized account/domain owner.
