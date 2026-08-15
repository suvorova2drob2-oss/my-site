/**
 * FCE Sound Booth word bank — stub decks per unit for Voice bingo / Echo Minute.
 * Engines need { ans, hint } rows (≥9 for bingo, ≥5 for echo).
 * Depends on: fce-unit-lexical-stub-packs.js (theme names).
 */
(function (W) {
  "use strict";

  var unit = Number(W.FCE_SOUND_BOOTH_UNIT) || 0;
  var COMBINED_ID = "all-themes";

  function padRows(themeLabel, short, minCount) {
    minCount = minCount || 9;
    var out = [];
    var i;
    for (i = 1; i <= minCount; i++) {
      var n = i < 10 ? "0" + i : String(i);
      out.push({
        ans: "PLACEHOLDER · " + short + " · phrase " + n,
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

  function rowsFromTheme(th, label, short) {
    var items = [];
    var blocks = (th && th.blocks) || [];
    var b;
    for (b = 0; b < blocks.length; b++) {
      var blockItems = (blocks[b] && blocks[b].items) || [];
      var i;
      for (i = 0; i < blockItems.length; i++) {
        var it = blockItems[i];
        var ans =
          (it && (it.phrase || it.coolWord || it.answer)) ||
          "";
        ans = String(ans).trim();
        if (!ans || /^PLACEHOLDER/i.test(ans)) continue;
        items.push({
          ans: ans,
          hint: String((it && it.hint) || "").trim() || ans,
          contextSentence: String((it && it.contextSentence) || "").trim()
        });
      }
    }
    if (items.length >= 5) return items;
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
      var isStub = realRows.length && /^PLACEHOLDER/i.test(realRows[0].ans);
      defs.push({
        id: id,
        title: label,
        tagline: isStub ? "Stub pack · send phrases" : "Cool Words · full context",
        icon: t === 0 ? "📘" : t === 1 ? "📗" : "📙"
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

  var built = buildFromStubs();
  var DEFINITIONS = built.defs;
  var BY_ID = built.byId;

  function lexRowsForTheme(themeId) {
    if (themeId === COMBINED_ID) {
      var merged = [];
      var k;
      var seen = Object.create(null);
      for (k = 0; k < DEFINITIONS.length; k++) {
        var rows = BY_ID[DEFINITIONS[k].id] || [];
        var i;
        for (i = 0; i < rows.length; i++) {
          var a = rows[i].ans;
          if (!a || seen[a]) continue;
          seen[a] = true;
          merged.push(rows[i]);
        }
      }
      return merged;
    }
    return (BY_ID[themeId] || []).slice();
  }

  W.FCE_SB_COMBINED_THEME_ID = COMBINED_ID;
  W.FCE_SB_THEME_DEFINITIONS = DEFINITIONS;
  W.FCE_SB_THEME_DEFINITIONS_COMBINED = {
    id: COMBINED_ID,
    title: unit === 1 ? "All themes (Lifestyle + stubs)" : "All stub themes",
    tagline:
      unit === 1
        ? "Unit 1 · Lifestyle Cool Words + other decks"
        : "Unit " + unit + " · combined stub deck",
    icon: "✨"
  };
  W.FCE_SB_getLexRows = lexRowsForTheme;
  W.FCE_SB_getPhrases = function (themeId) {
    return lexRowsForTheme(themeId).map(function (r) {
      return r.ans;
    });
  };
})(typeof window !== "undefined" ? window : globalThis);
