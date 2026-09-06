/**
 * OGE Variant 2 — Speaking page mount.
 */
(function () {
  var D = window.__OGE_V2__;
  if (!D || !window.OgeSpeakingMount) return;

  window.OgeVariant2Apps = {
    mount: function (root) {
      if (!root) return;
      if (root.getAttribute("data-oge-mode") === "speaking") {
        window.OgeSpeakingMount.mount(root, D.speaking, D.speaking.variantLabel || "Variant 2");
      }
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("oge-app");
    if (root) window.OgeVariant2Apps.mount(root);
  });
})();
