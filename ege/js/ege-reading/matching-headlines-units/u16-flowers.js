/**
 * ЕГЭ Reading — Matching Headlines, юнит 16 (цветы: выращивание, имена, опыление, покупки, цветение, домашние растения, символика).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u16-flowers",
    unitOrder: 16,
    title: "Unit 16 · Flowers",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Growing flowers is the activity and craft of growing plants, with a goal of creating a wonderful and amazing world around. Growing flowers is an admiration for many people, a dream for so many and a full-time job for some others who grow flower gardens for commercial purposes. The process of growing flowers requires a lot of patience, love and care, but the amazing result is worth trying. Growing a flower garden in particular is an exciting adventure indeed.",
        evidence: {
          support: [
            "The process of growing flowers requires a lot of patience, love and care,",
            "Growing flowers is the activity and craft of growing plants, with a goal of creating a wonderful and amazing world around.",
            "but the amazing result is worth trying.",
            "full-time job for some others who grow flower gardens for commercial purposes."
          ],
          distract: [
            "Growing flowers is an admiration for many people, a dream for so many",
            "Growing a flower garden in particular is an exciting adventure indeed."
          ]
        }
      },
      {
        letter: "B",
        text:
          "Many flowers have descriptive names or derive their names from ancient legends. For example, when squeezed, the blossom of the snapdragon looks like a dragon opening its jaws. The narcissus is named for the Greek myth of Narcissus and Echo. NamesofFlowers.net features alphabetized lists of flower names. The website also provides subgroups of flowers such as tropical, spring, summer and wedding flowers, and also alphabetized lists of flowers by colour categories.",
        evidence: {
          support: [
            "Many flowers have descriptive names or derive their names from ancient legends.",
            "when squeezed, the blossom of the snapdragon looks like a dragon opening its jaws.",
            "The narcissus is named for the Greek myth of Narcissus and Echo.",
            "NamesofFlowers.net features alphabetized lists of flower names."
          ],
          distract: [
            "The website also provides subgroups of flowers such as tropical, spring, summer and wedding flowers, and also alphabetized lists of flowers by colour categories."
          ]
        }
      },
      {
        letter: "C",
        text:
          "The purpose of a flower is to attract pollinators to a plant so that the plant creates seeds. Bright colours, strong scents and sweet nectar all work together to attract birds, bees, ants, flies and other insects to move pollen from one flower to another. In some parts of the world small mammals and lizards also function as pollinators. The particular colour, pattern or scent of a flower attracts the appropriate pollinators. Some flowers produce pollen that is carried by the wind to other flowers.",
        evidence: {
          support: [
            "The purpose of a flower is to attract pollinators to a plant so that the plant creates seeds.",
            "Bright colours, strong scents and sweet nectar all work together to attract birds, bees, ants, flies",
            "small mammals and lizards also function as pollinators.",
            "The particular colour, pattern or scent of a flower attracts the appropriate pollinators."
          ],
          distract: [
            "Some flowers produce pollen that is carried by the wind to other flowers."
          ]
        }
      },
      {
        letter: "D",
        text:
          "Flowers are a great gift idea for loved ones, and it has never been easier to buy flowers for friends and family, near and far, thanks to a large number of online delivery services. Whether a person is wishing someone a happy birthday, sending sympathy or celebrating a big life moment like the birth of a baby or a wedding engagement, there are plenty of floral arrangement options to choose from online. Most online floral companies organize their arrangements by category.",
        evidence: {
          support: [
            "it has never been easier to buy flowers for friends and family, near and far, thanks to a large number of online delivery services.",
            "Whether a person is wishing someone a happy birthday, sending sympathy or celebrating a big life moment like the birth of a baby or a wedding engagement,",
            "there are plenty of floral arrangement options to choose from online.",
            "Most online floral companies organize their arrangements by category."
          ],
          distract: [
            "Flowers are a great gift idea for loved ones,"
          ]
        }
      },
      {
        letter: "E",
        text:
          "Most flowers bloom in spring or summer. The specific timing of each bloom depends on the weather pattern in each area. Local florists or gardens are good sources of information on the blooming patterns of certain flowers in any particular climate. A number of online guides to flowers and plant life in different cities and parks are available to those interested in observing the local trends. Generally, spring-blooming flowers are a welcome sight as they mark the arrival of warm weather.",
        evidence: {
          support: [
            "Most flowers bloom in spring or summer.",
            "The specific timing of each bloom depends on the weather pattern in each area.",
            "Local florists or gardens are good sources of information on the blooming patterns of certain flowers in any particular climate.",
            "A number of online guides to flowers and plant life in different cities and parks are available to those interested in observing the local trends."
          ],
          distract: [
            "Generally, spring-blooming flowers are a welcome sight as they mark the arrival of warm weather."
          ]
        }
      },
      {
        letter: "F",
        text:
          "Some good flowering indoor plants include orchids, desert cacti and peace lilies. Orchids are the most popular blooming houseplant. There are thousands of varieties and hybrids of orchids, including those in every colour of the rainbow. Orchids need a moderate amount of watering and re-bloom, making it a long-lasting plant. Peace lilies are another option with folded white flowers and glossy green leaves. It is a tropical plant that does well with some warmth and humidity indoors.",
        evidence: {
          support: [
            "Some good flowering indoor plants include orchids, desert cacti and peace lilies.",
            "Orchids are the most popular blooming houseplant.",
            "Orchids need a moderate amount of watering and re-bloom, making it a long-lasting plant.",
            "Peace lilies are another option with folded white flowers and glossy green leaves.",
            "It is a tropical plant that does well with some warmth and humidity indoors."
          ],
          distract: [
            "including those in every colour of the rainbow.",
            "There are thousands of varieties and hybrids of orchids,"
          ]
        }
      },
      {
        letter: "G",
        text:
          "Not only are flowers beautiful additions to our homes, weddings and special events, they also have different meanings attached to them. Flower language is the art of flower symbolism. Floriography is another name for the language of flowers. Within the art of floriography, every flower carries its own special meaning, according to its variety and colour. Some flowers even take on a new meaning dependent on the number gifted, for example, a single red rose denotes \"love at first sight\".",
        evidence: {
          support: [
            "they also have different meanings attached to them.",
            "Flower language is the art of flower symbolism.",
            "Floriography is another name for the language of flowers.",
            "every flower carries its own special meaning, according to its variety and colour."
          ],
          distract: [
            "Not only are flowers beautiful additions to our homes, weddings and special events,"
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "What's in a name?" },
      { num: 2, text: "A hobby for people" },
      { num: 3, text: "Beautiful inhabitants" },
      { num: 4, text: "Creating beauty isn't easy" },
      { num: 5, text: "What does it mean?" },
      { num: 6, text: "Shopping for flowers" },
      { num: 7, text: "An important function" },
      { num: 8, text: "The best flower period" }
    ],

    key: { A: 4, B: 1, C: 7, D: 6, E: 8, F: 3, G: 5 },
    extraHeadlineNum: 2,

    explanationsRu: {
      A:
        "Ремесло выращивания и главный акцент: нужны <strong>терпение, любовь и забота</strong> — красота достигается трудом (<strong>4 — Creating beauty isn't easy</strong>). Вводная про «мечту многих» может тянуть к <strong>2</strong>, но заголовок всего абзаца ближе к <strong>цене усилий</strong>.",
      B:
        "Легенды, названия, сайты со списками имён — вопрос <strong>прозвищ и этимологии</strong> (<strong>1</strong>).",
      C:
        "Назначение цветка — <strong>опыление</strong> и семена; приспособления под опылителей — это <strong>функция</strong> (<strong>7</strong>).",
      D:
        "<strong>Онлайн-доставка</strong>, каталоги букетов — покупка цветов через интернет (<strong>6</strong>).",
      E:
        "Когда цветёт, зависимость от климата, гайды по сезону цветения — <strong>лучший период / время цветения</strong> (<strong>8</strong>).",
      F:
        "<strong>Комнатные</strong> цветущие растения в интерьере — живые «<strong>обитатели</strong>» дома (<strong>3</strong>).",
      G:
        "<strong>Язык цветов</strong>, floriography, значение сорта и цвета — <strong>что это значит?</strong> (<strong>5</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся <strong>2 — A hobby for people</strong>: признак хобби в <strong>A</strong> есть, но абзац ведёт к идее <strong>сложного процесса и усилий</strong> (<strong>4</strong>); отдельного текста про цветоводство как массовое хобби без акцента на труд здесь нет.",

    quickPhrases: [
      { en: "activity and craft", ru: "деятельность и ремесло" },
      { en: "commercial purposes", ru: "коммерческие цели" },
      { en: "full-time job", ru: "работа на полный день" },
      { en: "patience", ru: "терпение" },
      { en: "worth trying", ru: "стоит попробовать" },
      { en: "descriptive names", ru: "описательные названия" },
      { en: "ancient legends", ru: "древние легенды" },
      { en: "blossom", ru: "цветок, цветение" },
      { en: "derive their names from", ru: "происходят от (имён)" },
      { en: "snapdragon", ru: "львиный зев (цветок)" },
      { en: "narcissus", ru: "нарцисс" },
      { en: "alphabetized lists", ru: "списки по алфавиту" },
      { en: "subgroups", ru: "подгруппы, категории" },
      { en: "colour categories", ru: "категории по цвету" },
      { en: "pollinators", ru: "опылители" },
      { en: "creates seeds", ru: "образует семена" },
      { en: "nectar", ru: "нектар" },
      { en: "pollen", ru: "пыльца" },
      { en: "pattern", ru: "узор (на лепестке)" },
      { en: "delivery services", ru: "службы доставки" },
      { en: "near and far", ru: "рядом и далеко (географически)" },
      { en: "floral arrangement", ru: "цветочная композиция, букет" },
      { en: "wedding engagement", ru: "помолвка (обручение)" },
      { en: "blooming patterns", ru: "закономерности цветения" },
      { en: "local trends", ru: "местные тенденции (в природе)" },
      { en: "spring-blooming", ru: "цветущие весной" },
      { en: "flower garden", ru: "цветник, сад из цветов" },
      { en: "houseplant", ru: "комнатное растение" },
      { en: "re-bloom", ru: "цветёт повторно" },
      { en: "long-lasting", ru: "долговечный (о растении)" },
      { en: "peace lily", ru: "спатифиллум (peace lily)" },
      { en: "folded white flowers", ru: "складные белые цветки" },
      { en: "tropical plant", ru: "тропическое растение" },
      { en: "symbolism", ru: "символика" },
      { en: "Floriography", ru: "флориография (язык цветов)" },
      { en: "gifted", ru: "подаренные (цветы)" },
      { en: "love at first sight", ru: "любовь с первого взгляда" },
      { en: "hybrids", ru: "гибриды" },
      { en: "humidity", ru: "влажность воздуха" },
      { en: "weather pattern", ru: "погодный режим, климат" },
      { en: "sympathy", ru: "соболезнование (повод для букета)" },
      { en: "observing", ru: "наблюдение (за цветением)" },
      {
        en: "Growing flowers is an admiration for many people, a dream for so many",
        ru: "выращивание цветов — восхищение для многих и мечта для других"
      },
      {
        en: "but the amazing result is worth trying",
        ru: "удивительный результат того стоит"
      },
      {
        en: "The purpose of a flower is to attract pollinators",
        ru: "назначение цветка — привлечь опылителей"
      },
      {
        en: "Bright colours, strong scents and sweet nectar all work together",
        ru: "яркие краски, сильные ароматы и сладкий нектар действуют вместе"
      },
      {
        en: "carried by the wind to other flowers",
        ru: "переносимая ветром к другим цветам (пыльца)"
      },
      {
        en: "wishing someone a happy birthday, sending sympathy or celebrating a big life moment",
        ru: "поздравить с днём рождения, выразить соболезнование или отметить важное событие"
      },
      {
        en: "there are plenty of floral arrangement options to choose from online",
        ru: "онлайн можно выбрать множество вариантов букетов"
      },
      {
        en: "online guides to flowers and plant life in different cities and parks",
        ru: "онлайн-гайды по растениям в городах и парках"
      },
      {
        en: "Generally, spring-blooming flowers are a welcome sight",
        ru: "весенние цветы радуют глаз как предвестники тепла"
      },
      {
        en: "including those in every colour of the rainbow",
        ru: "включая оттенки всего спектра"
      },
      {
        en: "There are thousands of varieties and hybrids of orchids",
        ru: "тысячи сортов и гибридов орхидей"
      },
      {
        en: "beautiful additions to our homes, weddings and special events",
        ru: "красивое украшение домов, свадеб и торжеств"
      },
      {
        en: "take on a new meaning dependent on the number gifted",
        ru: "получают новое значение в зависимости от числа подаренных цветов"
      },
      {
        en: "a single red rose denotes \"love at first sight\"",
        ru: "одна красная роза означает «любовь с первого взгляда»"
      },
      {
        en: "derive their names from ancient legends",
        ru: "имена происходят из древних легенд"
      },
      {
        en: "alphabetized lists of flower names",
        ru: "списки названий цветов по алфавиту"
      },
      {
        en: "subgroups of flowers such as tropical, spring, summer and wedding flowers",
        ru: "подгруппы: тропические, весенние, летние, свадебные цветы"
      },
      {
        en: "small mammals and lizards also function as pollinators",
        ru: "мелкие млекопитающие и ящерицы тоже работают опылителями"
      },
      {
        en: "does well with some warmth and humidity indoors",
        ru: "хорошо себя чувствует при тепле и влажности в помещении"
      },
      {
        en: "every flower carries its own special meaning, according to its variety and colour",
        ru: "у каждого цветка своё значение — по виду и цвету"
      },
      {
        en: "Within the art of floriography",
        ru: "в рамках искусства флориографии"
      }
    ],

    tapPhrases: [
      {
        en: "Growing flowers is the activity and craft of growing plants, with a goal of creating a wonderful and amazing world around.",
        ru: "выращивание цветов — занятие и ремесло: создать красивый мир вокруг"
      },
      {
        en: "The process of growing flowers requires a lot of patience, love and care,",
        ru: "этот процесс требует терпения, любви и заботы"
      },
      {
        en: "when squeezed, the blossom of the snapdragon looks like a dragon opening its jaws.",
        ru: "если сжать цветок львиного зева — как будто дракон открывает пасть"
      },
      {
        en: "Many flowers have descriptive names or derive their names from ancient legends.",
        ru: "имена описательные или из древних легенд"
      },
      {
        en: "The purpose of a flower is to attract pollinators to a plant so that the plant creates seeds.",
        ru: "цель цветка — привлечь опылителей ради семян"
      },
      {
        en: "Bright colours, strong scents and sweet nectar all work together to attract birds, bees, ants, flies",
        ru: "яркость, запах и нектар совместно зовут птиц, пчёл, муравьёв, мух…"
      },
      {
        en: "Local florists or gardens are good sources of information on the blooming patterns",
        ru: "флористы и сады — источник сведений о том, когда что цветёт"
      },
      {
        en: "it has never been easier to buy flowers for friends and family, near and far, thanks to a large number of online delivery services.",
        ru: "онлайн-доставка упрощает покупку цветов для близких где угодно"
      },
      {
        en: "Most online floral companies organize their arrangements by category.",
        ru: "магазины группируют букеты по категориям повода"
      },
      {
        en: "Some good flowering indoor plants include orchids, desert cacti and peace lilies.",
        ru: "удачные комнатные цветущие растения — орхидеи, кактусы, спатифиллумы"
      },
      {
        en: "Orchids need a moderate amount of watering and re-bloom, making it a long-lasting plant.",
        ru: "орхидеям нужен умеренный полив, они снова цветут и живут долго"
      },
      {
        en: "Floriography is another name for the language of flowers.",
        ru: "флориография — другое название «языка цветов»"
      },
      {
        en: "every flower carries its own special meaning, according to its variety and colour.",
        ru: "у каждого цветка своё значение в зависимости от вида и цвета"
      },
      {
        en: "a single red rose denotes \"love at first sight\"",
        ru: "одна красная роза означает «любовь с первого взгляда»"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
