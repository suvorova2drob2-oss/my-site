/**
 * Paraphrase practice (Variants 2–3). Full page — flip cards (no typing).
 * FCE_LIFESTYLE_PARAPHRASE.mount({ rootId, variants, mode?: "flip"|"type" })
 */
(function (W) {
  "use strict";

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function normGap(s) {
    return String(s || "")
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[.,!?;:—–-]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function matches(item, value) {
    var got = normGap(value);
    if (!got) return false;
    if (item.key) {
      var word = normGap(item.key);
      var re = new RegExp(
        "(^| )" + word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "( |$)"
      );
      if (!re.test(got)) return false;
    }
    var answers = item.answers || [];
    var i;
    for (i = 0; i < answers.length; i++) {
      if (got === normGap(answers[i])) return true;
    }
    return false;
  }

  function variantBar(variants, varIx) {
    if (variants.length < 2) return "";
    var html = '<div class="lp-var-bar" role="group" aria-label="Variant">';
    var i;
    for (i = 0; i < variants.length; i++) {
      html +=
        '<button type="button" class="lp-var' +
        (i === varIx ? " is-on" : "") +
        '" data-lp-var="' +
        i +
        '">' +
        esc(variants[i].kicker || "Variant " + (i + 1)) +
        "</button>";
    }
    return html + "</div>";
  }

  function mountFlip(root, variants) {
    var varIx = 0;
    var ix = 0;
    var flipped = false;

    function pack() {
      return variants[varIx] || variants[0];
    }

    function items() {
      return (pack().items || []).slice();
    }

    function paint() {
      var p = pack();
      var list = items();
      var item = list[ix];
      if (!item) {
        root.innerHTML = '<p class="lp-empty">No items in this variant.</p>';
        return;
      }
      var frontLabel = p.promptLabel || "Say it in other words";
      var backLabel = p.answerLabel || "Model sentence";
      var models = item.answers || [];
      var modelHtml = models.map(function (m) {
        return "<p class=\"lp-flip-model-line\">" + esc(m) + "</p>";
      }).join("");

      root.innerHTML =
        '<div class="lp-page">' +
        variantBar(variants, varIx) +
        "<h2 class=\"lp-title\">" +
        esc(p.title || "") +
        "</h2>" +
        '<p class="lp-note">' +
        esc(p.note || "") +
        "</p>" +
        '<p class="lp-meta"><span class="lp-count">' +
        (ix + 1) +
        " / " +
        list.length +
        '</span><span class="lp-flip-hint">Say aloud, then flip</span></p>' +
        '<div class="lp-flip-scene" id="lpFlipScene" tabindex="0" role="button" aria-label="Paraphrase card — tap to flip">' +
        '<div class="lp-flip-inner' +
        (flipped ? " is-flipped" : "") +
        '" id="lpFlipInner">' +
        '<div class="lp-flip-face lp-flip-front">' +
        '<p class="lp-flip-side-label">' +
        esc(frontLabel) +
        "</p>" +
        '<div class="lp-flip-body">' +
        '<p class="lp-flip-sent">' +
        esc(item.sentence) +
        "</p>" +
        (item.key
          ? '<p class="lp-kw">Key word: <strong>' + esc(item.key) + "</strong></p>"
          : "") +
        "</div>" +
        '<span class="lp-flip-tap">Tap to flip ↻</span></div>' +
        '<div class="lp-flip-face lp-flip-back">' +
        '<p class="lp-flip-side-label">' +
        esc(backLabel) +
        "</p>" +
        '<div class="lp-flip-body">' +
        modelHtml +
        "</div>" +
        '<span class="lp-flip-tap lp-flip-tap--back">Flip back ↻</span></div></div></div>' +
        '<div class="lp-nav">' +
        '<button type="button" class="lp-back" data-lp-nav="back"' +
        (ix === 0 ? " disabled" : "") +
        ">← Previous</button>" +
        '<button type="button" class="lp-next" data-lp-nav="next"' +
        (ix >= list.length - 1 ? " disabled" : "") +
        ">Next →</button>" +
        "</div></div>";

      var scene = document.getElementById("lpFlipScene");
      if (!scene) return;
      scene.addEventListener("click", function (e) {
        if (e.target.closest("button")) return;
        flipped = !flipped;
        var inner = document.getElementById("lpFlipInner");
        if (inner) inner.classList.toggle("is-flipped", flipped);
      });
      scene.addEventListener("keydown", function (e) {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          flipped = !flipped;
          var inner = document.getElementById("lpFlipInner");
          if (inner) inner.classList.toggle("is-flipped", flipped);
        }
        if (e.key === "ArrowRight" && ix < list.length - 1) {
          ix++;
          flipped = false;
          paint();
        }
        if (e.key === "ArrowLeft" && ix > 0) {
          ix--;
          flipped = false;
          paint();
        }
      });
    }

    root.addEventListener("click", function (e) {
      var vBtn = e.target.closest("[data-lp-var]");
      if (vBtn) {
        varIx = Number(vBtn.getAttribute("data-lp-var")) || 0;
        ix = 0;
        flipped = false;
        paint();
        return;
      }
      var nav = e.target.closest("[data-lp-nav]");
      if (!nav || nav.disabled) return;
      var dir = nav.getAttribute("data-lp-nav");
      var list = items();
      if (dir === "back" && ix > 0) {
        ix--;
        flipped = false;
        paint();
      } else if (dir === "next" && ix < list.length - 1) {
        ix++;
        flipped = false;
        paint();
      }
    });

    paint();
  }

  function mountType(root, variants) {
    var varIx = 0;
    var ix = 0;
    var done = false;
    var saved = [];

    function pack() {
      return variants[varIx] || variants[0];
    }

    function html() {
      var p = pack();
      var items = p.items || [];
      if (done) {
        var okN = 0;
        var n;
        for (n = 0; n < items.length; n++) {
          if (saved[n] && saved[n].ok) okN++;
        }
        return (
          '<div class="lp-page">' +
          variantBar(variants, varIx) +
          '<p class="lp-done">' +
          okN +
          " / " +
          items.length +
          '</p><div class="lp-nav"><button type="button" class="lp-next" data-lp-nav="restart">Сначала</button></div></div>'
        );
      }
      var item = items[ix];
      var st = saved[ix] || { value: "", checked: false, ok: false };
      var status = "";
      if (st.checked && st.ok) status = '<p class="lp-ok">Correct.</p>';
      else if (st.checked) {
        status =
          '<p class="lp-key"><span>Key</span> ' +
          esc((item.answers || []).join(" / ")) +
          "</p>";
      }
      return (
        '<div class="lp-page">' +
        variantBar(variants, varIx) +
        "<h2 class=\"lp-title\">" +
        esc(p.title || "") +
        "</h2>" +
        '<p class="lp-note">' +
        esc(p.note || "") +
        "</p>" +
        '<p class="lp-count">' +
        (ix + 1) +
        " / " +
        items.length +
        "</p>" +
        (p.promptLabel
          ? '<p class="lp-label">' + esc(p.promptLabel) + "</p>"
          : "") +
        '<p class="lp-src">' +
        esc(item.sentence) +
        "</p>" +
        (item.key
          ? '<p class="lp-kw">Key word: <strong>' + esc(item.key) + "</strong></p>"
          : "") +
        '<label class="lp-lab">' +
        esc(p.answerLabel || "Your sentence") +
        '<textarea class="lp-input' +
        (st.checked ? (st.ok ? " is-ok" : " is-bad") : "") +
        '" data-lp-input rows="3"' +
        (st.checked ? " readonly" : "") +
        ">" +
        esc(st.value || "") +
        "</textarea></label>" +
        status +
        '<div class="lp-nav">' +
        '<button type="button" class="lp-back" data-lp-nav="back"' +
        (ix === 0 ? " hidden" : "") +
        ">Назад</button>" +
        (st.checked
          ? '<button type="button" class="lp-next" data-lp-nav="next">Следующий элемент</button>'
          : '<button type="button" class="lp-next" data-lp-nav="check">Check</button>') +
        "</div></div>"
      );
    }

    function paint() {
      root.innerHTML = html();
    }

    root.addEventListener("click", function (e) {
      var vBtn = e.target.closest("[data-lp-var]");
      if (vBtn) {
        varIx = Number(vBtn.getAttribute("data-lp-var")) || 0;
        ix = 0;
        done = false;
        saved = [];
        paint();
        return;
      }
      var nav = e.target.closest("[data-lp-nav]");
      if (!nav) return;
      var dir = nav.getAttribute("data-lp-nav");
      var items = pack().items || [];
      if (dir === "check") {
        var input = root.querySelector("[data-lp-input]");
        var value = input ? input.value : "";
        saved[ix] = {
          value: value,
          checked: true,
          ok: matches(items[ix], value)
        };
        paint();
        return;
      }
      if (dir === "back" && ix > 0) ix--;
      else if (dir === "next") {
        if (ix < items.length - 1) ix++;
        else done = true;
      } else if (dir === "restart") {
        ix = 0;
        done = false;
        saved = [];
      }
      paint();
    });

    paint();
  }

  function mount(cfg) {
    cfg = cfg || {};
    var root = document.getElementById(cfg.rootId || "paraphrase-root");
    var variants = cfg.variants || [];
    if (!root || !variants.length) return;
    var mode = cfg.mode || "flip";
    if (mode === "type") mountType(root, variants);
    else mountFlip(root, variants);
  }

  W.FCE_LIFESTYLE_PARAPHRASE = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
