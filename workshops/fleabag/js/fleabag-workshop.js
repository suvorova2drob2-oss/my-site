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
          teacher:
            "Opening beat · ‘perfect boyfriend’ list → punchline. Cool phrases from the clip. Discussion: why ‘nice’ can feel wrong / boring / dangerous.",
          blocks: ["watch", "context"],
          phrases: [
            "run baths",
            "hoover",
            "kind and supportive",
            "laugh at all of my jokes",
            "really fucking affectionate",
            "Sounds like a dickhead",
          ],
          watch: {
            videoUrl: "media/s01e01/01-part-dickhead.mp4",
            note:
              "~40 s · He’d cook all the time, run baths, hoover… kind and supportive… laugh at all of my jokes… really fucking affectionate. — Sounds like a dickhead.",
          },
          context: {
            tone: "Lexical · domestic care + soft-partner labels + the punchline",
            meanings: [
              "run a bath / run baths = fill the tub with water for someone (caring, intimate chore).",
              "hoover (BrE verb) = vacuum-clean (from the brand Hoover) — He’d hoover = he’d do the housework.",
              "kind and supportive = warm + emotionally on your side (praise… or a flat ‘nice guy’ label).",
              "laugh at all of my jokes = always find you funny — love, or people-pleasing?",
              "really fucking affectionate (18+) = very physically / emotionally loving (show energy; in class you can soften to really affectionate).",
              "Sounds like a dickhead = punchline: after a perfect list, she / we reject the ‘too good’ type — comic, cruel, or honest?",
            ],
            examples: [
              "RUN A BATH — run a bath · run baths · run someone a bath · I’ve run you a bath.",
              "He’d cook all the time, run baths, hoover.",
              "She ran me a bath after a brutal day.",
              "HOOVER — hoover the flat / the stairs / after dinner · give the place a quick hoover · (AmE: vacuum).",
              "He’d hoover without being asked.",
              "Can you hoover before they arrive?",
              "KIND AND SUPPORTIVE — kind and supportive · emotionally supportive · supportive of my choices / career.",
              "He was kind and supportive — and somehow I still felt bored.",
              "LAUGH AT … JOKE(S) — laugh at my jokes · laugh at everything I say · never laughs at my jokes.",
              "He’d laugh at all of my jokes.",
              "If they laugh at absolutely everything, is it love — or no real opinion?",
              "AFFECTIONATE — really / fucking affectionate · physically affectionate · not very affectionate · affectionate with strangers (awkward).",
              "Plus, he was really fucking affectionate.",
              "SOUNDS LIKE A… — Sounds like a dickhead. · Sounds like a catch. · Sounds like a red flag. · Sounds like my ex.",
              "Sounds like a dickhead.",
            ],
          },
          speak: {
            mission:
              "Personal English · 60–90 s · steal tape phrases when they fit (don’t force every line).",
            starters: [
              "He’d cook / run baths / hoover — and somehow…",
              "Kind and supportive is great, but…",
              "He’d laugh at all of my jokes, which made me wonder…",
              "Too affectionate can feel like…",
              "Sounds like a dickhead — because…",
            ],
            questions: [
              {
                q: "The “Dickhead” Paradox: Why does a partner who is kind, supportive, and cooks / hoovers make some people feel uncomfortable? Is there a fine line between being supportive and being boring?",
                examples: [
                  "They’re perfect on paper — zero spark.",
                  "You feel guilty for wanting more drama / edge.",
                  "Supportive starts to feel like a parent, not a partner.",
                  "You sabotage ‘nice’ because it feels safer than being happy.",
                ],
              },
              {
                q: "Gender roles: In your culture, is a man who does all the cooking and cleaning viewed as the perfect catch, or is he subtly judged? Should chores be split 50/50?",
                examples: [
                  "Perfect catch — finally, emotional labour shared.",
                  "Judged as ‘not masculine’ by family / friends.",
                  "50/50 sounds fair — real life is messier (shifts, kids, energy).",
                  "Who notices the invisible chores (planning, remembering)?",
                ],
              },
              {
                q: "Too affectionate: How can you tell the difference between genuine affection and love bombing at the beginning? Why does someone being “too nice” sometimes trigger our alarm bells?",
                examples: [
                  "Genuine: steady, consistent, respects no.",
                  "Love bombing: too much too fast · future talk on date two.",
                  "Alarm bells: you’re being rushed past your usual pace.",
                  "Past hurt: ‘nice’ feels like a mask you’ve seen before.",
                ],
              },
              {
                q: "The Humor Test: He’d laugh at all of my jokes. If a partner laughs at absolutely everything you say, does it show deep love — or that they’re just trying to please you and lack their own opinion?",
                examples: [
                  "Deep love: they delight in you, not every punchline.",
                  "People-pleasing: they never disagree, even on bad jokes.",
                  "You start testing them with worse jokes on purpose.",
                  "Best: they laugh when it’s funny — and gently roast you when it isn’t.",
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
                label: "RUN A BATH / HOOVER",
                bank: "run a bath · run someone a bath · hoover the flat / the stairs · cook all the time",
                task: "Two lines: “He’d ___ without being asked” and “The kindest domestic thing someone did for me was…”",
              },
              {
                label: "KIND AND SUPPORTIVE",
                bank: "kind and supportive · emotionally supportive · supportive of my choices",
                task: "Say when ‘kind and supportive’ is exactly what you need — and when it feels flat / boring.",
              },
              {
                label: "LAUGH AT MY JOKES",
                bank: "laugh at all of my jokes · never laughs at my jokes · laugh along",
                task: "Finish: “If they laugh at absolutely everything I say, I feel ___ because…”",
              },
              {
                label: "AFFECTIONATE / DICKHEAD",
                bank: "really affectionate · too affectionate · Sounds like a dickhead / a catch / a red flag",
                task: "Describe a ‘perfect on paper’ partner in 2 sentences — then land the punchline: “Sounds like a ___.”",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission:
              "Models first · then a real micro-story with the cool phrases.",
            items: [
              {
                label: "DOMESTIC CARE",
                bank: "run baths · hoover · cook all the time",
                models: [
                  "He’d cook all the time, run baths, hoover.",
                  "She ran me a bath after a brutal day.",
                  "He’d hoover without being asked.",
                ],
                say: "Your turn (30–40 s): a real moment of domestic care — cooking, baths, hoovering — that felt loving… or strangely empty. What happened?",
              },
              {
                label: "NICE → PUNCHLINE",
                bank: "kind and supportive · laugh at all of my jokes · really affectionate · Sounds like a dickhead",
                models: [
                  "He was kind and supportive — and somehow I still felt bored.",
                  "He’d laugh at all of my jokes.",
                  "Plus, he was really fucking affectionate.",
                  "Sounds like a dickhead.",
                ],
                say: "Your turn: list someone’s ‘perfect partner’ qualities — then land your honest punchline: Sounds like a ___ (dickhead / catch / red flag / my ex).",
              },
            ],
          },
        },
        {
          id: "startup-loan",
          label: "Startup loan",
          teacher:
            "Bank pitch + wardrobe fail. Cool BrE chunks first (iron out / bits and pieces / get you far). Discussion: awkward recoveries → calculated risk vs madness.",
          blocks: ["watch", "context"],
          phrases: [
            "iron out (the) details",
            "bits and pieces",
            "won't get you very far",
            "considering a loan",
            "a top on underneath",
          ],
          watch: {
            videoUrl: "media/s01e01/02-startup-loan.mp4",
            note:
              "~1.5 min · We really appreciate you considering us for a startup loan… details to iron out… bits and pieces… won’t get you very far… I thought I had a top on underneath.",
          },
          context: {
            tone: "Lexical · soft bank English + the wardrobe punchline",
            meanings: [
              "iron out (the) details = smooth away small problems / disagreements before a deal (literally: press with an iron).",
              "bits and pieces = various small things / leftover odds and ends / minor points still unclear.",
              "get someone far / won’t get you very far = help you succeed — or the opposite: that approach won’t take you far here.",
              "considering a loan / considering us for a startup loan = reviewing / weighing up a loan application (polite bank speak).",
              "a top on underneath = a top (T-shirt / vest) under the outer layer — Fleabag’s failed cover story when she’s… not dressed for a bank.",
            ],
            examples: [
              "IRON OUT — iron out the details / a few issues / our differences · We’ve still got a couple of things to iron out.",
              "There are a couple of details that we need to iron out.",
              "Let’s iron out the contract before we sign.",
              "BITS AND PIECES — bits and pieces of evidence / information · one or two bits and pieces · pack up your bits and pieces.",
              "One or two bits and pieces I’m going to need to see some more on.",
              "I still need a few bits and pieces for the application.",
              "GET … FAR — hard work will get you far · that kind of thing won’t get you very far · charm only gets you so far.",
              "I’m sorry, that kind of thing won’t get you very far here any more.",
              "Politeness gets you far — until they need the paperwork.",
              "CONSIDERING A LOAN — considering a loan · considering us for a startup loan · We’re still considering your application.",
              "We really appreciate you considering us for a startup loan.",
              "Would you ever consider a loan for a dream project?",
              "A TOP ON UNDERNEATH — I thought I had a top on underneath · nothing on underneath · wear something underneath.",
              "Oh, no, sorry. I thought I had a top on underneath.",
            ],
          },
          speak: {
            mission:
              "Personal English · 60–90 s · steal tape phrases when they fit.",
            starters: [
              "We still need to iron out…",
              "There are a few bits and pieces…",
              "That kind of thing won’t get you very far when…",
              "When I was considering a loan…",
              "I thought I had a top on underneath — classic me when…",
            ],
            questions: [
              {
                q: "Fleabag made a ridiculous mistake because she forgot what she was wearing. What is the most awkward or embarrassing thing that has ever happened to you during an important meeting, exam, or job interview?",
                examples: [
                  "Wrong clothes / zipper / coffee spill / wrong name.",
                  "Tech fail: shared the wrong screen / mute for 10 minutes.",
                  "Blank mind: forgot your own CV story.",
                  "Said the quiet part out loud — then froze.",
                ],
              },
              {
                q: "How do you recover after a complete disaster in a conversation? Do you try to laugh it off, or do you run away in panic?",
                examples: [
                  "Laugh it off + one clean apology.",
                  "Name it fast: ‘That was awkward — can we restart?’",
                  "Panic exit / change the subject / hide in the bathroom.",
                  "Send a follow-up message later — safer than live repair.",
                ],
              },
              {
                q: "When considering a loan to start a business, where is the line between a “calculated risk” and “pure madness”? Would you ever risk your own savings for a dream project like Fleabag did?",
                examples: [
                  "Calculated: numbers, plan B, money you can lose.",
                  "Madness: rent money, no plan, vibes only.",
                  "Yes — once, for something that mattered more than safety.",
                  "Never — I’d rather bootstrap slowly / find a partner.",
                ],
              },
            ],
          },
          lexRound: {
            title: "Lexis round",
            mission:
              "Warm-up · practise the bank English out loud. Short turns. Then Discussion.",
            drills: [
              {
                label: "IRON OUT / BITS AND PIECES",
                bank: "iron out the details / a few issues · one or two bits and pieces · see some more on…",
                task: "Bank voice (20 s): “We really appreciate you considering us… There are a couple of details we need to iron out, and one or two bits and pieces…” — finish the sentence.",
              },
              {
                label: "WON’T GET YOU VERY FAR",
                bank: "won’t get you very far · gets you far · only gets you so far",
                task: "Two lines: “___ will get you far in life” and “___ won’t get you very far in a bank / exam / first date.”",
              },
              {
                label: "CONSIDERING A LOAN",
                bank: "considering a loan · considering us for a startup loan · still considering your application",
                task: "30 s: Would you consider a loan for a café / app / course? What’s the one detail you’d need to iron out first?",
              },
              {
                label: "TOP ON UNDERNEATH",
                bank: "I thought I had a top on underneath · nothing on underneath · wear something underneath",
                task: "One awkward recovery line after a wardrobe / appearance fail — laugh it off in English.",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission:
              "Models first · then a real micro-story with the cool phrases.",
            items: [
              {
                label: "SOFT BANK ENGLISH",
                bank: "iron out (the) details · bits and pieces · won’t get you very far · considering a loan",
                models: [
                  "We really appreciate you considering us for a startup loan.",
                  "There are a couple of details that we need to iron out.",
                  "One or two bits and pieces I’m going to need to see some more on.",
                  "I’m sorry, that kind of thing won’t get you very far here any more.",
                ],
                say: "Your turn (30–40 s): a real ‘almost yes’ moment — job, visa, bank, landlord — where they still needed to iron out details / bits and pieces. What happened?",
              },
              {
                label: "AWKWARD RECOVERY",
                bank: "a top on underneath · laugh it off · won’t get you very far",
                models: [
                  "Oh, no, sorry. I thought I had a top on underneath.",
                  "Charm won’t get you very far once the paperwork starts.",
                ],
                say: "Your turn: an embarrassing meeting / exam / interview moment — and how you recovered (or didn’t).",
              },
            ],
          },
        },
        {
          id: "sister",
          label: "Sister",
          teacher:
            "Claire + café + pride + nuclear sibling ammo. Cool phrases: bail out / bringing that up / ‘really well’. Discussion: family money → dirty secrets used as weapons.",
          blocks: ["watch", "context"],
          phrases: [
            "doing really well",
            "the top that she lost years ago",
            "super-high-powered",
            "bail someone out",
            "The only thing harder than… is…",
            "When are you going to stop bringing that up?",
          ],
          watch: {
            videoUrl: "media/s01e01/03-sister.mp4",
            note:
              "~1.5 min · lecture-hall sister energy · café check-in · top she lost… bail you out… When are you going to stop bringing that up? · sink nuclear option.",
          },
          context: {
            tone: "Lexical · façade English + money/pride + weaponised past",
            meanings: [
              "doing really well = the ‘I’m fine’ mask — often said when you’re exhausted or breaking inside.",
              "the top that she lost years ago = Fleabag’s quiet jab / theft as sibling score-keeping (I’m wearing what you ‘lost’).",
              "super-high-powered = very successful, high-status, intimidatingly competent (job / sister / boss energy).",
              "bail someone out = rescue them from trouble — especially money / debt / a mess they can’t fix alone.",
              "The only thing harder than A is B = set up two painful options; B is worse (here: confess failure < ask for money).",
              "bring something up = mention an old topic again — often a wound. When are you going to stop bringing that up? = stop dragging that shame into every fight.",
            ],
            examples: [
              "DOING REALLY WELL — I’m doing really well · We’re doing really well, thanks · (said through gritted teeth).",
              "How’s the café? — Oh, doing really well.",
              "People say they’re doing really well when they can’t admit they’re tired.",
              "THE TOP SHE LOST — I’m wearing the top that she lost years ago · the one you ‘lost’ · still wearing your jumper.",
              "I’m wearing the top that she lost years ago, so…",
              "SUPER-HIGH-POWERED — a super-high-powered sister / job / lawyer · high-powered career · high-flyer.",
              "Having to tell your super-high-powered sister you’ve failed…",
              "BAIL … OUT — bail someone out · ask her to bail you out · bail me out financially · I can’t keep bailing you out.",
              "The only thing harder… is having to ask her to bail you out.",
              "Would you rather take a bank loan or ask a relative to bail you out?",
              "THE ONLY THING HARDER THAN… IS… — The only thing harder than failing is asking for help. · The only thing harder than saying no is feeling used.",
              "The only thing harder than having to tell your super-high-powered sister… is having to ask her to bail you out.",
              "BRING THAT UP — bring something up · stop bringing that up · Why are you bringing that up now? · Don’t bring that up in front of people.",
              "When are you going to stop bringing that up?",
              "She brings up the sink every time Claire gets moral.",
            ],
          },
          speak: {
            mission:
              "Personal English · 60–90 s · steal tape phrases when they fit.",
            starters: [
              "I’m doing really well — which usually means…",
              "She asked in public so that…",
              "The only thing harder than ___ is…",
              "I’d rather take a bank loan than ask family to bail me out because…",
              "I hide failures from loved ones when…",
              "I’ll bail you out once — but the line is…",
              "When are you going to stop bringing that up?",
              "I only bring up old mistakes when…",
            ],
            questions: [
              {
                q: "Why do people often try to look perfectly fine and say they are doing “really well” even when they are exhausted or broken inside? Is it hard for you to admit you’re tired or struggling — and in your culture, is complaining acceptable, or are you expected to always be positive?",
                examples: [
                  "Pride / don’t want pity / don’t want to be a burden.",
                  "Work culture: ‘I’m fine’ is the default.",
                  "Family expects strength — soft feelings stay private.",
                  "You can complain a little — but not look ‘weak’.",
                ],
              },
              {
                q: "Fleabag and Claire are in a quiet lecture hall. Why does Claire choose this public place to ask about the failing café — genuine interest, or so Fleabag won’t make a scene? Why is “How is it going with the café?” so hard to hear in front of other people?",
                examples: [
                  "Public = safer for Claire; Fleabag can’t explode.",
                  "Genuine worry wrapped in control.",
                  "Shame: failure becomes a performance for strangers.",
                  "Defensive fast = the question hits the wound she was hiding.",
                ],
              },
              {
                q: "Fleabag says the only thing harder than admitting failure to her super-high-powered sister is asking her to bail her out. Why is family money so humiliating? Would you rather take a high-interest bank loan — or ask a relative to bail you out? Why?",
                examples: [
                  "Bank = cold, but no lifelong scoreboard.",
                  "Family help = love… and leverage / lectures forever.",
                  "Humiliation: they already think you’re chaotic.",
                  "I’d ask once, with a clear repayment plan.",
                ],
              },
              {
                q: "Have you ever hidden failures or problems from loved ones so they wouldn’t worry — or look down on you? Is total independence always worth that stress?",
                examples: [
                  "Hid debt / a breakup / a failed exam / a job loss.",
                  "Independence felt like dignity — until it became loneliness.",
                  "Telling one safe person helped more than ‘handling it alone’.",
                  "Some secrets protect others; some just protect your ego.",
                ],
              },
              {
                q: "If someone constantly asks you to help or bail them out, where is the line between being supportive and being used? How do you say “no” without drowning in guilt?",
                examples: [
                  "Once = support. Pattern + no change = being used.",
                  "Soft no: ‘I can’t do money — I can help you look at a plan.’",
                  "Hard no: ‘I can’t bail you out this time.’",
                  "Guilt is normal — resentment is the warning light.",
                ],
              },
              {
                q: "When Claire goes superior / moral, Fleabag fires the nuclear line about the sink. Why that weapon — can’t she handle being looked down on, so she has to drag Claire down to her level? In your arguments, do you ever bring up someone’s embarrassing past just to defend yourself — cheap tactic, or fair when they’re too judgmental?",
                examples: [
                  "Nuclear option: equalise the shame fast.",
                  "If you look down on me, I burn your façade.",
                  "Cheap: old dirt that isn’t about this fight.",
                  "Fair-ish: they started the morality lecture — you refuse the pedestal.",
                ],
              },
              {
                q: "Claire has degrees, career, husband, Burberry — and Fleabag reduces her to the sink. How does that line crack the perfect façade vs the shamed past? Why are ‘flawless’ people so sensitive to old mistakes — and why do we find it so satisfying when an ‘ideal’ person turns out messy?",
                examples: [
                  "One dirty secret can outweigh the whole résumé in a fight.",
                  "Perfect image = fragile; one stain feels fatal.",
                  "Schadenfreude: relief that they’re human too.",
                  "We hate judgment more than we love honesty — until the mask slips.",
                ],
              },
            ],
          },
          lexRound: {
            title: "Lexis round",
            mission:
              "Warm-up · patterns out loud. Short turns. Then Discussion.",
            drills: [
              {
                label: "DOING REALLY WELL",
                bank: "doing really well · I’m fine · hanging in there · surviving",
                task: "Say a ‘mask’ answer and then the honest one: “I’m doing really well” → “Actually…”",
              },
              {
                label: "BAIL SOMEONE OUT",
                bank: "bail someone out · bail me out financially · I can’t keep bailing you out",
                task: "Two lines: “I’d bail them out if…” and “I won’t bail them out when…”",
              },
              {
                label: "SUPER-HIGH-POWERED",
                bank: "super-high-powered sister / job / lawyer · high-flyer · intimidatingly successful",
                task: "Describe a ‘Claire type’ in one sentence — no names needed.",
              },
              {
                label: "THE ONLY THING HARDER THAN… IS…",
                bank: "The only thing harder than A is B",
                task: "Fire three finishes about pride, money, or family. One funny, one honest, one dark.",
              },
              {
                label: "BRING THAT UP",
                bank: "bring that up · stop bringing that up · Why are you bringing that up now?",
                task: "Two lines: “When are you going to stop bringing that up?” and “I only bring it up when…”",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission:
              "Models first · then a real micro-story with the cool phrases.",
            items: [
              {
                label: "FAÇADE",
                bank: "doing really well · How’s it going with…?",
                models: [
                  "How’s the café? — Oh, doing really well.",
                  "People say they’re doing really well when they can’t admit they’re tired.",
                ],
                say: "Your turn (30–40 s): a time you said you were doing really well — what was actually going on underneath?",
              },
              {
                label: "PRIDE & BAIL-OUT",
                bank: "super-high-powered · bail someone out · The only thing harder than… is…",
                models: [
                  "The only thing harder than having to tell your super-high-powered sister… is having to ask her to bail you out.",
                  "I’d rather take a bank loan than ask family to bail me out.",
                  "I’m wearing the top that she lost years ago, so…",
                ],
                say: "Your turn: asking family for money/help — or being the one who bails others out. What happened, and where was the line?",
              },
              {
                label: "WEAPONISED PAST",
                bank: "When are you going to stop bringing that up? · bring that up · perfect façade",
                models: [
                  "When are you going to stop bringing that up?",
                  "She brings up the sink every time Claire gets moral.",
                  "Don’t bring that up in front of people.",
                ],
                say: "Your turn: a fight where someone dragged up an old embarrassing mistake — or you did. Cheap shot, or fair defence?",
              },
            ],
          },
        },
        {
          id: "shopping",
          label: "Shopping",
          teacher:
            "Cheap clothes joke with Boo. One nuclear cool chunk: they give me the thrush (+ fanny breathe). Discussion: comfort vs look vs budget — keep it light, laugh allowed.",
          blocks: ["watch", "context"],
          phrases: [
            "they give me the thrush",
            "They don’t let your fanny breathe",
          ],
          watch: {
            videoUrl: "media/s01e01/04-shopping.mp4",
            note:
              "~50 s · cheap trousers joke with Boo · they give me the thrush · They don’t let your fanny breathe.",
          },
          context: {
            tone: "Lexical · body + clothes humour (18+ BrE · classroom-safe paraphrase OK)",
            meanings: [
              "give someone the thrush = (joke) cheap / synthetic trousers so unbreathable they cause thrush — comic exaggeration of ‘these clothes are bad for your body’.",
              "They don’t let your fanny breathe (BrE, 18+) = the fabric traps heat / moisture; nothing ‘breathes’. Softer classroom version: They don’t let anything breathe / the fabric isn’t breathable.",
            ],
            examples: [
              "THRUSH / TROUSERS — they give me the thrush · these trousers give you the thrush · cheap synthetics = no air.",
              "We buy the cheap ones even though they give me the thrush.",
              "DON’T LET … BREATHE — They don’t let your fanny breathe · the fabric doesn’t breathe · nothing breathable about them.",
              "They look great — they just don’t let your fanny breathe.",
              "BREATHABLE — breathable fabric / cotton · nothing breathable · completely unbreathable.",
              "Claire wants breathable quality; Fleabag and Boo want the bargain and the joke.",
            ],
          },
          speak: {
            mission:
              "Personal English · 45–60 s · steal the joke energy, not every rude word if that feels safer.",
            starters: [
              "They looked amazing, but they give me the thrush…",
              "They don’t let your fanny breathe — classic when…",
              "I bought it because it was cheap / stunning, and then…",
              "My priority is price / look / comfort because…",
            ],
            questions: [
              {
                q: "Fleabag and Boo joke about buying cheap clothes they know aren’t comfortable — they’d rather laugh than stress about the budget. Have you ever bought something that looked amazing or was incredibly cheap, but turned out completely unwearable or terribly uncomfortable? Worth it, or instant regret?",
                examples: [
                  "Sale heels you wore once and cried.",
                  "Skinny jeans that cut off circulation.",
                  "Synthetic top that looked chic and felt like a plastic bag.",
                  "Worth it for one photo — never again.",
                ],
              },
              {
                q: "For Claire, expensive breathable clothes are basic; for Fleabag and Boo, cheap is reality turned into a joke. When you buy clothes, what’s the main priority — price, look, or how comfortable / “breathable” the material is? Have you ever bought something synthetic and awful just because it looked stunning or was on a massive sale?",
                examples: [
                  "Price first — student / survival mode.",
                  "Look first — comfort is tomorrow’s problem.",
                  "Breathable fabric or I won’t wear it twice.",
                  "Sale brain: 70% off overrides common sense.",
                ],
              },
            ],
          },
          lexRound: {
            title: "Lexis round",
            mission: "Warm-up · short & cheeky. Then Discussion.",
            drills: [
              {
                label: "GIVE ME THE THRUSH",
                bank: "they give me the thrush · these ___ give you the thrush · cheap synthetics",
                task: "Finish: “I still buy them even though they give me the thrush because…”",
              },
              {
                label: "DON’T LET … BREATHE",
                bank: "They don’t let your fanny breathe · the fabric doesn’t breathe · nothing breathable",
                task: "Describe one unwearable item in one comic line — use breathe / breathable / thrush if you dare.",
              },
              {
                label: "PRICE / LOOK / COMFORT",
                bank: "on a massive sale · looked stunning · completely unwearable · breathable fabric",
                task: "Rank your triad out loud: price · look · comfort — then defend #1 in 15 seconds.",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission:
              "Models first · then a real micro-story with the cool phrases.",
            items: [
              {
                label: "CHEAP JOKE",
                bank: "they give me the thrush · They don’t let your fanny breathe",
                models: [
                  "We buy the cheap ones even though they give me the thrush.",
                  "They look great — they just don’t let your fanny breathe.",
                ],
                say: "Your turn (30–40 s): a clothing fail — cheap or gorgeous — that was unwearable. Was it worth the joke / the photo / the regret?",
              },
            ],
          },
        },
        {
          id: "bad-feminists",
          label: "Bad feminists",
          teacher:
            "Lecture-hall hands up · shared insecurity. Cool chunks: trade 5 years… / hairy nipples. Discussion: automatic honesty → toxic perfection → would you press the button?",
          blocks: ["watch", "context"],
          phrases: [
            "trade 5 years of your life for the perfect body",
            "Raise your hand if…",
            "I’ve got really hairy nipples",
          ],
          watch: {
            videoUrl: "media/s01e01/05-bad-feminists.mp4",
            note:
              "~45 s · Raise your hand if you’d trade 5 years… · both hands up · I’ve got really hairy nipples.",
          },
          context: {
            tone: "Lexical · body honesty + the ‘deal with the devil’ question",
            meanings: [
              "Raise your hand if… = public poll / confession format — your body answers before your filter does.",
              "trade X for Y = give up something valuable to get something else (here: years of life ↔ perfect body).",
              "I’ve got really hairy nipples = blunt body confession / punchline honesty — break the solemn mood with something raw and human.",
            ],
            examples: [
              "RAISE YOUR HAND IF… — Raise your hand if you’ve ever… · Raise your hand if you’d… · Keep your hand up if…",
              "Raise your hand if you’d trade 5 years of your life for the perfect body.",
              "TRADE … FOR… — trade 5 years for the perfect body · trade freedom for security · I wouldn’t trade that for anything.",
              "Would you trade five years of your life for ___?",
              "They raise their hands before the brain can negotiate.",
              "HAIRY NIPPLES / BODY HONESTY — I’ve got really hairy nipples · nobody’s perfect · the unfiltered detail.",
              "I’ve got really hairy nipples.",
              "Sometimes the funniest line is just an ugly truth said out loud.",
            ],
          },
          speak: {
            mission:
              "Personal English · 60–90 s · be as honest as the room allows.",
            starters: [
              "Raise your hand if… — my body answered before my brain…",
              "I’d trade 5 years for ___ because…",
              "I wouldn’t press that button because…",
              "We’re so different, but we both…",
              "I’ve got really hairy nipples energy = I’d rather say the ugly truth than…",
            ],
            questions: [
              {
                q: "When the speaker asks about trading 5 years for the perfect body, Fleabag and Claire both raise their hands instantly — sisters who disagree on everything else. Why the same automatic reaction? What does that say about a hidden, shared insecurity? Have you ever blurted an answer or made a gesture in public before your brain could filter it — and was it scary when your body revealed a truth you wanted to keep secret?",
                examples: [
                  "Twin instinct: same wound, different lives.",
                  "Hand up = desire they pretend they don’t have.",
                  "Blurted a crush / salary / insecurity in a room.",
                  "Scary: everyone saw it; also freeing.",
                ],
              },
              {
                q: "They realise they’re the only ones in the hall with hands up — and feel ashamed. Why so deep? Be Fleabag-honest: if a magical button gave you your dream appearance, career, or skill for exactly 5 years of your life, would you press it? Why or why not?",
                examples: [
                  "Shame: ‘bad feminist’ / vain / weak in public.",
                  "Yes — for health, face, voice, a skill I’d kill for.",
                  "No — time is the only non-refundable currency.",
                  "Maybe for someone I love — not for Instagram.",
                ],
              },
              {
                q: "Claire has career and money; Fleabag is free and chaotic — yet both would sacrifice years for physical perfection. Why does changing the outside so often feel like it will magically fix the inside? Does modern society put too much pressure on women (and men) to look flawless — and how do you handle beauty standards when scrolling social media?",
                examples: [
                  "If I look ‘done’, maybe I’ll finally feel enough.",
                  "Outside fix = temporary anaesthetic for inside noise.",
                  "Mute / unfollow / reality-check the lighting.",
                  "I feel the pressure — and I still catch myself comparing.",
                ],
              },
            ],
          },
          lexRound: {
            title: "Lexis round",
            mission: "Warm-up · patterns out loud. Then Discussion.",
            drills: [
              {
                label: "RAISE YOUR HAND IF…",
                bank: "Raise your hand if you’ve ever… / you’d… / you’d trade…",
                task: "Invent two poll questions for this room — one silly, one dangerously honest.",
              },
              {
                label: "TRADE … FOR…",
                bank: "trade 5 years for the perfect body · trade X for Y · I wouldn’t trade that for anything",
                task: "Three deals: one you’d take, one you’d refuse, one you’d only take at 3 a.m.",
              },
              {
                label: "UGLY TRUTH LINE",
                bank: "I’ve got really hairy nipples · nobody’s perfect · the unfiltered detail",
                task: "One comic ‘I’ve got ___’ body-or-life confession (keep it classroom-OK if you need to).",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission:
              "Models first · then a real micro-story with the cool phrases.",
            items: [
              {
                label: "THE DEAL",
                bank: "Raise your hand if… · trade 5 years… for the perfect body",
                models: [
                  "Raise your hand if you’d trade 5 years of your life for the perfect body.",
                  "Would you trade five years of your life for ___?",
                  "They raise their hands before the brain can negotiate.",
                ],
                say: "Your turn (30–40 s): your automatic reaction to that question — and whether you’d press the 5-year button for looks, career, or a skill.",
              },
              {
                label: "RAW HONESTY",
                bank: "I’ve got really hairy nipples · unfiltered truth",
                models: [
                  "I’ve got really hairy nipples.",
                  "Sometimes the funniest line is just an ugly truth said out loud.",
                ],
                say: "Your turn: a time your body / mouth told the truth in public before you could filter it — what slipped out?",
              },
            ],
          },
        },
        {
          id: "hugs",
          label: "Hugs",
          teacher:
            "Grateful hug → panic. Cool punchline: That’s terrifying. Never do that again. Discussion: intimacy fear → joke as shield → hugger vs personal space.",
          blocks: ["watch", "context"],
          phrases: [
            "That’s terrifying",
            "Never do that again",
          ],
          watch: {
            videoUrl: "media/s01e01/06-hugs.mp4",
            note:
              "~30 s · Claire hugs Fleabag (gratitude) → That’s terrifying. Never do that again.",
          },
          context: {
            tone: "Lexical · shutting down warmth after a rare soft moment",
            meanings: [
              "That’s terrifying = the closeness itself feels dangerous — not the hug as violence, but intimacy as threat.",
              "Never do that again = comic hard boundary after a soft moment: kill the warmth before it becomes a habit / a need.",
            ],
            examples: [
              "TERRIFYING — That’s terrifying · It was terrifying how easy that felt · terrifyingly honest.",
              "That’s terrifying.",
              "The hug wasn’t scary — needing it was.",
              "NEVER DO THAT AGAIN — Never do that again · Don’t ever do that again · Let’s never speak of this.",
              "Never do that again.",
              "Thank you… and also never do that again.",
              "SOFT → HARD — gratitude / love → joke / sarcasm / shutdown.",
              "Instead of ‘I love you’, she ruins the moment on purpose.",
            ],
          },
          speak: {
            mission:
              "Personal English · 60–90 s · steal tape phrases when they fit.",
            starters: [
              "That’s terrifying — because…",
              "Never do that again — I say that when…",
              "Hugging family feels harder than hugging friends because…",
              "When someone gets soft with me, I usually…",
              "I’m a hugger / I protect my space — so I say…",
            ],
            questions: [
              {
                q: "Claire hugs Fleabag because she’s secretly grateful — then panics: “That’s terrifying. Never do that again.” Why are both sisters so uncomfortable with physical affection and genuine warmth? Do you find it hard to hug certain family members even if you love them — and why can hugging a parent or sibling feel more awkward or “terrifying” than hugging a friend or partner?",
                examples: [
                  "Family history = touch was rare / tense / loaded.",
                  "Partner/friend hugs are chosen; family hugs feel obligatory.",
                  "Warmth opens a door you’re not ready to walk through.",
                  "Love is there — the body just doesn’t know the choreography.",
                ],
              },
              {
                q: "Claire can’t say “Thank you for saving me, I love you” — she kills the moment with a harsh joke. How do you usually react when someone suddenly becomes very emotional, vulnerable, or sweet with you? Do you embrace it — or instantly ruin the tension with a joke / sarcasm because you feel too unprotected?",
                examples: [
                  "Joke = armour; softness feels naked.",
                  "I freeze, then change the subject.",
                  "I can receive it — if it’s private, not public.",
                  "I match their softness… then overthink it for three days.",
                ],
              },
              {
                q: "Fleabag looks shocked / paralyzed by Claire’s sudden touch — the hug broke their usual boundaries. Are you a “hugger” who loves physical contact, or do you closely protect your personal space? How do you politely signal “please don’t touch / hug me” without offending people or making a scene?",
                examples: [
                  "Hugger with friends; fortress with family.",
                  "Side-hug / handshake / wave from afar.",
                  "Soft no: ‘I’m not much of a hugger — no offence.’",
                  "Step back + smile + change subject before arms open.",
                ],
              },
            ],
          },
          lexRound: {
            title: "Lexis round",
            mission: "Warm-up · short patterns. Then Discussion.",
            drills: [
              {
                label: "THAT’S TERRIFYING",
                bank: "That’s terrifying · terrifyingly honest · It was terrifying how…",
                task: "Finish two lines: “That’s terrifying when someone…” and “That’s terrifying because it means…”",
              },
              {
                label: "NEVER DO THAT AGAIN",
                bank: "Never do that again · Don’t ever do that again · Let’s never speak of this",
                task: "Say a soft moment + the hard shutdown after it (grateful → joke / boundary).",
              },
              {
                label: "HUGGER VS SPACE",
                bank: "I’m not much of a hugger · I need my space · no offence · personal space",
                task: "Practise one polite refusal of a hug — warm tone, clear boundary.",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission:
              "Models first · then a real micro-story with the cool phrases.",
            items: [
              {
                label: "SOFT → SHUTDOWN",
                bank: "That’s terrifying · Never do that again",
                models: [
                  "That’s terrifying.",
                  "Never do that again.",
                  "Thank you… and also never do that again.",
                ],
                say: "Your turn (30–40 s): a rare warm moment with family — hug, thanks, ‘I love you’ — and how someone (or you) killed it with a joke or panic.",
              },
            ],
          },
        },
        {
          id: "dating",
          label: "Dating",
          teacher:
            "Bus Rodent small talk. Cool idiom: jump down someone’s throat. Discussion: anxious over-explaining → temper → dating as distraction.",
          blocks: ["watch", "context"],
          phrases: [
            "jump down someone’s throat",
            "I wouldn’t jump down the throat of someone…",
          ],
          watch: {
            videoUrl: "media/s01e01/07-dating.mp4",
            note:
              "~30 s · Bus Rodent date · I wouldn’t jump down the throat of someone… (over colour / clothes) · Fleabag checked out.",
          },
          context: {
            tone: "Lexical · anger idiom + awkward-date energy",
            meanings: [
              "jump down someone’s throat = attack them with criticism / snap at them aggressively (literally: leap into their throat).",
              "I wouldn’t jump down the throat of someone… = ‘I’m not the type to judge / snap’ — often said by someone already over-anxious and defensive.",
            ],
            examples: [
              "JUMP DOWN SOMEONE’S THROAT — jump down my / his / her throat · don’t jump down my throat · ready to jump down someone’s throat.",
              "Don’t jump down my throat — I was only asking.",
              "She jumped down his throat over a tiny mistake.",
              "I WOULDN’T… — I wouldn’t jump down the throat of someone for wearing ___ / liking ___ / saying ___.",
              "I wouldn’t jump down the throat of someone just because they chose a weird colour.",
              "He treats clothing colour like a topic you could get attacked for — classic over-anxious defence.",
              "HOT-TEMPERED — hot-tempered · quick to snap · stay quiet and patient · emotionally checked out.",
            ],
          },
          speak: {
            mission:
              "Personal English · 60–90 s · steal the idiom when it fits.",
            starters: [
              "I wouldn’t jump down the throat of someone who…",
              "He was so nervous he over-explained…",
              "I can jump down someone’s throat when…",
              "I stay quiet even when the date is weird because…",
              "I went out just to fill a void when…",
            ],
            questions: [
              {
                q: "The “Bus Rodent” guy treats choosing a clothing colour like something you could “jump down his throat” over. How does that line show an over-anxious, slightly defensive personality? Have you been on a date or in a conversation with someone so nervous they over-explained unimportant things (a colour, a food)? How do you make a socially awkward person comfortable without exhausting yourself?",
                examples: [
                  "He pre-defends against judgment that isn’t coming.",
                  "Tiny topics balloon into ‘please don’t attack me’.",
                  "Soft questions + smile + don’t fix them.",
                  "Kind for 20 minutes — then protect your energy / exit.",
                ],
              },
              {
                q: "While he’s trying to sound polite and non-judgmental, Fleabag is just hunting an emotional distraction. Are you hot-tempered — easy to jump down someone’s throat when they say something foolish — or do you stay quiet and patient even when the conversation is boring or weird?",
                examples: [
                  "Hot temper: snap first, apologise later.",
                  "Quiet patience: endure, then ghost.",
                  "I only jump down throats with people I love / feel safe with.",
                  "Boredom ≠ anger — I just check out like Fleabag.",
                ],
              },
              {
                q: "Fleabag looks indifferent and emotionally checked out — she didn’t choose him for his personality; she’s filling a loneliness void. Have you ever gone out with someone just because you were bored, lonely, or needed a distraction? Is it fair to use “random” people as a coping mechanism — or does it always end in an awkward disaster?",
                examples: [
                  "Fair-ish if both are honest about low stakes.",
                  "Not fair: they think it’s a real date; you’re using a body as anaesthetic.",
                  "Sometimes it stays light; sometimes someone gets hurt.",
                  "Better distraction: friend, walk, hobby — not a human placeholder.",
                ],
              },
            ],
          },
          lexRound: {
            title: "Lexis round",
            mission: "Warm-up · idiom muscle. Then Discussion.",
            drills: [
              {
                label: "JUMP DOWN SOMEONE’S THROAT",
                bank: "jump down my throat · don’t jump down my throat · ready to jump down someone’s throat",
                task: "Two lines: “Don’t jump down my throat — I only…” and “I jumped down their throat when…”",
              },
              {
                label: "I WOULDN’T…",
                bank: "I wouldn’t jump down the throat of someone for… / just because…",
                task: "Bus-Rodent voice (20 s): over-explain a tiny preference and add the ‘I wouldn’t jump down…’ defence.",
              },
              {
                label: "CHECKED OUT",
                bank: "emotionally checked out · hot-tempered · stay quiet and patient",
                task: "Describe your date style in one sentence: jumper / patient / checked out.",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission:
              "Models first · then a real micro-story with the cool phrases.",
            items: [
              {
                label: "THE IDIOM",
                bank: "jump down someone’s throat · I wouldn’t jump down the throat of someone…",
                models: [
                  "Don’t jump down my throat — I was only asking.",
                  "I wouldn’t jump down the throat of someone just because they chose a weird colour.",
                  "She jumped down his throat over a tiny mistake.",
                ],
                say: "Your turn (30–40 s): a nervous over-explanation on a date / chat — or a time you (almost) jumped down someone’s throat.",
              },
              {
                label: "DATING AS DISTRACTION",
                bank: "emotionally checked out · fill the void · awkward disaster",
                models: [
                  "She didn’t choose him for his personality — she needed a distraction.",
                  "Using random people as a coping mechanism usually gets messy.",
                ],
                say: "Your turn: a bored / lonely / distraction date — fair, or awkward disaster?",
              },
            ],
          },
        },
        {
          id: "dad",
          label: "Dad",
          teacher:
            "2 a.m. confession · dad frozen. Cool words: pathetic / apathetic / cynical / depraved. Discussion: parental awkwardness → imposter guilt → how you handle a breakdown.",
          blocks: ["watch", "context"],
          phrases: [
            "You’re pathetic",
            "apathetic",
            "cynical",
            "depraved",
          ],
          watch: {
            videoUrl: "media/s01e01/08-dad.mp4",
            note:
              "~1.5 min · 2 a.m. at Dad’s · You’re pathetic… apathetic, cynical, depraved… feminist guilt · he freezes.",
          },
          context: {
            tone: "Lexical · self-attack adjectives + parental freeze",
            meanings: [
              "pathetic = pitiful / contemptibly weak (harsh self-insult or insult to someone else).",
              "apathetic = showing no interest, enthusiasm, or concern — emotionally flat.",
              "cynical = believing people are selfish; bitter / distrustful of sincerity.",
              "depraved = morally corrupt / wicked (heavy, almost theatrical self-condemnation).",
            ],
            examples: [
              "PATHETIC — You’re pathetic · I feel pathetic · a pathetic attempt / excuse.",
              "You’re pathetic.",
              "She called herself pathetic before anyone else could.",
              "APATHETIC — apathetic · total apathy · reacted with apathy · emotionally flat.",
              "His awkward small talk felt like apathy when she needed a hug.",
              "CYNICAL — cynical · bitterly cynical · a cynical take on love / feminism / family.",
              "DEPRAVED — depraved · morally bankrupt · morally depraved (show-scale self-attack).",
              "Apathetic, cynical, depraved — she stacks the insults like a courtroom verdict on herself.",
              "MORALLY BANKRUPT — feel morally bankrupt · can’t even call myself a feminist…",
            ],
          },
          speak: {
            mission:
              "Personal English · 60–90 s · steal the adjectives when they fit (carefully).",
            starters: [
              "You’re pathetic — I’d only say that when…",
              "Apathetic / cynical / depraved — the one that hits me is…",
              "It’s harder to get support from parents because…",
              "I felt like an imposter when…",
              "When someone breaks down in front of me, I…",
            ],
            questions: [
              {
                q: "Dad is paralyzed by Fleabag at 2 a.m. — he loves her but is trapped in social anxiety and fear of making a scene. Why is emotional support sometimes harder from parents than from strangers or friends? How do you react when someone you love meets your pain with apathy or awkward small talk instead of a hug?",
                examples: [
                  "Parents freeze in the role they never practised.",
                  "Friends chose you; parents carry history and shame.",
                  "I get angry — then lonely.",
                  "I translate their awkwardness as love with no tools.",
                ],
              },
              {
                q: "Fleabag cries she’s morally bankrupt — can’t call herself a feminist because she’d trade years for a perfect body. Too hard on herself, or hypocritical to support a movement while secretly wanting something that contradicts its values? Have you felt like an “imposter” in your beliefs, lifestyle, or job — high values in public, failure in private? How do you live with that conflict?",
                examples: [
                  "Human: ideals ≠ 24/7 purity.",
                  "Hypocrisy only if you shame others for what you hide.",
                  "Imposter at work / in activism / in ‘having it together’.",
                  "Deal: name the gap without destroying yourself.",
                ],
              },
              {
                q: "When Fleabag opens her heart, Dad stands frozen — he can’t hug her or find words. Why is it often so hard for parents to handle adult children’s breakdowns? If a close friend or relative suddenly sobs that they feel lost, broken, or morally bankrupt — what’s your automatic reaction: hug, practical advice, or freeze because you don’t know what to say?",
                examples: [
                  "Parents fear saying the wrong thing forever.",
                  "Adult child + tears = their failure movie starts playing.",
                  "I hug first, words later.",
                  "I solve / advise — and miss the feeling.",
                  "I freeze — then send a message at 3 a.m.",
                ],
              },
            ],
          },
          lexRound: {
            title: "Lexis round",
            mission: "Warm-up · adjective muscle. Then Discussion.",
            drills: [
              {
                label: "PATHETIC",
                bank: "You’re pathetic · I feel pathetic · a pathetic excuse",
                task: "One self-attack line and one kinder rewrite of the same feeling.",
              },
              {
                label: "APATHETIC / CYNICAL / DEPRAVED",
                bank: "apathetic · cynical · depraved · morally bankrupt",
                task: "Pick TWO and finish: “People call me ___ when…” / “I feel ___ when…”",
              },
              {
                label: "FREEZE VS HUG",
                bank: "freeze up · awkward small talk · give someone a hug · I don’t know what to say",
                task: "30 s: your default when someone cries — freeze, fix, or hold.",
              },
            ],
          },
          exampleRound: {
            title: "Example talk",
            mission:
              "Models first · then a real micro-story with the cool phrases.",
            items: [
              {
                label: "SELF-VERDICT",
                bank: "You’re pathetic · apathetic · cynical · depraved",
                models: [
                  "You’re pathetic.",
                  "Apathetic, cynical, depraved.",
                  "She stacks the insults like a courtroom verdict on herself.",
                ],
                say: "Your turn (30–40 s): a time you (or someone) was brutally hard on yourself — too harsh, or honest?",
              },
              {
                label: "PARENTAL FREEZE",
                bank: "apathetic · awkward small talk · freeze up · hug",
                models: [
                  "His awkward small talk felt like apathy when she needed a hug.",
                  "He loves her — he just has no tools for the collapse.",
                ],
                say: "Your turn: needing support from a parent — or handling someone’s breakdown. Hug, advice, or freeze?",
              },
            ],
          },
        },
        {
          id: "step-mother",
          label: "Step-mother",
          teacher:
            "Godmother / step-mother energy. Cool phrases only this beat — swing by · ghastly, darling.",
          blocks: ["watch", "context"],
          phrases: [
            "I just thought I’d swing by",
            "step-mother",
            "You really do look ghastly, darling",
          ],
          watch: {
            videoUrl: "media/s01e01/09-step-mother.mp4",
            note:
              "~2 min · Yeah, I just thought I’d swing by… · step-mother… You really do look ghastly, darling.",
          },
          context: {
            tone: "Lexical · soft entrance + velvet insult",
            meanings: [
              "swing by = drop in casually / visit briefly without a big plan (Yeah, I just thought I’d swing by).",
              "step-mother = father’s new partner (here: the godmother figure Fleabag refuses to soften).",
              "ghastly = awful / terrible-looking (old-fashioned, cutting) — You really do look ghastly, darling = sugar-coated cruelty.",
            ],
            examples: [
              "SWING BY — swing by · swing by later · I thought I’d swing by · just swinging by.",
              "Yeah, I just thought I’d swing by.",
              "I’ll swing by after work — only ten minutes.",
              "STEP-MOTHER — step-mother · stepmother · my dad’s wife · don’t call her Mum.",
              "GHASTLY — look ghastly · a ghastly colour / idea / evening · You really do look ghastly, darling.",
              "You really do look ghastly, darling.",
            ],
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
        note: "Play tonight’s clips in order (audio only) · shadow 3–5 lines × 3 takes each.",
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
          teacher: "Clip 1 · cool phrase only.",
          blocks: ["watch", "context"],
          phrases: ["I think my period is coming"],
          watch: {
            videoUrl: "media/s01e02/01-my-period-is-coming.mp4",
            note: "~35 s · I think my period is coming.",
          },
          context: {
            tone: "Lexical · body excuse / aside",
            meanings: [
              "I think my period is coming = soft prediction / excuse energy — something’s about to hit (literal PMS, or comic cover).",
            ],
            examples: [
              "PERIOD COMING — I think my period is coming · my period’s coming · I’ve got my period.",
              "I think my period is coming.",
            ],
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "keep-up",
          label: "Keep up",
          teacher: "Clip 2 · cool phrases only.",
          blocks: ["watch", "context"],
          phrases: ["you can keep up", "patch things up with Harry"],
          watch: {
            videoUrl: "media/s01e02/02-you-can-keep-up.mp4",
            note: "~30 s · you can keep up · patch things up with Harry.",
          },
          context: {
            tone: "Lexical · pace + repair a relationship",
            meanings: [
              "you can keep up = you’re able to stay at the same pace / level (conversation, life, banter) — not fall behind.",
              "patch things up (with someone) = make peace after a fight / try to repair the relationship (here: with Harry).",
            ],
            examples: [
              "KEEP UP — keep up · you can keep up · keep up with someone / something · can’t keep up.",
              "You can keep up.",
              "I can’t keep up with her.",
              "PATCH THINGS UP — patch things up · patch things up with someone · try to patch things up · we patched it up.",
              "I should patch things up with Harry.",
              "They’re trying to patch things up after the breakup.",
            ],
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "commit-breakups",
          label: "Commit to break-ups",
          teacher: "Clip 3 · cool phrase only.",
          blocks: ["watch", "context"],
          phrases: ["commit to a break-up"],
          watch: {
            videoUrl: "media/s01e02/03-commit-to-break-ups.mp4",
            note: "~55 s · commit to a break-up.",
          },
          context: {
            tone: "Lexical · follow through on ending it",
            meanings: [
              "commit to a break-up = actually stick with ending the relationship — not soft-launch, not ‘maybe’, the full decision.",
            ],
            examples: [
              "COMMIT TO — commit to a break-up · commit to the decision · can’t commit · fully commit.",
              "She can’t commit to a break-up — she keeps going back.",
              "If you’re done, commit to the break-up.",
            ],
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "hooker-slag",
          label: "Labels",
          teacher: "Clip 4 · cool phrase only (18+).",
          blocks: ["watch", "context"],
          phrases: ["hooker slag"],
          watch: {
            videoUrl: "media/s01e02/04-hooker-slag.mp4",
            note: "~30 s · hooker slag.",
          },
          context: {
            tone: "Lexical · crude insult label (18+ · teach tone, don’t normalise)",
            meanings: [
              "hooker slag (18+) = stacked crude insults about someone’s sexual reputation — harsh, misogynistic labelling (show the cruelty of the line, not a model to copy).",
            ],
            examples: [
              "LABELS — cruel labels · call someone a ___ · don’t throw labels like that.",
              "hooker slag (show line — discuss the violence of the label).",
            ],
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "relentlessly-profound",
          label: "Profound",
          teacher: "Clip 5 · cool phrases only.",
          blocks: ["watch", "context"],
          phrases: [
            "relentlessly profound",
            "shit got real",
            "utterly inaccessible",
            "lose currency of youth",
          ],
          watch: {
            videoUrl: "media/s01e02/05-relentlessly-profound.mp4",
            note:
              "~50 s · relentlessly profound · shit got real · utterly inaccessible · lose currency of youth.",
          },
          context: {
            tone: "Lexical · intensity + out of reach + ageing value",
            meanings: [
              "relentlessly profound = intensely deep / meaningful without letting up (comic or sincere).",
              "shit got real (informal) = the situation suddenly became serious / intense.",
              "utterly inaccessible = completely unreachable / impossible to get to (emotionally, socially, or literally).",
              "lose (the) currency of youth = stop having the ‘value’ / social power that youth gives you — ageing as losing a kind of money.",
            ],
            examples: [
              "RELENTLESSLY PROFOUND — relentlessly profound · relentlessly honest / positive / annoying.",
              "It all got relentlessly profound.",
              "SHIT GOT REAL — shit got real · things got real · it got serious fast.",
              "Then shit got real.",
              "UTTERLY INACCESSIBLE — utterly inaccessible · emotionally inaccessible · completely out of reach.",
              "He’s become utterly inaccessible.",
              "CURRENCY OF YOUTH — lose (the) currency of youth · the currency of youth · youth as currency.",
              "She’s afraid of losing the currency of youth.",
            ],
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "how-behind",
          label: "How behind",
          teacher: "Clip 6 · cool phrase only.",
          blocks: ["watch", "context"],
          phrases: ["How behind are you?"],
          watch: {
            videoUrl: "media/s01e02/06-how-behind-are-you.mp4",
            note: "~1 min · How behind are you?",
          },
          context: {
            tone: "Lexical · delayed / lagging",
            meanings: [
              "How behind are you? = how late / how far behind schedule (work, life, rent, emotions) are you?",
            ],
            examples: [
              "BEHIND — How behind are you? · I’m so behind · fall behind · get behind on rent / work.",
              "How behind are you?",
              "I’m ridiculously behind this week.",
            ],
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "point-fingers",
          label: "Point fingers",
          teacher: "Clip 7 · cool phrase only.",
          blocks: ["watch", "context"],
          phrases: ["point fingers at"],
          watch: {
            videoUrl: "media/s01e02/07-point-fingers.mp4",
            note: "~1 min · point fingers at…",
          },
          context: {
            tone: "Lexical · blame",
            meanings: [
              "point fingers at (someone) = blame them / accuse them (often unfairly or publicly).",
            ],
            examples: [
              "POINT FINGERS — point fingers at someone · stop pointing fingers · no one is pointing fingers · easy to point fingers.",
              "Don’t point fingers at me.",
              "Everyone started pointing fingers.",
            ],
          },
          speak: { themes: [], questions: [] },
        },
        {
          id: "surprise",
          label: "Surprise",
          teacher: "Clip 8 · phrases TBD.",
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
        note: "Play tonight’s clips in order (audio only) · shadow 3–5 lines · optional 45 s aside to camera.",
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
          phraseClips: [
            {
              phrase: "really inappropriate",
              clips: [
                {
                  label: "really inappropriate",
                  videoUrl: "media/s01e03/phrase-really-inappropriate.mp4",
                },
                {
                  label: "really inappropriate · 2",
                  videoUrl: "media/s01e03/phrase-really-inappropriate-2.mp4",
                },
              ],
            },
            {
              phrase: "if it’s any consolation",
              videoUrl: "media/s01e03/phrase-if-its-any-consolation.mp4",
            },
            {
              phrase: "flaunt your life",
              videoUrl: "media/s01e03/phrase-flaunt.mp4",
            },
            {
              phrase: "I can’t wait to be old",
              clips: [
                {
                  label: "I can’t wait to…",
                  videoUrl: "media/s01e03/phrase-i-cant-wait-to.mp4",
                },
                {
                  label: "I can’t wait to leave",
                  videoUrl: "media/s01e03/phrase-i-cant-wait-to-leave.mp4",
                },
              ],
            },
          ],
          watch: {
            videoUrl: "media/s01e03/01-flaunt-your-life.mp4",
            note: "really inappropriate · flaunt your life · I can’t wait to be old · if it’s any consolation",
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
            videoUrl: "media/s01e03/02-take-offence.mp4",
            note:
              "He’s one of those men who is explosively sexually inappropriate with everyone, but makes you feel bad if you take offence because he was “just being fun”.",
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
            videoUrl: "media/s01e03/03-tipping-your-prime.mp4",
            note:
              "Are you having an affair? → A little marital poke isn’t going to kill you. → Would it kill her to take me out to dinner? → get yourself out there… tipping your prime.",
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
            videoUrl: "media/s01e03/04-i-couldnt-bear-it.mp4",
            note: "Don’t do a jumpy-outy surprise… don’t sing Happy Birthday — I couldn’t bear it.",
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
            videoUrl: "media/s01e03/05-get-her-something.mp4",
            note:
              "What about these? → Get her something she’d never get herself. Surprise her. → She’ll think I’ve gone nuts. → No, she’ll think you see her as this person, and everyone wants to be this person.",
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
            videoUrl: "media/s01e03/06-time-to-throw-the-net-out.mp4",
            note: "Time to throw the net out. (Dating hunt starts.)",
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
            videoUrl: "media/s01e03/07-toolbox.mp4",
            note:
              "I was not expecting to see you again… I’m chuffed to my boots… thank you for the text, saucy… I’m such a tool box… coat on the Tube… sister’s surprise… soap shop.",
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
            videoUrl: "media/s01e03/08-what-are-you-craving.mp4",
            note:
              "What are you craving? → a really, really cheap thrill → sexually frustrated sister → basic bunny → It’s all in the twist → You got me / Didn’t get it → half price because it’s quite relentless.",
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
            videoUrl: "media/s01e03/09-can-i-cut-in.mp4",
            note:
              "I’m blown away. I had absolutely no idea. Can I just grab you for a second? …can’t stop conjuring an image of you… all alone, feeling so terribly lonely. Just can’t stop picturing it. → I don’t think you have to be alone to be lonely. May I cut in?",
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
            videoUrl: "media/s01e03/10-jinx-anything.mp4",
            note:
              "Good birthday business? → Huge… I don’t want to jinx anything, but huge. Could be life-changing.",
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
            def: "Not suitable for the situation; socially out of line.",
            ctx: "Martin cracks a sexual joke at a family birthday.",
            use: "That joke was really inappropriate at a funeral.",
          },
          {
            phrase: "take offence",
            def: "To feel hurt or insulted by what someone said.",
            ctx: "Someone meant it as banter — the other person didn’t laugh.",
            use: "She didn’t laugh — she took offence.",
          },
          {
            phrase: "get yourself out there",
            def: "To put yourself back into dating or social life.",
            ctx: "Claire is pushing Fleabag to date again after a dry spell.",
            use: "You should probably get yourself out there.",
          },
          {
            phrase: "take me out to dinner",
            def: "To invite someone on a proper date — at least a meal out.",
            ctx: "Fleabag wants the bare minimum from a man who’s been useless.",
            use: "Would it kill her to take me out to dinner?",
          },
          {
            phrase: "Would it kill you to…?",
            def: "Rhetorical complaint: can’t you do this one obvious thing?",
            ctx: "Complaining that someone won’t do one small, obvious thing.",
            use: "Would it kill her to take me out to dinner?",
          },
          {
            phrase: "a little marital poke isn’t going to kill you",
            def: "Dismissing a risky joke between spouses as harmless.",
            ctx: "Martin shrugs off crossing a line — ‘it’s only a joke between spouses.’",
            use: "Relax — a little marital poke isn’t going to kill you.",
          },
          {
            phrase: "tipping your prime",
            def: "Past your best years; edging out of your peak.",
            ctx: "Someone ages you out of the room with a ‘helpful’ comment.",
            use: "You’re just tipping your prime.",
          },
          {
            phrase: "having an affair",
            def: "A secret romantic relationship outside your main one.",
            ctx: "A blunt accusation mid-argument — no soft landing.",
            use: "Are you having an affair?",
          },
          {
            phrase: "throw the net out",
            def: "To start dating widely — cast around and see who bites.",
            ctx: "Dating strategy chat: cast wide, see who bites.",
            use: "Time to throw the net out.",
          },
          {
            phrase: "I wasn’t expecting to see you again",
            def: "Surprise at running into someone you didn’t plan to face.",
            ctx: "Awkward reunion — Harry turns up where Fleabag didn’t plan to face him.",
            use: "I wasn’t expecting to see you again.",
          },
          {
            phrase: "chuffed to my boots",
            def: "Extremely pleased — British, a bit over the top.",
            ctx: "Harry tries to sound delighted… while something else is wrong.",
            use: "I’m chuffed to my boots.",
          },
          {
            phrase: "don’t get me wrong",
            def: "Don’t misunderstand me — before I add an uncomfortable ‘but’.",
            ctx: "Softening a compliment before the uncomfortable ‘but’.",
            use: "Don’t get me wrong, I’m chuffed… but…",
          },
          {
            phrase: "saucy",
            def: "Playfully flirty or cheeky.",
            ctx: "A flirty text lands — playful, a bit cheeky.",
            use: "Thank you for the text, saucy.",
          },
          {
            phrase: "I’m such a toolbox",
            def: "Calling yourself an idiot after something clumsy.",
            ctx: "Self-roast after saying or doing something socially clumsy.",
            use: "I’m such a toolbox.",
          },
          {
            phrase: "a cheap thrill",
            def: "A quick, low-stakes buzz — fun without real commitment.",
            ctx: "Sex-shop browse — they’re honest about why they’re there.",
            use: "Just a really, really cheap thrill.",
          },
          {
            phrase: "What are you craving?",
            def: "Asking what someone wants right now — often deadpan.",
            ctx: "Shop assistant, deadpan, asking what you’re actually after.",
            use: "What are you craving?",
          },
          {
            phrase: "I’ll see what I can dig out",
            def: "Going to find something for you in the back / in stock.",
            ctx: "Assistant goes to fetch stock; you get a moment to look around.",
            use: "I’ll see what I can dig out and you go browse.",
          },
          {
            phrase: "go browse",
            def: "Telling someone to look around on their own for a bit.",
            ctx: "Same shop beat — you’re waved toward the shelves.",
            use: "You go browse.",
          },
          {
            phrase: "You got me",
            def: "Admitting someone caught you out.",
            ctx: "Caught out — someone spotted your real motive.",
            use: "Ha, you got me.",
          },
          {
            phrase: "Didn’t get it",
            def: "Failed to understand the joke or hint.",
            ctx: "A joke or hint completely missed the other person.",
            use: "Didn’t get it.",
          },
          {
            phrase: "way too provocative",
            def: "So bold or sexy it would cause a scene.",
            ctx: "Picking a gift / outfit that would cause a scene if you actually gave it.",
            use: "Sending that? That would be way too provocative.",
          },
          {
            phrase: "quite relentless",
            def: "Non-stop pressure — it won’t let up.",
            ctx: "The pressure (or the person) just will not ease up.",
            use: "It’s quite relentless.",
          },
          {
            phrase: "blown away",
            def: "Deeply impressed or stunned.",
            ctx: "Genuinely stunned by someone’s gesture or news.",
            use: "I’m blown away.",
          },
          {
            phrase: "grab you for a second",
            def: "Asking for a brief private word.",
            ctx: "Pulling someone aside mid-party for a private word.",
            use: "Can I just grab you for a second?",
          },
          {
            phrase: "can’t stop picturing…",
            def: "An image keeps replaying in your head.",
            ctx: "An image stuck in your head — awkward, vivid, won’t leave.",
            use: "I just can’t stop picturing it.",
          },
          {
            phrase: "May I cut in?",
            def: "Polite request to join a dance or conversation.",
            ctx: "Polite interruption — dance floor or conversation hijack.",
            use: "May I cut in?",
          },
          {
            phrase: "I don’t want to jinx anything",
            def: "Afraid of ruining good luck by talking about it.",
            ctx: "Something good might be starting — afraid to say it out loud.",
            use: "I don’t want to jinx anything, but…",
          },
          {
            phrase: "could be life-changing",
            def: "Might transform everything — or might be nothing.",
            ctx: "Hyping a moment that might matter — or might be nothing.",
            use: "Could be life-changing.",
          },
          {
            phrase: "flaunt your life",
            def: "Show off your success where others are struggling.",
            ctx: "Someone’s win is rubbing salt in other people’s wounds.",
            use: "Don’t flaunt your promotion in front of people who just got laid off.",
          },
          {
            phrase: "I can’t wait to be old",
            def: "Looking forward to fewer expectations and more freedom.",
            ctx: "Exhausted by performing youth / expectations — craving fewer rules.",
            use: "I can’t wait to be old — fewer expectations, more rest.",
          },
          {
            phrase: "if it’s any consolation",
            def: "A small comfort after bad news.",
            ctx: "Trying to soften a failure with a thin silver lining.",
            use: "If it’s any consolation, at least you tried.",
          },
          {
            phrase: "I couldn’t bear it",
            def: "Would find it unbearable — can’t cope with it.",
            ctx: "Birthday fuss / public attention — she wants it shut down now.",
            use: "Don’t make a big fuss — I couldn’t bear it.",
          },
        ],
      },
      homework: {
        note: "Play clips in order (audio) · Phrase vault (def → English, forgetting curve) · then FYP / Swipe.",
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
        phraseClips: b.phraseClips || [],
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
    var clips = [];
    beats.forEach(function (b, i) {
      var url = b && b.watch && b.watch.videoUrl;
      if (!url || /youtu\.be\/|youtube\.com\//i.test(String(url))) return;
      clips.push({
        label: (b && b.label) || "Clip " + (i + 1),
        src: String(url),
        optional: !!(b && b.optional),
      });
    });
    screens.push({
      kind: "homework",
      id: "homework",
      label: "Homework",
      short: "HW",
      teacher:
        "Shadowing at home — audio only, clips play one after another. No video.",
      note:
        (session && session.homework && session.homework.note) ||
        "Play the clips in order (audio only) · shadow 3–5 lines × 3 takes.",
      clips: clips,
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
