/**
 * Unit 2 FCE — Writing Part 2 informal email lesson UI
 */
(function () {
  "use strict";

  var D = window.U2_WRITING_INFORMAL_EMAIL;
  if (!D) return;

  var STEP_IDS = ["read", "model", "register", "write"];
  var state = {
    step: 0,
    doneSteps: {},
  };

  function $(id) {
    return document.getElementById(id);
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderLetterCard(el, letter) {
    if (!el || !letter) return;
    var html = "";
    if (letter.greeting) {
      html += '<p class="wls-salute">' + esc(letter.greeting) + "</p>";
    }
    html +=
      '<p class="wls-body">' +
      esc(letter.body).replace(/\n\n/g, "</p><p class=\"wls-body\">").replace(/\n/g, "<br>") +
      "</p>" +
      '<p class="wls-close">' +
      esc(letter.closing) +
      "</p>" +
      '<p class="wls-sign">' +
      esc(letter.signOff) +
      "</p>";
    el.innerHTML = html;
  }

  function renderKatie(into) {
    if (!into) return;
    var phrases = D.formalPhrases || {};
    var html = "";
    if (D.katieMeta) {
      html +=
        '<p class="wls-email-meta"><span>To:</span> ' +
        esc(D.katieMeta.to) +
        '<br><span>Subject:</span> ' +
        esc(D.katieMeta.subject) +
        "</p>";
    }
    html += '<div class="wls-email-body">';
    (D.katieSegments || []).forEach(function (seg) {
      if (typeof seg.m === "number") {
        var text = phrases[seg.m] || "";
        html +=
          '<mark class="wls-formal-mark" data-formal="' +
          seg.m +
          '"><span class="wls-formal-num">' +
          seg.m +
          "</span> " +
          esc(text) +
          "</mark>";
      } else if (seg.t) {
        html += esc(seg.t).replace(/\n/g, "<br>");
      }
    });
    html += "</div>";
    into.innerHTML = html;
  }

  function buildRegisterRows() {
    var list = $("wls-register-rows");
    if (!list) return;
    var opts = D.informalOptions || [];
    var optionsHtml = opts
      .map(function (o) {
        return (
          '<option value="' +
          esc(o.id) +
          '">' +
          esc(o.id) +
          ") " +
          esc(o.text) +
          "</option>"
        );
      })
      .join("");
    var rows = [];
    for (var n = 1; n <= 8; n++) {
      var formal = (D.formalPhrases && D.formalPhrases[n]) || "";
      rows.push(
        '<div class="wls-register-row">' +
          '<div class="wls-register-formal">' +
          '<span class="wls-formal-num">' +
          n +
          "</span> " +
          esc(formal) +
          "</div>" +
          '<select class="wls-purpose-select" id="reg-' +
          n +
          '-select" aria-label="Informal equivalent for phrase ' +
          n +
          '">' +
          '<option value="">— choose —</option>' +
          optionsHtml +
          "</select>" +
          '<div class="mb2-key-hint" id="reg-' +
          n +
          '-hint"></div>' +
          "</div>"
      );
    }
    list.innerHTML = rows.join("");

    var box = $("wls-register-options");
    if (box) {
      box.innerHTML =
        '<div class="wls-rail-label">Informal options (a–h)</div>' +
        opts
          .map(function (o) {
            return (
              '<div class="wls-opt-row"><span class="wls-opt-key">' +
              esc(o.id) +
              "</span> " +
              esc(o.text) +
              "</div>"
            );
          })
          .join("");
    }
  }

  function optionText(id) {
    var opts = D.informalOptions || [];
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].id === id) return opts[i].text;
    }
    return "";
  }

  function checkRegister() {
    var keys = D.registerKeys || {};
    var ok = 0;
    var total = 0;
    for (var n = 1; n <= 8; n++) {
      if (!keys[n]) continue;
      total++;
      var sel = $("reg-" + n + "-select");
      var hint = $("reg-" + n + "-hint");
      if (!sel) continue;
      var good = sel.value === keys[n];
      sel.classList.toggle("is-ok", good);
      sel.classList.toggle("is-bad", !good && !!sel.value);
      if (hint) {
        hint.textContent = good || !sel.value ? "" : keys[n] + " — " + optionText(keys[n]);
        hint.classList.toggle("is-show", !good && !!sel.value);
      }
      if (good) ok++;
    }
    var fb = $("wls-register-fb");
    if (fb) {
      fb.textContent = ok + " / " + total + " correct";
      fb.className = "wls-feedback " + (ok === total ? "is-ok" : "is-bad");
    }
    if (ok === total) {
      state.doneSteps.register = true;
      updateStepDone();
      saveProgress(100);
    }
  }

  function resetRegister() {
    for (var n = 1; n <= 8; n++) {
      var sel = $("reg-" + n + "-select");
      var hint = $("reg-" + n + "-hint");
      if (sel) {
        sel.value = "";
        sel.classList.remove("is-ok", "is-bad");
      }
      if (hint) {
        hint.textContent = "";
        hint.classList.remove("is-show");
      }
    }
    var fb = $("wls-register-fb");
    if (fb) {
      fb.textContent = "";
      fb.className = "wls-feedback";
    }
  }

  function updateWordCount() {
    var ta = $("wls-write-ta");
    var meta = $("wls-word-count");
    if (!ta || !meta) return;
    var words = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
    var inRange = words >= 140 && words <= 190;
    meta.innerHTML =
      "<span" +
      (inRange ? ' class="in-range"' : "") +
      ">" +
      words +
      " words</span><span>Target " +
      esc(D.wordLimit) +
      "</span>";
    if (words >= 120) {
      state.doneSteps.write = true;
      updateStepDone();
      saveProgress(words >= 140 ? 100 : 85);
    }
  }

  function saveProgress(percent) {
    try {
      if (window.MasteringB2Progress && typeof window.MasteringB2Progress.record === "function") {
        window.MasteringB2Progress.record({
          unit: 2,
          skill: "writing",
          exerciseId: "informal-email-p2",
          percent: percent,
        });
      }
    } catch (e) {
      /* ignore */
    }
  }

  function showStep(i) {
    if (i < 0 || i >= STEP_IDS.length) return;
    state.step = i;
    STEP_IDS.forEach(function (id, idx) {
      var panel = $("wls-panel-" + id);
      var btn = $("wls-step-" + id);
      if (panel) panel.classList.toggle("is-active", idx === i);
      if (btn) btn.classList.toggle("is-active", idx === i);
    });
    var page = document.querySelector(".wls-page");
    if (page) {
      page.classList.toggle("is-compact-chrome", STEP_IDS[i] !== "read");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateStepDone() {
    STEP_IDS.forEach(function (id) {
      var btn = $("wls-step-" + id);
      if (btn) btn.classList.toggle("is-done", !!state.doneSteps[id]);
    });
  }

  function bindSteps() {
    STEP_IDS.forEach(function (id, idx) {
      var btn = $("wls-step-" + id);
      if (btn) {
        btn.addEventListener("click", function () {
          showStep(idx);
        });
      }
    });
    document.querySelectorAll("[data-wls-next]").forEach(function (b) {
      b.addEventListener("click", function () {
        var cur = STEP_IDS[state.step];
        if (cur === "read" || cur === "model") {
          state.doneSteps[cur] = true;
          updateStepDone();
          saveProgress(40);
        }
        showStep(state.step + 1);
      });
    });
    document.querySelectorAll("[data-wls-prev]").forEach(function (b) {
      b.addEventListener("click", function () {
        showStep(state.step - 1);
      });
    });
  }

  function buildHowTo() {
    var ol = $("wls-howto-list");
    if (!ol) return;
    ol.innerHTML = "";
    (D.howTo || []).forEach(function (item) {
      var li = document.createElement("li");
      var main = document.createElement("span");
      main.textContent = item.main;
      li.appendChild(main);
      if (item.note) {
        var note = document.createElement("span");
        note.className = "note";
        note.textContent = item.note;
        li.appendChild(note);
      }
      ol.appendChild(li);
    });
  }

  function init() {
    renderLetterCard($("wls-benny"), D.benny);
    renderLetterCard($("wls-benny-side"), D.benny);
    renderLetterCard($("wls-tomoko"), D.tomoko);
    renderKatie($("wls-katie"));
    renderKatie($("wls-katie-side"));

    var qs = $("wls-ex1-questions");
    if (qs) {
      qs.innerHTML = (D.ex1Questions || [])
        .map(function (q, i) {
          return (
            '<div class="wls-prompt"><b>' +
            (i + 1) +
            ".</b> " +
            esc(q) +
            "</div>"
          );
        })
        .join("");
    }

    var dont = $("wls-dont-forget");
    if (dont) dont.textContent = D.dontForget || "";

    buildRegisterRows();
    buildHowTo();
    bindSteps();

    var chk = $("wls-register-check");
    var rst = $("wls-register-reset");
    if (chk) chk.addEventListener("click", checkRegister);
    if (rst) rst.addEventListener("click", resetRegister);

    var ta = $("wls-write-ta");
    if (ta) ta.addEventListener("input", updateWordCount);
    updateWordCount();

    showStep(0);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
