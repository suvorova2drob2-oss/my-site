/**
 * OGE Listening Matching · Unit 2 · Task 5 · Drawing and painting.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u2-variant2-listening-match",
    unitOrder: 2,
    title: "Unit 2 · Drawing and painting",
    examSection: "Task 5",
    headerTitle: "Drawing and painting",
    audioSrc: "audio/u2/listening-2.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "Essential tools for an artist" },
      { num: 2, text: "How to match colours" },
      { num: 3, text: "Types of paints" },
      { num: 4, text: "Painting techniques" },
      { num: 5, text: "How to mix colours" },
      { num: 6, text: "Digital painting tools" }
    ],
    extraStatementNum: 4,
    key: [1, 3, 5, 2, 6],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "When you come into my room, be ready to see a messy place. There're oils and acrylic paints, paintbrushes, crayons and pencils everywhere! The palette with dried watercolours and a knife for sharpening the pencils are also there, on the windowsill. In the corner of the room, you can see a pile of sketchbooks and sheets of paper of different sizes. This is my world! Mum says I've got too many things, but I need them all."
      },
      {
        id: "B",
        text:
          "Artists use different things to draw — paints, pencils, whatever. I prefer paints as they give an artist more opportunities. There are different types of paints, suitable for any surface and painting technique. Acrylic paints can be used on surfaces like paper and canvas, and they dry very fast. Oil paints take much longer to dry, but they do last longer. They're also waterproof. Watercolours are fluid, they move on the paper and mix easily."
      },
      {
        id: "C",
        text:
          "When you want to get a new colour, you can mix the basic ones. For example, red and white make pink, and yellow and blue make green. But be careful with black — it can make your colours look muddy and unnatural. If you need a deep black, try combining rich green and crimson red instead."
      },
      {
        id: "D",
        text:
          "Some colours are warm and others are cool. Warm colours can make a picture lively, while cool ones create a calm mood. Isaac Newton created the colour wheel, and it helps people choose perfect combinations — for clothes, interiors or paintings."
      },
      {
        id: "E",
        text:
          "Traditional artists used paper, canvas or glass, but today many people create art on computers. There are painting apps, styluses and even artificial intelligence that helps beginners match colours and make pictures."
      }
    ],
    presenterIntro:
      "Good afternoon! Today we have asked 5 people to give us a short interview and share their opinions about drawing and painting. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
