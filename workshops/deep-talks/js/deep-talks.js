/**
 * Deep Talks — Fleabag-style beats, but text instead of video.
 * Beat = read profile → cool-words tape → talk · then improv finale.
 */
(function (global) {
  var BLOCK_META = {
    read: {
      title: "Read the profile",
      hint: "Short text · notice the lifestyle",
    },
    phrases: {
      title: "Notice these lines",
      hint: "Cool chunks from this beat · on the tape",
    },
    context: {
      title: "Meaning & lexis",
      hint: "Patterns · collocations · how it lands",
    },
    speak: {
      title: "Talk about it",
      hint: "Discussion · use the tape",
    },
  };

  function defaultBeats(n) {
    n = n || 4;
    var out = [];
    for (var i = 1; i <= n; i++) {
      out.push({
        id: "beat-" + i,
        label: "Beat " + i,
        teacher: "Read → notice phrases → short talk. Fill content later.",
        blocks: ["read", "context"],
        phrases: [],
        read: {
          title: "Text coming soon",
          html: "<p>Drop a short reading passage here for this beat.</p>",
        },
        speak: {
          mission: "Answer in English · steal tape phrases when they fit.",
          questions: ["What stood out in this text — and why?"],
        },
      });
    }
    return out;
  }

  var THEMES = [
    {
      id: "lifestyle",
      num: 1,
      title: "Lifestyle",
      icon: "🌿",
      tagline: "Four ways of living · cool words · talk",
      lenses: ["Whose life appeals?", "Trade-offs", "Would you swap?"],
      synopsis:
        "Four personal accounts — work shapes how people live. Same beat flow as Fleabag: text → cool words → talk → improv.",
      beats: [
        {
          id: "lucas",
          label: "Lucas · actor",
          teacher:
            "Profile A · late mornings, scripts everywhere, theatre nights. Tape = lifestyle chunks. Talk: mess, sleep, fitness ‘because I should’.",
          blocks: ["read", "context"],
          phrases: [
            "not really my idea of fun",
            "a bit of a mess",
            "lose track of time",
            "out like a light",
            "unwinding",
          ],
          read: {
            title: "Lucas Martín · television and stage actor",
            html:
              "<p>Normally I get out of bed around midday. I’ll sometimes go for a run after I get up, though it’s not really my idea of fun. I’m not a fitness fan, but I realise it’s important.</p>" +
              "<p>When I’m not rehearsing or on tour, afternoons generally involve reading scripts or learning lines. My flatmates are also actors, so at home there are usually scripts lying all over the place. It’s a bit of a mess, I’m ashamed to say. I’m passionate about history, and if I’m working away from home, I’ll often spend the afternoon in a museum or historic building. I sometimes lose track of time, and I once turned up late for a play I was in. I felt terrible, so now I always get to the theatre early; I’m usually the first to arrive.</p>" +
              "<p>After a performance I eat and spend a few hours unwinding, so bedtime is often one or two in the morning. I’m normally out like a light as soon as my head hits the pillow.</p>",
          },
          context: {
            tone: "Lexical · routines · mess · sleep",
            meanings: [
              "not really my idea of fun = I don’t enjoy it (even if I do it).",
              "a bit of a mess = untidy / chaotic (home or life).",
              "lose track of time = forget how late it is.",
              "unwinding = relaxing after stress (after a show).",
              "out like a light = fall asleep immediately.",
            ],
            examples: [
              "NOT MY IDEA OF FUN — not really my idea of fun · not my idea of a good time.",
              "I’ll sometimes go for a run… though it’s not really my idea of fun.",
              "A BIT OF A MESS — a bit of a mess · the flat’s a mess · my schedule’s a mess.",
              "It’s a bit of a mess, I’m ashamed to say.",
              "LOSE TRACK OF TIME — lose track of time · I completely lost track of time.",
              "I sometimes lose track of time…",
              "OUT LIKE A LIGHT — out like a light · asleep as soon as my head hits the pillow.",
              "I’m normally out like a light as soon as my head hits the pillow.",
            ],
          },
          speak: {
            mission:
              "Personal English · 60–90 s · steal tape phrases when they fit.",
            starters: [
              "Not really my idea of fun, but…",
              "My place is a bit of a mess when…",
              "I lose track of time whenever…",
              "I’m out like a light if…",
            ],
            questions: [
              {
                q: "Lucas runs even though it’s not his idea of fun. What do you do ‘because it’s important’ — not because you love it?",
                examples: [
                  "I stretch / meal-prep / call my parents — not joy, but it matters.",
                  "I force myself to sleep earlier before big days.",
                ],
              },
              {
                q: "Scripts all over the place — is a messy home a creative lifestyle or just chaos? Where’s your line?",
                examples: [
                  "Creative mess is fine until guests arrive.",
                  "Chaos stresses me — I need clear surfaces to think.",
                ],
              },
              {
                q: "Bed at 1–2 a.m., out like a light. Does a late lifestyle fit you — or would it destroy your week?",
                examples: [
                  "I’m a night owl — mornings are the hard part.",
                  "I’d unravel without a fixed bedtime.",
                ],
              },
            ],
          },
        },
        {
          id: "maja",
          label: "Maja · ski instructor",
          teacher:
            "Profile B · seasonal life, short walk to work, plenty of days off — and the pull toward ‘normal’.",
          blocks: ["read", "context"],
          phrases: [
            "a short walk from",
            "plenty of days off",
            "carry on doing this",
            "settle down",
            "steady and secure",
          ],
          read: {
            title: "Maja Andersson · ski and snowboard instructor",
            html:
              "<p>I generally spend six months in Europe and six in New Zealand, but I’ve also worked in Japan and Canada. Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast before setting off for work.</p>" +
              "<p>When I started out eight years ago, I used to teach groups of young kids. Now I’m fully qualified, I tend to get the advanced classes, which I find more interesting. We get plenty of days off and when I’m not working, I go skiing by myself, or catch up on my sleep — I have no problem spending the morning in bed!</p>" +
              "<p>I love the lifestyle, but I’m not sure I can carry on doing this for much longer. It might be time to settle down and get a more normal job, something steady and secure. I haven’t made up my mind yet, though.</p>",
          },
          context: {
            tone: "Lexical · location · free time · ‘normal’ life",
            meanings: [
              "a short walk from = very close to (the workplace / slopes).",
              "plenty of days off = lots of free days.",
              "carry on doing this = continue this lifestyle / job.",
              "settle down = start a more stable life (often home + routine).",
              "steady and secure = stable and safe (job / future).",
            ],
            examples: [
              "A SHORT WALK FROM — a short walk from the slopes / the office / the station.",
              "I usually live just a short walk from the slopes.",
              "PLENTY OF DAYS OFF — plenty of days off · hardly any days off.",
              "We get plenty of days off…",
              "CARRY ON — carry on doing this · can’t carry on like this.",
              "I’m not sure I can carry on doing this for much longer.",
              "SETTLE DOWN — settle down · settle down and get a more normal job.",
              "STEADY AND SECURE — something steady and secure · a steady income.",
            ],
          },
          speak: {
            mission: "60–90 s · use at least two tape phrases.",
            starters: [
              "I live a short walk from…",
              "Plenty of days off sounds amazing, but…",
              "I couldn’t carry on…",
              "Settle down / steady and secure — for me that means…",
            ],
            questions: [
              {
                q: "Would you trade a ‘dream’ seasonal lifestyle for something steady and secure? What would tip you over?",
                examples: [
                  "Money / health / wanting a partner / kids.",
                  "I’d keep the dream as long as my body allows.",
                ],
              },
              {
                q: "Plenty of days off vs interesting work — which matters more in the lifestyle you’d choose?",
                examples: [
                  "Days off — I recharge slowly.",
                  "Interesting work — boredom kills me faster than tiredness.",
                ],
              },
              {
                q: "Maja hasn’t made up her mind. Have you ever loved a lifestyle and still felt it was temporary?",
                examples: [
                  "Uni / travel / first job — I knew it had an expiry date.",
                  "I’m living that question right now.",
                ],
              },
            ],
          },
        },
        {
          id: "reo",
          label: "Reo · farm vet",
          teacher:
            "Profile C · variety vs myths about the job · no room for a dog, let alone marriage.",
          blocks: ["read", "context"],
          phrases: [
            "from one day to the next",
            "put some people off",
            "loads of free time",
            "fit … in",
            "settle down with",
          ],
          read: {
            title: "Reo Tanaka · farm vet",
            html:
              "<p>I used to have a dog and we’d go running together most mornings, but I gave him to my mum in the end. I tend to be out all day, visiting farms, and it wasn’t fair to leave him alone. So now I don’t get as much exercise as I’d like to.</p>" +
              "<p>I love my job, especially the variety and not knowing what you’ll be doing from one day to the next. But being a vet — any type of vet — is not what most people think. It’s not all cuddly lambs and cute little calves. We have to do some pretty unpleasant things sometimes, things which might put some people off working with animals for life.</p>" +
              "<p>My mum wants to know when I’m going to find someone to settle down with, but it’s not as if I have loads of free time to go looking. There’s not even room for a dog in my life, so I don’t see how I’ll be able to fit marriage in.</p>",
          },
          context: {
            tone: "Lexical · variety · myths · time for relationships",
            meanings: [
              "from one day to the next = unpredictable day by day.",
              "put someone off = make them not want to do something.",
              "loads of free time = lots of spare time (often ironic / denied).",
              "fit X in = find time/space for X in a busy life.",
              "settle down with someone = start a long-term life with a partner.",
            ],
            examples: [
              "FROM ONE DAY TO THE NEXT — not knowing … from one day to the next.",
              "I love … not knowing what you’ll be doing from one day to the next.",
              "PUT SOMEONE OFF — put people off · put me off for life.",
              "… things which might put some people off working with animals for life.",
              "LOADS OF FREE TIME — it’s not as if I have loads of free time.",
              "FIT … IN — fit marriage in · fit exercise in · can’t fit it in.",
              "There’s not even room for a dog… so I don’t see how I’ll be able to fit marriage in.",
            ],
          },
          speak: {
            mission: "Honest talk · 60–90 s · tape phrases welcome.",
            starters: [
              "From one day to the next, my life…",
              "That would put me off…",
              "I don’t have loads of free time to…",
              "I can’t fit … in because…",
            ],
            questions: [
              {
                q: "Which jobs look cute from the outside but might put people off once they see the reality?",
                examples: [
                  "Teaching / medicine / hospitality — Instagram vs the shift.",
                  "Anything with animals or kids looks soft until it isn’t.",
                ],
              },
              {
                q: "Reo gave the dog away for fairness. What have you dropped from your lifestyle because work swallowed the time?",
                examples: [
                  "Hobbies, friends, cooking, sport.",
                  "I refuse to drop X — I’d rather change the job.",
                ],
              },
              {
                q: "Can a demanding career and ‘settle down’ fit in the same lifestyle — or do you have to choose a season?",
                examples: [
                  "Seasons: grind now, settle later.",
                  "If it can’t fit, the lifestyle is the wrong one.",
                ],
              },
            ],
          },
        },
        {
          id: "ben",
          label: "Ben · mountaineer",
          teacher:
            "Profile D · unconventional life, danger as aliveness — he wouldn’t encourage others to adopt it.",
          blocks: ["read", "context"],
          phrases: [
            "unconventional way of life",
            "actively encourage",
            "make a living",
            "sense of danger",
            "feel alive",
          ],
          read: {
            title: "Ben Adams · mountaineer and wind turbine technician",
            html:
              "<p>As a child, I would tell everyone that when I grew up, I wanted to climb Everest. I’ve actually climbed it three times now, and I’ve also scaled four more of the fourteen peaks over 8000 metres.</p>" +
              "<p>And when I’m not on a mountain, you might come across me hanging on a rope from a wind turbine, carrying out repairs to damaged blades at heights of up to 100 metres. That’s how I make a living and pay for my climbing trips. I also sometimes get sponsorship from companies, which provide funding and maybe food and equipment. In return, I mention the sponsors in the talks I give and the articles I write when I get back from my climbs.</p>" +
              "<p>It’s a fairly unconventional way of life, and not one I’d actively encourage others to adopt — there’s a lot of danger involved — but it works for me. It’s precisely that sense of danger that makes me feel alive.</p>",
          },
          context: {
            tone: "Lexical · work · risk · identity",
            meanings: [
              "make a living = earn money to live.",
              "unconventional way of life = unusual lifestyle.",
              "actively encourage = strongly recommend / push people to do it.",
              "sense of danger = feeling that risk is present.",
              "feel alive = feel fully present / excited (often via risk or passion).",
            ],
            examples: [
              "MAKE A LIVING — make a living · that’s how I make a living.",
              "That’s how I make a living and pay for my climbing trips.",
              "UNCONVENTIONAL WAY OF LIFE — a fairly unconventional way of life.",
              "ACTIVELY ENCOURAGE — not one I’d actively encourage others to adopt.",
              "SENSE OF DANGER — that sense of danger · a real sense of danger.",
              "FEEL ALIVE — makes me feel alive · I only feel alive when…",
              "It’s precisely that sense of danger that makes me feel alive.",
            ],
          },
          speak: {
            mission: "Strong opinions · 60–90 s · steal tape phrases.",
            starters: [
              "That’s how I’d make a living if…",
              "An unconventional way of life appeals when…",
              "I wouldn’t actively encourage…",
              "I feel alive when…",
            ],
            questions: [
              {
                q: "Ben wouldn’t actively encourage others to adopt his lifestyle. When is ‘it works for me’ not a good reason to recommend a way of life?",
                examples: [
                  "When the risk falls on family / rescue teams.",
                  "When you’re selling a fantasy, not the boring parts.",
                ],
              },
              {
                q: "What makes you feel alive — and is it healthy enough to build a lifestyle around?",
                examples: [
                  "Performance, travel, deep work, risk sports…",
                  "Calm connection feels alive to me — not danger.",
                ],
              },
              {
                q: "Whose lifestyle here would you least want — Lucas, Maja, Reo, or Ben — and why?",
                examples: [
                  "Pick one and name the deal-breaker (sleep / risk / loneliness / instability).",
                ],
              },
            ],
          },
        },
      ],
      finale: {
        prompt:
          "Improv: pick a lifestyle you’d try for one year — or refuse forever. Use at least 5 cool-word phrases from the tape. Partners: one follow-up only.",
      },
      homework: {
        note:
          "Reread one profile. Record 45–60 s: which lifestyle fits you least, and which tape phrase you’d steal for your own life.",
      },
    },
    {
      id: "focus",
      num: 2,
      title: "Focus & digital life",
      icon: "📵",
      tagline: "Attention · boredom · boundaries",
      lenses: ["What steals your focus?", "Phone rules that actually work", "Deep work vs busy work"],
      beats: defaultBeats(4),
      finale: { prompt: "Improv with the tape phrases — fill beats later." },
      homework: { note: "Reread · 45 s voice note with 2 tape phrases." },
    },
    {
      id: "money",
      num: 3,
      title: "Money & enough",
      icon: "💳",
      tagline: "Mindset · spending · «enough»",
      lenses: ["Emotional spending", "Money talk in relationships", "More vs enough"],
      beats: defaultBeats(4),
      finale: { prompt: "Improv with the tape phrases — fill beats later." },
      homework: { note: "Reread · 45 s voice note with 2 tape phrases." },
    },
    {
      id: "work",
      num: 4,
      title: "Work that fits you",
      icon: "💼",
      tagline: "Burnout · meaning · next move",
      lenses: ["Signals you're burning out", "Stay, shift, or quit?", "Work you vs work role"],
      beats: defaultBeats(4),
      finale: { prompt: "Improv with the tape phrases — fill beats later." },
      homework: { note: "Reread · 45 s voice note with 2 tape phrases." },
    },
    {
      id: "communication",
      num: 5,
      title: "Talk, boundaries, repair",
      icon: "🗣️",
      tagline: "Hard conversations · saying no",
      lenses: ["A conversation you avoid", "No without guilt", "Repair after conflict"],
      beats: defaultBeats(4),
      finale: { prompt: "Improv with the tape phrases — fill beats later." },
      homework: { note: "Reread · 45 s voice note with 2 tape phrases." },
    },
    {
      id: "decisions",
      num: 6,
      title: "Decisions & regret",
      icon: "🔀",
      tagline: "Choose · second-guess · move on",
      lenses: ["Analysis paralysis", "A decision you'd redo", "Reversible vs irreversible"],
      beats: defaultBeats(4),
      finale: { prompt: "Improv with the tape phrases — fill beats later." },
      homework: { note: "Reread · 45 s voice note with 2 tape phrases." },
    },
    {
      id: "connection",
      num: 7,
      title: "Connection & loneliness",
      icon: "🫂",
      tagline: "Friendship · quality · showing up",
      lenses: ["Loneliness vs being alone", "Adult friendship", "Small gestures that matter"],
      beats: defaultBeats(4),
      finale: { prompt: "Improv with the tape phrases — fill beats later." },
      homework: { note: "Reread · 45 s voice note with 2 tape phrases." },
    },
    {
      id: "confidence",
      num: 8,
      title: "Confidence & imposter feelings",
      icon: "✨",
      tagline: "Self-doubt · comparison · showing up",
      lenses: ["When you feel like a fraud", "Comparison traps", "Confidence vs competence"],
      beats: defaultBeats(4),
      finale: { prompt: "Improv with the tape phrases — fill beats later." },
      homework: { note: "Reread · 45 s voice note with 2 tape phrases." },
    },
  ];

  function getTheme(id) {
    for (var i = 0; i < THEMES.length; i++) {
      if (THEMES[i].id === id) return THEMES[i];
    }
    return null;
  }

  function buildFlow(theme) {
    var beats = (theme && theme.beats) || defaultBeats(4);
    var screens = beats.map(function (b, i) {
      return {
        kind: "beat",
        id: b.id || "beat-" + (i + 1),
        label: b.label || "Beat " + (i + 1),
        short: String(i + 1),
        teacher: b.teacher || "",
        blocks: b.blocks || ["read", "context"],
        phrases: b.phrases || [],
        read: b.read || null,
        context: b.context || null,
        speak: b.speak || null,
        optional: !!b.optional,
        time: b.time || "8–12 min",
      };
    });
    screens.push({
      kind: "finale",
      id: "finale",
      label: "Improv",
      short: "★",
      teacher:
        "All cool words stay on screen. Learners improvise — mission: use as many tape phrases as they can.",
      prompt:
        (theme && theme.finale && theme.finale.prompt) ||
        "Improvise with the tape phrases.",
      time: "10–15 min",
    });
    screens.push({
      kind: "homework",
      id: "homework",
      label: "Homework",
      short: "HW",
      teacher: "Take-home speaking — no video; text + voice.",
      note:
        (theme && theme.homework && theme.homework.note) ||
        "Reread one beat · 45–60 s voice with 2 tape phrases.",
      time: "15–20 min",
    });
    return screens;
  }

  function allPhrases(theme) {
    var list = [];
    var seen = {};
    ((theme && theme.beats) || []).forEach(function (b) {
      (b.phrases || []).forEach(function (p) {
        var k = String(p).toLowerCase();
        if (seen[k]) return;
        seen[k] = 1;
        list.push(p);
      });
    });
    return list;
  }

  global.DEEP_TALKS_BLOCK_META = BLOCK_META;
  global.DEEP_TALKS_THEMES = THEMES;
  global.DEEP_TALKS_getTheme = getTheme;
  global.DEEP_TALKS_buildFlow = buildFlow;
  global.DEEP_TALKS_allPhrases = allPhrases;
  /** legacy — lesson uses buildFlow */
  global.DEEP_TALKS_STEPS = [];
})(typeof window !== "undefined" ? window : globalThis);
