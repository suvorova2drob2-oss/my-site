/**
 * ЕГЭ Grammar Exam · Unit 11 · Everyone wants a shiny smile · A cold nose (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u11-shiny-smile-cold-nose",
    unitOrder: 11,
    title: "Unit 11 · Shiny smile · A cold nose",
    examSection: "§19–24",
    headerTitle: "Shiny smile · A cold nose",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "The perfect smile has created a multi-billion-dollar industry, but not all is shiny in this business. Dentists say that illegal whitening is putting people at risk of health problems, including burnt gums, lips and lost ",
        afterInline: ".",
        afterTail: "",
        cue: "TOOTH",
        answers: ["teeth"],
        keyShow: "teeth",
        grammarTag: "Множественное число",
        plainRu:
          "Речь о потерянных <strong>зубах</strong> (не одном). От TOOTH нужно множественное число — <em>teeth</em>.",
        explainRu:
          "После <em>lost</em> («потерянные») идёт перечисление: губы и <strong>зубы</strong>. Одного <em>tooth</em> мало — нужно <em>teeth</em>.",
        explainOkRu:
          "Верно: <em>lost teeth</em> = «потерянные зубы».",
        explainWrongRu:
          "В ячейку — форма от TOOTH. Слово <em>lost</em> уже стоит перед пропуском.",
        examplesRu: [
          "✓ One <em>tooth</em>, two <em>teeth</em>. — неправильное множественное число.",
          "✓ Burnt gums, lips and lost <em>teeth</em>. — в списке всегда множественное.",
          "✗ …lost <em>tooth</em>. — один зуб в таком перечне звучит странно."
        ],
        wrongIf: [
          {
            includes: "tooth",
            hintRu:
              "Одного <em>tooth</em> мало — перечисление «губы и зубы» → <em>teeth</em>."
          },
          {
            includes: "tooths",
            hintRu:
              "Формы <em>tooths</em> не существует → только <em>teeth</em>."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before: "Statistics show a 26% increase in complaints ",
        afterInline: " year from people with problems from whitening.",
        afterTail: " Many of them used services of unqualified specialists.",
        cue: "LATE",
        answers: ["last"],
        keyShow: "last",
        grammarTag: "LATE → last · «в прошлом году»",
        plainRu:
          "По-русски: «<strong>в прошлом</strong> году». От LATE здесь нужно не <em>late</em>, а <em>last</em> — устойчивое <em>last year</em>.",
        explainRu:
          "Перед <em>year</em> стоит «прошлый год»: <em>last year</em>. В задании дана основа <strong>LATE</strong> — в ключах ЕГЭ она часто превращается в <em>last</em>.",
        explainOkRu:
          "<em>Last year</em> = «в прошлом году» — жалоб стало на 26% больше.",
        explainWrongRu:
          "Не пиши <em>late year</em> или <em>latest year</em> без нужды — здесь именно <em>last year</em>.",
        examplesRu: [
          "✓ Complaints rose <em>last year</em>. — «в прошлом году».",
          "✓ I saw him <em>last</em> week. — та же логика «прошлый период».",
          "✗ …complaints <em>late</em> year. — так не говорят."
        ],
        wrongIf: [
          {
            includes: "late",
            hintRu:
              "<em>Late</em> = «поздний»; нужно «прошлый» → <em>last year</em>."
          },
          {
            includes: "latest",
            hintRu:
              "<em>Latest</em> = «самый новый»; здесь «в прошлом году» → <em>last</em>."
          },
          {
            includes: "later",
            hintRu:
              "<em>Later year</em> не сочетается; нужно <em>last year</em>."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 2,
        before:
          "Now we know why a dog's nose is cold. Scientists ",
        afterInline: " to solve this mystery for many years.",
        afterTail:
          " The scientists believe dogs' noses are cold because dogs sense the temperature of things without touching them.",
        cue: "TRY",
        answers: [
          "have been trying",
          "have tried",
          "ve been trying",
          "ve tried"
        ],
        keyShow: "have been trying",
        grammarTag: "Present Perfect (Continuous)",
        plainRu:
          "«Учёные <strong>пытаются / пытались</strong> разгадать загадку уже много лет». <em>For many years</em> + связь с «сейчас» → Perfect от TRY.",
        explainRu:
          "Действие началось давно и тянется к настоящему: <em>have been trying</em> или <em>have tried</em>. После пропуска уже есть <em>to solve</em>.",
        explainOkRu:
          "Perfect показывает: работа над загадкой длится уже долго.",
        explainWrongRu:
          "Одного <em>try</em> или Past Simple мало — нужна форма с <em>have</em>.",
        examplesRu: [
          "✓ They <em>have been trying</em> for years. — «уже много лет пытаются».",
          "✓ She <em>has tried</em> to call you. — Perfect тоже возможен.",
          "✗ Scientists <em>try</em> to solve… for many years. — Present не сочетается с <em>for many years</em>."
        ],
        wrongIf: [
          {
            includes: "try",
            hintRu:
              "Голый <em>try</em> не передаёт «уже много лет» → <em>have been trying</em> / <em>have tried</em>."
          },
          {
            includes: "tried",
            hintRu:
              "Одного Past <em>tried</em> без <em>have</em> мало при <em>for many years</em>."
          },
          {
            includes: "are trying",
            hintRu:
              "Present Continuous без <em>have</em> не показывает «с давних пор»."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before:
          "They use their noses to detect temperature, when prey is nearby. Earlier it ",
        afterInline:
          " that dogs' noses are cold to control their body temperature.",
        afterTail:
          " Researchers did experiments on dogs, which had to detect the temperature of different objects.",
        cue: "BELIEVE",
        answers: ["was believed"],
        keyShow: "was believed",
        grammarTag: "Past Simple Passive",
        plainRu:
          "«<strong>Раньше считалось</strong>, что…» — не «они верили», а «это считалось» → пассив <em>was believed</em>.",
        explainRu:
          "Подлежащее — безличное <em>it</em>: «считалось». От <strong>BELIEVE</strong> → <em>was believed that…</em>.",
        explainOkRu:
          "<em>It was believed that…</em> = «считалось, что…» — типичная конструкция.",
        explainWrongRu:
          "Нужен пассив в прошлом, не <em>believed</em> или <em>believe</em> в активе.",
        examplesRu: [
          "✓ It <em>was believed</em> that the Earth was flat. — «считалось, что…»",
          "✓ It <em>is said</em> that… — та же схема в Present.",
          "✗ Earlier it <em>believed</em> that… — нет «кто верил» → нужен пассив."
        ],
        wrongIf: [
          {
            includes: "believed",
            hintRu:
              "Актив «it believed» не работает → <em>was believed</em>."
          },
          {
            includes: "believe",
            hintRu:
              "Present после <em>Earlier</em> не подходит → <em>was believed</em>."
          },
          {
            includes: "is believed",
            hintRu:
              "Слово <em>Earlier</em> тянет в прошлое → <em>was</em>, не <em>is</em>."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 2,
        before:
          "Brain activity in the dogs showed that they ",
        afterInline: " which objects were warmer than others.",
        afterTail:
          " So dogs adjust their behaviour according to the thermal radiation coming from warm bodies.",
        cue: "KNOW",
        answers: ["knew"],
        keyShow: "knew",
        grammarTag: "Past Simple · косвенная речь",
        plainRu:
          "«Показало, что они <strong>знали</strong>…» — главное сказуемое <em>showed</em> в прошлом, дальше тоже Past → <em>knew</em>.",
        explainRu:
          "После <em>showed that</em> идёт прошлое время: <em>they knew which objects…</em> От <strong>KNOW</strong> → <em>knew</em>.",
        explainOkRu:
          "<em>Knew</em> согласуется с <em>showed</em> — оба в Past.",
        explainWrongRu:
          "Present (<em>know</em>) или Perfect здесь ломают цепочку времён.",
        examplesRu: [
          "✓ She said she <em>knew</em> the answer. — Past после Past.",
          "✓ They <em>knew</em> which way to go. — «знали, какой путь».",
          "✗ …showed that they <em>know</em>… — время не согласовано."
        ],
        wrongIf: [
          {
            includes: "know",
            hintRu:
              "После <em>showed</em> нужен Past → <em>knew</em>."
          },
          {
            includes: "known",
            hintRu:
              "Participle III без <em>have/had</em> не сказуемое здесь."
          },
          {
            includes: "knows",
            hintRu:
              "Present <em>knows</em> не стоит после <em>showed that</em>."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 2,
        before: "A researcher said this ",
        afterInline: " in the future scientists' ideas on how animals hunt.",
        afterTail: " Many animals may use heat-sensing abilities to hunt.",
        cue: "CHANGE",
        answers: ["would change", "will change"],
        keyShow: "would change",
        grammarTag: "Reported Speech · Future in the Past",
        plainRu:
          "«Исследователь сказал, что это <strong>изменит</strong>…» — после <em>said</em> будущее сдвигается → <em>would change</em>.",
        explainRu:
          "После <em>said</em> будущее часто становится <em>would</em> + глагол: <em>this would change … in the future</em>.",
        explainOkRu:
          "<em>Would change</em> = «изменило бы / изменит» в косвенной речи.",
        explainWrongRu:
          "Голый <em>change</em> или Present не передают «сказал о будущем».",
        examplesRu: [
          "✓ He said it <em>would rain</em>. — will → would после said.",
          "✓ She said this <em>would change</em> everything. — та же схема.",
          "✗ He said this <em>change</em> tomorrow. — не хватает формы глагола."
        ],
        wrongIf: [
          {
            includes: "change",
            hintRu:
              "Одного <em>change</em> без вспомогательного мало → <em>would change</em>."
          },
          {
            includes: "changed",
            hintRu:
              "Past <em>changed</em> = «уже изменило»; речь о будущем (<em>in the future</em>)."
          },
          {
            includes: "changes",
            hintRu:
              "Present после <em>said this</em> не передаёт будущее в косвенной речи."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Текст 1:</strong> <em>lost teeth</em> + устойчивое <em>last year</em> (от LATE).</p>" +
      "<p><strong>Текст 2:</strong> <em>for many years</em> → Perfect; <em>it was believed</em>; после <em>said</em> → <em>would change</em>.</p>"
  });
})(typeof window !== "undefined" ? window : this);
