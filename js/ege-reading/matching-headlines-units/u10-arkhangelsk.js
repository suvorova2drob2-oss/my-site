/**
 * ЕГЭ Reading — Matching Headlines, юнит 10 (Архангельск, северный порт).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u10-arkhangelsk",
    unitOrder: 10,
    title: "Unit 10 · Arkhangelsk",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Today, Russia is washed by 13 seas. However, this was not always the case. In the 16th century, the country had only been able to directly access the Arctic Ocean and fought a hard battle to establish some sort of a presence in the Baltic Sea. In 1581, during the Livonian War, Swedish forces captured Narva, which was the only large Russian port on the Baltic coast at that time and was of strategic importance to Russia. So, the Russian tsar Ivan IV had nothing left to do but to look to the north.",
        evidence: {
          support: [
            "this was not always the case.",
            "Swedish forces captured Narva, which was the only large Russian port on the Baltic coast at that time",
            "Ivan IV had nothing left to do but to look to the north."
          ],
          distract: [
            "Today, Russia is washed by 13 seas."
          ]
        }
      },
      {
        letter: "B",
        text:
          "In absolute terms, European trade was booming in the 16th century, new trading routes were searched for. It was nearly impossible for Russia to engage in trade with Western Europe in such conditions, but it was absolutely necessary for Russia's continued development. English traders by then had already carved a route to Russian settlements on the shores of the White Sea. However, there were too few local piers for effective trade to take place. A large full-fledged port was required for merchants' ships.",
        evidence: {
          support: [
            "It was nearly impossible for Russia to engage in trade with Western Europe in such conditions,",
            "there were too few local piers for effective trade to take place.",
            "A large full-fledged port was required for merchants' ships."
          ],
          distract: [
            "European trade was booming in the 16th century, new trading routes were searched for."
          ]
        }
      },
      {
        letter: "C",
        text:
          "On March 4, 1583, the tsar ordered the establishment of a city near the Mikhailo-Archangel monastery, located at the mouth of the Northern Dvina River, 30 kilometres from the White Sea. The following year, the New Kholmogory fortress was built there and, from the 17th century onwards, it became known as Arkhangelsk. The fortress was constructed from masts tied together. The most skillful master of carpentry could not have produced anything better. It became Russia's only route into Europe then.",
        evidence: {
          support: [
            "the tsar ordered the establishment of a city near the Mikhailo-Archangel monastery,",
            "the New Kholmogory fortress was built there",
            "The fortress was constructed from masts tied together."
          ],
          distract: [
            "located at the mouth of the Northern Dvina River, 30 kilometres from the White Sea."
          ]
        }
      },
      {
        letter: "D",
        text:
          "Arkhangelsk developed rapidly as a city, and there were many good reasons for that. A large sea pier was constructed, as well as trade centres for foreign merchants — so-called Guest Courts. Brits, Dutch and other \"Germans\" brought imported cloth, velvet, lace, wines, precious stones, gunpowder and cannons, bringing back with them wheat, pork and pork fat, sable, sap and other goods. Almost all of Russia's trade with the West in those days used to be conducted through Arkhangelsk.",
        evidence: {
          support: [
            "Arkhangelsk developed rapidly as a city,",
            "A large sea pier was constructed, as well as trade centres for foreign merchants",
            "Almost all of Russia's trade with the West in those days used to be conducted through Arkhangelsk."
          ],
          distract: [
            "Brits, Dutch and other \"Germans\" brought imported cloth, velvet, lace, wines, precious stones, gunpowder and cannons,"
          ]
        }
      },
      {
        letter: "E",
        text:
          "Peter I visited the city in 1693 and came to be rather impressed with what he saw: the amount and variety of foreign ships dazzled the young tsar. On his orders, the shipyard was founded, which oversaw the construction of the Russian trading and naval fleet. On June 25, 1701, at the very start of the Northern War against Sweden, the enemy attempted to take the city, but was crushed in the area near the Novodvinsk fortress, which guarded the approaches. This became the first major Russian victory in that war.",
        evidence: {
          support: [
            "at the very start of the Northern War against Sweden, the enemy attempted to take the city, but was crushed",
            "near the Novodvinsk fortress, which guarded the approaches.",
            "This became the first major Russian victory in that war."
          ],
          distract: [
            "the shipyard was founded, which oversaw the construction of the Russian trading and naval fleet."
          ]
        }
      },
      {
        letter: "F",
        text:
          "At the start of his reign, Peter I accomplished a lot for the development of Arkhangelsk, but, in the end, it was also he who bore the blame for the fading glory of this key centre of Russian trade. After the tide of the war turned in Russian favour, the tsar's decrees began deliberately redirecting the flow of trade from Arkhangelsk to St. Petersburg. In 1718, only a third of the exports went through the northern port. And after the war ended, St. Petersburg presided over 100% of all trade with Western states.",
        evidence: {
          support: [
            "he who bore the blame for the fading glory of this key centre of Russian trade.",
            "redirecting the flow of trade from Arkhangelsk to St. Petersburg.",
            "St. Petersburg presided over 100% of all trade with Western states."
          ],
          distract: [
            "At the start of his reign, Peter I accomplished a lot for the development of Arkhangelsk,"
          ]
        }
      },
      {
        letter: "G",
        text:
          "Until Peter I fought to create his \"window to Europe\" through the Baltic Sea, the only window of such kind Russia had ever had was situated in the Arctic Ocean. It was the city of Arkhangelsk. Arkhangelsk has long stopped being the main port in Russia, and the city never served the purpose of the \"northern gate\" in the country. However, there is one area it never fell behind in — as in the 18th century, the city continues to play a major role in the launching of scientific expeditions into the Arctic Ocean.",
        evidence: {
          support: [
            "Arkhangelsk has long stopped being the main port in Russia,",
            "However, there is one area it never fell behind in —",
            "the city continues to play a major role in the launching of scientific expeditions into the Arctic Ocean."
          ],
          distract: [
            "Until Peter I fought to create his \"window to Europe\" through the Baltic Sea,"
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "The city's decline" },
      { num: 2, text: "Difficult early times" },
      { num: 3, text: "A port needed for trade" },
      { num: 4, text: "The status still kept" },
      { num: 5, text: "The time of wealth" },
      { num: 6, text: "A centre of technology" },
      { num: 7, text: "A long-awaited fortress" },
      { num: 8, text: "Glorious war history" }
    ],

    key: { A: 2, B: 3, C: 7, D: 5, E: 8, F: 1, G: 4 },
    extraHeadlineNum: 6,

    explanationsRu: {
      A:
        "XVI век: узкий выход к морю, потеря Нарвы — <strong>трудное начало</strong>, север как выход (<strong>2</strong>).",
      B:
        "Торговля с Западом без нормальной гавани невозможна — нужен <strong>большой порт</strong> (<strong>3</strong>).",
      C:
        "Указ об основании города, <strong>крепость</strong> из мачт, первый путь в Европу — <strong>долгожданная крепость / опорный пункт</strong> (<strong>7</strong>).",
      D:
        "Бурный рост, пирсы, Guest Courts, почти вся западная торговля — <strong>эпоха богатства и расцвета</strong> (<strong>5</strong>).",
      E:
        "Северная война, разгром у Новодвинска — <strong>первая крупная победа</strong>, военная слава (<strong>8</strong>). Про верфь см. отвлекающий фрагмент.",
      F:
        "Пётр перенаправил потоки в Петербург, порт <strong>теряет былую славу</strong> — <strong>упадок города</strong> как торгового центра (<strong>1</strong>).",
      G:
        "Уже не «северные ворота», но <strong>роль сохранена</strong> — экспедиции в Арктику (<strong>4</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся <strong>6 — A centre of technology</strong>: верфь и флот в абзаце <strong>E</strong> — важная деталь, но <strong>ключевая мысль</strong> там — <strong>военная победа</strong> в начале Северной войны (<strong>8</strong>). Если в вашем сборнике для E указан <strong>6</strong>, сверьтесь с официальным ключом.",

    quickPhrases: [
      {
        en: "was of strategic importance to Russia",
        ru: "имело стратегическое значение для России (Нарва как порт)"
      },
      {
        en: "A large full-fledged port was required for merchants' ships",
        ru: "для торговых судов нужен был большой полноценный порт"
      },
      {
        en: "there were too few local piers for effective trade to take place",
        ru: "местных причалов было мало для нормальной торговли"
      },
      {
        en: "the New Kholmogory fortress was built there",
        ru: "там построили крепость Новый Холмогоры"
      },
      { en: "Guest Courts", ru: "гостиные дворы (торговые дворы для иноземцев)" },
      {
        en: "fading glory of this key centre of Russian trade",
        ru: "увядание былой славы главного торгового центра России"
      },
      {
        en: "redirecting the flow of trade from Arkhangelsk to St. Petersburg",
        ru: "перенаправление торговли из Архангельска в Санкт-Петербург"
      },
      { en: "create his \"window to Europe\" through the Baltic Sea", ru: "«открыть окно в Европу» через Балтику" },
      { en: "the \"northern gate\" in the country", ru: "«северные ворота» страны (образ)" },
      {
        en: "the launching of scientific expeditions into the Arctic Ocean",
        ru: "отправная база научных экспедиций в Северный Ледовитый океан"
      },
      {
        en: "the Russian trading and naval fleet",
        ru: "торговый и военно-морской флот России"
      },
      {
        en: "Novodvinsk fortress, which guarded the approaches",
        ru: "крепость Новодвинск, прикрывавшая подступы к городу"
      },
      {
        en: "English traders by then had already carved a route",
        ru: "английские торговцы уже проложили морской путь"
      },
      {
        en: "establish some sort of a presence in the Baltic Sea",
        ru: "обеспечить себе присутствие на Балтийском море"
      },
      {
        en: "only a third of the exports went through the northern port",
        ru: "лишь треть экспорта шла через северный порт (1718)"
      },
      {
        en: "European trade was booming in the 16th century",
        ru: "торговля с Европой бурно росла в XVI веке"
      },
      {
        en: "trade centres for foreign merchants",
        ru: "торговые центры для иностранных купцов"
      },
      {
        en: "the fortress was constructed from masts tied together",
        ru: "крепость сложили из связанных мачт"
      },
      {
        en: "The most skillful master of carpentry could not have produced anything better",
        ru: "ни один мастер столярного дела не сделал бы лучше"
      },
      {
        en: "the amount and variety of foreign ships dazzled the young tsar",
        ru: "число и разнообразие иностранных судов привели царя в восторг"
      },
      {
        en: "St. Petersburg presided over 100% of all trade with Western states",
        ru: "Петербург сосредоточил на себе 100 % торговли с западными странами"
      },
      {
        en: "there is one area it never fell behind in",
        ru: "в одном деле город не отстаёт — как и в XVIII веке (полярные экспедиции)"
      }
    ],

    tapPhrases: [
      {
        en: "Swedish forces captured Narva, which was the only large Russian port on the Baltic coast at that time",
        ru: "шведы взяли Нарву — единственный крупный русский порт на Балтике"
      },
      {
        en: "A large full-fledged port was required for merchants' ships.",
        ru: "для кораблей купцов нужен был большой полноценный порт"
      },
      {
        en: "the New Kholmogory fortress was built there",
        ru: "там возвели крепость Новый Холмогоры"
      },
      {
        en: "Almost all of Russia's trade with the West in those days used to be conducted through Arkhangelsk.",
        ru: "почти вся торговля России с Западом шла через Архангельск"
      },
      {
        en: "This became the first major Russian victory in that war.",
        ru: "это стало первой крупной русской победой в той войне"
      },
      {
        en: "the tsar's decrees began deliberately redirecting the flow of trade from Arkhangelsk to St. Petersburg.",
        ru: "указы царя сознательно перенаправили торговлю из Архангельска в Петербург"
      },
      {
        en: "the city continues to play a major role in the launching of scientific expeditions into the Arctic Ocean.",
        ru: "город по-прежнему важен для старта научных экспедиций в Северный Ледовитый океан"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
