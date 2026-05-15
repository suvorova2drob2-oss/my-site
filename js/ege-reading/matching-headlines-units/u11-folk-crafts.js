/**
 * ЕГЭ Reading — Matching Headlines, юнит 11 (русские народные промыслы).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u11-folk-crafts",
    unitOrder: 11,
    title: "Unit 11 · Russian folk crafts",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Handicrafts are among the most popular souvenirs a la russe that foreign tourists buy when travelling in Russia, as it is stated on Russia Beyond website. Zhostovo paintings, Matryoshka dolls, Vologda lace, Gzhel, and many other examples of folk art with long and distinguished histories are the perfect presents for friends and family. In every Russian village there were folk craftsmen and artists with their own original styles. However, only several particular styles became known all over the country and beyond.",
        evidence: {
          support: [
            "among the most popular souvenirs a la russe that foreign tourists buy when travelling in Russia,",
            "many other examples of folk art with long and distinguished histories",
            "only several particular styles became known all over the country and beyond."
          ],
          distract: [
            "In every Russian village there were folk craftsmen and artists with their own original styles."
          ]
        }
      },
      {
        letter: "B",
        text:
          "Khokhloma is \"the calling card\" of all Russian patterns, the most well-known and recognizable both in Russia and abroad. Historically, khokhloma was a painting on wood — mainly on dishes and kitchen items, as well as on wooden furniture. Russian wooden spoons painted with khokhloma are especially famous overseas. The pattern is always painted on a black background with bright red, green and gold colours. The main khokhloma motifs are berries and herbs, sometimes the pattern features birds, as well.",
        evidence: {
          support: [
            "the most well-known and recognizable both in Russia and abroad.",
            "The main khokhloma motifs are berries and herbs, sometimes the pattern features birds, as well.",
            "The pattern is always painted on a black background with bright red, green and gold colours."
          ],
          distract: [
            "Historically, khokhloma was a painting on wood — mainly on dishes and kitchen items, as well as on wooden furniture."
          ]
        }
      },
      {
        letter: "C",
        text:
          "Khokhloma painting on wooden objects is pretty famous and it has certainly put the city of Nizhny Novgorod on the map. The type of handicraft, as well as the pattern, traditionally bears the name of the place where it was first produced. In the case of khokhloma, it is the village of Khokhloma in Nizhny Novgorod Region. There is a legend that the handicraft comes from the Old Believer icon painters of the 17th century. It is even more surprising that khokhloma and matryoshka dolls have the same roots.",
        evidence: {
          support: [
            "traditionally bears the name of the place where it was first produced.",
            "the village of Khokhloma in Nizhny Novgorod Region.",
            "There is a legend that the handicraft comes from the Old Believer icon painters of the 17th century."
          ],
          distract: [
            "It is even more surprising that khokhloma and matryoshka dolls have the same roots."
          ]
        }
      },
      {
        letter: "D",
        text:
          "Gzhel is the type of ceramic handicraft. It comes from the village of Gzhel in Moscow Region, where the special clay has been mined for ages. Porcelain produced from local clay was appreciated even at the court of Tsar Alexei Mikhailovich. In the 19th century, there were dozens of factories in the area, which produced dishes, stove tiles and other ceramic products, as well as toys in the form of animals. The technique of gzhel is 'majolica' and it features floral ornaments and all in the brand's blue and white colours.",
        evidence: {
          support: [
            "Gzhel is the type of ceramic handicraft.",
            "the special clay has been mined for ages.",
            "Porcelain produced from local clay was appreciated even at the court of Tsar Alexei Mikhailovich."
          ],
          distract: [
            "toys in the form of animals."
          ]
        }
      },
      {
        letter: "E",
        text:
          "The painting of forged tin trays in the village of Zhostovo in Moscow Region dates back to 1825. The craft was \"imported\" from the Urals by the Demidov family — in Tagil, there was already a successful production of painted trays. The local Zhostovo artists, who already painted miniatures on wooden items, were engaged in the production of these trays. This synthesis of arts and crafts resulted in Zhostovo trays. Masters depict both garden and field flowers. They put a drawing with oil paints in several layers, achieving the three-dimensional image.",
        evidence: {
          support: [
            "The craft was \"imported\" from the Urals by the Demidov family",
            "The local Zhostovo artists, who already painted miniatures on wooden items, were engaged in the production of these trays.",
            "This synthesis of arts and crafts resulted in Zhostovo trays."
          ],
          distract: [
            "They put a drawing with oil paints in several layers, achieving the three-dimensional image."
          ]
        }
      },
      {
        letter: "F",
        text:
          "Palekh lacquer miniature is a relatively young folk craft. After the 1917 Revolution, it was taken up by talented artists, former icon painters and masters of temple paintings from the village of Palekh in Ivanovo Region. Artists focused their skills on \"ancient painting\". They depicted scenes from folk tales and works of literature, using iconographic techniques. In the Palekh style, on a black background with bright red and gold colours, artists now paint mostly decorative items: often jewelry caskets or small souvenirs.",
        evidence: {
          support: [
            "Palekh lacquer miniature is a relatively young folk craft.",
            "After the 1917 Revolution, it was taken up by talented artists,",
            "former icon painters and masters of temple paintings from the village of Palekh"
          ],
          distract: [
            "They depicted scenes from folk tales and works of literature, using iconographic techniques."
          ]
        }
      },
      {
        letter: "G",
        text:
          "Originally from Gorodets, Nizhny Novgorod Region, this pattern dates back to the 19th century. It was first used to decorate sewing devices. Later, it was also found on wooden furniture and other items: chests, caskets, sledges, window shutters and even doors. Folk artists depicted genre scenes from the everyday life of merchants and peasants. Plots and characters could be very different, but often a matchmaking, a feast or a promenade. There were also images of horses, birds and some other domestic animals.",
        evidence: {
          support: [
            "Folk artists depicted genre scenes from the everyday life of merchants and peasants.",
            "but often a matchmaking, a feast or a promenade.",
            "Plots and characters could be very different,"
          ],
          distract: [
            "It was first used to decorate sewing devices."
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "New time — new craft" },
      { num: 2, text: "A variety of folk patterns" },
      { num: 3, text: "The wooden craft origin" },
      { num: 4, text: "Masters of folk crafts" },
      { num: 5, text: "Ceramics with a history" },
      { num: 6, text: "The craft to reflect life" },
      { num: 7, text: "Top popular with tourists" },
      { num: 8, text: "A creative cooperation" }
    ],

    key: { A: 7, B: 2, C: 3, D: 5, E: 8, F: 1, G: 6 },
    extraHeadlineNum: 4,

    explanationsRu: {
      A:
        "Сувениры, которые <strong>покупают туристы</strong>, популярность «a la russe» — заголовок про аудиторию и спрос (<strong>7</strong>).",
      B:
        "О узнаваемом узоре, цветах фона, <strong>набора мотивов</strong> (ягоды, трава, птицы) — <strong>разнообразие</strong> приёмов узора (<strong>2</strong>).",
      C:
        "Имя от <strong>места</strong> происхождения, деревня, легенда о корнях промысла — <strong>происхождение деревянной традиции</strong> (<strong>3</strong>).",
      D:
        "Гжель — <strong>керамика</strong>, глина, дворец, фабрики, майолика — <strong>с историей гончарного/фарфорового</strong> ремесла (<strong>5</strong>).",
      E:
        "Ремесло <strong>привезли</strong> с Урала, местные мастера подключились — <strong>синтез, совместная история</strong> (<strong>8</strong>).",
      F:
        "«Относительно молодой» промысел, <strong>после 1917 года</strong> новое применение навыков — <strong>новое время — новый ремесленный облик</strong> (<strong>1</strong>).",
      G:
        "Жанровые сцены быта купцов и крестьян, свадьба, праздник — <strong>отражение жизни</strong> в росписи (<strong>6</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся <strong>4 — Masters of folk crafts</strong>: мастера и иконописцы упоминаются как деталь, но ни один абзац <strong>не сводится</strong> главной мыслью к «мастерам ремесла» как к теме текста. Сверяйтесь с ключом вашего сборника при расхождениях.",

    quickPhrases: [
      { en: "handicrafts", ru: "изделия ручной работы, народные промыслы" },
      { en: "souvenirs", ru: "сувениры" },
      { en: "folk art", ru: "народное искусство" },
      { en: "a la russe", ru: "по-русски, в русском стиле" },
      { en: "calling card", ru: "«визитная карточка» (символ, по чему узнают)" },
      { en: "motifs", ru: "мотивы узора" },
      { en: "Old Believer", ru: "старообрядец" },
      { en: "icon painters", ru: "иконописцы" },
      { en: "ceramic handicraft", ru: "керамическое ремесло" },
      { en: "porcelain", ru: "фарфор" },
      { en: "majolica", ru: "мажолика (вид глазури/техники)" },
      { en: "floral ornaments", ru: "цветочные орнаменты" },
      { en: "forged tin trays", ru: "жестяные подносы с чеканкой (рельеф) под роспись" },
      { en: "synthesis", ru: "синтез, слияние приёмов" },
      { en: "lacquer miniature", ru: "лаковая миниатюра" },
      { en: "temple paintings", ru: "росписи храмов" },
      { en: "iconographic techniques", ru: "иконописные приёмы" },
      { en: "genre scenes", ru: "жанровые сцены (быт)" },
      { en: "matchmaking", ru: "сватовство" },
      { en: "promenade", ru: "прогулка, гулянье (в сюжете картинки)" },
      { en: "three-dimensional image", ru: "объёмное изображение, эффект глубины" },
      {
        en: "folk art with long and distinguished histories",
        ru: "народное искусство с долгой и славной историей"
      },
      { en: "It was first used to decorate sewing devices", ru: "сначала узором украшали швейные приспособления" },
      {
        en: "the most well-known and recognizable both in Russia and abroad",
        ru: "самый известный и узнаваемый и в России, и за рубежом"
      },
      {
        en: "The craft was \"imported\" from the Urals by the Demidov family",
        ru: "ремесло «привезли» с Урала семьёй Демидовых"
      },
      {
        en: "Palekh lacquer miniature is a relatively young folk craft",
        ru: "палехская лаковая миниатюра — относительно молодой промысел"
      },
      {
        en: "genre scenes from the everyday life of merchants and peasants",
        ru: "жанровые сцены из быта купцов и крестьян"
      }
    ],

    tapPhrases: [
      {
        en: "among the most popular souvenirs a la russe that foreign tourists buy when travelling in Russia,",
        ru: "одни из самых популярных сувениров, которые покупают иностранные туристы в России"
      },
      {
        en: "The main khokhloma motifs are berries and herbs, sometimes the pattern features birds, as well.",
        ru: "основные мотивы хохломы — ягоды и травы, иногда и птицы"
      },
      {
        en: "There is a legend that the handicraft comes from the Old Believer icon painters of the 17th century.",
        ru: "легенда связывает промысел со старообрядческими иконописцами XVII века"
      },
      {
        en: "Porcelain produced from local clay was appreciated even at the court of Tsar Alexei Mikhailovich.",
        ru: "фарфор из местной глины ценили при дворе царя Алексея Михайловича"
      },
      {
        en: "This synthesis of arts and crafts resulted in Zhostovo trays.",
        ru: "синтез искусств и ремёсел породил жостовские подносы"
      },
      {
        en: "After the 1917 Revolution, it was taken up by talented artists,",
        ru: "после революции 1917 года к промыслу подключились талантливые художники"
      },
      {
        en: "Folk artists depicted genre scenes from the everyday life of merchants and peasants.",
        ru: "мастера писали жанровые сцены из быта купцов и крестьян"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
