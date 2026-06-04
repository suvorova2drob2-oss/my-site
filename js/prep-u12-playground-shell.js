/**

 * CPE Prep Playground (Unit 12) — course flag + class-format stubs from the two Vocab Gym tabs.

 * Load after: unit12-reading-road-to-betterment-lexicon.js, unit12-sports-idioms-lexicon.js, unit12-listening-sb12-1-disabled-access-lexicon.js, unit12-ttt-word-bank.js

 */

(function (W) {

    "use strict";

    try {

        var q = new URLSearchParams(W.location.search || "");

        W.PREP_U12_PG_CPE = q.get("course") === "cpe";

    } catch (e) {

        W.PREP_U12_PG_CPE = false;

    }



    if (Array.isArray(W.VOCAB_TTT_U12_WORDS) && W.VOCAB_TTT_U12_WORDS.length) {

        W.VOCAB_TTT_WORDS = W.VOCAB_TTT_U12_WORDS;

        W.VOCAB_TTT_TOPIC_LIST = W.VOCAB_TTT_U12_TOPIC_LIST || [];

    }



    var phrase = "CPE Prep · add phrases in your Unit 12 content file.";



    function getWordBankRows() {

        if (!Array.isArray(W.VOCAB_TTT_WORDS) || !W.VOCAB_TTT_WORDS.length) return [];

        return W.VOCAB_TTT_WORDS.filter(function (row) {

            return row && typeof row.phrase === "string" && row.phrase.trim();

        });

    }



    function dedupePhrases(rows) {

        var seen = Object.create(null);

        var out = [];

        var i;

        for (i = 0; i < rows.length; i++) {

            var p = String(rows[i].phrase || "").trim();

            if (!p) continue;

            var k = p.toLowerCase();

            if (seen[k]) continue;

            seen[k] = true;

            out.push(p);

        }

        return out;

    }



    function topicLabelMap() {

        var map = Object.create(null);

        var list = Array.isArray(W.VOCAB_TTT_TOPIC_LIST) ? W.VOCAB_TTT_TOPIC_LIST : [];

        var i;

        for (i = 0; i < list.length; i++) {

            if (!list[i] || !list[i].id) continue;

            map[list[i].id] = list[i].label || list[i].id;

        }

        return map;

    }



    function makeDeckFromWordBank(limit) {

        var rows = getWordBankRows();

        if (!rows.length) return [];

        return dedupePhrases(rows).slice(0, limit || 23);

    }



    function buildHundredRoundsFromWordBank() {

        var rows = getWordBankRows();

        if (!rows.length) return [];

        var labelByTopic = topicLabelMap();

        var grouped = Object.create(null);

        var order = [];

        var i;

        for (i = 0; i < rows.length; i++) {

            var t = rows[i].topic || "u12_misc";

            if (!grouped[t]) {

                grouped[t] = [];

                order.push(t);

            }

            grouped[t].push(rows[i]);

        }



        var rounds = [];

        var pts = [100, 80, 60, 40, 20];

        var promptByTopic = {

            u12_reading_road_to_betterment:

                "Reading · The Road to Betterment: pick the strongest phrases for discussing self-help, scepticism, and the industry.",

            u12_sports_idioms:

                "Sports idioms: pick the chunks you would actually use in CPE speaking or writing about competition and effort.",

            u12_listening_disabled_access:

                "Listening · Disabled access: pick phrases from the Track 12.1 discussion on national parks and disability.",

        };

        for (i = 0; i < order.length && rounds.length < 4; i++) {

            var topicId = order[i];

            var topicRows = grouped[topicId];

            var boardPhrases = dedupePhrases(topicRows).slice(0, 5);

            if (!boardPhrases.length) continue;

            while (boardPhrases.length < 5) boardPhrases.push(boardPhrases[boardPhrases.length - 1]);



            var decoyPool = [];

            var j;

            for (j = 0; j < order.length; j++) {

                if (order[j] === topicId) continue;

                decoyPool = decoyPool.concat(grouped[order[j]]);

            }

            var decoys = dedupePhrases(decoyPool).slice(0, 6);

            if (!decoys.length) decoys = dedupePhrases(topicRows).slice(0, 6);



            rounds.push({

                topic: (labelByTopic[topicId] || topicId) + " · Unit 12 word bank",

                q: promptByTopic[topicId] || "Pick the strongest lexical chunks from this Unit 12 pack.",

                hint: "",

                board: boardPhrases.map(function (t, idx) {

                    return { t: t, pts: pts[idx] || 20 };

                }),

                decoys: decoys,

            });

        }

        return rounds;

    }



    function buildSquidRedFromWordBank() {

        var rows = getWordBankRows();

        if (!rows.length) return { good: [], bad: [] };

        var good = dedupePhrases(rows).slice(0, 24);

        var badPool = [];

        var i;

        for (i = 0; i < rows.length; i++) {

            var h = String(rows[i].hint || "").trim();

            if (!h) continue;

            badPool.push(h);

        }

        var bad = dedupePhrases(badPool.map(function (x) {

            return { phrase: x };

        })).slice(0, 24);

        if (!bad.length) {

            for (i = 0; i < good.length; i++) bad.push("decoy: " + good[i].split(" ").slice(0, 3).join(" "));

        }

        return { good: good, bad: bad };

    }



    function buildSquidGlassStepsFromWordBank() {

        var rows = getWordBankRows();

        if (!rows.length) return [];

        var labelByTopic = topicLabelMap();

        var steps = [];

        var i;

        for (i = 0; i < rows.length && steps.length < 12; i++) {

            var row = rows[i];

            var good = String(row.phrase || "").trim();

            var hint = String(row.hint || "").trim();

            if (!good || !hint) continue;

            var other = rows[(i + 3) % rows.length];

            var bad = String((other && other.phrase) || "").trim();

            if (!bad || bad.toLowerCase() === good.toLowerCase()) continue;

            steps.push({

                text: (labelByTopic[row.topic] || row.topic || "Unit 12") + ": " + hint,

                good: good,

                bad: bad,

                source: "",

            });

        }

        return steps;

    }



    function buildWeakestPoolFromWordBank() {

        var rows = getWordBankRows();

        if (!rows.length) return [];

        var labelByTopic = topicLabelMap();

        var out = [];

        var i;

        for (i = 0; i < rows.length && out.length < 24; i++) {

            var row = rows[i];

            var ans = String(row.phrase || "").trim();

            var hint = String(row.hint || "").trim();

            if (!ans || !hint) continue;

            var distract = [];

            var j;

            for (j = 0; j < rows.length && distract.length < 3; j++) {

                if (j === i) continue;

                var cand = String(rows[j].phrase || "").trim();

                if (!cand || cand.toLowerCase() === ans.toLowerCase()) continue;

                if (distract.indexOf(cand) !== -1) continue;

                distract.push(cand);

            }

            if (distract.length < 3) continue;

            var opts = [ans].concat(distract);

            for (j = opts.length - 1; j > 0; j--) {

                var k = Math.floor(Math.random() * (j + 1));

                var t = opts[j];

                opts[j] = opts[k];

                opts[k] = t;

            }

            out.push({

                t: (labelByTopic[row.topic] || row.topic || "?").replace(/\s*·.*/, ""),

                topicId: row.topic || "u12_misc",

                q: "Pick the best phrase for this clue: " + hint,

                o: opts,

                a: opts.indexOf(ans),

            });

        }

        return out;

    }



    var SQ = buildSquidRedFromWordBank();

    var GLASS = buildSquidGlassStepsFromWordBank();

    var WEAKEST = buildWeakestPoolFromWordBank();



    W.PREP_U12_PG_STUB = {

        phrasesDeckMustKnow: function () {

            var deck = makeDeckFromWordBank(23);

            if (deck.length) return deck;

            var x = [];

            var i;

            for (i = 1; i <= 8; i++) {

                x.push("CPE Prep stub phrase " + i + " — replace in unit12 lexicon.");

            }

            return x;

        },



        phrasesOneLine: function () {

            var deck = makeDeckFromWordBank(8);

            if (deck.length) return deck;

            return [phrase];

        },



        hundredToOneRounds: function () {

            var rounds = buildHundredRoundsFromWordBank();

            if (rounds.length) return rounds;

            function stubRound(k) {

                return {

                    topic: "CPE · round " + k,

                    q: "Host-style prompt — plug in top answers from Unit 12 texts.",

                    hint: "",

                    board: [

                        { t: "Top answer (100)", pts: 100 },

                        { t: "Second (80)", pts: 80 },

                        { t: "Third (60)", pts: 60 },

                        { t: "Fourth (40)", pts: 40 },

                        { t: "Fifth (20)", pts: 20 },

                    ],

                    decoys: ["Decoy A", "Decoy B", "Decoy C", "Decoy D"],

                };

            }

            return [stubRound(1), stubRound(2)];

        },



        squidRedGood: SQ.good.length ? SQ.good : ["Unit 12 term ✓ (green)", "Another valid item", "Third valid"],

        squidRedBad: SQ.bad.length ? SQ.bad : ["Unit 12 decoy ✗ (red)", "Fake distractor two", "Nonsense distractor"],



        squidGlassSteps: GLASS.length

            ? GLASS

            : [

                  {

                      text: "Unit 12 stub: pick the phrase that fits the clue",

                      good: "good_pick",

                      bad: "wrong_pick",

                      source: "",

                  },

              ],



        weakestPool: WEAKEST.length

            ? WEAKEST

            : [

                  { t: "?", q: "Unit 12 stub: replace POOL in weakest-link engine.", o: ["A", "B", "C", "D"], a: 0 },

              ],

    };

})(typeof window !== "undefined" ? window : globalThis);


