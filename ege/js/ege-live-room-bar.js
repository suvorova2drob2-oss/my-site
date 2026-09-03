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
  var SS_REPLACE = "egeLiveReplacePlayerId";

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
    opts: null,
    podiumDismissed: false,
    expandedPlayerId: ""
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
    var code = String(roomCode || "")
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 12);
    var unit = "";
    try {
      unit = String(state.getUnitId() || "").trim();
    } catch (e) {}

    var origin = String(W.__EGE_LIVE_PUBLIC_ORIGIN__ || "").replace(/\/$/, "");
    if (!origin) {
      try {
        if (location.protocol === "http:" || location.protocol === "https:") {
          origin = location.protocol + "//" + location.host;
        }
      } catch (eO) {}
    }
    if (!origin) origin = "http://127.0.0.1:8787";

    var path = deckPathHint();
    if (!/\.html(?:$|\?)/i.test(path)) {
      path = DECK_PATH_HINTS[state.deckPrefix] || "/ege/ege-listening-matching.html";
    }
    if (path.charAt(0) !== "/") path = "/" + path;

    // Build explicitly so ?room= is never dropped / truncated by URL quirks
    var link = origin + path + "?room=" + encodeURIComponent(code);
    if (unit) link += "&unit=" + encodeURIComponent(unit);
    return link;
  }

  function applyInviteLink(link, roomCode) {
    // Prefer link built from the page the teacher actually opened (local vs VPS).
    // Server studentUrl can point at the wrong host if PUBLIC_ORIGIN is stale.
    var finalLink = String(studentLink(roomCode) || "")
      .trim()
      .replace(/\s+/g, "");
    if (!finalLink || finalLink.indexOf("room=") < 0) {
      finalLink = String(link || "")
        .trim()
        .replace(/\s+/g, "");
    }
    var inp = document.getElementById("ege-live-link");
    if (inp) {
      inp.value = finalLink;
    }
    var preview = document.getElementById("ege-live-link-preview");
    if (preview) {
      preview.innerHTML =
        '<a href="' +
        esc(finalLink) +
        '" target="_blank" rel="noopener">' +
        esc(finalLink) +
        "</a>";
      preview.hidden = false;
    }
    var wrap = document.getElementById("ege-live-link-label");
    if (wrap) wrap.hidden = false;
    var copyBtn = document.getElementById("ege-live-copy");
    if (copyBtn) copyBtn.hidden = false;
    var hint = document.getElementById("ege-live-file-hint");
    if (hint) hint.hidden = false;
    return finalLink;
  }

  function copyText(text, msg) {
    var clean = String(text || "").trim().replace(/\s+/g, "");
    if (!clean) return;
    var inp = document.getElementById("ege-live-link");
    if (inp) inp.value = clean;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(clean).then(
        function () {
          setMsg(msg, "Скопировано! Вставьте в чат ученикам (Ctrl+V)", true);
        },
        function () {
          fallbackCopy(clean, msg);
        }
      );
    } else {
      fallbackCopy(clean, msg);
    }
  }

  function fallbackCopy(text, msg) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "readonly");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setMsg(msg, "Скопировано! Вставьте в чат ученикам (Ctrl+V)", true);
    } catch (e) {
      setMsg(msg, "Не удалось скопировать — нажмите на синюю ссылку и скопируйте вручную", false);
    }
  }

  function fillStudentLink(roomCode) {
    return applyInviteLink(studentLink(roomCode), roomCode);
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
    // Lock current seat so «Войти» renames in place (never a second player)
    var keepId = state.playerId || "";
    try {
      if (!keepId) keepId = sessionStorage.getItem(SS_PLAYER) || "";
      if (keepId) {
        sessionStorage.setItem(SS_REPLACE, keepId);
        sessionStorage.setItem(SS_PLAYER, keepId);
      }
    } catch (eR) {}
    if (keepId) state.playerId = keepId;
    state.role = "student";

    var joinStep = document.getElementById("ege-live-gate-join");
    var waitStep = document.getElementById("ege-live-gate-wait");
    if (joinStep) joinStep.hidden = false;
    if (waitStep) waitStep.hidden = true;
    fillNameInput(readSavedPlayerName() || "");
    var nameEl = document.getElementById("ege-live-name");
    if (nameEl) {
      try {
        nameEl.focus();
        nameEl.select();
      } catch (e3) {}
    }
    var msg = document.getElementById("ege-live-gate-msg");
    setMsg(msg, "Введите новое имя и нажмите «Войти в комнату»", null);
  }

  function applyRenamedIdentity(res, code, name) {
    state.roomCode = code;
    state.playerId = res.playerId;
    state.role = "student";
    persistPlayerName(name);
    try {
      sessionStorage.setItem(SS_ROOM, code);
      sessionStorage.setItem(SS_PLAYER, res.playerId);
      sessionStorage.setItem(SS_ROLE, "student");
      sessionStorage.setItem(SS_NAME, name);
      sessionStorage.removeItem(SS_REPLACE);
    } catch (e2) {}
    var waitCode = document.getElementById("ege-live-wait-code");
    if (waitCode) waitCode.textContent = code;
    var waitName = document.getElementById("ege-live-wait-name");
    if (waitName) waitName.textContent = "Вы в комнате как " + name;
    applyStudentPhase((state.lastSnap && state.lastSnap.phase) || "lobby");
    applyUnitLocks();
    if (!state.unsub) subscribe(code);
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

  /** Never show [object Object] — coerce option objects to text. */
  function asPlainText(v) {
    if (v == null) return "";
    if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") {
      return String(v);
    }
    if (typeof v === "object") {
      if (v.text != null) return String(v.text);
      if (v.label != null) return String(v.label);
      if (v.title != null) return String(v.title);
      return "";
    }
    return String(v);
  }

  /** Human label for short codes (TFNS / generic). */
  function prettyAnswerCode(raw) {
    var c = asPlainText(raw).trim();
    if (!c) return "";
    if (c === "[object Object]") return "";
    var low = c.toLowerCase();
    if (low === "t" || low === "true" || low === "+") return "True (+)";
    if (low === "f" || low === "false" || low === "-" || low === "−") return "False (−)";
    if (low === "ns" || low === "not stated" || low === "?" || low === "notstated") {
      return "Not stated (?)";
    }
    return c;
  }

  function detailForValue(code, explicitText) {
    var pretty = prettyAnswerCode(code);
    var text = asPlainText(explicitText).trim();
    if (text === "[object Object]") text = "";
    if (!text) text = statementText(code);
    if (
      text &&
      (text === String(code) ||
        text === pretty ||
        text.toLowerCase() === String(code || "").toLowerCase())
    ) {
      text = "";
    }
    // If answerText already contains "1) Full option", use it as the title
    if (text && pretty && text.indexOf(pretty) === 0) {
      return { title: text, body: "" };
    }
    if (text && pretty && text.length > pretty.length) {
      return { title: text, body: "" };
    }
    if (!pretty && !text) return { title: "—", body: "" };
    if (!pretty) return { title: text, body: "" };
    return { title: pretty, body: text };
  }

  function answerCompareHtml(it) {
    var student = detailForValue(it.answer, it.answerText);
    var key = detailForValue(it.expected, it.expectedText);
    if (it.correct) {
      return (
        '<div class="ege-live-inspect-cols ege-live-inspect-cols--ok">' +
        '<div class="ege-live-inspect-block is-ok-only">' +
        '<p class="ege-live-inspect-label">Student answered correctly</p>' +
        '<p class="ege-live-inspect-choice">' +
        esc(student.title || key.title || "—") +
        "</p>" +
        (student.body || key.body
          ? '<p class="ege-live-inspect-text">' + esc(student.body || key.body) + "</p>"
          : "") +
        "</div></div>"
      );
    }
    return (
      '<div class="ege-live-inspect-cols">' +
      '<div class="ege-live-inspect-block">' +
      '<p class="ege-live-inspect-label">Student answered</p>' +
      '<p class="ege-live-inspect-choice is-bad-choice">' +
      esc(student.title || "—") +
      "</p>" +
      (student.body ? '<p class="ege-live-inspect-text">' + esc(student.body) + "</p>" : "") +
      "</div>" +
      '<div class="ege-live-inspect-block is-key">' +
      '<p class="ege-live-inspect-label">Correct answer</p>' +
      '<p class="ege-live-inspect-choice is-ok-choice">' +
      esc(key.title || "—") +
      "</p>" +
      (key.body ? '<p class="ege-live-inspect-text">' + esc(key.body) + "</p>" : "") +
      "</div></div>"
    );
  }

  function chipHtml(row, it) {
    var selected =
      state.inspect &&
      state.inspect.mode === "answer" &&
      state.inspect.playerId === row.playerId &&
      state.inspect.itemId === it.id;
    var ansShow = prettyAnswerCode(it.answer) || it.answer || "";
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
      (ansShow ? " · " + esc(ansShow) : "") +
      "</button>"
    );
  }

  function promptForItem(it) {
    var p = String((it && it.prompt) || "").trim();
    if (p) return p;
    var unit = getUnitSafe();
    if (!unit) return "";
    var id = String((it && it.id) || "");
    var i;
    if (Array.isArray(unit.bankLines)) {
      for (i = 0; i < unit.bankLines.length; i++) {
        if (String(unit.bankLines[i].id) === id) {
          return String(unit.bankLines[i].text || "").trim();
        }
      }
    }
    if (Array.isArray(unit.statements)) {
      for (i = 0; i < unit.statements.length; i++) {
        var st = unit.statements[i];
        if (String(st.letter || st.num || st.id) === id) {
          return String(st.text || "").trim();
        }
      }
    }
    return "";
  }

  /** Full teacher row: sentence + student answer + key (or green if correct). */
  function answerItemHtml(row, it) {
    var filled = it.filled !== false && String(it.answer || "").length > 0;
    var selected =
      state.inspect &&
      state.inspect.mode === "answer" &&
      state.inspect.playerId === row.playerId &&
      state.inspect.itemId === it.id;
    var prompt = promptForItem(it);
    var title = it.label || it.id || "";
    if (!filled) {
      return (
        '<button type="button" class="ege-live-ans-row is-pending' +
        (selected ? " is-selected" : "") +
        '" data-live-player="' +
        esc(row.playerId) +
        '" data-live-item="' +
        esc(it.id) +
        '">' +
        '<div class="ege-live-ans-row-head"><strong>' +
        esc(title) +
        "</strong><span>…</span></div>" +
        (prompt ? '<p class="ege-live-ans-prompt">' + esc(prompt) + "</p>" : "") +
        '<p class="ege-live-muted">Пока нет ответа</p></button>'
      );
    }
    var student = detailForValue(it.answer, it.answerText);
    var key = detailForValue(it.expected, it.expectedText);
    if (it.correct) {
      return (
        '<button type="button" class="ege-live-ans-row is-ok' +
        (selected ? " is-selected" : "") +
        '" data-live-player="' +
        esc(row.playerId) +
        '" data-live-item="' +
        esc(it.id) +
        '">' +
        '<div class="ege-live-ans-row-head"><strong>' +
        esc(title) +
        '</strong><span class="ege-live-ans-badge">correct ✓</span></div>' +
        (prompt ? '<p class="ege-live-ans-prompt">' + esc(prompt) + "</p>" : "") +
        '<p class="ege-live-ans-line is-ok-line"><span>Student</span> ' +
        esc(student.title || key.title || "—") +
        "</p></button>"
      );
    }
    return (
      '<button type="button" class="ege-live-ans-row is-bad' +
      (selected ? " is-selected" : "") +
      '" data-live-player="' +
      esc(row.playerId) +
      '" data-live-item="' +
      esc(it.id) +
      '">' +
      '<div class="ege-live-ans-row-head"><strong>' +
      esc(title) +
      '</strong><span class="ege-live-ans-badge">wrong ✗</span></div>' +
      (prompt ? '<p class="ege-live-ans-prompt">' + esc(prompt) + "</p>" : "") +
      '<p class="ege-live-ans-line is-bad-line"><span>Student</span> ' +
      esc(student.title || "—") +
      "</p>" +
      (student.body ? '<p class="ege-live-ans-extra">' + esc(student.body) + "</p>" : "") +
      '<p class="ege-live-ans-line is-ok-line"><span>Correct</span> ' +
      esc(key.title || "—") +
      "</p>" +
      (key.body ? '<p class="ege-live-ans-extra">' + esc(key.body) + "</p>" : "") +
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
        var itemTitle = it.label || it.id || "";
        var prompt = promptForItem(it);
        focusHtml =
          '<div class="ege-live-inspect-card ' +
          tone +
          '">' +
          '<div class="ege-live-inspect-head">' +
          "<strong>" +
          esc(row.displayName) +
          "</strong> · " +
          esc(itemTitle) +
          ' <span class="ege-live-inspect-badge">' +
          (it.correct ? "correct ✓" : "wrong ✗") +
          "</span></div>" +
          (prompt ? '<p class="ege-live-ans-prompt">' + esc(prompt) + "</p>" : "") +
          answerCompareHtml(it) +
          "</div>";
      }
    } else if (sel && sel.mode === "question") {
      highlight.push(sel.expected);
      var qKey = detailForValue(sel.expected, "");
      focusHtml =
        '<div class="ege-live-inspect-card">' +
        '<div class="ege-live-inspect-head"><strong>' +
        esc(sel.itemId) +
        "</strong> · правильный ответ</div>" +
        '<p class="ege-live-inspect-choice is-ok-choice">' +
        esc(qKey.title || "—") +
        "</p>" +
        (qKey.body
          ? '<p class="ege-live-inspect-text">«' + esc(qKey.body) + "»</p>"
          : "") +
        "</div>";
    } else if (sel && sel.mode === "player") {
      focusHtml =
        '<div class="ege-live-inspect-card"><div class="ege-live-inspect-head"><strong>' +
        esc(sel.name || "Ученик") +
        "</strong> · " +
        esc(String(sel.score != null ? sel.score : "—")) +
        "%</div>" +
        '<p class="ege-live-muted">Кликните зелёный или красный ответ ученика — сверка появится здесь.</p></div>';
    }

    box.innerHTML =
      focusHtml ||
      '<p class="ege-live-muted ege-live-inspect-hint">Click a student answer below to compare Student vs Correct here.</p>';
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
      board.innerHTML = '<p class="ege-live-muted">No students yet.</p>';
      detail.innerHTML = '<p class="ege-live-muted">Student answers will appear here.</p>';
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

    var byStudent =
      '<h3 class="ege-live-bank-title">Student answers</h3>' +
      lb
        .map(function (row) {
          var items = Array.isArray(row.items) ? row.items : [];
          var open = state.expandedPlayerId === row.playerId;
          var head =
            '<button type="button" class="ege-live-fs-student-head ege-live-fs-student-toggle" data-live-expand="' +
            esc(row.playerId) +
            '" aria-expanded="' +
            (open ? "true" : "false") +
            '"><span class="ege-live-expand-ico" aria-hidden="true">' +
            (open ? "▾" : "▸") +
            "</span><strong>" +
            esc(row.displayName) +
            "</strong>" +
            attemptStarsHtml(row.attempts) +
            (row.submitted ? "" : ' <em class="ege-live-live-tag">live</em>') +
            '<span class="ege-live-score ' +
            (row.correctCount === row.totalCount && row.submitted ? "is-ok" : "is-bad") +
            '">' +
            esc(String(row.score)) +
            "%</span></button>";
          if (!items.length) {
            return (
              '<div class="ege-live-fs-student is-pending' +
              (open ? " is-open" : "") +
              '">' +
              head +
              (open
                ? '<p class="ege-live-muted ege-live-ans-empty">No answers yet.</p>'
                : "") +
              "</div>"
            );
          }
          return (
            '<div class="ege-live-fs-student ' +
            rowToneClass(row) +
            (open ? " is-open" : "") +
            '">' +
            head +
            (open
              ? '<div class="ege-live-ans-list">' +
                items
                  .map(function (it) {
                    return answerItemHtml(row, it);
                  })
                  .join("") +
                "</div>"
              : "") +
            "</div>"
          );
        })
        .join("");

    detail.innerHTML = byStudent;
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
      // Hide dictionary word tips floating over the teacher board
      document.querySelectorAll('[id$="-wtip"], .ege-lm-sh-wtip, .ege-mh-wtip').forEach(function (el) {
        el.hidden = true;
      });
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

    showPanel(false);

    if (ended) {
      if (gate) gate.hidden = true;
      showWait(false);
      document.body.classList.add("ege-live-student-playing");
      document.body.classList.remove("ege-live-student-lobby");
      if (!state.podiumDismissed) showPodium(true);
      return;
    }

    showPodium(false);
    state.podiumDismissed = false;

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
    var all = (snap && snap.leaderboard) || [];
    var lb = all.filter(function (r) {
      return r.submitted;
    });
    // If teacher ended early, still show anyone with progress
    if (!lb.length) {
      lb = all.filter(function (r) {
        return Number(r.score) > 0 || (Array.isArray(r.items) && r.items.length);
      });
    }
    if (!lb.length) lb = all.slice();
    if (!lb.length) {
      box.innerHTML = '<p class="ege-live-muted">No final scores yet.</p>';
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
            var open = state.expandedPlayerId === row.playerId;
            var items = Array.isArray(row.items) ? row.items : [];
            return (
              '<li class="ege-live-podium-li ' +
              rowToneClass(row) +
              (open ? " is-open" : "") +
              '">' +
              '<button type="button" class="ege-live-podium-li-toggle" data-live-expand="' +
              esc(row.playerId) +
              '" aria-expanded="' +
              (open ? "true" : "false") +
              '"><span class="ege-live-expand-ico" aria-hidden="true">' +
              (open ? "▾" : "▸") +
              '</span><span class="ege-live-podium-li-rank">' +
              (i + 1) +
              "</span> <strong>" +
              esc(row.displayName) +
              "</strong><em>" +
              esc(String(row.score)) +
              "%</em></button>" +
              (open
                ? '<div class="ege-live-ans-list ege-live-ans-list--podium">' +
                  (items.length
                    ? items
                        .map(function (it) {
                          return answerItemHtml(row, it);
                        })
                        .join("")
                    : '<p class="ege-live-muted">No answers.</p>') +
                  "</div>"
                : "") +
              "</li>"
            );
          })
          .join("") +
        "</ol>";
    }
  }

  function showPodium(show) {
    var el = document.getElementById("ege-live-podium");
    if (!el) return;
    if (show) {
      state.podiumDismissed = false;
      el.hidden = false;
      document.body.classList.add("ege-live-podium-open");
      document.querySelectorAll('[id$="-wtip"], .ege-lm-sh-wtip, .ege-mh-wtip').forEach(function (tip) {
        tip.hidden = true;
      });
      if (state.lastSnap) renderPodium(state.lastSnap);
      // Keep podium above the host board
      showHostFs(false);
    } else {
      el.hidden = true;
      document.body.classList.remove("ege-live-podium-open");
    }
    var hostActs = document.getElementById("ege-live-podium-host-actions");
    var stuActs = document.getElementById("ege-live-podium-student-actions");
    if (hostActs) hostActs.hidden = state.role !== "host";
    if (stuActs) stuActs.hidden = state.role !== "student";
  }

  function dismissPodium() {
    state.podiumDismissed = true;
    var el = document.getElementById("ege-live-podium");
    if (el) el.hidden = true;
    document.body.classList.remove("ege-live-podium-open");
  }

  function resetHostPanelUi() {
    var createBtn = document.getElementById("ege-live-create");
    var startBtn = document.getElementById("ege-live-start");
    var codeRow = document.getElementById("ege-live-code-row");
    var linkLabel = document.getElementById("ege-live-link-label");
    var codeEl = document.getElementById("ege-live-code");
    var linkInp = document.getElementById("ege-live-link");
    var preview = document.getElementById("ege-live-link-preview");
    var copyBtn = document.getElementById("ege-live-copy");
    var fileHint = document.getElementById("ege-live-file-hint");
    var msg = document.getElementById("ege-live-msg");
    var roster = document.getElementById("ege-live-roster");
    var hostBlock = document.getElementById("ege-live-host-block");
    var stuBlock = document.getElementById("ege-live-student-block");
    if (createBtn) createBtn.hidden = false;
    if (startBtn) startBtn.hidden = true;
    if (codeRow) codeRow.hidden = true;
    if (linkLabel) linkLabel.hidden = true;
    if (codeEl) codeEl.textContent = "—";
    if (linkInp) linkInp.value = "";
    if (preview) {
      preview.innerHTML = "";
      preview.hidden = true;
    }
    if (copyBtn) copyBtn.hidden = true;
    if (fileHint) fileHint.hidden = true;
    if (msg) {
      msg.textContent = "";
      msg.className = "ege-live-msg";
    }
    if (roster) roster.innerHTML = "";
    if (hostBlock) hostBlock.hidden = false;
    if (stuBlock) stuBlock.hidden = true;
  }

  function showLiveFab() {
    var fab = document.getElementById("ege-live-fab");
    if (!fab) return;
    fab.hidden = false;
    fab.removeAttribute("hidden");
    fab.style.display = "";
    fab.classList.add("is-forced-on");
  }

  function clearLiveOverlayClasses() {
    document.body.classList.remove(
      "ege-live-student-playing",
      "ege-live-student-lobby",
      "ege-live-host-fs-open",
      "ege-live-podium-open"
    );
    document.documentElement.classList.remove("ege-live-host-fs-open");
  }

  function exitLiveToProgram() {
    if (state.unsub) {
      try {
        state.unsub();
      } catch (eU) {}
      state.unsub = null;
    }
    state.roomCode = "";
    state.hostToken = "";
    state.playerId = "";
    state.role = "";
    state.lastSnap = null;
    state.expandedPlayerId = "";
    state.podiumDismissed = false;
    state.api = null;
    try {
      sessionStorage.removeItem(SS_ROOM);
      sessionStorage.removeItem(SS_HOST);
      sessionStorage.removeItem(SS_ROLE);
      sessionStorage.removeItem(SS_PLAYER);
      sessionStorage.removeItem(SS_REPLACE);
    } catch (eS) {}

    var podium = document.getElementById("ege-live-podium");
    if (podium) podium.hidden = true;
    var hostFs = document.getElementById("ege-live-host-fs");
    if (hostFs) hostFs.hidden = true;
    showPanel(false);
    showStudentDone(false);
    showWait(false);
    var gate = document.getElementById("ege-live-student-gate");
    if (gate) gate.hidden = true;

    clearLiveOverlayClasses();
    resetHostPanelUi();
    // Room closed — Live button stays so a new room can be created
    showLiveFab();

    try {
      var u = new URL(location.href);
      if (u.searchParams.has("room")) {
        u.searchParams.delete("room");
        history.replaceState({}, "", u.pathname + (u.search || "") + u.hash);
      }
    } catch (eH) {}

    window.scrollTo({ top: 0, behavior: "smooth" });
    applyUnitLocks();
  }

  function onCloseRoomAndExit() {
    var code = state.roomCode;
    var token = state.hostToken;
    var finish = function () {
      exitLiveToProgram();
    };
    if (code && token) {
      try {
        ensureApi()
          .closeRoom({ roomCode: code, hostToken: token })
          .then(finish, finish);
      } catch (e) {
        finish();
      }
    } else {
      finish();
    }
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

  function allPlayersSubmitted(snap) {
    if (!snap) return false;
    if (typeof snap.allSubmitted === "boolean") return snap.allSubmitted;
    var lb = snap.leaderboard || [];
    if (!lb.length) return false;
    for (var i = 0; i < lb.length; i++) {
      if (!lb[i].submitted) return false;
    }
    return true;
  }

  function updateHostFinishUi(snap) {
    var endBtn = document.getElementById("ege-live-end");
    var banner = document.getElementById("ege-live-all-done");
    var playing = snap && snap.phase === "playing";
    var ended = snap && snap.phase === "leaderboard";
    var ready = playing && allPlayersSubmitted(snap);
    if (endBtn) {
      endBtn.hidden = !playing;
      endBtn.classList.toggle("is-ready", !!ready);
      endBtn.textContent = ready ? "End game · Podium" : "End game";
    }
    if (banner) {
      if (ready) {
        banner.hidden = false;
        banner.innerHTML =
          "<strong>Everyone has finished.</strong> Click «End game» to show the podium.";
      } else {
        banner.hidden = true;
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
      if (!snap) {
        // Room closed / gone — return to normal page with Live FAB
        exitLiveToProgram();
        return;
      }
      var prevPhase = state.lastSnap && state.lastSnap.phase;
      state.lastSnap = snap;
      if (prevPhase === "leaderboard" && snap.phase !== "leaderboard") {
        state.podiumDismissed = false;
      }
      if (state.role === "host") {
        renderLobbyRoster(snap);
        renderHostBoard(snap);
        if (snap.phase === "playing") {
          showHostFs(true);
          showPanel(false);
          showPodium(false);
          state.podiumDismissed = false;
        } else if (snap.phase === "leaderboard") {
          showPanel(false);
          if (!state.podiumDismissed) {
            showPodium(true);
          } else {
            showHostFs(true);
          }
        }
        updateHostFinishUi(snap);
      }
      if (state.role === "student") {
        applyStudentPhase(snap.phase);
        if (snap.phase === "leaderboard") {
          showStudentDone(false);
        }
      }
    });
  }

  function buildDom() {
    if (document.getElementById("ege-live-root")) return;

    var root = document.createElement("div");
    root.id = "ege-live-root";
    root.className = "ege-live-root";
    root.innerHTML =
      '<button type="button" class="ege-live-fab" id="ege-live-fab" title="Live classroom">Live</button>' +
      '<div id="ege-live-panel" class="ege-live-panel" hidden>' +
      '  <div class="ege-live-panel-head">' +
      "    <strong>Live classroom</strong>" +
      '    <button type="button" class="ege-live-x" id="ege-live-close" aria-label="Close">×</button>' +
      "  </div>" +
      '  <div id="ege-live-host-block">' +
      '    <p class="ege-live-muted">Create a room, copy the link for students, then press Start. You are not on the leaderboard.</p>' +
      '    <button type="button" class="ege-live-btn ege-live-btn--primary ege-live-btn--lg" id="ege-live-create">Create room</button>' +
      '    <button type="button" class="ege-live-btn ege-live-btn--primary ege-live-btn--lg" id="ege-live-start" hidden>Start</button>' +
      '    <p class="ege-live-code-row" id="ege-live-code-row" hidden>Code: <span id="ege-live-code" class="ege-live-code">—</span></p>' +
      '    <div id="ege-live-link-label" hidden>' +
      '      <p class="ege-live-label">Student link</p>' +
      '      <p class="ege-live-link-preview" id="ege-live-link-preview"></p>' +
      '      <input type="hidden" id="ege-live-link" value="" />' +
      '      <button type="button" class="ege-live-btn ege-live-btn--primary ege-live-btn--lg" id="ege-live-copy">Copy student link</button>' +
      '      <p class="ege-live-muted" id="ege-live-file-hint">Link is copied — paste it in WhatsApp / Telegram.</p>' +
      "    </div>" +
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
      '        <button type="button" class="ege-live-btn ege-live-btn--warn" id="ege-live-end" hidden>End game</button>' +
      '        <button type="button" class="ege-live-btn" id="ege-live-fs-copy">Link</button>' +
      '        <button type="button" class="ege-live-btn" id="ege-live-fs-close">Minimise</button>' +
      "      </div>" +
      "    </header>" +
      '    <div id="ege-live-all-done" class="ege-live-all-done" hidden>' +
      "      <strong>Everyone has finished.</strong> Click «End game» to show the podium." +
      "    </div>" +
      '    <div class="ege-live-tabs" role="tablist">' +
      '      <button type="button" class="ege-live-tab is-on" id="ege-live-tab-board" role="tab">Leaderboard</button>' +
      '      <button type="button" class="ege-live-tab" id="ege-live-tab-detail" role="tab">Answers</button>' +
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
      '    <p class="ege-live-gate-kicker">Done</p>' +
      '    <h2 class="ege-live-gate-title">Answers submitted</h2>' +
      '    <p class="ege-live-done-score" id="ege-live-done-score">—</p>' +
      '    <p class="ege-live-muted ege-live-gate-lead">Wait for the teacher to end the game — then the podium appears.</p>' +
      '    <button type="button" class="ege-live-btn ege-live-btn--primary ege-live-btn--lg" id="ege-live-done-hunt">Review</button>' +
      '    <button type="button" class="ege-live-btn ege-live-btn--lg" id="ege-live-done-restart">Start over</button>' +
      "  </div>" +
      "</div>" +
      '<div id="ege-live-podium" class="ege-live-podium-screen" hidden>' +
      '  <div class="ege-live-podium-inner">' +
      '    <p class="ege-live-gate-kicker">Finish</p>' +
      '    <h2 class="ege-live-gate-title">Podium</h2>' +
      '    <p class="ege-live-muted">Final results</p>' +
      '    <div id="ege-live-podium-stand"></div>' +
      '    <div id="ege-live-podium-list" class="ege-live-podium-list"></div>' +
      '    <div id="ege-live-podium-host-actions" hidden>' +
      '      <button type="button" class="ege-live-btn ege-live-btn--primary ege-live-btn--lg" id="ege-live-podium-close-host">Close room</button>' +
      "    </div>" +
      '    <div id="ege-live-podium-student-actions" hidden>' +
      '      <button type="button" class="ege-live-btn ege-live-btn--primary ege-live-btn--lg" id="ege-live-podium-hunt">Review</button>' +
      "    </div>" +
      "  </div>" +
      "</div>";

    document.body.appendChild(root);

    document.getElementById("ege-live-host-fs").addEventListener("click", function (ev) {
      var t = ev.target;
      if (!t || !t.closest) return;

      var expand = t.closest("[data-live-expand]");
      if (expand) {
        var pid = expand.getAttribute("data-live-expand") || "";
        state.expandedPlayerId = state.expandedPlayerId === pid ? "" : pid;
        if (state.lastSnap) renderHostBoard(state.lastSnap);
        return;
      }

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

    var podiumEl = document.getElementById("ege-live-podium");
    if (podiumEl) {
      podiumEl.addEventListener("click", function (ev) {
        var t = ev.target;
        if (!t || !t.closest) return;
        var expand = t.closest("[data-live-expand]");
        if (expand) {
          var pid = expand.getAttribute("data-live-expand") || "";
          state.expandedPlayerId = state.expandedPlayerId === pid ? "" : pid;
          if (state.lastSnap) renderPodium(state.lastSnap);
          return;
        }
        var ans = t.closest("[data-live-player][data-live-item]");
        if (ans && state.lastSnap) {
          state.inspect = {
            mode: "answer",
            playerId: ans.getAttribute("data-live-player"),
            itemId: ans.getAttribute("data-live-item")
          };
          renderPodium(state.lastSnap);
        }
      });
    }

    document.getElementById("ege-live-fab").addEventListener("click", function () {
      // Active host session → reopen board; otherwise open create/join panel
      if (
        state.role === "host" &&
        state.roomCode &&
        state.lastSnap &&
        (state.lastSnap.phase === "playing" || state.lastSnap.phase === "leaderboard")
      ) {
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
        onCloseRoomAndExit();
      });
    }
    var podHunt = document.getElementById("ege-live-podium-hunt");
    if (podHunt) {
      podHunt.addEventListener("click", function () {
        dismissPodium();
        if (typeof state.onOpenHunt === "function") state.onOpenHunt();
      });
    }
  }

  function onEndGame() {
    if (!state.roomCode || !state.hostToken) return;
    state.podiumDismissed = false;
    ensureApi()
      .setPhase({ roomCode: state.roomCode, hostToken: state.hostToken, phase: "leaderboard" })
      .then(function () {
        if (state.lastSnap) state.lastSnap.phase = "leaderboard";
        showPodium(true);
        updateHostFinishUi(state.lastSnap);
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
      .createRoom({
        deckId: deckId(),
        hostDisplayName: "Teacher",
        requestOrigin: W.location.origin,
        unitId: (function () {
          try {
            return String(state.getUnitId() || "");
          } catch (eU) {
            return "";
          }
        })()
      })
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
        var invite = applyInviteLink(res.studentUrl, state.roomCode);
        document.getElementById("ege-live-start").hidden = false;
        document.getElementById("ege-live-student-block").hidden = true;
        copyText(invite, msg);
        setMsg(msg, "Комната создана. Ссылка уже скопирована — вставьте в чат.", true);
        applyUnitLocks();
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
    var msg = document.getElementById("ege-live-msg");
    var text = applyInviteLink(
      state.roomCode ? studentLink(state.roomCode) : "",
      state.roomCode
    );
    copyText(text, msg);
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

    // Already in the room (or «Сменить имя») → rename / replace seat, never a second player
    var existingId = state.playerId || "";
    var replaceId = "";
    try {
      if (!existingId) existingId = sessionStorage.getItem(SS_PLAYER) || "";
      replaceId = sessionStorage.getItem(SS_REPLACE) || existingId || "";
    } catch (eP) {}
    if (replaceId || (existingId && state.role === "student")) {
      setMsg(msg, "Меняем имя…", null);
      return renameViaApi(code, replaceId || existingId, name, msg);
    }

    setMsg(msg, "Входим…", null);
    ensureApi()
      .joinRoom({
        roomCode: code,
        displayName: name
      })
      .then(function (res) {
        applyRenamedIdentity(res, code, name);
      })
      .catch(function (err) {
        setMsg(
          msg,
          (err && err.message) ||
            "Не удалось войти. Проверьте код и что сервер запущен (http://127.0.0.1:8787).",
          false
        );
      });
  }

  function renameViaApi(code, playerId, name, msg) {
    var api = ensureApi();
    var doRename =
      api.renamePlayer
        ? api.renamePlayer({
            roomCode: code,
            playerId: playerId,
            displayName: name
          })
        : Promise.reject(new Error("no renamePlayer"));

    return doRename
      .then(function (res) {
        applyRenamedIdentity(res, code, name);
        setMsg(msg, "Имя обновлено", true);
      })
      .catch(function () {
        // Fallback: join with replacePlayerId (same seat)
        return api
          .joinRoom({
            roomCode: code,
            displayName: name,
            replacePlayerId: playerId
          })
          .then(function (res) {
            applyRenamedIdentity(res, code, name);
            setMsg(msg, "Имя обновлено", true);
          })
          .catch(function (err2) {
            setMsg(msg, (err2 && err2.message) || "Не удалось сменить имя", false);
          });
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
    } else {
      // Teacher page: clear any leftover Live overlays, keep FAB always
      clearLiveOverlayClasses();
      resetHostPanelUi();
      showLiveFab();
      showPanel(false);
      if (qs().get("live_host") === "1") showPanel(true);
    }
    applyUnitLocks();
  }

  var UNIT_SELECT_IDS = [
    "ege-mh-unit-jump",
    "ege-mcr-unit-jump",
    "ege-tfns-unit-select",
    "ege-lmc-unit-select",
    "ege-lm-unit-select",
    "ege-gt-unit-select",
    "ege-gx-unit-select",
    "ege-lx-unit-select"
  ];

  /** Student invite (?room=) or active host/student session — pack is fixed by the link. */
  function isUnitLocked() {
    try {
      if (qs().get("room")) return true;
    } catch (eR) {}
    return !!(
      state.roomCode &&
      (state.role === "student" || state.role === "host")
    );
  }

  function applyUnitLocks() {
    var locked = isUnitLocked();
    var tip = "В live-комнате юнит зафиксирован ссылкой — менять нельзя";
    var i;
    var sel;
    for (i = 0; i < UNIT_SELECT_IDS.length; i++) {
      sel = document.getElementById(UNIT_SELECT_IDS[i]);
      if (!sel) continue;
      sel.disabled = locked;
      if (locked) sel.setAttribute("title", tip);
      else sel.removeAttribute("title");
    }
  }

  /** Clear line after Submit: correct + wrong counts. */
  function formatScoreLine(ok, total) {
    ok = Math.max(0, Number(ok) || 0);
    total = Math.max(0, Number(total) || 0);
    var wrong = Math.max(0, total - ok);
    var pct = total ? Math.round((100 * ok) / total) : 0;
    return (
      "Результат: правильных " +
      ok +
      ", неправильных " +
      wrong +
      " · " +
      pct +
      "%"
    );
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
    isUnitLocked: isUnitLocked,
    applyUnitLocks: applyUnitLocks,
    formatScoreLine: formatScoreLine,
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
