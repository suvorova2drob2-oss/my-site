/**
 * Home game · Sticker FYP — TikTok-ish vertical MCQ from improv stickers.
 * Global: FLEABAG_STICKER_FYP.open({ stickers, escapeHtml })
 */
(function (global) {
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

  function normText(s) {
    return String(s || "")
      .replace(/[’‘]/g, "'")
      .replace(/[…]/g, "...")
      .replace(/\s+/g, " ")
      .trim();
  }

  function escRe(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  /** True if prompt still leaks the answer (or its bare form). */
  function spoilsAnswer(prompt, phrase) {
    var n = normText(prompt).toLowerCase();
    var p = normText(phrase).toLowerCase();
    if (!p) return false;
    if (n.indexOf(p) !== -1) return true;
    var bare = p.replace(/^(a|an|the)\s+/i, "");
    if (bare && bare !== p && n.indexOf(bare) !== -1) return true;
    return false;
  }

  /**
   * Cut a gap in the example line. Handles near-matches
   * (e.g. "a cheap thrill" inside "a really, really cheap thrill").
   */
  function blankUse(phrase, use) {
    if (!use) return "";
    var p0 = normText(phrase);
    var u = normText(use);
    if (!p0 || !u) return use;

    var attempts = [p0];
    var bare = p0.replace(/^(a|an|the)\s+/i, "");
    if (bare !== p0) attempts.push(bare);
    var noDots = p0.replace(/\.{2,}$/g, "").replace(/\?$/g, "").trim();
    if (noDots && attempts.indexOf(noDots) === -1) attempts.push(noDots);
    var bareNoDots = bare.replace(/\.{2,}$/g, "").replace(/\?$/g, "").trim();
    if (bareNoDots && attempts.indexOf(bareNoDots) === -1) attempts.push(bareNoDots);

    var i;
    for (i = 0; i < attempts.length; i++) {
      var re = new RegExp(escRe(attempts[i]), "ig");
      if (re.test(u)) {
        return u.replace(re, "______");
      }
    }

    /* Flexible: content words in order, short junk allowed between */
    var words = bareNoDots
      .split(/\s+/)
      .map(function (w) {
        return w.replace(/^[^a-z0-9']+|[^a-z0-9']+$/gi, "");
      })
      .filter(function (w) {
        return w.length > 1;
      });
    if (words.length >= 1) {
      var flex = words
        .map(function (w) {
          return escRe(w);
        })
        .join("(?:[\\s,'-]+\\w+){0,4}[\\s,'-]+");
      var flexRe = new RegExp("\\b" + flex + "\\b", "ig");
      if (flexRe.test(u)) {
        return u.replace(flexRe, "______");
      }
    }

    return use;
  }

  /** Gap is useless if almost nothing remains around the blank. */
  function isWeakGap(blanked, phrase) {
    if (!blanked) return true;
    if (spoilsAnswer(blanked, phrase)) return true;
    var rest = String(blanked)
      .replace(/_+/g, " ")
      .replace(/\.{2,}|…/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (rest.length < 22) return true;
    var words = rest.split(/\s+/).filter(Boolean);
    if (words.length < 4) return true;
    return false;
  }

  function buildItems(stickers) {
    var pool = (stickers || [])
      .map(function (s) {
        return {
          phrase: String(s.phrase || s.text || "").trim(),
          use: String(s.use || s.example || "").trim(),
          def: String(s.def || s.definition || "").trim(),
          ctx: String(s.ctx || s.scene || "").trim(),
        };
      })
      .filter(function (s) {
        return s.phrase && (s.use || s.def);
      });
    if (pool.length < 2) return [];

    return shuffle(pool).map(function (item) {
      var others = pool
        .filter(function (p) {
          return p.phrase.toLowerCase() !== item.phrase.toLowerCase();
        })
        .map(function (p) {
          return p.phrase;
        });
      var distractors = shuffle(others).slice(0, 3);
      while (distractors.length < 3 && others.length) {
        distractors.push(others[distractors.length % others.length]);
      }
      var options = shuffle([item.phrase].concat(distractors.slice(0, 3)));
      var blanked = item.use ? blankUse(item.phrase, item.use) : "";
      var prompt;
      var mode;
      var howto;
      if (
        blanked &&
        blanked !== item.use &&
        !isWeakGap(blanked, item.phrase)
      ) {
        prompt = blanked;
        mode = "gap";
        howto = "Pick the phrase that fills the blank.";
      } else if (item.def) {
        prompt = item.def;
        mode = "meaning";
        howto = "Pick the English phrase that matches this meaning.";
      } else {
        prompt = item.use || "Which cool phrase fits this scene?";
        mode = "pick";
        howto = "Pick the cool phrase that fits.";
      }
      return {
        phrase: item.phrase,
        use: item.use,
        def: item.def,
        ctx: item.ctx,
        prompt: prompt,
        mode: mode,
        howto: howto,
        options: options,
      };
    });
  }

  function open(opts) {
    var esc =
      opts.escapeHtml ||
      function (s) {
        return String(s)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
      };
    var items = buildItems(opts.stickers || []);
    if (!items.length) return;

    var idx = 0;
    var score = 0;
    var locked = false;
    var advanceTimer = null;

    var root = document.createElement("div");
    root.className = "fb-fyp";
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-label", "Sticker FYP game");
    document.body.appendChild(root);
    document.body.classList.add("fb-fyp-open");

    function clearAdvance() {
      if (advanceTimer) {
        clearTimeout(advanceTimer);
        advanceTimer = null;
      }
    }

    function close() {
      clearAdvance();
      document.body.classList.remove("fb-fyp-open");
      if (root.parentNode) root.parentNode.removeChild(root);
      document.removeEventListener("keydown", onKey);
    }

    function onKey(e) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);

    function renderDone() {
      root.innerHTML =
        '<div class="fb-fyp-reel fb-fyp-reel--done">' +
        '<p class="fb-fyp-kicker">For you · done</p>' +
        '<h2 class="fb-fyp-score">' +
        score +
        " / " +
        items.length +
        "</h2>" +
        '<p class="fb-fyp-sub">Cool phrases nailed at home.</p>' +
        '<button type="button" class="fb-fyp-next" data-fyp-close>Close</button>' +
        '<button type="button" class="fb-fyp-again" data-fyp-again>Play again</button>' +
        "</div>";
      root.querySelector("[data-fyp-close]").onclick = close;
      root.querySelector("[data-fyp-again]").onclick = function () {
        clearAdvance();
        idx = 0;
        score = 0;
        locked = false;
        items = buildItems(opts.stickers || []);
        renderCard();
      };
    }

    function renderCard() {
      if (idx >= items.length) {
        renderDone();
        return;
      }
      locked = false;
      var item = items[idx];
      var modeLabel =
        item.mode === "gap"
          ? "Fill the gap"
          : item.mode === "meaning"
            ? "Match the meaning"
            : "Pick the phrase";
      var howto =
        item.howto ||
        (item.mode === "gap"
          ? "Pick the phrase that fills the blank."
          : item.mode === "meaning"
            ? "Pick the English phrase that matches this meaning."
            : "Pick the cool phrase that fits.");

      root.innerHTML =
        '<div class="fb-fyp-reel">' +
        '<header class="fb-fyp-top">' +
        '<button type="button" class="fb-fyp-x" data-fyp-close aria-label="Close">✕</button>' +
        '<div class="fb-fyp-progress">' +
        (idx + 1) +
        " / " +
        items.length +
        "</div>" +
        "</header>" +
        '<div class="fb-fyp-scroll">' +
        '<p class="fb-fyp-kicker">For you · ' +
        esc(modeLabel) +
        "</p>" +
        '<p class="fb-fyp-howto">' +
        esc(howto) +
        "</p>" +
        (item.ctx
          ? '<p class="fb-fyp-ctx">' + esc(item.ctx) + "</p>"
          : "") +
        '<p class="fb-fyp-prompt' +
        (item.mode === "meaning" ? " fb-fyp-prompt--meaning" : "") +
        '">' +
        esc(item.prompt) +
        "</p>" +
        '<div class="fb-fyp-options" role="group" aria-label="Answers">' +
        item.options
          .map(function (opt, i) {
            return (
              '<button type="button" class="fb-fyp-opt" data-opt="' +
              i +
              '"><span class="fb-fyp-opt-n">' +
              (i + 1) +
              '</span><span class="fb-fyp-opt-t">' +
              esc(opt) +
              "</span></button>"
            );
          })
          .join("") +
        "</div>" +
        '<p class="fb-fyp-feedback" data-fyp-fb hidden></p>' +
        "</div>" +
        '<footer class="fb-fyp-foot">' +
        '<button type="button" class="fb-fyp-next" data-fyp-next hidden>Next ▾</button>' +
        '<div class="fb-fyp-rail" aria-hidden="true">' +
        '<div class="fb-fyp-rail-btn" data-fyp-heart>♥</div>' +
        '<div class="fb-fyp-rail-lbl">save</div>' +
        "</div>" +
        "</footer>" +
        "</div>";

      root.querySelector("[data-fyp-close]").onclick = close;
      var fb = root.querySelector("[data-fyp-fb]");
      var nextBtn = root.querySelector("[data-fyp-next]");
      var heart = root.querySelector("[data-fyp-heart]");

      nextBtn.onclick = function () {
        goNext();
      };

      function goNext() {
        clearAdvance();
        idx += 1;
        renderCard();
      }

      root.querySelectorAll("[data-opt]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (locked) return;
          locked = true;
          var pick = item.options[parseInt(btn.getAttribute("data-opt"), 10)];
          var ok =
            String(pick).toLowerCase() === String(item.phrase).toLowerCase();
          if (ok) score += 1;
          root.querySelectorAll(".fb-fyp-opt").forEach(function (b) {
            var t = b.querySelector(".fb-fyp-opt-t").textContent;
            if (t.toLowerCase() === item.phrase.toLowerCase()) {
              b.classList.add("is-right");
            } else if (b === btn && !ok) {
              b.classList.add("is-wrong");
            }
            b.disabled = true;
          });
          fb.hidden = false;
          fb.textContent = ok
            ? "Yes · " + item.phrase
            : "It was · " + item.phrase;
          fb.className =
            "fb-fyp-feedback " + (ok ? "is-right" : "is-wrong");
          if (ok && heart) heart.classList.add("is-pop");
          /* Auto-advance — Next stays as a skip if you want faster */
          nextBtn.hidden = false;
          clearAdvance();
          advanceTimer = setTimeout(goNext, ok ? 750 : 1100);
        });
      });
    }

    renderCard();
  }

  global.FLEABAG_STICKER_FYP = { open: open, buildItems: buildItems };
})(typeof window !== "undefined" ? window : globalThis);
