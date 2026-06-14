/**
 * ЕГЭ Reading — Gapped Text, юнит 16 · Kremlin in Izmailovo.
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u16-kremlin-izmailovo",
    unitOrder: 16,
    title: "Unit 16 · Kremlin in Izmailovo",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              "Almost every tourist who visited Moscow is familiar with the Kremlin, but only few of them know that there is another one located out of the mainstream tourist path. The Kremlin in Izmailovo was built "
          },
          { g: "A" },
          {
            t:
              " with an imitation of the Russian architecture of the 18th century in mind. The territory of Izmailovo complex accommodates up to 5,000 people "
          },
          { g: "B" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "Great atmosphere, unique architecture and Russian crafts are all waiting for tourists there. The Izmailovo Kremlin tour is the most relaxing way to experience authentic Moscow and taste traditional Russian food. There one can find Tsar's Palace, built in the same style as the summer palace of Tsar Alexey Mikhailovich, the Church of St Nicholas, "
          },
          { g: "C" },
          {
            t:
              ", museums, cafés, souvenir shops, etc."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "The flea market gives a variety of Russian stuff to buy, "
          },
          { g: "D" },
          {
            t:
              " to vintage jewellery, laces, books and records. Tourists can spend hours there as the choice is amazing. A visit to the Izmailovo market is like going to a museum because of endless rows of colourful unique items and accessories of the past two centuries."
          }
        ]
      },
      {
        segments: [
          { t: "Tourists " },
          { g: "F" },
          {
            t:
              " will learn about Russian historical events "
          },
          { g: "E" },
          {
            t:
              " related to Izmailovo and the local Kremlin. A visit to the Museum of Folk Arts will help to get an insight into truly national crafts."
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "looking for unusual Russian souvenirs"
      },
      {
        num: 2,
        text: "which were built in the old church tradition"
      },
      {
        num: 3,
        text: "on the days of major holidays and festivals"
      },
      {
        num: 4,
        text: "which is the highest wooden church in Russia"
      },
      {
        num: 5,
        text: "that affected a unique architectural appearance"
      },
      {
        num: 6,
        text: "as a cultural and entertainment complex in 2007"
      },
      {
        num: 7,
        text: "ranging from frames, samovars, coins and badges"
      }
    ],

    key: { A: 6, B: 3, C: 4, D: 7, E: 5, F: 1 },
    extraFragmentNum: 2,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> ищи «крючки» — **was built as…**, **people on the days of…**, церковь + **which is…**, ряд **ranging from… to…**, **Tourists looking…**, события + **that affected…**.</p>" +
      "<p><strong>Лайфхак:</strong> если видишь **to vintage jewellery** чуть дальше, почти всегда перед этим стоит **ranging from…**.</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">was built</span><span class="ege-gt-link-ru">пассив + статус объекта</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">as a cultural and entertainment complex in 2007</span><span class="ege-gt-link-ru">как и когда</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">with an imitation of… architecture in mind</span><span class="ege-gt-link-ru">дизайн-замысел</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **built as + существительное** + уточнение стиля.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **on the days of holidays** относится к **вместимости площади** в пик (см. <strong>B</strong>).</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">accommodates up to 5,000 people</span><span class="ege-gt-link-ru">численность</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">on the days of major holidays and festivals</span><span class="ege-gt-link-ru">когда пик посещаемости</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Great atmosphere…</span><span class="ege-gt-link-ru">дальше про опыт</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> временной хвост **on the days of…** уточняет мероприятия.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **ranging from** — рынок и товары, не вместимость (см. <strong>D</strong>).</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">the Church of St Nicholas</span><span class="ege-gt-link-ru">один объект (ед.ч.)</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which is the highest wooden church in Russia</span><span class="ege-gt-link-ru">which → church; is</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">museums, cafés…</span><span class="ege-gt-link-ru">продолжение списка</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **which is** согласуется с **church**; не **were**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **which were built…** — мн.ч. спорно для одной церкви (см. <strong>extra</strong>).</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">a variety of Russian stuff to buy</span><span class="ege-gt-link-ru">объём ассортимента</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">ranging from… coins and badges</span><span class="ege-gt-link-ru">первый полюс диапазона</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">to vintage jewellery…</span><span class="ege-gt-link-ru">второй полюс</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> классика **from A to B** в описании рынка.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> вставка про **events that affected** — к истории, не к вещам (см. <strong>E</strong>).</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">historical events</span><span class="ege-gt-link-ru">существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">that affected a unique architectural appearance</span><span class="ege-gt-link-ru">определяющее that</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">related to Izmailovo… Kremlin</span><span class="ege-gt-link-ru">привязка места</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> приглашённый **that**-ряд к **events** перед **related to**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> путать с дефиницией к церкви (см. <strong>C</strong>).</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Tourists</span><span class="ege-gt-link-ru">существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">looking for unusual Russian souvenirs</span><span class="ege-gt-link-ru">группа V-ing постмодификация</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">will learn about… events</span><span class="ege-gt-link-ru">цель визита + польза</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **Tourists looking for…** как единый подлежащий к **will learn**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «встроенный» список **ranging from** — не модификатор к **tourists**.</p>'
    },

    explainRu: {
      A:
        "К **was built** — статус и дата **as a cultural and entertainment complex in 2007** — **фрагмент 6**.",
      B:
        "К **5,000 people** примыкает уточнение по пиковым дням — **on the days of major holidays and festivals** — **фрагмент 3**.",
      C:
        "К **the Church of St Nicholas** (ед.ч.) — **which is the highest wooden church in Russia** — **фрагмент 4**.",
      D:
        "К **variety** перед **to vintage…** — **ranging from frames, samovars, coins and badges** — **фрагмент 7**.",
      E:
        "Определение к **historical events** — **that affected a unique architectural appearance** — **фрагмент 5**.",
      F:
        "Постмодификация к **Tourists** — **looking for unusual Russian souvenirs** — **фрагмент 1**.",
      extra:
        "Лишний — **фрагмент 2** (**which were built in the old church tradition**): **were** плохо согласуется с единственным **Church of St Nicholas** без явного множественного перечня храмов в тексте."
    }
  });
})(typeof window !== "undefined" ? window : this);
