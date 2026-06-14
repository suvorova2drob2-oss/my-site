/**

 * Unit 12 Vocabulary · Multi-word verbs (listening Ex. 1 + verb box Ex. 3) · Word Bank + Vocab Gym + Playground.

 *

 * headword = dictionary / base form (Word Bank + games). ans = verbatim anchor in LEXIS_PLAIN (drop / gap line).

 */

(function (W) {

    "use strict";



    W.LEX_U12_MULTI_WORD_VERBS_LABEL = "Vocabulary: Multi-word verbs · Unit 12";



    W.U12_MULTI_WORD_VERBS_GROUP_ORDER = [

        "From listening · Track 12.1",

        "Verb box · Exercise 3",

    ];



    W.U12_MULTI_WORD_VERBS_VOCAB_GYM_SURFACES = ["wordBank", "sticky", "ticTacToe", "prepVault"];



    W.U12_MULTI_WORD_VERBS_LEXIS_GAME_ROWS = [

        {

            group: "From listening · Track 12.1",

            headword: "mount up",

            ans: "mounting up",

            hint: "Increase gradually in number or amount (often complaints or problems).",

            tap: "mounting up",

        },

        {

            group: "From listening · Track 12.1",

            headword: "keep at it",

            ans: "keep at it",

            hint: "Continue trying to do something despite difficulty or slow progress.",

            tap: "keep at it",

        },

        {

            group: "From listening · Track 12.1",

            headword: "urge someone on",

            ans: "urge them on",

            hint: "Encourage someone strongly to continue or to be more adventurous.",

            tap: "urge them on",

        },

        {

            group: "From listening · Track 12.1",

            headword: "go through with it",

            ans: "go through with it",

            hint: "Complete something you agreed to do, especially when it is difficult.",

            tap: "go through with it",

        },

        {

            group: "Verb box · Exercise 3",

            headword: "bottle up",

            ans: "bottling them up",

            hint: "Suppress feelings instead of expressing them (here: emotions).",

            tap: "bottling them up",

        },

        {

            group: "Verb box · Exercise 3",

            headword: "catch up with someone",

            ans: "caught up with him",

            hint: "Finally affect someone after a long period (often negative consequences).",

            tap: "caught up with him",

        },

        {

            group: "Verb box · Exercise 3",

            headword: "cling on to",

            ans: "cling on to",

            hint: "Continue to hold a belief or hope, often when it may be unrealistic.",

            tap: "cling on to",

        },

        {

            group: "Verb box · Exercise 3",

            headword: "get to",

            ans: "get to",

            hint: "Annoy or upset someone emotionally.",

            tap: "get to",

        },

        {

            group: "Verb box · Exercise 3",

            headword: "go without saying",

            ans: "goes without",

            hint: "Part of the fixed phrase meaning something is obvious (… saying).",

            tap: "goes without",

        },

        {

            group: "Verb box · Exercise 3",

            headword: "catch on",

            ans: "caught on",

            hint: "Become popular, fashionable, or widely accepted.",

            tap: "caught on",

        },

        {

            group: "Verb box · Exercise 3",

            headword: "get through",

            ans: "get through",

            hint: "Finish or survive a difficult activity (here: a speech).",

            tap: "get through",

        },

        {

            group: "Verb box · Exercise 3",

            headword: "count someone in",

            ans: "count him in",

            hint: "Include someone in a plan or activity.",

            tap: "count him in",

        },

    ];



    W.U12_MULTI_WORD_VERBS_TAP_PHRASES = W.U12_MULTI_WORD_VERBS_LEXIS_GAME_ROWS.map(function (row) {

        return { en: row.headword || row.tap || row.ans, hint: row.hint };

    });



    /** Each `ans` appears verbatim in this plain (drop / Word Bank anchoring). */

    W.U12_MULTI_WORD_VERBS_LEXIS_PLAIN = [

        "In recent years complaints have been mounting up from groups such as yours.",

        "Community action groups like mine have to keep at it in order for change to happen.",

        "We want to urge them on to be more adventurous and challenge themselves through outdoor activities like hiking.",

        "We have to actually go through with it and not just pay them lip service.",

        "People should be encouraged to process their emotions as there is plenty of evidence that bottling them up can lead to mental and physical health issues.",

        "All his days of sitting in front of the TV, mindlessly eating fast or processed food finally caught up with him when his doctor told him how much damage he'd done to his body.",

        "Just cling on to the hope that your forefather's longevity will be passed on to you.",

        "Perfectionism, which may seem like a positive quality, can actually be incredibly damaging as the stress of trying to attain such levels can really get to you.",

        "It goes without saying that enjoying nature does wonders for our general wellbeing.",

        "In many countries, travelling by scooter or bike has really caught on and is now a popular and convenient way to get around in the city centre.",

        "As long as I can get through my speech without any mistakes, my parents' anniversary dinner should be a thoroughly enjoyable occasion.",

        "Joaquin said to count him in for the camping trip next weekend.",

    ].join(" ");

})(typeof window !== "undefined" ? window : globalThis);

