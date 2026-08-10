# YUJI public evidence approval request — 2026-08-10

## Current release gate

- Manifest records: 8
- Approved for public website use: 1 (`E-ILLUS-001`, clearly labelled illustrative)
- Pending source review and written public-use approval: 7
- Rule: a pending record must not become a website claim or download until the source, scope, redaction, and exact public file have all been approved.

The source originals must remain in a restricted external Drive or private directory. Do not copy originals, customer/order data, signatures, personal data, serial-number QR codes, or unredacted shipment records into this public website repository.

## Owner action list

| Asset ID | Owner | Controlled source required | Review checks | Public-scope decision required |
| --- | --- | --- | --- | --- |
| `E-PENDING-001` | Operations | Current certificate or certificate-scope record | Legal entity, certified site, standard/version, scope, issuer, issue/expiry dates, current validity | Public redacted copy, sales-only copy, or no external use |
| `E-PENDING-002` | Quality | One real QC release record for a non-customer-identifiable lot | Product/lot scope, test fields, acceptance criteria, result, release authority, date, traceability method | Public redacted sample, sales-only sample, or no external use |
| `E-PENDING-003` | Quality | Current material or finished-product specification cover/sample | Product/material scope, version, test method, tolerances, owner, issue/review date | Public summary, sales-only specification, or no external use |
| `E-PENDING-004` | Operations | Dated facility/controlled-area verification source | Legal entity, exact site, measurement method, included/excluded areas, verification date, approver | Bounded public facility claim, sales-only evidence, or no external use |
| `E-PENDING-005` | Operations | Dated shipment and destination-market source | Counting period, unit definition, cancellations/returns/exclusions, destination basis, reconciled total, approver | Bounded public shipment/market claim, sales-only evidence, or no external use |
| `E-PENDING-006` | Quality | Menstrual-cup silicone specification and applicable test reports | Supplier/material grade, product mapping, test method, laboratory, sample/batch, result, date, limitations | Named public material/test claim, generic sales-only statement, or no external use |
| `E-PENDING-007` | Compliance | Product-by-market regulatory classification review | Product, intended use, target market, classification basis, manufacturer/importer/operator duties, permitted/prohibited claims, review date | Public dated guidance, sales-only assessment, or no external use |

## Redaction and release checklist

Each candidate public file must pass all checks below:

- [ ] The source is authentic, current, legible, and linked to the correct YUJI legal entity/site/product.
- [ ] The public claim does not exceed the source's product, site, market, method, date, or validity scope.
- [ ] Customer names, addresses, contacts, order numbers, prices, signatures, personal data, and confidential supplier data are removed.
- [ ] Barcodes, QR codes, certificate lookup codes, lot identifiers, and metadata are reviewed for unintended disclosure.
- [ ] Redactions are irreversible in the exported public file; hidden layers and editable annotations are removed.
- [ ] The file is labelled as real, illustrative, summary, expired, or superseded as applicable.
- [ ] Issue date, expiry date or review date, version, limitations, and evidence owner are visible.
- [ ] Quality/Compliance confirms technical accuracy and Legal/authorized management confirms public use.
- [ ] The exact approved public file is recorded in `evidence-manifest.csv` before publication.
- [ ] A withdrawal owner and review/expiry date are recorded.

## Written approval record

Complete one record for each exact public file. Approval of a source or claim does not automatically approve every derivative file.

| Field | Required value |
| --- | --- |
| Asset ID | `E-PENDING-___` |
| Exact public filename and file hash |  |
| Controlled source location and source version |  |
| Approved public claim |  |
| Approved product/site/market scope |  |
| Required limitations or disclaimer |  |
| Redactions reviewed by and date |  |
| Technical approver and date |  |
| Public-use approver and date |  |
| Approval channel or record link |  |
| Expiry/review date |  |
| Withdrawal owner |  |

## Publication acceptance test

Publication is complete only when the exact approved file is downloadable, the page copy matches the approved claim and limitations, the manifest status is `approved-public`, no private source file is present in the repository, the evidence page and sitemap validate, and the withdrawal owner can identify the live URL and current version.
