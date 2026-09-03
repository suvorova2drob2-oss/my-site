/**
 * Retell check — read → retell with phrase prompts + timer.
 * window.FCE_RETELL_CHECK.mount({ root, unit, backHref, backLabel })
 */
(function (W) {
  "use strict";

  var scoreKey = "masteringB2Score";
  var POINTS_PER_BLOCK = 5;
  var RING_R = 44;
  var CIRC = 2 * Math.PI * RING_R;

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function wrapPhrasesInText(text, phrases) {
    var pairs = phrases
      .map(function (p) {
        var hl =
          p && typeof p === "object"
            ? String(p.highlight || p.label || "")
            : String(p || "");
        return hl;
      })
      .filter(function (hl) {
        return hl && text.indexOf(hl) >= 0;
      })
      .map(function (hl) {
        return { idx: text.indexOf(hl), phrase: hl };
      })
      .sort(function (a, b) {
        return a.idx - b.idx;
      });
    var out = "";
    var cursor = 0;
    pairs.forEach(function (p) {
      out += escapeHtml(text.slice(cursor, p.idx));
      out += '<span class="rc-phrase-hl">' + escapeHtml(p.phrase) + "</span>";
      cursor = p.idx + p.phrase.length;
    });
    out += escapeHtml(text.slice(cursor));
    return out;
  }

  function renderReadPassageHtml(block) {
    return block.passage
      .split(/\n\n+/)
      .map(function (para) {
        return "<p>" + wrapPhrasesInText(para, block.phrases) + "</p>";
      })
      .join("");
  }

  function getScore() {
    var raw = localStorage.getItem(scoreKey);
    var n = Number(raw);
    return Number.isFinite(n) && n >= 0 ? Math.floor(n) : 0;
  }

  function addScore(pts) {
    localStorage.setItem(scoreKey, String(getScore() + pts));
    if (W.MasteringB2Daily) W.MasteringB2Daily.addPoints(pts);
  }

  function parseDeckQuery(raw, deckIds) {
    if (!raw) return null;
    var picked = raw
      .split(",")
      .map(function (s) {
        return s.trim();
      })
      .filter(Boolean);
    if (!picked.length) return null;
    return deckIds.filter(function (id) {
      return picked.indexOf(id) >= 0;
    });
  }

  function flattenBlocks(decks, selectedIds) {
    var out = [];
    decks.forEach(function (deck) {
      if (selectedIds.indexOf(deck.id) < 0) return;
      deck.blocks.forEach(function (block) {
        out.push({
          deckId: deck.id,
          deckLabel: deck.label,
          readTitle: deck.readTitle,
          short: block.short,
          passage: block.passage,
          phrases: block.phrases
        });
      });
    });
    return out;
  }

  function mount(opts) {
    var root = typeof opts.root === "string" ? document.querySelector(opts.root) : opts.root;
    if (!root) return;

    var unit = parseInt(opts.unit, 10) || 1;
    var decks = (W.FCE_RETELL_CHECK_DECKS && W.FCE_RETELL_CHECK_DECKS.getDecks(unit)) || [];
    var backHref = opts.backHref || "unit" + unit + "-class-games.html";
    var backLabel = opts.backLabel || "Class Games";
    var defaultTimer = parseInt(opts.defaultTimer, 10) || 120;

    function syncCoolPhrases(deckId) {
      if (unit !== 1) return;
      var bridge = W.FCE_U1_COOL_PHRASES;
      if (!bridge) return;
      if (deckId) bridge.sync(deckId);
      else if (typeof bridge.clear === "function") bridge.clear();
    }

    root.innerHTML =
      '<div class="rc-shell">' +
      '  <div class="rc-nav-top">' +
      '    <a href="' +
      escapeHtml(backHref) +
      '" id="rcBackLink">' +
      escapeHtml("← " + backLabel) +
      "</a>" +
      '    <span class="rc-segment-badge" id="rcSegmentBadge" aria-live="polite"></span>' +
      "  </div>" +
      '  <div id="rcFinale" class="rc-finale" aria-live="polite">' +
      "    <h2>All blocks done</h2>" +
      '    <p style="color:#a0aec0;margin-bottom:20px;">Great work. Your points are already added to the home score.</p>' +
      '    <a href="' +
      escapeHtml(backHref) +
      '" class="rc-btn rc-btn-primary" style="display:inline-block;max-width:280px;text-decoration:none;text-align:center;">Back</a>' +
      "  </div>" +
      '  <div id="rcPickScreen" class="rc-screen"></div>' +
      '  <div id="rcMainFlow" class="rc-screen">' +
      '    <section id="rcStepRead" class="rc-screen">' +
      '      <span class="rc-pill">Step 1 · Read</span>' +
      '      <p class="rc-deck-tag" id="rcDeckTag"></p>' +
      '      <h1 class="rc-title-read" id="rcMainTitleRead">Retell check</h1>' +
      '      <h2 class="rc-block-heading rc-read-h" id="rcHeadingRead"></h2>' +
      '      <p class="rc-instr">Read the whole extract. Dotted lines show key phrases. Then continue to retell with your timer.</p>' +
      '      <div class="rc-passage" id="rcReadPassage"></div>' +
      '      <div class="rc-btn-row"><button type="button" class="rc-btn rc-btn-primary" id="rcBtnContinue">Continue to retell</button></div>' +
      "    </section>" +
      '    <section id="rcStepRetell" class="rc-screen">' +
      '      <div class="rc-retell-head">' +
      '        <span class="rc-pill">Step 2 · Retell</span>' +
      '        <p class="rc-deck-tag" id="rcDeckTagRetell"></p>' +
      '        <h1 class="rc-title-retell" id="rcMainTitleRetell">Retell check</h1>' +
      '        <h2 class="rc-block-heading rc-retell-h" id="rcHeadingRetell"></h2>' +
      '        <p class="rc-instr rc-instr--retell">Use the phrase prompts. Pick a timer, Start, retell aloud, then Stop to save points.</p>' +
      "      </div>" +
      '      <div class="rc-retell-grid">' +
      '        <div class="rc-retell-main">' +
      '          <div class="rc-bubbles" id="rcPhraseBubbles"></div>' +
      "        </div>" +
      '        <div class="rc-retell-side">' +
      '          <div class="rc-timer-pick">' +
      '            <label for="rcTimerPick">Your timer</label>' +
      '            <select id="rcTimerPick" aria-label="Retell timer length">' +
      '              <option value="40">40 seconds</option>' +
      '              <option value="60">1 minute</option>' +
      '              <option value="90">1½ minutes</option>' +
      '              <option value="120">2 minutes</option>' +
      '              <option value="180">3 minutes</option>' +
      "            </select>" +
      "          </div>" +
      '          <div class="rc-timer-block">' +
      '            <div class="rc-timer-ring-wrap" aria-hidden="true">' +
      '              <svg viewBox="0 0 100 100" width="120" height="120">' +
      '                <defs><linearGradient id="rcRingGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#a78bfa"/><stop offset="100%" style="stop-color:#38bdf8"/></linearGradient></defs>' +
      '                <circle class="rc-ring-bg" cx="50" cy="50" r="44" />' +
      '                <circle id="rcRingProgress" class="rc-ring-progress" cx="50" cy="50" r="44" />' +
      "              </svg>" +
      '              <span class="rc-timer-num" id="rcTimerNum">120</span>' +
      "            </div>" +
      '            <p class="rc-sub-hint" id="rcTimerStatus">Press Start when you are ready.</p>' +
      "          </div>" +
      '          <div class="rc-btn-row rc-btn-row--retell">' +
      '            <button type="button" class="rc-btn rc-btn-cyan" id="rcBtnStartRetell">Start retelling</button>' +
      '            <button type="button" class="rc-btn rc-btn-stop" id="rcBtnStop" disabled>Stop &amp; get points</button>' +
      '            <button type="button" class="rc-btn rc-btn-next" id="rcBtnNext" disabled>Next</button>' +
      "          </div>" +
      "        </div>" +
      "      </div>" +
      '      <div class="rc-points-banner" id="rcPointsBanner"></div>' +
      '      <button type="button" class="rc-link-back-step" id="rcBtnBackRead">← Back to this block (read again)</button>' +
      "    </section>" +
      "  </div>" +
      "</div>";

    var pickScreen = root.querySelector("#rcPickScreen");
    var mainFlow = root.querySelector("#rcMainFlow");
    var finale = root.querySelector("#rcFinale");
    var segmentBadge = root.querySelector("#rcSegmentBadge");
    var stepRead = root.querySelector("#rcStepRead");
    var stepRetell = root.querySelector("#rcStepRetell");
    var readPassage = root.querySelector("#rcReadPassage");
    var phraseBubbles = root.querySelector("#rcPhraseBubbles");
    var ringProgress = root.querySelector("#rcRingProgress");
    var timerNum = root.querySelector("#rcTimerNum");
    var timerPick = root.querySelector("#rcTimerPick");
    var timerStatus = root.querySelector("#rcTimerStatus");
    var pointsBanner = root.querySelector("#rcPointsBanner");
    var btnContinue = root.querySelector("#rcBtnContinue");
    var btnBackRead = root.querySelector("#rcBtnBackRead");
    var btnStartRetell = root.querySelector("#rcBtnStartRetell");
    var btnStop = root.querySelector("#rcBtnStop");
    var btnNext = root.querySelector("#rcBtnNext");

    var BLOCKS = [];
    var segmentIndex = 0;
    var timerInterval = null;
    var paragraphCompleted = false;

    ringProgress.style.strokeDasharray = String(CIRC);
    ringProgress.style.strokeDashoffset = "0";

    function readTimerSec() {
      var n = parseInt(timerPick.value, 10);
      return Number.isFinite(n) && n > 0 ? n : defaultTimer;
    }

    function syncTimerDisplay() {
      if (!timerInterval) timerNum.textContent = String(readTimerSec());
    }

    function applyTimerQuery() {
      var t = parseInt(new URLSearchParams(location.search).get("timer"), 10);
      if (!Number.isFinite(t) || t <= 0) {
        timerPick.value = String(defaultTimer);
        syncTimerDisplay();
        return;
      }
      var found = false;
      Array.prototype.forEach.call(timerPick.options, function (opt) {
        if (parseInt(opt.value, 10) === t) found = true;
      });
      if (!found) {
        var opt = document.createElement("option");
        opt.value = String(t);
        opt.textContent = t + " seconds";
        timerPick.appendChild(opt);
      }
      timerPick.value = String(t);
      syncTimerDisplay();
    }

    function stopTimerUi(fullReset) {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
      if (fullReset) {
        ringProgress.style.strokeDashoffset = "0";
        syncTimerDisplay();
      }
    }

    function finishParagraph(reason) {
      if (paragraphCompleted) return;
      paragraphCompleted = true;
      stopTimerUi(true);
      addScore(POINTS_PER_BLOCK);
      pointsBanner.textContent =
        "+" + POINTS_PER_BLOCK + " points added. Total now: " + getScore() + ".";
      pointsBanner.classList.add("show");
      btnStartRetell.disabled = true;
      btnStartRetell.textContent = "Saved";
      btnStop.disabled = true;
      timerPick.disabled = true;
      btnNext.disabled = false;
      timerStatus.textContent =
        reason === "stop" ? "Stopped — points saved." : "Time's up — points saved.";
    }

    function renderSegment() {
      if (segmentIndex >= BLOCKS.length) {
        syncCoolPhrases(null);
        mainFlow.style.display = "none";
        pickScreen.classList.remove("active");
        finale.classList.add("active");
        segmentBadge.textContent = "Done";
        return;
      }
      var block = BLOCKS[segmentIndex];
      syncCoolPhrases(block.deckId);
      segmentBadge.innerHTML =
        "<strong>" +
        (segmentIndex + 1) +
        "</strong> / " +
        BLOCKS.length +
        " · " +
        escapeHtml(block.short);
      root.querySelector("#rcDeckTag").textContent = block.deckLabel;
      root.querySelector("#rcDeckTagRetell").textContent = block.deckLabel;
      root.querySelector("#rcMainTitleRead").textContent = block.readTitle;
      root.querySelector("#rcMainTitleRetell").textContent = block.readTitle;
      root.querySelector("#rcHeadingRead").textContent = block.short;
      root.querySelector("#rcHeadingRetell").textContent = block.short;
      readPassage.innerHTML = renderReadPassageHtml(block);
      phraseBubbles.innerHTML = block.phrases
        .map(function (p) {
          var label =
            p && typeof p === "object"
              ? String(p.label || p.highlight || "")
              : String(p || "");
          return '<span class="rc-bubble">' + escapeHtml(label) + "</span>";
        })
        .join("");
      btnNext.textContent =
        segmentIndex < BLOCKS.length - 1
          ? "Next: " + BLOCKS[segmentIndex + 1].short
          : "Finish";
      stopTimerUi(true);
      paragraphCompleted = false;
      pointsBanner.classList.remove("show");
      btnNext.disabled = true;
      btnStartRetell.disabled = false;
      btnStartRetell.textContent = "Start retelling";
      btnStop.disabled = true;
      timerPick.disabled = false;
      timerStatus.textContent = "Press Start when you are ready.";
      stepRetell.classList.remove("active");
      stepRead.classList.add("active");
      mainFlow.style.display = "block";
      mainFlow.classList.add("active");
      stepRead.classList.add("active");
    }

    function startFlow(selectedIds) {
      BLOCKS = flattenBlocks(decks, selectedIds);
      segmentIndex = 0;
      pickScreen.classList.remove("active");
      if (!BLOCKS.length) {
        pickScreen.classList.add("active");
        return;
      }
      renderSegment();
    }

    function renderPicker() {
      syncCoolPhrases(null);
      document.title = "Unit " + unit + " — Retell check";
      if (!decks.length) {
        pickScreen.innerHTML =
          '<div class="rc-empty">' +
          "<p><strong>Retell check</strong></p>" +
          "<p>Для Unit " +
          unit +
          " пока нет текстов. Сначала добавьте колоды в <code>js/fce-retell-check-decks.js</code>.</p>" +
          "</div>";
        pickScreen.classList.add("active");
        segmentBadge.textContent = "";
        return;
      }

      var deckIds = decks.map(function (d) {
        return d.id;
      });
      var qDecks = parseDeckQuery(new URLSearchParams(location.search).get("decks"), deckIds);
      var defaultChecked = qDecks || deckIds.slice();

      var rows = decks
        .map(function (deck) {
          var checked = defaultChecked.indexOf(deck.id) >= 0 ? " checked" : "";
          return (
            '<label class="rc-pick-row" data-deck="' +
            escapeHtml(deck.id) +
            '">' +
            '<input type="checkbox" name="rcDeck" value="' +
            escapeHtml(deck.id) +
            '"' +
            checked +
            " />" +
            '<div class="rc-pick-main"><strong>' +
            escapeHtml(deck.label) +
            "</strong><span>" +
            escapeHtml(deck.readTitle) +
            " · " +
            escapeHtml(deck.blurb) +
            "</span></div>" +
            "</label>"
          );
        })
        .join("");

      pickScreen.innerHTML =
        '<span class="rc-pill">Retell check</span>' +
        "<h1 class=\"rc-title-read\" style=\"font-size:1.6rem;margin-bottom:8px;\">Choose texts</h1>" +
        '<p class="rc-pick-lead">Tick the texts you want in this run. Step 1: read with dotted phrases → Step 2: retell with timer (default 2 min, you can change it).</p>' +
        '<div class="rc-pick-panel"><h2>Texts for Unit ' +
        unit +
        "</h2>" +
        '<div class="rc-pick-list" id="rcPickList">' +
        rows +
        "</div>" +
        '<div class="rc-btn-row"><button type="button" class="rc-btn rc-btn-primary" id="rcBtnStartPick">Start retell check</button></div>' +
        "</div>";

      pickScreen.classList.add("active");
      mainFlow.classList.remove("active");
      finale.classList.remove("active");

      pickScreen.querySelectorAll(".rc-pick-row").forEach(function (row) {
        var input = row.querySelector('input[type="checkbox"]');
        function syncRow() {
          row.classList.toggle("is-off", !input.checked);
        }
        syncRow();
        input.addEventListener("change", syncRow);
        row.addEventListener("click", function (e) {
          if (e.target === input) return;
          input.checked = !input.checked;
          syncRow();
        });
      });

      pickScreen.querySelector("#rcBtnStartPick").addEventListener("click", function () {
        var selected = [];
        pickScreen.querySelectorAll('input[name="rcDeck"]:checked').forEach(function (cb) {
          selected.push(cb.value);
        });
        if (!selected.length) return;
        startFlow(selected);
      });

      if (qDecks && qDecks.length) {
        startFlow(qDecks);
      }
    }

    btnContinue.addEventListener("click", function () {
      stepRead.classList.remove("active");
      stepRetell.classList.add("active");
      pointsBanner.classList.remove("show");
      paragraphCompleted = false;
      btnNext.disabled = true;
      btnStartRetell.disabled = false;
      btnStartRetell.textContent = "Start retelling";
      btnStop.disabled = true;
      timerPick.disabled = false;
      timerStatus.textContent = "Press Start when you are ready.";
      stopTimerUi(true);
    });

    btnBackRead.addEventListener("click", function () {
      stepRetell.classList.remove("active");
      stepRead.classList.add("active");
      if (!paragraphCompleted) {
        stopTimerUi(true);
        btnStartRetell.disabled = false;
        btnStartRetell.textContent = "Start retelling";
        btnStop.disabled = true;
        timerPick.disabled = false;
      }
    });

    timerPick.addEventListener("change", syncTimerDisplay);

    btnStartRetell.addEventListener("click", function () {
      if (timerInterval || paragraphCompleted) return;
      var sec = readTimerSec();
      ringProgress.style.strokeDashoffset = "0";
      timerNum.textContent = String(sec);
      btnStartRetell.disabled = true;
      btnStartRetell.textContent = "Speaking...";
      btnStop.disabled = false;
      timerPick.disabled = true;
      timerStatus.textContent = "Up to " + String(sec) + " seconds.";
      var start = Date.now();
      timerInterval = setInterval(function () {
        var elapsed = (Date.now() - start) / 1000;
        var left = Math.max(0, sec - elapsed);
        timerNum.textContent = String(Math.ceil(left));
        var frac = Math.min(1, elapsed / sec);
        ringProgress.style.strokeDashoffset = String(frac * CIRC);
        if (left <= 0) {
          clearInterval(timerInterval);
          timerInterval = null;
          finishParagraph("timeup");
        }
      }, 80);
    });

    btnStop.addEventListener("click", function () {
      if (!timerInterval || paragraphCompleted) return;
      stopTimerUi(false);
      finishParagraph("stop");
    });

    btnNext.addEventListener("click", function () {
      if (!paragraphCompleted) return;
      segmentIndex += 1;
      renderSegment();
    });

    applyTimerQuery();
    renderPicker();
  }

  W.FCE_RETELL_CHECK = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
