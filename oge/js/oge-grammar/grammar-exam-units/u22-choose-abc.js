/**
 * Grammar practice · choose A, B or C (items 35–42).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  function item(num, before, after, choices, answers, keyShow) {
    return {
      examNum: num,
      paragraph: 1,
      before: before,
      afterInline: after,
      afterTail: "",
      cue: "",
      choices: choices,
      answers: answers,
      keyShow: keyShow
    };
  }

  function abc(a, b, c) {
    return [
      { letter: "A", text: a },
      { letter: "B", text: b },
      { letter: "C", text: c }
    ];
  }

  pack.units.push({
    id: "u22-choose-abc-grammar",
    unitOrder: 22,
    title: "Practice · Choose A B C",
    examSection: "Practice · 35–42",
    headerTitle: "Present simple · continuous",
    instructionHtml: "Выберите правильный вариант ответа.",
    items: [
      item(
        35,
        "Piotr ",
        " to his best friend today because he's angry with him.",
        abc("doesn't talk", "isn't talk", "isn't talking"),
        ["isn't talking", "isnt talking", "c"],
        "C isn't talking"
      ),
      item(
        36,
        "Natasha ",
        " late for school.",
        abc("often is", "is often", "often is being"),
        ["is often", "b"],
        "B is often"
      ),
      item(
        37,
        "My cousins ",
        " near our flat.",
        abc("don't live", "doesn't live", "aren't living"),
        ["don't live", "do not live", "a"],
        "A don't live"
      ),
      item(
        38,
        "Nick and his friend ",
        " playing football after school.",
        abc("are preferring", "prefers", "prefer"),
        ["prefer", "c"],
        "C prefer"
      ),
      item(
        39,
        "Danny ",
        " blue eyes and light hair.",
        abc("is having", "has", "have"),
        ["has", "b"],
        "B has"
      ),
      item(
        40,
        "",
        " some cake for all of us.",
        abc("It is", "Is", "There is"),
        ["there is", "c"],
        "C There is"
      ),
      item(
        41,
        "Ron ",
        " horror films.",
        abc("never watches", "watch never", "never watch"),
        ["never watches", "a"],
        "A never watches"
      ),
      item(
        42,
        "There are some books on the table. ",
        " my brother's.",
        abc("There are", "They are", "These are"),
        ["they are", "they're", "b"],
        "B They are"
      )
    ]
  });
})(typeof window !== "undefined" ? window : this);
