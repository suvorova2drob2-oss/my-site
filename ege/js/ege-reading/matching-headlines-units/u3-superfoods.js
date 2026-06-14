/**
 * ЕГЭ Reading — Matching Headlines, юнит 3 (superfoods, маркетинг, рацион).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u3-superfoods",
    unitOrder: 3,
    title: "Unit 3 · Superfoods",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Superfoods are foods containing lots of vitamins, minerals, and antioxidants that are good for one's health. Superfoods are mostly plant-based but also include some fish and dairy. However, \"superfood\" is not a scientifically recognised term, with no set criteria to decide what is and is not a superfood. Superfoods do not belong to any food group. It is more of a marketing term for foods that have health benefits. Superfoods often have no more health benefits than other nutritionally useful foods.",
        evidence: {
          support: [
            "\"superfood\" is not a scientifically recognised term, with no set criteria to decide what is and is not a superfood.",
            "It is more of a marketing term for foods that have health benefits.",
            "Superfoods often have no more health benefits than other nutritionally useful foods."
          ],
          distract: [
            "foods containing lots of vitamins, minerals, and antioxidants that are good for one's health."
          ]
        }
      },
      {
        letter: "B",
        text:
          "Superfoods, like blueberries, salmon, and kale (a type of cabbage), are nutritionally very valuable. They contain antioxidants, which are thought to prevent cancer and other serious diseases. Though they might be quite expensive, they are useful indeed, and they are sold in most supermarkets. Some foods, like salmon, also have healthy fats, which can help to prevent heart disease. High-fibre foods, like kale, can promote good digestion and provide a sense of fullness, which can help in weight loss.",
        evidence: {
          support: [
            "are nutritionally very valuable.",
            "they are useful indeed,",
            "which are thought to prevent cancer and other serious diseases."
          ],
          distract: ["Though they might be quite expensive,"]
        }
      },
      {
        letter: "C",
        text:
          "Scientists say that the use of the term \"superfood\" is just a marketing tool, with no roots in academic research. Still, manufacturers rely heavily on marketing tricks to shape people's opinion about their products. Trying to change public view on the health benefits of macadamia nuts, for example, their manufacturers persuaded authorities to make a claim linking the consumption of macadamia nuts to a reduced risk of heart disease. The findings were not very impressive, but they worked for the macadamia nut industry.",
        evidence: {
          support: [
            "manufacturers rely heavily on marketing tricks to shape people's opinion about their products.",
            "their manufacturers persuaded authorities to make a claim linking the consumption of macadamia nuts to a reduced risk of heart disease.",
            "they worked for the macadamia nut industry."
          ],
          distract: ["with no roots in academic research."]
        }
      },
      {
        letter: "D",
        text:
          "Another general criticism of \"superfood\" is that, while the food itself might be healthy, the processing might not be. For example, when green tea is freshly brewed, it has several antioxidants. Commercially manufactured bottled green tea, however, is often made with a lot of sugar. Many kinds of \"super-juices\" squeezed from acai berry and pomegranate can also include large amounts of added sugar. So they are not as healthy as they may initially seem. This phenomenon is known as \"healthwashing\".",
        evidence: {
          support: [
            "while the food itself might be healthy, the processing might not be.",
            "So they are not as healthy as they may initially seem.",
            "This phenomenon is known as \"healthwashing\"."
          ],
          distract: [
            "when green tea is freshly brewed, it has several antioxidants."
          ]
        }
      },
      {
        letter: "E",
        text:
          "Eating foods that are packed with nutrients, as many so-called superfoods are, is certainly a good idea. However, the key to a healthy diet is to eat a variety of nutritious foods in the right quantities. When we label these foods as \"super\" and \"healthy\", people think they can eat them in unlimited quantities. But people have to be cautious of the amount of food they eat, because one can gain weight from eating too much healthy food. So, it is always better to eat everything in moderation.",
        evidence: {
          support: [
            "people think they can eat them in unlimited quantities.",
            "one can gain weight from eating too much healthy food.",
            "it is always better to eat everything in moderation."
          ],
          distract: [
            "Eating foods that are packed with nutrients, as many so-called superfoods are, is certainly a good idea."
          ]
        }
      },
      {
        letter: "F",
        text:
          "Superfoods may be a good step towards healthy eating. Besides, understanding the nutritional value of the food a person eats can be useful. However, there are lots of healthy foods out there to explore, even if no one is calling them \"super.\" Plenty of affordable foods that do not carry a \"superfood\" label are still nutritionally useful. Good examples are canned peas and carrots. Moreover, they can be more accessible to those people who have a low income or who have less access to fresh fruit and vegetables.",
        evidence: {
          support: [
            "Plenty of affordable foods that do not carry a \"superfood\" label are still nutritionally useful.",
            "Good examples are canned peas and carrots.",
            "they can be more accessible to those people who have a low income or who have less access to fresh fruit and vegetables."
          ],
          distract: ["Superfoods may be a good step towards healthy eating."]
        }
      },
      {
        letter: "G",
        text:
          "Research has shown that the ideal diet is the one that is mostly plant-based, with a wide variety of fruit, vegetables, whole grains, and healthy animal products. A healthy, balanced diet looks different for each person, as nutrition needs vary based on gender, height, weight, activity level, and many other factors. When thinking about what is \"healthy\" and \"balanced\" for an individual, there are many considerations. One has to think about taste preferences, nutrition needs, cooking ability, medical conditions, and budget.",
        evidence: {
          support: [
            "the ideal diet is the one that is mostly plant-based, with a wide variety of fruit, vegetables, whole grains, and healthy animal products.",
            "A healthy, balanced diet looks different for each person, as nutrition needs vary based on gender, height, weight, activity level, and many other factors.",
            "One has to think about taste preferences, nutrition needs, cooking ability, medical conditions, and budget."
          ],
          distract: [
            "When thinking about what is \"healthy\" and \"balanced\" for an individual, there are many considerations."
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "One's perfect diet" },
      { num: 2, text: "Not easy to buy" },
      { num: 3, text: "Is it always healthy?" },
      { num: 4, text: "Not only about quality" },
      { num: 5, text: "What's in a name?" },
      { num: 6, text: "Cheap but healthy" },
      { num: 7, text: "An image that works" },
      { num: 8, text: "Simply the best foods" }
    ],

    key: { A: 5, B: 8, C: 7, D: 3, E: 4, F: 6, G: 1 },
    extraHeadlineNum: 2,

    explanationsRu: {
      A:
        "Речь о том, что слово <strong>«суперфуд»</strong> — не научная категория, а <strong>маркетинг</strong>, и польза не обязательно больше, чем у других продуктов. Это заголовок <strong>5 — What's in a name?</strong>",
      B:
        "Акцент на <strong>питательной ценности</strong> ягод, рыбы, кудрявой капусты и на пользе для здоровья — картинка «<strong>лучшие из продуктов</strong>» (<strong>8</strong>). Цена упомянута, но не как главная мысль всего текста.",
      C:
        "<strong>Маркетинг</strong> и убеждение органов власти: сомнительные выводы, но <strong>сработало для отрасли</strong> — «<strong>образ</strong>, который работает» (<strong>7</strong>).",
      D:
        "Продукт сам по себе может быть полезным, а <strong>переработка и сахар</strong> — нет; <strong>healthwashing</strong>. Вопрос «всегда ли это здорово?» (<strong>3</strong>).",
      E:
        "Недостаточно выбрать «качественный» суперфуд: важны <strong>количество</strong> и <strong>умеренность</strong>, иначе можно поправиться — не только о <strong>качестве</strong> (<strong>4</strong>).",
      F:
        "<strong>Доступные</strong> продукты без ярлыка superfood (консервы и т. д.) тоже полезны — <strong>дёшево и здорово</strong> (<strong>6</strong>).",
      G:
        "<strong>Идеальный рацион</strong> и образ <strong>сбалансированного питания</strong> <strong>разный у каждого</strong> — масса индивидуальных факторов (<strong>1</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся заголовок <strong>2 — Not easy to buy</strong>: ни один абзац не посвящён главным образом <strong>трудностям покупки</strong> или доступности магазинов; в §B суперфуды дорогие, но <strong>продаются в супермаркетах</strong>, а в §F как раз подчёркивается <strong>доступность</strong> бюджетных вариантов.",

    quickPhrases: [
      { en: "plant-based", ru: "на растительной основе" },
      { en: "scientifically recognised term", ru: "термин, признанный наукой" },
      { en: "marketing term", ru: "маркетинговый термин / ярлык" },
      { en: "nutritionally useful", ru: "полезный с точки зрения питания" },
      { en: "nutritionally very valuable", ru: "очень ценен в плане питательности" },
      { en: "antioxidants", ru: "антиоксиданты" },
      { en: "heart disease", ru: "болезни сердца" },
      { en: "High-fibre foods", ru: "продукты с высоким содержанием клетчатки" },
      { en: "a sense of fullness", ru: "чувство сытости" },
      { en: "academic research", ru: "академические исследования" },
      { en: "marketing tricks", ru: "маркетинговые уловки" },
      { en: "shape people's opinion", ru: "формировать мнение людей" },
      { en: "processing", ru: "переработка (продукта)" },
      { en: "added sugar", ru: "добавленный сахар" },
      { en: "healthwashing", ru: "«зелёная отмывка» — под видом здорового продукта" },
      { en: "in the right quantities", ru: "в правильных количествах" },
      { en: "in unlimited quantities", ru: "в неограниченных количествах" },
      { en: "in moderation", ru: "умеренно; с мерой" },
      { en: "affordable foods", ru: "недорогие продукты" },
      { en: "canned peas and carrots", ru: "горошек и морковь консервированные" },
      { en: "low income", ru: "низкий доход" },
      { en: "whole grains", ru: "цельнозерновые (крупы, хлеб)" },
      { en: "activity level", ru: "уровень физической активности" },
      { en: "budget", ru: "бюджет (деньги на еду)" }
    ],

    tapPhrases: [
      {
        en: "However, \"superfood\" is not a scientifically recognised term, with no set criteria to decide what is and is not a superfood.",
        ru: "однако «суперфуд» — не научно закреплённый термин, нет критериев, что им является, а что нет"
      },
      {
        en: "It is more of a marketing term for foods that have health benefits.",
        ru: "это скорее маркетинговое название для продуктов с полезными свойствами"
      },
      {
        en: "Superfoods, like blueberries, salmon, and kale (a type of cabbage), are nutritionally very valuable.",
        ru: "такие суперфуды, как черника, лосось и кейл (вид капусты), очень ценны по составу"
      },
      {
        en: "They contain antioxidants, which are thought to prevent cancer and other serious diseases.",
        ru: "в них есть антиоксиданты, которым приписывают защиту от рака и других тяжёлых болезней"
      },
      {
        en: "manufacturers rely heavily on marketing tricks to shape people's opinion about their products",
        ru: "производители сильно полагаются на маркетинговые трюки, чтобы формировать мнение о своей продукции"
      },
      {
        en: "The findings were not very impressive, but they worked for the macadamia nut industry.",
        ru: "выводы были слабоваты, но сработали на пользу отрасли ореха макадамия"
      },
      {
        en: "while the food itself might be healthy, the processing might not be.",
        ru: "пока сам продукт может быть полезным, переработка — не обязательно"
      },
      {
        en: "Commercially manufactured bottled green tea, however, is often made with a lot of sugar.",
        ru: "но готовый бутилированный чай часто делают с кучей сахара"
      },
      {
        en: "So they are not as healthy as they may initially seem.",
        ru: "поэтому они не так здоровы, как может показаться на первый взгляд"
      },
      {
        en: "one can gain weight from eating too much healthy food",
        ru: "можно поправиться, даже если есть слишком много «здоровой» еды"
      },
      {
        en: "Plenty of affordable foods that do not carry a \"superfood\" label are still nutritionally useful.",
        ru: "множество недорогих продуктов без ярлыка superfood всё равно полезны по составу"
      },
      {
        en: "Moreover, they can be more accessible to those people who have a low income or who have less access to fresh fruit and vegetables.",
        ru: "к тому же они доступнее тем, у кого малый доход или мало доступа к свежим овощам и фруктам"
      },
      {
        en: "A healthy, balanced diet looks different for each person, as nutrition needs vary based on gender, height, weight, activity level, and many other factors.",
        ru: "здоровый сбалансированный рацион у каждого свой — потребности зависят от пола, роста, веса, активности и многого другого"
      }
    ],

    tapLexicon: [
      { en: "superfoods", ru: "«суперфуды»" },
      { en: "kale", ru: "кейл, листовая капуста" },
      { en: "salmon", ru: "лосось" },
      { en: "macadamia nuts", ru: "орех макадамия" },
      { en: "pomegranate", ru: "гранат (плод / сок)" },
      { en: "acai berry", ru: "ягода асаи" },
      { en: "brewed", ru: "заваренный (чай)" },
      { en: "manufacturers", ru: "производители" },
      { en: "authorities", ru: "органы власти, регуляторы" },
      { en: "criteria", ru: "критерии" },
      { en: "nutrients", ru: "питательные вещества" },
      { en: "digestion", ru: "пищеварение" },
      { en: "individual", ru: "конкретный человек, личность" },
      { en: "preferences", ru: "предпочтения (во вкусе)" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
