/**
 * FCE Reading Part 6 — split gapped text (Honesty / Oceans layout).
 * mount({ rootId, pack }) — pack from window.FCE_R6_PACK or inline object.
 *
 * Left: article with numbered gap chips ({{1}}… in body HTML).
 * Right: sentences A–G + "Your answers" dropdowns (— choose —).
 */
(function (W) {
  "use strict";

  var LETTERS = ["A", "B", "C", "D", "E", "F", "G"];
  var PLACEHOLDER = "\u2014 choose \u2014";

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function gapMarkerHtml(n) {
    return (
      '<span class="fce-r6-gap-inline" data-gap="' +
      n +
      '"><span class="fce-r6-gap-num">' +
      n +
      "</span></span>"
    );
  }

  function renderPassage(pack) {
    var bodyHtml = (pack.body || []).join("");
    bodyHtml = bodyHtml.replace(/\{\{(\d+)\}\}/g, function (_m, n) {
      return gapMarkerHtml(n);
    });
    var deck = pack.deck
      ? '<p class="fce-r6-deck">' + pack.deck + "</p>"
      : "";
    return (
      '<div class="fce-r6-banner">' +
      esc(pack.title || "") +
      "</div>" +
      '<div class="fce-r6-passage-wrap">' +
      '<div class="fce-r6-columns">' +
      deck +
      bodyHtml +
      "</div></div>"
    );
  }

  function renderLayout(pack, ids) {
    return (
      '<div class="fce-r6-layout" id="' +
      esc(ids.layoutId) +
      '">' +
      '<div class="fce-r6-text-col">' +
      renderPassage(pack) +
      "</div>" +
      '<div class="fce-r6-resizer" id="' +
      esc(ids.resizerId) +
      '" role="separator" aria-orientation="vertical" tabindex="0" title="Drag to resize columns"></div>' +
      '<div class="fce-r6-opts-col">' +
      '<div class="fce-r6-bank-title">' +
      esc(pack.bankTitle || "Sentences A\u2013G") +
      "</div>" +
      '<div id="' +
      esc(ids.bankId) +
      '"></div>' +
      '<div class="fce-r6-bank-title">Your answers</div>' +
      '<div id="' +
      esc(ids.selectorsId) +
      '"></div>' +
      '<div class="btn-row">' +
      '<button type="button" class="btn-check" id="' +
      esc(ids.checkId) +
      '">Check answers</button>' +
      '<button type="button" class="btn-reset" id="' +
      esc(ids.resetId) +
      '">Reset</button>' +
      "</div>" +
      '<div class="fce-r6-feedback" id="' +
      esc(ids.feedbackId) +
      '" aria-live="polite"></div>' +
      "</div></div>"
    );
  }

  function explainParagraphsHTML(pack, gn) {
    var parts = pack.explainCorrect && pack.explainCorrect[gn];
    if (!parts || !parts.length) return "";
    var html = "";
    for (var p = 0; p < parts.length; p++) {
      var raw = String(parts[p]).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
      html += "<p>" + raw + "</p>";
    }
    return html;
  }

  function wrongNoteHTML(pack, gn, letter) {
    if (!letter || !pack.wrongNote) return "";
    var note = pack.wrongNote[gn + "|" + letter];
    if (!note) return "";
    var raw = String(note).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    return (
      '<p class="fce-r6-fb-wrong-tip"><strong>Why not ' +
      esc(letter) +
      "?</strong> " +
      raw +
      "</p>"
    );
  }

  function wireResizer(layout, handle) {
    if (!layout || !handle) return;
    var dragging = false;

    function pctFromEvent(e) {
      var r = layout.getBoundingClientRect();
      var x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
      var p = (x / r.width) * 100;
      return Math.max(38, Math.min(78, p));
    }

    function onMove(e) {
      if (!dragging) return;
      e.preventDefault();
      layout.style.setProperty("--fce-r6-opts", String(100 - pctFromEvent(e)) + "%");
    }

    function endDrag() {
      dragging = false;
      handle.classList.remove("is-dragging");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", endDrag);
    }

    handle.addEventListener("mousedown", function () {
      dragging = true;
      handle.classList.add("is-dragging");
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", endDrag);
    });
    handle.addEventListener("touchstart", function () {
      dragging = true;
      handle.classList.add("is-dragging");
      window.addEventListener("touchmove", onMove, { passive: false });
      window.addEventListener("touchend", endDrag);
    });
  }

  function mount(cfg) {
    cfg = cfg || {};
    var root = document.getElementById(cfg.rootId || "fce-r6-root");
    if (!root) return null;
    var pack = cfg.pack || W.FCE_R6_PACK;
    if (!pack || !pack.key) return null;

    var uid = cfg.uid || "fce-r6";
    var ids = {
      layoutId: uid + "-layout",
      resizerId: uid + "-resizer",
      bankId: uid + "-bank",
      selectorsId: uid + "-selectors",
      checkId: cfg.checkId || uid + "-check",
      resetId: cfg.resetId || uid + "-reset",
      feedbackId: cfg.feedbackId || uid + "-feedback",
    };

    var gapIds = Object.keys(pack.key)
      .map(function (k) {
        return parseInt(k, 10);
      })
      .filter(function (n) {
        return Number.isFinite(n);
      })
      .sort(function (a, b) {
        return a - b;
      });

    root.innerHTML = renderLayout(pack, ids);

    var bank = document.getElementById(ids.bankId);
    (pack.options || []).forEach(function (o) {
      var div = document.createElement("div");
      div.className = "fce-r6-bank-item";
      div.innerHTML =
        '<span class="fce-r6-bank-L">' + esc(o.letter) + "</span>" + (o.text || "");
      bank.appendChild(div);
    });

    function letterOpts() {
      var opts = '<option value="">' + PLACEHOLDER + "</option>";
      (pack.options || []).forEach(function (o) {
        opts += '<option value="' + esc(o.letter) + '">' + esc(o.letter) + "</option>";
      });
      return opts;
    }

    var selectorsHost = document.getElementById(ids.selectorsId);
    var selects = [];
    gapIds.forEach(function (g) {
      var wrap = document.createElement("div");
      wrap.className = "fce-r6-gap-row";
      var head = document.createElement("div");
      head.className = "fce-r6-gap-row-head";
      var lab = document.createElement("label");
      lab.setAttribute("for", uid + "-gap-" + g);
      lab.textContent = "Gap " + g;
      var badge = document.createElement("span");
      badge.className = "fce-r6-gap-badge";
      badge.id = uid + "-badge-" + g;
      badge.hidden = true;
      head.appendChild(lab);
      head.appendChild(badge);
      wrap.appendChild(head);
      var sel = document.createElement("select");
      sel.id = uid + "-gap-" + g;
      sel.setAttribute("aria-label", "Gap " + g);
      sel.innerHTML = letterOpts();
      sel.dataset.gap = String(g);
      wrap.appendChild(sel);
      selectorsHost.appendChild(wrap);
      selects.push(sel);
    });

    var fb = document.getElementById(ids.feedbackId);
    var btnCheck = document.getElementById(ids.checkId);
    var btnReset = document.getElementById(ids.resetId);
    var layout = document.getElementById(ids.layoutId);
    var resizer = document.getElementById(ids.resizerId);

    wireResizer(layout, resizer);

    function getGap(n) {
      return document.getElementById(uid + "-gap-" + n);
    }

    function setPassageMarkers(mode) {
      gapIds.forEach(function (g) {
        var host = document.querySelector('.fce-r6-gap-inline[data-gap="' + g + '"]');
        if (!host) return;
        var num = host.querySelector(".fce-r6-gap-num");
        if (!num) return;
        num.classList.remove("is-ok", "is-bad");
        if (mode === "check") {
          var v = String(getGap(g).value || "").trim();
          num.classList.add(v === pack.key[g] ? "is-ok" : "is-bad");
        }
      });
    }

    function setGapBadges(show) {
      gapIds.forEach(function (g) {
        var badge = document.getElementById(uid + "-badge-" + g);
        if (!badge) return;
        if (!show) {
          badge.hidden = true;
          badge.textContent = "";
          badge.className = "fce-r6-gap-badge";
          return;
        }
        var v = String(getGap(g).value || "").trim();
        var ok = v === pack.key[g];
        badge.hidden = false;
        badge.textContent = ok ? "Correct" : "Wrong";
        badge.className = "fce-r6-gap-badge " + (ok ? "ok" : "bad");
      });
    }

    function clearSelectStyles() {
      selects.forEach(function (sg) {
        sg.style.borderColor = "";
        sg.style.borderWidth = "";
        sg.style.borderStyle = "";
      });
    }

    function clearFeedback() {
      if (fb) {
        fb.classList.remove("show");
        fb.innerHTML = "";
      }
      clearSelectStyles();
      setGapBadges(false);
      setPassageMarkers("reset");
    }

    selects.forEach(function (sg) {
      sg.addEventListener("change", function () {
        if (fb) {
          fb.classList.remove("show");
          fb.innerHTML = "";
        }
        clearSelectStyles();
        setGapBadges(false);
        setPassageMarkers("reset");
      });
    });

    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        var picks = [];
        var missing = false;
        gapIds.forEach(function (n) {
          var v = String(getGap(n).value || "").trim();
          if (!v) missing = true;
          picks.push(v);
        });
        if (missing) {
          if (fb) {
            fb.classList.add("show");
            fb.textContent = "Choose A\u2013G for every gap, then check again.";
          }
          return;
        }

        var seen = {};
        var dup = false;
        picks.forEach(function (p) {
          if (seen[p]) dup = true;
          seen[p] = true;
        });
        if (dup) {
          if (fb) {
            fb.classList.add("show");
            fb.innerHTML =
              "Use <strong>six different</strong> letters (one sentence is extra). You repeated a letter.";
          }
          return;
        }

        var ok = 0;
        gapIds.forEach(function (n) {
          var v = String(getGap(n).value || "").trim();
          var good = v === pack.key[n];
          if (good) ok++;
          var el = getGap(n);
          if (el) {
            el.style.borderColor = good ? "#22c55e" : "#f87171";
            el.style.borderWidth = "2px";
            el.style.borderStyle = "solid";
          }
        });

        setGapBadges(true);
        setPassageMarkers("check");

        var hasRich = pack.explainCorrect && Object.keys(pack.explainCorrect).length;
        if (hasRich && fb) {
          var html =
            '<div class="fce-r6-fb-summary">Result: <strong>' +
            ok +
            " / " +
            gapIds.length +
            "</strong> correct." +
            (ok === gapIds.length
              ? " All gaps match the key."
              : " Review the notes below for cohesion clues.") +
            "</div>";
          gapIds.forEach(function (g) {
            var user = String(getGap(g).value || "").trim();
            var isOk = user === pack.key[g];
            var icon = isOk ? "\u2713" : "\u2717";
            html += '<div class="fce-r6-fb-expl ' + (isOk ? "ok" : "bad") + '">';
            html += "<h4><span>" + icon + "</span> Gap " + g + "</h4>";
            html +=
              '<div class="fce-r6-fb-meta">Your answer: <strong>' +
              (user ? esc(user) : "\u2014") +
              "</strong> &middot; Key: <strong>" +
              esc(pack.key[g]) +
              "</strong></div>";
            html += explainParagraphsHTML(pack, g);
            if (!isOk && user) {
              html += wrongNoteHTML(pack, g, user);
            } else if (!isOk && !user) {
              html +=
                '<p class="fce-r6-fb-wrong-tip">No letter chosen &mdash; pick the sentence that best bridges the text before and after the gap.</p>';
            }
            html += "</div>";
          });
          if (pack.extraExplain) {
            html += '<div class="fce-r6-fb-extra">' + pack.extraExplain + "</div>";
          } else {
            var unused = LETTERS.filter(function (L) {
              return picks.indexOf(L) < 0;
            });
            if (unused.length === 1) {
              html +=
                '<div class="fce-r6-fb-extra">Unused sentence (extra option): <strong>' +
                esc(unused[0]) +
                "</strong>.</div>";
            }
          }
          fb.innerHTML = html;
          fb.classList.add("show");
        } else if (fb) {
          var lines = [];
          gapIds.forEach(function (n) {
            var v = String(getGap(n).value || "").trim();
            var good = v === pack.key[n];
            lines.push(
              '<span class="' +
                (good ? "fce-r6-ok" : "fce-r6-bad") +
                '">[' +
                n +
                "]</span> " +
                (good ? "OK" : "Key: " + pack.key[n] + " (you: " + v + ")")
            );
          });
          var unusedSimple = LETTERS.filter(function (L) {
            return picks.indexOf(L) < 0;
          });
          var extraNote =
            unusedSimple.length === 1
              ? " <strong>Extra (unused):</strong> " + unusedSimple[0] + "."
              : "";
          fb.innerHTML =
            (ok === gapIds.length
              ? "<p><strong>All gaps match the key.</strong></p>"
              : "<p><strong>Score:</strong> " + ok + " / " + gapIds.length + ".</p>") +
            '<p class="fce-r6-status">' +
            lines.join(" &nbsp; ") +
            "</p>" +
            (extraNote ? '<p class="fce-r6-status">' + extraNote + "</p>" : "");
          fb.classList.add("show");
        }

        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(ok, gapIds.length);
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        selects.forEach(function (sg) {
          sg.value = "";
        });
        clearFeedback();
      });
    }

    return { gapIds: gapIds, pack: pack, selects: selects };
  }

  W.FCE_READING_PART6 = { mount: mount };
})(window);
