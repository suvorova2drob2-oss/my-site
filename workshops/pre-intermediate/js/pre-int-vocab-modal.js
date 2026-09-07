/**
 * Pre-intermediate · vocabulary pairs in a modal overlay
 * Launch button on beat · sticky pairs rail while scrolling sentences
 */
(function (global) {
  "use strict";

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var modalEl = null;
  var modalMount = null;
  var escBound = false;

  function closeModal() {
    if (!modalEl) return;
    modalEl.hidden = true;
    document.body.classList.remove("pi-vocab-modal-open");
    if (modalMount) {
      modalMount.innerHTML = "";
    }
  }

  function ensureModal() {
    if (modalEl) return modalEl;
    modalEl = document.createElement("div");
    modalEl.className = "pi-vocab-modal";
    modalEl.id = "piVocabModal";
    modalEl.hidden = true;
    modalEl.innerHTML =
      '<div class="pi-vocab-modal-backdrop" data-pi-vocab-close></div>' +
      '<div class="pi-vocab-modal-panel" role="dialog" aria-modal="true" aria-labelledby="piVocabModalTitle">' +
      '<header class="pi-vocab-modal-head">' +
      '<div class="pi-vocab-modal-head-text">' +
      '<p class="pi-vocab-modal-kicker">Word pairs · coursebook</p>' +
      '<h2 class="pi-vocab-modal-title" id="piVocabModalTitle"></h2>' +
      "</div>" +
      '<button type="button" class="pi-vocab-modal-x" data-pi-vocab-close aria-label="Close">×</button>' +
      "</header>" +
      '<div class="pi-vocab-modal-body" id="piVocabModalBody">' +
      '<div class="pi-vocab-modal-mount" id="piVocabModalMount"></div>' +
      "</div></div>";
    document.body.appendChild(modalEl);

    modalMount = document.getElementById("piVocabModalMount");

    modalEl.querySelectorAll("[data-pi-vocab-close]").forEach(function (el) {
      el.addEventListener("click", closeModal);
    });

    if (!escBound) {
      escBound = true;
      document.addEventListener("keydown", function (e) {
        if (e.key !== "Escape" || !modalEl || modalEl.hidden) return;
        closeModal();
      });
    }

    return modalEl;
  }

  function openModal(pack) {
    ensureModal();
    document.getElementById("piVocabModalTitle").textContent =
      pack.title || "Complete the sentences";
    modalMount.innerHTML = "";
    if (global.PREP_VOCAB_PAIR_BOX) {
      PREP_VOCAB_PAIR_BOX.mount({ root: modalMount, pack: pack });
    }
    modalEl.hidden = false;
    document.body.classList.add("pi-vocab-modal-open");
    var body = document.getElementById("piVocabModalBody");
    if (body) body.scrollTop = 0;
  }

  function mountLaunch(opts) {
    var root = opts.root || opts.host;
    var pack = opts.pack;
    if (!root || !pack) return;

    root.innerHTML =
      '<div class="pi-vocab-launch">' +
      (pack.title
        ? '<h3 class="pi-vocab-launch-title">' + esc(pack.title) + "</h3>"
        : "") +
      (pack.instr
        ? '<p class="pi-vocab-launch-instr">' + esc(pack.instr) + "</p>"
        : "") +
      '<button type="button" class="pi-vocab-exercise-btn" id="piVocabExerciseBtn">' +
      '<span class="pi-vocab-exercise-ico" aria-hidden="true">✎</span> Exercise' +
      "</button></div>";

    root.querySelector("#piVocabExerciseBtn").addEventListener("click", function () {
      openModal(pack);
    });
  }

  global.PRE_INT_VOCAB_MODAL = {
    mountLaunch: mountLaunch,
    open: openModal,
    close: closeModal,
  };
})(typeof window !== "undefined" ? window : globalThis);
