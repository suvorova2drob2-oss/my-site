/**
 * Подсветка юнитов с лучшим результатом 100% в <select> (все EGE Exam-тренажёры).
 */
(function (w) {
  function isUnitPerfectScore(statsBridge, unitId) {
    if (!statsBridge || typeof statsBridge.getUnitStats !== "function") {
      return false;
    }
    var st = statsBridge.getUnitStats(String(unitId || ""));
    return !!(st && Number(st.best) === 100);
  }

  function optionPerfectClassAttr(statsBridge, unitId) {
    return isUnitPerfectScore(statsBridge, unitId)
      ? ' class="ege-exam-unit-opt--perfect"'
      : "";
  }

  function paintUnitSelectPerfectMarks(selectEl, units, statsBridge) {
    if (!selectEl || !units || !units.length) return;
    var i;
    for (i = 0; i < units.length; i++) {
      var opt = selectEl.options[i];
      if (!opt) continue;
      if (isUnitPerfectScore(statsBridge, units[i].id)) {
        opt.className = "ege-exam-unit-opt--perfect";
      } else {
        opt.className = "";
      }
    }
  }

  w.__egeExamUnitPerfectMark = {
    isUnitPerfectScore: isUnitPerfectScore,
    optionPerfectClassAttr: optionPerfectClassAttr,
    paintUnitSelectPerfectMarks: paintUnitSelectPerfectMarks
  };
})(typeof window !== "undefined" ? window : this);
