/**
 * OGE Reading · Unit 9 · Task 12 · School uniform.
 * Трубанёва 2026 · Вариант 9. Текст слово в слово.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u9-variant9-reading-match",
    unitOrder: 9,
    title: "Unit 9 · School uniform",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "School uniform has a long history. The idea of special clothes for school was first introduced in Christ's Hospital, Great Britain, in the 16th century. It was a school for poor children. Its students had to wear a blue uniform, which gave the school its name, \"The Blue Coat School\". Now it is one of the most prestigious British schools. Later, the idea of school dress code spread to other countries."
      },
      {
        letter: "B",
        text:
          "Today, there are no unified school clothes in Russia. Schools are free to choose their uniform and, of course, attitudes to it may differ. Junior students usually like wearing it because it shows their new status. Most senior students don't mind it either because it is practical and they do not have to think about what to wear each morning. However, some students prefer to wear their own clothes."
      },
      {
        letter: "C",
        text:
          "Most students in Russia wear school uniform. The tradition dates back to 1834. In those days, it was obligatory for high school students to wear military clothes. Boys' school jackets were dark green or navy. Also, each school had its own cap colour. Official girls' school uniform appeared 60 years later. Girls had to wear brown dresses with black or white aprons."
      },
      {
        letter: "D",
        text:
          "It's difficult to believe that schoolchildren in some countries wear their uniform even on holidays! Japanese children are proud of their stylish navy-blue uniform. Children in Mexico wear red, yellow or blue T-shirts and jackets to school. In Africa, boys like pink, green or violet uniform. Their teachers and parents are convinced that cheerful colours make children happier and help them study better."
      },
      {
        letter: "E",
        text:
          "Teenage fashion offers collections in oversize, denim, and grunge styles for different tastes. They are mostly for everyday wear, Young people usually choose the items and colours that help them express their individuality. For example, pastel colours create a romantic image. Energetic and ambitious teenagers prefer to wear bright colours. To look relaxed and careless, they choose jeans and baggy outfits."
      },
      {
        letter: "F",
        text:
          "Students, teachers and parents have always argued whether school uniforms are needed or not. First, let's define what a school uniform is. According to dictionaries, it is a standardised set of clothing that students have to wear when attending school. School uniform is designed to promote discipline, reduce distractions, and create a sense of student community. Each school usually has its own uniform."
      }
    ],

    headlines: [
      { num: 1, text: "What can clothes say about their owners?" },
      { num: 2, text: "What is school uniform?" },
      { num: 3, text: "How do students feel about their school uniform?" },
      { num: 4, text: "How does school uniform improve academic results?" },
      { num: 5, text: "Where does school uniform come from?" },
      { num: 6, text: "When did school uniform appear in Russia?" },
      { num: 7, text: "What colours are used for school uniform around the world?" }
    ],

    key: { A: 5, B: 3, C: 6, D: 7, E: 1, F: 2 },
    extraHeadlineNum: 4,

    explanationsRu: {
      A: "Christ's Hospital, XVI век → вопрос 5.",
      B: "Младшие любят форму, старшеклассникам удобно → вопрос 3.",
      C: "Традиция с 1834 года → вопрос 6.",
      D: "Цвета в Японии, Мексике, Африке → вопрос 7.",
      E: "Цвета и стиль говорят о человеке → вопрос 1.",
      F: "Определение формы из словаря → вопрос 2."
    },

    extraExplainRu:
      "Лишний вопрос <strong>4</strong> (как форма улучшает оценки) — прямого ответа нет."
  });
})(typeof window !== "undefined" ? window : this);
