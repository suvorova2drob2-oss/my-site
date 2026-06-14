/**
 * Prepositional phrases disk track — first-pass ticks + home score (english_mastery_perfect).
 */
(function (global) {
  'use strict';

  var PROG_KEY = 'prep_phrases_progress_v1';
  var MAIN_KEY = 'english_mastery_perfect';

  function loadProg() {
    try {
      return JSON.parse(global.localStorage.getItem(PROG_KEY) || '{}');
    } catch (e) {
      return {};
    }
  }

  function saveProg(obj) {
    try {
      global.localStorage.setItem(PROG_KEY, JSON.stringify(obj));
    } catch (e) {}
  }

  function addToMainScore(delta) {
    if (!delta) return;
    try {
      var raw = global.localStorage.getItem(MAIN_KEY);
      var ud = raw ? JSON.parse(raw) : null;
      if (!ud || typeof ud !== 'object') ud = { name: '', score: 0, wins: {}, totalErrors: 0 };
      if (!ud.wins || typeof ud.wins !== 'object') ud.wins = {};
      ud.score = (Number(ud.score) || 0) + delta;
      global.localStorage.setItem(MAIN_KEY, JSON.stringify(ud));
    } catch (e) {}
  }

  /**
   * Mark task passed and add points to home score once per taskId.
   * @returns {{ awarded: boolean, points: number }}
   */
  function prepProgressAward(taskId, points) {
    var p = loadProg();
    if (p[taskId] && p[taskId].awarded) {
      return { awarded: false, points: 0 };
    }
    p[taskId] = { passed: true, awarded: true, points: points || 0, at: Date.now() };
    saveProg(p);
    addToMainScore(points || 0);
    return { awarded: true, points: points || 0 };
  }

  function prepProgressPassed(taskId) {
    var p = loadProg();
    return !!(p[taskId] && p[taskId].passed);
  }

  function prepProgressRefreshHub() {
    var links = global.document.querySelectorAll('a.task[data-prep-task]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var id = a.getAttribute('data-prep-task');
      if (id && prepProgressPassed(id)) a.classList.add('task-passed');
      else a.classList.remove('task-passed');
    }
  }

  global.prepProgressAward = prepProgressAward;
  global.prepProgressPassed = prepProgressPassed;
  global.prepProgressRefreshHub = prepProgressRefreshHub;
})(typeof window !== 'undefined' ? window : globalThis);
