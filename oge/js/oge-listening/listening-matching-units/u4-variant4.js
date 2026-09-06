/**
 * OGE Listening Matching · Unit 4 · Task 5 · Hobbies.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u4-variant4-listening-match",
    unitOrder: 4,
    title: "Unit 4 · Hobbies",
    examSection: "Task 5",
    headerTitle: "Hobbies and their roles",
    audioSrc: "audio/u4/listening-4.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "Personal stories on finding a hobby" },
      { num: 2, text: "Hobbies to unite the family" },
      { num: 3, text: "Long list of hobbies to choose from" },
      { num: 4, text: "Hobbies sometimes can be harmful" },
      { num: 5, text: "Hobbies for lazy people" },
      { num: 6, text: "Hobbies may change your career" }
    ],
    extraStatementNum: 5,
    key: [3, 1, 4, 6, 2],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "There are so many hobbies that people can choose from that it may be confusing. You can try painting, singing, dancing, gardening, knitting and lots of other things. Some people even keep mini ant farms and watch the ants in clear cubes like a reality show."
      },
      {
        id: "B",
        text:
          "I didn't look for a hobby — the hobby found me. When I was mountain climbing, I found a stone that a friend identified as a mineral called agate. He told me legends about gems and gave me another mineral, and that's how my collection started."
      },
      {
        id: "C",
        text:
          "I've always liked gardening. When we bought a new spacious flat, I bought lots of plants and placed them everywhere. The next morning I found out that my face and body were terribly red. The doctor said I was severely allergic to some of my plants."
      },
      {
        id: "D",
        text:
          "A friend of mine often goes hiking or cycling. Last month we went on an eco-excursion to a rural place. At the end of our vacation, my friend claimed that he would not go back to his office work. He wanted to change his lifestyle and become a tourist guide."
      },
      {
        id: "E",
        text:
          "When we are depressed or down, my mum takes a box with board games from the cupboard. We choose a game, sit down in the living room with biscuits, nuts, or fruit, and the game starts! My dad, brother and even grandma — we all love this pastime."
      }
    ],
    presenterIntro:
      "Good afternoon! Today we have asked 5 people to give us a short interview and share their opinions about hobbies and their roles in human lives. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
