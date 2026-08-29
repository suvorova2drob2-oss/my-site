/**
 * Unit 8 WB — Living Abroad (Reading Part 7).
 * Engine: js/fce-reading-part7-matching-engine.js
 * Layout etalon: unit1-reading/this-is-your-life/, unit5-reading/part-time-jobs/
 */
(function () {
  if (!window.FCE_READING_PART7) return;

  FCE_READING_PART7.mountPage({
    pack: {
      letters: ["A", "B", "C", "D"],
      names: {
        A: "James",
        B: "Susanna",
        C: "Katya",
        D: "Daniel"
      },
      key: {
        1: "B",
        2: "B",
        3: "A",
        4: "C",
        5: "D",
        6: "A",
        7: "C",
        8: "B",
        9: "D",
        10: "C"
      },
      explanations: {
        1: {
          letter: "B",
          quote:
            "I\u2019m really enjoying sampling the restaurants in Rio and being invited round to friends\u2019 houses for dinner."
        },
        2: {
          letter: "B",
          quote: "I get to use my speaking skills."
        },
        3: {
          letter: "A",
          quote:
            "As I was sitting on my flight to China, I was already thinking, \u2018It\u2019s going to be ages until I see them again.\u2019"
        },
        4: {
          letter: "C",
          quote: "It\u2019s not that it\u2019s difficult and I can\u2019t complain about my time off."
        },
        5: {
          letter: "D",
          quote:
            "The distance is something which makes me anxious given that my parents are older."
        },
        6: {
          letter: "A",
          quote:
            "I\u2019ve learnt so much that it should put me in a good position job-hunting."
        },
        7: {
          letter: "C",
          quote: "I\u2019d like the chance to see more of Asia while I\u2019m here."
        },
        8: {
          letter: "B",
          quote: "the more I work, the more I can send back home."
        },
        9: {
          letter: "D",
          quote:
            "the biggest and most unexpected thing for me has been becoming surer of myself professionally."
        },
        10: {
          letter: "C",
          quote: "I could actually see myself settling here."
        }
      },
      statements: [
        { id: 1, text: "they've loved trying the local cuisine?" },
        { id: 2, text: "they enjoy trying to speak the language?" },
        { id: 3, text: "they missed their family right from the start?" },
        { id: 4, text: "they don't have to work hard in their job?" },
        { id: 5, text: "they worry about being far from older relatives?" },
        { id: 6, text: "they've gained valuable work experience?" },
        { id: 7, text: "they'd love to get a job where they can travel?" },
        { id: 8, text: "they've managed to put aside some money?" },
        { id: 9, text: "they've gained confidence since working abroad?" },
        { id: 10, text: "they can imagine staying there for a long time?" }
      ],
      passages: [
        {
          letter: "A",
          short: "James",
          name: "James",
          body:
            "<p>When I was given the chance to work overseas, I jumped at it. It\u2019s not something I\u2019d really thought much about before, but my friend had been to China and she really loved all it had to offer. I was going to see it as a working holiday. It didn\u2019t take long for me to realise the error of my ways. As I was sitting on my flight to China, I was already thinking, \u2018It\u2019s going to be ages until I see them again.\u2019 I\u2019m really close to my mum and dad, so that was hard. And I\u2019ll admit that the local cuisine is far from what I\u2019d expected \u2013 a bit of a disappointment. Having said that, the people I work with are brilliant, and I\u2019ve learnt so much that it should put me in a good position job-hunting when I get back. I\u2019m going to complete the year for sure.</p>"
        },
        {
          letter: "B",
          short: "Susanna",
          name: "Susanna",
          body:
            "<p>I\u2019ve been working in Brazil now for six months. I didn\u2019t think it would be this hard, but day to day we work long hours \u2013 much more than at home. The thing is I really don\u2019t mind at all because I get to use my speaking skills. There\u2019s a lot of humour when I make a grammatical mistake in the office of course, but I try not to worry too much about it. The other thing is that the more I work, the more I can send back home. Because accommodation is reasonable, this is more than I could have wished to make in the UK. And I\u2019m picking up some local recipes in my free time. I\u2019m really enjoying sampling the restaurants in Rio and being invited round to friends\u2019 houses for dinner. That\u2019s a real plus.</p>"
        },
        {
          letter: "C",
          short: "Katya",
          name: "Katya",
          body:
            "<p>I was on a trip around the world, but I kind of fell in love with this place, and when they offered me a job at the hotel where I was staying, I couldn\u2019t believe my luck. I made the decision right away. I\u2019ve been in Thailand now for three months. Even though I keep reassuring my mum that I am coming home as planned at the end of the year, I could actually see myself settling here. I\u2019m not sure about staying in the hotel business. It\u2019s not that it\u2019s difficult and I can\u2019t complain about my time off; I just don\u2019t think it\u2019s really for me. I\u2019d like the chance to see more of Asia while I\u2019m here, so a job which allows me to do that would be ideal. For now, though, I\u2019m happy.</p>"
        },
        {
          letter: "D",
          short: "Daniel",
          name: "Daniel",
          body:
            "<p>I did a lot of travel in my 20s, so when my boss asked me to develop the business in South Africa, I already knew it was a beautiful location. My wife would like to stay long-term, whereas I can\u2019t see us being able to survive on this salary for long. A couple of years will be enough for me. The distance is something which makes me anxious given that my parents are older and I think about the practicalities of that. I had thought I might need to brush up on my Afrikaans, but there was no need. The majority of people speak fluent English. I must say the biggest and most unexpected thing for me has been becoming surer of myself professionally. I was a bit worried about my abilities, but now I have no choice but to make speeches at conferences and lead meetings.</p>"
        }
      ]
    }
  });
})();
