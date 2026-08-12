# YUJI SEO optimization effect review — 2026-08-12

## Bottom line

The 2026-08-10/11 release is technically effective: the intended HTML, Chinese RFQ form, analytics queue, API acceptance semantics, cache policy, internal links, and privacy wording are live and validated. It is too early to attribute search or sales growth to the release because the latest successfully retrieved Search Console data ends on 2026-08-07, before deployment, and no non-test RFQ has appeared in the connected mailbox since deployment.

This is an evidence boundary, not a claim that the optimization succeeded commercially or failed.

## Effect by layer

| Layer | Current verdict | Evidence | Next decision point |
| --- | --- | --- | --- |
| Technical release | Effective | Production 30-URL body comparison passed against `df4d28a`; canonical, H1, JSON-LD, visible FAQ parity, high-risk claim scan, RFQ audit, cache headers, and API smoke passed | Keep monitoring for regressions |
| Buyer journey | Effective as an intake path | Chinese/English structured RFQ routes are live; API distinguishes provider acceptance with HTTP `202`; two controlled emails reached the mailbox | Fix sender-domain alignment and Spam placement before claiming reliable inbox delivery |
| Analytics instrumentation | Code is live; account receipt unknown | Plausible queue/script and bounded non-PII events are present in production | Verify dashboard event receipt/export with an authorized account |
| Google crawling/indexing | No post-release conclusion yet | Latest successful Inspection baseline: 27/30 indexed; Applications, Resources, and Quality Evidence discovered but not indexed | Recheck after Google has had time to crawl the release |
| Organic performance | No attributable post-release data | Latest successful GSC window ends 2026-08-07: 28 days 140 impressions/1 click; 7 days 25 impressions/1 click | Compare equal pre/post windows when GSC includes the release dates |
| Qualified inquiries | No observed post-release growth | Gmail search after 2026-08-10 found the Internal QA thread only; excluding `Internal QA` returned zero messages | Track real delivered and qualified RFQs; do not use test inquiries as leads |

## 2026-08-12 data-access status

- The Google credential remains available, but `searchconsole.googleapis.com` timed out. The GSC script now uses a 15-second request timeout, three controlled retries, and reports endpoint/attempt/root-cause details instead of only `fetch failed`.
- Plausible's dashboard also timed out from the available browser session, so account ownership and event receipt could not be verified.
- These failures prevent a new outcome read; they do not indicate that yujihealth.com itself is unavailable. The production homepage returned HTTP 200.

## Additional improvements released in this review

Production release `1094319` completed the following:

1. Added a branded static `404.html` with genuine recovery paths to Products, Quality Evidence, the RFQ checklist, Contact, and Chinese Home. An unknown production URL returns HTTP 404 with this body and `noindex, follow`.
2. Removed `Product` JSON-LD from three product-family/RFQ pages. They describe configurable ranges rather than one buyable, evidence-approved SKU, and no Offer is present. Accurate WebPage, BreadcrumbList, and visible FAQ markup remain.
3. Added `seo-audit` to `.vercelignore`. The previously public internal priority backlog CSV now returns HTTP 404, while the repository record remains intact.
4. Improved GSC network-error diagnostics and bounded timeout handling. The failed retry now identifies `ETIMEDOUT`, the endpoint, and attempt count.
5. Revalidated all 30 sitemap URLs against the exact release body; HTTP, canonical, H1, JSON-LD, visible FAQ parity, and high-risk claim scans passed.

The post-release PageSpeed retry could not complete because the external PSI request also failed. This does not override the successful production HTTP/body validation or the earlier 97–100 mobile lab scores; it is recorded as unavailable rather than reused as a new measurement.

## Measurement rule

The first defensible effect read requires a complete post-release GSC window and stable definitions. Compare the same dimensions separately:

- 7-day date/page/query window against the immediately preceding 7 days;
- 28-day date/page/query window against the immediately preceding 28 days;
- per-URL Inspection for the three non-indexed hubs;
- non-test delivered RFQs, Spam placement, qualified RFQs, samples, quotes, and wins;
- Plausible account-side receipt for `contact_arrival`, `rfq_start`, `rfq_submit_client`, and `rfq_provider_accepted`.

Low-volume observations must not be converted into a CTR, ranking, lead, or revenue promise.

## External dependencies still open

- Seven real evidence assets and exact-file public approvals.
- Plausible account/domain ownership and export access.
- A verified YUJI-controlled sender domain plus bounce/complaint/placement monitoring.
- Named English and Chinese sales owners plus private qualification/sample/quote/win records.

Existing scheduled reviews remain active for 2026-09-10 and 2026-10-10. An earlier 7-day automation creation was attempted on 2026-08-12, but the automation service did not confirm creation; no duplicate was created or reported as successful.
