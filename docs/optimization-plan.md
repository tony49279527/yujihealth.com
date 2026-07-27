# yujihealth.com SEO 优化执行方案

**基于子木 SEO 方法论 v3 框架**
**评估日期**: 2026-07-27 | **分析师**: Buddy

---

## 目录

- [P0 — 立刻行动（本周）](#p0-立刻行动本周)
  - [0.1 开启 Analytics + 安装 Clarity AI Visibility](#01-开启-analytics--安装-clarity-ai-visibility)
  - [0.2 修复 GSC 收录缺口（3 个问题页）](#02-修复-gsc-收录缺口3-个问题页)
  - [0.3 全站 GEO 基础优化（结论盒 + FAQ Schema）](#03-全站-geo-基础优化结论盒--faq-schema)
- [P1 — 本月执行](#p1-本月执行)
  - [1.1 内容扩产：Best + HowTo 内容矩阵](#11-内容扩产best--howto-内容矩阵)
  - [1.2 中文站启动（/zh/ 多语言版本）](#12-中文站启动zh-多语言版本)
  - [1.3 信任信号增强](#13-信任信号增强)
- [P2 — 季度内推进](#p2-季度内推进)
  - [2.1 外链建设启动](#21-外链建设启动)
  - [2.2 转化数据闭环 + 自动化周报](#22-转化数据闭环--自动化周报)
  - [2.3 程序化 SEO 探索](#23-程序化-seo-探索)
- [附��：时间线总览](#附录时间线总览)

---

## P0 — 立刻行动（本周）

### 0.1 开启 Analytics + 安装 Clarity AI Visibility

**为什么做**: 子木方法论核心——没有数据就没有决策。目前运营是盲打，不知道哪些页面有流量、哪些转化高。

**现状**: 
- Plausible 已配置在 `config/analytics.json`，但 `enabled: false`
- `main.js` 已有动态 `initAnalytics()` 加载器，会自动读取配置文件判断是否启用
- 表单已有 UTM 归因系统（sourcePage / landingPage / campaign 隐藏字段）

**执行步骤**:

| # | 步骤 | 文件 |
|---|------|------|
| 1 | 确认 Plausible 账户已注册并配置 `yujihealth.com` 域名 | Plausible dashboard |
| 2 | 将 `config/analytics.json` 的 `enabled` 改为 `true` | `config/analytics.json` |
| 3 | 在 Privacy 页面补充 analytics 数据说明（已收集 session 归因数据） | `privacy/index.html` |
| 4 | 注册 Microsoft Clarity，添加跟踪代码(script) | 所有页面的 `<head>` 或 `main.js` |
| 5 | 确认 Clarity 的 AI Visibility 模块已开启 | Clarity dashboard → AI Visibility |

**代码变更**:
- `config/analytics.json`: `"enabled": true` ✅（改一行）
- `privacy/index.html`: 补充 analytics 说明段落
- `assets/main.js`: 添加 Clarity 脚本注入（约 5 行）

**预期收益**: 拿到流量数据 → 知道哪些页面有需求 → 决定外链和内容预算分配。Clarity AI Visibility 提供 GEO 基准线。

**工作量**: 1-2 小时

---

### 0.2 修复 GSC 收录缺口（3 个问题页）

**为什么做**: 19 页有 3 页未被索引，Resources 首页甚至"unknown to Google"——内容写了但 Google 不认。

**现状**:

| 页面 | GSC 状态 | 原因推测 |
|------|---------|---------|
| `/products/` | Discovered - not indexed | 内容偏聚合，独立价值不够 |
| `/applications/` | Discovered - not indexed | 新页面，内链不够深 |
| `/resources/` | Unknown to Google | 最严重——Google 根本不知道这页存在 |
| `/quality/evidence/` | Discovered - not indexed | 新页面 |
| **Sitemap** | 漏了 `applications/` 和 `privacy/` | 手动加的漏洞 |

**执行步骤**:

| # | 步骤 | 涉及文件 |
|---|------|---------|
| 1 | 修复 sitemap：补上 `applications/` 和 `privacy/` | `sitemap.xml` |
| 2 | Resources 首页加足够的正文内容（目前可能是空白/太薄） | `resources/index.html` |
| 3 | 从首页/About/OEM 等强页面加内链指向 Resources、Applications | `index.html`, `about/index.html` 等 |
| 4 | 给 Product Center 加一段独特的产品选型引导，不要只是聚合卡片 | `products/index.html` |
| 5 | GSC 手工请求索引：将 4 个问题页 URL 提交重新抓取 | GSC URL Inspection 工具 |
| 6 | 提交更新后的 sitemap | `npm run seo:gsc:submit-sitemap` |

**代码变更**:
- `sitemap.xml`: 加 2 个 `<url>` 条目
- `resources/index.html`: 加 150-300 字原创导语 + H1 强化
- `products/index.html`: 加一段"如何选择产品"引导段
- 多个 footer/nav 页面：检查内链是否到位

**预期收益**: 4 个问题页面在 1-2 周内被收录，sitemap 完整性提升。

**工作量**: 2-3 小时

---

### 0.3 全站 GEO 基础优化（结论盒 + FAQ Schema）

**为什么做**: 子木方法论强调 GEO 是 SEO 的下一代范式。AI 搜索会扩散查询（Fan-out��，你的内容需要被 AI 识别、引用。当前内容在语义上"不够好切"——缺结论盒、FAQ Schema 不完整。

**现状**: 
- ✅ 已有 6 页有 FAQPage Schema
- ❌ 剩余 13 页没有 FAQPage
- ❌ 没有页面有明确的"首屏结论盒"
- ⚠️ QA 模块用 `<details>` 实现，AI 渲染可能不稳定
- ❌ 没有 HowTo Schema

**执行步骤**:

**步骤 A：为 13 个页面补 FAQPage Schema（高优先级）**

每个页面加 3-5 个 Q&A，直接嵌入 JSON-LD。FAQ 内容从现有页面内容中提取。

需要加 FAQ 的页面：

| 页面 | 建议 FAQ 主题 |
|------|-------------|
| `/` (Home) | What products does YUJI manufacture? / What is the MOQ? / How to request a quote? |
| `/products/` | How to choose between cups, discs and pads? / Can I get samples? |
| `/oem-odm/` | How long does OEM sampling take? / What info do I need for a quote? |
| `/quality/` | What QC checks do you run? / Do you have ISO certification? |
| `/about/` | Where is YUJI located? / How many markets do you export to? |
| `/contact/` | How fast do you respond? / Can I visit the factory? |
| `/privacy/` | How do you handle my data? / Do you share my information? |
| `products/menstrual-cups/` | 已有 FAQ ✅ |
| `products/menstrual-discs/` | 已有 FAQ ✅ |
| `products/pads-liners/` | 已有 FAQ ✅ |
| `resources/` | What resources are available? |
| `resources/menstrual-cup-oem-moq/` | 已有 ✅ |
| `resources/menstrual-disc-oem-moq/` | 已有 ✅ |
| `resources/menstrual-cup-oem-sourcing-guide/` | 加 FAQ |
| `resources/feminine-care-oem-rfq-checklist/` | 加 FAQ |
| `resources/private-label-sanitary-pads-china/` | 已有 FAQ ✅ |
| `resources/menstrual-cup-vs-disc-oem/` | 已有 FAQ ✅ |
| `applications/` | Which channel is best for my product? |
| `quality/evidence/` | What documents can I request? |

**步骤 B：每个页面加首屏结论盒**

在 `<h1>` 后面紧接 1-2 句结论 + 1-2 个关键数据。结构：

```html
<div class="conclusion-box">
  <p><strong>采购结论</strong>：YUJI 是月经杯、月经盘、卫生巾 OEM/ODM 制造商，位于西安。1,000 件起订，支持私标包装，15-20 个工作日交付。</p>
</div>
```

**步骤 C：将 `<details><summary>` FAQ 改为标准区块**

AI 爬虫对 `<details>` 的渲染存在不确定性。改为 `<div class="faq-item"><h3>问题</h3><p>答案</p></div>`。

**代码变更**:
- 每个 HTML 页面的 `<head>` 中加 FAQPage JSON-LD
- 每个 HTML 页面的 `main` 区域开头加 `.conclusion-box`
- 6 个已有 FAQ 区域：`<details>` → `<div>`

**预期收益**: 
- AI 搜索引用率提升（Clarity AI Visibility 可验证）
- 可能在 AI Overview 中获得曝光
- 百度等国内搜索引擎对 FAQ Schema 有优待

**工作量**: 4-6 小时（13 页加 FAQ + 19 页加结论盒 + 6 页改 details）

---

## P1 — 本月执行

### 1.1 内容扩产：Best + HowTo 内��矩阵

**为什么做**: 子木方法论核心——**Best / VS / Tool 是赚钱的，How-to / Can 是喂 AI 的**。当前资源中心只有 7 篇内容，缺少最重要的 Best 格式和 How-to。

**可做的新内容选题**:

| 优先级 | 内容类型 | 标题 | 预期搜索量 | 竞争度 |
|--------|---------|------|-----------|-------|
| ⭐⭐⭐ | Best | Best Menstrual Cup Manufacturers in China (2026) | 中 | 中低 |
| ⭐⭐⭐ | Best | Best Sanitary Pad OEM Manufacturers in China | 中 | 中低 |
| ⭐⭐⭐ | Best | Best Feminine Care Private Label Suppliers | 中 | 中 |
| ⭐⭐ | VS | Menstrual Cup vs Tampon OEM Comparison | 中 | 低 |
| ⭐⭐ | HowTo | How to Choose a Menstrual Cup OEM Factory | 中高 | 中 |
| ⭐⭐ | HowTo | How to Start a Private Label Sanitary Pad Brand | 中 | 中 |
| ⭐ | Stats | Feminine Care OEM Market Statistics 2026 | 低 | 低 |

**内容模板**（参照子木 Best 格式）：

```markdown
Title: Best Menstrual Cup Manufacturers in China (2026 Edition)
H1: Best Menstrual Cup Manufacturers in China for Private-Label Buyers
结论盒: 1-2 句总评 + 推荐

按场景/需求分类：
- Best for First-Time Buyers
- Best for Premium Private Label
- Best for Large Volume Orders
- Best for Eco/Biodegradable Positioning

对比表：价格、MOQ、质量认证、交付周期、最小定制量
FAQ：5-8 个高频问题
CTA：引导到 Contact 页 + RFQ Checklist
```

**执行步骤**:

| # | 步骤 | 工作量 |
|---|------|--------|
| 1 | 用 Ahrefs/SEMrush 挖关键词确认搜索量 | 半天 |
| 2 | 写 3 篇 Best 文章（各 1500-2000 字） | 3-5 天 |
| 3 | 写 2 篇 HowTo 文章（各 1200-1500 字） | 2-3 天 |
| 4 | 加到 resources/ 目录，加内链引导 | 半天 |
| 5 | 更新 sitemap，提交 GSC | 30 分钟 |

**代码变更**: 新增 5 个 HTML 文件，加内链到各个页面

**预期收益**: 
- Best 格式文章在 SERP 中天然有机会获得 Featured Snippet
- GEO 中 Best 格式被 AI 引用的概率最高
- 转化路径清晰：Best → 对比 → Contact

**工作量**: 5-8 天

---

### 1.2 中文站启动（/zh/ 多语言版本）

**为什么做**: 工厂在西安，大量中国买家的 B2B 搜索需求未覆盖。"月经杯代工厂"、"卫生巾OEM厂家"、"私护产品贴牌"都是高价值中文长尾。子木方法论：**"别迷信全球化，先打穿一个国家"**。

**执行步骤**:

| # | 步骤 | 说明 |
|---|------|------|
| 1 | 选 5 个核心页面先翻译 | Home / Products / OEM-ODM / Quality / Contact |
| 2 | 创建 `/zh/` 目录结构 | `zh/index.html`, `zh/products/index.html` 等 |
| 3 | 每个页面加 `hreflang` 标签 | `<link rel="alternate" hreflang="en" href="...">` + `<link rel="alternate" hreflang="zh" href="...">` |
| 4 | 中文版内容需重新面向国内买家 | 不是翻译，是重新写——突出"西安工厂可参观"、"国内沟通无障碍" |
| 5 | Header 加语言切换器 | 一个简单的 EN / 中文 切��� |
| 6 | 提交到 Baidu（如有资源） | Baidu Webmaster Tools |

**技术要求**:
- `lang="zh-CN"` 在 `<html>` 标签
- `hreflang="zh"` 在 header 中
- 独立 URL 路径 `/zh/`（非子域名，非参数）
- 中文版 Schema 同样需要结构化数据

**预期收益**: 中文采购搜索流量，国内客户转化

**工作量**: 2-3 天（核心 5 页）

---

### 1.3 信任信号增强

**为什么做**: 子木方法论 — **Evidence beats claims**。目前网站有 Privacy 但缺 Terms of Service，缺少客户案例，缺少社媒入口。

**执行步骤**:

| # | 步骤 | 文件/说明 |
|---|------|---------|
| 1 | 创建 Terms of Service 页面 | `terms/index.html`，参考 Privacy 页格式 |
| 2 | Footer 加 LinkedIn 入口 | `https://www.linkedin.com/company/yujihealth` |
| 3 | 收集客户 logo 做案例墙 | 如果有合作品牌，在 Home 页 `/oem-odm/` 或新页面加 |
| 4 | Home 页加"信任条" | 公司成立时间、工厂面积、出口国家数——已有但不突出 |
| 5 | 在 Contact 页面加 Google Maps 嵌入工厂位置 | 增强地理位置真实性 |
| 6 | 如果可能，获取 G2 / Trustpilot 等第三方评价 | B2B 工厂站较难但可尝试 |

**代码变更**: 
- 新增 `terms/index.html`
- 修改 footer（所有页面）：加 LinkedIn 链接
- 修改首页/contact：加信任条、地图

**预期收益**: 提升 E-E-A-T 评分，增加买家信任度

**工作量**: 1-2 天

---

## P2 — 季度内推进

### 2.1 外链建设启动

**为什么做**: 当前外链为 0，这是排名最大的瓶颈。外链是信任投票系统——子木方法论。

**现状**: 
- Backlink prospects CSV 已有 10+ 个目标
- 零外链实际完成
- 竞品（DR 30-50 同行）平均 50-200 条外链

**执行步骤**:

| 阶段 | 渠道 | 目标数量 | 时间 |
|------|------|---------|------|
| 第一阶段 | B2B 目录站 | 5-10 | 第 1-2 周 |
| 第二阶段 | AI 导航站 | 5-10 | 第 3-4 周 |
| 第三阶段 | PR 文章/行业媒体 | 2-5 | 第 5-8 周 |
| 第四阶段 | Review/Listicle 合作 | 3-5 | 第 9-12 周 |

**第一阶段具体目标**:

| 目标 | 类型 | 优先级 | 操作 |
|------|------|--------|------|
| Alibaba 供应商页 | B2B 目录 | ⭐⭐⭐ | 注册/认领 YUJI 供应商账号 |
| Made-in-China | B2B 目录 | ⭐⭐⭐ | 注册公司 Profile |
| Global Sources | B2B 目录 | ⭐⭐ | 检查是否有已有账号 |
| Qmed+ | 医疗目录 | ⭐⭐ | 需要医学证据，先准备材料 |
| INDA 非织造布目录 | 行业目录 | ⭐⭐ | 准备目录申请表 |
| Hygienix 展会 | 展会曝光 | ⭐ | 评估参展 ROI |

**子木外链节奏模型**:

```
页面在 SERP 第二页 → 投 5-10 条 → 观察 2 周
页面在 8-9 名    → 投 10-20 条 → 观察 2 周
进入 Top5        → 停止外链投入 → 转为观察
```

**预期收益**: 第一轮外链可带来 DR 从 0 到 10-15，2-4 个核心词进入 SERP 前 20。

**工作量**: 持续 3 个月，每周 2-4 小时

---

### 2.2 转化数据闭环 + 自动化周报

**为什么做**: 子木方法论——**每 2 周环比看转化数据**，用转化率倒推外链预算。当前没有数据闭环。

**前提**: P0.1 完成后才开始有数据。

**执行步骤**:

| # | 步骤 | 工具/方法 |
|---|------|----------|
| 1 | 确认 Plausible 数据正常收集 | Plausible dashboard |
| 2 | 建立目标页面 URL 维度追踪 | Plausible 目标页面配置 |
| 3 | 配置 Clarity AI Visibility 周报邮件 | Clarity → AI Visibility → 定期报告 |
| 4 | 建立 GSC 查询+PageSpeed 自动化周报 | 现有 `scripts/` 已支持，配置 cron/automation |
| 5 | 每 2 周检查：流量→表单提交转化率 | 手工或自动 |
| 6 | 用转化数据倒推下一轮外链投给哪个页面 | 子木公式：高转化页优先投 |

**数据看板**:

```
Plausible:
  - 页面访问量（按 URL）
  - 跳出率
  - 会话时长

Clarity:
  - AI Visibility → Bot Activity
  - AI Visibility → AI Citations
  - 热图（高流量页面）

GSC:
  - 收录状态
  - 查询量/点击率变化
  - 核心网页指标

转化:
  - 按 URL 维度的表单提交率 = 提交数 / 独立访客数
  - 按来源的转化率（Organic / Direct / Referral）
```

**预期收益**: 从"盲打"到"数据驱动"，知道每一分钱花在哪。

**工作量**: 2-4 小时配���，之后每周 30 分钟看数据

---

### 2.3 程序化 SEO 探索

**为什么做**: 子木方法论 — **pSEO = 模板设计 × 结构化内容 × 自动化**。当资源内容矩阵（Best/HowTo）验证成功后，可以考虑用模板批量生成。

**可能的方向**:

| 方向 | 说明 | 可行性 |
|------|------|--------|
| 产品×场景 组合页 | "Menstrual Cup for [场景]"（sports / travel / heavy flow…） | ⭐⭐⭐ 高 |
| 产品×国家 组合页 | "Menstrual Cup OEM for [国家]"（USA / Canada / UK / Australia…） | ⭐⭐ 中 |
| MOQ × 产品组合 | 多产品线组合的 MOQ 页面 | ⭐⭐ 中 |

**前提条件**:
1. P1 的内容扩产已验证：Best 内容有搜索流量
2. 有足够的数据支撑选品决策
3. AI 内容质量可控

**建议**: 先不做，等 P1 内容跑 2-4 周有了数据再评估。

---

## 附录：时间线总览

```
Week 1-2 (P0)              Week 3-6 (P1)              Week 7-12 (P2)
┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│ 0.1 Analytics     │      │ 1.1 内容扩产      │      │ 2.1 外链建设      │
│ 0.2 GSC 修复      │      │ 1.2 中文站        │      │ 2.2 数据闭环      │
│ 0.3 GEO 优化      │ ──→  │ 1.3 信任信号      │ ──→  │ 2.3 pSEO 探索     │
└──────────────────┘      └──────────────────┘      └──────────────────┘
      ~1 周                    ~3-4 周                   ~4-8 周
```

**资源投入估算**:

| 阶段 | 开发工时 | 内容写作 | 外链运营 |
|------|---------|---------|---------|
| P0 | 4-6 小时 | 0 | 0 |
| P1 | 3-5 天 | 5-8 天 | 0 |
| P2 | 1-2 天 | 1-2 天 | 每周 2-4 小时 |

**关键里程碑**:
- ✅ Week 1: Analytics + Clarity 上线，数据开始收集
- ✅ Week 2: 19/19 页面全部被 GSC 收录
- ✅ Week 3: GEO 优化完成，AI Visibility 基线已建立
- ✅ Week 4: 5 篇新内容上线（3 Best + 2 HowTo）
- ✅ Week 5: 中文站 5 页上线
- ✅ Week 6-8: 外链 10-20 条完成
- ✅ Week 10-12: 按转化数据评估，调整策略
