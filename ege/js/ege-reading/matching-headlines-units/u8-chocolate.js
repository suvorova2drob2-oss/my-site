/**
 * ЕГЭ Reading — Matching Headlines, юнит 8 (шоколад).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u8-chocolate",
    unitOrder: 8,
    title: "Unit 8 · Chocolate",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Chocolate is extracted from the fruit of the cacao tree, which grows exclusively in tropical climates. The cacao tree is native to Central and South America, but once European invaders discovered the delicacy in the 18th century, the popularity of chocolate took off, and farmers soon established plantations in other parts of the world. Today, Ghana, Côte d'Ivoire, Nigeria, Indonesia and Brazil account for around 80% of the world's cacao production. More than half of the chocolate we consume comes from West African countries.",
        evidence: {
          support: [
            "which grows exclusively in tropical climates.",
            "The cacao tree is native to Central and South America,",
            "Ghana, Côte d'Ivoire, Nigeria, Indonesia and Brazil account for around 80% of the world's cacao production."
          ],
          distract: [
            "once European invaders discovered the delicacy in the 18th century, the popularity of chocolate took off,"
          ]
        }
      },
      {
        letter: "B",
        text:
          "Historically, fine chocolate falls into three main categories: dark chocolate, milk chocolate and white chocolate. Dark chocolate is made with chocolate liquor, cocoa butter, lecithin, sugar and vanilla. Milk chocolate includes the same ingredients as dark chocolate plus milk fats and milk solids. White chocolate is made with the same ingredients as milk chocolate, except it does not include the chocolate liquor. The type of chocolate depends on what ingredients are present and the percentage of cocoa.",
        evidence: {
          support: [
            "falls into three main categories: dark chocolate, milk chocolate and white chocolate.",
            "White chocolate is made with the same ingredients as milk chocolate, except it does not include the chocolate liquor.",
            "The type of chocolate depends on what ingredients are present and the percentage of cocoa."
          ],
          distract: [
            "Dark chocolate is made with chocolate liquor, cocoa butter, lecithin, sugar and vanilla."
          ]
        }
      },
      {
        letter: "C",
        text:
          "For many years, physicians warned against eating too much chocolate — suggesting that its high fat content contributed to acne, caries, obesity, high blood pressure, heart disease and diabetes. However, in recent years, the discovery of antioxidant compounds in chocolate has changed this perception and stimulated research on its potential health benefits. Cocoa has healthy forms of dietary fat in it, and contains minerals important for human health, including potassium, phosphorus, copper, iron, zinc and magnesium.",
        evidence: {
          support: [
            "physicians warned against eating too much chocolate",
            "the discovery of antioxidant compounds in chocolate has changed this perception",
            "stimulated research on its potential health benefits."
          ],
          distract: [
            "suggesting that its high fat content contributed to acne, caries, obesity, high blood pressure, heart disease and diabetes."
          ]
        }
      },
      {
        letter: "D",
        text:
          "Cocoa contains high levels of flavonoids, chemicals in plants that are known for their health benefits in humans. Dark chocolate contains especially high amounts of flavonoids, which may be the reason why chocolate consumption has been associated with a decreased risk of heart disease in recent years, according to the 2013 review. Some recent studies have found that regular chocolate consumption is also associated with lower blood pressure, decreased stress levels, increased attention and quick reaction.",
        evidence: {
          support: [
            "Dark chocolate contains especially high amounts of flavonoids,",
            "a decreased risk of heart disease in recent years, according to the 2013 review.",
            "lower blood pressure, decreased stress levels, increased attention and quick reaction."
          ],
          distract: [
            "Cocoa contains high levels of flavonoids, chemicals in plants that are known for their health benefits in humans."
          ]
        }
      },
      {
        letter: "E",
        text:
          "Studies that have found beneficial health outcomes related to chocolate consumption have focused on the consumption of dark chocolate, which has less sugar and fat content than milk chocolate. In addition, the studies looked at moderate amounts of chocolate consumption. Like many foods, chocolate is healthiest when eaten in moderation. The sugars and fats added to chocolate make it high in calories, which may lead to weight gain. Many of the protective effects can be negated by overconsumption.",
        evidence: {
          support: [
            "chocolate is healthiest when eaten in moderation.",
            "make it high in calories, which may lead to weight gain.",
            "Many of the protective effects can be negated by overconsumption."
          ],
          distract: [
            "Studies that have found beneficial health outcomes related to chocolate consumption have focused on the consumption of dark chocolate,"
          ]
        }
      },
      {
        letter: "F",
        text:
          "Recently, an up-to-date type of chocolate has been invented — ruby chocolate. This variety of chocolate joined the list in 2017. Barry Callebaut, the world's largest cocoa processing company, developed the pink-hued chocolate by using a powder that is naturally extracted as cocoa beans are processed to make chocolate. So it is without any flavourings, or additives; it is purely coming out of the cocoa bean. According to its creators, ruby chocolate has a lighter flavour than milk chocolate and is not as sweet.",
        evidence: {
          support: [
            "an up-to-date type of chocolate has been invented — ruby chocolate.",
            "developed the pink-hued chocolate by using a powder that is naturally extracted",
            "ruby chocolate has a lighter flavour than milk chocolate and is not as sweet."
          ],
          distract: [
            "Barry Callebaut, the world's largest cocoa processing company,"
          ]
        }
      },
      {
        letter: "G",
        text:
          "It may be surprising but chocolate production can harm the environment. Farmers often clear forests to make room for cacao plantations. According to the World Wildlife Fund, about 70% of the Ivory Coast's illegal deforestation is related to cacao farming. One danger of deforestation is soil erosion, which can make cultivated land less fertile for cacao plants, creating a vicious cycle. Farmers and scientists are currently working to develop strategies to maintain safe and eco-friendly chocolate production.",
        evidence: {
          support: [
            "chocolate production can harm the environment.",
            "about 70% of the Ivory Coast's illegal deforestation is related to cacao farming.",
            "One danger of deforestation is soil erosion,"
          ],
          distract: [
            "Farmers and scientists are currently working to develop strategies to maintain safe and eco-friendly chocolate production."
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "Tasty varieties" },
      { num: 2, text: "Not always healthy" },
      { num: 3, text: "New colour and taste" },
      { num: 4, text: "Chocolate: toxic" },
      { num: 5, text: "Dark magic" },
      { num: 6, text: "Better than believed" },
      { num: 7, text: "Chocolate: nature risks" },
      { num: 8, text: "Where is chocolate from?" }
    ],

    key: { A: 8, B: 1, C: 6, D: 5, E: 2, F: 3, G: 7 },
    extraHeadlineNum: 4,

    explanationsRu: {
      A:
        "Какао-дерево, тропики, Америка, плантации, доля Ганы и др. — <strong>откуда шоколад</strong> (<strong>8</strong>).",
      B:
        "Три типа, состав, доля какао — <strong>виды на любой вкус</strong> (<strong>1</strong>).",
      C:
        "Раньше врачи <strong>пугали</strong>, теперь антиоксиданты и польза — <strong>лучше, чем думали</strong> (<strong>6</strong>).",
      D:
        "Флавоноиды именно в <strong>тёмном</strong>, сердце, давление, стресс — игра слов <strong>Dark magic</strong> (<strong>5</strong>).",
      E:
        "Умеренность, калории, <strong>переедание сводит пользу на нет</strong> — не всегда полезно (<strong>2</strong>).",
      F:
        "<strong>Ruby</strong>, розовый оттенок, другой вкус — <strong>новый цвет и вкус</strong> (<strong>3</strong>).",
      G:
        "Леса, <strong>вырубка</strong>, эрозия почвы — <strong>риски для природы</strong> (<strong>7</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся заголовок <strong>4 — Chocolate: toxic</strong>: в текстах нет главной мысли о <strong>ядовитости</strong> шоколада для человека (нет темы токсинов, смертельной дозы и т. п.).",

    quickPhrases: [
      { en: "cacao tree", ru: "какао-дерево" },
      { en: "plantations", ru: "плантации" },
      { en: "chocolate liquor", ru: "шоколадная масса (не алкоголь)" },
      { en: "cocoa butter", ru: "какао-масло" },
      { en: "lecithin", ru: "лецитин" },
      { en: "caries", ru: "кариес" },
      { en: "antioxidant compounds", ru: "антиоксидантные соединения" },
      { en: "flavonoids", ru: "флавоноиды" },
      { en: "in moderation", ru: "умеренно" },
      { en: "overconsumption", ru: "чрезмерное потребление" },
      { en: "pink-hued", ru: "розового оттенка" },
      { en: "additives", ru: "добавки, Е-ингредиенты" },
      { en: "deforestation", ru: "вырубка леса" },
      { en: "soil erosion", ru: "эрозия почвы" },
      { en: "vicious cycle", ru: "порочный круг" }
    ],

    tapPhrases: [
      {
        en: "The cacao tree is native to Central and South America,",
        ru: "какао родом из Центральной и Южной Америки"
      },
      {
        en: "Historically, fine chocolate falls into three main categories: dark chocolate, milk chocolate and white chocolate.",
        ru: "делят на три основных вида: тёмный, молочный и белый шоколад"
      },
      {
        en: "the discovery of antioxidant compounds in chocolate has changed this perception",
        ru: "антиоксиданты в шоколаде изменили это представление"
      },
      {
        en: "Dark chocolate contains especially high amounts of flavonoids,",
        ru: "в тёмном шоколаде особенно много флавоноидов"
      },
      {
        en: "Many of the protective effects can be negated by overconsumption.",
        ru: "защитный эффект может обнулиться при переедании"
      },
      {
        en: "Recently, an up-to-date type of chocolate has been invented — ruby chocolate.",
        ru: "недавно изобрели современный тип — рубиновый шоколад"
      },
      {
        en: "about 70% of the Ivory Coast's illegal deforestation is related to cacao farming.",
        ru: "около 70 % нелегальной вырубки Кот-д’Ивуара связано с какао-фермами"
      }
    ],

    tapLexicon: [
      { en: "cocoa", ru: "какао (продукт)" },
      { en: "delicacy", ru: "лакомство, изысканное блюдо" },
      { en: "invaders", ru: "завоеватели, колонисты" },
      { en: "deforestation", ru: "вырубка лесов" },
      { en: "flavourings", ru: "ароматизаторы" },
      { en: "negated", ru: "сведены на нет, отменены" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
