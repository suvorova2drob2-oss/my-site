/**
 * ЕГЭ Reading — Gapped Text, юнит 5 · Place to visit: Tatarstan / Kazan.
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u5-tatarstan-kazan",
    unitOrder: 5,
    title: "Unit 5 · Place to visit: Tatarstan",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              "The Republic of Tatarstan is set at the confluence of the Volga and Kama Rivers. The territory of Tatarstan has 43 localities, including two large cities: Kazan and Naberezhnye Chelny. Kazan, with a population of 1.3 million people, is the capital of the Tatarstan Republic. The city is located 797 km east of Moscow, "
          },
          { g: "A" },
          { t: "." }
        ]
      },
      {
        segments: [
          { t: "Kazan is a blend of diverse cultures and religions, " },
          { g: "B" },
          {
            t:
              ". One can admire Tatar architecture in the Old Tatar village. Also called the Staro-tatarskaya Sloboda, this suburb is a well-preserved historic part of Kazan, "
          },
          { g: "C" },
          {
            t:
              " by local Tatars in the 14th century."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "The ensemble — set on the banks of Kaban Lake — has fine examples of authentic Tatar buildings, old wooden houses with traditional decorations, shops, cafés, and religious structures. This fantastic destination should definitely be visited by tourists "
          },
          { g: "D" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "Among the impressive sights to visit during a tour to Kazan is the Kul Sharif Mosque. It is located on the territory of the Kazan Kremlin. It is one of the largest mosques in Europe, serving "
          },
          { g: "E" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "It took almost 10 years to re-erect the building of the mosque on the place where it stood originally, and was completed in 2005, "
          },
          { g: "F" },
          {
            t:
              ". Today, the white and blue mosque is among the city's best-recognised landmarks."
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "as home to a rich collection of ancient books"
      },
      {
        num: 2,
        text: "as they are nicely rebuilt and redecorated"
      },
      {
        num: 3,
        text: "which is not that far by Russian standards"
      },
      {
        num: 4,
        text: "by the time of the city's 1000th birthday"
      },
      {
        num: 5,
        text: "and it is home to outstanding architecture"
      },
      {
        num: 6,
        text: "which was chosen as a place of living"
      },
      {
        num: 7,
        text: "while travelling around the region"
      }
    ],

    key: { A: 3, B: 5, C: 6, D: 7, E: 1, F: 4 },
    extraFragmentNum: 2,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> ищи опору слева — <strong>797 km… Moscow</strong> (оценка расстояния), <strong>serving</strong> + роль мечети, запятая перед датой <strong>2005</strong> (временной контекст).</p>" +
      "<p><strong>Лайфхак:</strong> если после пропуска сразу <strong>by … in the 14th century</strong>, нужна пассивная конструкция вида <em>chosen … by …</em>, а не «пока путешествуешь».</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">797 km east of Moscow</span><span class="ege-gt-link-ru">факт расстояния</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which is not that far…</span><span class="ege-gt-link-ru">оценка «для России»</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">дальше новый абзац-мысль о Казани</span><span class="ege-gt-link-ru">без дыры между предложениями</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> нерегистрирующее <strong>which</strong>-предложение к «расстоянию от Москвы», логично закрывается перед новым тезисом о «blend of cultures».</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> тянут вставку с <strong>and it is home…</strong> — она грамматически ждёт параллели к <em>Kazan is…</em> (см. <strong>B</strong>).</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Kazan is a blend…</span><span class="ege-gt-link-ru">первая часть сказуемого</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">and it is home to… architecture</span><span class="ege-gt-link-ru">вторая часть через and</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">точка → переход к Old Tatar village</span><span class="ege-gt-link-ru">пример архитектуры ниже</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> одно составное предложение: <strong>is … , and it is…</strong> — перечисление характеристик города.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> вставка с <strong>which was chosen…</strong> — там нужен «субъект-место», а не второй тезис про культуру (см. <strong>C</strong>).</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">historic part of Kazan</span><span class="ege-gt-link-ru">существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which was chosen… by Tatars</span><span class="ege-gt-link-ru">пассив + агент</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">in the 14th century</span><span class="ege-gt-link-ru">время «выбора» места</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> после вставки сразу идёт <strong>by local Tatars</strong> — значит вставка должна содержать **пассив** (chosen/founded-тип), согласующийся с агентом.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «пока путешествуешь» — ломает связку с пассивом и датой.</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">should be visited by tourists</span><span class="ege-gt-link-ru">совет читателю</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">while travelling around the region</span><span class="ege-gt-link-ru">обстоятельство для туристов</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Among the sights…</span><span class="ege-gt-link-ru">следующий блок про мечеть</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> финал абзаца: пассив + оборот времени/ситуации; **while + V-ing** уместен после «visited by tourists».</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> тянут фразу с **as home to books** — она семантически к роли здания как «хранилища», не к общему «стоит посетить район».</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">one of the largest mosques… serving</span><span class="ege-gt-link-ru">глагол + функция</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">as home to… ancient books</span><span class="ege-gt-link-ru">чем «служит» объект</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">It took 10 years…</span><span class="ege-gt-link-ru">история реконструкции</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **serving as…** — классическая коллокация роли учреждения/здания.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «by the time of the 1000th birthday» — это якорь к дате **2005** (см. <strong>F</strong>), не к «serving».</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">was completed in 2005</span><span class="ege-gt-link-ru">факт + год</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">by the time of the city\'s 1000th birthday</span><span class="ege-gt-link-ru">юбилей как контекст</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Today, the mosque…</span><span class="ege-gt-link-ru">настоящее состояние</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> запятая перед пропуском; вставка уточняет **срок завершения** относительно знаменательной даты.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> лишняя фраза про «rebuilt and redecorated» — с <em>they</em> нет ясного согласования с соседним существительным.</p>'
    },

    explainRu: {
      A:
        "После конкретного расстояния до Москвы естественна оценка «по российским меркам это недалеко» — **фрагмент 3**.",
      B:
        "К описанию «микс культур и религий» пристраивается второй тезис через **and**: «и дом выдающейся архитектуры» — **фрагмент 5**.",
      C:
        "Перед **by local Tatars** нужен пассив: место **было выбрано** для жизни — **фрагмент 6**.",
      D:
        "После **visited by tourists** логично обстоятельство **while travelling…** — **фрагмент 7**.",
      E:
        "После **serving** — роль комплекса: **as home to… books** — **фрагмент 1**.",
      F:
        "Год **2005** связывают с юбилеем города — **фрагмент 4**.",
      extra:
        "Лишний — **фрагмент 2** (**as they are nicely rebuilt…**): местоимение **they** не находит надёжного согласования в данных стыках, смысл — «украшенные дома», но грамматически это ломает предложения с пропусками."
    }
  });
})(typeof window !== "undefined" ? window : this);
