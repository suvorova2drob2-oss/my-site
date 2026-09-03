/**
 * Unit 1 · Alias / Pictionary deck — full book lines from Cool Words lexis.
 * Source of truth: FCE_U1_*_LEXIS (contextSentence), not Glass bridge gaps.
 */
(function (W) {
  "use strict";

  function aliasPhraseFromLine(line) {
    var ctx = String((line && line.contextSentence) || "").trim();
    var ph = String((line && line.phrase) || (line && line.coolWord) || "").trim();
    if (ctx) return ctx;
    return ph;
  }

  function pushLines(out, lines, pack, hint) {
    (lines || []).forEach(function (line) {
      var phrase = aliasPhraseFromLine(line);
      if (!phrase) return;
      var key = phrase.toLowerCase();
      if (out.seen[key]) return;
      out.seen[key] = true;
      out.list.push({
        phrase: phrase,
        pack: pack,
        topicId: pack,
        hint: hint || String((line && line.hint) || "").trim()
      });
    });
  }

  function buildAliasPhrases() {
    var out = { list: [], seen: Object.create(null) };

    var life = W.FCE_U1_LIFESTYLE_LEXIS;
    if (life && typeof life.allGameLines === "function") {
      pushLines(out, life.allGameLines(), "lifestyle", "");
    } else if (life && life.people) {
      life.people.forEach(function (person) {
        pushLines(out, person.lines, "lifestyle", person.label || "");
      });
    }

    var cloth = W.FCE_U1_CLOTHES_LEXIS;
    if (cloth && cloth.speakers) {
      cloth.speakers.forEach(function (sp) {
        pushLines(out, sp.lines, "clothes", sp.label || "");
      });
    }

    var getLex = W.FCE_U1_GET_LEXIS;
    if (getLex && getLex.lines) {
      pushLines(out, getLex.lines, "get", "Get phrases");
    }

    var runLex = W.FCE_U1_RUN_LEXIS;
    if (runLex && runLex.lines) {
      pushLines(out, runLex.lines, "run", "Run expressions");
    }

    return out.list;
  }

  W.U1_ALIAS_PHRASES = buildAliasPhrases();
})(typeof window !== "undefined" ? window : globalThis);
