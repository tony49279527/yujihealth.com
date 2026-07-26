# Analytics 安装方案 — 2026-07-26

## 这是什么

在网站上统计：**有多少人访问、从哪一页来、有没有点到 Contact**。  
Google Search Console 只能看搜索曝光/点击，**看不到站内路径**。

## 推荐选择（按隐私与 B2B 匹配）

| 方案 | 优点 | 缺点 | 建议 |
| --- | --- | --- | --- |
| **A. Plausible**（推荐） | 无 Cookie、轻、隐私友好，与当前 Privacy 文案最贴 | 需付费账号 + 域名验证 | 默认推荐 |
| B. Cloudflare Web Analytics | 免费、轻 | 需 CF 账号；事件能力弱 | 备选 |
| C. GA4 | 免费、漏斗强 | Cookie/同意复杂度高，B2B 小站过重 | 不优先 |

## 要测的事件（装好后）

1. `pageview`（默认）  
2. 落地页分布（产品 / 指南 / Evidence）  
3. 点击 `Request quote` / 关键 CTA（可用 Plausible custom events）  
4. `/contact/` 到达  
5. 表单成功提交（前端 success 后发 1 个 event；送达仍以邮件为准）

**不采集：** 健康/医疗个人数据、证书内容、完整表单正文。

## 我已在代码里预留的开关

- `config/analytics.json`：`enabled` + `provider` + `plausibleDomain`  
- `assets/main.js`：仅当 `enabled=true` 且配置完整时加载脚本  
- Privacy 文案草稿见同批对 `privacy/index.html` 的更新（写明可能使用隐私友好 analytics）

## 你需要提供（装上线前必填）

回复其中一种即可：

1. **Plausible**  
   - 已注册账号：是/否  
   - Domain 显示名（通常 `yujihealth.com`）  
   - 是否授权我把 `config/analytics.json` 的 `enabled` 设为 `true` 并部署  

2. **Cloudflare Web Analytics**  
   - Beacon token  

3. **暂不装**  
   - 继续只用 GSC + 询盘邮件里的 landing/UTM 字段  

在你给出账号信息前，**站点不会加载任何第三方统计脚本**（`enabled: false`）。
