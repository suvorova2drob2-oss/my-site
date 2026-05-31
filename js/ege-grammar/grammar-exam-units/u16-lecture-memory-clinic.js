/**
 * ЕГЭ Grammar Exam · Unit 16 · A lecture · Memory technique (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u16-lecture-memory-clinic",
    unitOrder: 16,
    title: "Unit 16 · A lecture · Memory clinic",
    examSection: "§19–24",
    headerTitle: "A lecture · Memory clinic",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          'A famous scientist was on his way to a lecture when his chauffeur offered an idea. "Hey, boss, I ',
        afterInline:
          ' your speech so many times already I bet I could deliver it and give you the night off."',
        afterTail: "",
        cue: "HEAR",
        answers: ["have heard", "ve heard"],
        keyShow: "have heard",
        grammarTag: "Present Perfect",
        plainRu:
          "«Я <strong>уже столько раз слышал</strong> вашу речь» → <em>already</em> + опыт → <em>have heard</em>.",
        explainRu:
          "Маркеры <em>so many times</em> и <em>already</em> тянут Present Perfect от <strong>HEAR</strong>: <em>I have heard your speech</em>.",
        explainOkRu:
          "<em>Have heard</em> — слышал много раз и результат «знаю наизусть».",
        explainWrongRu:
          "Past <em>heard</em> без <em>have</em> слабее передаёт «уже много раз».",
        examplesRu: [
          "✓ I <em>have heard</em> this song many times. — «слышал много раз».",
          "✓ She <em>has already heard</em> the news. — already + Perfect.",
          "✗ I <em>hear</em> your speech so many times already. — нужен Perfect."
        ],
        wrongIf: [
          {
            includes: "heard",
            hintRu:
              "Одного Past без <em>have</em> при <em>already / so many times</em> → <em>have heard</em>."
          },
          {
            includes: "hear",
            hintRu:
              "Present <em>hear</em> не передаёт «уже столько раз»."
          },
          {
            includes: "am hearing",
            hintRu:
              "Continuous «сейчас слушаю» — другой смысл."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before: '"Sounds great," the scientist said. When they ',
        afterInline:
          " to the auditorium, the chauffeur walked to the lectern and delivered the speech.",
        afterTail: "",
        cue: "GET",
        answers: ["got"],
        keyShow: "got",
        grammarTag: "Past Simple · GET",
        plainRu:
          "«Когда они <strong>добрались</strong> до зала» — история в Past → <em>got to</em>.",
        explainRu:
          "Цепочка Past: <em>said</em>, <em>when they got</em>, <em>walked</em>, <em>delivered</em>.",
        explainOkRu:
          "<em>Got to the auditorium</em> = «приехали / добрались до аудитории».",
        explainWrongRu:
          "Present (<em>get</em>) ломает прошлую историю.",
        examplesRu: [
          "✓ When we <em>got</em> home, it was dark. — when + Past.",
          "✓ They <em>got to</em> the station on time. — «добрались».",
          "✗ When they <em>get</em> to… — нужен Past <em>got</em>."
        ],
        wrongIf: [
          {
            includes: "get",
            hintRu:
              "После <em>said</em> → Past <em>got</em>."
          },
          {
            includes: "gets",
            hintRu:
              "Present <em>gets</em> не в прошлой истории."
          },
          {
            includes: "gotten",
            hintRu:
              "AmE <em>gotten</em> реже; в ключе ЕГЭ обычно <em>got</em>."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 1,
        before: "Afterward he asked if there ",
        afterInline:
          ' any questions. "Yes," said one professor and asked a highly technical question.',
        afterTail:
          ' The chauffeur panicked for a moment but quickly recovered. "That\'s an easy one," he replied. "In fact, it\'s so easy, I\'m going to let my chauffeur answer it!"',
        cue: "BE",
        answers: ["were"],
        keyShow: "were",
        grammarTag: "Past Simple · there were",
        plainRu:
          "«Есть ли <strong>вопросы</strong>?» — <em>questions</em> во мн. ч. → <em>there were</em>.",
        explainRu:
          "После <em>asked if there</em> — прошлое + множественное: <em>were any questions</em> от <strong>BE</strong>.",
        explainOkRu:
          "<em>Were any questions</em> — типичная формула «были ли вопросы».",
        explainWrongRu:
          "<em>Was</em> — для единственного числа; <em>questions</em> — множественное.",
        examplesRu: [
          "✓ Are there <em>any questions</em>? → Past: <em>Were there any questions</em>?",
          "✓ If there <em>were</em> problems, call me. — were + мн. ч.",
          "✗ …if there <em>was</em> any questions. — was/were не сходятся."
        ],
        wrongIf: [
          {
            includes: "was",
            hintRu:
              "<em>Questions</em> — мн. ч. → <em>were</em>, не <em>was</em>."
          },
          {
            includes: "are",
            hintRu:
              "Present после <em>asked</em> → Past <em>were</em>."
          },
          {
            includes: "be",
            hintRu:
              "Голое <em>be</em> не сказуемое → <em>were</em>."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before:
          "It was a nice summer day. Two elderly couples were enjoying a friendly conversation in the garden when one of the ",
        afterInline:
          ' asked the other, "Fred, how was the memory clinic you went to a month ago?"',
        afterTail: "",
        cue: "MAN",
        answers: ["men"],
        keyShow: "men",
        grammarTag: "Множественное число · MAN",
        plainRu:
          "«Один из <strong>мужчин</strong>» → <em>one of the men</em>, не <em>man</em>.",
        explainRu:
          "После <em>one of the</em> идёт множественное: <em>men</em> от <strong>MAN</strong>.",
        explainOkRu:
          "<em>Men</em> — неправильное множественное (не mans).",
        explainWrongRu:
          "Единственное <em>man</em> после <em>one of the</em> не ставят.",
        examplesRu: [
          "✓ One of the <em>men</em> smiled. — one of the + мн. ч.",
          "✓ One of the <em>children</em> cried. — та же схема.",
          "✗ One of the <em>man</em>… — нужно <em>men</em>."
        ],
        wrongIf: [
          {
            includes: "man",
            hintRu:
              "После <em>one of the</em> → <em>men</em>."
          },
          {
            includes: "mans",
            hintRu:
              "Формы <em>mans</em> нет → <em>men</em>."
          },
          {
            includes: "mens",
            hintRu:
              "Неверная форма → <em>men</em>."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 2,
        before:
          '"Outstanding," Fred replied. "We were taught visualization, association. We learned all the ',
        afterInline:
          ' psychological techniques — it has made a big difference for me." "That\'s great! What was the name of that clinic?"',
        afterTail: "",
        cue: "LATE",
        answers: ["latest"],
        keyShow: "latest",
        grammarTag: "LATE → latest",
        plainRu:
          "«Все <strong>новейшие / последние</strong> психологические техники» → <em>latest</em> от LATE.",
        explainRu:
          "Перед существительным <em>techniques</em> нужна форма «самые новые»: <em>the latest techniques</em>.",
        explainOkRu:
          "<em>Latest</em> = «новейшие, последние» (не «поздние»).",
        explainWrongRu:
          "<em>Late</em> или <em>later</em> не передают «современные техники».",
        examplesRu: [
          "✓ the <em>latest</em> news — «последние новости».",
          "✓ the <em>latest</em> fashion — «новейшая мода».",
          "✗ all the <em>late</em> techniques — late = «поздний», не то."
        ],
        wrongIf: [
          {
            includes: "late",
            hintRu:
              "<em>Late</em> = «поздний»; здесь «новейшие» → <em>latest</em>."
          },
          {
            includes: "later",
            hintRu:
              "<em>Later</em> — сравнительная; нужна <em>latest</em>."
          },
          {
            includes: "last",
            hintRu:
              "<em>Last</em> иногда близко, но от LATE в ключе → <em>latest</em>."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 2,
        before: "Fred went blank. He thought and thought but ",
        afterInline:
          ' remember. Then a smile broke across his face and he asked, "What do you call that flower with thorns?"',
        afterTail:
          ' "You mean a rose?" "Yes, that\'s it!" Then he turned to his wife and asked, "Rose, what was the name of that clinic?"',
        cue: "NOT CAN",
        answers: [
          "could not remember",
          "couldn't remember",
          "couldnt remember"
        ],
        keyShow: "couldn't remember",
        grammarTag: "Past · NOT CAN",
        plainRu:
          "«Но <strong>не смог</strong> вспомнить» — Past + NOT CAN → <em>could not remember</em>.",
        explainRu:
          "История в Past (<em>went</em>, <em>thought</em>). «Не мог» = <em>could not remember</em>.",
        explainOkRu:
          "<em>Couldn't remember</em> — пытался, но память не сработала.",
        explainWrongRu:
          "Present (<em>can't remember</em>) не сочетается с <em>went blank</em>.",
        examplesRu: [
          "✓ I <em>couldn't remember</em> her name. — «не мог вспомнить».",
          "✓ He tried but <em>could not find</em> it. — could not + глагол.",
          "✗ …but <em>not can</em> remember. — так не строят фразу."
        ],
        wrongIf: [
          {
            includes: "not can",
            hintRu:
              "Нужно <em>could not remember</em>, не голое <em>not can</em>."
          },
          {
            includes: "cannot remember",
            hintRu:
              "Present <em>can't</em> — история в Past → <em>couldn't</em>."
          },
          {
            includes: "can not remember",
            hintRu:
              "После <em>went / thought</em> → Past <em>couldn't remember</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Текст 1:</strong> <em>already</em> → <em>have heard</em>; цепочка Past; <em>questions</em> → <em>were</em>.</p>" +
      "<p><strong>Текст 2:</strong> <em>one of the men</em>; LATE → <em>latest</em>; NOT CAN в Past → <em>couldn't remember</em>.</p>"
  });
})(typeof window !== "undefined" ? window : this);
