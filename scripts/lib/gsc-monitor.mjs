export function summarizeRows(rows = []) {
  const totals = rows.reduce((result, row) => {
    const impressions = Number(row.impressions || 0);
    result.clicks += Number(row.clicks || 0);
    result.impressions += impressions;
    result.weightedPosition += Number(row.position || 0) * impressions;
    return result;
  }, { clicks: 0, impressions: 0, weightedPosition: 0 });

  return {
    clicks: totals.clicks,
    impressions: totals.impressions,
    ctr: totals.impressions ? totals.clicks / totals.impressions : 0,
    position: totals.impressions ? totals.weightedPosition / totals.impressions : 0
  };
}

export function percentChange(current, previous) {
  if (!previous) return null;
  return ((current - previous) / previous) * 100;
}

export function buildMonitoringSummary({ currentRows, previousRows, monitoring }) {
  const current = summarizeRows(currentRows);
  const previous = summarizeRows(previousRows);
  const changes = {
    clicksPct: percentChange(current.clicks, previous.clicks),
    impressionsPct: percentChange(current.impressions, previous.impressions),
    ctrPct: percentChange(current.ctr, previous.ctr),
    positionAbsolute: current.position - previous.position
  };
  const alerts = [];

  if (
    previous.impressions >= monitoring.minBaselineImpressions &&
    changes.impressionsPct !== null &&
    changes.impressionsPct <= -monitoring.thresholds.impressionsDropPct
  ) {
    alerts.push({ metric: "impressions", changePct: changes.impressionsPct, thresholdPct: -monitoring.thresholds.impressionsDropPct });
  }
  if (
    previous.impressions >= monitoring.minBaselineImpressions &&
    previous.clicks >= monitoring.minBaselineClicks &&
    changes.clicksPct !== null &&
    changes.clicksPct <= -monitoring.thresholds.clicksDropPct
  ) {
    alerts.push({ metric: "clicks", changePct: changes.clicksPct, thresholdPct: -monitoring.thresholds.clicksDropPct });
  }

  return { current, previous, changes, alerts };
}
