# YUJI SEO 持续增长系统 - 2026-07-15

## 目的

这套系统把 YUJI SEO 分为每日技术健康、每周站外权威、每月内容/证据/转化、每季度竞争/国际市场四个节奏。用户不需要记住 skill 名称；自然语言任务和定时自动化都会按职责调用对应 skill。

## Skills

| Skill | 主要职责 | 自然语言示例 |
| --- | --- | --- |
| `$yuji-b2b-authority-growth` | 外链、品牌提及、行业目录、协会、展会、媒体和合作伙伴引用 | “继续帮 YUJI 找靠谱外链” |
| `$yuji-gsc-content-growth` | GSC 查询/页面机会、内容更新、CTR、内链和新页面门槛 | “根据本月 GSC 给我下一批内容任务” |
| `$yuji-evidence-case-builder` | 工厂、证书、QC、产品、客户证据台账和案例 | “把这个项目整理成可公开的匿名案例” |
| `$yuji-seo-conversion-growth` | 自然搜索到 RFQ、样品、报价和成交的漏斗与页面摩擦 | “检查哪些 SEO 页面没有把买家带到询盘” |
| `$yuji-competitive-market-intelligence` | 竞争差距、国家、语言、渠道和季度市场判断 | “评估法国是否值得做法语 SEO” |

## 自动化节奏

| 周期 | 自动化 | 内容 |
| --- | --- | --- |
| 每天 07:00（Asia/Shanghai） | `yujihealth-com-review` | PSI、GSC、索引、技术 SEO、移动端、状态码和低风险修复 |
| 每周一 09:30 | `yuji` | 站外品牌提及、外链候选、行业渠道和下一批 3-5 个行动 |
| 每月 1 日 10:30 | `yuji-seo` | GSC 内容机会、证据/案例、RFQ 转化和月度 3-5 个行动 |
| 每季度 1/4/7/10 月 5 日 11:00 | `yuji-seo-2` | 竞争矩阵、国家/语言、渠道投入和季度决策 |

## 自动化允许直接完成

- 读取公开网站、GSC、PSI、仓库和已有报告。
- 更新本地研究、CSV、评分表、报告、模板和草稿。
- 修复证据充分、低风险、可验证的本地 metadata、schema、内链、CTA、可访问性和移动端问题。
- 运行脚本、静态检查、本地 HTTP 和浏览器 smoke test。

## 电脑关机或 Codex 未运行

- 这些任务使用本机执行环境，不是云端 cron；电脑关机、Codex 本地环境不可用、断网或凭据失败时，计划任务不能保证在原定时刻执行。
- 四个 automation 都已加入遗漏周期检查。下一次成功启动时会读取各自 memory，从上次成功日期到当前日期执行一次合并补跑，不逐个重放多个过期周期。
- 补跑报告会写清遗漏的计划时间、实际运行时间、覆盖的数据窗口和无法恢复的数据。它不会伪造当时的 PSI、GSC、搜索结果或外部状态。
- 需要真正 24/7 准点执行时，应另外迁移到始终在线且安全持有凭据的 CI/云端 runner；该迁移涉及账号、secret、额度和外部基础设施，必须单独审批。

## 必须等待确认

- 注册账号、提交目录、发送邮件、投稿、发布社交内容。
- 购买工具、会员、广告、展位或其他付费服务。
- 公开证书、客户、评价、订单、测试报告或其他敏感证据。
- 添加分析平台、Cookie、像素、CRM 或更改数据保留方案。
- 请求索引、提交 sitemap、修改 DNS/Cloudflare/GSC 权限。
- commit、push、生产部署和删除外部数据。

## 当前确定性工具

- GSC 机会评分：`~/.codex/skills/yuji-gsc-content-growth/scripts/score_gsc_opportunities.py`
- 证据台账验证：`~/.codex/skills/yuji-evidence-case-builder/scripts/validate_evidence_manifest.py`
- 市场候选评分：`~/.codex/skills/yuji-competitive-market-intelligence/scripts/score_market_candidates.py`
- RFQ 路径审计：`~/.codex/skills/yuji-seo-conversion-growth/scripts/audit_rfq_journey.py`
- 外链候选评分：`~/.codex/skills/yuji-b2b-authority-growth/scripts/score_prospects.py`

## 当前测试基线

- GSC 内容评分成功读取 2026-06-15 至 2026-07-12 的 query/page 报告。首页和 About 因分别有 16/10 次展示、平均排名约 5.94/9.80、0 点击，进入 `ctr-test` 人工复核；低样本查询保持观察，不自动生成文章。
- RFQ 路径审计覆盖本地 19 个页面，0 error、0 warning。
- 证据 manifest 模板和市场候选模板验证通过。
- 五个 YUJI SEO skills 均通过 `quick_validate.py`。

## 管理原则

- 不因为自动化频繁运行就频繁改页面；新证据不足时，正确结果可以是只读观察。
- 每月最多执行 3-5 个内容/转化行动和 1 个案例或证据包。
- 每季度最多调查 1-2 个市场、解决 2-3 个可证据化竞争差距、测试 1 个渠道。
- 以有效 RFQ、样品、报价和成交为最终指标；排名、展示、外链数量和权威分数只作为中间诊断。
