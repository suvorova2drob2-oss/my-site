/**
 * ОГЭ Grammar Gym · The Verb Pump
 * Present simple / present continuous. Original game shell; task wording from the unit sheet.
 */
(function (w) {
  "use strict";

  w.OGE_VERB_PUMP = {
    id: "present-simple-continuous",
    title: "The Verb Pump",
    stations: [
      {
        id: "A",
        kicker: "Level A",
        title: "A typical day",
        instruction:
          "Look at the pictures and build sentences about what Helen usually does. Use the correct forms in the present simple.",
        kind: "build",
        items: [
          {
            id: "A1",
            img: "img/verb-pump/vp-wake.png",
            alt: "Игровая героиня просыпается у светящегося будильника",
            cues: "every day / get up / at half past seven",
            chips: ["Every day", "Helen", "gets up", "at half past seven"],
            orders: [
              ["Every day", "Helen", "gets up", "at half past seven"],
              ["Helen", "gets up", "at half past seven", "Every day"]
            ]
          },
          {
            id: "A2",
            img: "img/verb-pump/vp-lunch.png",
            alt: "Игровая героиня за неоновым обедом",
            cues: "often / eat fast food for lunch",
            chips: ["Helen", "often", "eats", "fast food for lunch"],
            orders: [["Helen", "often", "eats", "fast food for lunch"]]
          },
          {
            id: "A3",
            img: "img/verb-pump/vp-coffee.png",
            alt: "Трое друзей с кофе вечером",
            cues: "in the evening / usually / meet her friends for coffee",
            chips: ["In the evening", "Helen", "usually", "meets her friends for coffee"],
            orders: [
              ["In the evening", "Helen", "usually", "meets her friends for coffee"],
              ["Helen", "usually", "meets her friends for coffee", "In the evening"]
            ]
          },
          {
            id: "A4",
            img: "img/verb-pump/vp-cinema.png",
            alt: "Героиня в футуристическом кинозале",
            cues: "once a week / watch a film at the cinema",
            chips: ["Once a week", "Helen", "watches a film", "at the cinema"],
            orders: [
              ["Once a week", "Helen", "watches a film", "at the cinema"],
              ["Helen", "watches a film", "at the cinema", "Once a week"]
            ]
          },
          {
            id: "A5",
            img: "img/verb-pump/vp-gym.png",
            alt: "Героиня с неохотой держит гантель в зале",
            cues: "rarely / go to the gym",
            chips: ["Helen", "rarely", "goes", "to the gym"],
            orders: [["Helen", "rarely", "goes", "to the gym"]]
          },
          {
            id: "A6",
            img: "img/verb-pump/vp-drive.png",
            alt: "Героиня за рулём, рядом тренер",
            cues: "have a driving lesson / twice a week",
            chips: ["Helen", "has", "a driving lesson", "twice a week"],
            orders: [
              ["Helen", "has", "a driving lesson", "twice a week"],
              ["Twice a week", "Helen", "has", "a driving lesson"]
            ]
          }
        ]
      },
      {
        id: "B",
        kicker: "Level B",
        title: "Right now",
        instruction:
          "Open the brackets and put the verbs in the present continuous. Some sentences may be negative.",
        kind: "type",
        items: [
          {
            id: "B1",
            before: "Gordon? I think he",
            after: "a letter at the moment.",
            cue: "write",
            answers: ["is writing", "'s writing", "s writing"],
            expected: "is writing"
          },
          {
            id: "B2",
            before: "Yes, the match is on TV now, but we",
            after: ".",
            cue: "lose",
            answers: ["are losing", "'re losing", "re losing"],
            expected: "are losing"
          },
          {
            id: "B3",
            before: "Right now, Margaret",
            after: "a shower. Do you want to ring later?",
            cue: "have",
            answers: ["is having", "'s having", "s having"],
            expected: "is having"
          },
          {
            id: "B4",
            before: "Sally",
            after: "with her aunt for a few days.",
            cue: "stay",
            answers: ["is staying", "'s staying", "s staying"],
            expected: "is staying"
          },
          {
            id: "B5",
            before: "I",
            after: "! It's true! I did see Madonna at the supermarket.",
            cue: "lie",
            answers: ["am lying", "'m lying", "m lying"],
            expected: "am lying"
          },
          {
            id: "B6",
            before: "Josh",
            after: "my bike! It's so annoying.",
            cue: "always / use",
            answers: ["is always using", "'s always using", "s always using"],
            expected: "is always using"
          },
          {
            id: "B7",
            before: "We",
            after: "lunch, but I can come round and help you later.",
            cue: "have",
            answers: ["aren't having", "are not having", "'re not having", "re not having", "arent having"],
            expected: "aren't having"
          },
          {
            id: "B8",
            before: "",
            after: "music up there? It's really noisy!",
            cue: "you / play",
            answers: ["are you playing"],
            expected: "Are you playing"
          }
        ]
      },
      {
        id: "C",
        kicker: "Level C",
        title: "Fix the form",
        instruction: "Rewrite the highlighted parts correctly.",
        kind: "fix",
        items: [
          {
            id: "C1",
            before: "",
            wrong: "Are top musicians studying",
            after: "for many years?",
            answers: ["do top musicians study"],
            expected: "Do top musicians study"
          },
          {
            id: "C2",
            before: "What's going on? I hope you",
            wrong: "don't touch",
            after: "my things!",
            answers: ["aren't touching", "are not touching", "'re not touching", "arent touching"],
            expected: "aren't touching"
          },
          {
            id: "C3",
            before: "It's a small business, so each person",
            wrong: "is doing",
            after: "lots of different jobs.",
            answers: ["does"],
            expected: "does"
          },
          {
            id: "C4",
            before: "",
            wrong: "Does Christine listen",
            after: "to the radio, or is that the TV I can hear?",
            answers: ["is christine listening"],
            expected: "Is Christine listening"
          },
          {
            id: "C5",
            before: "I",
            wrong: "am usually buying",
            after: "a special ticket each week for the bus because it's cheaper.",
            answers: ["usually buy"],
            expected: "usually buy"
          },
          {
            id: "C6",
            before: "Our washing machine",
            wrong: "is starting",
            after: "when you press this button.",
            answers: ["starts"],
            expected: "starts"
          },
          {
            id: "C7",
            before: "How's the match going?",
            wrong: "Does our team win?",
            after: "",
            answers: ["is our team winning?", "is our team winning"],
            expected: "Is our team winning?"
          },
          {
            id: "C8",
            before: "Many people",
            wrong: "are enjoying",
            after: "spending time on the beach on holiday.",
            answers: ["enjoy"],
            expected: "enjoy"
          }
        ]
      },
      {
        id: "D",
        kicker: "Level D",
        title: "Pick the form",
        instruction: "Circle the correct option.",
        kind: "choice",
        items: [
          {
            id: "D1",
            prompt: "I ___ at the local library for the summer.",
            choices: ["work", "am working"],
            answer: "am working"
          },
          {
            id: "D2",
            prompt: "We ___ to the theatre very often.",
            choices: ["don't go", "aren't going"],
            answer: "don't go"
          },
          {
            id: "D3",
            prompt: "Stacy ___ ready for school, so she can't come to the phone.",
            choices: ["gets", "is getting"],
            answer: "is getting"
          },
          {
            id: "D4",
            prompt: "___ about his expedition to the Amazon jungle?",
            choices: ["Does Gary ever talk", "Is Gary ever talking"],
            answer: "Does Gary ever talk"
          },
          {
            id: "D5",
            prompt: "In squash, you ___ a ball against a wall.",
            choices: ["hit", "are hitting"],
            answer: "hit"
          },
          {
            id: "D6",
            prompt: "I ___ a newspaper at least once a week.",
            choices: ["read", "am reading"],
            answer: "read"
          },
          {
            id: "D7",
            prompt: "___ the piano for two hours every day?",
            choices: ["Do you practise", "Are you practising"],
            answer: "Do you practise"
          },
          {
            id: "D8",
            prompt: "Nadine and Claire ___ quite well at school at the moment.",
            choices: ["do", "are doing"],
            answer: "are doing"
          },
          {
            id: "D9",
            prompt: "A good friend ___ when you're upset about something.",
            choices: ["knows", "is knowing"],
            answer: "knows"
          },
          {
            id: "D10",
            prompt: "How ___ your name?",
            choices: ["do you spell", "are you spelling"],
            answer: "do you spell"
          }
        ]
      },
      {
        id: "E",
        kicker: "Level E",
        title: "Verb bank",
        instruction:
          "Fill in the gaps with the present simple or present continuous. Some sentences may be negative.",
        kind: "bank",
        bank: ["belong", "do", "have", "help", "hold", "move", "use", "watch"],
        items: [
          {
            id: "E1",
            parts: ["In Monopoly, you", "around the board, buying houses and hotels."],
            gaps: [{ answers: ["move"], expected: "move" }]
          },
          {
            id: "E2",
            parts: ["", "you", "this programme or can I turn the TV off?"],
            gaps: [
              { answers: ["are"], expected: "Are" },
              { answers: ["watching"], expected: "watching" }
            ]
          },
          {
            id: "E3",
            parts: ["Regular exercise", "you to stay healthy."],
            gaps: [{ answers: ["helps"], expected: "helps" }]
          },
          {
            id: "E4",
            parts: ["I", "my brother's guitar until I get a new one."],
            gaps: [{ answers: ["am using", "'m using", "m using"], expected: "'m using" }]
          },
          {
            id: "E5",
            parts: ["", "Simon always", "the washing-up after lunch?"],
            gaps: [
              { answers: ["does"], expected: "Does" },
              { answers: ["do"], expected: "do" }
            ]
          },
          {
            id: "E6",
            parts: ["", "you", "any sweaters in a larger size?"],
            gaps: [
              { answers: ["do"], expected: "Do" },
              { answers: ["have"], expected: "have" }
            ]
          },
          {
            id: "E7",
            parts: ["You", "the kite right. Let me show you."],
            gaps: [
              {
                answers: ["aren't holding", "are not holding", "'re not holding", "arent holding"],
                expected: "aren't holding"
              }
            ]
          },
          {
            id: "E8",
            parts: ["Dad", "to the local astronomy club."],
            gaps: [{ answers: ["belongs"], expected: "belongs" }]
          }
        ]
      }
    ]
  };
})(typeof window !== "undefined" ? window : this);
