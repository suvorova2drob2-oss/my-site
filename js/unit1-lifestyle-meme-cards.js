/**
 * Unit 1 · Lifestyle memes — This is your life (A–D).
 * Phrases = Cool Words from FCE_U1_LIFESTYLE_LEXIS / Phrases drawer.
 * Part 1 Lucas · Part 2 Maja · Part 3 Reo · Part 4 Ben
 */
(function (global) {
  "use strict";

  var P1_LUCAS = [
    {
      id: "idea-of-fun",
      img: "img/life-p1-01-idea-of-fun.png",
      hints: ["get out of bed", "not really my idea of fun"],
      sentence:
        "I'll sometimes go for a run after I get up, though it's not really my idea of fun.",
      highlight: "not really my idea of fun"
    },
    {
      id: "realise-important",
      img: "img/life-p1-02-realise-important.png",
      hints: ["realise it's important"],
      sentence: "I'm not a fitness fan, but I realise it's important.",
      highlight: "realise it's important"
    },
    {
      id: "scripts-all-over",
      img: "img/life-p1-03-scripts-all-over.png",
      hints: ["afternoons generally involve", "scripts lying all over"],
      sentence:
        "My flatmates are also actors, so at home there are usually scripts lying all over the place.",
      highlight: "scripts lying all over the place"
    },
    {
      id: "bit-of-a-mess",
      img: "img/life-p1-04-bit-of-a-mess.png",
      hints: ["a bit of a mess", "ashamed to say"],
      sentence: "It's a bit of a mess, I'm ashamed to say.",
      highlight: "a bit of a mess"
    },
    {
      id: "lose-track",
      img: "img/life-p1-05-lose-track.png",
      hints: ["lose track of time"],
      sentence:
        "I sometimes lose track of time, and I once turned up late for a play I was in.",
      highlight: "lose track of time"
    },
    {
      id: "passionate-about",
      img: "img/life-p1-06-passionate-about.png",
      hints: ["passionate about"],
      sentence:
        "I'm passionate about history, and if I'm working away from home, I'll often spend the afternoon in a museum or historic building.",
      highlight: "passionate about"
    },
    {
      id: "turned-up-late",
      img: "img/life-p1-07-turned-up-late.png",
      hints: ["turned up late"],
      sentence:
        "I sometimes lose track of time, and I once turned up late for a play I was in.",
      highlight: "turned up late"
    },
    {
      id: "unwinding",
      img: "img/life-p1-08-unwinding.png",
      hints: ["spend a few hours unwinding"],
      sentence:
        "After a performance I eat and spend a few hours unwinding, so bedtime is often one or two in the morning.",
      highlight: "spend a few hours unwinding"
    },
    {
      id: "bedtime",
      img: "img/life-p1-09-bedtime.png",
      hints: ["bedtime is"],
      sentence:
        "After a performance I eat and spend a few hours unwinding, so bedtime is often one or two in the morning.",
      highlight: "bedtime is"
    },
    {
      id: "out-like-a-light",
      img: "img/life-p1-10-out-like-a-light.png",
      hints: ["out like a light", "head hits the pillow"],
      sentence:
        "I'm normally out like a light as soon as my head hits the pillow.",
      highlight: "out like a light as soon as my head hits the pillow"
    }
  ];

  var P2_MAJA = [
    {
      id: "love-the-fact",
      img: "img/life-p2-01-love-the-fact.png",
      hints: ["wherever I am", "love the fact"],
      sentence:
        "Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast, before setting off for work.",
      highlight: "Wherever I am, I love the fact"
    },
    {
      id: "short-walk",
      img: "img/life-p2-02-short-walk.png",
      hints: ["a short walk from"],
      sentence:
        "Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast, before setting off for work.",
      highlight: "a short walk from"
    },
    {
      id: "reasonably-late",
      img: "img/life-p2-03-reasonably-late.png",
      hints: ["get up reasonably late"],
      sentence:
        "Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast, before setting off for work.",
      highlight: "get up reasonably late"
    },
    {
      id: "decent-breakfast",
      img: "img/life-p2-04-decent-breakfast.png",
      hints: ["decent breakfast", "setting off for work"],
      sentence:
        "Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast, before setting off for work.",
      highlight: "setting off for work"
    },
    {
      id: "fully-qualified",
      img: "img/life-p2-05-fully-qualified.png",
      hints: ["fully qualified"],
      sentence:
        "Now I'm fully qualified, I tend to get the advanced classes, which I find more interesting.",
      highlight: "fully qualified"
    },
    {
      id: "tend-to",
      img: "img/life-p2-06-tend-to.png",
      hints: ["tend to"],
      sentence:
        "Now I'm fully qualified, I tend to get the advanced classes, which I find more interesting.",
      highlight: "tend to"
    },
    {
      id: "catch-up-sleep",
      img: "img/life-p2-07-catch-up-sleep.png",
      hints: ["catch up on my sleep"],
      sentence:
        "We get plenty of days off and when I'm not working, I go skiing by myself, or catch up on my sleep – I have no problem spending the morning in bed!",
      highlight: "catch up on my sleep"
    },
    {
      id: "carry-on",
      img: "img/life-p2-08-carry-on.png",
      hints: ["carry on doing this"],
      sentence:
        "I love the lifestyle, but I'm not sure I can carry on doing this much longer.",
      highlight: "carry on doing this"
    },
    {
      id: "settle-down",
      img: "img/life-p2-09-settle-down.png",
      hints: ["settle down"],
      sentence:
        "It might be time to settle down and get a more normal job, something steady and secure.",
      highlight: "settle down"
    },
    {
      id: "steady-secure",
      img: "img/life-p2-10-steady-secure.png",
      hints: ["steady and secure"],
      sentence:
        "It might be time to settle down and get a more normal job, something steady and secure.",
      highlight: "steady and secure"
    },
    {
      id: "made-up-mind",
      img: "img/life-p2-11-made-up-mind.png",
      hints: ["made up my mind"],
      sentence: "I haven't made up my mind yet, though.",
      highlight: "made up my mind"
    }
  ];

  var P3_REO = [
    {
      id: "out-all-day",
      img: "img/life-p3-01-out-all-day.png",
      hints: ["out all day"],
      sentence:
        "I tend to be out all day, visiting farms, and it wasn't fair to leave him alone.",
      highlight: "out all day"
    },
    {
      id: "exercise",
      img: "img/life-p3-02-exercise.png",
      hints: ["as much exercise as I'd like"],
      sentence: "So now I don't get as much exercise as I'd like to.",
      highlight: "as much exercise as I'd like"
    },
    {
      id: "variety",
      img: "img/life-p3-03-variety.png",
      hints: ["especially the variety"],
      sentence:
        "I love my job, especially the variety and not knowing what you'll be doing from one day to the next.",
      highlight: "especially the variety"
    },
    {
      id: "not-all-cuddly",
      img: "img/life-p3-04-not-all-cuddly.png",
      hints: ["not all cuddly"],
      sentence: "It's not all cuddly lambs and cute little calves.",
      highlight: "not all cuddly"
    },
    {
      id: "put-off",
      img: "img/life-p3-05-put-off.png",
      hints: ["put some people off"],
      sentence:
        "We have to do some pretty unpleasant things sometimes, things which might put some people off working with animals for life.",
      highlight: "put some people off"
    },
    {
      id: "loads-free-time",
      img: "img/life-p3-06-loads-free-time.png",
      hints: ["loads of free time"],
      sentence:
        "My mum wants to know when I'm going to find someone to settle down with, but it's not as if I have loads of free time to go looking.",
      highlight: "loads of free time"
    },
    {
      id: "fit-marriage",
      img: "img/life-p3-07-fit-marriage.png",
      hints: ["fit marriage in", "room for a dog"],
      sentence:
        "There's not even room for a dog in my life, so I don't see how I'll be able to fit marriage in.",
      highlight: "fit marriage in"
    }
  ];

  var P4_BEN = [
    {
      id: "hanging-on-rope",
      img: "img/life-p4-01-hanging-on-rope.png",
      hints: ["hanging on a rope"],
      sentence:
        "And when I'm not on a mountain, you might come across me hanging on a rope from a wind turbine, carrying out repairs to damaged blades at heights of up to 100 metres.",
      highlight: "hanging on a rope"
    },
    {
      id: "make-a-living",
      img: "img/life-p4-02-make-a-living.png",
      hints: ["make a living", "pay for"],
      sentence: "That's how I make a living and pay for my climbing trips.",
      highlight: "make a living and pay for"
    },
    {
      id: "funding",
      img: "img/life-p4-03-funding.png",
      hints: ["provide funding", "food and equipment"],
      sentence:
        "I also sometimes get sponsorship from companies, which provide funding and maybe food and equipment.",
      highlight: "provide funding and maybe food and equipment"
    },
    {
      id: "unconventional",
      img: "img/life-p4-04-unconventional.png",
      hints: ["unconventional way of life"],
      sentence:
        "It's a fairly unconventional way of life, and not one I'd actively encourage others to adopt — there's a lot of danger involved — but it works for me.",
      highlight: "unconventional way of life"
    },
    {
      id: "works-for-me",
      img: "img/life-p4-05-works-for-me.png",
      hints: ["danger involved", "works for me"],
      sentence:
        "It's a fairly unconventional way of life, and not one I'd actively encourage others to adopt — there's a lot of danger involved — but it works for me.",
      highlight: "it works for me"
    },
    {
      id: "feel-alive",
      img: "img/life-p4-06-feel-alive.png",
      hints: ["sense of danger", "feel alive"],
      sentence:
        "It's precisely that sense of danger that makes me feel alive.",
      highlight: "makes me feel alive"
    }
  ];

  global.UNIT1_LIFESTYLE_MEME_PARTS = [
    { part: 1, label: "Part 1 · Lucas", cards: P1_LUCAS },
    { part: 2, label: "Part 2 · Maja", cards: P2_MAJA },
    { part: 3, label: "Part 3 · Reo", cards: P3_REO },
    { part: 4, label: "Part 4 · Ben", cards: P4_BEN }
  ];
})(typeof window !== "undefined" ? window : globalThis);
