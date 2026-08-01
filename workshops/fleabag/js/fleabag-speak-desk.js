/**
 * Fleabag Speak desk — timed talk (mic on, no speech recognition) + course-wide stats.
 * localStorage: fleabag_speak_desk_v1
 */
(function (global) {
  var STORAGE_KEY = "fleabag_speak_desk_v1";
  var DAY_MS = 86400000;

  var active = {
    stream: null,
    raf: 0,
    timerId: 0,
    startedAt: 0,
    targetSec: 90,
    overlay: null,
    analyser: null,
    audioCtx: null,
  };

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
    };
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return emptyState();
      var o = JSON.parse(raw);
      if (!o || typeof o !== "object") return emptyState();
      return {
        sparks: Number(o.sparks) || 0,
        totalSec: Number(o.totalSec) || 0,
        takes: Number(o.takes) || 0,
        streak: Number(o.streak) || 0,
        lastDay: String(o.lastDay || ""),
        byDay: o.byDay && typeof o.byDay === "object" ? o.byDay : {},
      };
    } catch (e) {
      return emptyState();
    }
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
      need: 100 - into,
      pct: into,
      label: label,
    };
  }

  function sparksForSec(sec) {
    var n = Math.floor(Number(sec) || 0);
    if (n < 20) return 0;
    return Math.min(25, Math.max(5, Math.floor(n / 6)));
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

  function recordTake(spokenSec) {
    var sec = Math.max(0, Math.floor(Number(spokenSec) || 0));
    var pts = sparksForSec(sec);
    var state = load();
    var day = todayKey();
    if (!state.byDay[day]) state.byDay[day] = { sec: 0, takes: 0, sparks: 0 };
    state.byDay[day].sec += sec;
    state.byDay[day].takes += 1;
    state.byDay[day].sparks += pts;
    state.totalSec += sec;
    state.takes += 1;
    state.sparks += pts;
    if (pts > 0) bumpStreak(state, day);
    save(state);
    refreshChips();
    return { sparks: pts, state: state, rung: rungInfo(state.sparks) };
  }

  function weekDays() {
    var out = [];
    var now = new Date();
    var dow = (now.getDay() + 6) % 7; // Mon=0
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
        sec: (load().byDay[key] && load().byDay[key].sec) || 0,
      });
    }
    // reload once
    var st = load();
    return out.map(function (row) {
      row.sec = (st.byDay[row.key] && st.byDay[row.key].sec) || 0;
      return row;
    });
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatSec(sec) {
    var s = Math.max(0, Math.floor(sec));
    var m = Math.floor(s / 60);
    var r = s % 60;
    return m + ":" + String(r).padStart(2, "0");
  }

  function stopMicHardware() {
    if (active.raf) {
      cancelAnimationFrame(active.raf);
      active.raf = 0;
    }
    if (active.timerId) {
      clearInterval(active.timerId);
      active.timerId = 0;
    }
    if (active.stream) {
      active.stream.getTracks().forEach(function (t) {
        try {
          t.stop();
        } catch (e) {}
      });
      active.stream = null;
    }
    if (active.audioCtx) {
      try {
        active.audioCtx.close();
      } catch (e) {}
      active.audioCtx = null;
    }
    active.analyser = null;
  }

  function closeOverlay(skipAnim) {
    stopMicHardware();
    var el = active.overlay;
    active.overlay = null;
    if (!el) return;
    document.body.classList.remove("fb-mic-live");
    if (skipAnim) {
      el.remove();
      return;
    }
    el.classList.add("is-out");
    setTimeout(function () {
      el.remove();
    }, 220);
  }

  function finishTake(spokenSec) {
    var result = recordTake(spokenSec);
    var el = active.overlay;
    if (!el) return;
    stopMicHardware();
    var stage = el.querySelector("[data-fb-mic-stage]");
    if (!stage) {
      closeOverlay(true);
      return;
    }
    var msg =
      result.sparks > 0
        ? "Nice take · +" + result.sparks + " sparks"
        : "Too short for sparks — try 20+ seconds next time";
    stage.innerHTML =
      '<div class="fb-mic-done">' +
      '<p class="fb-mic-done-kicker">Speak desk</p>' +
      '<p class="fb-mic-done-title">' +
      escapeHtml(msg) +
      "</p>" +
      '<p class="fb-mic-done-sub">' +
      formatSec(spokenSec) +
      " on the clock · rung " +
      result.rung.rung +
      " · " +
      escapeHtml(result.rung.label) +
      "</p>" +
      '<button type="button" class="fb-mic-btn fb-mic-btn--ok" data-fb-mic-dismiss>Got it</button>' +
      "</div>";
    var btn = stage.querySelector("[data-fb-mic-dismiss]");
    if (btn) {
      btn.addEventListener("click", function () {
        closeOverlay();
      });
      btn.focus();
    }
  }

  function renderCoachHints(sections) {
    if (!sections || !sections.length) return "";
    var count = 0;
    var body = sections
      .map(function (sec) {
        var lines = sec.lines || [];
        count += lines.length || (sec.text ? 1 : 0);
        var inner = "";
        if (sec.text) {
          inner += '<p class="fb-lex-bank">' + escapeHtml(sec.text) + "</p>";
        }
        if (lines.length) {
          inner +=
            '<ul class="fb-dq-examples">' +
            lines
              .map(function (line) {
                return "<li>" + escapeHtml(line) + "</li>";
              })
              .join("") +
            "</ul>";
        }
        if (!inner) return "";
        return (
          (sec.title
            ? '<div class="fb-dq-ex-label">' + escapeHtml(sec.title) + "</div>"
            : "") + inner
        );
      })
      .filter(Boolean)
      .join("");
    if (!body) return "";
    return (
      '<details class="fb-hints fb-hints--mic">' +
      '<summary class="fb-hints-sum">' +
      '<span class="fb-hints-pill">Hints' +
      (count ? " · " + count : "") +
      "</span>" +
      '<span class="fb-hints-sub">Bridge / bank / models — tap if you freeze</span>' +
      "</summary>" +
      '<div class="fb-hints-body">' +
      body +
      "</div></details>"
    );
  }

  function startTake(opts) {
    opts = opts || {};
    var targetSec = Math.max(30, Math.min(120, Number(opts.targetSec) || 90));
    var title = opts.title || "Your turn";
    var prompt = String(opts.prompt || opts.question || "").trim();
    var hint = opts.hint || "No scoring of words — just talk until the timer. Mic is on so you feel the voice.";
    var coachHints = opts.coachHints || [];

    closeOverlay(true);

    var overlay = document.createElement("div");
    overlay.className = "fb-mic-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.innerHTML =
      '<div class="fb-mic-card" data-fb-mic-stage>' +
      '<header class="fb-mic-head">' +
      '<p class="fb-mic-kicker">Speak desk · timed talk</p>' +
      '<h2 class="fb-mic-title">' +
      escapeHtml(title) +
      "</h2>" +
      (prompt
        ? '<p class="fb-mic-prompt">' + escapeHtml(prompt) + "</p>"
        : "") +
      renderCoachHints(coachHints) +
      '<p class="fb-mic-hint">' +
      escapeHtml(hint) +
      "</p></header>" +
      '<div class="fb-mic-ring" data-fb-mic-ring>' +
      '<span class="fb-mic-ico" aria-hidden="true">🎙</span>' +
      '<span class="fb-mic-clock" data-fb-mic-clock>0:00</span>' +
      '<span class="fb-mic-target">/ ' +
      formatSec(targetSec) +
      "</span></div>" +
      '<div class="fb-mic-bars" data-fb-mic-bars aria-hidden="true">' +
      "<i></i><i></i><i></i><i></i><i></i><i></i><i></i>" +
      "</div>" +
      '<p class="fb-mic-status" data-fb-mic-status>Allow microphone — we only listen for volume, nothing is saved or transcribed.</p>' +
      '<div class="fb-mic-actions">' +
      '<button type="button" class="fb-mic-btn fb-mic-btn--stop" data-fb-mic-stop disabled>Stop early</button>' +
      '<button type="button" class="fb-mic-btn fb-mic-btn--go" data-fb-mic-go>Start talking</button>' +
      "</div></div>";

    document.body.appendChild(overlay);
    document.body.classList.add("fb-mic-live");
    active.overlay = overlay;
    active.targetSec = targetSec;
    active.startedAt = 0;

    var btnGo = overlay.querySelector("[data-fb-mic-go]");
    var btnStop = overlay.querySelector("[data-fb-mic-stop]");
    var clockEl = overlay.querySelector("[data-fb-mic-clock]");
    var statusEl = overlay.querySelector("[data-fb-mic-status]");
    var bars = overlay.querySelectorAll("[data-fb-mic-bars] i");
    var ring = overlay.querySelector("[data-fb-mic-ring]");

    function tickUi() {
      if (!active.startedAt) return;
      var elapsed = Math.floor((Date.now() - active.startedAt) / 1000);
      if (clockEl) clockEl.textContent = formatSec(elapsed);
      if (ring) {
        var pct = Math.min(1, elapsed / targetSec);
        ring.style.setProperty("--fb-mic-pct", String(pct));
      }
      if (elapsed >= targetSec) {
        finishTake(elapsed);
      }
    }

    function pulseBars() {
      if (!active.analyser) return;
      var data = new Uint8Array(active.analyser.frequencyBinCount);
      active.analyser.getByteFrequencyData(data);
      var sum = 0;
      for (var i = 0; i < data.length; i++) sum += data[i];
      var avg = sum / (data.length || 1) / 255;
      bars.forEach(function (bar, idx) {
        var h = 18 + avg * 70 * (0.55 + (idx % 3) * 0.25);
        bar.style.height = Math.min(88, h) + "%";
        bar.classList.toggle("is-hot", avg > 0.12);
      });
      if (ring) ring.classList.toggle("is-voice", avg > 0.1);
      active.raf = requestAnimationFrame(pulseBars);
    }

    async function begin() {
      btnGo.disabled = true;
      statusEl.textContent = "Starting mic…";
      try {
        var stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        active.stream = stream;
        var Ctx = window.AudioContext || window.webkitAudioContext;
        if (Ctx) {
          active.audioCtx = new Ctx();
          var src = active.audioCtx.createMediaStreamSource(stream);
          active.analyser = active.audioCtx.createAnalyser();
          active.analyser.fftSize = 256;
          src.connect(active.analyser);
          pulseBars();
        }
        active.startedAt = Date.now();
        btnStop.disabled = false;
        statusEl.textContent = "Talk now — timer is running. No recognition, just you.";
        btnGo.textContent = "Talking…";
        active.timerId = setInterval(tickUi, 250);
        tickUi();
      } catch (err) {
        btnGo.disabled = false;
        statusEl.textContent =
          "Mic blocked or missing — you can still use the timer without volume bars.";
        // Timer-only fallback
        active.startedAt = Date.now();
        btnStop.disabled = false;
        btnGo.textContent = "Talking…";
        btnGo.disabled = true;
        active.timerId = setInterval(tickUi, 250);
        tickUi();
      }
    }

    btnGo.addEventListener("click", begin);
    btnStop.addEventListener("click", function () {
      if (!active.startedAt) {
        closeOverlay();
        return;
      }
      var elapsed = Math.floor((Date.now() - active.startedAt) / 1000);
      finishTake(elapsed);
    });

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay && !active.startedAt) closeOverlay();
    });
  }

  function micPadHtml(opts) {
    opts = opts || {};
    var sec = Number(opts.targetSec) || 90;
    var label = opts.label || "Speak";
    var mode = opts.mode || "deep";
    var prompt = String(opts.prompt || opts.question || "").trim();
    var coachHints = opts.coachHints || [];
    var json = "";
    try {
      json = JSON.stringify(coachHints);
    } catch (e) {
      json = "[]";
    }
    return (
      '<div class="fb-mic-pad" data-fb-mic-pad data-secs="' +
      sec +
      '" data-mode="' +
      escapeHtml(mode) +
      '" data-title="' +
      escapeHtml(label) +
      '" data-prompt="' +
      escapeHtml(prompt) +
      '">' +
      '<textarea hidden class="fb-mic-hints-json">' +
      escapeHtml(json) +
      "</textarea>" +
      '<button type="button" class="fb-mic-pad-btn">' +
      '<span class="fb-mic-pad-ico" aria-hidden="true">🎙</span>' +
      '<span class="fb-mic-pad-text"><strong>Talk · ' +
      formatSec(sec) +
      "</strong><em>timer · mic · sparks</em></span>" +
      "</button></div>"
    );
  }

  function bindPads(root) {
    if (!root) return;
    root.querySelectorAll("[data-fb-mic-pad]").forEach(function (pad) {
      if (pad._fbMicBound) return;
      pad._fbMicBound = true;
      var btn = pad.querySelector(".fb-mic-pad-btn");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var coachHints = [];
        var jsonEl = pad.querySelector(".fb-mic-hints-json");
        if (jsonEl) {
          try {
            coachHints = JSON.parse(jsonEl.value || jsonEl.textContent || "[]") || [];
          } catch (e) {
            coachHints = [];
          }
        }
        startTake({
          targetSec: parseInt(pad.getAttribute("data-secs"), 10) || 90,
          title: pad.getAttribute("data-title") || "Your turn",
          prompt: pad.getAttribute("data-prompt") || "",
          coachHints: coachHints,
          hint:
            pad.getAttribute("data-mode") === "lex"
              ? "Warm-up patterns out loud. No scoring of accuracy — just mouth time."
              : pad.getAttribute("data-mode") === "ex"
                ? "Tell the situation. Use the phrase if you can — we won’t check."
                : "Answer the question. Partner can listen — mic is only for your timer vibe.",
        });
      });
    });
  }

  function openStats() {
    var existing = document.getElementById("fb-talk-reel");
    if (existing) existing.remove();

    var st = load();
    var rung = rungInfo(st.sparks);
    var week = weekDays();
    var maxSec = Math.max(60, week.reduce(function (m, d) {
      return Math.max(m, d.sec);
    }, 0));

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
    layer.id = "fb-talk-reel";
    layer.className = "fb-talk-reel";
    layer.setAttribute("role", "dialog");
    layer.setAttribute("aria-modal", "true");
    layer.innerHTML =
      '<div class="fb-talk-reel-panel">' +
      '<header class="fb-talk-reel-top">' +
      "<div>" +
      '<p class="fb-talk-reel-kicker">Fleabag Speak Club</p>' +
      "<h2>Talk reel</h2>" +
      "<p class=\"fb-talk-reel-sub\">Across every episode — timed talks only. No word scoring.</p>" +
      "</div>" +
      '<button type="button" class="fb-talk-reel-x" data-fb-reel-close aria-label="Close">×</button>' +
      "</header>" +
      '<div class="fb-talk-reel-hero">' +
      '<div class="fb-talk-reel-orb">' +
      '<span class="fb-talk-reel-orb-label">Rung ' +
      rung.rung +
      "</span>" +
      '<strong>' +
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
      '<div class="fb-talk-tile" data-tone="mic"><span>Mic minutes</span><strong>' +
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
      "<h3>This week’s mouth time</h3>" +
      '<div class="fb-reel-week">' +
      barsHtml +
      "</div>" +
      '<p class="fb-talk-reel-note">Sparks grow when you finish a timed talk (20s+). Streak needs a take with sparks. Reset clears this device only.</p>' +
      '<button type="button" class="fb-talk-reel-reset" data-fb-reel-reset>Reset talk reel</button>' +
      "</section></div>";

    document.body.appendChild(layer);
    document.body.classList.add("fb-talk-reel-open");

    function close() {
      document.body.classList.remove("fb-talk-reel-open");
      layer.remove();
    }

    layer.querySelector("[data-fb-reel-close]").addEventListener("click", close);
    layer.addEventListener("click", function (e) {
      if (e.target === layer) close();
    });
    layer.querySelector("[data-fb-reel-reset]").addEventListener("click", function () {
      if (!window.confirm("Clear Talk reel on this device?")) return;
      save(emptyState());
      close();
      refreshChips();
      openStats();
    });
  }

  function refreshChips() {
    var st = load();
    var rung = rungInfo(st.sparks);
    document.querySelectorAll("[data-fb-sparks]").forEach(function (el) {
      el.textContent = String(st.sparks);
    });
    document.querySelectorAll("[data-fb-rung]").forEach(function (el) {
      el.textContent = "Rung " + rung.rung;
    });
    document.querySelectorAll("[data-fb-rung-label]").forEach(function (el) {
      el.textContent = rung.label;
    });
    document.querySelectorAll("[data-fb-streak]").forEach(function (el) {
      el.textContent = String(st.streak || 0);
    });
    document.querySelectorAll("[data-fb-takes]").forEach(function (el) {
      el.textContent = String(st.takes || 0);
    });
  }

  function mountCourseChip(host) {
    if (!host) return;
    if (host.querySelector(".fb-speak-chip-row, .fb-speak-rail")) return;
    var st = load();
    var rung = rungInfo(st.sparks);
    var variant = host.getAttribute("data-fb-chip-variant") || "chip";

    if (variant === "rail") {
      var rail = document.createElement("button");
      rail.type = "button";
      rail.className = "fb-speak-rail";
      rail.setAttribute("data-fb-open-reel", "");
      rail.innerHTML =
        '<span class="fb-speak-rail-glow" aria-hidden="true"></span>' +
        '<span class="fb-speak-rail-kicker">Speak Club</span>' +
        '<span class="fb-speak-rail-score"><strong data-fb-sparks>' +
        st.sparks +
        "</strong><em>sparks</em></span>" +
        '<span class="fb-speak-rail-rung"><span data-fb-rung>Rung ' +
        rung.rung +
        '</span> · <span data-fb-rung-label>' +
        escapeHtml(rung.label) +
        "</span></span>" +
        '<span class="fb-speak-rail-meta">' +
        '<span><b data-fb-takes>' +
        st.takes +
        "</b> takes</span>" +
        '<span><b data-fb-streak>' +
        st.streak +
        "</b> day streak</span></span>" +
        '<span class="fb-speak-rail-cta">Open talk reel</span>';
      host.appendChild(rail);
      rail.addEventListener("click", openStats);
      return;
    }

    var row = document.createElement("div");
    row.className = "fb-speak-chip-row";
    row.innerHTML =
      '<button type="button" class="fb-speak-chip" data-fb-open-reel>' +
      '<span class="fb-speak-chip-kicker">Speak Club</span>' +
      '<span class="fb-speak-chip-main"><strong data-fb-sparks>' +
      st.sparks +
      '</strong> sparks · <span data-fb-rung>Rung ' +
      rung.rung +
      "</span></span>" +
      '<span class="fb-speak-chip-cta">Talk reel →</span>' +
      "</button>";
    host.appendChild(row);
    row.querySelector("[data-fb-open-reel]").addEventListener("click", openStats);
  }

  global.FLEABAG_SPEAK_DESK = {
    load: load,
    openStats: openStats,
    startTake: startTake,
    micPadHtml: micPadHtml,
    bindPads: bindPads,
    mountCourseChip: mountCourseChip,
    refreshChips: refreshChips,
    closeOverlay: closeOverlay,
  };
})(typeof window !== "undefined" ? window : globalThis);
