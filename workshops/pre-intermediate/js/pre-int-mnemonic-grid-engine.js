/**
 * Pre-intermediate · mnemonic picture grid
 * Flip cards: front = image · back = sentence · tap image → fullscreen lightbox
 */
(function (global) {
  "use strict";

  var escListenerOn = false;

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function cardHtml(c, i) {
    return (
      '<article class="pi-mn-card" data-pi-mn-idx="' +
      i +
      '">' +
      '<button type="button" class="pi-mn-flip" aria-label="Flip card ' +
      (i + 1) +
      '">' +
      '<div class="pi-mn-flip-inner">' +
      '<div class="pi-mn-face pi-mn-face--front">' +
      '<img src="' +
      esc(c.img) +
      '" alt="" loading="lazy" draggable="false" />' +
      '<span class="pi-mn-zoom" data-pi-mn-zoom="' +
      i +
      '" title="Fullscreen">⛶</span>' +
      "</div>" +
      '<div class="pi-mn-face pi-mn-face--back">' +
      '<p class="pi-mn-sentence">' +
      esc(c.sentence || c.en || "") +
      "</p>" +
      (c.ru
        ? '<p class="pi-mn-ru">' + esc(c.ru) + "</p>"
        : "") +
      "</div></div></button></article>"
    );
  }

  function mount(opts) {
    var root = opts.root || opts.host;
    if (!root) return;
    var cards = (opts.cards || []).slice();
    if (!cards.length) {
      root.innerHTML =
        '<p class="pi-mn-empty">Mnemonic pictures coming soon.</p>';
      return;
    }

    root.innerHTML =
      '<div class="pi-mn-wrap">' +
      '<div class="pi-mn-toolbar">' +
      '<p class="pi-mn-lead">Look at the picture → guess the phrase → flip to check. Long lines are split into chunks.</p>' +
      '<button type="button" class="pi-mn-pictures-btn" id="piMnPicturesBtn">' +
      '<span class="pi-mn-pictures-ico" aria-hidden="true">🖼</span> Pictures · fullscreen' +
      "</button></div>" +
      '<div class="pi-mn-grid" id="piMnGrid">' +
      cards.map(cardHtml).join("") +
      "</div></div>";

    var lightbox = null;
    var lbIdx = 0;
    var lbFlipped = false;

    function ensureLightbox() {
      if (lightbox) return lightbox;
      var old = document.getElementById("piMnLightbox");
      if (old) old.remove();
      lightbox = document.createElement("div");
      lightbox.className = "pi-mn-lightbox";
      lightbox.id = "piMnLightbox";
      lightbox.hidden = true;
      lightbox.innerHTML =
        '<div class="pi-mn-lightbox-backdrop" data-pi-mn-close></div>' +
        '<div class="pi-mn-lightbox-panel" role="dialog" aria-modal="true" aria-label="Mnemonic picture">' +
        '<header class="pi-mn-lightbox-head">' +
        '<span class="pi-mn-lightbox-hud" id="piMnLbHud"></span>' +
        '<button type="button" class="pi-mn-lightbox-x" data-pi-mn-close aria-label="Close">×</button>' +
        "</header>" +
        '<div class="pi-mn-lightbox-scene" id="piMnLbScene" tabindex="0">' +
        '<div class="pi-mn-lightbox-inner" id="piMnLbInner">' +
        '<div class="pi-mn-lightbox-face pi-mn-lightbox-face--front" id="piMnLbFront"></div>' +
        '<div class="pi-mn-lightbox-face pi-mn-lightbox-face--back" id="piMnLbBack"></div>' +
        "</div></div>" +
        '<p class="pi-mn-lightbox-hint">Tap to flip · ← → to browse · Esc to close</p>' +
        '<div class="pi-mn-lightbox-nav">' +
        '<button type="button" class="pi-mn-lb-btn" id="piMnLbPrev">← Prev</button>' +
        '<button type="button" class="pi-mn-lb-btn pi-mn-lb-btn--flip" id="piMnLbFlip">Flip</button>' +
        '<button type="button" class="pi-mn-lb-btn" id="piMnLbNext">Next →</button>' +
        "</div></div>";
      document.body.appendChild(lightbox);

      lightbox.querySelectorAll("[data-pi-mn-close]").forEach(function (el) {
        el.addEventListener("click", closeLightbox);
      });
      document.getElementById("piMnLbPrev").addEventListener("click", function () {
        lbGo(-1);
      });
      document.getElementById("piMnLbNext").addEventListener("click", function () {
        lbGo(1);
      });
      document.getElementById("piMnLbFlip").addEventListener("click", lbToggleFlip);
      document.getElementById("piMnLbScene").addEventListener("click", function (e) {
        if (e.target.closest("button")) return;
        lbToggleFlip();
      });
      document.getElementById("piMnLbScene").addEventListener("keydown", function (e) {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          lbToggleFlip();
        }
        if (e.key === "ArrowRight") lbGo(1);
        if (e.key === "ArrowLeft") lbGo(-1);
        if (e.key === "Escape") closeLightbox();
      });

      return lightbox;
    }

    function paintLightbox() {
      var c = cards[lbIdx];
      document.getElementById("piMnLbHud").textContent =
        (lbIdx + 1) + " / " + cards.length;
      document.getElementById("piMnLbFront").innerHTML =
        '<img src="' +
        esc(c.img) +
        '" alt="" draggable="false" />';
      document.getElementById("piMnLbBack").innerHTML =
        '<p class="pi-mn-lb-sentence">' +
        esc(c.sentence || c.en || "") +
        "</p>" +
        (c.ru ? '<p class="pi-mn-lb-ru">' + esc(c.ru) + "</p>" : "");
      var inner = document.getElementById("piMnLbInner");
      inner.classList.toggle("is-flipped", lbFlipped);
    }

    function openLightbox(idx) {
      ensureLightbox();
      lbIdx = idx;
      lbFlipped = false;
      paintLightbox();
      lightbox.hidden = false;
      document.body.classList.add("pi-mn-lightbox-open");
      document.getElementById("piMnLbScene").focus();
    }

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.hidden = true;
      document.body.classList.remove("pi-mn-lightbox-open");
    }

    function lbGo(delta) {
      lbIdx = (lbIdx + delta + cards.length) % cards.length;
      lbFlipped = false;
      paintLightbox();
    }

    function lbToggleFlip() {
      lbFlipped = !lbFlipped;
      document
        .getElementById("piMnLbInner")
        .classList.toggle("is-flipped", lbFlipped);
    }

    root.querySelectorAll(".pi-mn-flip").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        if (e.target.closest("[data-pi-mn-zoom]")) return;
        btn.querySelector(".pi-mn-flip-inner").classList.toggle("is-flipped");
      });
    });

    root.querySelectorAll("[data-pi-mn-zoom]").forEach(function (zoom) {
      zoom.addEventListener("click", function (e) {
        e.stopPropagation();
        openLightbox(Number(zoom.getAttribute("data-pi-mn-zoom") || 0));
      });
    });

    var picturesBtn = document.getElementById("piMnPicturesBtn");
    if (picturesBtn) {
      picturesBtn.addEventListener("click", function () {
        openLightbox(0);
      });
    }

    if (!escListenerOn) {
      escListenerOn = true;
      document.addEventListener("keydown", function (e) {
        var lb = document.getElementById("piMnLightbox");
        if (e.key !== "Escape" || !lb || lb.hidden) return;
        lb.hidden = true;
        document.body.classList.remove("pi-mn-lightbox-open");
      });
    }
  }

  global.PRE_INT_MNEMONIC_GRID = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
