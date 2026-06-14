/**
 * Speaking · phonetic-flow (Task 1 read aloud) → Statistics Hub + activity log.
 */
(function (w) {
  var KEY = "ege_speaking_phonetic_flow_scores";
  var GYM_KEY = "phonetic-flow";
  var SKILL = "Speaking: phonetic-flow";

  function readRaw() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return {};
      var o = JSON.parse(raw);
      return o && typeof o === "object" ? o : {};
    } catch (e1) {
      return {};
    }
  }

  function writeRaw(o) {
    try {
      localStorage.setItem(KEY, JSON.stringify(o));
    } catch (e2) {}
  }

  function aggregateBestFromMap(data) {
    var ids = Object.keys(data || {});
    var sum = 0;
    var c = 0;
    var i;
    for (i = 0; i < ids.length; i++) {
      var row = data[ids[i]];
      if (row && typeof row.best === "number") {
        sum += row.best;
        c++;
      }
    }
    return c ? Math.round(sum / c) : null;
  }

  function recordAttempt(unitId, percent) {
    var id = String(unitId || "");
    if (!id) return null;
    var p = Math.max(0, Math.min(100, Math.round(Number(percent) || 0)));
    var data = readRaw();
    var prev = data[id] || { best: 0, last: 0, n: 0 };
    prev.last = p;
    prev.best = Math.max(prev.best, p);
    prev.n = (prev.n || 0) + 1;
    prev.at = Date.now();
    data[id] = prev;
    writeRaw(data);
    if (w.__egeActivityTracker && typeof w.__egeActivityTracker.recordActivity === "function") {
      w.__egeActivityTracker.recordActivity({
        label: SKILL,
        href: "ege-speaking-phonetic-flow.html",
        score: p
      });
    }
    return prev;
  }

  function getUnitStats(unitId) {
    var id = String(unitId || "");
    if (!id) return null;
    var row = readRaw()[id];
    if (!row || !row.n) return null;
    return {
      attempts: row.n || 0,
      best: row.best || 0,
      last: row.last || 0,
      at: row.at || 0
    };
  }

  function mergeIntoExamStatisticsState(state, clampScoreFn) {
    if (!state || !state.gym) return;
    var clamp =
      typeof clampScoreFn === "function"
        ? clampScoreFn
        : function (v) {
            return Math.max(0, Math.min(100, Math.round(v)));
          };
    var agg = aggregateBestFromMap(readRaw());
    if (agg == null) return;
    state.gym[GYM_KEY] = clamp(Math.max(state.gym[GYM_KEY] || 0, agg));
  }

  w.__egeSpeakingPhoneticFlowStats = {
    KEY: KEY,
    GYM_KEY: GYM_KEY,
    recordAttempt: recordAttempt,
    getUnitStats: getUnitStats,
    mergeIntoExamStatisticsState: mergeIntoExamStatisticsState,
    readRaw: readRaw
  };
})(typeof window !== "undefined" ? window : this);
