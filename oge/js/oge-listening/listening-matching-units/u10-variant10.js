/**
 * OGE Listening Matching · Unit 10 · Task 5 · Winter.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u10-variant10-listening-match",
    unitOrder: 10,
    title: "Unit 10 · Winter",
    examSection: "Task 5",
    headerTitle: "Winter season",
    audioSrc: "audio/u10/listening-10.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "It's snowy and healthy" },
      { num: 2, text: "It's bright and lovely" },
      { num: 3, text: "It's tense and nervous" },
      { num: 4, text: "It's tasty and hospitable" },
      { num: 5, text: "It's slippery and dangerous" },
      { num: 6, text: "It's long and dark" }
    ],
    extraStatementNum: 4,
    key: [6, 2, 3, 1, 5],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "No, I don't mind winter at all. It gives us Christmas, snow, skiing and skating. But sometimes the unpleasant cold weather seems endless. When February comes, I start to feel depressed and sometimes even get ill. It happens, I think, because there's not enough sunshine: it's often gloomy and bleak. The snow is not fresh and crisp any more — it turns into unpleasant slush under your feet. The only thing that keeps me going is the prospect of spring, which is really close."
      },
      {
        id: "B",
        text:
          "Unlike most of my friends who prefer summer to any other season, I don't like it too much. For me, winter is nicer. It's probably because I was born in January. I also love the winter holidays — yes, they are much shorter than the summer holidays, but much more intense. There's Christmas that lightens up the short days and makes the long nights look like fairy tales. And the winter activities are more joyful than idly lying on a beach on a hot summer day, aren't they?"
      },
      {
        id: "C",
        text:
          "When I was a child, I adored winter — Father Christmas, presents, fireworks. However, time has passed and my attitude to winter has changed. In December, I have to buy Christmas presents for all the members of my family, decorate the house, plan the Christmas menu and arrange Christmas holidays. My husband's and my son's birthdays are in January. The new projects at work also start in winter. All these make winter the most stressful and tiring time of the year for me."
      },
      {
        id: "D",
        text:
          "We usually stay at home for the Christmas holidays. The holidays are short and there's always lots of entertainment available in our city. However, once we went to a place where my parents' friends were living. It was a cottage in the mountains. I'd never seen so much snow! All the slopes, the fir trees and the huge pines were covered in snow. We skied down the slopes, which was a new experience for me, and had snowball fights. I felt like a new person after that."
      },
      {
        id: "E",
        text:
          "My favourite season is autumn. And winter is my least favourite season. I don't like it. Because of winter, I had to give up my childhood dream — a career as a ballet dancer. I studied at a famous ballet school and was one of the best students. But three years ago, on Christmas Eve, I slipped on the icy pavement and fell over. I broke my leg and after the operation, I had to forget about ballet. Since that time, I've disliked winter with its ice-crusted streets."
      }
    ],
    presenterIntro:
      "Good afternoon. Today we have asked 5 people to give us a short interview and share their opinions about the winter season. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
