import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the completed YUJI procurement page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Feminine Care OEM Manufacturer \| YUJI Menstrual Cups &amp; Pads<\/title>/i);
  assert.match(html, /Feminine care OEM manufacturer for global brands/i);
  assert.match(html, /Product scope/i);
  assert.match(html, /OEM &amp; ODM process/i);
  assert.match(html, /RFQ &amp; contact/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("uses ordinary crawlable links to the supplied YUJI URLs", async () => {
  const html = await (await render()).text();
  for (const url of [
    "https://yujihealth.com/",
    "https://yujihealth.com/about/",
    "https://yujihealth.com/products/menstrual-cups/",
    "https://yujihealth.com/contact/",
  ]) assert.match(html, new RegExp(`href=["']${url.replaceAll("/", "\\/")}["']`));
  assert.doesNotMatch(html, /rel=["'][^"']*(?:nofollow|ugc|sponsored)/i);
});
