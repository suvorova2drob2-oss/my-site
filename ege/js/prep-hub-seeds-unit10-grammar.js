/**
 * Prep hub — Level 10 Grammar nest (content only).
 * Consumed by ensurePrepUnit10GrammarNest() in index.html.
 */
(function (W) {
    "use strict";

    var inversionReference = {
        id: "u10_grammar_inversion_seed",
        title: "Inversion — reference",
        subtitle: "Formal emphasis · conditionals · place & time",
        kind: "prep-link",
        href: "unit10-grammar/inversion/index.html"
    };
    var inversionExercise1 = {
        id: "u10_grammar_inversion_ex_seed",
        title: "Exercise 1",
        subtitle: "Error correction · eight flip cards",
        kind: "prep-link",
        href: "unit10-grammar/inversion/exercises.html"
    };
    var inversionExercise2 = {
        id: "u10_grammar_inversion_ex2_seed",
        title: "Exercise 2",
        subtitle: "Choose the correct alternative · detective story",
        kind: "prep-link",
        href: "unit10-grammar/inversion/exercises-2.html"
    };
    var inversionRewrite = {
        id: "u10_grammar_inversion_rewrite_seed",
        title: "Rewrite (Hamilton)",
        subtitle: "Magazine article · inversion · flip cards",
        kind: "prep-link",
        href: "unit10-grammar/inversion/exercises-rewrite.html"
    };
    var cleftReference = {
        id: "u10_grammar_cleft_seed",
        title: "Cleft sentences — reference",
        subtitle: "Emphasis patterns · colour-coded exercises",
        kind: "prep-link",
        href: "unit10-grammar/cleft-sentences/index.html"
    };

    var inversionTaskOrder = [
        inversionReference.id,
        inversionExercise1.id,
        inversionExercise2.id,
        inversionRewrite.id
    ];

    var inversionBuiltinTaskIds = {};
    for (var ii = 0; ii < inversionTaskOrder.length; ii++) {
        inversionBuiltinTaskIds[inversionTaskOrder[ii]] = true;
    }

    W.PREP_HUB_U10_GRAMMAR_SEEDS = {
        legacyTaskIdsToStrip: ["u10_grammar_reference_book_seed"],
        inversionTaskOrder: inversionTaskOrder,
        inversionBuiltinTaskIds: inversionBuiltinTaskIds,
        cleftSeedId: cleftReference.id,
        seeds: {
            inversionReference: inversionReference,
            inversionExercise1: inversionExercise1,
            inversionExercise2: inversionExercise2,
            inversionRewrite: inversionRewrite,
            cleftReference: cleftReference
        },
        folderGrammar: {
            title: "Grammar",
            subtitle: "Unit 10 · inversion & cleft sentences"
        },
        folderInversion: {
            title: "Inversion",
            subtitle: "Unit 10 · reference & exercises"
        },
        folderCleft: {
            title: "Cleft sentences",
            subtitle: "Unit 10 · emphasis & exercises"
        },
        defaultInversionTasks: [inversionReference, inversionExercise1, inversionExercise2, inversionRewrite],
        defaultCleftTasks: [cleftReference]
    };
})(typeof window !== "undefined" ? window : globalThis);
