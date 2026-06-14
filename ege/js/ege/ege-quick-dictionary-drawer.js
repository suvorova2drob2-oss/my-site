/**
 * ЕГЭ · Быстрый словарь (переиспользуемый движок).
 * window.__EGE_QUICK_DICTIONARY__
 *
 * mount({
 *   prefix, mountId, speakers, triggerBtnId,
 *   bodyOpenClass, tapClass, wtipHostId, rootForTap
 * })
 *
 * speakers[]: { id, label, phrases: [{ en, ru, tip? }] }
 * returns { open, close, toggle, setSpeakerIndex, refresh, wrapTapHTML, bindEscape }
 */
(function (w) {
  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escAttr(s) {
    return esc(s);
  }

  function sortPhrases(phrases) {
    return (phrases || []).slice().sort(function (a, b) {
      return String(b.en || "").length - String(a.en || "").length;
    });
  }

  function splitSentences(text) {
    var s = String(text || "").trim();
    if (!s) return [];
    var out = [];
    var re = /([^.!?]+[.!?]+)|([^.!?]+$)/g;
    var m;
    while ((m = re.exec(s)) !== null) {
      var chunk = String(m[1] || m[2] || "").trim();
      if (chunk) out.push(chunk);
    }
    if (!out.length) out.push(s);
    return out;
  }

  function normSent(s) {
    return String(s || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function ruForSentence(sentText, sentenceEntry, turnRu, sentenceBank) {
    if (sentenceEntry && sentenceEntry.ru) return String(sentenceEntry.ru);
    if (turnRu) return String(turnRu);
    var bankApi =
      typeof w !== "undefined" && w.__EGE_LISTENING_SENTENCE_RU__
        ? w.__EGE_LISTENING_SENTENCE_RU__
        : null;
    if (bankApi && bankApi.lookup) {
      var fromBank = bankApi.lookup(sentText, sentenceBank);
      if (fromBank) return fromBank;
    }
    return "";
  }

  function findSentenceEntry(sentText, sentences) {
    if (!sentences || !sentences.length) return null;
    var n = normSent(sentText);
    var i;
    for (i = 0; i < sentences.length; i++) {
      if (normSent(sentences[i].en) === n) return sentences[i];
    }
    return null;
  }

  /** turn: { text, ru?, sentences?: [{ en, ru }] } */
  function wrapTurnHTML(turn, phrases, tapClass, sentClass) {
    var text = turn && turn.text != null ? String(turn.text) : String(turn || "");
    var tapSorted = sortPhrases(phrases);
    var sents = splitSentences(text);
    var turnRu = turn && turn.ru ? String(turn.ru) : "";
    var turnSentences = turn && turn.sentences ? turn.sentences : null;
    if (!sents.length) return esc(text);
    var html = "";
    var j;
    for (j = 0; j < sents.length; j++) {
      var sentText = sents[j];
      var entry = findSentenceEntry(sentText, turnSentences);
      var ru = ruForSentence(
        sentText,
        entry,
        sents.length === 1 ? turnRu : "",
        turn && turn.sentenceBank ? turn.sentenceBank : null
      );
      var inner = wrapTapHTML(sentText, tapSorted, tapClass);
      if (ru) {
        html +=
          '<span class="' +
          sentClass +
          '" tabindex="0" role="button" data-ru="' +
          escAttr(ru) +
          '">' +
          inner +
          "</span>";
      } else {
        html += inner;
      }
      if (j < sents.length - 1) html += " ";
    }
    return html;
  }

  function wrapTapHTML(text, tapSorted, tapClass) {
    if (!tapSorted.length) return esc(text);
    var s = String(text);
    var all = [];
    var i;
    var pair;
    var escNeedle;
    var re;
    var m;
    for (i = 0; i < tapSorted.length; i++) {
      pair = tapSorted[i];
      if (!pair.en) continue;
      escNeedle = String(pair.en).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      try {
        re = new RegExp(escNeedle, "gi");
      } catch (e0) {
        continue;
      }
      re.lastIndex = 0;
      while ((m = re.exec(s)) !== null) {
        if (!m[0].length) break;
        all.push({
          start: m.index,
          end: m.index + m[0].length,
          ru: String(pair.ru || "")
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
    if (!picked.length) return esc(text);
    var html = "";
    var pos = 0;
    for (j = 0; j < picked.length; j++) {
      html += esc(text.slice(pos, picked[j].start));
      html +=
        '<span class="' +
        tapClass +
        '" tabindex="0" role="button" data-ru="' +
        escAttr(picked[j].ru) +
        '">' +
        esc(text.slice(picked[j].start, picked[j].end)) +
        "</span>";
      pos = picked[j].end;
    }
    html += esc(text.slice(pos));
    return html;
  }

  function bodyHtml(sp, noteClass) {
    var list = sp.phrases || [];
    if (!list.length) return "";
    var dl = '<dl class="ege-lm-sh-dict-dl">';
    var i;
    for (i = 0; i < list.length; i++) {
      dl +=
        "<dt>" +
        esc(list[i].en) +
        "</dt><dd>" +
        esc(list[i].ru) +
        (list[i].tip
          ? '<span class="ege-lm-sh-dict-tip">' + esc(list[i].tip) + "</span>"
          : "") +
        "</dd>";
    }
    dl += "</dl>";
    return (
      '<p class="' +
      noteClass +
      '">Фразы <strong>' +
      esc(sp.label || sp.id) +
      '</strong> · наведи на <strong>предложение</strong> (полный перевод) или кликни <strong>фразу</strong> в тексте.</p>' +
      dl
    );
  }

  function mount(opts) {
    if (!opts || !opts.speakers || !opts.speakers.length) return null;
    var prefix = opts.prefix || "ege-qdict";
    var speakers = opts.speakers;
    var spkIx = opts.initialSpeakerIndex || 0;
    var tapClass = opts.tapClass || "ege-lm-sh-tap";
    var sentClass = opts.sentClass || "ege-lm-sh-sent";
    var noteClass = opts.noteClass || "ege-lm-sh-dict-note";
    var bodyOpenClass = opts.bodyOpenClass || "ege-lm-sh--dict-open";
    var mountEl = document.getElementById(opts.mountId || prefix + "-dict-mount");
    if (!mountEl) return null;

    var spkOpts = "";
    var si;
    for (si = 0; si < speakers.length; si++) {
      spkOpts +=
        '<option value="' +
        si +
        '">' +
        esc(speakers[si].label || "Speaker " + speakers[si].id) +
        "</option>";
    }

    mountEl.innerHTML =
      '<div class="ex3-dict-backdrop" id="' +
      prefix +
      '-dict-backdrop" hidden></div>' +
      '<div class="ex3-dict-drawer" id="' +
      prefix +
      '-dict-drawer">' +
      '<div class="ex3-dict-drawer-head"><span>Быстрый словарь</span>' +
      '<button type="button" class="ex3-dict-drawer-x" id="' +
      prefix +
      '-dict-close">×</button></div>' +
      '<div class="ex3-dict-drawer-body" id="' +
      prefix +
      '-dict-body">' +
      '<label class="ege-lm-sh-dict-spk-lab">Спикер ' +
      '<select id="' +
      prefix +
      '-dict-spk" class="ege-lm-sh-dict-spk">' +
      spkOpts +
      "</select></label>" +
      '<div id="' +
      prefix +
      '-dict-list"></div></div></div>';

    var wtipHost = document.getElementById(opts.wtipHostId || prefix + "-wtip");
    if (!wtipHost && opts.rootForTap) {
      wtipHost = document.createElement("div");
      wtipHost.id = prefix + "-wtip";
      wtipHost.className = prefix + "-wtip";
      wtipHost.hidden = true;
      opts.rootForTap.appendChild(wtipHost);
    }

    function currentSpeaker() {
      return speakers[spkIx] || speakers[0];
    }

    function refresh() {
      var listEl = document.getElementById(prefix + "-dict-list");
      if (listEl) listEl.innerHTML = bodyHtml(currentSpeaker(), noteClass);
      var sel = document.getElementById(prefix + "-dict-spk");
      if (sel) sel.value = String(spkIx);
    }

    function open() {
      document.body.classList.add(bodyOpenClass);
      var b = document.getElementById(prefix + "-dict-backdrop");
      var d = document.getElementById(prefix + "-dict-drawer");
      var f = document.getElementById(opts.triggerBtnId || prefix + "-dict-fab");
      if (b) b.hidden = false;
      if (d) d.classList.add("is-visible");
      if (f) f.setAttribute("aria-expanded", "true");
    }

    function close() {
      document.body.classList.remove(bodyOpenClass);
      var b = document.getElementById(prefix + "-dict-backdrop");
      var d = document.getElementById(prefix + "-dict-drawer");
      var f = document.getElementById(opts.triggerBtnId || prefix + "-dict-fab");
      if (b) b.hidden = true;
      if (d) d.classList.remove("is-visible");
      if (f) f.setAttribute("aria-expanded", "false");
      closeWtip();
    }

    function toggle() {
      var d = document.getElementById(prefix + "-dict-drawer");
      if (d && d.classList.contains("is-visible")) close();
      else open();
    }

    function closeWtip() {
      if (wtipHost) wtipHost.hidden = true;
    }

    function showWtip(el) {
      if (!wtipHost) return;
      var ru = el.getAttribute("data-ru") || "";
      if (!ru) return;
      wtipHost.innerHTML =
        '<strong class="ege-lm-sh-wtip-en">' +
        esc(el.textContent) +
        '</strong><span class="ege-lm-sh-wtip-ru">' +
        esc(ru) +
        "</span>";
      wtipHost.hidden = false;
      var r = el.getBoundingClientRect();
      var pad = 12;
      var maxW = Math.min(280, window.innerWidth - pad * 2);
      wtipHost.style.maxWidth = maxW + "px";
      var top = Math.min(window.innerHeight - 120, r.bottom + 8);
      if (top + wtipHost.offsetHeight > window.innerHeight - pad) {
        top = Math.max(pad, r.top - wtipHost.offsetHeight - 8);
      }
      var left = Math.max(pad, Math.min(r.left, window.innerWidth - maxW - pad));
      wtipHost.style.top = top + "px";
      wtipHost.style.left = left + "px";
    }

    var sel = document.getElementById(prefix + "-dict-spk");
    if (sel) {
      sel.addEventListener("change", function () {
        spkIx = parseInt(sel.value, 10) || 0;
        refresh();
        if (typeof opts.onSpeakerChange === "function") {
          opts.onSpeakerChange(spkIx, currentSpeaker());
        }
      });
    }

    var trigger = document.getElementById(opts.triggerBtnId || prefix + "-dict-fab");
    if (trigger) trigger.addEventListener("click", toggle);
    document.getElementById(prefix + "-dict-close").addEventListener("click", close);
    document.getElementById(prefix + "-dict-backdrop").addEventListener("click", close);

    refresh();

    return {
      open: open,
      close: close,
      toggle: toggle,
      setSpeakerIndex: function (ix) {
        spkIx = ix;
        refresh();
      },
      refresh: refresh,
      wrapTapHTML: function (text, phrases) {
        return wrapTapHTML(text, sortPhrases(phrases || currentSpeaker().phrases || []), tapClass);
      },
      wrapTurnHTML: function (turn, phrases) {
        return wrapTurnHTML(
          turn,
          sortPhrases(phrases || currentSpeaker().phrases || []),
          tapClass,
          sentClass
        );
      },
      bindTapOnRoot: function (root) {
        if (!root) return;
        function pickTipTarget(el) {
          if (!el || !el.closest) return null;
          var tap = el.closest("." + tapClass);
          if (tap && tap.getAttribute("data-ru")) return tap;
          var sent = el.closest("." + sentClass);
          if (sent && sent.getAttribute("data-ru")) return sent;
          return null;
        }
        root.addEventListener("click", function (e) {
          var tip = pickTipTarget(e.target);
          if (tip) {
            e.preventDefault();
            showWtip(tip);
            return;
          }
          if (!e.target.closest("." + prefix + "-wtip") && !e.target.closest(".ege-lm-sh-wtip")) {
            closeWtip();
          }
        });
        root.addEventListener("mouseover", function (e) {
          var tip = pickTipTarget(e.target);
          if (tip) showWtip(tip);
        });
      },
      bindEscape: function (extraClose) {
        document.addEventListener("keydown", function (e) {
          if (e.key !== "Escape") return;
          closeWtip();
          close();
          if (typeof extraClose === "function") extraClose();
        });
      }
    };
  }

  w.__EGE_QUICK_DICTIONARY__ = {
    mount: mount,
    wrapTapHTML: wrapTapHTML,
    wrapTurnHTML: wrapTurnHTML,
    splitSentences: splitSentences,
    esc: esc
  };
})(typeof window !== "undefined" ? window : this);
