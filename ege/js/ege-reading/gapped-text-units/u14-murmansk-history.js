/**
 * ЕГЭ Reading — Gapped Text, юнит 14 · History of Murmansk.
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u14-murmansk-history",
    unitOrder: 14,
    title: "Unit 14 · History of Murmansk",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              "Located on the coast of the cold Barents Sea, Murmansk serves today as the main 'northern gateway' of Russia. It is the largest city in the world located above the Arctic Circle. Today more than 282,000 people live there. Life in the local harsh climate is not at all easy, "
          },
          { g: "A" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "Before Murmansk appeared on the map of Russia in the early 20th century, Arkhangelsk, "
          },
          { g: "B" },
          {
            t:
              ", played the role of the country's main northern port since the 16th century. The need for a frost-free port in the north appeared during World War I. As a result of the enemy's actions on the Baltic and the Black Sea, routes with Western Europe were cut. It was then "
          },
          { g: "C" },
          { t: " to the north." }
        ]
      },
      {
        segments: [
          {
            t:
              "A sea port and the settlement Semenovsky was founded in 1915 on the coast of the Barents Sea, "
          },
          { g: "D" },
          {
            t:
              ". On October 4, 1916, the solemn ceremony of laying the foundation stone of the church took place. Since that date the city, "
          },
          { g: "E" },
          {
            t:
              ", leads its history. It was the last city founded in the Russian Empire. Six months later Romanov-on-Murman became known as Murmansk."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "During its short history, the last city founded in the Russian Empire witnessed a lot of turbulent events. During the Civil War, Murmansk became one of the main centres of the White movement. In 1941, the already sprawling city was again in the epicentre of military action. The enemy troops tried to take it, but were defeated. For the rest of the war, Murmansk served "
          },
          { g: "F" },
          {
            t:
              " from other Allied nations. Murmansk was given the honorary title of a Hero City on May 6, 1985."
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "that the eyes of the Russian emperor turned"
      },
      {
        num: 2,
        text: "known since the ancient times as \"Murman\""
      },
      {
        num: 3,
        text: "as a scientific research centre of marine navigation"
      },
      {
        num: 4,
        text: "which was named in honour of Emperor Nicholas II"
      },
      {
        num: 5,
        text: "which was founded on the White Sea coast in 1584"
      },
      {
        num: 6,
        text: "since the summer temperature rarely rises above 16\u00b0C"
      },
      {
        num: 7,
        text: "as a transit point for supplies entering the Soviet Union"
      }
    ],

    key: { A: 6, B: 5, C: 1, D: 2, E: 4, F: 7 },
    extraFragmentNum: 3,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> цепляйся за конструкции — объяснение **easy, since…**, Архангельск + **which was founded… 1584**, **It was then that…**, топоним **Murman**, город + **which was named in honour…**, **served as a transit point**.</p>" +
      "<p><strong>Лайфхак:</strong> если видишь **It was then** без подлежащего после, часто дальше идёт **that…** (эмфаза / cleft).</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Life… is not at all easy</span><span class="ege-gt-link-ru">утверждение</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">since the summer temperature rarely rises above 16\u00b0C</span><span class="ege-gt-link-ru">причина/иллюстрация климата</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">исторический блок</span><span class="ege-gt-link-ru">далее про порты</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **since** после отрицательной оценки быта объясняет «почему тяжело».</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **which was founded 1584** — к Архангельску, не к Мурманску (см. <strong>B</strong>).</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Arkhangelsk</span><span class="ege-gt-link-ru">имя порта</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which was founded on the White Sea coast in 1584</span><span class="ege-gt-link-ru">дата + место</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">played the role… since the 16th century</span><span class="ege-gt-link-ru">историческая роль</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> нерегистрирующее **which** между двумя запятыми поясняет **Arkhangelsk**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **Murman** — про берег Баренцева моря в другом месте (см. <strong>D</strong>).</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">It was then</span><span class="ege-gt-link-ru">ввод «тогда-то»</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">that the eyes of the Russian emperor turned</span><span class="ege-gt-link-ru">полное придаточное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">to the north</span><span class="ege-gt-link-ru">направление внимания</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> шаблон **It was then that + клауза** — эмфаза времени решения.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **as a transit point** — роль в войне, не к WWI-причинам порта (см. <strong>F</strong>).</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">on the coast of the Barents Sea</span><span class="ege-gt-link-ru">локация</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">known… as &quot;Murman&quot;</span><span class="ege-gt-link-ru">традиционное имя района</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">foundation stone ceremony 1916</span><span class="ege-gt-link-ru">хронология</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> абсолютная/приложенная фраза к топониму побережья.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **named in honour of Nicholas II** — к названию **города** позже (см. <strong>E</strong>).</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">the city</span><span class="ege-gt-link-ru">существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which was named in honour of Emperor Nicholas II</span><span class="ege-gt-link-ru">история имени</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">leads its history… Romanov-on-Murman</span><span class="ege-gt-link-ru">переименование</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **which** между запятыми даёт справку о «Романове-на-Мурмане».</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> включать **research centre** — нет опоры в тексте о науке (см. <strong>extra</strong>).</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Murmansk served</span><span class="ege-gt-link-ru">глагол роли</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">as a transit point for supplies…</span><span class="ege-gt-link-ru">официальная функция</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">from other Allied nations</span><span class="ege-gt-link-ru">источник грузов</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **served as + NP**; дальше уточнение **from…** про союзников.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> путают с климатической вставкой **since temperature…** (см. <strong>A</strong>).</p>'
    },

    explainRu: {
      A:
        "К **not at all easy** даётся причина по климату — **since the summer temperature rarely rises above 16°C** — **фрагмент 6**.",
      B:
        "К **Arkhangelsk** историческая справка **which was founded on the White Sea coast in 1584** — **фрагмент 5**.",
      C:
        "Эмфатическая конструкция **It was then that the eyes… turned** + **to the north** — **фрагмент 1**.",
      D:
        "К побережью Баренцева моря — топонимическое **known… as \"Murman\"** — **фрагмент 2**.",
      E:
        "К **the city** между запятыми — **which was named in honour of Emperor Nicholas II** — **фрагмент 4**.",
      F:
        "После **served** в контексте войны — **as a transit point for supplies entering the Soviet Union** — **фрагмент 7**.",
      extra:
        "Лишний — **фрагмент 3** (**as a scientific research centre of marine navigation**): по тексту речь о порте, императоре, транзите ленд-лиза, а не о научном статусе."
    }
  });
})(typeof window !== "undefined" ? window : this);
