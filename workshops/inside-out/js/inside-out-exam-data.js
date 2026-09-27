/**
 * Inside Out · Exam mode data (per bit = one PDF section).
 * Formats: phrase roulette · interview · monologue · photo long turn · collaborative task.
 * Phrases on the rail come from the bit tape (workbook lines verbatim).
 */
(function (global) {
  var EX = "img/exam/";

  /** Matched cinematic photo pairs for Photo long turn (one pair per PDF bit). */
  function photoPair(bitId, labels, task, follow) {
    return {
      imgs: [EX + "exam-" + bitId + "-a.png", EX + "exam-" + bitId + "-b.png"],
      labels: labels,
      task: task,
      follow: follow,
    };
  }

  var EXAM = (global.INSIDEOUT_EXAM_DATA = global.INSIDEOUT_EXAM_DATA || {});

  EXAM.s01e01 = {
    interview: [
      { q: "What's the best thing that happened to you this week?", phrase: "Things couldn't be better" },
      { q: "Tell me about a time someone didn't believe you could do something.", phrase: "I'll show you" },
      { q: "What food or smell can you not stand?", phrase: "I'm gonna be sick." },
      { q: "When do you have to warn someone about danger?", phrase: "Look out!" },
      { q: "When did you think someone didn't like you anymore?", phrase: "He doesn't love us anymore." },
      { q: "Which emotion is the strongest in you — and why?", phrase: "Isn't that great?" },
    ],
    mono: {
      topic: "The emotion that runs my head",
      plan: [
        "which emotion is the «boss» in your head most days",
        "a real situation when this emotion took control",
        "which emotion you'd like to give more power — and why",
      ],
      model:
        "I think Fear is the boss in my head most days. Before every test my brain shouts «Look out! Sharp turn!» even when there's no danger. Last month, for example, I had to read a poem in front of the class. My hands were shaking and I honestly thought «I'm gonna be sick.» But when I finished, everyone clapped, and I thought: isn't that great? So I'd like to give Joy more power. When Joy drives, I try new things, and sometimes things couldn't be better.",
    },
    photo: photoPair(
      "s01e01",
      ["Happy · with friends", "Sad · alone"],
      "Compare the two pictures. How is the girl feeling in each one? What might have happened?",
      "Which picture is closer to you today — and why?"
    ),
    collab: {
      question: "Which emotion is the most useful for a teenager?",
      options: ["Joy", "Anger", "Disgust", "Fear", "Sadness"],
    },
  };

  EXAM.s01e01b = {
    interview: [
      { q: "What is a core memory from your childhood?", phrase: "core memories" },
      { q: "Which «island» describes you best?", phrase: "Goofball Island" },
      { q: "What super important time changed you?", phrase: "super important time" },
      { q: "What makes you, you?", phrase: "what make Riley, Riley" },
    ],
    mono: {
      topic: "Core memories and my personality islands",
      plan: [
        "one core memory",
        "which island it powers",
        "one more island that defines you now",
      ],
      model:
        "These are my memories from childhood — mostly happy, like Joy says. One core memory is the day I moved schools; it came from a super important time. That memory powers Friendship Island — I learned to make new friends fast. Goofball Island is my personal favorite when I'm with my cousins. The islands of personality are what make me, me.",
    },
    photo: photoPair(
      "s01e01",
      ["Happy memory · with friends", "Quiet memory · alone"],
      "Compare the two pictures. Which feels more like a «core memory»? Why?",
      "Which picture is closer to you today — and which «island» does it power?"
    ),
    collab: {
      question: "What links memories and personality best?",
      options: ["core memories", "family", "friends", "sport", "honesty"],
    },
  };

  EXAM.s01e02 = {
    interview: [
      { q: "When did someone tell you that you were overreacting?", phrase: "you're overreacting" },
      { q: "When do you get impatient?", phrase: "Move it." },
      { q: "What's the longest trip you've ever taken by car?", phrase: "Step on it" },
      { q: "What's the biggest change in your life so far?", phrase: "Can you die from moving?" },
      { q: "Describe the worst smell you remember.", phrase: "It smells like something died in here" },
      { q: "Would you like to move to another city? Why / why not?", phrase: "Why don't we just live in this smelly car?" },
    ],
    mono: {
      topic: "A big change in my life",
      plan: [
        "what changed (new school, new home, new class…)",
        "how different emotions reacted at first",
        "how you feel about it now",
      ],
      model:
        "The biggest change in my life was when I moved to a new school last year. At first my Fear was screaming: «Can you die from moving?» I didn't know anyone and the building smelled like paint — honestly, it smelled like something died in there. My mum kept saying «You're overreacting», and I was angry because she didn't understand. But after two months I found two good friends and a great basketball team. Now I think changes are scary, but they can also be good.",
    },
    photo: photoPair(
      "s01e02",
      ["Hope · new city", "Worry · in the car"],
      "Compare the two pictures. What feelings can a big move bring? Why?",
      "What would scare you most about moving to a new city?"
    ),
    collab: {
      question: "What makes a long family car trip better?",
      options: ["music", "snacks", "games", "phones", "stopping often"],
    },
  };

  EXAM.s01e03 = {
    interview: [
      { q: "What makes a room feel like YOUR room?", phrase: "an empty room is an opportunity" },
      { q: "When did you feel bored or trapped?", phrase: "We're in solitary confinement." },
      { q: "What small problem did you once imagine as a disaster?", phrase: "What are we gonna do?" },
      { q: "What would you change in your home if you could?", phrase: "It's nothing our butterfly curtains couldn't fix." },
      { q: "When do you need space from your family?", phrase: "Get off me!" },
      { q: "Where do you feel most at home?", phrase: "Riley can't live here." },
    ],
    mono: {
      topic: "What makes a place feel like home",
      plan: [
        "the place where you feel most at home",
        "a place that did NOT feel like home at first",
        "what you need to feel at home anywhere",
      ],
      model:
        "The place where I feel most at home is my grandma's flat. It smells like pancakes and nobody rushes me. But the first time we went to a summer camp, I thought «I can't live here». The room was tiny, and my friend said «We're in solitary confinement!» Then Joy took over: I read somewhere that an empty room is an opportunity, so we put up posters and fairy lights. By the end it felt like home. So I think home isn't a building — it's people and your own little things.",
    },
    photo: photoPair(
      "s01e03",
      ["Bright empty room", "Dark · unwelcoming room"],
      "Compare the two rooms. Which feels like a new start — and which feels impossible to live in?",
      "What makes a place feel like home for you?"
    ),
    collab: {
      question: "What's the most important thing to make a new room feel like home?",
      options: ["your own bed", "posters and photos", "a pet", "good Wi-Fi", "friends visiting"],
    },
  };

  EXAM.s01e04 = {
    interview: [
      { q: "What's the strangest food you've ever tried?", phrase: "What the heck is that?" },
      { q: "Suggest a place for a Friday night out with friends.", phrase: "Maybe we could try that?" },
      { q: "What small thing ruined your day recently?", phrase: "Congratulations, … you ruined …" },
      { q: "Who in your family eats absolutely anything?", phrase: "steel stomach" },
      { q: "What was your favourite part of your last holiday?", phrase: "What was your favourite part?" },
      { q: "What's something your family does that's embarrassing?", phrase: "definitely not when Dad was singing." },
    ],
    mono: {
      topic: "A trip that didn't go as planned",
      plan: [
        "where you went and what you expected",
        "what went wrong (food, weather, people…)",
        "your favourite part — and definitely NOT your favourite part",
      ],
      model:
        "Last summer we went to the seaside and I expected the perfect holiday. On the first day my dad saw a café and said «Maybe we could try that?» They served fish soup with eyes in it — what the heck is that? My brother ate it; he's got a steel stomach. Then it rained for three days. Congratulations, weather, you ruined the beach! But my favourite part was playing cards with my family in the evening. Definitely not when Dad was singing karaoke, though.",
    },
    photo: photoPair(
      "s01e04",
      ["Pizza they love", "Pizza they hate"],
      "Compare the pictures. Why do some people love trying new food and others hate it?",
      "What food would make YOU say «I'm gonna be sick»?"
    ),
    collab: {
      question: "Your class is planning an end-of-year party. What food should you order?",
      options: ["pizza", "sushi", "burgers", "homemade food", "only sweets"],
    },
  };

  EXAM.s01e05 = {
    interview: [
      { q: "When were you really hard on yourself?", phrase: "Something's wrong with me." },
      { q: "What mistake do you keep making?", phrase: "I keep making mistakes like that." },
      { q: "What do you do to cheer up a friend?", phrase: "Try to think of something funny." },
      { q: "Tell me about the funniest moment of your life.", phrase: "laughed so hard" },
      { q: "How does rainy weather make you feel?", phrase: "Everything just starts feeling droopy." },
      { q: "What's fun about a rainy day?", phrase: "You can stomp around in puddles." },
    ],
    mono: {
      topic: "Sadness and Joy: do we need both?",
      plan: [
        "a time you felt really down",
        "what (or who) helped you feel better",
        "why sadness can be useful",
      ],
      model:
        "Last winter I failed an important test and I thought «Something's wrong with me. I keep making mistakes like that.» Everything just started feeling droopy. My best friend didn't tell me to smile; she just sat with me. Later she said «Try to think of something funny» and reminded me how we laughed so hard in the canteen that juice came out of my nose. I think we need both emotions. Sadness shows people we need help, and Joy helps us stand up again.",
    },
    photo: photoPair(
      "s01e05",
      ["Sad · rainy day", "Happy · same rain"],
      "Compare the two pictures. It's the same weather — how can the story change?",
      "What do you need when you feel sad — company or time alone?"
    ),
    collab: {
      question: "What's the best way to help a friend who feels sad?",
      options: ["listen", "tell a joke", "give advice", "go for a walk together", "leave them alone for a while"],
    },
  };

  EXAM.s01e06 = {
    interview: [
      { q: "What makes you nervous or jumpy?", phrase: "I'm so jumpy." },
      { q: "Have you ever lost something important?", phrase: "all of our stuff is in the missing van." },
      { q: "What topic are you tired of hearing about?", phrase: "I don't want to hear about …" },
      { q: "Who do you miss when you're away from home?", phrase: "my friends are back home." },
      { q: "Tell me about a day when everything went wrong.", phrase: "this move has been a bust." },
      { q: "How do you stay positive in a bad situation?", phrase: "it could be worse." },
    ],
    mono: {
      topic: "A day when everything went wrong",
      plan: [
        "what went wrong — step by step",
        "how your emotions reacted (nerves, anger, sadness…)",
        "what helped you survive the day",
      ],
      model:
        "Last September was a disaster. First, I lost my bag with all my stuff — it was like the missing van. I was so jumpy that I screamed when my friend touched my shoulder. Then it started raining and I thought: honestly, this week has been a bust. At night I felt lonely because my old friends are back home in my old town. But my dad said «We've been through worse», and he was right. It could be worse — at least I found the bag the next day!",
    },
    photo: photoPair(
      "s01e06",
      ["Group stress", "Alone · overwhelmed"],
      "Compare the pictures. When does stress feel worse — in a group or alone?",
      "When do you feel lots of emotions at the same time?"
    ),
    collab: {
      question: "What helps most when you feel homesick?",
      options: ["video calls", "new friends", "keeping busy", "photos from home", "favourite food"],
    },
  };

  EXAM.s01e07 = {
    interview: [
      { q: "What's something you really wanted to avoid?", phrase: "I say we skip school tomorrow" },
      { q: "Do you worry about how you look before going out?", phrase: "no one should see us." },
      { q: "When was the last time you cried?", phrase: "cry until we can't breathe." },
      { q: "What do you do when you're really angry?", phrase: "lock the door and scream" },
      { q: "Who makes the plans in your friend group?", phrase: "I say we …" },
      { q: "Is it better to face problems or hide from them?", phrase: "lock ourselves in the bedroom." },
    ],
    mono: {
      topic: "Hiding from problems vs facing them",
      plan: [
        "a time you wanted to hide from something",
        "what you actually did",
        "your advice: hide or face it?",
      ],
      model:
        "In year seven I had to sing alone at a school concert, and my Fear said: «I say we skip school tomorrow and lock ourselves in the bedroom.» Disgust added that I had nothing good to wear, so no one should see me. I was so stressed I almost cried until I couldn't breathe. In the end my mum drove me to school and I sang. It wasn't perfect, but nobody laughed. So my advice is: face it. Hiding makes the fear grow bigger.",
    },
    photo: photoPair(
      "s01e07",
      ["Letting anger out", "Letting sadness out"],
      "Compare the two pictures. How do these teenagers handle strong feelings?",
      "What's a safe way to let anger or sadness out?"
    ),
    collab: {
      question: "Which is the best way to deal with strong emotions?",
      options: ["sport", "music", "talking to someone", "writing a diary", "sleeping on it"],
    },
  };

  EXAM.s01e08 = {
    interview: [
      { q: "What word do you always find difficult to spell?", phrase: "Does anyone know how to spell…" },
      { q: "Do you prefer to stand out or blend in?", phrase: "stands out today and also blends in." },
      { q: "How do you make new friends?", phrase: "we want to be friends with them." },
      { q: "When did you feel people were judging you?", phrase: "They're judging us." },
      { q: "Tell me about your first day at a new place.", phrase: "Out of the gate." },
      { q: "Have you ever cried or almost cried in public?", phrase: "we're crying at school." },
    ],
    mono: {
      topic: "My first day somewhere new",
      plan: [
        "where it was and how you felt before",
        "the most difficult moment",
        "what you'd tell someone who's starting somewhere new",
      ],
      model:
        "My first day at the new English club was scary. Right out of the gate the teacher asked me to spell «necessary» on the board — are you kidding me? Then I saw two cool kids whispering, and I was sure they were judging me. I wanted to stand out and also blend in, which is impossible! Later one of those girls asked me to join her team — she wanted to be friends. My advice: everyone is nervous on day one. Just be yourself.",
    },
    photo: photoPair(
      "s01e08",
      ["Confident · first day", "Nervous · at the gate"],
      "Compare the two pictures. What is different on a first day at school?",
      "What helps you on the first day somewhere new?"
    ),
    collab: {
      question: "How can a school help new students feel welcome?",
      options: ["a buddy system", "a welcome party", "clubs and teams", "a school tour", "a teacher to talk to"],
    },
  };

  EXAM.s01e09 = {
    interview: [
      { q: "Can your parents tell when something's wrong with you?", phrase: "Something's wrong!" },
      { q: "Who notices your mood first?", phrase: "Did you guys pick up on that?" },
      { q: "Do you prefer direct questions or subtle ones?", phrase: "keep it subtle" },
      { q: "How have you changed in the last two years?", phrase: "She's never acted like this before." },
      { q: "Who do you ask for help?", phrase: "We'll need support." },
      { q: "When did you know something was going on with a friend?", phrase: "Something is definitely going on." },
    ],
    mono: {
      topic: "Parents and teenagers: talking about problems",
      plan: [
        "how your parents notice when something's wrong",
        "what works and what doesn't when they ask you",
        "three tips for parents",
      ],
      model:
        "My mum always picks up on it when something's wrong. She says «You've never acted like this before», even when I'm just tired. Sometimes she tries to probe and keep it subtle, but she's not subtle at all — she asks «So… how's everyone at school?» and gives my dad a signal. Honestly, what works best is when she says «I'm here if you want to talk» and waits. My tips for parents: don't ask at dinner, choose a calm moment, and listen without a lecture.",
    },
    photo: photoPair(
      "s01e09",
      ["Tense family dinner", "Alone in the room"],
      "Compare the pictures. How might the teenager feel in each place? What might parents notice?",
      "Where is it easier to talk about problems — at the table or alone with one person?"
    ),
    collab: {
      question: "What's the best way for parents to find out if their teenager has a problem?",
      options: ["ask directly", "talk in the car", "ask a friend", "wait for the teen to come", "spend fun time together"],
    },
  };

  EXAM.s01e10 = {
    interview: [
      { q: "When do you feel nobody is listening to you?", phrase: "Sorry, no one was listening." },
      { q: "What annoys you about someone in your family?", phrase: "I could strangle him right now." },
      { q: "When do you say «fine» but mean the opposite?", phrase: "School was great, all right?" },
      { q: "Do you roll your eyes? When?", phrase: "she just rolled her eyes at us." },
      { q: "What do you need after a bad day?", phrase: "Just leave me alone." },
      { q: "Tell me about a family dinner that went wrong.", phrase: "that was a disaster." },
    ],
    mono: {
      topic: "Arguments at home: how they start and how to stop them",
      plan: [
        "what usually starts arguments in your family",
        "a (not too personal!) example",
        "how everyone could stay calmer",
      ],
      model:
        "In my family, arguments usually start at dinner, when everyone is tired. Last week I came home after a bad day and my dad asked about school. I said «School was great, all right?» and rolled my eyes. He said «I don't like this new attitude», I said «Just leave me alone», and — well, that was a disaster. I think we could stay calmer if we waited twenty minutes before serious talks. And I could say «I had a bad day, can we talk later?» instead of rolling my eyes.",
    },
    photo: photoPair(
      "s01e10",
      ["Dad · not listening", "Argument at dinner"],
      "Compare the pictures. What's going wrong in the family? How is each person feeling?",
      "What could they say to each other to calm down?"
    ),
    collab: {
      question: "What's the best way to calm down a family argument?",
      options: ["take a break", "say sorry first", "talk later", "make a joke", "write a message"],
    },
  };
})(typeof window !== "undefined" ? window : globalThis);
