# YUJI B2B 深度 SEO 优化复核 — 2026-08-29

## 结论

本轮没有用低质量新页面、泛关键词堆砌或未经核验的工厂/认证数据来制造“优化量”。已在本地完成三项高置信度改动：

1. 修复公开产品 PDF 与官网证据边界不一致的问题；
2. 将 Resources 枢纽末段从面向搜索引擎的术语改为四个采购决策入口；
3. 增加可重复运行的静态 SEO 审计，覆盖 sitemap、canonical、H1、JSON-LD、内部链接、多语言互链、下载资产、robots 和 404。

这些改动尚未提交、推送或部署。本报告中的方法论被用作判断标准；报告的示例输入、假设数据和外部动作没有被当成 YUJI 事实或执行授权。

## 本轮证据基线

| 维度 | 当前观察 | 可据此做的决定 |
| --- | --- | --- |
| GSC 完整 28 天（2026-07-29 至 2026-08-25） | 132 impressions、1 click、平均位置 29.45 | 样本很小；不以单一位置变化决定扩页或改标题。 |
| 前一完整 28 天（2026-07-01 至 2026-07-28） | 113 impressions、0 click、平均位置 10.25 | 曝光增加但 URL/查询构成已变，不能归因或宣称增长。 |
| 当前页面数据 | 首页 73 曝光、About 18、cups/pads 各 12；多数页为 0 click | 优先提升已存在的采购路径与内容质量，不做关键词堆砌。 |
| URL Inspection（2026-08-29） | 27/30 `Submitted and indexed`；`/applications/`、`/quality/evidence/`、`/resources/` 为 `Discovered - currently not indexed`，且尚无抓取记录 | 这三个枢纽页不缺本地内链；先保持差异化任务内容并在下一个完整窗口复查，不把“请求索引”当作技术修复。 |
| RFQ 路径 | `audit_rfq_journey.py` 审计 30 页，errors=0、warnings=0 | 询盘路径结构可用；真实提交、合格询盘、样品、报价和成交仍没有可用分析数据。 |
| PageSpeed | 2026-08-29 API 请求配额已耗尽 | 不复用旧分数作为当前结果，不据此修改性能代码。 |
| 证据清单 | 1 项 `approved-public` 的示例 QC 字段表；7 项真实证书/规格/QC/工厂/出货资产仍为 `unreviewed` | 不新增任何认证、材料等级、产能、市场、交期或客户成果主张。 |

GSC 原始文件：

- `reports/gsc/gsc-query-date-2026-07-29-to-2026-08-25-2026-08-29T08-21-53-878Z-76895.json`
- `reports/gsc/gsc-query-page-2026-07-29-to-2026-08-25-2026-08-29T08-21-54-380Z-76872.json`
- `reports/gsc/gsc-inspect-all-2026-08-29T08-43-15-285Z.json`

## 已实施的本地改动

### P0 — 统一公开采购资产的证据边界

`/downloads/yuji-feminine-care-oem-line-sheet.pdf` 原先仍包含未获批准的 `3,200 sq m`、`3M+`、`30+`、`medical-grade`、固定试单 MOQ、固定交期和复用年限。它由 Contact、Resources、Quality Evidence 和 `llms.txt` 链接，因而会削弱官网与证据 manifest 的一致性。

已重写生成器并重新生成公开 PDF：

- 以经营地、OEM/ODM 模式、多产品线和项目级 RFQ 代替未经批准的规模/成绩数字；
- 将材料、证书、测试、QC、MOQ、交期写成“按报价产品与市场确认”的采购核验项；
- 添加准确的 PDF keywords 和 `2026-08` 版本标识；
- 生成源文件与发布文件保持二进制一致。

Resources 和 Quality Evidence 的 PDF 卡片也已明确该文件是采购规划概览，不是证书包或 SKU 规格书。

这不是对 YUJI 实力的否定，而是避免把内部或待核验信息误当作公开、SKU 级、当前有效的承诺。

### P1 — Resources 从 SEO 展示改为采购决策路径

`/resources/` 原有的 “Query Fan-Out Coverage” 对采购人员没有可执行价值，还会暴露面向搜索引擎的写作意图。已替换为四条静态、可抓取的买家路径：

- 选择第一个可复用 SKU → cup vs disc 比较；
- 筛选供应商 → supplier screen；
- 生成可比 RFQ → RFQ checklist；
- 审查文件边界 → evidence path。

不创建新的薄页，沿用已有深度内容和 Contact 路径。

### P1 — 为关键技术和资产约束增加回归检查

新增 `npm run seo:audit`，当前检查 30 个 sitemap URL：

- HTML lang、title、description、indexability、唯一 H1 和精确 canonical；
- 所有 JSON-LD 均可解析；产品页 Product 结构具有 name、description、image、URL 和 YUJI brand；
- 本地内部链接、sitemap、robots、404 恢复路径、双语互链和下载资产；
- line sheet 的源/发布 PDF hash 一致，且生成器不再包含上述未获批准的公开主张。

## 未立即实施的事项

| 优先级 | 事项 | 原因与下一步 |
| --- | --- | --- |
| P1 | 三个 `Discovered - currently not indexed` 枢纽页 | robots、canonical、sitemap 和主内容内链都无明显故障，且 Google 尚未抓取；部署后等一个完整 28 天窗口再做 URL Inspection。外部的“请求索引”不在本轮执行范围。 |
| P1 | 首页/About 的点击率测试 | 73/18 次曝光不足以支持重写标题或宣称 CTR 问题；先让实体与资源路径稳定。 |
| P1 | PageSpeed 优化 | 当前 PageSpeed API 配额耗尽；先恢复可测量性，不能将旧实验室分数写成新结论。 |
| P2 | SKU 数字、材料等级、测试/认证/市场/出货主张 | 需要 `docs/evidence/evidence-manifest.csv` 中相应 `E-PENDING-*` 的来源、范围、日期、脱敏和公开批准。 |
| P2 | 真实转化效果判断 | Plausible 当前禁用且没有合格询盘/样品/报价/成交记录；必须由受控分析和销售台账提供数据。 |

## 验证与回滚

- `npm run seo:audit`：通过；
- RFQ journey audit：30 页、0 errors、0 warnings；
- 新 PDF：8 页、A4、可读取 metadata；禁止片段扫描为 0；源和下载文件 hash 一致；
- PDF 页面已渲染复核页眉、页脚、8 页分页和 RFQ 区块。

回滚是可逆的：恢复上一个 PDF、生成器、Resources 区块和新增脚本即可；本轮未改数据库、环境变量、GSC、DNS、分析账号或真实询盘。

## 最多七项后续动作

1. 审核本地 diff 后再授权 commit / push / Vercel 部署。
2. 部署后验证新版 PDF 的生产 URL、Resources 源码和 `npm run seo:audit` 对应内容。
3. 在下一个完整 28 天窗口重新拉取 date/page/query 与三页 URL Inspection；比较同一维度而不是混合 totals。
4. 如 `/applications/`、`/quality/evidence/`、`/resources/` 仍未抓取，先用 GSC 诊断覆盖状态和渲染结果，再决定是否做单页内容差异化或请求索引。
5. 由 Operations/Quality/Compliance 处理 `E-PENDING-001` 至 `E-PENDING-007` 的源文件、范围、过期日、脱敏和公开批准。
6. 恢复可验证的分析与 RFQ-to-win 受控台账后，才评估下载、Contact、合格 RFQ、样品、报价和成交。
7. 仅在样本量和查询意图成立时，对一个既有落地页进行单变量标题、首屏或 CTA 测试。
