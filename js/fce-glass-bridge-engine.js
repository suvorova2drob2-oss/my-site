/**
 * Glass bridge — Pick glass (good vs bad) OR Type answer (tap glass → type chunk).
 * Same deck order on restart. window.FCE_GLASS_BRIDGE.mount({ getSteps }) → { refresh, setMode }
 */
(function (W) {
  "use strict";

  var MAX_BRIDGE = 10;

  function el(id) {
    return W.document.getElementById(id);
  }

  function normalizeAnswer(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/[\u2018\u2019\u0060]/g, "'")
      .replace(/\s+/g, " ");
  }

  function taskFrom(step) {
    if (!step) return { text: "", good: "", bad: "" };
    return {
      text: step.text,
      good: step.good,
      bad: step.bad,
      altGood: step.altGood,
      hintTitle: step.hintTitle,
      hintPassage: step.hintPassage,
      source: step.source
    };
  }

  /** Type mode: pairs → left/right different tasks */
  function buildBridgeSteps(raw) {
    if (!raw || !raw.length) return [];
    if (raw[0] && raw[0].left && raw[0].right) {
      return raw.slice(0, MAX_BRIDGE);
    }
    var out = [];
    for (var i = 0; i + 1 < raw.length && out.length < MAX_BRIDGE; i += 2) {
      var a = raw[i];
      var b = raw[i + 1];
      out.push({
        pack: a.pack || b.pack,
        safe: out.length % 2 === 0 ? "left" : "right",
        left: taskFrom(a),
        right: taskFrom(b)
      });
    }
    return out;
  }

  /** Pick mode: one sentence, good vs bad on panels (fixed left/right per run) */
  function buildPickSteps(raw) {
    if (!raw || !raw.length) return [];
    return raw.slice(0, MAX_BRIDGE).map(function (step, idx) {
      var okLeft = idx % 2 === 0;
      return {
        pack: step.pack,
        text: step.text,
        good: step.good,
        bad: step.bad,
        okLeft: okLeft,
        hintTitle: step.hintTitle,
        hintPassage: step.hintPassage,
        source: step.source
      };
    });
  }

  function stepCountForMode(raw, mode) {
    if (mode === "type") return buildBridgeSteps(raw).length;
    return buildPickSteps(raw).length;
  }

  function answersMatch(typed, task) {
    var t = normalizeAnswer(typed);
    if (!t) return false;
    var goods = [task.good].concat(task.altGood || []);
    for (var i = 0; i < goods.length; i++) {
      if (t === normalizeAnswer(goods[i])) return true;
    }
    return false;
  }

  function playGlassBreak() {
    try {
      var Ctx = W.AudioContext || W.webkitAudioContext;
      if (!Ctx) return;
      var ctx = new Ctx();
      var len = Math.floor(ctx.sampleRate * 0.35);
      var buf = ctx.createBuffer(1, len, ctx.sampleRate);
      var data = buf.getChannelData(0);
      for (var i = 0; i < len; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 1.8);
      }
      var src = ctx.createBufferSource();
      src.buffer = buf;
      var gain = ctx.createGain();
      gain.gain.value = 0.42;
      src.connect(gain);
      gain.connect(ctx.destination);
      src.start();
      W.setTimeout(function () {
        ctx.close();
      }, 800);
    } catch (e) {
      /* silent */
    }
  }

  function mount(opts) {
    opts = opts || {};
    var getSteps = typeof opts.getSteps === "function" ? opts.getSteps : function () {
      return [];
    };
    var rulesEl = el("gbRulesText");
    if (rulesEl && opts.rulesText) rulesEl.textContent = opts.rulesText;

    var s = {
      i: 0,
      busy: false,
      selected: null,
      mode: opts.initialMode === "type" ? "type" : "pick"
    };
    var runDeck = [];
    var current = null;
    var panelL = el("gbPanelL");
    var panelR = el("gbPanelR");
    var scene = el("gbScene");
    var crack = el("gbCrack");
    var jumper = el("gbJumper");
    var trail = el("gbBridgeTrail");
    var typeBlock = el("gbTypeBlock");
    var typeInput = el("gbTypeInput");

    function rebuildDeck() {
      var raw = getSteps() || [];
      runDeck = s.mode === "type" ? buildBridgeSteps(raw) : buildPickSteps(raw);
    }

    rebuildDeck();

    if (!runDeck.length) {
      var emptyMsg = el("gbEmptyMsg");
      if (emptyMsg) {
        emptyMsg.textContent =
          s.mode === "type"
            ? "Need at least 2 phrases for Type mode."
            : "No steps loaded for this deck yet.";
      }
    }

    function buildTrack() {
      var t = el("gbProgress");
      if (!t) return;
      t.innerHTML = "";
      for (var n = 0; n < runDeck.length; n++) {
        var d = W.document.createElement("span");
        d.className = "gb-dot" + (n < s.i ? " is-done" : "") + (n === s.i ? " is-cur" : "");
        t.appendChild(d);
      }
    }

    function buildTrail() {
      if (!trail) return;
      trail.innerHTML = "";
      for (var n = 0; n < s.i; n++) {
        var slab = W.document.createElement("div");
        slab.className = "gb-trail-slab";
        trail.appendChild(slab);
      }
    }

    function showWin() {
      el("gbOvWin").classList.add("is-open");
      s.busy = true;
    }

    function hideOverlays() {
      el("gbOvWin").classList.remove("is-open");
      el("gbOvReveal").classList.remove("is-open");
    }

    function flashCrack() {
      if (!crack) return;
      crack.hidden = false;
      W.setTimeout(function () {
        crack.hidden = true;
      }, 380);
    }

    function triggerFall(thenReset) {
      playGlassBreak();
      flashCrack();
      if (scene) scene.classList.add("gb-falling");
      W.setTimeout(function () {
        if (scene) scene.classList.remove("gb-falling");
        if (thenReset) fullReset(false);
      }, 950);
    }

    function hopSafe() {
      if (jumper) {
        jumper.classList.remove("is-hop");
        void jumper.offsetWidth;
        jumper.classList.add("is-hop");
      }
    }

    function setPanelBlank(btn) {
      if (!btn) return;
      btn.innerHTML = '<span class="gb-panel-mark" aria-hidden="true">◆</span>';
    }

    function setPanelPhrase(btn, text) {
      if (!btn) return;
      btn.textContent = text;
    }

    function handlePanelClick(side) {
      if (s.busy || !current) return;
      if (s.mode === "pick") {
        var btn = side === "left" ? panelL : panelR;
        var isGood = side === "left" ? current.okLeft : !current.okLeft;
        onPick(btn, isGood);
      } else {
        selectPanelType(side);
      }
    }

    function bindPanelClicks() {
      [panelL, panelR].forEach(function (btn) {
        if (!btn || btn.__gbBound) return;
        btn.__gbBound = true;
        btn.addEventListener("click", function () {
          if (btn === panelL) handlePanelClick("left");
          else handlePanelClick("right");
        });
      });
    }

    bindPanelClicks();

    function setPanelState() {
      if (!panelL || !panelR) return;
      panelL.classList.toggle("is-picked", s.selected === "left");
      panelR.classList.toggle("is-picked", s.selected === "right");
      panelL.disabled = s.busy;
      panelR.disabled = s.busy;
    }

    function applyModeUi() {
      if (scene) scene.classList.toggle("gb-mode-type", s.mode === "type");
      if (typeBlock) typeBlock.hidden = s.mode !== "type" || !s.selected;
    }

    function renderPick() {
      current = runDeck[s.i];
      s.selected = null;
      el("gbStepLabel").textContent = "Step " + (s.i + 1) + " / " + runDeck.length;
      el("gbQline").textContent = current.text;
      el("gbMsg").textContent = "Pick the safe glass — left or right.";
      el("gbMsg").className = "gb-msg";

      var leftText = current.okLeft ? current.good : current.bad;
      var rightText = current.okLeft ? current.bad : current.good;

      if (panelL) {
        panelL.className = "gb-panel gb-panel--left gb-panel--pick";
        setPanelPhrase(panelL, leftText);
      }
      if (panelR) {
        panelR.className = "gb-panel gb-panel--right gb-panel--pick";
        setPanelPhrase(panelR, rightText);
      }

      if (typeBlock) typeBlock.hidden = true;
      applyModeUi();
      setPanelState();
    }

    function selectPanelType(side) {
      if (s.busy || !current) return;
      s.selected = side;
      var task = side === "left" ? current.left : current.right;
      el("gbQline").textContent = task.text;
      if (typeBlock) typeBlock.hidden = false;
      if (typeInput) {
        typeInput.value = "";
        typeInput.focus();
      }
      el("gbMsg").textContent =
        side === "left" ? "Left glass · type your answer" : "Right glass · type your answer";
      el("gbMsg").className = "gb-msg";
      applyModeUi();
      setPanelState();
    }

    function renderType() {
      current = runDeck[s.i];
      s.selected = null;
      el("gbStepLabel").textContent = "Step " + (s.i + 1) + " / " + runDeck.length;
      el("gbQline").textContent = "Tap left or right glass to see the task.";
      el("gbMsg").textContent = "";
      el("gbMsg").className = "gb-msg";

      if (panelL) {
        panelL.className = "gb-panel gb-panel--left";
        setPanelBlank(panelL);
      }
      if (panelR) {
        panelR.className = "gb-panel gb-panel--right";
        setPanelBlank(panelR);
      }

      if (typeBlock) typeBlock.hidden = true;
      if (typeInput) typeInput.value = "";
      applyModeUi();
      setPanelState();
    }

    function render() {
      hideOverlays();
      if (!runDeck.length) {
        var empty = el("gbEmptyMsg");
        if (empty) {
          empty.textContent =
            s.mode === "type"
              ? "Need at least 2 phrases for Type mode."
              : "No steps loaded for this deck yet.";
        }
        return;
      }
      if (el("gbEmptyMsg")) el("gbEmptyMsg").textContent = "";
      if (s.i >= runDeck.length) {
        showWin();
        return;
      }
      buildTrack();
      buildTrail();
      if (s.mode === "pick") renderPick();
      else renderType();
    }

    function advanceStep() {
      s.i += 1;
      s.busy = false;
      s.selected = null;
      if (s.i >= runDeck.length) showWin();
      else render();
    }

    function onPick(btn, isGood) {
      if (s.busy || s.mode !== "pick") return;
      s.busy = true;
      if (panelL) panelL.disabled = true;
      if (panelR) panelR.disabled = true;

      if (isGood) {
        btn.classList.add("is-safe");
        el("gbMsg").textContent = "Safe glass! Jump forward.";
        el("gbMsg").className = "gb-msg is-win";
        hopSafe();
        W.setTimeout(advanceStep, 520);
      } else {
        btn.classList.add("is-trap");
        el("gbMsg").textContent = "Wrong glass — you fall!";
        el("gbMsg").className = "gb-msg is-lose";
        W.setTimeout(function () {
          triggerFall(true);
        }, 420);
      }
    }

    function onTypeCheck() {
      if (s.busy || s.mode !== "type" || !current || !s.selected) {
        el("gbMsg").textContent = "Pick a glass first.";
        el("gbMsg").className = "gb-msg";
        return;
      }
      var val = typeInput ? typeInput.value : "";
      if (!normalizeAnswer(val)) {
        el("gbMsg").textContent = "Type your answer first.";
        el("gbMsg").className = "gb-msg";
        return;
      }

      var task = s.selected === "left" ? current.left : current.right;
      s.busy = true;

      if (!answersMatch(val, task)) {
        el("gbRevealAns").textContent = task.good;
        el("gbRevealNote").textContent = "Glass breaks — you start again from step 1.";
        el("gbOvReveal").classList.add("is-open");
        return;
      }

      if (s.selected !== current.safe) {
        el("gbMsg").textContent = "Right phrase — but wrong glass!";
        el("gbMsg").className = "gb-msg is-lose";
        W.setTimeout(function () {
          triggerFall(true);
        }, 520);
        return;
      }

      el("gbMsg").textContent = "Safe! Jump forward.";
      el("gbMsg").className = "gb-msg is-win";
      if (panelL && s.selected === "left") panelL.classList.add("is-safe");
      if (panelR && s.selected === "right") panelR.classList.add("is-safe");
      hopSafe();
      W.setTimeout(advanceStep, 520);
    }

    function fullReset(reloadSteps) {
      if (reloadSteps) rebuildDeck();
      s.i = 0;
      s.busy = false;
      s.selected = null;
      hideOverlays();
      if (el("gbMsg")) {
        el("gbMsg").className = "gb-msg";
        el("gbMsg").textContent = "";
      }
      if (!runDeck.length) {
        var empty = el("gbEmptyMsg");
        if (empty) empty.textContent = "No steps in this deck.";
        return;
      }
      if (el("gbEmptyMsg")) el("gbEmptyMsg").textContent = "";
      render();
    }

    function setMode(mode) {
      if (mode !== "pick" && mode !== "type") return;
      s.mode = mode;
      var tabs = el("gbModeTabs");
      if (tabs) {
        tabs.querySelectorAll(".gb-mode-tab").forEach(function (btn) {
          btn.classList.toggle("is-active", btn.getAttribute("data-mode") === mode);
        });
      }
      rebuildDeck();
      fullReset(false);
      if (typeof opts.onModeChange === "function") opts.onModeChange(mode);
    }

    function refresh() {
      rebuildDeck();
      fullReset(false);
    }

    function activeHintTask() {
      if (s.i >= runDeck.length) return null;
      var step = runDeck[s.i];
      if (s.mode === "pick") return step;
      if (s.selected === "right") return step.right;
      if (s.selected === "left") return step.left;
      return step.left;
    }

    el("gbBtnRetry").addEventListener("click", function () {
      fullReset(false);
    });
    el("gbBtnAgain").addEventListener("click", function () {
      fullReset(false);
    });
    el("gbBtnRevealNext").addEventListener("click", function () {
      el("gbOvReveal").classList.remove("is-open");
      triggerFall(true);
    });

    if (el("gbTypeCheck")) el("gbTypeCheck").addEventListener("click", onTypeCheck);
    if (typeInput) {
      typeInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") onTypeCheck();
      });
    }

    if (el("gbModeTabs")) {
      el("gbModeTabs").addEventListener("click", function (e) {
        var btn = e.target.closest(".gb-mode-tab");
        if (!btn) return;
        setMode(btn.getAttribute("data-mode"));
      });
    }

    el("gbBtnHint").addEventListener("click", function () {
      if (s.i >= runDeck.length) return;
      var task = activeHintTask();
      var titleEl = el("gbHintTitle");
      var frame = el("gbHintFrame");
      var frameWrap = el("gbHintFrameWrap");
      var body = el("gbHintBody");

      if (task && task.hintPassage) {
        titleEl.textContent = task.hintTitle || "Source text";
        if (frameWrap) frameWrap.hidden = true;
        if (body) {
          body.hidden = false;
          body.textContent = task.hintPassage;
        }
      } else if (task && task.source) {
        titleEl.textContent = task.hintTitle || task.source;
        if (body) body.hidden = true;
        if (frameWrap) frameWrap.hidden = false;
        if (frame) {
          frame.src = task.source + (/\?/.test(task.source) ? "&" : "?") + "embed=1";
        }
      } else {
        titleEl.textContent = s.mode === "type" && !s.selected ? "Pick a glass first" : "No hint";
        if (frameWrap) frameWrap.hidden = true;
        if (body) {
          body.hidden = false;
          body.textContent =
            s.mode === "type" && !s.selected
              ? "Tap left or right glass, then open Hint."
              : "No hint for this task yet.";
        }
      }
      el("gbHintModal").classList.add("is-open");
    });

    el("gbHintClose").addEventListener("click", function () {
      el("gbHintModal").classList.remove("is-open");
    });
    el("gbHintModal").addEventListener("click", function (e) {
      if (e.target.id === "gbHintModal") el("gbHintModal").classList.remove("is-open");
    });

    setMode(s.mode);

    return {
      refresh: refresh,
      setMode: setMode,
      getMode: function () {
        return s.mode;
      }
    };
  }

  W.FCE_GLASS_BRIDGE = {
    mount: mount,
    MAX_BRIDGE: MAX_BRIDGE,
    buildBridgeSteps: buildBridgeSteps,
    buildPickSteps: buildPickSteps,
    stepCountForMode: stepCountForMode
  };
})(typeof window !== "undefined" ? window : globalThis);
