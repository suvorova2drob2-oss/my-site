/**
 * OGE Variant 1 — mount functions for section pages.
 */
(function () {
  var C = window.OgeExamCore;
  var D = window.__OGE_V1__;
  if (!C || !D) return;

  function feedback(el, ok, msg) {
    if (!el) return;
    el.hidden = false;
    el.className = "oge-exam-feedback " + (ok ? "is-ok" : "is-bad");
    el.textContent = msg;
  }

  function mountListeningShortMc(root) {
    var pack = D.listeningShortMc;
    var html =
      '<div class="oge-exam-head"><h2>Listening · Tasks 1–4</h2><p class="oge-exam-instr">' +
      pack.instructionHtml +
      "</p></div>" +
      C.renderAudio(pack.audioSrc, "listening 1–11") +
      '<div class="oge-exam-transcript"><details><summary>Скрипты A–D (из учебника)</summary>';
    pack.texts.forEach(function (t) {
      html +=
        '<div class="oge-exam-text-block"><strong>Text ' +
        C.esc(t.label) +
        " · " +
        C.esc(t.title) +
        "</strong><br>" +
        C.esc(t.body).replace(/\n/g, "<br>") +
        "</div>";
    });
    html += "</details></div>";
    pack.questions.forEach(function (q) {
      html += '<div class="oge-exam-item" data-q="' + q.num + '"><div><span class="oge-exam-qnum">' + q.num + ".</span>" + C.esc(q.text) + '</div><div class="oge-exam-choices">';
      q.choices.forEach(function (c, i) {
        var n = i + 1;
        html +=
          '<label class="oge-exam-choice"><input type="radio" name="q' +
          q.num +
          '" value="' +
          n +
          '"> <span>' +
          n +
          ") " +
          C.esc(c) +
          "</span></label>";
      });
      html += "</div></div>";
    });
    html +=
      '<div class="oge-exam-actions"><button type="button" class="oge-exam-btn" data-oge-check>Проверить</button><button type="button" class="oge-exam-btn oge-exam-btn--ghost" data-oge-reset>Сбросить</button></div><div class="oge-exam-feedback" hidden></div>';
    root.innerHTML = html;
    var fb = root.querySelector(".oge-exam-feedback");
    C.bindActions(
      root,
      function () {
        var ok = 0;
        pack.questions.forEach(function (q) {
          var item = root.querySelector('[data-q="' + q.num + '"]');
          var sel = root.querySelector('input[name="q' + q.num + '"]:checked');
          var good = sel && Number(sel.value) === q.key;
          if (good) ok++;
          item.classList.toggle("is-ok", good);
          item.classList.toggle("is-bad", sel && !good);
        });
        feedback(fb, ok === pack.questions.length, "Правильно: " + ok + " из " + pack.questions.length);
      },
      function () {
        root.querySelectorAll('input[type="radio"]').forEach(function (i) {
          i.checked = false;
        });
        root.querySelectorAll(".oge-exam-item").forEach(function (el) {
          el.classList.remove("is-ok", "is-bad");
        });
        fb.hidden = true;
      }
    );
  }

  function mountListeningMatching(root) {
    var pack = D.listeningMatching;
    var html =
      '<div class="oge-exam-head"><h2>Listening · Task 5</h2><p class="oge-exam-instr">' +
      pack.instructionHtml +
      "</p></div>" +
      C.renderAudio(pack.audioSrc, "task 5") +
      '<div class="oge-exam-text-block"><strong>Рубрики</strong><br>';
    pack.headings.forEach(function (h) {
      html += h.num + ". " + C.esc(h.text) + "<br>";
    });
    html += "</div><div class=\"oge-exam-match-grid\">";
    pack.speakerLabels.forEach(function (lab) {
      html +=
        '<div class="oge-exam-match-row"><strong>' +
        lab +
        '</strong><span></span><select data-spk="' +
        lab +
        '"><option value="">—</option>';
      pack.headings.forEach(function (h) {
        html += '<option value="' + h.num + '">' + h.num + "</option>";
      });
      html += "</select></div>";
    });
    html +=
      '</div><div class="oge-exam-transcript"><details><summary>Скрипт спикеров A–E</summary><p class="oge-exam-text-block">' +
      C.esc(pack.presenterIntro) +
      "</p>";
    pack.speakers.forEach(function (s) {
      html +=
        '<div class="oge-exam-text-block"><strong>Speaker ' +
        s.id +
        "</strong><br>" +
        C.esc(s.text) +
        "</div>";
    });
    html +=
      '</details></div><div class="oge-exam-actions"><button type="button" class="oge-exam-btn" data-oge-check>Проверить</button><button type="button" class="oge-exam-btn oge-exam-btn--ghost" data-oge-reset>Сбросить</button></div><div class="oge-exam-feedback" hidden></div>';
    root.innerHTML = html;
    var fb = root.querySelector(".oge-exam-feedback");
    C.bindActions(
      root,
      function () {
        var ok = 0;
        pack.speakerLabels.forEach(function (lab, idx) {
          var sel = root.querySelector('select[data-spk="' + lab + '"]');
          var good = sel && Number(sel.value) === pack.key[idx];
          if (good) ok++;
          if (sel) sel.style.borderColor = good ? "rgba(52,211,153,.6)" : "rgba(248,113,113,.6)";
        });
        feedback(fb, ok === pack.key.length, "Правильно: " + ok + " из " + pack.key.length + " · ключ " + pack.key.join(""));
      },
      function () {
        root.querySelectorAll("select").forEach(function (s) {
          s.value = "";
          s.style.borderColor = "";
        });
        fb.hidden = true;
      }
    );
  }

  function mountListeningGaps(root) {
    var pack = D.listeningInterviewGaps;
    var html =
      '<div class="oge-exam-head"><h2>Listening · Tasks 6–11</h2><p class="oge-exam-instr">' +
      pack.instructionHtml +
      "</p></div>" +
      C.renderAudio(pack.audioSrc, "interview");
    pack.fields.forEach(function (f) {
      html +=
        '<div class="oge-exam-gap-row" data-gap="' +
        f.num +
        '"><label><span class="oge-exam-qnum">' +
        f.num +
        ".</span> " +
        C.esc(f.label) +
        (f.suffix ? " " + C.esc(f.suffix) : "") +
        '</label><input type="text" autocomplete="off" spellcheck="false"></div>';
    });
    html += '<div class="oge-exam-transcript"><details><summary>Скрипт интервью</summary>';
    pack.transcript.forEach(function (line) {
      html +=
        '<div class="oge-exam-text-block"><strong>' +
        C.esc(line.role) +
        ":</strong> " +
        C.esc(line.text) +
        "</div>";
    });
    html +=
      '</details></div><div class="oge-exam-actions"><button type="button" class="oge-exam-btn" data-oge-check>Проверить</button><button type="button" class="oge-exam-btn oge-exam-btn--ghost" data-oge-reset>Сбросить</button></div><div class="oge-exam-feedback" hidden></div>';
    root.innerHTML = html;
    var fb = root.querySelector(".oge-exam-feedback");
    C.bindActions(
      root,
      function () {
        var ok = 0;
        pack.fields.forEach(function (f) {
          var row = root.querySelector('[data-gap="' + f.num + '"]');
          var inp = row && row.querySelector("input");
          var good = inp && C.answersMatch(inp.value, f.answers);
          if (good) ok++;
          row.classList.toggle("is-ok", good);
          row.classList.toggle("is-bad", inp && inp.value.trim() && !good);
        });
        feedback(fb, ok === pack.fields.length, "Правильно: " + ok + " из " + pack.fields.length);
      },
      function () {
        root.querySelectorAll("input").forEach(function (i) {
          i.value = "";
        });
        root.querySelectorAll(".oge-exam-gap-row").forEach(function (r) {
          r.classList.remove("is-ok", "is-bad");
        });
        fb.hidden = true;
      }
    );
  }

  function mountReadingMatch(root) {
    var pack = D.readingQuestionMatch;
    var html =
      '<div class="oge-exam-head"><h2>Reading · Task 12</h2><p class="oge-exam-instr">' +
      pack.instructionHtml +
      "</p></div>";
    pack.questions.forEach(function (q) {
      html += '<div class="oge-exam-text-block"><strong>' + q.num + ".</strong> " + C.esc(q.text) + "</div>";
    });
    html += '<div class="oge-exam-match-grid" style="margin-top:14px">';
    pack.texts.forEach(function (t) {
      html +=
        '<div class="oge-exam-match-row"><strong>' +
        t.letter +
        '</strong><div class="oge-exam-text-block" style="margin:0">' +
        C.esc(t.text) +
        '</div><select data-text="' +
        t.letter +
        '"><option value="">—</option>';
      pack.questions.forEach(function (q) {
        html += '<option value="' + q.num + '">' + q.num + "</option>";
      });
      html += "</select></div>";
    });
    html +=
      '</div><div class="oge-exam-actions"><button type="button" class="oge-exam-btn" data-oge-check>Проверить</button><button type="button" class="oge-exam-btn oge-exam-btn--ghost" data-oge-reset>Сбросить</button></div><div class="oge-exam-feedback" hidden></div>';
    root.innerHTML = html;
    var fb = root.querySelector(".oge-exam-feedback");
    C.bindActions(
      root,
      function () {
        var ok = 0;
        var letters = Object.keys(pack.keyByText);
        letters.forEach(function (letter) {
          var sel = root.querySelector('select[data-text="' + letter + '"]');
          var good = sel && Number(sel.value) === pack.keyByText[letter];
          if (good) ok++;
          if (sel) sel.style.borderColor = good ? "rgba(52,211,153,.6)" : "rgba(248,113,113,.6)";
        });
        feedback(
          fb,
          ok === letters.length,
          "Правильно: " + ok + " из " + letters.length + " · без ответа вопрос " + pack.unusedQuestion
        );
      },
      function () {
        root.querySelectorAll("select").forEach(function (s) {
          s.value = "";
          s.style.borderColor = "";
        });
        fb.hidden = true;
      }
    );
  }

  function mountReadingTfns(root) {
    var pack = D.readingTfns;
    var html =
      '<div class="oge-exam-head"><h2>Reading · Tasks 13–19 · ' +
      C.esc(pack.title) +
      '</h2><p class="oge-exam-instr">' +
      pack.instructionHtml +
      '</p></div><div class="oge-exam-passage">' +
      pack.passageHtml +
      "</div>";
    pack.statements.forEach(function (s) {
      html +=
        '<div class="oge-exam-item" data-st="' +
        s.num +
        '"><div><span class="oge-exam-qnum">' +
        s.num +
        ".</span> " +
        C.esc(s.text) +
        '</div><div class="oge-exam-choices">';
      [
        { v: 1, l: "1 · True" },
        { v: 2, l: "2 · False" },
        { v: 3, l: "3 · Not stated" }
      ].forEach(function (c) {
        html +=
          '<label class="oge-exam-choice"><input type="radio" name="st' +
          s.num +
          '" value="' +
          c.v +
          '"> <span>' +
          c.l +
          "</span></label>";
      });
      html += "</div></div>";
    });
    html +=
      '<div class="oge-exam-actions"><button type="button" class="oge-exam-btn" data-oge-check>Проверить</button><button type="button" class="oge-exam-btn oge-exam-btn--ghost" data-oge-reset>Сбросить</button></div><div class="oge-exam-feedback" hidden></div>';
    root.innerHTML = html;
    var fb = root.querySelector(".oge-exam-feedback");
    C.bindActions(
      root,
      function () {
        var ok = 0;
        pack.statements.forEach(function (s) {
          var item = root.querySelector('[data-st="' + s.num + '"]');
          var sel = root.querySelector('input[name="st' + s.num + '"]:checked');
          var good = sel && Number(sel.value) === s.key;
          if (good) ok++;
          item.classList.toggle("is-ok", good);
          item.classList.toggle("is-bad", sel && !good);
        });
        feedback(fb, ok === pack.statements.length, "Правильно: " + ok + " из " + pack.statements.length);
      },
      function () {
        root.querySelectorAll('input[type="radio"]').forEach(function (i) {
          i.checked = false;
        });
        root.querySelectorAll(".oge-exam-item").forEach(function (el) {
          el.classList.remove("is-ok", "is-bad");
        });
        fb.hidden = true;
      }
    );
  }

  function mountGrammar(root) {
    var pack = D.grammarExam;
    var html =
      '<div class="oge-exam-head"><h2>Grammar · Tasks 20–28</h2><p class="oge-exam-instr">' +
      pack.instructionHtml +
      "</p></div><div class=\"oge-exam-passage\"><p>Mia cooks Sunday breakfast for her family (фрагмент из варианта 1).</p></div>";
    pack.items.forEach(function (it) {
      html +=
        '<div class="oge-exam-gap-row" data-g="' +
        it.num +
        '"><label><span class="oge-exam-qnum">' +
        it.num +
        ".</span> " +
        C.esc(it.before) +
        "______ " +
        C.esc(it.after) +
        ' <em>(' +
        C.esc(it.cue) +
        ")</em></label><input type=\"text\" autocomplete=\"off\" spellcheck=\"false\"></div>";
    });
    html +=
      '<div class="oge-exam-actions"><button type="button" class="oge-exam-btn" data-oge-check>Проверить</button><button type="button" class="oge-exam-btn oge-exam-btn--ghost" data-oge-reset>Сбросить</button></div><div class="oge-exam-feedback" hidden></div>';
    root.innerHTML = html;
    var fb = root.querySelector(".oge-exam-feedback");
    C.bindActions(
      root,
      function () {
        var ok = 0;
        pack.items.forEach(function (it) {
          var row = root.querySelector('[data-g="' + it.num + '"]');
          var inp = row && row.querySelector("input");
          var good = inp && C.answersMatch(inp.value, it.answers);
          if (good) ok++;
          row.classList.toggle("is-ok", good);
          row.classList.toggle("is-bad", inp && inp.value.trim() && !good);
        });
        feedback(fb, ok === pack.items.length, "Правильно: " + ok + " из " + pack.items.length);
      },
      function () {
        root.querySelectorAll("input").forEach(function (i) {
          i.value = "";
        });
        root.querySelectorAll(".oge-exam-gap-row").forEach(function (r) {
          r.classList.remove("is-ok", "is-bad");
        });
        fb.hidden = true;
      }
    );
  }

  function mountWordFormation(root) {
    var pack = D.wordFormation;
    var html =
      '<div class="oge-exam-head"><h2>Word formation · Tasks 29–34</h2><p class="oge-exam-instr">' +
      pack.instructionHtml +
      '</p></div><div class="oge-exam-passage"><p>' +
      C.esc(pack.passageIntro) +
      "</p></div>";
    pack.items.forEach(function (it) {
      html +=
        '<div class="oge-exam-gap-row" data-wf="' +
        it.num +
        '"><label><span class="oge-exam-qnum">' +
        it.num +
        ".</span> " +
        C.esc(it.before) +
        "______ " +
        C.esc(it.after) +
        ' <em>(' +
        C.esc(it.cue) +
        ")</em></label><input type=\"text\" autocomplete=\"off\" spellcheck=\"false\"></div>";
    });
    html +=
      '<div class="oge-exam-actions"><button type="button" class="oge-exam-btn" data-oge-check>Проверить</button><button type="button" class="oge-exam-btn oge-exam-btn--ghost" data-oge-reset>Сбросить</button></div><div class="oge-exam-feedback" hidden></div>';
    root.innerHTML = html;
    var fb = root.querySelector(".oge-exam-feedback");
    C.bindActions(
      root,
      function () {
        var ok = 0;
        pack.items.forEach(function (it) {
          var row = root.querySelector('[data-wf="' + it.num + '"]');
          var inp = row && row.querySelector("input");
          var good = inp && C.answersMatch(inp.value, it.answers);
          if (good) ok++;
          row.classList.toggle("is-ok", good);
          row.classList.toggle("is-bad", inp && inp.value.trim() && !good);
        });
        feedback(fb, ok === pack.items.length, "Правильно: " + ok + " из " + pack.items.length);
      },
      function () {
        root.querySelectorAll("input").forEach(function (i) {
          i.value = "";
        });
        root.querySelectorAll(".oge-exam-gap-row").forEach(function (r) {
          r.classList.remove("is-ok", "is-bad");
        });
        fb.hidden = true;
      }
    );
  }

  function mountWriting(root) {
    var pack = D.writing;
    var html =
      '<div class="oge-exam-head"><h2>Writing · Task 35</h2><p class="oge-exam-instr">' +
      pack.instructionHtml +
      '</p></div><div class="oge-exam-email"><div class="oge-email-meta">From: ' +
      C.esc(pack.emailFrom) +
      "<br>To: " +
      C.esc(pack.emailTo) +
      "<br>Subject: " +
      C.esc(pack.emailSubject) +
      '</div><div>' +
      C.esc(pack.emailBody).replace(/\n/g, "<br>") +
      '</div></div><textarea class="oge-exam-writing-area" placeholder="Your reply…"></textarea><div class="oge-exam-wordcount" data-wc>0 слов · нужно ' +
      pack.wordMin +
      "–" +
      pack.wordMax +
      '</div><div class="oge-exam-actions"><button type="button" class="oge-exam-btn" data-oge-check>Проверить объём</button></div><div class="oge-exam-feedback" hidden></div>';
    root.innerHTML = html;
    var area = root.querySelector("textarea");
    var wc = root.querySelector("[data-wc]");
    var fb = root.querySelector(".oge-exam-feedback");
    function countWords() {
      var t = area.value.trim();
      if (!t) return 0;
      return t.split(/\s+/).length;
    }
    area.addEventListener("input", function () {
      wc.textContent = countWords() + " слов · нужно " + pack.wordMin + "–" + pack.wordMax;
    });
    C.bindActions(
      root,
      function () {
        var n = countWords();
        var ok = n >= pack.wordMin && n <= pack.wordMax;
        feedback(
          fb,
          ok,
          ok
            ? "Объём в норме (" + n + " слов). Проверь, что ответил на все 3 вопроса Duncan."
            : "Сейчас " + n + " слов. Нужно " + pack.wordMin + "–" + pack.wordMax + "."
        );
      },
      function () {}
    );
  }

  function mountSpeaking(root) {
    if (window.OgeSpeakingMount) {
      window.OgeSpeakingMount.mount(root, D.speaking, "Variant 1");
      return;
    }
  }

  var mounts = {
    "listening-short-mc": mountListeningShortMc,
    "listening-matching": mountListeningMatching,
    "listening-gaps": mountListeningGaps,
    "reading-match": mountReadingMatch,
    "reading-tfns": mountReadingTfns,
    grammar: mountGrammar,
    "word-formation": mountWordFormation,
    writing: mountWriting,
    speaking: mountSpeaking
  };

  window.OgeVariant1Apps = {
    mount: function (root) {
      if (!root) return;
      var mode = root.getAttribute("data-oge-mode");
      if (mounts[mode]) mounts[mode](root);
      else root.innerHTML = '<p class="oge-exam-instr">Unknown mode.</p>';
    }
  };

  document.querySelectorAll("[data-oge-mode]").forEach(function (el) {
    window.OgeVariant1Apps.mount(el);
  });
})();