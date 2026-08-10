# YUJI evidence, conversion, and GSC baseline — 2026-08-11

## Decision summary

- Keep the current SEO release and observe; do not create new indexable pages from this sample.
- The website RFQ path is operational but inbox placement is not stable: two controlled production inquiries containing no customer or health data were confirmed in the connected owner mailbox; the pre-release test reached Inbox and the post-release test reached Spam.
- Treat provider acceptance and mailbox arrival as separate facts. The API now reports provider acceptance as HTTP `202`; it does not claim delivery from the HTTP response alone.
- Plausible aggregate analytics is enabled, but the prior page did not initialize the custom-event queue. Production release `6c9f89b` fixes the initialization and adds non-PII funnel events. Dashboard ownership, event receipt, API/export access, and historical completeness are still unverified.
- Public evidence remains the main owner dependency: 1 of 8 manifest records is approved for public use, and that one is explicitly illustrative. Seven real-evidence records remain blocked until source review, redaction, and written public approval.

## Scope and evidence

| Area | Verified state | Evidence | Decision |
| --- | --- | --- | --- |
| Public evidence | 1 approved-public illustrative asset; 7 unreviewed pending records | `docs/evidence/evidence-manifest.csv`; `docs/evidence/evidence-approval-request-2026-08-10.md` | Do not publish or imply real certificates/tests until the exact redacted file and claim receive written approval. |
| English RFQ API | Valid request accepted by provider path; invalid email, honeypot, and missing-config branches pass | `/tmp/yuji-contact-api-test.mjs`; `api/contact.js` | Return `202 accepted`, log provider ID without RFQ text/PII, and keep delivery as a separate operational check. |
| Production delivery | Two controlled, non-customer inquiries confirmed in the connected owner mailbox: one Inbox, one Spam | Dated mailbox/thread review on 2026-08-10/11 local time | Provider acceptance and mailbox arrival work, but stable inbox placement is not proven; this is not a deliverability-rate claim. |
| Sender alignment | Configured sender domain differs from the public `yujihealth.com` domain; the test messages authenticated for that different sender domain | Controlled delivery headers | Operations must align and authenticate the intended YUJI sender domain and monitor placement/bounces before treating sender identity or deliverability as final. |
| Chinese RFQ | Structured Chinese form, Chinese validation/status copy, privacy warning, and email fallback are live | Production release `6c9f89b`; 30-URL body validation; browser DOM check | Maintain the Chinese RFQ route, but do not state a response-time SLA until Sales assigns an owner and proves it. |
| Analytics | Plausible script and custom-event queue initialization are live | Production release `6c9f89b`; `config/analytics.json`; `assets/main.js`; browser DOM check | Verify real event receipt and dashboard/export ownership before interpreting conversion rates. |

## Minimum funnel definition

| Stage | Current implementation | What it proves | What it does not prove |
| --- | --- | --- | --- |
| `organic_landing` | GSC click plus landing-page report; aggregate analytics page view when available | Search click/page arrival in its respective system | A qualified buyer or inquiry |
| `product_cta` | Browser event with source page and requested product only | A contact-link action | Contact-page load or form completion |
| `contact_arrival` | Browser event on English/Chinese contact paths | Contact page reached | Form started |
| `rfq_start` | One-time first non-empty form interaction | Form interaction began | Valid submission |
| `rfq_submit_client` | Browser event immediately before API request | Client attempted submission | Provider acceptance or delivery |
| `rfq_provider_accepted` | Browser event after accepted API response; server logs provider ID | Email provider accepted the request | Mailbox delivery, sales qualification, or reply |
| `rfq_delivered` | Controlled mailbox confirmation only; no automated webhook | Both individual tests reached the mailbox | General deliverability or inbox-placement rate; the post-release test reached Spam |
| `qualified_rfq`, `sample_request`, `quote_sent`, `won_project` | Not implemented | Nothing yet | Commercial conversion |

No event property includes a person's name, email address, company, message text, health data, or document request text. Country is intentionally excluded from browser analytics until ownership and privacy review are complete.

## Search Console baseline

Search Console performance data is complete through 2026-08-07. Totals below use the `date` dimension only; page/query/country/device totals are not mixed with it.

| Window | Clicks | Impressions | CTR | Interpretation |
| --- | ---: | ---: | ---: | --- |
| 2026-07-11 to 2026-08-07 (28 days) | 1 | 140 | 0.71% | Emerging visibility, insufficient for causal CTR or ranking claims. |
| 2026-08-01 to 2026-08-07 (7 days) | 1 | 25 | 4.00% | One-click sample; not a stable trend. |

The 28-day page report contains 20 landing pages. The menstrual-cup product page recorded the only click; Home recorded 83 impressions, About 22, Contact 12, Quality 12, and the RFQ checklist 8. Query privacy thresholds expose only 6 query rows for the 28-day window, so page and date impressions cannot be reconstructed from query rows.

Device results for the 28-day window were 82 desktop impressions/1 click, 55 mobile impressions/0 clicks, and 3 tablet impressions/0 clicks. Search appearance returned zero rows. These are measurement facts, not recommendations to optimize only for desktop.

## Indexing baseline

URL Inspection on the 30 sitemap URLs reports 27 `PASS / Submitted and indexed` pages. Three URLs remain `Discovered - currently not indexed`:

- `/applications/`
- `/quality/evidence/`
- `/resources/`

The sitemap endpoint reports 30 submitted URLs, zero errors, and zero warnings, but its aggregate `indexed: 0` conflicts with URL Inspection and observed performance. Use per-URL Inspection and performance data as the decision-grade record; do not treat sitemap submission or its aggregate as proof of indexing.

## 30/60-day review gates

- 30-day review: automation `yuji-seo-30`, scheduled for 2026-09-10 at 09:30 local time. Re-run 28-day and 7-day GSC date/page/query reports, inspect the three unindexed hubs, verify Plausible event receipt/export, and record any real RFQ stage data available.
- 60-day review: automation `yuji-seo-60`, scheduled for 2026-10-10 at 09:30 local time. Repeat the same checks, then decide separately for each hub whether to retain, strengthen, consolidate, or propose a migration. Do not redirect or remove a URL without a separate reviewed migration plan.
- Keep the same event definitions and dimension rules. Do not promise indexing, rankings, leads, or revenue.

## Production release validation

- Release `6c9f89b` is live. All 30 sitemap URLs exactly match the committed HTML and pass HTTP, canonical, H1, JSON-LD, visible-FAQ parity, and high-risk claim checks.
- The unversioned `assets/main.js` now returns `Cache-Control: public, max-age=0, must-revalidate`, preventing a year-long immutable cache from retaining old form/analytics logic.
- API smoke results: GET `405`, invalid email `400`, honeypot `200`, and valid controlled inquiry `202` with `X-RFQ-Status: accepted`.
- Mobile PageSpeed for Chinese Contact after release: Performance 97, Accessibility 98, Best Practices 100, SEO 100, LCP 1.9 seconds, CLS 0; field INP/CrUX data is unavailable.

## External owner actions

1. Operations/Quality/Compliance: provide the seven controlled evidence sources through a restricted location and complete the written approval record for any exact public derivative.
2. Data owner: confirm the Plausible account/domain owner, verify live receipt for `contact_arrival`, `rfq_start`, `rfq_submit_client`, and `rfq_provider_accepted`, and export a dated test record.
3. Operations: follow `docs/operations/rfq-delivery-runbook.md` to align the configured sender with an authenticated YUJI-controlled sender domain and record bounce, complaint, delivery, placement, and owner handoff evidence.
4. Sales: assign English and Chinese inquiry owners, define an internal response target, and track qualification, sample, quote, and won/lost stages in a private controlled system.

This baseline records verified facts and open dependencies. It does not guarantee indexing, ranking, traffic, inquiries, or sales.
