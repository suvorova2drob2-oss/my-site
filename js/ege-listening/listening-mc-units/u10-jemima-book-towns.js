/**
 * ЕГЭ Listening MC · Unit 10 · Jemima Foxcraft · book towns.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u10-jemima-book-towns",
    unitOrder: 10,
    title: "Unit 10 · Jemima · Book towns",
    examSection: "§3 · Multiple Choice",
    headerTitle: "David Silverspoon & Jemima Foxcraft · book towns",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/10/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2010%20(mp3cut.net)%20(2).mp3",
    instructionHtml:
      "Вы услышите <strong>интервью</strong>. В заданиях <strong>3–9</strong> выберите <strong>один</strong> из трёх вариантов ответа. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Ловушки варианта 10:</strong></p>" +
      "<ul>" +
      "<li><strong>3:</strong> yesterday = Friday the 13th → today is Saturday.</li>" +
      "<li><strong>4:</strong> scenic locations and number/concentration of bookshops are mentioned; economic factors are not a feature of a good book town.</li>" +
      "<li><strong>5:</strong> no book towns located in Russia or Argentina yet → Argentina.</li>" +
      "<li><strong>6:</strong> Richard Booth wanted to regenerate Hay in New South Wales, Australia → from Australia.</li>" +
      "<li><strong>7:</strong> people travel for practical/physical/tangible experience.</li>" +
      "<li><strong>8:</strong> booksellers must be business-minded and hard-headed → practical and realistic.</li>" +
      "<li><strong>9:</strong> Paju Book City: people don't live there → no citizens.</li>" +
      "</ul>",
    questions: [
      {
        examNum: 3,
        prompt: "On which day does the program run?",
        key: 2,
        choices: [
          { num: 1, text: "Friday." },
          { num: 2, text: "Saturday." },
          { num: 3, text: "Sunday." }
        ],
        explainRu:
          "Presenter говорит, что yesterday была Friday the 13th. Значит, today — Saturday.",
        distractorWrongRu: {
          1: "Friday was yesterday.",
          3: "Sunday не следует из Friday the 13th yesterday."
        }
      },
      {
        examNum: 4,
        prompt: "Which features of a good book town are NOT mentioned by the speaker?",
        key: 2,
        choices: [
          { num: 1, text: "Scenic locations." },
          { num: 2, text: "Economic factors." },
          { num: 3, text: "Number of book stores." }
        ],
        explainRu:
          "Jemima mentions picturesque locations and a real concentration of bookshops. Economic factors appear as background/rationale, not as a feature of a good book town.",
        distractorWrongRu: {
          1: "Particularly picturesque locations are mentioned directly.",
          3: "A real concentration of bookshops / critical mass is mentioned."
        }
      },
      {
        examNum: 5,
        prompt: "Which country does not have book towns?",
        key: 1,
        choices: [
          { num: 1, text: "Argentina." },
          { num: 2, text: "Finland." },
          { num: 3, text: "India." }
        ],
        explainRu:
          "Jemima: there are book towns from Australia and Finland to India and South Africa; she hasn't located any in Russia or Argentina yet.",
        distractorWrongRu: {
          2: "Finland is named as having book towns.",
          3: "India is named as having book towns."
        }
      },
      {
        examNum: 6,
        prompt: "The person who first came up with the idea of a book town was from...",
        key: 1,
        choices: [
          { num: 1, text: "Australia." },
          { num: 2, text: "New Hampshire." },
          { num: 3, text: "South Wales." }
        ],
        explainRu:
          "Richard Booth wanted to regenerate Hay, his home town in New South Wales, in Australia.",
        distractorWrongRu: {
          2: "New Hampshire is not mentioned.",
          3: "The text says New South Wales, in Australia; the country answer is Australia."
        }
      },
      {
        examNum: 7,
        prompt: "What makes people travel to book towns?",
        key: 3,
        choices: [
          { num: 1, text: "Affordable accommodation to stay overnight." },
          { num: 2, text: "A chance to get some physical activities." },
          { num: 3, text: "Desire for tangible, homemade experience." }
        ],
        explainRu:
          "People are happy to travel for something practical, handmade, traditional, something you can hold and smell and touch — a proper physical experience.",
        distractorWrongRu: {
          1: "Low rents are for businesses, not accommodation for visitors.",
          2: "Physical experience here means tangible books, not sport activities."
        }
      },
      {
        examNum: 8,
        prompt: "What is true about people in book towns?",
        key: 1,
        choices: [
          { num: 1, text: "They tend to be practical and realistic." },
          { num: 2, text: "They are creative and like to brainstorm their ideas." },
          { num: 3, text: "They make fortunes by selling secondhand books." }
        ],
        explainRu:
          "Jemima says people involved in book selling must be business-minded and hard-headed, otherwise it won't work.",
        distractorWrongRu: {
          2: "Creative hubs are mentioned, but not as the required character trait of book sellers.",
          3: "She says nobody is going to make billions."
        }
      },
      {
        examNum: 9,
        prompt: "Which distinguishes a book town in South Korea from others?",
        key: 1,
        choices: [
          { num: 1, text: "It has no citizens." },
          { num: 2, text: "It does a literary festival." },
          { num: 3, text: "It has a new book museum." }
        ],
        explainRu:
          "Paju Book City in South Korea: its major hallmark is that people don't live there; they come in to work there.",
        distractorWrongRu: {
          2: "Literary festival refers to Wigtown in Scotland.",
          3: "New book museum refers to Hay."
        }
      }
    ],
    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Broadcasting live around the globe on Radio Sundae is David Silverspoon. Hope, you started your weekend right by waking up to the breakfast show with my colleagues, Sarah and Jessica. Your day just got a whole lot better, and you are now ready to travel around the world with our guest, Jemima Foxcraft. Hi, Jemima! How are you today?"
          },
          {
            speaker: "Jemima Foxcraft",
            text:
              "Hello, David. I'm fine, thank you. Much better than yesterday. The weather was terrible, wasn't it?"
          },
          {
            speaker: "Presenter",
            text:
              "It was raining hailstones as big as eggs. But I wouldn't expect anything different from Friday the 13th."
          },
          { speaker: "Jemima Foxcraft", text: "Neither would I (laughing)." }
        ]
      },
      {
        turns: [
          { speaker: "Presenter", text: "So, Jemima, where will you take us today?" },
          {
            speaker: "Jemima Foxcraft",
            text:
              "I want to take you on a tour around small, picturesque towns full of bookshops and book-related industries. So, we are off for book towns!"
          },
          { speaker: "Presenter", text: "And what makes a town a book town?" },
          {
            speaker: "Jemima Foxcraft",
            text:
              "Well, having one book store or even two in a town doesn't turn it into a book town. You should have a real concentration of them, where people keen on reading might spend hours, or even days, browsing. While many cities have numerous book shops, book towns have them all in a small area, in order to create critical mass. They usually begin with a couple of second-hand book stores and later grow to offer new books, too."
          },
          { speaker: "Presenter", text: "Is that a recent movement?" },
          {
            speaker: "Jemima Foxcraft",
            text:
              "It depends on your age. They've been out and about for around half a century. Book towns have been springing up all over the globe since the 1970s. There are now dozens of them — from Australia and Finland to India and South Africa. I haven't been able to locate any in Russia or Argentina yet."
          },
          { speaker: "Presenter", text: "How did it all start? What's the rationale behind turning a town into a book town?" }
        ]
      },
      {
        turns: [
          {
            speaker: "Jemima Foxcraft",
            text:
              "As it turns out, it all started with an idea. Richard Booth wanted to regenerate Hay, his home town in New South Wales, in Australia. Things used to be economically slim, and the population was decreasing as younger people moved away into cities. So he strived to provide employment, keep people in Hay, and increase the influx of tourists."
          },
          { speaker: "Presenter", text: "Why not do it in metropolises?" },
          {
            speaker: "Jemima Foxcraft",
            text:
              "It is easier to do where rents are low — somewhere away from large cities. Moreover, after we've gone through everyone getting excited about e-books and online reading, having something practical and in your hand is something that people are happy to travel for. They're starting to come back to the idea of things that are handmade, things that are created in a traditional way, things you can hold and smell and touch. I think in locations that are particularly picturesque, those things come together, and people feel they are getting a proper physical experience."
          },
          {
            speaker: "Presenter",
            text:
              "It seems to me that there is a balance to keep between the charming nature of a book town, and this almost money-oriented logic."
          },
          {
            speaker: "Jemima Foxcraft",
            text:
              "Absolutely. People involved in book selling in small towns must be quite business-minded and hard-headed about it, otherwise it won't work. But I don't think anybody's going to make billions out of selling second-hand books, so it's got to be people who are doing it for the love of it. And it's not only about bookselling. Book towns become creative hubs, where there's plenty to do and see — and the books are just the jumping-off point."
          }
        ]
      },
      {
        turns: [
          { speaker: "Presenter", text: "So, where should I start if I am to visit one of them?" },
          {
            speaker: "Jemima Foxcraft",
            text:
              "If you have the means, or you live in the Southern Hemisphere, go to Hay. Simply because that's the first book town ever. They have a wide range of bookshops, and there's a new book museum opening later this year. Another one would be Paju Book City in South Korea. Its major hallmark is that people don't live there, unlike in other book towns. They come in to work there, and everything there is book-related. My third choice would be Wigtown, in Scotland. It's a vivid example of a place that was regenerated by book selling. Some twenty years ago it was having a hard time — industries were closing and people were moving out. And they've absolutely turned it around — going from nothing, to doing a big literary festival and spin-offs. And the setting is amazing."
          }
        ]
      }
    ],
    huntLabs: [
      {
        examNum: 3,
        key: 2,
        paragraphIndex: 0,
        keyLineRu: "Yesterday was Friday the 13th; today is Saturday.",
        explainRu: "Friday was yesterday, so the programme runs on Saturday.",
        evidencePromptRu: "Найди yesterday + Friday the 13th.",
        segments: [
          { kind: "hit", sol: "e", text: "Friday the 13th" },
          { kind: "hit", sol: "e", text: "yesterday" }
        ]
      },
      {
        examNum: 4,
        key: 2,
        paragraphIndex: 1,
        keyLineRu: "Scenic locations and concentration of bookshops are mentioned; economic factors are not named as a feature.",
        explainRu: "Economic factors are background/rationale, not a feature in the list.",
        evidencePromptRu: "Сравни features: picturesque + concentration.",
        segments: [
          { kind: "hit", sol: "e", text: "picturesque towns full of bookshops" },
          { kind: "hit", sol: "e", text: "a real concentration of them" }
        ]
      },
      {
        examNum: 5,
        key: 1,
        paragraphIndex: 1,
        keyLineRu: "I haven't been able to locate any in Russia or Argentina yet.",
        explainRu: "Argentina is the country from the options without book towns.",
        evidencePromptRu: "Найди страну, где book towns not located.",
        segments: [
          { kind: "hit", sol: "e", text: "I haven't been able to locate any in Russia or Argentina yet" }
        ]
      },
      {
        examNum: 6,
        key: 1,
        paragraphIndex: 2,
        keyLineRu: "Richard Booth wanted to regenerate Hay, his home town in New South Wales, in Australia.",
        explainRu: "The first idea came from Australia.",
        evidencePromptRu: "Найди Richard Booth + Australia.",
        segments: [
          { kind: "hit", sol: "e", text: "New South Wales, in Australia" }
        ]
      },
      {
        examNum: 7,
        key: 3,
        paragraphIndex: 2,
        keyLineRu: "People travel for handmade, traditional, tangible things.",
        explainRu: "Something you can hold and smell and touch = tangible physical experience.",
        evidencePromptRu: "Найди tangible / physical experience.",
        segments: [
          { kind: "hit", sol: "e", text: "things that are handmade" },
          { kind: "hit", sol: "e", text: "things you can hold and smell and touch" },
          { kind: "hit", sol: "e", text: "a proper physical experience" }
        ]
      },
      {
        examNum: 8,
        key: 1,
        paragraphIndex: 2,
        keyLineRu: "Book sellers must be business-minded and hard-headed.",
        explainRu: "This means practical and realistic.",
        evidencePromptRu: "Найди business-minded / hard-headed.",
        segments: [
          { kind: "hit", sol: "e", text: "business-minded and hard-headed" },
          { kind: "hit", sol: "d", text: "make billions out of selling second-hand books", wrongOption: 3, distractExplainRu: "Она говорит, что миллиардов не заработают." }
        ]
      },
      {
        examNum: 9,
        key: 1,
        paragraphIndex: 3,
        keyLineRu: "Paju Book City: people don't live there.",
        explainRu: "No citizens distinguishes the South Korean book town.",
        evidencePromptRu: "Найди особенность Paju Book City.",
        segments: [
          { kind: "hit", sol: "e", text: "people don't live there" },
          { kind: "hit", sol: "d", text: "a new book museum", wrongOption: 3, distractExplainRu: "New book museum refers to Hay." },
          { kind: "hit", sol: "d", text: "a big literary festival", wrongOption: 2, distractExplainRu: "Literary festival refers to Wigtown." }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Presenter",
        label: "Presenter (David Silverspoon)",
        fullText:
          "Broadcasting live around the globe on Radio Sundae is David Silverspoon. Hope, you started your weekend right by waking up to the breakfast show with my colleagues, Sarah and Jessica. Your day just got a whole lot better, and you are now ready to travel around the world with our guest, Jemima Foxcraft. Hi, Jemima! How are you today? It was raining hailstones as big as eggs. But I wouldn't expect anything different from Friday the 13th. So, Jemima, where will you take us today? And what makes a town a book town? Is that a recent movement? How did it all start? What's the rationale behind turning a town into a book town? Why not do it in metropolises? It seems to me that there is a balance to keep between the charming nature of a book town, and this almost money-oriented logic. So, where should I start if I am to visit one of them?",
        phrases: [
          { en: "broadcasting live around the globe", ru: "в прямом эфире по всему миру" },
          { en: "started your weekend right", ru: "хорошо начали выходные", tip: "3" },
          { en: "breakfast show", ru: "утреннее шоу" },
          { en: "travel around the world", ru: "путешествовать по миру" },
          { en: "hailstones as big as eggs", ru: "градины размером с яйца" },
          { en: "Friday the 13th", ru: "пятница, 13-е", tip: "3 · Saturday" },
          { en: "what makes a town a book town", ru: "что делает город книжным" },
          { en: "recent movement", ru: "недавнее движение" },
          { en: "rationale behind", ru: "логика / обоснование" },
          { en: "metropolises", ru: "мегаполисы" },
          { en: "charming nature", ru: "очаровательная природа" },
          { en: "money-oriented logic", ru: "коммерческая логика" }
        ],
        chunks: [
          { text: "Broadcasting live around the globe on Radio Sundae is David Silverspoon. Hope, you started your weekend right by waking up to the breakfast show with my colleagues, Sarah and Jessica.", showText: true },
          { text: "Your day just got a whole lot better, and you are now ready to travel around the world with our guest, Jemima Foxcraft. Hi, Jemima! How are you today?", showText: true },
          { text: "It was raining hailstones as big as eggs. But I wouldn't expect anything different from Friday the 13th.", showText: true },
          { text: "So, Jemima, where will you take us today? And what makes a town a book town? Is that a recent movement?", showText: true },
          { text: "How did it all start? What's the rationale behind turning a town into a book town? Why not do it in metropolises?", showText: true },
          { text: "It seems to me that there is a balance to keep between the charming nature of a book town, and this almost money-oriented logic. So, where should I start if I am to visit one of them?", showText: false }
        ]
      },
      {
        id: "Jemima Foxcraft",
        label: "Jemima Foxcraft",
        fullText:
          "Hello, David. I'm fine, thank you. Much better than yesterday. The weather was terrible, wasn't it? Neither would I. I want to take you on a tour around small, picturesque towns full of bookshops and book-related industries. So, we are off for book towns! Well, having one book store or even two in a town doesn't turn it into a book town. You should have a real concentration of them, where people keen on reading might spend hours, or even days, browsing. While many cities have numerous book shops, book towns have them all in a small area, in order to create critical mass. They usually begin with a couple of second-hand book stores and later grow to offer new books, too. It depends on your age. They've been out and about for around half a century. Book towns have been springing up all over the globe since the 1970s. There are now dozens of them — from Australia and Finland to India and South Africa. I haven't been able to locate any in Russia or Argentina yet. As it turns out, it all started with an idea. Richard Booth wanted to regenerate Hay, his home town in New South Wales, in Australia. Things used to be economically slim, and the population was decreasing as younger people moved away into cities. So he strived to provide employment, keep people in Hay, and increase the influx of tourists. It is easier to do where rents are low — somewhere away from large cities. Moreover, after we've gone through everyone getting excited about e-books and online reading, having something practical and in your hand is something that people are happy to travel for. They're starting to come back to the idea of things that are handmade, things that are created in a traditional way, things you can hold and smell and touch. I think in locations that are particularly picturesque, those things come together, and people feel they are getting a proper physical experience. Absolutely. People involved in book selling in small towns must be quite business-minded and hard-headed about it, otherwise it won't work. But I don't think anybody's going to make billions out of selling second-hand books, so it's got to be people who are doing it for the love of it. And it's not only about bookselling. Book towns become creative hubs, where there's plenty to do and see — and the books are just the jumping-off point. If you have the means, or you live in the Southern Hemisphere, go to Hay. Simply because that's the first book town ever. They have a wide range of bookshops, and there's a new book museum opening later this year. Another one would be Paju Book City in South Korea. Its major hallmark is that people don't live there, unlike in other book towns. They come in to work there, and everything there is book-related. My third choice would be Wigtown, in Scotland. It's a vivid example of a place that was regenerated by book selling. Some twenty years ago it was having a hard time — industries were closing and people were moving out. And they've absolutely turned it around — going from nothing, to doing a big literary festival and spin-offs. And the setting is amazing.",
        phrases: [
          { en: "picturesque towns full of bookshops", ru: "живописные города, полные книжных магазинов", tip: "4" },
          { en: "book-related industries", ru: "отрасли, связанные с книгами" },
          { en: "real concentration", ru: "настоящая концентрация", tip: "4" },
          { en: "people keen on reading", ru: "люди, увлечённые чтением" },
          { en: "critical mass", ru: "критическая масса" },
          { en: "second-hand book stores", ru: "магазины подержанных книг" },
          { en: "half a century", ru: "полвека" },
          { en: "since the 1970s", ru: "с 1970-х" },
          { en: "Finland to India", ru: "от Финляндии до Индии", tip: "5 · trap" },
          { en: "Russia or Argentina yet", ru: "в России или Аргентине пока", tip: "5 · key" },
          { en: "regenerate Hay", ru: "возродить Hay", tip: "6" },
          { en: "New South Wales, in Australia", ru: "Новый Южный Уэльс, Австралия", tip: "6 · key" },
          { en: "provide employment", ru: "дать работу" },
          { en: "increase the influx of tourists", ru: "увеличить приток туристов" },
          { en: "where rents are low", ru: "там, где аренда низкая" },
          { en: "something practical and in your hand", ru: "что-то практическое и в руках", tip: "7" },
          { en: "handmade", ru: "сделанное вручную", tip: "7" },
          { en: "hold and smell and touch", ru: "держать, нюхать и трогать", tip: "7" },
          { en: "proper physical experience", ru: "настоящий физический опыт", tip: "7" },
          { en: "business-minded and hard-headed", ru: "деловые и трезвомыслящие", tip: "8" },
          { en: "make billions", ru: "заработать миллиарды", tip: "8 · trap" },
          { en: "creative hubs", ru: "творческие центры" },
          { en: "jumping-off point", ru: "отправная точка" },
          { en: "first book town ever", ru: "первый книжный город в истории" },
          { en: "new book museum", ru: "новый книжный музей", tip: "9 · trap" },
          { en: "Paju Book City", ru: "Paju Book City", tip: "9" },
          { en: "people don't live there", ru: "люди там не живут", tip: "9 · key" },
          { en: "big literary festival", ru: "большой литературный фестиваль", tip: "9 · trap" }
        ],
        chunks: [
          { text: "I want to take you on a tour around small, picturesque towns full of bookshops and book-related industries. So, we are off for book towns!", showText: true },
          { text: "Well, having one book store or even two in a town doesn't turn it into a book town. You should have a real concentration of them, where people keen on reading might spend hours, or even days, browsing.", showText: true },
          { text: "While many cities have numerous book shops, book towns have them all in a small area, in order to create critical mass. They usually begin with a couple of second-hand book stores and later grow to offer new books, too.", showText: true },
          { text: "They've been out and about for around half a century. Book towns have been springing up all over the globe since the 1970s. There are now dozens of them — from Australia and Finland to India and South Africa.", showText: true },
          { text: "I haven't been able to locate any in Russia or Argentina yet.", showText: true },
          { text: "As it turns out, it all started with an idea. Richard Booth wanted to regenerate Hay, his home town in New South Wales, in Australia.", showText: true },
          { text: "Things used to be economically slim, and the population was decreasing as younger people moved away into cities. So he strived to provide employment, keep people in Hay, and increase the influx of tourists.", showText: true },
          { text: "It is easier to do where rents are low — somewhere away from large cities. Moreover, after we've gone through everyone getting excited about e-books and online reading, having something practical and in your hand is something that people are happy to travel for.", showText: true },
          { text: "They're starting to come back to the idea of things that are handmade, things that are created in a traditional way, things you can hold and smell and touch. I think in locations that are particularly picturesque, those things come together, and people feel they are getting a proper physical experience.", showText: true },
          { text: "People involved in book selling in small towns must be quite business-minded and hard-headed about it, otherwise it won't work. But I don't think anybody's going to make billions out of selling second-hand books, so it's got to be people who are doing it for the love of it.", showText: true },
          { text: "Book towns become creative hubs, where there's plenty to do and see — and the books are just the jumping-off point.", showText: true },
          { text: "If you have the means, or you live in the Southern Hemisphere, go to Hay. Simply because that's the first book town ever. They have a wide range of bookshops, and there's a new book museum opening later this year.", showText: true },
          { text: "Another one would be Paju Book City in South Korea. Its major hallmark is that people don't live there, unlike in other book towns. They come in to work there, and everything there is book-related.", showText: true },
          { text: "My third choice would be Wigtown, in Scotland. It's a vivid example of a place that was regenerated by book selling. Some twenty years ago it was having a hard time — industries were closing and people were moving out. And they've absolutely turned it around — going from nothing, to doing a big literary festival and spin-offs. And the setting is amazing.", showText: false }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
