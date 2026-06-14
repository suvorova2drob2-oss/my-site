/**
 * ЕГЭ Reading — Gapped Text, юнит 19 · Catherine Palace (Tsarskoye Selo).
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u19-catherine-palace",
    unitOrder: 19,
    title: "Unit 19 · Catherine Palace",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              "The Catherine Palace is the former royal palace, one of the largest in the area of St. Petersburg. The palace is located in the town of Pushkin (formerly Tsarskoye Selo), 25 km south of St. Petersburg. The palace was built in 1717 under the direction of the German architect J. F. Braunstein "
          },
          { g: "A" },
          { t: ", " },
          { g: "B" },
          {
            t:
              ". During the reign of Empress Elizabeth the palace acquired its present form and style. In May 1752 she asked the architect B. F. Rastrelli to rebuild the palace, "
          },
          { g: "C" },
          {
            t: ". The reconstruction "
          },
          { g: "D" },
          {
            t:
              ". After the great reconstruction, the modern palace was completely built in the Russian Baroque style. The first presentation of the huge 325-metre palace shocked the Russian elite and foreign guests."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "The final touch in the decoration of the Catherine Palace was the main staircase in the Rococo style, "
          },
          { g: "E" },
          {
            t:
              " in 1863. After the October Revolution the Catherine Palace was turned into a museum."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Today, the exhibition of the Catherine Palace is opened in 32 rooms. The most interesting place of the palace for tourists is the famous Amber Room. During the Great Patriotic War the decoration of the Amber Room was removed by the German occupiers to Koenigsberg. The further fate of the original exhibits of the room is still under a veil of legends and myths. The recreated hall, "
          },
          { g: "F" },
          {
            t:
              ", is once again one of the highlights of the museum display."
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "which lasted almost four years"
      },
      {
        num: 2,
        text: "which had been restored by 2003"
      },
      {
        num: 3,
        text: "which was created by the Russian architect"
      },
      {
        num: 4,
        text: "because she considered it too old-fashioned"
      },
      {
        num: 5,
        text: "and then it was presented to Emperor Peter"
      },
      {
        num: 6,
        text: "because the museum exhibits need much care"
      },
      {
        num: 7,
        text: "as the summer residence of Empress Catherine"
      }
    ],

    key: { A: 7, B: 5, C: 4, D: 1, E: 3, F: 2 },
    extraFragmentNum: 6,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> закрепи цепочки — **built… as the summer residence…, and then presented…**, **rebuild… because…**, **The reconstruction which lasted…**, лестница **which was created by…**, зал **which had been restored by 2003**.</p>" +
      "<p><strong>Лайфхак:</strong> перед датой **in 1863** и словом **staircase** часто стоит определение к объекту отделки (архитектор / автор узла), а «музею нужен уход» туда не лезет.</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">was built in 1717 under… Braunstein</span><span class="ege-gt-link-ru">старт проекта</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">as the summer residence of Empress Catherine</span><span class="ege-gt-link-ru">назначение</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">and then it was presented to Emperor Peter</span><span class="ege-gt-link-ru">дарение / передача</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> два яруса в одной фразе: **as…** + союз **and then** без нового подлежащего перед **During…**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **because she considered it too old-fashioned** — это мотив Елизаветы и реконструкции (см. <strong>C</strong>).</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">summer residence…</span><span class="ege-gt-link-ru">контекст 1717</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">and then it was presented to Emperor Peter</span><span class="ege-gt-link-ru">следующий исторический шаг</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">During the reign of Elizabeth…</span><span class="ege-gt-link-ru">новая эпоха</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> запятая + **and then** продолжает хронологию дворца.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **which had been restored by 2003** — про XX–XXI век и копию зала (см. <strong>F</strong>).</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">asked Rastrelli to rebuild the palace</span><span class="ege-gt-link-ru">просьба / приказ</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">because she considered it too old-fashioned</span><span class="ege-gt-link-ru">мотив эстетики</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">The reconstruction…</span><span class="ege-gt-link-ru">оформление работ</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **because** объясняет **зачем** перестраивать.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **which lasted almost four years** — к самой **реконструкции** (см. <strong>D</strong>).</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">The reconstruction</span><span class="ege-gt-link-ru">существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which lasted almost four years</span><span class="ege-gt-link-ru">длительность</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">After the great reconstruction…</span><span class="ege-gt-link-ru">итоговый вид</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **which** к **reconstruction**; далее логичный «афтершок» эпохи.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> путать с при дате **1863** (см. <strong>E</strong>).</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">main staircase in the Rococo style</span><span class="ege-gt-link-ru">объект отделки</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which was created by the Russian architect</span><span class="ege-gt-link-ru">автор / мастерская</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">in 1863</span><span class="ege-gt-link-ru">дата завершения узла</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> нерегистрирующее **which** к **staircase**; **in 1863** уточняет время.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> **because the museum exhibits need much care** не заполняет **which** к лестнице (см. <strong>extra</strong>).</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">The recreated hall</span><span class="ege-gt-link-ru">результат реставрации</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which had been restored by 2003</span><span class="ege-gt-link-ru">готово к показу</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">is once again a highlight…</span><span class="ege-gt-link-ru">текущий статус</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **Past Perfect** к сроку **by 2003**; затем настоящее **is**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> тянут **and then it was presented to Peter** — это ранняя история, не реплика зала.</p>'
    },

    explainRu: {
      A:
        "К **was built… under Braunstein** — **as the summer residence of Empress Catherine** — **фрагмент 7**.",
      B:
        "Вторая часть той же вводной фразы — **and then it was presented to Emperor Peter** — **фрагмент 5**.",
      C:
        "Мотив перестройки по просьбе Елизаветы — **because she considered it too old-fashioned** — **фрагмент 4**.",
      D:
        "К **The reconstruction** — **which lasted almost four years** — **фрагмент 1**.",
      E:
        "К **main staircase in the Rococo style** — **which was created by the Russian architect** — **фрагмент 3**.",
      F:
        "К **The recreated hall** — **which had been restored by 2003** — **фрагмент 2**.",
      extra:
        "Лишний — **фрагмент 6** (**because the museum exhibits need much care**): не объясняет **почему** просили Растрелли перестраивать дворец и не стоит между **staircase** и **in 1863**."
    }
  });
})(typeof window !== "undefined" ? window : this);
