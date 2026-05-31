/**
 * Word Formation Exam · Unit 11 · The bird world (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u11-the-bird-world",
    unitOrder: 11,
    title: "Unit 11 · The bird world",
    examSection: "§25–29",
    headerTitle: "The bird world",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "There are more than 9,000 different types, or species, of birds. These have been organized by ",
        afterInline:
          " into groups called orders which contain many different species. The largest order is called the passerines, also known as perching or song birds. These include common birds such as robins.",
        afterTail: "",
        cue: "SCIENCE",
        answers: ["scientists"],
        keyShow: "scientists",
        formationTag: "SCIENCE → -ist · мн. ч.",
        plainRu:
          "«Классифицированы <strong>учёными</strong>» → <em>scientists</em>.",
        explainRu:
          "После <em>by</em> — кто организовал: SCIENCE → <em>scientist</em> → мн. ч. <em>scientists</em>.",
        explainOkRu:
          "<em>Scientists</em> = «учёные»; <em>organized by scientists</em>.",
        explainWrongRu:
          "<em>Science</em> (наука) после <em>by</em> не обозначает людей.",
        examplesRu: [
          "✓ organized by <em>scientists</em> into groups.",
          "✓ SCIENCE → <em>scientist</em> → <em>scientists</em>.",
          "✗ …organized by <em>science</em>… — нужны люди."
        ],
        wrongIf: [
          {
            includes: "science",
            hintRu:
              "SCIENCE = «наука»; кто классифицировал → <em>scientists</em>."
          },
          {
            includes: "scientific",
            hintRu:
              "<em>Scientific</em> — прилаг.; после <em>by</em> → <em>scientists</em>."
          },
          {
            includes: "scientist",
            hintRu:
              "Обычно не один учёный → мн. ч. <em>scientists</em>."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before: "Birds are ",
        afterInline:
          " creatures — the only living beings that have feathers. Feathers keep a bird warm and protect it from the wind and rain. Its wing and tail feathers allow a bird to fly.",
        afterTail: "",
        cue: "AMAZE",
        answers: ["amazing"],
        keyShow: "amazing",
        formationTag: "AMAZE → -ing · прилагательное",
        plainRu:
          "«<strong>Удивительные</strong> создания» → <em>amazing</em>.",
        explainRu:
          "Перед <em>creatures</em> — прилагательное: AMAZE → <em>amazing</em> (-ing).",
        explainOkRu:
          "<em>Amazing</em> = «удивительный, поразительный».",
        explainWrongRu:
          "<em>Amaze</em> (глагол) или <em>amazement</em> (сущ.) перед <em>creatures</em> не ставят.",
        examplesRu: [
          "✓ <em>amazing</em> creatures with feathers.",
          "✓ AMAZE → <em>amazing</em> (-ing).",
          "✗ Birds are <em>amaze</em> creatures… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "amaze",
            hintRu:
              "AMAZE — глагол; «удивительные» → <em>amazing</em>."
          },
          {
            includes: "amazement",
            hintRu:
              "<em>Amazement</em> — сущ.; нужно прилаг. <em>amazing</em>."
          },
          {
            includes: "amazed",
            hintRu:
              "<em>Amazed</em> = «изумлённые» — про реакцию, не про птиц."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "Some birds also have very colourful feathers. This helps them to attract mates or blend in with their ",
        afterInline: ". This is called camouflage.",
        afterTail: "",
        cue: "SURROUND",
        answers: ["surroundings"],
        keyShow: "surroundings",
        formationTag: "SURROUND → -ings · мн. ч.",
        plainRu:
          "«Сливаться с <strong>окружением</strong>» → <em>surroundings</em>.",
        explainRu:
          "После <em>their</em> — существительное: SURROUND → <em>surroundings</em> (мн. ч.); <em>blend in with their surroundings</em>.",
        explainOkRu:
          "<em>Surroundings</em> = «окружение, среда».",
        explainWrongRu:
          "<em>Surround</em> (глагол) или <em>surrounding</em> (прилаг.) после <em>their</em> не подходят.",
        examplesRu: [
          "✓ blend in with their <em>surroundings</em>.",
          "✓ SURROUND → <em>surroundings</em>.",
          "✗ …with their <em>surround</em>. — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "surround",
            hintRu:
              "SURROUND — глагол; «окружение» → <em>surroundings</em>."
          },
          {
            includes: "surrounding",
            hintRu:
              "<em>Surrounding</em> — прилаг.; нужно сущ. <em>surroundings</em>."
          },
          {
            includes: "surrounded",
            hintRu:
              "Причастие не после <em>their</em> → <em>surroundings</em>."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "All birds lay eggs. It would be ",
        afterInline:
          " for birds to carry their developing young inside their bodies like mammals do — they would become too heavy to fly.",
        afterTail: "",
        cue: "MANAGE",
        answers: ["unmanageable"],
        keyShow: "unmanageable",
        formationTag: "MANAGE → un- + -able · прилагательное",
        plainRu:
          "«Было бы <strong>невыполнимо / неуправляемо</strong>» нести птенцов внутри → <em>unmanageable</em>.",
        explainRu:
          "После <em>It would be</em> — прилагательное: MANAGE + un- + -able = «слишком трудно, нереально»; дальше — слишком тяжело летать.",
        explainOkRu:
          "<em>Unmanageable</em> = «неуправляемый, невыполнимый (в данном случае)».",
        explainWrongRu:
          "<em>Manage</em> (глагол) или <em>manageable</em> («посильно») противоречат смыслу.",
        examplesRu: [
          "✓ It would be <em>unmanageable</em> to carry that weight.",
          "✓ MANAGE → <em>unmanageable</em> (un- + -able).",
          "✗ …would be <em>manageable</em>… — смысл наоборот."
        ],
        wrongIf: [
          {
            includes: "manage",
            hintRu:
              "MANAGE — глагол; <em>It would be …</em> → <em>unmanageable</em>."
          },
          {
            includes: "manageable",
            hintRu:
              "<em>Manageable</em> = «посильно»; здесь наоборот → <em>unmanageable</em>."
          },
          {
            includes: "management",
            hintRu:
              "<em>Management</em> — сущ.; нужно прилаг."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "All birds have a beak for eating. Hunting birds, such as hawks and eagles, have ",
        afterInline: " hooked beaks.",
        afterTail: "",
        cue: "POWER",
        answers: ["powerful"],
        keyShow: "powerful",
        formationTag: "POWER → -ful · прилагательное",
        plainRu:
          "«<strong>Мощные</strong> крючковатые клювы» → <em>powerful</em>.",
        explainRu:
          "Перед <em>hooked beaks</em> — прилагательное: POWER + <strong>-ful</strong> = <em>powerful</em>.",
        explainOkRu:
          "<em>Powerful</em> = «мощный, сильный».",
        explainWrongRu:
          "<em>Power</em> (сущ.) или <em>powerfully</em> (наречие) перед <em>hooked beaks</em> не ставят.",
        examplesRu: [
          "✓ <em>powerful</em> hooked beaks.",
          "✓ POWER → <em>powerful</em> (-ful).",
          "✗ …have <em>power</em> hooked beaks… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "power",
            hintRu:
              "POWER — сущ.; «мощные клювы» → <em>powerful</em>."
          },
          {
            includes: "powerfully",
            hintRu:
              "<em>Powerfully</em> — наречие; нужно прилаг. <em>powerful</em>."
          },
          {
            includes: "powerless",
            hintRu:
              "Смысл: хищники с сильным клювом → <em>powerful</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>The bird world:</strong> -ist мн. ч. (<em>scientists</em>), -ing (<em>amazing</em>), <em>surroundings</em>, un- + -able (<em>unmanageable</em>), -ful (<em>powerful</em>).</p>" +
      "<p><em>It would be + adj + for … to</em> — часто прилаг. С neg- (<em>un-</em>), если дальше объясняют, почему нельзя.</p>"
  });
})(typeof window !== "undefined" ? window : this);
