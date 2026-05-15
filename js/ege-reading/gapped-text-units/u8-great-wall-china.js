/**
 * ЕГЭ Reading — Gapped Text, юнит 8 · Great Wall of China.
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u8-great-wall-china",
    unitOrder: 8,
    title: "Unit 8 · Great Wall of China",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              '"Nobody can be a true hero unless he has been on the Great Wall" goes the popular Chinese saying. It clearly demonstrates the importance '
          },
          { g: "A" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              'The magnificent Great Wall of China is known in Chinese as "Changcheng", or the "Long Wall". The wall stretches more than 6,000 kilometres, from the fortresses of Shanhaiguan in the east, all the way to Jiayuguan in the west, passing through Hebei, Tientsin, and Beijing, '
          },
          { g: "B" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "The Great Wall of China rises as high as 16 metres, "
          },
          { g: "C" },
          {
            t:
              " or 10 men to pass. The wall boasts numerous battlements and watchtowers. Some of the wall's oldest fortifications date back as far as the 7th century BC, with the best-known areas added around 210 BC, "
          },
          { g: "D" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "Today, the most visited section of the wall is near Badaling Pass, northwest of Beijing, "
          },
          { g: "E" },
          {
            t:
              " or organized tours. Other restored sections worth a visit include the section near Gubeikou, 130 kilometres from Beijing, and in Mutianyu, just 70 kilometres northeast of Beijing."
          }
        ]
      },
      {
        segments: [
          {
            t:
              'To conclude, the Great Wall of China is a must-visit attraction in China. The Great Wall is a building project '
          },
          { g: "F" },
          {
            t:
              ' in human lives, blood, sweat, and tears. It deserves its place among "the New Seven Wonders of the World" and the UNESCO World Heritage Sites.'
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "and it is wide enough in places for five horses"
      },
      {
        num: 2,
        text: "when its various sections were joined together"
      },
      {
        num: 3,
        text: "that is placed upon this unique ancient monument"
      },
      {
        num: 4,
        text: "when the first fortifications of the wall appeared"
      },
      {
        num: 5,
        text: "which is easily reached by public transport"
      },
      {
        num: 6,
        text: "that had the longest duration and greatest cost"
      },
      {
        num: 7,
        text: "where the best-preserved sections can be visited"
      }
    ],

    key: { A: 3, B: 7, C: 1, D: 2, E: 5, F: 6 },
    extraFragmentNum: 4,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> лови «рамки» — <strong>the importance that…</strong>, **ширина** перед **or 10 men**, дата **210 BC** + событие объединения, параллель **public transport or organized tours**, **project that…** перед **cost… in lives**.</p>" +
      "<p><strong>Лайфхак:</strong> если после **16 metres** идёт **or 10 men to pass**, ищи фразу про **horses** и **wide enough** — это один ход для ЕГЭ-текстов.</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">demonstrates the importance</span><span class="ege-gt-link-ru">существительное + уточнение</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">that is placed upon… monument</span><span class="ege-gt-link-ru">придаточное к importance</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">описание стены как объекта</span><span class="ege-gt-link-ru">дальше факты о протяжённости</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **the importance that…** — классический «официальный» тон про ценность памятника.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> временные вставки **when…** сюда не подходят — им нужна таймлайновая связка в середине текста (см. <strong>D</strong> и <strong>extra</strong>).</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">…and Beijing</span><span class="ege-gt-link-ru">точка на маршруте</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">where the best-preserved sections…</span><span class="ege-gt-link-ru">where = Beijing/регион</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">новый абзац: высота стены</span><span class="ege-gt-link-ru">смена темы без дыры</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> запятая перед **where** после перечисления регионов; **where** уточняет «куда смотреть туристу».</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «wide enough for five horses» — это к измерениям **метры + ширина** (см. <strong>C</strong>).</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">rises as high as 16 metres</span><span class="ege-gt-link-ru">вертикаль</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">and it is wide enough… five horses</span><span class="ege-gt-link-ru">горизонталь / проход</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">or 10 men to pass</span><span class="ege-gt-link-ru">параллель через or</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **horses** и **men** — парные объекты «кто/что проходит»; без вставки **or 10 men** висит в воздухе.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> тянут **which is easily reached…** — оно к **Badaling** (см. <strong>E</strong>).</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">areas added around 210 BC</span><span class="ege-gt-link-ru">дата + событие</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">when its various sections were joined</span><span class="ege-gt-link-ru">уточнение эпохи</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Today, the most visited section…</span><span class="ege-gt-link-ru">переход к настоящему</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> после запятой **when** поясняет, **какое** историческое действие совпало с датой.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «when the first fortifications appeared» — дублирует более раннюю отсылку к **7th century BC** и хуже стыкуется с «best-known areas added 210 BC» (см. <strong>extra</strong>).</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">near Badaling Pass… Beijing</span><span class="ege-gt-link-ru">локация</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which is easily reached by public transport</span><span class="ege-gt-link-ru">доступ</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">or organized tours</span><span class="ege-gt-link-ru">альтернатива тому же «как добраться»</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **which** к участку/месту; параллель **A or B** про способы посещения.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> путают с **where** после «Пекин» в другом абзаце (см. <strong>B</strong>).</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">a building project</span><span class="ege-gt-link-ru">существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">that had the longest duration and greatest cost</span><span class="ege-gt-link-ru">определение к project</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">in human lives, blood…</span><span class="ege-gt-link-ru">цена проекта</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **cost** естественно ведёт к перечислению **in lives/blood/…** — вставка задаёт масштаб.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «importance that is placed…» уже «занято» в начале (см. <strong>A</strong>).</p>'
    },

    explainRu: {
      A:
        "После **the importance** — придаточное **that is placed upon this… monument** — **фрагмент 3**.",
      B:
        "После перечисления регионов и **Beijing** — **where the best-preserved sections…** — **фрагмент 7**.",
      C:
        "Между **16 metres** и **or 10 men to pass** — **wide enough… five horses** — **фрагмент 1**.",
      D:
        "После **210 BC** логичнее событие **when its various sections were joined together** — **фрагмент 2**.",
      E:
        "К участку у Badaling — **which is easily reached by public transport** перед **or organized tours** — **фрагмент 5**.",
      F:
        "К **building project** — **that had the longest duration and greatest cost** перед **in human lives…** — **фрагмент 6**.",
      extra:
        "Лишний — **фрагмент 4** (**when the first fortifications appeared**): про «первые укрепления» уже сказано выше (**7th century BC**), а к дате **210 BC** органичнее «соединение участков», а не повторное «появление»."
    }
  });
})(typeof window !== "undefined" ? window : this);
