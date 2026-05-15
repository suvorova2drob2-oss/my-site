/**
 * ЕГЭ Reading — Matching Headlines, юнит 15 (рыбалка: время, места, инструменты, турниры, игры).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u15-fishing",
    unitOrder: 15,
    title: "Unit 15 · Fishing",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "The best times of day to fish are one hour before and after high tide, and one hour before and after low tide. Just after sunrise and just before sunset are also great times to fish because this is when fish feed. When the temperature begins to rise is another good fishing time. The flow of water also has an effect on successful fishing. It is better to fish when the water is still or rippled than on a very windy day. Likewise, a full moon is an indication that the fishing should be good.",
        evidence: {
          support: [
            "The best times of day to fish are one hour before and after high tide, and one hour before and after low tide.",
            "Likewise, a full moon is an indication that the fishing should be good.",
            "It is better to fish when the water is still or rippled than on a very windy day.",
            "The flow of water also has an effect on successful fishing."
          ],
          distract: [
            "Just after sunrise and just before sunset are also great times to fish because this is when fish feed.",
            "When the temperature begins to rise is another good fishing time."
          ]
        }
      },
      {
        letter: "B",
        text:
          "There are many resorts to which people travel primarily for the fishing opportunities offered. Such a resort usually caters for other outdoor activities, for example, hunting, hiking or rafting, as well. Fishing seasons vary according to region and types of fish typical to the water bodies within it. It is common for a resort that caters for outdoor sportsmen to offer prime fishing excursions in season, though depending on the typical climate of the region excursions may be offered all year round.",
        evidence: {
          support: [
            "There are many resorts to which people travel primarily for the fishing opportunities offered.",
            "Such a resort usually caters for other outdoor activities, for example, hunting, hiking or rafting, as well.",
            "It is common for a resort that caters for outdoor sportsmen to offer prime fishing excursions in season,",
            "though depending on the typical climate of the region excursions may be offered all year round."
          ],
          distract: [
            "Fishing seasons vary according to region and types of fish typical to the water bodies within it."
          ]
        }
      },
      {
        letter: "C",
        text:
          "A fishing barometer is a device that measures atmospheric pressure. It operates like any other barometer, with the added benefit of displaying whether or not conditions are ideal for fishing. Use of a fishing barometer is based on the theory that barometric pressure affects fish feeding activity. It is also believed that high pressure results in fish moving to shallower water, while low pressure leads fish to deeper water. A good fisherman can take advantage of these behaviours.",
        evidence: {
          support: [
            "A fishing barometer is a device that measures atmospheric pressure.",
            "with the added benefit of displaying whether or not conditions are ideal for fishing.",
            "Use of a fishing barometer is based on the theory that barometric pressure affects fish feeding activity.",
            "high pressure results in fish moving to shallower water, while low pressure leads fish to deeper water."
          ],
          distract: [
            "It operates like any other barometer,",
            "A good fisherman can take advantage of these behaviours."
          ]
        }
      },
      {
        letter: "D",
        text:
          "The dates of fishing season depend entirely on the location. Each region has specific rules about fishing requirements. Local fish and wildlife authorities can be consulted to determine the exact dates, as well as other specific fishing regulations. As an example, Yellowstone National Park declares fishing season to be officially open between Memorial Day and the first Sunday of November. During this time period, those with proper licenses can fish the waters of the national park.",
        evidence: {
          support: [
            "The dates of fishing season depend entirely on the location.",
            "Local fish and wildlife authorities can be consulted to determine the exact dates, as well as other specific fishing regulations.",
            "Yellowstone National Park declares fishing season to be officially open between Memorial Day and the first Sunday of November.",
            "those with proper licenses can fish the waters of the national park."
          ],
          distract: [
            "Each region has specific rules about fishing requirements."
          ]
        }
      },
      {
        letter: "E",
        text:
          "Accurate calendars, tables and charts reporting the best times and dates for fishing and other activities that are dependent on the movement patterns and locations of animals are offered by BassMaster.com and PrimeTimes2.com. Most calendars that claim to report the best times to go fishing at various locations are based on Solunar theory. Solunar theory was developed in 1926 by J. A. Knight to predict the movements of animals based on some factors including the location of the moon.",
        evidence: {
          support: [
            "Accurate calendars, tables and charts reporting the best times and dates for fishing",
            "Most calendars that claim to report the best times to go fishing at various locations are based on Solunar theory.",
            "Solunar theory was developed in 1926 by J. A. Knight to predict the movements of animals based on some factors including the location of the moon."
          ],
          distract: [
            "are offered by BassMaster.com and PrimeTimes2.com.",
            "other activities that are dependent on the movement patterns and locations of animals"
          ]
        }
      },
      {
        letter: "F",
        text:
          "Fishing tournaments are organized regularly in many regions throughout the country. A boat, if needed, is typically provided for each contestant. To compete efficiently and get a prize in a fishing tournament, fishermen are usually advised to bring from three to five fishing rods, depending on how they plan to fish. Fishermen are also advised to dress in layers and wear polarized sunglasses. Entry costs for fishing tournaments vary depending on the tournament and the entry category.",
        evidence: {
          support: [
            "Fishing tournaments are organized regularly in many regions throughout the country.",
            "To compete efficiently and get a prize in a fishing tournament, fishermen are usually advised",
            "Entry costs for fishing tournaments vary depending on the tournament and the entry category.",
            "A boat, if needed, is typically provided for each contestant."
          ],
          distract: [
            "Fishermen are also advised to dress in layers and wear polarized sunglasses.",
            "bring from three to five fishing rods, depending on how they plan to fish."
          ]
        }
      },
      {
        letter: "G",
        text:
          "People can find many fishing games online; two such games are Bass Fishing Pro and Bass Fishing Challenge. They are both fun games but differ slightly in nature. Bass Fishing Pro rewards a player for the total amount of fish caught in a set time period. Advancement in the game only occurs if all of the fish are caught within a certain level. Bass Fishing Challenge is a slightly more sophisticated game. The ultimate focus of this game is to advance through achieving a high score.",
        evidence: {
          support: [
            "People can find many fishing games online; two such games are Bass Fishing Pro and Bass Fishing Challenge.",
            "Bass Fishing Pro rewards a player for the total amount of fish caught in a set time period.",
            "Advancement in the game only occurs if all of the fish are caught within a certain level.",
            "The ultimate focus of this game is to advance through achieving a high score."
          ],
          distract: [
            "They are both fun games but differ slightly in nature.",
            "Bass Fishing Challenge is a slightly more sophisticated game."
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "A dream place" },
      { num: 2, text: "Signs to consider" },
      { num: 3, text: "A popular hobby" },
      { num: 4, text: "The time allowed" },
      { num: 5, text: "A useful tool" },
      { num: 6, text: "Come and win" },
      { num: 7, text: "Virtual fishing" },
      { num: 8, text: "Fishing forecast" }
    ],

    key: { A: 2, B: 1, C: 5, D: 4, E: 8, F: 6, G: 7 },
    extraHeadlineNum: 3,

    explanationsRu: {
      A:
        "<strong>Приливы</strong>, ветер, луна, состояние воды — внешние <strong>признаки и условия</strong>, по которым судят об улове (<strong>2 — Signs to consider</strong>).",
      B:
        "Люди едут в <strong>курорты именно ради рыбалки</strong>, экскурсии «под рыбу» — это скорее <strong>идеальное место отдыха</strong>, чем про инструмент или календарь (<strong>1</strong>).",
      C:
        "<strong>Барометр для рыбалки</strong> показывает давление и «идеальность» условий — явный <strong>инструмент</strong> (<strong>5</strong>).",
      D:
        "Официальные <strong>даты сезона</strong>, правила, пример с Йеллоустоуном — про то, <strong>когда разрешено</strong> ловить (<strong>4 — The time allowed</strong>).",
      E:
        "Календари, таблицы, <strong>Solunar theory</strong> — прогнозирование лучших моментов (<strong>8 — Fishing forecast</strong>).",
      F:
        "<strong>Турниры</strong>, призы, взнос — приходи и <strong>соревнуйся за победу</strong> (<strong>6</strong>).",
      G:
        "Игры в интернете, уровни и счёт — <strong>виртуальная</strong> рыбалка (<strong>7</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся <strong>3 — A popular hobby</strong>: ни один абзац не ставит во главу угла именно «популярность рыбалки как хобби»; курорт (<strong>B</strong>) — про место и поездку, а не про статус увлечения у населения в целом.",

    quickPhrases: [
      { en: "high tide / low tide", ru: "прилив / отлив" },
      { en: "sunrise / sunset", ru: "восход / закат" },
      { en: "fish feed", ru: "рыбы кормятся, активно ловят пищу" },
      { en: "rippled", ru: "рябь на воде" },
      { en: "windy day", ru: "ветреный день" },
      {
        en: "a full moon is an indication that the fishing should be good",
        ru: "полная луна — признак, что клёв может быть удачным"
      },
      {
        en: "travel primarily for the fishing opportunities offered",
        ru: "приезжают главным образом ради возможностей порыбачить"
      },
      {
        en: "Such a resort usually caters for other outdoor activities",
        ru: "курорт обычно обслуживает и другие виды активного отдыха на природе"
      },
      {
        en: "offer prime fishing excursions in season",
        ru: "в сезон предлагают организованные выезды на лучшие места"
      },
      {
        en: "depending on the typical climate of the region excursions may be offered all year round",
        ru: "при подходящем климате экскурсии могут быть круглый год"
      },
      {
        en: "A fishing barometer is a device that measures atmospheric pressure",
        ru: "рыбацкий барометр измеряет атмосферное давление"
      },
      {
        en: "displaying whether or not conditions are ideal for fishing",
        ru: "показывает, насколько условия подходят для ловли"
      },
      {
        en: "barometric pressure affects fish feeding activity",
        ru: "барометрическое давление влияет на активность кормления рыб"
      },
      {
        en: "high pressure results in fish moving to shallower water, while low pressure leads fish to deeper water",
        ru: "высокое давление — рыбы на мели; низкое — уходят глубже"
      },
      {
        en: "The dates of fishing season depend entirely on the location",
        ru: "даты сезона полностью зависят от местности"
      },
      {
        en: "determine the exact dates, as well as other specific fishing regulations",
        ru: "уточняют точные даты и особые правила ловли"
      },
      {
        en: "those with proper licenses can fish the waters of the national park",
        ru: "при наличии разрешения можно ловить в водах национального парка"
      },
      {
        en: "Accurate calendars, tables and charts reporting the best times and dates for fishing",
        ru: "точные календари и таблицы лучших дат и часов для ловли"
      },
      {
        en: "Most calendars ... are based on Solunar theory",
        ru: "большинство таких календарей опираются на солунарную теорию"
      },
      {
        en: "predict the movements of animals based on some factors including the location of the moon",
        ru: "предсказывают перемещения животных с учётом положения луны"
      },
      {
        en: "Fishing tournaments are organized regularly in many regions throughout the country",
        ru: "рыбацкие турниры регулярно проводят во многих регионах страны"
      },
      {
        en: "A boat, if needed, is typically provided for each contestant",
        ru: "при необходимости лодку обычно выдают каждому участнику"
      },
      {
        en: "bring from three to five fishing rods, depending on how they plan to fish",
        ru: "советуют взять от трёх до пяти удилищ — по плану ловли"
      },
      {
        en: "Entry costs for fishing tournaments vary depending on the tournament and the entry category",
        ru: "стоимость участия зависит от турнира и категории заявки"
      },
      {
        en: "rewards a player for the total amount of fish caught in a set time period",
        ru: "игрок получает очки за суммарный улов за отведённое время"
      },
      {
        en: "Advancement in the game only occurs if all of the fish are caught within a certain level",
        ru: "уровень проходят, только если поймали всю рыбу на этапе"
      },
      {
        en: "Bass Fishing Challenge is a slightly more sophisticated game",
        ru: "вторая игра чуть сложнее по задумке"
      },
      {
        en: "The flow of water also has an effect on successful fishing",
        ru: "течение воды тоже влияет на успешность ловли"
      },
      {
        en: "When the temperature begins to rise is another good fishing time",
        ru: "подъём температуры — ещё один удачный момент"
      },
      {
        en: "Fishing seasons vary according to region and types of fish typical to the water bodies within it",
        ru: "сезоны различаются по региону и видам рыб в местных водоёмах"
      },
      {
        en: "officially open between Memorial Day and the first Sunday of November",
        ru: "официально открыт с Дня памяти (США) до первого воскресенья ноября"
      },
      {
        en: "dress in layers and wear polarized sunglasses",
        ru: "одеваться слоями и надевать поляризационные очки"
      }
    ],

    tapPhrases: [
      {
        en: "one hour before and after high tide, and one hour before and after low tide",
        ru: "за час до и после высокой воды и до и после отлива"
      },
      {
        en: "Likewise, a full moon is an indication that the fishing should be good.",
        ru: "полная луна — знак, что клёв может быть хорошим"
      },
      {
        en: "when the water is still or rippled than on a very windy day",
        ru: "ловить спокойнее при ряби, чем при сильном ветре"
      },
      {
        en: "travel primarily for the fishing opportunities offered",
        ru: "ездят главным образом ради предложенной рыбалки"
      },
      {
        en: "caters for outdoor sportsmen to offer prime fishing excursions",
        ru: "принимает любителей охоты и рыбалки и даёт лучшие выезды на ловлю"
      },
      {
        en: "displaying whether or not conditions are ideal for fishing",
        ru: "показывает, подходят ли сейчас условия для рыбалки"
      },
      {
        en: "high pressure results in fish moving to shallower water",
        ru: "при высоком давлении рыбы чаще уходят на мель"
      },
      {
        en: "Local fish and wildlife authorities can be consulted",
        ru: "можно обратиться к местным службам по фауне"
      },
      {
        en: "Yellowstone National Park declares fishing season to be officially open between Memorial Day and the first Sunday of November.",
        ru: "в Йеллоустоуне сезон официально открыт с конца мая до первого воскресенья ноября"
      },
      {
        en: "based on Solunar theory",
        ru: "основаны на солунарной теории"
      },
      {
        en: "predict the movements of animals based on some factors including the location of the moon",
        ru: "предсказывают перемещения животных с учётом положения луны"
      },
      {
        en: "To compete efficiently and get a prize in a fishing tournament",
        ru: "чтобы эффективно соревноваться и получить приз"
      },
      {
        en: "People can find many fishing games online",
        ru: "рыбацкие игры легко найти в интернете"
      },
      {
        en: "total amount of fish caught in a set time period",
        ru: "общее число пойманной рыбы за отведённое время"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
