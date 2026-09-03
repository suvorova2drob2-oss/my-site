/**
 * Stub Vocabulary Games packs for Mastering B2 units 1–12.
 * Replace PLACEHOLDER lines in each theme when real lists arrive.
 */
(function (W) {
  "use strict";

  function normalizeToken(t) {
    return String(t).replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, "");
  }

  var STICKY_STOP = new Set([
    "a", "an", "the", "and", "or", "of", "to", "in", "on", "for", "with", "at", "by", "from",
    "is", "are", "was", "were", "be", "been", "being", "that", "this", "these", "those",
    "my", "your", "our", "their", "any", "all", "so", "as", "it", "its", "it's", "i", "we",
    "you", "they", "he", "she", "them", "us", "me", "not", "but", "if", "when", "then"
  ]);

  /** One content word for Lexical trainer gaps (not multi-word chunks). */
  function pickStickyKeyword(text) {
    var words = String(text || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    if (!words.length) return "";
    if (words.length === 1) return normalizeToken(words[0]) || words[0];
    var best = "";
    var bestScore = -1;
    var i;
    for (i = 0; i < words.length; i += 1) {
      var raw = words[i];
      var w = normalizeToken(raw).toLowerCase();
      if (!w || STICKY_STOP.has(w)) continue;
      var score = w.length;
      if (w.length >= 7) score += 4;
      if (w.length >= 5) score += 1;
      if (score > bestScore) {
        bestScore = score;
        best = normalizeToken(raw) || raw;
      }
    }
    return best || normalizeToken(words[0]) || words[0];
  }

  function carveStickyFromContext(ctx, gap) {
    var c = String(ctx || "").trim();
    var g = String(gap || "").trim();
    if (!g) return { stickyBefore: "", stickyAnswer: "", stickyAfter: "" };
    if (!c) return { stickyBefore: "", stickyAnswer: g, stickyAfter: "" };
    var ix = c.toLowerCase().indexOf(g.toLowerCase());
    if (ix < 0) {
      return { stickyBefore: c + " ", stickyAnswer: g, stickyAfter: "" };
    }
    return {
      stickyBefore: c.slice(0, ix),
      stickyAnswer: c.slice(ix, ix + g.length),
      stickyAfter: c.slice(ix + g.length)
    };
  }

  function mk(phrase, hint) {
    var words = String(phrase).trim().split(/\s+/).filter(Boolean);
    var cleanWords = words.map(normalizeToken);
    var stop = new Set([
      "a", "an", "the", "and", "or", "of", "to", "in", "on", "for", "with", "at", "by", "from",
      "is", "are", "was", "were", "be", "been", "being", "that", "this", "these", "those",
      "my", "your", "our", "their", "any", "all", "so", "as", "it", "its", "it's", "i", "we",
      "you", "they", "he", "she", "them", "us", "me"
    ]);
    function scoreWindow(start, len) {
      var slice = words.slice(start, start + len);
      var score = 0;
      for (var i = 0; i < slice.length; i += 1) {
        var w = slice[i].toLowerCase().replace(/[^a-z0-9'-]/g, "");
        if (!w) continue;
        if (!stop.has(w)) score += 2;
        if (w.length >= 7) score += 1;
      }
      return score;
    }
    var bestStart = 0;
    var bestLen = Math.min(words.length, words.length >= 8 ? 3 : 2);
    var bestScore = -1;
    var lens = words.length <= 3 ? [words.length] : [3, 2];
    for (var li = 0; li < lens.length; li += 1) {
      var len = lens[li];
      if (len <= 0 || len > words.length) continue;
      for (var s = 0; s <= words.length - len; s += 1) {
        var sc = scoreWindow(s, len);
        if (sc > bestScore) {
          bestScore = sc;
          bestStart = s;
          bestLen = len;
        }
      }
    }
    var chunk = cleanWords.slice(bestStart, bestStart + bestLen).join(" ");
    var pre = (bestStart > 0 ? words.slice(0, bestStart).join(" ") : "Phrase:") + " ";
    var postWords = words.slice(bestStart + bestLen);
    var post = postWords.length ? " " + postWords.join(" ") : "";
    return { hint: hint || phrase, pre: pre, answer: chunk, post: post };
  }

  function packBlocks(rawBlocks) {
    return rawBlocks.map(function (b) {
      return {
        name: b.name,
        items: (b.lines || []).map(function (line) {
          var phrase = line.phrase || line;
          var hint = line.hint || "Stub — replace with real phrases.";
          var base = mk(phrase, hint);
          var ctx = String(line.contextSentence || phrase || "").trim();
          var authorGap = String(line.stickyAnswer || "").trim();
          /* Keep authored cool-word chunks (multi-word OK). Only invent if missing. */
          var gap = authorGap || String(base.answer || "").trim() || pickStickyKeyword(phrase);
          var carved = carveStickyFromContext(ctx, gap);
          var useAuthorCarve =
            line.stickyBefore != null &&
            authorGap &&
            ctx.toLowerCase().indexOf(authorGap.toLowerCase()) >= 0;
          return Object.assign({}, base, {
            phrase: phrase,
            coolWord: line.coolWord || phrase,
            hint: hint,
            stickyBefore: useAuthorCarve
              ? line.stickyBefore
              : carved.stickyBefore || line.stickyBefore || "Type the missing bit: ",
            stickyAnswer: useAuthorCarve
              ? authorGap
              : carved.stickyAnswer || gap || "stub",
            stickyAfter: useAuthorCarve
              ? line.stickyAfter != null
                ? line.stickyAfter
                : ""
              : carved.stickyAfter,
            contextSentence: ctx || phrase
          });
        })
      };
    });
  }

  function stubLine(label) {
    return {
      phrase: "PLACEHOLDER · " + label + " · phrase pack coming soon",
      hint: "Заглушка — пришли список фраз для этой темы.",
      stickyBefore: "PLACEHOLDER · " + label + " · phrase pack coming ",
      stickyAnswer: "soon",
      stickyAfter: "",
      contextSentence: "PLACEHOLDER · " + label + " · phrase pack coming soon"
    };
  }

  function stubTheme(label, short, topics) {
    topics = topics || [label];
    return {
      id: short.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      label: label,
      short: short,
      blurb: " Stub until phrase list arrives.",
      blocks: packBlocks([
        {
          name: label + " (stub)",
          lines: topics.map(stubLine)
        }
      ]),
      dropLines: ["PLACEHOLDER · " + label + " · pack coming soon."]
    };
  }

  /** Unit 1: Get stub only — Lifestyle + Clothes are real packs. */
  var UNIT_THEME_NAMES = {
    1: [
      ["Get phrases", "Get", ["get phrases", "meeting my hero"]],
      ["Run expressions", "Run", ["run expressions"]]
    ],
    2: [
      ["Sport vocabulary", "Sport", ["sport"]],
      ["Music vocabulary", "Music", ["music"]],
      ["Get phrasal verbs", "Get", ["get phrasals"]]
    ],
    3: [
      ["Technology", "Tech", ["technology"]],
      ["Digital detox", "Detox", ["digital detox"]],
      ["Comparisons / as…as", "Compare", ["as as expressions"]]
    ],
    4: [
      ["Films vocabulary", "Films", ["films"]],
      ["Take phrases", "Take", ["take"]],
      ["Listening / reading lexis", "Texts", ["listening", "reading"]]
    ],
    5: [
      ["Coursebook vocabulary A", "Vocab A", ["vocab pack A"]],
      ["Coursebook vocabulary B", "Vocab B", ["vocab pack B"]],
      ["Listening / reading lexis", "Texts", ["listening", "reading"]]
    ],
    6: [
      ["Coursebook vocabulary A", "Vocab A", ["vocab pack A"]],
      ["Coursebook vocabulary B", "Vocab B", ["vocab pack B"]],
      ["Listening / reading lexis", "Texts", ["listening", "reading"]]
    ],
    7: [
      ["Coursebook vocabulary A", "Vocab A", ["vocab pack A"]],
      ["Coursebook vocabulary B", "Vocab B", ["vocab pack B"]],
      ["Listening / reading lexis", "Texts", ["listening", "reading"]]
    ],
    8: [
      ["Environment collocations", "Environment", ["environment"]],
      ["Coursebook vocabulary B", "Vocab B", ["vocab pack B"]],
      ["Listening / reading lexis", "Texts", ["listening", "reading"]]
    ],
    9: [
      ["Art / making a mark", "Art", ["making a mark", "art restoration"]],
      ["Mystery / mountains", "Mystery", ["superstition mountains", "ghost walk"]],
      ["Mind’s eye / listening", "Listen", ["painting with the mind's eye"]]
    ],
    10: [
      ["Phrasal out / up", "Phrasal", ["phrasal out", "phrasal up", "siblings"]],
      ["Crimes & criminals", "Crimes", ["crimes", "titles", "punishment"]],
      ["Lies / honesty", "Stories", ["telling lies", "honesty", "investigators"]]
    ],
    11: [
      ["Coursebook vocabulary A", "Vocab A", ["vocab pack A"]],
      ["Coursebook vocabulary B", "Vocab B", ["vocab pack B"]],
      ["Listening / reading lexis", "Texts", ["listening", "reading"]]
    ],
    12: [
      ["Naomi / health", "Naomi", ["naomi health matters"]],
      ["Restaurants / 12.1", "Restaurants", ["listening 12.1"]],
      ["Going vegan", "Vegan", ["going vegan"]]
    ]
  };

  function vocabHubFor(unit) {
    var map = {
      1: "unit1-vocabulary/index.html",
      2: "unit2-vocabulary/index.html",
      3: "unit3-vocabulary/index.html",
      9: "unit9-vocabulary/index.html?course=fce",
      10: "unit10-vocabulary/fce/index.html",
      12: "unit12-vocabulary/index.html"
    };
    return map[unit] || "";
  }

  function forUnit(unit) {
    unit = Number(unit) || 0;
    var names =
      UNIT_THEME_NAMES[unit] ||
      [
        ["Coursebook vocabulary A", "Vocab A", ["vocab pack A"]],
        ["Coursebook vocabulary B", "Vocab B", ["vocab pack B"]],
        ["Listening / reading lexis", "Texts", ["listening", "reading"]]
      ];
    var themes = names.map(function (row) {
      return stubTheme(row[0], row[1], row[2]);
    });

    /* Unit 1: Lifestyle + Clothes + Get + Run — real packs when wired. */
    if (unit === 1) {
      var u1Themes = [];
      if (
        W.FCE_U1_LIFESTYLE_LEXIS &&
        typeof W.FCE_U1_LIFESTYLE_LEXIS.lifestyleTheme === "function"
      ) {
        u1Themes.push(W.FCE_U1_LIFESTYLE_LEXIS.lifestyleTheme());
      }
      if (
        W.FCE_U1_CLOTHES_LEXIS &&
        typeof W.FCE_U1_CLOTHES_LEXIS.clothesTheme === "function"
      ) {
        u1Themes.push(W.FCE_U1_CLOTHES_LEXIS.clothesTheme());
      }
      if (
        W.FCE_U1_GET_LEXIS &&
        typeof W.FCE_U1_GET_LEXIS.getTheme === "function"
      ) {
        u1Themes.push(W.FCE_U1_GET_LEXIS.getTheme());
      } else if (names[0]) {
        u1Themes.push(stubTheme(names[0][0], names[0][1], names[0][2]));
      }
      if (
        W.FCE_U1_RUN_LEXIS &&
        typeof W.FCE_U1_RUN_LEXIS.runTheme === "function"
      ) {
        u1Themes.push(W.FCE_U1_RUN_LEXIS.runTheme());
      } else if (names[1]) {
        u1Themes.push(stubTheme(names[1][0], names[1][1], names[1][2]));
      }
      if (u1Themes.length) themes = u1Themes;
    }

    var hub = vocabHubFor(unit);
    var hasLifestyle = unit === 1 && themes.some(function (t) {
      return t && t.id === "lifestyle";
    });
    var hasClothes = unit === 1 && themes.some(function (t) {
      return t && t.id === "clothes";
    });
    return {
      unit: unit,
      title: "Lexical games — Unit " + unit,
      backHref: "unit" + unit + ".html",
      backLabel: "Back to Unit " + unit,
      vocabHubHref: hub,
      vocabHubLabel: hub ? "Unit " + unit + " Vocabulary hub →" : "",
      subtitleHtml: hasLifestyle || hasClothes
        ? "<b>Lexical games, Unit 1.</b> <b>Lifestyle</b> (A–D) + <b>Clothes</b> (Speakers 1–5) + <b>Get</b> + <b>Run</b> — Cool Words with full script context."
        : "<b>Lexical games, Unit " +
          unit +
          ".</b> Same trainers as Unit 12 (trainer, cards, drop, pick, express, echo, match, word bank). Stub packs — send phrase lists to fill.",
      themes: themes
    };
  }

  W.FCE_UNIT_LEX_STUBS = {
    forUnit: forUnit,
    stubTheme: stubTheme,
    packBlocks: packBlocks,
    mk: mk,
    pickStickyKeyword: pickStickyKeyword,
    carveStickyFromContext: carveStickyFromContext
  };
})(typeof window !== "undefined" ? window : globalThis);
