/**
 * Part 4 Track 10 — Evidence + distractor hunt (Stage 2). Mirrors Changes at school/changes-at-school-evidence-hunt.js.
 */
(function () {
  var LABS = window.U_P4_HUNT_LABS;
  var OPT = window.U_P4_OPTION_BY_TASK;
  if (!LABS || !LABS.length) return;

  var host = document.getElementById("p4-huntPassage");
  var elTask = document.getElementById("p4-huntTask");
  var elCount = document.getElementById("p4-huntCounter");
  var elToast = document.getElementById("p4-huntToast");
  var elLabel = document.getElementById("p4-huntSpeakerLabel");
  var prog1 = document.getElementById("p4-huntProg1");
  var prog2 = document.getElementById("p4-huntProg2");
  var btnReset = document.getElementById("p4-huntReset");
  var btnPrev = document.getElementById("p4-huntPrev");
  var btnNext = document.getElementById("p4-huntNext");
  if (!host || !elTask) return;

  var speakerIx = 0;
  var trainingStep = 1;
  var evidenceFound = {};
  var distractorFound = {};

  function clickSpeakerTab(oneBasedSpk) {
    var tab = document.querySelector('.speaker-tabs [role="tab"][data-spk="' + String(oneBasedSpk) + '"]');
    if (tab) tab.click();
  }

  function syncNavButtons() {
    if (btnPrev) btnPrev.disabled = speakerIx <= 0;
    if (btnNext) btnNext.disabled = speakerIx >= LABS.length - 1;
  }

  function goPrevSpeaker() {
    if (speakerIx <= 0) return;
    clickSpeakerTab(speakerIx);
  }

  function goNextSpeaker() {
    if (speakerIx >= LABS.length - 1) return;
    clickSpeakerTab(speakerIx + 2);
  }

  function optionText(letter, taskNum) {
    var m = OPT && OPT[taskNum];
    return (m && m[letter]) || "";
  }

  function currentLab() {
    return LABS[speakerIx];
  }

  function evidenceIds() {
    return currentLab().evidenceIds;
  }

  function distractorIds() {
    return currentLab().distractorIds;
  }

  function showToast(msg, ms) {
    if (!elToast) return;
    var t = ms != null ? ms : 2200;
    elToast.textContent = msg;
    elToast.classList.add("is-visible");
    setTimeout(function () {
      elToast.classList.remove("is-visible");
      elToast.textContent = "";
    }, t);
  }

  function wrapRedWithBadge(el, letter, taskNum) {
    el.classList.add("is-red", "is-disabled-hit");
    var wrap = document.createElement("span");
    wrap.className = "p4-trainer-distr-wrap";
    el.parentNode.insertBefore(wrap, el);
    wrap.appendChild(el);
    var badge = document.createElement("span");
    badge.className = "p4-trainer-badge";
    var line1 = document.createElement("span");
    line1.className = "p4-trainer-badge-line";
    line1.textContent = "[! " + letter + " · Task " + taskNum + "]";
    badge.appendChild(line1);
    var rub = optionText(letter, taskNum);
    if (rub) {
      var line2 = document.createElement("span");
      line2.className = "p4-trainer-badge-option";
      line2.textContent = rub;
      badge.appendChild(line2);
      badge.setAttribute("title", rub);
    }
    wrap.appendChild(badge);
  }

  function renderPassage() {
    host.innerHTML = "";
    host.className = "p4-hunt-passage p4-clickable-passage";
    currentLab().segments.forEach(function (seg) {
      var span = document.createElement("span");
      span.textContent = seg.text;
      if (seg.kind === "plain") {
        span.className = "p4-click-chunk--static";
      } else if (seg.kind === "evidence") {
        span.className = "p4-click-chunk--target";
        span.setAttribute("data-kind", "evidence");
        span.setAttribute("data-id", seg.id);
      } else {
        span.className = "p4-click-chunk--target";
        span.setAttribute("data-kind", "distractor");
        span.setAttribute("data-dist-id", seg.id);
        span.setAttribute("data-key", seg.key);
        span.setAttribute("data-task", String(seg.task));
        var r = optionText(seg.key, seg.task);
        if (r) {
          span.setAttribute("title", r);
          span.setAttribute("aria-label", "Distractor — " + seg.key + " (Task " + seg.task + "): " + r);
        }
      }
      host.appendChild(span);
    });
  }

  function allEvidenceDone() {
    return evidenceIds().every(function (id) {
      return evidenceFound[id];
    });
  }

  function allDistractorsDone() {
    return distractorIds().every(function (id) {
      return distractorFound[id];
    });
  }

  function updateProgressSteps() {
    if (prog1) {
      prog1.classList.remove("is-current", "is-done");
      if (trainingStep === 1) prog1.classList.add("is-current");
      else prog1.classList.add("is-done");
    }
    if (prog2) {
      prog2.classList.remove("is-current", "is-done");
      if (trainingStep === 2) prog2.classList.add("is-current");
      else if (trainingStep >= 3) prog2.classList.add("is-done");
    }
  }

  function updateTaskUi() {
    var lab = currentLab();
    if (trainingStep === 1) {
      elTask.textContent = lab.evidenceLine;
      var n = evidenceIds().filter(function (id) {
        return evidenceFound[id];
      }).length;
      if (elCount) elCount.textContent = "Evidence found: " + n + " / " + evidenceIds().length;
    } else if (trainingStep === 2) {
      elTask.textContent = lab.distractorLine;
      var nd = distractorIds().filter(function (id) {
        return distractorFound[id];
      }).length;
      if (elCount) elCount.textContent = "Distractors marked: " + nd + " / " + distractorIds().length;
    } else {
      elTask.textContent =
        "Done for Speaker " +
        lab.speaker +
        ". Switch speaker tab above or reset to practise again.";
      if (elCount) elCount.textContent = "";
    }
    updateProgressSteps();
  }

  function onChunkClick(ev) {
    if (trainingStep >= 3) return;
    var el = ev.target.closest(".p4-click-chunk--target");
    if (!el || !host.contains(el)) return;
    var kind = el.getAttribute("data-kind");
    if (!kind) return;

    if (trainingStep === 1) {
      if (kind === "evidence") {
        var eid = el.getAttribute("data-id");
        if (evidenceFound[eid] || el.classList.contains("is-green")) return;
        el.classList.add("is-green", "is-disabled-hit");
        evidenceFound[eid] = true;
        updateTaskUi();
        if (allEvidenceDone()) {
          trainingStep = 2;
          updateTaskUi();
        }
      } else {
        showToast(currentLab().wrongEvidenceToast, 2400);
      }
      return;
    }

    if (trainingStep === 2) {
      if (kind === "distractor") {
        var did = el.getAttribute("data-dist-id");
        var key = el.getAttribute("data-key");
        var taskN = Number(el.getAttribute("data-task"));
        if (distractorFound[did] || el.classList.contains("is-red")) return;
        distractorFound[did] = true;
        wrapRedWithBadge(el, key, taskN);
        updateTaskUi();
        if (allDistractorsDone()) {
          trainingStep = 3;
          updateTaskUi();
        }
      } else {
        showToast("Step 2: mark only the red distractor phrases (wrong A\u2013H temptation).", 2200);
      }
    }
  }

  function resetRound() {
    trainingStep = 1;
    evidenceFound = {};
    distractorFound = {};
    renderPassage();
    updateTaskUi();
  }

  function setSpeakerIndex(ix) {
    ix = Number(ix);
    if (isNaN(ix) || ix < 0 || ix >= LABS.length) return;
    speakerIx = ix;
    if (elLabel) elLabel.textContent = "Speaker " + currentLab().speaker + " / 5";
    resetRound();
    syncNavButtons();
  }

  window.__p4HuntSetSpeaker = function (speakerNum) {
    setSpeakerIndex(Number(speakerNum) - 1);
  };
  window.__p4HuntGoPrevSpeaker = goPrevSpeaker;

  host.addEventListener("click", onChunkClick);
  if (btnReset) btnReset.addEventListener("click", resetRound);
  if (btnPrev) btnPrev.addEventListener("click", goPrevSpeaker);
  if (btnNext) btnNext.addEventListener("click", goNextSpeaker);

  setSpeakerIndex(0);
})();
