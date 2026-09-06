/**
 * OGE Listening Matching · Unit 5 · Task 5 · Pets.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u5-variant5-listening-match",
    unitOrder: 5,
    title: "Unit 5 · Pets",
    examSection: "Task 5",
    headerTitle: "Pet lovers",
    audioSrc: "audio/u5/listening-5.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "Getting on with other animals" },
      { num: 2, text: "Choosing your pet's diet" },
      { num: 3, text: "Making sure the pet is healthy" },
      { num: 4, text: "Finding a suitable pet" },
      { num: 5, text: "Buying toys for your pet" },
      { num: 6, text: "Travelling with pets" }
    ],
    extraStatementNum: 5,
    key: [4, 2, 3, 1, 6],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "It's up to you what pet to adopt, but remember a few points. Firstly, avoid dangerous animals that can threaten you or your family. I mean poisonous spiders and snakes, wild cats and monkeys. Yeah, our relatives, primates, may get very dangerous. Secondly, think about how much room your pet needs and whether you can provide the necessary food and care. Honestly, common pets like cats, dogs or hamsters are the safest choice."
      },
      {
        id: "B",
        text:
          "Your pet solely depends on you as a food provider. Indeed, a house cat cannot catch a mouse or bird, or find the appropriate herb when it needs it. Yes, naturally, cats and dogs eat not only meat but grass too to refill the supply of vitamins and minerals. So if you are not an animal feeding expert, buy food in a pet shop. It's made by nutritionists and you can trust it. Never give your pet sweet, salty or spicy snacks."
      },
      {
        id: "C",
        text:
          "Even if you give your pet quality food, it may get sick. Unfortunately, the pet can't explain that it's unwell and where the pain is. Meanwhile, the disease may progress very fast, and lost time may cost your pet's life. That's why it's very important to pay attention to any unusual behaviour, like lack of appetite, unwillingness to play, meowing or barking. Those may be signs of a serious illness. Take your pet to the vet immediately."
      },
      {
        id: "D",
        text:
          "When I adopted my stray cat, Tobby, he wasn't the only pet in our family. There already lived two dogs and a hamster. The dogs accepted the cat at once, so Tobby didn't feel threatened or bullied. The problem was with the hamster. Tobby could not see it otherwise than food and we had to keep them apart. That couldn't last forever and finally, we made a painful decision to give our hamster to our friends. I recommend avoiding hunter-prey combinations."
      },
      {
        id: "E",
        text:
          "The most difficult problem for pet owners is probably how to find a good pet sitter to take care of their animal when they are away on holiday or business. So, more and more people want to take pets with them instead of leaving them at home. It is actually possible if you do some research to find pet-friendly hotels. Just remember that you should have a pet carrier to transport the animal, clean up after it and make sure it doesn't disturb anyone."
      }
    ],
    presenterIntro:
      "Good afternoon! Today we have asked 5 people to give us a short interview and share their opinions on some issues important to pet lovers. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
