/**
 * ЕГЭ Reading — Gapped Text, юнит 7 · Grenada (Spice Island).
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u7-grenada-spice-island",
    unitOrder: 7,
    title: "Unit 7 · Spice Island: Grenada",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              'Grenada offers a perfect taste of the Old Caribbean. Fragrant nutmeg, cinnamon, cloves, vanilla, and cocoa flourish in its fertile volcanic soil. That is why the island is often called the "Spice Island". The island\'s rich culture makes it a top choice for tourists '
          },
          { g: "A" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "St. George's is Grenada's capital. It is one of the prettiest cities in the Caribbean, with its busy harbour "
          },
          { g: "B" },
          {
            t:
              ". For those tired of the noise of big cities, the quieter islands of Carriacou and Petite Martinique lie off the island's northeast coast."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Many visitors spend their time around Grand Anse Beach, "
          },
          { g: "C" },
          {
            t:
              " in the Caribbean. Water colours range from clear turquoise in the shallows, to deep cobalt blue, and the calm waters are perfect for swimming. This is also where tourists will find some of Grenada's best resorts."
          }
        ]
      },
      {
        segments: [
          { t: "Grenada offers more things to see and do " },
          { g: "D" },
          {
            t:
              ". Waterfalls gush in the island's interior. Hiking trails thread through the lush rainforest. Coral reefs rim the coast, "
          },
          { g: "E" },
          {
            t:
              ". History experts will also enjoy exploring the country's forts and museums, "
          },
          { g: "F" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "So, the Caribbean island of Grenada is an excellent holiday destination and home to beautiful resorts. The island still grows and exports different spices like nutmeg, cloves, vanilla, cinnamon, and ginger."
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "than booking one's trip in advance"
      },
      {
        num: 2,
        text: "which is one of the best beaches"
      },
      {
        num: 3,
        text: "than just sunbathing on its golden sands"
      },
      {
        num: 4,
        text: "where one can swim, dive, snorkel, and fish"
      },
      {
        num: 5,
        text: "which are numerous and all special there"
      },
      {
        num: 6,
        text: "bustling with hundreds of sailboats"
      },
      {
        num: 7,
        text: "looking for an authentic Caribbean getaway"
      }
    ],

    key: { A: 7, B: 6, C: 2, D: 3, E: 4, F: 5 },
    extraFragmentNum: 1,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> цепляйся за устойчивые рамки — <strong>choice for tourists V-ing…</strong>, <strong>harbour + причастный/прилагательный хвост</strong>, <strong>more… than…</strong>, место <strong>where…</strong> у берега.</p>" +
      "<p><strong>Лайфхак:</strong> если видишь <strong>more things to see and do</strong>, почти всегда ждёт сравнение с <strong>than…</strong>; проверь, от базы ли отталкивается «лишний» <strong>than…</strong>.</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">a top choice for tourists</span><span class="ege-gt-link-ru">существительное + for</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">looking for an authentic… getaway</span><span class="ege-gt-link-ru">уточнение «каких туристов»</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">St. George\'s…</span><span class="ege-gt-link-ru">новый абзац без дыры</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> после <em>for tourists</em> естественен **V-ing**‑уточнитель тем же направлением мысли («ищут отдых»).</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «than…» из сравнения — оно другое грамматическое окно (см. <strong>D</strong>).</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">with its busy harbour</span><span class="ege-gt-link-ru">образ города</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">bustling with… sailboats</span><span class="ege-gt-link-ru">описание гавани</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">контраст с «тихими» островами</span><span class="ege-gt-link-ru">логика абзаца</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> прилагательное/причастие **bustling with…** к «оживлённой» гавани.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «which is one of the best beaches» — это к <strong>Grand Anse</strong> (см. <strong>C</strong>).</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Grand Anse Beach</span><span class="ege-gt-link-ru">антеседент</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which is one of the best beaches</span><span class="ege-gt-link-ru">определение пляжа</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">in the Caribbean</span><span class="ege-gt-link-ru">локация рейтинга</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> запятая + **which** к названию пляжа; дальше **in the Caribbean** завершает оценку «места».</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «where one can swim…» — уточняет берег/место для активности, а не «лучший пляж» перед обще-карибским контекстом.</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">more things to see and do</span><span class="ege-gt-link-ru">компаратив</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">than just sunbathing…</span><span class="ege-gt-link-ru">контраст «не только пляж»</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">waterfalls, trails, reefs…</span><span class="ege-gt-link-ru">перечисление «чего ещё»</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> классика: <strong>more … than …</strong> — вторая часть объясняет, чему «больше» активности принадлежит.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «than booking one\'s trip…» — не поддерживается списком водопадов/троп (см. <strong>extra</strong>).</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Coral reefs rim the coast</span><span class="ege-gt-link-ru">завершённое предложение-картина</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">where one can swim…</span><span class="ege-gt-link-ru">место действия</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">forts and museums</span><span class="ege-gt-link-ru">следующий тип досуга</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> относительное **where** к зоне у моря рифов/берега.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «which are numerous…» — мн.ч. ждёт мн. существительных рядом (см. <strong>F</strong>), не кораллы+берег как одна «пара».</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">forts and museums</span><span class="ege-gt-link-ru">сочетание существительных</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which are numerous… there</span><span class="ege-gt-link-ru">which → оба объекта</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">итоговый абзац So…</span><span class="ege-gt-link-ru">замыкание текста</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **which are** согласуется с **форты и музеи** (множественное).</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> путают с **where** у кораллов (см. <strong>E</strong>).</p>'
    },

    explainRu: {
      A:
        "К **for tourists** логично продолжение **looking for…** — **фрагмент 7**.",
      B:
        "К **busy harbour** — описание с **bustling with…** — **фрагмент 6**.",
      C:
        "После названия пляжа — **which is one of the best beaches** перед **in the Caribbean** — **фрагмент 2**.",
      D:
        "К **more things to see and do** — сравнение **than just sunbathing…** — **фрагмент 3**.",
      E:
        "После рифов у берега — место **where one can swim…** — **фрагмент 4**.",
      F:
        "К **forts and museums** — **which are numerous…** (мн.ч.) — **фрагмент 5**.",
      extra:
        "Лишний — **фрагмент 1** (**than booking one's trip…**): не продолжает конструкцию **more things to see and do** так же прямо, как контраст с «только загар на песке», и не подводит к перечислению активностей внутри острова."
    }
  });
})(typeof window !== "undefined" ? window : this);
