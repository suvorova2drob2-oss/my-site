/**
 * Unit 1 — 100 to 1 + Glass bridge data (lifestyle + clothes).
 * window.U1_HUNDRED_ROUNDS, window.U1_GLASS_STEPS
 */
(function (W) {
  "use strict";

  var LUCAS =
    "Normally I get out of bed around midday. I'll sometimes go for a run after I get up, though it's not really my idea of fun. I'm not a fitness fan, but I realise it's important.\n\n" +
    "When I'm not rehearsing or on tour, afternoons generally involve reading scripts or learning lines. My flatmates are also actors, so at home there are usually scripts lying all over the place. It's a bit of a mess, I'm ashamed to say. I'm passionate about history, and if I'm working away from home, I'll often spend the afternoon in a museum or historic building. I sometimes lose track of time, and I once turned up late for a play I was in. I felt terrible, so now I always get to the theatre early; I'm usually the first to arrive.\n\n" +
    "After a performance I eat and spend a few hours unwinding, so bedtime is often one or two in the morning. I'm normally out like a light as soon as my head hits the pillow.";

  var MAJA =
    "I generally spend six months in Europe and six in New Zealand, but I've also worked in Japan and Canada. Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast before setting off for work.\n\n" +
    "When I started out eight years ago, I used to teach groups of young kids. Now I'm fully qualified, I tend to get the advanced classes, which I find more interesting. We get plenty of days off and when I'm not working, I go skiing by myself, or catch up on my sleep – I have no problem spending the morning in bed!\n\n" +
    "I love the lifestyle, but I'm not sure I can carry on doing this for much longer. It might be time to settle down and get a more normal job, something steady and secure. I haven't made up my mind yet, though.";

  var REO =
    "I used to have a dog and we'd go running together most mornings, but I gave him to my mum in the end. I tend to be out all day, visiting farms, and it wasn't fair to leave him alone. So now I don't get as much exercise as I'd like to.\n\n" +
    "I love my job, especially the variety and not knowing what you'll be doing from one day to the next. But being a vet – any type of vet – is not what most people think. It's not all cuddly lambs and cute little calves. We have to do some pretty unpleasant things sometimes, things which might put some people off working with animals for life.\n\n" +
    "My mum wants to know when I'm going to find someone to settle down with, but it's not as if I have loads of free time to go looking. There's not even room for a dog in my life, so I don't see how I'll be able to fit marriage in.";

  var BEN =
    "As a child, I would tell everyone that when I grew up, I wanted to climb Everest. I've actually climbed it three times now, and I've also scaled four more of the fourteen peaks over 8000 metres.\n\n" +
    "And when I'm not on a mountain, you might come across me hanging on a rope from a wind turbine, carrying out repairs to damaged blades at heights of up to 100 metres. That's how I make a living and pay for my climbing trips. I also sometimes get sponsorship from companies, which provide funding and maybe food and equipment. In return, I mention the sponsors in the talks I give and the articles I write when I get back from my climbs.\n\n" +
    "It's a fairly unconventional way of life, and not one I'd actively encourage others to adopt – there's a lot of danger involved – but it works for me. It's precisely that sense of danger that makes me feel alive.";

  var SP1 =
    "It's unusual for me to buy brand new clothes. I get most of what I wear from charity shops. Some people think that anyone who buys things that have already been worn by someone else can't really care much about clothes. But that's not true – you can find some pretty decent stuff in these places, even quite tasteful designer clothes that people, for whatever reason, have decided they don't want anymore. And they only sell clothes that are in good condition, often things that have only ever been worn once or twice. You get to support good causes, too, of course, because the money you spend goes to charity.";

  var SP3 =
    "I get suspicious when I go into a clothes shop and see that everything is incredibly cheap. If the prices are so low, then how much are the people who made them getting paid? And what are their working conditions like? I only buy from companies that sell ethical clothing, made by people who earn a decent salary and work in a safe environment. I usually get that kind of information online – it's easy enough to find. The clothes may not be as cheap and there's not necessarily any more guarantee of quality, but at least I can be confident that no one is being exploited.";

  W.U1_HUNDRED_ROUNDS = [
    {
      pack: "lifestyle",
      topic: "Lifestyle · Lucas",
      q: "What does Lucas say about his routine, theatre work, and sleep?",
      hintTitle: "Lucas · This is your life",
      hintPassage: LUCAS,
      board: [
        { t: "Gets up around midday; running is not really his idea of fun", pts: 100 },
        { t: "Scripts lying all over the place; flat is a bit of a mess", pts: 80 },
        { t: "Passionate about history; visits museums when away from home", pts: 60 },
        { t: "Once turned up late for a play; now first to arrive at the theatre", pts: 40 },
        { t: "Out like a light as soon as his head hits the pillow", pts: 20 }
      ],
      decoys: [
        "Lives a short walk from the ski slopes",
        "Repairs wind turbines on a rope",
        "Buys everything from charity shops",
        "Gets up at 5 a.m. to feed lambs on every farm",
        "Never reads scripts — only watches TV all afternoon"
      ]
    },
    {
      pack: "lifestyle",
      topic: "Lifestyle · Maja",
      q: "What does Maja say about her ski-instructor life and future plans?",
      hintTitle: "Maja · This is your life",
      hintPassage: MAJA,
      board: [
        { t: "Lives a short walk from the slopes; gets up reasonably late", pts: 100 },
        { t: "Now fully qualified; teaches advanced classes", pts: 80 },
        { t: "Catch up on my sleep when not working", pts: 60 },
        { t: "Might settle down and get a steady and secure job", pts: 40 },
        { t: "Hasn't made up her mind yet about changing career", pts: 20 }
      ],
      decoys: [
        "Climbs Everest three times",
        "Charity shops are the only place she buys clothes",
        "Out all day visiting farms as a vet",
        "Bedtime at one or two after unwinding from theatre",
        "Teaches only beginners — never advanced groups"
      ]
    },
    {
      pack: "lifestyle",
      topic: "Lifestyle · Reo",
      q: "What does Reo say about being a vet and his personal life?",
      hintTitle: "Reo · This is your life",
      hintPassage: REO,
      board: [
        { t: "Out all day visiting farms; gave his dog to his mum", pts: 100 },
        { t: "Loves the variety — never knows what each day will bring", pts: 80 },
        { t: "It's not all cuddly lambs; some work might put people off", pts: 60 },
        { t: "Doesn't get as much exercise as he'd like now", pts: 40 },
        { t: "No room for a dog — can't see how to fit marriage in", pts: 20 }
      ],
      decoys: [
        "Makes a living repairing wind turbines",
        "Only buys ethical clothing from fair-wage companies",
        "Scripts lying all over the flat",
        "Six months in Europe, six in New Zealand",
        "Runs with his dog every morning — still has the dog"
      ]
    },
    {
      pack: "lifestyle",
      topic: "Lifestyle · Ben",
      q: "What does Ben say about climbing and how he earns money?",
      hintTitle: "Ben · This is your life",
      hintPassage: BEN,
      board: [
        { t: "Climbed Everest three times; scaled four other 8000 m peaks", pts: 100 },
        { t: "Hanging on a rope from a wind turbine to repair blades", pts: 80 },
        { t: "Makes a living that way; sponsorship provides funding", pts: 60 },
        { t: "Unconventional way of life — wouldn't actively encourage others", pts: 40 },
        { t: "Sense of danger makes him feel alive", pts: 20 }
      ],
      decoys: [
        "Gets most clothes from charity shops",
        "Catch up on sleep on days off from ski school",
        "Turned up late for a play and felt terrible",
        "Banned phones from the bedroom",
        "Only climbs indoors on a plastic wall — never real mountains"
      ]
    },
    {
      pack: "clothes",
      topic: "Clothes · Speaker 1",
      q: "What does Speaker 1 say about where she buys clothes?",
      hintTitle: "Clothes · Speaker 1 (SB 1.1)",
      hintPassage: SP1,
      board: [
        { t: "Unusual to buy brand new; most clothes from charity shops", pts: 100 },
        { t: "You can find decent, even designer, second-hand pieces", pts: 80 },
        { t: "Only clothes in good condition — often worn once or twice", pts: 60 },
        { t: "Money spent supports good causes / charity", pts: 40 },
        { t: "Disagrees that second-hand buyers don't care about clothes", pts: 20 }
      ],
      decoys: [
        "Throws on the first thing in the wardrobe every morning",
        "Never wears the same outfit twice in one month",
        "Only buys if prices are incredibly cheap in fast-fashion shops",
        "Gets rid of an old T-shirt before buying a new one",
        "Ethical salary and safe factory conditions are her main filter"
      ]
    },
    {
      pack: "clothes",
      topic: "Clothes · Speaker 3",
      q: "What does Speaker 3 say about cheap fashion and ethical shopping?",
      hintTitle: "Clothes · Speaker 3 (SB 1.1)",
      hintPassage: SP3,
      board: [
        { t: "Suspicious when everything in a shop is incredibly cheap", pts: 100 },
        { t: "Asks how much garment workers are paid and their conditions", pts: 80 },
        { t: "Only buys ethical clothing from fair-wage, safe workplaces", pts: 60 },
        { t: "Finds company information online — easy enough", pts: 40 },
        { t: "Confident no one is being exploited, even if not cheapest", pts: 20 }
      ],
      decoys: [
        "Charity shops are her main source",
        "Dressing smartly in a jacket and tie boosts confidence",
        "Spends a lot — clothes must make her feel good",
        "Replaces clothes because they fall apart at the seams",
        "Buys only designer labels at full price — never checks factories"
      ]
    }
  ];

  /** Glass bridge steps only — Alias deck lives in unit1-alias-phrases.js (Cool Words lexis). */
  W.U1_GLASS_STEPS = [
    {
      pack: "lifestyle",
      text: "After a performance he spends a few hours __ before a late bedtime.",
      good: "unwinding",
      bad: "unwinding the clock",
      hintTitle: "Lucas · lifestyle",
      hintPassage: LUCAS
    },
    {
      pack: "lifestyle",
      text: "He is usually __ as soon as his head hits the pillow.",
      good: "out like a light",
      bad: "out like a kite",
      hintTitle: "Lucas · lifestyle",
      hintPassage: LUCAS
    },
    {
      pack: "lifestyle",
      text: "It might be time to __ and get a more normal job, something steady and secure.",
      good: "settle down",
      bad: "settle up",
      hintTitle: "Maja · lifestyle",
      hintPassage: MAJA
    },
    {
      pack: "lifestyle",
      text: "When I'm not working, I may __ — I have no problem spending the morning in bed.",
      good: "catch up on my sleep",
      bad: "catch up on my scripts",
      hintTitle: "Maja · lifestyle",
      hintPassage: MAJA
    },
    {
      pack: "lifestyle",
      text: "He loves the job, __ the variety from day to day.",
      good: "especially",
      bad: "especially the salary",
      hintTitle: "Reo · lifestyle",
      hintPassage: REO
    },
    {
      pack: "lifestyle",
      text: "That's how he __ and pays for climbing trips.",
      good: "make a living",
      bad: "make a donation",
      hintTitle: "Ben · lifestyle",
      hintPassage: BEN
    },
    {
      pack: "clothes",
      text: "She gets most of what she wears from __ shops.",
      good: "charity",
      bad: "charity gala",
      hintTitle: "Clothes · Speaker 1",
      hintPassage: SP1
    },
    {
      pack: "clothes",
      text: "She only buys __ clothing from fair-wage companies.",
      good: "ethical",
      bad: "ethereal",
      hintTitle: "Clothes · Speaker 3",
      hintPassage: SP3
    },
    {
      pack: "clothes",
      text: "At least she can be confident no one is being __.",
      good: "exploited",
      bad: "exploded",
      hintTitle: "Clothes · Speaker 3",
      hintPassage: SP3
    },
    {
      pack: "get",
      text: "Do you think you could easily get __ without a car?",
      good: "by",
      bad: "over",
      hintTitle: "Get · phrasal verbs",
      hintPassage: "get by — manage with what you have"
    },
    {
      pack: "get",
      text: "How long does it take you to get __ before a night out?",
      good: "ready",
      bad: "paid",
      hintTitle: "Get · phrasal verbs",
      hintPassage: "get ready — prepare yourself"
    },
    {
      pack: "get",
      text: "Have you ever got __ in traffic or bad weather?",
      good: "stuck",
      bad: "lost",
      hintTitle: "Get · phrasal verbs",
      hintPassage: "get stuck — unable to move"
    },
    {
      pack: "run",
      text: "Does your family or class teacher run __?",
      good: "a tight ship",
      bad: "a tight budget",
      hintTitle: "Run · phrasal verbs",
      hintPassage: "run a tight ship — keep strict control"
    },
    {
      pack: "run",
      text: "Does a talent for languages run __ in your family?",
      good: "in the family",
      bad: "in the park",
      hintTitle: "Run · phrasal verbs",
      hintPassage: "run in the family — be common among relatives"
    },
    {
      pack: "run",
      text: "Do you ever feel you're running __ after a long week?",
      good: "on empty",
      bad: "on time",
      altGood: ["on empty"],
      hintTitle: "Run · phrasal verbs",
      hintPassage: "be running on empty — have no energy left"
    }
  ];
})(typeof window !== "undefined" ? window : globalThis);
