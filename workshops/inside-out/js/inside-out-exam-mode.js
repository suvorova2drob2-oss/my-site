/**
 * Inside Out · Exam mode — timed speaking tasks with the bit's phrases always in view.
 * Global: INSIDEOUT_EXAM.open({ title, phrases, data })
 * data = INSIDEOUT_EXAM_DATA[bitKey] → interview · mono · photo · collab (roulette is built from phrases).
 */
(function (global) {
  var SITUATIONS = [
    "at school, talking to your best friend",
    "at a family dinner",
    "in a group chat with your class",
    "on a school trip",
    "during a football / basketball match",
    "at a birthday party",
    "on the first day of the holidays",
    "in a long queue",
    "when your phone battery dies",
    "on a rainy Monday morning",
    "at the dentist's",
    "when your little brother / sister takes your things",
    "before a big test",
    "at a sleepover",
    "in a new city on holiday",
  ];

  var FUNCTIONS = [
    "Shall we start with…?",
    "What do you think about…?",
    "I see your point, but…",
    "I'm not sure about that, because…",
    "That's a good idea, because…",
    "So, shall we go for…?",
    "Let's agree on…",
  ];

  var TASKS = [
    { id: "roulette", num: 1, title: "Phrase roulette", short: "Roulette", info: "5 rounds · 30 s each · random phrase + situation" },
    { id: "interview", num: 2, title: "Interview", short: "Interview", info: "6 questions · 40 s each" },
    { id: "mono", num: 3, title: "Monologue", short: "Monologue", info: "1 min to prepare · 2 min to speak" },
    { id: "photo", num: 4, title: "Photo long turn", short: "Photos", info: "1 min compare · 30 s follow-up" },
    { id: "collab", num: 5, title: "Collaborative task", short: "Discuss", info: "2 min discuss · 1 min decide" },
  ];

  function esc(t) {
    return String(t == null ? "" : t)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function shuffle(a) {
    var arr = a.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    return arr;
  }

  function fmt(sec) {
    sec = Math.max(0, Math.ceil(sec));
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  var audioCtx = null;
  function beep(freq, dur) {
    try {
      audioCtx = audioCtx || new (global.AudioContext || global.webkitAudioContext)();
      var o = audioCtx.createOscillator();
      var g = audioCtx.createGain();
      o.frequency.value = freq || 880;
      o.connect(g);
      g.connect(audioCtx.destination);
      g.gain.setValueAtTime(0.15, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + (dur || 0.35));
      o.start();
      o.stop(audioCtx.currentTime + (dur || 0.35));
    } catch (e) {}
  }

  var st = null;

  function buildSteps(taskId) {
    var d = st.data || {};
    var phrases = st.phrases;
    if (taskId === "roulette") {
      var ph = shuffle(phrases).slice(0, 5);
      var sit = shuffle(SITUATIONS);
      return ph.map(function (p, i) {
        return {
          phase: "Round " + (i + 1) + " / " + ph.length,
          sec: 30,
          focus: [p],
          html:
            '<div class="io-exam-card io-exam-card--roulette">' +
            '<p class="io-exam-label">Your phrase</p>' +
            '<p class="io-exam-big">«' + esc(p) + "»</p>" +
            '<p class="io-exam-label">Situation</p>' +
            '<p class="io-exam-mid">You are ' + esc(sit[i % sit.length]) + ".</p>" +
            '<p class="io-exam-note">Say 2–4 sentences that fit the situation. Use the phrase or change it a little. Don\u2019t stop talking!</p>' +
            "</div>",
        };
      });
    }
    if (taskId === "interview") {
      var qs = d.interview || [];
      return qs.map(function (row, i) {
        return {
          phase: "Question " + (i + 1) + " / " + qs.length,
          sec: 40,
          focus: [],
          html:
            '<div class="io-exam-card">' +
            '<p class="io-exam-label">Examiner asks</p>' +
            '<p class="io-exam-big">' + esc(row.q) + "</p>" +
            '<p class="io-exam-use"><span>Try to use</span> «' + esc(row.phrase) + "»</p>" +
            '<p class="io-exam-note">Answer + reason + example. 3–5 sentences.</p>' +
            "</div>",
        };
      });
    }
    if (taskId === "mono") {
      var m = d.mono || { topic: "", plan: [] };
      var must = shuffle(phrases).slice(0, Math.min(4, phrases.length));
      var card =
        '<div class="io-exam-card">' +
        '<p class="io-exam-label">Topic</p>' +
        '<p class="io-exam-big">' + esc(m.topic) + "</p>" +
        '<p class="io-exam-label">Talk about:</p>' +
        '<ol class="io-exam-plan">' +
        (m.plan || [])
          .map(function (p) {
            return "<li>" + esc(p) + "</li>";
          })
          .join("") +
        "</ol>" +
        '<p class="io-exam-note">Use at least <strong>4 phrases</strong> — the gold ones on the right are a must.</p>' +
        "</div>";
      return [
        { phase: "Prepare", sec: 60, must: must, html: card, prep: true },
        { phase: "Speak", sec: 120, must: must, html: card },
      ];
    }
    if (taskId === "photo") {
      var p = d.photo || { imgs: [], labels: [] };
      var pics =
        '<div class="io-exam-photos">' +
        (p.imgs || [])
          .map(function (src, i) {
            return (
              '<figure class="io-exam-photo"><img src="' +
              esc(src) +
              '" alt="" loading="lazy" /><figcaption>' +
              String.fromCharCode(65 + i) +
              " · " +
              esc((p.labels || [])[i] || "") +
              "</figcaption></figure>"
            );
          })
          .join("") +
        "</div>";
      return [
        {
          phase: "Compare",
          sec: 60,
          html:
            '<div class="io-exam-card">' + pics +
            '<p class="io-exam-mid">' + esc(p.task) + "</p>" +
            '<p class="io-exam-note">Compare, don\u2019t just describe: «In picture A… whereas in picture B…». Use phrases from the right.</p>' +
            "</div>",
        },
        {
          phase: "Follow-up",
          sec: 30,
          html:
            '<div class="io-exam-card">' + pics +
            '<p class="io-exam-label">Examiner asks</p>' +
            '<p class="io-exam-big">' + esc(p.follow) + "</p>" +
            "</div>",
        },
      ];
    }
    if (taskId === "collab") {
      var c = d.collab || { question: "", options: [] };
      var map =
        '<div class="io-exam-map">' +
        '<div class="io-exam-map-center">' + esc(c.question) + "</div>" +
        '<div class="io-exam-map-opts">' +
        (c.options || [])
          .map(function (o) {
            return '<span class="io-exam-map-opt">' + esc(o) + "</span>";
          })
          .join("") +
        "</div></div>";
      var fn =
        '<div class="io-exam-fn"><span class="io-exam-label">Discussion phrases</span>' +
        FUNCTIONS.map(function (f) {
          return "<span>" + esc(f) + "</span>";
        }).join("") +
        "</div>";
      return [
        {
          phase: "Discuss",
          sec: 120,
          html:
            '<div class="io-exam-card">' + map +
            '<p class="io-exam-note">Talk with your partner / teacher about each option. Give reasons and connect them to Riley\u2019s story or your life. Use tape phrases.</p>' +
            fn + "</div>",
        },
        {
          phase: "Decide",
          sec: 60,
          html:
            '<div class="io-exam-card">' + map +
            '<p class="io-exam-big">Now decide: which option is the best — and which one would you reject?</p>' +
            fn + "</div>",
        },
      ];
    }
    return [];
  }

  function stopTimer() {
    if (st && st.timer) {
      clearInterval(st.timer);
      st.timer = 0;
    }
  }

  function renderRail() {
    var rail = st.root.querySelector(".io-exam-rail-list");
    var step = st.steps[st.idx] || {};
    var must = step.must || [];
    var focus = step.focus || [];
    rail.innerHTML = st.phrases
      .map(function (p, i) {
        var cls = "io-exam-ph";
        if (st.used[i]) cls += " is-used";
        if (must.indexOf(p) !== -1) cls += " is-must";
        if (focus.indexOf(p) !== -1) cls += " is-focus";
        return (
          '<button type="button" class="' + cls + '" data-ph="' + i + '">' +
          '<span class="io-exam-ph-tick" aria-hidden="true">' + (st.used[i] ? "✓" : "") + "</span>" +
          "<span>" + esc(p) + "</span></button>"
        );
      })
      .join("");
    var n = 0;
    st.used.forEach(function (u) {
      if (u) n++;
    });
    st.root.querySelector(".io-exam-count").textContent = n + " / " + st.phrases.length + " used";
  }

  function renderTimer() {
    var step = st.steps[st.idx];
    var t = st.root.querySelector(".io-exam-timer");
    if (!step) return;
    var left = st.left;
    t.querySelector(".io-exam-time").textContent = fmt(left);
    t.querySelector(".io-exam-phase").textContent = step.phase + (step.prep ? " · no speaking yet" : "");
    t.querySelector(".io-exam-bar i").style.width = (100 * (1 - left / step.sec)).toFixed(1) + "%";
    t.classList.toggle("is-low", st.running && left <= 10);
    t.classList.toggle("is-prep", !!step.prep);
    t.classList.toggle("is-running", !!st.running);
  }

  function renderControls() {
    var c = st.root.querySelector(".io-exam-controls");
    var last = st.idx >= st.steps.length - 1;
    c.innerHTML =
      (st.running
        ? '<button type="button" class="io-exam-btn" data-act="pause">Pause</button>'
        : '<button type="button" class="io-exam-btn io-exam-btn--go" data-act="start">' +
          (st.left < (st.steps[st.idx] || {}).sec ? "Continue ▶" : "Start ▶") +
          "</button>") +
      '<button type="button" class="io-exam-btn" data-act="skip">' + (last ? "Finish ⏹" : "Next ⏭") + "</button>" +
      '<button type="button" class="io-exam-btn io-exam-btn--ghost" data-act="restart">Restart task ↺</button>';
  }

  function renderStep() {
    var step = st.steps[st.idx];
    var stage = st.root.querySelector(".io-exam-stage");
    if (!step) {
      renderSummary();
      return;
    }
    stage.innerHTML = step.html;
    st.left = step.sec;
    renderTimer();
    renderControls();
    renderRail();
    st.root.querySelector(".io-exam-timer").hidden = false;
  }

  function renderSummary() {
    stopTimer();
    st.running = false;
    var stage = st.root.querySelector(".io-exam-stage");
    var usedList = [];
    var missed = [];
    st.phrases.forEach(function (p, i) {
      (st.used[i] ? usedList : missed).push(p);
    });
    var model = st.task === "mono" && st.data && st.data.mono && st.data.mono.model;
    stage.innerHTML =
      '<div class="io-exam-card io-exam-card--done">' +
      '<p class="io-exam-label">Time\u2019s up · ' + esc(TASKS.filter(function (t) { return t.id === st.task; })[0].title) + "</p>" +
      '<p class="io-exam-big">You used <strong>' + usedList.length + "</strong> of " + st.phrases.length + " phrases</p>" +
      (missed.length
        ? '<p class="io-exam-label">Try these next time</p><ul class="io-exam-miss">' +
          missed
            .map(function (p) {
              return "<li>" + esc(p) + "</li>";
            })
            .join("") +
          "</ul>"
        : '<p class="io-exam-mid">All phrases used — excellent! 🏆</p>') +
      (model
        ? '<details class="io-exam-model"><summary>Show model answer</summary><p>' + esc(model) + "</p></details>"
        : "") +
      '<p class="io-exam-note">Self-check: Did I answer the task? Did I give reasons and examples? Did I keep talking until the beep?</p>' +
      "</div>";
    st.root.querySelector(".io-exam-timer").hidden = true;
    var c = st.root.querySelector(".io-exam-controls");
    var nextTask = TASKS[TASKS.map(function (t) { return t.id; }).indexOf(st.task) + 1];
    c.innerHTML =
      '<button type="button" class="io-exam-btn io-exam-btn--go" data-act="restart">Try again ↺</button>' +
      (nextTask
        ? '<button type="button" class="io-exam-btn" data-task="' + nextTask.id + '">Next task · ' + esc(nextTask.title) + " →</button>"
        : "");
    renderRail();
  }

  function tick() {
    st.left -= 0.25;
    if (st.left <= 0) {
      stopTimer();
      st.running = false;
      beep(st.steps[st.idx].prep ? 660 : 880, 0.4);
      advance(true);
      return;
    }
    renderTimer();
  }

  function start() {
    stopTimer();
    st.running = true;
    st.timer = setInterval(tick, 250);
    renderTimer();
    renderControls();
  }

  function advance(autoStart) {
    stopTimer();
    st.running = false;
    st.idx++;
    if (st.idx >= st.steps.length) {
      renderSummary();
      return;
    }
    renderStep();
    if (autoStart) start();
  }

  function selectTask(id) {
    stopTimer();
    st.task = id;
    st.running = false;
    st.idx = 0;
    st.used = st.phrases.map(function () {
      return false;
    });
    st.steps = buildSteps(id);
    st.root.querySelectorAll(".io-exam-tab").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-task") === id);
    });
    var meta = TASKS.filter(function (t) {
      return t.id === id;
    })[0];
    st.root.querySelector(".io-exam-task-title").textContent = meta.num + " · " + meta.title;
    st.root.querySelector(".io-exam-task-info").textContent = meta.info;
    if (!st.steps.length) {
      st.root.querySelector(".io-exam-stage").innerHTML =
        '<p class="io-exam-note">No material for this task yet.</p>';
      st.root.querySelector(".io-exam-controls").innerHTML = "";
      st.root.querySelector(".io-exam-timer").hidden = true;
      return;
    }
    renderStep();
  }

  function close() {
    stopTimer();
    if (st && st.root) st.root.remove();
    document.body.classList.remove("io-exam-open");
    global.removeEventListener("keydown", onKey, true);
    st = null;
  }

  function onKey(e) {
    if (e.key === "Escape") {
      e.stopImmediatePropagation();
      e.preventDefault();
      close();
    }
  }

  function open(opts) {
    if (st) close();
    opts = opts || {};
    var phrases = (opts.phrases || []).filter(Boolean);
    st = {
      phrases: phrases,
      data: opts.data || {},
      used: [],
      steps: [],
      idx: 0,
      left: 0,
      running: false,
      timer: 0,
      task: "roulette",
    };
    var root = document.createElement("div");
    root.className = "io-exam";
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-label", "Exam mode");
    root.innerHTML =
      '<div class="io-exam-inner">' +
      '<header class="io-exam-head">' +
      "<div>" +
      '<p class="io-exam-kicker">4 · Exam mode · timed speaking</p>' +
      '<h2 class="io-exam-title">' + esc(opts.title || "Exam mode") + "</h2>" +
      "</div>" +
      '<button type="button" class="io-exam-close" data-act="close">Close ✕</button>' +
      "</header>" +
      '<nav class="io-exam-tabs">' +
      TASKS.map(function (t) {
        return (
          '<button type="button" class="io-exam-tab" data-task="' + t.id + '">' +
          "<b>" + t.num + "</b> " + esc(t.short) + "</button>"
        );
      }).join("") +
      "</nav>" +
      '<div class="io-exam-body">' +
      '<section class="io-exam-main">' +
      '<div class="io-exam-task-head"><h3 class="io-exam-task-title"></h3><span class="io-exam-task-info"></span></div>' +
      '<div class="io-exam-timer"><span class="io-exam-phase"></span><span class="io-exam-time"></span><span class="io-exam-bar"><i></i></span></div>' +
      '<div class="io-exam-stage"></div>' +
      '<div class="io-exam-controls"></div>' +
      "</section>" +
      '<aside class="io-exam-rail">' +
      '<div class="io-exam-rail-head"><span>Your phrases · tap when used</span><b class="io-exam-count"></b></div>' +
      '<div class="io-exam-rail-list"></div>' +
      "</aside>" +
      "</div></div>";
    document.body.appendChild(root);
    document.body.classList.add("io-exam-open");
    st.root = root;

    root.addEventListener("click", function (e) {
      var ph = e.target.closest("[data-ph]");
      if (ph) {
        var i = Number(ph.getAttribute("data-ph"));
        st.used[i] = !st.used[i];
        renderRail();
        return;
      }
      var tb = e.target.closest("[data-task]");
      if (tb) {
        selectTask(tb.getAttribute("data-task"));
        return;
      }
      var a = e.target.closest("[data-act]");
      if (!a) return;
      var act = a.getAttribute("data-act");
      if (act === "close") close();
      else if (act === "start") start();
      else if (act === "pause") {
        stopTimer();
        st.running = false;
        renderTimer();
        renderControls();
      } else if (act === "skip") advance(false);
      else if (act === "restart") selectTask(st.task);
    });
    global.addEventListener("keydown", onKey, true);
    selectTask("roulette");
  }

  global.INSIDEOUT_EXAM = { open: open, close: close };
})(typeof window !== "undefined" ? window : globalThis);
