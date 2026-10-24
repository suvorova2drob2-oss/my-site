/**
 * OGE Reading · Unit 12 · Task 12 · Hobbies.
 * Трубанёва 2026 · Вариант 12. Текст слово в слово.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u12-variant12-reading-match",
    unitOrder: 12,
    title: "Unit 12 · Hobbies",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Some of us like cycling, others are fond of martial arts. There are people who prefer gardening or skydiving. A lot of teenagers nowadays choose to learn foreign languages as a hobby. It improves cognitive abilities, introduces different cultures and provides new opportunities. Learning a new language is always a challenge but it is worth the effort and can make a great hobby."
      },
      {
        letter: "B",
        text:
          "Engaging in hobbies usually improves teenagers' mental and physical skills. Some of the most popular hobbies and interests for teenagers are playing computer games, listening to music, doing martial arts, reading, etc. Nowadays there is a wide range of activities teens show interest in. For example, photography, blogging, learning languages, and volunteering."
      },
      {
        letter: "C",
        text:
          "Recent survey shows that favourite activities make teenagers feel happier and more relaxed. They suffer less from stress and depression. Sports hobbies help teenagers keep fit, healthy and active. Playing board games develops strategic thinking and is a great way to spend time with family and friends. Also, hobbies help young people find new friends and socialize."
      },
      {
        letter: "D",
        text:
          "If you are depressed or want to find a way to relax, start doing something new, something that makes you feel cheerful and energetic. Any idea what it could be? First, make a list of activities you enjoy doing. Then talk to your friends about their hobbies. Select a few hobbies you like most. Then search online to find out more about them. Choose one and give it a go, just try it. If you don't enjoy it, do not give up and try another hobby. Sooner or later you'll find yours."
      },
      {
        letter: "E",
        text:
          "Modern dictionaries define hobby as an enjoyable pastime or an activity done for pleasure. Hobbies can range from scrapbooking to playing the guitar or cycling. However, the word is also used to denote a medium-sized falcon, a bird that lives in Eurasia and Australia. It is also the name of a toy horse, made from a stick that children pretend to ride on."
      },
      {
        letter: "F",
        text:
          "People are not created equal and it wouldn't be correct to label their hobbies as exciting or boring, useful or just a waste of time, challenging or easy to pursue. In fact, you can choose whatever hobby you want as long as you enjoy it. Moreover, such things as a hobby can change a person. It can encourage them to leave their comfort zone and even change their character. Thus, making a collection of minerals may turn a shy, cautious person into a fearless and adventurous rock climber."
      }
    ],

    headlines: [
      { num: 1, text: "What does the word hobby mean?" },
      { num: 2, text: "Why are hobbies important for teenagers?" },
      { num: 3, text: "What are the most popular teenage hobbies?" },
      { num: 4, text: "What are the most expensive hobbies?" },
      { num: 5, text: "Is it possible to find a hobby that is good for everyone?" },
      { num: 6, text: "Is learning languages a useful hobby?" },
      { num: 7, text: "How to choose a hobby?" }
    ],

    key: { A: 6, B: 3, C: 2, D: 7, E: 1, F: 5 },
    extraHeadlineNum: 4,

    explanationsRu: {
      A: "Иностранные языки как хобби полезны → вопрос 6.",
      B: "Популярные занятия подростков → вопрос 3.",
      C: "Хобби помогают быть спокойнее, здоровее и заводить друзей → вопрос 2.",
      D: "Пошагово, как выбрать хобби → вопрос 7.",
      E: "Словарное значение слова hobby → вопрос 1.",
      F: "Одного хобби «для всех» нет — выбирают то, что нравится → вопрос 5."
    },

    extraExplainRu:
      "Лишний вопрос <strong>4</strong> (самые дорогие хобби) — в текстах цены не сравниваются."
  });
})(typeof window !== "undefined" ? window : this);
