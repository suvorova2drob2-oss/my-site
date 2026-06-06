(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u17",
      unitLabel: "Unit 17",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 17: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Tom:",
      promptMeta: {
        from: "Tom@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "Theatre"
      },
      promptRu:
        "...Yesterday I saw a street theatre performance. When was the last time you went to the theatre? Do you have a theatre in your town or a theatre club in your school? Do you think theatre-going is popular in Russia? Why, or why not?\nNext month I am going to join the local basketball club...",
      instructions: [
        "Write an email to Tom.",
        "In your message: answer his questions;",
        "ask 3 questions about the basketball club.",
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
        "Ответ: last time you went to the theatre",
        "Ответ: theatre in town / theatre club in school",
        "Ответ: theatre-going popular in Russia + why / why not",
        "3 вопроса к Tom про basketball club",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Tom,`",
        "Я ответил(а) на вопросы Tom про theatre",
        "Я задал(а) 3 вопроса back про basketball club",
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
          label: "When was the last time you went to the theatre?",
          keywords: [
            "last time",
            "went to the theatre",
            "theatre",
            "last month",
            "last year",
            "recently",
            "never",
            "ago"
          ]
        },
        {
          id: "q2",
          label:
            "Do you have a theatre in your town or a theatre club in your school?",
          keywords: [
            "theatre in my town",
            "theatre club",
            "in my school",
            "in our town",
            "yes",
            "no",
            "we have",
            "there is"
          ]
        },
        {
          id: "q3",
          label:
            "Do you think theatre-going is popular in Russia? Why, or why not?",
          keywords: [
            "theatre-going",
            "popular in russia",
            "why",
            "because",
            "yes",
            "no",
            "quite popular",
            "not very popular"
          ]
        }
      ],
      questionBackHint: "the basketball club",
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
        "Has",
        "Will"
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
          "The last time I went to the theatre was last month.",
          "We have a theatre in our town and a theatre club at school.",
          "I think theatre-going is quite popular in Russia because many people enjoy live performances."
        ],
        questions: [
          "Why did you decide to join the basketball club?",
          "How often will you train?",
          "Do you need any special equipment?"
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
            "3. Ответы на 3 вопроса Tom про theatre.",
            "4. 3 вопроса о basketball club.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Tom",
          title: "Что нужно раскрыть",
          lines: [
            "Скажите, when was the last time you went to the theatre.",
            "Ответьте, есть ли theatre in your town или theatre club in school.",
            "Выскажите мнение: popular ли theatre-going in Russia + why / why not.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Tom",
          lines: [
            "Нужно задать ровно 3 вопроса про basketball club.",
            "Примеры: Why did you join? When do you start? Is it far from your home?",
            "Вопросы должны быть именно про basketball club, не про theatre."
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
        "theatre",
        "performance",
        "russia",
        "basketball",
        "club",
        "tom",
        "town",
        "school",
        "popular"
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
          pattern: "\\bgo to theatre\\b",
          flags: "i",
          msg: "Нужно `go to the theatre`."
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
        "Dear Tom,\n\nThanks for your email. It was great to hear from you. I'm glad you enjoyed the street theatre performance!\n\nThe last time I went to the theatre was last month with my class. We have a theatre in our town and a theatre club at school. I think theatre-going is quite popular in Russia because many people enjoy live performances and classic plays.\n\nBy the way, why did you decide to join the basketball club? How often will you train? Do you need any special equipment?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u17-job-prerequisites",
      unitLabel: "Unit 17",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 17: essay-project on prerequisites for a good job. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on what is most important to get a good job in Zetland. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion:
        "What is most important to get a good job in Zetland?",
      promptTable: {
        headers: ["Prerequisites", "Number of applicants (%)"],
        rows: [
          ["Objective self-assessment", "34"],
          ["A carefully written CV", "26"],
          ["An active and ambitious nature", "21"],
          ["Communication skills", "14"],
          ["An optimistic attitude", "5"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with applying for a job and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on what is most important to get a good job."
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
        "A problem connected with applying for a job",
        "A logical solution",
        "Your opinion on what is most important to get a good job",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with applying for a job",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о what is most important to get a good job",
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
        "good job",
        "job",
        "applicants"
      ],
      reportFactItems: [
        {
          label: "34% consider objective self-assessment most important",
          keywords: ["34", "objective self-assessment", "self-assessment", "self assessment"]
        },
        {
          label: "26% consider a carefully written CV most important",
          keywords: ["26", "carefully written cv", "cv", "resume"]
        },
        {
          label: "21% consider an active and ambitious nature most important",
          keywords: ["21", "active and ambitious", "ambitious", "active"]
        },
        {
          label: "14% consider communication skills most important",
          keywords: ["14", "communication skills", "communication"]
        },
        {
          label: "5% consider an optimistic attitude most important",
          keywords: ["5", "optimistic attitude", "optimistic"]
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
        "apply",
        "applying",
        "rejection",
        "reject",
        "experience",
        "competition",
        "nervous",
        "mistake",
        "interview",
        "cv"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "applicants should",
        "young people should",
        "it can be solved",
        "one way to solve it",
        "prepare",
        "practice",
        "advice",
        "training",
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
        "most important",
        "good job",
        "communication"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The table shows the results of a survey about what is most important to get a good job in Zetland.",
          "The project is about the qualities and skills that help people succeed in the job market."
        ],
        facts: [
          "According to the table, 34% of applicants ...",
          "Another 26% believe ...",
          "Only 5% choose ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "Objective self-assessment is more important than an optimistic attitude."
        ],
        problem: [
          "One problem that can arise with applying for a job is strong competition and lack of work experience.",
          "Young applicants may also feel nervous at interviews and make mistakes in their CV."
        ],
        solution: [
          "This problem can be solved by preparing for interviews in advance and improving communication skills through practice.",
          "They should also ask for advice from teachers or career counsellors."
        ],
        opinion: [
          "In my opinion, communication skills are the most important thing to get a good job.",
          "I believe a person must be able to express ideas clearly and work well with others."
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
            "4. A problem connected with applying for a job + a solution.",
            "5. Your opinion on what is most important to get a good job.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 34%, 26% и 21% / 14%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте prerequisites: 34% is higher than 26%.",
            "Можно сравнить self-assessment с optimistic attitude (5%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему applying for a job: competition, no experience, interview stress.",
            "Предложите solution: prepare CV, practice interviews, ask for advice.",
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
        "job",
        "cv",
        "skills",
        "communication",
        "self-assessment",
        "ambitious",
        "optimistic",
        "applicants",
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
        "The table shows the results of a survey about what is most important to get a good job in Zetland. The project is important because finding work is one of the main concerns for young people after school.\n\nAccording to the table, 34% of applicants consider objective self-assessment the most important prerequisite, which makes it the leading factor. Another 26% believe a carefully written CV is crucial, while 21% choose an active and ambitious nature. By contrast, only 14% mention communication skills and just 5% choose an optimistic attitude.\n\nIt is clear that objective self-assessment is slightly more important than a carefully written CV. The figure for an active and ambitious nature is also noticeably higher than the percentage for an optimistic attitude.\n\nOne problem that can arise with applying for a job is strong competition and lack of work experience. Young applicants may also feel nervous at interviews and make mistakes in their CV. This problem can be solved by preparing for interviews in advance and asking for advice from teachers or career counsellors.\n\nIn my opinion, communication skills are the most important thing to get a good job. I believe a person must be able to express ideas clearly and work well with others, even if self-assessment and a good CV also matter."
    },
    {
      id: "ege-project-task38-u17-dreams",
      unitLabel: "Unit 17",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 17: essay-project on teenagers' dreams. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on what modern teenagers in Zetland dream about. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What do you dream about?",
      promptChart: [
        ["Career", "34"],
        ["Education", "25"],
        ["Home", "16"],
        ["Family", "15"],
        ["Money", "10"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with realizing one's dreams and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the dreams of modern teenagers."
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
        "A problem connected with realizing one's dreams",
        "A practical solution",
        "Your opinion on the dreams of modern teenagers",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with realizing one's dreams",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о the dreams of modern teenagers",
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
        "dream",
        "dreams",
        "teenagers",
        "zetland"
      ],
      reportFactItems: [
        {
          label: "34% dream about career",
          keywords: ["34", "career", "job", "work"]
        },
        {
          label: "25% dream about education",
          keywords: ["25", "education", "study", "university"]
        },
        {
          label: "16% dream about home",
          keywords: ["16", "home", "house", "flat", "apartment"]
        },
        {
          label: "15% dream about family",
          keywords: ["15", "family", "parents", "children"]
        },
        {
          label: "10% dream about money",
          keywords: ["10", "money", "wealth", "rich"]
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
        "realize",
        "realising",
        "realizing",
        "fail",
        "give up",
        "no money",
        "pressure",
        "stress",
        "unrealistic",
        "discourag"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "teenagers should",
        "young people should",
        "it can be solved",
        "one way to solve it",
        "plan",
        "steps",
        "work hard",
        "goal",
        "support",
        "patient"
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
        "dreams",
        "modern teenagers",
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
          "The pie chart shows the results of a survey about what modern teenagers in Zetland dream about.",
          "The project is about teenagers' hopes and plans for the future."
        ],
        facts: [
          "According to the chart, 34% of respondents ...",
          "Another 25% dream about ...",
          "Only 10% choose ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "Career is more important to teenagers than money."
        ],
        problem: [
          "One problem that can arise with realizing one's dreams is lack of money and strong competition.",
          "Teenagers may also feel discouraged if progress is slower than they expected."
        ],
        solution: [
          "This problem can be solved by setting realistic goals and working towards them step by step.",
          "They should also ask for support from family and teachers when they face difficulties."
        ],
        opinion: [
          "In my opinion, the dreams of modern teenagers are quite practical and focused on the future.",
          "I believe most of them want a good career and education, which shows they are ready to work hard."
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
            "4. A problem connected with realizing dreams + a solution.",
            "5. Your opinion on the dreams of modern teenagers.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 34%, 25% и 16% / 15%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: no money, competition, unrealistic expectations, give up.",
            "Предложите solution: realistic goals, step by step, support from family/teachers.",
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
        "dreams",
        "career",
        "education",
        "home",
        "family",
        "money",
        "teenagers",
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
          pattern: "\\bdream of modern teenagers are\\b",
          flags: "i",
          msg: "Единственное число: `the dream is` / множественное: `dreams are`."
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
        "The pie chart shows the results of a survey about what modern teenagers in Zetland dream about. The project is important because teenagers' dreams often shape their choices at school and in life.\n\nAccording to the chart, 34% of respondents dream about career, which makes it the most common answer. Another 25% dream about education, while 16% hope for a good home. By contrast, only 15% dream about family and just 10% think about money.\n\nIt is clear that career is slightly more important to teenagers than education. The figure for home is also noticeably higher than the percentage for money.\n\nOne problem that can arise with realizing one's dreams is lack of money and strong competition. Teenagers may also feel discouraged if progress is slower than they expected. This problem can be solved by setting realistic goals and working towards them step by step.\n\nIn my opinion, the dreams of modern teenagers are quite practical and focused on the future. I believe most of them want a good career and education, which shows they are ready to work hard to achieve their goals."
    }
  );
})(typeof window !== "undefined" ? window : this);
