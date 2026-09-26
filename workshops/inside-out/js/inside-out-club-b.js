/**
 * Inside Out · Speaking club layer · Lessons 6–10.
 */
(function (global) {
  var CLUB = (global.INSIDEOUT_CLUB = global.INSIDEOUT_CLUB || { beats: {}, stickers: {} });

  function q(kind, text, examples) {
    return { kind: kind, q: text, examples: examples || [] };
  }
  function drill(label, bank, task) {
    return { label: label, bank: bank, task: task };
  }
  function item(label, bank, models, say) {
    return { label: label, bank: bank, models: models, say: say };
  }
  function beat(o) {
    return {
      context: { tone: o.tone, meanings: o.meanings, examples: o.examples },
      lexRound: {
        title: "Lexis round · drill & games",
        mission: "Fast turns · say it out loud · then play the game.",
        drills: o.drills,
      },
      exampleRound: {
        title: "Example talk",
        mission: "Models first · then your own real micro-story with the phrase.",
        items: o.items,
      },
      speak: {
        mission: "Deep talk · 60–90 s per answer · steal tape phrases when they fit.",
        starters: o.starters,
        questions: o.questions,
      },
    };
  }

  /* ===================== LESSON 6 · CHORUS OF EMOTIONS ===================== */

  CLUB.beats["chorus-1-fear"] = beat({
    tone: "Fear · hypervigilance · a new neighbourhood",
    meanings: [
      "jumpy = nervous and easily frightened (jump at every sound).",
      "My nerves are shot (the workbook prints «shut») = I'm extremely stressed, I can't cope.",
      "missing = lost, not where it should be (the missing van · a missing person).",
    ],
    examples: [
      "JUMPY — I'm so jumpy · jumpy after a horror film · on edge",
      "I saw a really hairy guy. I'm so jumpy.",
      "NERVES — my nerves are shot · get on my nerves · a bundle of nerves · nerve-racking",
      "That exam was nerve-racking.",
      "He really gets on my nerves.",
      "MISSING — the missing van · go missing · something's missing",
    ],
    drills: [
      drill(
        "NERVES family",
        "my nerves are shot · get on my nerves · a bundle of nerves · nerve-racking · lose your nerve",
        "One sentence for each — about a real week in your life."
      ),
      drill(
        "GAME · Jump scare",
        "I'm so jumpy · on edge",
        "Eyes closed. The teacher makes random sounds. Whoever jumps first must tell a 20-s story about the last time they felt jumpy."
      ),
      drill(
        "DRILL · Stacking worries",
        "I'm so jumpy. My nerves are shot. All our stuff is in the missing van.",
        "Add one worry per breath, getting faster — then stop and breathe out."
      ),
    ],
    items: [
      item(
        "ON EDGE",
        "jumpy · my nerves are shot · nerve-racking",
        [
          "I was so jumpy walking home that night.",
          "After a month of deadlines my nerves were shot.",
          "The job interview was totally nerve-racking.",
        ],
        "Your turn (40 s): a time you were «on edge» for days. What was your body doing?"
      ),
    ],
    starters: [
      "My nerves were shot when…",
      "I get jumpy when…",
      "What really gets on my nerves is…",
    ],
    questions: [
      q("lexis", "«Get on my nerves» (annoyance) and «my nerves are shot» (exhaustion) — English connects stress to nerves like wires. How does your language describe stress?", [
        "Nerves like strings / wires.",
        "Some languages use the heart or the liver.",
        "Metaphors show where we feel it.",
      ]),
      q("personal", "When you're in a new place, the brain goes into «scan mode». How long does it take you to stop being jumpy somewhere new — and what helps?", [
        "A routine / a familiar café.",
        "Meeting one friendly person.",
        "Some people never fully relax.",
      ]),
      q("episode", "Fear is scared of a hairy man and a missing van — real problems and imagined ones mixed together. How do we tell real danger from anxiety?", [
        "Real danger: evidence, now.",
        "Anxiety: «what if», later.",
        "The body can't tell the difference.",
      ]),
    ],
  });

  CLUB.beats["chorus-2-disgust"] = beat({
    tone: "Disgust · refusing others' feelings · judgement",
    meanings: [
      "I don't want to hear about… = stop talking about it (dismissive).",
      "weird = strange, not normal.",
      "lying on a dirty floor. In a bag = sleeping bag on the floor — Disgust makes it sound horrible.",
    ],
    examples: [
      "I DON'T WANT TO HEAR ABOUT… — I don't want to hear about it · Spare me the details · TMI (too much information)",
      "I don't want to hear about nerves.",
      "Spare me the details!",
      "WEIRD — it's weird here · that's so weird · weirdly, I liked it",
      "Disgust - pizza is weird here.",
      "We could be lying on a dirty floor. In a bag.",
    ],
    drills: [
      drill(
        "STOP TALKING phrases",
        "I don't want to hear about it · Spare me the details · TMI · Can we change the subject?",
        "Rank them from polite to rude. Say when each one is OK."
      ),
      drill(
        "GAME · TMI or not?",
        "Spare me the details · I don't want to hear about …",
        "Players share an (invented) overshare. The group decides: TMI or fine? If TMI, they shout «Spare me the details!»"
      ),
      drill(
        "DRILL · Dramatic pause",
        "We could be lying on a dirty floor. … In a bag.",
        "Timing drill: the pause before «In a bag» makes it funny."
      ),
    ],
    items: [
      item(
        "SHUTTING DOWN FEELINGS",
        "I don't want to hear about it · change the subject",
        [
          "I told my dad I was scared, and he said: I don't want to hear about it.",
          "Can we change the subject? This is too much.",
          "Spare me the details — I'm eating.",
        ],
        "Your turn (40 s): a topic your family «didn't want to hear about». How did that shape you?"
      ),
    ],
    starters: [
      "In my family, nobody wanted to hear about…",
      "Honestly, it's weird here because…",
      "I change the subject when…",
    ],
    questions: [
      q("lexis", "«I don't want to hear about nerves» — Disgust shuts down Fear. What phrases do people use to shut down other people's emotions? Which have you used?", [
        "Stop being dramatic · It's not that deep.",
        "I don't want to hear it.",
        "We use them when we can't handle our own feelings.",
      ]),
      q("personal", "Some families talk about everything; others «don't do feelings». What was the unspoken topic in your home — and do you talk about it now?", [
        "Money / mental health / divorce.",
        "Men's feelings.",
        "I'm the first in my family to talk openly.",
      ]),
      q("episode", "Every emotion in the chorus complains — nobody listens to anybody. What happens in a group (family, team) where everyone talks and nobody hears?", [
        "Noise, not communication.",
        "The quiet ones give up.",
        "Someone has to be the listener first.",
      ]),
    ],
  });

  CLUB.beats["chorus-3-sadness"] = beat({
    tone: "Sadness · loneliness · friends far away",
    meanings: [
      "back home = in the place you come from (my friends are back home).",
      "homesick = sad because you are far from home.",
      "drift apart = slowly lose a close relationship.",
    ],
    examples: [
      "BACK HOME — back home we… · my friends are back home · when I'm back home",
      "My friends are back home.",
      "Back home, we'd have dinner at nine.",
      "HOMESICK — feel homesick · a wave of homesickness",
      "DRIFT APART — we drifted apart · grow apart · lose touch",
      "We lost touch after I moved.",
    ],
    drills: [
      drill(
        "DISTANCE words",
        "back home · homesick · drift apart · lose touch · keep in touch",
        "Tell the story of one friendship across a distance using four chunks."
      ),
      drill(
        "GAME · «Back home we…»",
        "Back home, we …",
        "Everyone imagines a place they left (city, school, job). Round: «Back home, we…» The group guesses the place."
      ),
      drill(
        "DRILL · Keep / lose touch",
        "keep in touch · stay in touch · lose touch · get back in touch",
        "Four sentences about four real people."
      ),
    ],
    items: [
      item(
        "FRIENDSHIPS ACROSS DISTANCE",
        "back home · drift apart · lose touch",
        [
          "All my friends are back home, and I feel invisible here.",
          "We drifted apart when she moved abroad.",
          "I got back in touch with an old friend last year.",
        ],
        "Your turn (40 s): a friendship distance changed. Did it survive? What kept it alive — or killed it?"
      ),
    ],
    starters: [
      "Back home, I used to…",
      "We drifted apart because…",
      "I feel homesick when…",
    ],
    questions: [
      q("lexis", "«Back home» — even after years abroad many people still say it. Where is «back home» for you? Can you have two homes?", [
        "Home is where my parents are.",
        "I have no «back home» anymore — I've moved too much.",
        "Home can be a language.",
      ]),
      q("personal", "Loneliness is not about how many people are around you. When did you feel most lonely in a crowd?", [
        "First weeks in a new city / job.",
        "At a party where I knew nobody.",
        "In a relationship that was ending.",
      ]),
      q("episode", "Riley's friends are moving on without her. Which hurts more: losing a friend, or seeing them be happy without you?", [
        "Seeing them happy = I'm replaceable.",
        "Both are grief.",
        "Healthy friends can miss you and live.",
      ]),
    ],
  });

  CLUB.beats["chorus-4-joy"] = beat({
    tone: "Joy · perspective · resilience talk",
    meanings: [
      "we've been through worse = we survived harder things (present perfect: life experience).",
      "it could be worse = comparing with a worse situation to feel better.",
      "go through (something) = experience something difficult.",
    ],
    examples: [
      "BEEN THROUGH — we've been through worse · she's been through a lot · go through a hard time",
      "Guys, we've been through worse.",
      "She's been through a lot this year.",
      "IT COULD BE WORSE — it could be worse · at least … · things could be a lot worse",
      "It could be worse — at least nobody got hurt.",
      "PERSPECTIVE — put things in perspective · in the grand scheme of things",
    ],
    drills: [
      drill(
        "PERSPECTIVE phrases",
        "we've been through worse · it could be worse · at least … · in the grand scheme of things",
        "Respond to three small disasters using a different phrase each time."
      ),
      drill(
        "GAME · «At least…» battle",
        "It could be worse — at least …",
        "A describes a disaster. B says «It could be worse — at least…». A makes it worse. B finds another «at least». Who gives up first?"
      ),
      drill(
        "DRILL · Present perfect of survival",
        "We've been through … · I've been through … · She's been through …",
        "Three sentences about real hard things you / your family survived."
      ),
    ],
    items: [
      item(
        "WE SURVIVED WORSE",
        "we've been through worse · it could be worse",
        [
          "We've been through worse — remember our first flat?",
          "It could be worse — at least we have each other.",
          "In the grand scheme of things, it's a small problem.",
        ],
        "Your turn (40 s): something your family or group «has been through» together. How does remembering it help now?"
      ),
    ],
    starters: [
      "We've been through worse — like the time…",
      "It could be worse: at least…",
      "In the grand scheme of things…",
    ],
    questions: [
      q("lexis", "«It could be worse» — comforting or dismissive? Compare: «It could be worse» vs «This is really hard — and we'll get through it.»", [
        "First = compare and move on.",
        "Second = feel it, then hope.",
        "Said to yourself it helps; said to others it can hurt.",
      ]),
      q("personal", "What's the hardest thing you have «been through» — and what did it teach you that nothing else could?", [
        "I learned who my real friends are.",
        "I learned I'm stronger than I thought.",
        "I'm still learning from it.",
      ]),
      q("episode", "Joy keeps the team going with optimism. Is a group better with one relentless optimist — or does that person stop others from being honest?", [
        "Optimists give energy.",
        "They can make others hide worries.",
        "Best teams have hope AND honesty.",
      ]),
    ],
  });

  CLUB.beats["chorus-5-anger"] = beat({
    tone: "Anger · failure · blaming everything",
    meanings: [
      "a bust = a failure, a disaster (informal: the party was a bust).",
      "stink = smell very bad; also: be very bad (this plan stinks).",
      "Anger generalises: house stinks, room stinks → EVERYTHING is bad.",
    ],
    examples: [
      "A BUST — the move has been a bust · the party was a total bust · go bust (company fails)",
      "This move has been a bust.",
      "The company went bust in 2020.",
      "STINK — my house stinks · this stinks (= unfair) · kick up a stink (complain loudly)",
      "My house stinks. My room stinks.",
      "She kicked up a stink at the airport.",
    ],
    drills: [
      drill(
        "FAILURE words",
        "a bust · a flop · a disaster · a letdown · go bust",
        "Review a terrible film / party / holiday in 30 s using three of them."
      ),
      drill(
        "GAME · Complaint crescendo",
        "My … stinks · this … has been a bust",
        "Circle: each person complains about something bigger than the last person (my coffee → my job → this city → this planet). Last one standing gets a round of applause."
      ),
      drill(
        "DRILL · Generalising",
        "My house stinks. My room stinks. → Everything stinks.",
        "Notice how anger goes from one thing to everything. Now say the fair version: «One thing went wrong.»"
      ),
    ],
    items: [
      item(
        "WHEN EVERYTHING STINKS",
        "a bust · stink · kick up a stink",
        [
          "Honestly, this whole year has been a bust.",
          "This stinks — it's not fair.",
          "I kicked up a stink at the hotel and got an upgrade.",
        ],
        "Your turn (40 s): a plan that was a total bust. Who or what did you blame — and was that fair?"
      ),
    ],
    starters: [
      "Honestly, … has been a bust because…",
      "This stinks, because…",
      "I once kicked up a stink when…",
    ],
    questions: [
      q("lexis", "Anger loves words like «everything», «always», «never», «total». Why do we overgeneralise when we're angry — and what does it do to arguments?", [
        "It makes us feel justified.",
        "The other person defends instead of listening.",
        "Specific complaints get solved; total ones don't.",
      ]),
      q("personal", "Have you ever decided a big life choice (move, job, course) was «a bust» too early? When did you realise it wasn't?", [
        "The first months were awful, then it clicked.",
        "Some choices really were a mistake.",
        "Judging too early is fear dressed as anger.",
      ]),
      q("episode", "Anger says the move is a bust after only a few days. How long should we give a big change before we judge it?", [
        "Psychologists say ~6–12 months for a move.",
        "The first weeks = shock, not truth.",
        "Keep a note of small good moments.",
      ]),
    ],
  });

  CLUB.stickers.s01e06 = [
    { phrase: "I saw a really hairy guy. I'm so jumpy. My nerves are shut.", use: "Three deadlines this week — my nerves are shot." },
    { phrase: "all of our stuff is in the missing van.", use: "All my stuff is in the missing suitcase." },
    { phrase: "I don't want to hear about nerves.", use: "Spare me the details — I don't want to hear about it." },
    { phrase: "We could be lying on a dirty floor. In a bag.", use: "We could be sleeping at the airport. On a bench." },
    { phrase: "my friends are back home.", use: "All my friends are back home." },
    { phrase: "Guys, we've been through worse.", use: "Relax — we've been through worse." },
    { phrase: "it could be worse.", use: "It could be worse — at least it's Friday." },
    { phrase: "this move has been a bust.", use: "Honestly, this diet has been a bust." },
  ];

  /* ===================== LESSON 7 · LET US HANDLE THIS ===================== */

  CLUB.beats["handle-fear"] = beat({
    tone: "Fear · avoidance · hiding from life",
    meanings: [
      "I say we… = I suggest we… (informal proposal).",
      "skip school = not go to school without permission (skip class · skip work · skip a meal).",
      "lock ourselves in = stay inside and don't let anyone in — avoidance.",
    ],
    examples: [
      "I SAY WE… — I say we order pizza · I say we leave now · I vote we…",
      "I say we skip school tomorrow and lock ourselves in the bedroom.",
      "SKIP — skip school · skip breakfast · skip the boring part · skip a class",
      "I used to skip PE all the time.",
      "AVOID — avoid someone · avoidance · bury your head in the sand",
      "Avoiding the problem only makes it bigger.",
    ],
    drills: [
      drill(
        "PROPOSING phrases",
        "I say we… · I vote we… · How about we… · Let's just…",
        "Your group has a free Saturday. Make four proposals with four different openers."
      ),
      drill(
        "GAME · Committee vote",
        "I say we … · I vote we …",
        "A problem card (an awkward party invite). Five players = five emotions each propose a plan with «I say we…». Group votes the plan they'd actually follow — and the worst one."
      ),
      drill(
        "DRILL · Avoid → face",
        "I say we skip … → I say we face it",
        "Transform three avoidance plans into brave plans."
      ),
    ],
    items: [
      item(
        "AVOIDANCE",
        "skip · lock yourself in · bury your head in the sand",
        [
          "I say we just skip the party.",
          "I buried my head in the sand about my debts for months.",
          "I locked myself in my room for a whole weekend.",
        ],
        "Your turn (40 s): something you avoided for too long. What finally made you face it?"
      ),
    ],
    starters: [
      "I say we…",
      "I used to skip … because…",
      "I buried my head in the sand when…",
    ],
    questions: [
      q("lexis", "«Bury your head in the sand», «lock yourself in», «skip it» — English has many avoidance images. Why is avoidance so tempting even when we know it makes things worse?", [
        "Short-term relief feels amazing.",
        "The brain pays for today, not next month.",
        "Avoidance grows fear, not courage.",
      ]),
      q("personal", "Did you ever skip school / work / a hard conversation because you were scared? What were you really scared of?", [
        "Being judged / laughed at.",
        "Failing in front of people.",
        "Someone specific.",
      ]),
      q("episode", "Fear's plan: hide in the bedroom. When a teenager starts hiding in their room, when is it normal privacy — and when is it a signal parents should notice?", [
        "Normal: they still eat, talk, see friends.",
        "Signal: sudden change, no friends, no joy.",
        "Ask gently, don't interrogate.",
      ]),
    ],
  });

  CLUB.beats["handle-disgust"] = beat({
    tone: "Disgust · appearance anxiety · being seen",
    meanings: [
      "clean clothes = washed clothes (we have no clean clothes — laundry crisis).",
      "I mean, … = let me explain / correct what I said.",
      "no one should see us = shame about appearance — fear of being judged.",
    ],
    examples: [
      "I MEAN… — I mean, no one should see us · I mean, it's not terrible, but…",
      "We have no clean clothes. I mean, no one should see us.",
      "APPEARANCE — look a mess · not fit to be seen · self-conscious about…",
      "I look a mess — I can't go out like this.",
      "I've always been self-conscious about my teeth.",
      "FIRST IMPRESSIONS — make a good first impression · you never get a second chance",
    ],
    drills: [
      drill(
        "SELF-CONSCIOUS words",
        "look a mess · self-conscious about · not fit to be seen · judge a book by its cover",
        "Describe getting ready for an important event using three chunks."
      ),
      drill(
        "GAME · The mirror",
        "I mean, … · no one should see us",
        "A stands «in front of a mirror» and complains Disgust-style about their look. B is the kind mirror and answers every complaint. Swap."
      ),
      drill(
        "DRILL · «I mean» corrections",
        "I mean, …",
        "Say something too strong, then soften it with «I mean…». Three rounds."
      ),
    ],
    items: [
      item(
        "BEING SEEN",
        "self-conscious · look a mess · first impression",
        [
          "I was so self-conscious on my first day at work.",
          "I look a mess — I can't go out like this.",
          "You never get a second chance to make a first impression.",
        ],
        "Your turn (40 s): a time you didn't go somewhere because of how you looked. Was the fear worth it?"
      ),
    ],
    starters: [
      "I've always been self-conscious about…",
      "I refused to go out once because…",
      "I mean, … — honestly, what I mean is…",
    ],
    questions: [
      q("lexis", "«No one should see us» — shame is the feeling of wanting to disappear. How is shame different from guilt? (Guilt: I did something bad. Shame: I AM bad.)", [
        "Guilt can motivate change.",
        "Shame makes us hide.",
        "Teenagers live in shame about appearance.",
      ]),
      q("personal", "Social media made appearance a 24/7 exam. How much does being seen «at your worst» still scare you — and has it changed with age?", [
        "Less with age — I care less.",
        "More — everything is filmed.",
        "Filters changed what «normal» looks like.",
      ]),
      q("episode", "Disgust's plan is about clean clothes, but her fear is about being judged at a new school. What are adults' «clean clothes» — the surface worries that hide deeper fears?", [
        "Perfect house before guests.",
        "The right car / the right bag.",
        "Deep fear: not being accepted.",
      ]),
    ],
  });

  CLUB.beats["handle-sadness"] = beat({
    tone: "Sadness · crying · emotional release",
    meanings: [
      "cry until we can't breathe = cry very hard (sob · weep · cry your eyes out).",
      "Yeah, we could… = agreeing and adding a suggestion (Sadness' «plan» is to feel).",
      "have a good cry = cry and feel better after.",
    ],
    examples: [
      "CRY — cry your eyes out · have a good cry · sob · burst into tears · well up",
      "Yeah, we could cry until we can't breathe.",
      "I just needed a good cry.",
      "She burst into tears in the meeting.",
      "I welled up at the end of the film.",
      "HOLD IT IN — hold back tears · keep it together · bottle it up",
    ],
    drills: [
      drill(
        "CRYING scale",
        "well up · tear up · cry · burst into tears · sob · cry your eyes out",
        "Put them in order from softest to strongest. Match each one to a film scene or life event."
      ),
      drill(
        "GAME · The film that broke me",
        "I welled up · I cried my eyes out · I burst into tears",
        "Everyone names a film / song / book that made them cry — and uses the right level on the crying scale. The group asks one question."
      ),
      drill(
        "DRILL · Bottle it up ↔ let it out",
        "bottle it up · keep it together · let it out · have a good cry",
        "Two sentences: one time you bottled it up, one time you let it out."
      ),
    ],
    items: [
      item(
        "A GOOD CRY",
        "have a good cry · burst into tears · bottle it up",
        [
          "I had a good cry and felt ten times better.",
          "I burst into tears at the airport.",
          "I bottled it up for years.",
        ],
        "Your turn (40 s): when did you last cry — and did you feel better or worse afterwards?"
      ),
    ],
    starters: [
      "The last film that made me well up was…",
      "I tend to bottle things up when…",
      "After a good cry I usually…",
    ],
    questions: [
      q("lexis", "English has «have a GOOD cry» — crying as something positive. Does your culture see crying as weakness or relief? Is it different for men and women?", [
        "Boys don't cry — the old rule.",
        "Crying in public is still taboo.",
        "Tears release stress hormones.",
      ]),
      q("personal", "Who taught you whether it was OK to cry? What did you hear as a child when you cried?", [
        "«Stop crying or I'll give you something to cry about.»",
        "«It's OK, let it out.»",
        "I learned to cry alone.",
      ]),
      q("episode", "Sadness' plan sounds extreme, but it's the only one that is honest about the feeling. Why is Sadness' «solution» the healthiest of the four?", [
        "It feels instead of fighting / hiding.",
        "Crying ends; avoidance doesn't.",
        "The film's message: let Sadness drive sometimes.",
      ]),
    ],
  });

  CLUB.beats["handle-anger"] = beat({
    tone: "Anger · rebellion · taboo words",
    meanings: [
      "lock the door = shut people out (control + protest).",
      "scream that curse word we know = shout a swear word (curse word = swear word, bad word).",
      "Anger's plan = release by breaking a rule.",
    ],
    examples: [
      "CURSE / SWEAR — a curse word · swear · swear at someone · watch your language · mind your language",
      "We should lock the door and scream that curse word we know.",
      "Watch your language, young lady!",
      "SCREAM — scream into a pillow · scream at the top of your lungs · scream your head off",
      "I screamed into a pillow after the call.",
      "SLAM — slam the door · storm off",
    ],
    drills: [
      drill(
        "ANGRY actions",
        "slam the door · storm off · scream into a pillow · swear at someone · lock the door",
        "Tell your teenage self's typical fight using three actions."
      ),
      drill(
        "GAME · Safe-scream alternatives",
        "Instead of screaming that curse word, I …",
        "Each player invents a funny «fake curse word» and when you'd use it. The group adopts the best one for the rest of the lesson."
      ),
      drill(
        "DRILL · Watch your language",
        "Watch your language · Mind your language · Language!",
        "One player «swears» with a silly fake word; others react with a parent line. Keep it fun."
      ),
    ],
    items: [
      item(
        "TEENAGE REBELLION",
        "slam the door · storm off · watch your language",
        [
          "At fourteen I slammed my door every single day.",
          "I stormed off in the middle of dinner.",
          "My mum always said: watch your language!",
        ],
        "Your turn (40 s): your most rebellious teenage moment. What were you really fighting for?"
      ),
    ],
    starters: [
      "When I was a teenager, I used to…",
      "The first time I swore in front of my parents…",
      "Screaming into a pillow helps when…",
    ],
    questions: [
      q("lexis", "Why does saying a forbidden word feel so powerful — especially for children? What do curse words give us that normal words can't?", [
        "Research: swearing can even reduce pain.",
        "They break a rule = feel control.",
        "They show emotion intensity fast.",
      ]),
      q("personal", "Anger's plan is rebellion. What rule did you break as a teenager to feel that you were your own person?", [
        "Coming home late / dyeing hair.",
        "Changing music, style, friends.",
        "I didn't rebel — I rebelled later.",
      ]),
      q("episode", "Look at all four plans: hide (Fear), disappear (Disgust), cry (Sadness), explode (Anger). Which one do you use most under stress — and which would you like to use more?", [
        "I'm a Fear: I avoid.",
        "I'm an Anger: I explode then regret.",
        "I'd like to be more Sadness: just feel it.",
      ]),
    ],
  });

  CLUB.stickers.s01e07 = [
    { phrase: "I say we skip school tomorrow and lock ourselves in the bedroom.", use: "I say we skip the meeting and hide in the kitchen." },
    { phrase: "We have no clean clothes. I mean, no one should see us.", use: "I look a mess — I mean, no one should see me." },
    { phrase: "Yeah, we could cry until we can't breathe.", use: "After that film I cried until I couldn't breathe." },
    { phrase: "We should lock the door and scream that curse word we know.", use: "I screamed into a pillow — much safer." },
  ];

  /* ===================== LESSON 8 · FIRST DAY AT SCHOOL ===================== */

  CLUB.beats["school-1-spelling"] = beat({
    tone: "Fear · performance anxiety · being put on the spot",
    meanings: [
      "Does anyone know how to…? = panicked request for help.",
      "be put on the spot = be forced to answer / perform in public without warning.",
      "go blank = suddenly forget everything.",
    ],
    examples: [
      "DOES ANYONE KNOW HOW TO…? — Does anyone know how to spell…? · Does anyone know what…?",
      "Does anyone know how to spell «meteor»?",
      "PUT ON THE SPOT — I hate being put on the spot · don't put me on the spot",
      "My mind went blank in the exam.",
      "STAGE FRIGHT — get stage fright · freeze · choke under pressure",
      "I froze when the teacher called my name.",
    ],
    drills: [
      drill(
        "PRESSURE phrases",
        "be put on the spot · go blank · freeze · choke under pressure · stage fright",
        "Tell a school / work memory with at least three."
      ),
      drill(
        "GAME · Spelling bee panic",
        "Does anyone know how to spell … ?",
        "Teacher picks hard words (Wednesday, necessary, rhythm). The chosen player spells aloud while the rest play inner Fear, whispering «Does anyone know…?!» Survive and win."
      ),
      drill(
        "DRILL · Hot seat, 10 seconds",
        "I'm on the spot · my mind went blank",
        "Random questions, 10 s to answer. If you freeze, you must say «My mind went blank!» — and try again."
      ),
    ],
    items: [
      item(
        "ON THE SPOT",
        "put on the spot · my mind went blank · freeze",
        [
          "The teacher put me on the spot and my mind went blank.",
          "I froze in the middle of my presentation.",
          "I always choke under pressure.",
        ],
        "Your turn (40 s): your worst «on the spot» moment. How do you feel about it now?"
      ),
    ],
    starters: [
      "I hate being put on the spot because…",
      "My mind went blank when…",
      "Under pressure I usually…",
    ],
    questions: [
      q("lexis", "«Go blank», «freeze», «choke» — the body stops working. What actually happens in the brain when we freeze under pressure?", [
        "Stress hormones block the thinking brain.",
        "Fight / flight / freeze.",
        "Breathing out slowly brings the brain back.",
      ]),
      q("personal", "Which school memory still makes you cringe? How much did one public moment shape your confidence?", [
        "Reading aloud / answering at the board.",
        "A teacher's comment I still remember.",
        "I became quiet for years.",
      ]),
      q("episode", "Fear panics about one word: «meteor». Why do small public tasks feel huge on the first day somewhere new?", [
        "Everyone is forming a first impression.",
        "One mistake = your «label».",
        "New places make us feel on stage.",
      ]),
    ],
  });

  CLUB.beats["school-2-fitting"] = beat({
    tone: "Disgust · belonging · the paradox of fitting in",
    meanings: [
      "stand out = be noticeable, different from others.",
      "blend in = look similar to others, not be noticed.",
      "Disgust wants both at once — the teenage paradox.",
      "infinity scarf = a circular scarf (fashion detail = social code).",
    ],
    examples: [
      "STAND OUT / BLEND IN — stand out from the crowd · blend in with the locals · fit in",
      "Make sure Riley stands out today and also blends in.",
      "I tried so hard to fit in at my new school.",
      "BE FRIENDS WITH — we want to be friends with them · make friends · the popular kids",
      "Yeah, we want to be friends with them.",
      "PEER PRESSURE — give in to peer pressure · follow the crowd",
    ],
    drills: [
      drill(
        "BELONGING verbs",
        "stand out · blend in · fit in · follow the crowd · be yourself",
        "Where in your life do you stand out, blend in, fit in? One sentence each."
      ),
      drill(
        "GAME · Stand out / blend in outfit",
        "stands out · blends in · infinity scarf · double ears pierced",
        "Design a «first-day outfit» for a new job, school, party. Explain which parts stand out and which blend in. Group rates it 1–10."
      ),
      drill(
        "DRILL · Contrast stress",
        "STANDS out today and also BLENDS in",
        "Stress the two opposite verbs. Then make your own paradox: «be relaxed but also perfect…»."
      ),
    ],
    items: [
      item(
        "THE FITTING-IN PARADOX",
        "stand out · blend in · fit in · be yourself",
        [
          "At fifteen I wanted to stand out and blend in at the same time.",
          "I dressed like everyone else just to fit in.",
          "Now I'm happy to stand out.",
        ],
        "Your turn (40 s): something you changed about yourself to fit in. Did you get it back later?"
      ),
    ],
    starters: [
      "At school I tried to fit in by…",
      "Now I'm happy to stand out because…",
      "I gave in to peer pressure once when…",
    ],
    questions: [
      q("lexis", "«Stand out AND blend in» sounds impossible, but it's what most of us want. Where in adult life do we still try to do both?", [
        "At work: be noticed but not «too much».",
        "On social media: unique but on trend.",
        "In a new country: myself but accepted.",
      ]),
      q("personal", "What did you give up (a hobby, a style, an accent) to fit in? What would your 13-year-old self say if they saw you now?", [
        "I stopped speaking my language in public.",
        "I hid what I really liked.",
        "Now I'm proud of it.",
      ]),
      q("episode", "Belonging is a basic human need, like food. Is conformity at school a weakness, or a smart survival strategy?", [
        "Survival: exclusion really hurts the brain.",
        "Weakness if you lose yourself completely.",
        "Find one group where you can be real.",
      ]),
    ],
  });

  CLUB.beats["school-3-pressure"] = beat({
    tone: "Social anxiety · feeling judged",
    meanings: [
      "whisper = speak very quietly.",
      "They're judging us = they think badly of us (maybe true, maybe imagined).",
      "the spotlight effect = we think people notice us far more than they do.",
    ],
    examples: [
      "WHISPER — whisper to someone · talk behind someone's back · gossip",
      "Cool kids whispering. They're judging us.",
      "JUDGE — judge someone · feel judged · be judgemental · don't judge",
      "I always feel judged at family dinners.",
      "SPOTLIGHT EFFECT — everyone's looking at me · nobody actually noticed",
      "I thought everyone saw me trip — nobody noticed.",
    ],
    drills: [
      drill(
        "JUDGEMENT words",
        "judge · feel judged · judgemental · talk behind someone's back · gossip",
        "Three sentences: when you feel judged, when you are judgemental, a time someone talked behind your back."
      ),
      drill(
        "GAME · Whisper evidence",
        "They're judging us · or are they?",
        "Two players whisper nonsense. A third must guess «what they're saying about me». Then the whisperers reveal the truth (usually boring!)."
      ),
      drill(
        "DRILL · Mind-reading check",
        "They're judging us. → Do I have evidence?",
        "Every paranoid line gets a calm evidence question. Practise the pair five times."
      ),
    ],
    items: [
      item(
        "THE SPOTLIGHT EFFECT",
        "feel judged · talk behind my back · nobody noticed",
        [
          "I was sure everyone was judging my accent.",
          "Later I found out nobody even noticed.",
          "I heard them talking behind my back.",
        ],
        "Your turn (40 s): a time you were sure people were judging you. Were they?"
      ),
    ],
    starters: [
      "I always feel judged when…",
      "I was sure everyone noticed… but…",
      "When I hear people whispering, I…",
    ],
    questions: [
      q("lexis", "«They're judging us» — mind-reading again. Psychology calls it the spotlight effect: we overestimate how much others notice us. Does knowing this help you?", [
        "A bit — everyone is busy thinking about themselves.",
        "Not really — the feeling is faster than logic.",
        "It helps after, not in the moment.",
      ]),
      q("personal", "Who are the «cool kids» in your adult life — the people whose opinion you still fear? Why do they have so much power?", [
        "Colleagues / in-laws / other parents.",
        "People who seem confident.",
        "Their approval = old school wounds.",
      ]),
      q("episode", "Is it worse to be judged — or to be ignored? What does Riley fear more on her first day?", [
        "Ignored = invisible, doesn't exist.",
        "Judged = at least seen.",
        "Both hurt the need to belong.",
      ]),
    ],
  });

  CLUB.beats["school-4-panic"] = beat({
    tone: "Panic · crying in public · losing control",
    meanings: [
      "Are you kidding me? = I can't believe this (shock, frustration).",
      "Out of the gate = right at the start (from horse racing).",
      "Pretend we can't speak English = a comic escape plan.",
      "we're crying at school = losing control in public — the teenage nightmare.",
    ],
    examples: [
      "ARE YOU KIDDING ME? — Are you kidding me? · You've got to be kidding · No way!",
      "Are you kidding me? Out of the gate.",
      "OUT OF THE GATE — right out of the gate · from the get-go · from day one",
      "Pretend we can't speak English.",
      "LOSE IT IN PUBLIC — break down in front of everyone · lose it · keep it together",
      "Oh no! We're crying at school.",
    ],
    drills: [
      drill(
        "START phrases",
        "out of the gate · from the get-go · from day one · right from the start",
        "Describe a job / relationship / course that went wrong «right out of the gate»."
      ),
      drill(
        "GAME · Escape plan",
        "Pretend we can't speak English · Are you kidding me?",
        "Awkward situation card (your ex walks in). Each player gives a ridiculous escape plan starting «Pretend we…». Best plan wins."
      ),
      drill(
        "DRILL · Shock ladder",
        "Really? → Are you kidding me? → You've got to be kidding!",
        "Rising disbelief — three levels of stress and pitch."
      ),
    ],
    items: [
      item(
        "LOSING IT IN PUBLIC",
        "break down · keep it together · out of the gate",
        [
          "I broke down in front of my whole team.",
          "I tried to keep it together, but I couldn't.",
          "Right out of the gate, the day went wrong.",
        ],
        "Your turn (40 s): a time you lost control in public — crying, laughing, anger. What happened next?"
      ),
    ],
    starters: [
      "Right out of the gate, …",
      "I tried to keep it together, but…",
      "My escape plan was to pretend…",
    ],
    questions: [
      q("lexis", "«Pretend we can't speak English» — fantasy escapes are funny, but they're real coping strategies. What escape fantasies do you have in awful moments?", [
        "Pretend I'm on the phone.",
        "Imagine I'm invisible.",
        "Leave to «go to the toilet».",
      ]),
      q("personal", "Crying at school / work: why is losing control in public so terrifying, even though everyone does it at some point? How did people react when it happened to you?", [
        "Fear of being «the girl who cried».",
        "People were kinder than I expected.",
        "Nobody said anything — that was worse.",
      ]),
      q("episode", "Riley's tears come from a happy memory turning sad. Why do the most painful moments often come from remembering something good?", [
        "Loss = the good thing is gone.",
        "Nostalgia hurts most in new places.",
        "Joy and sadness are connected, not opposites.",
      ]),
    ],
  });

  CLUB.stickers.s01e08 = [
    { phrase: 'Fear - Does anyone know how to spell "meteor"', use: "Does anyone know how to spell «necessary»?!" },
    { phrase: "Disgust:  make sure, Riley stands out today and also blends in.", use: "I want to stand out and also blend in — classic." },
    { phrase: "Yeah, we want to be friends with them.", use: "They look fun — we want to be friends with them." },
    { phrase: "Cool kids whispering. They're judging us.", use: "Two colleagues whispering — they're judging us!" },
    { phrase: "Fear - are you kidding me? Out of the gate. Pretend, we can't speak English.", use: "Are you kidding me? Right out of the gate!" },
    { phrase: "oh, no! we're crying at school.", use: "Oh no — I'm crying at work." },
  ];

  /* ===================== LESSON 9 · PARENTAL CONCERN ===================== */

  CLUB.beats["parent-1-observe"] = beat({
    tone: "Parents · noticing · subtle investigation",
    meanings: [
      "pick up on (something) = notice something that is not said directly.",
      "probe = ask questions to discover hidden information (probe into · a probing question).",
      "keep it subtle = do it in a way that isn't obvious.",
    ],
    examples: [
      "PICK UP ON — pick up on a mood · pick up on a hint · pick up on body language",
      "Did you guys pick up on that?",
      "PROBE — probe gently · a probing question · probe into someone's past",
      "Let's probe. But keep it subtle so she doesn't notice.",
      "SUBTLE — keep it subtle · a subtle hint · not very subtle! (ironic)",
      "Wow, that wasn't subtle at all.",
    ],
    drills: [
      drill(
        "NOTICING verbs",
        "pick up on · notice · sense · read the room · drop a hint",
        "Describe how you know a friend is upset without them telling you — four chunks."
      ),
      drill(
        "GAME · Subtle detective",
        "Let's probe · keep it subtle",
        "A has a secret (invented). B has 60 s to find it using only «subtle» questions. If A notices B is probing, A shouts «Not subtle!» and B loses."
      ),
      drill(
        "DRILL · Probe gently",
        "How was it? → What was the best / hardest part?",
        "Turn closed questions into probing open questions. Five rounds."
      ),
    ],
    items: [
      item(
        "READING PEOPLE",
        "pick up on · probe gently · keep it subtle",
        [
          "My mum picks up on everything — I can't hide anything.",
          "I probed gently, but he just said «fine».",
          "I dropped a subtle hint, and he totally missed it.",
        ],
        "Your turn (40 s): someone in your life who always picks up on your mood. How do they do it?"
      ),
    ],
    starters: [
      "My mum / friend always picks up on…",
      "When I want to find something out, I probe by…",
      "I tried to keep it subtle, but…",
    ],
    questions: [
      q("lexis", "«Probe» comes from medicine and space science. How does it feel to be «probed» by parents? Where is the line between caring and investigating?", [
        "Caring: open door, no pressure.",
        "Investigating: interrogation, reading diaries.",
        "Teens can feel the difference instantly.",
      ]),
      q("personal", "Are you good at «reading the room»? Did you learn to notice other people's moods because you had to — to stay safe or keep the peace?", [
        "Yes — tense home = super-sensitive radar.",
        "I pick up on everything and it's tiring.",
        "I miss obvious signals.",
      ]),
      q("episode", "The parents' emotions plan a secret operation instead of just asking Riley. Why is it so hard for parents to ask a teenager directly «Are you OK?»", [
        "Fear of the answer.",
        "Fear of the door slamming.",
        "They don't want to push her away.",
      ]),
    ],
  });

  CLUB.beats["parent-2-worry"] = beat({
    tone: "Worry · noticing change · the unfamiliar child",
    meanings: [
      "something is going on = something unusual / hidden is happening.",
      "definitely = certainly (adds conviction).",
      "She's never acted like this before = present perfect + never: a new, worrying pattern.",
    ],
    examples: [
      "SOMETHING IS GOING ON — something's going on · what's going on with you? · there's something going on between them",
      "Something is definitely going on.",
      "NEVER … BEFORE — She's never acted like this before · I've never seen him so angry",
      "She's never acted like this before.",
      "OUT OF CHARACTER — that's so out of character for her · not like her",
      "It's so not like him to be late.",
    ],
    drills: [
      drill(
        "CHANGE detectors",
        "something's going on · out of character · not like her · she's never … before",
        "Describe a friend who suddenly changed, using four chunks."
      ),
      drill(
        "GAME · Out of character",
        "That's so out of character for …",
        "One player acts totally unlike themselves (the quiet one is loud). The group comments using the chunks and guesses what «really» happened."
      ),
      drill(
        "DRILL · Never … before",
        "I've never … before · She's never … before",
        "Five true «never before» sentences about your last year."
      ),
    ],
    items: [
      item(
        "WHEN SOMEONE CHANGES",
        "out of character · something's going on · never … before",
        [
          "It was so out of character for her to cancel.",
          "Something was definitely going on at home.",
          "I've never seen him so quiet before.",
        ],
        "Your turn (40 s): someone close changed suddenly. Did you ask? What was really going on?"
      ),
    ],
    starters: [
      "It's so out of character for … to…",
      "I knew something was going on when…",
      "I've never … before, but last year…",
    ],
    questions: [
      q("lexis", "«She's never acted like this before» — but teenagers are supposed to change. How can parents tell normal teenage change from a real problem?", [
        "Normal: moodiness, privacy, new style.",
        "Warning: loss of sleep, friends, appetite.",
        "Trust the pattern, not one bad day.",
      ]),
      q("personal", "Have YOU changed so much that people said «that's not like you»? Was it growth — or a sign you were struggling?", [
        "Growth: I stopped people-pleasing.",
        "Struggle: I stopped answering calls.",
        "Sometimes both at once.",
      ]),
      q("episode", "Mom notices the change, but can't see inside Riley's head. What do you wish your parents had understood about you at 11–13?", [
        "That I was lonely, not rude.",
        "That I needed space AND them.",
        "That small things felt huge.",
      ]),
    ],
  });

  CLUB.beats["parent-3-support"] = beat({
    tone: "Teamwork · parenting as a couple · asking for backup",
    meanings: [
      "We'll need support = we need help / backup.",
      "signal (someone) = give a sign without words (signal the husband = give Dad a look).",
      "have someone's back · tag-team · back each other up.",
    ],
    examples: [
      "SUPPORT — we'll need support · emotional support · a support system",
      "We'll need support.",
      "SIGNAL — signal the husband · give someone a look · raise an eyebrow",
      "Signal the husband.",
      "BACKUP — back me up · have my back · I've got your back",
      "My sister always has my back.",
    ],
    drills: [
      drill(
        "SUPPORT phrases",
        "back me up · have my back · I've got your back · a support system · call for backup",
        "Who is in your support system? Describe them with three chunks."
      ),
      drill(
        "GAME · Secret signals",
        "Signal the husband · give someone a look",
        "Pairs invent a secret non-verbal signal (wink, touch the ear). During a role-play dinner they must signal each other without the «teenager» noticing."
      ),
      drill(
        "DRILL · Military voice",
        "We'll need support. Signal the husband.",
        "Say it like a mission commander — then like a tired mum. Funny contrast."
      ),
    ],
    items: [
      item(
        "YOUR SUPPORT SYSTEM",
        "have my back · back me up · a support system",
        [
          "My partner always backs me up with the kids.",
          "I gave him a look — the signal.",
          "My friends are my support system.",
        ],
        "Your turn (40 s): a time someone «had your back» when you needed it most."
      ),
    ],
    starters: [
      "The person who always has my back is…",
      "In my family, the secret signal was…",
      "My support system is…",
    ],
    questions: [
      q("lexis", "«Signal the husband» — families have secret languages: looks, coughs, eyebrows. What were the silent signals in your family, and what did they mean?", [
        "Mum's look = stop now.",
        "Dad's cough = change the topic.",
        "Kids learn to read them early.",
      ]),
      q("personal", "Asking for support is hard for many adults. What stops you from saying «I need help»?", [
        "Pride / I should cope alone.",
        "Fear of being a burden.",
        "Nobody helped before, so why ask.",
      ]),
      q("episode", "Parents often «team up» against a child in conflict. When is a united front good for kids — and when does it make them feel ganged up on?", [
        "Good: consistent rules = safety.",
        "Bad: two against one, no one listens.",
        "Best: united AND curious.",
      ]),
    ],
  });

  CLUB.stickers.s01e09 = [
    { phrase: "Mom: Did you guys pick up on that?", use: "Did you pick up on that? She's upset." },
    { phrase: "Something's wrong!", use: "Something's wrong — he hasn't texted all day." },
    { phrase: "Let's probe. But keep it subtle so she doesn't notice.", use: "Let's probe — but keep it subtle." },
    { phrase: "Something is definitely going on.", use: "Something is definitely going on between them." },
    { phrase: "She's never acted like this before.", use: "It's so out of character — he's never acted like this before." },
    { phrase: "Signal the husband.", use: "I gave my husband the signal — time to leave." },
  ];

  /* ===================== LESSON 10 · FAMILY TENSION ===================== */

  CLUB.beats["family-dad"] = beat({
    tone: "Not listening · mental absence · being half-present",
    meanings: [
      "no one was listening = everyone was distracted (in Dad's head the emotions are watching a game).",
      "Is it garbage night? = random, off-topic question — he's completely lost.",
      "zone out · be miles away · only half-listen.",
    ],
    examples: [
      "LISTEN — no one was listening · half-listen · tune out · zone out",
      "Sorry, no one was listening.",
      "MILES AWAY — Sorry, I was miles away · my mind was elsewhere",
      "Sorry, I was miles away — what did you say?",
      "OFF-TOPIC — Is it garbage night? · That's got nothing to do with it",
      "Is it garbage night?",
    ],
    drills: [
      drill(
        "NOT-LISTENING phrases",
        "zone out · tune out · miles away · half-listen · my mind was elsewhere",
        "Describe a meeting / lecture / family dinner where you zoned out."
      ),
      drill(
        "GAME · Garbage night",
        "Sorry, no one was listening · Is it garbage night?",
        "A tells a serious story. B is «Dad» and must answer with the most random off-topic question. A tries to get B to really listen."
      ),
      drill(
        "DRILL · Active listening repair",
        "Sorry, I was miles away. Can you say that again?",
        "Practise the repair phrase + a paraphrase: «So what you're saying is…»"
      ),
    ],
    items: [
      item(
        "HALF-PRESENT",
        "zone out · miles away · no one was listening",
        [
          "Sorry, I was miles away — say that again?",
          "I zone out when my brother talks about football.",
          "My dad was physically there, but mentally miles away.",
        ],
        "Your turn (40 s): someone who «isn't really listening» to you — or a time you weren't listening to someone who needed you."
      ),
    ],
    starters: [
      "I zone out when…",
      "Sorry, I was miles away — I was thinking about…",
      "I feel really listened to when…",
    ],
    questions: [
      q("lexis", "«Is it garbage night?» — a funny question that shows total disconnection. What phrases tell you instantly that someone isn't listening?", [
        "Mm-hmm · Yeah, yeah · Wait, what?",
        "They answer a different question.",
        "Eyes on the phone.",
      ]),
      q("personal", "Being physically present but mentally absent — phones, work, worries. Who in your life do you «half-listen» to? What might they be trying to tell you?", [
        "My parents on the phone.",
        "My partner at dinner.",
        "I'll try to put the phone away tonight.",
      ]),
      q("episode", "Dad's emotions are watching a hockey game while his daughter is falling apart. How common is this in families — and what does it teach children about being important?", [
        "Kids learn: my feelings are less interesting.",
        "They stop trying to talk.",
        "Ten minutes of real attention changes a lot.",
      ]),
    ],
  });

  CLUB.beats["family-mom"] = beat({
    tone: "Couple irritation · hidden anger · hyperbole",
    meanings: [
      "that stupid face = an annoying expression someone always makes.",
      "I could strangle him = hyperbole: I'm very annoyed (never literal).",
      "get on someone's nerves · drive someone up the wall · pet peeve.",
    ],
    examples: [
      "I COULD… (hyperbole) — I could strangle him · I could kill for a coffee · I could scream",
      "He's making that stupid face again. I could strangle him right now.",
      "DRIVE UP THE WALL — it drives me up the wall · he drives me crazy",
      "PET PEEVE — my biggest pet peeve is loud chewing",
      "AGAIN — he's doing it again · there he goes again",
      "There he goes again with that face.",
    ],
    drills: [
      drill(
        "IRRITATION idioms",
        "drive me up the wall · get on my nerves · pet peeve · I could scream · there he goes again",
        "Your top three pet peeves in 30 s — use three idioms."
      ),
      drill(
        "GAME · Pet peeve auction",
        "It drives me up the wall when … · I could strangle …",
        "Everyone writes a pet peeve. The group bids to «ban» the most annoying one from the world. Explain your bid with a tape phrase."
      ),
      drill(
        "DRILL · Hyperbole ladder",
        "I'm annoyed → It drives me crazy → I could strangle him",
        "Same situation, three levels of exaggeration."
      ),
    ],
    items: [
      item(
        "SMALL ANNOYANCES, BIG FEELINGS",
        "drives me up the wall · pet peeve · I could strangle",
        [
          "It drives me up the wall when he leaves cups everywhere.",
          "My biggest pet peeve is people talking in cinemas.",
          "I love her, but some days I could strangle her.",
        ],
        "Your turn (40 s): the tiny habit of someone you love that drives you crazy. What's really behind it?"
      ),
    ],
    starters: [
      "It drives me up the wall when…",
      "My biggest pet peeve is…",
      "I love … but sometimes I could…",
    ],
    questions: [
      q("lexis", "«I could strangle him» — violent hyperbole about people we love. Why do we exaggerate anger like this? Is it healthy venting or a small danger sign?", [
        "Venting: a safe way to show frustration.",
        "Everyone understands it's not literal.",
        "Danger only if contempt becomes constant.",
      ]),
      q("personal", "Psychologist John Gottman found eye-rolling and contempt are the strongest predictors of break-ups. What small irritations in your relationships could grow into contempt?", [
        "Being ignored.",
        "Never helping at home.",
        "Jokes that hurt.",
      ]),
      q("episode", "Mom is angry at Dad, not at Riley — but the whole dinner explodes. How does tension between parents spill onto children?", [
        "Kids feel the atmosphere before any words.",
        "The child becomes the lightning rod.",
        "Parents fight «about» the kid, but it's about them.",
      ]),
    ],
  });

  CLUB.beats["family-riley"] = beat({
    tone: "Riley · shutting down · «fine» as armour",
    meanings: [
      "School was great, all right? = a lie + a warning: stop asking (all right? = defensive).",
      "shut down / shut someone out = stop communicating.",
      "«Fine» / «great» as a wall — the classic teenage answer.",
    ],
    examples: [
      "ALL RIGHT? (defensive) — It was fine, all right? · I said I'm OK, all right?",
      "School was great, all right?",
      "SHUT DOWN / SHUT OUT — she shut down · he shut me out · close off",
      "When I'm hurt, I shut people out.",
      "THE «FINE» WALL — I'm fine · It's fine · Whatever",
      "«How are you?» — «Fine.» (not fine)",
    ],
    drills: [
      drill(
        "WALL phrases",
        "I'm fine · Whatever · It's nothing · Leave it · all right?",
        "Say each one twice: once honest, once as a wall. The group guesses which is which."
      ),
      drill(
        "GAME · Crack the «fine»",
        "School was great, all right?",
        "A plays a teenager who only says «fine / great». B has 90 s to get a real answer with good questions. Swap."
      ),
      drill(
        "DRILL · Defensive tag",
        "It was great, all right? · I'm fine, OK?",
        "Practise the rising, sharp tag. Then remove it and hear how the meaning softens."
      ),
    ],
    items: [
      item(
        "THE «FINE» WALL",
        "I'm fine · shut people out · all right?",
        [
          "I said I'm fine, all right?",
          "When I'm hurt, I shut everyone out.",
          "«Great» was my answer to everything at 14.",
        ],
        "Your turn (40 s): when did you last say «I'm fine» when you weren't? Who did you protect — them or you?"
      ),
    ],
    starters: [
      "When I say «I'm fine», I usually mean…",
      "I shut people out when…",
      "The question that actually gets me talking is…",
    ],
    questions: [
      q("lexis", "«I'm fine» is the most common lie in English. What does it really mean in different situations — and how can you tell?", [
        "Leave me alone.",
        "I don't trust you with this.",
        "I don't have the words yet.",
      ]),
      q("personal", "What questions make you shut down — and which questions make you open up? What would you want someone to ask you on a bad day?", [
        "«What's wrong?» → shut down.",
        "«Do you want company?» → open up.",
        "Doing something together helps more than talking.",
      ]),
      q("episode", "Riley lies because Joy is gone and Sadness isn't allowed. What does a child lose when «Are you happy?» is the only acceptable answer at home?", [
        "The chance to be helped.",
        "Trust that parents can handle truth.",
        "She learns to perform.",
      ]),
    ],
  });

  CLUB.beats["family-eyes"] = beat({
    tone: "Conflict · attitude · escalation starts",
    meanings: [
      "roll your eyes = show annoyance / contempt by moving your eyes upward.",
      "What's her deal? = what's her problem? (informal AmE).",
      "I do not like this new attitude = strong disapproval (do not = extra emphasis).",
      "Just leave me alone = I want space — or I'm hurt and pushing you away.",
    ],
    examples: [
      "ROLL YOUR EYES — she rolled her eyes at us · don't roll your eyes at me · an eye-roll",
      "Sir, she just rolled her eyes at us. What's her deal?",
      "WHAT'S … DEAL / PROBLEM? — What's her deal? · What's your problem? · What's up with him?",
      "Riley, I do not like this new attitude.",
      "LEAVE ME ALONE — Just leave me alone · Give me some space · I need a minute",
      "Just leave me alone.",
    ],
    drills: [
      drill(
        "CONFLICT openers",
        "What's your problem? · What's her deal? · Don't roll your eyes at me · I don't like this attitude",
        "Rank them from least to most aggressive. How would each make you feel as a teenager?"
      ),
      drill(
        "GAME · Rewind the fight",
        "What's your problem? → I can see you're upset. What happened?",
        "Two players act the eye-roll scene. The teacher shouts «Rewind!» — replay with calmer lines. Three rewinds until the fight doesn't happen."
      ),
      drill(
        "DRILL · Space request",
        "Just leave me alone. → I need a minute, please.",
        "Say the teenage line, then the adult version of the same need."
      ),
    ],
    items: [
      item(
        "THE EYE-ROLL MOMENT",
        "roll your eyes · What's your problem? · leave me alone",
        [
          "My son rolled his eyes and I lost it.",
          "«What's your problem?» — the worst question to ask an upset teen.",
          "I said «leave me alone», but I wanted a hug.",
        ],
        "Your turn (40 s): a family fight that started from something tiny — a look, a tone. How did it grow?"
      ),
    ],
    starters: [
      "When someone rolls their eyes at me, I…",
      "«Leave me alone» sometimes means…",
      "The fight started with…",
    ],
    questions: [
      q("lexis", "«What's your problem?» vs «What's wrong?» — both ask about a problem, but one attacks and one cares. How does one word change a whole conversation?", [
        "«Your problem» = you are the problem.",
        "«What's wrong» = something is wrong, not you.",
        "Kids hear the blame instantly.",
      ]),
      q("personal", "When you said «Just leave me alone» as a teen (or now), what did you actually need? Did anyone ever understand the real message?", [
        "I needed space and to be followed.",
        "I needed someone to stay calm.",
        "Nobody understood — they left.",
      ]),
      q("episode", "Dad reacts to the eye-roll, not to the sadness behind it. Why do adults react to children's behaviour instead of their feelings?", [
        "Behaviour is visible; feelings are hidden.",
        "Parents feel disrespected.",
        "Better: connect first, correct later.",
      ]),
    ],
  });

  CLUB.beats["family-escalation"] = beat({
    tone: "Escalation · punishment · denial of disaster",
    meanings: [
      "young lady = a strict / angry way to address a girl (young man for a boy).",
      "disrespectful attitude = rude behaviour to people you should respect.",
      "Go to your room = classic punishment; ends the talk.",
      "Good job, gentlemen = Dad's emotions congratulate themselves — irony, because it WAS a disaster.",
    ],
    examples: [
      "YOUNG LADY — Listen, young lady… · Don't you talk to me like that, young lady!",
      "Listen, young lady, I don't know where this disrespectful attitude came from.",
      "GO TO YOUR ROOM — That's it. Go to your room. Now. · You're grounded.",
      "That's it. Go to your room. Now.",
      "DISASTER — That could have been a disaster · Well, that was a disaster · a disaster waiting to happen",
      "Good job, gentlemen. That could have been a disaster.",
    ],
    drills: [
      drill(
        "PARENT punishment lines",
        "Listen, young lady · That's it · Go to your room · You're grounded · Don't talk to me like that",
        "Which of these did you hear as a child? Which will you (never) say?"
      ),
      drill(
        "GAME · Disaster or not a disaster?",
        "That could have been a disaster · Well, that was a disaster",
        "Players describe events from their week. The group decides: «That could have been a disaster» (saved) or «Well, that was a disaster» (not saved)."
      ),
      drill(
        "DRILL · Irony timing",
        "Good job, gentlemen. That could have been a disaster. … Well, that was a disaster.",
        "Say Dad's line proudly, pause, then Mom's dry answer. Timing = the joke."
      ),
    ],
    items: [
      item(
        "WHEN IT BLOWS UP",
        "That's it · Go to your room · a disaster",
        [
          "«That's it — go to your room!» — I heard that every week.",
          "Dinner with my in-laws was a disaster waiting to happen.",
          "Well, that was a disaster. Let's never do it again.",
        ],
        "Your turn (40 s): a family scene that was «a disaster». Could it have ended differently? What one sentence would have changed it?"
      ),
    ],
    starters: [
      "When I heard «Go to your room», I felt…",
      "The dinner was a disaster because…",
      "One sentence that could have saved it was…",
    ],
    questions: [
      q("episode", "«Good job, gentlemen» — Dad thinks he handled it well. Why do we so often think we «won» a fight that actually damaged a relationship?", [
        "We measure: I stayed in control.",
        "We don't see the hurt we caused.",
        "Winning an argument ≠ being understood.",
      ]),
      q("personal", "Sending a child to their room ends the fight but also ends the conversation. What did you learn from being sent away — and what do you do now when conflict happens?", [
        "That emotions = punishment.",
        "To go quiet and cold.",
        "Now I try to come back and talk after.",
      ]),
      q("lexis", "«Young lady», «young man» — polite words used as weapons. Why does formal language make scolding feel colder and more powerful?", [
        "Distance: you're not «sweetheart» now.",
        "It signals: I'm the authority.",
        "Every family has its «full name» voice.",
      ]),
    ],
  });

  CLUB.stickers.s01e10 = [
    { phrase: "She's looking at us. What did she say? Sorry, no one was listening.", use: "Sorry, I was miles away — what did you say?" },
    { phrase: "Is it garbage night?", use: "Serious talk… and he asks: is it garbage night?" },
    { phrase: "He's making that stupid face again. I could strangle him right now.", use: "There he goes again — I could strangle him." },
    { phrase: "School was great, all right?", use: "I said it was fine, all right?" },
    { phrase: "Sir, she just rolled her eyes at us. What's her deal?", use: "She rolled her eyes at me — what's her deal?" },
    { phrase: "Just leave me alone.", use: "Just leave me alone — I need a minute." },
    { phrase: "That's it. Go to your room. now.", use: "That's it — phone off, now." },
    { phrase: "Well, that was a disaster.", use: "Well, that dinner was a disaster." },
  ];
})(typeof window !== "undefined" ? window : globalThis);
