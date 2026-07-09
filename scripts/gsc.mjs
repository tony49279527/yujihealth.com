import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
loadEnv(path.join(root, ".env.local"));
loadEnv(path.join(root, ".env"));

const config = JSON.parse(fs.readFileSync(path.join(root, "config/seo-targets.json"), "utf8"));
const command = process.argv[2] || "sites";
const args = parseArgs(process.argv.slice(3));
const siteUrl = process.env.GSC_SITE_URL || config.gscSiteUrl;
const sitemapUrl = process.env.GSC_SITEMAP_URL || config.sitemapUrl;

const reportDir = path.join(root, "reports/gsc");
fs.mkdirSync(reportDir, { recursive: true });

try {
  if (command === "sites") await listSites();
  else if (command === "sitemaps") await listSitemaps();
  else if (command === "submit-sitemap") await submitSitemap();
  else if (command === "query") await querySearchAnalytics();
  else if (command === "inspect") await inspectUrl();
  else {
    console.error("Unknown command. Use: sites | sitemaps | submit-sitemap | query | inspect");
    process.exit(1);
  }
} catch (error) {
  console.error(error.message);
  if (/403|insufficient|PERMISSION_DENIED/i.test(error.message)) {
    console.error("GSC auth needs a verified property plus webmasters scope, or a service account added to Search Console.");
  }
  process.exit(1);
}

async function listSites() {
  const json = await api("GET", "https://searchconsole.googleapis.com/webmasters/v3/sites");
  const sites = json.siteEntry || [];
  console.log(sites.length ? JSON.stringify(sites, null, 2) : "No Search Console sites visible to this credential.");
}

async function listSitemaps() {
  const endpoint = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps`;
  const json = await api("GET", endpoint);
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const reportPath = path.join(reportDir, `gsc-sitemaps-${stamp}.json`);
  fs.writeFileSync(reportPath, JSON.stringify({ siteUrl, sitemaps: json.sitemap || [] }, null, 2));
  console.log(`Sitemaps: ${json.sitemap?.length || 0}`);
  console.log(`Report written: ${path.relative(root, reportPath)}`);
  console.log(JSON.stringify(json.sitemap || [], null, 2));
}

async function submitSitemap() {
  const endpoint = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`;
  await api("PUT", endpoint);
  console.log(`Submitted sitemap: ${sitemapUrl}`);
}

async function querySearchAnalytics() {
  const endDate = args.endDate || isoDate(new Date(Date.now() - 3 * 24 * 60 * 60 * 1000));
  const startDate = args.startDate || isoDate(new Date(Date.parse(endDate) - 27 * 24 * 60 * 60 * 1000));
  const body = {
    startDate,
    endDate,
    dimensions: split(args.dimensions || "query,page"),
    rowLimit: Number(args.rowLimit || 25000)
  };
  const endpoint = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`;
  const json = await api("POST", endpoint, body);
  const rows = json.rows || [];
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const reportPath = path.join(reportDir, `gsc-query-${stamp}.json`);
  fs.writeFileSync(reportPath, JSON.stringify({ siteUrl, request: body, rows }, null, 2));
  console.log(`Rows: ${rows.length}`);
  console.log(`Report written: ${path.relative(root, reportPath)}`);
  for (const row of rows.slice(0, 20)) {
    console.log(`${row.clicks || 0} clicks | ${row.impressions || 0} impressions | ${row.ctr || 0} ctr | ${row.position || 0} avg | ${row.keys?.join(" | ")}`);
  }
}

async function inspectUrl() {
  const inspectionUrl = args.url || new URL("/", config.siteUrl).toString();
  const body = { inspectionUrl, siteUrl, languageCode: "en-US" };
  const json = await api("POST", "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect", body);
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const reportPath = path.join(reportDir, `gsc-inspect-${stamp}.json`);
  fs.writeFileSync(reportPath, JSON.stringify({ siteUrl, inspectionUrl, result: json }, null, 2));
  console.log(`Inspection written: ${path.relative(root, reportPath)}`);
  console.log(JSON.stringify(json.inspectionResult?.indexStatusResult || json, null, 2));
}

async function api(method, url, body) {
  const token = await getAccessToken();
  const quotaProject = getQuotaProject();
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  };
  if (quotaProject) headers["x-goog-user-project"] = quotaProject;
  const response = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });
  const json = await response.json().catch(() => ({}));
  if (!response.ok || json.error) {
    const message = json.error?.message || `${response.status} ${response.statusText}`;
    throw new Error(`GSC API ${method} ${url} failed: ${response.status} ${message}`);
  }
  return json;
}

async function getAccessToken() {
  if (process.env.GSC_ACCESS_TOKEN) return process.env.GSC_ACCESS_TOKEN;

  const serviceAccountJson = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (serviceAccountJson || process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    const { GoogleAuth } = await import("google-auth-library");
    const auth = new GoogleAuth({
      credentials: serviceAccountJson ? JSON.parse(serviceAccountJson) : undefined,
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS || undefined,
      scopes: ["https://www.googleapis.com/auth/webmasters"]
    });
    const client = await auth.getClient();
    const token = await client.getAccessToken();
    return token.token || token;
  }

  for (const command of [
    ["gcloud", ["auth", "application-default", "print-access-token"]],
    ["gcloud", ["auth", "print-access-token"]]
  ]) {
    try {
      return execFileSync(command[0], command[1], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
    } catch {}
  }
  throw new Error("No GSC credential found. Configure ADC, GSC_ACCESS_TOKEN, or GOOGLE_APPLICATION_CREDENTIALS.");
}

function getQuotaProject() {
  if (process.env.GOOGLE_CLOUD_QUOTA_PROJECT) return process.env.GOOGLE_CLOUD_QUOTA_PROJECT;
  const adcPath = path.join(process.env.HOME || "", ".config/gcloud/application_default_credentials.json");
  try {
    const adc = JSON.parse(fs.readFileSync(adcPath, "utf8"));
    if (adc.quota_project_id) return adc.quota_project_id;
  } catch {}
  try {
    return execFileSync("gcloud", ["config", "get-value", "project"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return "";
  }
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

function parseArgs(values) {
  return Object.fromEntries(values.map((arg) => {
    const [key, ...rest] = arg.replace(/^--/, "").split("=");
    return [key, rest.length ? rest.join("=") : "true"];
  }));
}

function split(value) {
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}
