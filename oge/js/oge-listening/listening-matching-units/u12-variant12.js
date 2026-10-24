/**
 * OGE Listening Matching · Unit 12 · Task 5 · Books.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u12-variant12-listening-match",
    unitOrder: 12,
    title: "Unit 12 · Books",
    examSection: "Task 5",
    headerTitle: "Books and reading",
    audioSrc: "audio/u12/listening-12.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "Important for kids" },
      { num: 2, text: "Convenient on a trip" },
      { num: 3, text: "Motivating for young writers" },
      { num: 4, text: "Good for any situation" },
      { num: 5, text: "Useful for language learners" },
      { num: 6, text: "Helpful for people with special needs" }
    ],
    extraStatementNum: 3,
    key: [4, 2, 6, 1, 5],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "I think that books are the ideal friends. I'm not kidding around. Books are always near you: they encourage, educate, amuse, comfort and keep you company. At the same time, they ask for nothing for themselves. To my mind, the most important benefit of reading books is the opportunity to learn new things about yourself. Books make you realize how you would react and feel in different situations that have not yet happened in your life."
      },
      {
        id: "B",
        text:
          "Modern life is intense and I can hardly find any time to relax with a good book. E-books are an ideal solution for me. I go to work by bus. The long journey seems short because I can read. I choose a book to match my mood. The pocket-sized device contains a whole library! Another good thing is the additional options on my e-book. For example, it has an app that translates words and phrases. So I can read a foreign book and not worry about having a dictionary at hand."
      },
      {
        id: "C",
        text:
          "I love reading and when I was a child, I read a lot. At university, I always tried to find a free hour to spend with a fiction book. But, since I had an eye operation, I had to give up my lifelong hobby. It was the doctor's advice and I decided to follow it. Luckily, I discovered audiobooks. I don't read a lot now, but I listen to someone else reading and it's even nicer. I especially like listening to detective stories, historical novels and, sometimes, poetry."
      },
      {
        id: "D",
        text:
          "It's a real disappointment that people read less nowadays than they did before. There are certainly lots of other activities, like computer games for example, but they cannot do the same job, especially where children are concerned. Good books develop imagination. They make children create different pictures and images in their mind. The images may change. Actually, in a book, they are constantly changing, while computer games offer ready-made images and characters."
      },
      {
        id: "E",
        text:
          "One of my New Year's resolutions was to read 12 books — one book per month. I also decided to read at least one Spanish book each season to improve my Spanish. According to an article by a famous linguist, to enjoy reading a foreign book, you need to choose a book of your interest, make sure the level is right for you and avoid word for word translation: try to understand the meaning of the word from the context. I try to follow the advice. Successfully so far."
      }
    ],
    presenterIntro:
      "Good afternoon. Today we have asked 5 people to give us a short interview and share their opinions about books and their role in our lives. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
