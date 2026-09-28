/**
 * ОГЭ Grammar Gym · The Verb Pump · extra Present simple set (A–F).
 */
(function (w) {
  "use strict";

  w.OGE_VERB_PUMP_SIMPLE = {
    id: "simple",
    label: "Present simple",
    blurb: "Present simple only: form, word order, adverbs, questions, and the email task.",
    rules: ["he / she / it + -s", "do / does in questions and negatives", "adverb before main verb, after be"],
    stations: [
      {
        id: "A",
        kicker: "Level A",
        title: "Two forms",
        instruction: "Circle the correct option.",
        kind: "choice",
        items: [
          {
            id: "A1",
            prompt: "Susie and Dan ___ have English lessons on Saturday.",
            choices: ["doesn't", "don't"],
            answer: "don't"
          },
          {
            id: "A2",
            prompt: "___ you get up very early on school days?",
            choices: ["Do", "Does"],
            answer: "Do"
          },
          {
            id: "A3",
            prompt: "Barbara really ___ playing with her new friends.",
            choices: ["enjoy", "enjoys"],
            answer: "enjoys"
          },
          {
            id: "A4",
            prompt: "What ___ at weekends?",
            choices: ["do you", "you do"],
            answer: "do you"
          },
          {
            id: "A5",
            prompt: "How many text messages ___ in Russia every day?",
            choices: ["do teenagers send", "send teenagers"],
            answer: "do teenagers send"
          },
          {
            id: "A6",
            prompt: "Simon ___ ride his bike to school in the morning.",
            choices: ["don't", "doesn't"],
            answer: "doesn't"
          },
          {
            id: "A7",
            prompt: "Our cousins ___ us at the weekend.",
            choices: ["meet", "meets"],
            answer: "meet"
          },
          {
            id: "A8",
            prompt: "Sam ___ go to bed very late on school nights.",
            choices: ["doesn't", "don't"],
            answer: "doesn't"
          }
        ]
      },
      {
        id: "B",
        kicker: "Level B",
        title: "Three options",
        instruction: "Choose the correct option.",
        kind: "choice",
        items: [
          {
            id: "B1",
            prompt: "How many times a day ___ online?",
            choices: ["A does Jerry go", "B goes Jerry", "C Jerry does go"],
            answer: "A does Jerry go"
          },
          {
            id: "B2",
            prompt: "Look! ___ some people ice-skating.",
            choices: ["A They are", "B It is", "C There are"],
            answer: "C There are"
          },
          {
            id: "B3",
            prompt: "___ very late. Go to bed!",
            choices: ["A There's", "B It's", "C There"],
            answer: "B It's"
          },
          {
            id: "B4",
            prompt: "Matilda ___ comedies on TV.",
            choices: ["A watches often", "B often watch", "C often watches"],
            answer: "C often watches"
          },
          {
            id: "B5",
            prompt: "Who ___ your free time with?",
            choices: ["A do you spend", "B do spend you", "C spend you"],
            answer: "A do you spend"
          },
          {
            id: "B6",
            prompt: "Daniel ___ a late breakfast on Saturday mornings.",
            choices: ["A often has", "B has often", "C often have"],
            answer: "A often has"
          },
          {
            id: "B7",
            prompt: "Natasha and Fred ___ home from school very late.",
            choices: ["A doesn't come", "B don't come", "C not coming"],
            answer: "B don't come"
          },
          {
            id: "B8",
            prompt: "Does Vladimir like hip hop? No, he ___.",
            choices: ["A don't", "B doesn't", "C doesn't like"],
            answer: "B doesn't"
          }
        ]
      },
      {
        id: "C",
        kicker: "Level C",
        title: "Brackets",
        instruction: "Open the brackets and put the verb in the correct form.",
        kind: "type",
        items: [
          {
            id: "C1",
            before: "My friends and I",
            after: "members of the chess club at school.",
            cue: "be",
            answers: ["are", "'re", "re"],
            expected: "are"
          },
          {
            id: "C2",
            before: "Nikolai",
            after: "football on Wednesday.",
            cue: "not / play",
            answers: ["doesn't play", "does not play", "doesnt play"],
            expected: "doesn't play"
          },
          {
            id: "C3",
            before: "",
            after: "to school by bus?",
            cue: "your friends / go",
            answers: ["do your friends go"],
            expected: "Do your friends go"
          },
          {
            id: "C4",
            before: "I",
            after: "a lot of free time during the week.",
            cue: "not / have",
            answers: ["don't have", "do not have", "dont have"],
            expected: "don't have"
          },
          {
            id: "C5",
            before: "How",
            after: "your free time?",
            cue: "you / spend",
            answers: ["do you spend"],
            expected: "do you spend"
          },
          {
            id: "C6",
            before: "Sabina never",
            after: "lunch at school.",
            cue: "have",
            answers: ["has"],
            expected: "has"
          },
          {
            id: "C7",
            before: "How many children",
            after: "in your class?",
            cue: "there / be",
            answers: ["are there"],
            expected: "are there"
          },
          {
            id: "C8",
            before: "How old",
            after: "your brother?",
            cue: "be",
            answers: ["is"],
            expected: "is"
          }
        ]
      },
      {
        id: "D",
        kicker: "Level D",
        title: "Adverbs",
        instruction: "Open the brackets using the adverb and the correct verb form.",
        kind: "type",
        items: [
          {
            id: "D1",
            before: "Gina",
            after: "to the gym on Mondays.",
            cue: "go / regularly",
            answers: ["regularly goes", "goes regularly"],
            expected: "regularly goes"
          },
          {
            id: "D2",
            before: "My grandparents",
            after: "us at the weekend.",
            cue: "visit / often",
            answers: ["often visit", "visit often"],
            expected: "often visit"
          },
          {
            id: "D3",
            before: "Our teacher",
            after: "late for class.",
            cue: "be / never",
            answers: ["is never", "'s never", "s never"],
            expected: "is never"
          },
          {
            id: "D4",
            before: "People in my town",
            after: "picnics in the park.",
            cue: "have / sometimes",
            answers: ["sometimes have", "have sometimes"],
            expected: "sometimes have"
          },
          {
            id: "D5",
            before: "My little brother",
            after: "happy to play with his toys!",
            cue: "be / always",
            answers: ["is always", "'s always", "s always"],
            expected: "is always"
          },
          {
            id: "D6",
            before: "Wendy",
            after: "a uniform at school.",
            cue: "wear / usually",
            answers: ["usually wears", "wears usually"],
            expected: "usually wears"
          }
        ]
      },
      {
        id: "E",
        kicker: "Level E",
        title: "Question & short answer",
        instruction: "Write a question and a short answer.",
        kind: "pair",
        items: [
          {
            id: "E1",
            prompt: "Yuri plays tennis three times a week.",
            gaps: [
              {
                answers: [
                  "does yuri play tennis three times a week?",
                  "does yuri play tennis 3 times a week?"
                ],
                expected: "Does Yuri play tennis three times a week?"
              },
              { answers: ["yes, he does.", "yes, he does"], expected: "Yes, he does." }
            ]
          },
          {
            id: "E2",
            prompt: "Sonia has English lessons twice a week.",
            gaps: [
              {
                answers: ["does sonia have english lessons twice a week?"],
                expected: "Does Sonia have English lessons twice a week?"
              },
              { answers: ["yes, she does.", "yes, she does"], expected: "Yes, she does." }
            ]
          },
          {
            id: "E3",
            prompt: "There is a new student in our class.",
            gaps: [
              {
                answers: ["is there a new student in our class?"],
                expected: "Is there a new student in our class?"
              },
              { answers: ["yes, there is.", "yes, there is"], expected: "Yes, there is." }
            ]
          },
          {
            id: "E4",
            prompt: "Nina doesn't come home from school at four o'clock.",
            gaps: [
              {
                answers: [
                  "does nina come home from school at four o'clock?",
                  "does nina come home from school at 4 o'clock?",
                  "does nina come home from school at four oclock?"
                ],
                expected: "Does Nina come home from school at four o'clock?"
              },
              { answers: ["no, she doesn't.", "no, she does not.", "no, she doesnt."], expected: "No, she doesn't." }
            ]
          },
          {
            id: "E5",
            prompt: "There are five books in my school bag.",
            gaps: [
              {
                answers: [
                  "are there five books in my school bag?",
                  "are there five books in your school bag?"
                ],
                expected: "Are there five books in my school bag?"
              },
              { answers: ["yes, there are.", "yes, there are"], expected: "Yes, there are." }
            ]
          },
          {
            id: "E6",
            prompt: "We don't get up early on Sunday.",
            gaps: [
              {
                answers: [
                  "do we get up early on sunday?",
                  "do you get up early on sunday?"
                ],
                expected: "Do we get up early on Sunday?"
              },
              { answers: ["no, we don't.", "no, we do not.", "no, we dont."], expected: "No, we don't." }
            ]
          }
        ]
      },
      {
        id: "F",
        kicker: "Level F",
        title: "Eleni's email",
        instruction: "Fill in the gaps using the correct form of the verbs given.",
        kind: "bank",
        bank: [
          "be",
          "be",
          "enjoy",
          "have",
          "have",
          "live",
          "look",
          "love",
          "not have",
          "not like",
          "play",
          "spend",
          "swim",
          "want"
        ],
        preface:
          "Hi Tamara,\n\nThank you for your email. It's great to have a new pen friend! Here's some information about me.",
        closing: "Hope to hear from you soon,\nEleni",
        items: [
          {
            id: "F1",
            parts: ["I", "in Greece with my brother and my parents."],
            gaps: [{ answers: ["live"], expected: "live" }]
          },
          {
            id: "F2",
            parts: ["My brother is fourteen years old and I", "twelve."],
            gaps: [{ answers: ["am", "'m", "m"], expected: "am" }]
          },
          {
            id: "F3",
            parts: ["I", "sports!"],
            gaps: [{ answers: ["love", "enjoy"], expected: "love" }]
          },
          {
            id: "F4",
            parts: ["I", "in the pool three times a week"],
            gaps: [{ answers: ["swim"], expected: "swim" }]
          },
          {
            id: "F5",
            parts: ["and I also", "basketball and tennis every Tuesday and Friday."],
            gaps: [{ answers: ["play"], expected: "play" }]
          },
          {
            id: "F6",
            parts: ["My brother, Petros, is tall and good-looking. He", "sports"],
            gaps: [{ answers: ["enjoys", "loves"], expected: "enjoys" }]
          },
          {
            id: "F7",
            parts: ["but he", "reading books."],
            gaps: [
              {
                answers: ["doesn't like", "does not like", "doesnt like"],
                expected: "doesn't like"
              }
            ]
          },
          {
            id: "F8",
            parts: ["He", "to be a writer."],
            gaps: [{ answers: ["wants"], expected: "wants" }]
          },
          {
            id: "F9",
            parts: ["I", "two best friends, Maria and Eva."],
            gaps: [{ answers: ["have"], expected: "have" }]
          },
          {
            id: "F10",
            parts: ["They", "very friendly and easy-going."],
            gaps: [{ answers: ["are", "'re", "re"], expected: "are" }]
          },
          {
            id: "F11",
            parts: [
              "We",
              "the same hobbies and interests, but we have a lot of fun together. Maria is short with brown hair and blue eyes, like me, and Eva is very tall with blond hair and brown eyes."
            ],
            gaps: [
              {
                answers: ["don't have", "do not have", "dont have"],
                expected: "don't have"
              }
            ]
          },
          {
            id: "F12",
            parts: ["What", "you", "like?"],
            gaps: [
              { answers: ["do"], expected: "do" },
              { answers: ["look"], expected: "look" }
            ]
          },
          {
            id: "F13",
            parts: ["", "you", "any brothers or sisters?"],
            gaps: [
              { answers: ["do"], expected: "Do" },
              { answers: ["have"], expected: "have" }
            ]
          },
          {
            id: "F14",
            parts: ["How", "you", "your weekends?"],
            gaps: [
              { answers: ["do"], expected: "do" },
              { answers: ["spend"], expected: "spend" }
            ]
          }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : this);
