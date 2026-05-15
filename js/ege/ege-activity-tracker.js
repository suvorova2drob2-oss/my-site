/**
 * Дни подряд (streak), лог последней активности. Ключ localStorage: ege_activity_v1.
 * Вызов recordActivity — из тренажёров после успешной проверки.
 */
(function (w) {
  var KEY = "ege_activity_v1";
  var MAX_LOG = 14;

  function pad2(n) {
    var x = Number(n) || 0;
    return x < 10 ? "0" + x : String(x);
  }

  function localYmd() {
    var d = new Date();
    return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
  }

  function parseYmd(s) {
    var parts = String(s || "").split("-");
    if (parts.length !== 3) return null;
    var y = Number(parts[0]);
    var m = Number(parts[1]);
    var day = Number(parts[2]);
    if (!y || !m || !day) return null;
    return new Date(y, m - 1, day);
  }

  function read() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return { streak: 0, lastPracticeDate: null, log: [] };
      var o = JSON.parse(raw);
      if (!o || typeof o !== "object") return { streak: 0, lastPracticeDate: null, log: [] };
      return {
        streak: Number(o.streak) || 0,
        lastPracticeDate: o.lastPracticeDate || null,
        log: Array.isArray(o.log) ? o.log : [],
      };
    } catch (e1) {
      return { streak: 0, lastPracticeDate: null, log: [] };
    }
  }

  function write(o) {
    try {
      localStorage.setItem(KEY, JSON.stringify(o));
    } catch (e2) {}
  }

  function diffDays(ymdA, ymdB) {
    var a = parseYmd(ymdA);
    var b = parseYmd(ymdB);
    if (!a || !b) return 999;
    var utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utcB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.round((utcB - utcA) / 86400000);
  }

  /**
   * @param {{ label?: string, href?: string, score?: number }} payload
   */
  function recordActivity(payload) {
    var today = localYmd();
    var data = read();
    var last = data.lastPracticeDate;
    var streak = Number(data.streak) || 0;

    if (!last) {
      streak = 1;
    } else if (last === today) {
      /* без изменений */
    } else {
      var gap = diffDays(last, today);
      if (gap === 1) {
        streak = streak + 1;
      } else {
        streak = 1;
      }
    }

    data.streak = streak;
    data.lastPracticeDate = today;

    var pl = payload && typeof payload === "object" ? payload : {};
    var label = pl.label ? String(pl.label) : "Тренировка";
    var href = pl.href != null ? String(pl.href) : "";
    var score =
      pl.score != null && !isNaN(Number(pl.score)) ? Math.round(Number(pl.score)) : null;

    var entry = {
      at: Date.now(),
      date: today,
      label: label,
      href: href,
      score: score,
    };
    data.log = [entry].concat(data.log || []).slice(0, MAX_LOG);
    write(data);
    return entry;
  }

  /** Для отображения: если пропущен хотя бы один календарный день — 0. */
  function effectiveStreak() {
    var data = read();
    var last = data.lastPracticeDate;
    var streak = Number(data.streak) || 0;
    if (!last || streak < 1) return 0;
    var today = localYmd();
    var d0 = diffDays(last, today);
    if (d0 === 0) return streak;
    if (d0 === 1) return streak;
    return 0;
  }

  function clearAll() {
    try {
      localStorage.removeItem(KEY);
    } catch (e3) {}
  }

  function getDashboard() {
    var data = read();
    return {
      streak: effectiveStreak(),
      storedStreak: Number(data.streak) || 0,
      lastPracticeDate: data.lastPracticeDate,
      log: (data.log || []).slice(0, 8),
    };
  }

  w.__egeActivityTracker = {
    KEY: KEY,
    localYmd: localYmd,
    recordActivity: recordActivity,
    effectiveStreak: effectiveStreak,
    getDashboard: getDashboard,
    clearAll: clearAll,
  };
})(window);
