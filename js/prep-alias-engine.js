/**
 * Alias — block-based speaking sprint (classic card grid).
 * One block of N cards on the table; next block when cleared if timer remains.
 * Shared queue per table round (like the board game).
 *
 * Page shell: games/cpe/unit12/alias.html (эталон).
 * Styles: css/prep-alias-engine.css (class .prep-alias).
 *
 * mount({ loadDeckEntries, getTopicList?, els, copy?, defaultTopicId? })
 * loadDeckEntries() → { phrase: string, topicId?: string }[]
 */
(function (W) {
  "use strict";

  function shuffle(a) {
    var x = a.slice();
    var i;
    for (i = x.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = x[i];
      x[i] = x[j];
      x[j] = t;
    }
    return x;
  }

  function mergeCopy(base, extra) {
    var o = {};
    var k;
    for (k in base) if (Object.prototype.hasOwnProperty.call(base, k)) o[k] = base[k];
    if (extra) {
      for (k in extra) if (Object.prototype.hasOwnProperty.call(extra, k)) o[k] = extra[k];
    }
    return o;
  }

  /**
   * Build deck rows from VOCAB_TTT_WORDS + optional stub fallback.
   * @param {{ stubPhrases?: () => string[], defaultTopicId?: string }} [opts]
   */
  function buildDeckFromVocabTtt(opts) {
    opts = opts || {};
    var defaultTopicId = opts.defaultTopicId || "misc";
    var entries = [];
    var seen = Object.create(null);
    var rows = Array.isArray(W.VOCAB_TTT_WORDS) ? W.VOCAB_TTT_WORDS : [];
    var i;
    for (i = 0; i < rows.length; i++) {
      var row = rows[i];
      if (!row) continue;
      var phrase = String(row.phrase != null ? row.phrase : row.ans || "").trim();
      if (!phrase) continue;
      var key = phrase.toLowerCase();
      if (seen[key]) continue;
      seen[key] = true;
      entries.push({ phrase: phrase, topicId: row.topic || defaultTopicId });
    }
    if (entries.length) return entries;
    var fallback = typeof opts.stubPhrases === "function" ? opts.stubPhrases() : [];
    for (i = 0; i < fallback.length; i++) {
      var t = String(fallback[i] || "").trim();
      if (!t) continue;
      entries.push({ phrase: t, topicId: "legacy" });
    }
    return entries;
  }

  /**
   * @param {{
   *   loadDeckEntries: () => { phrase: string, topicId?: string }[],
   *   getTopicList?: () => { id: string, label: string }[],
   *   els: Record<string, HTMLElement | null>,
   *   defaultTopicId?: string,
   *   copy?: Record<string, string>
   * }} opts
   */
  function mount(opts) {
    if (!opts || typeof opts.loadDeckEntries !== "function") return;

    var els = opts.els || {};
    var copy = mergeCopy(
      {
        errEmptyDeck: "Word list is empty for selected pack(s).",
        errNames: "Enter at least two names, one per line.",
        pickOnePack: "Pick at least one pack.",
        pickPacksHint: "Choose one or more packs before start.",
        deckMeta: "Deck: ",
        allPacks: "all packs",
        gameOverMsg: "All rounds done! Check the leaderboard or start a new game.",
        queueSuffix: " in queue",
        lbLine: " card(s)",
      },
      opts.copy || {}
    );

    var BASE_DECK_ENTRIES = [];
    var DECK = [];
    var selectedTopicIds = null;
    var labelByTopic = {};
    var SEC = 60;
    var CARDS_PER_BLOCK = 10;
    var MAX_ROUNDS = 2;
    var names = [];
    var scores = {};
    var turn = 0;
    var roundN = 1;
    var blockN = 0;
    var sessionQueue = [];
    var blockCards = [];
    var timer = null;
    var left = 0;

    function el(key) {
      return els[key] || null;
    }

    function allTopicIds() {
      var list = typeof opts.getTopicList === "function" ? opts.getTopicList() : [];
      var out = [];
      var i;
      for (i = 0; i < list.length; i++) if (list[i] && list[i].id) out.push(list[i].id);
      return out;
    }

    function selectedTopicLabel() {
      if (!selectedTopicIds || !selectedTopicIds.length) return copy.allPacks;
      var labels = [];
      var i;
      for (i = 0; i < selectedTopicIds.length; i++) {
        labels.push(labelByTopic[selectedTopicIds[i]] || selectedTopicIds[i]);
      }
      return labels.join(" + ");
    }

    function applySelectedDeck() {
      var out = [];
      var i;
      for (i = 0; i < BASE_DECK_ENTRIES.length; i++) {
        var e = BASE_DECK_ENTRIES[i];
        if (selectedTopicIds && selectedTopicIds.length && selectedTopicIds.indexOf(e.topicId) === -1) continue;
        out.push(e.phrase);
      }
      DECK = out;
      var meta = el("deckMeta");
      if (meta) meta.textContent = copy.deckMeta + selectedTopicLabel() + " (" + DECK.length + ")";
    }

    function initTopicPicker() {
      var wrap = el("topicChecks");
      var box = el("packBox");
      var hint = el("topicHint");
      if (!wrap) return;
      wrap.innerHTML = "";
      var list = typeof opts.getTopicList === "function" ? opts.getTopicList() : [];
      var i;
      labelByTopic = {};
      for (i = 0; i < list.length; i++) {
        if (list[i] && list[i].id) labelByTopic[list[i].id] = list[i].label || list[i].id;
      }
      if (!list.length) {
        if (box) box.style.display = "none";
        applySelectedDeck();
        return;
      }
      if (box) box.style.display = "";
      for (i = 0; i < list.length; i++) {
        var t = list[i];
        var row = document.createElement("label");
        row.className = "pack-row";
        var cb = document.createElement("input");
        cb.type = "checkbox";
        cb.value = t.id;
        cb.checked = true;
        cb.addEventListener("change", onTopicChange);
        var sp = document.createElement("span");
        sp.textContent = t.label;
        row.appendChild(cb);
        row.appendChild(sp);
        wrap.appendChild(row);
      }
      if (hint) hint.textContent = copy.pickPacksHint;
    }

    function onTopicChange() {
      var wrap = el("topicChecks");
      var hint = el("topicHint");
      if (!wrap) return;
      var inputs = wrap.querySelectorAll('input[type="checkbox"]');
      var picked = [];
      var i;
      for (i = 0; i < inputs.length; i++) if (inputs[i].checked) picked.push(inputs[i].value);
      if (!picked.length) {
        if (hint) hint.textContent = copy.pickOnePack;
        return;
      }
      var all = allTopicIds();
      selectedTopicIds = all.length && picked.length >= all.length ? null : picked;
      if (hint) hint.textContent = copy.pickPacksHint;
      applySelectedDeck();
    }

    function renderLB() {
      var ol = el("lbList");
      if (!ol) return;
      var arr = names.map(function (n) {
        return { n: n, s: scores[n] || 0 };
      });
      arr.sort(function (a, b) {
        return b.s - a.s;
      });
      ol.innerHTML = "";
      arr.forEach(function (o, k) {
        var li = document.createElement("li");
        li.textContent = k + 1 + ". " + o.n + " — " + o.s;
        ol.appendChild(li);
      });
    }

    function clearTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function tick() {
      left--;
      var t = el("timer");
      if (t) {
        var m = Math.floor(left / 60);
        var s = left % 60;
        t.textContent = m + ":" + (s < 10 ? "0" : "") + s;
        t.className = "alias-timer" + (left <= 10 ? " warn" : "");
      }
      if (left <= 0) {
        clearTimer();
        endExplainerTurn();
      }
    }

    function startTimer() {
      clearTimer();
      left = SEC;
      tick();
      timer = setInterval(tick, 1000);
    }

    function currentName() {
      return names[turn % names.length];
    }

    function showTurn() {
      var n = currentName();
      var cur = el("curName");
      if (cur) {
        cur.textContent = n;
        cur.className = "name " + (turn % 2 === 1 ? "b" : "");
      }
    }

    function readSetupOpts() {
      var ob = el("optBlock");
      var or = el("optRounds");
      var ot = el("optTimer");
      CARDS_PER_BLOCK = ob ? parseInt(ob.value, 10) || 10 : 10;
      MAX_ROUNDS = or ? parseInt(or.value, 10) || 1 : 1;
      SEC = ot ? parseInt(ot.value, 10) || 60 : 60;
      var rnMax = el("rnMax");
      if (rnMax) rnMax.textContent = String(MAX_ROUNDS);
    }

    function queueRemaining() {
      return sessionQueue.length;
    }

    function updateBlockMeta() {
      var active = 0;
      var i;
      for (i = 0; i < blockCards.length; i++) if (blockCards[i].active) active++;
      var bn = el("blockNum");
      var bl = el("blockLeft");
      var qm = el("queueMeta");
      if (bn) bn.textContent = String(blockN);
      if (bl) bl.textContent = String(active);
      if (qm) qm.textContent = queueRemaining() + copy.queueSuffix;
      var btn = el("btnNextBlock");
      if (btn) {
        btn.style.display = active > 0 && left > 0 && queueRemaining() > 0 ? "inline-block" : "none";
      }
    }

    function buildGrid() {
      var g = el("grid");
      if (!g) return;
      g.innerHTML = "";
      var shown = 0;
      var i;
      for (i = 0; i < blockCards.length; i++) {
        var c = blockCards[i];
        var b = document.createElement("button");
        b.type = "button";
        b.className = "alias-card";
        b.textContent = c.t;
        b.setAttribute("data-idx", String(i));
        b.setAttribute("data-n", String(shown + 1));
        if (!c.active) b.className = "alias-card is-guessed";
        else {
          b.addEventListener("click", onCard);
          shown++;
        }
        g.appendChild(b);
      }
      updateBlockMeta();
    }

    function dealNextBlock() {
      if (!sessionQueue.length) {
        blockCards = [];
        buildGrid();
        updateBlockMeta();
        return false;
      }
      blockN++;
      blockCards = [];
      var n = Math.min(CARDS_PER_BLOCK, sessionQueue.length);
      var i;
      for (i = 0; i < n; i++) blockCards.push({ t: sessionQueue.shift(), active: true });
      buildGrid();
      updateBlockMeta();
      return blockCards.length > 0;
    }

    function blockCleared() {
      var i;
      for (i = 0; i < blockCards.length; i++) if (blockCards[i].active) return false;
      return blockCards.length > 0;
    }

    function afterBlockCleared() {
      if (left <= 0) {
        endExplainerTurn();
        return;
      }
      if (queueRemaining() > 0) {
        dealNextBlock();
        if (!timer) startTimer();
        return;
      }
      endExplainerTurn();
    }

    function endExplainerTurn() {
      clearTimer();
      var t = el("timer");
      if (t) t.textContent = "—:—";
      blockCards = [];
      buildGrid();
      updateBlockMeta();
      turn++;
      if (turn >= names.length) {
        turn = 0;
        roundN++;
        var rn = el("rn");
        if (rn) rn.textContent = String(Math.min(roundN, MAX_ROUNDS));
        if (roundN > MAX_ROUNDS) {
          var msg = el("ovRMsg");
          var ovR = el("ovR");
          if (msg) msg.textContent = copy.gameOverMsg;
          if (ovR) ovR.classList.add("open");
          return;
        }
        sessionQueue = shuffle(DECK).slice();
        blockN = 0;
      }
      showTurn();
      if (dealNextBlock()) startTimer();
    }

    function onCard(e) {
      var i = parseInt(e.currentTarget.getAttribute("data-idx"), 10);
      var c = blockCards[i];
      if (!c || !c.active) return;
      c.active = false;
      var who = currentName();
      scores[who] = (scores[who] || 0) + 1;
      renderLB();
      buildGrid();
      if (blockCleared()) afterBlockCleared();
    }

    function startGameRound() {
      var rn = el("rn");
      if (rn) rn.textContent = String(roundN);
      sessionQueue = shuffle(DECK).slice();
      blockN = 0;
      blockCards = [];
      var ovR = el("ovR");
      if (ovR) ovR.classList.remove("open");
      showTurn();
      if (dealNextBlock()) startTimer();
    }

    function parseNames() {
      var err = el("err");
      var namesIn = el("namesIn");
      if (err) err.textContent = "";
      var lines = (namesIn && namesIn.value ? namesIn.value : "").split(/\r?\n/);
      var out = [];
      var k;
      for (k = 0; k < lines.length; k++) {
        var t = lines[k].trim();
        if (t) out.push(t);
      }
      if (out.length < 2) {
        if (err) err.textContent = copy.errNames;
        return null;
      }
      return out;
    }

    function resetToSetup() {
      clearTimer();
      var game = el("game");
      var setup = el("setup");
      var ovR = el("ovR");
      var ovF = el("ovF");
      if (game) game.classList.remove("on");
      if (setup) setup.style.display = "block";
      if (ovR) ovR.classList.remove("open");
      if (ovF) ovF.classList.remove("open");
    }

    var btnGo = el("btnGo");
    if (btnGo) {
      btnGo.addEventListener("click", function () {
        var err = el("err");
        if (!DECK.length) {
          if (err) err.textContent = copy.errEmptyDeck;
          return;
        }
        var p = parseNames();
        if (!p) return;
        readSetupOpts();
        names = p;
        scores = {};
        p.forEach(function (n) {
          scores[n] = 0;
        });
        turn = 0;
        roundN = 1;
        blockN = 0;
        var setup = el("setup");
        var game = el("game");
        if (setup) setup.style.display = "none";
        if (game) game.classList.add("on");
        renderLB();
        startGameRound();
      });
    }

    var btnEndTurn = el("btnEndTurn");
    if (btnEndTurn) btnEndTurn.addEventListener("click", endExplainerTurn);

    var btnNextBlock = el("btnNextBlock");
    if (btnNextBlock) {
      btnNextBlock.addEventListener("click", function () {
        if (left <= 0 || !queueRemaining()) return;
        dealNextBlock();
      });
    }

    var ovRok = el("ovRok");
    if (ovRok) {
      ovRok.addEventListener("click", function () {
        var ovR = el("ovR");
        if (ovR) ovR.classList.remove("open");
        if (roundN > MAX_ROUNDS) {
          var btnFinal = el("btnFinal");
          if (btnFinal) btnFinal.click();
          return;
        }
        startGameRound();
      });
    }

    var btnFinal = el("btnFinal");
    if (btnFinal) {
      btnFinal.addEventListener("click", function () {
        var arr = names.map(function (n) {
          return { n: n, s: scores[n] || 0 };
        });
        arr.sort(function (a, b) {
          return b.s - a.s;
        });
        var ovFList = el("ovFList");
        var ovF = el("ovF");
        if (ovFList) {
          ovFList.innerHTML = arr
            .map(function (o, r) {
              return r + 1 + ". " + o.n + " — " + o.s + copy.lbLine + "<br>";
            })
            .join("");
        }
        if (ovF) ovF.classList.add("open");
      });
    }

    var ovFok = el("ovFok");
    if (ovFok) ovFok.addEventListener("click", function () {
      var ovF = el("ovF");
      if (ovF) ovF.classList.remove("open");
    });

    var btnReset = el("btnReset");
    if (btnReset) btnReset.addEventListener("click", resetToSetup);

    BASE_DECK_ENTRIES = opts.loadDeckEntries() || [];
    initTopicPicker();
    applySelectedDeck();
  }

  W.PREP_ALIAS = {
    mount: mount,
    buildDeckFromVocabTtt: buildDeckFromVocabTtt,
    shuffle: shuffle,
  };
})(typeof window !== "undefined" ? window : globalThis);
