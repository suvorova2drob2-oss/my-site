/** Unit 3 Writing Part 1 — model analysis checks */
(function (W) {
  "use strict";

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
  }

  function matchesAny(val, answers) {
    var n = norm(val);
    if (!n) return false;
    for (var i = 0; i < answers.length; i++) {
      var a = norm(answers[i]);
      if (n === a || n.indexOf(a) !== -1 || a.indexOf(n) !== -1) return true;
    }
    return false;
  }

  var LINK_ROWS = [
    {
      id: "side1",
      label: "Introducing one side of the argument",
      answers: ["some people feel; on the positive side; on the one hand"],
    },
    {
      id: "side2",
      label: "Introducing the other side of the argument",
      answers: ["others, however, believe; on the negative side; on the other hand"],
    },
    {
      id: "more",
      label: "Making additional points",
      answers: [
        "another positive influence; in addition (to this); furthermore; moreover; firstly/secondly/finally",
      ],
    },
    {
      id: "result",
      label: "Introducing a result",
      answers: ["for this reason; consequently; as a result"],
    },
    {
      id: "conc",
      label: "Concluding",
      answers: ["in conclusion; on balance; to sum up"],
    },
  ];

  function mountAnalysis(cfg) {
    cfg = cfg || {};
    var fb = document.getElementById(cfg.fbId || "wep-an-fb");
    var btnCheck = document.getElementById(cfg.checkId || "wep-an-check");
    var btnReset = document.getElementById(cfg.resetId || "wep-an-reset");

    function score() {
      var ok = 0;
      var total = 0;

      var ex2 = document.getElementById("wep-ex2");
      if (ex2) {
        total++;
        var g2 = matchesAny(ex2.value, [
          "the safety aspects",
          "safety",
          "increasing safety",
          "safety for competitors",
          "helmet",
          "modern helmet design",
        ]);
        ex2.classList.toggle("ok", g2);
        ex2.classList.toggle("bad", !g2 && norm(ex2.value));
        if (g2) ok++;
      }

      var ex3 = document.getElementById("wep-ex3");
      if (ex3) {
        total++;
        var g3 = matchesAny(ex3.value, [
          "both sides",
          "positive and negative",
          "positive and the negative",
          "considers both",
          "balanced because",
          "advantages and disadvantages",
        ]);
        ex3.classList.toggle("ok", g3);
        ex3.classList.toggle("bad", !g3 && norm(ex3.value));
        if (g3) ok++;
      }

      ["p1", "p2", "p3", "p4"].forEach(function (pid) {
        var sel = document.getElementById("wep-" + pid);
        if (!sel) return;
        total++;
        var key = sel.getAttribute("data-key") || "";
        var good = sel.value === key;
        sel.classList.toggle("ok", good);
        sel.classList.toggle("bad", !good && sel.value);
        if (good) ok++;
      });

      LINK_ROWS.forEach(function (row) {
        var inp = document.getElementById("wep-link-" + row.id);
        if (!inp) return;
        total++;
        var good = matchesAny(inp.value, row.answers);
        inp.classList.toggle("ok", good);
        inp.classList.toggle("bad", !good && norm(inp.value));
        if (good) ok++;
      });

      return { ok: ok, total: total };
    }

    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        var s = score();
        if (fb) {
          fb.textContent =
            s.ok === s.total
              ? "All " + s.total + " correct."
              : "Score: " + s.ok + " / " + s.total + ".";
        }
        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(s.ok, s.total);
        }
      });
    }
    if (btnReset) {
      btnReset.addEventListener("click", function () {
        document.querySelectorAll("#wep-analysis .wep-gap, #wep-analysis .wep-select, #wep-analysis .wep-link-table input").forEach(function (el) {
          el.value = "";
          el.classList.remove("ok", "bad");
        });
        if (fb) fb.textContent = "";
      });
    }
  }

  function mountWordCount(cfg) {
    cfg = cfg || {};
    var ta = document.getElementById(cfg.taId || "wep-essay");
    var wc = document.getElementById(cfg.wcId || "wep-wc");
    if (!ta || !wc) return;

    function countWords() {
      var t = norm(ta.value);
      if (!t) return 0;
      return t.split(" ").filter(Boolean).length;
    }

    function render() {
      var n = countWords();
      wc.innerHTML = "Words: <strong>" + n + "</strong> (target 140&ndash;190)";
      wc.classList.toggle("is-ok", n >= 140 && n <= 190);
      wc.classList.toggle("is-warn", n > 0 && (n < 140 || n > 190));
    }

    ta.addEventListener("input", render);
    render();
  }

  W.U3_WRITING_ESSAY = {
    mountAnalysis: mountAnalysis,
    mountWordCount: mountWordCount,
    LINK_ROWS: LINK_ROWS,
  };
})(window);
