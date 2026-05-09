/**
 * GEP-style evidence hunt for Unit 3 Track 3.2 (Changes at school).
 * Depends on: changes-at-school-evidence-data.js
 */
(function () {
  var LABS = window.U3_CHANGES_EVIDENCE_LABS;
  var OPT = window.U3_CHANGES_OPTION_TEXT;
  if (!LABS || !LABS.length) return;

  var host = document.getElementById("huntPassageHost");
  var elTask = document.getElementById("huntTaskTitle");
  var elCount = document.getElementById("huntCounter");
  var elToast = document.getElementById("huntToast");
  var elLabel = document.getElementById("huntSpeakerLabel");
  var elReveal = document.getElementById("huntRevealBody");
  var prog1 = document.getElementById("huntProg1");
  var prog2 = document.getElementById("huntProg2");
  var btnPrev = document.getElementById("huntPrev");
  var btnNext = document.getElementById("huntNext");
  var btnReset = document.getElementById("huntResetRound");
  if (!host || !elTask) return;

  var speakerIx = 0;
  var trainingStep = 1;
  var evidenceFound = {};
  var distractorFound = {};

  function optionText(letter) {
    return (OPT && OPT[letter]) || "";
  }

  function currentLab() {
    return LABS[speakerIx];
  }

  function evidenceIds() {
    return currentLab().evidenceIds;
  }

  function distractorKeys() {
    return currentLab().distractorKeys;
  }

  function showToast(msg, ms) {
    var t = ms != null ? ms : 2200;
    elToast.textContent = msg;
    elToast.classList.add("is-visible");
    setTimeout(function () {
      elToast.classList.remove("is-visible");
      elToast.textContent = "";
    }, t);
  }

  function wrapRedWithBadge(el, letter) {
    el.classList.add("is-red", "is-disabled-hit");
    var wrap = document.createElement("span");
    wrap.className = "trainer-distr-wrap";
    el.parentNode.insertBefore(wrap, el);
    wrap.appendChild(el);
    var badge = document.createElement("span");
    badge.className = "trainer-badge";
    var line1 = document.createElement("span");
    line1.className = "trainer-badge-line";
    line1.textContent = "[! " + letter + "]";
    badge.appendChild(line1);
    var rub = optionText(letter);
    if (rub) {
      var line2 = document.createElement("span");
      line2.className = "trainer-badge-option";
      line2.textContent = rub;
      badge.appendChild(line2);
      badge.setAttribute("title", rub);
    }
    wrap.appendChild(badge);
  }

  function renderPassage() {
    host.innerHTML = "";
    host.className = "hunt-passage clickable-passage";
    currentLab().segments.forEach(function (seg) {
      var span = document.createElement("span");
      span.textContent = seg.text;
      if (seg.kind === "plain") {
        span.className = "click-chunk--static";
      } else if (seg.kind === "evidence") {
        span.className = "click-chunk--target";
        span.setAttribute("data-kind", "evidence");
        span.setAttribute("data-id", seg.id);
      } else {
        span.className = "click-chunk--target";
        span.setAttribute("data-kind", "distractor");
        span.setAttribute("data-key", seg.key);
        var r = optionText(seg.key);
        if (r) {
          span.setAttribute("title", r);
          span.setAttribute("aria-label", "Distractor — неправильный вариант " + seg.key + ": " + r);
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
    return distractorKeys().every(function (k) {
      return distractorFound[k];
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
      elCount.textContent = "Найдено доказательств: " + n + " / 3";
    } else if (trainingStep === 2) {
      elTask.textContent = lab.distractorLine;
      var nd = distractorKeys().filter(function (k) {
        return distractorFound[k];
      }).length;
      elCount.textContent = "Дистракторов отмечено: " + nd + " / 2";
    } else {
      elTask.textContent =
        "Готово для Speaker " +
        lab.speaker +
        ". Перейди к следующему спикеру или сравни с выпадающими списками в задании выше.";
      elCount.textContent = "";
    }
    updateProgressSteps();
  }

  function onChunkClick(ev) {
    if (trainingStep >= 3) return;
    var el = ev.target.closest(".click-chunk--target");
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
        var key = el.getAttribute("data-key");
        if (distractorFound[key] || el.classList.contains("is-red")) return;
        distractorFound[key] = true;
        wrapRedWithBadge(el, key);
        updateTaskUi();
        if (allDistractorsDone()) {
          trainingStep = 3;
          updateTaskUi();
        }
      } else {
        showToast("Сейчас шаг 2: отмечай только фразы-дистракторы (соблазн выбрать неверную букву из списка A–H).", 2200);
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

  function goSpeaker(delta) {
    var n = speakerIx + delta;
    if (n < 0 || n >= LABS.length) return;
    speakerIx = n;
    if (elLabel) elLabel.textContent = "Speaker " + currentLab().speaker + " / 5";
    if (elReveal) {
      var L = currentLab();
      elReveal.innerHTML =
        "Ключ для этого спикера в задании сверху: <strong>" +
        L.correctLetter +
        "</strong> — «" +
        optionText(L.correctLetter) +
        "»";
    }
    if (btnPrev) btnPrev.disabled = speakerIx <= 0;
    if (btnNext) btnNext.disabled = speakerIx >= LABS.length - 1;
    resetRound();
  }

  host.addEventListener("click", onChunkClick);
  if (btnPrev) btnPrev.addEventListener("click", function () { goSpeaker(-1); });
  if (btnNext) btnNext.addEventListener("click", function () { goSpeaker(1); });
  if (btnReset) btnReset.addEventListener("click", resetRound);

  goSpeaker(0);
})();
