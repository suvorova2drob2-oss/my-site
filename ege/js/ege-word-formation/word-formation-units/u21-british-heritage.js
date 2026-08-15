/**
 * Word Formation Exam · Unit 21 · British heritage (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u21-british-heritage",
    unitOrder: 21,
    title: "Unit 21 · British heritage",
    examSection: "§25–29",
    headerTitle: "British heritage",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "London is one of the most popular tourist destinations. Millions of people visit it every year because they want to see its famous sights and learn more about British ",
        afterInline: " traditions.",
        afterTail: "",
        cue: "CULTURE",
        answers: ["cultural"],
        keyShow: "cultural",
        formationTag: "CULTURE → -al · прилагательное",
        plainRu:
          "«Британские <strong>культурные</strong> традиции» → прилагательное <em>cultural</em>, не само слово culture.",
        explainRu:
          "После <em>British</em> перед <em>traditions</em> нужно прилагательное. CULTURE → <em>cultural</em> (-al).",
        explainOkRu:
          "<em>Cultural traditions</em> = «культурные традиции». Слово <strong>изменилось</strong>.",
        explainWrongRu:
          "Голый <em>culture</em> — существительное. Здесь «какие традиции?» → <em>cultural</em>.",
        examplesRu: [
          "✓ British <em>cultural</em> heritage — «культурное наследие».",
          "✓ CULTURE → <em>cultural</em> (как nature → natural).",
          "✗ British <em>culture</em> traditions. — два существительных подряд так не ставят."
        ],
        wrongIf: [
          {
            includes: "culture",
            hintRu:
              "CULTURE нельзя вставить как есть. Нужно прилагательное <em>cultural</em>."
          },
          {
            includes: "culturally",
            hintRu:
              "<em>Culturally</em> — наречие; перед <em>traditions</em> → <em>cultural</em>."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before: "The ",
        afterInline: " of tourism has changed the city centre.",
        afterTail: "",
        cue: "DEVELOP",
        answers: ["development"],
        keyShow: "development",
        formationTag: "DEVELOP → -ment · существительное",
        plainRu:
          "«<strong>Развитие</strong> туризма» → существительное <em>development</em>.",
        explainRu:
          "После <em>The</em> нужно существительное. DEVELOP + <strong>-ment</strong> = <em>development</em>.",
        explainOkRu:
          "<em>The development of tourism</em> = «развитие туризма».",
        explainWrongRu:
          "Глагол <em>develop</em> после <em>The</em> не ставят.",
        examplesRu: [
          "✓ the <em>development</em> of new technologies",
          "✓ DEVELOP → <em>development</em>",
          "✗ The <em>develop</em> of tourism. — нужно существительное."
        ],
        wrongIf: [
          {
            includes: "develop",
            hintRu: "После <em>The</em> — сущ. <em>development</em>, не глагол."
          },
          {
            includes: "developed",
            hintRu: "<em>Developed</em> — прилаг./V3; здесь сущ. <em>development</em>."
          },
          {
            includes: "developing",
            hintRu: "Нужно существительное <em>development</em>."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before: "It was a very ",
        afterInline: " project for the whole team.",
        afterTail: "",
        cue: "SUCCESS",
        answers: ["successful"],
        keyShow: "successful",
        formationTag: "SUCCESS → -ful · прилагательное",
        plainRu:
          "«Очень <strong>успешный</strong> проект» → <em>successful</em>.",
        explainRu:
          "После <em>very</em> — прилагательное. SUCCESS + <strong>-ful</strong> = <em>successful</em>.",
        explainOkRu:
          "<em>A very successful project</em> = «очень успешный проект».",
        explainWrongRu:
          "<em>Success</em> — существительное; после <em>very</em> нужно прилагательное.",
        examplesRu: [
          "✓ a <em>successful</em> exam",
          "✓ SUCCESS → <em>successful</em> (как help → helpful)",
          "✗ a very <em>success</em> project"
        ],
        wrongIf: [
          {
            includes: "success",
            hintRu: "SUCCESS — сущ.; «успешный» → <em>successful</em>."
          },
          {
            includes: "successfully",
            hintRu: "Наречие не перед <em>project</em> → <em>successful</em>."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before: "The guide gave us some useful ",
        afterInline: " about the museum.",
        afterTail: "",
        cue: "INFORM",
        answers: ["information"],
        keyShow: "information",
        formationTag: "INFORM → -ation · существительное",
        plainRu:
          "«Полезная <strong>информация</strong>» → <em>information</em> (без -s).",
        explainRu:
          "После <em>some useful</em> — существительное. INFORM → <em>information</em>. Это uncountable: не <em>informations</em>.",
        explainOkRu:
          "<em>Useful information</em> = «полезная информация».",
        explainWrongRu:
          "Глагол <em>inform</em> сюда не подходит; мн. ч. <em>informations</em> в английском нет.",
        examplesRu: [
          "✓ some useful <em>information</em>",
          "✓ INFORM → <em>information</em>",
          "✗ some useful <em>informations</em> — так не говорят."
        ],
        wrongIf: [
          {
            includes: "inform",
            hintRu: "Нужно существительное <em>information</em>."
          },
          {
            includes: "informations",
            hintRu: "<em>Information</em> неисчисляемое — без -s."
          },
          {
            includes: "informative",
            hintRu: "Прилаг. <em>informative</em> не после <em>some useful</em> → <em>information</em>."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before: "Pollution is becoming a serious ",
        afterInline: " problem.",
        afterTail: "",
        cue: "ENVIRONMENT",
        answers: ["environmental"],
        keyShow: "environmental",
        formationTag: "ENVIRONMENT → -al · прилагательное",
        plainRu:
          "«Серьёзная <strong>экологическая</strong> проблема» → <em>environmental</em>.",
        explainRu:
          "Перед <em>problem</em> — прилагательное. ENVIRONMENT → <em>environmental</em> (-al).",
        explainOkRu:
          "<em>Environmental problem</em> = «экологическая проблема».",
        explainWrongRu:
          "Голый <em>environment</em> — существительное. «Какая проблема?» → <em>environmental</em>.",
        examplesRu: [
          "✓ an <em>environmental</em> issue",
          "✓ ENVIRONMENT → <em>environmental</em>",
          "✗ a serious <em>environment</em> problem"
        ],
        wrongIf: [
          {
            includes: "environment",
            hintRu: "Нужно прилагательное <em>environmental</em>, не сущ."
          },
          {
            includes: "environmentally",
            hintRu: "Наречие не перед <em>problem</em> → <em>environmental</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>§25–29:</strong> слово справа почти всегда <strong>меняется</strong> (суффикс / приставка). CULTURE → <em>cultural</em>, не culture.</p>" +
      "<p>Смотри соседей: <em>the … of</em> → сущ.; <em>very / British / serious</em> → прилаг.</p>"
  });
})(typeof window !== "undefined" ? window : this);
