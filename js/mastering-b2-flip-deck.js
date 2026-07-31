/**
 * MasteringB2FlipDeck — one card on screen, tap to flip, Prev / Next.
 * window.MasteringB2FlipDeck.mount(root, cards, options)
 *
 * cards: [{ frontHtml, backHtml, ariaLabel? }]  (HTML already escaped by caller)
 * or use helpers: front/back plain text via options.render
 */
(function (global) {
  function esc(t) {
    return String(t == null ? "" : t)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function mount(root, cards, options) {
    options = options || {};
    if (!root || !cards || !cards.length) return null;

    var idx = 0;
    var label = options.progressLabel || "Card";

    root.innerHTML =
      '<div class="mb2-flip-stage">' +
      '<p class="mb2-flip-progress" id="mb2FlipProgress"></p>' +
      '<button type="button" class="mb2-flip-card flip-card" id="mb2FlipCard" aria-pressed="false">' +
      '<div class="mb2-flip-inner flip-inner" id="mb2FlipInner"></div>' +
      "</button>" +
      '<div class="mb2-flip-nav">' +
      '<button type="button" id="mb2FlipPrev">← Previous</button>' +
      '<button type="button" class="mb2-flip-flipbtn" id="mb2FlipToggle">Flip</button>' +
      '<button type="button" id="mb2FlipNext">Next →</button>' +
      "</div>" +
      "</div>";

    var progress = root.querySelector("#mb2FlipProgress");
    var cardBtn = root.querySelector("#mb2FlipCard");
    var inner = root.querySelector("#mb2FlipInner");
    var btnPrev = root.querySelector("#mb2FlipPrev");
    var btnNext = root.querySelector("#mb2FlipNext");
    var btnFlip = root.querySelector("#mb2FlipToggle");

    function cardAt(i) {
      var c = cards[i];
      if (options.mapCard) return options.mapCard(c, i, esc);
      return c;
    }

    function render() {
      var c = cardAt(idx);
      var frontHtml = c.frontHtml;
      var backHtml = c.backHtml;
      progress.textContent = label + " " + (idx + 1) + " / " + cards.length;
      cardBtn.classList.remove("is-flipped");
      cardBtn.setAttribute("aria-pressed", "false");
      cardBtn.setAttribute(
        "aria-label",
        c.ariaLabel || label + " " + (idx + 1) + ". Tap to flip."
      );
      inner.innerHTML =
        '<div class="mb2-flip-face mb2-flip-front flip-face flip-front">' +
        frontHtml +
        "</div>" +
        '<div class="mb2-flip-face mb2-flip-back flip-face flip-back">' +
        backHtml +
        "</div>";

      // Match height to taller face so absolute faces don't clip
      requestAnimationFrame(function () {
        var faces = inner.querySelectorAll(".mb2-flip-face");
        var h = 240;
        faces.forEach(function (face) {
          face.style.position = "relative";
          face.style.transform = "none";
          face.style.backfaceVisibility = "visible";
          h = Math.max(h, face.offsetHeight);
        });
        faces.forEach(function (face, fi) {
          face.style.position = "absolute";
          face.style.inset = "0";
          face.style.backfaceVisibility = "hidden";
          face.style.webkitBackfaceVisibility = "hidden";
          face.style.transform = fi === 1 ? "rotateY(180deg)" : "rotateY(0deg)";
        });
        inner.style.minHeight = h + "px";
      });

      btnPrev.disabled = idx <= 0;
      btnNext.disabled = idx >= cards.length - 1;
    }

    function toggle() {
      var on = cardBtn.classList.toggle("is-flipped");
      cardBtn.setAttribute("aria-pressed", on ? "true" : "false");
    }

    function go(delta) {
      var next = idx + delta;
      if (next < 0 || next >= cards.length) return;
      idx = next;
      render();
    }

    cardBtn.addEventListener("click", function (e) {
      e.preventDefault();
      toggle();
    });
    cardBtn.addEventListener("keydown", function (e) {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggle();
      }
    });
    btnFlip.addEventListener("click", function (e) {
      e.preventDefault();
      toggle();
    });
    btnPrev.addEventListener("click", function () {
      go(-1);
    });
    btnNext.addEventListener("click", function () {
      go(1);
    });

    render();
    return { go: go, render: render, getIndex: function () { return idx; } };
  }

  global.MasteringB2FlipDeck = {
    mount: mount,
    esc: esc,
    /** Build standard front/back HTML for correction-style cards */
    correctionCard: function (item, i, total) {
      var n = i + 1;
      var note = item.note
        ? '<p class="mb2-flip-note">' + esc(item.note) + "</p>"
        : "";
      return {
        ariaLabel: "Sentence " + n + " of " + total + ". Flip to see correction.",
        frontHtml:
          '<div class="mb2-flip-kicker">' +
          esc(item.frontKicker || "With a mistake") +
          "</div>" +
          '<p class="mb2-flip-body"><strong>' +
          n +
          ".</strong> " +
          esc(item.wrong || item.front) +
          "</p>" +
          '<div class="mb2-flip-tap">Tap card to flip</div>',
        backHtml:
          '<div class="mb2-flip-kicker">' +
          esc(item.backKicker || "Corrected") +
          "</div>" +
          '<p class="mb2-flip-body">' +
          esc(item.correct || item.back) +
          "</p>" +
          note,
      };
    },
    /**
     * Read existing .flip-card markup inside a deck root and remount as one-card UI.
     * Preserves front/back innerHTML (kickers, notes, formatting).
     */
    mountFromExisting: function (deckRoot, options) {
      if (!deckRoot) return null;
      var buttons = deckRoot.querySelectorAll(".flip-card");
      var cards = [];
      buttons.forEach(function (btn) {
        var front = btn.querySelector(".flip-front, .mb2-flip-front");
        var back = btn.querySelector(".flip-back, .mb2-flip-back");
        if (!front || !back) return;
        cards.push({
          frontHtml: front.innerHTML,
          backHtml: back.innerHTML,
          ariaLabel: btn.getAttribute("aria-label") || undefined,
        });
      });
      if (!cards.length) return null;
      return mount(deckRoot, cards, options || {});
    },
  };
})(window);
