/**
 * ЕГЭ Reading — Matching Headlines, юнит 17 (Москва и окрестности: макет, замки любви,
 * «перемещение во времени», советские автоматы, детский «замок», часы Кокса, табличка Lennon Street).
 * В тексте D восстановлено устойчивое «behind the Iron Curtain» вместо ошибки OCR «on Sustain»;
 * в E/F — мелкие правки опечаток (best / Moscow / inspired / dial).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u17-moscow-sights",
    unitOrder: 17,
    title: "Unit 17 · Moscow sights",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Miniature Moscow is a very detailed depiction of the USSR's capital. 300 workers created it in 1977 for the 60th anniversary of the Bolshevik Revolution. A complicated lighting system makes the 122-meter model very realistic. There are lighting variations between daylight and nighttime. Every window shines with different lights. Even the windows of the boat on the river are brightened. The model is on display in the elegant Radisson Collection Hotel and is still enjoyed by curious tourists who want a peek of the Soviet Moscow.",
        evidence: {
          support: [
            "Miniature Moscow is a very detailed depiction of the USSR's capital.",
            "300 workers created it in 1977 for the 60th anniversary of the Bolshevik Revolution.",
            "curious tourists who want a peek of the Soviet Moscow.",
            "The model is on display in the elegant Radisson Collection Hotel"
          ],
          distract: [
            "Even the windows of the boat on the river are brightened.",
            "A complicated lighting system makes the 122-meter model very realistic."
          ]
        }
      },
      {
        letter: "B",
        text:
          "Dozens of trees adorned with hundreds if not thousands of padlocks decorate the banks of the Moscow River. Some padlocks are often made in the shape of a heart, and each tree symbolises a couple's eternal love in marriage. When two people get married, they write their names on a padlock, lock it to some free space on one of the metal trees, and toss the key into the river. Although the practice is common in many other countries, the iron trees with lovers' locks make Moscow's bridge of love a unique and romantic site.",
        evidence: {
          support: [
            "they write their names on a padlock, lock it to some free space on one of the metal trees, and toss the key into the river.",
            "each tree symbolises a couple's eternal love in marriage.",
            "the iron trees with lovers' locks make Moscow's bridge of love a unique and romantic site.",
            "Some padlocks are often made in the shape of a heart,"
          ],
          distract: [
            "Although the practice is common in many other countries,",
            "Dozens of trees adorned with hundreds if not thousands of padlocks decorate the banks of the Moscow River."
          ]
        }
      },
      {
        letter: "C",
        text:
          "The earliest mystery of Golosov Ravine in Kolomenskoye Park dates back to 1621 when part of a Tatar cavalry turned up at the walls of the Tsar's palace. They claimed to be part of the army that had attacked Moscow in 1571. Sensing defeat they fled into Golosov Ravine where they got lost in a thick green mist. They spent what seemed like only a few minutes finding their way through the fog, but emerged 50 years later. They carried outdated equipment, and an inquiry formed by the Tsar found that the men \"probably told the truth.\"",
        evidence: {
          support: [
            "They spent what seemed like only a few minutes finding their way through the fog, but emerged 50 years later.",
            "They carried outdated equipment, and an inquiry formed by the Tsar found that the men \"probably told the truth.\"",
            "They claimed to be part of the army that had attacked Moscow in 1571.",
            "The earliest mystery of Golosov Ravine in Kolomenskoye Park dates back to 1621"
          ],
          distract: [
            "Sensing defeat they fled into Golosov Ravine where they got lost in a thick green mist.",
            "when part of a Tatar cavalry turned up at the walls of the Tsar's palace."
          ]
        }
      },
      {
        letter: "D",
        text:
          "A lot of arcades have their special tokens for their games. But few have Soviet-era 15-kopek coins complete with a hammer and sickle. A few Russian students in the basement of a technical school preserve the Museum of Soviet Arcade Games. There are about 60 machines from the Soviet era, including video games, pinball machines, and a type of ice hockey. Although only 50 to 55 of the games are playable, each of the machines paints a picture of life and entertainment behind the Iron Curtain.",
        evidence: {
          support: [
            "preserve the Museum of Soviet Arcade Games.",
            "There are about 60 machines from the Soviet era, including video games, pinball machines, and a type of ice hockey.",
            "each of the machines paints a picture of life and entertainment behind the Iron Curtain.",
            "But few have Soviet-era 15-kopek coins complete with a hammer and sickle."
          ],
          distract: [
            "A lot of arcades have their special tokens for their games.",
            "Although only 50 to 55 of the games are playable,"
          ]
        }
      },
      {
        letter: "E",
        text:
          "Although there isn't currently a Disneyland in Russia, the best closest thing lies on the far outskirts of Moscow. This giant, six-story medieval palace coloured in shades of orange, green, and pink appears to be one of Moscow's most magical amusement parks. In reality, the towering chateau is a lavish kindergarten for 150 children. Pavel Grudinin, the architect of the building, wanted to share magic and fun with the kids of the area so they were always inspired and never bored.",
        evidence: {
          support: [
            "the towering chateau is a lavish kindergarten for 150 children.",
            "This giant, six-story medieval palace coloured in shades of orange, green, and pink appears to be one of Moscow's most magical amusement parks.",
            "wanted to share magic and fun with the kids of the area so they were always inspired and never bored.",
            "Pavel Grudinin, the architect of the building,"
          ],
          distract: [
            "Although there isn't currently a Disneyland in Russia,",
            "the best closest thing lies on the far outskirts of Moscow."
          ]
        }
      },
      {
        letter: "F",
        text:
          "The elegant clock dates to 1777 when a noted automaton builder James Cox created it. It arrived in Russia in 1797 and was for a time owned by Prince Grigory Potemkin. Since the 18th century visitors have enjoyed the singing of three birds an owl, a peacock, and a rooster. A squirrel, fox and other creatures can also be seen among the metal foliage. The actual dial of the clock is hidden in a mushroom. The clock is now the only large example of 18th-century robotics to have survived unchanged into the 21st century.",
        evidence: {
          support: [
            "when a noted automaton builder James Cox created it.",
            "Since the 18th century visitors have enjoyed the singing of three birds an owl, a peacock, and a rooster.",
            "The clock is now the only large example of 18th-century robotics to have survived unchanged into the 21st century.",
            "The actual dial of the clock is hidden in a mushroom."
          ],
          distract: [
            "It arrived in Russia in 1797 and was for a time owned by Prince Grigory Potemkin.",
            "A squirrel, fox and other creatures can also be seen among the metal foliage."
          ]
        }
      },
      {
        letter: "G",
        text:
          "On a bright and colourful archway in the courtyard of a contemporary art complex hangs a simple sign denoting \"John Lennon Street\", with a big blue arrow pointing up. A devoted Beatles fan started this unique little spot. He had wanted to turn one of Saint Petersburg's real streets into a monument to the beloved band, but city authorities refused this idea. So, he designed a street sign and added an arrow pointing up. But now the street does not go along the ground and thus does not fall under the jurisdiction of officials.",
        evidence: {
          support: [
            "with a big blue arrow pointing up.",
            "the street does not go along the ground and thus does not fall under the jurisdiction of officials.",
            "So, he designed a street sign and added an arrow pointing up.",
            "hangs a simple sign denoting \"John Lennon Street\","
          ],
          distract: [
            "He had wanted to turn one of Saint Petersburg's real streets into a monument to the beloved band, but city authorities refused this idea.",
            "A devoted Beatles fan started this unique little spot."
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "A road to the sky" },
      { num: 2, text: "A castle of childhood" },
      { num: 3, text: "A city trip back in time" },
      { num: 4, text: "Devices with history" },
      { num: 5, text: "An official street name" },
      { num: 6, text: "A park of sealed affection" },
      { num: 7, text: "A mechanical wonder" },
      { num: 8, text: "Time travel confirmed" }
    ],

    key: { A: 3, B: 6, C: 8, D: 4, E: 2, F: 7, G: 1 },
    extraHeadlineNum: 5,

    explanationsRu: {
      A:
        "Подробный макет советской столицы 1977 года — как <strong>путешествие в прошлое</strong> по городу (<strong>3</strong>).",
      B:
        "Замки на «деревьях любви», ключ в воду — запечатанное чувство; место в парковой зоне у реки (<strong>6 — A park of sealed affection</strong>).",
      C:
        "Туман в овраге и выход «через 50 лет» при официальной проверке — сюжет про <strong>скачок во времени</strong> (<strong>8</strong>).",
      D:
        "Советские автоматы и жетоны — <strong>техника/устройства с историей</strong> (<strong>4</strong>).",
      E:
        "Дворец как вид развлечения, но по факту — <strong>роскошный детский сад</strong> (<strong>2 — A castle of childhood</strong>).",
      F:
        "Автоматон Кокса, птицы, XVIII век и «робототехника» — <strong>механическое чудо</strong> (<strong>7</strong>).",
      G:
        "Указатель <strong>вверх</strong>, «улица» не по земле — образ <strong>дороги в небо</strong>; заголовок про <strong>официальное имя улицы</strong> (<strong>5</strong>) лишний: власти как раз <strong>отказали</strong> в «настоящей» улице (<strong>1</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся <strong>5 — An official street name</strong>: в <strong>G</strong> акцент на самодельной табличке и лазейке от юрисдикции чиновников; официального переименования улицы нет.",

    quickPhrases: [
      {
        en: "a very detailed depiction of the USSR's capital",
        ru: "очень подробная модель столицы СССР"
      },
      {
        en: "A complicated lighting system makes the 122-meter model very realistic",
        ru: "сложная подсветка делает 122-метровый макет правдоподобным"
      },
      {
        en: "The model is on display in the elegant Radisson Collection Hotel",
        ru: "макет экспонируют в отеле Radisson Collection"
      },
      {
        en: "curious tourists who want a peek of the Soviet Moscow",
        ru: "любопытные туристы, желающие взглянуть на советскую Москву"
      },
      {
        en: "Dozens of trees adorned with hundreds if not thousands of padlocks",
        ru: "десятки деревьев украшены сотнями, если не тысячами замков"
      },
      {
        en: "each tree symbolises a couple's eternal love in marriage",
        ru: "каждое дерево символизирует вечную любовь супругов"
      },
      {
        en: "lock it to some free space on one of the metal trees, and toss the key into the river",
        ru: "повесить замок на металлическое «дерево» и бросить ключ в реку"
      },
      {
        en: "Moscow's bridge of love a unique and romantic site",
        ru: "«мост любви» в Москве — уникальное романтическое место"
      },
      {
        en: "part of a Tatar cavalry turned up at the walls of the Tsar's palace",
        ru: "отряд татарской конницы появился у стен царского дворца"
      },
      {
        en: "got lost in a thick green mist",
        ru: "заблудились в густом зелёном тумане"
      },
      {
        en: "emerged 50 years later",
        ru: "вышли наружу уже через 50 лет"
      },
      {
        en: "They carried outdated equipment, and an inquiry formed by the Tsar",
        ru: "с устаревшим снаряжением; царь учредил проверку"
      },
      {
        en: "Soviet-era 15-kopek coins complete with a hammer and sickle",
        ru: "советские 15-копеечные монеты с серпом и молотом"
      },
      {
        en: "preserve the Museum of Soviet Arcade Games",
        ru: "ухаживают за музеем советских игровых автоматов"
      },
      {
        en: "each of the machines paints a picture of life and entertainment behind the Iron Curtain",
        ru: "каждый автомат рассказывает о быте и развлечениях за «железным занавесом»"
      },
      {
        en: "only 50 to 55 of the games are playable",
        ru: "лишь 50–55 из игр до сих пор работают"
      },
      {
        en: "the towering chateau is a lavish kindergarten for 150 children",
        ru: "высокое шато — по факту роскошный сад на 150 детей"
      },
      {
        en: "wanted to share magic and fun with the kids of the area",
        ru: "хотел подарить детям района сказку и радость"
      },
      {
        en: "a noted automaton builder James Cox created it",
        ru: "создал знаменитый мастер автоматонов Джеймс Кокс"
      },
      {
        en: "Since the 18th century visitors have enjoyed the singing of three birds an owl, a peacock, and a rooster",
        ru: "с XVIII века гости любуются «пением» совы, павлина и петуха"
      },
      {
        en: "The actual dial of the clock is hidden in a mushroom",
        ru: "настоящий циферблат спрятан в «грибе»"
      },
      {
        en: "the only large example of 18th-century robotics to have survived unchanged",
        ru: "единственный крупный образец XVIII века без изменений до наших дней"
      },
      {
        en: "hangs a simple sign denoting \"John Lennon Street\", with a big blue arrow pointing up",
        ru: "висит табличка «John Lennon Street» и синяя стрелка вверх"
      },
      {
        en: "the street does not go along the ground and thus does not fall under the jurisdiction of officials",
        ru: "улица не по земле — значит, не под юрисдикцией чиновников"
      },
      {
        en: "city authorities refused this idea",
        ru: "городские власти отвергли идею официальной улицы"
      },
      {
        en: "metal foliage",
        ru: "металлическая листва (в механизме часов)"
      },
      {
        en: "contemporary art complex",
        ru: "комплекс современного искусства"
      }
    ],

    tapPhrases: [
      {
        en: "want a peek of the Soviet Moscow",
        ru: "хотят бросить взгляд на советскую Москву (в миниатюре)"
      },
      {
        en: "lock it to some free space on one of the metal trees",
        ru: "прикрепить замок к свободному месту на металлическом «дереве»"
      },
      {
        en: "emerged 50 years later",
        ru: "появились на свет уже через 50 лет"
      },
      {
        en: "the men \"probably told the truth.\"",
        ru: "комиссия решила, что люди, возможно, говорят правду"
      },
      {
        en: "Museum of Soviet Arcade Games",
        ru: "музей советских игровых автоматов"
      },
      {
        en: "each of the machines paints a picture of life and entertainment behind the Iron Curtain.",
        ru: "каждый автомат отражает быт и развлечения эпохи «железного занавеса»"
      },
      {
        en: "the towering chateau is a lavish kindergarten for 150 children.",
        ru: "высокое шато на самом деле — роскошный сад на 150 детей"
      },
      {
        en: "the only large example of 18th-century robotics to have survived unchanged",
        ru: "единственный крупный образец XVIII века в первозданном виде"
      },
      {
        en: "the street does not go along the ground",
        ru: "«улица» не лежит по земле (условное название)"
      },
      {
        en: "does not fall under the jurisdiction of officials",
        ru: "не попадает под контроль чиновников"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
