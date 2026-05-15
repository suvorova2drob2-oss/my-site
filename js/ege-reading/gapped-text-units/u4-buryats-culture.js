/**
 * ЕГЭ Reading — Gapped Text, юнит 4 · Buryats and their unusual culture.
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u4-buryats-culture",
    unitOrder: 4,
    title: "Unit 4 · Buryats and their unusual culture",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              "The Buryats are one of Russia's ancient indigenous clans, and among the largest Siberian nationalities. Integral to the culture of south-central Siberia, the estimated Buryatia population is over 500 thousand people. "
          }
        ]
      },
      {
        segments: [
          {
            t: "The Buryats treasure their historical heritage "
          },
          { g: "A" },
          {
            t:
              " from generation to generation. Interestingly, the Buryat people are the descendants of mainly Mongolian tribes "
          },
          { g: "B" },
          {
            t:
              ". Many local traditions were created by Mongolians, including vertical writing script and the nomadic lifestyle."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "The first distinctive feature that strikes the eye of every tourist is the fact "
          },
          { g: "C" },
          {
            t:
              ". They are actively used in their religious practices and every colour has its special meaning. Even the fabrics "
          },
          { g: "D" },
          {
            t:
              " are also very bright and vivid. The Buryats believe "
          },
          { g: "E" },
          {
            t:
              " which is assigned to a person according to his or her birth year. During a trip to Buryatia, any tourist will have a great chance to find out about their own special colour."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Traditional Siberian hospitality is also worth mentioning. The Buryats are especially warm-hearted and vibrant people. Visitors should not miss the opportunity to get an insight into the fascinating character and lifestyle of the local people, treat themselves with delicious organic Buryat food, "
          },
          { g: "F" },
          {
            t:
              ", and let themselves be enchanted by unusual Buryat music."
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "living in this area for over a millennium"
      },
      {
        num: 2,
        text: "and carefully pass down their unique customs"
      },
      {
        num: 3,
        text: "that everyone has their own unique colour"
      },
      {
        num: 4,
        text: "that the Buryat culture is full of colours"
      },
      {
        num: 5,
        text: "that are used for a Buryat traditional costume"
      },
      {
        num: 6,
        text: "including healthy food habits and active lifestyle"
      },
      {
        num: 7,
        text: "which is cooked according to ancient recipes"
      }
    ],

    key: { A: 2, B: 1, C: 4, D: 5, E: 3, F: 7 },
    extraFragmentNum: 6,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> лови «якорь» слева: <strong>the fact that…</strong>, <strong>believe that…</strong>, причастный/относительный хвост к <em>fabrics</em> или <em>food</em>.</p>" +
      "<p><strong>Лайфхак:</strong> если после пропуска идёт <strong>which…</strong>, вставка должна содержать существительное, к которому цепляется <em>which</em> (часто <em>colour</em> или <em>food</em>).</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">treasure their historical heritage</span><span class="ege-gt-link-ru">ценят наследие</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">and… pass down… customs</span><span class="ege-gt-link-ru">второй глагол того же ряда</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">from generation to generation</span><span class="ege-gt-link-ru">оборот времени</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> один союз <strong>and</strong> связывает два действия: «берегут наследие» и «передают обычаи»; дальше без лишней запятой идёт оборот времени.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> тянут громоздкое про образ жизни — оно ближе к «лишнему» или к другому грамматическому месту.</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">descendants of… Mongolian tribes</span><span class="ege-gt-link-ru">существительное + уточнение</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">living in this area…</span><span class="ege-gt-link-ru">причастный оборот к племенам</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">точка → про традиции монголов</span><span class="ege-gt-link-ru">новая инфа без дыры</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> после <em>tribes</em> нужен **–ing**-хвост, а не новое придаточное с <em>that</em> о цветах.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> путают с блоком про цвета в следующем абзаце.</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">The first feature… is the fact</span><span class="ege-gt-link-ru">ждёт пояснение</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">that the culture is full of colours</span><span class="ege-gt-link-ru">придаточное к fact</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">They are actively used</span><span class="ege-gt-link-ru">They = colours</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> классика: <strong>the fact that + утверждение</strong>; следующая фраза логично продолжает тему цветов.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> ставят «у каждого свой цвет» сюда — тогда <em>They</em> в следующем предложении цепляется хуже.</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Even the fabrics</span><span class="ege-gt-link-ru">существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">that are used for… costume</span><span class="ege-gt-link-ru">определяющее that</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">are also very bright</span><span class="ege-gt-link-ru">сказуемое для fabrics</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> между существительным и <strong>are</strong> вставлен определительный блок <strong>that…</strong>.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> подсовывают причастие про еду — оно для другого абзаца.</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">The Buryats believe</span><span class="ege-gt-link-ru">глагол с придаточным</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">that everyone has… colour</span><span class="ege-gt-link-ru">объект веры</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">which is assigned… birth year</span><span class="ege-gt-link-ru">уточнение к colour</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> после вставки сразу **which** — значит внутри вставки должно быть <strong>colour</strong>, к которому относится назначение по году.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> дублируют общий тезис «культура полна красок» из пропуска <strong>C</strong>.</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">delicious organic… food</span><span class="ege-gt-link-ru">существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which is cooked… recipes</span><span class="ege-gt-link-ru">относит. к еде</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">and let themselves be enchanted</span><span class="ege-gt-link-ru">параллель в списке советов</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> ряд через запятую: поесть → <strong>неопред. предложение к food</strong> → и насладиться музыкой.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> <strong>6</strong> — грамматически тянется к «образу жизни», а не к конкретному блюду в этой конструкции.</p>'
    },

    explainRu: {
      A:
        "К <em>treasure heritage</em> пристраивается второе действие с <strong>and</strong> и хвостом «из поколения в поколение» — **фрагмент 2**.",
      B:
        "К <em>tribes</em> логично примыкает уточнение «живущие в регионе тысячу лет» — **фрагмент 1**.",
      C:
        "После <strong>the fact</strong> нужно общее утверждение о культуре и цветах, чтобы дальше <em>They</em> означало краски — **фрагмент 4**.",
      D:
        "Между <em>fabrics</em> и <strong>are</strong> — определение <strong>that are used…</strong> — **фрагмент 5**.",
      E:
        "Перед <strong>which is assigned…</strong> должно появиться <em>unique colour</em> — **фрагмент 3**.",
      F:
        "Оборот с <strong>which</strong> уточняет способ приготовления еды — **фрагмент 7**.",
      extra:
        "Лишний — **фрагмент 6**: по смыслу про привычки/образ жизни, но в данной цепочке «еда → запятая → … → и музыка» естественнее рецептура (**7**)."
    }
  });
})(typeof window !== "undefined" ? window : this);
