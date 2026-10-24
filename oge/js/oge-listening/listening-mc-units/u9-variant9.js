/**
 * OGE Listening MC · Unit 9 · Вариант 9 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u9-variant9-listening-mc",
    unitOrder: 9,
    title: "Unit 9 · Party, breakfast and show",
    examSection: "Tasks 1–4",
    headerTitle: "Lost property · Neil · Omelette · Mark",
    audioSrc: "audio/u9/listening-9.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услушите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "Dear customers, please, do not leave your purchases and bags unattended. Please mind, that for security reasons, our Lost Property office on the ground floor is closed. We're sorry for the possible inconvenience. Now, to claim any lost things, please visit our manager whom you can find on the 2nd floor between the restaurant area and the sportswear shops. If you find any unattended bags or packages, please don't touch them, but inform our security officers or any manager."
      },
      {
        label: "B",
        body:
          "Hi, Wendy! It's Neil calling. I'm awfully sorry but I can't be at your party today though I really want to. You know it was my uncle's birthday yesterday and we had a garden party. Everything was great but it looks like I've got a cold and have to stay at home today. Doubt you would like to see me coughing and sneezing on your guests. Anyway, I'll write the essay due next week to kill the time, and will probably watch a film. Call me back when you are free."
      },
      {
        label: "C",
        body:
          "Andy: Morning, Mum! What are you cooking?\nMother: Hi, Andy! Omelette. Or would you prefer cornflakes with milk?\nAndy: I eat cornflakes every morning because you're always rushing to work and have no time to cook. No, thank you. I will not miss the chance to have some omelette. Especially the way you cook it — with a golden cheesy crust — yummy!\nMother: Fine then. It's almost ready. Would you like me to add some sausages to it? Or bacon?\nAndy: Neither sausages nor bacon. I don't like having meat for breakfast. Just the classic omelette — eggs and cheese.\nMother: Ok. As you say. Could you help me lay the table?\nAndy: Sure."
      },
      {
        label: "D",
        body:
          "Kate: Hi, Mark! Do you remember about our show tomorrow?\nMark: Oh, Kate, of course I do, but I'm not sure I'll be able to come. Sorry!\nKate: Why? What's the matter? We expected not only you but your whole family to watch our performance. Your little sister will certainly like it. It's a sort of fairy tale but the story is more realistic.\nMark: I do not doubt your show is going to have great success, but we are playing a semi-final game tomorrow. And the whole family is going to watch it at the stadium. Even my sister is going to support me. She's always my most loyal fan.\nKate: OK. I understand. I hope you win tomorrow!"
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "In case of any lost property, go to...",
        key: 2,
        choices: [
          { num: 1, text: "the security at the entrance." },
          { num: 2, text: "the manager on the second floor." },
          { num: 3, text: "the Lost Property office on the ground floor." }
        ],
        explainRu: "Бюро находок закрыто, идти нужно к менеджеру на втором этаже."
      },
      {
        examNum: 2,
        prompt: "Niel can't come to the party because...",
        key: 1,
        choices: [
          { num: 1, text: "he is feeling unwell." },
          { num: 2, text: "he has got lots of homework to do." },
          { num: 3, text: "he needs to be at a family celebration." }
        ],
        explainRu: "Нил простудился и остаётся дома."
      },
      {
        examNum: 3,
        prompt: "For breakfast, Andy is going to have...",
        key: 3,
        choices: [
          { num: 1, text: "sausages." },
          { num: 2, text: "cornflakes." },
          { num: 3, text: "an omelette." }
        ],
        explainRu: "Энди выбирает омлет с сыром, без мяса."
      },
      {
        examNum: 4,
        prompt: "Mark is planning to...",
        key: 3,
        choices: [
          { num: 1, text: "see a school drama show." },
          { num: 2, text: "stay at home with his sister." },
          { num: 3, text: "take part in a competition." }
        ],
        explainRu: "Марк играет полуфинал и идёт на стадион."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
