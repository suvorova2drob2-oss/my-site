/**
 * ЕГЭ Reading — Gapped Text, юнит 10 · Australia: adventure spirit.
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u10-australia-adventure-spirit",
    unitOrder: 10,
    title: "Unit 10 · Adventure spirit: Australia",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              "Few places on the planet rival Australia for its spirit of adventure. Blessed with a mosaic of rugged and beautiful landscapes, this country offers perfect settings for exciting outdoor adventures on land and sea. Along the coast, one can zoom through a horizontal waterfall on a jet boat, snorkel with whale sharks, sail around the tropical islands, "
          },
          { g: "A" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "In the red-earthed deserts of the country's dry interior, more rugged adventures can be found. Australia's famous outback tracks offer four-wheel drive journeys for those into cars, "
          },
          { g: "B" },
          {
            t:
              " through towering red-walled river gorges. The safest time to paddle through the gorges is during the dry season, from May through November, "
          },
          { g: "C" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "Many Australian adventures take place in beautiful World Heritage-listed wilderness areas "
          },
          { g: "D" },
          {
            t:
              ". Tourists can raft the Franklin River in Tasmania, and drive along the beach on Queensland's Fraser Island, "
          },
          { g: "E" },
          {
            t:
              ". Fishing, mountain biking, birding, hiking, and swimming are all popular things to do there."
          }
        ]
      },
      {
        segments: [
          { t: "For those " },
          { g: "F" },
          {
            t:
              ", in Sydney one can climb to the summit of the iconic Sydney Harbour Bridge. Guided ascents of the city bridge include a pre-climb preparatory talk, all the safety gear, a photo on the 134 metre-high summit, and entertaining stories about the history of the bridge along the way."
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "or one can hop in a canoe and move"
      },
      {
        num: 2,
        text: "or dive along the Great Barrier Reef"
      },
      {
        num: 3,
        text: "who are looking for adventures in the city"
      },
      {
        num: 4,
        text: "that showcase the best of the country"
      },
      {
        num: 5,
        text: "which is the largest sand island in the world"
      },
      {
        num: 6,
        text: "who prefer travelling across wild empty areas"
      },
      {
        num: 7,
        text: "since rivers rise rapidly during the rainy season"
      }
    ],

    key: { A: 2, B: 1, C: 7, D: 4, E: 5, F: 3 },
    extraFragmentNum: 6,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> держи параллельные ряды — на побережье **or… or…**, в аутбэке **for those into cars, or…**, **dry season… since…**, **areas that…**, остров **, which…**, **For those who…**.</p>" +
      "<p><strong>Лайфхак:</strong> после **Fraser Island** почти всегда жди нерегистрирующее **which** с фактом «песчаный остров», а не **who** про людей.</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">zoom… snorkel… sail…</span><span class="ege-gt-link-ru">однородный ряд на море</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">or dive along the Great Barrier Reef</span><span class="ege-gt-link-ru">ещё один глагол того же типа</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">переход к пустыне</span><span class="ege-gt-link-ru">смена декораций</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> запятые связывают действия «на побережье»; последняя часть — тоже **or + активность в воде**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> тянут **who**‑фразы — они для людей, не для перечня морских активностей.</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">four-wheel drive journeys for those into cars</span><span class="ege-gt-link-ru">один сценарий</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">or one can hop in a canoe and move</span><span class="ege-gt-link-ru">альтернатива «не только джип»</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">through towering… gorges</span><span class="ege-gt-link-ru">маршрут в каньоне</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> союз **or** связывает два разных способа проехать/пройти ущелье; **move through** дополняется сразу за пропуском.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **who prefer travelling…** дублирует «тех, кто в машинах», но не даёт чёткой второй активности с **or** (см. <strong>extra</strong>).</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">safest time… during the dry season</span><span class="ege-gt-link-ru">оценка сезона</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">since rivers rise rapidly… rainy season</span><span class="ege-gt-link-ru">причина осторожности</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">World Heritage areas…</span><span class="ege-gt-link-ru">новый блок</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **since** объясняет, почему **dry season** безопаснее для сплава.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> определение **that showcase** — оно к **areas**, не ко времени года (см. <strong>D</strong>).</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">wilderness areas</span><span class="ege-gt-link-ru">существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">that showcase the best of the country</span><span class="ege-gt-link-ru">определяющее that (мн.)</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">examples: raft… Fraser Island…</span><span class="ege-gt-link-ru">иллюстрации «лучшего»</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **areas that + глагол во мн.ч.** — стандартное путеводное описание.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **which is the largest sand island** — единственное число ждёт **остров** (см. <strong>E</strong>).</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Queensland\'s Fraser Island</span><span class="ege-gt-link-ru">именной объект</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which is the largest sand island…</span><span class="ege-gt-link-ru">факт-ярлычок</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Fishing, mountain biking…</span><span class="ege-gt-link-ru">активности «там»</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> запятая + **which** к названию острова; **is** согласуется с **island**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> путают с **that showcase** — оно во **множественном** под **areas** (см. <strong>D</strong>).</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">For those</span><span class="ege-gt-link-ru">заготовка под who</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">who are looking for adventures in the city</span><span class="ege-gt-link-ru">характеристика адресата</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">in Sydney… Harbour Bridge</span><span class="ege-gt-link-ru">городской кейс</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **For those who…** + запятая + **in Sydney** — логичный «если тебе нужен город».</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> тянут **wild empty areas** — контекст уже сменился на **мост в Сиднее**.</p>'
    },

    explainRu: {
      A:
        "К ряду прибрежных активностей добавляется **or dive along the Great Barrier Reef** — **фрагмент 2**.",
      B:
        "После сценария с джипами — альтернатива **or one can hop in a canoe and move** перед **through… gorges** — **фрагмент 1**.",
      C:
        "Объяснение, почему безопасен **dry season** — **since rivers rise rapidly during the rainy season** — **фрагмент 7**.",
      D:
        "К **wilderness areas** — **that showcase the best of the country** — **фрагмент 4**.",
      E:
        "К **Fraser Island** — **which is the largest sand island in the world** — **фрагмент 5**.",
      F:
        "Ввод **For those who are looking for adventures in the city** перед Сиднеем — **фрагмент 3**.",
      extra:
        "Лишний — **фрагмент 6** (**who prefer travelling across wild empty areas**): ослабляет контраст **джип vs каноэ** и хуже стыкуется с **or** после **for those into cars**."
    }
  });
})(typeof window !== "undefined" ? window : this);
