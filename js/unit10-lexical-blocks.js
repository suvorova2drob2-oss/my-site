/**
 * Unit 10 — Lexical games phrase packs (Mastering B2 / FCE).
 * Stub themes: replace PLACEHOLDER lines when phrase lists arrive.
 * Same shape as Unit 12 blocks for unit10-lexical-games.html.
 */
(function (W) {
  "use strict";

  function normalizeToken(t) {
    return String(t).replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, "");
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
    return {
      hint: hint || phrase,
      pre: pre,
      answer: chunk,
      post: post
    };
  }

  function packTheme(rawBlocks) {
    return rawBlocks.map(function (b) {
      return {
        name: b.name,
        items: (b.lines || []).map(function (line) {
          var phrase = line.phrase || line;
          var hint = line.hint || "Stub — replace with real Unit 10 phrase.";
          var base = mk(phrase, hint);
          return Object.assign({}, base, {
            phrase: phrase,
            stickyBefore: line.stickyBefore || "Type the missing bit: ",
            stickyAnswer:
              line.stickyAnswer || String(base.answer).split(/\s+/)[0] || "stub",
            stickyAfter: line.stickyAfter != null ? line.stickyAfter : "",
            contextSentence: line.contextSentence || phrase
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

  /** Theme A — phrasal out / up / siblings */
  W.UNIT10_PHRASAL_BLOCKS = packTheme([
    {
      name: "Phrasal out / up (stub)",
      lines: [
        stubLine("phrasal out"),
        stubLine("phrasal up"),
        stubLine("siblings up/out")
      ]
    }
  ]);

  /** Theme B — crimes, titles, punishment */
  W.UNIT10_CRIME_BLOCKS = packTheme([
    {
      name: "Crimes & criminals (stub)",
      lines: [
        stubLine("crimes"),
        stubLine("criminals’ titles"),
        stubLine("crime & punishment")
      ]
    }
  ]);

  /** Theme C — telling lies + honesty / investigators / out- */
  W.UNIT10_STORIES_BLOCKS = packTheme([
    {
      name: "Lies · honesty · investigators (stub)",
      lines: [
        stubLine("telling lies"),
        stubLine("honesty is the best policy"),
        stubLine("out- prefix / investigators")
      ]
    }
  ]);

  W.UNIT10_DROP_PHRASAL = ["PLACEHOLDER · Phrasal verbs · pack coming soon."];
  W.UNIT10_DROP_CRIME = ["PLACEHOLDER · Crimes & criminals · pack coming soon."];
  W.UNIT10_DROP_STORIES = [
    "PLACEHOLDER · Lies / honesty / investigators · pack coming soon."
  ];
})(typeof window !== "undefined" ? window : globalThis);
