/**
 * OGE exam — shared helpers for variant pages.
 */
(function (w) {
  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/['']/g, "'")
      .replace(/\s+/g, " ");
  }

  function answersMatch(given, accepted) {
    var g = norm(given);
    if (!g) return false;
    var list = Array.isArray(accepted) ? accepted : [accepted];
    for (var i = 0; i < list.length; i++) {
      if (g === norm(list[i])) return true;
    }
    return false;
  }

  function renderAudio(src, label) {
    if (!src) {
      return (
        '<div class="oge-exam-audio oge-exam-audio--pending">Аудио будет добавлено позже (' +
        esc(label || "track") +
        "). Пока работай по скрипту ниже.</div>"
      );
    }
    return (
      '<audio class="oge-exam-audio" controls preload="none" src="' +
      esc(src) +
      '"></audio>'
    );
  }

  function bindActions(root, onCheck, onReset) {
    var checkBtn = root.querySelector("[data-oge-check]");
    var resetBtn = root.querySelector("[data-oge-reset]");
    if (checkBtn) checkBtn.addEventListener("click", onCheck);
    if (resetBtn) resetBtn.addEventListener("click", onReset);
  }

  w.OgeExamCore = {
    esc: esc,
    norm: norm,
    answersMatch: answersMatch,
    renderAudio: renderAudio,
    bindActions: bindActions
  };
})(typeof window !== "undefined" ? window : this);
