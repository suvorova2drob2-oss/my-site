/**
 * OGE Reading · Unit 2 · Tasks 13–19 · AI reads an ancient manuscript.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u2-variant2-reading-tfns",
    unitOrder: 2,
    title: "Unit 2 · AI reads an ancient manuscript",
    sectionKicker: "Reading",
    examSection: "Tasks 13–19",
    headerTitle: "AI reads an ancient manuscript",
    instructionHtml:
      "Прочитайте текст. Определите, какие утверждения <strong>13–19</strong> соответствуют тексту: <strong>1 True</strong>, <strong>2 False</strong>, <strong>3 Not stated</strong>.",
    readingPassageHtml:
      "<p>In 2024, university professors and students made a sensational discovery — they identified about 2,000 letters in ancient Roman manuscripts. The project is called <em>The Vesuvius Challenge</em> and aims to use artificial intelligence (AI) to read damaged manuscripts that were buried nearly two thousand years ago.</p>" +
      "<p>The manuscripts were buried in 79 B.C. during the eruption of Mount Vesuvius, which covered Roman cities in ash and fire. A villa containing a large papyrus library was buried in hot lava.</p>" +
      "<p>Some scrolls survived because the volcanic lava carbonized them, protecting them from bacteria. They remained underground for about 1,700 years.</p>" +
      "<p>The manuscripts were discovered in the 18th century by an Italian farmworker digging a well. Archaeologists found statues and manuscripts, but early attempts to open the scrolls destroyed many of them because they were so brittle. They were kept in museums, untouched, until the 21st century.</p>" +
      "<p>AI has become a game-changer that allows scientists to look inside the scrolls without physical contact. Dr. Brent Seales leads a team of developers who virtually unwrap and decode the scrolls.</p>" +
      "<p>So far, most of the opened scrolls contain philosophical texts. They were written in Greek and prove that ancient philosophers promoted quite progressive ideas. For instance, as early as in the 4th century B.C. they believed that everything in nature is made of atoms, which are too small to be seen. The decoded manuscripts will definitely make a huge impact on our vision of the past. Even more important, AI has become a powerful instrument to help scientists solve old and new mysteries.</p>",
    statements: [
      { letter: "13", text: "The Vesuvius Challenge team was created for archaeological digging in Italy." },
      { letter: "14", text: "It was Julius Caesar's father-in-law who started the library of papyrus manuscripts." },
      { letter: "15", text: "The manuscripts survived underground due to the absence of bacteria." },
      { letter: "16", text: "Until the 21st century, lots of the scrolls were kept unread." },
      { letter: "17", text: "The Vesuvius Challenge project is still in progress." },
      { letter: "18", text: "Professor Seales has worked on The Vesuvius Challenge alone." },
      { letter: "19", text: "Some of the decoded manuscripts contained drawings of atoms." }
    ],
    key: {
      "13": "f",
      "14": "ns",
      "15": "t",
      "16": "t",
      "17": "f",
      "18": "ns",
      "19": "ns"
    }
  });
})(typeof window !== "undefined" ? window : this);
