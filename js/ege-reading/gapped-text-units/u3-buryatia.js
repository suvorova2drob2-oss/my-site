/**
 * ЕГЭ Reading — Gapped Text, юнит 3 · Buryatia Region.
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u3-buryatia",
    unitOrder: 3,
    title: "Unit 3 · Buryatia Region",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              "Russia, being the biggest country in the world, has many one-of-a-kind corners in stock. One of them is the enigmatic Buryatia Region. It is among the most off-the-beaten-path destinations in Russia, boasting a combination of unique cultures, breathtaking landscapes, "
          },
          { g: "A" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "This ancient and magnificent place has everything for nature enthusiasts: the untouched beauty of the Siberian taiga, worldwide famous freshwater Lake Baikal, crystal-clear rivers and waterfalls, majestic snow-covered peaks of the Sayan Mountains, "
          },
          { g: "B" },
          { t: " and herbs." }
        ]
      },
      {
        segments: [
          {
            t:
              "The Republic of Buryatia is a subject of the Russian Federation "
          },
          { g: "C" },
          { t: ". Speaking about the location of Buryatia, it is beneficially placed on the crossroads between Russia, Mongolia, and China, " },
          { g: "D" },
          { t: ", and cultural heritage." }
        ]
      },
      {
        segments: [
          {
            t:
              "The administrative and cultural centre of the Republic of Buryatia is Ulan-Ude. It is home for the Buryat, Evenk, and Russian people. Being the major hub of the region, Ulan-Ude is one of eastern Siberia's most attractive cities, "
          },
          { g: "E" },
          {
            t:
              ". Perhaps it is because of the cultural mixture and proximity to Mongolia."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "The Buryatia climate is sharply continental with dry, frosty winters and hot summers, "
          },
          { g: "F" },
          {
            t:
              " The average temperature in summer is +18,5 °C, in winter -22 °C. Sudden weather changes are not typical for this region."
          }
        ]
      }
    ],

    fragments: [
      { num: 1, text: "which has a distinct Asian-like spirit" },
      { num: 2, text: "with heavy rainfall in July and August" },
      { num: 3, text: "and pure nature with glorious Lake Baikal" },
      {
        num: 4,
        text: "explaining the region's rich natural, historical"
      },
      {
        num: 5,
        text: "that describes weather conditions in the region"
      },
      {
        num: 6,
        text: "and is part of Russia's Siberian Federal District"
      },
      {
        num: 7,
        text: "and fresh air filled with the scent of wildflowers"
      }
    ],

    key: { A: 3, B: 7, C: 6, D: 4, E: 1, F: 2 },
    extraFragmentNum: 5,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> после абзаца смотри на <strong>запятые и союз and</strong> — часть вставки продолжает <strong>однородный ряд</strong> или <strong>придаточное</strong> к слову слева.</p>" +
      "<p><strong>Лайфхак:</strong> если после пропуска идёт <em>and herbs / and cultural heritage</em>, тебе нужна фраза, которая <strong>естественно “ведёт” к этому союзу</strong>, а не абстрактное определение.</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">unique cultures, breathtaking landscapes</span><span class="ege-gt-link-ru">однородный ряд</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">and pure nature with… Baikal</span><span class="ege-gt-link-ru">третья часть “trio” о регионе</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">точка в конце тезиса</span><span class="ege-gt-link-ru">замыкает хвастливое перечисление</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> перед вставкой запятая после <em>landscapes</em>; вставка начинается с <strong>and</strong> — ровно как у «культур и пейзажей».</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> тянут “азиатский дух” — он грамматически уместнее к <strong>городу</strong> (см. <strong>E</strong>).</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">peaks of the Sayan Mountains</span><span class="ege-gt-link-ru">ещё один объект природы</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">fresh air… wildflowers</span><span class="ege-gt-link-ru">запах / атмосфера</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">and herbs</span><span class="ege-gt-link-ru">россыпь растений рядом по смыслу</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> после вставки текст продолжается <strong>and herbs</strong> — вставка должна содержать запахи/цветы, которые сочетаются с «травами».</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> повторно тянут Байкал — он уже выше в списке и в другом абзаце логичнее как отдельный тезис.</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">a subject of the Russian Federation</span><span class="ege-gt-link-ru">юридический статус</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">and is part of… Federal District</span><span class="ege-gt-link-ru">админ. принадлежность</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">точка → новое предложение про карту</span><span class="ege-gt-link-ru">переход к геоположению</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> нужна конструкция <strong>and is…</strong>, которая наращивает то же сказуемое по смыслу («субъект Федерации <strong>и</strong> часть округа»).</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> вставки про погоду — это уже блок про климат (<strong>F</strong>).</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">crossroads… Russia, Mongolia, China</span><span class="ege-gt-link-ru">география</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">explaining… natural, historical</span><span class="ege-gt-link-ru">что из этого следует</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">and cultural heritage</span><span class="ege-gt-link-ru">третье звено тройки</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> после вставки идёт <strong>, and cultural heritage</strong> — получается ряд <em>natural — historical — cultural</em>.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> абстрактное «that describes weather…» не стыкуется с наследием (<strong>лишний 5</strong>).</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">one of… most attractive cities</span><span class="ege-gt-link-ru">опорное существительное</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which has… Asian-like spirit</span><span class="ege-gt-link-ru">определение / характер</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Perhaps… Mongolia</span><span class="ege-gt-link-ru">следующее предложение объясняет “почему”</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> относительное <strong>which</strong> здесь тянется к <em>Ulan-Ude</em> / образу города в предыдущей части предложения.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> путают с перечислением природы в первом абзаце.</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">continental… winters and hot summers</span><span class="ege-gt-link-ru">общая климатическая рамка</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">heavy rainfall in July and August</span><span class="ege-gt-link-ru">конкретика сезона</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">цифры средней температуры</span><span class="ege-gt-link-ru">дальше — детали режима</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> нужен оборот с <strong>with</strong>, который добавляет деталь к описанию климата, а не «мета-фраза» про описание.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> ставят <strong>5</strong>: после <em>summers</em> грамматически логичнее осадки, чем «that describes…».</p>'
    },

    explainRu: {
      A:
        "Перечисление после <em>boasting a combination of…</em> замыкается третьей крупной характеристикой региона — **фрагмент 3** (природа и Байкал в одном хвосте).",
      B:
        "Перед союзом <strong>and herbs</strong> нужен образ с цветочным ароматом — **фрагмент 7**.",
      C:
        "После «субъект РФ» логично уточнить федеральный округ — **фрагмент 6**.",
      D:
        "Между «тройкой стран» и формулой наследия нужен мост <em>natural, historical … cultural</em> — **фрагмент 4**.",
      E:
        "Город получает оттенок «азиатского духа» относительным предложением — **фрагмент 1**.",
      F:
        "Климат уже назван континентальным; следующий шаг — летние осадки — **фрагмент 2**.",
      extra:
        "Лишний — **фрагмент 5**: слишком общий и плохо стыкуется с <em>summers,</em> в отличие от конкретики про июль и август."
    }
  });
})(typeof window !== "undefined" ? window : this);
