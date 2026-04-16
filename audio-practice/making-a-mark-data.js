/**
 * Unit 9 CPE — Listening Part 2 · MAKING A MARK (Track 9.1)
 * Plain transcript = listening/making-a-mark.html TRANSCRIPT_PARTS (spoken script, no HTML).
 */
(function () {
  var AUDIO_SRC =
    "https://storage.yandexcloud.net/cpeaudio/RF_C2_SB_Track%209.1.mp3";

  var PARAGRAPHS = [
    "Architecture has an aim that diverges from art at some level because it involves pushing the boundaries of what it is physically possible to make when something has to be functional as well as aesthetically pleasing on such a vast scale. As such it presents far greater opportunities to shock and surprise, at times being a real eye opener into the creativity of the human mind. A quick glance around the world's most renowned buildings – be they ancient or modern – will confirm that the architects of these kinds of landmark buildings are extremely single-minded people, dead set on leaving behind some kind of legacy project or grand statement that might earn them a reputation for all eternity.",
    "If I were to ask you to illustrate this point, no doubt you'd come up with some classics – the Colosseum in Rome, the Guggenheim in Bilbao, the Sydney Opera House, the list goes on. But these buildings all have one common function in that they're designed for pleasure and entertainment, and, as a genre, have been reimagined and reworked over and over. However, what we're going to hone in on today, is the lowly office building, where many of us spend our days. As we will see, this is an area where architects have really blazed a new trail. The eye-watering costs of these buildings are clearly beyond all but the most ambitious or wealthy organisations and therefore it is no surprise that many are located in financial districts in capital cities.",
    "It is worth noting that these have been met with mixed reviews.",
    "Take Lloyd's of London – considered by some to be the first step into innovative workplace architecture. Opened in 1986, its pioneering high-tech architecture can be seen in the fact that the building's services – including lifts, water pipes and staircases, are actually located on the building's exterior, opening up the interior and creating a space of breath-taking proportions. It reimagined what an office space could look like. However, with the plans having been drawn up with attention to function rather than form, it is perhaps unsurprising that the initial reception could be described as lukewarm at best. It was variously nicknamed an oil rig and a motorbike engine with some even going so far as to call it an eyesore. However, over the years the building has been embraced, being seen as iconic and a game changer of its time. In fact, it was granted Grade I building protection, affording it the same elite status as other key buildings and monuments in England, such as Buckingham Palace, the Royal Albert Hall and Nelson's Column.",
    "Another fascinating example for us to look at is the F&F building, in Panama City, completed in 2011. And look – it is in the shape of a corkscrew. What is particularly intriguing to note, is that the spiral design actually started out as merely a theoretical project by the architect company, but despite not having been intended as an actual building, it caught the eye of one of the company's clients and the decision was taken to go ahead with this design. The building is covered in glass and so appears to shimmer in the sunlight and is really eye-catching. It is also remarkable insofar as its budget was relatively low for a building of this magnitude – $50 million. Again, opinions are divided on its appeal, although this could be down to the fact that a considerable amount of the space has not been able to be rented out, so for some, it might be deemed a waste of money.",
    "These buildings seem to have been more controversial than their cultural counterparts that I mentioned earlier like the Guggenheim, and these could also be described as not fitting everyone's ideas of great design, although it's not altogether clear why this should be. Anyway, both these buildings are definitely imposing, intended to communicate the expertise of their designers in addition to the success and dominance of the companies that are located in them.",
    "Let's now compare those with this one which I'd say is much more whimsical – the office of the National Fisheries Board of India in the city of Hyderabad, which was based on Frank Gehry's Golden Fish in Barcelona, although it possesses none of his trademark flowing design and is instead an altogether more simple representation of a fish. Motives for a design like this? Well, I suppose it offers employees who would otherwise be stuck working in some bland, nondescript government building an element of fun, or perhaps a topic for the watercooler, but I wonder what you think of this. Do you think its novelty value will wear off in the future? Is it liable to date quickly and require a revamp or replacement?"
  ];

  function splitIntoSentences(paragraph) {
    var chunks = paragraph.split(". ");
    var out = [];
    for (var i = 0; i < chunks.length; i++) {
      var s = chunks[i].trim();
      if (!s) {
        continue;
      }
      if (i < chunks.length - 1) {
        s += ".";
      }
      out.push(s);
    }
    return out;
  }

  var sentences = [];
  for (var p = 0; p < PARAGRAPHS.length; p++) {
    var segs = splitIntoSentences(PARAGRAPHS[p]);
    for (var j = 0; j < segs.length; j++) {
      sentences.push(segs[j]);
    }
  }

  /** High-signal words for gap fill (must appear as tokens in the transcript). */
  var KEYWORDS = [
    "Architecture",
    "diverges",
    "boundaries",
    "aesthetically",
    "pleasing",
    "single-minded",
    "legacy",
    "eternity",
    "Colosseum",
    "Guggenheim",
    "function",
    "entertainment",
    "reimagined",
    "hone",
    "blazed",
    "eye-watering",
    "organisations",
    "financial",
    "districts",
    "mixed",
    "reviews",
    "innovative",
    "pioneering",
    "services",
    "including",
    "staircases",
    "exterior",
    "proportions",
    "lukewarm",
    "nicknamed",
    "embraced",
    "iconic",
    "changer",
    "protection",
    "monuments",
    "Buckingham",
    "fascinating",
    "Panama",
    "corkscrew",
    "spiral",
    "theoretical",
    "intriguing",
    "shimmer",
    "remarkable",
    "insofar",
    "magnitude",
    "opinions",
    "divided",
    "rented",
    "deemed",
    "controversial",
    "counterparts",
    "imposing",
    "communicate",
    "expertise",
    "designers",
    "dominance",
    "whimsical",
    "Fisheries",
    "Hyderabad",
    "nondescript",
    "novelty",
    "revamp"
  ];

  window.CPE_MAKING_A_MARK = {
    title: "MAKING A MARK",
    audioSrc: AUDIO_SRC,
    paragraphs: PARAGRAPHS,
    sentences: sentences,
    keywords: KEYWORDS
  };
})();
