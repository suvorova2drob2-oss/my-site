/**
 * OGE Listening Matching · Unit 15 · Task 5 · Sport.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u15-variant15-listening-match",
    unitOrder: 15,
    title: "Unit 15 · Sport",
    examSection: "Task 5",
    headerTitle: "Sport",
    audioSrc: "audio/u15/listening-15.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "Sports at school" },
      { num: 2, text: "Popular sports events" },
      { num: 3, text: "Healthy daily routine" },
      { num: 4, text: "Sports achievements" },
      { num: 5, text: "Accessible sports facilities" },
      { num: 6, text: "New sports" }
    ],
    extraStatementNum: 2,
    key: [4, 5, 1, 6, 3],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "I enjoy athletics and my coach says that I'm pretty good at it. I have already participated in several competitions and have won a few prizes. In my award collection, I already have two bronze medals, and one silver medal. I was also awarded a special Marathon Runner Diploma six months ago. Next year our athletics team is going to take part in a national competition. And I was glad when the coach told me that he wants me to be the captain of the team."
      },
      {
        id: "B",
        text:
          "I felt really happy when my parents decided to move house. Soon we'll be living in a nice green area, with a large sports centre within 5 minutes' walk from our house. The centre was only built a year ago, so it's brand new and it's made of steel and glass. There are several gyms inside, a swimming pool and even a small football pitch. If you get hungry, there are several cafés, where you can buy sandwiches, biscuits and juices."
      },
      {
        id: "C",
        text:
          "I agree that it is important to play sports to stay healthy and fit. But I don't have time for it. I study at school till 3 p.m. and then I have to do a lot of homework. Three times a week, I play the drums in our school orchestra. I like music and our performances are really cool. As for sport and PE lessons, it's not my cup of tea. We usually run, jump and do lots of exercises in the lessons. It's so boring. We do the same things as we did last year."
      },
      {
        id: "D",
        text:
          "Football, volleyball, tennis and ice hockey are familiar to everyone. People either play these sports or watch them, which makes them very popular with different social groups. Recently, a lot of unusual sports have appeared. One of them is chess boxing. A chess boxing match between two sportsmen lasts up to eleven rounds, starting with a four-minute chess round and followed by two minutes of boxing. Have you heard of it?"
      },
      {
        id: "E",
        text:
          "I spend a lot of time outdoors. I usually get up early and go jogging in the park. I jog for about forty minutes, then come home and take a shower. After that, I have my breakfast. I never skip it because it's not healthy, and I always watch what I eat. The food should contain vitamins and proteins. After breakfast I go to my office. I never take a bus or a taxi there. I walk. It takes me about thirty minutes. At the weekends, when the weather is OK, I cycle in the park or play volleyball."
      }
    ],
    presenterIntro:
      "Good afternoon. Today we have asked 5 people to give us a short interview and share their opinions about sport. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
