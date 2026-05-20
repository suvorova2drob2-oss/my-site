/**
 * Minimal UI helpers for CPE retell-chain pages (radio rails + accordion).
 *
 * Layering (Reuse in other units):
 *   prep-retell-chain-kit.js            — this file
 *   prep-retell-chain-speech-match.js   — mic fuzzy matching
 *   prep-retell-chain-timed-copy.js     — timed overlay strings
 *   prep-retell-chain-timed-engine.js   — three-phase timed drill
 *   unitN-retell-chain-sources.js       — segments + packs for that unit
 *   unitN-retell-chain-page.js          — wires DOM ids → mount()
 *
 * Content lives in per-unit *-retell-chain-sources.js modules.
 */
(function (W) {
  "use strict";

  function escAttr(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  }

  function escHtml(s) {
    var d = W.document.createElement("div");
    d.textContent = s == null ? "" : String(s);
    return d.innerHTML;
  }

  /**
   * @param {string} para
   * @param {{ ans?: string }[]} rows
   * @param {number} maxN
   */
  function chipsFromParagraph(para, rows, maxN) {
    var out = [];
    if (!para || !rows) return out;
    var cap = maxN != null && maxN > 0 ? maxN : 999;
    var i;
    for (i = 0; i < rows.length; i++) {
      var ans = String(rows[i].ans != null ? rows[i].ans : "").trim();
      if (!ans) continue;
      if (para.indexOf(ans) !== -1) out.push(ans);
      if (out.length >= cap) break;
    }
    return out;
  }

  function chipsHtml(phrases) {
    if (!phrases.length) return "<span>No lexical hits in bank order.</span>";
    var i;
    var parts = [];
    for (i = 0; i < phrases.length; i++) {
      parts.push("<span>" + escHtml(phrases[i]) + "</span>");
    }
    return parts.join("");
  }

  /**
   * @param {HTMLElement} container
   * @param {{ name: string, selected: string, items: { value: string, title: string, tagline?: string, icon?: string }[], inputClass?: string, pillClass?: string, onChange?: (v: string) => void }} opts
   */
  function renderRadioRail(container, opts) {
    if (!container || !opts || !opts.items || !opts.items.length) return;
    var name = opts.name || "rail";
    var sel = opts.selected || opts.items[0].value;
    var inputClass = opts.inputClass || "theme-input";
    var pillClass = opts.pillClass || "theme-pill";
    var html = "";
    var i;
    for (i = 0; i < opts.items.length; i++) {
      var it = opts.items[i];
      var sid = name + "-opt-" + String(it.value).replace(/[^a-z0-9_-]/gi, "");
      var chk = it.value === sel ? " checked" : "";
      html +=
        '<div class="theme-cell">' +
        '<input type="radio" class="' +
        escAttr(inputClass) +
        '" name="' +
        escAttr(name) +
        '" id="' +
        escAttr(sid) +
        '" value="' +
        escAttr(it.value) +
        '"' +
        chk +
        " />" +
        '<label class="' +
        escAttr(pillClass) +
        '" for="' +
        escAttr(sid) +
        '">' +
        '<span class="theme-ico" aria-hidden="true">' +
        escHtml(it.icon || "") +
        "</span>" +
        '<span class="theme-title">' +
        escHtml(it.title) +
        "</span>" +
        '<span class="theme-tag">' +
        escHtml(it.tagline || "") +
        "</span>" +
        "</label>" +
        "</div>";
    }
    container.innerHTML = html;

    container.querySelectorAll('input[type="radio"]').forEach(function (inp) {
      if (inp.name !== name) return;
      inp.addEventListener("change", function () {
        if (!inp.checked || typeof opts.onChange !== "function") return;
        opts.onChange(inp.value);
      });
    });
  }

  /**
   * @param {HTMLElement} host
   * @param {{ key: string, sumTitle: string, sumDesc: string, transcript: string, stepNum: string, aimEn: string, aimRu: string, chipRows: object[], maxChips?: number, links?: { href: string, label: string }[] }[]} segments
   */
  function renderAccordion(host, segments) {
    if (!host || !segments || !segments.length) {
      if (host) host.innerHTML = "";
      return;
    }
    var html = "";
    var si;
    for (si = 0; si < segments.length; si++) {
      var seg = segments[si];
      var maxC = seg.maxChips != null ? seg.maxChips : 12;
      var chips = chipsFromParagraph(seg.transcript, seg.chipRows || [], maxC);
      var links = seg.links || [];
      var foot = "";
      var li;
      for (li = 0; li < links.length; li++) {
        foot +=
          '<a class="text-drop-alone" href="' +
          escAttr(links[li].href) +
          '">' +
          escHtml(links[li].label) +
          " \u2197</a>";
      }
      html +=
        '<details class="text-drop" data-retell-seg="' +
        escAttr(seg.key) +
        '">' +
        "<summary>" +
        '<div class="sum-main">' +
        '<span class="sum-title">' +
        escHtml(seg.sumTitle) +
        "</span>" +
        '<span class="sum-desc">' +
        escHtml(seg.sumDesc) +
        "</span>" +
        "</div>" +
        '<span class="sum-cta">Show script \u2193</span>' +
        "</summary>" +
        '<div class="text-drop-embed">' +
        '<div class="transcript-pane">' +
        escHtml(seg.transcript).replace(/\n/g, "<br />") +
        "</div>" +
        (foot ? '<div class="text-drop-foot">' + foot + "</div>" : "") +
        '<div class="retell-hints">' +
        '<div class="step-num">' +
        escHtml(seg.stepNum) +
        "</div>" +
        '<p class="aim"><span class="en">' +
        escHtml(seg.aimEn) +
        '</span><span class="ru">' +
        escHtml(seg.aimRu) +
        "</span></p>" +
        '<div class="chips">' +
        chipsHtml(chips) +
        "</div>" +
        "</div>" +
        "</div>" +
        "</details>";
    }
    host.innerHTML = html;
  }

  function applySegmentFocus(host, mode, totalOpenWhenAll) {
    if (!host) return;
    host.querySelectorAll("[data-retell-seg]").forEach(function (node) {
      var k = node.getAttribute("data-retell-seg");
      var show = mode === "all" || String(k) === String(mode);
      node.classList.toggle("is-hidden", !show);
      if (mode !== "all" && show) node.setAttribute("open", "");
      if (mode === "all") node.removeAttribute("open");
    });
  }

  /** All lexical bank hits that occur in text, in bank row order (no artificial cap). */
  function allChipsFromParagraph(para, rows) {
    return chipsFromParagraph(para, rows, 999);
  }

  W.PREP_RETELL_CHAIN_KIT = {
    escAttr: escAttr,
    escHtml: escHtml,
    chipsFromParagraph: chipsFromParagraph,
    allChipsFromParagraph: allChipsFromParagraph,
    renderRadioRail: renderRadioRail,
    renderAccordion: renderAccordion,
    applySegmentFocus: applySegmentFocus
  };
})(typeof window !== "undefined" ? window : globalThis);
