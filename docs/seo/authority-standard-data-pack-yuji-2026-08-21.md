# YUJI 标准资料包（Authority Standard Data Pack）

- **创建日期**：2026-08-21
- **适用项目**：yujihealth.com B2B 外链与品牌权威建设
- **方法**：参考 SPD V2 Quality（flaqai/backlink_skills）+ 既有 authority-growth-plan-2026-07-15
- **证据闸门**：所有认证 / 出货 / 市场 / 产能 / 检测 / 客户数据必须对照 `docs/evidence/evidence-manifest.csv` 与 `docs/evidence/evidence-approval-request-2026-08-10.md`。未审批（`unreviewed` / `public_scope=none`）不得作为公开主张或下载物。

---

## 0. 资料分级总览

| 分级 | 含义 | 本资料包中的内容 |
| --- | --- | --- |
| **safe to publish** | 公司已在官网/公开渠道发布，或无条件事实，可直接用于目录/媒体资料 | 公司英文名、品牌、官网、公开邮箱、城市级地址、产品分类、采购场景、落地页、80/200 字简介（谨慎措辞）、buyer PDF 链接、UTM 规则、RFI SLA（角色级）、字段映射、审核/暂停/恢复流程 |
| **publicly stated but evidence approval required** | 官网已展示，但属于证据限制清单；外部平台发布前需与最新报价/审批对齐 | 2019 成立（已在官网 JSON-LD）、MOQ/样品/交期参考值 |
| **owner approval required** | 运营数据，随项目变动，发布前需业务负责人确认 | 具体 MOQ/交期/包装对外口径、指定联系人姓名、对外承诺的 SLA 数值 |
| **evidence pending** | `docs/evidence/` 中标记为 `unreviewed` / `public_scope=none`，需源文件+脱敏+书面公开批准 | 工厂面积、洁净区面积、出口市场数、累计出货量、材料性能（medical-grade/LSR 硅胶）、ISO 13485 / CE MDR / GMPC / BSCI、QC 检测项目 |
| **do not publish** | 明确禁止或当前无任何可核验来源 | "FDA approved"、"CE certified"（无产品与市场范围）、"ISO 13485 certified"（无有效证书）、"medical device"（无产品分类与目标市场依据）、"safe for all users"、"non-toxic"、客户名/品牌名/订单量/复购率/失败率、未审批的检测/出货/市场/产能数据 |

---

## 1. 公司基础信息（safe to publish）

- **公司英文名**：Xi'an Yuji Biotechnology Co., Ltd.
- **品牌**：YUJI
- **官网**：https://yujihealth.com
- **公开邮箱**：info@yujihealth.com
- **地址（城市级，公开）**：Xi'an, Shaanxi, China
  - 注意：仅发布城市级地址。完整街道/门牌/设施细节属于运营信息，纳入 evidence pending，不在外部资料写全地址。
- **成立年份（publicly stated）**：2019（官网 JSON-LD `foundingDate: 2019-03` 已公开）
- **业务性质**：Feminine Care OEM / ODM Manufacturer（女性护理用品代工制造）

---

## 2. 公司简介（safe to publish，谨慎措辞）

### 80-word company profile（用于目录简介）

> Xi'an Yuji Biotechnology Co., Ltd. is a feminine care OEM/ODM manufacturer based in Xi'an, China. YUJI supports menstrual cups, reusable menstrual discs, sanitary pads, liners, accessories, private-label packaging, sample planning, quality records, and export handoff for global brands and distributors. Product scope, MOQ, lead time, documentation, and target-market requirements are reviewed project by project. Buyers can request a product line sheet, available evidence files, samples, and a structured quotation at yujihealth.com/contact/.

### 200-word company profile（用于媒体/协会资料）

> Xi'an Yuji Biotechnology Co., Ltd. (brand: YUJI) is a feminine care OEM/ODM manufacturer based in Xi'an, China, serving global brands, Amazon and DTC labels, pharmacy and retail buyers, distributors, and importers. The product scope covers menstrual cups, reusable menstrual discs, sanitary pads, panty liners, intimate-care accessories, cleaning and sterilizing kits, storage pouches, private-label feminine-care kits, and OEM/ODM packaging programs.
>
> YUJI works with buyers through a structured brief, sample, customization, trial production, quality review, and export handoff process. Because feminine-care requirements differ by product, material, market, and documentation, specifications, certificates, test summaries, QC records, packaging files, MOQ, and lead time are confirmed for the quoted product and market rather than presented as blanket claims. Buyers can review the public evidence pack, download the product line sheet, and request samples or a structured quotation through yujihealth.com/contact/.

**禁止在简介中加入**：任何认证编号、出货数字、市场覆盖数字、客户名称、"certified / approved / safe / non-toxic" 等绝对化或未经范围限定的合规措辞。

---

## 3. Feminine Care OEM/ODM tagline

- 主 tagline：`Feminine Care OEM/ODM — Menstrual Cups, Discs, Pads & Liners for Global Brands`
- 短 tagline（≤60 字符）：`YUJI — Feminine Care OEM/ODM from Xi'an, China`

---

## 4. 产品分类（safe to publish）

| 产品线 | 采购应用 | 推荐落地页 |
| --- | --- | --- |
| Menstrual Cups（月经杯） | Amazon private label、DTC、reusable cup programs | https://yujihealth.com/products/menstrual-cups/ |
| Reusable Menstrual Discs（ reusable 月经盘） | DTC、reusable disc programs | https://yujihealth.com/products/menstrual-discs/ |
| Sanitary Pads（卫生巾） | Pharmacy/retail、distributor、private-label pad programs | https://yujihealth.com/products/pads-liners/ |
| Panty Liners（护垫） | Pharmacy/retail、distributor、private-label programs | https://yujihealth.com/products/pads-liners/ |
| Intimate Care Accessories（私护配件） | Multi-product kits | https://yujihealth.com/products/ |
| Cleaning / Sterilizing Kits（清洁/消毒套装） | Cup/disc aftercare kits | https://yujihealth.com/products/menstrual-cups/ |
| Storage Pouches（收纳袋） | Cup/disc kits | https://yujihealth.com/products/menstrual-cups/ |
| Private-label Feminine Care Kits（私牌套装） | Multi-product feminine-care kits | https://yujihealth.com/oem-odm/ |
| OEM / ODM Packaging Programs（代工包装方案） | Private-label programs | https://yujihealth.com/oem-odm/ |

---

## 5. 采购场景（safe to publish）

- Amazon private label
- DTC feminine-care brands
- Pharmacy and retail launches
- Distributor programs
- Menstrual-care startup launches
- Multi-product feminine-care kits
- Private-label sanitary pad programs
- Reusable cup and disc programs

---

## 6. MOQ / 样品 / 包装 / 交期（owner approval required + publicly stated）

> 以下为对外口径前的**内部参考**，发布到任何外部平台前必须由业务负责人用最新报价单确认。

- **Trial MOQ 参考**：1,000 cups / 10,000 pads（参考值，非承诺；以具体询盘报价为准）
- **Regular-order lead time 参考**：15–20 working days（参考值，以报价单为准）
- **样品**：支持按项目规划样品轮次（具体样品政策需 owner 确认后对外）
- **包装**：支持定制包装 BOM 与 carton data（提供样页需走 evidence 审批）
- **对外发布规则**：目录/媒体资料中只写"MOQ and lead time are confirmed per project quotation"；不写死具体数字，除非 owner 明确批准并附最新报价依据。

---

## 7. 工厂与质量信息（evidence pending — 未审批不得发布）

以下信息目前在 `docs/evidence/evidence-manifest.csv` 中均为 `unreviewed` / `public_scope=none`，**外部平台一律不得作为公开主张**，须等对应 `E-PENDING-*` 源文件+脱敏+书面公开批准：

| 主张 | 证据 ID | 状态 | 外部发布 |
| --- | --- | --- | --- |
| 3,200 m² 工厂规模 | E-PENDING-004 | unreviewed | 禁止 |
| 800 m² ISO Class 7 洁净区 | E-PENDING-004 | unreviewed | 禁止 |
| 30+ 出口市场 | E-PENDING-005 | unreviewed | 禁止 |
| 3M+ 累计杯类出货量 | E-PENDING-005 | unreviewed | 禁止 |
| medical-grade / LSR 硅胶材料性能 | E-PENDING-006 | unreviewed | 禁止 |
| ISO 13485 / CE MDR / GMPC / BSCI | E-PENDING-001 | unreviewed | 禁止（不得写 "certified"） |
| 微生物 / EO 残留 / 硬度 / 拉伸 / pH 等 QC 检测 | E-PENDING-002 / 003 | unreviewed | 禁止 |

**可安全对外表述**（不含具体数字/证书）："Quality and compliance are reviewed per product, market, and documentation scope; buyers can review the public evidence pack at yujihealth.com/quality/evidence/."

---

## 8. 认证与合规证据闸门（evidence gate）

- 当前唯一 `approved-public` 资产：`E-ILLUS-001`（QC release 字段**示意**，明确标注 illustrative，非真实批次放行单）。
- 任何证书、检测、QC、规格、设施、出货、市场主张，必须满足：`source 真实且当前有效` → `脱敏` → `技术+公开使用双重书面批准` → `仅发布批准后的衍生文件` → `manifest 状态改为 approved-public/approved-redacted`。
- 在 evidence 审批完成前，外部资料中不出现任何证书编号、签发机构、有效期、合规等级断言。

---

## 9. Buyer PDF 下载

- **Product Line Sheet**：https://yujihealth.com/downloads/yuji-feminine-care-oem-line-sheet.pdf
  - 用途：目录入驻、媒体沟通、买家内部转发的附件。
- **QC Release Checklist（示意）**：https://yujihealth.com/downloads/yuji-qc-release-checklist-sample.txt（明确 illustrative）

---

## 10. 推荐 UTM 与归因

- **原则**：目录/协会档案的"官网链接"字段使用**干净规范 URL**（如 `https://yujihealth.com/products/menstrual-cups/`），不要塞 UTM——多数平台会剥离参数或视为垃圾。
- **UTM 仅用于**：平台提供的 bio / campaign / 自定义链接字段，或邮件/社媒活动。
- **推荐模板**：`?utm_source=<platform_slug>&utm_medium=referral&utm_campaign=yuji_authority_2026`
  - 例：`https://yujihealth.com/contact/?utm_source=femtechinsider&utm_medium=referral&utm_campaign=yuji_authority_2026`
- **归因兜底**：Contact 表单已记录会话内首次落地页、来源页、UTM（不使用持久广告 Cookie）。外部引荐无 UTM 时，用 referrer + 来源平台在 CRM/表格中标注。

---

## 11. RFI 负责人与响应 SLA

- **RFI 接收邮箱**：info@yujihealth.com（角色级，不写具体个人姓名；指定联系人需 owner approval）
- **响应 SLA**：目标 1–2 个工作日内首次响应（owner approval required 对外承诺具体数值）
- **线索处理**：所有询盘记录来源平台、资格、样品、报价、成交阶段；禁止收集患者/消费者健康敏感信息，仅保留 B2B 项目与采购信息。

---

## 12. 各平台字段映射（提交前对照）

| 平台 | 公司名 | 官网链接 | 简介 | 产品/类目 | 证书字段 | 备注 |
| --- | --- | --- | --- | --- | --- | --- |
| Qmed+ | Xi'an Yuji Biotechnology Co., Ltd. | 干净 URL | 80-word | Medical contract manufacturing / components | 需 ISO 13485/cGMP/FDA/医疗经验 | 编辑审核；evidence blocked |
| Femtech Insider | Xi'an Yuji Biotechnology Co., Ltd. | 干净 URL | 80-word | Feminine care OEM/ODM | 不填未审批证书 | 媒体/数据库语境 |
| Suplivia | Xi'an Yuji Biotechnology Co., Ltd. | 干净 URL | 80-word | Feminine care manufacturer | 提交证书需先审批 | 团队核验身份与文件 |
| Global Sources | Xi'an Yuji Biotechnology Co., Ltd. | 干净 URL | 200-word 缩写 | Personal care / hygiene | 可列 ISO/BSCI（仅已审批） | 需账号+验证 |
| MedicalExpo | Xi'an Yuji Biotechnology Co., Ltd. | 干净 URL | 200-word 缩写 | Hygiene / Medical consumables | 不填未审批证书 | 展商方案付费 |
| Europages | Xi'an Yuji Biotechnology Co., Ltd. | 干净 URL（可选） | ≤1500 字符 | Feminine care manufacturer | VAT 必填（中国主体待确认） | VAT 为中国主体 blocker |
| INDA | Xi'an Yuji Biotechnology Co., Ltd. | 干净 URL | 公司描述 | Nonwovens / absorbent hygiene | 会员目录 | 旧链接失效，需更新 |
| EDANA | Xi'an Yuji Biotechnology Co., Ltd. | 干净 URL | 会员档案 | Absorbent hygiene converter | 会员资格 | 付费会员 |
| PLMA | Xi'an Yuji Biotechnology Co., Ltd. | 干净 URL | 会员档案 | Private label manufacturer | 会员资格 | 付费会员+展位 |
| Alibaba | Xi'an Yuji Biotechnology Co., Ltd. | 干净 URL | 店铺简介 | Feminine care / hygiene | Verified Supplier | 需专人+响应 SLA |
| Made-in-China | Xi'an Yuji Biotechnology Co., Ltd. | 干净 URL | 店铺简介 | Feminine care / hygiene | Audited Supplier | 需专人+响应 SLA |
| Hygienix | Xi'an Yuji Biotechnology Co., Ltd. | 展商列表链接 | 展商简介 | Absorbent hygiene | 展商资格 | 付费展位 |
| Medtec China | Xi'an Yuji Biotechnology Co., Ltd. | 展商列表链接 | 展商简介 | OEM/ODM contract mfg | 医疗分类证据 | 付费展位 |

---

## 13. 审核、暂停与恢复

- **审核（提交前必做）**：逐站核对——公司名/地址/简介/产品分类/官网 URL/联系邮箱/公开证据/是否收费/预计公开页/是否含 UTM，与本文档一致。
- **暂停条件（立即暂停并交用户）**：出现 CAPTCHA/Turnstile/OTP/2FA/Passkey；要求密码/恢复码/Cookie；要求付款/会员/广告/展位/Premium；要求上传证书扫描件；要求发送外部邮件；出现不明确法律或长期服务条款；最终提交前发现地址/主体/认证/产品范围不一致。
- **恢复条件**：上述阻塞由用户解决并书面确认后，从原状态继续；不重复注册、不重复提交、不覆盖既有结果。
- **撤回 owner**：任何已发布资料如需修改/下线，由 evidence/业务负责人按 `evidence-approval-request-2026-08-10.md` 的撤回流程处理。

---

## 14. 禁止事项（贯穿所有动作）

- 不购买批量外链、PBN、站群、论坛签名、评论链接或自动目录提交。
- 不以免费样品、佣金或互链换取未披露推荐/评价。
- 不复制同一篇软文到大量低质量站点。
- 不伪造证书、客户、出货量、专利、市场覆盖或合作关系。
- 不用 AI 自动发数百封冷邮件；少量、定向、基于真实关系的人工沟通优先。
- 未经确认不注册账号、提交资料、发送邮件、购买会员或展位。
