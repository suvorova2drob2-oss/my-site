(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u20",
      unitLabel: "Unit 20",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 20: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Tom:",
      promptMeta: {
        from: "Tom@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "School project"
      },
      promptRu:
        "...At school we are doing projects on the world capitals. If I choose Moscow, what places of interest should I write about? Are they popular with Muscovites or are they mainly visited by tourists? What is the most important event in Moscow history in your opinion?\nLast week I took my sister to the skating-rink...",
      instructions: [
        "Write an email to Tom.",
        "In your message: answer his questions;",
        "ask 3 questions about his sister.",
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
        "Обращение (Dear Tom, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: places of interest in Moscow for his project",
        "Ответ: popular with Muscovites or mainly tourists",
        "Ответ: most important event in Moscow history (your opinion)",
        "3 вопроса к Tom про his sister",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Tom,`",
        "Я ответил(а) на вопросы Tom про Moscow and his project",
        "Я задал(а) 3 вопроса back про his sister",
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
            "If I choose Moscow, what places of interest should I write about?",
          keywords: [
            "places of interest",
            "moscow",
            "red square",
            "kremlin",
            "bolshoi",
            "tretyakov",
            "write about",
            "project"
          ]
        },
        {
          id: "q2",
          label:
            "Are they popular with Muscovites or are they mainly visited by tourists?",
          keywords: [
            "popular with muscovites",
            "muscovites",
            "tourists",
            "mainly visited",
            "both",
            "locals",
            "local people"
          ]
        },
        {
          id: "q3",
          label:
            "What is the most important event in Moscow history in your opinion?",
          keywords: [
            "most important event",
            "moscow history",
            "in my opinion",
            "history",
            "1812",
            "olympics",
            "capital",
            "important"
          ]
        }
      ],
      questionBackHint: "his sister",
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
        greeting: ["dear tom"],
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
          "Dear Tom,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "If you choose Moscow, you should write about Red Square, the Kremlin and the Bolshoi Theatre.",
          "Some places are popular with both Muscovites and tourists, but Red Square is mainly visited by tourists.",
          "In my opinion, the most important event in Moscow history was when Moscow became the capital of Russia."
        ],
        questions: [
          "How old is your sister?",
          "Did she enjoy skating?",
          "Does she go to the skating-rink often?"
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
            "1. Dear Tom,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Tom про Moscow and his school project.",
            "4. 3 вопроса о his sister (skating-rink).",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Tom",
          title: "Что нужно раскрыть",
          lines: [
            "Назовите 2-3 places of interest in Moscow for his project.",
            "Скажите, popular with Muscovites или mainly tourists (можно both).",
            "Дайте своё мнение: most important event in Moscow history.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Tom",
          lines: [
            "Нужно задать ровно 3 вопроса про his sister.",
            "Примеры: How old is she? Did she enjoy skating? Does she skate often?",
            "Вопросы должны быть про sister, не про Moscow project."
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
        "moscow",
        "project",
        "places of interest",
        "muscovites",
        "tourists",
        "history",
        "sister",
        "skating",
        "tom"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear tom\\b(?!,)",
          flags: "i",
          msg: "После `Dear Tom` нужна запятая."
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
          pattern: "\\bpopular for muscovites\\b",
          flags: "i",
          msg: "Нужно `popular with Muscovites`, не `for`."
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
        "Dear Tom,\n\nThanks for your email. It was great to hear from you again. Your project on world capitals sounds interesting!\n\nIf you choose Moscow, you should write about Red Square, the Kremlin and the Bolshoi Theatre. Some places are popular with both Muscovites and tourists, but Red Square is mainly visited by tourists. In my opinion, the most important event in Moscow history was when Moscow became the capital of Russia.\n\nBy the way, how old is your sister? Did she enjoy skating at the rink? Does she go there often?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u20-university",
      unitLabel: "Unit 20",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 20: essay-project on university education expectations. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on what young people in Zetland mainly expect from university education. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion:
        "What do you mainly expect from university education?",
      promptTable: {
        headers: ["Expectations", "Number of young people (%)"],
        rows: [
          ["Learning about a future job", "54"],
          ["Trying what your future job is like", "18"],
          ["An interesting social life", "16"],
          ["Making useful connections", "7"],
          ["Improving communication skills", "5"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with studying at a university and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the importance of university education for young people."
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
        "A problem connected with studying at a university",
        "A logical solution",
        "Your opinion on the importance of university education for young people",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with studying at a university",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о importance of university education for young people",
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
        "university education",
        "university",
        "young people"
      ],
      reportFactItems: [
        {
          label: "54% expect to learn about a future job",
          keywords: [
            "54",
            "learning about a future job",
            "future job",
            "learn about"
          ]
        },
        {
          label: "18% expect to try what their future job is like",
          keywords: [
            "18",
            "trying what your future job is like",
            "try what",
            "future job"
          ]
        },
        {
          label: "16% expect an interesting social life",
          keywords: ["16", "interesting social life", "social life"]
        },
        {
          label: "7% expect to make useful connections",
          keywords: ["7", "making useful connections", "connections"]
        },
        {
          label: "5% expect to improve communication skills",
          keywords: [
            "5",
            "improving communication skills",
            "communication skills"
          ]
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
        "studying at a university",
        "university",
        "students",
        "stress",
        "debt",
        "money",
        "drop out",
        "dropout",
        "workload",
        "pressure"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "students should",
        "universities should",
        "people should",
        "it can be solved",
        "one way to solve it",
        "support",
        "counselling",
        "scholarships",
        "plan",
        "balance"
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
        "importance",
        "university education",
        "young people"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The table shows the results of a survey about what young people in Zetland mainly expect from university education.",
          "The project is about the role of higher education in young people's lives."
        ],
        facts: [
          "According to the table, 54% of young people ...",
          "Another 18% believe ...",
          "Only 5% choose ..."
        ],
        compare: [
          "This figure is much higher than ...",
          "Compared with ..., this percentage is lower.",
          "Learning about a future job is far more important than improving communication skills."
        ],
        problem: [
          "One problem that can arise with studying at a university is heavy workload and stress.",
          "Some students may also drop out if they cannot balance study and part-time work."
        ],
        solution: [
          "This problem can be solved by offering counselling and flexible schedules for students.",
          "Universities should also provide scholarships and career guidance from the first year."
        ],
        opinion: [
          "In my opinion, university education is very important for young people.",
          "I believe it helps them gain knowledge, skills and confidence for their future careers."
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
            "4. A problem connected with studying at a university + a solution.",
            "5. Your opinion on the importance of university education for young people.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 54%, 18% и 16% / 7%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте expectations: 54% is higher than 18%.",
            "Можно сравнить future job с communication skills (5%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему studying at university: stress, debt, dropout, workload.",
            "Предложите solution: counselling, scholarships, career guidance, balance.",
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
        "university",
        "education",
        "job",
        "social life",
        "connections",
        "skills",
        "young people",
        "survey",
        "zetland"
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
        "The table shows the results of a survey about what young people in Zetland mainly expect from university education. The project is important because higher education shapes young people's careers and personal development.\n\nAccording to the table, 54% of young people expect to learn about a future job, which makes it the most popular answer. Another 18% want to try what their future job is like, while 16% hope for an interesting social life. By contrast, only 7% mention making useful connections and just 5% choose improving communication skills.\n\nIt is clear that learning about a future job is much more important than improving communication skills. The figure for trying a future job is also noticeably higher than the percentage for making connections.\n\nOne problem that can arise with studying at a university is heavy workload and stress. Some students may also drop out if they cannot balance study and part-time work. This problem can be solved by offering counselling and flexible schedules for students.\n\nIn my opinion, university education is very important for young people. I believe it helps them gain knowledge, skills and confidence for their future careers."
    },
    {
      id: "ege-project-task38-u20-environment",
      unitLabel: "Unit 20",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 20: essay-project on helping the environment. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on what young people in Zetland do to help the environment. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What do you do to help the environment?",
      promptChart: [
        ["Turn off the lights", "27"],
        ["Use electronic books and documents", "25"],
        ["Save water by taking a shower", "19"],
        ["Reuse clothes, furniture, etc.", "15"],
        ["Recycle rubbish", "14"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise if people stop helping the environment and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on how you can help the environment."
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
        "A problem if people stop helping the environment",
        "A practical solution",
        "Your opinion on how you can help the environment",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, если people stop helping the environment",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о how you can help the environment",
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
        "help the environment",
        "environment",
        "zetland",
        "young people"
      ],
      reportFactItems: [
        {
          label: "27% turn off the lights to help the environment",
          keywords: ["27", "turn off the lights", "lights"]
        },
        {
          label: "25% use electronic books and documents",
          keywords: [
            "25",
            "electronic books",
            "electronic documents",
            "e-books"
          ]
        },
        {
          label: "19% save water by taking a shower",
          keywords: ["19", "save water", "shower", "taking a shower"]
        },
        {
          label: "15% reuse clothes, furniture, etc.",
          keywords: ["15", "reuse clothes", "reuse", "furniture"]
        },
        {
          label: "14% recycle rubbish",
          keywords: ["14", "recycle rubbish", "recycle", "rubbish"]
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
        "stop helping",
        "stop",
        "pollution",
        "climate",
        "waste",
        "energy",
        "environment",
        "damage",
        "harm"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "people should",
        "governments should",
        "young people should",
        "it can be solved",
        "one way to solve it",
        "education",
        "campaigns",
        "recycle",
        "reduce",
        "awareness"
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
        "help the environment",
        "i can help",
        "we can help",
        "myself"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about what young people in Zetland do to help the environment.",
          "The project is about everyday eco-friendly habits."
        ],
        facts: [
          "According to the chart, 27% of young people ...",
          "Another 25% use ...",
          "Only 14% choose ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "Turning off the lights is more popular than recycling rubbish."
        ],
        problem: [
          "One problem that can arise if people stop helping the environment is increased pollution and waste.",
          "Energy and water consumption may also rise, which harms nature."
        ],
        solution: [
          "This problem can be solved by running eco-education campaigns at schools and in the media.",
          "Governments should also make recycling easier and reward green habits."
        ],
        opinion: [
          "In my opinion, everyone can help the environment in simple ways.",
          "Personally, I try to turn off the lights, save water and recycle rubbish whenever I can."
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
            "4. A problem if people stop helping the environment + a solution.",
            "5. Your opinion on how you can help the environment.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 27%, 25% и 19% / 14%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему, если people stop helping: pollution, waste, climate damage.",
            "Предложите solution: education, campaigns, easier recycling.",
            "В заключении — how you personally can help the environment."
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
        "environment",
        "lights",
        "water",
        "recycle",
        "reuse",
        "electronic",
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
          pattern: "\\bhelp environment\\b",
          flags: "i",
          msg: "Нужен артикль: `help the environment`."
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
        "The pie chart shows the results of a survey about what young people in Zetland do to help the environment. The project is important because small everyday actions can protect nature and save resources.\n\nAccording to the chart, 27% of young people turn off the lights to help the environment, which makes it the most popular habit. Another 25% use electronic books and documents, while 19% save water by taking a shower. By contrast, only 15% reuse clothes and furniture and just 14% recycle rubbish.\n\nIt is clear that turning off the lights is slightly more popular than using electronic books. The figure for saving water is also noticeably higher than the percentage for recycling rubbish.\n\nOne problem that can arise if people stop helping the environment is increased pollution and waste. Energy and water consumption may also rise, which harms nature. This problem can be solved by running eco-education campaigns at schools and in the media.\n\nIn my opinion, everyone can help the environment in simple ways. Personally, I try to turn off the lights, save water and recycle rubbish whenever I can."
    }
  );
})(typeof window !== "undefined" ? window : this);
