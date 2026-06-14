/**
 * ЕГЭ Grammar Exam · Unit 19 · Valley of Geysers · Manpupuner (задания 19–24).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u19-geysers-manpupuner",
    unitOrder: 19,
    title: "Unit 19 · Geysers · Manpupuner",
    examSection: "§19–24",
    headerTitle: "Valley of Geysers · Manpupuner",
    instructionHtml:
      "Прочитайте приведённые ниже тексты. Преобразуйте слово, <strong>напечатанное заглавными буквами</strong> справа от пропуска, так, чтобы оно <strong>грамматически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 19,
        paragraph: 1,
        before:
          "This geyser field on the Kamchatka Peninsula is on the list of the Seven Wonders of Russia. It has the ",
        afterInline:
          " largest concentration of geysers in the world (90 in total) and many hot springs.",
        afterTail: "",
        cue: "TWO",
        answers: ["second"],
        keyShow: "second",
        grammarTag: "TWO → second · порядковое",
        plainRu:
          "«<strong>Вторая</strong> по величине концентрация» → от TWO нужно порядковое <em>second</em> перед <em>largest</em>.",
        explainRu:
          "Конструкция <em>the second largest</em> = «второй по величине». TWO → <em>second</em>, не <em>two</em>.",
        explainOkRu:
          "<em>The second largest concentration</em> — после Исландии / Yellowstone и т.п.",
        explainWrongRu:
          "<em>Two largest</em> или <em>the two largest</em> — не та грамматика.",
        examplesRu: [
          "✓ the <em>second</em> largest city — «второй по величине город».",
          "✓ TWO → <em>second</em>, THREE → <em>third</em>.",
          "✗ the <em>two</em> largest… — нужно порядковое числительное."
        ],
        wrongIf: [
          {
            includes: "two",
            hintRu:
              "TWO → порядковое <em>second</em> перед <em>largest</em>."
          },
          {
            includes: "twice",
            hintRu:
              "<em>Twice</em> = «дважды»; здесь «второй» → <em>second</em>."
          },
          {
            includes: "secondly",
            hintRu:
              "<em>Secondly</em> — наречие «во-вторых»; нужно <em>second</em>."
          }
        ]
      },
      {
        examNum: 20,
        paragraph: 1,
        before:
          "It forms part of the Kronotsky Nature Reserve, which in turn ",
        afterInline:
          " in the World Heritage Site known as the Volcanoes of Kamchatka.",
        afterTail: "",
        cue: "INCLUDE",
        answers: ["is included", "s included"],
        keyShow: "is included",
        grammarTag: "Present Simple Passive",
        plainRu:
          "«Заповедник <strong>входит</strong> в объект ЮНЕСКО» → пассив <em>is included in</em>.",
        explainRu:
          "Reserve не «includes» сам — его <strong>включают</strong> в список: <em>is included in the World Heritage Site</em>.",
        explainOkRu:
          "<em>Is included in</em> = «входит в состав / включён в».",
        explainWrongRu:
          "Актив <em>includes</em> перевернёт смысл.",
        examplesRu: [
          "✓ The park <em>is included in</em> the UNESCO list.",
          "✓ This chapter <em>is included in</em> the book. — пассив + in.",
          "✗ …which <em>includes in</em> the Site. — нужен пассив."
        ],
        wrongIf: [
          {
            includes: "includes",
            hintRu:
              "Заповедник «включён в» → <em>is included in</em>."
          },
          {
            includes: "included",
            hintRu:
              "Без <em>is</em> пассив неполный → <em>is included</em>."
          },
          {
            includes: "is including",
            hintRu:
              "Active Continuous «включает» — не то."
          }
        ]
      },
      {
        examNum: 21,
        paragraph: 1,
        before: "The valley is difficult to reach, with helicopters ",
        afterInline: " the only possible means of transport.",
        afterTail: "",
        cue: "PROVIDE",
        answers: ["providing"],
        keyShow: "providing",
        grammarTag: "Participle I · with + -ing",
        plainRu:
          "«Вертолёты — <strong>единственный</strong> транспорт» → <em>with helicopters providing…</em>.",
        explainRu:
          "Конструкция <em>with + noun + -ing</em>: <em>with helicopters providing the only means</em> от <strong>PROVIDE</strong>.",
        explainOkRu:
          "<em>Providing</em> поясняет роль вертолётов.",
        explainWrongRu:
          "Голый <em>provide</em> после <em>with helicopters</em> не ставят.",
        examplesRu: [
          "✓ with winter <em>coming</em>, we stayed home. — with + -ing.",
          "✓ with buses <em>providing</em> the main service — «автобусы обеспечивают».",
          "✗ with helicopters <em>provide</em>… — нужно <em>providing</em>."
        ],
        wrongIf: [
          {
            includes: "provide",
            hintRu:
              "После <em>with helicopters</em> → <em>providing</em>."
          },
          {
            includes: "provided",
            hintRu:
              "Past Participle «предоставленные» — другая конструкция."
          },
          {
            includes: "provides",
            hintRu:
              "Present <em>provides</em> не после <em>with helicopters</em>."
          }
        ]
      },
      {
        examNum: 22,
        paragraph: 2,
        before:
          "The unique rock formations are also on the list of the Seven Wonders of Russia. These are a set of seven gigantic, abnormally shaped stone pillars ",
        afterInline: " west of the Ural Mountains in the Komi Republic.",
        afterTail: "",
        cue: "LOCATE",
        answers: ["located"],
        keyShow: "located",
        grammarTag: "Participle II · пассив",
        plainRu:
          "«Столбы, <strong>расположенные</strong> к западу от Урала» → <em>located west of</em>.",
        explainRu:
          "Сокращённый пассив: <em>stone pillars located west of the Ural Mountains</em> от <strong>LOCATE</strong>.",
        explainOkRu:
          "<em>Located west of</em> = «расположенные к западу от».",
        explainWrongRu:
          "Актив <em>locate</em> или <em>locates</em> не подходит.",
        examplesRu: [
          "✓ a village <em>located</em> near the river — «деревня у реки».",
          "✓ pillars <em>located</em> west of the mountains — та же схема.",
          "✗ pillars <em>locate</em> west of… — нужен Participle II."
        ],
        wrongIf: [
          {
            includes: "locate",
            hintRu:
              "Столбы «расположены» → <em>located</em>."
          },
          {
            includes: "locating",
            hintRu:
              "Active -ing «располагающие» — не то."
          },
          {
            includes: "are located",
            hintRu:
              "Полный пассив возможен, но в пропуске обычно одно слово → <em>located</em>."
          }
        ]
      },
      {
        examNum: 23,
        paragraph: 2,
        before: "They are also known as the Seven Strong ",
        afterInline: " Rock Formations or Poles of the Komi Republic.",
        afterTail:
          " According to a local legend, the stone pillars were once Samoyed giants walking through the mountains to Siberia to destroy the Mansi people.",
        cue: "MAN",
        answers: ["Men", "men"],
        keyShow: "Men",
        grammarTag: "Множественное число · MAN",
        plainRu:
          "«Семь сильных <strong>мужчин</strong>» → <em>Seven Strong Men</em>, не <em>man</em>.",
        explainRu:
          "Название: <em>the Seven Strong Men</em> — мн. ч. от <strong>MAN</strong>.",
        explainOkRu:
          "<em>Men</em> — неправильное множественное (не mans).",
        explainWrongRu:
          "Единственное <em>man</em> перед <em>Formations</em> в названии не стоит.",
        examplesRu: [
          "✓ Seven Strong <em>Men</em> — устойчивое имя места.",
          "✓ one <em>man</em>, seven <em>men</em>.",
          "✗ Seven Strong <em>Man</em>… — нужно <em>Men</em>."
        ],
        wrongIf: [
          {
            includes: "man",
            hintRu:
              "Seven + Strong → <em>Men</em>."
          },
          {
            includes: "mans",
            hintRu:
              "Формы <em>mans</em> нет → <em>men</em>."
          },
          {
            includes: "mens",
            hintRu:
              "Неверная форма → <em>men</em>."
          }
        ]
      },
      {
        examNum: 24,
        paragraph: 2,
        before:
          "However, upon seeing the holy Mansi mountains, the shaman of the giants dropped his drum and the entire team ",
        afterInline: " into the stone pillars.",
        afterTail: "",
        cue: "FREEZE",
        answers: ["froze", "was frozen", "were frozen"],
        keyShow: "froze",
        grammarTag: "Past Simple · FREEZE",
        plainRu:
          "«Вся команда <strong>замёрзла / превратилась</strong> в каменные столбы» → Past от FREEZE: <em>froze</em>.",
        explainRu:
          "Легенда в Past: <em>dropped</em>, <em>froze into the stone pillars</em> — неправильный глагол freeze → froze.",
        explainOkRu:
          "<em>Froze into</em> = «превратились (застыли) в каменные столбы».",
        explainWrongRu:
          "Present или голый <em>freeze</em> ломают прошлую историю.",
        examplesRu: [
          "✓ The water <em>froze</em> overnight. — freeze → froze.",
          "✓ They <em>froze</em> in fear. — Past Simple.",
          "✗ …the team <em>freeze</em> into… — нужен Past <em>froze</em>."
        ],
        wrongIf: [
          {
            includes: "freeze",
            hintRu:
              "После <em>dropped</em> → Past <em>froze</em>."
          },
          {
            includes: "frozen",
            hintRu:
              "Participle III без <em>had/was</em> не сказуемое; или <em>was frozen</em>."
          },
          {
            includes: "freezed",
            hintRu:
              "Формы <em>freezed</em> нет → <em>froze</em>."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Продолжение «7 чудес»:</strong> TWO → <em>second largest</em>; <em>is included in</em>; <em>with … providing</em>.</p>" +
      "<p><em>located</em>; MAN → <em>Men</em>; легенда в Past → <em>froze</em>.</p>"
  });
})(typeof window !== "undefined" ? window : this);
