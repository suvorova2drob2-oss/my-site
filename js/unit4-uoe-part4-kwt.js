/** Unit 4 — Part 4 key word transformation (A Good Story) */
(function (W) {
  "use strict";

  var TASKS = [
    {
      first: "The teacher didn&rsquo;t think the joke was funny.",
      keyword: "AMUSED",
      before: "The teacher ",
      after: " the joke.",
      accept: [
        "was not amused by",
        "wasn't amused by",
        "was not amused at",
        "wasn't amused at",
      ],
      revealGap: "was not AMUSED by",
      fullSecond: "The teacher was not amused by the joke.",
    },
    {
      first:
        "Actually, in my opinion, this is the best all-in-one printer on the market.",
      keyword: "FAR",
      before: "Actually, ",
      after: " concerned, this is the best all-in-one printer on the market.",
      accept: [
        "as far as I'm",
        "as far as i'm",
        "as far as I am",
      ],
      revealGap: "as FAR as I'm",
      fullSecond:
        "Actually, as far as I'm concerned, this is the best all-in-one printer on the market.",
    },
    {
      first: "My mum spends so long in the shower!",
      keyword: "TAKES",
      before: "My mum ",
      after: " a shower.",
      accept: [
        "takes so long having",
        "takes ages having",
        "takes a long time having",
      ],
      revealGap: "TAKES so long having",
      fullSecond: "My mum takes so long having a shower.",
    },
    {
      first: "Last week was the first time I went to karaoke.",
      keyword: "NEVER",
      before: "Until last week, I ",
      after: " to karaoke.",
      accept: [
        "had never been",
        "had never gone",
      ],
      revealGap: "had NEVER been",
      fullSecond: "Until last week, I had never been to karaoke.",
    },
    {
      first: "That film was terrible &ndash; I can&rsquo;t recommend it!",
      keyword: "SUCH",
      before: "It was ",
      after: " I can&rsquo;t recommend it.",
      accept: [
        "such a terrible film that",
        "such a bad film that",
        "such an awful film that",
      ],
      revealGap: "SUCH a terrible film that",
      fullSecond:
        "It was such a terrible film that I can&rsquo;t recommend it.",
    },
    {
      first: "We got there late and missed the start of the show.",
      keyword: "IN",
      before: "We did ",
      after: " and missed the start of the show.",
      accept: [
        "not get there in time",
        "not arrive in time",
      ],
      revealGap: "not get there IN time",
      fullSecond:
        "We did not get there in time and missed the start of the show.",
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
      elFirst.innerHTML = t.first;
      if (elKey) elKey.textContent = t.keyword || "";
      elBefore.textContent = t.before;
      elAfter.innerHTML = t.after;
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
        elFull.innerHTML = t.fullSecond;
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

  W.U4_UOE_PART4_KWT = { mount: mount, TASKS: TASKS };
})(window);
