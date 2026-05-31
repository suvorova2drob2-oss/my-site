/**
 * Word Formation Exam · Unit 16 · River otters (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u16-river-otters",
    unitOrder: 16,
    title: "Unit 16 · River otters",
    examSection: "§25–29",
    headerTitle: "River otters",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "Furry river otters often sound like squeaky toys. They like to fight each other or frolic in the water. Seeing these cute, ",
        afterInline:
          " animals is good fun. It is also good news for the environment.",
        afterTail: "",
        cue: "PLAY",
        answers: ["playful"],
        keyShow: "playful",
        formationTag: "PLAY → -ful · прилагательное",
        plainRu:
          "«Милые <strong>игривые</strong> зверьки» → <em>playful</em>.",
        explainRu:
          "Перед <em>animals</em> — прилагательное: PLAY + <strong>-ful</strong> = <em>playful</em>; frolic in the water.",
        explainOkRu:
          "<em>Playful</em> = «игривый, озорной».",
        explainWrongRu:
          "<em>Play</em> (глагол/сущ.) или <em>playing</em> (gerund) перед <em>animals</em> не ставят.",
        examplesRu: [
          "✓ cute, <em>playful</em> animals.",
          "✓ PLAY → <em>playful</em> (-ful).",
          "✗ …cute, <em>play</em> animals… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "play",
            hintRu:
              "PLAY — глагол; «игривые» → <em>playful</em>."
          },
          {
            includes: "playing",
            hintRu:
              "Gerund; нужно прилаг. <em>playful</em>."
          },
          {
            includes: "playfully",
            hintRu:
              "<em>Playfully</em> — наречие; нужно прилаг."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "The population of otters can indicate how ",
        afterInline:
          " the environment is. The otters experienced a steep drop in numbers in the 1900s.",
        afterTail: "",
        cue: "HEALTH",
        answers: ["healthy"],
        keyShow: "healthy",
        formationTag: "HEALTH → -y · прилагательное",
        plainRu:
          "«Насколько <strong>здорова</strong> среда» → <em>healthy</em>.",
        explainRu:
          "После <em>how</em> — прилагательное: HEALTH + <strong>-y</strong> = <em>healthy</em>.",
        explainOkRu:
          "<em>Healthy</em> = «здоровый (об экологии)».",
        explainWrongRu:
          "<em>Health</em> (сущ.) между <em>how</em> и <em>is</em> не ставят.",
        examplesRu: [
          "✓ how <em>healthy</em> the environment is.",
          "✓ HEALTH → <em>healthy</em> (-y).",
          "✗ …how <em>health</em> the environment is… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "health",
            hintRu:
              "HEALTH — сущ.; <em>how … is</em> → <em>healthy</em>."
          },
          {
            includes: "healthily",
            hintRu:
              "<em>Healthily</em> — наречие; нужно прилаг."
          },
          {
            includes: "healthier",
            hintRu:
              "Сравнительная не нужна → <em>healthy</em>."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "This was because of extensive fur ",
        afterInline:
          " and toxins in the water. They are not considered endangered today, though. Otters look for habitats with clean water and a lot of healthy fish.",
        afterTail: "",
        cue: "HUNT",
        answers: ["hunting"],
        keyShow: "hunting",
        formationTag: "HUNT → -ing · существительное",
        plainRu:
          "«Массовая охота на <strong>мех</strong>» → <em>hunting</em>.",
        explainRu:
          "После <em>fur</em> — существительное: HUNT → <em>hunting</em> (-ing); <em>fur hunting</em>.",
        explainOkRu:
          "<em>Hunting</em> = «охота»; <em>extensive fur hunting</em>.",
        explainWrongRu:
          "<em>Hunt</em> (глагол) или <em>hunters</em> (люди) после <em>fur</em> здесь слабее.",
        examplesRu: [
          "✓ extensive fur <em>hunting</em>.",
          "✓ HUNT → <em>hunting</em> (-ing).",
          "✗ …fur <em>hunt</em> and toxins… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "hunt",
            hintRu:
              "HUNT — глагол; «охота на мех» → <em>hunting</em>."
          },
          {
            includes: "hunter",
            hintRu:
              "<em>Hunter</em> = «охотник»; здесь процесс → <em>hunting</em>."
          },
          {
            includes: "hunted",
            hintRu:
              "Причастие; нужно <em>hunting</em>."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "Researchers look for contaminants and parasites in otter excrement. This helps ",
        afterInline:
          " learn about the health of the surrounding environment and its food sources.",
        afterTail: "",
        cue: "SCIENCE",
        answers: ["scientists"],
        keyShow: "scientists",
        formationTag: "SCIENCE → -ist · мн. ч.",
        plainRu:
          "«Это помогает <strong>учёным</strong> узнать…» → <em>scientists</em>.",
        explainRu:
          "После <em>helps</em> — кто учится: SCIENCE → <em>scientist</em> → мн. ч. <em>scientists learn</em>.",
        explainOkRu:
          "<em>Scientists</em> = «учёные».",
        explainWrongRu:
          "<em>Science</em> (наука) не «learn» — учатся люди.",
        examplesRu: [
          "✓ This helps <em>scientists</em> learn about…",
          "✓ SCIENCE → <em>scientist</em> → <em>scientists</em>.",
          "✗ …helps <em>science</em> learn… — нужны люди."
        ],
        wrongIf: [
          {
            includes: "science",
            hintRu:
              "SCIENCE = «наука»; кто изучает → <em>scientists</em>."
          },
          {
            includes: "scientific",
            hintRu:
              "<em>Scientific</em> — прилаг.; нужны <em>scientists</em>."
          },
          {
            includes: "scientist",
            hintRu:
              "Обычно не один → <em>scientists</em>."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "For example, the Elizabeth River was long considered a \"dead river\" because of ",
        afterInline:
          ". It is now flourishing. As a result, in the past five years, a great many more otters have been seen there.",
        afterTail: "",
        cue: "POLLUTE",
        answers: ["pollution"],
        keyShow: "pollution",
        formationTag: "POLLUTE → -ion · существительное",
        plainRu:
          "«Из‑за <strong>загрязнения</strong>» → <em>pollution</em>.",
        explainRu:
          "После <em>because of</em> — существительное: POLLUTE → <em>pollution</em> (-ion).",
        explainOkRu:
          "<em>Pollution</em> = «загрязнение»; «dead river» из‑за pollution.",
        explainWrongRu:
          "<em>Pollute</em> (глагол) или <em>polluted</em> (прилаг.) после <em>because of</em> не подходят.",
        examplesRu: [
          "✓ because of <em>pollution</em>.",
          "✓ POLLUTE → <em>pollution</em> (-ion).",
          "✗ …because of <em>pollute</em>. — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "pollute",
            hintRu:
              "POLLUTE — глагол; «загрязнение» → <em>pollution</em>."
          },
          {
            includes: "polluted",
            hintRu:
              "<em>Polluted</em> — прилаг.; нужно сущ."
          },
          {
            includes: "polluting",
            hintRu:
              "Gerund; после <em>because of</em> → <em>pollution</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>River otters:</strong> -ful (<em>playful</em>), -y (<em>healthy</em>), -ing сущ. (<em>hunting</em>), -ist (<em>scientists</em>), -ion (<em>pollution</em>).</p>" +
      "<p><em>because of</em> + сущ.; <em>how + adj + is</em> — прилаг., не сущ.</p>"
  });
})(typeof window !== "undefined" ? window : this);
