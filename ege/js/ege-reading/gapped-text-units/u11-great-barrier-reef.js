/**
 * ЕГЭ Reading — Gapped Text, юнит 11 · Great Barrier Reef (natural wonder).
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u11-great-barrier-reef",
    unitOrder: 11,
    title: "Unit 11 · Natural wonder: Great Barrier Reef",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              "The Great Barrier Reef on the World Heritage List is Australia's top tourism treasure. It stretches from the northern tip of Queensland south to the coastal town of Bundaberg. The Great Barrier Reef is the planet's largest coral reef system "
          },
          { g: "A" },
          {
            t:
              ". Not only is it made up of hard and soft corals, but also sponges, fish, sea turtles, and other organisms."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "This complex of reefs, islands, seagrass beds, and corals is so vast "
          },
          { g: "B" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "Experiencing the Great Barrier Reef is a top Australian outdoor adventure, "
          },
          { g: "C" },
          {
            t:
              ". Among the most popular things to do are scuba diving "
          },
          { g: "D" },
          {
            t:
              ". One can try sailing around idyllic tropical islands and fishing in special zones. Soaring over this magnificent natural wonder on a scenic flight is also popular."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Thanks to its vast size, tourists can access the Great Barrier Reef from various points along the Queensland coast. This magnificent spectacle is a must-see sight."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Climate change is one of the biggest threats to the Great Barrier Reef. Climate change causes large-scale coral die-off, especially along the reef's far northern stretches, "
          },
          { g: "E" },
          {
            t:
              " as soon as they can. The Australian and Queensland Government introduced a long-term sustainability plan to help combat the effects of climate change and pollution, "
          },
          { g: "F" },
          {
            t:
              " for future generations."
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "and tourists can find plenty of ways to enjoy it"
      },
      {
        num: 2,
        text: "and comprises one of its richest ecosystems"
      },
      {
        num: 3,
        text: "so tourists are advised to see this natural wonder"
      },
      {
        num: 4,
        text: "that they had to be protected by the government"
      },
      {
        num: 5,
        text: "and snorkelling along the shimmering coral reefs"
      },
      {
        num: 6,
        text: "but more action is needed to conserve this resource"
      },
      {
        num: 7,
        text: "that it's the only living structure visible from space"
      }
    ],

    key: { A: 2, B: 7, C: 1, D: 5, E: 3, F: 6 },
    extraFragmentNum: 4,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> цепляйся за рамки — <strong>largest… system and comprises…</strong>, классика <strong>so vast that…</strong>, запятая + второй тезис про опыт, пара <strong>scuba… and snorkelling…</strong>, срочность + <strong>so… as soon as…</strong>, план + <strong>but more action…</strong>.</p>" +
      "<p><strong>Лайфхак:</strong> если видишь <strong>so vast</strong>, почти всегда дальше ждёт <strong>that…</strong>, а не просто союз <strong>and</strong> без подчинения.</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">the planet\'s largest coral reef system</span><span class="ege-gt-link-ru">суперлатив + объект</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">and comprises one of its richest ecosystems</span><span class="ege-gt-link-ru">its = the planet\'s</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Not only is it made up…</span><span class="ege-gt-link-ru">состав биоты</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> два сказуемых к **The Great Barrier Reef**: **is** и **comprises** (параллель без лишнего <strong>so</strong>).</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **that it\'s the only living structure…** встанет к связке **so vast that…** (см. <strong>B</strong>).</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">is so vast</span><span class="ege-gt-link-ru">структура so… that…</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">that it\'s the only living structure visible from space</span><span class="ege-gt-link-ru">результат «настолько огромен»</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Experiencing the Reef…</span><span class="ege-gt-link-ru">переход к активностям</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> обязательное **that** после **so vast**; вставка — популярный факт из учебников.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> тянут **and tourists can find…** — это про отдых, а не про масштаб (см. <strong>C</strong>).</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">…is a top… outdoor adventure</span><span class="ege-gt-link-ru">первая часть</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">and tourists can find plenty of ways to enjoy it</span><span class="ege-gt-link-ru">второй тезис об опыте</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Among the most popular things…</span><span class="ege-gt-link-ru">примеры</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> запятая + **and** добавляет следствие/развитие мысли без нового подлежащего-шока.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **so tourists are advised…** логичнее к угрозам и срочности (см. <strong>E</strong>).</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">scuba diving</span><span class="ege-gt-link-ru">первый пункт списка</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">and snorkelling along… coral reefs</span><span class="ege-gt-link-ru">второй пункт той же группы</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">One can try sailing…</span><span class="ege-gt-link-ru">ещё активности</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **are scuba diving and snorkelling…** — однородный ряд после **Among… are**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> официальный тон **government had to protect** — не про список досуга (см. <strong>extra</strong>).</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">coral die-off… far northern stretches</span><span class="ege-gt-link-ru">угроза + зона</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">so tourists are advised to see… wonder</span><span class="ege-gt-link-ru">следствие: «успей увидеть»</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">as soon as they can</span><span class="ege-gt-link-ru">усиливает срочность</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **so + совет** естественно ведёт к **as soon as they can**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **but more action** относится к политике и **for future generations** (см. <strong>F</strong>).</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">introduced a… sustainability plan</span><span class="ege-gt-link-ru">шаг властей</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">but more action is needed to conserve this resource</span><span class="ege-gt-link-ru">контраст: мало одного плана</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">for future generations</span><span class="ege-gt-link-ru">цель сохранения</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> запятая перед **but** — второй акт в том же комплексном предложении.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «that they had to be protected» — кривое **they** и не замыкает **for future generations** так же прямо.</p>'
    },

    explainRu: {
      A:
        "К **the planet's largest coral reef system** примыкает **and comprises one of its richest ecosystems** (**its** = планеты) — **фрагмент 2**.",
      B:
        "После **so vast** — придаточное **that it's the only living structure visible from space** — **фрагмент 7**.",
      C:
        "Развитие мысли **…outdoor adventure, and tourists can find plenty of ways…** — **фрагмент 1**.",
      D:
        "Пара к **scuba diving** — **and snorkelling along the shimmering coral reefs** — **фрагмент 5**.",
      E:
        "Срочный вывод после **die-off… northern stretches** — **so tourists are advised to see this natural wonder** + **as soon as they can** — **фрагмент 3**.",
      F:
        "Вторая часть после плана: **but more action is needed to conserve this resource** + **for future generations** — **фрагмент 6**.",
      extra:
        "Лишний — **фрагмент 4** (**that they had to be protected by the government**): размытое **they**, нет гладкой стыковки с **sustainability plan** и финальной целью **for future generations**."
    }
  });
})(typeof window !== "undefined" ? window : this);
