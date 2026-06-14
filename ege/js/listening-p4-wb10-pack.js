/**
 * Level 10 — Listening Part 4 (Student's Book multiple matching) · RF_C2_SB Track 10.1.
 * Same script/audio reference as audio-practice/wb-track10-p4-data.js and exam p4-multiple-matching.html.
 */
(function (W) {
  var PARAS = [
    "The recording should have been straightforward since we'd contracted an experienced freelancer, so we only had the studio for two days. The author, some up-and-coming novelist who was on the radar of the literary magazines, decided she wanted to come to the recording, which I thought would be a nice touch. Well, it was an utter disaster; she kept interrupting the voice artist to explain how she wanted certain lines delivered. This obviously didn't go down well, and they went back and forth bickering about it for hours. At the end of day one, we'd barely even finished the first chapter. I had no one to blame except myself though and next time I won't get carried away with any notions of bringing people together to collaborate on an audiobook and will just get it done.",

    "I had reservations at the outset to be honest. The network had gotten itself all worked up about a movie version of Gina Lee's latest novel and asked me to write the screenplay. I suppose I was flattered even though it was a daunting task to say the least. Anyway, one day, all of a sudden, production halted, and we were all sent home. Only later did I discover that they'd gone way over budget on the CGI and the investors had pulled out so, the whole thing was shelved. But at least I now know that, were I to ever get asked to be involved in something similar, I should just walk away – it's not worth the stress regardless of any promises of potential box office fortunes.",

    "Had I known how it would end up, I would have definitely approached things differently. It turns out that subtitling is actually really technical, but we wanted to avoid having to hire a load of dubbing actors. With all the characters in the film, it would have taken forever and been incompatible with our schedules. And the production team was pretty bilingual, so we went with subtitling instead, thinking it would be way less effort. But it soon became apparent that there's much more to it than meets the eye. Subtitling is all about where you split the sentences to fit logical sections on to the screen so that people can follow what's going on, but with these never-ending monologues from some of the characters… it was a nightmare and we had to get some actual closed caption specialists in to review everything at the last minute, which was unimaginably stressful.",

    "Never have I been involved in such a disastrous film adaptation of a book. As the lead scriptwriter I should have been more outspoken and dismissed their suggestions out of hand. I know that there's a place for artistic licence, but I should have stood my ground. I tried to warn the production team not to cast an actor with blond hair if they didn't want to alienate the legions of fans loyal to the book. For them the protagonist's flaming red hair is fundamental to his character. Then, inexplicably, they decided to omit the part where he abandons his homeland, the very part that drives most of the narrative. Instead, they gave the film a romantic slant for reasons best known to themselves. It's not surprising it bombed spectacularly at the box office.",

    "We wanted to stimulate good discussions amongst professionals in order to get the most accurate translation, so we had our translators work in mini groups of three for each language. We expected them to self-manage and were pretty hands off at the beginning. What we did not predict however, was such vastly different team dynamics and so our schedule went out the window as some teams got on with it while others went round in circles. Anyway, we acted fast and got two of our in-house project managers to step in and impose some kind of order. No sooner had they started coordinating the discussions than the production schedule got back on track, and we managed to publish the translations simultaneously in China, Brazil, Germany and Turkey."
  ];

  W.U10_P4_WB_TRANSCRIPT_PARAS = PARAS;

  /** One joined passage for lexical games / gap engines (same text as CPE_WB10_P4_MULTIPLE_MATCHING). */
  W.U10_P4_LEXIS_PLAIN = PARAS.join(" ")
    .replace(/\r\n/g, "\n")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  /** Shared speaker label for Word Bank, fall pool, sticky, Prep vault (must match checkboxes in index). */
  W.LEX_U10_P4_SPEAKER_LABEL = "Listening: Part 4 · Unit 10 (SB 10.1)";

  /**
   * Unit 10 lexical games bank: English paraphrase (hint) + exact substring from the five monologues.
   * Flip-card fronts use hint only (no headword spoiler).
   */
  W.U10_P4_LEXIS_GAME_ROWS = [
    { hint: "Grammar of expectation versus reality: it ought to have been simple — but it was not.", ans: "should have been straightforward" },
    { hint: "Adjective for someone whose career is clearly on the rise.", ans: "up-and-coming novelist" },
    { hint: "Metaphor: professionals have started noticing you; you are on their screens.", ans: "on the radar of the literary magazines" },
    { hint: "You thought it would be a pleasant extra detail or stylish addition.", ans: "which I thought would be a nice touch" },
    { hint: "Intensifier plus noun: a complete catastrophe.", ans: "an utter disaster" },
    { hint: "Idiom: people did not approve; the idea fell flat socially.", ans: "didn't go down well" },
    { hint: "Argued repeatedly back and forth for a long time — a drawn-out petty quarrel.", ans: "went back and forth bickering about it for hours" },
    { hint: "Let yourself get carried away with abstract ideas and lost sight of practicality.", ans: "get carried away with any notions of" },
    { hint: "Polite, adult way to say you had doubts from the very beginning.", ans: "had reservations at the outset" },
    { hint: "The team whipped itself into shared hype or panic about something.", ans: "gotten itself all worked up about" },
    { hint: "Understatement after a huge challenge: hard — to put it mildly.", ans: "a daunting task to say the least" },
    { hint: "Project cancelled and stored away — nothing moves forward.", ans: "the whole thing was shelved" },
    { hint: "Formal inverted conditional: if I were ever invited again…", ans: "were I to ever get asked" },
    { hint: "Advice to walk out rather than stay in a doomed situation.", ans: "should just walk away" },
    { hint: "Big talk about cinema profits that may never materialise.", ans: "promises of potential box office fortunes" },
    { hint: "Inverted conditional: if only you had foreseen how it would finish.", ans: "Had I known how it would end up" },
    { hint: "Would have handled the situation in a different way.", ans: "approached things differently" },
    { hint: "Formal: it quickly became obvious (stronger than simply I realised).", ans: "it soon became apparent" },
    { hint: "Fixed saying: more hidden complexity than a quick glance suggests.", ans: "much more to it than meets the eye" },
    { hint: "Clashes with calendars; cannot be aligned with our timings.", ans: "incompatible with our schedules" },
    { hint: "Subtitling jargon: choosing where sentences break across lines on screen.", ans: "where you split the sentences" },
    { hint: "Long solo speeches that seem to go on without end.", ans: "never-ending monologues" },
    { hint: "At the final moment when everything is already urgent.", ans: "at the last minute" },
    { hint: "Strong collocation criticising a screen version of a book.", ans: "disastrous film adaptation" },
    { hint: "Speak up more frankly instead of staying diplomatically quiet.", ans: "been more outspoken" },
    { hint: "Reject suggestions instantly, without even debating them.", ans: "dismissed their suggestions out of hand" },
    { hint: "Defence of deliberate changes when adapting a story — up to a point.", ans: "there's a place for artistic licence" },
    { hint: "Regret: you ought to have defended your position and not yielded.", ans: "I should have stood my ground" },
    { hint: "Risk driving away huge crowds of loyal supporters.", ans: "alienate the legions of fans" },
    { hint: "Vivid colour phrase for bright red hair.", ans: "flaming red hair" },
    { hint: "Informal two-word verb: failed very publicly at the cinema.", ans: "bombed spectacularly" },
    { hint: "Aim to provoke thoughtful, high-quality debate among specialists.", ans: "stimulate good discussions" },
    { hint: "Management style: you stay distant and avoid micromanaging.", ans: "pretty hands off" },
    { hint: "Storytelling pivot introducing the thing nobody saw coming.", ans: "What we did not predict however" },
    { hint: "Totally different group atmospheres from one team to another.", ans: "vastly different team dynamics" },
    { hint: "Idiom: the timetable collapsed and ceased to mean anything.", ans: "schedule went out the window" },
    { hint: "Idiom: repeated the same loop with no real headway.", ans: "went round in circles" },
    { hint: "Force at least minimal structure onto chaos.", ans: "impose some kind of order" },
    { hint: "Advanced pattern: hardly had X begun when Y immediately followed.", ans: "No sooner had they started coordinating the discussions than the production schedule got back on track" },
    { hint: "Idiom: returned to the planned rhythm after things went wrong.", ans: "got back on track" }
  ];

  /** Treasure Hunt rows: hint → exact chunk in monologues (order follows script). */
  W.LEX_LISTENING_P4_WB10_DATA = [
    { hint: "Kept telling the reader how lines should sound in the studio (long verb phrase)", before: "", after: "", ans: "interrupting the voice artist to explain how she wanted certain lines delivered" },
    { hint: "Argued repeatedly for a long time; informal phrasal chunk", before: "", after: "", ans: "went back and forth bickering about it for hours" },
    { hint: "Naive ideas about teamwork on a spoken-book project", before: "", after: "", ans: "notions of bringing people together to collaborate on an audiobook" },
    { hint: "Money ran out on computer-generated imagery", before: "", after: "", ans: "gone way over budget on the CGI" },
    { hint: "Backers withdrew their funding", before: "", after: "", ans: "the investors had pulled out" },
    { hint: "Film project cancelled; one-word past participle", before: "", after: "", ans: "shelved" },
    { hint: "More complicated than it first appears (fixed idiom)", before: "", after: "", ans: "more to it than meets the eye" },
    { hint: "Hired experts in on-screen text at the last moment", before: "", after: "", ans: "closed caption specialists in to review everything at the last minute" },
    { hint: "Reject proposals immediately and decisively", before: "", after: "", ans: "dismissed their suggestions out of hand" },
    { hint: "Creative changes to the story the team allowed themselves", before: "", after: "", ans: "artistic licence" },
    { hint: "Failed badly at the cinema; two-word informal verb", before: "", after: "", ans: "bombed spectacularly" },
    { hint: "Lost control of the timetable; informal phrase with “window”", before: "", after: "", ans: "schedule went out the window" },
    { hint: "Began managing the talks again; verb + “discussions”", before: "", after: "", ans: "coordinating the discussions" }
  ];

  W.U10_P4_WB_TH_TASKS = W.LEX_LISTENING_P4_WB10_DATA.map(function (d, i) {
    return { syn: d.hint, id: String(i + 1) };
  });

  /** Freer practice (60s) — themes from the five monologues. */
  W.U9_SPEAK_FREER_LISTEN_P4_WB10 = [
    "One speaker regrets letting too many stakeholders into an audiobook session. When has a group project gone wrong because too many people wanted to “direct” the work?",
    "A film never launched because of CGI costs and investors. Do you think big effects budgets help or hurt cinema today?",
    "Subtitling turned out harder than expected; specialists had to fix it. Tell about a task you underestimated until an expert explained the details.",
    "Fans rejected a film because casting and plot strayed from the book. How important is loyalty to source material versus artistic licence?",
    "Translation teams worked in threes; some stalled until project managers stepped in. How do you get a group back on track when dynamics splinter?"
  ];
})(typeof window !== "undefined" ? window : globalThis);
