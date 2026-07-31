/**
 * Mastering B2 (FCE) — daily activity for "Your week" chart.
 * Stores per calendar day: visits + points earned.
 * Global: window.MasteringB2Daily
 */
(function (W) {
  "use strict";

  var ACTIVITY_KEY = "masteringB2DailyActivity";
  var SCORE_SNAP_KEY = "masteringB2ScoreSnap";
  var VISIT_SESSION_KEY = "mb2DailyVisitLogged";
  var DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function dateKey(d) {
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }

  function todayKey() {
    return dateKey(new Date());
  }

  function load() {
    try {
      var raw = localStorage.getItem(ACTIVITY_KEY);
      var obj = raw ? JSON.parse(raw) : {};
      return obj && typeof obj === "object" ? obj : {};
    } catch (e) {
      return {};
    }
  }

  function save(obj) {
    try {
      var cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - 60);
      var cutKey = dateKey(cutoff);
      Object.keys(obj).forEach(function (k) {
        if (k < cutKey) delete obj[k];
      });
      localStorage.setItem(ACTIVITY_KEY, JSON.stringify(obj));
    } catch (e) {}
  }

  function ensureDay(obj, key) {
    if (!obj[key] || typeof obj[key] !== "object") {
      obj[key] = { visits: 0, points: 0, shadowing: 0 };
    }
    obj[key].visits = Number(obj[key].visits) || 0;
    obj[key].points = Number(obj[key].points) || 0;
    obj[key].shadowing = Number(obj[key].shadowing) || 0;
    return obj[key];
  }

  /**
   * Mark today as a shadowing / audio-listen day (once is enough for the streak).
   * Call when the student finishes a listen session.
   */
  function recordShadowing() {
    var obj = load();
    var row = ensureDay(obj, todayKey());
    if (row.shadowing >= 1) return false;
    row.shadowing = 1;
    save(obj);
    return true;
  }

  /**
   * Consecutive calendar days with shadowing.
   * If today is not done yet, still count a streak that includes yesterday
   * (same day grace). Missing a full day resets to 0.
   */
  function getShadowingStreak() {
    var obj = load();
    var d = new Date();
    var today = ensureDay(obj, todayKey());
    if (!today.shadowing) {
      d.setDate(d.getDate() - 1);
    }
    var streak = 0;
    for (var i = 0; i < 400; i++) {
      var k = dateKey(d);
      var row = obj[k];
      if (!row || !row.shadowing) break;
      streak += 1;
      d.setDate(d.getDate() - 1);
    }
    return streak;
  }

  function formatShadowingStreak(n) {
    var streak = Math.max(0, Math.floor(Number(n) || 0));
    if (streak === 1) return "1 day";
    return streak + " days";
  }

  /** Fire recordShadowing when an <audio> element ends (FCE shadowing pages). */
  function watchShadowingAudio(audioEl) {
    if (!audioEl || audioEl.__mb2ShadowWatch) return;
    audioEl.__mb2ShadowWatch = true;
    audioEl.addEventListener("ended", function () {
      recordShadowing();
    });
  }

  /** Activity weight for bar height: points matter more than a hub visit. */
  function dayWeight(row) {
    if (!row) return 0;
    return (
      (Number(row.points) || 0) * 3 +
      (Number(row.visits) || 0) +
      (Number(row.shadowing) || 0) * 4
    );
  }

  function mondayOf(d) {
    var x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    var day = (x.getDay() + 6) % 7;
    x.setDate(x.getDate() - day);
    return x;
  }

  /**
   * Log one hub visit per browser session (counts for "today").
   */
  function recordHubVisit() {
    try {
      if (sessionStorage.getItem(VISIT_SESSION_KEY) === "1") return;
      sessionStorage.setItem(VISIT_SESSION_KEY, "1");
    } catch (e) {}
    var obj = load();
    var row = ensureDay(obj, todayKey());
    row.visits += 1;
    save(obj);
  }

  /**
   * When total score grows, attribute the delta to today.
   * Call on hub load / when opening the stats panel.
   */
  function syncScoreDelta(currentScore) {
    var score = Math.max(0, Math.floor(Number(currentScore) || 0));
    var prevRaw = localStorage.getItem(SCORE_SNAP_KEY);
    var prev = prevRaw == null ? score : Math.max(0, Math.floor(Number(prevRaw) || 0));
    var delta = score - prev;
    try {
      localStorage.setItem(SCORE_SNAP_KEY, String(score));
    } catch (e) {}
    if (delta <= 0) return 0;
    var obj = load();
    var row = ensureDay(obj, todayKey());
    row.points += delta;
    save(obj);
    return delta;
  }

  /**
   * Call from trainers when awarding points (most truthful).
   * Call AFTER updating masteringB2Score in localStorage.
   */
  function addPoints(n) {
    var pts = Math.max(0, Math.floor(Number(n) || 0));
    if (!pts) return;
    var obj = load();
    var row = ensureDay(obj, todayKey());
    row.points += pts;
    save(obj);
    try {
      var scoreRaw = localStorage.getItem("masteringB2Score");
      var score = Math.max(0, Math.floor(Number(scoreRaw) || 0));
      localStorage.setItem(SCORE_SNAP_KEY, String(score));
    } catch (e) {}
  }

  function getWeekSeries() {
    var obj = load();
    var mon = mondayOf(new Date());
    var values = [];
    var keys = [];
    for (var i = 0; i < 7; i++) {
      var d = new Date(mon);
      d.setDate(mon.getDate() + i);
      var k = dateKey(d);
      keys.push(k);
      values.push(dayWeight(obj[k]));
    }
    return { labels: DAY_LABELS, keys: keys, values: values };
  }

  function renderWeekBars(root) {
    if (!root) return;
    var series = getWeekSeries();
    var max = 0;
    for (var i = 0; i < series.values.length; i++) {
      if (series.values[i] > max) max = series.values[i];
    }
    if (max < 1) max = 1;

    root.innerHTML = series.labels
      .map(function (label, idx) {
        var v = series.values[idx];
        var pct = v <= 0 ? 8 : Math.max(12, Math.round((v / max) * 100));
        var empty = v <= 0 ? ' data-empty="1"' : "";
        return (
          '<div class="week-col"' +
          empty +
          ' title="' +
          label +
          ": " +
          (v <= 0 ? "no activity" : "activity " + v) +
          '">' +
          '<div class="week-bar" style="height:' +
          pct +
          '%"></div>' +
          '<span class="week-day">' +
          label +
          "</span></div>"
        );
      })
      .join("");
  }

  function clearAll() {
    try {
      localStorage.removeItem(ACTIVITY_KEY);
      localStorage.removeItem(SCORE_SNAP_KEY);
      sessionStorage.removeItem(VISIT_SESSION_KEY);
    } catch (e) {}
  }

  W.MasteringB2Daily = {
    recordHubVisit: recordHubVisit,
    syncScoreDelta: syncScoreDelta,
    addPoints: addPoints,
    recordShadowing: recordShadowing,
    getShadowingStreak: getShadowingStreak,
    formatShadowingStreak: formatShadowingStreak,
    watchShadowingAudio: watchShadowingAudio,
    getWeekSeries: getWeekSeries,
    renderWeekBars: renderWeekBars,
    clearAll: clearAll,
    ACTIVITY_KEY: ACTIVITY_KEY
  };
})(window);
