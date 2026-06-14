/**
 * CPE Listening transcript — tap-to-gloss phrase wrapping.
 * CPE_LISTENING_TRANSCRIPT_PHRASES.mount({ rootId, rows })
 */
(function (W, D) {
  "use strict";

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function normalizeTapText(s) {
    return String(s || "")
      .replace(/\u2019|\u2018/g, "'")
      .replace(/\u201c|\u201d/g, '"')
      .replace(/\u2013|\u2014/g, "-");
  }

  function rowsToTapPairs(rows) {
    var out = [];
    var i;
    for (i = 0; i < (rows || []).length; i++) {
      var row = rows[i];
      if (!row) continue;
      var en = row.tap || row.ans;
      if (!en) continue;
      out.push({ en: en, hint: row.hint || "" });
    }
    out.sort(function (a, b) {
      return String(b.en).length - String(a.en).length;
    });
    return out;
  }

  function collectPhraseMatches(text, sortedPhrases) {
    var s = normalizeTapText(String(text));
    var all = [];
    var i;
    var pair;
    var needle;
    var re;
    var m;
    for (i = 0; i < sortedPhrases.length; i++) {
      pair = sortedPhrases[i];
      needle = normalizeTapText(String(pair.en || ""));
      if (!needle) continue;
      try {
        re = new RegExp(needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
      } catch (e0) {
        continue;
      }
      re.lastIndex = 0;
      while ((m = re.exec(s)) !== null) {
        if (!m[0].length) {
          if (re.lastIndex === m.index) re.lastIndex++;
          else break;
          continue;
        }
        all.push({
          start: m.index,
          end: m.index + m[0].length,
          hint: String(pair.hint || ""),
        });
      }
    }
    all.sort(function (a, b) {
      if (a.start !== b.start) return a.start - b.start;
      return b.end - b.start - (a.end - a.start);
    });
    var picked = [];
    var lastEnd = -1;
    var j;
    for (j = 0; j < all.length; j++) {
      if (all[j].start >= lastEnd) {
        picked.push(all[j]);
        lastEnd = all[j].end;
      }
    }
    return picked;
  }

  function wrapTapPlain(text, sortedPhrases) {
    var s = String(text || "");
    var sNorm = normalizeTapText(s);
    var picked = sortedPhrases.length ? collectPhraseMatches(sNorm, sortedPhrases) : [];
    var html = "";
    var pos = 0;
    var pi;
    for (pi = 0; pi < picked.length; pi++) {
      var p = picked[pi];
      if (p.start > pos) html += esc(s.slice(pos, p.start));
      html +=
        '<span class="cpe-l3-wtap" tabindex="0" role="button" data-hint="' +
        esc(p.hint) +
        '">' +
        esc(s.slice(p.start, p.end)) +
        "</span>";
      pos = p.end;
    }
    if (pos < s.length) html += esc(s.slice(pos));
    return html;
  }

  function ensureWtip() {
    var tip = D.getElementById("cpe-l3-wtip");
    if (tip) return tip;
    tip = D.createElement("div");
    tip.id = "cpe-l3-wtip";
    tip.className = "cpe-l3-wtip";
    tip.hidden = true;
    D.body.appendChild(tip);
    return tip;
  }

  function showWtip(el) {
    var tip = ensureWtip();
    var hint = el.getAttribute("data-hint");
    if (!hint) return;
    tip.innerHTML = hint.replace(/\n/g, "<br>");
    tip.hidden = false;
    var r = el.getBoundingClientRect();
    var top = r.bottom + 8 + window.scrollY;
    var left = Math.min(r.left + window.scrollX, window.innerWidth - 320);
    tip.style.top = top + "px";
    tip.style.left = Math.max(8, left) + "px";
  }

  function hideWtip() {
    var tip = D.getElementById("cpe-l3-wtip");
    if (tip) tip.hidden = true;
  }

  var docBound = false;

  function bindDoc() {
    if (docBound) return;
    docBound = true;
    D.addEventListener(
      "click",
      function (ev) {
        var t = ev.target;
        if (t && t.closest && t.closest(".cpe-l3-wtap")) {
          ev.preventDefault();
          showWtip(t.closest(".cpe-l3-wtap"));
          return;
        }
        if (!t || !t.closest || !t.closest(".cpe-l3-wtip")) hideWtip();
      },
      true
    );
    D.addEventListener("keydown", function (ev) {
      if (ev.key !== "Escape") return;
      hideWtip();
    });
  }

  /**
   * @param {{ rootId: string, rows: object[] }} opts
   */
  function mount(opts) {
    opts = opts || {};
    var root = D.getElementById(opts.rootId || "transcript-root");
    if (!root) return;
    var pairs = rowsToTapPairs(opts.rows || []);
    var turns = root.querySelectorAll(".cpe-l3-turn");
    var i;
    for (i = 0; i < turns.length; i++) {
      var strong = turns[i].querySelector("strong");
      var label = strong ? strong.outerHTML : "";
      var raw = turns[i].textContent || "";
      if (strong) {
        raw = raw.replace(strong.textContent, "").trim();
      }
      turns[i].innerHTML = label + " " + wrapTapPlain(raw, pairs);
    }
    bindDoc();
  }

  W.CPE_LISTENING_TRANSCRIPT_PHRASES = {
    mount: mount,
    wrapTapPlain: wrapTapPlain,
    rowsToTapPairs: rowsToTapPairs,
  };
})(typeof window !== "undefined" ? window : globalThis, typeof document !== "undefined" ? document : null);
