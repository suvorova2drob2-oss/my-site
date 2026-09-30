/**
 * Pre-intermediate · mnemonic pictures
 * Inline UI: Pictures · fullscreen button only · images + flip lines in lightbox
 */
(function (global) {
  "use strict";

  var escListenerOn = false;

  function syncBodyLightboxClass() {
    var pic = document.getElementById("piMnLightbox");
    var phr = document.getElementById("piMnPhraseLightbox");
    var anyOpen = (pic && !pic.hidden) || (phr && !phr.hidden);
    document.body.classList.toggle("pi-mn-lightbox-open", anyOpen);
  }

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function speakerClass(sentence) {
    var s = String(sentence || "").trim();
    if (s.indexOf("S:") === 0) return " pi-mn-sentence--s";
    if (s.indexOf("V:") === 0) return " pi-mn-sentence--v";
    return "";
  }

  function cardHtml(c, i) {
    var spCls = speakerClass(c.sentence || c.en || "");
    var frontCue = c.ru
      ? '<p class="pi-mn-front-cue">' + esc(c.ru) + "</p>"
      : '<p class="pi-mn-front-cue pi-mn-front-cue--bare">Line ' +
        (i + 1) +
        "</p>";
    return (
      '<article class="pi-mn-card" data-pi-mn-idx="' +
      i +
      '">' +
      '<button type="button" class="pi-mn-flip" aria-label="Flip card ' +
      (i + 1) +
      '">' +
      '<div class="pi-mn-flip-inner">' +
      '<div class="pi-mn-face pi-mn-face--front">' +
      '<span class="pi-mn-front-num">' +
      (i + 1) +
      "</span>" +
      frontCue +
      '<span class="pi-mn-front-hint">Tap · English on back</span>' +
      "</div>" +
      '<div class="pi-mn-face pi-mn-face--back">' +
      '<p class="pi-mn-sentence' +
      spCls +
      '">' +
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

    var inPaper = !!opts.inPaper;
    var showPhraseCards = !!opts.showPhraseCards;
    var lead =
      opts.leadText ||
      (showPhraseCards
        ? "RU cue → tap to flip the English line. Comic pictures via Pictures · fullscreen."
        : "Comic cues — picture on front, English line on flip. Only in fullscreen.");
    var gridHtml = showPhraseCards
      ? '<div class="pi-mn-grid" id="piMnGrid">' +
        cards.map(cardHtml).join("") +
        "</div>"
      : "";
    root.innerHTML =
      '<div class="pi-mn-wrap pi-mn-wrap--fullscreen-only' +
      (inPaper ? " pi-mn-wrap--paper" : "") +
      '">' +
      '<div class="pi-mn-toolbar">' +
      (opts.hideLead
        ? ""
        : '<p class="pi-mn-lead">' + esc(lead) + "</p>") +
      '<div class="pi-mn-toolbar-actions">' +
      '<button type="button" class="pi-mn-pictures-btn" id="piMnPicturesBtn">' +
      '<span class="pi-mn-pictures-ico" aria-hidden="true">🖼</span> Pictures · fullscreen' +
      "</button>" +
      '<button type="button" class="pi-mn-phrases-btn" id="piMnPhrasesBtn" aria-label="Phrase cards Russian front English back fullscreen">' +
      '<span class="pi-mn-phrases-ico" aria-hidden="true">📝</span> Lines · RU → EN' +
      "</button></div></div>" +
      gridHtml +
      "</div>";

    var lightbox = null;
    var lbIdx = 0;
    var lbFlipped = false;
    var phraseLightbox = null;
    var plIdx = 0;
    var plFlipped = false;

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
      syncBodyLightboxClass();
      document.getElementById("piMnLbScene").focus();
    }

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.hidden = true;
      syncBodyLightboxClass();
    }

    function ensurePhraseLightbox() {
      if (phraseLightbox) return phraseLightbox;
      var old = document.getElementById("piMnPhraseLightbox");
      if (old) old.remove();
      phraseLightbox = document.createElement("div");
      phraseLightbox.className = "pi-mn-lightbox pi-mn-lightbox--phrases";
      phraseLightbox.id = "piMnPhraseLightbox";
      phraseLightbox.hidden = true;
      phraseLightbox.innerHTML =
        '<div class="pi-mn-lightbox-backdrop" data-pi-mn-pl-close></div>' +
        '<div class="pi-mn-lightbox-panel" role="dialog" aria-modal="true" aria-label="Phrase flip cards">' +
        '<header class="pi-mn-lightbox-head">' +
        '<span class="pi-mn-lightbox-hud pi-mn-lightbox-hud--phrases" id="piMnPlHud"></span>' +
        '<button type="button" class="pi-mn-lightbox-x" data-pi-mn-pl-close aria-label="Close">×</button>' +
        "</header>" +
        '<div class="pi-mn-lightbox-scene" id="piMnPlScene" tabindex="0">' +
        '<div class="pi-mn-lightbox-inner pi-mn-lightbox-inner--phrases" id="piMnPlInner">' +
        '<div class="pi-mn-lightbox-face pi-mn-lightbox-face--front" id="piMnPlFront"></div>' +
        '<div class="pi-mn-lightbox-face pi-mn-lightbox-face--back" id="piMnPlBack"></div>' +
        "</div></div>" +
        '<p class="pi-mn-lightbox-hint">Russian → tap to flip English · ← → · Esc</p>' +
        '<div class="pi-mn-lightbox-nav">' +
        '<button type="button" class="pi-mn-lb-btn" id="piMnPlPrev">← Prev</button>' +
        '<button type="button" class="pi-mn-lb-btn pi-mn-lb-btn--flip pi-mn-lb-btn--flip-phrases" id="piMnPlFlip">Flip</button>' +
        '<button type="button" class="pi-mn-lb-btn" id="piMnPlNext">Next →</button>' +
        "</div></div>";
      document.body.appendChild(phraseLightbox);

      phraseLightbox.querySelectorAll("[data-pi-mn-pl-close]").forEach(function (el) {
        el.addEventListener("click", closePhraseLightbox);
      });
      document.getElementById("piMnPlPrev").addEventListener("click", function () {
        plGo(-1);
      });
      document.getElementById("piMnPlNext").addEventListener("click", function () {
        plGo(1);
      });
      document.getElementById("piMnPlFlip").addEventListener("click", plToggleFlip);
      document.getElementById("piMnPlScene").addEventListener("click", function (e) {
        if (e.target.closest("button")) return;
        plToggleFlip();
      });
      document.getElementById("piMnPlScene").addEventListener("keydown", function (e) {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          plToggleFlip();
        }
        if (e.key === "ArrowRight") plGo(1);
        if (e.key === "ArrowLeft") plGo(-1);
        if (e.key === "Escape") closePhraseLightbox();
      });

      return phraseLightbox;
    }

    function paintPhraseLightbox() {
      var c = cards[plIdx];
      var spCls = speakerClass(c.sentence || c.en || "");
      document.getElementById("piMnPlHud").textContent =
        (plIdx + 1) + " / " + cards.length + " · RU → EN";
      document.getElementById("piMnPlFront").innerHTML =
        '<p class="pi-mn-lb-ru pi-mn-lb-ru--front">' +
        esc(c.ru || "—") +
        "</p>";
      document.getElementById("piMnPlBack").innerHTML =
        '<p class="pi-mn-lb-sentence' +
        spCls +
        '">' +
        esc(c.sentence || c.en || "") +
        "</p>";
      document
        .getElementById("piMnPlInner")
        .classList.toggle("is-flipped", plFlipped);
    }

    function openPhraseLightbox(idx) {
      ensurePhraseLightbox();
      plIdx = idx;
      plFlipped = false;
      paintPhraseLightbox();
      phraseLightbox.hidden = false;
      syncBodyLightboxClass();
      document.getElementById("piMnPlScene").focus();
    }

    function closePhraseLightbox() {
      if (!phraseLightbox) return;
      phraseLightbox.hidden = true;
      syncBodyLightboxClass();
    }

    function plGo(delta) {
      plIdx = (plIdx + delta + cards.length) % cards.length;
      plFlipped = false;
      paintPhraseLightbox();
    }

    function plToggleFlip() {
      plFlipped = !plFlipped;
      document
        .getElementById("piMnPlInner")
        .classList.toggle("is-flipped", plFlipped);
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

    if (showPhraseCards) {
      root.querySelectorAll(".pi-mn-flip").forEach(function (btn) {
        btn.addEventListener("click", function () {
          btn
            .querySelector(".pi-mn-flip-inner")
            .classList.toggle("is-flipped");
        });
      });
    }

    var picturesBtn = document.getElementById("piMnPicturesBtn");
    if (picturesBtn) {
      picturesBtn.addEventListener("click", function () {
        openLightbox(0);
      });
    }

    var phrasesBtn = document.getElementById("piMnPhrasesBtn");
    if (phrasesBtn) {
      phrasesBtn.addEventListener("click", function () {
        openPhraseLightbox(0);
      });
    }

    if (!escListenerOn) {
      escListenerOn = true;
      document.addEventListener("keydown", function (e) {
        if (e.key !== "Escape") return;
        var lb = document.getElementById("piMnLightbox");
        var pl = document.getElementById("piMnPhraseLightbox");
        if (pl && !pl.hidden) {
          pl.hidden = true;
          syncBodyLightboxClass();
          return;
        }
        if (lb && !lb.hidden) {
          lb.hidden = true;
          syncBodyLightboxClass();
        }
      });
    }
  }

  global.PRE_INT_MNEMONIC_GRID = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
