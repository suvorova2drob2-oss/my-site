/**
 * Tic-tac-toe + pair questions — oral gap prompts on a 3×3 board.
 * mount({ getQuestions, hintPassageFor?, ids? })
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

  function shufflePerm(n) {
    var a = [];
    var i;
    for (i = 0; i < n; i++) a.push(i);
    return shuffleInPlace(a);
  }

  function buildRoundPool(questions) {
    var base = (questions || []).filter(function (q) {
      return q && String(q.question || "").trim();
    });
    if (!base.length) return { pool: [], unique: 0 };
    var shuffled = shuffleInPlace(base.slice());
    var pick = [];
    var i = 0;
    while (pick.length < 9) {
      pick.push(shuffled[i % shuffled.length]);
      i++;
    }
    return { pool: shuffleInPlace(pick), unique: base.length };
  }

  /**
   * @param {{
   *   getQuestions: () => object[],
   *   hintPassageFor?: (qu: object) => string,
   *   live?: object,
   *   ids?: Partial<Record<string, string>>
   * }} opts
   */
  function mount(opts) {
    var getQuestions = opts.getQuestions;
    if (typeof getQuestions !== "function") return null;

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
      answerShown: false,
      answerMode: "teacher-judge",
      liveRole: "local",
      pack: "all"
    };

    function publishLive(clearPending) {
      if (suppressPublish || !live || !live.publishState) return;
      if (S.liveRole !== "host") return;
      live.publishState(!!clearPending);
    }

    function poolOk() {
      var built = buildRoundPool(getQuestions());
      S.pool = built.pool;
      S.uniqueCount = built.unique;
      var meta = el(ids.deckMeta || "tttDeckMeta");
      if (meta) {
        if (!S.uniqueCount) {
          meta.textContent = "No pair questions in this deck — pick another tab.";
        } else {
          meta.textContent =
            S.uniqueCount +
            " unique questions · 9 squares on the board" +
            (S.uniqueCount < 9 ? " (some repeat)." : ".");
        }
      }
      return S.pool.length >= 9;
    }

    function questionForCell(cellIndex) {
      return S.pool[S.perm[cellIndex]];
    }

    function formatQ(qu) {
      var parts = String(qu.question || "")
        .trim()
        .split(/\n/);
      return parts
        .map(function (line) {
          return esc(line).replace(/_____/g, '<span class="gap">_______</span>');
        })
        .join("<br>");
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

    function currentSpeaker() {
      var r = currentSym() === "X" ? S.rosterX : S.rosterO;
      if (!r.length) return "?";
      return currentSym() === "X"
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
      var xLine = formatLineup(S.rosterX, currentSym() === "X" ? sp : "");
      var oLine = formatLineup(S.rosterO, currentSym() === "O" ? sp : "");
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
          "Pick a square — partner answers with the target phrase.";
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
      if (
        S.board.every(function (x) {
          return x;
        })
      ) {
        return { draw: true };
      }
      return null;
    }

    function clearQPanel() {
      S.activeCell = null;
      S.qLocked = false;
      S.answerShown = false;
      var head = el(ids.qHead || "tttQHead");
      var meta = el(ids.qMeta || "tttQMeta");
      var text = el(ids.qText || "tttQText");
      var pl = el(ids.qPl || "tttQPl");
      var pairPanel = el(ids.pairPanel || "tttPairPanel");
      var answerBox = el(ids.pairAnswer || "tttPairAnswer");
      var hintBtn = el(ids.btnHint || "tttBtnHint");
      var cancelBtn = el(ids.btnCancelCell || "tttBtnCancelCell");
      var btnShow = el(ids.btnShowAnswer || "tttBtnShowAnswer");
      var btnGot = el(ids.btnGotIt || "tttBtnGotIt");
      var btnPass = el(ids.btnPass || "tttBtnPass");
      if (head) head.textContent = "Pair question";
      if (meta) meta.textContent = "";
      if (text) {
        text.hidden = true;
        text.innerHTML = "";
      }
      if (pl) pl.hidden = false;
      if (pairPanel) pairPanel.hidden = true;
      if (answerBox) answerBox.hidden = true;
      if (hintBtn) hintBtn.disabled = true;
      if (cancelBtn) cancelBtn.hidden = true;
      if (btnShow) btnShow.disabled = true;
      if (btnGot) btnGot.disabled = true;
      if (btnPass) btnPass.disabled = true;
    }

    function showQuestionForCell(cellIndex) {
      S.activeCell = cellIndex;
      S.qLocked = false;
      S.answerShown = false;
      var qu = questionForCell(cellIndex);
      var sp = currentSpeaker();
      var pl = el(ids.qPl || "tttQPl");
      var text = el(ids.qText || "tttQText");
      var meta = el(ids.qMeta || "tttQMeta");
      var head = el(ids.qHead || "tttQHead");
      var pairPanel = el(ids.pairPanel || "tttPairPanel");
      var answerBox = el(ids.pairAnswer || "tttPairAnswer");
      var answerText = el(ids.pairAnswerText || "tttPairAnswerText");
      var answerPhrase = el(ids.pairAnswerPhrase || "tttPairAnswerPhrase");
      var hintBtn = el(ids.btnHint || "tttBtnHint");
      var cancelBtn = el(ids.btnCancelCell || "tttBtnCancelCell");
      var btnShow = el(ids.btnShowAnswer || "tttBtnShowAnswer");
      var btnGot = el(ids.btnGotIt || "tttBtnGotIt");
      var btnPass = el(ids.btnPass || "tttBtnPass");
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
          (qu.packLabel || qu.topic || qu.pack || "") +
          " · " +
          sp;
      }
      if (head) head.textContent = "Complete the gap";
      if (pairPanel) pairPanel.hidden = false;
      if (answerBox) answerBox.hidden = true;
      if (answerText) answerText.textContent = qu.answer || "";
      if (answerPhrase) {
        answerPhrase.textContent =
          "Cool Word: «" + (qu.answerFull || qu.coolWord || "") + "»";
      }
      if (hintBtn) {
        hintBtn.disabled = !hintPassageFor;
      }
      if (cancelBtn) cancelBtn.hidden = false;
      if (btnShow) {
        btnShow.textContent = "Show answer";
        btnShow.disabled = false;
      }
      if (btnGot) btnGot.disabled = false;
      if (btnPass) btnPass.disabled = false;
      publishLive(false);
    }

    function onShowAnswer() {
      if (S.activeCell === null || S.over) return;
      S.answerShown = true;
      var answerBox = el(ids.pairAnswer || "tttPairAnswer");
      var btnShow = el(ids.btnShowAnswer || "tttBtnShowAnswer");
      if (answerBox) answerBox.hidden = false;
      if (btnShow) {
        btnShow.textContent = "Answer shown";
        btnShow.disabled = true;
      }
    }

    function finishTurn(markCell) {
      if (S.qLocked || S.over || S.activeCell === null) return;
      S.qLocked = true;
      var cellI = S.activeCell;
      var wasX = S.move % 2 === 0;
      var sym = currentSym();
      var msg = el(ids.msg || "tttMsg");

      if (markCell) {
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
        }, markCell ? 350 : 0);
      } else {
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
      }
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
          !!S.over || !!S.board[i] || (hidePick && i !== S.activeCell);
        b.appendChild(c);
      }
    }

    function onCell(e) {
      if (S.over) return;
      var i = parseInt(e.currentTarget.getAttribute("data-i"), 10);
      if (S.board[i]) return;
      showQuestionForCell(i);
      buildBoard();
    }

    function getSetup() {
      var err = el(ids.err || "tttErr");
      if (err) err.textContent = "";
      if (!poolOk()) {
        if (err) {
          err.textContent =
            "No questions in this deck. Pick another topic tab.";
        }
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
            err.textContent = 'Same name on both teams: "' + ro[k] + '".';
          }
          return false;
        }
      }
      S.rosterX = rx;
      S.rosterO = ro;
      return true;
    }

    function newRound() {
      var built = buildRoundPool(getQuestions());
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
      S.answerShown = false;
      var msg = el(ids.msg || "tttMsg");
      if (msg) {
        msg.textContent = "";
        msg.className = "ttt-msg";
      }
      var btnShow = el(ids.btnShowAnswer || "tttBtnShowAnswer");
      if (btnShow) btnShow.textContent = "Show answer";
      clearQPanel();
      renderTurn();
      buildBoard();
      publishLive(true);
    }

    function exportState() {
      return {
        v: 1,
        game: "pair",
        pack: S.pack,
        answerMode: "teacher-judge",
        rosterX: S.rosterX.slice(),
        rosterO: S.rosterO.slice(),
        board: S.board.slice(),
        move: S.move,
        over: S.over,
        perm: S.perm ? S.perm.slice() : [],
        turnIndexX: S.turnIndexX,
        turnIndexO: S.turnIndexO,
        activeCell: S.activeCell,
        qLocked: S.qLocked,
        answerShown: S.answerShown
      };
    }

    function importState(gs) {
      if (!gs || gs.v !== 1) return;
      suppressPublish = true;
      var built = buildRoundPool(getQuestions());
      S.pool = built.pool;
      S.uniqueCount = built.unique;
      if (gs.pack) S.pack = gs.pack;
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
      S.answerShown = !!gs.answerShown;
      if (S.liveRole === "student") {
        setPlayMode(true);
      }
      if (S.activeCell !== null && !S.over) {
        showQuestionForCell(S.activeCell);
        if (S.answerShown) {
          var answerBox = el(ids.pairAnswer || "tttPairAnswer");
          var btnShow = el(ids.btnShowAnswer || "tttBtnShowAnswer");
          if (answerBox) answerBox.hidden = false;
          if (btnShow) {
            btnShow.textContent = "Answer shown";
            btnShow.disabled = true;
          }
        }
      } else {
        clearQPanel();
      }
      renderTurn();
      buildBoard();
      suppressPublish = false;
    }

    function applyStudentAction() {
      return false;
    }

    function renderStudentPanel(snap, playerId) {
      var box = el("fclStudentPlay");
      var inner = el("fclStudentPlayInner");
      if (!box || !inner) return;
      var gs = snap && snap.gameState;
      if (!gs || snap.phase !== "playing") {
        box.hidden = true;
        inner.innerHTML = "";
        if (W.FceClassLiveTtt && W.FceClassLiveTtt.paintStudentBoard) {
          W.FceClassLiveTtt.paintStudentBoard(null);
        }
        return;
      }
      box.hidden = false;
      if (W.FceClassLiveTtt && W.FceClassLiveTtt.paintStudentBoard) {
        W.FceClassLiveTtt.paintStudentBoard(gs, { canPick: false });
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
      if (gs.over) {
        inner.innerHTML = '<p class="fcl-wait">Round over — watch the screen.</p>';
        return;
      }
      if (gs.activeCell == null || gs.qLocked) {
        inner.innerHTML =
          '<p class="fcl-wait">Watch the board · ' + esc(speaker) + " (" + sym + ")</p>";
        return;
      }
      if (isMyTurn) {
        inner.innerHTML =
          '<p class="fcl-q">Your turn — answer orally. Teacher marks <strong>Got it</strong> or <strong>Pass</strong> on the screen.</p>';
        return;
      }
      inner.innerHTML =
        '<p class="fcl-wait">' + esc(speaker) + " is answering…</p>";
    }

    function startLiveRound(cfg) {
      cfg = cfg || {};
      S.rosterX = (cfg.rosterX || []).slice();
      S.rosterO = (cfg.rosterO || []).slice();
      S.answerMode = "teacher-judge";
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
          passage || qu.hint || qu.contextSentence || "Passage not available.";
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
      if (
        e.key === "Escape" &&
        hintModal &&
        hintModal.classList.contains("open")
      ) {
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

    var btnShowAnswer = el(ids.btnShowAnswer || "tttBtnShowAnswer");
    if (btnShowAnswer) btnShowAnswer.addEventListener("click", onShowAnswer);

    var btnGotIt = el(ids.btnGotIt || "tttBtnGotIt");
    if (btnGotIt) {
      btnGotIt.addEventListener("click", function () {
        finishTurn(true);
      });
    }

    var btnPass = el(ids.btnPass || "tttBtnPass");
    if (btnPass) {
      btnPass.addEventListener("click", function () {
        finishTurn(false);
      });
    }

    poolOk();

    return {
      refreshPool: poolOk,
      newRound: newRound,
      exportState: exportState,
      importState: importState,
      applyStudentAction: applyStudentAction,
      renderStudentPanel: renderStudentPanel,
      startLiveRound: startLiveRound,
      setAnswerMode: function () {
        S.answerMode = "teacher-judge";
      },
      setPack: function (p) {
        S.pack = p || "all";
      }
    };
  }

  W.FCE_TTT_PAIR = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
