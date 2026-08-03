/**
 * FCE-style Reading Part 7 — Going Green (four people / towns).
 * Engine: js/fce-reading-part7-matching-engine.js
 */
(function () {
  if (!window.FCE_READING_PART7) return;

  FCE_READING_PART7.mountPage({
    pack: {
      letters: ["A", "B", "C", "D"],
      names: {
        A: "Speaker A",
        B: "Speaker B",
        C: "Speaker C",
        D: "Speaker D"
      },
      examId: "unit11GoingGreenPart7",
      examLabel: "Reading: Going green \u2014 Part 7 multiple matching",
      key: {
        1: "A",
        2: "B",
        3: "A",
        4: "D",
        5: "D",
        6: "C",
        7: "B",
        8: "D",
        9: "B",
        10: "C"
      },
      explanations: {
        1: {
          letter: "A",
          quote:
            "We have some special planting days when volunteers help to increase the tree population in parks."
        },
        2: {
          letter: "B",
          quote:
            "We\u2019ve managed to decrease the amount of water used in the town as a whole \u2026 It\u2019s something like 20% down"
        },
        3: {
          letter: "A",
          quote: "there are all these bike paths now, so it feels much safer"
        },
        4: {
          letter: "D",
          quote: "buying a bike at a reduced cost to cycle there and back"
        },
        5: {
          letter: "D",
          quote:
            "It\u2019s all about not depending on outside help, for example, by growing your own vegetables. Fewer people here are reliant on supermarkets."
        },
        6: {
          letter: "C",
          quote:
            "a new scheme where you grow your own food on public land and all the local people help out"
        },
        7: {
          letter: "B",
          quote:
            "what we have done is manage to promote eco-friendly construction. The heating and design are modern and very effective."
        },
        8: {
          letter: "D",
          quote:
            "they recently introduced a system that means only certain number plates can be in the centre on one particular day"
        },
        9: {
          letter: "B",
          quote: "There has been considerable investment in buses and trains as well"
        },
        10: {
          letter: "C",
          quote: "we\u2019re running entirely on green power"
        }
      },
      statements: [
        { id: 1, text: "has a tree-planting scheme?" },
        { id: 2, text: "has seen a reduction in water usage?" },
        { id: 3, text: "has increased its number of cycle lanes?" },
        { id: 4, text: "has put the price of bikes down?" },
        { id: 5, text: "has encouraged self-sufficiency at home?" },
        { id: 6, text: "has introduced town gardens for growing produce?" },
        { id: 7, text: "has encouraged energy-efficient buildings?" },
        { id: 8, text: "has limited the number of cars going into the city centre?" },
        { id: 9, text: "has put a lot of money into public transport?" },
        { id: 10, text: "has managed to generate 100% renewable energy?" }
      ],
      passages: [
        {
          letter: "A",
          short: "A",
          name: "Person A",
          body:
            "<p>Well, in my town, there are a few new incentives that have made a welcome difference. A couple of years ago, we had a go at all that. You know, having a few places where everyone could grow their own food and cutting down on water use. It didn\u2019t seem to take off for some reason and they put an end to it, so now they\u2019ve tried another approach. We have some special planting days when volunteers help to increase the tree population in parks. It\u2019s a lovely thing to do with the family and you feel like you\u2019re making a real difference. And rather than hopping on the bus, there are all these bike paths now, so it feels much safer. The good thing is that it\u2019s not only environmentally friendly, but it\u2019s also good for your own fitness. I\u2019d love to be able to do it, but I actually work from home so it\u2019s a bit tricky.</p>"
        },
        {
          letter: "B",
          short: "B",
          name: "Person B",
          body:
            "<p>I\u2019m actually a town planner and what they\u2019ve done in my local area is incredible. It\u2019s not been quick enough in my opinion, but hopefully they\u2019ll put pressure on the council before too long. There\u2019s still a severe lack of green areas in the centre, so I hope they\u2019ll look into this in the future. However, what we have done is manage to promote eco-friendly construction. The heating and design are modern and very effective. In addition, it\u2019s all locally sourced, so that\u2019s got to be good for the economy. We\u2019ve managed to decrease the amount of water used in the town as a whole, which we\u2019re rather proud of. It\u2019s something like 20% down and we\u2019ve raised awareness of the fact that we shouldn\u2019t waste water. There has been considerable investment in buses and trains as well, which has paid off. The key message is that we should be considerate and work towards the greater good of the community.</p>"
        },
        {
          letter: "C",
          short: "C",
          name: "Person C",
          body:
            "<p>I\u2019m only aware of what people tell me or what\u2019s been reported in the local paper. If I didn\u2019t read that, I wouldn\u2019t have a clue. Anyway, I read somewhere that we\u2019re running entirely on green power. I think that\u2019s something to brag about. But smog remains a problem. If they put to use a driving scheme, whereby some people could only drive on certain days, that would be a big improvement. In my opinion, they\u2019re scared of doing that because it wouldn\u2019t be popular with the public. The clear skies and fresh air would make it worthwhile, though. I try to cycle to work and do my bit. I have to go on the main road with the traffic though, so it puts me off. My friend told me about a new scheme where you grow your own food on public land and all the local people help out. I think I\u2019d prefer that to going to the supermarket!</p>"
        },
        {
          letter: "D",
          short: "D",
          name: "Person D",
          body:
            "<p>The message here is very clear. It\u2019s all about not depending on outside help, for example, by growing your own vegetables. Fewer people here are reliant on supermarkets. This is an old market town, so we\u2019re not likely to get fancy new buildings with all the modern energy-saving stuff very soon. It would spoil the look of the place, to be honest. But they recently introduced a system that means only certain number plates can be in the centre on one particular day. It was criticised initially, but now people are starting to see the benefits of less traffic. When you\u2019re walking through the park in the centre, it\u2019s just more peaceful and you feel like you could actually be in the middle of the countryside. Alongside this, there has been an initiative for people to get fit on their way to work, like buying a bike at a reduced cost to cycle there and back. It\u2019s really worth it.</p>"
        }
      ]
    }
  });
})();
