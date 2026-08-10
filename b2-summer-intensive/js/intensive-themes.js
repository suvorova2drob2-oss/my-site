/**
 * B2 Summer Speaking Intensive — Fleabag-style beats, text instead of video.
 * Theme 1 Lifestyle · Beat 1 Lucas (coursebook text + cool-word phrases).
 */
(function (global) {
  var BLOCK_META = {
    read: {
      title: "Read the profile",
      hint: "Paper text · notice the lifestyle",
    },
    phrases: {
      title: "Notice these lines",
      hint: "Cool chunks · on the tape",
    },
    context: {
      title: "Meaning & lexis",
      hint: "How natives use it",
    },
    speak: {
      title: "Talk about it",
      hint: "Discussion · steal tape phrases",
    },
  };

  function defaultBeats(n) {
    n = n || 4;
    var out = [];
    for (var i = 1; i <= n; i++) {
      out.push({
        id: "beat-" + i,
        label: "Beat " + i,
        teacher: "Read → cool words → talk. Content later.",
        blocks: ["read", "context"],
        phrases: [],
        read: {
          letter: String(i),
          title: "Text coming soon",
          html: "<p>Drop a short reading passage here for this beat.</p>",
        },
        speak: {
          mission: "Answer in English · use the tape phrases.",
          questions: ["What stood out — and why?"],
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
      tagline: "Four ways of living · text beats · cool words · talk",
      synopsis:
        "Same beat flow as Fleabag — read a short profile, keep cool words on the tape, then speak. Start with Lucas.",
      goal: {
        title: "Goal · what they leave with",
        examVsSpeak:
          "Exam track (Mastering B2 Reading Part 7) trains matching & scanning. This intensive is the speaking twin of the same texts — not another exam paper.",
        learn: [
          "Steal ready-made lifestyle chunks (routines, trade-offs, risk, free time) and reuse them about THEIR life.",
          "Stretch stems into full turns: notice → meaning → personal answer (60–90 s).",
          "Sound more natural under time pressure: tape in view, improv with 5+ phrases.",
        ],
        notThis: [
          "Not testing who said what (A–D keys).",
          "Not silent reading comprehension for a score.",
        ],
        teacherTip:
          "Keep books closed for keys. Text = fuel for talk. Correct only if a phrase is broken; celebrate attempts that steal the tape.",
      },
      beats: [
        {
          id: "lucas",
          label: "Lucas · actor",
          teacher:
            "Beat 1 · Lucas Martín. Read on paper → notice cool chunks on the tape → discussion. Soften / expand stems (I’m passionate about… / my bedtime is…) into full answers.",
          blocks: ["read", "context"],
          phrases: [
            "Normally I get out of bed around… though it's not really my idea of fun",
            "but I realise it's important",
            "my afternoons generally involve… scripts lying all over the place",
            "It's a bit of a mess I'm ashamed to say",
            "I sometimes lose track of time",
            "I'm passionate about",
            "I once turned up late for",
            "I spend a few hours unwinding",
            "my bedtime is",
            "I'm normally out like a light as soon as my head hits the pillow",
          ],
          read: {
            letter: "A",
            title: "Lucas Martín",
            subtitle: "television and stage actor",
            html:
              "<p>Normally I get out of bed around midday. I’ll sometimes go for a run after I get up, though it’s not really my idea of fun. I’m not a fitness fan, but I realise it’s important.</p>" +
              "<p>When I’m not rehearsing or on tour, afternoons generally involve reading scripts or learning lines. My flatmates are also actors, so at home there are usually scripts lying all over the place. It’s a bit of a mess, I’m ashamed to say. I’m passionate about history, and if I’m working away from home, I’ll often spend the afternoon in a museum or historic building. I sometimes lose track of time, and I once turned up late for a play I was in. I felt terrible, so now I always get to the theatre early; I’m usually the first to arrive.</p>" +
              "<p>After a performance I eat and spend a few hours unwinding, so bedtime is often one or two in the morning. I’m normally out like a light as soon as my head hits the pillow.</p>",
          },
          context: {
            tone: "Steal the stems · finish them about your life",
            meanings: [
              "not really my idea of fun = I don’t enjoy it (even if I still do it).",
              "I realise it’s important = I know it matters, even without loving it.",
              "afternoons generally involve… = a typical afternoon looks like…",
              "a bit of a mess = untidy / chaotic (home or life).",
              "lose track of time = forget how late it is.",
              "turned up late for = arrived late to.",
              "unwinding = relaxing after stress.",
              "out like a light = fall asleep immediately.",
            ],
          },
          speak: {
            mission:
              "60–90 s · steal tape phrases (finish the stems about YOU).",
            starters: [
              "Normally I get out of bed around… though it's not really my idea of fun…",
              "My afternoons generally involve…",
              "It's a bit of a mess I'm ashamed to say…",
              "I'm passionate about…",
              "I'm normally out like a light as soon as…",
            ],
            questions: [
              {
                q: "What do you do even though it’s not really your idea of fun — because you realise it’s important?",
                examples: [
                  "I go for a run / stretch / meal-prep — not joy, but it matters.",
                  "I force an earlier bedtime before heavy days.",
                ],
              },
              {
                q: "What do your afternoons generally involve when you’re not ‘on’? Any scripts lying all over the place in your life?",
                examples: [
                  "Laptop tabs, laundry, half-finished hobbies…",
                  "My desk is a bit of a mess, I’m ashamed to say.",
                ],
              },
              {
                q: "When do you lose track of time — and have you ever turned up late for something that mattered?",
                examples: [
                  "Museums / scrolling / gaming / deep work.",
                  "I once turned up late for… and I felt terrible.",
                ],
              },
              {
                q: "How do you unwind — and what’s your bedtime story? Out like a light, or not?",
                examples: [
                  "I spend a few hours unwinding with…",
                  "My bedtime is… · I’m normally out like a light / I lie awake.",
                ],
              },
            ],
          },
        },
        {
          id: "maja",
          label: "Maja · ski instructor",
          teacher:
            "Beat 2 · Maja Andersson. Read on paper → cool chunks on the tape → discussion. Soften / expand stems (I tend to… / I’m passionate about a short walk from…) into full answers about YOUR lifestyle.",
          blocks: ["read", "context"],
          phrases: [
            "wherever I am, I love the fact",
            "I usually live just a short walk from",
            "I can get up reasonably late",
            "I still have time for a decent breakfast, set off for work",
            "I'm fully qualified",
            "I tend to",
            "I can catch up on my sleep",
            "I'm not sure I can carry on doing this much longer",
            "it might be time to settle down",
            "get a more normal job, something steady and secure",
            "I haven't made up my mind yet, though",
          ],
          read: {
            letter: "B",
            title: "Maja Andersson",
            subtitle: "ski and snowboard instructor",
            html:
              "<p>I generally spend six months in Europe and six in New Zealand, but I’ve also worked in Japan and Canada. Wherever I am, I love the fact that I usually live just a short walk from the slopes, so I can get up reasonably late and still have time for a decent breakfast, before setting off for work.</p>" +
              "<p>When I started out eight years ago, I used to teach groups of young kids. Now I’m fully qualified, I tend to get the advanced classes, which I find more interesting. We get plenty of days off and when I’m not working, I go skiing by myself, or catch up on my sleep – I have no problem spending the morning in bed!</p>" +
              "<p>I love the lifestyle, but I’m not sure I can carry on doing this much longer. It might be time to settle down and get a more normal job, something steady and secure. I haven’t made up my mind yet, though.</p>",
          },
          context: {
            tone: "Steal the stems · finish them about your life / work",
            meanings: [
              "wherever I am, I love the fact = no matter the place, this part stays true.",
              "a short walk from = very close to (work / slopes / school).",
              "get up reasonably late = not an early start.",
              "set off for work = leave home to go to work.",
              "fully qualified = has the full training / certificates.",
              "I tend to = I usually / I’m more likely to…",
              "catch up on my sleep = sleep extra to make up for lost rest.",
              "carry on doing this = continue this lifestyle / job.",
              "settle down = start a more stable life.",
              "steady and secure = stable and safe (job / future).",
              "I haven’t made up my mind yet = I still haven’t decided.",
            ],
          },
          speak: {
            mission:
              "60–90 s · steal tape phrases (finish the stems about YOU).",
            starters: [
              "Wherever I am, I love the fact that…",
              "I usually live just a short walk from…",
              "I can get up reasonably late and still…",
              "I'm not sure I can carry on…",
              "It might be time to settle down…",
              "I haven't made up my mind yet, though…",
            ],
            questions: [
              {
                q: "Wherever you are, what do you love about your setup — location, routine, or freedom?",
                examples: [
                  "Wherever I am, I love the fact that I can…",
                  "I usually live just a short walk from… and that changes everything.",
                ],
              },
              {
                q: "Do you get up reasonably late and still have time for a decent breakfast before you set off for work — or is mornings chaos?",
                examples: [
                  "I can get up reasonably late… / I set off for work half-asleep.",
                  "I catch up on my sleep at weekends.",
                ],
              },
              {
                q: "When do you say “I’m fully qualified / I tend to…” about your work — and when do you feel you’re still starting out?",
                examples: [
                  "I'm fully qualified on paper, but I still tend to…",
                  "I tend to get the hard / easy tasks.",
                ],
              },
              {
                q: "Is it time to settle down and get something steady and secure — or can you carry on a bit longer? Have you made up your mind?",
                examples: [
                  "I'm not sure I can carry on doing this much longer.",
                  "It might be time to settle down… I haven't made up my mind yet, though.",
                ],
              },
            ],
          },
        },
        {
          id: "reo",
          label: "Reo · farm vet",
          teacher:
            "Beat 3 · Reo Tanaka. Paper read → cool-word tape → drill stems, then freer talk. Push: finish stems about THEIR job / lifestyle (not retell the vet story).",
          blocks: ["read", "context"],
          phrases: [
            "I tend to be out all day",
            "So now I don't get as much exercise as I'd like to",
            "I love my job, especially the variety",
            "It's not all cuddly",
            "things which might put some people off working with animals for life",
            "I have loads of free time to go looking",
            "There's not even room for a dog in my life, so I don't see how I'll be able to fit marriage in",
          ],
          read: {
            letter: "C",
            title: "Reo Tanaka",
            subtitle: "farm vet",
            html:
              "<p>I used to have a dog and we’d go running together most mornings, but I gave him to my mum in the end. I tend to be out all day, visiting farms, and it wasn’t fair to leave him alone. So now I don’t get as much exercise as I’d like to.</p>" +
              "<p>I love my job, especially the variety and not knowing what you’ll be doing from one day to the next. But being a vet — any type of vet — is not what most people think. It’s not all cuddly lambs and cute little calves. We have to do some pretty unpleasant things sometimes, things which might put some people off working with animals for life.</p>" +
              "<p>My mum wants to know when I’m going to find someone to settle down with, but it’s not as if I have loads of free time to go looking. There’s not even room for a dog in my life, so I don’t see how I’ll be able to fit marriage in.</p>",
          },
          context: {
            tone: "Drill the stems · then steal them for YOUR work / free time / relationships",
            meanings: [
              "I tend to be out all day = my typical day keeps me away from home.",
              "don’t get as much exercise as I’d like to = less sport / movement than I want.",
              "especially the variety = what I love most is that every day is different.",
              "It’s not all cuddly = the cute image is incomplete / the job has hard parts.",
              "put some people off = make them not want to do it.",
              "loads of free time to go looking = lots of spare time to search (for a partner) — often ironic / denied.",
              "not even room for a dog = my life is too full / tight for another commitment.",
              "fit … in = find time or space for something in a busy life.",
            ],
          },
          speak: {
            mission:
              "Round A = lexicon drill (finish stems). Round B = spontaneous talk · steal ≥3 tape phrases.",
            starters: [
              "I tend to be out all day, so…",
              "I don't get as much exercise as I'd like to because…",
              "I love my job, especially the variety — for example…",
              "It's not all cuddly — people think… but actually…",
              "That might put some people off…",
              "It's not as if I have loads of free time to…",
              "There's not even room for… so I don't see how I'll fit … in.",
            ],
            questions: [
              {
                q: "Lex drill · 40 s: Finish three stems about YOUR week — “I tend to be out all day…” / “I don’t get as much … as I’d like to…” / “I love …, especially the variety…”",
                examples: [
                  "I tend to be out all day with clients / uni / kids.",
                  "I don't get as much exercise / sleep / reading as I'd like to.",
                  "I love my course, especially the variety of topics.",
                ],
              },
              {
                q: "Lex drill · swap: Partner A says a ‘cute’ job image. Partner B answers with “It’s not all cuddly…” + one real downside.",
                examples: [
                  "Teaching? It's not all cuddly — marking at midnight.",
                  "Working with animals / kids / travel — people see the Instagram bit.",
                ],
              },
              {
                q: "What about your work or studies might put some people off for life — and what still makes you stay?",
                examples: [
                  "Night shifts / unpaid overtime / emotional load…",
                  "Things which might put some people off… but I stay because…",
                ],
              },
              {
                q: "Spontaneous: Do you have loads of free time to go looking for hobbies / people / a better job — or is there not even room for a dog in your life?",
                examples: [
                  "It's not as if I have loads of free time to go looking.",
                  "There's not even room for a dog… so I don't see how I'll fit marriage / a side project in.",
                ],
              },
              {
                q: "Hot seat (60–90 s): Describe your lifestyle without naming your job. Steal: tend to be out all day · not all cuddly · put people off · fit … in. Partners guess the job.",
                examples: [
                  "I tend to be out all day… It's not all cuddly… There's not even room for…",
                ],
              },
            ],
          },
        },
        {
          id: "ben",
          label: "Ben · mountaineer",
          teacher:
            "Beat 4 · Ben Adams. Paper read → cool-word tape → drill stems, then freer talk about risk, money, and what makes you feel alive. Push personal English, not a plot retell.",
          blocks: ["read", "context"],
          phrases: [
            "you might come across me hanging on a rope",
            "you might come across me…",
            "That's how I make a living and pay for",
            "provide funding and maybe food and equipment",
            "It's a fairly unconventional way of life",
            "I'd actively encourage others to adopt — there's a lot of danger involved — but it works for me",
            "It's precisely that sense of danger that makes me feel alive",
          ],
          read: {
            letter: "D",
            title: "Ben Adams",
            subtitle: "mountaineer and wind turbine technician",
            html:
              "<p>As a child, I would tell everyone that when I grew up, I wanted to climb Everest. I’ve actually climbed it three times now, and I’ve also scaled four more of the fourteen peaks over 8000 metres.</p>" +
              "<p>And when I’m not on a mountain, you might come across me hanging on a rope from a wind turbine, carrying out repairs to damaged blades at heights of up to 100 metres. That’s how I make a living and pay for my climbing trips. I also sometimes get sponsorship from companies, which provide funding and maybe food and equipment. In return, I mention the sponsors in the talks I give and the articles I write when I get back from my climbs.</p>" +
              "<p>It’s a fairly unconventional way of life, and not one I’d actively encourage others to adopt — there’s a lot of danger involved — but it works for me. It’s precisely that sense of danger that makes me feel alive.</p>",
          },
          context: {
            tone: "Drill the stems · then steal them for YOUR work / risk / what funds your dreams",
            meanings: [
              "you might come across me… = you could bump into me doing something unexpected.",
              "hanging on a rope = literally on a rope (height / climbing work).",
              "That’s how I make a living and pay for… = this job funds the rest of my life / hobby.",
              "provide funding and maybe food and equipment = sponsors give money and practical support.",
              "a fairly unconventional way of life = an unusual lifestyle.",
              "actively encourage others to adopt = strongly recommend this lifestyle to other people.",
              "there’s a lot of danger involved = real risk is part of it.",
              "it works for me = it suits my life even if it’s not for everyone.",
              "precisely that sense of danger… feel alive = the risk itself is what gives the rush / meaning.",
            ],
          },
          speak: {
            mission:
              "Round A = lexicon drill (finish stems). Round B = spontaneous talk · steal ≥3 tape phrases.",
            starters: [
              "You might come across me…",
              "That's how I make a living and pay for…",
              "Companies / parents / my side hustle provide funding and maybe…",
              "It's a fairly unconventional way of life…",
              "I wouldn't / I'd actively encourage others to adopt it — there's a lot of danger involved — but it works for me.",
              "It's precisely that sense of … that makes me feel alive.",
            ],
            questions: [
              {
                q: "Lex drill · 40 s: Finish “You might come across me…” three ways (hobby / job / guilty pleasure). Partner repeats one back with a follow-up.",
                examples: [
                  "You might come across me hanging on a rope / in a library at midnight / in the gym at 6 a.m.",
                  "You might come across me… and wonder what I’m doing.",
                ],
              },
              {
                q: "Lex drill · money: How do you make a living — and what does that pay for? Use “That’s how I make a living and pay for…”",
                examples: [
                  "That's how I make a living and pay for travel / courses / climbing trips.",
                  "Sponsorship / a day job / freelance can provide funding and maybe food and equipment.",
                ],
              },
              {
                q: "Would you actively encourage others to adopt your lifestyle? Say why there’s danger / cost involved — or why it still works for you.",
                examples: [
                  "It's a fairly unconventional way of life…",
                  "Not one I'd actively encourage… there's a lot of danger involved — but it works for me.",
                ],
              },
              {
                q: "Spontaneous: What is it — precisely — that makes you feel alive? Steal the frame: “It’s precisely that sense of … that makes me feel alive.”",
                examples: [
                  "It's precisely that sense of danger / freedom / progress / quiet that makes me feel alive.",
                ],
              },
              {
                q: "Hot seat (60–90 s): Sell or refuse Ben’s lifestyle. Steal: unconventional way of life · make a living · danger involved · feel alive. Partner: one devil’s-advocate question.",
                examples: [
                  "It's a fairly unconventional way of life… That's how he makes a living… but I wouldn't encourage it.",
                ],
              },
            ],
          },
        },
      ],
      finale: {
        prompt:
          "Improv: whose lifestyle would you try for one year — or refuse forever? Use at least 5 cool-word phrases from Lucas’s tape (and any others you stole).",
      },
      homework: {
        note:
          "Reread Lucas. Record 45–60 s using at least four tape phrases about YOUR routine (bedtime, mess, passion, unwinding).",
      },
    },
    {
      id: "digital-detox",
      num: 2,
      title: "Digital Detox",
      icon: "📵",
      tagline: "Телефоны · экраны · внимание · зависимость",
      beats: defaultBeats(4),
      finale: { prompt: "Improv with the tape — fill beats later." },
      homework: { note: "Reread · 45 s voice with 2 tape phrases." },
    },
    {
      id: "eating-out",
      num: 3,
      title: "Eating Out",
      icon: "🍽️",
      tagline: "Мнение · жалоба · рекомендация · вкус",
      beats: defaultBeats(4),
      finale: { prompt: "Improv with the tape — fill beats later." },
      homework: { note: "Reread · 45 s voice with 2 tape phrases." },
    },
    {
      id: "where-we-come-from",
      num: 4,
      title: "Where We Come From",
      icon: "🏫",
      tagline: "Школа · правила · воспитание · детство",
      beats: defaultBeats(4),
      finale: { prompt: "Improv with the tape — fill beats later." },
      homework: { note: "Reread · 45 s voice with 2 tape phrases." },
    },
    {
      id: "people-relationships",
      num: 5,
      title: "People & Relationships",
      icon: "🤝",
      tagline: "Дружба · конфликт · доверие · сёстры",
      beats: defaultBeats(4),
      finale: { prompt: "Improv with the tape — fill beats later." },
      homework: { note: "Reread · 45 s voice with 2 tape phrases." },
    },
    {
      id: "truth-about-lying",
      num: 6,
      title: "The Truth About Lying",
      icon: "🎭",
      tagline: "Белая ложь · crime · истории · ghost walk",
      beats: defaultBeats(4),
      finale: { prompt: "Improv with the tape — fill beats later." },
      homework: { note: "Reread · 45 s voice with 2 tape phrases." },
    },
    {
      id: "game-on",
      num: 7,
      title: "Game On",
      icon: "💪",
      tagline: "Спорт · коучинг · мотивация · бизнес",
      beats: defaultBeats(4),
      finale: { prompt: "Improv with the tape — fill beats later." },
      homework: { note: "Reread · 45 s voice with 2 tape phrases." },
    },
    {
      id: "this-is-home",
      num: 8,
      title: "This Is Home",
      icon: "🌍",
      tagline: "Экология · среда · будущее · полюбишь",
      beats: defaultBeats(4),
      finale: { prompt: "Improv with the tape — fill beats later." },
      homework: { note: "Reread · 45 s voice with 2 tape phrases." },
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
      teacher: "Cool words stay on screen. Improvise — use as many tape phrases as you can.",
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
      teacher: "Take-home speaking — text + voice, no video.",
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

  global.B2_INTENSIVE_BLOCK_META = BLOCK_META;
  global.B2_INTENSIVE_THEMES = THEMES;
  global.B2_INTENSIVE_getTheme = getTheme;
  global.B2_INTENSIVE_buildFlow = buildFlow;
  global.B2_INTENSIVE_allPhrases = allPhrases;
  global.B2_INTENSIVE_STEPS = [];
})(typeof window !== "undefined" ? window : globalThis);
