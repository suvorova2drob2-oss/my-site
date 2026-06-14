/**
 * Unit 10 Millionaire · passage-grounded facts + paraphrase (definition-style) rounds.
 * Listening facts reference SB Track 10.1 monologues (same paras as listening-p4-wb10-pack.js).
 */
(function (W) {
  "use strict";

  /**
   * speakerIndex · SB 10.1 Listening Part 4 monologue index 0–4 (Speaker 1–5); omit for non-listening facts.
   * sourceLine · short excerpt (optional reference); Text panel shows the full monologue or full topic passage.
   * @type {{ topicId: string, speakerIndex?: number, q: string, opts: string[], correct: number, sourceLine: string }[]}
   */
  W.U10_MILLIONAIRE_FACTS = [
    /* Listening Part 4 — audiobook disaster */
    {
      topicId: "u10_p4",
      speakerIndex: 0,
      q: "Speaker 1 booked the studio for how long?",
      opts: ["One day", "Two days", "A full week", "Only an afternoon"],
      correct: 1,
      sourceLine:
        "… we'd contracted an experienced freelancer, so we only had the studio for two days. The author, some up-and-coming novelist … decided she wanted to come to the recording … Well, it was an utter disaster …"
    },
    {
      topicId: "u10_p4",
      speakerIndex: 0,
      q: "According to Speaker 1, who kept interrupting the voice artist?",
      opts: ["The producer", "The freelance engineer", "The novelist author", "The literary critic"],
      correct: 2,
      sourceLine:
        "… she kept interrupting the voice artist to explain how she wanted certain lines delivered. This obviously didn't go down well, and they went back and forth bickering about it for hours."
    },
    {
      topicId: "u10_p4",
      speakerIndex: 0,
      q: "By the end of day one, Speaker 1 says they had barely finished:",
      opts: ["The whole audiobook", "The first chapter", "The marketing trailer", "The sound check"],
      correct: 1,
      sourceLine:
        "At the end of day one, we'd barely even finished the first chapter. I had no one to blame except myself …"
    },
    /* Film screenplay shelved */
    {
      topicId: "u10_p4",
      speakerIndex: 1,
      q: "Speaker 2 says production stopped mainly because:",
      opts: ["The script was rejected", "CGI spending spiralled and investors withdrew", "The lead actor resigned", "The novel was unpublished"],
      correct: 1,
      sourceLine:
        "Only later did I discover that they'd gone way over budget on the CGI and the investors had pulled out so, the whole thing was shelved."
    },
    {
      topicId: "u10_p4",
      speakerIndex: 1,
      q: "Speaker 2’s reaction to future similar offers is to:",
      opts: ["Negotiate a higher fee", "Walk away — it is not worth the stress", "Switch to directing", "Only work with streaming platforms"],
      correct: 1,
      sourceLine:
        "… were I to ever get asked to be involved in something similar, I should just walk away – it's not worth the stress regardless of any promises of potential box office fortunes."
    },
    /* Subtitling */
    {
      topicId: "u10_p4",
      speakerIndex: 2,
      q: "Speaker 3 chose subtitling partly because the team was:",
      opts: ["Short of dubbing studios", "Pretty bilingual", "Required by law", "Filming overseas"],
      correct: 1,
      sourceLine:
        "… And the production team was pretty bilingual, so we went with subtitling instead, thinking it would be way less effort."
    },
    {
      topicId: "u10_p4",
      speakerIndex: 2,
      q: "Late in the project Speaker 3 had to bring in:",
      opts: ["Lawyers", "Dubbing actors", "Closed-caption specialists", "AI subtitle bots"],
      correct: 2,
      sourceLine:
        "… we had to get some actual closed caption specialists in to review everything at the last minute, which was unimaginably stressful."
    },
    /* Adaptation bombed */
    {
      topicId: "u10_p4",
      speakerIndex: 3,
      q: "Fans loyal to the book cared especially about the protagonist’s:",
      opts: ["Accent", "Flaming red hair", "Age", "Career in law"],
      correct: 1,
      sourceLine:
        "For them the protagonist's flaming red hair is fundamental to his character. Then, inexplicably, they decided to omit the part where he abandons his homeland …"
    },
    {
      topicId: "u10_p4",
      speakerIndex: 3,
      q: "Speaker 4 says the film performed how at the box office?",
      opts: ["It broke records", "It bombed spectacularly", "It was never released", "It topped the festival circuit"],
      correct: 1,
      sourceLine:
        "… It's not surprising it bombed spectacularly at the box office."
    },
    /* Translation teams */
    {
      topicId: "u10_p4",
      speakerIndex: 4,
      q: "Speaker 5 wanted translators to work in mini groups of:",
      opts: ["Two", "Three", "Five", "Ten"],
      correct: 1,
      sourceLine:
        "… so we had our translators work in mini groups of three for each language. We expected them to self-manage …"
    },
    {
      topicId: "u10_p4",
      speakerIndex: 4,
      q: "After managers stepped in, the schedule:",
      opts: ["Was cancelled", "Got back on track", "Doubled in length", "Moved exclusively online"],
      correct: 1,
      sourceLine:
        "No sooner had they started coordinating the discussions than the production schedule got back on track, and we managed to publish the translations simultaneously …"
    },

    /* Books & films reviews */
    {
      topicId: "u10_books",
      q: "The Liverpool orphan story is mainly described as a:",
      opts: ["Thriller sequel", "Tearjerker page-turner", "Sci-fi epic", "Historical documentary"],
      correct: 1,
      sourceLine:
        "Set in 1930s Liverpool, this emotional story … is a real tearjerker … It's … heart-wrenching … — … it's such a page-turner; you just can't put down."
    },
    {
      topicId: "u10_books",
      q: "Harold and Maude is characterised as:",
      opts: ["A cult classic black comedy", "A mainstream musical", "A nature documentary", "A silent film"],
      correct: 0,
      sourceLine:
        "It's an odd and fairly far-fetched story … a black comedy … It is, however, without a doubt a cult classic, its passionate aficionados defending it to the hilt …"
    },
    {
      topicId: "u10_books",
      q: "Mary Higgins Clark’s follow-up is called:",
      opts: ["Where are the Children Now", "Where are the Parents Now", "Children of 1975", "Clark Returns"],
      correct: 0,
      sourceLine:
        "Where are the Children Now is the long-awaited follow-up novel to Where are the Children by Mary Higgins Clark, published in 1975."
    },
    {
      topicId: "u10_books",
      q: "The Nolan film paragraph praises performances as:",
      opts: ["Poorly rehearsed", "Critically acclaimed / spellbinding", "Entirely improvised", "Dubbed by AI"],
      correct: 1,
      sourceLine:
        "… nothing short of a masterpiece, with critically acclaimed performances from its main protagonists … Cillian Murphy's portrayal … is so utterly spellbinding …"
    },

    /* Shakespeare UoE plain */
    {
      topicId: "u10_shakespeare",
      q: "The passage centres on doubts about:",
      opts: ["Film censorship", "Shakespeare’s true identity", "Stage lighting", "Royal patronage only"],
      correct: 1,
      sourceLine:
        "Few topics excite aficionados as much as the perennial question of Shakespeare's true identity."
    },
    {
      topicId: "u10_shakespeare",
      q: "Editors are said to have helped create:",
      opts: ["A single sonnet", "A body of work that reads larger than one touring life", "An opera libretto", "A banned play list"],
      correct: 1,
      sourceLine:
        "Later editors helped create a body of work that reads larger than one touring life, while rumours whisper some lordlings chose to write plays under his name …"
    },
    {
      topicId: "u10_shakespeare",
      q: "Vehement fans treat fresh doubt almost like:",
      opts: ["A joke", "Tantamount to heresy", "Good publicity", "Legal advice"],
      correct: 1,
      sourceLine:
        "Whenever gossip comes to the fore, vehement fans treat fresh doubt as tantamount to heresy."
    },

    /* Similes strip */
    {
      topicId: "u10_similes",
      q: "Joanne and the speaker got on especially well — which image captures that?",
      opts: ["Like a house on fire", "Like cat and dog", "Like a sore thumb", "Like ditch water"],
      correct: 0,
      sourceLine:
        "Joanne and I got on like a house on fire at the conference because our tastes matched perfectly."
    },
    {
      topicId: "u10_similes",
      q: "Watching learners on the ice, the speaker monitored them:",
      opts: ["Like a hawk", "Like a log", "Like mud", "Like foxes"],
      correct: 0,
      sourceLine:
        "I didn't want an accident, so I watched them like a hawk while they practised on the ice."
    },
    {
      topicId: "u10_similes",
      q: "The glass tower among brick terraces:",
      opts: ["Blended in", "Stuck out like a sore thumb", "Collapsed", "Was invisible"],
      correct: 1,
      sourceLine:
        "The glass tower stuck out like a sore thumb among low brick terraces."
    }
  ];
  /**
   * Paraphrase / definition MCQ: English clue only (no cloze blank); pick the word or phrase it describes.
   * @type {{ topicId: string, definition: string, target: string, opts: string[], correct: number }[]}
   */
  W.U10_MILLIONAIRE_PARAPHRASE_QUIZ = [
    {
      topicId: "u10_books",
      definition:
        "Which word describes a film or story calculated to make you cry — sentimental enough that reviewers joke about needing tissues?",
      target: "tearjerker",
      opts: ["tearjerker", "thriller", "sequel", "sequelitis"],
      correct: 0
    },
    {
      topicId: "u10_books",
      definition: "A book or film so gripping that you keep turning pages — you cannot put it down.",
      target: "page-turner",
      opts: ["page-turner", "footnote", "synopsis", "blurb"],
      correct: 0
    },
    {
      topicId: "u10_books",
      definition: "Said of a cast packed with famous actors — Hollywood heavyweights billed together.",
      target: "star-studded",
      opts: ["star-studded", "anonymous", "understudied", "silent"],
      correct: 0
    },
    {
      topicId: "u10_books",
      definition: "Official reviewers praised it strongly — performances or production earned widespread critical praise.",
      target: "critically acclaimed",
      opts: ["critically acclaimed", "unreleased", "bootleg", "unfinished"],
      correct: 0
    },
    {
      topicId: "u10_books",
      definition:
        "A film or album loved passionately by a devoted minority rather than the mainstream — often defended fiercely against criticism.",
      target: "cult classic",
      opts: ["cult classic", "blockbuster only", "straight-to-TV flop", "remake"],
      correct: 0
    },
    {
      topicId: "u10_books",
      definition: "So unlikely or exaggerated that it strains belief — not credible as realistic plotting.",
      target: "far-fetched",
      opts: ["far-fetched", "documentary-true", "canonical", "indexed"],
      correct: 0
    },
    {
      topicId: "u10_books",
      definition: "Uncompromising and forceful when tackling a serious issue — pulls no punches.",
      target: "hard-hitting",
      opts: ["hard-hitting", "wishy-washy", "decorative", "neutral"],
      correct: 0
    },

    {
      topicId: "u10_p4",
      definition: "A complete catastrophe — everything went wrong; informal intensifier with ‘utter’ common in speech.",
      target: "disaster",
      opts: ["disaster", "triumph", "holiday", "invoice"],
      correct: 0
    },
    {
      topicId: "u10_p4",
      definition:
        "A film project cancelled indefinitely and put aside — metaphorically stored on a shelf after backers withdrew.",
      target: "shelved",
      opts: ["shelved", "green-lit", "Oscared", "premiered"],
      correct: 0
    },
    {
      topicId: "u10_p4",
      definition: "Drive away or estrange loyal supporters — make fans feel the adaptation betrayed the source.",
      target: "alienate",
      opts: ["alienate", "celebrate", "reward", "clone"],
      correct: 0
    },
    {
      topicId: "u10_p4",
      definition: "Fail commercially at the cinema — informal verb journalists use for a box-office flop.",
      target: "bombed",
      opts: ["bombed", "soared", "toured", "hibernated"],
      correct: 0
    },

    {
      topicId: "u10_shakespeare",
      definition: "A debate that keeps returning — familiar, long-running, and never fully settled.",
      target: "perennial question",
      opts: ["perennial question", "come to the fore", "raise questions over", "single-handedly creating"],
      correct: 0
    },
    {
      topicId: "u10_shakespeare",
      definition:
        "So shocking to true believers that doubting feels almost like attacking sacred doctrine — used figuratively of bardolatry.",
      target: "tantamount to heresy",
      opts: ["tantamount to heresy", "excite aficionados", "travel to settings", "remain unobtrusive"],
      correct: 0
    },
    {
      topicId: "u10_shakespeare",
      definition: "Stir strong enthusiasm among people who are devoted followers of the topic.",
      target: "excite aficionados",
      opts: ["excite aficionados", "vehement fans", "write plays under his name", "taken as read"],
      correct: 0
    },
    {
      topicId: "u10_shakespeare",
      definition:
        "Make people doubt whether a claim still stands — similar in classroom English to casting doubt on something.",
      target: "raise questions over",
      opts: ["raise questions over", "create a body of work", "perennial question", "used sparingly"],
      correct: 0
    },
    {
      topicId: "u10_shakespeare",
      definition:
        "Produce the coherent set of plays or poems someone is remembered for — viewed as one achievement over time.",
      target: "create a body of work",
      opts: ["create a body of work", "travel to settings", "come to the fore", "can be jarring"],
      correct: 0
    },
    {
      topicId: "u10_shakespeare",
      definition:
        "Actually knowing or visiting the real-world places stories mirror — contrasted with only imagining them.",
      target: "travel to settings",
      opts: ["travel to settings", "single-handedly creating", "remain unobtrusive", "keen commitment to"],
      correct: 0
    },
    {
      topicId: "u10_shakespeare",
      definition: "Have dramas credited to another person’s name — suggesting secrecy or proxy authorship.",
      target: "write plays under his name",
      opts: ["write plays under his name", "raise questions over", "vehement fans", "taken as read"],
      correct: 0
    },
    {
      topicId: "u10_shakespeare",
      definition: "Building or producing the whole thing alone, without co-authors sharing the labour.",
      target: "single-handedly creating",
      opts: ["single-handedly creating", "excite aficionados", "create a body of work", "used sparingly"],
      correct: 0
    },
    {
      topicId: "u10_shakespeare",
      definition: "Suddenly become prominent — move into public attention so everyone discusses it.",
      target: "come to the fore",
      opts: ["come to the fore", "perennial question", "travel to settings", "can be jarring"],
      correct: 0
    },
    {
      topicId: "u10_shakespeare",
      definition: "Supporters who hit back with fierce, loud conviction — sharper than merely ‘passionate’.",
      target: "vehement fans",
      opts: ["vehement fans", "excite aficionados", "remain unobtrusive", "write plays under his name"],
      correct: 0
    },
    {
      topicId: "u10_shakespeare",
      definition:
        "Treated as already agreed among specialists — nobody expects a long proof because the point feels obvious in context.",
      target: "taken as read",
      opts: ["taken as read", "raise questions over", "come to the fore", "single-handedly creating"],
      correct: 0
    },
    {
      topicId: "u10_shakespeare",
      definition: "Shows strong, eager dedication toward a standard — here typically before words like ‘clarity’.",
      target: "keen commitment to",
      opts: ["keen commitment to", "create a body of work", "used sparingly", "tantamount to heresy"],
      correct: 0
    },
    {
      topicId: "u10_shakespeare",
      definition: "Stay subtle so you never steal attention from the main argument sitting beside it.",
      target: "remain unobtrusive",
      opts: ["remain unobtrusive", "vehement fans", "come to the fore", "excite aficionados"],
      correct: 0
    },
    {
      topicId: "u10_shakespeare",
      definition: "Apply something only in small doses — avoid plastering the page so it stays tasteful.",
      target: "used sparingly",
      opts: ["used sparingly", "single-handedly creating", "travel to settings", "perennial question"],
      correct: 0
    },
    {
      topicId: "u10_shakespeare",
      definition:
        "Feel harsh or misplaced because it clashes with everything nearby and unsettles readers or viewers.",
      target: "can be jarring",
      opts: ["can be jarring", "remain unobtrusive", "taken as read", "write plays under his name"],
      correct: 0
    },

    {
      topicId: "u10_similes",
      definition: "Idiom: two people take to each other instantly and get along brilliantly.",
      target: "a house on fire",
      opts: ["a house on fire", "cat and dog", "ditch water", "old boots"],
      correct: 0
    },
    {
      topicId: "u10_similes",
      definition: "Idiom: observe someone very closely to catch every mistake or slip.",
      target: "a hawk",
      opts: ["a hawk", "a log", "mud", "frogs"],
      correct: 0
    },
    {
      topicId: "u10_similes",
      definition: "Idiom: be glaringly conspicuous — obviously different from everything around it.",
      target: "a sore thumb",
      opts: ["a sore thumb", "a bestseller", "a sequel", "a hero"],
      correct: 0
    }
  ];

  /** @deprecated Use U10_MILLIONAIRE_PARAPHRASE_QUIZ */
  W.U10_MILLIONAIRE_SYNONYM_QUIZ = W.U10_MILLIONAIRE_PARAPHRASE_QUIZ;
})(typeof window !== "undefined" ? window : globalThis);
