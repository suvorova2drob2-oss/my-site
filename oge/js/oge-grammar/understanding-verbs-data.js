/**
 * OGE Grammar Gym · Understanding verbs (Skills development) — standalone pack.
 */
(function (w) {
  "use strict";

  w.OGE_UNDERSTANDING_VERBS = {
    id: "understanding-verbs",
    label: "Understanding verbs",
    blurb: "Exam-style verb skills: tense, person, auxiliaries, questions, passive, modals, report, conditionals, hope/wish.",
    rules: [
      "Match tense + person to the clue in brackets",
      "Time words help: at the moment · for three years · since …",
      "Passive = be + past participle"
    ],
    chapters: [
      {
        id: "tenses",
        label: "Tenses · 1–2",
        stationIds: ["1", "2"]
      },
      {
        id: "aux-questions",
        label: "Auxiliaries & questions · 3–4",
        stationIds: ["3", "4"]
      },
      {
        id: "passive-modals",
        label: "Passive & modals · 5–6",
        stationIds: ["5", "6"]
      },
      {
        id: "report-plus",
        label: "Report, conditionals & more · 7–10",
        stationIds: ["7", "8", "9", "10"]
      }
    ],
    stations: [
      {
        id: "1",
        kicker: "Exercise 1",
        title: "Tense and person",
        instruction:
          "Put the verbs into the correct tense and person, using the information given.",
        kind: "type",
        items: [
          {
            id: "1",
            before: "Dana",
            after: "thirteen years old.",
            cue: "BE (present simple)",
            answers: ["is", "'s", "s"],
            expected: "is"
          },
          {
            id: "2",
            before: "They",
            after: "both thirteen years old.",
            cue: "BE (present simple)",
            answers: ["are", "'re", "re"],
            expected: "are"
          },
          {
            id: "3",
            before: "Phil",
            after: "playing computer games.",
            cue: "LOVE (present simple)",
            answers: ["loves"],
            expected: "loves"
          },
          {
            id: "4",
            before: "My aunt",
            after: "with us at the moment.",
            cue: "STAY (present continuous)",
            answers: ["is staying", "'s staying", "s staying"],
            expected: "is staying"
          },
          {
            id: "5",
            before: "My uncle and aunt",
            after: "with us at the moment.",
            cue: "STAY (present continuous)",
            answers: ["are staying", "'re staying", "re staying"],
            expected: "are staying"
          },
          {
            id: "6",
            before: "Yesterday I",
            after: "my mum cook dinner.",
            cue: "HELP (past simple)",
            answers: ["helped"],
            expected: "helped"
          },
          {
            id: "7",
            before: "Paul",
            after: "football at four o'clock.",
            cue: "PLAY (past continuous)",
            answers: ["was playing"],
            expected: "was playing"
          },
          {
            id: "8",
            before: "The kids",
            after: "football at four o'clock.",
            cue: "PLAY (past continuous)",
            answers: ["were playing"],
            expected: "were playing"
          },
          {
            id: "9",
            before: "I",
            after: "my homework.",
            cue: "FINISH (present perfect simple)",
            answers: ["have finished", "'ve finished", "ve finished"],
            expected: "have finished"
          },
          {
            id: "10",
            before: "Tina",
            after: "her homework.",
            cue: "FINISH (present perfect simple)",
            answers: ["has finished", "'s finished", "s finished"],
            expected: "has finished"
          },
          {
            id: "11",
            before: "Dan",
            after: "to see the film for ages.",
            cue: "WANT (past perfect simple)",
            answers: ["had wanted"],
            expected: "had wanted"
          }
        ]
      },
      {
        id: "2",
        kicker: "Exercise 2",
        title: "Fix the bold word",
        instruction: "Each word in bold is incorrect. Rewrite it correctly.",
        kind: "fix",
        items: [
          {
            id: "1",
            before: "Wendy",
            wrong: "take",
            after: "the bus to school every day.",
            answers: ["takes"],
            expected: "takes"
          },
          {
            id: "2",
            before: "Sally",
            wrong: "gos",
            after: "to a great school.",
            answers: ["goes"],
            expected: "goes"
          },
          {
            id: "3",
            before: "Mum",
            wrong: "maked",
            after: "a lovely pizza last night.",
            answers: ["made"],
            expected: "made"
          },
          {
            id: "4",
            before: "I have",
            wrong: "saw",
            after: "this film before.",
            answers: ["seen"],
            expected: "seen"
          },
          {
            id: "5",
            before: "She's",
            wrong: "buying",
            after: "some new clothes for the party.",
            answers: ["bought"],
            expected: "bought"
          },
          {
            id: "6",
            before: "We had",
            wrong: "go",
            after: "home by then.",
            answers: ["gone"],
            expected: "gone"
          }
        ]
      },
      {
        id: "3",
        kicker: "Exercise 3",
        title: "Auxiliary verbs",
        instruction: "Write a word from the box in each gap.",
        kind: "bank",
        bank: [
          "aren't",
          "didn't",
          "doesn't",
          "don't",
          "hadn't",
          "hasn't",
          "haven't",
          "isn't",
          "wasn't",
          "weren't"
        ],
        items: [
          {
            id: "1",
            parts: ["I", "like getting up early but I have to on school days."],
            gaps: [{ answers: ["don't", "do not", "dont"], expected: "don't" }]
          },
          {
            id: "2",
            parts: ["Emma", "wear her school uniform on Sundays. She wears casual clothes."],
            gaps: [{ answers: ["doesn't", "does not", "doesnt"], expected: "doesn't" }]
          },
          {
            id: "3",
            parts: ["Phil", "watching TV. He's doing his homework."],
            gaps: [{ answers: ["isn't", "is not", "isnt"], expected: "isn't" }]
          },
          {
            id: "4",
            parts: ["We", "having pizza tonight. We're having spaghetti."],
            gaps: [{ answers: ["aren't", "are not", "arent"], expected: "aren't" }]
          },
          {
            id: "5",
            parts: ["I", "see you at the party. Were you there?"],
            gaps: [{ answers: ["didn't", "did not", "didnt"], expected: "didn't" }]
          },
          {
            id: "6",
            parts: ["My computer", "working so I took it to be repaired."],
            gaps: [{ answers: ["wasn't", "was not", "wasnt"], expected: "wasn't" }]
          },
          {
            id: "7",
            parts: ["We", "planning to have so many pets — it just happened!"],
            gaps: [{ answers: ["weren't", "were not", "werent"], expected: "weren't" }]
          },
          {
            id: "8",
            parts: ["Adrian", "got up yet. He's going to be late!"],
            gaps: [{ answers: ["hasn't", "has not", "hasnt"], expected: "hasn't" }]
          },
          {
            id: "9",
            parts: ["I'm a bit nervous because I", "taken an important exam before."],
            gaps: [{ answers: ["haven't", "have not", "havent"], expected: "haven't" }]
          },
          {
            id: "10",
            parts: ["Luckily, the dog", "gone far, so we soon found her."],
            gaps: [{ answers: ["hadn't", "had not", "hadnt"], expected: "hadn't" }]
          }
        ]
      },
      {
        id: "4",
        kicker: "Exercise 4",
        title: "Questions",
        instruction: "Put the verbs into the correct form.",
        kind: "type",
        items: [
          {
            id: "1",
            before: "How much",
            after: "those shoes?",
            cue: "BE (present simple)",
            answers: ["are"],
            expected: "are"
          },
          {
            id: "2",
            before: "Where",
            after: "your passport?",
            cue: "BE (present simple)",
            answers: ["is", "'s", "s"],
            expected: "is"
          },
          {
            id: "3",
            before: "How much",
            after: "those shoes?",
            cue: "BE (past simple)",
            answers: ["were"],
            expected: "were"
          },
          {
            id: "4",
            before: "Who",
            after: "you that present?",
            cue: "GIVE (past simple)",
            answers: ["gave"],
            expected: "gave"
          },
          {
            id: "5",
            before: "Who",
            after: "at that house?",
            cue: "LIVE (present simple)",
            answers: ["lives"],
            expected: "lives"
          },
          {
            id: "6",
            before: "Who",
            after: "with us tomorrow?",
            cue: "COME (present continuous)",
            answers: ["is coming", "'s coming", "s coming"],
            expected: "is coming"
          },
          {
            id: "7",
            before: "What",
            after: "?",
            cue: "HAPPEN (past continuous)",
            answers: ["was happening"],
            expected: "was happening"
          }
        ]
      },
      {
        id: "5",
        kicker: "Exercise 5",
        title: "Passive",
        instruction: "Complete each second sentence so it means the same as the first.",
        kind: "type",
        items: [
          {
            id: "1",
            before: "Every child",
            after: "a present.",
            cue: "They give a present to every child.",
            answers: ["is given"],
            expected: "is given"
          },
          {
            id: "2",
            before: "All the children",
            after: "a present.",
            cue: "They give a present to all the children.",
            answers: ["are given"],
            expected: "are given"
          },
          {
            id: "3",
            before: "Every child",
            after: "a present.",
            cue: "They gave a present to every child.",
            answers: ["was given"],
            expected: "was given"
          },
          {
            id: "4",
            before: "All the children",
            after: "a present.",
            cue: "They gave a present to all the children.",
            answers: ["were given"],
            expected: "were given"
          },
          {
            id: "5",
            before: "Every child",
            after: "a present.",
            cue: "They will give a present to every child.",
            answers: ["will be given", "'ll be given", "ll be given"],
            expected: "will be given"
          },
          {
            id: "6",
            before: "All the children",
            after: "a present.",
            cue: "They will give a present to all the children.",
            answers: ["will be given", "'ll be given", "ll be given"],
            expected: "will be given"
          }
        ]
      },
      {
        id: "6",
        kicker: "Exercise 6",
        title: "Modals & future forms",
        instruction: "Choose the best option to fill each gap.",
        kind: "choice",
        items: [
          {
            id: "1",
            prompt: "I ___ ride a bike when I was three years old. (CAN)",
            choices: ["cannot", "could", "can't"],
            answer: "could"
          },
          {
            id: "2",
            prompt: "I ___ to stay up late last night to finish my geography homework. (HAVE)",
            choices: ["has", "will have", "had"],
            answer: "had"
          },
          {
            id: "3",
            prompt: "Ellie ___ to clean her teeth every day after breakfast. (HAVE)",
            choices: ["has", "having", "had"],
            answer: "has"
          },
          {
            id: "4",
            prompt: "I think the weather ___ soon. (IMPROVE)",
            choices: ["improves", "will improve", "is going to improve"],
            answer: "will improve"
          },
          {
            id: "5",
            prompt: "The train ___ at half past eight this evening. (ARRIVE)",
            choices: ["arrives", "is arriving", "will arrive"],
            answer: "arrives"
          }
        ]
      },
      {
        id: "7",
        kicker: "Exercise 7",
        title: "Reported speech",
        instruction: "Complete each second sentence so it means the same as the first.",
        kind: "type",
        items: [
          {
            id: "1",
            before: 'Julius Caesar told everyone that he',
            after: "in Rome.",
            cue: '"I live in Rome," said Julius Caesar.',
            answers: ["lived"],
            expected: "lived"
          },
          {
            id: "2",
            before: "Molly said that she",
            after: "any pets.",
            cue: '"I don\'t have any pets," said Molly.',
            answers: ["didn't have", "did not have", "didnt have"],
            expected: "didn't have"
          },
          {
            id: "3",
            before: "Dave said that he",
            after: "to the cinema the next day.",
            cue: '"I\'m going to the cinema tomorrow," said Dave.',
            answers: ["was going"],
            expected: "was going"
          },
          {
            id: "4",
            before: "Greg said that he",
            after: "to the cinema the next day.",
            cue: '"I\'m not going to the cinema tomorrow," said Greg.',
            answers: ["wasn't going", "was not going", "wasnt going"],
            expected: "wasn't going"
          },
          {
            id: "5",
            before: "Julie said that she",
            after: "swim.",
            cue: '"I can\'t swim," said Julie.',
            answers: ["couldn't", "could not", "couldnt"],
            expected: "couldn't"
          }
        ]
      },
      {
        id: "8",
        kicker: "Exercise 8",
        title: "Conditionals",
        instruction: "Put the verbs into the correct form.",
        kind: "type",
        items: [
          {
            id: "1",
            before: "If Fiona",
            after: "Lucy, she'll tell her about your party.",
            cue: "SEE",
            answers: ["sees"],
            expected: "sees"
          },
          {
            id: "2",
            before: "Will Mike visit Harrods if he",
            after: "to London this summer?",
            cue: "GO",
            answers: ["goes"],
            expected: "goes"
          },
          {
            id: "3",
            before: "Tonya will miss dinner if she",
            after: "home soon.",
            cue: "NOT/COME",
            answers: ["doesn't come", "does not come", "doesnt come"],
            expected: "doesn't come"
          },
          {
            id: "4",
            before: "If I",
            after: "a million pounds, I'd give you some money.",
            cue: "WIN",
            answers: ["won"],
            expected: "won"
          },
          {
            id: "5",
            before: "What would you do all day if you",
            after: "to school?",
            cue: "NOT/GO",
            answers: ["didn't go", "did not go", "didnt go"],
            expected: "didn't go"
          },
          {
            id: "6",
            before: "I would avoid drinking fizzy drinks if I",
            after: "you.",
            cue: "BE",
            answers: ["were"],
            expected: "were"
          },
          {
            id: "7",
            before: "Anita won't catch so many colds if she",
            after: "eating healthy food.",
            cue: "NOT/STOP",
            answers: ["doesn't stop", "does not stop", "doesnt stop"],
            expected: "doesn't stop"
          }
        ]
      },
      {
        id: "9",
        kicker: "Exercise 9",
        title: "Hope or wish",
        instruction: "Choose the correct word to complete each sentence.",
        kind: "choice",
        items: [
          {
            id: "1",
            prompt: 'I hope I ___ / ___ some nice presents for my birthday!',
            choices: ["get", "got"],
            answer: "get"
          },
          {
            id: "2",
            prompt: "I wish it ___ / ___ my birthday soon!",
            choices: ["is", "was"],
            answer: "was"
          },
          {
            id: "3",
            prompt: "Paula really wishes she ___ / ___ a younger brother.",
            choices: ["has", "had"],
            answer: "had"
          },
          {
            id: "4",
            prompt: '"I hope you ___ / ___ doing your homework at the moment!" said Mum.',
            choices: ["are", "were"],
            answer: "are"
          },
          {
            id: "5",
            prompt: '"I wish it ___ / ___ raining right now," said Bill.',
            choices: ["isn't", "wasn't"],
            answer: "wasn't"
          },
          {
            id: "6",
            prompt: "I've just bought Linda's birthday present. I hope she ___ / ___ it.",
            choices: ["likes", "liked"],
            answer: "likes"
          }
        ]
      },
      {
        id: "10",
        kicker: "Exercise 10",
        title: "Message to narrative",
        instruction: "Put the verbs into the correct form.",
        kind: "type",
        preface:
          "Text message · Thursday 3pm\n\nHi Darren! How r u? I'm packing right now. Off to Moscow tomorrow. I'm going to stay with my uncle and aunt. I know I'll have a fantastic time, but I'm a bit nervous.",
        items: [
          {
            id: "1",
            before: "It was Thursday. John",
            after: "because he was flying to Moscow the next day.",
            cue: "PACK",
            answers: ["was packing"],
            expected: "was packing"
          },
          {
            id: "2",
            before: "He",
            after: "with his uncle and aunt.",
            cue: "STAY",
            answers: ["was going to stay"],
            expected: "was going to stay"
          },
          {
            id: "3",
            before: "He knew that he",
            after: "a fantastic time.",
            cue: "HAVE",
            answers: ["would have", "'d have", "d have"],
            expected: "would have"
          }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : this);
