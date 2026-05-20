/**
 * Unit 10 · Retell chain — content packs only (transcripts, chips, focus rails).
 *
 * Stack elsewhere:
 *   prep-retell-chain-kit.js          — DOM helpers (rail, accordion)
 *   prep-retell-chain-speech-match.js — fuzzy phrase matching for mic mode
 *   prep-retell-chain-timed-copy.js   — default RU strings for timed overlay (override per page)
 *   prep-retell-chain-timed-engine.js — timed drill controller (expects getSegments + els)
 *
 * Depends on: listening-p4-wb10-pack.js, u10-books-films-lexis.js,
 *             use-of-english/u10-uoe-shakespeare-lexicon.js
 */
(function (W) {
  "use strict";

  var AUDIO_SRC =
    "https://storage.yandexcloud.net/cpeaudio/RF_C2_SB_Track%2010.1.mp3";

  var TRAINER_HREF =
    "../../../Listening%20Part%204%20Multiple%20matching/exam%20trainer/p4-multiple-matching.html";

  var BOOKS_VOCAB_HREF = "../../../unit10-vocabulary/describing-books-films/index.html";
  var SHAKESPEARE_MC_HREF = "../../../use-of-english/part1-mc-cloze/index.html";

  var SPEAKER_META = [
    {
      sumTitle: "Speaker 1 \u00b7 Audiobooks & studio tension",
      sumDesc:
        "Freelancer booked; author on site; interruptions; barely finished chapter one.",
      aimEn:
        "Explain the studio booking, why the novelist attended, how interruptions escalated, progress after day one, and what you would do differently next time.",
      aimRu:
        "\u0417\u0430\u0447\u0435\u043c \u0430\u0432\u0442\u043e\u0440 \u043f\u0440\u0438\u0448\u0451\u043b \u043d\u0430 \u0437\u0430\u043f\u0438\u0441\u044c; \u0447\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a; \u0443\u0440\u043e\u043a."
    },
    {
      sumTitle: "Speaker 2 \u00b7 Screenplay & collapsed film",
      sumDesc: "Flattered but wary; hype; sudden halt; CGI overspend; investors; shelved.",
      aimEn:
        "Trace confidence vs doubt, network excitement, production stop, hidden CGI/investor news, shelving, and your lesson about stress and walking away.",
      aimRu:
        "\u0412\u043e\u0441\u0442\u043e\u0440\u0433 \u0432\u043e\u043a\u0440\u0443\u0433 \u044d\u043a\u0440\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438; \u0441\u0442\u043e\u043f; \u0434\u0435\u043d\u044c\u0433\u0438; \u0432\u044b\u0432\u043e\u0434 \u043f\u0440\u043e \u0441\u0442\u0440\u0435\u0441\u0441."
    },
    {
      sumTitle: "Speaker 3 \u00b7 Subtitling underestimated",
      sumDesc: "Avoided dubbing; bilingual team; split lines on screen; specialists at last minute.",
      aimEn:
        "Why subtitling sounded easier than dubbing, what turned out technically hard, the split-sentence issue, and bringing specialists in under pressure.",
      aimRu:
        "\u041f\u043e\u0447\u0435\u043c\u0443 \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044b; \u0447\u0442\u043e \u0443\u0441\u043b\u043e\u0436\u043d\u0438\u043b\u043e\u0441\u044c; \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u044b."
    },
    {
      sumTitle: "Speaker 4 \u00b7 Book vs film disaster",
      sumDesc: "Scriptwriter regrets; casting vs loyal readers; omitted arc; romantic tilt; bombed.",
      aimEn:
        "Strong regrets, defending the book\u2019s vision, casting backlash risk, structural cuts fans hated, tone shift, box-office outcome.",
      aimRu:
        "\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043a\u0430\u0441\u0442\u0438\u043d\u0433; \u0447\u0442\u043e \u0443\u0431\u0440\u0430\u043b\u0438 \u0438\u0437 \u0441\u044e\u0436\u0435\u0442\u0430; \u043f\u0440\u043e\u0432\u0430\u043b \u0432 \u043f\u0440\u043e\u043a\u0430\u0442\u0435."
    },
    {
      sumTitle: "Speaker 5 \u00b7 Translation squads",
      sumDesc: "Trios per language; hands-off start; uneven dynamics; PMs impose order; simultaneous launch.",
      aimEn:
        "Goal of accuracy, group-of-three setup, surprise variance in teamwork, schedule slipping, fast intervention, recovery and multi-country release.",
      aimRu:
        "\u0414\u0438\u043d\u0430\u043c\u0438\u043a\u0430 \u043c\u0438\u043d\u0438-\u0433\u0440\u0443\u043f\u043f; \u0441\u0440\u044b\u0432 \u0433\u0440\u0430\u0444\u0438\u043a\u0430; \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u043a \u043f\u043b\u0430\u043d\u0443."
    }
  ];

  function segmentsListeningP4() {
    var paras = W.U10_P4_WB_TRANSCRIPT_PARAS || [];
    var rows = W.U10_P4_LEXIS_GAME_ROWS || [];
    var out = [];
    var i;
    for (i = 0; i < paras.length && i < SPEAKER_META.length; i++) {
      var m = SPEAKER_META[i];
      out.push({
        key: String(i + 1),
        sumTitle: m.sumTitle,
        sumDesc: m.sumDesc,
        transcript: paras[i],
        stepNum: "Retell \u00b7 " + (i + 1) + " / " + paras.length,
        aimEn: m.aimEn,
        aimRu: m.aimRu,
        chipRows: rows,
        maxChips: 10,
        links: [{ href: TRAINER_HREF, label: "Open multiple-matching trainer" }]
      });
    }
    return out;
  }

  function segmentsBooksShakespeareThreeBlocks() {
    var rp = W.U10_BOOKS_FILMS_REVIEW_PARAS || [];
    var booksRows = W.U10_BOOKS_FILMS_LEXIS_GAME_ROWS || [];
    var shPlain = W.U10_UOE_SHAKESPEARE_LEXIS_PLAIN || "";
    var shRows = W.U10_UOE_SHAKESPEARE_LEXIS_GAME_ROWS || [];
    if (rp.length < 4 || !shPlain) return [];

    var block12 = rp[0] + "\n\n" + rp[1];
    var block34 = rp[2] + "\n\n" + rp[3];

    return [
      {
        key: "p1",
        sumTitle: "Block 1 \u00b7 Exercise items 1\u20132 (reviews)",
        sumDesc: "1930s Liverpool tearjerker \u00b7 Harold and Maude cult oddity.",
        transcript: block12,
        stepNum: "Retell \u00b7 block 1 / 3",
        aimEn:
          "Contrast the two reviews: tone, credibility, emotional pull vs black-comedy niche; mention how reception can shift on re-release.",
        aimRu:
          "\u0414\u0432\u0430 \u043e\u0442\u0437\u044b\u0432\u0430 (\u043a\u0430\u043a \u0432 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0438): \u0442\u043e\u043d, \u0434\u043e\u0432\u0435\u0440\u0438\u0435 \u043a \u0441\u044e\u0436\u0435\u0442\u0443, \u0441\u043b\u0451\u0437\u044b vs \u0447\u0451\u0440\u043d\u0430\u044f \u043a\u043e\u043c\u0435\u0434\u0438\u044f; \u043f\u0435\u0440\u0435\u0438\u0437\u0434\u0430\u043d\u0438\u0435 \u0438 \u0432\u0442\u043e\u0440\u043e\u0439 \u0440\u0435\u043b\u0438\u0437.",
        chipRows: booksRows,
        maxChips: 12,
        links: [{ href: BOOKS_VOCAB_HREF, label: "Describing books & films (vocabulary)" }]
      },
      {
        key: "p2",
        sumTitle: "Block 2 \u00b7 Exercise items 3\u20134 (reviews)",
        sumDesc: "Mary Higgins Clark thriller follow-up \u00b7 Nolan star-studded blockbuster.",
        transcript: block34,
        stepNum: "Retell \u00b7 block 2 / 3",
        aimEn:
          "First retell the justice-system thriller angle (long-awaited sequel, spine-tingling twists, hard-hitting exploration); then the Nolan piece (ensemble cast, critically acclaimed performances, spellbinding lead portrayal).",
        aimRu:
          "\u0422\u0440\u0438\u043b\u043b\u0435\u0440 \u041c\u044d\u0440\u0438 \u0425\u0438\u0433\u0433\u0438\u043d\u0441 \u041a\u043b\u0430\u0440\u043a (\u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u0441\u0438\u043a\u0432\u0435\u043b\u0430, \u043e\u0441\u0442\u0440\u044b\u0435 \u043f\u043e\u0432\u043e\u0440\u043e\u0442\u044b, \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0441\u043f\u0440\u0430\u0432\u0435\u0434\u043b\u0438\u0432\u043e\u0441\u0442\u0438); \u0437\u0430\u0442\u0435\u043c \u0444\u0438\u043b\u044c\u043c \u041d\u043e\u043b\u0430\u043d\u0430 (\u0437\u0432\u0451\u0437\u0434\u043d\u044b\u0439 \u0441\u043e\u0441\u0442\u0430\u0432, \u043f\u0440\u0438\u0437\u043d\u0430\u043d\u043d\u044b\u0435 \u0440\u043e\u043b\u0438, \u0437\u0430\u0447\u0430\u0440\u043e\u0432\u044b\u0432\u0430\u044e\u0449\u0430\u044f \u0438\u0433\u0440\u0430 \u041c\u044d\u0440\u0444\u0438).",
        chipRows: booksRows,
        maxChips: 12,
        links: [{ href: BOOKS_VOCAB_HREF, label: "Books & films vocabulary" }]
      },
      {
        key: "sh",
        sumTitle: "Block 3 \u00b7 Shakespeare identity (UoE passage)",
        sumDesc: "Plain Word Bank text: doubt, touring life, proxy authorship gossip, vehement fans.",
        transcript: shPlain,
        stepNum: "Retell \u00b7 block 3 / 3",
        aimEn:
          "Separate chain step: argue how doubt about Shakespeare\u2019s identity functions here — scholar puzzle vs rumours vs fierce defence when gossip surfaces.",
        aimRu:
          "\u041e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0448\u0430\u0433 \u0446\u0435\u043f\u043e\u0447\u043a\u0438: \u0442\u0435\u043c\u0430 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0428\u0435\u043a\u0441\u043f\u0438\u0440\u0430 \u2014 \u0441\u043e\u043c\u043d\u0435\u043d\u0438\u044f \u0443\u0447\u0451\u043d\u044b\u0445, \u0441\u043b\u0443\u0445\u0438, \u0441\u043a\u0430\u043d\u0434\u0430\u043b\u044b, \u044f\u0440\u043e\u0441\u0442\u044c \u0444\u0430\u043d\u0430\u0442\u043e\u0432.",
        chipRows: shRows,
        maxChips: 14,
        links: [{ href: SHAKESPEARE_MC_HREF, label: "Part 1 MC cloze (Shakespeare pack)" }]
      }
    ];
  }

  W.U10_RETELL_CHAIN_SOURCES = [
    {
      id: "listening-p4",
      title: "Listening Part 4",
      tagline: "SB Track 10.1 · 5 monologues",
      icon: "\uD83C\uDFA7",
      explainerEn:
        "Exam-style recording: five separate speakers. Use the lower strip to isolate one monologue or rehearse the full 1 \u2192 5 chain.",
      explainerRu:
        "\u0410\u0443\u0434\u0438\u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f: \u043f\u044f\u0442\u044c \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432 \u043f\u043e \u043e\u0447\u0435\u0440\u0451\u0434\u0438.",
      sectionLead:
        "Tap a row for the script chunk from the audio track. Chips match Listening Part 4 lexical rows when they appear in that speaker\u2019s text.",
      accordionScriptsHeading: "Five monologues (script)",
      audio: { src: AUDIO_SRC, caption: "Class audio \u00b7 RF_C2_SB Track 10.1" },
      focusModes: [
        {
          value: "all",
          title: "Full chain",
          tagline: "Speakers 1 \u2192 5",
          icon: "\u2728"
        },
        {
          value: "1",
          title: "Speaker 1",
          tagline: "Audiobook clash",
          icon: "\uD83C\uDF99\uFE0F"
        },
        {
          value: "2",
          title: "Speaker 2",
          tagline: "Screenplay shelved",
          icon: "\uD83C\uDFAC"
        },
        {
          value: "3",
          title: "Speaker 3",
          tagline: "Subtitling",
          icon: "\uD83D\uDCFD\uFE0F"
        },
        {
          value: "4",
          title: "Speaker 4",
          tagline: "Adaptation disaster",
          icon: "\uD83D\uDCD5"
        },
        {
          value: "5",
          title: "Speaker 5",
          tagline: "Translation teams",
          icon: "\uD83C\uDF0D"
        }
      ],
      getSegments: segmentsListeningP4
    },
    {
      id: "reading-books-shakespeare",
      title: "Books & films + Shakespeare",
      tagline: "4 review texts \u00b7 3 retell blocks",
      icon: "\uD83D\uDCDA",
      explainerEn:
        "Reading bundle: exercise reviews 1\u20132 are block 1, reviews 3\u20134 are block 2 (Mary Higgins Clark + Nolan); the Unit 10 Shakespeare UoE passage is block 3 on its own (same plain text as Word Bank).",
      explainerRu:
        "\u0423\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435: \u0442\u0435\u043a\u0441\u0442\u044b 1\u20132 \u2014 \u043f\u0435\u0440\u0432\u044b\u0439 \u0431\u043b\u043e\u043a; 3\u20134 (\u041a\u043b\u0430\u0440\u043a + \u041d\u043e\u043b\u0430\u043d) \u2014 \u0432\u0442\u043e\u0440\u043e\u0439; \u043e\u0442\u0440\u044b\u0432\u043e\u043a \u043f\u0440\u043e \u0428\u0435\u043a\u0441\u043f\u0438\u0440\u0430 \u0438\u0437 UoE \u2014 \u0442\u0440\u0435\u0442\u0438\u0439 \u0431\u043b\u043e\u043a \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e.",
      sectionLead:
        "Three chained blocks: books/film vocab paragraphs (1+2, then 3+4), then Shakespeare. Chips match lexical rows that occur in each block.",
      accordionScriptsHeading:
        "Three blocks (reviews 1\u20132, reviews 3\u20134, Shakespeare)",
      audio: null,
      focusModes: [
        {
          value: "all",
          title: "Full chain",
          tagline: "Blocks 1 \u2192 3",
          icon: "\u2728"
        },
        {
          value: "p1",
          title: "Block 1",
          tagline: "Reviews 1\u20132",
          icon: "\uD83D\uDCD6"
        },
        {
          value: "p2",
          title: "Block 2",
          tagline: "Reviews 3\u20134",
          icon: "\uD83C\uDFAC"
        },
        {
          value: "sh",
          title: "Block 3",
          tagline: "Shakespeare (UoE)",
          icon: "\uD83C\uDFAD"
        }
      ],
      getSegments: segmentsBooksShakespeareThreeBlocks
    }
  ];
})(typeof window !== "undefined" ? window : globalThis);
