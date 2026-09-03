/**
 * Pair-work gap questions — ask your partner, then reveal answer.
 * mount({ getQuestions, hintFor?, ids? })
 */
(function (W) {
  "use strict";

  function el(id) {
    return W.document.getElementById(id);
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
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

  function formatQuestion(q) {
    return String(q || "").replace(/_____/g, '<span class="gap">_____</span>');
  }

  /**
   * @param {{
   *   getQuestions: () => object[],
   *   hintFor?: (item: object) => string,
   *   ids?: Partial<Record<string, string>>
   * }} opts
   */
  function mount(opts) {
    var getQuestions = opts.getQuestions;
    if (typeof getQuestions !== "function") return null;

    var hintFor = opts.hintFor || null;
    var ids = opts.ids || {};

    var deck = [];
    var order = [];
    var idx = 0;
    var answerShown = false;

    function reloadDeck() {
      deck = getQuestions() || [];
      order = shuffleInPlace(
        deck.map(function (_, i) {
          return i;
        })
      );
      idx = 0;
      answerShown = false;
      renderMeta();
      renderCard();
    }

    function current() {
      if (!order.length) return null;
      return deck[order[idx]];
    }

    function renderMeta() {
      var meta = el(ids.meta || "pqMeta");
      if (meta) {
        meta.textContent =
          deck.length +
          " questions in this deck · card " +
          (order.length ? idx + 1 : 0) +
          " of " +
          order.length;
      }
    }

    function renderCard() {
      var item = current();
      var topic = el(ids.topic || "pqTopic");
      var kicker = el(ids.kicker || "pqKicker");
      var qNode = el(ids.question || "pqQuestion");
      var ansBox = el(ids.answerBox || "pqAnswer");
      var ansText = el(ids.answerText || "pqAnswerText");
      var ansPhrase = el(ids.answerPhrase || "pqAnswerPhrase");
      var btnShow = el(ids.btnShow || "pqBtnShow");
      var btnHint = el(ids.btnHint || "pqBtnHint");

      answerShown = false;
      if (ansBox) ansBox.classList.remove("is-on");

      if (!item) {
        if (kicker) kicker.textContent = "Empty deck";
        if (topic) topic.textContent = "";
        if (qNode) qNode.innerHTML = "Pick another topic tab or add vocabulary.";
        if (btnShow) btnShow.disabled = true;
        if (btnHint) btnHint.disabled = true;
        return;
      }

      if (kicker) kicker.textContent = item.packLabel || item.pack || "Unit 1";
      if (topic) topic.textContent = item.topic || "";
      if (qNode) qNode.innerHTML = formatQuestion(item.question);
      if (ansText) ansText.textContent = item.answer || "—";
      if (ansPhrase) {
        ansPhrase.textContent = item.answerFull
          ? "Cool Word / phrase: «" + item.answerFull + "»"
          : "";
      }
      if (btnShow) {
        btnShow.disabled = false;
        btnShow.textContent = "Show answer";
      }
      if (btnHint) btnHint.disabled = !hintFor;
      renderMeta();
    }

    function showAnswer() {
      if (answerShown) return;
      answerShown = true;
      var ansBox = el(ids.answerBox || "pqAnswer");
      var btnShow = el(ids.btnShow || "pqBtnShow");
      if (ansBox) ansBox.classList.add("is-on");
      if (btnShow) btnShow.textContent = "Answer shown";
    }

    function nextCard() {
      if (!order.length) return;
      idx = (idx + 1) % order.length;
      renderCard();
    }

    function shuffleDeck() {
      order = shuffleInPlace(
        deck.map(function (_, i) {
          return i;
        })
      );
      idx = 0;
      renderCard();
    }

    function openHint() {
      if (!hintFor) return;
      var item = current();
      if (!item) return;
      var passage = hintFor(item);
      var title = el(ids.hintTitle || "pqHintTitle");
      var body = el(ids.hintBody || "pqHintBody");
      var modal = el(ids.hintModal || "pqHintModal");
      if (title) title.textContent = item.topic || "Source text";
      if (body) body.textContent = passage || item.hint || "Not available.";
      if (modal) modal.classList.add("open");
    }

    function closeHint() {
      var modal = el(ids.hintModal || "pqHintModal");
      if (modal) modal.classList.remove("open");
    }

    var btnShow = el(ids.btnShow || "pqBtnShow");
    if (btnShow) btnShow.addEventListener("click", showAnswer);

    var btnNext = el(ids.btnNext || "pqBtnNext");
    if (btnNext) btnNext.addEventListener("click", nextCard);

    var btnShuffle = el(ids.btnShuffle || "pqBtnShuffle");
    if (btnShuffle) btnShuffle.addEventListener("click", shuffleDeck);

    var btnHint = el(ids.btnHint || "pqBtnHint");
    if (btnHint) btnHint.addEventListener("click", openHint);

    var hintClose = el(ids.hintClose || "pqHintClose");
    if (hintClose) hintClose.addEventListener("click", closeHint);

    var hintModal = el(ids.hintModal || "pqHintModal");
    if (hintModal) {
      hintModal.addEventListener("click", function (e) {
        if (e.target === hintModal) closeHint();
      });
    }

    W.document.addEventListener("keydown", function (e) {
      if (hintModal && hintModal.classList.contains("open") && e.key === "Escape") {
        e.preventDefault();
        closeHint();
        return;
      }
      if (e.key === " " && (!hintModal || !hintModal.classList.contains("open"))) {
        var t = e.target;
        if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
        e.preventDefault();
        if (!answerShown) showAnswer();
        else nextCard();
      }
    });

    reloadDeck();

    return { reloadDeck: reloadDeck, nextCard: nextCard };
  }

  W.FCE_PAIR_QUESTIONS = { mount: mount, shuffleInPlace: shuffleInPlace };
})(typeof window !== "undefined" ? window : globalThis);
