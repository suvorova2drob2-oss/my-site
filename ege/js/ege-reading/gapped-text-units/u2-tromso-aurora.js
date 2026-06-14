/**
 * ЕГЭ Reading — Gapped Text, юнит 2 · Tromsø and the northern lights.
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u2-tromso-aurora",
    unitOrder: 2,
    title: "Unit 2 · Tromsø and aurora tourism",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              "Tromsø in northern Norway has promoted itself as the aurora capital of Europe. "
          },
          { g: "A" },
          {
            t:
              "the winter months now attract visitors from every continent."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "The northern lights appear when charged particles from the sun strike gases in the upper atmosphere. "
          },
          { g: "B" },
          {
            t:
              ", sightings are never certain on a given night, even when the forecast looks promising."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Light pollution from expanding suburbs once threatened popular viewing sites outside the city. "
          },
          { g: "C" },
          {
            t:
              ", the municipality has adopted stricter rules on outdoor lighting after midnight. Volunteers also patrol certain hills "
          },
          { g: "D" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "Tourism revenue has helped to diversify an economy "
          },
          { g: "E" },
          {
            t:
              ". "
          },
          { g: "F" },
          {
            t:
              ", long-time residents worry that rising rents may push young families away from the town centre."
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text:
          "After years of investment in winter infrastructure and new flight routes,"
      },
      { num: 2, text: "Although long-range forecasts are now impressively detailed" },
      {
        num: 3,
        text: "In response to concerns raised by astronomers and local guides"
      },
      {
        num: 4,
        text: "to ask drivers to switch off powerful beams near viewing areas"
      },
      {
        num: 5,
        text: "that used to depend mainly on fishing and related industries"
      },
      {
        num: 6,
        text: "While few people question the boost to local employment"
      },
      {
        num: 7,
        text: "which is why tour operators recommend stays of at least four nights"
      }
    ],

    key: { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6 },
    extraFragmentNum: 7,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> не выбирай фразу «по общей теме абзаца» — она должна <strong>склеивать</strong> то, что стоит прямо <em>до</em> пропуска, с тем, что идёт <em>после</em> (союз, запятая, относительное предложение, инфинитив цели).</p>" +
      "<p><strong>Лайфхак:</strong> прочитай вслух кусок <strong>без</strong> вставки и спроси: «чего не хватает — причины, контраста, цели действия или определения к существительному?»</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">aurora capital of Europe</span><span class="ege-gt-link-ru">как позиционируют город</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">After years… routes,</span><span class="ege-gt-link-ru">вставка: причина наплыва</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">the winter months attract…</span><span class="ege-gt-link-ru">следствие в цифрах сезона</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> после точки начинается новое предложение; вставка — <strong>обстоятельство времени/условия с причастным хвостом</strong> (After…), дальше запятая и <strong>главная часть</strong> с подлежащим <em>the winter months</em>.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> тянут про прогнозы или длинный тур — там другая логика (см. <strong>B</strong> / лишний <strong>7</strong>).</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">The lights appear when…</span><span class="ege-gt-link-ru">научный факт</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">Although forecasts… detailed,</span><span class="ege-gt-link-ru">вставка: уступка</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">sightings are never certain</span><span class="ege-gt-link-ru">вывод: всё равно не гарантия</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> вставка — <strong>придаточное уступки</strong> (<em>Although…</em>) к одной мысли с главной частью: прогноз сильный, <strong>но</strong> факт наблюдения не под заказ.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> ставят следствие «поэтому бронируют много дней» вместо контраста с неопределённостью ночи.</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Light pollution… threatened sites</span><span class="ege-gt-link-ru">проблема (свет)</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">In response… astronomers… guides</span><span class="ege-gt-link-ru">чья тревога → реакция</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">stricter rules</span><span class="ege-gt-link-ru">что сделали власти</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> вставка стоит <strong>в начале предложения до запятой</strong> — это <strong>обстоятельство причины / ответа</strong> («в ответ на…»). После запятой — главная часть с решением: <em>the municipality has adopted…</em></p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> путают с инфинитивом цели для патрулей — это пропуск <strong>D</strong>.</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Volunteers patrol hills</span><span class="ege-gt-link-ru">действие</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">to ask drivers… beams</span><span class="ege-gt-link-ru">вставка: зачем</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">защита тьмы для неба</span><span class="ege-gt-link-ru">цель волонтёров</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> после <em>patrol</em> нужен <strong>инфинитив цели</strong> (…patrol hills <strong>to</strong> ask…) — один из самых частых «грамматических крючков» в §11.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> подсовывают вводную про муниципалитет — она грамматически цепляется к другому глаголу/месту.</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">diversify an <strong>economy</strong></span><span class="ege-gt-link-ru">существительное ждёт хвост</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">that used to depend… industries</span><span class="ege-gt-link-ru">вставка: определение</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">понятно, «какая» экономика</span><span class="ege-gt-link-ru">замыкается относит. that</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> классическое <strong>определительное придаточное</strong> к существительному: <em>an economy that…</em></p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> контраст про жителей — это логика пропуска <strong>F</strong>.</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Tourism helped diversify…</span><span class="ege-gt-link-ru">плюс для города</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">While few question… employment,</span><span class="ege-gt-link-ru">вставка: согласие + «но»</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">residents worry about rents</span><span class="ege-gt-link-ru">минус для быта</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> <strong>придаточное уступки</strong> в начале предложения: «хотя с работой почти не спорят», <strong>но</strong> дальше — социальный риск.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> фраза про длительность туров (лишний <strong>7</strong>) — ближе к блоку про гарантию увидеть сияние.</p>'
    },

    explainRu: {
      A:
        "Новое предложение после точки: «после инвестиций и новых рейсов зимние месяцы тянут туристов со всего мира» — <strong>фрагмент 1</strong> (оборот с <em>After…</em> и запятой перед <strong>the winter months</strong>).",
      B:
        "Контраст: прогнозы точные, но гарантии нет (<strong>2</strong>).",
      C:
        "Причина ужесточения правил — озабоченность специалистов (<strong>3</strong>).",
      D:
        "Волонтёрам нужна цель патрулирования — просить гасить дальний свет (<strong>4</strong>).",
      E:
        "Экономика, которую раньше держали рыболовство и смежные отрасли (<strong>5</strong>).",
      F:
        "Уступка перед «но жильё дорожает»: почти никто не спорит с ростом занятости (<strong>6</strong>).",
      extra:
        "Лишний — <strong>фрагмент 7</strong>: он был бы уместен после тезиса про непредсказуемость наблюдений, но в данных пропусках уже закрыт контрастом <strong>B</strong>."
    }
  });
})(typeof window !== "undefined" ? window : this);
