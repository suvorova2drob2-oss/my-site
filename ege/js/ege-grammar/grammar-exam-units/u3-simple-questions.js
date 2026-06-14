/**
 * ЕГЭ Grammar Exam · Unit 3 · Simple questions — simple answers (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u3-simple-questions",
    unitOrder: 3,
    title: "Unit 3 · Simple questions — simple answers",
    examSection: "§19–24",
    headerTitle: "Simple questions — simple answers",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "Some people think that a speaking test in English is very difficult because you can be asked questions about all kinds of subjects. However, you ",
        afterInline:
          " to be an expert on these subjects in order to pass the test.",
        afterTail: "",
        cue: "NOT NEED",
        answers: ["don't need", "do not need", "dont need"],
        keyShow: "don't need",
        grammarTag: "Отрицание · need",
        explainRu:
          "Базовые слова <strong>NOT NEED</strong> → отрицание: <em>don't need to</em> (= «не нужно», «не обязаны»). Дальше уже стоит инфинитив <em>to be</em>.",
        explainOkRu:
          "<em>Don't need to be</em> = «не нужно быть экспертом» — оба слова из задания: <em>not</em> через <em>don't</em> + <em>need</em>.",
        explainWrongRu:
          "Нужно отрицание от <strong>NEED</strong>, а не утверждение «you need» или голое <em>not</em>.",
        wrongIf: [
          {
            includes: "need",
            hintRu:
              "Без <strong>NOT</strong> получается «вам нужно» — по смыслу наоборот: экспертом быть <em>не обязаны</em>."
          },
          {
            includes: "not need",
            hintRu:
              "Нужен вспомогательный в отрицании: <em>don't need</em>, не просто <em>not need</em>."
          },
          {
            includes: "needed",
            hintRu:
              "Past Simple не нужен: речь об общем правиле экзамена в настоящем."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before: "That means when you ",
        afterInline:
          " about history, you do not have to be a historian in order to answer it.",
        afterTail:
          "For instance, if the question is 'Do you like history? Why or why not?' — you can easily answer it.",
        cue: "ASK",
        answers: ["are asked", "were asked"],
        keyShow: "are asked",
        grammarTag: "Пассив · Present Simple",
        explainRu:
          "«Когда вас <strong>спрашивают</strong> о истории» → пассив от <strong>ASK</strong>: <em>are asked</em> (Present Simple).",
        explainOkRu:
          "Вы — объект вопроса, не субъект; поэтому <em>when you are asked about history</em>, как <em>you can be asked questions</em> выше в тексте.",
        explainWrongRu:
          "Активная форма <em>ask</em> дала бы «когда вы спрашиваете» — смысл другой.",
        wrongIf: [
          {
            includes: "ask",
            hintRu:
              "Голый <em>ask</em> — «вы спрашиваете»; здесь вас спрашивают → <em>are asked</em>."
          },
          {
            includes: "asked",
            hintRu:
              "Одного <em>asked</em> без <em>are</em> мало для пассива Present."
          },
          {
            includes: "asking",
            hintRu:
              "<em>When you asking</em> — грамматически неверно; нужен пассив <em>are asked</em>."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 2,
        before:
          "A simple answer like this will be fine, 'Yes, I find it quite interesting. I enjoy ",
        afterInline:
          " books on history. I like to watch historical films.' Simple answers are great because they are likely to be correct.",
        afterTail: "",
        cue: "READ",
        answers: ["reading"],
        keyShow: "reading",
        grammarTag: "Герундий после enjoy",
        explainRu:
          "После <strong>enjoy</strong> идёт <strong>-ing</strong>: <em>enjoy reading books</em> — «наслаждаюсь чтением».",
        explainOkRu:
          "<em>Reading</em> — герундий от <strong>READ</strong>; конструкция как <em>enjoy swimming / enjoy cooking</em>.",
        explainWrongRu:
          "После <strong>enjoy</strong> не ставят инфинитив <em>read</em> или <em>to read</em>.",
        wrongIf: [
          {
            includes: "read",
            hintRu:
              "Инфинитив <em>read</em> после <strong>enjoy</strong> не подходит → <em>reading</em>."
          },
          {
            includes: "to read",
            hintRu:
              "После <em>enjoy</em> типично герундий, не <em>to-infinitive</em>."
          },
          {
            includes: "reads",
            hintRu:
              "<em>Reads</em> — «он читает»; после <em>I enjoy</em> нужен <em>reading</em>."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before: "I love history. For years, I ",
        afterInline: " learning about the past.",
        afterTail:
          "In my spare time, I read books about ancient Japan, medieval Russia or Mayan culture.",
        cue: "ENJOY",
        answers: [
          "have enjoyed",
          "have been enjoying",
          "'ve enjoyed",
          "ve enjoyed",
          "'ve been enjoying"
        ],
        keyShow: "have enjoyed",
        grammarTag: "Present Perfect",
        explainRu:
          "Маркер <strong>for years</strong> → Present Perfect: <em>have enjoyed learning</em> («уже много лет получаю удовольствие»).",
        explainOkRu:
          "<em>Have enjoyed</em> — форма от <strong>ENJOY</strong> в Present Perfect; дальше герундий <em>learning</em> уже в тексте.",
        explainWrongRu:
          "С <strong>for years</strong> нужно perfect, а не просто Past Simple или Present.",
        wrongIf: [
          {
            includes: "enjoy",
            hintRu:
              "Голый Present <em>enjoy</em> не стыкуется с <strong>for years</strong> → <em>have enjoyed</em>."
          },
          {
            includes: "enjoyed",
            hintRu:
              "Past Simple без связи с «до сих пор»; с <em>for years</em> чаще <em>have enjoyed</em>."
          },
          {
            includes: "enjoying",
            hintRu:
              "После <em>I</em> нужна сказуемая часть с <em>have</em>: <em>have enjoyed</em>, не одно <em>enjoying</em>."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 3,
        before: "All of this is really interesting to me, and so I ",
        afterInline:
          " no problem if I were asked about my favourite historical period.",
        afterTail: "",
        cue: "HAVE",
        answers: ["would have", "would've", "wouldve"],
        keyShow: "would have",
        grammarTag: "Second Conditional",
        explainRu:
          "Условие нереальное/маловероятное: <em>if I were asked</em> → в главной части <strong>would + have</strong>: <em>I would have no problem</em>.",
        explainOkRu:
          "<em>Would have</em> от <strong>HAVE</strong> («у меня не было бы проблемы»); <em>no problem</em> уже после пропуска.",
        explainWrongRu:
          "После <em>if I were</em> в такой конструкции нужен <strong>would</strong>, не просто <em>have / had</em>.",
        wrongIf: [
          {
            includes: "have",
            hintRu:
              "Без <em>would</em> не сочетается с <em>if I were asked</em> → <em>would have no problem</em>."
          },
          {
            includes: "had",
            hintRu:
              "Past Simple <em>had</em> — не про гипотетическое «если бы спросили»."
          },
          {
            includes: "will have",
            hintRu:
              "<em>Will</em> не подходит к <em>if I were</em> (Second Conditional)."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 4,
        before:
          "However, this could be a difficult question for some people. After all, it is not a common part of daily conversation! Most people ",
        afterInline:
          " down with a friend and say, 'You know what period of history I really like... Dmitriy Donskoy's times.' Still, it is possible that you may be asked about this at the speaking test in English.",
        afterTail: "",
        cue: "SIT",
        answers: ["don't sit", "do not sit", "dont sit"],
        keyShow: "don't sit",
        grammarTag: "Отрицание · Present Simple",
        explainRu:
          "«Люди обычно <strong>не садятся</strong> с другом и не говорят…» → Present Simple + <strong>NOT</strong>: <em>don't sit down</em>. Базовое слово <strong>SIT</strong>.",
        explainOkRu:
          "<em>Don't sit down</em> — отрицание от <strong>SIT</strong>; <em>down</em> уже в тексте после пропуска.",
        explainWrongRu:
          "Нужно отрицание в Present («обычно не делают»), а не утверждение или прошедшее время.",
        wrongIf: [
          {
            includes: "sit",
            hintRu:
              "Утверждение «people sit down» противоречит смыслу: так <em>не</em> говорят каждый день."
          },
          {
            includes: "not sit",
            hintRu:
              "Нужен вспомогательный: <em>don't sit</em>, не голое <em>not sit</em>."
          },
          {
            includes: "sat",
            hintRu:
              "Past Simple — про прошлое; здесь обобщение о привычках → Present + <em>don't</em>."
          },
          {
            includes: "sitting",
            hintRu:
              "<em>Most people sitting</em> без вспомогательного не образует нормальное отрицание."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Соль §19–24:</strong> два слова в CAPS (<em>NOT NEED</em>, <em>NOT EXPECT</em>) — почти всегда <em>don't / doesn't + глагол</em>.</p>" +
      "<p><strong>Лайфхак:</strong> если рядом <em>if I were</em> — ищи <strong>would</strong> в главной части; если <em>for + период</em> — Present Perfect.</p>"
  });
})(typeof window !== "undefined" ? window : this);
