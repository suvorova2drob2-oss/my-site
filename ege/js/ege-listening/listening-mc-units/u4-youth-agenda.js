/**
 * ЕГЭ Listening MC · Unit 4 · The Youth Agenda · Dr. Amelia Moore.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u4-youth-agenda",
    unitOrder: 4,
    title: "Unit 4 · The Youth Agenda",
    examSection: "§3 · Multiple Choice",
    headerTitle: "Steven & Dr. Amelia Moore · youth communities",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/4/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%204%20(mp3cut.net)%20(2).mp3",
    instructionHtml:
      "Вы услышите <strong>интервью с учёным</strong>. В заданиях <strong>3–9</strong> выберите <strong>один</strong> из трёх вариантов ответа. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Главный навык:</strong> один верный смысл из трёх формулировок — часто это парафраз.</p>" +
      "<ul>" +
      "<li><strong>Ловушка №1:</strong> <em>8.40 FM</em> — частота, не время начала (вопрос 3 → 7.15 p.m.).</li>" +
      "<li><strong>Ловушка №2:</strong> <em>speaker at conferences</em> ≠ organises conferences (вопрос 4).</li>" +
      "<li><strong>Ловушка №3:</strong> identify <em>their</em> interests (teens) ≠ interests of teachers/parents (вопрос 9).</li>" +
      "</ul>",

    questions: [
      {
        examNum: 3,
        prompt: "What time does the radio show begin?",
        key: 2,
        choices: [
          { num: 1, text: "5 p.m." },
          { num: 2, text: "7.15 p.m." },
          { num: 3, text: "8.40 p.m." }
        ],
        explainRu:
          "We're here every Friday at <em>7.15 p.m.</em> — 8.40 FM это частота, не время.",
        distractorWrongRu: {
          1: "5 p.m. в записи не звучит.",
          3: "8.40 FM — частота радио, не время начала."
        }
      },
      {
        examNum: 4,
        prompt:
          "What do we learn about Dr. Amelia Moore at the beginning of the interview?",
        key: 1,
        choices: [
          { num: 1, text: "She teaches sociology." },
          { num: 2, text: "She organises conferences." },
          { num: 3, text: "She develops youth communities." }
        ],
        explainRu:
          "Famous sociologist, professor at the National University — преподаёт sociology; studies communities, не develops; speaker, не organiser.",
        distractorWrongRu: {
          2: "Frequent speaker — выступает, не organises.",
          3: "Studying youth communities ≠ develops them."
        }
      },
      {
        examNum: 5,
        prompt: "Why do teenagers need communities?",
        key: 3,
        choices: [
          { num: 1, text: "They help teens deal with critics." },
          { num: 2, text: "They allow teens to hide there at times." },
          { num: 3, text: "They provide assistance and compassion." }
        ],
        explainRu:
          "Support and understanding, sense of belonging — парафраз assistance and compassion.",
        distractorWrongRu: {
          1: "Critics в записи не упоминаются.",
          2: "Hide there — не сказано."
        }
      },
      {
        examNum: 6,
        prompt: "According to Dr. Moore, the use of social media…",
        key: 1,
        choices: [
          { num: 1, text: "creates a false sense of connection." },
          { num: 2, text: "does not help in developing social skills." },
          { num: 3, text: "offers real-life experience and interaction." }
        ],
        explainRu:
          "Illusion of a genuine connection — false sense of connection.",
        distractorWrongRu: {
          2: "Social skills развиваются в communities, не в social media напрямую — но формулировка вопроса про SM; ключ — illusion.",
          3: "Real-life interaction — у communities, не у social media."
        }
      },
      {
        examNum: 7,
        prompt:
          "What unites all community activities, according to Dr. Moore?",
        key: 3,
        choices: [
          { num: 1, text: "They are easy to join." },
          { num: 2, text: "They are team activities." },
          { num: 3, text: "They have a common goal." }
        ],
        explainRu:
          "Work together towards a common goal — sports, clubs, volunteering.",
        distractorWrongRu: {
          1: "Easy to join — не сказано.",
          2: "Team activities — близко, но ключ — common goal."
        }
      },
      {
        examNum: 8,
        prompt:
          "Dr. Moore compares volunteering with a two-way street, to show that it…",
        key: 2,
        choices: [
          { num: 1, text: "might turn into a passion." },
          { num: 2, text: "makes teens' lives better." },
          { num: 3, text: "encourages responsibility." }
        ],
        explainRu:
          "Helping others + improving their own lives — makes teens' lives better.",
        distractorWrongRu: {
          1: "Passion — про cause you care about, не про two-way street.",
          3: "Responsibility — не главная мысль сравнения."
        }
      },
      {
        examNum: 9,
        prompt:
          "Which is NOT mentioned as a way to motivate teens to join communities?",
        key: 3,
        choices: [
          { num: 1, text: "Encouraging teens to try out new things." },
          { num: 2, text: "Discussing the advantages of collaboration." },
          {
            num: 3,
            text: "Identifying interests of teachers and parents."
          }
        ],
        explainRu:
          "Identify <em>their</em> (teens') interests — не interests of teachers/parents.",
        distractorWrongRu: {
          1: "Go out of comfort zone / new experiences — упомянуто.",
          2: "Benefits of collaboration — упомянуто."
        }
      }
    ],

    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Good evening, everyone, and welcome back to \"The Youth Agenda\", your weekly show on Radio 5, broadcast at 8.40 FM. We're here every Friday at 7.15 p.m. to discuss the latest trends, challenges, and opportunities impacting today's youth. Tonight, we're thrilled to have Dr. Amelia Moore with us. Hello, Amelia!"
          },
          { speaker: "Dr. Amelia Moore", text: "Hello, Steven." },
          {
            speaker: "Presenter",
            text:
              "Dr. Moore is a famous sociologist who has dedicated her career to studying youth communities and collaboration. She's a professor at the National University, and a frequent speaker at international conferences on youth development. Amelia, it's a pleasure to have you here!"
          },
          { speaker: "Dr. Amelia Moore", text: "Steven, the pleasure is mine." }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Amelia, your research focuses on the importance of community for young people. Can you elaborate on why you believe communities are so crucial for this age group?"
          },
          {
            speaker: "Dr. Amelia Moore",
            text:
              "Absolutely. Young people are at a critical stage in their lives. They are doing their best to shape their identities, explore their interests, and develop their sense of belonging. A strong community provides them with a safe space to do all of this. It allows them to connect with like-minded peers who share their experiences and challenges. This sense of friendship creates a feeling of support and understanding, which is extremely useful during these years."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "That makes sense. In fact, many young people today feel isolated, either due to the fast pace of life, or the overuse of social media. How can communities help fight this feeling?"
          },
          {
            speaker: "Dr. Amelia Moore",
            text:
              "That's a fundamental question. Social media can generate the illusion of a genuine connection. Communities, on the other hand, offer real-life interactions. Participating in community activities allows young people to develop social skills, learn teamwork, and build trust with others. These connections help them feel less alone and more appreciated for who they are."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Can you give us some examples of activities that promote collaboration among young people?"
          },
          {
            speaker: "Dr. Amelia Moore",
            text:
              "Certainly! There are countless possibilities. It could be anything from volunteering at a local animal shelter, to organising a neighbourhood clean-up day. Participating in sports teams, debate clubs, or even starting a book club are all fantastic ways for young people to work together towards a common goal. Even online communities focused on shared interests can be a great starting point, as long as they eventually turn into real-world interactions."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Amelia, volunteering sounds a bit boring to me. Isn't it the same with teens?"
          },
          {
            speaker: "Dr. Amelia Moore",
            text:
              "The key is to find a cause that appeals to you — something you're truly passionate about. Even a few hours a week can make a difference. It's also important to remember that volunteering is a two-way street. While teenagers are helping others, they're also improving their own lives in countless ways."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "So, how can parents and educators encourage young people to get involved in communities?"
          },
          {
            speaker: "Dr. Amelia Moore",
            text:
              "Open communication is essential. Parents and educators can talk to young people about the importance of community and the benefits of collaboration. They can help them identify their interests and find activities or groups that match those interests. Encouraging teenagers to go out of their comfort zone and participate in new experiences can also be very helpful."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Amelia, this has been a fascinating discussion. Thank you for coming tonight!"
          },
          {
            speaker: "Dr. Amelia Moore",
            text: "Thank you for having me! It's been my pleasure."
          }
        ]
      }
    ],

    huntLabs: [
      {
        examNum: 3,
        key: 2,
        paragraphIndex: 0,
        keyLineRu: "Every Friday at 7.15 p.m.",
        explainRu: "8.40 FM — частота; начало — 7.15 p.m.",
        evidencePromptRu: "Найди время эфира и частоту.",
        segments: [
          { kind: "hit", sol: "e", text: "We're here every Friday at 7.15 p.m." },
          {
            kind: "hit",
            sol: "d",
            text: "broadcast at 8.40 FM",
            wrongOption: 3,
            distractExplainRu: "8.40 FM — frequency, не 8.40 p.m. (вар. 3)."
          }
        ]
      },
      {
        examNum: 4,
        key: 1,
        paragraphIndex: 0,
        keyLineRu: "famous sociologist · professor at the National University.",
        explainRu: "Teaches sociology as professor.",
        evidencePromptRu: "Найди профессию Dr. Moore в начале.",
        segments: [
          { kind: "hit", sol: "e", text: "a famous sociologist" },
          { kind: "hit", sol: "e", text: "She's a professor at the National University" },
          {
            kind: "hit",
            sol: "d",
            text: "frequent speaker at international conferences",
            wrongOption: 2,
            distractExplainRu: "Speaker ≠ organises conferences (вар. 2)."
          },
          {
            kind: "hit",
            sol: "d",
            text: "studying youth communities and collaboration",
            wrongOption: 3,
            distractExplainRu: "Studying ≠ develops communities (вар. 3)."
          }
        ]
      },
      {
        examNum: 5,
        key: 3,
        paragraphIndex: 1,
        keyLineRu: "support and understanding.",
        explainRu: "Assistance and compassion — парафраз.",
        evidencePromptRu: "Найди, зачем teens нужны communities.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "creates a feeling of support and understanding"
          },
          {
            kind: "hit",
            sol: "d",
            text: "develop their sense of belonging",
            wrongOption: 2,
            distractExplainRu: "Belonging ≠ hide there (вар. 2)."
          }
        ]
      },
      {
        examNum: 6,
        key: 1,
        paragraphIndex: 2,
        keyLineRu: "illusion of a genuine connection.",
        explainRu: "False sense of connection.",
        evidencePromptRu: "Найди, что Dr. Moore говорит о social media.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "Social media can generate the illusion of a genuine connection"
          },
          {
            kind: "hit",
            sol: "d",
            text: "offer real-life interactions",
            wrongOption: 3,
            distractExplainRu: "Real-life interaction — у communities, не SM (вар. 3)."
          }
        ]
      },
      {
        examNum: 7,
        key: 3,
        paragraphIndex: 3,
        keyLineRu: "work together towards a common goal.",
        explainRu: "Common goal unites activities.",
        evidencePromptRu: "Найди, что объединяет community activities.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "work together towards a common goal"
          },
          {
            kind: "hit",
            sol: "d",
            text: "Participating in sports teams, debate clubs",
            wrongOption: 2,
            distractExplainRu: "Team activities — частный случай; ключ — common goal (вар. 3)."
          }
        ]
      },
      {
        examNum: 8,
        key: 2,
        paragraphIndex: 4,
        keyLineRu: "two-way street · improving their own lives.",
        explainRu: "Makes teens' lives better.",
        evidencePromptRu: "Найди сравнение volunteering с two-way street.",
        segments: [
          { kind: "hit", sol: "e", text: "volunteering is a two-way street" },
          {
            kind: "hit",
            sol: "e",
            text: "they're also improving their own lives in countless ways"
          },
          {
            kind: "hit",
            sol: "d",
            text: "find a cause that appeals to you — something you're truly passionate about",
            wrongOption: 1,
            distractExplainRu: "Passion about cause — не смысл two-way street (вар. 1)."
          }
        ]
      },
      {
        examNum: 9,
        key: 3,
        paragraphIndex: 5,
        keyLineRu: "identify their interests — не teachers/parents.",
        explainRu: "NOT mentioned: interests of teachers and parents.",
        evidencePromptRu: "Найди, что parents/educators должны делать.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "the benefits of collaboration",
            wrongOption: 2,
            distractExplainRu: "Discussing advantages of collaboration — ЕСТЬ (вар. 2), не NOT."
          },
          {
            kind: "hit",
            sol: "e",
            text: "help them identify their interests",
            wrongOption: 3,
            distractExplainRu: "Their interests = teens' — не teachers/parents (вар. 3 = NOT mentioned)."
          },
          {
            kind: "hit",
            sol: "e",
            text: "go out of their comfort zone and participate in new experiences",
            wrongOption: 1,
            distractExplainRu: "Try new things — ЕСТЬ (вар. 1), не NOT."
          }
        ]
      }
    ],

    shadowSpeakers: [
      {
        id: "Presenter",
        label: "Presenter (Steven)",
        fullText:
          "Good evening, everyone, and welcome back to \"The Youth Agenda\", your weekly show on Radio 5, broadcast at 8.40 FM. We're here every Friday at 7.15 p.m. to discuss the latest trends, challenges, and opportunities impacting today's youth. Tonight, we're thrilled to have Dr. Amelia Moore with us. Hello, Amelia! Dr. Moore is a famous sociologist who has dedicated her career to studying youth communities and collaboration. She's a professor at the National University, and a frequent speaker at international conferences on youth development. Amelia, it's a pleasure to have you here! Amelia, your research focuses on the importance of community for young people. Can you elaborate on why you believe communities are so crucial for this age group? That makes sense. In fact, many young people today feel isolated, either due to the fast pace of life, or the overuse of social media. How can communities help fight this feeling? Can you give us some examples of activities that promote collaboration among young people? Amelia, volunteering sounds a bit boring to me. Isn't it the same with teens? So, how can parents and educators encourage young people to get involved in communities? Amelia, this has been a fascinating discussion. Thank you for coming tonight!",
        phrases: [
          { en: "feel isolated", ru: "чувствуют себя одинокими" },
          { en: "the fast pace of life", ru: "бешеный ритм жизни" },
          { en: "the overuse of social media", ru: "чрезмерное использование соцсетей" },
          { en: "trends, challenges, and opportunities", ru: "тренды, вызовы и возможности" },
          { en: "importance of community for young people", ru: "важность сообщества для молодёжи" },
          { en: "promote collaboration among young people", ru: "способствовать сотрудничеству молодёжи" },
          { en: "get involved in communities", ru: "включаться в жизнь сообщества" },
          { en: "parents and educators", ru: "родители и педагоги" },
          { en: "a fascinating discussion", ru: "увлекательная беседа" }
        ],
        chunks: [
          {
            text:
              "Good evening, everyone … Amelia, it's a pleasure to have you here!",
            showText: true
          },
          {
            text:
              "Amelia, your research focuses … crucial for this age group?",
            showText: true
          },
          {
            text:
              "That makes sense … fight this feeling?",
            showText: true
          },
          {
            text:
              "Can you give us some examples … among young people?",
            showText: true
          },
          {
            text:
              "Amelia, volunteering sounds … get involved in communities?",
            showText: true
          },
          { text: "Amelia, this has been a fascinating discussion. Thank you for coming tonight!", showText: true }
        ]
      },
      {
        id: "Dr. Amelia Moore",
        label: "Dr. Amelia Moore",
        fullText:
          "Hello, Steven. Steven, the pleasure is mine. Absolutely. Young people are at a critical stage in their lives. They are doing their best to shape their identities, explore their interests, and develop their sense of belonging. A strong community provides them with a safe space to do all of this. It allows them to connect with like-minded peers who share their experiences and challenges. This sense of friendship creates a feeling of support and understanding, which is extremely useful during these years. That's a fundamental question. Social media can generate the illusion of a genuine connection. Communities, on the other hand, offer real-life interactions. Participating in community activities allows young people to develop social skills, learn teamwork, and build trust with others. These connections help them feel less alone and more appreciated for who they are. Certainly! There are countless possibilities. It could be anything from volunteering at a local animal shelter, to organising a neighbourhood clean-up day. Participating in sports teams, debate clubs, or even starting a book club are all fantastic ways for young people to work together towards a common goal. Even online communities focused on shared interests can be a great starting point, as long as they eventually turn into real-world interactions. The key is to find a cause that appeals to you — something you're truly passionate about. Even a few hours a week can make a difference. It's also important to remember that volunteering is a two-way street. While teenagers are helping others, they're also improving their own lives in countless ways. Open communication is essential. Parents and educators can talk to young people about the importance of community and the benefits of collaboration. They can help them identify their interests and find activities or groups that match those interests. Encouraging teenagers to go out of their comfort zone and participate in new experiences can also be very helpful. Thank you for having me! It's been my pleasure.",
        phrases: [
          { en: "shape their identities", ru: "формировать свою идентичность" },
          { en: "develop their sense of belonging", ru: "развивать чувство принадлежности" },
          { en: "a safe space", ru: "безопасное пространство" },
          { en: "connect with like-minded peers", ru: "общаться с единомышленниками" },
          {
            en: "support and understanding",
            ru: "поддержка и понимание",
            tip: "5 · assistance and compassion"
          },
          {
            en: "the illusion of a genuine connection",
            ru: "иллюзия настоящей связи",
            tip: "6 · false sense"
          },
          { en: "real-life interactions", ru: "живое общение", tip: "6 · communities, not SM" },
          { en: "develop social skills", ru: "развивать навыки общения" },
          { en: "learn teamwork", ru: "учиться работать в команде" },
          { en: "build trust with others", ru: "строить доверие с другими" },
          {
            en: "work together towards a common goal",
            ru: "работать вместе ради общей цели",
            tip: "7 · ключ"
          },
          { en: "find a cause that appeals to you", ru: "найти дело, которое тебе близко" },
          { en: "volunteering is a two-way street", ru: "волонтёрство работает в обе стороны", tip: "8 · ключ" },
          {
            en: "improving their own lives in countless ways",
            ru: "улучшают свою жизнь самыми разными способами",
            tip: "8 · makes lives better"
          },
          { en: "Open communication is essential", ru: "открытое общение необходимо" },
          { en: "the benefits of collaboration", ru: "польза совместной работы", tip: "9 · mentioned · var 2" },
          {
            en: "go out of their comfort zone and participate in new experiences",
            ru: "выйти из зоны комфорта и попробовать новое",
            tip: "9 · mentioned · var 1"
          },
          {
            en: "help them identify their interests",
            ru: "помочь определить их интересы",
            tip: "9 · their = teens, not parents"
          }
        ],
        chunks: [
          {
            text:
              "Absolutely. Young people … extremely useful during these years.",
            showText: true
          },
          {
            text:
              "That's a fundamental question … appreciated for who they are.",
            showText: true
          },
          {
            text:
              "Certainly! There are countless possibilities … real-world interactions.",
            showText: true
          },
          {
            text:
              "The key is to find a cause … in countless ways.",
            showText: true
          },
          {
            text:
              "Open communication is essential … can also be very helpful.",
            showText: true
          },
          { text: "Thank you for having me! It's been my pleasure.", showText: true }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
