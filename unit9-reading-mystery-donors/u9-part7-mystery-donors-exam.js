/**
 * B2 First — Reading Part 7 multiple matching (four stories).
 * Topic: Mystery donors (anonymous generosity).
 * Engine: js/fce-reading-part7-matching-engine.js
 */
(function () {
  if (!window.FCE_READING_PART7) return;

  var NAMES = {
    A: "Book sculptures (Edinburgh)",
    B: "Ambulance thank-yous (London / Surrey)",
    C: "Supermarket envelopes (Tiverton)",
    D: "US university gifts ($100m+)"
  };

  FCE_READING_PART7.mountPage({
    pack: {
      letters: ["A", "B", "C", "D"],
      names: NAMES,
      examId: "unit9MysteryDonorsPart7",
      examLabel: "Reading: Mystery donors \u2014 Part 7 multiple matching",
      key: { 1: "C", 2: "B", 3: "A", 4: "D", 5: "D", 6: "C", 7: "A", 8: "C", 9: "B", 10: "D" },
      explanations: {
        1: {
          letter: "C",
          quote:
            "The donor\u2019s identity remains unknown, in spite of the efforts of one national daily, which asked readers to get in contact if they knew who the mystery benefactor was."
        },
        2: {
          letter: "B",
          quote:
            "To their annoyance, however, the healthcare workers were told by their management to hand over any cash donations"
        },
        3: {
          letter: "A",
          quote:
            "Cutting up books may at first seem a rather strange way to show one\u2019s support for the written word"
        },
        4: {
          letter: "D",
          quote:
            "Chancellor Pamela Shockley-Zalabak managed to double her university\u2019s donation of $5.5 million by persuading private individuals in Colorado Springs to match the amount."
        },
        5: {
          letter: "D",
          quote:
            "The donations \u2026 were made on the condition that most of the money should go towards financial scholarships for women and minorities"
        },
        6: {
          letter: "C",
          quote:
            "Believing it to be part of a marketing promotion, one beneficiary nearly threw the blank envelope away."
        },
        7: {
          letter: "A",
          quote: "given that the general view was that he, or she, should remain anonymous"
        },
        8: {
          letter: "C",
          quote:
            "I have recently been fortunate enough to come into quite a lot of money \u2013 more than I need for myself and my family."
        },
        9: {
          letter: "B",
          quote:
            "The thank-you notes and money may have been a response to recent abusive messages received by ambulance crews"
        },
        10: {
          letter: "D",
          quote: "All but one of the universities were public institutions, and all were run by women."
        }
      },
      statements: [
        { id: 1, text: "mentions an unsuccessful attempt to identify the donor?" },
        { id: 2, text: "describes a source of irritation for the recipients of the donations?" },
        {
          id: 3,
          text: "suggests why people might initially question the suitability of the donations?"
        },
        {
          id: 4,
          text: "says that one gift helped someone encourage other people to make donations?"
        },
        {
          id: 5,
          text: "mentions a suggestion from the donor as to how the donations could be used?"
        },
        { id: 6, text: "says that one person initially mistook the intentions of the donor?" },
        { id: 7, text: "says that most people did not want it to be known who the donor was?" },
        { id: 8, text: "mentions the donor\u2019s recent piece of luck?" },
        {
          id: 9,
          text: "refers to unpleasant incidents which may have motivated the donations?"
        },
        {
          id: 10,
          text: "says there was only one exception to the type of recipient of the donations?"
        }
      ],
      passages: [
        {
          letter: "A",
          short: "Books",
          name: NAMES.A,
          body:
            "<p><strong>Book sculptures appear in Edinburgh\u2019s cultural centres.</strong></p>" +
            "<p>Over the course of a nine-month period, a total of ten sculptures, beautifully crafted from books, were left anonymously in various cultural buildings in the city of Edinburgh. Each was accompanied by a note, which included the words, \u2018In support of libraries, books, words, ideas and festivals\u2019. Cutting up books may at first seem a rather strange way to show one\u2019s support for the written word, but there was unanimous approval of the intricate sculptures from all those lucky enough to view them when they were put on display.</p>" +
            "<p>Each sculpture was carefully chosen: a dinosaur for the National Museum or a tiny cinema for the city\u2019s Filmhouse. Despite a strong suggestion in one of the notes that the person leaving the sculptures was a woman, journalists at a local newspaper said the donor was a man. They claimed they had discovered his identity, but kept it quiet, given that the general view was that he, or she, should remain anonymous.</p>"
        },
        {
          letter: "B",
          short: "Ambulance",
          name: NAMES.B,
          body:
            "<p><strong>Ambulance crews receive anonymous thank-you notes and cash.</strong></p>" +
            "<p>In the lead-up to the winter holiday period one year, paramedics in London and the adjoining county of Surrey began finding cards attached to their ambulances with words of thanks for their life-saving work, and up to \u00A310 in cash. The thank-you notes and money may have been a response to recent abusive messages received by ambulance crews who had parked their vehicles in front of people\u2019s driveways while dealing with emergency calls.</p>" +
            "<p>The professionally printed cards, believed to be the work of a local firm that wished to remain anonymous, told the paramedics \u2018YOU ARE AWESOME\u2019 and included the invitation: \u2018Coffee and doughnuts are on us today.\u2019 To their annoyance, however, the healthcare workers were told by their management to hand over any cash donations, as the ambulance service had \u2018strict rules and guidelines around the acceptance of monetary gifts\u2019.</p>"
        },
        {
          letter: "C",
          short: "Supermarket",
          name: NAMES.C,
          body:
            "<p><strong>Mystery man gives out money in supermarket.</strong></p>" +
            "<p>When a man entered a supermarket in Tiverton, England, and began handing out envelopes to shoppers, the recipients were delighted. In each of the envelopes was a fifty-pound note, together with a message which read: \u2018I have recently been fortunate enough to come into quite a lot of money \u2013 more than I need for myself and my family. So I thought that I would share some of it with you.\u2019 Believing it to be part of a marketing promotion, one beneficiary nearly threw the blank envelope away. Another went to the bank to check that the note was genuine. The donor\u2019s identity remains unknown, in spite of the efforts of one national daily, which asked readers to get in contact if they knew who the mystery benefactor was.</p>"
        },
        {
          letter: "D",
          short: "Universities",
          name: NAMES.D,
          body:
            "<p><strong>Philanthropist donates millions to US universities.</strong></p>" +
            "<p>Donations to educational establishments are nothing unusual, but one year, no fewer than twenty universities in the United States received a total of over $100 million from a single anonymous donor. All but one of the universities were public institutions, and all were run by women. The donations, ranging from $1.5 million to $10 million, were made on the condition that most of the money should go towards financial scholarships for women and minorities, and that the recipients make no attempt to identify the donor. Chancellor Pamela Shockley-Zalabak managed to double her university\u2019s donation of $5.5 million by persuading private individuals in Colorado Springs to match the amount. The money was used to fund single parents returning to education, as well as promising students who had to work while attending university.</p>"
        }
      ]
    }
  });
})();
