/**
 * ЕГЭ Reading — Gapped Text, юнит 13 · Travelling routes (Europe).
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u13-europe-travelling-routes",
    unitOrder: 13,
    title: "Unit 13 · Travelling routes: Europe",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              "Travelling through Europe has long been a popular destination for people of all ages, from students and couples, to families and retirees. The breadth of possible vacations in Europe is enormous, from countless destinations "
          },
          { g: "A" },
          {
            t:
              ". Among the most popular countries in Europe for travellers are France, Italy, Spain, Germany, Greece, and Portugal, "
          },
          { g: "B" },
          {
            t: " and cruise ships."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "There are many ways to see Europe. Trains are a very convenient way of seeing many of the countries, with an extensive rail system connecting countries, major cities and small towns. Ferries and cruise ships are popular along the Mediterranean Sea and also in some of the northern regions, such as the Baltics and Scandinavian countries. Those "
          },
          { g: "C" },
          {
            t:
              " may choose to rent a car to travel around on their own."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Europe is a year-round destination. The months of July and August are by far the busiest, when Europeans take holidays and travellers from around the world come to enjoy the fine weather. The coastal areas are filled with people "
          },
          { g: "D" },
          {
            t:
              ". One only needs to take a drive along the coast during these months to fully appreciate this fact."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "The spring and fall are great times for those looking "
          },
          { g: "E" },
          {
            t:
              " without the full intensity of the summer heat."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Winter is definitely the slower time of year for travellers but the mountains, "
          },
          { g: "F" },
          {
            t:
              ", draw the winter sports enthusiasts."
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "to sightsee and explore the ancient sites"
      },
      {
        num: 2,
        text: "who are trying to escape the summer heat"
      },
      {
        num: 3,
        text: "who want more freedom and independence"
      },
      {
        num: 4,
        text: "which offer world-class skiing facilities"
      },
      {
        num: 5,
        text: "to winter sports facilities and equipment"
      },
      {
        num: 6,
        text: "which are often on the itinerary of tour groups"
      },
      {
        num: 7,
        text: "to all kinds of different ways of exploring them"
      }
    ],

    key: { A: 7, B: 6, C: 3, D: 2, E: 1, F: 4 },
    extraFragmentNum: 5,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> держи связки — <strong>from… to…</strong>, страны + <strong>which… tour groups</strong>, <strong>Those who…</strong>, люди + <strong>who… heat</strong>, <strong>looking to…</strong>, горы + <strong>which offer… skiing</strong>.</p>" +
      "<p><strong>Лайфхак:</strong> после <strong>the mountains</strong> во мн.ч. чаще ждёт <strong>which offer…</strong>, а не голый инфинитивный хвост про оборудование.</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">from countless destinations</span><span class="ege-gt-link-ru">первая часть диапазона</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">to all kinds of… ways of exploring them</span><span class="ege-gt-link-ru">вторая часть from… to…</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Among the most popular countries…</span><span class="ege-gt-link-ru">иллюстрация «enormous»</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> параллель **the breadth… from… to…** описывает спектр от «куда» до «как».</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **which are on the itinerary** — примыкает к списку **стран**, не к **destinations** (см. <strong>B</strong>).</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">France, Italy, Spain… Portugal</span><span class="ege-gt-link-ru">перечень стран (мн.)</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which are often on the itinerary of tour groups</span><span class="ege-gt-link-ru">определяющее which</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">and cruise ships</span><span class="ege-gt-link-ru">вторая «рельса» маршрута</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> запятая + **which** к множественным странам; **and cruise ships** продолжает тему турмаршрутов.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **to winter sports facilities** — семантика зимы и лыж приходит позже (см. <strong>F</strong> / <strong>extra</strong>).</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Those</span><span class="ege-gt-link-ru">заготовка под who</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">who want more freedom and independence</span><span class="ege-gt-link-ru">мотивация аренды авто</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">may choose to rent a car</span><span class="ege-gt-link-ru">логичное следствие</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **Those who…** + сказуемое **may choose**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «escape the summer heat» — это про пляжный пик сезона (см. <strong>D</strong>).</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">filled with people</span><span class="ege-gt-link-ru">есть существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">who are trying to escape the summer heat</span><span class="ege-gt-link-ru">определяющее who</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">drive along the coast…</span><span class="ege-gt-link-ru">иллюстрация толп</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **people who…** завершает картинку пикового лета на побережье.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «looking to sightsee» — идёт с **looking** + **to** в другом абзаце (см. <strong>E</strong>).</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">for those looking</span><span class="ege-gt-link-ru">глагол + to</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">to sightsee and explore the ancient sites</span><span class="ege-gt-link-ru">цель «что делать»</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">without the full intensity…</span><span class="ege-gt-link-ru">комфорт весны/осени</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **looking to + base verb** — стандартная связка цели.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> относительное **which offer skiing** — к горам, не к **those looking** (см. <strong>F</strong>).</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">the mountains</span><span class="ege-gt-link-ru">существительное (мн.)</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which offer world-class skiing facilities</span><span class="ege-gt-link-ru">which → mountains</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">draw the winter sports enthusiasts</span><span class="ege-gt-link-ru">мотивация зимних поездок</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> вставка между двумя запятыми — нерегистрирующее **which**; **offer** согласуется с **mountains**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **to winter sports facilities and equipment** не образует полного **which**‑определения к горам (см. <strong>extra</strong>).</p>'
    },

    explainRu: {
      A:
        "Пара к **from countless destinations** — **to all kinds of different ways of exploring them** — **фрагмент 7**.",
      B:
        "К перечню стран — **which are often on the itinerary of tour groups** перед **and cruise ships** — **фрагмент 6**.",
      C:
        "После **Those** — **who want more freedom and independence** к **rent a car** — **фрагмент 3**.",
      D:
        "К **people** в пик сезона на побережье — **who are trying to escape the summer heat** — **фрагмент 2**.",
      E:
        "После **looking** — **to sightsee and explore the ancient sites** перед **without the full intensity…** — **фрагмент 1**.",
      F:
        "К **the mountains** — **which offer world-class skiing facilities** — **фрагмент 4**.",
      extra:
        "Лишний — **фрагмент 5** (**to winter sports facilities and equipment**): не образует определительного **which**‑предложения к **mountains** так же прямо, как **which offer world-class skiing facilities**."
    }
  });
})(typeof window !== "undefined" ? window : this);
