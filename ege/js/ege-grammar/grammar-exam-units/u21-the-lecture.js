/**
 * ЕГЭ Grammar Exam · Unit 21 · The lecture (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u21-the-lecture",
    unitOrder: 21,
    title: "Unit 21 · The lecture",
    examSection: "§19–24",
    headerTitle: "The lecture",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before: "By the time we arrived, the lecture ",
        afterInline: ".",
        afterTail: "",
        cue: "START",
        answers: ["had started", "had already started"],
        keyShow: "had started",
        grammarTag: "Past Perfect · by the time",
        plainRu:
          "«К тому моменту, как мы пришли, лекция <strong>уже началась</strong>». START → <em>had started</em>.",
        explainRu:
          "<em>By the time</em> = «к тому времени, как». Более раннее действие — Past Perfect: <em>had + V3</em>.",
        explainOkRu:
          "Верно: лекция началась <strong>раньше</strong>, чем мы пришли.",
        explainWrongRu:
          "Голый <em>started</em> не показывает «уже до нашего прихода». Нужно <em>had started</em>.",
        examplesRu: [
          "✓ By the time I got home, she <em>had left</em>.",
          "✓ The film <em>had started</em> before we sat down.",
          "✗ By the time we arrived, it <em>started</em>. — не хватает had."
        ],
        wrongIf: [
          {
            includes: "started",
            hintRu: "Past Simple мало. <em>By the time</em> → <em>had started</em>."
          },
          {
            includes: "has started",
            hintRu: "Present Perfect не сюда: оба действия в прошлом → <em>had started</em>."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before: "If I ",
        afterInline: " about the delay, I would have left home earlier.",
        afterTail: "",
        cue: "KNOW",
        answers: ["had known"],
        keyShow: "had known",
        grammarTag: "Third Conditional",
        plainRu:
          "«Если бы я <strong>знал</strong> про задержку…» — нереальное прошлое: <em>had known</em>.",
        explainRu:
          "3rd Conditional: <em>If + Past Perfect, would have + V3</em>. KNOW → <em>had known</em>.",
        explainOkRu:
          "Ты поставил Past Perfect: условие в прошлом, которого не было.",
        explainWrongRu:
          "<em>Knew / know</em> не подходят: дальше <em>would have left</em> — это 3rd Conditional.",
        examplesRu: [
          "✓ If I <em>had known</em>, I would have called.",
          "✓ If she <em>had studied</em>, she would have passed.",
          "✗ If I <em>knew</em>, I would have left. — knew = 2nd Conditional."
        ],
        wrongIf: [
          {
            includes: "knew",
            hintRu: "<em>Knew</em> — 2nd Conditional. Здесь <em>would have</em> → <em>had known</em>."
          },
          {
            includes: "know",
            hintRu: "Голый KNOW нельзя. Нужно <em>had known</em>."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 1,
        before: "The students ",
        afterInline: " taking notes quietly.",
        afterTail: "",
        cue: "BE",
        answers: ["were"],
        keyShow: "were",
        grammarTag: "Past Continuous",
        plainRu:
          "«Студенты <strong>конспектировали</strong>» — процесс в прошлом: <em>were taking</em>.",
        explainRu:
          "Past Continuous: <em>was/were + V-ing</em>. Подлежащее <em>students</em> (мн.) → <em>were</em>. <em>Taking</em> уже в тексте.",
        explainOkRu:
          "<em>Were taking</em> = «в тот момент конспектировали».",
        explainWrongRu:
          "В ячейку только форма BE. <em>Taking</em> уже стоит после пропуска.",
        examplesRu: [
          "✓ They <em>were</em> sitting quietly.",
          "✓ We <em>were</em> waiting when the bus came.",
          "✗ The students <em>was</em> taking notes. — students = were."
        ],
        wrongIf: [
          {
            includes: "was",
            hintRu: "<em>Students</em> — множественное → <em>were</em>."
          },
          {
            includes: "are",
            hintRu: "Текст в прошлом (arrived) → <em>were</em>, не <em>are</em>."
          },
          {
            includes: "been",
            hintRu: "Нужно <em>were taking</em>, не <em>been</em>."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before: "She suggested ",
        afterInline: " to the library instead of staying at home.",
        afterTail: "",
        cue: "GO",
        answers: ["going"],
        keyShow: "going",
        grammarTag: "suggest + V-ing",
        plainRu:
          "«Она предложила <strong>пойти</strong>» — после <em>suggest</em> глагол с -ing: <em>going</em>.",
        explainRu:
          "<em>Suggest doing</em> (не <em>suggest to do</em>). GO → <em>going</em>.",
        explainOkRu:
          "<em>Suggested going</em> = «предложила пойти».",
        explainWrongRu:
          "<em>To go / go / went</em> после suggest в этом значении не ставят.",
        examplesRu: [
          "✓ He suggested <em>waiting</em>.",
          "✓ I suggest <em>going</em> by train.",
          "✗ She suggested <em>to go</em>. — нужно <em>going</em>."
        ],
        wrongIf: [
          {
            includes: "to go",
            hintRu: "После <em>suggest</em> не <em>to go</em>, а <em>going</em>."
          },
          {
            includes: "go",
            hintRu: "Нужна -ing форма: <em>going</em>."
          },
          {
            includes: "went",
            hintRu: "<em>Went</em> — прошлое; после suggest → <em>going</em>."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 2,
        before: "If I ",
        afterInline: " you, I would revise harder.",
        afterTail: "",
        cue: "BE",
        answers: ["were"],
        keyShow: "were",
        grammarTag: "Second Conditional · were",
        plainRu:
          "«На твоём месте» — <em>If I were you</em>. Даже с I ставят <em>were</em>.",
        explainRu:
          "2nd Conditional: <em>If + Past, would + V1</em>. Устойчиво: <em>If I were you</em> (не <em>was</em>).",
        explainOkRu:
          "Классическая формула совета: <em>If I were you</em>.",
        explainWrongRu:
          "<em>Was</em> в разговорной речи бывает, но в ЕГЭ ключ — <em>were</em>.",
        examplesRu: [
          "✓ If I <em>were</em> you, I'd call her.",
          "✓ If he <em>were</em> here, we would start.",
          "✗ If I <em>am</em> you… — так не говорят."
        ],
        wrongIf: [
          {
            includes: "was",
            hintRu: "В ЕГЭ после <em>If I</em> в совете → <em>were</em>."
          },
          {
            includes: "am",
            hintRu: "Настоящее не сюда. Нужно <em>were</em>."
          },
          {
            includes: "been",
            hintRu: "Не <em>been</em>, а <em>were</em>."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 2,
        before: "The scientist published an article which was widely ",
        afterInline: " in the media.",
        afterTail: "",
        cue: "DISCUSS",
        answers: ["discussed"],
        keyShow: "discussed",
        grammarTag: "Passive · V3",
        plainRu:
          "«Статью <strong>обсуждали</strong>» — пассив: <em>was discussed</em>. <em>Was</em> уже в тексте.",
        explainRu:
          "Passive = <em>be + V3</em>. DISCUSS → <em>discussed</em>. Слово <em>was</em> уже стоит перед пропуском.",
        explainOkRu:
          "<em>Was widely discussed</em> = «широко обсуждалась».",
        explainWrongRu:
          "Не пиши <em>was</em> ещё раз и не ставь -ing. Нужен V3: <em>discussed</em>.",
        examplesRu: [
          "✓ The film was <em>discussed</em> everywhere.",
          "✓ The news is widely <em>discussed</em>.",
          "✗ which was widely <em>discussing</em>. — нужен V3."
        ],
        wrongIf: [
          {
            includes: "discussing",
            hintRu: "После <em>was</em> здесь V3, не -ing → <em>discussed</em>."
          },
          {
            includes: "discuss",
            hintRu: "Голый глагол нельзя. Нужен V3: <em>discussed</em>."
          },
          {
            includes: "was discussed",
            hintRu: "<em>Was</em> уже в тексте. В ячейку только <em>discussed</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Запомни:</strong> жёлтое слово справа почти никогда не вставляй «как есть» — его нужно <strong>изменить</strong>.</p>" +
      "<p><em>By the time</em> → often <em>had + V3</em>. <em>Suggest</em> → <em>V-ing</em>. <em>If I ___ you</em> → <em>were</em>. <em>Was/were + ___</em> в пассиве → V3.</p>"
  });
})(typeof window !== "undefined" ? window : this);
