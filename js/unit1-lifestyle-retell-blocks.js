/**
 * Unit 1 · This is your life — retell blocks (Lucas–Ben).
 * Passage text verbatim from unit1-reading/this-is-your-life/part7-this-is-your-life.js
 * Phrases = Cool Words that appear in the passage.
 *
 * window.U1_LIFESTYLE_RETELL_BLOCKS
 */
(function (W) {
  "use strict";

  /** @type {{short:string, passage:string, phrases:string[]}[]} */
  var BLOCKS = [
    {
      short: "Lucas",
      passage:
        "Normally I get out of bed around midday. I'll sometimes go for a run after I get up, though it's not really my idea of fun. I'm not a fitness fan, but I realise it's important.\n\n" +
        "When I'm not rehearsing or on tour, afternoons generally involve reading scripts or learning lines. My flatmates are also actors, so at home there are usually scripts lying all over the place. It's a bit of a mess, I'm ashamed to say. I'm passionate about history, and if I'm working away from home, I'll often spend the afternoon in a museum or historic building. I sometimes lose track of time, and I once turned up late for a play I was in. I felt terrible, so now I always get to the theatre early; I'm usually the first to arrive.\n\n" +
        "After a performance I eat and spend a few hours unwinding, so bedtime is often one or two in the morning. I'm normally out like a light as soon as my head hits the pillow.",
      phrases: [
        "not really my idea of fun",
        "realise it's important",
        "scripts lying all over the place",
        "a bit of a mess",
        "passionate about",
        "lose track of time",
        "turned up late",
        "spend a few hours unwinding",
        "out like a light"
      ]
    },
    {
      short: "Maja",
      passage:
        "I generally spend six months in Europe and six in New Zealand, but I've also worked in Japan and Canada. Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast before setting off for work.\n\n" +
        "When I started out eight years ago, I used to teach groups of young kids. Now I'm fully qualified, I tend to get the advanced classes, which I find more interesting. We get plenty of days off and when I'm not working, I go skiing by myself, or catch up on my sleep – I have no problem spending the morning in bed!\n\n" +
        "I love the lifestyle, but I'm not sure I can carry on doing this for much longer. It might be time to settle down and get a more normal job, something steady and secure. I haven't made up my mind yet, though.",
      phrases: [
        "a short walk from the slopes",
        "get up reasonably late",
        "a decent breakfast",
        "setting off for work",
        "fully qualified",
        "catch up on my sleep",
        "carry on doing this",
        "settle down",
        "steady and secure",
        "made up my mind yet"
      ]
    },
    {
      short: "Reo",
      passage:
        "I used to have a dog and we'd go running together most mornings, but I gave him to my mum in the end. I tend to be out all day, visiting farms, and it wasn't fair to leave him alone. So now I don't get as much exercise as I'd like to.\n\n" +
        "I love my job, especially the variety and not knowing what you'll be doing from one day to the next. But being a vet – any type of vet – is not what most people think. It's not all cuddly lambs and cute little calves. We have to do some pretty unpleasant things sometimes, things which might put some people off working with animals for life.\n\n" +
        "My mum wants to know when I'm going to find someone to settle down with, but it's not as if I have loads of free time to go looking. There's not even room for a dog in my life, so I don't see how I'll be able to fit marriage in.",
      phrases: [
        "out all day",
        "as much exercise as I'd like",
        "especially the variety",
        "It's not all cuddly",
        "put some people off",
        "loads of free time",
        "fit marriage in"
      ]
    },
    {
      short: "Ben",
      passage:
        "As a child, I would tell everyone that when I grew up, I wanted to climb Everest. I've actually climbed it three times now, and I've also scaled four more of the fourteen peaks over 8000 metres.\n\n" +
        "And when I'm not on a mountain, you might come across me hanging on a rope from a wind turbine, carrying out repairs to damaged blades at heights of up to 100 metres. That's how I make a living and pay for my climbing trips. I also sometimes get sponsorship from companies, which provide funding and maybe food and equipment. In return, I mention the sponsors in the talks I give and the articles I write when I get back from my climbs.\n\n" +
        "It's a fairly unconventional way of life, and not one I'd actively encourage others to adopt – there's a lot of danger involved – but it works for me. It's precisely that sense of danger that makes me feel alive.",
      phrases: [
        "climb Everest",
        "hanging on a rope",
        "make a living",
        "provide funding",
        "unconventional way of life",
        "actively encourage others to adopt",
        "it works for me",
        "makes me feel alive"
      ]
    }
  ];

  W.U1_LIFESTYLE_RETELL_BLOCKS = BLOCKS;
})(typeof window !== "undefined" ? window : globalThis);
