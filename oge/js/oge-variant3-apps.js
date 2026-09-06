/**
 * OGE Variant 3 — Speaking page mount.
 */
(function () {
  var D = window.__OGE_V3__;
  if (!D || !window.OgeSpeakingMount) return;

  window.OgeVariant3Apps = {
    mount: function (root) {
      if (!root) return;
      if (root.getAttribute("data-oge-mode") === "speaking") {
        window.OgeSpeakingMount.mount(root, D.speaking, D.speaking.variantLabel || "Variant 3");
      }
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("oge-app");
    if (root) window.OgeVariant3Apps.mount(root);
  });
})();
