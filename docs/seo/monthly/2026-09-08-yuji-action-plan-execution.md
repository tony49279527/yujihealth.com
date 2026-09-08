# YUJI SEO 行动方案执行记录 — 2026-09-08

## 范围与执行检查点

- 方案来源：`/Users/liangxile/project/SEO技能学习/四站SEO优化执行方案-2026-09-08/yujihealth-seo-action-plan.md`。
- 本轮范围：仅 Y1–Y5 的官网 SEO、采购路径和无实际投递的表单验证；不处理 LinkedIn、选题池、外联、自动化、DNS、分析账号或环境变量。
- 开工版本：`main` 的 `5f98481`（可作为本轮上线前的回退位置）。开工时工作区无他人未提交改动。
- 证据边界：`docs/evidence/evidence-manifest.csv` 中只有 `E-ILLUS-001` 为 `approved-public`；月经杯材料/测试资料 `E-PENDING-006` 仍为 `unreviewed` 且公开范围为 `none`。因此不将具体材料等级、尺寸、容量、硬度、认证、测试或市场声明作为本轮新增公开事实。

## D0 搜索基线（发布前保存）

| 口径 | 时间窗 | 文件 | 观察 | 使用边界 |
| --- | --- | --- | --- | --- |
| 方案摘要 | 2026-08-09 至 2026-09-05 | 上述方案 | 3 clicks、199 impressions、CTR 1.51%、平均排名 24.28 | 这是方案提供的 GSC 摘要，不与其他维度相加。 |
| Page | 同上 | `reports/gsc/gsc-query-page-2026-08-09-to-2026-09-05-2026-09-08T15-02-43-390Z-59497.json` | 16 rows；3 clicks、217 impressions | 页面维度经过 GSC 聚合/匿名化，不能与 query 维度求和。 |
| Query | 同上 | `reports/gsc/gsc-query-query-2026-08-09-to-2026-09-05-2026-09-08T15-03-40-009Z-59963.json` | 10 rows；0 clicks、33 impressions | 用于意图筛选，不等于站点总量。 |
| Query × page | 同上 | `reports/gsc/gsc-query-query-page-2026-08-09-to-2026-09-05-2026-09-08T15-03-07-297Z-59742.json` | 10 rows；0 clicks、33 impressions | 用于核实查询实际落到的页面。 |

本窗口中月经杯页有 23 次曝光，但其中 9 次来自 `menstrual cup protective covers manufacturing plant cost`。该词偏向保护套工厂成本，不足以支持扩写无关的工厂成本业务或发布固定价格。主页有 116 次曝光/3 次点击；`yuji pads` 有 4 次曝光并落在 pads/liners 页。机会评分仅用于排序，不构成增长结论。

## 逐项验收记录

| 编号 | 状态 | 本轮处理与证据 |
| --- | --- | --- |
| Y1 · OEM/ODM 描述 | 条件不成立，无需重写 description | 开工时本地和线上均只有一个非空 description：`See YUJI's feminine care OEM/ODM process from brief and samples to packaging, QC release, and export cartons. Send your manufacturing brief.`；正文确实包含 brief、sample、packaging、production、QC 和 export handoff。保留既有 title 与 URL。 |
| Y2 · 月经杯证据/图像 | 已实施可验证部分；具体参数待资料 | 将唯一信息型产品图改为可见内容的准确 alt；把未有公开证据支持的 LSR、S/M/L 和固定容量暗示改为“买方定义 → 书面规格/样品确认”的表格和 RFQ 字段。新增产品页到 OEM 流程的上下文链接。`E-PENDING-006` 到位并获公开批准前，不恢复或新增材料等级、尺寸、容量、硬度、测试、认证或功效主张。装饰性品牌图保留空 alt。 |
| Y3 · 首页到询价路径 | 已实施 | 首页三张产品卡以描述性锚文本分别进入 cups、discs、pads/liners；cup 与 pads 页现在都有正文中的 OEM 流程入口；OEM 页以“Send your OEM requirements”进入带 `product` 上下文的 Contact 表单。disc 路径原本已具备。Contact 已有市场、产品、数量、包装、时间和文件字段，错误状态与邮件回退；已有事件仅在已批准的 Plausible 配置启用时发送，当前 `config/analytics.json` 为 `enabled: false`，未新增第三方追踪或传递姓名、邮箱、消息正文。 |
| Y4 · 既有 pad 指南 | 已实施 | 在既有 `/resources/how-to-start-private-label-pad-brand/` 中加入“Copy this pre-order RFQ brief”表格，覆盖产品/市场、格式/规格、包装、文件、订单/交付及各自的书面确认项；新增去 pads/liners 与 OEM 流程的上下文链接。`/resources/best-feminine-care-private-label/` 当前 title 已是“How to Evaluate…”，正文有选择标准，因此不重复改标题。 |
| Y5 · 翻译与报价数据 | 条件不成立，无需改 hreflang；已核对结构化数据 | 仓库中只有通用的 `/zh/products/`，没有完整的 `/zh/products/menstrual-cups/` 对等页；英文月经杯页未设置错误的 zh hreflang，故不制造错误配对。Product JSON-LD 保留 name、description、image、url、brand，不填虚构价格或 Offer。 |

## 本地验证与发布记录

- `npm run seo:audit`：通过。审计 30 个 sitemap 页面、语言互链、内部链接、JSON-LD、下载资产、sitemap、robots 和 404 恢复路径。
- `python3 /Users/liangxile/.codex/skills/yuji-seo-conversion-growth/scripts/audit_rfq_journey.py --root /Users/liangxile/project/yujihealth.com`：30 页、0 errors、0 warnings。
- API mock：`GET /api/contact/` 返回 405；缺 name/email/message 的 POST 返回 400。两项都在本地完成，未触发 Resend 或真实询盘投递。
- JSON-LD：首页、OEM、月经杯、pads/liners、pad 指南的所有 JSON-LD 块均可解析；月经杯 Product 仍有 name、description、image、url 和 YUJI brand，且没有虚构 Offer/price。
- `git diff --check`：通过。
- `vercel build --yes`：通过，输出至 `.vercel/output`。首次在沙箱中因 npm 无法写入本机日志目录而失败；在相同构建输入的已授权发布环境中重跑成功，故该首次失败不代表网站构建失败。

### 生产发布回执与线上验证（2026-09-08）

- Git：提交 `e774a6fb8e8fb8ebd8b8137d38fdff9df6a8d729`（`feat(seo): strengthen buyer paths and spec governance`）已推送至 `origin/main`；远端 `main` 已核对为同一 SHA。回退提交仍为 `5f98481`。
- Vercel：生产部署 `dpl_c51zjephoDLY8dJ6ppsxzBqTv67B` 状态为 `READY`；生产别名为 `https://yujihealth.com`，本次直接生产 URL 为 `https://yujihealth-hjkwse8fr-context27149.vercel.app`，检查页为 `https://vercel.com/context27149/yujihealth.com/c51zjephoDLY8dJ6ppsxzBqTv67B`。
- 线上 HTTP/内容证据：生产域名的首页、月经杯、pads/liners、OEM、pad 指南和 Contact 均为 `200`；`/robots.txt`、`/sitemap.xml`、`/llms.txt` 均为 `200`；随机错误路径为 `404`；`www` 首页为 `308` 并指向非 `www` 正式域名。已核对上述受改页面的 canonical、月经杯 Product JSON-LD、上下文产品/OEM/Contact 链接及 Contact 的市场、产品、数量、包装、时间、文件字段。线上空值表单验证仍为 `GET 405`、不完整 `POST 400`，未发送真实询盘；`/config/analytics.json` 仍为 `enabled: false`。
- 移动端证据：在真实生产页的 `390 × 844` 视口检查月经杯页与 Contact 页。两页的根页面均为 `clientWidth 375 / scrollWidth 375`，没有页面级横向溢出；月经杯页三张宽表格各自位于 `overflow-x: auto` 的表格容器中（容器宽 362、表格宽 720），不造成页面横移；Contact 的可见字段宽 320、提交按钮宽 320，均在视口内。生产页控制台错误列表为空。此项为发布后视觉/交互可用性检查，不等同于真实询盘送达测试。

## 仍需外部资料或后续观察

1. `E-PENDING-006`：须由 Quality 提供具产品、材料、方法、日期和公开范围的月经杯规格/测试资料；网站不可依据现有代码猜测。
2. 实际询盘送达、合格询盘、样品、报价和成交：须由已验证 Resend 发件域、销售台账和受控分析平台提供，不由前端成功提示替代。
3. 发布后 7–14 天：做 Google URL Inspection 和线上技术复验；Google 尚未重新抓取时不以此判断文案效果。
4. Google 重新抓取后累计 28 个完整数据日：以相同页面/查询/国家/设备口径与本 D0 窗口比较。低样本下仅报告方向；不得将同期波动声明为本轮修改的因果增长。

## 回退

如出现错误 canonical、坏链接、表单不可用或页面不可访问，回退到开工提交 `5f98481`，再验证相同 URL 的 HTTP、canonical、表单错误路径和内部链接。短期零点击不是回退条件。
