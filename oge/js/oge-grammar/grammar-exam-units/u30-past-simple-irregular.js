/**
 * Grammar practice · irregular past simple from the workbook table.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  function rows(pairs) {
    var out = [];
    var i;
    for (i = 0; i < pairs.length; i++) {
      out.push({
        examNum: i + 1,
        paragraph: 1,
        before: "",
        afterInline: "",
        afterTail: "",
        cue: String(pairs[i][0]).toUpperCase(),
        answers: [pairs[i][1]],
        keyShow: pairs[i][1]
      });
    }
    return out;
  }

  pack.units.push({
    id: "u30-past-simple-vowel",
    unitOrder: 30,
    title: "Past simple · vowel change",
    examSection: "Practice · irregular",
    headerTitle: "Глаголы, у которых изменяется гласная",
    instructionHtml:
      "Напишите <strong>past simple</strong>. Глаголы, у которых изменяется гласная.",
    items: rows([
      ["become", "became"],
      ["begin", "began"],
      ["blow", "blew"],
      ["break", "broke"],
      ["choose", "chose"],
      ["come", "came"],
      ["draw", "drew"],
      ["drink", "drank"],
      ["eat", "ate"],
      ["fall", "fell"],
      ["find", "found"],
      ["get", "got"],
      ["give", "gave"],
      ["grow", "grew"],
      ["know", "knew"],
      ["meet", "met"],
      ["read", "read"],
      ["run", "ran"],
      ["sing", "sang"],
      ["sit", "sat"],
      ["speak", "spoke"],
      ["wake", "woke"],
      ["wear", "wore"],
      ["win", "won"],
      ["write", "wrote"]
    ])
  });

  pack.units.push({
    id: "u31-past-simple-other",
    unitOrder: 31,
    title: "Past simple · other changes",
    examSection: "Practice · irregular",
    headerTitle: "Другие изменения",
    instructionHtml:
      "Напишите <strong>past simple</strong>. Другие изменения.",
    items: rows([
      ["bring", "brought"],
      ["build", "built"],
      ["buy", "bought"],
      ["catch", "caught"],
      ["do", "did"],
      ["feel", "felt"],
      ["fight", "fought"],
      ["go", "went"],
      ["have", "had"],
      ["keep", "kept"],
      ["leave", "left"],
      ["lose", "lost"],
      ["make", "made"],
      ["pay", "paid"],
      ["say", "said"],
      ["see", "saw"],
      ["send", "sent"],
      ["spend", "spent"],
      ["stand", "stood"],
      ["take", "took"],
      ["teach", "taught"],
      ["tell", "told"],
      ["think", "thought"],
      ["understand", "understood"]
    ])
  });

  pack.units.push({
    id: "u32-past-simple-same",
    unitOrder: 32,
    title: "Past simple · same form",
    examSection: "Practice · irregular",
    headerTitle: "Глаголы, которые не изменяются",
    instructionHtml:
      "Напишите <strong>past simple</strong>. Глаголы, которые не изменяются.",
    items: rows([
      ["beat", "beat"],
      ["cut", "cut"],
      ["hit", "hit"],
      ["let", "let"],
      ["put", "put"]
    ])
  });
})(typeof window !== "undefined" ? window : this);
