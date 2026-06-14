/**
 * ЕГЭ Grammar Exam · Unit 17 · Agatha Christie, an archaeologist (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u17-agatha-christie-archaeologist",
    unitOrder: 17,
    title: "Unit 17 · Agatha Christie · Archaeologist",
    examSection: "§19–24",
    headerTitle: "Agatha Christie · Archaeologist",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "Agatha Christie is one of the best-known crime writers of all time, but few know the extent of Agatha Christie's archaeological experience. Married in 1930 to eminent archaeologist Max Mallowan, Christie spent two decades ",
        afterInline: " on excavation sites in the Middle East.",
        afterTail:
          " She wrote her crime novels and helped out with her husband's work.",
        cue: "LIVE",
        answers: ["living"],
        keyShow: "living",
        grammarTag: "Gerund · spent + -ing",
        plainRu:
          "«Два десятилетия <strong>прожила / жила</strong> на раскопках» → <em>spent … living</em>.",
        explainRu:
          "После <em>spent two decades</em> часто идёт -ing: <em>spent two decades living on excavation sites</em> от <strong>LIVE</strong>.",
        explainOkRu:
          "<em>Living</em> — как она провела эти двадцать лет.",
        explainWrongRu:
          "Голый <em>live</em> или <em>lived</em> после <em>spent two decades</em> обычно не ставят.",
        examplesRu: [
          "✓ She spent years <em>living</em> abroad. — spent + -ing.",
          "✓ He spent the summer <em>working</em> on a farm. — та же схема.",
          "✗ She spent decades <em>live</em> there. — нужно <em>living</em>."
        ],
        wrongIf: [
          {
            includes: "live",
            hintRu:
              "После <em>spent two decades</em> → <em>living</em>."
          },
          {
            includes: "lived",
            hintRu:
              "<em>Spent decades lived</em> — ошибка; нужен -ing: <em>living</em>."
          },
          {
            includes: "life",
            hintRu:
              "<em>Life</em> — существительное; нужен герундий <em>living</em>."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before:
          "At the British Museum in London, one can see 3,000-year-old ivory artifacts ",
        afterInline: " by Mallowan in the ancient city of Nimrud.",
        afterTail: "",
        cue: "DISCOVER",
        answers: ["discovered", "that were discovered", "which were discovered"],
        keyShow: "discovered",
        grammarTag: "Participle II · пассив",
        plainRu:
          "«Артефакты, <strong>найденные</strong> Маллоуэном» — пассив → Participle II: <em>discovered by</em>.",
        explainRu:
          "Сокращённый пассив: <em>artifacts discovered by Mallowan</em> от <strong>DISCOVER</strong>.",
        explainOkRu:
          "<em>Discovered by</em> = «обнаруженные / найденные».",
        explainWrongRu:
          "Актив <em>discovered</em> как глагол-сказуемое не подходит: артефакты не «находили» сами.",
        examplesRu: [
          "✓ treasures <em>discovered</em> in Egypt — «найденные сокровища».",
          "✓ a letter written by Poe — Participle II + by.",
          "✗ artifacts <em>discover</em> by Mallowan — нужен пассив."
        ],
        wrongIf: [
          {
            includes: "discover",
            hintRu:
              "Артефакты «найдены» → <em>discovered by</em>."
          },
          {
            includes: "discovering",
            hintRu:
              "Active -ing «находящие» — не то; нужен пассив."
          },
          {
            includes: "discovers",
            hintRu:
              "Present <em>discovers</em> — артефакты не «находят»."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 1,
        before: "Ancient carved ivories ",
        afterInline: " by his famous wife, using cotton wool buds and face cream.",
        afterTail: "",
        cue: "CLEAN",
        answers: ["were cleaned"],
        keyShow: "were cleaned",
        grammarTag: "Past Simple Passive",
        plainRu:
          "«Слоновая кость <strong>очищалась</strong> женой» — пассив в Past: <em>were cleaned by</em>.",
        explainRu:
          "Подлежащее <em>ivories</em> (мн. ч.) + <em>by his famous wife</em> → <em>were cleaned</em> от <strong>CLEAN</strong>.",
        explainOkRu:
          "<em>Were cleaned by</em> — её чистили, не она «cleaned ivories» как единственный вариант без контекста.",
        explainWrongRu:
          "Актив <em>cleaned</em> без <em>were</em> или Present не подходит.",
        examplesRu: [
          "✓ The rooms <em>were cleaned</em> every day. — Past Passive.",
          "✓ The statues <em>were restored</em> by experts. — were + V3.",
          "✗ Ivories <em>cleaned</em> by his wife. — нужен <em>were cleaned</em>."
        ],
        wrongIf: [
          {
            includes: "cleaned",
            hintRu:
              "Без <em>were</em> пассив неполный → <em>were cleaned</em>."
          },
          {
            includes: "was cleaned",
            hintRu:
              "<em>Ivories</em> — мн. ч. → <em>were</em>, не <em>was</em>."
          },
          {
            includes: "clean",
            hintRu:
              "Голый <em>clean</em> — не сказуемое здесь."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 1,
        before:
          "John Curtis, keeper of the Middle East collections at the British Museum, says they make up 'the finest collection of ancient carved ivories that ",
        afterInline: " at an archaeological excavation'.",
        afterTail:
          " The artifacts are in good condition, possibly because of Christie's efforts.",
        cue: "FIND",
        answers: ["has been found", "s been found", "was found"],
        keyShow: "has been found",
        grammarTag: "Perfect Passive",
        plainRu:
          "«Коллекция, <strong>найденная</strong> на раскопках» — пассив + результат → <em>has been found</em>.",
        explainRu:
          "Относительное прилагательное: <em>collection that has been found at an excavation</em> от <strong>FIND</strong>.",
        explainOkRu:
          "<em>Has been found</em> — нашли и она до сих пор «лучшая из найденных».",
        explainWrongRu:
          "Актив <em>found</em> или голый <em>find</em> не подходят.",
        examplesRu: [
          "✓ the best book <em>has ever been written</em> — Perfect Passive.",
          "✓ treasures that <em>were found</em> in 1920 — Past Passive тоже возможен.",
          "✗ …ivories that <em>find</em> at… — нужен пассив."
        ],
        wrongIf: [
          {
            includes: "found",
            hintRu:
              "Одного <em>found</em> без <em>has been / was</em> мало → <em>has been found</em>."
          },
          {
            includes: "find",
            hintRu:
              "Коллекция не «find» → пассив <em>has been found</em>."
          },
          {
            includes: "is found",
            hintRu:
              "Present <em>is found</em> возможен, но здесь акцент на результат → чаще <em>has been found</em>."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 1,
        before:
          "Christie's interest in archaeology went ",
        afterInline:
          " than support for her husband's work and even formed the backdrop to some of her novels.",
        afterTail: "",
        cue: "DEEP",
        answers: ["deeper"],
        keyShow: "deeper",
        grammarTag: "Сравнительная степень",
        plainRu:
          "«Интерес шёл <strong>глубже</strong>, чем просто поддержка» → <em>deeper than</em> от DEEP.",
        explainRu:
          "Сравнение с <em>than</em>: <em>went deeper than support</em> — сравнительная степень.",
        explainOkRu:
          "<em>Deeper than</em> = «глубже, чем…».",
        explainWrongRu:
          "DEEP или DEEPEST без <em>than</em> не работают.",
        examplesRu: [
          "✓ The river runs <em>deeper than</em> it looks. — deeper + than.",
          "✓ go <em>deeper into</em> a topic — «углубиться».",
          "✗ went <em>deep than</em>… — нужно <em>deeper</em>."
        ],
        wrongIf: [
          {
            includes: "deep",
            hintRu:
              "Перед <em>than</em> → сравнительная <em>deeper</em>."
          },
          {
            includes: "deepest",
            hintRu:
              "<em>Deepest</em> — превосходная; здесь «глубже, чем» → <em>deeper</em>."
          },
          {
            includes: "deeply",
            hintRu:
              "<em>Deeply</em> — наречие; после <em>went</em> здесь <em>deeper</em>."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 1,
        before:
          "But though Christie played an important part in her husband's work, even ",
        afterInline: " many of his expeditions, she was very modest about her contributions.",
        afterTail: "",
        cue: "FINANCE",
        answers: ["financing", "financed"],
        keyShow: "financing",
        grammarTag: "Gerund / Past Simple",
        plainRu:
          "«Даже <strong>финансировала</strong> многие экспедиции» → <em>financing</em> или <em>financed</em>.",
        explainRu:
          "Дополнение к <em>played an important part</em>: <em>even financing many expeditions</em> (герундий) или <em>even financed</em> (Past).",
        explainOkRu:
          "Обе формы передают: она не только помогала, но и оплачивала поездки.",
        explainWrongRu:
          "Голый <em>finance</em> или существительное <em>finance</em> не вставляются.",
        examplesRu: [
          "✓ She helped, even <em>financing</em> the project. — even + -ing.",
          "✓ She even <em>financed</em> his trips. — Past Simple.",
          "✗ …even <em>finance</em> many expeditions. — нужна форма глагола."
        ],
        wrongIf: [
          {
            includes: "finance",
            hintRu:
              "Голое <em>finance</em> → <em>financing</em> или <em>financed</em>."
          },
          {
            includes: "finances",
            hintRu:
              "Present <em>finances</em> — «финансирует»; история в Past."
          },
          {
            includes: "financial",
            hintRu:
              "<em>Financial</em> — прилагательное; нужен глагол."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Ключи текста:</strong> <em>spent … living</em>; <em>discovered by</em>; <em>were cleaned</em>; <em>has been found</em>; <em>deeper than</em>; <em>financing / financed</em>.</p>" +
      "<p>Много <strong>пассива</strong> — смотри на <em>by …</em> и «кто делает действие».</p>"
  });
})(typeof window !== "undefined" ? window : this);
