/**
 * Memes · Sound Booth · Sticky board — wired into `.folder` rows on Vocabulary Games.
 * window.FCE_LEX_GAMES_EXTRAS.wireFolders({ unit, host })
 */
(function (W) {
  "use strict";

  function el(id) {
    return W.document.getElementById(id);
  }

  function paintDeckNav(nav, items, activeId, attrName) {
    if (!nav) return;
    nav.innerHTML = items
      .map(function (item, idx) {
        var cls = "folder-deck-link" + (item.id === activeId ? " here" : "");
        var sep = idx > 0 ? '<span class="folder-deck-sep"> · </span>' : "";
        return (
          sep +
          '<button type="button" class="' +
          cls +
          '" data-' +
          attrName +
          '="' +
          item.id +
          '">' +
          item.label +
          "</button>"
        );
      })
      .join("");
  }

  function wireDeckNav(nav, items, attrName, onPick) {
    if (!nav) return;
    nav.querySelectorAll(".folder-deck-link").forEach(function (btn) {
      btn.addEventListener("click", function (ev) {
        ev.stopPropagation();
        var id = btn.getAttribute("data-" + attrName);
        if (!id) return;
        onPick(id);
      });
    });
  }

  var MEME_DECK_ICONS = {
    get: "✉",
    run: "🏃",
    clothes: "👔",
    lifestyle: "☀"
  };

  function memeDeckMeta(d) {
    var flat =
      W.FCE_UNIT_MEMES && typeof W.FCE_UNIT_MEMES.flatCardsFromDeck === "function"
        ? W.FCE_UNIT_MEMES.flatCardsFromDeck(d)
        : [];
    var blurbs = {
      get: "Get phrases · Ex. 2 matching",
      run: "Expressions with run · Ex. 2–3",
      clothes: "SB 1.1 · all speakers",
      lifestyle: "This is your life · Lucas · Maja · Reo · Ben"
    };
    var base = blurbs[d.id] || "Flip cards";
    var partsN = d.mode === "parts" ? (d.parts || []).length : 0;
    var countLabel =
      flat.length +
      " card" +
      (flat.length === 1 ? "" : "s") +
      (partsN ? " · " + partsN + " parts" : "");
    return {
      desc: base,
      count: countLabel,
      icon: MEME_DECK_ICONS[d.id] || "🃏"
    };
  }

  function paintMemeDeckGrid(nav, decks, activeId, onPick) {
    if (!nav) return;
    nav.className =
      "lex-meme-deck-grid" + (activeId ? " lex-meme-deck-grid--active" : "");
    nav.setAttribute("role", "list");
    nav.setAttribute("aria-label", "Meme decks");
    nav.innerHTML = decks
      .map(function (d) {
        var open = d.id === activeId;
        var meta = memeDeckMeta(d);
        var cls = "meme-deck-tile" + (open ? " is-open" : "");
        return (
          '<button type="button" class="' +
          cls +
          '" role="listitem" data-deck="' +
          d.id +
          '">' +
          '<span class="meme-deck-tile__icon" aria-hidden="true">' +
          meta.icon +
          "</span>" +
          '<span class="meme-deck-tile__body">' +
          '<span class="meme-deck-tile__title">' +
          d.label +
          "</span>" +
          '<span class="meme-deck-tile__desc">' +
          meta.desc +
          "</span>" +
          '<span class="meme-deck-tile__count">' +
          meta.count +
          "</span>" +
          "</span>" +
          '<span class="meme-deck-tile__cta">' +
          (open ? "Close ↑" : "Open →") +
          "</span>" +
          "</button>"
        );
      })
      .join("");
    nav.querySelectorAll("[data-deck]").forEach(function (btn) {
      btn.addEventListener("click", function (ev) {
        ev.stopPropagation();
        var id = btn.getAttribute("data-deck");
        if (id) onPick(id);
      });
    });
  }

  function mountMemesInPool(pool, unit) {
    if (!pool) return;
    pool.innerHTML =
      '<div class="mini-game-box lex-extra-embed lex-meme-launch" id="memesEmbedBox">' +
      '<div id="lexMemeDeckNav" class="lex-meme-deck-grid" role="list" aria-label="Meme decks"></div>' +
      '<div id="lexMemeEngineRoot" class="lex-extra-engine-root" hidden></div>' +
      "</div>";

    var api = W.FCE_UNIT_MEMES && W.FCE_UNIT_MEMES.forUnit(unit);
    var decks = (api && api.decks) || [];
    var nav = el("lexMemeDeckNav");
    var root = el("lexMemeEngineRoot");
    if (!nav || !root) return;

    if (!decks.length) {
      nav.className = "";
      nav.innerHTML =
        '<p class="lex-extra-empty">Meme decks will appear when phrase lists are wired for Unit ' +
        unit +
        ".</p>";
      return;
    }

    var activeId = null;
    var flipMountId = "lexMemeFlipMount";

    function deckHasImages(d) {
      if (d.mode === "parts") {
        return (d.parts || []).some(function (p) {
          return (p.cards || []).some(function (c) {
            return String(c.img || "").trim();
          });
        });
      }
      return (d.cards || []).some(function (c) {
        return String(c.img || "").trim();
      });
    }

    function closeEngine() {
      activeId = null;
      root.hidden = true;
      root.innerHTML = "";
      paintMemeDeckGrid(nav, decks, activeId, pickDeck);
    }

    function mountDeck() {
      var d = decks.filter(function (x) {
        return x.id === activeId;
      })[0];
      if (!d) return;
      root.innerHTML = '<div id="' + flipMountId + '"></div>';
      if (d.stub && !deckHasImages(d)) {
        root.innerHTML =
          '<p class="lex-extra-empty"><b>' +
          d.label +
          "</b> — meme images when real phrase lists arrive. Lexical trainer above already uses stub phrases.</p>";
        return;
      }
      if (d.mode === "parts" && W.FCE_VOCAB_MEME_PARTS) {
        W.FCE_VOCAB_MEME_PARTS.mount({
          rootId: flipMountId,
          flipMountId: flipMountId + "-inner",
          parts: d.parts || []
        });
        return;
      }
      if (W.FCE_VOCAB_MEME_FLIP) {
        W.FCE_VOCAB_MEME_FLIP.mount({
          rootId: flipMountId,
          cards: d.cards || [],
          compact: true
        });
      }
    }

    function pickDeck(id) {
      if (id === activeId) {
        closeEngine();
        return;
      }
      activeId = id;
      root.hidden = false;
      paintMemeDeckGrid(nav, decks, activeId, pickDeck);
      mountDeck();
    }

    paintMemeDeckGrid(nav, decks, activeId, pickDeck);
  }

  function fillSbThemeRail(rail, deckMeta, radioName, formatMeta, extra) {
    extra = extra || {};
    var defs = W.FCE_SB_THEME_DEFINITIONS || [];
    var combined = W.FCE_SB_THEME_DEFINITIONS_COMBINED;
    var modeRadio = extra.bingoModeRadio || "";

    function selectedMode() {
      if (!modeRadio) return "paraphrase";
      var sel = W.document.querySelector(
        'input[name="' + modeRadio + '"]:checked'
      );
      return sel && sel.value === "meme" ? "meme" : "paraphrase";
    }

    function countLex(id) {
      var mode = selectedMode();
      return typeof W.FCE_SB_getLexRows === "function"
        ? W.FCE_SB_getLexRows(id, mode).length
        : 0;
    }

    function formatMetaWithMode(n) {
      var mode = selectedMode();
      if (typeof formatMeta === "function") {
        return formatMeta(n, mode);
      }
      return n + " pairs · need 9 min.";
    }

    if (rail && W.PREP_SNOWBALL_PHRASES && W.PREP_SNOWBALL_PHRASES.fillThemeRail) {
      W.PREP_SNOWBALL_PHRASES.fillThemeRail(rail, {
        definitions: defs,
        combined: combined || null,
        radioName: radioName,
        inputClass: "theme-input",
        deckMetaEl: deckMeta,
        countPhrases: countLex,
        formatDeckMeta: formatMetaWithMode,
        onThemeChange: extra.onThemeChange
      });
    }

    if (typeof extra.onDeckMetaRefresh === "function") {
      extra.onDeckMetaRefresh(countLex, formatMetaWithMode, deckMeta, rail, radioName);
    }
  }

  function mountSoundBoothInPool(pool, unit) {
    if (!pool || !W.PREP_VOICE_BINGO || !W.PREP_ECHO_MINUTE) return;
    if (unit) W.FCE_SOUND_BOOTH_UNIT = unit;

    var modes = [
      {
        id: "bingo",
        label: "Voice bingo",
        desc: "3×3 grid · meme hints · mic or type the phrase",
        icon: "🎯"
      },
      {
        id: "echo",
        label: "Echo Minute",
        desc: "60-second sprint · hear the definition · say the phrase",
        icon: "⏱️"
      }
    ];

    pool.innerHTML =
      '<div class="mini-game-box lex-extra-embed lex-sb-launch">' +
      '<div class="lex-sb-mode-grid" id="lexSbModeGrid" role="list" aria-label="Sound Booth modes"></div>' +
      "</div>";

    function paintModeCards() {
      var grid = el("lexSbModeGrid");
      if (!grid) return;
      grid.innerHTML = modes
        .map(function (m) {
          return (
            '<button type="button" class="lex-sb-mode-card" role="listitem" data-sb-mode="' +
            m.id +
            '">' +
            '<span class="lex-sb-mode-icon" aria-hidden="true">' +
            (m.icon || "▶") +
            "</span>" +
            '<span class="lex-sb-mode-title">' +
            m.label +
            "</span>" +
            '<span class="lex-sb-mode-desc">' +
            m.desc +
            "</span>" +
            '<span class="lex-sb-mode-go">Open fullscreen →</span>' +
            "</button>"
          );
        })
        .join("");
      grid.querySelectorAll("[data-sb-mode]").forEach(function (btn) {
        btn.addEventListener("click", function (ev) {
          ev.stopPropagation();
          var id = btn.getAttribute("data-sb-mode");
          if (id) pickMode(id);
        });
      });
    }

    var activeMode = null;
    var fsOverlay = null;
    var fsTeardown = null;
    var bingoRadio = "lexSbBingoU" + unit;
    var echoRadio = "lexSbEchoU" + unit;
    var bingoModeRadio = "lexSbBingoModeU" + unit;

    function refreshBingoDeckMeta() {
      var meta = el("lexSbBingoMeta");
      var rail = el("lexSbBingoRail");
      if (!meta || !rail) return;
      var sel = W.document.querySelector(
        'input[name="' + bingoRadio + '"]:checked'
      );
      var themeId =
        sel && sel.value
          ? sel.value
          : W.FCE_SB_THEME_DEFINITIONS && W.FCE_SB_THEME_DEFINITIONS[0]
            ? W.FCE_SB_THEME_DEFINITIONS[0].id
            : "";
      var modeSel = W.document.querySelector(
        'input[name="' + bingoModeRadio + '"]:checked'
      );
      var mode =
        modeSel && modeSel.value === "meme" ? "meme" : "paraphrase";
      var n =
        typeof W.FCE_SB_getLexRows === "function"
          ? W.FCE_SB_getLexRows(themeId, mode).length
          : 0;
      meta.textContent =
        mode === "meme"
          ? n + " meme lines · need 9 min."
          : n + " hint→phrase pairs · need 9 min.";
    }

    function bingoPanelHtml() {
      return (
        '<div class="lex-sb-panel lex-sb-panel--fs lex-sb-vbingo">' +
        '<section class="vb-fs-setup" aria-label="Theme and controls">' +
        '<div class="vb-fs-setup-top">' +
        '<p class="lex-sb-wb-head">Theme</p>' +
        '<div class="vb-mode-seg" role="radiogroup" aria-label="Bingo mode">' +
        '<input type="radio" class="vb-mode-input" name="' +
        bingoModeRadio +
        '" id="' +
        bingoModeRadio +
        '-para" value="paraphrase" checked />' +
        '<label class="vb-mode-opt" for="' +
        bingoModeRadio +
        '-para">Paraphrase · без мема</label>' +
        '<input type="radio" class="vb-mode-input" name="' +
        bingoModeRadio +
        '" id="' +
        bingoModeRadio +
        '-meme" value="meme" />' +
        '<label class="vb-mode-opt" for="' +
        bingoModeRadio +
        '-meme">Meme · без парафраза</label>' +
        "</div>" +
        "</div>" +
        '<div class="theme-grid vb-fs-theme-grid" id="lexSbBingoRail" role="radiogroup"></div>' +
        '<p class="deck-meta" id="lexSbBingoMeta"></p>' +
        '<div class="lex-sb-actions vb-fs-actions">' +
        '<button type="button" class="lex-sb-btn-main" id="lexSbBingoNew">New game</button>' +
        '<button type="button" class="lex-sb-btn-sec" id="lexSbBingoDontKnow">I don\'t know</button>' +
        "</div>" +
        "</section>" +
        '<div class="vb-split vb-fs-split">' +
        '<section class="vb-split-play vb-fs-play" aria-label="Voice bingo grid">' +
        '<p class="lex-sb-clue-label" id="lexSbBingoClueLabel">Definition</p>' +
        '<div class="vb-fs-clue" id="lexSbBingoClue" aria-live="polite"></div>' +
        '<div class="vb-grid lex-sb-vb-grid vb-fs-grid" id="lexSbBingoGrid"></div>' +
        '<p class="progress-row" id="lexSbBingoProgress"></p>' +
        '<p class="mic-label">Mic · say a short phrase from the pool</p>' +
        '<p class="vb-file-hint" id="lexSbBingoFileHint" hidden></p>' +
        '<p class="vb-transcript vb-fs-transcript" id="lexSbBingoTranscript"></p>' +
        '<div class="vb-type-row vb-fs-type-row">' +
        '<input type="text" id="lexSbBingoType" autocomplete="off" placeholder="Type the phrase…" />' +
        '<button type="button" class="lex-sb-btn-main" id="lexSbBingoCheck">Check</button>' +
        "</div>" +
        '<p class="status-row" id="lexSbBingoStatus"></p>' +
        '<p class="win-banner" id="lexSbBingoWin" hidden></p>' +
        "</section>" +
        '<aside class="vb-split-memes vb-fs-memes" aria-label="Meme visuals">' +
        '<p class="vb-meme-kicker">Meme</p>' +
        '<div class="vb-meme-hero">' +
        '<img id="lexSbBingoMemeImg" class="vb-meme-hero-img" alt="" hidden />' +
        '<div class="vb-meme-hero-empty" id="lexSbBingoMemePh">' +
        '<span class="vb-meme-hero-empty-icon" aria-hidden="true">🖼</span>' +
        '<span class="vb-meme-hero-empty-text">Choose a theme — preview loads here</span>' +
        "</div>" +
        "</div>" +
        '<div class="vb-meme-strip" id="lexSbBingoMemeStrip"></div>' +
        "</aside>" +
        "</div>" +
        "</div>"
      );
    }

    function echoPanelHtml() {
      return (
        '<div class="lex-sb-panel lex-sb-panel--fs" id="lexSbPanelEcho" data-sb-panel="echo">' +
        '<p class="lex-sb-wb-head">Theme</p>' +
        '<div class="theme-grid" id="lexSbEchoRail" role="radiogroup"></div>' +
        '<p class="deck-meta" id="lexSbEchoMeta"></p>' +
        '<div class="lex-sb-echo-voice-row">' +
        '<label class="tts-voice-label" for="lexSbEchoVoicePick">Voice</label>' +
        '<select id="lexSbEchoVoicePick" class="tts-voice-select" aria-label="TTS voice"></select>' +
        '</div>' +
        '<div class="mic-pick-row">' +
        '<label class="tts-voice-label" for="lexSbEchoMicPick">Microphone</label>' +
        '<div class="mic-pick-controls">' +
        '<select id="lexSbEchoMicPick" class="tts-voice-select mic-pick-select" disabled aria-label="Microphone">' +
        '<option value="">— allow mic first —</option>' +
        '</select>' +
        '<button type="button" class="lex-sb-btn-sec b-mic-allow" id="lexSbEchoMicAllow">Allow mic</button>' +
        '</div>' +
        '</div>' +
        '<div class="lex-sb-hud">' +
        '<span>Seconds: <strong id="lexSbEchoTimer">60</strong></span>' +
        '<span>Score: <strong id="lexSbEchoScore">0</strong></span>' +
        "</div>" +
        '<div id="lexSbEchoStage"></div>' +
        '<p id="lexSbEchoStageSub"></p>' +
        '<div class="lex-sb-actions">' +
        '<button type="button" class="lex-sb-btn-main" id="lexSbEchoStart">Start</button>' +
        '<button type="button" class="lex-sb-btn-sec" id="lexSbEchoReplay">Replay definition</button>' +
        '<button type="button" class="lex-sb-btn-sec" id="lexSbEchoSkip">Skip</button>' +
        "</div>" +
        '<p class="mic-label">Mic · live transcript</p>' +
        '<p class="vb-transcript" id="lexSbEchoTranscript"></p>' +
        '<input type="text" id="lexSbEchoType" autocomplete="off" placeholder="Phrase or skip…" />' +
        '<button type="button" class="lex-sb-btn-main" id="lexSbEchoCheck">Check</button>' +
        '<p class="status-row" id="lexSbEchoStatus"></p>' +
        "</div>"
      );
    }

    function closeFs() {
      if (fsTeardown) {
        fsTeardown();
        fsTeardown = null;
      }
      W.document.body.classList.remove("lex-sb-fs-open");
      if (fsOverlay) {
        fsOverlay.remove();
        fsOverlay = null;
      }
    }

    function onFsKey(ev) {
      if (ev.key === "Escape") {
        ev.preventDefault();
        closeFsOverlay();
      }
    }

    function closeFsOverlay() {
      closeFs();
      activeMode = null;
    }

    function openFs(mode) {
      closeFs();
      var modeMeta = modes.filter(function (m) {
        return m.id === mode;
      })[0];
      var title = modeMeta ? modeMeta.label : "Sound Booth";

      fsOverlay = W.document.createElement("div");
      fsOverlay.className = "lex-sb-fs-overlay";
      fsOverlay.id = "lexSbFsOverlay";
      fsOverlay.setAttribute("role", "dialog");
      fsOverlay.setAttribute("aria-modal", "true");
      fsOverlay.setAttribute("aria-labelledby", "lexSbFsTitle");
      fsOverlay.innerHTML =
        '<header class="lex-sb-fs-head">' +
        '<div><p class="lex-sb-fs-kicker">Sound Booth · Unit ' +
        unit +
        "</p>" +
        '<h2 class="lex-sb-fs-title" id="lexSbFsTitle">' +
        title +
        "</h2></div>" +
        '<button type="button" class="lex-sb-fs-close" id="lexSbFsClose">← Close</button>' +
        "</header>" +
        '<div class="lex-sb-fs-body" id="lexSbFsBody"></div>';
      W.document.body.appendChild(fsOverlay);
      W.document.body.classList.add("lex-sb-fs-open");

      var body = el("lexSbFsBody");
      var closeBtn = el("lexSbFsClose");
      if (closeBtn) {
        closeBtn.addEventListener("click", closeFsOverlay);
      }
      W.document.addEventListener("keydown", onFsKey);

      var prevRemove = fsOverlay.remove.bind(fsOverlay);
      fsOverlay.remove = function () {
        W.document.removeEventListener("keydown", onFsKey);
        prevRemove();
      };

      if (mode === "bingo" && body) {
        if (W.FCE_SB_refresh) W.FCE_SB_refresh();
        body.innerHTML = bingoPanelHtml();
        fillSbThemeRail(
          el("lexSbBingoRail"),
          el("lexSbBingoMeta"),
          bingoRadio,
          function (n, mode) {
            return mode === "meme"
              ? n + " meme lines · need 9 min."
              : n + " hint→phrase pairs · need 9 min.";
          },
          { bingoModeRadio: bingoModeRadio }
        );
        refreshBingoDeckMeta();
        var bingoApi = W.PREP_VOICE_BINGO.mount({
          els: {
            grid: el("lexSbBingoGrid"),
            clue: el("lexSbBingoClue"),
            clueLabel: el("lexSbBingoClueLabel"),
            progress: el("lexSbBingoProgress"),
            status: el("lexSbBingoStatus"),
            transcript: el("lexSbBingoTranscript"),
            typeInput: el("lexSbBingoType"),
            btnCheck: el("lexSbBingoCheck"),
            btnDontKnow: el("lexSbBingoDontKnow"),
            btnNew: el("lexSbBingoNew"),
            winBanner: el("lexSbBingoWin"),
            memeImg: el("lexSbBingoMemeImg"),
            memePlaceholder: el("lexSbBingoMemePh"),
            memeStrip: el("lexSbBingoMemeStrip")
          },
          themeDefinitions: W.FCE_SB_THEME_DEFINITIONS || [],
          radioName: bingoRadio,
          bingoModeRadio: bingoModeRadio,
          getLexRows: function (themeId, mode) {
            return typeof W.FCE_SB_getLexRows === "function"
              ? W.FCE_SB_getLexRows(themeId, mode)
              : [];
          },
          onThemeOrModeChange: refreshBingoDeckMeta
        });
        var fileHintEl = el("lexSbBingoFileHint");
        if (fileHintEl && W.PREP_MIC_DEVICE_PICKER && W.PREP_MIC_DEVICE_PICKER.protocolHint) {
          var ph = W.PREP_MIC_DEVICE_PICKER.protocolHint();
          if (ph) {
            fileHintEl.textContent = ph;
            fileHintEl.hidden = false;
          }
        }
        fsTeardown = bingoApi && bingoApi.stop ? bingoApi.stop : null;
      }

      if (mode === "echo" && body) {
        if (W.FCE_SB_refresh) W.FCE_SB_refresh();
        body.innerHTML = echoPanelHtml();
        fillSbThemeRail(
          el("lexSbEchoRail"),
          el("lexSbEchoMeta"),
          echoRadio,
          function (n) {
            return n + " pairs · min 5.";
          }
        );
        var echoApi = W.PREP_ECHO_MINUTE.mount({
          els: {
            stageMain: el("lexSbEchoStage"),
            stageSub: el("lexSbEchoStageSub"),
            timer: el("lexSbEchoTimer"),
            scoreLive: el("lexSbEchoScore"),
            summary: null,
            status: el("lexSbEchoStatus"),
            transcript: el("lexSbEchoTranscript"),
            typeInput: el("lexSbEchoType"),
            btnCheck: el("lexSbEchoCheck"),
            btnStart: el("lexSbEchoStart"),
            btnReplay: el("lexSbEchoReplay"),
            btnSkip: el("lexSbEchoSkip"),
            voicePickSelect: el("lexSbEchoVoicePick"),
            micPickSelect: el("lexSbEchoMicPick"),
            btnMicAllow: el("lexSbEchoMicAllow")
          },
          micPickStorageKey: "prepEchoMicU" + unit,
          themeDefinitions: W.FCE_SB_THEME_DEFINITIONS || [],
          radioName: echoRadio,
          roundSeconds: 60,
          minDeck: 5,
          getLexRows: function (themeId) {
            return typeof W.FCE_SB_getLexRows === "function"
              ? W.FCE_SB_getLexRows(themeId)
              : [];
          }
        });
        fsTeardown = echoApi && echoApi.stop ? echoApi.stop : null;
      }
    }

    function pickMode(id) {
      if (!id) return;
      activeMode = id;
      openFs(activeMode);
    }

    paintModeCards();
  }

  function mountStickyInPool(pool, unit) {
    if (!pool || !W.STICKY_BOARD_PAGE) return;
    var stickyApi =
      W.FCE_UNIT_STICKY && typeof W.FCE_UNIT_STICKY.forUnit === "function"
        ? W.FCE_UNIT_STICKY.forUnit(unit)
        : null;
    if (!stickyApi || !stickyApi.packs || !stickyApi.packs.length) return;

    pool.innerHTML =
      '<div class="mini-game-box lex-extra-embed" id="stickyEmbedBox">' +
      '<nav class="folder-deck-nav" id="lexStickyDeckNav" aria-label="Sticky board decks"></nav>' +
      '<div id="lexStickyEmbedRoot" class="lex-extra-engine-root" hidden></div>' +
      "</div>";

    var packs = stickyApi.packs.map(function (p) {
      return { id: p.id, label: p.jumpLabel || p.title || p.id };
    });
    var nav = el("lexStickyDeckNav");
    var root = el("lexStickyEmbedRoot");
    if (!nav || !root) return;

    var activeId = null;

    function closeEngine() {
      activeId = null;
      root.hidden = true;
      root.innerHTML = "";
      paintDeckNav(nav, packs, activeId, "pack");
      wireDeckNav(nav, packs, "pack", pickPack);
    }

    function openPack(id) {
      var pack = stickyApi.getPack(id);
      if (!pack) return;
      root.innerHTML = "";
      W.STICKY_BOARD_PAGE.mount({
        root: root,
        pack: pack,
        allPacks: stickyApi.packs,
        getPack: stickyApi.getPack,
        embedded: true,
        hideDeckNav: true
      });
    }

    function pickPack(id) {
      if (id === activeId) {
        closeEngine();
        return;
      }
      activeId = id;
      root.hidden = false;
      paintDeckNav(nav, packs, activeId, "pack");
      wireDeckNav(nav, packs, "pack", pickPack);
      openPack(activeId);
    }

    paintDeckNav(nav, packs, activeId, "pack");
    wireDeckNav(nav, packs, "pack", pickPack);
  }

  function wireFolders(opts) {
    opts = opts || {};
    var unit = Number(opts.unit) || 0;
    var host = opts.host || el("gamesHost");
    if (!host || !unit) return;

    var memesPool = host.querySelector('.folder[data-key="memes"] .pool');
    var sbPool = host.querySelector('.folder[data-key="soundbooth"] .pool');
    var stickyPool = host.querySelector('.folder[data-key="sticky"] .pool');

    if (memesPool) mountMemesInPool(memesPool, unit);
    if (sbPool) mountSoundBoothInPool(sbPool, unit);
    if (stickyPool) mountStickyInPool(stickyPool, unit);
  }

  W.FCE_LEX_GAMES_EXTRAS = { wireFolders: wireFolders, mountAll: wireFolders };
})(typeof window !== "undefined" ? window : globalThis);
