# SEO Operations

This repository includes durable PageSpeed and Google Search Console tooling for `yujihealth.com`.

## Local Setup

1. Copy `.env.example` to `.env.local`.
2. Set `PSI_API_KEY` to a PageSpeed Insights API key restricted to `pagespeedonline.googleapis.com`.
3. For GSC, use one of:
   - `gcloud auth application-default login` with a credential that has Search Console access.
   - `GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json`, after adding the service account to Search Console.
   - `GSC_SERVICE_ACCOUNT_JSON` in CI, after adding the service account to Search Console.

## Commands

```bash
npm run seo:pagespeed
npm run seo:pagespeed -- --strategy=mobile --only=Home
npm run seo:gsc:sites
npm run seo:gsc:sitemaps
npm run seo:gsc:submit-sitemap
npm run seo:gsc:query
npm run seo:gsc:query -- --dimensions=page
npm run seo:gsc:monitor
npm run seo:gsc:inspect -- --url=https://yujihealth.com/products/menstrual-cups/
npm run seo:gsc:inspect-all
npm run seo:test
```

Reports are written under `reports/`, which is intentionally ignored by git.

The weekly workflow compares the latest complete 28-day period with the preceding 28 days, allowing three days for Search Console processing. It exports separate date, page, query/page, country, and device views so totals, landing-page movement, demand language, geography, and device effects are not mixed together. Alerts require a minimum baseline of 100 impressions; click alerts also require at least five prior-period clicks. Thresholds live in `config/seo-targets.json` and should be reviewed only after the site has enough stable data.

Use the `date` export or the monitor summary for site totals. Do not sum query/page rows as an authoritative total because Search Console can omit anonymized queries and apply row limits.

## GSC Property

Use the URL-prefix property:

```text
https://yujihealth.com/
```

The preferred verification method for this static site is an HTML verification file at the site root. After verification, submit:

```text
https://yujihealth.com/sitemap.xml
```

For CI-based GSC checks, add the service account email as a user on the verified property.

## Contact Form Sender

Set `RESEND_FROM` to a verified sender on the production domain, for example:

```text
YUJI Website <info@yujihealth.com>
```

The API falls back to the public contact email if `RESEND_FROM` is absent, but production should use an explicitly verified Resend sender to avoid delivery failures.
