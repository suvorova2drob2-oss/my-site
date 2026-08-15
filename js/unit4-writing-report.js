/** Unit 4 Writing — Part 2 Report (Ex. 1–5) */
(function (W) {
  "use strict";

  var SUBHEAD_KEY = {
    2: "types",
    3: "place",
    4: "advertise",
    5: "conclusion",
  };

  /** Book key: informal phrase number for each formal letter a–h */
  var FORMAL_MATCH = {
    a: "3",
    b: "4",
    c: "8",
    d: "1",
    e: "2",
    f: "7",
    g: "6",
    h: "5",
  };

  var FORMAL_LABELS = {
    a: "Alternatively, …",
    b: "Another point to consider is …",
    c: "In conclusion, I believe …",
    d: "The purpose of this report is to suggest …",
    e: "The majority of students said they would welcome …",
    f: "For this reason, …",
    g: "… it appears that …",
    h: "Obviously, directions to the venue should be simply and clearly communicated.",
  };

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/[\u2018\u2019\u201B\u2032]/g, "'")
      .replace(/\s+/g, " ");
  }

  function wordCount(text) {
    return norm(text)
      .replace(/[^\w\s'-]/g, " ")
      .split(/\s+/)
      .filter(Boolean).length;
  }

  function bindSelectClear(sel) {
    if (!sel) return;
    sel.addEventListener("change", function () {
      sel.classList.remove("is-ok", "is-bad");
    });
  }

  function mount() {
    var ideas = document.getElementById("u4-report-ideas");
    var btnIdeas = document.getElementById("btn-ideas-done");
    var fbIdeas = document.getElementById("fb-ideas");

    if (btnIdeas && ideas) {
      btnIdeas.addEventListener("click", function () {
        var ok = norm(ideas.value).length >= 20;
        if (fbIdeas) {
          fbIdeas.textContent = ok
            ? "Notes saved — compare your ideas with the model above."
            : "Write a few sentences: are the model ideas good? What would you change?";
          fbIdeas.style.color = ok ? "#86efac" : "#fca5a5";
        }
      });
    }

    [2, 3, 4, 5].forEach(function (p) {
      bindSelectClear(document.getElementById("subhead-" + p));
    });

    var btnSub = document.getElementById("btn-check-subhead");
    var fbSub = document.getElementById("fb-subhead");
    if (btnSub) {
      btnSub.addEventListener("click", function () {
        var ok = 0;
        var total = 4;
        [2, 3, 4, 5].forEach(function (p) {
          var sel = document.getElementById("subhead-" + p);
          if (!sel) return;
          var good = sel.value === SUBHEAD_KEY[p];
          sel.classList.toggle("is-ok", good);
          sel.classList.toggle("is-bad", !!sel.value && !good);
          if (good) ok++;
        });
        if (fbSub) {
          fbSub.textContent =
            ok === total
              ? "All 4 subheadings correct."
              : "Score: " + ok + " / " + total + ".";
        }
      });
    }

    var btnSubReset = document.getElementById("btn-reset-subhead");
    if (btnSubReset) {
      btnSubReset.addEventListener("click", function () {
        [2, 3, 4, 5].forEach(function (p) {
          var sel = document.getElementById("subhead-" + p);
          if (sel) {
            sel.value = "";
            sel.classList.remove("is-ok", "is-bad");
          }
        });
        if (fbSub) fbSub.textContent = "";
      });
    }

    Object.keys(FORMAL_MATCH).forEach(function (letter) {
      var inp = document.getElementById("match-" + letter);
      if (inp) {
        inp.addEventListener("input", function () {
          inp.classList.remove("ok", "bad");
        });
      }
    });

    var btnMatch = document.getElementById("btn-check-match");
    var fbMatch = document.getElementById("fb-match");
    if (btnMatch) {
      btnMatch.addEventListener("click", function () {
        var ok = 0;
        var letters = Object.keys(FORMAL_MATCH);
        letters.forEach(function (letter) {
          var inp = document.getElementById("match-" + letter);
          if (!inp) return;
          var val = norm(inp.value);
          var good = val === FORMAL_MATCH[letter];
          inp.classList.toggle("ok", good);
          inp.classList.toggle("bad", !!val && !good);
          if (good) ok++;
        });
        if (fbMatch) {
          fbMatch.textContent =
            ok === letters.length
              ? "All 8 matches correct."
              : "Score: " + ok + " / " + letters.length + ".";
        }
        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(ok, letters.length);
        }
      });
    }

    var btnMatchReset = document.getElementById("btn-reset-match");
    if (btnMatchReset) {
      btnMatchReset.addEventListener("click", function () {
        Object.keys(FORMAL_MATCH).forEach(function (letter) {
          var inp = document.getElementById("match-" + letter);
          if (inp) {
            inp.value = "";
            inp.classList.remove("ok", "bad");
          }
        });
        if (fbMatch) fbMatch.textContent = "";
      });
    }

    var planIds = ["plan-1", "plan-2", "plan-3", "plan-4", "plan-5"];
    var btnPlan = document.getElementById("btn-plan-done");
    var fbPlan = document.getElementById("fb-plan");
    if (btnPlan) {
      btnPlan.addEventListener("click", function () {
        var filled = planIds.every(function (id) {
          var el = document.getElementById(id);
          return el && norm(el.value).length >= 8;
        });
        if (fbPlan) {
          fbPlan.textContent = filled
            ? "Report plan saved — use it for Ex. 5."
            : "Write a short note for each paragraph (at least a few words per line).";
          fbPlan.style.color = filled ? "#86efac" : "#fca5a5";
        }
      });
    }

    var writeEl = document.getElementById("u4-report-write");
    var wcEl = document.getElementById("u4-report-wc");
    if (writeEl && wcEl) {
      writeEl.addEventListener("input", function () {
        var n = wordCount(writeEl.value);
        wcEl.innerHTML =
          "Words: <strong>" +
          n +
          "</strong> (target 140&ndash;190)";
        wcEl.style.color =
          n >= 140 && n <= 190 ? "#86efac" : n > 190 ? "#fca5a5" : "#9bb0d3";
      });
    }

    var btnWriteDone = document.getElementById("btn-write-done");
    var fbWrite = document.getElementById("fb-write");
    if (btnWriteDone && writeEl) {
      btnWriteDone.addEventListener("click", function () {
        var n = wordCount(writeEl.value);
        var ok = n >= 140 && n <= 190;
        if (fbWrite) {
          fbWrite.textContent = ok
            ? "Draft length OK (" + n + " words). Ask your teacher for feedback."
            : n < 140
              ? "Too short — aim for at least 140 words (now " + n + ")."
              : "Too long — trim to 190 words or fewer (now " + n + ").";
          fbWrite.style.color = ok ? "#86efac" : "#fca5a5";
        }
        if (ok && W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(1, 1);
        }
      });
    }
  }

  W.U4_WRITING_REPORT = {
    mount: mount,
    SUBHEAD_KEY: SUBHEAD_KEY,
    FORMAL_MATCH: FORMAL_MATCH,
    FORMAL_LABELS: FORMAL_LABELS,
  };
})(window);
