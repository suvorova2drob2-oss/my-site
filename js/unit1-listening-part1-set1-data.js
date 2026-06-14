/**
 * Unit 1 · CPE Listening Part 1 — Set 1 (three extracts, questions 1–6).
 * Audio + answer key to be added later.
 */
(function (W) {
  "use strict";

  var boot = W.__CPE_LISTENING_P1_MC__;
  if (!boot || !Array.isArray(boot.units)) return;

  boot.units.push({
    id: "u1_listen_p1_set1",
    trackLabel: "Track 1.1",
    audioSrc: "",
    instructionHtml:
      "You will hear <strong>three short extracts</strong>. For questions <strong>1\u20136</strong>, choose the answer (<strong>A</strong>, <strong>B</strong> or <strong>C</strong>) which fits best according to what you hear. There are two questions for each extract.",
    extracts: [
      {
        id: "ext1",
        context:
          "You hear part of an interview with a psychologist called Sandy talking about clothing.",
        questions: [
          {
            num: 1,
            prompt: "According to Sandy, how has our relationship with clothing changed?",
            choices: [
              { letter: "A", text: "It is characterised by increased complexity." },
              { letter: "B", text: "Its connection to tradition has weakened." },
              { letter: "C", text: "It has become heavily influenced by trends." },
            ],
          },
          {
            num: 2,
            prompt: "Sandy says people choose specific clothing brands to",
            choices: [
              { letter: "A", text: "help them stand out from the crowd." },
              { letter: "B", text: "ally themselves with social causes." },
              { letter: "C", text: "reflect their accomplishments." },
            ],
          },
        ],
      },
      {
        id: "ext2",
        context:
          "You hear two friends, a newspaper editor and a dentist, discussing their jobs.",
        questions: [
          {
            num: 3,
            prompt: "What aspect of professional life do they agree on?",
            choices: [
              {
                letter: "A",
                text: "Their work does not satisfy basic psychological needs.",
              },
              {
                letter: "B",
                text: "A healthy work-life balance is not easy to achieve.",
              },
              { letter: "C", text: "People\u2019s attitudes are influenced by their work." },
            ],
          },
          {
            num: 4,
            prompt: "What is the woman doing when she talks about her patients?",
            choices: [
              { letter: "A", text: "questioning their integrity" },
              { letter: "B", text: "condoning their irresponsibility" },
              { letter: "C", text: "criticising their motives" },
            ],
          },
        ],
      },
      {
        id: "ext3",
        context:
          "You hear part of a lecture by an academic who is talking about oral history.",
        questions: [
          {
            num: 5,
            prompt: "Why does the professor tell the story of the circus performer?",
            choices: [
              { letter: "A", text: "to cite a primary source" },
              { letter: "B", text: "to support a prior claim" },
              { letter: "C", text: "to illustrate an important point" },
            ],
          },
          {
            num: 6,
            prompt:
              "What is the professor\u2019s attitude towards the way history is usually taught?",
            choices: [
              { letter: "A", text: "He laments its failure to engage students." },
              { letter: "B", text: "He thinks it leads to mistaken assumptions." },
              { letter: "C", text: "He is concerned about its lack of objectivity." },
            ],
          },
        ],
      },
    ],
  });
})(typeof window !== "undefined" ? window : globalThis);
