/**
 * Word Formation Exam · Unit 22 · After the exam (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u22-after-the-exam",
    unitOrder: 22,
    title: "Unit 22 · After the exam",
    examSection: "§25–29",
    headerTitle: "After the exam",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before: "Although the exam was difficult, most students felt ",
        afterInline: " after the preparation course.",
        afterTail: "",
        cue: "CONFIDENCE",
        answers: ["confident"],
        keyShow: "confident",
        formationTag: "CONFIDENCE → прилагательное",
        plainRu:
          "«Чувствовали себя <strong>уверенно</strong>» → прилагательное <em>confident</em>.",
        explainRu:
          "После <em>felt</em> — прилагательное. CONFIDENCE (сущ.) → <em>confident</em>.",
        explainOkRu:
          "<em>Felt confident</em> = «чувствовали себя уверенными».",
        explainWrongRu:
          "Существительное <em>confidence</em> после <em>felt</em> не ставят.",
        examplesRu: [
          "✓ She felt <em>confident</em>.",
          "✓ CONFIDENCE → <em>confident</em>",
          "✗ felt <em>confidence</em> — нужно прилагательное."
        ],
        wrongIf: [
          {
            includes: "confidence",
            hintRu: "После <em>felt</em> → <em>confident</em>, не сущ."
          },
          {
            includes: "confidently",
            hintRu: "Наречие реже; ключ ЕГЭ — <em>confident</em>."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before: "We should pay more attention to ",
        afterInline: " and protecting the planet.",
        afterTail: "",
        cue: "RECYCLE",
        answers: ["recycling"],
        keyShow: "recycling",
        formationTag: "RECYCLE → -ing · существительное",
        plainRu:
          "«Больше внимания <strong>переработке</strong>» → <em>recycling</em>.",
        explainRu:
          "После <em>attention to</em> — существительное / gerund. RECYCLE → <em>recycling</em>. Параллель с <em>protecting</em>.",
        explainOkRu:
          "<em>Recycling and protecting</em> — два -ing рядом.",
        explainWrongRu:
          "Голый глагол <em>recycle</em> после <em>to</em> здесь не тот: это не infinitive <em>to recycle</em>, а <em>attention to + noun</em>.",
        examplesRu: [
          "✓ pay attention to <em>recycling</em>",
          "✓ RECYCLE → <em>recycling</em>",
          "✗ attention to <em>recycle</em>"
        ],
        wrongIf: [
          {
            includes: "recycle",
            hintRu: "После <em>attention to</em> → <em>recycling</em>."
          },
          {
            includes: "recycled",
            hintRu: "Нужно <em>recycling</em> (процесс), не V3."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before: "His speech was so ",
        afterInline: " that half the audience fell asleep.",
        afterTail: "",
        cue: "BORE",
        answers: ["boring"],
        keyShow: "boring",
        formationTag: "BORE → -ing · прилагательное",
        plainRu:
          "«Речь была такой <strong>скучной</strong>» → <em>boring</em> (о вещи), не <em>bored</em> (о человеке).",
        explainRu:
          "После <em>so</em> — прилагательное. Речь (вещь) → <em>boring</em>. Люди → <em>bored</em>.",
        explainOkRu:
          "<em>So boring that…</em> = «настолько скучная, что…».",
        explainWrongRu:
          "<em>Bored</em> = «скучающий» (человек). Речь не bored.",
        examplesRu: [
          "✓ The film was <em>boring</em>.",
          "✓ I was <em>bored</em>. — про человека",
          "✗ The speech was <em>bored</em>."
        ],
        wrongIf: [
          {
            includes: "bored",
            hintRu: "Речь — вещь → <em>boring</em>, не <em>bored</em>."
          },
          {
            includes: "bore",
            hintRu: "Нужно прилагательное <em>boring</em>."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before: "The hotel offers excellent ",
        afterInline: " for tourists.",
        afterTail: "",
        cue: "ACCOMMODATE",
        answers: ["accommodation"],
        keyShow: "accommodation",
        formationTag: "ACCOMMODATE → -ation · существительное",
        plainRu:
          "«Отличное <strong>жильё</strong>» → <em>accommodation</em> (обычно без -s).",
        explainRu:
          "После <em>excellent</em> — существительное. ACCOMMODATE → <em>accommodation</em>.",
        explainOkRu:
          "<em>Excellent accommodation</em> = «отличное размещение / жильё».",
        explainWrongRu:
          "Глагол <em>accommodate</em> после прилагательного не ставят.",
        examplesRu: [
          "✓ hotel <em>accommodation</em>",
          "✓ ACCOMMODATE → <em>accommodation</em>",
          "✗ excellent <em>accommodate</em>"
        ],
        wrongIf: [
          {
            includes: "accommodate",
            hintRu: "Нужно существительное <em>accommodation</em>."
          },
          {
            includes: "accommodations",
            hintRu: "В брит. ЕГЭ обычно <em>accommodation</em> без -s."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before: "The children were full of ",
        afterInline: " about the new teacher.",
        afterTail: "",
        cue: "CURIOUS",
        answers: ["curiosity"],
        keyShow: "curiosity",
        formationTag: "CURIOUS → -ity · существительное",
        plainRu:
          "«Полны <strong>любопытства</strong>» → существительное <em>curiosity</em>.",
        explainRu:
          "После <em>full of</em> — существительное. CURIOUS (прилаг.) → <em>curiosity</em>.",
        explainOkRu:
          "<em>Full of curiosity</em> = «полны любопытства».",
        explainWrongRu:
          "Прилагательное <em>curious</em> после <em>full of</em> не ставят.",
        examplesRu: [
          "✓ full of <em>curiosity</em>",
          "✓ CURIOUS → <em>curiosity</em> (как able → ability)",
          "✗ full of <em>curious</em>"
        ],
        wrongIf: [
          {
            includes: "curious",
            hintRu: "После <em>full of</em> → сущ. <em>curiosity</em>."
          },
          {
            includes: "curiously",
            hintRu: "Наречие не после <em>full of</em> → <em>curiosity</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>§25–29:</strong> <em>felt / so / excellent</em> → часто прилагательное; <em>full of / attention to</em> → существительное.</p>" +
      "<p>BORE: вещь = <em>boring</em>, человек = <em>bored</em>.</p>"
  });
})(typeof window !== "undefined" ? window : this);
