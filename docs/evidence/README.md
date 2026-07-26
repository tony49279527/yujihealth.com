# YUJI 公开证据包工作区

## 这三项分别是什么

1. **Evidence 脱敏证书 / QC 样本上线**  
   把真实证书、检测摘要、QC 放行表等做成**可公开的脱敏样页**，挂在 `/quality/evidence/`，让买家和目录审核方不用先发邮件就能看到「文件长什么样、覆盖什么范围」。  
   **不能伪造证书。** 仓库里目前没有可上线的证书原件。

2. **目录外联**  
   向 Femtech Insider、INDA 等行业目录提交准确公司资料与官网链接，获得第三方品牌提及（不是买链）。

3. **Analytics**  
   在站上装访问统计，看落地页、CTA、到 Contact 的路径；当前只有 GSC，看不到站内行为。

## 你需要立刻提供的材料（Evidence）

请把下列文件放到本目录的 `inbox/`（或发我本地路径），并注明「可公开脱敏」或「仅销售私发」：

| 优先级 | 文件 | 用途 |
| --- | --- | --- |
| P0 | 1–2 份有效体系/产品相关证书 PDF（ISO 等） | 脱敏后封面样页 |
| P0 | 1 页真实 QC release 或终检表（可打码批次号） | QC 样页 |
| P1 | 材料规格书封面或摘要 1 页 | Material 样页 |
| P1 | 工厂/QC 实拍 2–4 张（可公开） | 页面配图 |
| P2 | 包装 BOM / carton data 样页 | Packaging 样页 |

每份文件请附：签发机构、标准、主体名称、范围、签发日、到期日、是否允许挂官网。

收到后我会：脱敏 → 写入 `evidence-manifest.csv` → 挂到 Evidence 页 → 更新 sitemap。

## 当前已可公开（无证书原件也能上）

- `downloads/yuji-qc-release-checklist-sample.txt`：QC 放行**字段格式示意**（明确标注 illustrative，不是真实批次放行单）。
- Line sheet PDF（已有）。
