/**
 * OGE Listening Matching · Unit 11 · Task 5 · Languages.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u11-variant11-listening-match",
    unitOrder: 11,
    title: "Unit 11 · Learning languages",
    examSection: "Task 5",
    headerTitle: "Foreign languages",
    audioSrc: "audio/u11/listening-11.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "Obstacles which prevent learning languages" },
      { num: 2, text: "Ways to improve language skills" },
      { num: 3, text: "Reasons to learn languages" },
      { num: 4, text: "Number of languages to learn" },
      { num: 5, text: "Foreign language choice" },
      { num: 6, text: "Methods of studying languages" }
    ],
    extraStatementNum: 4,
    key: [2, 5, 3, 6, 1],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "I can speak four foreign languages: French, Spanish, Italian and Czech. I found out that if you want to speak fluently and confidently, you have to live for a while in a place where it's spoken. For example, when I went to Spain, I didn't understand anything. People spoke ten times faster than anyone had ever spoken in the classroom. However, in a few weeks I started to understand them and I was able to maintain a conversation."
      },
      {
        id: "B",
        text:
          "It's useful to speak foreign languages, but you can never learn all of them. That's why it's important to select the language or languages that are right for you and to focus on them. For me, Spanish is my first choice because it's widely spoken and will be useful for my career. Then comes Italian. I like the way it sounds and it's relatively easy to learn. Chinese and Japanese are at the bottom of my list. They are so difficult that there's no chance I'll ever be able to speak them."
      },
      {
        id: "C",
        text:
          "If you speak foreign languages, you can find a better job. Communication skills help to solve problems in business and everyday life. But few people understand that the process of language learning, in itself, is a very rewarding activity too. It keeps your brain active, develops your memory and broadens your horizons. It saves you from depression and helps you meet new friends. These are probably the reasons why some people start learning languages at a very mature age."
      },
      {
        id: "D",
        text:
          "They say some people have a natural talent for languages, and some don't. I, personally, don't believe this. The reason why some people give up learning is usually because they find lessons difficult and tests stressful. But there are other ways to learn languages! When you want to watch a film, choose a film in the language you're learning. Songs are great too. Find the text on the Internet, print it and sing it together with your favourite band. You'll easily remember the new words."
      },
      {
        id: "E",
        text:
          "Most people don't feel very enthusiastic about learning languages when they don't see how they can use them in real life. Nobody wants to learn rare exotic languages spoken by relatively small groups of people in remote places. English-speaking people are in the opposite situation — everywhere they go, people want to speak English with them. So there's no reason to make an effort to learn something new."
      }
    ],
    presenterIntro:
      "Good afternoon! Today we have asked 5 people to give us a short interview and share their opinions about learning foreign languages. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
