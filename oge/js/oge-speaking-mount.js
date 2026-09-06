/**
 * OGE Speaking — tabbed Tasks 1–3 (shared by Variant 1 & 2).
 */
(function (w) {
  var C = w.OgeExamCore;

  function mountSpeaking(root, pack, variantLabel) {
    if (!C || !pack) return;
    var label = variantLabel || "Variant";
    var tabs = [
      { id: "1", label: "Task 1", sub: "Read aloud" },
      { id: "2", label: "Task 2", sub: "Survey" },
      { id: "3", label: "Task 3", sub: "Monologue" }
    ];
    var html =
      '<div class="oge-exam-head oge-speak-head"><h2>Speaking · Oral part · ' +
      C.esc(label) +
      "</h2></div>";
    html += '<div class="oge-speak" data-oge-speak-tabs>';
    html += '<div class="oge-speak-tabs" role="tablist" aria-label="Speaking tasks">';
    tabs.forEach(function (t, i) {
      html +=
        '<button type="button" class="oge-speak-tab' +
        (i === 0 ? " is-active" : "") +
        '" role="tab" aria-selected="' +
        (i === 0 ? "true" : "false") +
        '" data-speak-tab="' +
        t.id +
        '"><span class="oge-speak-tab-kicker">' +
        C.esc(t.label) +
        '</span><span class="oge-speak-tab-title">' +
        C.esc(t.sub) +
        "</span></button>";
    });
    html += "</div>";

    html +=
      '<div class="oge-speak-panel is-active" role="tabpanel" data-speak-panel="1">' +
      '<p class="oge-speak-task-title">' +
      C.esc(pack.task1.title) +
      '</p><p class="oge-speak-instr">Подготовка ' +
      pack.task1.prepSec / 60 +
      " мин · чтение вслух до " +
      pack.task1.speakSec / 60 +
      ' мин.</p><div class="oge-exam-passage oge-speak-read"><p>' +
      C.esc(pack.task1.text) +
      "</p></div></div>";

    html +=
      '<div class="oge-speak-panel" role="tabpanel" hidden data-speak-panel="2">' +
      '<p class="oge-speak-task-title">' +
      C.esc(pack.task2.title) +
      '</p><p class="oge-speak-instr">' +
      C.esc(pack.task2.intro) +
      "</p>" +
      C.renderAudio(pack.task2.audioSrc, "speaking task 2") +
      '<ol class="oge-speak-qlist">';
    pack.task2.questions.forEach(function (q) {
      html += "<li>" + C.esc(q) + "</li>";
    });
    html += "</ol></div>";

    html +=
      '<div class="oge-speak-panel" role="tabpanel" hidden data-speak-panel="3">' +
      '<p class="oge-speak-task-title">' +
      C.esc(pack.task3.title) +
      '</p><p class="oge-speak-instr">Подготовка ' +
      pack.task3.prepSec / 60 +
      " мин · монолог до " +
      pack.task3.speakSec / 60 +
      ' мин.</p><p class="oge-speak-instr oge-speak-instr--strong">Remember to say:</p><ul class="oge-speak-bullets">';
    pack.task3.bullets.forEach(function (b) {
      html += "<li>" + C.esc(b) + "</li>";
    });
    html += "</ul></div>";

    html += "</div>";
    root.innerHTML = html;

    var wrap = root.querySelector("[data-oge-speak-tabs]");
    if (!wrap) return;
    var tabBtns = wrap.querySelectorAll("[data-speak-tab]");
    var panels = wrap.querySelectorAll("[data-speak-panel]");
    tabBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-speak-tab");
        tabBtns.forEach(function (b) {
          var on = b === btn;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-selected", on ? "true" : "false");
        });
        panels.forEach(function (p) {
          var on = p.getAttribute("data-speak-panel") === id;
          p.classList.toggle("is-active", on);
          if (on) p.removeAttribute("hidden");
          else p.setAttribute("hidden", "");
        });
      });
    });
  }

  w.OgeSpeakingMount = { mount: mountSpeaking };
})(typeof window !== "undefined" ? window : this);
