/**
 * EGE Live room bar — create / join / start + teacher fullscreen dashboard.
 *
 * Mount: EgeLiveRoom.mount({ deckPrefix, getUnitId })
 * Progress: EgeLiveRoom.notifyProgress({ score, correct, total, items:[{id,label,correct,answer,expected}] })
 */
(function (W) {
  "use strict";

  var SS_HOST = "egeLiveHostToken";
  var SS_ROOM = "egeLiveRoomCode";
  var SS_PLAYER = "egeLivePlayerId";
  var SS_ROLE = "egeLiveRole";
  var SS_NAME = "egeLiveDisplayName";

  var state = {
    api: null,
    unsub: null,
    roomCode: "",
    hostToken: "",
    playerId: "",
    role: "",
    deckPrefix: "ege",
    getUnitId: function () {
      return "";
    },
    getUnitData: function () {
      return null;
    },
    onOpenHunt: null,
    onRestart: null,
    lastSnap: null,
    hostTab: "board",
    inspect: null,
    opts: null
  };

  function qs() {
    return new URLSearchParams(location.search);
  }

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function deckId() {
    var u = "";
    try {
      u = String(state.getUnitId() || "").trim();
    } catch (e) {
      u = "";
    }
    return state.deckPrefix + (u ? ":" + u : "");
  }

  function ensureApi() {
    if (state.api) return state.api;
    if (!W.LiveGameApi || !W.LiveGameHttp) {
      throw new Error("LiveGameApi / LiveGameHttp not loaded");
    }
    var url = String(W.__EGE_LIVE_API_URL__ || "http://127.0.0.1:8787/live");
    W.LiveGameApi.registerDriver("http", W.LiveGameHttp.buildDriver(url));
    state.api = W.LiveGameApi.createClient({ driver: "http" });
    return state.api;
  }

  var DECK_PATH_HINTS = {
    "ege-listening-matching": "/ege/ege-listening-matching.html",
    "ege-listening-tfns": "/ege/ege-listening-tfns.html",
    "ege-listening-mc": "/ege/ege-listening-mc.html",
    "ege-reading-matching-headlines": "/ege/ege-reading-matching-headlines.html",
    "ege-reading-gapped-text": "/ege/ege-reading-gapped-text.html",
    "ege-reading-mc": "/ege/ege-reading-multiple-choice.html",
    "ege-grammar-exam": "/ege/ege-grammar-exam.html",
    "ege-word-formation-exam": "/ege/ege-word-formation-exam.html",
    "ege-lexis-exam": "/ege/ege-lexis-exam.html"
  };

  function deckPathHint() {
    return DECK_PATH_HINTS[state.deckPrefix] || location.pathname || "/ege/ege-listening-matching.html";
  }

  function studentLink(roomCode) {
    var unit = "";
    try {
      unit = String(state.getUnitId() || "").trim();
    } catch (e) {}
    var publicOrigin = String(W.__EGE_LIVE_PUBLIC_ORIGIN__ || "").replace(/\/$/, "");
    var pathHint = deckPathHint();
    var u;
    if (publicOrigin) {
      u = new URL(publicOrigin + pathHint);
    } else if (location.protocol === "http:" || location.protocol === "https:") {
      u = new URL(location.href);
    } else {
      u = new URL("http://127.0.0.1:8787" + pathHint);
    }
    u.searchParams.set("room", roomCode);
    if (unit) u.searchParams.set("unit", unit);
    u.searchParams.delete("live_host");
    return u.toString();
  }

  function readSavedPlayerName() {
    try {
      var ss = sessionStorage.getItem(SS_NAME);
      if (ss && String(ss).trim()) return String(ss).trim().slice(0, 40);
    } catch (e1) {}
    if (W.EgePlayerName && typeof W.EgePlayerName.get === "function") {
      return W.EgePlayerName.get() || "";
    }
    return "";
  }

  function persistPlayerName(name) {
    var n = String(name || "").trim().slice(0, 40);
    if (!n) return;
    try {
      sessionStorage.setItem(SS_NAME, n);
    } catch (e1) {}
    if (W.EgePlayerName && typeof W.EgePlayerName.set === "function") {
      W.EgePlayerName.set(n);
    }
  }

  function fillNameInput(name) {
    var nameEl = document.getElementById("ege-live-name");
    if (nameEl && name) nameEl.value = name;
  }

  function onChangeName() {
    state.playerId = "";
    try {
      sessionStorage.removeItem(SS_PLAYER);
      sessionStorage.removeItem(SS_ROLE);
    } catch (e1) {}
    if (state.unsub) {
      try {
        state.unsub();
      } catch (e2) {}
      state.unsub = null;
    }
    fillNameInput(readSavedPlayerName());
    applyStudentPhase("lobby");
    var joinStep = document.getElementById("ege-live-gate-join");
    var waitStep = document.getElementById("ege-live-gate-wait");
    if (joinStep) joinStep.hidden = false;
    if (waitStep) waitStep.hidden = true;
    var nameEl = document.getElementById("ege-live-name");
    if (nameEl) {
      try {
        nameEl.focus();
        nameEl.select();
      } catch (e3) {}
    }
  }

  function setMsg(el, text, ok) {
    if (!el) return;
    el.textContent = text || "";
    el.className = "ege-live-msg" + (ok === true ? " is-ok" : ok === false ? " is-err" : "");
  }

  function attemptStarsHtml(attempts) {
    var n = Math.max(0, Math.min(10, Math.round(Number(attempts) || 0)));
    if (!n) return "";
    var stars = "";
    for (var i = 0; i < n; i++) stars += "★";
    return (
      '<span class="ege-live-attempts" title="Попыток: ' +
      n +
      '" aria-label="Попыток: ' +
      n +
      '">' +
      stars +
      '<em>' +
      n +
      "</em></span>"
    );
  }

  function rowToneClass(row) {
    if (!row || !row.submitted) return "is-pending";
    if (row.totalCount > 0 && row.correctCount === row.totalCount) return "is-all-ok";
    if (row.score >= 100) return "is-all-ok";
    if (row.correctCount > 0) return "is-mixed";
    return "is-all-bad";
  }

  function renderLobbyRoster(snap) {
    var box = document.getElementById("ege-live-roster");
    if (!box) return;
    var lb = (snap && snap.leaderboard) || [];
    if (!lb.length) {
      box.innerHTML = '<p class="ege-live-muted">Пока никого нет — ждут ссылку.</p>';
      return;
    }
    var rows = lb
      .map(function (row, i) {
        return (
          "<li class=\"" +
          rowToneClass(row) +
          "\"><span class=\"ege-live-rank\">" +
          (i + 1) +
          "</span> <strong>" +
          esc(row.displayName) +
          "</strong>" +
          attemptStarsHtml(row.attempts) +
          " <span class=\"ege-live-score\">" +
          (row.submitted ? esc(String(row.score)) + "%" : "…") +
          "</span></li>"
        );
      })
      .join("");
    box.innerHTML =
      '<p class="ege-live-phase">Фаза: <strong>' +
      esc((snap && snap.phase) || "lobby") +
      "</strong> · учеников: " +
      lb.length +
      "</p><ol class=\"ege-live-lb\">" +
      rows +
      "</ol>";
  }

  function getUnitSafe() {
    try {
      if (typeof state.getUnitData === "function") return state.getUnitData();
    } catch (e) {}
    return null;
  }

  function statementText(num) {
    var unit = getUnitSafe();
    if (!unit || !Array.isArray(unit.statements)) return "";
    var n = String(num);
    for (var i = 0; i < unit.statements.length; i++) {
      if (String(unit.statements[i].num) === n) return String(unit.statements[i].text || "");
    }
    return "";
  }

  function chipHtml(row, it) {
    var selected =
      state.inspect &&
      state.inspect.mode === "answer" &&
      state.inspect.playerId === row.playerId &&
      state.inspect.itemId === it.id;
    return (
      '<button type="button" class="ege-live-chip ' +
      (it.correct ? "is-ok" : "is-bad") +
      (selected ? " is-selected" : "") +
      '" data-live-player="' +
      esc(row.playerId) +
      '" data-live-item="' +
      esc(it.id) +
      '" title="Сверить ответ">' +
      esc(it.id) +
      " " +
      (it.correct ? "✓" : "✗") +
      (it.answer ? " · " + esc(it.answer) : "") +
      "</button>"
    );
  }

  function answerSegmentsHtml(row) {
    var items = Array.isArray(row.items) ? row.items : [];
    if (!items.length) {
      return '<div class="ege-live-qz-bar ege-live-qz-bar--empty"></div>';
    }
    return (
      '<div class="ege-live-qz-bar ege-live-qz-bar--segs" role="img" aria-label="Ответы по заданиям">' +
      items
        .map(function (it) {
          var filled = it.filled !== false && String(it.answer || "").length > 0;
          var cls = !filled ? "is-pending" : it.correct ? "is-ok" : "is-bad";
          var tip = !filled
            ? "ещё не выбрано"
            : (it.answer ? "№" + it.answer + " · " : "") +
              (it.correct ? "верно" : "ошибка");
          return (
            '<i class="' +
            cls +
            '" title="' +
            esc(it.label || it.id) +
            ": " +
            tip +
            '"></i>'
          );
        })
        .join("") +
      "</div>"
    );
  }

  function classAccuracy(lb) {
    var sum = 0;
    var n = 0;
    lb.forEach(function (row) {
      if (!row.submitted) return;
      sum += Number(row.score) || 0;
      n += 1;
    });
    return n ? Math.round(sum / n) : null;
  }

  function questionStats(lb) {
    var map = {};
    lb.forEach(function (row) {
      if (!Array.isArray(row.items)) return;
      row.items.forEach(function (it) {
        var filled = it.filled !== false && String(it.answer || "").length > 0;
        if (!filled) return;
        var id = String(it.id);
        if (!map[id]) map[id] = { id: id, label: it.label || id, ok: 0, bad: 0, expected: it.expected };
        if (it.correct) map[id].ok += 1;
        else map[id].bad += 1;
        if (it.expected) map[id].expected = it.expected;
      });
    });
    return Object.keys(map)
      .sort()
      .map(function (k) {
        return map[k];
      });
  }

  function renderGenericBank(unit) {
    var title = (unit && unit.bankTitle) || "Задания";
    var lines = (unit && unit.bankLines) || [];
    if (!lines.length) {
      return (
        '<div class="ege-live-bank ege-live-bank--stmts">' +
        '<h3 class="ege-live-bank-title">' +
        esc(title) +
        "</h3>" +
        '<p class="ege-live-muted">Прогресс учеников — в полосках и чипах выше. Откройте Live через http://127.0.0.1:8787/…</p>' +
        "</div>"
      );
    }
    return (
      '<div class="ege-live-bank ege-live-bank--stmts">' +
      '<h3 class="ege-live-bank-title">' +
      esc(title) +
      "</h3><ol class=\"ege-live-bank-list\">" +
      lines
        .map(function (ln) {
          return (
            "<li><strong>" +
            esc(ln.id || ln.label || "") +
            "</strong> " +
            esc(ln.text || "") +
            "</li>"
          );
        })
        .join("") +
      "</ol></div>"
    );
  }

  function renderTaskBank(highlightNums) {
    var unit = getUnitSafe();
    var hl = {};
    (highlightNums || []).forEach(function (n) {
      hl[String(n)] = true;
    });
    if (!unit || !Array.isArray(unit.statements) || !unit.statements.length) {
      return renderGenericBank(unit);
    }
    var key = Array.isArray(unit.key) ? unit.key : [];
    var labels = unit.speakerLabels || ["A", "B", "C", "D", "E", "F"];
    var byStmt = {};
    key.forEach(function (num, i) {
      var k = String(num);
      if (!byStmt[k]) byStmt[k] = [];
      byStmt[k].push(labels[i] || String(i + 1));
    });
    var extra = unit.extraStatementNum != null ? String(unit.extraStatementNum) : "";

    return (
      '<div class="ege-live-bank ege-live-bank--stmts">' +
      '<h3 class="ege-live-bank-title">Утверждения 1–7</h3>' +
      '<p class="ege-live-muted ege-live-bank-hint">Как у ученика — справа правильный Speaker (ключ).</p>' +
      '<ol class="ege-live-stmt-list">' +
      unit.statements
        .map(function (st) {
          var num = String(st.num);
          var spk = byStmt[num] || [];
          var on = hl[num];
          var badges =
            spk.length > 0
              ? spk
                  .map(function (s) {
                    return '<span class="ege-live-stmt-spk">Speaker ' + esc(s) + "</span>";
                  })
                  .join("")
              : extra && extra === num
                ? '<span class="ege-live-stmt-extra">лишнее</span>'
                : "";
          return (
            '<li class="ege-live-stmt-item' +
            (on ? " is-hl" : "") +
            '">' +
            '<div class="ege-live-stmt-main">' +
            '<span class="ege-live-stmt-num">' +
            esc(num) +
            ".</span> " +
            '<span class="ege-live-stmt-text">' +
            esc(st.text || "") +
            "</span></div>" +
            (badges ? '<div class="ege-live-stmt-side">' + badges + "</div>" : "") +
            "</li>"
          );
        })
        .join("") +
      "</ol></div>"
    );
  }

  function renderInspect() {
    var box = document.getElementById("ege-live-fs-inspect");
    if (!box) return;
    var sel = state.inspect;
    var highlight = [];
    var focusHtml = "";

    if (sel && sel.mode === "answer" && state.lastSnap) {
      var row = null;
      var lb = state.lastSnap.leaderboard || [];
      for (var i = 0; i < lb.length; i++) {
        if (lb[i].playerId === sel.playerId) {
          row = lb[i];
          break;
        }
      }
      var it = null;
      if (row && Array.isArray(row.items)) {
        for (var j = 0; j < row.items.length; j++) {
          if (String(row.items[j].id) === String(sel.itemId)) {
            it = row.items[j];
            break;
          }
        }
      }
      if (it) {
        if (it.answer) highlight.push(it.answer);
        if (it.expected) highlight.push(it.expected);
        var tone = it.correct ? "is-ok" : "is-bad";
        focusHtml =
          '<div class="ege-live-inspect-card ' +
          tone +
          '">' +
          '<div class="ege-live-inspect-head">' +
          "<strong>" +
          esc(row.displayName) +
          "</strong> · Speaker " +
          esc(it.id) +
          ' <span class="ege-live-inspect-badge">' +
          (it.correct ? "верно ✓" : "ошибка ✗") +
          "</span></div>" +
          '<div class="ege-live-inspect-cols">' +
          '<div class="ege-live-inspect-block"><p class="ege-live-inspect-label">Ответ ученика · №' +
          esc(it.answer || "—") +
          "</p><p class=\"ege-live-inspect-text\">" +
          esc(statementText(it.answer) || "—") +
          "</p></div>" +
          '<div class="ege-live-inspect-block is-key"><p class="ege-live-inspect-label">Правильно · №' +
          esc(it.expected || "—") +
          "</p><p class=\"ege-live-inspect-text\">" +
          esc(statementText(it.expected) || "—") +
          "</p></div>" +
          "</div></div>";
      }
    } else if (sel && sel.mode === "question") {
      highlight.push(sel.expected);
      focusHtml =
        '<div class="ege-live-inspect-card">' +
        '<div class="ege-live-inspect-head"><strong>Speaker ' +
        esc(sel.itemId) +
        "</strong> · правильный ответ №" +
        esc(sel.expected || "—") +
        "</div>" +
        '<p class="ege-live-inspect-text">«' +
        esc(statementText(sel.expected) || "") +
        "»</p></div>";
    } else if (sel && sel.mode === "player") {
      focusHtml =
        '<div class="ege-live-inspect-card"><div class="ege-live-inspect-head"><strong>' +
        esc(sel.name || "Ученик") +
        "</strong> · " +
        esc(String(sel.score != null ? sel.score : "—")) +
        "%</div>" +
        '<p class="ege-live-muted">Откройте вкладку «Вопросы», чтобы разобрать ответы по спикерам.</p></div>';
    }

    box.innerHTML =
      (focusHtml ||
        '<p class="ege-live-muted ege-live-inspect-hint">Выберите строку на лидерборде или вопрос / ответ — сверка появится здесь. Ниже всегда видны все утверждения.</p>') +
      renderTaskBank(highlight);
  }

  function renderHostBoard(snap) {
    var board = document.getElementById("ege-live-fs-board");
    var detail = document.getElementById("ege-live-fs-detail");
    if (!board || !detail) return;
    var lb = (snap && snap.leaderboard) || [];
    var meta = document.getElementById("ege-live-fs-meta");
    var acc = classAccuracy(lb);
    var submitted = lb.filter(function (r) {
      return r.submitted;
    }).length;
    if (meta) {
      meta.textContent =
        "Комната " +
        (snap && snap.roomCode ? snap.roomCode : "—") +
        " · учеников: " +
        lb.length +
        " · сдали: " +
        submitted +
        (acc != null ? " · точность класса: " + acc + "%" : "") +
        " · фаза: " +
        ((snap && snap.phase) || "—");
    }

    if (!lb.length) {
      board.innerHTML = '<p class="ege-live-muted">Ученики ещё не зашли.</p>';
      detail.innerHTML = '<p class="ege-live-muted">Когда появятся ответы — здесь будет разбор по вопросам (Speaker A–F).</p>';
      renderInspect();
      return;
    }

    // —— Leaderboard (Quizizz-like ranking only) ——
    board.innerHTML =
      '<div class="ege-live-qz-summary">' +
      '<div class="ege-live-qz-stat"><span>Сдали</span><strong>' +
      submitted +
      " / " +
      lb.length +
      "</strong></div>" +
      '<div class="ege-live-qz-stat"><span>Точность класса</span><strong>' +
      (acc != null ? acc + "%" : "—") +
      "</strong></div>" +
      "</div>" +
      '<ol class="ege-live-qz-lb">' +
      lb
        .map(function (row, i) {
          var pct = Math.max(0, Math.min(100, Number(row.score) || 0));
          var selected =
            state.inspect && state.inspect.mode === "player" && state.inspect.playerId === row.playerId;
          return (
            '<li class="ege-live-qz-row ' +
            rowToneClass(row) +
            (selected ? " is-selected" : "") +
            '" data-live-pick-player="' +
            esc(row.playerId) +
            '" data-live-pick-name="' +
            esc(row.displayName) +
            '" data-live-pick-score="' +
            esc(String(row.score || 0)) +
            '">' +
            '<span class="ege-live-qz-place">' +
            (i + 1) +
            "</span>" +
            '<span class="ege-live-qz-avatar">' +
            esc((row.displayName || "?").charAt(0).toUpperCase()) +
            "</span>" +
            '<div class="ege-live-qz-main">' +
            '<div class="ege-live-qz-name-row"><strong>' +
            esc(row.displayName) +
            "</strong>" +
            attemptStarsHtml(row.attempts) +
            (row.submitted
              ? ""
              : Array.isArray(row.items) && row.items.length
                ? ' <em class="ege-live-live-tag">live</em>'
                : "") +
            "</div>" +
            (Array.isArray(row.items) && row.items.length
              ? answerSegmentsHtml(row) +
                '<div class="ege-live-qz-sub">' +
                esc(String(row.correctCount || 0)) +
                "/" +
                esc(String(row.totalCount || 0)) +
                " верно" +
                (row.submitted ? "" : " · пишет…") +
                (row.attempts
                  ? " · попыток: " + esc(String(row.attempts))
                  : "") +
                "</div>"
              : '<div class="ege-live-qz-bar ege-live-qz-bar--empty"></div><div class="ege-live-qz-sub">ещё отвечает…' +
                (row.attempts
                  ? " · попыток: " + esc(String(row.attempts))
                  : "") +
                "</div>") +
            '</div><div class="ege-live-qz-right">' +
            '<span class="ege-live-qz-pct ' +
            (row.submitted || (row.items && row.items.length)
              ? pct >= 60
                ? "is-ok"
                : "is-bad"
              : "") +
            '">' +
            (row.submitted ||
            (row.items &&
              row.items.some(function (it) {
                return it.filled !== false && String(it.answer || "").length;
              }))
              ? pct + "%"
              : "—") +
            "</span></div></li>"
          );
        })
        .join("") +
      "</ol>";

    // —— Questions (Speaker A–F accuracy + per-student chips) ——
    var qstats = questionStats(lb);
    var qBlock =
      qstats.length > 0
        ? '<div class="ege-live-qgrid">' +
          qstats
            .map(function (q) {
              var total = q.ok + q.bad;
              var okPct = total ? Math.round((q.ok / total) * 100) : 0;
              var selected =
                state.inspect && state.inspect.mode === "question" && state.inspect.itemId === q.id;
              return (
                '<button type="button" class="ege-live-qcard' +
                (selected ? " is-selected" : "") +
                '" data-live-q="' +
                esc(q.id) +
                '" data-live-q-expected="' +
                esc(String(q.expected || "")) +
                '">' +
                '<div class="ege-live-qcard-top"><strong>' +
                esc(q.label || q.id) +
                "</strong><span>" +
                okPct +
                "% верно</span></div>" +
                '<div class="ege-live-qbar"><i class="is-ok" style="width:' +
                okPct +
                '%"></i><i class="is-bad" style="width:' +
                (100 - okPct) +
                '%"></i></div>' +
                '<div class="ege-live-qcard-meta">✓ ' +
                q.ok +
                " · ✗ " +
                q.bad +
                (q.expected != null && String(q.expected).length
                  ? " · ключ " + esc(String(q.expected))
                  : "") +
                "</div></button>"
              );
            })
            .join("") +
          "</div>"
        : '<p class="ege-live-muted">Пока нет ответов — как только ученик выберет номер у Speaker, карточки появятся здесь.</p>';

    var byStudent =
      '<h3 class="ege-live-bank-title">Ответы учеников</h3>' +
      lb
        .map(function (row) {
          var items = Array.isArray(row.items) ? row.items : [];
          if (!items.length) {
            return (
              '<div class="ege-live-fs-student is-pending"><div class="ege-live-fs-student-head"><strong>' +
              esc(row.displayName) +
              "</strong><span>…</span></div></div>"
            );
          }
          return (
            '<div class="ege-live-fs-student ' +
            rowToneClass(row) +
            '"><div class="ege-live-fs-student-head"><strong>' +
            esc(row.displayName) +
            "</strong>" +
            attemptStarsHtml(row.attempts) +
            (row.submitted ? "" : ' <em class="ege-live-live-tag">live</em>') +
            '<span class="ege-live-score ' +
            (row.correctCount === row.totalCount && row.submitted ? "is-ok" : "is-bad") +
            '">' +
            esc(String(row.score)) +
            "%</span></div><div class=\"ege-live-chips\">" +
            items
              .map(function (it) {
                var filled = it.filled !== false && String(it.answer || "").length > 0;
                if (!filled) {
                  return (
                    '<span class="ege-live-chip is-pending">' +
                    esc(it.id) +
                    " · …</span>"
                  );
                }
                return chipHtml(row, it);
              })
              .join("") +
            "</div></div>"
          );
        })
        .join("");

    detail.innerHTML = qBlock + byStudent;
    renderInspect();
  }

  function showPanel(open) {
    var panel = document.getElementById("ege-live-panel");
    if (panel) panel.hidden = !open;
  }

  function showWait(show) {
    var w = document.getElementById("ege-live-wait");
    if (w) w.hidden = !show;
  }

  function showHostFs(show) {
    var fs = document.getElementById("ege-live-host-fs");
    if (!fs) return;
    fs.hidden = !show;
    if (show) {
      document.body.classList.add("ege-live-host-fs-open");
      document.documentElement.classList.add("ege-live-host-fs-open");
      setHostTab(state.hostTab || "board");
      if (state.lastSnap) renderHostBoard(state.lastSnap);
    } else {
      document.body.classList.remove("ege-live-host-fs-open");
      document.documentElement.classList.remove("ege-live-host-fs-open");
    }
  }

  function setHostTab(tab) {
    state.hostTab = tab === "detail" ? "detail" : "board";
    var b1 = document.getElementById("ege-live-tab-board");
    var b2 = document.getElementById("ege-live-tab-detail");
    var p1 = document.getElementById("ege-live-fs-board");
    var p2 = document.getElementById("ege-live-fs-detail");
    if (b1) b1.classList.toggle("is-on", state.hostTab === "board");
    if (b2) b2.classList.toggle("is-on", state.hostTab === "detail");
    if (p1) p1.hidden = state.hostTab !== "board";
    if (p2) p2.hidden = state.hostTab !== "detail";
  }

  function applyStudentPhase(phase) {
    var playing = phase === "playing";
    var ended = phase === "leaderboard";
    var gate = document.getElementById("ege-live-student-gate");
    var joinStep = document.getElementById("ege-live-gate-join");
    var waitStep = document.getElementById("ege-live-gate-wait");
    var fab = document.getElementById("ege-live-fab");

    showPanel(false);
    if (fab) fab.hidden = true;

    if (ended) {
      if (gate) gate.hidden = true;
      showWait(false);
      document.body.classList.add("ege-live-student-playing");
      document.body.classList.remove("ege-live-student-lobby");
      showPodium(true);
      return;
    }

    showPodium(false);

    if (playing) {
      if (gate) gate.hidden = true;
      showWait(false);
      document.body.classList.add("ege-live-student-playing");
      document.body.classList.remove("ege-live-student-lobby");
      return;
    }

    document.body.classList.add("ege-live-student-lobby");
    document.body.classList.remove("ege-live-student-playing");
    if (gate) gate.hidden = false;

    if (state.playerId) {
      if (joinStep) joinStep.hidden = true;
      if (waitStep) waitStep.hidden = false;
    } else {
      if (joinStep) joinStep.hidden = false;
      if (waitStep) waitStep.hidden = true;
    }
  }

  function podiumMedal(i) {
    if (i === 0) return "gold";
    if (i === 1) return "silver";
    if (i === 2) return "bronze";
    return "";
  }

  function renderPodium(snap) {
    var box = document.getElementById("ege-live-podium-stand");
    var list = document.getElementById("ege-live-podium-list");
    if (!box) return;
    var lb = ((snap && snap.leaderboard) || []).filter(function (r) {
      return r.submitted;
    });
    if (!lb.length) {
      box.innerHTML = '<p class="ege-live-muted">Пока никто не отправил ответы.</p>';
      if (list) list.innerHTML = "";
      return;
    }
    var top = lb.slice(0, 3);
    // Visual order: 2nd, 1st, 3rd
    var slots = [];
    if (top[1]) slots.push({ row: top[1], place: 2, medal: "silver" });
    if (top[0]) slots.push({ row: top[0], place: 1, medal: "gold" });
    if (top[2]) slots.push({ row: top[2], place: 3, medal: "bronze" });

    box.innerHTML =
      '<div class="ege-live-podium">' +
      slots
        .map(function (s) {
          return (
            '<div class="ege-live-podium-slot ege-live-podium-slot--' +
            s.medal +
            '">' +
            '<div class="ege-live-podium-avatar">' +
            esc((s.row.displayName || "?").charAt(0).toUpperCase()) +
            "</div>" +
            '<div class="ege-live-podium-name">' +
            esc(s.row.displayName) +
            attemptStarsHtml(s.row.attempts) +
            "</div>" +
            '<div class="ege-live-podium-score">' +
            esc(String(s.row.score)) +
            "%</div>" +
            '<div class="ege-live-podium-block" aria-hidden="true"><span>' +
            s.place +
            "</span></div>" +
            "</div>"
          );
        })
        .join("") +
      "</div>";

    if (list) {
      list.innerHTML =
        '<ol class="ege-live-podium-ol">' +
        lb
          .map(function (row, i) {
            return (
              "<li class=\"" +
              rowToneClass(row) +
              "\"><span>" +
              (i + 1) +
              "</span> <strong>" +
              esc(row.displayName) +
              "</strong> <em>" +
              esc(String(row.score)) +
              "%</em></li>"
            );
          })
          .join("") +
        "</ol>";
    }
  }

  function showPodium(show) {
    var el = document.getElementById("ege-live-podium");
    if (!el) return;
    el.hidden = !show;
    if (show && state.lastSnap) renderPodium(state.lastSnap);
    var hostActs = document.getElementById("ege-live-podium-host-actions");
    var stuActs = document.getElementById("ege-live-podium-student-actions");
    if (hostActs) hostActs.hidden = state.role !== "host";
    if (stuActs) stuActs.hidden = state.role !== "student";
  }

  function showStudentDone(show, info) {
    var el = document.getElementById("ege-live-student-done");
    if (!el) return;
    el.hidden = !show;
    if (show && info) {
      var sc = document.getElementById("ege-live-done-score");
      if (sc) {
        sc.textContent =
          (info.score != null ? info.score : "—") +
          "%" +
          (info.correct != null && info.total
            ? " · " + info.correct + "/" + info.total
            : "");
      }
    }
  }

  function subscribe(code) {
    if (state.unsub) {
      state.unsub();
      state.unsub = null;
    }
    var api = ensureApi();
    state.unsub = api.subscribeRoom(code, function (snap) {
      if (!snap) return;
      state.lastSnap = snap;
      if (state.role === "host") {
        renderLobbyRoster(snap);
        renderHostBoard(snap);
        if (snap.phase === "playing" || snap.phase === "leaderboard") {
          showHostFs(true);
          showPanel(false);
        }
        if (snap.phase === "leaderboard") {
          showPodium(true);
        } else {
          showPodium(false);
        }
        var endBtn = document.getElementById("ege-live-end");
        if (endBtn) endBtn.hidden = snap.phase !== "playing";
      }
      if (state.role === "student") {
        applyStudentPhase(snap.phase);
        // Пьедестал только в конце игры; экран «ответы отправлены» не перекрывает результат
        showStudentDone(false);
      }
    });
  }

  function buildDom() {
    if (document.getElementById("ege-live-root")) return;

    var root = document.createElement("div");
    root.id = "ege-live-root";
    root.className = "ege-live-root";
    root.innerHTML =
      '<button type="button" class="ege-live-fab" id="ege-live-fab" title="Live-комната">Live</button>' +
      '<div id="ege-live-panel" class="ege-live-panel" hidden>' +
      '  <div class="ege-live-panel-head">' +
      "    <strong>Live-комната</strong>" +
      '    <button type="button" class="ege-live-x" id="ege-live-close" aria-label="Закрыть">×</button>' +
      "  </div>" +
      '  <div id="ege-live-host-block">' +
      '    <p class="ege-live-muted">Создайте комнату и отправьте ссылку ученикам. Вы не в списке игроков.</p>' +
      '    <button type="button" class="ege-live-btn ege-live-btn--primary" id="ege-live-create">Создать комнату</button>' +
      '    <button type="button" class="ege-live-btn ege-live-btn--primary" id="ege-live-start" hidden>Старт (на весь экран)</button>' +
      '    <p class="ege-live-code-row" id="ege-live-code-row" hidden>Код: <span id="ege-live-code" class="ege-live-code">—</span></p>' +
      '    <label class="ege-live-label" id="ege-live-link-label" hidden>Ссылка для учеников' +
      '      <input id="ege-live-link" class="ege-live-input" readonly />' +
      "    </label>" +
      '    <button type="button" class="ege-live-btn" id="ege-live-copy" hidden>Скопировать ссылку</button>' +
      '    <p class="ege-live-muted" id="ege-live-file-hint" hidden>Откройте сайт через http://localhost (не file://), иначе ссылка ученикам не откроется.</p>' +
      "  </div>" +
      '  <div id="ege-live-student-block" hidden></div>' +
      '  <p class="ege-live-msg" id="ege-live-msg"></p>' +
      '  <div id="ege-live-roster" class="ege-live-roster"></div>' +
      "</div>" +
      '<div id="ege-live-student-gate" class="ege-live-student-gate" hidden>' +
      '  <div class="ege-live-gate-card">' +
      '    <p class="ege-live-gate-kicker">EGE Live</p>' +
      '    <div id="ege-live-gate-join">' +
      '      <h2 class="ege-live-gate-title">Присоединиться</h2>' +
      '      <p class="ege-live-muted ege-live-gate-lead">Введите имя — задание откроется, когда учитель нажмёт Старт. Если вы уже были на сайте, имя подставится само.</p>' +
      '      <label class="ege-live-label">Ваше имя' +
      '        <input id="ege-live-name" class="ege-live-input ege-live-input--lg" maxlength="40" placeholder="Как вас зовут?" autocomplete="nickname" />' +
      "      </label>" +
      '      <button type="button" class="ege-live-btn ege-live-btn--primary ege-live-btn--lg" id="ege-live-join">Войти в комнату</button>' +
      '      <p class="ege-live-msg" id="ege-live-gate-msg"></p>' +
      '      <p class="ege-live-muted ege-live-gate-code">Комната <span id="ege-live-gate-code">—</span></p>' +
      "    </div>" +
      '    <div id="ege-live-gate-wait" hidden>' +
      '      <div class="ege-live-gate-pulse" aria-hidden="true"></div>' +
      '      <h2 class="ege-live-gate-title">Ждём старта</h2>' +
      '      <p class="ege-live-muted ege-live-gate-lead">Учитель скоро начнёт. Пока можно выдохнуть — задание ещё закрыто.</p>' +
      '      <p class="ege-live-gate-you" id="ege-live-wait-name"></p>' +
      '      <p class="ege-live-muted ege-live-gate-code">Комната <span id="ege-live-wait-code">—</span></p>' +
      '      <button type="button" class="ege-live-btn ege-live-btn--ghost" id="ege-live-change-name">Сменить имя</button>' +
      "    </div>" +
      "  </div>" +
      "</div>" +
      '<div id="ege-live-wait" class="ege-live-wait" hidden></div>' +
      '<div id="ege-live-host-fs" class="ege-live-host-fs" hidden>' +
      '  <div class="ege-live-host-fs-inner">' +
      '    <header class="ege-live-host-fs-head">' +
      "      <div>" +
      "        <h2>Live · учитель</h2>" +
      '        <p class="ege-live-muted" id="ege-live-fs-meta"></p>' +
      "      </div>" +
      '      <div class="ege-live-host-fs-actions">' +
      '        <button type="button" class="ege-live-btn ege-live-btn--warn" id="ege-live-end" hidden>Завершить игру</button>' +
      '        <button type="button" class="ege-live-btn" id="ege-live-fs-copy">Ссылка</button>' +
      '        <button type="button" class="ege-live-btn" id="ege-live-fs-close">Свернуть</button>' +
      "      </div>" +
      "    </header>" +
      '    <div class="ege-live-tabs" role="tablist">' +
      '      <button type="button" class="ege-live-tab is-on" id="ege-live-tab-board" role="tab">Лидерборд</button>' +
      '      <button type="button" class="ege-live-tab" id="ege-live-tab-detail" role="tab">Вопросы</button>' +
      "    </div>" +
      '    <div id="ege-live-fs-board" class="ege-live-fs-pane" role="tabpanel"></div>' +
      '    <div id="ege-live-fs-detail" class="ege-live-fs-pane" role="tabpanel" hidden></div>' +
      '    <section id="ege-live-fs-inspect" class="ege-live-fs-inspect" aria-live="polite">' +
      '      <p class="ege-live-muted">Кликните зелёный или красный ответ ученика — внизу появится текст утверждения для сверки.</p>' +
      "    </section>" +
      "  </div>" +
      "</div>" +
      '<div id="ege-live-student-done" class="ege-live-student-done" hidden>' +
      '  <div class="ege-live-done-card">' +
      '    <p class="ege-live-gate-kicker">Готово</p>' +
      '    <h2 class="ege-live-gate-title">Ответы отправлены</h2>' +
      '    <p class="ege-live-done-score" id="ege-live-done-score">—</p>' +
      '    <p class="ege-live-muted ege-live-gate-lead">Разбор — по желанию. Можно просто ждать итогов класса.</p>' +
      '    <button type="button" class="ege-live-btn ege-live-btn--primary ege-live-btn--lg" id="ege-live-done-hunt">Разбор задания</button>' +
      '    <button type="button" class="ege-live-btn ege-live-btn--lg" id="ege-live-done-restart">Начать заново</button>' +
      "  </div>" +
      "</div>" +
      '<div id="ege-live-podium" class="ege-live-podium-screen" hidden>' +
      '  <div class="ege-live-podium-inner">' +
      '    <p class="ege-live-gate-kicker">Финиш</p>' +
      '    <h2 class="ege-live-gate-title">Пьедестал</h2>' +
      '    <p class="ege-live-muted">Игра завершена</p>' +
      '    <div id="ege-live-podium-stand"></div>' +
      '    <div id="ege-live-podium-list" class="ege-live-podium-list"></div>' +
      '    <div id="ege-live-podium-host-actions" hidden>' +
      '      <button type="button" class="ege-live-btn" id="ege-live-podium-close-host">К панели учителя</button>' +
      "    </div>" +
      '    <div id="ege-live-podium-student-actions" hidden>' +
      '      <button type="button" class="ege-live-btn ege-live-btn--primary ege-live-btn--lg" id="ege-live-podium-hunt">Разбор задания</button>' +
      '      <button type="button" class="ege-live-btn ege-live-btn--lg" id="ege-live-podium-restart">Начать заново</button>' +
      "    </div>" +
      "  </div>" +
      "</div>";

    document.body.appendChild(root);

    document.getElementById("ege-live-host-fs").addEventListener("click", function (ev) {
      var t = ev.target;
      if (!t || !t.closest) return;

      var ans = t.closest("[data-live-player][data-live-item]");
      if (ans) {
        state.inspect = {
          mode: "answer",
          playerId: ans.getAttribute("data-live-player"),
          itemId: ans.getAttribute("data-live-item")
        };
        if (state.lastSnap) renderHostBoard(state.lastSnap);
        else renderInspect();
        var inspectEl = document.getElementById("ege-live-fs-inspect");
        if (inspectEl) inspectEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
        return;
      }

      var q = t.closest("[data-live-q]");
      if (q) {
        state.inspect = {
          mode: "question",
          itemId: q.getAttribute("data-live-q"),
          expected: q.getAttribute("data-live-q-expected")
        };
        if (state.lastSnap) renderHostBoard(state.lastSnap);
        else renderInspect();
        var inspectEl2 = document.getElementById("ege-live-fs-inspect");
        if (inspectEl2) inspectEl2.scrollIntoView({ behavior: "smooth", block: "nearest" });
        return;
      }

      var pl = t.closest("[data-live-pick-player]");
      if (pl) {
        state.inspect = {
          mode: "player",
          playerId: pl.getAttribute("data-live-pick-player"),
          name: pl.getAttribute("data-live-pick-name"),
          score: pl.getAttribute("data-live-pick-score")
        };
        if (state.lastSnap) renderHostBoard(state.lastSnap);
        else renderInspect();
      }
    });

    document.getElementById("ege-live-fab").addEventListener("click", function () {
      if (state.role === "host" && state.lastSnap && (state.lastSnap.phase === "playing" || state.lastSnap.phase === "leaderboard")) {
        showHostFs(true);
        return;
      }
      var panel = document.getElementById("ege-live-panel");
      showPanel(panel && panel.hidden);
    });
    document.getElementById("ege-live-close").addEventListener("click", function () {
      showPanel(false);
    });
    document.getElementById("ege-live-create").addEventListener("click", onCreate);
    document.getElementById("ege-live-start").addEventListener("click", onStart);
    document.getElementById("ege-live-copy").addEventListener("click", onCopy);
    document.getElementById("ege-live-join").addEventListener("click", onJoin);
    var changeNameBtn = document.getElementById("ege-live-change-name");
    if (changeNameBtn) changeNameBtn.addEventListener("click", onChangeName);
    var nameInp = document.getElementById("ege-live-name");
    if (nameInp) {
      nameInp.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter") onJoin();
      });
    }
    document.getElementById("ege-live-tab-board").addEventListener("click", function () {
      setHostTab("board");
    });
    document.getElementById("ege-live-tab-detail").addEventListener("click", function () {
      setHostTab("detail");
    });
    document.getElementById("ege-live-fs-close").addEventListener("click", function () {
      showHostFs(false);
    });
    document.getElementById("ege-live-fs-copy").addEventListener("click", onCopy);
    var endBtn = document.getElementById("ege-live-end");
    if (endBtn) endBtn.addEventListener("click", onEndGame);
    var doneHunt = document.getElementById("ege-live-done-hunt");
    if (doneHunt) {
      doneHunt.addEventListener("click", function () {
        showStudentDone(false);
        if (typeof state.onOpenHunt === "function") state.onOpenHunt();
      });
    }
    var doneRestart = document.getElementById("ege-live-done-restart");
    if (doneRestart) {
      doneRestart.addEventListener("click", function () {
        showStudentDone(false);
        if (typeof state.onRestart === "function") state.onRestart();
      });
    }
    var podClose = document.getElementById("ege-live-podium-close-host");
    if (podClose) {
      podClose.addEventListener("click", function () {
        showPodium(false);
      });
    }
    var podHunt = document.getElementById("ege-live-podium-hunt");
    if (podHunt) {
      podHunt.addEventListener("click", function () {
        showPodium(false);
        if (typeof state.onOpenHunt === "function") state.onOpenHunt();
      });
    }
    var podRestart = document.getElementById("ege-live-podium-restart");
    if (podRestart) {
      podRestart.addEventListener("click", function () {
        showPodium(false);
        if (typeof state.onRestart === "function") state.onRestart();
      });
    }
  }

  function onEndGame() {
    if (!state.roomCode || !state.hostToken) return;
    ensureApi()
      .setPhase({ roomCode: state.roomCode, hostToken: state.hostToken, phase: "leaderboard" })
      .then(function () {
        showPodium(true);
      })
      .catch(function () {});
  }

  function onCreate() {
    var msg = document.getElementById("ege-live-msg");
    setMsg(msg, "Создаём…", null);
    try {
      ensureApi();
    } catch (e) {
      setMsg(msg, (e && e.message) || "API не загружен", false);
      return;
    }
    ensureApi()
      .createRoom({ deckId: deckId(), hostDisplayName: "Teacher" })
      .then(function (res) {
        state.roomCode = res.roomCode;
        state.hostToken = res.hostToken;
        state.role = "host";
        state.playerId = "";
        try {
          sessionStorage.setItem(SS_ROOM, state.roomCode);
          sessionStorage.setItem(SS_HOST, state.hostToken);
          sessionStorage.setItem(SS_ROLE, "host");
          sessionStorage.removeItem(SS_PLAYER);
        } catch (e2) {}

        document.getElementById("ege-live-code").textContent = state.roomCode;
        document.getElementById("ege-live-code-row").hidden = false;
        document.getElementById("ege-live-link-label").hidden = false;
        var link = studentLink(state.roomCode);
        document.getElementById("ege-live-link").value = link;
        document.getElementById("ege-live-copy").hidden = false;
        document.getElementById("ege-live-start").hidden = false;
        document.getElementById("ege-live-student-block").hidden = true;
        var hint = document.getElementById("ege-live-file-hint");
        if (hint) {
          hint.hidden = false;
          hint.textContent =
            location.protocol === "file:"
              ? "Откройте сами: http://127.0.0.1:8787" +
                deckPathHint() +
                " (не file://). Ссылка ученику уже http."
              : "Ученик открывает скопированную http-ссылку. Нужен npm run live:rooms.";
        }
        setMsg(msg, "Комната создана. Скопируйте ссылку ученикам, затем Старт.", true);
        subscribe(state.roomCode);
      })
      .catch(function (err) {
        setMsg(
          msg,
          (err && err.message) ||
            "Не удалось создать. Запущен ли сервер? npm run live:rooms",
          false
        );
      });
  }

  function onStart() {
    var msg = document.getElementById("ege-live-msg");
    if (!state.roomCode || !state.hostToken) {
      setMsg(msg, "Сначала создайте комнату", false);
      return;
    }
    ensureApi()
      .setPhase({ roomCode: state.roomCode, hostToken: state.hostToken, phase: "playing" })
      .then(function () {
        setMsg(msg, "Игра началась!", true);
        showHostFs(true);
        showPanel(false);
        var endBtn = document.getElementById("ege-live-end");
        if (endBtn) endBtn.hidden = false;
      })
      .catch(function (err) {
        setMsg(msg, (err && err.message) || "Не удалось стартовать", false);
      });
  }

  function onCopy() {
    var inp = document.getElementById("ege-live-link");
    var msg = document.getElementById("ege-live-msg");
    var text = (inp && inp.value) || (state.roomCode ? studentLink(state.roomCode) : "");
    if (!text) return;
    if (inp) inp.value = text;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () {
          setMsg(msg, "Ссылка скопирована", true);
        },
        function () {
          if (inp) inp.select();
          setMsg(msg, "Скопируйте ссылку вручную (Ctrl+C)", null);
        }
      );
    } else if (inp) {
      inp.select();
      setMsg(msg, "Скопируйте ссылку вручную (Ctrl+C)", null);
    }
  }

  function onJoin() {
    var msg = document.getElementById("ege-live-gate-msg") || document.getElementById("ege-live-msg");
    var nameEl = document.getElementById("ege-live-name");
    var name = (nameEl && nameEl.value.trim()) || "";
    if (!name) {
      setMsg(msg, "Введите имя", false);
      return;
    }
    var code = state.roomCode || (qs().get("room") || "").toUpperCase().trim();
    if (!code) {
      setMsg(msg, "Нет кода комнаты", false);
      return;
    }
    try {
      ensureApi();
    } catch (e) {
      setMsg(msg, (e && e.message) || "API не загружен", false);
      return;
    }
    setMsg(msg, "Входим…", null);
    ensureApi()
      .joinRoom({ roomCode: code, displayName: name })
      .then(function (res) {
        state.roomCode = code;
        state.playerId = res.playerId;
        state.role = "student";
        persistPlayerName(name);
        try {
          sessionStorage.setItem(SS_ROOM, code);
          sessionStorage.setItem(SS_PLAYER, res.playerId);
          sessionStorage.setItem(SS_ROLE, "student");
          sessionStorage.setItem(SS_NAME, name);
        } catch (e2) {}
        var waitCode = document.getElementById("ege-live-wait-code");
        if (waitCode) waitCode.textContent = code;
        var waitName = document.getElementById("ege-live-wait-name");
        if (waitName) waitName.textContent = "Вы в комнате как " + name;
        applyStudentPhase((state.lastSnap && state.lastSnap.phase) || "lobby");
        subscribe(code);
      })
      .catch(function (err) {
        setMsg(
          msg,
          (err && err.message) ||
            "Не удалось войти. Проверьте код и что сервер запущен.",
          false
        );
      });
  }

  function notifyProgress(info) {
    info = info || {};
    if (state.role !== "student" || !state.roomCode || !state.playerId) return;
    var draft = info.draft === true;
    var score =
      info.score != null
        ? Number(info.score)
        : info.correct != null && info.total
          ? Math.round((Number(info.correct) / Number(info.total)) * 100)
          : 0;
    if (isNaN(score)) score = 0;
    var payload = {
      roomCode: state.roomCode,
      playerId: state.playerId,
      cardId: deckId(),
      text: String(info.correct != null ? info.correct + "/" + info.total : score),
      correct: Number(info.correct) === Number(info.total),
      score: Math.max(0, Math.min(100, Math.round(score))),
      draft: draft
    };
    if (Array.isArray(info.items)) payload.items = info.items;
    try {
      ensureApi()
        .submitAnswer(payload)
        .catch(function () {});
    } catch (e) {}
  }

  function mount(opts) {
    opts = opts || {};
    state.opts = opts;
    state.deckPrefix = String(opts.deckPrefix || "ege");
    if (typeof opts.getUnitId === "function") state.getUnitId = opts.getUnitId;
    if (typeof opts.getUnitData === "function") state.getUnitData = opts.getUnitData;
    if (typeof opts.onOpenHunt === "function") state.onOpenHunt = opts.onOpenHunt;
    if (typeof opts.onRestart === "function") state.onRestart = opts.onRestart;

    buildDom();

    var roomParam = (qs().get("room") || "").toUpperCase().trim();
    if (roomParam) {
      state.roomCode = roomParam;
      state.role = "student";
      state.playerId = "";
      var gateCode = document.getElementById("ege-live-gate-code");
      if (gateCode) gateCode.textContent = roomParam;
      var waitCode = document.getElementById("ege-live-wait-code");
      if (waitCode) waitCode.textContent = roomParam;

      var savedName = readSavedPlayerName();
      fillNameInput(savedName);

      var sameRoom = false;
      var ssPlayer = "";
      try {
        sameRoom = (sessionStorage.getItem(SS_ROOM) || "").toUpperCase() === roomParam;
        ssPlayer = sessionStorage.getItem(SS_PLAYER) || "";
      } catch (eSs) {}

      applyStudentPhase("lobby");

      if (sameRoom && ssPlayer && savedName) {
        // Same tab / refresh: restore membership without a second join form
        state.playerId = ssPlayer;
        var waitName = document.getElementById("ege-live-wait-name");
        if (waitName) waitName.textContent = "Вы в комнате как " + savedName;
        applyStudentPhase((state.lastSnap && state.lastSnap.phase) || "lobby");
        subscribe(roomParam);
      } else if (savedName) {
        // Returning visitor: join under saved name without asking again
        onJoin();
      }
    } else if (qs().get("live_host") === "1") {
      showPanel(true);
    }
  }

  W.EgeLiveRoom = {
    mount: mount,
    notifyProgress: notifyProgress,
    studentLink: studentLink,
    showStudentDone: showStudentDone,
    showPodium: showPodium,
    isLiveStudent: function () {
      return state.role === "student" && !!state.playerId;
    },
    getState: function () {
      return {
        roomCode: state.roomCode,
        role: state.role,
        playerId: state.playerId,
        phase: state.lastSnap && state.lastSnap.phase
      };
    }
  };
})(typeof window !== "undefined" ? window : this);
