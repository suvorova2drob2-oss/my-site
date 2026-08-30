/**
 * FCE Vocabulary — meme tabs (one picture per sentence).
 * window.FCE_VOCAB_MEME_TABS.mount({ rootId, tabs })
 * tabs[]: { id, label, img, hints[], sentence, highlight }
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

  function highlightSentence(sentence, chunk) {
    var ex = String(sentence || "");
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
    var root = document.getElementById(opts.rootId || "meme-tabs-root");
    if (!root) return;
    var tabs = (opts.tabs || []).slice();
    if (!tabs.length) {
      root.innerHTML = '<p class="meme-empty">No tabs yet.</p>';
      return;
    }

    var idx = 0;
    var sentenceVisible = false;

    root.innerHTML =
      '<div class="meme-tabs-box">' +
      '<div class="meme-tabs-strip" id="memeTabsStrip" role="tablist"></div>' +
      '<div class="meme-tab-panel" id="memeTabPanel"></div>' +
      '<p class="meme-tabs-foot" id="memeTabsFoot"></p>' +
      '<div class="meme-tabs-nav">' +
      '<button type="button" class="meme-flip-btn" id="memeTabsPrev">← Previous</button>' +
      '<button type="button" class="meme-flip-btn meme-flip-btn--primary" id="memeTabsNext">Next →</button>' +
      "</div></div>";

    var strip = document.getElementById("memeTabsStrip");
    var panel = document.getElementById("memeTabPanel");
    var foot = document.getElementById("memeTabsFoot");

    strip.innerHTML = tabs
      .map(function (t, i) {
        return (
          '<button type="button" class="meme-tab-btn' +
          (i === 0 ? " is-active" : "") +
          '" role="tab" data-idx="' +
          i +
          '" aria-selected="' +
          (i === 0 ? "true" : "false") +
          '">' +
          esc(t.label || String(i + 1)) +
          "</button>"
        );
      })
      .join("");

    function renderPanel() {
      var t = tabs[idx];
      sentenceVisible = false;
      var hints = (t.hints || [])
        .map(function (h) {
          return '<span class="meme-tab-hint">' + esc(h) + "</span>";
        })
        .join("");
      panel.innerHTML =
        '<div class="meme-tab-img-wrap">' +
        '<img class="meme-tab-img" src="' +
        esc(t.img) +
        '" alt="" loading="lazy" />' +
        "</div>" +
        (hints ? '<div class="meme-tab-hints">' + hints + "</div>" : "") +
        '<div class="meme-tab-reveal-row">' +
        '<button type="button" class="meme-tab-reveal-btn" id="memeTabReveal">Show sentence</button>' +
        '<p class="meme-tab-sentence" id="memeTabSentence" hidden></p>' +
        "</div>";
      foot.textContent =
        "Tab " + (idx + 1) + " / " + tabs.length + " · guess from the picture, then reveal";
      document.getElementById("memeTabReveal").addEventListener("click", function () {
        sentenceVisible = !sentenceVisible;
        var sent = document.getElementById("memeTabSentence");
        var btn = document.getElementById("memeTabReveal");
        if (sentenceVisible) {
          sent.innerHTML = highlightSentence(t.sentence, t.highlight);
          sent.hidden = false;
          btn.textContent = "Hide sentence";
        } else {
          sent.hidden = true;
          btn.textContent = "Show sentence";
        }
      });
    }

    function setIdx(next) {
      idx = (next + tabs.length) % tabs.length;
      strip.querySelectorAll(".meme-tab-btn").forEach(function (btn, i) {
        var on = i === idx;
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-selected", on ? "true" : "false");
      });
      renderPanel();
    }

    strip.addEventListener("click", function (e) {
      var btn = e.target.closest(".meme-tab-btn");
      if (!btn) return;
      setIdx(Number(btn.getAttribute("data-idx")));
    });
    document.getElementById("memeTabsPrev").addEventListener("click", function () {
      setIdx(idx - 1);
    });
    document.getElementById("memeTabsNext").addEventListener("click", function () {
      setIdx(idx + 1);
    });

    renderPanel();
  }

  global.FCE_VOCAB_MEME_TABS = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
