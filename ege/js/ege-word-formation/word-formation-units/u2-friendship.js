/**
 * Word Formation Exam · Unit 2 · Friendship (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u2-friendship",
    unitOrder: 2,
    title: "Unit 2 · Friendship",
    examSection: "§25–29",
    headerTitle: "Friendship",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "It may look like friendship just happens. It may look ",
        afterInline:
          ", but in fact it requires a lot of effort from both friends.",
        afterTail: "",
        cue: "EFFORT",
        answers: ["effortless"],
        keyShow: "effortless",
        formationTag: "EFFORT → -less · прилагательное",
        plainRu:
          "«Кажется <strong>лёгким / без усилий</strong>» → прилагательное с -less: <em>effortless</em>.",
        explainRu:
          "После <em>It may look</em> нужно прилагательное. EFFORT + <strong>-less</strong> = «без усилий»; дальше в тексте как раз <em>requires effort</em> — контраст.",
        explainOkRu:
          "<em>Effortless</em> = «лёгкий, не требующий усилий» (на первый взгляд).",
        explainWrongRu:
          "<em>Effort</em> — существительное; после <em>look</em> нужно прилагательное.",
        examplesRu: [
          "✓ It looks <em>effortless</em>, but it isn't. — «кажется лёгким».",
          "✓ EFFORT → <em>effortless</em> (как hope → hopeless).",
          "✗ It may look <em>effort</em>… — нужно прилаг. с -less."
        ],
        wrongIf: [
          {
            includes: "effort",
            hintRu:
              "EFFORT — сущ.; «кажется лёгким» → <em>effortless</em>."
          },
          {
            includes: "efforts",
            hintRu:
              "Мн. ч. «усилия» не после <em>look</em> → <em>effortless</em>."
          },
          {
            includes: "effortful",
            hintRu:
              "Смысл текста: «кажется лёгко, но на деле нужен effort» → <em>effortless</em>."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "Building and maintaining a strong bond in any ",
        afterInline: " requires effort, communication, and commitment.",
        afterTail: "",
        cue: "RELATION",
        answers: ["relationship"],
        keyShow: "relationship",
        formationTag: "RELATION → -ship · существительное",
        plainRu:
          "«В любых <strong>отношениях</strong>» → <em>relationship</em> от RELATION.",
        explainRu:
          "После <em>any</em> — существительное: <em>any relationship</em>. Часто RELATION → <em>relationship</em> (-ship).",
        explainOkRu:
          "<em>Relationship</em> = «отношения (между людьми)».",
        explainWrongRu:
          "RELATION без -ship или во мн. ч. <em>relations</em> — другой оттенок; здесь «bond in any …» → <em>relationship</em>.",
        examplesRu: [
          "✓ a strong <em>relationship</em> — «крепкие отношения».",
          "✓ RELATION → <em>relationship</em> (-ship).",
          "✗ …in any <em>relation</em> requires… — нужно <em>relationship</em>."
        ],
        wrongIf: [
          {
            includes: "relation",
            hintRu:
              "Голое <em>relation</em> реже «дружба/связь» → <em>relationship</em>."
          },
          {
            includes: "relations",
            hintRu:
              "<em>Relations</em> = «отношения между странами» и т.п.; здесь личная связь → <em>relationship</em>."
          },
          {
            includes: "relative",
            hintRu:
              "<em>Relative</em> = «родственник» — не то."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "Communication involves both talking and active listening. Make sure to express your thoughts and emotions ",
        afterInline:
          ". Effective communication helps prevent misunderstandings and fosters a deeper connection.",
        afterTail: "",
        cue: "RESPECT",
        answers: ["respectfully"],
        keyShow: "respectfully",
        formationTag: "RESPECT → -fully · наречие",
        plainRu:
          "«Выражать мысли <strong>уважительно</strong>» → наречие <em>respectfully</em>.",
        explainRu:
          "Глагол <em>express</em> часто с наречием: <em>express … respectfully</em> от RESPECT + -fully.",
        explainOkRu:
          "<em>Respectfully</em> = «с уважением, уважительно».",
        explainWrongRu:
          "<em>Respect</em> (сущ.) или <em>respectful</em> (прилаг.) не модифицируют глагол напрямую.",
        examplesRu: [
          "✓ speak <em>respectfully</em> to someone.",
          "✓ RESPECT → <em>respectfully</em> (как careful → carefully).",
          "✗ express … <em>respect</em>. — нужно наречие."
        ],
        wrongIf: [
          {
            includes: "respect",
            hintRu:
              "Сущ. <em>respect</em> → наречие <em>respectfully</em>."
          },
          {
            includes: "respectful",
            hintRu:
              "<em>Respectful</em> — прилаг.; нужно наречие <em>respectfully</em>."
          },
          {
            includes: "respecting",
            hintRu:
              "Gerund «уважая» — другая конструкция; здесь -ly."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "Open communication and mutual support are fundamental elements that can help ensure the bond stays strong over time. Engage in various ",
        afterInline:
          " that you both enjoy, and make a conscious effort to be present in the moment.",
        afterTail: "",
        cue: "ACTIVE",
        answers: ["activities"],
        keyShow: "activities",
        formationTag: "ACTIVE → activity · мн. ч.",
        plainRu:
          "«Разные <strong>активности / занятия</strong>» → <em>activities</em> (мн. ч.).",
        explainRu:
          "После <em>various</em> — мн. ч.: ACTIVE → <em>activity</em> → <em>activities</em>.",
        explainOkRu:
          "<em>Activities</em> = «виды деятельности, занятия вместе».",
        explainWrongRu:
          "ACTIVE — прилаг.; <em>activity</em> в ед. ч. после <em>various</em> обычно не ставят.",
        examplesRu: [
          "✓ various <em>activities</em> — «разные занятия».",
          "✓ ACTIVE → <em>activity</em> → <em>activities</em>.",
          "✗ …various <em>active</em>… — нужно существительное."
        ],
        wrongIf: [
          {
            includes: "active",
            hintRu:
              "ACTIVE — прилаг.; «занятия» → <em>activities</em>."
          },
          {
            includes: "activity",
            hintRu:
              "После <em>various</em> → мн. ч. <em>activities</em>."
          },
          {
            includes: "actively",
            hintRu:
              "<em>Actively</em> — наречие; нужно сущ. <em>activities</em>."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "Additionally, actively working together to overcome obstacles and challenges can ",
        afterInline: " the connection between friends.",
        afterTail: "",
        cue: "STRENGTH",
        answers: ["strengthen"],
        keyShow: "strengthen",
        formationTag: "STRENGTH → -en · глагол",
        plainRu:
          "«Может <strong>укрепить</strong> связь» → глагол <em>strengthen</em> от STRENGTH.",
        explainRu:
          "После <em>can</em> — глагол в начальной форме: <em>strengthen the connection</em> (-en от существительного).",
        explainOkRu:
          "<em>Strengthen</em> = «укреплять, делать сильнее».",
        explainWrongRu:
          "STRENGTH (сущ.) или STRONG (прилаг.) после <em>can</em> не подходят.",
        examplesRu: [
          "✓ This can <em>strengthen</em> your friendship.",
          "✓ STRENGTH → <em>strengthen</em> (как length → lengthen).",
          "✗ …can <em>strength</em> the connection. — нужен глагол."
        ],
        wrongIf: [
          {
            includes: "strength",
            hintRu:
              "STRENGTH — сущ.; после <em>can</em> → <em>strengthen</em>."
          },
          {
            includes: "strong",
            hintRu:
              "<em>Strong</em> — прилаг.; нужен глагол <em>strengthen</em>."
          },
          {
            includes: "stronger",
            hintRu:
              "Сравнительная не глагол → <em>strengthen</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Friendship:</strong> -less (<em>effortless</em>), -ship (<em>relationship</em>), -fully (<em>respectfully</em>), мн. ч. (<em>activities</em>), -en (<em>strengthen</em>).</p>" +
      "<p>Смотри на слово <em>после</em> пропуска: <em>look + adj</em>, <em>can + verb</em>, <em>various + plural noun</em>.</p>"
  });
})(typeof window !== "undefined" ? window : this);
