/**
 * OGE Speaking page — mounts the shared Tasks 1–3 UI from window.__OGE_SPEAKING__.
 */
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("oge-app");
    var pack = window.__OGE_SPEAKING__;
    if (!root || !pack || !window.OgeSpeakingMount) return;
    var label = (pack.speaking && pack.speaking.variantLabel) || pack.title || "";
    window.OgeSpeakingMount.mount(root, pack.speaking, label);
  });
})();
