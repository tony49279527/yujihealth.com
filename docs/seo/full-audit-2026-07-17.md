# YUJI SEO / GEO Full Audit — 2026-07-17

## 1. Executive Summary

| Item | Value |
| --- | --- |
| Site | `https://yujihealth.com/` |
| Business | Feminine care OEM/ODM manufacturer (Xi'an Yuji Biotechnology Co., Ltd. / YUJI) |
| Target markets (site signals) | North America, Europe, Middle East, Southeast Asia; English primary |
| Core conversion | RFQ / samples / specs via `/contact/` + `info@yujihealth.com` |
| Audit date | 2026-07-17 |
| Repo HEAD baseline | `9b9d193` (Improve site accessibility, 11:34) + this pass local fixes |
| Evidence limits | Local HTML/code crawl (E1), GSC/PSI reports (E2). **Live HTTP/browser egress blocked in this session** — production parity for redirects/status not re-probed live. No Ahrefs/SEMrush. No AI-platform GEO runs this session. |

**Weighted score: 76 / 100** (public page + code evidence; not a certification).

| Module | Raw /5 | Weight | Weighted |
| --- | ---: | ---: | ---: |
| Technical SEO & indexing | 4.5 | 18 | 16.2 |
| Page SEO | 4.3 | 12 | 10.3 |
| Content quality & procurement info | 4.0 | 16 | 12.8 |
| Demand, keywords & topic coverage | 3.2 | 12 | 7.7 |
| E-E-A-T, entity & trust | 3.0 | 14 | 8.4 |
| GEO & AI visibility | 3.5 | 18 | 12.6 |
| RFQ conversion path | 4.0 | 10 | 8.0 |

### Top problems

1. **Growth bottleneck is off-site + evidence, not tags** — GSC ~48 page impressions / 0 clicks (7-day page window sample); brand queries dominate disclosed queries.
2. **4 hub URLs still “Discovered – currently not indexed”** — `/products/`, `/applications/`, `/quality/evidence/`, `/resources/` (GSC inspect 2026-07-17).
3. **Public trust evidence still request-only** — no approved redacted certificate/QC samples on-site.
4. **No on-site analytics funnel** — cannot measure visit → RFQ (requires privacy/account approval).
5. **Home stats lacked onboarding caveat** (fixed this pass); About still carries patent/shipment figures that need file verification (`Content Dependency`).

### Top opportunities

1. Publish approved redacted evidence pack samples on `/quality/evidence/`.
2. One permissioned anonymous case study + LinkedIn/directory distribution.
3. CTR tests on Home/About after more impression volume (currently too small).
4. Commercial-terms FAQ (samples, tooling, Incoterms) from real policy only.
5. Keep English authority first; multilanguage only after inquiry geography justifies it.

### Completed in this pass (local)

- Home hero stats verification note.
- Resources FAQ reframed away from medical “safe?” wording; FAQPage synced.
- Products hub MOQ reference caveat; Evidence page publishability boundary clarified.
- Privacy title/schema alignment; sitemap `lastmod` refreshed to 2026-07-17.
- RFQ journey script: 19 pages, 0 errors / 0 warnings.

### Needs user decision

- Deploy production; GSC re-inspect / optional index request for 4 hubs.
- Approve analytics stack + privacy wording.
- Supply verifiable figures, redacted certs, case permissions, WhatsApp/phone if desired.
- DNS DMARC (prior audit); directory outreach authorization.

---

## 2. Scope & Method

| Metric | Count |
| --- | ---: |
| Discovered production HTML pages | 19 |
| Sitemap URLs | 19 (1:1 match) |
| Local technical check | 19 / 19 |
| Human template review | All templates (home, product hub, product, applications, OEM, quality, evidence, about, resources hub, article guides, contact, privacy) |
| Languages | English only (intentional) |
| Live HTTP re-check this session | Blocked (egress approval required) |

**Data sources:** repo HTML/CSS/JS/API, `sitemap.xml`, `robots.txt`, `vercel.json`, `config/seo-targets.json`, `reports/gsc/*` (latest inspect-all 2026-07-17), `reports/pagespeed/pagespeed-2026-07-17T03-37-25-046Z.json` (partial URL sample), prior audits 2026-07-13/15, RFQ journey script.

**Assumptions (labeled):** Qualified inquiry = named company + market + product category + quantity/packaging/document needs. Primary SEO language = English B2B OEM.

---

## 3. URL Inventory

| URL | Type | Indexable | Canonical self | Business | Source | Audit |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | Home | Yes | Yes | Critical | `index.html` | Done |
| `/products/` | Category hub | Yes* | Yes | High | `products/index.html` | Done |
| `/products/menstrual-cups/` | Product | Yes | Yes | Critical | cups HTML | Done |
| `/products/menstrual-discs/` | Product | Yes | Yes | Critical | discs HTML | Done |
| `/products/pads-liners/` | Product | Yes | Yes | High | pads HTML | Done |
| `/applications/` | Solutions | Yes* | Yes | High | applications | Done |
| `/oem-odm/` | Service | Yes | Yes | High | oem-odm | Done |
| `/quality/` | Trust | Yes | Yes | High | quality | Done |
| `/quality/evidence/` | Trust/docs | Yes* | Yes | High | evidence | Done |
| `/about/` | Entity | Yes | Yes | High | about | Done |
| `/resources/` | Resource hub | Yes* | Yes | High | resources | Done |
| `/resources/menstrual-cup-oem-sourcing-guide/` | Guide | Yes | Yes | High | article | Done |
| `/resources/menstrual-cup-vs-disc-oem/` | Comparison | Yes | Yes | High | article | Done |
| `/resources/menstrual-cup-oem-moq/` | Guide | Yes | Yes | High | article | Done |
| `/resources/menstrual-disc-oem-moq/` | Guide | Yes | Yes | High | article | Done |
| `/resources/private-label-sanitary-pads-china/` | Guide | Yes | Yes | High | article | Done |
| `/resources/feminine-care-oem-rfq-checklist/` | Checklist | Yes | Yes | High | article | Done |
| `/contact/` | Conversion | Yes | Yes | Critical | contact | Done |
| `/privacy/` | Policy | Yes | Yes | Medium | privacy | Done |

\*GSC: Discovered – currently not indexed (2026-07-17 inspect).

Non-content: `googlef9a6056d748bb958.html` (verification), `downloads/*`, `gpt-site/` (separate), `docs/seo/templates/*` noindex templates — out of sitemap.

---

## 4. Scoring Matrix (detail)

| Module | /5 | Confidence | Primary evidence |
| --- | ---: | --- | --- |
| Technical SEO | 4.5 | High | Static HTML indexable; robots Allow; sitemap 19; prior redirect health; PSI mobile Home perf 0.99 / a11y-seo 1.0 (sample). Deduct: 4 hubs unindexed; live recheck blocked. |
| Page SEO | 4.3 | High | 19 unique titles/descriptions; 1 H1 each; breadcrumbs; OG. |
| Content / procurement | 4.0 | High | MOQ, RFQ, channel tables, line-sheet PDF. Gap: published evidence samples, deep commercial terms. |
| Demand / keywords | 3.2 | Medium | Cluster map exists; GSC tiny (3 disclosed queries). No KD/volume tools. |
| E-E-A-T / entity | 3.0 | Medium | Legal name, LinkedIn sameAs, careful cert wording. Gap: unverified stats, no public proofs/cases. |
| GEO / AI | 3.5 | Medium | Extractable Q&A, entity graph. No multi-platform AI log this run; medical FAQ risk mitigated. |
| Conversion | 4.0 | High | Journey audit clean; product context CTAs; privacy; PDF. No analytics. |

---

## 5. Critical Findings

### F1 — Four hubs discovered but not indexed
- **Evidence (E2):** GSC inspect-all 2026-07-17 — `/products/`, `/applications/`, `/quality/evidence/`, `/resources/`.
- **Impact:** Recall for category/channel/document intents; children already indexed dilute hub necessity.
- **Suggestion:** Do not thin-duplicate. Deploy uniqueness clarifications (this pass); after deploy, monitor 14–28 days; optional manual inspect. Do not mass “request indexing” spam.
- **Acceptance:** Coverage → Submitted and indexed, or Google states soft-404/excluded with actionable reason.

### F2 — Evidence page explains packs but cannot show files
- **Evidence (E1):** `/quality/evidence/` content + this-pass publishability note.
- **Impact:** Trust → Cite → Convert.
- **Suggestion:** User supplies redacted scans with scope/expiry; then publish.
- **Status:** Partial (boundary clarified); rest `Content Dependency`.

### F3 — Near-zero organic engagement
- **Evidence (E2):** Page rows ~48 impressions / 0 clicks (2026-07-07–13 window); queries include `yuji china`, `white label smart pad china`.
- **Impact:** Rank → Click broken by authority/CTR/snippet fit and tiny sample.
- **Suggestion:** Off-page authority + evidence; avoid chasing “smart pad” unless product exists.
- **Status:** Open / external.

### F4 — Home stats without caveat (fixed)
- **Evidence (E1):** Home hero-stats previously lacked About-style review-note.
- **Fix:** Added verification note; `dateModified` 2026-07-17.
- **Status:** Fixed (pending deploy).

### F5 — GEO medical-question framing (fixed)
- **Evidence (E1):** Resources FAQ “Are menstrual cups safe?” + FAQPage.
- **Impact:** AI may over-generalize safety claims.
- **Fix:** Reframed to material/testing records; schema synced; packaging FAQ added to schema.
- **Status:** Fixed (pending deploy).

### F6 — Sitemap lastmod drift (fixed)
- **Evidence (E1):** Many `lastmod` stuck at 2026-07-13 while files updated 2026-07-17.
- **Fix:** Sitemap refreshed to 2026-07-17.
- **Status:** Fixed (pending deploy).

### F7 — Analytics / RFQ funnel invisible
- **Evidence (E1):** No GA4/Plausible in production pages.
- **Status:** Blocked — needs provider + privacy approval.

---

## 6. Issue Log

| ID | Module | URL/Template | Finding | Ev | Pri | Effort | Dep | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ISS-001 | Index | 4 hubs | Discovered not indexed | E2 | P1 | S | Google time / deploy | Open |
| ISS-002 | Entity | `/quality/evidence/` | No public redacted samples | E1 | P0* | M | Content approval | Blocked |
| ISS-003 | Entity | Home/About | Shipment/patent/m² figures need file verify | E1 | P1 | S | Business files | Open |
| ISS-004 | GEO | `/resources/` | Medical “safe?” FAQ | E1 | P1 | S | — | **Fixed** |
| ISS-005 | Trust | `/` | Stats without caveat | E1 | P1 | S | — | **Fixed** |
| ISS-006 | Tech | `sitemap.xml` | Stale lastmod | E1 | P2 | S | — | **Fixed** |
| ISS-007 | Convert | Sitewide | No analytics funnel | E1 | P0* | M | Privacy/account | Blocked |
| ISS-008 | Convert | Commercial terms | Sample fee/tooling/Incoterms not centralized | E1 | P1 | M | Real policy | Open |
| ISS-009 | Authority | Off-site | Low brand/domain consensus | E2/E5 | P1 | L | Outreach auth | Open |
| ISS-010 | Content | Case studies | No permissioned cases | E1 | P1 | M | Customer permission | Open |
| ISS-011 | Keyword | Pads guide | `smart pad` query mismatch risk | E2 | P2 | S | Product truth | Open |
| ISS-012 | I18n | Site | No hreflang (OK until demand) | E1 | P3 | L | Market decision | Deferred |
| ISS-013 | Page | `/privacy/` | Short title | E1 | P3 | S | — | **Fixed** |
| ISS-014 | Schema | Resources FAQ | Visible FAQ missing from JSON-LD | E1 | P2 | S | — | **Fixed** |
| ISS-015 | Tech | Live crawl | Egress blocked this session | E1 | P2 | S | Network approval | Blocked |
| ISS-016 | GEO | AI platforms | No dated multi-platform GEO log this run | — | P2 | M | Network/tools | Open |
| ISS-017 | DNS | Email | DMARC missing (prior) | E3 prior | P1 | S | DNS admin | Open |
| ISS-018 | Index | Templates | Competitor templates remain noindex until facts | E1 | P2 | L | Competitor facts | Correct |

\*P0 for business risk / measurement completeness, not crawl breakage.

---

## 7. Template Reviews (condensed)

| Template | Sample | Strengths | Gaps |
| --- | --- | --- | --- |
| Home | `/` | Clear OEM offer, product paths, org schema | Stats need ongoing verification; social proof weak |
| Category | `/products/` | Comparison table, decision map | Unindexed; keep unique vs child pages |
| Product | cups/discs/pads | Specs, MOQ, FAQ+schema, CTAs with product context | No Offer/price invention (correct) |
| Applications | `/applications/` | Channel decision table | Unindexed; no channel case proof |
| OEM/ODM | `/oem-odm/` | Process path | Lead-time evidence still referential |
| Quality/Evidence | quality + evidence | Claim boundaries careful | Evidence samples blocked |
| About | `/about/` | Entity + caveat | Patent/shipment figures dependency |
| Resources/Articles | guides | High procurement info gain | Hub unindexed |
| Contact | `/contact/` | Form, privacy, PDF, attribution fields | No analytics events |
| Privacy | `/privacy/` | RFQ data scope | Legal review still recommended |

---

## 8. Demand & Content Gaps

| Cluster | Intent | Persona | Target | Gap | Action |
| --- | --- | --- | --- | --- | --- |
| feminine care OEM manufacturer China | Transactional | Brand buyer | `/` | Low impressions | Authority + evidence |
| menstrual cup OEM manufacturer China | Transactional | Sourcing | cups | Indexed, low volume | Internal links + proof |
| menstrual disc OEM | Transactional | Premium brand | discs | Thin GSC | Keep vs-cup guide links |
| private label sanitary pads China | Transactional | Importer | pads guide | Position ~34 | Manufacturer modifiers; avoid smart-pad unless true |
| menstrual cup OEM MOQ | Commercial investigation | Sourcing | cup MOQ | OK structure | Maintain |
| quality documents OEM | Trust | QA/compliance | evidence | Unindexed + no samples | Publish samples |
| Amazon feminine care OEM | Channel | Marketplace seller | applications | Unindexed | Case before split pages |
| yuji china / brand | Navigational | Returning | `/`, about | Some impressions, 0 CTR | Entity consistency + LinkedIn |

Do **not** create competitor alternative pages without dated facts (templates exist, noindex).

---

## 9. GEO Query Set (designed; results not fabricated)

Run after deploy; record platform, date, region, language, round, mention, citation URL, accuracy, competitors.

**Discover:** feminine care OEM manufacturers China; menstrual cup private label suppliers; reusable menstrual disc OEM China  
**Explain:** medical-grade silicone menstrual cup OEM specs; menstrual disc capacity OEM reference  
**Compare:** menstrual cup vs disc private label; silicone cup manufacturer vs trading company  
**Recommend:** OEM for Amazon menstrual cup kit; pharmacy retail menstrual cup packaging OEM  
**Verify:** Xi'an Yuji Biotechnology menstrual cups; YUJI ISO 13485 (expect careful/qualified answers)  
**Risk:** menstrual cup OEM document pack buyers should request; private label pad claim risks China OEM  
**Decide:** menstrual cup OEM MOQ trial order; feminine care RFQ checklist  

**This session:** no live AI answers collected (egress blocked). Prior audits noted extractable FAQ/schema design.

---

## 10. Schema & Entity Audit

| Type | Where | Verdict |
| --- | --- | --- |
| Organization | Home (+ refs) | Valid fields; no streetAddress (optional) |
| WebSite | Home | OK |
| WebPage / AboutPage / ContactPage / CollectionPage | As applicable | OK |
| BreadcrumbList | Non-home | OK |
| Product | Product pages | OK; no fake Offers |
| FAQPage | Products, resources, cup-vs-disc | Visible Q&A aligned after fix |
| Article | Guides | OK |

| Entity field | On-site | Risk |
| --- | --- | --- |
| Legal name | Consistent | Low |
| Brand YUJI | Consistent | Low |
| Email | `info@yujihealth.com` | Low |
| Address | Xi'an, Shaanxi, CN (no street) | Medium for NAP completeness |
| LinkedIn sameAs | Company + export contact | Low |
| Factory 3,200 m² / 3M+ / patents / 30+ markets | Stated with caveats | **Verify files** |
| Certificates | Category language, not blank guarantees | Good discipline; samples missing |

---

## 11. Implemented Changes

| Issue | Files | Summary | Verify | Status |
| --- | --- | --- | --- | --- |
| ISS-005 | `index.html` | Stats verification note; dateModified | Local assert | Fixed* |
| ISS-004/014 | `resources/index.html` | FAQ reframe + schema sync | FAQ visible/schema match | Fixed* |
| ISS-006 | `sitemap.xml` | lastmod 2026-07-17 | Sitemap=19 pages | Fixed* |
| ISS-013 | `privacy/index.html` | Title/OG/schema/date | Title length | Fixed* |
| ISS-002 partial | `quality/evidence/index.html` | Publishability boundary | Copy present | Partial |
| — | `products/index.html` | MOQ reference caveat | Copy present | Fixed* |

\*Pending production deploy.

**Validation:** custom SEO inventory 0 issues; `audit_rfq_journey.py` 0/0; no production build toolchain (static HTML site).

---

## 12. External Dependencies

1. Verified company figures and IP list.
2. Redacted certificate/QC/packaging samples with scope/expiry.
3. Permissioned case study inputs.
4. Analytics provider + retention/consent decision.
5. Real commercial policy for samples/tooling/payment/Incoterms.
6. Deploy + optional GSC actions.
7. Directory/outreach authorization; DMARC DNS.
8. Network approval for live + AI GEO passes.

---

## 13. Roadmap

### 0–30 days
- Deploy this pass; confirm privacy + line sheet live.
- GSC monitor 4 hubs; one inspect after deploy.
- Approve and publish 3–5 redacted evidence assets.
- Decide analytics minimum funnel.
- Continue LinkedIn/authority queue (human-authorized).

### 31–90 days
- One anonymous case; commercial-terms FAQ from real policy.
- CTR review if impressions grow.
- Directory citations from scored prospects only.

### 90+ days
- Market/language decision from inquiry geography.
- Competitor pages only with dated evidence.
- Recurring GEO query log quarterly.

---

## 14. Final Verification

| Check | Result |
| --- | --- |
| Local URL inventory 19/19 | Pass |
| Title/desc uniqueness | Pass |
| Canonical self | Pass |
| JSON-LD parse | Pass |
| FAQ schema↔visible (resources) | Pass |
| Sitemap ↔ pages | Pass |
| RFQ journey script | Pass (0/0) |
| Lint/typecheck/tests | N/A (static HTML + light Node scripts) |
| Live HTTP / browser | **Blocked** this session |
| Production deploy | Not authorized |

---

## 15. Quality Bottom Line

Technical and on-page SEO for this static B2B site are already strong. Marginal returns from more meta/template tweaks are low. The growth chain now breaks mainly at **external discovery/authority**, **publishable evidence**, and **measurable RFQ conversion** — not at crawlability of core product pages.
