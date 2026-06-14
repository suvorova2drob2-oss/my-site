/**
 * Unit 10 lexical packs for Vocabulary Tic-Tac-Toe (offline page only).
 * Depends on: listening-p4-wb10-pack.js, u10-books-films-lexis.js,
 *             u10-uoe-shakespeare-lexicon.js, u10-similes-lexis.js (load before this file).
 */
(function (W) {
  "use strict";

  var LEGACY_PACKS = [
    { rowsGlobal: "U10_P4_LEXIS_GAME_ROWS", topicId: "u10_p4", label: "Listening Part 4 · Unit 10 (SB 10.1)" },
    { rowsGlobal: "U10_BOOKS_FILMS_LEXIS_GAME_ROWS", topicId: "u10_books", label: "Describing books & films" },
    { rowsGlobal: "U10_UOE_SHAKESPEARE_LEXIS_GAME_ROWS", topicId: "u10_shakespeare", label: "Shakespeare · Use of English" },
    { rowsGlobal: "U10_SIMILES_LEXIS_GAME_ROWS", topicId: "u10_similes", label: "Similes" }
  ];

  function slugFromGlobal(baseName) {
    var s = String(baseName || "").toLowerCase();
    s = s.replace(/_lexis_game_rows$/, "");
    s = s.replace(/[^a-z0-9]+/g, "_");
    s = s.replace(/^_+|_+$/g, "");
    return s || "u10_misc";
  }

  function titleFromSlug(slug) {
    return String(slug || "")
      .replace(/^u10_/, "")
      .split("_")
      .filter(Boolean)
      .map(function (part) { return part.charAt(0).toUpperCase() + part.slice(1); })
      .join(" ");
  }

  function manifestPackHints() {
    var manifest = W.LEXICAL_GAMES_SOURCE_MANIFEST;
    var list = manifest && Array.isArray(manifest.plainAnchoredRowPacks)
      ? manifest.plainAnchoredRowPacks
      : [];
    var out = {};
    for (var i = 0; i < list.length; i++) {
      var p = list[i];
      if (!p || !p.rowsGlobal) continue;
      out[p.rowsGlobal] = {
        topicId: p.wordBankThemeId || null,
        label: p.description || null
      };
    }
    return out;
  }

  function discoverTopicDefs() {
    var defs = [];
    var seenRows = {};
    var i;
    var manifestHints = manifestPackHints();
    var legacyByRows = {};

    for (i = 0; i < LEGACY_PACKS.length; i++) {
      legacyByRows[LEGACY_PACKS[i].rowsGlobal] = LEGACY_PACKS[i];
    }

    function pushDef(rowsGlobalName, rows) {
      if (seenRows[rowsGlobalName]) return;
      if (!Array.isArray(rows) || !rows.length) return;
      seenRows[rowsGlobalName] = true;
      var legacy = legacyByRows[rowsGlobalName];
      var hint = manifestHints[rowsGlobalName] || {};
      var base = rowsGlobalName.replace(/_LEXIS_GAME_ROWS$/, "");
      var speakerGlobal = "LEX_" + base + "_SPEAKER_LABEL";
      var topicId = (legacy && legacy.topicId) || hint.topicId || slugFromGlobal(base);
      var label = (legacy && legacy.label) || W[speakerGlobal] || hint.label || titleFromSlug(topicId);
      defs.push({ id: topicId, label: label, rowsGlobal: rowsGlobalName, rows: rows });
    }

    for (i = 0; i < LEGACY_PACKS.length; i++) {
      var knownRowsGlobal = LEGACY_PACKS[i].rowsGlobal;
      pushDef(knownRowsGlobal, W[knownRowsGlobal]);
    }

    var keys = Object.keys(W);
    for (i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!/_LEXIS_GAME_ROWS$/.test(key)) continue;
      if (!/^U10_/.test(key)) continue;
      pushDef(key, W[key]);
    }

    return defs;
  }

  function rowToWord(topic, hint, phrase) {
    return { phrase: phrase, hint: hint, topic: topic };
  }

  function pushGameRows(topic, rows, w) {
    if (!rows || !rows.length) return;
    var i;
    for (i = 0; i < rows.length; i++) {
      var r = rows[i];
      if (!r) continue;
      var ans = String(r.ans != null ? r.ans : r.phrase || "").trim();
      var hint = String(r.hint != null ? r.hint : "").trim();
      if (!ans || !hint) continue;
      w.push(rowToWord(topic, hint, ans));
    }
  }

  function buildAllWords(defs) {
    var w = [];
    for (var i = 0; i < defs.length; i++) {
      pushGameRows(defs[i].id, defs[i].rows, w);
    }
    return w;
  }

  var topicDefs = discoverTopicDefs();
  W.VOCAB_TTT_TOPIC_LIST = topicDefs.map(function (d) { return { id: d.id, label: d.label }; });
  W.VOCAB_TTT_WORDS = buildAllWords(topicDefs);
})(typeof window !== "undefined" ? window : globalThis);
