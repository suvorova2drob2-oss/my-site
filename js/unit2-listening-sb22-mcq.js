(function (global) {
  "use strict";

  var CORRECT = ["A", "B", "B", "C", "C", "B", "A"];

  var MCQ = [
    {
      stem: "When Mike saw a chess boxing match, he was surprised by",
      opts: {
        A: "how skilled the competitors were at both parts of the sport.",
        B: "how much fun the competitors were having.",
        C: "how aggressive the competitors were."
      },
      example: true,
      exampleNote:
        "Sounds like just a bit of fun, but when I watched two men competing on German television recently, " +
        "<strong>I was amazed by their level of skill in each of these two very different disciplines</strong>. " +
        "After all, <strong>boxing is such an aggressive, physical sport</strong>, whereas chess is all about using the brain."
    },
    {
      stem: "Having read about octopushing, Mike finds it difficult to believe that",
      opts: {
        A: "players do not have to hold their breath for long intervals.",
        B: "a high level of fitness is not required to play it.",
        C: "it is an exciting sport to watch."
      }
    },
    {
      stem: "What impresses Mike most about the competitors in sport stacking?",
      opts: {
        A: "their fitness",
        B: "their speed",
        C: "their age"
      }
    },
    {
      stem: "What is Mike&rsquo;s criticism of some of the unusual sports?",
      opts: {
        A: "They are far too dangerous.",
        B: "They should not be called sports.",
        C: "They are difficult to take seriously."
      }
    },
    {
      stem: "What do we learn about the organisers of toe wrestling?",
      opts: {
        A: "They apply what they learn from international competitions.",
        B: "They have arranged a number of events in schools.",
        C: "They made a request which was rejected."
      }
    },
    {
      stem: "How does Mike feel about the human triumphs in the Man Versus Horse Marathon?",
      opts: {
        A: "They are very surprising.",
        B: "They deserve more recognition.",
        C: "They are unlikely to be repeated."
      }
    },
    {
      stem: "Why did Mike give up running?",
      opts: {
        A: "He was injured.",
        B: "He lost interest.",
        C: "He had no time."
      }
    }
  ];

  function mount(options) {
    options = options || {};
    var root = document.getElementById(options.rootId || "mcq-root");
    var fb = document.getElementById(options.feedbackId || "feedback");
    if (!root) return;

    function render() {
      root.innerHTML = "";
      MCQ.forEach(function (item, idx) {
        var n = idx + 1;
        var box = document.createElement("section");
        box.className = "q";
        var stemHtml =
          "<p class=\"stem\"><strong>" +
          n +
          ".</strong> " +
          item.stem +
          (item.example ? " <span style=\"color:#fde68a;font-size:0.88em;\">(Example)</span>" : "") +
          "</p>";
        box.innerHTML = stemHtml;

        var list = document.createElement("ul");
        list.className = "opts";
        ["A", "B", "C"].forEach(function (letter) {
          var li = document.createElement("li");
          li.className = "opt-line";
          li.setAttribute("data-q", String(idx));
          li.setAttribute("data-k", letter);
          var id = "q" + n + letter;
          li.innerHTML =
            "<input type=\"radio\" name=\"q" +
            n +
            "\" id=\"" +
            id +
            "\" value=\"" +
            letter +
            "\">" +
            "<span class=\"letter\">" +
            letter +
            "</span>" +
            "<label for=\"" +
            id +
            "\">" +
            item.opts[letter] +
            "</label>";
          list.appendChild(li);
        });
        box.appendChild(list);

        if (item.example && item.exampleNote) {
          var ex = document.createElement("div");
          ex.className = "fce-l4-example";
          ex.innerHTML = item.exampleNote;
          box.appendChild(ex);
          var exInput = box.querySelector('input[value="A"]');
          if (exInput) exInput.checked = true;
        }

        root.appendChild(box);
      });

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
      var el = root.querySelector('input[name="q' + (i + 1) + '"]:checked');
      return el ? el.value : "";
    }

    function onCheck() {
      clearMarks();
      var missing = false;
      for (var i = 0; i < MCQ.length; i++) {
        if (!getChoice(i)) missing = true;
      }
      if (missing) {
        if (fb) fb.textContent = "Choose A, B or C for every question, then check again.";
        return;
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

      if (global.MasteringB2Progress) {
        global.MasteringB2Progress.recordCheckFromDom(score, MCQ.length);
      }
    }

    function onReset() {
      root.querySelectorAll('input[type="radio"]').forEach(function (r) {
        r.checked = false;
      });
      var exA = root.querySelector('input[name="q1"][value="A"]');
      if (exA) exA.checked = true;
      clearMarks();
      if (fb) {
        fb.classList.remove("score-ok", "score-partial");
        fb.textContent = "";
      }
    }

    render();

    var checkBtn = document.getElementById(options.checkId || "btn-check");
    var resetBtn = document.getElementById(options.resetId || "btn-reset");
    if (checkBtn) checkBtn.addEventListener("click", onCheck);
    if (resetBtn) resetBtn.addEventListener("click", onReset);
  }

  global.UNIT2_SB22_MCQ = {
    mount: mount,
    CORRECT: CORRECT,
    MCQ: MCQ
  };
})(typeof window !== "undefined" ? window : this);
