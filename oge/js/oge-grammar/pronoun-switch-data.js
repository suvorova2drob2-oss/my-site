/**
 * OGE Grammar Gym · Pronoun Switch (Understanding pronouns) — standalone pack.
 */
(function (w) {
  "use strict";

  w.OGE_PRONOUN_SWITCH = {
    id: "pronoun-switch",
    label: "Pronoun Switch",
    blurb: "Swap I → me, my → mine, HE → himself — exam-style pronoun skills in four quick levels.",
    rules: [
      "Object pronouns: give me, tell her, help them",
      "Possessive adjectives before nouns · pronouns alone: mine, yours",
      "Reflexive: myself, yourself, by herself"
    ],
    stations: [
      {
        id: "1",
        kicker: "Exercise 1",
        title: "Transform the word",
        instruction: "Transform the word in capitals to complete each sentence.",
        kind: "type",
        items: [
          {
            id: "1",
            before: "Mum and Dad gave",
            after: "a bike for Christmas.",
            cue: "I",
            answers: ["me"],
            expected: "me"
          },
          {
            id: "2",
            before: "I taught",
            after: "to swim.",
            cue: "HE",
            answers: ["him"],
            expected: "him"
          },
          {
            id: "3",
            before: "I told",
            after: "a secret.",
            cue: "SHE",
            answers: ["her"],
            expected: "her"
          },
          {
            id: "4",
            before: "Our teacher didn't give",
            after: "any homework.",
            cue: "WE",
            answers: ["us"],
            expected: "us"
          },
          {
            id: "5",
            before: "Their teacher didn't give",
            after: "any homework.",
            cue: "THEY",
            answers: ["them"],
            expected: "them"
          },
          {
            id: "6",
            before: "How much are",
            after: "shorts here?",
            cue: "THIS",
            answers: ["these"],
            expected: "these"
          },
          {
            id: "7",
            before: "How much are",
            after: "shorts over there?",
            cue: "THAT",
            answers: ["those"],
            expected: "those"
          }
        ]
      },
      {
        id: "2",
        kicker: "Exercise 2",
        title: "Possessive adjectives",
        instruction: "Write one word in each gap. Use the word in bold to help you.",
        kind: "type",
        items: [
          {
            id: "1",
            before: "I can't find",
            after: "pyjamas anywhere.",
            cue: "I",
            answers: ["my"],
            expected: "my"
          },
          {
            id: "2",
            before: "Do you know what",
            after: "English homework is?",
            cue: "you",
            answers: ["your"],
            expected: "your"
          },
          {
            id: "3",
            before: "Has he tidied",
            after: "bedroom?",
            cue: "he",
            answers: ["his"],
            expected: "his"
          },
          {
            id: "4",
            before: "Did she give you",
            after: "phone number?",
            cue: "she",
            answers: ["her"],
            expected: "her"
          },
          {
            id: "5",
            before: "Where's the hamster? It isn't in",
            after: "cage.",
            cue: "It",
            answers: ["its"],
            expected: "its"
          },
          {
            id: "6",
            before: "We have to hand in",
            after: "essays tomorrow.",
            cue: "We",
            answers: ["our"],
            expected: "our"
          },
          {
            id: "7",
            before: "Have they booked",
            after: "tickets for the concert yet?",
            cue: "they",
            answers: ["their"],
            expected: "their"
          }
        ]
      },
      {
        id: "3",
        kicker: "Exercise 3",
        title: "One word instead of bold",
        instruction: "Write one word to replace the words in bold.",
        kind: "type",
        items: [
          {
            id: "1",
            before: "That's not your pen. It's my pen.",
            after: "",
            cue: "my pen → one word",
            answers: ["mine"],
            expected: "mine"
          },
          {
            id: "2",
            before: "That's not my pen. It's your pen.",
            after: "",
            cue: "your pen → one word",
            answers: ["yours"],
            expected: "yours"
          },
          {
            id: "3",
            before: "That's not my pen. It's his pen.",
            after: "",
            cue: "his pen → one word",
            answers: ["his"],
            expected: "his"
          },
          {
            id: "4",
            before: "That's not my pen. It's her pen.",
            after: "",
            cue: "her pen → one word",
            answers: ["hers"],
            expected: "hers"
          },
          {
            id: "5",
            before: "That wasn't your idea. It was our idea.",
            after: "",
            cue: "our idea → one word",
            answers: ["ours"],
            expected: "ours"
          },
          {
            id: "6",
            before: "That wasn't your idea. It was their idea.",
            after: "",
            cue: "their idea → one word",
            answers: ["theirs"],
            expected: "theirs"
          },
          {
            id: "7",
            before: "I'm not talking about these shoes. I'm talking about those shoes over there.",
            after: "",
            cue: "those shoes → one word",
            answers: ["those"],
            expected: "those"
          },
          {
            id: "8",
            before: "I'm not talking about those shoes over there. I'm talking about these shoes here.",
            after: "",
            cue: "these shoes → one word",
            answers: ["these"],
            expected: "these"
          }
        ]
      },
      {
        id: "4",
        kicker: "Exercise 4",
        title: "Reflexive pronouns",
        instruction: "Transform the word in capitals into a reflexive pronoun to complete each sentence.",
        kind: "type",
        items: [
          {
            id: "1",
            before: "Alan didn't have any help at all. He did his homework",
            after: ".",
            cue: "HE",
            answers: ["himself"],
            expected: "himself"
          },
          {
            id: "2",
            before: "Jim, help",
            after: "to more biscuits if you want some.",
            cue: "YOU",
            answers: ["yourself"],
            expected: "yourself"
          },
          {
            id: "3",
            before: "Set the timer and the machine will turn",
            after: "on at the right time.",
            cue: "IT",
            answers: ["itself"],
            expected: "itself"
          },
          {
            id: "4",
            before: "We've decided to treat",
            after: "to a holiday abroad.",
            cue: "WE",
            answers: ["ourselves"],
            expected: "ourselves"
          },
          {
            id: "5",
            before: "I didn't buy that birthday card – I made it",
            after: ".",
            cue: "I",
            answers: ["myself"],
            expected: "myself"
          },
          {
            id: "6",
            before: "Kids, help",
            after: "to more biscuits if you want some.",
            cue: "YOU",
            answers: ["yourselves"],
            expected: "yourselves"
          },
          {
            id: "7",
            before: "Caroline came up with the idea completely by",
            after: ".",
            cue: "SHE",
            answers: ["herself"],
            expected: "herself"
          },
          {
            id: "8",
            before: "They asked for help because they couldn't carry all the bags by",
            after: ".",
            cue: "THEY",
            answers: ["themselves"],
            expected: "themselves"
          }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : this);
