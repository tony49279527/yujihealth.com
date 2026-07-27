# YUJI 每周站外权威与外链增长补跑周报 - 2026-07-20 周期

## 漏跑补偿

- 原计划周期：2026-07-20 15:30 Asia/Shanghai。
- 实际补跑时间：2026-07-23 23:55 CST +0800。
- 补跑范围：只处理 2026-07-20 15:30 这一期，不重放更早周期，不改动其它自动化。
- 自动化记忆状态：启动时 `/Users/liangxile/.codex/automations/yuji/memory.md` 不存在，没有上次成功证据。
- 数据窗口：GSC 采用 2026-06-23 至 2026-07-20 的最近 28 天，以及 2026-07-14 至 2026-07-20 的最近 7 天；线上页面、第三方搜索和官方机会页面按 2026-07-23 当前可访问状态复查。
- 无法恢复的数据：无法还原 2026-07-20 当天的搜索结果页面原貌；没有 GSC Links 导出、Ahrefs、SEMrush、Majestic 或网站访问分析后台，因此不能声明完成全量外链盘点或完整引荐流量盘点。

## 已采集数据

### 仓库与线上状态

- 当前分支：`main`。
- 最近提交：`2096364 Improve SEO trust signals, internal links, and GEO-safe FAQs.`。
- 启动时存在未跟踪项：`docs/linkedin/2026-07-13-manual-follow-queue.md`、`tmp/`；本次未覆盖、未清理、未混入。
- 线上关键页均返回 200，并有 canonical 与 Contact 入口：首页、About、menstrual cups、pads/liners、quality evidence、resources、contact。
- `robots.txt` 当前允许抓取，并指向 `https://yujihealth.com/sitemap.xml`。
- `sitemap.xml` 当前列出 19 个 URL，主要页面 `lastmod` 为 2026-07-17。
- `https://yujihealth.com/downloads/yuji-feminine-care-oem-line-sheet.pdf` 返回 200，PDF 可作为目录和外联附件准备材料。

### GSC 搜索表现

GSC API 权限可用，`https://yujihealth.com/` 为 `siteOwner`。Search Console API 不提供完整 Links report，以下只是搜索表现，不是全量外链数据。

- 28 天 query-page 维度：4 行，10 impressions，0 clicks。品牌相关 3 行 9 impressions：`yuji cup` 5、`yuji china` 3、`yuji corp` 1。非品牌 1 行 1 impression：`white label smart pad china`，落到 `/resources/private-label-sanitary-pads-china/`，平均排名 64。
- 7 天 query-page 维度：2 行，8 impressions，0 clicks，均为品牌相关：`yuji cup` 5、`yuji china` 3。
- 28 天 page 维度：11 行，82 impressions，0 clicks。最高页面：首页 42、About 10、menstrual cups 10、pads/liners 9。
- 7 天 page 维度：3 行，34 impressions，0 clicks。最高页面：首页 21、menstrual cups 7、pads/liners 6。
- 28 天 country 维度：65 impressions，0 clicks。最高国家：USA 18、Korea 8、Saudi Arabia 6、France/India/Malaysia/Philippines 各 3。
- 7 天 country 维度：34 impressions，0 clicks。最高国家：Korea 7、USA 7、Saudi Arabia 6。
- 28 天 device 维度：Desktop 34、Mobile 30、Tablet 1，均 0 clicks。
- 7 天 device 维度：Mobile 17、Desktop 16、Tablet 1，均 0 clicks。
- 说明：GSC 不同维度会受匿名查询和聚合阈值影响，query-page、page、country、device 的总曝光不必完全一致。

生成的只读 GSC 文件：

- `reports/gsc/gsc-query-query-page-2026-06-23-to-2026-07-20-2026-07-23T15-48-44-853Z-35199.json`
- `reports/gsc/gsc-query-query-page-2026-07-14-to-2026-07-20-2026-07-23T15-48-43-651Z-35218.json`
- `reports/gsc/gsc-query-page-2026-06-23-to-2026-07-20-2026-07-23T15-48-45-176Z-35203.json`
- `reports/gsc/gsc-query-page-2026-07-14-to-2026-07-20-2026-07-23T15-48-40-680Z-35244.json`
- `reports/gsc/gsc-query-country-2026-06-23-to-2026-07-20-2026-07-23T15-49-07-728Z-41896.json`
- `reports/gsc/gsc-query-country-2026-07-14-to-2026-07-20-2026-07-23T15-49-05-160Z-41931.json`
- `reports/gsc/gsc-query-device-2026-06-23-to-2026-07-20-2026-07-23T15-49-07-202Z-41999.json`
- `reports/gsc/gsc-query-device-2026-07-14-to-2026-07-20-2026-07-23T15-49-08-569Z-41953.json`

### 品牌提及与第三方结果

- 精确搜索 `yujihealth.com`、`Xi'an Yuji Biotechnology Co., Ltd.`、`YUJI Feminine Care`、`YUJI menstrual cup` 后，当前结果仍主要是 yujihealth.com 自有页面；没有查到可验证的新行业目录、媒体、协会、客户或合作伙伴独立引用。
- 排除的无关结果包括：Shanghai Yuji Biotechnology、Beijing Yuji Science & Technology、人物名 Yuji、动漫/消费品结果、学术作者等。
- 中文/近似公司名检索未发现与本公司明确对应的第三方引用；出现的是其它西安或上海同名/近似生物科技公司。
- 搜到 `Yuji Health (yujihealth) – Profile | Pinterest`，但页面本次无法打开验证，且搜索摘要显示 0 followers；不计为已验证品牌提及，不写入候选表。
- 本地未发现 GA4、Plausible 或其它可读访问分析配置；Contact 表单有 UTM、landing page、source page 字段，但本次没有授权的引荐流量后台或 CRM/邮件数据。

## 候选表变化

已更新 `docs/seo/backlink-prospects.csv`，只追加官方页面可验证的新候选，没有删除、降级或静默淘汰历史信息。

新增：

1. `INDA International Nonwovens Directory`
   - 官方入口：`https://www.inda.org/cgi-bin/dq/dq.cgi`
   - 依据：INDA 目录问卷说明可免费列入 International Nonwovens Directory，并面向非织造和 engineered fabrics 供应链；INDA 新闻页说明目录面向 product developers、R&D、business development professionals，类别包括 raw material suppliers、nonwoven material suppliers、converters、brand owners and marketers、service providers。
   - 评分：relevance 3、editorial_review 1、buyer_intent 2、evidence_readiness 2、cost_risk 0，priority_score 17。
   - 状态：`research-ready`。

2. `Hygienix 2026 Tabletop Exhibit`
   - 官方入口：`https://www.hygienix.org/exhibit`
   - 依据：Hygienix 2026 官方页定位为 absorbent hygiene 行业会议，时间为 2026-11-16 至 2026-11-19；展商页列出 tabletop exhibit 费用、线上 floor plan listing、networking pass 和销售联系人。
   - 评分：relevance 3、editorial_review 1、buyer_intent 2、evidence_readiness 1、cost_risk 3，priority_score 13。
   - 状态：`cost-review`。

未加入 CSV：

- CIDPEX / CNHPIA：搜索结果显示相关，但官方页面本次无法稳定打开验证，暂不入表。
- Hygienix 2026 abstract：官方截止日为 2026-07-01，本次补跑时已过期，不作为下一步。
- Hygienix Innovation Award：官方截止日为 2026-09-14，要求 24 个月内引入市场或行业的新产品/技术、样品和现场展示；目前没有批准可公开的真实创新 dossier，暂不入表。
- Pinterest `yujihealth`：无法打开验证，不计入已验证提及或候选。

## 本地修复

- 更新 `docs/seo/backlink-prospects.csv`，新增 2 个官方验证候选。
- 新增本周补跑报告 `docs/seo/authority-growth-weekly-2026-07-20.md`。
- 生成 GSC 只读报告文件到 `reports/gsc/`；该目录已被 git ignore。
- 未执行 commit、push、部署、索引提交、账号注册、表单提交、邮件发送或付费操作。

## 验证

运行候选评分器：

```bash
python3 /Users/liangxile/.codex/skills/yuji-b2b-authority-growth/scripts/score_prospects.py /Users/liangxile/project/yujihealth.com/docs/seo/backlink-prospects.csv
```

结果：通过，Validated 12 prospects。

当前排序：

| Rank | Prospect | Score | Status |
| ---: | --- | ---: | --- |
| 1 | Qmed+ | 21 | evidence-blocked |
| 2 | Femtech Insider | 19 | research-ready |
| 3 | Global Sources | 19 | requires-account |
| 4 | PLMA | 19 | cost-review |
| 5 | Suplivia | 19 | evidence-blocked |
| 6 | MedicalExpo | 18 | cost-review |
| 7 | INDA International Nonwovens Directory | 17 | research-ready |
| 8 | EDANA | 17 | eligibility-check |
| 9 | Alibaba | 16 | owner-required |
| 10 | Made-in-China | 16 | owner-required |
| 11 | Hygienix 2026 Tabletop Exhibit | 13 | cost-review |
| 12 | Europages | 12 | eligibility-check |

## 下一批人工任务

### 1. INDA International Nonwovens Directory

- 官方目标：`https://www.inda.org/cgi-bin/dq/dq.cgi`
- 价值：免费目录问卷，面向非织造供应链；对 sanitary pads / liners 的材料、converter、brand-owner 语境更贴近。
- 所需证据：确认公开英文公司名、地址、邮箱、官网、公司类型、产品类别、是否可列 converter / brand owner / service provider，以及可公开描述的 pads/liners 生产边界。
- 推荐落地页：`https://yujihealth.com/products/pads-liners/?utm_source=inda&utm_medium=directory&utm_campaign=authority_growth_2026w30`
- 英文资料草稿：

```text
Xi'an Yuji Biotechnology Co., Ltd. (YUJI) supports feminine care OEM/ODM programs for global B2B buyers, including sanitary pads, liners, menstrual cups, reusable discs, wipes, pouches, cleaning kits, and private-label packaging. Product specifications, document packs, certificate scope, MOQ, and target-market requirements are confirmed project by project before quotation and production planning.
```

- 负责人/授权要求：YUJI export/sales owner 确认公开资料；用户批准后由人工提交目录问卷。
- 成功指标：目录条目上线并可索引；出现至少 1 次来自 INDA 或相关 referral 的 Contact 到达，或出现可归因 RFQ。

### 2. Femtech Insider company database

- 官方目标：`https://femtechinsider.com/companies/`
- 价值：女性健康行业数据库，适合建立 femtech / menstrual health entity signal。
- 所需证据：80 字英文简介、公司类别、官网、联系人邮箱、是否可公开制造商定位；不要声称 clinical claims 或未批准认证。
- 推荐落地页：`https://yujihealth.com/about/?utm_source=femtechinsider&utm_medium=company_database&utm_campaign=authority_growth_2026w30`
- 英文资料草稿：

```text
Xi'an Yuji Biotechnology Co., Ltd. is a feminine care OEM/ODM manufacturer based in Xi'an, China. YUJI supports menstrual cups, reusable discs, sanitary pads, liners, accessories, private-label packaging, sample planning, quality records, and export handoff for global brands and distributors. Product scope, MOQ, lead time, documentation, and target-market requirements are reviewed project by project.
```

- 负责人/授权要求：用户或品牌负责人确认资料后人工提交；不自动注册或提交。
- 成功指标：数据库条目上线、被索引，品牌词 SERP 出现独立结果；有 referral visit 或 RFQ。

### 3. Suplivia manufacturer application

- 官方目标：`https://www.suplivia.com/`
- 价值：医疗采购团队和 distributor sourcing 场景，官方说明制造商需提交 company profile、certifications、product catalogue 并经过 company identity / documentation review。
- 所需证据：证书范围、catalogue/PDF、产品分类、脱敏工厂和 QC 资料；先确认 menstrual cups/discs/pads 是否符合平台医疗产品分类。
- 推荐落地页：`https://yujihealth.com/quality/evidence/?utm_source=suplivia&utm_medium=sourcing_platform&utm_campaign=authority_growth_2026w30`
- 英文资料草稿：

```text
YUJI can provide available specification sheets, certificate scans, test summaries, QC release records, packaging files, carton specs, and sample approval records according to the quoted product and target market. Certificate scope and market claims should be reviewed project by project before buyer-facing use.
```

- 负责人/授权要求：质量/业务负责人先确认哪些证书和文件可公开；用户批准后人工申请。
- 成功指标：通过审核并上线 manufacturer profile；获得平台询盘、qualified RFQ 或样品请求。

### 4. Qmed+ qualified supplier directory

- 官方目标：`https://qmed.com/add-your-company-page000134.html`
- 价值：medical device / IVD OEM 供应商目录，官方页要求预审资格并进行 editorial review。
- 所需证据：至少确认 ISO 9001、ISO 13485、cGMP、FDA registration 或 demonstrated medical device / IVD experience 中的适用证据；不能用不匹配证书范围申请。
- 推荐落地页：`https://yujihealth.com/quality/evidence/?utm_source=qmed&utm_medium=supplier_directory&utm_campaign=authority_growth_2026w30`
- 英文资料草稿：

```text
YUJI supports medical-device-oriented due diligence only within the documented product and certificate scope confirmed for each project. Buyers can request material specifications, available certificate scans, test summaries, QC checkpoints, packaging files, and market-specific document review before quotation.
```

- 负责人/授权要求：质量负责人核认证据；用户确认后人工注册/申请。
- 成功指标：通过 Qmed 审核、6 个月 free listing 上线、出现 RFI/referral/RFQ。

### 5. Hygienix 2026 tabletop exhibit cost review

- 官方目标：`https://www.hygienix.org/exhibit`
- 价值：吸收性卫生用品供应链会议，和 sanitary pads / liners / nonwovens 更贴近；官方展商权益包括 online floor plan listing 和 networking pass。
- 所需证据：预算、美国参会/签证可行性、展台负责人、样品和证据包、会后 48 小时 lead follow-up SLA。
- 推荐落地页：`https://yujihealth.com/products/pads-liners/?utm_source=hygienix&utm_medium=event&utm_campaign=authority_growth_2026w30`
- 英文资料草稿：

```text
YUJI supports private-label sanitary pads, liners, and broader feminine care launch kits for B2B brands and distributors. The team can review target market, channel, quantity, packaging direction, document needs, samples, and export handoff before quoting a program.
```

- 负责人/授权要求：用户先决定是否接受官方 tabletop fee、差旅、样品和销售跟进成本；未批准前不得联系 sales@inda.org 或预订展位。
- 成功指标：如果批准并参展，目标是预约会面数、qualified RFQs、样品请求和报价，而不是单纯链接。

## 需要外部授权

- 用户确认哪些证书、测试报告、工厂/QC 图片、产品图、营业主体信息和地址可公开。
- 用户确认是否已有 Global Sources、Alibaba、Made-in-China、Europages、Qmed、Suplivia 等账号，避免重复主体。
- 用户确认 INDA Directory、Femtech Insider、Suplivia、Qmed+ 的人工提交授权。
- 用户确认 Hygienix / PLMA / EDANA / MedicalExpo 的预算、参会 ROI、负责人和 lead SLA。
- 如需完整外链盘点，用户需提供 GSC Links 导出或授权 Ahrefs、SEMrush、Majestic 等 backlink 数据源。

## 未执行动作

- 未注册账号、未提交任何外部表单、未发送邮件、未购买会员/展位、未发布内容。
- 未分享或上传证书、客户、订单、价格、生产数据或其它敏感资料。
- 未提交索引、未改 DNS/Cloudflare/GSC 权限、未部署生产、未 commit、未 push。
- 未购买批量外链、PBN、评论/论坛垃圾链接、自动目录群发、虚假客户/证书/评价/合作关系或未披露利益交换。

