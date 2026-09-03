/**
 * FCE Listening Part 3 — evidence (green) / distractor (red) hunt.
 * Reusable mount for A–H matching tasks.
 *
 * mount({ prefix, labs, headlines, locked?, ids? })
 * labs[]: { speaker, keyLetter, keyLine, prompt, segments[] }
 */
(function (W) {
  "use strict";

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;");
  }

  function mount(opts) {
    if (!opts || !opts.labs || !opts.labs.length) return null;

    var prefix = opts.prefix || "fceP3Hunt";
    var labs = opts.labs;
    var headlines = opts.headlines || {};
    var locked = opts.locked !== false;
    var ids = opts.ids || {};

    function id(name) {
      return ids[name] || prefix + name;
    }

    var host = W.document.getElementById(id("Passage"));
    var elPrompt = W.document.getElementById(id("Prompt"));
    var elMeta = W.document.getElementById(id("Meta"));
    var elKey = W.document.getElementById(id("Key"));
    var elHuntOptions = W.document.getElementById(id("Options"));
    var elFb = W.document.getElementById(id("Fb"));
    var elToast = W.document.getElementById(id("Toast"));
    var btnVerify = W.document.getElementById(id("Verify"));
    var btnResetHunt = W.document.getElementById(id("Reset"));
    var rootEl = W.document.getElementById(id("Root"));
    var brushBtns = W.document.querySelectorAll("." + prefix + "-brush");
    var tabs = W.document.querySelectorAll("." + prefix + "-tab");

    if (!host) return null;

    var spkIx = 0;
    var brush = "green";

    function showToast(msg) {
      if (!elToast) return;
      elToast.textContent = msg;
      elToast.classList.add("is-visible");
      setTimeout(function () {
        elToast.classList.remove("is-visible");
        elToast.textContent = "";
      }, 2600);
    }

    function setBrush(next) {
      brush = next;
      brushBtns.forEach(function (b) {
        var on = b.getAttribute("data-brush") === brush;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
    }

    function clearVerifyStyles() {
      host.querySelectorAll(".lies-hit").forEach(function (el) {
        el.classList.remove("lies-bad");
      });
      if (elFb) {
        elFb.textContent = "";
        elFb.className = prefix + "-fb";
      }
    }

    function clearStaleMarksOnly() {
      host.querySelectorAll(".lies-hit.lies-bad").forEach(function (el) {
        el.classList.remove("lies-bad");
      });
      if (elFb) {
        elFb.textContent = "";
        elFb.className = prefix + "-fb";
      }
    }

    function hits() {
      return host.querySelectorAll(".lies-hit");
    }

    function distractorLabelHtml(seg) {
      var parts = [];
      if (seg.tempts && headlines[seg.tempts]) {
        parts.push(
          '<span class="lies-tempts-misread">' +
            '<span class="lies-tempts-prefix">Might suggest</span> ' +
            '<span class="lies-tempts-letter">' +
            esc(seg.tempts) +
            "</span> " +
            '<span class="lies-tempts-line">' +
            esc(headlines[seg.tempts]) +
            "</span></span>"
        );
      }
      if (seg.temptsNote) {
        parts.push('<span class="lies-tempts-note">' + esc(seg.temptsNote) + "</span>");
      }
      if (seg.keyReject) {
        parts.push('<span class="lies-key-reject">' + esc(seg.keyReject) + "</span>");
      }
      return parts.join("");
    }

    function evidenceLabelHtml(seg, keyLetter) {
      var parts = [
        '<span class="lies-evidence-prefix">\u2192 supports ' + esc(keyLetter) + "</span> ",
        '<span class="lies-evidence-line">' + esc(headlines[keyLetter] || "") + "</span>"
      ];
      if (seg.evidenceNote) {
        parts.push('<span class="lies-evidence-note">' + esc(seg.evidenceNote) + "</span>");
      }
      return parts.join("");
    }

    function renderHuntOptions(keyLetter) {
      if (!elHuntOptions) return;
      var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
      elHuntOptions.innerHTML =
        '<p class="' +
        prefix +
        '-options-title">Options A&ndash;H (same as matching task above)</p>' +
        letters
          .map(function (L) {
            var isKey = L === keyLetter;
            return (
              '<div class="' +
              prefix +
              "-opt-row" +
              (isKey ? " is-key" : "") +
              '"><span class="' +
              prefix +
              '-opt-letter">' +
              L +
              '</span><span class="' +
              prefix +
              '-opt-text">' +
              esc(headlines[L] || "") +
              (isKey
                ? ' <span class="' + prefix + '-opt-key-badge">this speaker</span>'
                : "") +
              "</span></div>"
            );
          })
          .join("");
    }

    function syncFeedbackTag(wrap) {
      if (!wrap) return;
      var hit = wrap.querySelector(".lies-hit");
      if (!hit) return;
      var temptsTag = wrap.querySelector(".lies-tempts-tag");
      var evidenceTag = wrap.querySelector(".lies-evidence-tag");
      if (temptsTag) temptsTag.hidden = !hit.classList.contains("is-red");
      if (evidenceTag) evidenceTag.hidden = !hit.classList.contains("is-green");
    }

    function renderPassage() {
      var lab = labs[spkIx];
      host.innerHTML = "";
      host.className = prefix + "-passage";

      (lab.segments || []).forEach(function (seg) {
        if (seg.kind === "glue") {
          var g = W.document.createElement("span");
          g.className = "lies-glue";
          g.innerHTML = seg.html || seg.text || "";
          host.appendChild(g);
        } else {
          var wrap = W.document.createElement("span");
          wrap.className = "lies-hit-wrap";
          var h = W.document.createElement("span");
          h.className = "lies-hit";
          h.setAttribute("role", "button");
          h.setAttribute("tabindex", "0");
          h.setAttribute("data-sol", seg.sol === "e" ? "evidence" : "distractor");
          if (seg.tempts) h.setAttribute("data-tempts", seg.tempts);
          if (seg.html != null) h.innerHTML = seg.html;
          else h.textContent = seg.text || "";
          wrap.appendChild(h);
          if (seg.sol === "d" && (seg.tempts || seg.temptsNote || seg.keyReject)) {
            var dTag = W.document.createElement("span");
            dTag.className = "lies-tempts-tag";
            dTag.hidden = true;
            dTag.innerHTML = distractorLabelHtml(seg);
            wrap.appendChild(dTag);
          }
          if (seg.sol === "e") {
            var eTag = W.document.createElement("span");
            eTag.className = "lies-evidence-tag";
            eTag.hidden = true;
            eTag.innerHTML = evidenceLabelHtml(seg, lab.keyLetter);
            wrap.appendChild(eTag);
          }
          host.appendChild(wrap);
        }
      });

      if (elPrompt) elPrompt.innerHTML = lab.prompt || "";
      if (elMeta) {
        elMeta.textContent =
          "Speaker " +
          lab.speaker +
          " of " +
          labs.length +
          " \u2014 dashed snippets are interactive; compare with A\u2013H on the right.";
      }
      if (elKey) {
        elKey.innerHTML =
          '<span class="' +
          prefix +
          '-key-label">Target line (A\u2013H) for this speaker</span>' +
          '<strong class="' +
          prefix +
          '-key-letter">' +
          esc(lab.keyLetter) +
          "</strong> " +
          '<span class="' +
          prefix +
          '-key-line">&mdash; ' +
          esc(lab.keyLine || headlines[lab.keyLetter] || "") +
          "</span>";
      }
      renderHuntOptions(lab.keyLetter);

      tabs.forEach(function (tab, i) {
        tab.classList.toggle("is-active", i === spkIx);
        tab.setAttribute("aria-selected", i === spkIx ? "true" : "false");
      });

      clearVerifyStyles();
    }

    function onHitClick(ev) {
      if (locked) return;
      var el = ev.target.closest(".lies-hit");
      if (!el || !host.contains(el)) return;
      var wrap = el.closest(".lies-hit-wrap");
      clearStaleMarksOnly();
      if (brush === "erase") {
        el.classList.remove("is-green", "is-red");
        syncFeedbackTag(wrap);
        return;
      }
      if (brush === "green") {
        el.classList.remove("is-red");
        el.classList.add("is-green");
        syncFeedbackTag(wrap);
        return;
      }
      if (brush === "red") {
        el.classList.remove("is-green");
        el.classList.add("is-red");
        syncFeedbackTag(wrap);
      }
    }

    function onHitKey(ev) {
      if (ev.key !== "Enter" && ev.key !== " ") return;
      var el = ev.target.closest(".lies-hit");
      if (!el) return;
      ev.preventDefault();
      onHitClick({ target: el });
    }

    function verify() {
      if (locked) return;
      clearVerifyStyles();
      var lab = labs[spkIx];
      var ok = true;
      var missE = 0;
      var missD = 0;
      var wrongFlip = 0;

      hits().forEach(function (el) {
        var sol = el.getAttribute("data-sol");
        var g = el.classList.contains("is-green");
        var r = el.classList.contains("is-red");

        if (sol === "evidence") {
          if (!g) {
            ok = false;
            if (!r) missE += 1;
            else {
              wrongFlip += 1;
              el.classList.add("lies-bad");
            }
          }
        } else if (sol === "distractor") {
          if (!r) {
            ok = false;
            if (!g) missD += 1;
            else {
              wrongFlip += 1;
              el.classList.add("lies-bad");
            }
          }
        }
      });

      var parts = [];
      if (ok) {
        parts.push("All tutor targets match: evidence in green, distractors in red.");
      } else {
        if (missE) parts.push(missE + " evidence snippet(s) still unmarked or not green.");
        if (missD) parts.push(missD + " distractor snippet(s) still unmarked or not red.");
        if (wrongFlip) {
          parts.push(wrongFlip + " snippet(s) have the colours flipped (dashed outline).");
        }
      }

      if (elFb) {
        var msg = parts.join(" ");
        if (ok) {
          msg +=
            "<br /><span style=\"opacity:0.95;\">Key pairing: <strong>" +
            esc(lab.keyLetter) +
            "</strong> &mdash; " +
            esc(lab.keyLine || headlines[lab.keyLetter] || "") +
            "</span>";
        }
        elFb.innerHTML = msg;
        elFb.className = prefix + "-fb " + (ok ? "ok" : "partial");
      }
      if (ok) showToast("Nice \u2014 markings match the tutor slice.");
      else showToast("Adjust colours, then check again.");
    }

    function resetRound() {
      hits().forEach(function (el) {
        el.classList.remove("is-green", "is-red", "lies-bad");
        syncFeedbackTag(el.closest(".lies-hit-wrap"));
      });
      clearVerifyStyles();
    }

    function goSpeaker(ix) {
      if (ix < 0 || ix >= labs.length) return;
      spkIx = ix;
      renderPassage();
      if (rootEl && typeof rootEl.scrollIntoView === "function") {
        rootEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    function unlock() {
      locked = false;
      if (rootEl) rootEl.classList.remove("is-locked");
      W.document.body.classList.add("fce-p3-hunt-ready");
    }

    brushBtns.forEach(function (b) {
      b.addEventListener("click", function () {
        clearVerifyStyles();
        setBrush(b.getAttribute("data-brush"));
      });
    });

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () {
        goSpeaker(i);
      });
    });

    host.addEventListener("click", onHitClick);
    host.addEventListener("keydown", onHitKey);
    if (btnVerify) btnVerify.addEventListener("click", verify);
    if (btnResetHunt) btnResetHunt.addEventListener("click", resetRound);

    renderPassage();

    return {
      unlock: unlock,
      goSpeaker: goSpeaker,
      isLocked: function () {
        return locked;
      }
    };
  }

  W.FCE_LISTENING_P3_HUNT = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
