/**
 * ЕГЭ Reading — Gapped Text, юнит 18 · The Bronze Horseman (St. Petersburg).
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u18-bronze-horseman",
    unitOrder: 18,
    title: "Unit 18 · The Bronze Horseman",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              "Saint Petersburg was founded in 1703 by Tsar Peter the Great. During the following two centuries, "
          },
          { g: "A" },
          {
            t:
              ", the city quickly developed into the world's cultural centre. Despite numerous monumental buildings, the city has an unmistakable charm thanks to its channels, bridges and statues "
          },
          { g: "B" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "The statue of Peter the Great, known as the Bronze Horseman, is a tribute to the founder of St. Petersburg. The monument is one of the most famous symbols of the city. The impressive statue depicts the founder of St. Petersburg "
          },
          { g: "C" },
          {
            t:
              ", guiding his country towards the future."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "The pedestal of the statue resembles a cliff "
          },
          { g: "D" },
          {
            t:
              " of red granite. It took nine months to transport it from the Gulf of Finland. An inscription on the side of the pedestal says \"to Peter the First from Catherine the Second\" in Latin and Russian."
          }
        ]
      },
      {
        segments: [
          { t: "Peter and his horse, " },
          { g: "E" },
          {
            t:
              ", sit atop the cliff, facing the west."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "It is said that the founder of the city faces the west because the countries of the West were his source of inspiration for ideas to reform Old Russia. A snake, a symbol of treason, is trampled by the horse. As long "
          },
          { g: "F" },
          {
            t:
              ", the legend says, enemy forces will never overtake St. Petersburg. That led officials to protect the statue during World War II with sandbags and a wooden structure surrounding it. The statue survived through the war with barely a scratch."
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "which is rearing up on its hind legs"
      },
      {
        num: 2,
        text: "as a quite determined absolute leader"
      },
      {
        num: 3,
        text: "and is made from one huge, solid piece"
      },
      {
        num: 4,
        text: "which give St. Petersburg romantic flair"
      },
      {
        num: 5,
        text: "when St. Petersburg was the capital of Russia"
      },
      {
        num: 6,
        text: "when channel cruises are so popular with tourist"
      },
      {
        num: 7,
        text: "as the statue keeps its location in Senatskaya Square"
      }
    ],

    key: { A: 5, B: 4, C: 2, D: 3, E: 1, F: 7 },
    extraFragmentNum: 6,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> лови рамки — **During… centuries, when…**, каналы/мосты **which give…**, **depicts… as a leader**, **cliff and is made from… piece**, конь **which is rearing**, **As long as** + условие про площадь.</p>" +
      "<p><strong>Лайфхак:</strong> **As long** почти всегда требует **as** в вставке (**as long as**); проверь, что дальше идёт логичное условие, а не **when cruises…**.</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">During the following two centuries</span><span class="ege-gt-link-ru">рамка времени</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">when St. Petersburg was the capital…</span><span class="ege-gt-link-ru">уточнение эпохи</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">the city quickly developed…</span><span class="ege-gt-link-ru">следствие</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> вставка **when** между запятыми задаёт исторический контекст расцвета.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **when channel cruises…** про туризм с воды — не про столичный статус (см. <strong>extra</strong>).</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">channels, bridges and statues</span><span class="ege-gt-link-ru">перечень (мн.)</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which give St. Petersburg romantic flair</span><span class="ege-gt-link-ru">which → они; give</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">точка — закрытие мысли о шарме</span><span class="ege-gt-link-ru">логичный финал</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **give** во мн.ч. согласуется с суммой однородных субъектов.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **is made from one piece** — про материал постамента, не про «романтику» (см. <strong>D</strong>).</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">depicts the founder…</span><span class="ege-gt-link-ru">глагол образа</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">as a quite determined absolute leader</span><span class="ege-gt-link-ru">как + роль</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">guiding his country…</span><span class="ege-gt-link-ru">сопутствующее действие</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> классика **depict someone as…**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **which is rearing** — к коню в другом предложении (см. <strong>E</strong>).</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">resembles a cliff</span><span class="ege-gt-link-ru">сравнение</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">and is made from one huge, solid piece</span><span class="ege-gt-link-ru">второе сказуемое к pedestal</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">of red granite</span><span class="ege-gt-link-ru">материал</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> союз **and** связывает **resembles** и **is made from** про постамент.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **romantic flair** — про городской пейзаж, не геологию камня (см. <strong>B</strong>).</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Peter and his horse</span><span class="ege-gt-link-ru">пара наверху</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which is rearing up on its hind legs</span><span class="ege-gt-link-ru">which → horse; is</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">sit atop the cliff…</span><span class="ege-gt-link-ru">положение</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> нерегистрирующее **which** между запятыми; **its** относится к лошади.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «пока статуя стоит на площади» относится к **As long as** (см. <strong>F</strong>).</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">As long</span><span class="ege-gt-link-ru">ждёт of / as</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">as the statue keeps its location…</span><span class="ege-gt-link-ru">условие легенды</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">enemy forces will never…</span><span class="ege-gt-link-ru">следствие</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **as long as + клауза**; вставка уже начинается с **as**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> путают с **when… capital** из вводной хронологии (см. <strong>A</strong>).</p>'
    },

    explainRu: {
      A:
        "Между временными рамками — **when St. Petersburg was the capital of Russia** — **фрагмент 5**.",
      B:
        "К **channels, bridges and statues** — **which give St. Petersburg romantic flair** — **фрагмент 4**.",
      C:
        "К **depicts the founder** — образ **as a quite determined absolute leader** — **фрагмент 2**.",
      D:
        "К **resembles a cliff** вторым сказуемым **and is made from one huge, solid piece** — **фрагмент 3**.",
      E:
        "К **Peter and his horse** — **which is rearing up on its hind legs** (лошадь) — **фрагмент 1**.",
      F:
        "После **As long** — **as the statue keeps its location in Senatskaya Square** — **фрагмент 7**.",
      extra:
        "Лишний — **фрагмент 6** (**when channel cruises…**): не связывает **During two centuries** с культурным центром и не заполняет **As long as**."
    }
  });
})(typeof window !== "undefined" ? window : this);
