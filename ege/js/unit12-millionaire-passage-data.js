/**
 * Unit 12 Millionaire · reading comprehension facts + paraphrase deck.
 * Depends on: unit12-reading-road-to-betterment-data.js, unit12-*-lexicon.js, unit12-ttt-word-bank.js
 */
(function (W) {
    "use strict";

    function mcqToFacts() {
        var pack = W.U12_READING_ROAD_TO_BETTERMENT;
        if (!pack || !pack.mcq || !pack.correct) return [];
        var out = [];
        var i;
        for (i = 0; i < pack.mcq.length; i++) {
            var item = pack.mcq[i];
            var opts = item.options || {};
            var arr = [opts.A, opts.B, opts.C, opts.D].filter(function (x) {
                return x != null && String(x).trim();
            });
            if (arr.length < 4) continue;
            var letter = String(pack.correct[i] || "A").toUpperCase();
            var idx = letter.charCodeAt(0) - 65;
            if (idx < 0 || idx > 3) idx = 0;
            out.push({
                topicId: "u12_reading_road_to_betterment",
                q: item.q,
                opts: [opts.A, opts.B, opts.C, opts.D],
                correct: idx,
                sourceLine: "",
            });
        }
        return out;
    }

    function buildParaphraseFromLex() {
        var rows = W.VOCAB_TTT_WORDS || W.VOCAB_TTT_U12_WORDS || [];
        var out = [];
        var i;
        for (i = 0; i < rows.length; i++) {
            var row = rows[i];
            if (!row) continue;
            var target = String(row.phrase != null ? row.phrase : "").trim();
            var hint = String(row.hint != null ? row.hint : "").trim();
            var topicId = row.topic || "u12_misc";
            if (!target || !hint) continue;
            var distractors = [];
            var j;
            for (j = 0; j < rows.length && distractors.length < 3; j++) {
                if (j === i) continue;
                var d = String(rows[j].phrase || "").trim();
                if (!d || d.toLowerCase() === target.toLowerCase()) continue;
                if (distractors.indexOf(d) !== -1) continue;
                distractors.push(d);
            }
            while (distractors.length < 3) distractors.push("—");
            var opts = [target].concat(distractors.slice(0, 3));
            var k;
            for (k = opts.length - 1; k > 0; k--) {
                var r = Math.floor(Math.random() * (k + 1));
                var t = opts[k];
                opts[k] = opts[r];
                opts[r] = t;
            }
            var correct = 0;
            for (k = 0; k < opts.length; k++) {
                if (opts[k] === target) correct = k;
            }
            out.push({
                topicId: topicId,
                definition: "Which phrase matches this definition? " + hint,
                target: target,
                opts: opts,
                correct: correct,
            });
        }
        return out;
    }

    W.U12_MILLIONAIRE_FACTS = mcqToFacts();
    W.U12_MILLIONAIRE_PARAPHRASE_QUIZ = buildParaphraseFromLex();
})(typeof window !== "undefined" ? window : globalThis);
