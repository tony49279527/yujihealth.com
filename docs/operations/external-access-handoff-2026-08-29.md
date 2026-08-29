# YUJI 外部权限交接单 — 2026-08-29

这份交接单把目前无法仅靠网站代码完成的三项工作拆成最小、可验证的动作。它不包含密码、API key、客户资料、证书原件或真实询盘内容；这些资料不能放入 Git 仓库或公开网站目录。

## 当前状态

| 工作流 | 已完成的站内准备 | 仍需外部资料或权限 |
| --- | --- | --- |
| 公开证据包 | 已有 Evidence 页面、公开样例、清单与审批门槛；唯一已公开条目是明确标注为 illustrative 的 QC 字段样例 | 真实且获准公开的脱敏证书、QC 或规格资料 |
| RFQ 邮件送达 | 联系接口、询盘编号、私有登记表模板和回退流程均已具备 | Resend 发送域名、DNS 发布权限、DMARC 决策与受控送达测试 |
| 访问分析 | Plausible 代码和事件边界已预置，但生产开关保持关闭 | 被选定的分析平台、账户所有权和启用/部署授权 |

## 1. 公开证据包

目前 `E-PENDING-001` 至 `E-PENDING-007` 都是 `unreviewed`，不得据此发布证书、材料性能、法规、工厂、出货量或客户结果声明。2026-08-29 的受限 Drive 元数据复核也没有找到可审查的新增候选资料，详见 [evidence-source recheck](../evidence/evidence-source-recheck-2026-08-29.md)。完整的资产清单、审查项和书面公开批准字段见 [evidence approval request](../evidence/evidence-approval-request-2026-08-10.md)。

请由 Operations、Quality 和 Compliance 把原件保存在访问受限的 Drive 或内部资料库，并逐项提供以下信息：

| 优先级 | 最小资料包 | 必填说明 |
| --- | --- | --- |
| P0 | 1–2 份当前有效的体系或产品相关证书；1 页无客户可识别信息的真实 QC 放行记录 | 签发主体、适用工厂/产品、标准、签发/到期日、是否允许公开脱敏 |
| P1 | 材料或成品规格书封面/摘要；2–4 张获准公开的工厂或 QC 实拍 | 版本、产品/材料范围、测试方法或拍摄日期、公开范围 |
| P2 | 包装 BOM 或 carton data 的可公开样页；按产品/市场的法规分类复核 | 适用 SKU/市场、版本/复核日期、允许与禁止的公开措辞 |

后续只有在原件核验、不可逆脱敏、技术审批和书面公开批准都完成后，才可把**批准后的衍生公开文件**登记为 `approved-public` 并挂到 `/quality/evidence/`。原件、订单、签名、二维码和未脱敏记录始终留在受限位置。

## 2. RFQ 发送域名与 DNS

2026-08-29 的只读公开 DNS 复核显示：

- MX 仍指向 Cloudflare Email Routing；
- 根域 SPF 为 `v=spf1 include:_spf.mx.cloudflare.net ~all`；
- `_dmarc.yujihealth.com` 未返回 DMARC TXT；
- `resend._domainkey.yujihealth.com` 与 `mail._domainkey.yujihealth.com` 未返回 CNAME。未检查到这两个标签不等于所有 DKIM selector 都不存在；最终应以 Resend 对所选发送子域给出的记录为准。

具备权限的 Operations/DNS owner 应按以下顺序处理：

1. 在 Resend 添加一个 YUJI 控制的发送子域，例如由 Operations 选定的 `mail.yujihealth.com`。
2. 将 Resend 页面生成的**精确 DNS 记录**交给 DNS owner；不得猜测 SPF 或 DKIM 值，也不得新增第二条 SPF TXT。
3. 在保留现有 Cloudflare 邮件路由记录的前提下发布验证记录；由域名 owner 决定并先以监控为目的配置 DMARC。
4. 验证后才将生产 `RESEND_FROM` 改为该已认证的 YUJI 邮箱，并保持收件人配置私有。
5. 使用专用测试身份向至少两个不同邮件服务商发受控测试，记录 SPF/DKIM/DMARC、收件箱位置、bounce/complaint 和人工交接结果。

完整验收、回退和隐私边界见 [RFQ delivery runbook](rfq-delivery-runbook.md)。密码、Resend API key 和真实询盘内容不要通过聊天或提交到仓库；应由账户 owner 直接在 Vercel/Resend 的受控界面管理，或授予最小权限访问。

## 3. 分析平台

生产站的 `/config/analytics.json` 已复核为 `enabled: false`，因此当前不会加载 Plausible 脚本。页面隐私声明与该状态一致。

请选择一种实施方式：

- **Plausible（推荐）**：账户 owner 创建/确认 `yujihealth.com` 站点、明确数据保留与报告负责人，并书面授权启用和部署。
- **Cloudflare Web Analytics**：提供由账户 owner 生成的 Beacon 配置及启用授权；在上线前更新隐私说明和事件测试。
- **暂不启用**：继续只使用 GSC 与不含正文的 RFQ 来源字段，不改动当前开关。

无论选哪一种，都只保留汇总页面与 CTA 事件；不得发送 RFQ 正文、健康信息、证书内容、邮箱地址或其他个人数据。启用后应验收脚本加载、事件收取、账户报表权限、数据保留设置和 Privacy 页面的一致性。现有技术说明见 [analytics setup](../seo/analytics-setup-2026-07-26.md)。

## 可以交回给网站维护方的最小信息

1. 每份证据资料的受限链接、对应资产 ID、公开范围和书面批准记录；
2. 选定发送子域及 Resend 提供的 DNS 记录，或 DNS owner 已完成验证的确认；
3. 选定分析平台、拥有账户/报表的负责人，以及明确的启用与部署授权。

收到这些不含敏感原件的交接信息后，网站侧可以继续完成已批准公开文件的发布、文案范围校验、配置更新和上线验证；外部账户、DNS 与环境变量的改动仍应由获授权的 owner 执行或明确授权后执行。
