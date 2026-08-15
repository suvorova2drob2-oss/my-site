/**
 * Unit 1 FCE — Writing Part 2 Informal letter (Paula / Hugo / Tom)
 * Coursebook text: Ready for B2 First-style Unit 1 Writing (verbatim task letters).
 */
(function (W) {
  "use strict";

  W.U1_WRITING_INFORMAL_LETTER = {
    title: "Writing Part 2 — Informal letter",
    wordLimit: "140–190 words",

    paula: {
      from: "Paula",
      greeting: "",
      body:
        "As you know, this is my last year at school, and I can\u2019t make up my mind what to do when I leave. My parents want me to go to university, but I\u2019d really like to work as a ski instructor. What do you think I should do?",
      closing: "Thanks,",
      signOff: "Paula",
    },

    speakEx1: [
      "What advice would you give Paula and why?",
      "Would you choose university or a year as a ski instructor? Why?",
    ],

    speakEx2: [
      "Read Hugo\u2019s reply (ignore the gaps for now). Do you agree with Hugo\u2019s advice? Why / Why not?",
    ],

    /**
     * Hugo model — gaps 1–6 = linking words (book Ex. 3).
     * Each segment: { t: plain } or { g: gapIndex 0–5 }.
     */
    hugoSegments: [
      { t: "Dear Paula\n\nIt was great to hear from you. You\u2019ve certainly got a difficult choice to make. I know how much you love skiing and I\u2019m sure you\u2019d be a brilliant teacher, " },
      { g: 0 },
      { t: " maybe you should think more carefully about your future.\n\nThe good thing about being a ski instructor is that you could have an exciting lifestyle, working in different countries, meeting lots of interesting people and doing something you really enjoy. The trouble is, though, it\u2019s not very well-paid work, and the career prospects are not fantastic " },
      { g: 1 },
      { t: " \u2013 you might still be in the same job in twenty years\u2019 time.\n\n" },
      { g: 2 },
      { t: ", if you go to university, you\u2019ll have more chance of getting a decent job later. It\u2019ll be great fun " },
      { g: 3 },
      { t: ", especially if you choose a university in a different town and live away from home.\n\n" },
      { g: 4 },
      { t: ", if I were you, I\u2019d do what your parents suggest and study for a degree. You could always work in a ski resort in the holidays \u2013 students get really long breaks!\n\n" },
      { g: 5 },
      { t: ", good luck and let me know what you decide. Looking forward to hearing from you.\n\nAll the best,\nHugo" },
    ],

    linkerBank: [
      "anyway",
      "as well",
      "but",
      "either",
      "on the other hand",
      "so",
    ],

    /** Gap index → accepted answers (lowercase) */
    linkerKeys: [
      ["but"],
      ["either"],
      ["on the other hand"],
      ["as well"],
      ["so"],
      ["anyway"],
    ],

    /**
     * Ex. 4 — match purposes (options bank).
     * Paragraph 1 = example (already matched in the book).
     */
    paragraphPurposes: {
      example:
        "Paragraph 1: To express an initial opinion on the choice that Paula has to make.",
      options: [
        {
          id: "a",
          text: "To discuss the advantages and disadvantages of becoming a ski instructor.",
        },
        {
          id: "b",
          text: "To discuss the advantages of going to university and give advice.",
        },
        {
          id: "c",
          text: "To end the letter in a friendly way and wish her luck.",
        },
        {
          id: "d",
          text: "To ask Paula detailed questions about her skiing ability.",
        },
      ],
      items: [
        { id: "p2", label: "Paragraph 2", key: "a" },
        { id: "p3", label: "Paragraph 3", key: "b" },
        { id: "p4", label: "Paragraph 4", key: "c" },
      ],
    },

    tom: {
      from: "Tom",
      greeting: "Hi",
      body:
        "I\u2019m not sure what to do during the summer holidays next year. My parents want me to help out in the shop they own, but I\u2019d quite like to work in a hotel in your country \u2013 there are plenty of jobs available. What do you think I should do?",
      closing: "Write soon,",
      signOff: "Tom",
    },

    howTo: [
      {
        main: "Plan your answer carefully. For this type of question, list the advantages and disadvantages of each option.",
        note: "Advantages of working in parents\u2019 shop: easy work; live and eat at home \u2026",
      },
      {
        main: "Decide which of these points you will include in your answer and what advice you will give.",
      },
      {
        main: "Write your answer using logical paragraphs, a variety of linking devices, and a range of language.",
        note: "Underline any expressions in Hugo\u2019s reply that you could use in your own letter, e.g. It was great to hear from you.",
        underline: "It was great to hear from you.",
      },
    ],
  };
})(typeof window !== "undefined" ? window : globalThis);
