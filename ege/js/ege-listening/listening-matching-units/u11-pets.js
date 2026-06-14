/**
 * ЕГЭ Listening Matching · Unit 11 · Pets (задание 1).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  var speakers = [
    {
      id: "A",
      text:
        "Are turtles good pets to have? Turtles are beautiful and fascinating creatures, but it's always a good idea to conduct research before buying one. There are many kinds of turtles and tortoises, and each has different characteristics. Some of them have very specific needs. With a pet turtle, be prepared for a long-term commitment. Many can live as long as fifty years, or even longer! As you can tell, caring for one of these creatures isn't as simple as one might think."
    },
    {
      id: "B",
      text:
        "When choosing your pet, consider what kind of living environment they'll need. It's better to think long-term from the beginning. Most small or baby pets will be fine in a tank or a basket, but as an adult, they might need a bigger home. Plan ahead for a larger living space for your pet. Make sure your pet's home has what they need. A tortoise, for example, can be happy in a small yard with a pond. A red-eared slider may require a tank or tub with lots of water."
    },
    {
      id: "C",
      text:
        "What animal is the best first pet? Well, turtles can indeed be a good first pet. Actually, they are quiet, easy-going, require little interaction, and can provide years of companionship. Are turtles fun pets? You may need to redefine your definition of \"fun\". Turtles are normally loners. They prefer to be admired and spoken to, but not physically handled. Turtles are usually not very social. They recognize humans as mostly providers of food, but they can be fun."
    },
    {
      id: "D",
      text:
        "Dogs and cats have been eating pet food for years, but a growing trend has items such as rice, carrots and even salmon ending up in their bowls. For years, we've been told it's safer to give our pets store-bought pet food, but a lot of people think otherwise. Folks typically have the best of intentions when they add the food from their table to pets' menus. But is it more beneficial or harmful in the long run? I feel the risk of feeding pets the food they shouldn't eat is too high."
    },
    {
      id: "E",
      text:
        "Exotic animals are definitely becoming more popular as pets these days. They are really cool to have. Some of them are very beautiful and they can be easily purchased over the Internet. But there is no such thing as an easy pet. And you'd better not take a wild animal as a pet. Chances are they won't do well in captivity. Look into adopting an animal from a local centre or society before buying one. And if you do buy, make absolutely sure it's been born in captivity."
    },
    {
      id: "F",
      text:
        "Before commercial pet food entered the market, many dogs and cats lived on the scraps left over from human's meals. Today, more and more pet owners give the food they eat themselves to their pets so they know exactly what goes into their diets. This is certainly an acceptable way to feed your pet. If you want to start feeding your pet a healthy diet of foods already in your fridge or pantry, make a gradual transition from commercial pet food."
    }
  ];

  function phrases(rows) {
    return rows.map(function (row) {
      return { en: row.en, ru: row.ru, tip: row.tip || "" };
    });
  }

  pack.units.push({
    id: "u11-pets",
    unitOrder: 11,
    title: "Unit 11 · Pets",
    examSection: "§1 · Задание 1",
    headerTitle: "Choosing and caring for pets",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/11/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2011%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть:</strong></p><ul>" +
      "<li><strong>A</strong> — turtles: research, specific needs, long commitment, not simple → №2.</li>" +
      "<li><strong>B</strong> — living environment, long-term, bigger home → №3.</li>" +
      "<li><strong>C</strong> — turtles can be a good first pet → №6.</li>" +
      "<li><strong>D</strong> — risk of feeding pets wrong human food → №1.</li>" +
      "<li><strong>E</strong> — don't take a wild animal as a pet → №7.</li>" +
      "<li><strong>F</strong> — human food can be acceptable with gradual transition → №5.</li>" +
      "<li><strong>№4</strong> лишнее: exotic animals require more time and attention — близко к E, но главный смысл E про wild animals / captivity.</li>" +
      "</ul>",
    statements: [
      { num: 1, text: "People had better not give what they eat to pets." },
      { num: 2, text: "Some pet care can be harder than expected." },
      { num: 3, text: "Thinking ahead about your pet's home is useful." },
      { num: 4, text: "Exotic animals require more time and attention." },
      { num: 5, text: "There is nothing bad about feeding pets what we eat." },
      { num: 6, text: "It can be nice to have this animal as one's first pet." },
      { num: 7, text: "Keeping a wild animal as a pet is not a good idea." }
    ],
    extraStatementNum: 4,
    key: [2, 3, 6, 1, 7, 5],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: phrases([
      { en: "conduct research before buying one", ru: "изучить вопрос перед покупкой", tip: "A · №2" },
      { en: "specific needs", ru: "особые потребности", tip: "A · №2" },
      { en: "long-term commitment", ru: "долгосрочное обязательство", tip: "A · №2" },
      { en: "living environment", ru: "среда обитания", tip: "B · №3" },
      { en: "think long-term", ru: "думать наперёд", tip: "B · №3" },
      { en: "larger living space", ru: "большее пространство для жизни", tip: "B · №3" },
      { en: "a good first pet", ru: "хороший первый питомец", tip: "C · №6" },
      { en: "quiet, easy-going", ru: "тихие и спокойные", tip: "C · №6" },
      { en: "store-bought pet food", ru: "покупной корм для питомцев", tip: "D" },
      { en: "risk of feeding pets", ru: "риск кормить питомцев", tip: "D · №1" },
      { en: "not take a wild animal as a pet", ru: "не брать дикое животное как питомца", tip: "E · №7" },
      { en: "gradual transition from commercial pet food", ru: "постепенный переход с промышленного корма", tip: "F · №5" }
    ]),
    tapPhrases: phrases([
      { en: "beautiful and fascinating creatures", ru: "красивые и удивительные создания" },
      { en: "not as simple as one might think", ru: "не так просто, как может казаться" },
      { en: "adult", ru: "взрослое животное" },
      { en: "red-eared slider", ru: "красноухая черепаха" },
      { en: "require little interaction", ru: "требуют мало взаимодействия" },
      { en: "years of companionship", ru: "годы companionship / компании" },
      { en: "best of intentions", ru: "лучшие намерения" },
      { en: "beneficial or harmful", ru: "полезно или вредно" },
      { en: "in captivity", ru: "в неволе" },
      { en: "commercial pet food", ru: "промышленный корм" }
    ]),
    shadowSpeakers: speakers.map(function (sp) {
      return {
        id: sp.id,
        label: "Speaker " + sp.id,
        fullText: sp.text,
        phrases: phrases([]),
        chunks: [
          { text: sp.text, showText: true }
        ]
      };
    }),
    huntLabs: [
      {
        speaker: "A",
        keyNum: 2,
        trapNums: [6],
        keyLineRu: "Turtle care is not as simple as it seems.",
        evidencePromptRu: "<strong>A.</strong> Найдите specific needs / long-term / not simple.",
        segments: [
          { kind: "hit", sol: "e", text: "very specific needs", explainRu: "Care can be harder than expected → №2." },
          { kind: "hit", sol: "e", text: "isn't as simple as one might think", explainRu: "Прямой ключ к №2." }
        ]
      },
      {
        speaker: "B",
        keyNum: 3,
        trapNums: [],
        keyLineRu: "Plan ahead for your pet's home.",
        evidencePromptRu: "<strong>B.</strong> Найдите think long-term / larger living space.",
        segments: [
          { kind: "hit", sol: "e", text: "It's better to think long-term from the beginning" },
          { kind: "hit", sol: "e", text: "Plan ahead for a larger living space for your pet" }
        ]
      },
      {
        speaker: "C",
        keyNum: 6,
        trapNums: [2],
        keyLineRu: "Turtles can be a good first pet.",
        evidencePromptRu: "<strong>C.</strong> Найдите good first pet.",
        segments: [
          { kind: "hit", sol: "e", text: "turtles can indeed be a good first pet" },
          { kind: "hit", sol: "e", text: "provide years of companionship" }
        ]
      },
      {
        speaker: "D",
        keyNum: 1,
        trapNums: [5],
        keyLineRu: "Risk of feeding pets food they shouldn't eat is too high.",
        evidencePromptRu: "<strong>D.</strong> Найдите risk / shouldn't eat.",
        segments: [
          { kind: "hit", sol: "e", text: "the risk of feeding pets the food they shouldn't eat is too high" }
        ]
      },
      {
        speaker: "E",
        keyNum: 7,
        trapNums: [4],
        keyLineRu: "Don't take a wild animal as a pet.",
        evidencePromptRu: "<strong>E.</strong> Найдите wild animal / captivity.",
        segments: [
          { kind: "hit", sol: "e", text: "you'd better not take a wild animal as a pet" },
          { kind: "hit", sol: "e", text: "Chances are they won't do well in captivity" }
        ]
      },
      {
        speaker: "F",
        keyNum: 5,
        trapNums: [1],
        keyLineRu: "Feeding human food can be acceptable with a gradual transition.",
        evidencePromptRu: "<strong>F.</strong> Найдите acceptable way / gradual transition.",
        segments: [
          { kind: "hit", sol: "e", text: "This is certainly an acceptable way to feed your pet" },
          { kind: "hit", sol: "e", text: "make a gradual transition from commercial pet food" }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
