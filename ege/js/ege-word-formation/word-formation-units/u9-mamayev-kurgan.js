/**
 * Word Formation Exam · Unit 9 · Mamayev Kurgan (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u9-mamayev-kurgan",
    unitOrder: 9,
    title: "Unit 9 · Mamayev Kurgan",
    examSection: "§25–29",
    headerTitle: "Mamayev Kurgan",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "The great battle on the Volga River became a turning point in the World War II. Due to its convenient ",
        afterInline:
          " in the very centre of the city, Mamayev Kurgan held the key position in the defence of Stalingrad.",
        afterTail: "",
        cue: "LOCATE",
        answers: ["location"],
        keyShow: "location",
        formationTag: "LOCATE → -ion · существительное",
        plainRu:
          "«Удобное <strong>расположение</strong>» → <em>location</em>.",
        explainRu:
          "После <em>convenient</em> — существительное: LOCATE → <em>location</em> (-ion).",
        explainOkRu:
          "<em>Location</em> = «местоположение, расположение».",
        explainWrongRu:
          "<em>Locate</em> (глагол) или <em>located</em> (причастие) после <em>convenient</em> не подходят.",
        examplesRu: [
          "✓ a convenient <em>location</em> in the city centre.",
          "✓ LOCATE → <em>location</em> (-ion).",
          "✗ …convenient <em>locate</em>… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "locate",
            hintRu:
              "LOCATE — глагол; «расположение» → <em>location</em>."
          },
          {
            includes: "located",
            hintRu:
              "<em>Located</em> — причастие; нужно сущ. <em>location</em>."
          },
          {
            includes: "local",
            hintRu:
              "<em>Local</em> = «местный» — не то."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before: "It is here where a ",
        afterInline: " memorial complex was erected.",
        afterTail: "",
        cue: "COLOSSUS",
        answers: ["colossal"],
        keyShow: "colossal",
        formationTag: "COLOSSUS → -al · прилагательное",
        plainRu:
          "«<strong>Колоссальный</strong> мемориальный комплекс» → <em>colossal</em>.",
        explainRu:
          "Перед <em>memorial complex</em> — прилагательное: COLOSSUS → <em>colossal</em> (-al).",
        explainOkRu:
          "<em>Colossal</em> = «колоссальный, гигантский».",
        explainWrongRu:
          "<em>Colossus</em> (сущ. «колосс») перед <em>memorial complex</em> не ставят.",
        examplesRu: [
          "✓ a <em>colossal</em> memorial complex.",
          "✓ COLOSSUS → <em>colossal</em> (-al).",
          "✗ …a <em>colossus</em> memorial… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "colossus",
            hintRu:
              "COLOSSUS — сущ.; «огромный» → <em>colossal</em>."
          },
          {
            includes: "colossally",
            hintRu:
              "<em>Colossally</em> — наречие; нужно прилаг. <em>colossal</em>."
          },
          {
            includes: "coliseum",
            hintRu:
              "Другая основа; COLOSSUS → <em>colossal</em>."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "Mamayev Kurgan Memorial complex 'To the heroes of the Battle of Stalingrad' in Volgograd is a symbol of ",
        afterInline:
          " of the Soviet people and a tribute to the memory of those who perished in battle.",
        afterTail: "",
        cue: "HERO",
        answers: ["heroism"],
        keyShow: "heroism",
        formationTag: "HERO → -ism · существительное",
        plainRu:
          "«Символ <strong>героизма</strong> советского народа» → <em>heroism</em>.",
        explainRu:
          "После <em>symbol of</em> — абстрактное существительное: HERO → <em>heroism</em> (-ism).",
        explainOkRu:
          "<em>Heroism</em> = «героизм».",
        explainWrongRu:
          "<em>Hero</em> (герой) или <em>heroes</em> (мн. ч.) после <em>symbol of</em> здесь не подходят.",
        examplesRu: [
          "✓ a symbol of <em>heroism</em>.",
          "✓ HERO → <em>heroism</em> (-ism).",
          "✗ …symbol of <em>hero</em> of the people… — нужно абстракт. сущ."
        ],
        wrongIf: [
          {
            includes: "hero",
            hintRu:
              "HERO = «герой»; «героизм» → <em>heroism</em>."
          },
          {
            includes: "heroes",
            hintRu:
              "«Герои» — не то; абстракция → <em>heroism</em>."
          },
          {
            includes: "heroic",
            hintRu:
              "<em>Heroic</em> — прилаг.; нужно сущ. <em>heroism</em>."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "The key element of the ensemble is a world-famous sculpture 'The Motherland Calls!', one of the most ",
        afterInline: " war monuments.",
        afterTail: "",
        cue: "RECOGNISE",
        answers: ["recognisable", "recognizable"],
        keyShow: "recognisable",
        formationTag: "RECOGNISE → -able · прилагательное",
        plainRu:
          "«Один из самых <strong>узнаваемых</strong> памятников» → <em>recognisable</em>.",
        explainRu:
          "После <em>most</em> — прилагательное: RECOGNISE → <em>recognisable</em> / <em>recognizable</em> (-able).",
        explainOkRu:
          "<em>Recognisable</em> = «узнаваемый, известный».",
        explainWrongRu:
          "<em>Recognise</em> (глагол) или <em>recognition</em> (сущ.) перед <em>war monuments</em> не ставят.",
        examplesRu: [
          "✓ one of the most <em>recognisable</em> monuments.",
          "✓ RECOGNISE → <em>recognisable</em> (-able).",
          "✗ …most <em>recognise</em> war monuments… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "recognise",
            hintRu:
              "RECOGNISE — глагол; «узнаваемый» → <em>recognisable</em>."
          },
          {
            includes: "recognize",
            hintRu:
              "AmE глагол; нужно прилаг. <em>recognizable</em> / BrE <em>recognisable</em>."
          },
          {
            includes: "recognition",
            hintRu:
              "<em>Recognition</em> — сущ.; нужно прилаг."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "At the time of its ",
        afterInline:
          " in 1967, the statue was the largest free-standing sculpture in the world. Today, it's the tallest sculpture of a woman in the world.",
        afterTail: "",
        cue: "INSTALL",
        answers: ["installation"],
        keyShow: "installation",
        formationTag: "INSTALL → -ation · существительное",
        plainRu:
          "«На момент <strong>установки</strong> в 1967 году» → <em>installation</em>.",
        explainRu:
          "После <em>At the time of its</em> — существительное: INSTALL → <em>installation</em> (-ation).",
        explainOkRu:
          "<em>Installation</em> = «установка, монтаж».",
        explainWrongRu:
          "<em>Install</em> (глагол) или <em>installed</em> (причастие) после <em>its</em> не подходят.",
        examplesRu: [
          "✓ at the time of its <em>installation</em> in 1967.",
          "✓ INSTALL → <em>installation</em> (-ation).",
          "✗ …time of its <em>install</em>… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "install",
            hintRu:
              "INSTALL — глагол; «установка» → <em>installation</em>."
          },
          {
            includes: "installed",
            hintRu:
              "Причастие; после <em>time of its</em> → сущ. <em>installation</em>."
          },
          {
            includes: "instalment",
            hintRu:
              "<em>Instalment</em> = «выпуск сериала / рассрочка» — не то."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Mamayev Kurgan:</strong> -ion (<em>location</em>), -al (<em>colossal</em>), -ism (<em>heroism</em>), -able (<em>recognisable</em>), -ation (<em>installation</em>).</p>" +
      "<p>После <em>symbol of / time of its / convenient</em> — почти всегда существительное, не глагол.</p>"
  });
})(typeof window !== "undefined" ? window : this);
