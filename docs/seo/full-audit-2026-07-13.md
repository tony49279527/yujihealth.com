# YUJI B2B SEO and GEO Audit - 2026-07-13

## Scope and evidence

- Repository and production site: `https://yujihealth.com/`
- Indexable pages audited: 18
- Evidence: local HTML crawl, live redirect checks, sitemap/robots, current GSC reports, and PageSpeed report `pagespeed-2026-07-12T23-22-25-963Z.json`
- Excluded from page-quality findings: the Google verification token file and noindex HTML templates under `docs/seo/templates/`

## Module 1 - Technical SEO

### Rendering

The site is pre-rendered static HTML. Titles, metadata, headings, body copy, links, images, and JSON-LD are present in the initial response; the site does not depend on client-side rendering for indexable content.

### Robots

```text
User-agent: *
Allow: /

Sitemap: https://yujihealth.com/sitemap.xml
```

No crawler is blocked. The wildcard rule allows Googlebot, Bingbot, GPTBot, CCBot, Anthropic crawlers, and PerplexityBot. Adding duplicate crawler-specific rules is unnecessary.

### Sitemap, indexability, and orphan pages

- Sitemap is valid XML and contains exactly 18 production pages.
- All 18 indexable pages have at least one internal link; no indexable orphan page was found.
- The lowest high-intent guide counts were raised from 2-3 independent source pages to 5.
- No production content page currently warrants `noindex` based on technical quality alone.
- `googlef9a6056d748bb958.html` is a verification token, not a content page. It should remain unchanged and outside the sitemap.
- Alternative, comparison, and industry templates use `noindex, nofollow` until facts are completed and reviewed.

### Redirects

| Start URL | Redirects | Final URL | Action |
| --- | ---: | --- | --- |
| `http://yujihealth.com/` | 1 | `https://yujihealth.com/` | Healthy |
| `https://www.yujihealth.com/` | 1 | `https://yujihealth.com/` | Healthy |
| `http://www.yujihealth.com/` | 2 | `https://yujihealth.com/` | Platform HTTP-to-HTTPS hop followed by host canonicalization; no local code fix available |
| `/products` | 1 | `/products/` | Expected trailing-slash normalization |
| `/about` | 1 | `/about/` | Expected trailing-slash normalization |

No A-to-B-to-C chain was found among canonical HTTPS page links.

### Core Web Vitals and assets

- No synchronous render-blocking JavaScript was found; the site script uses `defer`.
- All content images have `alt`, `width`, and `height`. Empty logo alt text is intentional because those logos are decorative and marked `aria-hidden="true"`.
- Non-hero content images use lazy loading. Hero images intentionally load eagerly.
- Six source JPG files exceed 150 KB, with the largest at 358 KB. Each has a smaller 960 px responsive variant and `srcset`/`sizes` coverage.
- Current PageSpeed evidence remains strong: mobile Performance minimum 99, desktop 100, Accessibility minimum 98, Best Practices 100, SEO 100.

### Internal-link structure

The hierarchy is clear: Home -> Products/Applications/Resources -> product and procurement guides -> RFQ/Contact. Product, quality, OEM, and contact pages receive sitewide navigation/footer links.

High-intent guide inbound source-page counts after this pass:

| Target page | Independent source pages |
| --- | ---: |
| Cup OEM MOQ | 5 |
| Disc OEM MOQ | 5 |
| Cup OEM sourcing guide | 5 |
| Private-label sanitary pads China | 5 |

## Module 2 - Keyword strategy

The exact page-to-keyword review is maintained in `docs/seo/keyword-map-2026-07-13.md`. Priorities remain OEM, manufacturer, private label, MOQ, sourcing, quote, documents, and product comparison terms.

GSC data is still too small for reliable keyword-volume conclusions: 26 page impressions, no clicks, and one disclosed query/page row in the latest complete 28-day dataset. Ahrefs/SEMrush KD and volume remain pending because no licensed export is available.

## Module 3 - High-conversion templates

- `competitor-alternative.template.html`: complete noindex template with Organization, Breadcrumb, FAQ, 5-supplier comparison structure, price/MOQ/document fields, and top/middle/bottom CTAs.
- `competitor-comparison.template.html`: complete noindex template with Organization, Breadcrumb, FAQ, decision table, buyer-fit section, and owned-data case-study gate.
- `industry-use-case.template.html`: complete noindex template with industry pain points, solution mapping, evidence requirements, permissioned testimonial gate, compliance boundary, and FAQ.

Templates must not be made indexable until competitor facts, pricing dates, document scope, customer permission, and result evidence are supplied.

## Module 4 - On-page execution

- Every production page has one unique H1, a canonical, a Title no longer than 60 characters, and a Description no longer than 155 characters.
- No duplicate production Title or Description was found.
- No content image is missing alt text or dimensions.
- Existing long paragraphs are generally one to three sentences; character length alone was not used to force unnatural fragmentation.
- The live cup-vs-disc comparison now includes three visible buyer FAQs and matching FAQPage JSON-LD.
- Four high-intent guides now meet the five-source internal-link target.

## Module 5 - GEO execution

- Homepage Organization includes legal name, brand, address, email, logo, company LinkedIn, and export-contact LinkedIn.
- Every non-home production page has BreadcrumbList.
- Product pages have Product schema; quote-based products do not publish fabricated prices or availability claims.
- Resource guides use Article schema where appropriate.
- FAQPage is used only where the same questions and answers are visible on the page.
- Claims that FAQ schema guarantees rich results or doubles AI citations were not treated as facts; structured data improves machine readability but does not guarantee display or citation.

## Remaining evidence-dependent work

1. Supply named competitors and dated primary sources before publishing alternative or competitor pages.
2. Supply permissioned customer name, role, company, quote, baseline, and measured result before publishing case-study claims.
3. Supply Ahrefs/SEMrush exports if KD and search volume must be added.
4. Monitor the five recently unindexed URLs in GSC; indexing timing is controlled by Google.
