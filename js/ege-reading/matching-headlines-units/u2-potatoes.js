/**
 * ЕГЭ Reading — Matching Headlines, юнит 2 (картофель: польза, вред, история).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u2-potatoes-nutrition",
    unitOrder: 2,
    title: "Unit 2 · Potatoes",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Facts about potatoes show that it can be a very important part of a balanced diet if prepared in the right ways. Baking a potato is the best way to prepare it, as baking, or microwaving, causes the lowest amount of nutrients to be lost. The other right way to prepare a potato is through steaming, which causes less nutrient loss than boiling. However one prepares a potato, it is highly recommended to eat the skin. The potato skin contains a lot of nutrients, including the majority of the vegetable's useful fibre.",
        evidence: {
          support: [
            "Baking a potato is the best way to prepare it",
            "The other right way to prepare a potato is through steaming",
            "it is highly recommended to eat the skin."
          ],
          distract: [
            "it can be a very important part of a balanced diet if prepared in the right ways"
          ]
        }
      },
      {
        letter: "B",
        text:
          "Today, potatoes are the fourth most consumed vegetable crop in the world, behind rice, wheat, and corn, followed by tomatoes. Potatoes have contributed to the human diet for thousands of years, first in the Andes of South America and then in the rest of the world. Historically, people did not store potatoes. Later on, as the technology of freezing the vegetables developed, people started to produce processed potatoes. And since the 1950s, French fries and hash browns have grown extremely popular.",
        evidence: {
          support: [
            "Potatoes have contributed to the human diet for thousands of years, first in the Andes of South America and then in the rest of the world.",
            "Historically, people did not store potatoes.",
            "And since the 1950s, French fries and hash browns have grown extremely popular."
          ],
          distract: [
            "French fries and hash browns have grown extremely popular."
          ]
        }
      },
      {
        letter: "C",
        text:
          "Potatoes are often thought of as comfort food — richly mashed with butter and sour cream or fried in vegetable oil. But when prepared in these ways, they can lead to weight gain, diabetes, and heart disease. In fact, a study published in 2017 found that people who ate fried potatoes twice a week saw an increased risk of heart attacks. Unfortunately, some of the most popular ways of cooking potatoes tend to make the vegetable increasingly unhealthy. Though potatoes are not necessarily bad for health.",
        evidence: {
          support: [
            "they can lead to weight gain, diabetes, and heart disease",
            "people who ate fried potatoes twice a week saw an increased risk of heart attacks",
            "some of the most popular ways of cooking potatoes tend to make the vegetable increasingly unhealthy."
          ],
          distract: ["Though potatoes are not necessarily bad for health."]
        }
      },
      {
        letter: "D",
        text:
          "Potatoes are full of phytonutrients, which are organic components of plants that are thought to promote health. Phytonutrients in potatoes include carotenoids, flavonoids, and caffeic acid. The vitamin C in potatoes acts as an antioxidant. These substances may prevent or delay some types of cell damage. They may also help with heart health, blood pressure, and even cancer prevention. The largest health benefit offered by potatoes is how they can help with digestion due to their high fibre content.",
        evidence: {
          support: [
            "The vitamin C in potatoes acts as an antioxidant.",
            "They may also help with heart health, blood pressure, and even cancer prevention.",
            "their high fibre content."
          ],
          distract: [
            "organic components of plants that are thought to promote health"
          ]
        }
      },
      {
        letter: "E",
        text:
          "Doctors do not recommend a high potato consumption diet because it is almost impossible to get all necessary amino acids, vitamins, and minerals from one food. A mix of white and sweet potatoes would, however, help one to have a balanced diet. Purple potatoes are especially good sources of phytonutrients and antioxidants. Six to eight small purple potatoes twice a day help to lower blood pressure and the risk of heart disease. Nevertheless, one's health would suffer from eating nothing but potatoes.",
        evidence: {
          support: [
            "it is almost impossible to get all necessary amino acids, vitamins, and minerals from one food",
            "A mix of white and sweet potatoes would, however, help one to have a balanced diet.",
            "one's health would suffer from eating nothing but potatoes."
          ],
          distract: [
            "Purple potatoes are especially good sources of phytonutrients and antioxidants."
          ]
        }
      },
      {
        letter: "F",
        text:
          "If the eyes of a potato are not sprouting, they can be eaten. If they are sprouting, it is recommended to cut off the eyes and their sprouts before eating the potato. Potato stems, branches, leaves, and fruits are poisonous, containing dangerous chemicals, for example, solanine. Solanine is poisonous, even in small amounts. Poison is also found in green potatoes. The vegetables turn green if they have had too much exposure to light. One should never eat potatoes which are spoilt or green below the skin.",
        evidence: {
          support: [
            "Solanine is poisonous, even in small amounts.",
            "Poison is also found in green potatoes.",
            "One should never eat potatoes which are spoilt or green below the skin."
          ],
          distract: ["If the eyes of a potato are not sprouting, they can be eaten."]
        }
      },
      {
        letter: "G",
        text:
          "Potatoes are an important vegetable, far more important to human history than, for example, broccoli. Given their importance, it is interesting to know how often potatoes are mentioned in creative writing. Food may be considered less important than themes such as love, memory, or morality. However, food is an important part of human culture, even usual food like the potato. Potatoes and their consumption have been featured in visual art, such as the famous painting by Vincent Van Gogh.",
        evidence: {
          support: [
            "how often potatoes are mentioned in creative writing",
            "Potatoes and their consumption have been featured in visual art",
            "the famous painting by Vincent Van Gogh."
          ],
          distract: [
            "far more important to human history than, for example, broccoli"
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "Useful indeed" },
      { num: 2, text: "Variety is the best" },
      { num: 3, text: "Tracing its history" },
      { num: 4, text: "Who made it popular?" },
      { num: 5, text: "Really toxic?" },
      { num: 6, text: "Healthy cooking" },
      { num: 7, text: "An artistic vegetable" },
      { num: 8, text: "Tasty but harmful" }
    ],

    key: { A: 6, B: 3, C: 8, D: 1, E: 2, F: 5, G: 7 },
    extraHeadlineNum: 4,

    explanationsRu: {
      A:
        "Главная мысль — <strong>как готовить</strong>, чтобы <strong>сохранить пользу</strong> (запекание, микроволновка, пар, <strong>кожура</strong>). Это заголовок <strong>6 — Healthy cooking</strong>, а не общее «овощ полезен» (это ближе к другому абзацу).",
      B:
        "Текст ведёт от <strong>Анд</strong> через тысячелетия к <strong>хранению и переработке</strong> и к моде на фри — это <strong>история культуры картофеля</strong> (<strong>3</strong>). Заголовок про того, <strong>кто</strong> раскрутил популярность, здесь не раскрыт.",
      C:
        "<strong>Комфортная еда</strong>, жир и <strong>жарка</strong> — риски для веса и сердца, исследование про фри. Идея «вкусно, но вредно» (<strong>8</strong>).",
      D:
        "Перечисляются <strong>вещества и эффекты для здоровья</strong> (антиоксиданты, давление, клетки, пищеварение) — ответ на «<strong>полезен ли</strong>» в смысле пользы (<strong>1</strong>).",
      E:
        "Нельзя питаться <strong>только одним продуктом</strong>; нужна <strong>смесь сортов</strong> и баланс — <strong>разнообразие</strong> (<strong>2</strong>).",
      F:
        "Акцент на <strong>ядовитости</strong> соланина, <strong>зелёных</strong> клубней и запрете есть испорченное — заголовок про <strong>токсичность</strong> (<strong>5</strong>).",
      G:
        "<strong>Художественная литература</strong> и <strong>картина Ван Гога</strong> — картофель в <strong>искусстве</strong> (<strong>7</strong>), а не просто «важен в истории»."
    },

    extraExplainRu:
      "Лишним остаётся заголовок <strong>4 — Who made it popular?</strong>: ни в одном абзаце нет главной идеи о том, <strong>кто именно</strong> сделал картофель (или блюда из него) популярными; в §B лишь констатация популярности фри, без «виновников».",

    quickPhrases: [
      { en: "a balanced diet", ru: "сбалансированный рацион" },
      { en: "prepared in the right ways", ru: "приготовленный правильными способами" },
      { en: "Baking a potato is the best way", ru: "запечь клубень — лучший способ" },
      { en: "the lowest amount of nutrients to be lost", ru: "минимум потери питательных веществ" },
      { en: "nutrient loss", ru: "потеря / утрата нутриентов" },
      { en: "through steaming", ru: "на пару (способ приготовления)" },
      { en: "highly recommended", ru: "настоятельно рекомендуется" },
      { en: "useful fibre", ru: "полезная клетчатка" },
      { en: "the fourth most consumed vegetable crop", ru: "четвёртая по потреблению овощная культура" },
      { en: "contributed to the human diet", ru: "вошли в рацион людей / кормили человечество" },
      { en: "Historically", ru: "исторически, в прошлом" },
      { en: "processed potatoes", ru: "переработанный картофель (продукты)" },
      { en: "grown extremely popular", ru: "стали чрезвычайно популярными" },
      { en: "comfort food", ru: "еда «для души», успокаивающая" },
      { en: "mashed with butter", ru: "пюре со сливочным маслом" },
      { en: "weight gain", ru: "набор веса" },
      { en: "heart attacks", ru: "инфаркты, приступы сердца" },
      { en: "increasingly unhealthy", ru: "всё более нездоровым" },
      { en: "phytonutrients", ru: "фитонутриенты (соединения из растений)" },
      { en: "acts as an antioxidant", ru: "работает как антиоксидант" },
      { en: "cell damage", ru: "повреждение клеток" },
      { en: "blood pressure", ru: "артериальное давление" },
      { en: "cancer prevention", ru: "профилактика рака" },
      { en: "high fibre content", ru: "высокое содержание клетчатки" },
      { en: "amino acids", ru: "аминокислоты" },
      { en: "a high potato consumption diet", ru: "диета с большим потреблением картофеля" },
      { en: "sweet potatoes", ru: "батат, «сладкий картофель»" },
      { en: "lower blood pressure", ru: "снижать давление" },
      { en: "eating nothing but potatoes", ru: "есть только картофель, нищая монодиета" },
      { en: "sprouting", ru: "прорастание (росточки)" },
      { en: "solanine", ru: "соланин (ядовитое вещество)" },
      { en: "green potatoes", ru: "позеленевший картофель" },
      { en: "exposure to light", ru: "воздействие света (освещение)" },
      { en: "creative writing", ru: "художественная проза/поэзия; творческое письмо" },
      { en: "visual art", ru: "изобразительное искусство" },
      { en: "human culture", ru: "человеческая культура" }
    ],

    tapPhrases: [
      {
        en: "Facts about potatoes show that it can be a very important part of a balanced diet if prepared in the right ways",
        ru: "факты о картофеле показывают: при правильном приготовлении он может быть важной частью сбалансированного рациона"
      },
      {
        en: "Baking a potato is the best way to prepare it, as baking, or microwaving, causes the lowest amount of nutrients to be lost",
        ru: "запечь клубень — лучший способ: при запекании или СВЧ теряется меньше всего питательных веществ"
      },
      {
        en: "The other right way to prepare a potato is through steaming, which causes less nutrient loss than boiling",
        ru: "другой верный способ — на пару: при этом теряется меньше полезного, чем при варке"
      },
      {
        en: "However one prepares a potato, it is highly recommended to eat the skin",
        ru: "как бы ни готовили, настоятельно советуют есть кожуру"
      },
      {
        en: "The potato skin contains a lot of nutrients, including the majority of the vegetable's useful fibre",
        ru: "в кожице много нутриентов, в том числе большая часть полезной клетчатки овоща"
      },
      {
        en: "Potatoes have contributed to the human diet for thousands of years, first in the Andes of South America and then in the rest of the world",
        ru: "картофель тысячи лет в рационе — сначала в Андах, потом по всему миру"
      },
      {
        en: "Historically, people did not store potatoes",
        ru: "раньше картофель не хранили (таков был быт)"
      },
      {
        en: "as the technology of freezing the vegetables developed, people started to produce processed potatoes",
        ru: "с развитием заморозки овощей начали делать переработанный картофель"
      },
      {
        en: "since the 1950s, French fries and hash browns have grown extremely popular",
        ru: "с 1950-х картофель фри и драники стали очень популярны"
      },
      {
        en: "Potatoes are often thought of as comfort food — richly mashed with butter and sour cream or fried in vegetable oil",
        ru: "картофель часто считают «утешительной едой» — густое пюре со сливками и маслом или жарка в масле"
      },
      {
        en: "a study published in 2017 found that people who ate fried potatoes twice a week saw an increased risk of heart attacks",
        ru: "исследование 2017: те, кто ел жареный картофель дважды в неделю, чаще рисковали инфарктами"
      },
      {
        en: "some of the most popular ways of cooking potatoes tend to make the vegetable increasingly unhealthy",
        ru: "распространённые способы приготовления часто делают овощ всё менее здоровым"
      },
      {
        en: "Potatoes are full of phytonutrients, which are organic components of plants that are thought to promote health",
        ru: "в картофеле много фитонутриентов — природных соединений растений, которым приписывают пользу"
      },
      {
        en: "These substances may prevent or delay some types of cell damage",
        ru: "эти вещества могут предотвращать или отсрочить некоторые повреждения клеток"
      },
      {
        en: "The largest health benefit offered by potatoes is how they can help with digestion due to their high fibre content",
        ru: "главная польза — помощь пищеварению за счёт большого содержания клетчатки"
      },
      {
        en: "A mix of white and sweet potatoes would, however, help one to have a balanced diet",
        ru: "смесь белого и батата, напротив, помогает сбалансировать рацион"
      },
      {
        en: "Nevertheless, one's health would suffer from eating nothing but potatoes",
        ru: "однако здоровье пострадает, если есть только картофель"
      },
      {
        en: "Potato stems, branches, leaves, and fruits are poisonous, containing dangerous chemicals, for example, solanine",
        ru: "стебли, ветви, листья и плоды картофеля ядовиты — в них, например, соланин"
      },
      {
        en: "One should never eat potatoes which are spoilt or green below the skin",
        ru: "испорченный или зелёный под кожурой картофель есть нельзя"
      },
      {
        en: "how often potatoes are mentioned in creative writing",
        ru: "как часто картофель упоминают в художественной литературе"
      },
      {
        en: "Potatoes and their consumption have been featured in visual art, such as the famous painting by Vincent Van Gogh",
        ru: "употребление картофеля отражали в изобразительном искусстве, например на известной картине Ван Гога"
      }
    ],

    tapLexicon: [
      { en: "potatoes", ru: "картофель (мн. ч.)" },
      { en: "potato", ru: "клубень картофеля" },
      { en: "baking", ru: "запекание" },
      { en: "microwaving", ru: "приготовление в микроволновке" },
      { en: "steaming", ru: "готовка на пару" },
      { en: "boiling", ru: "варка" },
      { en: "nutrients", ru: "питательные вещества" },
      { en: "crop", ru: "урожай; сельхозкультура" },
      { en: "Andes", ru: "Анды (горы)" },
      { en: "frozen", ru: "замороженный (в т. ч. техника freezing)" },
      { en: "fried", ru: "жареный" },
      { en: "diabetes", ru: "диабет" },
      { en: "antioxidant", ru: "антиоксидант" },
      { en: "flavonoids", ru: "флавоноиды" },
      { en: "fibre", ru: "клетчатка (брит. orthography)" },
      { en: "vitamins", ru: "витамины" },
      { en: "minerals", ru: "минералы" },
      { en: "purple", ru: "фиолетовый (о сорте)" },
      { en: "poisonous", ru: "ядовитый" },
      { en: "spoilt", ru: "испорченный" },
      { en: "broccoli", ru: "брокколи" },
      { en: "morality", ru: "мораль (тема произведения)" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
