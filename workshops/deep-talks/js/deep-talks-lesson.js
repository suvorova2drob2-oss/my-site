/**
 * Deep Talks — beat rail + sticky cool-words tape (Fleabag principle, text not video).
 */
(function () {
  var params = new URLSearchParams(window.location.search);
  var themeId = params.get("theme") || "";
  var theme = typeof DEEP_TALKS_getTheme === "function" ? DEEP_TALKS_getTheme(themeId) : null;

  var elRoot = document.getElementById("lesson-root");
  var elStepper = document.getElementById("lesson-stepper");
  var elStage = document.getElementById("lesson-stage");
  var elPrev = document.getElementById("btn-prev");
  var elNext = document.getElementById("btn-next");
  var elProgress = document.getElementById("lesson-progress");

  if (!theme || !elRoot || typeof DEEP_TALKS_buildFlow !== "function") {
    if (elRoot) {
      elRoot.innerHTML =
        '<div class="int-error"><p>Theme not found. <a class="int-back" href="index.html">Back to series</a></p></div>';
    }
    return;
  }

  var flow = DEEP_TALKS_buildFlow(theme);
  var blockMeta = window.DEEP_TALKS_BLOCK_META || {};
  var stepIndex = 0;
  var maxVisited = 0;
  var calledPhrases = {};

  document.title = theme.title + " · Deep Talks";

  var headIcon = document.getElementById("lesson-icon");
  var headTitle = document.getElementById("lesson-title");
  var headTag = document.getElementById("lesson-tag");
  var headLenses = document.getElementById("lesson-lenses");
  if (headIcon) headIcon.textContent = theme.icon;
  if (headTitle) headTitle.textContent = "Session " + theme.num + " · " + theme.title;
  if (headTag) headTag.textContent = theme.tagline;
  if (headLenses && theme.lenses && theme.lenses.length) {
    headLenses.innerHTML =
      "<strong>Go deep:</strong> " +
      theme.lenses
        .map(function (l) {
          return escapeHtml(l);
        })
        .join(" · ");
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
      '<details class="dt-hints">' +
      '<summary class="dt-hints-sum">' +
      '<span class="dt-hints-pill">Hints' +
      (n !== "" ? " · " + n : "") +
      "</span>" +
      (subtitle
        ? '<span class="dt-hints-sub">' + escapeHtml(subtitle) + "</span>"
        : "") +
      "</summary>" +
      '<div class="dt-hints-body">' +
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

  function currentBeatPhrases(screen) {
    return (screen && screen.phrases) || [];
  }

  function allBeatPhrases() {
    if (typeof DEEP_TALKS_allPhrases === "function") {
      return DEEP_TALKS_allPhrases(theme);
    }
    return [];
  }

  function renderReadBody(screen) {
    var r = screen.read || {};
    if (!r.html && !r.title) {
      return (
        '<div class="int-slot-empty">Drop a short reading passage here for this beat.</div>'
      );
    }
    return (
      '<div class="dt-read">' +
      (r.title ? '<h3 class="dt-read-title">' + escapeHtml(r.title) + "</h3>" : "") +
      '<div class="dt-read-body">' +
      (r.html || "") +
      "</div></div>"
    );
  }

  function renderContextBody(screen) {
    var c = screen.context || {};
    var html = "";
    if (c.tone) {
      html += '<p class="dt-context-tone"><strong>' + escapeHtml(c.tone) + "</strong></p>";
    }
    if (c.meanings && c.meanings.length) {
      html +=
        '<div class="dt-context-label">Meaning</div><ul class="dt-context-list">' +
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
        '<ul class="dt-context-list dt-context-list--say">' +
        examples
          .map(function (ex) {
            var isHead = /^[A-Z0-9][A-Z0-9 /…'.\-]{1,48} —/.test(String(ex).trim());
            return (
              "<li" +
              (isHead ? ' class="dt-lex-head"' : "") +
              ">" +
              escapeHtml(ex) +
              "</li>"
            );
          })
          .join("") +
        "</ul>";
      html += hintsWrap("Lexis · what goes with these words", lexList, examples.length);
    }
    if (!html) {
      return '<div class="int-slot-empty">Meaning · examples with the phrases</div>';
    }
    return html;
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
                    '<ul class="dt-dq-examples">' +
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
              '<article class="dt-dq">' +
              '<div class="dt-dq-num">Question ' +
              (i + 1) +
              "</div>" +
              '<p class="dt-dq-text">' +
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
      '<div class="dt-tape-discuss">' +
      '<div class="dt-tape-discuss-head">Talk</div>' +
      '<p class="dt-tape-mission">' +
      escapeHtml(mission) +
      "</p>" +
      startHtml +
      '<div class="dt-dq-list">' +
      qsHtml +
      "</div></div>"
    );
  }

  function renderTape(phrases, mode, screen) {
    var title =
      mode === "finale"
        ? "Cool words · use these in the improv"
        : "Cool words · on screen";
    var listHtml = phrases.length
      ? '<ul class="dt-tape-list">' +
        phrases
          .map(function (p) {
            var key = String(p).toLowerCase();
            var on = !!calledPhrases[key];
            return (
              '<li class="dt-tape-item' +
              (on ? " is-called" : "") +
              '">' +
              '<button type="button" class="dt-tape-btn" data-dt-phrase="' +
              escapeHtml(p) +
              '">' +
              escapeHtml(p) +
              "</button></li>"
            );
          })
          .join("") +
        "</ul>"
      : "";

    var speakSide = "";
    if (screen && screen.kind === "beat" && screen.speak) {
      speakSide = renderSpeakSide(screen);
    }

    if (!phrases.length && !speakSide) return "";

    return (
      '<aside class="dt-tape' +
      (phrases.length ? "" : " dt-tape--speak-only") +
      '" aria-label="' +
      (phrases.length ? "Cool words" : "Speaking") +
      '">' +
      (phrases.length
        ? '<div class="dt-tape-head">' +
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

  function renderBlocks(screen) {
    var blocks = (screen.blocks || []).filter(function (id) {
      return id !== "speak";
    });
    if (!blocks.length) return "";
    return (
      '<div class="int-slots dt-beat-blocks">' +
      blocks
        .map(function (id) {
          var meta = blockMeta[id] || { title: id, hint: "" };
          var extra = "";
          if (id === "read") {
            extra = renderReadBody(screen);
          } else if (id === "phrases" && screen.phrases && screen.phrases.length) {
            extra =
              '<ul class="dt-beat-phrases">' +
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

  function renderImprovStickers(phrases) {
    if (!phrases.length) {
      return '<p class="int-slot-empty">No cool words yet — fill beats first.</p>';
    }
    return (
      '<ul class="dt-improv-wall" id="dt-improv-wall">' +
      phrases
        .map(function (p) {
          var key = String(p).toLowerCase();
          var on = !!calledPhrases[key];
          return (
            '<li><button type="button" class="dt-improv-sticker' +
            (on ? " is-called" : "") +
            '" data-dt-phrase="' +
            escapeHtml(p) +
            '">' +
            escapeHtml(p) +
            "</button></li>"
          );
        })
        .join("") +
      "</ul>"
    );
  }

  function bindPhraseTaps(root) {
    if (!root) return;
    root.querySelectorAll("[data-dt-phrase]").forEach(function (btn) {
      if (btn._dtBound) return;
      btn._dtBound = true;
      btn.addEventListener("click", function () {
        var p = btn.getAttribute("data-dt-phrase") || "";
        var key = p.toLowerCase();
        calledPhrases[key] = !calledPhrases[key];
        btn.classList.toggle("is-called", !!calledPhrases[key]);
        var li = btn.closest(".dt-tape-item");
        if (li) li.classList.toggle("is-called", !!calledPhrases[key]);
        var countEl = root.querySelector("[data-dt-called-count]");
        if (countEl) {
          var n = 0;
          Object.keys(calledPhrases).forEach(function (k) {
            if (calledPhrases[k]) n++;
          });
          countEl.textContent = String(n);
        }
      });
    });
  }

  function renderStepper() {
    if (!elStepper) return;
    elStepper.classList.add("dt-beat-stepper");
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
      var called = 0;
      stickers.forEach(function (p) {
        if (calledPhrases[String(p).toLowerCase()]) called++;
      });
      body =
        '<div class="dt-finale-full">' +
        '<header class="dt-finale-full-head">' +
        '<div class="dt-tape-head dt-finale-banner">Cool words · improv · <span data-dt-called-count>' +
        called +
        "</span>/" +
        stickers.length +
        " called</div>" +
        '<p class="dt-finale-prompt">' +
        escapeHtml(screen.prompt) +
        "</p>" +
        '<p class="dt-finale-mission">Tap a phrase when someone uses it — gold = called. Aim for 5+.</p>' +
        "</header>" +
        renderImprovStickers(stickers) +
        "</div>";
      tape = "";
    } else {
      var hwList = allBeatPhrases();
      body =
        '<article class="int-slot">' +
        '<div class="int-slot-head">' +
        '<span class="int-slot-title">Take home</span>' +
        '<span class="int-slot-hint">Text · voice · tape phrases</span></div>' +
        '<p class="dt-hw-note">' +
        escapeHtml(screen.note) +
        "</p>" +
        (hwList.length
          ? '<div class="dt-hw-tape"><div class="dt-tape-head">Phrase bank · ' +
            hwList.length +
            "</div><ul class=\"dt-tape-list\">" +
            hwList
              .map(function (p) {
                return '<li class="dt-tape-item">' + escapeHtml(p) + "</li>";
              })
              .join("") +
            "</ul></div>"
          : "") +
        "</article>";
      tape = "";
    }

    elStage.innerHTML =
      '<div class="int-stage dt-stage' +
      (screen.kind === "finale" ? " dt-stage--finale" : "") +
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
      '<div class="int-stage-body dt-stage-body' +
      (screen.kind === "finale" ? " dt-stage-body--finale" : "") +
      '">' +
      '<div class="dt-main">' +
      body +
      "</div>" +
      tape +
      "</div></div>";

    elStage.classList.remove("int-stage--enter");
    void elStage.offsetWidth;
    elStage.classList.add("int-stage--enter");
    bindPhraseTaps(elStage);
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
