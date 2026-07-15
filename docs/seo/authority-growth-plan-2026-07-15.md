# YUJI B2B 站外权威与获客增长方案 - 2026-07-15

## 结论

对 `yujihealth.com`、`"Xi'an Yuji Biotechnology Co., Ltd."` 和品牌组合词做精确检索后，几乎没有找到与本公司明确对应的独立第三方结果。现阶段的问题不是少几个 SEO 外链，而是品牌实体、行业档案、可验证证据和真实合作引用尚未形成公开网络。

因此，优先级应是：先准备可审核的证据包，再进入有买家流量或编辑审核的平台，最后用真实项目、展会、协会和合作伙伴关系获得自然引用。目标是有效询盘和品牌可验证性，不是单独追求链接数量或所谓 DR。

## 已直接完成的基础设施

- 新增英文 8 页产品线 PDF，覆盖产品组合、OEM/ODM 流程、证据请求和 RFQ 输入。
- 资源页和询盘页已加入 PDF 下载入口，方便买家内部转发，也可作为目录入驻和媒体沟通附件。
- Contact 表单已记录会话内首次落地页、来源页和 UTM，不使用持久广告 Cookie；这些字段会随询盘邮件发送。
- 新增 Privacy Notice 与表单用途说明，明确只接受 B2B 项目信息，不应提交患者或消费者健康数据。
- 建立可审计的候选表 `docs/seo/backlink-prospects.csv`，后续每个机会都必须有官方入口、负责人、证据要求和状态。

以上均为本地未部署改动。隐私文案在发布前仍需业务或法律审核。

## 域名与邮件只读快照

- `yujihealth.com` 的 MX 当前指向 Cloudflare Email Routing。
- 根域存在 SPF：包含 Cloudflare 邮件路由并以 softfail 结束。
- `_dmarc.yujihealth.com` 当前未返回 TXT 记录。建议邮件管理员先核对 Resend 的 DKIM 与 From 域对齐，再评估以 `p=none` 监控模式建立 DMARC；DNS 修改必须单独审批。
- 线上 HTTP 与 `www` 均会 308 归一到 `https://yujihealth.com/`，HTTPS 首页返回 200，并存在 HSTS、`X-Content-Type-Options`、`X-Frame-Options`、`Referrer-Policy` 和 `Permissions-Policy`。

## 站外机会分层

### A 级：有明确买家意图，证据齐备后申请

| 渠道 | 价值 | 进入条件或风险 | 下一步 |
| --- | --- | --- | --- |
| Qmed+ | 医疗器械供应商目录，有编辑筛选 | 官方要求 ISO 9001/13485、cGMP、FDA 注册或可证明的医疗器械经验之一；不能在证据不足时申请 | 核对公司主体、证书范围、有效期和产品适用性后再建档 |
| Global Sources | 国际采购平台与供应商曝光 | 需要账号、公司资料和运营投入 | 先检查公司是否已有账号，避免重复主体 |
| MedicalExpo | 医疗产品买家与展商渠道 | 可能涉及展商/付费方案，需人工评估 ROI | 用 line sheet 询问适合的供应商展示方案 |
| Alibaba / Made-in-China | 高采购意图，但竞争和运营成本高 | 账号、认证、广告及持续询盘处理成本；不是纯 SEO 项目 | 只在有专人维护和线索 SLA 时启动 |

### B 级：品牌实体与编辑曝光

| 渠道 | 价值 | 进入条件或风险 | 下一步 |
| --- | --- | --- | --- |
| Femtech Insider | Femtech 公司数据库和行业媒体语境 | 需准确公司介绍、类别、网址和可验证资料 | 准备 80 字和 200 字英文简介，提交动作需人工确认 |
| Suplivia | 女性健康制造商发现平台 | 官方申请会审核公司档案、认证和目录 | 准备脱敏证明和产品 PDF 后再申请 |
| Europages | 欧洲 B2B 公司和产品档案 | 官方文档显示网站链接可进入公司/产品页，但 VAT 等资格要求需先确认中国主体是否适用 | 先向平台确认资格，不直接注册 |

### C 级：协会、展会和真实行业关系

| 渠道 | 价值 | 进入条件或风险 | 下一步 |
| --- | --- | --- | --- |
| PLMA | 自有品牌买家、会员和展商目录 | 会员或参展费用高，需要目标市场和会前约见计划 | 先询问 2027 展会/会员包，再按预计会面数核算成本 |
| EDANA | 非织造布、吸收性卫生用品行业实体信号 | 会员资格和费用需审核；对 pads/liners 更相关 | 以 converter / absorbent hygiene 业务核对会员资格 |
| 客户、包装商、检测实验室、物流与渠道伙伴 | 最可信的真实关系引用 | 必须存在真实合作并获得双方授权 | 建立合作清单，优先争取 supplier/partner/case study 页面引用 |

## 不是外链但同样影响 B2B 获客的因素

1. **可验证证据**：工厂外景、生产和 QC 实拍、证书范围和有效期、脱敏规格书/QC 样页、包装和出货样例。没有这些，目录审核、媒体采信和买家转化都会受限。
2. **品牌实体一致性**：所有档案统一使用 `Xi'an Yuji Biotechnology Co., Ltd.`、`YUJI`、官网、公共邮箱、地址写法、产品类别和公司简介；不要创建多个名称不同的重复档案。
3. **案例和买家结果**：先做一篇经授权的匿名案例，写清目标市场、产品、样品轮次、包装复杂度、交付范围和可验证结果，不虚构品牌名或评价。
4. **销售响应**：目录带来的线索必须在 1-2 个工作日内由固定负责人处理，并在 CRM 或表格记录来源、资格、样品、报价和成交阶段。
5. **内容分发**：每篇核心采购内容应有 LinkedIn 公司页/出口联系人发布、行业媒体定向投稿、客户或合作伙伴共创，不做自动群发。
6. **品牌搜索面**：定期检查精确品牌词、公司全称、域名、图片和未链接提及；先纠正错误信息，再争取把真实提及补成链接。
7. **邮件与域名信誉**：公开邮箱的 SPF、DKIM、DMARC、退信和回复 SLA 会影响询盘成交，应由域名/邮件管理员定期验证，任何 DNS 修改须单独审批。
8. **衡量闭环**：GSC 只能看到搜索表现，不能代替网站访问和 CRM 漏斗。需在确定隐私和数据保留方案后，再选 GA4、Plausible 或其他分析平台。

## 证据包清单

申请目录、投稿或洽谈合作前，至少准备以下材料：

- 公司营业主体英文名称、地址和公共邮箱。
- 一页公司简介、8 页 line sheet、产品图和工厂/质检实拍。
- 当前有效且范围匹配的证书封面、主体、标准、范围、签发与到期信息；敏感编号可按平台要求脱敏。
- 典型规格书、QC release、包装 BOM 或 carton data 样页。
- 产品类别、材料、MOQ、样品、交期、包装、目标市场和文件可用性的项目边界。
- 可公开的客户案例或合作说明，必须获得授权。

## 90 天执行节奏

### 第 1-2 周：证据与实体

- 完成证据包审核，确认哪些证书、照片、文件和数字可以公开。
- 固定英文公司名称、80/200 字简介、地址、邮箱、产品分类和 UTM 规则。
- 检查现有平台账号，避免重复注册和主体冲突。

### 第 3-4 周：首批高相关档案

- 只申请 2-3 个证据条件已满足的平台，优先 Qmed+、Global Sources 或最符合现有销售渠道的平台。
- 每个档案链接到最相关的产品/证据页面，不全部指向首页。
- 给外部链接统一添加可识别 UTM，并在询盘中核对来源。

### 第 5-8 周：真实关系与内容

- 发布 1 个经授权案例和 1 个数据/流程型采购内容。
- 向真实包装、检测、渠道或活动伙伴提出共创页面或供应商引用请求。
- 定向联系 Femtech 媒体/数据库，不做批量模板群发。

### 第 9-12 周：复盘与扩展

- 统计已审核档案、有效第三方品牌提及、引荐访问、有效 RFQ、样品和报价。
- 淘汰无买家访问、无收录、无询盘且需要持续付费的平台。
- 再决定 PLMA、EDANA、MedicalExpo 等高成本渠道是否值得投入。

## KPI

每月只追踪可用于决策的指标：

- 新增且已索引的相关行业引用域名。
- 精确品牌词和公司全称的有效第三方结果数量。
- 各渠道带来的引荐访问、Contact 到达和 RFQ。
- 有效询盘、销售合格线索、样品请求、报价和成交。
- 从首次询盘到首次回复的时间。
- 无效询盘和垃圾线索占比。

链接数量、DR、DA 只能作为辅助观察，不能替代以上指标。

## 可直接使用的英文资料

### 80-word company profile

> Xi'an Yuji Biotechnology Co., Ltd. is a feminine care OEM/ODM manufacturer based in Xi'an, China. YUJI supports menstrual cups, reusable menstrual discs, sanitary pads, liners, accessories, private-label packaging, sample planning, quality records, and export handoff for global brands and distributors. Product scope, MOQ, lead time, documentation, and target-market requirements are reviewed project by project. Buyers can request a product line sheet, available evidence files, samples, and a structured quotation at yujihealth.com/contact/.

### Directory description

> YUJI helps brands and distributors source feminine care products through a structured brief, sample, customization, trial production, quality review, and export handoff process. Programs include menstrual cups, reusable discs, pads, liners, accessories, packaging, and launch-ready kits. Available specifications, certificates, test summaries, QC records, packaging files, MOQ, and lead time are confirmed for the quoted product and market rather than presented as blanket claims.

### Partnership outreach email

Subject: Accurate supplier reference for our existing cooperation

> Hello [Name],
>
> We are updating YUJI's public supplier information so buyers can verify real working relationships. Because we already work together on [specific project/service], would your team consider adding a short, factual supplier/partner reference on [relevant page]? We can provide the exact company name, website, approved wording, and product line PDF, and we are happy to review any reference to your company before publication.
>
> This request is only for an accurate description of the existing relationship. No rating, performance claim, or endorsement is required.
>
> Best regards,
> [Name]

### Editorial pitch

Subject: Procurement checklist for reusable feminine care private-label programs

> Hello [Editor],
>
> We prepared a practical sourcing checklist for buyers comparing menstrual cup, reusable disc, and private-label hygiene programs. It focuses on the decisions that change MOQ, sampling, packaging, document review, and launch timing, without making blanket compliance claims. If this fits your audience, we can provide a concise contributed article, original process photos, and a fact-checked manufacturer perspective. We will follow your editorial and disclosure rules.
>
> Source material: https://yujihealth.com/resources/

## 禁止事项

- 不购买批量外链、PBN、站群、论坛签名、评论链接或自动目录提交。
- 不以免费样品、佣金或互链换取未披露的推荐和评价。
- 不复制同一篇软文到大量低质量站点。
- 不伪造证书、客户、出货量、专利、市场覆盖或合作关系。
- 不用 AI 自动发数百封冷邮件；少量、定向、基于真实关系的人工沟通优先。
- 未经确认不注册账号、提交资料、发送邮件、购买会员或展位。

## 官方研究入口

- Qmed+ company page: https://qmed.com/add-your-company-page000134.html
- Global Sources supplier registration: https://www.sellproducts.globalsources.com/RegisterSYP.jsp
- MedicalExpo exhibitor entry: https://www.medicalexpo.com/
- Femtech Insider company database: https://femtechinsider.com/companies/
- Suplivia manufacturer application: https://www.suplivia.com/
- Europages supplier help: https://help.europages.com/en/supplier/company-profile-basic-information
- PLMA: https://www.plmainternational.com/
- EDANA membership: https://www.edana.org/membership/who-can-join
