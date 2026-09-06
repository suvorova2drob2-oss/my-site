/**
 * OGE Reading · Unit 1 · Tasks 13–19 · Leo Tolstoy (TFNS engine).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u1-variant1-reading-tfns",
    unitOrder: 1,
    title: "Unit 1 · Leo Tolstoy's comedy",
    sectionKicker: "Reading",
    examSection: "Tasks 13–19",
    headerTitle: "Leo Tolstoy's comedy",
    instructionHtml:
      "Прочитайте текст. Определите, какие утверждения <strong>13–19</strong> соответствуют тексту: <strong>1 True</strong>, <strong>2 False</strong>, <strong>3 Not stated</strong>.",
    readingPassageHtml:
      "<p>Leo Tolstoy is a famous 19th-century writer known for his psychological novels. He had a remarkable talent for observing people and taking notes on their behaviour to create true-to-life characters in his books.</p>" +
      "<p>He also had a good sense of humour. He started writing a comedy but left the draft unfinished for three years until his daughter Maria found it.</p>" +
      "<p>The family insisted that he finish the play. He agreed, provided it was for family use only. The play was titled <em>The Fruits of Enlightenment</em> and was performed at their home theatre.</p>" +
      "<p>At first, Tolstoy was pessimistic about a public staging, but his children's enthusiasm changed his mind. He edited the lines during rehearsals. The final version was staged in 1890 with family and friends as actors.</p>" +
      "<p>The first official performance was well received by relatives, neighbours and servants. It focused on the relationship between peasants and landowners.</p>" +
      "<p>A second performance was held in Tula. Tolstoy arrived in plain clothes, and a guard failed to recognise him, refusing him entry until a local official intervened. Tolstoy reacted with a smile.</p>" +
      "<p>The theatre officials were confused. They apologised and offered Leo Tolstoy the best seat. Fortunately, on that day, a legendary Moscow director V. Nemirovich-Danchenko was among the spectators. He was deeply impressed by the performance and soon brought the comedy to the big stage of Maly Theatre. <em>The Fruits of Enlightenment</em> went successfully. It was highly praised in the press and was published later on. It should be mentioned, however, that Leo Tolstoy did not like the way the actors of Maly Theatre played the peasants.</p>",
    statements: [
      { letter: "13", text: "In his novels, Leo Tolstoy wanted to make life more exciting than it really was." },
      { letter: "14", text: "Leo Tolstoy wrote his comedy The Fruits of Enlightenment in one year." },
      { letter: "15", text: "The name of the comedy was suggested by a member of Tolstoy's family." },
      { letter: "16", text: "Leo Tolstoy improved the text of the comedy during the rehearsals." },
      { letter: "17", text: "The first performance of the comedy was successful." },
      { letter: "18", text: "Leo Tolstoy did not manage to watch his play in Tula." },
      { letter: "19", text: "V. Nemirovich-Danchenko discussed the stage costumes and decorations for The Fruits of Enlightenment with Leo Tolstoy." }
    ],
    key: {
      "13": "f",
      "14": "f",
      "15": "ns",
      "16": "t",
      "17": "t",
      "18": "f",
      "19": "ns"
    }
  });
})(typeof window !== "undefined" ? window : this);
