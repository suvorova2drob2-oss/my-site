/**
 * Tic-tac-toe + gap MCQ — shared engine for class games.
 * mount({ getPool, hintPassageFor?, ids? })
 */
(function (W) {
  "use strict";

  var LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function el(id) {
    return W.document.getElementById(id);
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function parseRosterText(raw) {
    var text = String(raw || "").replace(/^\uFEFF/g, "");
    var out = [];
    var lines = text.split(/\r?\n/);
    var i;
    for (i = 0; i < lines.length; i++) {
      var line = (lines[i] || "").replace(/[,;|·/]/g, ",");
      var parts = line.split(",");
      var j;
      for (j = 0; j < parts.length; j++) {
        var t = (parts[j] || "").replace(/\s+/g, " ").trim();
        if (t) out.push(t);
      }
    }
    return out;
  }

  function shufflePerm(n) {
    var a = [];
    var i;
    for (i = 0; i < n; i++) a.push(i);
    for (i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function shuffleInPlace(a) {
    var i;
    for (i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function buildRoundPool(raw) {
    var base = (raw || []).filter(function (q) {
      return q && (q.gap || q.contextSentence);
    });
    if (!base.length) return { pool: [], unique: 0 };
    base.sort(function (a, b) {
      return String(a.gap || "").localeCompare(String(b.gap || ""));
    });
    var pick = [];
    var i = 0;
    while (pick.length < 9) {
      pick.push(base[i % base.length]);
      i++;
    }
    return { pool: pick, unique: base.length };
  }

  function normType(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[\u2019`´]/g, "'")
      .replace(/\s+/g, " ")
      .trim();
  }

  /**
   * @param {{
   *   getPool: () => object[],
   *   hintPassageFor?: (qu: object) => string,
   *   live?: object,
   *   ids?: Partial<Record<string, string>>
   * }} opts
   */
  function mount(opts) {
    var getPool = opts.getPool;
    if (typeof getPool !== "function") return null;

    var ids = opts.ids || {};
    var hintPassageFor = opts.hintPassageFor || null;
    var live = opts.live || null;
    var suppressPublish = false;

    var S = {
      rosterX: [],
      rosterO: [],
      turnIndexX: 0,
      turnIndexO: 0,
      board: Array(9).fill(""),
      move: 0,
      over: false,
      perm: null,
      activeCell: null,
      qLocked: false,
      pool: [],
      uniqueCount: 0,
      answerMode: "teacher-mcq",
      liveRole: "local",
      pack: "all"
    };

    function publishLive(clearPending) {
      if (suppressPublish || !live || !live.publishState) return;
      if (S.liveRole !== "host") return;
      live.publishState(!!clearPending);
    }

    function poolOk() {
      var built = buildRoundPool(getPool());
      S.pool = built.pool;
      S.uniqueCount = built.unique;
      var meta = el(ids.deckMeta || "tttDeckMeta");
      if (meta) {
        if (!S.uniqueCount) {
          meta.textContent = "No gap questions in this deck.";
        } else {
          meta.textContent =
            S.uniqueCount +
            " unique questions · 9 squares" +
            (S.uniqueCount < 9 ? " (some repeat)." : ".");
        }
      }
      return S.pool.length >= 9;
    }

    function questionForCell(cellIndex) {
      var pi = S.perm[cellIndex];
      return S.pool[pi];
    }

    function formatQ(qu) {
      var raw = String(qu.gap || qu.contextSentence || "").trim();
      if (!raw) return esc(qu.topic || "Question");
      return raw.replace(/_______/g, '<span class="gap">_______</span>');
    }

    function setPlayMode(on) {
      W.document.body.classList.toggle("ttt-body--playing", !!on);
      var setupBlock = el(ids.setupBlock || "tttSetupBlock");
      var game = el(ids.screenGame || "tttScreenGame");
      if (setupBlock) setupBlock.hidden = !!on;
      if (game) {
        game.classList.toggle("is-on", !!on);
        game.setAttribute("aria-hidden", on ? "false" : "true");
      }
    }

    function currentSym() {
      return S.move % 2 === 0 ? "X" : "O";
    }

    function currentRoster() {
      return S.move % 2 === 0 ? S.rosterX : S.rosterO;
    }

    function currentSpeaker() {
      var r = currentRoster();
      if (!r.length) return "?";
      return S.move % 2 === 0
        ? r[S.turnIndexX % r.length]
        : r[S.turnIndexO % r.length];
    }

    function formatLineup(roster, highlightName) {
      return roster
        .map(function (name) {
          var t = esc(name);
          if (name === highlightName) {
            return '<span class="here">' + t + "</span>";
          }
          return "<b>" + t + "</b>";
        })
        .join(" · ");
    }

    function renderRosterPool() {
      var node = el(ids.turnRoster || "tttTurnRoster");
      if (!node) return;
      var sp = currentSpeaker();
      var xLine = formatLineup(S.rosterX, S.move % 2 === 0 ? sp : "");
      var oLine = formatLineup(S.rosterO, S.move % 2 === 1 ? sp : "");
      node.innerHTML =
        "<span><span style='color:var(--ttt-x)'>X</span> " +
        xLine +
        "</span><span><span style='color:var(--ttt-o)'>O</span> " +
        oLine +
        "</span>";
    }

    function renderTurn() {
      if (S.over) return;
      var sp = currentSpeaker();
      var sym = currentSym();
      var kicker = el(ids.turnKicker || "tttTurnKicker");
      var big = el(ids.turnBigName || "tttTurnBigName");
      var symEl = el(ids.turnSym || "tttTurnSym");
      var mark = el(ids.turnMark || "tttTurnMark");
      if (mark) {
        mark.textContent = sym;
        mark.className = "ttt-mark " + (sym === "X" ? "is-x" : "is-o");
      }
      if (kicker) {
        kicker.textContent = sym === "X" ? "Crosses (X)" : "Noughts (O)";
      }
      if (big) {
        big.textContent = sp;
        big.className =
          "ttt-turn-big " + (sym === "X" ? "is-x" : "is-o");
      }
      if (symEl) {
        symEl.textContent =
          S.answerMode === "teacher-judge"
            ? "Pick a square — judge orally (Got it / pass)."
            : S.answerMode.indexOf("student") === 0
              ? "Pick a square — student answers on phone."
              : "Pick a square on the board, then A–D.";
      }
      renderRosterPool();
    }

    function checkWin() {
      var l;
      for (l = 0; l < LINES.length; l++) {
        var a0 = S.board[LINES[l][0]];
        var b0 = S.board[LINES[l][1]];
        var c0 = S.board[LINES[l][2]];
        if (a0 && a0 === b0 && b0 === c0) {
          return { s: a0, line: LINES[l] };
        }
      }
      if (S.board.every(function (x) {
        return x;
      })) {
        return { draw: true };
      }
      return null;
    }

    function clearQPanel() {
      S.activeCell = null;
      S.qLocked = false;
      var head = el(ids.qHead || "tttQHead");
      var meta = el(ids.qMeta || "tttQMeta");
      var text = el(ids.qText || "tttQText");
      var pl = el(ids.qPl || "tttQPl");
      var answers = el(ids.answers || "tttAnswers");
      var judge = el(ids.judgePanel || "tttJudgePanel");
      var hintBtn = el(ids.btnHint || "tttBtnHint");
      var cancelBtn = el(ids.btnCancelCell || "tttBtnCancelCell");
      if (head) head.textContent = "Gap question";
      if (meta) meta.textContent = "";
      if (text) {
        text.hidden = true;
        text.innerHTML = "";
      }
      if (pl) pl.hidden = false;
      if (answers) {
        answers.hidden = true;
        answers.innerHTML = "";
      }
      if (judge) judge.hidden = true;
      if (hintBtn) hintBtn.disabled = true;
      if (cancelBtn) cancelBtn.hidden = true;
    }

    function showJudgePanel() {
      var judge = el(ids.judgePanel || "tttJudgePanel");
      if (judge) judge.hidden = false;
    }

    function showQuestionForCell(cellIndex) {
      S.activeCell = cellIndex;
      S.qLocked = false;
      var qu = questionForCell(cellIndex);
      var sp = currentSpeaker();
      var pl = el(ids.qPl || "tttQPl");
      var text = el(ids.qText || "tttQText");
      var meta = el(ids.qMeta || "tttQMeta");
      var head = el(ids.qHead || "tttQHead");
      var hintBtn = el(ids.btnHint || "tttBtnHint");
      var cancelBtn = el(ids.btnCancelCell || "tttBtnCancelCell");
      var answers = el(ids.answers || "tttAnswers");
      var judge = el(ids.judgePanel || "tttJudgePanel");
      if (pl) pl.hidden = true;
      if (text) {
        text.hidden = false;
        text.innerHTML = formatQ(qu);
      }
      if (meta) {
        meta.textContent =
          "Square " +
          (cellIndex + 1) +
          " · " +
          (qu.topic || qu.pack || "") +
          " · " +
          sp;
      }
      if (answers) {
        answers.hidden = true;
        answers.innerHTML = "";
      }
      if (judge) judge.hidden = true;
      if (S.answerMode === "teacher-judge") {
        if (head) head.textContent = "Judge orally";
        showJudgePanel();
      } else if (
        S.answerMode === "student-mcq" ||
        S.answerMode === "student-type"
      ) {
        if (head) head.textContent = "Waiting for " + sp + "…";
        if (hintBtn) hintBtn.disabled = !hintPassageFor;
        if (cancelBtn) cancelBtn.hidden = false;
        publishLive(false);
        return;
      } else {
        if (head) head.textContent = "Choose A–D";
        if (!answers) return;
        answers.hidden = false;
        answers.innerHTML = "";
        var letters = ["A", "B", "C", "D"];
        var k;
        for (k = 0; k < 4; k++) {
          var b = W.document.createElement("button");
          b.type = "button";
          b.className = "ttt-ans";
          b.setAttribute("data-idx", String(k));
          b.innerHTML =
            '<span class="badge">' +
            letters[k] +
            "</span><span>" +
            esc(qu.opts[k]) +
            "</span>";
          b.addEventListener("click", onPick);
          answers.appendChild(b);
        }
      }
      if (hintBtn) {
        hintBtn.disabled = !hintPassageFor;
        hintBtn.dataset.qindex = String(S.perm[cellIndex]);
      }
      if (cancelBtn) cancelBtn.hidden = false;
      publishLive(false);
    }

    function resolvePick(idx, fromLive) {
      if (S.qLocked || S.over) return;
      var cellI = S.activeCell;
      if (cellI === null) return;
      var qu = questionForCell(cellI);
      S.qLocked = true;
      var wasX = S.move % 2 === 0;
      var sym = currentSym();
      var msg = el(ids.msg || "tttMsg");
      var correct = idx === qu.correct;
      if (correct) {
        W.setTimeout(function () {
          if (wasX) S.turnIndexX++;
          else S.turnIndexO++;
          S.board[cellI] = sym;
          S.move++;
          clearQPanel();
          var r = checkWin();
          if (r && r.s) {
            S.over = true;
            var side = r.s === "X" ? S.rosterX : S.rosterO;
            if (msg) {
              msg.innerHTML =
                "The <strong>" +
                (r.s === "X" ? "crosses" : "noughts") +
                "</strong> win — three in a row! <span style='color:#94a3b8'>(" +
                esc(side.join(", ")) +
                ")</span>";
              msg.className = "ttt-msg win";
            }
            var mark = el(ids.turnMark || "tttTurnMark");
            var kicker = el(ids.turnKicker || "tttTurnKicker");
            var big = el(ids.turnBigName || "tttTurnBigName");
            var symEl = el(ids.turnSym || "tttTurnSym");
            var roster = el(ids.turnRoster || "tttTurnRoster");
            if (mark) {
              mark.textContent = "—";
              mark.className = "ttt-mark";
            }
            if (kicker) kicker.textContent = "Game over";
            if (big) {
              big.textContent = "—";
              big.className = "ttt-turn-big";
            }
            if (symEl) symEl.textContent = "";
            if (roster) roster.innerHTML = "";
          } else if (r && r.draw) {
            S.over = true;
            if (msg) {
              msg.textContent = "It's a draw.";
              msg.className = "ttt-msg draw";
            }
          } else {
            renderTurn();
          }
          buildBoard();
          if (r && r.s && r.line) {
            var ki;
            for (ki = 0; ki < r.line.length; ki++) {
              var c = el(ids.board || "tttBoard").querySelector(
                '[data-i="' + r.line[ki] + '"]'
              );
              if (c) c.classList.add("win");
            }
          }
          publishLive(true);
        }, fromLive ? 0 : 450);
      } else {
        W.setTimeout(function () {
          if (wasX) S.turnIndexX++;
          else S.turnIndexO++;
          S.move++;
          clearQPanel();
          if (!S.over && msg) {
            msg.textContent =
              "Not quite. The go passes to: " +
              currentSpeaker() +
              " (" +
              (currentSym() === "X" ? "crosses" : "noughts") +
              ").";
            msg.className = "ttt-msg";
            W.setTimeout(function () {
              if (!S.over && msg) msg.textContent = "";
            }, 2800);
          }
          renderTurn();
          buildBoard();
          publishLive(true);
        }, fromLive ? 0 : 900);
      }
    }

    function resolveJudge(gotIt) {
      if (S.qLocked || S.over || S.activeCell === null) return;
      if (gotIt) resolvePick(questionForCell(S.activeCell).correct, true);
      else resolvePick(-1, true);
    }

    function onPick(e) {
      if (S.qLocked || S.over) return;
      var idx = parseInt(e.currentTarget.getAttribute("data-idx"), 10);
      var qu = questionForCell(S.activeCell);
      if (idx === qu.correct) e.currentTarget.classList.add("correct");
      else e.currentTarget.classList.add("wrong-pick");
      resolvePick(idx, false);
    }

    function buildBoard() {
      var b = el(ids.board || "tttBoard");
      if (!b) return;
      b.innerHTML = "";
      var hidePick = S.activeCell !== null && !S.over;
      var i;
      for (i = 0; i < 9; i++) {
        var c = W.document.createElement("button");
        c.type = "button";
        var cls = "ttt-cell";
        if (S.board[i]) {
          cls += " " + S.board[i].toLowerCase() + " ttt-cell--taken";
        }
        if (hidePick && S.board[i] === "" && i !== S.activeCell) {
          cls += " dim";
        }
        if (S.activeCell === i && !S.board[i]) {
          cls += " ttt-cell--active";
        }
        c.className = cls;
        if (S.board[i]) {
          c.textContent = S.board[i];
        } else {
          c.innerHTML =
            '<span class="ttt-cell-num">' + String(i + 1) + "</span>";
        }
        c.setAttribute("data-i", String(i));
        c.addEventListener("click", onCell);
        c.disabled =
          !!S.over ||
          !!S.board[i] ||
          (hidePick && i !== S.activeCell);
        b.appendChild(c);
      }
    }

    function onCell(e) {
      if (S.over || S.liveRole === "student") return;
      var i = parseInt(e.currentTarget.getAttribute("data-i"), 10);
      if (S.board[i]) return;
      showQuestionForCell(i);
      buildBoard();
    }

    function getSetup() {
      var err = el(ids.err || "tttErr");
      if (err) err.textContent = "";
      if (!poolOk()) {
        if (err) err.textContent = "No questions in this deck.";
        return false;
      }
      var rx = parseRosterText(el(ids.rosterX || "tttRosterX").value);
      var ro = parseRosterText(el(ids.rosterO || "tttRosterO").value);
      if (rx.length < 1) {
        if (err) err.textContent = "Crosses (X): enter at least one name.";
        return false;
      }
      if (ro.length < 1) {
        if (err) err.textContent = "Noughts (O): enter at least one name.";
        return false;
      }
      var inX = {};
      var k;
      for (k = 0; k < rx.length; k++) {
        var u = rx[k].toLowerCase();
        if (inX[u]) {
          if (err) err.textContent = "Duplicate in crosses: " + rx[k];
          return false;
        }
        inX[u] = true;
      }
      var inO = {};
      for (k = 0; k < ro.length; k++) {
        u = ro[k].toLowerCase();
        if (inO[u]) {
          if (err) err.textContent = "Duplicate in noughts: " + ro[k];
          return false;
        }
        inO[u] = true;
        if (inX[u]) {
          if (err) {
            err.textContent =
              'Same name on both teams: "' + ro[k] + '".';
          }
          return false;
        }
      }
      S.rosterX = rx;
      S.rosterO = ro;
      return true;
    }

    function newRound() {
      var built = buildRoundPool(getPool());
      S.pool = built.pool;
      S.uniqueCount = built.unique;
      S.board = Array(9).fill("");
      S.move = 0;
      S.over = false;
      S.turnIndexX = 0;
      S.turnIndexO = 0;
      S.perm = shufflePerm(9);
      S.activeCell = null;
      S.qLocked = false;
      var msg = el(ids.msg || "tttMsg");
      if (msg) {
        msg.textContent = "";
        msg.className = "ttt-msg";
      }
      clearQPanel();
      renderTurn();
      buildBoard();
      publishLive(true);
    }

    function exportState() {
      return {
        v: 1,
        pack: S.pack,
        answerMode: S.answerMode,
        rosterX: S.rosterX.slice(),
        rosterO: S.rosterO.slice(),
        board: S.board.slice(),
        move: S.move,
        over: S.over,
        perm: S.perm ? S.perm.slice() : [],
        turnIndexX: S.turnIndexX,
        turnIndexO: S.turnIndexO,
        activeCell: S.activeCell,
        qLocked: S.qLocked
      };
    }

    function importState(gs) {
      if (!gs || gs.v !== 1) return;
      suppressPublish = true;
      var built = buildRoundPool(getPool());
      S.pool = built.pool;
      S.uniqueCount = built.unique;
      if (gs.pack) S.pack = gs.pack;
      if (gs.answerMode) S.answerMode = gs.answerMode;
      if (live && live.isStudent && live.isStudent()) {
        S.liveRole = "student";
      }
      S.rosterX = (gs.rosterX || []).slice();
      S.rosterO = (gs.rosterO || []).slice();
      S.board = (gs.board || Array(9).fill("")).slice();
      S.move = gs.move || 0;
      S.over = !!gs.over;
      S.perm = (gs.perm || shufflePerm(9)).slice();
      S.turnIndexX = gs.turnIndexX || 0;
      S.turnIndexO = gs.turnIndexO || 0;
      S.activeCell = gs.activeCell != null ? gs.activeCell : null;
      S.qLocked = !!gs.qLocked;
      if (S.liveRole === "student") {
        setPlayMode(true);
      }
      if (S.activeCell !== null && !S.over) {
        showQuestionForCell(S.activeCell);
      } else {
        clearQPanel();
      }
      renderTurn();
      buildBoard();
      suppressPublish = false;
    }

    function speakerMatchesAction(action) {
      var sp = currentSpeaker();
      return (
        String(action.displayName || "").trim().toLowerCase() ===
        String(sp || "").trim().toLowerCase()
      );
    }

    function applyStudentPick(action) {
      if (!action || S.liveRole !== "host") return false;
      if (action.kind !== "pick") return false;
      if (S.over || S.activeCell !== null || S.qLocked) return false;
      if (S.answerMode.indexOf("student") !== 0) return false;
      if (!speakerMatchesAction(action)) return false;
      var i = action.cell;
      if (i < 0 || i > 8 || S.board[i]) return false;
      showQuestionForCell(i);
      buildBoard();
      return true;
    }

    function applyStudentAction(action) {
      if (!action || S.liveRole !== "host") return false;
      if (S.activeCell === null || S.qLocked || S.over) return false;
      if (action.cell !== S.activeCell) return false;
      if (!speakerMatchesAction(action)) return false;
      if (S.answerMode === "student-mcq" && action.kind === "mcq") {
        resolvePick(parseInt(action.value, 10), true);
        return true;
      }
      if (S.answerMode === "student-type" && action.kind === "type") {
        var qu = questionForCell(S.activeCell);
        var typed = normType(action.value);
        var ok =
          typed === normType(qu.opts[qu.correct]) ||
          typed === normType(qu.gap);
        resolvePick(ok ? qu.correct : -1, true);
        return true;
      }
      return false;
    }

    function renderStudentPanel(snap, playerId) {
      var inner = el("fclStudentPlayInner");
      if (!inner) return;
      var gs = snap && snap.gameState;
      if (!gs || snap.phase !== "playing") {
        inner.innerHTML = "";
        if (W.FceClassLiveTtt && W.FceClassLiveTtt.paintStudentBoard) {
          W.FceClassLiveTtt.paintStudentBoard(null);
        }
        return;
      }
      var me = null;
      (snap.players || []).forEach(function (p) {
        if (p.id === playerId) me = p;
      });
      var sym = gs.move % 2 === 0 ? "X" : "O";
      var roster = sym === "X" ? gs.rosterX : gs.rosterO;
      var idx = sym === "X" ? gs.turnIndexX : gs.turnIndexO;
      var speaker = roster && roster.length ? roster[idx % roster.length] : "";
      var isMyTurn =
        me &&
        String(me.displayName || "").trim().toLowerCase() ===
          String(speaker || "").trim().toLowerCase();
      var studentMode = gs.answerMode && String(gs.answerMode).indexOf("student") === 0;
      var canPick =
        studentMode &&
        isMyTurn &&
        gs.activeCell == null &&
        !gs.qLocked &&
        !gs.over;
      if (W.FceClassLiveTtt && W.FceClassLiveTtt.paintStudentBoard) {
        W.FceClassLiveTtt.paintStudentBoard(gs, {
          canPick: canPick,
          onPick: function (cell) {
            if (live && live.submitStudentPick) live.submitStudentPick(cell);
          }
        });
      }
      if (gs.activeCell == null || gs.qLocked || gs.over) {
        if (gs.over) {
          inner.innerHTML = '<p class="fcl-wait">Round over — watch the screen.</p>';
        } else if (canPick) {
          inner.innerHTML =
            '<p class="fcl-wait fcl-wait--turn">Tap an empty square above, then answer.</p>';
        } else {
          inner.innerHTML =
            '<p class="fcl-wait">Watch the board · ' +
            esc(speaker) +
            " (" +
            sym +
            ")</p>";
        }
        return;
      }
      if (!isMyTurn) {
        inner.innerHTML =
          '<p class="fcl-wait">' +
          esc(speaker) +
          " is answering…</p>";
        return;
      }
      var qu = questionForCell(gs.activeCell);
      if (gs.answerMode === "student-type") {
        inner.innerHTML =
          '<p class="fcl-q">' +
          formatQ(qu) +
          '</p><div class="fcl-type-row"><input type="text" id="fclTypeInput" placeholder="Type answer…" /><button type="button" class="fcl-btn fcl-btn--pri" id="fclTypeSend">Send</button></div>';
        var send = el("fclTypeSend");
        if (send) {
          send.onclick = function () {
            var v = el("fclTypeInput") && el("fclTypeInput").value;
            if (live && live.submitStudentType) {
              live.submitStudentType(gs.activeCell, v);
            }
          };
        }
        return;
      }
      if (gs.answerMode === "student-mcq") {
        var letters = ["A", "B", "C", "D"];
        var html = '<p class="fcl-q">' + formatQ(qu) + '</p><div class="fcl-mcq">';
        var k;
        for (k = 0; k < 4; k++) {
          html +=
            '<button type="button" class="fcl-mcq-btn" data-i="' +
            k +
            '"><span>' +
            letters[k] +
            "</span> " +
            esc(qu.opts[k]) +
            "</button>";
        }
        html += "</div>";
        inner.innerHTML = html;
        [].forEach.call(inner.querySelectorAll(".fcl-mcq-btn"), function (btn) {
          btn.addEventListener("click", function () {
            var idx2 = parseInt(btn.getAttribute("data-i"), 10);
            if (live && live.submitStudentMcq) {
              live.submitStudentMcq(gs.activeCell, idx2);
            }
          });
        });
        return;
      }
      if (gs.answerMode === "teacher-mcq" || gs.answerMode === "teacher-judge") {
        inner.innerHTML =
          '<p class="fcl-q fcl-q--spotlight">' +
          formatQ(qu) +
          '</p><p class="fcl-wait fcl-wait--turn">Your turn — answer on the projector!</p>';
        return;
      }
      inner.innerHTML =
        '<p class="fcl-wait">Look at the screen — teacher picks A–D.</p>';
    }

    function startLiveRound(cfg) {
      cfg = cfg || {};
      S.rosterX = (cfg.rosterX || []).slice();
      S.rosterO = (cfg.rosterO || []).slice();
      S.answerMode = cfg.answerMode || "teacher-mcq";
      S.liveRole = cfg.liveRole || "host";
      setPlayMode(true);
      newRound();
    }

    function openHint() {
      if (!hintPassageFor || S.activeCell === null) return;
      var qu = questionForCell(S.activeCell);
      var passage = hintPassageFor(qu);
      var title = el(ids.hintTitle || "tttHintTitle");
      var body = el(ids.hintBody || "tttHintBody");
      var modal = el(ids.hintModal || "tttHintModal");
      if (title) title.textContent = qu.topic || "Source text";
      if (body) {
        body.textContent =
          passage || qu.contextSentence || "Passage not available.";
      }
      if (modal) modal.classList.add("open");
    }

    function closeHint() {
      var modal = el(ids.hintModal || "tttHintModal");
      if (modal) modal.classList.remove("open");
    }

    var btnStart = el(ids.btnStart || "tttBtnStart");
    if (btnStart) {
      btnStart.addEventListener("click", function () {
        if (!getSetup()) return;
        setPlayMode(true);
        newRound();
      });
    }

    var btnReset = el(ids.btnReset || "tttBtnReset");
    if (btnReset) btnReset.addEventListener("click", newRound);

    var btnBack = el(ids.btnBack || "tttBtnBack");
    if (btnBack) {
      btnBack.addEventListener("click", function () {
        W.location.reload();
      });
    }

    var btnHint = el(ids.btnHint || "tttBtnHint");
    if (btnHint) btnHint.addEventListener("click", openHint);

    var hintClose = el(ids.hintClose || "tttHintClose");
    if (hintClose) hintClose.addEventListener("click", closeHint);

    var hintModal = el(ids.hintModal || "tttHintModal");
    if (hintModal) {
      hintModal.addEventListener("click", function (e) {
        if (e.target === hintModal) closeHint();
      });
    }

    W.document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && hintModal && hintModal.classList.contains("open")) {
        e.preventDefault();
        closeHint();
      }
    });

    var btnCancel = el(ids.btnCancelCell || "tttBtnCancelCell");
    if (btnCancel) {
      btnCancel.addEventListener("click", function () {
        if (S.qLocked) return;
        clearQPanel();
        buildBoard();
        publishLive(false);
      });
    }

    var btnJudgeOk = el(ids.btnJudgeOk || "tttBtnJudgeOk");
    if (btnJudgeOk) btnJudgeOk.addEventListener("click", function () { resolveJudge(true); });
    var btnJudgePass = el(ids.btnJudgePass || "tttBtnJudgePass");
    if (btnJudgePass) btnJudgePass.addEventListener("click", function () { resolveJudge(false); });

    poolOk();

    return {
      refreshPool: poolOk,
      newRound: newRound,
      exportState: exportState,
      importState: importState,
      applyStudentPick: applyStudentPick,
      applyStudentAction: applyStudentAction,
      renderStudentPanel: renderStudentPanel,
      startLiveRound: startLiveRound,
      setAnswerMode: function (m) {
        S.answerMode = m || "teacher-mcq";
      },
      setPack: function (p) {
        S.pack = p || "all";
      }
    };
  }

  W.FCE_TTT_GAPS = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
