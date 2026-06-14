/**
 * ЕГЭ Grammar Exam · Unit 20 · Stonehenge (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u20-stonehenge",
    unitOrder: 20,
    title: "Unit 20 · Stonehenge",
    examSection: "§19–24",
    headerTitle: "Stonehenge",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "Stonehenge is perhaps the world's most famous prehistoric monument. It ",
        afterInline: " in several stages.",
        afterTail: "",
        cue: "ERECT",
        answers: ["was erected", "s erected"],
        keyShow: "was erected",
        grammarTag: "Past Simple Passive",
        plainRu:
          "«Стоунхендж <strong>возводили</strong> по этапам» — памятник не сам «erect» → <em>was erected</em>.",
        explainRu:
          "Past Passive от <strong>ERECT</strong>: <em>It was erected in several stages</em>.",
        explainOkRu:
          "<em>Was erected</em> = «был возведён».",
        explainWrongRu:
          "Актив <em>erected</em> без <em>was</em> или Present не подходят.",
        examplesRu: [
          "✓ The bridge <em>was erected</em> in 1890. — Past Passive.",
          "✓ The statue <em>was erected</em> by the king. — «была установлена».",
          "✗ It <em>erected</em> in stages. — нужен пассив."
        ],
        wrongIf: [
          {
            includes: "erected",
            hintRu:
              "Без <em>was</em> пассив неполный → <em>was erected</em>."
          },
          {
            includes: "erects",
            hintRu:
              "Монумент не «erects» → пассив."
          },
          {
            includes: "is erected",
            hintRu:
              "История строительства в прошлом → <em>was</em>."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before: "The ",
        afterInline:
          " monument was an early henge monument, built about 5,000 years ago.",
        afterTail: "",
        cue: "ONE",
        answers: ["first"],
        keyShow: "first",
        grammarTag: "ONE → first · порядковое",
        plainRu:
          "«<strong>Первый</strong> этап / первый монумент» → порядковое от ONE: <em>first</em>.",
        explainRu:
          "ONE в значении «первый по порядку» → <em>the first monument</em>, не <em>one monument</em>.",
        explainOkRu:
          "<em>The first monument</em> — самый ранний этап строительства.",
        explainWrongRu:
          "<em>One monument</em> = «один монумент», а нужно «первый».",
        examplesRu: [
          "✓ the <em>first</em> step — ONE → first.",
          "✓ my <em>first</em> visit to London.",
          "✗ the <em>one</em> monument was… — нужно <em>first</em>."
        ],
        wrongIf: [
          {
            includes: "one",
            hintRu:
              "ONE здесь → порядковое <em>first</em>."
          },
          {
            includes: "once",
            hintRu:
              "<em>Once</em> = «однажды»; нужно <em>first</em>."
          },
          {
            includes: "only",
            hintRu:
              "От ONE не <em>only</em>; нужно «первый» → <em>first</em>."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 1,
        before: "",
        afterInline:
          ", in the Neolithic period about 2500 BC, there appeared the unique stone circle.",
        afterTail:
          " Today, together with Avebury, Stonehenge forms the heart of a World Heritage Site, with a unique concentration of prehistoric monuments.",
        cue: "LATE",
        answers: ["Later", "later"],
        keyShow: "Later",
        grammarTag: "LATE → Later · наречие",
        plainRu:
          "«<strong>Позже</strong>, в неолите…» → наречие <em>Later</em> от LATE в начале предложения.",
        explainRu:
          "Хронология: сначала henge, <em>Later, in the Neolithic period…</em> появился каменный круг.",
        explainOkRu:
          "<em>Later</em> = «позже, затем».",
        explainWrongRu:
          "<em>Late</em> = «поздний»; <em>latest</em> = «новейший» — не то.",
        examplesRu: [
          "✓ <em>Later</em>, they moved to France. — «позже».",
          "✓ First the base, <em>later</em> the stones. — LATE → later.",
          "✗ <em>Late</em>, in the Neolithic… — нужно наречие <em>Later</em>."
        ],
        wrongIf: [
          {
            includes: "late",
            hintRu:
              "Прилагательное <em>late</em> → наречие <em>Later</em> («затем»)."
          },
          {
            includes: "latest",
            hintRu:
              "<em>Latest</em> = «самый новый»; здесь «позже» → <em>Later</em>."
          },
          {
            includes: "lately",
            hintRu:
              "<em>Lately</em> = «в последнее время»; другое значение."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before: "The ",
        afterInline:
          " structures known in the immediate area are four or five pits, three of which appear to have held large pine 'totem-pole like' posts erected in the Mesolithic period.",
        afterTail: "",
        cue: "EARLY",
        answers: ["earliest"],
        keyShow: "earliest",
        grammarTag: "Превосходная степень · EARLY",
        plainRu:
          "«<strong>Самые ранние</strong> сооружения» → превосходная от EARLY: <em>the earliest structures</em>.",
        explainRu:
          "После <em>the</em> и перед существительным — <em>earliest</em> («самые ранние»).",
        explainOkRu:
          "<em>The earliest structures</em> — самые древние из известных.",
        explainWrongRu:
          "EARLY или EARLIER без нужной степени не подходят.",
        examplesRu: [
          "✓ the <em>earliest</em> memories — «самые ранние воспоминания».",
          "✓ EARLY → earlier → <em>earliest</em>.",
          "✗ the <em>early</em> structures known… — нужна превосходная."
        ],
        wrongIf: [
          {
            includes: "early",
            hintRu:
              "EARLY → превосходная <em>earliest</em> после <em>the</em>."
          },
          {
            includes: "earlier",
            hintRu:
              "<em>Earlier</em> — сравнительная; здесь «самые ранние»."
          },
          {
            includes: "earliestly",
            hintRu:
              "Такой формы нет → <em>earliest</em>."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 2,
        before: "It ",
        afterInline: " how these posts relate to the monument of Stonehenge.",
        afterTail:
          " At this time, when much of the rest of southern England was largely covered by woodland, the chalk downland in the area of Stonehenge may have been an unusually open landscape.",
        cue: "NOT KNOW",
        answers: [
          "is not known",
          "isn't known",
          "isnt known"
        ],
        keyShow: "isn't known",
        grammarTag: "Present Passive · безличное",
        plainRu:
          "«<strong>Неизвестно</strong>, как эти столбы связаны…» → безличное <em>It is not known how</em>.",
        explainRu:
          "NOT + KNOW в пассиве: <em>It is not known how these posts relate…</em>",
        explainOkRu:
          "<em>It isn't known how</em> — «неизвестно, как…»",
        explainWrongRu:
          "Актив «it not know» невозможен; нужен пассив с <em>is</em>.",
        examplesRu: [
          "✓ It <em>is not known</em> where he lives. — «неизвестно, где…»",
          "✓ It <em>isn't known</em> why they left.",
          "✗ It <em>not know</em> how… — нужно <em>is not known</em>."
        ],
        wrongIf: [
          {
            includes: "not know",
            hintRu:
              "Без <em>is</em> → <em>is not known</em>."
          },
          {
            includes: "does not know",
            hintRu:
              "«Оно не знает» — не то; безличное «неизвестно» → пассив."
          },
          {
            includes: "was not known",
            hintRu:
              "Present «до сих пор неизвестно» → <em>is not known</em>."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 2,
        before:
          "It is possible that this is why it became the site of an early Neolithic monument complex ",
        afterInline: " back to the period between 8500 and 7000 BC.",
        afterTail: "",
        cue: "DATE",
        answers: ["dating"],
        keyShow: "dating",
        grammarTag: "Participle I · dating back",
        plainRu:
          "«Комплекс, <strong>относящийся</strong> к периоду…» → устойчивое <em>dating back to</em>.",
        explainRu:
          "Приложение к <em>complex</em>: <em>a monument complex dating back to the period</em> от <strong>DATE</strong>.",
        explainOkRu:
          "<em>Dating back to</em> = «восходящий к / датируемый периодом».",
        explainWrongRu:
          "Голый <em>date</em> или Past <em>dated</em> без контекста хуже.",
        examplesRu: [
          "✓ traditions <em>dating back to</em> the 12th century.",
          "✓ a custom <em>dating back</em> centuries.",
          "✗ …complex <em>date</em> back to… — нужно <em>dating</em>."
        ],
        wrongIf: [
          {
            includes: "date",
            hintRu:
              "После <em>complex</em> → Participle I <em>dating back</em>."
          },
          {
            includes: "dated",
            hintRu:
              "Past Participle «датированный» возможен, но в ключе чаще <em>dating back</em>."
          },
          {
            includes: "dates",
            hintRu:
              "Present <em>dates</em> — отдельное сказуемое; здесь определение."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Stonehenge — финал серии:</strong> <em>was erected</em>; ONE → <em>first</em>; LATE → <em>Later</em>.</p>" +
      "<p>EARLY → <em>earliest</em>; <em>It is not known how</em>; <em>dating back to</em>.</p>"
  });
})(typeof window !== "undefined" ? window : this);
