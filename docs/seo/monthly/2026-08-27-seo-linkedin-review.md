# YUJI SEO + LinkedIn 例行复核 — 2026-08-27

## 已执行

- 读取自动化记忆（当时不存在）、Git 基线、项目 SEO 配置、现有月报、LinkedIn 草稿、URL inventory、外链候选表和证据 manifest；保留了所有用户未提交改动，尤其是 `about/index.html` 的 Person / Organization schema 收敛改动。
- 请求最新完整窗口的 GSC 数据：28 天 `2026-07-28..2026-08-24` 与最近 7 个完整数据日 `2026-08-18..2026-08-24`，分别请求 query、page、query+page；同时请求 sitemap 和核心 URL Inspection。所有请求都因本环境没有 GSC 凭据而停止，未据此做关键词、排名或索引结论。
- 复核首页、menstrual cups、pads/liners、OEM/ODM、Quality、Evidence、About、Contact 与 sitemap 的公开 HTTP 路径；均返回 200。静态校验覆盖 URL inventory 的 30 页：均存在 title、canonical、H1 与 Contact 路径。
- `package.json` 未定义 build script；因此以静态页面校验、RFQ journey audit 与公开 HTTP smoke 代替构建步骤，未虚报 build 通过。
- 运行 RFQ journey audit：30 页、`errors=0`、`warnings=0`。运行 evidence manifest 校验：8 项，`approved-public=1`、`unreviewed=7`。运行外链候选评分：13 个候选，未产生任何外部提交或联系。
- 检查公开 LinkedIn：公司页 `YUJI Feminine Care` 可公开读取；个人 URL `anran-an-yuji` 无法由无登录公开读取，故未确认账号身份、个人历史贴或本周实际发布数。

## 已验证

- 本地 About 页将公司 LinkedIn 与 Anran 的 Person 实体分离，首页 / About / Contact 的公开联系链路均指向同一公司页与个人 URL；这些是现有用户未提交改动，本轮未改写。
- 本周已存在两条未发布的 Anran 个人草稿（第 1 条落地 `/products/menstrual-cups/`；第 2 条落地 `/products/pads-liners/`），因此遵守“自然周最多两条”约束，本轮没有新增、改写或发布草稿。
- 推荐继续观察的既有页为：
  1. `/products/menstrual-cups/`：买家为比较中国 OEM 的采购方；页面已有产品—证据—RFQ 路径。先以新 query+page 数据确认搜索词与落地页匹配，再决定是否补充采购细节或内链。
  2. `/quality/` → `/quality/evidence/` → `/contact/`：质量尽调与文件核验意图已被页面和 CTA 覆盖；目前没有批准的真实证书、检测、客户或质量结果可扩展，不能为获取曝光新增主张或薄页。
- 公司 LinkedIn 页公开可见的更新包含 ISO 13485、CE MDR、GMPC/BSCI、3,200 m²、3M+ 出货、30+ 市场与 ISO Class 7 等说法。当前 manifest 只批准一份 illustrative QC 字段示例，未批准这些公开声明；官网当前页面采用更审慎的项目级核验边界。因此公司页与官网/证据 manifest 存在高优先级实体与证据不一致风险。

## 待用户确认

- 请由 LinkedIn 账号所有者确认当前登录账号确为 `Anran An Yuji`，并提供或核验本周个人已发布贴的公开 URL；无登录公开读取无法确认个人历史去重。
- 若要发布，请明确回复“发布第 1 条”“发布第 2 条”或“发布全部”。发布前还需确认本周个人新帖少于两条；本自动化不会自行发布。
- 请确认是否授权单独审阅并编辑公司 LinkedIn 页面上的无证据声明。公司页编辑不在本轮授权内，且应先补齐每一项声明的来源、范围、有效期及公开批准。
- 需要在具备 Search Console 权限的环境配置 ADC、`GSC_ACCESS_TOKEN` 或服务账号，随后重跑上述两个完整数据窗口和核心 URL Inspection。

## 未执行

- 未发布或编辑任何 Anran 个人内容；未编辑公司页；未发送私信、评论、邮件或真实 RFQ。
- 未提交 sitemap、请求索引、部署、commit、push、改 DNS/账号权限、安装分析或 CRM。
- 未创建新页面、未更改标题/描述、未新增证书/测试/客户/产能/交期/市场等主张；没有 GSC 新证据，也没有可公开的新增证据资产。
- 未对 Femtech Insider、Global Sources、Qmed+、Suplivia、PLMA、EDANA 等候选进行外部动作。候选表中的 `submitted` 仅表示历史本地记录，不能视为已上线；Qmed+ / Suplivia 仍受证据闸门阻断，Global Sources 需确认既有账号。

## 下一步动作

1. 先解决公司 LinkedIn 的证据一致性：下线或改写未获批准的认证、面积、出货、市场和洁净区声明，或为每项补齐经批准且范围匹配的证据。
2. 在已授权 GSC 环境取得 `2026-07-28..2026-08-24`、`2026-08-18..2026-08-24` 的 query/page/query+page 数据；仅在样本与意图成立后，选择上述两个既有页中的一页做一次小规模刷新或内链优化。
3. 审核证据清单中待定的证书和真实 QC 样页；在书面批准、脱敏、范围和有效期齐全前，维持当前“按项目核验”的表述。
4. 继续以 GSC 点击、落地页 CTA、RFQ、合格询盘、样品、报价与成交为 KPI；当前没有已授权站内分析或销售阶段数据，不以点赞或粉丝判断效果。
