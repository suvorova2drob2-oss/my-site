/**
 * Unit 10 · SB Track 10.1 — один непрерывный трек (пять монологов Part 4); по очереди каждое предложение
 * с несколькими пропусками. Поле speaker: 1…5 — номер монолога в записи.
 */
(function (W) {
  "use strict";

  W.U10_GAP_AUDIO_ROUND = {
    audioSrc: "../../../audio/cpe/RF_C2_SB_Track_10.1.mp3",
    audioSrcRemote:
      "https://storage.yandexcloud.net/cpeaudio/RF_C2_SB_Track%2010.1.mp3",
    wordBankNote:
      "Те же монологи и лексика, что в теме «Listening: Part 4 · Unit 10 (SB 10.1)».",
    /** Всего спикеров в треке (монологи по порядку записи). */
    speakerCount: 5,
    items: [
      {
        speaker: 1,
        sentence:
          "The recording should have been straightforward since we'd contracted an experienced freelancer, so we only had the studio for two days.",
        gaps: [
          { token: "recording", hint: "Noun: what you capture in a studio session." },
          {
            token: "straightforward",
            hint: "It ought to have been simple — grammar of expectation."
          },
          { token: "contracted", hint: "Formal verb: formally hired someone." },
          { token: "freelancer", hint: "Self-employed professional for a job." },
          { token: "studio", hint: "Where the voice recording happens." }
        ]
      },
      {
        speaker: 1,
        sentence:
          "The author, some up-and-coming novelist who was on the radar of the literary magazines, decided she wanted to come to the recording, which I thought would be a nice touch.",
        gaps: [
          { token: "novelist", hint: "Writer of novels." },
          { token: "radar", hint: "Metaphor: started noticing the writer." },
          { token: "literary", hint: "Adjective collocating with magazines." },
          { token: "magazines", hint: "Publications reviewing books." },
          { token: "touch", hint: "Collocation: a pleasant extra detail." }
        ]
      },
      {
        speaker: 1,
        sentence:
          "Well, it was an utter disaster; she kept interrupting the voice artist to explain how she wanted certain lines delivered.",
        gaps: [
          { token: "utter", hint: "Intensifier before disaster." },
          { token: "disaster", hint: "Strong noun: complete failure." },
          { token: "interrupting", hint: "Breaking in while someone speaks." },
          { token: "artist", hint: "Person reading the audiobook lines." },
          { token: "delivered", hint: "Past participle: how lines were spoken." }
        ]
      },
      {
        speaker: 1,
        sentence:
          "This obviously didn't go down well, and they went back and forth bickering about it for hours.",
        gaps: [
          { token: "obviously", hint: "Clearly / as anyone could see." },
          { token: "well", hint: "Part of go down ___ — liked / accepted." },
          { token: "forth", hint: "Back and ___ — repeated motion." },
          { token: "bickering", hint: "Petty arguing back and forth." },
          { token: "hours", hint: "They argued for a long stretch of time." }
        ]
      },
      {
        speaker: 2,
        sentence:
          "Only later did I discover that they'd gone way over budget on the CGI and the investors had pulled out so, the whole thing was shelved.",
        gaps: [
          { token: "discover", hint: "Verb after inverted Only later did I…" },
          { token: "budget", hint: "Money planned for production." },
          { token: "CGI", hint: "Computer-generated imagery." },
          { token: "investors", hint: "People funding the film." },
          { token: "shelved", hint: "Project cancelled / put aside." }
        ]
      },
      {
        speaker: 3,
        sentence:
          "Subtitling is all about where you split the sentences to fit logical sections on to the screen so that people can follow what's going on, but with these never-ending monologues from some of the characters\u2026 it was a nightmare and we had to get some actual closed caption specialists in to review everything at the last minute, which was unimaginably stressful.",
        gaps: [
          { token: "split", hint: "Where subtitles break across lines." },
          { token: "logical", hint: "Sections that make sense to viewers." },
          { token: "monologues", hint: "Long solo speeches." },
          { token: "caption", hint: "Closed ___ specialists." },
          { token: "minute", hint: "Very late — at the last ___." }
        ]
      },
      {
        sentence:
          "I know that there's a place for artistic licence, but I should have stood my ground.",
        gaps: [
          { token: "place", hint: "There's a ___ for — room / justification." },
          { token: "artistic", hint: "Collocation with licence." },
          {
            token: "licence",
            accept: ["licence", "license"],
            hint: "UK spelling in script; US spelling OK."
          },
          { token: "stood", hint: "Past of stand — defend position." },
          { token: "ground", hint: "Stand my ___ — not yield." }
        ]
      },
      {
        speaker: 4,
        sentence:
          "It's not surprising it bombed spectacularly at the box office.",
        gaps: [
          { token: "surprising", hint: "Not ___ — expected outcome." },
          { token: "bombed", hint: "Informal: failed badly at cinemas." },
          { token: "spectacularly", hint: "Adverb with bombed." },
          { token: "box", hint: "___ office — cinema takings." },
          { token: "office", hint: "Second half of box ___." }
        ]
      },
      {
        speaker: 5,
        sentence:
          "What we did not predict however, was such vastly different team dynamics and so our schedule went out the window as some teams got on with it while others went round in circles.",
        gaps: [
          { token: "predict", hint: "Did not ___ — foresee." },
          { token: "dynamics", hint: "How the groups worked together." },
          { token: "schedule", hint: "The timetable collapsed." },
          { token: "window", hint: "Went out the ___ — ruined plan." },
          { token: "circles", hint: "Going round in ___ — no progress." }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
