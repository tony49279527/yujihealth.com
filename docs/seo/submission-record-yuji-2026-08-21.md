# YUJI 外链提交记录（Submission Record）

- **日期**：2026-08-21
- **用途**：逐站记录执行动作、结果、公开页面、链接属性；CLI 重启后从此继续，不重复注册/提交/覆盖。
- **状态词汇（Phase 6）**：research-ready / eligible / evidence-blocked / requires-account / awaiting-user-action / awaiting-email-verification / submitted / awaiting-approval / published / submission-outcome-unknown / submission-failed / ineligible / rejected
- **重要**：`awaiting-approval` ≠ `published`；没有公开 URL 不得声称已获外链；`submission-outcome-unknown` 不得直接重试。
- **背link-prospects.csv 状态对齐**：CSV 受 `score_prospects.py` 限制，仅用其 11 个合法值（research-ready / evidence-blocked / eligibility-check / requires-account / owner-required / cost-review / approved / submitted / listed / rejected / paused）。本表的 `CSV状态` 列与之对齐。

---

## 记录总表

| # | 候选 | CSV状态 | 跟踪状态 | 公开URL | 已做 | 待办 | 证据/备注 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Qmed+ | evidence-blocked | evidence-blocked | 无 | 官方页核验、门槛确认 | 证书审批后建档 | E-PENDING-001 unreviewed |
| 2 | Femtech Insider | submitted | awaiting-approval | 无（编辑审核中，未公开） | Airtable 文本字段预填 + 真人手动选下拉并提交 | 等待编辑审核结果；获公开 URL 前不标 published | 用户 2026-08-22 确认提交 |
| 3 | Suplivia | evidence-blocked | evidence-blocked | 无 | 官方页核验、确认中国厂商可接受 | 证书审批后提交 | E-PENDING-001/002/003/006 |
| 4 | Global Sources | requires-account | requires-account | 无 | 官方页核验、确认中国厂商可接受 | 指派 owner、检查既有账号、注册 | 需账号+验证 |
| 5 | MedicalExpo | cost-review | cost-review | 无 | 官方页核验 | 询展商方案评估 ROI | 付费展商 |
| 6 | Europages | eligibility-check | ineligible（待确认） | 无 | 官方页核验、确认 VAT 必填 | 向平台确认中国主体资格 | VAT blocker |
| 7 | INDA | research-ready | awaiting-user-action | 无 | 官方页核验、旧链接 404 | 修复链接+确认会员资格 | 链接失效 |
| 8 | EDANA | cost-review | cost-review | 无 | 官方页核验、确认 absorbent hygiene converter 资格 | 询会员费评估 | 付费会员 |
| 9 | PLMA | cost-review | cost-review | 无 | 官方页核验 | 询 2027 展会/会员包 | 付费 |
| 10 | Alibaba | owner-required | owner-required | 无 | 官方页核验 | 指派专人+响应 SLA 后启动 | 高竞争/成本 |
| 11 | Made-in-China | owner-required | owner-required | 无 | 官方页核验 | 指派专人+响应 SLA 后启动 | 高竞争/成本 |
| 12 | Hygienix | cost-review | cost-review | 无 | 官方页核验、确认展位费 | 评估 tabletop ROI | $2,525–$3,025 |
| 13 | Medtec China | cost-review | cost-review | 无 | 官方页核验、确认类目 | 确认医疗分类证据后评估 | 付费展位 |

---

## 当前结论（2026-08-21）

- **已核验事实**：13 个候选全部重新打开官方页面核验；品牌精确检索（YUJI / Xi'an Yuji Biotechnology / yujihealth.com / YUJI menstrual cup / YUJI feminine care OEM）**零**第三方索引结果；无 GSC Links 导出/授权 backlink 数据，故**未声称完整 backlink inventory**。
- **已发布公开 URL**：**无**（Femtech Insider 已于 2026-08-22 提交，状态 `awaiting-approval`，编辑审核中，尚未公开；其余 12 候选未提交）。
- **证据阻塞**：Qmed+、Suplivia 因证书待审批（E-PENDING-* unreviewed）保持 evidence-blocked。
- **倾向排除**：Europages（VAT 必填，中国主体资格存疑，待直接确认后标 rejected）。
- **待用户动作**：Global Sources（注册账号）、INDA（修复链接）为当前可执行项，需用户/销售在各自平台完成；Femtech Insider 已交编辑审核，等待结果回执。

---

## 追加/更新规则

- 每完成一个站点，立即在此表补"公开URL + 跟踪状态 + 日期"。
- 若某站等待审核，继续处理其他合格站点，不阻塞。
- 同一候选不重复注册、不重复提交、不覆盖既有结果。
- CLI 重启后先读本文件与 `backlink-prospects.csv`，从上次状态继续。

---

## 更新（2026-08-22）

- **Femtech Insider 提交完成**：用户按既定流程（文本字段由脚本原子预填并按标签核实 → 真人手动选 Category=`Feminine Care Products` 与 Company Stage=`Bootstrapped` → 点 Submit）于本日确认提交。
- **状态**：`submitted` / `awaiting-approval`。**严禁标 `published`**——Airtable 公司库为编辑审核制，尚无公开 URL，且品牌精确检索当前零第三方索引，未获公开页面前不得声称已获外链。
- **下一步**：等待 Femtech Insider 编辑审核结果回执；若获公开公司页 URL 再更新本表并标 `listed`/`published`。同时推进 P2（Global Sources，需账号）与 P3（INDA，修复 404 链接）。
- **未提交动作**：本批次仍不做 git commit / push / 部署；仅更新追踪文件。
