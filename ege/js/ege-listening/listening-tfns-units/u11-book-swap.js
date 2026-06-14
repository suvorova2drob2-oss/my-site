/**
 * ЕГЭ Listening TFNS · Unit 11 · Book swap (Edward & Sheryl).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u11-book-swap",
    unitOrder: 11,
    title: "Unit 11 · Book swap",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Edward & Sheryl · school book swap",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/11/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2011%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>диалог</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть:</strong></p><ul>" +
      "<li><strong>A</strong> — Sheryl still has a runny nose and cough → True.</li>" +
      "<li><strong>B</strong> — Ms Green says the event is free/easy/saves money/encourages reading → True.</li>" +
      "<li><strong>C</strong> — Sheryl говорит о некоторых books they didn't like, not that she doesn't like reading → False.</li>" +
      "<li><strong>D</strong> — Edward suggests a lottery fundraiser to cover drinks, not selling drinks → False.</li>" +
      "<li><strong>E</strong> — atmosphere = social atmosphere, not a book about Earth → False.</li>" +
      "<li><strong>F</strong> — direct swap is called awkward/inefficient; bins are suggested → False.</li>" +
      "<li><strong>G</strong> — social media event is Sheryl's idea, not Edward's → False.</li>" +
      "</ul>",
    statements: [
      { letter: "A", text: "Sheryl is not feeling well." },
      { letter: "B", text: "Ms. Green believes that a book swap is a good idea." },
      { letter: "C", text: "Sheryl doesn't like reading books." },
      { letter: "D", text: "Edward thinks that they may raise money by selling drinks." },
      { letter: "E", text: "Edward has a book about Earth's atmosphere." },
      { letter: "F", text: "Sheryl suggests organizing a direct swap of books among students." },
      { letter: "G", text: "Edward suggests creating an event on social media." }
    ],
    key: {
      A: "t",
      B: "t",
      C: "f",
      D: "f",
      E: "f",
      F: "f",
      G: "f"
    },
    dialogueParagraphs: [
      {
        turns: [
          { speaker: "Edward", text: "Mom? Dad? Sheryl? Anybody home?" },
          { speaker: "Sheryl", text: "Ed? Are you back from school?" },
          { speaker: "Edward", text: "Yes. Sheryl, how are you? Feeling better?" },
          {
            speaker: "Sheryl",
            text:
              "I've still got a runny nose and keep on coughing, but I've stopped running a temperature. I wonder if you would like to join me for lunch?"
          },
          { speaker: "Edward", text: "With pleasure. I also have a project to discuss." },
          { speaker: "Sheryl", text: "What's that?" },
          { speaker: "Edward", text: "We're to organize a book swap." },
          { speaker: "Sheryl", text: "What?" }
        ]
      },
      {
        turns: [
          {
            speaker: "Edward",
            text:
              "The idea is that anyone from our school can show up, bring spare books and magazines, and help themselves to what others have brought in. Ms. Green says it's free and easy and saves everyone a lot of money they normally splash out. She also wants everyone to buzz about their new finds for weeks, and, definitely, encourage our lot to read more."
          },
          { speaker: "Sheryl", text: "Sounds reasonable. Ed, we have piles of books on our shelves that might never get read or those we've leafed through and didn't like." },
          { speaker: "Edward", text: "True." },
          {
            speaker: "Sheryl",
            text:
              "Though it might be interesting to rummage through other people's books, I don't think there'd be a lot of eager people to do that."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Edward",
            text:
              "When you come to think of it, everybody loves bread and circuses. So, Sheryl, to make them come we should think of entertainment. To create a more social atmosphere, we may offer refreshments. We may also organize a lottery as part entertainment and part fundraiser to cover the costs of drinks."
          },
          {
            speaker: "Sheryl",
            text:
              "Ed, that's a lovely idea. Cakes, warm drinks, popcorn and some other easily served nibbles will make the event more fun. We may even ask people to help out in that way. They may bring something with them too."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Edward",
            text:
              "Ok! We've got the atmosphere covered, but, all things considered, it can be awkward and inefficient for students to have to swap books with each other directly. Any ideas here?"
          },
          {
            speaker: "Sheryl",
            text:
              "Well, we may put out bins labelled with 'Classics', 'Fantasy', 'Memoirs', 'Detectives', and even 'Random' and ask people to organize the books they've brought into the bins provided. And as they move around, they are free to browse what's already there and take what they are interested in. By the way, who is going to get the word out that we're having the event?"
          },
          {
            speaker: "Edward",
            text:
              "Hmm, it's the trickiest part. We may create a low-ink poster that we can easily print at home on a coloured paper. Then we'll share it on notice boards at school. We may also ask our peers to spread the word during their extracurricular activities."
          },
          {
            speaker: "Sheryl",
            text:
              "And! There're social media! We may create a social net 'event' and then invite our friends. Some might even blog about the event."
          },
          { speaker: "Edward", text: "Oh! It's bound to be a success! Thank you, Sheryl!" },
          { speaker: "Sheryl", text: "My pleasure!" }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        answer: "t",
        keyLineRu: "Sheryl still has a runny nose and cough.",
        evidencePromptRu: "<strong>A.</strong> Найдите симптомы Sheryl.",
        segments: [
          { kind: "hit", sol: "e", text: "I've still got a runny nose and keep on coughing", explainRu: "Она ещё не здорова → True." }
        ]
      },
      {
        letter: "B",
        answer: "t",
        keyLineRu: "Ms. Green says it is free/easy/saves money and encourages reading.",
        evidencePromptRu: "<strong>B.</strong> Найдите, что говорит Ms. Green.",
        segments: [
          { kind: "hit", sol: "e", text: "Ms. Green says it's free and easy and saves everyone a lot of money", explainRu: "Ms Green считает идею полезной → True." },
          { kind: "hit", sol: "e", text: "encourage our lot to read more", explainRu: "Ещё один плюс book swap." }
        ]
      },
      {
        letter: "C",
        answer: "f",
        keyLineRu: "Sheryl only says some books were leafed through and disliked.",
        evidencePromptRu: "<strong>C.</strong> Проверьте, говорит ли она, что не любит чтение.",
        segments: [
          { kind: "hit", sol: "e", text: "books on our shelves that might never get read or those we've leafed through and didn't like", explainRu: "Речь о некоторых books, не о dislike reading → False." }
        ]
      },
      {
        letter: "D",
        answer: "f",
        keyLineRu: "Lottery fundraiser to cover drinks, not selling drinks.",
        evidencePromptRu: "<strong>D.</strong> Найдите, как собираются покрывать costs of drinks.",
        segments: [
          { kind: "hit", sol: "e", text: "organize a lottery as part entertainment and part fundraiser to cover the costs of drinks", explainRu: "Lottery, not selling drinks → False." }
        ]
      },
      {
        letter: "E",
        answer: "f",
        keyLineRu: "Atmosphere means social atmosphere, not Earth's atmosphere.",
        evidencePromptRu: "<strong>E.</strong> Найдите atmosphere в контексте.",
        segments: [
          { kind: "hit", sol: "e", text: "We've got the atmosphere covered", explainRu: "Это про event atmosphere, не книгу → False." }
        ]
      },
      {
        letter: "F",
        answer: "f",
        keyLineRu: "Direct swap is awkward and inefficient; Sheryl suggests bins.",
        evidencePromptRu: "<strong>F.</strong> Найдите direct swap and bins.",
        segments: [
          { kind: "hit", sol: "e", text: "awkward and inefficient for students to have to swap books with each other directly", explainRu: "Direct swap отвергается → False." },
          { kind: "hit", sol: "e", text: "put out bins labelled with 'Classics', 'Fantasy', 'Memoirs', 'Detectives'", explainRu: "Sheryl предлагает bins, не direct swap." }
        ]
      },
      {
        letter: "G",
        answer: "f",
        keyLineRu: "Sheryl suggests social media event, not Edward.",
        evidencePromptRu: "<strong>G.</strong> Найдите, кто предлагает social media.",
        segments: [
          { kind: "hit", sol: "e", text: "There're social media! We may create a social net 'event'", explainRu: "Это говорит Sheryl → False for Edward." }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Edward",
        label: "Edward",
        fullText:
          "Mom? Dad? Sheryl? Anybody home? Yes. Sheryl, how are you? Feeling better? With pleasure. I also have a project to discuss. We're to organize a book swap. The idea is that anyone from our school can show up, bring spare books and magazines, and help themselves to what others have brought in. Ms. Green says it's free and easy and saves everyone a lot of money they normally splash out. She also wants everyone to buzz about their new finds for weeks, and, definitely, encourage our lot to read more. True. When you come to think of it, everybody loves bread and circuses. So, Sheryl, to make them come we should think of entertainment. To create a more social atmosphere, we may offer refreshments. We may also organize a lottery as part entertainment and part fundraiser to cover the costs of drinks. Ok! We've got the atmosphere covered, but, all things considered, it can be awkward and inefficient for students to have to swap books with each other directly. Any ideas here? Hmm, it's the trickiest part. We may create a low-ink poster that we can easily print at home on a coloured paper. Then we'll share it on notice boards at school. We may also ask our peers to spread the word during their extracurricular activities. Oh! It's bound to be a success! Thank you, Sheryl!",
        phrases: [
          { en: "book swap", ru: "обмен книгами" },
          { en: "spare books and magazines", ru: "лишние книги и журналы" },
          { en: "help themselves to what others have brought in", ru: "взять то, что принесли другие" },
          { en: "free and easy", ru: "бесплатно и просто", tip: "B" },
          { en: "saves everyone a lot of money", ru: "экономит всем много денег", tip: "B" },
          { en: "encourage our lot to read more", ru: "побудить наших больше читать", tip: "B" },
          { en: "bread and circuses", ru: "хлеб и зрелища" },
          { en: "social atmosphere", ru: "социальная атмосфера", tip: "E trap" },
          { en: "lottery as part entertainment and part fundraiser", ru: "лотерея как развлечение и сбор средств", tip: "D" },
          { en: "awkward and inefficient", ru: "неловко и неэффективно", tip: "F" },
          { en: "low-ink poster", ru: "плакат с малым расходом чернил" },
          { en: "spread the word", ru: "распространить информацию" }
        ],
        chunks: [
          { text: "Mom? Dad? Sheryl? Anybody home? Yes. Sheryl, how are you? Feeling better? With pleasure. I also have a project to discuss. We're to organize a book swap.", showText: true },
          { text: "The idea is that anyone from our school can show up, bring spare books and magazines, and help themselves to what others have brought in.", showText: true },
          { text: "Ms. Green says it's free and easy and saves everyone a lot of money they normally splash out. She also wants everyone to buzz about their new finds for weeks, and, definitely, encourage our lot to read more.", showText: true },
          { text: "When you come to think of it, everybody loves bread and circuses. So, Sheryl, to make them come we should think of entertainment. To create a more social atmosphere, we may offer refreshments.", showText: true },
          { text: "We may also organize a lottery as part entertainment and part fundraiser to cover the costs of drinks.", showText: true },
          { text: "Ok! We've got the atmosphere covered, but, all things considered, it can be awkward and inefficient for students to have to swap books with each other directly. Any ideas here?", showText: true },
          { text: "Hmm, it's the trickiest part. We may create a low-ink poster that we can easily print at home on a coloured paper. Then we'll share it on notice boards at school. We may also ask our peers to spread the word during their extracurricular activities. Oh! It's bound to be a success! Thank you, Sheryl!", showText: false }
        ]
      },
      {
        id: "Sheryl",
        label: "Sheryl",
        fullText:
          "Ed? Are you back from school? I've still got a runny nose and keep on coughing, but I've stopped running a temperature. I wonder if you would like to join me for lunch? What's that? What? Sounds reasonable. Ed, we have piles of books on our shelves that might never get read or those we've leafed through and didn't like. Though it might be interesting to rummage through other people's books, I don't think there'd be a lot of eager people to do that. Ed, that's a lovely idea. Cakes, warm drinks, popcorn and some other easily served nibbles will make the event more fun. We may even ask people to help out in that way. They may bring something with them too. Well, we may put out bins labelled with 'Classics', 'Fantasy', 'Memoirs', 'Detectives', and even 'Random' and ask people to organize the books they've brought into the bins provided. And as they move around, they are free to browse what's already there and take what they are interested in. By the way, who is going to get the word out that we're having the event? And! There're social media! We may create a social net 'event' and then invite our friends. Some might even blog about the event. My pleasure!",
        phrases: [
          { en: "runny nose", ru: "насморк", tip: "A" },
          { en: "keep on coughing", ru: "продолжаю кашлять", tip: "A" },
          { en: "stopped running a temperature", ru: "перестала температурить" },
          { en: "piles of books", ru: "кучи книг" },
          { en: "leafed through and didn't like", ru: "пролистали и не понравились", tip: "C" },
          { en: "rummage through other people's books", ru: "копаться в чужих книгах" },
          { en: "eager people", ru: "заинтересованные люди" },
          { en: "warm drinks", ru: "тёплые напитки" },
          { en: "easily served nibbles", ru: "лёгкие закуски" },
          { en: "bins labelled with Classics", ru: "контейнеры с надписью Classics", tip: "F" },
          { en: "free to browse", ru: "могут свободно просматривать" },
          { en: "social net event", ru: "событие в соцсети", tip: "G" }
        ],
        chunks: [
          { text: "Ed? Are you back from school? I've still got a runny nose and keep on coughing, but I've stopped running a temperature. I wonder if you would like to join me for lunch?", showText: true },
          { text: "Sounds reasonable. Ed, we have piles of books on our shelves that might never get read or those we've leafed through and didn't like.", showText: true },
          { text: "Though it might be interesting to rummage through other people's books, I don't think there'd be a lot of eager people to do that.", showText: true },
          { text: "Ed, that's a lovely idea. Cakes, warm drinks, popcorn and some other easily served nibbles will make the event more fun. We may even ask people to help out in that way. They may bring something with them too.", showText: true },
          { text: "Well, we may put out bins labelled with 'Classics', 'Fantasy', 'Memoirs', 'Detectives', and even 'Random' and ask people to organize the books they've brought into the bins provided.", showText: true },
          { text: "And as they move around, they are free to browse what's already there and take what they are interested in. By the way, who is going to get the word out that we're having the event?", showText: true },
          { text: "And! There're social media! We may create a social net 'event' and then invite our friends. Some might even blog about the event. My pleasure!", showText: false }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
