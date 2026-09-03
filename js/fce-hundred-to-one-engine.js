/**
 * 100 to 1 (Family Feud style) — shared engine for class games.
 * window.FCE_HUNDRED_TO_ONE.mount({ getRounds, isPlaceholder })
 */
(function (W) {
  "use strict";

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

  function stripTeacherNote(label) {
    return String(label || "")
      .replace(/\s*\([^)]*\)\s*$/, "")
      .trim();
  }

  function mount(opts) {
    opts = opts || {};
    var getRounds = typeof opts.getRounds === "function" ? opts.getRounds : function () { return []; };
    var ROUNDS = getRounds() || [];

    function el(id) { return W.document.getElementById(id); }

    function reloadRounds() {
      ROUNDS = getRounds() || [];
      if (!ROUNDS.length) {
        var msg = el("h1EmptyMsg");
        if (msg) {
          msg.textContent = "No rounds in this deck yet — pick another tab or add data in the unit boards file.";
        }
        var main = W.document.querySelector(".h1-main");
        if (main) main.hidden = true;
        return false;
      }
      var empty = el("h1EmptyMsg");
      if (empty) empty.textContent = "";
      var main2 = W.document.querySelector(".h1-main");
      if (main2) main2.hidden = false;
      return true;
    }

    if (!reloadRounds()) {
      return { refresh: function () { reloadRounds(); } };
    }

    var state = {
      round: 0,
      scores: [0, 0],
      current: 0,
      found: null,
      pool: []
    };

    function buildPool(r) {
      var items = [];
      var i;
      for (i = 0; i < r.board.length; i++) {
        items.push({ good: true, slot: i, label: r.board[i].t });
      }
      for (i = 0; i < r.decoys.length; i++) {
        items.push({ good: false, label: stripTeacherNote(r.decoys[i]) });
      }
      return shuffle(items);
    }

    function updateHud() {
      el("h1ScoreA").textContent = state.scores[0];
      el("h1ScoreB").textContent = state.scores[1];
      el("h1TeamA").classList.toggle("is-on", state.current === 0);
      el("h1TeamB").classList.toggle("is-on", state.current === 1);
      el("h1RoundLbl").textContent = "Round " + (state.round + 1) + " / " + ROUNDS.length;
      el("h1TurnHint").textContent =
        "To play: Team " + (state.current === 0 ? "A" : "B") +
        ". Hit a board answer → same team again. Miss → other team's go.";
    }

    function renderBoard() {
      var r = ROUNDS[state.round];
      var br = el("h1BoardRows");
      br.innerHTML = "";
      for (var i = 0; i < r.board.length; i++) {
        var row = W.document.createElement("div");
        row.className = "h1-board-row";
        var open = state.found && state.found[i];
        var ans = open ? r.board[i].t : "???";
        row.innerHTML =
          '<div class="h1-num">' + (i + 1) + '</div>' +
          '<div class="h1-ans' + (open ? " is-open h1-reveal" : "") + '">' + ans + "</div>" +
          '<div class="h1-pt">' + r.board[i].pts + "</div>";
        br.appendChild(row);
      }
    }

    function roundDone() {
      for (var i = 0; i < state.found.length; i++) {
        if (!state.found[i]) return false;
      }
      return true;
    }

    function renderPool() {
      var p = el("h1Pool");
      p.innerHTML = "";
      var done = roundDone();
      for (var i = 0; i < state.pool.length; i++) {
        var item = state.pool[i];
        var b = W.document.createElement("button");
        b.type = "button";
        b.className = "h1-pcard";
        if (item.used) {
          b.className += item.good ? " h1-hit" : " h1-miss";
        }
        b.textContent = item.used ? (item.good ? "✓ " : "✕ ") + item.label : item.label;
        b.setAttribute("data-i", i);
        b.disabled = item.used || done;
        b.addEventListener("click", onCardClick);
        p.appendChild(b);
      }
    }

    function onCardClick(e) {
      var index = parseInt(e.currentTarget.getAttribute("data-i"), 10);
      var item = state.pool[index];
      if (!item || item.used || roundDone()) return;

      if (item.good) {
        item.used = true;
        state.found[item.slot] = true;
        state.scores[state.current] += ROUNDS[state.round].board[item.slot].pts;
        renderBoard();
        updateHud();
        el("h1LineMsg").innerHTML =
          "On the board! <strong>+" + ROUNDS[state.round].board[item.slot].pts + "</strong> to Team " +
          (state.current === 0 ? "A" : "B") + ".";
        if (roundDone()) {
          el("h1LineMsg").innerHTML += " <strong>Round clear.</strong> Use “Next round”.";
          for (var u = 0; u < state.pool.length; u++) state.pool[u].used = true;
        }
        renderPool();
      } else {
        item.used = true;
        state.current = 1 - state.current;
        updateHud();
        el("h1LineMsg").textContent = "Miss! Team " + (state.current === 0 ? "A" : "B") + "'s go.";
        renderPool();
      }
    }

    function startRound(ri) {
      state.round = ri;
      var r = ROUNDS[state.round];
      var brd = r && r.board ? r.board : [];
      state.found = brd.map(function () { return false; });
      el("h1QTopic").textContent = r.topic;
      el("h1QText").innerHTML = r.q;
      state.pool = buildPool(r);
      renderBoard();
      renderPool();
      updateHud();
      el("h1LineMsg").textContent = "";
      el("h1BtnNext").disabled = false;
    }

    el("h1BtnNext").addEventListener("click", function () {
      if (state.round < ROUNDS.length - 1) {
        startRound(state.round + 1);
        return;
      }
      el("h1LineMsg").innerHTML =
        "All rounds done. Score: Team A <strong>" + state.scores[0] +
        "</strong> — Team B <strong>" + state.scores[1] +
        "</strong>. “Reset all” for a new game.";
      el("h1BtnNext").disabled = true;
    });

    el("h1BtnReset").addEventListener("click", function () {
      state = { round: 0, scores: [0, 0], current: 0, found: null, pool: [] };
      startRound(0);
    });

    el("h1BtnText").addEventListener("click", function () {
      var r = ROUNDS[state.round];
      var titleEl = el("h1HintTitle");
      var frameWrap = el("h1HintFrameWrap");
      var frame = el("h1HintFrame");
      var body = el("h1HintBody");
      var foot = el("h1HintFoot");

      if (r.hintPassage) {
        titleEl.textContent = r.hintTitle || r.topic || "Source text";
        if (frameWrap) frameWrap.hidden = true;
        if (body) {
          body.hidden = false;
          body.textContent = r.hintPassage;
        }
        if (foot) foot.textContent = r.hintFoot || "";
      } else if (r.hint) {
        titleEl.textContent = r.hintTitle || r.hint;
        if (body) body.hidden = true;
        if (frameWrap) frameWrap.hidden = false;
        if (frame) frame.src = r.hint + (/\?/.test(r.hint) ? "&" : "?") + "embed=1";
        if (foot) foot.textContent = "If the frame is empty under file://, open through a local web server.";
      } else {
        titleEl.textContent = "No hint for this round";
        if (frameWrap) frameWrap.hidden = true;
        if (body) {
          body.hidden = false;
          body.textContent = "Add hint or hintPassage in the unit data file.";
        }
      }
      el("h1HintModal").classList.add("open");
    });

    el("h1HintClose").addEventListener("click", function () {
      el("h1HintModal").classList.remove("open");
    });
    el("h1HintModal").addEventListener("click", function (e) {
      if (e.target.id === "h1HintModal") el("h1HintModal").classList.remove("open");
    });

    startRound(0);

    function refreshGame() {
      if (!reloadRounds()) return;
      state = { round: 0, scores: [0, 0], current: 0, found: null, pool: [] };
      el("h1BtnNext").disabled = false;
      startRound(0);
    }

    return { refresh: refreshGame };
  }

  W.FCE_HUNDRED_TO_ONE = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
