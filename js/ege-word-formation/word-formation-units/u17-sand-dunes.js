/**
 * Word Formation Exam · Unit 17 · Sand dunes (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u17-sand-dunes",
    unitOrder: 17,
    title: "Unit 17 · Sand dunes",
    examSection: "§25–29",
    headerTitle: "Sand dunes",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before: "Sand dunes are rarely isolated. It's ",
        afterInline:
          " for a dune to stand alone. They form in large groups known as dune fields.",
        afterTail: "",
        cue: "COMMON",
        answers: ["uncommon"],
        keyShow: "uncommon",
        formationTag: "COMMON → un- · прилагательное",
        plainRu:
          "«<strong>Редко</strong>, когда дюна стоит одна» → <em>uncommon</em>.",
        explainRu:
          "После <em>It's</em> — прилагательное: COMMON + <strong>un-</strong> = «необычно»; дальше — они образуют группы.",
        explainOkRu:
          "<em>Uncommon</em> = «редкий, нечастый»; <em>It's uncommon for … to</em>.",
        explainWrongRu:
          "<em>Common</em> (= «обычно») противоречит «rarely isolated» и группам дюн.",
        examplesRu: [
          "✓ It's <em>uncommon</em> for a dune to stand alone.",
          "✓ COMMON → <em>uncommon</em> (un-).",
          "✗ It's <em>common</em> for a dune to stand alone… — смысл наоборот."
        ],
        wrongIf: [
          {
            includes: "common",
            hintRu:
              "Дюны редко одиноки → <em>uncommon</em>, не <em>common</em>."
          },
          {
            includes: "commonly",
            hintRu:
              "<em>Commonly</em> — наречие; <em>It's … for</em> → прилаг."
          },
          {
            includes: "uncommonly",
            hintRu:
              "<em>Uncommonly</em> — наречие; нужно прилаг. <em>uncommon</em>."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "It's well-known that sand dunes move around and that smaller dunes move faster than larger ones. Now ",
        afterInline:
          " have discovered that dunes communicate with their neighbours. They can even push their neighbour dunes farther away.",
        afterTail: "",
        cue: "RESEARCH",
        answers: ["researchers"],
        keyShow: "researchers",
        formationTag: "RESEARCH → -er · мн. ч.",
        plainRu:
          "«<strong>Исследователи</strong> обнаружили» → <em>researchers</em>.",
        explainRu:
          "Подлежащее <em>have discovered</em>: RESEARCH → <em>researcher</em> → мн. ч.",
        explainOkRu:
          "<em>Researchers</em> = «исследователи».",
        explainWrongRu:
          "<em>Research</em> (процесс) не «discover» — люди открывают.",
        examplesRu: [
          "✓ Now <em>researchers</em> have discovered that…",
          "✓ RESEARCH → <em>researcher</em> → <em>researchers</em>.",
          "✗ …Now <em>research</em> have discovered… — нужны люди."
        ],
        wrongIf: [
          {
            includes: "research",
            hintRu:
              "RESEARCH = «исследование»; кто открыл → <em>researchers</em>."
          },
          {
            includes: "researched",
            hintRu:
              "Причастие; нужно <em>researchers</em>."
          },
          {
            includes: "researcher",
            hintRu:
              "Обычно не один → <em>researchers</em>."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "Here's what's happening. A flow of water or wind hits a dune. The energy creates a disturbance. The disturbance gives the ",
        afterInline:
          " dune a little push. This causes that dune to move faster.",
        afterTail: "",
        cue: "NEIGHBOUR",
        answers: ["neighbouring", "neighboring"],
        keyShow: "neighbouring",
        formationTag: "NEIGHBOUR → -ing · прилагательное",
        plainRu:
          "«<strong>Соседнюю</strong> дюну» → <em>neighbouring</em>.",
        explainRu:
          "Перед <em>dune</em> — прилагательное: NEIGHBOUR → <em>neighbouring</em> (-ing).",
        explainOkRu:
          "<em>Neighbouring</em> = «соседний, nearby».",
        explainWrongRu:
          "<em>Neighbour</em> (сущ.) или <em>neighbours</em> (мн. ч.) перед <em>dune</em> не подходят.",
        examplesRu: [
          "✓ the <em>neighbouring</em> dune.",
          "✓ NEIGHBOUR → <em>neighbouring</em> (-ing).",
          "✗ …the <em>neighbour</em> dune… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "neighbour",
            hintRu:
              "NEIGHBOUR — сущ.; «соседняя дюна» → <em>neighbouring</em>."
          },
          {
            includes: "neighbor",
            hintRu:
              "AmE сущ.; прилаг. → <em>neighboring</em> / BrE <em>neighbouring</em>."
          },
          {
            includes: "neighbourhood",
            hintRu:
              "<em>Neighbourhood</em> = «район» — не то."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "As the flow continues, the movement continues. Finally, a dune is far enough away not to be affected by the disturbance. What is more, scientists thought that a pair of identical dunes would move together at the same speed. Instead, ",
        afterInline: " enough, they push away from each other.",
        afterTail: "",
        cue: "AMAZING",
        answers: ["amazingly"],
        keyShow: "amazingly",
        formationTag: "AMAZING → -ly · наречие",
        plainRu:
          "«<strong>Удивительно</strong> enough» → <em>amazingly</em>.",
        explainRu:
          "Устойчиво: <em>amazingly enough</em> (= surprisingly). AMAZING → <em>amazingly</em> (-ly).",
        explainOkRu:
          "<em>Amazingly</em> = «удивительно»; <em>amazingly enough</em>.",
        explainWrongRu:
          "<em>Amazing</em> (прилаг.) перед <em>enough</em> в этой конструкции не ставят.",
        examplesRu: [
          "✓ <em>Amazingly</em> enough, they push away.",
          "✓ AMAZING → <em>amazingly</em> (-ly).",
          "✗ …<em>amazing</em> enough, they push… — нужно наречие."
        ],
        wrongIf: [
          {
            includes: "amazing",
            hintRu:
              "AMAZING — прилаг.; <em>… enough</em> → <em>amazingly</em>."
          },
          {
            includes: "amazement",
            hintRu:
              "<em>Amazement</em> — сущ.; нужно наречие."
          },
          {
            includes: "amazed",
            hintRu:
              "<em>Amazed</em> = «изумлённые» — не то."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "So, some dunes move closer to roads and infrastructure. Some cover parts of cities, destroying people's livelihoods. Now we know, they communicate, but do they ",
        afterInline: "?",
        afterTail: "",
        cue: "APOLOGY",
        answers: ["apologize", "apologise"],
        keyShow: "apologize",
        formationTag: "APOLOGY → -ize · глагол",
        plainRu:
          "«Но <strong>извиняются</strong> ли они?» → <em>apologize</em>.",
        explainRu:
          "После <em>do they</em> — глагол в начальной форме: APOLOGY → <em>apologize</em> / <em>apologise</em>.",
        explainOkRu:
          "<em>Apologize</em> = «извиняться»; шутливый финал текста.",
        explainWrongRu:
          "<em>Apology</em> (сущ.) после <em>do they</em> не подходит.",
        examplesRu: [
          "✓ Do they <em>apologize</em>?",
          "✓ APOLOGY → <em>apologize</em> (-ize).",
          "✗ …do they <em>apology</em>? — нужен глагол."
        ],
        wrongIf: [
          {
            includes: "apology",
            hintRu:
              "APOLOGY — сущ.; после <em>do they</em> → <em>apologize</em>."
          },
          {
            includes: "apologetic",
            hintRu:
              "<em>Apologetic</em> — прилаг.; нужен глагол."
          },
          {
            includes: "apologizing",
            hintRu:
              "Gerund; вопрос <em>do they</em> → <em>apologize</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Sand dunes:</strong> un- (<em>uncommon</em>), -er (<em>researchers</em>), -ing прилаг. (<em>neighbouring</em>), -ly (<em>amazingly</em>), -ize (<em>apologize</em>).</p>" +
      "<p>Если текст говорит «редко / наоборот» — проверь un- от COMMON, USUAL и т.д.</p>"
  });
})(typeof window !== "undefined" ? window : this);
