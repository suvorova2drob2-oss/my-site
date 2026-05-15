/**
 * ЕГЭ Reading — Matching Headlines, юнит 4 (капибары).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u4-capybaras",
    unitOrder: 4,
    title: "Unit 4 · Capybaras",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Capybaras are the world's largest rodents. They do not look like the typical pests living in alleyways, though. Capybaras are as big as large dogs. They have webbed feet and do not have a tail. They do not have the typical wedge-shaped face of most rodents, either. These rodents look much more like larger versions of their close relatives, guinea pigs. Capybaras are about half a metre tall from foot to shoulder. They tend to weigh 27 to 79 kilograms, depending on gender. Females are usually a little larger than males.",
        evidence: {
          support: [
            "They do not have the typical wedge-shaped face of most rodents, either.",
            "These rodents look much more like larger versions of their close relatives, guinea pigs.",
            "Females are usually a little larger than males."
          ],
          distract: ["Capybaras are the world's largest rodents."]
        }
      },
      {
        letter: "B",
        text:
          "These water-loving animals need water to keep their dry skin moist. So capybaras are found only in areas with abundant water sources. Some of their moist habitats include marshes, river banks, and streams in Central and South America. Capybaras, also called water hogs, sleep along the water source in dense vegetation to hide from predators and to keep cool. Sometimes capybaras will nap in mud or shallow water, as well. Capybaras can even stay underwater for up to five minutes at a time.",
        evidence: {
          support: [
            "need water to keep their dry skin moist.",
            "So capybaras are found only in areas with abundant water sources.",
            "Capybaras can even stay underwater for up to five minutes at a time."
          ],
          distract: [
            "Some of their moist habitats include marshes, river banks, and streams in Central and South America."
          ]
        }
      },
      {
        letter: "C",
        text:
          "Capybaras usually live in groups. A typical group of capybaras contains around 10 members. During the wet season, though, a group can contain as many as 40 members joining together, all led by a dominant male. Capybaras are most active during dawn or dusk. Sometimes, though, when capybaras feel threatened, they will be nocturnal, which means they will wisely stay awake at night and sleep during the day. The dark provides them cover while they eat and socialize so that predators are less likely to attack them.",
        evidence: {
          support: [
            "all led by a dominant male.",
            "they will wisely stay awake at night and sleep during the day.",
            "The dark provides them cover while they eat and socialize so that predators are less likely to attack them."
          ],
          distract: [
            "A typical group of capybaras contains around 10 members."
          ]
        }
      },
      {
        letter: "D",
        text:
          "Capybaras are herbivores, which means that they only eat vegetation. Capybaras eat mostly water plants and grass that line water sources. Though grain, melons, and squash can also be on the menu. Eighty percent of their food consists of only five different species of grass. A typical day of eating can include 2.7 to 3.6 kilograms of fresh grass, according to the Rainforest Alliance. Therefore, it is not surprising that an Amazon tribe calls the capybara \"master of the grass\" in their native language.",
        evidence: {
          support: [
            "Capybaras are herbivores, which means that they only eat vegetation.",
            "Eighty percent of their food consists of only five different species of grass.",
            "A typical day of eating can include 2.7 to 3.6 kilograms of fresh grass, according to the Rainforest Alliance."
          ],
          distract: [
            "an Amazon tribe calls the capybara \"master of the grass\" in their native language."
          ]
        }
      },
      {
        letter: "E",
        text:
          "Capybaras are naturally threatened by jaguars, caimans, and anacondas. And their young can be taken by ocelots and harpy eagles. Their main threat, however, is humans. Capybaras are hunted extensively for their meat and their hide, which can be made into leather. In some countries, the practice of farming capybaras has sprung up, relieving some of the pressure on wild populations. As with all rainforest animals, deforestation also poses a big threat to the population of capybaras.",
        evidence: {
          support: [
            "Capybaras are naturally threatened by jaguars, caimans, and anacondas.",
            "Their main threat, however, is humans.",
            "deforestation also poses a big threat to the population of capybaras."
          ],
          distract: ["relieving some of the pressure on wild populations."]
        }
      },
      {
        letter: "F",
        text:
          "Capybaras are social creatures. Capybaras are also very vocal animals. They communicate with each other through barks, chirps, whistles, and purrs. They chatter back and forth to keep track of one another and their young. A warning bark is their first line of defence. They also use scent glands to mark their territory and communicate. As they are highly social species, it is important that a capybara should never be housed alone, on its own in an enclosure, otherwise the animal would be stressed.",
        evidence: {
          support: [
            "They communicate with each other through barks, chirps, whistles, and purrs.",
            "They also use scent glands to mark their territory and communicate.",
            "it is important that a capybara should never be housed alone, on its own in an enclosure, otherwise the animal would be stressed."
          ],
          distract: ["Capybaras are social creatures."]
        }
      },
      {
        letter: "G",
        text:
          "Because capybaras are rodents, they share some common features with such rodents, as mice, squirrels, and porcupines. The most well-known of those features are probably those ever-growing front teeth. Capybaras use their long, sharp teeth to graze on grass and water plants in their typical habitats. Like goats, cows, giraffes, and camels, capybaras chew their food from side to side rather than up and down, like humans do. This is a good way to eat tough plant materials, which are high in fibre.",
        evidence: {
          support: [
            "they share some common features with such rodents, as mice, squirrels, and porcupines.",
            "those ever-growing front teeth.",
            "Capybaras use their long, sharp teeth to graze on grass and water plants in their typical habitats."
          ],
          distract: [
            "Like goats, cows, giraffes, and camels, capybaras chew their food from side to side rather than up and down, like humans do."
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "Dangers to face" },
      { num: 2, text: "A beautiful variety" },
      { num: 3, text: "Interaction needed" },
      { num: 4, text: "Still not so different" },
      { num: 5, text: "Essential for life" },
      { num: 6, text: "A healthy diet" },
      { num: 7, text: "Clever team habits" },
      { num: 8, text: "An unusual family member" }
    ],

    key: { A: 4, B: 5, C: 7, D: 6, E: 1, F: 3, G: 8 },
    extraHeadlineNum: 2,

    explanationsRu: {
      A:
        "Сравнение с <strong>морскими свинками</strong> и отличие от «типичного» грызуна: всё же <strong>родственники</strong>, похожи сильнее, чем кажется — <strong>4 — Still not so different</strong>.",
      B:
        "Без <strong>воды</strong> кожа сохнет, обитание только у источников, ныряние — вода <strong>необходима для жизни</strong> (<strong>5</strong>).",
      C:
        "Жизнь в <strong>стаях</strong>, вожак, переход на <strong>ночной</strong> распорядок при угрозе и совместное поведение — <strong>групповые приёмы</strong> (<strong>7 — Clever team habits</strong>).",
      D:
        "<strong>Травоядные</strong>, рацион из травы и водных растений, килограммы за день — про <strong>питание</strong> (<strong>6 — A healthy diet</strong>).",
      E:
        "Хищники, охота, люди, <strong>вырубка леса</strong> — перечень <strong>угроз</strong> (<strong>1</strong>).",
      F:
        "<strong>Общение</strong>, голос, метки, и главное — <strong>нельзя держать одного</strong>, иначе стресс. Нужно <strong>взаимодействие</strong> (<strong>3</strong>).",
      G:
        "Общие черты с <strong>семейством грызунов</strong> (мыши, белки, дикобраз) и <strong>режущие зубы</strong> — «нестандартный» представитель <strong>большой семьи</strong> (<strong>8</strong>). Путаница с <strong>4</strong> слабее: там акцент на внешнем сходстве со свинками, здесь — на <strong>родстве внутри отряда и общих признаках</strong>."
    },

    extraExplainRu:
      "Лишним остаётся заголовок <strong>2 — A beautiful variety</strong>: тексты не про «красивое разнообразие» видов или эстетику; размеры пола в §A и разные биотопы в §B не раскрывают именно эту идею заголовка.",

    quickPhrases: [
      { en: "rodents", ru: "грызуны" },
      { en: "close relatives", ru: "близкие родственники" },
      { en: "guinea pigs", ru: "морские свинки" },
      { en: "webbed feet", ru: "перепонки между пальцами (ламки)" },
      { en: "water-loving animals", ru: "любители воды / водные животные" },
      { en: "abundant water sources", ru: "обильные источники воды" },
      { en: "dense vegetation", ru: "густая растительность" },
      { en: "predators", ru: "хищники" },
      { en: "dominant male", ru: "доминантный самец / вожак" },
      { en: "nocturnal", ru: "ночной (активность ночью)" },
      { en: "herbivores", ru: "травоядные" },
      { en: "vegetation", ru: "растительность (как пища)" },
      { en: "caimans", ru: "кайманы" },
      { en: "anacondas", ru: "анаконды" },
      { en: "harpy eagles", ru: "арпиевые орлы" },
      { en: "deforestation", ru: "вырубка лесов" },
      { en: "vocal animals", ru: "животные, много «голосящих»" },
      { en: "scent glands", ru: "запаховые / сальные железы для меток" },
      { en: "enclosure", ru: "вольер, загон" },
      { en: "ever-growing front teeth", ru: "постоянно растущие резцы" },
      { en: "graze", ru: "пастись, щипать траву" },
      { en: "high in fibre", ru: "богаты клетчаткой (брит. fibre)" }
    ],

    tapPhrases: [
      {
        en: "These rodents look much more like larger versions of their close relatives, guinea pigs.",
        ru: "эти грызуны больше похожи на укрупнённых родственников — морских свинок"
      },
      {
        en: "These water-loving animals need water to keep their dry skin moist.",
        ru: "этим любителям воды нужна влага, чтобы кожа не сохла"
      },
      {
        en: "So capybaras are found only in areas with abundant water sources.",
        ru: "поэтому капибар водят только там, где много воды"
      },
      {
        en: "Capybaras can even stay underwater for up to five minutes at a time.",
        ru: "капибары могут сидеть под водой до пяти минут подряд"
      },
      {
        en: "a group can contain as many as 40 members joining together, all led by a dominant male.",
        ru: "в группе до сорока особей под одним доминантным самцом"
      },
      {
        en: "The dark provides them cover while they eat and socialize so that predators are less likely to attack them.",
        ru: "темнота даёт укрытие за едой и общением, хищнику сложнее напасть"
      },
      {
        en: "Capybaras are herbivores, which means that they only eat vegetation.",
        ru: "капибары — травоядные: только растительная пища"
      },
      {
        en: "Eighty percent of their food consists of only five different species of grass.",
        ru: "80 % рациона — всего пять видов травы"
      },
      {
        en: "Their main threat, however, is humans.",
        ru: "главная угроза — люди"
      },
      {
        en: "deforestation also poses a big threat to the population of capybaras",
        ru: "вырубка лесов — ещё одна серьёзная угроза популяции"
      },
      {
        en: "it is important that a capybara should never be housed alone, on its own in an enclosure, otherwise the animal would be stressed.",
        ru: "важно не содержать капибару одну: иначе животное в стрессе"
      },
      {
        en: "they share some common features with such rodents, as mice, squirrels, and porcupines",
        ru: "с мышами, белками и дикобразами их объединяют общие черты"
      },
      {
        en: "Capybaras use their long, sharp teeth to graze on grass and water plants in their typical habitats.",
        ru: "длинными острыми зубами щиплют траву и водные растения в типичных местах обитания"
      }
    ],

    tapLexicon: [
      { en: "capybaras", ru: "капибары" },
      { en: "jaguars", ru: "ягуары" },
      { en: "marsh", ru: "болото, топь" },
      { en: "ocelots", ru: "оцелоты" },
      { en: "porcupines", ru: "дикобразы" },
      { en: "chirps", ru: "высокие короткие звуки (чириканье)" },
      { en: "purrs", ru: "мурлыканье" },
      { en: "grass", ru: "трава" },
      { en: "rodents", ru: "грызуны" },
      { en: "squash", ru: "кабачок / тыква (овощ)" },
      { en: "melons", ru: "дыни" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
