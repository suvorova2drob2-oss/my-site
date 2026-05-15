/**
 * ЕГЭ Reading — Matching Headlines, юнит 5 (розы; вариант учебника).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u5-roses",
    unitOrder: 5,
    title: "Unit 5 · Roses",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "The rose is the most deeply ingrained flower in human history and human culture. It has been immortalised and integrated into music, festivals, poetry and even wars. It has been used as a sign of passion as well as grief. It is also the sign of human love, given on different occasions. William Shakespeare surely immortalised the rose for the world in 1597, in his play \"Romeo and Juliet\", when Juliet so passionately said, \"What's in a name? That which we call a rose. By any other name would smell as sweet.\"",
        evidence: {
          support: [
            "It has been immortalised and integrated into music, festivals, poetry and even wars.",
            "It has been used as a sign of passion as well as grief.",
            "William Shakespeare surely immortalised the rose for the world in 1597, in his play \"Romeo and Juliet\""
          ],
          distract: [
            "The rose is the most deeply ingrained flower in human history and human culture."
          ]
        }
      },
      {
        letter: "B",
        text:
          "All species of roses are naturally found throughout the Northern Hemisphere. Some 150 wild species are spread worldwide, from Alaska to Mexico, from Northern Africa to China. All roses are close relatives of cherries, apples, pears, raspberries, and plums. Most species of roses have long been cultivated for their hips, the fruit of the rose flower that has nutritional and medicinal value. A unique characteristic of all species of roses is its ability to bloom over and over again, from early summer to late autumn.",
        evidence: {
          support: [
            "All roses are close relatives of cherries, apples, pears, raspberries, and plums.",
            "the fruit of the rose flower that has nutritional and medicinal value.",
            "A unique characteristic of all species of roses is its ability to bloom over and over again, from early summer to late autumn."
          ],
          distract: [
            "Some 150 wild species are spread worldwide, from Alaska to Mexico, from Northern Africa to China."
          ]
        }
      },
      {
        letter: "C",
        text:
          "The Romans at first believed that the rose was useful as a source of natural medicines. Soon, the beautiful flowers became necessities at Roman festivals. Roman emperors demanded that their baths be filled with rose water, and they reclined on carpets of rose petals during their feasts. Perfumes made from roses became a high-priority treasure for the ruling elite, and it resulted in hardships among the peasant class, who were forced to grow roses instead of cultivating much needed food.",
        evidence: {
          support: [
            "Roman emperors demanded that their baths be filled with rose water, and they reclined on carpets of rose petals during their feasts.",
            "Perfumes made from roses became a high-priority treasure for the ruling elite,",
            "hardships among the peasant class, who were forced to grow roses instead of cultivating much needed food."
          ],
          distract: [
            "The Romans at first believed that the rose was useful as a source of natural medicines."
          ]
        }
      },
      {
        letter: "D",
        text:
          "During the 15th century in England, the rose became the symbol of war between two families, both of whom had laid claim to the English crown. The War of the Roses lasted for 30 years and involved the House of York, whose symbol was the white rose, and the House of Lancaster, whose symbol was the red rose. Only in 1486, King Henry VII of the House of Lancaster, who was the first Tudor king, married Elizabeth of York, uniting the families and finally bringing the English civil war to an end.",
        evidence: {
          support: [
            "During the 15th century in England, the rose became the symbol of war between two families, both of whom had laid claim to the English crown.",
            "The War of the Roses lasted for 30 years and involved the House of York, whose symbol was the white rose, and the House of Lancaster, whose symbol was the red rose.",
            "whose symbol was the red rose."
          ],
          distract: [
            "Elizabeth of York, uniting the families and finally bringing the English civil war to an end."
          ]
        }
      },
      {
        letter: "E",
        text:
          "In the 17th century, the rose became so valuable across Europe that it — along with rose water — was often used as currency. Roses were used to barter in market places across Europe, and commoners could pay their taxes to kings using roses and rose water. Josephine, wife of the Emperor Napoleon Bonaparte, created a great rose garden on the edge of Paris that contained over 200 varieties of the cherished rose. Most of the roses of Europe at that time were shades of pink or white until the early 19th century.",
        evidence: {
          support: [
            "was often used as currency.",
            "Roses were used to barter in market places across Europe,",
            "commoners could pay their taxes to kings using roses and rose water."
          ],
          distract: [
            "contained over 200 varieties of the cherished rose."
          ]
        }
      },
      {
        letter: "F",
        text:
          "Roses have always been extremely popular all over the world, and fossil records show the presence of ancient roses in the Tertiary Period, which began about 70 million years ago. Where, exactly, first roses appeared is still unknown. It is often believed that roses were probably first cultivated in the royal gardens of ancient China about 5,000 years ago. In Ur, an ancient city of Mesopotamia, 3,000-year-old clay tablets contain the first known written reference about roses growing in gardens of the city.",
        evidence: {
          support: [
            "fossil records show the presence of ancient roses in the Tertiary Period, which began about 70 million years ago.",
            "Where, exactly, first roses appeared is still unknown.",
            "the first known written reference about roses growing in gardens of the city."
          ],
          distract: ["Roses have always been extremely popular all over the world,"]
        }
      },
      {
        letter: "G",
        text:
          "Not all plants have perfect flowers. In a botanical sense a perfect flower is the one which has both male and female reproductive parts in the same structure. Lilies, roses, and apple flowers are perfect. Each flower possesses multiple ovaries that are located in a cup-like structure called a hypanthium. Leaves are located alternately on a stem that often has thorns. Five petals are typically found on the natural rose, while modern hybrid roses possess many more of the nice petals. The flower is admired for its wonderful scent.",
        evidence: {
          support: [
            "In a botanical sense a perfect flower is the one which has both male and female reproductive parts in the same structure.",
            "Lilies, roses, and apple flowers are perfect.",
            "Five petals are typically found on the natural rose, while modern hybrid roses possess many more of the nice petals."
          ],
          distract: ["The flower is admired for its wonderful scent."]
        }
      }
    ],

    headlines: [
      { num: 1, text: "Beautiful money" },
      { num: 2, text: "Ideal indeed" },
      { num: 3, text: "Rose family traits" },
      { num: 4, text: "Discovering origins" },
      { num: 5, text: "Many choices" },
      { num: 6, text: "A flower of luxury" },
      { num: 7, text: "A flower of conflict" },
      { num: 8, text: "A symbol for all times" }
    ],

    key: { A: 8, B: 3, C: 6, D: 7, E: 1, F: 4, G: 2 },
    extraHeadlineNum: 5,

    explanationsRu: {
      A:
        "Роза в <strong>истории культуры</strong>: музыка, поэзия, войны, страсть и горе, Шекспир — <strong>универсальный символ времен</strong> (<strong>8</strong>).",
      B:
        "Розы как <strong>родственники</strong> вишни, яблони, малины и др., плоды шиповника, особенность <strong>многократного цветения</strong> — черты <strong>семейства / биологии</strong> (<strong>3</strong>), а не просто «много видов» как главная мысль.",
      C:
        "Ванны с розовой водой, ковры из лепестков, духи для <strong>элиты</strong> и тяготы крестьян — <strong>роскошь</strong> (<strong>6</strong>).",
      D:
        "Белая и красная роза, <strong>Война Алой и Белой розы</strong> — <strong>конфликт</strong> (<strong>7</strong>).",
      E:
        "<strong>Валюта</strong>, бартер, <strong>налоги розами</strong> — «<strong>красивые деньги</strong>» (<strong>1</strong>); сад Жозефины с 200 сортами — деталь, а не смысл всего абзаца.",
      F:
        "Ископаемые находки, неизвестное <strong>происхождение</strong>, Китай, Урукские таблички — <strong>поиск истоков</strong> (<strong>4</strong>).",
      G:
        "Ботаническое <strong>perfect flower</strong> (обоеполые части в одном цветке) и строение — игра заголовка <strong>Ideal indeed</strong> (<strong>2</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся заголовок <strong>5 — Many choices</strong>: хотя в §B есть ~150 видов, а в §E — 200 сортов в саду, ни один текст не сводится главным образом к идее «огромного ассортимента на выбор»; у каждого абзаца свой доминирующий фокус (родство роз с другими культурами, деньги, происхождение и т. д.).",

    quickPhrases: [
      { en: "deeply ingrained", ru: "глубоко укоренившийся, вписанный в культуру" },
      { en: "immortalised", ru: "увековеченный" },
      { en: "wild species", ru: "дикие виды" },
      { en: "close relatives of", ru: "близкие родственники (видов) …" },
      { en: "hips", ru: "шиповник (плоды розы); бёдра в другом значении" },
      { en: "medicinal value", ru: "лекарственная ценность" },
      { en: "ruling elite", ru: "правящая элита" },
      { en: "peasant class", ru: "крестьянство" },
      { en: "laid claim to the English crown", ru: "претендовали на английскую корону" },
      { en: "currency", ru: "валюта" },
      { en: "barter", ru: "бартер, мена без денег" },
      { en: "fossil records", ru: "ископаемые находки, данные палеонтологии" },
      { en: "Tertiary Period", ru: "третичный период (геология)" },
      { en: "Mesopotamia", ru: "Месопотамия" },
      { en: "clay tablets", ru: "глиняные таблички" },
      { en: "perfect flower", ru: "совершенный цветок (ботан.), обоеполый в одной структуре" },
      { en: "hypanthium", ru: "гипантий (чашечная трубка)" },
      { en: "ovaries", ru: "завязи (ботан.)" },
      { en: "hybrid roses", ru: "гибридные розы" }
    ],

    tapPhrases: [
      {
        en: "It has been immortalised and integrated into music, festivals, poetry and even wars.",
        ru: "розу увековечили в музыке, праздниках, поэзии и даже на войне"
      },
      {
        en: "All roses are close relatives of cherries, apples, pears, raspberries, and plums.",
        ru: "все розы — близкие родственники вишни, яблони, груши, малины и сливы"
      },
      {
        en: "A unique characteristic of all species of roses is its ability to bloom over and over again, from early summer to late autumn.",
        ru: "отличительная черта — способность цвести снова и снова с раннего лета до поздней осени"
      },
      {
        en: "Roman emperors demanded that their baths be filled with rose water, and they reclined on carpets of rose petals during their feasts.",
        ru: "императорам наливали ванны розовой водой, на пирах лежали на коврах из лепестков"
      },
      {
        en: "The War of the Roses lasted for 30 years and involved the House of York, whose symbol was the white rose, and the House of Lancaster, whose symbol was the red rose.",
        ru: "Война роз длилась 30 лет: Йорки — белая роза, Ланкастеры — красная"
      },
      {
        en: "was often used as currency",
        ru: "часто использовали как валюту"
      },
      {
        en: "commoners could pay their taxes to kings using roses and rose water.",
        ru: "простолюдины могли платить налоги королям розами и розовой водой"
      },
      {
        en: "fossil records show the presence of ancient roses in the Tertiary Period, which began about 70 million years ago.",
        ru: "в ископаемых есть древние розы третичного периода, около 70 млн лет назад"
      },
      {
        en: "Where, exactly, first roses appeared is still unknown.",
        ru: "где именно впервые появились розы — до сих пор неизвестно"
      },
      {
        en: "In a botanical sense a perfect flower is the one which has both male and female reproductive parts in the same structure.",
        ru: "в ботанике «совершенный цветок» — с мужскими и женскими частями в одной структуре"
      }
    ],

    tapLexicon: [
      { en: "thorn", ru: "шип" },
      { en: "petals", ru: "лепестки" },
      { en: "perfumes", ru: "духи, парфюм" },
      { en: "civil war", ru: "гражданская война" },
      { en: "cultivated", ru: "культивировали, выращивали" },
      { en: "cherished", ru: "любимый, дорогой сердцу" },
      { en: "hypanthium", ru: "гипантий" },
      { en: "reproductive", ru: "репродуктивный; размножающий" },
      { en: "stem", ru: "стебель" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
