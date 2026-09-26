/**
 * Inside Out · Speaking club layer · Lessons 1–5.
 * Per beat: meaning & lexis · lexis round (drills + games) · example talk · deep discussion.
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
        mission: o.lexMission || "Fast turns · say it out loud · then play the game.",
        drills: o.drills,
      },
      exampleRound: {
        title: "Example talk",
        mission: "Models first · then your own real micro-story with the phrase.",
        items: o.items,
      },
      speak: {
        mission:
          o.mission ||
          "Deep talk · 60–90 s per answer · steal tape phrases when they fit.",
        starters: o.starters,
        questions: o.questions,
      },
    };
  }

  /* ===================== LESSON 1 · BASICS ===================== */

  CLUB.beats["joy-basics"] = beat({
    tone: "Joy · forced positivity vs real happiness",
    meanings: [
      "Isn't that great? = a question that is really a push: agree with me, feel good with me.",
      "Things couldn't be better = the best possible situation (couldn't + comparative = maximum).",
      "Both lines can be sincere… or a cover: toxic positivity = refusing to let any bad feeling in.",
    ],
    examples: [
      "ISN'T THAT GREAT? — Isn't that great? · Isn't it amazing? · Isn't that just perfect? (ironic)",
      "We're moving to a new city — isn't that great?",
      "COULDN'T BE + COMPARATIVE — couldn't be better · couldn't be worse · couldn't be happier · couldn't care less",
      "Honestly, things couldn't be better right now.",
      "I couldn't be happier for you.",
      "Great, the train's cancelled. Things couldn't be better. (sarcasm)",
    ],
    drills: [
      drill(
        "COULDN'T BE ___ER",
        "couldn't be better · couldn't be worse · couldn't be happier · couldn't care less",
        "Round the room: each person names a real part of their week + one «couldn't be ___» line. No repeats."
      ),
      drill(
        "GAME · Sincere or sarcastic?",
        "Isn't that great? · Things couldn't be better",
        "Say the line twice — once sincerely, once sarcastically. The group votes which one was real. Winner = most convincing sarcasm."
      ),
      drill(
        "DRILL · Intonation ladder",
        "Isn't that GREAT? · Things COULDN'T be better",
        "Whisper → normal → Joy on full volume. Keep the stress on GREAT and COULDN'T."
      ),
    ],
    items: [
      item(
        "FAKE vs REAL JOY",
        "Isn't that great? · Things couldn't be better",
        [
          "We got the flat! Isn't that great?",
          "My boss said I «handled it well». Isn't that great… I guess.",
          "Things couldn't be better — I mean it this time.",
        ],
        "Your turn (40 s): a moment when you said «everything's great» but it wasn't. What were you protecting?"
      ),
    ],
    starters: [
      "Honestly, things couldn't be better, except…",
      "I say «Isn't that great?» when I actually mean…",
      "My inner Joy is loudest when…",
    ],
    questions: [
      q("lexis", "«Things couldn't be better» — when is this sentence a celebration and when is it a wall? How does your voice give it away?", [
        "Celebration: open face, fast, light.",
        "Wall: flat voice, quick subject change.",
        "People who say it too often are often hiding the opposite.",
      ]),
      q("personal", "Toxic positivity: have you ever been told to «look on the bright side» when you needed someone to just stay with your pain? What did it do to you?", [
        "It made me feel my sadness was a mistake.",
        "I stopped telling that person real things.",
        "Sometimes it helped — it depends on timing.",
        "The best friends ask first: «Do you want advice or a hug?»",
      ]),
      q("episode", "Joy runs Headquarters. What happens to a child whose family only accepts Joy — who are they allowed to be?", [
        "The «happy girl» role becomes a job.",
        "Other emotions go underground and come out sideways.",
        "Kids learn to perform, not to feel.",
      ]),
    ],
  });

  CLUB.beats["anger-basics"] = beat({
    tone: "Anger · attitude, pride, protection",
    meanings: [
      "I'll show you… = a threat / challenge: you will see what I can do.",
      "attitude = a defiant, disrespectful way of behaving (have an attitude · give someone attitude · attitude problem).",
      "old man = rude / cheeky address (also slang for «dad»).",
    ],
    examples: [
      "I'LL SHOW YOU — I'll show you who's boss · I'll show them · I'll show you my attitude.",
      "You think I can't do it? I'll show you.",
      "ATTITUDE — give someone attitude · lose the attitude · she's got attitude (positive = confident) · an attitude problem",
      "Don't give me that attitude.",
      "She's got real attitude — I love it.",
      "Lose the attitude, young man.",
    ],
    drills: [
      drill(
        "ATTITUDE · good or bad?",
        "have attitude · give someone attitude · lose the attitude · attitude problem",
        "Sort: which uses are compliments, which are criticism? Then make one sentence for each."
      ),
      drill(
        "GAME · «I'll show you» challenge",
        "I'll show you · I'll show them",
        "Pairs: A doubts B («You'll never finish a marathon»). B answers «I'll show you…» + a real plan. Swap. Most believable plan wins."
      ),
      drill(
        "DRILL · Heat levels",
        "I'll show you my attitude, old man.",
        "Level 1 = teasing · Level 3 = teenager slamming a door · Level 5 = volcano. Same line, three temperatures."
      ),
    ],
    items: [
      item(
        "PROVING SOMEONE WRONG",
        "I'll show you · attitude",
        [
          "My teacher said I'd never speak English. I'll show her.",
          "At fifteen I gave my dad a lot of attitude.",
          "Don't give me that attitude — I'm trying to help.",
        ],
        "Your turn (40 s): someone doubted you — did anger help you «show them», or did it cost you something?"
      ),
    ],
    starters: [
      "I gave my parents a lot of attitude when…",
      "Part of me still wants to say «I'll show you» to…",
      "Anger protects me when…",
    ],
    questions: [
      q("lexis", "«She's got attitude» can be praise; «Don't give me attitude» is a warning. Why do we admire attitude in a stranger but punish it in our kids / partners?", [
        "Distance: from far away it looks like confidence.",
        "Up close it threatens our control.",
        "Culture: some places reward rebels, others obedience.",
      ]),
      q("personal", "Psychologists say anger is often a bodyguard for hurt or fear. Think of the last time you snapped — what was your anger guarding?", [
        "I felt disrespected / invisible.",
        "I was exhausted and nobody noticed.",
        "Underneath it was shame.",
        "It was guarding a boundary I hadn't said out loud.",
      ]),
      q("episode", "«Old man» — Anger talks back to the father. Is teenage attitude a sign of something going wrong, or of a healthy separation from parents?", [
        "It's how you test your own voice.",
        "Healthy if the relationship can survive it.",
        "Worrying if it hides something bigger (bullying, sadness).",
      ]),
    ],
  });

  CLUB.beats["disgust-basics"] = beat({
    tone: "Disgust · warning signs, taste, boundaries",
    meanings: [
      "Caution = be careful (a warning word from signs / labels).",
      "a dangerous smell = something that signals danger (bad food, gas, people you shouldn't trust — metaphorically).",
      "I'm gonna be sick = I'm going to vomit / this is revolting (also: I'm sick of = fed up with).",
    ],
    examples: [
      "CAUTION — caution, wet floor · proceed with caution · throw caution to the wind",
      "Caution, caution, there's a dangerous smell, people.",
      "I'd proceed with caution with that guy.",
      "BE SICK — I'm gonna be sick · it makes me sick · I'm sick of it · I feel sick (nervous)",
      "That video made me feel sick.",
      "I'm sick of pretending I'm fine.",
    ],
    drills: [
      drill(
        "SICK · four meanings",
        "be sick · feel sick · make me sick · be sick of",
        "One sentence for each meaning: vomit · nervous · angry/disgusted · fed up. Partner guesses which meaning."
      ),
      drill(
        "GAME · Red-flag radar",
        "Caution, caution · there's a dangerous smell",
        "Teacher reads a situation (a date checks your phone, a job with «we're a family»). Group shouts «Caution, caution!» and explains the smell."
      ),
      drill(
        "DRILL · Announcer voice",
        "Caution, caution, there's a dangerous smell, people.",
        "Say it like an airport announcer, then like a panicked friend, then like a snobby critic."
      ),
    ],
    items: [
      item(
        "MORAL DISGUST",
        "a dangerous smell · it makes me sick · proceed with caution",
        [
          "Something about that offer had a dangerous smell.",
          "The way he talks to waiters makes me sick.",
          "I'd proceed with caution — it's too good to be true.",
        ],
        "Your turn (40 s): a person / place / deal that «smelled» wrong from the start. Did you trust your disgust?"
      ),
    ],
    starters: [
      "My inner Disgust warned me when…",
      "It makes me sick when people…",
      "There was a dangerous smell about…",
    ],
    questions: [
      q("lexis", "We use «it makes me sick» for food AND for injustice. Why does the language of the stomach work so well for morality?", [
        "Disgust evolved to keep poison out — now it keeps «bad people» out.",
        "It's fast: you react before you think.",
        "Danger: it can turn into prejudice.",
      ]),
      q("personal", "Disgust is the emotion that protects our boundaries and our taste. Where in your life do you have strong «taste» — and where has it made you judgemental?", [
        "Food / clothes / music snobbery.",
        "I judge people's lifestyles too quickly.",
        "Healthy disgust: I walk away from manipulation.",
      ]),
      q("episode", "In the film Disgust keeps Riley from being «poisoned — physically and socially». How much of a teenager's life is ruled by fear of looking uncool?", [
        "Almost everything: clothes, food, music, friends.",
        "The social stomach is more sensitive than the real one.",
        "Adults do it too — just with better excuses.",
      ]),
    ],
  });

  CLUB.beats["fear-basics"] = beat({
    tone: "Fear · alarms, vigilance, anxiety",
    meanings: [
      "Look out! = a sudden warning: danger, be careful NOW (= Watch out!).",
      "Sharp turn = a sudden bend in the road — and a metaphor for a sudden change in life.",
      "Fear's job: scan for danger. Problem: the alarm can ring when there is no fire.",
    ],
    examples: [
      "LOOK OUT! / WATCH OUT! — Look out, a car! · Watch out for the step · look out for someone (protect them)",
      "Look out! Sharp turn.",
      "My older sister always looked out for me.",
      "A SHARP TURN — take a sharp turn · my life took a sharp turn · a sharp turn for the worse",
      "After the divorce, my life took a sharp turn.",
      "Things took a sharp turn for the worse.",
    ],
    drills: [
      drill(
        "LOOK OUT vs LOOK OUT FOR",
        "Look out! · look out for someone · watch out for",
        "Make one warning and one «protect» sentence about people you know."
      ),
      drill(
        "GAME · Sharp turn story chain",
        "my life took a sharp turn · a sharp turn for the worse / better",
        "Circle story: each person adds one sentence; every third person must throw in «And then — look out! — a sharp turn…»."
      ),
      drill(
        "DRILL · Panic speed",
        "Look out! Sharp turn.",
        "Say it slow and calm, then instant-panic. Notice: fear shortens sentences."
      ),
    ],
    items: [
      item(
        "LIFE'S SHARP TURNS",
        "take a sharp turn · look out for",
        [
          "My life took a sharp turn when I moved abroad.",
          "Nobody looked out for me at my first job.",
          "Look out — this conversation is about to take a sharp turn.",
        ],
        "Your turn (40 s): one sharp turn in your life. What did your inner Fear shout at the time — and was it right?"
      ),
    ],
    starters: [
      "My life took a sharp turn when…",
      "My inner Fear always shouts «Look out!» when…",
      "Someone who always looked out for me was…",
    ],
    questions: [
      q("lexis", "«Look out!» vs «Look out for someone». One is about danger, one is about love. Is protecting someone always a form of fear?", [
        "Parents' love and fear are often the same thing.",
        "Overprotection can stop people growing.",
        "Real care: warning, then letting go.",
      ]),
      q("personal", "Anxiety is a smoke alarm that goes off when you make toast. What is your «toast» — the safe thing your body treats like fire?", [
        "Phone calls / emails from the boss.",
        "Silence in a relationship.",
        "Speaking English in front of people.",
        "Being alone with my thoughts.",
      ]),
      q("episode", "Fear keeps Riley alive — but a life run by Fear is small. Where is the line between healthy caution and a life you never really live?", [
        "When fear decides for you before you even try.",
        "When you avoid more than you experience.",
        "Courage = fear + action, not no fear.",
      ]),
    ],
  });

  CLUB.beats["sadness-basics"] = beat({
    tone: "Sadness · catastrophic thoughts, loss, being heard",
    meanings: [
      "He doesn't love us anymore = a catastrophic conclusion from a small event (all-or-nothing thinking).",
      "not … anymore = something that used to be true has stopped.",
      "Sadness's hidden job: to signal «I need help» and bring people closer.",
    ],
    examples: [
      "NOT … ANYMORE — he doesn't love us anymore · we don't talk anymore · I don't do that anymore",
      "We don't really talk anymore.",
      "I don't believe in that anymore.",
      "CATASTROPHISING — One bad text → «He doesn't love me anymore.»",
      "She didn't reply → «Nobody likes me.»",
      "Talk someone down: «Hey, that's a big jump. What actually happened?»",
    ],
    drills: [
      drill(
        "NOT … ANYMORE · life changes",
        "I don't … anymore · we don't … anymore",
        "Three true sentences: a habit you stopped, a person you don't see anymore, a belief you dropped."
      ),
      drill(
        "GAME · Catastrophe court",
        "He doesn't love us anymore",
        "A gives a tiny event («He didn't say goodnight»). B jumps to Sadness' conclusion. C is the judge: «Evidence?» — and gives a kinder explanation."
      ),
      drill(
        "DRILL · Heavy voice",
        "He doesn't love us anymore.",
        "Say it flat and slow, then say the talk-down line: «That's a big jump — what actually happened?»"
      ),
    ],
    items: [
      item(
        "TALKING SOMEONE DOWN",
        "not … anymore · that's a big jump",
        [
          "She didn't call me back — she doesn't care anymore.",
          "Hey, that's a big jump. Maybe she's just busy.",
          "We don't hang out anymore, and I miss it.",
        ],
        "Your turn (40 s): a time your mind jumped to the worst conclusion. What really happened in the end?"
      ),
    ],
    starters: [
      "We don't … anymore, and honestly…",
      "When I'm sad, my brain tells me…",
      "What I need when I'm sad is…",
    ],
    questions: [
      q("lexis", "«He doesn't love us anymore» — one sentence, three thinking traps: mind-reading, all-or-nothing, forever. Can you find all three? Which one do you fall into most?", [
        "Mind-reading: I know what he feels.",
        "All-or-nothing: love → no love.",
        "Forever: «anymore» = it's over.",
      ]),
      q("personal", "The film's big idea: Sadness is not the enemy — it's how others know we need them. When did your sadness actually bring someone closer?", [
        "I cried and a friend finally opened up too.",
        "Asking for help changed a relationship.",
        "I hid it — and felt more alone.",
      ]),
      q("episode", "Why do adults so often try to «fix» a sad child instantly instead of letting them be sad? What does the child learn?", [
        "That sadness is dangerous or disappointing.",
        "Parents are scared of their own sadness.",
        "Better: «It makes sense you feel this way.»",
      ]),
    ],
  });

  CLUB.stickers.s01e01 = [
    { phrase: "Isn't that great?", use: "We got the flat — isn't that great?" },
    { phrase: "Things couldn't be better", use: "Honestly, things couldn't be better right now." },
    { phrase: "I'll show you my attitude, old man.", use: "You think I can't? I'll show you." },
    { phrase: "Caution, caution, there's a dangerous smell, people.", use: "That job offer? Caution, caution — dangerous smell." },
    { phrase: "I'm gonna be sick.", use: "Pineapple and fish? I'm gonna be sick." },
    { phrase: "Look out! Sharp turn.", use: "Look out — this chat is taking a sharp turn." },
    { phrase: "He doesn't love us anymore.", use: "One late text and my brain says «he doesn't love us anymore»." },
  ];

  /* ===================== LESSON 2 · MOVING TO SF ===================== */

  CLUB.beats["sf-joy"] = beat({
    tone: "Joy · minimising · «calm down» culture",
    meanings: [
      "overreact = react more strongly than the situation needs.",
      "Guys, you're overreacting = calming the group — or dismissing their feelings.",
      "Related: blow something out of proportion · make a big deal out of something.",
    ],
    examples: [
      "OVERREACT — you're overreacting · I think I overreacted · an overreaction",
      "Guys, you're overreacting.",
      "Sorry, I overreacted last night.",
      "BLOW OUT OF PROPORTION — don't blow it out of proportion · it got blown out of proportion",
      "MAKE A BIG DEAL — it's not a big deal · don't make a big deal out of it",
      "You're making a big deal out of nothing.",
    ],
    drills: [
      drill(
        "OVERREACT family",
        "overreact · overreaction · blow it out of proportion · make a big deal out of",
        "Transform: «You're overreacting» → say the same thing in two other ways."
      ),
      drill(
        "GAME · Overreaction theatre",
        "Guys, you're overreacting",
        "Card with a tiny problem (no milk, 2% battery). One player overreacts dramatically for 20 s; the group must calm them with «Guys, you're overreacting» + a reason."
      ),
      drill(
        "DRILL · Apology ladder",
        "I overreacted · I blew it out of proportion · I made a big deal out of it",
        "Apologise for a real overreaction using all three, from light to deep."
      ),
    ],
    items: [
      item(
        "WHO DECIDES «TOO MUCH»?",
        "you're overreacting · a big deal",
        [
          "Guys, you're overreacting — it's only a move.",
          "I know it's not a big deal to you, but it is to me.",
          "Maybe I overreacted, but I was scared.",
        ],
        "Your turn (40 s): someone told you «you're overreacting». Were they right — or did it just shut you up?"
      ),
    ],
    starters: [
      "I know it's not a big deal to you, but…",
      "Maybe I overreacted, but…",
      "When someone tells me I'm overreacting, I…",
    ],
    questions: [
      q("lexis", "«You're overreacting» is one of the most common phrases in arguments. Is it ever helpful — or is it always a way to win?", [
        "Helpful from a calm friend, with kindness.",
        "In a fight it means: your feelings don't count.",
        "Better: «Help me understand why this is big for you.»",
      ]),
      q("personal", "Who in your family was allowed to have big reactions — and who had to be the calm one? Which role did you get?", [
        "I was the peacemaker; my brother was the storm.",
        "Being calm became my identity.",
        "The calm one often carries the most inside.",
      ]),
      q("episode", "Joy tells the other emotions they're overreacting about the move. Is Joy helping — or refusing to see that moving house is a real loss?", [
        "Moving = losing friends, places, routines.",
        "Joy is scared of what happens if she lets Sadness in.",
        "Positivity can be a form of avoidance.",
      ]),
    ],
  });

  CLUB.beats["sf-anger"] = beat({
    tone: "Anger · impatience · road rage · control",
    meanings: [
      "Get out of the street = move, you're in the way (road rage).",
      "Move it! = hurry up / get out of the way (rude, impatient).",
      "Step on it = drive faster (press the accelerator) · also: hurry up.",
    ],
    examples: [
      "MOVE IT — Move it! · Come on, move it! · Move it or lose it.",
      "STEP ON IT — Step on it, we're late · step on the gas (AmE)",
      "Step on it, Daddy.",
      "Can you step on it? The film starts in ten minutes.",
      "ROAD RAGE — lose it in traffic · honk at someone · cut someone off",
      "He cut me off and I completely lost it.",
    ],
    drills: [
      drill(
        "IMPATIENCE bank",
        "Move it · Step on it · Come on! · cut someone off · lose it",
        "Describe your worst traffic / queue moment using 3 chunks."
      ),
      drill(
        "GAME · Back-seat driver",
        "Step on it · Move it · Get out of the street",
        "Chairs as a car. «Driver» narrates the road; back-seat Anger shouts tape lines. Swap roles every 30 s — the driver must stay calm."
      ),
      drill(
        "DRILL · Polite ↔ rude",
        "Move it. → Excuse me, could I get past?",
        "Say each Anger line, then the polite version. Discuss: when is rude actually OK?"
      ),
    ],
    items: [
      item(
        "LOSING IT IN TRAFFIC",
        "step on it · cut someone off · lose it",
        [
          "Someone cut me off and I completely lost it.",
          "Step on it — we're going to miss the flight!",
          "I become a different person behind the wheel.",
        ],
        "Your turn (40 s): when do you become «Anger at the control panel»? Traffic, queues, slow Wi-Fi?"
      ),
    ],
    starters: [
      "I completely lose it when…",
      "Behind the wheel I become…",
      "What really makes me impatient is…",
    ],
    questions: [
      q("lexis", "«Move it!» and «Step on it!» are short, commanding, no please. Why does anger make our language shorter and ruder?", [
        "Anger wants action, not conversation.",
        "Politeness needs time and calm — anger has neither.",
        "Short commands = a feeling of control.",
      ]),
      q("personal", "Why do calm, kind people turn into monsters in traffic or queues? What does road rage say about control and stress?", [
        "Anonymity: nobody sees your face.",
        "Lack of control over time.",
        "It's safe anger — the real target is elsewhere (job, family).",
      ]),
      q("episode", "The family is stuck in a car on the way to a new life. How do small everyday frustrations carry bigger feelings we can't name?", [
        "Anger at the traffic = fear about the future.",
        "Kids yell about the car, not about losing their friends.",
        "Adults do the same with dishes and bills.",
      ]),
    ],
  });

  CLUB.beats["sf-fear"] = beat({
    tone: "Fear · catastrophising · change anxiety",
    meanings: [
      "Can you die from…? = a comic, exaggerated fear question (hyperbole).",
      "catastrophise = imagine the worst possible outcome.",
      "Big life changes (moving, new job) are among the most stressful events for adults AND kids.",
    ],
    examples: [
      "CAN YOU DIE FROM…? — Can you die from moving? · Can you die from embarrassment?",
      "I nearly died of embarrassment.",
      "WORST-CASE — worst-case scenario · what if … ? · I'm freaking out",
      "Worst-case scenario, we come back.",
      "What if nobody likes me there?",
      "I'm freaking out about the new job.",
    ],
    drills: [
      drill(
        "WHAT IF → SO WHAT",
        "What if … ? · Worst-case scenario · So what if …",
        "A says a «What if…» fear. B answers: «Worst-case scenario, … — and then what?» Keep going three levels deep."
      ),
      drill(
        "GAME · Hypochondriac hotline",
        "Can you die from … ?",
        "Players call the «hotline» with silly fears (Can you die from Mondays?). The doctor answers seriously with a diagnosis and cure."
      ),
      drill(
        "DRILL · Die OF / die FROM",
        "die of embarrassment · die from moving (comic) · nearly died laughing",
        "Tell a 20-second story that ends with «I nearly died of embarrassment»."
      ),
    ],
    items: [
      item(
        "CHANGE ANXIETY",
        "What if … ? · worst-case scenario · freak out",
        [
          "Can you die from moving? Asking for a friend.",
          "I was freaking out before I moved abroad.",
          "Worst-case scenario, I'd hate it and come home.",
        ],
        "Your turn (40 s): the biggest move / change you made. What «what ifs» kept you awake?"
      ),
    ],
    starters: [
      "Before I moved / changed jobs, my biggest «what if» was…",
      "Worst-case scenario, …",
      "I nearly died of embarrassment when…",
    ],
    questions: [
      q("lexis", "«Worst-case scenario» — therapists use it on purpose: say the worst out loud and it often shrinks. Try it: what's your worst case for something you're avoiding?", [
        "Saying it makes it concrete — and survivable.",
        "Fear lives in vague pictures.",
        "Sometimes the worst case is actually fine.",
      ]),
      q("personal", "Moving house, country, school: which change in your life felt like «dying a little»? What part of you had to die for a new part to be born?", [
        "The old me who knew everyone.",
        "My language / my humour didn't travel.",
        "I became more independent — but lonelier.",
      ]),
      q("episode", "Fear's joke hides something real: for an 11-year-old, moving can feel like the end of the world. Should parents ask kids before a big move?", [
        "Kids can't decide, but they need a voice.",
        "Explaining «why» matters more than asking.",
        "Kids adapt — but not without grief.",
      ]),
    ],
  });

  CLUB.beats["sf-disgust"] = beat({
    tone: "Disgust · sarcasm · sensory overload",
    meanings: [
      "Why don't we just…? = sarcastic suggestion (I'm criticising the current plan).",
      "It smells like something died in here = extreme, funny exaggeration of a bad smell.",
      "smelly · it stinks · it reeks · musty — a scale of bad smells.",
    ],
    examples: [
      "WHY DON'T WE JUST…? — Why don't we just live in this smelly car? · Why don't we just give up, then?",
      "Why don't we just cancel Christmas while we're at it?",
      "SMELL SCALE — smells a bit off · musty · smelly · it stinks · it reeks",
      "It smells like something died in here.",
      "The fridge reeks.",
      "This plan stinks. (= it's bad)",
    ],
    drills: [
      drill(
        "SMELL SCALE",
        "a bit off · musty · smelly · stinks · reeks · something died in here",
        "Rank six places you know from «a bit off» to «something died in here»."
      ),
      drill(
        "GAME · Sarcastic «Why don't we just…»",
        "Why don't we just … ?",
        "Teacher gives a bad plan (holiday in the rain, 6 am meeting). Everyone replies with the most sarcastic «Why don't we just…?» — group picks the funniest."
      ),
      drill(
        "DRILL · Eye-roll delivery",
        "Why don't we just live in this smelly car?",
        "Deliver with a sigh, an eye-roll, a pause before «smelly». Sarcasm lives in the timing."
      ),
    ],
    items: [
      item(
        "SARCASM AS ARMOUR",
        "Why don't we just … ? · it stinks",
        [
          "Oh, great plan. Why don't we just live in the car?",
          "It smells like something died in here — open a window!",
          "Honestly, this whole plan stinks.",
        ],
        "Your turn (40 s): when do you use sarcasm instead of saying what you really feel? Give one example."
      ),
    ],
    starters: [
      "I use sarcasm when…",
      "The worst smell I remember is…",
      "Why don't we just… — that's what I say when…",
    ],
    questions: [
      q("lexis", "«Why don't we just live in the car?» is not a suggestion — it's a complaint in disguise. Why is sarcasm so attractive to teenagers (and many adults)?", [
        "It's safer than direct criticism.",
        "It makes you look clever, not hurt.",
        "It can destroy trust if it's constant.",
      ]),
      q("personal", "Smells trigger memories faster than anything else. Which smell takes you straight back to a place or a person — and what feeling comes with it?", [
        "My grandmother's kitchen.",
        "School corridors → anxiety.",
        "A perfume from an ex.",
      ]),
      q("episode", "Disgust complains about the car, but really she's rejecting the whole new life. How do we reject change by complaining about small, safe things?", [
        "It's easier to hate the smell than the situation.",
        "Complaints are a way to feel some control.",
        "Parents should listen to the complaint under the complaint.",
      ]),
    ],
  });

  CLUB.stickers.s01e02 = [
    { phrase: "Guys, you're overreacting", use: "Guys, you're overreacting — it's only Monday." },
    { phrase: "Get out of the street;", use: "Get out of the street! — me on a bike in the city." },
    { phrase: "Move it.", use: "Move it — the shop closes in five minutes." },
    { phrase: "Step on it, Daddy.", use: "Step on it, we'll miss the flight!" },
    { phrase: "Can you die from moving?", use: "Can you die from moving? Asking for a friend." },
    { phrase: "Why don't we just live in this smelly car?", use: "Why don't we just cancel the whole holiday, then?" },
    { phrase: "It smells like something died in here", use: "Open a window — it smells like something died in here." },
  ];

  /* ===================== LESSON 3 · NEW HOUSE ===================== */

  CLUB.beats["house-joy"] = beat({
    tone: "Joy · reframing · making the best of it",
    meanings: [
      "It's nothing … couldn't fix = a small problem that X can easily solve.",
      "I read somewhere that… = soft way to share an idea without claiming expertise.",
      "an empty room is an opportunity = reframing: seeing a problem as a chance.",
    ],
    examples: [
      "IT'S NOTHING … COULDN'T FIX — It's nothing a good night's sleep couldn't fix · nothing a coffee couldn't fix",
      "It's nothing our butterfly curtains couldn't fix.",
      "I READ SOMEWHERE THAT… — I read somewhere that we use only… · I heard somewhere that…",
      "I read somewhere that an empty room is an opportunity.",
      "REFRAME — look at it another way · make the best of it · a blessing in disguise",
      "Losing that job was a blessing in disguise.",
    ],
    drills: [
      drill(
        "«NOTHING … COULDN'T FIX»",
        "It's nothing a … couldn't fix",
        "Round: each person names a problem; the next fixes it: «It's nothing a pizza / a nap / a hug couldn't fix.»"
      ),
      drill(
        "GAME · Reframe relay",
        "an empty room is an opportunity · a blessing in disguise · make the best of it",
        "Teacher calls out a disaster. First player reframes it Joy-style in 10 s. If they hesitate, they're out. Last Joy standing wins."
      ),
      drill(
        "DRILL · «I read somewhere…»",
        "I read somewhere that…",
        "Share a real or invented fact starting «I read somewhere that…». Group guesses: true or made up?"
      ),
    ],
    items: [
      item(
        "EMPTY ROOM, NEW START",
        "an empty room is an opportunity · a blessing in disguise",
        [
          "My first flat was empty — it felt like an opportunity.",
          "Honestly, the breakup was a blessing in disguise.",
          "It's nothing a bit of paint couldn't fix.",
        ],
        "Your turn (40 s): an «empty room» in your life — a gap, a loss — that turned into an opportunity."
      ),
    ],
    starters: [
      "It's nothing a … couldn't fix.",
      "Looking back, it was a blessing in disguise because…",
      "I read somewhere that…",
    ],
    questions: [
      q("lexis", "«An empty room is an opportunity» — reframing is a real therapy tool. When does reframing heal, and when does it deny the pain?", [
        "Heals: after you've felt the loss.",
        "Denies: when it's used to skip the feeling.",
        "Timing is everything.",
      ]),
      q("personal", "Tell us about the emptiest period of your life. Did it become an opportunity — or is it still just empty?", [
        "After school / after a breakup / after moving.",
        "I filled it too fast with work.",
        "Emptiness taught me what I actually want.",
      ]),
      q("episode", "Joy tries to decorate the problem with butterfly curtains. What «butterfly curtains» do adults use to cover real problems?", [
        "Shopping, holidays, a new phone.",
        "Being busy all the time.",
        "Instagram versions of life.",
      ]),
    ],
  });

  CLUB.beats["house-anger"] = beat({
    tone: "Anger · feeling trapped · need for release",
    meanings: [
      "Get off me! = don't touch me / leave me alone (physical or emotional).",
      "Get out the rubber ball = bring out the stress ball / something to release energy.",
      "solitary confinement = prison punishment of being alone in a cell — here: I feel trapped and isolated.",
    ],
    examples: [
      "GET OFF ME — Get off me! · get off my back (stop criticising) · get off my case",
      "Get off my back — I'm doing it!",
      "SOLITARY CONFINEMENT — feel like solitary confinement · cabin fever · go stir-crazy",
      "Working from home in winter felt like solitary confinement.",
      "I was going stir-crazy after a week indoors.",
      "BLOW OFF STEAM — go for a run to blow off steam · let off steam",
    ],
    drills: [
      drill(
        "TRAPPED words",
        "solitary confinement · cabin fever · go stir-crazy · climb the walls",
        "Describe lockdown / a long winter / an exam season with at least two of these."
      ),
      drill(
        "GAME · Rubber ball",
        "Get off me! · blow off steam · get off my back",
        "Throw a real (soft) ball. Whoever catches it has 15 s to rant about a real annoyance using a tape phrase, then throws it on."
      ),
      drill(
        "DRILL · Get off …",
        "Get off me · get off my back · get off my case · get off the phone",
        "Four quick sentences — one per chunk — addressed to a family member."
      ),
    ],
    items: [
      item(
        "WHEN YOU FEEL TRAPPED",
        "solitary confinement · stir-crazy · blow off steam",
        [
          "My room felt like solitary confinement.",
          "I was going stir-crazy, so I went for a run to blow off steam.",
          "Get off my back — I need five minutes.",
        ],
        "Your turn (40 s): where / when did you feel trapped? What was your «rubber ball» — the thing that saved you?"
      ),
    ],
    starters: [
      "I felt like I was in solitary confinement when…",
      "My way to blow off steam is…",
      "Get off my back — that's what I wanted to say when…",
    ],
    questions: [
      q("lexis", "We borrow prison words — solitary confinement, trapped, stuck — for rooms, jobs and relationships. What does that say about how we experience lack of freedom?", [
        "Freedom is more about choice than space.",
        "A job can feel like a cell.",
        "The language makes the feeling bigger — or finally visible.",
      ]),
      q("personal", "Anger needs a body outlet — a ball, a run, a scream into a pillow. What happens to anger that has nowhere to go? Where does yours go?", [
        "It turns into headaches / tension.",
        "It comes out at the wrong person.",
        "It becomes silence and coldness.",
        "Sport / music / cleaning like crazy.",
      ]),
      q("episode", "A tiny room, no furniture, no friends: Riley's world shrinks. How does physical space affect our mood — and our relationships?", [
        "Small space + stress = more fights.",
        "Your own room = your own identity.",
        "Some people need space to breathe; others need company.",
      ]),
    ],
  });

  CLUB.beats["house-fear"] = beat({
    tone: "Fear · panic · spiralling questions",
    meanings: [
      "What are we gonna do? = panic question: we have no plan.",
      "get rabies = catch a dangerous disease (from animals) — comic exaggeration.",
      "Fear spirals: one question → worst-case → panic.",
    ],
    examples: [
      "WHAT ARE WE GONNA DO? — What are we gonna do? · What am I supposed to do? · Now what?",
      "What are we gonna do? We are going to get rabies.",
      "SPIRAL — spiral out of control · go down a rabbit hole · my mind was racing",
      "I Googled my symptoms and went down a rabbit hole.",
      "My mind was racing all night.",
      "CALM DOWN — take a deep breath · one thing at a time · let's not panic",
    ],
    drills: [
      drill(
        "PANIC ↔ CALM",
        "What are we gonna do? ↔ One thing at a time · Let's not panic",
        "Pairs: A panics with Fear's line, B calms with two calm chunks. Swap."
      ),
      drill(
        "GAME · Google rabbit hole",
        "went down a rabbit hole · my mind was racing · get (a disease)",
        "Start with a harmless symptom (a headache). Each player adds a scarier Google result until it's rabies. Then someone must bring it back to reality."
      ),
      drill(
        "DRILL · Breath control",
        "What are we gonna do? We are going to get rabies.",
        "Say it on one breath (panic), then slowly with pauses (calm). Feel the difference."
      ),
    ],
    items: [
      item(
        "HEALTH ANXIETY",
        "go down a rabbit hole · my mind was racing · let's not panic",
        [
          "I saw a mouse and immediately thought: rabies.",
          "I went down a rabbit hole on medical websites.",
          "Let's not panic — one thing at a time.",
        ],
        "Your turn (40 s): your most ridiculous «what if» fear in a new place (flat, hotel, country)."
      ),
    ],
    starters: [
      "My mind was racing because…",
      "I once went down a rabbit hole about…",
      "When I panic, the thing that calms me is…",
    ],
    questions: [
      q("lexis", "«What are we gonna do?» — a question with no answer, just panic. What is the difference between a panic question and a problem-solving question?", [
        "Panic: What are we gonna do?!",
        "Problem-solving: What's the first small step?",
        "Changing the question changes the feeling.",
      ]),
      q("personal", "Night-time thinking: why do fears grow bigger at 3 a.m.? What's your 3 a.m. thought, and how does it look in the morning?", [
        "Tiredness removes our logic.",
        "No distractions — only thoughts.",
        "In the morning it's often boring.",
      ]),
      q("episode", "A dead mouse, a dark house, no furniture: the new home looks dangerous. How do first impressions of a place shape the whole experience?", [
        "First night = the story you tell forever.",
        "Kids take cues from parents' faces.",
        "Places change when people fill them.",
      ]),
    ],
  });

  CLUB.beats["house-disgust"] = beat({
    tone: "Disgust · dark humour · envy",
    meanings: [
      "I'm starting to envy the dead mouse = dark humour: it's so bad here that being dead looks better.",
      "envy = want what someone else has (envy someone · be envious of · green with envy).",
      "Black / dark humour helps people cope with awful situations.",
    ],
    examples: [
      "ENVY — I envy you · I'm starting to envy… · green with envy · the envy of all my friends",
      "I'm starting to envy the dead mouse.",
      "Honestly, I envy people who can sleep on planes.",
      "DARK HUMOUR — laugh so you don't cry · gallows humour · it's so bad it's funny",
      "We laughed so we didn't cry.",
      "It was so bad it was almost funny.",
    ],
    drills: [
      drill(
        "ENVY vs JEALOUSY",
        "envy (want what they have) · jealous (afraid to lose what you have)",
        "Two sentences each. Then argue: which is more dangerous in a friendship?"
      ),
      drill(
        "GAME · Worst-day auction",
        "I'm starting to envy the …",
        "Each player describes a terrible day and ends: «I'm starting to envy the ___.» (the pigeon, my cat, the dead mouse). Group bids on the funniest."
      ),
      drill(
        "DRILL · Deadpan",
        "I'm starting to envy the dead mouse.",
        "Say it completely flat, no smile. Dark humour works when your face doesn't move."
      ),
    ],
    items: [
      item(
        "LAUGH SO YOU DON'T CRY",
        "dark humour · I'm starting to envy · so bad it's funny",
        [
          "After the third delay, I started to envy the luggage.",
          "We laughed so we didn't cry.",
          "The flat was so bad it was almost funny.",
        ],
        "Your turn (40 s): a situation so bad that you could only laugh. Who laughed with you?"
      ),
    ],
    starters: [
      "Honestly, I envy people who…",
      "It was so bad that I started to envy…",
      "We laughed so we didn't cry when…",
    ],
    questions: [
      q("lexis", "Envy is one of the «deadly sins», yet we say «I envy you!» as a compliment. When is envy harmless, and when does it poison friendships?", [
        "Compliment envy: I'd love that too.",
        "Poison: I want you NOT to have it.",
        "Social media makes envy constant.",
      ]),
      q("personal", "Who or what do you secretly envy right now? What does that envy tell you about what you actually want?", [
        "Envy is a map of our hidden wishes.",
        "I envy people who don't care what others think.",
        "I envy free time more than money.",
      ]),
      q("episode", "Dark humour in an 11-year-old's head! Is dark humour a healthy coping strategy or a warning sign that someone is struggling?", [
        "Healthy: it creates distance from pain.",
        "Warning: when all jokes are about disappearing.",
        "Listen to the pattern, not one joke.",
      ]),
    ],
  });

  CLUB.beats["house-sadness"] = beat({
    tone: "Sadness · belonging · home",
    meanings: [
      "Riley can't live here = this place can never be home (a feeling, not a fact).",
      "home vs house: a house is a building; home is a feeling of belonging.",
      "feel at home · feel out of place · settle in.",
    ],
    examples: [
      "CAN'T LIVE HERE — I can't live like this · I can't live without…",
      "Riley can't live here.",
      "HOME vs HOUSE — feel at home · make yourself at home · it doesn't feel like home yet",
      "It took me a year to feel at home.",
      "SETTLE IN — settle in · settle down · find your feet",
      "I'm still finding my feet here.",
    ],
    drills: [
      drill(
        "BELONGING words",
        "feel at home · feel out of place · settle in · find your feet · homesick",
        "Timeline: describe your first week / month / year somewhere new with one chunk each."
      ),
      drill(
        "GAME · Estate agent vs Sadness",
        "Riley can't live here · it doesn't feel like home",
        "One player is a super-positive estate agent selling a terrible flat. Sadness answers every «feature» with a tape line. Can the agent win Sadness over?"
      ),
      drill(
        "DRILL · Soft statement",
        "Riley can't live here.",
        "Say it quietly, then change the subject: I / We / My kids can't live here."
      ),
    ],
    items: [
      item(
        "WHAT MAKES A HOME",
        "feel at home · settle in · it doesn't feel like home",
        [
          "It's a nice flat, but it doesn't feel like home.",
          "I only settled in when I found my café.",
          "I felt homesick for the smell of my old street.",
        ],
        "Your turn (40 s): the exact moment a new place finally started to feel like home. What changed?"
      ),
    ],
    starters: [
      "A place only feels like home to me when…",
      "I felt homesick for…",
      "It took me … to settle in because…",
    ],
    questions: [
      q("lexis", "English has «house» and «home». Does your language make this difference? Which is more important to you: the building or the people?", [
        "Home is people, not walls.",
        "Home is where I can be myself.",
        "Some people carry home inside them.",
      ]),
      q("personal", "Have you ever lived somewhere that never became home? What was missing — and what did you learn about what you need?", [
        "No friends / no routine / no light.",
        "I needed a community, not a nicer flat.",
        "I learned I need nature / noise / silence.",
      ]),
      q("episode", "Sadness says it quietly, without drama. Why are the quiet sad sentences often the most honest ones in a family?", [
        "No performance — just truth.",
        "Nobody wants to hear them, so they're said quietly.",
        "They're the ones we should listen to most.",
      ]),
    ],
  });

  CLUB.stickers.s01e03 = [
    { phrase: "It's nothing our butterfly curtains couldn't fix.", use: "It's nothing a strong coffee couldn't fix." },
    { phrase: "I read somewhere that an empty room is an opportunity.", use: "I read somewhere that boredom makes you creative." },
    { phrase: "Get off me! Get out the rubber ball.", use: "Get off my back — I need to blow off steam." },
    { phrase: "We're in solitary confinement.", use: "Working from home in January? Solitary confinement." },
    { phrase: "What are we gonna do? We are going to get rabies.", use: "What are we gonna do? — me when the Wi-Fi dies." },
    { phrase: "I'm starting to envy the dead mouse.", use: "Third delay — I'm starting to envy the luggage." },
    { phrase: "Riley can't live here.", use: "It's a nice flat, but it doesn't feel like home." },
  ];

  /* ===================== LESSON 4 · PIZZA ===================== */

  CLUB.beats["pizza-1-discovery"] = beat({
    tone: "Discovery → disappointment · food identity",
    meanings: [
      "down the street = nearby, on this road.",
      "Maybe we could try that? = soft suggestion (could = polite).",
      "What the heck is that? = mild shock (heck = soft swear word for hell).",
      "Who puts X on Y? = rhetorical outrage at a strange combination.",
    ],
    examples: [
      "MAYBE WE COULD…? — Maybe we could try that? · Maybe we could order in? · How about…?",
      "I saw a pizza place down the street. Maybe we could try that?",
      "WHAT THE HECK — What the heck is that? · What the heck are you doing? · Oh, what the heck, let's do it (= why not)",
      "WHO PUTS … ON …? — Who puts broccoli on pizza? · Who puts ketchup on pasta? · Who puts milk in first?",
      "Who puts pineapple on pizza?!",
      "Oh, what the heck — let's try it.",
    ],
    drills: [
      drill(
        "SOFT SUGGESTIONS",
        "Maybe we could… · How about… · Why don't we… · We could always…",
        "Plan a Friday night as a group — only suggestions, no commands."
      ),
      drill(
        "GAME · Food crimes court",
        "Who puts … on … ? · What the heck is that?",
        "Each player confesses a strange food habit. The group shouts «Who puts ___ on ___?!» The accused must defend it for 20 s."
      ),
      drill(
        "DRILL · «What the heck» ×3",
        "What the heck is that? · What the heck are you doing? · Oh, what the heck!",
        "Three meanings: shock · annoyance · «why not». One sentence each."
      ),
    ],
    items: [
      item(
        "FOOD CULTURE SHOCK",
        "Who puts … on … ? · Maybe we could try…",
        [
          "Who puts sugar in their tea abroad? Everyone, apparently.",
          "Maybe we could try the local place?",
          "What the heck is that? — Mayonnaise on chips.",
        ],
        "Your turn (40 s): a food shock you had in another country or family. Did you try it in the end?"
      ),
    ],
    starters: [
      "The strangest food combination I've seen is…",
      "Maybe we could… — that's how I suggest things when…",
      "Oh, what the heck — I tried it and…",
    ],
    questions: [
      q("lexis", "«Who puts broccoli on pizza?» is a question nobody wants answered. What other «rhetorical outrage» questions do you use when your rules are broken?", [
        "Who does that?! · Who raised you?!",
        "Who replies «k» to a long message?",
        "They defend our sense of «normal».",
      ]),
      q("personal", "Food is identity. What dish or food rule from your childhood would you defend to the death — and why is it so emotional?", [
        "It tastes like my grandmother / my home.",
        "Changing it feels like betraying family.",
        "Food = belonging.",
      ]),
      q("episode", "The pizza is the last straw for Riley. Why do small disappointments hurt so much when we're already fragile?", [
        "When the big things are out of control, small things carry everything.",
        "It's never really about the pizza.",
        "Tired brains can't absorb one more change.",
      ]),
    ],
  });

  CLUB.beats["pizza-2-anger"] = beat({
    tone: "Anger · sarcasm · blaming the place",
    meanings: [
      "Congratulations, X, you ruined Y = sarcastic «award» for destroying something (comic pattern).",
      "ruin = destroy, spoil completely (ruin the evening · ruin everything).",
      "Maybe it's a San Francisco thing = a cultural difference (It's a … thing).",
    ],
    examples: [
      "CONGRATULATIONS, YOU RUINED… — Congratulations, Monday, you ruined my weekend mood.",
      "Congratulations, San Francisco, you ruined pizza.",
      "RUIN — ruin the surprise · ruin everything · ruined my appetite",
      "IT'S A … THING — It's a British thing · It's a girl thing · It's a family thing · It's a Gen Z thing",
      "Maybe it's a San Francisco thing.",
      "Queueing is a British thing.",
    ],
    drills: [
      drill(
        "IT'S A … THING",
        "It's a London / Russian / Gen Z / family thing",
        "Name three habits you find strange and explain them as «It's a ___ thing»."
      ),
      drill(
        "GAME · Sarcastic awards ceremony",
        "Congratulations, …, you ruined …",
        "Everyone gives an «award» to something that ruined their week. Host reads them out like the Oscars. Best acceptance speech wins."
      ),
      drill(
        "DRILL · Stress the target",
        "Congratulations, SAN FRANCISCO, you RUINED pizza.",
        "Stress the city and «ruined». Then swap city + thing."
      ),
    ],
    items: [
      item(
        "BLAMING THE PLACE",
        "you ruined … · it's a … thing",
        [
          "Congratulations, rain, you ruined my holiday photos.",
          "Maybe it's a German thing — being on time.",
          "That comment totally ruined the evening.",
        ],
        "Your turn (40 s): something about a new place that «ruined» something you loved. Did you get used to it?"
      ),
    ],
    starters: [
      "Congratulations, …, you ruined…",
      "Maybe it's a … thing, but…",
      "The thing that ruined my week was…",
    ],
    questions: [
      q("lexis", "«It's a San Francisco thing» — a phrase that explains difference instead of judging it. When does «it's a … thing» build bridges and when does it build stereotypes?", [
        "Bridges: curiosity, not blame.",
        "Stereotypes: when it becomes «they are all like that».",
        "Tone decides.",
      ]),
      q("personal", "When we move or travel, we often blame the whole place for our bad mood. When did you blame a city or country for something that was actually inside you?", [
        "I hated the city — really I was lonely.",
        "The weather was just an excuse.",
        "Later I loved the same place.",
      ]),
      q("episode", "Anger turns disappointment into a joke («you ruined pizza»). Is sarcasm a healthy way to deal with disappointment?", [
        "It helps us laugh and let go.",
        "It can stop us from feeling the real sadness.",
        "Good in small doses.",
      ]),
    ],
  });

  CLUB.beats["pizza-3-dad"] = beat({
    tone: "Resilience · family roles · the «strong one»",
    meanings: [
      "have a steel stomach = can eat anything without problems; figuratively — not easily shocked or upset.",
      "resilience = the ability to recover from difficulty.",
      "Similar: nerves of steel · thick-skinned · tough as old boots.",
    ],
    examples: [
      "STEEL STOMACH — have a steel stomach / a cast-iron stomach",
      "My Dad's got a steel stomach.",
      "NERVES OF STEEL — you need nerves of steel for that job",
      "THICK-SKINNED — she's thick-skinned; criticism doesn't touch her",
      "BOUNCE BACK — bounce back quickly · bounce back from a failure",
      "Kids bounce back faster than we think.",
    ],
    drills: [
      drill(
        "TOUGHNESS idioms",
        "steel stomach · nerves of steel · thick-skinned · bounce back",
        "Name someone you know for each idiom and explain why in one sentence."
      ),
      drill(
        "GAME · Family superpowers",
        "My … has got a steel stomach / nerves of steel",
        "Each player gives every family member a «superpower» using the idioms. Group votes the most surprising one."
      ),
      drill(
        "DRILL · Have got",
        "My Dad's got · She's got · I haven't got",
        "Contractions drill: My Dad's got… / My mum's got… / I haven't got…"
      ),
    ],
    items: [
      item(
        "THE STRONG ONE",
        "steel stomach · nerves of steel · bounce back",
        [
          "My Dad's got a steel stomach — he'll eat anything.",
          "My mum has nerves of steel in a crisis.",
          "I bounced back quickly after that failure.",
        ],
        "Your turn (40 s): who is the «steel» person in your family? Is it a gift — or a burden they carry?"
      ),
    ],
    starters: [
      "In my family, the one with nerves of steel is…",
      "I bounced back from … by…",
      "Being «the strong one» costs…",
    ],
    questions: [
      q("lexis", "«Steel stomach», «nerves of steel», «thick-skinned»: why do we praise people who don't feel things? Is «not feeling» really strength?", [
        "Society rewards people who don't complain.",
        "Real strength = feeling and still acting.",
        "Some «steel» is just numbness.",
      ]),
      q("personal", "Were you ever «the strong one» — at work, in your family, for a friend? What did it cost you to never break?", [
        "Nobody asked how I was.",
        "I felt I had no right to be tired.",
        "Finally I let someone help me.",
      ]),
      q("episode", "Dad eats the broccoli pizza like nothing happened. Parents often hide their own stress to protect kids. Is that good parenting or a lesson in hiding feelings?", [
        "Kids feel the stress anyway.",
        "Some calm protects them.",
        "Better: honest but safe — «I'm stressed too, but we'll be OK.»",
      ]),
    ],
  });

  CLUB.beats["pizza-4-favourites"] = beat({
    tone: "Memory · family trips · shared moments",
    meanings: [
      "What was your favourite part? = classic family question after a trip / film / day.",
      "spit (spat · spat) = force liquid/food out of your mouth.",
      "definitely not… = strong negative (sarcastic ranking).",
    ],
    examples: [
      "FAVOURITE PART — What was your favourite part? · The best bit was… · the highlight was…",
      "What was your favourite part?",
      "The highlight of the trip was the night swim.",
      "DEFINITELY NOT — definitely not when Dad was singing · definitely not the food",
      "Low point: definitely not when Dad was singing.",
      "HIGHS & LOWS — the high point / the low point · the best / worst bit",
    ],
    drills: [
      drill(
        "HIGHS & LOWS",
        "the highlight · the low point · the best bit · definitely not …",
        "Your last holiday in four sentences: highlight, low point, surprise, «definitely not…»."
      ),
      drill(
        "GAME · Rose, thorn, bud",
        "What was your favourite part? · definitely not …",
        "Everyone shares their week: rose (favourite part), thorn (definitely not…), bud (something coming). Group asks one follow-up."
      ),
      drill(
        "DRILL · Emotion voices",
        "What was your favourite part?",
        "Ask the question as Joy, as bored Riley, as a suspicious Fear. Answer in character."
      ),
    ],
    items: [
      item(
        "FAMILY MEMORIES",
        "favourite part · the highlight · definitely not",
        [
          "My favourite part was spitting cherry stones out of the window.",
          "The highlight? Definitely not the six-hour traffic jam.",
          "Definitely not when Dad started singing.",
        ],
        "Your turn (40 s): a family trip — your favourite part, and the part you'd «definitely not» repeat."
      ),
    ],
    starters: [
      "My favourite part of … was…",
      "The low point was definitely…",
      "A family moment I'll always remember is…",
    ],
    questions: [
      q("lexis", "«What was your favourite part?» — why is this question so powerful in families? What does it do that «How was it?» doesn't?", [
        "It makes you search for a positive memory.",
        "It asks for a detail, not a «fine».",
        "Good question for teenagers who say «fine».",
      ]),
      q("personal", "Psychologists say we remember the peak moment and the end of an experience more than the whole thing. What is a family memory that is better in memory than it was in reality?", [
        "The trip was chaos — now it's our favourite story.",
        "We fought all week, but we laugh about it now.",
        "Memory edits out boredom.",
      ]),
      q("episode", "Embarrassing parents («definitely not when Dad was singing»): why do teenagers find parents so embarrassing — and when does that change?", [
        "Teens want their own identity.",
        "Around 25 you start copying them.",
        "Embarrassment = love + distance.",
      ]),
    ],
  });

  CLUB.stickers.s01e04 = [
    { phrase: "Maybe we could try that?", use: "There's a new ramen place — maybe we could try that?" },
    { phrase: "What the heck is that? Who puts broccoli on pizza?", use: "Who puts ketchup on pasta?!" },
    { phrase: "Congratulations,  San Fransisco, you ruined pizza.", use: "Congratulations, Monday, you ruined my mood." },
    { phrase: "Maybe, it's a San Francisco thing.", use: "Maybe it's a British thing — queueing for everything." },
    { phrase: "My Dad's got a steel stomach.", use: "My brother's got a steel stomach — he eats anything." },
    { phrase: "What was your favourite part?", use: "So what was your favourite part of the trip?" },
    { phrase: "definitely not when Dad was singing.", use: "Low point? Definitely not the karaoke." },
  ];

  /* ===================== LESSON 5 · SADNESS vs JOY ===================== */

  CLUB.beats["s2-sadness-spiral"] = beat({
    tone: "Sadness · self-criticism · inner voice",
    meanings: [
      "Something's wrong with me = I'm broken (a global, harsh self-judgement).",
      "have a breakdown = lose emotional control completely (nervous breakdown · meltdown).",
      "I keep making mistakes = repeated pattern (keep + -ing).",
      "awful and annoying = harsh self-labels — the inner critic speaking.",
    ],
    examples: [
      "BREAKDOWN — have a breakdown · a nervous breakdown · a meltdown · fall apart",
      "It's like I'm having a breakdown.",
      "KEEP + -ING — I keep making mistakes · I keep forgetting · he keeps calling",
      "I keep making mistakes like that.",
      "INNER CRITIC — I'm so stupid · I'm awful · be hard on yourself · beat yourself up",
      "Stop beating yourself up — everyone makes mistakes.",
    ],
    drills: [
      drill(
        "KEEP + -ING patterns",
        "I keep …ing · she keeps …ing · I can't stop …ing",
        "Three honest «I keep…» sentences about your habits (good or bad)."
      ),
      drill(
        "GAME · Inner critic vs best friend",
        "I'm awful and annoying → You're human · Stop beating yourself up",
        "A says a Sadness self-attack. B answers the way they'd talk to their best friend. Then A must repeat B's kind line about themselves."
      ),
      drill(
        "DRILL · Say it kindly",
        "Something's wrong with me. → Something's hard for me right now.",
        "Transform each harsh line into a fair one. Notice how grammar changes the feeling."
      ),
    ],
    items: [
      item(
        "BEATING YOURSELF UP",
        "I keep making mistakes · beat yourself up · fall apart",
        [
          "I keep making the same mistake at work.",
          "I beat myself up about it for days.",
          "I felt like I was falling apart that winter.",
        ],
        "Your turn (40 s): a mistake you punished yourself for too long. What would you say to a friend who did the same?"
      ),
    ],
    starters: [
      "I keep … and it makes me feel…",
      "I tend to beat myself up when…",
      "If my best friend said «I'm awful», I'd tell them…",
    ],
    questions: [
      q("lexis", "«Something's WRONG with me» vs «Something's HARD for me». How does changing a few words change the way we see ourselves?", [
        "Wrong = identity · Hard = situation.",
        "Language shapes shame.",
        "Therapists teach this reframe on purpose.",
      ]),
      q("personal", "Most of us talk to ourselves in a way we'd never talk to a friend. Whose voice is your inner critic — and when did you first hear it?", [
        "A teacher / a parent / a coach.",
        "It started at school.",
        "I'm learning to answer it back.",
      ]),
      q("episode", "Sadness says «I'm awful and annoying» and nobody in HQ listens. What happens to a person when their sadness is always ignored, even by themselves?", [
        "It gets louder or turns into numbness.",
        "It comes out as illness or anger.",
        "Being heard is half the healing.",
      ]),
    ],
  });

  CLUB.beats["s2-joy-fix"] = beat({
    tone: "Joy · distraction · quick fixes",
    meanings: [
      "Try to think of something funny = distract yourself with a positive thought.",
      "a quick fix = a fast solution that doesn't solve the real problem.",
      "cheer someone up · take your mind off something · snap out of it (not kind!).",
    ],
    examples: [
      "TRY TO THINK OF… — Try to think of something funny · try to look on the bright side",
      "Try to think of something funny.",
      "TAKE YOUR MIND OFF — a film will take your mind off it",
      "CHEER UP — cheer someone up · Cheer up! (can sound dismissive)",
      "SNAP OUT OF IT — Just snap out of it! (harsh)",
      "A walk usually takes my mind off things.",
    ],
    drills: [
      drill(
        "HELPFUL vs HURTFUL comfort",
        "take your mind off it · cheer up · snap out of it · I'm here · that sounds hard",
        "Sort the phrases from most helpful to most hurtful. Defend your order."
      ),
      drill(
        "GAME · Cheer-up challenge",
        "Try to think of something funny",
        "A plays a sad friend (no smiling allowed). Others have 60 s to make them laugh using stories. If A laughs, the helper wins."
      ),
      drill(
        "DRILL · Soften the fix",
        "Try to think of something funny → Would it help to think of something funny?",
        "Turn commands into offers. Offers leave the other person in control."
      ),
    ],
    items: [
      item(
        "DISTRACTION: HELP OR HIDE?",
        "take my mind off it · cheer me up · a quick fix",
        [
          "Watching comedy took my mind off the exam.",
          "Scrolling is my quick fix — it never really works.",
          "She tried to cheer me up, but I needed to cry first.",
        ],
        "Your turn (40 s): your go-to distraction when you're sad. Does it heal or just delay?"
      ),
    ],
    starters: [
      "My quick fix when I'm down is…",
      "What really takes my mind off things is…",
      "Please don't tell me to «cheer up» when…",
    ],
    questions: [
      q("lexis", "«Try to think of something funny», «Cheer up!», «Snap out of it!» — why do these well-meant phrases often make sad people feel worse?", [
        "They say: your feeling is a problem.",
        "They're about the helper's discomfort.",
        "Better: «Do you want to talk or be distracted?»",
      ]),
      q("personal", "Distraction can be healthy (a walk, a film) or an escape (endless scrolling, overworking). Where is your line?", [
        "When I feel better after — healthy.",
        "When I feel emptier after — escape.",
        "When I can't stop — it's avoidance.",
      ]),
      q("episode", "Joy offers a quick fix because she can't stand seeing Sadness hurt. Is trying to fix someone's sadness a form of love — or control?", [
        "Love, but impatient.",
        "Control: I need YOU to feel better so I feel better.",
        "Sometimes the best help is company, not solutions.",
      ]),
    ],
  });

  CLUB.beats["s2-milk-nose"] = beat({
    tone: "Joy · core memories · laughter",
    meanings: [
      "laugh so hard (that)… = extreme laughter with a physical result.",
      "milk came out of her nose = classic childhood image of uncontrollable laughter.",
      "Similar: crack up · be in stitches · laugh your head off · cry with laughter.",
    ],
    examples: [
      "LAUGH SO HARD… — laugh so hard I cried · so hard my stomach hurt · so hard milk came out of her nose",
      "Riley laughed so hard milk came out of her nose.",
      "IN STITCHES — we were in stitches · it had me in stitches",
      "CRACK UP — she cracked up in the middle of the exam",
      "CRY WITH LAUGHTER — we were crying with laughter",
      "CORE MEMORY — a memory that shapes who you are",
    ],
    drills: [
      drill(
        "LAUGHTER idioms",
        "in stitches · crack up · laugh my head off · cry with laughter · laugh so hard…",
        "Tell a 20-s funny story using at least two idioms."
      ),
      drill(
        "GAME · Don't laugh challenge",
        "laugh so hard … · crack up",
        "Pairs face each other. A tells their funniest memory; B must keep a straight face. If B cracks up, swap."
      ),
      drill(
        "DRILL · So hard (that)…",
        "laughed so hard (that) …",
        "Finish in five different ways — the more physical, the better."
      ),
    ],
    items: [
      item(
        "CORE JOY MEMORIES",
        "laugh so hard … · in stitches · a core memory",
        [
          "We laughed so hard at dinner that Dad choked on his soup.",
          "My friend had me in stitches all night.",
          "That camping trip is a core memory.",
        ],
        "Your turn (40 s): a memory where you laughed so hard you couldn't breathe. Who was there?"
      ),
    ],
    starters: [
      "I laughed so hard that…",
      "The person who always has me in stitches is…",
      "One of my core memories is…",
    ],
    questions: [
      q("lexis", "Why are almost all laughter idioms physical — stitches, crying, heads falling off, milk out of noses? What does that tell us about joy?", [
        "Real joy lives in the body.",
        "You can't fake a laughing fit.",
        "Laughter breaks control — like crying.",
      ]),
      q("personal", "In the film, core memories build personality islands. Which three core memories built you? Are they mostly joyful?", [
        "A mix of joy and pain.",
        "The sad ones shaped me more.",
        "Some joyful memories now feel bittersweet.",
      ]),
      q("episode", "Joy uses a funny memory to fight Sadness. Can happy memories heal — or do they sometimes make the present feel even worse?", [
        "They remind us who we are.",
        "Nostalgia can hurt — «it's gone».",
        "Bittersweet = joy + sadness together (the film's big point).",
      ]),
    ],
  });

  CLUB.beats["s2-rain-sad"] = beat({
    tone: "Sadness · sensory description · low mood",
    meanings: [
      "felt like fire = very painful (simile).",
      "soggy = wet and soft in an unpleasant way (soggy shoes / chips / bread).",
      "shivery = shaking with cold (or fear).",
      "droopy = hanging down, without energy — also a low mood.",
    ],
    examples: [
      "FELT LIKE… — that felt like fire · it felt like a punch · it felt like forever",
      "Yes, that hurt, that felt like fire.",
      "SOGGY / SHIVERY / DROOPY — soggy shoes · shivery and cold · droopy flowers · I feel droopy",
      "Rain runs down our back and makes our shoes soggy.",
      "Everything just starts feeling droopy.",
      "LOW MOOD — feel down · feel blue · feel flat · be in a slump",
    ],
    drills: [
      drill(
        "SENSORY adjectives",
        "soggy · shivery · droopy · sticky · heavy · flat",
        "Describe the worst weather day of your life using four of them."
      ),
      drill(
        "GAME · Sadness vs Joy weather report",
        "soggy · shivery · droopy ↔ stomp in puddles · cool umbrellas",
        "Two «presenters» report the same rainy forecast — one as Sadness, one as Joy. The audience votes who they'd rather spend the day with."
      ),
      drill(
        "DRILL · Slow delivery",
        "Everything just starts feeling droopy.",
        "Say it slower each time; let the vowels «droop». Then say it fast and cheerful — it sounds wrong!"
      ),
    ],
    items: [
      item(
        "DESCRIBING A LOW MOOD",
        "feel droopy · feel flat · in a slump · felt like…",
        [
          "January always makes me feel droopy.",
          "I was in a slump for weeks after the project ended.",
          "The rejection felt like a punch.",
        ],
        "Your turn (40 s): describe a low mood like weather — temperature, colour, texture. What finally changed it?"
      ),
    ],
    starters: [
      "When I'm low, everything feels…",
      "My sadness is like weather: …",
      "What gets me out of a slump is…",
    ],
    questions: [
      q("lexis", "Sadness describes feelings through the body: soggy, shivery, droopy. Why is it easier to describe sadness through the body than through «emotion words»?", [
        "Emotions ARE body states first.",
        "«I'm sad» sounds too simple.",
        "Body words make others really feel it.",
      ]),
      q("personal", "Do you have a season or weather that changes your mood? How do you look after yourself in «droopy» times?", [
        "Winter = low energy for me.",
        "Light, movement, people help.",
        "I've learned to lower my expectations then.",
      ]),
      q("episode", "Sadness and Joy see the SAME rain completely differently. Is our mood created by events — or by the story we tell about events?", [
        "Mostly by the story (CBT idea).",
        "Some events are just painful — no story fixes them.",
        "We can choose the story more than we think.",
      ]),
    ],
  });

  CLUB.beats["s2-puddles-joy"] = beat({
    tone: "Joy · playfulness · the same event, a new lens",
    meanings: [
      "stomp around in puddles = jump heavily and noisily in water on the ground (childlike play).",
      "stomp = walk / step with heavy, loud steps (stomp off = leave angrily).",
      "Joy's list = listing the fun side of the same rain.",
    ],
    examples: [
      "STOMP — stomp in puddles · stomp around · stomp off (angrily) · stomp upstairs",
      "You can stomp around in puddles.",
      "She stomped off without a word.",
      "SILVER LINING — every cloud has a silver lining · look on the bright side",
      "Cool umbrellas, lightning storms.",
      "The silver lining? We had the beach to ourselves.",
    ],
    drills: [
      drill(
        "STOMP: happy or angry?",
        "stomp in puddles · stomp off · stomp upstairs · stomp around",
        "Same verb, two emotions. Make a Joy sentence and an Anger sentence."
      ),
      drill(
        "GAME · Silver lining ping-pong",
        "Every cloud has a silver lining · You can …",
        "A throws a bad situation, B must return a silver lining in 5 s, then throws a new problem. First one to freeze loses the point."
      ),
      drill(
        "DRILL · List rhythm",
        "Cool umbrellas, lightning storms.",
        "Make your own three-part Joy list about rain, Mondays, or exams. Rhythm: da-da-DA, da-da-DA."
      ),
    ],
    items: [
      item(
        "PLAYFULNESS IN ADULTS",
        "stomp in puddles · silver lining · look on the bright side",
        [
          "I still stomp in puddles when no one's looking.",
          "The silver lining of the cancelled flight? A free day.",
          "Adults forget how to play.",
        ],
        "Your turn (40 s): when did you last do something childish just for fun? What stops adults from playing?"
      ),
    ],
    starters: [
      "The last time I did something childish just for fun was…",
      "The silver lining was…",
      "Adults stop playing because…",
    ],
    questions: [
      q("lexis", "«Every cloud has a silver lining» — helpful wisdom or annoying cliché? When do you want to hear it, and when would you like to throw an umbrella at someone?", [
        "Helpful after the storm, not during.",
        "Annoying if the loss is big.",
        "Best when you find it yourself.",
      ]),
      q("personal", "Psychologists say play is not just for kids — it reduces stress and builds connection. What's your adult version of stomping in puddles?", [
        "Dancing in the kitchen.",
        "Video games / sport / silly voices.",
        "I don't play enough anymore.",
      ]),
      q("episode", "Sadness and Joy describe the same rain. The film suggests we need both views. Can you hold two opposite feelings at the same time? Give an example.", [
        "Graduation: proud and sad.",
        "Moving: excited and scared.",
        "Mixed feelings are normal, not confusion.",
      ]),
    ],
  });

  CLUB.stickers.s01e05 = [
    { phrase: "Something's wrong with me.", use: "Something's hard for me right now — not wrong with me." },
    { phrase: "It's like I'm having a breakdown.", use: "After the deadline it felt like I was having a breakdown." },
    { phrase: "I keep making mistakes like that.", use: "I keep forgetting names — it's so embarrassing." },
    { phrase: "Try to think of something funny.", use: "Would it help to think of something funny?" },
    { phrase: "Riley laughed so hard milk came out of her nose.", use: "We laughed so hard I cried." },
    { phrase: "Everything just starts feeling droopy.", use: "January — everything just starts feeling droopy." },
    { phrase: "You can stomp around in puddles.", use: "Rain? Great — we can stomp around in puddles." },
  ];
})(typeof window !== "undefined" ? window : globalThis);
