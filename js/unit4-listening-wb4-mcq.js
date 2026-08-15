/** Unit 4 Listening — Workbook Track 4 · Part 1 MCQ (1–8) */
(function (global) {
  "use strict";

  var CORRECT = ["C", "B", "B", "B", "C", "B", "B", "A"];

  var MCQ = [
    {
      lead: "You hear a woman talking about telling jokes. What does she say is her problem?",
      options: {
        A: "She cannot remember jokes.",
        B: "She does not hear or read many jokes.",
        C: "She cannot make people laugh.",
      },
    },
    {
      lead: "You hear a man talking about writing books. What is he proud of?",
      options: {
        A: "He started writing at a young age.",
        B: "He has adapted to writing on a computer.",
        C: "He has published two books.",
      },
    },
    {
      lead: "You hear two people talking about children&rsquo;s books. Where are they?",
      options: {
        A: "in a bookshop",
        B: "at school",
        C: "at home",
      },
    },
    {
      lead: "You hear two people talking about a new drama series. How does the man feel about it?",
      options: {
        A: "disappointed",
        B: "impressed",
        C: "confused",
      },
    },
    {
      lead: "You hear a voicemail message about a new job. What is the speaker doing?",
      options: {
        A: "making a recommendation",
        B: "making an offer",
        C: "making a request",
      },
    },
    {
      lead: "You hear a woman talking about a lie she told. Why did she tell the lie?",
      options: {
        A: "Her mum did not like her friends.",
        B: "She was bored with swimming.",
        C: "She needed the money.",
      },
    },
    {
      lead: "You hear two people talking about a writing competition. Why is the man concerned?",
      options: {
        A: "He wrote about the wrong topic.",
        B: "He wrote his entry too quickly.",
        C: "He sent his entry in too late.",
      },
    },
    {
      lead: "You hear a voicemail message. What is the woman complaining about?",
      options: {
        A: "a replaced actor",
        B: "missing tickets",
        C: "inadequate booking arrangements",
      },
    },
  ];

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
    var fb = document.getElementById(cfg.feedbackId || "feedback");
    if (!root) return;

    var nq = MCQ.length;

    function render() {
      root.innerHTML = MCQ.map(function (item, qIdx) {
        var keys = ["A", "B", "C"];
        var opts = keys
          .map(function (k) {
            var id = "q" + qIdx + k;
            return (
              '<li class="opt-line" data-q="' +
              qIdx +
              '" data-k="' +
              k +
              '">' +
              '<input type="radio" name="q' +
              qIdx +
              '" value="' +
              k +
              '" id="' +
              id +
              '" />' +
              '<label for="' +
              id +
              '"><span class="letter">' +
              k +
              "</span> " +
              esc(item.options[k]) +
              "</label></li>"
            );
          })
          .join("");
        return (
          '<article class="q">' +
          '<p class="stem"><strong>' +
          String(qIdx + 1) +
          ".</strong> " +
          esc(item.lead) +
          "</p>" +
          '<ul class="opts">' +
          opts +
          "</ul></article>"
        );
      }).join("");

      root.querySelectorAll('input[type="radio"]').forEach(function (radio) {
        radio.addEventListener("change", function () {
          clearMarks();
          if (fb) fb.textContent = "";
        });
      });
    }

    function clearMarks() {
      root.querySelectorAll(".opt-line").forEach(function (line) {
        line.classList.remove("ok", "bad-pick");
      });
    }

    function getChoice(i) {
      var el = root.querySelector('input[name="q' + i + '"]:checked');
      return el ? el.value : "";
    }

    render();

    var btnCheck = document.getElementById(cfg.checkId || "btn-check");
    var btnReset = document.getElementById(cfg.resetId || "btn-reset");

    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        clearMarks();
        for (var i = 0; i < nq; i++) {
          if (!getChoice(i)) {
            if (fb) {
              fb.textContent =
                "Choose A, B or C for every question, then check again.";
            }
            return;
          }
        }

        var score = 0;
        for (var j = 0; j < nq; j++) {
          var pick = getChoice(j);
          var keyLetter = CORRECT[j];
          var ok = pick === keyLetter;
          if (ok) score++;
          var line = root.querySelector(
            '.opt-line[data-q="' + j + '"][data-k="' + pick + '"]'
          );
          if (line) line.classList.add(ok ? "ok" : "bad-pick");
          var correctLine = root.querySelector(
            '.opt-line[data-q="' + j + '"][data-k="' + keyLetter + '"]'
          );
          if (correctLine && !ok) correctLine.classList.add("ok");
        }

        if (fb) {
          fb.innerHTML =
            score === nq
              ? "<strong>All " + nq + " correct.</strong>"
              : "Score: <strong>" +
                score +
                "</strong> / " +
                nq +
                ". Green = correct; red outline = your wrong pick.";
        }

        if (global.MasteringB2Progress) {
          global.MasteringB2Progress.recordCheckFromDom(score, nq);
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        root.querySelectorAll('input[type="radio"]').forEach(function (r) {
          r.checked = false;
        });
        clearMarks();
        if (fb) fb.textContent = "";
      });
    }
  }

  global.U4_LISTENING_WB4 = { mount: mount, CORRECT: CORRECT, MCQ: MCQ };
})(window);
