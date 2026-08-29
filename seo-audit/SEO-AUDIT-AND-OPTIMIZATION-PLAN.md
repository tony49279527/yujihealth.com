# YUJI（yujihealth.com）SEO 全面审计与优化计划

审计日期：2026-08-09（Asia/Shanghai）
模式：`AUDIT_AND_IMPLEMENT`（仅本地修改，未部署、未提交 GSC）
数据基线：仓库内最新可验证证据截至 2026-07-29；本次没有做任何线上写入、表单提交、GSC 操作、部署或外联。

```text
SITE_NAME = YUJI / Xi'an Yuji Biotechnology Co., Ltd.（西安裕吉生物科技有限公司）
LIVE_URL = https://yujihealth.com/
REPO_ROOT = /Users/liangxile/project/yujihealth.com
BUSINESS_MODEL = B2B 制造 / OEM-ODM / 出口供应链
PRIMARY_CONVERSION = 结构化 RFQ 表单提交并成功送达，随后进入 qualified RFQ
SECONDARY_CONVERSIONS = 文档包申请、样品申请、报价申请、供应商核验请求
TARGET_CUSTOMERS = 海外品牌方、进口商、分销商、Amazon/DTC/零售采购团队
TARGET_MARKETS = 全球；GSC 早期信号为美国、韩国、沙特、印尼、马来西亚、越南等，尚无销售侧确认
TARGET_LANGUAGES = 英文为主，中文 `/zh/` 为已有次级语言目录
CORE_PRODUCTS_OR_SERVICES = 月经杯、经期盘、卫生巾/护垫、配件、私标包装、OEM/ODM、出口文件支持
KNOWN_COMPETITORS = Niceday、Furuize、Shuya（仅来自仓库既有竞争页研究，未做本次线上复核）
GSC_ACCESS_OR_EXPORT = 仓库内 GSC 只读导出；本次沙箱 DNS 受限，无法实时访问 GSC
GA4_OR_ANALYTICS_ACCESS = 无账号/后台/导出；仓库有 Plausible 配置和隐私声明
CRM_OR_REVENUE_DATA = 无
SERVER_LOG_OR_CDN_DATA = 无
CMS_AND_TECH_STACK = 静态 HTML/JS/CSS + Vercel Serverless API（`api/contact.js`）
KNOWN_MIGRATIONS_OR_INCIDENTS = UNKNOWN
CONSTRAINTS = 可修改仓库内静态内容与本地文件；不部署生产、不改域名、不提交 GSC/GA4、不做外部写操作
```

## 1. 执行摘要

这个站点的技术 SEO 基础已经明显优于同阶段 B2B 制造站：30 个 URL 全量覆盖，robots/sitemap/canonical/安全响应头配置清楚，PageSpeed 实验室分高，27/30 URL 已在 Google 被收录，JSON-LD 可解析，核心产品和采购决策页意图明确。

真正的瓶颈不在“再改 title、再做技术分”，而在三个闭环缺口：

1. **没有可验证的站内到 RFQ 测量闭环。** 没有 Plausible/GA4/CRM/邮件日志/CDN 日志导出，无法证明搜索曝光、点击、表单提交、邮件送达、qualified RFQ、样品、报价、订单之间的关系。
2. **公开证据和信任声明不足且存在风险。** 多页出现无来源的“90%”“80%”“20%”“3M+”“16 Patents”等表述，`/resources/best-feminine-care-private-label/` 与 `/quality/` 的 ISO 表达不一致；`/quality/evidence/` 仍以“可索取”为主，没有已批准公开的脱敏证书/QC 样本。
3. **有曝光但无点击，且 3 个重要 hub 尚未收录。** `/applications/`、`/quality/evidence/`、`/resources/` 在最新 URL Inspection 中仍为 `Discovered - currently not indexed`；最新 28 天 GSC page 数据为 145 impressions、0 clicks。

最值得先做的 5 个机会：

1. 建立最小可信测量：核实 Plausible 账号/域名，定义并验证 `landing → CTA → contact arrival → RFQ submit → email delivered → qualified RFQ`。
2. 清理并替换无来源统计和互相冲突的 ISO/质量声明，优先避免合规与信任风险。
3. 发布经批准的脱敏证书/QC/测试样本，把 `/quality/evidence/` 从“可索取”变成真实可引用资产。
4. 让 `/applications/`、`/quality/evidence/`、`/resources/` 成为三个差异明显的决策路径，并继续用正文内链和 URL Inspection 观察收录，不把请求索引当作增长结果。
5. 修复新资源页的发现和内链：Resources hub 目前没有列出 5 个新 Best/HowTo 页面，`best` 与 `how-to` 系列入站链接几乎为零。

先后关系：先修测量和证据，再动内容和 CTR；先刷新已有页，再评估新页；先证明英文 RFQ 路径，再决定是否扩大中文或做新工具。本报告不给排名、流量或富结果承诺。

## 2. 范围、证据与限制

### 2.1 审计范围

- 仓库根：`/Users/liangxile/project/yujihealth.com`，当前分支 `main`。
- 线上域名：`https://yujihealth.com/`；Vercel 配置 `www → apex` 永久 308 重定向、trailing slash、安全响应头、静态资源不可变缓存。
- 公开站点 URL：30 个，与 `sitemap.xml` 一致，无重复、无缺失、无多余 URL。
- 页面类型：首页、产品中心、3 个产品页、应用场景、OEM/ODM、质量、质量证据、关于、资源 hub、11 篇资源文章、联系、隐私、条款、5 个中文页。
- 本次是 30/30 全量基础审计，而不是抽样。
- 技术栈：静态 HTML/JS/CSS + `api/contact.js` Serverless 邮件接口；`gpt-site/` 是另一个独立应用，不属于生产站点。

### 2.2 可用证据

| 证据 | 状态 | 级别 |
| --- | --- | --- |
| 本地 30 个 HTML 页面、robots、sitemap、vercel.json、analytics.json、api/contact.js | 已读 | A |
| GSC URL Inspection all：`reports/gsc/gsc-inspect-all-2026-07-29T09-49-28-172Z.json` | 27/30 PASS，3 个 NEUTRAL | A |
| GSC 28 天 page/query/page-query/country/device/date 导出（最新窗口 2026-06-28 至 2026-07-25） | 145 impressions，0 clicks | A |
| GSC 多周 page 28 天窗口趋势 | 从约 26 增至 145 impressions，始终 0 clicks | B |
| PageSpeed Insights 导出：`reports/pagespeed/pagespeed-2026-07-29T09-39-03-332Z.json` | 60 行，无 failures | A/B |
| 仓库既有 SEO 审计、关键词图、权威增长周报 | 仅作历史上下文，不替代本次验证 | B |

### 2.3 缺失或不可用数据

- 无实时线上抓取/DNS/HTTPS 验证：当前沙箱 DNS 被阻断，`curl` 到 `yujihealth.com`、Google/Bing 官方文档均失败。
- 无 Google/Bing 官方文档当日重新核对；所有政策相关主张必须在实施前人工重读官方来源。
- 无 GSC 90 天/16 个月趋势、无 GSC Links 导出、无 Ahrefs/SEMrush/Majestic。
- 无 Plausible/GA4/GTM/CRM/邮件后台/CDN 日志/服务器日志。
- 无 CrUX field data、无 INP；只有固定配置的 Lighthouse lab 数据。
- 无实时 SERP、Autosuggest、PAA、Related Searches、Bing、AI answer 检查。

### 2.4 观察、推断与建议的区分

本报告统一使用三种标签：

- `观察`：可从仓库代码、GSC 导出、PageSpeed 导出或页面内容直接复现的事实。
- `推断`：从事实推导的可能原因，会标明置信度和其他解释。
- `建议`：具体动作，含影响、成本、风险、验收和回滚。

例如：3 个 URL 未收录是观察；把未收录完全归因于内容厚度不足是低置信度推断；先差异化内容和增加上下文链接、再观察 30-60 天是建议。

## 3. 业务目标与测量基线

### 3.1 业务目标

目标是让 YUJI 被认真做女性护理私标/进口项目的 B2B 买家找到，并在采购决策过程中完成结构化 RFQ。搜索不是唯一渠道，但必须能被测量。

### 3.2 转化定义

- `qualified RFQ`：至少包含目标市场/渠道、产品线、数量方向、包装方向、时间线或文档需求之一，且买家联系方式真实可跟进。
- `RFQ delivered`：表单成功返回，且 `api/contact.js` 通过 Resend 送达 `INQUIRY_TO`。
- `landing`：任意搜索或引荐访问进入站点，需要站内分析。
- `CTA click`：点击 Request quote、证据包、RFQ checklist 等关键 CTA。
- `contact arrival`：进入 `/contact/` 或 `/zh/contact/`。

### 3.3 当前测量状态

- 英文表单前端会记录 `landingPage`、`sourcePage`、`campaign`，并在成功后发送 `plausible("RFQ Submit")` 自定义事件。
- `config/analytics.json` 当前为 `enabled: true`、provider `plausible`、domain `yujihealth.com`；`privacy/index.html` 也声明 analytics 自 2026 年 7 月起启用。
- 但仓库内没有任何 Plausible/GA4/CRM/邮件送达报告，因此“已经真正采集”无法验证。
- 中文 `/zh/contact/` 只有 `mailto:` 路径，没有结构化表单，也没有前端事件；中文询盘无法从站内测量。

## 4. 100 分 SEO 评分卡

分数只用于排优先级，不预测排名或流量。没有足够数据时不打虚高分数。

| 模块 | 满分 | 得分 | 主要依据 | 扣分点 | 置信度 |
| --- | ---: | ---: | --- | --- | --- |
| 技术可访问、抓取与索引 | 20 | 17 | 30/30 sitemap、27/30 已收录、robots/canonical/安全头健康、PageSpeed lab 无 failures | 3 个 hub 未收录；无 live 验证、日志和 field data；lastmod 全站同日期 | 高 |
| 页面质量、意图与刷新 | 20 | 14 | 页面有明确 B2B 任务、1 H1、schema、资源文章较扎实 | 无来源统计、ISO 表达冲突、证据页 request-only、Best/HowTo 重叠且弱内链、中文页薄 | 高 |
| 需求研究与页面映射 | 15 | 6 | GSC 自动导出和既有关键词图存在，少数 query/page 映射可复核 | 14 个 query impressions、0 clicks；无 90/16 月、无 SERP、无工具搜索量验证 | 中 |
| 信息架构与内部链接 | 10 | 8 | 导航、面包屑、hub、产品到指南路径清楚 | 新资源页未进入 hub；`best`/`how-to` 入站少；中文导航指向英文 About | 高 |
| 业务测量与数据可信度 | 10 | 4 | 表单字段、UTM、landing/source 字段和事件代码已预留 | 无后台/CRM/日志；中文 mailto 不可测；无 qualified RFQ 定义落库 | 高 |
| 可链接资产与编辑型分发 | 10 | 4 | line sheet PDF、RFQ checklist、QC 样例已存在 | 无公开脱敏证书/QC；无已验证第三方引用；无完整 backlink 数据 | 中 |
| 转化、信任与留存 | 10 | 6 | RFQ 路径清楚、隐私说明较克制、证据页有边界 | 无来源统计和 ISO 冲突会削弱信任；无转化测量；无案例/评价/回访数据 | 高 |
| AI/PSEO/国际化治理 | 5 | 3 | 无批量低质 PSEO，robots 开放，AI 工具仅用于候选/草稿 | 无 AI/Bing 独立测量；中文薄且无本地化验证；无官方政策当日复核 | 中 |
| 总分 | 100 | 62 | | | |

提高到下一档的最短路径：先修测量和证据，不让技术分继续通过“优化分数”掩盖业务结果缺失。

## 5. 技术 SEO、安全、抓取与索引

### 5.1 P0 访问与安全

观察：

- `vercel.json` 配置了 `X-Content-Type-Options: nosniff`、`Referrer-Policy`、`Permissions-Policy`、`X-Frame-Options: DENY`、`Strict-Transport-Security`。
- 本地 HTML 扫描未发现本地 `href/src` 指向不存在文件的问题。
- 没有 4xx/5xx 页面清单、服务器日志或 CDN 日志；无法验证生产环境全站状态码、恶意软件扫描或爬虫访问模式。
- 当前沙箱无法执行线上 DNS/HTTPS 复核，因此“线上可用”没有被本次重新证明。

结论：仓库配置和既有报告没有显示安全阻断，但不能把这一项当作本轮线上已验证。

### 5.2 P1 抓取、索引与规范化

观察：

- `robots.txt`：`User-agent: *` + `Allow: /` + `Sitemap: https://yujihealth.com/sitemap.xml`。
- `sitemap.xml`：30 个 URL，0 重复；全部 `lastmod` 为 2026-08-05，`changefreq` 为 weekly/yearly。
- 30 个页面均无 `noindex`；非首页有自引用 canonical；主要页面有 breadcrumb。
- 最新 URL Inspection：27/30 `PASS / Submitted and indexed`，3 个 `NEUTRAL / Discovered - currently not indexed`：
  - `/applications/`
  - `/quality/evidence/`
  - `/resources/`
- `/products/` 已从更早审计中的未收录转为已收录。
- 全部 5 个中文 URL 已收录。

推断（中置信度）：3 个 hub 的未收录状态不是 canonical/robots/sitemap 错误，更可能与 Google 对页面价值、内链路径或收录节奏的判断有关；也仍有“新页面观察期未走完”的普通解释。

建议：

- 不要批量提交索引请求。
- 给 3 个 hub 分别定义唯一任务，并增加来自已收录产品页/指南页的上下文链接。
- 在 30-60 天后用 URL Inspection 复测，不看 sitemap API 的即时数字。

### 5.3 P2 页面理解、schema 与重复治理

观察：

- 所有 30 个页面有 1 个 H1；JSON-LD 全部可解析。
- 英文页有 Organization、WebSite、WebPage、Product、Article、HowTo、FAQPage、CollectionPage、BreadcrumbList 等；中文页只有 Organization/WebSite/WebPage，内容也更薄（约 106-156 个可见字，英文多数页为 384-1326 字）。
- `/resources/` 的 ItemList 当前 8 项与页面 8 张资源卡一致，但只覆盖 6 篇采购文章 + PDF + Evidence，没有 5 个新增 Best/HowTo 页面。
- `hreflang` 目前只覆盖中英都存在的 5 组：Home、Products、OEM/ODM、Quality、Contact。没有中文版的英文资源页不需要强行补 hreflang，但若未来增加中文资源页，必须成对维护。

建议：

- 给 `/resources/` 增加新资源页的可见卡片和 ItemList，让 schema 与可见内容、全站资源目录一致。
- 中文页在需求确认前不要为了“补齐 schema 数量”盲目添加 Product/FAQ，避免与实际内容不匹配。

### 5.4 P3 性能、图片与体验

观察（PageSpeed 导出 `2026-07-29T09:39`）：

- 30 URL × 2 策略 = 60 行，无 failures。
- Mobile Performance 最低 0.92、最高 1.00；Accessibility 最低 0.98；Best Practices/SEO 最低 1.00。
- Desktop Performance 全部 1.00。
- 全部 60 行的 field data 均为空，`INP` 均为空。

结论：

- Lab 数据不能等同真实用户 CWV；缺少 CrUX field data 和 INP，不能声称现场体验已达标。
- 性能不是当前可验证的 P0/P1 阻断。

## 6. GSC/分析发现

### 6.1 URL 收录

最新 `gsc-inspect-all-2026-07-29`：

| 状态 | 数量 | 页面 |
| --- | ---: | --- |
| PASS / Submitted and indexed | 27 | 首页、产品中心、3 产品页、OEM/ODM、Quality、About、12 资源页、Contact、Privacy、Terms、5 中文页 |
| NEUTRAL / Discovered - currently not indexed | 3 | `/applications/`、`/quality/evidence/`、`/resources/` |

### 6.2 最新 28 天 page 数据

窗口 2026-06-28 至 2026-07-25：15 行，145 impressions，0 clicks。

| Page | Impressions | Position | Clicks |
| --- | ---: | ---: | ---: |
| `/` | 53 | 5.74 | 0 |
| `/about/` | 21 | 11.29 | 0 |
| `/products/menstrual-cups/` | 18 | 20.00 | 0 |
| `/products/pads-liners/` | 10 | 6.30 | 0 |
| `/contact/` | 8 | 3.25 | 0 |
| `/quality/` | 6 | 3.67 | 0 |
| `/resources/private-label-sanitary-pads-china/` | 6 | 15.83 | 0 |
| `/resources/feminine-care-oem-rfq-checklist/` | 5 | 4.20 | 0 |
| `/resources/menstrual-disc-oem-moq/` | 4 | 8.00 | 0 |

### 6.3 最新 28 天 query × page

窗口 2026-06-29 至 2026-07-26：5 行，14 impressions，0 clicks。

| Query | Landing page | Impressions | Position |
| --- | --- | ---: | ---: |
| `yuji cup` | `/products/menstrual-cups/` | 7 | 6.00 |
| `yuji china` | `/` | 3 | 6.33 |
| `menstrual cup protective covers manufacturing plant cost` | `/products/menstrual-cups/` | 2 | 80.50 |
| `white label smart pad china` | `/resources/private-label-sanitary-pads-china/` | 1 | 64.00 |
| `yuji corp` | `/about/` | 1 | 20.00 |

### 6.4 国家、设备、日期

- 最新 28 天 country：91 impressions；美国 30、韩国 8、沙特 6、印尼 5、马来西亚 4、越南 4。
- 最新 28 天 device：Desktop 56、Mobile 33、Tablet 2。
- 最新 7 天 page：66 impressions，0 clicks；国家以 USA 12、VNM 4、IDN 3、AUS 2、GBR 2 为主。
- 所有保存窗口都是 0 clicks。

### 6.5 趋势与解释

28 天 page impressions 从约 26 增至 145，但样本很小，不能证明增长模式已经建立。0 clicks 的可能解释包括：

- 站点/品牌权威不足，SERP 中竞争者更可信；
- 当前 query 多为品牌词或低购买意图词；
- snippet/title 没有给出足够采购决策信号；
- 曝光量太小，统计波动大；
- 部分高位置是 GSC 聚合产生的相对位置，不代表真实可见位置。

置信度：中。不应把“位置 3-6”直接写成排名保证。

## 7. 需求、SERP、意图与内容差距

### 7.1 当前可验证需求池

GSC 是目前唯一一方需求证据，但不足以做市场规模判断：

- 品牌需求：`yuji cup`、`yuji china`、`yuji corp`。
- 非品牌需求：`menstrual cup protective covers manufacturing plant cost`、`white label smart pad china`。
- 页面级机会：首页、Contact、Quality、RFQ checklist、Pads/Liners 已有高位曝光但 0 clicks。

### 7.2 无法完成的部分

本次沙箱无法访问 Google/Bing 官方文档、真实 SERP、Autosuggest、PAA、Related Searches、AI answer 或第三方关键词工具。因此以下内容不能作为“搜索量证据”：

- 没有搜索量；
- 没有关键词难度；
- 没有 SERP 广告/视频/图片/知识面板占比；
- 没有竞品 SERP 快照。

### 7.3 需求驱动的动作原则

- 不因 1-2 次曝光创建“smart pad”或“protective cover”新页。
- 不把零搜索量当“零需求”。
- 先覆盖已曝光 query 的正文准确回答，再考虑独立页。
- 只有重复出现、意图独立且页面任务不同，才新增页面。

## 8. 旧页刷新和 CTR 计划

### 8.1 优先刷新池

以下页面有曝光、位置较高或位置接近 4-15，但 0 clicks：

| URL | GSC 28d 证据 | 假设 |
| --- | --- | --- |
| `/` | 53 impressions, pos 5.74, 0 clicks | 首页需要更明确的采购任务和“买家下一步”信号，而不是只有品牌介绍 |
| `/contact/` | 8 impressions, pos 3.25, 0 clicks | snippet 和首屏需要说明 RFQ 会得到什么、回复时效、需要哪些信息 |
| `/quality/` | 6 impressions, pos 3.67, 0 clicks | 需要把“可审计”变成可下载/可见证据，而不是仅写边界 |
| `/products/pads-liners/` | 10 impressions, pos 6.3, 0 clicks | 需要去掉无来源 bundle 数字，增加格式、包装、文件对比 |
| `/resources/feminine-care-oem-rfq-checklist/` | 5 impressions, pos 4.2, 0 clicks | snippet 应突出“下载 + 开始 RFQ”，而不是只写 checklist 介绍 |
| `/resources/menstrual-cup-oem-moq/` | 3 impressions, pos 7.67 | 可增加一个简单的决策表或“把 MOQ 变量放进 RFQ”的正文回答 |
| `/resources/menstrual-disc-oem-moq/` | 4 impressions, pos 8.00 | 同上，先区分 cup/disc MOQ 变量 |

### 8.2 标题/snippet 实验规则

- 每个页面一次只测一个 title 或 description 假设。
- 不把 meta description 当排名因素，只作为点击沟通。
- 基线必须包括 28 天和 90 天 impressions/clicks/CTR；样本过小就继续观察，不重写。
- 不机械更新日期；只有内容实质变化才更新。

### 8.3 不做的 CTR 操作

- 不做误导性“Best”“Guaranteed”“Certified”标题；
- 不重复关键词；
- 不制造和正文不一致的 promise；
- 不在证据批准前把未核验证书写进 snippet。

## 9. 信息架构与内部链接计划

### 9.1 当前结构

- 首页 → 产品/应用/OEM/质量/About/Resources → 产品子页和资源文章 → Contact，路径基本清楚。
- 导航、页脚、面包屑覆盖大部分核心页。
- 本地链接图显示核心 hub 和产品页的入站链接较多，但新资源页明显弱：

| 页面 | 本地入站链接数 |
| --- | ---: |
| `/resources/best-feminine-care-private-label/` | 0 |
| `/resources/how-to-choose-menstrual-cup-oem/` | 0 |
| `/resources/how-to-start-private-label-pad-brand/` | 0 |
| `/resources/best-menstrual-cup-manufacturers-china/` | 1 |
| `/resources/best-sanitary-pad-oem-china/` | 1 |
| `/resources/menstrual-cup-oem-sourcing-guide/` | 8 |
| `/resources/menstrual-cup-oem-moq/` | 8 |
| `/resources/menstrual-cup-vs-disc-oem/` | 8 |

### 9.2 建议的内链动作

1. `/resources/` 增加 5 张新资源卡：Best Cup、Best Pad、Best Private Label、How to Choose Cup OEM、How to Start Pad Brand；同时更新 ItemList。
2. `/products/menstrual-cups/` → `/resources/how-to-choose-menstrual-cup-oem/`，语境“工厂筛选步骤”。
3. `/resources/menstrual-cup-oem-sourcing-guide/` → `/resources/how-to-choose-menstrual-cup-oem/`，语境“详细步骤版”或反过来；当前两个页面标题几乎重复，必须先差异化再链接。
4. `/products/pads-liners/` → `/resources/how-to-start-private-label-pad-brand/` 和 `/resources/best-sanitary-pad-oem-china/`，语境“品牌启动路径/供应商比较”。
5. `/products/` → `/resources/best-feminine-care-private-label/`，语境“跨品类私标供应商比较”。

### 9.3 链接质量规则

- 锚文本描述用户价值，不批量使用精确匹配。
- 每个链接必须能在“用户正在完成什么任务”处自然出现。
- 不新增无关全站链接；内链不是数量指标。

## 10. 新页面、工具、研究和可引用资产计划

### 10.1 现有资产

- `/downloads/yuji-feminine-care-oem-line-sheet.pdf`
- `/downloads/yuji-feminine-care-rfq-checklist.txt`
- `/downloads/yuji-qc-release-checklist-sample.txt`
- 11 篇采购/决策文章

### 10.2 当前最需要的资产

建议按顺序评估：

1. **公开脱敏证据包**：证书封面、证书范围页、产品规格、QC 放行样本、测试摘要。目标受众：质量、采购、合规负责人。引用理由：可复核、可引用、降低 RFQ 往返。
2. **“RFQ 输入清单”工具**：不是生成式关键词工具，而是把产品、市场、包装、文件字段变成可填写/可下载的检查表。前提：英文 RFQ 有可测量数据且用户确实需要。
3. **真实的项目/批次匿名案例**：需要销售/质量授权，不能虚构。
4. **年度女性护理采购流程研究**：只有在能提供一手数据（询盘字段、MOQ 变量、常见合规问题）时才有价值。

### 10.3 不做的资产

- 不按国家/颜色/尺寸/产品名批量生成薄页。
- 不做没有真实数据或功能的“calculator/checker/generator”。
- 不在没有证据批准前公开证书名称。

## 11. 品牌、编辑型分发和外链风险

### 11.1 当前品牌状态

- GSC 品牌 query 只有少量 impressions、0 clicks。
- 仓库周报显示 LinkedIn 公司页是品牌控制资料，不是独立第三方引用。
- 没有可验证的独立行业目录、媒体、协会、实验室或客户引用。
- 没有 GSC Links 导出，也没有 Ahrefs/SEMrush/Majestic。

### 11.2 建议

- 先补齐公开证据，再准备目录/媒体资料；否则外联只会放大无法验证的证书声明。
- 编辑型分发只做相关、自愿、少量：行业目录、真实失效资料替换、记者问答、播客、合作伙伴、社区原生回答。
- 不买链接、不交换链接、不做 PBN、不做批量 guest post、不群发外联。
- 外链 KPI 不用 DR 或 dofollow 数量；成功指标应是“可验证第三方页面出现、引荐访问、RFQ”。

## 12. 转化、信任与测量计划

### 12.1 转化路径现状

- 英文：产品页/指南 → Request Quote → `/contact/` 表单 → `/api/contact/` → Resend 邮件 → inbox。
- 中文：页面 → `mailto:info@yujihealth.com`，无表单、无事件、无送达确认。

### 12.2 当前信任风险

无来源统计和声明不一致会直接削弱 B2B 采购信任：

- `products/menstrual-cups/index.html`：`Over 90% of cup buyers include custom pouch and leaflet in their first order.`
- `products/index.html`：`80% of new buyers start with a single line and expand in subsequent seasons.`
- `products/pads-liners/index.html`：`Accessory bundles can reduce total program lead time by 20% when quoted together.`
- `about/index.html`：`3M+ Reported cumulative cup shipments`、`16 Patents and IP assets on file`；首页和中文首页展示 `3M+`、`30+` 但缺少同一口径 caveat。
- `resources/best-feminine-care-private-label/index.html`：`Operating under ISO 13485 and ISO 9001 quality systems`，与 `/quality/` 的“operates under ISO 13485 quality management categories；买家必须核验”不一致。

建议：

- 每一项数字要么改成“内部累计/当前批次可复核”的具体口径，要么删除。
- ISO/CE/FDA/其他合规表述统一为“可索取核验，按产品/市场边界确认”，不得在公开资料中写成绝对认证。
- 将中文首页 `3M+` 与英文口径保持一致。

### 12.3 测量计划

先验证 Plausible 账号和事件，再建立：

1. `landing`：pageview + landing page。
2. `CTA`：Request quote/evidence/checklist 点击。
3. `contact_arrival`：Contact page view。
4. `rfq_submit`：表单成功。
5. `rfq_delivered`：API/邮件日志成功。
6. `qualified_rfq`：CRM/邮件人工分类。

中文建议加结构化表单，使用同一 `/api/contact/` 或独立中文端，并记录 `sourcePage`、`landingPage`、`campaign`。

## 13. AI、PSEO、国际和多搜索引擎治理

### 13.1 AI 使用边界

当前仓库没有证据显示批量 AI 薄页或关键词排列组合。AI 在本项目中的合理角色是聚类、草稿、候选和审计放大器；事实、证书、MOQ、价格和合规声明必须人工验证。

### 13.2 AI 搜索

- `robots.txt` 开放，AI crawler 默认可抓取。
- 没有 AI answer 追踪，也没有独立 measurement；不能声称 AI 搜索已获收益。
- 建议把经典搜索点击、AI 引荐、站内行为、RFQ 分开记录，用 `utm_source=ai_search` 或来源分类观察，不以“schema 数量”为 KPI。

### 13.3 国际 SEO

- 英文是当前唯一有明确 B2B 需求的默认语言；中文 5 页全部已收录，但内容很薄、无结构化询盘表单。
- 没有 qualified RFQ、客户、法规或本地销售能力证据前，不建议扩大中文目录。
- 若继续维护中文，需要母语人工 QA、中文表单、合规口径和 hreflang 双向维护；不能只做机器翻译。

### 13.4 多引擎

- 没有 Bing Webmaster 数据；不能假设 Bing 与 Google 行为一致。
- 只有当 Bing/其他引擎出现真实受众、点击或 RFQ 后再分别配置和测量。

## 14. P0/P1/P2/P3 优先级总表

### P0：必须先处理

| ID | 问题 | 负责人 |
| --- | --- | --- |
| B-001 | 无可用分析/CRM/邮件日志，无法证明 SEO 到 RFQ 的闭环 | 数据/运营负责人 |
| B-002 | 中文询盘只有 mailto，无事件、无送达确认 | 产品/前端 + 数据 |
| B-003 | 无来源统计和 ISO 声明不一致，存在合规与信任风险 | 内容 + 质量/合规 + 法务 |

### P1：影响核心路径

| ID | 问题 | 负责人 |
| --- | --- | --- |
| B-004 | `/applications/`、`/quality/evidence/`、`/resources/` 未收录 | SEO + 内容 |
| B-005 | 证据包仍 request-only，缺少公开脱敏证书/QC | 质量/合规 + 运营 |
| B-006 | 高位置页面 0 clicks，需要测量和内容/task 刷新 | SEO + 内容 |
| B-007 | 新资源页弱内链、hub 未覆盖 | SEO + 内容 |
| B-008 | 无 GSC Links/backlink 数据，无法做外链审计 | 数据/SEO |

### P2：内容和路径优化

- B-009：Cup sourcing 两页差异化或后续按数据合并。
- B-010：Best/HowTo 页加方法论、限制和比较口径。
- B-011：中文页只按需求维护，不盲目扩页。
- B-012：RFQ checklist/Evidence 的下载路径强化。

### P3：小规模实验

- B-013：CrUX/INP field data。
- B-014：AI/Bing 独立测量。
- B-015：真实可用的 RFQ 工具。
- B-016：经数据确认后的编辑型分发。

## 15. 30/60/90 天路线图

### 0-30 天：可信基础

依赖：数据账号授权、质量/合规文件批准、内容负责人确认口径。

1. 验证 Plausible 账号/域名/事件；至少建立 pageview、Contact arrival、RFQ Submit、RFQ delivered。
2. 清理无来源统计和 ISO 声明；同步中文首页；发布/撤销 Privacy 中 analytics 状态。
3. 导出或接入 CRM/邮件日志，定义 qualified RFQ 字段。
4. 为 3 个未收录 hub 写差异化 brief，不改 title 只加任务证据和上下文内链。
5. 修复 `/resources/` 新资源卡和 ItemList。
6. 为高位置 0 clicks 页面建立 28 天基线，不急着改 title。

### 31-60 天：页面与路径

依赖：第一批证据包已批准；英文 RFQ 事件已验证。

1. 发布脱敏证据包并在 Quality/Evidence、产品页、About 页正确链接。
2. 刷新 Home/Contact/Quality/Pads/RFQ checklist 的页面任务和 snippet 假设，一次一个变量。
3. 差异化 Cup sourcing 与 How to Choose 两页；若数据证明高度重复再评估合并。
4. 建立 Best/HowTo 页的决策方法论、限制条件和横向对比证据。
5. 中文：决定是否加结构化表单；若加，与英文同一漏斗。

### 61-90 天：复测与扩大

依赖：30/60 天改动已上线并积累至少一个完整 28 天窗口。

1. 复测 URL Inspection、点击、CTR、landing、Contact arrival、RFQ。
2. 只扩大有证据的页面/内链/资产模型。
3. 回滚无效 title/snippet/内容实验。
4. 建立月度巡检：sitemap lastmod、hreflang、字段事件、证书范围、图片和安全头。
5. 主市场证据成熟后再评估 PSEO、新工具或国际化。

## 16. 实施规格

### 16.1 P0-A：测量闭环

- 当前行为：`config/analytics.json` 为 enabled，前端代码会发 `RFQ Submit`，但没有后台报告；中文 contact 是 mailto。
- 目标行为：可回答“从哪一页来、有没有到 Contact、有没有提交、邮件有没有送达、是否 qualified”。
- 文件/组件：`config/analytics.json`、`assets/main.js`、`api/contact.js`、`zh/contact/index.html`、`privacy/index.html`。
- 验收：能导出 28 天 landing/CTA/contact/RFQ delivered 数据；中文表单或明确 mailto 归因链路存在。
- 回滚：若账号未确认，把 analytics enabled 改回 false 并更新 Privacy；不影响表单。
- 复测：30/60/90 天。

### 16.2 P0-B：声明清理

- 当前行为：产品页/About/首页/中文首页出现无来源比例和累计数字；Best 页出现绝对 ISO 9001/13485 表达。
- 目标行为：每个统计有可追溯口径或删除；质量声明统一为可核验边界；中文与英文一致。
- 文件：`products/index.html`、`products/menstrual-cups/index.html`、`products/pads-liners/index.html`、`about/index.html`、`index.html`、`zh/index.html`、`resources/best-feminine-care-private-label/index.html`、`quality/index.html`。
- 验收：`rg` 扫描不再发现无来源百分比/绝对认证；质量页与 Best 页表述一致。
- 回滚：保留 git 历史，恢复原文即可；但需同步内容/法务确认。
- 复测：上线后 7 天人工复核，30 天查询盘相关问询。

### 16.3 P1-A：3 个 hub 收录

- 当前行为：3 个 URL `Discovered - currently not indexed`。
- 目标行为：先不追求状态；使每个 hub 有独特任务、一手表格/证据、更多上下文内链。
- 动作：
  - `/applications/`：围绕 Amazon/DTC/Pharmacy/Distributor 增加实际包装、文档和首单决策差异，不写成营销标签。
  - `/quality/evidence/`：在文件批准后加入脱敏 PDF/截图，并把“可索取”改为“可下载/可申请”的混合路径。
  - `/resources/`：加入 5 个新资源卡并更新 ItemList。
- 验收：30 天后 URL Inspection 从 NEUTRAL 变 PASS，或至少 Google 已抓取；不把“已请求索引”当验收。
- 回滚：无高风险动作；若新增内容导致错误，删除新增模块即可。

### 16.4 P1-B：证据包

- 当前行为：`/quality/evidence/` 第三张卡显示“waiting for approved PDFs”。
- 目标行为：批准后上传脱敏证书封面/范围、QC 放行样本、测试摘要；每个文件标注“审核版本、范围、日期、用途”。
- 负责人：质量/合规 + 运营 + 开发。
- 验收：文件可下载、页面可见、不包含敏感价格/客户/个人数据；`rg` 无绝对认证表述。
- 回滚：文件撤销即可；页面保留结构。

### 16.5 P1-C：CTR/task 刷新

- 当前行为：首页 53 impressions/0 clicks、Contact 8/0、Quality 6/0、Pads 10/0、RFQ checklist 5/0。
- 目标行为：每个页先改一个任务假设，例如 Contact 首屏直接给“RFQ 会收到什么”而不是只给表单。
- 验收：28 天窗口 CTR 或 Contact arrival/RFQ 有变化；无变化则回滚并观察。
- 回滚：每次保存 title/description/首屏前后版本，单项回滚。

### 16.6 P2-A：内链

- 目标文件：`resources/index.html`、`products/menstrual-cups/index.html`、`products/pads-liners/index.html`、`products/index.html`、`resources/menstrual-cup-oem-sourcing-guide/index.html`、`resources/how-to-choose-menstrual-cup-oem/index.html`。
- 动作：按第 9 节 source → target 加正文上下文链接，更新 ItemList。
- 验收：5 个弱链接页在本地链接图中都有至少 2-3 个来自相关页的入站链接；资源 hub 可见卡片与 ItemList 一致。
- 回滚：移除新增卡片/链接即可。

## 17. 复测与验收清单

- 30 天后：
  - URL Inspection 3 个 hub 状态；
  - GSC 28d clicks/CTR；
  - Plausible 事件是否可见；
  - 声明清理是否完成；
  - 中文 mailto/form 状态。
- 60 天后：
  - title/snippet 单变量实验是否有 28 天数据；
  - 证据包是否上线并产生下载/问询；
  - 新资源页内链和收录状态。
- 90 天后：
  - 比较 0-30、31-60、61-90 的 organic landing → contact → RFQ；
  - 是否继续、扩大、回滚实验；
  - 是否有 qualified RFQ 和行业分发证据。

## 18. 需要补充的数据/决策

1. Plausible/GA4/CRM/邮件后台权限或导出。
2. GSC Links 导出或授权 backlink 工具。
3. 90 天/16 个月 GSC 趋势导出。
4. CrUX/INP field data 或 PageSpeed field 导出。
5. 服务器/CDN 日志。
6. 质量/法务确认哪些证书、测试、QC、工厂数字可以公开。
7. 中文目录是否继续、是否加结构化表单、是否有中文销售响应能力。
8. 英文 RFQ 回复时效和 qualified RFQ 定义。

## 19. 当前官方来源链接

重要说明：本次沙箱 DNS 被阻断，无法在审计当日重新打开以下官方来源。以下链接是稳定官方入口，实施前必须人工重读并核对当日政策。不能把本报告中的政策理解当作官方最新边界。

- Google Search Central - SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central - Robots.txt: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Google Search Central - Sitemaps: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google Search Central - JavaScript SEO: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- Google Search Central - Structured data: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google Search Console - URL Inspection: https://support.google.com/webmasters/answer/9012289
- Google Search Quality Rater Guidelines: https://support.google.com/websearch/answer/9281931
- Bing Webmaster Guidelines: https://www.bing.com/webmasters/help/webmasters-guidelines-30fba23a
- Bing Webmaster Tools: https://www.bing.com/webmasters/about
- Schema.org - FAQPage: https://schema.org/FAQPage
- Schema.org - Documentation: https://schema.org/docs/documents.html

## 20. 2026-08-09 第一/二批实施记录（本地未部署）

本次按 `AUDIT_AND_IMPLEMENT` 执行了第一批低风险、可回滚改动，未部署生产，未提交 GSC，未发送外联。

已完成：

1. 清理无来源统计：`products/index.html`、`products/menstrual-cups/index.html`、`products/pads-liners/index.html` 中移除 `80%`、`90%`、`20%` 表述，改为可执行服务描述。
2. 统一质量声明：`resources/best-feminine-care-private-label/index.html` 不再写绝对 `ISO 13485 and ISO 9001 quality systems`，改为“按产品类别支持合规审查路径，买家核验证书范围”。
3. 统一累计数字口径：`index.html`、`about/index.html`、`zh/index.html` 改为 `Reported`/“企业口径”，About 不再展示无法核验的专利数量。
4. 修复资源发现：`resources/index.html` 新增 5 张 Best/HowTo 资源卡，`ItemList` 从 8 项更新到 13 项。
5. 补齐正文内链：Cups → Factory selection、Pads → Start a pad brand / Compare pad OEMs、Products hub → Best private label guide。
6. 中文询盘路径：`zh/contact/index.html` 新增中文结构化表单，接入同一 `/api/contact/`；`assets/main.js` 增加中文表单状态文案。
7. 更新 `dateModified` 和 `sitemap.xml` 中实质变更 URL 的 `lastmod` 为 2026-08-09。

第二批已完成：

1. 差异化 Cup sourcing 两页：`resources/menstrual-cup-oem-sourcing-guide/index.html` 改为“快速供应商筛选”，`resources/how-to-choose-menstrual-cup-oem/index.html` 保持“分步工厂评估”，两页互相链接。
2. 强化 Applications：新增“Channel RFQ Pack”表，按 Amazon/DTC/Pharmacy/Distributor 给出首轮 RFQ 字段、文件和样品优先级。
3. 强化 Quality Evidence：新增“Evidence By Product Line”表，按 cups/discs/pads/accessories 区分核心证据和市场核验项。
4. Best 系列补方法：`best-menstrual-cup-manufacturers-china`、`best-sanitary-pad-oem-china`、`best-feminine-care-private-label` 增加“How this shortlist was built”和采购限制说明。
5. 更新上述页面的 `dateModified`、`Last reviewed` 和 `sitemap.xml lastmod`。
6. 同步 backlog 状态：B-007 转为 `in_progress` 待 30-60 天收录复测；B-017、B-019、B-025 标记为 `done`；中文治理 B-020 保持 `in_progress`。

最终本地校验：30 个 HTML 页面与 30 个 sitemap URL 一一对应；本地链接 0 个 broken；每页 JSON-LD 可解析且恰好 1 个 H1；Resources 可见卡片与 `ItemList` 均为 13；两份 CSV 可解析且 action 字段合法；`git diff --check` 通过。

未完成/需继续：

- Plausible/CRM/邮件送达后台仍未接入，测量闭环仍需账号授权。
- 公开脱敏证书/QC 文件仍等待质量/法务批准。
- `/applications/`、`/quality/evidence/`、`/resources/` 的收录状态需要 30-60 天复测。

## 附注

本审计的正式交付物是 `seo-audit/` 下的三个文件；本次 `AUDIT_AND_IMPLEMENT` 还在仓库内修改了上面列出的静态内容页、`assets/main.js`、`sitemap.xml` 和 `resources/index.html`，未部署生产、未提交 GSC、未发送外联。仓库已有删除项 `gpt-site/build/sites-vite-plugin.ts` 与本次工作无关，未回退、未触碰。
