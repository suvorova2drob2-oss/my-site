/**
 * Inside Out · Speaking club · TEEN-FRIENDLY layer (universal: works for adults too).
 * One entry per bit (= one PDF section). Overrides examples · drills · situations · discussion · stickers.
 * Discussion pattern: «When was the last time you felt X? Tell the story.» → Go deeper (why · body · what next).
 */
(function (global) {
  var TEEN = (global.INSIDEOUT_TEEN = global.INSIDEOUT_TEEN || { bits: {}, stickers: {} });

  function q(kind, text, examples) {
    return { kind: kind, q: text, examples: examples || [] };
  }
  function drill(label, bank, task) {
    return { label: label, bank: bank, task: task };
  }
  function item(label, bank, models, say) {
    return { label: label, bank: bank, models: models, say: say };
  }

  /* ============ BIT · EMOTIONS BASICS ============ */
  TEEN.bits.s01e01 = {
    examples: [
      "We've got no homework this weekend — isn't that great?",
      "New phone, sunny day, pizza for dinner — things couldn't be better.",
      "You think I can't beat your score? I'll show you.",
      "Mum says I've got «an attitude» when I just say «fine».",
      "Caution, caution — the school canteen is serving fish again.",
      "Someone opened a tuna sandwich on the bus. I'm gonna be sick.",
      "Look out! — my friend grabbing my arm on the skateboard ramp.",
      "My best friend didn't reply for five hours. My brain: «She doesn't like me anymore.»",
    ],
    drills: [
      drill(
        "GAME · Sincere or sarcastic?",
        "Isn't that great? · Things couldn't be better",
        "One student says a situation («We have a surprise test tomorrow»). Partner answers «Isn't that great?» — sincerely OR sarcastically. The class guesses which. Swap."
      ),
      drill(
        "COULDN'T BE ___ER",
        "couldn't be better · couldn't be worse · couldn't be happier · couldn't care less",
        "Rate your week: school, friends, sleep, phone battery. One «couldn't be ___» line for each."
      ),
      drill(
        "GAME · «I'll show you» challenge",
        "I'll show you · I'll show them · attitude",
        "A doubts B: «You'll never learn 50 words in a week.» B: «Oh yeah? I'll show you…» + a real plan. Most convincing plan wins."
      ),
      drill(
        "GAME · Gross-out alarm",
        "Caution, caution · dangerous smell · I'm gonna be sick",
        "Teacher names foods / places (school toilet, gym bag, pineapple pizza). Students react like Disgust: «Caution, caution…» or «I'm gonna be sick.» Most dramatic Disgust wins."
      ),
      drill(
        "DRILL · Emotion voices",
        "Look out! Sharp turn. · He doesn't love us anymore.",
        "Say each line in the voice of each emotion: Joy, Anger, Disgust, Fear, Sadness. Which voice fits best? Which is the funniest mismatch?"
      ),
    ],
    items: [
      item(
        "JOY · a great day",
        "Isn't that great? · Things couldn't be better",
        ["Last Saturday things couldn't be better — no school, my friends came over and we played games all day."],
        "Your turn (40 s): tell me about a day when things couldn't be better. What made it so good?"
      ),
      item(
        "ANGER · «I'll show you»",
        "I'll show you · attitude",
        ["My PE teacher said I'd never do ten push-ups. I thought: I'll show you. Two months later I did fifteen."],
        "Your turn: someone doubted you. Did you «show them»? What happened?"
      ),
      item(
        "DISGUST · the worst smell",
        "Caution, caution · I'm gonna be sick",
        ["When I opened my gym bag after the holidays — caution, caution, dangerous smell. I was gonna be sick."],
        "Your turn: the grossest smell or food you've ever met. Describe it — make us feel it!"
      ),
      item(
        "SADNESS · jumping to conclusions",
        "He doesn't love us anymore · doesn't like me anymore",
        ["My friend sat with someone else at lunch and I thought «she doesn't like me anymore». Then she said she just needed help with maths."],
        "Your turn: a time your brain told you a sad story that wasn't true."
      ),
    ],
    starters: [
      "Honestly, things couldn't be better, except…",
      "The last time I felt really angry was when…",
      "Caution, caution — the one thing I can't stand is…",
      "My inner Fear usually shouts when…",
      "Sometimes my brain tells me «nobody likes me» when…",
    ],
    questions: [
      q("lexis", "«Isn't that great?» can be happy or sarcastic. Say it both ways. How do people know which one you mean — voice, face, situation?", [
        "Happy: big smile, high voice.",
        "Sarcastic: flat voice, eye-roll, slow.",
        "Texting is hard — nobody hears your voice!",
      ]),
      q("personal", "JOY · When was the last time you felt really, really happy? Tell the story. Go deeper: Was it something big or something small? Who was with you? Can you make a day like that happen again on purpose?", [
        "Last summer at the sea with my cousins…",
        "Honestly, it was small — my dog was waiting for me after school.",
        "I think happy moments are often with people, not things.",
      ]),
      q("personal", "ANGER · When was the last time you got really angry? What happened? Go deeper: What was under the anger — was it unfair, were you ignored, embarrassed? What did your body do? What did you do — and what do you wish you'd done?", [
        "My brother took my headphones without asking — again.",
        "A teacher blamed me for talking when it wasn't me. It felt so unfair.",
        "My face got hot and I wanted to shout.",
        "Now I think I should have said calmly: «That wasn't me.»",
      ]),
      q("personal", "DISGUST · What really disgusts you — food, smells, or people's behaviour? Go deeper: Disgust protects us from poison… but also from people. When is Disgust useful, and when does it make us unfair to others?", [
        "Food: mushrooms. I'm gonna be sick.",
        "Behaviour: people who are rude to waiters or shop assistants.",
        "Sometimes we think something is «gross» just because it's new.",
      ]),
      q("personal", "FEAR · When was the last time you were really scared? Go deeper: Was the danger real or only in your head? What helped you calm down? Is Fear your friend or your enemy?", [
        "Before my presentation my hands were shaking.",
        "A dog ran at me in the park.",
        "Fear helps me be careful, but sometimes it stops me trying new things.",
      ]),
      q("personal", "SADNESS · Riley's Sadness says «He doesn't love us anymore» after one small thing. When did one small thing make you feel nobody cares? Go deeper: What was the real story? Who do you talk to when you feel sad?", [
        "My friends made plans in a chat without me.",
        "Later I found out they just forgot to add me.",
        "I usually talk to my mum / my best friend / nobody — I keep it inside.",
      ]),
      q("episode", "All five emotions live in Riley's head. Which emotion is the «boss» in YOUR head most days? Which one would you like to give more power?", [
        "Fear is my boss — I worry a lot.",
        "I'd like Joy to drive more often.",
        "Maybe Anger — so I can say no more easily.",
      ]),
    ],
  };
  TEEN.stickers.s01e01 = [
    { phrase: "Isn't that great?", use: "No homework this weekend — isn't that great?" },
    { phrase: "Things couldn't be better", use: "Friday, pizza, no tests — things couldn't be better." },
    { phrase: "I'll show you my attitude, old man.", use: "You think I can't win? I'll show you." },
    { phrase: "Caution, caution, there's a dangerous smell, people.", use: "Caution, caution — someone opened their gym bag." },
    { phrase: "I'm gonna be sick.", use: "Pineapple on pizza? I'm gonna be sick." },
    { phrase: "Look out! Sharp turn.", use: "Look out — this conversation is taking a sharp turn." },
    { phrase: "He doesn't love us anymore.", use: "She didn't reply in five minutes — «she doesn't love me anymore»." },
  ];

  /* ============ BIT · MOVING TO SAN FRANCISCO ============ */
  TEEN.bits.s01e02 = {
    examples: [
      "Guys, you're overreacting — it's one bad mark, not the end of the world.",
      "Stop overreacting! I only borrowed your charger.",
      "Move it! The bus is leaving!",
      "Step on it, Mum — we're going to be late for the match!",
      "Can you die from boredom? Asking for a friend.",
      "It smells like something died in here — whose socks are those?",
    ],
    drills: [
      drill(
        "OVERREACTING · scale",
        "you're overreacting · calm down · it's not a big deal · make a big deal out of it",
        "Teacher gives a small problem (lost pen, Wi-Fi slow, sister took your hoodie). Student A overreacts dramatically; B says «You're overreacting — it's not a big deal.»"
      ),
      drill(
        "GAME · Back-seat driver",
        "Move it · Step on it · Get out of the street · Look out",
        "One student «drives» (chair = car), others shout impatient lines. Driver answers calmly: «Relax, we'll get there.» Swap drivers."
      ),
      drill(
        "GAME · Can you die from…?",
        "Can you die from ___?",
        "Round the room: silly worries — «Can you die from too much homework / eating only crisps / cringe?» Next student answers seriously like a doctor."
      ),
      drill(
        "GAME · Smell detective",
        "It smells like ___ · smelly · something died in here",
        "Describe a place only by its smell (school changing room, grandma's kitchen, a bakery). Others guess the place."
      ),
    ],
    items: [
      item(
        "OVERREACTING",
        "you're overreacting · it's not a big deal",
        ["My mum saw one C in my diary and started talking about my future. I said: «Mum, you're overreacting!»"],
        "Your turn (40 s): a time someone overreacted — or YOU overreacted. What happened?"
      ),
      item(
        "IMPATIENCE",
        "Move it · Step on it",
        ["When I'm late for training I'm like Anger in the car: «Step on it, Dad!»"],
        "Your turn: when are you most impatient? In the morning, in queues, with slow Wi-Fi?"
      ),
      item(
        "BIG CHANGE",
        "Can you die from moving? · new school · new town",
        ["When I changed schools I felt like Fear: can you die from being the new kid?"],
        "Your turn: a big change in your life — new school, new home, new class. How did you feel?"
      ),
    ],
    starters: [
      "Honestly, I overreacted when…",
      "I get really impatient when…",
      "The biggest change in my life so far was…",
      "The worst road trip I remember…",
      "It smelled like something died in there when…",
    ],
    questions: [
      q("lexis", "«You're overreacting.» Does this sentence calm people down — or make them angrier? What could you say instead?", [
        "It usually makes people angrier.",
        "Better: «I can see you're upset. What happened?»",
        "Or: «OK, let's think about it together.»",
      ]),
      q("personal", "JOY · Joy tries to keep everyone positive in the car. Are you the «Joy» in your family or friend group — the one who tries to make everyone feel better? Go deeper: Is it tiring to always be the positive one? Who cheers YOU up?", [
        "Yes, I always tell jokes when people are sad.",
        "Sometimes I'm tired, but I pretend I'm OK.",
        "My best friend cheers me up.",
      ]),
      q("personal", "ANGER · When was the last time you lost your patience? Go deeper: Were you really angry at that person — or tired, hungry, stressed? What helps you cool down?", [
        "My little sister was so slow in the morning, I shouted.",
        "Honestly, I was just hungry.",
        "Music helps me cool down.",
      ]),
      q("personal", "FEAR · «Can you die from moving?» Tell me about a big change that scared you (new school, new home, new class, parents' news). Go deeper: What were you afraid of losing? What turned out better than you expected?", [
        "I was scared I'd lose my friends.",
        "I didn't know anyone in the new class.",
        "Actually, I found a new best friend there.",
      ]),
      q("personal", "DISGUST · Disgust hates the smelly car. What's the most disgusting place you've ever been — and did you complain or stay quiet? Go deeper: When is it OK to complain, and when is it better to just deal with it?", [
        "A campsite toilet — never again.",
        "I complained all the time and my parents got annoyed.",
        "If you can't change it, complaining just makes everyone sadder.",
      ]),
      q("episode", "Riley's family is moving and every emotion reacts differently. Why do you think the same event feels completely different to different people in one family?", [
        "Parents see a new job; kids see lost friends.",
        "Everyone has different things to lose.",
        "Maybe the parents are scared too but hide it.",
      ]),
    ],
  };
  TEEN.stickers.s01e02 = [
    { phrase: "Guys, you're overreacting", use: "Guys, you're overreacting — it's one test." },
    { phrase: "Get out of the street;", use: "Get out of the street! — me on my bike." },
    { phrase: "Move it.", use: "Move it — the bell is about to ring!" },
    { phrase: "Step on it, Daddy.", use: "Step on it, Mum — the match starts at five!" },
    { phrase: "Can you die from moving?", use: "Can you die from homework? Asking for a friend." },
    { phrase: "Why don't we just live in this smelly car?", use: "Why don't we just live in the school library, then?" },
    { phrase: "It smells like something died in here", use: "Open a window — it smells like something died in here." },
  ];

  /* ============ BIT · NEW HOUSE ============ */
  TEEN.bits.s01e03 = {
    examples: [
      "A bad haircut? It's nothing a hat couldn't fix.",
      "I read somewhere that an empty notebook is an opportunity.",
      "Get off me! I need space.",
      "No phone for a week? That's solitary confinement!",
      "What are we gonna do? The Wi-Fi is down!",
      "Third maths lesson today — I'm starting to envy my cat.",
      "It's a nice room, but I can't live here — it doesn't feel like mine.",
    ],
    drills: [
      drill(
        "«NOTHING ___ COULDN'T FIX»",
        "It's nothing a ___ couldn't fix",
        "Teacher gives a problem (bad haircut, boring party, rainy weekend). Student solves it Joy-style: «It's nothing a ___ couldn't fix.»"
      ),
      drill(
        "GAME · Rubber ball",
        "Get off me! · I need space · I'm so bored · solitary confinement",
        "Throw a soft ball. Whoever catches it complains about being bored or trapped using a tape line, then throws it on. No repeats!"
      ),
      drill(
        "GAME · Catastrophe court",
        "What are we gonna do? · We're going to ___",
        "A tiny problem (a spider in the room). Each student makes the disaster bigger: «…we're going to get rabies!» The «judge» chooses the funniest catastrophe."
      ),
      drill(
        "GAME · Envy the ___",
        "I'm starting to envy the ___",
        "Describe a boring or awful situation, finish with «I'm starting to envy the ___» (the chair, my goldfish, the dead plant). Funniest wins."
      ),
    ],
    items: [
      item(
        "OPTIMISM",
        "It's nothing ___ couldn't fix · an opportunity",
        ["When my room was a total mess, I said: it's nothing a free Saturday couldn't fix."],
        "Your turn: a problem you fixed by being positive."
      ),
      item(
        "FEELING TRAPPED",
        "solitary confinement · get off me · I need space",
        ["When I was ill for a week and couldn't see friends, it felt like solitary confinement."],
        "Your turn: when did you feel trapped or super bored? What did you do?"
      ),
      item(
        "HOME",
        "can't live here · feel at home",
        ["At my grandma's the first night I thought «I can't live here» — but by day three I loved it."],
        "Your turn: a place that didn't feel like home at first. Did it change?"
      ),
    ],
    starters: [
      "It's nothing a ___ couldn't fix.",
      "I felt like I was in solitary confinement when…",
      "My biggest «what if» fear is…",
      "My room / my home feels like mine because…",
      "The place where I feel most at home is…",
    ],
    questions: [
      q("lexis", "«I'm starting to envy the dead mouse.» Why is this funny? When have you felt «anything would be better than this»?", [
        "It's funny because nobody really wants to be a dead mouse!",
        "It means: this situation is SO bad.",
        "I felt like that in a four-hour car trip.",
      ]),
      q("personal", "JOY · Joy says «an empty room is an opportunity». When did something bad or empty turn into a chance for you? Go deeper: Is it always good to look on the bright side, or do we sometimes need to just be sad first?", [
        "Moving class — I got to meet new people.",
        "Sometimes I just want to be upset for a bit.",
        "It depends on how bad it is.",
      ]),
      q("personal", "ANGER · Anger feels trapped: «We're in solitary confinement.» When was the last time you felt stuck — at home, in class, in a car? Go deeper: What do you need when you feel trapped — space, music, sport, a friend?", [
        "Stuck at home during exams.",
        "I need to go for a walk or play football.",
        "I put my headphones on and disappear.",
      ]),
      q("personal", "FEAR · «We are going to get rabies!» Tell me about a time your mind made a small problem HUGE. Go deeper: Why does our brain do this? What do you tell yourself to stop the spiral?", [
        "I had a headache and googled it — big mistake.",
        "I thought my teacher hated me because she didn't smile.",
        "I ask myself: what's the most likely thing, not the worst thing?",
      ]),
      q("personal", "SADNESS · «Riley can't live here.» What makes a place feel like HOME for you? Go deeper: Is home a building, people, smells, your things? If you moved tomorrow, what would you miss most?", [
        "My room, my posters, my bed.",
        "Honestly, it's my family and my dog.",
        "I'd miss my friends and my street.",
      ]),
      q("episode", "Everyone in Riley's head reacts to the same empty house. If your emotions walked into a new house, what would each one say?", [
        "Joy: «Look at this huge window!»",
        "Disgust: «Who lived here? Ew.»",
        "Fear: «Is that a spider?!»",
      ]),
    ],
  };
  TEEN.stickers.s01e03 = [
    { phrase: "It's nothing our butterfly curtains couldn't fix.", use: "A bad hair day? It's nothing a cap couldn't fix." },
    { phrase: "I read somewhere that an empty room is an opportunity.", use: "I read somewhere that boredom makes you creative." },
    { phrase: "Get off me! Get out the rubber ball.", use: "Get off me! I need some space." },
    { phrase: "We're in solitary confinement.", use: "No phone for a week? That's solitary confinement." },
    { phrase: "What are we gonna do? We are going to get rabies.", use: "What are we gonna do? — me when the Wi-Fi dies." },
    { phrase: "I'm starting to envy the dead mouse.", use: "Double maths again — I'm starting to envy my cat." },
    { phrase: "Riley can't live here.", use: "It's a nice room, but it doesn't feel like home yet." },
  ];

  /* ============ BIT · PIZZA ADVENTURE ============ */
  TEEN.bits.s01e04 = {
    examples: [
      "There's a new bubble tea place near school. Maybe we could try that?",
      "Burgers? That sounds delicious.",
      "What the heck is that? Who puts ketchup on pasta?",
      "Congratulations, Monday, you ruined my weekend.",
      "Maybe it's a British thing — they drink tea with milk.",
      "My brother's got a steel stomach — he eats anything.",
      "What was your favourite part of the school trip?",
      "Best part: the roller coaster. Definitely not the three-hour bus ride.",
    ],
    drills: [
      drill(
        "SOFT SUGGESTIONS",
        "Maybe we could try that? · How about…? · Why don't we…? · That sounds delicious / fun",
        "Plan a Friday with friends. A suggests politely, B agrees or refuses softly. Use each pattern once."
      ),
      drill(
        "GAME · Food crimes court",
        "What the heck is that? · Who puts ___ on ___?",
        "Students accuse weird food combos (chips in ice cream, pineapple pizza, mayo on everything). The class votes: crime or genius?"
      ),
      drill(
        "GAME · Congratulations, you ruined ___",
        "Congratulations, ___, you ruined ___",
        "Sarcastic awards: «Congratulations, rain, you ruined football.» Each student gives one award. Most dramatic wins."
      ),
      drill(
        "GAME · Highs and lows",
        "What was your favourite part? · definitely not when…",
        "Pairs interview each other about the last weekend / holiday: favourite part + «definitely not when…»."
      ),
    ],
    items: [
      item(
        "NEW FOOD",
        "Maybe we could try that? · What the heck is that?",
        ["In Italy I tried squid ink pasta. It was black! What the heck is that? But it was delicious."],
        "Your turn: the strangest food you've ever tried. Would you eat it again?"
      ),
      item(
        "RUINED",
        "Congratulations, ___, you ruined ___",
        ["Congratulations, alarm clock, you ruined my dream about being famous."],
        "Your turn: something small that ruined your day — tell it like a sarcastic award."
      ),
      item(
        "FAVOURITE PART",
        "What was your favourite part? · definitely not when…",
        ["My favourite part of the camp was the night walk. Definitely not when it started raining in our tent."],
        "Your turn: your last trip or holiday — best part and worst part."
      ),
    ],
    starters: [
      "Maybe we could try…",
      "The weirdest food I've ever eaten was…",
      "Congratulations, ___, you ruined…",
      "In my family, the person with a steel stomach is…",
      "My favourite part was… definitely not when…",
    ],
    questions: [
      q("lexis", "«Congratulations, San Francisco, you ruined pizza.» What makes sarcasm funny — and when can it hurt someone's feelings?", [
        "It's funny when it's about things, not people.",
        "It hurts when it's about someone's work or looks.",
        "With friends it's OK; with new people, careful.",
      ]),
      q("personal", "JOY · Riley is excited about trying pizza, then disappointed. When did you expect something amazing and it was a disappointment? Go deeper: Why do high expectations make disappointment worse? Is it better to expect less?", [
        "A film everyone loved — I found it boring.",
        "My birthday party — I planned so much and it rained.",
        "Maybe expect «OK» and be happily surprised.",
      ]),
      q("personal", "DISGUST · «Who puts broccoli on pizza?» Are you a picky eater or do you have a steel stomach? Go deeper: Do you dislike new things because they're bad — or because they're new? Is that true with people too?", [
        "I'm super picky — I hate anything green.",
        "Sometimes I say «ew» before I even try it.",
        "Yes — sometimes we judge new people too fast.",
      ]),
      q("personal", "ANGER · When was the last time something small ruined your whole mood? Go deeper: Was it really the small thing — or were you already tired or stressed? How do you «restart» a bad day?", [
        "I spilled juice on my homework.",
        "I was already stressed about a test.",
        "I restart with a shower, a snack or a nap.",
      ]),
      q("personal", "FAMILY · Riley's favourite part was spitting out of the car window — definitely not Dad singing. What does your family do that's embarrassing but you secretly love? Go deeper: Will you miss it when you're older?", [
        "My dad sings in the car — so loud.",
        "My mum dances in the kitchen.",
        "Yeah… I'll probably do the same with my kids!",
      ]),
      q("episode", "Riley's family has a bad day but still laughs about the trip. Why do bad moments sometimes become the best memories later?", [
        "Because they make funny stories.",
        "We remember feelings, not perfect days.",
        "Surviving it together makes us closer.",
      ]),
    ],
  };
  TEEN.stickers.s01e04 = [
    { phrase: "Maybe we could try that?", use: "There's a new bubble tea place — maybe we could try that?" },
    { phrase: "What the heck is that? Who puts broccoli on pizza?", use: "Who puts ketchup on pasta?!" },
    { phrase: "Congratulations,  San Fransisco, you ruined pizza.", use: "Congratulations, Monday, you ruined my weekend." },
    { phrase: "Maybe, it's a San Francisco thing.", use: "Maybe it's a British thing — milk in tea." },
    { phrase: "My Dad's got a steel stomach.", use: "My brother's got a steel stomach — he eats anything." },
    { phrase: "What was your favourite part?", use: "So what was your favourite part of the trip?" },
    { phrase: "definitely not when Dad was singing.", use: "Best part? Definitely not when my dad was singing." },
  ];

  /* ============ BIT · SADNESS VS JOY ============ */
  TEEN.bits.s01e05 = {
    examples: [
      "I forgot my lines in the school play. Something's wrong with me.",
      "Three tests in one day — it's like I'm having a breakdown.",
      "I keep making mistakes like that in maths.",
      "Try to think of something funny — like the teacher falling off the chair.",
      "We laughed so hard juice came out of my nose.",
      "Grey sky, cold, soggy shoes — everything just starts feeling droopy.",
      "It's raining? Great — we can stomp around in puddles!",
    ],
    drills: [
      drill(
        "KEEP + -ING",
        "I keep making mistakes · I keep forgetting · I keep losing · I keep thinking",
        "Tell three things you keep doing (good or bad): «I keep losing my keys / thinking about…»"
      ),
      drill(
        "GAME · Silver lining ping-pong",
        "Something's wrong with me · Try to think of something funny · You can stomp around in puddles",
        "A says a Sadness line about a bad situation. B must answer with a Joy line. Fast! If B pauses, swap roles."
      ),
      drill(
        "GAME · Laugh story",
        "laughed so hard ___ · cried laughing · couldn't stop laughing",
        "Each student tells the funniest moment of their life in 30 seconds. Class votes the best «laughed so hard…» story."
      ),
      drill(
        "DRILL · Weather mood",
        "droopy · soggy · shivery · felt like fire · cool umbrellas · lightning storms",
        "Describe rain two ways: first as Sadness (droopy, soggy), then as Joy (puddles, umbrellas). Same weather, two stories."
      ),
    ],
    items: [
      item(
        "SADNESS · self-talk",
        "Something's wrong with me · I keep making mistakes · I'm awful",
        ["After I lost the match I thought «something's wrong with me». My coach said: «No — you just had a bad day.»"],
        "Your turn: a day you were really hard on yourself. What would you tell a friend in the same situation?"
      ),
      item(
        "JOY · the funny memory",
        "laughed so hard · think of something funny",
        ["We laughed so hard in class that the teacher started laughing too."],
        "Your turn: a memory that always makes you laugh."
      ),
      item(
        "SAME RAIN · two stories",
        "droopy · soggy shoes · stomp around in puddles",
        ["Sadness: my shoes were soggy and I was shivery. Joy: we stomped in puddles on the way home!"],
        "Your turn: a rainy day — tell it as Sadness, then as Joy."
      ),
    ],
    starters: [
      "Sometimes I think something's wrong with me when…",
      "I keep making the same mistake:…",
      "The funniest moment of my life was…",
      "When I feel droopy, I…",
      "Joy would say: try to think of…",
    ],
    questions: [
      q("lexis", "«Something's wrong with me» vs «Something's hard for me right now.» What's the difference? Which one helps you more?", [
        "The first one is about who I am.",
        "The second one is about a situation — it can change.",
        "The second one is kinder.",
      ]),
      q("personal", "SADNESS · When was the last time you felt really sad or down? Tell me what happened. Go deeper: Did you tell anyone, or keep it inside? What did you need most — advice, a hug, or just someone to listen?", [
        "When my friend moved to another city.",
        "I didn't tell anyone, I just stayed in my room.",
        "I just needed someone to listen, not fix it.",
      ]),
      q("personal", "SELF-TALK · «I'm awful and annoying.» Do you ever talk to yourself like that? Go deeper: Would you say that to your best friend? Why are we so much meaner to ourselves than to others?", [
        "Yes, when I make mistakes in a test.",
        "No way — I'd never say that to a friend.",
        "Maybe because we see all our mistakes and not other people's.",
      ]),
      q("personal", "JOY · «Try to think of something funny.» When you're sad, does it help when someone tries to cheer you up — or does it annoy you? Go deeper: What's the BEST thing a friend has done when you were sad?", [
        "It depends — sometimes I just want to be sad.",
        "It annoys me if they say «just smile».",
        "My friend brought me my favourite snack and didn't ask questions.",
      ]),
      q("personal", "LAUGHTER · Tell me about a time you laughed so hard you couldn't stop. Go deeper: Why is laughing with other people so much better than alone? Who makes you laugh the most?", [
        "At a sleepover at 2 a.m.",
        "Laughing together makes us closer.",
        "My cousin — he's so silly.",
      ]),
      q("episode", "In the film, Joy wants to stop Sadness from touching anything. Is it a good idea to never feel sad? What would happen to a person who is «always happy»?", [
        "They would be fake.",
        "Sadness helps other people see we need help.",
        "You can't feel real joy without sadness sometimes.",
      ]),
    ],
  };
  TEEN.stickers.s01e05 = [
    { phrase: "Something's wrong with me.", use: "Something's hard for me right now — not wrong with me." },
    { phrase: "It's like I'm having a breakdown.", use: "Three tests in one day — it's like I'm having a breakdown." },
    { phrase: "I keep making mistakes like that.", use: "I keep making mistakes like that in maths." },
    { phrase: "Try to think of something funny.", use: "Try to think of something funny — like the teacher's face!" },
    { phrase: "Riley laughed so hard milk came out of her nose.", use: "We laughed so hard juice came out of my nose." },
    { phrase: "Everything just starts feeling droopy.", use: "Grey November — everything just starts feeling droopy." },
    { phrase: "You can stomp around in puddles.", use: "Rain? Great — we can stomp around in puddles." },
  ];

  /* ============ BIT · CHORUS OF EMOTIONS ============ */
  TEEN.bits.s01e06 = {
    examples: [
      "I watched a horror film last night. I'm so jumpy today.",
      "Exams next week — my nerves are shot. (the workbook prints «shut»)",
      "All my stuff is in my locker and I lost the key!",
      "I don't want to hear about the test anymore.",
      "My friends are back home and I'm at summer camp alone.",
      "Relax — we've been through worse.",
      "It could be worse — at least it's Friday.",
      "Honestly, this weekend has been a bust.",
      "My room stinks — who left a sandwich under the bed?",
    ],
    drills: [
      drill(
        "NERVES",
        "I'm so jumpy · my nerves are shot · I'm a bundle of nerves · butterflies in my stomach",
        "Name three situations that make you nervous (exam, first day, performance). Use a different nerves phrase for each."
      ),
      drill(
        "GAME · Complaint chorus",
        "I don't want to hear about… · My ___ stinks · this ___ has been a bust",
        "The class is Riley's head. Each student is one emotion and complains about the same thing (school trip, rainy holiday) in character. Next group does it better!"
      ),
      drill(
        "GAME · It could be worse",
        "It could be worse · we've been through worse · at least…",
        "A tells a bad situation. B: «It could be worse — at least…». C makes it even more positive. Keep going until someone laughs."
      ),
      drill(
        "DRILL · Distance",
        "my friends are back home · I miss… · I wish I was…",
        "Imagine you're in a new city. Say three things you miss from back home — people, food, places."
      ),
    ],
    items: [
      item(
        "FEAR · jumpy",
        "I'm so jumpy · my nerves are shot",
        ["Before the concert I was so jumpy — when my friend touched my shoulder I screamed!"],
        "Your turn: a time you were super nervous. What happened in your body?"
      ),
      item(
        "SADNESS · missing people",
        "my friends are back home · I miss…",
        ["At camp I loved the lake, but at night I missed my friends back home."],
        "Your turn: a time you were far from people you love. How did you deal with it?"
      ),
      item(
        "ANGER · a bust",
        "has been a bust · it stinks",
        ["My birthday this year was a bust — half my friends were ill."],
        "Your turn: something you planned that was a total bust."
      ),
    ],
    starters: [
      "I get really jumpy when…",
      "I don't want to hear about… anymore.",
      "What I miss most from… is…",
      "It could be worse — at least…",
      "Honestly, … has been a bust.",
    ],
    questions: [
      q("lexis", "«It could be worse.» When does this phrase help — and when does it feel like nobody understands you?", [
        "It helps when the problem is small.",
        "When I'm really sad it sounds like «stop complaining».",
        "Better first say «That sounds hard.»",
      ]),
      q("personal", "FEAR · When was the last time you felt really nervous or jumpy? Go deeper: What were you afraid would happen? Did it happen? What do you do to calm your nerves?", [
        "Before a big test.",
        "I thought I'd forget everything — I didn't.",
        "Deep breaths / music / talking to someone.",
      ]),
      q("personal", "DISGUST · «I don't want to hear about nerves.» Have you ever told someone «I don't want to hear about it» — or had someone say it to you? Go deeper: Why do people push away other people's feelings? How does it feel to be pushed away?", [
        "My brother told me to stop talking about my problem.",
        "Maybe they don't know how to help.",
        "It feels lonely.",
      ]),
      q("personal", "SADNESS · «My friends are back home.» Have you ever lost a friend — because of moving, changing school or an argument? Go deeper: Can friendships survive distance? What keeps a friendship alive?", [
        "My best friend moved to another country.",
        "We text every day but it's not the same.",
        "Honesty and time together keep a friendship alive.",
      ]),
      q("personal", "ANGER · «This move has been a bust.» When did everything seem to go wrong at once? Go deeper: When everything goes wrong, do you get angry, sad or do you laugh? Which reaction helps most?", [
        "Last Monday: late, forgot homework, rain.",
        "I got angry, then I laughed.",
        "Laughing helps — anger just makes it worse.",
      ]),
      q("episode", "All five emotions talk at the same time. When do you feel many emotions at once? Is it confusing — or normal?", [
        "On the first day of school: excited and scared.",
        "At the end of the year: happy and sad.",
        "I think it's normal — people are complicated.",
      ]),
    ],
  };
  TEEN.stickers.s01e06 = [
    { phrase: "I saw a really hairy guy. I'm so jumpy. My nerves are shut.", use: "Exams next week — I'm so jumpy, my nerves are shot." },
    { phrase: "all of our stuff is in the missing van.", use: "All my stuff is in my locker — and I lost the key!" },
    { phrase: "I don't want to hear about nerves.", use: "I don't want to hear about the test anymore." },
    { phrase: "We could be lying on a dirty floor. In a bag.", use: "We could be sleeping on the airport floor. In a bag." },
    { phrase: "my friends are back home.", use: "Camp is fun, but my friends are back home." },
    { phrase: "Guys, we've been through worse.", use: "Relax, guys — we've been through worse." },
    { phrase: "it could be worse.", use: "It could be worse — at least it's Friday." },
    { phrase: "this move has been a bust.", use: "Honestly, this weekend has been a bust." },
  ];

  /* ============ BIT · LET US HANDLE THIS ============ */
  TEEN.bits.s01e07 = {
    examples: [
      "I say we skip the party and watch films at home.",
      "I have nothing to wear — no one should see me like this!",
      "That film was so sad, I cried until I couldn't breathe.",
      "I was so angry I screamed into my pillow.",
      "Let me handle this.",
    ],
    drills: [
      drill(
        "PROPOSING A PLAN",
        "I say we… · We should… · We could… · Let us handle this",
        "Problem: you forgot your best friend's birthday. Each emotion proposes a plan with a different pattern. Which plan is best?"
      ),
      drill(
        "GAME · Worst plan wins",
        "I say we skip… · lock ourselves in… · we could cry until… · scream",
        "Teacher gives a problem (bad mark, fight with a friend). Groups invent the WORST emotional plan. Then the BEST calm plan. Compare."
      ),
      drill(
        "GAME · Avoid or face it?",
        "skip · hide · avoid · face it · deal with it",
        "Teacher reads situations (a test, an awkward apology, a dentist visit). Students stand up = face it, sit = avoid. Explain why."
      ),
    ],
    items: [
      item(
        "FEAR · avoiding",
        "I say we skip… · lock ourselves in",
        ["Before my first swimming lesson I said: I say we stay home. My mum said no — and I loved it."],
        "Your turn: something you wanted to avoid. Did you avoid it or face it?"
      ),
      item(
        "DISGUST · appearance",
        "no one should see us · I have nothing to wear",
        ["On picture day I had a huge spot. I thought: no one should see me today."],
        "Your turn: a day you didn't want anyone to see you. Why?"
      ),
      item(
        "ANGER · letting it out",
        "scream · lock the door · let it out",
        ["When I'm really angry I go for a run instead of shouting."],
        "Your turn: what do you do with anger — hide it, shout, sport, music?"
      ),
    ],
    starters: [
      "I say we…",
      "The thing I always want to skip is…",
      "No one should see me when…",
      "When I'm angry, instead of shouting, I…",
      "The last time I cried was…",
    ],
    questions: [
      q("lexis", "«I say we…» sounds like a leader's idea. Who says «I say we…» in your friend group? Are you the one who makes plans or the one who follows?", [
        "My friend always decides.",
        "I usually follow — I don't like arguing.",
        "Sometimes I want to lead, but I'm shy.",
      ]),
      q("personal", "FEAR · «Skip school and lock ourselves in the bedroom.» When did you really want to hide from something? Go deeper: What were you scared of — failing, people, the unknown? Did hiding make it better or worse?", [
        "Before a speaking test.",
        "I was scared people would laugh at me.",
        "Hiding made it worse — the fear got bigger.",
      ]),
      q("personal", "DISGUST · «No one should see us.» Do you ever feel you must look perfect before you go out? Go deeper: Where does this pressure come from — social media, friends, yourself? Do other people notice as much as we think?", [
        "Yes, I check the mirror ten times.",
        "Instagram makes everyone look perfect.",
        "People are too busy thinking about themselves.",
      ]),
      q("personal", "SADNESS · «Cry until we can't breathe.» When was the last time you cried? Go deeper: Is crying weak or strong? Is it different for boys and girls where you live? How do you feel after crying?", [
        "When my pet died.",
        "I think crying is brave — you show your feelings.",
        "People say boys shouldn't cry — I think that's wrong.",
        "After crying I feel lighter.",
      ]),
      q("personal", "ANGER · «Lock the door and scream.» When you get really angry, what do you do? Go deeper: Is it better to show anger or hide it? What's a safe way to let anger out?", [
        "I slam the door — then I feel bad.",
        "Hiding it makes it explode later.",
        "Sport, drawing, a pillow, talking later when calm.",
      ]),
      q("episode", "Every emotion has a plan to «handle» the first day, and none of them are good. Why is it dangerous when only ONE emotion is in control?", [
        "You don't see the whole picture.",
        "Fear alone makes you hide from everything.",
        "You need all emotions working together.",
      ]),
    ],
  };
  TEEN.stickers.s01e07 = [
    { phrase: "I say we skip school tomorrow and lock ourselves in the bedroom.", use: "I say we skip the party and watch films at home." },
    { phrase: "We have no clean clothes. I mean, no one should see us.", use: "I have nothing to wear — no one should see me like this!" },
    { phrase: "Yeah, we could cry until we can't breathe.", use: "That film was so sad — I cried until I couldn't breathe." },
    { phrase: "We should lock the door and scream that curse word we know.", use: "I was so angry I screamed into my pillow." },
  ];

  /* ============ BIT · FIRST DAY AT SCHOOL ============ */
  TEEN.bits.s01e08 = {
    examples: [
      "Does anyone know how to spell «necessary»?!",
      "I want to stand out and also blend in — is that possible?",
      "They look fun — we want to be friends with them.",
      "Two girls whispering and looking at me — they're judging me!",
      "Are you kidding me? A test on the first day? Right out of the gate!",
      "Oh no, I'm crying at school — everyone can see!",
    ],
    drills: [
      drill(
        "STAND OUT · BLEND IN",
        "stand out · blend in · fit in · be yourself · follow the crowd",
        "Sort: clothes, hair, opinions, music taste. Where do you want to stand out, where do you want to blend in?"
      ),
      drill(
        "GAME · Subtle detective",
        "They're judging us · whispering · they're looking at us",
        "One student acts «whispering» with a partner. The class invents three stories: one scary (Fear), one real, one funny. Which is most likely?"
      ),
      drill(
        "GAME · Spelling panic",
        "Does anyone know how to spell…? · Are you kidding me?",
        "Teacher calls hard words (meteor, necessary, rhythm, embarrass). Students spell on the board under time pressure and react in character: «Are you kidding me?!»"
      ),
      drill(
        "DRILL · First-day survival",
        "Out of the gate · right from the start · pretend we can't…",
        "Give three bad «Fear plans» for a first day (pretend you can't speak English…) and three good ones."
      ),
    ],
    items: [
      item(
        "FIRST DAY",
        "right out of the gate · are you kidding me?",
        ["On my first day at the new school, the teacher asked me to introduce myself — right out of the gate! Are you kidding me?"],
        "Your turn: your first day somewhere new — school, club, camp. How did it go?"
      ),
      item(
        "FITTING IN",
        "stand out and blend in · we want to be friends with them",
        ["In year 5 I wanted to be friends with the football group, so I pretended I liked football."],
        "Your turn: did you ever change something about yourself to fit in?"
      ),
      item(
        "JUDGED",
        "They're judging us · whispering",
        ["I thought two girls were laughing at my shoes. Later I found out they were laughing at a video."],
        "Your turn: a time you thought people were judging you. Were they?"
      ),
    ],
    starters: [
      "On my first day at… I felt…",
      "I want to stand out when it comes to…",
      "I usually blend in when…",
      "I felt judged when…",
      "Are you kidding me? — that's what I thought when…",
    ],
    questions: [
      q("lexis", "Disgust wants Riley to «stand out and also blend in». Is it possible to do both? How do people your age try to do both?", [
        "Same brand, different colour.",
        "Be different — but not TOO different.",
        "It's almost impossible, that's why it's stressful.",
      ]),
      q("personal", "FEAR · When was the last time you felt really anxious in front of other people — answering in class, reading aloud, a performance? Go deeper: What's the worst thing you imagined? What actually happened? What would you tell a younger kid in the same situation?", [
        "Reading aloud in English — I was sure I'd make mistakes.",
        "I made one mistake, nobody cared.",
        "I'd say: everyone is nervous, not only you.",
      ]),
      q("personal", "BELONGING · «We want to be friends with them.» Have you ever wanted to be part of a group so much that you changed yourself? Go deeper: Is it OK to change a little to fit in? When does it become losing yourself?", [
        "I started listening to music I didn't like.",
        "A little is normal — we all adapt.",
        "It's too much when you feel fake all the time.",
      ]),
      q("personal", "JUDGEMENT · «Cool kids whispering. They're judging us.» Why do we think people are talking about us? Go deeper: How much time do people really spend thinking about us? Have YOU ever judged someone on the first day — and been wrong?", [
        "Because we feel insecure.",
        "Actually, people mostly think about themselves.",
        "Yes — I thought a girl was arrogant, now she's my best friend.",
      ]),
      q("personal", "SADNESS · «Oh no! We're crying at school.» Have you ever cried or almost cried in public? Go deeper: What did people do? What would you want people to do if you cried at school?", [
        "After a bad mark I cried in the toilet.",
        "One friend came and just sat with me.",
        "Don't make a big deal — just be kind.",
      ]),
      q("episode", "Riley cries in front of the class, and everything goes wrong. What could the teacher or the other kids have done to help her?", [
        "Say «Take your time.»",
        "Talk to her after class.",
        "Tell her they also moved once.",
      ]),
    ],
  };
  TEEN.stickers.s01e08 = [
    { phrase: 'Fear - Does anyone know how to spell "meteor"', use: "Does anyone know how to spell «necessary»?!" },
    { phrase: "Disgust:  make sure, Riley stands out today and also blends in.", use: "I want to stand out and also blend in — classic." },
    { phrase: "Yeah, we want to be friends with them.", use: "They look fun — we want to be friends with them." },
    { phrase: "Cool kids whispering. They're judging us.", use: "Two girls whispering in the corridor — they're judging me!" },
    { phrase: "Fear - are you kidding me? Out of the gate. Pretend, we can't speak English.", use: "A test on day one? Are you kidding me? Right out of the gate!" },
    { phrase: "oh, no! we're crying at school.", use: "Oh no — I'm crying at school, everyone can see!" },
  ];

  /* ============ BIT · PARENTAL CONCERN ============ */
  TEEN.bits.s01e09 = {
    examples: [
      "Did you pick up on that? She didn't say hi to anyone.",
      "Something's wrong — he hasn't said a word all day.",
      "Should we ask her, or leave her alone?",
      "Let's probe, but keep it subtle so she doesn't notice.",
      "Something is definitely going on between those two.",
      "It's so strange — he's never acted like this before.",
      "I gave my brother a signal: help me with Mum!",
    ],
    drills: [
      drill(
        "NOTICING",
        "pick up on · notice · something's wrong · something is definitely going on",
        "Teacher mimes a mood (sad, angry, excited). Students guess: «Did you pick up on that? Something's wrong — she…»"
      ),
      drill(
        "GAME · Subtle or not?",
        "Let's probe · keep it subtle · Is everything OK? · How was your day?",
        "A is a «parent», B is a teen with a secret. A asks questions subtly; B answers with short replies. Class scores A: subtle or super obvious?"
      ),
      drill(
        "GAME · Secret signal",
        "Signal the ___ · give someone a signal · we'll need support",
        "Pairs invent a secret signal (a cough, a look). While talking to the class, they must use it and «call for support» without anyone noticing."
      ),
    ],
    items: [
      item(
        "PARENTS NOTICE",
        "Did you pick up on that? · Something's wrong",
        ["My mum always knows when something's wrong — even when I say «I'm fine»."],
        "Your turn: a time your parents noticed something before you told them."
      ),
      item(
        "SUBTLE QUESTIONS",
        "probe · keep it subtle",
        ["My dad asks «So… how's everyone at school?» — and I know he wants to know about my friend problem."],
        "Your turn: how do your parents try to get information from you? Does it work?"
      ),
      item(
        "SUPPORT",
        "We'll need support · signal",
        ["When my mum is angry, I signal my sister to help me change the topic."],
        "Your turn: who is your «support» at home or at school?"
      ),
    ],
    starters: [
      "My parents can always tell when…",
      "When something's wrong, I usually…",
      "The worst question parents can ask is…",
      "I'd rather people ask me directly / leave me alone because…",
      "My support person is…",
    ],
    questions: [
      q("lexis", "«Let's probe. But keep it subtle.» What does «subtle» mean? Are parents good at being subtle? Give an example of a very NOT subtle question.", [
        "Subtle = careful, not obvious.",
        "My mum is not subtle at all.",
        "Not subtle: «Are you in love?!» at dinner.",
      ]),
      q("personal", "NOTICING · When something is wrong with you, do people notice? Go deeper: Do you WANT people to notice — or to leave you alone? What's the difference between caring and controlling?", [
        "My best friend notices immediately.",
        "I want them to notice but not to ask a hundred questions.",
        "Caring = asking once and waiting; controlling = pushing.",
      ]),
      q("personal", "TALKING · «Should we ask her?» When you have a problem, is it easier to talk to parents, friends, a teacher — or nobody? Go deeper: Why? What makes an adult easy or hard to talk to?", [
        "Friends — they understand me.",
        "My mum listens without judging.",
        "It's hard when adults get angry or give a lecture.",
      ]),
      q("personal", "CHANGE · «She's never acted like this before.» Teenagers change a lot. Have you changed in the last two years? Go deeper: What do your parents not understand about how you've changed? What do you wish they knew?", [
        "I need more privacy now.",
        "I don't want to talk right after school.",
        "I wish they knew I still love them, even when I'm quiet.",
      ]),
      q("episode", "Mom sees that something's wrong but chooses to be subtle, and it doesn't work. What should parents do when their teenager is upset? Give them three tips.", [
        "Don't ask at dinner in front of everyone.",
        "Choose a calm moment, like in the car.",
        "Say «I'm here when you want to talk» — and wait.",
      ]),
    ],
  };
  TEEN.stickers.s01e09 = [
    { phrase: "Mom: Did you guys pick up on that?", use: "Did you pick up on that? She didn't say hi to anyone." },
    { phrase: "Something's wrong!", use: "Something's wrong — he hasn't said a word all day." },
    { phrase: "Let's probe. But keep it subtle so she doesn't notice.", use: "Let's ask her — but keep it subtle." },
    { phrase: "Something is definitely going on.", use: "Something is definitely going on between those two." },
    { phrase: "She's never acted like this before.", use: "It's so strange — he's never acted like this before." },
    { phrase: "Signal the husband.", use: "I gave my brother the signal: help me!" },
  ];

  /* ============ BIT · FAMILY TENSION ============ */
  TEEN.bits.s01e10 = {
    examples: [
      "Sorry, I wasn't listening — what did you say?",
      "I'm telling Dad about my problem and he asks: «Is it garbage night?»",
      "My brother is making that annoying face again. I could strangle him! (just an expression)",
      "School was great, all right? Can I go now?",
      "She just rolled her eyes at me. What's her deal?",
      "What's your problem? — Just leave me alone!",
      "That's it. Phone off. Now.",
      "Well, that dinner was a disaster.",
    ],
    drills: [
      drill(
        "NOT LISTENING",
        "Sorry, no one was listening · I was miles away · Can you say that again?",
        "A tells a story; B looks at a phone. After 10 seconds B must apologise with a tape line and repeat what A said. Swap."
      ),
      drill(
        "GAME · Rewind the fight",
        "What's your problem? · Just leave me alone · I don't like this new attitude · Go to your room",
        "Act the dinner fight in 4 lines. Then REWIND: replay the same scene calmly (I feel…, Can we talk later?, I need a minute). Which version felt better?"
      ),
      drill(
        "GAME · «Great, all right?» detector",
        "School was great, all right? · Fine. · Whatever.",
        "Students say «It was great» / «Fine» in different voices. The class guesses: really great, tired, sad, or angry?"
      ),
      drill(
        "DRILL · Disaster scale",
        "That could have been a disaster · That was a disaster · a total disaster · not a disaster",
        "Rate situations (burnt toast, lost phone, forgot mum's birthday) on a disaster scale from 1 to 10 and explain."
      ),
    ],
    items: [
      item(
        "NOT LISTENING",
        "no one was listening · I was miles away",
        ["I told my dad something important and he said «Mmm, nice». I felt like no one was listening."],
        "Your turn: a time you felt nobody was listening to you. How did you react?"
      ),
      item(
        "«GREAT, ALL RIGHT?»",
        "School was great, all right? · just leave me alone",
        ["After a terrible day I said «School was great, all right?» and went to my room."],
        "Your turn: when do you say «fine» or «great» but mean the opposite?"
      ),
      item(
        "FAMILY ARGUMENT",
        "What's your problem? · That was a disaster",
        ["We argued about my phone at dinner. Well, that was a disaster."],
        "Your turn: a family argument (not too personal!). How did it start — and how did it end?"
      ),
    ],
    starters: [
      "I feel nobody's listening when…",
      "When I say «fine», I usually mean…",
      "The thing that starts arguments in my family is…",
      "What I need after a bad day is…",
      "Next time I'd like to say… instead of…",
    ],
    questions: [
      q("lexis", "«School was great, all right?» Is this answer true? How do we know? Why do teenagers often answer «fine» or «great» when parents ask about school?", [
        "No — the voice is angry.",
        "Because we're tired and don't want to talk yet.",
        "Because the question comes at the wrong moment.",
      ]),
      q("personal", "NOT LISTENING · «Sorry, no one was listening.» When was the last time you felt nobody was listening to you? Go deeper: How did it make you feel? What do you do so people really listen?", [
        "At dinner everyone was on their phones.",
        "I felt invisible.",
        "I ask: «Can I have two minutes of your attention?»",
      ]),
      q("personal", "ANGER · Mom thinks «I could strangle him» but doesn't say it. When was the last time someone in your family really annoyed you? Go deeper: What exactly annoys you — words, faces, noises? Did you say it or keep it inside?", [
        "My sister chews so loudly!",
        "My dad's face when he doesn't believe me.",
        "I kept it inside and exploded later.",
      ]),
      q("personal", "EYE-ROLL · «She just rolled her eyes at us.» Do you roll your eyes? Go deeper: What are you really saying with an eye-roll? Why does it make adults SO angry?", [
        "Yes, when my parents repeat the same thing.",
        "It means «you don't understand me».",
        "Adults think it's disrespect.",
      ]),
      q("personal", "LEAVE ME ALONE · When you say «Just leave me alone», what do you really need? Go deeper: How can you ask for space without starting a fight? Let's practise a calmer sentence.", [
        "I need time to calm down.",
        "«I'm not angry with you, I just need 20 minutes.»",
        "«Can we talk after dinner?»",
      ]),
      q("episode", "Riley's parents' emotions shout «Go to your room!» and then say «Good job, that could have been a disaster». Why is this funny? What should everyone at the table have done differently?", [
        "It's ironic — it WAS a disaster.",
        "Dad should have listened.",
        "Riley could say «I had a bad day, can we talk later?»",
      ]),
    ],
  };
  TEEN.stickers.s01e10 = [
    { phrase: "She's looking at us. What did she say? Sorry, no one was listening.", use: "Sorry, I wasn't listening — what did you say?" },
    { phrase: "Is it garbage night?", use: "I'm telling a serious story and he asks: «Is it garbage night?»" },
    { phrase: "He's making that stupid face again. I could strangle him right now.", use: "My brother's making that face again — I could strangle him! (joke)" },
    { phrase: "School was great, all right?", use: "School was great, all right? Can I go now?" },
    { phrase: "Sir, she just rolled her eyes at us. What's her deal?", use: "She just rolled her eyes at me — what's her deal?" },
    { phrase: "Just leave me alone.", use: "Just leave me alone — I need twenty minutes." },
    { phrase: "That's it. Go to your room. now.", use: "That's it. Phone off. Now." },
    { phrase: "Well, that was a disaster.", use: "Well, that dinner was a disaster." },
  ];
})(typeof window !== "undefined" ? window : globalThis);
