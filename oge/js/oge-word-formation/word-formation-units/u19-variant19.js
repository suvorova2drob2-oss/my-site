/**
 * OGE Word Formation · Unit 19 · Tasks 29–34 · Driving lessons.
 */
(function (w) {
  var pack = w.__EGE_WORD_FORMATION_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u19-variant19-word-formation",
    unitOrder: 19,
    title: "Unit 19 · Driving lessons",
    examSection: "Tasks 29–34",
    headerTitle: "Driving lessons",
    instructionHtml:
      "Образуйте однокоренные слова от слов <strong>CAPS</strong> (задания <strong>29–34</strong>) — грамматически и лексически.",
    items: [
      {
        examNum: 29,
        paragraph: 1,
        before: "I've always wanted to take driving lessons and my dream came true recently. The driving school is very close to my house. Actually, it's in the ",
        afterInline: " next to it, so it takes me just a few seconds to get there.",
        afterTail: "",
        cue: "BUILD",
        answers: ["building"],
        keyShow: "building"
      },
      {
        examNum: 30,
        paragraph: 1,
        before: "My instructor is a very experienced ",
        afterInline: ". He is strict and notices my every little mistake.",
        afterTail: "",
        cue: "DRIVE",
        answers: ["driver"],
        keyShow: "driver"
      },
      {
        examNum: 31,
        paragraph: 1,
        before: "He says there are no ",
        afterInline: " things when you are on the road, and every mistake could cause serious problems.",
        afterTail: "",
        cue: "IMPORTANT",
        answers: ["unimportant"],
        keyShow: "unimportant"
      },
      {
        examNum: 32,
        paragraph: 1,
        before: "I really enjoy my lessons but driving is still very ",
        afterInline: " for me.",
        afterTail: "",
        cue: "STRESS",
        answers: ["stressful"],
        keyShow: "stressful"
      },
      {
        examNum: 33,
        paragraph: 1,
        before: "There are lots of ",
        afterInline: " situations and I have to be very attentive and careful all the time.",
        afterTail: "",
        cue: "DANGER",
        answers: ["dangerous"],
        keyShow: "dangerous"
      },
      {
        examNum: 34,
        paragraph: 1,
        before: "The ability to react ",
        afterInline: " is also necessary.",
        afterTail: "",
        cue: "QUICK",
        answers: ["quickly"],
        keyShow: "quickly"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
