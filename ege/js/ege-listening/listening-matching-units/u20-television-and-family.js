/**
 * ЕГЭ Listening Matching · Unit 20 · Television and family.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  var speakers = [
    {
      id: "A",
      text:
        "Television has always been a very good source of information for my family and me. Of course, I've heard about lots of people who have ended up wearing glasses and developing eye problems. But as far as I'm concerned, I don't think watching your favourite movies and shows for a short duration at an acceptable distance from the television screen is bad for anyone. TV is also a potential source of valuable information. And it's fun!"
    },
    {
      id: "B",
      text:
        "I think it's hard to control children watching TV as they tend to watch cartoons continuously on cartoon channels. It's very important that we restrict the watching time for children rather than adults. Children should be encouraged to read books and play indoor and outdoor games in their free time. For the older ones it's better to tell them about bad consequences of watching TV too much and the importance of studying and socializing with friends."
    },
    {
      id: "C",
      text:
        "I feel television is a safer source of information when we compare it with the Internet. This is because of the harmful radiation computers give out as compared to television. Although computers with online applications are more popular than television for educational and entertainment purposes, I would prefer watching movies, news and other shows on my TV for a longer time than on a computer."
    },
    {
      id: "D",
      text:
        "I believe there is a problem in today's world with heavy television use. I think people spend too much time sitting on a couch instead of being physically active. So television is a great contributor to the obesity problem worldwide. Heavy television use isn't helpful also because people are killing time when they could be reading a book or mingling with friends. That's why the only time I watch TV during the day is right before bed."
    },
    {
      id: "E",
      text:
        "Television is only a problem if you make it one. Television plays an important role in both my life and the life of my family. It's not only a form of entertainment, but something that is very helpful in staying in touch with my family. TV is a form of bonding with each other, and because we watch much television and only have one in the house, we watch it together while spending time as a family. Our TV room is a place of regular family gatherings."
    },
    {
      id: "F",
      text:
        "We often argue about TV programmes to watch as we all love different things. Whenever my dad isn't working, he mostly spends his time watching the Sunday soccer games, his passion. My grandma, of course, can't go a day without watching some form of soap operas, or novellas as we call them, my sister just loves to watch anything, and my mom, well, she is with soap operas too. I personally enjoy watching TV shows for teens."
    }
  ];

  pack.units.push({
    id: "u20-television-and-family",
    unitOrder: 20,
    title: "Unit 20 · Television and family",
    examSection: "§1 · Задание 1",
    headerTitle: "Television and family",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/20/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2020_%5Bcut_245sec%5D%20-%201.mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>TV:</strong> family viewing, limiting kids' screen time, TV vs computers, wasting time, different programme tastes.</p>",
    statements: [
      { num: 1, text: "Television tastes differ in families." },
      { num: 2, text: "Television can unite family members." },
      { num: 3, text: "Television is still better for me than computers." },
      { num: 4, text: "Parents should limit the amount of TV for kids." },
      { num: 5, text: "People waste their time watching a lot of TV." },
      { num: 6, text: "Computers will substitute television in the future." },
      { num: 7, text: "Television is more useful rather than harmful to people." }
    ],
    extraStatementNum: 6,
    // A→7, B→4, C→3, D→5, E→2, F→1; extra 6
    key: [7, 4, 3, 5, 2, 1],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "source of valuable information", ru: "источник ценной информации", tip: "A · №7" },
      { en: "restrict the watching time for children", ru: "ограничивать время просмотра для детей", tip: "B · №4" },
      { en: "I would prefer watching ... on my TV", ru: "я бы предпочел смотреть ... по телевизору", tip: "C · №3" },
      { en: "people are killing time", ru: "люди убивают время", tip: "D · №5" },
      { en: "TV is a form of bonding", ru: "телевизор помогает сближаться", tip: "E · №2" },
      { en: "we all love different things", ru: "мы все любим разное", tip: "F · №1" }
    ],
    tapPhrases: [
      { en: "acceptable distance", ru: "допустимое расстояние" },
      { en: "short duration", ru: "недолгое время" },
      { en: "cartoons continuously", ru: "мультфильмы без остановки" },
      { en: "indoor and outdoor games", ru: "игры дома и на улице" },
      { en: "harmful radiation", ru: "вредное излучение" },
      { en: "physically active", ru: "физически активный" },
      { en: "obesity problem", ru: "проблема ожирения" },
      { en: "staying in touch with my family", ru: "оставаться на связи с семьей" },
      { en: "regular family gatherings", ru: "регулярные семейные сборы" },
      { en: "Sunday soccer games", ru: "воскресные футбольные матчи" }
    ],
    shadowSpeakers: speakers.map(function (sp) {
      var phrasesMap = {
        A: [
          { en: "source of information", ru: "источник информации" },
          { en: "short duration", ru: "недолгое время" },
          { en: "acceptable distance", ru: "допустимое расстояние" },
          { en: "valuable information", ru: "ценная информация" },
          { en: "it's fun", ru: "это еще и интересно" }
        ],
        B: [
          { en: "control children", ru: "контролировать детей" },
          { en: "watch cartoons continuously", ru: "смотреть мультики без конца" },
          { en: "restrict the watching time", ru: "ограничивать время просмотра" },
          { en: "read books", ru: "читать книги" },
          { en: "play indoor and outdoor games", ru: "играть дома и на улице" }
        ],
        C: [
          { en: "safer source of information", ru: "более безопасный источник информации" },
          { en: "harmful radiation", ru: "вредное излучение" },
          { en: "online applications", ru: "онлайн-приложения" },
          { en: "more popular", ru: "более популярны" },
          { en: "watching ... on my TV", ru: "смотреть ... на телевизоре" }
        ],
        D: [
          { en: "heavy television use", ru: "чрезмерный просмотр ТВ" },
          { en: "sitting on a couch", ru: "сидеть на диване" },
          { en: "physically active", ru: "быть физически активным" },
          { en: "obesity problem", ru: "проблема ожирения" },
          { en: "killing time", ru: "убивать время" }
        ],
        E: [
          { en: "staying in touch with my family", ru: "поддерживать связь с семьей" },
          { en: "a form of bonding", ru: "форма сближения" },
          { en: "we watch it together", ru: "мы смотрим это вместе" },
          { en: "spending time as a family", ru: "проводить время как семья" },
          { en: "regular family gatherings", ru: "регулярные семейные встречи" }
        ],
        F: [
          { en: "argue about TV programmes", ru: "спорить о телепрограммах" },
          { en: "love different things", ru: "любить разные вещи" },
          { en: "Sunday soccer games", ru: "воскресные футбольные матчи" },
          { en: "soap operas", ru: "мыльные оперы" },
          { en: "TV shows for teens", ru: "подростковые шоу" }
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
        trapNums: [5],
        keyLineRu: "A: television is useful and not harmful in sensible amounts.",
        evidencePromptRu: "<strong>A.</strong> Найдите valuable information + not bad.",
        segments: [
          { kind: "hit", sol: "e", text: "I don't think ... is bad for anyone" },
          { kind: "hit", sol: "e", text: "source of valuable information" },
          {
            kind: "hit",
            sol: "d",
            text: "it's fun",
            trapNum: 5,
            explainRu: "Речь не о пустой трате времени, а о том, что TV can be helpful and enjoyable."
          }
        ]
      },
      {
        speaker: "B",
        keyNum: 4,
        trapNums: [5],
        keyLineRu: "B: children need restricted screen time.",
        evidencePromptRu: "<strong>B.</strong> Найдите restrict the watching time for children.",
        segments: [
          { kind: "hit", sol: "e", text: "restrict the watching time for children" },
          {
            kind: "hit",
            sol: "d",
            text: "bad consequences of watching TV too much",
            trapNum: 5,
            explainRu: "Heavy TV is criticized, but the main point is advice to parents to limit children's viewing."
          }
        ]
      },
      {
        speaker: "C",
        keyNum: 3,
        trapNums: [6],
        keyLineRu: "C: he still prefers television to computers.",
        evidencePromptRu: "<strong>C.</strong> Найдите prefer watching ... on my TV.",
        segments: [
          { kind: "hit", sol: "e", text: "I would prefer watching movies, news and other shows on my TV" },
          {
            kind: "hit",
            sol: "d",
            text: "computers with online applications are more popular",
            trapNum: 6,
            explainRu: "He says computers are more popular, not that they will replace TV for him."
          }
        ]
      },
      {
        speaker: "D",
        keyNum: 5,
        trapNums: [7],
        keyLineRu: "D: too much TV means people waste time and become inactive.",
        evidencePromptRu: "<strong>D.</strong> Найдите killing time.",
        segments: [
          { kind: "hit", sol: "e", text: "people are killing time" },
          { kind: "hit", sol: "e", text: "instead of being physically active" },
          {
            kind: "hit",
            sol: "d",
            text: "the only time I watch TV during the day is right before bed",
            trapNum: 7,
            explainRu: "This is his personal habit, not a claim that television is overall useful."
          }
        ]
      },
      {
        speaker: "E",
        keyNum: 2,
        trapNums: [7],
        keyLineRu: "E: television helps family members bond and gather together.",
        evidencePromptRu: "<strong>E.</strong> Найдите bonding / watch it together.",
        segments: [
          { kind: "hit", sol: "e", text: "TV is a form of bonding with each other" },
          { kind: "hit", sol: "e", text: "we watch it together while spending time as a family" },
          {
            kind: "hit",
            sol: "d",
            text: "Television plays an important role",
            trapNum: 7,
            explainRu: "Important role sounds like general usefulness, but the key is family unity."
          }
        ]
      },
      {
        speaker: "F",
        keyNum: 1,
        trapNums: [2],
        keyLineRu: "F: family members like different TV content.",
        evidencePromptRu: "<strong>F.</strong> Найдите we all love different things.",
        segments: [
          { kind: "hit", sol: "e", text: "we all love different things" },
          {
            kind: "hit",
            sol: "d",
            text: "We often argue about TV programmes to watch",
            trapNum: 2,
            explainRu: "TV does not unite them here; it shows how different their tastes are."
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
