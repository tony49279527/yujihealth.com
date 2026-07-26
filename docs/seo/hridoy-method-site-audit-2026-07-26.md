# YUJI × Hridoy Reh SEO 方法论站点评估报告（2026-07-26）

## 一句话结论

按「真实搜索数据 → 高意图资产 → 分发 → 复测」闭环看，yujihealth.com **技术与页面基础已到位，但有机需求仍处冷启动**：近 28 天 page 维度约 93 次曝光、0 点击；增长瓶颈不在 tags/速度，而在 **可验证证据、站外实体引用、询盘闭环测量，以及用极少量 GSC 信号做精准刷新而非扩量**。

---

## 1. 证据范围与限制

| 项 | 值 |
| --- | --- |
| 站点 | `https://yujihealth.com` |
| 评估日期 | 2026-07-26（Asia/Shanghai） |
| 方法论 | Hridoy Reh SEO 累计方法论 v0.9（用户提供） |
| GSC 窗口 | 2026-06-25 … 2026-07-22（28 天）；2026-07-16 … 2026-07-22（7 天） |
| 收录快照 | `gsc-inspect-all-2026-07-24T10-37-37-333Z.json`（完整 19/19） |
| 速度 | `pagespeed-2026-07-25T11-05-48-493Z.json`（19 URL × 移动/桌面） |
| RFQ 静态审计 | 19 页，0 errors / 0 warnings |
| 未使用数据 | 无站内 analytics 漏斗；无 GSC Links 导出；无 Ahrefs/SEMrush；无 CrUX 有效 field CWV |

不同 GSC 维度因匿名化与聚合阈值，**不能把 query / page / country 曝光数直接相加当作总量**。

本地工作区有未提交改动（`applications/`、`products/`、`quality/evidence/`、`sitemap.xml` 等）；本报告以 **已落盘 GSC/巡检 + 当前仓库 HTML** 为准，不把未部署改动写成线上结果。

---

## 2. 核心闭环对照

| 闭环步骤 | 方法论要求 | YUJI 现状 | 判定 |
| --- | --- | --- | --- |
| 1. 发现需求 | GSC 页面/查询/曝光/CTR/趋势 | 有自动化导出与 scorer；样本极小 | 系统强 / 信号弱 |
| 2. 选择机会 | 已有曝光、缺口、低 CTR、决策词 | 首页/Cups/Pads/About 有曝光；非品牌 query 仅 2 条 | 可执行但需极克制 |
| 3. 改造资产 | 补章节/FAQ/证据/比较页/工具 | 已有产品+MOQ+对比+RFQ cluster；缺公开证据包 | 内容框架强 / 证据弱 |
| 4. 扩大分发 | 编辑型引用、匹配渠道 | 12 个候选 prospect；几乎无已验证第三方提及 | 弱 / 受阻于证据与人工外联 |
| 5. 测量迭代 | 基线 + 30/60/90 | GSC 窗口齐全；缺 visit→RFQ→win | 半套 |

**不成立的叙事**：把「曝光上升」写成 SEO 成功；在 0 点击下做大规模 title 批量改写；用作者自报流量数字当因果证明。

---

## 3. 当前搜索表现（可审计）

### 3.1 28 天 page 维度（11 行，93 impressions，0 clicks）

| 页面 | Impr. | Pos. | Scorer 类别 |
| --- | ---: | ---: | --- |
| `/` | 43 | 5.7 | ctr-test（样本仍偏小） |
| `/about/` | 14 | 14.0 | page-one-push |
| `/products/menstrual-cups/` | 14 | 22.8 | content-gap-review |
| `/products/pads-liners/` | 10 | 6.3 | ctr-test |
| `/contact/` | 3 | 4.3 | observe |
| `/oem-odm/` | 2 | 6.0 | observe |
| `/resources/menstrual-cup-oem-sourcing-guide/` | 2 | 5.0 | observe |
| `/resources/private-label-sanitary-pads-china/` | 2 | 34.5 | content-gap-review |
| `/quality/` | 1 | 2.0 | observe |
| `/resources/feminine-care-oem-rfq-checklist/` | 1 | 4.0 | observe |
| `/resources/menstrual-disc-oem-moq/` | 1 | 10.0 | observe |

### 3.2 28 天 query 维度（5 行，12 impressions，0 clicks）

| 查询 | Impr. | Pos. | 落地页（query×page） | 意图判断 |
| --- | ---: | ---: | --- | --- |
| `yuji cup` | 5 | 4.6 | Cups 产品页 | 品牌导航，保留观察 |
| `yuji china` | 3 | 6.3 | 首页 | 品牌/实体，不堆词 |
| `menstrual cup protective covers manufacturing plant cost` | 2 | 80.5 | Cups 产品页 | 配件+成本长尾；页内有 pouch/kit，**无 plant cost 口径** |
| `white label smart pad china` | 1 | 64.0 | Pads private-label 指南 | 「smart pad」意图未覆盖；禁止编造 IoT 能力 |
| `yuji corp` | 1 | 20.0 | About | 品牌噪声 |

### 3.3 国家 / 设备（信号，非扩站依据）

- 国家曝光前列：USA、KOR、SAU、MYS、VNM 等；**全部 0 clicks**，不能据此开多语言站。
- 设备：Desktop 43 / Mobile 32 / Tablet 1（country/device 维度合计 76 impressions）。

### 3.4 相对 7/23 审计的变化

- Page 28 天曝光：约 82 → **93**（缓慢爬升，仍 0 点击）。
- 新增可披露非品牌长尾：`menstrual cup protective covers manufacturing plant cost`。
- 收录：`/applications/` 由「Discovered – not indexed」变为 **URL is unknown to Google**（需优先用内链+sitemap/部署一致性排查，而不是新建更多页）。

---

## 4. 索引与技术基线

| 状态 | URL |
| --- | --- |
| Submitted and indexed | `/`、Cups、Discs、Pads、OEM、Quality、About、6 篇 Resources、Contact、Privacy |
| Discovered – not indexed | `/products/`、`/quality/evidence/`、`/resources/` |
| URL unknown to Google | `/applications/` |

其它：

- Sitemap 19 URL；robots 开放；自引用 canonical；实验室 Performance 多为 0.98–1.0。
- **无可用 CrUX field LCP/INP/CLS** → 符合方法论「现场数据优先」：当前只能维持实验室健康，不能宣称真实用户 CWV 达标。
- RFQ 路径静态审计通过；**仍无 analytics / CRM 阶段数据**，不能算转化率。

---

## 5. 方法论 1–19 逐项适用性

状态：`已对齐` / `可小做` / `暂缓` / `禁止照搬`。

### 方法 1：GSC 查询缺口优化 — **可小做**

- 唯一值得人工审的非品牌缺口：Cups 页对「protective covers / manufacturing plant cost」覆盖不完整。
- 允许动作：在 Cups 或 Pads-kits 相关段落 **如实**补充 pouch/storage cover 与 kit 成本驱动因素（模具、颜色、包装语言、附件 SKU），**不编造工厂成本数字**。
- `white label smart pad`：若无智能垫产品线，**观察或拒答**，勿为排名硬写。
- 首页/Pads 的 ctr-test：曝光未到稳健阈值，**暂不做 title 批量实验**；若做，只测一条、记变更日、30/60/90 复看。

### 方法 2：内容刷新优先于盲目扩量 — **已对齐（执行原则）**

- 站点已有 19 个核心 URL；**禁止**按国家/颜色/单次 query 批量薄页。
- 下一优先级是 **刷新已收录高曝光页 + 推动 4 个 hub 收录**，不是再开 blog 流水线。
- 尚无「点击下滑页」可做周期对比（一直 0 点击）；刷新触发条件改为：**高曝光低点击、证据过期、查询未覆盖、hub 未收录**。

### 方法 3：高购买意图比较页 — **已对齐**

- 已有 `/resources/menstrual-cup-vs-disc-oem/`（适用对象、MOQ、渠道、RFQ 字段、FAQ）。
- 缺口：缺一手测试/客户证据；竞品头对头页继续保持 **noindex 模板策略**，无法律与同口径证据不发布。
- 下一步是加强 **可核验差异**（文件包、sample 流程、QC 关卡），不是再开「YUJI vs X」站群。

### 方法 4：记者关键词与统计资产 — **暂缓（证据门槛）**

- 女性护理 OEM 市场规模页有外链潜力，但 **无批准的可追溯一手数据** 时不做「行业统计权威页」。
- 可做替代：Evidence 页发布 **经批准的脱敏证书/QC/流程样本**，让记者/采购可引用「文件类型与审查路径」，而非虚构 CAGR。

### 方法 5：图片作为搜索资产 — **已对齐（基础）**

- 主图普遍有 alt、`srcset`、尺寸；实验室速度优秀。
- 多页仍有约 2 个空 alt（多为装饰/图标类）— 可清理，但不是增长主杠杆。
- 禁止：为塞词重做全部图片、机械 100KB 上限叙事。

### 方法 6：编辑型外链 — **可小做（候选库已有）**

优先序（与方法论一致）：

1. 可引用证据资产（Evidence 脱敏包）。
2. 采购决策页（已有 MOQ/RFQ/对比）被资源页/目录收录。
3. 高相关目录/协会（Femtech Insider、INDA、Qmed+ 等，见 prospect 表）。
4. 个性化外联，而非批量 127 源提交。

当前 scorer 前列多为 `evidence-blocked` / `research-ready` / `cost-review` — **证据与负责人到位前不要批量注册**。

### 方法 7：社交 SERP 实验 — **暂缓**

- 目标采购词 SERP 是否稳定出现 X/LinkedIn/Medium **本轮未逐词截图验证**。
- LinkedIn 适合 B2B 品牌与证据分发；**不要**在未确认社交结果占位时，把平台帖当主 SEO 资产。
- Medium 转载若做，必须 canonical 回原站。

### 方法 8：AI 作放大器 — **已对齐**

- 已用脚本做 GSC 聚类/打分；AI/脚本不替代意图判断与事实核验。
- 禁止：「用 Claude 替代 SEO 团队」式扩量改写。

### 方法 9–11：渠道匹配 / 发布前分发 / 免费工具扩展 — **低适用或暂缓**

- Product Hunt / Chrome 扩展 / 通用 SaaS 启动板与 OEM 工厂获客匹配度低。
- 可选 1–2 个高匹配渠道：**LinkedIn（采购/品牌）+ 1 个行业目录或展会线索**；各自定义内容格式与合格询盘指标。
- 不为 DR 做低价值扩展或嵌入式强制 dofollow。

### 方法 12：寄生 SEO（Google Sites 等）— **禁止照搬**

### 方法 13：国际 SEO — **暂缓**

- 单语英文正确；hreflang 无需求。
- 国家曝光分散且 0 点击；扩语言前先验证询盘地理、法规与销售响应能力。

### 方法 14：先修产品与留存再放大 SEO — **部分对齐（B2B 改写）**

- 对 OEM：对应为 **RFQ 完整度、样本/报价响应 SLA、文件包可交付性**，不是 SaaS 留存率。
- RFQ 表单路径健康；缺「送达→合格→样品→成交」闭环与公开证据时，扩大内容获客 ROI 不确定。
- Fiverr/人工服务找 SaaS 灵感：**不适用**本站主路径。

### 方法 15：外链清单只做候选库 — **已对齐**

- `docs/seo/backlink-prospects.csv` + 打分脚本正是正确用法。
- 禁止把 DR 或「127 源」当批量提交指令。

### 方法 16：多搜索引擎覆盖 — **暂缓**

- 无 Yandex/Brave 受众与转化证据；Bing 可在 GSC 已验证前提下 **低成本导入 Webmaster + Sitemap**，但须单独记收录/点击，不把「已提交」写成成功。

### 方法 17：排名截图核验 — **已对齐（原则）**

- 当前几乎无「排第一」可吹嘘素材；未来任何截图必须核验 **结果 URL 是否为本站**、地区/设备、GSC 时间序列。

### 方法 18：社区先贡献 — **可小做（高匹配时）**

- Indie Hackers 等对 OEM 采购匹配度一般；优先行业社群/LinkedIn 采购对话。
- 禁止以 dofollow/DR 为解锁目标。

### 方法 19：性能以真实用户为准 — **实验室强 / 现场未知**

- 继续保持不牺牲采购信息的性能；field 数据出现后再按 LCP/INP/CLS 排障。
- 不为满分删 RFQ 必要字段或证据图。

---

## 6. 内容资产成熟度（对照「改造资产」）

| 集群 | 代表 URL | 约字数 | 判定 |
| --- | --- | ---: | --- |
| 产品决策 | Cups / Discs / Pads | 550–670 | 可采购；缺公开证据与配件成本口径 |
| 渠道 | Applications | ~410 | **索引回退为 unknown**，优先修复发现路径 |
| 流程 | OEM/ODM、Quality、Evidence | 410–430 | Evidence 仍 request-only，商业信任瓶颈 |
| 决策内容 | Cup vs Disc、MOQ×2、RFQ、Pads PL、Sourcing | 380–680 | 比较/BOFU 已具备；勿重复建同意图页 |
| 转化 | Contact | ~335 | 路径通；无漏斗测量 |

---

## 7. 执行优先级（按方法论「直接采用 / 小规模测试 / 不执行」）

### 7.1 直接采用（本月只做这些）

1. **GSC 缺口 + 刷新合并 SOP（最多 3 页）**
   - Cups：补 kit/protective cover（pouch 等）与影响报价的真实变量；不写虚假 plant cost。
   - Pads private-label 指南：仅在确认无「smart」产品时，用 FAQ **澄清范围**（conventional white-label pads），避免错误意图。
   - Home 或 Pads：仅当 28 天曝光继续 ≥30 且仍 0 点击时，考虑 **单次** title/description 试验并记录基线。
2. **收录修复**
   - 强化已收录产品/指南 → `/applications/`、`/products/`、`/resources/`、`/quality/evidence/` 的描述性正文内链。
   - 部署后人工 URL Inspection；`/applications/` unknown 需确认线上可抓取、sitemap、内链不是只靠未部署本地改动。
3. **证据资产（方法 4/6 的前提）**
   - 批准后在 Evidence 发布脱敏证书/QC/流程样本；这是外链与 CTR 的共同前置条件。
4. **30/60/90 复盘制度**
   - 每次改动记：日期、URL、增删要点、基线 impressions/clicks/pos、复测日。
5. **转化路径门槛（方法 14 B2B 版）**
   - 定义 Qualified RFQ 字段与销售响应 SLA；在缺 analytics 批准前，至少用邮件/CRM 手工记「来源页 + 是否合格」。

### 7.2 小规模测试

1. Femtech Insider / INDA 等 **research-ready** 目录：准备 80 字资料 + line-sheet，人工提交 1–2 个。
2. LinkedIn：用真实采购问题/证据摘要做 1 条内容实验（先确认目标词 SERP 是否含社交结果再谈「社交 SEO」）。
3. AI 仅用于 query 聚类与草稿；发布前人工剔除品牌噪声与意图不匹配。
4. Bing Webmaster 从 GSC 导入（低成本）；单独监控，不扩运维叙事。

### 7.3 明确不执行

1. Wikipedia 死链替换、强制嵌入 dofollow、论坛伪装提问。
2. Google Sites / Docs 寄生页、按 DR 批量提交目录。
3. 把所有高曝光词塞进 title/ALT。
4. 无证据的「smart pad / 行业统计权威页 / 竞品点名对比站」。
5. 多语言站、Yandex/Brave 扩张、Chrome 扩展换外链。
6. 在 0 点击阶段连续重写同一页。

---

## 8. 本月建议批次（≤5 项）

| # | 动作 | 目标页 | 主要指标 | 复测 |
| ---: | --- | --- | --- | --- |
| 1 | 收录修复：内链 + 部署一致性 + Inspection | Applications / Products / Resources / Evidence hubs | coverageState 变化 | 14–30 天 |
| 2 | Cups 查询缺口刷新（covers/kit 变量） | `/products/menstrual-cups/` | 该长尾 pos；页 impressions | 30/60/90 |
| 3 | Pads 指南意图边界（非 smart） | `/resources/private-label-sanitary-pads-china/` | 错误意图是否消失；合格询盘 | 30/60 |
| 4 | Evidence 脱敏样本上线（依赖批准） | `/quality/evidence/` | 索引、引荐、询盘提及文件 | 30/60/90 |
| 5 | 1 个编辑型/目录外联 | Femtech Insider 或 INDA | 资料页收录、引荐、RFQ | 30/60 |

---

## 9. 统一实验模板（本站填空示例）

- **假设**：在 Cups 页补充 kit/protective cover 与报价变量后，相关长尾平均位置从 ~80 进入前 50，且不损害品牌词 `yuji cup` 表现。
- **样本**：测试页 `/products/menstrual-cups/`；对照观察 `/products/menstrual-discs/`；起始日 = 部署日。
- **基线（2026-06-25…07-22）**：Cups 14 impr / 0 clicks / pos 22.8；长尾 2 impr / pos 80.5。
- **改动**：精确记录新增段落/FAQ；不改 URL。
- **复测**：30/60/90 天同一维度导出。
- **决策**：位置与曝光改善且无意图污染 → 保持；无变化 → 观察；出现错误医疗/成本声明风险 → 回滚。

---

## 10. 分数卡（方法论契合度，非 Google 排名分）

| 维度 | /5 | 说明 |
| --- | ---: | --- |
| 用 GSC 发现与选择机会 | 4 | 工具链成熟；样本限制行动空间 |
| 刷新优先于扩量 | 4 | 集群完整；需抵制再扩页冲动 |
| 高意图决策页 | 4 | Cup vs Disc / MOQ / RFQ 已在 |
| 可引用证据与编辑型分发 | 2 | 候选有、资产与第三方提及不足 |
| 测量与 30/60/90 | 2 | GSC 有；转化与外链测量缺 |
| 合规边界（反垃圾/声明） | 5 | 与方法论「不执行」清单高度一致 |
| **综合** | **3.5/5** | 方法对、阶段早、证据与分发是闸门 |

---

## 11. 需要你拍板的外部事项

1. 是否批准 Evidence 脱敏文件上线（类型、红线、是否可被索引）。
2. 是否批准隐私合规的 analytics（否则 visit→RFQ 只能手工记）。
3. 目录/协会外联的负责人与预算（PLMA/展会等 cost-review 项）。
4. `/applications/` 等未提交本地改动是否部署到生产，以便收录修复可被 Google 看到。
5. GSC URL Inspection 的 OAuth scope：部分 inspect 跑批出现 403 insufficient scopes，需修凭证后才能稳定日更收录状态。

---

## 12. 数据文件索引

- Query 28d: `reports/gsc/gsc-query-query-2026-06-25-to-2026-07-22-2026-07-25T11-06-44-949Z-29542.json`
- Page 28d: `reports/gsc/gsc-query-page-2026-06-25-to-2026-07-22-2026-07-25T11-06-39-499Z-29320.json`
- Query×Page 28d: `reports/gsc/gsc-query-query-page-2026-06-25-to-2026-07-22-2026-07-25T11-16-29-924Z-32882.json`
- Inspect: `reports/gsc/gsc-inspect-all-2026-07-24T10-37-37-333Z.json`
- Prospects: `docs/seo/backlink-prospects.csv`
- 前序框架审计: `docs/seo/full-framework-audit-2026-07-23.md`
