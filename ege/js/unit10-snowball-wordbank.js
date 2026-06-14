/**
 * Unit 10 CPE playground — Snowball phrase decks keyed by Word Bank theme.
 * Game UI: `prep-snowball-phrases-engine.js`, `prep-voice-bingo-engine.js` (`fillThemeRail`, `U10_SNOWBALL_getLexRows`).
 * Depends on (load before this file): listening-p4-wb10-pack.js, u10-books-films-lexis.js,
 * use-of-english/u10-uoe-shakespeare-lexicon.js, u10-similes-lexis.js
 */
(function (W) {
  "use strict";

  /** @typedef {{ id: string, title: string, tagline: string, icon: string }} SnowballThemeDef */

  /** @type {SnowballThemeDef[]} */
  var DEFINITIONS = [
    {
      id: "listening-p4",
      title: "Listening Part 4",
      tagline: "Student's Book · multiple matching (Track 10.1)",
      icon: "\uD83C\uDFA7"
    },
    {
      id: "books-films",
      title: "Describing books & films",
      tagline: "Review blurbs · Exercise bank chunks",
      icon: "\uD83D\uDCDA"
    },
    {
      id: "shakespeare-uoe",
      title: "Shakespeare · Use of English",
      tagline: "Part 1 MC cloze + literary WF phrases",
      icon: "\uD83C\uDFAD"
    },
    {
      id: "similes",
      title: "Similes",
      tagline: "Like / as… comparisons · Unit 10 vocabulary set",
      icon: "\u270F\uFE0F"
    }
  ];

  var COMBINED_ID = "all-themes";

  function ansFromRows(rows) {
    var out = [];
    if (!rows || !rows.length) return out;
    var i;
    for (i = 0; i < rows.length; i++) {
      var r = rows[i];
      if (!r) continue;
      var a = String(r.ans != null ? r.ans : "").trim();
      if (a) out.push(a);
    }
    return out;
  }

  function themeRows(themeId) {
    switch (themeId) {
      case "listening-p4":
        return W.U10_P4_LEXIS_GAME_ROWS;
      case "books-films":
        return W.U10_BOOKS_FILMS_LEXIS_GAME_ROWS;
      case "shakespeare-uoe":
        return W.U10_UOE_SHAKESPEARE_LEXIS_GAME_ROWS;
      case "similes":
        return W.U10_SIMILES_LEXIS_GAME_ROWS;
      default:
        return [];
    }
  }

  /**
   * Stable unique list preserving first occurrence order.
   * @param {string[]} list
   * @returns {string[]}
   */
  function dedupe(list) {
    var seen = Object.create(null);
    var out = [];
    var i;
    for (i = 0; i < list.length; i++) {
      var p = list[i];
      if (!p || seen[p]) continue;
      seen[p] = true;
      out.push(p);
    }
    return out;
  }

  /**
   * @param {string} themeId
   * @returns {string[]}
   */
  function phrasesForTheme(themeId) {
    if (themeId === COMBINED_ID) {
      var merged = [];
      var k;
      for (k = 0; k < DEFINITIONS.length; k++) {
        merged = merged.concat(ansFromRows(themeRows(DEFINITIONS[k].id)));
      }
      return dedupe(merged);
    }
    return ansFromRows(themeRows(themeId));
  }

  W.U10_SNOWBALL_COMBINED_THEME_ID = COMBINED_ID;

  W.U10_SNOWBALL_THEME_DEFINITIONS = DEFINITIONS;

  W.U10_SNOWBALL_THEME_DEFINITIONS_COMBINED = {
    id: COMBINED_ID,
    title: "All word banks",
    tagline: "Listening · books & films · Shakespeare · similes",
    icon: "\u2728"
  };

  /**
   * @param {string} themeId
   * @returns {SnowballThemeDef | typeof W.U10_SNOWBALL_THEME_DEFINITIONS_COMBINED | null}
   */
  W.U10_SNOWBALL_getThemeMeta = function (themeId) {
    if (themeId === COMBINED_ID) return W.U10_SNOWBALL_THEME_DEFINITIONS_COMBINED;
    var i;
    for (i = 0; i < DEFINITIONS.length; i++) {
      if (DEFINITIONS[i].id === themeId) return DEFINITIONS[i];
    }
    return null;
  };

  function lexPairFromRow(r) {
    if (!r) return null;
    var ans = String(r.ans != null ? r.ans : "").trim();
    if (!ans) return null;
    var hint = String(r.hint != null ? r.hint : "").trim();
    return { ans: ans, hint: hint || ans };
  }

  /**
   * Rows as { ans, hint }[], unique by ans (first wins). Combined theme merges all packs.
   * @param {string} themeId
   * @returns {{ ans: string, hint: string }[]}
   */
  function lexRowsForTheme(themeId) {
    var rows;
    var i;
    var k;
    if (themeId === COMBINED_ID) {
      rows = [];
      for (k = 0; k < DEFINITIONS.length; k++) {
        rows = rows.concat(themeRows(DEFINITIONS[k].id) || []);
      }
    } else {
      rows = themeRows(themeId) || [];
    }
    var seen = Object.create(null);
    var out = [];
    for (i = 0; i < rows.length; i++) {
      var pair = lexPairFromRow(rows[i]);
      if (!pair || seen[pair.ans]) continue;
      seen[pair.ans] = true;
      out.push(pair);
    }
    return out;
  }

  W.U10_SNOWBALL_getLexRows = lexRowsForTheme;

  W.U10_SNOWBALL_getPhrases = phrasesForTheme;
})(typeof window !== "undefined" ? window : globalThis);
