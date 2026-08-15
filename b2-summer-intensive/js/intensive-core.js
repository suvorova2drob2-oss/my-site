/**
 * B2 Speaking Intensive — core registry (no theme payloads).
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
    vocab: {
      title: "Vocabulary",
      hint: "Word pairs · gaps",
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

  var THEMES = global.B2_INTENSIVE_THEMES || [];
  if (!global.B2_INTENSIVE_THEMES) global.B2_INTENSIVE_THEMES = THEMES;

  function registerTheme(theme) {
    if (!theme || !theme.id) return;
    for (var i = 0; i < THEMES.length; i++) {
      if (THEMES[i].id === theme.id) {
        THEMES[i] = theme;
        return;
      }
    }
    THEMES.push(theme);
  }

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
        drill: b.drill || null,
        vocab: b.vocab || null,
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
        "Cool words stay on screen. Improvise — use as many tape phrases as you can.",
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
        var en =
          p && typeof p === "object"
            ? String(p.en || p.phrase || p.text || "")
            : String(p || "");
        var k = en.toLowerCase();
        if (!k || seen[k]) return;
        seen[k] = 1;
        list.push(p);
      });
    });
    return list;
  }

  global.B2_INTENSIVE_BLOCK_META = BLOCK_META;
  global.B2_INTENSIVE_THEMES = THEMES;
  global.B2_INTENSIVE_registerTheme = registerTheme;
  global.B2_INTENSIVE_getTheme = getTheme;
  global.B2_INTENSIVE_buildFlow = buildFlow;
  global.B2_INTENSIVE_allPhrases = allPhrases;
  global.B2_INTENSIVE_defaultBeats = defaultBeats;
  global.B2_INTENSIVE_STEPS = [];
})(typeof window !== "undefined" ? window : globalThis);
