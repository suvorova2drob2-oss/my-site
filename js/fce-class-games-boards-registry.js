/**
 * Class games — 100:1 + Glass bridge registry by unit number.
 * window.FCE_CLASS_GAMES_BOARDS.resolve(unit)
 */
(function (W) {
  "use strict";

  var META = {
    1: {
      tag: "Unit 1 · class games",
      hub: "../unit1-class-games.html",
      unitHome: "../unit1.html",
      hundredLead: "Five slots on the board (100→20). Pick a card — hit keeps your turn; miss passes. <strong>Hint</strong> opens the source text.",
      glassLead: "Two modes: <strong>Pick glass</strong> (safe chunk vs trap) or <strong>Type answer</strong> (tap glass → type). Deck tabs below. Wrong step → restart.",
      aliasLead: "<strong>Alias</strong> — explain the phrase, host taps the card when guessed.",
      pictLead: "<strong>Pictionary Live</strong> — students draw on phones (link), class guesses who drew what on screen.",
      winText: "You crossed the bridge — all steps matched the Unit 1 deck."
    },
    3: {
      tag: "Unit 3 · My digital detox",
      hub: "../unit3-digital-detox/games/index.html",
      unitHome: "../unit3.html",
      hundredLead: "Six rounds, one per part of <em>My digital detox</em>. Five board slots (100→20 pts). Hits vs decoys.",
      glassLead: "Nine steps across Parts 1–6 of <em>My digital detox</em>. Left/right random each time.",
      winText: "You made it across. Every step matched the six parts of <em>My digital detox</em>.",
      u3DataPath: "../unit3-digital-detox/data/u3-games-content.js"
    }
  };

  function metaFor(unit) {
    var n = parseInt(unit, 10) || 1;
    if (META[n]) return META[n];
    return {
      tag: "Unit " + n + " · class games",
      hub: "../unit" + n + "-class-games.html",
      unitHome: "../unit" + n + ".html",
      hundredLead: "Five “top” answers (100→20 pts) per round. Card pool: hits vs decoys. Placeholder content until unit data is added.",
      glassLead: "Two glass panels per step — one safe phrase, one trap. Nine steps. Placeholder until unit data is added.",
      aliasLead: "Explain phrases on screen — host taps guessed cards.",
      pictLead: "Students draw on phones; class guesses on the projector.",
      winText: "You made it across all nine steps."
    };
  }

  function normalizeU3Path(url) {
    if (!url || typeof url !== "string") return url;
    if (/^\.\.\/text-/.test(url)) {
      return "../unit3-digital-detox/" + url.slice(3);
    }
    return url;
  }

  function cloneHundredRound(r) {
    if (!r) return r;
    var out = {
      topic: r.topic,
      q: r.q,
      board: r.board,
      decoys: r.decoys,
      pack: r.pack,
      hintTitle: r.hintTitle,
      hintPassage: r.hintPassage,
      hintFoot: r.hintFoot
    };
    if (r.hint) out.hint = normalizeU3Path(r.hint);
    return out;
  }

  function cloneGlassStep(s) {
    if (!s) return s;
    return {
      pack: s.pack,
      text: s.text,
      good: s.good,
      bad: s.bad,
      altGood: s.altGood,
      hintTitle: s.hintTitle,
      hintPassage: s.hintPassage,
      source: normalizeU3Path(s.source)
    };
  }

  function pickHundred(unit) {
    var n = parseInt(unit, 10) || 1;
    if (n === 1 && W.U1_HUNDRED_ROUNDS && W.U1_HUNDRED_ROUNDS.length) {
      return { rounds: W.U1_HUNDRED_ROUNDS, placeholder: false };
    }
    if (n === 3 && W.U3_HUNDRED_ROUNDS && W.U3_HUNDRED_ROUNDS.length) {
      return {
        rounds: W.U3_HUNDRED_ROUNDS.map(cloneHundredRound),
        placeholder: false
      };
    }
    var key = "U" + n + "_HUNDRED_ROUNDS";
    if (W[key] && W[key].length) return { rounds: W[key], placeholder: false };
    var fb = W.FCE_BOARDS_FALLBACK;
    return { rounds: fb && fb.getHundred ? fb.getHundred(n) : [], placeholder: true };
  }

  function cloneAliasPhrase(p) {
    if (!p) return p;
    return {
      phrase: p.phrase,
      pack: p.pack,
      topicId: p.topicId || p.pack,
      hint: p.hint
    };
  }

  function pickAlias(unit) {
    var n = parseInt(unit, 10) || 1;
    if (n === 1 && W.U1_ALIAS_PHRASES && W.U1_ALIAS_PHRASES.length) {
      return { phrases: W.U1_ALIAS_PHRASES.map(cloneAliasPhrase), placeholder: false };
    }
    var key = "U" + n + "_ALIAS_PHRASES";
    if (W[key] && W[key].length) {
      return { phrases: W[key].map(cloneAliasPhrase), placeholder: false };
    }
    var fb = W.FCE_BOARDS_FALLBACK;
    return {
      phrases: fb && fb.getAlias ? fb.getAlias(n) : [],
      placeholder: !(W[key] && W[key].length)
    };
  }

  function pickGlass(unit) {
    var n = parseInt(unit, 10) || 1;
    if (n === 1 && W.U1_GLASS_STEPS && W.U1_GLASS_STEPS.length) {
      return { steps: W.U1_GLASS_STEPS, placeholder: false };
    }
    if (n === 3 && W.U3_GLASS_STEPS && W.U3_GLASS_STEPS.length) {
      return {
        steps: W.U3_GLASS_STEPS.map(cloneGlassStep),
        placeholder: false
      };
    }
    var key = "U" + n + "_GLASS_STEPS";
    if (W[key] && W[key].length) return { steps: W[key], placeholder: false };
    var fb = W.FCE_BOARDS_FALLBACK;
    return { steps: fb && fb.getGlass ? fb.getGlass(n) : [], placeholder: true };
  }

  W.FCE_CLASS_GAMES_BOARDS = {
    metaFor: metaFor,
    pickHundred: pickHundred,
    pickGlass: pickGlass,
    pickAlias: pickAlias,
    parseUnitFromQuery: function () {
      var m = /(?:^|[?&])unit=(\d+)/i.exec(W.location.search || "");
      return m ? parseInt(m[1], 10) : 1;
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
