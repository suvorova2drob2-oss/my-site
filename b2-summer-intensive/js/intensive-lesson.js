/**
 * B2 Summer Speaking Intensive — beat rail + sticky cool-words tape + paper text.
 */
(function () {
  var params = new URLSearchParams(window.location.search);
  var themeId = params.get("theme") || "";
  var theme =
    typeof B2_INTENSIVE_getTheme === "function"
      ? B2_INTENSIVE_getTheme(themeId)
      : null;

  var elRoot = document.getElementById("lesson-root");
  var elStepper = document.getElementById("lesson-stepper");
  var elStage = document.getElementById("lesson-stage");
  var elPrev = document.getElementById("btn-prev");
  var elNext = document.getElementById("btn-next");
  var elProgress = document.getElementById("lesson-progress");

  if (!theme || !elRoot || typeof B2_INTENSIVE_buildFlow !== "function") {
    if (elRoot) {
      elRoot.innerHTML =
        '<div class="int-error"><p>Theme not found. <a class="int-back" href="index.html">Back to hub</a></p></div>';
    }
    return;
  }

  var flow = B2_INTENSIVE_buildFlow(theme);
  var blockMeta = window.B2_INTENSIVE_BLOCK_META || {};
  var stepIndex = 0;
  var maxVisited = 0;
  var calledPhrases = {};
  var phraseBatchIndex = 0;
  var CARD_BATCH = 10;

  document.title =
    "Lesson " + theme.num + " · " + theme.title + " · B2 Intensive";

  var headIcon = document.getElementById("lesson-icon");
  var headTitle = document.getElementById("lesson-title");
  var headTag = document.getElementById("lesson-tag");
  if (headIcon) headIcon.textContent = theme.icon;
  if (headTitle) headTitle.textContent = "Lesson " + theme.num + " · " + theme.title;
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
      String(p)
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

  function renderTape(phrases, mode, screen) {
    var title =
      mode === "finale"
        ? "Cool words · use these in the improv"
        : "Cool words · on screen";
    var listHtml = phrases.length
      ? '<ul class="si-tape-list">' +
        phrases
          .map(function (p) {
            var key = String(p).toLowerCase();
            var on = !!calledPhrases[key];
            return (
              '<li class="si-tape-item' +
              (on ? " is-called" : "") +
              '">' +
              '<button type="button" class="si-tape-btn" data-si-phrase="' +
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
      '<div class="int-slots si-beat-blocks">' +
      blocks
        .map(function (id) {
          var meta = blockMeta[id] || { title: id, hint: "" };
          var extra = "";
          if (id === "read") extra = renderReadBody(screen);
          else if (id === "context") extra = renderContextBody(screen);
          else if (id === "phrases" && screen.phrases && screen.phrases.length) {
            extra =
              '<ul class="si-beat-phrases">' +
              screen.phrases
                .map(function (p) {
                  return "<li>" + escapeHtml(p) + "</li>";
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
          var key = String(p).toLowerCase();
          var on = !!calledPhrases[key];
          var num = start + i + 1;
          return (
            '<button type="button" class="si-sticker' +
            (on ? " is-called" : "") +
            '" data-si-phrase="' +
            escapeHtml(p) +
            '" aria-pressed="' +
            (on ? "true" : "false") +
            '" title="Tap when someone says this">' +
            '<span class="si-sticker-mark" aria-hidden="true">✓</span>' +
            '<span class="si-sticker-num">' +
            num +
            "</span>" +
            '<span class="si-sticker-phrase">' +
            escapeHtml(p) +
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
      if (calledPhrases[String(p).toLowerCase()]) n++;
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
        '<p class="si-finale-mission">How to run it: learners speak · you tap each phrase you hear. Soft green ✓ = counted.</p>' +
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
      else window.location.href = "index.html";
    });
  }

  renderStepper();
  renderStage();
  updateNav();
})();
