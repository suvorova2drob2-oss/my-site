/**
 * ЕГЭ Reading — Matching Headlines, юнит 7 (коралловые рифы).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u7-coral-reefs",
    unitOrder: 7,
    title: "Unit 7 · Coral reefs",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Coral reefs are large underwater structures composed of the skeletons of coral. There are hundreds of different species of coral. Coral reefs have a surprising array of shapes and colours, ranging from round, folded brain corals — named for their resemblance to a human brain — to tall, elegant sea whips and sea fans that look like brightly coloured trees or plants. Fringing reefs are the most commonly seen coral reefs, and they grow near coastlines. Barrier reefs are separated from the coastlines by deeper, wider lagoons.",
        evidence: {
          support: [
            "Coral reefs have a surprising array of shapes and colours,",
            "brain corals — named for their resemblance to a human brain",
            "Fringing reefs are the most commonly seen coral reefs, and they grow near coastlines."
          ],
          distract: [
            "Coral reefs are large underwater structures composed of the skeletons of coral."
          ]
        }
      },
      {
        letter: "B",
        text:
          "Corals are found all over the world's oceans, from the Aleutian Islands off the coast of Alaska to the warm tropical waters of the Caribbean Sea. The biggest coral reefs are found in the clear, shallow waters of the tropics and subtropics. The largest of these coral reef systems is the Great Barrier Reef in Australia. It is more than 2,400 kilometres long. Scientists have explored only about 20 percent of the ocean's floor, and they continue to find previously unknown coral reefs that have likely existed for hundreds of years.",
        evidence: {
          support: [
            "from the Aleutian Islands off the coast of Alaska to the warm tropical waters of the Caribbean Sea.",
            "Scientists have explored only about 20 percent of the ocean's floor,",
            "they continue to find previously unknown coral reefs that have likely existed for hundreds of years."
          ],
          distract: [
            "The largest of these coral reef systems is the Great Barrier Reef in Australia."
          ]
        }
      },
      {
        letter: "C",
        text:
          "The corals that build reefs are known as hard or reef-building corals. Soft corals, such as sea fans and sea whips, do not produce reefs. The calcium carbonate that is created by hard corals provides a foundation for baby corals to settle upon. And if the local threats to coral reefs are limited, then the corals will build up over time and create a healthy, vibrant coral reef. Other types of animals and plants also contribute to the structure of reefs. For example, algae, seaweed, and sponges add to the architecture of coral reefs.",
        evidence: {
          support: [
            "The calcium carbonate that is created by hard corals provides a foundation for baby corals to settle upon.",
            "the corals will build up over time and create a healthy, vibrant coral reef.",
            "algae, seaweed, and sponges add to the architecture of coral reefs."
          ],
          distract: [
            "Soft corals, such as sea fans and sea whips, do not produce reefs."
          ]
        }
      },
      {
        letter: "D",
        text:
          "The largest coral reef in the world, the Great Barrier Reef, is home to at least 400 individual species of coral and thousands of different species of fish, molluscs, sea snakes, sea turtles, whales, dolphins, birds and more. As with the other coral reefs of the world, this incredible ecological hotspot is under threat. A heat wave in 2016 caused a large percentage of the corals in the Great Barrier Reef to undergo severe bleaching and death. Even in the deeper, less-exposed areas of the reef, nearly 40 percent of the corals had partial bleaching.",
        evidence: {
          support: [
            "this incredible ecological hotspot is under threat.",
            "A heat wave in 2016 caused a large percentage of the corals in the Great Barrier Reef to undergo severe bleaching and death.",
            "nearly 40 percent of the corals had partial bleaching."
          ],
          distract: [
            "is home to at least 400 individual species of coral and thousands of different species of fish, molluscs, sea snakes, sea turtles, whales, dolphins, birds and more."
          ]
        }
      },
      {
        letter: "E",
        text:
          "Healthy reefs lead to healthy oceans, and healthy oceans are vital to all life on the planet. The destruction facing not only the Great Barrier Reef, but also every reef around the world, can lead to the extinction of thousands of species of marine life. In turn, coastlines that are currently protected by reefs would more readily be flooded during storms. Some islands and low-lying countries would vanish under the water. Moreover, the highly important and profitable industry that coral reefs provide could collapse.",
        evidence: {
          support: [
            "Healthy reefs lead to healthy oceans, and healthy oceans are vital to all life on the planet.",
            "can lead to the extinction of thousands of species of marine life.",
            "coastlines that are currently protected by reefs would more readily be flooded during storms."
          ],
          distract: [
            "Moreover, the highly important and profitable industry that coral reefs provide could collapse."
          ]
        }
      },
      {
        letter: "F",
        text:
          "The Australian government has put forth a long-term plan to sustain the Great Barrier Reef. The plan outlines efforts to reduce and eventually eliminate dumping materials and chemicals, reduce fishing and poaching, and monitor the water quality. There are also many attempts to rebuild the reef. Scientists are working to breed stronger species of coral that are less sensitive to warmer waters. Another group of ecologists are experimenting with growing corals on steel frames placed over the old parts of the reef.",
        evidence: {
          support: [
            "a long-term plan to sustain the Great Barrier Reef.",
            "There are also many attempts to rebuild the reef.",
            "experimenting with growing corals on steel frames placed over the old parts of the reef."
          ],
          distract: [
            "reduce fishing and poaching, and monitor the water quality."
          ]
        }
      },
      {
        letter: "G",
        text:
          "Coral reefs cover less than 1 percent of the ocean floor. All the reefs combined would equal an area of about 285,000 square km. Nevertheless, they are among the most productive and diverse ecosystems on Earth. About 25 percent of all known marine species consider coral reefs to be their home. Sometimes referred to as \"the rainforests of the sea\" for their biodiversity, coral reefs are the primary habitat for 4,000 species of fish, 700 species of coral and thousands of other plants and animals.",
        evidence: {
          support: [
            "they are among the most productive and diverse ecosystems on Earth.",
            "About 25 percent of all known marine species consider coral reefs to be their home.",
            "Sometimes referred to as \"the rainforests of the sea\" for their biodiversity,"
          ],
          distract: [
            "Coral reefs cover less than 1 percent of the ocean floor."
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "In danger!" },
      { num: 2, text: "Beautiful variety" },
      { num: 3, text: "The issue of creation" },
      { num: 4, text: "Everything's connected" },
      { num: 5, text: "Important in nature" },
      { num: 6, text: "Fighting global warming" },
      { num: 7, text: "Discovered everywhere" },
      { num: 8, text: "Looking for solutions" }
    ],

    key: { A: 2, B: 7, C: 3, D: 1, E: 4, F: 8, G: 5 },
    extraHeadlineNum: 6,

    explanationsRu: {
      A:
        "Формы, цвета, типы рифов — <strong>разнообразие красоты</strong> (<strong>2</strong>).",
      B:
        "От Аляски до Карибов, неизведанное дно, <strong>новые рифы</strong> — <strong>везде встречаются и открываются</strong> (<strong>7</strong>).",
      C:
        "Твёрдые кораллы, <strong>карбонат кальция</strong>, основание для подселения поросли, рост рифа — <strong>как риф создаётся</strong> (<strong>3</strong>).",
      D:
        "<strong>Угроза</strong>, жара 2016, <strong>отбеливание и гибель</strong> (<strong>1 — In danger!</strong>).",
      E:
        "Здоровые рифы — океан — побережья — острова — отрасль: <strong>цепочка последствий</strong> (<strong>4</strong>).",
      F:
        "План правительства, сброс, рыболовство, <strong>восстановление</strong>, селекция, каркасы — <strong>поиск решений</strong> (<strong>8</strong>).",
      G:
        "Мало площади, но <strong>макс. продуктивность и доля видов</strong> — <strong>важность для природы</strong> (<strong>5</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся заголовок <strong>6 — Fighting global warming</strong>: про <strong>победу над потеплением</strong> как отдельную тему не говорится; в §D — <strong>нагрев и урон</strong>, в §F — меры и адаптация, но не акцент «борьба с глобальным потеплением» в заголовочном смысле.",

    quickPhrases: [
      { en: "brain corals", ru: "«мозговые» кораллы (по форме)" },
      { en: "fringing reefs", ru: "окаймляющие рифы" },
      { en: "barrier reefs", ru: "барьерные рифы" },
      { en: "subtropics", ru: "субтропики" },
      { en: "calcium carbonate", ru: "карбонат кальция" },
      { en: "bleaching", ru: "отбеливание (кораллов под стрессом)" },
      { en: "heat wave", ru: "волна жары" },
      { en: "low-lying countries", ru: "низменные страны" },
      { en: "poaching", ru: "браконьерство" },
      { en: "biodiversity", ru: "биоразнообразие" },
      { en: "ecological hotspot", ru: "экологический «горячий пункт» — очаг видового богатства" },
      { en: "molluscs", ru: "моллюски" }
    ],

    tapPhrases: [
      {
        en: "Coral reefs have a surprising array of shapes and colours, ranging from round, folded brain corals",
        ru: "у рифов удивительное разнообразие форм и оттенков — от округлых складчатых мозговидных кораллов"
      },
      {
        en: "they continue to find previously unknown coral reefs that have likely existed for hundreds of years.",
        ru: "продолжают находить ранее неизвестные рифы, которым, видимо, сотни лет"
      },
      {
        en: "The calcium carbonate that is created by hard corals provides a foundation for baby corals to settle upon.",
        ru: "карбонат кальция от твёрдых кораллов даёт основу, куда садятся молодые полипы"
      },
      {
        en: "A heat wave in 2016 caused a large percentage of the corals in the Great Barrier Reef to undergo severe bleaching and death.",
        ru: "в 2016-м волна жары вызвала массовое отбеливание и гибель кораллов Большого барьерного рифа"
      },
      {
        en: "Healthy reefs lead to healthy oceans, and healthy oceans are vital to all life on the planet.",
        ru: "здоровые рифы — здоровый океан — он жизненно важен для всей планеты"
      },
      {
        en: "Scientists are working to breed stronger species of coral that are less sensitive to warmer waters.",
        ru: "учёные выводят более устойчивые виды кораллов к потеплению воды"
      },
      {
        en: "About 25 percent of all known marine species consider coral reefs to be their home.",
        ru: "около четверти известных морских видов обитает у коралловых рифов"
      }
    ],

    tapLexicon: [
      { en: "lagoon", ru: "лагуна" },
      { en: "reef", ru: "риф" },
      { en: "coral", ru: "коралл" },
      { en: "sponges", ru: "губки (пориферы)" },
      { en: "algae", ru: "водоросли" },
      { en: "dumping", ru: "сброс отходов" },
      { en: "extinction", ru: "вымирание" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
