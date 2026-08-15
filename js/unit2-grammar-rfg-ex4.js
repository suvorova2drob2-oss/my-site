/** Unit 2 Grammar — Ready for Grammar Ex. 4 key word transformation (6 items) */
(function (W) {
  "use strict";

  var TASKS = [
    {
      first: "It's impossible for me not to laugh when he starts singing.",
      keyword: "HELP",
      before: "I can't ",
      after: " when he starts singing.",
      accept: ["help laughing"],
      revealGap: "help laughing",
      fullSecond: "I can't help laughing when he starts singing.",
    },
    {
      first: "I really don't want to go out this evening.",
      keyword: "FEEL",
      before: "I really don't ",
      after: " out this evening.",
      accept: ["feel like going"],
      revealGap: "feel like going",
      fullSecond: "I really don't feel like going out this evening.",
    },
    {
      first:
        "Amy played much better than her opponent, so it was unfair that she lost the match.",
      keyword: "DESERVE",
      before: "Amy ",
      after: " the match, because she played much better than her opponent.",
      accept: ["didn't deserve to lose", "did not deserve to lose"],
      revealGap: "didn't deserve to lose",
      fullSecond:
        "Amy didn't deserve to lose the match, because she played much better than her opponent.",
    },
    {
      first:
        "Rock stars often wear dark glasses so that people don't recognise them.",
      keyword: "PREVENT",
      before: "Rock stars often wear dark glasses ",
      after: " them.",
      accept: [
        "to prevent people recognising",
        "to prevent people from recognising",
      ],
      revealGap: "to prevent people (from) recognising",
      fullSecond:
        "Rock stars often wear dark glasses to prevent people (from) recognising them.",
    },
    {
      first: "It's obvious he shot himself in the foot by accident.",
      keyword: "MEAN",
      before: "He obviously ",
      after: " himself in the foot.",
      accept: ["didn't mean to shoot", "did not mean to shoot"],
      revealGap: "didn't mean to shoot",
      fullSecond: "He obviously didn't mean to shoot himself in the foot.",
    },
    {
      first: "I hate it when I'm ill.",
      keyword: "STAND",
      before: "I ",
      after: " ill.",
      accept: ["can't stand being", "cannot stand being"],
      revealGap: "can't stand being",
      fullSecond: "I can't stand being ill.",
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
    var showKeyword = cfg.showKeyword !== false;
    var idx = 0;
    var checkedThisRound = false;
    var correctCount = 0;

    var elStep = document.getElementById("elStep");
    var elTotal = document.getElementById("elTotal");
    var elNum = document.getElementById("elNum");
    var elFirst = document.getElementById("elFirst");
    var elKeyRow = document.getElementById("elKeyRow");
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
      elStep.textContent = String(idx + 1);
      elNum.textContent = idx + 1 + ".";
      elFirst.textContent = t.first;
      if (elKeyRow) {
        elKeyRow.hidden = !showKeyword || !t.keyword;
      }
      if (elKey) elKey.textContent = t.keyword || "";
      elBefore.textContent = t.before;
      elAfter.textContent = t.after;
      elInput.value = "";
      elInput.classList.remove("ok", "bad");
      elInput.disabled = false;
      elInput.placeholder = cfg.placeholder || "2\u20135 words";
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

  W.U2_GR_RFG_EX4 = { mount: mount, TASKS: TASKS };
})(window);
