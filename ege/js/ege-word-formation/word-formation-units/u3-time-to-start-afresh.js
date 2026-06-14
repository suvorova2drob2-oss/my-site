/**
 * Word Formation Exam · Unit 3 · Time to start afresh (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u3-time-to-start-afresh",
    unitOrder: 3,
    title: "Unit 3 · Time to start afresh",
    examSection: "§25–29",
    headerTitle: "Time to start afresh",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "There are moments when we feel that there is nothing more that we can do. It is the time to change your life, to begin to live in a different way or do things differently. Define clear goals for yourself and ",
        afterInline: " them based on their importance.",
        afterTail: "",
        cue: "PRIORITY",
        answers: ["prioritize", "prioritise"],
        keyShow: "prioritize",
        formationTag: "PRIORITY → -ize · глагол",
        plainRu:
          "«<strong>Расставь приоритеты</strong> среди целей» → глагол <em>prioritize</em> от PRIORITY.",
        explainRu:
          "После <em>and</em> параллельно <em>Define … goals</em> — второй глагол: <em>prioritize them</em> (-ize/-ise от существительного).",
        explainOkRu:
          "<em>Prioritize</em> = «расставлять по приоритету, выделять главное».",
        explainWrongRu:
          "<em>Priority</em> (сущ.) или <em>priorities</em> после <em>and</em> не сочетаются с <em>them</em> как действие.",
        examplesRu: [
          "✓ <em>prioritize</em> tasks by importance.",
          "✓ PRIORITY → <em>prioritize</em> (-ize).",
          "✗ …and <em>priority</em> them… — нужен глагол."
        ],
        wrongIf: [
          {
            includes: "priority",
            hintRu:
              "PRIORITY — сущ.; «расставь по важности» → <em>prioritize</em>."
          },
          {
            includes: "priorities",
            hintRu:
              "Мн. ч. сущ. не глагол → <em>prioritize them</em>."
          },
          {
            includes: "prioritized",
            hintRu:
              "Прош. время не нужно; параллель <em>Define</em> → <em>prioritize</em>."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "Breaking down your journey into smaller, ",
        afterInline: " steps can make the process easier.",
        afterTail: "",
        cue: "MANAGE",
        answers: ["manageable"],
        keyShow: "manageable",
        formationTag: "MANAGE → -able · прилагательное",
        plainRu:
          "«<strong>Посильные / управляемые</strong> шаги» → <em>manageable</em>.",
        explainRu:
          "Перед <em>steps</em> — прилагательное: MANAGE + <strong>-able</strong> = «которые можно осилить».",
        explainOkRu:
          "<em>Manageable</em> = «посильный, не перегружающий».",
        explainWrongRu:
          "<em>Manage</em> (глагол) или <em>management</em> (сущ.) перед <em>steps</em> не ставят.",
        examplesRu: [
          "✓ small, <em>manageable</em> steps.",
          "✓ MANAGE → <em>manageable</em> (как change → changeable).",
          "✗ …smaller, <em>manage</em> steps… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "manage",
            hintRu:
              "MANAGE — глагол; перед <em>steps</em> → <em>manageable</em>."
          },
          {
            includes: "management",
            hintRu:
              "<em>Management</em> — сущ.; нужно прилаг. <em>manageable</em>."
          },
          {
            includes: "manager",
            hintRu:
              "<em>Manager</em> = «менеджер» — не то."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "Learn from past experiences, both successes and failures. Identify lessons learned and use them as building blocks for a better start. Consider what worked well and what didn't, and use this knowledge to make more informed ",
        afterInline: " moving forward.",
        afterTail: "",
        cue: "DECIDE",
        answers: ["decisions"],
        keyShow: "decisions",
        formationTag: "DECIDE → decision · мн. ч.",
        plainRu:
          "«Принимать более взвешенные <strong>решения</strong>» → <em>decisions</em>.",
        explainRu:
          "После <em>informed</em> — существительное: <em>informed decisions</em>. DECIDE → <em>decision</em> → мн. ч.",
        explainOkRu:
          "<em>Decisions</em> = «решения»; <em>make informed decisions</em> — устойчивое.",
        explainWrongRu:
          "<em>Decide</em> (глагол) после <em>make more informed</em> не подходит.",
        examplesRu: [
          "✓ make informed <em>decisions</em>.",
          "✓ DECIDE → <em>decision</em> → <em>decisions</em>.",
          "✗ …more informed <em>decide</em>… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "decide",
            hintRu:
              "DECIDE — глагол; после <em>informed</em> → <em>decisions</em>."
          },
          {
            includes: "decision",
            hintRu:
              "Обычно не одно «решение» → мн. ч. <em>decisions</em>."
          },
          {
            includes: "deciding",
            hintRu:
              "Gerund не после <em>make informed</em> → <em>decisions</em>."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "This self-reflection can be a ",
        afterInline: " tool for personal and professional growth.",
        afterTail: "",
        cue: "POWER",
        answers: ["powerful"],
        keyShow: "powerful",
        formationTag: "POWER → -ful · прилагательное",
        plainRu:
          "«<strong>Мощный / сильный</strong> инструмент» → <em>powerful</em>.",
        explainRu:
          "Перед <em>tool</em> — прилагательное: POWER + <strong>-ful</strong> (не путать с <em>power</em> как сущ.).",
        explainOkRu:
          "<em>Powerful</em> = «мощный, действенный».",
        explainWrongRu:
          "<em>Power</em> (сущ.) перед <em>tool</em> грамматически неверно.",
        examplesRu: [
          "✓ a <em>powerful</em> tool for growth.",
          "✓ POWER → <em>powerful</em> (как help → helpful).",
          "✗ …a <em>power</em> tool… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "power",
            hintRu:
              "POWER — сущ.; перед <em>tool</em> → <em>powerful</em>."
          },
          {
            includes: "powerfully",
            hintRu:
              "<em>Powerfully</em> — наречие; нужно прилаг. <em>powerful</em>."
          },
          {
            includes: "powerless",
            hintRu:
              "Смысл текста: инструмент <em>помогает</em> → <em>powerful</em>, не «бессильный»."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "Remember, it's a process that involves determination and a willingness to explore new ",
        afterInline: ".",
        afterTail: "",
        cue: "POSSIBLE",
        answers: ["possibilities"],
        keyShow: "possibilities",
        formationTag: "POSSIBLE → possibility · мн. ч.",
        plainRu:
          "«Исследовать новые <strong>возможности</strong>» → <em>possibilities</em>.",
        explainRu:
          "После <em>new</em> — существительное: POSSIBLE → <em>possibility</em> → мн. ч. <em>possibilities</em>.",
        explainOkRu:
          "<em>Possibilities</em> = «новые возможности, варианты».",
        explainWrongRu:
          "<em>Possible</em> (прилаг.) или <em>possibly</em> (наречие) после <em>new</em> не ставят.",
        examplesRu: [
          "✓ explore new <em>possibilities</em>.",
          "✓ POSSIBLE → <em>possibility</em> → <em>possibilities</em>.",
          "✗ …new <em>possible</em>. — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "possible",
            hintRu:
              "POSSIBLE — прилаг.; после <em>new</em> → <em>possibilities</em>."
          },
          {
            includes: "possibility",
            hintRu:
              "После <em>explore new</em> чаще мн. ч. → <em>possibilities</em>."
          },
          {
            includes: "possibly",
            hintRu:
              "<em>Possibly</em> — наречие; нужно сущ. <em>possibilities</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Time to start afresh:</strong> -ize (<em>prioritize</em>), -able (<em>manageable</em>), сущ. мн. ч. (<em>decisions</em>, <em>possibilities</em>), -ful (<em>powerful</em>).</p>" +
      "<p>После <em>and</em> смотри параллель: <em>Define … and prioritize …</em>. После <em>a / new / informed</em> — часто прилаг. или сущ., не глагол.</p>"
  });
})(typeof window !== "undefined" ? window : this);
