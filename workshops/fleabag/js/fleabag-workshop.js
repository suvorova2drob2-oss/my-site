/**
 * Fleabag Workshop — beat-based club sessions.
 * Each episode = N discussion beats (clip → phrases → speak / shadow) + finale improv + HW.
 */
(function (global) {
  /** Shared block labels for beat screens */
  var BLOCK_META = {
    watch: {
      title: "Watch the moment",
      hint: "Your clip / timecode · 30–90 s",
    },
    phrases: {
      title: "Notice these lines",
      hint: "1–3 cool chunks from this beat · add to the tape",
    },
    context: {
      title: "Meaning & lexis",
      hint: "Patterns · collocations · how natives use it",
    },
    shadow: {
      title: "Shadow (optional here)",
      hint: "1–2 lines · echo once in class",
    },
    speak: {
      title: "Talk about it",
      hint: "Fullscreen discussion · 2–3 questions",
    },
  };

  /** Default skeleton if a session has no custom beats yet */
  function defaultBeats(n) {
    n = n || 8;
    var out = [];
    for (var i = 1; i <= n; i++) {
      out.push({
        id: "beat-" + i,
        label: "Beat " + i,
        teacher: "Clip → notice phrases → short talk. Mix blocks per beat as needed.",
        blocks: ["watch", "phrases", "speak"],
        phrases: [],
      });
    }
    return out;
  }

  var SESSIONS = [
    {
      id: "s01e01",
      season: 1,
      num: 1,
      title: "Episode 1 · Head above water",
      icon: "💥",
      tagline: "Fourth wall · chaos · grasping at anything",
      synopsis:
        "Angry, pervy, outrageous and hilarious, Fleabag arrives with a bang, as she spins through the city grasping at anyone and anything that might keep her head above water.",
      beats: [
        {
          id: "part-dickhead",
          label: "Part dickhead",
          teacher: "Clip 1 · opening energy.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e01/01-part-dickhead.mp4",
            note: "~40 s",
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "startup-loan",
          label: "Startup loan",
          teacher: "Clip 2 · pitching / the loan.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e01/02-startup-loan.mp4",
            note: "~1.5 min",
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "sister",
          label: "Sister",
          teacher: "Clip 3 · with Claire.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e01/03-sister.mp4",
            note: "~1.5 min",
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "shopping",
          label: "Shopping",
          teacher: "Clip 4 · shopping beat.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e01/04-shopping.mp4",
            note: "~50 s",
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "bad-feminists",
          label: "Bad feminists",
          teacher: "Clip 5.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e01/05-bad-feminists.mp4",
            note: "~45 s",
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "hugs",
          label: "Hugs",
          teacher: "Clip 6 · the hug.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e01/06-hugs.mp4",
            note: "~30 s",
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "dating",
          label: "Dating",
          teacher: "Clip 7 · dating beat.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e01/07-dating.mp4",
            note: "~30 s",
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "dad",
          label: "Dad",
          teacher: "Clip 8 · with Dad.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e01/08-dad.mp4",
            note: "~1.5 min",
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "step-mother",
          label: "Step-mother",
          teacher: "Clip 9 · godmother / step-mother energy.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e01/09-step-mother.mp4",
            note: "~2 min",
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "taxi",
          label: "Taxi",
          teacher: "Clip 10 · closing beat.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e01/10-taxi.mp4",
            note: "~1 min",
          },
          speak: { themes: [], questions: [] },
        },
      ],
      finale: {
        prompt:
          "Tell the camera one moment you grasped at anything to keep your head above water — use at least 4 phrases from the tape.",
      },
      homework: {
        note: "Shadow 3–5 lines from tonight’s beats · 3 takes each.",
      },
    },
    {
      id: "s01e02",
      season: 1,
      num: 2,
      title: "Episode 2 · Stolen goods",
      icon: "💔",
      tagline: "Grief · breakup · distraction romance",
      synopsis:
        "Haunted by memories of her dead best friend, dumped by her emotionally-fragile boyfriend, and now desperately trying to sell her stolen goods, Fleabag attempts to rekindle romantic fires to distract her from the mayhem of her life.",
      beats: [
        {
          id: "period-coming",
          label: "Period coming",
          teacher: "Clip 1.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e02/01-my-period-is-coming.mp4",
            note: "~35 s",
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "keep-up",
          label: "Keep up",
          teacher: "Clip 2.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e02/02-you-can-keep-up.mp4",
            note: "~30 s",
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "commit-breakups",
          label: "Commit to break-ups",
          teacher: "Clip 3.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e02/03-commit-to-break-ups.mp4",
            note: "~55 s",
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "hooker-slag",
          label: "Labels",
          teacher: "Clip 4.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e02/04-hooker-slag.mp4",
            note: "~30 s",
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "relentlessly-profound",
          label: "Profound",
          teacher: "Clip 5.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e02/05-relentlessly-profound.mp4",
            note: "~50 s",
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "how-behind",
          label: "How behind",
          teacher: "Clip 6.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e02/06-how-behind-are-you.mp4",
            note: "~1 min",
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "point-fingers",
          label: "Point fingers",
          teacher: "Clip 7.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e02/07-point-fingers.mp4",
            note: "~1 min",
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "surprise",
          label: "Surprise",
          teacher: "Clip 8.",
          blocks: ["watch", "phrases", "speak"],
          phrases: [],
          watch: {
            videoUrl: "media/s01e02/08-surprise.mp4",
            note: "~1.5 min",
          },
          speak: { themes: [], questions: [] },
        },
      ],
      finale: {
        prompt:
          "Improvisation: a distraction that almost worked — romance, a sale, a joke — while something heavier sat underneath. 60 s · use at least 4 tape phrases.",
      },
      homework: {
        note: "Shadow 3–5 lines · optional 45 s aside to camera.",
      },
    },
    {
      id: "s01e03",
      season: 1,
      num: 3,
      title: "Episode 3 · Claire’s birthday",
      icon: "🎁",
      tagline: "Gift shopping · surprise party · dating hunt",
      synopsis:
        "Fleabag helps her inappropriate brother-in-law buy a present for Claire, who is organising her own surprise birthday party. Meanwhile, on the hunt for a date, Fleabag reconnects with a toothy friend.",
      beats: [
        {
          id: "flaunt-life",
          label: "Flaunt your life",
          teacher:
            "Meaning first (Context) → then 2–3 personal answers that MUST use the target phrases. Keep it slow; silence is ok while they think.",
          blocks: ["watch", "context"],
          phrases: [
            "really inappropriate",
            "flaunt your life",
            "I can’t wait to be old",
            "if it’s any consolation",
          ],
          watch: {
            timecode: "S1E3 · sisters clip TBD",
            note: "Add videoUrl when the clip file is ready",
          },
          context: {
            tone: "Lexical · common patterns with these words",
            meanings: [
              "really inappropriate = the wrong tone / place / moment (stronger than ‘a bit rude’).",
              "flaunt = show something off so others notice — wealth, success, looks, happiness, ‘my life’.",
              "I can’t wait to… = strong desire for a future moment (rest, freedom, change) — often half-joking.",
              "if it’s any consolation = a softener before bad news or a weak comfort line.",
            ],
            examples: [
              "FLAUNT — common objects: flaunt your wealth / success / money / body / talent / happiness / new relationship / ‘perfect life’ online.",
              "She’s always flaunting her perfect weekends on Instagram.",
              "Don’t flaunt your promotion in front of people who just got laid off.",
              "In the show: flaunt your life = show you’re alive / okay when someone else is hurting.",
              "INAPPROPRIATE — common frames: really / totally / wildly inappropriate · inappropriate behaviour / comment / joke / question / timing.",
              "That joke was really inappropriate at a funeral.",
              "Is it inappropriate to talk about money here?",
              "I CAN’T WAIT TO… — popular follow-ups: I can’t wait to see you / go home / finish this / be done / get paid / be alone / be old (dark / tired humour).",
              "I can’t wait to get home and do nothing.",
              "I can’t wait to be old — fewer expectations, more rest.",
              "IF IT’S ANY CONSOLATION… — usually + bad news or a weak upside: If it’s any consolation, you’re not the only one. / …at least you tried. / …you look older than you are (knife).",
            ],
          },
          speak: {
            mission:
              "Personal English · 60 seconds · use the tape phrases in your answer.",
            starters: [
              "It felt really inappropriate when…",
              "It was like they were flaunting their life…",
              "I can’t wait to be old because I’m tired of…",
              "When I try to console someone, I usually…",
              "If it’s any consolation… — I’d rather say…",
            ],
            questions: [
              {
                q: "Someone had good news in your bad week. Was it really inappropriate — or did it only feel like they were flaunting their life because you were struggling? Tell that moment.",
                examples: [
                  "A colleague celebrates a promotion the week you got fired.",
                  "A friend posts holiday photos while you’re depressed.",
                  "After a funeral, someone is already ‘living again’ — and it makes you furious.",
                ],
              },
              {
                q: "Why might someone say “I can’t wait to be old”? Tired of expectations, wanting rest, dark humour — what do you hear in it? Finish: “I can’t wait to be old because I’m tired of ___.”",
                examples: [
                  "Tired of being judged for how you look / date / succeed.",
                  "Wanting rest — fewer rules about who you should be.",
                  "Dark humour: saying it when life feels too loud right now.",
                ],
              },
              {
                q: "How do you cheer people up when they’re low? Are you good at consoling — or do your “if it’s any consolation…” lines sometimes miss the point?",
                examples: [
                  "You jump straight to advice when they only needed listening.",
                  "You say ‘if it’s any consolation…’ and it lands as a compliment-knife.",
                  "You’re actually good at it: presence, humour, or silence that helps.",
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
                label: "FLAUNT",
                bank: "flaunt your wealth / success / money / body / talent / happiness / new relationship / ‘perfect life’ online",
                task: "Pick TWO objects from the bank. Say: “People often flaunt their ___ when…” and “I’d never flaunt my ___ because…”",
              },
              {
                label: "INAPPROPRIATE",
                bank: "really / totally / wildly inappropriate · inappropriate behaviour / comment / joke / question / timing",
                task: "Make two lines: “That ___ was really inappropriate because…” and “Is it inappropriate to ___ here?”",
              },
              {
                label: "I CAN’T WAIT TO…",
                bank: "see you / go home / finish this / be done / get paid / be alone / be old",
                task: "Fire three finishes: “I can’t wait to ___.” One serious, one funny, one dark/tired (like be old).",
              },
              {
                label: "IF IT’S ANY CONSOLATION…",
                bank: "you’re not the only one / at least you tried / you look older than you are (knife)",
                task: "Say a soft consolation and a knife version. Then: which one would you hate to hear — and why?",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission:
              "Read the bank + model lines (context). Then tell a real-life situation using the phrase — not a random drill, a short story on theme.",
            items: [
              {
                label: "FLAUNT",
                bank: "flaunt your wealth / success / money / body / talent / happiness / new relationship / ‘perfect life’ online",
                models: [
                  "She’s always flaunting her perfect weekends on Instagram.",
                  "Don’t flaunt your promotion in front of people who just got laid off.",
                  "In the show: flaunt your life = show you’re alive / okay when someone else is hurting.",
                ],
                say: "Your turn (30–40 s): tell a real situation — someone was flaunting ___ (from the bank). What happened, and how did it land for people around them?",
              },
              {
                label: "INAPPROPRIATE",
                bank: "really / totally / wildly inappropriate · inappropriate behaviour / comment / joke / question / timing",
                models: [
                  "That joke was really inappropriate at a funeral.",
                  "Is it inappropriate to talk about money here?",
                ],
                say: "Your turn: tell a life situation where something felt really inappropriate — the place, the timing, the joke or comment. Why did it cross the line?",
              },
              {
                label: "I CAN’T WAIT TO…",
                bank: "see you / go home / finish this / be done / get paid / be alone / be old (dark / tired humour)",
                models: [
                  "I can’t wait to get home and do nothing.",
                  "I can’t wait to be old — fewer expectations, more rest.",
                ],
                say: "Your turn: say “I can’t wait to ___” inside a real situation — why now? Hope, exhaustion, or dark humour?",
              },
              {
                label: "IF IT’S ANY CONSOLATION…",
                bank: "you’re not the only one / at least you tried / you look older than you are (knife)",
                models: [
                  "If it’s any consolation, you’re not the only one.",
                  "If it’s any consolation, at least you tried.",
                  "If it’s any consolation, you look older than you are. (knife)",
                ],
                say: "Your turn: tell a consoling moment with “if it’s any consolation…” — soft comfort or a knife? What was the situation, and what happened next?",
              },
            ],
          },
        },
        {
          id: "just-being-fun",
          label: "Just being fun",
          teacher:
            "Small bite · Martin vibe. Clip/aside: explosively sexually inappropriate… ‘just being fun’. Lexis first, then short Discussion — don’t let it turn into a therapy hour; keep English moving.",
          blocks: ["watch", "context"],
          phrases: [
            "take offence",
            "just being fun",
            "cross the line",
            "one of those people who…",
          ],
          watch: {
            timecode: "S1E3 · Martin / inappropriate aside TBD",
            note:
              "He’s one of those men who is explosively sexually inappropriate with everyone, but makes you feel bad if you take offence because he was “just being fun”. Add videoUrl later.",
          },
          context: {
            tone: "Lexical · common patterns with these words",
            meanings: [
              "take offence (BrE) = feel insulted / hurt by a comment or joke (AmE often: take offense).",
              "just being fun / only joking / just banter = the shield after a hurtful line: you’re the problem if you react.",
              "cross the line = go too far — teasing into harm (also: overstep / out of order).",
              "one of those people who… = a type label for a pattern, not one moment.",
            ],
            examples: [
              "TAKE OFFENCE — frames: take offence at a joke / comment · easy to take offence · no offence, but… · Did I cause offence? · She took it the wrong way.",
              "She didn’t laugh — she took offence.",
              "He acts shocked if anyone takes offence.",
              "JUST BEING FUN / JOKE SHIELD — only joking · just banter · having a laugh · can’t you take a joke? · lighten up · don’t be so sensitive.",
              "He was ‘just being fun’ — that’s what made it worse.",
              "CROSS THE LINE — cross the line · overstep · out of order · that wasn’t okay · go too far.",
              "That crossed the line.",
              "He always crosses the line and calls it humour.",
              "ONE OF THOSE… — one of those people / men / women who… · the type who…",
              "He’s one of those people who jokes about everyone and never apologises.",
            ],
          },
          speak: {
            mission:
              "Short & sharp · use take offence / just being fun / cross the line at least once each if you can.",
            starters: [
              "He’s one of those people who…",
              "I took offence when…",
              "They said they were just being fun, but…",
              "That crossed the line when…",
            ],
            questions: [
              {
                q: "Have you met ‘one of those people’ who is inappropriate with everyone — then makes you feel bad for taking offence because they were ‘just being fun’?",
                examples: [
                  "family ‘joker’ at the table",
                  "colleague / boss who ‘bants’",
                  "friend of a friend at a party",
                ],
              },
              {
                q: "60 seconds: the most hurtful “joke” in your life. No names if that feels safer. What was said — and what made it sting?",
                examples: [
                  "family table / school / work party",
                  "a joke that everyone else laughed at",
                  "‘just being fun’ right after",
                  "you laughed along — and hated it later",
                ],
              },
              {
                q: "Where is the line for you between fun and not okay? Finish: “That crosses the line when ___.”",
                examples: [
                  "body / dating / appearance jokes",
                  "in front of other people",
                  "after you’ve already said stop",
                ],
              },
              {
                q: "What do you (wish you could) say in the moment — without starting a war?",
                examples: [
                  "That’s not funny to me.",
                  "Please don’t.",
                  "That crossed the line.",
                  "silence / leave / change subject (honest options)",
                ],
              },
            ],
          },
          lexRound: {
            title: "Lexis round",
            mission: "Warm-up · short patterns. Then Discussion.",
            drills: [
              {
                label: "TAKE OFFENCE",
                bank: "take offence at a joke / comment · easy to take offence · no offence, but…",
                task: "Two lines: “I took offence when…” and “People say ‘no offence, but…’ when…”",
              },
              {
                label: "JOKE SHIELD",
                bank: "just being fun · only joking · just banter · can’t take a joke · lighten up",
                task: "Say a hurtful line + the shield after it. Then: how does that land?",
              },
              {
                label: "CROSS THE LINE",
                bank: "cross the line · out of order · overstep · that wasn’t okay",
                task: "Three finishes: “That crossed the line when…”",
              },
              {
                label: "ONE OF THOSE…",
                bank: "one of those people who… / one of those men/women who…",
                task: "Describe a type (not a name): “He’s one of those people who…” — one sentence only.",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission:
              "Models first · then a real micro-story with the cool phrases.",
            items: [
              {
                label: "TAKE OFFENCE / JUST BEING FUN",
                bank: "take offence · just being fun · only joking · just banter",
                models: [
                  "She didn’t laugh — she took offence.",
                  "He was ‘just being fun’ — that’s what made it worse.",
                  "He’s one of those people who jokes about everyone and never apologises.",
                ],
                say: "Your turn (30–40 s): a real moment — joke, reaction, ‘just being fun’. Did anyone take offence? Did it cross the line?",
              },
              {
                label: "CROSS THE LINE",
                bank: "cross the line · out of order · that wasn’t okay",
                models: [
                  "That crossed the line.",
                  "That comment was out of order.",
                ],
                say: "Your turn: tell when something crossed the line for you — place, people, what was said.",
              },
            ],
          },
        },
        {
          id: "out-there",
          label: "Get yourself out there",
          teacher:
            "Small Martin bite · ‘care’ that measures you. Cool phrases from the clip only. Discussion: humiliating helpfulness + why ‘Are you having an affair?’ appears in the same energy.",
          blocks: ["watch", "context"],
          phrases: [
            "get yourself out there",
            "take me out to dinner",
            "Would it kill you to…?",
            "a little marital poke isn’t going to kill you",
            "tipping your prime",
            "having an affair",
          ],
          watch: {
            timecode: "S1E3 · Martin · advice / affair",
            note:
              "Are you having an affair? → A little marital poke isn’t going to kill you. → Would it kill her to take me out to dinner? → get yourself out there… tipping your prime. Add videoUrl later.",
          },
          context: {
            tone: "Lexical · common patterns with these words",
            meanings: [
              "get yourself out there = start dating / meeting people again (can sound kind or pushy).",
              "take someone out to dinner = invite on a date / treat them (not just ‘go eat’).",
              "Would it kill you to…? = sharp complaint: a small ask framed as ‘is that so hard?’",
              "a little marital poke isn’t going to kill you (18+ quote) = crude line + minimiser ‘relax, it’s fine’.",
              "tipping your prime (show line) = awkward ‘peak / sell-by date’ energy.",
              "having an affair = secret relationship while committed — also the accusation.",
            ],
            examples: [
              "GET YOURSELF OUT THERE — frames: get yourself out there · get out there again · I’m not ready to get out there yet · you should get out more.",
              "You should probably get yourself out there.",
              "I’m not ready to get out there yet — I need a quiet month.",
              "TAKE … OUT TO DINNER — take me / her / him out to dinner · take someone out for a drink / for lunch · never takes me out anymore.",
              "Would it kill her to take me out to dinner?",
              "He never takes me out to dinner anymore.",
              "WOULD IT KILL YOU TO…? — Would it kill you to text back / listen / say thank you / come home on time?",
              "Would it kill you to text back?",
              "ISN’T GOING TO KILL YOU — One drink isn’t going to kill you. / Trying again isn’t going to kill you. / (show) A little marital poke isn’t going to kill you.",
              "TIPPING YOUR PRIME — you’re just tipping your prime · you’re in your prime · make the most of now · past your prime (harsh).",
              "You’re just tipping your prime.",
              "HAVING AN AFFAIR — having an affair · having an affair with someone · Are you having an affair? · Is there someone else?",
              "Are you having an affair?",
            ],
          },
          speak: {
            mission:
              "Real stories · short turns. Steal cool phrases when they fit — don’t force every line. (marital poke = quote the show / talk about the type — not a life model.)",
            starters: [
              "He/she never takes me out to dinner…",
              "Someone told me to get myself out there when…",
              "Would it kill you to ___?",
              "They said it isn’t going to kill me — but…",
              "That ‘little marital poke’ energy was…",
              "I once asked / was asked about an affair when…",
            ],
            questions: [
              {
                q: "60 seconds: the last time someone told you to ‘get yourself out there’. Who said it, where, and what did you want to snap back?",
                examples: [
                  "parents at Sunday lunch",
                  "friends after your breakup",
                  "a married colleague who ‘means well’",
                ],
              },
              {
                q: "Finish for real life: “Would it kill you to ___?” — the small thing you keep not getting from a partner, flatmate, or parent. Have you said it out loud, or only in your head?",
                examples: [
                  "take me out to dinner / text back / say thank you",
                  "stop joking about my body / my age",
                  "ask how I am without fixing me",
                ],
              },
              {
                q: "Affair energy: have you ever asked — or been asked — “Are you having an affair?” / “Is there someone else?” What actually started that question: proof, fear, or a relationship that was already dead?",
                examples: [
                  "phones / late nights / a ‘joke’ that was too warm",
                  "you were accused with nothing solid",
                  "you heard yourself ask and hated it",
                ],
              },
              {
                q: "Expiry-date talk: when did someone first make you feel you were ‘tipping your prime’ — looks, marriage, kids, career? Quote their line if you can. What did it do to you that week?",
                examples: [
                  "wedding table / New Year toasts",
                  "HR / industry age jokes",
                  "family counting your years out loud",
                ],
              },
            ],
          },
          lexRound: {
            title: "Lexis round",
            mission: "Warm-up · patterns from the clip. Then Discussion.",
            drills: [
              {
                label: "TAKE … OUT TO DINNER",
                bank: "take me / her / him out to dinner · take someone out for a drink / for lunch",
                task: "Two lines: a romantic ask + a complaint (“He never takes me out to dinner”).",
              },
              {
                label: "GET YOURSELF OUT THERE",
                bank: "get yourself out there · get out there again · I’m not ready to get out there",
                task: "Kind version + pushy version of the same tip.",
              },
              {
                label: "WOULD IT KILL YOU…? / ISN’T GOING TO KILL YOU",
                bank: "Would it kill you to ___? · ___ isn’t going to kill you · a little marital poke isn’t going to kill you (quote)",
                task: "One sharp ask + one minimiser push. Optional: quote Martin’s line — then say why the minimiser is the problem.",
              },
              {
                label: "TIPPING YOUR PRIME (quote)",
                bank: "You’re just tipping your prime · you’re in your prime · make the most of now",
                task: "Martin’s line, then a version that doesn’t sound like a sell-by date.",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission: "Models · then a real micro-story with at least one cool phrase.",
            items: [
              {
                label: "TAKE OUT / OUT THERE / PRIME",
                bank: "take me out to dinner · get yourself out there · tipping your prime",
                models: [
                  "Would it kill her to take me out to dinner?",
                  "You should probably get yourself out there.",
                  "You’re just tipping your prime.",
                ],
                say: "Your turn (30–40 s): dating advice or a dinner/date ask that landed wrong.",
              },
              {
                label: "KILL YOU…? / AFFAIR",
                bank: "Would it kill you to…? · isn’t going to kill you · a little marital poke · having an affair",
                models: [
                  "Would it kill you to text back?",
                  "A little marital poke isn’t going to kill you.",
                  "One drink isn’t going to kill you.",
                  "Are you having an affair?",
                ],
                say: "Your turn: a complaint you swallowed — a pushy ‘it won’t kill you’ — or a moment affair-talk / crude ‘jokes’ entered the room.",
              },
            ],
          },
        },
        {
          id: "couldnt-bear",
          label: "I couldn’t bear it",
          teacher:
            "Core talk: birthday pressure — is it a real celebration, or a job (feed everyone, smile, perform)? What people can’t bear in B-days & surprises. Phrase: I couldn’t bear it. (Later: jumpy-outy / Don’t sing Happy Birthday.)",
          blocks: ["watch", "context"],
          phrases: ["I couldn’t bear it"],
          watch: {
            timecode: "S1E3 · birthday / surprise clip TBD",
            note: "Don’t do a jumpy-outy surprise… don’t sing Happy Birthday — I couldn’t bear it. Add videoUrl later.",
          },
          context: {
            tone: "Lexical · common patterns with these words",
            meanings: [
              "I couldn’t bear it = I wouldn’t be able to stand it / it would be too much (stronger than ‘I wouldn’t like it’).",
              "Pattern: can’t / couldn’t bear + noun · gerund · it.",
              "Often a boundary: Don’t ___ — I couldn’t bear it.",
            ],
            examples: [
              "I CAN’T / COULDN’T BEAR… — common follow-ups: the noise / the waiting / the fuss / being the centre of attention / people singing / surprises / small talk / silence / another surprise party.",
              "I couldn’t bear another surprise party.",
              "I can’t bear being sung Happy Birthday in public.",
              "DON’T… — I COULDN’T BEAR IT — Don’t make a fuss / Don’t sing / Don’t jump out / Don’t post it / Don’t tell everyone — I couldn’t bear it.",
              "Don’t make a big fuss — I couldn’t bear it.",
              "Please don’t jump out and yell surprise. I couldn’t bear it.",
              "SOFT TWINS (weaker): I couldn’t handle it / I’d hate that / that’s too much for me / I can’t deal with that.",
            ],
          },
          speak: {
            mission:
              "Birthday pressure & boundaries · use I couldn’t bear it (or I can’t bear…) in every answer.",
            starters: [
              "I couldn’t bear it if…",
              "Please don’t ___ — I couldn’t bear it.",
              "For me a birthday is more about ___ than ___…",
              "I can’t bear ___ when…",
            ],
            questions: [
              {
                q: "Be honest: is your birthday (or someone else’s) really a celebration — or a job? Feeding everyone, smiling, performing happiness… What pressure do you feel?",
                examples: [
                  "cooking / catering / hosting while you’re ‘the birthday person’",
                  "organising your own party so nothing goes wrong",
                  "having to look grateful when you’re exhausted",
                  "Claire vibe: controlling the surprise instead of enjoying it",
                ],
              },
              {
                q: "What do you literally can’t bear on birthdays and in surprises? Finish: “Please don’t ___ — I couldn’t bear it.”",
                examples: [
                  "jumpy-outy surprise / yell SURPRISE",
                  "singing Happy Birthday in a restaurant / office",
                  "big public toasts about you",
                  "posts, photos, ‘everyone look at them’",
                  "forced fun / games / being the centre of attention",
                ],
              },
              {
                q: "Tell one real story: a birthday or surprise that crossed the line for you (or for someone close). Was it kindness that felt like pressure?",
                examples: [
                  "a surprise party you hated",
                  "a celebration that was really about feeding / entertaining guests",
                  "people ‘celebrating you’ as a performance",
                  "you wanted quiet — they wanted a show",
                ],
              },
            ],
          },
          lexRound: {
            title: "Lexis round",
            mission: "Warm-up · only one cool phrase for now: I couldn’t / can’t bear…",
            drills: [
              {
                label: "I COULDN’T BEAR…",
                bank: "the fuss / the noise / the waiting / surprises / being the centre of attention / people singing / small talk / silence",
                task: "Make three lines: “I couldn’t bear ___.” One about celebrations, one about work, one funny.",
              },
              {
                label: "DON’T… — I COULDN’T BEAR IT",
                bank: "Don’t make a fuss / Don’t sing / Don’t jump out / Don’t post it / Don’t tell everyone",
                task: "Say two boundary lines: “Don’t ___ — I couldn’t bear it.”",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission:
              "See the models · then tell a real situation using I couldn’t bear it / I can’t bear…",
            items: [
              {
                label: "I COULDN’T BEAR IT",
                bank: "can’t / couldn’t bear + noun / gerund / it",
                models: [
                  "Don’t make a big fuss — I couldn’t bear it.",
                  "I can’t bear being sung Happy Birthday in public.",
                  "Please don’t jump out and yell surprise. I couldn’t bear it.",
                ],
                say: "Your turn (30–40 s): a birthday / surprise moment where you (or someone) wanted to say “I couldn’t bear it.” Was it the fuss, the singing, the hosting pressure — or something else?",
              },
            ],
          },
        },
        {
          id: "claire-plans",
          label: "This person",
          teacher:
            "Discussion-heavy bite · shoe shop with Martin. No cool-words / no Meaning panel. Q1–Q3: gifts as a portrait. Q4: proxy shopping (helping / being chosen for via someone).",
          blocks: ["watch"],
          phrases: [],
          watch: {
            timecode: "S1E3 · shoe shop / gift for Claire",
            note:
              "What about these? → Get her something she’d never get herself. Surprise her. → She’ll think I’ve gone nuts. → No, she’ll think you see her as this person, and everyone wants to be this person. Add videoUrl later.",
          },
          speak: {
            mission:
              "Personal English · gifts, identity, being seen. No cool-words checklist — answer the question.",
            starters: [
              "That gift said: you’re this kind of person — and I…",
              "I’d love a surprise if… / I’d hate it if…",
              "The version of me people aim at is…",
              "I once helped choose a gift for… / Someone shopped for me through…",
            ],
            questions: [
              {
                q: "A gift can feel like a verdict: “So that’s who you think I am.” Tell a time you got a present that made you think they see you as the wrong person. What version of you was in that gift — and what version did you want them to see?",
                examples: [
                  "practical you vs glamorous you",
                  "‘mum/wife’ you vs the person you still feel like",
                  "a taste that was theirs, not yours",
                ],
              },
              {
                q: "Fleabag says: get her something she’d never get herself. Is that love — or projection? When is that a beautiful surprise… and when is it their fantasy of you, not you? Finish: “I’d love something I’d never get myself if ___ — I’d hate it if ___.”",
                examples: [
                  "they know a private want you’ve never bought",
                  "it costs courage / softens a hard year",
                  "it dresses you as someone they prefer",
                ],
              },
              {
                q: "“She’ll think you see her as this person — and everyone wants to be this person.” Who is “this person” for you right now — the version people gift toward, dress toward, compliment toward? Do you actually want to be her/him… or only want other people to see you that way?",
                examples: [
                  "the impressive one",
                  "the easy one / low-maintenance one",
                  "the ‘together’ adult",
                  "someone you used to be",
                ],
              },
              {
                q: "Have you ever picked a gift for someone else while helping — like Fleabag with Claire’s husband — or has a partner chosen for you through someone else (sister, friend…)? How did that triangle feel?",
                examples: [
                  "you knew the taste better than the buyer",
                  "they outsourced the choosing to a middle person",
                  "you edited bad options — or stayed quiet and regretted it",
                ],
              },
            ],
          },
        },
        {
          id: "date-hunt",
          label: "Throw the net out",
          teacher:
            "Date-hunt frame · Fleabag decides to cast again. Cool phrase: throw the net out (= cast a wide net). Keep it short — then Toothy friend is the ‘who turns up in the net’.",
          blocks: ["watch", "context"],
          phrases: ["throw the net out"],
          watch: {
            timecode: "S1E3 · Time to throw the net out",
            note: "Time to throw the net out. (Dating hunt starts.) Add videoUrl later.",
          },
          context: {
            tone: "Lexical · common patterns with these words",
            meanings: [
              "throw the net out (show) ≈ cast a (wide) net — open yourself to more options / start looking again.",
              "cast your net wider = include more people or possibilities (dates, jobs, ideas).",
            ],
            examples: [
              "THROW THE NET OUT / CAST A WIDE NET — throw the net out · cast a wide net · cast your net wider · spread the net · I’m not throwing the net out yet.",
              "Time to throw the net out.",
              "After the breakup she cast her net wider.",
              "I’m not throwing the net out yet — I need a quiet month.",
              "We cast a wide net for the role — anyone with the right energy.",
              "COMMON OBJECTS of the metaphor: dating · jobs · friends · flatmates · clients · ideas.",
            ],
          },
          speak: {
            mission:
              "Short · use throw the net out / cast a wide net at least once.",
            starters: [
              "It was time to throw the net out when…",
              "I’m not ready to throw the net out because…",
              "I cast my net wider and…",
            ],
            questions: [
              {
                q: "When was the last time you ‘threw the net out’ — dating, friends, or work? What made you cast wider?",
                examples: [
                  "after a breakup / dry spell",
                  "moving city",
                  "one door closed, so you opened five",
                ],
              },
              {
                q: "Is ‘throw the net out’ hopeful — or slightly desperate? When does casting wider feel smart, and when does it feel like panic?",
                examples: [
                  "apps / ‘I’ll meet anyone’",
                  "networking when you’re lonely",
                  "saying yes to every invite for a month",
                ],
              },
            ],
          },
          lexRound: {
            title: "Lexis round",
            mission: "One phrase · two tones. Then Discussion.",
            drills: [
              {
                label: "THROW THE NET OUT",
                bank: "throw the net out · cast a wide net · cast your net wider · I’m not throwing the net out yet",
                task: "Say Fleabag’s line, then a life line: dating OR work.",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission: "Model → 30 s real story.",
            items: [
              {
                label: "THROW THE NET OUT",
                bank: "throw the net out · cast a wide net",
                models: [
                  "Time to throw the net out.",
                  "After that job fell through, I cast my net wider.",
                ],
                say: "Your turn: a time you threw the net out. What were you fishing for?",
              },
            ],
          },
        },
        {
          id: "toothy",
          label: "Toothy friend",
          teacher:
            "Harry · overtalking ‘toolbox’. Example talk = phrase micro-stories. Discussion = scene: unexpected reunion + chemistry before sister’s party — not a second phrase drill.",
          blocks: ["watch", "context"],
          phrases: [
            "I wasn’t expecting to see you again",
            "chuffed to my boots",
            "don’t get me wrong",
            "saucy",
            "I’m such a toolbox",
          ],
          watch: {
            timecode: "S1E3 · Harry / Tube coat / soap",
            note:
              "I was not expecting to see you again… I’m chuffed to my boots… thank you for the text, saucy… I’m such a tool box… coat on the Tube… sister’s surprise… soap shop. Add videoUrl later.",
          },
          context: {
            tone: "Lexical · common patterns with these words",
            meanings: [
              "I wasn’t expecting to see you again = surprise reunion — closed chapter, suddenly open.",
              "chuffed to my boots (BrE) = extremely pleased / delighted.",
              "don’t get me wrong = softener before a ‘but’ — keeps the compliment, then undercuts it.",
              "saucy = cheeky / suggestive (here: a flirty text).",
              "I’m such a toolbox (BrE informal) = I’m such an idiot / plonker — self-roast.",
            ],
            examples: [
              "I WASN’T EXPECTING… — I wasn’t expecting to see you again · I wasn’t expecting that · I didn’t expect to run into you here.",
              "I wasn’t expecting to see you again — not after that ending.",
              "CHUFFED — chuffed · chuffed to bits · chuffed to my boots · really chuffed for you.",
              "I’m chuffed to my boots.",
              "DON’T GET ME WRONG — Don’t get me wrong, I’m… but… · Don’t get me wrong, I like them, but…",
              "Don’t get me wrong, I’m chuffed to my boots, but…",
              "SAUCY — a saucy text · saucy joke · a bit saucy · Thanks for the text, saucy.",
              "Thank you for the text, saucy.",
              "TOOLBOX / SELF-ROAST — I’m such a toolbox · I’m such an idiot · I’m a disaster · Sorry I’m late — I’m such a toolbox.",
              "Sorry I’m late. I’m such a toolbox.",
              "LAST-MINUTE (bonus): it was last-minute · a last-minute plan · last-minute invite.",
            ],
          },
          speak: {
            mission:
              "Scene context: she bumps into the sweet overtalking ex-vibe guy while heading into sister’s birthday chaos. Reunion, chemistry, cover story (need a present). Talk that energy — phrases optional.",
            starters: [
              "Running into him/her right then felt…",
              "The kind of person who fills every silence…",
              "Using ‘I need a present’ as a reason to stay…",
              "Chuffed and trapped at the same time…",
            ],
            questions: [
              {
                q: "In the scene she wasn’t expecting to see him again — then suddenly they’re shopping for Claire together. Have you ever had a reunion land at the worst/best possible moment (family event, party, ‘I was just leaving’)?",
                examples: [
                  "ex at a wedding",
                  "old flame before a family dinner",
                  "you were mid ‘new chapter’",
                ],
              },
              {
                q: "Harry fills every gap with talk (coat story, soap, surprises). When chemistry meets a ‘toolbox’ who won’t stop talking — is that comfort, cringe, or both?",
                examples: [
                  "you loved the noise because you were nervous too",
                  "you wanted quiet and got a monologue",
                  "you are that person when you like someone",
                ],
              },
              {
                q: "They use ‘I need to get her a present first’ as a reason to stay together. When have you used an errand / favour / shopping as cover to prolong time with someone?",
                examples: [
                  "one more coffee",
                  "help me choose",
                  "walk me to the Tube",
                ],
              },
              {
                q: "A saucy text lives in the phone — then you meet in daylight. In this kind of reunion, what usually wins: the bravado of the text, or the awkward body in the room?",
                examples: [
                  "you both pretend it never happened",
                  "someone names it out loud",
                  "chemistry survives the cringe",
                ],
              },
            ],
          },
          lexRound: {
            title: "Lexis round",
            mission: "Patterns · then Example talk for phrase stories · Discussion for scene.",
            drills: [
              {
                label: "WASN’T EXPECTING…",
                bank: "I wasn’t expecting to see you again · I wasn’t expecting that",
                task: "Two reunions: happy shock + awkward shock.",
              },
              {
                label: "CHUFFED / DON’T GET ME WRONG",
                bank: "chuffed to my boots · don’t get me wrong, I’m… but…",
                task: "One clean compliment + one ‘don’t get me wrong… but’ that kills it.",
              },
              {
                label: "SAUCY / TOOLBOX",
                bank: "saucy · I’m such a toolbox",
                task: "One line about a cheeky text + one self-roast for awkwardness.",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission:
              "Bank + models → 30–40 s USING the phrase. (Reunion / Harry-energy depth → Discussion.)",
            items: [
              {
                label: "REUNION LINES",
                bank: "I wasn’t expecting to see you again · chuffed to my boots · don’t get me wrong",
                models: [
                  "I wasn’t expecting to see you again.",
                  "Don’t get me wrong, I’m chuffed to my boots, but…",
                ],
                say: "Your turn: use one reunion line in a real micro-story.",
              },
              {
                label: "SAUCY / TOOLBOX / LATE",
                bank: "saucy · I’m such a toolbox · last-minute",
                models: [
                  "Thank you for the text, saucy.",
                  "I’m such a toolbox.",
                  "Sorry — it was last-minute.",
                ],
                say: "Your turn: a saucy text, a late excuse, or a moment you called yourself an idiot — land the phrase.",
              },
            ],
          },
        },
        {
          id: "cheap-thrill",
          label: "Cheap thrill",
          teacher:
            "Sex-shop + Harry. Example talk = phrase stories. Discussion = scene: intimate gift + flirt + public innuendo — not another ‘use the phrase’ round.",
          blocks: ["watch", "context"],
          phrases: [
            "a cheap thrill",
            "What are you craving?",
            "I’ll see what I can dig out",
            "go browse",
            "You got me",
            "Didn’t get it",
            "way too provocative",
            "quite relentless",
          ],
          watch: {
            timecode: "S1E3 · sex shop / cheap thrill",
            note:
              "What are you craving? → a really, really cheap thrill → sexually frustrated sister → basic bunny → It’s all in the twist → You got me / Didn’t get it → half price because it’s quite relentless. Add videoUrl later.",
          },
          context: {
            tone: "Lexical · common patterns with these words",
            meanings: [
              "What are you craving? = what do you want right now (food, fun, trouble — often with a wink).",
              "a cheap thrill = a small, low-cost hit of excitement (not only sexual).",
              "I’ll see what I can dig out = I’ll try to find something (stock / favour / memory).",
              "go browse = walk around and look — no pressure to buy yet.",
              "You got me = you caught me / I fell for the joke.",
              "Didn’t get it = I didn’t get the punchline (or the innuendo).",
              "way too provocative = too daring / likely to shock.",
              "quite relentless = doesn’t stop / keeps going hard.",
            ],
            examples: [
              "WHAT ARE YOU CRAVING? — craving chocolate / chaos / a quiet night · What are you in the mood for?",
              "What are you craving?",
              "A CHEAP THRILL — a cheap thrill · a really, really cheap thrill · cheap thrills · I don’t need a big win — just a cheap thrill.",
              "Just a really, really cheap thrill.",
              "DIG OUT / BROWSE — I’ll see what I can dig out · dig out an old photo / email / number · you go browse · have a browse.",
              "I’ll see what I can dig out and you go browse.",
              "Can you dig out that photo from last year?",
              "YOU GOT ME / DIDN’T GET IT — Ha, you got me. · You got me there. · I didn’t get it. · Sorry — explain?",
              "Ha, you got me.",
              "Didn’t get it.",
              "PROVOCATIVE / RELENTLESS — way too provocative · a bit provocative · quite relentless · absolutely relentless.",
              "That would be way too provocative.",
              "It’s half price because it’s quite relentless. (show)",
              "The meeting was quite relentless — no breaks, no mercy.",
            ],
          },
          speak: {
            mission:
              "Scene context: buying an intimate / joke gift “for her sister” while flirting in the shop — public innuendo, projection, cheap thrill vs real present. Talk the situation. Phrases optional.",
            starters: [
              "Buying that kind of gift with someone else there felt…",
              "Saying it was ‘for my sister’ was really…",
              "In public, the joke landed / didn’t land because…",
              "A cheap thrill gift vs a real one…",
            ],
            questions: [
              {
                q: "In the clip they’re shopping for Claire with sexual jokes in public — and calling it a gift for a ‘sexually frustrated sister.’ When have you seen (or used) someone else’s private life as cover for your own flirt or humour?",
                examples: [
                  "hen-party shopping",
                  "‘it’s for a friend’",
                  "the room laughed; one person didn’t",
                ],
              },
              {
                q: "One person gets the innuendo; the other doesn’t — then “You got me” / “Didn’t get it.” In a shop, at a party, at work: who holds the power when only half the room is in on the joke?",
                examples: [
                  "you pretended you got it",
                  "you were the one left out",
                  "the joke was about you",
                ],
              },
              {
                q: "Is a ‘cheap thrill’ gift ever a real gift — or is it always about the buyer’s dare? Would you want that energy on your birthday table?",
                examples: [
                  "funny once, humiliating later",
                  "the right friend would love it",
                  "you’d rather have soap / nothing",
                ],
              },
              {
                q: "“I’ll see what I can dig out — you go browse.” When is that hospitality — and when is it dumping you alone in an awkward aisle?",
                examples: [
                  "helpful shop assistant",
                  "date who disappears",
                  "you used browse-time to text someone else",
                ],
              },
            ],
          },
          lexRound: {
            title: "Lexis round",
            mission: "Warm-up · patterns. Phrase stories → Example talk. Scene talk → Discussion.",
            drills: [
              {
                label: "CRAVING / CHEAP THRILL",
                bank: "What are you craving? · a cheap thrill · really, really cheap thrill",
                task: "Answer “What are you craving?” twice — one soft, one honest/chaotic.",
              },
              {
                label: "DIG OUT / BROWSE",
                bank: "I’ll see what I can dig out · dig out an old photo / email · go browse",
                task: "Shop line + life line: “I’ll see what I can dig out…” (stock / favour / memory).",
              },
              {
                label: "YOU GOT ME / DIDN’T GET IT",
                bank: "You got me · Didn’t get it · Explain?",
                task: "Tell a tiny joke setup → partner reacts with one of the two lines.",
              },
              {
                label: "PROVOCATIVE / RELENTLESS",
                bank: "way too provocative · quite relentless",
                task: "One line about clothes/a comment + one about a person or schedule that won’t stop.",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission:
              "Bank + models → short real situation USING the phrase. (Scene / birthday-gift ethics → Discussion.)",
            items: [
              {
                label: "CHEAP THRILL / SHOP TALK",
                bank: "What are you craving? · a cheap thrill · I’ll see what I can dig out · go browse",
                models: [
                  "What are you craving?",
                  "Just a really, really cheap thrill.",
                  "I’ll see what I can dig out and you go browse.",
                ],
                say: "Your turn (30–40 s): use at least one phrase in a real micro-story — craving, cheap thrill, or dig out / browse.",
              },
              {
                label: "YOU GOT ME / PROVOCATIVE / RELENTLESS",
                bank: "You got me · Didn’t get it · way too provocative · quite relentless",
                models: [
                  "Ha, you got me.",
                  "Didn’t get it.",
                  "That would be way too provocative.",
                  "It’s quite relentless.",
                ],
                say: "Your turn: a joke you missed — or something that was too provocative / relentless. Land one cool phrase.",
              },
            ],
          },
        },
        {
          id: "alone-lonely",
          label: "Alone · lonely",
          teacher:
            "OPTIONAL · skip if short on time. Example talk = phrase micro-stories. Discussion = party pity / alone≠lonely (scene context) — not a second phrase drill.",
          optional: true,
          blocks: ["watch", "context"],
          phrases: [
            "blown away",
            "grab you for a second",
            "can’t stop picturing…",
            "May I cut in?",
          ],
          watch: {
            timecode: "S1E3 · party · alone / lonely (optional)",
            note:
              "I’m blown away. I had absolutely no idea. Can I just grab you for a second? …can’t stop conjuring an image of you… all alone, feeling so terribly lonely. Just can’t stop picturing it. → I don’t think you have to be alone to be lonely. May I cut in? Add videoUrl later.",
          },
          context: {
            tone: "Lexical · common patterns with these words",
            meanings: [
              "blown away = shocked / amazed (good surprise or stunned).",
              "grab you for a second = pull someone aside briefly.",
              "can’t stop picturing… = a picture stuck in your head (caring — or invasive).",
              "May I cut in? = polite interrupt (dance or conversation).",
              "Scene line (Discussion, not a cool-words drill): I don’t think you have to be alone to be lonely.",
            ],
            examples: [
              "BLOWN AWAY — I’m blown away · completely blown away · blown away by the news / the view / how honest they were.",
              "I’m blown away.",
              "GRAB YOU FOR A SECOND — Can I grab you for a second? · Can I steal you for a minute? · Have you got a sec?",
              "Can I just grab you for a second?",
              "CAN’T STOP PICTURING… — I can’t stop picturing it · I keep picturing you there · I can’t stop conjuring an image of you… (show, higher register).",
              "I just can’t stop picturing it.",
              "I can’t stop picturing you there all alone.",
              "MAY I CUT IN? — May I cut in? · Can I cut in? · Sorry to interrupt — may I…?",
              "May I cut in?",
              "ALONE / LONELY (talk pair): alone but fine · lonely in a full room · You don’t have to be alone to be lonely.",
            ],
          },
          speak: {
            mission:
              "Scene context only: party pity-film of her loneliness (cafe, alone) vs “you don’t have to be alone to be lonely.” Deep talk — not phrase practice. (Grab you / picturing lines → Example talk.)",
            starters: [
              "At parties people decide I’m…",
              "You don’t have to be alone to be lonely when…",
              "That kind of pity makes me…",
              "They pictured me as ___ — but actually…",
            ],
            questions: [
              {
                q: "In the scene someone can’t stop picturing her alone and lonely at the cafe — while they’re standing at a busy party. Have you ever been given a pity-story about your life in the middle of a celebration? What was the ‘film’ they invented?",
                examples: [
                  "single at a wedding",
                  "quiet at a birthday",
                  "‘you must be so lonely’ after a breakup when you felt free",
                ],
              },
              {
                q: "Her line: “I don’t think you have to be alone to be lonely.” What does that mean for you at a birthday, wedding, or family table — a full room that still felt empty?",
                examples: [
                  "everyone paired off",
                  "you were performing happiness",
                  "nobody asked anything real",
                  "you missed someone who wasn’t there",
                ],
              },
            ],
          },
          lexRound: {
            title: "Lexis round",
            mission: "Optional warm-up · patterns only. Phrase stories → Example talk. Scene depth → Discussion.",
            drills: [
              {
                label: "BLOWN AWAY / NO IDEA",
                bank: "I’m blown away · completely blown away",
                task: "Two lines: good shock + painful shock.",
              },
              {
                label: "PICTURING / GRAB YOU / CUT IN",
                bank: "I can’t stop picturing… · Can I grab you for a second? · May I cut in?",
                task: "Same words twice: caring tone, then invasive tone.",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission:
              "Bank + models → 30–40 s real situation USING the phrase / move. (Alone≠lonely party depth → Discussion.)",
            items: [
              {
                label: "BLOWN AWAY",
                bank: "blown away · completely blown away",
                models: [
                  "I’m blown away.",
                  "I was completely blown away by the news.",
                ],
                say: "Your turn: a moment you were blown away — good news or a hard truth.",
              },
              {
                label: "GRAB YOU FOR A SECOND",
                bank: "Can I grab you for a second? · May I cut in?",
                models: [
                  "Can I just grab you for a second?",
                  "May I cut in?",
                ],
                say: "Your turn: when did someone pull you aside — care that helped, or a corner with their anxiety about your life? Use the line if you can.",
              },
              {
                label: "CAN’T STOP PICTURING…",
                bank: "I can’t stop picturing… · conjuring an image of you…",
                models: [
                  "I just can’t stop picturing it.",
                  "I can’t stop picturing you there all alone.",
                ],
                say: "Your turn: someone invented a lonely picture of you — or you invented one of someone else (quiet guest / newly single friend). Land the phrase.",
              },
            ],
          },
        },
        {
          id: "dont-jinx-it",
          label: "Don’t jinx it",
          teacher:
            "Short party bite. Example talk = jinx / life-changing phrase stories. Discussion = birthday as networking + news that isn’t in the bag yet.",
          blocks: ["watch", "context"],
          phrases: [
            "I don’t want to jinx anything",
            "could be life-changing",
          ],
          watch: {
            timecode: "S1E3 · party · birthday business",
            note:
              "Good birthday business? → Huge… I don’t want to jinx anything, but huge. Could be life-changing. Add videoUrl later.",
          },
          context: {
            tone: "Lexical · common patterns with these words",
            meanings: [
              "I don’t want to jinx anything = don’t curse the luck / speak too soon (superstition or soft hedge).",
              "could be life-changing = might transform everything — often before the deal is real.",
            ],
            examples: [
              "DON’T JINX IT — I don’t want to jinx anything · I don’t want to jinx it · touch wood · knock on wood · speak too soon.",
              "I don’t want to jinx anything, but it looks good.",
              "I don’t want to jinx anything, but huge. (show energy)",
              "LIFE-CHANGING — could be life-changing · life-changing news / opportunity / decision · it might change everything.",
              "Could be life-changing.",
              "It could be life-changing — if it happens.",
              "HUGE (reaction, not on tape): Huge. · Absolutely huge. · This is huge for us.",
              "SHOW COLOUR: Good birthday business? = party small talk that smells like networking.",
            ],
          },
          speak: {
            mission:
              "Scene context: at a birthday, someone talks ‘huge / life-changing’ work energy. Celebration → pitch. Talk that — not a phrase checklist.",
            starters: [
              "At parties the talk turns into…",
              "I don’t want to jinx it, but…",
              "It sounded life-changing — until…",
              "Birthday as networking feels…",
            ],
            questions: [
              {
                q: "In the clip, birthday small talk turns into ‘huge… could be life-changing.’ When have you seen a celebration become a pitch — deals, status, soft bragging?",
                examples: [
                  "weddings / birthdays / work drinks",
                  "someone recruiting in the kitchen",
                  "you did the pitching yourself",
                ],
              },
              {
                q: "“I don’t want to jinx anything” — do you say it? Is it real superstition for you, or just a polite hedge before good news?",
                examples: [
                  "job / pregnancy / visa / relationship",
                  "you knock on wood",
                  "you say it and still feel nervous",
                ],
              },
              {
                q: "Have you ever called something huge / life-changing out loud — and then watched it shrink? What did you say afterwards?",
                examples: [
                  "the deal fell through",
                  "you’d already told everyone",
                  "you wish you’d stayed quiet",
                ],
              },
            ],
          },
          lexRound: {
            title: "Lexis round",
            mission: "Short patterns · then Example talk · Discussion for party context.",
            drills: [
              {
                label: "DON’T JINX IT",
                bank: "I don’t want to jinx anything · I don’t want to jinx it · touch wood",
                task: "Two finishes: “I don’t want to jinx anything, but…” — one work, one personal.",
              },
              {
                label: "HUGE / LIFE-CHANGING",
                bank: "could be life-changing · it might change everything · (reaction) huge",
                task: "One hype line + one cautious twin with jinx.",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission:
              "Bank + models → 30–40 s USING the phrase. (Birthday-as-pitch depth → Discussion.)",
            items: [
              {
                label: "DON’T JINX ANYTHING",
                bank: "I don’t want to jinx anything",
                models: [
                  "I don’t want to jinx anything, but huge.",
                  "I don’t want to jinx anything, but it looks promising.",
                ],
                say: "Your turn: good news you almost said — then soft-pedalled with ‘I don’t want to jinx anything.’",
              },
              {
                label: "HUGE / LIFE-CHANGING",
                bank: "could be life-changing · it might change everything",
                models: [
                  "Could be life-changing.",
                  "I don’t want to jinx anything, but it could be life-changing.",
                ],
                say: "Your turn: something you (or someone) called life-changing. Was it — or did it fizzle?",
              },
            ],
          },
        },
      ],
      finale: {
        prompt:
          "Improvisation: a celebration that felt like a performance — or a moment someone else’s joy landed wrong. Use the stickers on screen — at least 5 phrases if you can.",
        stickers: [
          {
            phrase: "really inappropriate",
            use: "That joke was really inappropriate at a funeral.",
          },
          {
            phrase: "take offence",
            use: "She didn’t laugh — she took offence.",
          },
          {
            phrase: "get yourself out there",
            use: "You should probably get yourself out there.",
          },
          {
            phrase: "take me out to dinner",
            use: "Would it kill her to take me out to dinner?",
          },
          {
            phrase: "Would it kill you to…?",
            use: "Would it kill her to take me out to dinner?",
          },
          {
            phrase: "a little marital poke isn’t going to kill you",
            use: "",
          },
          {
            phrase: "tipping your prime",
            use: "You’re just tipping your prime.",
          },
          {
            phrase: "having an affair",
            use: "Are you having an affair?",
          },
          {
            phrase: "throw the net out",
            use: "Time to throw the net out.",
          },
          {
            phrase: "I wasn’t expecting to see you again",
            use: "I wasn’t expecting to see you again.",
          },
          {
            phrase: "chuffed to my boots",
            use: "I’m chuffed to my boots.",
          },
          {
            phrase: "don’t get me wrong",
            use: "Don’t get me wrong, I’m chuffed… but…",
          },
          {
            phrase: "saucy",
            use: "Thank you for the text, saucy.",
          },
          {
            phrase: "I’m such a toolbox",
            use: "I’m such a toolbox.",
          },
          {
            phrase: "a cheap thrill",
            use: "Just a really, really cheap thrill.",
          },
          {
            phrase: "What are you craving?",
            use: "What are you craving?",
          },
          {
            phrase: "I’ll see what I can dig out",
            use: "I’ll see what I can dig out and you go browse.",
          },
          {
            phrase: "go browse",
            use: "You go browse.",
          },
          {
            phrase: "You got me",
            use: "Ha, you got me.",
          },
          {
            phrase: "Didn’t get it",
            use: "Didn’t get it.",
          },
          {
            phrase: "way too provocative",
            use: "That would be way too provocative.",
          },
          {
            phrase: "quite relentless",
            use: "It’s quite relentless.",
          },
          {
            phrase: "blown away",
            use: "I’m blown away.",
          },
          {
            phrase: "grab you for a second",
            use: "Can I just grab you for a second?",
          },
          {
            phrase: "can’t stop picturing…",
            use: "I just can’t stop picturing it.",
          },
          {
            phrase: "May I cut in?",
            use: "May I cut in?",
          },
          {
            phrase: "I don’t want to jinx anything",
            use: "I don’t want to jinx anything, but…",
          },
          {
            phrase: "could be life-changing",
            use: "Could be life-changing.",
          },
          {
            phrase: "flaunt your life",
            use: "Don’t flaunt your promotion in front of people who just got laid off.",
          },
          {
            phrase: "I can’t wait to be old",
            use: "I can’t wait to be old — fewer expectations, more rest.",
          },
          {
            phrase: "if it’s any consolation",
            use: "If it’s any consolation, at least you tried.",
          },
          {
            phrase: "I couldn’t bear it",
            use: "Don’t make a big fuss — I couldn’t bear it.",
          },
        ],
      },
      homework: {
        note: "Re-shadow 3–5 favourite lines from tonight · 3 takes. Optional: 60 s ‘tell the camera’ using 3 tape phrases.",
      },
    },
    {
      id: "s01e04",
      season: 1,
      num: 4,
      title: "Episode 4 · Silent retreat",
      icon: "🤫",
      tagline: "Enforced silence · secrets · old acquaintance",
      synopsis:
        "Fleabag and her sister Claire reluctantly visit a female-only, silent retreat, courtesy of their father. Their enforced silence is interrupted, however, by an unusual neighbouring weekend workshop, explosive secrets coming to light, and a surprising connection with an old acquaintance.",
      beats: defaultBeats(8),
      finale: {
        prompt:
          "Improvisation: a time silence (or a forced ‘calm’ weekend) made everything louder — secrets, awkwardness, or an unexpected connection. Use at least 5 tape phrases.",
      },
      homework: {
        note: "Shadow 3–5 lines · 3 takes.",
      },
    },
    {
      id: "s01e05",
      season: 1,
      num: 5,
      title: "Episode 5 · Memorial lunch",
      icon: "🦊",
      tagline: "Family home · memorial · desire & guilt",
      synopsis:
        "Fleabag and Claire return to their family home for the annual memorial lunch.",
      beats: defaultBeats(8),
      finale: {
        prompt: "Confession energy without oversharing — 60 s · tape on.",
      },
      homework: {
        note: "Shadow 3–5 lines · 3 takes.",
      },
    },
    {
      id: "s01e06",
      season: 1,
      num: 6,
      title: "Episode 6 · What happened to Boo",
      icon: "🎭",
      tagline: "Facing up · rare sincerity · season close",
      synopsis:
        "Fleabag faces up to her actions and reveals what happened to her beloved friend Boo.",
      beats: defaultBeats(8),
      finale: {
        prompt: "Drop the irony for 45 s — then put it back. Contrast · tape phrases.",
      },
      homework: {
        note: "Shadow 3–5 lines · celebrate finishing the season.",
      },
    },
    {
      id: "s02e01",
      season: 2,
      num: 1,
      title: "Episode 1 · Engagement dinner",
      icon: "⛪",
      tagline: "Priest · old tensions · family storm",
      synopsis:
        "Fleabag celebrates Godmother and Dad’s engagement and is intrigued by their new priest, but the evening comes to a stormy end when old tensions resurface.",
      beats: defaultBeats(8),
      finale: {
        prompt:
          "A family celebration that went sideways — intrigue, tension, one unexpected person in the room. Use at least 4 tape phrases.",
      },
      homework: {
        note: "Shadow 3–5 lines from tonight’s beats · 3 takes each.",
      },
    },
    {
      id: "s02e02",
      season: 2,
      num: 2,
      title: "Episode 2 · Counselling",
      icon: "💬",
      tagline: "Uncomfortable truth · Claire’s news · somewhere unexpected",
      synopsis:
        "A counselling session elicits an uncomfortable truth from Fleabag, and a chat with Claire brings some unwelcome news.",
      beats: defaultBeats(8),
      finale: {
        prompt:
          "Improvisation: an awkward truth that slipped out in the wrong room — then where you ended up next. 60 s · tape phrases on.",
      },
      homework: {
        note: "Shadow 3–5 lines · optional 45 s aside to camera.",
      },
    },
    {
      id: "s02e03",
      season: 2,
      num: 3,
      title: "Episode 3 · Claire’s work",
      icon: "👀",
      tagline: "Work event · stranger · eyes open",
      synopsis:
        "Fleabag helps Claire out, and a meeting with a stranger opens Fleabag’s eyes.",
      beats: defaultBeats(8),
      finale: {
        prompt:
          "A favour that went wrong — then one conversation that changed how you saw something. Use at least 4 tape phrases.",
      },
      homework: {
        note: "Shadow 3–5 lines · 3 takes.",
      },
    },
    {
      id: "s02e04",
      season: 2,
      num: 4,
      title: "Episode 4 · Looking for solace",
      icon: "🕯️",
      tagline: "Painful memories · quiet · more trouble",
      synopsis:
        "After a day looking back on painful memories, Fleabag searches for solace.",
      beats: defaultBeats(8),
      finale: {
        prompt:
          "You went looking for quiet / comfort — and found something else. 60 s · at least 5 tape phrases.",
      },
      homework: {
        note: "Shadow 3–5 lines · 3 takes.",
      },
    },
    {
      id: "s02e05",
      season: 2,
      num: 5,
      title: "Episode 5 · Claire’s crisis",
      icon: "💍",
      tagline: "Sister in crisis · wedding on the line",
      synopsis:
        "Claire has a crisis, and Godmother and Dad’s wedding hangs in the balance.",
      beats: defaultBeats(8),
      finale: {
        prompt:
          "Someone close calls you in a crisis — what do you do first? Keep irony optional. Use at least 5 tape phrases.",
      },
      homework: {
        note: "Shadow 3–5 lines · 3 takes.",
      },
    },
    {
      id: "s02e06",
      season: 2,
      num: 6,
      title: "Episode 6 · The wedding",
      icon: "✨",
      tagline: "Wedding day · endings · what she’s looking for",
      synopsis:
        "As the wedding day arrives, will Fleabag find the ending she’s looking for?",
      beats: defaultBeats(8),
      finale: {
        prompt:
          "Season close: tell the ending you needed — not the neat one, the honest one. Drop or keep the fourth wall. Tape phrases welcome.",
      },
      homework: {
        note: "Shadow 3–5 lines · celebrate finishing Series 2.",
      },
    },
  ];

  function getSession(id) {
    for (var i = 0; i < SESSIONS.length; i++) {
      if (SESSIONS[i].id === id) return SESSIONS[i];
    }
    return null;
  }

  function getSessionsBySeason(season) {
    var n = Number(season) || 1;
    return SESSIONS.filter(function (s) {
      return (s.season || 1) === n;
    });
  }

  /** Build linear screens: beats → finale → homework */
  function buildFlow(session) {
    var beats = (session && session.beats) || defaultBeats(6);
    var screens = beats.map(function (b, i) {
      return {
        kind: "beat",
        id: b.id || "beat-" + (i + 1),
        label: b.label || "Beat " + (i + 1),
        short: String(i + 1),
        teacher: b.teacher || "",
        blocks: b.blocks || ["watch", "phrases", "speak"],
        phrases: b.phrases || [],
        watch: b.watch || null,
        context: b.context || null,
        speak: b.speak || null,
        lexRound: b.lexRound || null,
        exampleRound: b.exampleRound || null,
        optional: !!b.optional,
        time: b.time || "5–8 min",
      };
    });
    screens.push({
      kind: "finale",
      id: "finale",
      label: "Improv",
      short: "★",
      teacher:
        "All cool words stay on screen. Learners improvise — mission: use as many tape phrases as they can.",
      prompt: (session && session.finale && session.finale.prompt) || "Improvise with the tape phrases.",
      time: "10–15 min",
    });
    screens.push({
      kind: "homework",
      id: "homework",
      label: "Homework",
      short: "HW",
      teacher: "Shadowing at home — short lines, several takes.",
      note: (session && session.homework && session.homework.note) || "Shadow 3–5 lines × 3 takes.",
      time: "20–30 min",
    });
    return screens;
  }

  global.FLEABAG_BLOCK_META = BLOCK_META;
  global.FLEABAG_WORKSHOP_SESSIONS = SESSIONS;
  global.FLEABAG_WORKSHOP_getSession = getSession;
  global.FLEABAG_WORKSHOP_getSessionsBySeason = getSessionsBySeason;
  global.FLEABAG_WORKSHOP_buildFlow = buildFlow;
  /** legacy empty — lesson uses buildFlow */
  global.FLEABAG_WORKSHOP_STEPS = [];
})(typeof window !== "undefined" ? window : globalThis);
