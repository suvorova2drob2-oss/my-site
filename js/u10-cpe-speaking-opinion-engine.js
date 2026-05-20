(function (W, D) {
  "use strict";

  var data = W.U10_CPE_SPEAKING_OPINION_DATA;
  if (!data) return;

  var WORDS = data.words;
  var EX1 = data.ex1;
  var PHRASES = data.phrases;
  var INFORMAL = data.informal;
  var INFORMAL_CORRECT = data.informalCorrect;

  var ex1List = D.getElementById("ex1List");
  var ex1Fb = D.getElementById("ex1Fb");
  var wordBank = D.getElementById("wordBank");
  var sortFb = D.getElementById("sortFb");
  var infGrid = D.getElementById("infGrid");
  var infFb = D.getElementById("infFb");

  var placements = {};

  WORDS.forEach(function (w) {
    var sp = D.createElement("span");
    sp.className = "wb-chip";
    sp.textContent = w;
    wordBank.appendChild(sp);
  });

  function renderEx1() {
    ex1List.innerHTML = "";
    EX1.forEach(function (item, i) {
      var li = D.createElement("li");
      li.className = "line-item";
      var key = D.createElement("div");
      key.className = "line-key";
      key.textContent = item.key;
      var txt = D.createElement("div");
      txt.className = "line-text";

      if (item.pre) {
        var pre = D.createElement("span");
        pre.textContent = item.pre;
        txt.appendChild(pre);
      }
      var sel = D.createElement("select");
      sel.className = "blank";
      sel.dataset.idx = String(i);
      var empty = D.createElement("option");
      empty.value = "";
      empty.textContent = "choose";
      sel.appendChild(empty);
      WORDS.forEach(function (w) {
        var o = D.createElement("option");
        o.value = w;
        o.textContent = w;
        sel.appendChild(o);
      });
      txt.appendChild(sel);
      if (item.post) {
        var post = D.createElement("span");
        post.textContent = item.post;
        txt.appendChild(post);
      }
      li.appendChild(key);
      li.appendChild(txt);
      ex1List.appendChild(li);
    });
  }

  function resetEx1() {
    ex1List.querySelectorAll("select").forEach(function (s) {
      s.value = "";
      s.style.borderColor = "";
    });
    ex1Fb.textContent = "";
  }

  D.getElementById("ex1Check").addEventListener("click", function () {
    var score = 0;
    var missing = 0;
    ex1List.querySelectorAll("select").forEach(function (sel) {
      var idx = Number(sel.dataset.idx);
      var ok = sel.value === EX1[idx].ans;
      if (!sel.value) missing++;
      if (ok) {
        score++;
        sel.style.borderColor = "rgba(76, 209, 167, 0.9)";
      } else {
        sel.style.borderColor = "rgba(248, 138, 149, 0.9)";
      }
    });
    if (missing) {
      ex1Fb.textContent = "Score " + score + "/8. Some blanks are still empty.";
      return;
    }
    ex1Fb.textContent = score === 8 ? "Perfect. All 8 phrases are correct." : "Score " + score + "/8. Correct the highlighted blanks.";
  });
  D.getElementById("ex1Clear").addEventListener("click", resetEx1);
  renderEx1();

  function initSort() {
    PHRASES.forEach(function (p) {
      placements[p.id] = "bank";
    });
  }

  function renderZone(zoneId) {
    var box = D.getElementById("zone-" + zoneId);
    box.innerHTML = "";
    PHRASES.forEach(function (p) {
      if (placements[p.id] !== zoneId) return;
      var b = D.createElement("button");
      b.type = "button";
      b.className = "phrase-chip";
      b.dataset.id = p.id;
      b.draggable = true;
      b.textContent = p.text;
      if (p.extra) {
        var tag = D.createElement("span");
        tag.className = "chip-new";
        tag.textContent = "new";
        b.appendChild(tag);
      }
      b.addEventListener("dragstart", function (e) {
        if (e.dataTransfer) {
          e.dataTransfer.setData("text/plain", p.id);
          e.dataTransfer.effectAllowed = "move";
        }
        b.classList.add("dragging");
      });
      b.addEventListener("dragend", function () {
        b.classList.remove("dragging");
      });
      box.appendChild(b);
    });
  }

  function clearSortMarks() {
    D.querySelectorAll(".phrase-chip.bad").forEach(function (el) {
      el.classList.remove("bad");
    });
  }

  function renderSort() {
    clearSortMarks();
    renderZone("bank");
    renderZone("express");
    renderZone("rephrase");
    renderZone("change");
  }

  function checkSort() {
    clearSortMarks();
    var correct = 0;
    var missing = 0;
    var wrong = 0;
    PHRASES.forEach(function (p) {
      var got = placements[p.id];
      if (got === "bank") {
        missing++;
        wrong++;
      } else if (got !== p.cat) {
        wrong++;
      } else {
        correct++;
      }
    });
    if (wrong) {
      PHRASES.forEach(function (p) {
        var got = placements[p.id];
        if (got === p.cat) return;
        var bad = D.querySelector('.phrase-chip[data-id="' + p.id + '"]');
        if (bad) bad.classList.add("bad");
      });
      sortFb.textContent =
        "Not complete yet: " + correct + "/12 correct. Missing in bank: " + missing + ". Wrongly placed: " + (wrong - missing) + ".";
    } else {
      sortFb.textContent = "Great work. All 12 phrases are in the right categories.";
    }
  }

  D.getElementById("sortCheck").addEventListener("click", checkSort);
  D.getElementById("sortReset").addEventListener("click", function () {
    initSort();
    renderSort();
    sortFb.textContent = "";
  });

  ["bank", "express", "rephrase", "change"].forEach(function (zoneId) {
    var zone = D.getElementById("zone-" + zoneId);
    if (!zone) return;
    zone.addEventListener("dragover", function (e) {
      e.preventDefault();
      if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
      zone.classList.add("is-over");
    });
    zone.addEventListener("dragleave", function () {
      zone.classList.remove("is-over");
    });
    zone.addEventListener("drop", function (e) {
      e.preventDefault();
      zone.classList.remove("is-over");
      var pid = e.dataTransfer ? e.dataTransfer.getData("text/plain") : "";
      if (!pid || !Object.prototype.hasOwnProperty.call(placements, pid)) return;
      placements[pid] = zoneId;
      renderSort();
    });
  });

  initSort();
  renderSort();

  function renderInformal() {
    infGrid.innerHTML = "";
    INFORMAL.forEach(function (t, i) {
      var row = D.createElement("label");
      row.className = "opt";
      var cb = D.createElement("input");
      cb.type = "checkbox";
      cb.value = t;
      cb.id = "inf" + i;
      var tx = D.createElement("span");
      tx.textContent = t;
      row.appendChild(cb);
      row.appendChild(tx);
      infGrid.appendChild(row);
    });
  }

  D.getElementById("infCheck").addEventListener("click", function () {
    var picks = [];
    infGrid.querySelectorAll("input[type=checkbox]").forEach(function (cb) {
      if (cb.checked) picks.push(cb.value);
    });
    if (picks.length !== 2) {
      infFb.textContent = "Choose exactly two phrases.";
      return;
    }
    var ok = picks.every(function (p) {
      return INFORMAL_CORRECT[p];
    });
    infFb.textContent = ok
      ? "Correct: 'come to think of it' and 'now you mention it...' are the more informal ones."
      : "Not quite. Try again and compare register.";
  });
  D.getElementById("infClear").addEventListener("click", function () {
    infGrid.querySelectorAll("input[type=checkbox]").forEach(function (cb) {
      cb.checked = false;
    });
    infFb.textContent = "";
  });
  renderInformal();
})(window, document);
