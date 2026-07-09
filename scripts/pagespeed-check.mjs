import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
loadEnv(path.join(root, ".env.local"));
loadEnv(path.join(root, ".env"));

const config = JSON.parse(fs.readFileSync(path.join(root, "config/seo-targets.json"), "utf8"));
const args = new Map(process.argv.slice(2).map((arg) => {
  const [key, ...rest] = arg.replace(/^--/, "").split("=");
  return [key, rest.length ? rest.join("=") : "true"];
}));

const apiKey = process.env.PSI_API_KEY || "";
const selectedStrategies = splitArg(args.get("strategy")) || config.strategies;
const selectedLabels = splitArg(args.get("only"));
const failOnThreshold = args.get("fail-on-threshold") === "true";
const failOnError = args.get("fail-on-error") === "true";
const urls = selectedLabels
  ? config.urls.filter((item) => selectedLabels.includes(item.label) || selectedLabels.includes(item.path))
  : config.urls;

if (!apiKey) {
  console.warn("PSI_API_KEY is not set. The public API is heavily rate-limited; configure .env.local or CI secrets.");
}

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const reportDir = path.join(root, "reports/pagespeed");
fs.mkdirSync(reportDir, { recursive: true });

const rows = [];
const failures = [];

for (const item of urls) {
  const target = new URL(item.path, config.siteUrl).toString();
  for (const strategy of selectedStrategies) {
    let result;
    try {
      result = await runPageSpeed(target, strategy);
    } catch (error) {
      const message = error.message || String(error);
      failures.push(`${item.label} ${strategy} ${message}`);
      rows.push({ label: item.label, url: target, strategy, error: message });
      console.error(`ERROR ${strategy.padEnd(7)} ${item.label}: ${message}`);
      continue;
    }
    const categories = result.lighthouseResult.categories;
    const row = {
      label: item.label,
      url: target,
      strategy,
      fetchTime: result.lighthouseResult.fetchTime,
      performance: score(categories.performance),
      accessibility: score(categories.accessibility),
      bestPractices: score(categories["best-practices"]),
      seo: score(categories.seo),
      lcp: auditValue(result, "largest-contentful-paint"),
      inp: auditValue(result, "interaction-to-next-paint"),
      cls: auditValue(result, "cumulative-layout-shift"),
      tbt: auditValue(result, "total-blocking-time"),
      fieldData: summarizeExperience(result.loadingExperience),
      originFieldData: summarizeExperience(result.originLoadingExperience),
      opportunities: auditGroup(result, "load-opportunities"),
      diagnostics: auditGroup(result, "diagnostics")
    };
    rows.push(row);
    for (const [name, threshold] of Object.entries(config.thresholds)) {
      const value = row[name === "best-practices" ? "bestPractices" : name];
      if (value != null && value < threshold) {
        failures.push(`${row.label} ${strategy} ${name} ${Math.round(value * 100)} < ${Math.round(threshold * 100)}`);
      }
    }
    console.log(formatRow(row));
  }
}

const reportPath = path.join(reportDir, `pagespeed-${stamp}.json`);
fs.writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), rows, failures }, null, 2));
console.log(`Report written: ${path.relative(root, reportPath)}`);

if ((failOnThreshold || failOnError) && failures.length) {
  console.error(`Threshold failures:\n${failures.join("\n")}`);
  process.exit(1);
}

async function runPageSpeed(url, strategy) {
  const endpoint = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
  endpoint.searchParams.set("url", url);
  endpoint.searchParams.set("strategy", strategy);
  for (const category of config.categories) endpoint.searchParams.append("category", category);
  if (apiKey) endpoint.searchParams.set("key", apiKey);

  let lastError;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await fetch(endpoint);
      const json = await response.json();
      if (!response.ok || json.error) {
        const message = json.error?.message || `${response.status} ${response.statusText}`;
        throw new Error(`PageSpeed failed for ${url} (${strategy}): ${message}`);
      }
      return json;
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 3000));
    }
  }
  throw lastError;
}

function loadEnv(file) {
  if (!fs.existsSync(file)) return;
  for (const rawLine of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    const value = line.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (!(key in process.env)) process.env[key] = value;
  }
}

function splitArg(value) {
  return value && value !== "true" ? value.split(",").map((item) => item.trim()).filter(Boolean) : null;
}

function score(category) {
  return typeof category?.score === "number" ? category.score : null;
}

function auditValue(result, id) {
  const audit = result.lighthouseResult.audits[id];
  return audit ? audit.displayValue || audit.numericValue || null : null;
}

function pct(value) {
  return value == null ? "n/a" : `${Math.round(value * 100)}`;
}

function formatRow(row) {
  return [
    row.strategy.padEnd(7),
    row.label.padEnd(34),
    `perf ${pct(row.performance).padStart(3)}`,
    `seo ${pct(row.seo).padStart(3)}`,
    `a11y ${pct(row.accessibility).padStart(3)}`,
    `bp ${pct(row.bestPractices).padStart(3)}`,
    `LCP ${row.lcp || "n/a"}`,
    `INP ${row.inp || fieldMetric(row.fieldData, "inp") || fieldMetric(row.originFieldData, "inp") || "n/a"}`,
    `CLS ${row.cls || "n/a"}`,
    `field ${row.fieldData?.category || row.originFieldData?.category || "n/a"}`
  ].join("  ");
}

function summarizeExperience(experience) {
  if (!experience) return null;
  const metrics = experience.metrics || {};
  return {
    category: experience.overall_category || null,
    id: experience.id || null,
    initialUrl: experience.initial_url || null,
    metrics: {
      lcp: summarizeMetric(metrics.LARGEST_CONTENTFUL_PAINT_MS),
      inp: summarizeMetric(metrics.INTERACTION_TO_NEXT_PAINT),
      cls: summarizeMetric(metrics.CUMULATIVE_LAYOUT_SHIFT_SCORE)
    }
  };
}

function summarizeMetric(metric) {
  if (!metric) return null;
  return {
    percentile: metric.percentile,
    category: metric.category,
    distributions: metric.distributions || []
  };
}

function fieldMetric(experience, key) {
  const metric = experience?.metrics?.[key];
  if (!metric || metric.percentile == null) return "";
  if (key === "cls") return String(metric.percentile);
  return `${metric.percentile} ms`;
}

function auditGroup(result, group) {
  const audits = result.lighthouseResult.audits || {};
  const refs = result.lighthouseResult.categories.performance?.auditRefs || [];
  return refs
    .filter((ref) => ref.group === group)
    .map((ref) => {
      const audit = audits[ref.id];
      if (!audit || audit.scoreDisplayMode === "notApplicable" || audit.score === 1) return null;
      return {
        id: ref.id,
        title: audit.title,
        score: audit.score,
        displayValue: audit.displayValue || null,
        numericValue: audit.numericValue ?? null,
        numericUnit: audit.numericUnit || null
      };
    })
    .filter(Boolean)
    .slice(0, 6);
}
