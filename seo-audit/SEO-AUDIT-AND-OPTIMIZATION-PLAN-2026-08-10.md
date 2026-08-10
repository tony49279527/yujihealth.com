# YUJI（yujihealth.com）SEO 全面审计与优化计划

审计日期：2026-08-10（Asia/Shanghai）
模式：`AUDIT_ONLY`
生产基线：`main` / `b86702b`；抽样生产文件的 SHA-1 与 `git show HEAD` 完全一致
输出范围：本报告与两份带日期 CSV；未修改业务代码、页面、配置、GSC、分析后台或线上环境

```text
SITE_NAME = YUJI / Xi'an Yuji Biotechnology Co., Ltd.（西安裕吉生物科技有限公司）
LIVE_URL = https://yujihealth.com/
REPO_ROOT = /Users/liangxile/project/yujihealth.com
BUSINESS_MODEL = B2B 制造 / OEM-ODM / 出口供应链
PRIMARY_CONVERSION = 结构化 RFQ 成功送达并形成 qualified RFQ
SECONDARY_CONVERSIONS = 证据包申请、样品申请、报价申请、下载采购清单
TARGET_CUSTOMERS = 海外品牌创始人、采购、进口商、经销商、质量/合规、可持续负责人、机构采购
TARGET_MARKETS = 全球；GSC 有美国、韩国、印尼、印度、沙特、越南等早期曝光，尚无销售侧市场优先级确认
TARGET_LANGUAGES = 英文为主；中文 /zh/ 为次级目录
CORE_PRODUCTS_OR_SERVICES = 月经杯、经期盘、卫生巾、护垫、湿巾、收纳袋、清洁/消毒配件、feminine-care OEM/ODM/private-label
KNOWN_COMPETITORS = Furuize、Niceday 等当前 SERP 供应商结果；没有完整竞品域名和份额清单
GSC_ACCESS_OR_EXPORT = 可只读访问；本次已拉取 28 天、90 天、前 90 天、16 个月、URL Inspection 和 sitemap
GA4_OR_ANALYTICS_ACCESS = 无后台/导出；生产配置声明 Plausible enabled=true，但账号与实际收数未知
CRM_OR_REVENUE_DATA = 无权限 / UNKNOWN
SERVER_LOG_OR_CDN_DATA = 无权限 / UNKNOWN
CMS_AND_TECH_STACK = 静态 HTML/CSS/JS + Vercel + Serverless api/contact.js + Resend 邮件路径
KNOWN_MIGRATIONS_OR_INCIDENTS = UNKNOWN
CONSTRAINTS = AUDIT_ONLY；不部署、不提交索引、不测试外部表单、不发外联、不改现有业务文件
```

## 1. 执行摘要

### 1.1 当前成熟度与进展

YUJI 已经不是“技术 SEO 没搭好”的阶段，而是“技术底座合格、搜索开始出现，但信任与商业测量没有闭环”的早期增长阶段。

可验证进展：

- 生产站 30 个规范 URL 均可访问，HTTP、`www → apex`、尾斜杠、安全响应头、robots、sitemap、canonical 的主干行为正常。
- Google URL Inspection 当前为 **27/30 已收录**；月经杯、经期盘、卫生巾、产品中心、11 篇资源文章、5 个中文页均已进入索引。
- GSC 90 天 date 维度为 **150 impressions / 1 click**，前 90 天为 **0 / 0**；16 个月数据也只有最近 32 天出现，第一批非零曝光从 2026-07-09 开始。
- 最近 28 天 page 维度为 **220 impressions / 1 click**，前一个精确 28 天 page 维度为 **26 / 0**，即页面维度曝光约为前期的 8.46 倍。维度聚合口径不同，不能与 date 维度 140 impressions 混加。
- 第一次可验证搜索点击落在 `/products/menstrual-cups/`；但全站仍不足以证明稳定获客。
- 2026-08-10 对 Home、Menstrual Cups、Quality、Contact 的 PageSpeed 实测：移动端 Performance 99–100，SEO/Accessibility/Best Practices 均为 100；性能不是当前主要阻断。

### 1.2 最重要的 3 个阻断

1. **P0：业务测量真相未知。** 生产 `config/analytics.json` 为 `enabled=true`，同文件备注却要求确认账号和隐私后再启用；没有 Plausible/GA4、Resend 送达、CRM 或销售导出。当前只能看到 GSC 展示/点击，不能证明 `landing → CTA → contact → delivered RFQ → qualified RFQ → quote/win`。
2. **P1：公开声明与法规内容没有证据治理。** 生产仍存在 90%、80%、20%、3M+、16 项 IP、30+ 市场、ISO/cleanroom 等无公开证据或范围不清的声明；多篇指南把 FDA registration、510(k)、CE marking 写成宽泛标准。当前 FDA 数据显示 menstrual cup（HHE）为 Class II、`510(k) Exempt`（受豁免限制约束），unscented menstrual pad（HHD）为 Class I、`510(k) Exempt`；FDA 还明确 registration/listing 不等于批准。EU 官方也明确不是所有产品都应贴 CE。
3. **P1：三个关键 hub 未收录，且价值差异仍不够强。** `/applications/` 对 Google 是 unknown；`/resources/` 与 `/quality/evidence/` 为 discovered-not-indexed。它们在生产内链图已有 24–26 个来源，因此不能简单归因于“链接太少”；Applications 缺真实渠道决策，Resources 仍偏列表，Evidence 仍偏 request-only。

### 1.3 最值得做的 5 个机会

1. 先验证并补齐最小漏斗，把 Search、站内行为、邮件送达和销售资格分开测量。
2. 建立“可公开声明 register”，优先清理百分比、认证、FDA/CE、工厂和市场数字。
3. 把 `/quality/evidence/` 升级为有批准文件、版本、范围、失效日期和撤回机制的真实证据库。
4. 基于已有曝光刷新现有页：Home、Contact、Quality、RFQ Checklist、About、Cup、Cup MOQ、Disc MOQ；不急着新建关键词页。
5. 修复生产中的 3 个真实 HTML orphan 和 2 个单入链 Best/HowTo 页；证据上线后再做少量人工编辑型分发。

### 1.4 先后关系

`测量与声明治理 → 证据资产 → 三个 hub/重点页刷新 → 内链与单变量 snippet 试验 → 编辑型分发与新引擎小实验`。

本报告不承诺排名、流量、收录、富结果、AI 引用或询盘增长。

## 2. 范围、证据与限制

### 2.1 范围与复现条件

- 仓库：`/Users/liangxile/project/yujihealth.com`，`main` 与 `origin/main` 为 0 ahead / 0 behind。
- 生产基线：commit `b86702b`。Home、Cup、Applications、Resources、Evidence、Contact、中文 Contact、sitemap、analytics、JS 的线上 SHA-1 均与 `git show HEAD` 一致。
- 当前工作树不是生产：18 个路径有未提交改动，包含之前的 SEO 候选以及一个与本审计无关的 `gpt-site/build/sites-vite-plugin.ts` 删除。本报告不把本地候选视为已上线进展。
- URL：sitemap 与 `config/seo-targets.json` 均为 30 个页面；基础检查覆盖 30/30，不是抽样。
- 线上只读检查：关键 URL、robots、sitemap、404、contact API GET、主机/协议/尾斜杠；没有提交表单。
- SERP 假设：2026-08-10、英文、全球商业查询；搜索工具无法固定到一个真实用户城市，SERP 仅作为 C 级页面类型观察，不当作份额或固定排名。

### 2.2 证据清单

| 证据 | 时间/窗口 | 结论用途 | 等级 |
| --- | --- | --- | --- |
| 生产 HTML/JS/config 与 HEAD 哈希比对 | 2026-08-10 | 区分 live 与本地候选 | A |
| GSC date 28 天 | 2026-07-11..2026-08-07 | 总展示/点击趋势 | A |
| GSC page 当前/前 28 天 | 2026-07-11..08-07 vs 2026-06-13..07-10 | 页面曝光变化 | A |
| GSC date 90 天/前 90 天/16 个月 | 截至 2026-08-07 | 启动期、历史与季节性边界 | A |
| GSC page/query/country/device/searchAppearance | 最近 28/90 天 | 页面与机会分组 | A |
| GSC URL Inspection 30 URL | 2026-08-10 | 单 URL 收录、canonical、抓取 | A |
| GSC sitemap | 2026-08-10 | 提交状态与错误 | A |
| PageSpeed 4 页 × mobile/desktop | 2026-08-10 | 当前 lab 性能 | A/B |
| 生产/本地 HTML 静态审计 | 30 URL | title/H1/canonical/schema/images/links | A |
| 当日 Google、Bing、FDA、EU 官方文档 | 2026-08-10 | 政策与法规边界 | A |
| 当日商业 SERP | 4 组查询 | 结果类型与供给观察 | C |
| authority prospect 表与周报 | 截至 2026-07-27 | 外部分发准备度 | B |

### 2.3 缺失数据及其限制

- 无 Plausible/GA4/GTM 后台或导出：不能确认 page view、自引荐、UTM、事件收数、国家和 session。
- 无 Resend delivery webhook/日志、CRM、销售表：不能确认表单 HTTP 200 后是否送达，也不能计算 qualified RFQ、样品、报价和成交。
- 无 GSC Links、Ahrefs/SEMrush/Majestic：不能完成 backlink 全量盘点或竞品 authority gap。
- 无 CDN/server log：不能看到 Googlebot/Bingbot 抓取频率、异常 4xx/5xx、真实缓存和攻击。
- 无 CrUX field data 与 INP：不能声称真实用户 CWV 已通过。
- 无客户案例、买家访谈、销售问题频次、法规审查 owner：不能把个别 GSC query 直接变成新页面。
- 无批准的证书/测试/工厂/产能/市场/专利/出货量证据包：不能验证生产声明。

### 2.4 观察、推断与建议

- `观察`：直接来自代码、线上响应、GSC、PageSpeed 或官方文档。
- `推断`：例如“未收录可能与页面独特价值不足有关”，会保留其他解释并标置信度。
- `建议`：写明负责人、依赖、验收、风险、回滚。完整机器清单见 `seo-priority-backlog-2026-08-10.csv`。

## 3. 业务目标与测量基线

### 3.1 目标口径

网站目标不是“获得更多 impressions”，而是让真实海外 B2B 买家完成可跟进的采购动作。

| 阶段 | 定义 | 当前可测状态 |
| --- | --- | --- |
| `search_impression` | GSC 展示 | 可测 |
| `search_click` | GSC 点击 | 可测；90 天 1 次 |
| `organic_landing` | 分析系统记录 organic landing | UNKNOWN |
| `product_cta` | 产品/证据 CTA 点击 | 未实现或无导出 |
| `contact_arrival` | 进入 `/contact/` 或 `/zh/contact/` | 未验证 |
| `rfq_start` | 开始有效输入 | 未实现 |
| `rfq_submit_client` | 前端收到 HTTP 200 并提示成功 | 代码存在，后台未知 |
| `rfq_delivered` | 邮件服务接受/送达并可审计 | 未实现可用日志 |
| `qualified_rfq` | 销售确认市场、产品、数量、联系人、时间线基本有效 | 未落库 |
| `sample_request / quote_sent / won_project` | 商业后续 | UNKNOWN |

### 3.2 当前实现观察

- 英文 `/contact/` 有结构化表单、隐藏 `sourcePage`、`landingPage`、campaign 字段和隐私链接。
- `assets/main.js` 会在 session 保存首次 landing/UTM，并在 `/api/contact/` 返回 200 后触发 `plausible("RFQ Submit")`。
- `api/contact.js` 做基础字段校验、honeypot、HTML 转义和 Resend 调用，但没有可见 rate limit/captcha、delivery webhook、provider ID 持久化或销售资格记录。
- 生产 `/zh/contact/` 仍是 mailto-only；本地结构化中文表单是未上线候选。
- `config/analytics.json` 的 `enabled=true` 与备注“保持 false 直到确认”矛盾。此项必须先由 owner 明确，不能靠代码猜测。

### 3.3 最小月度 scorecard

必须分开报告：GSC impressions/clicks、organic landings、CTA、Contact 到达、RFQ start、client success、delivered、qualified、sample、quote、win、首响时间。按 landing page、product、country、device、brand/non-brand 和 source 分组；不同窗口和维度不混加。

## 4. 100 分 SEO 评分卡

分数只用于排优先级，不预测排名或流量。本轮总分 **65/100**，比上一份 62 分审计略有提高，主要来自当日线上可验证性、90/16 月数据、首个点击和更完整的内链/索引证据；声明与业务闭环仍压低上限。

| 模块 | 满分 | 得分 | 事实依据 | 主要扣分点 | 置信度 | 到下一档动作 |
| --- | ---: | ---: | --- | --- | --- | --- |
| 技术可访问、抓取与索引 | 20 | 18 | 30 URL、27 indexed、redirect/canonical/robots/sitemap/HTTPS 正常、lab 性能高 | 3 hub 未收录、无日志、无 field CWV、默认 404 | 高 | 差异化 3 hub；补 field/log；诚实 lastmod |
| 页面质量、意图与刷新 | 20 | 12 | 标题/canonical/H1/JSON-LD 基础健康，B2B 任务清楚 | 无来源数字、法规宽泛、Best 自评、证据不足、局部意图重叠 | 高 | claim register + 重点旧页刷新 |
| 需求研究与页面映射 | 15 | 9 | 已有 28/90/16 月、query/page/country/device、当日 SERP | 查询样本仅 7 行；无销售/工具/客服证据；非品牌需求弱 | 高/中 | 维持月度 GSC；补销售问题和固定市场 SERP |
| 信息架构与内部链接 | 10 | 9 | 主要 hub 24–26 入链、导航/面包屑稳定 | 生产有 3 个 orphan 和 2 个单入链新资源页 | 高 | 上线审核后的上下文链接批次 |
| 业务测量与数据可信度 | 10 | 3 | 表单和部分归因代码存在 | 账号未知、配置矛盾、无 delivery/qualified/CRM | 高 | 完成 P0 漏斗验证 |
| 可链接资产与编辑型分发 | 10 | 4 | line sheet、RFQ、QC 示例、13 prospects | 没有公开真实证据、完整 backlink 或独立提及 | 中 | 先证据后人工分发 |
| 转化、信任与留存 | 10 | 7 | 英文 RFQ 路径清楚、隐私说明、证据请求入口 | 声明风险、无送达/资格/响应 SLA、中文 mailto-only | 高 | 声明治理 + delivery/qualification 记录 |
| AI/PSEO/国际化治理 | 5 | 3 | 无规模化薄页；5 对 hreflang；robots 开放 | Bing/AI/中文需求未知；FAQ/HowTo schema 价值被高估风险 | 中 | 分引擎测量；母语 QA；不新建 fan-out 页 |
| **总分** | **100** | **65** |  |  |  |  |

## 5. 技术 SEO、安全、抓取与索引

### 5.1 P0 访问与安全

观察：

- `http://yujihealth.com/ → https://yujihealth.com/` 为 308；`https://www.yujihealth.com/ → apex` 为 308。
- 无尾斜杠产品 URL 308 到尾斜杠规范 URL；规范页返回 200。
- robots、sitemap 返回 200；不存在 URL 返回正确 404；`/api/contact/` 的 GET 返回 405 与 `Allow: POST, OPTIONS`。
- 生产响应包含 HSTS、`nosniff`、`DENY`、Referrer-Policy 与 Permissions-Policy。
- 未发现全站 noindex、认证墙、5xx、安全警告或异常下载。

结论：没有可验证的 P0 抓取或安全事故。P0 是测量可信度，而不是可访问性。

### 5.2 P1 抓取、索引与规范化

| 状态 | 数量 | URL |
| --- | ---: | --- |
| PASS / Submitted and indexed | 27 | 其余 27 个规范 URL |
| NEUTRAL / URL unknown to Google | 1 | `/applications/` |
| NEUTRAL / Discovered - currently not indexed | 2 | `/resources/`、`/quality/evidence/` |

被检查的已收录页面均显示 robots allowed、indexing allowed、fetch successful、Google canonical 与 user canonical 一致。`/applications/` 有 24 个生产内部来源，另外两个 hub 有 24/26 个，因此“增加更多全站链接”不是充分解法。

推断（中置信度）：Google 可能尚未把三个 hub 判断为足够独特的入口；也可能只是新站和抓取节奏。建议先增强页面任务和真实证据，30/60 天复查；不要每天提交 sitemap 或批量请求索引。

### 5.3 sitemap 与 canonical

- 生产 sitemap 是合法 XML，30 个绝对规范 URL，GSC 0 warnings / 0 errors。
- GSC sitemap 聚合显示 `submitted=30, indexed=0`，与 27 个 URL Inspection PASS 和已有 impressions 冲突；应视为聚合延迟/口径问题，不视为全站未收录。
- 生产 30 个 `lastmod` 全为 2026-08-05。Google 官方要求 `lastmod` 反映页面“最后一次实质更新”，不是统一机械日期。后续发布流程应只更新真正发生正文、结构化数据或重要链接变化的页面。
- 30 个页面自引用 canonical 无重复；redirect、canonical、sitemap 三个信号方向一致。

### 5.4 页面理解、JS 与重复

生产/本地只读基础审计：

- 30/30 页面各 1 个 H1；title 无重复；canonical 无重复；JSON-LD 可解析。
- 没有缺 alt 或缺 width/height 的图片；`/sitemap.xml` 被本地 HTML 链接检查误判为“页面目录”但实际文件存在，不是 broken link。
- 核心正文、title、canonical、导航和链接存在于服务器返回 HTML；JavaScript 主要负责导航、归因、analytics 和表单，不依赖渲染才能看到 SEO 核心内容。
- 英文资源 cluster 有可能的意图重叠：Cup 产品页、Best Manufacturers、How to Choose、Sourcing Guide、MOQ。现阶段数据不足以合并；先明确页面任务，再观察 60–90 天。
- 生产内链图有三个真正 orphan：`best-feminine-care-private-label`、`how-to-choose-menstrual-cup-oem`、`how-to-start-private-label-pad-brand`；两个 Best 页只有 1 个来源。它们仍可由 sitemap 被发现，但用户路径弱。

### 5.5 结构化数据

当前页面包含 Organization、WebSite、WebPage、Product、Article、BreadcrumbList、CollectionPage、ItemList、FAQPage 和 HowTo 等；25 页有 FAQPage，2 页有 HowTo。

Google 已停止展示 HowTo rich results，并通常只给知名权威政府/健康网站展示 FAQ rich results。保留准确 schema 不会直接造成问题，但不应把它作为增长结果，也不应为了 schema 覆盖率维护 25 套容易过时的 FAQ。更重要的是：所有 schema 声明必须与可见正文和批准证据一致。

### 5.6 P3 性能、图片与 404

| 页面 | Mobile Perf | Mobile LCP | Desktop Perf | CLS | Field INP/CWV |
| --- | ---: | ---: | ---: | ---: | --- |
| Home | 100 | 1.2s | 100 | 0 | 无 |
| Menstrual Cups | 100 | 1.2s | 100 | 0 | 无 |
| Quality | 99 | 2.3s | 100 | 0 | 无 |
| Contact | 100 | 0.8s | 100 | 0 | 无 |

结论：不要把性能列为本轮 P0/P1；保持预算并等待 CrUX/RUM。默认 404 状态正确但只有 Vercel plain text，P3 可加轻量品牌恢复页，必须继续返回 404 而非 soft 404。

## 6. GSC/分析发现

### 6.1 最近 28 天 vs 前 28 天

| 维度 | 当前窗口 | 当前 | 前一窗口 | 前期 | 解读 |
| --- | --- | ---: | --- | ---: | --- |
| date | 2026-07-11..08-07 | 140 imp / 1 click | 未拉取同维度精确前期 | UNKNOWN | 用于当前总量 |
| page | 2026-07-11..08-07 | 220 imp / 1 click | 2026-06-13..07-10 | 26 imp / 0 click | page 维度约 8.46x，仍为极小基数 |

不同 GSC 维度会受匿名化和聚合阈值影响，page 220 与 date 140 不得相加或互相替代。

### 6.2 最近 90 天 vs 前 90 天、16 个月

- 最近 90 天 date：150 impressions、1 click，只有 32 个日期行；前 90 天为 0 行、0 impressions、0 clicks。
- 最近 90 天 page：246 impressions、1 click、20 个页面；与 date 维度不同。
- 最近 16 个月 date 与最近 90 天完全相同：150 impressions、1 click；没有可分析季节性。
- 第一批非零曝光是 2026-07-09；因此“同比、季度趋势、季节性”均不能下结论。

### 6.3 页面机会

| 页面 | 28d Impressions | Clicks | Position | Rubric | 决策 |
| --- | ---: | ---: | ---: | --- | --- |
| Home | 83 | 0 | 10.67 | page-one-push | 先证据/首屏，再测试 snippet |
| Contact | 12 | 0 | 6.33 | ctr-test | 先修测量与提交后预期 |
| Quality | 12 | 0 | 6.08 | ctr-test | 先修证据/声明 |
| RFQ Checklist | 8 | 0 | 4.63 | ctr-test | 做可测 worksheet/download |
| About | 22 | 0 | 10.86 | page-one-push | 先清理公司数字 |
| Disc MOQ | 7 | 0 | 7.71 | ctr-test | 补 buyer completeness，低量观察 |
| Cup MOQ | 6 | 0 | 7.00 | ctr-test | 标注示例数据，接 RFQ |
| Menstrual Cups | 26 | 1 | 19.96 | page-one-push | 首个点击页，优先刷新证据 |
| Menstrual Discs | 9 | 0 | 18.00 | page-one-push | 更新，不新建重复页 |
| Pads/Liners | 14 | 0 | 22.43 | content-gap-review | 补材料/规格/证据 |

Rubric 只是优先级启发式：position 1–10 且 impressions ≥5、CTR <2% 才标 `ctr-test`；不等于足够统计显著，也不代表 metadata 会提高排名。

### 6.4 查询、品牌/非品牌、国家、设备

90 天 query 只有 7 行、约 16 个可见 impressions，匿名查询占比很高：

- 品牌：`yuji cup` 7、`yuji china` 3、`yuji corp` 1。
- 非品牌：protective cover manufacturing cost 2；`white label smart pad china` 1；`chinese sanitary pads brands` 1；`joii period care` 1。
- 唯一 click 对应 query 被匿名化，不能把它归因给 `yuji cup`。

最近 28 天 country：USA 46、Korea 11、Indonesia 10、India 7、Saudi Arabia 7、Vietnam 6；device：Desktop 82/1 click、Mobile 55/0、Tablet 3/0。国家只代表早期搜索曝光，不代表销售市场优先级。

`searchAppearance` 返回 0 行；没有证据表明 FAQ/Product 等富结果已出现。

### 6.5 点击下降、query cannibalization 与转化

- 没有足够历史点击，因此无法识别“持续点击下降”。
- query 维度太稀疏，无法证明同一查询多个 URL 的实际 cannibalization；页面意图重叠只能作为内容审查假设。
- 没有 organic session、CTA、RFQ、qualified lead 数据，因此“有点击不转化”和“低流量高转化”均 UNKNOWN。

## 7. 需求、SERP、意图与内容差距

### 7.1 当前 SERP 观察

2026-08-10 对 `menstrual cup OEM manufacturer China`、`sanitary pad OEM manufacturer China`、`feminine care private label manufacturer`、`how to choose menstrual cup OEM manufacturer` 的结果观察：

- 主体是供应商产品/服务页，常见强项是明确 MOQ、规格、私标流程、证书/文件、CTA。
- How-to 查询会出现采购评估指南，但很多结果同样使用宽泛的 FDA/CE/ISO 说法。
- 观察到 Furuize、Niceday、Viansh、Nafei 等供应商结果；返回的领先结果中未看到 YUJI。此观察不能转化为固定排名或份额结论。
- YUJI 的差异化不应是复制更多“认证/出口/百分比”，而应是公开可核验范围、买家决策表、声明边界和版本化证据。

### 7.2 查询/任务/页面映射

| 任务 | 当前最佳 URL | 供给缺口 | 动作 |
| --- | --- | --- | --- |
| 判断 YUJI 是否具备 cup OEM 能力 | `/products/menstrual-cups/` | 材料、测试、文档范围、90% claim | UPDATE |
| 了解 cup MOQ 变量 | `/resources/menstrual-cup-oem-moq/` | 示例/事实标签、RFQ worksheet | UPDATE |
| 快速筛 cup supplier | `/resources/menstrual-cup-oem-sourcing-guide/` | 与详细 HowTo 差异、官方来源 | UPDATE |
| 完整 due diligence | `/resources/how-to-choose-menstrual-cup-oem/` | 法规/cleanroom准确性、证据例 | UPDATE |
| 比较 cup vs disc | `/resources/menstrual-cup-vs-disc-oem/` | 已有任务清楚，补证据链接 | KEEP |
| 规划 pad OEM | `/products/pads-liners/` | 材料层、测试、包装、20% claim | UPDATE |
| 启动 pad brand | `/resources/how-to-start-private-label-pad-brand/` | EU/FDA 表述错误、worksheet | UPDATE |
| 准备 RFQ | `/resources/feminine-care-oem-rfq-checklist/` | 可填写/可测/版本 owner | UPDATE |
| 验证质量证据 | `/quality/evidence/` | request-only，缺真实公开文件 | UPDATE |
| 按渠道选择方案 | `/applications/` | 缺 DTC/retail/distributor/institutional 决策差异 | UPDATE |

### 7.3 内容差距与新页门槛

优先补到现有页的差距：

1. 杯/盘/卫生巾按产品类别拆开的市场文件决策表，含“适用条件、owner、官方源、复核日期”。
2. Pads/Liners 的材料层、吸收/尺寸、包装、测试和 claim 边界矩阵。
3. Cup/Disc accessories、pouch、cleaning/sterilization kit 的 specification brief。当前只有 2 次 protective-cover query impression，先补到 Cup/Product hub，不单独建页。
4. Applications 的机构采购/经销/DTC/零售输入差异。
5. Evidence 页的公开文件状态和版本。

当前 **不建议无条件 CREATE 新 URL**。任何新页必须同时满足：独立意图、B2B 决策价值、YUJI 有真实增量证据、已有内链入口、明确 conversion destination、不是单次 impression 或有独立买家证据。否则默认 UPDATE 现有页。

### 7.4 可能的意图重叠

- Cup cluster：Product page（能力与转化）/ Best（透明比较框架）/ Sourcing Guide（6 项快速筛）/ How-to-Choose（完整流程）/ MOQ（订单变量）。按此角色差异化后再观察；本轮不合并、不重定向。
- Pad cluster：Product page（能力）/ Private-label Pads（中国采购）/ Best Pad OEM（比较方法）/ How-to-Start（品牌启动流程）。法规内容需统一后再判断重复。
- Best 类页面必须披露 YUJI 的利益关系、方法、来源和限制；若 90 天后仍无需求/引用/路径价值，再提交 `MERGE_REDIRECT` 评估，不能直接删。

## 8. 旧页刷新和 CTR 计划

### 8.1 刷新顺序

| 批次 | URL | 主要变更 | 不改 | 验收窗口 |
| --- | --- | --- | --- | --- |
| A | Home、About、Quality | 清理 claim；补可验证证据与 entity 口径 | 不改 URL/canonical | 30/60 天 |
| A | Contact、RFQ Checklist | 明确提交后结果；补事件与版本 | 未验证前不写回复保证 | 30/60 天 |
| A | Cup Product | 去 90%；补材料/文件/specification path | 不建第二个 cup product URL | 30/60 天 |
| B | Cup MOQ、Disc MOQ | 示例 vs 事实、输入变量、RFQ 路径 | 不凭 6–7 impressions 大改模板 | 60 天 |
| B | Pads Product、Pad guides | 材料矩阵、法规校正、evidence | 不复制竞品证书词 | 60/90 天 |
| B | 3 hubs | 唯一任务、公开证据、guided taxonomy | 不批量请求索引 | 30/60 天 |

### 8.2 snippet 假设

候选 title 已逐 URL 写入 page-action CSV。规则：

- 声明治理和 measurement 未完成前，不正式开始 CTR 实验。
- 一次只改 title、description 或首屏之一；保留 before/after 与发布日期。
- 低 B2B 流量下至少观察 28 天，优先看 clicks、Contact arrival、qualified RFQ，不只看 CTR。
- 如果 impressions 结构或 query intent 明显变化，实验不可直接归因。
- Meta description 是点击沟通，不写成直接排名因素。

## 9. 信息架构与内部链接计划

### 9.1 生产图发现

- 重要 hub：Applications 24 个来源、Resources 24、Quality Evidence 26；未收录不能归因于“孤儿”。
- 真 orphan：Best Feminine Care Private Label、How to Choose Menstrual Cup OEM、How to Start Private Label Pad Brand。
- 单来源：Best Menstrual Cup Manufacturers、Best Sanitary Pad OEM。
- 本地候选改动已把这些提升到 2–3 个来源，但尚未上线，必须走独立发布审核。

### 9.2 建议映射

| 来源 URL | 目标 URL | 放置语境 | 建议锚文本 | 用户价值 |
| --- | --- | --- | --- | --- |
| `/products/menstrual-cups/` | `/resources/how-to-choose-menstrual-cup-oem/` | 文件与 supplier 评估段后 | `menstrual cup OEM due-diligence workflow` | 从规格进入工厂审核 |
| `/products/pads-liners/` | `/resources/how-to-start-private-label-pad-brand/` | 包装/市场规划段后 | `private-label pad launch checklist` | 从产品进入启动步骤 |
| `/products/` | `/resources/best-feminine-care-private-label/` | 跨品类选择段后 | `compare cross-category private-label suppliers` | 处理多产品项目 |
| `/resources/` | 5 个 Best/HowTo | 按任务分组的可见卡片 | 任务型自然锚文本 | 修复生产 orphan/单入链 |
| `/about/` | `/quality/evidence/` | 公司数字和工厂声明后 | `review available company and quality evidence` | 让 entity claim 可核验 |
| `/quality/` | `/quality/evidence/` | 每个 document category 后 | `see evidence status and scope` | 区分已公开/可申请 |
| `/applications/` | 产品页与 RFQ | 每个渠道 matrix 行 | `specify [channel] requirements` | 从用例进入产品 brief |

每个链接必须是标准 `<a href>`、有上下文、帮助用户完成下一步；不以总链接数或精确匹配锚文本为 KPI。

## 10. 新页面、工具、研究和可引用资产计划

本轮优先建设现有 URL 内的资产，不新增索引页。

### 10.1 P1：版本化证据包

- 受众：品牌采购、质量/合规、经销商、机构采购、行业编辑。
- 任务：在询盘前验证主体、证书范围、测试、QC、包装和限制。
- 独特增量：经批准脱敏的真实文件，而不是“可以索取”的营销句。
- 引用理由：文件有 entity、scope、issuer、issue/expiry、review owner、withdrawal date。
- 产品连接：Evidence → Product → RFQ。
- KPI：approved downloads、document-review requests、qualified RFQ；不以 backlink 数作为主要 KPI。

### 10.2 P2：RFQ readiness worksheet

- 放在现有 RFQ Checklist，不建新 URL。
- 字段：target market、channel、product、size/material、pack count、volume、timeline、document needs。
- 输出：可下载/复制的非医疗、非个人数据 brief。
- 维护：Sales owner 每季度复核字段；Data 记录 download、start、submit、qualified。

### 10.3 P2：材料与规格矩阵

- Cups/Discs：material、hardness/size、capacity、color、packaging、test/document status。
- Pads/Liners：topsheet、core、backsheet、absorbency method、length、wrapper、pack/carton、claim boundary。
- 每项区分 `standard option / project-specific / evidence available / pending review`。

### 10.4 条件性研究资产

只有销售记录证明买家重复提出相同问题时，才考虑匿名化的“采购问题年度汇总”或工具。没有真实数据时不做虚假计算器、批量城市页、fan-out 问答页或 AI 生成目录。

## 11. 品牌、编辑型分发和外链风险

### 11.1 当前可验证状态

- 没有 GSC Links、backlink index 或 referral analytics，不能给出完整外链数量、质量、lost links 或竞品差距。
- 2026-07-27 的品牌检索没有验证到新的独立行业媒体、客户、实验室或协会引用；LinkedIn 是品牌控制资产，不计独立 editorial mention。
- `docs/seo/backlink-prospects.csv` 有 13 个候选，评分器通过：Qmed+ 21（evidence-blocked）、Femtech Insider 19（research-ready）、Global Sources 19（requires-account）、PLMA 19（cost-review）、Suplivia 19（evidence-blocked）、MedicalExpo 18、INDA 17（research-ready）。
- prospects 是准备清单，不代表已提交、已获链接或适合当前阶段。

### 11.2 分发顺序

1. 先完成 claim register 与公开 Evidence。
2. 取得用户对每一个外部提交的明确授权。
3. 优先低成本、相关、可人工审核的 Femtech Insider / INDA；Qmed+/Suplivia 必须等证据范围符合。
4. 使用受控 UTM，destination 为 About、Pads、Evidence 或 Contact；URL 不携带客户、证书、价格或个人信息。
5. 成功指标：独立页面上线、referral visit、Contact arrival、qualified RFQ；不以 DR、dofollow 或链接数为主要 KPI。

### 11.3 禁止项与回滚

不购买链接、不交换、不群发 guest post、不做 PBN、评论/论坛垃圾、不伪造客户/证书/奖项、不自动注册目录。若外部页面出现错误 claim，优先请求更正或删除；保留提交文案、批准人、日期和目标 URL 以便追溯。

## 12. 转化、信任与测量计划

### 12.1 自然落地页的用户任务

- Product：确认产品 fit、specification、MOQ、evidence，然后进入 RFQ。
- Guide：完成一个采购决策，不直接强推报价。
- Quality/Evidence：验证 claim 和文件 status，再决定 document review。
- Contact：知道需要提供什么、提交后发生什么、谁负责、如何保护数据。

当前最大的转化问题不是按钮数量，而是“声明可否相信”和“提交是否真正进入销售闭环”。

### 12.2 建议事件与字段

| 事件/记录 | 触发 | 允许字段 | 禁止字段 |
| --- | --- | --- | --- |
| `product_cta` | 产品/证据 CTA 点击 | page, product, CTA type | email、姓名、message |
| `contact_arrival` | 进入 Contact | landing, source page, campaign | PII |
| `rfq_start` | 首个有效业务字段输入 | form language, product | 具体输入值 |
| `rfq_submit_client` | API 返回成功 | form language, landing | message/联系信息 |
| `rfq_delivered` | provider accepted/delivered | private inquiry id, status, timestamp | 不送第三方 analytics |
| `qualified_rfq` | Sales 判断 | private inquiry id, product, market band, status | 医疗/消费者数据 |

`rfq_submit_client` 不是 `rfq_delivered`；前端成功提示不能替代运营 SLA。首次 landing/UTM 保持 session 级，内部 source page 单独记录，不允许营销 last-click 覆盖销售资格。

### 12.3 信任组件

- 任何 certificate/registration/ISO/CE/FDA/cleanroom/statistic 均显示 scope 或链接到 evidence status。
- About 明确公司法定实体、业务地址范围、对外联系与审查入口。
- Best/Comparison 页披露 YUJI 的商业利益关系和方法限制。
- Contact 只写已经批准并可持续兑现的响应承诺；没有 SLA 证据就不写“几小时内”。
- 证据样本标记 `real redacted`、`illustrative`、`pending`，不能混用。

### 12.4 先修转化，再扩大 SEO

在 28 天内无法取得 delivery/qualified 基线前，不扩大内容频次、不批量做新市场语言、不把 GSC impression 增长当成销售增长。

## 13. AI、PSEO、国际和多搜索引擎治理

### 13.1 AI 内容与 AI 搜索

- AI 可以做候选、聚类、草稿、代码建议和重复检查；法规、证书、材料安全、数字、客户、测试和对外 claim 必须人工事实闸门。
- Google 当前明确：大量 AI/自动页面如果没有用户价值，可能构成 scaled content abuse；为每个 fan-out query 建独立页也可能违反政策。
- 不存在“AI schema”；结构化数据仍应按 Google 支持类型和可见内容实现。
- 单独报告 AI referral/citation，不与 Google organic 合并；当前没有数据，状态为 UNKNOWN。

### 13.2 PSEO

当前 30 URL 没有城市/国家/产品名排列组合的规模化薄页。任何 PSEO 候选必须有真实独立数据或功能、质量抽样、内链、conversion、索引和淘汰门槛。现在没有充分需求，维持“不创建”。

### 13.3 国际 SEO

- Home、Products、OEM/ODM、Quality、Contact 有 5 对 reciprocal `en/zh` hreflang；Home 另有 x-default。
- 其余 4 对没有 x-default，不是致命错误；如建立统一策略，应按 Google 要求提供自身与互相 fully qualified alternates，并保持双向。
- Google 不用 hreflang 或 HTML lang 来检测页面语言，而是用算法；hreflang 用于说明本地化替代关系。
- 中文需求、销售 owner、响应能力和转化未知。先决定“维护/加强/停止扩展”，再做母语 QA；不机器翻译扩页。
- 生产中文 Contact 是 mailto-only，本地表单不能视为 live。只有通过 Privacy、delivery、analytics、Sales SLA 测试后才可发布。

### 13.4 Bing 与 IndexNow

Bing 官方建议使用 canonical sitemap、crawlable links，并在真实更新时可用 IndexNow 通知。当前没有 Bing Webmaster、query、click、index 或 conversion 数据，因此 IndexNow 是 P3 可选实验，不是必做增长项；sitemap 已在 robots 中声明。

### 13.5 AI crawler 与 robots

当前 `robots.txt` 允许全部 crawler。继续开放并不自动授权所有训练用途，也不等于会被 AI 引用。未来如需调整，必须同时评估发现、训练授权、版权、服务器成本和安全，不在本审计中改变。

## 14. P0/P1/P2/P3 优先级总表

| ID | Priority | 问题/动作 | 影响 | 置信度 | 工作量 | 风险 | 负责人 | 依赖 |
| --- | --- | --- | ---: | --- | --- | --- | --- | --- |
| YSEO-001/002 | P0 | 验证 analytics 并建立 delivery/qualified 漏斗 | 5 | 高 | M | 中 | Data/Ops + Dev + Sales | 账号、事件口径、隐私 |
| YSEO-003/004 | P1 | claim register + FDA/CE/ISO/百分比校正 | 5 | 高 | M | 高 | Compliance + Legal + Content | 源文件、批准人 |
| YSEO-005/006 | P1 | 发布批准的版本化 Evidence | 5 | 高 | M | 中 | Compliance + Ops + Dev | 脱敏和公开授权 |
| YSEO-007/008 | P1 | 差异化 3 个未收录 hub | 4 | 中 | M | 低 | SEO + Content | Evidence/买家例 |
| YSEO-009/010 | P1 | 把本地候选拆成干净可回滚实施批次 | 5 | 高 | S | 高 | Dev lead + SEO | dirty worktree owner |
| YSEO-011/012 | P2 | 重点旧页与单变量 snippet 计划 | 4 | 高 | M | 低 | SEO + Content + Data | P0/P1 完成 |
| YSEO-013/014 | P2 | 修 3 orphan + 2 单入链资源页 | 4 | 高 | S | 低 | SEO + Content | 干净发布批次 |
| YSEO-015/016 | P2/P3 | schema 准确性/维护价值治理 | 3 | 高 | M | 低 | SEO + Dev | claim register |
| YSEO-017/018 | P2 | 中文需求、表单、hreflang、母语 QA 决策 | 3 | 高 | M | 中 | Sales + Content + Dev | 中文 owner、测量 |
| YSEO-019 | P2 | 保持性能预算，等待 field data | 2 | 高 | S | 低 | Dev + SEO | CrUX/RUM |
| YSEO-020 | P3 | sitemap lastmod 真实化 | 2 | 高 | S | 低 | Dev + SEO | 发布流程 |
| YSEO-021/022 | P2 | 补 backlink 数据，证据后人工分发 | 3 | 中 | M | 中 | SEO + Owner | Evidence、授权 |
| YSEO-023 | P3 | 正确状态的品牌 404 | 2 | 高 | S | 低 | Dev + Design | 静态路由 |
| YSEO-024 | P3 | Bing/AI 分开测量 | 2 | 高 | S | 低 | SEO + Data | 账号/analytics |
| YSEO-025 | P3 | 新页门槛与 PSEO 治理 | 3 | 高 | S | 低 | SEO + Content + Sales | 需求/证据 |

完整 observation/recommendation、acceptance、rollback、status 见 backlog CSV。

## 15. 30/60/90 天路线图

### 0–30 天：可信基础

| 顺序 | 工作 | 负责人 | 依赖 | 输出/验收 |
| ---: | --- | --- | --- | --- |
| 1 | 决定 Plausible 是否真实启用；验证账号、事件、Privacy | Data/Ops + Legal | 账号权限 | 测试记录或明确关闭决定 |
| 2 | 定义并测试 RFQ funnel、delivery、qualified 字段 | Data + Dev + Sales | 1 | 事件字典、控制测试、28 天报表模板 |
| 3 | 建立 claim register；审查百分比/工厂/ISO/FDA/CE | Compliance + Legal + Content | 文件 owner | 每条 claim 的 scope/source/status |
| 4 | 对 18 个 dirty paths 做 approve/revise/defer/reject | Dev lead + SEO | 3 | 干净批次清单；排除无关 deletion |
| 5 | 完成 3 hub 和 8 个重点页的 brief，不上线未批准事实 | SEO + Content | 3 | 页面级 brief 与 before/after baseline |

### 31–60 天：页面、证据与路径

| 顺序 | 工作 | 负责人 | 依赖 | 输出/验收 |
| ---: | --- | --- | --- | --- |
| 1 | 发布至少一组批准的 redacted evidence | Compliance + Ops + Dev | claim register、脱敏 | version/scope/expiry/owner/withdrawal |
| 2 | 更新 Home/About/Quality/Cup/Pads/Contact/RFQ | Content + SEO + Data | Evidence、measurement | 无违规 claim；事件可测；单变量日志 |
| 3 | 差异化 Applications/Resources/Evidence | Content + SEO | Evidence/渠道例 | 独立 JTBD；30/60 inspection |
| 4 | 上线生产上下文内链，修 3 orphan + 2 单入链 | Content + Dev | 干净批次 | production graph 每页 ≥2 相关来源 |
| 5 | 决定中文维护策略；如继续，做母语/Privacy/delivery QA | Sales + Chinese Content + Dev | 中文 owner、measurement | maintain/strengthen/stop decision |

### 61–90 天：复测、停止或扩大

| 顺序 | 工作 | 负责人 | 依赖 | 输出/验收 |
| ---: | --- | --- | --- | --- |
| 1 | 复盘 28/90 天 GSC 与 funnel | SEO + Data + Sales | 足够窗口 | page/query/landing/RFQ 分开 |
| 2 | 保留、回滚或继续每个 snippet/content 试验 | SEO + Content | 1 | 决策日志，不按印象判断 |
| 3 | 复查 3 hub index；无改善时评估 merge/keep，不盲目重提 | SEO | 2 | URL Inspection + user value 决策 |
| 4 | Evidence 有效后人工推进 1–2 个 editorial prospect | SEO + Owner | 外部授权 | 独立页面/referral/RFQ |
| 5 | 可选：品牌 404、schema 精简、Bing/IndexNow 小实验 | Dev + SEO | 主路径稳定 | 正确状态、无 schema 回归、分引擎报告 |

没有完成 0–30 天 measurement/claim/evidence 依赖前，不扩大内容生产或外链。

## 16. 实施规格

当前仍为 `AUDIT_ONLY`。以下规格用于以后明确切换 `AUDIT_AND_IMPLEMENT` 后执行；本轮没有修改这些文件。

### 16.1 P0：测量真相与漏斗

**目标文件/系统**

- `config/analytics.json`
- `assets/main.js`
- `api/contact.js`
- `contact/index.html`
- `zh/contact/index.html`（仅中文策略通过后）
- `privacy/index.html`
- Plausible/GA4、Resend、CRM 或受控销售表

**当前行为**

- enabled 与 note 矛盾；只有前端 `RFQ Submit`；HTTP 200 被当成功，没有 provider accepted/delivered 和 qualified 状态。

**目标行为**

1. 账号/域名/隐私先明确，配置与政策一致。
2. 前端只发非 PII 的 CTA/contact/start/client-success 事件。
3. 后端为每次有效 inquiry 生成私有 ID，记录 provider acceptance/status；不把联系信息送入 analytics。
4. Sales 记录 qualified/sample/quote/win 与首次响应时间。
5. 月报按 28/90 天、landing、product、country、source 分开。

**验收与测试**

- 在明确授权的内部测试收件人上做 1 次控制测试；浏览器 network、analytics real-time、API response、provider log、sales record 逐段一致。
- 重复提交/失败响应不计 delivered；PII 检查通过；无 double event。
- 28 天后可导出各阶段数量和 stage rate。

**风险与回滚**

- 风险：隐私、双计数、provider 状态误判、测试邮件进入真实销售。
- 回滚：关闭 analytics 和新事件/日志；保留现有表单/API；Privacy 回到准确状态。

### 16.2 P1：claim register 与法规校正

**目标文件**

- `index.html`、`about/index.html`
- `products/index.html`、`products/menstrual-cups/index.html`、`products/pads-liners/index.html`
- `quality/index.html`、`quality/evidence/index.html`
- `resources/best-*/index.html`
- `resources/how-to-choose-menstrual-cup-oem/index.html`
- `resources/how-to-start-private-label-pad-brand/index.html`
- `zh/index.html`、`zh/products/index.html`、`zh/quality/index.html`
- 新的内部 claim register（位置由 owner 决定，不对外公开敏感文件）

**当前行为**

- 百分比/累计数字没有公开方法；FDA/510(k)/CE/ISO 被跨产品泛化；registration/listing 容易被读成 approval。

**目标行为**

claim register 每行必须有：claim、legal entity、product、jurisdiction、source file、issuer、scope、issue/expiry、public/redacted status、owner、review date、approved wording、prohibited wording。

法规正文按以下结构：`产品 intended use → 可能分类 → 需要由谁确认 → 当前官方源 → YUJI 可提供什么 → 不提供什么保证 → 最后复核日期`。

**验收与测试**

- 静态扫描查找 `%`、`FDA`、`510(k)`、`CE`、`ISO`、`Class 7`、`3M+`、`30+`、`patent`；每个结果人工映射 register。
- FDA registration/listing 不写成 approval；CE 不写成所有 EU menstrual products 的通用要求。
- 英中 claim scope 一致；FAQ/schema 与可见正文一致。

**风险与回滚**

- 风险：过度删除真实差异点、旧内容被搜索缓存、法务解释变化。
- 回滚：保留前一版和审批记录；只回滚到经过 Compliance 批准的措辞。

### 16.3 P1：公开 Evidence

**目标文件/资产**

- `quality/evidence/index.html`
- `downloads/` 中新的批准文件
- Home/About/Quality/Product/Resources 的上下文链接

**目标模块**

| 字段 | 说明 |
| --- | --- |
| Document | 文件类型和可读标题 |
| Status | Public redacted / Illustrative / Request-only / Pending |
| Entity/Product scope | 法定主体与产品范围 |
| Issuer/Test owner | 谁出具或谁维护 |
| Issue/Expiry/Review | 时间边界 |
| Redaction note | 隐去什么、为什么 |
| Limitations | 不代表什么批准/市场资格 |
| Action | 下载或 request scoped pack |

**验收与测试**

- 法务脱敏；无客户、订单、地址外的敏感信息、签名或私人联系方式。
- PDF/text 可下载、HTTP 200、大小合理、移动端可读；真实与 illustrative 明确分离。
- analytics 仅记录 document ID/type，不记录用户或证书敏感字段。

**回滚**：移除文件和卡片、使旧 URL 404/410 或按独立批准方案处理；Evidence request path 保留。

### 16.4 P1：三个未收录 hub

**Applications**

- 增加 channel matrix：DTC、marketplace、retail/distributor、institutional。
- 每列覆盖 pack/label、MOQ planning、document gate、sample/QC、shipping/owner；只用有真实业务依据的例子。

**Resources**

- 按 `Choose supplier / Define product & MOQ / Verify evidence & send RFQ` 三组；visible cards 与 ItemList 同步。
- 把生产 3 orphan/2 单入链页纳入真实任务入口。

**Quality Evidence**

- 按 16.3；不能用更多空的“可索取”卡片替代文件。

**验收**

- 三页 H1/首屏/section role 不重复；canonical 不变；标准 a[href]；页面大小和性能不回退。
- 发布后 30/60 天 URL Inspection；不每天 request indexing，不把 PASS 当流量结果。

**回滚**：撤销新增模块/链接；不删除或重定向 URL。

### 16.5 P1：干净发布批次

**当前风险**：工作树 18 个路径含 prior SEO candidates 和无关删除。

**流程**

1. 为每个 dirty path 标 `approve/revise/defer/reject`。
2. 先冻结 baseline 与 `git diff`；明确哪些改动来自用户。
3. 只挑一个主题批次，例如 `claims + evidence copy`，不要混 measurement、中文表单、无关 gpt-site 删除。
4. 运行 30 URL 静态审计、构建/语法、关键页面视觉/表单、robots/sitemap、生产后只读检查。
5. 保留一键反向 commit 或文件级恢复映射。

**验收**：diff 只含批准文件；无未经授权外部写入；部署仍需用户明确授权。

### 16.6 P1：重点页刷新与 CTR

每个工单必须包含：URL、目标 task、28/90 天 baseline、保留/增加/删除/不改、claim sources、单变量 snippet、CTA event、guardrail、30/60/90 review。

首批：Home、Contact、Quality、RFQ Checklist、About、Cup Product。只有 P0/P1 前置通过后才改变 snippet。页面级候选 title 与 evidence gap 已在 `seo-page-action-plan-2026-08-10.csv` 给出。

**验收**：版本记录、事件可测、claim approved、accessibility/SEO 无回归；低量情况下“无结论”是合法结果。

**回滚**：仅恢复本次修改的 title/description/首屏/section；不改变 URL。

### 16.7 P2：内部链接

目标文件：Resources hub、Products、Cup、Pads、About、Quality、Applications 与 5 个 Best/HowTo 页。

**验收**：生产图中每个新资源页至少有 2 个相关来源；Resources visible cards 与 ItemList 一致；没有 broken link、站外跳转或批量 exact-match。

**回滚**：撤销本批上下文链接。

### 16.8 P2：中文路径

只有 Sales 确认中文询盘 owner、SLA 与需求后，才把本地表单候选整理为独立批次。必须复用准确字段/隐私/送达逻辑，中文事件单独标 language，英中 claim register 同步。未通过就保持现有 mailto，不扩页。

## 17. 复测与验收清单

### 发布前本地

- [ ] 30 个 sitemap URL 均有文件、1 H1、唯一 title、self canonical。
- [ ] JSON-LD 全部解析，visible/schema claim 一致。
- [ ] 生产目标 graph 无 orphan，新增链接为标准 a[href]。
- [ ] claim scan 每一项有 register 或被移除。
- [ ] sitemap XML 有效，URL/canonical/lastmod 真实。
- [ ] 表单字段、honeypot、error/success、privacy、键盘/移动端通过。
- [ ] dirty worktree 中无关文件未进入批次。

### 发布后只读

- [ ] HTTP/www/尾斜杠/robots/sitemap/404/header 正常。
- [ ] 关键页 server HTML 有 title/canonical/H1/links/schema。
- [ ] PageSpeed lab 不显著回退；若有 CrUX/RUM，记录 28 天 p75 LCP/INP/CLS。
- [ ] GSC URL Inspection 30/60 天复查三个 hub。
- [ ] GSC 28/90 天按 date/page/query/country/device 分开。
- [ ] analytics 与 CRM/Resend 做一次明确授权的 controlled test。

### 业务验收

- [ ] 28 天 scorecard 能从 organic landing 到 qualified RFQ。
- [ ] 公开 Evidence 被下载/请求且无敏感数据事故。
- [ ] Sales 能标记 product fit、market、volume、timeline、quote outcome。
- [ ] 60/90 天对每项试验做 keep/iterate/rollback/no-conclusion。

## 18. 需要补充的数据/决策

| 数据/决策 | 精确字段/窗口 | 用途 | Owner |
| --- | --- | --- | --- |
| Plausible/GA4 export | 最近 90 天；date, landing, referrer, campaign, country, device, events | 验证收数和 landing/CTA | Data/Ops |
| Resend/API delivery | 最近 90 天；private id, accepted/delivered/failed, timestamp | 区分 client success 与 delivered | Dev/Ops |
| CRM/Sales | 最近 90 天；product, market, volume band, qualified, sample, quote, win, response time | 业务归因和内容优先级 | Sales |
| GSC Links | top linking sites/text/pages + latest links export | 完成外链审计 | SEO/Data |
| CDN/server log | 30 天；status, URL, user-agent, timestamp, cache | crawler/错误/soft 404 | Dev/Ops |
| Claim sources | entity, certificate/test, scope, issue/expiry, public status | 清理公开声明 | Compliance/Legal |
| 中文 lead record | 90 天；source, product, qualified, response | 决定中文维护/扩展 | Chinese Sales |
| Buyer questions | 90 天；问题、产品、阶段、频次、结果 | 新页/工具 gate | Sales/Content |
| Market priority | 国家、产品、渠道、法规 owner、销售能力 | 固定 SERP 与国际计划 | Business Owner |

在这些数据缺失前，不能下的结论：真实 organic sessions、转化率、CAC、市场份额、季节性、backlink 数/质量、AI 引用率、Bing 价值、中文 ROI、内容对收入的因果影响。

## 19. 当前官方来源链接

以下均在 2026-08-10 复核；实施时仍应再次检查最后更新时间。

### Google Search

- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) — sitemap 是 hint；`lastmod` 应反映实质更新。
- [Canonical URL methods](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) — redirect、rel=canonical、sitemap 信号强度与一致性。
- [Redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects) — 永久 redirect 的 canonical 信号。
- [Troubleshoot crawling errors](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors) — sitemap 不保证抓取/收录，使用 crawlable links。
- [JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) — server/rendered 内容、links、metadata 边界。
- [Localized versions and hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions) — self/reciprocal/fully-qualified/x-default。
- [Influencing title links](https://developers.google.com/search/docs/appearance/title-link) — title 是偏好信号，不保证展示。
- [Control search snippets](https://developers.google.com/search/docs/appearance/snippet) — snippets 主要来自页面，也可能使用 description。
- [General structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) — 正确 schema 不保证 rich result。
- [FAQ and HowTo rich result changes](https://developers.google.com/search/blog/2023/08/howto-faq-changes) — HowTo 已退出，FAQ 通常限权威政府/健康站。
- [Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds) — p75：LCP ≤2.5s、INP ≤200ms、CLS ≤0.1 为 good。
- [People-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) — 以真实用户价值、经验和可信度为核心。
- [Generative AI content guidance](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) — 自动生成不免除准确性和价值要求。
- [Spam policies](https://developers.google.com/search/docs/essentials/spam-policies) — scaled content、doorway、link spam 等边界。

### Bing

- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) — 可发现性、准确内容、权威/信任、sitemap 与 links。
- [Bing Sitemaps](https://www.bing.com/webmasters/help/sitemaps-3b5cf6ed) — sitemap 提交与 robots 声明。
- [Bing IndexNow](https://www.bing.com/webmasters/help/indexnow-0z209wby) — 真实发布/更新/删除后的通知协议。

### FDA 与 EU 法规边界

- [FDA Product Classification: Menstrual Cup (HHE)](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPCD/classification.cfm?ID=HHE) — Class II、510(k) Exempt（须核对豁免限制）。
- [FDA Product Classification: Unscented Menstrual Pad (HHD)](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpcd/classification.cfm?id=HHD) — Class I、510(k) Exempt，仍涉及 establishment registration 等义务。
- [FDA Establishment Registration & Device Listing](https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfrl/textsearch.cfm) — registration/listing 不表示 FDA approval。
- [FDA Importing Medical Devices](https://www.fda.gov/industry/importing-fda-regulated-products/importing-medical-devices) — registration/listing 与 premarket submission 取决于适用类别。
- [FDA 510(k) overview](https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-notification-510k) — 除非 exempt，才需按适用规则提交。
- [EU CE marking](https://single-market-economy.ec.europa.eu/single-market/goods/ce-marking_en) — 不是所有产品都需 CE；对非适用产品贴 CE 也被禁止。
- [EU Medical Device Regulation 2017/745](https://eur-lex.europa.eu/eli/reg/2017/745/oj?locale=en) — medical device 定义、intended purpose、CE 与责任边界。

这些来源支持“按产品、intended use、市场和当前分类逐案核验”，不支持把 FDA registration、510(k) 或 CE 写成所有 feminine-care 产品的统一营销清单。
