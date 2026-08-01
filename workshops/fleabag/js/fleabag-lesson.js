/**
 * Fleabag Workshop — beat rail + sticky cool-words tape + finale improv.
 */
(function () {
  var params = new URLSearchParams(window.location.search);
  var sessionId = params.get("session") || "";
  var session =
    typeof FLEABAG_WORKSHOP_getSession === "function"
      ? FLEABAG_WORKSHOP_getSession(sessionId)
      : null;

  var elRoot = document.getElementById("lesson-root");
  var elStepper = document.getElementById("lesson-stepper");
  var elStage = document.getElementById("lesson-stage");
  var elPrev = document.getElementById("btn-prev");
  var elNext = document.getElementById("btn-next");
  var elProgress = document.getElementById("lesson-progress");

  if (!session || !elRoot || typeof FLEABAG_WORKSHOP_buildFlow !== "function") {
    if (elRoot) {
      elRoot.innerHTML =
        '<div class="int-error"><p>Session not found. <a class="int-back" href="index.html">Back to workshop</a></p></div>';
    }
    return;
  }

  var flow = FLEABAG_WORKSHOP_buildFlow(session);
  var blockMeta = window.FLEABAG_BLOCK_META || {};
  var stepIndex = 0;
  var maxVisited = 0;
  var hwAudio = null;
  var hwQueueIndex = -1;

  function stopHwAudio() {
    if (hwAudio) {
      try {
        hwAudio.pause();
        hwAudio.removeAttribute("src");
        hwAudio.load();
      } catch (e) {}
      hwAudio = null;
    }
    hwQueueIndex = -1;
  }

  function getHwClips(screen) {
    if (screen && screen.clips && screen.clips.length) return screen.clips;
    var list = [];
    flow.forEach(function (scr) {
      if (scr.kind !== "beat") return;
      var url = scr.watch && scr.watch.videoUrl;
      if (!url || /youtu\.be\/|youtube\.com\//i.test(String(url))) return;
      list.push({
        label: scr.label || "Clip",
        src: String(url),
        optional: !!scr.optional,
      });
    });
    return list;
  }

  function renderHwAudio(clips) {
    if (!clips || !clips.length) return "";
    var rows = clips
      .map(function (c, i) {
        return (
          '<li class="fb-hw-track" data-hw-i="' +
          i +
          '">' +
          '<button type="button" class="fb-hw-track-btn" data-hw-play="' +
          i +
          '">' +
          '<span class="fb-hw-track-num">' +
          (i + 1) +
          "</span>" +
          '<span class="fb-hw-track-label">' +
          escapeHtml(c.label) +
          (c.optional ? ' <em class="fb-hw-opt">(optional)</em>' : "") +
          "</span>" +
          '<span class="fb-hw-track-state" data-hw-state></span>' +
          "</button></li>"
        );
      })
      .join("");
    return (
      '<div class="fb-hw-audio" id="fb-hw-audio">' +
      '<div class="fb-hw-audio-head">' +
      '<span class="fb-hw-audio-title">Shadow playlist · audio only</span>' +
      '<span class="fb-hw-audio-count">' +
      clips.length +
      " clips · play in order</span></div>" +
      '<div class="fb-hw-audio-controls">' +
      '<button type="button" class="fb-hw-btn fb-hw-btn--play" id="fb-hw-play-all">▶ Play all</button>' +
      '<button type="button" class="fb-hw-btn fb-hw-btn--stop" id="fb-hw-stop" disabled>⏹ Stop</button>' +
      "</div>" +
      '<ol class="fb-hw-tracklist">' +
      rows +
      "</ol>" +
      '<p class="fb-hw-audio-hint">No video — listen and shadow. When one clip ends, the next starts automatically.</p>' +
      "</div>"
    );
  }

  function bindHwAudio(root, clips) {
    var box = root.querySelector("#fb-hw-audio");
    if (!box || !clips || !clips.length) return;

    var btnAll = box.querySelector("#fb-hw-play-all");
    var btnStop = box.querySelector("#fb-hw-stop");
    var tracks = box.querySelectorAll(".fb-hw-track");

    function setStates(activeIdx, status) {
      tracks.forEach(function (li, i) {
        li.classList.toggle("is-playing", i === activeIdx && status === "playing");
        li.classList.toggle("is-done", i < activeIdx || (status === "done" && i === activeIdx));
        var st = li.querySelector("[data-hw-state]");
        if (!st) return;
        if (i === activeIdx && status === "playing") st.textContent = "playing";
        else if (i < activeIdx || (status === "done" && i <= activeIdx)) st.textContent = "done";
        else st.textContent = "";
      });
      if (btnStop) btnStop.disabled = status !== "playing";
      if (btnAll) {
        btnAll.textContent = status === "playing" ? "▶ Playing…" : "▶ Play all";
        btnAll.disabled = status === "playing";
      }
    }

    function playFrom(startIdx) {
      stopHwAudio();
      if (startIdx < 0 || startIdx >= clips.length) {
        setStates(clips.length - 1, "done");
        return;
      }
      hwQueueIndex = startIdx;
      hwAudio = new Audio();
      hwAudio.preload = "auto";
      hwAudio.src = clips[startIdx].src;
      setStates(startIdx, "playing");
      hwAudio.addEventListener("ended", function onEnd() {
        playFrom(startIdx + 1);
      });
      hwAudio.addEventListener("error", function () {
        playFrom(startIdx + 1);
      });
      var p = hwAudio.play();
      if (p && typeof p.catch === "function") {
        p.catch(function () {
          setStates(startIdx, "done");
          if (btnStop) btnStop.disabled = true;
          if (btnAll) {
            btnAll.disabled = false;
            btnAll.textContent = "▶ Play all";
          }
        });
      }
    }

    if (btnAll) {
      btnAll.addEventListener("click", function () {
        playFrom(0);
      });
    }
    if (btnStop) {
      btnStop.addEventListener("click", function () {
        stopHwAudio();
        setStates(-1, "idle");
        tracks.forEach(function (li) {
          li.classList.remove("is-playing", "is-done");
          var st = li.querySelector("[data-hw-state]");
          if (st) st.textContent = "";
        });
        btnStop.disabled = true;
        if (btnAll) {
          btnAll.disabled = false;
          btnAll.textContent = "▶ Play all";
        }
      });
    }
    box.querySelectorAll("[data-hw-play]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var i = parseInt(btn.getAttribute("data-hw-play"), 10);
        if (!isNaN(i)) playFrom(i);
      });
    });
  }

  document.title = session.title + " · Fleabag Workshop";

  var backLink = document.querySelector("a.int-back");
  if (backLink) {
    backLink.setAttribute("href", "index.html#season-" + (session.season || 1));
  }

  var headIcon = document.getElementById("lesson-icon");
  var headTitle = document.getElementById("lesson-title");
  var headTag = document.getElementById("lesson-tag");
  var seasonNum = session.season || 1;
  if (headIcon) headIcon.textContent = session.icon;
  if (headTitle) {
    headTitle.textContent =
      "Season " + seasonNum + " · Episode " + session.num + " · " + session.title.replace(/^Episode\s+\d+\s*[·•\-–—]\s*/i, "");
  }
  if (headTag) {
    headTag.textContent =
      session.tagline + " · " + (session.beats ? session.beats.length : 0) + " discussion beats";
  }

  var headSyn = document.getElementById("lesson-synopsis");
  if (headSyn) {
    headSyn.textContent = session.synopsis || "";
    headSyn.hidden = !session.synopsis;
  }

  (function mountSpeakChip() {
    var host = document.getElementById("fb-speak-chip-host");
    if (
      host &&
      window.FLEABAG_SPEAK_DESK &&
      typeof window.FLEABAG_SPEAK_DESK.mountCourseChip === "function"
    ) {
      window.FLEABAG_SPEAK_DESK.mountCourseChip(host);
    }
  })();

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /** Phrases for the current beat only (not accumulated across beats) */
  function currentBeatPhrases(screen) {
    return (screen && screen.phrases) || [];
  }

  function allBeatPhrases() {
    var list = [];
    var seen = {};
    flow.forEach(function (scr) {
      if (scr.kind !== "beat") return;
      (scr.phrases || []).forEach(function (p) {
        var key = String(p).toLowerCase();
        if (!key || seen[key]) return;
        seen[key] = 1;
        list.push(p);
      });
    });
    return list;
  }

  function getImprovStickers() {
    var fromSession =
      session && session.finale && session.finale.stickers
        ? session.finale.stickers
        : null;
    if (fromSession && fromSession.length) return fromSession;
    return allBeatPhrases().map(function (p) {
      return { phrase: p, use: "" };
    });
  }

  var calledPhrases = {};

  function renderImprovStickers(stickers) {
    if (!stickers.length) {
      return '<p class="fb-tape-empty">Add cool phrases on the beats — they’ll land here as stickers.</p>';
    }
    var rotates = [-3, 2, -2, 3, -2, 2, -3, 2, -1, 3];
    return (
      '<div class="fb-sticker-wall" aria-label="Cool phrases for improv — click when someone uses one">' +
      stickers
        .map(function (s, i) {
          var phrase = s.phrase || s.text || String(s);
          var use = s.use || s.example || "";
          var rot = rotates[i % rotates.length];
          var key = String(phrase).toLowerCase();
          var called = !!calledPhrases[key];
          return (
            '<button type="button" class="fb-sticker' +
            (called ? " is-called" : "") +
            '" style="--fb-rot:' +
            rot +
            'deg" data-phrase="' +
            escapeHtml(key) +
            '" aria-pressed="' +
            (called ? "true" : "false") +
            '" title="Click when someone says this">' +
            '<span class="fb-sticker-mark" aria-hidden="true">✓</span>' +
            '<span class="fb-sticker-phrase">' +
            escapeHtml(phrase) +
            "</span>" +
            (use
              ? '<span class="fb-sticker-use">(' + escapeHtml(use) + ")</span>"
              : "") +
            "</button>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function bindStickerWall(root) {
    var wall = root && root.querySelector(".fb-sticker-wall");
    if (!wall) return;
    var countEl = root.querySelector("[data-fb-called-count]");
    function refreshCount() {
      var n = wall.querySelectorAll(".fb-sticker.is-called").length;
      if (countEl) countEl.textContent = String(n);
    }
    wall.querySelectorAll(".fb-sticker").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var on = btn.classList.toggle("is-called");
        btn.setAttribute("aria-pressed", on ? "true" : "false");
        var key = btn.getAttribute("data-phrase");
        if (key) {
          if (on) calledPhrases[key] = 1;
          else delete calledPhrases[key];
        }
        refreshCount();
      });
    });
    refreshCount();
  }

  function normPhraseKey(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[\u2018\u2019\u02bc\u0060]/g, "'")
      .replace(/\s+/g, " ")
      .trim();
  }

  function collectPhraseClips(forScreen) {
    var map = {};
    function add(list) {
      (list || []).forEach(function (row) {
        if (!row || !row.phrase) return;
        var key = normPhraseKey(row.phrase);
        var clips = [];
        if (row.clips && row.clips.length) {
          row.clips.forEach(function (c) {
            if (!c || !c.videoUrl) return;
            clips.push({
              videoUrl: String(c.videoUrl),
              label: String(c.label || row.phrase),
            });
          });
        } else if (row.videoUrl) {
          clips.push({
            videoUrl: String(row.videoUrl),
            label: String(row.label || row.phrase),
          });
        }
        if (!clips.length) return;
        map[key] = clips;
      });
    }
    if (forScreen && forScreen.kind === "beat") {
      add(forScreen.phraseClips);
    } else {
      flow.forEach(function (scr) {
        if (scr.kind === "beat") add(scr.phraseClips);
      });
    }
    return map;
  }

  function renderTape(phrases, mode, screen) {
    var title =
      mode === "finale"
        ? "Cool words · use these in the improv"
        : "Cool words · on screen";
    var clipMap = collectPhraseClips(screen);
    var listHtml = phrases.length
      ? '<ul class="fb-tape-list">' +
        phrases
          .map(function (p) {
            var key = normPhraseKey(p);
            var clips = clipMap[key];
            if (clips && clips.length) {
              var payload = "";
              try {
                payload = escapeHtml(JSON.stringify(clips));
              } catch (e) {
                payload = "[]";
              }
              return (
                '<li class="fb-tape-item fb-tape-item--clip">' +
                '<button type="button" class="fb-tape-clip-btn" data-fb-phrase-clips="' +
                payload +
                '" data-fb-phrase-label="' +
                escapeHtml(p) +
                '" title="Play short clip">' +
                '<span class="fb-tape-clip-ico" aria-hidden="true">▶</span>' +
                "<span>" +
                escapeHtml(p) +
                "</span></button></li>"
              );
            }
            return '<li class="fb-tape-item">' + escapeHtml(p) + "</li>";
          })
          .join("") +
        "</ul>"
      : "";

    var speakSide = "";
    if (
      screen &&
      screen.kind === "beat" &&
      (screen.speak || screen.lexRound || screen.exampleRound)
    ) {
      speakSide = renderSpeakSide(screen);
    }

    if (!phrases.length && !speakSide) return "";

    return (
      '<aside class="fb-tape' +
      (phrases.length ? "" : " fb-tape--speak-only") +
      '" aria-label="' +
      (phrases.length ? "Cool words" : "Speaking") +
      '">' +
      (phrases.length
        ? '<div class="fb-tape-head">' +
          escapeHtml(title) +
          " · " +
          phrases.length +
          "</div>" +
          listHtml
        : "") +
      speakSide +
      "</aside>"
    );
  }

  function openPhraseClip(clips, phraseLabel) {
    if (!clips || !clips.length) return;
    var old = document.getElementById("fb-phrase-clip");
    if (old) old.remove();

    var idx = 0;
    var layer = document.createElement("div");
    layer.id = "fb-phrase-clip";
    layer.className = "fb-phrase-clip";
    layer.setAttribute("role", "dialog");
    layer.setAttribute("aria-modal", "true");
    document.body.appendChild(layer);
    document.body.classList.add("fb-phrase-clip-open");

    function close() {
      var v = layer.querySelector("video");
      if (v) {
        try {
          v.pause();
        } catch (e) {}
      }
      document.body.classList.remove("fb-phrase-clip-open");
      layer.remove();
    }
    layer._fbClose = close;

    function show(i) {
      idx = ((i % clips.length) + clips.length) % clips.length;
      var clip = clips[idx];
      var multi = clips.length > 1;
      layer.innerHTML =
        '<div class="fb-phrase-clip-panel">' +
        '<header class="fb-phrase-clip-head">' +
        "<div>" +
        '<p class="fb-phrase-clip-kicker">Phrase clip</p>' +
        "<h2>" +
        escapeHtml(phraseLabel || "Cool word") +
        "</h2>" +
        (clip.label && clip.label !== phraseLabel
          ? '<p class="fb-phrase-clip-sub">' + escapeHtml(clip.label) + "</p>"
          : "") +
        "</div>" +
        '<button type="button" class="fb-phrase-clip-x" data-fb-phrase-close aria-label="Close">×</button>' +
        "</header>" +
        '<div class="fb-phrase-clip-video">' +
        '<video controls autoplay playsinline preload="metadata" src="' +
        mediaSrcAttr(clip.videoUrl) +
        '"></video></div>' +
        (multi
          ? '<div class="fb-phrase-clip-nav">' +
            '<button type="button" class="fb-phrase-clip-nav-btn" data-fb-phrase-prev>← Prev</button>' +
            '<button type="button" class="fb-phrase-clip-nav-btn fb-phrase-clip-nav-btn--next" data-fb-phrase-next>Next →</button>' +
            "</div>"
          : "") +
        '<p class="fb-phrase-clip-tip">Short line from the episode · Esc to close' +
        (multi ? " · Next for another take" : "") +
        "</p></div>";

      layer.querySelector("[data-fb-phrase-close]").addEventListener("click", close);
      var prev = layer.querySelector("[data-fb-phrase-prev]");
      var next = layer.querySelector("[data-fb-phrase-next]");
      if (prev) {
        prev.addEventListener("click", function () {
          show(idx - 1);
        });
      }
      if (next) {
        next.addEventListener("click", function () {
          show(idx + 1);
        });
      }
      var video = layer.querySelector("video");
      if (video && multi) {
        video.addEventListener("ended", function () {
          if (idx < clips.length - 1) show(idx + 1);
        });
      }
    }

    layer.addEventListener("click", function (e) {
      if (e.target === layer) close();
    });
    show(0);
  }

  function bindPhraseClips(root) {
    if (!root) return;
    root.querySelectorAll("[data-fb-phrase-clips]").forEach(function (btn) {
      if (btn._fbPhraseBound) return;
      btn._fbPhraseBound = true;
      btn.addEventListener("click", function () {
        var clips = [];
        try {
          clips = JSON.parse(btn.getAttribute("data-fb-phrase-clips") || "[]") || [];
        } catch (e) {
          clips = [];
        }
        openPhraseClip(clips, btn.getAttribute("data-fb-phrase-label") || "");
      });
    });
    // legacy single-url buttons if any remain
    root.querySelectorAll("[data-fb-phrase-clip]").forEach(function (btn) {
      if (btn._fbPhraseBound) return;
      btn._fbPhraseBound = true;
      btn.addEventListener("click", function () {
        var url = btn.getAttribute("data-fb-phrase-clip");
        if (!url) return;
        openPhraseClip(
          [{ videoUrl: url, label: btn.getAttribute("data-fb-phrase-label") || "" }],
          btn.getAttribute("data-fb-phrase-label") || ""
        );
      });
    });
  }

  function micPadFor(mode, sec, label, prompt, coachHints) {
    if (
      window.FLEABAG_SPEAK_DESK &&
      typeof window.FLEABAG_SPEAK_DESK.micPadHtml === "function"
    ) {
      return window.FLEABAG_SPEAK_DESK.micPadHtml({
        mode: mode,
        targetSec: sec,
        label: label,
        prompt: prompt || "",
        coachHints: coachHints || [],
      });
    }
    return "";
  }

  function hintsWrap(subtitle, bodyHtml, count) {
    if (!bodyHtml) return "";
    var n = count != null ? count : "";
    return (
      '<details class="fb-hints">' +
      '<summary class="fb-hints-sum">' +
      '<span class="fb-hints-pill">Hints' +
      (n !== "" ? " · " + n : "") +
      "</span>" +
      (subtitle
        ? '<span class="fb-hints-sub">' + escapeHtml(subtitle) + "</span>"
        : "") +
      "</summary>" +
      '<div class="fb-hints-body">' +
      bodyHtml +
      "</div></details>"
    );
  }

  function renderSpeakSide(screen) {
    var s = screen.speak || {};
    var lex = screen.lexRound || null;
    var exRound = screen.exampleRound || null;
    var questions = s.questions || [];
    var starters = s.starters || [];
    var mission = s.mission || "Answer in English · use the tape phrases.";
    var phrases = screen.phrases || [];
    var n = questions.length;

    function normalizeQ(item) {
      if (typeof item === "string") return { q: item, examples: [] };
      return {
        q: item.q || item.text || "",
        examples: item.examples || item.bridges || [],
      };
    }

    var qsHtml = questions.length
      ? questions
          .map(function (item, i) {
            var row = normalizeQ(item);
            var ex =
              row.examples && row.examples.length
                ? hintsWrap(
                    "Bridge examples — pick one if you freeze",
                    '<ul class="fb-dq-examples">' +
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
              '<article class="fb-dq">' +
              '<div class="fb-dq-num">Question ' +
              (i + 1) +
              "</div>" +
              '<p class="fb-dq-text">' +
              escapeHtml(row.q) +
              "</p>" +
              ex +
              micPadFor(
                "deep",
                90,
                "Q" + (i + 1) + " · Discussion",
                row.q,
                row.examples && row.examples.length
                  ? [
                      {
                        title: "Bridge examples — pick one if you freeze",
                        lines: row.examples,
                      },
                    ]
                  : []
              ) +
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

    var tapeHtml = phrases.length
      ? '<ul class="fb-fs-tape">' +
        phrases
          .map(function (p) {
            return "<li>" + escapeHtml(p) + "</li>";
          })
          .join("") +
        "</ul>"
      : "";

    var drills = (lex && lex.drills) || [];
    var drillsHtml = drills.length
      ? drills
          .map(function (d, i) {
            var bankHint = d.bank
              ? hintsWrap(
                  "Word bank · chunks to steal",
                  '<p class="fb-lex-bank">' + escapeHtml(d.bank) + "</p>",
                  null
                )
              : "";
            return (
              '<article class="fb-dq fb-dq--lex">' +
              '<div class="fb-dq-num">Pattern ' +
              (i + 1) +
              " · " +
              escapeHtml(d.label || "") +
              "</div>" +
              '<p class="fb-dq-text">' +
              escapeHtml(d.task || "") +
              "</p>" +
              bankHint +
              micPadFor(
                "lex",
                45,
                "Pattern " + (i + 1) + " · " + (d.label || "Lexis"),
                d.task || d.bank || "",
                d.bank
                  ? [{ title: "Word bank · chunks to steal", text: d.bank }]
                  : []
              ) +
              "</article>"
            );
          })
          .join("")
      : "";

    var exItems = (exRound && exRound.items) || [];
    var exItemsHtml = exItems.length
      ? exItems
          .map(function (item, i) {
            var models = item.models || (item.model ? [item.model] : []);
            var hintBits = "";
            if (item.bank) {
              hintBits +=
                '<p class="fb-lex-bank">' + escapeHtml(item.bank) + "</p>";
            }
            if (models.length) {
              hintBits +=
                '<div class="fb-dq-ex-label">Model lines</div><ul class="fb-ex-models">' +
                models
                  .map(function (m) {
                    return "<li>“" + escapeHtml(m) + "”</li>";
                  })
                  .join("") +
                "</ul>";
            }
            var hintBlock = hintBits
              ? hintsWrap(
                  "Bank + models",
                  hintBits,
                  (item.bank ? 1 : 0) + models.length
                )
              : "";
            var coachHints = [];
            if (item.bank) {
              coachHints.push({
                title: "Word bank",
                text: item.bank,
              });
            }
            if (models.length) {
              coachHints.push({
                title: "Model lines",
                lines: models,
              });
            }
            return (
              '<article class="fb-dq fb-dq--ex">' +
              '<div class="fb-dq-num">Situation ' +
              (i + 1) +
              (item.label ? " · " + escapeHtml(item.label) : "") +
              "</div>" +
              '<p class="fb-ex-prompt">' +
              escapeHtml(item.say || item.task || "") +
              "</p>" +
              hintBlock +
              micPadFor(
                "ex",
                60,
                "Situation " +
                  (i + 1) +
                  (item.label ? " · " + item.label : ""),
                item.say || item.task || "",
                coachHints
              ) +
              "</article>"
            );
          })
          .join("")
      : "";

    var lexBtn = lex
      ? '<button type="button" class="fb-speak-open fb-speak-open--tape fb-speak-open--lex" data-fb-open="lex" aria-haspopup="dialog">' +
        '<span class="fb-speak-open-kicker">1 · Warm-up</span>' +
        '<span class="fb-speak-open-title">' +
        escapeHtml(lex.title || "Lexis round") +
        "</span>" +
        '<span class="fb-speak-open-hint">' +
        (drills.length ? drills.length + " patterns" : "patterns") +
        "</span></button>"
      : "";

    var exBtn = exRound
      ? '<button type="button" class="fb-speak-open fb-speak-open--tape fb-speak-open--ex" data-fb-open="ex" aria-haspopup="dialog">' +
        '<span class="fb-speak-open-kicker">2 · Into speech</span>' +
        '<span class="fb-speak-open-title">' +
        escapeHtml(exRound.title || "Example talk") +
        "</span>" +
        '<span class="fb-speak-open-hint">' +
        (exItems.length ? exItems.length + " situations · tell with the phrase" : "situations") +
        "</span></button>"
      : "";

    var deepBtn = questions.length
      ? '<button type="button" class="fb-speak-open fb-speak-open--tape" data-fb-open="deep" aria-haspopup="dialog">' +
        '<span class="fb-speak-open-kicker">3 · Your turn</span>' +
        '<span class="fb-speak-open-title">Discussion</span>' +
        '<span class="fb-speak-open-hint">' +
        (n ? n + " questions · deeper" : "deeper") +
        "</span></button>"
      : "";

    var lexFs = lex
      ? '<div class="fb-discuss-fs" hidden data-fb-fs="lex" role="dialog" aria-modal="true" aria-label="Lexis round">' +
        '<div class="fb-discuss-fs-inner">' +
        '<header class="fb-discuss-fs-head">' +
        "<div>" +
        '<p class="fb-discuss-fs-kicker">1 · Warm-up · patterns</p>' +
        '<h2 class="fb-discuss-fs-title">' +
        escapeHtml(lex.title || "Lexis round") +
        "</h2>" +
        '<p class="fb-discuss-fs-mission">' +
        escapeHtml(
          lex.mission ||
            "Get the chunks in your mouth first."
        ) +
        "</p></div>" +
        '<button type="button" class="fb-discuss-fs-close" data-fb-close>Close \u2715</button>' +
        "</header>" +
        '<div class="fb-dq-list">' +
        drillsHtml +
        "</div>" +
        '<p class="fb-fs-foot">Pairs · 20–30 s per pattern · then Example talk</p>' +
        "</div></div>"
      : "";

    var exFs = exRound
      ? '<div class="fb-discuss-fs" hidden data-fb-fs="ex" role="dialog" aria-modal="true" aria-label="Example talk">' +
        '<div class="fb-discuss-fs-inner">' +
        '<header class="fb-discuss-fs-head">' +
        "<div>" +
        '<p class="fb-discuss-fs-kicker">2 · Into speech</p>' +
        '<h2 class="fb-discuss-fs-title">' +
        escapeHtml(exRound.title || "Example talk") +
        "</h2>" +
        '<p class="fb-discuss-fs-mission">' +
        escapeHtml(
          exRound.mission ||
            "See the context · then tell a real situation using the phrase."
        ) +
        "</p></div>" +
        '<button type="button" class="fb-discuss-fs-close" data-fb-close>Close \u2715</button>' +
        "</header>" +
        '<div class="fb-dq-list">' +
        exItemsHtml +
        "</div>" +
        '<p class="fb-fs-foot">A tells a situation · B listens for the target phrase · swap</p>' +
        "</div></div>"
      : "";

    var deepFs = qsHtml
      ? '<div class="fb-discuss-fs" hidden data-fb-fs="deep" role="dialog" aria-modal="true" aria-label="Discussion">' +
        '<div class="fb-discuss-fs-inner">' +
        '<header class="fb-discuss-fs-head">' +
        "<div>" +
        '<p class="fb-discuss-fs-kicker">3 · Talk about it</p>' +
        '<h2 class="fb-discuss-fs-title">Discussion</h2>' +
        '<p class="fb-discuss-fs-mission">' +
        escapeHtml(mission) +
        "</p></div>" +
        '<button type="button" class="fb-discuss-fs-close" data-fb-close>Close \u2715</button>' +
        "</header>" +
        (tapeHtml
          ? '<div class="fb-fs-tape-wrap"><div class="fb-dq-ex-label">Cool words · use these</div>' +
            tapeHtml +
            "</div>"
          : "") +
        startHtml +
        '<div class="fb-dq-list">' +
        qsHtml +
        "</div>" +
        '<p class="fb-fs-foot">Partner A speaks · Partner B listens · then swap · Esc to close</p>' +
        "</div></div>"
      : "";

    return (
      '<div class="fb-tape-discuss">' +
      lexBtn +
      exBtn +
      deepBtn +
      (lexBtn || exBtn || deepBtn
        ? '<p class="fb-speak-peek"><strong>Lexis</strong> → <strong>Example talk</strong> → <strong>Discussion</strong></p>'
        : "") +
      "</div>" +
      lexFs +
      exFs +
      deepFs
    );
  }

  function bindDiscussUi(root) {
    if (!root) return;
    var opens = root.querySelectorAll("[data-fb-open]");
    if (!opens.length) return;

    function closeAll() {
      document.querySelectorAll(".fb-discuss-fs").forEach(function (fs) {
        fs.hidden = true;
        if (fs._fbHome && fs.parentNode === document.body) {
          fs._fbHome.appendChild(fs);
        }
      });
      document.body.classList.remove("fb-discuss-fs-open");
    }

    function openFs(id) {
      closeAll();
      var fs = root.querySelector('[data-fb-fs="' + id + '"]');
      if (!fs) return;
      if (!fs._fbHome) fs._fbHome = fs.parentNode;
      document.body.appendChild(fs);
      fs.hidden = false;
      document.body.classList.add("fb-discuss-fs-open");
      var closeBtn = fs.querySelector("[data-fb-close]");
      if (closeBtn) closeBtn.focus();
      fs._fbClose = closeAll;
      if (
        window.FLEABAG_SPEAK_DESK &&
        typeof window.FLEABAG_SPEAK_DESK.bindPads === "function"
      ) {
        window.FLEABAG_SPEAK_DESK.bindPads(fs);
      }
    }

    opens.forEach(function (btn) {
      btn.addEventListener("click", function () {
        openFs(btn.getAttribute("data-fb-open"));
      });
    });

    root.querySelectorAll("[data-fb-fs]").forEach(function (fs) {
      var closeBtn = fs.querySelector("[data-fb-close]");
      if (closeBtn) closeBtn.addEventListener("click", closeAll);
      fs.addEventListener("click", function (e) {
        if (e.target === fs) closeAll();
      });
      fs._fbClose = closeAll;
    });

    if (
      window.FLEABAG_SPEAK_DESK &&
      typeof window.FLEABAG_SPEAK_DESK.bindPads === "function"
    ) {
      window.FLEABAG_SPEAK_DESK.bindPads(root);
    }
  }

  if (!window.__fbDiscussEscBound) {
    window.__fbDiscussEscBound = true;
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      var phraseClip = document.getElementById("fb-phrase-clip");
      if (phraseClip && typeof phraseClip._fbClose === "function") {
        phraseClip._fbClose();
        return;
      }
      if (document.body.classList.contains("fb-vault-open")) {
        document.body.classList.remove("fb-vault-open");
        var vault = document.getElementById("fb-vault");
        if (vault) vault.remove();
        return;
      }
      if (document.body.classList.contains("fb-mic-live")) {
        if (
          window.FLEABAG_SPEAK_DESK &&
          typeof window.FLEABAG_SPEAK_DESK.closeOverlay === "function"
        ) {
          window.FLEABAG_SPEAK_DESK.closeOverlay();
        }
        return;
      }
      if (document.getElementById("fb-talk-reel")) {
        document.body.classList.remove("fb-talk-reel-open");
        var reel = document.getElementById("fb-talk-reel");
        if (reel) reel.remove();
        return;
      }
      var open = document.querySelector(".fb-discuss-fs:not([hidden])");
      if (open && typeof open._fbClose === "function") open._fbClose();
    });
  }

  function mediaSrcAttr(url) {
    var s = String(url || "");
    if (/^https?:\/\//i.test(s)) return escapeHtml(s);
    // Relative site paths — encode spaces/special chars, keep slashes
    try {
      return escapeHtml(encodeURI(decodeURI(s)));
    } catch (e) {
      return escapeHtml(encodeURI(s));
    }
  }

  function renderWatchBody(screen) {
    var w = screen.watch || {};
    var parts = [];
    if (w.videoUrl) {
      var src = String(w.videoUrl);
      var isYt =
        /youtu\.be\/|youtube\.com\/(watch|embed|shorts)/i.test(src);
      if (isYt) {
        var ytId = "";
        var m =
          src.match(/youtu\.be\/([^?&#/]+)/i) ||
          src.match(/[?&]v=([^?&#]+)/i) ||
          src.match(/\/embed\/([^?&#/]+)/i) ||
          src.match(/\/shorts\/([^?&#/]+)/i);
        if (m) ytId = m[1];
        if (ytId) {
          parts.push(
            '<div class="fb-video-wrap">' +
              '<iframe class="fb-video-frame" src="https://www.youtube-nocookie.com/embed/' +
              escapeHtml(ytId) +
              '" title="Clip" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>'
          );
        }
      } else {
        parts.push(
          '<div class="fb-video-wrap">' +
            '<video class="fb-video" controls preload="metadata" playsinline' +
            (w.poster ? ' poster="' + mediaSrcAttr(w.poster) + '"' : "") +
            ' src="' +
            mediaSrcAttr(src) +
            '">Sorry — this browser can’t play the clip.</video></div>'
        );
      }
    }
    if (w.timecode || w.note) {
      parts.push(
        '<div class="fb-watch-meta">' +
          (w.timecode
            ? '<span class="fb-watch-tc">' + escapeHtml(w.timecode) + "</span>"
            : "") +
          (w.note ? "<p>" + escapeHtml(w.note) + "</p>" : "") +
          "</div>"
      );
    }
    if (!parts.length) {
      return (
        '<div class="int-slot-empty fb-watch-empty">' +
        "Drop a clip here later · or play from your own file and keep only the timecode on the page." +
        "</div>"
      );
    }
    return parts.join("");
  }

  function renderContextBody(screen) {
    var c = screen.context || {};
    var html = "";
    if (c.tone) {
      html += '<p class="fb-context-tone"><strong>' + escapeHtml(c.tone) + "</strong></p>";
    }
    if (c.meanings && c.meanings.length) {
      html +=
        '<div class="fb-context-label">Meaning</div><ul class="fb-context-examples">' +
        c.meanings
          .map(function (ex) {
            return "<li>" + escapeHtml(ex) + "</li>";
          })
          .join("") +
        "</ul>";
    }
    var examples = c.examples || [];
    if (examples.length) {
      var lexList =
        '<ul class="fb-context-examples fb-context-examples--say">' +
        examples
          .map(function (ex) {
            var isHead = /^[A-Z0-9][A-Z0-9 /…'.\-]{1,48} —/.test(
              String(ex).trim()
            );
            return (
              "<li" +
              (isHead ? ' class="fb-lex-head"' : "") +
              ">" +
              escapeHtml(ex) +
              "</li>"
            );
          })
          .join("") +
        "</ul>";
      html += hintsWrap(
        "Lexis · what goes with these words",
        lexList,
        examples.length
      );
    }
    if (c.html) html += '<div class="fb-context-html">' + c.html + "</div>";
    if (!html) {
      return '<div class="int-slot-empty">Meaning · examples with the phrases</div>';
    }
    return html;
  }

  function renderBlocks(screen) {
    var blocks = (screen.blocks || []).filter(function (id) {
      // Discussion lives in the Cool words column
      return id !== "speak";
    });
    if (!blocks.length) return "";
    return (
      '<div class="int-slots fb-beat-blocks">' +
      blocks
        .map(function (id) {
          var meta = blockMeta[id] || { title: id, hint: "" };
          var extra = "";
          if (id === "watch") {
            extra = renderWatchBody(screen);
          } else if (id === "phrases" && screen.phrases && screen.phrases.length) {
            extra =
              '<ul class="fb-beat-phrases">' +
              screen.phrases
                .map(function (p) {
                  return "<li>" + escapeHtml(p) + "</li>";
                })
                .join("") +
              "</ul>";
          } else if (id === "phrases") {
            extra = '<div class="int-slot-empty">1–3 cool chunks from this beat</div>';
          } else if (id === "context") {
            extra = renderContextBody(screen);
          } else if (id === "shadow") {
            extra =
              '<div class="int-slot-empty">Shadow line(s) — echo once in class</div>';
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

  function renderStepper() {
    if (!elStepper) return;
    elStepper.classList.add("fb-beat-stepper");
    elStepper.innerHTML = flow
      .map(function (scr, i) {
        var cls = "int-step";
        if (i === stepIndex) cls += " is-active";
        else if (i < stepIndex) cls += " is-done";
        if (scr.kind === "finale") cls += " is-finale";
        if (scr.kind === "homework") cls += " is-hw";
        if (scr.optional) cls += " is-optional";
        var stepLabel = scr.optional ? scr.label + " · opt" : scr.label;
        return (
          '<div class="' +
          cls +
          '" data-step="' +
          i +
          '" title="' +
          escapeHtml(scr.optional ? scr.label + " (optional)" : scr.label) +
          '">' +
          '<button type="button" class="int-step-btn" aria-current="' +
          (i === stepIndex ? "step" : "false") +
          '">' +
          '<span class="int-step-dot">' +
          (i < stepIndex ? "✓" : escapeHtml(scr.short)) +
          "</span>" +
          '<span class="int-step-label">' +
          escapeHtml(stepLabel) +
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
        ? (screen.optional ? "Optional beat " : "Discussion beat ") +
          screen.short +
          " / " +
          (session.beats || []).length
        : screen.kind === "finale"
          ? "Finale · improvisation"
          : "Take home";

    var body = "";
    var tape = "";

    if (screen.kind === "beat") {
      body = renderBlocks(screen);
      tape = renderTape(currentBeatPhrases(screen), "beat", screen);
    } else if (screen.kind === "finale") {
      var stickers = getImprovStickers();
      body =
        '<div class="fb-finale-full">' +
        '<header class="fb-finale-full-head">' +
        '<div class="fb-tape-head fb-finale-banner">Cool words · improv · <span data-fb-called-count>0</span>/' +
        stickers.length +
        " called</div>" +
        '<p class="fb-finale-prompt">' +
        escapeHtml(screen.prompt) +
        "</p>" +
        '<p class="fb-finale-mission">Tap a sticker when someone uses it — cyan = waiting, gold = called. Aim for 5+.</p>' +
        "</header>" +
        renderImprovStickers(stickers) +
        "</div>";
      tape = "";
    } else {
      var hwStickers = getImprovStickers().filter(function (s) {
        return (s.use || s.example || "").trim();
      });
      var hwClips = getHwClips(screen);
      var vaultDeck =
        window.FLEABAG_PHRASE_VAULT &&
        typeof window.FLEABAG_PHRASE_VAULT.collectDeck === "function"
          ? window.FLEABAG_PHRASE_VAULT.collectDeck(session)
          : [];
      var vaultBtn =
        window.FLEABAG_PHRASE_VAULT &&
        typeof window.FLEABAG_PHRASE_VAULT.launchBtnHtml === "function"
          ? window.FLEABAG_PHRASE_VAULT.launchBtnHtml(vaultDeck)
          : "";
      body =
        '<article class="int-slot">' +
        '<div class="int-slot-head">' +
        '<span class="int-slot-title">Take home</span>' +
        '<span class="int-slot-hint">Audio · vault · games</span></div>' +
        '<p class="fb-hw-note">' +
        escapeHtml(screen.note) +
        "</p>" +
        renderHwAudio(hwClips) +
        (vaultBtn || hwStickers.length
          ? '<div class="fb-hw-games">' +
            vaultBtn +
            (hwStickers.length
              ? '<button type="button" class="fb-fyp-launch" id="btn-fyp-launch">' +
                '<span class="fb-fyp-launch-kicker">Home game</span>' +
                '<span class="fb-fyp-launch-title">Sticker FYP</span>' +
                '<span class="fb-fyp-launch-sub">Vertical · pick 1 of 4 · ' +
                hwStickers.length +
                " cards</span></button>" +
                '<button type="button" class="fb-fyp-launch fb-fyp-launch--swipe" id="btn-swipe-launch">' +
                '<span class="fb-fyp-launch-kicker">Home game</span>' +
                '<span class="fb-fyp-launch-title">Sticker Swipe</span>' +
                '<span class="fb-fyp-launch-sub">6 levels · 10 cards · Tinder swipe</span></button>'
              : "") +
            "</div>"
          : "") +
        "</article>";
      tape = renderTape(allBeatPhrases(), "beat", screen);
    }

    stopHwAudio();

    elStage.innerHTML =
      '<div class="int-stage fb-stage' +
      (screen.kind === "finale" ? " fb-stage--finale" : "") +
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
      '<div class="int-stage-body fb-stage-body' +
      (screen.kind === "finale" ? " fb-stage-body--finale" : "") +
      '">' +
      '<div class="fb-main">' +
      body +
      "</div>" +
      tape +
      "</div></div>";

    elStage.classList.remove("int-stage--enter");
    void elStage.offsetWidth;
    elStage.classList.add("int-stage--enter");

    document.querySelectorAll("body > .fb-discuss-fs").forEach(function (fs) {
      fs.remove();
    });
    document.body.classList.remove("fb-discuss-fs-open");
    bindDiscussUi(elStage);
    bindStickerWall(elStage);
    bindFypLaunch(elStage);
    bindSwipeLaunch(elStage);
    bindVaultLaunch(elStage);
    bindPhraseClips(elStage);
    if (screen.kind === "homework") {
      bindHwAudio(elStage, getHwClips(screen));
    }
  }

  function bindVaultLaunch(root) {
    var btn = root.querySelector("#btn-vault-launch");
    if (!btn) return;
    btn.addEventListener("click", function () {
      if (
        !window.FLEABAG_PHRASE_VAULT ||
        typeof window.FLEABAG_PHRASE_VAULT.open !== "function"
      ) {
        window.alert("Phrase vault failed to load — Ctrl+F5.");
        return;
      }
      window.FLEABAG_PHRASE_VAULT.open({
        deck: window.FLEABAG_PHRASE_VAULT.collectDeck(session),
      });
    });
  }

  function hwStickersWithDef() {
    return getImprovStickers().filter(function (s) {
      return (s.def || s.definition || "").trim() && (s.phrase || s.text || "").trim();
    });
  }

  function bindFypLaunch(root) {
    var btn = root.querySelector("#btn-fyp-launch");
    if (!btn) return;
    btn.addEventListener("click", function () {
      if (!window.FLEABAG_STICKER_FYP || typeof window.FLEABAG_STICKER_FYP.open !== "function") {
        window.alert("Sticker FYP failed to load — hard-refresh the page (Ctrl+F5).");
        return;
      }
      var stickers = getImprovStickers().filter(function (s) {
        return (s.use || s.example || "").trim();
      });
      window.FLEABAG_STICKER_FYP.open({
        stickers: stickers,
        escapeHtml: escapeHtml,
      });
    });
  }

  function bindSwipeLaunch(root) {
    var btn = root.querySelector("#btn-swipe-launch");
    if (!btn) return;
    btn.addEventListener("click", function () {
      if (!window.FLEABAG_STICKER_SWIPE || typeof window.FLEABAG_STICKER_SWIPE.open !== "function") {
        window.alert("Sticker Swipe failed to load — hard-refresh the page (Ctrl+F5).");
        return;
      }
      var stickers = hwStickersWithDef();
      if (stickers.length < 2) {
        window.alert("Need definitions on stickers for Swipe — try Ep3 after refresh.");
        return;
      }
      window.FLEABAG_STICKER_SWIPE.open({
        stickers: stickers,
        escapeHtml: escapeHtml,
      });
    });
  }

  function updateNav() {
    if (elPrev) elPrev.disabled = stepIndex === 0;
    if (elNext) {
      elNext.textContent =
        stepIndex === flow.length - 1 ? "Finish session" : "Next →";
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
    stepIndex = idx;
    if (stepIndex > maxVisited) maxVisited = stepIndex;
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
      else window.location.href = "index.html";
    });
  }

  renderStepper();
  renderStage();
  updateNav();
})();
