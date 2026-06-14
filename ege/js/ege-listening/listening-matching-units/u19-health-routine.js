/**
 * ЕГЭ Listening Matching · Unit 19 · Health routine.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  var speakers = [
    {
      id: "A",
      text:
        "Right now I'm trying to find a way to regain a healthy lifestyle despite being busy. I've completely lost the athleticism that was a large part of my identity and I can't stand it any more. Now I'm trying to regain general fitness. So I've been biking to work (about 20 minutes) for two months now, trying to get more veggies and whole grain in my life, drinking lots of water, and I'm hoping to start walking more, although right now I have to work a lot and usually feel too exhausted after work to do anything else."
    },
    {
      id: "B",
      text:
        "My name is Katie, I'm 25 years old, and I started making a conscious effort to develop healthy habits about a year ago. The first thing I did was give up smoking. My goals are mainly to exercise regularly, drink enough water, and eat fresh fruits and veggies daily. I do keep track of what I eat with journaling, although I'm not a calorie counter, and I don't own scales or restrict myself in any way. I just want to be stronger and feel better through trying to meet those goals every day. Now I feel I can do it."
    },
    {
      id: "C",
      text:
        "A year or so ago, I was in pretty good shape and paying a lot of attention to my health. I slipped back into inactivity and unhealthy eating for various reasons. I miss what I had, but I've had a hard time finding the motivation to return to my usual healthy lifestyle. Spring is just arriving — sunny sky, warmer weather, longer days, green leaves peeking up from last season's dead grass. The improvement in the weather is lifting my spirits, so I've decided to take advantage of the extra energy and design for myself a spring fitness challenge."
    },
    {
      id: "D",
      text:
        "I have just realised that at least six days out of seven, I do the amount of exercise that is recommended for those whose goal is a healthy lifestyle, just by walking during my daily routine. About three times a week, I do more, sometimes considerably more. Despite that, I often do myself down by telling people I don't exercise at all. I think some part of my brain still believes that because I'm doing it as part of my routine rather than going to any special effort, it can't be taken into account."
    },
    {
      id: "E",
      text:
        "Hi! I'm Alex. I've had terribly unhealthy eating habits for the last few years. I never took much time to eat and ended up eating very few meals. I'm trying to develop healthier eating habits, and I wonder what would constitute a balanced meal. For breakfast I eat a bowl of cereal and yogurt. Then grab five pieces of fruit and nibble between lunch and dinner. It's more than usual to eat, but I know there's still a lot of room for improvement. At the same time I'm worried about going overboard, which can happen very easily for me."
    },
    {
      id: "F",
      text:
        "I am 27 years old, and I come from a family of rather overweight people. I've been working to live a more healthy and fit lifestyle since last December. Over the past three years, I've watched older relatives dealing with serious health problems, and it's been a wake up call for me to start taking care of myself while I'm young and my state of health hasn't become worse. I'd like to start a family in the next couple of years, and it would be great to be able to keep up with my children as the years go by."
    }
  ];

  pack.units.push({
    id: "u19-health-routine",
    unitOrder: 19,
    title: "Unit 19 · Health routine",
    examSection: "§1 · Задание 1",
    headerTitle: "Health routine",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/19/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2019_%5Bcut_262sec%5D%20-%201.mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Health routine:</strong> healthy habits every day, lack of motivation, routine exercise, irregular meals, family health risk, returning to fitness despite tiredness.</p>",
    statements: [
      { num: 1, text: "I eat little and rather irregularly." },
      { num: 2, text: "I am trying to get used to everyday healthy activities." },
      { num: 3, text: "I feel unable to stop myself from eating." },
      { num: 4, text: "I am afraid of having the same health problems as my relatives do." },
      { num: 5, text: "I am willing to return to a healthy lifestyle despite being tired." },
      { num: 6, text: "I am sure that I exercise enough while carrying out my everyday duties." },
      { num: 7, text: "I feel now like starting a healthy life again." }
    ],
    extraStatementNum: 3,
    // A→5, B→2, C→7, D→6, E→1, F→4; extra 3
    key: [5, 2, 7, 6, 1, 4],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "regain a healthy lifestyle despite being busy", ru: "вернуться к здоровому образу жизни, несмотря на занятость", tip: "A · №5" },
      { en: "feel too exhausted after work", ru: "чувствовать себя слишком уставшим после работы", tip: "A · №5" },
      { en: "develop healthy habits", ru: "развивать здоровые привычки", tip: "B · №2" },
      { en: "meet those goals every day", ru: "выполнять эти цели каждый день", tip: "B · №2" },
      { en: "design for myself a spring fitness challenge", ru: "придумать себе весенний фитнес-челлендж", tip: "C · №7" },
      { en: "walking during my daily routine", ru: "ходьба в ежедневной рутине", tip: "D · №6" },
      { en: "I do the amount of exercise that is recommended", ru: "я делаю рекомендованный объём упражнений", tip: "D · №6" },
      { en: "eating very few meals", ru: "есть очень мало приёмов пищи", tip: "E · №1" },
      { en: "older relatives dealing with serious health problems", ru: "старшие родственники с серьёзными проблемами здоровья", tip: "F · №4" }
    ],
    tapPhrases: [
      { en: "lost the athleticism", ru: "утратил спортивную форму" },
      { en: "biking to work", ru: "ездить на работу на велосипеде" },
      { en: "whole grain", ru: "цельнозерновые продукты" },
      { en: "give up smoking", ru: "бросить курить" },
      { en: "keep track of what I eat", ru: "следить за тем, что я ем" },
      { en: "slipped back into inactivity", ru: "снова скатился в малоподвижность" },
      { en: "lifting my spirits", ru: "поднимает настроение" },
      { en: "do myself down", ru: "принижать себя" },
      { en: "balanced meal", ru: "сбалансированный приём пищи" },
      { en: "going overboard", ru: "перебарщивать" },
      { en: "wake up call", ru: "тревожный сигнал" }
    ],
    shadowSpeakers: speakers.map(function (sp) {
      var phrasesMap = {
        A: [
          { en: "regain a healthy lifestyle", ru: "вернуть здоровый образ жизни" },
          { en: "despite being busy", ru: "несмотря на занятость" },
          { en: "biking to work", ru: "ездить на работу на велосипеде" },
          { en: "get more veggies and whole grain", ru: "добавить больше овощей и цельнозерновых" },
          { en: "drinking lots of water", ru: "пить много воды" },
          { en: "feel too exhausted", ru: "чувствовать сильную усталость" }
        ],
        B: [
          { en: "conscious effort", ru: "осознанное усилие" },
          { en: "develop healthy habits", ru: "развивать здоровые привычки" },
          { en: "exercise regularly", ru: "регулярно тренироваться" },
          { en: "drink enough water", ru: "пить достаточно воды" },
          { en: "fresh fruits and veggies daily", ru: "свежие фрукты и овощи каждый день" },
          { en: "meet those goals every day", ru: "выполнять эти цели каждый день" }
        ],
        C: [
          { en: "in pretty good shape", ru: "в хорошей форме" },
          { en: "slipped back into inactivity", ru: "вернулся к бездействию" },
          { en: "unhealthy eating", ru: "нездоровое питание" },
          { en: "find the motivation to return", ru: "найти мотивацию вернуться" },
          { en: "lifting my spirits", ru: "поднимает настроение" },
          { en: "spring fitness challenge", ru: "весенний фитнес-челлендж" }
        ],
        D: [
          { en: "at least six days out of seven", ru: "как минимум шесть дней из семи" },
          { en: "amount of exercise that is recommended", ru: "рекомендованный объём упражнений" },
          { en: "walking during my daily routine", ru: "ходьба в ежедневной рутине" },
          { en: "about three times a week", ru: "примерно три раза в неделю" },
          { en: "part of my routine", ru: "часть моей рутины" },
          { en: "can't be taken into account", ru: "это будто не считается" }
        ],
        E: [
          { en: "terribly unhealthy eating habits", ru: "ужасно нездоровые пищевые привычки" },
          { en: "never took much time to eat", ru: "никогда не уделял еде много времени" },
          { en: "eating very few meals", ru: "ел очень мало раз в день" },
          { en: "develop healthier eating habits", ru: "развивать более здоровые привычки питания" },
          { en: "balanced meal", ru: "сбалансированный приём пищи" },
          { en: "worried about going overboard", ru: "боюсь переборщить" }
        ],
        F: [
          { en: "family of rather overweight people", ru: "семья довольно полных людей" },
          { en: "serious health problems", ru: "серьёзные проблемы со здоровьем" },
          { en: "wake up call", ru: "тревожный сигнал" },
          { en: "start taking care of myself", ru: "начать заботиться о себе" },
          { en: "while I'm young", ru: "пока я молод" },
          { en: "keep up with my children", ru: "успевать за своими детьми" }
        ]
      };
      return {
        id: sp.id,
        label: "Speaker " + sp.id,
        fullText: sp.text,
        phrases: phrasesMap[sp.id] || [],
        chunks: [{ text: sp.text, showText: true }]
      };
    }),
    huntLabs: [
      {
        speaker: "A",
        keyNum: 5,
        trapNums: [2],
        keyLineRu: "A: he wants to return to healthy living, though work leaves him exhausted.",
        evidencePromptRu: "<strong>A.</strong> Найдите despite being busy + too exhausted.",
        segments: [
          { kind: "hit", sol: "e", text: "regain a healthy lifestyle despite being busy" },
          { kind: "hit", sol: "e", text: "feel too exhausted after work" },
          {
            kind: "hit",
            sol: "d",
            text: "trying to get more veggies and whole grain in my life",
            trapNum: 2,
            explainRu: "Здоровые привычки тоже есть, но главный смысл — вернуться к форме несмотря на усталость и занятость."
          }
        ]
      },
      {
        speaker: "B",
        keyNum: 2,
        trapNums: [7],
        keyLineRu: "B: she is building everyday healthy habits and trying to stick to them daily.",
        evidencePromptRu: "<strong>B.</strong> Найдите develop healthy habits + every day.",
        segments: [
          { kind: "hit", sol: "e", text: "develop healthy habits" },
          { kind: "hit", sol: "e", text: "trying to meet those goals every day" },
          {
            kind: "hit",
            sol: "d",
            text: "Now I feel I can do it",
            trapNum: 7,
            explainRu: "Фраза про уверенность похожа на новое начало, но основной ответ здесь про ежедневные привычки."
          }
        ]
      },
      {
        speaker: "C",
        keyNum: 7,
        trapNums: [5],
        keyLineRu: "C: spring has motivated him to start a healthy phase again.",
        evidencePromptRu: "<strong>C.</strong> Найдите lifting my spirits + spring fitness challenge.",
        segments: [
          { kind: "hit", sol: "e", text: "lifting my spirits" },
          { kind: "hit", sol: "e", text: "design for myself a spring fitness challenge" },
          {
            kind: "hit",
            sol: "d",
            text: "return to my usual healthy lifestyle",
            trapNum: 5,
            explainRu: "Return есть, но ключевой акцент — именно новое чувство стартовать снова прямо сейчас."
          }
        ]
      },
      {
        speaker: "D",
        keyNum: 6,
        trapNums: [2],
        keyLineRu: "D: daily routine walking already gives enough exercise.",
        evidencePromptRu: "<strong>D.</strong> Найдите amount of exercise that is recommended.",
        segments: [
          { kind: "hit", sol: "e", text: "I do the amount of exercise that is recommended" },
          { kind: "hit", sol: "e", text: "walking during my daily routine" },
          {
            kind: "hit",
            sol: "d",
            text: "part of my routine",
            trapNum: 2,
            explainRu: "Routine звучит как привычка, но здесь речь именно о достаточном объёме exercise в повседневных делах."
          }
        ]
      },
      {
        speaker: "E",
        keyNum: 1,
        trapNums: [3],
        keyLineRu: "E: he used to eat very few meals and rather irregularly.",
        evidencePromptRu: "<strong>E.</strong> Найдите never took much time to eat + very few meals.",
        segments: [
          { kind: "hit", sol: "e", text: "never took much time to eat" },
          { kind: "hit", sol: "e", text: "ended up eating very few meals" },
          {
            kind: "hit",
            sol: "d",
            text: "worried about going overboard",
            trapNum: 3,
            explainRu: "Есть страх переборщить, но не прямое признание, что он не может остановиться."
          }
        ]
      },
      {
        speaker: "F",
        keyNum: 4,
        trapNums: [7],
        keyLineRu: "F: family health problems push him to avoid the same future.",
        evidencePromptRu: "<strong>F.</strong> Найдите relatives + serious health problems.",
        segments: [
          { kind: "hit", sol: "e", text: "family of rather overweight people" },
          { kind: "hit", sol: "e", text: "older relatives dealing with serious health problems" },
          {
            kind: "hit",
            sol: "d",
            text: "start taking care of myself",
            trapNum: 7,
            explainRu: "Начинать здоровую жизнь он тоже хочет, но причина и главный смысл — страх повторить семейные health problems."
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
