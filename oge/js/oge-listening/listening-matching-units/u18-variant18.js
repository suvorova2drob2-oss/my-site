/**
 * OGE Listening Matching · Unit 18 · Task 5 · Friends.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u18-variant18-listening-match",
    unitOrder: 18,
    title: "Unit 18 · Friends",
    examSection: "Task 5",
    headerTitle: "Friends and friendship",
    audioSrc: "audio/u18/listening-18.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "Broken friendship" },
      { num: 2, text: "First meeting" },
      { num: 3, text: "True friends" },
      { num: 4, text: "Lack of friends" },
      { num: 5, text: "Surprise from friends" },
      { num: 6, text: "Good for health and soul" }
    ],
    extraStatementNum: 4,
    key: [2, 6, 5, 1, 3],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "It happened at one of our parties in primary school. Every month, our school arranged a party for all the kids from our local community. We enjoyed them. And, once, a new kid came. It was a cute girl of about my age. Her family had arrived in our town not long before that, so she didn't know anyone at the party. She asked me whether she could be my partner in a game, which was arranged for us by the organisers. I agreed. And we are still inseparable."
      },
      {
        id: "B",
        text:
          "Can you imagine our world without friends? I can't. Friends make our life not only more fun but they improve the quality of it. Scientists say that a person can cope with any illness more easily if they've got good friends. Sometimes a chat with a friend can be more useful than visiting a psychologist. In fact, it is scientifically proven that good company reduces stress in life and makes it brighter. That's why it's so important to cherish your friends."
      },
      {
        id: "C",
        text:
          "Unlike most of my friends, I don't like parties. I find them boring and sometimes even ignore my friends' invitations. My best friend knows about this and, once, she suggested a boat trip as a birthday present for me. However, when I got to the Boat Club, all my friends were there! It turned out that my friend's dad would be the captain of the large boat, beautifully decorated by my friends. There was even a cake, which we ate on board! It was the most amazing party I've ever had."
      },
      {
        id: "D",
        text:
          "It happened at my birthday party. My friend, Michael, was in a bad mood because of problems at school. He didn't want to take part in any of our games, kept complaining about everything. I told him that it was very selfish of him to spoil the fun. I also said that it was not fair of him to ruin my birthday and that I didn't want to see him anymore. Michael got very angry and left without saying a word. I haven't seen him since then. I feel so upset."
      },
      {
        id: "E",
        text:
          "I don't have many friends. And I think that people who claim they do are not very honest with themselves. Real friends are rare. Real friends are able to support you when you need help. They listen to you and can tell you when you are wrong. They will stand up for you if somebody tries to hurt you, but they will stop you from hurting other people too. Real friends will share your fun, and they will help you to get out of trouble if needed."
      }
    ],
    presenterIntro:
      "Good afternoon. Today we have asked 5 people to give us a short interview and share their opinions about friends and friendship. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
