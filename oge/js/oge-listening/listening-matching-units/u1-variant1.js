/**
 * OGE Listening Matching · Unit 1 · Task 5 · Healthy life.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u1-variant1-listening-match",
    unitOrder: 1,
    title: "Unit 1 · Healthy life · interview",
    examSection: "Task 5",
    headerTitle: "Long and healthy life",
    audioSrc: "audio/u1/listening-1.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Ключ — главная идея спикера, не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "Art and hobbies" },
      { num: 2, text: "Physical activity" },
      { num: 3, text: "Plans and ambitions" },
      { num: 4, text: "Healthy eating" },
      { num: 5, text: "Positive attitude to life" },
      { num: 6, text: "Time with the family" }
    ],
    extraStatementNum: 4,
    key: [5, 3, 6, 2, 1],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "We always make a balanced diet a priority, but we avoid being overly stressed by calorie counting. Enjoy good food, good company, and try to take it easy — that's my motto. A positive attitude helps you get through difficult days."
      },
      {
        id: "B",
        text:
          "Busy people have no time to be sick, they say. When you have exciting projects and clear goals, you feel more energy and motivation. Never give up, set new goals and follow your dreams — that's what keeps me going."
      },
      {
        id: "C",
        text:
          "We always make a point of Sunday dinners. It's a meal which brings together all my aunts, uncles and cousins. My grandma started this tradition, and she insists on cooking almost everything herself."
      },
      {
        id: "D",
        text:
          "The first thing that comes to my mind is exercising. To live a long life, you need a strong body. A brisk walk can do you a lot of good. Games like volleyball, badminton or tennis can make it much more fun. I personally prefer cycling."
      },
      {
        id: "E",
        text:
          "I don't think exercising is enough. Creative things develop the brain and keep it in good working condition. Interesting books, knitting and sewing, drawing and designing — everything is good to keep our brain busy and happy."
      }
    ],
    presenterIntro:
      "Good afternoon! Today we have asked 5 people to give us a short interview and share their opinions on some issues important to a long and healthy life."
  });
})(typeof window !== "undefined" ? window : this);
