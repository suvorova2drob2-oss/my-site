/**
 * Word Formation Exam · Unit 20 · Tavistock (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u20-tavistock",
    unitOrder: 20,
    title: "Unit 20 · Tavistock",
    examSection: "§25–29",
    headerTitle: "Tavistock: Devon at its best",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "Tavistock is situated in the quiet and beautiful valley of the River Tavy on the western slopes of Dartmoor. It is close to the Devon border with Cornwall, standing as the ",
        afterInline:
          " western gateway for more than one thousand years.",
        afterTail: "",
        cue: "IMPRESS",
        answers: ["impressive"],
        keyShow: "impressive",
        formationTag: "IMPRESS → -ive · прилагательное",
        plainRu:
          "«<strong>Внушительные</strong> западные ворота» → <em>impressive</em>.",
        explainRu:
          "Перед <em>western gateway</em> — прилагательное: IMPRESS → <em>impressive</em> (-ive).",
        explainOkRu:
          "<em>Impressive</em> = «внушительный, impressive».",
        explainWrongRu:
          "<em>Impress</em> (глагол) или <em>impression</em> (сущ.) перед <em>gateway</em> не ставят.",
        examplesRu: [
          "✓ the <em>impressive</em> western gateway.",
          "✓ IMPRESS → <em>impressive</em> (-ive).",
          "✗ …the <em>impress</em> western gateway… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "impress",
            hintRu:
              "IMPRESS — глагол; «внушительный» → <em>impressive</em>."
          },
          {
            includes: "impression",
            hintRu:
              "<em>Impression</em> — сущ.; нужно прилаг."
          },
          {
            includes: "impressed",
            hintRu:
              "<em>Impressed</em> = «впечатлённый» — не про ворота."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "In 974 the Benedictine Abbey was founded. From those early years when the great abbey was built to today, Tavistock has seen many ",
        afterInline:
          " events and many outstanding people, such as Sir Francis Drake or John Pym \"father of English democracy\".",
        afterTail: "",
        cue: "FANTASY",
        answers: ["fantastic"],
        keyShow: "fantastic",
        formationTag: "FANTASY → -tic · прилагательное",
        plainRu:
          "«Много <strong>фантастических / выдающихся</strong> событий» → <em>fantastic</em>.",
        explainRu:
          "Перед <em>events</em> — прилагательное: FANTASY → <em>fantastic</em> (-tic).",
        explainOkRu:
          "<em>Fantastic</em> = «фантастический, remarkable».",
        explainWrongRu:
          "<em>Fantasy</em> (сущ.) перед <em>events</em> не ставят.",
        examplesRu: [
          "✓ many <em>fantastic</em> events.",
          "✓ FANTASY → <em>fantastic</em> (-tic).",
          "✗ …many <em>fantasy</em> events… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "fantasy",
            hintRu:
              "FANTASY — сущ.; «удивительные события» → <em>fantastic</em>."
          },
          {
            includes: "fantastically",
            hintRu:
              "<em>Fantastically</em> — наречие; нужно прилаг."
          },
          {
            includes: "fantasize",
            hintRu:
              "<em>Fantasize</em> — глагол; нужно прилаг."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "Tavistock Abbey grew and developed quickly. The Abbey church was ",
        afterInline:
          " big and magnificent. The Abbey was renowned for its wealth, hospitality and learning. The surprising prosperity of the town from wool was such that it was granted a Market Charter from Henry I in 1105. The weekly market still takes place every Friday.",
        afterTail: "",
        cue: "EXTREME",
        answers: ["extremely"],
        keyShow: "extremely",
        formationTag: "EXTREME → -ly · наречие",
        plainRu:
          "«Была <strong>чрезвычайно</strong> большой» → <em>extremely</em>.",
        explainRu:
          "Модификатор прилагательных <em>big and magnificent</em>: EXTREME → <em>extremely</em> (-ly).",
        explainOkRu:
          "<em>Extremely</em> = «чрезвычайно, extremely».",
        explainWrongRu:
          "<em>Extreme</em> (прилаг.) не стоит перед <em>big</em> напрямую в этой конструкции.",
        examplesRu: [
          "✓ was <em>extremely</em> big and magnificent.",
          "✓ EXTREME → <em>extremely</em> (-ly).",
          "✗ …was <em>extreme</em> big… — нужно наречие."
        ],
        wrongIf: [
          {
            includes: "extreme",
            hintRu:
              "EXTREME — прилаг.; перед <em>big</em> → <em>extremely</em>."
          },
          {
            includes: "extremity",
            hintRu:
              "<em>Extremity</em> — сущ.; нужно наречие."
          },
          {
            includes: "extremes",
            hintRu:
              "Мн. ч. «крайности» — не то."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "In 1796 copper was discovered and with this discovery the town started to grow rapidly. Tavistock could be described as the \"Klondyke\" of England of that time. The town was surrounded by mining activity. Tavistock was a very popular attraction for many ",
        afterInline: ".",
        afterTail: "",
        cue: "ADVENTURE",
        answers: ["adventurers"],
        keyShow: "adventurers",
        formationTag: "ADVENTURE → -er · мн. ч.",
        plainRu:
          "«Популярно у многих <strong>искателей приключений</strong>» → <em>adventurers</em>.",
        explainRu:
          "После <em>many</em> — люди: ADVENTURE → <em>adventurer</em> → мн. ч.",
        explainOkRu:
          "<em>Adventurers</em> = «авантюристы, искатели приключений».",
        explainWrongRu:
          "<em>Adventure</em> (сущ.) или <em>adventurous</em> (прилаг.) после <em>many</em> не подходят.",
        examplesRu: [
          "✓ popular for many <em>adventurers</em>.",
          "✓ ADVENTURE → <em>adventurer</em> → <em>adventurers</em>.",
          "✗ …for many <em>adventure</em>. — нужны люди."
        ],
        wrongIf: [
          {
            includes: "adventure",
            hintRu:
              "ADVENTURE — сущ.; «люди» → <em>adventurers</em>."
          },
          {
            includes: "adventurous",
            hintRu:
              "<em>Adventurous</em> — прилаг.; нужны <em>adventurers</em>."
          },
          {
            includes: "adventurer",
            hintRu:
              "Не один → мн. ч. <em>adventurers</em>."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before: "With the ",
        afterInline:
          " of modern society the traditions of Tavistock survive and prosper. It is still a busy market town which serves the community well. The town is also an attractive place for tourists.",
        afterTail: "",
        cue: "DEVELOP",
        answers: ["development"],
        keyShow: "development",
        formationTag: "DEVELOP → -ment · существительное",
        plainRu:
          "«С <strong>развитием</strong> современного общества» → <em>development</em>.",
        explainRu:
          "После <em>With the</em> — существительное: DEVELOP → <em>development</em> (-ment); <em>with the development of</em>.",
        explainOkRu:
          "<em>Development</em> = «развитие».",
        explainWrongRu:
          "<em>Develop</em> (глагол) или <em>developing</em> (причастие) после <em>With the</em> не подходят.",
        examplesRu: [
          "✓ with the <em>development</em> of modern society.",
          "✓ DEVELOP → <em>development</em> (-ment).",
          "✗ …with the <em>develop</em> of… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "develop",
            hintRu:
              "DEVELOP — глагол; «развитие» → <em>development</em>."
          },
          {
            includes: "developed",
            hintRu:
              "<em>Developed</em> — прилаг.; нужно сущ."
          },
          {
            includes: "developing",
            hintRu:
              "Gerund/причастие; <em>With the … of</em> → <em>development</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Tavistock — финал серии:</strong> -ive (<em>impressive</em>), -tic (<em>fantastic</em>), -ly (<em>extremely</em>), -er (<em>adventurers</em>), -ment (<em>development</em>).</p>" +
      "<p><em>With the … of</em> — существительное. Перед двумя прилаг. (<em>big and magnificent</em>) — наречие.</p>"
  });
})(typeof window !== "undefined" ? window : this);
