/**
 * Inside Out · Season 1 — beats + PDF-style workbook panels per beat.
 */
(function (global) {
  var SF_CAR = "img/pdf/s1-p03-img01.png";
  var PIZZA_BANNER = "img/pdf/s1-p05-img01.png";

  function toneFromName(name) {
    var n = String(name || "").toLowerCase();
    if (n.indexOf("joy") !== -1) return "joy";
    if (n.indexOf("anger") !== -1) return "anger";
    if (n.indexOf("disgust") !== -1) return "disgust";
    if (n.indexOf("fear") !== -1) return "fear";
    if (n.indexOf("sadness") !== -1) return "sadness";
    if (n.indexOf("dad") !== -1) return "neutral";
    if (n.indexOf("mom") !== -1) return "anger";
    if (n.indexOf("riley") !== -1) return "sadness";
    return "neutral";
  }

  function speak(qs) {
    return {
      mission: "Use cool phrases from the workbook · 60–90 s turns.",
      questions: (qs || []).map(function (q) {
        return typeof q === "string" ? { q: q, kind: "personal" } : q;
      }),
    };
  }

  /** One emotion / bit block — PDF filled card (L1) or dark + split (L2). */
  function panelBeat(id, label, emotion, lines, watch, questions) {
    var cardStyle = watch.cardStyle || "filled";
    var tone = cardStyle === "bit" ? "bit" : toneFromName(emotion);
    return {
      id: id,
      label: label,
      teacher: "Workbook → tape → short talk.",
      blocks: ["watch", "speak"],
      phrases: lines.slice(),
      watch: {
        workbookTitle: watch.title || null,
        workbookLayout: watch.layout || "single",
        workbookSideImg: watch.sideImg || null,
        workbookCards: [
          {
            emotion: emotion,
            tone: tone,
            lines: lines,
            wide: !!watch.wide,
            style: cardStyle,
          },
        ],
      },
      speak: speak(questions),
    };
  }

  function bitBeat(id, label, bitTitle, lines, sideImg, lessonTitle, questions) {
    return panelBeat(
      id,
      label,
      bitTitle,
      lines,
      {
        title: lessonTitle,
        layout: sideImg ? "split" : "single",
        sideImg: sideImg,
        cardStyle: "bit",
      },
      questions
    );
  }

  global.INSIDEOUT_LESSONS = [
    {
      id: "s01e01",
      season: 1,
      num: 1,
      title: "Lesson 1 · Emotions basics",
      icon: "😊",
      tagline: "Joy · Anger · Disgust · Fear · Sadness",
      synopsis: "Inside Out: Basics — workbook p. 2.",
      beats: [
        panelBeat(
          "joy-basics",
          "Joy",
          "Joy",
          ["Isn't that great?", "Things couldn't be better"],
          { title: "Inside Out: Basics", layout: "single", cardStyle: "filled" },
          [
            "When does «Things couldn't be better» feel honest — and when is it denial?",
            "Who in your life sounds most like Joy?",
          ]
        ),
        panelBeat(
          "anger-basics",
          "Anger",
          "Anger",
          ["I'll show you my attitude, old man."],
          { layout: "single", cardStyle: "filled" },
          ["What everyday thing makes you want to «show attitude»?"]
        ),
        panelBeat(
          "disgust-basics",
          "Disgust",
          "Disgust",
          [
            "Caution, caution, there's a dangerous smell, people.",
            "I'm gonna be sick.",
          ],
          { layout: "single", cardStyle: "filled" },
          ["What smell or food instantly triggers your inner Disgust?"]
        ),
        panelBeat(
          "fear-basics",
          "Fear",
          "Fear",
          ["Look out! Sharp turn."],
          { layout: "single", cardStyle: "filled" },
          ["What do you shout when you warn someone in traffic or sport?"]
        ),
        panelBeat(
          "sadness-basics",
          "Sadness",
          "Sadness",
          ["He doesn't love us anymore."],
          { layout: "single", cardStyle: "filled" },
          [
            "Why might someone jump to «doesn't love us anymore»?",
            { q: "How do you talk someone down from that thought?", kind: "lexis" },
          ]
        ),
      ],
      finale: {
        prompt:
          "Five emotions argue about one small problem. Use at least 4 workbook lines.",
      },
      homework: { note: "Shadow 3–5 favourite lines · 3 takes." },
    },
    {
      id: "s01e02",
      season: 1,
      num: 2,
      title: "Lesson 2 · Moving to San Francisco",
      icon: "🚗",
      tagline: "Road trip · overreacting · the smelly car",
      synopsis: "PDF p. 3 · dark text + photo.",
      beats: [
        panelBeat(
          "sf-joy",
          "Joy · overreacting",
          "Joy",
          ["Guys, you're overreacting"],
          {
            title: "Lesson 2 - Moving to San Francisco",
            layout: "split",
            sideImg: SF_CAR,
            cardStyle: "dark",
          },
          ["When have you told someone they were overreacting?"]
        ),
        panelBeat(
          "sf-anger",
          "Anger · move it",
          "Anger",
          ["Get out of the street;", "Move it.", "Step on it, Daddy."],
          { layout: "split", sideImg: SF_CAR, cardStyle: "dark" },
          ["Is «Step on it» rude or normal in your culture?"]
        ),
        panelBeat(
          "sf-fear",
          "Fear · moving",
          "Fear",
          ["Can you die from moving?"],
          { layout: "split", sideImg: SF_CAR, cardStyle: "dark" },
          ["What's the most irrational fear during a big change?"]
        ),
        panelBeat(
          "sf-disgust",
          "Disgust · smelly car",
          "Disgust",
          [
            "Why don't we just live in this smelly car?",
            "It smells like something died in here",
          ],
          { layout: "split", sideImg: SF_CAR, cardStyle: "dark" },
          ["Describe a place that smelled so bad you wanted to escape."]
        ),
      ],
      finale: { prompt: "Improv: road trip — each emotion one workbook line." },
      homework: { note: "Shadow Anger + Disgust lines." },
    },
    {
      id: "s01e03",
      season: 1,
      num: 3,
      title: "Lesson 3 · New house",
      icon: "🏚️",
      tagline: "Empty room · rubber ball · dead mouse",
      synopsis: "PDF p. 4 · text on dark.",
      beats: [
        panelBeat(
          "house-joy",
          "Joy · opportunity",
          "Joy",
          [
            "It's nothing our butterfly curtains couldn't fix.",
            "I read somewhere that an empty room is an opportunity.",
          ],
          { title: "Lesson 3 - New House", layout: "single", cardStyle: "dark" },
          ["When has optimism helped in a new place — when did it backfire?"]
        ),
        panelBeat(
          "house-anger",
          "Anger · solitary",
          "Anger",
          ["Get off me! Get out the rubber ball.", "We're in solitary confinement."],
          { layout: "single", cardStyle: "dark" },
          ["What game or object saved you when you felt trapped?"]
        ),
        panelBeat(
          "house-fear",
          "Fear · rabies",
          "Fear",
          ["What are we gonna do? We are going to get rabies."],
          { layout: "single", cardStyle: "dark" },
          ["Tell a ridiculous «what if» fear in a new home."]
        ),
        panelBeat(
          "house-disgust",
          "Disgust · dead mouse",
          "Disgust",
          ["I'm starting to envy the dead mouse."],
          { layout: "single", cardStyle: "dark" },
          [{ q: "What does «envy the dead mouse» mean emotionally?", kind: "episode" }]
        ),
        panelBeat(
          "house-sadness",
          "Sadness · can't live here",
          "Sadness",
          ["Riley can't live here."],
          { layout: "single", cardStyle: "dark" },
          ["When have you felt «I can't live here» without saying it?"]
        ),
      ],
      finale: { prompt: "Tour a terrible rental — one line per emotion." },
      homework: { note: "Shadow Joy + Sadness lines." },
    },
    {
      id: "s01e04",
      season: 1,
      num: 4,
      title: "Lesson 4 · Pizza adventure",
      icon: "🍕",
      tagline: "Broccoli pizza · favourite parts",
      synopsis: "PDF p. 5.",
      beats: [
        bitBeat(
          "pizza-1-discovery",
          "Bit 1 · Pizza discovery",
          "Bit 1 · Pizza Discovery",
          [
            "I saw a pizza place down the street.  Maybe we could try that?",
            "Pizza sounds delicious.",
            "What the heck is that? Who puts broccoli on pizza?",
          ],
          PIZZA_BANNER,
          "Pizza Adventure and Favorite Moments",
          ["When did a «local speciality» disappoint you?"]
        ),
        bitBeat(
          "pizza-2-anger",
          "Bit 2 · Anger's reaction",
          "Bit 2 · Anger's Reaction",
          [
            "Congratulations,  San Fransisco, you ruined pizza.",
            "Maybe, it's a San Francisco thing.",
          ],
          PIZZA_BANNER,
          null,
          [{ q: "Why «Congratulations, city, you ruined X» is funny.", kind: "lexis" }]
        ),
        bitBeat(
          "pizza-3-dad",
          "Bit 3 · Dad's resilience",
          "Bit 3 · Dad's Resilience",
          ["My Dad's got a steel stomach."],
          null,
          null,
          ["Who in your family eats anything — who is picky?"]
        ),
        bitBeat(
          "pizza-4-favourites",
          "Bit 4 · Favourite parts",
          "Bit 4 · Favorite Parts",
          [
            "What was your favourite part?",
            "Spitting out of the car window",
            "wearing a seat belt",
            "definitely not when Dad was singing.",
          ],
          null,
          null,
          ["What was your favourite part of your last trip — honestly?"]
        ),
      ],
      finale: { prompt: "Debate family dinner — Anger + Disgust lines." },
      homework: { note: "Shadow the broccoli pizza reaction." },
    },
    {
      id: "s01e05",
      season: 1,
      num: 5,
      title: "Lesson 5 · Sadness vs Joy",
      icon: "💧",
      tagline: "Breakdown · think funny · droopy",
      synopsis: "PDF · The Contrast of Sadness and Joy.",
      beats: [
        panelBeat(
          "s2-sadness-spiral",
          "Sadness · breakdown",
          "Sadness",
          [
            "Something's wrong with me.",
            "It's like I'm having a breakdown.",
            "I keep making mistakes like that.",
            "I'm awful and annoying.",
          ],
          {
            title: "The Contrast of Sadness and Joy",
            layout: "split",
            sideImg: "img/pdf/s2pdf-p02-img01.png",
            cardStyle: "dark",
          },
          ["When does negative self-talk sound like Sadness?"]
        ),
        panelBeat(
          "s2-joy-fix",
          "Joy · think funny",
          "Joy",
          ["Try to think of something funny."],
          {
            layout: "split",
            sideImg: "img/pdf/s2pdf-p02-img01.png",
            cardStyle: "dark",
          },
          ["Does «think of something funny» help — or annoy you more?"]
        ),
        panelBeat(
          "s2-milk-nose",
          "Joy · milk nose",
          "Joy",
          ["Riley laughed so hard milk came out of her nose."],
          { layout: "single", cardStyle: "filled" },
          ["Share a memory that always makes you laugh physically."]
        ),
        panelBeat(
          "s2-rain-sad",
          "Sadness · rain",
          "Sadness",
          [
            "Yes, that hurt, that felt like fire.",
            "Rain runs down our back and makes our shoes soggy and we get all cold, shivery.",
            "Everything just starts feeling droopy.",
          ],
          { layout: "single", cardStyle: "dark" },
          [{ q: "What does «droopy» describe in mood?", kind: "lexis" }]
        ),
        panelBeat(
          "s2-puddles-joy",
          "Joy · puddles",
          "Joy",
          ["You can stomp around in puddles.", "Cool umbrellas, lightning storms."],
          { layout: "single", cardStyle: "filled" },
          ["Joy vs Sadness: same rain, two stories — tell both for your city."]
        ),
      ],
      finale: { prompt: "Pair talk: one Joy, one Sadness — same bad Monday." },
      homework: { note: "Shadow one Sadness + one Joy line." },
    },
    {
      id: "s01e06",
      season: 1,
      num: 6,
      title: "Lesson 6 · Chorus of emotions",
      icon: "🎭",
      tagline: "Missing van · jumpy · bust",
      synopsis: "PDF · A Chorus of Emotions.",
      beats: [
        bitBeat(
          "chorus-1-fear",
          "Bit 1 · Fear",
          "1 · Fear",
          [
            "I saw a really hairy guy. I'm so jumpy. My nerves are shut.",
            "all of our stuff is in the missing van.",
          ],
          null,
          "A Chorus of Emotions",
          ["What makes you «jumpy» in a new neighbourhood?"]
        ),
        bitBeat(
          "chorus-2-disgust",
          "Bit 2 · Disgust",
          "2 · Disgust",
          [
            "I don't want to hear about nerves.",
            "Disgust - pizza is weird here.",
            "We could be lying on a dirty floor. In a bag.",
          ],
          null,
          null,
          ["Describe a «dirty floor in a bag» travel moment."]
        ),
        bitBeat(
          "chorus-3-sadness",
          "Bit 3 · Sadness",
          "3 · Sadness",
          ["my friends are back home."],
          null,
          null,
          ["How long until you felt «at home» after a move?"]
        ),
        bitBeat(
          "chorus-4-joy",
          "Bit 4 · Joy's optimism",
          "4 · Joy's Optimism",
          ["Guys, we've been through worse.", "it could be worse."],
          null,
          null,
          ["Is «it could be worse» comforting or dismissive?"]
        ),
        bitBeat(
          "chorus-5-anger",
          "Bit 5 · Anger",
          "5 · Anger",
          ["this move has been a bust.", "My house stinks. my room stinks."],
          null,
          null,
          [{ q: "What does «bust» mean for a move?", kind: "lexis" }]
        ),
      ],
      finale: { prompt: "Each emotion complains about your room — one line each." },
      homework: { note: "Shadow Anger «bust» lines." },
    },
    {
      id: "s01e07",
      season: 1,
      num: 7,
      title: "Lesson 7 · Let us handle this",
      icon: "🚪",
      tagline: "Skip school · curse word",
      synopsis: "PDF p. 5 · emotion plans.",
      beats: [
        panelBeat(
          "handle-fear",
          "Fear's solution",
          "Fear's Solution",
          ["I say we skip school tomorrow and lock ourselves in the bedroom."],
          { title: "Let us handle this", layout: "split", sideImg: "img/pdf/s2pdf-p05-img01.png", cardStyle: "dark" },
          ["Your childhood version of «skip school and hide»?"]
        ),
        panelBeat(
          "handle-disgust",
          "Disgust's concern",
          "Disgust's Concern",
          ["We have no clean clothes. I mean, no one should see us."],
          { layout: "single", cardStyle: "dark" },
          ["When did you refuse to go out because of appearance?"]
        ),
        panelBeat(
          "handle-sadness",
          "Sadness' reaction",
          "Sadness' Reaction",
          ["Yeah, we could cry until we can't breathe."],
          { layout: "single", cardStyle: "dark" },
          ["Is crying until you can't breathe release — or scary?"]
        ),
        panelBeat(
          "handle-anger",
          "Anger's outburst",
          "Anger's Outburst",
          ["We should lock the door and scream that curse word we know."],
          { layout: "single", cardStyle: "filled" },
          ["What do people do instead of screaming curse words?"]
        ),
      ],
      finale: { prompt: "Vote: worst plan wins — improv the morning after." },
      homework: { note: "Shadow one emotion's plan as a monologue." },
    },
    {
      id: "s01e08",
      season: 1,
      num: 8,
      title: "Lesson 8 · First day at school",
      icon: "🏫",
      tagline: "Meteor · blend in · panic",
      synopsis: "PDF · First Day at School.",
      beats: [
        bitBeat(
          "school-1-spelling",
          "Bit 1 · Spelling anxiety",
          "1 · Spelling Anxiety",
          ['Fear - Does anyone know how to spell "meteor"'],
          "img/pdf/s2pdf-p06-img01.png",
          "First Day at School",
          ["What word do you always freeze on when spelling aloud?"]
        ),
        bitBeat(
          "school-2-fitting",
          "Bit 2 · Fitting in",
          "2 · Fitting In",
          [
            "Disgust:  make sure, Riley stands out today and also blends in.",
            "Double ears pierced, infinity scarf.",
            "Yeah, we want to be friends with them.",
          ],
          null,
          null,
          ["How do you «stand out and also blends in»?"]
        ),
        bitBeat(
          "school-3-pressure",
          "Bit 3 · Social pressure",
          "3 · Social Pressure",
          ["Cool kids whispering. They're judging us."],
          null,
          null,
          ["A «they're judging us» moment — real or imagined."]
        ),
        bitBeat(
          "school-4-panic",
          "Bit 4 · Panic mode",
          "4 · Panic Mode",
          [
            "Fear - are you kidding me? Out of the gate. Pretend, we can't speak English.",
            "oh, no! we're crying at school.",
          ],
          null,
          null,
          ["Have you ever wanted to disappear on a first day?"]
        ),
      ],
      finale: { prompt: "First-day improv: Fear + Disgust run the show." },
      homework: { note: "Shadow «stand out and also blends in»." },
    },
    {
      id: "s01e09",
      season: 1,
      num: 9,
      title: "Lesson 9 · Parental concern",
      icon: "👀",
      tagline: "Probe subtly · signal the husband",
      synopsis: "PDF · Parental Concern.",
      beats: [
        bitBeat(
          "parent-1-observe",
          "Bit 1 · Mom's observation",
          "1 · Mom's Observation",
          [
            "Mom: Did you guys pick up on that?",
            "Something's wrong!",
            "Should we ask her?",
            "Let's probe. But keep it subtle so she doesn't notice.",
          ],
          "img/pdf/s2pdf-p07-img01.png",
          "Parental Concern",
          [{ q: "«Probe» vs «ask directly» — tone difference?", kind: "lexis" }]
        ),
        bitBeat(
          "parent-2-worry",
          "Bit 2 · Escalating worry",
          "2 · Escalating Worry",
          [
            "Something is definitely going on.",
            "She's never acted like this before.",
          ],
          null,
          null,
          ["When did your parents notice something before you told them?"]
        ),
        bitBeat(
          "parent-3-support",
          "Bit 3 · Seeking support",
          "3 · Seeking Support",
          ["We'll need support.", "Signal the husband."],
          null,
          null,
          ["How do parents «signal» each other in your family?"]
        ),
      ],
      finale: { prompt: "Two parents try to be subtle — Riley feels every question." },
      homework: { note: "Shadow «keep it subtle»." },
    },
    {
      id: "s01e10",
      season: 1,
      num: 10,
      title: "Lesson 10 · Family tension",
      icon: "⚡",
      tagline: "Garbage night · disaster",
      synopsis: "PDF · Family Tension Escalates.",
      beats: [
        panelBeat(
          "family-dad",
          "Dad · not listening",
          "Dad",
          [
            "She's looking at us. What did she say? Sorry, no one was listening.",
            "Is it garbage night?",
          ],
          {
            title: "Family Tension Escalates",
            layout: "split",
            sideImg: "img/pdf/s2pdf-p08-img01.png",
            cardStyle: "dark",
          },
          ["When does «Is it garbage night?» capture dad energy?"]
        ),
        panelBeat(
          "family-mom",
          "Mom · strangle",
          "Mom",
          ["He's making that stupid face again. I could strangle him right now."],
          { layout: "single", cardStyle: "dark" },
          ["Hyperbolic anger you think but don't say."]
        ),
        panelBeat(
          "family-riley",
          "Riley · great school",
          "Riley",
          ["School was great, all right?"],
          { layout: "single", cardStyle: "dark" },
          ["When do you answer «great» while meaning the opposite?"]
        ),
        panelBeat(
          "family-eyes",
          "Conflict · eye-roll",
          "Conflict",
          [
            "Sir, she just rolled her eyes at us. What's her deal?",
            "Riley, I do not like this new attitude.",
            "What's your problem?",
            "Just leave me alone.",
          ],
          { layout: "single", cardStyle: "dark" },
          ["Is eye-rolling disrespect — or honest body language?"]
        ),
        panelBeat(
          "family-escalation",
          "Escalation · aftermath",
          "Escalation",
          [
            "Listen, young lady, I don't know where this disrespectful attitude came from.",
            "That's it. Go to your room. now.",
            "Good job, gentlemen. That could have been a disaster.",
            "Well, that was a disaster.",
          ],
          { layout: "single", cardStyle: "filled" },
          [
            { q: "Why is «Good job, gentlemen» ironic?", kind: "episode" },
            "A family dinner that was «a disaster».",
          ]
        ),
      ],
      finale: {
        prompt: "Replay the dinner calmer — use «disaster» and «leave me alone» once.",
      },
      homework: { note: "Shadow Dad + Mom · finish Season 1." },
    },
  ];
})(typeof window !== "undefined" ? window : globalThis);
