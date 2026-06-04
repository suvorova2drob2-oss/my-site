(function (w) {
  w.__EGE_WRITING_DATA__ = {
    version: 2,
    track: "ege",
    homeHref: "ege.html",
    title: "EGE Writing",
    lead:
      "Первый writing-юнит: Task 37 — personal email. Подсчёт слов, проверка правил email и локальная оценка по реальным критериям ЕГЭ для задания 37.",
    task: {
      id: "ege-email-task37-v1",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Mark:",
      promptMeta: {
        from: "Mark@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "Excursion"
      },
      promptRu:
        "Yesterday I went on an excursion to the local history museum with my class. It was really interesting! Do you often go on excursions? Where would you like to go with your class, and why? How do you prefer spending your free time?\nI've just finished my school project on literature...",
      instructions: [
        "Write an email to Mark.",
        "Answer his 3 questions.",
        "Ask 3 questions about his school project.",
        "Write 100-140 words.",
        "Remember the rules of email writing."
      ],
      wordLimits: {
        targetMin: 100,
        targetMax: 140,
        hardMin: 90,
        hardMax: 154
      },
      structureChecklist: [
        "Обращение (Dear Mark, ...)",
        "Короткая thanks/opening phrase",
        "Ответ на вопрос про excursions",
        "Ответ на вопрос where to go with class and why",
        "Ответ на вопрос about free time",
        "3 вопроса к Mark про school project",
        "Завершающая фраза",
        "Подпись"
      ],
      promptQuestions: [
        {
          id: "q1",
          label: "Do you often go on excursions?",
          keywords: ["excursion", "excursions", "museum", "go with my class", "go on trips", "we go"]
        },
        {
          id: "q2",
          label: "Where would you like to go with your class, and why?",
          keywords: ["i would like to go", "i'd like to go", "with my class", "because", "would love to visit", "place"]
        },
        {
          id: "q3",
          label: "How do you prefer spending your free time?",
          keywords: ["free time", "spare time", "i prefer", "usually spend", "in my free time", "after school"]
        }
      ],
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
        greeting: ["dear mark"],
        thanks: ["thanks for your email", "thank you for your email", "thanks for writing", "it was great to hear from you"],
        closing: ["write back soon", "hope to hear from you soon", "best wishes", "all the best", "take care"],
        signoff: ["best wishes", "all the best", "yours", "take care"]
      },
      usefulPhrases: {
        opening: [
          "Dear Mark,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "As for me, ...",
          "I often go on excursions with my class.",
          "I would like to visit ... because ...",
          "In my free time, I usually ..."
        ],
        questions: [
          "What was your project about exactly?",
          "Why did you choose literature for your project?",
          "How long did it take you to finish it?"
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
            "1. Dear Mark,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Mark.",
            "4. 3 вопроса о его school project.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Mark",
          title: "Что нужно раскрыть",
          lines: [
            "Ответьте на экскурсии: ходите ли вы на них часто.",
            "Скажите, куда бы хотели пойти с классом и почему.",
            "Скажите, как обычно проводите свободное время.",
            "Не отвечайте одним словом: лучше 1–2 предложения на каждый вопрос."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Mark",
          lines: [
            "Нужно задать ровно 3 вопроса по school project on literature.",
            "Примеры: What was your project about? Why did you choose this topic? How long did it take you?",
            "Вопросы должны быть именно к project, не к museum trip."
          ]
        },
        {
          id: "phrases",
          label: "Useful phrases",
          title: "Полезные фразы для Task 37",
          lines: [
            "Thanks for your email.",
            "As for me, ...",
            "I would like to visit ... because ...",
            "In my free time, I usually ...",
            "Anyway, I have to go now.",
            "Write back soon."
          ]
        },
        {
          id: "criteria",
          label: "Критерии ЕГЭ",
          title: "Как реально набираются баллы",
          lines: [
            "Максимум за Task 37 — 6 первичных баллов.",
            "РКЗ — до 2 баллов: ответы на 3 вопроса + 3 questions back.",
            "Организация текста — до 2 баллов: формат email, логика, абзацы, обращение и подпись.",
            "Языковое оформление — до 2 баллов: лексика, грамматика, орфография и пунктуация."
          ]
        }
      ],
      topicWords: [
        "excursion",
        "museum",
        "class",
        "school",
        "free time",
        "project",
        "literature",
        "mark"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear mark\\b(?!,)",
          flags: "i",
          msg: "После `Dear Mark` нужна запятая."
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
          pattern: "\\bi am agree\\b",
          flags: "i",
          msg: "Пишут `I agree`, без `am`."
        },
        {
          pattern: "\\bfree times\\b",
          flags: "i",
          msg: "`Free time` обычно без множественного числа."
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
        total: 0,
        strengths: ["string"],
        majorIssues: ["string"],
        grammarIssues: ["string"],
        vocabularyIssues: ["string"],
        cohesionIssues: ["string"],
        targetedFixes: ["string"],
        sampleImprovements: ["string"]
      },
      sampleEssay:
        "Dear Mark,\n\nThanks for your email. It was great to hear from you. I am glad your excursion to the museum was interesting.\n\nAs for me, I do not go on excursions very often, but I enjoy them. I would like to go to a science museum with my class because I am interested in new technology. In my free time, I usually read books, watch films and go for a walk with my friends.\n\nBy the way, what was your school project about exactly? Why did you choose literature? How long did it take you to finish it?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    }
  };
})(typeof window !== "undefined" ? window : this);
