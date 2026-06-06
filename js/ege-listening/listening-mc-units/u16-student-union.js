/**
 * ЕГЭ Listening MC · Unit 16 · Student Union.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u16-student-union",
    unitOrder: 16,
    title: "Unit 16 · Student Union",
    examSection: "§3 · Multiple Choice",
    headerTitle: "Student Union",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/16/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2016%20(mp3cut.net)%20(2).mp3",
    instructionHtml:
      "Вы услышите <strong>интервью</strong>. В заданиях <strong>3–9</strong> выберите <strong>один</strong> из трёх вариантов ответа. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Student Union:</strong> quasi-political body, maturity of members, why he ran, representation of mature students, elections and priorities, university as a place to learn.</p>",
    questions: [
      {
        examNum: 3,
        prompt: "The narrator says that the Union is a body which...",
        key: 2,
        choices: [
          { num: 1, text: "includes both — the students and the teachers." },
          { num: 2, text: "is of a political character." },
          { num: 3, text: "does not represent all groups of students." }
        ],
        explainRu:
          "Он называет Union quasi-political body — то есть организацией с политическим характером.",
        distractorWrongRu: {
          1: "В тексте сказано elected from the student body, про teachers не говорится.",
          3: "Он выражает doubts about representation, но определяет сам Union как quasi-political body."
        }
      },
      {
        examNum: 4,
        prompt: "According to the narrator, the behavior of the Union members shows...",
        key: 2,
        choices: [
          { num: 1, text: "a high level of intellect." },
          { num: 2, text: "a lack of maturity." },
          { num: 3, text: "a sense of responsibility." }
        ],
        explainRu:
          "Нарратор прямо говорит that the behavior ... reflects this level of maturity после иронии про президента.",
        distractorWrongRu: {
          1: "Он критикует уровень поведения, а не хвалит интеллект.",
          3: "Описания про popularity and dressing up показывают обратное ответственности."
        }
      },
      {
        examNum: 5,
        prompt: "The narrator ran for the office because...",
        key: 1,
        choices: [
          { num: 1, text: "he had supporters." },
          { num: 2, text: "he wanted the position." },
          { num: 3, text: "he was sure he would make it." }
        ],
        explainRu:
          "Он подчеркивает, что mates gave him a lot of support, при этом сам позицию не хотел.",
        distractorWrongRu: {
          2: "Прямо сказано: I did not want the position.",
          3: "Он даже не прикладывал усилий to canvass, уверенности в победе не было."
        }
      },
      {
        examNum: 6,
        prompt: "The narrator is not happy about the Union because the members...",
        key: 2,
        choices: [
          {
            num: 1,
            text: "are not aware of the current political situation in the world."
          },
          {
            num: 2,
            text: "are too young to understand the interests of mature students."
          },
          {
            num: 3,
            text: "tend to discuss their private affairs and problems."
          }
        ],
        explainRu:
          "Ключевая мысль: 19-20 year olds не могут полноценно представлять students up to 80 и их проблемы.",
        distractorWrongRu: {
          1: "Проблема не в неосведомленности о мировой политике, а в нерепрезентативности для mature students.",
          3: "Он критикует приоритеты и возраст/опыт, а не обсуждение личных проблем."
        }
      },
      {
        examNum: 7,
        prompt: "The narrator thinks that the Union should...",
        key: 2,
        choices: [
          { num: 1, text: "be abolished." },
          { num: 2, text: "do its work better." },
          { num: 3, text: "attract more attention." }
        ],
        explainRu:
          "Он говорит, что Union has a very important job, but does it very badly, and proposes better model.",
        distractorWrongRu: {
          1: "Он не предлагает abolish Union, а предлагает сделать его работу эффективнее.",
          3: "В тексте наоборот критикуется погоня за вниманием во время выборов."
        }
      },
      {
        examNum: 8,
        prompt: "The narrator believes that the Union members are interested in...",
        key: 3,
        choices: [
          { num: 1, text: "getting more money for their work." },
          { num: 2, text: "increasing their experience." },
          { num: 3, text: "having fun together." }
        ],
        explainRu:
          "Фраза want nothing more than to have a good time with their mates прямо указывает на это.",
        distractorWrongRu: {
          1: "Про личный заработок членов Union в тексте не сказано.",
          2: "CV упоминается, но с отрицательной окраской; главный акцент на having a good time."
        }
      },
      {
        examNum: 9,
        prompt: "For the narrator the university is a place to...",
        key: 2,
        choices: [
          { num: 1, text: "entertain himself." },
          { num: 2, text: "study hard." },
          { num: 3, text: "make friends." }
        ],
        explainRu:
          "В финале он прямо говорит: I am there for a reason, to learn.",
        distractorWrongRu: {
          1: "Он противопоставляет себя тем, кто воспринимает учебу как развлечение.",
          3: "Про друзей здесь не цель; он подчеркивает serious commitment к учебе."
        }
      }
    ],
    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Narrator",
            text:
              "Again, I'm not sure how this works in any other part of the world. At my university we have a student-elected body of representatives called \"The Union\". It is a quasi-political body, elected from the student body and meant to represent the student body as a whole. However, I have doubts about their ability to represent me, and any other mature student at that university."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Narrator",
            text:
              "Let me begin by saying that this year's President likes to be called \"Gravy\". The behavior of the Union on the whole reflects this level of maturity. This year I ran for the office, I promised someone that I would run. A random meeting with next year's President and a rant about how ineffectual I thought the Union was brought this about, and I must say, my mates gave me a lot of support. However, I did not make the effort to canvass, I did not want the position."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Narrator",
            text:
              "Yes, if more mature and experienced people do not join, what hope is there of this body being more representative? I should feel worse than I do about my lax efforts, but there is no way in the world I could sit in an office with these people without ranting and raving at them. How can a body of 19 and 20 year olds represent a student body that ranges from 18 to 80? In the UK, more and more mature students are returning to study every year. If the body that is meant to represent them discusses issues like the ethics of every single product in the Union shop, or whether not allowing Al-Qaeda to operate from the university is discrimination or not... they are simply not represented. How can I present problems specific to a mature student to someone with little or no life experience themselves?"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Narrator",
            text:
              "This became evident in a short time and I did not actually take any notice of the elections because these were not elections based on any kind of merit, but on how popular someone is, or how much attention they can draw to themselves during the elections by dressing up (When I see taxpayers' money wasted on these things (and yes, it is that money that is used) it makes me see red). The Union has a very important job to do, and unfortunately it does not do it very well at all. The Union would perform better as a non-elected body where people with experiences of the issues and methods do the work, rather than young and inexperienced people who want nothing more than to have a good time with their mates, and something to put on their CV."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Narrator",
            text:
              "I have overheard some people talking about this on occasions. They think that there is something wrong with the situation. In my opinion, there's definitely something wrong with it."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Narrator",
            text:
              "I never thought that this was what university would be about. I am there for a reason, to learn. I sold my house to finance this degree, it is a pretty major commitment for me, so of course I am going to take it seriously."
          }
        ]
      }
    ],
    huntLabs: [
      {
        examNum: 3,
        key: 2,
        paragraphIndex: 0,
        keyLineRu: "The Union is described as a quasi-political body.",
        explainRu: "Это прямой перефраз варианта 2.",
        evidencePromptRu: "Найди quasi-political body.",
        segments: [
          { kind: "hit", sol: "e", text: "It is a quasi-political body" },
          {
            kind: "hit",
            sol: "d",
            text: "I have doubts about their ability to represent me, and any other mature student",
            wrongOption: 3,
            distractExplainRu:
              "Это авторская критика качества представительства, а формальное определение Union дано как quasi-political body."
          }
        ]
      },
      {
        examNum: 4,
        key: 2,
        paragraphIndex: 1,
        keyLineRu: "The narrator says Union behavior reflects a low level of maturity.",
        explainRu: "Ключевая опора — reflects this level of maturity в негативном контексте.",
        evidencePromptRu: "Найди reflects this level of maturity.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "The behavior of the Union on the whole reflects this level of maturity"
          },
          {
            kind: "hit",
            sol: "d",
            text: "my mates gave me a lot of support",
            wrongOption: 3,
            distractExplainRu:
              "Поддержка друзей не равна ответственности членов Union; это другой смысл."
          }
        ]
      },
      {
        examNum: 5,
        key: 1,
        paragraphIndex: 1,
        keyLineRu: "He ran because people around him supported him.",
        explainRu: "Опора: my mates gave me a lot of support.",
        evidencePromptRu: "Найди gave me a lot of support.",
        segments: [
          { kind: "hit", sol: "e", text: "my mates gave me a lot of support" },
          {
            kind: "hit",
            sol: "d",
            text: "I did not want the position",
            wrongOption: 2,
            distractExplainRu:
              "Это прямо отменяет вариант про желание получить должность."
          }
        ]
      },
      {
        examNum: 6,
        key: 2,
        paragraphIndex: 2,
        keyLineRu: "Members are too young/inexperienced to represent mature students.",
        explainRu: "Смысл строится на возрасте и опыте представителей.",
        evidencePromptRu: "Найди 19 and 20 year olds ... ranges from 18 to 80.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "How can a body of 19 and 20 year olds represent a student body that ranges from 18 to 80?"
          },
          {
            kind: "hit",
            sol: "e",
            text: "someone with little or no life experience themselves"
          },
          {
            kind: "hit",
            sol: "d",
            text:
              "discusses issues like the ethics of every single product in the Union shop, or whether not allowing Al-Qaeda to operate from the university is discrimination or not",
            wrongOption: 1,
            distractExplainRu:
              "Это пример смещенных приоритетов, а не показатель неосведомленности о мировой политике."
          }
        ]
      },
      {
        examNum: 7,
        key: 2,
        paragraphIndex: 3,
        keyLineRu: "Union has an important job but performs it badly and should work better.",
        explainRu: "Он предлагает улучшить формат работы, а не убрать Union.",
        evidencePromptRu: "Найди important job ... does not do it very well.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "The Union has a very important job to do, and unfortunately it does not do it very well at all"
          },
          {
            kind: "hit",
            sol: "d",
            text: "how much attention they can draw to themselves",
            wrongOption: 3,
            distractExplainRu:
              "Здесь критика чрезмерного внимания к себе, а не цель Union привлекать больше внимания."
          }
        ]
      },
      {
        examNum: 8,
        key: 3,
        paragraphIndex: 3,
        keyLineRu: "He says they mainly want to have a good time with mates.",
        explainRu: "Фраза want nothing more than to have a good time является прямой опорой.",
        evidencePromptRu: "Найди have a good time with their mates.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "want nothing more than to have a good time with their mates"
          },
          {
            kind: "hit",
            sol: "d",
            text: "something to put on their CV",
            wrongOption: 2,
            distractExplainRu:
              "Это не про реальный рост опыта; фраза дана как дополнительный эго-мотив в негативном контексте."
          }
        ]
      },
      {
        examNum: 9,
        key: 2,
        paragraphIndex: 5,
        keyLineRu: "For him university means serious study.",
        explainRu: "Он прямо говорит to learn и подчеркивает major commitment.",
        evidencePromptRu: "Найди I am there for a reason, to learn.",
        segments: [
          { kind: "hit", sol: "e", text: "I am there for a reason, to learn" },
          {
            kind: "hit",
            sol: "d",
            text: "take it seriously",
            wrongOption: 1,
            distractExplainRu:
              "Серьезное отношение к учебе противоречит идее entertainment."
          }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Narrator",
        label: "Narrator",
        fullText:
          "Again, I'm not sure how this works in any other part of the world. At my university we have a student-elected body of representatives called \"The Union\". It is a quasi-political body, elected from the student body and meant to represent the student body as a whole. However, I have doubts about their ability to represent me, and any other mature student at that university. Let me begin by saying that this year's President likes to be called \"Gravy\". The behavior of the Union on the whole reflects this level of maturity. This year I ran for the office, I promised someone that I would run. A random meeting with next year's President and a rant about how ineffectual I thought the Union was brought this about, and I must say, my mates gave me a lot of support. However, I did not make the effort to canvass, I did not want the position. Yes, if more mature and experienced people do not join, what hope is there of this body being more representative? I should feel worse than I do about my lax efforts, but there is no way in the world I could sit in an office with these people without ranting and raving at them. How can a body of 19 and 20 year olds represent a student body that ranges from 18 to 80? In the UK, more and more mature students are returning to study every year. If the body that is meant to represent them discusses issues like the ethics of every single product in the Union shop, or whether not allowing Al-Qaeda to operate from the university is discrimination or not... they are simply not represented. How can I present problems specific to a mature student to someone with little or no life experience themselves? This became evident in a short time and I did not actually take any notice of the elections because these were not elections based on any kind of merit, but on how popular someone is, or how much attention they can draw to themselves during the elections by dressing up. The Union has a very important job to do, and unfortunately it does not do it very well at all. The Union would perform better as a non-elected body where people with experiences of the issues and methods do the work, rather than young and inexperienced people who want nothing more than to have a good time with their mates, and something to put on their CV. I have overheard some people talking about this on occasions. They think that there is something wrong with the situation. In my opinion, there's definitely something wrong with it. I never thought that this was what university would be about. I am there for a reason, to learn. I sold my house to finance this degree, it is a pretty major commitment for me, so of course I am going to take it seriously.",
        phrases: [
          { en: "student-elected body of representatives", ru: "выбираемый студентами орган представителей" },
          { en: "called \"The Union\"", ru: "под названием «The Union»" },
          { en: "quasi-political body", ru: "квази-политический орган", tip: "3" },
          { en: "represent the student body as a whole", ru: "представлять студенчество в целом" },
          { en: "mature student", ru: "взрослый студент", tip: "6" },
          { en: "likes to be called \"Gravy\"", ru: "любит, когда его зовут «Gravy»", tip: "4" },
          { en: "reflects this level of maturity", ru: "отражает такой уровень зрелости", tip: "4" },
          { en: "ran for the office", ru: "баллотировался на должность", tip: "5" },
          { en: "my mates gave me a lot of support", ru: "мои друзья сильно меня поддержали", tip: "5" },
          { en: "did not make the effort to canvass", ru: "не приложил усилий для агитации" },
          { en: "did not want the position", ru: "не хотел эту должность" },
          { en: "more mature and experienced people", ru: "более зрелые и опытные люди" },
          { en: "19 and 20 year olds", ru: "девятнадцати- и двадцатилетние", tip: "6" },
          { en: "ranges from 18 to 80", ru: "варьируется от 18 до 80", tip: "6" },
          { en: "ethics of every single product", ru: "этика каждого отдельного продукта" },
          { en: "simply not represented", ru: "просто не представлены" },
          { en: "little or no life experience", ru: "почти нет жизненного опыта", tip: "6" },
          { en: "not elections based on merit", ru: "не выборы по заслугам" },
          { en: "how popular someone is", ru: "насколько кто-то популярен" },
          { en: "how much attention they can draw", ru: "сколько внимания могут привлечь", tip: "7" },
          { en: "very important job", ru: "очень важная работа", tip: "7" },
          { en: "does not do it very well at all", ru: "выполняет ее очень плохо", tip: "7" },
          { en: "perform better as a non-elected body", ru: "лучше работал бы как невыборный орган" },
          { en: "have a good time with their mates", ru: "просто хорошо проводить время с друзьями", tip: "8" },
          { en: "something to put on their CV", ru: "что-то для резюме", tip: "8" },
          { en: "there's definitely something wrong", ru: "определенно что-то не так" },
          { en: "I am there for a reason, to learn", ru: "я здесь по одной причине: учиться", tip: "9" },
          { en: "major commitment", ru: "серьезное обязательство" },
          { en: "take it seriously", ru: "относиться к этому серьезно", tip: "9" }
        ],
        chunks: []
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
