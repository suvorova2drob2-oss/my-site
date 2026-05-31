/**
 * Word Formation Exam · Unit 10 · Zaryadye Park (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u10-zaryadye-park",
    unitOrder: 10,
    title: "Unit 10 · Zaryadye Park",
    examSection: "§25–29",
    headerTitle: "Zaryadye Park",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "Have you been to Zaryadye Park? It's an ",
        afterInline: " new park right in the heart of Moscow.",
        afterTail: "",
        cue: "AMAZE",
        answers: ["amazing"],
        keyShow: "amazing",
        formationTag: "AMAZE → -ing · прилагательное",
        plainRu:
          "«<strong>Удивительный</strong> новый парк» → <em>amazing</em>.",
        explainRu:
          "После <em>an</em> — прилагательное: AMAZE → <em>amazing</em> (-ing).",
        explainOkRu:
          "<em>Amazing</em> = «удивительный, поразительный».",
        explainWrongRu:
          "<em>Amaze</em> (глагол) или <em>amazement</em> (сущ.) перед <em>new park</em> не ставят.",
        examplesRu: [
          "✓ an <em>amazing</em> new park.",
          "✓ AMAZE → <em>amazing</em> (-ing).",
          "✗ …an <em>amaze</em> new park… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "amaze",
            hintRu:
              "AMAZE — глагол; «удивительный» → <em>amazing</em>."
          },
          {
            includes: "amazement",
            hintRu:
              "<em>Amazement</em> — сущ.; нужно прилаг. <em>amazing</em>."
          },
          {
            includes: "amazed",
            hintRu:
              "<em>Amazed</em> = «изумлённый» — про человека, не парк."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "It covers 13 hectares between Red Square and the Moscow River and attracts both Muscovites and tourists. ",
        afterInline: ", its buildings are buried underground.",
        afterTail: "",
        cue: "USUAL",
        answers: ["unusually"],
        keyShow: "unusually",
        formationTag: "USUAL → un- + -ly · наречие",
        plainRu:
          "«<strong>Необычно</strong>, здания спрятаны под землёй» → <em>unusually</em>.",
        explainRu:
          "Вводное наречие в начале предложения: USUAL → <em>unusually</em> (un- + -ly); контраст с нормой.",
        explainOkRu:
          "<em>Unusually</em> = «необычно, как исключение».",
        explainWrongRu:
          "<em>Usual</em> (прилаг.) или <em>usually</em> (наречие «обычно») противоречат смыслу.",
        examplesRu: [
          "✓ <em>Unusually</em>, the offices are underground.",
          "✓ USUAL → <em>unusually</em> (un- + -ly).",
          "✗ <em>Usually</em>, its buildings are buried… — смысл наоборот."
        ],
        wrongIf: [
          {
            includes: "usual",
            hintRu:
              "USUAL — прилаг.; вводное слово → <em>unusually</em>."
          },
          {
            includes: "usually",
            hintRu:
              "<em>Usually</em> = «обычно»; здесь «необычно» → <em>unusually</em>."
          },
          {
            includes: "unusual",
            hintRu:
              "<em>Unusual</em> — прилаг.; нужно наречие с запятой: <em>Unusually,</em>"
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before: "Much of the ",
        afterInline:
          " natural landscape has been constructed over the roofs of these new buildings. Among them are a media centre and a nature centre, along with a concert hall. Outside, the park has been divided into four zones, each representing a key feature of Russia's natural landscape and fauna: tundra, steppe, forest, and wetland.",
        afterTail: "",
        cue: "APPARENT",
        answers: ["apparent"],
        keyShow: "apparent",
        formationTag: "APPARENT → прилагательное",
        plainRu:
          "«<strong>Кажущийся</strong> природный ландшафт (на самом деле построен)» → <em>apparent</em>.",
        explainRu:
          "Перед <em>natural landscape</em> — прилагательное: <em>apparent</em> = «видимый, кажущийся»; дальше — <em>constructed</em>.",
        explainOkRu:
          "<em>Apparent</em> = «кажущийся, видимый» (конtrast с реальностью).",
        explainWrongRu:
          "<em>Apparently</em> (наречие) перед <em>natural landscape</em> не модифицирует существительное.",
        examplesRu: [
          "✓ the <em>apparent</em> simplicity of the design.",
          "✓ APPARENT → <em>apparent</em> (прилаг.).",
          "✗ …the <em>apparently</em> natural landscape… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "apparently",
            hintRu:
              "<em>Apparently</em> — наречие; перед <em>natural landscape</em> → <em>apparent</em>."
          },
          {
            includes: "appear",
            hintRu:
              "Другая форма; основа APPARENT → <em>apparent</em>."
          },
          {
            includes: "appearance",
            hintRu:
              "<em>Appearance</em> — сущ.; нужно прилаг."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "There's also a walkway over the Moscow River which provides a high ",
        afterInline: " platform.",
        afterTail: "",
        cue: "OBSERVE",
        answers: ["observation"],
        keyShow: "observation",
        formationTag: "OBSERVE → -ation · существительное",
        plainRu:
          "«Высокая <strong>смотровая</strong> площадка» → <em>observation</em>.",
        explainRu:
          "Составное: <em>observation platform</em> — OBSERVE → <em>observation</em> (-ation).",
        explainOkRu:
          "<em>Observation</em> = «наблюдение»; <em>observation platform/deck</em>.",
        explainWrongRu:
          "<em>Observe</em> (глагол) или <em>observant</em> (прилаг.) перед <em>platform</em> не ставят.",
        examplesRu: [
          "✓ an <em>observation</em> platform / deck.",
          "✓ OBSERVE → <em>observation</em> (-ation).",
          "✗ …high <em>observe</em> platform… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "observe",
            hintRu:
              "OBSERVE — глагол; «смотровая» → <em>observation platform</em>."
          },
          {
            includes: "observant",
            hintRu:
              "<em>Observant</em> = «наблюдательный» — не про площадку."
          },
          {
            includes: "observer",
            hintRu:
              "<em>Observer</em> = «наблюдатель» — не то."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "It allows visitors a wonderful ",
        afterInline: " view of the embankment.",
        afterTail: "",
        cue: "PANORAMA",
        answers: ["panoramic"],
        keyShow: "panoramic",
        formationTag: "PANORAMA → -ic · прилагательное",
        plainRu:
          "«<strong>Панорамный</strong> вид на набережную» → <em>panoramic</em>.",
        explainRu:
          "Перед <em>view</em> — прилагательное: PANORAMA → <em>panoramic</em> (-ic).",
        explainOkRu:
          "<em>Panoramic</em> = «панорамный».",
        explainWrongRu:
          "<em>Panorama</em> (сущ.) перед <em>view</em> грамматически неверно.",
        examplesRu: [
          "✓ a wonderful <em>panoramic</em> view.",
          "✓ PANORAMA → <em>panoramic</em> (-ic).",
          "✗ …a wonderful <em>panorama</em> view… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "panorama",
            hintRu:
              "PANORAMA — сущ.; «панорамный вид» → <em>panoramic</em>."
          },
          {
            includes: "panoramically",
            hintRu:
              "<em>Panoramically</em> — наречие; нужно прилаг. <em>panoramic</em>."
          },
          {
            includes: "panoramas",
            hintRu:
              "Мн. ч. сущ. не перед <em>view</em> → <em>panoramic</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Zaryadye Park:</strong> -ing (<em>amazing</em>), un- + -ly (<em>unusually</em>), <em>apparent</em> landscape, -ation (<em>observation</em>), -ic (<em>panoramic</em>).</p>" +
      "<p>Если в тексте контраст («кажется природой, но построено») — <em>apparent</em>. Вводное в начале предложения — часто наречие с запятой.</p>"
  });
})(typeof window !== "undefined" ? window : this);
