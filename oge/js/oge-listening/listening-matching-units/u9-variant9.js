/**
 * OGE Listening Matching · Unit 9 · Task 5 · Learning.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u9-variant9-listening-match",
    unitOrder: 9,
    title: "Unit 9 · Ways to learn",
    examSection: "Task 5",
    headerTitle: "Learning",
    audioSrc: "audio/u9/listening-9.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "Home schooling" },
      { num: 2, text: "Online learning" },
      { num: 3, text: "Perfect students" },
      { num: 4, text: "School of the future" },
      { num: 5, text: "Traditional learning" },
      { num: 6, text: "School club" }
    ],
    extraStatementNum: 3,
    key: [5, 1, 4, 2, 6],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "Online learning is getting more and more popular in the modern world. New technology offers lots of different opportunities for teachers and students. But I understand and remember everything much better when I'm in a classroom and a real teacher, not a computer, presents the information. And the mistakes in my homework... I really prefer my teacher to explain to me what is wrong and why — instead of being just graded by a lifeless machine."
      },
      {
        id: "B",
        text:
          "Tennis is my love. I started playing tennis when I was 6 years old. To become a good player, I have to train hard twice a day. Also, I have to take part in competitions which are held in different cities and sometimes abroad. That's why I don't attend school, I study at home. My mum helps me with Maths and Science, which are the most difficult subjects for me. Though I don't attend school, I write tests and do projects regularly. School teachers assess my work."
      },
      {
        id: "C",
        text:
          "It's difficult to imagine what school will look like in 50 years, but I think it will be pretty much the same. Of course, there will be more technical aids as the Internet gives us vast opportunities. For example, if for some reason you couldn't come to the classroom, you could stay at home and send your personal robot there. But I don't think robots and computers will ever completely replace human teachers. Humans are still necessary!"
      },
      {
        id: "D",
        text:
          "I've always wanted to take a course delivered via a website as many people say it's very convenient, it saves time and so on. However, when I took such a course, I was pretty disappointed. I took a Spanish course and it was designed for people who are just starting to learn the language. True, it's convenient — you can learn without leaving your home, but for me, it's very boring to do exercises online. I need real people to communicate with."
      },
      {
        id: "E",
        text:
          "Nowadays most people admit that speaking foreign languages is a valuable skill. Some people take online courses, others prefer chatting with native speakers or watching films. As for me, I chose an unusual way to improve my French — I joined our school's French Theatre. To perform in French, we work hard on our pronunciation, learn new words and listen to French songs. However, due to our hard preparation work and rehearsals, our performances are always a success."
      }
    ],
    presenterIntro:
      "Good afternoon. Today we have asked 5 people to give us a short interview and share their opinions about learning and different ways to learn. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
