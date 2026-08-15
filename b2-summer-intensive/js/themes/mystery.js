/**
 * Mystery theme payload (Unit 9) — load alone from FCE for faster open.
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
  register(
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
          drill: {
            title: "Partner drill · ×5",
            how: "Main idea + crown stems + invent a detail for the slot.",
            bigIdea:
              "Sell a place, warn about the risk, then plant an unsolved secret — invent YOUR legend, not Arizona.",
            inventPrompt:
              "Invent one concrete detail about YOUR {{slot}} (what people say vanished / what you’d warn against / what stays buried).",
            promptA: "Got a place with a secret?",
            promptAudio: {
              f: "audio/drill/place-with-secret-f.mp3?v=2",
              m: "audio/drill/place-with-secret-m.mp3?v=2",
            },
            modelB:
              "Besides being known for {{slot}}, the scenery is absolutely spectacular. As you'd expect, it can get tough — but that's not unbearable if you go carefully. I'd certainly advise against going alone. People say someone inexplicably vanished there, and whoever knew the truth took the secret to the grave — they didn't give away its location, so it remains unsolved to this day. Here's another piece of trivia for you — invent yours for {{slot}}.",
            partners: [
              { name: "Alex", slot: "my hometown hills", voice: "m" },
              { name: "Mira", slot: "a beach-town myth", voice: "f" },
              { name: "Jordan", slot: "a mountain trail", voice: "m" },
              { name: "Sam", slot: "an abandoned factory", voice: "f" },
              { name: "Lea", slot: "a lake people avoid", voice: "f" },
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
            "even a little fright",
            "jump out of their skin",
            "in my blood",
            "the things that come most naturally to me",
            "enjoy the release of tension",
            "hold an audience's attention",
            "take the listeners into your confidence",
            "when they're least expecting it",
            "adds a sense of truth to the whole thing",
            "makes it more credible",
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
              "give them a little fright / even a little fright = a small scare (one step up from goose bumps; still safe for the group). — …and perhaps even a little fright… Steal: give them a little fright.",
              "enjoy the release of tension = laugh/relax after being scared. — …laugh nervously and enjoy the release of tension.",
              "hold an audience’s attention = keep people listening / watching. — …the ability to hold an audience’s attention…",
              "take the listeners into your confidence = speak as if sharing a secret with them. — You take the listeners into your confidence…",
              "when they’re least expecting it = at the surprise moment. — …when they’re least expecting it, you change the tone…",
              "jump out of their skin = get a sudden fright. — …they nearly jump out of their skin!",
              "they’re all fictitious = not real people / invented. — …they’re all fictitious.",
              "adds a sense of truth to the whole thing = makes it feel believable. — …it adds a sense of truth to the whole thing…",
              "makes it more credible = makes the story / performance believable. — …makes it more credible.",
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
              "A LITTLE FRIGHT — give them a little fright · even a little fright.",
              "…and perhaps even a little fright…",
              "RELEASE OF TENSION — enjoy the release of tension.",
              "HOLD ATTENTION — hold an audience’s attention.",
              "INTO YOUR CONFIDENCE — take the listeners into your confidence.",
              "LEAST EXPECTING IT — when they’re least expecting it…",
              "JUMP OUT OF THEIR SKIN — they nearly jump out of their skin!",
              "FICTITIOUS — they’re all fictitious.",
              "SENSE OF TRUTH — adds a sense of truth to the whole thing.",
              "MORE CREDIBLE — makes it more credible.",
              "…makes it more credible.",
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
              "…and give them a little fright…",
              "You take the listeners into your confidence…",
              "When they’re least expecting it…",
              "…makes it more credible…",
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
                q: "Scare craft: How do you give them goose bumps — and maybe give them a little fright — then let them enjoy the release of tension? Steal: hold an audience’s attention · into your confidence · least expecting it · jump out of their skin.",
                examples: [
                  "We aim to give them goose bumps, and perhaps even a little fright…",
                  "You take the listeners into your confidence… when they’re least expecting it…",
                  "They nearly jump out of their skin — then they laugh and enjoy the release of tension.",
                ],
              },
              {
                q: "Acting / truth: Talk about a role, character, or story that was fictitious — but still adds a sense of truth and makes it more credible so the audience becomes engaged.",
                examples: [
                  "They’re all fictitious, but it adds a sense of truth to the whole thing and makes it more credible…",
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
                  "Skeleton (reorder for YOUR plot): in my blood → come most naturally → give them goose bumps → give them a little fright → release of tension → hold attention → into your confidence → least expecting it → jump out of their skin → fictitious → sense of truth → makes it more credible → audience becomes engaged → wouldn’t dare dispute · imagining things · who am I to say · no personal evidence → don’t give away too much → every now and again → the place absolutely stinks.",
                  "Partner check: tick all 20 tape lines before you stop.",
                ],
              },
            ],
          },
          drill: {
            title: "Partner drill · ×5",
            how: "Main idea + crown stems + invent a detail for the slot.",
            bigIdea:
              "Scare craft = trust first, shock when they’re least expecting it — then respect belief without claiming proof.",
            inventPrompt:
              "Invent one concrete scare / performance detail for YOUR {{slot}} (how you build mood, the twist, the smell or sound).",
            promptA: "How do you scare an audience?",
            promptAudio: {
              f: "audio/drill/scare-an-audience-f.mp3?v=2",
              m: "audio/drill/scare-an-audience-m.mp3?v=2",
            },
            modelB:
              "Storytelling has always been in my blood — I’m doing the things that come most naturally to me. With {{slot}}, I aim to give them goose bumps, and maybe give them a little fright, then they enjoy the release of tension. You hold an audience’s attention, take the listeners into your confidence, and when they’re least expecting it they nearly jump out of their skin. The characters are all fictitious, but it adds a sense of truth and makes it more credible so the audience becomes engaged. I wouldn’t dare dispute that they’ve seen something — who am I to say they haven’t? I have no personal evidence they exist. I don’t want to give away too much, but every now and again the place absolutely stinks — invent your {{slot}} twist.",
            partners: [
              { name: "Alex", slot: "campfire stories", voice: "m" },
              { name: "Mira", slot: "a school play", voice: "f" },
              { name: "Jordan", slot: "a haunted tour", voice: "m" },
              { name: "Sam", slot: "a podcast episode", voice: "f" },
              { name: "Lea", slot: "a family legend night", voice: "f" },
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
          drill: {
            title: "Partner drill · ×5",
            how: "Main idea + crown stems + invent a detail for the slot.",
            bigIdea:
              "Kindness often lands better when anonymous — time it, keep it quiet, then expect a twist.",
            inventPrompt:
              "Invent one concrete gift / secrecy detail for YOUR {{slot}} (what was given, who kept quiet, what annoyed people).",
            promptA: "Would you give in secret?",
            promptAudio: {
              f: "audio/drill/give-in-secret-f.mp3?v=2",
              m: "audio/drill/give-in-secret-m.mp3?v=2",
            },
            modelB:
              "In the lead-up to {{slot}}, there was unanimous approval of the idea. Someone had come into quite a lot of money and wished to remain anonymous — journalists kept it quiet, and the donor’s identity remains unknown. We should make no attempt to identify them; friends even agreed to match the amount. To their annoyance, however, invent the rule or twist that spoiled the moment for {{slot}}.",
            partners: [
              { name: "Alex", slot: "exam-week surprises", voice: "m" },
              { name: "Mira", slot: "holiday tips for workers", voice: "f" },
              { name: "Jordan", slot: "a school fundraiser", voice: "m" },
              { name: "Sam", slot: "a neighbour gift drop", voice: "f" },
              { name: "Lea", slot: "a scholarship match", voice: "f" },
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
          drill: {
            title: "Partner drill · ×5",
            how: "Main idea + crown stems + invent a detail for the slot.",
            bigIdea:
              "Big finds look ordinary at first; leads come to nothing; stay cautiously optimistic without claiming the full truth.",
            inventPrompt:
              "Invent one concrete find / investigation detail for YOUR {{slot}} (what caught the eye, the false lead, why it felt like an inside job).",
            promptA: "Ever found something weird?",
            promptAudio: {
              f: "audio/drill/found-something-weird-f.mp3?v=2",
              m: "audio/drill/found-something-weird-m.mp3?v=2",
            },
            modelB:
              "During {{slot}}, it caught their eye — they originally thought it was junk. I’m cautiously optimistic it could be worth a staggering amount. Some say it was an inside job. Police got to work on finding the whereabouts, but the lead came to nothing, leaving police scratching their heads. Deadlines came and went — and we’re still no nearer to discovering the truth. Invent your {{slot}} detail.",
            partners: [
              { name: "Alex", slot: "clearing a cellar", voice: "m" },
              { name: "Mira", slot: "a flea-market buy", voice: "f" },
              { name: "Jordan", slot: "a family attic", voice: "m" },
              { name: "Sam", slot: "a building renovation", voice: "f" },
              { name: "Lea", slot: "a park clean-up", voice: "f" },
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
    }
  );
})(typeof window !== "undefined" ? window : globalThis);
