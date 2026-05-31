/**
 * Word Formation Exam · Unit 14 · Desert birds (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u14-desert-birds",
    unitOrder: 14,
    title: "Unit 14 · Desert birds",
    examSection: "§25–29",
    headerTitle: "Desert birds",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "Many kinds of birds live in the desert. Many of them have sandy-brown feathers to blend with their ",
        afterInline:
          ". This helps them hide from their enemies. The cream-coloured courser lives in desert lands in Africa and part of Asia.",
        afterTail: "",
        cue: "SURROUND",
        answers: ["surroundings"],
        keyShow: "surroundings",
        formationTag: "SURROUND → -ings · мн. ч.",
        plainRu:
          "«Сливаться с <strong>окружением</strong>» → <em>surroundings</em>.",
        explainRu:
          "После <em>their</em> — существительное: SURROUND → <em>surroundings</em>; <em>blend with their surroundings</em>.",
        explainOkRu:
          "<em>Surroundings</em> = «окружение, среда».",
        explainWrongRu:
          "<em>Surround</em> (глагол) или <em>surrounding</em> (прилаг.) после <em>their</em> не подходят.",
        examplesRu: [
          "✓ blend with their <em>surroundings</em>.",
          "✓ SURROUND → <em>surroundings</em>.",
          "✗ …with their <em>surround</em>. — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "surround",
            hintRu:
              "SURROUND — глагол; «окружение» → <em>surroundings</em>."
          },
          {
            includes: "surrounding",
            hintRu:
              "<em>Surrounding</em> — прилаг.; нужно сущ."
          },
          {
            includes: "surrounded",
            hintRu:
              "Причастие; нужно <em>surroundings</em>."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "Birds may have to travel long distances to find water in the desert. But this is impossible for little chicks. To solve this problem the male sandgrouse has special feathers on his tummy which act like sponges to hold water. He flies off to find water and ",
        afterInline: " soaks its feathers.",
        afterTail: "",
        cue: "THOROUGH",
        answers: ["thoroughly"],
        keyShow: "thoroughly",
        formationTag: "THOROUGH → -ly · наречие",
        plainRu:
          "«<strong>Тщательно</strong> намочил перья» → <em>thoroughly</em>.",
        explainRu:
          "Модификатор глагола <em>soaks</em>: THOROUGH → <em>thoroughly</em> (-ly).",
        explainOkRu:
          "<em>Thoroughly</em> = «тщательно, основательно».",
        explainWrongRu:
          "<em>Thorough</em> (прилаг.) не модифицирует глагол <em>soaks</em> напрямую.",
        examplesRu: [
          "✓ <em>thoroughly</em> soaks its feathers.",
          "✓ THOROUGH → <em>thoroughly</em> (-ly).",
          "✗ …and <em>thorough</em> soaks… — нужно наречие."
        ],
        wrongIf: [
          {
            includes: "thorough",
            hintRu:
              "THOROUGH — прилаг.; к <em>soaks</em> → <em>thoroughly</em>."
          },
          {
            includes: "thoroughness",
            hintRu:
              "<em>Thoroughness</em> — сущ.; нужно наречие."
          },
          {
            includes: "through",
            hintRu:
              "Другая основа; THOROUGH → <em>thoroughly</em>."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "He then returns home where his ",
        afterInline: " chicks gulp the water that he's brought.",
        afterTail: "",
        cue: "THIRST",
        answers: ["thirsty"],
        keyShow: "thirsty",
        formationTag: "THIRST → -y · прилагательное",
        plainRu:
          "«Его <strong>жаждущие</strong> птенцы» → <em>thirsty</em>.",
        explainRu:
          "Перед <em>chicks</em> — прилагательное: THIRST + <strong>-y</strong> = <em>thirsty chicks</em>.",
        explainOkRu:
          "<em>Thirsty</em> = «жаждущий».",
        explainWrongRu:
          "<em>Thirst</em> (сущ.) перед <em>chicks</em> не ставят.",
        examplesRu: [
          "✓ his <em>thirsty</em> chicks gulp the water.",
          "✓ THIRST → <em>thirsty</em> (-y).",
          "✗ …his <em>thirst</em> chicks… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "thirst",
            hintRu:
              "THIRST — сущ.; «жаждущие» → <em>thirsty</em>."
          },
          {
            includes: "thirstily",
            hintRu:
              "<em>Thirstily</em> — наречие; нужно прилаг. <em>thirsty</em>."
          },
          {
            includes: "thirsting",
            hintRu:
              "Gerund — не перед <em>chicks</em> → <em>thirsty</em>."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "The elf owl got its name because of its ",
        afterInline:
          " — this small bird is only 14 centimetres long. It makes its nest in a hole on a desert cactus.",
        afterTail: "",
        cue: "APPEAR",
        answers: ["appearance"],
        keyShow: "appearance",
        formationTag: "APPEAR → -ance · существительное",
        plainRu:
          "«Из‑за своего <strong>внешнего вида</strong>» → <em>appearance</em>.",
        explainRu:
          "После <em>because of its</em> — существительное: APPEAR → <em>appearance</em> (-ance).",
        explainOkRu:
          "<em>Appearance</em> = «внешний вид, облик».",
        explainWrongRu:
          "<em>Appear</em> (глагол) или <em>apparent</em> (прилаг.) после <em>because of its</em> не подходят.",
        examplesRu: [
          "✓ because of its <em>appearance</em>.",
          "✓ APPEAR → <em>appearance</em> (-ance).",
          "✗ …because of its <em>appear</em>… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "appear",
            hintRu:
              "APPEAR — глагол; «внешний вид» → <em>appearance</em>."
          },
          {
            includes: "apparent",
            hintRu:
              "<em>Apparent</em> — прилаг.; нужно сущ."
          },
          {
            includes: "appearing",
            hintRu:
              "Gerund; нужно <em>appearance</em>."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "This prickly, ",
        afterInline:
          " home helps to keep the owl's eggs safe from enemies who do not want to struggle through the cactus spines. It lives in desert areas in the southwest of the USA.",
        afterTail: "",
        cue: "COMFORT",
        answers: ["uncomfortable"],
        keyShow: "uncomfortable",
        formationTag: "COMFORT → un- + -able · прилагательное",
        plainRu:
          "«<strong>Колючий, неудобный</strong> дом» (для врагов) → <em>uncomfortable</em>.",
        explainRu:
          "Перед <em>home</em> — прилагательное: COMFORT + un- + -able; колючий кактус → <em>uncomfortable</em> для врагов.",
        explainOkRu:
          "<em>Uncomfortable</em> = «неудобный»; враги не хотят лезть сквозь шипы.",
        explainWrongRu:
          "<em>Comfortable</em> («удобный») противоречит <em>prickly</em> и смыслу про шипы.",
        examplesRu: [
          "✓ a prickly, <em>uncomfortable</em> home for predators.",
          "✓ COMFORT → <em>uncomfortable</em> (un- + -able).",
          "✗ …prickly, <em>comfortable</em> home… — смысл наоборот."
        ],
        wrongIf: [
          {
            includes: "comfort",
            hintRu:
              "COMFORT — сущ.; «неудобный» → <em>uncomfortable</em>."
          },
          {
            includes: "comfortable",
            hintRu:
              "<em>Comfortable</em> = «удобный»; здесь un- → <em>uncomfortable</em>."
          },
          {
            includes: "comfortably",
            hintRu:
              "<em>Comfortably</em> — наречие; нужно прилаг."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Desert birds:</strong> <em>surroundings</em>, -ly (<em>thoroughly</em>), -y (<em>thirsty</em>), -ance (<em>appearance</em>), un- + -able (<em>uncomfortable</em>).</p>" +
      "<p>Если рядом <em>prickly</em> и враги «не хотят пробираться» — часто <em>uncomfortable</em>, не <em>comfortable</em>.</p>"
  });
})(typeof window !== "undefined" ? window : this);
