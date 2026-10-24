/**
 * OGE Listening Matching · Unit 14 · Task 5 · Food.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u14-variant14-listening-match",
    unitOrder: 14,
    title: "Unit 14 · Food",
    examSection: "Task 5",
    headerTitle: "Food and eating",
    audioSrc: "audio/u14/listening-14.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "Taking up a hobby" },
      { num: 2, text: "Observing the etiquette" },
      { num: 3, text: "Eating vegetables" },
      { num: 4, text: "Keeping to a diet" },
      { num: 5, text: "Writing a cooking blog" },
      { num: 6, text: "Presenting a recipe" }
    ],
    extraStatementNum: 5,
    key: [1, 4, 3, 6, 2],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "Do you like cooking and inventing new dishes? I do. Actually, I got interested in it when, once, I saw my favourite actor in a cookery show. He was surprisingly skillful at cutting and chopping vegetables, and the dish they cooked in the studio looked delicious. I tried to do the same and the result was encouraging. At least, everyone in the family liked it. Now I cook pretty often and enjoy experimenting with different spices and unusual ingredients."
      },
      {
        id: "B",
        text:
          "People say, \"You are what you eat\". It's an exaggeration of course but our physical condition greatly depends on the products we consume. In fact, the foods we find the tastiest are often the most harmful to us. But if you want to change your eating habits, it is possible and not difficult at all. The first step is to write down all the foods you usually consume during a week. Then tick the items that could be defined as the wrong foods for you. Cross them out."
      },
      {
        id: "C",
        text:
          "There are a lot of plants useful for health and, luckily, we grow them in our region. Cabbage, carrots and beetroot are rich in vitamins and they should be on the menu all year round. They are non-allergenic and contain few calories. And, of course, pumpkin. It's not only tasty — it's very healthy! There are lots of essential vitamins and minerals in a pumpkin. You can make salads, soups, main dishes and desserts from it. And, of course, the famous pumpkin pie!"
      },
      {
        id: "D",
        text:
          "I like travelling and cooking. Visiting a new country, I always taste the national dishes. If I like the dish, I find the ingredients and try to cook it in my kitchen. Not long ago, I was in Moscow and learnt to cook a Russian-style soup. To cook it, we need: some meat, which shouldn't be very fatty, beetroot, carrots, some onions, peppers and tomatoes. According to my notes, beetroot is the main thing in the dish. We also need some garlic and green parsley."
      },
      {
        id: "E",
        text:
          "Food is, no doubt, one of the main pleasures in our life. It's important to cook it correctly. And it's also important to serve and consume it correctly. I recently visited Japan and participated in a tea ceremony, which really differs from the way I drink tea at home. First, I had to remove my shoes before entering the room. Then I was supposed to greet all the guests who were already there with a slight bow. Then I was offered a little cake, which I was to eat silently in several small bites."
      }
    ],
    presenterIntro:
      "Good afternoon. Today we have asked 5 people to give us a short interview and share their opinions about food and eating issues. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
