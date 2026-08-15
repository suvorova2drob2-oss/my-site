/** Unit 3 Reading — Stephanie Kwolek page mount */
(function (W) {
  "use strict";

  var DATA = W.U3_KWOLEK_READING;
  var LETTERS = ["A", "B", "C", "D"];

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
  }

  function mountMcq() {
    if (!DATA) return;
    var passageRoot = document.getElementById("passage-root");
    var mcqRoot = document.getElementById("mcq-root");
    var feedback = document.getElementById("feedback");
    var instr = document.getElementById("page-instr");

    if (passageRoot) passageRoot.innerHTML = DATA.passageHtml;
    if (instr) instr.textContent = DATA.blurb;

    if (!mcqRoot || !DATA.questions) return;

    DATA.questions.forEach(function (q) {
      var block = document.createElement("div");
      block.className = "q";
      var stem = document.createElement("div");
      stem.className = "stem";
      stem.innerHTML = "<strong>" + q.id + "</strong> " + q.prompt;
      block.appendChild(stem);

      var list = document.createElement("ul");
      list.className = "opts";
      for (var i = 0; i < 4; i++) {
        var li = document.createElement("li");
        li.className = "opt-line";
        var id = "kwolek-q" + q.id + "-" + i;
        var inp = document.createElement("input");
        inp.type = "radio";
        inp.name = "q" + q.id;
        inp.id = id;
        inp.value = String(i);
        var lab = document.createElement("label");
        lab.htmlFor = id;
        lab.innerHTML =
          '<span class="letter">' + LETTERS[i] + "</span> " + q.options[i];
        li.appendChild(inp);
        li.appendChild(lab);
        list.appendChild(li);
      }
      block.appendChild(list);
      mcqRoot.appendChild(block);
    });

    function clearMarks() {
      mcqRoot.querySelectorAll(".opt-line").forEach(function (el) {
        el.classList.remove("ok", "bad-pick");
      });
      if (feedback) feedback.textContent = "";
    }

    document.getElementById("btnCheck").addEventListener("click", function () {
      clearMarks();
      var ok = 0;
      var total = DATA.questions.length;
      DATA.questions.forEach(function (q) {
        var sel = mcqRoot.querySelector('input[name="q' + q.id + '"]:checked');
        var pick = sel ? parseInt(sel.value, 10) : -1;
        if (pick === q.correct) ok++;
        for (var i = 0; i < 4; i++) {
          var inp = mcqRoot.querySelector("#kwolek-q" + q.id + "-" + i);
          if (!inp) continue;
          var row = inp.closest(".opt-line");
          if (!row) continue;
          if (i === q.correct) row.classList.add("ok");
          else if (pick === i) row.classList.add("bad-pick");
        }
      });
      if (feedback) {
        feedback.textContent =
          "Ex. 1: " + ok + " / " + total + (ok === total ? " — excellent." : ".");
      }
      recordCombined();
    });

    document.getElementById("btnClear").addEventListener("click", function () {
      mcqRoot.querySelectorAll('input[type="radio"]').forEach(function (inp) {
        inp.checked = false;
      });
      clearMarks();
    });
  }

  function mountMatch() {
    var root = document.getElementById("match-root");
    if (!root || !DATA.phraseMatch) return;

    DATA.phraseMatch.forEach(function (row, idx) {
      var div = document.createElement("div");
      div.className = "match-row";
      var label = document.createElement("span");
      label.textContent = idx + 1 + ". " + row.meaning;
      var sel = document.createElement("select");
      sel.id = "match-" + row.id;
      sel.setAttribute("data-answer", row.answer);
      sel.innerHTML =
        '<option value="">— choose phrase —</option>' +
        DATA.phrasePool.map(function (p) {
          return (
            '<option value="' +
            p.replace(/"/g, "&quot;") +
            '">' +
            p +
            "</option>"
          );
        }).join("");
      div.appendChild(label);
      div.appendChild(sel);
      root.appendChild(div);
    });

    document.getElementById("btnMatchCheck").addEventListener("click", function () {
      var ok = 0;
      DATA.phraseMatch.forEach(function (row) {
        var sel = document.getElementById("match-" + row.id);
        if (!sel) return;
        var good = norm(sel.value) === norm(row.answer);
        sel.classList.toggle("ok", good);
        sel.classList.toggle("bad", !good && sel.value);
        if (good) ok++;
      });
      var fb = document.getElementById("match-fb");
      if (fb) fb.textContent = "Ex. 2: " + ok + " / " + DATA.phraseMatch.length + ".";
      recordCombined();
    });

    document.getElementById("btnMatchClear").addEventListener("click", function () {
      root.querySelectorAll("select").forEach(function (sel) {
        sel.value = "";
        sel.classList.remove("ok", "bad");
      });
      var fb = document.getElementById("match-fb");
      if (fb) fb.textContent = "";
    });
  }

  function mountGaps() {
    var root = document.getElementById("gap-root");
    if (!root || !DATA.gapFill) return;

    DATA.gapFill.forEach(function (row, idx) {
      var p = document.createElement("p");
      p.className = "gap-line";
      p.innerHTML =
        "<strong>" +
        (idx + 1) +
        ".</strong> " +
        row.before +
        '<input type="text" id="gap-' +
        row.id +
        '" autocomplete="off" spellcheck="false" aria-label="Gap ' +
        (idx + 1) +
        '" />' +
        row.after;
      root.appendChild(p);
    });

    document.getElementById("btnGapCheck").addEventListener("click", function () {
      var ok = 0;
      DATA.gapFill.forEach(function (row) {
        var inp = document.getElementById("gap-" + row.id);
        if (!inp) return;
        var got = norm(inp.value);
        var good = false;
        (row.accept || []).forEach(function (a) {
          if (got === norm(a)) good = true;
        });
        inp.classList.toggle("ok", good);
        inp.classList.toggle("bad", !good && got);
        if (good) ok++;
      });
      var fb = document.getElementById("gap-fb");
      if (fb) fb.textContent = "Ex. 3: " + ok + " / " + DATA.gapFill.length + ".";
      recordCombined();
    });

    document.getElementById("btnGapClear").addEventListener("click", function () {
      root.querySelectorAll("input").forEach(function (inp) {
        inp.value = "";
        inp.classList.remove("ok", "bad");
      });
      var fb = document.getElementById("gap-fb");
      if (fb) fb.textContent = "";
    });
  }

  var lastRecorded = -1;

  function scoreMcq() {
    var mcqRoot = document.getElementById("mcq-root");
    if (!mcqRoot || !DATA.questions) return 0;
    var ok = 0;
    DATA.questions.forEach(function (q) {
      var sel = mcqRoot.querySelector('input[name="q' + q.id + '"]:checked');
      if (sel && parseInt(sel.value, 10) === q.correct) ok++;
    });
    return ok;
  }

  function scoreMatch() {
    var ok = 0;
    DATA.phraseMatch.forEach(function (row) {
      var sel = document.getElementById("match-" + row.id);
      if (sel && norm(sel.value) === norm(row.answer)) ok++;
    });
    return ok;
  }

  function scoreGaps() {
    var ok = 0;
    DATA.gapFill.forEach(function (row) {
      var inp = document.getElementById("gap-" + row.id);
      if (!inp) return;
      var got = norm(inp.value);
      var good = (row.accept || []).some(function (a) {
        return got === norm(a);
      });
      if (good) ok++;
    });
    return ok;
  }

  function recordCombined() {
    if (!W.MasteringB2Progress) return;
    var total =
      DATA.questions.length +
      DATA.phraseMatch.length +
      DATA.gapFill.length;
    var ok = scoreMcq() + scoreMatch() + scoreGaps();
    if (ok === lastRecorded) return;
    lastRecorded = ok;
    W.MasteringB2Progress.recordCheckFromDom(ok, total);
  }

  function mount() {
    if (!DATA) return;
    mountMcq();
    mountMatch();
    mountGaps();
  }

  W.U3_KWOLEK_APP = { mount: mount };
  mount();
})(window);
