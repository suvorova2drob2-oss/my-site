/**
 * Word Formation Exam · Unit 8 · The volcanoes of Kamchatka (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u8-volcanoes-of-kamchatka",
    unitOrder: 8,
    title: "Unit 8 · The volcanoes of Kamchatka",
    examSection: "§25–29",
    headerTitle: "The volcanoes of Kamchatka",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "The volcanoes of Kamchatka are a large group of volcanoes situated on the Kamchatka Peninsula, in eastern Russia. The pulsating geysers of Kamchatka were discovered by a local ",
        afterInline: ", Tatyana Ustinova, in 1941.",
        afterTail: "",
        cue: "SCIENCE",
        answers: ["scientist"],
        keyShow: "scientist",
        formationTag: "SCIENCE → -ist · существительное",
        plainRu:
          "«Местный <strong>учёный</strong>» → <em>scientist</em> от SCIENCE.",
        explainRu:
          "После <em>a local</em> — человек: SCIENCE → <em>scientist</em> (-ist).",
        explainOkRu:
          "<em>Scientist</em> = «учёный».",
        explainWrongRu:
          "<em>Science</em> (сущ. «наука») или <em>scientific</em> (прилаг.) после <em>a local</em> не подходят.",
        examplesRu: [
          "✓ a local <em>scientist</em>, Tatyana Ustinova.",
          "✓ SCIENCE → <em>scientist</em> (-ist).",
          "✗ …a local <em>science</em>… — нужно «человек»."
        ],
        wrongIf: [
          {
            includes: "science",
            hintRu:
              "SCIENCE = «наука»; человек → <em>scientist</em>."
          },
          {
            includes: "scientific",
            hintRu:
              "<em>Scientific</em> — прилаг.; нужно сущ. <em>scientist</em>."
          },
          {
            includes: "scientist's",
            hintRu:
              "Притяж. не нужно → <em>scientist</em>."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "The Kamchatka River and the surrounding central side valley are flanked by large volcanic belts containing around 160 volcanoes, 29 of them still ",
        afterInline:
          ". It makes Russia the country with the most volcanoes globally.",
        afterTail: "",
        cue: "ACT",
        answers: ["active"],
        keyShow: "active",
        formationTag: "ACT → -ive · прилагательное",
        plainRu:
          "«29 из них всё ещё <strong>активны</strong>» → <em>active</em>.",
        explainRu:
          "После <em>still</em> — прилагательное: ACT → <em>active</em> (-ive); про действующие вулканы.",
        explainOkRu:
          "<em>Active</em> = «активный (извергающийся)».",
        explainWrongRu:
          "<em>Act</em> (глагол) или <em>activity</em> (сущ.) после <em>still</em> не ставят.",
        examplesRu: [
          "✓ volcanoes still <em>active</em>.",
          "✓ ACT → <em>active</em> (-ive).",
          "✗ …still <em>act</em>. — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "act",
            hintRu:
              "ACT — глагол; «действующие вулканы» → <em>active</em>."
          },
          {
            includes: "activity",
            hintRu:
              "<em>Activity</em> — сущ.; нужно прилаг. <em>active</em>."
          },
          {
            includes: "actively",
            hintRu:
              "<em>Actively</em> — наречие; нужно прилаг. <em>active</em>."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before: "This is ",
        afterInline:
          " one of the most outstanding volcanic regions of the world.",
        afterTail: "",
        cue: "DOUBT",
        answers: ["undoubtedly"],
        keyShow: "undoubtedly",
        formationTag: "DOUBT → un- + -edly · наречие",
        plainRu:
          "«<strong>Без сомнения</strong>, один из лучших регионов» → <em>undoubtedly</em>.",
        explainRu:
          "Модификатор всей фразы: DOUBT → <em>undoubtedly</em> (un- + doubt + -edly).",
        explainOkRu:
          "<em>Undoubtedly</em> = «несомненно, без сомнения».",
        explainWrongRu:
          "<em>Doubt</em> (сущ.) или <em>doubtful</em> (прилаг.) в этой позиции не подходят.",
        examplesRu: [
          "✓ This is <em>undoubtedly</em> the best choice.",
          "✓ DOUBT → <em>undoubtedly</em> (un- + -edly).",
          "✗ This is <em>doubt</em> one of… — нужно наречие."
        ],
        wrongIf: [
          {
            includes: "doubt",
            hintRu:
              "DOUBT — сущ.; «несомненно» → <em>undoubtedly</em>."
          },
          {
            includes: "doubtful",
            hintRu:
              "<em>Doubtful</em> = «сомнительный» — против смысла."
          },
          {
            includes: "doubtless",
            hintRu:
              "<em>Doubtless</em> возможно, но в ЕГЭ чаще <em>undoubtedly</em>."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "Unlike other volcanoes in the world, the volcanoes in Russia have beautiful landscapes that have turned into tourist ",
        afterInline: " centres.",
        afterTail: "",
        cue: "ATTRACT",
        answers: ["attraction"],
        keyShow: "attraction",
        formationTag: "ATTRACT → -ion · существительное",
        plainRu:
          "«Туристические <strong>достопримечательности</strong>» → <em>attraction</em>.",
        explainRu:
          "Составное: <em>tourist attraction centres</em> — ATTRACT → <em>attraction</em> (-ion).",
        explainOkRu:
          "<em>Attraction</em> = «достопримечательность, притягательный объект».",
        explainWrongRu:
          "<em>Attract</em> (глагол) или <em>attractive</em> (прилаг.) перед <em>centres</em> не ставят.",
        examplesRu: [
          "✓ tourist <em>attraction</em> centres.",
          "✓ ATTRACT → <em>attraction</em> (-ion).",
          "✗ …tourist <em>attract</em> centres… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "attract",
            hintRu:
              "ATTRACT — глагол; «достопримечательность» → <em>attraction</em>."
          },
          {
            includes: "attractive",
            hintRu:
              "<em>Attractive</em> — прилаг.; здесь сущ. <em>attraction</em>."
          },
          {
            includes: "attractively",
            hintRu:
              "<em>Attractively</em> — наречие; нужно сущ."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "The landscapes at the base of volcanoes are home to more than a thousand different types of trees making the place ",
        afterInline: " beautiful.",
        afterTail: "",
        cue: "NATURAL",
        answers: ["naturally"],
        keyShow: "naturally",
        formationTag: "NATURAL → -ly · наречие",
        plainRu:
          "«Делают место <strong>естественно</strong> красивым» → <em>naturally</em>.",
        explainRu:
          "Модификатор прилагательного <em>beautiful</em>: NATURAL → <em>naturally</em> (-ly).",
        explainOkRu:
          "<em>Naturally</em> = «естественным образом, по-настоящему».",
        explainWrongRu:
          "<em>Natural</em> (прилаг.) не стоит перед другим прилаг. <em>beautiful</em> напрямую.",
        examplesRu: [
          "✓ making the place <em>naturally</em> beautiful.",
          "✓ NATURAL → <em>naturally</em> (-ly).",
          "✗ …the place <em>natural</em> beautiful… — нужно наречие."
        ],
        wrongIf: [
          {
            includes: "natural",
            hintRu:
              "NATURAL — прилаг.; перед <em>beautiful</em> → <em>naturally</em>."
          },
          {
            includes: "nature",
            hintRu:
              "<em>Nature</em> — сущ.; нужно наречие <em>naturally</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Kamchatka:</strong> -ist (<em>scientist</em>), -ive (<em>active</em>), un- + -edly (<em>undoubtedly</em>), -ion (<em>attraction</em>), -ly (<em>naturally</em>).</p>" +
      "<p>После <em>a local</em> — человек (-ist). Между <em>place</em> и прилаг. — часто наречие.</p>"
  });
})(typeof window !== "undefined" ? window : this);
