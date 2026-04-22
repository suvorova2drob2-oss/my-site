/**
 * Unit 9 Word Bank — same four themes as index.html Word Bank (robots / idioms / listening / prep).
 * Phrases match the reading spans, LEX_IDIOM_DATA, listening packs, and PREP_PHRASES_CORE.buildAppLists().
 */
(function (W) {
  "use strict";

  var U9_TTT_TOPIC_LIST = [
    { id: "robots", label: "Reading: The robots are taking over" },
    { id: "idioms", label: "Idioms: Art and creativity" },
    { id: "listening", label: "Listening: Making a mark (+ Part 2 gaps)" },
    { id: "prep", label: "Prepositional phrases" }
  ];

  /** Synonyms from U9_*_TASKS in index — paired with exact clickable phrases from reading screens. */
  var U9_TTT_READING_ROWS = []
    .concat(
      zipHintPhrase(
        [
          "Not worried at all / Of no concern whatsoever",
          "Leads to significant unease / Makes people uneasy",
          "Linked to the uncertain nature of",
          "Are closely interconnected / Work in tandem",
          "Witness personally / See for oneself",
          "Enhance one another / Work well together",
          "Won't be pushed to the margins / Won't be ignored",
          "In the near future / For the time being"
        ],
        [
          "doesn't concern me in the slightest",
          "it causes so many artists so much discomfort",
          "related to the unpredictability of where it will all end up",
          "go hand in hand",
          "observe firsthand",
          "complement each other",
          "won't be sidelined",
          "in the foreseeable future"
        ]
      )
    )
    .concat(
      zipHintPhrase(
        [
          "Completely revolutionized the way things work",
          "Losing one's job due to technical changes",
          "Unwilling to adapt to new circumstances",
          "Criticized harshly / Condemned publicly",
          "A much-needed refreshing change",
          "Inevitably heading for a major conflict",
          "Regardless of whether the result is good or bad",
          "Prevented from continuing on course / Taken off track",
          "From my personal point of view",
          "People from all sorts of backgrounds",
          "Living in a fantasy world / Deceiving themselves",
          "It is highly improbable that this will happen"
        ],
        [
          "turned upside down",
          "being made redundant",
          "reluctant to change",
          "denounced",
          "breath of fresh air",
          "on a collision course",
          "for better or worse",
          "derailed",
          "as far as I'm concerned",
          "all walks of life",
          "deluding themselves",
          "little likelihood of that"
        ]
      )
    )
    .concat(
      zipHintPhrase(
        [
          "You must give credit to / admire",
          "By any criteria / whichever way you look at it",
          "To identify / distinguish",
          "In every single case / bar none",
          "It is virtually the same as stealing",
          "To be overcharged / cheated out of money",
          "To make enough money for a comfortable life",
          "At a very early stage of development",
          "In the future / eventually"
        ],
        [
          "You have to hand it to",
          "by any standard",
          "single out",
          "without exception",
          "it's tantamount to theft",
          "get ripped off",
          "earn a decent living",
          "in its infancy",
          "down the line"
        ]
      )
    )
    .concat(
      zipHintPhrase(
        [
          "I entirely support / am in favor of it",
          "To keep pace with modern trends",
          "Narrow-minded / Having a limited view",
          "It no longer happens that...",
          "To isolate oneself / hide away",
          "Impossible / Not to be considered",
          "Unaware of current reality",
          "Lamenting / Complaining about",
          "To encounter / find by chance",
          "Contrary to common sense / intuition"
        ],
        [
          "I'm all for it!",
          "move with the times",
          "blinkered",
          "Gone are the days",
          "hole themselves up",
          "out of the question",
          "out of touch",
          "bemoaning the loss",
          "come across",
          "counterintuitive"
        ]
      )
    )
    .concat(
      zipHintPhrase(
        [
          "To crush or dominate without resistance",
          "To be at the very end / trailing behind",
          "If I were in charge / In my hands",
          "Strenuous physical or mental work",
          "An essential and integral part",
          "To be well-informed and able to distinguish",
          "To understand / To possess knowledge of"
        ],
        [
          "steamrolls over everything",
          "bringing up the rear",
          "If it were up to me",
          "hard graft",
          "part and parcel of",
          "know your Da Vinci from your Kandinsky",
          "have a grasp of"
        ]
      )
    );

  function zipHintPhrase(hints, phrases) {
    var out = [];
    for (var i = 0; i < hints.length; i++) {
      out.push({ hint: hints[i], phrase: phrases[i] || "" });
    }
    return out;
  }

  var U9_TTT_IDIOM_DATA = [
    { hint: "Something that develops slowly and only becomes interesting after some time", phrase: "slow burner" },
    { hint: "To start a task over because the previous attempt failed", phrase: "back to the drawing board" },
    { hint: "A rare object people want to collect, so it is valuable", phrase: "a collector's item" },
    {
      hint: "To have a lasting influence on people or culture (modal + infinitive: what a bold creator can still do)",
      phrase: "leave his mark"
    },
    { hint: "No fixed rules yet — you can shape the task freely", phrase: "a blank canvas" },
    { hint: "Attracted your attention suddenly", phrase: "caught my eye" },
    { hint: "To do something so well it looks effortless after practice", phrase: "down to a fine art" },
    {
      hint: "To do something very different from what your family usually does",
      phrase: "broke the mould"
    },
    { hint: "New energy that makes a place feel more exciting", phrase: "are a breath of fresh air" },
    { hint: "To look nothing like the real person or thing", phrase: "bears no resemblance to" },
    { hint: "To be very popular or well received", phrase: "go down a storm" },
    { hint: "To waste time redoing work that already exists", phrase: "reinvent the wheel" },
    { hint: "Start again from the beginning, especially after failure (a fresh start)", phrase: "a clean slate" },
    { hint: "To fail completely or get a very bad reaction (opposite of a big success)", phrase: "went down like a lead balloon" },
    { hint: "To pause until breathing is normal again, or to recover from surprise", phrase: "catch her breath" }
  ];

  var U9_TTT_LISTEN_DATA = [
    { hint: "Follow a different path than pure aesthetics (audio uses third person)", phrase: "diverges from art" },
    {
      hint: "Test the limits of what is physically possible to build",
      phrase: "pushing the boundaries"
    },
    {
      hint: "Looks attractive in design / easy on the eye — pairs with functional in the same clause",
      phrase: "aesthetically pleasing"
    },
    {
      hint: "Something that suddenly opens up your sense of what is possible",
      phrase: "a real eye opener into"
    },
    {
      hint: "Individuals focused on only one goal, often to an obsessive degree",
      phrase: "single-minded people"
    },
    { hint: "Completely determined to achieve a specific goal", phrase: "dead set on" },
    {
      hint: "Operational systems layer (lifts, pipework, circulation) named explicitly in the script",
      phrase: "building's services"
    },
    { hint: "Narrow the topic to one area (here: office buildings)", phrase: "hone in on" },
    { hint: "Be a pioneer or innovator in a field", phrase: "blazed a new trail" },
    { hint: "Extremely high, almost unbelievable prices", phrase: "eye-watering costs" },
    { hint: "Neither fully positive nor fully negative reception", phrase: "met with mixed reviews" },
    {
      hint: "Public evaluation framing (audio wording for “widely regarded”-style status)",
      phrase: "considered by some to be"
    },
    {
      hint: "Showing very little enthusiasm or interest; indifferent",
      phrase: "lukewarm at best"
    },
    {
      hint: "Recognized as something that changed how people saw the building (“game changer” in the script)",
      phrase: "iconic and a game changer of its time"
    },
    {
      hint: "To the extent that (introduces why something is remarkable)",
      phrase: "insofar as"
    },
    { hint: "Paper-only phase before it was built (same paragraph as the budget surprise)", phrase: "theoretical project" },
    {
      hint: "Show the designers’ skill through the building (verbatim from the script)",
      phrase: "communicate the expertise of their designers"
    },
    {
      hint: "Dull and lacking distinctive features (note the comma in the audio script)",
      phrase: "bland, nondescript"
    },
    { hint: "Judged an unjustified expenditure", phrase: "deemed a waste of money" }
  ];

  var U9_TTT_LISTEN_SC_DATA = [
    {
      hint: "Two-word collocation after create a — lasting impact that will stand the test of time.",
      phrase: "legacy project"
    },
    {
      hint: "Abstract noun: what those cultural buildings are for (purpose), not shape or fame.",
      phrase: "function"
    },
    { hint: "Adjective for reception — divided opinion on bold office towers in general.", phrase: "mixed" },
    {
      hint: "Operational layer (lifts, pipework) — same idea as services in the script.",
      phrase: "services"
    },
    {
      hint: "Evaluative adjective before examples — status / emblem, not only age.",
      phrase: "iconic"
    },
    { hint: "Adjective before case study — paper-only / not built yet.", phrase: "theoretical" },
    {
      hint: "Summary evaluation tied to cheap-for-its-size logic.",
      phrase: "remarkable"
    },
    {
      hint: "Professional skill on display — parallel to corporate success in the sentence.",
      phrase: "expertise"
    },
    { hint: "Sector for boring default offices — not corporate glamour.", phrase: "government" }
  ];

  function rowToWord(topic, hint, phrase) {
    return { phrase: phrase, hint: hint, topic: topic };
  }

  function buildPrepWords() {
    var prep = [];
    if (typeof PREP_PHRASES_CORE !== "undefined" && PREP_PHRASES_CORE.buildAppLists) {
      var rows = PREP_PHRASES_CORE.buildAppLists().lexPrepPhraseData || [];
      for (var i = 0; i < rows.length; i++) {
        var d = rows[i];
        if (d && d.ans) prep.push(rowToWord("prep", String(d.hint || "").trim(), String(d.ans).trim()));
      }
    }
    return prep;
  }

  function buildAllWords() {
    var w = [];
    var i;
    for (i = 0; i < U9_TTT_READING_ROWS.length; i++) {
      var r = U9_TTT_READING_ROWS[i];
      if (r.phrase) w.push(rowToWord("robots", r.hint, r.phrase));
    }
    for (i = 0; i < U9_TTT_IDIOM_DATA.length; i++) {
      var idm = U9_TTT_IDIOM_DATA[i];
      w.push(rowToWord("idioms", idm.hint, idm.phrase));
    }
    for (i = 0; i < U9_TTT_LISTEN_DATA.length; i++) {
      var li = U9_TTT_LISTEN_DATA[i];
      w.push(rowToWord("listening", li.hint, li.phrase));
    }
    for (i = 0; i < U9_TTT_LISTEN_SC_DATA.length; i++) {
      var sc = U9_TTT_LISTEN_SC_DATA[i];
      w.push(rowToWord("listening", sc.hint, sc.phrase));
    }
    w = w.concat(buildPrepWords());
    return w;
  }

  W.VOCAB_TTT_TOPIC_LIST = U9_TTT_TOPIC_LIST;
  W.VOCAB_TTT_WORDS = buildAllWords();
})(typeof window !== "undefined" ? window : this);
