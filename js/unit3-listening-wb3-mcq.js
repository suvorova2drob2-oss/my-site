(function (global) {
  "use strict";

  var CORRECT = ["C", "A", "C", "A", "C", "A", "B"];

  var MCQ = [
    {
      stem: "Tommy has not returned to his home town for a long time because",
      opts: {
        A: "he has had to devote all his time to acting.",
        B: "there are some aspects of his life there he is ashamed of.",
        C: "he no longer has close relatives in the area.",
      },
    },
    {
      stem: "What contributed most to the changes in Tommy&rsquo;s attitude to life?",
      opts: {
        A: "becoming a celebrity",
        B: "being a long way from home",
        C: "not having his friends around him",
      },
    },
    {
      stem: "How has the centre of Tommy&rsquo;s home town changed?",
      opts: {
        A: "The shops there are much bigger.",
        B: "It offers more facilities for families.",
        C: "The road system has been altered.",
      },
    },
    {
      stem: "How does Tommy feel about the changes made to the road where he used to live?",
      opts: {
        A: "He regrets the loss of green spaces.",
        B: "He is concerned about overcrowding in the area.",
        C: "He is full of admiration for the design of the new buildings.",
      },
    },
    {
      stem: "What did Tommy use to do in his free time?",
      opts: {
        A: "He walked other people&rsquo;s dogs for them.",
        B: "He met up with his friends outside the shops.",
        C: "He did open-air sporting activities.",
      },
    },
    {
      stem: "Why did Tommy&rsquo;s parents want him to join the drama group?",
      opts: {
        A: "They thought it would keep him out of trouble.",
        B: "They felt he had real acting talent.",
        C: "They wanted to pass on their love of the theatre.",
      },
    },
    {
      stem: "What does Tommy say he has heard about his old school?",
      opts: {
        A: "The sports facilities have improved.",
        B: "People think more highly of it now.",
        C: "The students are more involved in looking after the gardens.",
      },
    },
  ];

  var PHRASAL = [
    {
      n: 1,
      text:
        "Tommy Wells, the famous TV and film star, is a local boy who <strong>grew up</strong> in Marchwood.",
      key: "c",
    },
    {
      n: 2,
      text: "Most of my mates I really valued <strong>moved on</strong>, like me.",
      key: "f",
    },
    {
      n: 3,
      text: "I don&rsquo;t think I was a very nice person at that time. But I <strong>grew out of it</strong>, luckily!",
      key: "d",
    },
    {
      n: 4,
      text:
        "[The houses have] all been <strong>knocked down</strong> and replaced with boring blocks of flats and retirement homes!",
      key: "a",
    },
    {
      n: 5,
      text: "We used to <strong>hang out</strong> in the local park and practise our football skills.",
      key: "b",
    },
    {
      n: 6,
      text: "I must admit I wasn&rsquo;t too keen; I&rsquo;d rather have been <strong>chilling out</strong> with my mates!",
      key: "e",
    },
  ];

  var MEANINGS = {
    a: "demolish",
    b: "spend time in a particular place (informal)",
    c: "change from being a baby or young child to being an older child or adult",
    d: "stop behaving in a certain way because you are older",
    e: "spend time relaxing (informal)",
    f: "leave one place to go to another",
  };

  function mount(options) {
    options = options || {};
    var root = document.getElementById(options.rootId || "mcq-root");
    var fb = document.getElementById(options.feedbackId || "feedback");
    var matchRoot = document.getElementById(options.matchRootId || "phrasal-root");
    var fbMatch = document.getElementById(options.feedbackMatchId || "feedback-phrasal");
    var fbAll = document.getElementById(options.feedbackAllId || "feedback-all");

    function renderMcq() {
      if (!root) return;
      root.innerHTML = "";
      MCQ.forEach(function (item, idx) {
        var n = idx + 1;
        var box = document.createElement("section");
        box.className = "q";
        box.innerHTML =
          '<p class="stem"><strong>' + n + ".</strong> " + item.stem + "</p>";
        var list = document.createElement("ul");
        list.className = "opts";
        ["A", "B", "C"].forEach(function (letter) {
          var li = document.createElement("li");
          li.className = "opt-line";
          li.setAttribute("data-q", String(idx));
          li.setAttribute("data-k", letter);
          var id = "q" + n + letter;
          li.innerHTML =
            '<input type="radio" name="q' +
            n +
            '" id="' +
            id +
            '" value="' +
            letter +
            '">' +
            '<span class="letter">' +
            letter +
            "</span>" +
            '<label for="' +
            id +
            '">' +
            item.opts[letter] +
            "</label>";
          list.appendChild(li);
        });
        box.appendChild(list);
        root.appendChild(box);
      });

      root.querySelectorAll('input[type="radio"]').forEach(function (radio) {
        radio.addEventListener("change", function () {
          clearMcqMarks();
          if (fb) fb.textContent = "";
        });
      });
    }

    function renderPhrasal() {
      if (!matchRoot) return;
      var letters = ["a", "b", "c", "d", "e", "f"];
      var html =
        '<div class="phrasal-grid">' +
        '<div class="phrasal-col"><strong>Extracts 1&ndash;6</strong><ol class="phrasal-list">';
      PHRASAL.forEach(function (row) {
        html +=
          '<li><span class="phrasal-extract">' +
          row.n +
          ". " +
          row.text +
          "</span></li>";
      });
      html += '</ol></div><div class="phrasal-col"><strong>Your answers</strong>';
      PHRASAL.forEach(function (row) {
        html +=
          '<div class="phrasal-row"><label for="ph-' +
          row.n +
          '">' +
          row.n +
          ".</label><select id="ph-" +
          row.n +
          '" data-n="' +
          row.n +
          '"><option value="">— choose —</option>';
        letters.forEach(function (L) {
          html +=
            '<option value="' +
            L +
            '">' +
            L +
            ") " +
            MEANINGS[L] +
            "</option>";
        });
        html += "</select></div>";
      });
      html += "</div></div>";
      matchRoot.innerHTML = html;
    }

    function clearMcqMarks() {
      if (!root) return;
      root.querySelectorAll(".opt-line").forEach(function (line) {
        line.classList.remove("ok", "bad-pick");
      });
    }

    function getChoice(i) {
      var el = root.querySelector('input[name="q' + (i + 1) + '"]:checked');
      return el ? el.value : "";
    }

    function scoreMcq() {
      clearMcqMarks();
      var missing = false;
      for (var i = 0; i < MCQ.length; i++) {
        if (!getChoice(i)) missing = true;
      }
      if (missing) {
        if (fb) fb.textContent = "Choose A, B or C for every question, then check again.";
        return null;
      }

      var score = 0;
      for (var j = 0; j < MCQ.length; j++) {
        var pick = getChoice(j);
        var keyLetter = CORRECT[j];
        var ok = pick === keyLetter;
        if (ok) score++;

        var pickLine = root.querySelector('.opt-line[data-q="' + j + '"][data-k="' + pick + '"]');
        if (pickLine) pickLine.classList.add(ok ? "ok" : "bad-pick");
        if (!ok) {
          var correctLine = root.querySelector('.opt-line[data-q="' + j + '"][data-k="' + keyLetter + '"]');
          if (correctLine) correctLine.classList.add("ok");
        }
      }

      if (fb) {
        fb.classList.remove("score-ok", "score-partial");
        if (score === MCQ.length) {
          fb.classList.add("score-ok");
          fb.innerHTML = "<strong>All " + MCQ.length + " correct.</strong>";
        } else {
          fb.classList.add("score-partial");
          fb.innerHTML =
            "Score: <strong>" +
            score +
            "</strong> / " +
            MCQ.length +
            ". Green = correct option; your wrong pick is outlined in red where applicable.";
        }
      }
      return score;
    }

    function scorePhrasal() {
      if (!matchRoot) return 0;
      var ok = 0;
      PHRASAL.forEach(function (row) {
        var sel = document.getElementById("ph-" + row.n);
        if (!sel) return;
        var good = sel.value === row.key;
        sel.classList.toggle("is-ok", good && sel.value);
        sel.classList.toggle("is-bad", sel.value && !good);
        if (good) ok++;
      });
      return ok;
    }

    renderMcq();
    renderPhrasal();

    var checkBtn = document.getElementById(options.checkId || "btn-check");
    var resetBtn = document.getElementById(options.resetId || "btn-reset");
    var checkPhrasalBtn = document.getElementById(options.checkPhrasalId || "btn-check-phrasal");
    var checkAllBtn = document.getElementById(options.checkAllId || "btn-check-all");

    if (checkBtn) {
      checkBtn.addEventListener("click", function () {
        var score = scoreMcq();
        if (score != null && global.MasteringB2Progress) {
          global.MasteringB2Progress.recordCheckFromDom(score, MCQ.length);
        }
      });
    }

    if (checkPhrasalBtn) {
      checkPhrasalBtn.addEventListener("click", function () {
        var ok = scorePhrasal();
        if (fbMatch) {
          fbMatch.textContent = ok + " / " + PHRASAL.length + " correct.";
          fbMatch.className = "fce-l4-feedback " + (ok === PHRASAL.length ? "score-ok" : "score-partial");
        }
      });
    }

    if (checkAllBtn) {
      checkAllBtn.addEventListener("click", function () {
        var mcqScore = scoreMcq();
        if (mcqScore == null) return;
        var phScore = scorePhrasal();
        var total = MCQ.length + PHRASAL.length;
        var ok = mcqScore + phScore;
        if (fbMatch) {
          fbMatch.textContent = phScore + " / " + PHRASAL.length + " correct (phrasal verbs).";
          fbMatch.className = "fce-l4-feedback " + (phScore === PHRASAL.length ? "score-ok" : "score-partial");
        }
        if (fbAll) {
          fbAll.innerHTML =
            "Total: <strong>" +
            ok +
            "</strong> / " +
            total +
            " (MCQ " +
            mcqScore +
            "/" +
            MCQ.length +
            ", phrasal " +
            phScore +
            "/" +
            PHRASAL.length +
            ").";
          fbAll.className = "fce-l4-feedback " + (ok === total ? "score-ok" : "score-partial");
        }
        if (global.MasteringB2Progress) {
          global.MasteringB2Progress.recordCheckFromDom(ok, total);
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        root.querySelectorAll('input[type="radio"]').forEach(function (r) {
          r.checked = false;
        });
        clearMcqMarks();
        if (fb) {
          fb.classList.remove("score-ok", "score-partial");
          fb.textContent = "";
        }
        PHRASAL.forEach(function (row) {
          var sel = document.getElementById("ph-" + row.n);
          if (sel) {
            sel.value = "";
            sel.classList.remove("is-ok", "is-bad");
          }
        });
        if (fbMatch) fbMatch.textContent = "";
        if (fbAll) fbAll.textContent = "";
      });
    }
  }

  global.UNIT3_WB3_LISTENING = {
    mount: mount,
    CORRECT: CORRECT,
    MCQ: MCQ,
    PHRASAL: PHRASAL,
    MEANINGS: MEANINGS,
  };
})(typeof window !== "undefined" ? window : this);
