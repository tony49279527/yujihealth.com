#!/usr/bin/env node

import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CONFIG_PATH = path.join(ROOT, "config", "seo-targets.json");
const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

async function readText(relativePath) {
  return fs.readFile(path.join(ROOT, relativePath), "utf8");
}

async function exists(relativePath) {
  try {
    await fs.access(path.join(ROOT, relativePath));
    return true;
  } catch {
    return false;
  }
}

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((match) => match[0]);
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, "i"));
  return match ? match[2].trim() : null;
}

function metaContent(html, name) {
  const tag = tags(html, "meta").find((candidate) => attr(candidate, "name")?.toLowerCase() === name.toLowerCase());
  return tag ? attr(tag, "content") : null;
}

function linkByRel(html, rel) {
  return tags(html, "link").find((candidate) => attr(candidate, "rel")?.split(/\s+/).map((part) => part.toLowerCase()).includes(rel));
}

function getCanonical(html) {
  const tag = linkByRel(html, "canonical");
  return tag ? attr(tag, "href") : null;
}

function getAlternateLinks(html) {
  return tags(html, "link")
    .filter((candidate) => attr(candidate, "rel")?.split(/\s+/).map((part) => part.toLowerCase()).includes("alternate"))
    .map((candidate) => ({ hreflang: attr(candidate, "hreflang"), href: attr(candidate, "href") }))
    .filter((entry) => entry.hreflang && entry.href);
}

function parseJsonLd(html, label) {
  const parsed = [];
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
  for (const [index, match] of scripts.entries()) {
    if (attr(match[1], "type")?.toLowerCase() !== "application/ld+json") continue;
    try {
      parsed.push(JSON.parse(match[2]));
    } catch (error) {
      fail(`${label}: invalid JSON-LD in script ${index + 1} (${error.message})`);
    }
  }
  return parsed;
}

function schemaNodes(documents) {
  return documents.flatMap((document) => (Array.isArray(document?.["@graph"]) ? document["@graph"] : [document]));
}

function hasSchemaType(node, type) {
  return Array.isArray(node?.["@type"]) ? node["@type"].includes(type) : node?.["@type"] === type;
}

function fileForRoute(route) {
  if (route === "/") return "index.html";
  if (/\.[a-z0-9]+$/i.test(route)) return route.replace(/^\//, "");
  return path.join(route.replace(/^\//, ""), "index.html");
}

function localHrefToFile(href) {
  if (!href || href.startsWith("#") || /^(?:mailto:|tel:|javascript:|data:)/i.test(href)) return null;

  let pathname = href;
  if (/^https?:\/\//i.test(href)) {
    try {
      const url = new URL(href);
      if (url.hostname !== "yujihealth.com") return null;
      pathname = url.pathname;
    } catch {
      return null;
    }
  }

  if (!pathname.startsWith("/")) return null;
  pathname = pathname.split(/[?#]/, 1)[0] || "/";
  return fileForRoute(pathname);
}

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

async function auditPage({ siteUrl, path: route, label }) {
  const sourceFile = fileForRoute(route);
  if (!(await exists(sourceFile))) {
    fail(`${label}: expected source file missing (${sourceFile})`);
    return;
  }

  const html = await readText(sourceFile);
  const title = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1].trim();
  const description = metaContent(html, "description");
  const canonical = getCanonical(html);
  const language = attr(tags(html, "html")[0] ?? "", "lang");
  const robots = metaContent(html, "robots")?.toLowerCase() ?? "";
  const h1Count = tags(html, "h1").length;
  const expectedCanonical = `${siteUrl}${route}`;

  if (!title) fail(`${label}: missing title`);
  if (title && title.length > 70) warn(`${label}: title is longer than 70 characters (${title.length})`);
  if (!description) fail(`${label}: missing meta description`);
  const minimumDescriptionLength = language?.toLowerCase().startsWith("zh") ? 20 : 50;
  if (description && description.length < minimumDescriptionLength) warn(`${label}: meta description is very short (${description.length})`);
  if (!language) fail(`${label}: missing html lang`);
  if (canonical !== expectedCanonical) fail(`${label}: canonical must be ${expectedCanonical}, found ${canonical ?? "none"}`);
  if (h1Count !== 1) fail(`${label}: expected exactly one H1, found ${h1Count}`);
  if (!robots.includes("index") || robots.includes("noindex")) fail(`${label}: sitemap page must be indexable (robots=${robots || "missing"})`);

  const jsonLd = parseJsonLd(html, label);
  if (jsonLd.length === 0) fail(`${label}: missing JSON-LD`);

  for (const image of tags(html, "img")) {
    if (attr(image, "alt") === null) fail(`${label}: image is missing an alt attribute`);
  }

  for (const anchor of tags(html, "a")) {
    const href = attr(anchor, "href");
    const targetFile = localHrefToFile(href);
    if (targetFile && !(await exists(targetFile))) fail(`${label}: broken internal link ${href} (${targetFile} is missing)`);
  }

  if (route.startsWith("/products/") && route !== "/products/") {
    const product = schemaNodes(jsonLd).find((node) => hasSchemaType(node, "Product"));
    if (!product) {
      fail(`${label}: missing Product structured data`);
    } else {
      for (const property of ["name", "description", "image", "url", "brand"]) {
        if (!product[property]) fail(`${label}: Product structured data missing ${property}`);
      }
      if (product?.brand?.name !== "YUJI") fail(`${label}: Product structured data must name the YUJI brand`);
      if (product?.url !== expectedCanonical) fail(`${label}: Product structured data URL must match canonical`);
    }
  }
}

async function auditLanguagePairs(siteUrl) {
  const pairs = [
    ["/", "/zh/"],
    ["/products/", "/zh/products/"],
    ["/oem-odm/", "/zh/oem-odm/"],
    ["/quality/", "/zh/quality/"],
    ["/contact/", "/zh/contact/"],
  ];

  for (const [englishRoute, chineseRoute] of pairs) {
    for (const route of [englishRoute, chineseRoute]) {
      const html = await readText(fileForRoute(route));
      const alternates = getAlternateLinks(html);
      const english = alternates.find((entry) => entry.hreflang === "en")?.href;
      const chinese = alternates.find((entry) => entry.hreflang === "zh")?.href;
      if (english !== `${siteUrl}${englishRoute}`) fail(`${route}: missing reciprocal English hreflang`);
      if (chinese !== `${siteUrl}${chineseRoute}`) fail(`${route}: missing reciprocal Chinese hreflang`);
    }
  }
}

async function auditSitemap(siteUrl, targets) {
  const sitemap = await readText("sitemap.xml");
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
  const expected = targets.map((target) => `${siteUrl}${target.path}`);
  if (locations.length !== expected.length) fail(`sitemap.xml: expected ${expected.length} URLs, found ${locations.length}`);
  for (const url of expected) {
    if (!locations.includes(url)) fail(`sitemap.xml: missing ${url}`);
  }

  const robots = await readText("robots.txt");
  if (!robots.includes(`${siteUrl}/sitemap.xml`)) fail("robots.txt: missing canonical sitemap URL");
}

async function auditDownloads() {
  const sourcePdf = "output/pdf/yuji-feminine-care-oem-line-sheet.pdf";
  const publicPdf = "downloads/yuji-feminine-care-oem-line-sheet.pdf";
  for (const file of [sourcePdf, publicPdf, "downloads/yuji-feminine-care-rfq-checklist.txt", "downloads/yuji-qc-release-checklist-sample.txt"]) {
    if (!(await exists(file))) fail(`download asset missing: ${file}`);
  }

  const [source, published] = await Promise.all([
    fs.readFile(path.join(ROOT, sourcePdf)),
    fs.readFile(path.join(ROOT, publicPdf)),
  ]);
  if (source.length < 10_000 || published.length < 10_000) fail("line-sheet PDF is unexpectedly small");
  if (sha256(source) !== sha256(published)) fail("line-sheet source and published PDF differ");

  const generator = await readText("scripts/generate-line-sheet.py");
  const prohibited = [
    "3,200 sq m",
    "3M+",
    "30+",
    "medical-grade",
    "1,000 pcs",
    "10,000 pcs",
    "15-20 working days",
    "2-3 years",
    "1-2 business days",
  ];
  for (const phrase of prohibited) {
    if (generator.toLowerCase().includes(phrase.toLowerCase())) fail(`line-sheet generator contains an unapproved public claim: ${phrase}`);
  }
}

async function audit404() {
  const html = await readText("404.html");
  if (metaContent(html, "robots")?.toLowerCase() !== "noindex, follow") fail("404.html: expected noindex, follow robots directive");
  for (const requiredPath of ["/products/", "/quality/evidence/", "/contact/"]) {
    if (!html.includes(`href=\"${requiredPath}\"`)) fail(`404.html: missing recovery link to ${requiredPath}`);
  }
}

async function auditPublicEvidenceBoundaries(targets) {
  const publicFiles = [...new Set(targets.map((target) => fileForRoute(target.path)))];
  publicFiles.push("llms.txt");
  const prohibited = [
    "LSR silicone options",
    "quoted LSR",
    "20-30 ml",
    "20–30 ml",
    "50-65 ml",
    "50–65 ml",
    "150-350 mm",
    "150–350 mm",
    "S/M/L sizing",
    "S/M/L 尺寸"
  ];

  for (const file of publicFiles) {
    const content = await readText(file);
    for (const phrase of prohibited) {
      if (content.toLowerCase().includes(phrase.toLowerCase())) {
        fail(`${file}: contains an unapproved fixed public specification: ${phrase}`);
      }
    }
  }
}

async function main() {
  const config = JSON.parse(await readText("config/seo-targets.json"));
  const siteUrl = config.siteUrl.replace(/\/$/, "");
  const targets = config.urls;

  await Promise.all(targets.map((target) => auditPage({ ...target, siteUrl })));
  await auditLanguagePairs(siteUrl);
  await auditSitemap(siteUrl, targets);
  await auditDownloads();
  await audit404();
  await auditPublicEvidenceBoundaries(targets);

  console.log(`Audited ${targets.length} sitemap pages, language pairs, internal links, JSON-LD, public evidence boundaries, downloads, sitemap, robots, and 404 recovery.`);
  if (warnings.length) console.warn(`Warnings (${warnings.length}):\n${warnings.map((message) => `- ${message}`).join("\n")}`);
  if (errors.length) {
    console.error(`Errors (${errors.length}):\n${errors.map((message) => `- ${message}`).join("\n")}`);
    process.exitCode = 1;
  } else {
    console.log("SEO static audit passed.");
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
