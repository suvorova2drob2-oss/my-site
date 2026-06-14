(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u18",
      unitLabel: "Unit 18",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 18: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Mike:",
      promptMeta: {
        from: "Mike@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "Extracurricular activities"
      },
      promptRu:
        "...Next week I am participating in a local drama contest. Have you ever participated in theatre performances? What extracurricular events are organized for students at your school? Is it necessary for teenagers to take part in such activities after school? Why, or why not?\nI have just returned from an amazing camping trip...",
      instructions: [
        "Write an email to Mike.",
        "In your message: answer his questions;",
        "ask 3 questions about his camping trip.",
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
        "Обращение (Dear Mike, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: theatre performances participation",
        "Ответ: extracurricular events at your school",
        "Ответ: necessary to take part + why / why not",
        "3 вопроса к Mike про camping trip",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Mike,`",
        "Я ответил(а) на вопросы Mike про extracurricular activities",
        "Я задал(а) 3 вопроса back про camping trip",
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
          label: "Have you ever participated in theatre performances?",
          keywords: [
            "theatre performances",
            "participated",
            "ever participated",
            "yes",
            "once",
            "never",
            "school play",
            "drama",
            "performance"
          ]
        },
        {
          id: "q2",
          label:
            "What extracurricular events are organized for students at your school?",
          keywords: [
            "extracurricular events",
            "organized",
            "at my school",
            "at our school",
            "students",
            "contests",
            "clubs",
            "sports",
            "concerts"
          ]
        },
        {
          id: "q3",
          label:
            "Is it necessary for teenagers to take part in such activities after school? Why, or why not?",
          keywords: [
            "necessary",
            "teenagers",
            "take part",
            "after school",
            "such activities",
            "why",
            "because",
            "yes",
            "no",
            "important",
            "useful"
          ]
        }
      ],
      questionBackHint: "his camping trip",
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
        "Have",
        "Has"
      ],
      requiredBlocks: {
        greeting: ["dear mike"],
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
          "Dear Mike,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "Yes, I have participated in a school theatre performance once.",
          "At our school we have drama contests, sports clubs and music concerts.",
          "I think it is necessary for teenagers to take part in such activities because they develop talents and confidence."
        ],
        questions: [
          "Where did you go camping?",
          "Who went with you?",
          "What was the most exciting part of the trip?"
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
            "1. Dear Mike,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Mike про extracurricular activities.",
            "4. 3 вопроса о camping trip.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Mike",
          title: "Что нужно раскрыть",
          lines: [
            "Скажите, participated ли вы in theatre performances.",
            "Перечислите extracurricular events at your school.",
            "Выскажите мнение: necessary ли take part in such activities + why / why not.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Mike",
          lines: [
            "Нужно задать ровно 3 вопроса про camping trip.",
            "Примеры: Where did you go? How long were you there? Was the weather good?",
            "Вопросы должны быть именно про camping trip, не про drama contest."
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
        "extracurricular",
        "theatre",
        "drama",
        "school",
        "camping",
        "trip",
        "mike",
        "activities",
        "teenagers"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear mike\\b(?!,)",
          flags: "i",
          msg: "После `Dear Mike` нужна запятая."
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
          pattern: "\\bparticipate in theatre performance\\b",
          flags: "i",
          msg: "Обычно `theatre performances` во множественном числе."
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
        "Dear Mike,\n\nThanks for your email. It was great to hear from you. Good luck with the drama contest next week!\n\nYes, I have participated in a school theatre performance once. At our school we have drama contests, sports clubs and music concerts for students. I think it is necessary for teenagers to take part in such activities after school because they develop talents and confidence.\n\nBy the way, where did you go camping? Who went with you? What was the most exciting part of the trip?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u18-uniform",
      unitLabel: "Unit 18",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 18: essay-project on school uniforms. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on what teenagers in Zetland think about school uniforms. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What do you think about school uniform?",
      promptTable: {
        headers: ["Opinions", "Number of teenagers (%)"],
        rows: [
          ["Wearing it with pleasure", "34"],
          ["Wearing it because it is demanded", "27"],
          ["Not caring about school clothes", "15"],
          ["Considering it uncomfortable", "14"],
          ["Considering it old-fashioned", "10"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with wearing school uniforms and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the role of school uniforms for students."
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
        "A problem connected with wearing school uniforms",
        "A logical solution",
        "Your opinion on the role of school uniforms for students",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with wearing school uniforms",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о the role of school uniforms for students",
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
        "school uniform",
        "uniform",
        "teenagers"
      ],
      reportFactItems: [
        {
          label: "34% wear school uniform with pleasure",
          keywords: ["34", "with pleasure", "pleasure", "wear it with pleasure"]
        },
        {
          label: "27% wear it because it is demanded",
          keywords: ["27", "because it is demanded", "demanded", "required"]
        },
        {
          label: "15% do not care about school clothes",
          keywords: ["15", "not caring", "do not care", "don't care"]
        },
        {
          label: "14% consider school uniform uncomfortable",
          keywords: ["14", "uncomfortable", "considering it uncomfortable"]
        },
        {
          label: "10% consider school uniform old-fashioned",
          keywords: ["10", "old-fashioned", "old fashioned"]
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
        "uncomfortable",
        "expensive",
        "same",
        "express",
        "individual",
        "style",
        "bullying",
        "size",
        "quality"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "schools should",
        "students should",
        "it can be solved",
        "one way to solve it",
        "comfortable",
        "design",
        "choice",
        "accessories",
        "improve"
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
        "role",
        "school uniform",
        "uniforms",
        "students"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The table shows the results of a survey about what teenagers in Zetland think about school uniforms.",
          "The project is about students' attitudes to wearing the same clothes at school."
        ],
        facts: [
          "According to the table, 34% of teenagers ...",
          "Another 27% wear ...",
          "Only 10% consider ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is lower.",
          "Wearing uniform with pleasure is more common than considering it old-fashioned."
        ],
        problem: [
          "One problem that can arise with wearing school uniforms is that some students find them uncomfortable and old-fashioned.",
          "They may also feel they cannot express their individuality."
        ],
        solution: [
          "This problem can be solved by making uniforms more comfortable and allowing small accessories or seasonal options.",
          "Schools should also listen to students' opinions when choosing the design."
        ],
        opinion: [
          "In my opinion, school uniforms play a useful role for students.",
          "I believe they create equality and save time in the morning, even if not everyone likes them."
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
            "4. A problem connected with wearing uniforms + a solution.",
            "5. Your opinion on the role of school uniforms for students.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 34%, 27% и 15% / 14%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте мнения: 34% is higher than 27%.",
            "Можно сравнить with pleasure с old-fashioned (10%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: uncomfortable, no individuality, old-fashioned, cost.",
            "Предложите solution: better design, accessories, listen to students.",
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
        "school uniform",
        "uniform",
        "teenagers",
        "pleasure",
        "uncomfortable",
        "old-fashioned",
        "students",
        "survey",
        "table"
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
        "The table shows the results of a survey about what teenagers in Zetland think about school uniforms. The project is important because school clothes affect students' comfort and attitude to school life.\n\nAccording to the table, 34% of teenagers wear school uniform with pleasure, which makes this the most common opinion. Another 27% wear it because it is demanded, while 15% do not care about school clothes. By contrast, only 14% consider it uncomfortable and just 10% think it is old-fashioned.\n\nIt is clear that wearing uniform with pleasure is slightly more popular than wearing it only because it is demanded. The figure for not caring is also noticeably higher than the percentage for considering it old-fashioned.\n\nOne problem that can arise with wearing school uniforms is that some students find them uncomfortable and feel they cannot express their individuality. This problem can be solved by making uniforms more comfortable and allowing small accessories or seasonal options.\n\nIn my opinion, school uniforms play a useful role for students. I believe they create equality and save time in the morning, even if not everyone enjoys wearing them."
    },
    {
      id: "ege-project-task38-u18-online-shopping",
      unitLabel: "Unit 18",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 18: essay-project on online shopping. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on why online shopping is popular in Zetland. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "Why do you like online shopping?",
      promptChart: [
        ["Clear product images", "37"],
        ["Product reviews", "28"],
        ["Easy search", "19"],
        ["Free delivery", "11"],
        ["Payment options", "5"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with online shopping and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the role of online shopping in our lives."
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
        "A problem connected with online shopping",
        "A practical solution",
        "Your opinion on the role of online shopping in our lives",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with online shopping",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о the role of online shopping in our lives",
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
        "online shopping",
        "shopping online",
        "zetland"
      ],
      reportFactItems: [
        {
          label: "37% like clear product images",
          keywords: ["37", "clear product images", "product images", "images"]
        },
        {
          label: "28% like product reviews",
          keywords: ["28", "product reviews", "reviews"]
        },
        {
          label: "19% like easy search",
          keywords: ["19", "easy search", "search"]
        },
        {
          label: "11% like free delivery",
          keywords: ["11", "free delivery", "delivery"]
        },
        {
          label: "5% like payment options",
          keywords: ["5", "payment options", "payment"]
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
        "wrong size",
        "quality",
        "fake",
        "scam",
        "delivery",
        "delay",
        "return",
        "expensive",
        "trust"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "customers should",
        "people should",
        "it can be solved",
        "one way to solve it",
        "reliable",
        "reviews",
        "return policy",
        "check",
        "trusted"
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
        "online shopping",
        "role",
        "lives"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about why online shopping is popular in Zetland.",
          "The project is about what attracts people to buying goods on the Internet."
        ],
        facts: [
          "According to the chart, 37% of respondents ...",
          "Another 28% like ...",
          "Only 5% choose ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "Clear product images are more important than payment options."
        ],
        problem: [
          "One problem that can arise with online shopping is receiving goods of poor quality or the wrong size.",
          "Customers may also become victims of fake websites or scams."
        ],
        solution: [
          "This problem can be solved by buying from trusted shops and reading product reviews carefully.",
          "They should also check the return policy before paying."
        ],
        opinion: [
          "In my opinion, online shopping plays an important role in our lives.",
          "I believe it saves time and offers a wide choice, but customers must shop carefully."
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
            "4. A problem connected with online shopping + a solution.",
            "5. Your opinion on the role of online shopping in our lives.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 37%, 28% и 19% / 11%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: wrong size, poor quality, scams, delivery delays.",
            "Предложите solution: trusted shops, read reviews, return policy.",
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
        "online shopping",
        "images",
        "reviews",
        "search",
        "delivery",
        "payment",
        "internet",
        "survey",
        "chart",
        "zetland"
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
          pattern: "\\bonline shopping are\\b",
          flags: "i",
          msg: "Единственное число: `online shopping is`."
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
        "The pie chart shows the results of a survey about why online shopping is popular in Zetland. The project is important because more and more people prefer buying goods on the Internet instead of visiting shops.\n\nAccording to the chart, 37% of respondents like online shopping because of clear product images, which makes this the most popular reason. Another 28% value product reviews, while 19% enjoy easy search. By contrast, only 11% mention free delivery and just 5% choose payment options.\n\nIt is clear that clear product images are slightly more important than product reviews. The figure for easy search is also noticeably higher than the percentage for payment options.\n\nOne problem that can arise with online shopping is receiving goods of poor quality or the wrong size. Customers may also become victims of fake websites. This problem can be solved by buying from trusted shops and reading product reviews carefully before paying.\n\nIn my opinion, online shopping plays an important role in our lives. I believe it saves time and offers a wide choice, but customers must shop carefully and use reliable websites."
    }
  );
})(typeof window !== "undefined" ? window : this);
