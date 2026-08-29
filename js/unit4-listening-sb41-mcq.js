/** Unit 4 Listening — SB Track 4.1 · Part 1 MCQ */
(function (global) {
  "use strict";

  var CORRECT = ["C", "A", "B", "C", "B", "A", "B", "B"];
  var MCQ = [
    {
      lead: "You hear a man talking to a friend about a TV series he is watching. The man is impressed with",
      options: { A: "the soundtrack.", B: "the acting.", C: "the plot." },
    },
    {
      lead: "You hear a woman reviewing a book on the radio. What type of book is it?",
      options: { A: "an autobiography", B: "a historical novel", C: "a travel guide" },
    },
    {
      lead: "You hear two friends talking about a film they have just seen. What did they both find disappointing about it?",
      options: {
        A: "It wasn't as enjoyable as the first film in the series.",
        B: "The pace of the film was too slow at one point.",
        C: "The comedy scenes were not very funny.",
      },
    },
    {
      lead: "You hear a man telling a woman about a storytelling course he attended. What does he say about the course?",
      options: {
        A: "It was better than he had expected.",
        B: "It will be useful for his work.",
        C: "It helped to build his confidence.",
      },
    },
    {
      lead: "You overhear a woman calling a bookshop. Why is she calling?",
      options: { A: "to make a complaint", B: "to make a suggestion", C: "to apologise" },
    },
    {
      lead: "You hear a man talking to a friend about a story writing competition he won. What did he feel nervous about?",
      options: {
        A: "being interviewed about his success",
        B: "reading out his story on live radio",
        C: "receiving his prize from a famous person",
      },
    },
    {
      lead: "You hear two friends talking about an actor in a play they have just seen. What do they agree about him?",
      options: {
        A: "He looked too young for the part.",
        B: "He did not always speak clearly.",
        C: "He moved around unnaturally.",
      },
    },
    {
      lead: "You hear part of a talk by a writer. What is she doing?",
      options: {
        A: "encouraging the audience to read to their children",
        B: "explaining the importance of a past event",
        C: "promoting a new book she has written",
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

  function mount() {
    var root = document.getElementById("mcq-root");
    var fb = document.getElementById("feedback");
    if (!root) return;
    var nq = MCQ.length;

    root.innerHTML = MCQ.map(function (item, qIdx) {
      var opts = ["A", "B", "C"]
        .map(function (k) {
          var id = "q" + qIdx + k;
          return (
            '<li class="opt-line" data-q="' +
            qIdx +
            '" data-k="' +
            k +
            '"><input type="radio" name="q' +
            qIdx +
            '" value="' +
            k +
            '" id="' +
            id +
            '" /><label for="' +
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
        '<article class="q"><p class="stem"><strong>' +
        (qIdx + 1) +
        ".</strong> " +
        esc(item.lead) +
        '</p><ul class="opts">' +
        opts +
        "</ul></article>"
      );
    }).join("");

    function clearMarks() {
      root.querySelectorAll(".opt-line").forEach(function (line) {
        line.classList.remove("ok", "bad-pick");
      });
    }

    function getChoice(i) {
      var el = root.querySelector('input[name="q' + i + '"]:checked');
      return el ? el.value : "";
    }

    document.getElementById("btn-check").addEventListener("click", function () {
      clearMarks();
      for (var i = 0; i < nq; i++) {
        if (!getChoice(i)) {
          fb.textContent = "Choose A, B or C for every question, then check again.";
          return;
        }
      }
      var score = 0;
      for (var j = 0; j < nq; j++) {
        var pick = getChoice(j);
        var keyLetter = CORRECT[j];
        var ok = pick === keyLetter;
        if (ok) score++;
        var line = root.querySelector('.opt-line[data-q="' + j + '"][data-k="' + pick + '"]');
        if (line) line.classList.add(ok ? "ok" : "bad-pick");
        var correctLine = root.querySelector('.opt-line[data-q="' + j + '"][data-k="' + keyLetter + '"]');
        if (correctLine && !ok) correctLine.classList.add("ok");
      }
      fb.innerHTML =
        score === nq
          ? "<strong>All " + nq + " correct.</strong>"
          : "Score: <strong>" + score + "</strong> / " + nq + ".";
      if (global.MasteringB2Progress) global.MasteringB2Progress.recordCheckFromDom(score, nq);
    });

    document.getElementById("btn-reset").addEventListener("click", function () {
      root.querySelectorAll('input[type="radio"]').forEach(function (r) {
        r.checked = false;
      });
      clearMarks();
      fb.textContent = "";
    });
  }

  global.U4_LISTENING_SB41 = { mount: mount };
})(window);
