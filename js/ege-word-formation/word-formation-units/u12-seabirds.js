/**
 * Word Formation Exam · Unit 12 · Seabirds (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u12-seabirds",
    unitOrder: 12,
    title: "Unit 12 · Seabirds",
    examSection: "§25–29",
    headerTitle: "Seabirds",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "It seems we all understand what is meant by 'seabirds'. However, there exists no single ",
        afterInline: " of seabirds.",
        afterTail: "",
        cue: "DEFINE",
        answers: ["definition"],
        keyShow: "definition",
        formationTag: "DEFINE → -ition · существительное",
        plainRu:
          "«Не существует единого <strong>определения</strong>» → <em>definition</em>.",
        explainRu:
          "После <em>no single</em> — существительное: DEFINE → <em>definition</em> (-ition).",
        explainOkRu:
          "<em>Definition</em> = «определение»; <em>no single definition of</em>.",
        explainWrongRu:
          "<em>Define</em> (глагол) или <em>definite</em> (прилаг.) после <em>single</em> не подходят.",
        examplesRu: [
          "✓ no single <em>definition</em> of the term.",
          "✓ DEFINE → <em>definition</em> (-ition).",
          "✗ …no single <em>define</em>… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "define",
            hintRu:
              "DEFINE — глагол; «определение» → <em>definition</em>."
          },
          {
            includes: "definite",
            hintRu:
              "<em>Definite</em> — прилаг.; нужно сущ. <em>definition</em>."
          },
          {
            includes: "definitely",
            hintRu:
              "<em>Definitely</em> — наречие; нужно сущ."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "Two seabird specialists put it this way: 'The one common characteristic that all seabirds share is that they feed in saltwater; but, as seems to be true with any ",
        afterInline: " in biology, some do not.'",
        afterTail: "",
        cue: "STATE",
        answers: ["statement"],
        keyShow: "statement",
        formationTag: "STATE → -ment · существительное",
        plainRu:
          "«Как верно для любого <strong>утверждения</strong> в биологии» → <em>statement</em>.",
        explainRu:
          "После <em>any</em> — существительное: STATE → <em>statement</em> (-ment); «общее правило с исключениями».",
        explainOkRu:
          "<em>Statement</em> = «утверждение, формулировка».",
        explainWrongRu:
          "<em>State</em> (глагол/состояние) или <em>stated</em> (причастие) здесь не подходят.",
        examplesRu: [
          "✓ true with any <em>statement</em> in biology.",
          "✓ STATE → <em>statement</em> (-ment).",
          "✗ …with any <em>state</em> in biology… — нужно «утверждение»."
        ],
        wrongIf: [
          {
            includes: "state",
            hintRu:
              "STATE = «состояние»; «утверждение» → <em>statement</em>."
          },
          {
            includes: "stated",
            hintRu:
              "Причастие; нужно сущ. <em>statement</em>."
          },
          {
            includes: "states",
            hintRu:
              "Мн. ч. «штатов/состояний» — не то."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "Do you know that penguins are considered to be birds though they cannot fly? That's why they are often referred to as 'flightless birds'. Penguins are the best ",
        afterInline:
          " in the bird world. They spend most of their lives in water, where they catch fish and tiny animals called krill.",
        afterTail: "",
        cue: "SWIM",
        answers: ["swimmers"],
        keyShow: "swimmers",
        formationTag: "SWIM → -er · мн. ч.",
        plainRu:
          "«Лучшие <strong>пловцы</strong> среди птиц» → <em>swimmers</em>.",
        explainRu:
          "После <em>the best</em> — существительное (люди/существа): SWIM → <em>swimmer</em> → мн. ч. <em>swimmers</em>.",
        explainOkRu:
          "<em>Swimmers</em> = «пловцы».",
        explainWrongRu:
          "<em>Swim</em> (глагол) или <em>swimming</em> (gerund без -er) после <em>the best</em> здесь слабее.",
        examplesRu: [
          "✓ the best <em>swimmers</em> in the bird world.",
          "✓ SWIM → <em>swimmer</em> → <em>swimmers</em>.",
          "✗ …the best <em>swim</em>… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "swim",
            hintRu:
              "SWIM — глагол; «пловцы» → <em>swimmers</em>."
          },
          {
            includes: "swimming",
            hintRu:
              "Gerund «плавание»; здесь люди/птицы → <em>swimmers</em>."
          },
          {
            includes: "swimmer",
            hintRu:
              "Не один пингвин → мн. ч. <em>swimmers</em>."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "King penguins and emperor penguins ",
        afterInline:
          " dive deeper than 250 metres. Emperor penguins have been timed making dives lasting more than 18 minutes.",
        afterTail: "",
        cue: "REGULAR",
        answers: ["regularly"],
        keyShow: "regularly",
        formationTag: "REGULAR → -ly · наречие",
        plainRu:
          "«<strong>Регулярно</strong> ныряют глубже 250 м» → <em>regularly</em>.",
        explainRu:
          "Модификатор глагола <em>dive</em>: REGULAR → <em>regularly</em> (-ly).",
        explainOkRu:
          "<em>Regularly</em> = «регулярно, часто».",
        explainWrongRu:
          "<em>Regular</em> (прилаг.) не стоит перед глаголом <em>dive</em> напрямую.",
        examplesRu: [
          "✓ They <em>regularly</em> dive deeper than 250 m.",
          "✓ REGULAR → <em>regularly</em> (-ly).",
          "✗ …penguins <em>regular</em> dive… — нужно наречие."
        ],
        wrongIf: [
          {
            includes: "regular",
            hintRu:
              "REGULAR — прилаг.; к <em>dive</em> → <em>regularly</em>."
          },
          {
            includes: "regularity",
            hintRu:
              "<em>Regularity</em> — сущ.; нужно наречие."
          },
          {
            includes: "regulate",
            hintRu:
              "<em>Regulate</em> = «регулировать» — не то."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "Another seabird, called the gannet, makes a ",
        afterInline:
          " dive from a height of 30 metres above the sea to catch fish in the sea. It enters the water, seizes its prey and surfaces a few seconds later.",
        afterTail: "",
        cue: "FANTASY",
        answers: ["fantastic"],
        keyShow: "fantastic",
        formationTag: "FANTASY → -tic · прилагательное",
        plainRu:
          "«<strong>Фантастический / потрясающий</strong> нырок» → <em>fantastic</em>.",
        explainRu:
          "Перед <em>dive</em> — прилагательное: FANTASY → <em>fantastic</em> (-tic).",
        explainOkRu:
          "<em>Fantastic</em> = «фантастический, потрясающий».",
        explainWrongRu:
          "<em>Fantasy</em> (сущ.) или <em>fantastically</em> (наречие) перед <em>dive</em> (сущ.) не ставят.",
        examplesRu: [
          "✓ a <em>fantastic</em> dive from 30 metres.",
          "✓ FANTASY → <em>fantastic</em> (-tic).",
          "✗ …a <em>fantasy</em> dive… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "fantasy",
            hintRu:
              "FANTASY — сущ.; «потрясающий» → <em>fantastic</em>."
          },
          {
            includes: "fantastically",
            hintRu:
              "<em>Fantastically</em> — наречие; перед сущ. <em>dive</em> → прилаг."
          },
          {
            includes: "fantasize",
            hintRu:
              "<em>Fantasize</em> — глагол; нужно прилаг. <em>fantastic</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Seabirds:</strong> -ition (<em>definition</em>), -ment (<em>statement</em>), -er (<em>swimmers</em>), -ly (<em>regularly</em>), -tic (<em>fantastic</em>).</p>" +
      "<p>После <em>no single / any / a</em> + сущ. — почти всегда существительное или прилаг. перед другим сущ.</p>"
  });
})(typeof window !== "undefined" ? window : this);
