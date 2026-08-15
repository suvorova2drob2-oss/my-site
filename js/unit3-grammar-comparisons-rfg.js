/** Unit 3 Grammar — Ready for Grammar Comparisons Ex. 1–2 */
(function (W) {
  "use strict";

  var EX1 = [
    {
      text: 'I knew the exam would be difficult, but I didn\'t expect it to be as {{0}} as that.',
      gaps: [{ id: "1", answers: ["hard"] }],
    },
    {
      text: "Last summer was the {{0}} since records began, with temperatures reaching 40\u00b0 in some parts of Britain.",
      gaps: [{ id: "2", answers: ["hottest"] }],
    },
    {
      text: "There are too many mistakes in this essay. You need to be a lot {{0}}.",
      gaps: [{ id: "3", answers: ["more careful"] }],
    },
    {
      text: "He was very ill last week, but I\u2019m pleased to say he seems to be getting {{0}} now.",
      gaps: [{ id: "4", answers: ["better"] }],
    },
    {
      text: "They put the heating on today so the school wasn\u2019t quite so {{0}} as it was yesterday.",
      gaps: [{ id: "5", answers: ["cold"] }],
    },
    {
      text: "That was the {{0}} film I\u2019ve ever seen. I almost fell asleep near the end.",
      gaps: [{ id: "6", answers: ["most boring", "the most boring"] }],
    },
    {
      text: "The later you go to bed, the {{0}} you\u2019ll feel tomorrow.",
      gaps: [{ id: "7", answers: ["tireder", "more tired"] }],
    },
    {
      text: "We were the first guests to arrive at the party. We got there half an hour {{0}} than anybody else.",
      gaps: [{ id: "8", answers: ["earlier"] }],
    },
    {
      text: "Life in the countryside is so much {{0}} than in the city; no traffic, no crowds and no neighbours!",
      gaps: [{ id: "9", answers: ["quieter", "more quiet"] }],
    },
    {
      text: "The cheetah, which can run at a speed of 110 kilometres an hour, is the {{0}} animal in the world.",
      gaps: [{ id: "10", answers: ["fastest", "the fastest"] }],
    },
  ];

  var EX1_BOX = ["boring", "careful", "cold", "early", "fast", "good", "hard", "hot", "quiet", "tired"];

  var EX2 = [
    {
      n: 1,
      a: "Our television is almost as big as a double bed!",
      b: "Our television is almost the {{0}} size {{1}} a double bed!",
      gaps: [
        { id: "2-1a", answers: ["same"] },
        { id: "2-1b", answers: ["as"] },
      ],
    },
    {
      n: 2,
      a: "I used to be far more interested in playing video games than I am now.",
      b: "I\u2019m {{0}} nearly as interested in playing video games now {{1}} I used to be.",
      gaps: [
        { id: "2-2a", answers: ["not"] },
        { id: "2-2b", answers: ["as"] },
      ],
    },
    {
      n: 3,
      a: "My taste in music is very similar to that of my best friend.",
      b: "There\u2019s not a {{0}} deal of difference {{1}} my taste in music and that of my best friend.",
      gaps: [
        { id: "2-3a", answers: ["great"] },
        { id: "2-3b", answers: ["between"] },
      ],
    },
    {
      n: 4,
      a: "The most stylish phone I\u2019ve ever owned is the one I have now.",
      b: "I\u2019ve never owned {{0}} a stylish phone {{1}} the one I have now.",
      gaps: [
        { id: "2-4a", answers: ["such"] },
        { id: "2-4b", answers: ["as"] },
      ],
    },
    {
      n: 5,
      a: "If I have a lot of screen time in the evening, it takes me a long time to get to sleep.",
      b: "The {{0}} screen time I have in the evening, {{1}} longer it takes me to get to sleep.",
      gaps: [
        { id: "2-5a", answers: ["more"] },
        { id: "2-5b", answers: ["the"] },
      ],
    },
    {
      n: 6,
      a: "I study far less than I should; I\u2019ll need to work harder if I want to pass the First exam.",
      b: "I don\u2019t study nearly as {{0}} as I should; I\u2019ll need to make {{1}} of an effort if I want to pass the First exam.",
      gaps: [
        { id: "2-6a", answers: ["much"] },
        { id: "2-6b", answers: ["more"] },
      ],
    },
    {
      n: 7,
      a: "I had fewer problems with this exercise than I thought I would.",
      b: "I didn\u2019t have as {{0}} problems with this exercise {{1}} I thought I would.",
      gaps: [
        { id: "2-7a", answers: ["many"] },
        { id: "2-7b", answers: ["as"] },
      ],
    },
  ];

  var EX2_BOX = ["as", "between", "great", "many", "more", "much", "not", "same", "such", "the"];

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
  }

  function matches(val, answers) {
    var n = norm(val);
    if (!n) return false;
    for (var i = 0; i < answers.length; i++) {
      if (n === norm(answers[i])) return true;
    }
    return false;
  }

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderTextWithGaps(text, gaps, prefix) {
    var html = esc(text);
    gaps.forEach(function (g, gi) {
      var id = g.id || prefix + "-" + gi;
      var inp =
        '<input type="text" class="gap u3-comp-gap" id="' +
        esc(id) +
        '" autocomplete="off" spellcheck="false" aria-label="Gap" />';
      html = html.replace("{{" + gi + "}}", inp);
    });
    return html;
  }

  function mountEx1(cfg) {
    cfg = cfg || {};
    var listHost = document.getElementById(cfg.listId || "u3-comp-ex1-list");
    var boxHost = document.getElementById(cfg.boxId || "u3-comp-ex1-box");
    var fb = document.getElementById(cfg.fbId || "u3-comp-ex1-fb");
    if (!listHost) return;

    if (boxHost) {
      EX1_BOX.forEach(function (w) {
        var chip = document.createElement("span");
        chip.className = "u3-comp-chip";
        chip.textContent = w;
        boxHost.appendChild(chip);
      });
    }

    var ol = document.createElement("ol");
    ol.className = "u3-comp-list";
    EX1.forEach(function (row, idx) {
      var li = document.createElement("li");
      li.innerHTML = renderTextWithGaps(row.text, row.gaps, "ex1-" + (idx + 1));
      ol.appendChild(li);
    });
    listHost.appendChild(ol);

    function allInputs() {
      return listHost.querySelectorAll("input.u3-comp-gap");
    }

    function score() {
      var ok = 0;
      var total = 0;
      EX1.forEach(function (row, idx) {
        row.gaps.forEach(function (g, gi) {
          total++;
          var id = g.id || "ex1-" + (idx + 1) + "-" + gi;
          var el = document.getElementById(id);
          var good = matches(el && el.value, g.answers);
          if (el) {
            el.classList.toggle("ok", good);
            el.classList.toggle("bad", !good && norm(el.value));
          }
          if (good) ok++;
        });
      });
      return { ok: ok, total: total };
    }

    function bindButtons(btnCheckId, btnResetId) {
      var btnCheck = document.getElementById(btnCheckId || "u3-comp-ex1-check");
      var btnReset = document.getElementById(btnResetId || "u3-comp-ex1-reset");
      if (btnCheck) {
        btnCheck.addEventListener("click", function () {
          var s = score();
          if (fb) {
            fb.textContent =
              s.ok === s.total
                ? "All " + s.total + " correct."
                : "Score: " + s.ok + " / " + s.total + ".";
            fb.className = "part2-feedback show";
          }
          if (W.MasteringB2Progress) {
            W.MasteringB2Progress.recordCheckFromDom(s.ok, s.total);
          }
        });
      }
      if (btnReset) {
        btnReset.addEventListener("click", function () {
          allInputs().forEach(function (inp) {
            inp.value = "";
            inp.classList.remove("ok", "bad");
          });
          if (fb) {
            fb.textContent = "";
            fb.className = "part2-feedback";
          }
        });
      }
    }

    bindButtons(cfg.checkId, cfg.resetId);
  }

  function mountEx2(cfg) {
    cfg = cfg || {};
    var listHost = document.getElementById(cfg.listId || "u3-comp-ex2-list");
    var boxHost = document.getElementById(cfg.boxId || "u3-comp-ex2-box");
    var fb = document.getElementById(cfg.fbId || "u3-comp-ex2-fb");
    if (!listHost) return;

    if (boxHost) {
      EX2_BOX.forEach(function (w) {
        var chip = document.createElement("span");
        chip.className = "u3-comp-chip";
        chip.textContent = w;
        boxHost.appendChild(chip);
      });
    }

    EX2.forEach(function (row) {
      var div = document.createElement("div");
      div.className = "u3-comp-pair";
      div.innerHTML =
        '<div class="u3-comp-pair-num">' +
        row.n +
        ".</div>" +
        '<p class="u3-comp-line-a"><strong>a</strong> ' +
        esc(row.a) +
        "</p>" +
        '<p class="u3-comp-line-b"><strong>b</strong> ' +
        renderTextWithGaps(row.b, row.gaps, "ex2-" + row.n) +
        "</p>";
      listHost.appendChild(div);
    });

    function score() {
      var ok = 0;
      var total = 0;
      EX2.forEach(function (row) {
        row.gaps.forEach(function (g) {
          total++;
          var el = document.getElementById(g.id);
          var good = matches(el && el.value, g.answers);
          if (el) {
            el.classList.toggle("ok", good);
            el.classList.toggle("bad", !good && norm(el.value));
          }
          if (good) ok++;
        });
      });
      return { ok: ok, total: total };
    }

    var btnCheck = document.getElementById(cfg.checkId || "u3-comp-ex2-check");
    var btnReset = document.getElementById(cfg.resetId || "u3-comp-ex2-reset");
    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        var s = score();
        if (fb) {
          fb.textContent =
            s.ok === s.total
              ? "All " + s.total + " correct."
              : "Score: " + s.ok + " / " + s.total + ".";
          fb.className = "part2-feedback show";
        }
        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(s.ok, s.total);
        }
      });
    }
    if (btnReset) {
      btnReset.addEventListener("click", function () {
        listHost.querySelectorAll("input.u3-comp-gap").forEach(function (inp) {
          inp.value = "";
          inp.classList.remove("ok", "bad");
        });
        if (fb) {
          fb.textContent = "";
          fb.className = "part2-feedback";
        }
      });
    }
  }

  W.U3_GR_COMP_RFG = {
    mountEx1: mountEx1,
    mountEx2: mountEx2,
    EX1: EX1,
    EX2: EX2,
  };
})(window);
