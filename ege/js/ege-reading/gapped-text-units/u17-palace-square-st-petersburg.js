/**
 * ЕГЭ Reading — Gapped Text, юнит 17 · Palace Square (St. Petersburg).
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u17-palace-square-st-petersburg",
    unitOrder: 17,
    title: "Unit 17 · Palace Square, St. Petersburg",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              "The magnificent Palace Square forms the heart of historic St. Petersburg. Surrounded by some of the city's most magnificent buildings "
          },
          { g: "A" },
          {
            t:
              ", it is an architectural showcase and one of the main tourist attractions in the city."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Palace Square was laid out in 1819-1829 by Carlo Rossi, a neoclassicist architect. He was also responsible for one of the most monumental buildings along the square, the General Staff Building."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "The star attraction of the square is the immense column in its centre. "
          },
          { g: "B" },
          {
            t:
              " to Russia's victory over Napoleonic France. The column was designed, ironically, by the French-born architect A. de Montferrand and built between 1830 and 1834. It stands at 47.4 metres or almost 156 feet and is topped with an angel "
          },
          { g: "C" },
          {
            t:
              " Emperor Alexander I."
          }
        ]
      },
      {
        segments: [
          { t: "The monument, " },
          { g: "D" },
          {
            t:
              ", weighs six hundred tons. No cranes were used to place it in the square."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "The buildings around Palace Square exhibit a variety of architectural styles. They serve various purposes. On the northern side is the grand Baroque-style Winter Palace, built between 1754 and 1762. The main residence of the Russian Tsars, this palace serves "
          },
          { g: "E" },
          {
            t:
              ". The Hermitage houses several million objects. On the southern side is a yellow and white building that was the former home of the Imperial Army General Staff. The building now houses the Hermitage's exceptional collections"
          },
          { g: "F" },
          { t: "." }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "whose face is said to resemble that of"
      },
      {
        num: 2,
        text: "which were founded by Russian emperors"
      },
      {
        num: 3,
        text: "as the Alexander Column, it is a monument"
      },
      {
        num: 4,
        text: "and it would take years to see everything there"
      },
      {
        num: 5,
        text: "as the main building for the Hermitage Museum"
      },
      {
        num: 6,
        text: "which is considered a great feat of engineering"
      },
      {
        num: 7,
        text: "who designed many streets and squares in the city"
      }
    ],

    key: { A: 2, B: 3, C: 1, D: 6, E: 5, F: 4 },
    extraFragmentNum: 7,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> держи контуры — **buildings which were founded…**, колонна + **as…, it is a monument to**, ангел + **whose face…**, **The monument, which…**, дворец **serves as…**, финал про масштаб коллекций.</p>" +
      "<p><strong>Лайфхак:</strong> между **topped with an angel** и именем императора чаще всего вставка с **whose** (лицевые черты), а не **who designed…**.</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">magnificent buildings</span><span class="ege-gt-link-ru">существительное (мн.)</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which were founded by Russian emperors</span><span class="ege-gt-link-ru">определяющее which</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">it is an architectural showcase</span><span class="ege-gt-link-ru">следствие Surrounded by…</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> запятая + **which** к зданиям; **were** согласуется с **buildings**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **who designed streets** — ждало бы сразу **Carlo Rossi** как антецедент (см. <strong>extra</strong>).</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">the immense column in its centre</span><span class="ege-gt-link-ru">герой абзаца</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">as the Alexander Column, it is a monument</span><span class="ege-gt-link-ru">название + тезис</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">to Russia\'s victory…</span><span class="ege-gt-link-ru">цель памятника</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> после центра колонны — официальное имя и формулировка **monument to** + победа.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **feat of engineering** — про монтаж/вес, не про политический смысл (см. <strong>D</strong>).</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">topped with an angel</span><span class="ege-gt-link-ru">существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">whose face is said to resemble that of</span><span class="ege-gt-link-ru">whose → ангел</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Emperor Alexander I</span><span class="ege-gt-link-ru">образ для сходства</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **whose** к одушевлённому/персонифицированному **angel** в ремесленной легенде.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **which were founded** — не к одному ангелу (см. <strong>A</strong>).</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">The monument</span><span class="ege-gt-link-ru">существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which is considered a great feat of engineering</span><span class="ege-gt-link-ru">оценка инженерии</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">weighs six hundred tons… No cranes</span><span class="ege-gt-link-ru">иллюстрация сложности</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> нерегистрирующее **which** между запятыми; дальше факты про вес и установку без кранов.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **monument to victory** уже закрыт в другом пропуске (см. <strong>B</strong>).</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">this palace serves</span><span class="ege-gt-link-ru">глагол + роль</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">as the main building for the Hermitage Museum</span><span class="ege-gt-link-ru">as + функция</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">The Hermitage houses… objects</span><span class="ege-gt-link-ru">следующий блок</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **serve as + title** — типичная коллокация для здания-музея.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «годами смотреть всё» уместнее после «коллекции» (см. <strong>F</strong>).</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">exceptional collections</span><span class="ege-gt-link-ru">масштаб фондов</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">and it would take years to see everything there</span><span class="ege-gt-link-ru">эффект гиперболы</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">точка — логичный финал</span><span class="ege-gt-link-ru">замыкание мысли</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **and** присоединяет следствие размеров коллекций.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> вставка **as the Alexander Column** искажает историю Зимнего (см. <strong>B</strong>).</p>'
    },

    explainRu: {
      A:
        "К **buildings** в обороте **Surrounded by…** — **which were founded by Russian emperors** — **фрагмент 2**.",
      B:
        "После центра колонны — **as the Alexander Column, it is a monument** + **to Russia's victory…** — **фрагмент 3**.",
      C:
        "К **angel** перед именем императора — **whose face is said to resemble that of** — **фрагмент 1**.",
      D:
        "Между запятыми у **The monument** — **which is considered a great feat of engineering** — **фрагмент 6**.",
      E:
        "После **this palace serves** — **as the main building for the Hermitage Museum** — **фрагмент 5**.",
      F:
        "Завершение про коллекции Эрмитажа — **and it would take years to see everything there** — **фрагмент 4**.",
      extra:
        "Лишний — **фрагмент 7** (**who designed many streets…**): в готовом тексте имя **Carlo Rossi** уже введено отдельным предложением; относительное **who** без гладкой склейки к **architect** в том же блоке не выделено пропуском **A–F**."
    }
  });
})(typeof window !== "undefined" ? window : this);
