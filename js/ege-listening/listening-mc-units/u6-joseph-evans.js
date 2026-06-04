/**
 * ЕГЭ Listening MC · Unit 6 · Joseph Evans · Mary's Tales.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u6-joseph-evans",
    unitOrder: 6,
    title: "Unit 6 · Joseph Evans",
    examSection: "§3 · Multiple Choice",
    headerTitle: "Sophie & Joseph Evans · Mary's Tales",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/6/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%206%20(mp3cut.net)%20(2).mp3",
    instructionHtml:
      "Вы услышите <strong>интервью с писателем</strong>. В заданиях <strong>3–9</strong> выберите <strong>один</strong> из трёх вариантов ответа. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Ловушки варианта 6:</strong></p>" +
      "<ul>" +
      "<li><strong>3:</strong> «poets» в первом романе ≠ он поэт; в начале — <em>Mary's Tales for children</em>.</li>" +
      "<li><strong>5:</strong> «three years» — про персонажей, не про книгу; ответ — <em>five years</em>.</li>" +
      "<li><strong>6:</strong> «polite and reliable» — про <em>других</em> ведьм, не про героев Joseph.</li>" +
      "<li><strong>9:</strong> after commercial — звонок слушателя (Q&amp;A), не реклама книги.</li>" +
      "</ul>",

    questions: [
      {
        examNum: 3,
        prompt: "What do we learn about Joseph Evans at the beginning of the interview?",
        key: 2,
        choices: [
          { num: 1, text: "He is a renowned poet." },
          { num: 2, text: "He writes books for kids." },
          { num: 3, text: "He is criticised nationally." }
        ],
        explainRu:
          "В представлении: <em>Prize in Literature for children for his Mary's Tales</em> — детские книги; он novelist, не poet.",
        distractorWrongRu: {
          1: "First novel about poets — не «он поэт».",
          3: "National attention — похвала, не criticism."
        }
      },
      {
        examNum: 4,
        prompt: "The presenter always starts her shows by...",
        key: 1,
        choices: [
          { num: 1, text: "asking a particular question." },
          { num: 2, text: "giving a list of national awards." },
          { num: 3, text: "making her guests uncomfortable." }
        ],
        explainRu:
          "<em>my usual question: what inspired you to write Mary's Tales?</em> — Sophie так и начинает.",
        distractorWrongRu: {
          2: "Awards перечисляет в intro, но «always starts» = usual question.",
          3: "Joseph expected intro — не discomfort."
        }
      },
      {
        examNum: 5,
        prompt: "How many years did it take Joseph to write a story?",
        key: 2,
        choices: [
          { num: 1, text: "3" },
          { num: 2, text: "5" },
          { num: 3, text: "35" }
        ],
        explainRu:
          "Letter на eve of 30th birthday → published on 35th birthday → <em>five years</em>.",
        distractorWrongRu: {
          1: "Three years — про поиск персонажей, не весь срок книги.",
          3: "35 — возраст при публикации, не число лет работы."
        }
      },
      {
        examNum: 6,
        prompt: "What kind of heroes appeal to Joseph?",
        key: 1,
        choices: [
          { num: 1, text: "The controversial ones." },
          { num: 2, text: "Those who are full of themselves." },
          { num: 3, text: "The ones who are polite and reliable." }
        ],
        explainRu:
          "Герои <em>flawed</em>; «people with no faults are boring»; polite and reliable — про <em>other witches</em>, не его героев.",
        distractorWrongRu: {
          2: "Laila sure of herself — один персонаж, не тип героев.",
          3: "Polite and reliable — то, от чего Brighty отличается."
        }
      },
      {
        examNum: 7,
        prompt: "Why do male readers want to marry Brighty?",
        key: 2,
        choices: [
          { num: 1, text: "They like strong women." },
          { num: 2, text: "They consider it a challenge." },
          { num: 3, text: "They know what to expect of her." }
        ],
        explainRu:
          "Минусы Brighty читатель <em>regarded these facts as a test</em> — fight for what he desires.",
        distractorWrongRu: {
          1: "Strong women — не сформулировано.",
          3: "Never know what happens next — наоборот, не predictability."
        }
      },
      {
        examNum: 8,
        prompt: "What makes Brighty and Crawley a good team?",
        key: 1,
        choices: [
          { num: 1, text: "They complement each other." },
          { num: 2, text: "They make practical decisions." },
          { num: 3, text: "They never disagree with each other." }
        ],
        explainRu:
          "Brighty dashing, Crawley practical — дополняют друг друга; <em>disagreeing violently from time to time</em>.",
        distractorWrongRu: {
          2: "Practical — Crawley, не «they both».",
          3: "Never disagree — опровергнуто."
        }
      },
      {
        examNum: 9,
        prompt: "What is going to happen in the next couple of minutes in the interview?",
        key: 2,
        choices: [
          { num: 1, text: "Joseph will advertise his new book." },
          { num: 2, text: "Joseph will answer questions from the audience." },
          { num: 3, text: "Joseph will tell more about the life of Brighty and Crawley." }
        ],
        explainRu:
          "<em>one of them is on the phone</em> after commercial — вопрос от слушателя.",
        distractorWrongRu: {
          1: "Short commercial — не book ad.",
          3: "More about book — общее, не конкретный next step."
        }
      }
    ],

    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Good evening to you all and to our guest today, Joseph Evans."
          },
          { speaker: "Joseph Evans", text: "Good evening." },
          {
            speaker: "Presenter",
            text:
              "I don't think that I need to introduce Joseph, a well-known novelist whose first novel about two young poets brought him national attention. Joseph's The Swan Song won the National Book Critics Circle Award. And Joseph also won the Prize in Literature for children for his Mary's Tales. So, Joseph Evans is in our studio today."
          },
          {
            speaker: "Joseph Evans",
            text:
              "Thank you, Sophie. Don't wait for me to blush at such an introduction, I did expect it. Your colleagues mentioned that you tend to start your shows like this, and you didn't disappoint me."
          },
          {
            speaker: "Presenter",
            text:
              "I should say that I will not disappoint the audience either, and will start the show with my usual question: what inspired you to write Mary's Tales?"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Joseph Evans",
            text:
              "It was a young girl. She wrote me a letter and complained that all the stories she read about fairies and witches included perfect little lady-like creatures which were always polite and never said a word to defend themselves. And she didn't like that one little bit."
          },
          {
            speaker: "Presenter",
            text:
              "Wow! So she gave you the idea, and you set off writing a story straight away?"
          },
          {
            speaker: "Joseph Evans",
            text:
              "I wish I did, but it took time to develop. Actually, it took a long time to decide how. I needed to discover the main characters first. They had to grow out of a seed, as my mom would say. This didn't happen for about three years. No, not three. I received the letter on the eve of my thirtieth birthday, and the book was published on the day of my thirty-fifth birthday."
          },
          { speaker: "Presenter", text: "So — five years. You took your time, indeed." },
          { speaker: "Joseph Evans", text: "I did." },
          {
            speaker: "Presenter",
            text:
              "You did. But it was worth it, as your readers say. The heroes are not conventional at all. In fact, they are all quite flawed."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Joseph Evans",
            text:
              "I think people who don't have faults are very boring. Your faults are a large part of what you are like as a person. And the aim of any writer should be to make what they write interesting. So, if I can't be interested in people with no faults, then neither can my readers. Mr Asparagus appealed to me because he is into both botanics and martial arts. And you must admit this is an odd combination. Laila is so sure of herself that you cannot pass by without paying her some attention. And of course Brighty is awesome because while other witches are polite and reliable, with her you never know what is going to happen next."
          },
          {
            speaker: "Presenter",
            text:
              "This is so true. Your Brighty, the sorceress of the marshlands, has charmed many readers across the world. What do you make of that?"
          },
          {
            speaker: "Joseph Evans",
            text:
              "The one strange fact about Brighty is that almost every young man who reads about her wants to marry her. They do. They all confess their wish quite openly. The other day I was doing a question-and-answer session, and a teenage boy put his hand up and asked me if he would mind if he would marry Brighty when he comes of age."
          },
          { speaker: "Presenter", text: "What did you say?" }
        ]
      },
      {
        turns: [
          {
            speaker: "Joseph Evans",
            text:
              "I wondered whether to ask him if he would mind everything being covered with frogs and lizards when the broomstick she was fixing went wrong. Or if he would mind being twisted round Brighty's little finger when she needed something. Or would it worry him that she was always falling in love with other men; or... But I could see he regarded these facts as a test. So I told him to join the end of a very long queue of other young men and prepare himself to fight for what he desires."
          },
          {
            speaker: "Presenter",
            text: "I guess this didn't appear to trouble him unduly, did it?"
          },
          {
            speaker: "Joseph Evans",
            text:
              "Not in the least. Personally, much as I love Brighty, she is the last person I would want to marry. I wouldn't like to live with a person who has a tendency to do the opposite of what you might expect."
          },
          {
            speaker: "Presenter",
            text: "Luckily, Brighty finds Crawley and they make a spectacular team."
          },
          {
            speaker: "Joseph Evans",
            text:
              "Yes, they do! Where Brighty is dashing and original, Crawley is quite practical. He is good at covering up Brighty's dashing blunders, in spite of disagreeing violently from time to time."
          },
          {
            speaker: "Presenter",
            text:
              "Joseph, our listeners would like to know more about the book, and one of them is on the phone — but first a short commercial..."
          }
        ]
      }
    ],

    huntLabs: [
      {
        examNum: 3,
        key: 2,
        paragraphIndex: 0,
        keyLineRu: "Prize in Literature for children · Mary's Tales.",
        explainRu: "Детская литература в intro → writes books for kids.",
        evidencePromptRu: "Найди строку про Mary's Tales в представлении.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "won the Prize in Literature for children for his Mary's Tales"
          },
          {
            kind: "hit",
            sol: "d",
            text: "whose first novel about two young poets",
            wrongOption: 1,
            distractExplainRu: "Poets в романе ≠ he is a renowned poet (вар. 1)."
          }
        ]
      },
      {
        examNum: 4,
        key: 1,
        paragraphIndex: 0,
        keyLineRu: "my usual question: what inspired you…",
        explainRu: "Sophie always starts with this question.",
        evidencePromptRu: "Найди, как Presenter начинает шоу.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "will start the show with my usual question: what inspired you to write Mary's Tales?"
          },
          {
            kind: "hit",
            sol: "e",
            text: "you tend to start your shows like this"
          }
        ]
      },
      {
        examNum: 5,
        key: 2,
        paragraphIndex: 1,
        keyLineRu: "Thirtieth → thirty-fifth birthday · five years.",
        explainRu: "Presenter: So — five years.",
        evidencePromptRu: "Найди срок написания книги.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "the book was published on the day of my thirty-fifth birthday"
          },
          { kind: "hit", sol: "e", text: "So — five years" },
          {
            kind: "hit",
            sol: "d",
            text: "This didn't happen for about three years",
            wrongOption: 1,
            distractExplainRu: "Three years — персонажи, не вся книга (вар. 1)."
          }
        ]
      },
      {
        examNum: 6,
        key: 1,
        paragraphIndex: 1,
        keyLineRu: "Flawed heroes · faults make them interesting.",
        explainRu: "Controversial / unconventional, not polite and reliable.",
        evidencePromptRu: "Найди, какие герои нравятся Joseph.",
        segments: [
          { kind: "hit", sol: "e", text: "they are all quite flawed" },
          {
            kind: "hit",
            sol: "e",
            text: "people who don't have faults are very boring"
          },
          {
            kind: "hit",
            sol: "d",
            text: "while other witches are polite and reliable",
            wrongOption: 3,
            distractExplainRu: "Polite and reliable — other witches, не его герои (вар. 3)."
          }
        ]
      },
      {
        examNum: 7,
        key: 2,
        paragraphIndex: 2,
        keyLineRu: "Regarded these facts as a test · fight for what he desires.",
        explainRu: "Challenge, not strong women / predictability.",
        evidencePromptRu: "Найди реакцию читателя на минусы Brighty.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "he regarded these facts as a test"
          },
          {
            kind: "hit",
            sol: "e",
            text: "prepare himself to fight for what he desires"
          },
          {
            kind: "hit",
            sol: "d",
            text: "you never know what is going to happen next",
            wrongOption: 3,
            distractExplainRu: "Unpredictable — не «know what to expect» (вар. 3)."
          }
        ]
      },
      {
        examNum: 8,
        key: 1,
        paragraphIndex: 3,
        keyLineRu: "Dashing Brighty + practical Crawley.",
        explainRu: "Complement each other; disagree sometimes.",
        evidencePromptRu: "Найди про Brighty и Crawley.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "Where Brighty is dashing and original, Crawley is quite practical"
          },
          {
            kind: "hit",
            sol: "e",
            text: "covering up Brighty's dashing blunders"
          },
          {
            kind: "hit",
            sol: "d",
            text: "disagreeing violently from time to time",
            wrongOption: 3,
            distractExplainRu: "They DO disagree (вар. 3)."
          }
        ]
      },
      {
        examNum: 9,
        key: 2,
        paragraphIndex: 3,
        keyLineRu: "One of them is on the phone.",
        explainRu: "Listener call → answer questions from audience.",
        evidencePromptRu: "Найди финал интервью.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "one of them is on the phone"
          },
          {
            kind: "hit",
            sol: "d",
            text: "but first a short commercial",
            wrongOption: 1,
            distractExplainRu: "Commercial — не book ad (вар. 1)."
          }
        ]
      }
    ],

    shadowSpeakers: [
      {
        id: "Presenter",
        label: "Presenter (Sophie)",
        fullText:
          "Good evening to you all and to our guest today, Joseph Evans. I don't think that I need to introduce Joseph, a well-known novelist whose first novel about two young poets brought him national attention. Joseph's The Swan Song won the National Book Critics Circle Award. And Joseph also won the Prize in Literature for children for his Mary's Tales. So, Joseph Evans is in our studio today. I should say that I will not disappoint the audience either, and will start the show with my usual question: what inspired you to write Mary's Tales? Wow! So she gave you the idea, and you set off writing a story straight away? So — five years. You took your time, indeed. You did. But it was worth it, as your readers say. The heroes are not conventional at all. In fact, they are all quite flawed. This is so true. Your Brighty, the sorceress of the marshlands, has charmed many readers across the world. What do you make of that? What did you say? I guess this didn't appear to trouble him unduly, did it? Luckily, Brighty finds Crawley and they make a spectacular team. Joseph, our listeners would like to know more about the book, and one of them is on the phone — but first a short commercial...",
        phrases: [
          { en: "well-known novelist", ru: "известный романист", tip: "3 · not poet" },
          {
            en: "Prize in Literature for children for his Mary's Tales",
            ru: "приз в области детской литературы за «Mary's Tales»",
            tip: "3 · writes for kids"
          },
          {
            en: "my usual question: what inspired you to write Mary's Tales?",
            ru: "мой обычный вопрос: что вдохновило на «Mary's Tales»?",
            tip: "4 · particular question"
          },
          { en: "set off writing a story straight away", ru: "сразу принялся писать?", tip: "5 · trap" },
          { en: "So — five years", ru: "итого — пять лет", tip: "5 · key" },
          { en: "they are all quite flawed", ru: "все они довольно несовершенны", tip: "6 · controversial" },
          { en: "sorceress of the marshlands", ru: "волшебница болот" },
          { en: "charmed many readers across the world", ru: "покорила читателей по всему миру" },
          { en: "What did you say?", ru: "что вы ответили?" },
          { en: "make a spectacular team", ru: "составляют великолепную команду", tip: "8" },
          {
            en: "one of them is on the phone",
            ru: "один из них на телефоне",
            tip: "9 · audience questions"
          },
          { en: "a short commercial", ru: "короткая рекламная пауза", tip: "9" }
        ],
        chunks: [
          { text: "Good evening … Joseph Evans is in our studio today.", showText: true },
          {
            text: "I should say … what inspired you to write Mary's Tales?",
            showText: true
          },
          { text: "Wow! … they are all quite flawed.", showText: true },
          {
            text: "This is so true … What did you say?",
            showText: true
          },
          {
            text: "I guess this didn't … but first a short commercial...",
            showText: false
          }
        ]
      },
      {
        id: "Joseph Evans",
        label: "Joseph Evans",
        fullText:
          "Good evening. Thank you, Sophie. Don't wait for me to blush at such an introduction, I did expect it. Your colleagues mentioned that you tend to start your shows like this, and you didn't disappoint me. It was a young girl. She wrote me a letter and complained that all the stories she read about fairies and witches included perfect little lady-like creatures which were always polite and never said a word to defend themselves. And she didn't like that one little bit. I wish I did, but it took time to develop. Actually, it took a long time to decide how. I needed to discover the main characters first. They had to grow out of a seed, as my mom would say. This didn't happen for about three years. No, not three. I received the letter on the eve of my thirtieth birthday, and the book was published on the day of my thirty-fifth birthday. I did. I think people who don't have faults are very boring. Your faults are a large part of what you are like as a person. And the aim of any writer should be to make what they write interesting. So, if I can't be interested in people with no faults, then neither can my readers. Mr Asparagus appealed to me because he is into both botanics and martial arts. And you must admit this is an odd combination. Laila is so sure of herself that you cannot pass by without paying her some attention. And of course Brighty is awesome because while other witches are polite and reliable, with her you never know what is going to happen next. The one strange fact about Brighty is that almost every young man who reads about her wants to marry her. They do. They all confess their wish quite openly. The other day I was doing a question-and-answer session, and a teenage boy put his hand up and asked me if he would mind if he would marry Brighty when he comes of age. I wondered whether to ask him if he would mind everything being covered with frogs and lizards when the broomstick she was fixing went wrong. Or if he would mind being twisted round Brighty's little finger when she needed something. Or would it worry him that she was always falling in love with other men; or... But I could see he regarded these facts as a test. So I told him to join the end of a very long queue of other young men and prepare himself to fight for what he desires. Not in the least. Personally, much as I love Brighty, she is the last person I would want to marry. I wouldn't like to live with a person who has a tendency to do the opposite of what you might expect. Yes, they do! Where Brighty is dashing and original, Crawley is quite practical. He is good at covering up Brighty's dashing blunders, in spite of disagreeing violently from time to time.",
        phrases: [
          { en: "Don't wait for me to blush", ru: "не ждите, что я зальюсь румянцем" },
          { en: "you tend to start your shows like this", ru: "вы обычно так начинаете передачи", tip: "4" },
          { en: "perfect little lady-like creatures", ru: "идеальные маленькие «леди»" },
          { en: "never said a word to defend themselves", ru: "никогда не защищались словом" },
          { en: "didn't like that one little bit", ru: "ей это совсем не понравилось" },
          { en: "grow out of a seed", ru: "прорасти из семени (созреть)", tip: "5" },
          {
            en: "on the eve of my thirtieth birthday",
            ru: "накануне моего тридцатилетия",
            tip: "5"
          },
          {
            en: "published on the day of my thirty-fifth birthday",
            ru: "вышла в день моего тридцатипятилетия",
            tip: "5 · five years"
          },
          { en: "people who don't have faults are very boring", ru: "люди без недостатков очень скучны", tip: "6" },
          { en: "into both botanics and martial arts", ru: "увлекается и ботаникой, и боевыми искусствами" },
          { en: "an odd combination", ru: "странное сочетание" },
          { en: "so sure of herself", ru: "так уверена в себе", tip: "6 · trap" },
          {
            en: "while other witches are polite and reliable",
            ru: "другие ведьмы вежливы и надёжны",
            tip: "6 · not Joseph's heroes"
          },
          { en: "never know what is going to happen next", ru: "никогда не знаешь, что будет дальше" },
          { en: "wants to marry her", ru: "хотят на ней жениться", tip: "7" },
          { en: "question-and-answer session", ru: "сессия «вопрос–ответ»" },
          { en: "when he comes of age", ru: "когда достигнет совершеннолетия" },
          { en: "twisted round Brighty's little finger", ru: "обведён вокруг её пальца" },
          { en: "regarded these facts as a test", ru: "воспринял это как испытание", tip: "7 · challenge" },
          { en: "fight for what he desires", ru: "бороться за то, чего хочет", tip: "7" },
          { en: "the last person I would want to marry", ru: "последний человек, на котором я бы хотел жениться" },
          { en: "do the opposite of what you might expect", ru: "делать противоположное ожидаемому" },
          { en: "dashing and original", ru: "лихая и оригинальная", tip: "8" },
          { en: "quite practical", ru: "весьма практичный", tip: "8 · complement" },
          { en: "covering up Brighty's dashing blunders", ru: "замазывает её лихие промахи", tip: "8" },
          { en: "disagreeing violently from time to time", ru: "иногда яростно не соглашаясь", tip: "8 · not never disagree" }
        ],
        chunks: [
          { text: "Good evening. … you didn't disappoint me.", showText: true },
          {
            text: "It was a young girl. … my thirty-fifth birthday.",
            showText: true
          },
          {
            text: "I did. I think people … happen next.",
            showText: true
          },
          {
            text: "The one strange fact … when he comes of age.",
            showText: true
          },
          {
            text: "I wondered whether … from time to time.",
            showText: false
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
