/**
 * Use of English — «Назад» на один шаг (history.back), иначе обычный переход по href.
 * Вызов: wireUoeOneStepBack(document.getElementById("id")) или wireUoeOneStepBack("#id", "fallback.html")
 */
(function (g) {
  g.wireUoeOneStepBack = function (selectorOrEl, fallbackHref) {
    var el =
      typeof selectorOrEl === "string" ? document.querySelector(selectorOrEl) : selectorOrEl;
    if (!el) return;
    if (fallbackHref) {
      try {
        el.setAttribute("href", new URL(fallbackHref, g.location.href).href);
      } catch (e) {
        el.setAttribute("href", fallbackHref);
      }
    }
    el.addEventListener("click", function (e) {
      if (g.history.length > 1) {
        e.preventDefault();
        g.history.back();
      }
    });
  };
})(typeof window !== "undefined" ? window : globalThis);
