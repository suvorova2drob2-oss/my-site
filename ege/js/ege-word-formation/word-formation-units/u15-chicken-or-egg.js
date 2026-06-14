/**
 * Word Formation Exam · Unit 15 · The 'Chicken or Egg' question (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u15-chicken-or-egg",
    unitOrder: 15,
    title: "Unit 15 · Chicken or Egg",
    examSection: "§25–29",
    headerTitle: "The 'Chicken or Egg' question",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "Which came first, the chicken or the egg? Believe it or not, this question has its roots in ancient Greece, where ",
        afterInline:
          " used it as an excuse to argue about cause and effect.",
        afterTail: "",
        cue: "PHILOSOPHY",
        answers: ["philosophers"],
        keyShow: "philosophers",
        formationTag: "PHILOSOPHY → -er · мн. ч.",
        plainRu:
          "«<strong>Философы</strong> древней Греции» → <em>philosophers</em>.",
        explainRu:
          "Подлежащее глагола <em>used</em>: PHILOSOPHY → <em>philosopher</em> → мн. ч. <em>philosophers</em>.",
        explainOkRu:
          "<em>Philosophers</em> = «философы».",
        explainWrongRu:
          "<em>Philosophy</em> (наука) не может «использовать» вопрос как люди.",
        examplesRu: [
          "✓ where <em>philosophers</em> used it…",
          "✓ PHILOSOPHY → <em>philosopher</em> → <em>philosophers</em>.",
          "✗ …where <em>philosophy</em> used it… — нужны люди."
        ],
        wrongIf: [
          {
            includes: "philosophy",
            hintRu:
              "PHILOSOPHY = «философия»; кто спорил → <em>philosophers</em>."
          },
          {
            includes: "philosophical",
            hintRu:
              "<em>Philosophical</em> — прилаг.; нужно сущ. «люди»."
          },
          {
            includes: "philosopher",
            hintRu:
              "Не один → мн. ч. <em>philosophers</em>."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "Some might say the chicken came first. Others may ",
        afterInline:
          " that the egg came first since all chickens begin life inside of an egg. The question has a rather simple answer if you talk to an ancient egg expert. Basically, the egg is much older than the chicken.",
        afterTail: "",
        cue: "AGREE",
        answers: ["disagree"],
        keyShow: "disagree",
        formationTag: "AGREE → dis- · глагол",
        plainRu:
          "«Другие могут <strong>не согласиться</strong>» → <em>disagree</em>.",
        explainRu:
          "После <em>may</em> — глагол: контраст «Some say … Others …» → AGREE + <strong>dis-</strong> = <em>disagree</em>.",
        explainOkRu:
          "<em>Disagree</em> = «не соглашаться»; <em>disagree that</em>.",
        explainWrongRu:
          "<em>Agree</em> (= «согласиться») противоречит «Some … chicken first» vs «Others … egg first».",
        examplesRu: [
          "✓ Others may <em>disagree</em> that…",
          "✓ AGREE → <em>disagree</em> (dis-).",
          "✗ Others may <em>agree</em> that the egg came first… — смысл другой."
        ],
        wrongIf: [
          {
            includes: "agree",
            hintRu:
              "Контраст двух мнений → <em>disagree</em>, не <em>agree</em>."
          },
          {
            includes: "agreement",
            hintRu:
              "<em>Agreement</em> — сущ.; после <em>may</em> → глагол."
          },
          {
            includes: "disagreement",
            hintRu:
              "<em>Disagreement</em> — сущ.; нужен глагол <em>disagree</em>."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "Chickens probably were kept by people starting about 10,000 years ago. The animals they come from are known as jungle chicken and date back 21 million years. ",
        afterInline: ", right?",
        afterTail: "",
        cue: "BELIEVE",
        answers: ["unbelievable"],
        keyShow: "Unbelievable",
        formationTag: "BELIEVE → un- + -able · прилагательное",
        plainRu:
          "«<strong>Невероятно</strong>, правда?» → <em>Unbelievable</em>.",
        explainRu:
          "Вводное прилаг. + <em>, right?</em>: BELIEVE → <em>unbelievable</em> (un- + -able); 21 млн лет — wow.",
        explainOkRu:
          "<em>Unbelievable</em> = «невероятный»; разговорное «Unbelievable, right?»",
        explainWrongRu:
          "<em>Believe</em> (глагол) или <em>believable</em> («правдоподобно») не подходят к «21 million years».",
        examplesRu: [
          "✓ <em>Unbelievable</em>, right?",
          "✓ BELIEVE → <em>unbelievable</em> (un- + -able).",
          "✗ <em>Believe</em>, right? — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "believe",
            hintRu:
              "BELIEVE — глагол; восклицание → <em>unbelievable</em>."
          },
          {
            includes: "believable",
            hintRu:
              "21 млн лет — скорее «невероятно» → <em>unbelievable</em>."
          },
          {
            includes: "belief",
            hintRu:
              "<em>Belief</em> — сущ.; нужно прилаг. <em>unbelievable</em>."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "The earliest eggs were soft, sort of like turtle or echidna eggs you might see on the beach. The harder ",
        afterInline: " shell came later.",
        afterTail: "",
        cue: "PROTECT",
        answers: ["protective"],
        keyShow: "protective",
        formationTag: "PROTECT → -ive · прилагательное",
        plainRu:
          "«Более твёрдая <strong>защитная</strong> скорлупа» → <em>protective</em>.",
        explainRu:
          "Перед <em>shell</em> — прилагательное: PROTECT → <em>protective</em> (-ive).",
        explainOkRu:
          "<em>Protective</em> = «защитный»; <em>protective shell</em>.",
        explainWrongRu:
          "<em>Protect</em> (глагол) или <em>protection</em> (сущ.) перед <em>shell</em> не ставят.",
        examplesRu: [
          "✓ a harder <em>protective</em> shell.",
          "✓ PROTECT → <em>protective</em> (-ive).",
          "✗ …harder <em>protect</em> shell… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "protect",
            hintRu:
              "PROTECT — глагол; «защитная» → <em>protective</em>."
          },
          {
            includes: "protection",
            hintRu:
              "<em>Protection</em> — сущ.; нужно прилаг."
          },
          {
            includes: "protected",
            hintRu:
              "<em>Protected</em> = «защищённый» — другой оттенок."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "By the way, egg-laying is part of our evolutionary ",
        afterInline:
          ". In other words, if you go back far enough in time, humans have ancestors that would have laid eggs. Now, here's a question for you — which came first, the egg or the echidna?",
        afterTail: "",
        cue: "DEVELOP",
        answers: ["development"],
        keyShow: "development",
        formationTag: "DEVELOP → -ment · существительное",
        plainRu:
          "«Часть нашего эволюционного <strong>развития</strong>» → <em>development</em>.",
        explainRu:
          "После <em>evolutionary</em> — существительное: DEVELOP → <em>development</em> (-ment).",
        explainOkRu:
          "<em>Development</em> = «развитие»; <em>evolutionary development</em>.",
        explainWrongRu:
          "<em>Develop</em> (глагол) или <em>developing</em> (причастие) после <em>part of our evolutionary</em> не подходят.",
        examplesRu: [
          "✓ part of our evolutionary <em>development</em>.",
          "✓ DEVELOP → <em>development</em> (-ment).",
          "✗ …evolutionary <em>develop</em>. — нужно сущ."
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
              "Gerund/причастие; нужно <em>development</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Chicken or Egg:</strong> -er (<em>philosophers</em>), dis- (<em>disagree</em>), un- + -able (<em>unbelievable</em>), -ive (<em>protective</em>), -ment (<em>development</em>).</p>" +
      "<p>Если <em>Some … Others …</em> — часто dis- от AGREE. Восклицание + <em>, right?</em> — прилаг. с un-.</p>"
  });
})(typeof window !== "undefined" ? window : this);
