/**
 * Мост: результаты Matching Headlines → хаб статистики ЕГЭ (localStorage).
 * Тренажёр вызывает recordAttempt; ege-statistics.html — mergeIntoExamStatisticsState при загрузке.
 */
(function (w) {
  var KEY = "ege_reading_mh_scores";
  var SKILL = "Reading: Matching Headlines";

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

  /** Лучший и последний процент по попыткам «Проверить» для пакета unitId. */
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
        href: "ege-reading-matching-headlines.html",
        score: p,
      });
    }
    return prev;
  }

  function clearAll() {
    try {
      localStorage.removeItem(KEY);
    } catch (e3) {}
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

  /** Среднее лучших результатов по всем пакетам, для которых есть записи. */
  function aggregateBestPercent() {
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
    return c ? Math.round(sum / c) : null;
  }

  function mergeIntoExamStatisticsState(state, clampScoreFn) {
    if (!state || !state.examUnits || !state.examUnits[0]) return;
    var clamp =
      typeof clampScoreFn === "function"
        ? clampScoreFn
        : function (v) {
            return Math.max(0, Math.min(100, Math.round(v)));
          };

    var agg = aggregateBestPercent();
    if (agg == null) return;

    var unit = state.examUnits[0];
    var si;
    for (si = 0; si < unit.skills.length; si++) {
      if (unit.skills[si].name === SKILL) {
        unit.skills[si].score = clamp(
          Math.max(unit.skills[si].score || 0, agg)
        );
        break;
      }
    }

    var a = unit.skills[0].score;
    var b = unit.skills[1].score;
    var c = unit.skills[2].score;
    if ((b || 0) === 0 && (c || 0) === 0) {
      unit.score = clamp(a);
    } else {
      unit.score = clamp(Math.round((a + b + c) / 3));
    }
  }

  w.__egeReadingMatchingStats = {
    KEY: KEY,
    recordAttempt: recordAttempt,
    getUnitStats: getUnitStats,
    mergeIntoExamStatisticsState: mergeIntoExamStatisticsState,
    clearAll: clearAll,
    readRaw: readRaw
  };
})(window);
