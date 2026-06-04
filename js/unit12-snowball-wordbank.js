/**
 * Unit 12 CPE playground — Snowball / Echo Minute / Voice bingo decks (three Word Bank tabs).
 * Depends on: unit12-reading-road-to-betterment-lexicon.js, unit12-sports-idioms-lexicon.js, unit12-listening-sb12-1-disabled-access-lexicon.js
 */
(function (W) {
    "use strict";

    var DEFINITIONS = [
        {
            id: "reading-betterment",
            title: "The Road to Betterment",
            tagline: "Reading Part 5 · phrase bank",
            icon: "\uD83D\uDCD6",
        },
        {
            id: "sports-idioms",
            title: "Sports idioms",
            tagline: "Vocabulary · phrase bank + word box + pairs",
            icon: "\u26BD",
        },
        {
            id: "listening-disabled-access",
            title: "Disabled access",
            tagline: "Listening Track 12.1 · discussion phrases",
            icon: "\uD83C\uDFA7",
        },
    ];

    var COMBINED_ID = "all-themes";

    function themeRows(themeId) {
        switch (themeId) {
            case "reading-betterment":
                return W.U12_READING_ROAD_TO_BETTERMENT_LEXIS_GAME_ROWS;
            case "sports-idioms":
                return W.U12_SPORTS_IDIOMS_LEXIS_GAME_ROWS;
            case "listening-disabled-access":
                return W.U12_LISTENING_DISABLED_ACCESS_LEXIS_GAME_ROWS;
            default:
                return [];
        }
    }

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

    function lexPairFromRow(r) {
        if (!r) return null;
        var ans = String(r.ans != null ? r.ans : "").trim();
        if (!ans) return null;
        var hint = String(r.hint != null ? r.hint : "").trim();
        return { ans: ans, hint: hint || ans };
    }

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

    W.U12_SNOWBALL_COMBINED_THEME_ID = COMBINED_ID;
    W.U12_SNOWBALL_THEME_DEFINITIONS = DEFINITIONS;
    W.U12_SNOWBALL_THEME_DEFINITIONS_COMBINED = {
        id: COMBINED_ID,
        title: "All word banks",
        tagline: "Reading · sports idioms · listening",
        icon: "\u2728",
    };

    W.U12_SNOWBALL_getThemeMeta = function (themeId) {
        if (themeId === COMBINED_ID) return W.U12_SNOWBALL_THEME_DEFINITIONS_COMBINED;
        var i;
        for (i = 0; i < DEFINITIONS.length; i++) {
            if (DEFINITIONS[i].id === themeId) return DEFINITIONS[i];
        }
        return null;
    };

    W.U12_SNOWBALL_getLexRows = lexRowsForTheme;
    W.U12_SNOWBALL_getPhrases = phrasesForTheme;
})(typeof window !== "undefined" ? window : globalThis);
