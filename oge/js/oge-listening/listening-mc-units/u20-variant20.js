/**
 * OGE Listening MC · Unit 20 · Вариант 20 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u20-variant20-listening-mc",
    unitOrder: 20,
    title: "Unit 20 · Shopping centre, party, day off, cactuses",
    examSection: "Tasks 1–4",
    headerTitle: "Souvenirs · Anna · Linda · Ann",
    audioSrc: "audio/u20/listening-20.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услушите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "Dear customers! If you want to buy souvenirs for your friends visit our new souvenir shop on the third floor, just next to the sports goods department. It is highly recommended to see the sports goods too, because for today only, we are offering you sports footwear with very good discounts. One floor below the sports goods, you can enjoy lunch in our brand-new café. There, on the second floor, you can also use a play area, where your children can safely play while you are shopping."
      },
      {
        label: "B",
        body:
          "Hi Chris! And Happy Birthday to you! It's Anna, in case you didn't recognize my voice. So sorry but I won't be able to be at your party tonight, but I hope you won't be angry with me. We planned to get back home last night but all the flights are full and there are crowds in the airport. We could only manage to reserve places for tomorrow. So we are spending one more night at my granny's place. She sends you her regards, of course, and wishes you well. See you the day after tomorrow!"
      },
      {
        label: "C",
        body:
          "Linda: What weather we are having today! I don't want to go out — it's so hot and stuffy outside.\nFred: There is no need for you to go out. It's your day off, isn't it?\nLinda: Yes, lucky me! It's nice to have a day off in the middle of the week. I'll take the ice-cream out of the fridge and will be enjoying it on the sofa, with the book I started yesterday.\nFred: It's not fair! You know that I have to be in my office today. You're just saying that to make me feel envious.\nLinda: Yes, I am. But if you buy some fruit on the way back, in the evening I'll make cool fresh fruit cocktails. Does that make you feel any better?\nFred: It definitely does."
      },
      {
        label: "D",
        body:
          "Ann: Max, we have to buy a present for Ted. Are you free on Saturday?\nMax: No. I have my karate class.\nAnn: I've never understood people enjoying aggressive sports.\nMax: Karate is not aggressive! And I've never been able to understand your hobbies, my dear sister. Which are more destructive than karate. Last year you were fond of graffiti and dad had to redecorate the garage afterwards. Now the house is full of cactuses with huge spikes!\nAnn: They don't do any harm!\nMax: When I stepped on your cactus, mum had to drive me to the doctor.\nAnn: It was your own fault. Getting back to Ted's present...\nMax: I'm free on Sunday if you want."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "If you've come to the shopping centre to buy some sports shoes, you will look for them...",
        key: 3,
        choices: [
          { num: 1, text: "on the first floor." },
          { num: 2, text: "on the second floor." },
          { num: 3, text: "on the third floor." }
        ],
        explainRu: "Спортивные товары и обувь — на третьем этаже."
      },
      {
        examNum: 2,
        prompt: "Anna is going to miss the birthday party because...",
        key: 2,
        choices: [
          { num: 1, text: "her relative is unwell." },
          { num: 2, text: "she is out of the city." },
          { num: 3, text: "she is meeting her granny at the airport." }
        ],
        explainRu: "Анна застряла в другом городе: рейсы переполнены."
      },
      {
        examNum: 3,
        prompt: "What is Linda going to do today? — She is planning to...",
        key: 1,
        choices: [
          { num: 1, text: "stay at home." },
          { num: 2, text: "work in the office." },
          { num: 3, text: "go shopping." }
        ],
        explainRu: "У Линды выходной, она остаётся дома с книгой."
      },
      {
        examNum: 4,
        prompt: "Ann's current hobby is...",
        key: 3,
        choices: [
          { num: 1, text: "doing karate." },
          { num: 2, text: "drawing graffiti." },
          { num: 3, text: "growing cactuses." }
        ],
        explainRu: "Граффити было в прошлом году, сейчас дом полон кактусов."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
