/**
 * FCE Vocabulary — meme flip cards.
 * Front: meme image only · back: phrase, then example below.
 * window.FCE_VOCAB_MEME_FLIP.mount({ rootId, cards })
 */
(function (global) {
  "use strict";

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function highlightExample(example, chunk) {
    var ex = String(example || "");
    var hl = String(chunk || "").trim();
    if (!hl) return esc(ex);
    var ix = ex.toLowerCase().indexOf(hl.toLowerCase());
    if (ix < 0) return esc(ex);
    return (
      esc(ex.slice(0, ix)) +
      '<strong class="meme-hl">' +
      esc(ex.slice(ix, ix + hl.length)) +
      "</strong>" +
      esc(ex.slice(ix + hl.length))
    );
  }

  function mount(opts) {
    var root = document.getElementById(opts.rootId || "meme-flip-root");
    if (!root) return;
    var cards = (opts.cards || []).slice();
    if (!cards.length) {
      root.innerHTML =
        '<p class="meme-empty">No meme cards in this folder yet.</p>';
      return;
    }

    var idx = 0;
    var flipped = false;

    root.innerHTML =
      '<div class="meme-flip-box' +
      (opts.compact ? " meme-flip-box--compact" : "") +
      '">' +
      '<p class="meme-flip-hud" id="memeFlipHud"></p>' +
      '<div class="meme-flip-scene' +
      (opts.compact ? " meme-flip-scene--compact" : "") +
      '" id="memeFlipScene" tabindex="0" role="button" aria-label="Meme card — tap to flip">' +
      '<div class="meme-flip-inner" id="memeFlipInner">' +
      '<div class="meme-flip-face meme-flip-front" id="memeFlipFront"></div>' +
      '<div class="meme-flip-face meme-flip-back" id="memeFlipBack"></div>' +
      "</div></div>" +
      '<p class="meme-flip-hint">' +
      esc(opts.hintText || "Picture only — guess the phrase, then tap to flip and check") +
      "</p>" +
      '<div class="meme-flip-nav">' +
      '<button type="button" class="meme-flip-btn" id="memeFlipPrev">← Previous</button>' +
      '<button type="button" class="meme-flip-btn meme-flip-btn--primary" id="memeFlipNext">Next →</button>' +
      "</div></div>";

    var hud = document.getElementById("memeFlipHud");
    var inner = document.getElementById("memeFlipInner");
    var front = document.getElementById("memeFlipFront");
    var back = document.getElementById("memeFlipBack");
    var scene = document.getElementById("memeFlipScene");

    function render() {
      var c = cards[idx];
      flipped = false;
      inner.classList.remove("is-flipped");
      hud.textContent = (idx + 1) + " / " + cards.length;
      var hints = (c.hints || [])
        .map(function (h) {
          return '<span class="meme-flip-front-hint">' + esc(h) + "</span>";
        })
        .join("");
      var hintsRow = hints
        ? '<div class="meme-flip-front-hints">' + hints + "</div>"
        : "";
      front.innerHTML =
        '<div class="meme-flip-front-stack">' +
        '<img class="meme-flip-img' +
        (hints ? " meme-flip-img--with-hints" : "") +
        '" src="' +
        esc(c.img) +
        '" alt="" loading="lazy" />' +
        hintsRow +
        "</div>";
      var phrase = c.headword || c.phrase || "";
      var example = c.example || c.sentence || "";
      var backPhrase = phrase
        ? '<p class="meme-phrase">' + esc(phrase) + "</p>"
        : "";
      back.innerHTML =
        '<div class="meme-back-stack">' +
        backPhrase +
        '<p class="meme-example' +
        (phrase ? "" : " meme-example--solo") +
        '">' +
        highlightExample(example, c.highlight) +
        "</p>" +
        "</div>";
    }

    function toggleFlip() {
      flipped = !flipped;
      inner.classList.toggle("is-flipped", flipped);
    }

    function go(delta) {
      idx = (idx + delta + cards.length) % cards.length;
      render();
    }

    scene.addEventListener("click", function (e) {
      if (e.target.closest("button, a")) return;
      toggleFlip();
    });
    scene.addEventListener("keydown", function (e) {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggleFlip();
      }
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    });
    document.getElementById("memeFlipPrev").addEventListener("click", function () {
      go(-1);
    });
    document.getElementById("memeFlipNext").addEventListener("click", function () {
      go(1);
    });

    render();
    return { go: go, render: render, setCards: function (next) {
      cards = (next || []).slice();
      idx = 0;
      render();
    }};
  }

  global.FCE_VOCAB_MEME_FLIP = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
