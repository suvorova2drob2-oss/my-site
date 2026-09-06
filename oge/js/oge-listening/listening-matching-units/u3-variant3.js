/**
 * OGE Listening Matching · Unit 3 · Task 5 · Toys and games.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u3-variant3-listening-match",
    unitOrder: 3,
    title: "Unit 3 · Toys and games",
    examSection: "Task 5",
    headerTitle: "Toys and games",
    audioSrc: "audio/u3/listening-3.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "Diversity of toys and games" },
      { num: 2, text: "Handmade toys" },
      { num: 3, text: "Most popular toys and games" },
      { num: 4, text: "Ancient toys" },
      { num: 5, text: "Electronic games" },
      { num: 6, text: "Educational toys and games" }
    ],
    extraStatementNum: 3,
    key: [4, 1, 6, 2, 5],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "All kids like to play. Your grandmas and grandpas preferred playing to learning, whatever they say to you now. Children of all times wanted to have toys, and primitive toys probably appeared at the same time as the first tools. I've heard that archaeologists have found early toys like stone balls and small stone dolls dating back to prehistoric times. Wooden and ceramic toys existed too, but they couldn't survive through thousands of years till our time."
      },
      {
        id: "B",
        text:
          "Yeah, there are a lot of them. If you enter my siblings' room, you'll find dolls, trains, cars, teddy bears and whatnot. There's a pile of jigsaw puzzles in the corner, and frisbees, and robots. My brother enjoys playing his drum, my sister is very much involved with her toy farm and they both love their building blocks. Mum doesn't want to buy them a PlayStation yet, so they are constantly trying to reach for my computer."
      },
      {
        id: "C",
        text:
          "Playing is a serious matter and absolutely necessary for kids. It is not only about entertainment; it helps children develop their creativity. After playing with construction blocks, even very young children start creating their own designs of houses. Cubes with letters and figures may help them start to read sooner and get interested in maths. And there are various interactive games for learning languages, which make learning much more fun."
      },
      {
        id: "D",
        text:
          "I don't play with toys anymore, I'm too old for that, but there are still some toys in my apartment and I value them very much. They are a set of knitted toys and a collection of ceramic toys. My grandparents were very good at creating things. Grandma knitted cute bunnies, bears and chicks; and Grandpa made superb ceramic whistlers. They looked like frogs, ducks or small dragons. I wish I could make them too!"
      },
      {
        id: "E",
        text:
          "Grandparents complain that children always play on their phones and computers. The oldies say it's a stupid waste of time, but I don't agree. Games run by computer technology are interesting and very diverse — it can be a sports competition simulation, a treasure hunt, a strategy, whatever. You can play against the computer or other players who may be from the other side of the globe. Doesn't all this sound exciting?"
      }
    ],
    presenterIntro:
      "Good afternoon! Today we have asked 5 people to give us a short interview and share their opinions about toys and games. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
