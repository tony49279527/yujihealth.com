# YUJI 外链候选审批队列（Authority Approval Queue）

- **日期**：2026-08-21
- **方法**：SPD V2 Quality（研究优先、≤10/批、逐站授权、排除链接农场/PBN/互链/重复文章、证据闸门）
- **状态词汇**：与 `score_prospects.py` 对齐（research-ready / evidence-blocked / eligibility-check / requires-account / owner-required / cost-review / approved / submitted / listed / rejected / paused）
- **评分**：relevance / editorial_review / buyer_intent / evidence_readiness（0–3）；cost_risk（0–3，越高越贵/风险越大，核算时扣分）
- **优先级分数** = 3×relevance + 2×editorial_review + 2×buyer_intent + evidence_readiness − cost_risk

> 说明：`backlink-prospects.csv` 受脚本列数限制只保留 10 列；本文件承载更丰富的字段（推荐落地页、UTM、所需资料、Owner、下一步、阻塞原因）。

---

## 候选总表（13 个，已全部重新打开官方页面核验）

| # | 名称 | 类型 | rel | ed | bi | ev | cr | 分数 | 状态 | Owner | 阻塞原因 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Qmed+ | 医疗器械供应商目录 | 3 | 3 | 3 | 1 | 1 | **21** | evidence-blocked | Compliance+Operations | 无有效 ISO 13485/cGMP/FDA 或医疗经验证据 |
| 2 | Femtech Insider | Femtech 公司数据库 | 3 | 2 | 2 | 2 | 0 | **19** | research-ready | 市场 | Cloudflare 浏览器墙，需手动验证提交流程 |
| 3 | Suplivia | 医疗采购发现平台 | 3 | 3 | 2 | 1 | 1 | **19** | evidence-blocked | Quality+Compliance | 证书待审批（E-PENDING-001/002/003/006） |
| 4 | Global Sources | B2B 采购平台 | 3 | 2 | 3 | 2 | 2 | **19** | requires-account | 销售负责人 | 需账号与持续运营投入 |
| 5 | PLMA | 自有品牌协会+展会 | 3 | 3 | 3 | 1 | 3 | **19** | cost-review | 业务 | 付费会员+展位 |
| 6 | MedicalExpo | 医疗产品市场 | 3 | 2 | 3 | 2 | 3 | **18** | cost-review | 销售/市场 | 付费展商方案未评估 |
| 7 | EDANA | 非织造/吸收性卫生协会 | 3 | 3 | 2 | 1 | 3 | **17** | cost-review | 业务 | 付费会员（按非织造营业额计费） |
| 8 | INDA | 非织造买方指南 | 3 | 1 | 2 | 2 | 1 | **16** | research-ready | 市场 | 旧 URL 404，需更新正确链接 |
| 9 | Alibaba | B2B 采购市场 | 3 | 1 | 3 | 2 | 3 | **16** | owner-required | 专人 | 需专人维护+询盘 SLA |
| 10 | Made-in-China | B2B 采购市场 | 3 | 1 | 3 | 2 | 3 | **16** | owner-required | 专人 | 需专人维护+询盘 SLA |
| 11 | Europages | 欧洲 B2B 目录 | 2 | 1 | 2 | 1 | 1 | **10** | eligibility-check | 销售 | VAT 必填，中国主体资格待确认（倾向 ineligible） |
| 12 | Hygienix | 吸收性卫生展会 | 3 | 1 | 2 | 1 | 3 | **13** | cost-review | 业务 | 付费展位 $2,525–$3,025 |
| 13 | Medtec China | 医疗器械供应链展 | 2 | 1 | 2 | 1 | 3 | **8** | cost-review | 业务 | 付费展位+医疗分类证据 |

---

## 逐站详情（字段映射 + 所需资料 + 下一步）

### 1. Qmed+ — evidence-blocked（最高分，但证据闸门）
- 官方页：https://qmed.com/add-your-company-page000134.html
- 接受：医疗器械/IVD 行业的预审核供应商；免费列表存活 6 个月。
- 进入门槛：ISO 9001 / ISO 13485 / cGMP / FDA 注册 / 可证明的医疗设备经验之一 + 编辑审核。
- 推荐落地页：https://yujihealth.com/quality/evidence/
- UTM：`?utm_source=qmed&utm_medium=referral&utm_campaign=yuji_authority_2026`
- 所需资料：有效 ISO 13485 或 cGMP/FDA 或医疗设备经验证明（对应 E-PENDING-001 / E-PENDING-007）。
- 下一步：等证据审批通过、取得书面公开批准后，再建档提交。
- 阻塞：当前 `E-PENDING-001` 为 unreviewed，无有效证书 → 不得提交。

### 2. Femtech Insider — research-ready（免费品牌提及，优先执行）
- 官方页：https://femtechinsider.com/companies/
- 接受：femtech 公司数据库；需准确公司介绍、类目、网址、可验证资料。
- 推荐落地页：https://yujihealth.com/about/ （或 /resources/）
- UTM：`?utm_source=femtechinsider&utm_medium=referral&utm_campaign=yuji_authority_2026`
- 所需资料：批准的 80-word profile + evidence 链接（见数据包）。
- 下一步：当前页面被 Cloudflare 浏览器挑战拦截，需人工（用户或本地浏览器）打开核实提交流程；核实后提交需人工确认。
- 阻塞：浏览器墙，非脚本可代答。

### 3. Suplivia — evidence-blocked（强相关，中国厂商可接受）
- 官方页：https://www.suplivia.com/ （Join as Manufacturer）
- 接受：医疗采购发现网络，已收录多家 VERIFIED 中国厂商；制造商需提交公司档案+证书+产品目录供团队核验身份与文件。
- 推荐落地页：https://yujihealth.com/products/
- UTM：`?utm_source=suplivia&utm_medium=referral&utm_campaign=yuji_authority_2026`
- 所需资料：审批后的证书包 + 产品目录 + 脱敏证明（E-PENDING-001/002/003/006）。
- 下一步：准备审批后证书档案，待证据就绪后申请。
- 阻塞：证书待审批。

### 4. Global Sources — requires-account（真实买家意图，可执行）
- 官方页：https://www.sellproducts.globalsources.com/RegisterSYP.jsp
- 接受：中国制造商（消费/个护/卫生品类）；供应商账号+验证+邮箱/CAPTCHA。
- 推荐落地页：https://yujihealth.com/oem-odm/
- UTM：`?utm_source=globalsources&utm_medium=referral&utm_campaign=yuji_authority_2026`
- 所需资料：公司资料、产品类目、联系人；建议 Verified Supplier 后续升级。
- 下一步：检查是否已有公司账号（避免重复主体），指派 owner 后注册。
- 阻塞：需账号与运营投入 → 交用户/销售负责人。

### 5. PLMA — cost-review（自有品牌相关，付费）
- 官方页：https://www.plmainternational.com/
- 接受：自有品牌制造商协会会员；2027 World of Private Label 展会（2027-05-25/26）。
- 推荐落地页：https://yujihealth.com/oem-odm/
- UTM：`?utm_source=plma&utm_medium=referral&utm_campaign=yuji_authority_2026`
- 所需资料：会员资格 + 展位预算。
- 下一步：询 2027 展会/会员包，按预计会面数核算成本。
- 阻塞：付费会员+展位，需预算决策。

### 6. MedicalExpo — cost-review（医疗市场，付费）
- 官方页：https://www.medicalexpo.com/
- 接受：医疗产品市场（Hygiene / Medical Consumables 类目）；VirtualExpo 集团，展商方案通常付费。
- 推荐落地页：https://yujihealth.com/products/menstrual-cups/
- UTM：`?utm_source=medicalexpo&utm_medium=referral&utm_campaign=yuji_authority_2026`
- 所需资料：产品目录 + 展商方案询价。
- 下一步：用 line sheet 询问适合供应商的展示方案并评估 ROI。
- 阻塞：付费展商方案未评估。

### 7. EDANA — cost-review（absorbent hygiene converter 资格明确）
- 官方页：https://www.edana.org/membership/who-can-join
- 接受：非织造及相关行业；**明确列出 "Absorbent Hygiene products" converters** 可作 full membership。
- 推荐落地页：https://yujihealth.com/products/pads-liners/
- UTM：`?utm_source=edana&utm_medium=referral&utm_campaign=yuji_authority_2026`
- 所需资料：会员资格（按非织造相关营业额计费，保密）。
- 下一步：以 converter 资格询会员费并评估（pads/liners 相关；cups/discs 硅胶线相关性低）。
- 阻塞：付费会员。

### 8. INDA — research-ready（pads/liners 相关，链接失效待修）
- 官方页：旧链接 https://www.inda.org/cgi-bin/dq/dq.cgi 已 **404**，需更新为正确买方指南/会员目录。
- 接受：非织造协会；absorbent hygiene / pads / liners 材料相关。
- 推荐落地页：https://yujihealth.com/products/pads-liners/
- UTM：`?utm_source=inda&utm_medium=referral&utm_campaign=yuji_authority_2026`
- 所需资料：正确目录链接 + 会员/目录资格。
- 下一步：修复链接、确认会员或买方指南入驻资格（通常需会员）。
- 阻塞：旧 URL 失效，需重新定位。

### 9. Alibaba — owner-required（高竞争/高成本，延后）
- 官方页：https://suppliers.alibaba.com/
- 接受：中国制造商；Verified Supplier（SGS/TUV/BV 现场审核）；高竞争与持续询盘处理成本。
- 推荐落地页：https://yujihealth.com/oem-odm/
- UTM：`?utm_source=alibaba&utm_medium=referral&utm_campaign=yuji_authority_2026`
- 所需资料：Gold/Verified Supplier + 现场审核 + 专人响应。
- 下一步：仅在有专人维护与询盘 SLA 时启动。
- 阻塞：需专人 + 响应 SLA。

### 10. Made-in-China — owner-required（高竞争/高成本，延后）
- 官方页：https://en.made-in-china.com/
- 接受：中国供应商；Audited Supplier（第三方验证）。
- 推荐落地页：https://yujihealth.com/oem-odm/
- UTM：`?utm_source=madeinchina&utm_medium=referral&utm_campaign=yuji_authority_2026`
- 所需资料：Audited Supplier + 现场审核 + 专人响应。
- 下一步：对比 verified supplier 成本与线索质量。
- 阻塞：需专人 + 响应 SLA。

### 11. Europages — eligibility-check（VAT 为中国主体 blocker）
- 官方页：https://help.europages.com/en/supplier/company-profile-basic-information
- 关键发现：**VAT 号为必填项**。中国主体若无 EU VAT，资格存疑。
- 推荐落地页：https://yujihealth.com/products/
- UTM：`?utm_source=europages&utm_medium=referral&utm_campaign=yuji_authority_2026`
- 所需资料：EU VAT 或平台确认的替代方案。
- 下一步：向平台确认中国主体无 EU VAT 是否可入驻；若不可，标记 rejected。
- 阻塞：VAT 必填 → 倾向 ineligible，需直接确认。

### 12. Hygienix — cost-review（吸收性卫生展会，付费）
- 官方页：https://www.hygienix.org/exhibit
- 接受：吸收性卫生会议/展（2026-11-16~19 休斯顿）；tabletop 展位 INDA 会员 $2,525 / 非会员 $3,025。
- 推荐落地页：https://yujihealth.com/products/pads-liners/
- UTM：`?utm_source=hygienix&utm_medium=referral&utm_campaign=yuji_authority_2026`
- 所需资料：展位费 + 差旅 + 线索跟进 SLA。
- 下一步：评估 tabletop 费用、差旅、展位 owner、线索跟进 economics。
- 阻塞：付费展位。

### 13. Medtec China — cost-review（医疗器械供应链展，付费）
- 官方页：https://en.medtecchina.com/exhibit/booking/
- 接受：医疗器械供应链展（中国）；类目含 OEM/ODM Full-Service Contract Manufacturing、医疗原材料（聚合物/复合材料）、包装/灭菌/洁净室。
- 推荐落地页：https://yujihealth.com/products/menstrual-cups/
- UTM：`?utm_source=medtechchina&utm_medium=referral&utm_campaign=yuji_authority_2026`
- 所需资料：医疗分类证据（cups/discs 是否按医疗器械）+ 展位费。
- 下一步：确认杯/盘医疗分类证据范围后评估展位。
- 阻塞：付费展位 + 医疗证据范围。

---

## 优先执行批次（3–5 个真正值得执行的机会）

按"价值 × 可行性 × 成本"筛选，**首批准执行 5 个**，其中 2 个受证据闸门约束：

| 优先级 | 候选 | 为什么值得 | 当前可执行？ |
| --- | --- | --- | --- |
| P1 | Femtech Insider | 免费、真实 femtech 语境、品牌提及 | 是（需绕过浏览器墙人工核实提交流程） |
| P2 | Global Sources | 真实买家意图、中国厂商可接受、可执行 | 是（需指派 owner + 检查既有账号） |
| P3 | INDA 买方指南 | pads/liners 强相关、成本较低、行业实体信号 | 是（需修复失效链接 + 确认会员资格） |
| P4 | Qmed+ | 最高分、编辑审核、医疗买家精准 | 否 — evidence-blocked，待证书审批 |
| P5 | Suplivia | 中国厂商可接受、AI 采购发现、强相关 | 否 — evidence-blocked，待证书审批 |

**延后（cost-review / owner-required，需预算或专人决策）**：PLMA、MedicalExpo、EDANA、Hygienix、Medtec China、Alibaba、Made-in-China、Europages（倾向 ineligible）。

> 不把"提交了多少个网站"当作成功。成功 = 已发布并存活的相关行业档案 + 被发现的品牌提及 + 引荐访问 + 合格 B2B RFQ + 样品请求 + 报价。
