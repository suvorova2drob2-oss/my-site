/**
 * OGE Listening MC · Unit 8 · Вариант 8 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u8-variant8-listening-mc",
    unitOrder: 8,
    title: "Unit 8 · Park, tickets and museum",
    examSection: "Tasks 1–4",
    headerTitle: "City Park · Linda · Jane · Neil",
    audioSrc: "audio/u8/listening-8.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услушите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "Welcome to City Park and we hope you have a great time here. Please, feel free to use all our facilities — you can run and have picnics on the grass, but collect all the waste when you leave, otherwise you may be fined for littering the park. There's a restriction on bikes, which are banned in our park due to a few unpleasant traffic accidents. If you come with your dog, please do not forget to clean up after it and always make sure your pet does not disturb the other guests."
      },
      {
        label: "B",
        body:
          "Hi, Max! It's Linda. I'm calling in case you are free this Saturday. My dad has bought four tickets for a football game for himself and his colleagues. Just now he's found out that two of them can't go. You can have their tickets if you want and if you've got a friend to go with you because it's either two or none. You understand, it'll be difficult afterwards to offer someone only one ticket. Call back soon as there are other people who wouldn't mind getting these tickets."
      },
      {
        label: "C",
        body:
          "Paul: Hi, Jane! Good to see you.\nJane: Hi, Paul.\nPaul: I've heard you've been abroad. Where did you go?\nJane: I went to Australia. It was the trip of a lifetime.\nPaul: Wow! Sounds fantastic. Were you there on business or just for a holiday?\nJane: Neither. I was taking a course on conservation projects.\nPaul: Conservation projects? What's that about?\nJane: It's about what we can do to save endangered animals. I've got a certificate and I'm qualified to work in national parks now.\nPaul: But you've already got your Diploma in management, haven't you?\nJane: Yes, but environmental problems worry me most now.\nPaul: I see."
      },
      {
        label: "D",
        body:
          "Kate: It looks so unusual. Neil, I didn't even know this place existed.\nNeil: Strange. It's right opposite your house, Kate.\nKate: Yeah. But I thought it was a souvenir shop or a restaurant.\nNeil: Now you've found out you have a national arts museum just in front of your window.\nKate: Yeah. Look at the exhibits — they are fantastic.\nNeil: The best thing about it is that it has exhibitions devoted to different cultures. In my opinion, it makes it much more interesting than other museums, where all the exhibits refer to only one nation.\nKate: Yes, it's striking how different lifestyles can be. We are all so different."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "The visitors of the park are not allowed to...",
        key: 3,
        choices: [
          { num: 1, text: "walk on the lawns." },
          { num: 2, text: "bring dogs to the park." },
          { num: 3, text: "ride bicycles." }
        ],
        explainRu: "Велосипеды в парке запрещены."
      },
      {
        examNum: 2,
        prompt: "How many tickets does Linda offer to Max?",
        key: 2,
        choices: [
          { num: 1, text: "One ticket." },
          { num: 2, text: "Two tickets." },
          { num: 3, text: "Four tickets." }
        ],
        explainRu: "Линда предлагает два билета: или оба, или ни одного."
      },
      {
        examNum: 3,
        prompt: "Jane went abroad because...",
        key: 1,
        choices: [
          { num: 1, text: "she wanted to study there." },
          { num: 2, text: "she needed a holiday." },
          { num: 3, text: "she was offered a job there." }
        ],
        explainRu: "Джейн проходила курс по охране животных."
      },
      {
        examNum: 4,
        prompt: "Where are Kate and Neil talking?",
        key: 2,
        choices: [
          { num: 1, text: "In a shop." },
          { num: 2, text: "In a museum." },
          { num: 3, text: "In a restaurant." }
        ],
        explainRu: "Они смотрят экспонаты в музее искусств."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
