/**
 * Gap Audio Round — один непрерывный аудиотрек (SB Track 10.1); предложения идут по порядку записи,
 * сгруппированы по спикеру (монологу). После «Дальше» — следующая фраза; звук не перематывается.
 */
(function (W) {
  "use strict";

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function escapeRe(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function normAnswer(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/[^a-z']/g, "");
  }

  /**
   * Normalize item → ordered gap specs { token, accept[], hint }.
   * Supports legacy single `gap` / `accept` / `hint`.
   */
  function normalizeItemGaps(it) {
    if (!it) return [];
    if (it.gaps && it.gaps.length) {
      return it.gaps.map(function (g) {
        var token = g.token || (g.accept && g.accept[0]) || "";
        var accept = g.accept && g.accept.length ? g.accept.slice() : [];
        if (token && accept.indexOf(token) < 0) accept.unshift(token);
        return { token: token, accept: accept, hint: g.hint || "" };
      });
    }
    if (it.gap) {
      var acc = it.accept && it.accept.length ? it.accept.slice() : [];
      if (acc.indexOf(it.gap) < 0) acc.unshift(it.gap);
      return [{ token: it.gap, accept: acc, hint: it.hint || "" }];
    }
    return [];
  }

  function acceptableTokensForGap(spec) {
    var seen = {};
    var out = [];
    var list = [spec.token].concat(spec.accept || []);
    var i;
    for (i = 0; i < list.length; i++) {
      var t = normAnswer(list[i]);
      if (t && !seen[t]) {
        seen[t] = 1;
        out.push(t);
      }
    }
    return out;
  }

  /**
   * Replace gap tokens left-to-right (each \\b token \\b once).
   */
  function renderSentenceMultiGap(sentence, gapSpecs) {
    if (!gapSpecs.length) {
      return escapeHtml(sentence || "");
    }
    var searchFrom = 0;
    var html = "";
    var gi;
    for (gi = 0; gi < gapSpecs.length; gi++) {
      var tok = gapSpecs[gi].token;
      if (!tok) {
        return escapeHtml(sentence || "");
      }
      var re = new RegExp("\\b" + escapeRe(tok) + "\\b", "i");
      var sub = (sentence || "").slice(searchFrom);
      var m = re.exec(sub);
      if (!m) {
        return escapeHtml(sentence || "");
      }
      var idx = searchFrom + m.index;
      html +=
        '<span class="gar-sent">' +
        escapeHtml((sentence || "").slice(searchFrom, idx)) +
        "</span>";
      html +=
        '<input type="text" class="gar-gap" data-gap-index="' +
        String(gi) +
        '" autocomplete="off" spellcheck="false" autocapitalize="off" aria-label="\u041f\u0440\u043e\u043f\u0443\u0441\u043a ' +
        String(gi + 1) +
        '" />';
      searchFrom = idx + m[0].length;
    }
    html +=
      '<span class="gar-sent">' +
      escapeHtml((sentence || "").slice(searchFrom)) +
      "</span>";
    return html;
  }

  /**
   * @param {{
   *   els: {
   *     audio: HTMLAudioElement,
   *     sentenceHost: HTMLElement,
   *     hintEl?: HTMLElement | null,
   *     speakerEl?: HTMLElement | null,
   *     progressEl: HTMLElement,
   *     statusEl: HTMLElement,
   *     btnPlay: HTMLButtonElement,
   *     btnCheck: HTMLButtonElement,
   *     btnNext: HTMLButtonElement,
   *     btnAgain?: HTMLButtonElement | null,
   *     dotsHost: HTMLElement,
   *     summaryHost: HTMLElement
   *   },
   *   data: { audioSrc: string, audioSrcRemote?: string, speakerCount?: number, items: object[] },
   * }} opts
   */
  function mount(opts) {
    var doc = W.document;
    var els = opts.els || {};
    var audio = els.audio;
    var sentenceHost = els.sentenceHost;
    var hintEl = els.hintEl || null;
    var speakerEl = els.speakerEl || null;
    var progressEl = els.progressEl;
    var statusEl = els.statusEl;
    var btnPlay = els.btnPlay;
    var btnCheck = els.btnCheck;
    var btnNext = els.btnNext;
    var btnAgain = els.btnAgain || null;
    var dotsHost = els.dotsHost;
    var summaryHost = els.summaryHost;
    var data = opts.data || {};
    var items = data.items || [];

    if (
      !audio ||
      !sentenceHost ||
      !progressEl ||
      !statusEl ||
      !btnPlay ||
      !btnCheck ||
      !btnNext ||
      !dotsHost ||
      !summaryHost ||
      items.length === 0
    ) {
      return;
    }

    function itemSpeaker(idx) {
      var it = items[idx];
      if (!it) return 1;
      return it.speaker != null ? Number(it.speaker) : 1;
    }

    var speakerTotalMonologues =
      typeof data.speakerCount === "number" && data.speakerCount > 0
        ? data.speakerCount
        : items.reduce(function (acc, it) {
            var s = it.speaker != null ? Number(it.speaker) : 1;
            return Math.max(acc, s);
          }, 1);

    function speakerStatsAt(index) {
      var sp = itemSpeaker(index);
      var nth = 0;
      var totalInSp = 0;
      var j;
      for (j = 0; j < items.length; j++) {
        if (itemSpeaker(j) === sp) totalInSp++;
      }
      for (j = 0; j <= index; j++) {
        if (itemSpeaker(j) === sp) nth++;
      }
      return { speaker: sp, nth: nth, totalInSpeaker: totalInSp };
    }

    function setSpeakerStrip() {
      if (!speakerEl) return;
      var st = speakerStatsAt(ix);
      speakerEl.textContent =
        "\u041c\u043e\u043d\u043e\u043b\u043e\u0433 " +
        String(st.speaker) +
        " \u0438\u0437 " +
        String(speakerTotalMonologues) +
        " \u00b7 \u0444\u0440\u0430\u0437\u0430 " +
        String(st.nth) +
        " \u0438\u0437 " +
        String(st.totalInSpeaker) +
        " \u0432 \u044d\u0442\u043e\u043c \u0431\u043b\u043e\u043a\u0435";
    }

    function resolveDocUrl(raw) {
      if (!raw) return "";
      try {
        return new URL(raw, doc.location.href).href;
      } catch (e) {
        return raw;
      }
    }

    function stripUrlHash(u) {
      var i = String(u || "").indexOf("#");
      return i >= 0 ? u.slice(0, i) : u;
    }

    function audioElementBaseSrcMatches(rawDesired) {
      var want = stripUrlHash(resolveDocUrl(rawDesired));
      var cur = stripUrlHash(audio.src || "");
      return cur === want;
    }

    function ensurePrimarySrc() {
      if (!audioElementBaseSrcMatches(data.audioSrc)) {
        audio.src = data.audioSrc || "";
      }
    }

    function syncPlayButtonLabel() {
      btnPlay.textContent = audio.paused
        ? "\u25b6 \u0422\u0440\u0435\u043a"
        : "\u23f8 \u041f\u0430\u0443\u0437\u0430";
    }

    function toggleFullTrack() {
      ensurePrimarySrc();
      if (audio.paused) {
        var p = audio.play();
        if (p && typeof p.catch === "function") {
          p.catch(function () {});
        }
      } else {
        audio.pause();
      }
      syncPlayButtonLabel();
    }

    var ix = 0;
    /** @type {(boolean|null)[]} */
    var outcomes = items.map(function () {
      return null;
    });
    var checkedForIx = false;

    function paintDots() {
      dotsHost.innerHTML = "";
      var i;
      for (i = 0; i < items.length; i++) {
        if (i > 0 && itemSpeaker(i) !== itemSpeaker(i - 1)) {
          var br = doc.createElement("span");
          br.className = "gar-dots-break";
          br.setAttribute("aria-hidden", "true");
          dotsHost.appendChild(br);
        }
        var d = doc.createElement("span");
        d.className = "gar-dot";
        d.setAttribute("role", "img");
        if (i === ix) d.classList.add("gar-dot--here");
        if (outcomes[i] === true) d.classList.add("gar-dot--ok");
        else if (outcomes[i] === false) d.classList.add("gar-dot--bad");
        d.setAttribute(
          "aria-label",
          outcomes[i] === true
            ? "верно"
            : outcomes[i] === false
              ? "ошибка"
              : i === ix
                ? "текущее"
                : "далее"
        );
        dotsHost.appendChild(d);
      }
    }

    function currentGapInputs() {
      return sentenceHost.querySelectorAll(".gar-gap");
    }

    function setProgressLabel() {
      progressEl.textContent =
        "\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 " +
        String(ix + 1) +
        " / " +
        String(items.length);
    }

    function renderItem() {
      var it = items[ix];
      var gapSpecs = normalizeItemGaps(it);
      sentenceHost.innerHTML = renderSentenceMultiGap(it.sentence || "", gapSpecs);
      if (hintEl) {
        var hintParts = [];
        var hg;
        for (hg = 0; hg < gapSpecs.length; hg++) {
          if (gapSpecs[hg].hint) {
            hintParts.push(String(hg + 1) + ". " + gapSpecs[hg].hint);
          }
        }
        var hintText =
          hintParts.length > 0 ? hintParts.join(" ") : it.hint || "";
        hintEl.textContent = hintText;
        hintEl.style.display = hintText ? "" : "none";
      }
      setSpeakerStrip();
      setProgressLabel();
      checkedForIx = outcomes[ix] !== null;
      btnNext.disabled = !checkedForIx || ix >= items.length - 1;
      statusEl.textContent = "";
      var inps = currentGapInputs();
      var ii;
      for (ii = 0; ii < inps.length; ii++) {
        var inp = inps[ii];
        var spec = gapSpecs[ii];
        if (!inp || !spec) continue;
        inp.readOnly = false;
        inp.classList.remove("gar-gap--ok", "gar-gap--bad");
        if (outcomes[ix] === true) {
          inp.value = spec.token;
          inp.readOnly = true;
          inp.classList.add("gar-gap--ok");
        } else if (outcomes[ix] === false) {
          inp.readOnly = true;
          inp.classList.add("gar-gap--bad");
        }
      }
      try {
        if (inps.length && outcomes[ix] === null) {
          inps[0].focus();
        }
      } catch (eF) {}
      btnCheck.disabled = outcomes[ix] !== null;
      paintDots();
    }

    function checkCurrent() {
      if (outcomes[ix] !== null) return;
      var it = items[ix];
      var gapSpecs = normalizeItemGaps(it);
      var inps = currentGapInputs();
      var allOk = true;
      var gi;
      for (gi = 0; gi < gapSpecs.length; gi++) {
        var inp = inps[gi];
        var raw = inp ? inp.value : "";
        var typed = normAnswer(raw);
        var okG = false;
        var tokList = acceptableTokensForGap(gapSpecs[gi]);
        var j;
        for (j = 0; j < tokList.length; j++) {
          if (typed === tokList[j]) {
            okG = true;
            break;
          }
        }
        if (!okG) allOk = false;
        if (inp) {
          inp.readOnly = true;
          inp.classList.toggle("gar-gap--ok", okG);
          inp.classList.toggle("gar-gap--bad", !okG);
          if (okG) inp.value = gapSpecs[gi].token;
        }
      }
      outcomes[ix] = allOk;
      checkedForIx = true;
      btnCheck.disabled = true;
      btnNext.disabled = ix >= items.length - 1;
      statusEl.textContent = allOk
        ? "\u0412\u0435\u0440\u043d\u043e."
        : "\u041d\u0435 \u0432\u0441\u0435 \u0441\u043b\u043e\u0432\u0430 \u0432\u0435\u0440\u043d\u043e. \u041e\u0442\u0432\u0435\u0442\u044b: \u00ab" +
          gapSpecs
            .map(function (g) {
              return g.token;
            })
            .join("\u00bb, \u00ab") +
          "\u00bb.";
      paintDots();
      var allDone = true;
      var k;
      for (k = 0; k < outcomes.length; k++) {
        if (outcomes[k] === null) {
          allDone = false;
          break;
        }
      }
      if (allDone) showSummary();
    }

    function showSummary() {
      var green = 0;
      var red = 0;
      var i;
      for (i = 0; i < outcomes.length; i++) {
        if (outcomes[i] === true) green += 1;
        else if (outcomes[i] === false) red += 1;
      }
      summaryHost.hidden = false;
      summaryHost.innerHTML =
        '<p class="gar-sum-lead">\u0418\u0442\u043e\u0433 \u0440\u0430\u0443\u043d\u0434\u0430</p>' +
        "<p class=\"gar-sum-stats\">\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0439: <strong>" +
        String(items.length) +
        '</strong> &middot; <span class="gar-stat-ok">\u0417\u0435\u043b\u0451\u043d\u044b\u0445: ' +
        String(green) +
        '</span> &middot; <span class="gar-stat-bad">\u041a\u0440\u0430\u0441\u043d\u044b\u0445: ' +
        String(red) +
        "</span></p>";
    }

    function hideSummary() {
      summaryHost.hidden = true;
      summaryHost.innerHTML = "";
    }

    function goNext() {
      if (ix >= items.length - 1) return;
      ix += 1;
      hideSummary();
      renderItem();
    }

    function resetRound() {
      try {
        audio.pause();
      } catch (e) {}
      audio.currentTime = 0;
      ix = 0;
      var i;
      for (i = 0; i < outcomes.length; i++) outcomes[i] = null;
      hideSummary();
      renderItem();
      syncPlayButtonLabel();
    }

    audio.src = data.audioSrc || "";
    audio.preload = "metadata";

    var elementFallbackToRemote = false;
    audio.addEventListener("error", function () {
      if (elementFallbackToRemote || !data.audioSrcRemote) return;
      elementFallbackToRemote = true;
      audio.src = data.audioSrcRemote;
    });

    audio.addEventListener("play", syncPlayButtonLabel);
    audio.addEventListener("pause", syncPlayButtonLabel);
    audio.addEventListener("ended", syncPlayButtonLabel);

    btnPlay.addEventListener("click", function () {
      toggleFullTrack();
    });

    btnCheck.addEventListener("click", function () {
      checkCurrent();
    });

    btnNext.addEventListener("click", function () {
      goNext();
    });

    if (btnAgain) {
      btnAgain.addEventListener("click", function () {
        resetRound();
      });
    }

    sentenceHost.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter") {
        ev.preventDefault();
        if (!btnCheck.disabled) checkCurrent();
        else if (!btnNext.disabled) goNext();
      }
    });

    syncPlayButtonLabel();
    paintDots();
    renderItem();

    return {
      destroy: function () {
        try {
          audio.pause();
        } catch (e) {}
      }
    };
  }

  W.PREP_GAP_AUDIO_ROUND = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
