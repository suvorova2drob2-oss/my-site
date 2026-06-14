/**

 * Prep hub — Level 3 · Vocabulary (CPE Levels hub only).

 */

(function (W) {

    "use strict";



    var idiomsMatching = {

        id: "u3_idioms_matching_seed",

        title: "Idioms — match questions and answers",

        subtitle: "Exercise 2 · questions 1–9 · answers a–i · in the pipeline · teething problems",

        kind: "prep-link",

        href:

            "unit3-vocabulary/cpe/idioms-matching/index.html?course=cpe&backLabel=" +

            encodeURIComponent("Vocabulary — Level 3"),

    };



    var readingPhrasalVerbs = {

        id: "u3_reading_phrasal_verbs_seed",

        title: "Phrasal verbs from the reading",

        subtitle: "Exercise 1 · run up against · plough into · hold back · 3 items",

        kind: "prep-link",

        href:

            "unit3-vocabulary/cpe/reading-phrasal-verbs/index.html?course=cpe&backLabel=" +

            encodeURIComponent("Vocabulary — Level 3"),

    };



    var semmelweisMatching = {

        id: "u3_semmelweis_phrasal_matching_seed",

        title: "Semmelweis — phrasal verb matching",

        subtitle: "Exercise 2 · beginnings 1–10 · endings a–j · noun collocates",

        kind: "prep-link",

        href:

            "unit3-vocabulary/cpe/semmelweis-phrasal-matching/index.html?course=cpe&backLabel=" +

            encodeURIComponent("Vocabulary — Level 3"),

    };



    var phrasalMeanings = {

        id: "u3_phrasal_verbs_meanings_seed",

        title: "Phrasal verb meanings",

        subtitle: "Exercise 4 · infinitive next to definition · Ex. 2 verbs",

        kind: "prep-link",

        href:

            "unit3-vocabulary/cpe/phrasal-verbs-meanings/index.html?course=cpe&backLabel=" +

            encodeURIComponent("Vocabulary — Level 3"),

    };



    var phrasalGaps = {

        id: "u3_phrasal_verbs_gaps_seed",

        title: "Phrasal verbs in context",

        subtitle: "Exercise 5 · sentences 1–5 · bold noun collocates",

        kind: "prep-link",

        href:

            "unit3-vocabulary/cpe/phrasal-verbs-gaps/index.html?course=cpe&backLabel=" +

            encodeURIComponent("Vocabulary — Level 3"),

    };



    var prepPhrasesSpeak = {

        id: "u3_prep_phrases_speaking_seed",

        title: "Prepositional phrases from the listening",

        subtitle: "Exercise 1 · SPEAK · underlined phrases from Part 4",

        kind: "prep-link",

        href:

            "unit3-vocabulary/cpe/prep-phrases-speaking/index.html?course=cpe&backLabel=" +

            encodeURIComponent("Vocabulary — Level 3"),

    };



    var prepPhrasesGrid = {

        id: "u3_prep_phrases_grid_seed",

        title: "Prepositions at / in / on / under",

        subtitle: "Exercise 2 · one preposition · four rows of collocations",

        kind: "prep-link",

        href:

            "unit3-vocabulary/cpe/prep-phrases-grid/index.html?course=cpe&backLabel=" +

            encodeURIComponent("Vocabulary — Level 3"),

    };



    var prepPhrasesGaps = {

        id: "u3_prep_phrases_gaps_seed",

        title: "Prepositional phrases in discussion",

        subtitle: "Exercise 3 · phrases from Exercise 2 · questions 1–5",

        kind: "prep-link",

        href:

            "unit3-vocabulary/cpe/prep-phrases-gaps/index.html?course=cpe&backLabel=" +

            encodeURIComponent("Vocabulary — Level 3"),

    };



    W.PREP_HUB_U3_VOCAB_SEEDS = {

        folderVocabulary: {

            title: "Vocabulary",

            subtitle: "Unit 3 · Idioms · phrasal verbs · prepositional phrases",

        },

        seededTasks: [

            idiomsMatching,

            readingPhrasalVerbs,

            semmelweisMatching,

            phrasalMeanings,

            phrasalGaps,

            prepPhrasesSpeak,

            prepPhrasesGrid,

            prepPhrasesGaps,

        ],

        taskIdsOrdered: [

            idiomsMatching.id,

            readingPhrasalVerbs.id,

            semmelweisMatching.id,

            phrasalMeanings.id,

            phrasalGaps.id,

            prepPhrasesSpeak.id,

            prepPhrasesGrid.id,

            prepPhrasesGaps.id,

        ],

        idiomsMatchingTask: idiomsMatching,

        readingPhrasalVerbsTask: readingPhrasalVerbs,

        semmelweisMatchingTask: semmelweisMatching,

        phrasalMeaningsTask: phrasalMeanings,

        phrasalGapsTask: phrasalGaps,

        prepPhrasesSpeakTask: prepPhrasesSpeak,

        prepPhrasesGridTask: prepPhrasesGrid,

        prepPhrasesGapsTask: prepPhrasesGaps,

    };

})(typeof window !== "undefined" ? window : globalThis);

