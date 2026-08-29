# SEO 改动记录 — 2026-08-29

状态：**本地完成，未 commit / push / deploy**。

| 范围 | 改动 | 原因 | 验证 | 回滚 |
| --- | --- | --- | --- | --- |
| `scripts/generate-line-sheet.py` | 移除未批准规模、出货、市场、材料等级、固定 MOQ/交期和复用年限；改为项目级采购核验语言；加入 PDF keywords 与版本标识。 | 公开 PDF 与 evidence manifest 的事实边界不一致。 | 8 页 PDF 重新生成；文本回读和禁止片段扫描通过。 | 恢复上一个生成器和 PDF。 |
| `output/pdf/yuji-feminine-care-oem-line-sheet.pdf`、`downloads/yuji-feminine-care-oem-line-sheet.pdf` | 重新生成并同步。 | 让公开下载文件与生成源一致。 | SHA-256 一致；文件大于 10 KB。 | 恢复上一个二进制版本。 |
| `resources/index.html` | 将 “Query Fan-Out Coverage” 改为四条 Buyer Paths，并链接到既有对比、筛选、RFQ 和证据页。 | 改善买家路径和内容质量，避免暴露 SEO 写作术语。 | 内部链接静态审计通过。 | 恢复原区块。 |
| `resources/index.html`、`quality/evidence/index.html` | 给 line sheet 入口增加“采购规划概览，不是证书包或 SKU 规格书”的用途边界。 | 避免买家将公开 PDF 错当成项目级证据。 | 静态审计通过；下载文件保持可达。 | 恢复原卡片说明。 |
| `scripts/seo-static-audit.mjs`、`package.json` | 新增 `npm run seo:audit`。 | 防止关键 SEO/资产/链接规则回退。 | 审计 30 个 sitemap URL 通过。 | 移除脚本和 package script。 |
