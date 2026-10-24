/**
 * OGE Listening MC · Unit 17 · Вариант 17 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u17-variant17-listening-mc",
    unitOrder: 17,
    title: "Unit 17 · Shop survey, book, umbrella, skiing",
    examSection: "Tasks 1–4",
    headerTitle: "Yellow Sunflower · Max · Ann · Lisa",
    audioSrc: "audio/u17/listening-17.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услушите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "Hi, everyone! Before we start our show devoted to the third anniversary of the opening of our shop 'Yellow Sunflower', I would like you to answer a few questions. It's about which of our goods you buy most often. So, if you usually buy meat and meat products, please tick the red circle on your leaflet. If you buy cakes, doughnuts, pies and other baked goods in our cafeteria, please tick the purple circle. And if your favourite items are fresh fruit and vegetables, tick the green circle, of course."
      },
      {
        label: "B",
        body:
          "Hi, Linda, it's Max calling. Do you remember that you borrowed one of my Science books last week? The one I brought to our Biology class. The thing is that I need it urgently now. Could you meet up with me at about 5 p.m. near the swimming pool today? I know that you are having a swimming lesson there, and I will be getting back from my guitar class, so I can take my book on the way home. If, for some reason, you can't do that, please take the book to school tomorrow, will you?"
      },
      {
        label: "C",
        body:
          "Ann: Excuse me, have you got this umbrella in black or olive?\nSeller: Yes, we have. But why have you chosen the dark colours? Don't you want anything brighter? We've got this model in pink and white. And with floral patterns too!\nAnn: I hate pink. As for white, yes, it looks elegant, but it's not very practical.\nSeller: Of course, black is always in fashion. Here you are. Would you like me to unfold it?\nAnn: Thank you but no need. I'm taking it. I mean this black one. It goes well with any clothes. Where can I pay?\nSeller: Over there, behind the handbag stall. But let me show you how it works first!\nAnn: OK. As you please."
      },
      {
        label: "D",
        body:
          "Neil: Lisa, what are your plans for the weekend?\nLisa: I don't know yet. Why?\nNeil: Because I want to invite you to join our skiing party.\nLisa: Skiing party?\nNeil: Yes. The forecast says it'll be snowing till Friday. And the temperature will remain below zero for a few more days. A rare opportunity to ski.\nLisa: It really is. Fine. I'm going too. Thanks for the invitation. All the other things like shopping, cleaning and even studying can wait till some other time.\nNeil: A wise decision. All the guys you know will be there. Katie, my neighbour, and her brother Steve and some of my classmates. I'm sure we'll have a good time."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "If the only product you buy in the shop regularly is an apple pie, you should tick on...",
        key: 3,
        choices: [
          { num: 1, text: "the red circle." },
          { num: 2, text: "the yellow circle." },
          { num: 3, text: "the purple circle." }
        ],
        explainRu: "Пироги и выпечка — это фиолетовый кружок."
      },
      {
        examNum: 2,
        prompt: "Max wants Linda to...",
        key: 2,
        choices: [
          { num: 1, text: "help him with a science project." },
          { num: 2, text: "return a book to him." },
          { num: 3, text: "give him back his guitar." }
        ],
        explainRu: "Максу срочно нужна его книга по науке."
      },
      {
        examNum: 3,
        prompt: "In the shopping centre Ann has chosen a ... umbrella.",
        key: 1,
        choices: [
          { num: 1, text: "black" },
          { num: 2, text: "pink" },
          { num: 3, text: "white" }
        ],
        explainRu: "Энн берёт чёрный зонт."
      },
      {
        examNum: 4,
        prompt: "What is Lisa going to do this weekend? — She is going...",
        key: 2,
        choices: [
          { num: 1, text: "to do her homework." },
          { num: 2, text: "to ski with her friends." },
          { num: 3, text: "to clean the house." }
        ],
        explainRu: "Лиза едет на лыжную вечеринку."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
