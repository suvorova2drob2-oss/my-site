/**
 * OGE Listening Matching · Unit 7 · Task 5 · Money.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u7-variant7-listening-match",
    unitOrder: 7,
    title: "Unit 7 · Money",
    examSection: "Task 5",
    headerTitle: "Money and its role",
    audioSrc: "audio/u7/listening-7.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "Money for charity" },
      { num: 2, text: "History of money" },
      { num: 3, text: "Financial education" },
      { num: 4, text: "Pocket money" },
      { num: 5, text: "Family budget" },
      { num: 6, text: "Getting money as a hobby" }
    ],
    extraStatementNum: 5,
    key: [2, 4, 6, 1, 3],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "You'll certainly agree that it's impossible to imagine the modern world without money. Dollars, euros, roubles, yuans and pounds play an important role in the world's economy. People are used to banknotes and coins as a means of payment. As far as I remember, the first coins appeared in the 7th century BC. They were made of gold, silver and bronze. The first paper money appeared later, in China, in the year 910. However, in Europe, the first paper money was adopted much later than in Asia."
      },
      {
        id: "B",
        text:
          "Most psychologists believe that it is very important for teenagers to learn how to manage money. I absolutely agree with them. According to the latest survey, we have done, most parents give money to their children for doing household chores. Teenagers prefer not to spend it all but to save some. However, two thirds of their money is spent on sweets and chocolate; girls often buy accessories and make-up, boys prefer — digital games and sports equipment."
      },
      {
        id: "C",
        text:
          "Once, in my school years, I had to do a project on the history of money. I did the work well and even brought several coins to class which I had found in a box at the top of the attic. Here are the coins. This is a Swiss ten-cent coin. And this one is the Australian 50-cent coin. They were the first coins in my collection, but now you can see that I have a lot. The most valuable coin is this one — look at the year stamped on it..."
      },
      {
        id: "D",
        text:
          "Several months ago, our classmate fell seriously ill. His family needed lots of money for his treatment. So we decided to help his family. We organized a concert at school and invited our parents, relatives and neighbours. We asked them to pay for the tickets. The performers did their best and the audience was delighted. We managed to collect some money which was given to our classmate's parents. They were very grateful."
      },
      {
        id: "E",
        text:
          "There are a lot of things modern students are taught at school. Recently a new subject which helps students to understand the basis of finance and money management has appeared on our timetable. It has made the timetable even busier than ever. However, I think learning to manage personal finances is vital nowadays. It can set people up for success later in life and help to escape financial trouble. Most students in our school got really interested in the subject."
      }
    ],
    presenterIntro:
      "Good afternoon! Today we have asked 5 people to give us a short interview and share their opinions about money and its role in our lives. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
