/**
 * Step-by-step vocabulary MCQ (A–D). Used on full pages — not in the phrases drawer.
 * FCE_VOCAB_MCQ_STEP.mount({ rootId, exercises })
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

  function mount(cfg) {
    cfg = cfg || {};
    var root = document.getElementById(cfg.rootId || "mcq-root");
    var exercises = cfg.exercises || [];
    if (!root || !exercises.length) return;

    var ix = 0;
    var picked = [];
    var done = false;

    function html() {
      if (done) {
        var correctN = 0;
        var n;
        for (n = 0; n < exercises.length; n++) {
          if (picked[n] === exercises[n].answer) correctN++;
        }
        return (
          '<p class="vmcq-done">' +
          correctN +
          " / " +
          exercises.length +
          '</p><p class="vmcq-done-note">Готово. Можно пройти ещё раз.</p>' +
          '<div class="vmcq-nav"><button type="button" class="vmcq-next" data-mcq-nav="restart">Сначала</button></div>'
        );
      }
      var item = exercises[ix];
      var choice = picked[ix] || "";
      var segs = "";
      var s;
      for (s = 0; s < exercises.length; s++) {
        segs +=
          '<span class="vmcq-seg' + (s <= ix ? " is-on" : "") + '"></span>';
      }
      var opts = "";
      var c;
      for (c = 0; c < item.choices.length; c++) {
        var ch = item.choices[c];
        var cls = "vmcq-opt";
        if (choice) {
          if (ch.id === item.answer) cls += " is-ok";
          else if (ch.id === choice) cls += " is-bad";
        }
        opts +=
          '<button type="button" class="' +
          cls +
          '" data-mcq-letter="' +
          esc(ch.id) +
          '"' +
          (choice ? " disabled" : "") +
          ">" +
          esc(ch.id) +
          ". " +
          esc(ch.text) +
          "</button>";
      }
      return (
        '<div class="vmcq-top"><div class="vmcq-bar" aria-hidden="true">' +
        segs +
        '</div><span class="vmcq-count">' +
        (ix + 1) +
        " / " +
        exercises.length +
        "</span></div>" +
        '<p class="vmcq-q"><strong>' +
        (ix + 1) +
        ".</strong> " +
        esc(item.prompt) +
        "</p>" +
        '<div class="vmcq-opts">' +
        opts +
        "</div>" +
        (item.hint
          ? '<details class="vmcq-hint"><summary>Показать подсказку</summary><p>' +
            esc(item.hint) +
            "</p></details>"
          : "") +
        '<div class="vmcq-nav">' +
        '<button type="button" class="vmcq-back" data-mcq-nav="back"' +
        (ix === 0 ? " hidden" : "") +
        ">Назад</button>" +
        '<button type="button" class="vmcq-next" data-mcq-nav="next">Следующий элемент</button>' +
        "</div>"
      );
    }

    function paint() {
      root.innerHTML = html();
    }

    root.addEventListener("click", function (e) {
      var letterBtn = e.target.closest("[data-mcq-letter]");
      if (letterBtn && !picked[ix]) {
        picked[ix] = letterBtn.getAttribute("data-mcq-letter");
        paint();
        return;
      }
      var nav = e.target.closest("[data-mcq-nav]");
      if (!nav) return;
      var dir = nav.getAttribute("data-mcq-nav");
      if (dir === "back" && ix > 0) ix--;
      else if (dir === "next") {
        if (ix < exercises.length - 1) ix++;
        else done = true;
      } else if (dir === "restart") {
        ix = 0;
        picked = [];
        done = false;
      }
      paint();
    });

    paint();
  }

  W.FCE_VOCAB_MCQ_STEP = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
