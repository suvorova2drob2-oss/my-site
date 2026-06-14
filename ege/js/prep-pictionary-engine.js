/**
 * Pictionary — draw on canvas; host picks guessed phrase from decoys.
 *
 * Page shell: games/cpe/unit12/pictionary.html (эталон).
 * Styles: css/prep-pictionary-engine.css (.prep-pictionary).
 *
 * mount({ loadDeckEntries, getTopicList?, els, turnSeconds?, copy? })
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
   *   turnSeconds?: number,
   *   copy?: Record<string, string>
   * }} opts
   */
  function mount(opts) {
    if (!opts || typeof opts.loadDeckEntries !== "function") return;

    var els = opts.els || {};
    var SEC = typeof opts.turnSeconds === "number" ? opts.turnSeconds : 90;
    var copy = mergeCopy(
      {
        errEmptyDeck: "Word list is empty for selected pack(s).",
        errNames: "Enter at least two names, one per line.",
        pickOnePack: "Pick at least one pack.",
        pickPacksHint: "Choose one or more packs before start.",
        deckMeta: "Deck: ",
        allPacks: "all packs",
        hostWrong: "Not this turn's card — no point. Keep going.",
        lbLine: " point(s)",
      },
      opts.copy || {}
    );

    var BASE_DECK_ENTRIES = [];
    var DECK = [];
    var selectedTopicIds = null;
    var labelByTopic = {};
    var names = [];
    var scores = {};
    var turn = 0;
    var roundN = 1;
    var queue = [];
    var realPrompt = "";
    var timer = null;
    var left = 0;
    var hostMsgTimer = null;

    var drawing = false;
    var lastX = 0;
    var lastY = 0;
    var canvas = null;
    var ctx = null;

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

    function updateLeftN() {
      var ln = el("leftN");
      if (ln) ln.textContent = String(queue.length);
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
        t.className = "pic-timer" + (left <= 10 ? " warn" : "");
      }
      if (left <= 0) {
        clearTimer();
        onTimeUp();
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

    function applyPromptDisplay() {
      var pt = el("promptText");
      var hide = el("hidePrompt");
      if (!pt) return;
      var h = hide && hide.checked;
      if (!realPrompt) {
        pt.textContent = "—";
        pt.className = "p-text";
        return;
      }
      if (h) {
        pt.textContent = "· · · · (hidden from class) · · · ·";
        pt.className = "p-text is-hidden";
      } else {
        pt.textContent = realPrompt;
        pt.className = "p-text";
      }
    }

    function buildHostChoices() {
      var g = el("choiceGrid");
      var hostMsg = el("hostMsg");
      if (!g) return;
      g.innerHTML = "";
      if (hostMsg) hostMsg.textContent = "";
      if (hostMsgTimer) {
        clearTimeout(hostMsgTimer);
        hostMsgTimer = null;
      }
      if (!queue.length) return;
      var target = queue[0];
      var others = DECK.filter(function (x) {
        return x !== target;
      });
      var decoys = shuffle(others);
      var nDecoy = Math.min(4, decoys.length);
      var optsList = [target].concat(decoys.slice(0, nDecoy));
      optsList = shuffle(optsList);
      var i;
      for (i = 0; i < optsList.length; i++) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "choice-btn";
        b.setAttribute("data-phrase", optsList[i]);
        b.textContent = optsList[i];
        b.addEventListener("click", onHostChoice);
        g.appendChild(b);
      }
    }

    function onHostChoice(e) {
      if (!queue.length) return;
      var clicked = e.currentTarget.getAttribute("data-phrase");
      var target = queue[0];
      var hostMsg = el("hostMsg");
      if (clicked !== target) {
        if (hostMsg) hostMsg.textContent = copy.hostWrong;
        if (hostMsgTimer) clearTimeout(hostMsgTimer);
        hostMsgTimer = setTimeout(function () {
          if (hostMsg) hostMsg.textContent = "";
          hostMsgTimer = null;
        }, 2500);
        return;
      }
      if (hostMsg) hostMsg.textContent = "";
      if (hostMsgTimer) {
        clearTimeout(hostMsgTimer);
        hostMsgTimer = null;
      }
      var drawer = currentName();
      scores[drawer] = (scores[drawer] || 0) + 1;
      renderLB();
      queue.shift();
      clearCanvas();
      if (!queue.length) {
        clearTimer();
        var t = el("timer");
        if (t) t.textContent = "0:00";
        var ovR = el("ovR");
        if (ovR) ovR.classList.add("open");
        realPrompt = "";
        applyPromptDisplay();
        updateLeftN();
        buildHostChoices();
        return;
      }
      showNextPrompt();
    }

    function showNextPrompt() {
      realPrompt = queue.length ? queue[0] : "";
      applyPromptDisplay();
      updateLeftN();
      buildHostChoices();
      var btnNext = el("btnNextRound");
      if (btnNext) btnNext.style.display = queue.length ? "none" : "inline-block";
    }

    function clearCanvas() {
      if (!canvas || !ctx) return;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function onTimeUp() {
      if (!queue.length) {
        clearTimer();
        var t = el("timer");
        if (t) t.textContent = "—:—";
        return;
      }
      var w = queue.shift();
      queue.push(w);
      turn = (turn + 1) % names.length;
      showTurn();
      clearCanvas();
      showNextPrompt();
      if (queue.length) startTimer();
      else {
        var t2 = el("timer");
        if (t2) t2.textContent = "—:—";
        var ovR = el("ovR");
        if (ovR) ovR.classList.add("open");
      }
    }

    function startRound(reshuffle) {
      if (reshuffle) {
        roundN++;
        turn = (turn + 1) % names.length;
      }
      var rn = el("rn");
      if (rn) rn.textContent = String(roundN);
      queue = shuffle(DECK.slice());
      var ovR = el("ovR");
      if (ovR) ovR.classList.remove("open");
      showTurn();
      fitCanvas();
      showNextPrompt();
      if (queue.length) startTimer();
      else {
        var t = el("timer");
        if (t) t.textContent = "—:—";
      }
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

    function readSetupOpts() {
      var ot = el("optTimer");
      if (ot) SEC = parseInt(ot.value, 10) || 90;
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

    function fitCanvas() {
      var wrap = el("canvasWrap");
      if (!canvas || !ctx || !wrap) return;
      var w = wrap.clientWidth;
      if (w < 2) w = 320;
      var h = Math.min(620, Math.max(320, Math.floor(window.innerHeight * 0.62)));
      canvas.width = w;
      canvas.height = h;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);
    }

    function lineStyle() {
      if (!ctx) return;
      var penColor = el("penColor");
      var penSize = el("penSize");
      ctx.strokeStyle = penColor ? penColor.value : "#1a1a1a";
      ctx.lineWidth = penSize ? parseInt(penSize.value, 10) : 4;
    }

    function pos(e) {
      var r = canvas.getBoundingClientRect();
      var cx = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
      var cy = (e.touches ? e.touches[0].clientY : e.clientY) - r.top;
      return {
        x: cx * (canvas.width / r.width),
        y: cy * (canvas.height / r.height),
      };
    }

    function startDraw(e) {
      if (e.type === "touchstart") e.preventDefault();
      drawing = true;
      var p = pos(e);
      lastX = p.x;
      lastY = p.y;
      lineStyle();
    }

    function doDraw(e) {
      if (!drawing || !ctx) return;
      if (e.type === "touchmove") e.preventDefault();
      var p = pos(e);
      lineStyle();
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      lastX = p.x;
      lastY = p.y;
    }

    function endDraw() {
      drawing = false;
    }

    function wireCanvas() {
      canvas = el("draw");
      if (!canvas) return;
      ctx = canvas.getContext("2d");
      canvas.addEventListener("mousedown", startDraw);
      canvas.addEventListener("mousemove", doDraw);
      canvas.addEventListener("mouseleave", endDraw);
      canvas.addEventListener("mouseup", endDraw);
      canvas.addEventListener("touchstart", startDraw, { passive: false });
      canvas.addEventListener("touchmove", doDraw, { passive: false });
      canvas.addEventListener("touchend", endDraw);
      W.addEventListener("resize", function () {
        var game = el("game");
        if (game && game.classList.contains("on")) fitCanvas();
      });
    }

    var penSize = el("penSize");
    var sizeLab = el("sizeLab");
    if (penSize && sizeLab) {
      penSize.addEventListener("input", function () {
        sizeLab.textContent = penSize.value;
      });
    }

    var hidePrompt = el("hidePrompt");
    if (hidePrompt) hidePrompt.addEventListener("change", applyPromptDisplay);

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
        var setup = el("setup");
        var game = el("game");
        var hide = el("hidePrompt");
        if (setup) setup.style.display = "none";
        if (game) game.classList.add("on");
        if (hide) hide.checked = false;
        var rn = el("rn");
        if (rn) rn.textContent = "1";
        renderLB();
        startRound(false);
      });
    }

    var btnPass = el("btnPass");
    if (btnPass) {
      btnPass.addEventListener("click", function () {
        if (queue.length < 2) return;
        var w = queue.shift();
        queue.push(w);
        clearCanvas();
        showNextPrompt();
      });
    }

    var btnEndTurn = el("btnEndTurn");
    if (btnEndTurn) {
      btnEndTurn.addEventListener("click", function () {
        clearTimer();
        if (queue.length) onTimeUp();
      });
    }

    var btnNextRound = el("btnNextRound");
    if (btnNextRound) btnNextRound.addEventListener("click", function () {
      startRound(true);
    });

    var ovRok = el("ovRok");
    if (ovRok) ovRok.addEventListener("click", function () {
      startRound(true);
    });

    var btnClearCanvas = el("btnClearCanvas");
    if (btnClearCanvas) btnClearCanvas.addEventListener("click", clearCanvas);

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

    wireCanvas();
    BASE_DECK_ENTRIES = opts.loadDeckEntries() || [];
    initTopicPicker();
    applySelectedDeck();
  }

  W.PREP_PICTORY = {
    mount: mount,
    buildDeckFromVocabTtt: buildDeckFromVocabTtt,
    shuffle: shuffle,
  };
})(typeof window !== "undefined" ? window : globalThis);
