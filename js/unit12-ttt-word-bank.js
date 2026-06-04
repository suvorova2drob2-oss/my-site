/**
 * Unit 12 lexical packs for Vocabulary Tic-Tac-Toe (offline page).
 * Depends on: unit12-reading-road-to-betterment-lexicon.js, unit12-sports-idioms-lexicon.js, unit12-listening-sb12-1-disabled-access-lexicon.js
 */
(function (W) {
    "use strict";

    var PACKS = [
        {
            rowsGlobal: "U12_READING_ROAD_TO_BETTERMENT_LEXIS_GAME_ROWS",
            topicId: "u12_reading_road_to_betterment",
            label: "The Road to Betterment · Reading",
        },
        {
            rowsGlobal: "U12_SPORTS_IDIOMS_LEXIS_GAME_ROWS",
            topicId: "u12_sports_idioms",
            label: "Sports idioms · Vocabulary",
        },
        {
            rowsGlobal: "U12_LISTENING_DISABLED_ACCESS_LEXIS_GAME_ROWS",
            topicId: "u12_listening_disabled_access",
            label: "Listening · Track 12.1",
        },
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
        var i;
        for (i = 0; i < PACKS.length; i++) {
            var pack = PACKS[i];
            pushGameRows(pack.topicId, W[pack.rowsGlobal], w);
        }
        return w;
    }

    W.VOCAB_TTT_U12_TOPIC_LIST = PACKS.map(function (p) {
        return { id: p.topicId, label: p.label };
    });
    W.VOCAB_TTT_U12_WORDS = buildAllWords();
})(typeof window !== "undefined" ? window : globalThis);
