/**
 * Prep hub — Level 12 · Grammar (CPE) — Participle clauses + verb patterns.
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
        subtitle: "Shorten clauses — flip cards (6)",
        kind: "prep-link",
        href:
            "unit12-grammar/cpe/participle-clauses/exercise-1-shorten-clauses.html?course=cpe&backLabel=" +
            encodeURIComponent("Grammar — Level 12"),
    };

    var PARTICIPLE_EX2 = {
        id: "u12_grammar_participle_ex2",
        title: "Participle clauses · Exercise 2",
        subtitle: "The health benefits of chocolate — gap-fill (9)",
        kind: "prep-link",
        href:
            "unit12-grammar/cpe/participle-clauses/exercise-2-chocolate-gap-fill.html?course=cpe&backLabel=" +
            encodeURIComponent("Grammar — Level 12"),
    };

    var PARTICIPLE_EX1_EXTRA = {
        id: "u12_grammar_participle_ex1_extra",
        title: "Participle clauses · Extra — error correction",
        subtitle: "Flip cards · correct the mistakes (6)",
        kind: "prep-link",
        href:
            "unit12-grammar/cpe/participle-clauses/exercise-1-corrections.html?course=cpe&backLabel=" +
            encodeURIComponent("Grammar — Level 12"),
    };

    var PARTICIPLE_EX2_EXTRA = {
        id: "u12_grammar_participle_ex2_extra",
        title: "Participle clauses · Extra — choose the form",
        subtitle: "Multiple choice (6 sentences)",
        kind: "prep-link",
        href:
            "unit12-grammar/cpe/participle-clauses/exercise-2-options.html?course=cpe&backLabel=" +
            encodeURIComponent("Grammar — Level 12"),
    };

    var VERB_PATTERNS_HUB = {
        id: "u12_grammar_verb_patterns_hub",
        title: "Verb patterns — hub",
        subtitle: "Language focus · Exercises 1–2",
        kind: "prep-link",
        href:
            "unit12-grammar/cpe/verb-patterns/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Grammar — Level 12"),
    };

    var VERB_PATTERNS_EX1 = {
        id: "u12_grammar_verb_patterns_ex1",
        title: "Verb patterns · Exercise 1",
        subtitle: "Cross out the incorrect phrase (5 sets)",
        kind: "prep-link",
        href:
            "unit12-grammar/cpe/verb-patterns/exercise-1-cross-out.html?course=cpe&backLabel=" +
            encodeURIComponent("Grammar — Level 12"),
    };

    var VERB_PATTERNS_EX2 = {
        id: "u12_grammar_verb_patterns_ex2",
        title: "Verb patterns · Exercise 2",
        subtitle: "Same or different? — flip cards (6 pairs)",
        kind: "prep-link",
        href:
            "unit12-grammar/cpe/verb-patterns/exercise-2-meaning-flip.html?course=cpe&backLabel=" +
            encodeURIComponent("Grammar — Level 12"),
    };

    W.PREP_HUB_U12_GRAMMAR_SEEDS = {
        folderGrammar: {
            title: "Grammar",
            subtitle: "Unit 12 · Participle clauses & verb patterns (CPE)",
        },
        seededTasks: [
            PARTICIPLE_REF,
            PARTICIPLE_EX1,
            PARTICIPLE_EX2,
            VERB_PATTERNS_HUB,
            VERB_PATTERNS_EX1,
            VERB_PATTERNS_EX2,
            PARTICIPLE_EX1_EXTRA,
            PARTICIPLE_EX2_EXTRA,
        ],
        taskIdsOrdered: [
            PARTICIPLE_REF.id,
            PARTICIPLE_EX1.id,
            PARTICIPLE_EX2.id,
            VERB_PATTERNS_HUB.id,
            VERB_PATTERNS_EX1.id,
            VERB_PATTERNS_EX2.id,
            PARTICIPLE_EX1_EXTRA.id,
            PARTICIPLE_EX2_EXTRA.id,
        ],
        participleRefTask: PARTICIPLE_REF,
        participleEx1Task: PARTICIPLE_EX1,
        participleEx2Task: PARTICIPLE_EX2,
        participleEx1ExtraTask: PARTICIPLE_EX1_EXTRA,
        participleEx2ExtraTask: PARTICIPLE_EX2_EXTRA,
        verbPatternsHubTask: VERB_PATTERNS_HUB,
        verbPatternsEx1Task: VERB_PATTERNS_EX1,
        verbPatternsEx2Task: VERB_PATTERNS_EX2,
    };
})(typeof window !== "undefined" ? window : globalThis);
