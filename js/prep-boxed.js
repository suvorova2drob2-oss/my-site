/**
 * Коробочная (offline-first) сборка: без ожидания облачного SDK при старте.
 * Удалите этот скрипт из HTML или выставьте false, если нужен sync курса/упражнений из облака.
 */
(function (g) {
  g.__PREP_BOXED_SITE__ = true;
})(typeof window !== "undefined" ? window : this);
