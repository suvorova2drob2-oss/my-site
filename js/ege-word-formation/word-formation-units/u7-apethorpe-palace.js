/**
 * Word Formation Exam · Unit 7 · Apethorpe Palace (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u7-apethorpe-palace",
    unitOrder: 7,
    title: "Unit 7 · Apethorpe Palace",
    examSection: "§25–29",
    headerTitle: "Apethorpe Palace",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "Apethorpe Palace is one of England's greatest country houses. It holds a particularly important place in English history because of its ",
        afterInline: " by Tudor and Stuart monarchs.",
        afterTail: "",
        cue: "OWNER",
        answers: ["ownership"],
        keyShow: "ownership",
        formationTag: "OWNER → -ship · существительное",
        plainRu:
          "«Из‑за <strong>принадлежности</strong> монархам» → <em>ownership</em>.",
        explainRu:
          "После <em>its</em> — существительное: <em>because of its ownership by …</em> (OWNER + -ship).",
        explainOkRu:
          "<em>Ownership</em> = «владение, принадлежность».",
        explainWrongRu:
          "<em>Owner</em> (человек) или <em>owned</em> (причастие) после <em>its</em> не подходят.",
        examplesRu: [
          "✓ because of its <em>ownership</em> by the crown.",
          "✓ OWNER → <em>ownership</em> (-ship).",
          "✗ …its <em>owner</em> by monarchs… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "owner",
            hintRu:
              "OWNER = «владелец»; «принадлежность» → <em>ownership</em>."
          },
          {
            includes: "owned",
            hintRu:
              "Причастие не после <em>its</em> → <em>ownership</em>."
          },
          {
            includes: "own",
            hintRu:
              "Глагол <em>own</em> — не то; нужно сущ. <em>ownership</em>."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "Elizabeth I once owned the building, which she had inherited from Henry VIII. For a period, Apethorpe was a royal palace lived in ",
        afterInline: " by James I and Charles I.",
        afterTail: "",
        cue: "REGULAR",
        answers: ["regularly"],
        keyShow: "regularly",
        formationTag: "REGULAR → -ly · наречие",
        plainRu:
          "«В котором <strong>регулярно</strong> жили» → <em>regularly</em>.",
        explainRu:
          "Модификатор к <em>lived in</em>: REGULAR → <em>regularly</em> (-ly).",
        explainOkRu:
          "<em>Regularly</em> = «регулярно, постоянно».",
        explainWrongRu:
          "<em>Regular</em> (прилаг.) напрямую не описывает «lived in»; нужно наречие.",
        examplesRu: [
          "✓ lived in <em>regularly</em> by the kings.",
          "✓ REGULAR → <em>regularly</em> (-ly).",
          "✗ …lived in <em>regular</em> by… — нужно наречие."
        ],
        wrongIf: [
          {
            includes: "regular",
            hintRu:
              "REGULAR — прилаг.; к <em>lived in</em> → <em>regularly</em>."
          },
          {
            includes: "regularity",
            hintRu:
              "<em>Regularity</em> — сущ.; нужно наречие <em>regularly</em>."
          },
          {
            includes: "regulate",
            hintRu:
              "<em>Regulate</em> — «регулировать» — не то."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "James I so loved Apethorpe that he personally contributed to its extension to make it more ",
        afterInline:
          " for hunting in the nearby royal forest of Rockingham.",
        afterTail: "",
        cue: "SUIT",
        answers: ["suitable"],
        keyShow: "suitable",
        formationTag: "SUIT → -able · прилагательное",
        plainRu:
          "«Сделать более <strong>подходящим</strong> для охоты» → <em>suitable</em>.",
        explainRu:
          "После <em>more</em> — прилагательное: SUIT → <em>suitable</em> (-able); <em>suitable for hunting</em>.",
        explainOkRu:
          "<em>Suitable</em> = «подходящий»; <em>suitable for</em>.",
        explainWrongRu:
          "<em>Suit</em> (глагол/костюм) или <em>suitably</em> (наречие) после <em>more</em> не ставят.",
        examplesRu: [
          "✓ make it more <em>suitable</em> for hunting.",
          "✓ SUIT → <em>suitable</em> (-able).",
          "✗ …more <em>suit</em> for hunting… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "suit",
            hintRu:
              "SUIT — глагол/костюм; «подходящий» → <em>suitable</em>."
          },
          {
            includes: "suitably",
            hintRu:
              "<em>Suitably</em> — наречие; после <em>more</em> → прилаг."
          },
          {
            includes: "suited",
            hintRu:
              "<em>Suited</em> часто «подходит кому-то»; здесь <em>suitable for hunting</em>."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "The resulting series of state rooms, including the King's Bedchamber and the ",
        afterInline:
          " Long Gallery, is one of the most complete to survive from this period.",
        afterTail: "",
        cue: "IMPRESS",
        answers: ["impressive"],
        keyShow: "impressive",
        formationTag: "IMPRESS → -ive · прилагательное",
        plainRu:
          "«<strong>Впечатляющая</strong> Long Gallery» → <em>impressive</em>.",
        explainRu:
          "Перед названием зала — прилагательное: IMPRESS → <em>impressive</em> (-ive).",
        explainOkRu:
          "<em>Impressive</em> = «впечатляющий, grand».",
        explainWrongRu:
          "<em>Impress</em> (глагол) или <em>impression</em> (сущ.) перед <em>Long Gallery</em> не подходят.",
        examplesRu: [
          "✓ the <em>impressive</em> Long Gallery.",
          "✓ IMPRESS → <em>impressive</em> (-ive).",
          "✗ …the <em>impress</em> Long Gallery… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "impress",
            hintRu:
              "IMPRESS — глагол; перед <em>Long Gallery</em> → <em>impressive</em>."
          },
          {
            includes: "impression",
            hintRu:
              "<em>Impression</em> — сущ.; нужно прилаг. <em>impressive</em>."
          },
          {
            includes: "impressed",
            hintRu:
              "<em>Impressed</em> = «впечатлённый» — не про галерею."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "Apethorpe Palace is a private ",
        afterInline:
          " but is open to the public by pre-booked guided tours during July and August.",
        afterTail: "",
        cue: "RESIDE",
        answers: ["residence"],
        keyShow: "residence",
        formationTag: "RESIDE → -ence · существительное",
        plainRu:
          "«Частная <strong>резиденция / жилой дом</strong>» → <em>residence</em>.",
        explainRu:
          "После <em>a private</em> — существительное: RESIDE → <em>residence</em> (-ence).",
        explainOkRu:
          "<em>Residence</em> = «резиденция, место проживания».",
        explainWrongRu:
          "<em>Reside</em> (глагол) или <em>resident</em> (житель) после <em>a private</em> не подходят.",
        examplesRu: [
          "✓ a private <em>residence</em> open to visitors.",
          "✓ RESIDE → <em>residence</em> (-ence).",
          "✗ …a private <em>reside</em>… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "reside",
            hintRu:
              "RESIDE — глагол; «частная резиденция» → <em>residence</em>."
          },
          {
            includes: "resident",
            hintRu:
              "<em>Resident</em> = «житель» — не то."
          },
          {
            includes: "residential",
            hintRu:
              "<em>Residential</em> — прилаг.; после <em>a private</em> → сущ."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Apethorpe Palace:</strong> -ship (<em>ownership</em>), -ly (<em>regularly</em>), -able (<em>suitable</em>), -ive (<em>impressive</em>), -ence (<em>residence</em>).</p>" +
      "<p>После <em>its / a private / more</em> смотри, нужно сущ. или прилаг.; к глаголу <em>lived in</em> — наречие.</p>"
  });
})(typeof window !== "undefined" ? window : this);
