/**
 * FCE Sound Booth word bank — decks per unit for Voice bingo / Echo Minute.
 * Lazy-build so Get/Run lexis loads first. Rows include meme img when matched.
 */
(function (W) {
  "use strict";

  var unit = Number(W.FCE_SOUND_BOOTH_UNIT) || 0;
  var COMBINED_ID = "all-themes";
  var built = null;

  function padRows(themeLabel, short, minCount) {
    minCount = minCount || 9;
    var out = [];
    var i;
    for (i = 1; i <= minCount; i++) {
      var n = i < 10 ? "0" + i : String(i);
      out.push({
        ans: "PLACEHOLDER · " + short + " · phrase " + n,
        match: "PLACEHOLDER · " + short + " · phrase " + n,
        hint:
          "Stub sense " +
          n +
          " — replace with a real gloss for " +
          themeLabel +
          "."
      });
    }
    return out;
  }

  function isPlaceholderRow(row) {
    var a = String((row && row.ans) || "");
    return /^PLACEHOLDER/i.test(a);
  }

  function enrichRow(themeId, row) {
    if (!row || isPlaceholderRow(row)) return row;
    if (row.img) return row;
    if (W.FCE_UNIT_MEMES && typeof W.FCE_UNIT_MEMES.findMemeImg === "function") {
      var probes = [row.ans, row.match, row.hint, row.contextSentence].filter(
        Boolean
      );
      var img = "";
      var pi;
      for (pi = 0; pi < probes.length; pi++) {
        img = W.FCE_UNIT_MEMES.findMemeImg(
          unit,
          themeId,
          probes[pi],
          row.match || row.ans
        );
        if (img) break;
      }
      if (img) return Object.assign({}, row, { img: img });
    }
    return row;
  }

  function rowsFromTheme(th, label, short) {
    var items = [];
    var themeId = (th && th.id) || "";
    var blocks = (th && th.blocks) || [];
    var b;
    for (b = 0; b < blocks.length; b++) {
      var blockItems = (blocks[b] && blocks[b].items) || [];
      var i;
      for (i = 0; i < blockItems.length; i++) {
        var it = blockItems[i];
        var cool = String((it && it.coolWord) || "").trim();
        var phrase = String((it && it.phrase) || (it && it.answer) || "").trim();
        var ans = cool || phrase;
        if (!ans || /^PLACEHOLDER/i.test(ans)) continue;
        var match = cool || phrase;
        items.push(
          enrichRow(themeId, {
            ans: ans,
            match: match,
            hint: String((it && it.hint) || "").trim() || ans,
            contextSentence: String((it && it.contextSentence) || "").trim()
          })
        );
      }
    }
    if (items.length >= 1 && !isPlaceholderRow(items[0])) return items;
    return padRows(label, short, 9);
  }

  function buildFromStubs() {
    var pack =
      W.FCE_UNIT_LEX_STUBS && typeof W.FCE_UNIT_LEX_STUBS.forUnit === "function"
        ? W.FCE_UNIT_LEX_STUBS.forUnit(unit)
        : null;
    var themes = (pack && pack.themes) || [];
    var defs = [];
    var byId = Object.create(null);
    var t;
    for (t = 0; t < themes.length; t++) {
      var th = themes[t];
      var id = th.id || "theme-" + t;
      var label = th.label || th.short || "Theme " + (t + 1);
      var short = th.short || label;
      var realRows = rowsFromTheme(th, label, short);
      var isStub = !realRows.length || isPlaceholderRow(realRows[0]);
      defs.push({
        id: id,
        title: label,
        tagline: isStub ? "Stub pack · send phrases" : "Cool Words · meme visuals",
        icon: t === 0 ? "📘" : t === 1 ? "📗" : t === 2 ? "📙" : "📕"
      });
      byId[id] = realRows;
    }
    if (!defs.length) {
      defs.push({
        id: "stub-a",
        title: "Stub theme A",
        tagline: "Stub pack",
        icon: "📘"
      });
      byId["stub-a"] = padRows("Stub theme A", "A", 9);
    }
    return { defs: defs, byId: byId };
  }

  function ensureBuilt() {
    if (!built) built = buildFromStubs();
    return built;
  }

  function lexRowsForTheme(themeId, mode) {
    mode = mode === "meme" ? "meme" : "paraphrase";
    if (
      mode === "meme" &&
      W.FCE_UNIT_MEMES &&
      typeof W.FCE_UNIT_MEMES.bingoRowsForTheme === "function"
    ) {
      var memeRows = W.FCE_UNIT_MEMES.bingoRowsForTheme(unit, themeId);
      if (memeRows.length) return memeRows;
    }
    var data = ensureBuilt();
    if (themeId === COMBINED_ID) {
      var merged = [];
      var k;
      var seen = Object.create(null);
      for (k = 0; k < data.defs.length; k++) {
        var tid = data.defs[k].id;
        var rows = (data.byId[tid] || []).slice();
        var i;
        for (i = 0; i < rows.length; i++) {
          var a = rows[i].ans;
          if (!a || seen[a]) continue;
          seen[a] = true;
          merged.push(enrichRow(tid, rows[i]));
        }
      }
      return merged;
    }
    return (data.byId[themeId] || []).map(function (r) {
      return enrichRow(themeId, r);
    });
  }

  function refresh() {
    built = null;
    ensureBuilt();
    W.FCE_SB_THEME_DEFINITIONS = built.defs;
  }

  ensureBuilt();

  W.FCE_SB_COMBINED_THEME_ID = COMBINED_ID;
  W.FCE_SB_THEME_DEFINITIONS = built.defs;
  W.FCE_SB_THEME_DEFINITIONS_COMBINED = {
    id: COMBINED_ID,
    title: unit === 1 ? "All themes (Unit 1)" : "All themes",
    tagline:
      unit === 1
        ? "Unit 1 · Lifestyle + Clothes + Get + Run"
        : "Unit " + unit + " · combined deck",
    icon: "✨"
  };
  W.FCE_SB_getLexRows = lexRowsForTheme;
  W.FCE_SB_getPhrases = function (themeId, mode) {
    return lexRowsForTheme(themeId, mode).map(function (r) {
      return r.ans;
    });
  };
  W.FCE_SB_refresh = refresh;
})(typeof window !== "undefined" ? window : globalThis);
