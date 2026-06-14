/**
 * ЕГЭ Listening Matching · Unit 3 · Prom (задание 1).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u3-prom",
    unitOrder: 3,
    title: "Unit 3 · Prom",
    examSection: "§1 · Задание 1",
    headerTitle: "Prom",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/3/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%203%20(mp3cut.net).mp3",
    instructionHtml:
      "Вы услышите <strong>6 высказываний</strong>. Установите соответствие между высказываниями каждого говорящего <strong>A–F</strong> и утверждениями <strong>1–7</strong>. Используйте каждую цифру <strong>только один раз</strong>. Одно утверждение <strong>лишнее</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть, пока слушаешь:</strong></p>" +
      "<ul>" +
      "<li><strong>Главная мысль</strong> — не слово <em>prom</em> или <em>dance</em>, а <em>чья точка зрения</em> и <em>о чём главное</em>.</li>" +
      "<li>ЕГЭ часто даёт <strong>перефраз</strong>: «didn't live up to expectations» → «wasn't what I wanted» (№1).</li>" +
      "<li>Ловушка <strong>№3</strong> (dance / night to remember) — звучит у нескольких спикеров, но лишнее; ищи <em>главную</em> мысль каждого.</li>" +
      "<li>«Financial issues» — у родителей (№4) vs причина <em>не идти</em> (№6) — разные спикеры.</li>" +
      "<li>После проверки — <strong>разбор в тексте</strong> и <strong>аудиосуфлирование</strong>.</li>" +
      "</ul>",
    statements: [
      {
        num: 1,
        text: "I still remember my prom, though it wasn't what I wanted."
      },
      {
        num: 2,
        text: "A prom can show familiar people from another side."
      },
      {
        num: 3,
        text: "Entertainment and dance make prom a night to remember."
      },
      {
        num: 4,
        text: "Security and financial issues can darken this important event."
      },
      {
        num: 5,
        text: "Lots of things make up the greatest prom experience."
      },
      {
        num: 6,
        text: "Missing their prom is also an option for some school-leavers."
      },
      {
        num: 7,
        text: "It can be a worrying and exciting experience at the same time."
      }
    ],
    extraStatementNum: 3,
    /** A→7, B→4, C→2, D→5, E→1, F→6; лишнее — 3 */
    key: [7, 4, 2, 5, 1, 6],
    speakerLabels: ["A", "B", "C", "D", "E", "F"],
    quickPhrases: [
      { en: "stress about expectations", ru: "стресс из‑за ожиданий" },
      { en: "pressure from classmates", ru: "давление одноклассников" },
      { en: "the fear of missing it", ru: "страх пропустить выпускной" },
      { en: "concerns about safety", ru: "опасения за безопасность" },
      { en: "worried about spending money", ru: "переживают о тратах" },
      { en: "see students in a different light", ru: "увидеть учеников с другой стороны" },
      { en: "outside the classroom setting", ru: "вне классной комнаты" },
      { en: "a mix of elements", ru: "сочетание элементов" },
      { en: "careful planning guarantees", ru: "тщательное планирование обеспечивает" },
      { en: "didn't live up to the high expectations", ru: "не оправдал высоких ожиданий" },
      { en: "prevent someone from attending", ru: "мешать кому‑то прийти" },
      { en: "not an obligatory event", ru: "не обязательное мероприятие" }
    ],
    tapPhrases: [
      { en: "stress about expectations", ru: "стресс из‑за ожиданий" },
      { en: "pressure from classmates", ru: "давление одноклассников" },
      { en: "the fear of missing it", ru: "страх пропустить выпускной" },
      { en: "concerns about safety", ru: "опасения за безопасность" },
      { en: "worried about spending money on the prom", ru: "переживают о расходах на выпускной" },
      { en: "see students in a different light", ru: "увидеть учеников с другой стороны" },
      { en: "a mix of elements that serve everyone's interests", ru: "набор элементов на разные вкусы" },
      { en: "didn't live up to the high expectations", ru: "не оправдал высоких ожиданий" },
      { en: "wasn't their scene", ru: "не их формат / не по душе" },
      { en: "not an obligatory event", ru: "не обязательное мероприятие" }
    ],
    shadowSpeakers: [
      {
        id: "A",
        label: "Speaker A",
        phrases: [
          { en: "formal party to celebrate the end of secondary school", ru: "официальная вечеринка в конце школы" },
          { en: "a significant event", ru: "важное событие" },
          { en: "a night to remember", ru: "незабываемый вечер", tip: "ловушка №3, не ключ A" },
          { en: "dress up, dance, and celebrate with friends", ru: "нарядиться, танцевать, праздновать с друзьями" },
          { en: "choosing the perfect clothes", ru: "выбор идеального наряда" },
          { en: "finding a date", ru: "найти пару / свидание" },
          { en: "planning the after-party", ru: "планирование вечеринки после выпускного" },
          { en: "adds to the mood", ru: "добавляет настроения" },
          { en: "stress about expectations", ru: "стресс из‑за ожиданий", tip: "парафраз №7 · worrying" },
          { en: "pressure from classmates", ru: "давление одноклассников", tip: "парафраз №7" },
          { en: "the fear of missing it", ru: "страх пропустить", tip: "парафраз №7 · worrying" }
        ],
        fullText:
          "Prom is a formal party to celebrate the end of secondary school. Teenagers often see it as a significant event, a night to remember as they come closer to the end of their school journey. For many, it's a chance to dress up, dance, and celebrate with friends before graduation. The excitement of choosing the perfect clothes, finding a date, and planning the after-party adds to the mood. However, it can also bring stress about expectations, pressure from classmates, and the fear of missing it.",
        chunks: [
          {
            text:
              "Prom is a formal party to celebrate the end of secondary school. Teenagers often see it as a significant event, a night to remember as they come closer to the end of their school journey.",
            showText: true
          },
          {
            text:
              "For many, it's a chance to dress up, dance, and celebrate with friends before graduation.",
            showText: true
          },
          {
            text:
              "The excitement of choosing the perfect clothes, finding a date, and planning the after-party adds to the mood.",
            showText: true
          },
          {
            text:
              "However, it can also bring stress about expectations, pressure from classmates, and the fear of missing it.",
            showText: false
          }
        ]
      },
      {
        id: "B",
        label: "Speaker B",
        phrases: [
          { en: "Parents often have mixed feelings about prom", ru: "у родителей смешанные чувства" },
          { en: "an important stage in their children's life", ru: "важный этап в жизни ребёнка" },
          { en: "transition to adulthood", ru: "переход во взрослую жизнь" },
          { en: "value the memories and friendships", ru: "ценят воспоминания и дружбу" },
          {
            en: "concerns about safety",
            ru: "опасения за безопасность",
            tip: "парафраз №4 · Security"
          },
          { en: "parties and late-night activities", ru: "вечеринки и ночные мероприятия" },
          {
            en: "worried about spending money on the prom",
            ru: "переживают о расходах на выпускной",
            tip: "парафраз №4 · financial"
          },
          { en: "weigh heavily on their minds", ru: "сильно беспокоят" }
        ],
        fullText:
          "Parents often have mixed feelings about prom. On the one hand, they recognise it as an important stage in their children's life, a significant occasion marking their child's transition to adulthood. They value the memories and friendships formed during this big event. On the other hand, concerns about safety, especially with parties and late-night activities, can weigh heavily on their minds. They may also be worried about spending money on the prom.",
        chunks: [
          {
            text:
              "Parents often have mixed feelings about prom. On the one hand, they recognise it as an important stage in their children's life, a significant occasion marking their child's transition to adulthood.",
            showText: true
          },
          {
            text:
              "They value the memories and friendships formed during this big event.",
            showText: true
          },
          {
            text:
              "On the other hand, concerns about safety, especially with parties and late-night activities, can weigh heavily on their minds.",
            showText: true
          },
          {
            text: "They may also be worried about spending money on the prom.",
            showText: false
          }
        ]
      },
      {
        id: "C",
        label: "Speaker C",
        phrases: [
          { en: "the highest point of their students' high school years", ru: "кульминация школьных лет" },
          { en: "relax, celebrate, and create lasting memories", ru: "отдохнуть, отпраздновать, сохранить воспоминания" },
          { en: "after years of hard work", ru: "после лет упорной учёбы" },
          {
            en: "see students in a different light",
            ru: "увидеть учеников с другой стороны",
            tip: "парафраз №2 · familiar people from another side"
          },
          { en: "outside the classroom setting", ru: "вне классной комнаты" },
          { en: "seeing their growth and maturity", ru: "видеть их рост и зрелость" },
          { en: "unsuitable behaviour", ru: "неподобающее поведение" },
          { en: "pressure from classmates", ru: "давление одноклассников" }
        ],
        fullText:
          "Teachers often view prom as the highest point of their students' high school years. They appreciate the opportunity for students to relax, celebrate, and create lasting memories after years of hard work. Some teachers enjoy the chance to see students in a different light, outside the classroom setting, seeing their growth and maturity. However, this different light may sometimes turn into unsuitable behaviour, especially when it comes to pressure from classmates.",
        chunks: [
          {
            text:
              "Teachers often view prom as the highest point of their students' high school years.",
            showText: true
          },
          {
            text:
              "They appreciate the opportunity for students to relax, celebrate, and create lasting memories after years of hard work.",
            showText: true
          },
          {
            text:
              "Some teachers enjoy the chance to see students in a different light, outside the classroom setting, seeing their growth and maturity.",
            showText: true
          },
          {
            text:
              "However, this different light may sometimes turn into unsuitable behaviour, especially when it comes to pressure from classmates.",
            showText: false
          }
        ]
      },
      {
        id: "D",
        label: "Speaker D",
        phrases: [
          {
            en: "combines a mix of elements",
            ru: "сочетает набор элементов",
            tip: "парафраз №5 · Lots of things"
          },
          { en: "serve everyone's interests and tastes", ru: "учитывать интересы и вкусы всех" },
          { en: "A lovely place sets the stage", ru: "красивое место задаёт атмосферу" },
          { en: "great music that keeps everyone dancing all night", ru: "отличная музыка — танцы всю ночь", tip: "ловушка №3" },
          { en: "Delicious food and drinks", ru: "вкусная еда и напитки" },
          { en: "everyone stays energized", ru: "все остаются бодрыми" },
          { en: "A photogenic backdrop for capturing memories", ru: "фотогеничный фон для снимков" },
          { en: "a well-organized schedule with fun activities", ru: "чёткое расписание с развлечениями" },
          {
            en: "careful planning guarantees a smooth and enjoyable evening",
            ru: "тщательное планирование — гладкий вечер",
            tip: "парафраз №5"
          }
        ],
        fullText:
          "The best prom often combines a mix of elements that serve everyone's interests and tastes. A lovely place sets the stage, with great music that keeps everyone dancing all night. Delicious food and drinks add to the festivities, making sure everyone stays energized. A photogenic backdrop for capturing memories and a well-organized schedule with fun activities can improve the experience. Lastly, careful planning guarantees a smooth and enjoyable evening for all.",
        chunks: [
          {
            text:
              "The best prom often combines a mix of elements that serve everyone's interests and tastes.",
            showText: true
          },
          {
            text:
              "A lovely place sets the stage, with great music that keeps everyone dancing all night.",
            showText: true
          },
          {
            text:
              "Delicious food and drinks add to the festivities, making sure everyone stays energized.",
            showText: true
          },
          {
            text:
              "A photogenic backdrop for capturing memories and a well-organized schedule with fun activities can improve the experience.",
            showText: true
          },
          {
            text:
              "Lastly, careful planning guarantees a smooth and enjoyable evening for all.",
            showText: false
          }
        ]
      },
      {
        id: "E",
        label: "Speaker E",
        phrases: [
          { en: "Attending the prom was a memorable experience", ru: "выпускной запомнился надолго", tip: "парафраз №1 · remember" },
          { en: "though it had its ups and downs", ru: "хотя были взлёты и падения" },
          { en: "beautifully decorated", ru: "красиво украшен" },
          { en: "Dancing with friends and classmates was fun", ru: "танцы с друзьями были весёлыми", tip: "ловушка №3" },
          { en: "the music kept everyone entertained", ru: "музыка развлекала всех", tip: "ловушка №3" },
          { en: "the food was not great", ru: "еда была не лучшей" },
          { en: "some activities felt a bit dull", ru: "часть активностей казалась скучной" },
          { en: "moments of joy and friendship", ru: "моменты радости и дружбы" },
          {
            en: "didn't live up to the high expectations often associated with prom",
            ru: "не оправдал завышенных ожиданий от выпускного",
            tip: "парафраз №1 · wasn't what I wanted"
          }
        ],
        fullText:
          "Attending the prom was a memorable experience, though it had its ups and downs. The place was beautifully decorated, setting a festive mood for the evening. Dancing with friends and classmates was fun, and the music kept everyone entertained. However, the food was not great, and some activities felt a bit dull. Overall, it was a nice night filled with moments of joy and friendship, but it didn't live up to the high expectations often associated with prom.",
        chunks: [
          {
            text:
              "Attending the prom was a memorable experience, though it had its ups and downs.",
            showText: true
          },
          {
            text:
              "The place was beautifully decorated, setting a festive mood for the evening.",
            showText: true
          },
          {
            text:
              "Dancing with friends and classmates was fun, and the music kept everyone entertained.",
            showText: true
          },
          {
            text:
              "However, the food was not great, and some activities felt a bit dull.",
            showText: false
          },
          {
            text:
              "Overall, it was a nice night filled with moments of joy and friendship, but it didn't live up to the high expectations often associated with prom.",
            showText: true
          }
        ]
      },
      {
        id: "F",
        label: "Speaker F",
        phrases: [
          { en: "attending a school-leaving party wasn't their scene", ru: "выпускной — не их формат", tip: "парафраз №6 · missing prom" },
          { en: "didn't agree with their interests", ru: "не совпадало с интересами" },
          {
            en: "financial issues, finding the costs associated with prom too high",
            ru: "финансовые проблемы — выпускной слишком дорог",
            tip: "ловушка №4 · не darken event"
          },
          { en: "not having a date", ru: "нет пары / свидания" },
          { en: "feeling uncomfortable in large social settings", ru: "дискомфорт в больших компаниях" },
          {
            en: "prevent someone from attending",
            ru: "мешать кому‑то прийти",
            tip: "парафраз №6"
          },
          {
            en: "not an obligatory event",
            ru: "не обязательное мероприятие",
            tip: "парафраз №6 · option to miss"
          },
          { en: "different things influence their decisions", ru: "разные факторы влияют на решение" }
        ],
        fullText:
          "Some of my classmates probably felt attending a school-leaving party wasn't their scene or didn't agree with their interests. Some could have financial issues, finding the costs associated with prom too high. Personal experiences — like not having a date or feeling uncomfortable in large social settings — could also prevent someone from attending. Overall, it's a not an obligatory event. All people are different, and different things influence their decisions.",
        chunks: [
          {
            text:
              "Some of my classmates probably felt attending a school-leaving party wasn't their scene or didn't agree with their interests.",
            showText: true
          },
          {
            text:
              "Some could have financial issues, finding the costs associated with prom too high.",
            showText: true
          },
          {
            text:
              "Personal experiences — like not having a date or feeling uncomfortable in large social settings — could also prevent someone from attending.",
            showText: true
          },
          {
            text:
              "Overall, it's a not an obligatory event. All people are different, and different things influence their decisions.",
            showText: false
          }
        ]
      }
    ],
    huntLabs: [
      {
        speaker: "A",
        keyNum: 7,
        trapNums: [3],
        keyLineRu:
          "Утверждение 7 — одновременно волнительно и тревожно (exciting + worrying).",
        evidencePromptRu:
          "<strong>Speaker A · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — excitement + stress / fear → <strong>№7</strong>.",
        distractorPromptRu:
          "<strong>Speaker A · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — «night to remember / dance» → ловушка <strong>№3</strong>, не №7.",
        promptRu:
          "<strong>Speaker A.</strong> Зелёным — stress + excitement. Красным — dance / night to remember (№3).",
        segments: [
          {
            kind: "glue",
            html:
              "Prom is a formal party to celebrate the end of secondary school. Teenagers often see it as a significant event, "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 3,
            text: "a night to remember",
            explainRu:
              "Ловушка <strong>№3</strong> (entertainment / night to remember): фраза есть, но главная мысль A — stress + excitement (№7)."
          },
          {
            kind: "glue",
            html:
              " as they come closer to the end of their school journey. For many, it's a chance to "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 3,
            text: "dress up, dance, and celebrate with friends",
            explainRu:
              "Ловушка <strong>№3</strong>: dance/celebrate — не ключ A."
          },
          {
            kind: "glue",
            html:
              " before graduation. The excitement of choosing the perfect clothes, finding a date, and planning the after-party adds to the mood. However, it can also bring "
          },
          {
            kind: "hit",
            sol: "e",
            text: "stress about expectations",
            explainRu:
              "Парафраз <strong>№7</strong>: worrying."
          },
          {
            kind: "glue",
            html: ", "
          },
          {
            kind: "hit",
            sol: "e",
            text: "pressure from classmates",
            explainRu:
              "Парафраз <strong>№7</strong>: worrying / pressure."
          },
          {
            kind: "glue",
            html: ", and "
          },
          {
            kind: "hit",
            sol: "e",
            text: "the fear of missing it",
            explainRu:
              "Парафраз <strong>№7</strong>: worrying experience."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "B",
        keyNum: 4,
        trapNums: [7],
        keyLineRu:
          "Утверждение 4 — безопасность и деньги могут омрачить событие.",
        evidencePromptRu:
          "<strong>Speaker B · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — safety + money worries → <strong>№4</strong>.",
        distractorPromptRu:
          "<strong>Speaker B · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — «important stage / mixed feelings» → <strong>№7</strong>, не №4.",
        promptRu:
          "<strong>Speaker B.</strong> Зелёным — safety, spending money. Красным — positive side only (№7).",
        segments: [
          {
            kind: "hit",
            sol: "d",
            trapNum: 7,
            text: "Parents often have mixed feelings about prom",
            explainRu:
              "Ловушка <strong>№7</strong> (worrying + exciting): mixed feelings — не про darken (№4)."
          },
          {
            kind: "glue",
            html:
              ". On the one hand, they recognise it as an important stage in their children's life, a significant occasion marking their child's transition to adulthood. They value the memories and friendships formed during this big event. On the other hand, "
          },
          {
            kind: "hit",
            sol: "e",
            text: "concerns about safety",
            explainRu:
              "Парафраз <strong>№4</strong>: Security issues."
          },
          {
            kind: "glue",
            html:
              ", especially with parties and late-night activities, can weigh heavily on their minds. They may also be "
          },
          {
            kind: "hit",
            sol: "e",
            text: "worried about spending money on the prom",
            explainRu:
              "Парафраз <strong>№4</strong>: financial issues darken the event."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "C",
        keyNum: 2,
        trapNums: [5],
        keyLineRu:
          "Утверждение 2 — prom показывает знакомых людей с другой стороны.",
        evidencePromptRu:
          "<strong>Speaker C · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — different light / outside classroom → <strong>№2</strong>.",
        distractorPromptRu:
          "<strong>Speaker C · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — «highest point / celebrate» → <strong>№5</strong>, не №2.",
        promptRu:
          "<strong>Speaker C.</strong> Зелёным — different light. Красным — best prom elements (№5).",
        segments: [
          {
            kind: "hit",
            sol: "d",
            trapNum: 5,
            text: "Teachers often view prom as the highest point of their students' high school years",
            explainRu:
              "Ловушка <strong>№5</strong> (greatest experience): «highest point» — не «another side» (№2)."
          },
          {
            kind: "glue",
            html:
              ". They appreciate the opportunity for students to relax, celebrate, and create lasting memories after years of hard work. Some teachers enjoy the chance to "
          },
          {
            kind: "hit",
            sol: "e",
            text: "see students in a different light",
            explainRu:
              "Прямой парафраз <strong>№2</strong>: familiar people from another side."
          },
          {
            kind: "glue",
            html: ", "
          },
          {
            kind: "hit",
            sol: "e",
            text: "outside the classroom setting",
            explainRu:
              "Контекст <strong>№2</strong>: другая сторона знакомых учеников."
          },
          {
            kind: "glue",
            html: ", seeing their growth and maturity. However, this different light may sometimes turn into unsuitable behaviour, especially when it comes to pressure from classmates."
          }
        ]
      },
      {
        speaker: "D",
        keyNum: 5,
        trapNums: [3],
        keyLineRu:
          "Утверждение 5 — множество элементов составляют лучший prom.",
        evidencePromptRu:
          "<strong>Speaker D · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — mix of elements, planning → <strong>№5</strong>.",
        distractorPromptRu:
          "<strong>Speaker D · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — только music/dance → <strong>№3</strong>, не №5.",
        promptRu:
          "<strong>Speaker D.</strong> Зелёным — mix of elements. Красным — dance all night (№3).",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "combines a mix of elements that serve everyone's interests and tastes",
            explainRu:
              "Прямой парафраз <strong>№5</strong>: lots of things make up the experience."
          },
          {
            kind: "glue",
            html: ". A lovely place sets the stage, with "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 3,
            text: "great music that keeps everyone dancing all night",
            explainRu:
              "Ловушка <strong>№3</strong> (entertainment and dance): один элемент, не вся мысль D."
          },
          {
            kind: "glue",
            html:
              ". Delicious food and drinks add to the festivities, making sure everyone stays energized. A photogenic backdrop for capturing memories and a well-organized schedule with fun activities can improve the experience. Lastly, "
          },
          {
            kind: "hit",
            sol: "e",
            text: "careful planning guarantees a smooth and enjoyable evening for all",
            explainRu:
              "Часть <strong>№5</strong>: planning + many ingredients."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "E",
        keyNum: 1,
        trapNums: [3],
        keyLineRu:
          "Утверждение 1 — помню prom, хотя он не оправдал ожиданий.",
        evidencePromptRu:
          "<strong>Speaker E · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — memorable + didn't live up to expectations → <strong>№1</strong>.",
        distractorPromptRu:
          "<strong>Speaker E · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — dance/music fun → <strong>№3</strong>, не №1.",
        promptRu:
          "<strong>Speaker E.</strong> Зелёным — remember + disappointed. Красным — dance fun (№3).",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "Attending the prom was a memorable experience",
            explainRu:
              "Парафраз <strong>№1</strong>: I still remember my prom."
          },
          {
            kind: "glue",
            html:
              ", though it had its ups and downs. The place was beautifully decorated, setting a festive mood for the evening. "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 3,
            text: "Dancing with friends and classmates was fun, and the music kept everyone entertained",
            explainRu:
              "Ловушка <strong>№3</strong>: entertainment/dance — не главная мысль E."
          },
          {
            kind: "glue",
            html:
              ". However, the food was not great, and some activities felt a bit dull. Overall, it was a nice night filled with moments of joy and friendship, but "
          },
          {
            kind: "hit",
            sol: "e",
            text: "it didn't live up to the high expectations often associated with prom",
            explainRu:
              "Парафраз <strong>№1</strong>: wasn't what I wanted."
          },
          {
            kind: "glue",
            html: "."
          }
        ]
      },
      {
        speaker: "F",
        keyNum: 6,
        trapNums: [4],
        keyLineRu:
          "Утверждение 6 — для некоторых выпускников prom можно и пропустить.",
        evidencePromptRu:
          "<strong>Speaker F · шаг 1.</strong> <strong style=\"color:#86efac\">Зелёным</strong> — not obligatory / prevent attending → <strong>№6</strong>.",
        distractorPromptRu:
          "<strong>Speaker F · шаг 2.</strong> <strong style=\"color:#fca5a5\">Красным</strong> — financial issues → <strong>№4</strong> (родители), не №6.",
        promptRu:
          "<strong>Speaker F.</strong> Зелёным — skip prom / not obligatory. Красным — financial (№4 context).",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "attending a school-leaving party wasn't their scene",
            explainRu:
              "Парафраз <strong>№6</strong>: missing prom is an option."
          },
          {
            kind: "glue",
            html: " or didn't agree with their interests. "
          },
          {
            kind: "hit",
            sol: "d",
            trapNum: 4,
            text: "Some could have financial issues, finding the costs associated with prom too high",
            explainRu:
              "Ловушка <strong>№4</strong> (parents darken event): здесь financial — причина <em>не идти</em> (№6), не «darken»."
          },
          {
            kind: "glue",
            html:
              ". Personal experiences — like not having a date or feeling uncomfortable in large social settings — could also "
          },
          {
            kind: "hit",
            sol: "e",
            text: "prevent someone from attending",
            explainRu:
              "Парафраз <strong>№6</strong>: option to miss prom."
          },
          {
            kind: "glue",
            html: ". Overall, "
          },
          {
            kind: "hit",
            sol: "e",
            text: "it's a not an obligatory event",
            explainRu:
              "Прямая опора <strong>№6</strong>: missing prom is allowed."
          },
          {
            kind: "glue",
            html: ". All people are different, and different things influence their decisions."
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
