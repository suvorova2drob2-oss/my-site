/**
 * ЕГЭ Grammar Exam · Unit 13 · White hair and stress · Space cookies (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u13-white-hair-space-cookies",
    unitOrder: 13,
    title: "Unit 13 · White hair · Space cookies",
    examSection: "§19–24",
    headerTitle: "White hair · Space cookies",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "Biologists from Harvard tested the animals to find how stress affected them. Scientists found that stress turns hair grey in ",
        afterInline: ".",
        afterTail:
          " The scientists injected them with an ingredient taken from chili peppers. Their hair quickly turned white.",
        cue: "MOUSE",
        answers: ["mice"],
        keyShow: "mice",
        grammarTag: "Множественное число · MOUSE",
        plainRu:
          "Речь об <strong>мышах</strong> (эксперимент на животных). От MOUSE нужно множественное — <em>mice</em>.",
        explainRu:
          "В тексте <em>tested the animals</em>, <em>injected them</em> — речь не об одной мыши. <em>In mice</em> = «у мышей».",
        explainOkRu:
          "<em>Mice</em> — неправильное множественное от <em>mouse</em>.",
        explainWrongRu:
          "Одной <em>mouse</em> мало; <em>mouses</em> не существует.",
        examplesRu: [
          "✓ One <em>mouse</em>, two <em>mice</em>. — как foot → feet.",
          "✓ Stress turns hair grey in <em>mice</em>. — «у мышей».",
          "✗ …grey in <em>mouse</em>. — нужно множественное."
        ],
        wrongIf: [
          {
            includes: "mouse",
            hintRu:
              "Одной <em>mouse</em> мало → <em>mice</em>."
          },
          {
            includes: "mouses",
            hintRu:
              "Формы <em>mouses</em> нет → только <em>mice</em>."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before: "People ",
        afterInline: " that stress turns hair grey for centuries.",
        afterTail:
          " France's Queen Marie Antoinette's hair supposedly turned white before death. More recently, the hair of presidents have quickly lost colour.",
        cue: "BELIEVE",
        answers: [
          "have believed",
          "ve believed"
        ],
        keyShow: "have believed",
        grammarTag: "Present Perfect",
        plainRu:
          "«Люди <strong>верят уже веками</strong>» → <em>for centuries</em> + связь с настоящим → <em>have believed</em>.",
        explainRu:
          "Маркер <em>for centuries</em> («на протяжении веков») часто тянет Present Perfect от <strong>BELIEVE</strong>.",
        explainOkRu:
          "<em>Have believed</em> — верили давно и идея жива до сих пор.",
        explainWrongRu:
          "Past Simple (<em>believed</em>) слабее передаёт «веками и по сей день».",
        examplesRu: [
          "✓ People <em>have believed</em> this for centuries. — Perfect + for.",
          "✓ I <em>have lived</em> here for ten years. — та же схема.",
          "✗ People <em>believe</em>… for centuries. — Present без <em>have</em> звучит иначе."
        ],
        wrongIf: [
          {
            includes: "believed",
            hintRu:
              "Одного Past без <em>have</em> при <em>for centuries</em> часто мало → <em>have believed</em>."
          },
          {
            includes: "believe",
            hintRu:
              "Present <em>believe</em> без <em>have</em> не передаёт «веками»."
          },
          {
            includes: "are believed",
            hintRu:
              "Пассив «считается» — другой смысл; здесь <em>People have believed</em>."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 1,
        before: "The researcher says the damage is permanent. They ",
        afterInline:
          " a way to reverse the loss of the colour during the test last year.",
        afterTail: "",
        cue: "NOT FIND",
        answers: [
          "did not find",
          "didn't find",
          "didnt find"
        ],
        keyShow: "didn't find",
        grammarTag: "Past Simple · отрицание",
        plainRu:
          "«<strong>Не нашли</strong> способ в прошлом году» → <em>last year</em> + NOT FIND → <em>didn't find</em>.",
        explainRu:
          "Маркер <em>last year</em> — Past. Отрицание: <em>did not find</em>.",
        explainOkRu:
          "<em>Didn't find</em> — в том тесте способ не нашли.",
        explainWrongRu:
          "Perfect или голое <em>not find</em> не подходят.",
        examplesRu: [
          "✓ They <em>didn't find</em> the key yesterday. — Past + not.",
          "✓ We <em>did not see</em> him last week. — та же схема.",
          "✗ They <em>not find</em> a way… — без <em>did</em> ошибка."
        ],
        wrongIf: [
          {
            includes: "not find",
            hintRu:
              "Без <em>did</em> отрицание неполное → <em>didn't find</em>."
          },
          {
            includes: "have not found",
            hintRu:
              "<em>Last year</em> → конкретное прошлое → Past, не Perfect."
          },
          {
            includes: "found",
            hintRu:
              "Без <em>not</em> — «нашли», а нужно «не нашли»."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before:
          "Cooking has reached new heights. Astronauts on the International Space Station made the first space-baked cookies. The cookies are the very first kind of food to be baked in space from raw ingredients. Baking the cookies was not as easy as the astronauts ",
        afterInline: " it would be.",
        afterTail: " The first cookie came out undercooked.",
        cue: "THINK",
        answers: ["thought", "had thought"],
        keyShow: "thought",
        grammarTag: "Past Simple / Past Perfect",
        plainRu:
          "«Не так просто, как они <strong>думали</strong>» — сравнение с прошлым ожиданием → <em>thought</em> от THINK.",
        explainRu:
          "Главное сказуемое <em>was</em> — Past. Ожидание до этого: <em>thought</em> или <em>had thought</em>.",
        explainOkRu:
          "<em>As … as they thought</em> — «как они думали (что будет)».",
        explainWrongRu:
          "Present (<em>think</em>) не сочетается с <em>was not as easy</em>.",
        examplesRu: [
          "✓ It was harder than I <em>thought</em>. — «сложнее, чем я думал».",
          "✓ They <em>had thought</em> it would be easy. — Past Perfect тоже ок.",
          "✗ …as the astronauts <em>think</em> it would be. — время не сходится."
        ],
        wrongIf: [
          {
            includes: "think",
            hintRu:
              "Present после <em>was not as easy</em> → <em>thought</em>."
          },
          {
            includes: "thinking",
            hintRu:
              "Нужна форма сказуемого в прошлом → <em>thought</em>."
          },
          {
            includes: "thinks",
            hintRu:
              "Present <em>thinks</em> не стоит в прошлой истории."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 2,
        before: "Space food ",
        afterInline: " on Earth.",
        afterTail: " It is pre-packaged and then heated on the space station.",
        cue: "MAKE",
        answers: ["is made", "s made"],
        keyShow: "is made",
        grammarTag: "Present Simple Passive",
        plainRu:
          "«Космическую еду <strong>делают / производят</strong> на Земле» — еда не сама делает → пассив <em>is made</em>.",
        explainRu:
          "Общий факт в Present: <em>Space food is made on Earth</em> от <strong>MAKE</strong>.",
        explainOkRu:
          "<em>Is made</em> — пассив: еду изготавливают, потом упаковывают.",
        explainWrongRu:
          "Актив <em>makes</em> дал бы «еда делает на Земле» — бессмыслица.",
        examplesRu: [
          "✓ Bread <em>is made</em> from flour. — «хлеб делают из муки».",
          "✓ This phone <em>is made</em> in China. — типичный пассив.",
          "✗ Space food <em>make</em> on Earth. — нужен пассив <em>is made</em>."
        ],
        wrongIf: [
          {
            includes: "make",
            hintRu:
              "Актив «food make» не работает → <em>is made</em>."
          },
          {
            includes: "made",
            hintRu:
              "Past <em>made</em> = «делали когда-то»; здесь общий факт → Present."
          },
          {
            includes: "makes",
            hintRu:
              "<em>Food makes on Earth</em> — еда не «делает» → пассив."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 2,
        before: "Astronauts will enjoy ",
        afterInline: " freshly baked food.",
        afterTail:
          " It will be a nice reminder of home. They said this would be important for astronauts going to the moon or on the long journey to Mars.",
        cue: "EAT",
        answers: ["eating"],
        keyShow: "eating",
        grammarTag: "Gerund · после enjoy",
        plainRu:
          "После <em>enjoy</em> почти всегда <strong>-ing</strong>: <em>enjoy eating</em> — «наслаждаться едой».",
        explainRu:
          "От <strong>EAT</strong> → <em>eating</em>: <em>will enjoy eating freshly baked food</em>.",
        explainOkRu:
          "<em>Enjoy eating</em> — не «enjoy eat», а герундий.",
        explainWrongRu:
          "Голый <em>eat</em> или <em>to eat</em> после <em>enjoy</em> обычно не ставят.",
        examplesRu: [
          "✓ I enjoy <em>reading</em> in the evening. — enjoy + -ing.",
          "✓ She enjoys <em>swimming</em>. — та же схема.",
          "✗ They will enjoy <em>eat</em>… — нужно <em>eating</em>."
        ],
        wrongIf: [
          {
            includes: "eat",
            hintRu:
              "После <em>enjoy</em> → <em>eating</em>, не <em>eat</em>."
          },
          {
            includes: "to eat",
            hintRu:
              "<em>Enjoy to eat</em> — ошибка; нужен герундий <em>eating</em>."
          },
          {
            includes: "eaten",
            hintRu:
              "Participle III без вспомогательного здесь не подходит."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Текст 1:</strong> <em>mice</em>; <em>for centuries</em> → Perfect; <em>last year</em> → <em>didn't find</em>.</p>" +
      "<p><strong>Текст 2:</strong> <em>thought</em>; <em>is made</em>; <em>enjoy eating</em>.</p>"
  });
})(typeof window !== "undefined" ? window : this);
