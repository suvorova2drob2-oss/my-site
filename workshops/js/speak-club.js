/**
 * Speak Club — shared sparks / rung / streak across speaking workshops.
 * localStorage: prep_speak_club_v1 (migrates fleabag_speak_desk_v1 once if empty)
 */
(function (global) {
  var STORAGE_KEY = "prep_speak_club_v1";
  var LEGACY_FLEABAG = "fleabag_speak_desk_v1";
  var DAY_MS = 86400000;
  var PARTNER_SPARKS = 4;
  var CLEAR_BONUS = 10;
  var REPLAY_CLEAR = 3;

  function todayKey() {
    var d = new Date();
    return (
      d.getFullYear() +
      "-" +
      String(d.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(d.getDate()).padStart(2, "0")
    );
  }

  function emptyState() {
    return {
      sparks: 0,
      totalSec: 0,
      takes: 0,
      streak: 0,
      lastDay: "",
      byDay: {},
      drillHits: {},
      drillClears: {},
    };
  }

  function normalize(o) {
    if (!o || typeof o !== "object") return emptyState();
    return {
      sparks: Number(o.sparks) || 0,
      totalSec: Number(o.totalSec) || 0,
      takes: Number(o.takes) || 0,
      streak: Number(o.streak) || 0,
      lastDay: String(o.lastDay || ""),
      byDay: o.byDay && typeof o.byDay === "object" ? o.byDay : {},
      drillHits: o.drillHits && typeof o.drillHits === "object" ? o.drillHits : {},
      drillClears:
        o.drillClears && typeof o.drillClears === "object" ? o.drillClears : {},
    };
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return normalize(JSON.parse(raw));
      var legacy = localStorage.getItem(LEGACY_FLEABAG);
      if (legacy) {
        var migrated = normalize(JSON.parse(legacy));
        save(migrated);
        return migrated;
      }
    } catch (e) {}
    return emptyState();
  }

  function save(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }

  function rungInfo(sparks) {
    var s = Math.max(0, Number(sparks) || 0);
    var rung = Math.floor(s / 100) + 1;
    var into = s % 100;
    var labels = [
      "Warm mouth",
      "Getting fluent",
      "Sharp tongue",
      "Aside machine",
      "Club regular",
      "Series native",
    ];
    var label = labels[Math.min(rung - 1, labels.length - 1)] || "Talker";
    return {
      rung: rung,
      into: into,
      need: 100 - into || 100,
      pct: into,
      label: label,
    };
  }

  function bumpStreak(state, day) {
    if (state.lastDay === day) return;
    if (!state.lastDay) {
      state.streak = 1;
    } else {
      var prev = new Date(state.lastDay + "T12:00:00");
      var cur = new Date(day + "T12:00:00");
      var diff = Math.round((cur - prev) / DAY_MS);
      state.streak = diff === 1 ? (state.streak || 0) + 1 : 1;
    }
    state.lastDay = day;
  }

  function addSparks(state, pts, sec) {
    pts = Math.max(0, Math.floor(Number(pts) || 0));
    sec = Math.max(0, Math.floor(Number(sec) || 0));
    if (!pts && !sec) return state;
    var day = todayKey();
    if (!state.byDay[day]) state.byDay[day] = { sec: 0, takes: 0, sparks: 0 };
    state.byDay[day].sparks += pts;
    state.byDay[day].sec += sec;
    state.sparks += pts;
    state.totalSec += sec;
    if (pts > 0) {
      state.byDay[day].takes += 1;
      state.takes += 1;
      bumpStreak(state, day);
    }
    save(state);
    refreshUi();
    return state;
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /** First time you clear a partner line in a beat → sparks. */
  function awardDrillPartner(opts) {
    opts = opts || {};
    var themeId = String(opts.themeId || "theme");
    var beatId = String(opts.beatId || "beat");
    var partnerIndex = Number(opts.partnerIndex);
    if (!isFinite(partnerIndex) || partnerIndex < 0) return null;
    var key = themeId + "::" + beatId + "::p" + partnerIndex;
    var state = load();
    if (state.drillHits[key]) {
      return { sparks: 0, repeat: true, state: state, rung: rungInfo(state.sparks) };
    }
    state.drillHits[key] = 1;
    addSparks(state, PARTNER_SPARKS, 45);
    state = load();
    toast("+" + PARTNER_SPARKS + " sparks · partner done", "drill");
    return {
      sparks: PARTNER_SPARKS,
      repeat: false,
      state: state,
      rung: rungInfo(state.sparks),
    };
  }

  /** Bonus when all partners in a beat are done. */
  function awardDrillClear(opts) {
    opts = opts || {};
    var themeId = String(opts.themeId || "theme");
    var beatId = String(opts.beatId || "beat");
    var key = themeId + "::" + beatId;
    var state = load();
    var first = !state.drillClears[key];
    var pts = first ? CLEAR_BONUS : REPLAY_CLEAR;
    state.drillClears[key] = (state.drillClears[key] || 0) + 1;
    addSparks(state, pts, 30);
    state = load();
    toast(
      first
        ? "+" + pts + " sparks · drill cleared · " + rungInfo(state.sparks).label
        : "+" + pts + " sparks · drill replay",
      "clear"
    );
    return {
      sparks: pts,
      first: first,
      state: state,
      rung: rungInfo(state.sparks),
    };
  }

  function toast(message, kind) {
    var existing = document.getElementById("sc-toast");
    if (existing) existing.remove();
    var el = document.createElement("div");
    el.id = "sc-toast";
    el.className = "sc-toast" + (kind ? " sc-toast--" + kind : "");
    el.setAttribute("role", "status");
    el.textContent = message;
    document.body.appendChild(el);
    requestAnimationFrame(function () {
      el.classList.add("is-in");
    });
    setTimeout(function () {
      el.classList.remove("is-in");
      el.classList.add("is-out");
      setTimeout(function () {
        el.remove();
      }, 280);
    }, 2400);
  }

  function refreshUi() {
    var st = load();
    var rung = rungInfo(st.sparks);
    document.querySelectorAll("[data-sc-sparks]").forEach(function (el) {
      el.textContent = String(st.sparks);
    });
    document.querySelectorAll("[data-sc-rung]").forEach(function (el) {
      el.textContent = "Rung " + rung.rung + " · " + rung.label;
    });
    document.querySelectorAll("[data-sc-rung-short]").forEach(function (el) {
      el.textContent = "Rung " + rung.rung;
    });
    document.querySelectorAll("[data-sc-meta]").forEach(function (el) {
      el.innerHTML =
        "<b>" +
        st.takes +
        "</b> takes · <b>" +
        st.streak +
        "</b> day streak";
    });
    document.querySelectorAll("[data-fb-sparks]").forEach(function (el) {
      el.textContent = String(st.sparks);
    });
    document.querySelectorAll("[data-fb-rung]").forEach(function (el) {
      el.textContent = "Rung " + rung.rung;
    });
  }

  function weekDays() {
    var st = load();
    var out = [];
    var now = new Date();
    var dow = (now.getDay() + 6) % 7;
    for (var i = 0; i < 7; i++) {
      var d = new Date(now);
      d.setDate(now.getDate() - dow + i);
      var key =
        d.getFullYear() +
        "-" +
        String(d.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(d.getDate()).padStart(2, "0");
      out.push({
        key: key,
        label: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
        sec: (st.byDay[key] && st.byDay[key].sec) || 0,
        sparks: (st.byDay[key] && st.byDay[key].sparks) || 0,
      });
    }
    return out;
  }

  function openReel() {
    var existing = document.getElementById("sc-talk-reel");
    if (existing) existing.remove();
    var st = load();
    var rung = rungInfo(st.sparks);
    var week = weekDays();
    var maxSec = Math.max(
      60,
      week.reduce(function (m, d) {
        return Math.max(m, d.sec);
      }, 0)
    );
    var barsHtml = week
      .map(function (d) {
        var h = d.sec ? Math.max(8, Math.round((d.sec / maxSec) * 100)) : 4;
        return (
          '<div class="fb-reel-day' +
          (d.sec ? " has-talk" : "") +
          '">' +
          '<div class="fb-reel-bar-wrap"><span class="fb-reel-bar" style="height:' +
          h +
          '%"></span></div>' +
          "<em>" +
          escapeHtml(d.label) +
          "</em></div>"
        );
      })
      .join("");
    var mins = Math.floor(st.totalSec / 60);
    var rem = st.totalSec % 60;
    var layer = document.createElement("div");
    layer.id = "sc-talk-reel";
    layer.className = "fb-talk-reel";
    layer.setAttribute("role", "dialog");
    layer.setAttribute("aria-modal", "true");
    layer.innerHTML =
      '<div class="fb-talk-reel-panel">' +
      '<header class="fb-talk-reel-top">' +
      "<div>" +
      '<p class="fb-talk-reel-kicker">Speak Club</p>' +
      "<h2>Talk reel</h2>" +
      "<p class=\"fb-talk-reel-sub\">Sparks from partner drills (and Fleabag timed talks if migrated). This device only.</p>" +
      "</div>" +
      '<button type="button" class="fb-talk-reel-x" data-sc-reel-close aria-label="Close">×</button>' +
      "</header>" +
      '<div class="fb-talk-reel-hero">' +
      '<div class="fb-talk-reel-orb">' +
      '<span class="fb-talk-reel-orb-label">Rung ' +
      rung.rung +
      "</span>" +
      "<strong>" +
      escapeHtml(rung.label) +
      "</strong>" +
      '<span class="fb-talk-reel-orb-pct">' +
      rung.pct +
      "% to next</span>" +
      '<div class="fb-talk-reel-orb-track"><i style="width:' +
      rung.pct +
      '%"></i></div></div>' +
      '<div class="fb-talk-reel-tiles">' +
      '<div class="fb-talk-tile" data-tone="spark"><span>Sparks</span><strong>' +
      st.sparks +
      "</strong></div>" +
      '<div class="fb-talk-tile" data-tone="mic"><span>Mouth time</span><strong>' +
      mins +
      "<small>m " +
      rem +
      "s</small></strong></div>" +
      '<div class="fb-talk-tile" data-tone="take"><span>Takes</span><strong>' +
      st.takes +
      "</strong></div>" +
      '<div class="fb-talk-tile" data-tone="fire"><span>Talk streak</span><strong>' +
      st.streak +
      "<small> days</small></strong></div>" +
      '<div class="fb-talk-tile" data-tone="next"><span>To next rung</span><strong>' +
      rung.need +
      "</strong></div>" +
      '<div class="fb-talk-tile" data-tone="club"><span>Track</span><strong>Speak Club</strong></div>' +
      "</div></div>" +
      '<section class="fb-talk-reel-week">' +
      "<h3>This week</h3>" +
      '<div class="fb-reel-week">' +
      barsHtml +
      "</div>" +
      '<p class="fb-talk-reel-note">Partner line → +' +
      PARTNER_SPARKS +
      " sparks. Full drill clear → +" +
      CLEAR_BONUS +
      " (replay +" +
      REPLAY_CLEAR +
      "). Streak needs sparks. Reset clears this device only.</p>" +
      '<button type="button" class="fb-talk-reel-reset" data-sc-reel-reset>Reset Speak Club</button>' +
      "</section></div>";
    document.body.appendChild(layer);
    document.body.classList.add("fb-talk-reel-open");
    function close() {
      document.body.classList.remove("fb-talk-reel-open");
      layer.remove();
    }
    layer.querySelector("[data-sc-reel-close]").addEventListener("click", close);
    layer.addEventListener("click", function (e) {
      if (e.target === layer) close();
    });
    layer
      .querySelector("[data-sc-reel-reset]")
      .addEventListener("click", function () {
        if (!window.confirm("Clear Speak Club on this device?")) return;
        save(emptyState());
        close();
        refreshUi();
        openReel();
      });
  }

  function mountRail(host) {
    if (!host) return;
    if (host.querySelector(".fb-speak-rail, .sc-speak-rail")) return;
    var st = load();
    var rung = rungInfo(st.sparks);
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "fb-speak-rail sc-speak-rail";
    btn.setAttribute("data-sc-open-reel", "1");
    btn.setAttribute("aria-label", "Speak Club");
    btn.innerHTML =
      '<span class="fb-speak-rail-glow" aria-hidden="true"></span>' +
      '<span class="fb-speak-rail-kicker">Speak Club</span>' +
      '<span class="fb-speak-rail-score"><strong data-sc-sparks>' +
      st.sparks +
      "</strong><em>sparks</em></span>" +
      '<span class="fb-speak-rail-rung" data-sc-rung>Rung ' +
      rung.rung +
      " · " +
      escapeHtml(rung.label) +
      "</span>" +
      '<span class="fb-speak-rail-meta" data-sc-meta><b>' +
      st.takes +
      "</b> takes · <b>" +
      st.streak +
      "</b> day streak</span>" +
      '<span class="fb-speak-rail-cta">Open talk reel</span>';
    host.appendChild(btn);
    btn.addEventListener("click", openReel);
  }

  function autoMount() {
    document
      .querySelectorAll("[data-speak-club-host], #sc-speak-chip-host, #fb-speak-chip-host")
      .forEach(function (host) {
        mountRail(host);
      });
    refreshUi();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoMount);
  } else {
    autoMount();
  }

  global.SpeakClub = {
    load: load,
    save: save,
    emptyState: emptyState,
    rungInfo: rungInfo,
    awardDrillPartner: awardDrillPartner,
    awardDrillClear: awardDrillClear,
    toast: toast,
    openReel: openReel,
    mountRail: mountRail,
    refreshUi: refreshUi,
    PARTNER_SPARKS: PARTNER_SPARKS,
    CLEAR_BONUS: CLEAR_BONUS,
  };
})(typeof window !== "undefined" ? window : globalThis);
