/**
 * RF_C2_SB Track 10.1 — Part 4 multiple matching: Evidence + distractor hunt segments per speaker.
 * Same audio/script as `wb-track10-p4-data.js` (not Workbook Track 10).
 * Same pattern as Changes at school (changes-at-school-evidence-data.js): Step 1 green evidence, Step 2 red distractors with [! letter].
 */
(function () {
  window.U_P4_HUNT_LABS = [
    {
      speaker: 1,
      evidenceIds: ["s1e1", "s1e2", "s1e3"],
      distractorIds: ["s1d1", "s1d2"],
      evidenceLine:
        "Step 1. Click three phrases that support the workbook answers for this speaker (Task 1 & Task 2) — they turn green.",
      distractorLine:
        "Step 2. Click two tempting phrases that match a wrong A–H option (Task 1 or Task 2) — they turn red with a badge.",
      wrongEvidenceToast: "Look for conflict / quarrel (Task 1) and keeping things simple (Task 2), not studio time or self-blame alone.",
      segments: [
        { kind: "plain", text: "The recording should have been straightforward since we'd contracted an experienced freelancer, " },
        { kind: "distractor", id: "s1d1", key: "H", task: 1, text: "so we only had the studio for two days." },
        {
          kind: "plain",
          text: " The author, some up-and-coming novelist who was on the radar of the literary magazines, decided she wanted to come to the recording, which I thought would be a nice touch. Well, it was an utter disaster; "
        },
        {
          kind: "evidence",
          id: "s1e1",
          text: "she kept interrupting the voice artist to explain how she wanted certain lines delivered"
        },
        { kind: "plain", text: ". This obviously didn't go down well, and " },
        { kind: "evidence", id: "s1e2", text: "they went back and forth bickering about it for hours" },
        { kind: "plain", text: ". At the end of day one, we'd barely even finished the first chapter. " },
        { kind: "distractor", id: "s1d2", key: "D", task: 1, text: "I had no one to blame except myself though" },
        { kind: "plain", text: " and " },
        {
          kind: "evidence",
          id: "s1e3",
          text: "next time I won't get carried away with any notions of bringing people together to collaborate on an audiobook and will just get it done"
        },
        { kind: "plain", text: "." }
      ]
    },
    {
      speaker: 2,
      evidenceIds: ["s2e1", "s2e2", "s2e3"],
      distractorIds: ["s2d1", "s2d2"],
      evidenceLine: "Step 1. Three phrases: money / investors pulled out, and walking away (lesson).",
      distractorLine: "Step 2. Two distractors: wrong reason (A) and stress vs saying no (F).",
      wrongEvidenceToast: "Look for budget and investors (Task 1) and refusing the offer (Task 2).",
      segments: [
        { kind: "plain", text: "I had reservations at the outset to be honest. " },
        {
          kind: "distractor",
          id: "s2d1",
          key: "A",
          task: 1,
          text: "The network had gotten itself all worked up about a movie version of Gina Lee's latest novel and asked me to write the screenplay."
        },
        {
          kind: "plain",
          text: " I suppose I was flattered even though it was a daunting task to say the least. Anyway, one day, all of a sudden, production halted, and we were all sent home. Only later did I discover that "
        },
        { kind: "evidence", id: "s2e1", text: "they'd gone way over budget on the CGI" },
        { kind: "plain", text: " and " },
        { kind: "evidence", id: "s2e2", text: "the investors had pulled out" },
        {
          kind: "plain",
          text: " so, the whole thing was shelved. But at least I now know that, were I to ever get asked to be involved in something similar, "
        },
        { kind: "evidence", id: "s2e3", text: "I should just walk away" },
        { kind: "plain", text: " \u2013 " },
        {
          kind: "distractor",
          id: "s2d2",
          key: "F",
          task: 2,
          text: "it's not worth the stress regardless of any promises of potential box office fortunes"
        },
        { kind: "plain", text: "." }
      ]
    },
    {
      speaker: 3,
      evidenceIds: ["s3e1", "s3e2", "s3e3"],
      distractorIds: ["s3d1", "s3d2"],
      evidenceLine: "Step 1. Easy subtitling choice, and bringing professionals in.",
      distractorLine: "Step 2. Technical detail trap (A) vs clear-instruction wording (C).",
      wrongEvidenceToast: "Look for the easy-option wording and the specialists (Task 1 & 2).",
      segments: [
        { kind: "plain", text: "Had I known how it would end up, I would have definitely approached things differently. " },
        {
          kind: "distractor",
          id: "s3d1",
          key: "A",
          task: 1,
          text: "It turns out that subtitling is actually really technical"
        },
        {
          kind: "plain",
          text: ", but we wanted to avoid having to hire a load of dubbing actors. With all the characters in the film, it would have taken forever and been incompatible with our schedules. And the production team was pretty bilingual, so "
        },
        { kind: "evidence", id: "s3e1", text: "we went with subtitling instead" },
        { kind: "plain", text: ", " },
        { kind: "evidence", id: "s3e2", text: "thinking it would be way less effort" },
        {
          kind: "plain",
          text: ". But it soon became apparent that there's much more to it than meets the eye. Subtitling is all about "
        },
        {
          kind: "distractor",
          id: "s3d2",
          key: "C",
          task: 2,
          text: "where you split the sentences to fit logical sections on to the screen"
        },
        {
          kind: "plain",
          text:
            " so that people can follow what's going on, but with these never-ending monologues from some of the characters\u2026 it was a nightmare and we had to "
        },
        {
          kind: "evidence",
          id: "s3e3",
          text: "get some actual closed caption specialists in to review everything at the last minute"
        },
        { kind: "plain", text: ", which was unimaginably stressful." }
      ]
    },
    {
      speaker: 4,
      evidenceIds: ["s4e1", "s4e2", "s4e3"],
      distractorIds: ["s4d1", "s4d2"],
      evidenceLine: "Step 1. Standing your ground / resisting change, and omitted narrative detail.",
      distractorLine: "Step 2. Box-office bomb (E) vs instructions to the team (C).",
      wrongEvidenceToast: "Look for omitted plot (F) and standing ground (G).",
      segments: [
        {
          kind: "plain",
          text: "Never have I been involved in such a disastrous film adaptation of a book. As the lead scriptwriter I should have been more outspoken and dismissed their suggestions out of hand. I know that there's a place for artistic licence, but "
        },
        { kind: "evidence", id: "s4e1", text: "I should have stood my ground" },
        { kind: "plain", text: ". " },
        {
          kind: "distractor",
          id: "s4d2",
          key: "C",
          task: 2,
          text: "I tried to warn the production team not to cast an actor with blond hair if they didn't want to alienate the legions of fans loyal to the book."
        },
        { kind: "plain", text: " For them " },
        { kind: "evidence", id: "s4e3", text: "the protagonist's flaming red hair is fundamental to his character" },
        { kind: "plain", text: ". Then, inexplicably, " },
        {
          kind: "evidence",
          id: "s4e2",
          text: "they decided to omit the part where he abandons his homeland, the very part that drives most of the narrative"
        },
        { kind: "plain", text: ". Instead, they gave the film a romantic slant for reasons best known to themselves. " },
        { kind: "distractor", id: "s4d1", key: "E", task: 1, text: "It's not surprising it bombed spectacularly at the box office." },
        { kind: "plain", text: "." }
      ]
    },
    {
      speaker: 5,
      evidenceIds: ["s5e1", "s5e2", "s5e3"],
      distractorIds: ["s5d1", "s5d2"],
      evidenceLine: "Step 1. Hands-off leadership chaos, circles, and managers imposing order (clear control).",
      distractorLine: "Step 2. Translation goal (E) vs schedule back on track sounding like “structure” (D).",
      wrongEvidenceToast: "Look for hands-off management (D) and imposed order (C).",
      segments: [
        {
          kind: "plain",
          text: "We wanted to stimulate good discussions amongst professionals "
        },
        { kind: "distractor", id: "s5d1", key: "E", task: 1, text: "in order to get the most accurate translation" },
        {
          kind: "plain",
          text: ", so we had our translators work in mini groups of three for each language. We expected them to self-manage and "
        },
        { kind: "evidence", id: "s5e1", text: "were pretty hands off at the beginning" },
        { kind: "plain", text: ". What we did not predict however, was such vastly different team dynamics and so our schedule went out the window as " },
        { kind: "evidence", id: "s5e2", text: "some teams got on with it while others went round in circles" },
        { kind: "plain", text: ". Anyway, we acted fast and " },
        {
          kind: "evidence",
          id: "s5e3",
          text: "got two of our in-house project managers to step in and impose some kind of order"
        },
        { kind: "plain", text: ". " },
        {
          kind: "distractor",
          id: "s5d2",
          key: "D",
          task: 2,
          text: "No sooner had they started coordinating the discussions than the production schedule got back on track"
        },
        {
          kind: "plain",
          text: ", and we managed to publish the translations simultaneously in China, Brazil, Germany and Turkey."
        }
      ]
    }
  ];

  window.U_P4_OPTION_BY_TASK = {
    1: {
      A: "ignoring expert advice",
      B: "choosing an easy option",
      C: "a quarrel between those involved",
      D: "poor leadership",
      E: "targeting the wrong market",
      F: "failing to include significant details",
      G: "financial difficulties",
      H: "a lack of resources"
    },
    2: {
      A: "the advantage of keeping a process simple",
      B: "the benefit of investing in equipment",
      C: "the importance of giving clear instructions",
      D: "the benefit of having structure",
      E: "the need for professionals",
      F: "the importance of managing stress",
      G: "the value of resisting pressure to change",
      H: "the merits of saying no"
    }
  };
})();
