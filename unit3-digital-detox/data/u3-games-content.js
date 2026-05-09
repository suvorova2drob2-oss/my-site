/**
 * Unit 3 — My digital detox: question banks for Millionaire, Tic-tac, 100:1, Glass bridge,
 * Red/green, Weakest Link. Topic labels use "P1:" … "P6:" for hint iframe mapping. Text file URLs use "../" (pages live in games/).
 * @see unit3-digital-detox/games/
 */
(function (G) {
  "use strict";
  G = typeof globalThis !== "undefined" ? globalThis : G;

  G.U3_sourceFileForTopic = function (topic) {
    var m = /^P([1-6]):/i.exec((topic || "").trim());
    if (m) {
      var n = parseInt(m[1], 10);
      if (n >= 1 && n <= 6) return "../text-0" + n + "-digital-detox.html";
    }
    return "../text-01-digital-detox.html";
  };

  /** @type {{ topic: string, q: string, opts: string[], correct: number }[]} */
  G.U3_MILLIONAIRE_FACTS = [
    { topic: "P1: Survey & honesty", q: "According to Ofcom, people in the UK spend an average of how long on their smartphones each day?", opts: ["About one hour", "Two and a half hours", "Four hours", "Six hours"], correct: 1 },
    { topic: "P1: Survey & honesty", q: "The article says UK users check their phones about every:", opts: ["Five minutes", "Twelve minutes", "Twenty minutes", "Thirty minutes"], correct: 1 },
    { topic: "P1: Survey & honesty", q: "The journalist who describes his digital detox is:", opts: ["Steven Rice", "Stephen King", "Steve Jobs", "Richard Rice"], correct: 0 },
    { topic: "P2: Use & balance", q: "At one point the writer was picking up his phone over ___ times a day.", opts: ["Twenty", "Forty", "Sixty", "Eighty"], correct: 1 },
    { topic: "P2: Use & balance", q: "He was spending more than ___ hours online (even if not the highest figure).", opts: ["Two", "Four", "Six", "Eight"], correct: 1 },
    { topic: "P2: Use & balance", q: "The writer says we should not “demonise” phones because they have become:", opts: ["illegal in schools", "indispensable items", "free of charge", "harmless for children"], correct: 1 },
    { topic: "P3: Social media & focus", q: "Social media can make young people, in particular, feel:", opts: ["more confident", "less confident", "physically stronger", "better at maths"], correct: 1 },
    { topic: "P3: Social media & focus", q: "The text compares unfocused minds to butterflies that are:", opts: ["sleeping", "flitting from one subject to another", "reading books slowly", "avoiding news"], correct: 1 },
    { topic: "P3: Social media & focus", q: "Phone addiction is said to be making us more anxious and:", opts: ["richer", "depressed", "taller", "famous"], correct: 1 },
    { topic: "P4: Moderation", q: "The healthier route with technology is to learn moderation and good:", opts: ["passwords", "habits", "password habits", "games"], correct: 1 },
    { topic: "P4: Moderation", q: "The writer’s first practical step was to switch off ___ for all social media apps.", opts: ["the screen colour", "notifications", "Wi-Fi at home", "email accounts"], correct: 1 },
    { topic: "P5: Boundaries", q: "To cut distraction at home, he moved the phone out of the desk area to the:", opts: ["bedroom", "kitchen", "garden", "office"], correct: 1 },
    { topic: "P5: Boundaries", q: "He banned the device from his:", opts: ["kitchen", "bedroom", "car", "wallet"], correct: 1 },
    { topic: "P6: Benefits", q: "After changes, “yesterday” he had only nine pick-ups and ___ minutes online.", opts: ["33", "43", "53", "63"], correct: 1 },
    { topic: "P6: Benefits", q: "With less phone time, his imagination wanders more:", opts: ["slowly", "freely", "angrily", "rarely"], correct: 1 }
  ];

  /** @type {{ topic: string, lead?: string, gap: string, opts: string[], correct: number }[]} */
  G.U3_MILLIONAIRE_GAPS = [
    { topic: "P1: Survey", lead: "From Part 1:", gap: "According to a recent survey by _______, people in the UK spend an average of two and a half hours each day on their smartphones.", opts: ["Ofcom", "the BBC", "the NHS", "Google"], correct: 0 },
    { topic: "P1: Denial", lead: "From Part 1:", gap: "Looking back, I had been in obvious _______ about how it was affecting my ability to concentrate.", opts: ["denial", "success", "silence", "anger"], correct: 0 },
    { topic: "P1: Steps", lead: "From Part 1:", gap: "Journalist Steven Rice reveals the steps he took to combat his own _______.", opts: ["obsession", "holiday", "salary", "email"], correct: 0 },
    { topic: "P2: Numbers", lead: "From Part 2:", gap: "I was picking up my phone over _______ times each day and spending more than four hours online.", opts: ["forty", "four", "fourteen", "four hundred"], correct: 0 },
    { topic: "P2: Balance", lead: "From Part 2:", gap: "We shouldn’t go all out to demonise phones; they have become indispensable _______.", opts: ["items", "weapons", "toys", "jokes"], correct: 0 },
    { topic: "P3: Mood", lead: "From Part 3:", gap: "Our phone addiction, we are told, is making us more anxious and _______.", opts: ["depressed", "famous", "relaxed", "invisible"], correct: 0 },
    { topic: "P3: Information", lead: "From Part 3:", gap: "We are constantly bombarded with _______, challenging our ability to focus.", opts: ["information", "furniture", "music", "sleep"], correct: 0 },
    { topic: "P3: Focus", lead: "From Part 3:", gap: "… hindering our ability to apply ourselves for any length of time to one _______.", opts: ["task", "meal", "holiday", "pet"], correct: 0 },
    { topic: "P4: Advice", lead: "From Part 4:", gap: "The route to a healthier relationship with technology is to learn moderation and good _______.", opts: ["habits", "laws", "prices", "screens"], correct: 0 },
    { topic: "P4: Pace", lead: "From Part 4:", gap: "It’s better to ease yourself in step by step rather than an all-at-______ approach.", opts: ["once", "night", "school", "sea"], correct: 0 },
    { topic: "P4: Settings", lead: "From Part 4:", gap: "My first step was to switch off _______ for all social media apps on my phone.", opts: ["notifications", "batteries", "friends", "books"], correct: 0 },
    { topic: "P5: FOMO", lead: "From Part 5:", gap: "I kept looking at it, wondering if I was _______ on anything.", opts: ["missing out", "giving in", "logging off", "typing in"], correct: 0 },
    { topic: "P5: Bedroom", lead: "From Part 5:", gap: "I banned the device from my _______.", opts: ["bedroom", "kitchen", "garden", "car"], correct: 0 },
    { topic: "P5: Proverb", lead: "From Part 5:", gap: "‘_______,’ I thought, and promptly moved it to the kitchen.", opts: ["Out of sight, out of mind", "Better late than never", "All that glitters is not gold", "The early bird catches the worm"], correct: 0 },
    { topic: "P6: Creativity", lead: "From Part 6:", gap: "The less time I spend on my phone, the more time I have to myself. My imagination wanders more _______.", opts: ["freely", "angrily", "rarely", "badly"], correct: 0 }
  ];

  /** @type {{ topic: string, quote: string, focus: string, prompt: string, opts: string[], correct: number }[]} */
  G.U3_MILLIONAIRE_PARAPHRASE = [
    { topic: "P1: Obsession", quote: "… the steps he took to <strong>combat his own obsession</strong> …", focus: "combat his own obsession", prompt: "“Combat his own obsession” is closest in meaning to:", opts: ["ignore the problem completely", "take action to reduce a compulsive habit", "sell the phone at once", "praise the device in public"], correct: 1 },
    { topic: "P1: Denial", quote: "I had been in <strong>obvious denial</strong> about how it was affecting my ability to concentrate …", focus: "obvious denial", prompt: "In context, “denial” means:", opts: ["refusing to admit a problem you clearly had", "speaking very loudly", "winning a debate in court", "deleting the app for ever"], correct: 0 },
    { topic: "P1: Work", quote: "… the impact this was having on <strong>my work</strong>.", focus: "my work", prompt: "The main worry about screen use here is about:", opts: ["holiday travel only", "professional / job performance and focus", "household furniture", "none of the above"], correct: 1 },
    { topic: "P2: Consolation", quote: "… this was <strong>no consolation</strong>.", focus: "no consolation", prompt: "“No consolation” means the fact did NOT:", opts: ["worry the writer at all", "make the writer feel any better or reassured", "appear in the text", "match the title"], correct: 1 },
    { topic: "P2: Intertwined", quote: "… our online life is often <strong>closely intertwined with</strong> our offline one.", focus: "closely intertwined with", prompt: "The two sides of life are presented as:", opts: ["completely separate", "tightly connected and hard to pull apart", "illegal to mix", "only for teenagers"], correct: 1 },
    { topic: "P3: Darker side", quote: "… <strong>there is another, darker side to it all</strong>.", focus: "darker side", prompt: "The “darker side” refers to:", opts: ["only the phone colour settings", "negative effects and risks, not just benefits", "a night-time mode", "a brand name in the article"], correct: 1 },
    { topic: "P3: Compare to peers", quote: "… they continually <strong>compare themselves to their peers</strong> …", focus: "compare themselves to their peers", prompt: "This describes young people as:", opts: ["measuring themselves against others of their age", "avoiding all social contact", "only reading print books", "ignoring the article"], correct: 0 },
    { topic: "P3: Bombarded", quote: "… we are <strong>constantly bombarded with information</strong> …", focus: "constantly bombarded with information", prompt: "The image suggests the reader is:", opts: ["given almost no news", "overwhelmed with a steady flow of input", "at peace offline", "only allowed one website"], correct: 1 },
    { topic: "P4: Daunting", quote: "… since <strong>this can be quite daunting</strong> …", focus: "daunting", prompt: "“Daunting” suggests the change can feel:", opts: ["easy and risk-free", "intimidating or hard to face", "illegal in the UK", "boring to describe"], correct: 1 },
    { topic: "P4: All-at-once", quote: "… a step-by-step rather than <strong>an all-at-once approach</strong>.", focus: "an all-at-once approach", prompt: "The writer recommends avoiding:", opts: ["trying to change every habit in one go", "small gradual steps", "any advice from friends", "sleep"], correct: 0 },
    { topic: "P4: Notifications", quote: "… to <strong>switch off notifications</strong> for all social media apps …", focus: "switch off notifications", prompt: "The first concrete measure targets:", opts: ["push alerts that interrupt you", "the phone battery size", "the camera lens", "headphones only"], correct: 0 },
    { topic: "P5: Missing out", quote: "… wondering if I was <strong>missing out on anything</strong> …", focus: "missing out on anything", prompt: "This is closest to the idea of:", opts: ["FOMO: fear of missing something interesting online", "forgetting a password", "missing a bus", "losing a phone forever"], correct: 0 },
    { topic: "P5: Out of sight", quote: "‘<strong>Out of sight, out of mind</strong>,’ I thought …", focus: "Out of sight, out of mind", prompt: "The proverb is used to explain why moving the phone helps:", opts: ["if you don’t see it, you think about it less", "if you see it, you must break it", "if you work at night, you win", "if you are tired, you text faster"], correct: 0 },
    { topic: "P6: Benefits", quote: "… <strong>what are the benefits?</strong> …", focus: "what are the benefits?", prompt: "The rhetorical question introduces:", opts: ["a list of negative effects", "positive pay-offs the writer has noticed", "a new phone model", "a complaint about the editor"], correct: 1 },
    { topic: "P6: Can’t be bad", quote: "… <strong>Can’t be bad.</strong>", focus: "Can’t be bad", prompt: "The informal closing line “Can’t be bad” signals:", opts: ["total failure of the project", "a cautiously positive assessment of progress", "anger at the app store", "a legal guarantee"], correct: 1 }
  ];

  /** First 9 gap items — used by Tic-tac + gaps. */
  G.U3_TIC_TAC_POOL = G.U3_MILLIONAIRE_GAPS.slice(0, 9);

  /** 100 to 1 — six rounds, one per part. */
  G.U3_HUNDRED_ROUNDS = [
    {
      topic: "Part 1 &mdash; survey, family reaction",
      q: "What does Part 1 stress about the writer&rsquo;s phone habit and the people around him?",
      hint: "../text-01-digital-detox.html",
      board: [
        { t: "Ofcom survey: time on phone, checks every 12 minutes", pts: 100 },
        { t: "Tackle addiction / combat obsession; denial about concentration", pts: 80 },
        { t: "Wife&rsquo;s loud tutting; daughters rolling their eyes at memes", pts: 60 },
        { t: "Steven Rice as journalist / narrator of the steps", pts: 40 },
        { t: "Impact on <strong>work</strong> and focus", pts: 20 }
      ],
      decoys: [
        "2.5 hours on a treadmill, not the phone (wrong object)",
        "Steven Rice: a premium brand of long-grain rice (pun, wrong)",
        "Ofcom: the Office of Comedy &amp; memes (fake acronym)",
        "Daughters loved every meme; zero eye-rolls in the house (opposite of text)",
        "He only tutted at the Wi-Fi password being &lsquo;12345&rsquo; (silly, not the scene)",
        "He checked the fridge 12 times an hour, not the phone (wrong habit)",
        "Ofcom? Never heard of it &mdash; he got stats from a cereal box (nonsense)"
      ]
    },
    {
      topic: "Part 2 &mdash; use vs average",
      q: "What does Part 2 say about <strong>how much</strong> the writer used the phone and how we should view devices?",
      hint: "../text-02-digital-detox.html",
      board: [
        { t: "Over 40 pick-ups a day; 4+ hours online (still above average)", pts: 100 },
        { t: "Not demonising phones &mdash; they are indispensable", pts: 80 },
        { t: "Online and offline life closely intertwined", pts: 60 },
        { t: "Phone helps work, social life, tickets, even buying books", pts: 40 },
        { t: "No consolation: numbers still a cause for concern", pts: 20 }
      ],
      decoys: [
        "Nine pick-ups and 43 minutes (Part 6, not 2)",
        "Banned from the bedroom (Part 5)",
        "Out of sight, out of mind (slogan, Part 5)",
        "Switch off all notifications (Part 4)",
        "Demonise the kettle &mdash; it stole his 4G (silly, wrong theme)",
        "40% of his day spent arguing with predictive text (joke, not a quote)",
        "Charge the phone in the microwave &lsquo;for three seconds only&rsquo; (silly, do not do this)"
      ]
    },
    {
      topic: "Part 3 &mdash; anxiety, comparison, overload",
      q: "What negative effects and habits does Part 3 link to phones and social media?",
      hint: "../text-03-digital-detox.html",
      board: [
        { t: "A darker side: more anxious and depressed", pts: 100 },
        { t: "Young people: less confident; compare to peers / &ldquo;so-and-so&rdquo;", pts: 80 },
        { t: "Constantly bombarded with information", pts: 60 },
        { t: "Minds &ldquo;like butterflies&rdquo; &mdash; flitting between topics", pts: 40 },
        { t: "Harder to apply yourself to one task for long", pts: 20 }
      ],
      decoys: [
        "Doomscroll in the bath until you turn into a human prune (joke, not a quote)",
        "Reclaim your group chat at 3 a.m. and blame the algorithm (joke)",
        "Nine pick-ups (wrong part; that&rsquo;s Part 6)",
        "Ofcom 12-minute figure (Part 1, not 3)",
        "His butterfly mind is actually a paid VPN to procrastination (nonsense)",
        "Compare yourself to a toaster&rsquo;s follower count (silly, not the text)",
        "Bombarded with &lsquo;You have 12 months free anxiety&rsquo; (spam joke)"
      ]
    },
    {
      topic: "Part 4 &mdash; moderation, steps",
      q: "What strategy does Part 4 recommend for a healthier relationship with technology?",
      hint: "../text-04-digital-detox.html",
      board: [
        { t: "Learn moderation and good habits (not a &ldquo;total break-up&rdquo;)", pts: 100 },
        { t: "The phone isn&rsquo;t the problem &mdash; how you use it is", pts: 80 },
        { t: "Change can be daunting: prefer step-by-step, not all-at-once", pts: 60 },
        { t: "First step: switch off social media <strong>notifications</strong>", pts: 40 },
        { t: "Books in the unit did not advocate logging off for ever", pts: 20 }
      ],
      decoys: [
        "Move phone to the kitchen (Part 5)",
        "Two and a half hours (Part 1 statistic)",
        "Moderation: one notification every leap year (joke, not a quote)",
        "Step one: print every text on paper, then set fire to Wi-Fi (silly)",
        "His hot takes are so loud the neighbours mute their doorbell (joke, not a quote)",
        "125,000 on the money ladder (quiz UI &mdash; not from the text)",
        "Demonise good habits: hide your alarm clock in the sock drawer (nonsense)"
      ]
    },
    {
      topic: "Part 5 &mdash; rules at home",
      q: "What does Part 5 say about distraction, removing the phone, and sleep?",
      hint: "../text-05-digital-detox.html",
      board: [
        { t: "Phone on desk = distraction; FOMO / missing out on anything", pts: 100 },
        { t: "Secretly giving in to temptation to check the phone", pts: 80 },
        { t: "Out of sight, out of mind &rarr; moved to the <strong>kitchen</strong>", pts: 60 },
        { t: "Banned the device from the bedroom; no late-night screen time", pts: 40 },
        { t: "No early-morning scrolling; may nod off with a book", pts: 20 }
      ],
      decoys: [
        "Put the phone in the sock drawer; forget which pair (silly, not the text)",
        "Ofcom 12 minutes (Part 1)",
        "40 pick-ups a day (Part 2)",
        "40% battery left &mdash; still a seven-hour scroll &lsquo;just in case&rsquo; (joke)",
        "Out of site, out of mind (misspelt &lsquo;sight&rsquo; &mdash; not the proverb)",
        "Banned screens from the kitchen &mdash; only toast notifications allowed (pun)",
        "FOMO about missing a sale on screen wipes (silly, not a quote)"
      ]
    },
    {
      topic: "Part 6 &mdash; pay-offs",
      q: "What benefits and results does the writer list in Part 6?",
      hint: "../text-06-digital-detox.html",
      board: [
        { t: "Concentrate on your own life, not others&rsquo; online lives", pts: 100 },
        { t: "Imagination wanders more freely; ideas for articles more easily", pts: 80 },
        { t: "Assignments completed more quickly", pts: 60 },
        { t: "Example: 9 pick-ups, 43 minutes online &ldquo;yesterday&rdquo;", pts: 40 },
        { t: "Informal positive close: &ldquo;Can&rsquo;t be bad&rdquo;", pts: 20 }
      ],
      decoys: [
        "Loud tutting from wife (Part 1)",
        "Demonise phones (Part 2 wording)",
        "43 pick-ups, 9 minutes &mdash; numbers swapped (wrong on purpose)",
        "Ring light the size of a small moon; still bad selfies (joke, not a quote)",
        "He seeds every cloud backup with dad jokes in his Notes app (nonsense)",
        "Follower count of zero &mdash; he unfollows oxygen (joke, not a quote)",
        "Bought a second phone to supervise the first (silly, not a quote)"
      ]
    }
  ];

  /** Glass bridge: good/bad word pairs. */
  G.U3_GLASS_STEPS = [
    { text: "Part 1: the UK survey body named in the opening (Of&hellip;)", good: "Ofcom", bad: "Ofsted", source: "../text-01-digital-detox.html" },
    { text: "Part 1: the journalist&rsquo;s name (Steven __)", good: "Rice", bad: "Ross", source: "../text-01-digital-detox.html" },
    { text: "Part 2: you shouldn&rsquo;t &lsquo;demonise&rsquo; these devices: they are &lsquo;indispensable&rsquo; __", good: "items", bad: "inventions from Mars", source: "../text-02-digital-detox.html" },
    { text: "Part 2: he picked up the phone over __ times a day (number)", good: "forty", bad: "fourteen", source: "../text-02-digital-detox.html" },
    { text: "Part 3: we are &lsquo;constantly bombarded&rsquo; with __ (not &lsquo;silence&rsquo;)", good: "information", bad: "invitations", source: "../text-03-digital-detox.html" },
    { text: "Part 3: minds flit from one __ to another (like butterflies)", good: "subject", bad: "station", source: "../text-03-digital-detox.html" },
    { text: "Part 4: first step &mdash; switch off __ (alerts from apps)", good: "notifications", bad: "batteries", source: "../text-04-digital-detox.html" },
    { text: "Part 5: he moved the phone to the __ (room)", good: "kitchen", bad: "garden", source: "../text-05-digital-detox.html" },
    { text: "Part 6: &lsquo;yesterday&rsquo; &mdash; only __ pick-ups (single digit, text)", good: "nine", bad: "ninety", source: "../text-06-digital-detox.html" }
  ];

  G.U3_RED_GOOD = [
    "Ofcom (survey body, Part 1)",
    "two and a half hours a day (Part 1)",
    "combat his own obsession (Part 1)",
    "loud tutting at / rolling their eyes (Part 1)",
    "over forty times each day (Part 2)",
    "demonise phones / indispensable items (Part 2)",
    "less confident; compare to peers (Part 3)",
    "bombarded with information (Part 3)",
    "flitting from one subject to another (Part 3)",
    "learn moderation and good habits (Part 4)",
    "switch off notifications (Part 4)",
    "Out of sight, out of mind (Part 5)",
    "banned the device from my bedroom (Part 5)",
    "imagination wanders more freely (Part 6)",
    "Can’t be bad (Part 6)"
  ];
  G.U3_RED_BAD = [
    "Scroll until your eyes file for overtime pay (joke, not a quote)",
    "Wife tutting at the Wi-Fi router for bad taste in memes (silly object)",
    "2.5 days without blinking: the Ofcom secret method (nonsense)",
    "Banned the charger from the bedroom (reversed logic, not text)",
    "Demonise push notifications from your own brain (nonsense)",
    "Ofsted rates your screen time A+ for drama (nonsense)",
    "A blockchain in every notification dot (buzzword nonsense)",
    "Reclaim 50% of your scroll-time with a rubber band (silly tip, not text)",
    "Rice Krispies survey by Ofcom (mix-up brand)",
    "12 hours between each tap (invents Part 1)",
    "Banned the kitchen from the bedroom (reversed)",
    "Nine hundred pick-ups before breakfast in Part 1 (made up)",
    "His phone runs on decaf Wi-Fi only on Tuesdays (nonsense)",
    "Out of sight, out of SIM card (ruined proverb, not text)"
  ];

  G.U3_WEAKEST_LINK_POOL = [
    { t: "1", q: "Survey body: UK phone use is often discussed using data from:", o: ["NASA", "Ofcom", "FIFA", "NATO"], a: 1 },
    { t: "1", q: "How long on smartphones per day (average in the article)?", o: ["30 minutes", "2.5 hours", "6 hours", "9 hours"], a: 1 },
    { t: "1", q: "Phones checked about every (minutes):", o: ["3", "12", "30", "60"], a: 1 },
    { t: "2", q: "About how many times a day did he pick up the phone (before)?", o: ["10", "40", "200", "2"], a: 1 },
    { t: "2", q: "Rough online time per day mentioned with “more than”:", o: ["1 hour", "4 hours", "8 hours", "30 minutes"], a: 1 },
    { t: "3", q: "Social media can leave young people feeling:", o: ["less confident", "twice as tall", "richer", "invisible to Wi-Fi"], a: 0 },
    { t: "3", q: "We are “bombarded” mainly with:", o: ["information", "free pizza", "sleep", "pencils"], a: 0 },
    { t: "4", q: "First concrete step: turn off what for social apps?", o: ["notifications", "batteries", "fonts", "the sun"], a: 0 },
    { t: "4", q: "Books in the text did NOT call for a permanent:", o: ["holiday in Italy", "total break with technology (as a final, extreme answer)", "notification sound", "phone case"], a: 1 },
    { t: "5", q: "He moved the phone to the:", o: ["kitchen", "attic full of old charger boxes", "the moon (airplane mode)", "laundry basket under the bed"], a: 0 },
    { t: "5", q: "He banned the phone from the:", o: ["bedroom", "bookshop", "train station", "Ofcom report"], a: 0 },
    { t: "6", q: "“Yesterday” he had only __ minutes online in the good patch:", o: ["43", "430", "4.3", "0"], a: 0 },
    { t: "2", q: "Phrases: phones are “indispensable” but life online is __ with offline life.", o: ["closely intertwined", "unrelated", "illegal", "only on Tuesdays"], a: 0 },
    { t: "5", q: "Proverb used: out of ___, out of mind.", o: ["sight", "site", "signal", "scroll"], a: 0 },
    { t: "3", q: "What “hinders” long focus in the butterfly image?", o: ["flitting between topics", "reading one book for hours", "sleeping", "cooking"], a: 0 }
  ];
})(typeof globalThis !== "undefined" ? globalThis : this);
