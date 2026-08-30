/**
 * Movie Club pack — Sterling Point · Beat 1 (summer camp).
 * Registers on window.MOVIE_CLUB_PACKS["sterling-point"]
 */
(function (global) {
  "use strict";

  var session = {
    id: "sterling-point",
    season: 1,
    num: 1,
    title: "Sterling Point",
    icon: "🏕️",
    tagline: "Summer anxiety · FOMO · chill vs spiral · processing news",
    synopsis:
      "Beat 1 · Summer camp. Cool phrases from the clip — tweaking, going buck wild, staying chill, processing, getting worked up.",
    beats: [
      {
        id: "beat-1-summer-camp",
        label: "Beat 1 · Summer camp",
        teacher:
          "Opening beat · summer camp nerves vs summer FOMO. Cool phrases from the clip. Discussion: when do you tweak — and when are you chill?",
        blocks: ["watch", "context"],
        phrases: [
          "Why are you tweaking over the summer camp?",
          "go buck wild",
          "she's being really chill about it",
          "Did you get in?",
          "I'm just processing.",
          "Try not to get too worked up.",
        ],
        watch: {
          note:
            "Clip TBD · summer camp / results energy. Steal the lines: tweaking · go buck wild · chill · Did you get in? · processing · worked up.",
        },
        context: {
          tone:
            "Lexical · anxiety slang + summer FOMO + calm reactions + emotional processing",
          meanings: [
            "tweaking over (sth) = freaking out / obsessing / stressing hard about something (informal, dramatic).",
            "Why are you tweaking over the summer camp? = Why are you spiralling / losing it over the camp?",
            "go buck wild = go completely wild — party hard, no filter, full chaos summer (exaggerated).",
            "Don't you think you're gonna regret not spending your summer going buck wild? = Won't you regret missing a wild free summer?",
            "chill about it = relaxed, not stressed, taking it easy.",
            "she's being really chill about it = she's staying calm / unbothered.",
            "Did you get in? = Were you accepted? (camp / school / programme).",
            "I'm just processing. = I need a moment to absorb the news — don't push me yet.",
            "get (too) worked up = become (too) agitated / anxious / emotional.",
            "Try not to get too worked up. = Try not to spiral / stay calm.",
          ],
          examples: [
            "TWEAKING OVER — tweaking over the summer camp · tweaking over the results · stop tweaking · why are you tweaking?",
            "Why are you tweaking over the summer camp?",
            "She's tweaking over every email from the office.",
            "GO BUCK WILD — go buck wild · spend the summer going buck wild · don't go completely buck wild.",
            "Don't you think you're gonna regret not spending your summer going buck wild?",
            "They went buck wild the night after exams.",
            "CHILL ABOUT IT — being really chill about it · stay chill · weirdly chill about the news.",
            "And she's being really chill about it.",
            "I'd be freaking out — she's being really chill about it.",
            "DID YOU GET IN? — Did you get in? · I got in. · She didn't get in.",
            "Did you get in?",
            "PROCESSING — I'm just processing. · give me a second to process · still processing the news.",
            "I'm just processing.",
            "WORKED UP — get too worked up · don't get worked up · getting worked up over nothing.",
            "Try not to get too worked up.",
          ],
        },
        speak: {
          mission:
            "Personal English · 60–90 s · steal tape phrases when they fit (don't force every line).",
          starters: [
            "I was tweaking over…",
            "Don't you think you're gonna regret not… going buck wild?",
            "She's being really chill about it, which made me…",
            "Did you get in? — and then I…",
            "I'm just processing…",
            "Try not to get too worked up — easier said than…",
          ],
          questions: [
            {
              q: "Tweaking vs chill: When news hits (camp, uni, a job), do you spiral — or go weirdly calm? What does “I'm just processing” look like for you?",
              examples: [
                "I tweak first, then go quiet.",
                "I look chill — inside I'm refreshing the email every 30 seconds.",
                "I need silence to process; talking makes it worse.",
                "I joke so I don't get too worked up.",
              ],
            },
            {
              q: "FOMO summer: “Don't you think you're gonna regret not spending your summer going buck wild?” — is that pressure useful, toxic, or both?",
              examples: [
                "Useful push if you're hiding from life.",
                "Toxic if rest / work / family is the real need.",
                "Buck wild for a weekend ≠ buck wild all summer.",
                "Regret cuts both ways — wild summers and quiet ones.",
              ],
            },
            {
              q: "Did you get in?: How do you ask someone about results without making them more worked up? What helps — and what makes it worse?",
              examples: [
                "Ask once, then give space.",
                "Offer a plan B conversation, not a pep talk.",
                "Don't say “relax” — say “I'm here when you're ready.”",
                "Celebrate quietly if they got in; don't compare.",
              ],
            },
            {
              q: "Steal the line: Tell a real moment when you (or a friend) were tweaking — and someone said “try not to get too worked up” or stayed really chill about it.",
              examples: [
                "Exam results night.",
                "Waiting for a visa / offer / medical news.",
                "A friend who went buck wild to avoid processing.",
                "You were chill on the outside — tweaking on the inside.",
              ],
            },
          ],
        },
        lexRound: {
          title: "Lexis round",
          mission:
            "Warm-up · practise the patterns out loud. Short turns. Then open Discussion for the deep talk.",
          drills: [
            {
              label: "TWEAKING OVER",
              bank: "tweaking over · Why are you tweaking over…? · stop tweaking",
              task: "Two lines: something you were tweaking over — and how someone reacted.",
            },
            {
              label: "GO BUCK WILD",
              bank: "go buck wild · spend the summer going buck wild · regret not…",
              task: "Steal the full line and twist it: “Don't you think you're gonna regret not…?”",
            },
            {
              label: "CHILL / PROCESSING / WORKED UP",
              bank: "really chill about it · I'm just processing · try not to get too worked up · Did you get in?",
              task: "Mini dialogue: results news → one person chill, one processing, one almost worked up.",
            },
          ],
        },
      },
    ],
    finale: {
      prompt:
        "Improv · 60 s · summer news lands. Use at least three tape phrases (tweaking / buck wild / chill / processing / worked up / Did you get in?).",
    },
    homework: {
      note:
        "Shadow Beat 1 lines × 3 takes when the clip lands. Until then: write 6–8 lines of a mini scene — someone tweaking over camp/uni results, someone chill, someone saying “I'm just processing.”",
    },
  };

  global.MOVIE_CLUB_PACKS = global.MOVIE_CLUB_PACKS || {};
  global.MOVIE_CLUB_PACKS["sterling-point"] = session;
})(typeof window !== "undefined" ? window : globalThis);
