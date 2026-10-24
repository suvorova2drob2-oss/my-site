/**
 * OGE Listening Matching · Unit 19 · Task 5 · Health.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u19-variant19-listening-match",
    unitOrder: 19,
    title: "Unit 19 · Health",
    examSection: "Task 5",
    headerTitle: "Health issues",
    audioSrc: "audio/u19/listening-19.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "First medical aid" },
      { num: 2, text: "Healthy lifestyle" },
      { num: 3, text: "Health problems" },
      { num: 4, text: "Healthy food" },
      { num: 5, text: "Physical fitness" },
      { num: 6, text: "Positive experience" }
    ],
    extraStatementNum: 1,
    key: [3, 6, 2, 4, 5],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "My friends often ask me why I don't play any sport. I'm fed up with explaining to them that it's not because I'm lazy but because I have health reasons for it. In winter I often have a sore throat. In spring I suffer from allergies because the trees and the grass are in blossom and the pollen makes me sneeze. Summer is not any better for me because I can't stand the heat. It makes me feel sick. And in autumn I have a runny nose. But as soon as my situation improves, I'll choose a sport!"
      },
      {
        id: "B",
        text:
          "I don't have health problems very often and I do not enjoy visiting our medical centre. But a few days ago, I had to go there because I had a severe toothache. Needless to say, I'm afraid of the dentist, but this one was very nice. He talked to me all the time, asked lots of questions and cracked jokes. I didn't even notice when my tooth cave was cleaned and filled. It seemed to happen very quickly. This doesn't mean I'm not afraid of dentists anymore but I take it easier now."
      },
      {
        id: "C",
        text:
          "When some people around me complain about their health, I always tell them that it's better to prevent an illness than to cure it. Sports and outdoor physical activity is essential for you if you want to avoid colds and flu. It's also important to go to bed early and have a good night's sleep. Healthy eating is another thing you should follow. If you still feel unwell, go to the doctor at once, to start getting treatment as soon as possible."
      },
      {
        id: "D",
        text:
          "If you want to have a healthy body and a healthy mind, it's necessary to follow several rules. As a doctor, I believe that one of the most important things is minding what you are eating. Of course we need food to survive, but not all food is useful. Sweets and cakes, for example, do more harm than good. But there are some products that undoubtedly boost your health — they are apples. There is even a famous English proverb 'An apple a day keeps the doctor away'."
      },
      {
        id: "E",
        text:
          "We often take our good health for granted. We don't appreciate it. Our ears can hear, our eyes can see, our lungs breath, our arms and legs move and it does not occur to us to help our body to cope with all that hard work. I'm talking about the physical activity which is as essential for our body as food and water. Even moderate exercise can help your health. Tennis, volleyball, badminton, football — it doesn't matter what you play. It should be a sport you enjoy."
      }
    ],
    presenterIntro:
      "Good afternoon. Today we have asked 5 people to give us a short interview and share their opinions about health issues. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
