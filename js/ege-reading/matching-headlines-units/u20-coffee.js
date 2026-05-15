/**
 * ЕГЭ Reading — Matching Headlines, юнит 20 (кофе: здоровье, генетика вкуса,
 * происхождение арабики, легенды распространения, химия обжарки и заваривания, безкофеин).
 * Правки исходника: склеены строки B/C; «coffee- drinking» → coffee-drinking; flavour-like → «..., like»;
 * Barker roasts → Darker roasts; абзац D — убраны хвосты OCR («(19.», тайские символы); уточнена дата на Яве без ошибочной скобки;
 * удалён колонтитул сборника из зоны G.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u20-coffee",
    unitOrder: 20,
    title: "Unit 20 · Coffee",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "There are a lot of different studies that come out about coffee, yet it is still difficult for researchers to agree whether the drink is good for one's health. There is not enough data to change the guidelines to include more cups of coffee. Drinking two to four cups of coffee a day will usually have positive effects. However, heavy caffeine intake more than four cups of coffee a day can cause insomnia, stomach upset, muscle tremors, and restlessness. And this is not a complete list of possible health problems.",
        evidence: {
          support: [
            "it is still difficult for researchers to agree whether the drink is good for one's health.",
            "heavy caffeine intake more than four cups of coffee a day can cause insomnia, stomach upset, muscle tremors, and restlessness.",
            "Drinking two to four cups of coffee a day will usually have positive effects."
          ],
          distract: [
            "There is not enough data to change the guidelines to include more cups of coffee.",
            "There are a lot of different studies that come out about coffee,"
          ]
        }
      },
      {
        letter: "B",
        text:
          "Studies have shown that coffee provides other health benefits besides the caffeine boost and the rich flavour, like preventing diabetes and certain cancers. Drinking at least one cup of coffee a day could prevent heart problems. Researchers analyzed the coffee-drinking habits and health histories of thousands of women for 10 years. They found out that women who drank one or more cups of coffee a day were nearly 25% less likely to have a stroke than those who drank less than one cup of coffee a day.",
        evidence: {
          support: [
            "coffee provides other health benefits besides the caffeine boost and the rich flavour, like preventing diabetes and certain cancers.",
            "Drinking at least one cup of coffee a day could prevent heart problems.",
            "women who drank one or more cups of coffee a day were nearly 25% less likely to have a stroke"
          ],
          distract: [
            "Researchers analyzed the coffee-drinking habits and health histories of thousands of women for 10 years."
          ]
        }
      },
      {
        letter: "C",
        text:
          "The Arabica coffee plant appeared around 600,000 to 1 million years ago, when two other coffee species crossbred in the forests of what is now Ethiopia. It does not matter when it developed, but this hybrid genome enabled the plant to grow successfully as it was farmed across the world. It was believed to have been grown by humans in Ethiopia and then traded to the Middle East, where it became a well-known drink by the 15th century. Arabica coffee now provides about 60% of the world's coffee supply.",
        evidence: {
          support: [
            "The Arabica coffee plant appeared around 600,000 to 1 million years ago,",
            "two other coffee species crossbred in the forests of what is now Ethiopia.",
            "Arabica coffee now provides about 60% of the world's coffee supply."
          ],
          distract: [
            "this hybrid genome enabled the plant to grow successfully as it was farmed across the world.",
            "became a well-known drink by the 15th century."
          ]
        }
      },
      {
        letter: "D",
        text:
          "There are lots of legends connected with the Arabica coffee plant spreading. According to one legend, an Indian pilgrim took secretly seven seeds out of Yemen and established coffee farms in India around 1670. Dutch traders began farming the plant in other regions. They first planted the Arabica coffee plant on the island of Java in 1699, and one was sent to a botanical garden in Amsterdam in 1706. The Dutch and the French, with whom a plant was shared, also transported seedlings to the colonies in the 18th century.",
        evidence: {
          support: [
            "There are lots of legends connected with the Arabica coffee plant spreading.",
            "According to one legend, an Indian pilgrim took secretly seven seeds out of Yemen",
            "transported seedlings to the colonies in the 18th century."
          ],
          distract: [
            "They first planted the Arabica coffee plant on the island of Java in 1699,",
            "botanical garden in Amsterdam in 1706."
          ]
        }
      },
      {
        letter: "E",
        text:
          "Coffee is one of the world's most widely-consumed beverages, yet individuals may love it or hate it. For some, coffee is the true nectar of the gods, while others will not touch a drop of the stuff. Now, a new study reveals how genes influence people's preferences for a cup of coffee. The findings boost the idea that a hit of caffeine is what motivates regular coffee consumption. It could also explain why the same amount of coffee or caffeine can have greatly different effects on different people.",
        evidence: {
          support: [
            "individuals may love it or hate it.",
            "genes influence people's preferences for a cup of coffee.",
            "the same amount of coffee or caffeine can have greatly different effects on different people."
          ],
          distract: [
            "coffee is the true nectar of the gods, while others will not touch a drop of the stuff.",
            "a hit of caffeine is what motivates regular coffee consumption."
          ]
        }
      },
      {
        letter: "F",
        text:
          "When it comes to great flavour, coffee chemistry boils down to roasting and brewing. During roasting, oil locked inside the beans begins to appear at around 400 degrees. The more oil, the stronger the flavour of coffee is. Caffeine content goes up as the water spends more time in contact with the grounds. So regular coffee often has more caffeine than espresso or cappuccino. Darker roasts also contain more caffeine. Thus, great coffee depends on roasting and brewing, rather than additives or flavourings.",
        evidence: {
          support: [
            "coffee chemistry boils down to roasting and brewing.",
            "great coffee depends on roasting and brewing, rather than additives or flavourings.",
            "regular coffee often has more caffeine than espresso or cappuccino."
          ],
          distract: [
            "oil locked inside the beans begins to appear at around 400 degrees.",
            "The more oil, the stronger the flavour of coffee is."
          ]
        }
      },
      {
        letter: "G",
        text:
          "For those who like the taste of coffee but can't stand the caffeine, scientists have created a variety of ways to extract caffeine from coffee beans. In the most common method, called \"solvent extraction\", the beans are steamed to raise their moisture content. Dissolved caffeine rises to the surface of the beans and is washed off using an organic solvent. The neutered beans are then dried off and ready to go to make coffee. In fact, decaffeinated coffee still contains caffeine, but in a very small amount.",
        evidence: {
          support: [
            "scientists have created a variety of ways to extract caffeine from coffee beans.",
            "decaffeinated coffee still contains caffeine, but in a very small amount.",
            "In the most common method, called \"solvent extraction\","
          ],
          distract: [
            "The neutered beans are then dried off and ready to go to make coffee.",
            "Dissolved caffeine rises to the surface of the beans and is washed off using an organic solvent."
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "Tastes differ" },
      { num: 2, text: "Stories behind" },
      { num: 3, text: "How it all started" },
      { num: 4, text: "Is it real coffee?" },
      { num: 5, text: "Friend or foe" },
      { num: 6, text: "Popular recipes" },
      { num: 7, text: "A healthy drink" },
      { num: 8, text: "It's all in the cooking" }
    ],

    key: { A: 5, B: 7, C: 3, D: 2, E: 1, F: 8, G: 4 },
    extraHeadlineNum: 6,

    explanationsRu: {
      A:
        "Исследования <strong>не сходятся</strong>: есть и «за», и против больших доз — заголовок про дружбу и вражду напитка со здоровьем (<strong>5 — Friend or foe</strong>).",
      B:
        "Конкретные бонусы для организма (диабет, инсульт и др.) — <strong>полезный напиток</strong> в смысле доказательной базы (<strong>7</strong>).",
      C:
        "Появление вида, скрещивание в Эфиопии, эволюция плантаций и доля арабики на рынке — <strong>как всё началось</strong> (<strong>3</strong>).",
      D:
        "Легенды и факты переноса зёрнен из Йемена через торговцев на Яву, Амстердам и колонии — <strong>истории за распространением</strong> (<strong>2</strong>).",
      E:
        "«Нектар» для одних и отвращение для других + генетика и разная реакция на одну дозу — <strong>вкусы разные</strong> (<strong>1</strong>).",
      F:
        "Обжарка, температура масла, время контакта воды с молотым кофе — всё решают <strong>технология приготовления</strong>, не добавки (<strong>8</strong>).",
      G:
        "Извлечение кофеина, растворитель, «обезвреженные» зёрна и всё же остаточный кофеин — вопрос <strong>«это ещё настоящий кофе?»</strong> (<strong>4</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся <strong>6 — Popular recipes</strong>: ни один абзац не про рецепты или кулинарные инструкции для дома.",

    quickPhrases: [
      {
        en: "difficult for researchers to agree whether the drink is good for one's health",
        ru: "учёным сложно сойтись во мнении, полезен ли напиток для здоровья"
      },
      {
        en: "heavy caffeine intake more than four cups of coffee a day",
        ru: "большая доза кофеина — больше четырёх чашек в день"
      },
      {
        en: "can cause insomnia, stomach upset, muscle tremors, and restlessness",
        ru: "может вызвать бессонницу, расстройство желудка, дрожь мышц и внутреннее беспокойство"
      },
      {
        en: "preventing diabetes and certain cancers",
        ru: "профилактика диабета и некоторых видов рака"
      },
      {
        en: "nearly 25% less likely to have a stroke",
        ru: "на почти четверть реже риск инсульта"
      },
      {
        en: "coffee-drinking habits and health histories",
        ru: "привычки пить кофе и истории болезней"
      },
      {
        en: "two other coffee species crossbred in the forests of what is now Ethiopia",
        ru: "скрестились два других вида кофе в лесах нынешней Эфиопии"
      },
      {
        en: "this hybrid genome enabled the plant to grow successfully",
        ru: "гибридный геном позволил растению успешно размножаться"
      },
      {
        en: "Arabica coffee now provides about 60% of the world's coffee supply",
        ru: "арабика даёт около 60 % мирового кофе"
      },
      {
        en: "lots of legends connected with the Arabica coffee plant spreading",
        ru: "много легенд о том, как арабика распространялась по миру"
      },
      {
        en: "took secretly seven seeds out of Yemen",
        ru: "тайно вывез семь зёрен из Йемена"
      },
      {
        en: "botanical garden in Amsterdam",
        ru: "ботанический сад в Амстердаме"
      },
      {
        en: "transported seedlings to the colonies in the 18th century",
        ru: "перевезли саженцы в колонии в XVIII веке"
      },
      {
        en: "individuals may love it or hate it",
        ru: "одни обожают, другие терпеть не могут"
      },
      {
        en: "genes influence people's preferences for a cup of coffee",
        ru: "гены влияют на предпочтения при выборе чашки кофе"
      },
      {
        en: "a hit of caffeine is what motivates regular coffee consumption",
        ru: "импульс кофеина — то, что держит привычку пить кофе"
      },
      {
        en: "greatly different effects on different people",
        ru: "сильно разный эффект на разных людей"
      },
      {
        en: "coffee chemistry boils down to roasting and brewing",
        ru: "кофейная «химия» сводится к обжарке и способу заваривания"
      },
      {
        en: "oil locked inside the beans begins to appear at around 400 degrees",
        ru: "масло внутри зерна проступает при температуре около 400 (градусов)"
      },
      {
        en: "the water spends more time in contact with the grounds",
        ru: "вода дольше контактирует с молотым кофе"
      },
      {
        en: "regular coffee often has more caffeine than espresso or cappuccino",
        ru: "обычный фильтр-кофе часто крепче по кофеину, чем эспрессо или капучино"
      },
      {
        en: "Darker roasts also contain more caffeine",
        ru: "более тёмная обжарка тоже даёт больше кофеина (в данных текста)"
      },
      {
        en: "rather than additives or flavourings",
        ru: "а не добавки и ароматизаторы"
      },
      {
        en: "extract caffeine from coffee beans",
        ru: "извлекать кофеин из зёрен"
      },
      {
        en: "solvent extraction",
        ru: "экстракция растворителем"
      },
      {
        en: "The neutered beans are then dried off",
        ru: "«обезкофеиненные» зёрна затем сушат"
      },
      {
        en: "decaffeinated coffee still contains caffeine, but in a very small amount",
        ru: "в безкофеиновом кофе всё же есть кофеин, но в малых количествах"
      }
    ],

    tapPhrases: [
      {
        en: "There are a lot of different studies that come out about coffee, yet it is still difficult for researchers to agree whether the drink is good for one's health.",
        ru: "много исследований, но учёные не могут согласиться: кофе полезен или нет"
      },
      {
        en: "There is not enough data to change the guidelines to include more cups of coffee.",
        ru: "данных мало, чтобы менять рекомендации и добавлять лишние чашки"
      },
      {
        en: "Drinking two to four cups of coffee a day will usually have positive effects.",
        ru: "2–4 чашки обычно дают положительный эффект"
      },
      {
        en: "However, heavy caffeine intake more than four cups of coffee a day can cause insomnia, stomach upset, muscle tremors, and restlessness.",
        ru: "но большие дозы — бессонница, желудок, дрожь и нервозность"
      },
      {
        en: "And this is not a complete list of possible health problems.",
        ru: "и это не полный список проблем со здоровьем"
      },

      {
        en: "Studies have shown that coffee provides other health benefits besides the caffeine boost and the rich flavour, like preventing diabetes and certain cancers.",
        ru: "кофе даёт и другие плюсы помимо тонуса и вкуса — например, против диабета и части раков"
      },
      {
        en: "Drinking at least one cup of coffee a day could prevent heart problems.",
        ru: "хотя бы одна чашка может защищать сердце"
      },
      {
        en: "Researchers analyzed the coffee-drinking habits and health histories of thousands of women for 10 years.",
        ru: "учёные 10 лет смотрели привычки и карты здоровья тысяч женщин"
      },
      {
        en: "They found out that women who drank one or more cups of coffee a day were nearly 25% less likely to have a stroke than those who drank less than one cup of coffee a day.",
        ru: "пьющие от чашки в день реже получали инсульт почти на четверть"
      },

      {
        en: "The Arabica coffee plant appeared around 600,000 to 1 million years ago, when two other coffee species crossbred in the forests of what is now Ethiopia.",
        ru: "арабика возникла до миллиона лет назад от скрещивания двух видов в Эфиопии"
      },
      {
        en: "It does not matter when it developed, but this hybrid genome enabled the plant to grow successfully as it was farmed across the world.",
        ru: "гибридный геном позволил культивировать растение по всему свету"
      },
      {
        en: "It was believed to have been grown by humans in Ethiopia and then traded to the Middle East, where it became a well-known drink by the 15th century.",
        ru: "выращивали в Эфиопии и завезли на Ближний Восток — к XV веку напиток был известен"
      },
      {
        en: "Arabica coffee now provides about 60% of the world's coffee supply.",
        ru: "арабика — около 60 % мирового предложения кофе"
      },

      {
        en: "There are lots of legends connected with the Arabica coffee plant spreading.",
        ru: "полно легенд о том, как арабика расходилась по миру"
      },
      {
        en: "According to one legend, an Indian pilgrim took secretly seven seeds out of Yemen and established coffee farms in India around 1670.",
        ru: "в одной легенде паломник тайно вывез семь зёрен из Йемена и завёл плантации в Индии"
      },
      {
        en: "Dutch traders began farming the plant in other regions.",
        ru: "голландские торговцы начали выращивать кофе в других краях"
      },
      {
        en: "They first planted the Arabica coffee plant on the island of Java in 1699, and one was sent to a botanical garden in Amsterdam in 1706.",
        ru: "первый посадили на Яве в 1699 г., одно растение отправили в амстердамский ботсад в 1706"
      },
      {
        en: "The Dutch and the French, with whom a plant was shared, also transported seedlings to the colonies in the 18th century.",
        ru: "голландцы и французы делились саженцами и везли их в колонии в XVIII веке"
      },

      {
        en: "Coffee is one of the world's most widely-consumed beverages, yet individuals may love it or hate it.",
        ru: "кофе пьют повсеместно, но отношение — от обожания до отвращения"
      },
      {
        en: "For some, coffee is the true nectar of the gods, while others will not touch a drop of the stuff.",
        ru: "для одних — нектар богов, другие и глотка не возьмут"
      },
      {
        en: "Now, a new study reveals how genes influence people's preferences for a cup of coffee.",
        ru: "новое исследование показывает роль генов в любви к кофе"
      },
      {
        en: "The findings boost the idea that a hit of caffeine is what motivates regular coffee consumption.",
        ru: "данные поддерживают мысль: привычку подпитывает именно кофеин"
      },
      {
        en: "It could also explain why the same amount of coffee or caffeine can have greatly different effects on different people.",
        ru: "это же объясняет, почему одна доза действует на людей по-разному"
      },

      {
        en: "When it comes to great flavour, coffee chemistry boils down to roasting and brewing.",
        ru: "вкус кофе — это прежде всего обжарка и заваривание"
      },
      {
        en: "During roasting, oil locked inside the beans begins to appear at around 400 degrees.",
        ru: "при обжарке около 400° проступает масло из зерна"
      },
      {
        en: "The more oil, the stronger the flavour of coffee is.",
        ru: "чем больше масла, тем насыщеннее вкус"
      },
      {
        en: "Caffeine content goes up as the water spends more time in contact with the grounds.",
        ru: "кофеина больше, если вода дольше стоит на молотом кофе"
      },
      {
        en: "So regular coffee often has more caffeine than espresso or cappuccino.",
        ru: "поэтому «обычный» кофе часто бодрит сильнее эспрессо или капучино"
      },
      {
        en: "Darker roasts also contain more caffeine.",
        ru: "тёмная обжарка тоже добавляет кофеина (по версии текста)"
      },
      {
        en: "Thus, great coffee depends on roasting and brewing, rather than additives or flavourings.",
        ru: "итог: качество — в обжарке и заваривании, не в добавках"
      },

      {
        en: "For those who like the taste of coffee but can't stand the caffeine, scientists have created a variety of ways to extract caffeine from coffee beans.",
        ru: "любителям вкуса без кофеина придумали способы удалить кофеин"
      },
      {
        en: "In the most common method, called \"solvent extraction\", the beans are steamed to raise their moisture content.",
        ru: "чаще всего — «экстракция растворителем»: зёрна пропаривают для влаги"
      },
      {
        en: "Dissolved caffeine rises to the surface of the beans and is washed off using an organic solvent.",
        ru: "кофеин выходит на поверхность и смывают органическим растворителем"
      },
      {
        en: "The neutered beans are then dried off and ready to go to make coffee.",
        ru: "обработанные зёрна сушат и снова молотят под напиток"
      },
      {
        en: "In fact, decaffeinated coffee still contains caffeine, but in a very small amount.",
        ru: "безкофеиновый кофе всё равно содержит немного кофеина"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
