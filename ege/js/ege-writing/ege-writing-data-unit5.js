(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u5",
      unitLabel: "Unit 5",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 5: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Shelly:",
      promptMeta: {
        from: "Shelly@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "Russian art..."
      },
      promptRu:
        "Thanks for sending me traditional Russian sweets. I really enjoyed them! By the way, I loved the picture of three little bears on the cover. Do you often see illustrations of famous pictures on everyday products in Russia? Who is the most famous Russian artist, in your opinion? What art museums in Russia would you recommend visiting, and why?\nI bought a new phone last week...",
      instructions: [
        "Write an email to Shelly.",
        "In your message: answer her questions;",
        "ask 3 questions about her new phone.",
        "Write 100-140 words.",
        "Remember the rules of email writing."
      ],
      fieldNote:
        "Сюда ученик вставляет или пишет свой email. Пример ниже открывается отдельно и это поле не заполняет.",
      wordLimits: {
        targetMin: 100,
        targetMax: 140,
        hardMin: 90,
        hardMax: 154
      },
      structurePanelTitle: "Структура email",
      structureChecklist: [
        "Обращение (Dear Shelly, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: illustrations on everyday products",
        "Ответ: most famous Russian artist",
        "Ответ: art museums to visit + why",
        "3 вопроса к Shelly про new phone",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Shelly,`",
        "Я ответил(а) на вопросы Shelly про Russian art",
        "Я задал(а) 3 вопроса back про `new phone`",
        "Я добавил(а) closing phrase и подпись",
        "Я проверил(а), что объём около `100-140` слов",
        "Я перечитал(а) текст на grammar / spelling / punctuation"
      ],
      detectLegend: [
        { role: "greeting", label: "Обращение" },
        { role: "opening", label: "Opening" },
        { role: "answer", label: "Ответы" },
        { role: "question", label: "Questions back" },
        { role: "closing", label: "Closing" },
        { role: "signoff", label: "Подпись" }
      ],
      promptQuestions: [
        {
          id: "q1",
          label:
            "Do you often see illustrations of famous pictures on everyday products in Russia?",
          keywords: [
            "illustrations",
            "famous pictures",
            "everyday products",
            "often see",
            "in russia",
            "on the cover",
            "packaging",
            "sometimes",
            "yes"
          ]
        },
        {
          id: "q2",
          label: "Who is the most famous Russian artist, in your opinion?",
          keywords: [
            "most famous",
            "russian artist",
            "in my opinion",
            "repin",
            "kandinsky",
            "malevich",
            "levitan",
            "surikov",
            "artist"
          ]
        },
        {
          id: "q3",
          label: "What art museums in Russia would you recommend visiting, and why?",
          keywords: [
            "art museum",
            "museums",
            "recommend",
            "visiting",
            "tretyakov",
            "hermitage",
            "pushkin museum",
            "because",
            "why"
          ]
        }
      ],
      questionBackHint: "her new phone",
      questionBackKeywords: [
        "What",
        "Why",
        "When",
        "Where",
        "Who",
        "How",
        "Did",
        "Does",
        "Do",
        "Is",
        "Was",
        "Were",
        "Have"
      ],
      requiredBlocks: {
        greeting: ["dear shelly"],
        thanks: [
          "thanks for your email",
          "thank you for your email",
          "thanks for writing",
          "it was great to hear from you"
        ],
        closing: [
          "write back soon",
          "hope to hear from you soon",
          "best wishes",
          "all the best",
          "take care"
        ],
        signoff: ["best wishes", "all the best", "yours", "take care"]
      },
      usefulPhrases: {
        opening: [
          "Dear Shelly,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "Yes, I often see illustrations of famous pictures on everyday products in Russia.",
          "In my opinion, the most famous Russian artist is ...",
          "I would recommend visiting the Tretyakov Gallery because ..."
        ],
        questions: [
          "What model of phone did you buy?",
          "What features do you like most about it?",
          "Was it expensive?"
        ],
        closing: [
          "Anyway, I have to go now.",
          "Write back soon.",
          "Best wishes,",
          "Your Russian friend"
        ]
      },
      helpCards: [
        {
          id: "structure",
          label: "Структура",
          title: "Что должно быть в письме",
          lines: [
            "1. Dear Shelly,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Shelly про Russian art.",
            "4. 3 вопроса о her new phone.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Shelly",
          title: "Что нужно раскрыть",
          lines: [
            "Скажите, часто ли на упаковках в России встречаются иллюстрации известных картин.",
            "Назовите, по вашему мнению, самого известного Russian artist.",
            "Порекомендуйте art museums в России и объясните почему.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Shelly",
          lines: [
            "Нужно задать ровно 3 вопроса про new phone.",
            "Примеры: What model is it? What colour is it? Do you like the camera?",
            "Вопросы должны быть именно к phone, не к Russian sweets."
          ]
        },
        {
          id: "criteria",
          label: "Критерии ЕГЭ",
          title: "Как реально набираются баллы",
          lines: [
            "Максимум за Task 37 - 6 первичных баллов.",
            "РКЗ - до 2 баллов: ответы на 3 вопроса + 3 questions back.",
            "Организация текста - до 2 баллов: формат email, логика, абзацы, обращение и подпись.",
            "Языковое оформление - до 2 баллов: лексика, грамматика, орфография и пунктуация."
          ]
        }
      ],
      topicWords: [
        "art",
        "artist",
        "museum",
        "russia",
        "illustrations",
        "sweets",
        "phone",
        "shelly",
        "pictures",
        "tretyakov"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear shelly\\b(?!,)",
          flags: "i",
          msg: "После `Dear Shelly` нужна запятая."
        },
        {
          pattern: "\\bthanks for your letter\\b",
          flags: "i",
          msg: "В задании email, поэтому естественнее `Thanks for your email`."
        },
        {
          pattern: "\\bi very like\\b",
          flags: "i",
          msg: "Лучше `I like ... very much`, а не `I very like`."
        },
        {
          pattern: "\\bthe most famous artist is repin is\\b",
          flags: "i",
          msg: "Проверьте, нет ли лишнего повтора в предложении про artist."
        }
      ],
      criteria: [
        { id: "rkz", label: "РКЗ · Решение коммуникативной задачи", max: 2 },
        { id: "org", label: "Организация текста", max: 2 },
        { id: "lang", label: "Языковое оформление", max: 2 }
      ],
      aiResponseSchema: {
        formalCompliance: {
          wordCountStatus: "below|target|above|critical",
          answeredPromptQuestions: 0,
          questionBackCount: 0,
          structureMissing: ["string"]
        },
        criteria: {
          RKZ: { score: 0, max: 2, comment: "..." },
          Organization: { score: 0, max: 2, comment: "..." },
          Language: { score: 0, max: 2, comment: "..." }
        },
        total: 0
      },
      sampleEssay:
        "Dear Shelly,\n\nThanks for your email. It was great to hear from you. I'm glad you enjoyed the Russian sweets!\n\nYes, I often see illustrations of famous pictures on everyday products in Russia, especially on chocolate boxes and tea packages. In my opinion, the most famous Russian artist is Ilya Repin. I would recommend visiting the Tretyakov Gallery in Moscow because it has a wonderful collection of Russian paintings.\n\nBy the way, what model of phone did you buy? What features do you like most? Was it expensive?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u5-camping",
      unitLabel: "Unit 5",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 5: essay-project on why people go camping. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on why people in Zetland enjoy camping. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "Why do you go camping?",
      promptTable: {
        headers: ["Motives", "Number of respondents (%)"],
        rows: [
          ["To have fun", "49"],
          ["To relax and escape stress", "20"],
          ["To connect with nature", "15"],
          ["To have a new experience", "10"],
          ["To follow modern trends", "6"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with organising a camping trip and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the popularity of camping with your friends."
      ],
      fieldNote:
        "Сюда ученик пишет essay-project по таблице. Пример ниже открывается отдельно и это поле не заполняет.",
      wordLimits: {
        targetMin: 200,
        targetMax: 250,
        hardMin: 180,
        hardMax: 275
      },
      structurePanelTitle: "План essay-project",
      structureChecklist: [
        "Opening statement about the project topic",
        "2-3 facts from the table",
        "1-2 comparisons with comment",
        "A problem connected with organising a camping trip",
        "A logical solution",
        "Your opinion on camping popularity with friends",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную с organising a camping trip",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о popularity of camping with your friends",
        "Я разделил(а) текст ровно на 5 абзацев",
        "Я проверил(а), что объём около `200-250` слов"
      ],
      detectLegend: [
        { role: "opening", label: "Opening" },
        { role: "answer", label: "Facts" },
        { role: "question", label: "Comparisons" },
        { role: "closing", label: "Problem" },
        { role: "solution", label: "Solution" },
        { role: "signoff", label: "Opinion" }
      ],
      reportOpeningKeywords: [
        "the table shows",
        "the survey shows",
        "the survey question",
        "the data show",
        "the table presents",
        "the project is about",
        "zetland",
        "camping",
        "enjoy camping"
      ],
      reportFactItems: [
        {
          label: "49% go camping to have fun",
          keywords: ["49", "to have fun", "have fun", "fun"]
        },
        {
          label: "20% go camping to relax and escape stress",
          keywords: ["20", "relax", "escape stress", "stress"]
        },
        {
          label: "15% go camping to connect with nature",
          keywords: ["15", "connect with nature", "nature"]
        },
        {
          label: "10% go camping to have a new experience",
          keywords: ["10", "new experience", "experience"]
        },
        {
          label: "6% go camping to follow modern trends",
          keywords: ["6", "modern trends", "trends"]
        }
      ],
      reportComparisonKeywords: [
        "more than",
        "less than",
        "while",
        "whereas",
        "compared with",
        "in comparison",
        "higher than",
        "lower than",
        "twice as",
        "almost twice",
        "slightly higher",
        "far more popular"
      ],
      reportProblemKeywords: [
        "problem",
        "issue",
        "rain",
        "weather",
        "equipment",
        "forgot",
        "lost",
        "injury",
        "unsafe",
        "organis",
        "organiz",
        "plan",
        "food",
        "tent"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "teenagers should",
        "it can be solved",
        "one way to solve it",
        "plan in advance",
        "check the weather",
        "pack",
        "prepare",
        "list"
      ],
      reportNeedSolution: true,
      reportOpinionKeywords: [
        "in my opinion",
        "i think",
        "i believe",
        "to my mind",
        "as for me",
        "personally",
        "to sum up",
        "in conclusion",
        "my friends",
        "popular"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The table shows the results of a survey about why people in Zetland enjoy camping.",
          "The project is about motives for going camping."
        ],
        facts: [
          "According to the table, 49% of respondents ...",
          "Another 20% go camping to ...",
          "Only 6% choose ..."
        ],
        compare: [
          "This figure is much higher than ...",
          "Compared with ..., this percentage is lower.",
          "Having fun is far more popular than following modern trends."
        ],
        problem: [
          "One problem that can arise when organising a camping trip is bad weather and poor planning.",
          "People may also forget important equipment or food."
        ],
        solution: [
          "This problem can be solved by checking the weather forecast and making a detailed packing list in advance.",
          "They should also share responsibilities within the group."
        ],
        opinion: [
          "In my opinion, camping is quite popular with my friends.",
          "I believe they enjoy it because it gives them a chance to relax and spend time together outdoors."
        ]
      },
      helpCards: [
        {
          id: "structure",
          label: "План",
          title: "Что должно быть в essay-project",
          lines: [
            "1. Opening statement about the project topic.",
            "2. 2-3 facts from the table with percentages.",
            "3. 1-2 comparisons plus your short comment.",
            "4. A problem connected with organising camping + a solution.",
            "5. Your opinion on camping popularity with friends.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 49%, 20% и 15% / 10%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте мотивы: 49% is much higher than 20%.",
            "Можно сравнить having fun с following trends (6%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему организации: weather, equipment, planning, food.",
            "Предложите solution: checklist, forecast, share tasks.",
            "Без solution можно потерять балл по K1."
          ]
        },
        {
          id: "criteria",
          label: "Критерии ЕГЭ",
          title: "Как оценивается Task 38",
          lines: [
            "Максимум за Task 38 - 14 первичных баллов.",
            "K1 - решение коммуникативной задачи.",
            "K2 - организация текста.",
            "K3 - лексика.",
            "K4 - грамматика.",
            "K5 - орфография и пунктуация."
          ]
        }
      ],
      topicWords: [
        "camping",
        "fun",
        "relax",
        "stress",
        "nature",
        "experience",
        "trends",
        "survey",
        "table",
        "friends"
      ],
      commonMistakes: [
        {
          pattern: "\\bi think that in my opinion\\b",
          flags: "i",
          msg: "Не дублируйте opinion markers: достаточно одного `In my opinion`."
        },
        {
          pattern: "\\baccording to me\\b",
          flags: "i",
          msg: "Лучше `In my opinion`, а не `According to me`."
        },
        {
          pattern: "\\bthe table say\\b",
          flags: "i",
          msg: "Нужно `the table shows` / `the data show`."
        }
      ],
      criteria: [
        { id: "k1", label: "K1 · Решение коммуникативной задачи", max: 3 },
        { id: "k2", label: "K2 · Организация текста", max: 3 },
        { id: "k3", label: "K3 · Лексика", max: 3 },
        { id: "k4", label: "K4 · Грамматика", max: 3 },
        { id: "k5", label: "K5 · Орфография и пунктуация", max: 2 }
      ],
      aiResponseSchema: {
        formalCompliance: {
          wordCountStatus: "below|target|above|critical",
          factsUsed: 0,
          comparisons: 0,
          problemPresent: true,
          solutionPresent: true,
          opinionPresent: true
        },
        criteria: {
          K1: { score: 0, max: 3, comment: "..." },
          K2: { score: 0, max: 3, comment: "..." },
          K3: { score: 0, max: 3, comment: "..." },
          K4: { score: 0, max: 3, comment: "..." },
          K5: { score: 0, max: 2, comment: "..." }
        },
        total: 0
      },
      sampleEssay:
        "The table shows the results of a survey about why people in Zetland enjoy camping. The project is important because outdoor holidays are becoming more popular among teenagers and their families.\n\nAccording to the table, 49% of respondents go camping to have fun, which makes this the most common motive. Another 20% choose camping to relax and escape stress, while 15% want to connect with nature. By contrast, only 10% go camping to have a new experience and just 6% follow modern trends.\n\nIt is clear that having fun is much more popular than following trends. The figure for relaxing and escaping stress is also noticeably higher than the percentage for having a new experience.\n\nOne problem that can arise with organising a camping trip is bad weather and poor planning. People may forget a tent, food or warm clothes and feel uncomfortable outdoors. This problem can be solved by checking the weather forecast in advance and making a detailed packing list for the whole group.\n\nIn my opinion, camping is quite popular with my friends. I believe they enjoy it because it gives them a chance to relax, laugh together and spend time away from school stress."
    },
    {
      id: "ege-project-task38-u5-extracurricular",
      unitLabel: "Unit 5",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 5: essay-project on extracurricular activities. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on the most popular extracurricular activities with teenagers in Zetland. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What extracurricular activity do you enjoy most of all?",
      promptChart: [
        ["Sports", "45"],
        ["Music and singing", "21"],
        ["Handicrafts", "17"],
        ["Dancing", "12"],
        ["Chess", "5"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with choosing extracurricular activities and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the role of extracurricular activities in the lives of teenagers."
      ],
      fieldNote:
        "Сюда ученик пишет essay-project по диаграмме. Пример ниже открывается отдельно и это поле не заполняет.",
      wordLimits: {
        targetMin: 200,
        targetMax: 250,
        hardMin: 180,
        hardMax: 275
      },
      structurePanelTitle: "План essay-project",
      structureChecklist: [
        "Opening statement about the project topic",
        "2-3 facts from the chart",
        "1-2 comparisons with comment",
        "A problem connected with choosing extracurricular activities",
        "A practical solution",
        "Your opinion on the role of extracurricular activities",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with choosing extracurricular activities",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о role of extracurricular activities",
        "Я разделил(а) текст ровно на 5 абзацев",
        "Я проверил(а), что объём около `200-250` слов"
      ],
      detectLegend: [
        { role: "opening", label: "Opening" },
        { role: "answer", label: "Facts" },
        { role: "question", label: "Comparisons" },
        { role: "closing", label: "Problem" },
        { role: "solution", label: "Solution" },
        { role: "signoff", label: "Opinion" }
      ],
      reportNeedSolution: true,
      reportOpeningKeywords: [
        "the pie chart shows",
        "the chart shows",
        "the survey shows",
        "the project is about",
        "extracurricular",
        "zetland teenagers",
        "activities"
      ],
      reportFactItems: [
        {
          label: "45% enjoy sports most",
          keywords: ["45", "sports", "sport"]
        },
        {
          label: "21% enjoy music and singing",
          keywords: ["21", "music", "singing"]
        },
        {
          label: "17% enjoy handicrafts",
          keywords: ["17", "handicrafts", "crafts"]
        },
        {
          label: "12% enjoy dancing",
          keywords: ["12", "dancing", "dance"]
        },
        {
          label: "5% enjoy chess",
          keywords: ["5", "chess"]
        }
      ],
      reportComparisonKeywords: [
        "more than",
        "less than",
        "while",
        "whereas",
        "compared with",
        "in comparison",
        "higher than",
        "lower than",
        "twice as",
        "almost twice",
        "slightly higher",
        "far more popular"
      ],
      reportProblemKeywords: [
        "problem",
        "issue",
        "too many",
        "pressure",
        "stress",
        "no time",
        "tired",
        "choose",
        "confus",
        "expensive",
        "conflict",
        "schedule"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "teenagers should",
        "students should",
        "it can be solved",
        "one way to solve it",
        "choose carefully",
        "balance",
        "try",
        "advice",
        "counsellor"
      ],
      reportOpinionKeywords: [
        "in my opinion",
        "i think",
        "i believe",
        "to my mind",
        "as for me",
        "personally",
        "to sum up",
        "in conclusion",
        "extracurricular",
        "role"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about the most popular extracurricular activities among Zetland teenagers.",
          "The project is about how teenagers spend their free time after school."
        ],
        facts: [
          "According to the chart, 45% of respondents ...",
          "Another 21% enjoy ...",
          "Only 5% choose ..."
        ],
        compare: [
          "This figure is more than twice as high as ...",
          "Compared with ..., this percentage is much lower.",
          "Sports is far more popular than chess."
        ],
        problem: [
          "One problem that can arise with choosing extracurricular activities is too much pressure and lack of free time.",
          "Teenagers may also find it hard to decide what they really enjoy."
        ],
        solution: [
          "This problem can be solved by trying different clubs for a short time and choosing only one or two activities.",
          "They should also talk to teachers or parents for advice."
        ],
        opinion: [
          "In my opinion, extracurricular activities play a very important role in teenagers' lives.",
          "I believe they help students develop talents, make friends and feel more confident."
        ]
      },
      helpCards: [
        {
          id: "structure",
          label: "План",
          title: "Что должно быть в essay-project",
          lines: [
            "1. Opening statement about the project topic.",
            "2. 2-3 facts from the chart with percentages.",
            "3. 1-2 comparisons plus your short comment.",
            "4. A problem connected with choosing activities + a solution.",
            "5. Your opinion on the role of extracurricular activities.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 45%, 21% и 17% / 12%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему выбора: pressure, no time, too many clubs, stress.",
            "Предложите solution: try clubs, choose 1-2, ask for advice, balance study and hobbies.",
            "Без solution можно потерять балл по K1."
          ]
        },
        {
          id: "criteria",
          label: "Критерии ЕГЭ",
          title: "Как оценивается Task 38",
          lines: [
            "Максимум за Task 38 - 14 первичных баллов.",
            "K1 - решение коммуникативной задачи.",
            "K2 - организация текста.",
            "K3 - лексика.",
            "K4 - грамматика.",
            "K5 - орфография и пунктуация."
          ]
        }
      ],
      topicWords: [
        "extracurricular",
        "activities",
        "sports",
        "music",
        "singing",
        "handicrafts",
        "dancing",
        "chess",
        "teenagers",
        "survey"
      ],
      commonMistakes: [
        {
          pattern: "\\baccording to me\\b",
          flags: "i",
          msg: "Лучше `In my opinion`, а не `According to me`."
        },
        {
          pattern: "\\bthe chart say\\b",
          flags: "i",
          msg: "Нужно `the chart shows`."
        },
        {
          pattern: "\\bteenagers likes\\b",
          flags: "i",
          msg: "С `teenagers` нужен глагол без `-s`: `teenagers like`."
        }
      ],
      criteria: [
        { id: "k1", label: "K1 · Решение коммуникативной задачи", max: 3 },
        { id: "k2", label: "K2 · Организация текста", max: 3 },
        { id: "k3", label: "K3 · Лексика", max: 3 },
        { id: "k4", label: "K4 · Грамматика", max: 3 },
        { id: "k5", label: "K5 · Орфография и пунктуация", max: 2 }
      ],
      aiResponseSchema: {
        formalCompliance: {
          wordCountStatus: "below|target|above|critical",
          factsUsed: 0,
          comparisons: 0,
          problemPresent: true,
          solutionPresent: true,
          opinionPresent: true
        },
        criteria: {
          K1: { score: 0, max: 3, comment: "..." },
          K2: { score: 0, max: 3, comment: "..." },
          K3: { score: 0, max: 3, comment: "..." },
          K4: { score: 0, max: 3, comment: "..." },
          K5: { score: 0, max: 2, comment: "..." }
        },
        total: 0
      },
      sampleEssay:
        "The pie chart shows the results of a survey about the most popular extracurricular activities among teenagers in Zetland. The project is important because after-school activities can influence teenagers' health, skills and social life.\n\nAccording to the chart, 45% of respondents enjoy sports most of all, which makes it the most popular activity. Another 21% choose music and singing, while 17% prefer handicrafts. By contrast, only 12% enjoy dancing and just 5% choose chess.\n\nIt is clear that sports is far more popular than chess. The figure for music and singing is also noticeably higher than the percentage for dancing.\n\nOne problem that can arise with choosing extracurricular activities is too much pressure and lack of free time. Teenagers may join too many clubs and feel tired before their homework. This problem can be solved by trying different activities for a short time and choosing only one or two that they really enjoy.\n\nIn my opinion, extracurricular activities play a very important role in teenagers' lives. I believe they help students develop talents, make friends and become more confident outside the classroom."
    }
  );
})(typeof window !== "undefined" ? window : this);
