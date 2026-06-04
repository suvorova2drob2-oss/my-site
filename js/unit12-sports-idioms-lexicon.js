/**
 * Unit 12 Vocabulary — all sports-linked idioms (3 disk pages) · Word Bank + Vocab Gym.
 * Groups mirror vocabulary tasks: phrase bank · word box · discussing pairs.
 */
(function (W) {
    "use strict";

    W.LEX_U12_SPORTS_IDIOMS_LABEL = "Vocabulary: Sports idioms · Unit 12";

    W.U12_SPORTS_IDIOMS_GROUP_ORDER = [
        "Sports idioms · phrase bank",
        "Word box · one-word gaps",
        "Discussing pairs",
    ];

    /** Same rows power Word Bank, sticky (u12sports), TTT, Prep vault — grouped for list UI only. */
    W.U12_SPORTS_VOCAB_GYM_SURFACES = ["wordBank", "sticky", "ticTacToe", "prepVault"];

    W.U12_SPORTS_IDIOMS_LEXIS_GAME_ROWS = [
        {
            group: "Sports idioms · phrase bank",
            ans: "learn the ropes",
            hint:
                "Sailing · literal: tying knots on a boat · To learn how to do a new job or activity properly.",
            tap: "learn the ropes",
        },
        {
            group: "Sports idioms · phrase bank",
            ans: "jump the gun",
            hint:
                "Athletics · literal: starting before the starting gun · To do something too soon, before the right time.",
            tap: "jump the gun",
        },
        {
            group: "Sports idioms · phrase bank",
            ans: "throw in the towel",
            hint: "Boxing · literal: quitting a fight · To give up; to stop trying.",
            tap: "throw in the towel",
        },
        {
            group: "Sports idioms · phrase bank",
            ans: "move the goalposts",
            hint:
                "Football · literal: changing the posts on the pitch · To change the rules or standards unfairly.",
            tap: "move the goalposts",
        },
        {
            group: "Sports idioms · phrase bank",
            ans: "the upper hand",
            hint:
                "Cards · have / give the upper hand · To have an advantage over someone.",
            tap: "the upper hand",
        },
        {
            group: "Sports idioms · phrase bank",
            ans: "have a head start",
            hint:
                "Horse racing · literal: a horse ahead at the start · To start with an advantage.",
            tap: "have a head start",
        },
        {
            group: "Word box · one-word gaps",
            ans: "in the same ballpark",
            hint: "Baseball · Approximately the same amount or range.",
            tap: "in the same ballpark",
        },
        {
            group: "Word box · one-word gaps",
            ans: "on target",
            hint: "On course to achieve something; proceeding as planned.",
            tap: "on target",
        },
        {
            group: "Word box · one-word gaps",
            ans: "no holds barred",
            hint: "Wrestling · With no limits or restrictions; completely frank.",
            tap: "no holds barred",
        },
        {
            group: "Word box · one-word gaps",
            ans: "bowl someone over",
            hint: "Cricket / bowling · To surprise or impress someone greatly.",
            tap: "bowl someone over",
        },
        {
            group: "Word box · one-word gaps",
            ans: "take it on the chin",
            hint: "Boxing · To accept criticism or bad news without complaining.",
            tap: "take it on the chin",
        },
        {
            group: "Discussing pairs",
            ans: "jump on the bandwagon",
            hint: "Join others in doing something popular, often without thinking it through.",
            tap: "jump on the bandwagon",
        },
        {
            group: "Discussing pairs",
            ans: "throw your hat in the ring",
            hint:
                "Boxing · Announce that you want to take part in a competition or challenge (contrast: throw in the towel).",
            tap: "throw your hat in the ring",
        },
    ];

    W.U12_SPORTS_IDIOMS_TAP_PHRASES = W.U12_SPORTS_IDIOMS_LEXIS_GAME_ROWS.map(function (row) {
        return { en: row.tap || row.ans, hint: row.hint };
    });

    /** Each `ans` above appears verbatim in this plain (for drop / Word Bank anchoring). */
    W.U12_SPORTS_IDIOMS_LEXIS_PLAIN = [
        "Once you learn the ropes and settle in, you'll feel far less anxious about your new job.",
        "Make sure you train gently at first — don't jump the gun and sign up for a marathon!",
        "After months of trying, she decided to throw in the towel and look for a different approach.",
        "They keep trying to move the goalposts every time we meet the target.",
        "Experience in the field gave her the upper hand in the negotiations.",
        "Growing up bilingual can give you a head start when you start learning a third language.",
        "The first company quoted us a fee of $400,000 to redesign the complex. I can't remember the exact figure given by the second company, but it was in the same ballpark.",
        "James has put a great deal of practice into his chess game, and if he continues like this, he'll be on target to win the national championship.",
        "Her autobiography was quite shocking really. There were no holds barred when it came to what she thought about her teammates.",
        "The generosity of his co-workers was enough to bowl someone over on his first anniversary at the firm.",
        "He knew he was to blame for his team losing the match, and when the coach ranted and raved at him, he took it on the chin and didn't complain.",
        "When everyone started buying that phone, I might jump on the bandwagon without really thinking about it.",
        "If you want the role, throw your hat in the ring before the deadline.",
    ].join(" ");
})(typeof window !== "undefined" ? window : globalThis);
