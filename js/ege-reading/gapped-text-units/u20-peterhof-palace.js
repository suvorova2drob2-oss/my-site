/**
 * ЕГЭ Reading — Gapped Text, юнит 20 · Peterhof (Petergof).
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u20-peterhof-palace",
    unitOrder: 20,
    title: "Unit 20 · Peterhof Palace",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              "Peterhof is a palace-and-park ensemble on the southern shore of the Gulf of Finland, about 30 km west of central St. Petersburg. Work on the main palace began in 1714. "
          },
          { g: "A" },
          {
            t:
              " The steep terraces were engineered so that hundreds of fountains could run by gravity from pools on the hill."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "The Samson Fountain at the foot of the Grand Cascade, "
          },
          { g: "B" },
          {
            t:
              ", has been the boldest symbol of the park since the age of Peter the Great."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "During the Great Patriotic War, "
          },
          { g: "C" },
          {
            t:
              " park staff buried some statues while shells set roofs on fire. Post-war specialists, "
          },
          { g: "D" },
          {
            t:
              ", brought gilding and stucco back to the state rooms."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Today the Lower Gardens, "
          },
          { g: "E" },
          {
            t:
              ", still fill with visitors on fine summer days. Behind the scenes, the pump halls, "
          },
          { g: "F" },
          {
            t:
              ", keep the cascades running while engineers watch the flow meters."
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "when Peter was turning his new capital into a naval power"
      },
      {
        num: 2,
        text: "which depicts Samson forcing open a lion's jaws"
      },
      {
        num: 3,
        text: "when German troops controlled the Peterhof coast"
      },
      {
        num: 4,
        text: "who rebuilt the interiors using wartime photographs"
      },
      {
        num: 5,
        text: "which visitors can walk through from April to late October"
      },
      {
        num: 6,
        text: "because the Baltic tides confused the early hydraulic plans"
      },
      {
        num: 7,
        text: "which were modernised after 2000 to reduce water waste"
      }
    ],

    key: { A: 1, B: 2, C: 3, D: 4, E: 5, F: 7 },
    extraFragmentNum: 6,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> поймай опорные слова — **1714** + **when Peter… naval power**, **Samson Fountain** + **which depicts…**, **Great Patriotic War** + **when German troops…**, **specialists** + **who rebuilt…**, **Lower Gardens** + **which visitors can walk through…**, **pump halls** + **which were modernised…**.</p>" +
      "<p><strong>Лайфхак:</strong> после **Work began in 1714** чаще идёт **when**-вставка про эпоху, а не **because** про приливы — проверь согласование времени и подлежащего (**who** к людям, **which** к вещам).</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Work on the main palace began in 1714</span><span class="ege-gt-link-ru">факт + дата</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">when Peter was turning his new capital into a naval power</span><span class="ege-gt-link-ru">исторический фон</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">The steep terraces were engineered…</span><span class="ege-gt-link-ru">техника фонтанов</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **when** уточняет момент начала работ; дальше без дублирования подлежащего.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **because the Baltic tides confused…** (лишний) — не объясняет старт 1714 и не состыкуется по смыслу с террасами.</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">The Samson Fountain</span><span class="ege-gt-link-ru">имя объекта</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which depicts Samson forcing open a lion\'s jaws</span><span class="ege-gt-link-ru">описание скульптурной сцены</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">has been the boldest symbol…</span><span class="ege-gt-link-ru">оценка / статус</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **which** к **Fountain**; запятые обрамляют нерегистрирующую вставку.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> тянут **who rebuilt the interiors…** — это про реставраторов, не про фонтан.</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">During the Great Patriotic War</span><span class="ege-gt-link-ru">рамка войны</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">when German troops controlled the Peterhof coast</span><span class="ege-gt-link-ru">оккупация / линия фронта</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">park staff buried some statues…</span><span class="ege-gt-link-ru">действия на месте</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **when** уточняет обстановку после **During the war** (избегай повторного «война» другими словами — вставка даёт конкретику).</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **which visitors can walk through from April…** — про мирные экскурсии, не про 1940-е.</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Post-war specialists</span><span class="ege-gt-link-ru">люди-агенты</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">who rebuilt the interiors using wartime photographs</span><span class="ege-gt-link-ru">метод реставрации</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">brought gilding and stucco back…</span><span class="ege-gt-link-ru">результат</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **who** только к людям (**specialists**).</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **which were modernised after 2000** — относится к **pump halls** в конце текста (с см. <strong>F</strong>).</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Today the Lower Gardens</span><span class="ege-gt-link-ru">зона парка «сейчас»</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which visitors can walk through from April to late October</span><span class="ege-gt-link-ru">режим посещения</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">still fill with visitors…</span><span class="ege-gt-link-ru">нагрузка / туризм</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **which** к **Gardens**; календарное окно логично перед **fill with visitors**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> путать с **when German troops…** — другая эпоха.</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">the pump halls</span><span class="ege-gt-link-ru">техническая инфраструктура</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which were modernised after 2000 to reduce water waste</span><span class="ege-gt-link-ru">обновление системы</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">keep the cascades running…</span><span class="ege-gt-link-ru">текущая работа</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **which** к **halls** (сооружения); параллель с работой инженеров.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **who rebuilt the interiors…** — не к залам насосов, а к реставраторам интерьеров (см. <strong>D</strong>).</p>'
    },

    explainRu: {
      A:
        "К **Work … began in 1714** — **when Peter was turning his new capital into a naval power** — **фрагмент 1**.",
      B:
        "К **The Samson Fountain** — **which depicts Samson forcing open a lion's jaws** — **фрагмент 2**.",
      C:
        "К **During the Great Patriotic War** — **when German troops controlled the Peterhof coast** — **фрагмент 3**.",
      D:
        "К **Post-war specialists** — **who rebuilt the interiors using wartime photographs** — **фрагмент 4**.",
      E:
        "К **the Lower Gardens** — **which visitors can walk through from April to late October** — **фрагмент 5**.",
      F:
        "К **the pump halls** — **which were modernised after 2000 to reduce water waste** — **фрагмент 7**.",
      extra:
        "Лишний — **фрагмент 6** (**because the Baltic tides confused the early hydraulic plans**): грамматически может казаться причиной, но не вытекает **из даты 1714** и не объясняет инженерное решение с террасами так, как военный/мирный контекст других вставок."
    }
  });
})(typeof window !== "undefined" ? window : this);
