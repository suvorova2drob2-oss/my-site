/**
 * ЕГЭ Reading — Matching Headlines, юнит 18 (сады и земледелие: яд, дождевые сады,
 * victory gardens, урбанистическое земледелие, роза, тюльпанная лихорадка, развитие агросектора).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u18-gardens-farming",
    unitOrder: 18,
    title: "Unit 18 · Gardens & farming",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Inside northern England's Alnwick Garden lies a curious, highly-guarded area where the last thing a visitor will want to do is tiptoe through the tulips. Surrounded by a heavy iron fence, the Poison Garden showcases over 100 of the world's most deadly plants. In addition to not touching the plants, tourists are also advised to avoid even smelling the plants, as the fumes from certain plants have caused a few visitors to faint.",
        evidence: {
          support: [
            "the Poison Garden showcases over 100 of the world's most deadly plants.",
            "Surrounded by a heavy iron fence,",
            "tourists are also advised to avoid even smelling the plants, as the fumes from certain plants have caused a few visitors to faint.",
            "highly-guarded area where the last thing a visitor will want to do is tiptoe through the tulips."
          ],
          distract: [
            "Inside northern England's Alnwick Garden lies a curious, highly-guarded area",
            "In addition to not touching the plants,"
          ]
        }
      },
      {
        letter: "B",
        text:
          "A rain garden is an attractive landscaped area placed in a lawn to take advantage of large amounts of rainwater. Rain gardens slow the movement of rainwater, allowing the nutrients contained in rainwater to soak back into the soil, and prevent soil erosion. Not only do these garden areas provide a lot of benefits for a garden, attracting birds, butterflies and bees, they are also very beautiful.",
        evidence: {
          support: [
            "Rain gardens slow the movement of rainwater, allowing the nutrients contained in rainwater to soak back into the soil, and prevent soil erosion.",
            "Not only do these garden areas provide a lot of benefits for a garden, attracting birds, butterflies and bees,",
            "A rain garden is an attractive landscaped area placed in a lawn to take advantage of large amounts of rainwater."
          ],
          distract: [
            "they are also very beautiful.",
            "Not only do these garden areas provide a lot of benefits for a garden,"
          ]
        }
      },
      {
        letter: "C",
        text:
          "During World War II, the U.S. government encouraged citizens to grow their own fruit and vegetables in \"victory gardens\" to help to prevent food shortage, as much of the nation's food supply was diverted to the military. The United States was home to approximately 20 million victory gardens in the early 1940s, and it is estimated that these gardens accounted for 30 to 40% of all vegetables in the U.S.",
        evidence: {
          support: [
            "the U.S. government encouraged citizens to grow their own fruit and vegetables in \"victory gardens\"",
            "to help to prevent food shortage, as much of the nation's food supply was diverted to the military.",
            "approximately 20 million victory gardens in the early 1940s",
            "these gardens accounted for 30 to 40% of all vegetables in the U.S."
          ],
          distract: [
            "During World War II,",
            "as much of the nation's food supply was diverted to the military."
          ]
        }
      },
      {
        letter: "D",
        text:
          "Urban agriculture is a broad term that refers to agricultural practice taking place in a densely populated area, such as towns or large suburbs. Although urban agriculture typically does not occur on the same large scale as rural agriculture, it includes the same variety of activities. For example, a person who lives in town and keeps a chicken coop in his or her front lawn is taking part in agriculture.",
        evidence: {
          support: [
            "Urban agriculture is a broad term that refers to agricultural practice taking place in a densely populated area, such as towns or large suburbs.",
            "a person who lives in town and keeps a chicken coop in his or her front lawn is taking part in agriculture.",
            "Although urban agriculture typically does not occur on the same large scale as rural agriculture, it includes the same variety of activities."
          ],
          distract: [
            "For example,"
          ]
        }
      },
      {
        letter: "E",
        text:
          "The rose is the most popular flower in the U.S. and in the world, according to the National Gardening Association. It is grown all over the world, and it is the most popular flower given as a gift. Flower experts speculate that the rose popularity stems from its wide variety of colours, sizes and fragrances. It is used to symbolize love, beauty, war, peace and politics. There are approximately 50 rose species in the world.",
        evidence: {
          support: [
            "The rose is the most popular flower in the U.S. and in the world, according to the National Gardening Association.",
            "It is grown all over the world, and it is the most popular flower given as a gift.",
            "Flower experts speculate that the rose popularity stems from its wide variety of colours, sizes and fragrances.",
            "There are approximately 50 rose species in the world."
          ],
          distract: [
            "It is used to symbolize love, beauty, war, peace and politics."
          ]
        }
      },
      {
        letter: "F",
        text:
          "When the tulip was imported to Holland from Turkey in the late 16th century, the Dutch enthusiasm for the flower caused a dramatic price inflation that crashed in the end. It created an economic depression that had a long-lasting impact on the Dutch economy during the 17th century. Prices for tulips had become so great that a single bulb could sell for more than a working-class person would take home in a year.",
        evidence: {
          support: [
            "the Dutch enthusiasm for the flower caused a dramatic price inflation that crashed in the end.",
            "Prices for tulips had become so great that a single bulb could sell for more than a working-class person would take home in a year.",
            "It created an economic depression that had a long-lasting impact on the Dutch economy during the 17th century."
          ],
          distract: [
            "When the tulip was imported to Holland from Turkey in the late 16th century,"
          ]
        }
      },
      {
        letter: "G",
        text:
          "People need to eat, and agriculture provides almost all of the food people demand. It also allows a small group of people to produce enough food for many more. Through the years, agriculture has become more and more efficient, and only a small percentage of the world's population works in the agriculture sector. Hybrid seeds and selective breeding mean that modern yields are far larger than ever before.",
        evidence: {
          support: [
            "Through the years, agriculture has become more and more efficient,",
            "Hybrid seeds and selective breeding mean that modern yields are far larger than ever before.",
            "only a small percentage of the world's population works in the agriculture sector.",
            "It also allows a small group of people to produce enough food for many more."
          ],
          distract: [
            "People need to eat, and agriculture provides almost all of the food people demand."
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "Farming in a city" },
      { num: 2, text: "A fortune for a flower" },
      { num: 3, text: "Useful garden space" },
      { num: 4, text: "Development of farming" },
      { num: 5, text: "A dangerous garden" },
      { num: 6, text: "A popular indoor plant" },
      { num: 7, text: "National strategy" },
      { num: 8, text: "The globe's favourite flower" }
    ],

    key: { A: 5, B: 3, C: 7, D: 1, E: 8, F: 2, G: 4 },
    extraHeadlineNum: 6,

    explanationsRu: {
      A:
        "<strong>Poison Garden</strong>, ядовитые растения, забор и даже запах опасен — про <strong>опасный сад</strong> (<strong>5</strong>).",
      B:
        "<strong>Rain garden</strong> собирает дождь, борется с размыванием почвы — полезное устройство участка (<strong>3 — Useful garden space</strong>).",
      C:
        "<strong>Victory gardens</strong> по призыву правительства в войну — <strong>национальная стратегия</strong> продовольствия (<strong>7</strong>).",
      D:
        "<strong>Urban agriculture</strong>, куры во дворе города — <strong>фермерство в городе</strong> (<strong>1</strong>).",
      E:
        "Роза как самый популярный цветок в США и мире — <strong>любимица планеты</strong> (<strong>8</strong>).",
      F:
        "Тюльпанная лихорадка: цена луковицы выше годового заработка — <strong>богатство цветка</strong> (<strong>2</strong>).",
      G:
        "Эффективность, гибриды, урожайность со временем — <strong>развитие земледелия</strong> (<strong>4</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся <strong>6 — A popular indoor plant</strong>: ни один абзац не про комнатное растение или интерьерный хит продаж.",

    quickPhrases: [
      { en: "Poison Garden", ru: "«ядовитый сад» (Alnwick)" },
      { en: "deadly plants", ru: "смертельно опасные растения" },
      { en: "fumes", ru: "испарения, ядовитые пары" },
      { en: "faint", ru: "терять сознание, падать в обморок" },
      { en: "rain garden", ru: "дождевой сад (лужа-донор для впитывания воды)" },
      { en: "soil erosion", ru: "эрозия почвы, размыв" },
      { en: "soak back into the soil", ru: "впитываются обратно в почву" },
      { en: "nutrients", ru: "питательные вещества" },
      { en: "victory gardens", ru: "«сады победы» (военное время)" },
      { en: "food shortage", ru: "дефицит продовольствия" },
      { en: "diverted to the military", ru: "перенаправлено армии" },
      { en: "urban agriculture", ru: "городское сельское хозяйство" },
      { en: "densely populated area", ru: "густонаселённая местность" },
      { en: "chicken coop", ru: "курятник" },
      { en: "National Gardening Association", ru: "Национальная садовая ассоциация (США)" },
      { en: "fragrances", ru: "ароматы" },
      { en: "symbolize", ru: "символизировать (амер. spell.)" },
      { en: "price inflation", ru: "инфляция цен" },
      { en: "economic depression", ru: "экономическая депрессия, спад" },
      { en: "single bulb", ru: "одна луковица (луковица цветка)" },
      { en: "working-class", ru: "рабочий класс" },
      { en: "selective breeding", ru: "селекция (отбор пород)" },
      { en: "hybrid seeds", ru: "гибридные семена" },
      { en: "yields", ru: "урожайность" },
      { en: "agriculture sector", ru: "агросектор" },
      { en: "efficient", ru: "эффективный" },
      { en: "suburbs", ru: "пригороды" },
      { en: "landscaped area", ru: "благоустроенная зона" },
      { en: "lawns", ru: "газоны (контекст: lawn)" },
      {
        en: "tourists are also advised to avoid even smelling the plants",
        ru: "туристам советуют даже не нюхать некоторые растения"
      },
      {
        en: "the fumes from certain plants have caused a few visitors to faint",
        ru: "испарения от некоторых растений доводили посетителей до обморока"
      },
      {
        en: "Not only do these garden areas provide a lot of benefits for a garden, attracting birds, butterflies and bees",
        ru: "такие участки полезны саду и привлекают птиц, бабочек и пчёл"
      },
      {
        en: "the U.S. government encouraged citizens to grow their own fruit and vegetables",
        ru: "власти США призывали граждан выращивать овощи и фрукты сами"
      },
      {
        en: "prevent food shortage, as much of the nation's food supply was diverted to the military",
        ru: "бороться с дефицитом еды — продовольствие шло армии"
      },
      {
        en: "these gardens accounted for 30 to 40% of all vegetables in the U.S.",
        ru: "эти сады давали 30–40 % овощей в США"
      },
      {
        en: "Urban agriculture typically does not occur on the same large scale as rural agriculture",
        ru: "городское земледелие редко масштабно как в деревне"
      },
      {
        en: "keeps a chicken coop in his or her front lawn",
        ru: "держит курятник на переднем газоне"
      },
      {
        en: "the rose popularity stems from its wide variety of colours, sizes and fragrances",
        ru: "популярность розы объясняют множеством цветов, размеров и ароматов"
      },
      {
        en: "It is used to symbolize love, beauty, war, peace and politics",
        ru: "её используют как символ любви, красоты, войны, мира и политики"
      },
      {
        en: "the Dutch enthusiasm for the flower caused a dramatic price inflation that crashed in the end",
        ru: "голландский ажиотаж поднял цены и закончился крахом"
      },
      {
        en: "It created an economic depression that had a long-lasting impact on the Dutch economy",
        ru: "это вызвало депрессию с долгим следом для экономики Нидерландов"
      },
      {
        en: "agriculture provides almost all of the food people demand",
        ru: "сельское хозяйство даёт почти всю еду, которая нужна людям"
      },
      {
        en: "allows a small group of people to produce enough food for many more",
        ru: "небольшая группа людей кормит гораздо больше других"
      },
      {
        en: "only a small percentage of the world's population works in the agriculture sector",
        ru: "лишь малая доля населения работает в агросекторе"
      },
      {
        en: "Hybrid seeds and selective breeding mean that modern yields are far larger than ever before",
        ru: "гибриды и селекция дают рекордную урожайность"
      }
    ],

    tapPhrases: [
      {
        en: "the Poison Garden showcases over 100 of the world's most deadly plants.",
        ru: "«Ядовитый сад» собирает более сотни смертельных видов растений"
      },
      {
        en: "Rain gardens slow the movement of rainwater",
        ru: "дождевые сады замедляют сток воды"
      },
      {
        en: "the U.S. government encouraged citizens to grow their own fruit and vegetables",
        ru: "власти США призывали граждан выращивать овощи и фрукты самим"
      },
      {
        en: "approximately 20 million victory gardens in the early 1940s",
        ru: "около 20 миллионов «садов победы» в начале 1940-х"
      },
      {
        en: "Urban agriculture is a broad term",
        ru: "«городское земледелие» — широкое понятие"
      },
      {
        en: "keeps a chicken coop in his or her front lawn",
        ru: "держит курятник на переднем газоне"
      },
      {
        en: "The rose is the most popular flower in the U.S. and in the world",
        ru: "роза — самый популярный цветок в США и в мире"
      },
      {
        en: "a single bulb could sell for more than a working-class person would take home in a year.",
        ru: "одна луковица могла стоить дороже годового дохода простого работника"
      },
      {
        en: "modern yields are far larger than ever before",
        ru: "современные урожаи несравнимо выше, чем раньше"
      },
      {
        en: "agriculture has become more and more efficient",
        ru: "сельское хозяйство становится всё эффективнее"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
