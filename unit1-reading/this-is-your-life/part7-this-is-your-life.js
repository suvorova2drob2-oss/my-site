/**
 * Unit 1 — Reading Part 7 (B2 First). This is your life — four lifestyles A–D.
 * Key + evidence quotes from coursebook annotations (Ex 1).
 * Engine: js/fce-reading-part7-matching-engine.js
 */
(function () {
  if (!window.FCE_READING_PART7) return;

  FCE_READING_PART7.mountPage({
    pack: {
      letters: ["A", "B", "C", "D"],
      names: {
        A: "Lucas",
        B: "Maja",
        C: "Reo",
        D: "Ben"
      },
      key: {
        1: "A",
        2: "D",
        3: "C",
        4: "A",
        5: "B",
        6: "D",
        7: "A",
        8: "B",
        9: "C",
        10: "B"
      },
      explanations: {
        1: {
          letter: "A",
          quote:
            "at home there are usually scripts lying all over the place. It\u2019s a bit of a mess, I\u2019m ashamed to say."
        },
        2: {
          letter: "D",
          quote:
            "It\u2019s a fairly unconventional way of life, and not one I\u2019d actively encourage others to adopt"
        },
        3: {
          letter: "C",
          quote:
            "I love my job, especially the variety and not knowing what you\u2019ll be doing from one day to the next."
        },
        4: {
          letter: "A",
          quote:
            "I\u2019ll sometimes go for a run after I get up, though it\u2019s not really my idea of fun. I\u2019m not a fitness fan"
        },
        5: {
          letter: "B",
          quote: "We get plenty of days off"
        },
        6: {
          letter: "D",
          quote:
            "As a child, I would tell everyone that when I grew up, I wanted to climb Everest. I\u2019ve actually climbed it three times now"
        },
        7: {
          letter: "A",
          quote: "I\u2019m normally out like a light as soon as my head hits the pillow."
        },
        8: {
          letter: "B",
          quote: "I usually live just a short walk from the slopes"
        },
        9: {
          letter: "C",
          quote:
            "But being a vet \u2013 any type of vet \u2013 is not what most people think. It\u2019s not all cuddly lambs and cute little calves. We have to do some pretty unpleasant things sometimes"
        },
        10: {
          letter: "B",
          quote:
            "It might be time to settle down and get a more normal job, something steady and secure."
        }
      },
      statements: [
        { id: 1, text: "admits to having an untidy house?" },
        { id: 2, text: "would not recommend their lifestyle to other people?" },
        { id: 3, text: "likes the unpredictable nature of their work?" },
        { id: 4, text: "is not particularly keen on taking exercise?" },
        { id: 5, text: "has a lot of free time?" },
        { id: 6, text: "has achieved an early ambition?" },
        { id: 7, text: "usually has no trouble getting to sleep at night?" },
        {
          id: 8,
          text: "does not normally have to go far to get to their place of work?"
        },
        { id: 9, text: "says that people have the wrong idea about their work?" },
        {
          id: 10,
          text: "is considering introducing more stability into their life?"
        }
      ],
      passages: [
        {
          letter: "A",
          short: "Lucas",
          name: "Lucas Mart\u00edn: television and stage actor",
          body:
            "<p>Normally I get out of bed around midday. I\u2019ll sometimes go for a run after I get up, though it\u2019s not really my idea of fun. I\u2019m not a fitness fan, but I realise it\u2019s important.</p>" +
            "<p>When I\u2019m not rehearsing or on tour, afternoons generally involve reading scripts or learning lines. My flatmates are also actors, so at home there are usually scripts lying all over the place. It\u2019s a bit of a mess, I\u2019m ashamed to say. I\u2019m passionate about history, and if I\u2019m working away from home, I\u2019ll often spend the afternoon in a museum or historic building. I sometimes lose track of time, and I once turned up late for a play I was in. I felt terrible, so now I always get to the theatre early; I\u2019m usually the first to arrive.</p>" +
            "<p>After a performance I eat and spend a few hours unwinding, so bedtime is often one or two in the morning. I\u2019m normally out like a light as soon as my head hits the pillow.</p>"
        },
        {
          letter: "B",
          short: "Maja",
          name: "Maja Andersson: ski and snowboard instructor",
          body:
            "<p>I generally spend six months in Europe and six in New Zealand, but I\u2019ve also worked in Japan and Canada. Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast before setting off for work.</p>" +
            "<p>When I started out eight years ago, I used to teach groups of young kids. Now I\u2019m fully qualified, I tend to get the advanced classes, which I find more interesting. We get plenty of days off and when I\u2019m not working, I go skiing by myself, or catch up on my sleep \u2013 I have no problem spending the morning in bed!</p>" +
            "<p>I love the lifestyle, but I\u2019m not sure I can carry on doing this for much longer. It might be time to settle down and get a more normal job, something steady and secure. I haven\u2019t made up my mind yet, though.</p>"
        },
        {
          letter: "C",
          short: "Reo",
          name: "Reo Tanaka: farm vet",
          body:
            "<p>I used to have a dog and we\u2019d go running together most mornings, but I gave him to my mum in the end. I tend to be out all day, visiting farms, and it wasn\u2019t fair to leave him alone. So now I don\u2019t get as much exercise as I\u2019d like to.</p>" +
            "<p>I love my job, especially the variety and not knowing what you\u2019ll be doing from one day to the next. But being a vet \u2013 any type of vet \u2013 is not what most people think. It\u2019s not all cuddly lambs and cute little calves. We have to do some pretty unpleasant things sometimes, things which might put some people off working with animals for life.</p>" +
            "<p>My mum wants to know when I\u2019m going to find someone to settle down with, but it\u2019s not as if I have loads of free time to go looking. There\u2019s not even room for a dog in my life, so I don\u2019t see how I\u2019ll be able to fit marriage in.</p>"
        },
        {
          letter: "D",
          short: "Ben",
          name: "Ben Adams: mountaineer and wind turbine technician",
          body:
            "<p>As a child, I would tell everyone that when I grew up, I wanted to climb Everest. I\u2019ve actually climbed it three times now, and I\u2019ve also scaled four more of the fourteen peaks over 8000 metres.</p>" +
            "<p>And when I\u2019m not on a mountain, you might come across me hanging on a rope from a wind turbine, carrying out repairs to damaged blades at heights of up to 100 metres. That\u2019s how I make a living and pay for my climbing trips. I also sometimes get sponsorship from companies, which provide funding and maybe food and equipment. In return, I mention the sponsors in the talks I give and the articles I write when I get back from my climbs.</p>" +
            "<p>It\u2019s a fairly unconventional way of life, and not one I\u2019d actively encourage others to adopt \u2013 there\u2019s a lot of danger involved \u2013 but it works for me. It\u2019s precisely that sense of danger that makes me feel alive.</p>"
        }
      ]
    }
  });
})();
