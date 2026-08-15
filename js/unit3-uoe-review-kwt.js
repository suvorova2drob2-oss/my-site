/** Unit 3 — Review Part 4 key word transformation (comparisons) */
(function (W) {
  "use strict";

  var TASKS = [
    {
      first:
        "The new version of this phone isn't nearly as big as I thought it would be.",
      keyword: "MUCH",
      before: "The new version of this phone ",
      after: " I thought it would be.",
      accept: ["is much smaller than"],
      revealGap: "is MUCH smaller than",
      fullSecond:
        "The new version of this phone is much smaller than I thought it would be.",
    },
    {
      first: "This is easily the most boring game I've downloaded recently.",
      keyword: "ENJOYABLE",
      before: "This is by ",
      after: " game I've downloaded recently.",
      accept: ["far the least enjoyable"],
      revealGap: "far the least ENJOYABLE",
      fullSecond:
        "This is by far the least enjoyable game I've downloaded recently.",
    },
    {
      first: "There are fewer teachers in my school than there were last year.",
      keyword: "NOT",
      before: "There ",
      after: " teachers in my school as there were last year.",
      accept: [
        "are not as many",
        "are not so many",
        "aren't as many",
        "aren't so many",
      ],
      revealGap: "are NOT as/so many",
      fullSecond:
        "There are not as many teachers in my school as there were last year.",
    },
    {
      first: "If you work harder now, you won't have to do so much later.",
      keyword: "THE",
      before: "The harder ",
      after: " you'll have to do later.",
      accept: ["you work now, the less", "you work now the less"],
      revealGap: "you work now, THE less",
      fullSecond:
        "The harder you work now, the less you'll have to do later.",
    },
    {
      first: "Lucy is as tall as her mother.",
      keyword: "HEIGHT",
      before: "Lucy ",
      after: " her mother.",
      accept: [
        "is the same height as",
        "'s the same height as",
        "is the same height as",
      ],
      revealGap: "is the same HEIGHT as",
      fullSecond: "Lucy is the same height as her mother.",
    },
    {
      first:
        "Technology has had a bigger effect on our lives than we could ever have imagined.",
      keyword: "MORE",
      before: "Technology has ",
      after: " a difference to our lives than we could ever have imagined.",
      accept: ["made more of"],
      revealGap: "made MORE of",
      fullSecond:
        "Technology has made more of a difference to our lives than we could ever have imagined.",
    },
  ];

  function normalizeAnswer(v) {
    return String(v || "")
      .trim()
      .toLowerCase()
      .replace(/[\u2018\u2019\u201B\u2032]/g, "'")
      .replace(/\s+/g, " ");
  }

  function mount(cfg) {
    cfg = cfg || {};
    var tasks = cfg.tasks || TASKS;
    var idx = 0;
    var checkedThisRound = false;
    var correctCount = 0;

    var elStep = document.getElementById("elStep");
    var elTotal = document.getElementById("elTotal");
    var elNum = document.getElementById("elNum");
    var elFirst = document.getElementById("elFirst");
    var elKey = document.getElementById("elKey");
    var elBefore = document.getElementById("elBefore");
    var elAfter = document.getElementById("elAfter");
    var elInput = document.getElementById("elInput");
    var elOk = document.getElementById("elOk");
    var elKeyBox = document.getElementById("elKeyBox");
    var elKeyText = document.getElementById("elKeyText");
    var elFull = document.getElementById("elFull");
    var btnCheck = document.getElementById("btnCheck");
    var btnNext = document.getElementById("btnNext");
    var elDone = document.getElementById("elDone");

    if (!elInput || !btnCheck) return;
    if (elTotal) elTotal.textContent = String(tasks.length);

    function renderTask() {
      checkedThisRound = false;
      var t = tasks[idx];
      if (elStep) elStep.textContent = String(idx + 1);
      elNum.textContent = idx + 1 + ".";
      elFirst.textContent = t.first;
      if (elKey) elKey.textContent = t.keyword || "";
      elBefore.textContent = t.before;
      elAfter.textContent = t.after;
      elInput.value = "";
      elInput.classList.remove("ok", "bad");
      elInput.disabled = false;
      elOk.classList.remove("show");
      elKeyBox.classList.remove("show");
      btnNext.classList.remove("show");
      btnCheck.disabled = false;
      elInput.focus();
    }

    function isAccepted(t, norm) {
      if (!norm) return false;
      var list = t.accept || [];
      for (var i = 0; i < list.length; i++) {
        if (norm === normalizeAnswer(list[i])) return true;
      }
      return false;
    }

    btnCheck.addEventListener("click", function () {
      if (checkedThisRound) return;
      var t = tasks[idx];
      var norm = normalizeAnswer(elInput.value);
      if (!norm) {
        elInput.focus();
        return;
      }
      checkedThisRound = true;
      var good = isAccepted(t, norm);
      elInput.classList.toggle("ok", good);
      elInput.classList.toggle("bad", !good);
      elInput.disabled = true;
      btnCheck.disabled = true;

      if (good) {
        correctCount++;
        elOk.classList.add("show");
        elKeyBox.classList.remove("show");
      } else {
        elOk.classList.remove("show");
        elKeyText.textContent = t.revealGap;
        elFull.textContent = t.fullSecond;
        elKeyBox.classList.add("show");
      }

      if (idx < tasks.length - 1) {
        btnNext.classList.add("show");
      } else {
        elDone.classList.add("show");
        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(correctCount, tasks.length);
        }
      }
    });

    btnNext.addEventListener("click", function () {
      idx++;
      renderTask();
    });

    elInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !btnCheck.disabled) btnCheck.click();
    });

    renderTask();
  }

  W.U3_UOE_REVIEW_KWT = { mount: mount, TASKS: TASKS };
})(window);
