/**
 * Word Formation Exam · Unit 4 · Smiling (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u4-smiling",
    unitOrder: 4,
    title: "Unit 4 · Smiling",
    examSection: "§25–29",
    headerTitle: "Smiling",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "Smiling improves mood and health. It helps to release endorphins and that makes us feel a lot more positive and happier throughout the day. That, in turn, keeps a ",
        afterInline: " balance and improves our mental well-being.",
        afterTail: "",
        cue: "HEALTH",
        answers: ["healthy"],
        keyShow: "healthy",
        formationTag: "HEALTH → -y · прилагательное",
        plainRu:
          "«Поддерживает <strong>здоровый</strong> баланс» → прилагательное <em>healthy</em>.",
        explainRu:
          "Перед <em>balance</em> — прилагательное: HEALTH + <strong>-y</strong> = <em>healthy balance</em>.",
        explainOkRu:
          "<em>Healthy</em> = «здоровый»; <em>healthy balance</em> — устойчивое.",
        explainWrongRu:
          "<em>Health</em> (сущ.) перед <em>balance</em> не ставят.",
        examplesRu: [
          "✓ a <em>healthy</em> work-life balance.",
          "✓ HEALTH → <em>healthy</em> (как wealth → wealthy).",
          "✗ …keeps a <em>health</em> balance… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "health",
            hintRu:
              "HEALTH — сущ.; перед <em>balance</em> → <em>healthy</em>."
          },
          {
            includes: "healthily",
            hintRu:
              "<em>Healthily</em> — наречие; нужно прилаг. <em>healthy</em>."
          },
          {
            includes: "healthier",
            hintRu:
              "Сравнительная не нужна; «здоровый баланс» → <em>healthy</em>."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "Smiling gives us an air of confidence and that reflects in our ",
        afterInline: ".",
        afterTail: "",
        cue: "PERSONAL",
        answers: ["personality", "personalities"],
        keyShow: "personality",
        formationTag: "PERSONAL → -ity · существительное",
        plainRu:
          "«Отражается в нашей <strong>личности</strong>» → <em>personality</em>.",
        explainRu:
          "После <em>our</em> — существительное: PERSONAL → <em>personality</em> (-ity).",
        explainOkRu:
          "<em>Personality</em> = «личность, характер».",
        explainWrongRu:
          "<em>Personal</em> (прилаг.) после <em>our</em> без существительного не подходит.",
        examplesRu: [
          "✓ reflects in our <em>personality</em>.",
          "✓ PERSONAL → <em>personality</em> (-ity).",
          "✗ …in our <em>personal</em>. — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "personal",
            hintRu:
              "PERSONAL — прилаг.; после <em>our</em> → <em>personality</em>."
          },
          {
            includes: "personally",
            hintRu:
              "<em>Personally</em> — наречие; нужно сущ. <em>personality</em>."
          },
          {
            includes: "person",
            hintRu:
              "<em>Person</em> = «человек» — другой смысл."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "We stay in ",
        afterInline:
          " with our desires and make the right choices and attract the right people or opportunities for us.",
        afterTail: "",
        cue: "AGREE",
        answers: ["agreement"],
        keyShow: "agreement",
        formationTag: "AGREE → -ment · существительное",
        plainRu:
          "«Остаёмся в <strong>согласии</strong> с желаниями» → <em>agreement</em>.",
        explainRu:
          "Устойчиво: <em>stay in agreement with</em>. AGREE → <em>agreement</em> (-ment).",
        explainOkRu:
          "<em>Agreement</em> = «согласие, соответствие»; <em>in agreement with</em>.",
        explainWrongRu:
          "<em>Agree</em> (глагол) после <em>in</em> не ставят.",
        examplesRu: [
          "✓ stay in <em>agreement</em> with your values.",
          "✓ AGREE → <em>agreement</em> (-ment).",
          "✗ …in <em>agree</em> with… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "agree",
            hintRu:
              "AGREE — глагол; после <em>in</em> → <em>agreement</em>."
          },
          {
            includes: "agreeable",
            hintRu:
              "<em>Agreeable</em> = «приятный» — другой смысл."
          },
          {
            includes: "agreeing",
            hintRu:
              "Gerund не после <em>stay in</em> → <em>agreement</em>."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "Smiling is a ",
        afterInline:
          " language that keeps us all united. It helps to build an unshakeable bond that may turn into a relationship for a lifetime!",
        afterTail: "",
        cue: "UNIVERSE",
        answers: ["universal"],
        keyShow: "universal",
        formationTag: "UNIVERSE → -al · прилагательное",
        plainRu:
          "«<strong>Универсальный</strong> язык» → <em>universal</em>.",
        explainRu:
          "Перед <em>language</em> — прилагательное: UNIVERSE → <em>universal</em> (-al).",
        explainOkRu:
          "<em>Universal</em> = «общий для всех, универсальный».",
        explainWrongRu:
          "<em>Universe</em> (сущ.) перед <em>language</em> не подходит.",
        examplesRu: [
          "✓ a <em>universal</em> language of kindness.",
          "✓ UNIVERSE → <em>universal</em> (-al).",
          "✗ …a <em>universe</em> language… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "universe",
            hintRu:
              "UNIVERSE — сущ.; «общий язык» → <em>universal</em>."
          },
          {
            includes: "universally",
            hintRu:
              "<em>Universally</em> — наречие; нужно прилаг. <em>universal</em>."
          },
          {
            includes: "university",
            hintRu:
              "<em>University</em> = «университет» — не то."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "Smiling creates a ripple effect by spreading the curve on other faces, too. It ",
        afterInline:
          " the day and fills everyone around with hope and optimism. Overall, a smile makes the world such a better place to live in!",
        afterTail: "",
        cue: "BRIGHT",
        answers: ["brightens"],
        keyShow: "brightens",
        formationTag: "BRIGHT → -en · глагол · 3 л. ед. ч.",
        plainRu:
          "«<strong>Осветляет / делает ярче</strong> день» → <em>brightens</em>.",
        explainRu:
          "Подлежащее <em>It</em> — глагол в 3 л. ед. ч.: BRIGHT → <em>brighten</em> → <em>brightens</em> (-en).",
        explainOkRu:
          "<em>Brightens</em> = «делает ярче, осветляет».",
        explainWrongRu:
          "<em>Bright</em> (прилаг.) или <em>brightness</em> (сущ.) после <em>It</em> не подходят.",
        examplesRu: [
          "✓ It <em>brightens</em> my day.",
          "✓ BRIGHT → <em>brighten</em> → <em>brightens</em> (-en + -s).",
          "✗ It <em>bright</em> the day… — нужен глагол."
        ],
        wrongIf: [
          {
            includes: "bright",
            hintRu:
              "BRIGHT — прилаг.; после <em>It</em> → глагол <em>brightens</em>."
          },
          {
            includes: "brightness",
            hintRu:
              "<em>Brightness</em> — сущ.; нужен глагол <em>brightens</em>."
          },
          {
            includes: "brightly",
            hintRu:
              "<em>Brightly</em> — наречие; нужен глагол <em>brightens</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Smiling:</strong> -y (<em>healthy</em>), -ity (<em>personality</em>), -ment + <em>in … with</em> (<em>agreement</em>), -al (<em>universal</em>), -en + -s (<em>brightens</em>).</p>" +
      "<p>Если подлежащее <em>It</em> и дальше объект (<em>the day</em>) — часто глагол в 3 л. ед. ч.</p>"
  });
})(typeof window !== "undefined" ? window : this);
