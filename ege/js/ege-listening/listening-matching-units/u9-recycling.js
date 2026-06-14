/**
 * ЕГЭ Listening Matching · Unit 9 · Recycling (задание 1).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u9-recycling",
    unitOrder: 9,
    title: "Unit 9 · Recycling",
    examSection: "§1 · Задание 1",
    headerTitle: "Recycling",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/9/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%209%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть:</strong></p>" +
      "<ul>" +
      "<li><strong>A</strong> — environmentally yes, financially no → good for planet, but expensive → №4.</li>" +
      "<li><strong>B</strong> — plastic is not worth recycling; buy less plastic / alternatives → №2.</li>" +
      "<li><strong>C</strong> — cities must invest money, so not many programmes → №5.</li>" +
      "<li><strong>D</strong> — remember the logo: Reduce, Reuse, then Recycle → №1.</li>" +
      "<li><strong>E</strong> — separate bin + sort right away = easy personal changes → №7.</li>" +
      "<li><strong>F</strong> — recycling carpool / bottles and cans for a local cause → community good → №6.</li>" +
      "<li><strong>№3</strong> лишнее: никто не говорит, что recycling is a must for every responsible person.</li>" +
      "</ul>",
    statements: [
      { num: 1, text: "It is much better to consume less and use things again." },
      { num: 2, text: "It's better to stop using some materials than recycle them." },
      { num: 3, text: "Recycling is a must for every responsible person." },
      { num: 4, text: "Recycling is good for the planet but it can be expensive." },
      { num: 5, text: "Recycling programs are unpopular because they cost a lot." },
      { num: 6, text: "Recycling activities can do good to the community." },
      { num: 7, text: "With a few changes it is easy to do good for the environment." }
    ],
    extraStatementNum: 3,
    /** A→4, B→2, C→5, D→1, E→7, F→6; лишнее — 3 */
    key: [4, 2, 5, 1, 7, 6],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "worth it for the environment", ru: "стоит того для окружающей среды", tip: "A · №4" },
      { en: "less stuff in landfills", ru: "меньше мусора на свалках", tip: "A · №4" },
      { en: "financially, no", ru: "с финансовой точки зрения — нет", tip: "A · №4" },
      { en: "plastic — not so much", ru: "пластик — не особо", tip: "B · №2" },
      { en: "buy products with less plastic", ru: "покупать товары с меньшим количеством пластика", tip: "B · №2" },
      { en: "have to invest money into recycling", ru: "вынуждены вкладывать деньги в переработку", tip: "C · №5" },
      { en: "not very many programs available", ru: "доступно не так много программ", tip: "C · №5" },
      { en: "Reduce, Reuse, then Recycle", ru: "сокращай потребление, используй повторно, потом перерабатывай", tip: "D · №1" },
      { en: "separate bin for recyclables", ru: "отдельный контейнер для вторсырья", tip: "E · №7" },
      { en: "sort it right away", ru: "сортировать сразу", tip: "E · №7" },
      { en: "community recycling carpool", ru: "общественная поездка/система для переработки", tip: "F · №6" },
      { en: "for a local cause", ru: "на местное доброе дело", tip: "F · №6" }
    ],
    tapPhrases: [
      { en: "not unless you really want it", ru: "нет, если вы сами этого не хотите" },
      { en: "new materials have to be sourced", ru: "нужно добывать новые материалы" },
      { en: "recyclable materials", ru: "перерабатываемые материалы" },
      { en: "raw forms", ru: "сырьевые формы" },
      { en: "domestic recycling capacity", ru: "внутренние мощности переработки" },
      { en: "trash service stopped accepting it", ru: "служба вывоза мусора перестала это принимать" },
      { en: "recycling plants close to them", ru: "заводы переработки рядом с ними" },
      { en: "clog up the sorting machines", ru: "забивают сортировочные машины" },
      { en: "a waste of time and effort", ru: "пустая трата времени и сил" },
      { en: "pick through the dirty trash", ru: "копаться в грязном мусоре" },
      { en: "deposit value", ru: "залоговая стоимость" },
      { en: "local roadside flower beds", ru: "местные клумбы вдоль дороги" }
    ],
    shadowSpeakers: [
      {
        id: "A",
        label: "Speaker A",
        fullText:
          "Recycling — is it worth it to you? Not unless you really want it. Is it worth it for the environment? Yes — less stuff in landfills, more stuff reused, and fewer new materials have to be sourced. Is it worth it energy-wise? Not really. You save very little energy converting recyclable materials back into their raw forms and creating new products. Some may even be quite polluting with the chemicals used, like in paper recycling. So, is it worth recycling? Environmentally, yes. Financially, no.",
        phrases: [
          { en: "worth it for the environment", ru: "стоит того для окружающей среды", tip: "№4" },
          { en: "less stuff in landfills", ru: "меньше мусора на свалках", tip: "№4" },
          { en: "more stuff reused", ru: "больше вещей используется повторно" },
          { en: "new materials have to be sourced", ru: "новые материалы приходится добывать" },
          { en: "energy-wise", ru: "с точки зрения энергии" },
          { en: "save very little energy", ru: "экономить очень мало энергии" },
          { en: "raw forms", ru: "сырьевые формы" },
          { en: "quite polluting", ru: "довольно загрязняющий" },
          { en: "chemicals used", ru: "используемые химикаты" },
          { en: "Environmentally, yes. Financially, no", ru: "для экологии — да; финансово — нет", tip: "№4" }
        ],
        chunks: [
          { text: "Recycling — is it worth it to you? Not unless you really want it.", showText: true },
          { text: "Is it worth it for the environment? Yes — less stuff in landfills, more stuff reused, and fewer new materials have to be sourced.", showText: true },
          { text: "Is it worth it energy-wise? Not really. You save very little energy converting recyclable materials back into their raw forms and creating new products.", showText: true },
          { text: "Some may even be quite polluting with the chemicals used, like in paper recycling. So, is it worth recycling? Environmentally, yes. Financially, no.", showText: false }
        ]
      },
      {
        id: "B",
        label: "Speaker B",
        fullText:
          "Cardboard, glass and metal are definitely worth recycling. Plastic — not so much. Most places no longer have anywhere to send plastic to recycle it. There is some domestic recycling capacity for it, but not nearly as much as the supply. I personally just throw away plastic, since my trash service stopped accepting it for recycling. But I also try to buy products with less plastic as much as I can. Hopefully, food manufacturers will soon get more on board with alternatives to plastic.",
        phrases: [
          { en: "definitely worth recycling", ru: "точно стоит перерабатывать" },
          { en: "Plastic — not so much", ru: "пластик — не особо", tip: "№2" },
          { en: "no longer have anywhere to send plastic", ru: "больше некуда отправлять пластик" },
          { en: "domestic recycling capacity", ru: "внутренние мощности переработки" },
          { en: "not nearly as much as the supply", ru: "намного меньше объёма поставок" },
          { en: "trash service stopped accepting it", ru: "служба вывоза перестала принимать это" },
          { en: "buy products with less plastic", ru: "покупать товары с меньшим количеством пластика", tip: "№2" },
          { en: "alternatives to plastic", ru: "альтернативы пластику", tip: "№2" }
        ],
        chunks: [
          { text: "Cardboard, glass and metal are definitely worth recycling. Plastic — not so much.", showText: true },
          { text: "Most places no longer have anywhere to send plastic to recycle it. There is some domestic recycling capacity for it, but not nearly as much as the supply.", showText: true },
          { text: "I personally just throw away plastic, since my trash service stopped accepting it for recycling.", showText: true },
          { text: "But I also try to buy products with less plastic as much as I can. Hopefully, food manufacturers will soon get more on board with alternatives to plastic.", showText: false }
        ]
      },
      {
        id: "C",
        label: "Speaker C",
        fullText:
          "There is a question whether recycling does good for cities. It depends. Some cities have to ship out the recycling to be processed and changed into a workable material, since they don't have recycling plants close to them. Some things just don't make any money because no one wants them — like plastics. Metals are probably the only real things of any worth. So cities have to invest money into recycling, and that is why there are not very many programs available.",
        phrases: [
          { en: "whether recycling does good for cities", ru: "приносит ли переработка пользу городам" },
          { en: "It depends", ru: "это зависит от ситуации" },
          { en: "ship out the recycling", ru: "вывозить вторсырьё" },
          { en: "recycling plants close to them", ru: "заводы переработки рядом" },
          { en: "don't make any money", ru: "не приносят денег" },
          { en: "no one wants them", ru: "никто их не хочет" },
          { en: "invest money into recycling", ru: "вкладывать деньги в переработку", tip: "№5" },
          { en: "not very many programs available", ru: "не так много доступных программ", tip: "№5" }
        ],
        chunks: [
          { text: "There is a question whether recycling does good for cities. It depends.", showText: true },
          { text: "Some cities have to ship out the recycling to be processed and changed into a workable material, since they don't have recycling plants close to them.", showText: true },
          { text: "Some things just don't make any money because no one wants them — like plastics. Metals are probably the only real things of any worth.", showText: true },
          { text: "So cities have to invest money into recycling, and that is why there are not very many programs available.", showText: false }
        ]
      },
      {
        id: "D",
        label: "Speaker D",
        fullText:
          "For the most part, modern-day recycling is done so you can feel good about taking an action. Single-use plastic bags, like the ones at the grocery, weren't recyclable before. In fact, they tend to clog up the sorting machines. Many of the plastic bags even say \"don't recycle, return to store\" on them. Glass is a hazard to pick up because it is very likely to break. And once it's broken, it's pretty much trash. We need to remember the first two words of the logo: Reduce, Reuse, then Recycle.",
        phrases: [
          { en: "feel good about taking an action", ru: "чувствовать, что сделал действие" },
          { en: "single-use plastic bags", ru: "одноразовые пластиковые пакеты" },
          { en: "weren't recyclable before", ru: "раньше не подлежали переработке" },
          { en: "clog up the sorting machines", ru: "забивают сортировочные машины" },
          { en: "return to store", ru: "вернуть в магазин" },
          { en: "a hazard to pick up", ru: "опасно собирать" },
          { en: "pretty much trash", ru: "по сути мусор" },
          { en: "Reduce, Reuse, then Recycle", ru: "сокращай, используй повторно, затем перерабатывай", tip: "№1" }
        ],
        chunks: [
          { text: "For the most part, modern-day recycling is done so you can feel good about taking an action.", showText: true },
          { text: "Single-use plastic bags, like the ones at the grocery, weren't recyclable before. In fact, they tend to clog up the sorting machines.", showText: true },
          { text: "Many of the plastic bags even say \"don't recycle, return to store\" on them.", showText: true },
          { text: "Glass is a hazard to pick up because it is very likely to break. And once it's broken, it's pretty much trash. We need to remember the first two words of the logo: Reduce, Reuse, then Recycle.", showText: false }
        ]
      },
      {
        id: "E",
        label: "Speaker E",
        fullText:
          "Many think recycling is a waste of time and effort, but to me it's important to sort and recycle whatever is possible. It's just a matter of what you deem important in your world. Have a separate bin for recyclables next to your trash can, and you won't need to pick through the dirty trash. It's much easier if you sort it right away, instead of throwing everything away and sorting it afterward. I want to be better and make our world a cleaner place. It's totally my decision.",
        phrases: [
          { en: "a waste of time and effort", ru: "пустая трата времени и сил" },
          { en: "sort and recycle whatever is possible", ru: "сортировать и перерабатывать всё возможное" },
          { en: "what you deem important", ru: "что вы считаете важным" },
          { en: "separate bin for recyclables", ru: "отдельный контейнер для вторсырья", tip: "№7" },
          { en: "next to your trash can", ru: "рядом с мусорным ведром" },
          { en: "pick through the dirty trash", ru: "копаться в грязном мусоре" },
          { en: "sort it right away", ru: "сортировать сразу", tip: "№7" },
          { en: "make our world a cleaner place", ru: "сделать мир чище", tip: "№7" }
        ],
        chunks: [
          { text: "Many think recycling is a waste of time and effort, but to me it's important to sort and recycle whatever is possible.", showText: true },
          { text: "It's just a matter of what you deem important in your world.", showText: true },
          { text: "Have a separate bin for recyclables next to your trash can, and you won't need to pick through the dirty trash.", showText: true },
          { text: "It's much easier if you sort it right away, instead of throwing everything away and sorting it afterward. I want to be better and make our world a cleaner place. It's totally my decision.", showText: false }
        ]
      },
      {
        id: "F",
        label: "Speaker F",
        fullText:
          "If you care about not having all your trash just going into a big hole in the ground to be someone else's problem, maybe you can get a community recycling carpool going, or collect bottles and cans with a deposit value for a local cause. My local transfer station has a shed set up by a landscape artist who lives in town. He plants and maintains local roadside flower beds through volunteer efforts, and by using the money he collects from deposits on bottles and cans people leave in the shed.",
        phrases: [
          { en: "a big hole in the ground", ru: "большая яма в земле" },
          { en: "someone else's problem", ru: "чужая проблема" },
          { en: "community recycling carpool", ru: "общественная схема/поездка для переработки", tip: "№6" },
          { en: "bottles and cans with a deposit value", ru: "бутылки и банки с залоговой стоимостью" },
          { en: "for a local cause", ru: "на местное доброе дело", tip: "№6" },
          { en: "local transfer station", ru: "местная станция приёма/перегрузки мусора" },
          { en: "volunteer efforts", ru: "волонтёрские усилия" },
          { en: "money he collects from deposits", ru: "деньги, которые он получает с залогов" }
        ],
        chunks: [
          { text: "If you care about not having all your trash just going into a big hole in the ground to be someone else's problem, maybe you can get a community recycling carpool going, or collect bottles and cans with a deposit value for a local cause.", showText: true },
          { text: "My local transfer station has a shed set up by a landscape artist who lives in town.", showText: true },
          { text: "He plants and maintains local roadside flower beds through volunteer efforts, and by using the money he collects from deposits on bottles and cans people leave in the shed.", showText: false }
        ]
      }
    ],
    huntLabs: [
      {
        speaker: "A",
        keyNum: 4,
        trapNums: [3],
        keyLineRu: "Environmentally yes, financially no → №4.",
        evidencePromptRu: "<strong>Speaker A.</strong> Зелёным — польза для планеты + финансовый минус.",
        promptRu: "<strong>A.</strong> Найдите environmental yes / financially no.",
        segments: [
          { kind: "hit", sol: "e", text: "Is it worth it for the environment? Yes", explainRu: "Польза для планеты." },
          { kind: "hit", sol: "e", text: "Financially, no", explainRu: "Но дорого/невыгодно → №4." }
        ]
      },
      {
        speaker: "B",
        keyNum: 2,
        trapNums: [4],
        keyLineRu: "Plastic is not worth recycling; buy less plastic → №2.",
        evidencePromptRu: "<strong>Speaker B.</strong> Зелёным — отказ/снижение plastic.",
        promptRu: "<strong>B.</strong> Найдите, почему лучше использовать меньше plastic.",
        segments: [
          { kind: "hit", sol: "e", text: "Plastic — not so much", explainRu: "Пластик не так стоит перерабатывать." },
          { kind: "hit", sol: "e", text: "buy products with less plastic", explainRu: "Лучше уменьшать потребление материала → №2." }
        ]
      },
      {
        speaker: "C",
        keyNum: 5,
        trapNums: [4],
        keyLineRu: "Cities must invest money, so few programmes → №5.",
        evidencePromptRu: "<strong>Speaker C.</strong> Зелёным — cost for cities.",
        promptRu: "<strong>C.</strong> Найдите связь cost → few programs.",
        segments: [
          { kind: "hit", sol: "e", text: "cities have to invest money into recycling", explainRu: "Городам нужны деньги." },
          { kind: "hit", sol: "e", text: "not very many programs available", explainRu: "Из-за стоимости программ мало → №5." }
        ]
      },
      {
        speaker: "D",
        keyNum: 1,
        trapNums: [3],
        keyLineRu: "Reduce, Reuse, then Recycle → №1.",
        evidencePromptRu: "<strong>Speaker D.</strong> Зелёным — Reduce / Reuse before recycle.",
        promptRu: "<strong>D.</strong> Найдите слоган.",
        segments: [
          { kind: "hit", sol: "e", text: "Reduce, Reuse, then Recycle", explainRu: "Сначала меньше потреблять и использовать повторно → №1." }
        ]
      },
      {
        speaker: "E",
        keyNum: 7,
        trapNums: [3],
        keyLineRu: "Separate bin + sort right away → easy changes → №7.",
        evidencePromptRu: "<strong>Speaker E.</strong> Зелёным — простые личные действия.",
        promptRu: "<strong>E.</strong> Найдите easy changes.",
        segments: [
          { kind: "hit", sol: "e", text: "Have a separate bin for recyclables", explainRu: "Простое изменение." },
          { kind: "hit", sol: "e", text: "It's much easier if you sort it right away", explainRu: "Легко делать добро для окружающей среды → №7." }
        ]
      },
      {
        speaker: "F",
        keyNum: 6,
        trapNums: [3],
        keyLineRu: "Community recycling / local cause → №6.",
        evidencePromptRu: "<strong>Speaker F.</strong> Зелёным — community benefit.",
        promptRu: "<strong>F.</strong> Найдите community/local cause.",
        segments: [
          { kind: "hit", sol: "e", text: "community recycling carpool", explainRu: "Общественная recycling-активность." },
          { kind: "hit", sol: "e", text: "for a local cause", explainRu: "Польза местному делу → №6." }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
