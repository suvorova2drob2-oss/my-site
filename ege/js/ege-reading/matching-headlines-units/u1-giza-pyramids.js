/**
 * ЕГЭ Reading — Matching Headlines, юнит 1 (пирамиды Гизы).
 * Регистрируется после matching-headlines-data.js (pack.units).
 * Новый юнит: скопируйте шаблон, положите файл сюда, добавьте <script …/matching-headlines-units/uN-….js> в ege-reading-matching-headlines.html после bootstrap.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u1-giza-pyramids",
    unitOrder: 1,
    title: "Unit 1 · The Pyramids of Giza",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "The Pyramids of Giza are the only standing monuments of the Seven Wonders of the Ancient World. So it is not surprising that they are a must-see for many tourists nowadays. These massive structures give modern-day visitors an idea of a powerful dynasty whose building techniques continue to puzzle scientists and historians to this day. Hundreds of visitors come to Egypt for the chance to admire the ancient architecture built to stand for centuries. The Giza Pyramids are well worth a visit.",
        evidence: {
          support: [
            "they are a must-see for many tourists nowadays",
            "Hundreds of visitors come to Egypt for the chance to admire the ancient architecture",
            "The Giza Pyramids are well worth a visit."
          ],
          distract: ["building techniques continue to puzzle scientists and historians to this day"]
        }
      },
      {
        letter: "B",
        text:
          "Constructed in the 26th and 25th centuries B.C., the Egyptian pyramids of Khufu, Khafre and Menkaure, built in that order, show wonders of ancient planning and engineering. The precise time period when they were built is not clear, as those dates depend on when exactly the pharaohs who built them reigned. The problem is that different sources and scholars have different guesses when each pharaoh reigned. How these wonderful pyramids were built is also a source of disagreement.",
        evidence: {
          support: [
            "different sources and scholars have different guesses when each pharaoh reigned",
            "How these wonderful pyramids were built is also a source of disagreement."
          ],
          distract: ["show wonders of ancient planning and engineering"]
        }
      },
      {
        letter: "C",
        text:
          "The Pyramids of Giza are places of burial or great tombs built for three of Egypt's pharaohs. The ancient Egyptians believed that when pharaohs died, they would move on to the afterlife as gods. These pharaohs prepared for the afterlife by ordering the building of enormous pyramid tombs for themselves, where they could store all the items they would need in the next world. The pyramid complexes, and the things once located inside them, helped the king to go up to the afterlife.",
        evidence: {
          support: [
            "places of burial or great tombs built for three of Egypt's pharaohs",
            "prepared for the afterlife by ordering the building of enormous pyramid tombs",
            "items they would need in the next world"
          ],
          distract: ["they would move on to the afterlife as gods"]
        }
      },
      {
        letter: "D",
        text:
          "The engineering behind the Pyramids of Giza is so impressive that scientists are still uncertain how they were built. However, over the past several decades, archaeologists have made numerous discoveries that have helped them to understand the construction of the Pyramids. It was found out that Egyptians used a variety of tools and materials to construct the Pyramids. To move big stones over land and onto the pyramids themselves, workers dragged sledges across wet sand and pulled stones up using a series of ramps.",
        evidence: {
          support: [
            "helped them to understand the construction of the Pyramids",
            "pulled stones up using a series of ramps."
          ],
          distract: ["scientists are still uncertain how they were built"]
        }
      },
      {
        letter: "E",
        text:
          "The majority of researchers agree that it took between 20,000 and 30,000 workers over twenty or so years to construct the three pyramids in Giza. The old history books claim that the Pyramids of Giza were built by slaves. But later discoveries concluded that the majority, if not all, of workers were native Egyptian farmers. They worked during a time when the Nile River flooded nearby land. These workers lived in a temporary town that was specially built near one of the pyramids.",
        evidence: {
          support: [
            "the majority, if not all, of workers were native Egyptian farmers",
            "These workers lived in a temporary town that was specially built near one of the pyramids."
          ],
          distract: ["The old history books claim that the Pyramids of Giza were built by slaves."]
        }
      },
      {
        letter: "F",
        text:
          "The popular tourists' question is how many pyramids there are in the Giza Complex. In fact, the Pyramids of Khufu, Khafre, and Menkaure are not the only pyramids in Giza. Three smaller pyramids can be found along the east side of the Pyramid of Khufu. These Queens' Pyramids were built for Khufu's wives and his mom. Additional smaller temples and pyramids can be found near both the Khafre and Menkaure pyramids as well. Together with the Sphinx, they all make up the Giza Pyramid Complex.",
        evidence: {
          support: [
            "are not the only pyramids in Giza",
            "Additional smaller temples and pyramids can be found near both the Khafre and Menkaure pyramids as well.",
            "they all make up the Giza Pyramid Complex."
          ],
          distract: ["The popular tourists' question is how many pyramids there are in the Giza Complex."]
        }
      },
      {
        letter: "G",
        text:
          "It is possible to visit the Pyramids of Giza at any time of the year but the peak season is from December to February, when the weather is cooler. One can also choose the months of October-November and March-April for fewer crowds and better weather. There are various entrance fees depending on which parts of the Giza Complex a traveller would like to visit. The main entrance fee will provide one with access to the outside of all the pyramids and the Sphinx. However, there are additional fees for entering the pyramids.",
        evidence: {
          support: [
            "the peak season is from December to February, when the weather is cooler",
            "fewer crowds and better weather",
            "There are various entrance fees depending on which parts of the Giza Complex a traveller would like to visit."
          ],
          distract: ["It is possible to visit the Pyramids of Giza at any time of the year"]
        }
      }
    ],

    headlines: [
      { num: 1, text: "Tips for tourists" },
      { num: 2, text: "A town of pyramids" },
      { num: 3, text: "A subject of debate" },
      { num: 4, text: "A traveller's dream" },
      { num: 5, text: "Magic and spells" },
      { num: 6, text: "A mysterious purpose" },
      { num: 7, text: "Who built the pyramids?" },
      { num: 8, text: "The construction puzzle solved?" }
    ],

    key: { A: 4, B: 3, C: 6, D: 8, E: 7, F: 2, G: 1 },
    extraHeadlineNum: 5,

    explanationsRu: {
      A:
        "Речь о том, что пирамиды — must-see и объект мечты туристов, которые едут в Египет ради них. Подходит заголовок <strong>4</strong>, а не общие «советы по поездке» — их даёт только другой абзац.",
      B:
        "Акцент на том, что <strong>даты</strong> правления и <strong>способ строительства</strong> до сих пор спорны — это <strong>предмет дискуссии</strong> (<strong>3</strong>).",
      C:
        "Объясняется <strong>зачем</strong> строили пирамиды: гробницы, вера в загробную жизнь и подготовка фараона. Это смысл / «назначение» сооружений (<strong>6</strong>).",
      D:
        "Новые находки археологов <strong>проясняют технологию</strong> стройки (инструменты, пандусы), хотя загадка не исчезла полностью — отсюда заголовок-вопрос <strong>8</strong>.",
      E:
        "Именно про <strong>исполнителей</strong>: сколько людей и кто они (фермеры, не рабы) — <strong>7</strong>.",
      F:
        "Перечисляется <strong>целый комплекс</strong> пирамид и построек вокруг — образ «города» из пирамид (<strong>2</strong>).",
      G:
        "Сезон, погода, <strong>разные входные билеты</strong> — практические <strong>советы путешественникам</strong> (<strong>1</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся заголовок <strong>5 — Magic and spells</strong>: ни один абзац не посвящён магии или заклинаниям как главной идее (в §C есть религия/загробный мир, но не «магия» в смысле заголовка).",

    quickPhrases: [
      { en: "the only standing monuments", ru: "единственные стоящие / уцелевшие памятники (буквально «стоящие»)" },
      { en: "Seven Wonders of the Ancient World", ru: "семь чудес древнего мира" },
      { en: "it is not surprising that", ru: "неудивительно, что" },
      { en: "a must-see for many tourists", ru: "обязательное место для туристов (must-see)" },
      { en: "nowadays", ru: "в наше время, сегодня" },
      { en: "massive structures", ru: "огромные сооружения" },
      { en: "give visitors an idea of", ru: "давать посетителям представление о / понимание" },
      { en: "modern-day visitors", ru: "современные посетители" },
      { en: "a powerful dynasty", ru: "могущественная династия" },
      { en: "building techniques", ru: "техники / приёмы строительства" },
      { en: "continue to puzzle", ru: "продолжают ставить в тупик, озадачивать" },
      { en: "scientists and historians", ru: "учёные и историки" },
      { en: "to this day", ru: "по сей день, до сих пор" },
      { en: "come to Egypt for the chance to", ru: "приезжают в Египет, чтобы иметь возможность…" },
      { en: "admire the ancient architecture", ru: "любоваться древней архитектурой" },
      { en: "built to stand for centuries", ru: "построенные, чтобы простоять века" },
      { en: "well worth a visit", ru: "однозначно стоит посещения" },
      { en: "Constructed in the 26th and 25th centuries B.C.", ru: "построены в XXVI и XXV вв. до н. э." },
      { en: "built in that order", ru: "в таком порядке (сначала… потом…)" },
      { en: "show wonders of ancient planning and engineering", ru: "демонстрируют чудеса древнего планирования и инженерии" },
      { en: "The precise time period", ru: "точный отрезок времени" },
      { en: "is not clear", ru: "неясен, не установлен" },
      { en: "depend on when exactly", ru: "зависят от того, когда именно" },
      { en: "the pharaohs who built them reigned", ru: "фараоны, которые их построили, правили (в такие-то годы)" },
      { en: "different sources and scholars", ru: "разные источники и учёные" },
      { en: "have different guesses", ru: "выдвигают разные догадки / версии" },
      { en: "a source of disagreement", ru: "источник разногласий, повод для споров" },
      { en: "places of burial or great tombs", ru: "места захоронения или большие гробницы" },
      { en: "built for three of Egypt's pharaohs", ru: "построены для троих фараонов Египта" },
      { en: "The ancient Egyptians believed", ru: "древние египтяне верили" },
      { en: "move on to the afterlife", ru: "перейти в загробную жизнь" },
      { en: "as gods", ru: "в качестве богов" },
      { en: "prepared for the afterlife", ru: "готовились к загробной жизни" },
      { en: "ordering the building of", ru: "приказывая возвести / заказывая строительство" },
      { en: "enormous pyramid tombs", ru: "огромные пирамиды-гробницы" },
      { en: "they would need in the next world", ru: "им понадобилось бы в том мире / в ином мире" },
      { en: "pyramid complexes", ru: "пирамидные комплексы (группы построек)" },
      { en: "once located inside them", ru: "когда-то находившиеся внутри них" },
      { en: "helped the king to go up to the afterlife", ru: "помогали царю «подняться» / перейти в загробный мир" },
      { en: "The engineering behind", ru: "инженерная сторона, техника (стоящая за чем-то)" },
      { en: "so impressive that", ru: "настолько впечатляющая, что" },
      { en: "scientists are still uncertain", ru: "учёные до сих пор не уверены" },
      { en: "over the past several decades", ru: "за последние несколько десятилетий" },
      { en: "have made numerous discoveries", ru: "сделали множество открытий" },
      { en: "helped them to understand the construction", ru: "помогли понять, как строили" },
      { en: "It was found out that", ru: "выяснилось, что" },
      { en: "a variety of tools and materials", ru: "разнообразие инструментов и материалов" },
      { en: "To move big stones over land", ru: "чтобы перетаскивать огромные камни по суше" },
      { en: "dragged sledges across wet sand", ru: "волокли сани по мокрому песку" },
      { en: "pulled stones up", ru: "тащили камни вверх (наверх)" },
      { en: "using a series of ramps", ru: "с помощью цепочки пандусов" },
      { en: "The majority of researchers agree", ru: "большинство исследователей сходятся во мнении" },
      { en: "it took between 20,000 and 30,000 workers", ru: "потребовалось от 20 до 30 тыс. рабочих" },
      { en: "over twenty or so years", ru: "примерно за два десятка лет (or so ≈ примерно)" },
      { en: "The old history books claim", ru: "старые учебники / хроники утверждают" },
      { en: "were built by slaves", ru: "были построены рабами" },
      { en: "later discoveries concluded", ru: "более поздние находки пришли к выводу" },
      { en: "the majority, if not all", ru: "большинство, если не все" },
      { en: "native Egyptian farmers", ru: "коренные египетские фермеры" },
      { en: "when the Nile River flooded nearby land", ru: "когда Нил разливался и заливал соседние земли" },
      { en: "a temporary town", ru: "временный городок / посёлок" },
      { en: "specially built near", ru: "специально построенный рядом с" },
      { en: "The popular tourists' question", ru: "популярный вопрос туристов" },
      { en: "Giza Complex", ru: "комплекс Гизы" },
      { en: "In fact", ru: "на самом деле; фактически" },
      { en: "are not the only pyramids in Giza", ru: "не единственные пирамиды в Гизе" },
      { en: "along the east side of", ru: "вдоль восточной стороны" },
      { en: "Queens' Pyramids", ru: "пирамиды цариц" },
      { en: "Additional smaller temples and pyramids", ru: "дополнительные меньшие храмы и пирамиды" },
      { en: "Together with the Sphinx", ru: "вместе со Сфинксом" },
      { en: "make up the Giza Pyramid Complex", ru: "составляют пирамидный комплекс Гизы" },
      { en: "at any time of the year", ru: "в любое время года" },
      { en: "the peak season", ru: "пик сезона" },
      { en: "when the weather is cooler", ru: "когда погода прохладнее" },
      { en: "fewer crowds and better weather", ru: "меньше толп и лучше погода" },
      { en: "entrance fees depending on which parts", ru: "входные билеты в зависимости от того, какие зоны" },
      { en: "would like to visit", ru: "хотел бы посетить (вежл. форма для туриста)" },
      { en: "The main entrance fee will provide one with access to", ru: "основной билет даёт доступ к" },
      { en: "additional fees for entering", ru: "доплата за вход (внутрь пирамид)" }
    ],

    tapPhrases: [
      { en: "the only standing monuments of the Seven Wonders of the Ancient World", ru: "единственные уцелевшие памятники из семи чудес древнего мира" },
      { en: "it is not surprising that", ru: "неудивительно, что" },
      { en: "they are a must-see for many tourists nowadays", ru: "их обязательно стоит увидеть туристам сегодня" },
      { en: "These massive structures give modern-day visitors an idea of a powerful dynasty", ru: "эти гигантские сооружения дают современным посетителям представление о могущественной династии" },
      { en: "whose building techniques continue to puzzle scientists and historians to this day", ru: "чьи строительные приёмы до сих пор озадачивают учёных и историков" },
      { en: "Hundreds of visitors come to Egypt for the chance to admire the ancient architecture built to stand for centuries", ru: "сотни гостей приезжают в Египет, чтобы полюбоваться древней архитектурой, рассчитанной вынести века" },
      { en: "The Giza Pyramids are well worth a visit", ru: "пирамиды Гизы однозначно стоят визита" },
      { en: "Constructed in the 26th and 25th centuries B.C.", ru: "возведены в XXVI и XXV вв. до н. э." },
      { en: "the Egyptian pyramids of Khufu, Khafre and Menkaure, built in that order", ru: "египетские пирамиды Хуфу, Хафры и Менкаура — в таком порядке очередности стройки" },
      { en: "show wonders of ancient planning and engineering", ru: "демонстрируют чудеса древнего планирования и инженерии" },
      { en: "The precise time period when they were built is not clear", ru: "точный период их постройки неясен" },
      { en: "as those dates depend on when exactly the pharaohs who built them reigned", ru: "потому что даты зависят от того, когда именно правили фараоны-строители" },
      { en: "different sources and scholars have different guesses when each pharaoh reigned", ru: "у разных источников и учёных разные догадки, когда каждый фараон правил" },
      { en: "How these wonderful pyramids were built is also a source of disagreement", ru: "как построили эти чудесные пирамиды — тоже предмет споров" },
      { en: "places of burial or great tombs built for three of Egypt's pharaohs", ru: "места захоронения или большие гробницы, возведённые для троих фараонов Египта" },
      { en: "when pharaohs died, they would move on to the afterlife as gods", ru: "когда фараоны умирали, они переходили в загробный мир как боги" },
      { en: "prepared for the afterlife by ordering the building of enormous pyramid tombs for themselves", ru: "готовились к загробной жизни, заказывая строительство гигантских пирамид-гробниц для себя" },
      { en: "where they could store all the items they would need in the next world", ru: "где можно было хранить всё, что им понадобится в ином мире" },
      { en: "The pyramid complexes, and the things once located inside them, helped the king to go up to the afterlife", ru: "пирамидные комплексы и то, что когда-то лежало внутри, помогали царю „подняться“ в загробный мир" },
      { en: "The engineering behind the Pyramids of Giza is so impressive that scientists are still uncertain how they were built", ru: "инженерная сторона пирамид Гизы так впечатляет, что учёные до сих пор не уверены, как их возвели" },
      { en: "archaeologists have made numerous discoveries that have helped them to understand the construction of the Pyramids", ru: "археологи сделали много открытий, которые помогли понять строительство пирамид" },
      { en: "It was found out that Egyptians used a variety of tools and materials to construct the Pyramids", ru: "выяснилось, что египтяне использовали множество инструментов и материалов, чтобы строить пирамиды" },
      { en: "workers dragged sledges across wet sand and pulled stones up using a series of ramps", ru: "рабочие волокли сани по мокрому песку и тащили камни вверх по цепочке пандусов" },
      { en: "The majority of researchers agree that it took between 20,000 and 30,000 workers over twenty or so years to construct the three pyramids in Giza", ru: "большинство исследователей считает, что для трёх пирамид в Гизе понадобились 20–30 тыс. рабочих примерно за два десятка лет" },
      { en: "The old history books claim that the Pyramids of Giza were built by slaves", ru: "старые книги утверждают, что пирамиды Гизы построили рабы" },
      { en: "later discoveries concluded that the majority, if not all, of workers were native Egyptian farmers", ru: "позже выяснили: большинство рабочих, если не все, — местные египетские фермеры" },
      { en: "They worked during a time when the Nile River flooded nearby land", ru: "они работали в сезон, когда Нил разливался и заливал поля рядом" },
      { en: "These workers lived in a temporary town that was specially built near one of the pyramids", ru: "они жили во временном городке, специально возведённом у одной из пирамид" },
      { en: "The popular tourists' question is how many pyramids there are in the Giza Complex", ru: "популярный вопрос туристов — сколько всего пирамид в комплексе Гизы" },
      { en: "the Pyramids of Khufu, Khafre, and Menkaure are not the only pyramids in Giza", ru: "пирамиды Хуфу, Хафры и Менкаура — не единственные пирамиды в Гизе" },
      { en: "Three smaller pyramids can be found along the east side of the Pyramid of Khufu", ru: "три меньшие пирамиды находятся вдоль восточного фасада пирамиды Хуфу" },
      { en: "These Queens' Pyramids were built for Khufu's wives and his mom", ru: "эти пирамиды цариц построили для жён Хуфу и его матери" },
      { en: "Additional smaller temples and pyramids can be found near both the Khafre and Menkaure pyramids as well", ru: "рядом с пирамидами Хафры и Менкаура тоже есть дополнительные храмы и пирамидки" },
      { en: "Together with the Sphinx, they all make up the Giza Pyramid Complex", ru: "вместе со Сфинксом всё это составляет пирамидный комплекс Гизы" },
      { en: "It is possible to visit the Pyramids of Giza at any time of the year but the peak season is from December to February, when the weather is cooler", ru: "пирамиды можно посещать круглый год, но пик сезона — декабрь–февраль, когда прохладнее" },
      { en: "One can also choose the months of October-November and March-April for fewer crowds and better weather", ru: "ещё удобны октябрь–ноябрь и март–апрель: меньше толп и приятнее погода" },
      { en: "There are various entrance fees depending on which parts of the Giza Complex a traveller would like to visit", ru: "разные входные билеты в зависимости от того, какие зоны комплекса хочет увидеть путешественник" },
      { en: "The main entrance fee will provide one with access to the outside of all the pyramids and the Sphinx", ru: "основной билет даёт доступ снаружи ко всем пирамидам и Сфинксу" },
      { en: "However, there are additional fees for entering the pyramids", ru: "за вход внутрь пирамид нужна отдельная доплата" }
    ],

    tapLexicon: [
      { en: "tourists", ru: "туристы" },
      { en: "monuments", ru: "памятники" },
      { en: "surprising", ru: "удивительно" },
      { en: "massive", ru: "массивный, огромный" },
      { en: "dynasty", ru: "династия" },
      { en: "puzzle", ru: "озадачивать; здесь — загадка" },
      { en: "centuries", ru: "века" },
      { en: "admire", ru: "любоваться" },
      { en: "architecture", ru: "архитектура" },
      { en: "pharaohs", ru: "фараоны" },
      { en: "burial", ru: "захоронение" },
      { en: "tombs", ru: "гробницы" },
      { en: "afterlife", ru: "загробная жизнь" },
      { en: "engineering", ru: "инженерия" },
      { en: "precise", ru: "точный" },
      { en: "scholars", ru: "учёные" },
      { en: "disagreement", ru: "разногласие" },
      { en: "uncertain", ru: "неуверенны" },
      { en: "discoveries", ru: "открытия, находки" },
      { en: "construction", ru: "строительство" },
      { en: "workers", ru: "рабочие" },
      { en: "slaves", ru: "рабы" },
      { en: "farmers", ru: "фермеры" },
      { en: "flooded", ru: "разливался, затоплял" },
      { en: "complex", ru: "комплекс (сооружений)" },
      { en: "Sphinx", ru: "Сфинкс" },
      { en: "crowds", ru: "толпы (людей)" },
      { en: "fees", ru: "сборы, плата" },
      { en: "traveller", ru: "путешественник" },
      { en: "travellers", ru: "путешественники" }
    ]
  });
})(typeof window !== "undefined" ? window : this);
