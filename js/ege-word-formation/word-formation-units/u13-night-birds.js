/**
 * Word Formation Exam · Unit 13 · Night birds (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u13-night-birds",
    unitOrder: 13,
    title: "Unit 13 · Night birds",
    examSection: "§25–29",
    headerTitle: "Night birds",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before: "What do you know about night birds? They are ",
        afterInline: " creatures.",
        afterTail: "",
        cue: "WONDER",
        answers: ["wonderful"],
        keyShow: "wonderful",
        formationTag: "WONDER → -ful · прилагательное",
        plainRu:
          "«<strong>Замечательные</strong> создания» → <em>wonderful</em>.",
        explainRu:
          "Перед <em>creatures</em> — прилагательное: WONDER + <strong>-ful</strong> = <em>wonderful</em>.",
        explainOkRu:
          "<em>Wonderful</em> = «удивительный, замечательный».",
        explainWrongRu:
          "<em>Wonder</em> (сущ./глагол) или <em>wonderfully</em> (наречие) перед <em>creatures</em> не ставят.",
        examplesRu: [
          "✓ <em>wonderful</em> creatures of the night.",
          "✓ WONDER → <em>wonderful</em> (-ful).",
          "✗ They are <em>wonder</em> creatures… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "wonder",
            hintRu:
              "WONDER — сущ./глагол; «замечательные» → <em>wonderful</em>."
          },
          {
            includes: "wonderfully",
            hintRu:
              "<em>Wonderfully</em> — наречие; нужно прилаг. <em>wonderful</em>."
          },
          {
            includes: "wondering",
            hintRu:
              "Gerund «задаваясь вопросом» — не то."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "Some birds, such as the poorwill, hunt insects at night when there is less ",
        afterInline:
          " for prey. The barn owl is perfectly adapted for night-time hunting. Its eyes are very large and sensitive to the dimmest light.",
        afterTail: "",
        cue: "COMPETE",
        answers: ["competition"],
        keyShow: "competition",
        formationTag: "COMPETE → -ition · существительное",
        plainRu:
          "«Меньше <strong>конкуренции</strong> за добычу» → <em>competition</em>.",
        explainRu:
          "После <em>less</em> — существительное: COMPETE → <em>competition</em> (-ition).",
        explainOkRu:
          "<em>Competition</em> = «конкуренция»; <em>competition for prey</em>.",
        explainWrongRu:
          "<em>Compete</em> (глагол) или <em>competitive</em> (прилаг.) после <em>less</em> не подходят.",
        examplesRu: [
          "✓ less <em>competition</em> for food.",
          "✓ COMPETE → <em>competition</em> (-ition).",
          "✗ …less <em>compete</em> for prey… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "compete",
            hintRu:
              "COMPETE — глагол; «конкуренция» → <em>competition</em>."
          },
          {
            includes: "competitive",
            hintRu:
              "<em>Competitive</em> — прилаг.; после <em>less</em> → сущ."
          },
          {
            includes: "competitor",
            hintRu:
              "<em>Competitor</em> = «конкурент» — другой смысл."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "The fluffy edges of the owl's feathers soften the sound wing beats so the owl can swoop ",
        afterInline: " on its prey.",
        afterTail: "",
        cue: "SILENT",
        answers: ["silently"],
        keyShow: "silently",
        formationTag: "SILENT → -ly · наречие",
        plainRu:
          "«Может <strong>бесшумно</strong> налететь» → <em>silently</em>.",
        explainRu:
          "Модификатор глагола <em>swoop</em>: SILENT → <em>silently</em> (-ly).",
        explainOkRu:
          "<em>Silently</em> = «бесшумно, тихо».",
        explainWrongRu:
          "<em>Silent</em> (прилаг.) не модифицирует глагол <em>swoop</em> напрямую.",
        examplesRu: [
          "✓ swoop <em>silently</em> on its prey.",
          "✓ SILENT → <em>silently</em> (-ly).",
          "✗ …swoop <em>silent</em> on… — нужно наречие."
        ],
        wrongIf: [
          {
            includes: "silent",
            hintRu:
              "SILENT — прилаг.; к <em>swoop</em> → <em>silently</em>."
          },
          {
            includes: "silence",
            hintRu:
              "<em>Silence</em> — сущ.; нужно наречие."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "The kakapo is the only parrot that is ",
        afterInline:
          " at night. All other parrots are daytime birds that live in and around trees. During the day the kakapo sleeps, and at night it comes out to find fruit, berries and leaves to eat. The kakapo only lives in New Zealand.",
        afterTail: "",
        cue: "ACT",
        answers: ["active"],
        keyShow: "active",
        formationTag: "ACT → -ive · прилагательное",
        plainRu:
          "«Единственный попугай, <strong>активный</strong> ночью» → <em>active</em>.",
        explainRu:
          "После <em>is</em> — прилагательное: ACT → <em>active</em> (-ive); контраст «спит днём — активен ночью».",
        explainOkRu:
          "<em>Active</em> = «активный»; <em>active at night</em>.",
        explainWrongRu:
          "<em>Act</em> (глагол) или <em>activity</em> (сущ.) после <em>is</em> не подходят.",
        examplesRu: [
          "✓ the only parrot that is <em>active</em> at night.",
          "✓ ACT → <em>active</em> (-ive).",
          "✗ …that is <em>act</em> at night… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "act",
            hintRu:
              "ACT — глагол; после <em>is</em> → <em>active</em>."
          },
          {
            includes: "activity",
            hintRu:
              "<em>Activity</em> — сущ.; нужно прилаг. <em>active</em>."
          },
          {
            includes: "actively",
            hintRu:
              "<em>Actively</em> — наречие; <em>is … at night</em> → прилаг."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "Like bats, the oilbird uses sounds to help it fly in darkness. As it flies, it makes clicking noises which bounce off objects in the caves in South America where it lives, and help the bird find its way. ",
        afterInline:
          " most birds, the kiwi has a good sense of smell which helps it find food at night.",
        afterTail: "",
        cue: "LIKE",
        answers: ["unlike"],
        keyShow: "Unlike",
        formationTag: "LIKE → un- + прилаг./предл.",
        plainRu:
          "«<strong>В отличие от</strong> большинства птиц» → <em>Unlike</em>.",
        explainRu:
          "В начале предложения — предлог/прилаг.: LIKE + <strong>un-</strong> = <em>Unlike</em> (контраст с «most birds»).",
        explainOkRu:
          "<em>Unlike</em> = «в отличие от, не как».",
        explainWrongRu:
          "<em>Like</em> (= «как у») противоречит смыслу: у большинства птиц обоняние слабее.",
        examplesRu: [
          "✓ <em>Unlike</em> most birds, the kiwi…",
          "✓ LIKE → <em>unlike</em> (un-).",
          "✗ <em>Like</em> most birds, the kiwi has a good sense… — смысл неверный."
        ],
        wrongIf: [
          {
            includes: "like",
            hintRu:
              "<em>Like</em> = «как у»; нужен контраст → <em>Unlike</em>."
          },
          {
            includes: "likely",
            hintRu:
              "<em>Likely</em> = «вероятно» — не то."
          },
          {
            includes: "alike",
            hintRu:
              "<em>Alike</em> = «похожи» — другая конструкция."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Night birds:</strong> -ful (<em>wonderful</em>), -ition (<em>competition</em>), -ly (<em>silently</em>), -ive (<em>active</em>), un- (<em>Unlike</em>).</p>" +
      "<p>Если второе предложение <em>противопоставляет</em> первому — часто un- от LIKE, USUAL и т.п.</p>"
  });
})(typeof window !== "undefined" ? window : this);
