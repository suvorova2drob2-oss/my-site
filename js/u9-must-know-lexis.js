/**
 * Contemporary art (Word Bank) pack: idioms, art register, and discourse chunks for Unit 9
 * and shared lexical game pools. One study paragraph; each {@link U9_MUST_KNOW_ITEMS}.phrase
 * appears as an exact substring (see {@link u9FallBuildGapLine} in index.html).
 */
(function (G) {
    "use strict";

    /** Filter label in lexical games, Word Bank stats, and Prep escape (shares must-know data file). */
    G.U9_MUST_KNOW_SPEAKER = "Contemporary art";

    /** Single paragraph; every `phrase` in U9_MUST_KNOW_ITEMS must appear verbatim. */
    G.U9_MUST_KNOW_STUDY_PLAIN =
        "Critics who miss a trick on press copy may still get clicks. Boards that try to " +
        "close the stable door once the horse has bolted after a scandal only fuel gossip, and a line that can " +
        "thumb your nose at nuance may leave you " +
        "looking through the wrong end of the telescope, " +
        "showing a dizzying smorgasbord of claims that can read " +
        "like a yardstick of power. " +
        "Self-aggrandising commissions sit beside work that betrays " +
        "grim fascination with price, where " +
        "failure is a prerequisite for a career, and " +
        "at the very least you need a " +
        "deft line when every city is " +
        "scrambling to host a fair, because the " +
        "sieving process of history is cruel: the tabloid press " +
        "kvetches, provenance turns into " +
        "playthings for the ultra-rich, and a deck can be " +
        "littered with spin. " +
        "More often than not, " +
        "no self-respecting biennial trusts the first headline.";

    /**
     * @type {{ phrase: string, hint: string }[]}
     */
    G.U9_MUST_KNOW_ITEMS = [
        { phrase: "miss a trick", hint: "Fail to see the key opportunity; waste a chance to act." },
        {
            phrase: "close the stable door once the horse has bolted",
            hint: "Act when it is too late; try to limit damage after the event."
        },
        { phrase: "thumb your nose at", hint: "Show open contempt; defy rules or good taste in public." },
        {
            phrase: "looking through the wrong end of the telescope",
            hint: "Misjudge the situation; get scale or priorities backwards (formal C2 idiom)."
        },
        { phrase: "a dizzying smorgasbord of", hint: "A head-spinning variety; stronger, more vivid than a wide range of." },
        { phrase: "a yardstick of power", hint: "A standard that shows who really wields power or control." },
        {
            phrase: "Self-aggrandising commissions",
            hint: "Art orders that mainly boost the buyer\u2019s own status or image."
        },
        { phrase: "grim fascination with", hint: "A dark, morbid pull toward something (e.g. money, scandal, disaster)." },
        { phrase: "failure is a prerequisite", hint: "The idea that you cannot succeed without failing first (sets up a contrast)." },
        { phrase: "at the very least", hint: "As a minimum; in any case (discourse / hedging)." },
        { phrase: "deft", hint: "Skilful, neat, or lightly clever (a deft line, a deft move)." },
        { phrase: "scrambling to", hint: "Rushing or competing frantically to get something (e.g. host, book, sign)." },
        { phrase: "sieving process of history", hint: "How time filters who is remembered; only a few names survive (register)." },
        { phrase: "kvetches", hint: "Informal: complains, whines, nags in a peevish way (Yiddish-influenced English)." },
        { phrase: "playthings for the ultra-rich", hint: "Expensive art or status symbols treated as toys for the super-wealthy." },
        { phrase: "littered with", hint: "Full of, strewn with (often something negative, messy, or too dense)." },
        { phrase: "More often than not", hint: "In most cases; usually (a formal alternative to often)." },
        { phrase: "no self-respecting", hint: "No serious X would ever\u2026 (often museum, writer, city, course\u2026)" }
    ];
})(typeof window !== "undefined" ? window : this);
