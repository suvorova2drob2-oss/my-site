/**
 * ЕГЭ Reading — Gapped Text, юнит 15 · Zaryadye Park in Moscow.
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u15-zaryadye-park-moscow",
    unitOrder: 15,
    title: "Unit 15 · Zaryadye Park in Moscow",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              "For its 870th birthday, Moscow got a gift that will keep on giving — Zaryadye Park. Zaryadye Park is the newest and the most modern park of Moscow. It is the city's first large-scale park in 50 years, "
          },
          { g: "A" },
          {
            t:
              " perhaps transform the international perception of Russia's capital."
          }
        ]
      },
      {
        segments: [
          {
            t: "The amazing 35-acre park, "
          },
          { g: "B" },
          {
            t:
              ", samples the country's distinct regional landscapes: steppes, tundra, wetlands and forests. They are all beautifully set not far from the Kremlin and Red Square. Apart from the 70-metre-high \"floating\" bridge over the Moskva River, the park features an amphitheater, five pavilions, and a concert hall."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "The park stands in the historic district and on the former site of the old Soviet hotel, "
          },
          { g: "C" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "The initial idea was to turn the site into a retail complex, "
          },
          { g: "D" },
          {
            t:
              " a new public green space instead."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Harmonizing urban life and nature, the architects created "
          },
          { g: "E" },
          {
            t:
              ". Zaryadye Park will be perfect for a short period of rest among its 750 gardens. Visitors can also enjoy a spectacular view from the \"floating bridge\", explore Moscow with a multimedia flight simulator and walk through an ice cave."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Apart from being an exceptional architectural project and a futuristic public space, some people expect "
          },
          { g: "F" },
          {
            t:
              " on Moscow and Russia in general."
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "but it was decided to give Muscovites"
      },
      {
        num: 2,
        text: "which was completely demolished in 2006"
      },
      {
        num: 3,
        text: "a space where visitors may wander freely"
      },
      {
        num: 4,
        text: "which was designed by an international consortium"
      },
      {
        num: 5,
        text: "an unattractive urban landscape in the city's suburb"
      },
      {
        num: 6,
        text: "which has brought \"wild urbanism\" into Moscow to"
      },
      {
        num: 7,
        text: "that Zaryadye Park will provide an entirely new outlook"
      }
    ],

    key: { A: 6, B: 4, C: 2, D: 1, E: 3, F: 7 },
    extraFragmentNum: 5,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> цепляйся за хвосты — вставка с **to** перед **perhaps transform**, **park, which…**, **hotel, which…**, контраст **retail complex**, **но** решение в пользу зелёной зоны, **created + space where…**, **expect that… outlook on**.</p>" +
      "<p><strong>Лайфхак:</strong> если после **expect** идёт предлог **on** чуть дальше по фразе, ищи **that + outlook** — это типичный «мост» к <em>outlook on…</em>.</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">first large-scale park in 50 years</span><span class="ege-gt-link-ru">тезис о масштабе</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which has brought… \u201cwild urbanism\u201d… to</span><span class="ege-gt-link-ru">инфинитив за to дальше</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">perhaps transform… perception</span><span class="ege-gt-link-ru">цель / эффект</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **to** в конце вставки «кормит» инфинитив **transform**; **perhaps** — наречие к глаголу.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> реляция **which was designed…** — о **парке**, не о «первом за 50 лет» (см. <strong>B</strong>).</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">The amazing 35-acre park</span><span class="ege-gt-link-ru">существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which was designed by an international consortium</span><span class="ege-gt-link-ru">происхождение проекта</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">samples… landscapes</span><span class="ege-gt-link-ru">следующий глагол</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> нерегистрирующее **which** между запятыми; **samples** — сказуемое главного предложения.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **demolished in 2006** — к отелю, не к парку (см. <strong>C</strong>).</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">the old Soviet hotel</span><span class="ege-gt-link-ru">антеседент</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which was completely demolished in 2006</span><span class="ege-gt-link-ru">хронология сноса</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">The initial idea… retail complex</span><span class="ege-gt-link-ru">новая глава участка</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> запятая + **which** с пассивом **was demolished**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «парк на окраине» — не датирует гостиницу и конфликтует с **historic district** (см. <strong>extra</strong>).</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">turn the site into a retail complex</span><span class="ege-gt-link-ru">первоначальный план</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">but it was decided to give Muscovites</span><span class="ege-gt-link-ru">контраст + новое решение</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">a new public green space instead</span><span class="ege-gt-link-ru">итог</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **but** переворачивает сценарий; **give someone [NP]**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> без **but** пропадает оппозиция «ТЦ vs зелёный клин».</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">the architects created</span><span class="ege-gt-link-ru">транзитивный глагол</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">a space where visitors may wander freely</span><span class="ege-gt-link-ru">именная группа + where</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">750 gardens… simulator…</span><span class="ege-gt-link-ru">наполнение «пространства»</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **created + NP**; **where** уточняет **space**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **outlook on** — это к глаголу **expect** (см. <strong>F</strong>).</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">some people expect</span><span class="ege-gt-link-ru">глагол + придаточное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">that Zaryadye Park will provide an entirely new outlook</span><span class="ege-gt-link-ru">объект ожиданий</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">on Moscow and Russia…</span><span class="ege-gt-link-ru">предлог к outlook</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **expect that…**; коллокация **outlook on** не рвём другой вставкой.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «wild urbanism… to» — занято у **A**.</p>'
    },

    explainRu: {
      A:
        "К **50 years** — реляция про **wild urbanism** с хвостом **to**, за которым идёт **perhaps transform…** — **фрагмент 6**.",
      B:
        "Между запятыми у **35-acre park** — **which was designed by an international consortium** — **фрагмент 4**.",
      C:
        "К **old Soviet hotel** — **which was completely demolished in 2006** — **фрагмент 2**.",
      D:
        "Контраст к **retail complex** — **but it was decided to give Muscovites** перед **a new public green space** — **фрагмент 1**.",
      E:
        "После **created** — **a space where visitors may wander freely** — **фрагмент 3**.",
      F:
        "После **expect** — **that Zaryadye Park will provide an entirely new outlook** перед **on Moscow…** — **фрагмент 7**.",
      extra:
        "Лишний — **фрагмент 5** (**an unattractive urban landscape…**): не стыкуется с позитивным проектом в центре и не заполняет грамматические «крючки» **to perhaps transform**, **expect that… outlook on**."
    }
  });
})(typeof window !== "undefined" ? window : this);
