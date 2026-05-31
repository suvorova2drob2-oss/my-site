/**
 * ЕГЭ Grammar Exam · Unit 18 · The Seven Wonders of Russia (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u18-seven-wonders-russia",
    unitOrder: 18,
    title: "Unit 18 · Seven Wonders of Russia",
    examSection: "§19–24",
    headerTitle: "Seven Wonders of Russia",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "Have you heard of the Seven Wonders of Russia? A project ",
        afterInline:
          " by the newspaper Izvestia, Radio Mayak and the television channel Russia set out to establish the seven most amazing natural and man-made wonders of our vast and awe-inspiring country.",
        afterTail: "",
        cue: "ORGANISE",
        answers: ["organised", "organized"],
        keyShow: "organised",
        grammarTag: "Participle II · пассив",
        plainRu:
          "«Проект, <strong>организованный</strong> газетой…» → Participle II: <em>organised by</em>.",
        explainRu:
          "Сокращённый пассив перед <em>by the newspaper</em>: <em>a project organised by…</em> от <strong>ORGANISE</strong>.",
        explainOkRu:
          "<em>Organised by</em> = «организованный (кем-то)».",
        explainWrongRu:
          "Актив <em>organises</em> не подходит: проект не «организует» сам.",
        examplesRu: [
          "✓ a contest <em>organised by</em> the school — «конкурс, организованный…»",
          "✓ an event <em>organized</em> by volunteers — AmE spelling тоже ок.",
          "✗ a project <em>organise</em> by… — нужен Participle II."
        ],
        wrongIf: [
          {
            includes: "organise",
            hintRu:
              "Голый <em>organise</em> → <em>organised by</em>."
          },
          {
            includes: "organising",
            hintRu:
              "Active -ing «организующий» — здесь пассив."
          },
          {
            includes: "organises",
            hintRu:
              "Present «организует» — проект не субъект действия."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before: "The top one is Lake Baikal. It ",
        afterInline: " in southern Siberia.",
        afterTail: "",
        cue: "LOCATE",
        answers: ["is located", "s located", "is situated"],
        keyShow: "is located",
        grammarTag: "Present Simple Passive",
        plainRu:
          "«Байкал <strong>расположен</strong> в Сибири» → Present Passive: <em>is located</em>.",
        explainRu:
          "Географическое положение — общий факт: <em>It is located in southern Siberia</em> от <strong>LOCATE</strong>.",
        explainOkRu:
          "<em>Is located</em> = «находится / расположен».",
        explainWrongRu:
          "Актив <em>locates</em> или голый <em>located</em> без <em>is</em> — ошибка.",
        examplesRu: [
          "✓ Moscow <em>is located</em> in western Russia.",
          "✓ The town <em>is situated</em> on a river. — синоним, реже в ключе.",
          "✗ It <em>locates</em> in Siberia. — озеро не «locates»."
        ],
        wrongIf: [
          {
            includes: "located",
            hintRu:
              "Без <em>is</em> пассив неполный → <em>is located</em>."
          },
          {
            includes: "locates",
            hintRu:
              "Актив «он располагает» → пассив <em>is located</em>."
          },
          {
            includes: "was located",
            hintRu:
              "Present факт о Байкале → <em>is</em>, не <em>was</em>."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 1,
        before:
          "It is the largest freshwater lake by both depth and volume in the world, ",
        afterInline:
          " nearly a quarter of the world's fresh surface water — that's more than North America's Great Lakes combined.",
        afterTail: "",
        cue: "CONTAIN",
        answers: ["containing"],
        keyShow: "containing",
        grammarTag: "Participle I · определение",
        plainRu:
          "«Озеро, <strong>содержащее</strong> четверть пресной воды» → <em>containing</em>.",
        explainRu:
          "Приложение к <em>lake</em>: <em>the lake, containing nearly a quarter…</em> от <strong>CONTAIN</strong>.",
        explainOkRu:
          "<em>Containing</em> поясняет, сколько воды в Байкале.",
        explainWrongRu:
          "Голый <em>contain</em> или Present <em>contains</em> после запятой так не ставят.",
        examplesRu: [
          "✓ a box <em>containing</em> old letters — «коробка с письмами».",
          "✓ the lake, <em>containing</em> millions of litres — Participle I.",
          "✗ the lake, <em>contain</em> nearly… — нужно <em>containing</em>."
        ],
        wrongIf: [
          {
            includes: "contain",
            hintRu:
              "После запятой → <em>containing</em>."
          },
          {
            includes: "contains",
            hintRu:
              "Отдельное предложение «it contains» — другая структура; здесь <em>containing</em>."
          },
          {
            includes: "contained",
            hintRu:
              "Past Participle «содержащийся» — другой оттенок; здесь active <em>containing</em>."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 1,
        before:
          "The Peterhof Palace is also on the list of the Seven Wonders of Russia. It is in fact a series of palaces and gardens located in Peterhof, St Petersburg, ",
        afterInline: " out on the orders of Peter the Great.",
        afterTail: "",
        cue: "LAY",
        answers: ["laid"],
        keyShow: "laid",
        grammarTag: "Participle II · laid out",
        plainRu:
          "«<strong>Разбитый / спланированный</strong> по приказу Петра» → <em>laid out</em> от LAY.",
        explainRu:
          "Устойчивое <em>laid out</em> = «спланирован, разбит (парк)». Participle II: <em>laid out on the orders of…</em>",
        explainOkRu:
          "<em>Laid out</em> — сады «выложены / спроектированы» по приказу.",
        explainWrongRu:
          "LAY → не <em>layed</em> и не Present <em>lay</em>.",
        examplesRu: [
          "✓ a garden <em>laid out</em> in the 18th century — «разбитый сад».",
          "✓ LAY → laid (неправильный глагол).",
          "✗ …gardens <em>layed</em> out… — ошибочная форма."
        ],
        wrongIf: [
          {
            includes: "lay",
            hintRu:
              "Present/инфинитив → Participle II <em>laid</em>."
          },
          {
            includes: "layed",
            hintRu:
              "Правильно только <em>laid</em>."
          },
          {
            includes: "lain",
            hintRu:
              "<em>Lain</em> — от lie «лежать»; здесь LAY «класть / планировать» → <em>laid</em>."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 1,
        before: "",
        afterInline:
          " palaces and gardens are sometimes referred to as the 'Russian Versailles'.",
        afterTail: " There are 64 fountains in the Grand Cascade of the palace.",
        cue: "THIS",
        answers: ["these"],
        keyShow: "these",
        grammarTag: "Указательное · THIS → these",
        plainRu:
          "«<strong>Эти</strong> дворцы и сады» — мн. ч. → <em>these</em>, не <em>this</em>.",
        explainRu:
          "Перед <em>palaces and gardens</em> (мн. ч.) нужно <em>these</em> от <strong>THIS</strong>.",
        explainOkRu:
          "<em>These palaces</em> = «эти дворцы».",
        explainWrongRu:
          "<em>This palaces</em> — число не сходится.",
        examplesRu: [
          "✓ <em>These</em> books are mine. — this → these.",
          "✓ <em>This</em> palace is old. / <em>These</em> palaces are old.",
          "✗ <em>This</em> palaces are… — нужно <em>these</em>."
        ],
        wrongIf: [
          {
            includes: "this",
            hintRu:
              "Перед мн. ч. <em>palaces</em> → <em>these</em>."
          },
          {
            includes: "that",
            hintRu:
              "Мн. ч. от that → <em>those</em>, не these; здесь THIS → <em>these</em>."
          },
          {
            includes: "those",
            hintRu:
              "От THIS → <em>these</em> («эти»), не «те»."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 1,
        before: "The ",
        afterInline:
          " fountain is called the Samson Fountain and it commemorates Russia's victory over Sweden in the Great Northern War.",
        afterTail:
          " The fountain depicts the moment when Samson tore the jaws of the lion. The lion is an element of the Swedish coat of arms.",
        cue: "LARGE",
        answers: ["largest"],
        keyShow: "largest",
        grammarTag: "Превосходная степень",
        plainRu:
          "«<strong>Самый большой</strong> фонтан» → превосходная от LARGE: <em>the largest fountain</em>.",
        explainRu:
          "После <em>the</em> и перед существительным — превосходная: <em>largest</em>.",
        explainOkRu:
          "<em>The largest fountain</em> — главный / самый крупный фонтан.",
        explainWrongRu:
          "LARGE или LARGER без нужной степени не подходят.",
        examplesRu: [
          "✓ the <em>largest</em> city in Europe — the + -est.",
          "✓ the <em>biggest / largest</em> prize — превосходная.",
          "✗ the <em>large</em> fountain is called… — нужно <em>largest</em>."
        ],
        wrongIf: [
          {
            includes: "large",
            hintRu:
              "LARGE → превосходная <em>largest</em> после <em>the</em>."
          },
          {
            includes: "larger",
            hintRu:
              "<em>Larger</em> — сравнительная; здесь «самый большой»."
          },
          {
            includes: "largely",
            hintRu:
              "<em>Largely</em> — наречие «в большой степени»; не то."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Текст про чудеса России:</strong> много <em>organised by</em>, <em>is located</em>, <em>containing</em>, <em>laid out</em>.</p>" +
      "<p><em>THIS</em> + мн. ч. → <strong>these</strong>; <em>the … fountain</em> → <strong>largest</strong>.</p>"
  });
})(typeof window !== "undefined" ? window : this);
