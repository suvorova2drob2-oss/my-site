/**
 * Shared Snowball phrases classroom chain — DOM-agnostic game loop + optional theme rail helper.
 * Pages supply loadPhrases() (per-unit word bank). No lexical pack dependencies here.
 */
(function (W) {
  "use strict";

  var DEFAULT_IDS = {
    setupCard: "setupCard",
    playCard: "playCard",
    doneCard: "doneCard",
    namesIn: "namesIn",
    setupErr: "setupErr",
    shuffleNames: "shuffleNames",
    turnMeta: "turnMeta",
    turnName: "turnName",
    turnPhrase: "turnPhrase",
    turnInst: "turnInst",
    chainList: "chainList",
    btnStart: "btnStart",
    btnNext: "btnNext",
    btnBack: "btnBack",
    btnStop: "btnStop",
    btnAgain: "btnAgain",
    doneText: "doneText"
  };

  var DEFAULT_COPY = {
    errNoNames: "Add at least one name.",
    errNoPhrases: "No phrases in this deck — check that data scripts loaded.",
    instFirst:
      "Say one English sentence and work the phrase in naturally — keep the meaning clear.",
    instEcho:
      "Briefly recap what the previous speaker said, then add your own sentence using the new phrase below.",
    metaRound: "Round",
    metaTurn: "turn",
    metaStep: "step",
    chainMid: "\u2014",
    btnFinish: "Finish",
    btnNext: "Next",
    doneLine: "Rounds complete — spin up another chain whenever you like."
  };

  function merge(a, b) {
    var o = {};
    var k;
    for (k in a) if (Object.prototype.hasOwnProperty.call(a, k)) o[k] = a[k];
    if (b) {
      for (k in b) if (Object.prototype.hasOwnProperty.call(b, k)) o[k] = b[k];
    }
    return o;
  }

  function el(doc, id) {
    return id ? doc.getElementById(id) : null;
  }

  function shuffleInPlace(arr) {
    var i;
    for (i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    return arr;
  }

  function escAttr(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  }

  /**
   * @param {HTMLElement} railEl
   * @param {Object} opt
   * @param {{ id: string, title: string, tagline?: string, icon?: string }[]} opt.definitions
   * @param {{ id: string, title: string, tagline?: string, icon?: string } | null} [opt.combined]
   * @param {string} [opt.radioName]
   * @param {string} [opt.inputClass]
   * @param {(themeId: string) => number} [opt.countPhrases]
   * @param {HTMLElement | null} [opt.deckMetaEl]
   * @param {(n: number) => string} [opt.formatDeckMeta]
   * @param {() => void} [opt.onThemeChange]
   */
  function fillThemeRail(railEl, opt) {
    if (!railEl || !opt || !opt.definitions || !opt.definitions.length) return;

    var defs = opt.definitions;
    var combined = opt.combined;
    var radioName = opt.radioName || "snowTheme";
    var inpClass = opt.inputClass || "theme-input";
    var countFn = typeof opt.countPhrases === "function" ? opt.countPhrases : null;
    var metaEl = opt.deckMetaEl || null;
    var formatMeta =
      typeof opt.formatDeckMeta === "function"
        ? opt.formatDeckMeta
        : function (n) {
            return (
              n +
              " phrases in this deck \u00b7 same chunks as the lexical Word Bank."
            );
          };

    function getCheckedThemeId() {
      var sel = null;
      railEl.querySelectorAll('input[type="radio"]').forEach(function (inp) {
        if (inp.name === radioName && inp.checked) sel = inp;
      });
      return sel ? sel.value : defs[0].id;
    }

    function updateMeta() {
      if (!metaEl || !countFn) return;
      metaEl.textContent = formatMeta(countFn(getCheckedThemeId()));
    }

    var html = "";
    var firstId = defs[0].id;
    var i;
    for (i = 0; i < defs.length; i++) {
      var d = defs[i];
      var sid = "snow-theme-" + d.id;
      var chk = d.id === firstId ? " checked" : "";
      html +=
        '<div class="theme-cell">' +
        '<input type="radio" class="' +
        escAttr(inpClass) +
        '" name="' +
        escAttr(radioName) +
        '" id="' +
        escAttr(sid) +
        '" value="' +
        escAttr(d.id) +
        '"' +
        chk +
        " />" +
        '<label class="theme-pill" for="' +
        escAttr(sid) +
        '">' +
        '<span class="theme-ico" aria-hidden="true">' +
        (d.icon || "") +
        "</span>" +
        '<span class="theme-title">' +
        escAttr(d.title) +
        "</span>" +
        '<span class="theme-tag">' +
        escAttr(d.tagline || "") +
        "</span>" +
        "</label>" +
        "</div>";
    }
    if (combined && combined.id) {
      var cid = "snow-theme-" + combined.id;
      html +=
        '<div class="theme-cell">' +
        '<input type="radio" class="' +
        escAttr(inpClass) +
        '" name="' +
        escAttr(radioName) +
        '" id="' +
        escAttr(cid) +
        '" value="' +
        escAttr(combined.id) +
        '" />' +
        '<label class="theme-pill" for="' +
        escAttr(cid) +
        '">' +
        '<span class="theme-ico" aria-hidden="true">' +
        (combined.icon || "") +
        "</span>" +
        '<span class="theme-title">' +
        escAttr(combined.title) +
        "</span>" +
        '<span class="theme-tag">' +
        escAttr(combined.tagline || "") +
        "</span>" +
        "</label>" +
        "</div>";
    }

    railEl.innerHTML = html;
    railEl.querySelectorAll('input[type="radio"]').forEach(function (inp) {
      if (inp.name !== radioName) return;
      inp.addEventListener("change", function () {
        updateMeta();
        if (typeof opt.onThemeChange === "function") opt.onThemeChange(inp.value);
      });
    });
    updateMeta();
    if (typeof opt.onThemeChange === "function") opt.onThemeChange(firstId);
  }

  /**
   * @param {Object} cfg
   * @param {() => string[]} cfg.loadPhrases Fresh list each Start (include shuffle if desired).
   * @param {Document} [cfg.doc]
   * @param {Record<string,string>} [cfg.ids]
   * @param {Object} [cfg.copy]
   * @param {string} [cfg.roundsRadioName]
   * @param {(turn:number,max:number,roundN:number,nameIx:number,nNames:number)=>string} [cfg.formatTurnMeta]
   */
  function mount(cfg) {
    if (!cfg || typeof cfg.loadPhrases !== "function") {
      console.warn("[prep-snowball-phrases] mount() needs loadPhrases()");
      return null;
    }

    var doc = cfg.doc || document;
    var ids = merge(DEFAULT_IDS, cfg.ids);
    var copy = merge(DEFAULT_COPY, cfg.copy);
    var roundsName = cfg.roundsRadioName || "rounds";

    var PHRASES = [];
    var names = [];
    var numRounds = 2;
    var turn = 0;
    var maxTurns = 0;

    function $(key) {
      return el(doc, ids[key]);
    }

    function showCard(key, on) {
      var node = $(key);
      if (node) node.classList.toggle("hidden", !on);
    }

    function parseNames() {
      var ta = $("namesIn");
      return ((ta && ta.value) || "")
        .split(/\n/)
        .map(function (s) {
          return s.trim();
        })
        .filter(Boolean);
    }

    function getNumRounds() {
      var v = parseInt(
        (doc.querySelector('input[name="' + roundsName + '"]:checked') || {}).value || "2",
        10
      );
      if (!v || v < 1) v = 1;
      if (v > 4) v = 4;
      return v;
    }

    function defaultTurnMeta(t, maxT, roundN, nameIx, nNames) {
      return (
        copy.metaRound +
        " " +
        roundN +
        " / " +
        numRounds +
        " \u00b7 " +
        copy.metaTurn +
        " " +
        nameIx +
        " / " +
        nNames +
        " \u00b7 " +
        copy.metaStep +
        " " +
        (t + 1) +
        " / " +
        maxT
      );
    }

    var fmtMeta =
      typeof cfg.formatTurnMeta === "function" ? cfg.formatTurnMeta : defaultTurnMeta;

    function render() {
      if (turn >= maxTurns) {
        finish();
        return;
      }
      var name = names[turn % names.length];
      var phrase = PHRASES[turn % PHRASES.length];
      var roundN = Math.floor(turn / names.length) + 1;
      var metaEl = $("turnMeta");
      if (metaEl)
        metaEl.textContent = fmtMeta(
          turn,
          maxTurns,
          roundN,
          1 + (turn % names.length),
          names.length
        );

      var ne = $("turnName");
      if (ne) ne.textContent = name;

      var pe = $("turnPhrase");
      if (pe) pe.textContent = "\u201C" + phrase + "\u201D";

      var ie = $("turnInst");
      if (ie)
        ie.textContent = turn === 0 ? copy.instFirst : copy.instEcho;

      var lines = [];
      var t;
      for (t = 0; t < turn; t++) {
        var nm = names[t % names.length];
        var ph = PHRASES[t % PHRASES.length];
        lines.push(t + 1 + ". " + nm + " \u2014 " + ph);
      }
      var cle = $("chainList");
      if (cle) cle.textContent = lines.length ? lines.join(" \u00b7 ") : copy.chainMid;

      var bb = $("btnBack");
      if (bb) bb.disabled = turn === 0;

      var bn = $("btnNext");
      if (bn) bn.textContent = turn === maxTurns - 1 ? copy.btnFinish : copy.btnNext;
    }

    function finish() {
      showCard("playCard", false);
      showCard("doneCard", true);
      var dt = $("doneText");
      if (dt && copy.doneLine) dt.textContent = copy.doneLine;
    }

    function start() {
      var err = $("setupErr");
      if (err) err.textContent = "";

      PHRASES = cfg.loadPhrases() || [];
      if (!Array.isArray(PHRASES)) PHRASES = [];

      var n = parseNames();
      if (!n.length) {
        if (err) err.textContent = copy.errNoNames;
        return;
      }
      if (!PHRASES.length) {
        if (err) err.textContent = copy.errNoPhrases;
        return;
      }

      var shuf = $("shuffleNames");
      if (shuf && shuf.checked) shuffleInPlace(n);

      names = n;
      numRounds = getNumRounds();
      maxTurns = names.length * numRounds;
      turn = 0;

      showCard("setupCard", false);
      showCard("playCard", true);
      showCard("doneCard", false);
      render();
    }

    function next() {
      turn++;
      if (turn >= maxTurns) {
        finish();
        return;
      }
      render();
    }

    function back() {
      if (turn < 1) return;
      turn--;
      render();
    }

    function stopToSetup() {
      showCard("playCard", false);
      showCard("doneCard", false);
      showCard("setupCard", true);
    }

    var setupRoot = $("setupCard");
    if (setupRoot && setupRoot.getAttribute("data-prep-snowball-mounted") === "1") {
      console.warn("[prep-snowball-phrases] mount() skipped — already mounted");
      return null;
    }
    if (setupRoot) setupRoot.setAttribute("data-prep-snowball-mounted", "1");

    var bs = $("btnStart");
    var bn = $("btnNext");
    var bb = $("btnBack");
    var bst = $("btnStop");
    var ba = $("btnAgain");

    if (bs) bs.addEventListener("click", start);
    if (bn) bn.addEventListener("click", next);
    if (bb) bb.addEventListener("click", back);
    if (bst) bst.addEventListener("click", stopToSetup);
    if (ba)
      ba.addEventListener("click", function () {
        showCard("doneCard", false);
        showCard("setupCard", true);
      });

    return {
      start: start,
      stopToSetup: stopToSetup
    };
  }

  W.PREP_SNOWBALL_PHRASES = {
    mount: mount,
    fillThemeRail: fillThemeRail,
    escAttr: escAttr,
    shuffleInPlace: shuffleInPlace
  };
})(typeof window !== "undefined" ? window : globalThis);
