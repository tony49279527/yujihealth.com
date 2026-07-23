# YUJI 全框架 SEO 审计与优化 - 2026-07-23

## 1. 结论

YUJI 的技术 SEO、页面 SEO 和基础 GEO 已经进入稳定区间。当前增长瓶颈不是 title、canonical、PageSpeed 或 schema 缺失，而是：

1. 非品牌搜索需求仍很少，GSC 尚无点击。
2. 四个聚合页仍为 `Discovered - currently not indexed`。
3. 公开可核验的证书、QC 样本和客户项目证据不足。
4. 没有站内访问到 RFQ、询盘送达、Qualified RFQ 的测量链路。
5. 当前可验证的第三方品牌提及和行业引用很少。

因此，本轮不重写标题、不堆关键词、不批量新建页面；只加强已收录产品页到待收录 Applications/Evidence 页的正文链接，并补齐 Resources 集合页的结构化目录。

## 2. 当前证据

审计时间：2026-07-23 Asia/Shanghai。

| 数据源 | 当前结果 |
| --- | --- |
| 线上技术巡检 | 19/19 页面返回 200；canonical、H1、OG/Twitter、JSON-LD、图片尺寸/alt、内部链接通过 |
| PageSpeed Insights | 19 URL x 移动/桌面共 38 行；最低 Performance 99；Accessibility、Best Practices、SEO 均为 100 |
| Core Web Vitals | 实验室 CLS 为 0；缺少可用 CrUX field data 和 INP |
| GSC 28 天 page 维度 | 11 行、82 impressions、0 clicks |
| GSC 28 天 query 维度 | 4 行、10 impressions、0 clicks |
| GSC 7 天 page 维度 | 3 行、34 impressions、0 clicks |
| URL Inspection | 15/19 `Submitted and indexed` |
| 未收录聚合页 | `/products/`、`/applications/`、`/quality/evidence/`、`/resources/` |
| Sitemap | 19 URL，0 warnings，0 errors |
| RFQ 静态审计 | 19 页面，0 errors，0 warnings |
| Analytics | 无 GA4/Plausible/同类漏斗；不能计算 visit -> RFQ |
| 外链数据 | 无 GSC Links 导出、Ahrefs、SEMrush 或 Majestic；不能声明完成全量外链审计 |

不同 GSC 维度受匿名查询和聚合阈值影响，总数不能混合相加。

## 3. 总框架评估

状态定义：`强` 表示当前证据没有明显基础缺口；`发展中` 表示已有系统但数据或内容不足；`弱/受阻` 表示需要证据、账号、预算或外部执行；`低适用` 表示不应机械套用。

| 模块 | 状态 | 当前判断 | 下一优先级 |
| --- | --- | --- | --- |
| SEO Fundamentals | 发展中 | B2B 搜索意图、关键词地图和路线图清晰；真实 query 样本太少 | 等待非品牌需求，按 GSC 刷新现有页 |
| Technical SEO | 强 | 抓取、sitemap、robots、canonical、速度和 schema 基线健康 | 观察四个聚合页收录；补充可用日志数据 |
| On Page SEO | 强 | title、URL、H1、图片和主要内链健康 | 加强聚合页的正文上下文链接 |
| Content SEO | 发展中 | 产品、决策、MOQ、RFQ、质量主题已形成 cluster | 公开证据和真实案例优先于继续扩页 |
| Content Optimization | 发展中 | 可读性、实体、FAQ、语义覆盖良好 | 样本达到阈值后再做 CTR/refresh 测试 |
| Link Building | 弱/受阻 | 有 12 个候选，但没有完整 backlinks 数据或已验证新增引用 | 人工审核目录/协会，禁止批量链接 |
| Local SEO | 低适用 | 这是全球 B2B OEM 网站，不是本地到店业务 | 保持公司名称/地址一致；不把 GBP 当主增长引擎 |
| SaaS SEO | 适配后发展中 | Product、Use Case、BOFU、RFQ 已覆盖；不适合照搬 integrations/free tools | 继续使用 B2B sourcing 决策页模型 |
| AI SEO / GEO | 发展中 | 抓取开放，Organization/WebSite/FAQ/Article/Product schema 可用 | 提升公开证据和实体引用，而不是新增非标准文件 |
| International SEO | 发展中 | 英文面向全球；GSC 国家分布广但没有询盘验证 | 暂不翻译；先验证销售、法规和语言能力 |
| Analytics | 弱/受阻 | GSC 自动化完善；无站内漏斗、CRM 阶段或全量外链数据 | 先决定隐私合规的测量方案 |
| Growth | 早期 | 已有日/月/周自动化，曝光从零开始出现；点击仍为零 | 用 28 天窗口管理实验，停止日常无证据改版 |

## 4. 分模块明细

### SEO Fundamentals

- **Search Intent**：核心页均面向品牌方、进口商、分销商、Amazon/DTC/零售采购，不是消费者健康内容。
- **Ranking Factors**：技术和页面因素健康；主要短板是站外权威、可验证证据和真实互动数据。
- **SEO Roadmap**：已有 growth system、关键词地图、审计和周期自动化。
- **Competitor Analysis**：本轮使用当前官方页面，只比较公开事实，不推断流量、收入或市场份额。
- **Keyword Research**：GSC 仅披露 `yuji cup`、`yuji china`、`yuji corp`、`white label smart pad china`；不足以支撑批量内容。

### Technical SEO

- **Crawlability**：`robots.txt` 允许抓取并指向 sitemap；主要公开内容没有 robots 阻断。
- **Indexability**：15/19 已收录；四个聚合页待观察。页面本身并不薄，分别约 374-693 个正文英文词。
- **XML Sitemaps**：19 URL 与配置清单一致；本轮只更新实际修改页的 `lastmod`。
- **RobotsTXT**：默认开放也覆盖 GPTBot、Google-Extended 等未被单独禁止的 crawler；无需重复 Allow 列表。
- **Canonical**：19 页自引用 canonical 正常，www 和 HTTP 统一 308 到 HTTPS apex。
- **Core Web Vitals / Page Speed**：实验室指标优秀；缺少真实用户 field data，不能把 lab 99 当作真实用户完成率。
- **Schema Markup**：Organization、WebSite、Product、Article、FAQPage、BreadcrumbList、CollectionPage 可解析。本轮为 Resources 增加与页面可见内容一致的 6 项 `ItemList`。
- **Log File Analysis**：当前没有可用的完整边缘访问日志或 crawl log 数据；不能分析 Googlebot 频率、浪费抓取或状态分布。

### On Page SEO

- **Title / Header Tags / URL Structure**：长度、唯一性、一个 H1、描述性目录 URL 均通过。
- **Internal Linking / Anchor Text**：导航、breadcrumb、产品到指南和 RFQ 路径完整。本轮增加具体产品到 Applications/Evidence 的描述性链接。
- **Image SEO**：关键图有尺寸、alt、`srcset`、`sizes` 和首屏 fetch priority；非关键图保持 lazy loading。
- **Entity SEO**：公司名称、地址、邮箱、Organization `@id` 和 publisher 引用一致；缺少独立第三方实体引用。

### Content SEO 与 Content Optimization

- **Content Strategy / Topic Clusters / Pillar Pages**：Products、Applications、Quality、Resources 是 hub；产品、MOQ、对比、RFQ 指南为 cluster 内容。
- **Evergreen / Blog SEO**：采购指南适合 evergreen；当前不需要高频新闻型 blog。
- **Programmatic SEO**：当前数据不支持规模化模板页。禁止按国家、颜色、尺寸或单次 query 批量生成薄页。
- **E-E-A-T**：About、Quality、Evidence 和 RFQ 边界清晰；最大缺口是批准公开的证书/QC/case 样本。
- **Semantic / NLP / Entity Coverage**：现有内容覆盖 MOQ、sample、packaging、QC、document、channel、market 等采购实体；不需要为了 NLP 分数重复关键词。
- **Content Expansion / Refresh**：优先更新已有页面；新页面必须有独立意图、重复需求和真实证据。
- **CTR Optimization**：Home、About、Pads/Liners 进入 scorer 的观察列表，但曝光太少，不进行自动 title 测试。

### Link Building

- 当前候选表有 12 个机会；高优先项包括 Qmed+、Femtech Insider、Global Sources、PLMA、Suplivia、MedicalExpo 和 INDA。
- Search Console API 不提供完整 Links report；没有导出或授权数据源时，不得声称完整 backlink 数量。
- 目录提交、注册、付费会员、展会、外联邮件均是外部写操作，本轮未执行。
- 拒绝 PBN、批量 guest post、论坛/评论链接、自动目录群发和无关付费 dofollow。

### Local SEO

- YUJI 的主任务是国际 B2B sourcing，不是本地搜索到店。
- NAP consistency 仍重要，但 Google Business Profile、reviews 和 local keyword 不应挤占证据与获客资源。
- 如果以后运营可验证的公开工厂接待地点，GBP/地图资料应由公司主体和实际接待流程决定。

### SaaS SEO 的 B2B 改写

- **Landing / Feature Pages** -> 产品和 OEM 能力页。
- **Use Case Pages** -> `/applications/` 渠道场景页。
- **Alternative / Comparison Pages** -> 仅保留 noindex 模板；没有法律和同口径证据时不发布竞争对手比较。
- **BOFU Content** -> MOQ、RFQ checklist、sourcing guide、quality evidence。
- **Integration Pages / Free Tools** -> 当前业务不适用；不为套框架制造低价值工具。

### AI SEO / GEO

- robots 默认开放，核心内容可以被 AI crawler 访问。
- 可抽取问答、FAQPage、Article、Product、Organization 和 breadcrumb 已覆盖。
- GEO 的主要下一步是让公开证据可引用，并获得独立行业页面对实体的确认。
- `llms.txt` 不是当前收录或可见性的必要条件，本轮不增加非标准文件。
- 没有经过同口径、可重复的 AI answer tracking，本轮不声明 LLM visibility 排名。

### International SEO

- 当前单一英文站点不需要 hreflang。
- 28 天 GSC country 维度以美国、韩国、沙特等为主要早期信号，但全部 0 clicks，不能据此决定语言站。
- 新语言上线前必须确认真实询盘、法规范围、翻译维护能力和对应销售响应。

### Analytics 与 Growth

- GSC、PSI、sitemap、URL Inspection 和技术巡检已自动化。
- 没有 GA/其他站内 analytics，无法测量 organic landing、CTA、Contact arrival 和 form start。
- 前端已保留 UTM、landing page 和 source page，API 可接收表单；仍缺 delivered RFQ、qualified RFQ、sample、quote、win 的闭环数据。
- 分析、CRM、cookie、session replay 或外部表单提供商均需先确定账号、字段、保留期限、同意机制和隐私文本。

## 5. 当前竞争差距

以下均为竞争对手官方页面的公开宣传内容，未独立验证其产能、证书范围、客户或合规声明。

| 官方页面 | 可见强项 | YUJI 应对 |
| --- | --- | --- |
| [Niceday](https://www.nicedayglobal.com/) | 公开产品目录、MOQ、lead time、认证入口、blog 和多种卫生用品 | 不复制大数字；在证据批准后公开项目级文件样本和真实商业条款 |
| [Furuize menstrual cup manufacturer](https://www.furuizecup.com/menstrual-cup-manufacturer/) | Cup/Disc 专题页、公开 MOQ、WhatsApp/phone、定制项和合规声明 | 保持采购安全表达；补齐可核验证据和人工联系渠道决策 |
| [Shuya OEM](https://www.shuyacare.net/oem) | Pads/Liners OEM 流程、规格项、联系表单和公开制造规模声明 | 强化 YUJI 跨 Cups/Discs/Pads 的组合采购与 RFQ 文档优势 |

YUJI 当前可防守的差异化不是“最大工厂”或未经证明的认证数量，而是跨品类 launch planning、采购边界、RFQ 质量、文件审查路径和相对克制的合规表达。

## 6. 本轮已实施

1. 在 Menstrual Cups、Menstrual Discs、Pads/Liners 三个已收录产品页增加 `/applications/` 的正文上下文链接。
2. 在 Pads/Liners 页增加 `/quality/evidence/` 的正文链接。
3. 为 `/resources/` 的 6 篇可见采购指南增加 `ItemList`，并由 `CollectionPage.mainEntity` 引用。
4. 将四个实际变更 URL 的 sitemap `lastmod` 更新为 `2026-07-23`。

预期领先指标：Applications 的抓取/收录状态、Google 选择的 landing-page breadth、非品牌 buyer query impressions。该修改不保证收录或排名。

## 7. 本轮明确未做

- 不从 1 次曝光创建 `smart pad` 新页面。
- 不自动重写 Home/About/Pads 标题。
- 不发布竞品 comparison/alternative 页。
- 不创建多语言目录或 hreflang。
- 不安装 analytics、pixel、cookie banner 或 CRM。
- 不提交 GSC indexing request。
- 不注册目录、发送外联邮件或购买会员/展位。
- 不触碰并发任务生成的 `docs/seo/backlink-prospects.csv` 和 `docs/seo/authority-growth-weekly-2026-07-20.md`。

## 8. 验证

- `git diff --check`：通过。
- RFQ journey audit：19 pages，0 errors，0 warnings。
- JSON-LD：24 blocks 全部 JSON 解析通过。
- Sitemap：XML 解析通过，19 URL，4 个实际变更 URL 的 lastmod 已更新。
- 本地 HTTP：Cups、Discs、Pads、Resources、Applications、Evidence、sitemap 均返回 200。
- 375px 浏览器内容宽度：Cups/Pads 新卡片无重叠，`scrollWidth == clientWidth`。
- Resources 运行时 schema：`numberOfItems == 6` 且 `itemListElement.length == 6`。
- 浏览器控制台：0 errors。
- `vercel build --yes`：通过，Vercel 构建目标按项目声明使用 Node 22；本机 CLI 的 Node 25 仅产生 engine warning。

## 9. 90 天行动顺序

### P0：测量与证据

1. 决定隐私合规的最小站内漏斗，至少区分 Contact arrival、RFQ delivered、Qualified RFQ。
2. 批准一小组可公开的证书/QC/测试脱敏样本，避免只有“可索取”文字。
3. 由销售记录 source、product、country、qualification、sample、quote、win。

### P1：收录与权威

1. 用 URL Inspection 观察四个聚合页，不把 sitemap API 的 `indexed: 0` 单独作为判断。
2. 在人工确认主体资料后，优先推进一个免费高相关目录和一个 femtech/行业实体页面。
3. 获取 GSC Links 导出或授权的 backlink 数据源后，再做全量链接审计。

### P2：内容实验

1. 至少等待一个完整 28 天窗口后重新运行 GSC scorer。
2. 页面达到足够曝光且意图明确时，一次只测试一个 title/description 或内容模块。
3. 只有重复非品牌需求出现，才新增一个 buyer-decision 页面。

### P3：国际化

1. 用 qualified RFQ、客户和法规准备度决定语言，而不是 impressions 单独决定。
2. 没有本地销售和维护能力时，优先做销售材料或目录 profile，不做完整语言站。
