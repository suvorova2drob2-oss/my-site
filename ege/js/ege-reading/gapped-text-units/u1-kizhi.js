/**
 * ЕГЭ Reading — Gapped Text, юнит 1 · Kizhi Island.
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u1-kizhi",
    unitOrder: 1,
    title: "Unit 1 · Kizhi Island",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              "Kizhi island is blessed with one of the most picturesque ensembles of Russian wooden churches. Kizhi island provides one of the most scenic destinations on Lake Onega, a vast northern lake in the Republic of Karelia. Situated in the geographical centre of Lake Onega, "
          },
          { g: "A" },
          {
            t:
              ", Kizhi has long since been a strategic stopover for travellers."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "At one point in the 16th century, the island was declared a pogost (or parish centre) by the Russian Orthodox Church, and produced lumber and iron in an economy "
          },
          { g: "B" },
          {
            t:
              ". In the 1950s, the island was almost forgotten. Most of the inhabitants left, and all of the original villages disappeared, "
          },
          { g: "C" },
          { t: "." }
        ]
      },
      {
        segments: [
          {
            t:
              "Today, this collection of traditional log structures, centred on two churches and a bell tower, is still called the Kizhi Pogost. It lives on "
          },
          { g: "D" },
          {
            t:
              ". The pogost and the other remaining buildings from the region were collected in the 1960s and restored within this newly established reserve for historical wooden buildings. The buildings were set in three special sectors, named after the regions "
          },
          { g: "E" },
          {
            t:
              ": North Karelia, Karelia, and Pudozhsky. Moreover, the island was declared a World Heritage Site by UNESCO in 1990."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Kizhi is especially beautiful during long northern summers "
          },
          { g: "F" },
          {
            t:
              ". Yet winter mornings show off the complex in dazzling light, making it look like a fairy-tale setting."
          }
        ]
      }
    ],

    fragments: [
      { num: 1, text: "that included more than 100 villages" },
      { num: 2, text: "which is located just near the lake" },
      { num: 3, text: "which is Europe's second-largest lake" },
      { num: 4, text: "that the structures originally came from" },
      { num: 5, text: "leaving behind impressive wooden relics" },
      { num: 6, text: "as one of Russia's greatest open-air museums" },
      { num: 7, text: "when the church domes shine with magic light" }
    ],

    key: { A: 3, B: 1, C: 5, D: 6, E: 4, F: 7 },
    extraFragmentNum: 2,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> каждый фрагмент — не «по смыслу всего абзаца», а <strong>грамматический и логический хвост</strong> к словам <em>сразу до и после</em> пропуска. Смотри: какое слово стоит <strong>перед</strong> пропуском (что оно означает — остров, озеро, экономика…), и на какое слово «цепляется» запятая или точка <strong>после</strong>.</p>" +
      "<p><strong>Лайфхак:</strong> найди <strong>опорное английское слово</strong> перед пропуском и спроси: «моя вставка продолжает именно его или уже следующее предложение?» Фразы с <em>which / that / when</em> должны однозначно продолжать нужное слово.</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Lake Onega</span><span class="ege-gt-link-ru">опорное сущ. перед пропуском</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">which is… second-largest lake</span><span class="ege-gt-link-ru">вставка поясняет ОНЕГУ</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Kizhi has been a stopover</span><span class="ege-gt-link-ru">остров уже в новой части</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> запятая после <em>Onega</em> — вставка должна быть <strong>относительным предложением к озеру</strong> (<em>which</em> = Onega), а не «описанием острова».</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «рядом с озером» звучит про остров, но <em>which</em> прицепилось бы к другому центру.</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">in an <strong>economy</strong></span><span class="ege-gt-link-ru">сущ. ждёт конкретику</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">that included… 100 villages</span><span class="ege-gt-link-ru">вставка: чем была экономика</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">масштаб хозяйства ясен</span><span class="ege-gt-link-ru">замыкание на economy</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> определительное <em>that</em>-предложение сразу после существительного <strong>economy</strong> (без смыслового разрыва).</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> красивое описание места/времени вместо «economy <em>that</em>…».</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">villages disappeared</span><span class="ege-gt-link-ru">событие</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">leaving… wooden relics</span><span class="ege-gt-link-ru">вставка: итог на месте</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">что физически осталось</span><span class="ege-gt-link-ru">следствие для острова</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> причастный оборот / конструкция с <em>leaving</em> логично цепляется к исчезновению деревень (одна мысль без нового «левого» субъекта).</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> общая картинка региона вместо следствия к <em>villages disappeared</em>.</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">It lives on</span><span class="ege-gt-link-ru">чем «существует» сейчас</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">as one of… museums</span><span class="ege-gt-link-ru">вставка: статус</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">как его воспринимают</span><span class="ege-gt-link-ru">роль музея</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> после <em>live on</em> нужен <strong>предложный оборот / ячейка статуса</strong> (<em>as…</em>), а не новое относительное к природе.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> сезон/пейзаж вместо «музей под небом».</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">regions</span><span class="ege-gt-link-ru">до двоеточия</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">that the structures… came from</span><span class="ege-gt-link-ru">вставка: откуда везли</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">North Karelia; Karelia…</span><span class="ege-gt-link-ru">перечень после двоеточия</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> перечень регионов после двоеточия должен согласоваться с определением «regions <strong>that</strong>…»: названия тех зон, <strong>откуда привезли</strong> дома.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> не замечают, что <em>that</em> ждёт глагол типа <em>came from</em>.</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">during long northern summers</span><span class="ege-gt-link-ru">временной фон</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">when the domes shine…</span><span class="ege-gt-link-ru">вставка: когда именно</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Yet winter mornings…</span><span class="ege-gt-link-ru">контраст следующим предл.</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> после маркера времени ожидается <strong>придаточное времени</strong> (<em>when…</em>), а не определение «озера/места».</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «где расположено» вместо «когда красиво на небе».</p>'
    },

    explainRu: {
      A:
        "После запятой нужно относительное предложение к <strong>Lake Onega</strong>: озеро как второе по величине в Европе (<strong>фрагмент 3</strong>).",
      B:
        "Экономика острова исторически включала множество деревень (<strong>1</strong>).",
      C:
        "Деревни исчезли, но остались деревянные памятники (<strong>5</strong>).",
      D:
        "Погост живёт как музей под открытым небом (<strong>6</strong>).",
      E:
        "Сектора названы по тем регионам, <strong>откуда привезли</strong> постройки (<strong>4</strong>).",
      F:
        "Летом красиво <strong>когда</strong> купола «горят» светом (<strong>7</strong>).",
      extra:
        "Лишним остаётся <strong>фрагмент 2</strong>: формулировка расплывчата и не продолжает грамматически центр Онежского озера так же точно, как <strong>3</strong>."
    }
  });
})(typeof window !== "undefined" ? window : this);
