/**
 * Word Formation Exam · Unit 6 · Building Stonehenge (задания 25–29).
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u6-building-stonehenge",
    unitOrder: 6,
    title: "Unit 6 · Building Stonehenge",
    examSection: "§25–29",
    headerTitle: "Building Stonehenge",
    instructionHtml:
      "Прочитайте текст. Образуйте от слова, <strong>напечатанное заглавными буквами</strong> справа от пропуска, однокоренное слово так, чтобы оно <strong>грамматически и лексически</strong> соответствовало содержанию текста.",

    items: [
      {
        examNum: 25,
        paragraph: 1,
        before:
          "Stonehenge is perhaps the world's most famous prehistoric monument. It is a masterpiece of ",
        afterInline:
          ", built using only simple tools and technologies, before the arrival of metals and the invention of the wheel.",
        afterTail: "",
        cue: "ENGINEER",
        answers: ["engineering"],
        keyShow: "engineering",
        formationTag: "ENGINEER → -ing · существительное",
        plainRu:
          "«Шедевр <strong>инженерного дела / строительной техники</strong>» → <em>engineering</em>.",
        explainRu:
          "После <em>of</em> — существительное: <em>a masterpiece of engineering</em> (ENGINEER → -ing).",
        explainOkRu:
          "<em>Engineering</em> = «инженерное искусство, технология строительства».",
        explainWrongRu:
          "<em>Engineer</em> (человек) или <em>engineered</em> (причастие) после <em>of</em> не подходят.",
        examplesRu: [
          "✓ a masterpiece of <em>engineering</em>.",
          "✓ ENGINEER → <em>engineering</em> (-ing).",
          "✗ …of <em>engineer</em>… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "engineer",
            hintRu:
              "ENGINEER = «инженер»; «шедевр техники» → <em>engineering</em>."
          },
          {
            includes: "engineered",
            hintRu:
              "Причастие не после <em>masterpiece of</em> → <em>engineering</em>."
          },
          {
            includes: "engineers",
            hintRu:
              "«Инженеры» — не то; нужно <em>engineering</em>."
          }
        ]
      },
      {
        examNum: 26,
        paragraph: 1,
        before:
          "Building the stone circle would have needed hundreds of people to transport, shape and erect the stones. These builders would have required others to provide them with food, to look after their children and to supply ",
        afterInline:
          " including hammerstones, ropes, antler picks and timber.",
        afterTail: "",
        cue: "EQUIP",
        answers: ["equipment"],
        keyShow: "equipment",
        formationTag: "EQUIP → -ment · неисчисл. сущ.",
        plainRu:
          "«Поставлять <strong>снаряжение / инструменты</strong>» → <em>equipment</em>.",
        explainRu:
          "После <em>supply</em> — существительное: EQUIP → <em>equipment</em> (-ment), обычно без мн. ч.",
        explainOkRu:
          "<em>Equipment</em> = «оборудование, снаряжение» (неисчисл.).",
        explainWrongRu:
          "<em>Equip</em> (глагол) или <em>equipments</em> (мн. ч.) здесь не используют.",
        examplesRu: [
          "✓ supply <em>equipment</em> including ropes.",
          "✓ EQUIP → <em>equipment</em> (-ment).",
          "✗ …supply <em>equip</em>… — нужно сущ."
        ],
        wrongIf: [
          {
            includes: "equip",
            hintRu:
              "EQUIP — глагол; после <em>supply</em> → <em>equipment</em>."
          },
          {
            includes: "equipments",
            hintRu:
              "<em>Equipment</em> обычно неисчисл.; без -s."
          },
          {
            includes: "equipped",
            hintRu:
              "Причастие «оснащённый» — не то."
          }
        ]
      },
      {
        examNum: 27,
        paragraph: 1,
        before:
          "The whole project would have needed ",
        afterInline: " planning and organisation.",
        afterTail: "",
        cue: "CARE",
        answers: ["careful"],
        keyShow: "careful",
        formationTag: "CARE → -ful · прилагательное",
        plainRu:
          "«<strong>Тщательное</strong> планирование» → <em>careful</em>.",
        explainRu:
          "Перед <em>planning</em> — прилагательное: CARE + <strong>-ful</strong> = <em>careful planning</em>.",
        explainOkRu:
          "<em>Careful</em> = «тщательный, внимательный».",
        explainWrongRu:
          "<em>Care</em> (сущ.) или <em>carefully</em> (наречие) перед <em>planning</em> (сущ.) не ставят.",
        examplesRu: [
          "✓ <em>careful</em> planning and organisation.",
          "✓ CARE → <em>careful</em> (-ful).",
          "✗ …needed <em>care</em> planning… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "care",
            hintRu:
              "CARE — сущ.; перед <em>planning</em> → <em>careful</em>."
          },
          {
            includes: "carefully",
            hintRu:
              "<em>Carefully</em> — наречие; нужно прилаг. <em>careful</em>."
          },
          {
            includes: "careless",
            hintRu:
              "Смысл: проект требовал <em>тщательности</em> → <em>careful</em>."
          }
        ]
      },
      {
        examNum: 28,
        paragraph: 1,
        before:
          "You may take an ",
        afterInline:
          " tour of Stonehenge with 360-degree view from inside the stones, which shows the monument's key features and its history.",
        afterTail: "",
        cue: "ACTIVE",
        answers: ["active"],
        keyShow: "active",
        formationTag: "ACTIVE → прилагательное",
        plainRu:
          "«<strong>Активная</strong> экскурсия» (360°, можно «ходить» по камням) → <em>active</em>.",
        explainRu:
          "Перед <em>tour</em> — прилагательное: ACTIVE → <em>active</em> («экскурсия с активным участием»).",
        explainOkRu:
          "<em>Active</em> = «активный»; здесь — не пассивный просмотр, а обзор 360°.",
        explainWrongRu:
          "<em>Activity</em> (сущ.) или <em>actively</em> (наречие) после <em>an</em> не подходят.",
        examplesRu: [
          "✓ an <em>active</em> 360-degree tour.",
          "✓ ACTIVE → <em>active</em> (прилаг.).",
          "✗ …an <em>activity</em> tour… — нужно прилаг."
        ],
        wrongIf: [
          {
            includes: "activity",
            hintRu:
              "<em>Activity</em> — сущ.; после <em>an</em> → <em>active</em>."
          },
          {
            includes: "actively",
            hintRu:
              "<em>Actively</em> — наречие; нужно прилаг. <em>active</em>."
          },
          {
            includes: "interactive",
            hintRu:
              "<em>Interactive</em> — от INTERACT; здесь основа ACTIVE → <em>active</em>."
          }
        ]
      },
      {
        examNum: 29,
        paragraph: 1,
        before:
          "You may also explore detailed images which ",
        afterInline:
          " the erection and changes of Stonehenge and nearby monuments from the early Neolithic period to the Bronze Age.",
        afterTail: "",
        cue: "CONSTRUCT",
        answers: ["reconstruct", "reconstructs"],
        keyShow: "reconstruct",
        formationTag: "CONSTRUCT → re- + глагол",
        plainRu:
          "«Изображения <strong>воссоздают</strong> постройку» → <em>reconstruct</em>.",
        explainRu:
          "После <em>which</em> — глагол: приставка <strong>re-</strong> + CONSTRUCT = «воссоздавать, реконструировать».",
        explainOkRu:
          "<em>Reconstruct</em> = «воссоздавать, показывать реконструкцию».",
        explainWrongRu:
          "<em>Construction</em> (сущ.) или <em>constructed</em> (причастие) в этой позиции не подходят.",
        examplesRu: [
          "✓ images which <em>reconstruct</em> the monument.",
          "✓ re- + CONSTRUCT → <em>reconstruct</em>.",
          "✗ …images which <em>construction</em>… — нужен глагол."
        ],
        wrongIf: [
          {
            includes: "construct",
            hintRu:
              "«Воссоздают историю» → <em>reconstruct</em> (re- + CONSTRUCT)."
          },
          {
            includes: "construction",
            hintRu:
              "<em>Construction</em> — сущ.; после <em>which</em> → глагол."
          },
          {
            includes: "constructed",
            hintRu:
              "Причастие «построенные» — другая конструкция."
          }
        ]
      }
    ],

    lifehackRu:
      "<p><strong>Building Stonehenge:</strong> -ing сущ. (<em>engineering</em>), -ment (<em>equipment</em>), -ful (<em>careful</em>), прилаг. (<em>active</em> tour), re- + глагол (<em>reconstruct</em>).</p>" +
      "<p>После <em>masterpiece of / supply</em> — существительное. После <em>which</em> + подлежащее во мн. ч. — глагол без -s или с -s по стилю.</p>"
  });
})(typeof window !== "undefined" ? window : this);
