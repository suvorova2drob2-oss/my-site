/**
 * Clothes theme (Unit 1 · SB 1.1) — FCE deep link from Listening Part 3.
 */
(function (global) {
  function register(theme) {
    if (typeof global.B2_INTENSIVE_registerTheme === "function") {
      global.B2_INTENSIVE_registerTheme(theme);
      return;
    }
    global.B2_INTENSIVE_THEMES = global.B2_INTENSIVE_THEMES || [];
    global.B2_INTENSIVE_THEMES.push(theme);
  }

  function htmlToPlain(html) {
    var d = document.createElement("div");
    d.innerHTML = html || "";
    return (d.textContent || "").replace(/\s+/g, " ").trim();
  }

  function enrichBeatFromLexis(beat, spIndex) {
    var lex = global.FCE_U1_CLOTHES_LEXIS;
    if (!lex || !lex.passageHighlight || !lex.speakers || !lex.speakers[spIndex]) {
      return beat;
    }
    var plain = htmlToPlain(beat.read && beat.read.html);
    beat.phrases = lex.speakers[spIndex].lines.map(function (line) {
      return {
        en: line.coolWord || line.phrase,
        highlight: lex.passageHighlight(plain, line)
      };
    });
    return beat;
  }

  var clothesTheme = {
    id: "clothes",
    num: 1,
    title: "Clothes",
    icon: "👕",
    tagline: "Five speakers · tape chunks · talk about how you dress",
    synopsis:
      "Same SB 1.1 speakers as Listening Part 3 — read the transcript beats, steal cool clothes phrases, then speak about YOUR wardrobe habits.",
    goal: {
      title: "Goal · what they leave with",
      examVsSpeak:
        "Exam track (Listening Part 3) trains speaker ↔ option matching. This intensive is the speaking twin — not another matching paper.",
      learn: [
        "Steal ready-made chunks about charity shops, ethics, confidence, and wardrobe habits.",
        "Stretch stems into full turns: notice → meaning → personal answer (60–90 s).",
        "Sound more natural: tape in view, improv with 5+ phrases about how YOU dress.",
      ],
      notThis: [
        "Not testing A–H keys or which speaker said what.",
        "Not silent listening for a score.",
      ],
      teacherTip:
        "Keep books closed for keys. Transcript = fuel for talk. Push personal invention — their charity-shop finds, their morning routine, their ethical rules.",
    },
    beats: [
      {
        id: "speaker-1",
        label: "Speaker 1 · charity shops",
        teacher:
          "Beat 1 · Second-hand shopper. Read → notice cool chunks → talk about where YOU get clothes.",
        blocks: ["read", "context"],
        phrases: [
          "buy brand new clothes",
          "charity shops",
          "find some pretty decent stuff",
          "quite tasteful designer clothes",
          "in good condition",
          "worn once or twice",
          "you get to support good causes",
          "the money you spend goes to charity",
        ],
        read: {
          letter: "1",
          title: "Speaker 1",
          subtitle: "second-hand clothes · option E",
          html:
            "<p>It&rsquo;s unusual for me to buy brand new clothes. I get most of what I wear from charity shops. Some people think that anyone who buys things that have already been worn by someone else can&rsquo;t really care much about clothes. But that&rsquo;s not true &ndash; you can find some pretty decent stuff in these places, even quite tasteful designer clothes that people, for whatever reason, have decided they don&rsquo;t want anymore.</p>" +
            "<p>And they only sell clothes that are in good condition, often things that have only ever been worn once or twice. You get to support good causes, too, of course, because the money you spend goes to charity.</p>",
        },
        context: {
          tone: "Steal the stems · finish them about your wardrobe",
          meanings: [
            "brand new = bought new from a shop, not second-hand.",
            "charity shops = thrift stores that raise money for good causes.",
            "pretty decent stuff = surprisingly good quality for the price.",
            "in good condition = still wearable / not damaged.",
            "worn once or twice = barely used before it was donated.",
            "support good causes = your money helps charities.",
          ],
        },
        speak: {
          mission: "60–90 s · steal tape phrases about where YOU get clothes.",
          starters: [
            "It's unusual for me to buy brand new clothes…",
            "I get most of what I wear from…",
            "You can find some pretty decent stuff…",
            "You get to support good causes…",
          ],
          questions: [
            {
              q: "Do you ever buy brand new clothes — or do you prefer second-hand / charity shops?",
              examples: [
                "It's unusual for me to buy brand new clothes…",
                "I get most of what I wear from charity shops because…",
              ],
            },
            {
              q: "What's the best 'pretty decent stuff' you've ever found second-hand?",
              examples: [
                "I once found quite tasteful designer clothes…",
                "Things in good condition that were only worn once or twice.",
              ],
            },
          ],
        },
      },
      {
        id: "speaker-2",
        label: "Speaker 2 · no fuss",
        teacher:
          "Beat 2 · Low-maintenance dresser. Read → cool chunks → talk about YOUR morning routine.",
        blocks: ["read", "context"],
        phrases: [
          "increase your self-confidence",
          "worrying about what to put on",
          "take ages, umming and ahhing over what to wear",
          "throw on the first thing I find in my wardrobe",
          "I'd be happy just wearing the same two or three T-shirts",
          "washing once a week",
          "not fashionable, but I'm not dirty",
        ],
        read: {
          letter: "2",
          title: "Speaker 2",
          subtitle: "doesn't care what to wear · option B",
          html:
            "<p>Apparently, dressing smartly is supposed to increase your self-confidence, but I&rsquo;ve never felt any different in a jacket and tie. And anyway, I&rsquo;m not the kind of person who spends time worrying about what to put on in the morning. Some people take ages, umming and ahhing over what to wear, but I just throw on the first thing I find in my wardrobe and that&rsquo;s it. Job done.</p>" +
            "<p>To be honest, I&rsquo;d be happy just wearing the same two or three T-shirts all the time. The trouble is, I only have time to do my washing once a week, so that wouldn&rsquo;t work. I may not be fashionable, but I&rsquo;m not dirty.</p>",
        },
        context: {
          tone: "Steal the stems · finish them about your routine",
          meanings: [
            "increase your self-confidence = make you feel more confident.",
            "umming and ahhing = hesitating aloud while deciding.",
            "throw on the first thing = grab whatever is nearest — no planning.",
            "Job done = finished quickly, no drama.",
            "not fashionable, but I'm not dirty = untrendy but still clean.",
          ],
        },
        speak: {
          mission: "60–90 s · morning routine + how much you care about clothes.",
          starters: [
            "I'm not the kind of person who spends time worrying about what to put on…",
            "I just throw on the first thing I find in my wardrobe…",
            "I'd be happy just wearing the same two or three T-shirts…",
          ],
          questions: [
            {
              q: "Do clothes increase your self-confidence — or are you like Speaker 2?",
              examples: [
                "Dressing smartly is supposed to increase your self-confidence, but…",
                "I never feel any different in a jacket and tie.",
              ],
            },
            {
              q: "How long do you spend choosing clothes — umming and ahhing, or 'job done'?",
              examples: [
                "Some people take ages… but I just throw on…",
                "I may not be fashionable, but I'm not dirty.",
              ],
            },
          ],
        },
      },
      {
        id: "speaker-3",
        label: "Speaker 3 · ethical buying",
        teacher:
          "Beat 3 · Ethical shopper. Read → cool chunks → talk about price, workers, and YOUR rules.",
        blocks: ["read", "context"],
        phrases: [
          "I get suspicious",
          "everything is incredibly cheap",
          "how much are the people who made them getting paid?",
          "what are their working conditions like?",
          "ethical clothing",
          "earn a decent salary",
          "information online",
          "no one is being exploited",
        ],
        read: {
          letter: "3",
          title: "Speaker 3",
          subtitle: "ethical clothing · option D",
          html:
            "<p>I get suspicious when I go into a clothes shop and see that everything is incredibly cheap. If the prices are so low, then how much are the people who made them getting paid? And what are their working conditions like?</p>" +
            "<p>I only buy from companies that sell ethical clothing, made by people who earn a decent salary and work in a safe environment. I usually get that kind of information online &ndash; it&rsquo;s easy enough to find. The clothes may not be as cheap and there&rsquo;s not necessarily any more guarantee of quality, but at least I can be confident that no one is being exploited.</p>",
        },
        context: {
          tone: "Steal the stems · your shopping ethics",
          meanings: [
            "I get suspicious = low prices make me doubt how workers are treated.",
            "ethical clothing = made without exploiting workers.",
            "earn a decent salary = paid fairly.",
            "working conditions = safety and treatment at work.",
            "no one is being exploited = workers aren't treated unfairly.",
          ],
        },
        speak: {
          mission: "60–90 s · do cheap clothes worry you? What do YOU check before buying?",
          starters: [
            "I get suspicious when everything is incredibly cheap…",
            "I only buy from companies that sell ethical clothing…",
            "At least I can be confident that no one is being exploited.",
          ],
          questions: [
            {
              q: "When you see incredibly cheap clothes, do you get suspicious too?",
              examples: [
                "How much are the people who made them getting paid?",
                "What are their working conditions like?",
              ],
            },
            {
              q: "Do you research brands online — or buy whatever is cheapest?",
              examples: [
                "I usually get that kind of information online…",
                "The clothes may not be as cheap, but…",
              ],
            },
          ],
        },
      },
      {
        id: "speaker-4",
        label: "Speaker 4 · confidence",
        teacher:
          "Beat 4 · Spender who dresses for confidence. Read → cool chunks → talk about how clothes make YOU feel.",
        blocks: ["read", "context"],
        phrases: [
          "make me feel good about myself",
          "my feelings of insecurity disappear",
          "it gives me a big lift",
          "My colleagues have got used to seeing me in something different every day",
        ],
        read: {
          letter: "4",
          title: "Speaker 4",
          subtitle: "clothes for confidence · option H",
          html:
            "<p>I spend a lot of money on clothes. I don&rsquo;t really care what they cost. They don&rsquo;t have to be designer clothes, but they do have to make me feel good about myself. I like to know that I can get something out of the wardrobe and any feelings of insecurity I have will just disappear as soon as I put it on.</p>" +
            "<p>Then when I get to work and someone says, &lsquo;Hey, that shirt really suits you&rsquo;, it gives me a big lift. And I never wear the same thing more than once in the same month. My colleagues have got used to seeing me in something different every day.</p>",
        },
        context: {
          tone: "Steal the stems · clothes and confidence",
          meanings: [
            "make me feel good about myself = boost self-esteem.",
            "feelings of insecurity disappear = self-doubt vanishes when dressed right.",
            "it gives me a big lift = a compliment really cheers me up.",
            "something different every day = a new outfit each workday.",
          ],
        },
        speak: {
          mission: "60–90 s · do clothes change how confident you feel?",
          starters: [
            "They do have to make me feel good about myself…",
            "Any feelings of insecurity I have will just disappear…",
            "It gives me a big lift when someone says…",
          ],
          questions: [
            {
              q: "Do the right clothes make your insecurity disappear — or doesn't it matter?",
              examples: [
                "I spend a lot of money on clothes because…",
                "They don't have to be designer clothes, but…",
              ],
            },
            {
              q: "Do compliments about your outfit give you a big lift?",
              examples: [
                "When someone says 'that shirt really suits you'…",
                "My colleagues have got used to seeing me in…",
              ],
            },
          ],
        },
      },
      {
        id: "speaker-5",
        label: "Speaker 5 · one in, one out",
        teacher:
          "Beat 5 · Replace-only wardrobe. Read → cool chunks → talk about how long YOUR clothes last.",
        blocks: ["read", "context"],
        phrases: [
          "get rid of an old one first",
          "I can't justify hanging on to it anymore",
          "it's so scruffy I'm too embarrassed to wear it",
          "it's literally falling apart at the seams",
          "none of my clothes ever end up in a second-hand shop",
          "they're no use to anyone – not just me",
          "the quality's got gradually worse",
        ],
        read: {
          letter: "5",
          title: "Speaker 5",
          subtitle: "replace when worn out · option F",
          html:
            "<p>If I want to go out and get a new T-shirt, for example, then I always have to get rid of an old one first. And I only do that when I can&rsquo;t justify hanging on to it anymore &ndash; either because it&rsquo;s so scruffy I&rsquo;m too embarrassed to wear it, or it&rsquo;s literally falling apart at the seams. That&rsquo;s why none of my clothes ever end up in a second-hand shop.</p>" +
            "<p>I replace them, precisely because they&rsquo;re no use to anyone &ndash; not just me. I&rsquo;ve been doing this for some time now, and I&rsquo;ve noticed that clothes used to last a lot longer; the quality&rsquo;s got gradually worse and I have to replace things far more often than before.</p>",
        },
        context: {
          tone: "Steal the stems · your replace / donate habits",
          meanings: [
            "get rid of an old one first = one-in-one-out rule.",
            "can't justify hanging on to it = no reason to keep it.",
            "falling apart at the seams = stitching is giving way.",
            "no use to anyone = too worn to donate or resell.",
            "the quality's got gradually worse = clothes don't last as long now.",
          ],
        },
        speak: {
          mission: "60–90 s · when do you throw clothes away — and do they last?",
          starters: [
            "I always have to get rid of an old one first…",
            "I can't justify hanging on to it anymore when…",
            "The quality's got gradually worse…",
          ],
          questions: [
            {
              q: "Before buying something new, do you get rid of an old item first?",
              examples: [
                "I only throw things away when they're falling apart at the seams…",
                "None of my clothes ever end up in a second-hand shop because…",
              ],
            },
            {
              q: "Do your clothes last as long as they used to?",
              examples: [
                "Clothes used to last a lot longer…",
                "The quality's got gradually worse and I replace things more often.",
              ],
            },
          ],
        },
      },
    ],
  };

  clothesTheme.beats.forEach(function (beat, i) {
    enrichBeatFromLexis(beat, i);
  });

  register(clothesTheme);
