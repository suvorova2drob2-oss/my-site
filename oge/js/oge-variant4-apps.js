/**
 * OGE Variant 4 — Speaking page mount.
 */
(function () {
  var D = window.__OGE_V4__;
  if (!D || !window.OgeSpeakingMount) return;

  window.OgeVariant4Apps = {
    mount: function (root) {
      if (!root) return;
      if (root.getAttribute("data-oge-mode") === "speaking") {
        window.OgeSpeakingMount.mount(root, D.speaking, D.speaking.variantLabel || "Variant 4");
      }
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("oge-app");
    if (root) window.OgeVariant4Apps.mount(root);
  });
})();
