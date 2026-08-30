/**
 * Part tabs (Part 1, Part 2…) + compact flip cards per part.
 * window.FCE_VOCAB_MEME_PARTS.mount({ rootId, parts, flipMountId })
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

  function mount(opts) {
    var root = document.getElementById(opts.rootId || "meme-parts-root");
    if (!root || !global.FCE_VOCAB_MEME_FLIP) return;

    var parts = (opts.parts || []).slice();
    var flipMountId = opts.flipMountId || "meme-flip-root";
    var activePart = String(
      opts.initialPart || (parts[0] && parts[0].part) || "1"
    );
    var flipApi = null;

    root.innerHTML =
      '<div class="meme-part-tabs" id="memePartTabs" role="tablist"></div>' +
      '<div class="meme-parts-stage" id="memePartsStage">' +
      '<div id="' +
      esc(flipMountId) +
      '"></div></div>';

    var tabsEl = document.getElementById("memePartTabs");

    function paintTabs() {
      tabsEl.innerHTML = parts
        .map(function (p) {
          var id = String(p.part);
          var on = id === activePart;
          var soon = !(p.cards && p.cards.length);
          return (
            '<button type="button" class="meme-part-tab' +
            (on ? " is-active" : "") +
            (soon ? " is-soon" : "") +
            '" role="tab" data-part="' +
            esc(id) +
            '" aria-selected="' +
            (on ? "true" : "false") +
            '"' +
            (soon ? " disabled" : "") +
            ">" +
            esc(p.label || "Part " + id) +
            (soon ? " · soon" : "") +
            "</button>"
          );
        })
        .join("");
    }

    function mountFlip() {
      var pack = parts.find(function (p) {
        return String(p.part) === activePart;
      });
      var stage = document.getElementById("memePartsStage");
      var mountNode = document.getElementById(flipMountId);
      if (!pack || !pack.cards || !pack.cards.length) {
        mountNode.innerHTML =
          '<p class="meme-parts-empty">Part ' +
          esc(activePart) +
          " — cards coming soon.</p>";
        flipApi = null;
        return;
      }
      mountNode.innerHTML = "";
      flipApi = global.FCE_VOCAB_MEME_FLIP.mount({
        rootId: flipMountId,
        cards: pack.cards,
        compact: true,
        hintText: "Tap card to flip · check the line from the listening"
      });
    }

    function setPart(id) {
      var pack = parts.find(function (p) {
        return String(p.part) === String(id);
      });
      if (!pack || !pack.cards || !pack.cards.length) return;
      activePart = String(id);
      paintTabs();
      mountFlip();
      if (opts.onPartChange) opts.onPartChange(activePart);
      try {
        history.replaceState(null, "", "#part" + activePart);
      } catch (e) {}
    }

    tabsEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".meme-part-tab");
      if (!btn || btn.disabled) return;
      setPart(btn.getAttribute("data-part"));
    });

    paintTabs();
    mountFlip();

    var hash = (location.hash || "").match(/^#part(\d+)$/);
    if (hash) setPart(hash[1]);
  }

  global.FCE_VOCAB_MEME_PARTS = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
