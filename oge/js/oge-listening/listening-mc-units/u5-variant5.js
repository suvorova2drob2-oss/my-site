/**
 * OGE Listening MC · Unit 5 · Вариант 5 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u5-variant5-listening-mc",
    unitOrder: 5,
    title: "Unit 5 · Short texts A–D",
    examSection: "Tasks 1–4",
    headerTitle: "Party · Ann · Lucy · Jack",
    audioSrc: "audio/u5/listening-5.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услушите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "Traditionally, at the end of the season, we throw a farewell masked party, and this year we are going to do it again! Everyone is welcome, there are free electronic tickets which you get when you register on our site. The registration is obligatory, we need to know the number of guests to make all necessary arrangements. As for the masks, you can bring them with you or make them at the party. Our assistants will hold a small workshop for those who would like to make their own handmade masks."
      },
      {
        label: "B",
        body:
          "Hi, Ann, it's Mum. I know you're in the lesson at the moment and the phone is mute, but please call or text me during the break. I'm really pressed for time, cooking, as your grandparents are coming for dinner tonight. Could you buy some cheese on the way home? I want to cook grandma's favourite vegetables with cream and cheese. Her medical tests are fine now, and she's been released from the hospital, so we are going to celebrate it. I hope you won't forget about my request."
      },
      {
        label: "C",
        body:
          "Tom: Hey, Lucy, which topic have you chosen for the project?\nLucy: What project, Tom? Oh, are you talking about the project on our interests and hobbies?\nTom: Exactly. You are keen on drawing, aren't you?\nLucy: Absolutely not. I like art, of course, but I can neither draw nor paint. That's why I love taking photos. And I'm going to write about that.\nTom: I've seen a few of your photos of flowers. They are beautiful.\nLucy: Those were taken in my aunt's garden. She's very good at growing plants. I wish I could be like her, but I'm hopeless — all my plants die, and I can't even understand why."
      },
      {
        label: "D",
        body:
          "Jack: I need to buy something for school, Mum.\nMum: Of course, Jack, darling. Do you need any notebooks, pens or crayons? Oh, I know, you probably need a new lunch-box?\nJack: No, mum, I just need a set of rulers for my Maths lessons.\nMum: A set of rulers?\nJack: Yes. We are studying shapes now, and I need them to draw. Otherwise, my lines and shapes do not look accurate and tidy. The teacher marked it in my notebook that she was not happy with them.\nMum: Of course, darling, we'll go to the shop right now."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "To get an entrance ticket to the party, you need to…",
        key: 3,
        choices: [
          { num: 1, text: "bring a handmade mask." },
          { num: 2, text: "pay for the ticket in cash." },
          { num: 3, text: "register before the party." }
        ],
        explainRu: "Registration on our site is obligatory."
      },
      {
        examNum: 2,
        prompt: "The mother wants Ann to…",
        key: 1,
        choices: [
          { num: 1, text: "buy something for dinner." },
          { num: 2, text: "cook dinner for her grandparents." },
          { num: 3, text: "visit her grandma in the hospital." }
        ],
        explainRu: "Could you buy some cheese on the way home?"
      },
      {
        examNum: 3,
        prompt: "Lucy is good at…",
        key: 2,
        choices: [
          { num: 1, text: "drawing." },
          { num: 2, text: "photography." },
          { num: 3, text: "gardening." }
        ],
        explainRu: "She loves taking photos."
      },
      {
        examNum: 4,
        prompt: "Jack wants to buy…",
        key: 3,
        choices: [
          { num: 1, text: "a new lunchbox." },
          { num: 2, text: "a few notebooks." },
          { num: 3, text: "a set of rulers." }
        ],
        explainRu: "I just need a set of rulers for my Maths lessons."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
