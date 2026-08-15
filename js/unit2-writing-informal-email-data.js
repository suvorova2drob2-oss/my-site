/**
 * Unit 2 FCE — Writing Part 2 Informal email (Benny / Katie / Tomoko)
 * High Energy · coursebook text verbatim.
 */
(function (W) {
  "use strict";

  W.U2_WRITING_INFORMAL_EMAIL = {
    title: "Writing Part 2 — Informal email",
    wordLimit: "140–190 words",

    benny: {
      from: "Benny",
      body:
        "I can\u2019t wait for your visit to Dublin. Will you be here long with your band?\n\nWhen will you be free? Is there anything you want to do while you\u2019re here?\n\nAnyway, let me know and I\u2019ll try to organise some things.",
      closing: "Lots of love",
      signOff: "Benny",
    },

    ex1Questions: [
      "Does the letter address all of the questions in the task?",
      "Is the letter organised in a logical manner?",
      "Is the register suitable for the task?",
    ],

    katieMeta: {
      to: "Benny Ash",
      subject: "I\u2019ll be coming over",
    },

    /**
     * Katie model — formal phrases marked 1–8 (book Ex. 1–2).
     * { m: 1–8 } = highlighted formal phrase, { t: plain text }.
     */
    katieSegments: [
      { m: 1 },
      { t: "\nHow are you? " },
      { m: 2 },
      { t: " It was great to hear from you.\nYou\u2019re right, I\u2019ll be in Dublin this summer for a week, so it would be fun to hang out. " },
      { m: 3 },
      { t: " I\u2019ve only been there once so I don\u2019t have a clue.\nI\u2019ll be coming over to do some concerts with my town band so I won\u2019t be free in the afternoons. " },
      { m: 4 },
      { t: " I\u2019d love to go to one of the venues where they play traditional Irish music. Is there one you go to?\n" },
      { m: 5 },
      { t: " I\u2019ll have to go souvenir shopping at some point as well. I know you hate that kind of thing so just point me in the right direction and I\u2019ll go by myself.\nAnyway, " },
      { m: 6 },
      { t: " and tell them I can\u2019t wait to see them again. Let your sister know I\u2019ll bring some chocolate for her.\n" },
      { m: 7 },
      { t: "\n" },
      { m: 8 },
      { t: "\nKatie" },
    ],

    formalPhrases: {
      1: "Dear Mr Benny Ash",
      2: "Thank you very much for your letter which I received on 28th June.",
      3: "I would appreciate it if you could recommend a place where we could meet.",
      4: "The evening would be a convenient time to meet, however.",
      5: "Incidentally,",
      6: "please pass on my regards to your family",
      7: "I look forward to your prompt reply.",
      8: "Yours sincerely",
    },

    informalOptions: [
      { id: "a", text: "By the way," },
      { id: "b", text: "Dear Benny," },
      { id: "c", text: "But I\u2019m around in the evenings." },
      { id: "d", text: "Lots of love" },
      { id: "e", text: "Write to me soon." },
      { id: "f", text: "Where\u2019s a good place to meet?" },
      { id: "g", text: "Thanks for your email." },
      { id: "h", text: "Please say hi to your family." },
    ],

    /** Formal phrase number → informal option id */
    registerKeys: {
      1: "b",
      2: "g",
      3: "f",
      4: "c",
      5: "a",
      6: "h",
      7: "e",
      8: "d",
    },

    tomoko: {
      from: "Tomoko",
      body:
        "It\u2019s going to be great when we meet. We\u2019ve got a whole week! Can you let me know if there\u2019s something new and exciting we can try? I know you\u2019re into dangerous stuff like me.",
      closing: "Lots of love",
      signOff: "Tomoko",
    },

    writePrompt:
      "Write an answer to the task below. Write your answer in 140\u2013190 words in an appropriate style.",

    dontForget:
      "Write your answer using logical paragraphs, a variety of linking devices and a range of language.",

    howTo: [
      {
        main: "Answer Tomoko\u2019s questions: confirm the week together and suggest something new and exciting (and a bit dangerous) to try.",
      },
      {
        main: "Use an informal email style \u2014 borrow useful phrases from the register exercise (e.g. Thanks for your email, By the way, Write to me soon).",
      },
      {
        main: "Plan logical paragraphs: opening + plans + closing.",
        note: "Target 140\u2013190 words.",
      },
    ],
  };
})(window);
