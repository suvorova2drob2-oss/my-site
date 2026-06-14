/**
 * ЕГЭ Reading — Multiple Choice по тексту (один текст + цепочка 1 из 4).
 *
 * Юниты подключаются после этого файла: js/ege-reading/mc-reading-units/*.js
 * Каждый юнит: pack.units.push({ id, unitOrder, title, instructionHtml, paragraphs,
 *   questions, quickPhrases, tapPhrases, ... }).
 *
 * Контракт и UX для новых юнитов — в .cursor/rules/ege-reading-mc-units.mdc. Кратко:
 * - Вопросы: prompt только на английском; explainRu — разбор (HTML допустим).
 * - paragraphs[].evidence — подстроки дословно из text (support / distract).
 * - После «Проверить»: зелёный = верный вариант, красный = неверный выбор;
 *   объяснение: шапка (твой/правильный ответ) + тело explainRu у каждого номера.
 */
(function (w) {
  var pack = (w.__EGE_READING_MC__ = w.__EGE_READING_MC__ || {});
  pack.units = Array.isArray(pack.units) ? pack.units : [];
})(typeof window !== "undefined" ? window : this);
