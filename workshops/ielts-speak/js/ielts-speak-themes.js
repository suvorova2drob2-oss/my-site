/**
 * IELTS Speak — separate workshop (not Speaking Intensive / FCE).
 * Lexical blocks: sub-themes · context · where to use (Part 3).
 */
(function (global) {
  var BLOCK_META = {
    read: {
      title: "Read the extract",
      hint: "Notice the highlighted chunks in context",
    },
    phrases: {
      title: "Notice these lines",
      hint: "Cool chunks · on the tape",
    },
    context: {
      title: "Lexis · meaning · where to use",
      hint: "Steal for Speaking Part 3 / soft discussion",
    },
    speak: {
      title: "Talk about it",
      hint: "Part 3 prompts · steal tape phrases",
    },
  };

  function defaultBeats(n) {
    n = n || 3;
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
          html: "<p>Drop an IELTS-style reading passage here.</p>",
        },
        speak: {
          mission: "Answer in English · use the tape phrases.",
          questions: ["What stood out — and why?"],
        },
      });
    }
    return out;
  }

  function shellLesson(num, title, icon) {
    return {
      id: "shell-" + num,
      num: num,
      title: title || "Lesson " + num,
      icon: icon || "📝",
      tagline: "Coming soon · drop text + cool words",
      beats: defaultBeats(2),
      finale: { prompt: "Improv with the tape — fill later." },
      homework: { note: "Reread · 45 s voice with 2 tape phrases." },
    };
  }

  var LESSON_IS_WORLD_BETTER = {
      id: "progress-peace",
      num: 1,
      title: "Is the world getting better?",
      icon: "📉",
      tagline:
        "Media · poverty · health · violence rates · forces for peace",
      synopsis:
        "One academic article in four lexical blocks. Steal Part 3 frames — invent YOUR view, don’t retell Pinker.",
      goal: {
        title: "Why this language for IELTS?",
        examVsSpeak:
          "Part 3 loves trends, rates, and calm hedges — not “everything is terrible”. This lesson is one unit inside the Society topic pack.",
        learn: [
          "Sound exam-ready on society/progress: media despair vs full picture, poverty share, life expectancy, child mortality, death toll, causes of peace.",
          "Use rates and hedges: not necessarily due to · largely responsible · it is unthinkable that…",
          "Walk four sub-blocks, then improv with one block’s full tape.",
        ],
        notThis: [
          "Not memorising Pinker’s history lecture.",
          "Not a Reading True/False score task.",
        ],
        teacherTip:
          "Topic = Society. Lesson = Is the world getting better? Each beat = one lexical field. Push transfer to their country / news feed.",
      },
      beats: [
        {
          id: "media-despair",
          label: "1 · Media & despair",
          teacher:
            "Lexical block A · how we talk about bad news without sounding naive or hysterical.",
          blocks: ["read", "context"],
          phrases: [
            "leave us feeling in despair",
            "there are troubling situations in the world",
            "not giving us the full picture",
            "we are living in a time that is not only the healthiest, wealthiest and best-educated in history, but also by far the least violent",
          ],
          read: {
            letter: "A",
            title: "Media & the bigger picture",
            subtitle: "Block 1 · despair vs balance",
            html:
              "<p><strong>Despite appearances, the human race is losing its appetite for violence and suffering</strong></p>" +
              "<p>Negative reports in newspapers and the media may leave us feeling in despair, and certainly there are troubling situations in the world. However, they are clearly not giving us the full picture. A new study suggests that, historically, we are living in a time that is not only the healthiest, wealthiest and best-educated in history, but also by far the least violent.</p>",
          },
          context: {
            tone: "Sub-theme: news, mood, balanced optimism · IELTS Part 3 “media / society getting worse?”",
            meanings: [
              "leave us feeling in despair = make us feel hopeless after bad news. Where: “Does the news affect how you feel about the future?” — The media can leave us feeling in despair…",
              "there are troubling situations in the world = bad things are real (you’re not denying them). Where: soften before a positive claim — Certainly there are troubling situations in the world, but…",
              "not giving us the full picture = missing important context / good news. Where: criticise media calmly — Headlines are not giving us the full picture.",
              "we are living in a time that is not only the healthiest, wealthiest and best-educated in history, but also by far the least violent = stacked positive claim (health + wealth + education + peace). Where: big Part 3 turn on “Is life better than in the past?” — steal the whole stem or shorten it.",
            ],
            examples: [
              "DESPAIR — leave us feeling in despair · leave people feeling in despair.",
              "Negative reports… may leave us feeling in despair…",
              "TROUBLING SITUATIONS — there are troubling situations in the world…",
              "FULL PICTURE — not giving us the full picture.",
              "STACKED CLAIM — …not only the healthiest, wealthiest and best-educated… but also by far the least violent.",
            ],
          },
          speak: {
            mission: "Part 3 · media & progress · steal ≥3 tape phrases.",
            starters: [
              "The media can leave us feeling in despair…",
              "There are troubling situations in the world, but…",
              "They’re not giving us the full picture…",
              "I’d argue we are living in a time that is…",
            ],
            questions: [
              {
                q: "Do you think the news leaves people feeling in despair — or is it just not giving us the full picture?",
                examples: [
                  "It leaves us feeling in despair… There are troubling situations… but they’re not giving us the full picture.",
                ],
              },
              {
                q: "Is life better than 50 years ago? Steal the long “not only… but also…” stem — then add YOUR country.",
                examples: [
                  "We are living in a time that is not only… but also… In my country…",
                ],
              },
              {
                q: "FINAL for this block (60–90 s): Answer “Is the world getting worse?” using every phrase on THIS tape. Partner ticks.",
                examples: [
                  "Skeleton: leave us feeling in despair → troubling situations → not the full picture → we are living in a time that is not only… but also by far the least violent.",
                ],
              },
            ],
          },
        },
        {
          id: "poverty-health",
          label: "2 · Poverty & health",
          teacher:
            "Lexical block B · trends you can measure: poverty share, starvation, life expectancy, child mortality.",
          blocks: ["read", "context"],
          phrases: [
            "there has been a huge decline in recent years in the share of the world population",
            "that very debate is a sign",
            "with fewer people suffering starvation",
            "saw their life expectancy increase by",
            "This increase is not necessarily due to",
            "to a drop in the child mortality rate",
            "they have shot up",
          ],
          read: {
            letter: "B",
            title: "Poverty, hunger & health gains",
            subtitle: "Block 2 · measurable progress",
            html:
              "<p>To demonstrate, take the extraordinary rate of economic growth in China and India. As a result of development in these two countries, there has been a huge decline in recent years in the share of the world population living on less than $1.25 a day, from 53 percent in 1981 to 17 percent in 2011. In fact, many people argue that we should be using a global poverty line of $10–$15 a day, but that very debate is a sign that we have made incredible progress at relieving the worst forms of poverty in recent decades.</p>" +
              "<p>This has had an obvious effect on world hunger, with fewer people suffering starvation in the last 24 years. Both men and women saw their life expectancy increase by six years globally from 1990 to 2012, but the gains were far greater in the countries with the lowest income, up to nine years in some cases. This increase is not necessarily due to people living longer, but to a drop in the child mortality rate, which has fallen by up to two-thirds in some areas.</p>" +
              "<p>Overall, we're showing signs of being healthier. For nearly 2,000 years, male heights were stable, but since Europe industrialised, they have shot up. Nutrition and overall living standards are the main factors behind height, and we are living in the first couple of centuries of huge advances.</p>",
          },
          context: {
            tone: "Sub-theme: poverty · hunger · longevity · IELTS love numbers + hedges",
            meanings: [
              "there has been a huge decline in recent years in the share of the world population… = a big fall in the percentage of people (e.g. in extreme poverty). Where: any “Has poverty fallen?” / development question.",
              "that very debate is a sign = the argument itself proves progress (we argue about higher standards now). Where: when people say “it’s still not enough” — That very debate is a sign we’ve moved on from the worst.",
              "with fewer people suffering starvation = hunger has fallen (result phrase). Where: link poverty → food security.",
              "saw their life expectancy increase by = people’s average lifespan rose by X years. Where: health / ageing / medicine topics.",
              "This increase is not necessarily due to… = hedge the cause. Where: examiner loves this — don’t claim one simple reason.",
              "to a drop in the child mortality rate = fewer children dying (often the real driver of rising life expectancy). Where: explain health stats carefully.",
              "they have shot up = rose sharply (here: heights; also prices, sales, temperatures). Where: vivid verb for sudden growth.",
            ],
            examples: [
              "HUGE DECLINE — there has been a huge decline in recent years in the share of…",
              "THAT VERY DEBATE — that very debate is a sign that…",
              "STARVATION — with fewer people suffering starvation…",
              "LIFE EXPECTANCY — …saw their life expectancy increase by six years…",
              "NOT NECESSARILY DUE TO — This increase is not necessarily due to… but to a drop in the child mortality rate…",
              "SHOT UP — …they have shot up.",
            ],
          },
          speak: {
            mission: "Part 3 · development & health · steal trend + hedge phrases.",
            starters: [
              "There has been a huge decline in recent years in…",
              "That very debate is a sign that…",
              "…with fewer people suffering starvation…",
              "This increase is not necessarily due to…",
            ],
            questions: [
              {
                q: "Has extreme poverty fallen worldwide? Steal “huge decline… share of the world population” and “that very debate is a sign”.",
                examples: [
                  "There has been a huge decline… That very debate is a sign we’ve made progress…",
                ],
              },
              {
                q: "Why might life expectancy rise even if old people don’t live much longer? Steal “not necessarily due to” + “drop in the child mortality rate”.",
                examples: [
                  "This increase is not necessarily due to people living longer, but to a drop in the child mortality rate.",
                ],
              },
              {
                q: "FINAL for this block (60–90 s): “Is the world healthier than before?” Use every phrase on THIS tape. Partner ticks.",
                examples: [
                  "Skeleton: huge decline… → that very debate is a sign → fewer people suffering starvation → life expectancy increase by… → not necessarily due to… → drop in the child mortality rate → they have shot up.",
                ],
              },
            ],
          },
        },
        {
          id: "violence-rates",
          label: "3 · Violence by the numbers",
          teacher:
            "Lexical block C · how to talk about violence with rates, death tolls, and “astonishing” declines — not raw panic.",
          blocks: ["read", "context"],
          phrases: [
            "the extent to which violence has declined in every shape and form is astonishing",
            "The death toll of 55 million is shocking",
            "shows an incredible decline in murder",
          ],
          read: {
            letter: "C",
            title: "Measuring violence",
            subtitle: "Block 3 · rates, tolls, decline",
            html:
              "<p>This is all inspiring stuff, but nowhere near as incredible as the differences in the attitude we take to our fellow human beings. Our violent inner selves are giving way to the better angels of cooperation and kindness in dramatic ways. Stephen Pinker, the cognitive scientist, decided to take a historical approach to the subject of violence in our society. According to his study, the extent to which violence has declined in every shape and form is astonishing.</p>" +
              "<p>In his statistical argument Pinker rightly focuses on the rate of violence in relation to the size of the population, rather than just the figures for violent acts. What matters to an individual living in a particular place and time is their personal risk of becoming the victim of violence. The Second World War was the worst episode in human history in terms of the total numbers killed on the battlefield. The death toll of 55 million is shocking. However, when compared to the population size at the time, it was only the ninth most deadly event over the past 1,200 years.</p>" +
              "<p>A more reliable source of data comes from an analysis of court records in later periods which shows an incredible decline in murder across Western Europe between the thirteenth and twentieth centuries. Murder rates fell between tenfold and a hundredfold.</p>",
          },
          context: {
            tone: "Sub-theme: crime · war · statistics · “safer than we think?”",
            meanings: [
              "the extent to which violence has declined in every shape and form is astonishing = violence has fallen in many kinds of ways — and that scale is amazing. Where: opening line for “Is society more violent now?”",
              "The death toll of 55 million is shocking = raw total killed is huge (emotional). Where: acknowledge horror before comparing rates — The death toll… is shocking. However, in relation to population…",
              "shows an incredible decline in murder = data proves murder fell a lot. Where: crime / safety / history of cities.",
            ],
            examples: [
              "EXTENT TO WHICH… — the extent to which violence has declined in every shape and form is astonishing.",
              "DEATH TOLL — The death toll of 55 million is shocking.",
              "INCREDIBLE DECLINE — …shows an incredible decline in murder…",
            ],
          },
          speak: {
            mission: "Part 3 · crime & war stats · raw numbers vs rates.",
            starters: [
              "The extent to which violence has declined… is astonishing.",
              "The death toll… is shocking. However…",
              "The data shows an incredible decline in murder…",
            ],
            questions: [
              {
                q: "People often say “the world is more violent now.” How would you challenge that using rates — not just death tolls?",
                examples: [
                  "The death toll of WWII is shocking, but the extent to which violence has declined… is astonishing.",
                ],
              },
              {
                q: "FINAL for this block (45–60 s): Use all THREE tape phrases about crime/war trends in your city or country (invent carefully if needed).",
                examples: [
                  "…extent to which violence has declined… · death toll… shocking · shows an incredible decline in murder…",
                ],
              },
            ],
          },
        },
        {
          id: "forces-for-peace",
          label: "4 · Forces for peace",
          teacher:
            "Lexical block D · causes & attitudes: why violence becomes “pointless” and war becomes “unthinkable”.",
          blocks: ["read", "context"],
          phrases: [
            "are largely responsible",
            "violence as an acceptable solution to disagreements",
            "resulting from growing literacy, mobility",
            "the increased tendency to use knowledge and reason to make decisions has also played a major part",
            "violence is a pointless option",
            "it is unthinkable that anyone would look forward to war today",
          ],
          read: {
            letter: "D",
            title: "Why we became more peaceful",
            subtitle: "Block 4 · causes · attitudes · war",
            html:
              "<p>Pinker suggests several historical forces that have promoted more peaceful behaviour. Besides the more obvious development of rule of government and commercial interests, he suggests feminisation and cosmopolitanism are largely responsible. Since violence is largely a male pastime, the increasing respect for the interests and values of female members of society has led society away from viewing violence as an acceptable solution to disagreements. A more cosmopolitan culture – resulting from growing literacy, mobility and the mass media – can encourage people to become more patient and have more respect for those who are unlike themselves. Of course, the increased tendency to use knowledge and reason to make decisions has also played a major part. Many people these days recognise that violence is a pointless option and have reframed it as a problem to be solved, rather than a contest to be won. Less than a century ago, many Europeans were looking forward to what became the First World War – it is unthinkable that anyone would look forward to war today.</p>",
          },
          context: {
            tone: "Sub-theme: causes of peace · education · gender · reason · IELTS “why / what can be done?”",
            meanings: [
              "are largely responsible = mainly caused by (hedged). Where: “What causes X?” — Education and the media are largely responsible…",
              "violence as an acceptable solution to disagreements = treating fighting as a normal way to settle conflict. Where: gender / culture / conflict resolution — move away from viewing violence as an acceptable solution…",
              "resulting from growing literacy, mobility = caused by more reading ability + people moving around (often + mass media). Where: explain cosmopolitan / open-minded culture.",
              "the increased tendency to use knowledge and reason to make decisions has also played a major part = thinking carefully matters too (add-on cause). Where: long Part 3 answer with several causes.",
              "violence is a pointless option = fighting doesn’t help. Where: strong opinion line — Many people recognise that violence is a pointless option.",
              "it is unthinkable that anyone would look forward to war today = almost impossible to imagine celebrating war now. Where: contrast past vs present attitudes to war.",
            ],
            examples: [
              "LARGELY RESPONSIBLE — …are largely responsible.",
              "ACCEPTABLE SOLUTION — …viewing violence as an acceptable solution to disagreements.",
              "RESULTING FROM — resulting from growing literacy, mobility and the mass media…",
              "PLAYED A MAJOR PART — the increased tendency to use knowledge and reason… has also played a major part.",
              "POINTLESS OPTION — violence is a pointless option…",
              "UNTHINKABLE — it is unthinkable that anyone would look forward to war today.",
            ],
          },
          speak: {
            mission:
              "Part 3 · causes & attitudes · then FINAL: whole block tape.",
            starters: [
              "…are largely responsible for…",
              "We no longer see violence as an acceptable solution to disagreements…",
              "…resulting from growing literacy, mobility…",
              "Violence is a pointless option…",
              "It is unthinkable that…",
            ],
            questions: [
              {
                q: "What is largely responsible for less everyday violence where you live — laws, schools, media, women’s status?",
                examples: [
                  "Education and mobility are largely responsible… resulting from growing literacy…",
                ],
              },
              {
                q: "Has society stopped treating violence as an acceptable solution to disagreements? Steal “pointless option” and “unthinkable… war”.",
                examples: [
                  "Violence is a pointless option… it is unthinkable that anyone would look forward to war today.",
                ],
              },
              {
                q: "FINAL for this block (90–120 s): “Why might the world be more peaceful?” Use every phrase on THIS tape. Partner ticks. Then Improv can mix blocks.",
                examples: [
                  "Skeleton: largely responsible → violence as an acceptable solution… → resulting from growing literacy, mobility… → knowledge and reason… played a major part → pointless option → unthinkable… war today.",
                ],
              },
            ],
          },
        },
      ],
      finale: {
        prompt:
          "Improv · Part 3 hot seat (90–120 s): “Is the world getting better?” Pick ONE lexical block tape (A media · B poverty/health · C violence stats · D forces for peace) and make every phrase on that tape sound once. Partner ticks. No Pinker retell — YOUR country / YOUR news diet.",
      },
      homework: {
        note:
          "Choose one block. Record 60–90 s using ALL of that block’s tape phrases (tick them). Write 2 Part 3 questions where those stems fit. Optional: swap blocks next day.",
      },
  };

  var LESSON_KETCHUP_CONUNDRUM = {
    id: "ketchup-conundrum",
    num: 1,
    title: "The ketchup conundrum",
    icon: "🍅",
    tagline: "Brands · advertising · taste habits · why some foods won’t switch",
    synopsis:
      "Grey Poupon vs ketchup — marketing that changed mustard, and why a “better ketchup” still struggles. Steal Part 3 frames about brands and shopping. Invent YOUR examples — don’t retell the Rolls-Royce ad.",
    goal: {
      title: "Why this language for IELTS?",
      examVsSpeak:
        "Part 3 loves consumer habits, advertising, and “why do people buy X?”. This lesson trains brand/marketing English you can reuse for any product — not a Reading matching quiz.",
      learn: [
        "Steal stems: dominated shelves · looked hard · specialty section · switched from.",
        "Ads & image: ran tasteful adverts… · foil packets · modest budget · tagline · finer pleasures · impart to people's minds that.",
        "Vision & myths: enter the … business · simple vision · beat a path to your door · if only it were that easy · unmet need · rules which apply to…",
      ],
      notThis: [
        "Not memorising the Grey Poupon commercial plot.",
        "Not a food chemistry lecture.",
        "Not padding the tape with basic paraphrases the teacher did not list.",
      ],
      teacherTip:
        "Topic = Business & advertising. Phrase list is teacher-owned — see .cursor/rules/ielts-speak-cool-phrase-criteria.mdc.",
    },
    beats: [
      {
        id: "taste-test-switch",
        label: "1 · Taste tests & switching",
        teacher:
          "Lexical block A · teacher tape only: shelves · looked hard · specialty section · switched from.",
        blocks: ["read", "context"],
        phrases: [
          "dominated the U.S. supermarket shelves",
          "looked hard",
          "in the specialty foods section",
          "switched from",
        ],
        read: {
          letter: "A",
          title: "One mustard ruled the shelves",
          subtitle: "Block 1 · discovery & switching",
          html:
            "<p>Many years ago, just one mustard dominated the U.S. supermarket shelves: the American brand French's. It was a yellow mustard that came in a plastic bottle. If you looked hard in the grocery store, you might find something in the specialty foods section called Grey Poupon, which was a French-style mustard, light brown in colour. In the early 1970s, Grey Poupon was no more than a hundred-thousand-dollar-a-year business. Few people knew what it was or how it tasted, or had any particular interest in a different mustard to French's. Then one day the Heublein Company, which owned Grey Poupon, discovered something: if you gave people a mustard taste test, a significant number of people who tried Grey Poupon switched from French's yellow mustard. In the food world that almost never happens, which made Grey Poupon special.</p>",
        },
        context: {
          tone: "Sub-theme: market leaders · finding niche products · switching brands",
          meanings: [
            "dominated the … supermarket shelves = was the main brand everyone saw. Where: big brands / monopolies.",
            "looked hard = searched carefully. Where: hard-to-find products, niche shops.",
            "in the specialty foods section = the niche / gourmet aisle. Where: describe where rare products live.",
            "switched from = changed brand (from X to Y). Where: any product change story.",
          ],
          examples: [
            "DOMINATED THE SHELVES — dominated the … supermarket shelves…",
            "LOOKED HARD — If you looked hard…",
            "SPECIALTY SECTION — in the specialty foods section…",
            "SWITCHED FROM — …switched from…",
          ],
        },
        speak: {
          mission: "Part 3 · lexical · phrases sound in the question · YOUR brands.",
          starters: [
            "One brand dominated the supermarket shelves…",
            "If you looked hard…",
            "In the specialty foods section…",
            "I switched from…",
          ],
          questions: [
            {
              q: "Lex · shelves: Which brand dominated the supermarket shelves where you grew up — and what did you only find if you looked hard?",
              examples: [
                "…dominated the supermarket shelves… If you looked hard…",
              ],
            },
            {
              q: "Lex · niche: Finish about YOUR city — “You might find it in the specialty foods section…” Then: who switched from what?",
              examples: [
                "In the specialty foods section… I switched from… to…",
              ],
            },
            {
              q: "FINAL · 45–60 s: Mini story about YOU — every tape phrase once (dominated… shelves · looked hard · specialty foods section · switched from). Partner ticks.",
              examples: [
                "dominated … shelves → looked hard → specialty foods section → switched from",
              ],
            },
          ],
        },
      },
      {
        id: "marketing-image",
        label: "2 · Marketing & image",
        teacher:
          "Lexical block B · teacher tape: ads, foil packets, scene beats, tagline, impart…",
        blocks: ["read", "context"],
        phrases: [
          "ran tasteful adverts in upscale food magazines",
          "foil packets",
          "on a modest budget",
          "pulls up alongside",
          "leans his head out the window",
          "sales of Grey Poupon rose 40 to 50 percent",
          "the tagline",
          "one of life's finer pleasures",
          "impart to people's minds that",
        ],
        read: {
          letter: "B",
          title: "Rolls-Royce & Grey Poupon",
          subtitle: "Block 2 · ads that changed the brand",
          html:
            "<p>Heublein put Grey Poupon in a bigger jar, with a new label that made it seem French, even though it was made in Connecticut with Canadian ingredients. The company ran tasteful adverts in upscale food magazines. They put the mustard in little foil packets and distributed them with meals on airlines — which was a brand-new idea at the time. Then they hired the Manhattan advertising agency Lowe Marschalk to do something, on a modest budget, for television. The agency came back with an idea: A Rolls-Royce is driving down a country road. There's a man in the back seat in a suit with a plate of beef on a silver tray. He nods to the chauffeur, who hands back a jar of Grey Poupon. Another Rolls-Royce pulls up alongside. A man leans his head out the window. 'Pardon me. Would you have any Grey Poupon?'</p>" +
            "<p>In the cities where the adverts were shown, sales of Grey Poupon rose 40 to 50 percent. Grocery stores put Grey Poupon next to French's and by the end of the 1980s it was the most powerful brand in mustard. ‘The tagline in the commercial was that this was one of life's finer pleasures,’ Larry Elegant, who wrote the original Grey Poupon advert, says, ‘and that, along with the Rolls-Royce, seemed to impart to people's minds that this was something truly different and superior.’</p>",
        },
        context: {
          tone: "Sub-theme: advertising craft · prestige scene · tagline power",
          meanings: [
            "ran tasteful adverts in upscale food magazines = placed elegant ads in premium magazines. Where: soft / luxury marketing.",
            "foil packets = small sample packs. Where: free samples / travel giveaways.",
            "on a modest budget = without huge spend. Where: smart campaigns that still work.",
            "pulls up alongside = drives up next to another car (ad scene). Where: vivid storytelling.",
            "leans his head out the window = classic ad gesture / scene beat. Where: describe a commercial moment.",
            "sales … rose 40 to 50 percent = sharp sales jump. Where: results with numbers (sales rose … to …).",
            "the tagline = the slogan line of the ad. Where: any brand slogan talk.",
            "one of life's finer pleasures = sold as a small luxury. Where: coffee, chocolate, travel treats.",
            "impart to people's minds that = plant the idea / belief that… Where: how ads shape opinion.",
          ],
          examples: [
            "RAN TASTEFUL ADVERTS — ran tasteful adverts in upscale food magazines.",
            "FOIL PACKETS — little foil packets…",
            "MODEST BUDGET — on a modest budget…",
            "PULLS UP ALONGSIDE — Another Rolls-Royce pulls up alongside.",
            "LEANS HIS HEAD OUT — leans his head out the window.",
            "SALES ROSE — sales … rose 40 to 50 percent.",
            "THE TAGLINE — The tagline in the commercial was…",
            "FINER PLEASURES — one of life's finer pleasures…",
            "IMPART … THAT — impart to people's minds that…",
          ],
        },
        speak: {
          mission: "Part 3 · lexical · hear the tape inside the question · invent YOUR ad.",
          starters: [
            "They ran tasteful adverts in upscale food magazines…",
            "…foil packets… on a modest budget…",
            "Another car pulls up alongside… someone leans his head out the window…",
            "The tagline… seemed to impart to people's minds that…",
          ],
          questions: [
            {
              q: "Lex · campaign: Invent a local brand that ran tasteful adverts in upscale food magazines — on a modest budget. What went in the foil packets?",
              examples: [
                "They ran tasteful adverts in upscale food magazines… on a modest budget… foil packets…",
              ],
            },
            {
              q: "Lex · scene: Describe YOUR 15-second ad: one car pulls up alongside… someone leans his head out the window… What’s the line?",
              examples: [
                "…pulls up alongside… leans his head out the window…",
              ],
            },
            {
              q: "Lex · tagline: Steal — “The tagline was that this was one of life's finer pleasures — it seemed to impart to people's minds that…” Finish about a product YOU know. Bonus: sales rose … to …",
              examples: [
                "The tagline… one of life's finer pleasures… impart to people's minds that… sales … rose …",
              ],
            },
            {
              q: "FINAL · 60–90 s: Pitch one invented ad. Every phrase on THIS tape at least once. Partner ticks.",
              examples: [
                "tasteful adverts · foil packets · modest budget · pulls up alongside · leans his head out · sales rose… · tagline · finer pleasures · impart … that",
              ],
            },
          ],
        },
      },
      {
        id: "habits-not-fixed",
        label: "3 · Vision & “if only”",
        teacher:
          "Lexical block C · teacher tape: enter the business · simple vision · beat a path · if only…",
        blocks: ["read", "context"],
        phrases: [
          "enter the ketchup business",
          "had a simple vision",
          "the world will beat a path to your door",
          "If only it were that easy",
        ],
        read: {
          letter: "C",
          title: "From mustard aisle to ketchup dream",
          subtitle: "Block 3 · vision · myth · reality check",
          html:
            "<p>The rise of Grey Poupon proved that the American supermarket shopper was happy to pay more for a better quality product. Furthermore, its success showed that a consumer's taste and habits were not fixed: that just because mustard had always been yellow did not mean that consumers would use only yellow mustard. It is because of Grey Poupon that the standard American supermarket today has an entire mustard section. It is also because of Grey Poupon that a man named Jim Wigon decided, several years ago, to enter the ketchup business. Jim Wigon had a simple vision: build a better ketchup — the way Grey Poupon built a better mustard — and the world will beat a path to your door. If only it were that easy.</p>",
        },
        context: {
          tone: "Sub-theme: startups · optimistic myths · IELTS reality-check endings",
          meanings: [
            "enter the … business = start competing in that market. Where: career / startup stories.",
            "had a simple vision = had a clear (often too simple) plan. Where: founders / big ideas.",
            "the world will beat a path to your door = customers will come automatically if it’s better (idiom / myth).",
            "If only it were that easy = reality check after the myth.",
          ],
          examples: [
            "ENTER THE BUSINESS — enter the ketchup business…",
            "SIMPLE VISION — had a simple vision…",
            "BEAT A PATH — the world will beat a path to your door.",
            "IF ONLY — If only it were that easy.",
          ],
        },
        speak: {
          mission: "Part 3 · lexical · vision myth in the question · YOUR story.",
          starters: [
            "I decided to enter the … business…",
            "I had a simple vision…",
            "…and the world will beat a path to your door.",
            "If only it were that easy…",
          ],
          questions: [
            {
              q: "Lex · enter: Finish about YOU or a friend — “I decided to enter the ___ business…” (coffee / apps / tutoring / food…). What was the product?",
              examples: [
                "I decided to enter the … business…",
              ],
            },
            {
              q: "Lex · myth: Steal the chain — “I had a simple vision: … and the world will beat a path to your door.” Then: “If only it were that easy.” Personal example.",
              examples: [
                "Had a simple vision… the world will beat a path to your door. If only it were that easy.",
              ],
            },
            {
              q: "FINAL · 45–60 s: Founder story (real or invented). Every tape phrase once: enter the … business · had a simple vision · beat a path to your door · If only it were that easy. Partner ticks.",
              examples: [
                "enter the … business → simple vision → beat a path → if only it were that easy",
              ],
            },
          ],
        },
      },
      {
        id: "ketchup-exception",
        label: "4 · Unmet need & rules",
        teacher:
          "Lexical block D · teacher tape only: unmet need · rules which apply to…",
        blocks: ["read", "context"],
        phrases: [
          "satisfy an unmet need",
          "the rules which apply to",
        ],
        read: {
          letter: "D",
          title: "World’s Best Ketchup — still struggling",
          subtitle: "Block 4 · unmet need · rules don’t transfer",
          html:
            "<p>Wigon runs his ketchup business under the brand World's Best Ketchup. He starts with red peppers and then adds Spanish onions, garlic and a high-end tomato paste. Basil is chopped by hand rather than by machine. He uses maple syrup, not corn syrup, which gives him a quarter of the sugar of the most popular tomato ketchup brand. He then pours his ketchup into a clear glass ten-ounce jar, and sells it for three times the price of other brands.</p>" +
            "<p>Wigon then travels around the country selling the product to supermarkets. At the end of one long day, Wigon had sold 90 jars but he had also got two parking tickets and had to pay for a hotel room, so he was not going home with money in his pocket. And it isn't just World's Best that is finding it difficult. In the speciality ketchup world, there is River Run and Uncle Dave's, from Vermont, and Muir Glen Organic and Mrs Tomato Head Catsup, in California, and dozens of others — and every year Heinz's huge share of the ketchup market just grows. It is possible, of course, that ketchup is waiting for its own version of that Rolls-Royce commercial — the magic formula that will satisfy an unmet need. It is also possible, however, that the rules which apply to Grey Poupon and to olive oil and salad dressing and almost everything else in the supermarket, simply do not apply to ketchup.</p>",
        },
        context: {
          tone: "Sub-theme: innovation · exceptions · IELTS “what works for X may not work for Y”",
          meanings: [
            "satisfy an unmet need = fix a problem customers still have. Where: startups, apps, public services.",
            "the rules which apply to… = what works for one product / market (may not work for another). Where: contrast endings.",
          ],
          examples: [
            "UNMET NEED — satisfy an unmet need.",
            "RULES WHICH APPLY TO — the rules which apply to…",
          ],
        },
        speak: {
          mission: "Part 3 · lexical · unmet need + rules which apply to… · YOUR market.",
          starters: [
            "That would satisfy an unmet need…",
            "The rules which apply to X… simply do not apply to Y.",
          ],
          questions: [
            {
              q: "Lex · need: What would satisfy an unmet need for students / parents / your city right now? Steal the exact chunk in your answer.",
              examples: [
                "…would satisfy an unmet need…",
              ],
            },
            {
              q: "Lex · rules: Finish — “The rules which apply to ___ simply don’t apply to ___.” (phones vs food · fashion vs banking · your examples).",
              examples: [
                "The rules which apply to… simply do not apply to…",
              ],
            },
            {
              q: "FINAL · 45–60 s: Both stems once about a product in YOUR country — satisfy an unmet need + the rules which apply to… Partner ticks.",
              examples: [
                "satisfy an unmet need · the rules which apply to…",
              ],
            },
          ],
        },
      },
    ],
    finale: {
      prompt:
        "Improv · Part 3 (90–120 s): “Why do some brands succeed and others fail?” Pick ONE ketchup-conundrum block tape and make every phrase sound once. Partner ticks. YOUR brands — not a Grey Poupon retell.",
    },
    homework: {
      note:
        "Pick one block. Record 60–90 s about a brand in your country using ALL that block’s teacher phrases. Optional: write 2 Part 3 questions about advertising / shopping habits.",
    },
  };

  /**
   * Peak productivity / Josh Davis — Work & study topic.
   * Phrases = provisional draft from criteria (cinema stems + Part 3 frames).
   * Teacher can replace the tape list — do not pad with basics.
   */
  var LESSON_PEAK_PRODUCTIVITY = {
    id: "peak-productivity",
    num: 1,
    title: "Peak productivity",
    icon: "⚡",
    tagline: "Pressure · priorities · body clock · breaks · brain fuel",
    synopsis:
      "Josh Davis on working smarter under pressure — priority over urgency, downtime, day-dreaming, exercise, food, sleep. Steal Part 3 frames for study/work life. YOUR routine — don’t retell the article.",
    goal: {
      title: "Why this language for IELTS?",
      examVsSpeak:
        "Part 3 loves study habits, work stress, time management, sleep, and “how to be effective”. One lesson inside Work & study — not a nutrition lecture (food tips are tools for focus).",
      learn: [
        "C1 frames: highly effective as far as it's reasonable · pinpoint the best time · devoted to the task…",
        "Academic load: the extent to which… is underestimated · appear simple on the surface · although trivial.",
        "Body clock: not conducive to · verbal reasoning and reaction times · more to do with… than…",
        "Rest & sleep: go back to day-dreaming · integration between different parts of the brain · consolidating facts and reinforcing…",
      ],
      notThis: [
        "Not B1 staples (creative thinking, most alert, getting distracted…).",
        "Not a gym / diet course.",
      ],
      teacherTip:
        "Topic = Work & study. Prefer academic/native C1–C2 stems that signal plateau breakthrough. Teacher list overrides.",
    },
    beats: [
      {
        id: "pressure-priority",
        label: "1 · Pressure → priority",
        teacher:
          "Block A · C1 stems: reasonable effectiveness · urgency · peak window · devoted to…",
        blocks: ["read", "context"],
        phrases: [
          "In the face of pressure",
          "highly effective as far as it's reasonable for a human being",
          "rather than focusing on what is urgent",
          "decide on the main aim for the day",
          "pinpoint the best time",
          "achieve peak productivity",
          "devoted to the task with the highest priority",
        ],
        read: {
          letter: "A",
          title: "Urgent vs what matters",
          subtitle: "Block 1 · pressure · aim · peak window",
          html:
            "<p>In the face of pressure, our instinct is to study or work as much as we can for as long as we can. So why do we still feel as if we have not accomplished enough at the end of the day?</p>" +
            "<p>Neuroscientist and professor at the Manhattan NeuroLeadership Institute, Josh Davis, suggests that, rather than focusing on what is urgent, people should decide what matters most and pinpoint the best time to do it. \"It's really about being highly effective as far as it's reasonable for a human being,\" Davis says. He believes that, rather than making a to-do list and working through each item, people should decide on the main aim for the day and work out when they are most likely to achieve peak productivity. Then this time can be devoted to the task with the highest priority, such as writing an essay or revising.</p>",
        },
        context: {
          tone: "Sub-theme: work/study under stress · IELTS Lexical Resource C1",
          meanings: [
            "In the face of pressure = when deadlines / stress hit (formal opener). Where: exams, crunch weeks.",
            "highly effective as far as it's reasonable for a human being = effective without pretending you’re a machine. Where: push back on hustle culture.",
            "rather than focusing on what is urgent = stop chasing noise; contrast with priority. Where: time-management answers.",
            "decide on the main aim for the day = one clear daily objective. Where: planning talk.",
            "pinpoint the best time = identify your optimal window precisely. Where: chronotype / routines.",
            "achieve peak productivity = hit your highest-output window. Where: “When do you work best?”",
            "devoted to the task with the highest priority = that peak window is reserved for deep work. Where: essays / revision.",
          ],
          examples: [
            "IN THE FACE OF PRESSURE — In the face of pressure…",
            "REASONABLE — highly effective as far as it's reasonable for a human being…",
            "URGENT — rather than focusing on what is urgent…",
            "MAIN AIM — decide on the main aim for the day…",
            "PINPOINT — pinpoint the best time…",
            "PEAK PRODUCTIVITY — achieve peak productivity…",
            "DEVOTED TO — devoted to the task with the highest priority…",
          ],
        },
        speak: {
          mission: "Part 3 · lexical C1 · stems inside the question · YOUR week.",
          starters: [
            "In the face of pressure…",
            "I try to be highly effective as far as it's reasonable for a human being…",
            "Rather than focusing on what is urgent…",
            "I pinpoint the best time… devoted to the task with the highest priority…",
          ],
          questions: [
            {
              q: "Lex · pressure: Steal — “In the face of pressure, I still try to be highly effective as far as it's reasonable for a human being…” How do YOU refuse the hustle myth?",
              examples: [
                "In the face of pressure… highly effective as far as it's reasonable for a human being…",
              ],
            },
            {
              q: "Lex · window: Finish — “Rather than focusing on what is urgent, I decide on the main aim for the day, pinpoint the best time, and keep that window devoted to the task with the highest priority…” What’s yours tomorrow?",
              examples: [
                "rather than focusing on what is urgent… main aim… pinpoint… achieve peak productivity… devoted to the task…",
              ],
            },
            {
              q: "FINAL · 60–90 s: Every tape phrase once about YOUR study week. Partner ticks.",
              examples: [
                "In the face of pressure → reasonable for a human being → what is urgent → main aim → pinpoint → peak productivity → devoted to…",
              ],
            },
          ],
        },
      },
      {
        id: "small-tasks-brain",
        label: "2 · Underestimated brain tax",
        teacher:
          "Block B · academic: the extent to which… · simple on the surface · trivial → exhaustion.",
        blocks: ["read", "context"],
        phrases: [
          "the extent to which small tasks can tax our brains is underestimated",
          "appear simple on the surface",
          "although trivial",
          "cause mental exhaustion",
          "reorder the day",
          "less pressing concerns",
          "after the work target has been achieved",
        ],
        read: {
          letter: "B",
          title: "Emails aren’t “easy”",
          subtitle: "Block 2 · surface simplicity · brain tax · reorder",
          html:
            "<p>It is obviously impossible to work intensively all the time, so simple tasks not requiring much attention – emails or paperwork – can be done in any 'downtime'. However, there are times when the extent to which small tasks can tax our brains is underestimated. Sending an email, for example, may appear simple on the surface but can involve a decision which, although trivial, can cause mental exhaustion. In this case, it is better to reorder the day and deal with less pressing concerns only after the work target has been achieved.</p>",
        },
        context: {
          tone: "Sub-theme: cognitive load · IELTS “Is multitasking smart?”",
          meanings: [
            "the extent to which small tasks can tax our brains is underestimated = we don’t realise how draining “tiny” jobs are (full academic stem). Where: emails, chats, admin.",
            "appear simple on the surface = looks easy, isn’t. Where: any misleadingly light task.",
            "although trivial = even if the decision is tiny. Where: hedge before a strong cost.",
            "cause mental exhaustion = lead to brain fatigue. Where: end of a message-heavy day.",
            "reorder the day = reshuffle the schedule deliberately. Where: productivity advice.",
            "less pressing concerns = lower-stakes tasks. Where: after deep work.",
            "after the work target has been achieved = only once the main aim is done. Where: boundaries with phone/email.",
          ],
          examples: [
            "EXTENT… UNDERESTIMATED — the extent to which small tasks can tax our brains is underestimated…",
            "ON THE SURFACE — appear simple on the surface…",
            "ALTHOUGH TRIVIAL — although trivial…",
            "MENTAL EXHAUSTION — cause mental exhaustion…",
            "REORDER — reorder the day…",
            "LESS PRESSING — less pressing concerns…",
            "WORK TARGET — after the work target has been achieved…",
          ],
        },
        speak: {
          mission: "Part 3 · lexical academic · YOUR inbox habits.",
          starters: [
            "The extent to which small tasks can tax our brains is underestimated…",
            "It may appear simple on the surface…",
            "Although trivial, it can cause mental exhaustion…",
            "I reorder the day… less pressing concerns after the work target has been achieved…",
          ],
          questions: [
            {
              q: "Lex · tax: Steal the full stem — “The extent to which small tasks can tax our brains is underestimated.” Prove it with YOUR week (messages, paperwork…).",
              examples: [
                "the extent to which small tasks can tax our brains is underestimated…",
              ],
            },
            {
              q: "Lex · surface: Finish — “Replying can appear simple on the surface, and although trivial, it can cause mental exhaustion…” Then: how do you reorder the day?",
              examples: [
                "appear simple on the surface… although trivial… cause mental exhaustion… reorder the day…",
              ],
            },
            {
              q: "FINAL · 60 s: Every tape phrase once — when do less pressing concerns wait until after the work target has been achieved? Partner ticks.",
              examples: [
                "extent… underestimated → on the surface → although trivial → mental exhaustion → reorder → less pressing → work target achieved",
              ],
            },
          ],
        },
      },
      {
        id: "body-clock",
        label: "3 · Body clock & slump",
        teacher:
          "Block C · conducive · verbal reasoning · full potential · native “more to do with… than…”.",
        blocks: ["read", "context"],
        phrases: [
          "not conducive to serious study",
          "verbal reasoning and reaction times",
          "the brain is not at its full potential",
          "afternoon slump",
          "more to do with feeling cold than a heavy lunch",
        ],
        read: {
          letter: "C",
          title: "When the brain isn’t ready",
          subtitle: "Block 3 · conducive · research measures · afternoon slump",
          html:
            "<p>The time of day when people are most alert varies from person to person but as a general rule the first two hours after waking up are not conducive to serious study. Research measuring attention, verbal reasoning and reaction times has also shown that when our body temperature falls below 37 degrees C, the brain is not at its full potential so the worst time to do anything involving thinking is between midnight and 6am. This is almost as bad as the afternoon slump between 2pm and 4pm, which is more to do with feeling cold than a heavy lunch.</p>",
        },
        context: {
          tone: "Sub-theme: chronobiology in plain IELTS · C1 precision",
          meanings: [
            "not conducive to serious study = conditions work against deep study (academic adjective). Where: early morning / late night.",
            "verbal reasoning and reaction times = research measures of mental sharpness. Where: cite “what science looks at” without inventing studies.",
            "the brain is not at its full potential = cognitive capacity is reduced. Where: night work / fatigue.",
            "afternoon slump = the mid-afternoon performance dip (set phrase). Where: school/office schedules.",
            "more to do with feeling cold than a heavy lunch = native causal contrast (X, not Y). Where: challenge common myths.",
          ],
          examples: [
            "NOT CONDUCIVE — not conducive to serious study…",
            "VERBAL REASONING — measuring… verbal reasoning and reaction times…",
            "FULL POTENTIAL — the brain is not at its full potential…",
            "AFTERNOON SLUMP — the afternoon slump…",
            "MORE TO DO WITH… THAN… — more to do with feeling cold than a heavy lunch…",
          ],
        },
        speak: {
          mission: "Part 3 · lexical · body-clock C1 · YOUR timetable myths.",
          starters: [
            "Those hours are not conducive to serious study…",
            "If you look at verbal reasoning and reaction times…",
            "The brain is not at its full potential…",
            "My afternoon slump is more to do with… than…",
          ],
          questions: [
            {
              q: "Lex · conducive: Which part of YOUR day is not conducive to serious study — and when is the brain not at its full potential for you?",
              examples: [
                "not conducive to serious study… the brain is not at its full potential…",
              ],
            },
            {
              q: "Lex · myth: Steal — “My afternoon slump is more to do with ___ than a heavy lunch.” Finish with YOUR real cause. Bonus: mention verbal reasoning and reaction times as what research tracks.",
              examples: [
                "afternoon slump… more to do with… than… verbal reasoning and reaction times…",
              ],
            },
            {
              q: "FINAL · 45–60 s: All five phrases about YOUR body clock. Partner ticks.",
              examples: [
                "not conducive → verbal reasoning… → not at its full potential → afternoon slump → more to do with… than…",
              ],
            },
          ],
        },
      },
      {
        id: "daydream-breaks",
        label: "4 · Day-dreaming (not scrolling)",
        teacher:
          "Block D · no B1 ‘creative thinking’ — soft focus + brain integration stems.",
        blocks: ["read", "context"],
        phrases: [
          "Rather than being afraid of getting distracted",
          "go back to day-dreaming",
          "stop thinking about work without really focusing on anything else",
          "the integration between different parts of the brain",
          "cannot occur when the mind is required to focus on something specific",
        ],
        read: {
          letter: "D",
          title: "Distract carefully",
          subtitle: "Block 4 · day-dreaming · integration · soft focus",
          html:
            "<p>Rather than being afraid of getting distracted, just be careful how you do it. \"These days, when people decide to take a break, they tend to go on social media\", says Davis, \"and then they spend too much time there.\" Instead, they should go back to day-dreaming, where it is possible to stop thinking about work without really focusing on anything else. This allows for creative thinking and the integration between different parts of the brain, which cannot occur when the mind is required to focus on something specific.</p>",
        },
        context: {
          tone: "Sub-theme: quality of breaks · IELTS phones vs rest · C1 precision",
          meanings: [
            "Rather than being afraid of getting distracted = reframe distraction; manage the type. Where: study breaks debate.",
            "go back to day-dreaming = choose unstructured mental rest over feeds. Where: healthier pause.",
            "stop thinking about work without really focusing on anything else = soft rest: off-task but not on a new task. Where: describe real recovery.",
            "the integration between different parts of the brain = background connecting of ideas (academic). Where: why quiet beats scrolling.",
            "cannot occur when the mind is required to focus on something specific = that integration needs soft focus, not another demand. Where: kill the “just check Instagram” myth.",
          ],
          examples: [
            "RATHER THAN BEING AFRAID — Rather than being afraid of getting distracted…",
            "DAY-DREAMING — go back to day-dreaming…",
            "WITHOUT REALLY FOCUSING — stop thinking about work without really focusing on anything else…",
            "INTEGRATION — the integration between different parts of the brain…",
            "CANNOT OCCUR WHEN… — cannot occur when the mind is required to focus on something specific…",
          ],
        },
        speak: {
          mission: "Part 3 · lexical C1 · break quality · YOUR phone vs window.",
          starters: [
            "Rather than being afraid of getting distracted…",
            "I try to go back to day-dreaming…",
            "…stop thinking about work without really focusing on anything else…",
            "That supports the integration between different parts of the brain…",
          ],
          questions: [
            {
              q: "Lex · reframe: Steal — “Rather than being afraid of getting distracted, I go back to day-dreaming…” True for YOU — or do you still open social media?",
              examples: [
                "Rather than being afraid of getting distracted… go back to day-dreaming…",
              ],
            },
            {
              q: "Lex · soft focus: Finish — “I need to stop thinking about work without really focusing on anything else — because the integration between different parts of the brain cannot occur when the mind is required to focus on something specific.” Personal proof?",
              examples: [
                "stop thinking about work without really focusing… integration… cannot occur when the mind is required to focus…",
              ],
            },
            {
              q: "FINAL · 60 s: All five phrases about how YOU take breaks. Partner ticks.",
              examples: [
                "rather than being afraid… → day-dreaming → without really focusing… → integration… → cannot occur when…",
              ],
            },
          ],
        },
      },
      {
        id: "body-fuel-sleep",
        label: "5 · Short-term tools · sleep",
        teacher:
          "Block E · neurotransmitters · 80% capacity · uncompleted work · consolidating + reinforcing.",
        blocks: ["read", "context"],
        phrases: [
          "exercise can be used as a tool",
          "focused on the short term",
          "lessening tension and boosting positive emotions",
          "high impact on the neurotransmitters in the brain",
          "eat only to 80 percent capacity",
          "slightly hungry but not starving",
          "reminds you of uncompleted work",
          "minimizes concentration",
          "consolidating facts and reinforcing how to perform tasks",
          "rejuvenates us both physically and mentally",
        ],
        read: {
          letter: "E",
          title: "Move, fuel, clear, sleep",
          subtitle: "Block 5 · short-term tools · neurochemistry · sleep",
          html:
            "<p>Neuroscience has revealed much about the mind-body connection and how exercise can be used as a tool. \"It's a different way of seeing exercise,\" says Davis. \"Usually we think about how in the long term it will make us healthy and look better but this is focused on the short term.\" A short session – 20 minutes or so – of moderate exercise will be sufficient. It does not need to be a lengthy gym visit; just running up and down stairs or jogging on the spot can be an effective method of lessening tension and boosting positive emotions.</p>" +
            "<p>Food that keeps blood-sugar levels stable will also help people to work most effectively, says Davis. If people snack during the day, they should choose foods that contain fats such as nuts and cheese rather than carbohydrates, to avoid blood-sugar spikes. Starting the day with high-protein food such as eggs and toast will have a high impact on the neurotransmitters in the brain. The amino acid tyrosine, which is found in proteins, will stimulate the transmitters responsible for alertness and the calming protein tryptophan will relax the brain. On meal breaks, people should eat only to 80 percent capacity; people's best work will be done when they are slightly hungry but not starving.</p>" +
            "<p>Keep hydrated and improve your mood by sipping water. Just remember not to overdo caffeine; it may improve your alertness but also minimizes concentration.</p>" +
            "<p>Ensure you have a well-lit study space and that your desk space is clear; clutter is a distraction and not a good one, as it reminds you of uncompleted work. A clear desk also gives you room for increased movement, whether sitting with your arms behind your head or your feet up. You could alternate between standing and sitting.</p>" +
            "<p>Finally, try to get eight hours sleep a night. While we sleep, our brains process and retain information, consolidating facts and reinforcing how to perform tasks. It also rejuvenates us both physically and mentally.</p>",
        },
        context: {
          tone: "Sub-theme: performance habits · academic wording · not “eat healthy” B1",
          meanings: [
            "exercise can be used as a tool = movement as a performance instrument, not only fitness. Where: short study breaks.",
            "focused on the short term = immediate cognitive effect (not long-term looks). Where: reframing gym.",
            "lessening tension and boosting positive emotions = reduce stress + lift mood quickly. Where: 20-minute reset.",
            "high impact on the neurotransmitters in the brain = strong effect on brain chemistry. Where: protein breakfast talk.",
            "eat only to 80 percent capacity = stop before full (distinctive rule). Where: lunch & focus.",
            "slightly hungry but not starving = optimal alertness zone. Where: meal timing.",
            "reminds you of uncompleted work = clutter as a guilt cue (why mess drains you). Where: desk / room.",
            "minimizes concentration = caffeine can sharpen alertness but shrink focus. Where: coffee myths.",
            "consolidating facts and reinforcing how to perform tasks = sleep locks knowledge + skills. Where: exam prep.",
            "rejuvenates us both physically and mentally = restores body and mind together. Where: close a sleep answer.",
          ],
          examples: [
            "EXERCISE AS A TOOL — exercise can be used as a tool…",
            "SHORT TERM — focused on the short term…",
            "LESSENING TENSION — lessening tension and boosting positive emotions…",
            "NEUROTRANSMITTERS — high impact on the neurotransmitters in the brain…",
            "80 PERCENT — eat only to 80 percent capacity…",
            "SLIGHTLY HUNGRY — slightly hungry but not starving…",
            "UNCOMPLETED WORK — reminds you of uncompleted work…",
            "MINIMIZES CONCENTRATION — minimizes concentration…",
            "CONSOLIDATING… REINFORCING — consolidating facts and reinforcing how to perform tasks…",
            "REJUVENATES — rejuvenates us both physically and mentally…",
          ],
        },
        speak: {
          mission: "Part 3 · lexical C1 · tools + sleep · YOUR exam week.",
          starters: [
            "Exercise can be used as a tool… focused on the short term…",
            "…high impact on the neurotransmitters in the brain…",
            "I eat only to 80 percent capacity… slightly hungry but not starving…",
            "Clutter reminds you of uncompleted work… Sleep is consolidating facts and reinforcing…",
          ],
          questions: [
            {
              q: "Lex · tool: Steal — “Exercise can be used as a tool… focused on the short term… lessening tension and boosting positive emotions.” What do YOU actually do in 20 minutes?",
              examples: [
                "exercise can be used as a tool… focused on the short term… lessening tension and boosting positive emotions…",
              ],
            },
            {
              q: "Lex · fuel/desk: Finish — “Breakfast can have a high impact on the neurotransmitters in the brain… I eat only to 80 percent capacity… slightly hungry but not starving… A messy desk reminds you of uncompleted work… Caffeine minimizes concentration.” Pick three for YOU.",
              examples: [
                "high impact on the neurotransmitters… 80 percent capacity… reminds you of uncompleted work… minimizes concentration…",
              ],
            },
            {
              q: "Lex · sleep: Steal — “Sleep is consolidating facts and reinforcing how to perform tasks — it rejuvenates us both physically and mentally.” True before YOUR exams?",
              examples: [
                "consolidating facts and reinforcing how to perform tasks… rejuvenates us both physically and mentally…",
              ],
            },
            {
              q: "FINAL · 60–90 s: Every tape phrase once about YOUR performance habits. Partner ticks.",
              examples: [
                "exercise as a tool · short term · lessening tension… · neurotransmitters · 80% · slightly hungry… · uncompleted work · minimizes concentration · consolidating… reinforcing… · rejuvenates…",
              ],
            },
          ],
        },
      },
    ],
    finale: {
      prompt:
        "Improv · simple Part 3 questions. Answer about YOU. The yellow Use line = our crown lexis — try to make those phrases sound. Partner ticks the tape.",
      questions: [
        {
          q: "When you have too much to do, do you just work longer — or do you choose differently?",
          steal:
            "In the face of pressure · highly effective as far as it's reasonable for a human being · rather than focusing on what is urgent · decide on the main aim for the day · pinpoint the best time · achieve peak productivity · devoted to the task with the highest priority",
        },
        {
          q: "Why can “small” jobs like emails leave you so tired?",
          steal:
            "the extent to which small tasks can tax our brains is underestimated · appear simple on the surface · although trivial · cause mental exhaustion · reorder the day · less pressing concerns · after the work target has been achieved",
        },
        {
          q: "When is a bad time to do serious study — and why?",
          steal:
            "not conducive to serious study · verbal reasoning and reaction times · the brain is not at its full potential · afternoon slump · more to do with feeling cold than a heavy lunch",
        },
        {
          q: "What kind of break actually helps your brain?",
          steal:
            "Rather than being afraid of getting distracted · go back to day-dreaming · stop thinking about work without really focusing on anything else · the integration between different parts of the brain · cannot occur when the mind is required to focus on something specific",
        },
        {
          q: "Before exams, what do you do for your body, desk, and sleep?",
          steal:
            "exercise can be used as a tool · focused on the short term · lessening tension and boosting positive emotions · high impact on the neurotransmitters in the brain · eat only to 80 percent capacity · slightly hungry but not starving · reminds you of uncompleted work · minimizes concentration · consolidating facts and reinforcing how to perform tasks · rejuvenates us both physically and mentally",
        },
      ],
    },
    homework: {
      note:
        "Record 2 answers (45–70 s each). Questions are simple — but your answer must use the Use line. Send audio to teacher.",
      questions: [
        {
          q: "HW1 · Pressure day: You have an essay and lots of messages. What do you do first — and when?",
          steal:
            "In the face of pressure · rather than focusing on what is urgent · decide on the main aim for the day · pinpoint the best time · achieve peak productivity · devoted to the task with the highest priority · highly effective as far as it's reasonable for a human being",
        },
        {
          q: "HW2 · Tired from “nothing”: Why do small tasks drain you — and how do you reorder the day?",
          steal:
            "the extent to which small tasks can tax our brains is underestimated · appear simple on the surface · although trivial · cause mental exhaustion · reorder the day · less pressing concerns · after the work target has been achieved",
        },
        {
          q: "HW3 · Bad study hours: When should you NOT study hard?",
          steal:
            "not conducive to serious study · the brain is not at its full potential · afternoon slump · more to do with feeling cold than a heavy lunch · verbal reasoning and reaction times",
        },
        {
          q: "HW4 · Breaks: Phone scroll or something else — what helps more?",
          steal:
            "Rather than being afraid of getting distracted · go back to day-dreaming · stop thinking about work without really focusing on anything else · the integration between different parts of the brain · cannot occur when the mind is required to focus on something specific",
        },
        {
          q: "HW5 · Exam week body: Move, eat, desk, sleep — what will you actually do?",
          steal:
            "exercise can be used as a tool · focused on the short term · lessening tension and boosting positive emotions · high impact on the neurotransmitters in the brain · eat only to 80 percent capacity · slightly hungry but not starving · reminds you of uncompleted work · minimizes concentration · consolidating facts and reinforcing how to perform tasks · rejuvenates us both physically and mentally",
        },
      ],
    },
  };

  /**
   * Categories (main topics) → many lessons inside.
   * Hub opens categories; category page lists lessons (like Nutrition → 10 food lessons).
   */
  var TOPICS = [
    {
      id: "society",
      num: 1,
      title: "Society",
      icon: "🌍",
      tagline: "Progress · peace · media · public life · inequality",
      blurb:
        "Big Part 3 territory: is life getting better, safer, fairer? First lesson ready — room for ~10 more (crime, community, ageing…).",
      lessons: [
        LESSON_IS_WORLD_BETTER,
        shellLesson(2, "Crime & feeling safe", "🛡️"),
        shellLesson(3, "Community & belonging", "🏘️"),
        shellLesson(4, "Wealth, poverty & fairness", "⚖️"),
      ],
    },
    {
      id: "business",
      num: 2,
      title: "Business & advertising",
      icon: "📣",
      tagline: "Brands · campaigns · shopping habits · market power",
      blurb:
        "Part 3 about why we buy, how ads work, and why some brands win. Lesson 1 ready — room for more (influencers, luxury, online shopping…).",
      lessons: [
        LESSON_KETCHUP_CONUNDRUM,
        shellLesson(2, "Influencers & online ads", "📱"),
        shellLesson(3, "Luxury brands & status", "✨"),
        shellLesson(4, "Shopping habits & loyalty", "🛒"),
      ],
    },
    {
      id: "work-study",
      num: 3,
      title: "Work & study",
      icon: "📚",
      tagline: "Pressure · focus · routines · sleep · productivity",
      blurb:
        "Part 3 about studying, working under stress, time, breaks, and energy. Lesson 1 ready — room for more (exams, remote work, burnout…).",
      lessons: [
        LESSON_PEAK_PRODUCTIVITY,
        shellLesson(2, "Exams & revision pressure", "📝"),
        shellLesson(3, "Remote work & focus", "💻"),
        shellLesson(4, "Burnout & boundaries", "🛑"),
      ],
    },
    {
      id: "nutrition",
      num: 4,
      title: "Nutrition",
      icon: "🥗",
      tagline: "Diet · health · food waste · eating habits",
      blurb:
        "Real food & health Part 3 — diet trends, healthy eating, waste. Shells for now; ketchup/marketing lives under Business.",
      lessons: [
        shellLesson(1, "Diet trends & healthy eating", "🍎"),
        shellLesson(2, "Food waste & the planet", "🥦"),
      ],
    },
    {
      id: "environment",
      num: 5,
      title: "Environment",
      icon: "🌿",
      tagline: "Climate · cities · nature · responsibility",
      blurb: "Shell topic — fill when you have texts.",
      lessons: [shellLesson(1, "Climate talk for Part 3", "🌡️")],
    },
  ];

  var THEMES = [];
  TOPICS.forEach(function (topic) {
    (topic.lessons || []).forEach(function (lesson) {
      lesson.topicId = topic.id;
      lesson.topicTitle = topic.title;
      THEMES.push(lesson);
    });
  });

  function getTopic(id) {
    for (var i = 0; i < TOPICS.length; i++) {
      if (TOPICS[i].id === id) return TOPICS[i];
    }
    return null;
  }

  function getTheme(id) {
    for (var i = 0; i < THEMES.length; i++) {
      if (THEMES[i].id === id) return THEMES[i];
    }
    return null;
  }

  function buildFlow(theme) {
    var beats = (theme && theme.beats) || defaultBeats(1);
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
        time: b.time || "10–15 min",
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
      teacher: "Take-home speaking — text + voice.",
      note:
        (theme && theme.homework && theme.homework.note) ||
        "Reread · 45–60 s voice with 2 tape phrases.",
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

  global.IELTS_SPEAK_BLOCK_META = BLOCK_META;
  global.IELTS_SPEAK_TOPICS = TOPICS;
  global.IELTS_SPEAK_THEMES = THEMES;
  global.IELTS_SPEAK_getTopic = getTopic;
  global.IELTS_SPEAK_getTheme = getTheme;
  global.IELTS_SPEAK_buildFlow = buildFlow;
  global.IELTS_SPEAK_allPhrases = allPhrases;

  global.B2_INTENSIVE_BLOCK_META = BLOCK_META;
  global.B2_INTENSIVE_THEMES = THEMES;
  global.B2_INTENSIVE_getTheme = getTheme;
  global.B2_INTENSIVE_buildFlow = buildFlow;
  global.B2_INTENSIVE_allPhrases = allPhrases;
  global.B2_INTENSIVE_STEPS = [];
})(typeof window !== "undefined" ? window : globalThis);
