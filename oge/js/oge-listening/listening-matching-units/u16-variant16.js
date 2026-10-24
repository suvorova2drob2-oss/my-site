/**
 * OGE Listening Matching · Unit 16 · Task 5 · Cities.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MATCHING__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u16-variant16-listening-match",
    unitOrder: 16,
    title: "Unit 16 · Living in cities",
    examSection: "Task 5",
    headerTitle: "Cities",
    audioSrc: "audio/u16/listening-16.mp3",
    instructionHtml:
      "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu: "<p>Ищи главную идею спикера, а не отдельное слово из списка.</p>",
    statements: [
      { num: 1, text: "More than just a city" },
      { num: 2, text: "Problems to solve" },
      { num: 3, text: "Cities of the future" },
      { num: 4, text: "Places to relax and recharge" },
      { num: 5, text: "Art and cultural events" },
      { num: 6, text: "Places to live and to work" }
    ],
    extraStatementNum: 5,
    key: [4, 6, 3, 1, 2],
    speakerLabels: ["A", "B", "C", "D", "E"],
    speakers: [
      {
        id: "A",
        text:
          "I live in a big city where we cannot avoid typical city problems like air pollution, noise, and traffic jams. Life is stressful and, when I have time, I go to the park not far from my house. Though it's almost in the centre of the city, it's very quiet, with old trees. The park is large. There are beautiful flowers everywhere. People walk along the lanes. Children play in the playgrounds. It's difficult to find something more relaxing and I just love being there!"
      },
      {
        id: "B",
        text:
          "According to the latest survey, most of the world's population lives in cities now. Though life in the country is less stressful, people, especially young people, prefer living in big cities in spite of the noise, stress and pollution. I believe that's because cities can offer more opportunities compared to small towns — a large job market, education prospects, modern health care and entertainment centres. All that makes people leave their small places and head to the cities."
      },
      {
        id: "C",
        text:
          "They will look different compared with the cities we are used to. They will be big, but they will be spacious and clean. Pollution won't be a problem because there will only be electric cars on the streets and they do not pollute the air. People will never litter the streets. And there will be flowers everywhere! They will grow in the parks, on the streets, even on the roofs of houses. There will also be lots of robots doing some cleaning jobs, selling foods and drinks and other things."
      },
      {
        id: "D",
        text:
          "I like travelling. As a tourist I've visited three unusual cities. Two of them are located in Europe and the third — in Asia. They are considered to be the only true city-states in the world. Do you know what a city-state is? It is an independent country that exists completely within the borders of a single city. Today there are three city-states: Monaco, Vatican City and Singapore. They are small in size but have their own governments and laws, and function as independent countries."
      },
      {
        id: "E",
        text:
          "I believe some cities are turning into difficult places to live in. Along with the comfort city life brings us, we also have to experience its negative sides — everyday stress, noise, and water and air pollution. Thousands of cars make the air difficult to breathe. Factories and plants also produce a lot of poisonous smoke which gets into the air and water. It is harmful not only to people but to trees and flowers too. We all need to do something to save our city environment."
      }
    ],
    presenterIntro:
      "Good afternoon. Today we have asked 5 people to give us a short interview and share their opinions about advantages and disadvantages of living in the cities. Now we would like to present their opinions to you."
  });
})(typeof window !== "undefined" ? window : this);
