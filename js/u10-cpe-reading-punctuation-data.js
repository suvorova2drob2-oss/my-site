(function (W) {
  "use strict";

  W.U10_CPE_READING_PUNCTUATION_DATA = {
    correct: ["A", "C", "D", "A", "B", "D"],
    mcq: [
      {
        q: "The writer mentions a 2015 study in order to",
        options: {
          A: "illustrate how research results can be misused to support weak claims.",
          B: "suggest that a new phenomenon appears predominantly in digital communication.",
          C: "validate an assertion about generational changes in language use.",
          D: "highlight differences in the way young people interpret punctuation."
        }
      },
      {
        q: "According to the writer, how was modernism different from earlier literary styles?",
        options: {
          A: "It rejected the use of punctuation as a means of communicating a message.",
          B: "It ushered in a variety of techniques that are still in widespread use today.",
          C: "It challenged accepted norms that readers had come to expect.",
          D: "It set about to portray the unpleasant realities of its time."
        }
      },
      {
        q: "How does the writer suggest she feels about punctuation?",
        options: {
          A: "It is a manufactured construct with no inherent value.",
          B: "It would have made historic texts easier to process.",
          C: "It is vital for expressing complex ideas in writing.",
          D: "It can hinder the realistic representation of thought."
        }
      },
      {
        q: "Ducks, Newburyport and Girl, Woman, Other are different from modernist works in that ...",
        options: {
          A: "they were influenced by features of 21st-century communication.",
          B: "they used unconventional means to organise stretches of text.",
          C: "they were respected at the time of writing by the literary mainstream.",
          D: "they barely contained any punctuation."
        }
      },
      {
        q: "What do Smith, Rooney and Johnson have in common, according to the writer?",
        options: {
          A: "their frustration with banal and repetitive interviews about their work",
          B: "the use of a technique to make the reader feel at one with the speakers",
          C: "their creation of powerful and unforgettable fictional personas",
          D: "the striking visual impact of their unconventional use of punctuation"
        }
      },
      {
        q: "How did the writer's reaction to Girl, Woman, Other evolve as she was reading it?",
        options: {
          A: "She gained a new sense of who the lead characters were.",
          B: "She accepted that the unusual punctuation was central to the plot.",
          C: "Her discomfort with the instability of the plot lessened.",
          D: "She became less annoyed by the book's idiosyncratic style."
        }
      }
    ],
    hunts: [
      {
        prompt: "Q1 focus: why the writer uses the 2015 study.",
        chunks: [
          {
            text: "Despite the lack of evidence that this is in any way a 'Gen Z' phenomenon ... teenagers have inevitably borne the brunt of punctuation purists' fury.",
            sol: "e",
            why: "Evidence: this shows the study is used, then qualified and reframed to criticize over-generalized claims."
          },
          {
            text: "The final chapter of Ulysses is one infamous sentence.",
            sol: "d",
            why: "Distractor: this supports modernism (Q2), not the purpose of citing the 2015 study."
          },
          {
            text: "There is decent evidence to support this claim: a 2015 study ... punctuation is being squeezed out.",
            sol: "e",
            why: "Evidence: direct mention of the study and the digital-punctuation claim it informs."
          },
          {
            text: "Most of Jenny's clients are wealthy.",
            sol: "d",
            why: "Distractor: unrelated sentence from a different text, no link to this article."
          }
        ]
      },
      {
        prompt: "Q2 focus: what modernism changed.",
        chunks: [
          {
            text: "Modernism questioned the comfortable conventions of the traditional novel with its well-constructed plots ...",
            sol: "e",
            why: "Evidence: explicitly states modernism challenged established reader expectations."
          },
          {
            text: "It was a system invented in the late medieval and early modern period, mostly for ease of communication.",
            sol: "d",
            why: "Distractor: this is historical background about punctuation, not the defining move of modernism."
          },
          {
            text: "To writers like Virginia Woolf and James Joyce, such order was artificial; they experimented with looser certainties.",
            sol: "e",
            why: "Evidence: confirms modernists broke with inherited formal order."
          },
          {
            text: "The joint winner that same year ... was shortlisted for the Booker Prize.",
            sol: "d",
            why: "Distractor: this is about contemporary novels, not a definition of modernism."
          }
        ]
      },
      {
        prompt: "Q3 focus: writer's attitude to punctuation.",
        chunks: [
          {
            text: "Punctuation is the gig lamps, useful but artificial; free-flowing prose is the more truthful envelope of consciousness.",
            sol: "e",
            why: "Evidence: she presents punctuation as potentially artificial and less true to mental flow."
          },
          {
            text: "Ancient Greek texts contain no gaps between words, let alone full stops ... We owe punctuation nothing.",
            sol: "e",
            why: "Evidence: she frames punctuation as historical convention, not sacred necessity."
          },
          {
            text: "Finding out the truth is often just too painful to do on your own.",
            sol: "d",
            why: "Distractor: unrelated quote from another article."
          },
          {
            text: "Such technical variations reflect more than literary bling.",
            sol: "d",
            why: "Distractor: relevant to style effects (Q4/Q5), but not directly her core stance in Q3."
          }
        ]
      },
      {
        prompt: "Q4 focus: how 2019 examples differ from modernists.",
        chunks: [
          {
            text: "Such under-use does not herald the collapse of communication ... not unconnected to our digital age.",
            sol: "e",
            why: "Evidence: ties contemporary punctuation experiments to the digital era."
          },
          {
            text: "In 2019 ... Ducks, Newburyport ... and Girl, Woman, Other ... line breaks like poetry.",
            sol: "d",
            why: "Distractor: gives examples of unconventional form (shared with modernists), not the key difference asked in Q4."
          },
          {
            text: "No one thinks in full sentences or arranges thoughts into paragraphs.",
            sol: "d",
            why: "Distractor: this supports modernist poetics, not the modern 21st-century difference."
          },
          {
            text: "It is merely to suggest that such under-use ... is not unconnected to our digital age.",
            sol: "e",
            why: "Evidence: the distinctive modern condition is explicit digital-age influence."
          }
        ]
      },
      {
        prompt: "Q5 focus: what Smith, Rooney and Johnson share.",
        chunks: [
          {
            text: "Removing the speech marks peels away a barrier between those voices and the reader; they speak inside your head ...",
            sol: "e",
            why: "Evidence: shows technique creating intimacy and reader closeness."
          },
          {
            text: "When too many journalists asked her about this, Rooney's exasperated response was ...",
            sol: "d",
            why: "Distractor: this line does not appear in this article and changes the argument."
          },
          {
            text: "Johnson and Rooney's stories ... fragments of whip-smart dialogue ... something of their intimacy stares back at you.",
            sol: "e",
            why: "Evidence: direct support for the shared intimacy effect."
          },
          {
            text: "The little black dot of a barrier proves as unnecessary as the barriers we use to separate different kinds of people.",
            sol: "d",
            why: "Distractor: this supports Q6's evolution point more than the Smith/Rooney/Johnson commonality."
          }
        ]
      },
      {
        prompt: "Q6 focus: how reaction to Girl, Woman, Other changes while reading.",
        chunks: [
          {
            text: "When you first read Girl, Woman, Other, it feels contrived ...",
            sol: "e",
            why: "Evidence: initial irritation/discomfort with odd style is explicit."
          },
          {
            text: "By the end of the novel, you have entirely forgotten its punctuation is unconventional.",
            sol: "e",
            why: "Evidence: confirms discomfort fades as reading continues."
          },
          {
            text: "Other characters flirt between entirely different identities.",
            sol: "d",
            why: "Distractor: this is plot/theme detail, not the core trajectory of the writer's reaction."
          },
          {
            text: "One casualty was consistent punctuation: the final chapter of Ulysses is one infamous sentence.",
            sol: "d",
            why: "Distractor: this concerns modernism, not her evolving response to Evaristo's novel."
          }
        ]
      }
    ]
  };
})(window);
