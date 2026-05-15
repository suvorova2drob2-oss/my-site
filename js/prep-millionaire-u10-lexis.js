/**
 * Unit 10 Millionaire engine:
 * · Facts — passage/audio comprehension (U10_MILLIONAIRE_FACTS)
 * · Gaps — cloze from real plain texts using TARGET phrases in VOCAB_TTT_WORDS
 * · Paraphrase — definition-style MCQ (U10_MILLIONAIRE_PARAPHRASE_QUIZ), no sentence blanks
 *
 * Depends on: unit10-ttt-word-bank.js, unit10-millionaire-passage-data.js
 */
(function (W) {
  "use strict";

  function normPhrase(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[^\w\s']/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function shuffleInPlace(arr) {
    var i = arr.length;
    while (i > 1) {
      var j = Math.floor(Math.random() * i);
      i--;
      var t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    return arr;
  }

  function topicLabel(topicId) {
    var list = W.VOCAB_TTT_TOPIC_LIST || [];
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].id === topicId) return list[i].label;
    }
    return topicId || "Unit 10";
  }

  /** topicIds: null = all packs; [] = none */
  function filterFacts(topicIds) {
    var all = W.U10_MILLIONAIRE_FACTS || [];
    if (topicIds === null) return all.slice();
    if (!topicIds || !topicIds.length) return [];
    return all.filter(function (row) {
      return topicIds.indexOf(row.topicId) !== -1;
    });
  }

  function filterParaphrase(topicIds) {
    var all = W.U10_MILLIONAIRE_PARAPHRASE_QUIZ || W.U10_MILLIONAIRE_SYNONYM_QUIZ || [];
    if (topicIds === null) return all.slice();
    if (!topicIds || !topicIds.length) return [];
    return all.filter(function (row) {
      return topicIds.indexOf(row.topicId) !== -1;
    });
  }

  function plainForTopic(topicId) {
    switch (topicId) {
      case "u10_p4":
        return String(W.U10_P4_LEXIS_PLAIN || "");
      case "u10_books":
        return String(W.U10_BOOKS_FILMS_LEXIS_PLAIN || "");
      case "u10_shakespeare":
        return String(W.U10_UOE_SHAKESPEARE_LEXIS_PLAIN || "");
      case "u10_similes":
        return String(W.U10_SIMILES_LEXIS_PLAIN || "");
      default:
        return "";
    }
  }

  /**
   * Full passage for Facts · Text panel: one Listening monologue (speakerIndex 0–4) or entire plain text for other packs.
   */
  W.u10MillionaireFactFullPassage = function (topicId, speakerIndex) {
    if (topicId === "u10_p4") {
      var paras = W.U10_P4_WB_TRANSCRIPT_PARAS;
      if (paras && paras.length && typeof speakerIndex === "number" && speakerIndex >= 0 && speakerIndex < paras.length) {
        return paras[speakerIndex];
      }
      return paras && paras.length ? paras.join("\n\n") : "";
    }
    if (topicId === "u10_books") {
      var bk = W.U10_BOOKS_FILMS_REVIEW_PARAS;
      if (bk && bk.length) return bk.join("\n\n");
    }
    return plainForTopic(topicId);
  };

  function findSentenceWithPhrase(plain, phrase) {
    if (!plain || !phrase) return "";
    var idx = plain.indexOf(phrase);
    if (idx < 0) return "";
    var before = plain.slice(0, idx);
    var startBoundary = Math.max(before.lastIndexOf(". "), before.lastIndexOf("? "), before.lastIndexOf("! "));
    var start = startBoundary >= 0 ? startBoundary + 2 : 0;
    var rest = plain.slice(start);
    var rel = idx - start;
    var afterFrag = rest.slice(rel + phrase.length);
    var endM = afterFrag.search(/\.\s|[!?]\s/);
    var endPos = endM < 0 ? rest.length : rel + phrase.length + endM + 1;
    var sent = rest.slice(0, endPos).trim();
    return sent;
  }

  function pickDistractorPhrases(pool, correctPhrase, need, topicPrefer) {
    var pk = normPhrase(correctPhrase);
    var same = [];
    var other = [];
    var i;
    for (i = 0; i < pool.length; i++) {
      var ph = pool[i].phrase;
      if (normPhrase(ph) === pk) continue;
      if (pool[i].topic === topicPrefer) same.push(ph);
      else other.push(ph);
    }
    shuffleInPlace(same);
    shuffleInPlace(other);
    var merged = same.concat(other);
    var out = [];
    var seen = {};
    seen[pk] = true;
    for (i = 0; i < merged.length && out.length < need; i++) {
      var k = normPhrase(merged[i]);
      if (seen[k]) continue;
      seen[k] = true;
      out.push(merged[i]);
    }
    var full = W.VOCAB_TTT_WORDS || [];
    if (out.length < need) {
      for (i = 0; i < full.length && out.length < need; i++) {
        var ph2 = full[i].phrase;
        var k2 = normPhrase(ph2);
        if (seen[k2]) continue;
        seen[k2] = true;
        out.push(ph2);
      }
    }
    while (out.length < need) out.push("—");
    return out.slice(0, need);
  }

  function finalizeOpts(correctPhrase, distractorStrings) {
    var opts = [correctPhrase].concat(distractorStrings.slice(0, 3));
    shuffleInPlace(opts);
    var nk = normPhrase(correctPhrase);
    var correctIdx = 0;
    var j;
    for (j = 0; j < opts.length; j++) {
      if (normPhrase(opts[j]) === nk) correctIdx = j;
    }
    return { opts: opts, correct: correctIdx };
  }

  function fillRoundRobin(pool, n) {
    var bag = [];
    if (!pool || !pool.length) return bag;
    while (bag.length < n) {
      var chunk = pool.slice();
      shuffleInPlace(chunk);
      var k;
      for (k = 0; k < chunk.length && bag.length < n; k++) bag.push(chunk[k]);
    }
    return bag.slice(0, n);
  }

  function filterLexWords(topicIds) {
    var words = W.VOCAB_TTT_WORDS || [];
    if (topicIds === null) return words.slice();
    if (!topicIds || !topicIds.length) return [];
    return words.filter(function (w) {
      return w.topic && topicIds.indexOf(w.topic) !== -1;
    });
  }

  /**
   * Facts deck · returns shape { topic, topicId, q, opts, correct, kind:'facts', factSpeakerIndex }
   */
  W.buildU10MillionaireFacts = function (topicIds) {
    var rows = filterFacts(topicIds);
    shuffleInPlace(rows);
    var picks = fillRoundRobin(rows, 15);
    return picks.map(function (r) {
      var si = typeof r.speakerIndex === "number" ? r.speakerIndex : null;
      return {
        topic: topicLabel(r.topicId),
        topicId: r.topicId,
        q: r.q,
        opts: r.opts.slice(),
        correct: r.correct,
        kind: "facts",
        factSpeakerIndex: si
      };
    });
  };

  /**
   * Gaps from real passages · { topic, lead, gap, opts, correct, kind:'gaps' }
   */
  W.buildU10MillionaireGapsFromPassages = function (topicIds) {
    if (topicIds !== null && (!topicIds || !topicIds.length)) return [];
    var pool = filterLexWords(topicIds);
    var used = {};
    var out = [];
    var guard = 0;
    while (out.length < 15 && guard < 400 && pool.length) {
      guard++;
      shuffleInPlace(pool);
      var j;
      for (j = 0; j < pool.length && out.length < 15; j++) {
        var w = pool[j];
        var plain = plainForTopic(w.topic);
        if (!plain || plain.indexOf(w.phrase) < 0) continue;
        var sent = findSentenceWithPhrase(plain, w.phrase);
        if (!sent || sent.indexOf(w.phrase) < 0) continue;
        var gapSent = sent.split(w.phrase).join("_______");
        if (gapSent.indexOf("_______") < 0) continue;
        var key = normPhrase(w.phrase) + "|" + normPhrase(gapSent.slice(0, 48));
        if (used[key]) continue;
        used[key] = true;
        var distr = pickDistractorPhrases(pool, w.phrase, 3, w.topic);
        var mc = finalizeOpts(w.phrase, distr);
        out.push({
          topic: topicLabel(w.topic),
          lead: "From Unit 10 text:",
          gap: gapSent,
          opts: mc.opts,
          correct: mc.correct,
          lexHint: w.hint,
          lexPhrase: w.phrase,
          kind: "gaps"
        });
      }
    }
    return out;
  };

  /**
   * Paraphrase round · { topic, topicId, q, opts, correct, target, kind:'paraphrase' }
   */
  W.buildU10MillionaireParaphrase = function (topicIds) {
    var rows = filterParaphrase(topicIds);
    shuffleInPlace(rows);
    var picks = fillRoundRobin(rows, 15);
    return picks.map(function (r) {
      return {
        topic: topicLabel(r.topicId),
        topicId: r.topicId,
        q: r.definition,
        opts: r.opts.slice(),
        correct: r.correct,
        target: r.target,
        kind: "paraphrase"
      };
    });
  };

  /** @deprecated Use buildU10MillionaireParaphrase */
  W.buildU10MillionaireSynonyms = W.buildU10MillionaireParaphrase;

  /** Min questions to enable a tab */
  W.U10_MILLIONAIRE_MIN_TAB = 3;

  W.countU10MillionaireFacts = function (topicIds) {
    return filterFacts(topicIds).length;
  };

  W.countU10MillionaireParaphrase = function (topicIds) {
    return filterParaphrase(topicIds).length;
  };

  /** @deprecated Use countU10MillionaireParaphrase */
  W.countU10MillionaireSynonyms = W.countU10MillionaireParaphrase;

  W.countU10MillionaireGapsFeasible = function (topicIds) {
    if (topicIds !== null && (!topicIds || !topicIds.length)) return 0;
    var pool = filterLexWords(topicIds);
    var n = 0;
    var i;
    for (i = 0; i < pool.length; i++) {
      var plain = plainForTopic(pool[i].topic);
      if (plain && plain.indexOf(pool[i].phrase) >= 0) n++;
    }
    return n;
  };
})(typeof window !== "undefined" ? window : globalThis);
