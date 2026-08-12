/**
 * B2 Speaking Intensive — Fleabag-style beats, text instead of video.
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
    {
      id: "mystery",
      num: 9,
      title: "Mystery",
      icon: "🏜️",
      tagline: "Legends · unsolved secrets · desert stories · cool chunks for talk",
      synopsis:
        "Unsolved mysteries and travel tales — steal hedging, advice, and storytelling lines you can reuse about any place or legend.",
      goal: {
        title: "Goal · what they leave with",
        examVsSpeak:
          "Listening Part 2 (Superstition Mountains) trains gap-fill. This intensive is the speaking twin — steal the chunks, invent YOUR story (not a retell).",
        learn: [
          "Storytelling must-haves: introduce a place, hedge heat/risk, drop trivia, talk about secrets that stay buried.",
          "Reuse frames: Besides being known for… / I'd certainly advise against… / remains unsolved…",
          "Build an original 90–120 s story with the whole tape sounding — then meet the exam text in Unit 9.",
        ],
        notThis: [
          "Not sentence-completion exam practice.",
          "Not retelling Superstition Mountains / the Dutchman plot from memory.",
        ],
        teacherTip:
          "Paper = fuel for chunks only. Highlighted marks = targets. Push personal invention: their hometown myth, a trip they'd advise against, a secret they'd take to the grave — never a plot retell.",
      },
      beats: [
        {
          id: "superstition-mountains",
          label: "Superstition Mountains",
          teacher:
            "Beat 1 · Sally Hurst text = phrase fuel only. Read → notice marked chunks → invent YOUR mystery/travel story with the whole tape.",
          blocks: ["read", "context"],
          phrases: [
            "Besides being known for",
            "As you'd expect",
            "I'd certainly advise against",
            "that's not unbearable",
            "inexplicably vanished",
            "the scenery is absolutely spectacular",
            "remains unsolved to this day",
            "Here's another piece of trivia for you",
            "took the secret of his mine with him to his grave",
            "didn't give away its location",
          ],
          read: {
            letter: "M",
            title: "Superstition Mountains",
            subtitle: "Sally Hurst · radio documentary",
            html:
              "<p>Hi, I'm Sally Hurst and I've just got back from Arizona, where I spent two weeks in the Superstition Mountain Range, near Phoenix. Besides being known for its luxury desert golf courses, the area also attracts enthusiasts of more energetic outdoor activities like rock climbing or mountain biking. And I was lucky enough to go hiking when I was there. There are miles of paths and the scenery is absolutely spectacular.</p>" +
              "<p>As you'd expect, it can get quite hot in the desert. It's late spring now, of course, and that's not unbearable. Autumn isn't too bad either, but I'd certainly advise against going there in summer. Temperatures can reach the high forties – and that's more than a little uncomfortable for most.</p>" +
              "<p>The reason I went there was to research some of the legends and mysteries of the area for a radio documentary. The very origin of the name, 'Superstition Mountains' is itself a bit of a mystery. One theory says they were given their name by sixteenth-century Spanish settlers, some of whom inexplicably vanished when they went exploring there. But the more likely explanation is that it came about in the nineteenth century, when it was discovered that the local Pima Indians were frightened of the mountains. Farmers in the area attributed this fear to superstition, and they decided to give that name first to one mountain, and then the whole range.</p>" +
              "<p>Perhaps the most talked about mystery in the area is that of the so-called, 'Lost Dutchman's Mine', which is supposedly somewhere in the Superstition Mountains. Far from being Dutch, however, the owner of the gold mine in question, Jacob Waltz, was in fact German, or Deutsch in his native language. Waltz arrived in the United States in November 1839, and spent virtually all his life there prospecting for gold, firstly in North Carolina, then Georgia, California and finally Arizona. When he passed away in October 1891 he took the secret of his mine with him to his grave.</p>" +
              "<p>You see, apparently Waltz had found what was believed by some to be the richest gold mine in the world. But he didn't give away its location to anyone, and it's a mystery which remains unsolved to this day. According to one estimate in the late nineteen seventies, up to eight thousand people a year attempted to locate the mine. Even now, people still haven't given up searching, despite the ban on mineral prospecting in 1983, and many continue to head for the region to look for the gold.</p>" +
              "<p>Waltz left a few clues, but without revealing very much. In one of them, for example, he says, 'The rays of the setting sun shine into the entrance of my mine', but that could be just about anywhere.</p>" +
              "<p>I did a lot of my research for the documentary in a museum; The Superstition Mountain Museum. It's full of information on the Lost Dutchman's Mine, including a whole set of maps which are thought to show its location – not that that's been of any use to anyone! So far, anyway.</p>" +
              "<p>And I saw another exhibit on the mine in a museum in nearby Goldfield. Now Goldfield was a prosperous mining town at the end of the nineteenth century, but when the gold ran out, everyone left and now it's a ghost town. It's become a popular tourist attraction as well, of course, with museums, rides and shows, but it's still quite impressive, nevertheless.</p>" +
              "<p>Now you may have seen a film that was made in 1949 about the Lost Dutchman's Mine entitled Lust for Gold, starring Glenn Ford in the role of Jacob Waltz. But here's another piece of trivia for you: in 1960, actor Walter Brennan recorded a song on the subject called Dutchman's Gold.</p>",
          },
          context: {
            tone: "Mystery must-haves · steal the frame · drop it into YOUR story",
            meanings: [
              "Besides being known for X = people also know it for X (not only the obvious thing). — Besides being known for its luxury desert golf courses…",
              "As you'd expect = no surprise / typical for this place. — As you'd expect, it can get quite hot in the desert.",
              "I'd certainly advise against = strong polite warning. — I'd certainly advise against going there in summer.",
              "that's not unbearable / It's not unbearable = tough, but you can cope. — …and that's not unbearable.",
              "inexplicably vanished = disappeared with no clear reason. — …some of whom inexplicably vanished when they went exploring there.",
              "the scenery is absolutely spectacular = the views are stunning (strong praise). — …and the scenery is absolutely spectacular.",
              "remains unsolved to this day = still no answer, even now. — …a mystery which remains unsolved to this day.",
              "Here's another piece of trivia for you = storytelling hook for a fun fact. — But here's another piece of trivia for you…",
              "took the secret … to his grave = died without telling anyone. — …he took the secret of his mine with him to his grave.",
              "didn't give away its location = refused to reveal where it was. — …he didn't give away its location to anyone.",
            ],
            examples: [
              "BESIDES BEING KNOWN FOR — Besides being known for… · Apart from being known for…",
              "Besides being known for its luxury desert golf courses, the area also attracts…",
              "AS YOU'D EXPECT — As you'd expect… · As you might expect…",
              "As you'd expect, it can get quite hot in the desert.",
              "ADVISE AGAINST — I'd certainly advise against… · I wouldn't recommend…",
              "I'd certainly advise against going there in summer.",
              "NOT UNBEARABLE — that's not unbearable · It's not unbearable if…",
              "It's late spring now… and that's not unbearable.",
              "INEXPLICABLY VANISHED — inexplicably vanished · mysteriously disappeared.",
              "…some of whom inexplicably vanished when they went exploring there.",
              "ABSOLUTELY SPECTACULAR — the scenery is absolutely spectacular.",
              "REMAINS UNSOLVED — remains unsolved to this day · still unsolved.",
              "…it's a mystery which remains unsolved to this day.",
              "PIECE OF TRIVIA — Here's another piece of trivia for you…",
              "TOOK … TO HIS GRAVE — took the secret … to his grave.",
              "…he took the secret of his mine with him to his grave.",
              "DIDN'T GIVE AWAY — didn't give away its location · never revealed where.",
              "…he didn't give away its location to anyone.",
            ],
          },
          speak: {
            mission:
              "Drill → then FINAL: invent YOUR story · every tape phrase must sound once (partner ticks).",
            starters: [
              "Besides being known for…",
              "As you'd expect…",
              "I'd certainly advise against…",
              "It's not unbearable if…",
              "Here's another piece of trivia for you…",
              "…and it remains unsolved to this day.",
            ],
            questions: [
              {
                q: "Lex drill · place intro: Sell a place you know with “Besides being known for…” + one unexpected second attraction.",
                examples: [
                  "Besides being known for beaches / nightlife / factories, it also…",
                  "Besides being known for X, the area also attracts…",
                ],
              },
              {
                q: "Advice frame: When would you say “I'd certainly advise against…”? Give a real travel / weather / risk warning.",
                examples: [
                  "I'd certainly advise against going there in summer / alone / without water.",
                  "As you'd expect, it can get… but it's not unbearable if…",
                ],
              },
              {
                q: "Praise + hedge: Describe scenery with “absolutely spectacular”, then soften heat/effort with “not unbearable”.",
                examples: [
                  "The scenery is absolutely spectacular — and the walk isn't unbearable if you start early.",
                ],
              },
              {
                q: "Mystery talk: Invent a local legend or unsolved story (not the mountains text). Steal: inexplicably vanished · remains unsolved to this day · took … to the grave · didn't give away…",
                examples: [
                  "People say they inexplicably vanished…",
                  "She took the secret to her grave — and it remains unsolved to this day.",
                ],
              },
              {
                q: "FINAL · Your story (90–120 s): Invent ANY mystery / travel / place story of your own — not Superstition Mountains. Mission: make the WHOLE tape sound — every cool-word phrase at least once. Partner ticks the tape. One follow-up only. Then → FCE Unit 9 Part 2 to meet the exam text.",
                examples: [
                  "Skeleton (steal & reorder for YOUR plot): Besides being known for… → scenery is absolutely spectacular → As you'd expect… that's not unbearable → I'd certainly advise against… → inexplicably vanished → didn't give away its location → took the secret … to the grave → remains unsolved to this day → Here's another piece of trivia for you…",
                  "Partner check: tick all 10 tape lines before you stop.",
                ],
              },
            ],
          },
        },
        {
          id: "ghost-walk-guide",
          label: "Ghost walk guide",
          teacher:
            "Beat 2 · Alan interview = phrase fuel only. Read → notice marked chunks → invent YOUR storytelling / performance / belief story (not a retell).",
          blocks: ["read", "context"],
          phrases: [
            "give them goose bumps",
            "jump out of their skin",
            "in my blood",
            "the things that come most naturally to me",
            "enjoy the release of tension",
            "hold an audience's attention",
            "take the listeners into your confidence",
            "when they're least expecting it",
            "adds a sense of truth to the whole thing",
            "the audience becomes engaged in",
            "I wouldn't dare dispute that",
            "suggest they're imagining things",
            "who am I to say they haven't?",
            "I have no personal evidence they exist",
            "they're all fictitious",
            "I don't want to give away too much",
            "every now and again",
            "the place absolutely stinks",
          ],
          read: {
            letter: "G",
            title: "Ghost walk guide",
            subtitle: "Alan · interview (Track 9.1)",
            html:
              "<p><strong>I:</strong> … Alan, what made you decide to become a ghost walk guide?</p>" +
              "<p><strong>A:</strong> Oh, it’s fascinating. I've been a tour guide before but mostly abroad and never here in my own home town. I wouldn't call myself an expert, but I’ve learnt quite a lot about our local history since I started doing this a couple of years ago. Plus, of course, I get to dress up in period costume and tell lots of ghost stories in character. Acting and storytelling have always been in my blood, so I’m really just doing the things that come most naturally to me.</p>" +
              "<p><strong>I:</strong> And how about those who actually go on the tours? Do they get frightened?</p>" +
              "<p><strong>A:</strong> Well, obviously these are ghost walks, so it wouldn’t be much fun if there wasn’t a bit of fear involved. Not too much, of course – we often have children in the groups, so we have to be careful. But people expect to be scared, and they’d be disappointed if they weren’t, so we aim at least to give them goose bumps, and perhaps even a little fright – after which they all laugh nervously and enjoy the release of tension.</p>" +
              "<p><strong>I:</strong> And how do you achieve that, giving them a fright?</p>" +
              "<p><strong>A:</strong> Well, the mark of a good storyteller is the ability to hold an audience’s attention, and that’s not too hard to do when the subject is ghosts. You take the listeners into your confidence, create the right mood, make them feel safe with you. Then, just at the right moment, when they’re least expecting it, you change the tone, give a shout or let out a scream. And they nearly jump out of their skin!</p>" +
              "<p><strong>I:</strong> Right, yes. And does it work every time?</p>" +
              "<p><strong>A:</strong> Well, it does with most audiences, people who’ve been thinking about the ghost walk all day, maybe all week, wondering what’s going to happen. These people usually respond extremely well. Some of the groups we get, though, come along as part of a surprise event. People like these haven’t had time to reflect on what they’re coming to, they haven’t been given the chance to look forward to it, and the effect isn’t the same. They don’t normally have such a good time, unfortunately.</p>" +
              "<p><strong>I:</strong> You mentioned dressing up and acting before. Do you have a variety of characters that you play or just one?</p>" +
              "<p><strong>A:</strong> Oh no, there are several. There’s Lord Warwick, for example, a wealthy noble; the old sea dog Jake Redburn; John Simpkins, who’s a servant … none of them actually existed, of course, they’re all fictitious. The choice of character I play often depends on the route we take and the stories to be told, or also perhaps how I’m feeling that night and the type of audience I’m expecting. As with all acting, it adds a sense of truth to the whole thing, makes it more credible. So the audience becomes engaged in the tour and responds in a more positive, sometimes more frightened way.</p>" +
              "<p><strong>I:</strong> One question, I have to ask you, Alan. Do you believe in ghosts?</p>" +
              "<p><strong>A:</strong> Regrettably, I have to say that I haven’t seen any on the walks, or had any other paranormal experiences to impress you with. Some people in my audiences have said they have, and so have some of my friends, and I wouldn’t dare dispute that or suggest they’re imagining things. Ghosts are real for those people who say they’ve seen them, and who am I to say they haven’t? The most I can say is that I have no personal evidence they exist.</p>" +
              "<p><strong>I:</strong> And of the stories that you tell on your ghost walks, do you have a favourite?</p>" +
              "<p><strong>A:</strong> Well, I particularly like stories which involve smells that some buildings are said to give off when ghosts are around. I don’t want to give away too much here on the programme, but the one I enjoy telling most of all is about an old woman called Florence Hardcastle, who haunts the town hall. When she appears every now and again, the place absolutely stinks. Now at first, some people thought it was a problem with the rubbish, but if you want to find out the real reason, you’ll have to come along on the ghost walk.</p>",
          },
          context: {
            tone: "Storytelling / performance must-haves · steal the frame · invent YOUR scene",
            meanings: [
              "in my blood = part of who I am / natural talent. — Acting and storytelling have always been in my blood…",
              "the things that come most naturally to me = what I’m best at without forcing it. — …doing the things that come most naturally to me.",
              "give them goose bumps = make them feel a chill / mild fear. — …we aim at least to give them goose bumps…",
              "enjoy the release of tension = laugh/relax after being scared. — …laugh nervously and enjoy the release of tension.",
              "hold an audience’s attention = keep people listening / watching. — …the ability to hold an audience’s attention…",
              "take the listeners into your confidence = speak as if sharing a secret with them. — You take the listeners into your confidence…",
              "when they’re least expecting it = at the surprise moment. — …when they’re least expecting it, you change the tone…",
              "jump out of their skin = get a sudden fright. — …they nearly jump out of their skin!",
              "they’re all fictitious = not real people / invented. — …they’re all fictitious.",
              "adds a sense of truth to the whole thing = makes it feel believable. — …it adds a sense of truth to the whole thing…",
              "the audience becomes engaged in = people get involved / hooked. — …the audience becomes engaged in the tour…",
              "I wouldn’t dare dispute that = I won’t argue with their experience. — …I wouldn’t dare dispute that…",
              "suggest they’re imagining things = say it’s only in their head. — …or suggest they’re imagining things.",
              "who am I to say they haven’t? = I have no right to deny their experience.",
              "I have no personal evidence they exist = I haven’t seen proof myself.",
              "I don’t want to give away too much = I’ll keep the spoilers back. — I don’t want to give away too much…",
              "every now and again = occasionally. — When she appears every now and again…",
              "the place absolutely stinks = it smells terrible (strong). — …the place absolutely stinks.",
            ],
            examples: [
              "IN MY BLOOD — …have always been in my blood.",
              "COME MOST NATURALLY — the things that come most naturally to me.",
              "GOOSE BUMPS — give them goose bumps · get goose bumps.",
              "…we aim at least to give them goose bumps…",
              "RELEASE OF TENSION — enjoy the release of tension.",
              "HOLD ATTENTION — hold an audience’s attention.",
              "INTO YOUR CONFIDENCE — take the listeners into your confidence.",
              "LEAST EXPECTING IT — when they’re least expecting it…",
              "JUMP OUT OF THEIR SKIN — they nearly jump out of their skin!",
              "FICTITIOUS — they’re all fictitious.",
              "SENSE OF TRUTH — adds a sense of truth to the whole thing.",
              "ENGAGED IN — the audience becomes engaged in…",
              "WOULDN’T DARE DISPUTE — I wouldn’t dare dispute that…",
              "IMAGINING THINGS — suggest they’re imagining things.",
              "WHO AM I TO SAY — who am I to say they haven’t?",
              "NO PERSONAL EVIDENCE — I have no personal evidence they exist.",
              "GIVE AWAY TOO MUCH — I don’t want to give away too much…",
              "EVERY NOW AND AGAIN — every now and again…",
              "ABSOLUTELY STINKS — the place absolutely stinks.",
            ],
          },
          speak: {
            mission:
              "Drill → then FINAL: invent YOUR performance / fear / belief story · every tape phrase once (partner ticks).",
            starters: [
              "…has always been in my blood…",
              "We aim to give them goose bumps…",
              "You take the listeners into your confidence…",
              "When they’re least expecting it…",
              "I wouldn’t dare dispute that…",
              "I don’t want to give away too much, but…",
            ],
            questions: [
              {
                q: "Lex drill · talent: What is “in your blood”? Finish: “…have always been in my blood, so I’m really just doing the things that come most naturally to me.”",
                examples: [
                  "Music / teaching / arguing / cooking have always been in my blood…",
                ],
              },
              {
                q: "Scare craft: How do you give people goose bumps — then let them enjoy the release of tension? Steal: hold an audience’s attention · into your confidence · least expecting it · jump out of their skin.",
                examples: [
                  "You take the listeners into your confidence… when they’re least expecting it…",
                  "They nearly jump out of their skin — then they laugh and enjoy the release of tension.",
                ],
              },
              {
                q: "Acting / truth: Talk about a role, character, or story that was fictitious — but still adds a sense of truth so the audience becomes engaged.",
                examples: [
                  "They’re all fictitious, but it adds a sense of truth to the whole thing…",
                  "The audience becomes engaged in…",
                ],
              },
              {
                q: "Belief without proof: Someone swears they saw something weird. Steal: I wouldn’t dare dispute that · suggest they’re imagining things · who am I to say they haven’t? · no personal evidence.",
                examples: [
                  "I wouldn’t dare dispute that or suggest they’re imagining things.",
                  "Who am I to say they haven’t? I have no personal evidence they exist.",
                ],
              },
              {
                q: "FINAL · Your story (90–120 s): Invent ANY ghost-tour / performance / creepy-place story of your own — not Alan’s interview. Mission: make the WHOLE ghost-walk tape sound — every cool-word phrase at least once. Partner ticks. One follow-up only. Then → FCE Unit 9 Part 3 exam.",
                examples: [
                  "Skeleton (reorder for YOUR plot): in my blood → come most naturally → give them goose bumps → release of tension → hold attention → into your confidence → least expecting it → jump out of their skin → fictitious → sense of truth → audience becomes engaged → wouldn’t dare dispute · imagining things · who am I to say · no personal evidence → don’t give away too much → every now and again → the place absolutely stinks.",
                  "Partner check: tick all 18 tape lines before you stop.",
                ],
              },
            ],
          },
        },
        {
          id: "mystery-donors",
          label: "Mystery donors",
          teacher:
            "Beat 3 · four anonymous-gift stories = phrase fuel only. Read → marked chunks → invent YOUR generosity / anonymity story (not a retell of A–D).",
          blocks: ["read", "context"],
          phrases: [
            "kept it quiet",
            "The donor's identity remains unknown",
            "wished to remain anonymous",
            "remain anonymous",
            "make no attempt to identify",
            "there was unanimous approval of",
            "come into quite a lot of money",
            "In the lead-up to",
            "match the amount",
            "To their annoyance, however",
          ],
          read: {
            letter: "D",
            title: "Mystery donors",
            subtitle: "Four true stories · Reading Part 7",
            html:
              "<p><strong>A · Book sculptures (Edinburgh)</strong></p>" +
              "<p>Over the course of a nine-month period, a total of ten sculptures, beautifully crafted from books, were left anonymously in various cultural buildings in the city of Edinburgh. Each was accompanied by a note, which included the words, ‘In support of libraries, books, words, ideas and festivals’. Cutting up books may at first seem a rather strange way to show one’s support for the written word, but there was unanimous approval of the intricate sculptures from all those lucky enough to view them when they were put on display.</p>" +
              "<p>Each sculpture was carefully chosen: a dinosaur for the National Museum or a tiny cinema for the city’s Filmhouse. Despite a strong suggestion in one of the notes that the person leaving the sculptures was a woman, journalists at a local newspaper said the donor was a man. They claimed they had discovered his identity, but kept it quiet, given that the general view was that he, or she, should remain anonymous.</p>" +
              "<p><strong>B · Ambulance thank-yous (London / Surrey)</strong></p>" +
              "<p>In the lead-up to the winter holiday period one year, paramedics in London and the adjoining county of Surrey began finding cards attached to their ambulances with words of thanks for their life-saving work, and up to £10 in cash. The thank-you notes and money may have been a response to recent abusive messages received by ambulance crews who had parked their vehicles in front of people’s driveways while dealing with emergency calls.</p>" +
              "<p>The professionally printed cards, believed to be the work of a local firm that wished to remain anonymous, told the paramedics ‘YOU ARE AWESOME’ and included the invitation: ‘Coffee and doughnuts are on us today.’ To their annoyance, however, the healthcare workers were told by their management to hand over any cash donations, as the ambulance service had ‘strict rules and guidelines around the acceptance of monetary gifts’.</p>" +
              "<p><strong>C · Supermarket envelopes (Tiverton)</strong></p>" +
              "<p>When a man entered a supermarket in Tiverton, England, and began handing out envelopes to shoppers, the recipients were delighted. In each of the envelopes was a fifty-pound note, together with a message which read: ‘I have recently been fortunate enough to come into quite a lot of money – more than I need for myself and my family. So I thought that I would share some of it with you.’ Believing it to be part of a marketing promotion, one beneficiary nearly threw the blank envelope away. Another went to the bank to check that the note was genuine. The donor’s identity remains unknown, in spite of the efforts of one national daily, which asked readers to get in contact if they knew who the mystery benefactor was.</p>" +
              "<p><strong>D · US university gifts ($100m+)</strong></p>" +
              "<p>Donations to educational establishments are nothing unusual, but one year, no fewer than twenty universities in the United States received a total of over $100 million from a single anonymous donor. All but one of the universities were public institutions, and all were run by women. The donations, ranging from $1.5 million to $10 million, were made on the condition that most of the money should go towards financial scholarships for women and minorities, and that the recipients make no attempt to identify the donor. Chancellor Pamela Shockley-Zalabak managed to double her university’s donation of $5.5 million by persuading private individuals in Colorado Springs to match the amount. The money was used to fund single parents returning to education, as well as promising students who had to work while attending university.</p>",
          },
          context: {
            tone: "Anonymity · generosity · reaction frames · steal for YOUR story",
            meanings: [
              "there was unanimous approval of X = everyone liked X. — …there was unanimous approval of the intricate sculptures…",
              "kept it quiet = didn’t tell the public / kept the secret. — …but kept it quiet…",
              "remain anonymous / wished to remain anonymous = stay unnamed on purpose.",
              "In the lead-up to X = in the period before X. — In the lead-up to the winter holiday period…",
              "To their annoyance, however = frustrating twist after good news. — To their annoyance, however, …",
              "come into quite a lot of money = suddenly get a large sum (inheritance, win…). — …come into quite a lot of money…",
              "The donor’s identity remains unknown = nobody knows who gave. — The donor’s identity remains unknown…",
              "make no attempt to identify = don’t try to find out who. — …make no attempt to identify the donor.",
              "match the amount = give the same sum again. — …to match the amount.",
            ],
            examples: [
              "UNANIMOUS APPROVAL — there was unanimous approval of…",
              "…there was unanimous approval of the intricate sculptures…",
              "KEPT IT QUIET — kept it quiet · keep it quiet.",
              "…but kept it quiet, given that… should remain anonymous.",
              "WISHED TO REMAIN ANONYMOUS — a firm that wished to remain anonymous…",
              "IN THE LEAD-UP TO — In the lead-up to the winter holiday / exams / the wedding…",
              "TO THEIR ANNOYANCE, HOWEVER — To their annoyance, however,…",
              "COME INTO MONEY — come into quite a lot of money.",
              "IDENTITY REMAINS UNKNOWN — The donor’s identity remains unknown…",
              "MAKE NO ATTEMPT TO IDENTIFY — …make no attempt to identify the donor.",
              "MATCH THE AMOUNT — persuade others to match the amount.",
            ],
          },
          speak: {
            mission:
              "Drill → then FINAL: invent YOUR anonymous-gift / kindness story · every tape phrase once (partner ticks).",
            starters: [
              "In the lead-up to…",
              "There was unanimous approval of…",
              "They kept it quiet…",
              "…wished to remain anonymous…",
              "I’d come into quite a lot of money…",
              "To their annoyance, however…",
            ],
            questions: [
              {
                q: "Lex drill · timing: Invent a mini story that starts with “In the lead-up to…” (holiday, exam week, wedding, festival).",
                examples: [
                  "In the lead-up to the winter holiday period…",
                  "In the lead-up to our school show…",
                ],
              },
              {
                q: "Anonymity frames: When is it better that someone remain anonymous? Steal: kept it quiet · wished to remain anonymous · identity remains unknown · make no attempt to identify.",
                examples: [
                  "They kept it quiet so he could remain anonymous.",
                  "The donor’s identity remains unknown — and we should make no attempt to identify them.",
                ],
              },
              {
                q: "Money & reaction: Tell a gift story with “come into quite a lot of money” and a twist with “To their annoyance, however…”",
                examples: [
                  "He’d come into quite a lot of money, so he shared it… To their annoyance, however, the rules said…",
                ],
              },
              {
                q: "Approval + match: Describe something that got unanimous approval — then someone persuaded others to match the amount / effort.",
                examples: [
                  "There was unanimous approval of the idea… friends agreed to match the amount.",
                ],
              },
              {
                q: "FINAL · Your story (90–120 s): Invent ANY mystery-donor / secret-kindness story of your own — not the Edinburgh / ambulance / Tiverton / US plots. Mission: make the WHOLE donors tape sound — every cool-word phrase at least once. Partner ticks. One follow-up only. Then → FCE Unit 9 Reading Part 7.",
                examples: [
                  "Skeleton (reorder for YOUR plot): In the lead-up to… → unanimous approval of… → kept it quiet · remain anonymous / wished to remain anonymous → come into quite a lot of money → identity remains unknown → make no attempt to identify → match the amount → To their annoyance, however…",
                  "Partner check: tick all 10 tape lines before you stop.",
                ],
              },
            ],
          },
        },
        {
          id: "valuable-discovery",
          label: "A Valuable Discovery",
          teacher:
            "Beat 4 · Klimt rediscovery text = phrase fuel only. Read → marked chunks → invent YOUR art-theft / find story (not a Klimt retell).",
          blocks: ["read", "context"],
          phrases: [
            "came and went",
            "leaving police scratching their heads",
            "an inside job",
            "came to nothing",
            "cautiously optimistic",
            "worth a staggering",
            "no nearer to discovering the truth",
            "It caught their eye",
            "originally thought",
            "finding the whereabouts",
          ],
          read: {
            letter: "V",
            title: "A Valuable Discovery",
            subtitle: "Klimt · Ricci Oddi Gallery · Reading MCQ",
            html:
              "<p>In 2019, two gardeners were doing routine jobs at the Ricci Oddi Gallery of Modern Art in Piacenza, Italy, and they discovered something very strange when clearing some ivy. By chance, they noticed that one of the walls had a metal panel in it. It caught their eye and they decided to take a look inside. There, between the internal and external gallery walls, was a black box. The worker admitted that he had originally thought it was just a bin full of rubbish. It’s a good job, then, that he decided to double-check.</p>" +
              "<p>Could this be the <em>Portrait of a Lady</em> painting by Austrian artist Gustav Klimt, which had gone missing in 1997? The gallery staff was understandably excited as they congratulated the gardeners on the potentially special find. The gallery’s Vice President, Laura Bonfanti, was cautiously optimistic and wanted to wait until various tests had been carried out to determine that it was, without a doubt, by the famous artist. Ultraviolet and infrared light would be used to compare similar tests taken in 1996. But looking at more obvious features like seals and stamps, everything was looking good.</p>" +
              "<p>The painting had been stolen back in 1997 when it was being prepared to be transported to a special exhibition. How exactly it had been stolen is still unclear. The frame of the painting, thought to be worth a staggering 60 million euros, had been found next to the skylight on the roof, which was strange because it couldn’t actually fit through the skylight! This led some to think it was an inside job. The painting had made headlines shortly before its disappearance because an art student discovered it was actually a double portrait and Klimt’s only known one. This means it was a painting that had been painted over another one.</p>" +
              "<p>Police got to work on finding the whereabouts of the artwork. There were various leads. At one point, a letter was sent to Libertà, a local newspaper. It was from two people claiming that they had stolen the picture. The police also joined forces with a local art thief to see if he could come up with any ideas. And three months after the theft, a painting was found on the border between France and Italy. This was apparently unconnected. Years later, fingerprints were discovered on the original frame but this, too, came to nothing, leaving police scratching their heads.</p>" +
              "<p>In 2016, a BBC investigation revealed that the local thief who had helped the investigation admitted that he had stolen the original. Nevertheless, he claimed this was months before the actual theft. According to him, he’d taken the painting and replaced it with a fake. Then, on learning the fake was going to be taken to an exhibition, he got rid of the fake in order to avoid experts noticing that it wasn’t genuine. He then suggested that the original must have been sold and would be returned in 2017. When 2017 came and went without incident, they knew he was an unreliable source.</p>" +
              "<p>Art theft is nothing new. Caravaggio’s stolen painting, <em>Nativity with St. Francis and St. Lawrence</em>, was stolen in 1969, and its whereabouts remains one of the art world’s biggest mysteries. Had the gardener not found it, Klimt’s could have joined the same club. The police are no nearer to discovering the truth about how it got to its hiding place and who was involved in putting it there, but at least we appear to have it back.</p>",
          },
          context: {
            tone: "Crime / discovery frames · steal for YOUR find or mystery",
            meanings: [
              "It caught their eye = they noticed it / it stood out. — It caught their eye and they decided to take a look inside.",
              "originally thought = first believed (before checking). — …he had originally thought it was just a bin…",
              "cautiously optimistic = hopeful, but careful / not celebrating yet. — …was cautiously optimistic…",
              "worth a staggering [amount] = surprisingly huge value. — …thought to be worth a staggering 60 million euros…",
              "an inside job = crime done by someone who works there / has access. — …it was an inside job.",
              "finding the whereabouts = trying to discover where something is. — Police got to work on finding the whereabouts of the artwork.",
              "came to nothing = produced no result. — …this, too, came to nothing…",
              "leaving police scratching their heads = police were puzzled / had no answer.",
              "came and went = the time passed with nothing happening. — When 2017 came and went without incident…",
              "no nearer to discovering the truth = still don’t know what really happened. — The police are no nearer to discovering the truth…",
            ],
            examples: [
              "CAUGHT THEIR EYE — It caught their eye…",
              "ORIGINALLY THOUGHT — he had originally thought…",
              "CAUTIOUSLY OPTIMISTIC — was cautiously optimistic…",
              "WORTH A STAGGERING — worth a staggering 60 million euros / worth a staggering amount…",
              "AN INSIDE JOB — Some people think it was an inside job.",
              "FINDING THE WHEREABOUTS — finding the whereabouts of the artwork…",
              "CAME TO NOTHING — this, too, came to nothing…",
              "SCRATCHING THEIR HEADS — leaving police scratching their heads.",
              "CAME AND WENT — When 2017 came and went without incident…",
              "NO NEARER TO THE TRUTH — The police are no nearer to discovering the truth…",
            ],
          },
          speak: {
            mission:
              "Drill → then FINAL: invent YOUR discovery / theft / cold-case story · every tape phrase once (partner ticks).",
            starters: [
              "It caught their eye…",
              "I originally thought…",
              "I’m cautiously optimistic…",
              "…worth a staggering…",
              "It must have been an inside job…",
              "That lead came to nothing…",
            ],
            questions: [
              {
                q: "Lex drill · noticing: Tell a 40 s find story using “It caught their eye” and “originally thought”.",
                examples: [
                  "It caught their eye… He originally thought it was rubbish…",
                ],
              },
              {
                q: "Value + suspicion: Describe something “worth a staggering …” and why people say it was “an inside job”.",
                examples: [
                  "Thought to be worth a staggering… This led some to think it was an inside job.",
                ],
              },
              {
                q: "Investigation fail: Steal “finding the whereabouts”, “came to nothing”, “leaving police scratching their heads”, “came and went”.",
                examples: [
                  "Police got to work on finding the whereabouts… the lead came to nothing, leaving police scratching their heads.",
                  "When the deadline came and went…",
                ],
              },
              {
                q: "Hope vs truth: Be “cautiously optimistic” — then admit you’re “no nearer to discovering the truth”.",
                examples: [
                  "I’m cautiously optimistic… but we’re no nearer to discovering the truth.",
                ],
              },
              {
                q: "FINAL · Your story (90–120 s): Invent ANY art-theft / lost-and-found / cold-case story of your own — not the Klimt Piacenza plot. Mission: make the WHOLE valuable-discovery tape sound — every cool-word phrase at least once. Partner ticks. One follow-up only. Then → FCE Unit 9 Reading (A Valuable Discovery).",
                examples: [
                  "Skeleton (reorder for YOUR plot): It caught their eye → originally thought → cautiously optimistic → worth a staggering… → an inside job → finding the whereabouts → came to nothing → leaving police scratching their heads → came and went → no nearer to discovering the truth.",
                  "Partner check: tick all 10 tape lines before you stop.",
                ],
              },
            ],
          },
        },
      ],
      finale: {
        prompt:
          "Improv finale: invent a brand-new story (not the Unit 9 exam plots). Pick ONE beat tape — mountains, ghost walk, mystery donors, OR valuable discovery — and make every phrase on that tape sound once. Partner ticks. Then open the matching FCE Unit 9 exam page.",
      },
      homework: {
        note:
          "Invent 60–90 s with ALL phrases from one Mystery beat tape (tick them). No retell. Then open FCE Unit 9: Listening Part 2/3, Reading Part 7 Mystery donors, or A Valuable Discovery MCQ.",
      },
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
      questions: (theme && theme.finale && theme.finale.questions) || [],
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
      questions: (theme && theme.homework && theme.homework.questions) || [],
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
