/**
 * CPE Student's Book — RF_C2_SB Track 10.1 · Listening Part 4 (multiple matching, Unit 10).
 * Five monologues; same script as on-disk exam. Use SB class audio — not Workbook Track 10
 * (WB_Track 10 is a different recording: Part 2 sentence completion / other workbook task).
 */
(function () {
  var AUDIO_SRC =
    "https://storage.yandexcloud.net/cpeaudio/RF_C2_SB_Track%2010.1.mp3";

  var PARAGRAPHS = [
    "The recording should have been straightforward since we'd contracted an experienced freelancer, so we only had the studio for two days. The author, some up-and-coming novelist who was on the radar of the literary magazines, decided she wanted to come to the recording, which I thought would be a nice touch. Well, it was an utter disaster; she kept interrupting the voice artist to explain how she wanted certain lines delivered. This obviously didn't go down well, and they went back and forth bickering about it for hours. At the end of day one, we'd barely even finished the first chapter. I had no one to blame except myself though and next time I won't get carried away with any notions of bringing people together to collaborate on an audiobook and will just get it done.",

    "I had reservations at the outset to be honest. The network had gotten itself all worked up about a movie version of Gina Lee's latest novel and asked me to write the screenplay. I suppose I was flattered even though it was a daunting task to say the least. Anyway, one day, all of a sudden, production halted, and we were all sent home. Only later did I discover that they'd gone way over budget on the CGI and the investors had pulled out so, the whole thing was shelved. But at least I now know that, were I to ever get asked to be involved in something similar, I should just walk away – it's not worth the stress regardless of any promises of potential box office fortunes.",

    "Had I known how it would end up, I would have definitely approached things differently. It turns out that subtitling is actually really technical, but we wanted to avoid having to hire a load of dubbing actors. With all the characters in the film, it would have taken forever and been incompatible with our schedules. And the production team was pretty bilingual, so we went with subtitling instead, thinking it would be way less effort. But it soon became apparent that there's much more to it than meets the eye. Subtitling is all about where you split the sentences to fit logical sections on to the screen so that people can follow what's going on, but with these never-ending monologues from some of the characters\u2026 it was a nightmare and we had to get some actual closed caption specialists in to review everything at the last minute, which was unimaginably stressful.",

    "Never have I been involved in such a disastrous film adaptation of a book. As the lead scriptwriter I should have been more outspoken and dismissed their suggestions out of hand. I know that there's a place for artistic licence, but I should have stood my ground. I tried to warn the production team not to cast an actor with blond hair if they didn't want to alienate the legions of fans loyal to the book. For them the protagonist's flaming red hair is fundamental to his character. Then, inexplicably, they decided to omit the part where he abandons his homeland, the very part that drives most of the narrative. Instead, they gave the film a romantic slant for reasons best known to themselves. It's not surprising it bombed spectacularly at the box office.",

    "We wanted to stimulate good discussions amongst professionals in order to get the most accurate translation, so we had our translators work in mini groups of three for each language. We expected them to self-manage and were pretty hands off at the beginning. What we did not predict however, was such vastly different team dynamics and so our schedule went out the window as some teams got on with it while others went round in circles. Anyway, we acted fast and got two of our in-house project managers to step in and impose some kind of order. No sooner had they started coordinating the discussions than the production schedule got back on track, and we managed to publish the translations simultaneously in China, Brazil, Germany and Turkey."
  ];

  function splitIntoSentences(paragraph) {
    var chunks = paragraph.split(". ");
    var out = [];
    for (var i = 0; i < chunks.length; i++) {
      var s = chunks[i].trim();
      if (!s) continue;
      if (i < chunks.length - 1) s += ".";
      out.push(s);
    }
    return out;
  }

  var sentences = [];
  for (var p = 0; p < PARAGRAPHS.length; p++) {
    var segs = splitIntoSentences(PARAGRAPHS[p]);
    for (var j = 0; j < segs.length; j++) sentences.push(segs[j]);
  }

  var KEYWORDS = [
    "recording",
    "straightforward",
    "contracted",
    "experienced",
    "freelancer",
    "studio",
    "novelist",
    "radar",
    "literary",
    "magazines",
    "disaster",
    "interrupting",
    "voice",
    "artist",
    "delivered",
    "bickering",
    "chapter",
    "blame",
    "collaborate",
    "audiobook",
    "reservations",
    "outset",
    "network",
    "screenplay",
    "flattered",
    "daunting",
    "production",
    "halted",
    "budget",
    "CGI",
    "investors",
    "shelved",
    "walk",
    "stress",
    "fortunes",
    "subtitling",
    "technical",
    "dubbing",
    "bilingual",
    "effort",
    "apparent",
    "caption",
    "specialists",
    "minute",
    "stressful",
    "disastrous",
    "adaptation",
    "scriptwriter",
    "outspoken",
    "licence",
    "ground",
    "cast",
    "blond",
    "alienate",
    "loyal",
    "protagonist",
    "flaming",
    "fundamental",
    "omit",
    "abandons",
    "homeland",
    "narrative",
    "romantic",
    "bombed",
    "spectacular",
    "stimulate",
    "translation",
    "translators",
    "dynamics",
    "schedule",
    "circles",
    "managers",
    "impose",
    "coordinating",
    "publish",
    "simultaneously",
    "notions",
    "monologues",
    "nightmare",
    "inexplicably",
    "in-house",
    "unexpected"
  ];

  window.CPE_WB10_P4_MULTIPLE_MATCHING = {
    title: "PART 4 MULTIPLE MATCHING (TRACK 10)",
    audioSrc: AUDIO_SRC,
    paragraphs: PARAGRAPHS,
    sentences: sentences,
    keywords: KEYWORDS
  };
})();
