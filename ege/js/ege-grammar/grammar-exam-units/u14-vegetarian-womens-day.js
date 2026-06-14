/**
 * ЕГЭ Grammar Exam · Unit 14 · Vegetarian movement · A special day (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u14-vegetarian-womens-day",
    unitOrder: 14,
    title: "Unit 14 · Vegetarian · Women's Day",
    examSection: "§19–24",
    headerTitle: "Vegetarian · A special day",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "The vegetarian movement started in the 19th century. Why do more and more people join it? Some think that it is ",
        afterInline: " not to eat meat.",
        afterTail: "",
        cue: "HEALTHY",
        answers: ["healthier"],
        keyShow: "healthier",
        grammarTag: "Сравнительная степень",
        plainRu:
          "«<strong>Полезнее</strong> не есть мясо» — сравнение двух вариантов → от HEALTHY нужно <em>healthier</em>.",
        explainRu:
          "Смысл: не есть мясо <strong>полезнее</strong>, чем есть. Сравнительная степень: healthy → <em>healthier</em>.",
        explainOkRu:
          "<em>It is healthier not to eat meat</em> — типичная конструкция «полезнее не делать что-то».",
        explainWrongRu:
          "GOOD/HEALTHY без -er не передаёт «полезнее».",
        examplesRu: [
          "✓ It is <em>healthier</em> to walk than to drive. — «полезнее ходить».",
          "✓ This salad is <em>healthier</em> than pizza. — сравнение.",
          "✗ It is <em>healthy</em> not to eat… — без «-er» сравнение слабее."
        ],
        wrongIf: [
          {
            includes: "healthy",
            hintRu:
              "HEALTHY → сравнительная <em>healthier</em> («полезнее»)."
          },
          {
            includes: "healthiest",
            hintRu:
              "<em>Healthiest</em> — «самый полезный»; здесь «полезнее» → <em>healthier</em>."
          },
          {
            includes: "healthily",
            hintRu:
              "<em>Healthily</em> — наречие; нужно прилагательное <em>healthier</em>."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before:
          "Others believe that it is cruel to eat animals. The famous writer George Bernard Shaw once said, \"Animals are my friends — and I ",
        afterInline: " my friends.\"",
        afterTail: "",
        cue: "NOT EAT",
        answers: [
          "do not eat",
          "don't eat",
          "dont eat"
        ],
        keyShow: "don't eat",
        grammarTag: "Present Simple · отрицание",
        plainRu:
          "«Я <strong>не ем</strong> своих друзей» — общий факт, привычка → <em>do not eat</em>.",
        explainRu:
          "Цитата Шоу — общее правило: NOT + EAT в Present: <em>I don't eat my friends</em>.",
        explainOkRu:
          "<em>Don't eat</em> — «не ем» (вообще, по жизни).",
        explainWrongRu:
          "Past или голое <em>not eat</em> не передают цитату-принцип.",
        examplesRu: [
          "✓ I <em>don't eat</em> meat. — «я не ем мясо» (обычно).",
          "✓ She <em>does not eat</em> fish. — Present + not.",
          "✗ I <em>not eat</em> my friends. — без <em>do</em> ошибка."
        ],
        wrongIf: [
          {
            includes: "not eat",
            hintRu:
              "Без <em>do</em> отрицание неполное → <em>don't eat</em>."
          },
          {
            includes: "did not eat",
            hintRu:
              "Past «не ел тогда»; цитата про общий принцип → Present."
          },
          {
            includes: "am not eating",
            hintRu:
              "Continuous «сейчас не ем»; здесь «вообще не ем» → Simple."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 1,
        before: "Finally there are some people who think that ",
        afterInline: " food for cows and pigs to eat is not very economical.",
        afterTail: "",
        cue: "GROW",
        answers: ["growing", "to grow"],
        keyShow: "growing",
        grammarTag: "Gerund · подлежащее",
        plainRu:
          "«<strong>Выращивать</strong> еду для коров… — невыгодно» — действие как тема фразы → <em>growing</em>.",
        explainRu:
          "После <em>think that</em> подлежащее — действие: <em>Growing food… is not economical</em> от <strong>GROW</strong>.",
        explainOkRu:
          "<em>Growing food</em> = «выращивание еды» (герундий).",
        explainWrongRu:
          "Голый <em>grow</em> не может быть подлежащим.",
        examplesRu: [
          "✓ <em>Swimming</em> is good for health. — герундий как подлежащее.",
          "✓ <em>Growing</em> vegetables takes time. — «выращивание».",
          "✗ …think that <em>grow</em> food is… — нужен -ing."
        ],
        wrongIf: [
          {
            includes: "grow",
            hintRu:
              "Голый <em>grow</em> не подлежащее → <em>growing</em>."
          },
          {
            includes: "grew",
            hintRu:
              "Past <em>grew</em> — «выращивали»; нужен герундий <em>growing</em>."
          },
          {
            includes: "grown",
            hintRu:
              "Participle III без вспомогательного не подходит."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before:
          "March 8 is a very special day. It is a global day celebrating the social, economic, cultural and political achievements of ",
        afterInline: ".",
        afterTail: "",
        cue: "WOMAN",
        answers: ["women"],
        keyShow: "women",
        grammarTag: "Множественное число · WOMAN",
        plainRu:
          "«Достижения <strong>женщин</strong>» — много людей → <em>women</em>, не <em>woman</em>.",
        explainRu:
          "После <em>achievements of</em> — группа людей: <em>women</em> от <strong>WOMAN</strong>.",
        explainOkRu:
          "<em>Women</em> — неправильное множественное (не womans).",
        explainWrongRu:
          "Единственное <em>woman</em> не подходит к «достижениям» в целом.",
        examplesRu: [
          "✓ One <em>woman</em>, many <em>women</em>. — как man → men.",
          "✓ Rights of <em>women</em>. — «права женщин».",
          "✗ …achievements of <em>woman</em>. — нужно множественное."
        ],
        wrongIf: [
          {
            includes: "woman",
            hintRu:
              "Одной <em>woman</em> мало → <em>women</em>."
          },
          {
            includes: "womans",
            hintRu:
              "Формы <em>womans</em> нет → <em>women</em>."
          },
          {
            includes: "womens",
            hintRu:
              "Неверная форма → <em>women</em>."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 2,
        before: "It ",
        afterInline:
          " to appreciate and acknowledge the contribution of all special females in our life.",
        afterTail:
          " She can be a mom who balances work and home beautifully or grandma who amazes us with her spirit and courage or might be a sister, daughter, wife or a special friend who brings love and cheer in our lives.",
        cue: "MEAN",
        answers: ["is meant", "s meant"],
        keyShow: "is meant",
        grammarTag: "Present Simple Passive",
        plainRu:
          "«Этот день <strong>предназначен</strong> для того, чтобы…» → пассив <em>is meant to</em> от MEAN.",
        explainRu:
          "Устойчиво: <em>It is meant to</em> + глагол = «этому суждено / этот день для того, чтобы…».",
        explainOkRu:
          "<em>Is meant to appreciate</em> — пассив: день «задуман» для признательности.",
        explainWrongRu:
          "Актив <em>means</em> — другой оттенок; в ключе ЕГЭ — <em>is meant</em>.",
        examplesRu: [
          "✓ This rule <em>is meant to</em> protect children. — «правило призвано защищать».",
          "✓ The gift <em>is meant to</em> cheer you up. — «подарок для того, чтобы…»",
          "✗ It <em>mean</em> to appreciate… — нет формы глагола."
        ],
        wrongIf: [
          {
            includes: "means",
            hintRu:
              "<em>It means to</em> — «это означает»; здесь «предназначено» → <em>is meant</em>."
          },
          {
            includes: "meant",
            hintRu:
              "Одного <em>meant</em> без <em>is</em> мало → <em>is meant</em>."
          },
          {
            includes: "is mean",
            hintRu:
              "<em>Mean</em> = «злой / означать»; нужно <em>is meant</em> (пассив)."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 2,
        before:
          "She can be a mom who balances work and home beautifully or grandma who amazes us with her spirit and courage or might be a sister, daughter, wife or a special friend who brings love and cheer in our ",
        afterInline: ".",
        afterTail:
          " It is perfect time to express your feelings and send warm wishes to all those females close to your heart.",
        cue: "LIFE",
        answers: ["lives"],
        keyShow: "lives",
        grammarTag: "Множественное число · LIFE",
        plainRu:
          "«В <strong>наших жизнях</strong>» — <em>our</em> = «наши» (много) → <em>lives</em>, не <em>life</em>.",
        explainRu:
          "После <em>our</em> здесь несколько жизней (у каждого своя): <em>in our lives</em> от <strong>LIFE</strong>.",
        explainOkRu:
          "<em>Lives</em> — множественное от life (не lifes).",
        explainWrongRu:
          "Единственное <em>life</em> не сочетается с «наши» в этом смысле.",
        examplesRu: [
          "✓ Love and joy in our <em>lives</em>. — «в наших жизнях».",
          "✓ They changed their <em>lives</em>. — множественное.",
          "✗ …cheer in our <em>life</em>. — при <em>our</em> часто <em>lives</em>."
        ],
        wrongIf: [
          {
            includes: "life",
            hintRu:
              "После <em>our</em> здесь → <em>lives</em> («наши жизни»)."
          },
          {
            includes: "lifes",
            hintRu:
              "Формы <em>lifes</em> нет → <em>lives</em>."
          },
          {
            includes: "live",
            hintRu:
              "<em>Live</em> — глагол «жить»; нужно существительное <em>lives</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Текст 1:</strong> сравнение → <em>healthier</em>; цитата → <em>don't eat</em>; тема фразы → <em>growing</em>.</p>" +
      "<p><strong>Текст 2:</strong> <em>women</em>; <em>is meant to</em>; <em>our lives</em>.</p>"
  });
})(typeof window !== "undefined" ? window : this);
