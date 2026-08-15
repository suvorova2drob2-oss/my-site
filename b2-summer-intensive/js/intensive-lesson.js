/**
 * B2 Speaking Intensive — beat rail + sticky cool-words tape + paper text.
 */
(function () {
  var params = new URLSearchParams(window.location.search);
  var themeId = params.get("theme") || params.get("unit") || "";
  var beatParam = params.get("beat") || params.get("step") || "";
  var fromParam = params.get("from") || "";
  var theme =
    typeof B2_INTENSIVE_getTheme === "function"
      ? B2_INTENSIVE_getTheme(themeId)
      : null;

  /** Relative return path only (FCE exam page that opened this lesson). */
  function sanitizeLessonFrom(href) {
    if (!href) return "";
    try {
      href = decodeURIComponent(String(href));
    } catch (_e) {}
    href = String(href).trim();
    if (!href) return "";
    if (/^(https?:|javascript:|data:)/i.test(href)) return "";
    if (href.indexOf("//") === 0) return "";
    if (
      !/^(\.\.\/)+[A-Za-z0-9_./-]+\.html([?#][\s\S]*)?$/.test(href) &&
      !/^[A-Za-z0-9_./-]+\.html([?#][\s\S]*)?$/.test(href)
    ) {
      return "";
    }
    return href;
  }

  var elRoot = document.getElementById("lesson-root");
  var elStepper = document.getElementById("lesson-stepper");
  var elStage = document.getElementById("lesson-stage");
  var elPrev = document.getElementById("btn-prev");
  var elNext = document.getElementById("btn-next");
  var elProgress = document.getElementById("lesson-progress");

  if (!theme || !elRoot || typeof B2_INTENSIVE_buildFlow !== "function") {
    if (elRoot) {
      var earlyFce =
        params.get("src") === "fce" ||
        params.get("course") === "fce" ||
        !!fromParam ||
        (window.WorkshopGate &&
          typeof WorkshopGate.isFceEntry === "function" &&
          WorkshopGate.isFceEntry());
      var earlyBack = sanitizeLessonFrom(fromParam) || "../fce.html";
      var earlyHref = earlyFce ? earlyBack : "index.html";
      var earlyLabel = earlyFce ? "Back to FCE" : "Back to hub";
      elRoot.innerHTML =
        '<div class="int-error"><p>Theme not found. <a class="int-back" href="' +
        earlyHref +
        '">' +
        earlyLabel +
        "</a></p></div>";
    }
    return;
  }

  var flow = B2_INTENSIVE_buildFlow(theme);
  var blockMeta = window.B2_INTENSIVE_BLOCK_META || {};
  var stepIndex = 0;
  var maxVisited = 0;
  if (beatParam) {
    for (var _bi = 0; _bi < flow.length; _bi++) {
      if (flow[_bi] && flow[_bi].id === beatParam) {
        stepIndex = _bi;
        maxVisited = _bi;
        break;
      }
    }
  }
  var calledPhrases = {};
  var phraseBatchIndex = 0;
  var CARD_BATCH = 10;
  /** Partner-drill progress per beat id */
  var drillByBeat = {};
  /** Pre-recorded partner prompt A (neural TTS), not browser speechSynthesis */
  var drillPromptPlayer = null;
  var drillPromptPlayedKey = "";

  function getDrillAudioBaseHref() {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var src = scripts[i].src || "";
      var m = src.match(
        /^(.*\/)js\/(?:ielts-speak-themes|intensive-themes|pre-int-units)\.js(?:\?|#|$)/i
      );
      if (m) return m[1];
    }
    try {
      return new URL("./", window.location.href).href;
    } catch (_e) {
      return "";
    }
  }

  function absolutizeDrillAudio(rel) {
    if (!rel) return "";
    if (/^(https?:|blob:|data:)/i.test(rel)) return rel;
    try {
      return new URL(rel, getDrillAudioBaseHref() || window.location.href).href;
    } catch (_e2) {
      return rel;
    }
  }

  function stopDrillPromptAudio() {
    if (!drillPromptPlayer) return;
    try {
      drillPromptPlayer.pause();
      drillPromptPlayer.removeAttribute("src");
      drillPromptPlayer.load();
    } catch (_e) {}
    drillPromptPlayer = null;
  }

  function flashDrillAudioBtn(state) {
    var btn = document.querySelector("#si-drill-overlay .si-drill-audio-btn");
    if (!btn) return;
    btn.classList.remove("is-playing", "is-error");
    if (state) btn.classList.add(state);
  }

  function playDrillPromptAudio(src) {
    var url = absolutizeDrillAudio(src);
    if (!url) return;
    stopDrillPromptAudio();
    flashDrillAudioBtn("is-playing");
    drillPromptPlayer = new Audio();
    drillPromptPlayer.preload = "auto";
    drillPromptPlayer.onended = function () {
      flashDrillAudioBtn("");
    };
    drillPromptPlayer.onerror = function () {
      flashDrillAudioBtn("is-error");
      var b = document.querySelector("#si-drill-overlay .si-drill-audio-btn");
      if (b) b.title = "Audio missing — check " + url;
    };
    drillPromptPlayer.src = url;
    var p = drillPromptPlayer.play();
    if (p && typeof p.catch === "function") {
      p.catch(function () {
        flashDrillAudioBtn("is-error");
      });
    }
  }

  function resolveDrillPromptAudio(d, partner) {
    if (!d || !d.promptAudio) return "";
    var a = d.promptAudio;
    if (typeof a === "string") return a;
    var v = (partner && partner.voice) || "f";
    return a[v] || a.f || a.m || "";
  }

  /** Echo phrase audio (neural TTS mp3 on the item, or {f,m}) */
  function resolveEchoItemAudio(item) {
    if (!item || typeof item === "string") return "";
    var a = item.audio;
    if (!a) return "";
    if (typeof a === "string") return a;
    return a.f || a.m || "";
  }

  function resolveLadderStagePromptAudio(stage) {
    if (!stage || !stage.promptAudio) return "";
    var a = stage.promptAudio;
    if (typeof a === "string") return a;
    var v = (stage.partner && stage.partner.voice) || "f";
    return a[v] || a.f || a.m || "";
  }

  function getDrillState(beatId) {
    var id = beatId || "_";
    if (!drillByBeat[id]) {
      drillByBeat[id] = {
        open: false,
        phase: "train",
        trainI: 0,
        trainDone: {},
        i: 0,
        done: {},
        batchDone: {},
        hint: false,
        stageI: 0,
        choiceI: 0,
        qa2i: 0,
        dlgRole: "",
        dlgPair: 0,
        dlgAwaitHear: false,
        dlgPhaseDone: {},
      };
    }
    if (!drillByBeat[id].batchDone) drillByBeat[id].batchDone = {};
    if (!drillByBeat[id].dlgPhaseDone) drillByBeat[id].dlgPhaseDone = {};
    return drillByBeat[id];
  }

  document.title =
    "Lesson " + theme.num + " · " + theme.title + " · B2 Intensive";

  // FCE lock: no Themes hub / Fleabag / other courses — only return to the exam page
  var fromFce =
    params.get("src") === "fce" ||
    params.get("course") === "fce" ||
    !!fromParam ||
    (window.WorkshopGate &&
      typeof WorkshopGate.isFceEntry === "function" &&
      WorkshopGate.isFceEntry()) ||
    document.body.classList.contains("intensive-body--fce-lite");

  // FCE return: prefer ?from= (exam page that opened Speaking), else theme default
  var elBackFce = document.getElementById("int-back-fce");
  var fceReturnHref = "../fce.html";
  if (elBackFce) {
    var safeFrom = sanitizeLessonFrom(fromParam);
    if (safeFrom) {
      elBackFce.href = safeFrom;
      fceReturnHref = safeFrom;
      if (/ghost-walk/i.test(safeFrom)) {
        elBackFce.innerHTML = "&larr; FCE &middot; Ghost walk";
        elBackFce.title = "Back to Unit 9 Listening · Ghost walk guide";
      } else if (/sentence-completion|superstition|mountains/i.test(safeFrom)) {
        elBackFce.innerHTML = "&larr; FCE &middot; Mountains";
        elBackFce.title = "Back to Unit 9 Listening · Superstition Mountains";
      } else if (/mystery-donors/i.test(safeFrom)) {
        elBackFce.innerHTML = "&larr; FCE &middot; Mystery donors";
        elBackFce.title = "Back to Unit 9 Reading · Mystery donors";
      } else if (/valuable-discovery/i.test(safeFrom)) {
        elBackFce.innerHTML = "&larr; FCE &middot; Valuable discovery";
        elBackFce.title = "Back to Unit 9 Reading · A valuable discovery";
      } else {
        elBackFce.innerHTML = "&larr; FCE";
        elBackFce.title = "Back to the exam page";
      }
    } else if (theme.id === "lifestyle") {
      fceReturnHref = "../unit1-reading/this-is-your-life/index.html";
      elBackFce.href = fceReturnHref;
      elBackFce.innerHTML = "&larr; FCE &middot; This is your life";
      elBackFce.title = "Back to Unit 1 Reading Part 7";
    } else if (theme.id === "mystery") {
      fceReturnHref = "../unit9-listening-part3-ghost-walk/index.html";
      elBackFce.href = fceReturnHref;
      elBackFce.innerHTML = "&larr; FCE &middot; Ghost walk";
      elBackFce.title = "Back to Unit 9 Listening · Ghost walk guide";
    } else {
      elBackFce.href = "../fce.html";
      elBackFce.innerHTML = "&larr; FCE";
      elBackFce.title = "Back to Mastering B2 (FCE)";
    }
  }

  var elBackThemes = document.getElementById("int-back-themes");
  if (fromFce) {
    document.body.classList.add("intensive-body--fce-lite");
    try {
      sessionStorage.setItem("b2int_fce_lock", "1");
      sessionStorage.setItem("b2int_fce_from", fceReturnHref);
    } catch (_eLock) {}
    if (elBackThemes) {
      elBackThemes.hidden = true;
      elBackThemes.setAttribute("aria-hidden", "true");
      elBackThemes.removeAttribute("href");
      elBackThemes.addEventListener("click", function (e) {
        e.preventDefault();
      });
    }
  } else if (elBackThemes) {
    elBackThemes.hidden = false;
    elBackThemes.href = "index.html";
  }

  var headIcon = document.getElementById("lesson-icon");
  var headTitle = document.getElementById("lesson-title");
  var headTag = document.getElementById("lesson-tag");
  if (headIcon) headIcon.textContent = theme.icon;
  if (headTitle) {
    headTitle.textContent =
      "Lesson " +
      theme.num +
      " · " +
      (theme.topicTitle || theme.topic || "") +
      (theme.topicTitle || theme.topic ? " · " : "") +
      theme.title;
  }
  if (headTag) headTag.textContent = theme.tagline;

  function listHtml(items) {
    if (!items || !items.length) return "";
    return (
      "<ul>" +
      items
        .map(function (line) {
          return "<li>" + escapeHtml(line) + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }

  function renderGoalNote() {
    var host = document.getElementById("si-goal-body");
    if (!host) return;
    var g = theme.goal || {
      title: "Goal · what they leave with",
      examVsSpeak:
        "This intensive is conversation practice — not an exam paper. Texts feed speaking; keys stay on the exam track.",
      learn: [
        "Steal cool chunks from the tape and reuse them about their own life.",
        "Build longer turns (60–90 s) with stems in view.",
        "Improvise under light pressure using 5+ phrases.",
      ],
      notThis: [
        "Not scoring Reading Part 7 matching.",
        "Not silent comprehension for a mark.",
      ],
      teacherTip:
        "Correct only when a phrase breaks. Celebrate stolen tape lines.",
    };
    host.innerHTML =
      '<p class="si-goal-kicker">' +
      escapeHtml(g.title || "Lesson goal") +
      "</p>" +
      (g.examVsSpeak
        ? '<p class="si-goal-split"><strong>Exam vs speak:</strong> ' +
          escapeHtml(g.examVsSpeak) +
          "</p>"
        : "") +
      (g.learn && g.learn.length
        ? '<div class="si-goal-block"><span class="si-goal-label">They will learn to</span>' +
          listHtml(g.learn) +
          "</div>"
        : "") +
      (g.notThis && g.notThis.length
        ? '<div class="si-goal-block si-goal-block--not"><span class="si-goal-label">Not the goal</span>' +
          listHtml(g.notThis) +
          "</div>"
        : "") +
      (g.teacherTip
        ? '<p class="si-goal-tip"><strong>Tip:</strong> ' +
          escapeHtml(g.teacherTip) +
          "</p>"
        : "");
  }

  renderGoalNote();

  function renderExamQs(questions, kind) {
    if (!questions || !questions.length) return "";
    var cls = kind === "hw" ? "si-exam-qs si-exam-qs--hw" : "si-exam-qs";
    return (
      '<div class="' +
      cls +
      '">' +
      questions
        .map(function (item, i) {
          var q = typeof item === "string" ? item : item.q || "";
          var steal = typeof item === "string" ? "" : item.steal || "";
          return (
            '<div class="si-exam-q">' +
            '<div class="si-exam-q-lab">Question ' +
            (i + 1) +
            "</div>" +
            '<p class="si-exam-q-text">' +
            escapeHtml(q) +
            "</p>" +
            (steal
              ? '<p class="si-exam-steal"><span class="si-exam-steal-lab">Use</span> ' +
                escapeHtml(steal) +
                "</p>"
              : "") +
            "</div>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function hintsWrap(subtitle, bodyHtml, count) {
    if (!bodyHtml) return "";
    var n = count != null ? count : "";
    return (
      '<details class="si-hints">' +
      '<summary class="si-hints-sum">' +
      '<span class="si-hints-pill">Hints' +
      (n !== "" ? " · " + n : "") +
      "</span>" +
      (subtitle
        ? '<span class="si-hints-sub">' + escapeHtml(subtitle) + "</span>"
        : "") +
      "</summary>" +
      '<div class="si-hints-body">' +
      bodyHtml +
      "</div></details>"
    );
  }

  function normalizeQ(item) {
    if (typeof item === "string") return { q: item, examples: [] };
    return {
      q: item.q || item.text || "",
      examples: item.examples || item.bridges || [],
    };
  }

  function phraseEn(p) {
    if (p && typeof p === "object") {
      return String(p.en || p.phrase || p.text || "");
    }
    return String(p || "");
  }

  function phraseRu(p) {
    if (p && typeof p === "object") {
      return String(p.ru || p.translation || "");
    }
    return "";
  }

  function currentBeatPhrases(screen) {
    return (screen && screen.phrases) || [];
  }

  function allBeatPhrases() {
    if (typeof B2_INTENSIVE_allPhrases === "function") {
      return B2_INTENSIVE_allPhrases(theme);
    }
    return [];
  }

  function needlesFromPhrases(phrases) {
    var raw = [];
    (phrases || []).forEach(function (p) {
      String(phraseEn(p))
        .split(/…|\.\.\./)
        .forEach(function (chunk) {
          chunk = String(chunk).replace(/^[\s,]+|[\s,]+$/g, "").trim();
          if (chunk.length < 3) return;
          raw.push(chunk);
          // compound tape lines: "breakfast, set off for work"
          if (chunk.indexOf(", ") !== -1) {
            chunk.split(", ").forEach(function (bit) {
              bit = bit.trim();
              if (bit.length >= 8) raw.push(bit);
            });
          }
        });
    });
    var seen = {};
    var out = [];
    raw.forEach(function (n) {
      var variants = [n];
      var stripped = n.replace(/^(i'm|i am|i|my|but|and|or)\s+/i, "");
      if (stripped && stripped !== n && stripped.length >= 6) variants.push(stripped);
      if (/\bset off\b/i.test(n)) {
        variants.push(n.replace(/\bset off\b/gi, "setting off"));
      }
      if (/^i can\s+/i.test(n)) {
        variants.push(n.replace(/^i can\s+/i, ""));
      }
      variants.forEach(function (v) {
        var k = v.toLowerCase();
        if (seen[k] || v.length < 4) return;
        seen[k] = 1;
        out.push(v);
      });
    });
    out.sort(function (a, b) {
      return b.length - a.length;
    });
    return out;
  }

  function escapeRegExp(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  /** Highlight cool-word needles inside trusted read HTML (not inside tags). */
  function highlightPhrasesInHtml(html, phrases) {
    if (!html) return "";
    var needles = needlesFromPhrases(phrases);
    if (!needles.length) return html;
    var result = String(html);
    needles.forEach(function (needle) {
      var re = new RegExp(
        "(" + escapeRegExp(needle).replace(/'/g, "['’]") + ")",
        "gi"
      );
      var parts = result.split(/(<[^>]+>)/);
      result = parts
        .map(function (part) {
          if (!part || part.charAt(0) === "<") return part;
          return part.replace(re, function (m) {
            return (
              '<mark class="si-keyphrase" data-si-key="' +
              escapeHtml(needle) +
              '">' +
              m +
              "</mark>"
            );
          });
        })
        .join("");
    });
    return result;
  }

  function renderReadBody(screen) {
    var r = screen.read || {};
    if (!r.html && !r.title) {
      return (
        '<div class="int-slot-empty">Drop a short reading passage here for this beat.</div>'
      );
    }
    var letter = r.letter
      ? '<span class="si-paper-letter" aria-hidden="true">' +
        escapeHtml(r.letter) +
        "</span>"
      : "";
    var sub = r.subtitle
      ? '<em class="si-paper-role">' + escapeHtml(r.subtitle) + "</em>"
      : "";
    var bodyHtml = highlightPhrasesInHtml(r.html || "", screen.phrases || []);
    return (
      '<div class="si-paper">' +
      '<header class="si-paper-head">' +
      letter +
      '<div class="si-paper-titles">' +
      (r.title
        ? '<h3 class="si-paper-name">' + escapeHtml(r.title) + "</h3>"
        : "") +
      sub +
      "</div></header>" +
      '<div class="si-paper-body">' +
      bodyHtml +
      "</div></div>"
    );
  }

  function renderContextBody(screen) {
    var c = screen.context || {};
    var html = "";
    if (c.tone) {
      html +=
        '<p class="si-context-tone"><strong>' +
        escapeHtml(c.tone) +
        "</strong></p>";
    }
    if (c.meanings && c.meanings.length) {
      html +=
        '<div class="si-context-label">Meaning</div><ul class="si-context-list">' +
        c.meanings
          .map(function (ex) {
            return "<li>" + escapeHtml(ex) + "</li>";
          })
          .join("") +
        "</ul>";
    }
    if (c.examples && c.examples.length) {
      html += hintsWrap(
        "Lexis · what goes with these words",
        '<ul class="si-context-list">' +
          c.examples
            .map(function (ex) {
              return "<li>" + escapeHtml(ex) + "</li>";
            })
            .join("") +
          "</ul>",
        c.examples.length
      );
    }
    if (!html) {
      return '<div class="int-slot-empty">Meaning · how to steal the phrases</div>';
    }
    return html;
  }

  function renderVocabBody(screen) {
    var v = screen.vocab || {};
    if (!v || !v.type) {
      return '<div class="int-slot-empty">Vocabulary task — drop the pack here.</div>';
    }
    return (
      '<div class="si-vocab-host" id="si-vocab-host" data-vocab-type="' +
      escapeHtml(v.type) +
      '" data-pack-key="' +
      escapeHtml(v.packKey || "") +
      '"></div>'
    );
  }

  function bindVocab(root) {
    var host = root && root.querySelector("#si-vocab-host");
    if (!host) return;
    var type = host.getAttribute("data-vocab-type") || "";
    var packKey = host.getAttribute("data-pack-key") || "";
    var pack = packKey && window[packKey] ? window[packKey] : null;
    if (type === "pairs" && pack && window.PREP_VOCAB_PAIR_BOX) {
      PREP_VOCAB_PAIR_BOX.mount({ root: host, pack: pack });
    } else {
      host.innerHTML =
        '<div class="int-slot-empty">Vocabulary pack not loaded.</div>';
    }
  }

  function renderSpeakSide(screen) {
    var s = screen.speak || {};
    var questions = s.questions || [];
    var starters = s.starters || [];
    var mission = s.mission || "Answer in English · use the tape phrases.";

    var qsHtml = questions.length
      ? questions
          .map(function (item, i) {
            var row = normalizeQ(item);
            var ex =
              row.examples && row.examples.length
                ? hintsWrap(
                    "Bridge examples — pick one if you freeze",
                    '<ul class="si-dq-examples">' +
                      row.examples
                        .map(function (e) {
                          return "<li>" + escapeHtml(e) + "</li>";
                        })
                        .join("") +
                      "</ul>",
                    row.examples.length
                  )
                : "";
            return (
              '<article class="si-dq">' +
              '<div class="si-dq-num">Question ' +
              (i + 1) +
              "</div>" +
              '<p class="si-dq-text">' +
              escapeHtml(row.q) +
              "</p>" +
              ex +
              "</article>"
            );
          })
          .join("")
      : "";

    var startHtml = starters.length
      ? hintsWrap(
          "Start like this",
          "<ul>" +
            starters
              .map(function (line) {
                return "<li>" + escapeHtml(line) + "</li>";
              })
              .join("") +
            "</ul>",
          starters.length
        )
      : "";

    if (!questions.length && !starters.length) return "";

    return (
      '<div class="si-tape-discuss">' +
      '<div class="si-tape-discuss-head">Talk</div>' +
      '<p class="si-tape-mission">' +
      escapeHtml(mission) +
      "</p>" +
      startHtml +
      '<div class="si-dq-list">' +
      qsHtml +
      "</div></div>"
    );
  }

  function fillDrillSlot(template, slot) {
    return String(template || "").split("{{slot}}").join(slot || "…");
  }

  function renderDrillSide(screen) {
    var d = screen && screen.drill;
    if (!d) return "";
    var isLadder = d.mode === "ladder" && d.stages && d.stages.length;
    if (!isLadder && !(d.partners && d.partners.length)) return "";
    var n = isLadder ? d.stages.length : d.partners.length;
    return (
      '<div class="si-drill-launch-wrap">' +
      '<button type="button" class="si-drill-launch" data-si-drill="open">' +
      (isLadder ? "Drilling · ladder · " + n + " steps" : "Drilling · " + n + " partners") +
      "</button>" +
      '<p class="si-drill-launch-hint">' +
      (isLadder
        ? escapeHtml(
            d.how ||
              "Hear → say big → Said · ×3 partners · swap roles · next chunk · assemble"
          )
        : "Train → partners · main idea + invent · memory on 4–5") +
      "</p></div>"
    );
  }

  function ladderEchoList(d, phrases, stage) {
    if (stage && stage.echo && stage.echo.length) return stage.echo;
    if (d.echo && d.echo.length) return d.echo;
    return (phrases || []).slice(0, 8);
  }

  /** Always-available skip to next ladder step (no need to finish echo / partners). */
  function paintDrillSkipStep(st, stages) {
    if (!stages || !stages.length) return "";
    if (st.stageI >= stages.length - 1) return "";
    return (
      '<button type="button" class="si-drill-btn si-drill-btn--skip" data-si-drill="ladder-skip">' +
      "Skip · next step →" +
      "</button>"
    );
  }

  function ladderStageDots(stages, st) {
    return (stages || [])
      .map(function (s, i) {
        var cls = "si-drill-dot";
        if (st.done[i]) cls += " is-done";
        if (i === st.stageI) cls += " is-now";
        return '<span class="' + cls + '" title="' + escapeHtml(s.label || "Step " + (i + 1)) + '"></span>';
      })
      .join("");
  }

  function paintLadderChips(stems) {
    if (!stems || !stems.length) return "";
    return (
      '<div class="si-drill-targets"><div class="si-drill-targets-lab">Use these</div><div class="si-drill-chips">' +
      stems
        .map(function (ph) {
          return (
            '<span class="si-drill-chip">' + escapeHtml(phraseEn(ph)) + "</span>"
          );
        })
        .join("") +
      "</div></div>"
    );
  }

  /** Ex.12-style idea card: suggest / refuse / instead — large & clear */
  function paintSituationCard(sit) {
    if (!sit) return "";
    var parts = sit.parts || [];
    var labels = sit.labels || ["Suggest", "Refuse", "Instead"];
    var partsHtml = parts
      .map(function (p, i) {
        return (
          '<li class="si-drill-sit-part">' +
          '<span class="si-drill-sit-k">' +
          escapeHtml(labels[i] || String(i + 1)) +
          "</span>" +
          '<span class="si-drill-sit-v">' +
          escapeHtml(p) +
          "</span></li>"
        );
      })
      .join("");
    return (
      '<div class="si-drill-situation">' +
      (sit.kicker
        ? '<div class="si-drill-situation-lab">' +
          escapeHtml(sit.kicker) +
          "</div>"
        : "") +
      (sit.title
        ? '<h3 class="si-drill-situation-title">' +
          escapeHtml(sit.title) +
          "</h3>"
        : "") +
      (partsHtml
        ? '<ol class="si-drill-sit-parts">' + partsHtml + "</ol>"
        : sit.prompt
          ? '<p class="si-drill-situation-prompt">' +
            escapeHtml(sit.prompt) +
            "</p>"
          : "") +
      "</div>"
    );
  }

  function dialoguePairsForRole(turns, studentRole) {
    var list = turns || [];
    var pairs = [];
    var consumed = {};
    for (var i = 0; i < list.length; i++) {
      var t = list[i];
      if (!t || t.who !== studentRole) continue;
      var prev = i > 0 ? list[i - 1] : null;
      var next = i + 1 < list.length ? list[i + 1] : null;
      var other = studentRole === "V" ? "S" : "V";
      var prevOther = prev && prev.who === other ? prev : null;
      var nextOther = next && next.who === other ? next : null;
      if (studentRole === "V") {
        if (prevOther && !consumed[i - 1]) {
          pairs.push({ prompt: prevOther, say: t, after: null });
        } else {
          pairs.push({ prompt: null, say: t, after: nextOther });
          if (nextOther) consumed[i + 1] = true;
        }
      } else {
        pairs.push({ prompt: null, say: t, after: nextOther });
      }
    }
    return pairs;
  }

  function resolveTurnAudio(turn, partner) {
    if (!turn) return "";
    var slot = (partner && partner.slot) || "";
    if (turn.audioBySlot && slot && turn.audioBySlot[slot]) {
      return turn.audioBySlot[slot];
    }
    return turn.audio || "";
  }

  function turnText(turn, partner) {
    if (!turn) return "";
    return fillDrillSlot(turn.text || "", (partner && partner.slot) || "");
  }

  /** Partner modes for ×4 ladder: 1–2 open · 3 memory+hint · 4 record (voice only, no script) */
  function dialoguePartnerMode(st, partners) {
    var n = (partners || []).length;
    var i = st.i || 0;
    var num = i + 1;
    if (n >= 4) {
      if (num >= 4) return "record";
      if (num >= 3) return "memory";
      return "open";
    }
    /* If a stage still has only 3 partners, last = record (blind) */
    if (n === 3 && num >= 3) return "record";
    if (n === 3 && num >= 2) return "memory";
    return "open";
  }

  function paintDlgMicStub(opts) {
    var record = !!(opts && opts.record);
    return (
      '<div class="si-dlg-mic' +
      (record ? " si-dlg-mic--rec" : "") +
      '" aria-hidden="true">' +
      '<span class="si-dlg-mic-pulse"></span>' +
      '<span class="si-dlg-mic-pulse si-dlg-mic-pulse--2"></span>' +
      '<span class="si-dlg-mic-core">' +
      (record ? "●" : "♪") +
      "</span>" +
      '<span class="si-dlg-mic-lab">' +
      (record ? "Recording · speak" : "Your turn · speak") +
      "</span></div>"
    );
  }

  function paintDlgSayFace(opts) {
    var roleName = opts.roleName || "";
    var sayTxt = opts.sayTxt || "";
    var mode = opts.mode || "open";
    var hintOn = !!opts.hintOn;
    var done = !!opts.done;
    var memory = mode === "memory";
    var record = mode === "record";
    var showMic = !done && (memory || record || mode === "open");
    var lab = done
      ? record
        ? "Said · " + roleName
        : "You said · " + roleName
      : record
        ? "Recording · you are " + roleName
        : memory && !hintOn
          ? "Your turn to speak · you are " + roleName
          : "Say this · you are " + roleName;
    /* Record = no dialogue text at all (not even after Said) */
    if (record) {
      return (
        '<div class="si-dlg-say' +
        (done ? " si-dlg-say--done" : "") +
        " si-dlg-say--record" +
        '">' +
        '<div class="si-dlg-lab si-dlg-lab--say">' +
        escapeHtml(lab) +
        "</div>" +
        (done ? "" : paintDlgMicStub({ record: true })) +
        (done
          ? '<p class="si-dlg-memory-note">Line spoken · no script</p>'
          : '<p class="si-dlg-memory-note">No script · speak aloud</p>') +
        "</div>"
      );
    }
    var text =
      done
        ? sayTxt
        : memory && !hintOn
          ? "Your turn to speak"
          : sayTxt;
    var textCls =
      "si-dlg-say-text" +
      (done ? " si-dlg-say-text--sm" : "") +
      (memory && !hintOn && !done ? " si-dlg-say-text--prompt" : "");
    return (
      '<div class="si-dlg-say' +
      (done ? " si-dlg-say--done" : "") +
      (memory && !hintOn && !done ? " si-dlg-say--memory" : "") +
      '">' +
      '<div class="si-dlg-lab si-dlg-lab--say">' +
      escapeHtml(lab) +
      "</div>" +
      (showMic && !done ? paintDlgMicStub({ record: false }) : "") +
      '<p class="' +
      textCls +
      '">' +
      escapeHtml(text) +
      "</p>" +
      (memory && !hintOn && !done
        ? '<p class="si-dlg-memory-note">Recall the line · Hint if you freeze</p>'
        : "") +
      "</div>"
    );
  }

  function paintDlgHearBlock(opts) {
    var otherName = opts.otherName || "Partner";
    var hearTxt = opts.hearTxt || "";
    var hearAudio = opts.hearAudio || "";
    var record = !!opts.record;
    /* Partner 4: voice only — no speaker transcript */
    if (record) {
      return (
        '<div class="si-dlg-hear si-dlg-hear--blind">' +
        '<div class="si-dlg-lab">' +
        escapeHtml("Listen · " + otherName) +
        (hearAudio
          ? ' <button type="button" class="si-drill-audio-btn" data-si-drill="play-dlg-hear" aria-label="Play voice">▶</button>'
          : "") +
        "</div>" +
        '<p class="si-dlg-hear-text si-dlg-hear-text--blind">Voice only · no text</p>' +
        "</div>"
      );
    }
    return (
      '<div class="si-dlg-hear">' +
      '<div class="si-dlg-lab">' +
      escapeHtml("Hear · " + otherName) +
      (hearAudio
        ? ' <button type="button" class="si-drill-audio-btn" data-si-drill="play-dlg-hear" aria-label="Replay">▶</button>'
        : "") +
      "</div>" +
      '<p class="si-dlg-hear-text">' +
      escapeHtml(hearTxt || "…") +
      "</p></div>"
    );
  }

  function ensureDialogueState(st, stage) {
    if (!stage) return;
    if (!st.dlgRole) {
      st.dlgRole = stage.youStartAs || "V";
    }
    if (st.dlgPair < 0) st.dlgPair = 0;
    if (!st.dlgPhaseDone) st.dlgPhaseDone = {};
  }

  function trainDoneCount(st, phrases) {
    var n = 0;
    (phrases || []).forEach(function (_p, i) {
      if (st.trainDone[i]) n++;
    });
    return n;
  }

  function paintDrillOverlay() {
    var screen = flow[stepIndex];
    var d = screen && screen.drill;
    var existing = document.getElementById("si-drill-overlay");
    if (!d || !screen || screen.kind !== "beat") {
      if (existing) existing.remove();
      document.body.classList.remove("si-drill-open");
      stopDrillPromptAudio();
      return;
    }
    var st = getDrillState(screen.id);
    if (!st.open) {
      if (existing) existing.remove();
      document.body.classList.remove("si-drill-open");
      stopDrillPromptAudio();
      return;
    }

    var phrases = screen.phrases || [];
    var partners = d.partners || [];
    var stages = d.stages || [];
    var isLadder = d.mode === "ladder" && stages.length;
    var scrollHtml = "";
    var footHtml = "";

    if (isLadder) {
      if (st.phase !== "ladder") st.phase = "ladder";
      if (st.stageI < 0) st.stageI = 0;
      if (st.stageI >= stages.length) st.stageI = stages.length - 1;
      var stage = stages[st.stageI] || stages[0];
      var stageDoneN = 0;
      for (var sk in st.done) {
        if (st.done[sk]) stageDoneN++;
      }
      var stageDots = ladderStageDots(stages, st);
      var echoList = ladderEchoList(d, phrases, stage);
      var skipStepHtml = paintDrillSkipStep(st, stages);

      if (stage.type === "echo") {
        if (st.trainI < 0) st.trainI = 0;
        if (echoList.length && st.trainI >= echoList.length) {
          st.trainI = echoList.length - 1;
        }
        var echoItem = echoList[st.trainI] || "";
        var echoPhrase = phraseEn(echoItem);
        var echoRu = phraseRu(echoItem);
        var echoAudioSrc = resolveEchoItemAudio(echoItem);
        var eDone = trainDoneCount(st, echoList);
        var echoDots = echoList
          .map(function (_p, i) {
            var cls = "si-drill-dot";
            if (st.trainDone[i]) cls += " is-done";
            if (i === st.trainI) cls += " is-now";
            return '<span class="' + cls + '"></span>';
          })
          .join("");

        scrollHtml =
          '<div class="si-drill-ov-kicker">Ladder · Step ' +
          (st.stageI + 1) +
          "/" +
          stages.length +
          " · Echo · " +
          eDone +
          "/" +
          echoList.length +
          "</div>" +
          '<h2 class="si-drill-ov-title">' +
          escapeHtml(stage.label || "Echo · repeat") +
          "</h2>" +
          '<p class="si-drill-ov-tip">' +
          escapeHtml(
            stage.tip || "Just repeat. Look → say → next. No invent yet."
          ) +
          "</p>" +
          '<div class="si-drill-dots">' +
          stageDots +
          "</div>" +
          '<div class="si-drill-dots si-drill-dots--echo">' +
          echoDots +
          "</div>" +
          '<div class="si-drill-train-card">' +
          '<div class="si-drill-train-num">Phrase ' +
          (st.trainI + 1) +
          " / " +
          echoList.length +
          (echoAudioSrc
            ? ' <button type="button" class="si-drill-audio-btn" data-si-drill="play-echo" aria-label="Play phrase">▶</button>'
            : "") +
          "</div>" +
          '<p class="si-drill-train-phrase">' +
          escapeHtml(echoPhrase) +
          "</p>" +
          (echoRu
            ? '<p class="si-drill-ov-tip" lang="ru">' + escapeHtml(echoRu) + "</p>"
            : "") +
          "</div>";

        footHtml =
          '<div class="si-drill-actions">' +
          '<button type="button" class="si-drill-btn" data-si-drill="train-prev"' +
          (st.trainI === 0 ? " disabled" : "") +
          ">← Prev</button>" +
          '<button type="button" class="si-drill-btn si-drill-btn--main" data-si-drill="train-said">' +
          (st.trainDone[st.trainI] ? "Said ✓ · next" : "I said it · next") +
          "</button>" +
          "</div>" +
          (eDone >= echoList.length
            ? '<button type="button" class="si-drill-btn si-drill-btn--go" data-si-drill="ladder-next">Next step →</button>'
            : skipStepHtml);
      } else if (stage.type === "dialogue") {
        ensureDialogueState(st, stage);
        var dlgPartners = stage.partners || [];
        if (st.i < 0) st.i = 0;
        if (dlgPartners.length && st.i >= dlgPartners.length) {
          st.i = dlgPartners.length - 1;
        }
        var dp = dlgPartners[st.i] || dlgPartners[0] || {
          name: "Partner",
          slot: "Thai",
        };
        var role = st.dlgRole || stage.youStartAs || "V";
        var pairs = dialoguePairsForRole(stage.turns || [], role);
        if (pairs.length && st.dlgPair >= pairs.length) {
          st.dlgPair = pairs.length - 1;
        }
        var pair = pairs[st.dlgPair] || pairs[0] || {};
        var isRespond = role === "V" && !!pair.prompt;
        var hearTurn = isRespond
          ? pair.prompt
          : st.dlgAwaitHear
            ? pair.after
            : null;
        var sayTurn = pair.say;
        var hearTxt = turnText(hearTurn, dp);
        var sayTxt = turnText(sayTurn, dp);
        var hearAudio = resolveTurnAudio(hearTurn, dp);
        var roleName =
          role === "V"
            ? stage.roleNames && stage.roleNames.V
              ? stage.roleNames.V
              : "Victor (V)"
            : stage.roleNames && stage.roleNames.S
              ? stage.roleNames.S
              : "Sarah (S)";
        var otherName =
          role === "V"
            ? stage.roleNames && stage.roleNames.S
              ? stage.roleNames.S
              : "Sarah (S)"
            : stage.roleNames && stage.roleNames.V
              ? stage.roleNames.V
              : "Victor (V)";
        var partnersDoneN = 0;
        dlgPartners.forEach(function (_p, bi) {
          if (st.batchDone[bi]) partnersDoneN++;
        });
        var roleKey = role;
        /* All ×N partners done for this role → stop lines; show Repeat / Swap / Next */
        var allPartnersDone =
          dlgPartners.length > 0 && partnersDoneN >= dlgPartners.length;
        if (allPartnersDone) st.dlgPhaseDone[roleKey] = true;
        var roleFinished = !!st.dlgPhaseDone[roleKey] || allPartnersDone;
        var bothRolesDone =
          !!st.dlgPhaseDone[stage.youStartAs || "V"] &&
          (!stage.thenSwapTo || !!st.dlgPhaseDone[stage.thenSwapTo]);
        var dlgMode = dialoguePartnerMode(st, dlgPartners);
        var dlgMemory = dlgMode === "memory";
        var dlgRecord = dlgMode === "record";
        var bodyHtml = "";
        if (roleFinished) {
          bodyHtml =
            '<div class="si-dlg-say si-dlg-say--done">' +
            '<div class="si-dlg-lab si-dlg-lab--say">Chain complete</div>' +
            '<p class="si-dlg-say-text si-dlg-say-text--sm">All ' +
            dlgPartners.length +
            " partners done · you were " +
            escapeHtml(roleName) +
            "</p>" +
            '<p class="si-dlg-memory-note">Repeat the chain, swap roles, or go next.</p>' +
            "</div>";
        } else if (isRespond) {
          bodyHtml =
            paintDlgHearBlock({
              otherName: otherName,
              hearTxt: hearTxt,
              hearAudio: hearAudio,
              record: dlgRecord,
            }) +
            paintDlgSayFace({
              roleName: roleName,
              sayTxt: sayTxt,
              mode: dlgMode,
              hintOn: st.hint,
            });
        } else if (st.dlgAwaitHear && pair.after) {
          bodyHtml =
            paintDlgSayFace({
              roleName: roleName,
              sayTxt: sayTxt,
              mode: dlgMode,
              hintOn: true,
              done: true,
            }) +
            paintDlgHearBlock({
              otherName: otherName,
              hearTxt: hearTxt,
              hearAudio: hearAudio,
              record: dlgRecord,
            });
        } else {
          bodyHtml =
            paintDlgSayFace({
              roleName: roleName,
              sayTxt: sayTxt,
              mode: dlgMode,
              hintOn: st.hint,
            }) +
            (pair.after && !dlgRecord
              ? '<p class="si-dlg-next-hint">After Said → you hear ' +
                escapeHtml(otherName) +
                ".</p>"
              : pair.after && dlgRecord
                ? '<p class="si-dlg-next-hint">After Said → listen (no script).</p>'
                : "");
        }

        var dlgTip = dlgRecord
          ? "Partner 4 · voice only: no script for anyone · ▶ listen · then speak (recording)."
          : dlgMemory
            ? isRespond
              ? "Partner 3 · memory: Hear → speak from memory · Hint if you freeze."
              : "Partner 3 · memory: Your turn to speak · Hint if you freeze."
            : isRespond
              ? "Hear " +
                otherName +
                " → say your line BIG → Said → next line plays."
              : "Say your line → Said → hear " + otherName + ".";

        /* Card first so Hear + Say stay on screen (no scroll past chrome) */
        scrollHtml =
          '<div class="si-drill-card si-drill-card--ov si-drill-card--dlg">' +
          bodyHtml +
          "</div>" +
          (roleFinished
            ? ""
            : '<p class="si-drill-roles si-drill-roles--compact"><span class="si-drill-roles-you">You = ' +
              escapeHtml(roleName) +
              "</span> · " +
              escapeHtml(dp.name || "") +
              (dp.slot ? " · " + escapeHtml(String(dp.slot)) : "") +
              " · line " +
              (st.dlgPair + 1) +
              "/" +
              pairs.length +
              " · partner " +
              (st.i + 1) +
              "/" +
              dlgPartners.length +
              (dlgRecord ? " · record" : dlgMemory ? " · memory" : "") +
              "</p>" +
              '<p class="si-drill-ov-tip si-drill-ov-tip--compact">' +
              escapeHtml(dlgTip) +
              "</p>");

        var onLastPair = pairs.length > 0 && st.dlgPair >= pairs.length - 1;
        var onLastPartner =
          dlgPartners.length > 0 && st.i >= dlgPartners.length - 1;
        var saidLabel = "I said it · next";
        if (roleFinished) {
          saidLabel = "";
        } else if (!isRespond && !st.dlgAwaitHear && pair.after) {
          saidLabel = onLastPair && onLastPartner
            ? "I said it · hear answer · then finish"
            : "I said it · hear answer";
        } else if (!isRespond && st.dlgAwaitHear) {
          saidLabel = onLastPair
            ? onLastPartner
              ? "Finish chain →"
              : "Next partner →"
            : "Next line →";
        } else if (onLastPair && !st.dlgAwaitHear) {
          saidLabel = onLastPartner
            ? "Finish chain →"
            : "I said it · next partner";
        }

        var swapToRole =
          role === (stage.youStartAs || "V")
            ? stage.thenSwapTo || "S"
            : stage.youStartAs || "V";
        var swapToName =
          (stage.roleNames && stage.roleNames[swapToRole]) ||
          (swapToRole === "S" ? "Sarah" : "Victor");

        footHtml =
          (roleFinished
            ? ""
            : '<div class="si-drill-actions">' +
              (dlgMemory && !st.dlgAwaitHear
                ? '<button type="button" class="si-drill-btn" data-si-drill="hint">' +
                  (st.hint ? "Hide hint" : "Hint / подсказка") +
                  "</button>"
                : "") +
              '<button type="button" class="si-drill-btn si-drill-btn--main" data-si-drill="ladder-dlg-said">' +
              saidLabel +
              "</button>" +
              "</div>") +
          (roleFinished
            ? '<button type="button" class="si-drill-btn si-drill-btn--skip" data-si-drill="ladder-dlg-repeat">Repeat chain again →</button>'
            : "") +
          (bothRolesDone
            ? '<button type="button" class="si-drill-btn si-drill-btn--go" data-si-drill="ladder-next">Next step →</button>'
            : roleFinished && stage.thenSwapTo
              ? '<button type="button" class="si-drill-btn si-drill-btn--go" data-si-drill="ladder-dlg-swap">Swap roles · you are ' +
                escapeHtml(swapToName) +
                " →</button>" +
                skipStepHtml
              : roleFinished && !stage.thenSwapTo
                ? '<button type="button" class="si-drill-btn si-drill-btn--go" data-si-drill="ladder-next">Next step →</button>'
                : skipStepHtml) +
          '<button type="button" class="si-drill-reset" data-si-drill="ladder-back">← Previous step</button>';
      } else if (stage.type === "contextual") {
        /* Contextual drilling: same stems · one say per situation · names/context change */
        var contexts = stage.contexts || [];
        if (st.i < 0) st.i = 0;
        if (contexts.length && st.i >= contexts.length) {
          st.i = contexts.length - 1;
        }
        var ctx = contexts[st.i] || contexts[0] || {};
        var ctxDoneN = 0;
        contexts.forEach(function (_c, ci) {
          if (st.batchDone[ci]) ctxDoneN++;
        });
        var cMode = dialoguePartnerMode(st, contexts);
        var cMemory = cMode === "memory";
        var cRecord = cMode === "record";
        var ctxSit = {
          kicker:
            (ctx.kicker || "Contextual drilling") +
            " · " +
            (st.i + 1) +
            "/" +
            contexts.length,
          title: ctx.title || "Situation",
          parts: ctx.parts || [],
        };
        var sharedStems = stage.stems || ctx.stems || [];
        var ctxModel = ctx.model || ctx.modelB || stage.modelB || "";
        var ctxInvent =
          ctx.inventPrompt ||
          stage.inventPrompt ||
          "Say the full suggest → refuse → suggest again for this place.";
        var ctxSpeakBlock = cRecord
          ? '<div class="si-dlg-say si-dlg-say--record">' +
            paintDlgMicStub({ record: true }) +
            '<p class="si-dlg-say-text si-dlg-say-text--rec">Speak now</p>' +
            '<p class="si-dlg-memory-note">Recording · same moves · new place names only</p></div>'
          : cMemory && !st.hint
            ? '<div class="si-dlg-say si-dlg-say--memory">' +
              paintDlgMicStub({ record: false }) +
              '<p class="si-dlg-say-text si-dlg-say-text--prompt">Your turn to speak</p>' +
              '<p class="si-dlg-memory-note">Same phrases · new context · Hint if you freeze</p></div>'
            : '<div class="si-dlg-say">' +
              paintDlgMicStub({ record: false }) +
              '<p class="si-drill-invent"><span class="si-drill-invent-lab">You say</span> ' +
              escapeHtml(ctxInvent) +
              "</p>" +
              paintLadderChips(sharedStems) +
              (st.hint && ctxModel
                ? '<div class="si-drill-hint-panel"><div class="si-drill-hint-lab">Hint · model</div><p class="si-drill-model-text">' +
                  escapeHtml(ctxModel) +
                  "</p></div>"
                : "") +
              "</div>";

        scrollHtml =
          '<div class="si-drill-ov-kicker">Contextual drilling · Situation ' +
          (st.i + 1) +
          "/" +
          contexts.length +
          (cRecord ? " · record" : cMemory ? " · memory" : "") +
          "</div>" +
          '<h2 class="si-drill-ov-title">' +
          escapeHtml(stage.label || "Contextual drilling") +
          "</h2>" +
          '<p class="si-drill-ov-tip">' +
          escapeHtml(
            cRecord
              ? "Same phrases · this place only · no text · speak once."
              : cMemory
                ? "Same phrases · new names · speak from memory · Hint if needed."
                : stage.tip ||
                  "Phrases stay the same · only the place / names change · one say per situation."
          ) +
          "</p>" +
          '<div class="si-drill-card si-drill-card--ov">' +
          (cRecord ? "" : paintSituationCard(ctxSit)) +
          (cRecord
            ? ""
            : '<p class="si-drill-line-a"><span class="si-drill-role">A</span> ' +
              escapeHtml(stage.promptA || ctx.promptA || "Where do you want to go?") +
              "</p>") +
          ctxSpeakBlock +
          "</div>";

        footHtml =
          '<div class="si-drill-actions">' +
          (!cRecord
            ? '<button type="button" class="si-drill-btn" data-si-drill="hint">' +
              (st.hint
                ? "Hide hint"
                : cMemory
                  ? "Hint / подсказка"
                  : "Hint") +
              "</button>"
            : "") +
          '<button type="button" class="si-drill-btn si-drill-btn--main" data-si-drill="ladder-heard">' +
          (st.batchDone[st.i]
            ? st.i >= contexts.length - 1
              ? "Said ✓"
              : "Said ✓ · next situation"
            : st.i >= contexts.length - 1
              ? "I said it · finish"
              : "I said it · next situation →") +
          "</button>" +
          "</div>" +
          (ctxDoneN >= contexts.length && contexts.length
            ? '<button type="button" class="si-drill-btn si-drill-btn--skip" data-si-drill="ladder-partners-repeat">Repeat chain again →</button>' +
              '<button type="button" class="si-drill-btn si-drill-btn--go" data-si-drill="ladder-next">Next step →</button>'
            : skipStepHtml) +
          '<button type="button" class="si-drill-reset" data-si-drill="ladder-back">← Previous step</button>';
      } else if (stage.type === "partners") {
        var batchPartners = stage.partners || [];
        if (st.i < 0) st.i = 0;
        if (batchPartners.length && st.i >= batchPartners.length) {
          st.i = batchPartners.length - 1;
        }
        var bp = batchPartners[st.i] || batchPartners[0] || {
          name: "Partner",
          slot: "…",
        };
        var batchDoneN = 0;
        batchPartners.forEach(function (_bp, bi) {
          if (st.batchDone[bi]) batchDoneN++;
        });
        var batchDots = batchPartners
          .map(function (pp, bi) {
            var cls = "si-drill-dot";
            if (st.batchDone[bi]) cls += " is-done";
            if (bi === st.i) cls += " is-now";
            return (
              '<span class="' +
              cls +
              '" title="' +
              escapeHtml(pp.name || "P" + (bi + 1)) +
              '"></span>'
            );
          })
          .join("");
        var inventBatch = fillDrillSlot(
          stage.inventPrompt || "Add one detail about {{slot}}.",
          bp.slot
        );
        var stageAudio =
          resolveLadderStagePromptAudio(stage) ||
          resolveDrillPromptAudio(stage, bp);
        var roleYou =
          (stage.roles && stage.roles.you) || stage.youAre || "";
        var rolePartner =
          (stage.roles && stage.roles.partner) || stage.partnerIs || "";
        var partnerLines = stage.partnerLines || [];
        var pMode = dialoguePartnerMode(st, batchPartners);
        var pMemory = pMode === "memory";
        var pRecord = pMode === "record";
        var partnerLinesHtml = "";
        if (partnerLines.length && !pRecord) {
          partnerLinesHtml =
            '<div class="si-drill-partner-lines">' +
            partnerLines
              .map(function (ln) {
                var t = typeof ln === "string" ? ln : ln.text || "";
                var a = typeof ln === "string" ? "" : ln.audio || "";
                if (a && typeof a === "object") {
                  var vv = bp.voice || "m";
                  a = a[vv] || a.m || a.f || "";
                }
                return (
                  '<p class="si-drill-pline">' +
                  '<span class="si-drill-role">' +
                  escapeHtml(
                    (stage.roles && stage.roles.partnerShort) || "V"
                  ) +
                  "</span> " +
                  escapeHtml(pMemory && !st.hint ? "…" : t) +
                  (a
                    ? ' <button type="button" class="si-drill-audio-btn" data-si-drill="play-pline" data-audio="' +
                      escapeHtml(a) +
                      '" aria-label="Play line">▶</button>'
                    : "") +
                  "</p>"
                );
              })
              .join("") +
            "</div>";
        }

        var partnersSpeakBlock = pRecord
          ? '<div class="si-dlg-say si-dlg-say--record">' +
            paintDlgMicStub({ record: true }) +
            '<p class="si-dlg-say-text si-dlg-say-text--rec">Speak now</p>' +
            '<p class="si-dlg-memory-note">Recording · no stems · say the whole turn</p></div>'
          : pMemory && !st.hint
            ? '<div class="si-dlg-say si-dlg-say--memory">' +
              paintDlgMicStub({ record: false }) +
              '<p class="si-dlg-say-text si-dlg-say-text--prompt">Your turn to speak</p>' +
              '<p class="si-dlg-memory-note">Recall · Hint if you freeze</p></div>'
            : '<p class="si-drill-invent"><span class="si-drill-invent-lab">You say</span> ' +
              escapeHtml(inventBatch) +
              "</p>" +
              paintLadderChips(stage.stems) +
              (st.hint && stage.modelB
                ? '<div class="si-drill-hint-panel"><div class="si-drill-hint-lab">Hint · model</div><p class="si-drill-model-text">' +
                  escapeHtml(fillDrillSlot(stage.modelB, bp.slot)) +
                  "</p></div>"
                : "");

        scrollHtml =
          '<div class="si-drill-ov-kicker">Ladder · Step ' +
          (st.stageI + 1) +
          "/" +
          stages.length +
          " · Partner " +
          (st.i + 1) +
          "/" +
          batchPartners.length +
          (pRecord ? " · record" : pMemory ? " · memory" : "") +
          "</div>" +
          '<h2 class="si-drill-ov-title">' +
          escapeHtml(stage.label || "Partners · ×4") +
          "</h2>" +
          '<p class="si-drill-ov-tip">' +
          escapeHtml(
            pRecord
              ? "Partner 4 · recording · no text · speak."
              : pMemory
                ? "Partner 3 · memory · Hint if you freeze."
                : stage.tip ||
                  "Same stems · four partners · new slot each time."
          ) +
          "</p>" +
          (roleYou || rolePartner
            ? '<p class="si-drill-roles"><span class="si-drill-roles-you">You = ' +
              escapeHtml(roleYou || "…") +
              "</span>" +
              (rolePartner
                ? ' · <span class="si-drill-roles-p">Partner = ' +
                  escapeHtml(rolePartner) +
                  "</span>"
                : "") +
              "</p>"
            : "") +
          '<div class="si-drill-card si-drill-card--ov">' +
          '<div class="si-drill-who"><span class="si-drill-badge">Partner</span> ' +
          escapeHtml(bp.name || "Partner") +
          (rolePartner ? " · " + escapeHtml(rolePartner) : "") +
          "</div>" +
          (pRecord ? "" : paintSituationCard(stage.situation)) +
          (partnerLinesHtml
            ? partnerLinesHtml
            : pRecord
              ? ""
              : '<p class="si-drill-line-a"><span class="si-drill-role">A</span> ' +
                escapeHtml(stage.promptA || "Your turn?") +
                (stageAudio
                  ? ' <button type="button" class="si-drill-audio-btn" data-si-drill="play-batch-a" aria-label="Play partner line">▶</button>'
                  : "") +
                "</p>") +
          (stage.situation || pRecord
            ? ""
            : '<p class="si-drill-slot">Your slot: <strong>' +
              escapeHtml(bp.slot || "…") +
              "</strong></p>") +
          partnersSpeakBlock +
          "</div>";

        footHtml =
          '<div class="si-drill-actions">' +
          (pMemory || (!pRecord && stage.modelB)
            ? '<button type="button" class="si-drill-btn" data-si-drill="hint">' +
              (st.hint ? "Hide hint" : pMemory ? "Hint / подсказка" : "Hint") +
              "</button>"
            : "") +
          '<button type="button" class="si-drill-btn si-drill-btn--main" data-si-drill="ladder-heard">' +
          (st.batchDone[st.i]
            ? st.i >= batchPartners.length - 1
              ? "Said ✓"
              : "Said ✓ · next partner"
            : "I said it · next partner") +
          "</button>" +
          "</div>" +
          (batchDoneN >= batchPartners.length && batchPartners.length
            ? '<button type="button" class="si-drill-btn si-drill-btn--skip" data-si-drill="ladder-partners-repeat">Repeat chain again →</button>' +
              '<button type="button" class="si-drill-btn si-drill-btn--go" data-si-drill="ladder-next">Next step →</button>'
            : skipStepHtml) +
          '<button type="button" class="si-drill-reset" data-si-drill="ladder-back">← Previous step</button>';
      } else if (stage.type === "choice") {
        if (stage.hintDefault && st._hintSeededFor !== st.stageI) {
          st.hint = true;
          st._hintSeededFor = st.stageI;
        }
        var opts = stage.options || [];
        if (st.choiceI < 0) st.choiceI = 0;
        if (opts.length && st.choiceI >= opts.length) st.choiceI = opts.length - 1;
        var opt = opts[st.choiceI] || opts[0] || {};
        var optCards = opts
          .map(function (o, oi) {
            return (
              '<button type="button" class="si-drill-choice' +
              (oi === st.choiceI ? " is-on" : "") +
              '" data-si-drill="ladder-choice" data-choice="' +
              oi +
              '">' +
              '<strong>' +
              escapeHtml(o.title || "Option " + (oi + 1)) +
              "</strong>" +
              "<span>" +
              escapeHtml(o.prompt || "") +
              "</span></button>"
            );
          })
          .join("");

        scrollHtml =
          '<div class="si-drill-ov-kicker">Ladder · Step ' +
          (st.stageI + 1) +
          "/" +
          stages.length +
          " · Pick 1 of " +
          opts.length +
          "</div>" +
          '<h2 class="si-drill-ov-title">' +
          escapeHtml(stage.label || "Your pick") +
          "</h2>" +
          '<p class="si-drill-ov-tip">' +
          escapeHtml(
            stage.tip || "Choose one card · 30–40 s · steal 3+ chunks."
          ) +
          "</p>" +
          '<div class="si-drill-dots">' +
          stageDots +
          "</div>" +
          '<div class="si-drill-choices">' +
          optCards +
          "</div>" +
          '<div class="si-drill-card si-drill-card--ov">' +
          '<div class="si-drill-who"><span class="si-drill-badge">Speak</span> ' +
          escapeHtml(opt.title || "Your pick") +
          "</div>" +
          paintSituationCard(opt.situation) +
          '<p class="si-drill-line-a">' +
          escapeHtml(opt.prompt || "") +
          "</p>" +
          (opt.cover && opt.cover.length
            ? '<div class="si-drill-cover"><div class="si-drill-cover-lab">Hit every element</div><ul class="si-drill-cover-list">' +
              opt.cover
                .map(function (c) {
                  return "<li>" + escapeHtml(c) + "</li>";
                })
                .join("") +
              "</ul></div>"
            : "") +
          (opt.cues && opt.cues.length
            ? '<div class="si-drill-cues"><div class="si-drill-cover-lab">Scene cards · tell the story in order</div><div class="si-drill-cues-grid">' +
              opt.cues
                .map(function (cue, ci) {
                  var src = cue.img || cue.src || "";
                  var lab = cue.label || "Scene " + (ci + 1);
                  return (
                    '<figure class="si-drill-cue">' +
                    (src
                      ? '<img src="' +
                        escapeHtml(absolutizeDrillAudio(src)) +
                        '" alt="' +
                        escapeHtml(lab) +
                        '" loading="lazy" />'
                      : '<div class="si-drill-cue-ph" aria-hidden="true">' +
                        (ci + 1) +
                        "</div>") +
                    "<figcaption>" +
                    escapeHtml(lab) +
                    "</figcaption></figure>"
                  );
                })
                .join("") +
              "</div></div>"
            : "") +
          paintLadderChips(opt.stems || stage.stems) +
          (st.hint && (opt.model || stage.model)
            ? '<div class="si-drill-hint-panel"><div class="si-drill-hint-lab">Hint · model</div><p class="si-drill-model-text">' +
              escapeHtml(opt.model || stage.model) +
              "</p></div>"
            : "") +
          "</div>";

        footHtml =
          '<div class="si-drill-actions">' +
          '<button type="button" class="si-drill-btn" data-si-drill="hint">' +
          (st.hint ? "Hide hint" : "Hint") +
          "</button>" +
          '<button type="button" class="si-drill-btn si-drill-btn--main" data-si-drill="ladder-done">' +
          (st.done[st.stageI] ? "Done ✓" : "I said it · finish") +
          "</button>" +
          "</div>" +
          (stageDoneN >= stages.length
            ? '<p class="si-drill-done">Ladder complete. Close and go to Talk.</p>'
            : "") +
          '<button type="button" class="si-drill-reset" data-si-drill="ladder-back">← Previous step</button>';
      } else {
        /* qa | qa2 */
        var partner = stage.partner || { name: "Partner", slot: "…" };
        var prompts =
          stage.type === "qa2"
            ? stage.prompts || []
            : [
                {
                  a: stage.promptA || "Your turn?",
                  model: stage.modelB || "",
                },
              ];
        if (st.qa2i < 0) st.qa2i = 0;
        if (prompts.length && st.qa2i >= prompts.length) {
          st.qa2i = prompts.length - 1;
        }
        var pq = prompts[st.qa2i] || prompts[0] || {};
        var inventLine = fillDrillSlot(
          stage.inventPrompt ||
            "Add one concrete detail about YOUR {{slot}}.",
          partner.slot
        );

        scrollHtml =
          '<div class="si-drill-ov-kicker">Ladder · Step ' +
          (st.stageI + 1) +
          "/" +
          stages.length +
          (stage.type === "qa2"
            ? " · Q" + (st.qa2i + 1) + "/" + prompts.length
            : " · 1 answer") +
          "</div>" +
          '<h2 class="si-drill-ov-title">' +
          escapeHtml(stage.label || "Answer") +
          "</h2>" +
          '<p class="si-drill-ov-tip">' +
          escapeHtml(
            stage.tip ||
              "Answer like the text · stems stay on screen · invent one detail."
          ) +
          "</p>" +
          '<div class="si-drill-dots">' +
          stageDots +
          "</div>" +
          '<div class="si-drill-card si-drill-card--ov">' +
          '<div class="si-drill-who"><span class="si-drill-badge">Partner</span> ' +
          escapeHtml(partner.name) +
          "</div>" +
          paintSituationCard(stage.situation || pq.situation) +
          '<p class="si-drill-line-a"><span class="si-drill-role">A</span> ' +
          escapeHtml(pq.a || stage.promptA || "") +
          (resolveLadderStagePromptAudio(stage)
            ? ' <button type="button" class="si-drill-audio-btn" data-si-drill="play-batch-a" aria-label="Play partner line">▶</button>'
            : "") +
          "</p>" +
          '<p class="si-drill-invent"><span class="si-drill-invent-lab">You say</span> ' +
          escapeHtml(inventLine) +
          "</p>" +
          paintLadderChips(stage.stems) +
          (st.hint && (pq.model || stage.modelB)
            ? '<div class="si-drill-hint-panel"><div class="si-drill-hint-lab">Hint · model</div><p class="si-drill-model-text">' +
              escapeHtml(
                fillDrillSlot(pq.model || stage.modelB, partner.slot)
              ) +
              "</p></div>"
            : "") +
          "</div>";

        var canAdvanceQa2 =
          stage.type === "qa2" && st.qa2i < prompts.length - 1;
        footHtml =
          '<div class="si-drill-actions">' +
          '<button type="button" class="si-drill-btn" data-si-drill="hint">' +
          (st.hint ? "Hide hint" : "Hint") +
          "</button>" +
          '<button type="button" class="si-drill-btn si-drill-btn--main" data-si-drill="' +
          (canAdvanceQa2 ? "ladder-qa2-next" : "ladder-next") +
          '">' +
          (canAdvanceQa2
            ? "I said it · next question →"
            : st.stageI >= stages.length - 1
              ? "I said it · finish"
              : "I said it · next step →") +
          "</button>" +
          "</div>" +
          skipStepHtml +
          '<button type="button" class="si-drill-reset" data-si-drill="ladder-back">← Previous step</button>';
      }
    } else if (st.phase === "train") {
      if (st.trainI < 0) st.trainI = 0;
      if (phrases.length && st.trainI >= phrases.length) {
        st.trainI = phrases.length - 1;
      }
      var phrase = phraseEn(phrases[st.trainI] || "");
      var tDone = trainDoneCount(st, phrases);
      var trainDots = phrases
        .map(function (_p, i) {
          var cls = "si-drill-dot";
          if (st.trainDone[i]) cls += " is-done";
          if (i === st.trainI) cls += " is-now";
          return '<span class="' + cls + '"></span>';
        })
        .join("");

      scrollHtml =
        '<div class="si-drill-ov-kicker">Step 1 · Training · ' +
        tDone +
        "/" +
        phrases.length +
        " said</div>" +
        '<h2 class="si-drill-ov-title">Repeat the crown stems</h2>' +
        (d.bigIdea
          ? '<p class="si-drill-bigidea si-drill-bigidea--compact"><span class="si-drill-bigidea-lab">Main idea</span> ' +
            escapeHtml(d.bigIdea) +
            "</p>"
          : "") +
        '<div class="si-drill-dots">' +
        trainDots +
        "</div>" +
        '<div class="si-drill-train-card">' +
        '<div class="si-drill-train-num">Phrase ' +
        (st.trainI + 1) +
        " / " +
        phrases.length +
        "</div>" +
        '<p class="si-drill-train-phrase">' +
        escapeHtml(phrase) +
        "</p>" +
        '<p class="si-drill-ov-tip">Look · say · next</p>' +
        "</div>";

      footHtml =
        '<div class="si-drill-actions">' +
        '<button type="button" class="si-drill-btn" data-si-drill="train-prev"' +
        (st.trainI === 0 ? " disabled" : "") +
        ">← Prev</button>" +
        '<button type="button" class="si-drill-btn si-drill-btn--main" data-si-drill="train-said">' +
        (st.trainDone[st.trainI] ? "Said ✓ · next" : "I said it · next") +
        "</button>" +
        "</div>" +
        (tDone >= phrases.length
          ? '<button type="button" class="si-drill-btn si-drill-btn--go" data-si-drill="to-partners">Start partners →</button>'
          : '<button type="button" class="si-drill-btn si-drill-btn--skip" data-si-drill="to-partners">Skip training · partners →</button>');
    } else {
      if (st.i < 0) st.i = 0;
      if (st.i >= partners.length) st.i = partners.length - 1;
      var p = partners[st.i] || partners[0];
      var doneN = 0;
      for (var k in st.done) {
        if (st.done[k]) doneN++;
      }
      var model = fillDrillSlot(d.modelB, p.slot);
      var inventLine = fillDrillSlot(
        d.inventPrompt ||
          "Invent one concrete detail about YOUR {{slot}} — don’t only list phrases.",
        p.slot
      );
      var partnerDots = partners
        .map(function (_row, i) {
          var cls = "si-drill-dot";
          if (st.done[i]) cls += " is-done";
          if (i === st.i) cls += " is-now";
          return '<span class="' + cls + '"></span>';
        })
        .join("");
      var chips = phrases
        .map(function (ph) {
          return (
            '<span class="si-drill-chip">' + escapeHtml(phraseEn(ph)) + "</span>"
          );
        })
        .join("");
      var memoryOnly = st.i >= 3;
      var targetsHtml = memoryOnly
        ? '<p class="si-drill-memory-note">Memory round — no phrase list. Hint only if you freeze.</p>'
        : '<div class="si-drill-targets"><div class="si-drill-targets-lab">Aim to include</div><div class="si-drill-chips">' +
          chips +
          "</div></div>";
      var hintHtml = st.hint
        ? '<div class="si-drill-hint-panel">' +
          '<div class="si-drill-hint-lab">Hint' +
          (memoryOnly ? " · phrases + model" : " · model") +
          "</div>" +
          (memoryOnly
            ? '<div class="si-drill-chips si-drill-chips--in-hint">' +
              chips +
              "</div>"
            : "") +
          '<p class="si-drill-model-text">' +
          escapeHtml(model) +
          "</p></div>"
        : "";

      scrollHtml =
        '<div class="si-drill-ov-kicker">Step 2 · Partners · ' +
        (st.i + 1) +
        "/" +
        partners.length +
        (memoryOnly ? " · memory" : "") +
        " · " +
        doneN +
        "/" +
        partners.length +
        " done</div>" +
        '<h2 class="si-drill-ov-title">' +
        (memoryOnly ? "Speak from memory" : "Idea + stems + invent") +
        "</h2>" +
        (d.bigIdea
          ? '<p class="si-drill-bigidea si-drill-bigidea--compact"><span class="si-drill-bigidea-lab">Main idea</span> ' +
            escapeHtml(d.bigIdea) +
            "</p>"
          : "") +
        '<div class="si-drill-dots">' +
        partnerDots +
        "</div>" +
        '<div class="si-drill-card si-drill-card--ov">' +
        '<div class="si-drill-who"><span class="si-drill-badge">Partner</span> ' +
        escapeHtml(p.name) +
        "</div>" +
        '<p class="si-drill-line-a"><span class="si-drill-role">A</span> ' +
        escapeHtml(d.promptA || "Busy week?") +
        (resolveDrillPromptAudio(d, p)
          ? ' <button type="button" class="si-drill-audio-btn" data-si-drill="play-a" aria-label="Play partner line">▶</button>'
          : "") +
        "</p>" +
        '<p class="si-drill-slot">Your slot: <strong>' +
        escapeHtml(p.slot) +
        "</strong></p>" +
        '<p class="si-drill-invent"><span class="si-drill-invent-lab">Invent</span> ' +
        escapeHtml(inventLine) +
        "</p>" +
        targetsHtml +
        hintHtml +
        "</div>";

      footHtml =
        '<div class="si-drill-actions">' +
        '<button type="button" class="si-drill-btn" data-si-drill="hint">' +
        (st.hint ? "Hide hint" : "Hint") +
        "</button>" +
        '<button type="button" class="si-drill-btn si-drill-btn--main" data-si-drill="heard">' +
        (st.i >= partners.length - 1 && st.done[st.i]
          ? "Done ✓"
          : st.done[st.i]
            ? "Next partner →"
            : "I said it · next partner") +
        "</button>" +
        "</div>" +
        (doneN >= partners.length
          ? '<p class="si-drill-done">All partners done. Close and go to Talk.</p>'
          : "") +
        '<button type="button" class="si-drill-reset" data-si-drill="back-train">← Back to training</button>';
    }

    var headSkipHtml = "";
    if (isLadder && st.stageI < stages.length - 1) {
      headSkipHtml =
        '<button type="button" class="si-drill-ov-skip" data-si-drill="ladder-skip">Skip step</button>';
    } else if (!isLadder && st.phase === "train") {
      headSkipHtml =
        '<button type="button" class="si-drill-ov-skip" data-si-drill="to-partners">Skip</button>';
    }

    var html =
      '<div class="si-drill-overlay" id="si-drill-overlay" role="dialog" aria-modal="true" aria-label="Drilling">' +
      '<div class="si-drill-ov-panel">' +
      '<header class="si-drill-ov-head">' +
      '<div class="si-drill-ov-brand">Drilling</div>' +
      '<div class="si-drill-ov-head-actions">' +
      headSkipHtml +
      '<button type="button" class="si-drill-ov-x" data-si-drill="close" aria-label="Close">×</button>' +
      "</div>" +
      "</header>" +
      '<div class="si-drill-ov-scroll">' +
      scrollHtml +
      "</div>" +
      '<footer class="si-drill-ov-foot">' +
      footHtml +
      "</footer></div></div>";

    if (existing) {
      existing.outerHTML = html;
    } else {
      document.body.insertAdjacentHTML("beforeend", html);
    }
    document.body.classList.add("si-drill-open");
    bindDrillOverlay();
    var scrollEl = document.querySelector("#si-drill-overlay .si-drill-ov-scroll");
    if (scrollEl) scrollEl.scrollTop = 0;

    var autoAudioSrc = "";
    var autoPlayKey = "";
    if (st.phase === "partners") {
      var partnerNow = (d.partners || [])[st.i] || (d.partners || [])[0];
      autoAudioSrc = resolveDrillPromptAudio(d, partnerNow);
      if (autoAudioSrc) {
        autoPlayKey = screen.id + "::" + st.i + "::" + autoAudioSrc;
      }
    } else if (isLadder) {
      var autoStage = stages[st.stageI] || stages[0];
      if (autoStage && autoStage.type === "echo") {
        autoAudioSrc = resolveEchoItemAudio(echoList[st.trainI] || "");
        if (autoAudioSrc) {
          autoPlayKey =
            screen.id + "::echo::" + st.trainI + "::" + autoAudioSrc;
        }
      } else if (autoStage && autoStage.type === "dialogue") {
        ensureDialogueState(st, autoStage);
        var adP =
          (autoStage.partners || [])[st.i] ||
          (autoStage.partners || [])[0] ||
          {};
        var adPairs = dialoguePairsForRole(
          autoStage.turns || [],
          st.dlgRole || autoStage.youStartAs || "V"
        );
        var adPair = adPairs[st.dlgPair] || {};
        var adRole = st.dlgRole || autoStage.youStartAs || "V";
        var adHear =
          st.dlgAwaitHear ? adPair.after : adPair.prompt;
        if (adHear) {
          autoAudioSrc = resolveTurnAudio(adHear, adP);
          if (autoAudioSrc) {
            autoPlayKey =
              screen.id +
              "::dlg::" +
              st.stageI +
              "::" +
              adRole +
              "::" +
              st.i +
              "::" +
              st.dlgPair +
              "::" +
              (st.dlgAwaitHear ? "h" : "r") +
              "::" +
              autoAudioSrc;
          }
        }
      } else if (
        autoStage &&
        (autoStage.type === "qa" ||
          autoStage.type === "qa2" ||
          autoStage.type === "partners")
      ) {
        var autoPartner =
          autoStage.type === "partners"
            ? (autoStage.partners || [])[st.i] ||
              (autoStage.partners || [])[0]
            : autoStage.partner;
        if (
          autoStage.type === "partners" &&
          autoStage.partnerLines &&
          autoStage.partnerLines.length
        ) {
          var pl0 = autoStage.partnerLines[0];
          autoAudioSrc =
            typeof pl0 === "string" ? "" : pl0.audio || "";
          if (autoAudioSrc && typeof autoAudioSrc === "object") {
            var vv0 = (autoPartner && autoPartner.voice) || "m";
            autoAudioSrc =
              autoAudioSrc[vv0] || autoAudioSrc.m || autoAudioSrc.f || "";
          }
        } else {
          autoAudioSrc =
            resolveLadderStagePromptAudio(autoStage) ||
            resolveDrillPromptAudio(autoStage, autoPartner);
        }
        if (autoAudioSrc) {
          autoPlayKey =
            screen.id +
            "::ladder::" +
            st.stageI +
            "::" +
            (autoStage.type === "partners" ? st.i : st.qa2i || 0) +
            "::" +
            autoAudioSrc;
        }
      }
    }

    if (autoAudioSrc && autoPlayKey) {
      if (autoPlayKey !== drillPromptPlayedKey) {
        drillPromptPlayedKey = autoPlayKey;
        playDrillPromptAudio(autoAudioSrc);
      }
    } else {
      drillPromptPlayedKey = "";
      stopDrillPromptAudio();
    }
  }

  function renderTape(phrases, mode, screen) {
    var title =
      mode === "finale"
        ? "Cool words · use these in the improv"
        : "Cool words · on screen";
    var listHtml = phrases.length
      ? '<ul class="si-tape-list">' +
        phrases
          .map(function (p) {
            var en = phraseEn(p);
            var ru = phraseRu(p);
            var key = en.toLowerCase();
            var on = !!calledPhrases[key];
            if (ru) {
              return (
                '<li class="si-tape-item si-tape-flip' +
                (on ? " is-called" : "") +
                '">' +
                '<button type="button" class="si-tape-flip-btn" data-si-flip aria-label="Flip for translation">' +
                '<span class="si-tape-face si-tape-face--en">' +
                escapeHtml(en) +
                "</span>" +
                '<span class="si-tape-face si-tape-face--ru" lang="ru">' +
                escapeHtml(ru) +
                "</span></button>" +
                '<button type="button" class="si-tape-heard" data-si-phrase="' +
                escapeHtml(en) +
                '" title="Mark as heard" aria-label="Mark as heard" aria-pressed="' +
                (on ? "true" : "false") +
                '">✓</button></li>'
              );
            }
            return (
              '<li class="si-tape-item' +
              (on ? " is-called" : "") +
              '">' +
              '<button type="button" class="si-tape-btn" data-si-phrase="' +
              escapeHtml(en) +
              '">' +
              escapeHtml(en) +
              "</button></li>"
            );
          })
          .join("") +
        "</ul>"
      : "";

    var speakSide = "";
    var drillSide = "";
    if (screen && screen.kind === "beat") {
      drillSide = renderDrillSide(screen);
      if (screen.speak) speakSide = renderSpeakSide(screen);
    }

    if (!phrases.length && !speakSide && !drillSide) return "";

    return (
      '<aside class="si-tape' +
      (phrases.length ? "" : " si-tape--speak-only") +
      '" aria-label="' +
      (phrases.length ? "Cool words" : "Speaking") +
      '">' +
      (phrases.length
        ? '<div class="si-tape-head">' +
          escapeHtml(title) +
          " · " +
          phrases.length +
          (phrases.some(phraseRu) ? " · tap = RU" : "") +
          "</div>" +
          listHtml
        : "") +
      drillSide +
      speakSide +
      "</aside>"
    );
  }

  function renderBlocks(screen) {
    var blocks = (screen.blocks || []).filter(function (id) {
      return id !== "speak";
    });
    if (!blocks.length) return "";
    return (
      '<div class="int-slots si-beat-blocks">' +
      blocks
        .map(function (id) {
          var meta = blockMeta[id] || { title: id, hint: "" };
          var extra = "";
          if (id === "read") extra = renderReadBody(screen);
          else if (id === "context") extra = renderContextBody(screen);
          else if (id === "vocab") extra = renderVocabBody(screen);
          else if (id === "phrases" && screen.phrases && screen.phrases.length) {
            extra =
              '<ul class="si-beat-phrases">' +
              screen.phrases
                .map(function (p) {
                  return "<li>" + escapeHtml(phraseEn(p)) + "</li>";
                })
                .join("") +
              "</ul>";
          } else {
            extra = '<div class="int-slot-empty">Content slot — to be filled</div>';
          }
          return (
            '<article class="int-slot" data-block="' +
            escapeHtml(id) +
            '">' +
            '<div class="int-slot-head">' +
            '<span class="int-slot-title">' +
            escapeHtml(meta.title) +
            "</span>" +
            '<span class="int-slot-hint">' +
            escapeHtml(meta.hint) +
            "</span></div>" +
            extra +
            "</article>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function renderPhraseCards(phrases, mode) {
    if (!phrases.length) {
      return '<p class="int-slot-empty">No cool words yet — fill the beats first.</p>';
    }
    var total = phrases.length;
    var pages = Math.max(1, Math.ceil(total / CARD_BATCH));
    if (phraseBatchIndex > pages - 1) phraseBatchIndex = pages - 1;
    if (phraseBatchIndex < 0) phraseBatchIndex = 0;
    var start = phraseBatchIndex * CARD_BATCH;
    var slice = phrases.slice(start, start + CARD_BATCH);
    var tip =
      mode === "hw"
        ? "You practise a line → tap the card. Soft green ✓ = done."
        : "Student says a phrase → you tap that card. Soft green ✓ = heard. Aim for 5+.";

    var cards =
      '<div class="si-sticker-wall" aria-label="Phrase cards">' +
      slice
        .map(function (p, i) {
          var en = phraseEn(p);
          var key = en.toLowerCase();
          var on = !!calledPhrases[key];
          var num = start + i + 1;
          return (
            '<button type="button" class="si-sticker' +
            (on ? " is-called" : "") +
            '" data-si-phrase="' +
            escapeHtml(en) +
            '" aria-pressed="' +
            (on ? "true" : "false") +
            '" title="Tap when someone says this">' +
            '<span class="si-sticker-mark" aria-hidden="true">✓</span>' +
            '<span class="si-sticker-num">' +
            num +
            "</span>" +
            '<span class="si-sticker-phrase">' +
            escapeHtml(en) +
            "</span></button>"
          );
        })
        .join("") +
      "</div>";

    var nav =
      pages > 1
        ? '<div class="si-pack-nav">' +
          '<button type="button" class="si-pack-btn" data-si-batch="-1"' +
          (phraseBatchIndex === 0 ? " disabled" : "") +
          ">← Prev pack</button>" +
          '<span class="si-pack-meta">Pack ' +
          (phraseBatchIndex + 1) +
          " / " +
          pages +
          " · " +
          total +
          " phrases</span>" +
          '<button type="button" class="si-pack-btn" data-si-batch="1"' +
          (phraseBatchIndex >= pages - 1 ? " disabled" : "") +
          ">Next pack →</button></div>"
        : '<p class="si-pack-meta si-pack-meta--solo">' +
          total +
          " phrases · one pack</p>";

    return (
      '<div class="si-card-deck" data-si-deck-mode="' +
      escapeHtml(mode) +
      '">' +
      '<p class="si-card-deck-tip">' +
      tip +
      "</p>" +
      cards +
      nav +
      "</div>"
    );
  }

  function calledCount(phrases) {
    var n = 0;
    (phrases || []).forEach(function (p) {
      if (calledPhrases[phraseEn(p).toLowerCase()]) n++;
    });
    return n;
  }

  function syncCalledUi(root) {
    if (!root) return;
    var phrases = allBeatPhrases();
    var n = calledCount(phrases);
    root.querySelectorAll("[data-si-called-count]").forEach(function (el) {
      el.textContent = String(n);
    });
    root.querySelectorAll("[data-si-phrase]").forEach(function (el) {
      var key = String(el.getAttribute("data-si-phrase") || "").toLowerCase();
      var on = !!calledPhrases[key];
      el.classList.toggle("is-called", on);
      if (el.tagName === "BUTTON") {
        el.setAttribute("aria-pressed", on ? "true" : "false");
      }
      var li = el.closest(".si-tape-item");
      if (li) li.classList.toggle("is-called", on);
    });
  }

  function bindPhraseTaps(root) {
    if (!root) return;
    root.querySelectorAll("[data-si-flip]").forEach(function (btn) {
      if (btn._siFlipBound) return;
      btn._siFlipBound = true;
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var li = btn.closest(".si-tape-flip");
        if (li) li.classList.toggle("is-flipped");
      });
    });
    root.querySelectorAll("[data-si-phrase]").forEach(function (btn) {
      if (btn._siBound) return;
      btn._siBound = true;
      btn.addEventListener("click", function () {
        var p = btn.getAttribute("data-si-phrase") || "";
        var key = p.toLowerCase();
        calledPhrases[key] = !calledPhrases[key];
        syncCalledUi(root);
      });
    });
    root.querySelectorAll("[data-si-batch]").forEach(function (btn) {
      if (btn._siBatchBound) return;
      btn._siBatchBound = true;
      btn.addEventListener("click", function () {
        var delta = parseInt(btn.getAttribute("data-si-batch"), 10) || 0;
        phraseBatchIndex += delta;
        renderStage();
      });
    });
    syncCalledUi(root);
  }

  function bindDrill(root) {
    if (!root) return;
    root.querySelectorAll('[data-si-drill="open"]').forEach(function (btn) {
      if (btn._siDrillOpenBound) return;
      btn._siDrillOpenBound = true;
      btn.addEventListener("click", function () {
        var screen = flow[stepIndex];
        if (!screen || !screen.drill) return;
        var st = getDrillState(screen.id);
        st.open = true;
        if (screen.drill.mode === "ladder") {
          st.phase = "ladder";
          if (st.stageI == null) st.stageI = 0;
        } else if (!st.phase) {
          st.phase = "train";
        }
        paintDrillOverlay();
      });
    });
  }

  function bindDrillOverlay() {
    if (document.documentElement._siDrillDocBound) return;
    document.documentElement._siDrillDocBound = true;
    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-si-drill]");
      if (!btn) return;
      var ov = document.getElementById("si-drill-overlay");
      if (!ov || !ov.contains(btn)) return;
      e.preventDefault();
      var screen = flow[stepIndex];
      if (!screen || !screen.drill) return;
      var st = getDrillState(screen.id);
      var phrases = screen.phrases || [];
      var partners = screen.drill.partners || [];
      var stages = screen.drill.stages || [];
      var isLadder =
        screen.drill.mode === "ladder" && stages.length > 0;
      var echoList = isLadder
        ? ladderEchoList(screen.drill, phrases, stages[st.stageI] || null)
        : phrases;
      var act = btn.getAttribute("data-si-drill");

      if (act === "play-a") {
        var partnerPlay = partners[st.i] || partners[0] || null;
        playDrillPromptAudio(resolveDrillPromptAudio(screen.drill, partnerPlay));
        return;
      }
      if (act === "play-echo") {
        playDrillPromptAudio(
          resolveEchoItemAudio(echoList[st.trainI] || "")
        );
        return;
      }
      if (act === "play-batch-a") {
        var batchStage = stages[st.stageI] || {};
        var batchP =
          (batchStage.partners || [])[st.i] ||
          (batchStage.partners || [])[0] ||
          null;
        playDrillPromptAudio(
          resolveLadderStagePromptAudio(batchStage) ||
            resolveDrillPromptAudio(batchStage, batchP)
        );
        return;
      }
      if (act === "play-pline") {
        playDrillPromptAudio(btn.getAttribute("data-audio") || "");
        return;
      }
      if (act === "play-dlg-hear") {
        var dlgStPlay = stages[st.stageI] || {};
        ensureDialogueState(st, dlgStPlay);
        var dlgPsPlay = dlgStPlay.partners || [];
        var dlgPPlay = dlgPsPlay[st.i] || dlgPsPlay[0] || {};
        var dlgRolePlay = st.dlgRole || dlgStPlay.youStartAs || "V";
        var dlgPairsPlay = dialoguePairsForRole(
          dlgStPlay.turns || [],
          dlgRolePlay
        );
        var dlgPairPlay = dlgPairsPlay[st.dlgPair] || {};
        var hearPlay = st.dlgAwaitHear
          ? dlgPairPlay.after
          : dlgPairPlay.prompt;
        playDrillPromptAudio(resolveTurnAudio(hearPlay, dlgPPlay));
        return;
      }
      if (act === "close") {
        st.open = false;
        st.hint = false;
        drillPromptPlayedKey = "";
        stopDrillPromptAudio();
      } else if (act === "train-prev") {
        if (st.trainI > 0) st.trainI -= 1;
      } else if (act === "train-said") {
        st.trainDone[st.trainI] = true;
        var trainMax = (isLadder ? echoList : phrases).length;
        if (st.trainI < trainMax - 1) st.trainI += 1;
      } else if (act === "to-partners") {
        st.phase = "partners";
        st.i = 0;
        st.hint = false;
        drillPromptPlayedKey = "";
      } else if (act === "back-train") {
        st.phase = "train";
        st.hint = false;
        drillPromptPlayedKey = "";
        stopDrillPromptAudio();
      } else if (act === "hint") {
        st.hint = !st.hint;
      } else if (act === "ladder-choice") {
        st.choiceI = parseInt(btn.getAttribute("data-choice"), 10) || 0;
        st.hint = false;
      } else if (act === "ladder-dlg-swap") {
        var swapStage = stages[st.stageI] || {};
        st.dlgPhaseDone[st.dlgRole || swapStage.youStartAs || "V"] = true;
        st.dlgRole = swapStage.thenSwapTo || "S";
        st.i = 0;
        st.dlgPair = 0;
        st.dlgAwaitHear = false;
        st.batchDone = {};
        st.hint = false;
        drillPromptPlayedKey = "";
      } else if (act === "ladder-dlg-repeat") {
        var repStage = stages[st.stageI] || {};
        var repRole = st.dlgRole || repStage.youStartAs || "V";
        st.i = 0;
        st.dlgPair = 0;
        st.dlgAwaitHear = false;
        st.batchDone = {};
        st.hint = false;
        st.dlgPhaseDone[repRole] = false;
        drillPromptPlayedKey = "";
        stopDrillPromptAudio();
      } else if (act === "ladder-partners-repeat") {
        st.i = 0;
        st.batchDone = {};
        st.hint = false;
        st.done[st.stageI] = false;
        drillPromptPlayedKey = "";
        stopDrillPromptAudio();
      } else if (act === "ladder-dlg-said") {
        var dStage = stages[st.stageI] || {};
        ensureDialogueState(st, dStage);
        var dRole = st.dlgRole || dStage.youStartAs || "V";
        var dPartners = dStage.partners || [];
        var dPairs = dialoguePairsForRole(dStage.turns || [], dRole);
        /* Already finished this role — do not keep advancing lines */
        if (!st.dlgPhaseDone[dRole]) {
          if (
            dRole === "S" &&
            !st.dlgAwaitHear &&
            (dPairs[st.dlgPair] || {}).after
          ) {
            st.dlgAwaitHear = true;
          } else if (
            dRole === "V" &&
            !(dPairs[st.dlgPair] || {}).prompt &&
            (dPairs[st.dlgPair] || {}).after &&
            !st.dlgAwaitHear
          ) {
            /* V starts the chunk: say first, then hear S */
            st.dlgAwaitHear = true;
          } else {
            st.dlgAwaitHear = false;
            if (st.dlgPair < dPairs.length - 1) {
              st.dlgPair += 1;
            } else {
              st.batchDone[st.i] = true;
              if (st.i < dPartners.length - 1) {
                st.dlgPair = 0;
                st.i += 1;
              } else {
                /* Last phrase of last partner (4/4) — stop; Repeat / Swap / Next */
                st.dlgPhaseDone[dRole] = true;
                st.dlgAwaitHear = false;
              }
            }
          }
        }
        st.hint = false;
        drillPromptPlayedKey = "";
      } else if (act === "ladder-heard") {
        st.batchDone[st.i] = true;
        st.hint = false;
        var curBatch = stages[st.stageI] || {};
        var curList =
          curBatch.type === "contextual"
            ? curBatch.contexts || []
            : curBatch.partners || [];
        if (st.i < curList.length - 1) st.i += 1;
        if (window.SpeakClub) {
          SpeakClub.awardDrillPartner({
            themeId: theme.id,
            beatId: screen.id,
            partnerIndex: st.stageI * 10 + st.i,
          });
        }
      } else if (act === "ladder-qa2-next") {
        st.done[st.stageI] = false;
        st.qa2i += 1;
        st.hint = false;
      } else if (act === "ladder-skip" || act === "ladder-next" || act === "ladder-done") {
        var completedStage = st.stageI;
        var wasStageDone = !!st.done[completedStage];
        st.done[completedStage] = true;
        st.hint = false;
        if ((act === "ladder-next" || act === "ladder-skip") && st.stageI < stages.length - 1) {
          st.stageI += 1;
          st.qa2i = 0;
          st.choiceI = 0;
          st.i = 0;
          st.batchDone = {};
          st.dlgPair = 0;
          st.dlgAwaitHear = false;
          st.dlgRole = "";
          st.dlgPhaseDone = {};
          var nextStage = stages[st.stageI];
          if (nextStage && nextStage.type === "echo") {
            st.trainI = 0;
            st.trainDone = {};
          }
          if (nextStage && nextStage.type === "dialogue") {
            st.dlgRole = nextStage.youStartAs || "V";
          }
        }
        if (!wasStageDone && window.SpeakClub) {
          SpeakClub.awardDrillPartner({
            themeId: theme.id,
            beatId: screen.id,
            partnerIndex: completedStage,
          });
          var ladderClear = true;
          for (var li = 0; li < stages.length; li++) {
            if (!st.done[li]) {
              ladderClear = false;
              break;
            }
          }
          if (ladderClear) {
            SpeakClub.awardDrillClear({
              themeId: theme.id,
              beatId: screen.id,
            });
          }
        }
      } else if (act === "ladder-back") {
        if (st.stageI > 0) {
          st.stageI -= 1;
          st.qa2i = 0;
          st.i = 0;
          st.batchDone = {};
          st.dlgPair = 0;
          st.dlgAwaitHear = false;
          st.dlgRole = "";
          st.dlgPhaseDone = {};
          st.hint = false;
          var backStage = stages[st.stageI];
          if (backStage && backStage.type === "dialogue") {
            st.dlgRole = backStage.youStartAs || "V";
          }
        }
      } else if (act === "heard") {
        var partnerIdx = st.i;
        var wasDone = !!st.done[partnerIdx];
        st.done[partnerIdx] = true;
        st.hint = false;
        if (st.i < partners.length - 1) st.i += 1;
        if (!wasDone && window.SpeakClub) {
          SpeakClub.awardDrillPartner({
            themeId: theme.id,
            beatId: screen.id,
            partnerIndex: partnerIdx,
          });
          var allClear = true;
          for (var pi = 0; pi < partners.length; pi++) {
            if (!st.done[pi]) {
              allClear = false;
              break;
            }
          }
          if (allClear) {
            SpeakClub.awardDrillClear({
              themeId: theme.id,
              beatId: screen.id,
            });
          }
        }
      }
      paintDrillOverlay();
    });
  }

  if (!window._siDrillEscBound) {
    window._siDrillEscBound = true;
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      var screen = flow[stepIndex];
      if (!screen || !screen.drill) return;
      var st = getDrillState(screen.id);
      if (!st.open) return;
      st.open = false;
      st.hint = false;
      paintDrillOverlay();
    });
  }

  function renderImprovStickers(phrases) {
    return renderPhraseCards(phrases, "improv");
  }

  function sentenceFromReading(html, phrase) {
    var plain = String(html || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&rsquo;|&#8217;|&#39;/g, "'")
      .replace(/&ldquo;|&rdquo;|&#8220;|&#8221;/g, '"')
      .replace(/&mdash;|&#8212;/g, "—")
      .replace(/\s+/g, " ")
      .trim();
    if (!plain || !phrase) return "";
    var parts = plain.match(/[^.!?]+[.!?]*/g) || [plain];
    var stem = String(phrase)
      .toLowerCase()
      .replace(/…|\.{2,}/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    var needle = stem.slice(0, Math.min(28, stem.length));
    var i;
    for (i = 0; i < parts.length; i++) {
      if (parts[i].toLowerCase().indexOf(needle.slice(0, 16)) !== -1) {
        return parts[i].trim();
      }
    }
    var idx = plain.toLowerCase().indexOf(needle.slice(0, 14));
    if (idx === -1) return "";
    var from = plain.lastIndexOf(".", idx);
    var to = plain.indexOf(".", idx + needle.length);
    if (from < 0) from = 0;
    else from += 1;
    if (to < 0) to = plain.length;
    return plain.slice(from, to).trim();
  }

  function getHwStickers() {
    var out = [];
    var seen = {};
    ((theme && theme.beats) || []).forEach(function (b) {
      var meanings = (b.context && b.context.meanings) || [];
      var readHtml = (b.read && b.read.html) || "";
      (b.phrases || []).forEach(function (ph, i) {
        var p = String(ph || "").trim();
        if (!p) return;
        var id = p.toLowerCase();
        if (seen[id]) return;
        seen[id] = 1;
        var def = "";
        var low = p.toLowerCase();
        var stem = low.replace(/…|\.\.\./g, " ").replace(/\s+/g, " ").trim();
        var needle = stem.slice(0, Math.min(18, stem.length));
        for (var m = 0; m < meanings.length; m++) {
          var line = String(meanings[m]);
          if (needle && line.toLowerCase().indexOf(needle.slice(0, 12)) !== -1) {
            def = line.replace(/^[^=]+=\s*/, "").trim() || line;
            break;
          }
        }
        if (!def && meanings.length) {
          def = String(meanings[Math.min(i, meanings.length - 1)])
            .replace(/^[^=]+=\s*/, "")
            .trim();
        }
        if (!def) {
          def = "Cool lifestyle chunk — finish it about your own life.";
        }
        var use = sentenceFromReading(readHtml, p);
        out.push({
          phrase: p,
          text: p,
          def: def,
          definition: def,
          use: use,
          example: use,
          ctx: b.label || "",
        });
      });
    });
    return out;
  }

  function renderHwGames() {
    var stickers = getHwStickers();
    var vaultDeck =
      window.FLEABAG_PHRASE_VAULT &&
      typeof window.FLEABAG_PHRASE_VAULT.collectDeck === "function"
        ? window.FLEABAG_PHRASE_VAULT.collectDeck({ beats: theme.beats || [] })
        : [];
    if ((!vaultDeck || !vaultDeck.length) && stickers.length) {
      vaultDeck = stickers.map(function (s) {
        return {
          id: String(s.phrase).toLowerCase(),
          phrase: s.phrase,
          def: s.def,
          ctx: s.ctx || "",
          use: s.use || "",
        };
      });
    }
    var vaultBtn =
      window.FLEABAG_PHRASE_VAULT &&
      typeof window.FLEABAG_PHRASE_VAULT.launchBtnHtml === "function"
        ? window.FLEABAG_PHRASE_VAULT.launchBtnHtml(vaultDeck)
        : "";
    if (!vaultBtn && !stickers.length) return "";
    return (
      '<div class="fb-hw-games">' +
      vaultBtn +
      (stickers.length
        ? '<button type="button" class="fb-fyp-launch" id="btn-fyp-launch">' +
          '<span class="fb-fyp-launch-kicker">Home game</span>' +
          '<span class="fb-fyp-launch-title">Sticker FYP</span>' +
          '<span class="fb-fyp-launch-sub">Meaning or gap · pick 1 of 4 · ' +
          stickers.length +
          " cards</span></button>" +
          '<button type="button" class="fb-fyp-launch fb-fyp-launch--swipe" id="btn-swipe-launch">' +
          '<span class="fb-fyp-launch-kicker">Home game</span>' +
          '<span class="fb-fyp-launch-title">Sticker Swipe</span>' +
          '<span class="fb-fyp-launch-sub">6 levels · 10 cards · Tinder swipe</span></button>'
        : "") +
      "</div>"
    );
  }

  function bindHwGames(root) {
    if (!root) return;
    var vaultBtn = root.querySelector("#btn-vault-launch");
    if (vaultBtn && !vaultBtn._siBound) {
      vaultBtn._siBound = true;
      vaultBtn.addEventListener("click", function () {
        if (
          !window.FLEABAG_PHRASE_VAULT ||
          typeof window.FLEABAG_PHRASE_VAULT.open !== "function"
        ) {
          window.alert("Phrase vault failed to load — Ctrl+F5.");
          return;
        }
        var deck =
          typeof window.FLEABAG_PHRASE_VAULT.collectDeck === "function"
            ? window.FLEABAG_PHRASE_VAULT.collectDeck({
                beats: theme.beats || [],
              })
            : [];
        if (!deck.length) {
          deck = getHwStickers().map(function (s) {
            return {
              id: String(s.phrase).toLowerCase(),
              phrase: s.phrase,
              def: s.def,
              ctx: s.ctx || "",
              use: s.use || "",
            };
          });
        }
        window.FLEABAG_PHRASE_VAULT.open({ deck: deck });
      });
    }
    var fypBtn = root.querySelector("#btn-fyp-launch");
    if (fypBtn && !fypBtn._siBound) {
      fypBtn._siBound = true;
      fypBtn.addEventListener("click", function () {
        if (
          !window.FLEABAG_STICKER_FYP ||
          typeof window.FLEABAG_STICKER_FYP.open !== "function"
        ) {
          window.alert("Sticker FYP failed to load — Ctrl+F5.");
          return;
        }
        window.FLEABAG_STICKER_FYP.open({
          stickers: getHwStickers(),
          escapeHtml: escapeHtml,
        });
      });
    }
    var swipeBtn = root.querySelector("#btn-swipe-launch");
    if (swipeBtn && !swipeBtn._siBound) {
      swipeBtn._siBound = true;
      swipeBtn.addEventListener("click", function () {
        if (
          !window.FLEABAG_STICKER_SWIPE ||
          typeof window.FLEABAG_STICKER_SWIPE.open !== "function"
        ) {
          window.alert("Sticker Swipe failed to load — Ctrl+F5.");
          return;
        }
        var stickers = getHwStickers().filter(function (s) {
          return (s.def || "").trim() && (s.phrase || "").trim();
        });
        if (stickers.length < 2) {
          window.alert("Need at least 2 phrases with meanings for Swipe.");
          return;
        }
        window.FLEABAG_STICKER_SWIPE.open({
          stickers: stickers,
          escapeHtml: escapeHtml,
        });
      });
    }
  }

  function renderStepper() {
    if (!elStepper) return;
    elStepper.classList.add("si-beat-stepper");
    elStepper.innerHTML = flow
      .map(function (scr, i) {
        var cls = "int-step";
        if (i === stepIndex) cls += " is-active";
        else if (i < stepIndex) cls += " is-done";
        if (scr.kind === "finale") cls += " is-finale";
        if (scr.kind === "homework") cls += " is-hw";
        return (
          '<div class="' +
          cls +
          '" data-step="' +
          i +
          '">' +
          '<button type="button" class="int-step-btn" aria-current="' +
          (i === stepIndex ? "step" : "false") +
          '">' +
          '<span class="int-step-dot">' +
          (i < stepIndex ? "✓" : escapeHtml(scr.short)) +
          "</span>" +
          '<span class="int-step-label">' +
          escapeHtml(scr.label) +
          "</span>" +
          "</button></div>"
        );
      })
      .join("");

    elStepper.querySelectorAll(".int-step-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var wrap = btn.closest(".int-step");
        if (!wrap) return;
        var idx = parseInt(wrap.getAttribute("data-step"), 10);
        if (!isNaN(idx)) goTo(idx);
      });
    });
  }

  function renderStage() {
    var screen = flow[stepIndex];
    if (!screen || !elStage) return;

    var kicker =
      screen.kind === "beat"
        ? "Discussion beat " + screen.short + " / " + (theme.beats || []).length
        : screen.kind === "finale"
          ? "Finale · improvisation"
          : "Take home";

    var body = "";
    var tape = "";

    if (screen.kind === "beat") {
      body = renderBlocks(screen);
      tape = renderTape(currentBeatPhrases(screen), "beat", screen);
    } else if (screen.kind === "finale") {
      var stickers = allBeatPhrases();
      body =
        '<div class="si-finale-full">' +
        '<header class="si-finale-full-head">' +
        '<div class="si-tape-head si-finale-banner">Cool words · improv · <span data-si-called-count>' +
        calledCount(stickers) +
        "</span>/" +
        stickers.length +
        " called</div>" +
        '<p class="si-finale-prompt">' +
        escapeHtml(screen.prompt) +
        "</p>" +
        renderExamQs(screen.questions, "finale") +
        '<p class="si-finale-mission">How to run it: answer the questions · steal the yellow Use line · partner taps the tape. Soft green ✓ = counted.</p>' +
        "</header>" +
        renderPhraseCards(stickers, "improv") +
        "</div>";
      tape = renderTape(stickers, "finale", null);
    } else {
      var hwList = allBeatPhrases();
      body =
        '<article class="int-slot si-hw-slot">' +
        '<div class="int-slot-head">' +
        '<span class="int-slot-title">Take home</span>' +
        '<span class="int-slot-hint">Vault · FYP · Swipe</span></div>' +
        '<p class="si-hw-note">' +
        escapeHtml(screen.note) +
        "</p>" +
        renderExamQs(screen.questions, "hw") +
        renderHwGames() +
        "</article>";
      tape = renderTape(hwList, "finale", null);
    }

    var stageMod =
      screen.kind === "finale"
        ? " si-stage--finale"
        : screen.kind === "homework"
          ? " si-stage--hw"
          : "";

    elStage.innerHTML =
      '<div class="int-stage si-stage' +
      stageMod +
      '">' +
      '<header class="int-stage-head">' +
      '<div class="int-stage-row">' +
      "<div>" +
      '<div class="int-stage-kicker">' +
      escapeHtml(kicker) +
      "</div>" +
      '<h2 class="int-stage-title">' +
      escapeHtml(screen.label) +
      "</h2></div>" +
      '<span class="int-stage-time">' +
      escapeHtml(screen.time || "") +
      "</span></div>" +
      (screen.teacher
        ? '<details class="int-teacher-panel"><summary>For you · teacher note</summary><p>' +
          escapeHtml(screen.teacher) +
          "</p></details>"
        : "") +
      "</header>" +
      '<div class="int-stage-body si-stage-body">' +
      '<div class="si-main">' +
      body +
      "</div>" +
      tape +
      "</div></div>";

    elStage.classList.remove("int-stage--enter");
    void elStage.offsetWidth;
    elStage.classList.add("int-stage--enter");
    bindPhraseTaps(elStage);
    bindDrill(elStage);
    bindVocab(elStage);
    if (screen.kind === "homework") bindHwGames(elStage);
  }

  function updateNav() {
    if (elPrev) elPrev.disabled = stepIndex === 0;
    if (elNext) {
      elNext.textContent =
        stepIndex === flow.length - 1 ? "Finish lesson" : "Next →";
    }
    if (elProgress) {
      var scr = flow[stepIndex];
      elProgress.textContent =
        (scr && scr.label ? scr.label : "Step") +
        " · " +
        (stepIndex + 1) +
        " / " +
        flow.length;
    }
  }

  function goTo(idx) {
    if (idx < 0 || idx >= flow.length) return;
    var prevKind = flow[stepIndex] && flow[stepIndex].kind;
    var prevId = flow[stepIndex] && flow[stepIndex].id;
    if (prevId && drillByBeat[prevId]) {
      drillByBeat[prevId].open = false;
      drillByBeat[prevId].hint = false;
      paintDrillOverlay();
    }
    stepIndex = idx;
    if (stepIndex > maxVisited) maxVisited = stepIndex;
    var nextKind = flow[stepIndex] && flow[stepIndex].kind;
    if (prevKind !== nextKind) phraseBatchIndex = 0;
    renderStepper();
    renderStage();
    updateNav();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (elPrev) {
    elPrev.addEventListener("click", function () {
      goTo(stepIndex - 1);
    });
  }
  if (elNext) {
    elNext.addEventListener("click", function () {
      if (stepIndex < flow.length - 1) goTo(stepIndex + 1);
      else window.location.href = fromFce ? fceReturnHref : "index.html";
    });
  }

  renderStepper();
  renderStage();
  updateNav();
})();
