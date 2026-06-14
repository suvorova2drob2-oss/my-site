/**
 * ЕГЭ Grammar Exam · Unit 2 · Stay safe while walking (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u2-stay-safe-walking",
    unitOrder: 2,
    title: "Unit 2 · Stay safe while walking",
    examSection: "§19–24",
    headerTitle: "Stay safe while walking",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "Walking is a healthy activity, but you need to know the rules of pedestrian safety. This is especially true if you ",
        afterInline: " in an area where there aren't any sidewalks or paths.",
        afterTail: "",
        cue: "WALK",
        answers: ["walk", "are walking"],
        keyShow: "walk",
        grammarTag: "Present Simple · условие",
        explainRu:
          "После <strong>if</strong> в общем правиле часто Present Simple: <em>if you walk …</em> («если вы идёте / ходите»). Базовое слово <strong>WALK</strong> → форма глагола в нужном времени.",
        explainOkRu:
          "<em>Walk</em> — Present Simple от <strong>WALK</strong>: речь о типичной ситуации («если ходите там, где нет тротуара»). Соседний контекст — общие советы по безопасности.",
        explainWrongRu:
          "Нужна грамматическая форма глагола <strong>ходить</strong>, а не существительное или другая часть речи.",
        wrongIf: [
          {
            includes: "walking",
            hintRu:
              "После <em>if you</em> здесь чаще <strong>Present Simple</strong> (<em>walk</em>), а не только форма <em>-ing</em>."
          },
          {
            includes: "walked",
            hintRu:
              "Past Simple не подходит: <em>if</em> вводит общее условие в настоящем, не историю из прошлого."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before:
          "If there is no sidewalk, choose the side where you are facing oncoming traffic. Walking opposite traffic gives you the ",
        afterInline:
          " chance to see vehicles closely approaching you and take evasive action when needed.",
        afterTail: "",
        cue: "GOOD",
        answers: ["best"],
        keyShow: "best",
        grammarTag: "Превосходная степень",
        explainRu:
          "Перед существительным <em>chance</em> и с определённым артиклем <strong>the</strong> нужна <strong>превосходная</strong> степень: <em>good → best</em> («наилучший шанс»).",
        explainOkRu:
          "<em>Best</em> — неправильная превосходная форма от <strong>GOOD</strong>; смысл: «максимально хороший / лучший шанс».",
        explainWrongRu:
          "После <strong>the</strong> и перед существительным нужна форма <strong>best</strong>, а не просто <em>good</em> или сравнительная степень.",
        wrongIf: [
          {
            includes: "good",
            hintRu:
              "Слово <strong>GOOD</strong> есть, но без превосходной степени: «<em>the … chance</em>» → <em>the best chance</em>."
          },
          {
            includes: "better",
            hintRu:
              "<em>Better</em> — сравнительная степень; здесь нужна <strong>превосходная</strong> (<em>best</em>) с <em>the</em>."
          },
          {
            includes: "well",
            hintRu:
              "<em>Well</em> — наречие; перед <em>chance</em> нужно прилагательное <em>best</em>."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 2,
        before: "Your mother was right — you should look both ways before ",
        afterInline: " any street.",
        afterTail: "",
        cue: "CROSS",
        answers: ["crossing"],
        keyShow: "crossing",
        grammarTag: "Герундий после before",
        explainRu:
          "После предлога <strong>before</strong> идёт <strong>-ing</strong>: <em>before crossing any street</em> («перед тем как перейти»).",
        explainOkRu:
          "<em>Crossing</em> — герундий от <strong>CROSS</strong>; конструкция как <em>before leaving / before opening</em>.",
        explainWrongRu:
          "После <strong>before</strong> не ставят голый инфинитив — нужен герундий <em>crossing</em>.",
        wrongIf: [
          {
            includes: "cross",
            hintRu:
              "Инфинитив <em>cross</em> после <strong>before</strong> здесь не подходит → <em>crossing</em>."
          },
          {
            includes: "to cross",
            hintRu:
              "После предлога <strong>before</strong> типично <em>-ing</em>, не <em>to-infinitive</em>."
          },
          {
            includes: "crossed",
            hintRu:
              "Past Participle <em>crossed</em> не нужен; это действие «перед переходом» → герундий."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before: "Unless you are on a sidewalk ",
        afterInline:
          " from the road or you are in a wide bike/pedestrian lane, you should walk in a single file.",
        afterTail: "",
        cue: "SEPARATE",
        answers: ["separated"],
        keyShow: "separated",
        grammarTag: "Participle II · прилагательное",
        explainRu:
          "Тротуар <strong>отделён</strong> от дороги → причастие прошедшего времени как прилагательное: <em>separated from the road</em> (пассивный смысл).",
        explainOkRu:
          "<em>Separated</em> — форма от <strong>SEPARATE</strong> (отделённый); дальше идёт опора <em>from the road</em>.",
        explainWrongRu:
          "Нужна форма «отделённый», а не глагол в активе или существительное.",
        wrongIf: [
          {
            includes: "separate",
            hintRu:
              "Голое <em>separate</em> не стыкуется с <em>from the road</em> так же естественно; нужно «<em>отделённый</em>» → <em>separated</em>."
          },
          {
            includes: "separating",
            hintRu:
              "<em>Separating</em> — актив («который отделяет»); тротуар <strong>отделён</strong> → <em>separated</em>."
          },
          {
            includes: "separation",
            hintRu:
              "<em>Separation</em> — существительное; в пропуске нужно прилагательное/причастие <em>separated</em>."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 3,
        before:
          "While it can be enjoyable to walk down the road two to three abreast chatting merrily, drivers ",
        afterInline: " it and you may lose your walking buddies.",
        afterTail: "",
        cue: "NOT EXPECT",
        answers: ["don't expect", "do not expect", "dont expect"],
        keyShow: "don't expect",
        grammarTag: "Отрицание · Present Simple",
        explainRu:
          "Базовые слова <strong>NOT EXPECT</strong> → отрицание Present Simple: <em>don't expect</em> («водители не ожидают этого»).",
        explainOkRu:
          "Оба слова из задания использованы: <em>do not / don't + expect</em>. Подлежащее <em>drivers</em> (мн. ч.) → <em>don't</em>.",
        explainWrongRu:
          "Нужно отрицание в Present Simple от <strong>EXPECT</strong>, а не утверждение или другая форма.",
        wrongIf: [
          {
            includes: "expect",
            hintRu:
              "Без <strong>NOT</strong> получается «водители ожидают» — по смыслу наоборот; нужно <em>don't expect</em>."
          },
          {
            includes: "not expect",
            hintRu:
              "Одного <em>not</em> мало — нужен вспомогательный: <em>don't expect</em>."
          },
          {
            includes: "doesn't",
            hintRu:
              "Подлежащее <em>drivers</em> (мн. ч.) → <em>don't</em>, не <em>doesn't</em>."
          },
          {
            includes: "didn't",
            hintRu:
              "Past Simple не нужен: совет про типичное поведение водителей в настоящем."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 4,
        before:
          "Share the road and path with bikes. Bike-walker collisions can result in ",
        afterInline: " bones or head injuries.",
        afterTail: "",
        cue: "BREAK",
        answers: ["broken"],
        keyShow: "broken",
        grammarTag: "Participle II · прилагательное",
        explainRu:
          "«Сломанные кости» → <em>broken bones</em>: Past Participle от <strong>BREAK</strong> как прилагательное перед существительным.",
        explainOkRu:
          "<em>Broken</em> — не «ломать» в пропуске, а прилагательное «сломанный»; рядом второе существительное <em>head injuries</em>.",
        explainWrongRu:
          "После <em>result in</em> здесь нужно прилагательное <em>broken</em>, а не глагол в инфинитиве.",
        wrongIf: [
          {
            includes: "break",
            hintRu:
              "Голый <em>break</em> не описывает кости; устойчиво <em>broken bones</em>."
          },
          {
            includes: "breaking",
            hintRu:
              "<em>Breaking</em> — «ломающие»; нужно «<strong>сломанные</strong>» → <em>broken</em>."
          },
          {
            includes: "broke",
            hintRu:
              "<em>Broke</em> — Past Simple; перед <em>bones</em> нужно прилагательное <em>broken</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Соль §19–24:</strong> два слова в CAPS (как <em>NOT EXPECT</em>) → обычно одна грамматическая конструкция (<em>don't expect</em>).</p>" +
      "<p><strong>Лайфхак:</strong> если после пропуска <em>from / before / the … noun</em> — часто Participle II или <em>-ing</em>, а не «голое» слово из задания.</p>"
  });
})(typeof window !== "undefined" ? window : this);
