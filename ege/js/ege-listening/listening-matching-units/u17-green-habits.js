/**
 * ЕГЭ Listening Matching · Unit 17 · Green habits and pollution.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  var speakers = [
    {
      id: "A",
      text:
        "I think people should pay more attention to reusing materials. It's the best way to save our planet's resources. In fact, we don't have any other option if we plan to leave the planet for generations to come. For example, it's more environment-friendly to use linen napkins that can be washed and reused than to use paper products. It's also important to stop using dangerous chemicals that can spoil our soil and drinking water."
    },
    {
      id: "B",
      text:
        "My name is Stephen. I'm very worried about high urban pollution. This problem is actually global. Anyone who went to Beijing to watch the Olympic games can confirm it as Beijing was covered day and night by strong smog. The problem is that this smog in big industrial megapolises is not set to decrease, but instead it will increase over the coming years: this will bring about pollution all over the world and will cause global warming!"
    },
    {
      id: "C",
      text:
        "I find the effect of water pollution on the ecological balance and human life really dramatic. Though there are many other things that are polluting water, oil is still the major contributor. There may be cases of large oil spills during transportation, but the fact is that small motor oil spills on land are far more dangerous. So it's important that we take measures in time to save our water environment."
    },
    {
      id: "D",
      text:
        "My name is Barbara. I've only been “cleaning green” for over a year now. It was a difficult start. My daughter made me stop using toxic chemical products for cleaning by regularly telling me how I was poisoning our health, polluting the air in the house, damaging the planet and exposing my grandson to all of the above. Now I like it and I will never go back to chemical cleaners, not any more."
    },
    {
      id: "E",
      text:
        "I support the idea of using only natural products for cleaning purposes. Of course it's not easy. Changing from old habits to new healthy, non-toxic ones takes time and practice. It's like any bad habit, once it's been done we feel really good about ourselves. But we're not doing this for some unseen stranger. We're doing it for ourselves. Let's leave our planet in the best possible shape we can by all working and following new rules together."
    },
    {
      id: "F",
      text:
        "I think everyone can do their part to protect our planet. It's easier than you may think - do not litter and do not dispose your waste in the way that will harm people or animals. Always use the proper method for it. And it's really more useful to put out different bins for different waste materials like glass, plastic bottles, paper and tins. The bins are usually of different colours to be easily identified."
    }
  ];

  pack.units.push({
    id: "u17-green-habits",
    unitOrder: 17,
    title: "Unit 17 · Green habits and pollution",
    examSection: "§1 · Задание 1",
    headerTitle: "Green habits and pollution",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/17/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2017%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Green habits:</strong> waste and recycling, chemical cleaners, water resources, smog in big cities, changing daily habits for a safer future.</p>",
    statements: [
      {
        num: 1,
        text: "I would not return to using chemical cleaners that are bad for my family."
      },
      {
        num: 2,
        text: "I find recycling necessary to keep our planet clean."
      },
      {
        num: 3,
        text: "I would like people to care more about our planet water resources."
      },
      {
        num: 4,
        text: "I am sure our clean and safe future is worth new green habits today."
      },
      {
        num: 5,
        text: "I am concerned about the long-term effects of pollution in big cities."
      },
      {
        num: 6,
        text: "I am trying to stop people from polluting the air."
      },
      {
        num: 7,
        text: "I want people to stop and think about the way we treat waste."
      }
    ],
    extraStatementNum: 6,
    // A→7, B→5, C→3, D→1, E→4, F→2; extra 6
    key: [7, 5, 3, 1, 4, 2],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "pay more attention to reusing materials", ru: "больше внимания уделять повторному использованию материалов", tip: "A · №7" },
      { en: "dangerous chemicals", ru: "опасные химикаты", tip: "D · №1" },
      { en: "high urban pollution", ru: "сильное городское загрязнение", tip: "B · №5" },
      { en: "strong smog", ru: "сильный смог", tip: "B · №5" },
      { en: "water pollution", ru: "загрязнение воды", tip: "C · №3" },
      { en: "save our water environment", ru: "сохранить нашу водную среду", tip: "C · №3" },
      { en: "I will never go back to chemical cleaners", ru: "я никогда не вернусь к химическим чистящим средствам", tip: "D · №1" },
      { en: "new healthy, non-toxic ones", ru: "новые здоровые, нетоксичные привычки", tip: "E · №4" },
      { en: "leave our planet in the best possible shape", ru: "оставить нашу планету в наилучшем состоянии", tip: "E · №4" },
      { en: "different bins for different waste materials", ru: "разные контейнеры для разных видов отходов", tip: "F · №2" },
      { en: "glass, plastic bottles, paper and tins", ru: "стекло, пластиковые бутылки, бумага и жестяные банки", tip: "F · №2" }
    ],
    tapPhrases: [
      { en: "save our planet's resources", ru: "сберечь ресурсы планеты" },
      { en: "leave the planet for generations to come", ru: "сохранить планету для будущих поколений" },
      { en: "spoil our soil and drinking water", ru: "портить почву и питьевую воду" },
      { en: "industrial megapolises", ru: "индустриальные мегаполисы" },
      { en: "cause global warming", ru: "вызвать глобальное потепление" },
      { en: "ecological balance", ru: "экологический баланс" },
      { en: "major contributor", ru: "главный фактор" },
      { en: "cleaning green", ru: "убираться экологично" },
      { en: "toxic chemical products", ru: "токсичные химические средства" },
      { en: "non-toxic", ru: "нетоксичный" },
      { en: "do not litter", ru: "не мусорить" },
      { en: "proper method", ru: "правильный способ" }
    ],
    shadowSpeakers: speakers.map(function (sp) {
      var phrasesMap = {
        A: [
          { en: "reusing materials", ru: "повторное использование материалов" },
          { en: "save our planet's resources", ru: "сберечь ресурсы планеты" },
          { en: "linen napkins", ru: "льняные салфетки" },
          { en: "washed and reused", ru: "стирать и использовать снова" },
          { en: "paper products", ru: "бумажные изделия" },
          { en: "dangerous chemicals", ru: "опасные химикаты" }
        ],
        B: [
          { en: "high urban pollution", ru: "высокий уровень городского загрязнения" },
          { en: "strong smog", ru: "сильный смог" },
          { en: "big industrial megapolises", ru: "большие индустриальные мегаполисы" },
          { en: "increase over the coming years", ru: "увеличится в ближайшие годы" },
          { en: "pollution all over the world", ru: "загрязнение по всему миру" },
          { en: "global warming", ru: "глобальное потепление" }
        ],
        C: [
          { en: "water pollution", ru: "загрязнение воды" },
          { en: "ecological balance", ru: "экологический баланс" },
          { en: "human life", ru: "человеческая жизнь" },
          { en: "oil spills", ru: "разливы нефти" },
          { en: "far more dangerous", ru: "гораздо опаснее" },
          { en: "save our water environment", ru: "спасти водную среду" }
        ],
        D: [
          { en: "cleaning green", ru: "экологичная уборка" },
          { en: "toxic chemical products", ru: "токсичные химические средства" },
          { en: "poisoning our health", ru: "отравляла наше здоровье" },
          { en: "polluting the air in the house", ru: "загрязняла воздух в доме" },
          { en: "exposing my grandson", ru: "подвергала риску внука" },
          { en: "never go back", ru: "никогда не вернусь" }
        ],
        E: [
          { en: "natural products", ru: "натуральные средства" },
          { en: "cleaning purposes", ru: "для уборки" },
          { en: "new healthy, non-toxic ones", ru: "новые здоровые, нетоксичные привычки" },
          { en: "takes time and practice", ru: "требует времени и практики" },
          { en: "feel really good about ourselves", ru: "чувствуем себя очень хорошо" },
          { en: "following new rules together", ru: "вместе следовать новым правилам" }
        ],
        F: [
          { en: "do their part", ru: "внести свой вклад" },
          { en: "do not litter", ru: "не мусорить" },
          { en: "dispose your waste", ru: "выбрасывать отходы" },
          { en: "proper method", ru: "правильный способ" },
          { en: "different bins", ru: "разные контейнеры" },
          { en: "different colours", ru: "разные цвета" }
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
        keyNum: 7,
        trapNums: [1, 2],
        keyLineRu: "A: people should rethink waste and reuse materials instead of disposable products.",
        evidencePromptRu: "<strong>A.</strong> Найдите reuse/reusing + paper products.",
        segments: [
          { kind: "glue", text: "I think people should " },
          { kind: "hit", sol: "e", text: "pay more attention to reusing materials" },
          { kind: "glue", text: ". ... it's more environment-friendly to use linen napkins that can be " },
          { kind: "hit", sol: "e", text: "washed and reused than to use paper products" },
          { kind: "glue", text: ". It's also important to stop using " },
          {
            kind: "hit",
            sol: "d",
            text: "dangerous chemicals",
            trapNum: 1,
            explainRu: "Химикаты упомянуты, но главный смысл спикера — переосмыслить отношение к отходам и одноразовым вещам."
          }
        ]
      },
      {
        speaker: "B",
        keyNum: 5,
        trapNums: [6],
        keyLineRu: "B: he worries about future growth of smog and pollution in large cities.",
        evidencePromptRu: "<strong>B.</strong> Найдите high urban pollution + over the coming years.",
        segments: [
          { kind: "glue", text: "My name is Stephen. I'm very worried about " },
          { kind: "hit", sol: "e", text: "high urban pollution" },
          { kind: "glue", text: ". ... The problem is that this smog in big industrial megapolises is not set to decrease, but instead " },
          { kind: "hit", sol: "e", text: "it will increase over the coming years" },
          { kind: "glue", text: ": this will bring about pollution all over the world ..." },
          {
            kind: "hit",
            sol: "d",
            text: "smog",
            trapNum: 6,
            explainRu: "Он не говорит, что сам пытается остановить загрязнение воздуха; он выражает тревогу о долгосрочных последствиях."
          }
        ]
      },
      {
        speaker: "C",
        keyNum: 3,
        trapNums: [5],
        keyLineRu: "C: she wants timely action to protect water resources.",
        evidencePromptRu: "<strong>C.</strong> Найдите water pollution + save our water environment.",
        segments: [
          { kind: "glue", text: "I find the effect of " },
          { kind: "hit", sol: "e", text: "water pollution" },
          { kind: "glue", text: " on the ecological balance and human life really dramatic. ... So it's important that we take measures in time to " },
          { kind: "hit", sol: "e", text: "save our water environment" },
          { kind: "glue", text: "." },
          {
            kind: "hit",
            sol: "d",
            text: "really dramatic",
            trapNum: 5,
            explainRu: "Есть тревога, но фокус не на больших городах, а именно на водных ресурсах."
          }
        ]
      },
      {
        speaker: "D",
        keyNum: 1,
        trapNums: [6],
        keyLineRu: "D: she has given up toxic chemical cleaners and will not return to them.",
        evidencePromptRu: "<strong>D.</strong> Найдите stop using toxic chemical products + never go back.",
        segments: [
          { kind: "glue", text: "My daughter made me " },
          { kind: "hit", sol: "e", text: "stop using toxic chemical products for cleaning" },
          { kind: "glue", text: ". ... Now I like it and " },
          { kind: "hit", sol: "e", text: "I will never go back to chemical cleaners" },
          { kind: "glue", text: ", not any more." },
          {
            kind: "hit",
            sol: "d",
            text: "polluting the air in the house",
            trapNum: 6,
            explainRu: "Воздух упомянут как один из вредных эффектов, но ключевое решение спикера — навсегда отказаться от химических средств."
          }
        ]
      },
      {
        speaker: "E",
        keyNum: 4,
        trapNums: [1],
        keyLineRu: "E: new green habits are difficult, but worth it for a better future.",
        evidencePromptRu: "<strong>E.</strong> Найдите changing from old habits + best possible shape.",
        segments: [
          { kind: "glue", text: "Changing from old habits to " },
          { kind: "hit", sol: "e", text: "new healthy, non-toxic ones takes time and practice" },
          { kind: "glue", text: ". ... Let's leave our planet in the " },
          { kind: "hit", sol: "e", text: "best possible shape we can" },
          { kind: "glue", text: " by all working and following new rules together." },
          {
            kind: "hit",
            sol: "d",
            text: "using only natural products for cleaning purposes",
            trapNum: 1,
            explainRu: "Natural products are part of the speech, but the main point is broader: green habits now ради безопасного будущего."
          }
        ]
      },
      {
        speaker: "F",
        keyNum: 2,
        trapNums: [7],
        keyLineRu: "F: proper waste sorting and recycling bins are necessary.",
        evidencePromptRu: "<strong>F.</strong> Найдите different bins for different waste materials.",
        segments: [
          { kind: "glue", text: "I think everyone can do their part to protect our planet. ... " },
          { kind: "hit", sol: "e", text: "put out different bins for different waste materials" },
          { kind: "glue", text: " like " },
          { kind: "hit", sol: "e", text: "glass, plastic bottles, paper and tins" },
          { kind: "glue", text: ". The bins are usually of different colours ..." },
          {
            kind: "hit",
            sol: "d",
            text: "do not litter",
            trapNum: 7,
            explainRu: "Это общая экологическая рекомендация, но правильный ответ тут именно про сортировку и переработку отходов."
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
