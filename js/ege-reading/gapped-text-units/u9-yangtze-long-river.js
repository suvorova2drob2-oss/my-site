/**
 * ЕГЭ Reading — Gapped Text, юнит 9 · Yangtze (Long River).
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u9-yangtze-long-river",
    unitOrder: 9,
    title: "Unit 9 · Long River: the Yangtze",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              'Known in China as Chang Jiang or the "Long River", the mighty Yangtze River extends more than 6,000 kilometres. It is the longest and the most important river in China, '
          },
          { g: "A" },
          { t: " after the Amazon and the Nile." }
        ]
      },
      {
        segments: [
          { t: "Flowing from Tibet in the west " },
          { g: "B" },
          {
            t:
              ", the Yangtze has been China's major transportation route for more than 2,000 years. Nearly 2,700 kilometres of the river are navigable. Its vast area covers about one-fifth of the total area of the country, and encompasses a quarter of the country's agricultural land."
          }
        ]
      },
      {
        segments: [
          { t: "Its immense length ensures " },
          { g: "C" },
          {
            t:
              " in China. But by far the most popular attraction for tourists is the beautiful Three Gorges: Qutang, Wu, and Xiling. They are in a 200-kilometre stretch between the towns of Fengjie and Yichang."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Here the river winds its way through the gorges. Their rugged cliffs and high mountain peaks in the stretch create scenery "
          },
          { g: "D" },
          {
            t:
              ". In some places it is a mix of raging torrents and dangerous shallows."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "The Three Gorges were once a dangerous stretch of the river, but were nevertheless frequently used for shipping. Since the construction of the Three Gorges Dam, "
          },
          { g: "E" },
          {
            t:
              ", the river level has been raised, and it has become much quieter and more navigable."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Numerous sightseeing options are available, from luxurious riverboat cruises "
          },
          { g: "F" },
          {
            t:
              ". Most of the river cruises focus on the region's many historical attractions and places of scenic beauty."
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "that is as dramatic as the Grand Canyon"
      },
      {
        num: 2,
        text: "and the third longest river in the world"
      },
      {
        num: 3,
        text: "that all of the cultural attractions are"
      },
      {
        num: 4,
        text: "which was structurally complete in 2006"
      },
      {
        num: 5,
        text: "that the river can be visited at numerous points"
      },
      {
        num: 6,
        text: "to Shanghai in the east through eight provinces"
      },
      {
        num: 7,
        text: "to adventure tours along the dramatic river sections"
      }
    ],

    key: { A: 2, B: 6, C: 5, D: 1, E: 4, F: 7 },
    extraFragmentNum: 3,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> цепляйся за скелеты — <strong>… in China, and the third… after…</strong>, участковый коридор <strong>from… west … east…</strong>, <strong>ensures that…</strong>, <strong>scenery that…</strong>, вставка между запятыми у дамбы, пара <strong>from … to …</strong>.</p>" +
      "<p><strong>Лайфхак:</strong> если видишь <strong>from luxurious … cruises</strong>, очень часто второй конец — <strong>to … tours…</strong>; проверь запятую/точку, чтобы не «оторвать» инфинитивный ряд.</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">the longest and the most important river in China</span><span class="ege-gt-link-ru">перечень статусов</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">and the third longest… in the world</span><span class="ege-gt-link-ru">ещё один титул</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">after the Amazon and the Nile</span><span class="ege-gt-link-ru">рейтинг длины</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> запятая перед **and the third…** продолжает однотипную характеристику реки.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «that the river can be visited…» — это к глаголу **ensures** (см. <strong>C</strong>).</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Flowing from Tibet in the west</span><span class="ege-gt-link-ru">начало коридора</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">to Shanghai… through eight provinces</span><span class="ege-gt-link-ru">конец трассы</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">the Yangtze has been… route</span><span class="ege-gt-link-ru">основное предложение</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> причастная цепочка **from … to …** завершается перед **the Yangtze has been**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «to adventure tours…» — второй конец другой конструкции <strong>from … to …</strong> (см. <strong>F</strong>).</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Its immense length ensures</span><span class="ege-gt-link-ru">глагол + объект</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">that the river can be visited… points</span><span class="ege-gt-link-ru">придаточное к ensures</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">in China. But… Three Gorges…</span><span class="ege-gt-link-ru">контраст «общее → главный магнит»</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **ensures that + полное придаточное**; дальше **But** вводит популярный участок.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> оборот про Гранд-Каньон — к существительному **scenery** (см. <strong>D</strong>).</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">create scenery</span><span class="ege-gt-link-ru">прямой объект</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">that is as dramatic as the Grand Canyon</span><span class="ege-gt-link-ru">определение к scenery</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">In some places it is a mix…</span><span class="ege-gt-link-ru">деталь характера реки</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **scenery that is as dramatic as…** — определяющее придаточное.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> дата **2006** относится к **дамбе**, не к пейзажу (см. <strong>E</strong>).</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Since the construction of the Three Gorges Dam</span><span class="ege-gt-link-ru">заголовок события</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which was structurally complete in 2006</span><span class="ege-gt-link-ru">уточнение объекта</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">the river level has been raised</span><span class="ege-gt-link-ru">следствие</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> вставка между двумя запятыми — нерегистрирующее **which** к **Dam**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «cultural attractions are…» — обрывочное придаточное без продолжения (см. <strong>extra</strong>).</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">from luxurious riverboat cruises</span><span class="ege-gt-link-ru">первый полюс диапазона</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">to adventure tours… river sections</span><span class="ege-gt-link-ru">второй полюс</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Most of the river cruises…</span><span class="ege-gt-link-ru">уточнение программ</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> классика **from A to B** в одном предложении.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> путают с географическим **to Shanghai…** (см. <strong>B</strong>).</p>'
    },

    explainRu: {
      A:
        "Продолжение статуса реки перед **after the Amazon…** — **and the third longest river in the world** — **фрагмент 2**.",
      B:
        "Коридор **from Tibet… west** замыкает **to Shanghai… through eight provinces** — **фрагмент 6**.",
      C:
        "После **ensures** — полное **that the river can be visited at numerous points** — **фрагмент 5**.",
      D:
        "К **scenery** — сравнительное определение **that is as dramatic as the Grand Canyon** — **фрагмент 1**.",
      E:
        "Между запятыми после **Dam** — **which was structurally complete in 2006** — **фрагмент 4**.",
      F:
        "Конструкция **from luxurious… cruises** + **to adventure tours…** — **фрагмент 7**.",
      extra:
        "Лишний — **фрагмент 3** (**that all of the cultural attractions are**): обрыв без сказуемого/продолжения, не образует полного **ensures that…** и не подходит к **scenery**."
    }
  });
})(typeof window !== "undefined" ? window : this);
