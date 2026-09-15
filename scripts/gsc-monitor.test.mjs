import test from "node:test";
import assert from "node:assert/strict";
import { buildMonitoringSummary, percentChange, summarizeRows } from "./lib/gsc-monitor.mjs";

const monitoring = {
  minBaselineImpressions: 100,
  minBaselineClicks: 5,
  thresholds: { impressionsDropPct: 40, clicksDropPct: 50 }
};

test("summarizeRows calculates totals, CTR, and impression-weighted position", () => {
  assert.deepEqual(summarizeRows([
    { clicks: 2, impressions: 20, position: 4 },
    { clicks: 1, impressions: 10, position: 10 }
  ]), { clicks: 3, impressions: 30, ctr: 0.1, position: 6 });
});

test("percentChange returns null when the comparison baseline is zero", () => {
  assert.equal(percentChange(10, 0), null);
});

test("monitor flags material declines when the baseline is large enough", () => {
  const result = buildMonitoringSummary({
    currentRows: [{ clicks: 2, impressions: 50, position: 9 }],
    previousRows: [{ clicks: 10, impressions: 200, position: 7 }],
    monitoring
  });
  assert.deepEqual(result.alerts.map((alert) => alert.metric), ["impressions", "clicks"]);
});

test("monitor suppresses volatile alerts when the baseline is too small", () => {
  const result = buildMonitoringSummary({
    currentRows: [{ clicks: 0, impressions: 2, position: 20 }],
    previousRows: [{ clicks: 1, impressions: 10, position: 10 }],
    monitoring
  });
  assert.deepEqual(result.alerts, []);
});
