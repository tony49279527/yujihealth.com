# Experiment Log — 2026-07-26 GSC gap refresh + hub internal links

## Hypothesis

1. Adding kit / protective-cover / quote-variable coverage on `/products/menstrual-cups/` will improve relevance for long-tail queries like `menstrual cup protective covers manufacturing plant cost` without inventing plant-cost figures.
2. Clarifying that `/resources/private-label-sanitary-pads-china/` is conventional pads (not smart/sensor) will reduce intent mismatch for `white label smart pad china`.
3. Stronger contextual links from indexed pages to `/applications/`, `/products/`, `/resources/`, and `/quality/evidence/` will improve discovery of currently weak/unindexed hubs.

## Sample

| Role | URL |
| --- | --- |
| Primary test | `/products/menstrual-cups/` |
| Secondary test | `/resources/private-label-sanitary-pads-china/` |
| Hub support | About, OEM/ODM, Cup sourcing guide, Cup vs Disc, Evidence |
| Observe (control) | `/products/menstrual-discs/` |

**Change start date (local):** 2026-07-26. Production effect begins only after deploy.

## Baseline (GSC 2026-06-25 … 2026-07-22)

| Item | Impr. | Clicks | Pos. |
| --- | ---: | ---: | ---: |
| `/products/menstrual-cups/` | 14 | 0 | 22.8 |
| Query `menstrual cup protective covers manufacturing plant cost` → Cups | 2 | 0 | 80.5 |
| `/resources/private-label-sanitary-pads-china/` | 2 | 0 | 34.5 |
| Query `white label smart pad china` → Pads guide | 1 | 0 | 64.0 |
| `/` | 43 | 0 | 5.7 |
| Site page dimension total | 93 | 0 | — |

## Changes made (local)

### Added / expanded
- Cups: new “Kit & Protective Cover” section (component table + no fixed plant-cost note); two FAQ Q&As in visible content + FAQPage JSON-LD; link to Resources hub.
- Pads guide: scope note (not smart/sensor); Buyer FAQ + FAQPage; related links to Products / Applications / Evidence / Resources hubs.
- Evidence: `#material` `#product` `#process` `#release` anchors; visible FAQ matching existing FAQPage; Resources hub link.
- About, OEM/ODM, Cup sourcing guide, Cup vs Disc: contextual links into Applications / Products / Evidence / Resources hubs.

### Not changed
- No new URLs.
- No fabricated plant costs, smart-pad claims, certificates, or case studies.
- No title rewrite on Home/Pads (impression sample still small).
- Evidence redacted file uploads still blocked pending approval.

### Pre-existing local hub work retained
- Applications / Products / Evidence schema and ItemList updates already in the worktree.

## Retest windows

| Window | Date | Decision criteria |
| --- | --- | --- |
| 30d | ~2026-08-25 | Cups long-tail position or impressions; hub coverageState; no brand-query damage |
| 60d | ~2026-09-24 | Pads guide intent noise; Applications/Products/Resources/Evidence indexing |
| 90d | ~2026-10-24 | Expand / observe / rollback |

## Decision rules

- **Expand:** long-tail relevance improves and hubs move toward indexed without CTR or brand regression.
- **Observe:** too little query volume to judge — keep pages, do not rewrite again.
- **Rollback:** content creates wrong commercial promises (fake costs / smart-pad capability) or harms `yuji cup` / core product intent.

## Blocked external actions

- Deploy / push / GSC index request (needs explicit approval).
- Publishing redacted certificate/QC samples.
- Directory outreach submissions.
- Analytics install.
