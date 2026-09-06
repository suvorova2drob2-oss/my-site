/**
 * OGE Listening MC · Unit 1 · Вариант 1 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u1-variant1-listening-mc",
    unitOrder: 1,
    title: "Unit 1 · Short texts A–D",
    examSection: "Tasks 1–4",
    headerTitle: "Announcement · Peter · Jane · Linda & Sam",
    audioSrc: "audio/u1/listening-1.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услышите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один короткий текст = один номер. Сначала пойми, <em>о чём</em> фрагмент, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "As you know, our school mock exams are usually held on the last Saturday of May. This time, students of French have their exam on Friday, May 21. Students of Spanish have theirs on Monday, May 23. All the exams start at 10 a.m. in Hall 4."
      },
      {
        label: "B",
        body:
          "Hi, Mum! It's Peter. I forgot my project at home but I can submit it electronically. The problem is I'm locked out of my account because the password is saved only on my home computer. It's written on the back of a green notebook on my table. Could you take a photo of the password and send it to me as soon as possible? Thanks!"
      },
      {
        label: "C",
        body:
          "Fred: Hi, Jane! Glad you're back. We missed you at school today.\nJane: Hi, Fred. Sorry I wasn't there — I had to go to the medical centre. My granny, who's a doctor, insists on regular check-ups, so I had a blood test.\nFred: I see. We had a Maths test today, by the way.\nJane: Oh no, I completely forgot! I'll have to take it individually tomorrow."
      },
      {
        label: "D",
        body:
          "Linda: Sam, are we still watching a film this Saturday?\nSam: No, I've registered for a workshop in the library. They're teaching us how to make video reviews of books.\nLinda: Sounds interesting. I'd prefer making comics, but video skills are useful too.\nSam: I'll let you know if I find something about comic-making later."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "The mock exam in the French language is to be held on…",
        key: 2,
        choices: [
          { num: 1, text: "Monday." },
          { num: 2, text: "Friday." },
          { num: 3, text: "Saturday." }
        ],
        explainRu: "French — Friday, May 21."
      },
      {
        examNum: 2,
        prompt: "Peter asks his mother to…",
        key: 3,
        choices: [
          { num: 1, text: "help him complete the project." },
          { num: 2, text: "buy him a new computer." },
          { num: 3, text: "give him the password." }
        ],
        explainRu: "Нужен password с зелёного notebook."
      },
      {
        examNum: 3,
        prompt: "Jane missed a day at school because…",
        key: 1,
        choices: [
          { num: 1, text: "she had a medical examination." },
          { num: 2, text: "she took her granny to the dentist." },
          { num: 3, text: "she wanted to skip the test." }
        ],
        explainRu: "Medical centre + blood test."
      },
      {
        examNum: 4,
        prompt: "On Saturday, Linda and Sam are going to…",
        key: 2,
        choices: [
          { num: 1, text: "read books." },
          { num: 2, text: "make videos." },
          { num: 3, text: "create comics." }
        ],
        explainRu: "Workshop — video reviews of books."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
