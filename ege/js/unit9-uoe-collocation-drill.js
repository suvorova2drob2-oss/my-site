/**
 * Unit 9 CPE — collocation / idiom drill (content from Level 9 Use of English tasks).
 *
 * Pedagogy: **HeartReveal** — on a wrong Check, show the accepted answer(s), remove one life,
 * then advance (answer was revealed). See `.cursor/rules/u9-heart-reveal-trainer.mdc`.
 */
(function () {
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var HEART_SVG =
    '<svg class="u9-drill-heart" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function readEmbedded() {
    var el = document.getElementById("u9-drill-data");
    if (!el) return null;
    try {
      return JSON.parse(el.textContent.trim());
    } catch (e) {
      return null;
    }
  }

  function loadPack() {
    var emb = readEmbedded();
    if (emb && emb.items && emb.items.length) {
      return Promise.resolve(emb);
    }
    return fetch("items.json", { cache: "no-store" })
      .then(function (r) {
        if (!r.ok) throw new Error("fetch");
        return r.json();
      })
      .catch(function () {
        return emb;
      });
  }

  function wireDrillNext() {
    var sp = new URLSearchParams(window.location.search);
    var raw = sp.get("next");
    if (!raw) return;
    var strip = document.getElementById("drillNextStrip");
    var link = document.getElementById("drillNextLink");
    if (!strip || !link) return;
    var label = sp.get("nextLabel")
      ? decodeURIComponent(String(sp.get("nextLabel")).replace(/\+/g, " "))
      : "Next";
    var href = String(raw).trim();
    try {
      var pathPart = href.split(/[?#]/)[0] || "";
      var resolved;
      if (/^https?:\/\//i.test(href)) {
        resolved = href;
      } else if (/^use-of-english\//.test(pathPart)) {
        var proto = window.location.protocol;
        if (proto === "http:" || proto === "https:") {
          resolved = new URL("/" + href.replace(/^\//, ""), window.location.origin).href;
        } else if (proto === "file:") {
          var cur = window.location.href.split(/[?#]/)[0].replace(/\\/g, "/");
          var key = "/use-of-english/";
          var pos = cur.toLowerCase().indexOf(key);
          if (pos !== -1) {
            var baseDir = cur.slice(0, pos).replace(/\/?$/, "") + "/";
            resolved = new URL(href, baseDir).href;
          } else {
            resolved = new URL(href, window.location.href).href;
          }
        } else {
          resolved = new URL("/" + href.replace(/^\//, ""), window.location.origin).href;
        }
      } else {
        resolved = new URL(href, window.location.href).href;
      }
      link.setAttribute("href", resolved);
    } catch (e1) {
      link.setAttribute("href", href);
    }
    link.textContent = "\u2192 " + label;
    strip.removeAttribute("hidden");
  }

  var heartsEl = document.getElementById("drillHearts");
  var progEl = document.getElementById("drillProg");
  var cardWordEl = document.getElementById("drillCardWord");
  var lineEl = document.getElementById("drillLine");
  var inputEl = document.getElementById("drillInput");
  var checkBtn = document.getElementById("drillCheck");
  var feedbackEl = document.getElementById("drillFeedback");
  var sourceEl = document.getElementById("drillSource");
  var overlayGo = document.getElementById("drillOverlayGameover");
  var overlayWin = document.getElementById("drillOverlayWin");
  var btnRestart = document.getElementById("drillBtnRestart");
  var btnPlayAgain = document.getElementById("drillBtnPlayAgain");

  wireDrillNext();

  var pack = null;
  var roundItems = [];
  var idx = 0;
  var lives = 3;
  var maxLives = 3;
  var roundSize = 8;
  var busy = false;

  function renderHearts() {
    if (!heartsEl) return;
    heartsEl.innerHTML = "";
    for (var i = 0; i < maxLives; i++) {
      var wrap = document.createElement("span");
      wrap.innerHTML = HEART_SVG;
      var svg = wrap.firstElementChild;
      if (i >= lives) svg.classList.add("is-lost");
      heartsEl.appendChild(svg);
    }
  }

  function showFeedback(text, ok, asHtml) {
    if (!feedbackEl) return;
    feedbackEl.hidden = !text;
    feedbackEl.className = "u9-drill-feedback" + (ok ? " is-ok" : "");
    if (asHtml) feedbackEl.innerHTML = text || "";
    else feedbackEl.textContent = text || "";
  }

  function hideFeedback() {
    showFeedback("", false);
  }

  function renderItem() {
    busy = false;
    hideFeedback();
    if (!roundItems.length || idx >= roundItems.length) return;
    var it = roundItems[idx];
    if (cardWordEl) {
      cardWordEl.textContent =
        it.cue || it.hintWrong || "Use the sentence below — what single word fits?";
    }
    if (lineEl) lineEl.textContent = it.line || "";
    if (inputEl) {
      inputEl.value = "";
      inputEl.placeholder = it.placeholder || "Type the word";
      inputEl.classList.remove("is-shake", "is-ok-flash");
      inputEl.focus();
    }
    if (sourceEl) sourceEl.textContent = it.source ? "From: " + it.source : "";
    if (progEl) progEl.textContent = idx + 1 + "/" + roundItems.length;
    if (checkBtn) checkBtn.disabled = false;
  }

  function pickRound(allItems) {
    var sh = shuffle(allItems);
    var n = Math.min(roundSize, sh.length);
    return sh.slice(0, n);
  }

  function startGame() {
    if (!pack || !pack.items || !pack.items.length) return;
    maxLives = Number(pack.lives) > 0 ? Number(pack.lives) : 3;
    lives = maxLives;
    roundSize = Number(pack.roundSize) > 0 ? Number(pack.roundSize) : 8;
    roundItems = pickRound(pack.items);
    idx = 0;
    renderHearts();
    renderItem();
    closeOverlays();
  }

  function closeOverlays() {
    if (overlayGo) {
      overlayGo.classList.remove("is-open");
      overlayGo.setAttribute("aria-hidden", "true");
    }
    if (overlayWin) {
      overlayWin.classList.remove("is-open");
      overlayWin.setAttribute("aria-hidden", "true");
    }
  }

  function openGameover(answerHint) {
    if (overlayGo) {
      var p = overlayGo.querySelector("[data-drill-go-detail]");
      if (p) {
        p.textContent = answerHint
          ? "Accepted answer: " + answerHint + ". Take a breath and try a new round."
          : "Take a breath and try a new round.";
      }
      overlayGo.classList.add("is-open");
      overlayGo.setAttribute("aria-hidden", "false");
    }
  }

  function openWin() {
    if (overlayWin) {
      overlayWin.classList.add("is-open");
      overlayWin.setAttribute("aria-hidden", "false");
    }
  }

  function checkAnswer() {
    if (busy || !roundItems.length || idx >= roundItems.length) return;
    var it = roundItems[idx];
    var user = norm(inputEl ? inputEl.value : "");
    if (!user) {
      showFeedback("Type an answer, then tap Check.", false);
      return;
    }
    var accepted = (it.answers || []).map(norm).filter(Boolean);
    var ok = accepted.indexOf(user) >= 0;

    if (ok) {
      busy = true;
      showFeedback("Nice — that collocation is spot on.", true);
      if (inputEl) {
        inputEl.classList.add("is-ok-flash");
        inputEl.classList.remove("is-shake");
      }
      if (checkBtn) checkBtn.disabled = true;
      window.setTimeout(function () {
        idx++;
        if (idx >= roundItems.length) {
          openWin();
          return;
        }
        renderItem();
      }, 550);
      return;
    }

    lives = Math.max(0, lives - 1);
    renderHearts();

    var keyPretty = (it.answers || [])
      .map(function (a) {
        return String(a || "").trim();
      })
      .filter(Boolean)
      .join(" / ");
    if (!keyPretty) keyPretty = "(no key)";

    var hint = it.hintWrong || "Compare with the fixed phrase in your Unit 9 Use of English tasks.";
    var msg =
      "Not quite. <strong>Correct answer:</strong> " +
      esc(keyPretty) +
      ' <span class="u9-drill-feedback-hearts">One life lost.</span>' +
      '<span class="u9-drill-feedback-tip">' +
      esc(hint) +
      "</span>";
    showFeedback(msg, false, true);

    busy = true;
    if (checkBtn) checkBtn.disabled = true;
    if (inputEl) {
      inputEl.classList.add("is-shake");
      inputEl.classList.remove("is-ok-flash");
      window.setTimeout(function () {
        if (inputEl) inputEl.classList.remove("is-shake");
      }, 500);
    }

    window.setTimeout(function () {
      busy = false;
      if (lives <= 0) {
        openGameover(keyPretty);
        return;
      }
      idx++;
      if (idx >= roundItems.length) {
        openWin();
        return;
      }
      renderItem();
    }, 2600);
  }

  if (checkBtn) {
    checkBtn.addEventListener("click", checkAnswer);
  }
  if (inputEl) {
    inputEl.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        checkAnswer();
      }
    });
  }
  if (btnRestart) {
    btnRestart.addEventListener("click", function () {
      closeOverlays();
      startGame();
    });
  }
  if (btnPlayAgain) {
    btnPlayAgain.addEventListener("click", function () {
      closeOverlays();
      startGame();
    });
  }

  loadPack().then(function (data) {
    pack = data;
    if (!pack || !pack.items || !pack.items.length) {
      if (lineEl) {
        lineEl.textContent =
          "Could not load the question bank. If you edited items.json, run node embed-data.mjs in this folder to refresh the copy inside index.html.";
      }
      var sub = document.getElementById("drillSub");
      if (sub) sub.textContent = "";
      return;
    }
    var sub = document.getElementById("drillSub");
    if (sub && pack.subtitle) sub.textContent = pack.subtitle;
    var h1 = document.getElementById("drillH1");
    if (h1 && pack.title) h1.textContent = pack.title;
    document.title = (pack.title || "Unit 9") + " · collocation drill";
    startGame();
  });
})();

