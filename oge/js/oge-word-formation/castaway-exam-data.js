/**
 * OGE Word Formation Gym · Castaway Words — Exam practice 27–32 (Selkirk / Robinson Crusoe).
 */
(function (w) {
  "use strict";

  function gap(id, label, before, after, cue, word, extra) {
    var answers = [word];
    if (extra) answers = answers.concat(extra);
    return {
      id: "e" + id,
      label: label,
      before: before,
      after: after,
      cue: cue,
      answers: answers,
      expected: word
    };
  }

  w.OGE_CASTAWAY_EXAM = {
    id: "castaway-exam",
    label: "Castaway Words",
    blurb:
      "Exam practice · two Selkirk texts, 27–32 each. Transform the capitals to fit the story.",
    rules: [
      "Read the whole text · decide part of speech first",
      "Prefixes/suffixes · positive or negative?",
      "Easy gaps first · never leave blank"
    ],
    stations: [
      {
        id: "1",
        kicker: "Exam practice · 1",
        title: "Robinson Crusoe & Selkirk",
        instruction:
          "Transform each word in capitals so it fits the gap. Tasks 27–32 — one continuous text.",
        kind: "type",
        items: [
          gap(
            "27",
            "27",
            "Have you heard of the story Robinson Crusoe by the writer Daniel Defoe? It's partly based on a true story — the story of Alexander Selkirk, a",
            "who spent several years alone on an island.",
            "SAIL",
            "sailor"
          ),
          gap(
            "28",
            "28",
            "In 1704, Selkirk was on a ship which stopped at a small island near Chile. Selkirk thought the ship needed some repairs, otherwise it would be too",
            "to continue in it.",
            "DANGER",
            "dangerous"
          ),
          gap(
            "29",
            "29",
            "His captain was not in",
            ", so Selkirk said he would prefer to stay on the island. The captain allowed him to go.",
            "AGREE",
            "agreement"
          ),
          gap(
            "30",
            "30",
            "Selkirk",
            "realised his mistake, and asked to be allowed back on the ship.",
            "IMMEDIATE",
            "immediately"
          ),
          gap(
            "31",
            "31",
            "However, the captain wouldn't let him. Although Selkirk begged, the captain would not",
            ".",
            "CONSIDER",
            "reconsider"
          ),
          gap(
            "32",
            "32",
            "Selkirk spent more than four years on the island because of the captain's",
            ".",
            "DECIDE",
            "decision"
          )
        ]
      },
      {
        id: "2",
        kicker: "Exam practice · 2",
        title: "Four years on the island",
        instruction:
          "Transform each word in capitals so it fits the gap. Tasks 27–32 — one continuous text.",
        kind: "type",
        items: [
          gap(
            "p2-27",
            "27",
            "Alexander Selkirk was alone on a small island for more than four years. During that time, one of his biggest problems was",
            ".",
            "LONELY",
            "loneliness"
          ),
          gap(
            "p2-28",
            "28",
            "However, he was very",
            ", and managed to build equipment and huts with materials he found on the island.",
            "CREATE",
            "creative"
          ),
          gap(
            "p2-29",
            "29",
            "He",
            "learnt which vegetables and berries on the island he could eat.",
            "QUICK",
            "quickly"
          ),
          gap(
            "p2-30",
            "30",
            "For meat and milk, he caught wild goats. However, one particular hunting trip was extremely",
            ". He fell off a cliff and was badly injured.",
            "SUCCESS",
            "unsuccessful"
          ),
          gap(
            "p2-31",
            "31",
            "He lay on the ground for almost a day, unable to move. He was",
            ".",
            "HELP",
            "helpless"
          ),
          gap(
            "p2-32",
            "32",
            "In February 1709, a ship arrived. Selkirk ran towards his rescuers with enormous",
            ". Finally, he could go home.",
            "EXCITE",
            "excitement"
          )
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : this);
