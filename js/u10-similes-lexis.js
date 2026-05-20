/**
 * Unit 10 — Similes (same pool as unit10-vocabulary/similes · CPE).
 * Plain passage + hint/ans rows for Lexical games / Word Bank / typed trainer when filtered by speaker.
 */
(function (W) {
    W.LEX_U10_SIMILES_SPEAKER_LABEL = "Unit 10 · Similes";

    var PARAS = [
        "Joanne and I got on like a house on fire at the conference because our tastes matched perfectly.",
        "I didn't want an accident, so I watched them like a hawk while they practised on the ice.",
        "The glass tower stuck out like a sore thumb among low brick terraces.",
        "Those cousins fight like cat and dog whenever politics comes up.",
        "After the flight I'll sleep like a log even if the hotel is noisy.",
        "Calling the plan genius sounded as mad as a box of frogs to everyone else.",
        "The manual was as dull as ditch water despite the colourful cover.",
        "She stayed as tough as old boots through weeks of criticism.",
        "The guidance was as clear as mud, so teams improvised.",
        "In negotiations he was as sly as a fox.",
        "That leaked email became a chink in someone's armour overnight.",
        "After days at sea the harbour was a sight for sore eyes."
    ];

    W.U10_SIMILES_LEXIS_PLAIN = PARAS.join(" ")
        .replace(/\r\n/g, "\n")
        .replace(/\n+/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    /** Meaning-style hints — English only; fronts must not quote the target phrase. */
    W.U10_SIMILES_LEXIS_GAME_ROWS = [
        { hint: "Instant rapport — two people click straight away and enjoy each other's company.", ans: "got on like a house on fire" },
        { hint: "Observe very closely so slips or risks do not go unnoticed.", ans: "watched them like a hawk" },
        { hint: "Obviously different from everything nearby — you visibly do not blend in.", ans: "stuck out like a sore thumb" },
        { hint: "Argue or clash constantly — like hostile siblings under one roof.", ans: "fight like cat and dog" },
        { hint: "Sleep deeply without waking at small noises.", ans: "sleep like a log" },
        { hint: "Informal and humorous for eccentric or wildly unreasonable.", ans: "as mad as a box of frogs" },
        { hint: "Extremely tedious — far beyond slightly boring.", ans: "as dull as ditch water" },
        { hint: "Emotionally hardy — setbacks rarely shake the person.", ans: "as tough as old boots" },
        { hint: "Ironic: sounds explanatory but leaves everyone confused.", ans: "as clear as mud" },
        { hint: "Clever and discreet when chasing an advantage.", ans: "as sly as a fox" },
        { hint: "A small weak spot in something that looked solid or defended.", ans: "a chink in someone's armour" },
        { hint: "Someone or something you are genuinely relieved or pleased to see.", ans: "a sight for sore eyes" }
    ];
})(typeof window !== "undefined" ? window : globalThis);
