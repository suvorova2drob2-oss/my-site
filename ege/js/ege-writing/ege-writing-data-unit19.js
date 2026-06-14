(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u19",
      unitLabel: "Unit 19",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 19: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Jenny:",
      promptMeta: {
        from: "Jenny@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "School"
      },
      promptRu:
        "...Next week we're having a test in Chemistry and part of it is in the lab. What is the most difficult subject for you at school? What facilities are there in your school for science and other subjects? How do you get ready for your tests?\nMy sister passed her A-level exams last week...",
      instructions: [
        "Write an email to Jenny.",
        "In your message: answer her questions;",
        "ask 3 questions about her sister's A-level exams.",
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
        "Обращение (Dear Jenny, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: most difficult subject at school",
        "Ответ: school facilities for science and other subjects",
        "Ответ: how you get ready for tests",
        "3 вопроса к Jenny про sister's A-level exams",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Jenny,`",
        "Я ответил(а) на вопросы Jenny про school and tests",
        "Я задал(а) 3 вопроса back про sister's A-level exams",
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
          label: "What is the most difficult subject for you at school?",
          keywords: [
            "most difficult subject",
            "difficult subject",
            "at school",
            "maths",
            "mathematics",
            "physics",
            "chemistry",
            "hardest"
          ]
        },
        {
          id: "q2",
          label:
            "What facilities are there in your school for science and other subjects?",
          keywords: [
            "facilities",
            "in my school",
            "in our school",
            "science",
            "lab",
            "laboratory",
            "library",
            "computer room",
            "gym"
          ]
        },
        {
          id: "q3",
          label: "How do you get ready for your tests?",
          keywords: [
            "get ready",
            "prepare",
            "for my tests",
            "for tests",
            "revise",
            "study",
            "notes",
            "practice"
          ]
        }
      ],
      questionBackHint: "her sister's A-level exams",
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
        greeting: ["dear jenny"],
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
          "Dear Jenny,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "The most difficult subject for me at school is Physics.",
          "We have science labs, a computer room and a well-equipped library.",
          "I get ready for tests by revising my notes and doing practice exercises."
        ],
        questions: [
          "What subjects did your sister take at A-level?",
          "Did she get good grades?",
          "Is she going to university?"
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
            "1. Dear Jenny,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Jenny про school and tests.",
            "4. 3 вопроса о sister's A-level exams.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Jenny",
          title: "Что нужно раскрыть",
          lines: [
            "Назовите most difficult subject for you at school.",
            "Опишите facilities in your school for science and other subjects.",
            "Расскажите, how you get ready for your tests.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Jenny",
          lines: [
            "Нужно задать ровно 3 вопроса про sister's A-level exams.",
            "Примеры: What subjects did she take? How did she feel? What are her plans now?",
            "Вопросы должны быть именно про A-level exams, не про Chemistry test."
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
        "school",
        "chemistry",
        "subject",
        "facilities",
        "tests",
        "a-level",
        "sister",
        "jenny",
        "lab"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear jenny\\b(?!,)",
          flags: "i",
          msg: "После `Dear Jenny` нужна запятая."
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
          pattern: "\\bget ready to my tests\\b",
          flags: "i",
          msg: "Нужно `get ready for my tests`, не `to`."
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
        "Dear Jenny,\n\nThanks for your email. It was great to hear from you. Good luck with your Chemistry test in the lab next week!\n\nThe most difficult subject for me at school is Physics. We have science labs, a computer room and a well-equipped library for different subjects. I get ready for tests by revising my notes and doing practice exercises at home.\n\nBy the way, what subjects did your sister take at A-level? Did she get good grades? Is she going to university?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u19-extinction",
      unitLabel: "Unit 19",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 19: essay-project on animal extinction. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on what causes animal extinction in Zetland. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What causes animal extinction in Zetland?",
      promptTable: {
        headers: ["Causes", "Number of respondents (%)"],
        rows: [
          ["Natural habitat loss", "40"],
          ["Mining activities", "23"],
          ["Diseases", "15"],
          ["Pollution", "12"],
          ["Climate change", "10"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with protecting animals and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the importance of animal protection."
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
        "A problem connected with protecting animals",
        "A logical solution",
        "Your opinion on the importance of animal protection",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with protecting animals",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о importance of animal protection",
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
        "animal extinction",
        "extinction",
        "animals"
      ],
      reportFactItems: [
        {
          label: "40% say natural habitat loss causes extinction",
          keywords: ["40", "natural habitat loss", "habitat loss", "habitat"]
        },
        {
          label: "23% say mining activities cause extinction",
          keywords: ["23", "mining activities", "mining"]
        },
        {
          label: "15% say diseases cause extinction",
          keywords: ["15", "diseases", "disease"]
        },
        {
          label: "12% say pollution causes extinction",
          keywords: ["12", "pollution"]
        },
        {
          label: "10% say climate change causes extinction",
          keywords: ["10", "climate change", "climate"]
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
        "protect",
        "protecting",
        "poaching",
        "illegal",
        "funding",
        "money",
        "awareness",
        "habitat",
        "endangered"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "people should",
        "governments should",
        "it can be solved",
        "one way to solve it",
        "reserves",
        "laws",
        "education",
        "protect",
        "fund"
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
        "animal protection",
        "protect animals"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The table shows the results of a survey about what causes animal extinction in Zetland.",
          "The project is about threats to wildlife and the environment."
        ],
        facts: [
          "According to the table, 40% of respondents ...",
          "Another 23% believe ...",
          "Only 10% choose ..."
        ],
        compare: [
          "This figure is much higher than ...",
          "Compared with ..., this percentage is lower.",
          "Natural habitat loss is far more serious than climate change."
        ],
        problem: [
          "One problem that can arise with protecting animals is lack of funding and public awareness.",
          "People may also continue illegal hunting if laws are not enforced strictly."
        ],
        solution: [
          "This problem can be solved by creating nature reserves and educating people about endangered species.",
          "Governments should also enforce strict laws against poaching and habitat destruction."
        ],
        opinion: [
          "In my opinion, animal protection is very important.",
          "I believe we must save wildlife to keep nature balanced and healthy for future generations."
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
            "4. A problem connected with protecting animals + a solution.",
            "5. Your opinion on the importance of animal protection.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 40%, 23% и 15% / 12%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте причины: 40% is higher than 23%.",
            "Можно сравнить habitat loss с climate change (10%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему protecting animals: poaching, no funding, lack of awareness.",
            "Предложите solution: reserves, laws, education, enforcement.",
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
        "extinction",
        "animals",
        "habitat",
        "mining",
        "pollution",
        "climate",
        "diseases",
        "protection",
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
        "The table shows the results of a survey about what causes animal extinction in Zetland. The project is important because many species are disappearing and this affects the whole ecosystem.\n\nAccording to the table, 40% of respondents believe natural habitat loss is the main cause of extinction, which makes it the most serious threat. Another 23% mention mining activities, while 15% choose diseases. By contrast, only 12% name pollution and just 10% select climate change.\n\nIt is clear that natural habitat loss is much more dangerous than climate change. The figure for mining activities is also noticeably higher than the percentage for pollution.\n\nOne problem that can arise with protecting animals is lack of funding and public awareness. People may also continue illegal hunting if laws are not enforced strictly. This problem can be solved by creating nature reserves and educating people about endangered species.\n\nIn my opinion, animal protection is very important. I believe we must save wildlife to keep nature balanced and healthy for future generations."
    },
    {
      id: "ege-project-task38-u19-travel",
      unitLabel: "Unit 19",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 19: essay-project on challenging aspects of travelling. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on the most challenging aspect of travelling for people in Zetland. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What is the most challenging aspect of travelling for you?",
      promptChart: [
        ["Getting sick", "37"],
        ["Missing a flight", "26"],
        ["Running out of money", "23"],
        ["Language barrier", "10"],
        ["Booking a place to stay", "4"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise when people travel and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the importance of travelling for modern people."
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
        "A problem connected with travelling",
        "A practical solution",
        "Your opinion on the importance of travelling for modern people",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную when people travel",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о importance of travelling for modern people",
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
        "travelling",
        "traveling",
        "travel",
        "zetland",
        "challenging"
      ],
      reportFactItems: [
        {
          label: "37% find getting sick the most challenging",
          keywords: ["37", "getting sick", "sick", "illness"]
        },
        {
          label: "26% find missing a flight the most challenging",
          keywords: ["26", "missing a flight", "miss a flight", "flight"]
        },
        {
          label: "23% find running out of money the most challenging",
          keywords: ["23", "running out of money", "money", "out of money"]
        },
        {
          label: "10% find the language barrier the most challenging",
          keywords: ["10", "language barrier", "language"]
        },
        {
          label: "4% find booking a place to stay the most challenging",
          keywords: ["4", "booking a place to stay", "booking", "accommodation"]
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
        "travel",
        "travelling",
        "traveling",
        "lost",
        "delay",
        "accident",
        "theft",
        "stress",
        "emergency",
        "health"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "travellers should",
        "travelers should",
        "people should",
        "it can be solved",
        "one way to solve it",
        "insurance",
        "plan",
        "budget",
        "prepare",
        "arrive early"
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
        "importance",
        "travelling",
        "traveling",
        "modern people"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about the most challenging aspect of travelling for people in Zetland.",
          "The project is about difficulties people face when they go on trips."
        ],
        facts: [
          "According to the chart, 37% of respondents ...",
          "Another 26% find ...",
          "Only 4% choose ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "Getting sick is more challenging than booking accommodation."
        ],
        problem: [
          "One problem that can arise when people travel is unexpected illness or losing important documents.",
          "Travellers may also feel stressed if they do not plan their budget carefully."
        ],
        solution: [
          "This problem can be solved by buying travel insurance and making a detailed plan before the trip.",
          "They should also arrive at the airport early and keep copies of their documents."
        ],
        opinion: [
          "In my opinion, travelling is very important for modern people.",
          "I believe it helps us learn about other cultures, relax and become more independent."
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
            "4. A problem connected with travelling + a solution.",
            "5. Your opinion on the importance of travelling for modern people.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 37%, 26% и 23% / 10%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: illness, lost documents, delays, no money, stress.",
            "Предложите solution: insurance, plan, budget, arrive early.",
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
        "travelling",
        "travel",
        "sick",
        "flight",
        "money",
        "language",
        "booking",
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
          pattern: "\\btravelling are important\\b",
          flags: "i",
          msg: "Единственное число: `travelling is important`."
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
        "The pie chart shows the results of a survey about the most challenging aspect of travelling for people in Zetland. The project is important because travel is becoming more common and people need to be prepared for difficulties on the road.\n\nAccording to the chart, 37% of respondents find getting sick the most challenging aspect of travelling, which makes it the biggest worry. Another 26% mention missing a flight, while 23% fear running out of money. By contrast, only 10% choose the language barrier and just 4% find booking a place to stay difficult.\n\nIt is clear that getting sick is slightly more challenging than missing a flight. The figure for running out of money is also noticeably higher than the percentage for booking accommodation.\n\nOne problem that can arise when people travel is unexpected illness or losing important documents. Travellers may also feel stressed if they do not plan their budget carefully. This problem can be solved by buying travel insurance and making a detailed plan before the trip.\n\nIn my opinion, travelling is very important for modern people. I believe it helps us learn about other cultures, relax and become more independent, even if there are some challenges along the way."
    }
  );
})(typeof window !== "undefined" ? window : this);
