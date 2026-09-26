/**
 * Inside Out Workshop — one workbook screen per lesson + improv + HW.
 */
(function (global) {
  var BLOCK_META = {
    watch: {
      title: "Workbook",
      hint: "Cool phrases · like the workbook",
    },
    phrases: {
      title: "Notice these lines",
      hint: "Also on the cool-words tape →",
    },
    context: {
      title: "Meaning & lexis",
      hint: "Patterns · collocations",
    },
    shadow: {
      title: "Shadow (optional)",
      hint: "Echo a line in class",
    },
    speak: {
      title: "Talk about it",
      hint: "Discussion · use the tape",
    },
  };

  var SESSIONS = global.INSIDEOUT_LESSONS || [];
  var CLUB = global.INSIDEOUT_CLUB || { beats: {}, stickers: {} };
  var TEEN = global.INSIDEOUT_TEEN || { bits: {}, stickers: {} };
  var EXAM_DATA = global.INSIDEOUT_EXAM_DATA || {};

  SESSIONS.forEach(function (s) {
    (s.beats || []).forEach(function (b) {
      var c = CLUB.beats[b.id];
      if (!c) return;
      if (c.context) b.context = c.context;
      if (c.lexRound) b.lexRound = c.lexRound;
      if (c.exampleRound) b.exampleRound = c.exampleRound;
      if (c.speak) b.speak = c.speak;
      var blocks = (b.blocks || ["watch", "speak"]).slice();
      if (c.context && blocks.indexOf("context") === -1) {
        blocks.splice(blocks.indexOf("watch") + 1, 0, "context");
      }
      b.blocks = blocks;
    });
    var st = CLUB.stickers[s.id];
    if (st && st.length) {
      s.finale = s.finale || {};
      s.finale.stickers = st;
    }
  });

  /* One PDF section = one bit; 3–4 bits per lesson. */
  var LESSON_GROUPS = [
    {
      id: "s01e01",
      num: 1,
      title: "Lesson 1 · Emotions in Action",
      icon: "🚗",
      tagline: "Basics · Moving to San Francisco · New house · Pizza",
      synopsis: "Emotions in Action · workbook + speaking.",
      from: ["s01e01", "s01e02", "s01e03", "s01e04"],
      finale:
        "Road trip to a new home: the five emotions react to the car, the empty house and the broccoli pizza. Use at least 6 tape lines.",
      homework: "Shadow 2 lines from each bit · 3 takes.",
    },
    {
      id: "s01e02",
      num: 2,
      title: "Lesson 2 · Emotions at Play",
      icon: "🎭",
      tagline: "Sadness vs Joy · Chorus of emotions · Let us handle this",
      synopsis: "Emotions at Play · part 1.",
      from: ["s01e05", "s01e06", "s01e07"],
      finale:
        "A bad first week in a new city: Sadness spirals, Joy tries to fix it, the chorus complains, each emotion pitches its plan. Use at least 6 tape lines.",
      homework: "Shadow one Sadness, one Joy and one «plan» line · 3 takes.",
    },
    {
      id: "s01e03",
      num: 3,
      title: "Lesson 3 · School & Family",
      icon: "⚡",
      tagline: "First day at school · Parental concern · Family tension",
      synopsis: "Emotions at Play · part 2.",
      from: ["s01e08", "s01e09", "s01e10"],
      finale:
        "Replay the family dinner calmer: first day at school → parents probe subtly → no disaster this time. Use at least 6 tape lines.",
      homework: "Shadow Dad + Mom + Riley lines · finish Season 1.",
    },
  ];

  function firstOf(list, test) {
    for (var i = 0; i < list.length; i++) if (test(list[i])) return list[i];
    return null;
  }

  function mergeBit(old) {
    var subs = old.beats || [];
    var first = subs[0] || {};
    var fw = first.watch || {};
    var cards = [];
    var phrases = [];
    var meanings = [];
    var examples = [];
    var drills = [];
    var items = [];
    var starters = [];
    var personal = [];
    var lexisQ = null;
    var episodeQ = null;
    subs.forEach(function (b) {
      ((b.watch && b.watch.workbookCards) || []).forEach(function (c) {
        cards.push(Object.assign({}, c));
      });
      (b.phrases || []).forEach(function (p) {
        phrases.push(p);
      });
      var ctx = b.context || {};
      (ctx.meanings || []).forEach(function (m) {
        meanings.push(m);
      });
      (ctx.examples || []).slice(0, 2).forEach(function (e) {
        examples.push(e);
      });
      var ds = (b.lexRound && b.lexRound.drills) || [];
      var pattern = firstOf(ds, function (d) {
        return !/^(GAME|DRILL)\b/.test(d.label || "");
      });
      var game = firstOf(ds, function (d) {
        return /^GAME\b/.test(d.label || "");
      });
      if (pattern) drills.push(pattern);
      if (game) drills.push(game);
      ((b.exampleRound && b.exampleRound.items) || []).forEach(function (it) {
        items.push(it);
      });
      var sp = b.speak || {};
      if (sp.starters && sp.starters[0]) starters.push(sp.starters[0]);
      (sp.questions || []).forEach(function (q) {
        if (q.kind === "personal") personal.push(q);
        else if (q.kind === "lexis" && !lexisQ) lexisQ = q;
        else if (q.kind === "episode") episodeQ = q;
      });
    });

    var layout = fw.workbookLayout || "single";
    if (old.id === "s01e01") {
      layout = "basics";
      cards.forEach(function (c, i) {
        c.wide = i >= 3;
      });
    } else if (layout === "single" && cards.length > 2) {
      layout = "emotion-grid";
    }

    var questions = [];
    if (lexisQ) questions.push(lexisQ);
    personal.forEach(function (q) {
      questions.push(q);
    });
    if (episodeQ) questions.push(episodeQ);

    var teen = TEEN.bits[old.id];
    if (teen) {
      if (teen.examples) examples = teen.examples.slice();
      if (teen.drills) drills = teen.drills.slice();
      if (teen.items) items = teen.items.slice();
      if (teen.starters) starters = teen.starters.slice();
      if (teen.questions) questions = teen.questions.slice();
    }

    var name = String(old.title || "").replace(/^Lesson\s+\d+\s*·\s*/, "");
    var hasClub = meanings.length || drills.length || questions.length;

    return {
      id: "bit-" + old.id,
      label: name,
      teacher: "Workbook → meaning & lexis → lexis round → example talk → deep discussion.",
      blocks: hasClub ? ["watch", "context", "speak"] : ["watch", "speak"],
      phrases: phrases,
      watch: {
        workbookTitle: fw.workbookTitle || name,
        workbookLayout: layout,
        workbookSideImg: fw.workbookSideImg || null,
        workbookCards: cards,
      },
      context: meanings.length
        ? {
            tone: subs
              .map(function (b) {
                return b.label;
              })
              .join(" · "),
            meanings: meanings,
            examples: examples,
          }
        : null,
      lexRound: drills.length
        ? {
            title: "Lexis round · drill & games",
            mission: "Fast turns · say it out loud · then play the game.",
            drills: drills,
          }
        : null,
      exampleRound: items.length
        ? {
            title: "Example talk",
            mission: "Models first · then your own real micro-story with the phrase.",
            items: items,
          }
        : null,
      speak: {
        mission: "Deep talk · 60–90 s per answer · steal tape phrases when they fit.",
        starters: starters.slice(0, 5),
        questions: questions,
      },
      examRound: EXAM_DATA[old.id]
        ? { title: name, phrases: phrases.slice(), data: EXAM_DATA[old.id] }
        : null,
      time: "25–35 min",
    };
  }

  function buildGrouped(source) {
    var byId = {};
    source.forEach(function (s) {
      byId[s.id] = s;
    });
    return LESSON_GROUPS.map(function (g) {
      var olds = g.from
        .map(function (id) {
          return byId[id];
        })
        .filter(Boolean);
      var stickers = [];
      var seen = {};
      olds.forEach(function (o) {
        (TEEN.stickers[o.id] || (o.finale && o.finale.stickers) || []).forEach(function (st) {
          var k = String(st.phrase || "").toLowerCase();
          if (!k || seen[k]) return;
          seen[k] = 1;
          stickers.push(st);
        });
      });
      return {
        id: g.id,
        season: 1,
        num: g.num,
        title: g.title,
        icon: g.icon,
        tagline: g.tagline,
        synopsis: g.synopsis,
        beats: olds.map(mergeBit),
        finale: { prompt: g.finale, stickers: stickers },
        homework: { note: g.homework },
      };
    });
  }

  SESSIONS = buildGrouped(SESSIONS);

  var SESSION_ID_ALIASES = {
    s01e04: "s01e01",
    s01e05: "s01e02",
    s01e06: "s01e02",
    s01e07: "s01e02",
    s01e08: "s01e03",
    s01e09: "s01e03",
    s01e10: "s01e03",
    s02e01: "s01e02",
    s02e02: "s01e02",
    s02e03: "s01e02",
    s02e04: "s01e03",
    s02e05: "s01e03",
    s02e06: "s01e03",
  };

  function getSession(id) {
    var key = SESSION_ID_ALIASES[id] || id;
    for (var i = 0; i < SESSIONS.length; i++) {
      if (SESSIONS[i].id === key) return SESSIONS[i];
    }
    return null;
  }

  function getSessionsBySeason(season) {
    if (Number(season) === 2) return [];
    return SESSIONS.filter(function (s) {
      return (s.season || 1) === 1;
    });
  }

  function mergeWatch(b) {
    return Object.assign({}, (b && b.watch) || {});
  }

  function buildFlow(session) {
    var beats = (session && session.beats) || [];
    var screens = beats.map(function (b, i) {
      return {
        kind: "beat",
        id: b.id || "lesson",
        label: b.label || "Lesson",
        short: String(i + 1),
        teacher: b.teacher || "",
        blocks: b.blocks || ["watch", "speak"],
        phrases: b.phrases || [],
        phraseClips: b.phraseClips || [],
        watch: mergeWatch(b),
        context: b.context || null,
        speak: b.speak || null,
        lexRound: b.lexRound || null,
        exampleRound: b.exampleRound || null,
        examRound: b.examRound || null,
        optional: !!b.optional,
        time: b.time || "25–35 min",
      };
    });
    screens.push({
      kind: "finale",
      id: "finale",
      label: "Improv",
      short: "★",
      teacher: "All cool words on screen · improv with the tape.",
      prompt:
        (session && session.finale && session.finale.prompt) ||
        "Improvise with the workbook phrases.",
      time: "10–15 min",
    });
    screens.push({
      kind: "homework",
      id: "homework",
      label: "Homework",
      short: "HW",
      teacher: "Shadowing at home.",
      note:
        (session && session.homework && session.homework.note) ||
        "Shadow 3–5 lines × 3 takes.",
      clips: [],
      time: "20–30 min",
    });
    return screens;
  }

  global.INSIDEOUT_BLOCK_META = BLOCK_META;
  global.INSIDEOUT_WORKSHOP_SESSIONS = SESSIONS;
  global.INSIDEOUT_WORKSHOP_getSession = getSession;
  global.INSIDEOUT_WORKSHOP_getSessionsBySeason = getSessionsBySeason;
  global.INSIDEOUT_WORKSHOP_buildFlow = buildFlow;
  global.INSIDEOUT_PART2_READY = false;
})(typeof window !== "undefined" ? window : globalThis);
