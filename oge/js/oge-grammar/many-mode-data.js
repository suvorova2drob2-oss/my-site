/**
 * OGE Grammar Gym · Many Mode (Understanding plurals) — standalone pack.
 */
(function (w) {
  "use strict";

  function pl(singular, plural, extra) {
    var answers = [plural];
    if (extra) answers = answers.concat(extra);
    return {
      before: singular + " →",
      after: "",
      cue: "plural",
      answers: answers,
      expected: plural
    };
  }

  w.OGE_MANY_MODE = {
    id: "many-mode",
    label: "Many Mode",
    blurb:
      "Write the plural — then Exam practice: one story, OGE-style gaps 18–26 (mixed word formation).",
    rules: [
      "Regular: table → tables · box → boxes (-es after -s, -x, -ch, -sh)",
      "Many -f / -fe → -ves: leaf → leaves, knife → knives",
      "Irregular: man → men, child → children, mouse → mice"
    ],
    stations: [
      {
        id: "1",
        kicker: "Exercise 1 · Part A",
        title: "Write the plurals",
        instruction: "Write the plurals.",
        kind: "type",
        items: [
          Object.assign({ id: "1" }, pl("bush", "bushes")),
          Object.assign({ id: "2" }, pl("child", "children")),
          Object.assign({ id: "3" }, pl("church", "churches")),
          Object.assign({ id: "4" }, pl("foot", "feet")),
          Object.assign({ id: "5" }, pl("goose", "geese")),
          Object.assign({ id: "6" }, pl("half", "halves")),
          Object.assign({ id: "7" }, pl("hero", "heroes")),
          Object.assign({ id: "8" }, pl("knife", "knives")),
          Object.assign({ id: "9" }, pl("leaf", "leaves")),
          Object.assign({ id: "10" }, pl("life", "lives"))
        ]
      },
      {
        id: "2",
        kicker: "Exercise 1 · Part B",
        title: "Write the plurals",
        instruction: "Write the plurals.",
        kind: "type",
        items: [
          Object.assign({ id: "11" }, pl("man", "men")),
          Object.assign({ id: "12" }, pl("match", "matches")),
          Object.assign({ id: "13" }, pl("mouse", "mice")),
          Object.assign({ id: "14" }, pl("person", "people", ["persons"])),
          Object.assign({ id: "15" }, pl("potato", "potatoes")),
          Object.assign({ id: "16" }, pl("shelf", "shelves")),
          Object.assign({ id: "17" }, pl("switch", "switches")),
          Object.assign({ id: "18" }, pl("thief", "thieves")),
          Object.assign({ id: "19" }, pl("tomato", "tomatoes")),
          Object.assign({ id: "20" }, pl("tooth", "teeth"))
        ]
      },
      {
        id: "3",
        kicker: "Exercise 1 · Part C",
        title: "Write the plurals",
        instruction: "Write the plurals.",
        kind: "type",
        items: [
          Object.assign({ id: "21" }, pl("watch", "watches")),
          Object.assign({ id: "22" }, pl("wife", "wives")),
          Object.assign({ id: "23" }, pl("wolf", "wolves")),
          Object.assign({ id: "24" }, pl("woman", "women")),
          Object.assign({ id: "25" }, pl("policewoman", "policewomen")),
          Object.assign({ id: "26" }, pl("businessman", "businessmen")),
          Object.assign({ id: "27" }, pl("box", "boxes")),
          Object.assign({ id: "28" }, pl("bus", "buses", ["busses"])),
          Object.assign({ id: "29" }, pl("dress", "dresses")),
          Object.assign({ id: "30" }, pl("gas", "gases", ["gasses"]))
        ]
      },
      {
        id: "4",
        kicker: "Exam practice",
        title: "Adam & Clare's play",
        instruction:
          "Put the word in capitals into the correct form. The items follow one story (OGE tasks 18–26).",
        kind: "type",
        items: [
          {
            id: "e18",
            label: "18",
            before: 'It was raining heavily, and Adam and Clare were bored. "I',
            after: 'to watch TV all day," said Adam. "What shall we do?"',
            cue: "NOT/WANT",
            answers: ["don't want", "do not want", "dont want"],
            expected: "don't want"
          },
          {
            id: "e19",
            label: "19",
            before: '"That\'s the',
            after: 'time you haven\'t wanted to watch TV!" said Clare. "I\'m impressed! Let\'s write a short play and perform it for Mum and Dad this evening."',
            cue: "ONE",
            answers: ["first"],
            expected: "first"
          },
          {
            id: "e20",
            label: "20",
            before: '"Great idea!" said Adam. They',
            after: "to the computer, and started writing a script.",
            cue: "GO",
            answers: ["went"],
            expected: "went"
          },
          {
            id: "e21",
            label: "21",
            before: 'When they\'d finished, they read through what they had written. "This is really funny," said Clare. "Mum and Dad',
            after: 'a lot this evening!"',
            cue: "LAUGH",
            answers: ["will laugh", "'ll laugh", "ll laugh"],
            expected: "will laugh"
          },
          {
            id: "e22",
            label: "22",
            before: 'Adam agreed. "And it\'s much',
            after: 'to do something fun like this than sit around in front of the TV. They\'ll be proud of us!"',
            cue: "GOOD",
            answers: ["better"],
            expected: "better"
          },
          {
            id: "e23",
            label: "23",
            before: "They learnt",
            after: "lines all afternoon, and rehearsed the play several times. By the evening, they were ready.",
            cue: "THEY",
            answers: ["their"],
            expected: "their"
          },
          {
            id: "e24",
            label: "24",
            before: "At half past seven, Mum and Dad",
            after: "that the play was about to start. They sat in the living room and waited for Adam and Clare to appear.",
            cue: "TELL",
            answers: ["were told"],
            expected: "were told"
          },
          {
            id: "e25",
            label: "25",
            before: "The play started, and Clare was right. Mum and Dad did laugh a lot. In fact, the neighbours",
            after: "hear them laughing through the wall.",
            cue: "CAN",
            answers: ["could"],
            expected: "could"
          },
          {
            id: "e26",
            label: "26",
            before: 'When it had finished, Mum and Dad congratulated the kids. "You\'re both very talented',
            after: '," said Dad. Well done!"',
            cue: "CHILD",
            answers: ["children"],
            expected: "children"
          }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : this);
