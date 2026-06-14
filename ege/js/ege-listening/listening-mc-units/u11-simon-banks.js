/**
 * ЕГЭ Listening MC · Unit 11 · Simon Banks · becoming a conductor.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u11-simon-banks",
    unitOrder: 11,
    title: "Unit 11 · Simon Banks",
    examSection: "§3 · Multiple Choice",
    headerTitle: "Mary Sailor & Simon Banks · conductor career",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/11/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2011%20(mp3cut.net)%20(2).mp3",
    instructionHtml:
      "Вы услышите <strong>интервью</strong>. В заданиях <strong>3–9</strong> выберите <strong>один</strong> из трёх вариантов ответа. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Ловушки варианта 11:</strong></p><ul>" +
      "<li><strong>3:</strong> regular programme: last week / two weeks before / today → once a week.</li>" +
      "<li><strong>4:</strong> conductor must know what it means to play an instrument well → play an instrument.</li>" +
      "<li><strong>5:</strong> orchestra is your instrument; music is presented/communicated → way of communication.</li>" +
      "<li><strong>6:</strong> leadership = inspire performers and bring out the best, not start quarrels.</li>" +
      "<li><strong>7:</strong> languages help share interpretation with orchestra players from different countries.</li>" +
      "<li><strong>8:</strong> many professional positions require master's, but some minor positions need bachelor's → lowest is Bachelor's.</li>" +
      "<li><strong>9:</strong> rehearsals, classical music, CDs/videos are mentioned; imitating other conductors is not.</li>" +
      "</ul>",
    questions: [
      {
        examNum: 3,
        prompt: "How often does the program run?",
        key: 1,
        choices: [
          { num: 1, text: "Once a week." },
          { num: 2, text: "Twice a week." },
          { num: 3, text: "Three times a week." }
        ],
        explainRu:
          "Mary mentions last week, two weeks before and today as weekly episodes of the regular music programme.",
        distractorWrongRu: {
          2: "Two weeks before refers to an earlier episode, not frequency.",
          3: "Three pianists are guests, not frequency."
        }
      },
      {
        examNum: 4,
        prompt: "Which skill is essential for becoming a conductor?",
        key: 2,
        choices: [
          { num: 1, text: "An ability to inspire the audience." },
          { num: 2, text: "An ability to play an instrument." },
          { num: 3, text: "An ability to speak English." }
        ],
        explainRu:
          "Simon says that if you don't know what it means to play an instrument well, you cannot demand the same thing from an orchestra.",
        distractorWrongRu: {
          1: "He talks about inspiring musicians/performers, not audience.",
          3: "He says he doesn't mean English or French."
        }
      },
      {
        examNum: 5,
        prompt: "Simon believes that for a conductor music is...",
        key: 3,
        choices: [
          { num: 1, text: "love at first sight." },
          { num: 2, text: "a source of inspiration." },
          { num: 3, text: "a way of communication." }
        ],
        explainRu:
          "A conductor presents music as they interpret it and communicates ideas to the group; the orchestra is the instrument.",
        distractorWrongRu: {
          1: "Love is mentioned, but not love at first sight.",
          2: "Inspiration appears in a different sense; communication is central."
        }
      },
      {
        examNum: 6,
        prompt: "Why do conductors need leadership skills?",
        key: 1,
        choices: [
          { num: 1, text: "To motivate orchestra players." },
          { num: 2, text: "To deal with potential conflicts." },
          { num: 3, text: "To get the best instruments." }
        ],
        explainRu:
          "Simon says a conductor should inspire performers and bring out the best in each one without unnecessary quarrels.",
        distractorWrongRu: {
          2: "Avoiding quarrels is mentioned, but the positive aim is to inspire performers.",
          3: "Instruments as objects are not the point."
        }
      },
      {
        examNum: 7,
        prompt: "Why do conductors need to speak European languages?",
        key: 3,
        choices: [
          { num: 1, text: "To study music at college." },
          { num: 2, text: "To understand music language." },
          { num: 3, text: "To communicate with musicians." }
        ],
        explainRu:
          "Languages such as Italian, German and French help share interpretation with orchestra players from different countries.",
        distractorWrongRu: {
          1: "College is discussed later.",
          2: "Music language is important, but European languages are for communicating interpretation."
        }
      },
      {
        examNum: 8,
        prompt: "What is the lowest educational level required for professional musicians?",
        key: 2,
        choices: [
          { num: 1, text: "No level required." },
          { num: 2, text: "Bachelor's degree." },
          { num: 3, text: "Master's degree." }
        ],
        explainRu:
          "Many professional positions require a master's at minimum, but some minor positions need a bachelor's degree in arts. The lowest named degree is bachelor's.",
        distractorWrongRu: {
          1: "Simon says no education needed is not true.",
          3: "Master's is required for many, but not the lowest level named."
        }
      },
      {
        examNum: 9,
        prompt: "What does Simon NOT mention as a way to get experience?",
        key: 3,
        choices: [
          { num: 1, text: "Attending other orchestras' practice sessions." },
          { num: 2, text: "Listening to music performed by composers." },
          { num: 3, text: "Using videos to imitate other conductors." }
        ],
        explainRu:
          "Simon mentions going to rehearsals, listening to classical music, and pretending to conduct using CDs or videos. He does not say to imitate other conductors.",
        distractorWrongRu: {
          1: "Go to rehearsals is mentioned.",
          2: "Listen to classical music / classical pieces is mentioned."
        }
      }
    ],
    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Hello, everybody! My name is Mary Sailor and welcome to our regular program about music. Last week we had a French horn player, who shared with us the challenges of his profession. Two weeks before, three pianists advised you to spend no less than one hour a day practising if you wish to become successful. Today we'll discuss with our expert, Simon Banks, what to do if you aspire to become a conductor. Hello, Simon."
          },
          { speaker: "Simon Banks", text: "Hi, Mary and hello to everyone. I'm pleased to be here today." }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Simon, I'm sure there are certain steps that must be taken to achieve such an ambitious goal as becoming an orchestra conductor. Could you please give us more details on that?"
          },
          {
            speaker: "Simon Banks",
            text:
              "Absolutely! Many music students dream of leading a group of highly trained musicians using their own unique interpretations. However, there are a number of skills required for becoming a professional conductor. First and foremost, to be able to inspire the best musicians, you need the ability to communicate with players on their own level. You should speak and understand their language. And I don't mean English or French. What I want to say is that if you don't know what it means to play an instrument well, you are not in a position to demand the same thing from an orchestra. Regardless of the instrument you choose, you must become extremely proficient at playing it."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "So, if you don't play any musical instrument or don't play it well, the career of a conductor is not for you?"
          },
          {
            speaker: "Simon Banks",
            text:
              "Exactly! Being a conductor is about presenting music in a way that you interpret it. Essentially, your orchestra is your instrument. Like musicians who are able to channel their feelings into their playing, an aspiring conductor needs to love music so much that they can effectively communicate their ideas to the group. So, you must love music more than you love yourself in a way."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "That's amazing! I've never thought of it that way. Are there any other aspects involved in a conducting career?"
          },
          {
            speaker: "Simon Banks",
            text:
              "Because you will be working with people, you need to know how to effectively communicate with them and inspire them at the same time. You should know how to understand different personalities in order to create positive interaction."
          },
          { speaker: "Presenter", text: "So, you need to be a musician and a psychologist at the same time." },
          {
            speaker: "Simon Banks",
            text:
              "And a leader, and a mother. Because you should also learn how to inspire your performers and bring out the best in each one without starting unnecessary quarrels and arguments. You should also be a bit of a linguist."
          },
          { speaker: "Presenter", text: "A linguist?" },
          {
            speaker: "Simon Banks",
            text:
              "Yes. A strong grasp of music language is important. And for that a conductor should be familiar with various languages such as Italian, German, and French so that they can share their interpretation of a musical piece with orchestra players from different countries."
          }
        ]
      },
      {
        turns: [
          { speaker: "Presenter", text: "Do you need to graduate from University or College to become a conductor?" },
          {
            speaker: "Simon Banks",
            text:
              "I'd love to say that no education is needed if you are talented, but that's just not true. Many professional positions require a master's at the minimum, but some minor positions need a bachelor's degree in arts. And while education is essential, like most jobs, experience also ranks very high as a marketable feature. Fortunately, you don't have to wait for college internships, you can get experience on your own if you know where to look."
          },
          { speaker: "Presenter", text: "That's amazing! Will you share some productive ideas with our audience?" },
          {
            speaker: "Simon Banks",
            text:
              "Actually, they are relatively simple. First, go to rehearsals. You'll see what makes performance and observe how conductors make it happen. Second, listen to classical music. As much as possible, explore all types of music. Simply familiarizing yourself with classical pieces will help you develop your own ideas about how the music should be performed. And, silly as it may seem, pretend to conduct an orchestra using CDs or videos. If you work in front of a mirror, you will see what you need to correct or improve."
          },
          { speaker: "Presenter", text: "Thank you very much, Simon." }
        ]
      }
    ],
    huntLabs: [
      {
        examNum: 3,
        key: 1,
        paragraphIndex: 0,
        keyLineRu: "Regular programme with weekly examples: last week, two weeks before, today.",
        explainRu: "The programme runs once a week.",
        evidencePromptRu: "Найди регулярность программы.",
        segments: [
          { kind: "hit", sol: "e", text: "Last week we had a French horn player" },
          { kind: "hit", sol: "e", text: "Two weeks before, three pianists" },
          { kind: "hit", sol: "e", text: "Today we'll discuss" }
        ]
      },
      {
        examNum: 4,
        key: 2,
        paragraphIndex: 1,
        keyLineRu: "You must know what it means to play an instrument well.",
        explainRu: "Ability to play an instrument is essential.",
        evidencePromptRu: "Найди play an instrument well.",
        segments: [
          { kind: "hit", sol: "e", text: "if you don't know what it means to play an instrument well" },
          { kind: "hit", sol: "e", text: "you must become extremely proficient at playing it" }
        ]
      },
      {
        examNum: 5,
        key: 3,
        paragraphIndex: 2,
        keyLineRu: "A conductor communicates ideas through music.",
        explainRu: "Music is a way of communication.",
        evidencePromptRu: "Найди communicate their ideas.",
        segments: [
          { kind: "hit", sol: "e", text: "presenting music in a way that you interpret it" },
          { kind: "hit", sol: "e", text: "communicate their ideas to the group" }
        ]
      },
      {
        examNum: 6,
        key: 1,
        paragraphIndex: 3,
        keyLineRu: "Inspire performers and bring out the best.",
        explainRu: "Leadership helps motivate players.",
        evidencePromptRu: "Найди inspire performers.",
        segments: [
          { kind: "hit", sol: "e", text: "inspire your performers" },
          { kind: "hit", sol: "e", text: "bring out the best in each one" }
        ]
      },
      {
        examNum: 7,
        key: 3,
        paragraphIndex: 3,
        keyLineRu: "Languages help share interpretation with orchestra players.",
        explainRu: "European languages are needed to communicate with musicians.",
        evidencePromptRu: "Найди share interpretation.",
        segments: [
          { kind: "hit", sol: "e", text: "share their interpretation of a musical piece with orchestra players from different countries" }
        ]
      },
      {
        examNum: 8,
        key: 2,
        paragraphIndex: 4,
        keyLineRu: "Some minor positions need a bachelor's degree in arts.",
        explainRu: "The lowest named degree is a bachelor's degree.",
        evidencePromptRu: "Найди bachelor's degree.",
        segments: [
          { kind: "hit", sol: "d", text: "no education is needed", wrongOption: 1, distractExplainRu: "Simon says this is not true." },
          { kind: "hit", sol: "e", text: "some minor positions need a bachelor's degree in arts" },
          { kind: "hit", sol: "d", text: "require a master's at the minimum", wrongOption: 3, distractExplainRu: "Many require master's, but lowest named level is bachelor's." }
        ]
      },
      {
        examNum: 9,
        key: 3,
        paragraphIndex: 4,
        keyLineRu: "He mentions videos, but not imitating other conductors.",
        explainRu: "Using videos to imitate other conductors is not mentioned.",
        evidencePromptRu: "Сравни три ways to get experience.",
        segments: [
          { kind: "hit", sol: "e", text: "go to rehearsals" },
          { kind: "hit", sol: "e", text: "listen to classical music" },
          { kind: "hit", sol: "e", text: "pretend to conduct an orchestra using CDs or videos" }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Presenter",
        label: "Presenter (Mary Sailor)",
        fullText:
          "Hello, everybody! My name is Mary Sailor and welcome to our regular program about music. Last week we had a French horn player, who shared with us the challenges of his profession. Two weeks before, three pianists advised you to spend no less than one hour a day practising if you wish to become successful. Today we'll discuss with our expert, Simon Banks, what to do if you aspire to become a conductor. Hello, Simon. Simon, I'm sure there are certain steps that must be taken to achieve such an ambitious goal as becoming an orchestra conductor. Could you please give us more details on that? So, if you don't play any musical instrument or don't play it well, the career of a conductor is not for you? That's amazing! I've never thought of it that way. Are there any other aspects involved in a conducting career? So, you need to be a musician and a psychologist at the same time. A linguist? Do you need to graduate from University or College to become a conductor? That's amazing! Will you share some productive ideas with our audience? Thank you very much, Simon.",
        phrases: [
          { en: "regular program about music", ru: "регулярная программа о музыке", tip: "3" },
          { en: "Last week", ru: "на прошлой неделе", tip: "3" },
          { en: "Two weeks before", ru: "две недели назад", tip: "3" },
          { en: "aspire to become a conductor", ru: "мечтаете стать дирижёром" },
          { en: "ambitious goal", ru: "амбициозная цель" },
          { en: "orchestra conductor", ru: "дирижёр оркестра" },
          { en: "career of a conductor", ru: "карьера дирижёра" },
          { en: "musician and a psychologist", ru: "музыкант и психолог" },
          { en: "productive ideas", ru: "полезные идеи" }
        ],
        chunks: [
          { text: "Hello, everybody! My name is Mary Sailor and welcome to our regular program about music. Last week we had a French horn player, who shared with us the challenges of his profession.", showText: true },
          { text: "Two weeks before, three pianists advised you to spend no less than one hour a day practising if you wish to become successful. Today we'll discuss with our expert, Simon Banks, what to do if you aspire to become a conductor. Hello, Simon.", showText: true },
          { text: "Simon, I'm sure there are certain steps that must be taken to achieve such an ambitious goal as becoming an orchestra conductor. Could you please give us more details on that?", showText: true },
          { text: "So, if you don't play any musical instrument or don't play it well, the career of a conductor is not for you?", showText: true },
          { text: "That's amazing! I've never thought of it that way. Are there any other aspects involved in a conducting career? So, you need to be a musician and a psychologist at the same time. A linguist?", showText: true },
          { text: "Do you need to graduate from University or College to become a conductor? That's amazing! Will you share some productive ideas with our audience? Thank you very much, Simon.", showText: false }
        ]
      },
      {
        id: "Simon Banks",
        label: "Simon Banks",
        fullText:
          "Hi, Mary and hello to everyone. I'm pleased to be here today. Absolutely! Many music students dream of leading a group of highly trained musicians using their own unique interpretations. However, there are a number of skills required for becoming a professional conductor. First and foremost, to be able to inspire the best musicians, you need the ability to communicate with players on their own level. You should speak and understand their language. And I don't mean English or French. What I want to say is that if you don't know what it means to play an instrument well, you are not in a position to demand the same thing from an orchestra. Regardless of the instrument you choose, you must become extremely proficient at playing it. Exactly! Being a conductor is about presenting music in a way that you interpret it. Essentially, your orchestra is your instrument. Like musicians who are able to channel their feelings into their playing, an aspiring conductor needs to love music so much that they can effectively communicate their ideas to the group. So, you must love music more than you love yourself in a way. Because you will be working with people, you need to know how to effectively communicate with them and inspire them at the same time. You should know how to understand different personalities in order to create positive interaction. And a leader, and a mother. Because you should also learn how to inspire your performers and bring out the best in each one without starting unnecessary quarrels and arguments. You should also be a bit of a linguist. Yes. A strong grasp of music language is important. And for that a conductor should be familiar with various languages such as Italian, German, and French so that they can share their interpretation of a musical piece with orchestra players from different countries. I'd love to say that no education is needed if you are talented, but that's just not true. Many professional positions require a master's at the minimum, but some minor positions need a bachelor's degree in arts. And while education is essential, like most jobs, experience also ranks very high as a marketable feature. Fortunately, you don't have to wait for college internships, you can get experience on your own if you know where to look. Actually, they are relatively simple. First, go to rehearsals. You'll see what makes performance and observe how conductors make it happen. Second, listen to classical music. As much as possible, explore all types of music. Simply familiarizing yourself with classical pieces will help you develop your own ideas about how the music should be performed. And, silly as it may seem, pretend to conduct an orchestra using CDs or videos. If you work in front of a mirror, you will see what you need to correct or improve.",
        phrases: [
          { en: "highly trained musicians", ru: "высококлассные музыканты" },
          { en: "unique interpretations", ru: "уникальные интерпретации" },
          { en: "skills required", ru: "необходимые навыки" },
          { en: "communicate with players on their own level", ru: "общаться с исполнителями на их уровне" },
          { en: "play an instrument well", ru: "хорошо играть на инструменте", tip: "4" },
          { en: "extremely proficient", ru: "чрезвычайно умелый" },
          { en: "presenting music", ru: "представлять музыку", tip: "5" },
          { en: "orchestra is your instrument", ru: "оркестр — ваш инструмент" },
          { en: "communicate their ideas", ru: "доносить свои идеи", tip: "5" },
          { en: "inspire your performers", ru: "вдохновлять исполнителей", tip: "6" },
          { en: "bring out the best", ru: "раскрывать лучшее", tip: "6" },
          { en: "without starting unnecessary quarrels", ru: "не начиная лишних ссор" },
          { en: "share their interpretation", ru: "делиться своей интерпретацией", tip: "7" },
          { en: "master's at the minimum", ru: "как минимум магистратура", tip: "8" },
          { en: "bachelor's degree in arts", ru: "степень бакалавра искусств", tip: "8" },
          { en: "marketable feature", ru: "ценное качество на рынке" },
          { en: "go to rehearsals", ru: "ходить на репетиции", tip: "9" },
          { en: "listen to classical music", ru: "слушать классическую музыку", tip: "9" },
          { en: "pretend to conduct an orchestra", ru: "делать вид, что дирижируете оркестром", tip: "9" },
          { en: "using CDs or videos", ru: "используя CD или видео", tip: "9" }
        ],
        chunks: [
          { text: "Many music students dream of leading a group of highly trained musicians using their own unique interpretations. However, there are a number of skills required for becoming a professional conductor.", showText: true },
          { text: "First and foremost, to be able to inspire the best musicians, you need the ability to communicate with players on their own level. You should speak and understand their language.", showText: true },
          { text: "And I don't mean English or French. What I want to say is that if you don't know what it means to play an instrument well, you are not in a position to demand the same thing from an orchestra.", showText: true },
          { text: "Regardless of the instrument you choose, you must become extremely proficient at playing it.", showText: true },
          { text: "Being a conductor is about presenting music in a way that you interpret it. Essentially, your orchestra is your instrument.", showText: true },
          { text: "Like musicians who are able to channel their feelings into their playing, an aspiring conductor needs to love music so much that they can effectively communicate their ideas to the group.", showText: true },
          { text: "Because you will be working with people, you need to know how to effectively communicate with them and inspire them at the same time. You should know how to understand different personalities in order to create positive interaction.", showText: true },
          { text: "And a leader, and a mother. Because you should also learn how to inspire your performers and bring out the best in each one without starting unnecessary quarrels and arguments.", showText: true },
          { text: "A strong grasp of music language is important. And for that a conductor should be familiar with various languages such as Italian, German, and French so that they can share their interpretation of a musical piece with orchestra players from different countries.", showText: true },
          { text: "I'd love to say that no education is needed if you are talented, but that's just not true. Many professional positions require a master's at the minimum, but some minor positions need a bachelor's degree in arts.", showText: true },
          { text: "And while education is essential, like most jobs, experience also ranks very high as a marketable feature. Fortunately, you don't have to wait for college internships, you can get experience on your own if you know where to look.", showText: true },
          { text: "First, go to rehearsals. You'll see what makes performance and observe how conductors make it happen. Second, listen to classical music. As much as possible, explore all types of music.", showText: true },
          { text: "Simply familiarizing yourself with classical pieces will help you develop your own ideas about how the music should be performed. And, silly as it may seem, pretend to conduct an orchestra using CDs or videos. If you work in front of a mirror, you will see what you need to correct or improve.", showText: false }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
