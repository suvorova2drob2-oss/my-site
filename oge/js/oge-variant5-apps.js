/**
 * OGE Variant 5 — Speaking page mount.
 */
(function () {
  var D = window.__OGE_V5__;
  if (!D || !window.OgeSpeakingMount) return;

  window.OgeVariant5Apps = {
    mount: function (root) {
      if (!root) return;
      if (root.getAttribute("data-oge-mode") === "speaking") {
        window.OgeSpeakingMount.mount(root, D.speaking, D.speaking.variantLabel || "Variant 5");
      }
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("oge-app");
    if (root) window.OgeVariant5Apps.mount(root);
  });
})();
