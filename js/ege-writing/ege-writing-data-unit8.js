(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u8",
      unitLabel: "Unit 8",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 8: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Sally:",
      promptMeta: {
        from: "Sally@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "Graduation"
      },
      promptRu:
        "...I am so glad that school is nearly over and my graduation is in a week. What kind of graduation ceremony do Russian teenagers have at their schools? Do you prefer to celebrate your graduation with your friends or family, and why? What are you planning to do after graduation?\nMy sister has published her first novel...",
      instructions: [
        "Write an email to Sally.",
        "In your message: answer her questions;",
        "ask 3 questions about the novel.",
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
        "Обращение (Dear Sally, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: graduation ceremony at Russian schools",
        "Ответ: friends or family + why",
        "Ответ: plans after graduation",
        "3 вопроса к Sally про the novel",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Sally,`",
        "Я ответил(а) на вопросы Sally про graduation",
        "Я задал(а) 3 вопроса back про the novel",
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
            "What kind of graduation ceremony do Russian teenagers have at their schools?",
          keywords: [
            "graduation ceremony",
            "russian teenagers",
            "at their schools",
            "at school",
            "assembly",
            "diploma",
            "certificates",
            "formal",
            "celebration"
          ]
        },
        {
          id: "q2",
          label:
            "Do you prefer to celebrate your graduation with your friends or family, and why?",
          keywords: [
            "prefer",
            "celebrate",
            "friends",
            "family",
            "why",
            "because",
            "with my friends",
            "with my family"
          ]
        },
        {
          id: "q3",
          label: "What are you planning to do after graduation?",
          keywords: [
            "planning to do",
            "after graduation",
            "university",
            "college",
            "work",
            "travel",
            "take a gap year",
            "study",
            "i am going to",
            "i will"
          ]
        }
      ],
      questionBackHint: "the novel",
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
        greeting: ["dear sally"],
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
          "Dear Sally,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "Russian teenagers usually have a graduation ceremony at school with speeches and certificates.",
          "I prefer to celebrate my graduation with my friends because we have studied together for many years.",
          "After graduation I am planning to enter university."
        ],
        questions: [
          "What is the title of the novel?",
          "What is it about?",
          "Where can I buy it?"
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
            "1. Dear Sally,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Sally про graduation.",
            "4. 3 вопроса о the novel (sister's first novel).",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Sally",
          title: "Что нужно раскрыть",
          lines: [
            "Опишите, какой graduation ceremony бывает у Russian teenagers at school.",
            "Скажите, с кем вы prefer to celebrate — friends or family — и объясните why.",
            "Расскажите, what you are planning to do after graduation.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Sally",
          lines: [
            "Нужно задать ровно 3 вопроса про the novel.",
            "Примеры: What is the title? What is it about? Is it popular?",
            "Вопросы должны быть именно про novel, не про graduation ceremony."
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
        "graduation",
        "ceremony",
        "school",
        "friends",
        "family",
        "novel",
        "sally",
        "university",
        "celebrate"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear sally\\b(?!,)",
          flags: "i",
          msg: "После `Dear Sally` нужна запятая."
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
          pattern: "\\bprefer celebrate\\b",
          flags: "i",
          msg: "После `prefer` нужен `to`: `prefer to celebrate`."
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
        "Dear Sally,\n\nThanks for your email. It was great to hear from you. I'm glad your graduation is so soon!\n\nRussian teenagers usually have a graduation ceremony at school with speeches, music and certificates. I prefer to celebrate my graduation with my friends because we have studied together for many years. After graduation I am planning to enter university and study economics.\n\nBy the way, what is the title of your sister's novel? What is it about? Where can I buy it?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u8-zoo",
      unitLabel: "Unit 8",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 8: essay-project on the most popular animals in Zetland zoo. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on the most popular animals in Zetland zoo. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What animals do children want to visit in the zoo?",
      promptTable: {
        headers: ["Zoo animals", "Number of respondents (%)"],
        rows: [
          ["Monkeys", "43"],
          ["Polar bears", "21"],
          ["Elephants", "19"],
          ["Giraffes", "10"],
          ["Penguins", "7"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with animals being held in captivity and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on having wild animals as pets."
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
        "A problem connected with animals in captivity",
        "A logical solution",
        "Your opinion on having wild animals as pets",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with animals being held in captivity",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о having wild animals as pets",
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
        "zoo",
        "animals"
      ],
      reportFactItems: [
        {
          label: "43% of children want to visit monkeys",
          keywords: ["43", "monkeys", "monkey"]
        },
        {
          label: "21% of children want to visit polar bears",
          keywords: ["21", "polar bears", "polar bear", "bears"]
        },
        {
          label: "19% of children want to visit elephants",
          keywords: ["19", "elephants", "elephant"]
        },
        {
          label: "10% of children want to visit giraffes",
          keywords: ["10", "giraffes", "giraffe"]
        },
        {
          label: "7% of children want to visit penguins",
          keywords: ["7", "penguins", "penguin"]
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
        "captivity",
        "cage",
        "enclosure",
        "stress",
        "space",
        "wild",
        "unhappy",
        "health",
        "bored",
        "natural habitat"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "zoos should",
        "it can be solved",
        "one way to solve it",
        "larger enclosures",
        "enrichment",
        "protect",
        "breeding",
        "conservation",
        "rescue"
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
        "wild animals",
        "pets",
        "pet"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The table shows the results of a survey about the most popular animals in Zetland zoo.",
          "The project is about which zoo animals children most want to visit."
        ],
        facts: [
          "According to the table, 43% of respondents ...",
          "Another 21% want to visit ...",
          "Only 7% choose ..."
        ],
        compare: [
          "This figure is much higher than ...",
          "Compared with ..., this percentage is lower.",
          "Monkeys are far more popular than penguins."
        ],
        problem: [
          "One problem that can arise with animals being held in captivity is stress and lack of space.",
          "Wild animals may become unhappy if their enclosures are too small."
        ],
        solution: [
          "This problem can be solved by creating larger natural enclosures and enrichment programmes.",
          "Zoos should also focus on conservation and rescue work rather than entertainment only."
        ],
        opinion: [
          "In my opinion, it is not a good idea to keep wild animals as pets.",
          "I believe they need special care and a natural environment that ordinary people cannot provide at home."
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
            "4. A problem connected with captivity + a solution.",
            "5. Your opinion on having wild animals as pets.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 43%, 21% и 19% / 10%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте животных: 43% is much higher than 21%.",
            "Можно сравнить monkeys с penguins (7%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему captivity: stress, small cages, unnatural life.",
            "Предложите solution: larger enclosures, enrichment, conservation.",
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
        "zoo",
        "animals",
        "monkeys",
        "polar bears",
        "elephants",
        "giraffes",
        "penguins",
        "captivity",
        "pets",
        "survey"
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
        "The table shows the results of a survey about the most popular animals in Zetland zoo. The project is important because zoos help children learn about wildlife and protect endangered species.\n\nAccording to the table, 43% of children want to visit monkeys, which makes them the most popular animals. Another 21% choose polar bears, while 19% prefer elephants. By contrast, only 10% want to see giraffes and just 7% choose penguins.\n\nIt is clear that monkeys are much more popular than penguins. The figure for polar bears is also noticeably higher than the percentage for giraffes.\n\nOne problem that can arise with animals being held in captivity is stress and lack of space. Wild animals may become unhappy if their enclosures are too small and do not resemble their natural habitat. This problem can be solved by creating larger natural enclosures and enrichment programmes that keep animals active and healthy.\n\nIn my opinion, it is not a good idea to keep wild animals as pets. I believe they need special care and a natural environment that ordinary people cannot provide at home."
    },
    {
      id: "ege-project-task38-u8-museums",
      unitLabel: "Unit 8",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 8: essay-project on museums popular with teenagers. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on museums that are most popular with teenagers in Zetland. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What themed museum do you like best of all?",
      promptChart: [
        ["National History Museum", "28"],
        ["House of Music", "22"],
        ["Computer Museum", "19"],
        ["Science Museum", "16"],
        ["National Art Gallery", "15"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with visiting a museum and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on whether it is important for teenagers to visit museums."
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
        "A problem connected with visiting a museum",
        "A practical solution",
        "Your opinion on whether teenagers should visit museums",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with visiting a museum",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о whether it is important for teenagers to visit museums",
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
        "museums",
        "zetland",
        "teenagers"
      ],
      reportFactItems: [
        {
          label: "28% like the National History Museum best",
          keywords: ["28", "national history museum", "history museum", "history"]
        },
        {
          label: "22% like the House of Music best",
          keywords: ["22", "house of music", "music"]
        },
        {
          label: "19% like the Computer Museum best",
          keywords: ["19", "computer museum", "computer"]
        },
        {
          label: "16% like the Science Museum best",
          keywords: ["16", "science museum", "science"]
        },
        {
          label: "15% like the National Art Gallery best",
          keywords: ["15", "national art gallery", "art gallery", "gallery"]
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
        "boring",
        "crowded",
        "expensive",
        "ticket",
        "tired",
        "long",
        "queue",
        "noisy",
        "guide",
        "information"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "teenagers should",
        "students should",
        "museums should",
        "it can be solved",
        "one way to solve it",
        "interactive",
        "audio guide",
        "plan",
        "free day",
        "book"
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
        "important",
        "museums",
        "teenagers"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about museums that are most popular with teenagers in Zetland.",
          "The project is about teenagers' favourite themed museums."
        ],
        facts: [
          "According to the chart, 28% of respondents ...",
          "Another 22% prefer ...",
          "Only 15% choose ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "The National History Museum is more popular than the National Art Gallery."
        ],
        problem: [
          "One problem that can arise with visiting a museum is that teenagers may find some exhibitions boring or too crowded.",
          "Long queues and expensive tickets can also spoil the visit."
        ],
        solution: [
          "This problem can be solved by offering interactive exhibitions and free admission days for students.",
          "Museums should also provide audio guides and clear information in simple language."
        ],
        opinion: [
          "In my opinion, it is very important for teenagers to visit museums.",
          "I believe museums help them learn about history, science and culture in an interesting way."
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
            "4. A problem connected with visiting a museum + a solution.",
            "5. Your opinion on whether teenagers should visit museums.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 28%, 22% и 19% / 16%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: boring exhibitions, crowds, expensive tickets, long queues.",
            "Предложите solution: interactive displays, free days, audio guides, plan the visit.",
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
        "museums",
        "history",
        "music",
        "computer",
        "science",
        "art",
        "gallery",
        "teenagers",
        "survey",
        "chart"
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
          pattern: "\\bmuseum are\\b",
          flags: "i",
          msg: "Единственное число: `a museum is`, множественное: `museums are`."
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
        "The pie chart shows the results of a survey about museums that are most popular with teenagers in Zetland. The project is important because museums help young people learn about history, science and culture outside the classroom.\n\nAccording to the chart, 28% of teenagers like the National History Museum best of all, which makes it the most popular choice. Another 22% prefer the House of Music, while 19% choose the Computer Museum. By contrast, only 16% enjoy the Science Museum and just 15% select the National Art Gallery.\n\nIt is clear that the National History Museum is slightly more popular than the House of Music. The figure for the Computer Museum is also noticeably higher than the percentage for the National Art Gallery.\n\nOne problem that can arise with visiting a museum is that teenagers may find some exhibitions boring or too crowded. Long queues and expensive tickets can also spoil the visit. This problem can be solved by offering interactive exhibitions and free admission days for students.\n\nIn my opinion, it is very important for teenagers to visit museums. I believe they help young people understand the past, discover new ideas and spend their free time in a useful way."
    }
  );
})(typeof window !== "undefined" ? window : this);
