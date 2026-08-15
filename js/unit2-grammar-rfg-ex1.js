/** Unit 2 Grammar — Ready for Grammar Ex. 1 (gerund + to-infinitive per sentence) */
(function (W) {
  "use strict";

  var GAPS = [
    { n: 1, answers: ["going"], keyShow: "going", hint: "go" },
    { n: 2, answers: ["to meet"], keyShow: "to meet", hint: "meet" },
    { n: 3, answers: ["smiling"], keyShow: "smiling", hint: "smile" },
    { n: 4, answers: ["to hit"], keyShow: "to hit", hint: "hit" },
    { n: 5, answers: ["to enjoy"], keyShow: "to enjoy", hint: "enjoy" },
    { n: 6, answers: ["buying"], keyShow: "buying", hint: "buy" },
    { n: 7, answers: ["to take"], keyShow: "to take", hint: "take" },
    { n: 8, answers: ["studying"], keyShow: "studying", hint: "study" },
    { n: 9, answers: ["to let"], keyShow: "to let", hint: "let" },
    { n: 10, answers: ["asking"], keyShow: "asking", hint: "ask" },
  ];

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
  }

  function gapInput(n, hint) {
    return (
      '<label class="rfg-gap-wrap">' +
      '<input type="text" class="gap rfg-gap" id="g' +
      n +
      '" data-gap="' +
      n +
      '" autocomplete="off" spellcheck="false" aria-label="Gap ' +
      n +
      '" />' +
      '<span class="rfg-hint">(' +
      hint +
      ")</span></label>"
    );
  }

  function renderSentences(container) {
    container.innerHTML =
      '<ol class="rfg-sent-list">' +
      "<li>When I suggested " +
      gapInput(1, "go") +
      " skiing on Sunday, Marta was very enthusiastic, so we&rsquo;ve arranged " +
      gapInput(2, "meet") +
      " at seven.</li>" +
      "<li>I can&rsquo;t help " +
      gapInput(3, "smile") +
      " when I see my dad playing tennis. He&rsquo;s had hundreds of lessons but he still hasn&rsquo;t learnt " +
      gapInput(4, "hit") +
      " the ball properly.</li>" +
      "<li>Paul appears " +
      gapInput(5, "enjoy") +
      " playing golf. He&rsquo;s even considering " +
      gapInput(6, "buy") +
      " his own set of clubs.</li>" +
      "<li>One of my cousins has promised " +
      gapInput(7, "take") +
      " me windsurfing as soon as I&rsquo;ve finished " +
      gapInput(8, "study") +
      ".</li>" +
      "<li>At first my parents refused " +
      gapInput(9, "let") +
      " me go to karate lessons, but I kept " +
      gapInput(10, "ask") +
      " and eventually they agreed.</li>" +
      "</ol>";
  }

  function mount(cfg) {
    cfg = cfg || {};
    var container = document.getElementById(cfg.listId || "rfg-ex1-list");
    if (!container) return;

    renderSentences(container);

    var fb = document.getElementById("gram-fb");
    var btnCheck = document.getElementById("btn-check");
    var btnReset = document.getElementById("btn-reset");

    function clearMarks() {
      GAPS.forEach(function (g) {
        var el = document.getElementById("g" + g.n);
        if (el) el.classList.remove("ok", "bad");
      });
      if (fb) {
        fb.textContent = "";
        fb.className = "gram-feedback";
      }
    }

    GAPS.forEach(function (g) {
      var el = document.getElementById("g" + g.n);
      if (el) el.addEventListener("input", clearMarks);
    });

    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        var ok = 0;
        var missing = false;
        GAPS.forEach(function (g) {
          var el = document.getElementById("g" + g.n);
          if (!norm(el ? el.value : "")) missing = true;
        });
        if (missing) {
          if (fb) {
            fb.textContent = "Fill every gap (10 in total), then check again.";
            fb.className = "gram-feedback is-bad";
          }
          return;
        }

        GAPS.forEach(function (g) {
          var el = document.getElementById("g" + g.n);
          var val = norm(el.value);
          var good = g.answers.some(function (a) {
            return norm(a) === val;
          });
          el.classList.toggle("ok", good);
          el.classList.toggle("bad", !good);
          if (good) ok++;
        });

        if (fb) {
          fb.textContent =
            ok === GAPS.length
              ? "All " + GAPS.length + " correct."
              : "Score: " + ok + " / " + GAPS.length + ".";
          fb.className =
            "gram-feedback " + (ok === GAPS.length ? "is-ok" : "is-bad");
        }

        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(ok, GAPS.length);
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        GAPS.forEach(function (g) {
          var el = document.getElementById("g" + g.n);
          if (el) el.value = "";
        });
        clearMarks();
      });
    }
  }

  W.U2_GR_RFG_EX1 = { mount: mount, GAPS: GAPS };
})(window);
