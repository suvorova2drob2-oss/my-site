/**
 * ЕГЭ Reading — Gapped Text, юнит 6 · Kazan (third capital).
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u6-kazan-third-capital",
    unitOrder: 6,
    title: "Unit 6 · Kazan: \"third capital of Russia\"",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              'The capital of Tatarstan, Kazan, officially bears the title of the "third capital of Russia" due to its rich cultural and historical heritage. This beautiful city on the left bank of the Volga River is noted for its centuries-old religious tolerance. It is definitely going to strike one\'s imagination, as this is the place '
          },
          { g: "A" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "The city with more than a 1000-year history is an important cultural hub "
          },
          { g: "B" },
          {
            t:
              ". Kazan is rated among the fastest-growing tourist destinations, as it hosts more than 1 million tourists annually."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "The chief citadel of Tatarstan, the gorgeous Kazan Kremlin, dates back to the times of Ivan the Terrible. It is included in the list of UNESCO World Heritage sights. Kazan houses the only Temple of All Religions in Russia, "
          },
          { g: "C" },
          { t: " 16 world religions." }
        ]
      },
      {
        segments: [
          {
            t:
              "The Kazan subway, having only 5 stations, is listed among Guinness World Records "
          },
          { g: "D" },
          {
            t:
              ". To try it out, a passenger can get from one end to the other in just 10 minutes."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Tatar cuisine deserves special attention. It is rich in traditions "
          },
          { g: "E" },
          { t: " the ancient state of Volga Bulgaria." }
        ]
      },
      {
        segments: [
          {
            t:
              "Generally, the main specialties of Tatar cuisine include meat soups with floury dressings, noodles, and dumplings — necessarily served in broth. Local cuisine has continued to develop under the influence of Muslim peoples "
          },
          { g: "F" },
          {
            t:
              " like tasty pilau. As for desserts, Tatars like pastries, nuts, and honey."
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "that originally came from the times of"
      },
      {
        num: 2,
        text: "as it has several subway cafés for tourists"
      },
      {
        num: 3,
        text: "and home to a lot of outstanding sights"
      },
      {
        num: 4,
        text: "bringing together architectural elements of"
      },
      {
        num: 5,
        text: "as the shortest metro system in the world"
      },
      {
        num: 6,
        text: "and has gained some new dishes into the menu"
      },
      {
        num: 7,
        text: "where European and Asian traditions meet"
      }
    ],

    key: { A: 7, B: 3, C: 4, D: 5, E: 1, F: 6 },
    extraFragmentNum: 2,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> лови «скелет» фразы — <strong>this is the place where…</strong>, <strong>temple… bringing together… of 16…</strong>, <strong>Guinness… as…</strong>, причастный ряд к слову <em>traditions</em>.</p>" +
      "<p><strong>Лайфхак:</strong> после <strong>listed among Guinness World Records</strong> чаще всего идёт <strong>as + запись/категория</strong>, а не придаточное про кафе «потому что там кафе».</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">this is the place</span><span class="ege-gt-link-ru">ждёт уточнение места</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">where European and Asian… meet</span><span class="ege-gt-link-ru">место + where</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">точка → культурный hub</span><span class="ege-gt-link-ru">без обрыва</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> устойчиво: <strong>the place where…</strong> — не «as the shortest metro» и не «traditions that…».</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> тянут продолжение про метро — оно дальше к <strong>Guinness</strong> (см. <strong>D</strong>).</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">important cultural hub</span><span class="ege-gt-link-ru">существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">and home to… sights</span><span class="ege-gt-link-ru">второй номинатив / apposition</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">tourist statistics</span><span class="ege-gt-link-ru">подтверждение «почему hub»</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> <strong>hub and home to…</strong> — параллельные характеристики города; дальше идёт новый факт про туристов.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> фраза про «традиции из древности» — она к абзацу про кухню (см. <strong>E</strong>).</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Temple of All Religions</span><span class="ege-gt-link-ru">объект</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">bringing together… of</span><span class="ege-gt-link-ru">участвует в ряду «…of 16 religions»</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">16 world religions</span><span class="ege-gt-link-ru">завершение количества</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> после запятой — **-ing**-оборот, который «собирает элементы» **of 16…**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> вставка **as the shortest metro** — сбивает тему храма.</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">listed among Guinness World Records</span><span class="ege-gt-link-ru">нужна формулировка рекорда</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">as the shortest metro…</span><span class="ege-gt-link-ru">категория рекорда</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">10 minutes end-to-end</span><span class="ege-gt-link-ru">иллюстрация «короткости»</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **as + название рекорда** после введения Guinness.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **2** — про кафе в метро не образует такой же «официальной» записи рекорда, как **коротчайшая система**.</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">rich in traditions</span><span class="ege-gt-link-ru">существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">that originally came from the times of</span><span class="ege-gt-link-ru">определение к traditions</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">the ancient state of Volga Bulgaria</span><span class="ege-gt-link-ru">источник традиций</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **traditions that…** + **the times of [государство]**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> ставят продолжение через **and has gained** — оно цепляется к «под влиянием мусульманских народов» (см. <strong>F</strong>).</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">under the influence of Muslim peoples</span><span class="ege-gt-link-ru">предлог + существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">and has gained… into the menu</span><span class="ege-gt-link-ru">второй глагол развития кухни</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">like tasty pilau</span><span class="ege-gt-link-ru">пример блюда</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> один составной вывод: влияние + **и** появление новых блюд; **like pilau** иллюстрирует меню.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> путают с определением **traditions that…** из соседнего предложения.</p>'
    },

    explainRu: {
      A:
        "После **the place** нужно придаточное с **where** про слияние традиций — **фрагмент 7**.",
      B:
        "К **cultural hub** примыкает уточнение «и дом множества достопримечательностей» — **фрагмент 3**.",
      C:
        "Перед **16 world religions** идёт глагол-форма **bringing together… of** — **фрагмент 4**.",
      D:
        "После **Guinness World Records** — формулировка рекорда (**shortest metro**) — **фрагмент 5**.",
      E:
        "К **traditions** присоединяется **that originally came from the times of** — **фрагмент 1**.",
      F:
        "К **under the influence of Muslim peoples** продолжение про обновление меню — **фрагмент 6**.",
      extra:
        "Лишний — **фрагмент 2**: про кафе в метро; к записи в Книге рекордов логичнее «короткая система» (**5**), а опровержение «10 минут конец-в-конец» слабо подводит именно к кафе."
    }
  });
})(typeof window !== "undefined" ? window : this);
