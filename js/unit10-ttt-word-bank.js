/**
 * Unit 10 lexical packs for Vocabulary Tic-Tac-Toe (offline page only).
 * Depends on: listening-p4-wb10-pack.js, u10-books-films-lexis.js,
 *             u10-uoe-shakespeare-lexicon.js, u10-similes-lexis.js (load before this file).
 */
(function (W) {
  "use strict";

  var U10_TTT_TOPIC_LIST = [
    { id: "u10_p4", label: "Listening Part 4 · Unit 10 (SB 10.1)" },
    { id: "u10_books", label: "Describing books & films" },
    { id: "u10_shakespeare", label: "Shakespeare · Use of English" },
    { id: "u10_similes", label: "Similes" }
  ];

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

  function buildAllWords() {
    var w = [];
    pushGameRows("u10_p4", W.U10_P4_LEXIS_GAME_ROWS, w);
    pushGameRows("u10_books", W.U10_BOOKS_FILMS_LEXIS_GAME_ROWS, w);
    pushGameRows("u10_shakespeare", W.U10_UOE_SHAKESPEARE_LEXIS_GAME_ROWS, w);
    pushGameRows("u10_similes", W.U10_SIMILES_LEXIS_GAME_ROWS, w);
    return w;
  }

  W.VOCAB_TTT_TOPIC_LIST = U10_TTT_TOPIC_LIST;
  W.VOCAB_TTT_WORDS = buildAllWords();
})(typeof window !== "undefined" ? window : globalThis);
