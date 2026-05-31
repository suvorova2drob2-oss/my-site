/**
 * Word Formation Exam · Unit 1 · School graduation… What next? (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u1-school-graduation",
    unitOrder: 1,
    title: "Unit 1 · School graduation",
    examSection: "§25–29",
    headerTitle: "School graduation… What next?",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанного заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "Set your goal: think and see what you want. Where do you see yourself in the next five years? Do you want to be a content creator, a presenter, or be a part of the ",
        afterInline: " team?",
        afterTail: "",
        cue: "MANAGE",
        answers: ["management"],
        keyShow: "management",
        formationTag: "MANAGE → -ment · существительное",
        plainRu:
          "«Часть <strong>управленческой / менеджерской</strong> команды» → от MANAGE существительное <em>management</em>.",
        explainRu:
          "После <em>the</em> нужно существительное: <em>the management team</em> = «команда менеджмента».",
        explainOkRu:
          "<em>Management</em> — «управление, менеджмент»; часто в collocations <em>management team</em>.",
        explainWrongRu:
          "MANAGE — глагол; в пропуске нужна <strong>форма с -ment</strong>, не <em>manage</em> или <em>manager</em> (если только «менеджер» — другой смысл).",
        examplesRu: [
          "✓ MANAGE → <em>management</em> (как music → <em>management</em> of a band).",
          "✓ the <em>management team</em> — устойчивое сочетание.",
          "✗ …part of the <em>manage</em> team. — нужно существительное."
        ],
        wrongIf: [
          {
            includes: "manage",
            hintRu:
              "MANAGE — глагол; здесь «команда менеджмента» → <em>management</em>."
          },
          {
            includes: "manager",
            hintRu:
              "<em>Manager</em> = «менеджер» (человек); нужно <em>management</em> (сфера / команда)."
          },
          {
            includes: "managing",
            hintRu:
              "<em>Managing team</em> — редко; в ключе <em>management team</em>."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before: "",
        afterInline: " it and go ahead!",
        afterTail:
          " Don't be under any pressure of choosing the 'best'.",
        cue: "VISUAL",
        answers: ["visualize", "Visualize"],
        keyShow: "Visualize",
        formationTag: "VISUAL → -ize · глагол",
        plainRu:
          "«<strong>Представь</strong> это (в уме) и вперёд!» → глагол от VISUAL: <em>visualize</em>.",
        explainRu:
          "Повелительное настроение: <em>Visualize it and go ahead!</em> — суффикс <strong>-ize</strong> делает глагол.",
        explainOkRu:
          "<em>Visualize</em> = «визуализировать, представить себе».",
        explainWrongRu:
          "<em>Visual</em> — прилагательное; после пропуска идёт <em>it</em> → нужен глагол.",
        examplesRu: [
          "✓ <em>Visualize</em> your goal. — «представь цель».",
          "✓ VISUAL → <em>visualize</em> (как final → finalize).",
          "✗ <em>Visual</em> it and go ahead. — нужен глагол."
        ],
        wrongIf: [
          {
            includes: "visual",
            hintRu:
              "<em>Visual</em> — прилаг.; «представь» → <em>visualize</em>."
          },
          {
            includes: "visually",
            hintRu:
              "<em>Visually</em> — наречие; нужен глагол <em>visualize</em>."
          },
          {
            includes: "vision",
            hintRu:
              "<em>Vision</em> — существ.; здесь глагол от VISUAL."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "It gets ",
        afterInline:
          " when you have pressure to make the best choice. When you are passionate about something, you will never find it boring.",
        afterTail: "",
        cue: "STRESS",
        answers: ["stressful"],
        keyShow: "stressful",
        formationTag: "STRESS → -ful · прилагательное",
        plainRu:
          "«Становится <strong>стрессово / напряжённо</strong>» → прилагательное <em>stressful</em> после <em>gets</em>.",
        explainRu:
          "После <em>It gets</em> нужно прилагательное: <em>stressful</em> = «полный стресса».",
        explainOkRu:
          "<em>Stressful</em> — типичное -ful от STRESS (как helpful от help).",
        explainWrongRu:
          "STRESS (сущ./глагол) или <em>stressed</em> («испытывающий стресс») — другой оттенок.",
        examplesRu: [
          "✓ The job is <em>stressful</em>. — «работа стрессовая».",
          "✓ It gets <em>stressful</em> when… — gets + adj.",
          "✗ It gets <em>stress</em> when… — нужно прилагательное."
        ],
        wrongIf: [
          {
            includes: "stress",
            hintRu:
              "Голый <em>stress</em> — сущ.; после <em>gets</em> → <em>stressful</em>."
          },
          {
            includes: "stressed",
            hintRu:
              "<em>Stressed</em> = «(человек) в стрессе»; ситуация → <em>stressful</em>."
          },
          {
            includes: "stressing",
            hintRu:
              "<em>Stressing</em> — глагол-ing; нужно прилаг. <em>stressful</em>."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "You don't need to give an excuse. The natural focus will be on innovation. You won't go for anything less and that, in turn, will make you more ",
        afterInline: ".",
        afterTail: "",
        cue: "PRODUCT",
        answers: ["productive"],
        keyShow: "productive",
        formationTag: "PRODUCT → -ive · прилагательное",
        plainRu:
          "«Сделает тебя более <strong>продуктивным</strong>» → <em>more productive</em> от PRODUCT.",
        explainRu:
          "После <em>more</em> — прилагательное: PRODUCT → <em>productive</em> (-ive).",
        explainOkRu:
          "<em>Productive</em> = «продуктивный, результативный».",
        explainWrongRu:
          "<em>Product</em> — «продукт»; <em>production</em> — «производство» — не «продуктивный».",
        examplesRu: [
          "✓ a <em>productive</em> day — «продуктивный день».",
          "✓ PRODUCT → <em>productive</em> (как create → creative).",
          "✗ make you more <em>product</em>. — нужно прилагательное."
        ],
        wrongIf: [
          {
            includes: "product",
            hintRu:
              "<em>Product</em> — сущ.; «продуктивнее» → <em>productive</em>."
          },
          {
            includes: "production",
            hintRu:
              "<em>Production</em> = «производство»; нужно <em>productive</em>."
          },
          {
            includes: "productivity",
            hintRu:
              "<em>Productivity</em> — сущ.; после <em>more</em> → <em>productive</em>."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "Take your time and don't rush, as that can lead to a poor choice. An informed decision based on proper research and ",
        afterInline:
          " will be better. So, give yourself enough time before taking the next step!",
        afterTail: "",
        cue: "GUIDE",
        answers: ["guidance"],
        keyShow: "guidance",
        formationTag: "GUIDE → -ance · существительное",
        plainRu:
          "«На основе исследования и <strong>руководства / наставничества</strong>» → <em>guidance</em> от GUIDE.",
        explainRu:
          "После <em>research and</em> — существительное: <em>guidance</em> = «советы, направление».",
        explainOkRu:
          "<em>Guidance</em> — не «guide» (глагол/человек), а «помощь в выборе».",
        explainWrongRu:
          "GUIDE как глагол или <em>guide</em> (сущ. «гид») не встают после <em>and</em> с <em>research</em>.",
        examplesRu: [
          "✓ career <em>guidance</em> — «профориентация / советы».",
          "✓ research and <em>guidance</em> — два существительных.",
          "✗ …research and <em>guide</em>. — нужно <em>guidance</em>."
        ],
        wrongIf: [
          {
            includes: "guide",
            hintRu:
              "<em>Guide</em> — гид/глагол; «наставление» → <em>guidance</em>."
          },
          {
            includes: "guided",
            hintRu:
              "<em>Guided</em> — причастие; нужно сущ. <em>guidance</em>."
          },
          {
            includes: "guiding",
            hintRu:
              "<em>Guiding</em> — gerund; параллель с <em>research</em> → <em>guidance</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Лайфхак §25–29:</strong> смотри, что стоит <em>перед</em> пропуском — <em>the … team</em> → сущ.; <em>gets / more</em> → прилаг.; <em>Visualize it</em> → глагол.</p>" +
      "<p>Суффиксы: <strong>-ment</strong> (management), <strong>-ize</strong> (visualize), <strong>-ful</strong> (stressful), <strong>-ive</strong> (productive), <strong>-ance</strong> (guidance).</p>"
  });
})(typeof window !== "undefined" ? window : this);
