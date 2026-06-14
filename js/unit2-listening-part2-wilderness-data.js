/**
 * Unit 2 CPE Listening — Part 2 Sentence completion · Into the wilderness.
 * Sentences transcribed verbatim from coursebook; audio + answer key pending.
 */
(function (W) {
    "use strict";

    W.U2_LISTENING_PART2_WILDERNESS = {
        title: "Into the wilderness",
        unitTag: "CPE Unit 2 · Listening · Part 2",
        trackLabel: "Track 2.1",
        audioSrc: null,
        instructionHtml:
            "<strong>2</strong> You will hear a travel expert and writer reporting on travelling in deserts. For questions 1&ndash;9, complete the sentences with a word or short phrase.",
        items: [
            {
                n: 1,
                html:
                    "According to the writer, deserts are the " +
                    '<input type="text" class="gap-inp" id="gap-1" autocomplete="off" spellcheck="false" aria-label="Gap 1" />' +
                    " for experienced travellers like herself.",
            },
            {
                n: 2,
                html:
                    "While describing desert features, she compares rock formations to " +
                    '<input type="text" class="gap-inp" id="gap-2" autocomplete="off" spellcheck="false" aria-label="Gap 2" />' +
                    ".",
            },
            {
                n: 3,
                html:
                    "In contrast to the other three types of deserts, " +
                    '<input type="text" class="gap-inp" id="gap-3" autocomplete="off" spellcheck="false" aria-label="Gap 3" />' +
                    " do not experience extremely high or low temperatures.",
            },
            {
                n: 4,
                html:
                    "She describes the sand dunes outside of Merzouga as " +
                    '<input type="text" class="gap-inp" id="gap-4a" autocomplete="off" spellcheck="false" aria-label="Gap 4 first word" />' +
                    " and " +
                    '<input type="text" class="gap-inp" id="gap-4b" autocomplete="off" spellcheck="false" aria-label="Gap 4 second word" />' +
                    ".",
            },
            {
                n: 5,
                html:
                    "The writer recommends wearing long trousers to protect you, especially from " +
                    '<input type="text" class="gap-inp" id="gap-5" autocomplete="off" spellcheck="false" aria-label="Gap 5" />' +
                    ".",
            },
            {
                n: 6,
                html:
                    "She says that taking numerous " +
                    '<input type="text" class="gap-inp" id="gap-6" autocomplete="off" spellcheck="false" aria-label="Gap 6" />' +
                    " is the best way to deal with dramatic changes in temperatures.",
            },
            {
                n: 7,
                html:
                    "With the exception of camels, a single " +
                    '<input type="text" class="gap-inp" id="gap-7" autocomplete="off" spellcheck="false" aria-label="Gap 7" />' +
                    " was the only form of desert wildlife the writer had the chance to see up close.",
            },
            {
                n: 8,
                html:
                    "She particularly admires the " +
                    '<input type="text" class="gap-inp" id="gap-8" autocomplete="off" spellcheck="false" aria-label="Gap 8" />' +
                    " of the addax, a type of endangered antelope.",
            },
            {
                n: 9,
                html:
                    "The writer is sceptical of what is called " +
                    '<input type="text" class="gap-inp" id="gap-9" autocomplete="off" spellcheck="false" aria-label="Gap 9" />' +
                    ", which for her represents the wrong way to think about deserts.",
            },
        ],
        gapIds: ["gap-1", "gap-2", "gap-3", "gap-4a", "gap-4b", "gap-5", "gap-6", "gap-7", "gap-8", "gap-9"],
        /** Fill when audio / key are ready */
        answers: null,
    };
})(typeof window !== "undefined" ? window : globalThis);
