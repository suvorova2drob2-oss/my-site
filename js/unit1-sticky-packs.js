/**
 * Unit 1 sticky board packs — Lifestyle · Clothes · Get · Run.
 * Single-word stickyAnswer per `.cursor/rules/sticky-board-keywords.mdc`.
 * window.FCE_U1_STICKY
 */
(function (W) {
  "use strict";

  function L(hint, before, answer, after, ctx) {
    return {
      hint: hint,
      stickyBefore: before,
      stickyAnswer: answer,
      stickyAfter: after,
      contextSentence: ctx,
      phrase: before + answer + after
    };
  }

  function toBlocks(raw) {
    return raw.map(function (b) {
      return { name: b.name, items: b.lines.map(function (line) {
        return Object.assign({}, line);
      }) };
    });
  }

  var LIFESTYLE_RAW = [
    {
      name: "A · Lucas · actor",
      lines: [
        L("Run isn't really my thing.", "though it's not really my idea of ", "fun", "", "I'll sometimes go for a run after I get up, though it's not really my idea of fun."),
        L("Fitness matters even if I'm not a fan.", "but I ", "realise", " it's important", "I'm not a fitness fan, but I realise it's important."),
        L("Scripts everywhere at home.", "there are usually ", "scripts", " lying all over the place", "My flatmates are also actors, so at home there are usually scripts lying all over the place."),
        L("Untidy — and I'm embarrassed.", "It's a bit of a ", "mess", ", I'm ashamed to say", "It's a bit of a mess, I'm ashamed to say."),
        L("I forget how late it is.", "I sometimes lose ", "track", " of time", "I sometimes lose track of time, and I once turned up late for a play I was in."),
        L("I care a lot about history.", "I'm ", "passionate", " about history", "I'm passionate about history, and if I'm working away from home, I'll often spend the afternoon in a museum or historic building."),
        L("I arrived late to a play once.", "I once turned up ", "late", " for a play I was in", "I sometimes lose track of time, and I once turned up late for a play I was in."),
        L("After a show I relax for hours.", "I spend a few hours ", "unwinding", ", so bedtime is often", "After a performance I eat and spend a few hours unwinding, so bedtime is often one or two in the morning."),
        L("I go to sleep very late.", "so ", "bedtime", " is often one or two in the morning", "After a performance I eat and spend a few hours unwinding, so bedtime is often one or two in the morning."),
        L("I fall asleep instantly.", "I'm normally out like a ", "light", " as soon as my head hits the pillow", "I'm normally out like a light as soon as my head hits the pillow.")
      ]
    },
    {
      name: "B · Maja · ski instructor",
      lines: [
        L("Wherever I am, this stays true.", "Wherever I am, I love the ", "fact", " that I usually live just", "Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast, before setting off for work."),
        L("Living close to the slopes.", "just a short ", "walk", " from the slopes", "Wherever I am, I love the fact that I usually live just a short walk from the slopes."),
        L("I can wake up late.", "I can get up ", "reasonably", " late", "Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast, before setting off for work."),
        L("Before I leave for work.", "before ", "setting", " off for work", "Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast, before setting off for work."),
        L("Now I'm fully qualified.", "Now I'm fully ", "qualified", ", I tend to get the advanced classes", "Now I'm fully qualified, I tend to get the advanced classes, which I find more interesting."),
        L("I usually get advanced classes.", "I ", "tend", " to get the advanced classes", "Now I'm fully qualified, I tend to get the advanced classes, which I find more interesting."),
        L("Sleep in on days off.", "or catch up on my ", "sleep", " – I have no problem spending the morning in bed!", "We get plenty of days off and when I'm not working, I go skiing by myself, or catch up on my sleep – I have no problem spending the morning in bed!"),
        L("Not sure how long I can keep this up.", "I'm not sure I can ", "carry", " on doing this much longer", "I'm not sure I can carry on doing this much longer."),
        L("Maybe time for a normal job.", "It might be time to ", "settle", " down", "It might be time to settle down and get a more normal job, something steady and secure."),
        L("A normal, secure job.", "something ", "steady", " and secure", "It might be time to settle down and get a more normal job, something steady and secure."),
        L("I still haven't decided.", "I haven't made up my ", "mind", " yet, though", "I haven't made up my mind yet, though.")
      ]
    },
    {
      name: "C · Reo · farm vet",
      lines: [
        L("Out visiting farms all day.", "I tend to be ", "out", " all day", "I tend to be out all day, visiting farms, and it wasn't fair to leave him alone."),
        L("Less exercise than I'd like.", "don't get as much ", "exercise", " as I'd like to", "So now I don't get as much exercise as I'd like to."),
        L("Every day is different.", "especially the ", "variety", " and not knowing what you'll be doing", "I love my job, especially the variety and not knowing what you'll be doing from one day to the next."),
        L("Not only cute animals.", "It's not all ", "cuddly", " lambs and cute little calves", "It's not all cuddly lambs and cute little calves."),
        L("Unpleasant work can put people off.", "might put some people ", "off", " working with animals for life", "We have to do some pretty unpleasant things sometimes, things which might put some people off working with animals for life."),
        L("Not much spare time.", "have ", "loads", " of free time to go looking", "My mum wants to know when I'm going to find someone to settle down with, but it's not as if I have loads of free time to go looking."),
        L("No room even for a dog.", "able to fit ", "marriage", " in", "There's not even room for a dog in my life, so I don't see how I'll be able to fit marriage in.")
      ]
    },
    {
      name: "D · Ben · mountaineer",
      lines: [
        L("Repairs on a wind turbine.", "you might come across me hanging on a ", "rope", " from a wind turbine", "And when I'm not on a mountain, you might come across me hanging on a rope from a wind turbine, carrying out repairs to damaged blades at heights of up to 100 metres."),
        L("How I earn money.", "That's how I make a ", "living", " and pay for my climbing trips", "That's how I make a living and pay for my climbing trips."),
        L("Sponsors give money and gear.", "which provide ", "funding", " and maybe food and equipment", "I also sometimes get sponsorship from companies, which provide funding and maybe food and equipment."),
        L("An unusual lifestyle.", "It's a fairly ", "unconventional", " way of life", "It's a fairly unconventional way of life, and not one I'd actively encourage others to adopt — there's a lot of danger involved — but it works for me."),
        L("I wouldn't recommend it to others.", "not one I'd actively ", "encourage", " others to adopt", "It's a fairly unconventional way of life, and not one I'd actively encourage others to adopt — there's a lot of danger involved — but it works for me."),
        L("Danger makes me feel alive.", "that makes me feel ", "alive", ".", "It's precisely that sense of danger that makes me feel alive.")
      ]
    }
  ];

  var CLOTHES_RAW = [
    {
      name: "Speaker 1",
      lines: [
        L("Rarely buys new clothes.", "unusual for me to buy ", "brand", " new clothes", "It's unusual for me to buy brand new clothes."),
        L("Good finds in charity shops.", "find some pretty ", "decent", " stuff in these places", "you can find some pretty decent stuff in these places, even quite tasteful designer clothes"),
        L("Designer pieces second-hand.", "quite tasteful ", "designer", " clothes", "even quite tasteful designer clothes that people, for whatever reason, have decided they don't want anymore."),
        L("Only clothes in good shape.", "clothes that are in good ", "condition", ",", "And they only sell clothes that are in good condition, often things that have only ever been worn once or twice."),
        L("Shopping supports charities.", "You get to support good ", "causes", ", too, of course", "You get to support good causes, too, of course, because the money you spend goes to charity."),
        L("Money goes to charity.", "the money you spend goes to ", "charity", ".", "You get to support good causes, too, of course, because the money you spend goes to charity.")
      ]
    },
    {
      name: "Speaker 2",
      lines: [
        L("Smart dress and confidence.", "supposed to increase your self-", "confidence", ", but I've never felt any different", "Apparently, dressing smartly is supposed to increase your self-confidence, but I've never felt any different in a jacket and tie."),
        L("Some people hesitate a long time.", "Some people take ", "ages", ", umming and ahhing over what to wear", "Some people take ages, umming and ahhing over what to wear,"),
        L("Hesitating over what to wear.", "take ages, ", "umming", " and ahhing over what to wear", "Some people take ages, umming and ahhing over what to wear,"),
        L("Grab the first thing in the wardrobe.", "I just ", "throw", " on the first thing I find in my wardrobe", "but I just throw on the first thing I find in my wardrobe and that's it."),
        L("Happy with the same T-shirts.", "I'd be ", "happy", " just wearing the same two or three T-shirts all the time", "To be honest, I'd be happy just wearing the same two or three T-shirts all the time.")
      ]
    },
    {
      name: "Speaker 3",
      lines: [
        L("Suspicious of very low prices.", "I get ", "suspicious", " when I go into a clothes shop", "I get suspicious when I go into a clothes shop and see that everything is incredibly cheap."),
        L("Everything priced very low.", "see that everything is incredibly ", "cheap", ".", "I get suspicious when I go into a clothes shop and see that everything is incredibly cheap."),
        L("Factory working conditions.", "what are their working ", "conditions", " like?", "And what are their working conditions like?"),
        L("Workers earn fairly.", "people who earn a decent ", "salary", " and work in a safe environment", "I only buy from companies that sell ethical clothing, made by people who earn a decent salary and work in a safe environment."),
        L("No exploitation.", "confident that no one is being ", "exploited", ".", "but at least I can be confident that no one is being exploited.")
      ]
    },
    {
      name: "Speaker 4",
      lines: [
        L("Clothes must boost self-esteem.", "have to make me feel good about ", "myself", ".", "They don't have to be designer clothes, but they do have to make me feel good about myself."),
        L("Insecurity disappears when dressed.", "any feelings of ", "insecurity", " I have will just disappear", "I like to know that I can get something out of the wardrobe and any feelings of insecurity I have will just disappear as soon as I put it on."),
        L("A compliment cheers me up.", "it gives me a big ", "lift", ".", "Then when I get to work and someone says, 'Hey, that shirt really suits you', it gives me a big lift."),
        L("A different outfit every day.", "seeing me in something ", "different", " every day", "My colleagues have got used to seeing me in something different every day.")
      ]
    },
    {
      name: "Speaker 5",
      lines: [
        L("Discard an old item first.", "always have to get ", "rid", " of an old one first", "for example, then I always have to get rid of an old one first."),
        L("Can't keep it any longer.", "can't ", "justify", " hanging on to it anymore", "And I only do that when I can't justify hanging on to it anymore"),
        L("Too shabby to wear.", "too ", "embarrassed", " to wear it", "either because it's so scruffy I'm too embarrassed to wear it, or it's literally falling apart at the seams."),
        L("Stitching is giving way.", "falling apart at the ", "seams", ".", "either because it's so scruffy I'm too embarrassed to wear it, or it's literally falling apart at the seams."),
        L("Never donates to charity shops.", "end up in a ", "second-hand", " shop", "That's why none of my clothes ever end up in a second-hand shop."),
        L("Too worn for anyone else.", "precisely because they're no use to ", "anyone", " – not just me", "I replace them, precisely because they're no use to anyone – not just me."),
        L("Clothes don't last as long now.", "the ", "quality", "'s got gradually worse", "I've noticed that clothes used to last a lot longer; the quality's got gradually worse and I have to replace things far more often than before.")
      ]
    }
  ];

  var GET_RAW = [
    {
      name: "Get phrases",
      lines: [
        L("Contact the sales team.", "hesitate to get in ", "touch", " with our sales team", "Please do not hesitate to get in touch with our sales team if you have any questions."),
        L("Finish preparing.", "finish ", "getting", " ready", "Come in. I have to finish getting ready. I won't keep you waiting long."),
        L("Not enough pay.", "don't ", "get", " paid enough for the work I do here", "I want to change jobs. I don't get paid enough for the work I do here."),
        L("Bus blocked by snow.", "My bus got ", "stuck", " in the snow", "I'm sorry I'm so late. My bus got stuck in the snow and I had to walk."),
        L("Manage without a car.", "can easily get ", "by", " without one", "I don't own a car; I can easily get by without one. I just use public transport."),
        L("Opportunity to go diving.", "got the ", "chance", " to go diving on a coral reef", "When we lived in Australia, I got the chance to go diving on a coral reef there."),
        L("Overcome shyness at the party.", "had got over my ", "shyness", " and talked to a few people", "I enjoyed the party once I had got over my shyness and talked to a few people.")
      ]
    }
  ];

  var RUN_RAW = [
    {
      name: "Run expressions",
      lines: [
        L("Strict, organised management.", "Sandra ran a ", "tight", " ship", "Sandra ran a tight ship and was a strict manager before she retired."),
        L("Talent in the family.", "Does it ", "run", " in the family?", "It appears you have an excellent talent for drawing. Does it run in the family?"),
        L("Exhausted after shifts.", "clearly ", "running", " on empty", "After three all-night shifts she was still at her desk — clearly running on empty."),
        L("Quickly read a proposal.", "running your ", "eye", " over my proposal", "Would you mind running your eye over my proposal for the meeting?"),
        L("Campaign for president.", "campaign of running for ", "office", " of society president", "I must consider coordinating my campaign of running for office of society president."),
        L("Escape after the robbery.", "made a ", "run", " for it after robbing the bank", "The thieves made a run for it after robbing the bank in the High Street."),
        L("Risk of losing her seat.", "running the ", "risk", " of losing her seat", "The local councillor is running the risk of losing her seat this year."),
        L("Friendship has ended naturally.", "friendship has ", "run", " its course", "I think our friendship has run its course as we don't contact each other anymore.")
      ]
    }
  ];

  W.UNIT1_LIFESTYLE_STICKY_BLOCKS = toBlocks(LIFESTYLE_RAW);
  W.UNIT1_CLOTHES_STICKY_BLOCKS = toBlocks(CLOTHES_RAW);
  W.UNIT1_GET_STICKY_BLOCKS = toBlocks(GET_RAW);
  W.UNIT1_RUN_STICKY_BLOCKS = toBlocks(RUN_RAW);

  var PACKS = [
    {
      id: "lifestyle",
      jumpLabel: "Lifestyle sticky",
      title: "Sticky board — Lifestyle (reading)",
      subtitleHtml:
        "<strong>Lucas, Maja, Reo, Ben</strong> · one word per gap · <strong>Context</strong> = full sentence.",
      contextTag: "Lifestyle · This is your life",
      backHref: "../../unit1-lexical-games.html",
      backLabel: "Vocabulary Games",
      blocks: W.UNIT1_LIFESTYLE_STICKY_BLOCKS
    },
    {
      id: "clothes",
      jumpLabel: "Clothes sticky",
      title: "Sticky board — Clothes (SB 1.1)",
      subtitleHtml:
        "<strong>Speakers 1–5</strong> · one word per gap · <strong>Context</strong> = script line.",
      contextTag: "Clothes · SB 1.1",
      backHref: "../../unit1-lexical-games.html",
      backLabel: "Vocabulary Games",
      blocks: W.UNIT1_CLOTHES_STICKY_BLOCKS
    },
    {
      id: "get",
      jumpLabel: "Get sticky",
      title: "Sticky board — Get phrases",
      subtitleHtml:
        "<strong>Get</strong> phrases · one word per gap · <strong>Context</strong> = example sentence.",
      contextTag: "Get phrases",
      backHref: "../../unit1-vocabulary/get/index.html",
      backLabel: "Get vocabulary",
      blocks: W.UNIT1_GET_STICKY_BLOCKS
    },
    {
      id: "run",
      jumpLabel: "Run sticky",
      title: "Sticky board — Run expressions",
      subtitleHtml:
        "<strong>Run</strong> collocations · one word per gap · <strong>Context</strong> = coursebook example.",
      contextTag: "Run expressions",
      backHref: "../../unit1-vocabulary/run-expressions/index.html",
      backLabel: "Run expressions",
      blocks: W.UNIT1_RUN_STICKY_BLOCKS
    }
  ];

  W.FCE_U1_STICKY = {
    packs: PACKS,
    getPack: function (id) {
      var found = PACKS.filter(function (p) {
        return p.id === id;
      })[0];
      return found || PACKS[0];
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
