/**
 * CPE Prep Playground (Unit 10) opens confronting-* engines with ?course=cpe.
 * Those pages stay in unit11-reading-confronting-issues/ as shared shells;
 * when PREP_U10_PG_CPE is true, inline data is replaced with neutral stubs.
 */
(function (W) {
  "use strict";
  try {
    var q = new URLSearchParams(W.location.search || "");
    W.PREP_U10_PG_CPE = q.get("course") === "cpe";
  } catch (e) {
    W.PREP_U10_PG_CPE = false;
  }

  var line =
    "CPE Prep · placeholder — replace with your Unit 10 content module.";
  var phrase = "CPE Prep · add phrases in your content file.";

  function getWordBankRows() {
    if (!Array.isArray(W.VOCAB_TTT_WORDS) || !W.VOCAB_TTT_WORDS.length) return [];
    return W.VOCAB_TTT_WORDS.filter(function (row) {
      return row && typeof row.phrase === "string" && row.phrase.trim();
    });
  }

  function dedupePhrases(rows) {
    var seen = Object.create(null);
    var out = [];
    var i;
    for (i = 0; i < rows.length; i++) {
      var p = String(rows[i].phrase || "").trim();
      if (!p) continue;
      var k = p.toLowerCase();
      if (seen[k]) continue;
      seen[k] = 1;
      out.push(p);
    }
    return out;
  }

  function topicLabelMap() {
    var map = Object.create(null);
    var list = Array.isArray(W.VOCAB_TTT_TOPIC_LIST) ? W.VOCAB_TTT_TOPIC_LIST : [];
    var i;
    for (i = 0; i < list.length; i++) {
      if (!list[i] || !list[i].id) continue;
      map[list[i].id] = list[i].label || list[i].id;
    }
    return map;
  }

  function makeDeckFromWordBank(limit) {
    var rows = getWordBankRows();
    if (!rows.length) return [];
    return dedupePhrases(rows).slice(0, limit || 23);
  }

  function buildHundredRoundsFromWordBank() {
    var rows = getWordBankRows();
    if (!rows.length) return [];
    var labelByTopic = topicLabelMap();
    var grouped = Object.create(null);
    var order = [];
    var i;
    for (i = 0; i < rows.length; i++) {
      var t = rows[i].topic || "u10_misc";
      if (!grouped[t]) {
        grouped[t] = [];
        order.push(t);
      }
      grouped[t].push(rows[i]);
    }

    var rounds = [];
    var pts = [100, 80, 60, 40, 20];
    var promptByTopic = {
      u10_p4: "Listening focus: pick chunks that best capture each speaker's point of view or reaction.",
      u10_books: "Books & films focus: pick the strongest evaluative phrases a reviewer would actually use.",
      u10_shakespeare: "Use of English focus: pick chunks that best fit transformation/paraphrase logic.",
      u10_similes: "Similes focus: pick the most vivid fixed expressions suitable for CPE writing/speaking."
    };
    for (i = 0; i < order.length && rounds.length < 4; i++) {
      var topicId = order[i];
      var topicRows = grouped[topicId];
      var boardPhrases = dedupePhrases(topicRows).slice(0, 5);
      if (!boardPhrases.length) continue;
      while (boardPhrases.length < 5) boardPhrases.push(boardPhrases[boardPhrases.length - 1]);

      var decoyPool = [];
      var j;
      for (j = 0; j < order.length; j++) {
        if (order[j] === topicId) continue;
        decoyPool = decoyPool.concat(grouped[order[j]]);
      }
      var decoys = dedupePhrases(decoyPool).slice(0, 6);
      if (!decoys.length) decoys = dedupePhrases(topicRows).slice(0, 6);

      rounds.push({
        topic: (labelByTopic[topicId] || topicId) + " · Unit 10 word bank",
        q: promptByTopic[topicId] || "Pick the strongest lexical chunks from this Unit 10 pack.",
        hint: "",
        board: boardPhrases.map(function (t, idx) {
          return { t: t, pts: pts[idx] || 20 };
        }),
        decoys: decoys
      });
    }
    return rounds;
  }

  function randomPick(arr) {
    if (!arr || !arr.length) return "";
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function buildSquidRedFromWordBank() {
    var rows = getWordBankRows();
    if (!rows.length) return { good: [], bad: [] };
    var good = dedupePhrases(rows).slice(0, 24);
    var badPool = [];
    var i;
    for (i = 0; i < rows.length; i++) {
      var r = rows[i];
      var h = String(r.hint || "").trim();
      if (!h) continue;
      badPool.push(h);
    }
    var bad = dedupePhrases(badPool.map(function (x) { return { phrase: x }; })).slice(0, 24);
    if (!bad.length) {
      for (i = 0; i < good.length; i++) bad.push("decoy: " + good[i].split(" ").slice(0, 3).join(" "));
    }
    return { good: good, bad: bad };
  }

  function buildSquidGlassStepsFromWordBank() {
    var rows = getWordBankRows();
    if (!rows.length) return [];
    var labelByTopic = topicLabelMap();
    var steps = [];
    var i;
    for (i = 0; i < rows.length && steps.length < 12; i++) {
      var row = rows[i];
      var good = String(row.phrase || "").trim();
      var hint = String(row.hint || "").trim();
      if (!good || !hint) continue;
      var other = rows[(i + 3) % rows.length];
      var bad = String(other && other.phrase || "").trim();
      if (!bad || bad.toLowerCase() === good.toLowerCase()) continue;
      steps.push({
        text: (labelByTopic[row.topic] || row.topic || "Unit 10") + ": " + hint,
        good: good,
        bad: bad,
        source: ""
      });
    }
    return steps;
  }

  function buildWeakestPoolFromWordBank() {
    var rows = getWordBankRows();
    if (!rows.length) return [];
    var labelByTopic = topicLabelMap();
    var out = [];
    var i;
    for (i = 0; i < rows.length && out.length < 24; i++) {
      var row = rows[i];
      var ans = String(row.phrase || "").trim();
      var hint = String(row.hint || "").trim();
      if (!ans || !hint) continue;
      var distract = [];
      var j;
      for (j = 0; j < rows.length && distract.length < 3; j++) {
        if (j === i) continue;
        var cand = String(rows[j].phrase || "").trim();
        if (!cand || cand.toLowerCase() === ans.toLowerCase()) continue;
        if (distract.indexOf(cand) !== -1) continue;
        distract.push(cand);
      }
      if (distract.length < 3) continue;
      var opts = [ans].concat(distract);
      for (j = opts.length - 1; j > 0; j--) {
        var k = Math.floor(Math.random() * (j + 1));
        var t = opts[j]; opts[j] = opts[k]; opts[k] = t;
      }
      out.push({
        t: (labelByTopic[row.topic] || row.topic || "?").replace(/\s*·.*/, ""),
        topicId: row.topic || "u10_misc",
        q: "Pick the best phrase for this clue: " + hint,
        o: opts,
        a: opts.indexOf(ans)
      });
    }
    return out;
  }

  var SQ = buildSquidRedFromWordBank();
  var GLASS = buildSquidGlassStepsFromWordBank();
  var WEAKEST = buildWeakestPoolFromWordBank();

  W.PREP_U10_PG_STUB = {
    phrasesDeckMustKnow: function () {
      var deck = makeDeckFromWordBank(23);
      if (deck.length) return deck;
      var x = [];
      var i;
      for (i = 1; i <= 8; i++) {
        x.push("CPE Prep stub phrase " + i + " — replace in your content module.");
      }
      return x;
    },

    phrasesOneLine: function () {
      var deck = makeDeckFromWordBank(8);
      if (deck.length) return deck;
      return [phrase];
    },

    millionaireFacts: [
      {
        topic: "CPE Prep · шаблон",
        q: "Подключите массив вопросов в модуле контента для этого режима (факты).",
        opts: ["Пример A", "Пример B", "Пример C", "Пример D"],
        correct: 0
      }
    ],

    millionaireGaps: [
      {
        topic: "CPE Prep · шаблон",
        lead: "Template:",
        gap: "Complete the _______ with your gap item.",
        opts: ["option_a", "option_b", "option_c", "option_d"],
        correct: 0
      }
    ],

    millionaireParaphrase: [
      {
        topic: "CPE Prep · шаблон",
        quote:
          "Replace this <strong>sample collocation</strong> with material from your unit.",
        focus: "sample collocation",
        prompt: "Which option is closest in meaning to the bold part?",
        opts: [
          "Unrelated wording.",
          "A paraphrase that matches the bold meaning.",
          "The opposite idea.",
          "A random filler."
        ],
        correct: 1
      }
    ],

    hundredToOneRounds: function () {
      var rounds = buildHundredRoundsFromWordBank();
      if (rounds.length) return rounds;
      function stubRound(k) {
        return {
          topic: "CPE · round " + k,
          q: "Host-style prompt — plug in top answers from your texts.",
          hint: "",
          board: [
            { t: "Top answer (100)", pts: 100 },
            { t: "Second (80)", pts: 80 },
            { t: "Third (60)", pts: 60 },
            { t: "Fourth (40)", pts: 40 },
            { t: "Fifth (20)", pts: 20 }
          ],
          decoys: ["Decoy A", "Decoy B", "Decoy C", "Decoy D"]
        };
      }
      return [stubRound(1), stubRound(2), stubRound(3), stubRound(4)];
    },

    squidRedGood: SQ.good.length ? SQ.good : ["CPE term ✓ (green)", "Another valid item", "Third valid"],
    squidRedBad: SQ.bad.length ? SQ.bad : ["CPE decoy ✗ (red)", "Fake distractor two", "Nonsense distractor"],

    squidGlassSteps: GLASS.length ? GLASS : [
      {
        text: "CPE stub: pick the word that fits your material",
        good: "good_pick",
        bad: "wrong_pick",
        source: ""
      },
      {
        text: "CPE stub step 2",
        good: "yes",
        bad: "no",
        source: ""
      },
      {
        text: "CPE stub step 3",
        good: "correct",
        bad: "incorrect",
        source: ""
      }
    ],

    weakestPool: WEAKEST.length ? WEAKEST : [
      { t: "?", q: "CPE stub: replace POOL in weakest-link engine.", o: ["A", "B", "C", "D"], a: 0 },
      { t: "?", q: "Stub question 2 — add real MCQs for your class.", o: ["A", "B", "C", "D"], a: 1 },
      { t: "?", q: "Stub question 3.", o: ["A", "B", "C", "D"], a: 2 },
      { t: "?", q: "Stub question 4.", o: ["A", "B", "C", "D"], a: 3 },
      { t: "?", q: "Stub question 5.", o: ["A", "B", "C", "D"], a: 0 },
      { t: "?", q: "Stub question 6.", o: ["A", "B", "C", "D"], a: 1 }
    ],

    dominoSentenceCards: [
      { id: "CPE-A1", t: 1, s: "CPE stub sentence A (1).", title: "A" },
      { id: "CPE-A2", t: 1, s: "CPE stub sentence A (2).", title: "A" },
      { id: "CPE-B1", t: 2, s: "CPE stub sentence B (1).", title: "B" },
      { id: "CPE-B2", t: 2, s: "CPE stub sentence B (2).", title: "B" },
      { id: "CPE-C1", t: 3, s: "CPE stub sentence C (1).", title: "C" },
      { id: "CPE-C2", t: 3, s: "CPE stub sentence C (2).", title: "C" },
      { id: "CPE-D1", t: 4, s: "CPE stub sentence D (1).", title: "D" },
      { id: "CPE-D2", t: 4, s: "CPE stub sentence D (2).", title: "D" }
    ],

    ecoUnoDeck: function () {
      var kinds = ["problem", "solution", "action", "impact"];
      var out = [];
      var id = 0;
      function n(t, kind, text) {
        return { id: "cpe-" + ++id, t: t, kind: kind, text: text, special: null };
      }
      function s(t, sp, label) {
        return { id: "cpe-s-" + ++id, t: t, kind: "special", text: label, special: sp };
      }
      function wild(wid) {
        return { id: wid, t: 0, kind: "special", text: "Global Innovation (choose theme)", special: "wild" };
      }
      var ti;
      for (ti = 1; ti <= 4; ti++) {
        var ki;
        for (ki = 0; ki < kinds.length; ki++) {
          out.push(n(ti, kinds[ki], "CPE phrase · theme " + ti + " · " + kinds[ki]));
        }
      }
      for (ti = 1; ti <= 4; ti++) {
        out.push(s(ti, "draw2", "Eco-Crisis (+2)"));
        out.push(s(ti, "skip", "Natural Disaster (skip)"));
        out.push(s(ti, "reverse", "Renewable Energy (reverse)"));
      }
      out.push(wild("cpe-W1"), wild("cpe-W2"), wild("cpe-W3"), wild("cpe-W4"));
      return out;
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
