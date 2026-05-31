/**
 * Word Formation Exam · Unit 18 · The Hancock Observatory (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u18-hancock-observatory",
    unitOrder: 18,
    title: "Unit 18 · Hancock Observatory",
    examSection: "§25–29",
    headerTitle: "The Hancock Observatory",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "The Hancock Observatory has been recently opened following a multimillion-dollar renovation. The new Observatory is surprising hundreds of ",
        afterInline:
          " with Chicago's best views, high-tech features and the city's highest open-air Skywalk atop the John Hancock Centre.",
        afterTail: "",
        cue: "VISIT",
        answers: ["visitors"],
        keyShow: "visitors",
        formationTag: "VISIT → -or · мн. ч.",
        plainRu:
          "«Сотни <strong>посетителей</strong>» → <em>visitors</em>.",
        explainRu:
          "После <em>hundreds of</em> — люди: VISIT → <em>visitor</em> → мн. ч. <em>visitors</em>.",
        explainOkRu:
          "<em>Visitors</em> = «посетители, туристы».",
        explainWrongRu:
          "<em>Visit</em> (глагол) или <em>visiting</em> (gerund) после <em>hundreds of</em> не подходят.",
        examplesRu: [
          "✓ hundreds of <em>visitors</em>.",
          "✓ VISIT → <em>visitor</em> → <em>visitors</em>.",
          "✗ …hundreds of <em>visit</em>… — нужны люди."
        ],
        wrongIf: [
          {
            includes: "visit",
            hintRu:
              "VISIT — глагол; «посетители» → <em>visitors</em>."
          },
          {
            includes: "visiting",
            hintRu:
              "Gerund; нужно <em>visitors</em>."
          },
          {
            includes: "visitor",
            hintRu:
              "Не один → мн. ч. <em>visitors</em>."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "Skywalk is Chicago's highest open-air viewing area like no other. It is 1,000 feet in the air! Everyone here can feel the strong wind and hear the dynamic buzz of the city below. The friendly staff will ",
        afterInline:
          " tell the real story behind Chicago's 'Windy City' nickname.",
        afterTail: "",
        cue: "CERTAIN",
        answers: ["certainly"],
        keyShow: "certainly",
        formationTag: "CERTAIN → -ly · наречие",
        plainRu:
          "«<strong>Обязательно / непременно</strong> расскажут» → <em>certainly</em>.",
        explainRu:
          "Модификатор глагола <em>tell</em>: CERTAIN → <em>certainly</em> (-ly).",
        explainOkRu:
          "<em>Certainly</em> = «непременно, без сомнения».",
        explainWrongRu:
          "<em>Certain</em> (прилаг.) не модифицирует <em>will tell</em> напрямую.",
        examplesRu: [
          "✓ will <em>certainly</em> tell the story.",
          "✓ CERTAIN → <em>certainly</em> (-ly).",
          "✗ …will <em>certain</em> tell… — нужно наречие."
        ],
        wrongIf: [
          {
            includes: "certain",
            hintRu:
              "CERTAIN — прилаг.; к <em>will tell</em> → <em>certainly</em>."
          },
          {
            includes: "certainty",
            hintRu:
              "<em>Certainty</em> — сущ.; нужно наречие."
          },
          {
            includes: "uncertain",
            hintRu:
              "Смысл: персонал уверенно расскажет → <em>certainly</em>."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "For those who feel ",
        afterInline:
          " about such a great height more relaxing indoor audio Sky Tours are offered. The tours that soar above all others!",
        afterTail: "",
        cue: "COMFORTABLE",
        answers: ["uncomfortable"],
        keyShow: "uncomfortable",
        formationTag: "COMFORTABLE → un- · прилагательное",
        plainRu:
          "«Кому <strong>некомфортно</strong> на такой высоте» → <em>uncomfortable</em>.",
        explainRu:
          "После <em>feel</em> — прилагательное: COMFORTABLE + <strong>un-</strong>; дальше — indoor tours «более relaxing».",
        explainOkRu:
          "<em>Uncomfortable</em> = «испытывающий дискомфорт»; <em>feel uncomfortable about</em>.",
        explainWrongRu:
          "<em>Comfortable</em> (= «комфортно») противоречит предложению indoor tours.",
        examplesRu: [
          "✓ feel <em>uncomfortable</em> about heights.",
          "✓ COMFORTABLE → <em>uncomfortable</em> (un-).",
          "✗ …feel <em>comfortable</em> about such a great height… — смысл наоборот."
        ],
        wrongIf: [
          {
            includes: "comfortable",
            hintRu:
              "Indoor tours для тех, кому страшно → <em>uncomfortable</em>."
          },
          {
            includes: "comfortably",
            hintRu:
              "<em>Comfortably</em> — наречие; <em>feel</em> → прилаг."
          },
          {
            includes: "comfort",
            hintRu:
              "<em>Comfort</em> — сущ.; нужно <em>uncomfortable</em>."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "These 30-minute personal audio tours give a unique 'overview' of Chicago's incredible sights and ",
        afterInline:
          " history with some 'inside' information that has surprised even the most seasoned Chicagoans! Sky Tours are available in English, Spanish, and German.",
        afterTail: "",
        cue: "REMARK",
        answers: ["remarkable"],
        keyShow: "remarkable",
        formationTag: "REMARK → -able · прилагательное",
        plainRu:
          "«<strong>Примечательная</strong> история» → <em>remarkable</em>.",
        explainRu:
          "Перед <em>history</em> — прилагательное: REMARK → <em>remarkable</em> (-able); параллель <em>incredible sights</em>.",
        explainOkRu:
          "<em>Remarkable</em> = «выдающийся, remarkable».",
        explainWrongRu:
          "<em>Remark</em> (сущ./глагол) или <em>remarkably</em> (наречие) перед <em>history</em> не ставят.",
        examplesRu: [
          "✓ incredible sights and <em>remarkable</em> history.",
          "✓ REMARK → <em>remarkable</em> (-able).",
          "✗ …and <em>remark</em> history… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "remark",
            hintRu:
              "REMARK — сущ./глагол; «выдающаяся» → <em>remarkable</em>."
          },
          {
            includes: "remarkably",
            hintRu:
              "<em>Remarkably</em> — наречие; нужно прилаг."
          },
          {
            includes: "remarks",
            hintRu:
              "«Замечания» — не то."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "History Wall is another popular attraction. More than 100 photos on a giant 80-foot display trace Chicago's rise from marsh to metropolis. Everyone can see the city's history stretch out before their eyes, from the ",
        afterInline:
          " Chicago fire to the first skyscraper, from 1893 World's Columbian Exposition to 1933 World's Fair.",
        afterTail: "",
        cue: "FURY",
        answers: ["furious"],
        keyShow: "furious",
        formationTag: "FURY → -ous · прилагательное",
        plainRu:
          "«<strong>Яростный / великий</strong> пожар в Чикаго» → <em>furious</em> (Great Chicago Fire).",
        explainRu:
          "Перед <em>Chicago fire</em> — прилагательное: FURY → <em>furious</em> (-ous); историческое название.",
        explainOkRu:
          "<em>Furious</em> = «яростный, сильный»; the Great / <em>furious</em> Chicago fire.",
        explainWrongRu:
          "<em>Fury</em> (сущ.) перед <em>Chicago fire</em> грамматически неверно.",
        examplesRu: [
          "✓ the <em>furious</em> Chicago fire of 1871.",
          "✓ FURY → <em>furious</em> (-ous).",
          "✗ …the <em>fury</em> Chicago fire… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "fury",
            hintRu:
              "FURY — сущ.; «великий пожар» → <em>furious</em>."
          },
          {
            includes: "furiously",
            hintRu:
              "<em>Furiously</em> — наречие; нужно прилаг."
          },
          {
            includes: "fur",
            hintRu:
              "Другая основа; FURY → <em>furious</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Hancock Observatory:</strong> -or (<em>visitors</em>), -ly (<em>certainly</em>), un- (<em>uncomfortable</em>), -able (<em>remarkable</em>), -ous (<em>furious</em>).</p>" +
      "<p>Если дальше предлагают «более спокойный» вариант — часто un- от COMFORTABLE, EASY и т.п.</p>"
  });
})(typeof window !== "undefined" ? window : this);
