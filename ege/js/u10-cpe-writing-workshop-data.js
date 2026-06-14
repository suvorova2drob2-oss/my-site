(function (W) {
  "use strict";

  W.U10_CPE_WRITING_WORKSHOP_DATA = {
    writingBank: [
      { phrase: "The topic addressed is whether ...", para: "The central issue under discussion is whether ...", group: "intro" },
      { phrase: "The texts put forward the idea that ...", para: "The source texts advance the argument that ...", group: "intro" },
      { phrase: "it is time for society to reassess ...", para: "society now needs to reconsider ...", group: "intro" },
      { phrase: "rightly question whether ...", para: "legitimately challenge whether ...", group: "intro" },
      { phrase: "be wielded as a tool for questionable purposes", para: "be used instrumentally for dubious aims", group: "intro" },
      { phrase: "There are some fundamental flaws in that ...", para: "This position has core weaknesses that undermine it.", group: "intro" },
      { phrase: "Weighing up all the points raised, ...", para: "After balancing every argument mentioned, ...", group: "intro" },

      { phrase: "the first text asserts that ...", para: "the first input explicitly claims that ...", group: "compare" },
      { phrase: "a potential road to disaster", para: "a possible path towards serious negative consequences", group: "compare" },
      { phrase: "the second takes the view that ...", para: "the second text adopts the position that ...", group: "compare" },
      { phrase: "They come from very distinct standpoints", para: "the two sources approach the issue from clearly different positions", group: "compare" },
      { phrase: "both make valuable points", para: "each text contributes useful arguments", group: "compare" },
      { phrase: "which should be explored further", para: "which merit deeper examination", group: "compare" },
      { phrase: "It is potentially more contentious because ...", para: "It is likely to trigger more disagreement since ...", group: "compare" },
      { phrase: "They make a compelling argument for / to ...", para: "Their case is persuasive in support of ...", group: "compare" },

      { phrase: "There is no doubt that ...", para: "it is indisputable that ...", group: "stance" },
      { phrase: "should be upheld whatever the circumstances", para: "must be maintained under all conditions", group: "stance" },
      { phrase: "that ignores the fact that ...", para: "that position fails to account for the reality that ...", group: "stance" },
      { phrase: "be subjected to the editing process", para: "undergo editorial scrutiny before publication", group: "stance" },
      { phrase: "prior to publication", para: "before a text is released to the public", group: "stance" },
      { phrase: "A salient / pertinent / striking aspect of this matter is ...", para: "A particularly relevant and noticeable point here is ...", group: "stance" },
      { phrase: "Central to this idea is ...", para: "At the heart of this viewpoint lies ...", group: "stance" },

      { phrase: "Never before has society been in this situation", para: "at no previous point has society faced this exact context", group: "conclusion" },
      { phrase: "disparate voices", para: "highly diverse and different perspectives", group: "conclusion" },
      { phrase: "wanting to have their say", para: "seeking the opportunity to express their views", group: "conclusion" },
      { phrase: "What is undeniable is that ...", para: "what cannot reasonably be disputed is that ...", group: "conclusion" },
      { phrase: "needs a thorough review", para: "requires comprehensive re-evaluation", group: "conclusion" },
      { phrase: "ensure the system remains fit for purpose", para: "make sure the framework continues to function effectively", group: "conclusion" },
      { phrase: "On further inspection, ...", para: "After closer examination, ...", group: "conclusion" },
      { phrase: "Something often overlooked is that ...", para: "A point people frequently miss is that ...", group: "conclusion" }
    ],
    refTask: [
      { id: "r1", phrase: "rightly question whether censorship is being applied correctly", answer: "both" },
      { id: "r2", phrase: "They come from very distinct standpoints", answer: "both" },
      { id: "r3", phrase: "both make valuable points", answer: "both" },
      { id: "r4", phrase: "There is no doubt that", answer: "writer" },
      { id: "r5", phrase: "that ignores the fact that fewer contemporary writers are subjected to the editing process", answer: "textB" },
      { id: "r6", phrase: "What is undeniable is that", answer: "writer" }
    ],
    refChoices: [
      { id: "textA", label: "Text A only" },
      { id: "textB", label: "Text B only" },
      { id: "both", label: "Both texts" },
      { id: "writer", label: "Writer's own position" }
    ],
    writePrompts: [
      "Some censorship can protect vulnerable readers, but it can also silence important voices. Do you agree?",
      "Should all online writing be published without editorial oversight, or should there be stricter filters?",
      "Writers need freedom of speech, yet the public also needs protection from harmful content. Discuss.",
      "In modern media, is censorship more about safety or more about control? Give your view.",
      "Do reviews and platform algorithms now shape public opinion more than editors do?"
    ],
    linkers: ["however", "whereas", "although", "yet", "while", "therefore", "moreover", "nevertheless"],
    topicWords: ["censorship", "writers", "journalists", "freedom", "speech", "editorial", "publication", "public", "harmful"],
    commonMistakes: [
      { pattern: "\\bdiscuss about\\b", flags: "i", msg: "Use 'discuss' (without 'about')." },
      { pattern: "\\baccording to me\\b", flags: "i", msg: "Use 'in my opinion' instead of 'according to me'." },
      { pattern: "\\binformations\\b", flags: "i", msg: "'Information' is uncountable (no plural 'informations')." },
      { pattern: "\\bpeoples\\b", flags: "i", msg: "Use 'people' for plural in most contexts." },
      { pattern: "\\bchilds\\b", flags: "i", msg: "Plural form is 'children'." },
      { pattern: "\\bshould of\\b", flags: "i", msg: "Use 'should have', not 'should of'." }
    ],
    requiredPhrases: [
      { label: "There are some fundamental flaws in that ...", pattern: "\\bthere are some fundamental flaws in that\\b", flags: "i" },
      { label: "Weighing up all the points raised, ...", pattern: "\\bweighing up all the points raised\\b", flags: "i" },
      { label: "It is potentially more contentious because ...", pattern: "\\bit is potentially more contentious because\\b", flags: "i" },
      { label: "They make a compelling argument for / to ...", pattern: "\\bthey make a compelling argument (for|to)\\b", flags: "i" },
      { label: "A salient / pertinent / striking aspect of this matter is ...", pattern: "\\b(salient|pertinent|striking) aspect of this matter is\\b", flags: "i" },
      { label: "Central to this idea is ...", pattern: "\\bcentral to this idea is\\b", flags: "i" },
      { label: "On further inspection, ...", pattern: "\\bon further inspection\\b", flags: "i" },
      { label: "Something often overlooked is that ...", pattern: "\\bsomething often overlooked is that\\b", flags: "i" },
      { label: "rightly question whether ...", pattern: "\\brightly question whether\\b", flags: "i" },
      { label: "They come from very distinct standpoints", pattern: "\\bthey come from very distinct standpoints\\b", flags: "i" },
      { label: "both make valuable points", pattern: "\\bboth make valuable points\\b", flags: "i" },
      { label: "There is no doubt that ...", pattern: "\\bthere is no doubt that\\b", flags: "i" },
      { label: "that ignores the fact that ...", pattern: "\\bthat ignores the fact that\\b", flags: "i" },
      { label: "What is undeniable is ...", pattern: "\\bwhat is undeniable is\\b", flags: "i" }
    ]
  };
})(window);
