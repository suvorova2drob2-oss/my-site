/**
 * OGE Grammar · Unit 15 · Tasks 20–28 · Seaside camp.
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u15-variant15-grammar",
    unitOrder: 15,
    title: "Unit 15 · Seaside camp",
    examSection: "Tasks 20–28",
    headerTitle: "Greetings · Scouts · survival",
    instructionHtml:
      "Преобразуйте слова, <strong>напечатанные заглавными буквами</strong>, так, чтобы они грамматически соответствовали тексту (задания <strong>20–28</strong>).",
    items: [
      {
        examNum: 20,
        paragraph: 1,
        before: "...Greetings from the seaside! It's warm and sunny here, much ",
        afterInline: " than in London I'm sure.",
        afterTail: "",
        cue: "WARM",
        answers: ["warmer"],
        keyShow: "warmer"
      },
      {
        examNum: 21,
        paragraph: 1,
        before: "The camp is ok. You probably remember that at home I ",
        afterInline: " to go to a camp at all. Now I have to admit that I was wrong \u2014 it's fun here. There are lots of people of our age and the community is nice and friendly.",
        afterTail: "",
        cue: "NOT WANT",
        answers: ["did not want", "didn't want"],
        keyShow: "did not want / didn't want"
      },
      {
        examNum: 22,
        paragraph: 1,
        before: "You ",
        afterInline: " it if you were here. The camp offers boating and canoeing, sports and we also have some Scout training here!",
        afterTail: "",
        cue: "LIKE",
        answers: ["would like", "'d like"],
        keyShow: "would like / 'd like"
      },
      {
        examNum: 23,
        paragraph: 1,
        before: "We ",
        afterInline: " by experienced Scouts and I have already learnt some basic survival skills.",
        afterTail: "",
        cue: "TEACH",
        answers: ["are taught", "are being taught"],
        keyShow: "are taught / are being taught"
      },
      {
        examNum: 24,
        paragraph: 1,
        before: "If one day I'm lost in the wood, I think I ",
        afterInline: ", for a few days at least.",
        afterTail: "",
        cue: "SURVIVE",
        answers: ["will survive", "shall survive", "'ll survive"],
        keyShow: "will survive / shall survive / 'll survive"
      },
      {
        examNum: 25,
        paragraph: 1,
        before: "I can make a fire ",
        afterInline: " and know how to put up a tent.",
        afterTail: "",
        cue: "I",
        answers: ["myself"],
        keyShow: "myself"
      },
      {
        examNum: 26,
        paragraph: 1,
        before: "If there's no tent, I can make a kind of a shelter from branches, ",
        afterInline: ", and grass.",
        afterTail: "",
        cue: "LEAF",
        answers: ["leaves"],
        keyShow: "leaves"
      },
      {
        examNum: 27,
        paragraph: 1,
        before: "To me, it ",
        afterInline: " like a game but our instructor is very serious about it. He says these skills may save our lives one day.",
        afterTail: "",
        cue: "LOOK",
        answers: ["looks"],
        keyShow: "looks"
      },
      {
        examNum: 28,
        paragraph: 1,
        before: "I hope you are fine there too. You ",
        afterInline: " all of your exams for this year, haven't you?..",
        afterTail: "",
        cue: "PASS",
        answers: ["have passed", "'ve passed"],
        keyShow: "have passed / 've passed"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
