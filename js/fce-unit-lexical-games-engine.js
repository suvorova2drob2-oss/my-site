/**
 * Shared Mastering B2 Vocabulary Games engine.
 * All trainers: Lexical trainer, Definition cards, Lexical drop, Paraphrase pick,
 * 60-second express, Echo Run, Pair Blitz, Word Bank.
 *
 * Before this file, set:
 *   window.FCE_UNIT_LEX_GAMES = { unit, themes: [ {label, short, blurb, blocks, dropLines}, ×3 ], ... }
 */
(function () {
  "use strict";
  var CFG = window.FCE_UNIT_LEX_GAMES || {};
  var unit = Number(CFG.unit) || 0;
  var themes = CFG.themes || [];
  function themeAt(i) {
    return (
      themes[i] || {
        id: "t" + i,
        label: "Theme " + (i + 1),
        short: String.fromCharCode(65 + i),
        blurb: " Stub until phrase list arrives.",
        blocks: [],
        dropLines: []
      }
    );
  }
  var T0 = themeAt(0);
  var T1 = themeAt(1);
  var T2 = themeAt(2);
  var STOR_PREFIX = "mb2u" + unit + "Lex";

  (function paintChrome() {
    function paintMiniThemeBar() {
      var map = [
        ["miniPhrasal", T0.short || T0.label || "A"],
        ["miniCrime", T1.short || T1.label || "B"],
        ["miniStories", T2.short || T2.label || "C"]
      ];
      map.forEach(function (row) {
        var inp = document.getElementById(row[0]);
        if (!inp) return;
        var span = inp.parentElement && inp.parentElement.querySelector("span");
        if (span) span.textContent = row[1];
      });
    }
    paintMiniThemeBar();
    var h1 = document.getElementById("lexGamesTitle");
    var back = document.getElementById("lexGamesBack");
    var sub = document.getElementById("lexGamesSubtitle");
    var vocab = document.getElementById("lexGamesVocabLink");
    if (h1) h1.textContent = CFG.title || ("Lexical games — Unit " + unit);
    if (back) {
      back.href = CFG.backHref || ("unit" + unit + ".html");
      back.textContent = CFG.backLabel || ("Back to Unit " + unit);
    }
    if (sub) {
      sub.innerHTML =
        CFG.subtitleHtml ||
        ("<b>Lexical games, Unit " +
          unit +
          ".</b> Stub themes — send phrase lists per topic. Click a folder; only one is open at a time.");
    }
    if (vocab) {
      if (CFG.vocabHubHref) {
        vocab.href = CFG.vocabHubHref;
        vocab.hidden = false;
        vocab.textContent =
          CFG.vocabHubLabel || ("Unit " + unit + " Vocabulary hub →");
      } else {
        vocab.hidden = true;
      }
    }
    /* Sound Booth folder — Voice bingo + Echo Minute (engines live, stub decks) */
    (function insertSoundBoothCard() {
      if (document.getElementById("lexSoundBoothCard")) return;
      var gamesHost = document.getElementById("gamesHost");
      if (!gamesHost || !gamesHost.parentNode) return;
      var href =
        (CFG.soundBoothHref || ("unit" + unit + "-sound-booth/index.html"));
      var card = document.createElement("a");
      card.id = "lexSoundBoothCard";
      card.className = "lex-sound-booth card-link";
      card.href = href;
      card.innerHTML =
        "<h2>Sound Booth</h2>" +
        '<div class="placeholder listening-open lines-2">' +
        '<span class="l1">Mic warm-ups · Voice bingo + Echo Minute.</span>' +
        '<span class="l2">Engines live — stub phrase decks until lists arrive</span>' +
        "</div>" +
        '<span class="link-hint">Open folder →</span>';
      gamesHost.parentNode.insertBefore(card, gamesHost);
    })();
    function setText(sel, text) {
      document.querySelectorAll(sel).forEach(function (el) {
        el.textContent = text;
      });
    }
    function setHtml(sel, html) {
      document.querySelectorAll(sel).forEach(function (el) {
        el.innerHTML = html;
      });
    }
    setText("[data-lex-theme-label='0']", T0.short || T0.label || "A");
    setText("[data-lex-theme-label='1']", T1.short || T1.label || "B");
    setText("[data-lex-theme-label='2']", T2.short || T2.label || "C");
    setHtml(
      "[data-lex-theme-title='0']",
      "<b>" + (T0.label || "Theme A") + "</b>" + (T0.blurb || " Stub pack.")
    );
    setHtml(
      "[data-lex-theme-title='1']",
      "<b>" + (T1.label || "Theme B") + "</b>" + (T1.blurb || " Stub pack.")
    );
    setHtml(
      "[data-lex-theme-title='2']",
      "<b>" + (T2.label || "Theme C") + "</b>" + (T2.blurb || " Stub pack.")
    );
  })();

  /* Stable internal pack keys (engine body) */
  window.UNIT10_PHRASAL_BLOCKS = T0.blocks || [];
  window.UNIT10_CRIME_BLOCKS = T1.blocks || [];
  window.UNIT10_STORIES_BLOCKS = T2.blocks || [];
  window.UNIT10_DROP_PHRASAL =
    T0.dropLines || ["PLACEHOLDER · pack coming soon."];
  window.UNIT10_DROP_CRIME =
    T1.dropLines || ["PLACEHOLDER · pack coming soon."];
  window.UNIT10_DROP_STORIES =
    T2.dropLines || ["PLACEHOLDER · pack coming soon."];

    const scoreKey = "masteringB2Score";
    function getScore() {
      const raw = localStorage.getItem(scoreKey);
      const n = Number(raw);
      return Number.isFinite(n) && n >= 0 ? Math.floor(n) : 0;
    }
    function addScore(pts) {
      localStorage.setItem(scoreKey, String(getScore() + pts));
      if (window.MasteringB2Daily) MasteringB2Daily.addPoints(pts);
    }

    function normalizeToken(t) {
      return String(t).replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, "");
    }

    function normalizeForCheck(text) {
      return String(text)
        .toLowerCase()
        .replace(/[\u2018\u2019\u02bc]/g, "'")
        .replace(/[\u201c\u201d]/g, '"')
        .replace(/\u00a0/g, " ")
        .replace(/[^a-z0-9'\s-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }
    function escapeHtml(s) {
      return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function mk(phrase, hint) {
      const words = String(phrase).trim().split(/\s+/).filter(Boolean);
      const cleanWords = words.map(normalizeToken);
      const stop = new Set([
        "a","an","the","and","or","of","to","in","on","for","with","at","by","from",
        "is","are","was","were","be","been","being","that","this","these","those",
        "my","your","our","their","any","all","so","as","it","its","it's","i","we",
        "you","they","he","she","them","us","me"
      ]);

      function scoreWindow(start, len) {
        const slice = words.slice(start, start + len);
        let score = 0;
        for (let i = 0; i < slice.length; i += 1) {
          const w = slice[i].toLowerCase().replace(/[^a-z0-9'-]/g, "");
          if (!w) continue;
          if (!stop.has(w)) score += 2;
          if (w.length >= 7) score += 1;
        }
        return score;
      }

      let bestStart = 0;
      let bestLen = Math.min(words.length, words.length >= 8 ? 3 : 2);
      let bestScore = -1;
      const lens = words.length <= 3 ? [words.length] : [3, 2];
      for (let li = 0; li < lens.length; li += 1) {
        const len = lens[li];
        if (len <= 0 || len > words.length) continue;
        for (let s = 0; s <= words.length - len; s += 1) {
          const sc = scoreWindow(s, len);
          if (sc > bestScore) {
            bestScore = sc;
            bestStart = s;
            bestLen = len;
          }
        }
      }

      const chunk = cleanWords.slice(bestStart, bestStart + bestLen).join(" ");
      const pre = (bestStart > 0 ? words.slice(0, bestStart).join(" ") : "Phrase:") + " ";
      const postWords = words.slice(bestStart + bestLen);
      const post = postWords.length ? " " + postWords.join(" ") : "";
      return {
        hint: (hint || phrase),
        pre,
        answer: chunk,
        post
      };
    }
    /** One content word for Lexical trainer gaps. */
    function pickStickyKeyword(text) {
      const stop = new Set([
        "a","an","the","and","or","of","to","in","on","for","with","at","by","from",
        "is","are","was","were","be","been","being","that","this","these","those",
        "my","your","our","their","any","all","so","as","it","its","it's","i","we",
        "you","they","he","she","them","us","me","not","but","if","when","then",
        "like","as","soon","once","often","still","just","very","really"
      ]);
      const words = String(text || "").trim().split(/\s+/).filter(Boolean);
      if (!words.length) return "";
      if (words.length === 1) return normalizeToken(words[0]) || words[0];
      let best = "";
      let bestScore = -1;
      for (let i = 0; i < words.length; i += 1) {
        const raw = words[i];
        const w = normalizeToken(raw).toLowerCase();
        if (!w || stop.has(w)) continue;
        let score = w.length;
        if (w.length >= 7) score += 4;
        if (w.length >= 5) score += 1;
        /* Prefer the head of the cool chunk (idiom focus), not a late noun. */
        if (i <= 3) score += 4;
        if (i === 0) score += 2;
        if (score > bestScore) {
          bestScore = score;
          best = normalizeToken(raw) || raw;
        }
      }
      return best || normalizeToken(words[0]) || words[0];
    }
    function carveStickyFromContext(ctx, gap) {
      const c = String(ctx || "").trim();
      const g = String(gap || "").trim();
      if (!g) return { before: "", answer: "", after: "" };
      if (!c) return { before: "", answer: g, after: "" };
      const ix = c.toLowerCase().indexOf(g.toLowerCase());
      if (ix < 0) return { before: c + " ", answer: g, after: "" };
      return {
        before: c.slice(0, ix),
        answer: c.slice(ix, ix + g.length),
        after: c.slice(ix + g.length)
      };
    }

    /** 1 = one key word · 2 = two words · 3 = full cool chunk (hard). */
    let trainerLevel = 1;
    let trainerLockedTo3 = false;
    let trainerWinMode = "level"; // "level" | "master"

    const trainerProgressKey =
      "fceLexTrainerProgress_u" + String(unit || 0);

    function defaultTrainerProgress() {
      return {
        level: 1,
        maxCleared: 0,
        lockedTo3: false,
        stats: {
          1: { clears: 0, points: 0, mistakes: 0 },
          2: { clears: 0, points: 0, mistakes: 0 },
          3: { clears: 0, points: 0, mistakes: 0 },
          totalPoints: 0,
          totalMistakes: 0,
          sessions: 0
        }
      };
    }

    function loadTrainerProgress() {
      try {
        const raw = localStorage.getItem(trainerProgressKey);
        if (!raw) return defaultTrainerProgress();
        const p = JSON.parse(raw);
        const d = defaultTrainerProgress();
        return {
          level: Math.min(3, Math.max(1, Number(p.level) || 1)),
          maxCleared: Math.min(3, Math.max(0, Number(p.maxCleared) || 0)),
          lockedTo3: !!p.lockedTo3,
          stats: Object.assign(d.stats, p.stats || {})
        };
      } catch (e) {
        return defaultTrainerProgress();
      }
    }

    function saveTrainerProgress(p) {
      try {
        localStorage.setItem(trainerProgressKey, JSON.stringify(p));
      } catch (e) {}
    }

    function applyTrainerProgress() {
      const p = loadTrainerProgress();
      trainerLockedTo3 = !!p.lockedTo3;
      trainerLevel = trainerLockedTo3 ? 3 : Math.min(3, Math.max(1, Number(p.level) || 1));
    }

    function levelLabel(lv) {
      if (lv >= 3) return "Level 3 · full phrase";
      if (lv === 2) return "Level 2 · 2 words";
      return "Level 1 · 1 word";
    }

    applyTrainerProgress();

    /** Gap size by trainer level: 1 word / 2 words / full cool chunk. */
    function pickGapByLevel(chunk, level) {
      const stop = new Set([
        "a","an","the","and","or","of","to","in","on","for","with","at","by","from",
        "is","are","was","were","be","been","being","that","this","these","those",
        "my","your","our","their","any","all","so","as","it","its","it's","i","we",
        "you","they","he","she","them","us","me","not","but","if","when","then"
      ]);
      const words = String(chunk || "").trim().split(/\s+/).filter(Boolean);
      if (!words.length) return "";
      const lv = Number(level) || 1;
      if (lv >= 3 || words.length <= 1) return words.join(" ");
      if (lv <= 1) return pickStickyKeyword(words.join(" "));
      if (words.length === 2) return words.join(" ");
      let best = words.slice(0, 2).join(" ");
      let bestScore = -1;
      for (let i = 0; i <= words.length - 2; i += 1) {
        const a = normalizeToken(words[i]).toLowerCase();
        const b = normalizeToken(words[i + 1]).toLowerCase();
        let score = 0;
        if (a && !stop.has(a)) score += a.length + 3;
        if (b && !stop.has(b)) score += b.length + 3;
        if (a.length >= 6) score += 2;
        if (b.length >= 6) score += 2;
        if (i <= 2) score += 3;
        if (score > bestScore) {
          bestScore = score;
          best = words[i] + " " + words[i + 1];
        }
      }
      return best;
    }
    function chunkForItem(it) {
      return (
        String((it && it.stickyAnswer) || "").trim() ||
        String((it && it.answer) || "").trim() ||
        String((it && it.phrase) || "").trim() ||
        pickStickyKeyword((it && it.phrase) || "")
      );
    }
    /** Prefer authored cool-word chunk, then shrink by trainerLevel. */
    function resolveTrainerSticky(it) {
      const ctx = String((it && (it.contextSentence || it.phrase)) || "").trim();
      const fullChunk = chunkForItem(it);
      const gap = pickGapByLevel(fullChunk, trainerLevel);
      const carved = carveStickyFromContext(ctx, gap);
      if (carved.answer) return carved;
      const authorBefore = it && it.stickyBefore != null ? String(it.stickyBefore) : "";
      const authorAfter = it && it.stickyAfter != null ? String(it.stickyAfter) : "";
      return {
        before: authorBefore || String((it && it.pre) || ""),
        answer: gap,
        after: authorAfter || String((it && it.post) || "")
      };
    }
    function fullPhraseFromItem(it) {
      if (it && it.phrase && String(it.phrase).trim()) return String(it.phrase).trim();
      const left = String(it.pre || "").replace(/^Phrase:\s*/i, "").trim();
      const mid = String(it.answer || "").trim();
      const right = String(it.post || "").trim();
      return [left, mid, right].filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
    }
    /** Full key phrase as in the text (Word Bank, cards back, echo, pick options). */
    function fullAnswerOf(it) {
      return fullPhraseFromItem(it) || String(it.answer || "").trim();
    }
    /** Typed gap: level-sized chunk from the reading sentence. */
    function typedGapAnswer(it) {
      return resolveTrainerSticky(it).answer;
    }
    function trainerUsesSticky(it) {
      return !!(it && (it.stickyBefore != null || it.contextSentence || it.stickyAnswer || it.phrase));
    }
    function trainerPre(it) {
      return trainerUsesSticky(it) ? resolveTrainerSticky(it).before : String(it.pre || "");
    }
    function trainerPost(it) {
      return trainerUsesSticky(it) ? resolveTrainerSticky(it).after : String(it.post || "");
    }
    const TRAINER = {
      phrasal: typeof UNIT10_PHRASAL_BLOCKS !== "undefined" ? UNIT10_PHRASAL_BLOCKS : [],
      crime: typeof UNIT10_CRIME_BLOCKS !== "undefined" ? UNIT10_CRIME_BLOCKS : [],
      stories: typeof UNIT10_STORIES_BLOCKS !== "undefined" ? UNIT10_STORIES_BLOCKS : []
    };

    const GAMES = [
      { key: "trainer", title: "Lexical trainer", desc: "Typed gaps + hints with lives and points.", hint: "Folder → readings inside" },
      { key: "cards", title: "Definition cards", desc: "Flashcards with mark status.", hint: "Tick Reading theme above" },
      { key: "drop", title: "Lexical drop", desc: "Falling sentence with missing chunk.", hint: "All reading themes" },
      { key: "pick", title: "Paraphrase pick", desc: "Pick exact phrase by paraphrase.", hint: "Tick themes above" },
      { key: "express", title: "60-second express", desc: "Fast recall drill with timer.", hint: "Tick themes above" },
      { key: "echo", title: "Echo Run", desc: "Listen, type, continue loop.", hint: "Tick themes above" },
      { key: "match", title: "Pair Blitz", desc: "Quizlet-style match for paraphrase and text phrase.", hint: "Up to 10 pairs · multi-grids · timer" },
      { key: "wordbank", title: "Word Bank (Memrise style)", desc: "Topic folders + progress + searchable bank.", hint: (T0.short || "A") + " · " + (T1.short || "B") + " · " + (T2.short || "C") + " (stubs)" }
    ];
    function miniThemeFlags() {
      const n = document.getElementById("miniPhrasal");
      const l = document.getElementById("miniCrime");
      const v = document.getElementById("miniStories");
      let phrasal = !n || n.checked;
      let crime = !l || l.checked;
      let stories = !v || v.checked;
      if (n && l && v && !n.checked && !l.checked && !v.checked) phrasal = crime = stories = true;
      return { phrasal, crime, stories };
    }
    function itemsForMiniGames() {
      const t = miniThemeFlags();
      const out = [];
      if (t.phrasal) out.push(...TRAINER.phrasal.flatMap((s) => s.items));
      if (t.crime) out.push(...TRAINER.crime.flatMap((s) => s.items));
      if (t.stories) out.push(...TRAINER.stories.flatMap((s) => s.items));
      return out.length ? out : TRAINER.phrasal.flatMap((s) => s.items);
    }
    const host = document.getElementById("gamesHost");
    host.innerHTML = GAMES.map((g) => `
      <div class="folder" data-key="${g.key}">
        <strong>${g.title}</strong>
        <div class="desc">${g.desc}</div>
        <div class="hint">${g.hint}</div>
        <div class="pool"></div>
      </div>
    `).join("");

    const trainerHtml = `
      <div class="trainer-box">
        <div id="packChoice" class="pack-choice">
          <label class="pack-card pack-check">
            <input type="checkbox" id="packPhrasal" checked />
            <span data-lex-theme-title="0"><b></b></span>
          </label>
          <label class="pack-card pack-check">
            <input type="checkbox" id="packCrime" />
            <span data-lex-theme-title="1"><b></b></span>
          </label>
          <label class="pack-card pack-check">
            <input type="checkbox" id="packStories" />
            <span data-lex-theme-title="2"><b></b></span>
          </label>
          <button class="continue-btn" id="btnContinuePacks" type="button">Continue</button>
        </div>
        <div id="trainerPlay" class="hidden">
          <div class="lex-chrome" aria-label="Trainer status">
            <div class="lex-chrome-row">
              <span class="lives" id="lives" title="Lives">❤❤❤</span>
              <span class="counter" id="counter">1 / 2</span>
              <span class="lex-level-pill" id="trainerLevelPill" title="Difficulty">Level 1</span>
              <span class="scoreline">Home <b id="homeScore">0</b> · Session <b id="sessionScore">0</b></span>
            </div>
            <div class="lex-chrome-row lex-chrome-nav">
              <span class="tab active" id="packSummary">Pack</span>
              <button class="small-link" id="btnBackPacks" type="button">← Packs</button>
            </div>
            <div class="speaker-tabs" id="speakerTabs"></div>
          </div>
          <div class="lex-task">
            <div class="hint-label">HINT (PARAPHRASE)</div>
            <div class="hint-box" id="hintBox"></div>
            <div class="line-box"><span id="linePre"></span><input id="answerInput" autocomplete="off" /><span id="linePost"></span></div>
            <button class="check-btn" id="checkBtn" type="button">Check</button>
            <div class="assist-row">
              <button class="assist-btn" id="btnHintMore" type="button">Hint</button>
              <button class="assist-btn" id="btnShowAnswer" type="button">Show answer</button>
            </div>
            <div class="msg" id="msg"></div>
          </div>
          <div id="trainerWin" class="lex-trainer-win" hidden>
            <canvas id="trainerWinFireworks" class="lex-trainer-win-fw" aria-hidden="true"></canvas>
            <div class="lex-trainer-win-card">
              <p class="lex-trainer-win-kicker" id="trainerWinKicker">Level complete</p>
              <h3 class="lex-trainer-win-title" id="trainerWinTitle">Well done!</h3>
              <p class="lex-trainer-win-line" id="trainerWinLine">Keep it up.</p>
              <div class="lex-trainer-win-stats" id="trainerWinStats"></div>
              <p class="lex-trainer-win-tomorrow" id="trainerWinTomorrow" hidden>
                Come back tomorrow — обязательно приходи завтра.
              </p>
              <div class="lex-trainer-win-actions">
                <button type="button" class="check-btn" id="trainerWinAgain">Next level →</button>
                <button type="button" class="assist-btn" id="trainerWinPacks">← Packs</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    const dropHtml = `
      <div class="drop-intro" id="dropIntro">
        <div class="drop-panel">
          <p><b style="color:var(--text)">How it works.</b> You see a sentence with one gap <b>___</b>. Type the missing chunk. If wrong, the correct answer appears and you must type it to continue.</p>
          <label class="pack-check pack-card"><input type="checkbox" id="dropPhrasal" checked><span><b data-lex-theme-label="0">A</b></span></label>
          <label class="pack-check pack-card"><input type="checkbox" id="dropCrime" checked><span><b data-lex-theme-label="1">B</b></span></label>
          <label class="pack-check pack-card"><input type="checkbox" id="dropStories" checked><span><b data-lex-theme-label="2">C</b></span></label>
          <button class="continue-btn" id="dropStartBtn" type="button">Start round</button>
        </div>
      </div>
      <div class="drop-play" id="dropPlay">
        <div class="drop-hud" id="dropHud"></div>
        <div class="game-scene" id="dropScene">
          <div class="drop-canvas" id="dropCanvas"></div>
        </div>
        <div class="drop-footer" id="dropFooter">
          <div class="hint-label">Hint (paraphrase)</div>
          <div class="hint-box" id="dropHint"></div>
          <div class="drop-input-row">
            <input id="dropInput" class="drop-input" autocomplete="off" placeholder="Type missing words from the text and press Enter...">
            <button class="check-btn" id="dropCheckBtn" type="button">Catch</button>
            <button class="drop-dk-btn" id="dropDontKnowBtn" type="button">I don't know</button>
          </div>
          <div class="drop-note" id="dropNote"></div>
          <div id="dropBig" class="drop-big">
            <div class="drop-big-label">Correct wording from the text</div>
            <div id="dropBigAnswer" class="drop-big-answer"></div>
          </div>
        </div>
        <div id="dropOverlay" class="drop-overlay" aria-live="polite">
          <div class="drop-overlay-box">
            <div class="drop-overlay-label">Correct wording from the text</div>
            <div id="dropOverlayAnswer" class="drop-overlay-answer"></div>
            <div class="drop-overlay-sub">Life lost: -1</div>
            <button class="check-btn" id="dropOverlayContinueBtn" type="button">Continue</button>
          </div>
        </div>
      </div>
    `;
    const cardsHtml = `
      <div class="cards-box" id="cardsBox">
        <h3 class="cards-title">Definition cards</h3>
        <p class="cards-subtitle">Unit ${unit} · vocabulary</p>
        <p class="cards-hud" id="cardsHud"></p>
        <div class="cards-scene" id="cardsScene" tabindex="0" role="button" aria-label="Definition card">
          <div class="cards-inner" id="cardsInner">
            <div class="cards-face cards-front">
              <span class="cards-kicker">Definition</span>
              <p class="cards-def" id="cardsDef"></p>
              <span id="cardsFrontPill" class="cards-pill none"></span>
            </div>
            <div class="cards-face cards-back">
              <span class="cards-kicker">From the text</span>
              <p class="cards-answer" id="cardsAnswer"></p>
              <p class="cards-speaker" id="cardsSpeaker"></p>
              <span id="cardsBackPill" class="cards-pill none"></span>
            </div>
          </div>
        </div>
        <p class="cards-hint">Tap card to flip · Space when focused</p>
        <div class="cards-nav">
          <button type="button" class="cards-btn" id="cardsNext">Next</button>
        </div>
        <div class="cards-mark-row">
          <button type="button" class="cards-btn know" id="cardsKnow">I know this</button>
          <button type="button" class="cards-btn" id="cardsLearn">Still learning</button>
        </div>
      </div>
    `;
    const pickHtml = `
      <div class="mini-game-box" id="pickBox">
        <h3 class="mini-title">Paraphrase pick</h3>
        <div class="mini-hud" id="pickHud"></div>
        <div class="mini-hint" id="pickHint"></div>
        <div class="pick-options" id="pickOptions"></div>
        <div class="msg" id="pickMsg"></div>
        <button class="echo-btn" id="pickRestartBtn" type="button" style="margin-top:10px;">Restart round</button>
      </div>
    `;
    const expressHtml = `
      <div class="mini-game-box" id="expressBox">
        <h3 class="mini-title">60-second express</h3>
        <div class="mini-hud" id="expressHud"></div>
        <p class="mini-hud" id="expressMode"></p>
        <div class="express-card" id="expressCard"></div>
        <div class="echo-row">
          <button class="echo-btn" id="expressKnowBtn" type="button">I knew it (+1)</button>
          <button class="echo-btn" id="expressKeepBtn" type="button">Keep learning</button>
          <button class="echo-btn" id="expressShowBtn" type="button">Show answer</button>
        </div>
        <div class="msg" id="expressMsg"></div>
      </div>
    `;
    const echoHtml = `
      <div class="mini-game-box" id="echoBox">
        <h3 class="mini-title">Echo Run</h3>
        <div class="mini-hud" id="echoHud"></div>
        <div class="echo-row">
          <button class="echo-btn" id="echoPlayBtn" type="button">Play phrase</button>
          <button class="echo-btn" id="echoShowBtn" type="button">Show answer</button>
          <button class="echo-btn" id="echoNextBtn" type="button" style="display:none;">Next phrase</button>
        </div>
        <input id="echoInput" class="echo-input" autocomplete="off" placeholder="Type exact phrase from the text...">
        <button class="check-btn" id="echoCheckBtn" type="button">Check</button>
        <div class="echo-reveal" id="echoReveal"></div>
        <div class="msg" id="echoMsg"></div>
      </div>
    `;
    const matchHtml = `
      <div class="match-box" id="matchBox">
        <h3 class="mini-title">Pair Blitz</h3>
        <div class="match-intro" id="matchIntro">
          <p class="mini-hud">Choose theme, then match paraphrase with phrase from the text.</p>
          <button class="echo-btn" id="matchSelectAllBtn" type="button">Select all</button>
          <label class="pack-check pack-card" style="margin-top:8px;"><input type="checkbox" id="matchPhrasal" checked><span><b data-lex-theme-label="0">A</b> Stub.</span></label>
          <label class="pack-check pack-card" style="margin-top:8px;"><input type="checkbox" id="matchCrime" checked><span><b data-lex-theme-label="1">B</b> Stub.</span></label>
          <label class="pack-check pack-card" style="margin-top:8px;"><input type="checkbox" id="matchStories" checked><span><b data-lex-theme-label="2">C</b> Stub.</span></label>
          <button class="continue-btn" id="matchStartBtn" type="button" style="margin-top:10px;">Start round (10 phrases)</button>
        </div>
        <div class="match-play" id="matchPlay">
          <div class="match-hud" id="matchHud"></div>
          <div class="match-grid" id="matchGrid"></div>
          <div class="msg" id="matchMsg"></div>
          <button class="echo-btn" id="matchRestartBtn" type="button" style="margin-top:10px;">Restart round</button>
        </div>
      </div>
    `;
    const wordBankHtml = `
      <div class="mini-game-box wb-shell" id="wordBankBox">
        <h3 class="mini-title">Word Bank</h3>
        <div class="wb-themes">
          <button class="wb-theme-btn" data-wb-theme="phrasal" type="button" data-lex-theme-label="0">A</button>
          <button class="wb-theme-btn" data-wb-theme="crime" type="button" data-lex-theme-label="1">B</button>
          <button class="wb-theme-btn" data-wb-theme="stories" type="button" data-lex-theme-label="2">C</button>
        </div>
        <div class="wb-repeat-bar">
          <button class="wb-repeat-btn active" data-wb-filter="all" type="button">All words</button>
          <button class="wb-repeat-btn" data-wb-filter="due" type="button">Due now</button>
          <select id="wbSort" class="wb-sort">
            <option value="dueFirst">Sort: Due first</option>
            <option value="alpha">Sort: A-Z</option>
          </select>
        </div>
        <input id="wbSearch" class="echo-input" autocomplete="off" placeholder="Search phrase or hint...">
        <div class="wb-stats" id="wbStats"></div>
        <ul class="wb-list" id="wbList"></ul>
      </div>
    `;

    host.querySelectorAll(".folder").forEach((folder) => {
      const pool = folder.querySelector(".pool");
      const key = folder.getAttribute("data-key");
      function paintThemeLabelsIn(root) {
        if (!root) return;
        root.querySelectorAll("[data-lex-theme-title='0']").forEach(function (el) {
          el.innerHTML = "<b>" + (T0.label || "A") + "</b>" + (T0.blurb || " Stub.");
        });
        root.querySelectorAll("[data-lex-theme-title='1']").forEach(function (el) {
          el.innerHTML = "<b>" + (T1.label || "B") + "</b>" + (T1.blurb || " Stub.");
        });
        root.querySelectorAll("[data-lex-theme-title='2']").forEach(function (el) {
          el.innerHTML = "<b>" + (T2.label || "C") + "</b>" + (T2.blurb || " Stub.");
        });
        root.querySelectorAll("[data-lex-theme-label='0']").forEach(function (el) {
          el.textContent = T0.short || T0.label || "A";
        });
        root.querySelectorAll("[data-lex-theme-label='1']").forEach(function (el) {
          el.textContent = T1.short || T1.label || "B";
        });
        root.querySelectorAll("[data-lex-theme-label='2']").forEach(function (el) {
          el.textContent = T2.short || T2.label || "C";
        });
      }
      if (key === "trainer") pool.innerHTML = trainerHtml;
      else if (key === "cards") pool.innerHTML = cardsHtml;
      else if (key === "drop") pool.innerHTML = dropHtml;
      else if (key === "pick") pool.innerHTML = pickHtml;
      else if (key === "express") pool.innerHTML = expressHtml;
      else if (key === "echo") pool.innerHTML = echoHtml;
      else if (key === "match") pool.innerHTML = matchHtml;
      else if (key === "wordbank") pool.innerHTML = wordBankHtml;
      paintThemeLabelsIn(pool);
      folder.addEventListener("click", (e) => {
        if (
          e.target.closest(
            "button,input,label,select,textarea,.trainer-box,.cards-box,.mini-game-box,.match-box,.drop-intro,.drop-play,.wb-shell"
          )
        ) {
          return;
        }
        const isOpen = folder.classList.contains("open");
        host.querySelectorAll(".folder").forEach(x => x.classList.remove("open"));
        host.classList.remove("single-open");
        document.body.classList.remove("lex-game-focus");
        if (!isOpen) {
          folder.classList.add("open");
          host.classList.add("single-open");
          document.body.classList.add("lex-game-focus");
          if (key === "cards") {
            cardsIdx = 0;
            cardsFlipped = false;
            cardsRender();
          }
          if (key === "pick") { pickBuildRound(); pickRender(); }
          if (key === "express") { expressBuild(); expressStartTimer(); expressRender(); }
          if (key === "echo") { echoBuild(); echoRender(); }
          if (key === "match") {
            const intro = document.getElementById("matchIntro");
            const play = document.getElementById("matchPlay");
            if (intro) intro.style.display = "";
            if (play) play.classList.remove("on");
            MATCH.active = false;
          }
          if (key === "wordbank") wordBankRender();
        }
      });
    });

    const lexMiniThemeBar = document.getElementById("lexMiniThemeBar");
    if (lexMiniThemeBar) {
      lexMiniThemeBar.addEventListener("change", () => {
        cardsIdx = 0;
        cardsFlipped = false;
        if (document.getElementById("cardsHud")) cardsRender();
        if (document.getElementById("pickHud")) {
          pickBuildRound();
          pickRender();
        }
        if (document.getElementById("expressHud")) {
          expressBuild();
          expressStartTimer();
          expressRender();
        }
        if (document.getElementById("echoHud")) {
          echoBuild();
          echoRender();
        }
      });
    }

    // Definition cards logic
    const CARDS_MARKS_KEY = STOR_PREFIX + "CardsMarks";
    const cardsDeck = [
      ...TRAINER.phrasal.flatMap((speakerBlock) =>
        speakerBlock.items.map((it) => ({
          id: "N::" + speakerBlock.name + "::" + it.answer,
          def: it.hint,
          answer: fullAnswerOf(it),
          speaker: (T0.short || "A") + " · " + speakerBlock.name
        }))
      ),
      ...TRAINER.crime.flatMap((speakerBlock) =>
        speakerBlock.items.map((it) => ({
          id: "R::" + speakerBlock.name + "::" + it.answer,
          def: it.hint,
          answer: fullAnswerOf(it),
          speaker: (T1.short || "B") + " · " + speakerBlock.name
        }))
      ),
      ...TRAINER.stories.flatMap((speakerBlock) =>
        speakerBlock.items.map((it, idx) => ({
          id: "G::" + speakerBlock.name + "::" + idx,
          def: it.hint,
          answer: fullAnswerOf(it),
          speaker: (T2.short || "C") + " · " + speakerBlock.name
        }))
      )
    ];
    let cardsIdx = 0;
    let cardsFlipped = false;
    let cardsMarks = {};
    function cardsLoadMarks() {
      try {
        const raw = localStorage.getItem(CARDS_MARKS_KEY);
        cardsMarks = raw ? JSON.parse(raw) : {};
      } catch (_) {
        cardsMarks = {};
      }
    }
    function cardsSaveMarks() {
      localStorage.setItem(CARDS_MARKS_KEY, JSON.stringify(cardsMarks));
    }
    function cardsGetMarkText(id) {
      return cardsMarks[id] === "know" ? "I know this" : cardsMarks[id] === "learn" ? "Still learning" : "Not marked";
    }
    function cardsGetMarkClass(id) {
      return cardsMarks[id] === "know" ? "know" : cardsMarks[id] === "learn" ? "learn" : "none";
    }
    function cardsActiveDeck() {
      const t = miniThemeFlags();
      return cardsDeck.filter((c) => {
        if (c.id.startsWith("N::")) return t.phrasal;
        if (c.id.startsWith("R::")) return t.crime;
        if (c.id.startsWith("G::")) return t.stories;
        return false;
      });
    }
    function cardsRender() {
      const hud = document.getElementById("cardsHud");
      const def = document.getElementById("cardsDef");
      const ans = document.getElementById("cardsAnswer");
      const sp = document.getElementById("cardsSpeaker");
      const inner = document.getElementById("cardsInner");
      const frontP = document.getElementById("cardsFrontPill");
      const backP = document.getElementById("cardsBackPill");
      const next = document.getElementById("cardsNext");
      if (!hud || !def || !ans || !sp || !inner || !frontP || !backP || !next) return;
      const deck = cardsActiveDeck();
      if (!deck.length) {
        hud.innerHTML = "Tick at least one <b>theme</b> above. No cards match the current selection.";
        def.textContent = "";
        ans.textContent = "";
        sp.textContent = "";
        frontP.textContent = "";
        backP.textContent = "";
        frontP.className = "cards-pill none";
        backP.className = "cards-pill none";
        inner.classList.remove("flipped");
        next.disabled = true;
        return;
      }
      if (cardsIdx >= deck.length) cardsIdx = 0;
      const c = deck[cardsIdx];
      const knowCount = deck.filter(x => cardsMarks[x.id] === "know").length;
      const learnCount = deck.filter(x => cardsMarks[x.id] === "learn").length;
      const notMarked = deck.length - knowCount - learnCount;
      hud.innerHTML = "Card <b>" + (cardsIdx + 1) + " / " + deck.length + "</b> · I know: <b style='color:#38bdf8'>" + knowCount + "</b> · Still learning: <b style='color:#38bdf8'>" + learnCount + "</b> · Not marked: <b style='color:#38bdf8'>" + notMarked + "</b>";
      def.textContent = c.def;
      ans.textContent = c.answer;
      sp.textContent = c.speaker;
      const markText = cardsGetMarkText(c.id);
      const markClass = cardsGetMarkClass(c.id);
      frontP.textContent = markText;
      backP.textContent = markText;
      frontP.className = "cards-pill " + markClass;
      backP.className = "cards-pill " + markClass;
      inner.classList.toggle("flipped", cardsFlipped);
      next.disabled = cardsIdx >= deck.length - 1;
    }
    function cardsFlip() {
      cardsFlipped = !cardsFlipped;
      cardsRender();
    }
    function cardsNext() {
      const deck = cardsActiveDeck();
      if (cardsIdx >= deck.length - 1) return;
      cardsIdx += 1;
      cardsFlipped = false;
      cardsRender();
    }
    function cardsMark(mark) {
      const deck = cardsActiveDeck();
      if (!deck.length) return;
      const id = deck[cardsIdx].id;
      cardsMarks[id] = mark;
      cardsSaveMarks();
      if (mark === "know") srsMarkKnow(id);
      if (mark === "learn") srsMarkLearning(id);
      cardsRender();
    }
    let WB_THEME = "phrasal";
    let WB_FILTER = "all";
    let WB_SORT = "dueFirst";
    const SRS_KEY = STOR_PREFIX + "Srs";
    let srsState = {};
    function srsLoad() {
      try {
        const raw = localStorage.getItem(SRS_KEY);
        srsState = raw ? JSON.parse(raw) : {};
      } catch (_) {
        srsState = {};
      }
    }
    function srsSave() { localStorage.setItem(SRS_KEY, JSON.stringify(srsState)); }
    function srsGet(id) { return srsState[id] || { streak: 0, intervalDays: 0, nextAt: 0 }; }
    function srsDueNow(id) { const r = srsGet(id); return !r.nextAt || r.nextAt <= Date.now(); }
    function srsLabel(id) {
      const r = srsGet(id);
      if (!r.nextAt || r.nextAt <= Date.now()) return "Due now";
      const days = Math.ceil((r.nextAt - Date.now()) / 86400000);
      return "Next review in " + days + "d";
    }
    function srsMarkKnow(id) {
      const seq = [1, 2, 4, 7, 14, 30];
      const r = srsGet(id);
      const streak = Math.min(seq.length, (r.streak || 0) + 1);
      const intervalDays = seq[streak - 1];
      srsState[id] = { streak, intervalDays, nextAt: Date.now() + intervalDays * 86400000 };
      srsSave();
    }
    function srsMarkLearning(id) {
      srsState[id] = { streak: 0, intervalDays: 0, nextAt: Date.now() };
      srsSave();
    }
    function srsReset(id) {
      delete srsState[id];
      srsSave();
    }
    function wordBankData(theme) {
      if (theme === "stories") {
        return TRAINER.stories.flatMap((block) =>
          block.items.map((it, idx) => ({
            id: "G::" + block.name + "::" + idx,
            phrase: fullAnswerOf(it),
            hint: it.hint
          }))
        );
      }
      const src = theme === "phrasal" ? TRAINER.phrasal : TRAINER.crime;
      const prefix = theme === "phrasal" ? "N::" : "R::";
      return src.flatMap((block) =>
        block.items.map((it) => ({
          id: prefix + block.name + "::" + it.answer,
          phrase: fullAnswerOf(it),
          hint: it.hint
        }))
      );
    }
    const WORD_INDEX = {};
    function wbIndexKey(phrase, hint) {
      return normalizeForCheck(phrase) + "||" + normalizeForCheck(hint || "");
    }
    function buildWordIndex() {
      const all = [...wordBankData("phrasal"), ...wordBankData("crime"), ...wordBankData("stories")];
      for (let i = 0; i < all.length; i += 1) {
        const x = all[i];
        WORD_INDEX[wbIndexKey(x.phrase, x.hint)] = x.id;
      }
    }
    function registerGameResult(phrase, hint, ok) {
      const id = WORD_INDEX[wbIndexKey(phrase, hint)];
      if (!id) return;
      cardsMarks[id] = ok ? "know" : "learn";
      cardsSaveMarks();
      if (ok) srsMarkKnow(id);
      else srsMarkLearning(id);
    }
    function wordBankRender() {
      const list = document.getElementById("wbList");
      const stats = document.getElementById("wbStats");
      const search = document.getElementById("wbSearch");
      if (!list || !stats || !search) return;
      document.querySelectorAll(".wb-theme-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.getAttribute("data-wb-theme") === WB_THEME);
      });
      const all = wordBankData(WB_THEME);
      const q = normalizeForCheck(search.value || "");
      const base = WB_FILTER === "due" ? all.filter((x) => srsDueNow(x.id)) : all;
      const searched = q ? base.filter((x) => normalizeForCheck(x.phrase + " " + x.hint).includes(q)) : base;
      const filtered = searched.slice().sort((a, b) => {
        if (WB_SORT === "alpha") return a.phrase.localeCompare(b.phrase);
        const ad = srsDueNow(a.id) ? 0 : 1;
        const bd = srsDueNow(b.id) ? 0 : 1;
        if (ad !== bd) return ad - bd;
        return a.phrase.localeCompare(b.phrase);
      });
      const know = filtered.filter(x => cardsMarks[x.id] === "know").length;
      const learn = filtered.filter(x => cardsMarks[x.id] === "learn").length;
      const rest = filtered.length - know - learn;
      const due = all.filter((x) => srsDueNow(x.id)).length;
      document.querySelectorAll(".wb-repeat-btn").forEach((b) => {
        b.classList.toggle("active", b.getAttribute("data-wb-filter") === WB_FILTER);
      });
      const themeLabel = WB_THEME === "phrasal" ? (T0.short || T0.label || "A") : WB_THEME === "stories" ? (T2.short || T2.label || "C") : (T1.short || T1.label || "B");
      stats.textContent = "Theme: " + themeLabel + " · Total: " + filtered.length + " · Due now: " + due + " · I know: " + know + " · Learning: " + learn + " · Unmarked: " + rest + " · Unlimited practice enabled.";
      list.innerHTML = filtered.map((x) => {
        const mark = cardsMarks[x.id] || "";
        const markTxt = mark === "know" ? "I know" : mark === "learn" ? "Learning" : "Unmarked";
        return `<li class="wb-item">
          <div class="phrase">${escapeHtml(x.phrase)}</div>
          <div class="hint">${escapeHtml(x.hint)}</div>
          <div class="meta">
            <span class="status">${markTxt} · ${srsLabel(x.id)}</span>
            <div class="act">
              <button class="wb-mark-btn know" type="button" data-wb-mark="know" data-wb-id="${escapeHtml(x.id)}">Know</button>
              <button class="wb-mark-btn learn" type="button" data-wb-mark="learn" data-wb-id="${escapeHtml(x.id)}">Learning</button>
              <button class="wb-mark-btn reset" type="button" data-wb-mark="reset" data-wb-id="${escapeHtml(x.id)}">Reset</button>
            </div>
          </div>
        </li>`;
      }).join("") || "<li class='wb-item'>No matches.</li>";
    }
    cardsLoadMarks();
    srsLoad();
    buildWordIndex();
    cardsRender();

    // Paraphrase pick logic
    const PICK = { q: [], i: 0, score: 0, done: false };
    function pickBuildRound() {
      const all = itemsForMiniGames();
      PICK.q = shuffle(all).slice(0, 10).map((it) => {
        const target = fullAnswerOf(it);
        const distractors = shuffle(all.filter(x => fullAnswerOf(x) !== target)).slice(0, 3).map(x => fullAnswerOf(x));
        const options = shuffle([target, ...distractors]);
        return { hint: it.hint, answer: target, options };
      });
      PICK.i = 0; PICK.score = 0; PICK.done = false;
    }
    function pickRender() {
      const hud = document.getElementById("pickHud");
      const hint = document.getElementById("pickHint");
      const opts = document.getElementById("pickOptions");
      const msg = document.getElementById("pickMsg");
      if (!hud || !hint || !opts || !msg) return;
      if (!PICK.q.length) pickBuildRound();
      if (PICK.i >= PICK.q.length) {
        hud.textContent = "Complete · Score: " + PICK.score + " / " + PICK.q.length;
        hint.textContent = "Round finished. Reopen folder to replay.";
        opts.innerHTML = "";
        return;
      }
      const cur = PICK.q[PICK.i];
      hud.textContent = (PICK.i + 1) + " / " + PICK.q.length + " · Score: " + PICK.score;
      hint.textContent = cur.hint;
      opts.innerHTML = cur.options.map((op) => `<button class="pick-option" data-op="${escapeHtml(op)}" type="button">${escapeHtml(op)}</button>`).join("");
      msg.textContent = "";
      msg.className = "msg";
    }
    function pickChoose(answer) {
      if (PICK.i >= PICK.q.length) return;
      const cur = PICK.q[PICK.i];
      const msg = document.getElementById("pickMsg");
      const allBtns = Array.from(document.querySelectorAll("#pickOptions .pick-option"));
      allBtns.forEach((b) => {
        const txt = b.getAttribute("data-op") || "";
        if (normalizeForCheck(txt) === normalizeForCheck(cur.answer)) b.classList.add("good");
        if (normalizeForCheck(txt) === normalizeForCheck(answer) && normalizeForCheck(answer) !== normalizeForCheck(cur.answer)) b.classList.add("bad");
        b.disabled = true;
      });
      if (normalizeForCheck(answer) === normalizeForCheck(cur.answer)) {
        PICK.score += 1;
        addScore(1);
        registerGameResult(cur.answer, cur.hint, true);
        msg.textContent = "Correct! +1";
        msg.className = "msg ok";
      } else {
        registerGameResult(cur.answer, cur.hint, false);
        msg.textContent = "Incorrect. Correct: " + cur.answer;
        msg.className = "msg bad";
      }
      PICK.i += 1;
      setTimeout(pickRender, 500);
    }

    // 60-second express logic
    const EXPRESS = { deck: [], i: 0, score: 0, endAt: 0, timer: 0, revealAnswer: false };
    function expressBuild() {
      EXPRESS.deck = shuffle(itemsForMiniGames()).slice(0, 24).map((it, idx) => ({
        type: idx % 2 === 0 ? "paraphrase" : "gap",
        item: { ...it, full: fullAnswerOf(it) }
      }));
      EXPRESS.i = 0; EXPRESS.score = 0; EXPRESS.endAt = Date.now() + 60000; EXPRESS.revealAnswer = false;
    }
    function expressRender() {
      const hud = document.getElementById("expressHud");
      const card = document.getElementById("expressCard");
      const msg = document.getElementById("expressMsg");
      const mode = document.getElementById("expressMode");
      if (!hud || !card || !msg || !mode) return;
      if (!EXPRESS.deck.length) expressBuild();
      const left = Math.max(0, Math.ceil((EXPRESS.endAt - Date.now()) / 1000));
      hud.textContent = "Time: " + left + "s · Score: " + EXPRESS.score;
      if (left <= 0 || EXPRESS.i >= EXPRESS.deck.length) {
        card.textContent = "Time is up. Final score: " + EXPRESS.score;
        mode.textContent = "Round complete.";
        return;
      }
      const cur = EXPRESS.deck[EXPRESS.i];
      let body = "";
      if (cur.type === "paraphrase") {
        mode.textContent = "Mode: Paraphrase";
        body = "<b>Paraphrase:</b> " + escapeHtml(cur.item.hint);
      } else {
        mode.textContent = "Mode: Phrase recall";
        body = "<b>From text block:</b> " + escapeHtml(cur.item.full);
      }
      if (EXPRESS.revealAnswer) {
        body += `<div class="express-answer-lock"><span class="lab">From the text</span><span class="ans">${escapeHtml(cur.item.full)}</span></div>`;
      }
      card.innerHTML = body;
      msg.textContent = "";
      msg.className = "msg";
    }
    function expressStartTimer() {
      if (EXPRESS.timer) clearInterval(EXPRESS.timer);
      EXPRESS.timer = setInterval(expressRender, 400);
    }
    function expressNext() {
      EXPRESS.i += 1;
      EXPRESS.revealAnswer = false;
      expressRender();
    }

    // Echo run logic
    const ECHO = { q: [], i: 0, score: 0, reveal: false };
    function echoBuild() {
      ECHO.q = shuffle(
        itemsForMiniGames().map((it) => ({
          hint: it.hint,
          answer: fullAnswerOf(it)
        }))
      ).slice(0, 10);
      ECHO.i = 0; ECHO.score = 0; ECHO.reveal = false;
    }
    function echoRender() {
      const hud = document.getElementById("echoHud");
      const msg = document.getElementById("echoMsg");
      const inp = document.getElementById("echoInput");
      const checkBtn = document.getElementById("echoCheckBtn");
      const nextBtn = document.getElementById("echoNextBtn");
      const reveal = document.getElementById("echoReveal");
      if (!hud || !msg || !inp || !checkBtn || !nextBtn || !reveal) return;
      if (!ECHO.q.length) echoBuild();
      if (ECHO.i >= ECHO.q.length) {
        hud.textContent = "Complete · Score: " + ECHO.score + " / " + ECHO.q.length;
        msg.textContent = "Round complete.";
        msg.className = "msg ok";
        checkBtn.style.display = "none";
        nextBtn.style.display = "none";
        reveal.classList.remove("on");
        reveal.textContent = "";
        return;
      }
      hud.textContent = (ECHO.i + 1) + " / " + ECHO.q.length + " · Score: " + ECHO.score + " · In queue: " + (ECHO.q.length - ECHO.i);
      if (!ECHO.reveal) {
        inp.value = "";
        msg.textContent = "";
        msg.className = "msg";
        reveal.classList.remove("on");
        reveal.textContent = "";
      }
      checkBtn.style.display = ECHO.reveal ? "none" : "block";
      nextBtn.style.display = ECHO.reveal ? "inline-block" : "none";
    }
    function echoSpeakCurrent() {
      if (ECHO.i >= ECHO.q.length) return;
      const txt = ECHO.q[ECHO.i].answer;
      if (!("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(txt);
      u.lang = "en-GB";
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    }

    // Pair Blitz logic
    const MATCH = { pairs: [], pairTotal: 0, donePairs: 0, queueIdx: 0, cards: [], selected: [], startTs: 0, active: false };
    function matchShuffleNoAdj(cards) {
      for (let tries = 0; tries < 40; tries += 1) {
        const out = shuffle(cards);
        let bad = false;
        for (let i = 0; i < out.length - 1; i += 1) {
          if (out[i].pairId === out[i + 1].pairId) { bad = true; break; }
        }
        if (!bad) return out;
      }
      return shuffle(cards);
    }
    function matchBuildDeck(usePhrasal, useCrime, useStories) {
      let all = [];
      if (usePhrasal) all = all.concat(TRAINER.phrasal.flatMap(s => s.items));
      if (useCrime) all = all.concat(TRAINER.crime.flatMap(s => s.items));
      if (useStories) all = all.concat(TRAINER.stories.flatMap(s => s.items));
      MATCH.pairs = shuffle(all).slice(0, 10).map((it) => ({ syn: it.hint, ans: fullAnswerOf(it) }));
      MATCH.pairTotal = MATCH.pairs.length;
      MATCH.donePairs = 0;
      MATCH.queueIdx = 0;
      MATCH.cards = [];
      MATCH.selected = [];
      MATCH.startTs = Date.now();
      MATCH.active = true;
      matchLoadGrid();
    }
    function matchLoadGrid() {
      const chunk = MATCH.pairs.slice(MATCH.queueIdx, MATCH.queueIdx + 6);
      MATCH.queueIdx += chunk.length;
      const cards = [];
      for (let i = 0; i < chunk.length; i += 1) {
        cards.push({ id: "s" + i, pairId: i, side: "syn", text: chunk[i].syn, state: "" });
        cards.push({ id: "a" + i, pairId: i, side: "ans", text: chunk[i].ans, state: "" });
      }
      MATCH.cards = matchShuffleNoAdj(cards);
      MATCH.selected = [];
      matchRender();
    }
    function matchRender() {
      const hud = document.getElementById("matchHud");
      const grid = document.getElementById("matchGrid");
      const msg = document.getElementById("matchMsg");
      if (!hud || !grid || !msg) return;
      if (!MATCH.active) return;
      const sec = Math.max(0, Math.floor((Date.now() - MATCH.startTs) / 1000));
      const left = MATCH.pairTotal - MATCH.donePairs;
      hud.innerHTML = `<span>Time: <b>${sec}</b>s</span><span>Pairs left: <b>${left}</b></span><span>Done: <b>${MATCH.donePairs}</b> / ${MATCH.pairTotal}</span>`;
      grid.innerHTML = MATCH.cards.map((c, idx) => {
        const cls = ["match-card", c.state || ""].join(" ").trim();
        const jitX = ((idx % 3) - 1) * 2;
        const jitY = ((idx % 4) - 1.5) * 1.5;
        const rot = ((idx % 5) - 2) * 0.4;
        return `<button type="button" class="${cls}" data-mid="${c.id}" style="transform:translate(${jitX}px, ${jitY}px) rotate(${rot}deg);">${escapeHtml(c.text)}</button>`;
      }).join("");
      if (left <= 0) {
        msg.textContent = "ты молодец, ты все запомнил из этой папки";
        msg.className = "msg ok";
      } else {
        msg.textContent = "";
        msg.className = "msg";
      }
    }
    function matchTap(id) {
      const card = MATCH.cards.find(c => c.id === id);
      if (!card || card.state === "ok" || card.state === "bad") return;
      if (MATCH.selected.includes(id)) return;
      card.state = "sel";
      MATCH.selected.push(id);
      matchRender();
      if (MATCH.selected.length < 2) return;
      const a = MATCH.cards.find(c => c.id === MATCH.selected[0]);
      const b = MATCH.cards.find(c => c.id === MATCH.selected[1]);
      if (!a || !b) return;
      const ok = a.pairId === b.pairId && a.side !== b.side;
      if (ok) {
        a.state = "ok"; b.state = "ok";
        MATCH.donePairs += 1;
        addScore(1);
        registerGameResult(a.side === "ans" ? a.text : b.text, a.side === "syn" ? a.text : b.text, true);
        MATCH.selected = [];
        setTimeout(() => {
          MATCH.cards = MATCH.cards.filter(c => c.state !== "ok");
          if (MATCH.cards.length === 0 && MATCH.donePairs < MATCH.pairTotal) matchLoadGrid();
          else matchRender();
        }, 220);
      } else {
        a.state = "bad"; b.state = "bad";
        MATCH.selected = [];
        setTimeout(() => {
          if (a.state === "bad") a.state = "";
          if (b.state === "bad") b.state = "";
          matchRender();
        }, 300);
      }
    }

    // Trainer logic
    let trainerActive = false;
    let trainerPackFlags = { phrasal: true, crime: false, stories: false };
    let activeSpeakers = [];
    let speaker = 0;
    let item = 0;
    let lives = 3;
    let sessionPoints = 0;
    let trainerMistakes = 0;
    let trainerShownAnswers = 0;
    let trainerSkipPoint = false;
    let trainerFwRaf = 0;
    let trainerFwStopAt = 0;

    const TRAINER_WIN_TITLES = [
      "Well done!",
      "You're awesome.",
      "Incredible.",
      "I'm proud of you.",
      "You nailed it.",
      "Keep it up!"
    ];
    const TRAINER_WIN_LINES = [
      "Keep it up — you're getting stronger every round.",
      "I'm passionate about progress — and today you proved it.",
      "You didn't lose track of time: you used it well.",
      "Fully qualified energy. It works for you.",
      "Wherever you are tomorrow, keep that spark — feel alive.",
      "Steady and secure: your phrases are landing."
    ];
    const TRAINER_LEVEL_CLEAR = {
      1: {
        kicker: "Level 1 complete",
        title: "Well done!",
        line: "Keep it up. Next: Level 2 — two key words."
      },
      2: {
        kicker: "Level 2 complete",
        title: "You're awesome!",
        line: "Keep it up. Next: Level 3 — the full cool phrase."
      },
      3: {
        kicker: "Level 3 mastered",
        title: "Incredible — I'm proud of you.",
        line: "From now on you train on Level 3. Come back tomorrow."
      }
    };

    function currentItems() { return activeSpeakers[speaker].items; }
    function current() { return currentItems()[item]; }

    function trainerTotalItems() {
      return activeSpeakers.reduce(function (n, s) {
        return n + ((s.items && s.items.length) || 0);
      }, 0);
    }

    function updateLevelPill() {
      const el = document.getElementById("trainerLevelPill");
      if (el) el.textContent = levelLabel(trainerLevel);
    }

    function recordLevelClear(clearedLevel) {
      const p = loadTrainerProgress();
      const lv = Math.min(3, Math.max(1, clearedLevel));
      if (!p.stats[lv]) p.stats[lv] = { clears: 0, points: 0, mistakes: 0 };
      p.stats[lv].clears += 1;
      p.stats[lv].points += sessionPoints;
      p.stats[lv].mistakes += trainerMistakes;
      p.stats.totalPoints += sessionPoints;
      p.stats.totalMistakes += trainerMistakes;
      p.stats.sessions += 1;
      p.maxCleared = Math.max(p.maxCleared || 0, lv);
      if (lv >= 3) {
        p.lockedTo3 = true;
        p.level = 3;
        trainerLockedTo3 = true;
        trainerLevel = 3;
      } else {
        p.level = lv + 1;
        trainerLevel = lv + 1;
      }
      saveTrainerProgress(p);
    }

    function hideTrainerWin() {
      const win = document.getElementById("trainerWin");
      const playInner = document.querySelector("#trainerPlay .lex-chrome");
      const task = document.querySelector("#trainerPlay .lex-task");
      document.body.classList.remove("lex-trainer-win-open");
      if (win) win.hidden = true;
      if (playInner) playInner.hidden = false;
      if (task) task.hidden = false;
      if (trainerFwRaf) {
        cancelAnimationFrame(trainerFwRaf);
        trainerFwRaf = 0;
      }
    }

    function mountTrainerWinOverlay() {
      const win = document.getElementById("trainerWin");
      if (win && win.parentNode !== document.body) {
        document.body.appendChild(win);
      }
    }

    function runTrainerFireworks(canvas) {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      function size() {
        const w = canvas.clientWidth || window.innerWidth || 360;
        const h = canvas.clientHeight || window.innerHeight || 420;
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        return { w: w, h: h };
      }
      let dim = size();
      const colors = ["#56ccf2", "#7dd3fc", "#fbbf24", "#f472b6", "#34d399", "#c4b5fd", "#fff"];
      const bursts = [];
      function spawnBurst() {
        const x = dim.w * (0.18 + Math.random() * 0.64);
        const y = dim.h * (0.18 + Math.random() * 0.42);
        const color = colors[(Math.random() * colors.length) | 0];
        const n = 28 + ((Math.random() * 18) | 0);
        const parts = [];
        for (let i = 0; i < n; i += 1) {
          const ang = (Math.PI * 2 * i) / n + Math.random() * 0.2;
          const sp = 1.6 + Math.random() * 3.8;
          parts.push({
            x: x,
            y: y,
            vx: Math.cos(ang) * sp,
            vy: Math.sin(ang) * sp,
            life: 1,
            decay: 0.012 + Math.random() * 0.018,
            r: 1.5 + Math.random() * 2.2,
            color: color
          });
        }
        bursts.push({ parts: parts });
      }
      for (let k = 0; k < 5; k += 1) spawnBurst();
      trainerFwStopAt = performance.now() + (trainerWinMode === "master" ? 5600 : 3800);
      function frame(ts) {
        dim = size();
        ctx.clearRect(0, 0, dim.w, dim.h);
        if (ts < trainerFwStopAt && Math.random() < 0.08) spawnBurst();
        for (let b = bursts.length - 1; b >= 0; b -= 1) {
          const parts = bursts[b].parts;
          let alive = 0;
          for (let i = 0; i < parts.length; i += 1) {
            const p = parts[i];
            if (p.life <= 0) continue;
            alive += 1;
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.045;
            p.vx *= 0.99;
            p.life -= p.decay;
            ctx.globalAlpha = Math.max(0, p.life);
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
          }
          if (!alive) bursts.splice(b, 1);
        }
        ctx.globalAlpha = 1;
        if (ts < trainerFwStopAt || bursts.length) {
          trainerFwRaf = requestAnimationFrame(frame);
        } else {
          trainerFwRaf = 0;
          ctx.clearRect(0, 0, dim.w, dim.h);
        }
      }
      trainerFwRaf = requestAnimationFrame(frame);
    }

    function showTrainerWin() {
      const clearedLevel = trainerLevel;
      recordLevelClear(clearedLevel);
      trainerWinMode = clearedLevel >= 3 ? "master" : "level";
      mountTrainerWinOverlay();

      const win = document.getElementById("trainerWin");
      const playInner = document.querySelector("#trainerPlay .lex-chrome");
      const task = document.querySelector("#trainerPlay .lex-task");
      const msg = document.getElementById("msg");
      if (!win) return;
      if (playInner) playInner.hidden = true;
      if (task) task.hidden = true;
      if (msg) {
        msg.textContent = "";
        msg.className = "msg";
      }
      document.body.classList.add("lex-trainer-win-open");
      win.hidden = false;

      const meta = TRAINER_LEVEL_CLEAR[clearedLevel] || TRAINER_LEVEL_CLEAR[1];
      const kicker = document.getElementById("trainerWinKicker");
      const title = document.getElementById("trainerWinTitle");
      const line = document.getElementById("trainerWinLine");
      const stats = document.getElementById("trainerWinStats");
      const tomorrow = document.getElementById("trainerWinTomorrow");
      const again = document.getElementById("trainerWinAgain");
      const total = trainerTotalItems();
      const prog = loadTrainerProgress();

      if (kicker) kicker.textContent = meta.kicker;
      if (title) {
        title.textContent =
          meta.title ||
          TRAINER_WIN_TITLES[(Math.random() * TRAINER_WIN_TITLES.length) | 0];
      }
      if (line) {
        line.textContent =
          meta.line ||
          TRAINER_WIN_LINES[(Math.random() * TRAINER_WIN_LINES.length) | 0];
      }
      if (tomorrow) {
        tomorrow.hidden = clearedLevel < 3;
      }
      if (again) {
        again.textContent =
          clearedLevel >= 3 ? "Train Level 3 again" : "Next level →";
      }
      if (stats) {
        stats.innerHTML =
          '<div class="lex-trainer-win-stat"><b>L' +
          clearedLevel +
          "</b><span>cleared</span></div>" +
          '<div class="lex-trainer-win-stat"><b>' +
          sessionPoints +
          "</b><span>session points</span></div>" +
          '<div class="lex-trainer-win-stat"><b>' +
          total +
          "</b><span>phrases</span></div>" +
          '<div class="lex-trainer-win-stat"><b>' +
          trainerMistakes +
          "</b><span>mistakes</span></div>" +
          '<div class="lex-trainer-win-stat"><b>' +
          (prog.stats && prog.stats.totalPoints != null
            ? prog.stats.totalPoints
            : getScore()) +
          "</b><span>all-time pts</span></div>" +
          '<div class="lex-trainer-win-stat"><b>' +
          getScore() +
          "</b><span>home score</span></div>";
      }
      runTrainerFireworks(document.getElementById("trainerWinFireworks"));
    }

    function buildActiveSpeakers() {
      const { phrasal: uN, crime: uL, stories: uV } = trainerPackFlags;
      activeSpeakers = [];
      if (uN) activeSpeakers.push(...TRAINER.phrasal.map((s) => ({ name: "N " + s.name, items: s.items.slice() })));
      if (uL) activeSpeakers.push(...TRAINER.crime.map((s) => ({ name: s.name, items: s.items.slice() })));
      if (uV) activeSpeakers.push(...TRAINER.stories.map((s) => ({ name: (T2.short || "C") + " · " + s.name, items: s.items.slice() })));
    }

    function updatePackSummary() {
      const el = document.getElementById("packSummary");
      if (!el) return;
      const bits = [];
      if (trainerPackFlags.phrasal) bits.push(T0.short || "A");
      if (trainerPackFlags.crime) bits.push(T1.short || "B");
      if (trainerPackFlags.stories) bits.push(T2.short || "C");
      el.textContent = "Pack: " + (bits.join(" + ") || "—");
    }

    function renderTabs() {
      const tabs = document.getElementById("speakerTabs");
      tabs.innerHTML = activeSpeakers.map((s, i) => `<button class="tab ${i===speaker?"active":""}" data-sp="${i}" type="button">${s.name}</button>`).join("");
      tabs.querySelectorAll(".tab").forEach(btn => {
        btn.addEventListener("click", () => {
          speaker = Number(btn.getAttribute("data-sp"));
          item = 0; lives = 3; trainerSkipPoint = false;
          hideTrainerWin();
          renderTrainer();
        });
      });
    }

    function resetTrainerRoundCounters() {
      speaker = 0;
      item = 0;
      lives = 3;
      sessionPoints = 0;
      trainerMistakes = 0;
      trainerShownAnswers = 0;
      trainerSkipPoint = false;
    }

    function renderTrainer() {
      document.getElementById("homeScore").textContent = String(getScore());
      document.getElementById("sessionScore").textContent = String(sessionPoints);
      const chooser = document.getElementById("packChoice");
      const play = document.getElementById("trainerPlay");
      if (!trainerActive) {
        chooser.classList.remove("hidden");
        play.classList.add("hidden");
        hideTrainerWin();
        return;
      }
      chooser.classList.add("hidden");
      play.classList.remove("hidden");
      const win = document.getElementById("trainerWin");
      if (win && !win.hidden) return;
      updatePackSummary();
      updateLevelPill();
      const c = current();
      document.getElementById("lives").textContent = "❤".repeat(lives) + "♡".repeat(Math.max(0,3-lives));
      document.getElementById("counter").textContent = (item + 1) + " / " + currentItems().length;
      document.getElementById("hintBox").textContent = c.hint;
      document.getElementById("linePre").textContent = trainerPre(c);
      document.getElementById("linePost").textContent = trainerPost(c);
      document.getElementById("answerInput").value = "";
      document.getElementById("msg").textContent = "";
      document.getElementById("msg").className = "msg";
      renderTabs();
    }

    /** @returns {boolean} true if pack finished */
    function advanceAfterCorrect() {
      if (item < currentItems().length - 1) {
        item += 1;
        return false;
      }
      if (speaker < activeSpeakers.length - 1) {
        speaker += 1;
        item = 0;
        lives = 3;
        return false;
      }
      return true;
    }

    function handleCheck() {
      const inp = document.getElementById("answerInput");
      const msg = document.getElementById("msg");
      const cur = current();
      const expectedRaw = typedGapAnswer(cur);
      const expected = normalizeForCheck(expectedRaw);
      const got = normalizeForCheck(inp.value);
      if (!got) {
        msg.textContent = "Incorrect: empty answer. Type the missing word or chunk.";
        msg.className = "msg bad";
        return;
      }
      if (got === expected) {
        if (trainerSkipPoint) {
          trainerShownAnswers += 1;
          trainerSkipPoint = false;
          msg.textContent = "Moved on (no point for shown answer).";
          msg.className = "msg ok";
        } else {
          addScore(1);
          sessionPoints += 1;
          msg.textContent = "Correct! +1 point";
          msg.className = "msg ok";
        }
        const done = advanceAfterCorrect();
        if (done) {
          setTimeout(showTrainerWin, 500);
        } else {
          setTimeout(renderTrainer, 450);
        }
      } else {
        lives -= 1;
        trainerMistakes += 1;
        if (lives <= 0) {
          msg.textContent = "Incorrect. Expected: '" + expectedRaw + "'. No lives left — restarting this speaker.";
          msg.className = "msg bad";
          lives = 3;
          item = 0;
          trainerSkipPoint = false;
          setTimeout(renderTrainer, 700);
        } else {
          msg.textContent = "Incorrect. Expected: '" + expectedRaw + "'.";
          msg.className = "msg bad";
          inp.value = expectedRaw;
        }
      }
    }

    document.addEventListener("click", (e) => {
      if (e.target.id === "btnContinuePacks") {
        const usePhrasal = document.getElementById("packPhrasal").checked;
        const useCrime = document.getElementById("packCrime").checked;
        const useStories = document.getElementById("packStories").checked;
        const msg = document.getElementById("msg");
        if (!usePhrasal && !useCrime && !useStories) {
          if (msg) {
            msg.textContent = "Tick at least one pack before Continue.";
            msg.className = "msg bad";
          }
          return;
        }
        trainerPackFlags = { phrasal: usePhrasal, crime: useCrime, stories: useStories };
        buildActiveSpeakers();
        applyTrainerProgress();
        trainerActive = true;
        resetTrainerRoundCounters();
        hideTrainerWin();
        renderTrainer();
      }
      if (e.target.id === "btnBackPacks" || e.target.id === "trainerWinPacks") {
        trainerActive = false;
        hideTrainerWin();
        renderTrainer();
      }
      if (e.target.id === "trainerWinAgain") {
        applyTrainerProgress();
        resetTrainerRoundCounters();
        hideTrainerWin();
        renderTrainer();
      }
      if (e.target.id === "checkBtn") {
        handleCheck();
      }
      if (e.target.id === "btnHintMore") {
        const ans = typedGapAnswer(current());
        const msg = document.getElementById("msg");
        msg.textContent = "Hint: starts with '" + ans.charAt(0) + "' and has " + ans.length + " characters.";
        msg.className = "msg ok";
      }
      if (e.target.id === "btnShowAnswer") {
        const msg = document.getElementById("msg");
        document.getElementById("answerInput").value = typedGapAnswer(current());
        trainerSkipPoint = true;
        msg.textContent = "Answer shown. Press Check to continue (no point for this line).";
        msg.className = "msg bad";
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const inp = document.getElementById("answerInput");
      if (!inp || document.getElementById("trainerPlay").classList.contains("hidden")) return;
      if (document.activeElement === inp) {
        e.preventDefault();
        handleCheck();
      }
    });

    renderTrainer();

    // Lexical drop logic (falling words)
    const DROP = {
      pool: [],
      q: [],
      corpus: [],
      activeDrops: [],
      nodes: new Map(),
      round: 1,
      caught: 0,
      lives: 3,
      on: false,
      paused: false,
      overlayTimer: 0,
      speed: 16,
      rafId: 0,
      lastTs: 0,
      nextId: 1,
      nextSpawnY: 0
    };
    function escapeRegex(s) {
      return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function buildDropLineHtml(sentence, answer) {
      const safeSentence = String(sentence || "").trim();
      const safeAnswer = String(answer || "").trim();
      if (!safeSentence || !safeAnswer) return "Phrase: <b>___</b>";
      const re = new RegExp(escapeRegex(safeAnswer).replace(/\s+/g, "\\s+"), "i");
      const m = safeSentence.match(re);
      if (!m || m.index == null) {
        return escapeHtml(safeSentence) + " <b>___</b>";
      }
      const before = safeSentence.slice(0, m.index);
      const after = safeSentence.slice(m.index + m[0].length);
      return escapeHtml(before) + "<b>___</b>" + escapeHtml(after);
    }
    const DROP_TEXT_PHRASAL =
      typeof UNIT10_DROP_PHRASAL !== "undefined"
        ? UNIT10_DROP_PHRASAL
        : ["PLACEHOLDER · " + (T0.short || "A") + " · pack coming soon."];
    const DROP_TEXT_CRIME =
      typeof UNIT10_DROP_CRIME !== "undefined"
        ? UNIT10_DROP_CRIME
        : ["PLACEHOLDER · " + (T1.short || "B") + " · pack coming soon."];
    const DROP_TEXT_STORIES =
      typeof UNIT10_DROP_STORIES !== "undefined"
        ? UNIT10_DROP_STORIES
        : ["PLACEHOLDER · " + (T2.short || "C") + " · pack coming soon."];

    function buildDropCorpus(usePhrasal, useCrime, useStories) {
      let out = [];
      if (usePhrasal) out = out.concat(DROP_TEXT_PHRASAL);
      if (useCrime) out = out.concat(DROP_TEXT_CRIME);
      if (useStories) out = out.concat(DROP_TEXT_STORIES);
      return out;
    }
    function findSentenceForAnswer(answer) {
      const wanted = normalizeForCheck(answer);
      for (let i = 0; i < DROP.corpus.length; i += 1) {
        const line = DROP.corpus[i];
        if (normalizeForCheck(line).includes(wanted)) return line;
      }
      return "Phrase from text: " + answer;
    }
    function allPackItems(usePhrasal, useCrime, useStories) {
      let out = [];
      if (usePhrasal) out = out.concat(TRAINER.phrasal.flatMap((s) => s.items).map((it) => ({ ...it, answer: typedGapAnswer(it) })));
      if (useCrime) out = out.concat(TRAINER.crime.flatMap((s) => s.items).map((it) => ({ ...it, answer: typedGapAnswer(it) })));
      if (useStories) out = out.concat(TRAINER.stories.flatMap((s) => s.items).map((it) => ({ ...it, answer: typedGapAnswer(it) })));
      return out;
    }
    function dropSentenceForItem(item) {
      const ctx = item && String(item.contextSentence || "").trim();
      if (ctx) return ctx;
      return findSentenceForAnswer(fullAnswerOf(item));
    }
    function shuffle(a) {
      const x = a.slice();
      for (let i = x.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        const t = x[i]; x[i] = x[j]; x[j] = t;
      }
      return x;
    }
    function dropRenderHud() {
      const el = document.getElementById("dropHud");
      if (!el) return;
      el.textContent = "Round " + DROP.round + " · Caught " + DROP.caught + " · " + "❤".repeat(DROP.lives) + " · " + Math.round(DROP.speed) + " px/s";
    }
    function dropSetHint() {
      const hint = document.getElementById("dropHint");
      if (!hint) return;
      if (!DROP.activeDrops.length) {
        hint.textContent = "Type the missing chunk before the line reaches the bottom.";
        return;
      }
      hint.textContent = DROP.activeDrops[0].item.hint;
    }
    function dropSetNote(text, isBad) {
      const note = document.getElementById("dropNote");
      if (!note) return;
      note.textContent = text;
      note.className = "drop-note " + (isBad ? "msg bad" : "msg ok");
    }
    function dropClearBig() {
      const big = document.getElementById("dropBig");
      const ans = document.getElementById("dropBigAnswer");
      if (!big) return;
      if (ans) ans.textContent = "";
      big.classList.remove("on");
    }
    function dropStopLoop() {
      DROP.on = false;
      DROP.paused = false;
      if (DROP.overlayTimer) clearTimeout(DROP.overlayTimer);
      DROP.overlayTimer = 0;
      if (DROP.rafId) cancelAnimationFrame(DROP.rafId);
      DROP.rafId = 0;
      DROP.lastTs = 0;
    }
    function dropShowOverlay(answer) {
      const overlay = document.getElementById("dropOverlay");
      const ans = document.getElementById("dropOverlayAnswer");
      if (!overlay || !ans) return;
      ans.textContent = answer;
      overlay.classList.add("on");
    }
    function dropHideOverlay() {
      const overlay = document.getElementById("dropOverlay");
      const ans = document.getElementById("dropOverlayAnswer");
      if (!overlay || !ans) return;
      overlay.classList.remove("on");
      ans.textContent = "";
    }
    function dropApplyLifeLoss(answerText) {
      DROP.lives -= 1;
      dropRenderHud();
      dropShowOverlay(answerText);
      dropSetNote("Life lost: I don't know.", true);
      DROP.paused = true;
      if (DROP.overlayTimer) clearTimeout(DROP.overlayTimer);
      DROP.overlayTimer = setTimeout(() => {
        DROP.overlayTimer = 0;
        dropContinueAfterOverlay();
      }, 1800);
    }
    function dropClearNodes() {
      DROP.nodes.forEach((node) => node.remove());
      DROP.nodes.clear();
      DROP.activeDrops = [];
    }
    function dropLoseLife(missedItem) {
      DROP.lives -= 1;
      registerGameResult(fullAnswerOf(missedItem), missedItem.hint, false);
      const big = document.getElementById("dropBig");
      const ans = document.getElementById("dropBigAnswer");
      if (big && ans) {
        ans.textContent = missedItem.answer;
        big.classList.add("on");
      }
      dropSetNote("Too slow. You lost 1 life.", true);
      if (DROP.lives <= 0) {
        dropSetNote("No lives left. Round over.", true);
        dropStopLoop();
        document.getElementById("dropPlay").classList.remove("on");
        document.getElementById("dropIntro").classList.remove("hidden");
      }
      dropRenderHud();
      if (DROP.on) dropSpawnOne(true);
    }
    function dropMakeNode(drop) {
      const node = document.createElement("div");
      node.className = "drop-card";
      node.style.left = drop.x + "px";
      node.style.transform = "translateY(" + drop.y + "px)";
      node.innerHTML = buildDropLineHtml(drop.sentence, drop.item.answer);
      DROP.nodes.set(drop.id, node);
      const canvas = document.getElementById("dropCanvas");
      if (canvas) canvas.appendChild(node);
    }
    function dropRemoveById(id) {
      const idx = DROP.activeDrops.findIndex(d => d.id === id);
      if (idx === -1) return null;
      const [removed] = DROP.activeDrops.splice(idx, 1);
      const node = DROP.nodes.get(id);
      if (node) node.remove();
      DROP.nodes.delete(id);
      return removed;
    }
    function dropPickX(y) {
      const scene = document.getElementById("dropScene");
      const cardW = 340;
      const sidePad = 14;
      if (!scene) return sidePad;
      const maxX = Math.max(sidePad, scene.clientWidth - cardW - sidePad);
      return Math.round(sidePad + Math.random() * (maxX - sidePad));
    }
    function dropSpawnOne(force) {
      if (!DROP.q.length) return;
      if (!force && DROP.activeDrops.length >= 1) return;
      if (force && DROP.activeDrops.length >= 1) return;
      const item = DROP.q.shift();
      const y = -40;
      const drop = {
        id: DROP.nextId++,
        item,
        sentence: dropSentenceForItem(item),
        x: dropPickX(y),
        y
      };
      DROP.activeDrops.push(drop);
      dropMakeNode(drop);
      dropSetHint();
    }
    function dropFinishIfDone() {
      if (DROP.q.length === 0 && DROP.activeDrops.length === 0) {
        dropStopLoop();
        dropSetNote("Round complete. Start a new round.", false);
        document.getElementById("dropPlay").classList.remove("on");
        document.getElementById("dropIntro").classList.remove("hidden");
      }
    }
    function dropTick(ts) {
      if (!DROP.on) return;
      if (!DROP.lastTs) DROP.lastTs = ts;
      if (DROP.paused) {
        DROP.lastTs = ts;
        DROP.rafId = requestAnimationFrame(dropTick);
        return;
      }
      const dtSec = Math.min(0.05, (ts - DROP.lastTs) / 1000);
      DROP.lastTs = ts;
      dropSpawnOne(false);
      const scene = document.getElementById("dropScene");
      const loseY = scene ? Math.min(820, scene.clientHeight - 18) : 820;
      const toRemove = [];
      for (let i = 0; i < DROP.activeDrops.length; i += 1) {
        const d = DROP.activeDrops[i];
        d.y += DROP.speed * dtSec;
        const node = DROP.nodes.get(d.id);
        if (node) node.style.transform = "translateY(" + d.y.toFixed(2) + "px)";
        if (d.y > loseY) toRemove.push(d.id);
      }
      for (let i = 0; i < toRemove.length; i += 1) {
        const removed = dropRemoveById(toRemove[i]);
        if (removed) dropLoseLife(removed.item);
      }
      dropFinishIfDone();
      if (!DROP.on) return;
      DROP.rafId = requestAnimationFrame(dropTick);
    }
    function dropStartLoop() {
      dropStopLoop();
      DROP.on = true;
      DROP.lastTs = 0;
      DROP.rafId = requestAnimationFrame(dropTick);
    }
    function dropCheck() {
      if (!DROP.on || DROP.paused) return;
      const inp = document.getElementById("dropInput");
      const got = normalizeForCheck(inp ? inp.value : "");
      if (!got) {
        dropSetNote("Type answer first.", true);
        return;
      }
      const hit = DROP.activeDrops.find(d => normalizeForCheck(d.item.answer) === got);
      if (hit) {
        dropRemoveById(hit.id);
        DROP.caught += 1;
        addScore(1);
        registerGameResult(fullAnswerOf(hit.item), hit.item.hint, true);
        dropClearBig();
        dropSetNote("Caught! +1", false);
        if (inp) inp.value = "";
        dropRenderHud();
        dropSetHint();
        dropFinishIfDone();
      } else {
        dropSetNote("No active block with this answer.", true);
      }
    }
    function dropDontKnow() {
      if (!DROP.on || DROP.paused || !DROP.activeDrops.length) return;
      const current = DROP.activeDrops[0];
      dropRemoveById(current.id);
      registerGameResult(fullAnswerOf(current.item), current.item.hint, false);
      dropApplyLifeLoss(current.item.answer);
    }
    function dropContinueAfterOverlay() {
      if (DROP.overlayTimer) clearTimeout(DROP.overlayTimer);
      DROP.overlayTimer = 0;
      if (!DROP.on) {
        dropHideOverlay();
        return;
      }
      dropHideOverlay();
      if (DROP.lives <= 0) {
        dropSetNote("No lives left. Round over.", true);
        dropStopLoop();
        document.getElementById("dropPlay").classList.remove("on");
        document.getElementById("dropIntro").classList.remove("hidden");
        return;
      }
      DROP.paused = false;
      dropClearBig();
      dropSetNote("", false);
      dropSpawnOne(true);
      dropSetHint();
    }
    document.addEventListener("click", (e) => {
      if (e.target.id === "dropStartBtn") {
        const usePhrasal = document.getElementById("dropPhrasal").checked;
        const useCrime = document.getElementById("dropCrime").checked;
        const useStories = document.getElementById("dropStories").checked;
        if (!usePhrasal && !useCrime && !useStories) return;
        DROP.pool = allPackItems(usePhrasal, useCrime, useStories);
        DROP.corpus = buildDropCorpus(usePhrasal, useCrime, useStories);
        DROP.q = shuffle(DROP.pool);
        dropClearNodes();
        DROP.caught = 0;
        DROP.lives = 3;
        DROP.round = 1;
        DROP.speed = 16;
        DROP.paused = false;
        DROP.nextSpawnY = 0;
        DROP.nextId = 1;
        document.getElementById("dropIntro").classList.add("hidden");
        document.getElementById("dropPlay").classList.add("on");
        document.getElementById("dropInput").value = "";
        dropClearBig();
        dropSetNote("", false);
        dropRenderHud();
        dropSpawnOne(true);
        dropStartLoop();
      }
      if (e.target.id === "dropCheckBtn") {
        dropCheck();
      }
      if (e.target.id === "dropDontKnowBtn") {
        dropDontKnow();
      }
      if (e.target.id === "dropOverlayContinueBtn") {
        dropContinueAfterOverlay();
      }
      if (e.target.id === "cardsNext") cardsNext();
      if (e.target.id === "cardsKnow") cardsMark("know");
      if (e.target.id === "cardsLearn") cardsMark("learn");
      if (e.target.id === "cardsScene" || e.target.closest("#cardsScene")) cardsFlip();

      if (e.target.closest("#pickOptions .pick-option")) {
        const btn = e.target.closest("#pickOptions .pick-option");
        pickChoose(btn.getAttribute("data-op") || "");
      }
      if (e.target.id === "pickRestartBtn") {
        pickBuildRound();
        pickRender();
      }
      if (e.target.id === "expressKnowBtn") {
        if (Date.now() < EXPRESS.endAt && EXPRESS.i < EXPRESS.deck.length) {
          EXPRESS.score += 1;
          addScore(1);
          const cur = EXPRESS.deck[EXPRESS.i];
          if (cur) registerGameResult(cur.item.full, cur.item.hint, true);
        }
        expressNext();
      }
      if (e.target.id === "expressKeepBtn") {
        if (EXPRESS.i < EXPRESS.deck.length) {
          const cur = EXPRESS.deck[EXPRESS.i];
          if (cur) registerGameResult(cur.item.full, cur.item.hint, false);
        }
        expressNext();
      }
      if (e.target.id === "expressShowBtn") {
        if (EXPRESS.i < EXPRESS.deck.length) {
          EXPRESS.revealAnswer = true;
          expressRender();
        }
      }
      if (e.target.id === "echoPlayBtn") {
        echoSpeakCurrent();
      }
      if (e.target.id === "echoShowBtn") {
        if (ECHO.i < ECHO.q.length) {
          const msg = document.getElementById("echoMsg");
          msg.textContent = "Answer: " + ECHO.q[ECHO.i].answer;
          msg.className = "msg bad";
          ECHO.reveal = true;
          echoRender();
        }
      }
      if (e.target.id === "echoNextBtn") {
        if (ECHO.i < ECHO.q.length) {
          ECHO.reveal = false;
          ECHO.i += 1;
          echoRender();
          setTimeout(echoSpeakCurrent, 120);
        }
      }
      if (e.target.id === "echoCheckBtn") {
        if (ECHO.i < ECHO.q.length) {
          const inp = document.getElementById("echoInput");
          const msg = document.getElementById("echoMsg");
          const reveal = document.getElementById("echoReveal");
          const got = normalizeForCheck(inp ? inp.value : "");
          const exp = normalizeForCheck(ECHO.q[ECHO.i].answer);
          if (got && got === exp) {
            ECHO.score += 1;
            addScore(1);
            registerGameResult(ECHO.q[ECHO.i].answer, ECHO.q[ECHO.i].hint, true);
            msg.textContent = "Correct! +1";
            msg.className = "msg ok";
            ECHO.reveal = false;
            ECHO.i += 1;
            setTimeout(() => {
              echoRender();
              setTimeout(echoSpeakCurrent, 120);
            }, 450);
          } else {
            registerGameResult(ECHO.q[ECHO.i].answer, ECHO.q[ECHO.i].hint, false);
            msg.textContent = "Incorrect.";
            msg.className = "msg bad";
            if (reveal) {
              reveal.innerHTML = "Correct answer: <b>" + escapeHtml(ECHO.q[ECHO.i].answer) + "</b>";
              reveal.classList.add("on");
            }
            ECHO.q.push(ECHO.q[ECHO.i]);
            ECHO.reveal = true;
            echoRender();
          }
        }
      }
      if (e.target.id === "matchSelectAllBtn") {
        const n = document.getElementById("matchPhrasal");
        const l = document.getElementById("matchCrime");
        const v = document.getElementById("matchStories");
        if (n) n.checked = true;
        if (l) l.checked = true;
        if (v) v.checked = true;
      }
      if (e.target.id === "matchStartBtn") {
        const n = document.getElementById("matchPhrasal");
        const l = document.getElementById("matchCrime");
        const v = document.getElementById("matchStories");
        const usePhrasal = !!(n && n.checked);
        const useCrime = !!(l && l.checked);
        const useStories = !!(v && v.checked);
        const msg = document.getElementById("matchMsg");
        if (!usePhrasal && !useCrime && !useStories) {
          if (msg) { msg.textContent = "Choose at least one theme."; msg.className = "msg bad"; }
          return;
        }
        const intro = document.getElementById("matchIntro");
        const play = document.getElementById("matchPlay");
        if (intro) intro.style.display = "none";
        if (play) play.classList.add("on");
        matchBuildDeck(usePhrasal, useCrime, useStories);
      }
      if (e.target.id === "matchRestartBtn") {
        const n = document.getElementById("matchPhrasal");
        const l = document.getElementById("matchCrime");
        const v = document.getElementById("matchStories");
        matchBuildDeck(!!(n && n.checked), !!(l && l.checked), !!(v && v.checked));
      }
      if (e.target.closest("#matchGrid .match-card")) {
        const btn = e.target.closest("#matchGrid .match-card");
        matchTap(btn.getAttribute("data-mid") || "");
      }
      const wbThemeBtn = e.target.closest(".wb-theme-btn");
      if (wbThemeBtn) {
        WB_THEME = wbThemeBtn.getAttribute("data-wb-theme") || "phrasal";
        wordBankRender();
      }
      const wbFilterBtn = e.target.closest(".wb-repeat-btn");
      if (wbFilterBtn) {
        WB_FILTER = wbFilterBtn.getAttribute("data-wb-filter") || "all";
        wordBankRender();
      }
      const wbMarkBtn = e.target.closest(".wb-mark-btn");
      if (wbMarkBtn) {
        const id = wbMarkBtn.getAttribute("data-wb-id") || "";
        const mark = wbMarkBtn.getAttribute("data-wb-mark") || "";
        if (id && (mark === "know" || mark === "learn" || mark === "reset")) {
          cardsMarks[id] = mark;
          if (mark === "reset") {
            delete cardsMarks[id];
            cardsSaveMarks();
            srsReset(id);
          } else {
            cardsSaveMarks();
            if (mark === "know") srsMarkKnow(id);
            if (mark === "learn") srsMarkLearning(id);
          }
          wordBankRender();
        }
      }
    });
    document.addEventListener("input", (e) => {
      if (e.target && e.target.id === "wbSearch") {
        wordBankRender();
      }
      if (e.target && e.target.id === "wbSort") {
        WB_SORT = e.target.value || "dueFirst";
        wordBankRender();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === " " && document.activeElement && document.activeElement.id === "cardsScene") {
        e.preventDefault();
        cardsFlip();
        return;
      }
      if (e.key === "Enter" && document.activeElement && document.activeElement.id === "dropInput") {
        e.preventDefault();
        dropCheck();
        return;
      }
      if (e.key === "Enter" && document.activeElement && document.activeElement.id === "echoInput") {
        e.preventDefault();
        const btn = document.getElementById("echoCheckBtn");
        if (btn) btn.click();
      }
    });
    pickBuildRound();
    pickRender();
    expressBuild();
    expressRender();
    echoBuild();
    echoRender();
    matchRender();
})();
