# YUJI evidence source search — 2026-08-12

## Result

No certificate original, test report, real QC release record, product/material specification, facility verification, shipment reconciliation, or product-by-market regulatory review was found in the website repository or the connected Google Drive searches below. This does not prove that the company has no such evidence; it means the currently accessible sources cannot substantiate the seven pending public claims.

The only Drive result returned by the searches was the unrelated private spreadsheet `YUJI LinkedIn 热点选题池`. It was not opened or used as evidence.

## Sources checked

- Website repository: PDFs and image assets outside `.git` and dependencies.
- Connected Google Drive metadata searches: `YUJI certificate`, `YUJI test report`, `yujihealth ISO`, and `西安 裕吉 证书`.
- Existing private manifest: `docs/evidence/evidence-manifest.csv`.

## Safe alternative intake path

1. Operations, Quality, and Compliance keep source originals in a restricted company Drive or other controlled system, never in the public website repository.
2. The source owner adds the controlled location and version to the matching `E-PENDING-*` manifest record without copying confidential content into Git.
3. Quality/Compliance validates entity, site, product, market, method, date, expiry, and permitted claim scope.
4. A separate exact public derivative is irreversibly redacted and hashed.
5. Technical and public-use approvers complete the record in `evidence-approval-request-2026-08-10.md`.
6. Only the approved derivative is added to the website and the manifest status is changed to `approved-public` or `approved-redacted` within its recorded channel scope.

## Current gate

Keep `E-PENDING-001` through `E-PENDING-007` at `unreviewed`, with `public_scope=none` and `file_path=pending`. Do not add certificate, medical-grade, regulatory-approval, shipment-volume, market-count, facility-size, material-performance, or customer-result claims until the matching source and exact public file pass approval.
