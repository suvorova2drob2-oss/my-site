/**
 * Listening Matching §1 → Statistics Hub (localStorage).
 */
(function (w) {
  var KEY = "ege_listening_matching_scores";
  var SKILL = "Listening: Matching";

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
        href: "ege-listening-matching.html",
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
    if (!state || !state.examUnits) return;
    var clamp =
      typeof clampScoreFn === "function"
        ? clampScoreFn
        : function (v) {
            return Math.max(0, Math.min(100, Math.round(v)));
          };
    var data = readRaw();
    var ids = Object.keys(data);
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
    if (!c) return;
    var agg = Math.round(sum / c);
    var ui;
    var sj;
    var unit;
    for (ui = 0; ui < state.examUnits.length; ui++) {
      unit = state.examUnits[ui];
      if (!unit.skills) continue;
      for (sj = 0; sj < unit.skills.length; sj++) {
        if (unit.skills[sj].name === SKILL) {
          unit.skills[sj].score = clamp(
            Math.max(unit.skills[sj].score || 0, agg)
          );
          return;
        }
      }
    }
  }

  w.__egeListeningMatchingStats = {
    KEY: KEY,
    recordAttempt: recordAttempt,
    getUnitStats: getUnitStats,
    mergeIntoExamStatisticsState: mergeIntoExamStatisticsState,
    readRaw: readRaw
  };
})(typeof window !== "undefined" ? window : this);
