/**
 * Part tabs (Part 1, Part 2…) + flip cards or comic strip per part.
 * window.FCE_VOCAB_MEME_PARTS.mount({ rootId, parts, flipMountId, comics })
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
    var comics = opts.comics || [];
    var flipMountId = opts.flipMountId || "meme-flip-root";
    var comicMountId = opts.comicMountId || "meme-comic-root";
    var activePart = String(
      opts.initialPart || (parts[0] && parts[0].part) || "1"
    );
    var activeView = "flip";
    var flipApi = null;

    root.innerHTML =
      '<div class="meme-view-tabs" id="memeViewTabs" role="tablist" aria-label="View mode">' +
      '<button type="button" class="meme-view-tab is-active" data-view="flip" role="tab" aria-selected="true">Flip cards</button>' +
      (comics.length && global.FCE_VOCAB_MEME_COMIC
        ? '<button type="button" class="meme-view-tab" data-view="comic" role="tab" aria-selected="false">Comic</button>'
        : "") +
      "</div>" +
      '<div class="meme-part-tabs" id="memePartTabs" role="tablist"></div>' +
      '<div class="meme-parts-stage" id="memePartsStage">' +
      '<div id="' +
      esc(flipMountId) +
      '"></div>' +
      (comics.length && global.FCE_VOCAB_MEME_COMIC
        ? '<div id="' + esc(comicMountId) + '" hidden></div>'
        : "") +
      "</div>";

    var tabsEl = document.getElementById("memePartTabs");
    var viewTabsEl = document.getElementById("memeViewTabs");

    function comicForPart(partId) {
      return comics.find(function (c) {
        return String(c.part) === String(partId);
      });
    }

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

    function paintViewTabs() {
      if (!viewTabsEl) return;
      viewTabsEl.querySelectorAll(".meme-view-tab").forEach(function (btn) {
        var on = btn.getAttribute("data-view") === activeView;
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-selected", on ? "true" : "false");
      });
      document.body.classList.toggle("meme-view-comic", activeView === "comic");
    }

    function mountFlip() {
      var pack = parts.find(function (p) {
        return String(p.part) === activePart;
      });
      var mountNode = document.getElementById(flipMountId);
      var comicNode = document.getElementById(comicMountId);
      if (comicNode) comicNode.hidden = true;
      if (mountNode) mountNode.hidden = false;
      if (!pack || !pack.cards || !pack.cards.length) {
        if (mountNode) {
          mountNode.innerHTML =
            '<p class="meme-parts-empty">Part ' +
            esc(activePart) +
            " — cards coming soon.</p>";
        }
        flipApi = null;
        return;
      }
      if (mountNode) mountNode.innerHTML = "";
      flipApi = global.FCE_VOCAB_MEME_FLIP.mount({
        rootId: flipMountId,
        cards: pack.cards,
        compact: true,
        hintText: "Tap card to flip · check the line from the listening"
      });
    }

    function mountComic() {
      var pack = parts.find(function (p) {
        return String(p.part) === activePart;
      });
      var mountNode = document.getElementById(flipMountId);
      var comicNode = document.getElementById(comicMountId);
      if (mountNode) mountNode.hidden = true;
      if (!comicNode || !global.FCE_VOCAB_MEME_COMIC) {
        mountFlip();
        return;
      }
      comicNode.hidden = false;
      var meta = comicForPart(activePart);
      if (!pack || !pack.cards || !pack.cards.length || !meta) {
        comicNode.innerHTML =
          '<p class="meme-comic-empty">Comic for Part ' +
          esc(activePart) +
          " is not ready yet.</p>";
        flipApi = null;
        return;
      }
      global.FCE_VOCAB_MEME_COMIC.mount({
        rootId: comicMountId,
        cards: pack.cards,
        comic: meta
      });
      flipApi = null;
    }

    function mountActiveView() {
      if (activeView === "comic" && comics.length && global.FCE_VOCAB_MEME_COMIC) {
        mountComic();
      } else {
        activeView = "flip";
        mountFlip();
      }
      paintViewTabs();
    }

    function setPart(id) {
      var pack = parts.find(function (p) {
        return String(p.part) === String(id);
      });
      if (!pack || !pack.cards || !pack.cards.length) return;
      activePart = String(id);
      paintTabs();
      mountActiveView();
      if (opts.onPartChange) opts.onPartChange(activePart);
      try {
        var hash = "#part" + activePart;
        if (activeView === "comic") hash += "-comic";
        history.replaceState(null, "", hash);
      } catch (e) {}
    }

    function setView(view) {
      if (view !== "comic" || !comics.length || !global.FCE_VOCAB_MEME_COMIC) {
        activeView = "flip";
      } else {
        activeView = "comic";
      }
      paintViewTabs();
      mountActiveView();
      try {
        var hash = "#part" + activePart;
        if (activeView === "comic") hash += "-comic";
        history.replaceState(null, "", hash);
      } catch (e) {}
    }

    if (viewTabsEl) {
      viewTabsEl.addEventListener("click", function (e) {
        var btn = e.target.closest(".meme-view-tab");
        if (!btn) return;
        setView(btn.getAttribute("data-view"));
      });
    }

    tabsEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".meme-part-tab");
      if (!btn || btn.disabled) return;
      setPart(btn.getAttribute("data-part"));
    });

    paintTabs();

    var hash = location.hash || "";
    var comicHash = hash.match(/^#part(\d+)-comic$/);
    var partHash = hash.match(/^#part(\d+)$/);
    if (comicHash) {
      activeView = "comic";
      activePart = comicHash[1];
      paintTabs();
    } else if (partHash) {
      activePart = partHash[1];
      paintTabs();
    }

    mountActiveView();
  }

  global.FCE_VOCAB_MEME_PARTS = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
