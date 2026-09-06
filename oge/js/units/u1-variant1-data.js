/**
 * OGE · Вариант 1 (Трубанёва 2026) — единый пакет данных.
 * Аудио: audio/oge/u1/listening-1.mp3 (положить позже из «Аудио Трубанева 2026»).
 */
(function (w) {
  w.__OGE_V1__ = {
    id: "u1-variant1",
    title: "Unit 1 · Вариант 1",
    source: "ОГЭ. Типовые экзаменационные варианты · Трубанёва 2026",

    listeningShortMc: {
      audioSrc: "audio/u1/listening-1.mp3",
      instructionHtml:
        "Вы услышите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
      texts: [
        {
          label: "A",
          title: "Announcement · mock exams",
          body:
            "As you know, our school mock exams are usually held on the last Saturday of May. This time, students of French have their exam on Friday, May 21. Students of Spanish have theirs on Monday, May 23. All the exams start at 10 a.m. in Hall 4."
        },
        {
          label: "B",
          title: "Voicemail · Peter",
          body:
            "Hi, Mum! It's Peter. I forgot my project at home but I can submit it electronically. The problem is I'm locked out of my account because the password is saved only on my home computer. It's written on the back of a green notebook on my table. Could you take a photo of the password and send it to me as soon as possible? Thanks!"
        },
        {
          label: "C",
          title: "Fred & Jane",
          body:
            "Fred: Hi, Jane! Glad you're back. We missed you at school today.\nJane: Hi, Fred. Sorry I wasn't there — I had to go to the medical centre. My granny, who's a doctor, insists on regular check-ups, so I had a blood test.\nFred: I see. We had a Maths test today, by the way.\nJane: Oh no, I completely forgot! I'll have to take it individually tomorrow."
        },
        {
          label: "D",
          title: "Linda & Sam",
          body:
            "Linda: Sam, are we still watching a film this Saturday?\nSam: No, I've registered for a workshop in the library. They're teaching us how to make video reviews of books.\nLinda: Sounds interesting. I'd prefer making comics, but video skills are useful too.\nSam: I'll let you know if I find something about comic-making later."
        }
      ],
      questions: [
        {
          num: 1,
          text: "The mock exam in the French language is to be held on…",
          choices: ["Monday.", "Friday.", "Saturday."],
          key: 2,
          textRef: "A"
        },
        {
          num: 2,
          text: "Peter asks his mother to…",
          choices: [
            "help him complete the project.",
            "buy him a new computer.",
            "give him the password."
          ],
          key: 3,
          textRef: "B"
        },
        {
          num: 3,
          text: "Jane missed a day at school because…",
          choices: [
            "she had a medical examination.",
            "she took her granny to the dentist.",
            "she wanted to skip the test."
          ],
          key: 1,
          textRef: "C"
        },
        {
          num: 4,
          text: "On Saturday, Linda and Sam are going to…",
          choices: ["read books.", "make videos.", "create comics."],
          key: 2,
          textRef: "D"
        }
      ]
    },

    listeningMatching: {
      audioSrc: "audio/u1/listening-1.mp3",
      instructionHtml:
        "Подберите к каждому высказыванию <strong>A–E</strong> рубрику <strong>1–6</strong>. Одна рубрика лишняя. Запись прослушивается <strong>дважды</strong>.",
      headings: [
        { num: 1, text: "Art and hobbies" },
        { num: 2, text: "Physical activity" },
        { num: 3, text: "Plans and ambitions" },
        { num: 4, text: "Healthy eating" },
        { num: 5, text: "Positive attitude to life" },
        { num: 6, text: "Time with the family" }
      ],
      extraHeadingNum: 4,
      speakerLabels: ["A", "B", "C", "D", "E"],
      key: [5, 3, 6, 2, 1],
      speakers: [
        {
          id: "A",
          text:
            "We always make a balanced diet a priority, but we avoid being overly stressed by calorie counting. Enjoy good food, good company, and try to take it easy — that's my motto. A positive attitude helps you get through difficult days."
        },
        {
          id: "B",
          text:
            "Busy people have no time to be sick, they say. When you have exciting projects and clear goals, you feel more energy and motivation. Never give up, set new goals and follow your dreams — that's what keeps me going."
        },
        {
          id: "C",
          text:
            "We always make a point of Sunday dinners. It's a meal which brings together all my aunts, uncles and cousins. My grandma started this tradition, and she insists on cooking almost everything herself. Grandma believes it helps her feel worthwhile and encourages her to live as long as possible, as if she were on a mission of keeping us all united."
        },
        {
          id: "D",
          text:
            "The first thing that comes to my mind is exercising. To live a long life, you need a strong body. A brisk walk can do you a lot of good. Games like volleyball, badminton or tennis can make it much more fun. I personally prefer cycling. I cycle 15 kilometres three times a week and plan to add some swimming to my routine."
        },
        {
          id: "E",
          text:
            "I don't think exercising is enough. The state of mind is equally important. Creative things develop the brain and keep it in good working condition. Interesting books, knitting and sewing, drawing and designing — everything is good to keep our brain busy and happy. Oh, and playing music and dancing, of course!"
        }
      ],
      presenterIntro:
        "Good afternoon! Today we have asked 5 people to give us a short interview and share their opinions on some issues important to a long and healthy life."
    },

    listeningInterviewGaps: {
      audioSrc: "audio/u1/listening-1.mp3",
      instructionHtml:
        "Прослушайте интервью и занесите данные в таблицу. <strong>Не более одного слова</strong> (без артиклей). Числа — <strong>буквами</strong>.",
      fields: [
        { num: 6, label: "Age of the respondent", suffix: "years old", answers: ["fifteen"], keyShow: "fifteen" },
        { num: 7, label: "Current occupation", answers: ["student"], keyShow: "student" },
        {
          num: 8,
          label: "The school subject he/she considers the most important",
          answers: ["chemistry"],
          keyShow: "Chemistry"
        },
        { num: 9, label: "Favourite music genre", answers: ["pop"], keyShow: "pop" },
        { num: 10, label: "Favourite sport", answers: ["football"], keyShow: "football" },
        {
          num: 11,
          label: "The foreign language he/she speaks",
          answers: ["spanish"],
          keyShow: "Spanish"
        }
      ],
      transcript: [
        { role: "Interviewer", text: "Thank you so much for agreeing to help us and to answer the survey questions." },
        {
          role: "Respondent",
          text: "Oh, anytime! We have to do all sorts of surveys at school too. I'm Mark, by the way, and I'm fifteen. Turning sixteen in December, which means in three months."
        },
        {
          role: "Interviewer",
          text: "We are not supposed to write down the respondents' names, but yeah, I need to register your age. Fifteen. Thanks. And you are still at school, aren't you?"
        },
        {
          role: "Respondent",
          text: "Yeah, I'm still a school student but one day I'll be in college."
        },
        {
          role: "Interviewer",
          text: "As you've got college ambitions, what school subject do you see as the most important one? For your further education or your career."
        },
        {
          role: "Respondent",
          text: "Well… difficult to choose only one. Mathematics probably… but no, not that. Chemistry. Chemistry is the most important discipline to me as I want to pursue a career in medicine."
        },
        {
          role: "Interviewer",
          text: "I see. You are going to be a doctor, aren't you?"
        },
        {
          role: "Respondent",
          text: "I hope I will. My grandma will be happy if I enter the Medical faculty."
        },
        {
          role: "Interviewer",
          text: "And as you are a teenager, I can't skip questions about your favourite music and your favourite sport."
        },
        {
          role: "Respondent",
          text: "Understood. As for music, I listen to anything except for classical composers like Beethoven or Bach, but my first choice is usually hip-hop. But no, sorry, write pop not hip-hop."
        },
        {
          role: "Interviewer",
          text: "Is pop your last answer for music?"
        },
        { role: "Respondent", text: "Yes." },
        {
          role: "Respondent",
          text: "And as for sport, it's definitely football. I play for our school and I often go to the stadium to watch the matches there."
        },
        {
          role: "Interviewer",
          text: "As your dad's from Brazil, you almost certainly speak Portuguese, don't you?"
        },
        {
          role: "Respondent",
          text: "And no again. I don't speak it but I speak Spanish and I'm quite fluent in it. My mum is a Spanish teacher, so, in fact, I have no choice…"
        }
      ]
    },

    readingQuestionMatch: {
      instructionHtml:
        "Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",
      questions: [
        { num: 1, text: "What are the requirements for the Kremlin New Year tree?" },
        { num: 2, text: "How is the New Year tree delivered to the Kremlin?" },
        { num: 3, text: "Who is responsible for the New Year tree decoration?" },
        { num: 4, text: "What is the New Year tree decorated with?" },
        { num: 5, text: "What public events are organized in the Kremlin during New Year holidays?" },
        { num: 6, text: "Where can one buy a ticket for the New Year performance in the Kremlin?" },
        { num: 7, text: "What happens to the New Year tree after the holiday season?" }
      ],
      texts: [
        {
          letter: "A",
          text:
            "After the New Year tree is safely assembled in Sobornaya Square, it is dressed in lights and about three thousand colourful ornaments. Most of the ornaments are hand-made, and the craftsmen create them according to a special order. Most items are used for more than one season. The New Year baubles can be in the colours of the state flag or they can display the scenes from Russian folk tales."
        },
        {
          letter: "B",
          text:
            "Each December, the decorated New Year tree is placed in Sobornaya Square. Transporting such a big tree to the Kremlin is challenging, and the safety measures are always observed. The tree is carried on a long vehicle, which is escorted by Father Frost's festive carriage. Father Frost carries a special allowance scroll. When the procession arrives at the Kremlin wall, he passes the scroll to the guard to let the tree in."
        },
        {
          letter: "C",
          text:
            "It has become a tradition to install the New Year tree in Sobornaya Square in the Kremlin. The tree should be perfect, and the people who organise the event choose it very carefully. They start looking for it in the summer! Indeed, to look impressive, the fir tree should be huge. The foresters of the Moscow region usually look for the one about 30 metres high, with a perimeter of about 10 metres. To grow that large, the tree has to be rather old."
        },
        {
          letter: "D",
          text:
            "Another well-known Kremlin tradition is a special New Year Event for children. The kids of all ages enjoy wonderful performances staged by famous producers, musicians and dancers. The kids' joy and laughter add to the fabulous atmosphere of the Great Kremlin Palace. The little guests are delighted to get the presents — colourful tins with sweets and chocolates."
        },
        {
          letter: "E",
          text:
            "When the celebrations are over, thousands of baubles and a kilometre of garlands go from the Kremlin New Year Tree straight into the storage boxes. The tree itself is not thrown away either. The valuable wood is used to make hockey clubs and photo frames. The fir needles are good as an alternative bedding for animals on the farm. Even the seeds from the cones are used to plant new trees. They may grow and come to the Kremlin again, 100 years later!"
        },
        {
          letter: "F",
          text:
            "It's common knowledge that the tradition of decorating the New Year tree in Russia comes from Peter the Great. It was disrupted for a few decades, but fortunately was restored in the middle of the 20th century. Nowadays, the New Year celebration in the Kremlin is taken very seriously and the Administration of the President is in charge of it. In fact, they supervise the whole event, including transportation, decoration and utilisation of the tree."
        }
      ],
      keyByText: { A: 4, B: 2, C: 1, D: 5, E: 7, F: 3 },
      unusedQuestion: 6
    },

    readingTfns: {
      title: "Leo Tolstoy's comedy",
      instructionHtml:
        "Прочитайте текст. Определите, какие утверждения <strong>13–19</strong> соответствуют тексту: <strong>1 True</strong>, <strong>2 False</strong>, <strong>3 Not stated</strong>.",
      passageHtml:
        "<p>Leo Tolstoy is a famous 19th-century writer known for his psychological novels. He had a remarkable talent for observing people and taking notes on their behaviour to create true-to-life characters in his books.</p>" +
        "<p>He also had a good sense of humour. He started writing a comedy but left the draft unfinished for three years until his daughter Maria found it.</p>" +
        "<p>The family insisted that he finish the play. He agreed, provided it was for family use only. The play was titled <em>The Fruits of Enlightenment</em> and was performed at their home theatre.</p>" +
        "<p>At first, Tolstoy was pessimistic about a public staging, but his children's enthusiasm changed his mind. He edited the lines during rehearsals. The final version was staged in 1890 with family and friends as actors.</p>" +
        "<p>The first official performance was well received by relatives, neighbours and servants. It focused on the relationship between peasants and landowners.</p>" +
        "<p>A second performance was held in Tula. Tolstoy arrived in plain clothes, and a guard failed to recognise him, refusing him entry until a local official intervened. Tolstoy reacted with a smile.</p>" +
        "<p>The theatre officials were confused. They apologised and offered Leo Tolstoy the best seat. Fortunately, on that day, a legendary Moscow director V. Nemirovich-Danchenko was among the spectators. He was deeply impressed by the performance and soon brought the comedy to the big stage of Maly Theatre. <em>The Fruits of Enlightenment</em> went successfully. It was highly praised in the press and was published later on. It should be mentioned, however, that Leo Tolstoy did not like the way the actors of Maly Theatre played the peasants.</p>",
      statements: [
        {
          num: 13,
          text: "In his novels, Leo Tolstoy wanted to make life more exciting than it really was.",
          key: 2
        },
        {
          num: 14,
          text: "Leo Tolstoy wrote his comedy The Fruits of Enlightenment in one year.",
          key: 2
        },
        {
          num: 15,
          text: "The name of the comedy was suggested by a member of Tolstoy's family.",
          key: 3
        },
        {
          num: 16,
          text: "Leo Tolstoy improved the text of the comedy during the rehearsals.",
          key: 1
        },
        {
          num: 17,
          text: "The first performance of the comedy was successful.",
          key: 1
        },
        {
          num: 18,
          text: "Leo Tolstoy did not manage to watch his play in Tula.",
          key: 2
        },
        {
          num: 19,
          text: "V. Nemirovich-Danchenko discussed the stage costumes and decorations for The Fruits of Enlightenment with Leo Tolstoy.",
          key: 3
        }
      ]
    },

    grammarExam: {
      instructionHtml:
        "Преобразуйте слова, <strong>напечатанные заглавными буквами</strong>, так, чтобы они грамматически соответствовали тексту (задания <strong>20–28</strong>).",
      items: [
        { num: 20, before: "You never wake up ", after: " than 10 at weekends.", cue: "EARLY", answers: ["earlier"], keyShow: "earlier" },
        { num: 21, before: "Mia ", after: " something in a large bowl and seemed very focused on the process.", cue: "MIX", answers: ["was mixing"], keyShow: "was mixing" },
        { num: 22, before: "…it ", after: " her homework to cook a Sunday breakfast for the whole family.", cue: "BE", answers: ["was"], keyShow: "was" },
        { num: 23, before: "…the mother ", after: " what to say, so she started to unload the dishwasher.", cue: "NOT KNOW", answers: ["did not know", "didn't know"], keyShow: "did not know / didn't know" },
        { num: 24, before: "I have to do everything ", after: ".", cue: "I", answers: ["myself"], keyShow: "myself" },
        { num: 25, before: "And when it ", after: " ready, I'll ask you a few questions.", cue: "BE", answers: ["is"], keyShow: "is" },
        { num: 26, before: "Mia's mother put all the forks and ", after: " into the drawer…", cue: "KNIFE", answers: ["knives"], keyShow: "knives" },
        { num: 27, before: "…the girl's face ", after: " up with a smile.", cue: "LIGHT", answers: ["lit", "lighted"], keyShow: "lit / lighted" },
        { num: 28, before: "…how the table ", after: ".", cue: "SERVE", answers: ["is served"], keyShow: "is served" }
      ]
    },

    wordFormation: {
      instructionHtml:
        "Образуйте однокоренные слова от слов <strong>CAPS</strong> (задания <strong>29–34</strong>) — грамматически и лексически.",
      items: [
        { num: 29, before: "There are no ", after: " creatures like sharks or poisonous jellyfish in the water.", cue: "DANGER", answers: ["dangerous"], keyShow: "dangerous" },
        { num: 30, before: "It looks like a ", after: " destination for a family vacation.", cue: "PEACE", answers: ["peaceful"], keyShow: "peaceful" },
        { num: 31, before: "Marine researchers, however, may ", after: " with that.", cue: "AGREE", answers: ["disagree"], keyShow: "disagree" },
        { num: 32, before: "…one of the most ", after: " places on the Earth.", cue: "USUAL", answers: ["unusual"], keyShow: "unusual" },
        { num: 33, before: "…only the upper layer of the sea is available for ", after: ".", cue: "EXPLORE", answers: ["exploration"], keyShow: "exploration" },
        { num: 34, before: "Those dark depths may keep lots of ", after: " secrets.", cue: "AMAZE", answers: ["amazing"], keyShow: "amazing" }
      ],
      passageIntro:
        "The Black Sea is a warm and safe place. It looks boring to some tourists, but marine researchers find it fascinating. Only the upper layer supports life; the lower layer has almost no oxygen."
    },

    writing: {
      instructionHtml:
        "Напишите личное письмо другу <strong>100–120 слов</strong>. Ответьте на <strong>3 вопроса</strong> Duncan.",
      emailFrom: "Duncan@mail.uk",
      emailTo: "Russian_friend@oge.ru",
      emailSubject: "Learning English",
      emailBody:
        "...Some of my classmates think that we don't need to learn foreign languages anymore because there are lots of apps which can translate anything...\n" +
        "...Do you think it is necessary to speak a foreign language, why? At what age do Russian students start learning English at school? What do you do outside the classroom to improve your English?..",
      wordMin: 100,
      wordMax: 120,
      requiredQuestions: [
        "Is it necessary to speak a foreign language? Why?",
        "At what age do Russian students start learning English?",
        "What do you do outside the classroom to improve your English?"
      ]
    },

    speaking: {
      task1: {
        title: "Task 1 · Read aloud",
        prepSec: 90,
        speakSec: 120,
        text:
          "What is a snowflake? Nothing special. It is just a small piece of snow that falls from the sky. Why do people feel so delighted to see the first snow and dream of a White Christmas? There is something magical in a snowflake indeed. Made of clear ice, it looks white because the light is reflected between the sides of the crystal. Each snowflake differs from another, and people have always tried to find two identical ones. Wilson Bentley, an American photographer, is known for taking photos of snowflakes. He began his experiment in 1885 and carried it on for many years. Bentley's collection of snowflakes contains more than 5,000 photos, and every single snowflake in it is unique."
      },
      task2: {
        title: "Task 2 · Telephone survey",
        intro:
          "Electronic assistant of the radio programme School Life — anonymous survey about school (6 questions, 40 seconds each).",
        audioSrc: "audio/u1/speaking-task2-1.mp3",
        questions: [
          "How many classes do you usually have a day?",
          "Do you have to wear a school uniform? What is it like?",
          "What clubs have you got in your school?",
          "What foreign languages can students learn in your school?",
          "What subjects have you chosen for your exams after the 9th grade?",
          "Are you going to continue your education at school after the exams? Why?"
        ]
      },
      task3: {
        title: "Task 3 · Monologue · Books",
        prepSec: 90,
        speakSec: 120,
        bullets: [
          "where you and your friends can get books to read;",
          "whether you prefer a traditional book or an audiobook, why;",
          "why people read less nowadays than they used to;",
          "what your attitude to reading is."
        ]
      }
    }
  };
})(typeof window !== "undefined" ? window : this);
