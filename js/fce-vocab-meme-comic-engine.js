/**
 * Vocabulary memes — comic page (all panels on one screen + hide text for retell).
 * FCE_VOCAB_MEME_COMIC.mount({ rootId, cards, comic })
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

  function highlightCaption(text, chunk) {
    var ex = String(text || "");
    var hl = String(chunk || "").trim();
    if (!hl) return esc(ex);
    var ix = ex.toLowerCase().indexOf(hl.toLowerCase());
    if (ix < 0) return esc(ex);
    return (
      esc(ex.slice(0, ix)) +
      '<em class="meme-comic-hl">' +
      esc(ex.slice(ix, ix + hl.length)) +
      "</em>" +
      esc(ex.slice(ix + hl.length))
    );
  }

  function mount(opts) {
    var root = document.getElementById(opts.rootId || "meme-comic-root");
    if (!root) return null;
    var comic = opts.comic || {};
    var cards = opts.cards || [];
    var byId = {};
    cards.forEach(function (c) {
      if (c && c.id) byId[c.id] = c;
    });

    var panels = (comic.panels || [])
      .map(function (p) {
        var card = byId[p.cardId];
        if (!card || !card.img) return null;
        return { panel: p, card: card };
      })
      .filter(Boolean);

    if (!panels.length) {
      root.innerHTML =
        '<p class="meme-comic-empty">Comic panels for this part are not ready yet.</p>';
      return null;
    }

    var html =
      '<article class="meme-comic-strip" aria-label="' +
      esc(comic.title || "Story comic") +
      '">' +
      '<header class="meme-comic-toolbar">' +
      '<div class="meme-comic-toolbar-text">' +
      '<p class="meme-comic-kicker">Comic · read left → right</p>' +
      '<h2 class="meme-comic-title">' +
      esc(comic.title || "") +
      "</h2>" +
      "</div>" +
      '<button type="button" class="meme-comic-text-btn" id="memeComicTextBtn" aria-pressed="false">' +
      "Hide text · retell from memory" +
      "</button>" +
      "</header>" +
      '<p class="meme-comic-lead" id="memeComicLead">All panels on one page — then hide the captions and retell aloud.</p>' +
      '<div class="meme-comic-page" data-n="' +
      panels.length +
      '">';

    panels.forEach(function (row, i) {
      var p = row.panel;
      var c = row.card;
      var time = p.time
        ? '<span class="meme-comic-time">' + esc(p.time) + "</span>"
        : "";
      html +=
        '<section class="meme-comic-panel" data-idx="' +
        String(i + 1) +
        '">' +
        '<span class="meme-comic-num" aria-hidden="true">' +
        String(i + 1) +
        "</span>" +
        time +
        '<figure class="meme-comic-frame">' +
        '<img src="' +
        esc(c.img) +
        '" alt="" loading="lazy" decoding="async" />' +
        "</figure>" +
        '<blockquote class="meme-comic-bubble">' +
        highlightCaption(p.caption || c.sentence || "", c.highlight) +
        "</blockquote>" +
        "</section>";
    });

    html += "</div></article>";
    root.innerHTML = html;

    var strip = root.querySelector(".meme-comic-strip");
    var btn = document.getElementById("memeComicTextBtn");
    var lead = document.getElementById("memeComicLead");

    function setTextHidden(hidden) {
      if (!strip || !btn) return;
      strip.classList.toggle("meme-comic-strip--no-text", hidden);
      btn.setAttribute("aria-pressed", hidden ? "true" : "false");
      btn.textContent = hidden
        ? "Show text again"
        : "Hide text · retell from memory";
      if (lead) {
        lead.textContent = hidden
          ? "Pictures only — retell the story in order, using the book phrases if you can."
          : "All panels on one page — then hide the captions and retell aloud.";
      }
    }

    if (btn) {
      btn.addEventListener("click", function () {
        setTextHidden(!strip.classList.contains("meme-comic-strip--no-text"));
      });
    }

    return { panelCount: panels.length, setTextHidden: setTextHidden };
  }

  global.FCE_VOCAB_MEME_COMIC = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
