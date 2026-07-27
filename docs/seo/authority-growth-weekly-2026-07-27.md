# YUJI 每周站外权威与外链增长周报 - 2026-07-27 周期

## 漏跑补偿

- 上次成功完成记录：`/Users/liangxile/.codex/automations/yuji/memory.md` 记录 2026-07-23 23:56:57 CST 已完成 2026-07-20 15:30 Asia/Shanghai 计划周期的合并补跑。
- 本次计划周期：2026-07-27 15:30 Asia/Shanghai。
- 实际运行时间：2026-07-27 15:40 CST +0800。
- 遗漏计划周期：无。本次不是逐期重放补跑，而是 2026-07-27 当期周跑。
- 本次目标数据窗口：GSC 最新可用 28 天原计划为 2026-06-27 至 2026-07-24，最近 7 天原计划为 2026-07-18 至 2026-07-24；线上页面、第三方品牌搜索和官方机会页面按 2026-07-27 当前状态复查。
- 本次无法恢复或无法完成的数据：实时 GSC API 拉取连续失败，错误为 `fetch failed`，Google API 连通性探测也长时间无响应后中断；没有 GSC Links 导出、Ahrefs、SEMrush、Majestic、GA4/Plausible 或 CRM/邮件后台，因此不能声明完成全量外链盘点或完整引荐流量盘点。
- 可用于对照的最新保存 GSC 窗口：本地已有 2026-07-26 生成的只读 GSC 报告，覆盖 2026-06-26 至 2026-07-23，以及 2026-07-17 至 2026-07-23。以下 GSC 数字明确标为“最新保存数据”，不是本次实时 API 新拉取结果。

## 已采集数据

### 仓库与线上状态

- 启动分支：`main...origin/main`。
- 启动时最近提交：`88ff9e6 Refresh GSC-gap content and hub discovery for early organic growth.`。
- 启动时存在未跟踪项：`docs/linkedin/2026-07-13-manual-follow-queue.md`、`docs/seo/authority-growth-weekly-2026-07-20.md`、`tmp/`；本次未覆盖、未清理、未回退，也未执行 commit / push。
- 线上关键入口均可访问：`https://yujihealth.com/`、`/contact/`、`/products/menstrual-cups/`、`/products/pads-liners/`、`/quality/evidence/`、`/resources/` 均返回 200。
- `robots.txt` 返回 200，内容为 `Allow: /`，并指向 `https://yujihealth.com/sitemap.xml`。
- `sitemap.xml` 返回 200，当前列出 19 个 URL；多页 `lastmod` 已更新到 2026-07-23 至 2026-07-26。
- `https://yujihealth.com/downloads/yuji-feminine-care-oem-line-sheet.pdf` 返回 200，可继续作为人工提交目录、媒体沟通和外联准备材料。
- Contact 页面继续公开 `info@yujihealth.com`、YUJI LinkedIn 公司页、Export contact，并保留 `sourcePage` / `landingPage` 隐藏字段，适合配合 UTM 归因。

### GSC 搜索表现

本次实时 GSC API 拉取失败；Search Console API 本身也不提供完整 Links report。因此下面只是最新保存 Search Analytics 数据，不是全量外链数据，也不是完整 referral traffic。

最新保存 28 天 query 数据，窗口 2026-06-26 至 2026-07-23：

- query 维度：5 行，13 impressions，0 clicks。
- 品牌相关：3 行，10 impressions，0 clicks：`yuji cup` 6、`yuji china` 3、`yuji corp` 1。
- 非品牌相关：2 行，3 impressions，0 clicks：`menstrual cup protective covers manufacturing plant cost` 2、`white label smart pad china` 1。
- 对比上一轮 2026-06-23 至 2026-07-20 保存窗口：总 query impressions 从 10 到 13，品牌 impressions 从 9 到 10，非品牌 impressions 从 1 到 3。样本极小，只能作为观察信号，不足以证明站外权威增长已经产生点击。

最新保存 7 天 query 数据，窗口 2026-07-17 至 2026-07-23：

- query 维度：2 行，4 impressions，0 clicks。
- 品牌相关：`yuji cup` 2 impressions。
- 非品牌相关：`menstrual cup protective covers manufacturing plant cost` 2 impressions。
- 对比上一轮 2026-07-14 至 2026-07-20 保存窗口：7 天品牌 impressions 从 8 降到 2，非品牌从 0 到 2。仍是低样本波动，不能据此做标题或页面方向大改。

最新保存 page / country / device 数据：

- 28 天 page 维度：15 行，138 impressions，0 clicks。最高页面：首页 47、About 20、menstrual cups 18、pads/liners 10、contact 8。
- 7 天 page 维度：15 行，67 impressions，0 clicks。最高页面：首页 12、About 10、menstrual cups 10、contact 6、quality 5。
- 28 天 country 维度：26 行，84 impressions，0 clicks。最高国家：USA 30、Korea 8、Saudi Arabia 6、Malaysia 4、Vietnam 4。
- 7 天 country 维度：11 行，30 impressions，0 clicks。最高国家：USA 15、Vietnam 4、Australia 2、Philippines 2。
- 28 天 device 维度：Desktop 50、Mobile 33、Tablet 1，均 0 clicks。
- 7 天 device 维度：Desktop 23、Mobile 7，均 0 clicks。
- 说明：不同 GSC 维度受匿名查询和聚合阈值影响，query、page、country、device 的总曝光不必完全一致。

### 品牌提及与第三方结果

- 精确搜索 `yujihealth.com`、`Xi'an Yuji Biotechnology Co., Ltd.`、`YUJI Feminine Care`、`YUJI menstrual cup`、`Xi'an Yuji Biotechnology` 后，当前仍未发现可验证的新独立行业目录、媒体、协会、客户、实验室或合作伙伴引用。
- 当前可验证的第三方承载页主要是 YUJI 自有/品牌控制的 LinkedIn 公司页 `https://www.linkedin.com/company/yuji-feminine-care/`，并非独立编辑提及；本周不把它计作新增外链胜利。
- LinkedIn 公司页公开文案含 `ISO 13485-certified` 等证据型表述。外联、目录和媒体资料中不得复用这些表述，除非用户确认当前证书范围、主体、有效期和可公开程度。
- Pinterest `https://in.pinterest.com/yujihealth/` 当前返回 403，无法验证内容、归属和是否可公开展示；不计为已验证品牌提及，也不写入候选表。
- 排除的无关结果继续包括其它 Yuji 人名/品牌、Shanghai Yuji Biotechnology、Beijing Yuji Science & Technology、动漫/消费品和学术作者结果。
- Nonwovens Industry / HAPPI 买家目录搜索结果有相关性，但官方页面本次被 Cloudflare/访问控制阻断，不能完成资格和提交入口验证，未入表。

## 候选表变化

已更新 `docs/seo/backlink-prospects.csv`，只追加官方页面可验证的新候选，没有删除、降级或静默淘汰历史信息。

新增：

1. `Medtec China 2026 Exhibit`
   - 官方入口：`https://en.medtecchina.com/exhibit/booking/`
   - 官方依据：Medtec China 官方页定位为 medical device design and manufacturing / supply-chain expo；2026 年 9 月 1-3 日在上海新国际博览中心；展商页包含 Booth Booking、2026 Exhibitor List、Product List；观众页说明采购、质量、研发、生产、注册等岗位，并列出 `OEM/ODM Full-Service Contract Manufacturing` 分类。
   - 评分：relevance 2、editorial_review 1、buyer_intent 2、evidence_readiness 1、cost_risk 3，priority_score 10。
   - 状态：`cost-review`。
   - 本周判断：可作为低优先级成本评估候选，不应排在 Femtech Insider、INDA、Suplivia、Qmed+、Global Sources 之前；只有在 menstrual cup / disc 医疗器械证据范围、预算、展会负责人和线索跟进 SLA 确认后才值得推进。

未新增或未变更：

- Qmed+、INDA 官方页面本次通过命令行 curl 返回 403，但之前已由官方页面验证入表；本周没有修改其状态或评分。
- CIDPEX / CNHPIA：本周没有完成稳定官方页面验证，仍不入表。
- Nonwovens Industry / HAPPI：相关但官方页面被访问控制阻断，未能验证提交入口、费用和审核机制，暂不入表。
- LinkedIn / Pinterest：LinkedIn 属品牌控制资料，Pinterest 403 不可验证，均不作为独立权威候选新增。

## 本地完成

- 更新 `docs/seo/backlink-prospects.csv`，新增 1 个已验证候选：`Medtec China 2026 Exhibit`。
- 新增本周周报 `docs/seo/authority-growth-weekly-2026-07-27.md`。
- 运行 GSC 只读实时拉取尝试，但全部因 `fetch failed` 失败，未生成新的 2026-07-27 GSC 报告文件。
- 解析了已有的 2026-07-26 GSC 报告，作为最新保存窗口对照。
- 未执行任何账号注册、目录提交、邮件发送、付费咨询、证书上传、GSC 写操作、索引提交、生产部署、commit 或 push。

## 验证

候选评分器：

```bash
python3 /Users/liangxile/.codex/skills/yuji-b2b-authority-growth/scripts/score_prospects.py /Users/liangxile/project/yujihealth.com/docs/seo/backlink-prospects.csv
```

结果：通过，Validated 13 prospects。

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
| 13 | Medtec China 2026 Exhibit | 10 | cost-review |

GSC 验证状态：

- `npm run seo:gsc:sites`：失败，`fetch failed`。
- `npm run seo:gsc:query` 对 query/page/page/country/device 的 28 天和 7 天实时窗口：全部失败，`fetch failed`。
- `NODE_OPTIONS=--dns-result-order=ipv4first npm run seo:gsc:sites`：仍失败，`fetch failed`。
- `curl https://searchconsole.googleapis.com/` 连通性探测长时间无响应，已手动中断。按网络/API 传输故障记录，不按权限拒绝或站点问题记录。

## 下一批人工任务

### 1. Femtech Insider company database

- 官方目标：`https://femtechinsider.com/companies/`
- 价值：女性健康 / femtech 行业数据库，适合建立 menstrual health entity signal；成本风险低。
- 所需证据：用户确认 80 字英文简介、公司类别、官网、联系人邮箱、是否公开制造商定位；不得写 clinical claims、未核验证书或未授权客户关系。
- 推荐落地页：`https://yujihealth.com/about/?utm_source=femtechinsider&utm_medium=company_database&utm_campaign=authority_growth_2026w31`
- 英文资料草稿：

```text
Xi'an Yuji Biotechnology Co., Ltd. is a feminine care OEM/ODM manufacturer based in Xi'an, China. YUJI supports menstrual cups, reusable discs, sanitary pads, liners, accessories, private-label packaging, sample planning, quality records, and export handoff for global brands and distributors. Product scope, MOQ, lead time, documentation, and target-market requirements are reviewed project by project.
```

- 负责人/授权要求：用户或品牌负责人确认公开资料后，由人工提交；本 automation 不自动注册或提交。
- 成功指标：数据库条目上线并被索引；品牌词 SERP 出现独立结果；出现 referral visit、Contact 到达或 RFQ。

### 2. INDA International Nonwovens Directory

- 官方目标：`https://www.inda.org/cgi-bin/dq/dq.cgi`
- 价值：非织造供应链目录，对 sanitary pads / liners、converter、brand-owner 语境更贴近；成本风险低。
- 所需证据：确认公开英文公司名、地址、邮箱、官网、公司类型、产品类别、是否可列 converter / brand owner / service provider，以及可公开描述的 pads/liners 生产边界。
- 推荐落地页：`https://yujihealth.com/products/pads-liners/?utm_source=inda&utm_medium=directory&utm_campaign=authority_growth_2026w31`
- 英文资料草稿：

```text
Xi'an Yuji Biotechnology Co., Ltd. (YUJI) supports feminine care OEM/ODM programs for global B2B buyers, including sanitary pads, liners, menstrual cups, reusable discs, wipes, pouches, cleaning kits, and private-label packaging. Product specifications, document packs, certificate scope, MOQ, and target-market requirements are confirmed project by project before quotation and production planning.
```

- 负责人/授权要求：YUJI export/sales owner 确认公开资料；用户批准后由人工提交目录问卷。
- 成功指标：目录条目上线并可索引；出现来自 INDA 或相关 referral 的 Contact 到达、RFQ 或供应商核验请求。

### 3. Suplivia manufacturer application

- 官方目标：`https://www.suplivia.com/`
- 价值：医疗采购和 distributor sourcing 场景；官方页面说明制造商需提交 company profile、certifications、product catalogue，并经过 documentation / company identity review。
- 所需证据：证书范围、产品目录、可公开工厂/QC 资料、产品分类；先确认 menstrual cups / discs / pads 是否符合平台医疗产品分类。
- 推荐落地页：`https://yujihealth.com/quality/evidence/?utm_source=suplivia&utm_medium=sourcing_platform&utm_campaign=authority_growth_2026w31`
- 英文资料草稿：

```text
YUJI can provide available specification sheets, certificate scans, test summaries, QC release records, packaging files, carton specs, and sample approval records according to the quoted product and target market. Certificate scope and market claims should be reviewed project by project before buyer-facing use.
```

- 负责人/授权要求：质量/业务负责人确认哪些证书和文件可公开；用户批准后人工申请。
- 成功指标：通过审核并上线 manufacturer profile；获得平台询盘、qualified RFQ 或样品请求。

### 4. Qmed+ qualified supplier directory

- 官方目标：`https://qmed.com/add-your-company-page000134.html`
- 价值：medical device / IVD OEM 供应商目录，有编辑筛选和较强审核语境。
- 所需证据：确认 ISO 9001、ISO 13485、cGMP、FDA registration 或 demonstrated medical device / IVD experience 中哪些证据真实适用；不能用不匹配证书范围申请。
- 推荐落地页：`https://yujihealth.com/quality/evidence/?utm_source=qmed&utm_medium=supplier_directory&utm_campaign=authority_growth_2026w31`
- 英文资料草稿：

```text
YUJI supports medical-device-oriented due diligence only within the documented product and certificate scope confirmed for each project. Buyers can request material specifications, available certificate scans, test summaries, QC checkpoints, packaging files, and market-specific document review before quotation.
```

- 负责人/授权要求：质量负责人核认证据，用户确认后人工注册/申请；本 automation 不提交。
- 成功指标：通过 Qmed 审核、listing 上线、出现 RFI/referral/RFQ。

### 5. Global Sources supplier account decision

- 官方目标：`https://www.sellproducts.globalsources.com/RegisterSYP.jsp`
- 价值：B2B 采购平台，有更直接的 sourcing buyer intent；但账号、运营和询盘响应成本高。
- 所需证据：确认是否已有公司主体账号、公开公司资料、产品类目、证书可公开范围、产品图/PDF、负责人和 1-2 个工作日线索响应 SLA。
- 推荐落地页：`https://yujihealth.com/contact/?utm_source=globalsources&utm_medium=sourcing_platform&utm_campaign=authority_growth_2026w31`
- 英文资料草稿：

```text
YUJI supports structured feminine care OEM/ODM sourcing for brands and distributors. Buyers can request product specifications, sample planning, private-label packaging support, available documentation, MOQ review, and export handoff through the RFQ form.
```

- 负责人/授权要求：用户先确认是否已有账号和是否接受平台运营成本；批准后由人工处理账号与资料提交。
- 成功指标：通过主体/资料审核；产生可归因询盘、qualified RFQ、样品请求或报价，不以单纯外链数量作为成功。

## 需要外部授权

- 用户确认哪些证书、测试报告、工厂/QC 图片、产品图、营业主体信息、地址和公司数字可以公开。
- 用户确认 LinkedIn 上的 `ISO 13485-certified` 等证据型表述是否真实、当前、范围匹配；未确认前不在任何外联和目录资料中复用。
- 用户确认是否已有 Global Sources、Alibaba、Made-in-China、Europages、Qmed、Suplivia 等账号，避免重复主体。
- 用户确认 Femtech Insider、INDA、Suplivia、Qmed+、Global Sources 的人工提交授权。
- 用户确认 Hygienix / PLMA / EDANA / MedicalExpo / Medtec China 的预算、参会 ROI、负责人和 lead follow-up SLA。
- 如需完整外链盘点，用户需提供 GSC Links 导出或授权 Ahrefs、SEMrush、Majestic 等 backlink 数据源；Search Console API 不能替代 Links report。
- 如需完整引荐流量，用户需提供 GA4、Plausible、Vercel Analytics、Cloudflare Analytics 或 CRM/邮件询盘数据访问。

## 未执行动作

- 未注册账号、未提交任何外部表单、未发送邮件、未购买会员/展位、未发布内容。
- 未上传或分享证书、客户、订单、价格、生产数据或其它敏感资料。
- 未提交索引、未改 DNS/Cloudflare/GSC 权限、未部署生产、未 commit、未 push。
- 未购买批量外链、PBN、评论/论坛垃圾链接、自动目录群发、虚假客户/证书/评价/合作关系或未披露利益交换。
