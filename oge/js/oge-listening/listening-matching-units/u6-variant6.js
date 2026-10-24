/**
 * OGE Listening Matching · Unit 6 · Task 5 · Family houses.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u6-variant6-listening-match",
    unitOrder: 6,
    title: "Unit 6 · Family houses",
    examSection: "Task 5",
    headerTitle: "Houses and design",
    audioSrc: "audio/u6/listening-6.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "Smart house" },
      { num: 2, text: "Favourite piece of furniture" },
      { num: 3, text: "Urban legend" },
      { num: 4, text: "Vacation house" },
      { num: 5, text: "City or countryside" },
      { num: 6, text: "Interior design" }
    ],
    extraStatementNum: 4,
    key: [3, 1, 5, 6, 2],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "I was about seven when I saw this old house for the first time. It used to belong to my grandparents, but it's been sold and resold several times since then. Amusingly, the main reason why people are still interested in buying it is the rumours that my great-grandfather hid some treasure somewhere in the house. It's hard to believe, but each time the new owners of the house call me and ask me to help in their search. There's a belief that the treasure can only reveal itself to a member of the family."
      },
      {
        id: "B",
        text:
          "Several years ago, my uncle moved to the country because of his hobby. He is fond of gardening. Colourful flowers — daffodils, tulips, roses, sunflowers and lilies — blossom in his garden from early spring till late autumn. Though his house was built more than 30 years ago, it is eco-friendly and independent in terms of energy supply. Being an engineer, my uncle filled it with different electronic household devices. His lifestyle reminds me of some science fiction novels, where all the household chores are performed by clever electronic robot installations."
      },
      {
        id: "C",
        text:
          "The house in the remote village has belonged to our family for a century and a half. My grandfather and my dad were born there and it's a piece of our history but... I was offered a job in the city, and commuting every day was absolutely exhausting. At first I tried to read on the train but it didn't help much. I still felt that I was wasting my life commuting. Now I live in a small flat in the city and my treasure of a house is left unattended. I'm considering the prospect of selling it."
      },
      {
        id: "D",
        text:
          "A year ago, I lost my job in the city and moved to the country. I inherited this country house from my grandparents, who were far from ordinary people. Inside you can see furniture made from single logs of wood. It's a real treasure. It was made by some of my ancestors centuries ago but it looks awesome! I bought all the other decor to match this furniture. That's why my house looks like a museum. It's... maybe too traditional but definitely unusual."
      },
      {
        id: "E",
        text:
          "Due to my job, I have to change cities and even countries quite often. Each time I go to a new place, I rent an apartment and each time my home looks different. Except for my armchair. It may sound silly but wherever I move, I drag this old armchair with me. It's so cosy that it makes me feel at home anywhere. Back from work, I sit in it and enjoy reading adventure and detective stories. And when I have a permanent home of my own, my armchair will settle down there too."
      }
    ],
    presenterIntro:
      "Good afternoon. Today we have asked 5 people to give us a short interview and share their opinions about family houses and their designs. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
