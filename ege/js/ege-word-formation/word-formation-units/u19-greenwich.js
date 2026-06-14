/**
 * Word Formation Exam · Unit 19 · Greenwich (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u19-greenwich",
    unitOrder: 19,
    title: "Unit 19 · Greenwich",
    examSection: "§25–29",
    headerTitle: "Greenwich — where time begins",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "There are plenty of things to fill a day in Greenwich. The tall masts of the large ship greet everyone on the river front. A visit to the ship gives an insight into the ",
        afterInline:
          " days of sail as she opened the tea and wool routes to England.",
        afterTail: "",
        cue: "GLORY",
        answers: ["glorious"],
        keyShow: "glorious",
        formationTag: "GLORY → -ous · прилагательное",
        plainRu:
          "«<strong>Славные</strong> дни парусного флота» → <em>glorious</em>.",
        explainRu:
          "Перед <em>days</em> — прилагательное: GLORY → <em>glorious</em> (-ous).",
        explainOkRu:
          "<em>Glorious</em> = «славный, великолепный».",
        explainWrongRu:
          "<em>Glory</em> (сущ.) перед <em>days</em> не ставят.",
        examplesRu: [
          "✓ the <em>glorious</em> days of sail.",
          "✓ GLORY → <em>glorious</em> (-ous).",
          "✗ …the <em>glory</em> days… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "glory",
            hintRu:
              "GLORY — сущ.; «славные дни» → <em>glorious</em>."
          },
          {
            includes: "gloriously",
            hintRu:
              "<em>Gloriously</em> — наречие; нужно прилаг."
          },
          {
            includes: "gloriousness",
            hintRu:
              "<em>Gloriousness</em> — сущ.; нужно прилаг."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "The ship also displays a unique collection of different sea objects connected with the long sailing history of the country. The National Maritime Museum, situated in a fine classical ",
        afterInline: ", also presents an excellent exhibition about Nelson.",
        afterTail: "",
        cue: "BUILD",
        answers: ["building"],
        keyShow: "building",
        formationTag: "BUILD → -ing · существительное",
        plainRu:
          "«В прекрасном классическом <strong>здании</strong>» → <em>building</em>.",
        explainRu:
          "После <em>classical</em> — существительное: BUILD → <em>building</em> (-ing).",
        explainOkRu:
          "<em>Building</em> = «здание».",
        explainWrongRu:
          "<em>Build</em> (глагол) или <em>built</em> (причастие) после <em>classical</em> не подходят.",
        examplesRu: [
          "✓ in a fine classical <em>building</em>.",
          "✓ BUILD → <em>building</em> (-ing).",
          "✗ …classical <em>build</em>… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "build",
            hintRu:
              "BUILD — глагол; «здание» → <em>building</em>."
          },
          {
            includes: "built",
            hintRu:
              "Причастие; нужно сущ. <em>building</em>."
          },
          {
            includes: "builder",
            hintRu:
              "<em>Builder</em> = «строитель» — не то."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "Not very far away is the Greenwich Tourist Office where numerous visitors can get all the ",
        afterInline:
          " they might need about the town including advice on other places to see, accommodation and restaurants. Tourists can buy postcards or a book for local guided walk here as well. The covered Market situated nearby is always busy at weekends and is surrounded by brightly decorated antique and souvenir shops.",
        afterTail: "",
        cue: "INFORM",
        answers: ["information"],
        keyShow: "information",
        formationTag: "INFORM → -ation · неисчисл. сущ.",
        plainRu:
          "«Вся <strong>информация</strong>, которая может понадобиться» → <em>information</em>.",
        explainRu:
          "После <em>all the</em> — существительное: INFORM → <em>information</em> (-ation), обычно без мн. ч.",
        explainOkRu:
          "<em>Information</em> = «информация» (неисчисл.).",
        explainWrongRu:
          "<em>Inform</em> (глагол) или <em>informative</em> (прилаг.) после <em>all the</em> не подходят.",
        examplesRu: [
          "✓ all the <em>information</em> they need.",
          "✓ INFORM → <em>information</em> (-ation).",
          "✗ …all the <em>inform</em>… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "inform",
            hintRu:
              "INFORM — глагол; «информация» → <em>information</em>."
          },
          {
            includes: "informative",
            hintRu:
              "<em>Informative</em> — прилаг.; нужно сущ."
          },
          {
            includes: "informations",
            hintRu:
              "<em>Information</em> обычно без -s."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "Moving towards the park everyone can ",
        afterInline:
          " find the way to the Old Royal Observatory famous for its 1 o'clock time ball and Greenwich Time Signal. Here are the remarkable telescopes and clocks that made Greenwich the centre of world time.",
        afterTail: "",
        cue: "EASY",
        answers: ["easily"],
        keyShow: "easily",
        formationTag: "EASY → -ily · наречие",
        plainRu:
          "«<strong>Легко</strong> найти дорогу» → <em>easily</em>.",
        explainRu:
          "Модификатор глагола <em>find</em>: EASY → <em>easily</em> (-ily).",
        explainOkRu:
          "<em>Easily</em> = «легко, без труда».",
        explainWrongRu:
          "<em>Easy</em> (прилаг.) не модифицирует <em>find</em> напрямую.",
        examplesRu: [
          "✓ can <em>easily</em> find the way.",
          "✓ EASY → <em>easily</em> (-ily).",
          "✗ …can <em>easy</em> find… — нужно наречие."
        ],
        wrongIf: [
          {
            includes: "easy",
            hintRu:
              "EASY — прилаг.; к <em>find</em> → <em>easily</em>."
          },
          {
            includes: "easier",
            hintRu:
              "Сравнительная не нужна → <em>easily</em>."
          },
          {
            includes: "ease",
            hintRu:
              "<em>Ease</em> — сущ.; нужно наречие."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "Choosing a souvenir is not a problem in Greenwich. Gift shops at the Old Royal Observatory and the National Maritime Museum have many ",
        afterInline:
          " trifles to remind you of Greenwich attractions.",
        afterTail: "",
        cue: "USUAL",
        answers: ["unusual"],
        keyShow: "unusual",
        formationTag: "USUAL → un- · прилагательное",
        plainRu:
          "«Много <strong>необычных</strong> безделушек» → <em>unusual</em>.",
        explainRu:
          "Перед <em>trifles</em> — прилагательное: USUAL + <strong>un-</strong> = «необычные сувениры».",
        explainOkRu:
          "<em>Unusual</em> = «необычный».",
        explainWrongRu:
          "<em>Usual</em> (= «обычные») слабее для подарков-«trifles» в туристическом контексте; типичный ответ — <em>unusual</em>.",
        examplesRu: [
          "✓ many <em>unusual</em> trifles / souvenirs.",
          "✓ USUAL → <em>unusual</em> (un-).",
          "✗ …many <em>usual</em> trifles… — часто нужен un-."
        ],
        wrongIf: [
          {
            includes: "usual",
            hintRu:
              "Сувениры «на память» → чаще <em>unusual</em>, не <em>usual</em>."
          },
          {
            includes: "usually",
            hintRu:
              "<em>Usually</em> — наречие; нужно прилаг."
          },
          {
            includes: "unusually",
            hintRu:
              "<em>Unusually</em> — наречие; перед <em>trifles</em> → <em>unusual</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Greenwich:</strong> -ous (<em>glorious</em>), -ing сущ. (<em>building</em>), -ation (<em>information</em>), -ily (<em>easily</em>), un- (<em>unusual</em>).</p>" +
      "<p><em>all the … they need</em> — существительное. К глаголу <em>find</em> — наречие.</p>"
  });
})(typeof window !== "undefined" ? window : this);
