/**
 * Word Formation Exam · Unit 5 · Bonds of friendship (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u5-bonds-of-friendship",
    unitOrder: 5,
    title: "Unit 5 · Bonds of friendship",
    examSection: "§25–29",
    headerTitle: "Bonds of friendship",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "It's not easy to form a close friendship. ",
        afterInline:
          " communication is the key to understanding each other's needs and feelings.",
        afterTail: "",
        cue: "EFFECT",
        answers: ["effective"],
        keyShow: "effective",
        formationTag: "EFFECT → -ive · прилагательное",
        plainRu:
          "«<strong>Эффективное</strong> общение» → <em>effective</em> от EFFECT.",
        explainRu:
          "Перед <em>communication</em> — прилагательное: EFFECT → <em>effective</em> (-ive).",
        explainOkRu:
          "<em>Effective</em> = «действенный, эффективный».",
        explainWrongRu:
          "<em>Effect</em> (сущ.) или <em>effectively</em> (наречие) перед <em>communication</em> не ставят.",
        examplesRu: [
          "✓ <em>effective</em> communication.",
          "✓ EFFECT → <em>effective</em> (-ive).",
          "✗ …<em>effect</em> communication… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "effect",
            hintRu:
              "EFFECT — сущ.; перед <em>communication</em> → <em>effective</em>."
          },
          {
            includes: "effectively",
            hintRu:
              "<em>Effectively</em> — наречие; нужно прилаг. <em>effective</em>."
          },
          {
            includes: "effectiveness",
            hintRu:
              "<em>Effectiveness</em> — сущ.; нужно прилаг. <em>effective</em>."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "Make sure to express your thoughts and emotions ",
        afterInline: ".",
        afterTail: "",
        cue: "OPEN",
        answers: ["openly"],
        keyShow: "openly",
        formationTag: "OPEN → -ly · наречие",
        plainRu:
          "«Выражать мысли <strong>открыто</strong>» → наречие <em>openly</em>.",
        explainRu:
          "Глагол <em>express</em> + наречие: OPEN → <em>openly</em> (-ly).",
        explainOkRu:
          "<em>Openly</em> = «открыто, прямо».",
        explainWrongRu:
          "<em>Open</em> (прилаг.) напрямую не модифицирует глагол; нужно -ly.",
        examplesRu: [
          "✓ express feelings <em>openly</em>.",
          "✓ OPEN → <em>openly</em> (как quick → quickly).",
          "✗ …express … <em>open</em>. — нужно наречие."
        ],
        wrongIf: [
          {
            includes: "open",
            hintRu:
              "OPEN — прилаг.; после <em>express</em> → <em>openly</em>."
          },
          {
            includes: "opening",
            hintRu:
              "Gerund «открывая» — не то; нужно <em>openly</em>."
          },
          {
            includes: "openness",
            hintRu:
              "<em>Openness</em> — сущ.; нужно наречие <em>openly</em>."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "Be honest and ",
        afterInline:
          ". Create a safe space for your friend to share their thoughts as well. It will help prevent misunderstandings.",
        afterTail: "",
        cue: "RESPECT",
        answers: ["respectful"],
        keyShow: "respectful",
        formationTag: "RESPECT → -ful · прилагательное",
        plainRu:
          "«Будь честным и <strong>уважительным</strong>» → <em>respectful</em>.",
        explainRu:
          "После <em>Be</em> — прилагательное: <em>honest and respectful</em> (RESPECT + -ful).",
        explainOkRu:
          "<em>Respectful</em> = «уважительный».",
        explainWrongRu:
          "<em>Respect</em> (сущ.) или <em>respectfully</em> (наречие) после <em>Be</em> не подходят.",
        examplesRu: [
          "✓ Be <em>respectful</em> to others.",
          "✓ RESPECT → <em>respectful</em> (-ful).",
          "✗ Be honest and <em>respect</em>. — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "respect",
            hintRu:
              "RESPECT — сущ.; после <em>Be</em> → <em>respectful</em>."
          },
          {
            includes: "respectfully",
            hintRu:
              "<em>Respectfully</em> — наречие; <em>Be … and …</em> → прилаг."
          },
          {
            includes: "respectable",
            hintRu:
              "<em>Respectable</em> = «приличный, респектабельный» — другой оттенок."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "Spending quality time together is crucial for maintaining a strong bond. This doesn't ",
        afterInline:
          " mean much time together; it's about the quality of the time you spend.",
        afterTail: "",
        cue: "NECESSARY",
        answers: ["necessarily"],
        keyShow: "necessarily",
        formationTag: "NECESSARY → -ily · наречие",
        plainRu:
          "«Это <strong>не обязательно</strong> означает…» → <em>necessarily</em>.",
        explainRu:
          "Устойчиво: <em>doesn't necessarily mean</em>. NECESSARY → <em>necessarily</em> (-ily).",
        explainOkRu:
          "<em>Necessarily</em> = «обязательно, непременно»; отрицание = «не обязательно».",
        explainWrongRu:
          "<em>Necessary</em> (прилаг.) между <em>doesn't</em> и <em>mean</em> не ставят.",
        examplesRu: [
          "✓ It doesn't <em>necessarily</em> mean that.",
          "✓ NECESSARY → <em>necessarily</em> (-ily).",
          "✗ …doesn't <em>necessary</em> mean… — нужно наречие."
        ],
        wrongIf: [
          {
            includes: "necessary",
            hintRu:
              "NECESSARY — прилаг.; перед <em>mean</em> → <em>necessarily</em>."
          },
          {
            includes: "necessity",
            hintRu:
              "<em>Necessity</em> — сущ.; нужно наречие <em>necessarily</em>."
          },
          {
            includes: "need",
            hintRu:
              "Другая основа; здесь NECESSARY → <em>necessarily</em>."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "Life is full of ups and downs, and being there for your friend during both good and bad times is vital. Show support by being empathetic, understanding, and patient. Celebrate each other's successes, and provide comfort and ",
        afterInline: " during tough times.",
        afterTail: "",
        cue: "ENCOURAGE",
        answers: ["encouragement"],
        keyShow: "encouragement",
        formationTag: "ENCOURAGE → -ment · существительное",
        plainRu:
          "«Поддержка и <strong>ободрение</strong>» → <em>encouragement</em>.",
        explainRu:
          "После <em>comfort and</em> — существительное: ENCOURAGE → <em>encouragement</em> (-ment).",
        explainOkRu:
          "<em>Encouragement</em> = «поддержка, ободрение».",
        explainWrongRu:
          "<em>Encourage</em> (глагол) или <em>encouraging</em> (прилаг.) после <em>provide</em> + and не подходят.",
        examplesRu: [
          "✓ provide comfort and <em>encouragement</em>.",
          "✓ ENCOURAGE → <em>encouragement</em> (-ment).",
          "✗ …comfort and <em>encourage</em>… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "encourage",
            hintRu:
              "ENCOURAGE — глагол; параллель <em>comfort</em> → <em>encouragement</em>."
          },
          {
            includes: "encouraging",
            hintRu:
              "<em>Encouraging</em> — прилаг.; нужно сущ. <em>encouragement</em>."
          },
          {
            includes: "encouraged",
            hintRu:
              "Причастие не после <em>provide</em> → <em>encouragement</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Bonds of friendship:</strong> -ive (<em>effective</em>), -ly (<em>openly</em>, <em>necessarily</em>), -ful (<em>respectful</em>), -ment (<em>encouragement</em>).</p>" +
      "<p>Между <em>doesn't</em> и <em>mean</em> — почти всегда наречие. После <em>Be</em> и <em>and</em> с прилаг. — ещё одно прилаг.</p>"
  });
})(typeof window !== "undefined" ? window : this);
