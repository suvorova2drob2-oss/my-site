/**
 * Mastering B2 — per-unit / per-skill progress (best %).
 * Global: window.MasteringB2Progress
 *
 * Key: masteringB2SkillProgress
 * Row: "u5:grammar:obligation-mcq" -> { percent: 75, at: ISO }
 */
(function (W) {
  "use strict";

  var STORAGE_KEY = "masteringB2SkillProgress";
  /** One-time cleanup of browse/engagement fake percents (see purgePhantomScores). */
  var PURGE_FLAG = "masteringB2ProgressPurgeV3";
  /** Done / Passed only at 80–100% (never mark done for engagement-only scores). */
  var PASS_THRESHOLD = 80;

  var SKILL_LABELS = {
    reading: "Reading",
    listening: "Listening",
    grammar: "Grammar",
    vocabulary: "Vocabulary",
    uoe: "Use of English",
    speaking: "Speaking",
    writing: "Writing",
    pronunciation: "Pronunciation",
  };

  /** Skills required on each unit hub (from unitN.html cards). */
  var UNIT_SKILLS = {
    1: ["reading", "listening", "speaking", "vocabulary", "uoe", "writing", "grammar"],
    2: ["speaking", "reading", "vocabulary", "grammar", "uoe", "writing"],
    3: ["listening", "reading", "vocabulary", "uoe", "grammar", "speaking", "writing"],
      4: ["grammar", "vocabulary", "speaking", "reading", "listening", "uoe", "writing", "pronunciation"],
    5: ["reading", "listening", "grammar", "uoe", "vocabulary", "speaking", "writing", "pronunciation"],
    6: ["reading", "listening", "grammar", "vocabulary", "uoe", "speaking", "writing", "pronunciation"],
    7: ["reading", "listening", "speaking", "writing", "vocabulary", "grammar", "uoe", "pronunciation"],
    8: ["reading", "listening", "speaking", "writing", "vocabulary", "grammar", "uoe", "pronunciation"],
    9: ["reading", "listening", "speaking", "writing", "grammar", "vocabulary", "uoe", "pronunciation"],
    10: ["reading", "listening", "grammar", "uoe", "vocabulary", "speaking"],
    11: ["vocabulary", "reading", "listening", "grammar", "uoe"],
    12: ["listening", "reading", "vocabulary", "grammar", "uoe"],
  };

  /**
   * Leaf exerciseIds that must be done for a skill folder ✓ on unitN.html.
   * When you add a new activity, add its data-mb2-ex here — otherwise the skill
   * stays “done” from older completed items only.
   * Units/skills omitted → legacy fallback (average of whatever is already stored).
   */
  var UNIT_SKILL_EXERCISES = {
    1: {
      reading: ["this-is-your-life", "making-a-positive-change"],
      listening: ["sb-1-1", "sb-1-2", "wb-moving-country"],
      speaking: ["interview-part1", "long-turn-lifestyle", "get-used-to"],
      vocabulary: [
        "my-lifestyle",
        "clothes-choose",
        "clothes-opposites",
        "get",
        "get-phrases",
        "get-meeting-hero",
        "run-expressions",
      ],
      uoe: [
        "unit1-p1-young-entrepreneurs",
        "unit1-p1-cant-go-to-school",
        "unit1-p2-blue-zones",
        "unit1-p4-kwt",
      ],
      writing: ["informal-letter-p2", "article-nostalgia"],
      grammar: ["used-to-dialogues"],
    },
    2: {
      speaking: ["interview-part1"],
      reading: ["joys-of-capoeira"],
      vocabulary: ["sport-choose", "music-match", "music-word-box", "get-phrasal-verbs"],
      grammar: ["gerunds-ex1-choose", "gerunds-ex2-pedal-power"],
      uoe: ["unit2-uoe-another-world", "unit2-p2-sports-lovers", "unit2-p3-celebrated-pedestrian", "unit2-p4-kwt", "unit2-rfg-kwt", "unit2-rfg-prefer", "unit2-negative-prefixes-hearts", "affixes-coursebook", "affixes-prefixes", "affixes-blog"],
      writing: ["article-sport", "informal-email-p2"],
    },
    3: {
      grammar: [
        "u3-rfg-comp-ex1",
        "u3-rfg-comp-ex2",
        "comparisons-digital-detox",
        "u3-comp-errors-flip",
        "as-as-expressions",
        "u3-as-as-coursebook",
      ],
      uoe: [
        "u3-wf-nouns1-table",
        "u3-wf-nouns1-story",
        "u3-wf-ex1-hearts",
        "u3-wf-ex2-hearts",
        "u3-wf-suffix-table",
        "u3-p3-nouns-laptop",
        "u3-p3-greta-thunberg",
        "u3-p3-michael-hart",
        "u3-review-kwt",
      ],
      speaking: ["collaborative-century-changes", "part4-change"],
      writing: ["u3-writing-essay-education", "essay-part1"],
      reading: [
        "u3-reading-kwolek",
        "digital-detox-hub",
        "digital-detox-p5",
        "digital-detox-p5-alt",
      ],
      vocabulary: [
        "u3-vocab-technology",
        "lexical-games-digital-detox",
        "word-bank-digital-detox",
        "digital-detox-games",
      ],
      listening: [
        "u3-listening-wb-track-3",
        "track-3-1-robocup",
        "changes-at-school",
      ],
    },
    4: {
      grammar: ["u4-so-such", "u4-past-time-linkers", "u4-so-such-sb", "u4-past-tenses-sb"],
      vocabulary: ["u4-vocab-films", "u4-vocab-take", "u4-vocab-films-sb", "u4-vocab-take-sb"],
      reading: ["u4-reading-chollywood", "u4-reading-storytelling"],
      speaking: ["u4-speaking-interview", "u4-speaking-long-turn"],
      uoe: [
        "u4-p3-bedtime-story",
        "u4-wf-participle-adj",
        "u4-p4-kwt",
        "u4-wf-participle-sb",
        "u4-review-p4-kwt",
        "u4-review-p3-storytime",
        "u4-review-correcting",
      ],
      listening: ["u4-listening-wb-track-4", "u4-listening-sb-4-1"],
      writing: ["u4-writing-report", "u4-writing-report-mayor", "u4-writing-review-film", "u4-writing-review-letter"],
      pronunciation: ["u4-pron-silent"],
    },
    5: {
      reading: ["u5-reading-school-rules", "u5-wb-part-time-jobs"],
      listening: ["sb-5-1", "sb-5-2", "u5-wb-track-5"],
      grammar: ["obligation-mcq", "obligation-kwt", "obligation-mistakes", "obligation-wb"],
      vocabulary: ["career-collocations", "ending-a-job", "world-of-work", "world-of-work-wb"],
      speaking: ["u5-speaking-long-turn", "u5-speaking-collaborative", "u5-speaking-part4"],
      writing: ["u5-writing-application", "u5-writing-essay", "u5-writing-report", "u5-wb-formal-email"],
      pronunciation: ["u5-pron-intrusive"],
      uoe: ["unit5-p2-application-letter", "unit5-wb-managing-staff", "unit5-wb-en-prefix"],
    },
    6: {
      reading: ["petrosillo-sisters", "u6-wb-friends"],
      listening: ["sb-6-1", "sb-6-2", "u6-wb-track-6"],
      grammar: ["u6-relative-clauses", "u6-causative", "u6-grammar-wb"],
      vocabulary: [
        "personality-pairs",
        "u6-negative-prefixes",
        "appearance-collocation",
        "u6-phrasal-boxes",
        "u6-relationships-match",
        "u6-relationships-infinitives",
        "u6-phrasal-up-out",
        "u6-wb-relationships",
      ],
      speaking: ["u6-speaking-interview", "u6-speaking-collaborative", "u6-speaking-part4"],
      writing: ["u6-writing-article", "u6-writing-email-host", "u6-wb-writing-review"],
      pronunciation: ["u6-pron-linking"],
      uoe: [
        "unit6-p1-friendship-apps",
        "neighbours-relative-gaps",
        "unit6-p3-hove",
        "unit6-p4-kwt",
        "unit6-wb-p2-travel-alone",
        "unit6-wb-p4-kwt",
      ],
    },
    7: {
      reading: ["black-friday", "buy-nothing-day"],
      listening: [
        "sb-7-1",
        "sb-7-2",
        "wb-track-7",
        "rfl-0-1",
        "rfl-0-2",
        "rfl-0-3",
        "rfl-0-4",
      ],
      speaking: ["u7-speaking-interview", "u7-speaking-long-turn"],
      writing: ["u7-writing-formal-informal-email", "u7-writing-essay-buying-local"],
      vocabulary: [
        "u7-vocab-workbook",
        "u7-shopping-word-box",
        "u7-shopping-paragraph-gaps",
        "u7-real-bargain",
        "u7-towns-word-box",
        "u7-towns-adjective-pairs",
      ],
      grammar: [
        "u7-grammar-workbook",
        "u7-pp-simple-uses-flip",
        "u7-pp-continuous-flip",
        "u7-pp-car-gaps",
      ],
      uoe: [
        "unit7-p1-buy-me-once",
        "unit7-p2-gigamansions",
        "unit7-p3-what-a-waste",
        "unit7-p4-kwt",
      ],
      pronunciation: ["u7-pron-contrastive"],
    },
    8: {
      reading: ["u8-reading-trip", "u8-reading-living-abroad"],
      listening: ["sb-8-1", "sb-8-2", "wb-track-8"],
      speaking: ["u8-speaking-interview", "u8-speaking-long-turn", "u8-speaking-useful-lang"],
      writing: ["u8-writing-essay", "u8-writing-article", "u8-wb-informal-email"],
      vocabulary: [
        "u8-vocab-workbook",
        "u8-make-do",
        "u8-holiday-types",
        "u8-travel-holidays",
        "u8-phrasal-verbs-1",
      ],
      grammar: [
        "u8-grammar-workbook",
        "u8-future-gap-fill",
        "u8-future-predictions",
        "u8-contrast-linkers",
        "u8-trains-cars",
      ],
      uoe: [
        "unit8-uoe-seville",
        "unit8-p3-monorails",
        "unit8-p3-out-of-season",
        "unit8-wf-adjectives",
        "unit8-p4-set-a",
        "unit8-p4-set-b",
      ],
      pronunciation: ["u8-pron-chunking"],
    },
    9: {
      reading: ["u9-reading-valuable", "u9-reading-mystery-donors"],
      listening: ["u9-listen-ghost-walk", "u9-listen-superstition", "u9-listen-conan-doyle"],
      speaking: ["u9-speaking-collaborative", "u9-speaking-part4"],
      writing: ["u9-writing-review", "u9-wb-article"],
      vocabulary: ["u9-give-workbook", "u9-give-collocations", "u9-prepositions"],
      grammar: [
        "u9-modal-speculation-flip",
        "u9-modals-reported-wb",
        "u9-reported-speech-wb",
        "u9-reporting-verbs",
      ],
      uoe: [
        "unit9-uoe-solving-mystery",
        "unit9-p2-sporting-superstitions",
        "unit9-p2-loch-ness",
        "unit9-p4-kwt",
        "unit9-wf-adverbs-wb",
        "unit9-wf-bigfoot",
        "unit9-wf-adverbs-hearts",
      ],
      pronunciation: ["u9-pron-intonation"],
    },
    10: {
      speaking: ["long-turn-told-off", "punishment-speak"],
    },
  };

  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function nowIso() {
    var d = new Date();
    return (
      d.getFullYear() +
      "-" +
      pad(d.getMonth() + 1) +
      "-" +
      pad(d.getDate()) +
      "T" +
      pad(d.getHours()) +
      ":" +
      pad(d.getMinutes()) +
      ":" +
      pad(d.getSeconds())
    );
  }

  function clampPercent(n) {
    var p = Math.round(Number(n) || 0);
    if (p < 0) p = 0;
    if (p > 100) p = 100;
    return p;
  }

  function normUnit(u) {
    var n = parseInt(String(u).replace(/^u/i, ""), 10);
    return Number.isFinite(n) && n >= 1 && n <= 12 ? n : 0;
  }

  function normSkill(s) {
    s = String(s || "")
      .toLowerCase()
      .trim();
    if (s === "use-of-english" || s === "use_of_english" || s === "uoenglish") s = "uoe";
    if (s === "vocab") s = "vocabulary";
    return SKILL_LABELS[s] ? s : "";
  }

  function makeKey(unit, skill, exerciseId) {
    return "u" + unit + ":" + skill + ":" + String(exerciseId || "ex");
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var obj = raw ? JSON.parse(raw) : {};
      return obj && typeof obj === "object" ? obj : {};
    } catch (e) {
      return {};
    }
  }

  function save(obj) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
    } catch (e) {}
  }

  /**
   * Remove percents that were never real submissions:
   * - engagement fallback 35%
   * - speaking/discussion browse progress (&lt; 100%)
   */
  function purgePhantomScores() {
    try {
      if (localStorage.getItem(PURGE_FLAG) === "1") return;
    } catch (e0) {}
    var store = load();
    var changed = false;
    Object.keys(store).forEach(function (k) {
      var row = store[k];
      if (!row || typeof row.percent !== "number") return;
      var pct = clampPercent(row.percent);
      var ex = k.split(":")[2] || "";
      var speakLike = /(?:^|-)(discussion|speak|interview)(?:-|$)/i.test(ex);
      if (pct === 35) {
        delete store[k];
        changed = true;
        return;
      }
      if (speakLike && pct < 100) {
        delete store[k];
        changed = true;
      }
    });
    if (changed) save(store);
    try {
      localStorage.setItem(PURGE_FLAG, "1");
    } catch (e1) {}
  }

  try {
    purgePhantomScores();
  } catch (ePurge) {}

  /**
   * Record best percent for an exercise.
   * @returns {{ updated: boolean, percent: number, key: string }}
   */
  function record(opts) {
    opts = opts || {};
    var unit = normUnit(opts.unit);
    var skill = normSkill(opts.skill);
    var exerciseId = String(opts.exerciseId || opts.ex || "ex")
      .replace(/[^\w\-]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 64);
    var percent = clampPercent(opts.percent);
    if (!unit || !skill || !exerciseId) {
      return { updated: false, percent: percent, key: "" };
    }
    var key = makeKey(unit, skill, exerciseId);
    var store = load();
    var prev = store[key];
    var prevPct = prev && typeof prev.percent === "number" ? prev.percent : -1;
    if (percent <= prevPct) {
      return { updated: false, percent: prevPct, key: key };
    }
    store[key] = { percent: percent, at: nowIso() };
    save(store);
    return { updated: true, percent: percent, key: key };
  }

  function recordCheck(correct, total, meta) {
    meta = meta || {};
    var t = Math.max(0, Math.floor(Number(total) || 0));
    var c = Math.max(0, Math.floor(Number(correct) || 0));
    if (t <= 0) return { updated: false, percent: 0, key: "" };
    return record({
      unit: meta.unit,
      skill: meta.skill,
      exerciseId: meta.exerciseId || meta.ex,
      percent: (c / t) * 100,
    });
  }

  /** Read meta from [data-mb2-unit][data-mb2-skill][data-mb2-ex] on main/body. */
  function metaFromDom(root) {
    var el =
      (root && root.querySelector && root.querySelector("[data-mb2-unit][data-mb2-skill]")) ||
      document.querySelector("main[data-mb2-unit][data-mb2-skill]") ||
      document.querySelector("[data-mb2-unit][data-mb2-skill]") ||
      document.body;
    if (!el || !el.getAttribute) return null;
    var unit = el.getAttribute("data-mb2-unit");
    var skill = el.getAttribute("data-mb2-skill");
    var ex = el.getAttribute("data-mb2-ex") || el.getAttribute("data-mb2-exercise");
    if (!unit || !skill) return null;
    return { unit: unit, skill: skill, exerciseId: ex || "ex" };
  }

  function recordCheckFromDom(correct, total, root) {
    var meta = metaFromDom(root);
    if (!meta) return { updated: false, percent: 0, key: "" };
    return recordCheck(correct, total, meta);
  }

  function exercisesFor(unit, skill) {
    var u = normUnit(unit);
    var s = normSkill(skill);
    var store = load();
    var prefix = "u" + u + ":" + s + ":";
    var out = [];
    Object.keys(store).forEach(function (k) {
      if (k.indexOf(prefix) !== 0) return;
      out.push({
        key: k,
        exerciseId: k.slice(prefix.length),
        percent: clampPercent(store[k].percent),
        at: store[k].at || "",
      });
    });
    return out;
  }

  function requiredExercises(unit, skill) {
    var u = normUnit(unit);
    var s = normSkill(skill);
    var byUnit = UNIT_SKILL_EXERCISES[u];
    if (!byUnit || !s || !byUnit[s] || !byUnit[s].length) return null;
    return byUnit[s].slice();
  }

  function skillAverage(unit, skill) {
    var required = requiredExercises(unit, skill);
    if (required && required.length) {
      var sum = 0;
      var any = false;
      for (var i = 0; i < required.length; i++) {
        var p = getExercisePercent(unit, skill, required[i]);
        if (p != null) any = true;
        sum += p == null ? 0 : p;
      }
      if (!any) return null;
      return Math.round(sum / required.length);
    }
    var rows = exercisesFor(unit, skill);
    if (!rows.length) return null;
    var sum2 = 0;
    rows.forEach(function (r) {
      sum2 += r.percent;
    });
    return Math.round(sum2 / rows.length);
  }

  /**
   * Skill folder ✓ only when every required exercise is ≥ PASS_THRESHOLD.
   * Missing catalog items count as not done (so new activities clear the badge).
   */
  function skillAllGood(unit, skill) {
    var required = requiredExercises(unit, skill);
    if (required && required.length) {
      for (var i = 0; i < required.length; i++) {
        if (!isGoodPercent(getExercisePercent(unit, skill, required[i]))) return false;
      }
      return true;
    }
    var rows = exercisesFor(unit, skill);
    if (!rows.length) return false;
    for (var j = 0; j < rows.length; j++) {
      if (!isGoodPercent(rows[j].percent)) return false;
    }
    return true;
  }

  function unitSkills(unit) {
    var u = normUnit(unit);
    return (UNIT_SKILLS[u] || []).slice();
  }

  function getUnitSummary(unit) {
    var u = normUnit(unit);
    var skills = unitSkills(u);
    var skillRows = skills.map(function (sk) {
      var avg = skillAverage(u, sk);
      return {
        skill: sk,
        label: SKILL_LABELS[sk] || sk,
        percent: avg,
        started: avg != null,
        passed: skillAllGood(u, sk),
      };
    });
    var startedSkills = skillRows.filter(function (r) {
      return r.started;
    });
    var unitPercent = null;
    if (skills.length && startedSkills.length) {
      // Average across required skills: missing skill counts as 0 once any progress exists
      var sum = 0;
      skillRows.forEach(function (r) {
        sum += r.percent == null ? 0 : r.percent;
      });
      unitPercent = Math.round(sum / skills.length);
    } else if (!skills.length) {
      unitPercent = null;
    }
    var passed =
      skills.length > 0 &&
      skillRows.every(function (r) {
        return skillAllGood(u, r.skill);
      });
    var status = "not_started";
    if (passed) status = "passed";
    else if (startedSkills.length) status = "in_progress";
    return {
      unit: u,
      skills: skillRows,
      percent: unitPercent,
      status: status,
      passed: passed,
      threshold: PASS_THRESHOLD,
    };
  }

  function getAllUnits() {
    var list = [];
    for (var i = 1; i <= 12; i++) list.push(getUnitSummary(i));
    return list;
  }

  function isUnitPassed(unit) {
    return getUnitSummary(unit).passed;
  }

  function getSkillSummary(skill) {
    var s = normSkill(skill);
    var perUnit = [];
    var sum = 0;
    var n = 0;
    for (var u = 1; u <= 12; u++) {
      var required = unitSkills(u);
      if (required.indexOf(s) === -1) continue;
      var avg = skillAverage(u, s);
      perUnit.push({ unit: u, percent: avg, started: avg != null });
      if (avg != null) {
        sum += avg;
        n++;
      }
    }
    return {
      skill: s,
      label: SKILL_LABELS[s] || s,
      percent: n ? Math.round(sum / n) : null,
      units: perUnit,
      started: n > 0,
    };
  }

  function getAllSkills() {
    return ["reading", "listening", "grammar", "vocabulary", "uoe", "speaking"].map(getSkillSummary);
  }

  function clearAll() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  function statusLabel(status) {
    if (status === "passed") return "Passed";
    if (status === "in_progress") return "In progress";
    return "Not started";
  }

  function getExercisePercent(unit, skill, exerciseId) {
    var u = normUnit(unit);
    var s = normSkill(skill);
    var ex = String(exerciseId || "")
      .replace(/[^\w\-]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 64);
    if (!u || !s || !ex) return null;
    var row = load()[makeKey(u, s, ex)];
    if (row && typeof row.percent === "number") return clampPercent(row.percent);
    // Exact id only — never let "get" steal percent from "get-speak"
    return null;
  }

  function isGoodPercent(percent) {
    return percent != null && percent >= PASS_THRESHOLD && percent <= 100;
  }

  /** True for unitN-vocabulary / speaking / … folder hubs — not leaf exercises. */
  function isSkillFolderExerciseId(exerciseId) {
    var ex = String(exerciseId || "").toLowerCase();
    if (!ex) return true;
    if (/^unit\d+-(speaking|vocabulary|reading|listening|grammar|uoe)$/i.test(ex)) return true;
    if (
      ex === "speaking" ||
      ex === "vocabulary" ||
      ex === "reading" ||
      ex === "listening" ||
      ex === "grammar" ||
      ex === "uoe"
    )
      return true;
    return false;
  }

  /** Infer unit / skill / exerciseId from a URL path (FCE folders). */
  function inferMetaFromPath(path) {
    path = String(path || "")
      .replace(/\\/g, "/")
      .split("?")[0]
      .split("#")[0];
    try {
      path = decodeURIComponent(path);
    } catch (e) {}

    var unit = 0;
    var um = path.match(/(?:^|\/)unit(\d+)\b/i) || path.match(/unit(\d+)/i);
    if (um) unit = parseInt(um[1], 10);

    var skill = "";
    if (/\/speaking\b|speaking-|part\s*1\s*interview|interview/i.test(path) && /speak/i.test(path))
      skill = "speaking";
    else if (/use-of-english|\buoe\b|cloze|word-formation|key-word-transformation|neighbours-relative/i.test(path))
      skill = "uoe";
    else if (/listening|audio\s*practice|shadowing|sb-\d|rfl-/i.test(path)) skill = "listening";
    else if (/reading|part\s*5|part\s*6|part\s*7|multiple-matching|gapped-text/i.test(path))
      skill = "reading";
    else if (
      /grammar|obligation|conditional|quantifier|relative-clause|infinitive|passive|participle|comparison|present-perfect/i.test(
        path
      )
    )
      skill = "grammar";
    else if (/vocab|vocabulary|phrasal|collocation|idiom|lifestyle|personality|appearance|similes/i.test(path))
      skill = "vocabulary";
    else if (/speaking/i.test(path)) skill = "speaking";

    var parts = path
      .replace(/\/index\.html$/i, "")
      .replace(/\.html$/i, "")
      .split("/")
      .filter(Boolean);
    var leaf = parts.length ? parts[parts.length - 1] : "ex";
    if (/^unit\d+/i.test(leaf) && parts.length >= 2) leaf = parts[parts.length - 1];
    var exerciseId = String(leaf)
      .toLowerCase()
      .replace(/[^\w\-]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 64);

    var hubKind = "";
    if (
      /unit\d+-(speaking|vocabulary|reading|listening|grammar)\/?$/i.test(
        path.replace(/\/index\.html$/i, "")
      ) ||
      /Grammar\/unit\d+[^/]*\/?$/i.test(path.replace(/\/index\.html$/i, "")) ||
      /use-of-english\/unit\d+\/?$/i.test(path.replace(/\/index\.html$/i, ""))
    ) {
      hubKind = "skill";
    }

    return {
      unit: unit,
      skill: skill,
      exerciseId: exerciseId || "ex",
      hubKind: hubKind,
    };
  }

  function resolveCardStatus(opts) {
    opts = opts || {};
    var unit = normUnit(opts.unit);
    var skill = normSkill(opts.skill);
    if (!unit) return { status: "not_started", percent: null, good: false };
    var exId = String(opts.exerciseId || "")
      .replace(/[^\w\-]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 64);
    // Skill folder tiles (unit1-vocabulary/, …): average across that skill.
    // Leaf exercise cards must NOT use hub="skill" — if they do, prefer exercise %.
    if (opts.hubKind === "skill" && skill && isSkillFolderExerciseId(exId)) {
      var avg = skillAverage(unit, skill);
      var allGood = skillAllGood(unit, skill);
      return {
        status: avg == null ? "not_started" : allGood ? "passed" : "in_progress",
        percent: avg,
        good: allGood,
      };
    }
    if (skill && exId && !isSkillFolderExerciseId(exId)) {
      var pct = getExercisePercent(unit, skill, exId);
      return {
        status: pct == null ? "not_started" : isGoodPercent(pct) ? "passed" : "in_progress",
        percent: pct,
        good: isGoodPercent(pct),
      };
    }
    if (opts.hubKind === "skill" && skill) {
      var avg2 = skillAverage(unit, skill);
      var allGood2 = skillAllGood(unit, skill);
      return {
        status: avg2 == null ? "not_started" : allGood2 ? "passed" : "in_progress",
        percent: avg2,
        good: allGood2,
      };
    }
    var summary = getUnitSummary(unit);
    return {
      status: summary.status,
      percent: summary.percent,
      good: summary.passed,
    };
  }

  function bumpScore(points) {
    var pts = Math.max(0, Math.floor(Number(points) || 0));
    if (!pts) return;
    try {
      var raw = localStorage.getItem("masteringB2Score");
      var score = Math.max(0, Math.floor(Number(raw) || 0));
      localStorage.setItem("masteringB2Score", String(score + pts));
    } catch (e) {}
    if (W.MasteringB2Daily && typeof W.MasteringB2Daily.addPoints === "function") {
      W.MasteringB2Daily.addPoints(pts);
    }
  }

  /**
   * Record and, on first improvement to a “good” score, nudge the hub progress bar.
   */
  function recordAndReward(opts, rewardPts) {
    var res = record(opts);
    if (res && res.updated && isGoodPercent(res.percent)) {
      bumpScore(rewardPts == null ? 5 : rewardPts);
    }
    return res;
  }

  W.MasteringB2Progress = {
    STORAGE_KEY: STORAGE_KEY,
    PASS_THRESHOLD: PASS_THRESHOLD,
    SKILL_LABELS: SKILL_LABELS,
    UNIT_SKILLS: UNIT_SKILLS,
    UNIT_SKILL_EXERCISES: UNIT_SKILL_EXERCISES,
    requiredExercises: requiredExercises,
    record: record,
    recordCheck: recordCheck,
    recordCheckFromDom: recordCheckFromDom,
    recordAndReward: recordAndReward,
    metaFromDom: metaFromDom,
    inferMetaFromPath: inferMetaFromPath,
    resolveCardStatus: resolveCardStatus,
    getExercisePercent: getExercisePercent,
    isGoodPercent: isGoodPercent,
    getUnitSummary: getUnitSummary,
    getAllUnits: getAllUnits,
    isUnitPassed: isUnitPassed,
    getSkillSummary: getSkillSummary,
    getAllSkills: getAllSkills,
    unitSkills: unitSkills,
    skillAverage: skillAverage,
    skillAllGood: skillAllGood,
    exercisesFor: exercisesFor,
    bumpScore: bumpScore,
    clearAll: clearAll,
    purgePhantomScores: purgePhantomScores,
    statusLabel: statusLabel,
  };
})(window);
