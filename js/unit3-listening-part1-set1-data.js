/**
 * Unit 3 · CPE Listening Part 1 — Set 1 (Track 3.3, three extracts, questions 1–6).
 * Audio + answer key to be added later.
 */
(function (W) {
  "use strict";

  var boot = W.__CPE_LISTENING_P1_MC__;
  if (!boot || !Array.isArray(boot.units)) return;

  boot.units.push({
    id: "u3_listen_p1_set1",
    trackLabel: "Track 3.3",
    audioSrc: "",
    instructionHtml:
      "You will hear <strong>three different extracts</strong>. For questions <strong>1\u20136</strong>, choose the answer (<strong>A</strong>, <strong>B</strong> or <strong>C</strong>) which fits best according to what you hear. There are two questions for each extract.",
    extracts: [
      {
        id: "ext1",
        context:
          "You hear part of an interview with a university professor talking about blended learning \u2013 courses that combine online and face-to-face learning.",
        questions: [
          {
            num: 1,
            prompt: "What observation does Professor Yavuz make about her students?",
            choices: [
              { letter: "A", text: "They responded well to her innovative approach." },
              { letter: "B", text: "They had a surprisingly self-directed learning style." },
              { letter: "C", text: "They felt the format of the course was out of date." },
            ],
          },
          {
            num: 2,
            prompt:
              "Professor Yavuz says that one of the advantages of blended learning is",
            choices: [
              { letter: "A", text: "creating more in-class learning opportunities." },
              { letter: "B", text: "letting students progress at their own pace." },
              { letter: "C", text: "giving students greater choice in how they learn." },
            ],
          },
        ],
      },
      {
        id: "ext2",
        context: "You hear a woman on a business podcast talking about spreadsheets.",
        questions: [
          {
            num: 3,
            prompt: "What does she say about the invention of the electronic spreadsheet?",
            choices: [
              {
                letter: "A",
                text: "It allowed people to categorise data in a logical format.",
              },
              {
                letter: "B",
                text: "It laid the foundation for a revolution in office work.",
              },
              {
                letter: "C",
                text: "It shifted workers from one economic sector to another.",
              },
            ],
          },
          {
            num: 4,
            prompt: "What is her attitude now towards spreadsheets?",
            choices: [
              { letter: "A", text: "Their merits have been overemphasised." },
              { letter: "B", text: "They magnify human error to a dramatic scale." },
              { letter: "C", text: "They are stretched beyond their limits." },
            ],
          },
        ],
      },
      {
        id: "ext3",
        context:
          "You hear a tour guide at a planetarium talking about how an animal inspired the design of a telescope.",
        questions: [
          {
            num: 5,
            prompt: "Why does he mention the lobster\u2019s habitat?",
            choices: [
              { letter: "A", text: "to point out a key vulnerability" },
              { letter: "B", text: "to highlight a creative adaptation" },
              { letter: "C", text: "to illustrate its ability to face adversity" },
            ],
          },
          {
            num: 6,
            prompt: "When the speaker talks about the telescope, he reveals",
            choices: [
              { letter: "A", text: "his admiration for human ingenuity." },
              { letter: "B", text: "his delight in newly made observations." },
              { letter: "C", text: "his confidence in the technology\u2019s potential." },
            ],
          },
        ],
      },
    ],
  });
})(typeof window !== "undefined" ? window : globalThis);
