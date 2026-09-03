/**
 * Unit 1 Millionaire — lifestyle + clothes (Cool Words packs).
 * Depends: unit1-lifestyle-lexis.js, unit1-clothes-lexis.js,
 *          unit1-lifestyle-retell-blocks.js, unit1-clothes-retell-blocks.js
 */
(function (W) {
  "use strict";

  function norm(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[\u2019\u2018`´]/g, "'")
      .replace(/[^a-z0-9\s'-]/gi, " ")
      .replace(/\s+/g, " ")
      .trim();
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

  function escHtml(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function collectRows() {
    var out = [];
    var life = W.FCE_U1_LIFESTYLE_LEXIS;
    var cloth = W.FCE_U1_CLOTHES_LEXIS;
    if (life && life.people) {
      life.people.forEach(function (person) {
        person.lines.forEach(function (line) {
          out.push({
            pack: "lifestyle",
            packLabel: "Lifestyle",
            speakerId: person.id,
            speakerName: person.label.split(" · ")[0],
            speakerFull: person.label,
            topic: "Lifestyle · " + person.label.split(" · ")[0],
            coolWord: String(line.coolWord || "").trim(),
            phrase: String(line.phrase || line.coolWord || "").trim(),
            hint: String(line.hint || "").trim(),
            contextSentence: String(line.contextSentence || line.phrase || "").trim(),
            stickyAnswer: String(line.stickyAnswer || "").trim()
          });
        });
      });
    }
    if (cloth && cloth.speakers) {
      cloth.speakers.forEach(function (sp) {
        sp.lines.forEach(function (line) {
          out.push({
            pack: "clothes",
            packLabel: "Clothes",
            speakerId: sp.id,
            speakerName: sp.label,
            speakerFull: sp.label,
            topic: "Clothes · " + sp.label,
            coolWord: String(line.coolWord || "").trim(),
            phrase: String(line.phrase || line.coolWord || "").trim(),
            hint: String(line.hint || "").trim(),
            contextSentence: String(line.contextSentence || line.phrase || "").trim(),
            stickyAnswer: String(line.stickyAnswer || "").trim()
          });
        });
      });
    }
    function pushLinePack(pack, packLabel, lines) {
      if (!lines || !lines.length) return;
      lines.forEach(function (line, idx) {
        out.push({
          pack: pack,
          packLabel: packLabel,
          speakerId: pack,
          speakerName: packLabel,
          speakerFull: packLabel,
          topic: packLabel + " · " + (idx + 1),
          coolWord: String(line.coolWord || line.phrase || "").trim(),
          phrase: String(line.phrase || line.coolWord || "").trim(),
          hint: String(line.hint || "").trim(),
          contextSentence: String(line.contextSentence || line.phrase || "").trim(),
          stickyAnswer: String(line.stickyAnswer || line.coolWord || "").trim()
        });
      });
    }
    var getLex = W.FCE_U1_GET_LEXIS;
    var runLex = W.FCE_U1_RUN_LEXIS;
    if (getLex && getLex.lines) pushLinePack("get", "Get", getLex.lines);
    if (runLex && runLex.lines) pushLinePack("run", "Run", runLex.lines);
    return out;
  }

  function speakersForPack(pack, rows) {
    var seen = [];
    var names = [];
    rows.forEach(function (r) {
      if (r.pack !== pack) return;
      var key = r.speakerName;
      if (seen.indexOf(key) >= 0) return;
      seen.push(key);
      names.push(key);
    });
    return names;
  }

  function pickDistractors(pool, correct, need, keyFn) {
    keyFn =
      keyFn ||
      function (x) {
        return norm(x);
      };
    var ck = keyFn(correct);
    var candidates = [];
    var i;
    for (i = 0; i < pool.length; i++) {
      var v = pool[i];
      if (keyFn(v) === ck) continue;
      candidates.push(v);
    }
    shuffleInPlace(candidates);
    var out = [correct];
    for (i = 0; i < candidates.length && out.length < need + 1; i++) {
      if (out.indexOf(candidates[i]) >= 0) continue;
      out.push(candidates[i]);
    }
    while (out.length < need + 1) out.push("—");
    shuffleInPlace(out);
    var correctIdx = out.indexOf(correct);
    if (correctIdx < 0) correctIdx = 0;
    return { opts: out.slice(0, need + 1), correct: correctIdx };
  }

  function gapInSentence(ctx, gapText) {
    if (!ctx || !gapText) return null;
    var idx = ctx.toLowerCase().indexOf(gapText.toLowerCase());
    if (idx >= 0) {
      return (
        ctx.slice(0, idx) +
        "_______" +
        ctx.slice(idx + gapText.length)
      );
    }
    var probes = [gapText];
    var words = gapText.split(/\s+/);
    if (words.length > 3) {
      probes.push(words.slice(0, 3).join(" "));
      probes.push(words.slice(-3).join(" "));
    }
    var pi;
    for (pi = 0; pi < probes.length; pi++) {
      idx = ctx.toLowerCase().indexOf(probes[pi].toLowerCase());
      if (idx >= 0) {
        return (
          ctx.slice(0, idx) +
          "_______" +
          ctx.slice(idx + probes[pi].length)
        );
      }
    }
    return null;
  }

  function buildGaps(rows) {
    var phrasePool = rows.map(function (r) {
      return r.stickyAnswer || r.coolWord;
    });
    var out = [];
    rows.forEach(function (row) {
      var gapText = row.stickyAnswer || row.coolWord;
      var sent = gapInSentence(row.contextSentence, gapText);
      if (!sent) return;
      var samePack = rows.filter(function (r) {
        return r.pack === row.pack;
      });
      var distrPool = samePack.map(function (r) {
        return r.stickyAnswer || r.coolWord;
      });
      var built = pickDistractors(distrPool, gapText, 3, norm);
      out.push({
        topic: row.topic,
        pack: row.pack,
        speakerId: row.speakerId,
        lead: row.packLabel + " · " + row.speakerName,
        gap: sent,
        opts: built.opts,
        correct: built.correct,
        contextSentence: row.contextSentence
      });
    });
    return out;
  }

  function highlightQuote(ctx, focus) {
    var raw = String(ctx || "");
    var f = String(focus || "").trim();
    if (!raw) return "";
    var idx = raw.toLowerCase().indexOf(f.toLowerCase());
    if (idx < 0) {
      var p = String(f.split(/\s+/).slice(0, 4).join(" "));
      idx = raw.toLowerCase().indexOf(p.toLowerCase());
      if (idx >= 0) f = raw.slice(idx, idx + p.length);
    }
    if (idx < 0) return escHtml(raw);
    return (
      escHtml(raw.slice(0, idx)) +
      "<strong>" +
      escHtml(raw.slice(idx, idx + f.length)) +
      "</strong>" +
      escHtml(raw.slice(idx + f.length))
    );
  }

  function buildParaphrase(rows) {
    var hintPool = rows.map(function (r) {
      return r.hint;
    });
    var out = [];
    rows.forEach(function (row) {
      if (!row.hint) return;
      var focus = row.stickyAnswer || row.coolWord;
      var built = pickDistractors(hintPool, row.hint, 3, norm);
      out.push({
        topic: row.topic,
        pack: row.pack,
        speakerId: row.speakerId,
        quote: highlightQuote(row.contextSentence, focus),
        focus: focus,
        prompt: "The highlighted phrase is closest in meaning to:",
        opts: built.opts,
        correct: built.correct,
        contextSentence: row.contextSentence
      });
    });
    return out;
  }

  function buildFacts(rows) {
    var out = [];
    var lifeNames = speakersForPack("lifestyle", rows);
    var clothNames = speakersForPack("clothes", rows);

    var lifeBio = [
      {
        topic: "Lifestyle · Lucas",
        q: "Who is an actor who often gets up around midday?",
        correctName: "Lucas"
      },
      {
        topic: "Lifestyle · Maja",
        q: "Who works as a ski instructor and lives near the slopes?",
        correctName: "Maja"
      },
      {
        topic: "Lifestyle · Reo",
        q: "Who is a vet visiting farms?",
        correctName: "Reo"
      },
      {
        topic: "Lifestyle · Ben",
        q: "Who has climbed Everest three times?",
        correctName: "Ben"
      }
    ];
    lifeBio.forEach(function (item) {
      var built = pickDistractors(lifeNames, item.correctName, 3);
      out.push({
        topic: item.topic,
        pack: "lifestyle",
        speakerId: item.correctName.toLowerCase(),
        q: item.q,
        opts: built.opts,
        correct: built.correct
      });
    });

    var clothBio = [
      {
        topic: "Clothes · Speaker 1",
        q: "Who buys most clothes from charity shops?",
        correctName: "Speaker 1"
      },
      {
        topic: "Clothes · Speaker 2",
        q: "Who throws on the first thing they find in the wardrobe?",
        correctName: "Speaker 2"
      },
      {
        topic: "Clothes · Speaker 3",
        q: "Who only buys from companies that sell ethical clothing?",
        correctName: "Speaker 3"
      },
      {
        topic: "Clothes · Speaker 4",
        q: "Who never wears the same outfit more than once in the same month?",
        correctName: "Speaker 4"
      },
      {
        topic: "Clothes · Speaker 5",
        q: "Who gets rid of an old T-shirt before buying a new one?",
        correctName: "Speaker 5"
      }
    ];
    clothBio.forEach(function (item) {
      var built = pickDistractors(clothNames, item.correctName, 3);
      out.push({
        topic: item.topic,
        pack: "clothes",
        speakerId: "sp" + item.correctName.replace(/\D/g, ""),
        q: item.q,
        opts: built.opts,
        correct: built.correct
      });
    });

    rows.forEach(function (row) {
      if (row.pack !== "lifestyle" && row.pack !== "clothes") return;
      var names = row.pack === "lifestyle" ? lifeNames : clothNames;
      var snippet = row.coolWord;
      if (snippet.length > 58) snippet = snippet.slice(0, 55) + "…";
      var built = pickDistractors(names, row.speakerName, 3);
      out.push({
        topic: row.topic,
        pack: row.pack,
        speakerId: row.speakerId,
        q: "Who is the speaker of the phrase «" + snippet + "»?",
        opts: built.opts,
        correct: built.correct
      });
    });

    function buildPhraseMeaningFacts(packRows, pack, label) {
      var pool = packRows.map(function (r) {
        return r.coolWord;
      });
      packRows.forEach(function (row) {
        if (!row.hint) return;
        var built = pickDistractors(pool, row.coolWord, 3, norm);
        out.push({
          topic: row.topic,
          pack: pack,
          speakerId: row.speakerId,
          q: "Which " + label + " phrase means: «" + row.hint + "»?",
          opts: built.opts,
          correct: built.correct
        });
      });
    }

    buildPhraseMeaningFacts(
      rows.filter(function (r) {
        return r.pack === "get";
      }),
      "get",
      "Get"
    );
    buildPhraseMeaningFacts(
      rows.filter(function (r) {
        return r.pack === "run";
      }),
      "run",
      "Run"
    );

    return out;
  }

  function pickFifteen(arr) {
    var copy = arr.slice();
    shuffleInPlace(copy);
    var n = Math.min(15, copy.length);
    return copy.slice(0, n);
  }

  function hintPassageForRow(row) {
    if (!row) return "";
    if (row.contextSentence && (row.pack === "get" || row.pack === "run")) {
      return row.contextSentence;
    }
    if (row.pack === "lifestyle" && W.U1_LIFESTYLE_RETELL_BLOCKS) {
      var map = { lucas: 0, maja: 1, reo: 2, ben: 3 };
      var ix = map[row.speakerId];
      if (ix != null && W.U1_LIFESTYLE_RETELL_BLOCKS[ix]) {
        return W.U1_LIFESTYLE_RETELL_BLOCKS[ix].passage;
      }
    }
    if (row.pack === "clothes" && W.U1_CLOTHES_RETELL_BLOCKS) {
      var n = parseInt(String(row.speakerId || "").replace(/\D/g, ""), 10);
      if (n >= 1 && W.U1_CLOTHES_RETELL_BLOCKS[n - 1]) {
        return W.U1_CLOTHES_RETELL_BLOCKS[n - 1].passage;
      }
    }
    return "";
  }

  W.U1_hintPassageForQuestion = function (qu) {
    if (qu && qu.hintPassage) return qu.hintPassage;
    return hintPassageForRow(qu);
  };

  W.U1_pickMillionaireRound = function (bank) {
    return pickFifteen(bank || []);
  };

  W.U1_filterMillionaireBank = function (bank, pack) {
    if (!bank || !bank.length) return [];
    if (!pack || pack === "all") return bank.slice();
    return bank.filter(function (qu) {
      return qu.pack === pack;
    });
  };

  W.U1_MILLIONAIRE_PACK_LABELS = {
    all: "All decks",
    lifestyle: "Lifestyle",
    clothes: "Clothes",
    get: "Get",
    run: "Run"
  };

  var ROWS = collectRows();
  W.U1_MILLIONAIRE_ROWS = ROWS;
  W.U1_MILLIONAIRE_FACTS = buildFacts(ROWS);
  W.U1_MILLIONAIRE_GAPS = buildGaps(ROWS);
  W.U1_MILLIONAIRE_PARAPHRASE = buildParaphrase(ROWS);
})(typeof window !== "undefined" ? window : globalThis);
