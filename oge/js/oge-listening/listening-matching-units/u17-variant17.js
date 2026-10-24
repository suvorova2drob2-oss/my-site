/**
 * OGE Listening Matching · Unit 17 · Task 5 · Free time.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u17-variant17-listening-match",
    unitOrder: 17,
    title: "Unit 17 · Free time",
    examSection: "Task 5",
    headerTitle: "Ways to spend free time",
    audioSrc: "audio/u17/listening-17.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "Playing musical instruments" },
      { num: 2, text: "Making cartoons" },
      { num: 3, text: "Enjoying a party" },
      { num: 4, text: "Learning foreign languages" },
      { num: 5, text: "Playing sports" },
      { num: 6, text: "Expressing yourself in a dance" }
    ],
    extraStatementNum: 2,
    key: [5, 3, 1, 6, 4],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "I remember that when I was six, the neighbours' children made fun of me. They said that I was good for nothing, that I was fat and clumsy and they didn't want to play with me. I felt frustrated and angry. Then I asked my older brother to teach me to play tennis. Though I didn't become a professional player, I can't imagine my life without this game now. I play tennis three times a week. Tennis has made me healthy, fit and confident. The other benefit is a bunch of good friends."
      },
      {
        id: "B",
        text:
          "We had a great time, though nobody had expected it to be such fun. I didn't know my classmates were so creative and inventive. Everyone had to wear special costumes that made them look like fairytale or cartoon characters. Diana was dressed up like a robot. And it was funny when she danced to techno music! She said she made that costume all by herself, from an old jeans jacket, a helmet and some foil. Now these fancy dress parties have become our favourite entertainment."
      },
      {
        id: "C",
        text:
          "I don't often go to parties. It's not that I'm too shy or unsociable, I just don't like crowds of people around me. But I like music very much, live music especially. It can be classical or modern music but, to my mind, live music is much more emotional than recorded music. I can play the piano myself, not like a professional of course. But whenever I have time, I practice playing the piano and it makes me feel happy. Now I'm planning to learn to play the guitar too."
      },
      {
        id: "D",
        text:
          "We were told that Mrs Jennie was sick and were about to go home when another teacher invited us to join her group. I was surprised to see how diverse her group was — there were people of different ages and different builds. Some people didn't look sporty at all. But when the music was on, all those people started to move their bodies and feet to music. Their often clumsy movements could not spoil the impression. Their coach encouraged them and they did their best in response."
      },
      {
        id: "E",
        text:
          "Do you enjoy karaoke? Lots of people would say they hate it, that is why I only sing when I'm alone. I sing popular songs from films and cartoons. It may sound strange, but singing is the best way for me to improve my language skills. I can sing songs in different languages which, by the way, is a very good method of memorising foreign words and phrases and enhancing pronunciation. I hope I'll manage to learn a few languages in this easy and pleasant way."
      }
    ],
    presenterIntro:
      "Good afternoon. Today we have asked 5 people to give us a short interview and share their opinions about different ways of spending free time. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
