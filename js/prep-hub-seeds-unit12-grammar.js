/**
 * Prep hub — Level 12 · Grammar (CPE) — Participle clauses only.
 */
(function (W) {
    "use strict";

    var PARTICIPLE_REF = {
        id: "u12_grammar_participle_ref",
        title: "Participle clauses — reference",
        subtitle: "Language focus A–C · textbook layout",
        kind: "prep-link",
        href:
            "unit12-grammar/cpe/participle-clauses/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Grammar — Level 12"),
    };

    var PARTICIPLE_EX1 = {
        id: "u12_grammar_participle_ex1",
        title: "Participle clauses · Exercise 1",
        subtitle: "Correct the mistakes — flip cards (6)",
        kind: "prep-link",
        href:
            "unit12-grammar/cpe/participle-clauses/exercise-1-corrections.html?course=cpe&backLabel=" +
            encodeURIComponent("Grammar — Level 12"),
    };

    var PARTICIPLE_EX2 = {
        id: "u12_grammar_participle_ex2",
        title: "Participle clauses · Exercise 2",
        subtitle: "Multiple choice (6 sentences)",
        kind: "prep-link",
        href:
            "unit12-grammar/cpe/participle-clauses/exercise-2-options.html?course=cpe&backLabel=" +
            encodeURIComponent("Grammar — Level 12"),
    };

    W.PREP_HUB_U12_GRAMMAR_SEEDS = {
        folderGrammar: {
            title: "Grammar",
            subtitle: "Unit 12 · Participle clauses (CPE)",
        },
        seededTasks: [PARTICIPLE_REF, PARTICIPLE_EX1, PARTICIPLE_EX2],
        taskIdsOrdered: [PARTICIPLE_REF.id, PARTICIPLE_EX1.id, PARTICIPLE_EX2.id],
        participleRefTask: PARTICIPLE_REF,
        participleEx1Task: PARTICIPLE_EX1,
        participleEx2Task: PARTICIPLE_EX2,
    };
})(typeof window !== "undefined" ? window : globalThis);
