/**
 * Pre-intermediate · Eat · Keyword Bingo
 * ONE shared set of 4 constructions per round · speaker says them · listener taps
 */
(function (global) {
  "use strict";

  var ROUND_SEC = 120;
  var CELL_COUNT = 4;

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  /** One random line per drilling card type — 4 different constructions, never two of the same pattern */
  function dealBalancedRound() {
    var c1 = global.PRE_INT_EAT_DRILL_CARDS || [];
    var c2 = global.PRE_INT_EAT_DRILL_CARDS_2 || [];
    var c3 = global.PRE_INT_EAT_DRILL_CARDS_3 || [];
    var c4 = global.PRE_INT_EAT_DRILL_CARDS_4 || [];
    var c5 = global.PRE_INT_EAT_DRILL_CARDS_5 || [];
    var picks = [];

    if (c1.length) {
      var p1 = c1[Math.floor(Math.random() * c1.length)];
      picks.push({
        tag: "place",
        text: p1.place + " \u2192 " + p1.food,
      });
    }
    if (c2.length) {
      var sel = c2[Math.floor(Math.random() * c2.length)];
      picks.push({
        tag: "selection",
        text: "a big selection of " + sel,
      });
    }
    if (c3.length) {
      var p3 = c3[Math.floor(Math.random() * c3.length)];
      picks.push({
        tag: "portions",
        text: "to " + p3.to + " / and " + p3.smaller,
      });
    }
    /* 4th slot: complaint OR terrace — one construction, not both */
    if (Math.random() < 0.5 && c4.length) {
      var p4 = c4[Math.floor(Math.random() * c4.length)];
      picks.push({
        tag: "complaint",
        text: "to " + p4.to + " / and I had " + p4.dish + "\u2026",
      });
    } else if (c5.length) {
      var p5 = c5[Math.floor(Math.random() * c5.length)];
      picks.push({
        tag: "terrace",
        text: "at " + p5.at + " / " + p5.line,
      });
    } else if (c4.length) {
      var p4b = c4[Math.floor(Math.random() * c4.length)];
      picks.push({
        tag: "complaint",
        text: "to " + p4b.to + " / and I had " + p4b.dish + "\u2026",
      });
    }

    var shuffled = shuffle(picks);
    return {
      phrases: shuffled.map(function (x) {
        return x.text;
      }),
      tags: shuffled.map(function (x) {
        return x.tag;
      }),
    };
  }

  function dealRole(cards) {
    if (!cards.length) return { label: "", phrases: [] };
    var card = cards[Math.floor(Math.random() * cards.length)];
    var phrases = (card.keywords || []).map(function (k) {
      return "\u2026 " + k;
    });
    while (phrases.length < CELL_COUNT) {
      phrases.push("\u2026 plenty to choose from.");
    }
    return {
      label: card.badge + " " + card.num + ": " + card.title,
      phrases: phrases.slice(0, CELL_COUNT),
    };
  }

  function fmtTime(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  function playerLabel(id) {
    return id === "a" ? "Player A" : "Player B";
  }

  function mount(opts) {
    var root = opts && opts.root;
    if (!root) return;

    var roleCards = global.PRE_INT_EAT_ROLEPLAY_CARDS || [];

    var state = {
      speaker: "a",
      scoreA: 0,
      scoreB: 0,
      timerSec: ROUND_SEC,
      timerRunning: false,
      timerId: null,
      mode: "drill",
      roleLabel: "",
      phrases: [],
      tags: [],
      hits: [],
    };

    function listenerId() {
      return state.speaker === "a" ? "b" : "a";
    }

    function checkBingo() {
      return (
        state.phrases.length === CELL_COUNT &&
        state.hits.length === CELL_COUNT &&
        state.hits.every(function (h) {
          return h;
        })
      );
    }

    function dealRound(mode) {
      state.mode = mode;
      state.roleLabel = "";
      state.tags = [];
      if (mode === "role") {
        var dealt = dealRole(roleCards);
        state.phrases = dealt.phrases;
        state.roleLabel = dealt.label;
      } else {
        var balanced = dealBalancedRound();
        state.phrases = balanced.phrases;
        state.tags = balanced.tags;
      }
      state.hits = state.phrases.map(function () {
        return false;
      });
    }

    function clearHits() {
      state.hits = state.phrases.map(function () {
        return false;
      });
    }

    function stopTimer() {
      state.timerRunning = false;
      if (state.timerId) {
        clearInterval(state.timerId);
        state.timerId = null;
      }
    }

    function startTimer() {
      stopTimer();
      if (state.timerSec <= 0) state.timerSec = ROUND_SEC;
      state.timerRunning = true;
      state.timerId = setInterval(function () {
        state.timerSec -= 1;
        if (state.timerSec <= 0) {
          state.timerSec = 0;
          stopTimer();
        }
        paint();
      }, 1000);
      paint();
    }

    function resetTimer() {
      stopTimer();
      state.timerSec = ROUND_SEC;
      paint();
    }

    function awardBingo() {
      var lid = listenerId();
      if (lid === "a") state.scoreA += 1;
      else state.scoreB += 1;
      stopTimer();
    }

    var tagLabel = {
      place: "Card 1 \u00b7 place",
      selection: "Card 2 \u00b7 selection",
      portions: "Card 3 \u00b7 value",
      complaint: "Card 4 \u00b7 complaint",
      terrace: "Card 5 \u00b7 terrace",
    };

    function renderSharedCells() {
      return state.phrases
        .map(function (phrase, i) {
          var hit = state.hits[i];
          var tag = state.tags[i] ? tagLabel[state.tags[i]] || "" : "";
          return (
            '<button type="button" class="pi-bingo-cell' +
            (hit ? " is-hit" : "") +
            '" data-idx="' +
            i +
            '" aria-pressed="' +
            (hit ? "true" : "false") +
            '">' +
            '<span class="pi-bingo-cell-mark" aria-hidden="true">' +
            (hit ? "\u2713" : i + 1) +
            "</span>" +
            '<span class="pi-bingo-cell-body">' +
            (tag
              ? '<span class="pi-bingo-cell-tag">' + esc(tag) + "</span>"
              : "") +
            '<span class="pi-bingo-cell-text">' +
            esc(phrase) +
            "</span></span></button>"
          );
        })
        .join("");
    }

    function paint() {
      var host = root.querySelector(".pi-bingo-inner");
      if (!host) return;

      var sid = state.speaker;
      var lid = listenerId();
      var bingo = checkBingo();

      host.querySelector(".pi-bingo-timer-val").textContent = fmtTime(
        state.timerSec
      );
      host.querySelector(".pi-bingo-timer-val").classList.toggle(
        "is-low",
        state.timerSec > 0 && state.timerSec <= 20
      );

      host.querySelector(".pi-bingo-speaker-name").textContent = playerLabel(sid);
      host.querySelector(".pi-bingo-listener-name").textContent =
        playerLabel(lid);

      host.querySelector(".pi-bingo-round-note").innerHTML = state.roleLabel
        ? esc(state.roleLabel)
        : "4 different patterns (Card 1 \u00b7 2 \u00b7 3 \u00b7 4 or 5) \u2014 speaker weaves all into one story";

      host.querySelector(".pi-bingo-shared-cells").innerHTML =
        renderSharedCells();

      host.querySelector(".pi-bingo-score-a").textContent = String(state.scoreA);
      host.querySelector(".pi-bingo-score-b").textContent = String(state.scoreB);

      var winEl = host.querySelector(".pi-bingo-win");
      if (winEl) {
        winEl.hidden = !bingo;
        winEl.textContent =
          "Bingo! " +
          playerLabel(lid) +
          " heard all 4 \uD83C\uDF89";
      }

      host.querySelector('[data-action="start"]').textContent = state.timerRunning
        ? "Pause"
        : state.timerSec > 0 && state.timerSec < ROUND_SEC
          ? "Resume"
          : "Start 2:00";

      host.querySelectorAll(".pi-bingo-cell").forEach(function (btn) {
        btn.onclick = function () {
          var idx = parseInt(btn.getAttribute("data-idx"), 10);
          if (isNaN(idx)) return;
          state.hits[idx] = !state.hits[idx];
          if (checkBingo()) awardBingo();
          paint();
        };
      });
    }

    root.innerHTML =
      '<section class="pi-drill-deck pi-drill-deck--bingo" aria-label="Keyword Bingo">' +
      '<article class="pi-drill-card pi-drill-card--sheet pi-bingo-wrap">' +
      '<div class="pi-drill-card-head">' +
      '<span class="pi-drill-card-num">Keyword Bingo</span>' +
      "</div>" +
      '<p class="pi-bingo-intro">One shared set of <strong>4 constructions</strong>. Speaker must say all 4 in a restaurant story. Listener taps each line when they hear it. Then <strong>Swap</strong>.</p>' +
      '<div class="pi-bingo-inner">' +
      '<div class="pi-bingo-toolbar">' +
      '<div class="pi-bingo-timer">' +
      '<span class="pi-bingo-timer-val">' +
      fmtTime(ROUND_SEC) +
      "</span>" +
      '<div class="pi-bingo-timer-btns">' +
      '<button type="button" class="pi-bingo-btn pi-bingo-btn--primary" data-action="start">Start 2:00</button>' +
      '<button type="button" class="pi-bingo-btn" data-action="reset-time">Reset</button>' +
      "</div></div>" +
      '<div class="pi-bingo-deal-btns">' +
      '<span class="pi-bingo-deal-label">New round:</span>' +
      '<button type="button" class="pi-bingo-btn" data-action="deal-drill">\uD83C\uDFB2 Drill pool</button>' +
      '<button type="button" class="pi-bingo-btn" data-action="deal-role">\uD83C\uDFAD Role card</button>' +
      '<button type="button" class="pi-bingo-btn pi-bingo-btn--swap" data-action="swap">Swap roles \u2194</button>' +
      "</div></div>" +
      '<div class="pi-bingo-roles">' +
      '<div class="pi-bingo-role-pill pi-bingo-role-pill--speak">' +
      "\uD83C\uDFA4 <span class=\"pi-bingo-speaker-name\">Player A</span> speaks" +
      "</div>" +
      '<div class="pi-bingo-role-pill pi-bingo-role-pill--listen">' +
      "\uD83D\uDC42 <span class=\"pi-bingo-listener-name\">Player B</span> listens &amp; taps" +
      "</div></div>" +
      '<p class="pi-bingo-round-note"></p>' +
      '<div class="pi-bingo-shared">' +
      '<p class="pi-bingo-shared-label">This round \u2014 same 4 for both</p>' +
      '<div class="pi-bingo-shared-cells"></div>' +
      '<p class="pi-bingo-win" hidden>Bingo!</p>' +
      "</div>" +
      '<div class="pi-bingo-scores">' +
      "<span>Player A: <strong class=\"pi-bingo-score-a\">0</strong> bingo</span>" +
      "<span>Player B: <strong class=\"pi-bingo-score-b\">0</strong> bingo</span>" +
      "</div></div></article></section>";

    var inner = root.querySelector(".pi-bingo-inner");

    inner.querySelector('[data-action="start"]').addEventListener("click", function () {
      if (state.timerRunning) stopTimer();
      else startTimer();
      paint();
    });

    inner.querySelector('[data-action="reset-time"]').addEventListener("click", function () {
      resetTimer();
    });

    inner.querySelector('[data-action="deal-drill"]').addEventListener("click", function () {
      dealRound("drill");
      resetTimer();
      paint();
    });

    inner.querySelector('[data-action="deal-role"]').addEventListener("click", function () {
      dealRound("role");
      resetTimer();
      paint();
    });

    inner.querySelector('[data-action="swap"]').addEventListener("click", function () {
      state.speaker = state.speaker === "a" ? "b" : "a";
      dealRound(state.mode);
      resetTimer();
      paint();
    });

    dealRound("drill");
    paint();
  }

  global.PRE_INT_EAT_KEYWORD_BINGO = {
    mount: mount,
    dealBalancedRound: dealBalancedRound,
  };
})(typeof window !== "undefined" ? window : globalThis);
