/**
 * ЕГЭ Reading — Gapped Text, юнит 12 · From soup to liquid (tea / Lu Yu).
 */
(function (w) {
  var pack = w.__EGE_READING_GAPPED_TEXT__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u12-tea-soup-to-liquid",
    unitOrder: 12,
    title: "Unit 12 · From soup to liquid: tea and Lu Yu",
    examSection: "§11",
    instructionHtml:
      "Вставьте в текст фрагменты <strong>A–F</strong>. В списке <strong>семь</strong> фрагментов: <strong>один лишний</strong>. Каждый фрагмент используется не более одного раза.",

    paragraphs: [
      {
        segments: [
          {
            t:
              "The story of tea drinking could have started like this. Once upon a time the world was "
          },
          { g: "A" },
          {
            t:
              " and those who drank it. Yet, the harsh truth is that before 700s no one even thought that tea could be anything else but soup."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Sometime in his adolescence, an up-and-coming writer and an accomplished clown, Lu Yu tasted tea soup for the first time. It happened in one of the Buddhist monasteries in Central China. Lu was "
          },
          { g: "B" },
          {
            t:
              " as it contained ginger, onion, dates, mint and even citrus peels."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Threshed together into a smooth paste this 'sauce' was thought to be good for "
          },
          { g: "C" },
          {
            t:
              ". In fact, people in Asia ate tea leaves for millennia, but it was Lu Yu who made tea drinking the norm."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "Lu Yu adored tea, but he preferred it brewed from "
          },
          { g: "D" },
          {
            t:
              ". When he was not busy writing or performing in a comedy troupe, he was searching through the forests for the best tea leaves."
          }
        ]
      },
      {
        segments: [
          { t: "He was preparing " },
          { g: "E" },
          {
            t:
              " transforming tea from a soupy food into the perfect liquid we know it today. Lu Yu even wrote a book titled the Tea Classic which spurred a craze for the leaf."
          }
        ]
      },
      {
        segments: [
          {
            t:
              "In it he elaborated on the production and preparation of the leaf, "
          },
          { g: "F" },
          {
            t:
              ", and the wonderful qualities of the drink. He insisted that tea should only be consumed with water."
          }
        ]
      }
    ],

    fragments: [
      {
        num: 1,
        text: "extremely close to brewing fresh tea"
      },
      {
        num: 2,
        text: "the process of infusing tea leaves"
      },
      {
        num: 3,
        text: "divided between those who ate tea"
      },
      {
        num: 4,
        text: "the best brews for his wealthy friends"
      },
      {
        num: 5,
        text: "more than unimpressed with the brew"
      },
      {
        num: 6,
        text: "sharpening the mind and stimulating the body"
      },
      {
        num: 7,
        text: "powdered tea leaves, without any flavouring"
      }
    ],

    key: { A: 3, B: 5, C: 6, D: 7, E: 2, F: 4 },
    extraFragmentNum: 1,

    lifehackRu:
      "<p><strong>В чём соль задания 11:</strong> лови «скелеты» — <strong>was divided between X and those who…</strong>, реакция + <strong>as it contained…</strong>, <strong>good for V-ing…</strong>, <strong>brewed from…</strong>, причастие <strong>preparing…, transforming…</strong>, перечисление после <strong>elaborated on…</strong>.</p>" +
      "<p><strong>Лайфхак:</strong> если после <strong>good for</strong> идёт польза, почти всегда это **герундий** (<em>sharpening… / stimulating…</em>), а не обрыв «насколько близок к завариванию».</p>",

    coachRu: {
      A:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">the world was</span><span class="ege-gt-link-ru">ждёт предикатив</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">divided between those who ate tea</span><span class="ege-gt-link-ru">первая половина контраста</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">and those who drank it</span><span class="ege-gt-link-ru">параллель</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> устойчивая модель <strong>between A and B</strong>; без первой части «пили» теряется смысл.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> вставки про заваривание — они к другим глаголам (см. <strong>D–F</strong>).</p>',
      B:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">Lu was</span><span class="ege-gt-link-ru">состояние / оценка</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">more than unimpressed with the brew</span><span class="ege-gt-link-ru">эмоциональная оценка</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">as it contained ginger…</span><span class="ege-gt-link-ru">причина «почему»</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **as** вводит объяснение к реакции Лу на «чай-суп».</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «good for sharpening…» — к пользе пасты, не к личной реакции (см. <strong>C</strong>).</p>',
      C:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">was thought to be good for</span><span class="ege-gt-link-ru">конструкция пользы</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">sharpening the mind and stimulating the body</span><span class="ege-gt-link-ru">герундии — результат «для чего»</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">In fact, people… ate tea…</span><span class="ege-gt-link-ru">исторический контекст</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> после **for** ожидается **V-ing**, а не придаточное с **that they**.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «powdered leaves» — это материал заваривания (см. <strong>D</strong>).</p>',
      D:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">preferred it brewed from</span><span class="ege-gt-link-ru">источник / форма</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">powdered tea leaves, without any flavouring</span><span class="ege-gt-link-ru">контраст с «супом» из специй</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">searching… for the best tea leaves</span><span class="ege-gt-link-ru">следующий шаг</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> предлог **from** требует существительного/номинализации про сырьё.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «the process of infusing» логичнее к **preparing** (см. <strong>E</strong>).</p>',
      E:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">He was preparing</span><span class="ege-gt-link-ru">объект — метод/работа</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">the process of infusing tea leaves</span><span class="ege-gt-link-ru">технология «жидкого» чая</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">transforming tea from soup…</span><span class="ege-gt-link-ru">участие / результат</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> **preparing N**, затем причастие **transforming** объясняет сдвиг культуры.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> «extremely close to brewing…» — нельзя нормально поставить в роль прямого дополнения к **preparing** (см. <strong>extra</strong>).</p>',
      F:
        '<p class="ege-gt-coach-lead"><strong>Связи:</strong></p>' +
        '<div class="ege-gt-link-chain" aria-label="Цепочка смысла">' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">elaborated on… production and preparation…</span><span class="ege-gt-link-ru">перечень тем книги</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node ege-gt-link-node--frag"><span class="ege-gt-link-en">the best brews for his wealthy friends</span><span class="ege-gt-link-ru">ещё один объект «on»</span></span>' +
        '<span class="ege-gt-link-arr" aria-hidden="true">→</span>' +
        '<span class="ege-gt-link-node"><span class="ege-gt-link-en">and the wonderful qualities…</span><span class="ege-gt-link-ru">параллель в списке</span></span>' +
        "</div>" +
        '<p class="ege-gt-syntax-strip"><strong>Стык:</strong> однородные дополнения к **elaborated on** через запятые и **and** перед последним.</p>' +
        '<p class="ege-gt-coach-miss"><strong>Частый промах:</strong> второй раз тащить **the process of infusing** — уже занято в <strong>E</strong>.</p>'
    },

    explainRu: {
      A:
        "Завершение контраста **those who ate… and those who drank…** — **divided between those who ate tea** — **фрагмент 3**.",
      B:
        "Реакция Лу перед **as it contained…** — **more than unimpressed with the brew** — **фрагмент 5**.",
      C:
        "После **good for** — польза в форме герундия — **sharpening the mind and stimulating the body** — **фрагмент 6**.",
      D:
        "После **brewed from** — сырьё без приправ — **powdered tea leaves, without any flavouring** — **фрагмент 7**.",
      E:
        "К **was preparing** — **the process of infusing tea leaves** перед **transforming tea from…** — **фрагмент 2**.",
      F:
        "В ряду после **elaborated on** — **the best brews for his wealthy friends** перед **and the wonderful qualities** — **фрагмент 4**.",
      extra:
        "Лишний — **фрагмент 1** (**extremely close to brewing fresh tea**): не вписывается как дополнение к **preparing** и не продолжает **good for** / **divided between…**."
    }
  });
})(typeof window !== "undefined" ? window : this);
