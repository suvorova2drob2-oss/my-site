/**
 * ЕГЭ Listening Matching · Unit 18 · Food and cooking habits.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  var speakers = [
    {
      id: "A",
      text:
        "We have a great variety of food available now, but I think we should care a lot more about where our food comes from. I think if people started to buy local and went to farmers' markets, they would be amazed at how fresh and tasty everything is. Vegetables are the best choice when they are in season, and simple food can be easy to prepare."
    },
    {
      id: "B",
      text:
        "There are still people who think that it costs more money than it really does to eat well. It worries me that people are happy to spend thousands of dollars on a car, but don't want to spend more than 2.50 on a chicken. We all need to be aware of what we are putting in our mouths but we seem to attach far more importance to clothes than food."
    },
    {
      id: "C",
      text:
        "When I was a child we used to eat healthy food without thinking about it — you could rarely see preserved or processed food in stores. Big home-cooked family meals were central to my childhood. Nowadays, while some families have kept that tradition, generally we've lost a connection with food, and that makes me pessimistic about our eating habits."
    },
    {
      id: "D",
      text:
        "No doubt there will always be people who prefer to eat out, and there is a place for ready-made meals, but I believe we've started to understand the advantages of simple local produce and the harm of all these preservatives and chemicals in processed food. We are beginning to realise that freshly prepared ingredients, cooked simply, are much better than ready-made meals."
    },
    {
      id: "E",
      text:
        "Growing your own produce is a fantastic way to get better food. You grow what you want and, when you dig it up, it's on the table an hour later. There are always things you can grow, even if you don't have a garden or a piece of land — herbs in a pot on your kitchen windowsill will make the difference in any dish you cook because they are so fresh."
    },
    {
      id: "F",
      text:
        "We are able to buy much better food than ten years ago, but what is really missing is the culture of cooking at home. We have two generations of children who didn't stand at their parents' shoulders and learn how to cook — and a few TV shows are not going to change that. Many children, especially in big cities, don't know what flour is or where milk comes from."
    }
  ];

  pack.units.push({
    id: "u18-food-and-cooking",
    unitOrder: 18,
    title: "Unit 18 · Food and cooking habits",
    examSection: "§1 · Задание 1",
    headerTitle: "Food and cooking habits",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/18/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2018%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Food:</strong> local produce, family meals, cooking at home, growing your own food, what people value more than food.</p>",
    statements: [
      { num: 1, text: "Many people understand the importance of healthy eating." },
      { num: 2, text: "Some children know very little about food and cooking." },
      { num: 3, text: "Good food is very expensive nowadays." },
      { num: 4, text: "You can improve your eating habits by growing food yourself." },
      { num: 5, text: "Local food is tastier and better for your health." },
      { num: 6, text: "People have lost the tradition of family meals." },
      { num: 7, text: "For many people the quality of food is less important than other things." }
    ],
    extraStatementNum: 3,
    // A→5, B→7, C→6, D→1, E→4, F→2; extra 3
    key: [5, 7, 6, 1, 4, 2],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "buy local", ru: "покупать местное", tip: "A · №5" },
      { en: "fresh and tasty", ru: "свежее и вкусное", tip: "A · №5" },
      { en: "attach far more importance to clothes than food", ru: "придавать одежде гораздо больше значения, чем еде", tip: "B · №7" },
      { en: "home-cooked family meals", ru: "домашние семейные обеды", tip: "C · №6" },
      { en: "lost a connection with food", ru: "утратили связь с едой", tip: "C · №6" },
      { en: "started to understand the advantages", ru: "начали понимать преимущества", tip: "D · №1" },
      { en: "freshly prepared ingredients", ru: "свежеприготовленные ингредиенты", tip: "D · №1" },
      { en: "Growing your own produce", ru: "выращивание собственной еды", tip: "E · №4" },
      { en: "herbs in a pot", ru: "травы в горшке", tip: "E · №4" },
      { en: "learn how to cook", ru: "учиться готовить", tip: "F · №2" },
      { en: "don't know what flour is", ru: "не знают, что такое мука", tip: "F · №2" }
    ],
    tapPhrases: [
      { en: "farmers' markets", ru: "фермерские рынки" },
      { en: "in season", ru: "в сезон" },
      { en: "it costs more money than it really does", ru: "это стоит больше денег, чем на самом деле" },
      { en: "preserved or processed food", ru: "консервированная или обработанная еда" },
      { en: "ready-made meals", ru: "готовые блюда" },
      { en: "preservatives and chemicals", ru: "консерванты и химикаты" },
      { en: "windowsill", ru: "подоконник" },
      { en: "culture of cooking at home", ru: "культура домашней готовки" }
    ],
    shadowSpeakers: speakers.map(function (sp) {
      var phrasesMap = {
        A: [
          { en: "care more about where our food comes from", ru: "больше заботиться о том, откуда берётся еда" },
          { en: "buy local", ru: "покупать местное" },
          { en: "farmers' markets", ru: "фермерские рынки" },
          { en: "fresh and tasty", ru: "свежее и вкусное" },
          { en: "in season", ru: "в сезон" },
          { en: "simple food can be easy to prepare", ru: "простую еду легко готовить" }
        ],
        B: [
          { en: "eat well", ru: "питаться хорошо" },
          { en: "spend thousands of dollars on a car", ru: "тратить тысячи долларов на машину" },
          { en: "2.50 on a chicken", ru: "2.50 на курицу" },
          { en: "what we are putting in our mouths", ru: "что мы кладём себе в рот" },
          { en: "attach far more importance to clothes than food", ru: "придавать одежде больше значения, чем еде" }
        ],
        C: [
          { en: "healthy food without thinking about it", ru: "здоровая еда без особых размышлений" },
          { en: "preserved or processed food", ru: "консервированная или обработанная еда" },
          { en: "home-cooked family meals", ru: "домашние семейные обеды" },
          { en: "central to my childhood", ru: "были важной частью моего детства" },
          { en: "lost a connection with food", ru: "потеряли связь с едой" }
        ],
        D: [
          { en: "simple local produce", ru: "простые местные продукты" },
          { en: "harm of preservatives and chemicals", ru: "вред консервантов и химикатов" },
          { en: "processed food", ru: "переработанная еда" },
          { en: "freshly prepared ingredients", ru: "свежеприготовленные ингредиенты" },
          { en: "cooked simply", ru: "приготовленные просто" },
          { en: "much better than ready-made meals", ru: "намного лучше готовых блюд" }
        ],
        E: [
          { en: "grow your own produce", ru: "выращивать собственную еду" },
          { en: "it's on the table an hour later", ru: "через час это уже на столе" },
          { en: "even if you don't have a garden", ru: "даже если у тебя нет сада" },
          { en: "herbs in a pot", ru: "травы в горшке" },
          { en: "kitchen windowsill", ru: "кухонный подоконник" },
          { en: "they are so fresh", ru: "они такие свежие" }
        ],
        F: [
          { en: "culture of cooking at home", ru: "культура домашней готовки" },
          { en: "two generations of children", ru: "два поколения детей" },
          { en: "learn how to cook", ru: "учиться готовить" },
          { en: "TV shows are not going to change that", ru: "телешоу этого не изменят" },
          { en: "don't know what flour is", ru: "не знают, что такое мука" },
          { en: "where milk comes from", ru: "откуда берётся молоко" }
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
        trapNums: [1],
        keyLineRu: "A: local food is fresh, tasty and a better choice.",
        evidencePromptRu: "<strong>A.</strong> Найдите buy local + fresh and tasty.",
        segments: [
          { kind: "glue", text: "I think if people started to " },
          { kind: "hit", sol: "e", text: "buy local" },
          { kind: "glue", text: " and went to farmers' markets, they would be amazed at how " },
          { kind: "hit", sol: "e", text: "fresh and tasty everything is" },
          {
            kind: "hit",
            sol: "d",
            text: "we should care a lot more about where our food comes from",
            trapNum: 1,
            explainRu: "Это похоже на общую заботу о healthy eating, но здесь главный акцент на преимуществах local food."
          }
        ]
      },
      {
        speaker: "B",
        keyNum: 7,
        trapNums: [3],
        keyLineRu: "B: people often value cars and clothes more than food quality.",
        evidencePromptRu: "<strong>B.</strong> Найдите clothes than food / spend thousands on a car.",
        segments: [
          { kind: "hit", sol: "e", text: "spend thousands of dollars on a car" },
          { kind: "hit", sol: "e", text: "attach far more importance to clothes than food" },
          {
            kind: "hit",
            sol: "d",
            text: "people who think that it costs more money than it really does to eat well",
            trapNum: 3,
            explainRu: "Он спорит с этим мнением: good food не так дорого, как люди думают."
          }
        ]
      },
      {
        speaker: "C",
        keyNum: 6,
        trapNums: [1],
        keyLineRu: "C: family meals were once central, but that tradition has largely been lost.",
        evidencePromptRu: "<strong>C.</strong> Найдите family meals + lost that tradition.",
        segments: [
          { kind: "hit", sol: "e", text: "Big home-cooked family meals were central to my childhood" },
          { kind: "hit", sol: "e", text: "generally we've lost a connection with food" },
          {
            kind: "hit",
            sol: "d",
            text: "used to eat healthy food without thinking about it",
            trapNum: 1,
            explainRu: "Healthy food упомянута, но основной смысл — утрата традиции семейной еды."
          }
        ]
      },
      {
        speaker: "D",
        keyNum: 1,
        trapNums: [5],
        keyLineRu: "D: people are beginning to understand the value of healthier food choices.",
        evidencePromptRu: "<strong>D.</strong> Найдите started to understand + much better than ready-made meals.",
        segments: [
          { kind: "hit", sol: "e", text: "we've started to understand the advantages" },
          { kind: "hit", sol: "e", text: "freshly prepared ingredients, cooked simply, are much better than ready-made meals" },
          {
            kind: "hit",
            sol: "d",
            text: "simple local produce",
            trapNum: 5,
            explainRu: "Local produce здесь лишь пример; общий смысл шире — growing awareness of healthy eating."
          }
        ]
      },
      {
        speaker: "E",
        keyNum: 4,
        trapNums: [5],
        keyLineRu: "E: growing your own food improves what you eat.",
        evidencePromptRu: "<strong>E.</strong> Найдите Growing your own produce.",
        segments: [
          { kind: "hit", sol: "e", text: "Growing your own produce is a fantastic way to get better food" },
          { kind: "hit", sol: "e", text: "herbs in a pot on your kitchen windowsill will make the difference" },
          {
            kind: "hit",
            sol: "d",
            text: "they are so fresh",
            trapNum: 5,
            explainRu: "Свежесть local food здесь тоже есть, но ключевой ответ — улучшать питание через выращивание своей еды."
          }
        ]
      },
      {
        speaker: "F",
        keyNum: 2,
        trapNums: [6],
        keyLineRu: "F: many children know too little about food and cooking.",
        evidencePromptRu: "<strong>F.</strong> Найдите learn how to cook / don't know what flour is.",
        segments: [
          { kind: "hit", sol: "e", text: "learn how to cook" },
          { kind: "hit", sol: "e", text: "Many children, especially in big cities, don't know what flour is or where milk comes from" },
          {
            kind: "hit",
            sol: "d",
            text: "what is really missing is the culture of cooking at home",
            trapNum: 6,
            explainRu: "Культура домашней готовки — причина и фон, но правильный ответ именно про детей, которые мало знают о еде."
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
