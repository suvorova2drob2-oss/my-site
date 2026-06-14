/**
 * ЕГЭ Grammar Exam · Unit 15 · Develop a nose for news · At the airport (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u15-nose-for-news-airport",
    unitOrder: 15,
    title: "Unit 15 · Nose for news · At the airport",
    examSection: "§19–24",
    headerTitle: "Nose for news · At the airport",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "Carol Green has three kids of her own. She is good at ",
        afterInline: " activities that suit kids of different ages.",
        afterTail: "",
        cue: "FIND",
        answers: ["finding"],
        keyShow: "finding",
        grammarTag: "Gerund · после good at",
        plainRu:
          "После <em>good at</em> почти всегда <strong>-ing</strong>: «хорошо находит / придумывает» → <em>finding</em>.",
        explainRu:
          "Конструкция <em>be good at + -ing</em>: <em>She is good at finding activities</em> от <strong>FIND</strong>.",
        explainOkRu:
          "<em>Finding activities</em> — «подбирать занятия» (герундий).",
        explainWrongRu:
          "Голый <em>find</em> или <em>to find</em> после <em>good at</em> не ставят.",
        examplesRu: [
          "✓ She is good at <em>singing</em>. — good at + -ing.",
          "✓ He is good at <em>finding</em> mistakes. — «хорошо находит».",
          "✗ She is good at <em>find</em>… — нужно <em>finding</em>."
        ],
        wrongIf: [
          {
            includes: "find",
            hintRu:
              "После <em>good at</em> → <em>finding</em>."
          },
          {
            includes: "to find",
            hintRu:
              "<em>Good at to find</em> — ошибка; нужен герундий."
          },
          {
            includes: "found",
            hintRu:
              "Past <em>found</em> здесь не подходит после <em>is good at</em>."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before: "A newspaper hunt ",
        afterInline: " the most successful one so far.",
        afterTail:
          " Carol goes through the paper and makes a list of about 20 questions.",
        cue: "BE",
        answers: ["has been", "s been"],
        keyShow: "has been",
        grammarTag: "Present Perfect",
        plainRu:
          "«Пока что <strong>самая успешная</strong>» — маркер <em>so far</em> → Perfect от BE: <em>has been</em>.",
        explainRu:
          "<em>So far</em> («до сих пор / пока что») часто тянет Present Perfect: <em>has been the most successful</em>.",
        explainOkRu:
          "<em>Has been</em> — охота за газетой остаётся лучшей идеей на данный момент.",
        explainWrongRu:
          "Past <em>was</em> слабее передаёт «пока что»; голое <em>is</em> тоже не то.",
        examplesRu: [
          "✓ This is the best day <em>so far</em>. — «пока что».",
          "✓ It <em>has been</em> our most popular game so far. — Perfect + so far.",
          "✗ It <em>was</em> the most successful so far. — «so far» → чаще <em>has been</em>."
        ],
        wrongIf: [
          {
            includes: "is",
            hintRu:
              "При <em>so far</em> → <em>has been</em>, не просто <em>is</em>."
          },
          {
            includes: "was",
            hintRu:
              "Past без связи с «пока что» → <em>has been</em>."
          },
          {
            includes: "be",
            hintRu:
              "Голое <em>be</em> не сказуемое → <em>has been</em>."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 1,
        before:
          "To find the answers, the kids search the paper. Now, she says, the ",
        afterInline:
          " are naturally drawn to the newspaper — they realise they can find out all sorts of information by reading it.",
        afterTail: "",
        cue: "CHILD",
        answers: ["children"],
        keyShow: "children",
        grammarTag: "Множественное число · CHILD",
        plainRu:
          "Дальше стоит <em>are</em> — нужно множественное: <em>children</em>, не <em>child</em>.",
        explainRu:
          "Подлежащее + <em>are</em> → <em>the children are drawn</em> от <strong>CHILD</strong>.",
        explainOkRu:
          "<em>Children</em> — неправильное множественное (не childs).",
        explainWrongRu:
          "Единственное <em>child</em> не сочетается с <em>are</em>.",
        examplesRu: [
          "✓ One <em>child</em>, two <em>children</em>.",
          "✓ The <em>children are</em> playing. — are → children.",
          "✗ The <em>child are</em>… — число не сходится."
        ],
        wrongIf: [
          {
            includes: "child",
            hintRu:
              "Перед <em>are</em> → <em>children</em>."
          },
          {
            includes: "childs",
            hintRu:
              "Формы <em>childs</em> нет → <em>children</em>."
          },
          {
            includes: "childes",
            hintRu:
              "Неверная форма → <em>children</em>."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before: "My friend told me this anecdote. Jane ",
        afterInline:
          " in a long, slow-moving line for security clearance at the London airport when she heard a loud male voice.",
        afterTail: "",
        cue: "WAIT",
        answers: ["was waiting", "had been waiting"],
        keyShow: "was waiting",
        grammarTag: "Past Continuous",
        plainRu:
          "«Джейн <strong>стояла в очереди</strong>, когда услышала голос» — длительное прошлое → <em>was waiting</em>.",
        explainRu:
          "Фоновое действие + <em>when she heard</em> → Past Continuous от <strong>WAIT</strong>: <em>was waiting in a line</em>.",
        explainOkRu:
          "<em>Was waiting</em> — она ждала, когда произошло второе действие.",
        explainWrongRu:
          "Past Simple (<em>waited</em>) слабее передаёт «ещё стояла в очереди».",
        examplesRu: [
          "✓ I <em>was reading</em> when he called. — фон + when.",
          "✓ She <em>was waiting</em> in line when… — «стояла в очереди».",
          "✗ Jane <em>waited</em>… when she heard — возможно, но Continuous точнее."
        ],
        wrongIf: [
          {
            includes: "wait",
            hintRu:
              "Голый <em>wait</em> → <em>was waiting</em>."
          },
          {
            includes: "waits",
            hintRu:
              "Present не подходит: история в Past (<em>told</em>)."
          },
          {
            includes: "is waiting",
            hintRu:
              "Present Continuous после <em>told me</em> → Past."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 2,
        before:
          "\"Excuse me, excuse me,\" said the man as he pushed his way to the front. \"I want to make sure I get the ",
        afterInline: " seat.\"",
        afterTail: "",
        cue: "GOOD",
        answers: ["best"],
        keyShow: "best",
        grammarTag: "Превосходная степень",
        plainRu:
          "«Самое <strong>лучшее</strong> место» — перед существительным с <em>the</em> → <em>best</em> от GOOD.",
        explainRu:
          "После <em>the</em> и перед <em>seat</em> нужна превосходная: <em>the best seat</em>.",
        explainOkRu:
          "<em>Best</em> = «лучший / самый хороший».",
        explainWrongRu:
          "GOOD или BETTER без <em>the … seat</em> не подходят.",
        examplesRu: [
          "✓ I want the <em>best</em> seat. — the + best.",
          "✓ This is the <em>best</em> day ever. — превосходная.",
          "✗ …the <em>good</em> seat. — нужно <em>best</em>."
        ],
        wrongIf: [
          {
            includes: "good",
            hintRu:
              "GOOD → превосходная <em>best</em> после <em>the</em>."
          },
          {
            includes: "better",
            hintRu:
              "<em>Better</em> — сравнительная; здесь «самое лучшее» → <em>best</em>."
          },
          {
            includes: "well",
            hintRu:
              "<em>Well</em> — наречие; нужно прилагательное <em>best</em>."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 2,
        before:
          "Jane decided not to let this line-jumper get ahead of her. When Jane ",
        afterInline:
          " a tap on her shoulder, she turned around to say a few angry words to the man.",
        afterTail:
          " Surprise, surprise! She found herself face to face with a smiling pilot.",
        cue: "FEEL",
        answers: ["felt"],
        keyShow: "felt",
        grammarTag: "Past Simple · FEEL",
        plainRu:
          "«Когда Джейн <strong>почувствовала</strong> лёгкий толчок» — одно действие в прошлом → <em>felt</em>.",
        explainRu:
          "Цепочка Past: <em>decided</em>, <em>when Jane felt</em>, <em>turned</em> — всё в Past Simple.",
        explainOkRu:
          "<em>Felt a tap</em> = «почувствовала, что её тронули».",
        explainWrongRu:
          "Present или Continuous ломают историю в прошлом.",
        examplesRu: [
          "✓ When I <em>felt</em> the rain, I opened an umbrella. — when + Past.",
          "✓ She <em>felt</em> a tap on her shoulder. — «почувствовала».",
          "✗ When Jane <em>feel</em>… — нужен Past <em>felt</em>."
        ],
        wrongIf: [
          {
            includes: "feel",
            hintRu:
              "После <em>decided</em> / <em>when Jane</em> → Past <em>felt</em>."
          },
          {
            includes: "feels",
            hintRu:
              "Present <em>feels</em> не в прошлой истории."
          },
          {
            includes: "feeled",
            hintRu:
              "Неверная форма → <em>felt</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Текст 1:</strong> <em>good at finding</em>; <em>so far</em> → <em>has been</em>; <em>are</em> → <em>children</em>.</p>" +
      "<p><strong>Текст 2:</strong> <em>when</em> + фон → <em>was waiting</em>; <em>the best seat</em>; цепочка Past → <em>felt</em>.</p>"
  });
})(typeof window !== "undefined" ? window : this);
