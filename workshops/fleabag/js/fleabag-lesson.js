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
  if (!headSyn && headTag && headTag.parentNode) {
    headSyn = document.createElement("p");
    headSyn.id = "lesson-synopsis";
    headSyn.className = "fb-synopsis";
    headTag.parentNode.appendChild(headSyn);
  }
  if (headSyn) {
    headSyn.textContent = session.synopsis || "";
    headSyn.hidden = !session.synopsis;
  }

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

  function renderTape(phrases, mode, screen) {
    var title =
      mode === "finale"
        ? "Cool words · use these in the improv"
        : "Cool words · on screen";
    var listHtml = phrases.length
      ? '<ul class="fb-tape-list">' +
        phrases
          .map(function (p) {
            return "<li>" + escapeHtml(p) + "</li>";
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
                ? '<ul class="fb-dq-examples">' +
                  row.examples
                    .map(function (e) {
                      return "<li>" + escapeHtml(e) + "</li>";
                    })
                    .join("") +
                  "</ul>"
                : "";
            return (
              '<article class="fb-dq">' +
              '<div class="fb-dq-num">Question ' +
              (i + 1) +
              "</div>" +
              '<p class="fb-dq-text">' +
              escapeHtml(row.q) +
              "</p>" +
              (ex
                ? '<div class="fb-dq-ex-label">Bridge examples — pick one if you freeze</div>' +
                  ex
                : "") +
              "</article>"
            );
          })
          .join("")
      : "";

    var startHtml = starters.length
      ? '<div class="fb-dq-starters"><div class="fb-dq-ex-label">Start like this</div><ul>' +
        starters
          .map(function (line) {
            return "<li>" + escapeHtml(line) + "</li>";
          })
          .join("") +
        "</ul></div>"
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
            return (
              '<article class="fb-dq fb-dq--lex">' +
              '<div class="fb-dq-num">Pattern ' +
              (i + 1) +
              " · " +
              escapeHtml(d.label || "") +
              "</div>" +
              (d.bank
                ? '<p class="fb-lex-bank">' + escapeHtml(d.bank) + "</p>"
                : "") +
              '<p class="fb-dq-text">' +
              escapeHtml(d.task || "") +
              "</p></article>"
            );
          })
          .join("")
      : "";

    var exItems = (exRound && exRound.items) || [];
    var exItemsHtml = exItems.length
      ? exItems
          .map(function (item, i) {
            var models = item.models || (item.model ? [item.model] : []);
            var modelsHtml = models.length
              ? '<div class="fb-dq-ex-label">Context · model lines</div><ul class="fb-ex-models">' +
                models
                  .map(function (m) {
                    return "<li>“" + escapeHtml(m) + "”</li>";
                  })
                  .join("") +
                "</ul>"
              : "";
            return (
              '<article class="fb-dq fb-dq--ex">' +
              '<div class="fb-dq-num">Situation ' +
              (i + 1) +
              (item.label ? " · " + escapeHtml(item.label) : "") +
              "</div>" +
              (item.bank
                ? '<p class="fb-lex-bank">' + escapeHtml(item.bank) + "</p>"
                : "") +
              modelsHtml +
              '<p class="fb-ex-prompt">' +
              escapeHtml(item.say || item.task || "") +
              "</p></article>"
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
  }

  if (!window.__fbDiscussEscBound) {
    window.__fbDiscussEscBound = true;
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
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
      html +=
        '<div class="fb-context-label">Lexis · what goes with these words</div><ul class="fb-context-examples fb-context-examples--say">' +
        examples
          .map(function (ex) {
            var isHead = /^(FLAUNT|INAPPROPRIATE|I CAN.?T WAIT|IF IT.?S ANY CONSOLATION)/i.test(
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
      body =
        '<article class="int-slot">' +
        '<div class="int-slot-head">' +
        '<span class="int-slot-title">Take home</span>' +
        '<span class="int-slot-hint">Shadow · then play</span></div>' +
        '<p class="fb-hw-note">' +
        escapeHtml(screen.note) +
        "</p>" +
        (hwStickers.length
          ? '<div class="fb-hw-games">' +
            '<button type="button" class="fb-fyp-launch" id="btn-fyp-launch">' +
            '<span class="fb-fyp-launch-kicker">Home game</span>' +
            '<span class="fb-fyp-launch-title">Sticker FYP</span>' +
            '<span class="fb-fyp-launch-sub">Vertical · pick 1 of 4 · ' +
            hwStickers.length +
            " cards</span></button>" +
            '<button type="button" class="fb-fyp-launch fb-fyp-launch--swipe" id="btn-swipe-launch">' +
            '<span class="fb-fyp-launch-kicker">Home game</span>' +
            '<span class="fb-fyp-launch-title">Sticker Swipe</span>' +
            '<span class="fb-fyp-launch-sub">6 levels · 10 cards · Tinder swipe</span></button>' +
            "</div>"
          : "") +
        "</article>";
      tape = renderTape(allBeatPhrases(), "beat", screen);
    }

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
