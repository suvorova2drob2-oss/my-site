/**
 * OGE Listening Matching · Unit 8 · Task 5 · Animals.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u8-variant8-listening-match",
    unitOrder: 8,
    title: "Unit 8 · Animals",
    examSection: "Task 5",
    headerTitle: "Wild animals and pets",
    audioSrc: "audio/u8/listening-8.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "Keeping exotic pets" },
      { num: 2, text: "Watching animals" },
      { num: 3, text: "Helping our four-legged friends" },
      { num: 4, text: "Definitely worth seeing" },
      { num: 5, text: "Designing a menu for your pet" },
      { num: 6, text: "Saving endangered species" }
    ],
    extraStatementNum: 5,
    key: [4, 6, 2, 3, 1],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "Today I'd like to tell you about a new family film about a boy and his pets: an intelligent dog and a naughty cat. The action takes place in a small town, in the south of England. The thrilling adventures of the three friends keep the audience's attention during the whole film. At the end of the film, the pets help the police to arrest the criminal. Thanks to his pets, the owner fights his shyness and wins a dancing competition. The film is really exciting. Don't miss it."
      },
      {
        id: "B",
        text:
          "According to scientists, the best way to protect rare animals and birds is to protect the places where they live. There are a lot of things we can do even if we are city-dwellers. If we consume less, wild animals will have a larger territory to live on. Wildlife must have places to find food and shelter. It's good to recycle and buy eco-friendly products. Reduce use of water in your home. Remember: we only have one earth, so we have to share it with other species."
      },
      {
        id: "C",
        text:
          "It was a great trip. I've always been interested in observing animals in the wild and that was a great opportunity. We were sitting on top of a hill and were hiding under a special shelter made of grass and tree branches. It made us invisible to the animals, but we could see them very well. Deer, antelopes and wild goats are very cautious animals, but we tried to make no noise, and the wind was blowing in the opposite direction so they could not smell us."
      },
      {
        id: "D",
        text:
          "Our dog shelter was opened 5 years ago. Now there are 20 animals living in our shelter. They got to us in different ways but all of them have had hard lives. We try to give them care and love. Volunteers are the heart of our dog shelter. They walk dogs, clean crates and feed the animals. Volunteers are always necessary, especially during the winter. If you love animals and have some free time, we'll be glad to see you in our shelter."
      },
      {
        id: "E",
        text:
          "First, I saw them at my friend's place. My friend was crazy about animals like lizards, snakes and chameleons. There were several terrariums full of them in her flat. To me, the snakes looked scary and a bit disgusting. But the chameleons were amazing. They looked like tiny dinosaurs and they were able to change colour! When they were placed on the sofa, they became brown, on a green notebook — green, and on a checked tablecloth their colouring was absolutely incredible."
      }
    ],
    presenterIntro:
      "Good afternoon! Today we have asked 5 people to give us a short interview and share their opinions about animals — wild animals and pets. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
