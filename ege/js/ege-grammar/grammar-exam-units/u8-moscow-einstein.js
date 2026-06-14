/**
 * ЕГЭ Grammar Exam · Unit 8 · Rise of Moscow · Einstein (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u8-moscow-einstein",
    unitOrder: 8,
    title: "Unit 8 · Moscow · Einstein",
    examSection: "§19–24",
    headerTitle: "The rise of Moscow as the capital",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "By the second half of the 15th century Moscow became the undisputed centre of a unified Russian state. During the reign of the grand prince of Moscow Ivan III, the Kremlin ",
        afterInline:
          " and it got brick walls more than a mile in length and in some places up to 60 feet (18 metres) high.",
        afterTail: "",
        cue: "ENLARGE",
        answers: ["was enlarged", "enlarged"],
        keyShow: "was enlarged",
        grammarTag: "Past Simple · пассив",
        explainRu:
          "Кремль <strong>расширили</strong> → пассив Past Simple от <strong>ENLARGE</strong>: <em>was enlarged</em>.",
        explainOkRu:
          "<em>Was enlarged</em> — объект действия (Кремль), не «Кремль сам enlarge»; дальше <em>got brick walls</em>.",
        explainWrongRu:
          "Нужен пассив «был расширен», а не существительное или актив без <em>was</em>.",
        wrongIf: [
          {
            includes: "enlarge",
            hintRu:
              "Голый <em>enlarge</em> не стоит после подлежащего <em>the Kremlin</em> → <em>was enlarged</em>."
          },
          {
            includes: "enlarged",
            hintRu:
              "Иногда допустимо кратко, но полная форма — <em>was enlarged</em>."
          },
          {
            includes: "enlarging",
            hintRu:
              "<em>Enlarging</em> — актив; Кремль <strong>расширили</strong> → пассив."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before: "In 1534-38 the Kitay-gorod, previously ",
        afterInline:
          " only by earth banks and palisades, was also surrounded by a brick wall, with 12 towers.",
        afterTail: "",
        cue: "PROTECT",
        answers: ["protected", "was protected"],
        keyShow: "protected",
        grammarTag: "Participle II · пассив",
        explainRu:
          "«Ранее <strong>защищённый</strong> лишь валами» → Past Participle от <strong>PROTECT</strong>: <em>previously protected by</em>.",
        explainOkRu:
          "<em>Previously protected only by…</em> — причастный оборот; Китай-город не «protect», а <strong>его</strong> защищали.",
        explainWrongRu:
          "Нужна форма «защищённый», не актив <em>protect / protecting</em>.",
        wrongIf: [
          {
            includes: "protect",
            hintRu:
              "Инфинитив/Present <em>protect</em> не вставляется между <em>previously</em> и <em>only by</em>."
          },
          {
            includes: "protecting",
            hintRu:
              "<em>Protecting</em> — «который защищает»; смысл пассива → <em>protected</em>."
          },
          {
            includes: "protection",
            hintRu:
              "<em>Protection</em> — существительное; нужно причастие <em>protected</em>."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 1,
        before: "The town ",
        afterInline:
          ' and spread outside the walls to form what became known as the Bely Gorod ("White City") in a semicircle around the Kremlin and Kitay-gorod.',
        afterTail: "",
        cue: "GROW",
        answers: ["grew", "was growing"],
        keyShow: "grew",
        grammarTag: "Past Simple",
        explainRu:
          "Пара <em>grew and spread</em> — оба действия в прошлом → Past Simple от <strong>GROW</strong>: <em>grew</em>.",
        explainOkRu:
          "<em>Grew</em> — неправильная форма «расти / разрастаться»; город рос и <em>spread</em> за стены.",
        explainWrongRu:
          "Нужна прошедшая форма, не инфинитив <em>grow</em> или Present.",
        wrongIf: [
          {
            includes: "grow",
            hintRu:
              "Present/инфинитив не параллелят <em>spread</em> (Past) → <em>grew</em>."
          },
          {
            includes: "grown",
            hintRu:
              "Participle III без <em>has/had</em> не сказуемое здесь → <em>grew</em>."
          },
          {
            includes: "growing",
            hintRu:
              "<em>Growing and spread</em> — разные конструкции; типично <em>grew and spread</em>."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before:
          "Albert Einstein. Most people probably know Albert Einstein as the most intelligent person who ever lived. His name ",
        afterInline:
          " part of many languages when we want to say someone is a genius, as in the phrase, 'She's a real Einstein'.",
        afterTail: "",
        cue: "BECOME",
        answers: ["has become", "became", "'s become", "s become"],
        keyShow: "has become",
        grammarTag: "Present Perfect",
        explainRu:
          "«Его имя <strong>стало</strong> частью языков» — результат к настоящему → Present Perfect: <em>has become</em>.",
        explainOkRu:
          "<em>Has become part of</em> — и сейчас так говорят (<em>She's a real Einstein</em>); форма от <strong>BECOME</strong>.",
        explainWrongRu:
          "Нужна форма «стало / стать», а не существительное <em>become</em> без глагола.",
        wrongIf: [
          {
            includes: "become",
            hintRu:
              "Голое <em>become</em> без <em>has</em> редко тянет «до сих пор» → <em>has become</em>."
          },
          {
            includes: "becomes",
            hintRu:
              "Present <em>becomes</em> — «становится сейчас каждый раз»; речь об устойчивом результате."
          },
          {
            includes: "becoming",
            hintRu:
              "<em>His name becoming</em> — не сказуемое; нужна форма глагола <em>has become</em>."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 2,
        before:
          "In 1999, Time magazine named Einstein as the Person of the Century. No one could have guessed this ",
        afterInline:
          " when he was at school. He was extremely interested in science but hated the system of learning by heart.",
        afterTail:
          "He said it destroyed learning and creativity. He had already done many experiments, but failed the entrance exams to a technical college.",
        cue: "HAPPEN",
        answers: ["would happen", "could happen"],
        keyShow: "would happen",
        grammarTag: "Future in the Past",
        explainRu:
          "«Никто не мог догадаться, что это <strong>случится</strong>» → <em>this would happen</em> (будущее с точки зрения прошлого).",
        explainOkRu:
          "<em>Would happen</em> от <strong>HAPPEN</strong> после <em>could have guessed</em> — типичная связка с «школьными годами».",
        explainWrongRu:
          "Нужна форма «случится / случилось бы», не Past Simple <em>happened</em> без связки.",
        wrongIf: [
          {
            includes: "happened",
            hintRu:
              "Past <em>happened</em> после <em>guessed this</em> без <em>that</em> хуже, чем <em>would happen</em>."
          },
          {
            includes: "happens",
            hintRu:
              "Present не сочетается с <em>when he was at school</em> в этом смысле."
          },
          {
            includes: "happening",
            hintRu:
              "<em>This happening</em> — не сказуемое; нужно <em>would happen</em>."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 2,
        before:
          "He didn't let this setback stop him. He eventually graduated from university, in 1900, with a degree in physics. Twelve years later he was a university professor and in 1921, he ",
        afterInline:
          " the Nobel Prize for Physics. He went on to publish over 300 scientific papers.",
        afterTail: "",
        cue: "WIN",
        answers: ["won"],
        keyShow: "won",
        grammarTag: "Past Simple",
        explainRu:
          "Конкретный год <strong>1921</strong> → Past Simple от <strong>WIN</strong>: <em>won the Nobel Prize</em>.",
        explainOkRu:
          "<em>Won</em> — неправильная past-форма; устойчиво <em>win a prize</em>.",
        explainWrongRu:
          "Нужна прошедшая форма, не <em>win / wins / winning</em>.",
        wrongIf: [
          {
            includes: "win",
            hintRu:
              "Инфинитив после <em>he</em> и даты 1921 → Past <em>won</em>."
          },
          {
            includes: "wins",
            hintRu:
              "Present не подходит к <em>in 1921</em>."
          },
          {
            includes: "winning",
            hintRu:
              "<em>He winning</em> — не полное сказуемое; нужно <em>won</em>."
          },
          {
            includes: "won the",
            hintRu:
              "Слово <em>the</em> уже в задании после пропуска — в ячейку только <em>won</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Соль §19–24:</strong> если в тексте <em>previously … by</em> — часто <strong>Participle II</strong> (<em>protected</em>).</p>" +
      "<p><strong>Лайфхак:</strong> после <em>could have guessed this</em> часто <em>would happen</em> — «что так и случится».</p>"
  });
})(typeof window !== "undefined" ? window : this);
