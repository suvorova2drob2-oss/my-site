/**
 * Home game · Sticker Swipe — definition + phrase, Tinder-style match / nope.
 * 6 levels × 10 cards · wrong swipe restarts current level only.
 * Global: FLEABAG_STICKER_SWIPE.open({ stickers, escapeHtml })
 */
(function (global) {
  var CARDS_PER_LEVEL = 10;
  var MAX_LEVELS = 6;

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

  function buildItems(stickers) {
    var pool = (stickers || [])
      .map(function (s) {
        return {
          phrase: String(s.phrase || s.text || "").trim(),
          def: String(s.def || s.definition || "").trim(),
        };
      })
      .filter(function (s) {
        return s.phrase && s.def;
      });
    if (pool.length < 2) return [];

    var cards = [];
    pool.forEach(function (item) {
      cards.push({
        def: item.def,
        phrase: item.phrase,
        match: true,
      });
    });

    pool.forEach(function (item, i) {
      var others = pool.filter(function (p, j) {
        return j !== i;
      });
      if (!others.length) return;
      var wrong = others[Math.floor(Math.random() * others.length)];
      cards.push({
        def: item.def,
        phrase: wrong.phrase,
        match: false,
      });
    });

    return shuffle(cards);
  }

  function buildLevels(stickers) {
    var all = buildItems(stickers).slice(0, CARDS_PER_LEVEL * MAX_LEVELS);
    var levels = [];
    var i;
    for (i = 0; i < MAX_LEVELS; i++) {
      var chunk = all.slice(i * CARDS_PER_LEVEL, (i + 1) * CARDS_PER_LEVEL);
      if (chunk.length) levels.push(chunk);
    }
    return levels;
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
    var levels = buildLevels(opts.stickers || []);
    if (!levels.length || !levels[0].length) return;

    var levelIdx = 0;
    var cardIdx = 0;
    var locked = false;
    var drag = { active: false, startX: 0, x: 0 };
    var moveBound = false;
    var toastTimer = null;

    var root = document.createElement("div");
    root.className = "fb-swipe";
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-label", "Sticker Swipe game");
    document.body.appendChild(root);
    document.body.classList.add("fb-fyp-open");

    function currentLevel() {
      return levels[levelIdx] || [];
    }

    function currentItem() {
      return currentLevel()[cardIdx];
    }

    function close() {
      document.body.classList.remove("fb-fyp-open");
      if (root.parentNode) root.parentNode.removeChild(root);
      document.removeEventListener("keydown", onKey);
      if (toastTimer) window.clearTimeout(toastTimer);
    }

    function onKey(e) {
      if (e.key === "Escape") close();
      if (locked) return;
      if (e.key === "ArrowLeft") vote(false);
      if (e.key === "ArrowRight") vote(true);
    }
    document.addEventListener("keydown", onKey);

    function restartGame() {
      levels = buildLevels(opts.stickers || []);
      levelIdx = 0;
      cardIdx = 0;
      locked = false;
      renderCard();
    }

    function restartLevel() {
      cardIdx = 0;
      levels[levelIdx] = shuffle(levels[levelIdx].slice());
    }

    function flashToast(text, kind) {
      var el = root.querySelector("[data-sw-toast]");
      if (!el) return;
      el.textContent = text;
      el.className = "fb-swipe-toast is-show" + (kind ? " is-" + kind : "");
      if (toastTimer) window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(function () {
        if (el) el.classList.remove("is-show");
      }, 1400);
    }

    function renderDone() {
      root.innerHTML =
        '<div class="fb-swipe-reel fb-swipe-reel--done">' +
        '<p class="fb-fyp-kicker">Swipe · all levels clear</p>' +
        '<h2 class="fb-fyp-score">' +
        levels.length +
        " / " +
        levels.length +
        "</h2>" +
        '<p class="fb-fyp-sub">Six levels · definitions matched.</p>' +
        '<button type="button" class="fb-fyp-next" data-sw-close>Close</button>' +
        '<button type="button" class="fb-fyp-again" data-sw-again>Play again</button>' +
        "</div>";
      root.querySelector("[data-sw-close]").onclick = close;
      root.querySelector("[data-sw-again]").onclick = restartGame;
    }

    function vote(userSaysMatch) {
      if (locked) return;
      var item = currentItem();
      if (!item) return;
      locked = true;
      var ok = userSaysMatch === item.match;

      var card = root.querySelector("[data-sw-card]");
      if (card) {
        card.classList.add(userSaysMatch ? "is-swipe-right" : "is-swipe-left");
        card.style.transform = userSaysMatch
          ? "translateX(130%) rotate(14deg)"
          : "translateX(-130%) rotate(-14deg)";
        card.style.opacity = "0";
      }

      window.setTimeout(function () {
        if (!ok) {
          restartLevel();
          flashToast("Wrong pair — back to card 1 of this level", "bad");
          locked = false;
          renderCard();
          return;
        }

        cardIdx += 1;
        if (cardIdx >= currentLevel().length) {
          levelIdx += 1;
          cardIdx = 0;
          if (levelIdx >= levels.length) {
            renderDone();
            return;
          }
          flashToast("Level " + (levelIdx + 1) + " unlocked", "good");
        }

        locked = false;
        renderCard();
      }, 380);
    }

    function bindDrag(card) {
      function onMove(clientX) {
        if (!drag.active || locked) return;
        drag.x = clientX - drag.startX;
        var rot = drag.x * 0.08;
        card.style.transform = "translateX(" + drag.x + "px) rotate(" + rot + "deg)";
        card.classList.toggle("is-lean-left", drag.x < -30);
        card.classList.toggle("is-lean-right", drag.x > 30);
      }

      function onEnd() {
        if (!drag.active || locked) return;
        drag.active = false;
        card.classList.remove("is-dragging", "is-lean-left", "is-lean-right");
        if (drag.x > 80) vote(true);
        else if (drag.x < -80) vote(false);
        else card.style.transform = "";
      }

      card.addEventListener("mousedown", function (e) {
        if (locked || e.button !== 0) return;
        drag.active = true;
        drag.startX = e.clientX;
        drag.x = 0;
        card.classList.add("is-dragging");
        e.preventDefault();
      });
      card.addEventListener("touchstart", function (e) {
        if (locked || e.touches.length !== 1) return;
        drag.active = true;
        drag.startX = e.touches[0].clientX;
        drag.x = 0;
        card.classList.add("is-dragging");
      }, { passive: true });

      if (!moveBound) {
        moveBound = true;
        window.addEventListener("mousemove", function (e) {
          if (drag.active) onMove(e.clientX);
        });
        window.addEventListener("touchmove", function (e) {
          if (drag.active && e.touches.length) onMove(e.touches[0].clientX);
        }, { passive: true });
        window.addEventListener("mouseup", onEnd);
        window.addEventListener("touchend", onEnd);
      }
    }

    function renderCard() {
      var item = currentItem();
      if (!item) {
        renderDone();
        return;
      }
      locked = false;
      drag = { active: false, startX: 0, x: 0 };
      var lv = currentLevel();
      var hasBack = cardIdx + 1 < lv.length;

      root.innerHTML =
        '<div class="fb-swipe-reel">' +
        '<header class="fb-fyp-top">' +
        '<button type="button" class="fb-fyp-x" data-sw-close aria-label="Close">✕</button>' +
        '<div class="fb-fyp-progress">' +
        "Level " +
        (levelIdx + 1) +
        " / " +
        levels.length +
        " · " +
        (cardIdx + 1) +
        " / " +
        lv.length +
        "</div>" +
        "</header>" +
        '<p class="fb-fyp-kicker">Swipe · match the phrase?</p>' +
        '<div class="fb-swipe-level-dots">' +
        levels
          .map(function (_, i) {
            var cls = "fb-swipe-dot";
            if (i < levelIdx) cls += " is-done";
            else if (i === levelIdx) cls += " is-active";
            return '<span class="' + cls + '"></span>';
          })
          .join("") +
        "</div>" +
        '<div class="fb-swipe-play">' +
        '<div class="fb-swipe-stack">' +
        (hasBack ? '<div class="fb-swipe-card fb-swipe-card--back" aria-hidden="true"></div>' : "") +
        '<article class="fb-swipe-card fb-swipe-card--front" data-sw-card tabindex="0">' +
        '<div class="fb-swipe-stamp fb-swipe-stamp--left">NOPE</div>' +
        '<div class="fb-swipe-stamp fb-swipe-stamp--right">MATCH</div>' +
        '<div class="fb-swipe-overlay fb-swipe-overlay--left"></div>' +
        '<div class="fb-swipe-overlay fb-swipe-overlay--right"></div>' +
        '<p class="fb-swipe-label">Definition</p>' +
        '<p class="fb-swipe-def">' +
        esc(item.def) +
        "</p>" +
        '<p class="fb-swipe-label fb-swipe-label--phrase">Phrase</p>' +
        '<p class="fb-swipe-phrase">' +
        esc(item.phrase) +
        "</p>" +
        "</article>" +
        "</div>" +
        '<div class="fb-swipe-tinder">' +
        '<button type="button" class="fb-swipe-round fb-swipe-round--nope" data-sw-left aria-label="Nope">✕</button>' +
        '<button type="button" class="fb-swipe-round fb-swipe-round--match" data-sw-right aria-label="Match">♥</button>' +
        "</div>" +
        '<p class="fb-swipe-hint">♥ = matches · ✕ = wrong · mistake = restart level</p>' +
        "</div>" +
        '<p class="fb-swipe-toast" data-sw-toast></p>' +
        "</div>";

      root.querySelector("[data-sw-close]").onclick = close;
      root.querySelector("[data-sw-left]").onclick = function () {
        vote(false);
      };
      root.querySelector("[data-sw-right]").onclick = function () {
        vote(true);
      };

      var card = root.querySelector("[data-sw-card]");
      if (card) bindDrag(card);
    }

    renderCard();
  }

  global.FLEABAG_STICKER_SWIPE = {
    open: open,
    buildItems: buildItems,
    buildLevels: buildLevels,
    CARDS_PER_LEVEL: CARDS_PER_LEVEL,
    MAX_LEVELS: MAX_LEVELS,
  };
})(typeof window !== "undefined" ? window : globalThis);
