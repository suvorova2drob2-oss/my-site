/**
 * Unit 1 · Lifestyle memes — comic strips (story order, book text).
 * Every flip-card image appears once — panel cardId → unit1-lifestyle-meme-cards.js
 */
(function (global) {
  "use strict";

  global.UNIT1_LIFESTYLE_MEME_COMICS = [
    {
      part: 1,
      hero: "Lucas",
      title: "Lucas · a day in the life",
      panels: [
        {
          cardId: "idea-of-fun",
          time: "Midday",
          caption:
            "Normally I get out of bed around midday. I'll sometimes go for a run after I get up, though it's not really my idea of fun."
        },
        {
          cardId: "realise-important",
          caption: "I'm not a fitness fan, but I realise it's important."
        },
        {
          cardId: "scripts-all-over",
          time: "Afternoon",
          caption:
            "When I'm not rehearsing or on tour, afternoons generally involve reading scripts or learning lines. My flatmates are also actors, so at home there are usually scripts lying all over the place."
        },
        {
          cardId: "bit-of-a-mess",
          caption: "It's a bit of a mess, I'm ashamed to say."
        },
        {
          cardId: "lose-track",
          caption:
            "I sometimes lose track of time, and I once turned up late for a play I was in."
        },
        {
          cardId: "passionate-about",
          caption:
            "I'm passionate about history, and if I'm working away from home, I'll often spend the afternoon in a museum or historic building."
        },
        {
          cardId: "turned-up-late",
          time: "Theatre",
          caption:
            "I felt terrible, so now I always get to the theatre early; I'm usually the first to arrive."
        },
        {
          cardId: "unwinding",
          time: "After the show",
          caption:
            "After a performance I eat and spend a few hours unwinding, so bedtime is often one or two in the morning."
        },
        {
          cardId: "bedtime",
          time: "Late night",
          caption:
            "After a performance I eat and spend a few hours unwinding, so bedtime is often one or two in the morning."
        },
        {
          cardId: "out-like-a-light",
          time: "Night",
          caption:
            "I'm normally out like a light as soon as my head hits the pillow."
        }
      ]
    },
    {
      part: 2,
      hero: "Maja",
      title: "Maja · ski instructor",
      panels: [
        {
          cardId: "love-the-fact",
          time: "Morning",
          caption:
            "Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast, before setting off for work."
        },
        {
          cardId: "short-walk",
          caption:
            "Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast, before setting off for work."
        },
        {
          cardId: "reasonably-late",
          caption:
            "Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast, before setting off for work."
        },
        {
          cardId: "decent-breakfast",
          caption:
            "Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast, before setting off for work."
        },
        {
          cardId: "fully-qualified",
          time: "At work",
          caption:
            "Now I'm fully qualified, I tend to get the advanced classes, which I find more interesting."
        },
        {
          cardId: "tend-to",
          caption:
            "Now I'm fully qualified, I tend to get the advanced classes, which I find more interesting."
        },
        {
          cardId: "catch-up-sleep",
          time: "Days off",
          caption:
            "We get plenty of days off and when I'm not working, I go skiing by myself, or catch up on my sleep – I have no problem spending the morning in bed!"
        },
        {
          cardId: "carry-on",
          caption:
            "I love the lifestyle, but I'm not sure I can carry on doing this for much longer."
        },
        {
          cardId: "settle-down",
          caption:
            "It might be time to settle down and get a more normal job, something steady and secure."
        },
        {
          cardId: "steady-secure",
          caption:
            "It might be time to settle down and get a more normal job, something steady and secure."
        },
        {
          cardId: "made-up-mind",
          caption: "I haven't made up my mind yet, though."
        }
      ]
    },
    {
      part: 3,
      hero: "Reo",
      title: "Reo · vet on the road",
      panels: [
        {
          cardId: "out-all-day",
          time: "Morning",
          caption:
            "I tend to be out all day, visiting farms, and it wasn't fair to leave him alone."
        },
        {
          cardId: "exercise",
          caption: "So now I don't get as much exercise as I'd like to."
        },
        {
          cardId: "variety",
          time: "On the job",
          caption:
            "I love my job, especially the variety and not knowing what you'll be doing from one day to the next."
        },
        {
          cardId: "not-all-cuddly",
          caption: "It's not all cuddly lambs and cute little calves."
        },
        {
          cardId: "put-off",
          caption:
            "We have to do some pretty unpleasant things sometimes, things which might put some people off working with animals for life."
        },
        {
          cardId: "loads-free-time",
          time: "Personal life",
          caption:
            "My mum wants to know when I'm going to find someone to settle down with, but it's not as if I have loads of free time to go looking."
        },
        {
          cardId: "fit-marriage",
          caption:
            "There's not even room for a dog in my life, so I don't see how I'll be able to fit marriage in."
        }
      ]
    },
    {
      part: 4,
      hero: "Ben",
      title: "Ben · peaks & turbines",
      panels: [
        {
          cardId: "hanging-on-rope",
          time: "At work",
          caption:
            "And when I'm not on a mountain, you might come across me hanging on a rope from a wind turbine, carrying out repairs to damaged blades at heights of up to 100 metres."
        },
        {
          cardId: "make-a-living",
          caption: "That's how I make a living and pay for my climbing trips."
        },
        {
          cardId: "funding",
          caption:
            "I also sometimes get sponsorship from companies, which provide funding and maybe food and equipment."
        },
        {
          cardId: "unconventional",
          caption:
            "It's a fairly unconventional way of life, and not one I'd actively encourage others to adopt — there's a lot of danger involved — but it works for me."
        },
        {
          cardId: "works-for-me",
          caption:
            "It's a fairly unconventional way of life, and not one I'd actively encourage others to adopt — there's a lot of danger involved — but it works for me."
        },
        {
          cardId: "feel-alive",
          caption: "It's precisely that sense of danger that makes me feel alive."
        }
      ]
    }
  ];
})(typeof window !== "undefined" ? window : globalThis);
