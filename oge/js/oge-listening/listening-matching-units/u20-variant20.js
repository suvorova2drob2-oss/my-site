/**
 * OGE Listening Matching · Unit 20 · Task 5 · Jobs.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u20-variant20-listening-match",
    unitOrder: 20,
    title: "Unit 20 · Teenage jobs",
    examSection: "Task 5",
    headerTitle: "Jobs teenagers do",
    audioSrc: "audio/u20/listening-20.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "Gaining experience" },
      { num: 2, text: "Being flexible" },
      { num: 3, text: "Making great plans" },
      { num: 4, text: "Earning pocket money" },
      { num: 5, text: "Looking for a job" },
      { num: 6, text: "Changing plans" }
    ],
    extraStatementNum: 5,
    key: [2, 6, 1, 4, 3],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "When we are small, we all dream of heroic or glamorous careers. When it's time to choose, we often prefer the options most people prefer. However, life is changing so rapidly that at any moment we could lose our job and may have to get some other qualifications. The ability to accept and learn new things is essential nowadays. And we should learn them quickly. Even if you are a brilliant specialist, you are never on safe ground if you stop learning."
      },
      {
        id: "B",
        text:
          "As a child, I wanted to become a flight attendant. I adored stewardesses' elegant uniforms, and their graceful manners when they greeted passengers on board and then offered them drinks... However, soon I found out that my dream could never come true. I get awfully airsick! To be a flight attendant, you need to keep your balance even during turbulence, which I couldn't. And I... went to a hairdressers' vocational school instead."
      },
      {
        id: "C",
        text:
          "It is not easy for a student to find a job. But I was lucky enough to get a part-time job in a tourist agency close to my home. The money is not very good, for obvious reasons, but I can see how the business works. While working, I'm learning to communicate with clients, which is not easy at all! I also can practice my German and Italian, which I'm learning at high school now. Luckily, I only have to work three afternoons a week, which leaves me plenty of time for homework and my hobbies."
      },
      {
        id: "D",
        text:
          "It was my mum's idea that I should find a summer job this year. I don't mind. I've decided to work in a pizzeria which is not far from our house. I love pizza and I believe I will be able to get it there for free if I work for them, won't I? And I don't think the work will be very tiring — I'll be either delivering pizza or serving the customers. I am starting this Monday. I hope to earn enough not to bother my parents for pocket money for a while."
      },
      {
        id: "E",
        text:
          "Music means a lot to me — I can't imagine my life without it. At the age of four, I started playing the piano. Then I joined a violin class and a guitar class at the music school too. I hope to be a professional musician and, probably, to go to the Conservatory to learn music there. It may sound too ambitious, but I would like to perform in the best concert halls in the country, and abroad, too. I'm very fortunate that my family supports me and encourages me in my ambitions."
      }
    ],
    presenterIntro:
      "Good afternoon. Today we have asked 5 people to give us a short interview and share their opinions about the jobs teenagers do and jobs they are dreaming of. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
