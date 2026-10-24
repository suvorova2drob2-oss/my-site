/**
 * Grammar practice · Past simple, workbook blocks A–F.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  function both(list) {
    var out = [];
    var i;
    var s;
    for (i = 0; i < list.length; i++) {
      s = list[i];
      out.push(s);
      if (/[.!?]$/.test(s)) out.push(s.slice(0, -1));
      else out.push(s + ".");
    }
    return out;
  }

  pack.units.push({
    id: "u24-past-simple-a",
    unitOrder: 24,
    title: "Past simple · A · verbs",
    examSection: "Practice · A",
    headerTitle: "Past simple",
    instructionHtml:
      "Заполните пропуски, поставив глаголы в <strong>past simple</strong>. <strong>carry · collect · help · invite · love · stay · tidy · travel</strong>",
    items: [
      {
        examNum: 1,
        paragraph: 1,
        before: "My dad ",
        afterInline: " coins and stamps when he was little.",
        afterTail: "",
        cue: "PAST SIMPLE",
        answers: ["collected"],
        keyShow: "collected"
      },
      {
        examNum: 2,
        paragraph: 1,
        before: "We ",
        afterInline: " the boxes of CDs and put them on the stage for the DJ.",
        afterTail: "",
        cue: "PAST SIMPLE",
        answers: ["carried"],
        keyShow: "carried"
      },
      {
        examNum: 3,
        paragraph: 1,
        before: "David ",
        afterInline: " us to his house for dinner.",
        afterTail: "",
        cue: "PAST SIMPLE",
        answers: ["invited"],
        keyShow: "invited"
      },
      {
        examNum: 4,
        paragraph: 1,
        before: "They ",
        afterInline: " up late playing a computer game.",
        afterTail: "",
        cue: "PAST SIMPLE",
        answers: ["stayed"],
        keyShow: "stayed"
      },
      {
        examNum: 5,
        paragraph: 1,
        before: "She ",
        afterInline: " the room before the guests arrived.",
        afterTail: "",
        cue: "PAST SIMPLE",
        answers: ["tidied"],
        keyShow: "tidied"
      },
      {
        examNum: 6,
        paragraph: 1,
        before: "I ",
        afterInline: " to Rome on a school trip last summer.",
        afterTail: "",
        cue: "PAST SIMPLE",
        answers: ["travelled", "traveled"],
        keyShow: "travelled"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "The drama group ",
        afterInline: " to make the scenery for the play.",
        afterTail: "",
        cue: "PAST SIMPLE",
        answers: ["helped"],
        keyShow: "helped"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "Tanya ",
        afterInline: " the clothes in the fashion show.",
        afterTail: "",
        cue: "PAST SIMPLE",
        answers: ["loved"],
        keyShow: "loved"
      }
    ]
  });

  pack.units.push({
    id: "u25-past-simple-b",
    unitOrder: 25,
    title: "Past simple · B · negative",
    examSection: "Practice · B",
    headerTitle: "Past simple · negative",
    instructionHtml:
      "Заполните пропуски, поставив глаголы в отрицательную форму <strong>past simple</strong>. <strong>cook · enjoy · invite · like · open · perform · want · watch</strong>",
    items: [
      {
        examNum: 1,
        paragraph: 1,
        before: "Lucy ",
        afterInline: " any TV last night.",
        afterTail: "",
        cue: "NOT",
        answers: ["didn't watch", "did not watch", "didnt watch"],
        keyShow: "didn't watch"
      },
      {
        examNum: 2,
        paragraph: 1,
        before: "Paul ",
        afterInline: " me to go to his party.",
        afterTail: "",
        cue: "NOT",
        answers: ["didn't invite", "did not invite", "didnt invite"],
        keyShow: "didn't invite"
      },
      {
        examNum: 3,
        paragraph: 1,
        before: "We ",
        afterInline: " ourselves at the concert on Saturday.",
        afterTail: "",
        cue: "NOT",
        answers: ["didn't enjoy", "did not enjoy", "didnt enjoy"],
        keyShow: "didn't enjoy"
      },
      {
        examNum: 4,
        paragraph: 1,
        before: "I ",
        afterInline: " the horror film we watched.",
        afterTail: "",
        cue: "NOT",
        answers: ["didn't like", "did not like", "didnt like"],
        keyShow: "didn't like"
      },
      {
        examNum: 5,
        paragraph: 1,
        before: "They ",
        afterInline: " to go to the art gallery.",
        afterTail: "",
        cue: "NOT",
        answers: ["didn't want", "did not want", "didnt want"],
        keyShow: "didn't want"
      },
      {
        examNum: 6,
        paragraph: 1,
        before: "The band ",
        afterInline: " my favourite song.",
        afterTail: "",
        cue: "NOT",
        answers: ["didn't perform", "did not perform", "didnt perform"],
        keyShow: "didn't perform"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Paul ",
        afterInline: " any of his presents!",
        afterTail: "",
        cue: "NOT",
        answers: ["didn't open", "did not open", "didnt open"],
        keyShow: "didn't open"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "I ",
        afterInline: " dinner for my parents.",
        afterTail: "",
        cue: "NOT",
        answers: ["didn't cook", "did not cook", "didnt cook"],
        keyShow: "didn't cook"
      }
    ]
  });

  pack.units.push({
    id: "u26-past-simple-c",
    unitOrder: 26,
    title: "Past simple · C · questions",
    examSection: "Practice · C",
    headerTitle: "Questions and short answers",
    wideGaps: true,
    instructionHtml:
      "Составьте вопросы и краткие ответы к ним.",
    items: [
      {
        examNum: 1,
        paragraph: 1,
        before: "Suzy / listen / to your new song? ",
        afterInline: "",
        afterTail: "",
        cue: "YES",
        answers: both([
          "Did Suzy listen to your new song? Yes, she did.",
          "Did Suzy listen to your new song? Yes she did."
        ]),
        keyShow: "Did Suzy listen to your new song? Yes, she did."
      },
      {
        examNum: 2,
        paragraph: 1,
        before: "you / order / pizza for lunch? ",
        afterInline: "",
        afterTail: "",
        cue: "YES",
        answers: both([
          "Did you order pizza for lunch? Yes, I did.",
          "Did you order pizza for lunch? Yes, we did.",
          "Did you order pizza for lunch? Yes I did.",
          "Did you order pizza for lunch? Yes we did."
        ]),
        keyShow: "Did you order pizza for lunch? Yes, I did."
      },
      {
        examNum: 3,
        paragraph: 1,
        before: "Simon / ask / you to come out with us? ",
        afterInline: "",
        afterTail: "",
        cue: "NO",
        answers: both([
          "Did Simon ask you to come out with us? No, he didn't.",
          "Did Simon ask you to come out with us? No, he did not.",
          "Did Simon ask you to come out with us? No he didn't.",
          "Did Simon ask you to come out with us? No he did not."
        ]),
        keyShow: "Did Simon ask you to come out with us? No, he didn't."
      },
      {
        examNum: 4,
        paragraph: 1,
        before: "they / visit / the new shopping centre in town? ",
        afterInline: "",
        afterTail: "",
        cue: "YES",
        answers: both([
          "Did they visit the new shopping centre in town? Yes, they did.",
          "Did they visit the new shopping center in town? Yes, they did.",
          "Did they visit the new shopping centre in town? Yes they did.",
          "Did they visit the new shopping center in town? Yes they did."
        ]),
        keyShow: "Did they visit the new shopping centre in town? Yes, they did."
      },
      {
        examNum: 5,
        paragraph: 1,
        before: "your mum / bake / this cake for your birthday? ",
        afterInline: "",
        afterTail: "",
        cue: "NO",
        answers: both([
          "Did your mum bake this cake for your birthday? No, she didn't.",
          "Did your mom bake this cake for your birthday? No, she didn't.",
          "Did your mum bake this cake for your birthday? No, she did not.",
          "Did your mom bake this cake for your birthday? No, she did not.",
          "Did your mum bake this cake for your birthday? No she didn't.",
          "Did your mom bake this cake for your birthday? No she didn't."
        ]),
        keyShow: "Did your mum bake this cake for your birthday? No, she didn't."
      },
      {
        examNum: 6,
        paragraph: 1,
        before: "he / dance / at the rock festival? ",
        afterInline: "",
        afterTail: "",
        cue: "NO",
        answers: both([
          "Did he dance at the rock festival? No, he didn't.",
          "Did he dance at the rock festival? No, he did not.",
          "Did he dance at the rock festival? No he didn't."
        ]),
        keyShow: "Did he dance at the rock festival? No, he didn't."
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Rachel / paint / that picture of you? ",
        afterInline: "",
        afterTail: "",
        cue: "YES",
        answers: both([
          "Did Rachel paint that picture of you? Yes, she did.",
          "Did Rachel paint that picture of you? Yes she did."
        ]),
        keyShow: "Did Rachel paint that picture of you? Yes, she did."
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "the school / organise / the trip to the adventure park? ",
        afterInline: "",
        afterTail: "",
        cue: "NO",
        answers: both([
          "Did the school organise the trip to the adventure park? No, it didn't.",
          "Did the school organize the trip to the adventure park? No, it didn't.",
          "Did the school organise the trip to the adventure park? No, it did not.",
          "Did the school organize the trip to the adventure park? No, it did not.",
          "Did the school organise the trip to the adventure park? No, they didn't.",
          "Did the school organize the trip to the adventure park? No, they didn't.",
          "Did the school organise the trip to the adventure park? No it didn't.",
          "Did the school organize the trip to the adventure park? No it didn't."
        ]),
        keyShow: "Did the school organise the trip to the adventure park? No, it didn't."
      }
    ]
  });

  pack.units.push({
    id: "u27-past-simple-d",
    unitOrder: 27,
    title: "Past simple · D · time words",
    examSection: "Practice · D",
    headerTitle: "Circle the right word",
    instructionHtml: "Обведите правильный вариант ответа.",
    items: [
      {
        examNum: 1,
        paragraph: 1,
        before: "Did Jessie help you make the costumes ",
        afterInline: "?",
        afterTail: "",
        cue: "MONDAY / YESTERDAY",
        answers: ["yesterday"],
        keyShow: "yesterday"
      },
      {
        examNum: 2,
        paragraph: 1,
        before: "I didn't act in the school play this ",
        afterInline: ", unfortunately.",
        afterTail: "",
        cue: "NIGHT / YEAR",
        answers: ["year"],
        keyShow: "year"
      },
      {
        examNum: 3,
        paragraph: 1,
        before: "My cousins arrived from London a week ",
        afterInline: ".",
        afterTail: "",
        cue: "LAST / AGO",
        answers: ["ago"],
        keyShow: "ago"
      },
      {
        examNum: 4,
        paragraph: 1,
        before: "The new burger bar opened ",
        afterInline: " January.",
        afterTail: "",
        cue: "IN / ON",
        answers: ["in"],
        keyShow: "in"
      },
      {
        examNum: 5,
        paragraph: 1,
        before: "Did the concert start ",
        afterInline: " 8 pm yesterday?",
        afterTail: "",
        cue: "ON / AT",
        answers: ["at"],
        keyShow: "at"
      },
      {
        examNum: 6,
        paragraph: 1,
        before: "He first started learning to play the guitar ",
        afterInline: " 2012.",
        afterTail: "",
        cue: "IN / AT",
        answers: ["in"],
        keyShow: "in"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Michael didn't want to come to the cinema yesterday ",
        afterInline: ".",
        afterTail: "",
        cue: "NIGHT / EVENING",
        answers: ["evening"],
        keyShow: "evening"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "I go to photography classes ",
        afterInline: " Fridays.",
        afterTail: "",
        cue: "ON / AT",
        answers: ["on"],
        keyShow: "on"
      }
    ]
  });

  pack.units.push({
    id: "u28-past-simple-e",
    unitOrder: 28,
    title: "Past simple · E · The best gig",
    examSection: "Practice · E",
    headerTitle: "The best gig in town!",
    instructionHtml:
      "Раскройте скобки, поставив глаголы в <strong>past simple</strong>.",
    items: [
      {
        examNum: 1,
        paragraph: 1,
        before: "The best gig in town! I ",
        afterInline: " it was going to be a great night as soon as I",
        afterTail: "",
        cue: "REALISE",
        answers: ["realised", "realized"],
        keyShow: "realised"
      },
      {
        examNum: 2,
        paragraph: 1,
        before: "",
        afterInline: ". The club owners",
        afterTail: "",
        cue: "ARRIVE",
        answers: ["arrived"],
        keyShow: "arrived"
      },
      {
        examNum: 3,
        paragraph: 1,
        before: "",
        afterInline: " the club with lots of balloons and bright lights, which really",
        afterTail: "",
        cue: "DECORATE",
        answers: ["decorated"],
        keyShow: "decorated"
      },
      {
        examNum: 4,
        paragraph: 1,
        before: "",
        afterInline: " a good atmosphere. It",
        afterTail: "",
        cue: "CREATE",
        answers: ["created"],
        keyShow: "created"
      },
      {
        examNum: 5,
        paragraph: 1,
        before: "",
        afterInline: " some of us when the band, Joy Tent,",
        afterTail: "",
        cue: "NOT SURPRISE",
        answers: ["didn't surprise", "did not surprise", "didnt surprise"],
        keyShow: "didn't surprise"
      },
      {
        examNum: 6,
        paragraph: 1,
        before: "",
        afterInline: " on stage an hour late but no one really",
        afterTail: "",
        cue: "APPEAR",
        answers: ["appeared"],
        keyShow: "appeared"
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "",
        afterInline: " because they're a wonderful band and they",
        afterTail: "",
        cue: "CARE",
        answers: ["cared"],
        keyShow: "cared"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "",
        afterInline: " such great music. When they",
        afterTail: "",
        cue: "PLAY",
        answers: ["played"],
        keyShow: "played"
      },
      {
        examNum: 9,
        paragraph: 1,
        before: "",
        afterInline: " up their guitars, everyone in the club",
        afterTail: "",
        cue: "PICK",
        answers: ["picked"],
        keyShow: "picked"
      },
      {
        examNum: 10,
        paragraph: 1,
        before: "",
        afterInline: " dancing and, I'm glad to say, they",
        afterTail: "",
        cue: "START",
        answers: ["started"],
        keyShow: "started"
      },
      {
        examNum: 11,
        paragraph: 1,
        before: "",
        afterInline: " all night. At the end of the evening the lead singer",
        afterTail: "",
        cue: "NOT STOP",
        answers: ["didn't stop", "did not stop", "didnt stop"],
        keyShow: "didn't stop"
      },
      {
        examNum: 12,
        paragraph: 1,
        before: "",
        afterInline: ",",
        afterTail: "",
        cue: "SHOUT",
        answers: ["shouted"],
        keyShow: "shouted"
      },
      {
        examNum: 13,
        paragraph: 1,
        before: " '",
        afterInline: " yourselves?' and everybody",
        afterTail: "",
        cue: "YOU / ENJOY",
        answers: ["did you enjoy"],
        keyShow: "Did you enjoy"
      },
      {
        examNum: 14,
        paragraph: 1,
        before: "",
        afterInline: " with a loud 'Yes!' What a fantastic night!",
        afterTail: "",
        cue: "ANSWER",
        answers: ["answered"],
        keyShow: "answered"
      }
    ]
  });

  pack.units.push({
    id: "u29-past-simple-f",
    unitOrder: 29,
    title: "Past simple · F · sentences",
    examSection: "Practice · F",
    headerTitle: "Make sentences",
    wideGaps: true,
    instructionHtml:
      "Составьте предложения, употребив глагол в <strong>past simple</strong>.",
    items: [
      {
        examNum: 1,
        paragraph: 1,
        before: "Bella / cook dinner / and wash up / every day / last week ",
        afterInline: "",
        afterTail: "",
        cue: "WRITE",
        answers: both([
          "Bella cooked dinner and washed up every day last week."
        ]),
        keyShow: "Bella cooked dinner and washed up every day last week."
      },
      {
        examNum: 2,
        paragraph: 1,
        before: "you / stay / at home / last night? ",
        afterInline: "",
        afterTail: "",
        cue: "WRITE",
        answers: both(["Did you stay at home last night?"]),
        keyShow: "Did you stay at home last night?"
      },
      {
        examNum: 3,
        paragraph: 1,
        before: "I / post / a letter / and then / I / walk / to the shops / after lunch ",
        afterInline: "",
        afterTail: "",
        cue: "WRITE",
        answers: both([
          "I posted a letter and then I walked to the shops after lunch."
        ]),
        keyShow: "I posted a letter and then I walked to the shops after lunch."
      },
      {
        examNum: 4,
        paragraph: 1,
        before: "the band / not play / at the concert because / they / not want / to perform ",
        afterInline: "",
        afterTail: "",
        cue: "WRITE",
        answers: both([
          "The band didn't play at the concert because they didn't want to perform.",
          "The band did not play at the concert because they did not want to perform.",
          "The band didn't play at the concert because they did not want to perform.",
          "The band did not play at the concert because they didn't want to perform."
        ]),
        keyShow: "The band didn't play at the concert because they didn't want to perform."
      },
      {
        examNum: 5,
        paragraph: 1,
        before: "we / talk / about the evening / and / we / laugh / about it ",
        afterInline: "",
        afterTail: "",
        cue: "WRITE",
        answers: both([
          "We talked about the evening and we laughed about it."
        ]),
        keyShow: "We talked about the evening and we laughed about it."
      },
      {
        examNum: 6,
        paragraph: 1,
        before: "Andy / not fix / my bike / yesterday ",
        afterInline: "",
        afterTail: "",
        cue: "WRITE",
        answers: both([
          "Andy didn't fix my bike yesterday.",
          "Andy did not fix my bike yesterday."
        ]),
        keyShow: "Andy didn't fix my bike yesterday."
      },
      {
        examNum: 7,
        paragraph: 1,
        before: "Paul / wash / the car / after / he / finish / work? ",
        afterInline: "",
        afterTail: "",
        cue: "WRITE",
        answers: both(["Did Paul wash the car after he finished work?"]),
        keyShow: "Did Paul wash the car after he finished work?"
      },
      {
        examNum: 8,
        paragraph: 1,
        before: "last month / they / play / video games / and watch / films / every weekend ",
        afterInline: "",
        afterTail: "",
        cue: "WRITE",
        answers: both([
          "Last month they played video games and watched films every weekend.",
          "Last month, they played video games and watched films every weekend."
        ]),
        keyShow: "Last month they played video games and watched films every weekend."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
