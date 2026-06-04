/**
 * ЕГЭ Listening MC · Unit 13 · Donald Thatcher · children's book.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u13-donald-thatcher",
    unitOrder: 13,
    title: "Unit 13 · Donald Thatcher",
    examSection: "§3 · Multiple Choice",
    headerTitle: "Alice Fraiser & Donald Thatcher · The Slimy Tree",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/13/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2013%20(mp3cut.net)%20(2).mp3",
    instructionHtml:
      "Вы услышите <strong>интервью</strong>. В заданиях <strong>3–9</strong> выберите <strong>один</strong> из трёх вариантов ответа. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Donald Thatcher:</strong> Dolly the Beast was screened; attic contained many things but not a tree branch; wife sorts notes into boxes; The Slimy Tree will be online in English; publishers choose official illustrations.</p>",
    questions: [
      {
        examNum: 3,
        prompt: "Which is TRUE about Donald's best book?",
        key: 2,
        choices: [
          { num: 1, text: "It is a story for kids." },
          { num: 2, text: "It was turned into a movie." },
          { num: 3, text: "It has official sequels and prequels." }
        ],
        explainRu:
          "Presenter says Donald's major work Dolly the Beast has been successfully screened and caught on. Fans created prequels/sequels, but not official ones.",
        distractorWrongRu: {
          1: "The new manuscript is a children's book; the question is about Donald's major/best book.",
          3: "Fans created prequels and sequels, not official ones."
        }
      },
      {
        examNum: 4,
        prompt: "Which was NOT in the attic?",
        key: 1,
        choices: [
          { num: 1, text: "A branch of a tree." },
          { num: 2, text: "A family photo album." },
          { num: 3, text: "Twelve soft toy bears." }
        ],
        explainRu:
          "In the attic there were grandparents' pictures in a leather book and a dozen teddy bears. A paper said 'A slimy tree', but not a tree branch.",
        distractorWrongRu: {
          2: "Grandparents' pictures in a leather book were found.",
          3: "A dozen teddy bears were found."
        }
      },
      {
        examNum: 5,
        prompt: "How does Donald's wife help him?",
        key: 3,
        choices: [
          { num: 1, text: "She drafts his ideas on paper." },
          { num: 2, text: "She rewrites his scribbles." },
          { num: 3, text: "She puts his notes in order." }
        ],
        explainRu:
          "His wife organises notes: she devised labelled shoe boxes and puts all notes she finds into them.",
        distractorWrongRu: {
          1: "Donald drafts ideas himself.",
          2: "She does not rewrite them."
        }
      },
      {
        examNum: 6,
        prompt: "Why did Donald put the manuscript of a new book into the attic?",
        key: 1,
        choices: [
          { num: 1, text: "He decided not to publish it eventually." },
          { num: 2, text: "He wanted to save it till better days." },
          { num: 3, text: "He intended to read it to his kids first." }
        ],
        explainRu:
          "He had intended to publish it, but held back and came to think of The Slimy Tree as just for his family, so it remained in the attic.",
        distractorWrongRu: {
          2: "He does not say he waited for better days.",
          3: "He read it to his kids before that, but this is not why it stayed in the attic."
        }
      },
      {
        examNum: 7,
        prompt: "To be able to read the book readers should...",
        key: 1,
        choices: [
          { num: 1, text: "speak English." },
          { num: 2, text: "live in the UK or USA." },
          { num: 3, text: "register on the website." }
        ],
        explainRu:
          "The chapters will be on the website, free to access, not limited to the UK/USA, and there for readers in English.",
        distractorWrongRu: {
          2: "You don't need to live in the UK or USA.",
          3: "You don't need to register or pay."
        }
      },
      {
        examNum: 8,
        prompt: "Donald wants his readers to...",
        key: 2,
        choices: [
          { num: 1, text: "follow him on social media." },
          { num: 2, text: "imagine the wild world." },
          { num: 3, text: "illustrate the story." }
        ],
        explainRu:
          "He asks readers not to restrain themselves and to let their imagination run wild. Drawing is optional for those who want.",
        distractorWrongRu: {
          1: "Social media is not mentioned.",
          3: "Drawings are invited, but the broader request is imagination."
        }
      },
      {
        examNum: 9,
        prompt: "Who is going to choose the drawings for the book?",
        key: 1,
        choices: [
          { num: 1, text: "Publishers." },
          { num: 2, text: "Donald himself." },
          { num: 3, text: "Ordinary people." }
        ],
        explainRu:
          "Donald says he will see and maybe comment, but he won't judge the competition. His publishers will decide which illustrations work best.",
        distractorWrongRu: {
          2: "Donald explicitly says he won't be judging.",
          3: "Ordinary people can submit drawings, not choose the winners."
        }
      }
    ],
    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Good morning to you all! Alice Fraiser and Donald Thatcher are here for you today. As you know, Donald is a well-known writer of young adult fiction and stories for children. His major work, Dolly the Beast, has been successfully screened and caught on at once, hasn't it?"
          },
          {
            speaker: "Donald Thatcher",
            text:
              "Hi, Alice! Oh, yes! It has. There's now a whole community of fans who come up with their own prequels, sequels, and side-stories. And I'm here today to say thank you to you guys! Without you, nothing would have been possible!"
          },
          {
            speaker: "Presenter",
            text:
              "Donald, while preparing for the program, you mentioned that there is a surprise you wanted to share. What is it?"
          },
          {
            speaker: "Donald Thatcher",
            text:
              "To answer this question, I should go a few months back. I was going to surprise my family and bake a Christmas cake full of raisins, cherries, and sultanas..."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text: "Umm. Sounds delicious."
          },
          {
            speaker: "Donald Thatcher",
            text:
              "It does. So, I was in the middle of making dough, when I realised that a perfect baking tray is nowhere to be seen. So, I climbed upstairs to the attic to find it. Instead, I stumbled upon a lot of amazing things: an old swing set, a collection of my great grandparents' pictures in a leather book, my wife's premiere dresses, a dozen of teddy bears, and a dusty shoebox with a piece of paper attached. It said: \"A slimy tree.\" I got it down and opened it."
          },
          { speaker: "Presenter", text: "Was the tray inside?" },
          { speaker: "Donald Thatcher", text: "Even better. There was a manuscript of a children's book." },
          { speaker: "Presenter", text: "How did it end up there?" }
        ]
      },
      {
        turns: [
          {
            speaker: "Donald Thatcher",
            text:
              "That's obvious, actually. When I work on a book, I drift into a habit of drafting its chapters whenever the idea comes to me. So, there is always a gazillion of papers, sticky notes and even tissues from coffee shops with my notes scribbled on them. My wife helps me to organise them. She devised a system of labelled shoe boxes, and puts all the notes she finds into them. This particular box was dedicated to the story about a slimy tree."
          },
          { speaker: "Presenter", text: "Didn't you want to publish it?" },
          {
            speaker: "Donald Thatcher",
            text:
              "I charted it out and read during the bed-story-time to my kids. They liked it. I did intend to publish it straight after the release of Dolly the Beast. But when this fantasy series made a hit, I held back. Over time I came to think of The Slimy Tree as just for my family. So, the manuscript went up into the attic, where it remained until this Christmas."
          }
        ]
      },
      {
        turns: [
          { speaker: "Presenter", text: "What are you going to do with the story now?" },
          {
            speaker: "Donald Thatcher",
            text:
              "I'd like to release it chapter by chapter on my website, with the entire book eventually being uploaded. It'll later be published as a physical book. You don't need to register or pay to get access to the book, nor to live in the UK or USA. The chapters are there for you to read in English."
          },
          {
            speaker: "Presenter",
            text:
              "Wow! That's a very generous gesture in our commercialized to the core world."
          },
          {
            speaker: "Donald Thatcher",
            text:
              "There's more! The coolest thing is that I'll upload chapters daily alongside my suggestions for what you, my dear readers, might like to draw. But, please, don't restrain yourselves and let your imagination run wild. The best artworks will be included in a published version of the book next year."
          },
          { speaker: "Presenter", text: "Will you choose the best works?" },
          {
            speaker: "Donald Thatcher",
            text:
              "I will be able to see them and, maybe, comment on them, but I won't be judging the competition. People from all over the world will have a chance to vote for the artworks online, but my publishers will decide which illustrations work best for their editions. So, here's a chance for you to get creative and to get featured in my new book. Get imagining, and good luck!"
          }
        ]
      }
    ],
    huntLabs: [
      { examNum: 3, key: 2, paragraphIndex: 0, keyLineRu: "Dolly the Beast was successfully screened.", explainRu: "Donald's major work was turned into a movie.", evidencePromptRu: "Найди successfully screened.", segments: [{ kind: "hit", sol: "e", text: "has been successfully screened" }] },
      { examNum: 4, key: 1, paragraphIndex: 1, keyLineRu: "There was a slimy tree note, but not a branch.", explainRu: "Attic contained family pictures and teddy bears, not a tree branch.", evidencePromptRu: "Найди список вещей в attic.", segments: [{ kind: "hit", sol: "e", text: "great grandparents' pictures in a leather book" }, { kind: "hit", sol: "e", text: "a dozen of teddy bears" }, { kind: "hit", sol: "d", text: "A slimy tree", wrongOption: 1, distractExplainRu: "Это надпись на бумаге, не branch." }] },
      { examNum: 5, key: 3, paragraphIndex: 2, keyLineRu: "His wife organises notes into labelled boxes.", explainRu: "She puts his notes in order.", evidencePromptRu: "Найди labelled shoe boxes.", segments: [{ kind: "hit", sol: "e", text: "organise them" }, { kind: "hit", sol: "e", text: "puts all the notes she finds into them" }] },
      { examNum: 6, key: 1, paragraphIndex: 2, keyLineRu: "He held back and came to think of it as just for family.", explainRu: "He decided not to publish it at that time.", evidencePromptRu: "Найди held back.", segments: [{ kind: "hit", sol: "e", text: "I held back" }, { kind: "hit", sol: "e", text: "just for my family" }] },
      { examNum: 7, key: 1, paragraphIndex: 3, keyLineRu: "The chapters are there to read in English.", explainRu: "Readers should be able to read English.", evidencePromptRu: "Найди read in English.", segments: [{ kind: "hit", sol: "e", text: "to read in English" }, { kind: "hit", sol: "d", text: "You don't need to register or pay", wrongOption: 3, distractExplainRu: "Register not needed." }, { kind: "hit", sol: "d", text: "nor to live in the UK or USA", wrongOption: 2, distractExplainRu: "Location not needed." }] },
      { examNum: 8, key: 2, paragraphIndex: 3, keyLineRu: "Let your imagination run wild.", explainRu: "Donald wants readers to imagine the wild world.", evidencePromptRu: "Найди imagination.", segments: [{ kind: "hit", sol: "e", text: "let your imagination run wild" }] },
      { examNum: 9, key: 1, paragraphIndex: 3, keyLineRu: "Publishers decide which illustrations work best.", explainRu: "Publishers choose the drawings for the book.", evidencePromptRu: "Найди publishers will decide.", segments: [{ kind: "hit", sol: "e", text: "my publishers will decide which illustrations work best" }, { kind: "hit", sol: "d", text: "I won't be judging", wrongOption: 2, distractExplainRu: "Donald himself won't judge." }] }
    ],
    shadowSpeakers: [
      {
        id: "Presenter",
        label: "Presenter (Alice Fraiser)",
        fullText:
          "Good morning to you all! Alice Fraiser and Donald Thatcher are here for you today. As you know, Donald is a well-known writer of young adult fiction and stories for children. His major work, Dolly the Beast, has been successfully screened and caught on at once, hasn't it? Donald, while preparing for the program, you mentioned that there is a surprise you wanted to share. What is it? Umm. Sounds delicious. Was the tray inside? How did it end up there? Didn't you want to publish it? What are you going to do with the story now? Wow! That's a very generous gesture in our commercialized to the core world. Will you choose the best works?",
        phrases: [
          { en: "young adult fiction", ru: "литература для young adults" },
          { en: "stories for children", ru: "истории для детей" },
          { en: "major work", ru: "главное произведение" },
          { en: "successfully screened", ru: "успешно экранизировано", tip: "3" },
          { en: "caught on at once", ru: "сразу стало популярным" },
          { en: "surprise you wanted to share", ru: "сюрприз, которым хотел поделиться" },
          { en: "commercialized to the core", ru: "коммерциализированный до предела" }
        ],
        chunks: [{ text: "Good morning to you all! Alice Fraiser and Donald Thatcher are here for you today. As you know, Donald is a well-known writer of young adult fiction and stories for children.", showText: true }, { text: "His major work, Dolly the Beast, has been successfully screened and caught on at once, hasn't it? Donald, while preparing for the program, you mentioned that there is a surprise you wanted to share. What is it?", showText: true }, { text: "Was the tray inside? How did it end up there? Didn't you want to publish it? What are you going to do with the story now? Will you choose the best works?", showText: false }]
      },
      {
        id: "Donald Thatcher",
        label: "Donald Thatcher",
        fullText:
          "Hi, Alice! Oh, yes! It has. There's now a whole community of fans who come up with their own prequels, sequels, and side-stories. And I'm here today to say thank you to you guys! Without you, nothing would have been possible! To answer this question, I should go a few months back. I was going to surprise my family and bake a Christmas cake full of raisins, cherries, and sultanas... It does. So, I was in the middle of making dough, when I realised that a perfect baking tray is nowhere to be seen. So, I climbed upstairs to the attic to find it. Instead, I stumbled upon a lot of amazing things: an old swing set, a collection of my great grandparents' pictures in a leather book, my wife's premiere dresses, a dozen of teddy bears, and a dusty shoebox with a piece of paper attached. It said: \"A slimy tree.\" I got it down and opened it. Even better. There was a manuscript of a children's book. That's obvious, actually. When I work on a book, I drift into a habit of drafting its chapters whenever the idea comes to me. So, there is always a gazillion of papers, sticky notes and even tissues from coffee shops with my notes scribbled on them. My wife helps me to organise them. She devised a system of labelled shoe boxes, and puts all the notes she finds into them. This particular box was dedicated to the story about a slimy tree. I charted it out and read during the bed-story-time to my kids. They liked it. I did intend to publish it straight after the release of Dolly the Beast. But when this fantasy series made a hit, I held back. Over time I came to think of The Slimy Tree as just for my family. So, the manuscript went up into the attic, where it remained until this Christmas. I'd like to release it chapter by chapter on my website, with the entire book eventually being uploaded. It'll later be published as a physical book. You don't need to register or pay to get access to the book, nor to live in the UK or USA. The chapters are there for you to read in English. There's more! The coolest thing is that I'll upload chapters daily alongside my suggestions for what you, my dear readers, might like to draw. But, please, don't restrain yourselves and let your imagination run wild. The best artworks will be included in a published version of the book next year. I will be able to see them and, maybe, comment on them, but I won't be judging the competition. People from all over the world will have a chance to vote for the artworks online, but my publishers will decide which illustrations work best for their editions. So, here's a chance for you to get creative and to get featured in my new book. Get imagining, and good luck!",
        phrases: [
          { en: "prequels, sequels, and side-stories", ru: "приквелы, сиквелы и побочные истории", tip: "3 trap" },
          { en: "baking tray", ru: "противень" },
          { en: "attic", ru: "чердак", tip: "4" },
          { en: "grandparents' pictures", ru: "фотографии прабабушки и прадедушки", tip: "4" },
          { en: "a dozen of teddy bears", ru: "дюжина плюшевых мишек", tip: "4" },
          { en: "manuscript of a children's book", ru: "рукопись детской книги" },
          { en: "labelled shoe boxes", ru: "подписанные коробки из-под обуви", tip: "5" },
          { en: "puts all the notes", ru: "кладёт все записки", tip: "5" },
          { en: "I held back", ru: "я притормозил / отложил", tip: "6" },
          { en: "just for my family", ru: "только для моей семьи", tip: "6" },
          { en: "chapter by chapter", ru: "глава за главой" },
          { en: "register or pay", ru: "регистрироваться или платить", tip: "7 trap" },
          { en: "read in English", ru: "читать по-английски", tip: "7" },
          { en: "let your imagination run wild", ru: "дать волю воображению", tip: "8" },
          { en: "my publishers will decide", ru: "мои издатели решат", tip: "9" }
        ],
        chunks: [{ text: "There's now a whole community of fans who come up with their own prequels, sequels, and side-stories. And I'm here today to say thank you to you guys!", showText: true }, { text: "I climbed upstairs to the attic to find it. Instead, I stumbled upon a lot of amazing things: an old swing set, a collection of my great grandparents' pictures in a leather book, my wife's premiere dresses, a dozen of teddy bears, and a dusty shoebox with a piece of paper attached.", showText: true }, { text: "It said: \"A slimy tree.\" I got it down and opened it. Even better. There was a manuscript of a children's book.", showText: true }, { text: "My wife helps me to organise them. She devised a system of labelled shoe boxes, and puts all the notes she finds into them.", showText: true }, { text: "I did intend to publish it straight after the release of Dolly the Beast. But when this fantasy series made a hit, I held back. Over time I came to think of The Slimy Tree as just for my family.", showText: true }, { text: "You don't need to register or pay to get access to the book, nor to live in the UK or USA. The chapters are there for you to read in English.", showText: true }, { text: "I'll upload chapters daily alongside my suggestions for what you, my dear readers, might like to draw. But, please, don't restrain yourselves and let your imagination run wild.", showText: true }, { text: "I won't be judging the competition. People from all over the world will have a chance to vote for the artworks online, but my publishers will decide which illustrations work best for their editions.", showText: false }]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
