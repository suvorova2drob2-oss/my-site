/**
 * OGE Reading · Unit 3 · Task 12 · Orchestras.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u3-variant3-reading-match",
    unitOrder: 3,
    title: "Unit 3 · Orchestras",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "It's hard to believe, but first orchestras had no conductors. One of the musicians ran the performance, though sometimes it was misleading and indistinct. The rules were changed by German composer Richard Wagner, who was convinced that an orchestra needed a leader, and thus he became the first conductor in history. A conductor gives instructions for the placement of musicians on the stage, shows the rhythm and the pitch of sounds."
      },
      {
        letter: "B",
        text:
          "Orchestras perform a wide range of musical genres. They may differ in the number of musicians, but, more importantly, they can use different types of musical instruments. There are symphonic orchestras, which are also called philharmonic ones, where you can see all sorts of instruments. In string orchestras, instruments like violins, cellos and double basses lead. In brass bands, the brass instruments like horns, trumpets and trombones play the main parts."
      },
      {
        letter: "C",
        text:
          "To be seen from any part of the stage or orchestra pit, the conductor always stands in front of the orchestra. The musicians are grouped around him according to their instruments. Richard Wagner preferred violins to sit in the right and left sectors, divided by flutes and horns. It is called the German arrangement. In Russian orchestras, all violins are at the front, next to the footlights, and the drums are at the back."
      },
      {
        letter: "D",
        text:
          "Since ancient times, people have enjoyed playing musical instruments, individually or in groups. The conception of the orchestra, however, appeared much later, more than 400 years ago, in the 17th century. Originally, the word orchestra denoted not a group of musicians but a round stage for performers in the ancient theatre. The musicians may play directly from the stage or from the orchestra pit, which makes them almost invisible to the audience."
      },
      {
        letter: "E",
        text:
          "You have probably heard about the orchestra from Vienna, which plays the instruments made from different vegetables — pumpkins, cucumbers, carrots, and even peppers. The orchestra has given more than 300 concerts! Before the performance, the musicians of that orchestra make new instruments from raw or dried vegetables. After the concert, the vegetables are cooked for the audience. That looks like fun, doesn't it?"
      },
      {
        letter: "F",
        text:
          "Tuning the instruments before the concert is the procedure no orchestra can ignore. Every musician takes the standard A note on it. As they do it without the conductor's command, the tuning sound may seem chaotic, but this does not mean that the orchestra cannot play well. It is a necessary step to make sure that they will produce pure sound during the concert."
      }
    ],

    headlines: [
      { num: 1, text: "When did the first orchestras appear?" },
      { num: 2, text: "Who helps the orchestra's musicians play synchronously?" },
      { num: 3, text: "Are all orchestras the same or different?" },
      { num: 4, text: "What is the most difficult instrument to play in the orchestra?" },
      { num: 5, text: "How are the orchestra's musicians placed on the stage?" },
      { num: 6, text: "What is the routine all orchestras have to follow?" },
      { num: 7, text: "Can orchestras use unusual instruments for their shows?" }
    ],

    key: { A: 2, B: 3, C: 5, D: 1, E: 7, F: 6 },
    extraHeadlineNum: 4,

    explanationsRu: {
      A: "Conductor, rhythm and pitch → вопрос 2.",
      B: "Different types of orchestras → вопрос 3.",
      C: "Placement on stage → вопрос 5.",
      D: "17th century → вопрос 1.",
      E: "Vegetable instruments → вопрос 7.",
      F: "Tuning before concert → вопрос 6."
    },

    extraExplainRu:
      "Лишний вопрос <strong>4</strong> (most difficult instrument) — ни один текст не отвечает."
  });
})(typeof window !== "undefined" ? window : this);
