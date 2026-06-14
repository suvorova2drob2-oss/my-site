/**
 * ЕГЭ Listening MC · Unit 12 · Virtual learning · Sally O'Connell.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u12-virtual-learning",
    unitOrder: 12,
    title: "Unit 12 · Virtual learning",
    examSection: "§3 · Multiple Choice",
    headerTitle: "Jim Fairfax & Sally O'Connell · virtual learning tips",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/12/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2012%20(mp3cut.net)%20(2).mp3",
    instructionHtml:
      "Вы услышите <strong>интервью</strong>. В заданиях <strong>3–9</strong> выберите <strong>один</strong> из трёх вариантов ответа. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Ловушки варианта 12:</strong></p><ul>" +
      "<li><strong>3:</strong> busy morning already happened; evening flight is later → programme is in the afternoon.</li>" +
      "<li><strong>4:</strong> virtual learning supplements in-class experience, not replaces it.</li>" +
      "<li><strong>5:</strong> Sally compares etiquette/rules in virtual and physical classrooms → similarities/differences.</li>" +
      "<li><strong>6:</strong> quiet environment matters, but option key is working surface: desk/table/countertop.</li>" +
      "<li><strong>7:</strong> family should be mindful of volume → keep quiet.</li>" +
      "<li><strong>8:</strong> after logging on, mute yourself → switch microphone off.</li>" +
      "<li><strong>9:</strong> nod/smile/react and notes are mentioned; browsing the Internet is not.</li>" +
      "</ul>",
    questions: [
      {
        examNum: 3,
        prompt: "What part of the day does the program run?",
        key: 2,
        choices: [
          { num: 1, text: "In the morning." },
          { num: 2, text: "In the afternoon." },
          { num: 3, text: "In the evening." }
        ],
        explainRu:
          "Presenter says Sally had a busy morning and has an evening flight back home, so the interview is between them — in the afternoon.",
        distractorWrongRu: {
          1: "Morning is already over.",
          3: "Evening flight is later."
        }
      },
      {
        examNum: 4,
        prompt: "What is true about virtual learning according to Sally?",
        key: 1,
        choices: [
          { num: 1, text: "It adds up to classroom experience." },
          { num: 2, text: "It is used to replace face-to-face education." },
          { num: 3, text: "It involves many paper tests and board games." }
        ],
        explainRu:
          "Sally says virtual learning supplements in-class experience, not replaces it.",
        distractorWrongRu: {
          2: "Virtual classroom may replicate/replace physical classroom, but virtual learning supplements the in-class experience.",
          3: "Online quizzes/polls are examples, not paper tests and board games."
        }
      },
      {
        examNum: 5,
        prompt: "What has Sally planned to talk about?",
        key: 3,
        choices: [
          { num: 1, text: "Her experience of virtual learning." },
          { num: 2, text: "How to behave in a physical classroom." },
          { num: 3, text: "Similarities between physical and virtual classrooms." }
        ],
        explainRu:
          "The presenter asks whether virtual etiquette rules are specific or similar to physical classroom rules; Sally says they are a little different and gives tips.",
        distractorWrongRu: {
          1: "She mentions her learning experience, but the planned talk is tips/etiquette.",
          2: "She compares with physical classroom, but talks about virtual learning."
        }
      },
      {
        examNum: 6,
        prompt: "What does Sally say is the most important thing about a study space?",
        key: 2,
        choices: [
          { num: 1, text: "It is set virtually." },
          { num: 2, text: "It's got a working surface." },
          { num: 3, text: "It's shared with your family." }
        ],
        explainRu:
          "She says choose a quiet spot and set your device at a desk, table, or countertop so your hands are free.",
        distractorWrongRu: {
          1: "Study space is physical.",
          3: "It should be away from family traffic."
        }
      },
      {
        examNum: 7,
        prompt: "Sally believes it is wise to let your family know your timetable, so that they...",
        key: 1,
        choices: [
          { num: 1, text: "keep quiet during the sessions." },
          { num: 2, text: "communicate with your teachers." },
          { num: 3, text: "bring you the books you may need." }
        ],
        explainRu:
          "Let your family know before class time so they can avoid distracting you and be mindful of their volume.",
        distractorWrongRu: {
          2: "Family does not communicate with teachers.",
          3: "Books/materials are your responsibility."
        }
      },
      {
        examNum: 8,
        prompt: "What does Sally recommend doing before you enter the virtual class?",
        key: 2,
        choices: [
          { num: 1, text: "To finish all the chores." },
          { num: 2, text: "To switch the microphone off." },
          { num: 3, text: "To check and amplify the speakers." }
        ],
        explainRu:
          "After you log on, make sure to mute yourself. Most audio/mute buttons look like a microphone.",
        distractorWrongRu: {
          1: "Chores are not mentioned.",
          3: "She says mute, not amplify."
        }
      },
      {
        examNum: 9,
        prompt: "What is NOT mentioned as a strategy to stay engaged?",
        key: 3,
        choices: [
          { num: 1, text: "Reacting physically to what's being said." },
          { num: 2, text: "Taking notes during the lecture." },
          { num: 3, text: "Browsing the Internet." }
        ],
        explainRu:
          "Sally mentions nodding, smiling, reacting, writing main points and ideas. Browsing the Internet is not mentioned.",
        distractorWrongRu: {
          1: "Nod, smile and react to what you're hearing is mentioned.",
          2: "Use pen and paper to jot down main points is mentioned."
        }
      }
    ],
    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Hello, everybody! My name is Jim Fairfax and here with me in the studio is Sally O'Connell. Hi, Sally!"
          },
          { speaker: "Sally O'Connell", text: "Hi, Jim!" },
          {
            speaker: "Presenter",
            text:
              "Sally, thank you for coming. I know you had a busy morning today and you have an evening flight back home, but it's only noon and we're ready to discuss virtual learning in our regular program 'Tips and Tricks'. So, what is virtual learning?"
          },
          {
            speaker: "Sally O'Connell",
            text:
              "Virtual learning is a learning experience that is organized through the use of computers and/or the Internet. Unlike a virtual classroom, which is meant to replicate and replace the physical classroom for distance learners, virtual learning supplements in-class experience with digital communication and interaction. For instance, online quizzes or polls. Today, teachers and students across the country are making the transition to distance and virtual learning."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Sally, for many students, this is the first experience using video chat and digital conferencing as a tool for learning. Are there specific rules of virtual learning etiquette, or are they similar to those we're used to following in a physical classroom?"
          },
          {
            speaker: "Sally O'Connell",
            text:
              "They are a little different from the ones we've used to. Actually, I've intended to share a few tips to help students adjust to their new setup, engage fully in virtual class time and troubleshoot any related challenges. They were instrumental for me, so, I hope, they'll come in handy for other learners as well."
          },
          { speaker: "Presenter", text: "We are all ears." },
          {
            speaker: "Sally O'Connell",
            text:
              "First, a quiet environment is the key when you're setting up space for virtual class time. Choose a spot where there will be minimal distractions, ideally away from the flow of family traffic. It's fabulous if you can set up your device at a desk, table or countertop so that your hands are free to take notes and flip through class materials."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "By the way, talking about class materials, are there any? Can't they just browse for them during the class?"
          },
          {
            speaker: "Sally O'Connell",
            text:
              "Absolutely not! Just like ordinary class time, it's better to have your materials ready when a virtual class or lecture begins. Gather any books, notes, printouts and binders that you may need to reference during the session. Make sure you have a pen and paper handy! And don't forget to let your family members know you're about to enter class time. This way, they can avoid distracting you and be mindful of their volume."
          },
          {
            speaker: "Presenter",
            text:
              "My kids have French classes with a teacher from France via Zoom. There are five other children in a group and it's ridiculous to hear them argue with parents about chores or shooing their pets away when the teacher is explaining the task."
          },
          {
            speaker: "Sally O'Connell",
            text:
              "That's exactly what I wanted to mention next. After you log on make sure to mute yourself! Background noises such as typing, chewing or barking and meowing pets may not sound like much on your side, but those noises can amplify across your teacher's and classmates' speakers. Most audio/mute buttons look like a little microphone. You'll know you're muted when you see an X or slash over the button. And, always double-check: are you really muted?"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Sally, don't you think it's too easy to get distracted when you're sitting alone in front of a device with no one around to check on you?"
          },
          {
            speaker: "Sally O'Connell",
            text:
              "It really is. You can stay focused if you use active listening techniques. For instance, to show that you're paying attention to the teacher, nod, smile and react to what you're hearing, just the way you would in the classroom. Use a pen and paper to jot down the main points and ideas of the lesson in bulleted notes. Challenge yourself to learn one new thing from a classmate, ask one question or share one piece of positive feedback. And, please, resist the urge to surf the net!"
          },
          {
            speaker: "Presenter",
            text:
              "What if something goes amiss? Screen froze? Bumped from the class? App crashed?"
          },
          {
            speaker: "Sally O'Connell",
            text:
              "Don't panic! Technical glitches are bound to happen. Calm down, troubleshoot, and try logging on again!"
          }
        ]
      }
    ],
    huntLabs: [
      {
        examNum: 3,
        key: 2,
        paragraphIndex: 0,
        keyLineRu: "Busy morning is over; evening flight is later; it is noon.",
        explainRu: "The programme runs in the afternoon.",
        evidencePromptRu: "Найди time markers.",
        segments: [
          { kind: "hit", sol: "e", text: "busy morning today" },
          { kind: "hit", sol: "e", text: "evening flight back home" },
          { kind: "hit", sol: "e", text: "it's only noon" }
        ]
      },
      {
        examNum: 4,
        key: 1,
        paragraphIndex: 0,
        keyLineRu: "Virtual learning supplements in-class experience.",
        explainRu: "It adds to classroom experience.",
        evidencePromptRu: "Найди supplements in-class experience.",
        segments: [
          { kind: "hit", sol: "e", text: "virtual learning supplements in-class experience" },
          { kind: "hit", sol: "d", text: "replicate and replace the physical classroom", wrongOption: 2, distractExplainRu: "This is said about virtual classroom, not virtual learning." }
        ]
      },
      {
        examNum: 5,
        key: 3,
        paragraphIndex: 1,
        keyLineRu: "Rules are a little different from physical classroom rules.",
        explainRu: "She talks about the relation between virtual and physical classroom etiquette.",
        evidencePromptRu: "Найди rules/etiquette comparison.",
        segments: [
          { kind: "hit", sol: "e", text: "Are there specific rules of virtual learning etiquette" },
          { kind: "hit", sol: "e", text: "They are a little different from the ones we've used to" }
        ]
      },
      {
        examNum: 6,
        key: 2,
        paragraphIndex: 1,
        keyLineRu: "Set up your device at a desk, table or countertop.",
        explainRu: "A study space needs a working surface.",
        evidencePromptRu: "Найди desk/table/countertop.",
        segments: [
          { kind: "hit", sol: "e", text: "desk, table or countertop" },
          { kind: "hit", sol: "e", text: "your hands are free to take notes" }
        ]
      },
      {
        examNum: 7,
        key: 1,
        paragraphIndex: 2,
        keyLineRu: "Family can avoid distracting you and be mindful of their volume.",
        explainRu: "They should keep quiet during sessions.",
        evidencePromptRu: "Найди family members / volume.",
        segments: [
          { kind: "hit", sol: "e", text: "let your family members know" },
          { kind: "hit", sol: "e", text: "be mindful of their volume" }
        ]
      },
      {
        examNum: 8,
        key: 2,
        paragraphIndex: 2,
        keyLineRu: "After you log on make sure to mute yourself.",
        explainRu: "Switch the microphone off.",
        evidencePromptRu: "Найди mute yourself.",
        segments: [
          { kind: "hit", sol: "e", text: "make sure to mute yourself" },
          { kind: "hit", sol: "e", text: "look like a little microphone" }
        ]
      },
      {
        examNum: 9,
        key: 3,
        paragraphIndex: 3,
        keyLineRu: "Active listening and notes are mentioned; browsing the Internet is not a strategy.",
        explainRu: "Surf the net is something to resist, not a strategy.",
        evidencePromptRu: "Найди engaged strategies and the trap.",
        segments: [
          { kind: "hit", sol: "e", text: "nod, smile and react to what you're hearing" },
          { kind: "hit", sol: "e", text: "jot down the main points and ideas" },
          { kind: "hit", sol: "d", text: "resist the urge to surf the net", wrongOption: 3, distractExplainRu: "Browsing is not recommended." }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Presenter",
        label: "Presenter (Jim Fairfax)",
        fullText:
          "Hello, everybody! My name is Jim Fairfax and here with me in the studio is Sally O'Connell. Hi, Sally! Sally, thank you for coming. I know you had a busy morning today and you have an evening flight back home, but it's only noon and we're ready to discuss virtual learning in our regular program 'Tips and Tricks'. So, what is virtual learning? Sally, for many students, this is the first experience using video chat and digital conferencing as a tool for learning. Are there specific rules of virtual learning etiquette, or are they similar to those we're used to following in a physical classroom? We are all ears. By the way, talking about class materials, are there any? Can't they just browse for them during the class? My kids have French classes with a teacher from France via Zoom. There are five other children in a group and it's ridiculous to hear them argue with parents about chores or shooing their pets away when the teacher is explaining the task. Sally, don't you think it's too easy to get distracted when you're sitting alone in front of a device with no one around to check on you? What if something goes amiss? Screen froze? Bumped from the class? App crashed?",
        phrases: [
          { en: "busy morning today", ru: "насыщенное утро сегодня", tip: "3" },
          { en: "evening flight back home", ru: "вечерний рейс домой", tip: "3" },
          { en: "it's only noon", ru: "сейчас только полдень", tip: "3" },
          { en: "virtual learning", ru: "виртуальное обучение" },
          { en: "video chat and digital conferencing", ru: "видеочат и цифровые конференции" },
          { en: "tool for learning", ru: "инструмент обучения" },
          { en: "virtual learning etiquette", ru: "этикет виртуального обучения", tip: "5" },
          { en: "physical classroom", ru: "обычный класс", tip: "5" },
          { en: "class materials", ru: "учебные материалы" },
          { en: "via Zoom", ru: "через Zoom" },
          { en: "get distracted", ru: "отвлечься" },
          { en: "screen froze", ru: "экран завис" },
          { en: "app crashed", ru: "приложение вылетело" }
        ],
        chunks: [
          { text: "Hello, everybody! My name is Jim Fairfax and here with me in the studio is Sally O'Connell. Hi, Sally!", showText: true },
          { text: "Sally, thank you for coming. I know you had a busy morning today and you have an evening flight back home, but it's only noon and we're ready to discuss virtual learning in our regular program 'Tips and Tricks'.", showText: true },
          { text: "So, what is virtual learning? Sally, for many students, this is the first experience using video chat and digital conferencing as a tool for learning.", showText: true },
          { text: "Are there specific rules of virtual learning etiquette, or are they similar to those we're used to following in a physical classroom? We are all ears.", showText: true },
          { text: "By the way, talking about class materials, are there any? Can't they just browse for them during the class?", showText: true },
          { text: "My kids have French classes with a teacher from France via Zoom. There are five other children in a group and it's ridiculous to hear them argue with parents about chores or shooing their pets away when the teacher is explaining the task.", showText: true },
          { text: "Sally, don't you think it's too easy to get distracted when you're sitting alone in front of a device with no one around to check on you? What if something goes amiss? Screen froze? Bumped from the class? App crashed?", showText: false }
        ]
      },
      {
        id: "Sally O'Connell",
        label: "Sally O'Connell",
        fullText:
          "Hi, Jim! Virtual learning is a learning experience that is organized through the use of computers and/or the Internet. Unlike a virtual classroom, which is meant to replicate and replace the physical classroom for distance learners, virtual learning supplements in-class experience with digital communication and interaction. For instance, online quizzes or polls. Today, teachers and students across the country are making the transition to distance and virtual learning. They are a little different from the ones we've used to. Actually, I've intended to share a few tips to help students adjust to their new setup, engage fully in virtual class time and troubleshoot any related challenges. They were instrumental for me, so, I hope, they'll come in handy for other learners as well. First, a quiet environment is the key when you're setting up space for virtual class time. Choose a spot where there will be minimal distractions, ideally away from the flow of family traffic. It's fabulous if you can set up your device at a desk, table or countertop so that your hands are free to take notes and flip through class materials. Absolutely not! Just like ordinary class time, it's better to have your materials ready when a virtual class or lecture begins. Gather any books, notes, printouts and binders that you may need to reference during the session. Make sure you have a pen and paper handy! And don't forget to let your family members know you're about to enter class time. This way, they can avoid distracting you and be mindful of their volume. That's exactly what I wanted to mention next. After you log on make sure to mute yourself! Background noises such as typing, chewing or barking and meowing pets may not sound like much on your side, but those noises can amplify across your teacher's and classmates' speakers. Most audio/mute buttons look like a little microphone. You'll know you're muted when you see an X or slash over the button. And, always double-check: are you really muted? It really is. You can stay focused if you use active listening techniques. For instance, to show that you're paying attention to the teacher, nod, smile and react to what you're hearing, just the way you would in the classroom. Use a pen and paper to jot down the main points and ideas of the lesson in bulleted notes. Challenge yourself to learn one new thing from a classmate, ask one question or share one piece of positive feedback. And, please, resist the urge to surf the net! Don't panic! Technical glitches are bound to happen. Calm down, troubleshoot, and try logging on again!",
        phrases: [
          { en: "organized through the use of computers", ru: "организовано с помощью компьютеров" },
          { en: "replicate and replace the physical classroom", ru: "воспроизвести и заменить обычный класс", tip: "4 · trap" },
          { en: "supplements in-class experience", ru: "дополняет опыт занятий в классе", tip: "4 · key" },
          { en: "digital communication and interaction", ru: "цифровое общение и взаимодействие" },
          { en: "online quizzes or polls", ru: "онлайн-тесты или опросы" },
          { en: "a little different", ru: "немного отличаются", tip: "5" },
          { en: "share a few tips", ru: "поделиться несколькими советами" },
          { en: "engage fully", ru: "полностью вовлекаться" },
          { en: "come in handy", ru: "пригодиться" },
          { en: "quiet environment is the key", ru: "тихая среда — ключ" },
          { en: "minimal distractions", ru: "минимум отвлекающих факторов" },
          { en: "desk, table or countertop", ru: "письменный стол, стол или рабочая поверхность", tip: "6" },
          { en: "materials ready", ru: "материалы готовы" },
          { en: "let your family members know", ru: "сообщить членам семьи", tip: "7" },
          { en: "mindful of their volume", ru: "следить за громкостью", tip: "7" },
          { en: "mute yourself", ru: "выключить микрофон", tip: "8" },
          { en: "little microphone", ru: "маленький микрофон", tip: "8" },
          { en: "active listening techniques", ru: "техники активного слушания", tip: "9" },
          { en: "nod, smile and react", ru: "кивать, улыбаться и реагировать", tip: "9" },
          { en: "jot down the main points", ru: "записывать основные мысли", tip: "9" },
          { en: "resist the urge to surf the net", ru: "не поддаваться желанию сидеть в интернете", tip: "9 · NOT" },
          { en: "technical glitches", ru: "технические сбои" }
        ],
        chunks: [
          { text: "Virtual learning is a learning experience that is organized through the use of computers and/or the Internet.", showText: true },
          { text: "Unlike a virtual classroom, which is meant to replicate and replace the physical classroom for distance learners, virtual learning supplements in-class experience with digital communication and interaction.", showText: true },
          { text: "They are a little different from the ones we've used to. Actually, I've intended to share a few tips to help students adjust to their new setup, engage fully in virtual class time and troubleshoot any related challenges.", showText: true },
          { text: "First, a quiet environment is the key when you're setting up space for virtual class time. Choose a spot where there will be minimal distractions, ideally away from the flow of family traffic.", showText: true },
          { text: "It's fabulous if you can set up your device at a desk, table or countertop so that your hands are free to take notes and flip through class materials.", showText: true },
          { text: "Just like ordinary class time, it's better to have your materials ready when a virtual class or lecture begins. Gather any books, notes, printouts and binders that you may need to reference during the session.", showText: true },
          { text: "Make sure you have a pen and paper handy! And don't forget to let your family members know you're about to enter class time. This way, they can avoid distracting you and be mindful of their volume.", showText: true },
          { text: "After you log on make sure to mute yourself! Background noises such as typing, chewing or barking and meowing pets may not sound like much on your side, but those noises can amplify across your teacher's and classmates' speakers.", showText: true },
          { text: "Most audio/mute buttons look like a little microphone. You'll know you're muted when you see an X or slash over the button. And, always double-check: are you really muted?", showText: true },
          { text: "You can stay focused if you use active listening techniques. For instance, to show that you're paying attention to the teacher, nod, smile and react to what you're hearing, just the way you would in the classroom.", showText: true },
          { text: "Use a pen and paper to jot down the main points and ideas of the lesson in bulleted notes. Challenge yourself to learn one new thing from a classmate, ask one question or share one piece of positive feedback.", showText: true },
          { text: "And, please, resist the urge to surf the net! Don't panic! Technical glitches are bound to happen. Calm down, troubleshoot, and try logging on again!", showText: false }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
