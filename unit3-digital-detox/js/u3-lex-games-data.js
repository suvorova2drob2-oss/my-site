/**
 * Build pooled tasks for U3 My digital detox lexical games.
 * Expects: U3_DIGITAL_DETOX_*, U3_MEMORY_PAIR_ROWS, U3_DIGITAL_DETOX_PASSAGE_PLAIN (loaded first).
 */
(function (G) {
  "use strict";
  G = typeof globalThis !== "undefined" ? globalThis : G;
  if (!G) G = window;

  function decodeEntities(s) {
    if (!s) return "";
    var t = String(s);
    t = t.replace(/&nbsp;/gi, " ");
    t = t.replace(/&larr;|&rarr;|&mdash;|&ndash;/gi, " ");
    t = t.replace(/&[a-z]+;/gi, " ");
    var d = G.document;
    if (d && d.createElement) {
      var el = d.createElement("textarea");
      el.innerHTML = t.replace(/</g, "");
      t = el.value;
    }
    return t;
  }

  function normFind(s) {
    return String(s || "")
      .replace(/\s+/g, " ")
      .replace(/\u2019|\u2018|\u201B/g, "'")
      .replace(/\u2013|\u2014/g, "-")
      .trim();
  }

  function findAnsSpan(pRaw, ans) {
    if (!pRaw || !ans) return null;
    var t = normFind(ans).toLowerCase();
    var d;
    var n;
    var i;
    var slice;
    for (d = -4; d <= 8; d++) {
      n = ans.length + d;
      if (n < 1) continue;
      for (i = 0; i + n <= pRaw.length; i++) {
        slice = pRaw.slice(i, i + n);
        if (normFind(slice).toLowerCase() === t) {
          return { start: i, len: n };
        }
      }
    }
    return null;
  }

  function sentenceStart(pRaw, idx) {
    var i;
    for (i = idx - 1; i >= 0; i--) {
      var c = pRaw.charAt(i);
      if (c === "." || c === "?" || c === "!") {
        var j = i + 1;
        while (j < pRaw.length && /\s/.test(pRaw.charAt(j))) {
          j++;
        }
        if (j <= idx) {
          return j;
        }
      }
    }
    return 0;
  }

  function sentenceEnd(pRaw, end) {
    if (end > 0) {
      var prev = pRaw.charAt(end - 1);
      if (prev === "." || prev === "?" || prev === "!") {
        return end;
      }
    }
    var i;
    for (i = end; i < pRaw.length; i++) {
      var c2 = pRaw.charAt(i);
      if (c2 === "." || c2 === "?" || c2 === "!") {
        return i + 1;
      }
    }
    return pRaw.length;
  }

  var GAP = " ____ ";

  function buildGapLine(pRaw, ans) {
    if (!pRaw || !ans) {
      return "…" + GAP + "…";
    }
    var direct = pRaw.indexOf(ans);
    var span = direct >= 0 ? { start: direct, len: ans.length } : findAnsSpan(pRaw, ans);
    if (!span) {
      return "…" + GAP + "…";
    }
    var idx = span.start;
    var end = span.start + span.len;
    var sentStart = sentenceStart(pRaw, idx);
    var sentEnd = sentenceEnd(pRaw, end);
    if (sentStart > idx) {
      sentStart = 0;
    }
    if (sentEnd < end) {
      sentEnd = pRaw.length;
    }
    var before = pRaw.slice(sentStart, idx).replace(/\s+/g, " ").trim();
    var after = pRaw.slice(end, sentEnd).replace(/\s+/g, " ").trim();
    return before + GAP + after;
  }

  function contextSnip(pRaw, ans) {
    var sp = pRaw.indexOf(ans) >= 0 ? { start: pRaw.indexOf(ans), len: ans.length } : findAnsSpan(pRaw, ans);
    if (!sp) {
      return "";
    }
    var a = Math.max(0, sp.start - 60);
    var b = Math.min(pRaw.length, sp.start + sp.len + 60);
    return "…" + pRaw.slice(a, b).replace(/\s+/g, " ").trim() + "…";
  }

  function cleanPassage(raw) {
    var t = decodeEntities(raw);
    t = t.replace(/Text \d+ - MY DIGITAL DETOX \([^)]+\)/gi, " ");
    t = t.replace(/Dot-underlined chunks:[\s\S]*?MY DIGITAL DETOX/gi, "MY DIGITAL DETOX");
    t = t.replace(/Unit 3 - My digital detox \(Text \d\)[\s\S]*?MY DIGITAL DETOX/gi, " MY DIGITAL DETOX");
    t = t.replace(/Tip: on a phone[\s\S]*?(?=MY DIGITAL DETOX|According to|My newly|But as we|In planning|The result was|By the end)/gi, " ");
    t = t.replace(/&[lg]aquo;?[\s\S]*?Digital detox/gi, " ");
    t = t.replace(/\s+/g, " ").trim();
    return t;
  }

  var byPart = G.U3_DIGITAL_DETOX_BY_PART;
  var phrasesFlat = G.U3_DIGITAL_DETOX_PHRASES;
  var passageRaw = G.U3_DIGITAL_DETOX_PASSAGE_PLAIN;
  if (!phrasesFlat || !passageRaw) {
    G.U3_LG = { items: [], passagePlain: "", speaker: "Reading: My digital detox", roundSize: 10, clearCap: 10, glossByPhrase: {} };
    return;
  }

  var passage = cleanPassage(String(passageRaw));
  var speaker = G.U3_DIGITAL_DETOX_LEX_SPEAKER || "Reading: My digital detox";
  var glossByPhrase = {};
  var fullGloss = G.U3_DIGITAL_DETOX_GLOSS_BY_PHRASE;
  if (fullGloss && typeof fullGloss === "object") {
    for (var fg in fullGloss) {
      if (Object.prototype.hasOwnProperty.call(fullGloss, fg)) {
        glossByPhrase[normFind(fg).toLowerCase()] = fullGloss[fg];
      }
    }
  }
  var mem = G.U3_MEMORY_PAIR_ROWS;
  if (mem && mem.length) {
    for (var m = 0; m < mem.length; m++) {
      var row = mem[m];
      if (row && row.phrase) {
        glossByPhrase[normFind(row.phrase).toLowerCase()] = row.gloss;
      }
    }
  }

  function partKeyForPhrase(phrase) {
    if (!byPart) {
      return "part0";
    }
    for (var pk in byPart) {
      if (Object.prototype.hasOwnProperty.call(byPart, pk)) {
        var arr = byPart[pk];
        if (arr && arr.indexOf(phrase) >= 0) {
          return pk;
        }
      }
    }
    return "part0";
  }

  var items = [];
  for (var i = 0; i < phrasesFlat.length; i++) {
    var phrase = phrasesFlat[i];
    var gk = normFind(phrase).toLowerCase();
    var hint = glossByPhrase[gk] || "Key phrase from *My digital detox*.";
    var ft = buildGapLine(passage, phrase);
    var g = ft.indexOf(GAP);
    var before = "";
    var after = "";
    if (g !== -1) {
      before = ft.slice(0, g);
      after = ft.slice(g + GAP.length);
    }
    items.push({
      id: "u3dd_" + (i + 1),
      ans: phrase,
      syn: hint,
      fallText: ft,
      speaker: speaker,
      part: partKeyForPhrase(phrase),
      before: before,
      after: after,
      context: contextSnip(passage, phrase)
    });
  }

  G.U3_LG = {
    items: items,
    passagePlain: passage,
    speaker: speaker,
    roundSize: 10,
    clearCap: 10,
    glossByPhrase: glossByPhrase
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
