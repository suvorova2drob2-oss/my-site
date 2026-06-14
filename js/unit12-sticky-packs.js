/**
 * Unit 12 sticky boards — registers plain+rows packs via unit10-plain-sticky-kit.
 * Load after: unit10-plain-sticky-kit.js, unit12-reading-road-to-betterment-lexicon.js, unit12-sports-idioms-lexicon.js, unit12-listening-sb12-1-disabled-access-lexicon.js, unit12-multi-word-verbs-lexicon.js
 */
(function (W) {
    "use strict";

    if (typeof W.unit10RegisterPlainStickyPack !== "function") return;

    W.unit10RegisterPlainStickyPack({
        mode: "u12reading",
        notifyTaskKey: "u12reading",
        deckProp: "u12ReadingStickyDeck",
        renderFnName: "u12ReadingStickyRenderBoard",
        resetFnName: "u12ReadingStickyResetUI",
        domPrefix: "u12-reading-sticky",
        doneElementId: "u12-reading-sticky-done",
        plainGetter: function () {
            return typeof W.U12_READING_ROAD_TO_BETTERMENT_LEXIS_PLAIN === "string"
                ? W.U12_READING_ROAD_TO_BETTERMENT_LEXIS_PLAIN
                : "";
        },
        rowsGetter: function () {
            return W.U12_READING_ROAD_TO_BETTERMENT_LEXIS_GAME_ROWS || [];
        },
        speakerLabelGetter: function () {
            return typeof W.LEX_U12_READING_ROAD_TO_BETTERMENT_LABEL === "string"
                ? W.LEX_U12_READING_ROAD_TO_BETTERMENT_LABEL
                : "Reading: The Road to Betterment · Unit 12 (Part 5)";
        },
    });

    W.unit10RegisterPlainStickyPack({
        mode: "u12sports",
        notifyTaskKey: "u12sports",
        deckProp: "u12SportsStickyDeck",
        renderFnName: "u12SportsStickyRenderBoard",
        resetFnName: "u12SportsStickyResetUI",
        domPrefix: "u12-sports-sticky",
        doneElementId: "u12-sports-sticky-done",
        plainGetter: function () {
            return typeof W.U12_SPORTS_IDIOMS_LEXIS_PLAIN === "string" ? W.U12_SPORTS_IDIOMS_LEXIS_PLAIN : "";
        },
        rowsGetter: function () {
            return W.U12_SPORTS_IDIOMS_LEXIS_GAME_ROWS || [];
        },
        speakerLabelGetter: function () {
            return typeof W.LEX_U12_SPORTS_IDIOMS_LABEL === "string"
                ? W.LEX_U12_SPORTS_IDIOMS_LABEL
                : "Vocabulary: Sports idioms · Unit 12";
        },
    });

    W.unit10RegisterPlainStickyPack({
        mode: "u12mwv",
        notifyTaskKey: "u12mwv",
        deckProp: "u12MwvStickyDeck",
        renderFnName: "u12MwvStickyRenderBoard",
        resetFnName: "u12MwvStickyResetUI",
        domPrefix: "u12-mwv-sticky",
        doneElementId: "u12-mwv-sticky-done",
        plainGetter: function () {
            return typeof W.U12_MULTI_WORD_VERBS_LEXIS_PLAIN === "string"
                ? W.U12_MULTI_WORD_VERBS_LEXIS_PLAIN
                : "";
        },
        rowsGetter: function () {
            return W.U12_MULTI_WORD_VERBS_LEXIS_GAME_ROWS || [];
        },
        speakerLabelGetter: function () {
            return typeof W.LEX_U12_MULTI_WORD_VERBS_LABEL === "string"
                ? W.LEX_U12_MULTI_WORD_VERBS_LABEL
                : "Vocabulary: Multi-word verbs · Unit 12";
        },
    });

    W.unit10RegisterPlainStickyPack({
        mode: "u12listening",
        notifyTaskKey: "u12listening",
        deckProp: "u12ListeningStickyDeck",
        renderFnName: "u12ListeningStickyRenderBoard",
        resetFnName: "u12ListeningStickyResetUI",
        domPrefix: "u12-listening-sticky",
        doneElementId: "u12-listening-sticky-done",
        plainGetter: function () {
            return typeof W.U12_LISTENING_DISABLED_ACCESS_LEXIS_PLAIN === "string"
                ? W.U12_LISTENING_DISABLED_ACCESS_LEXIS_PLAIN
                : "";
        },
        rowsGetter: function () {
            return W.U12_LISTENING_DISABLED_ACCESS_LEXIS_GAME_ROWS || [];
        },
        speakerLabelGetter: function () {
            return typeof W.LEX_U12_LISTENING_DISABLED_ACCESS_LABEL === "string"
                ? W.LEX_U12_LISTENING_DISABLED_ACCESS_LABEL
                : "Listening: Disabled access · Unit 12 (SB Track 12.1)";
        },
    });
})(typeof window !== "undefined" ? window : globalThis);
