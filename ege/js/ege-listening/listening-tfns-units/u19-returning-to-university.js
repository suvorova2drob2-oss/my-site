/**
 * ЕГЭ Listening TFNS · Unit 19 · Returning to university (Mike & Mary).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u19-returning-to-university",
    unitOrder: 19,
    title: "Unit 19 · Returning to university",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Mike & Mary · returning to university",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/19/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2019_%5Bcut_151sec%5D%20-2.mp3",
    instructionHtml:
      "Вы услышите <strong>диалог</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>University:</strong> low pay and admin work, failed first attempt, distance learning, deadlines vs class times, studying better now.</p>",
    statements: [
      { letter: "A", text: "Mike's administrative work was very well paid." },
      {
        letter: "B",
        text: "Mary did not do well at University because she had to earn her living."
      },
      { letter: "C", text: "Mary was younger than the other students at her university." },
      { letter: "D", text: "Mary thinks that regular classes are rather time-consuming." },
      {
        letter: "E",
        text: "Mary thinks that she can't study better than when she was younger."
      },
      { letter: "F", text: "Distance learning seems to be very convenient for Mary." },
      {
        letter: "G",
        text: "Mike does not feel disappointed about going to University."
      }
    ],
    key: {
      A: "f",
      B: "ns",
      C: "f",
      D: "t",
      E: "f",
      F: "t",
      G: "t"
    },
    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Mike",
            text:
              "I'm 39 now and I resumed my studies when my son started Grade One. Now I'm very happy that I made up my mind to do this. I'll be graduating in April and hopefully start teaching high school English in September."
          },
          {
            speaker: "Mary",
            text:
              "What had you been doing before you went to university?"
          },
          {
            speaker: "Mike",
            text:
              "I had been doing administrative work for 13 years, straight out of high school. I had got very tired and fed up with the low pay and the monotonous nature of the work. So I started university."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Mary",
            text:
              "That's a right decision, indeed. As for me, I went to university at more or less the normal age. I was actually 21 at the time. But I did so miserably that the university suggested that I do not return. Since then I've been basically wasting my time."
          },
          {
            speaker: "Mike",
            text: "And what are your plans?"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Mary",
            text:
              "You see, one day I was fiddling around on the web and found some information about distance learning. It's fabulous if you can't take the time out to go to proper hidden classes, because you can work it around your own schedule."
          },
          {
            speaker: "Mike",
            text:
              "Yes, I think the fact that you can do the work in your own space and in your own time is really helping."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Mary",
            text:
              "Of course, I will have deadlines to meet, but they're not the same as the in-class sort. Handing things in doesn't depend on anyone else's office hours or class times, which is really handy. I will only have to contact my tutors when I want feedback, or when I'm required to do an oral quiz or exam."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Mike",
            text:
              "I think it's a very good idea. Going to university was the best thing I have ever done. I found it was more fun than I expected, and the benefits outweighed the disadvantages. I learned so much about myself, and I'm very proud of my accomplishments!"
          },
          {
            speaker: "Mary",
            text:
              "And I expect my ability to study to be much better than it used to be and things come much more easily. While I still see some of the work as a chore, at least this time around I'm actually enjoying it."
          }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        key: "f",
        paragraphIndex: 0,
        keyLineRu: "Mike says the job had low pay, not very good pay.",
        explainRu: "В утверждении подменён смысл на противоположный.",
        evidencePromptRu: "<strong>A.</strong> Найдите low pay.",
        segments: [{ kind: "hit", sol: "e", text: "low pay" }]
      },
      {
        letter: "B",
        key: "ns",
        paragraphIndex: 1,
        keyLineRu: "Mary says she did badly at university, but gives no reason about earning a living.",
        nsExplainRu: "Причина her poor performance is not explained; про необходимость зарабатывать на жизнь текста нет.",
        evidencePromptRu: "<strong>B.</strong> Здесь важно заметить, что причина не названа.",
        segments: []
      },
      {
        letter: "C",
        key: "f",
        paragraphIndex: 1,
        keyLineRu: "Mary says she went at more or less the normal age.",
        explainRu: "Значит она не была younger than the others.",
        evidencePromptRu: "<strong>C.</strong> Найдите more or less the normal age.",
        segments: [{ kind: "hit", sol: "e", text: "more or less the normal age" }]
      },
      {
        letter: "D",
        key: "t",
        paragraphIndex: 2,
        keyLineRu: "Regular classes take time out; distance learning works around her schedule.",
        explainRu: "Из этого следует, что normal classes Mary sees as time-consuming.",
        evidencePromptRu: "<strong>D.</strong> Найдите take the time out / work it around your own schedule.",
        segments: [
          { kind: "hit", sol: "e", text: "can't take the time out to go to proper hidden classes" },
          { kind: "hit", sol: "e", text: "work it around your own schedule" }
        ]
      },
      {
        letter: "E",
        key: "f",
        paragraphIndex: 4,
        keyLineRu: "Mary expects to study much better now than before.",
        explainRu: "Она прямо говорит the opposite of the statement.",
        evidencePromptRu: "<strong>E.</strong> Найдите much better than it used to be.",
        segments: [
          { kind: "hit", sol: "e", text: "my ability to study to be much better than it used to be" }
        ]
      },
      {
        letter: "F",
        key: "t",
        paragraphIndex: 3,
        keyLineRu: "Distance learning sounds handy and convenient for Mary.",
        explainRu: "She says it is fabulous and really handy.",
        evidencePromptRu: "<strong>F.</strong> Найдите fabulous / really handy.",
        segments: [
          { kind: "hit", sol: "e", text: "It's fabulous" },
          { kind: "hit", sol: "e", text: "which is really handy" }
        ]
      },
      {
        letter: "G",
        key: "t",
        paragraphIndex: 4,
        keyLineRu: "Mike is very positive about university and proud of his achievements.",
        explainRu: "He calls it the best thing he has ever done.",
        evidencePromptRu: "<strong>G.</strong> Найдите best thing I have ever done.",
        segments: [
          { kind: "hit", sol: "e", text: "the best thing I have ever done" },
          { kind: "hit", sol: "e", text: "very proud of my accomplishments" }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Mike",
        label: "Mike",
        fullText:
          "I'm 39 now and I resumed my studies when my son started Grade One. Now I'm very happy that I made up my mind to do this. I'll be graduating in April and hopefully start teaching high school English in September. I had been doing administrative work for 13 years, straight out of high school. I had got very tired and fed up with the low pay and the monotonous nature of the work. So I started university. Yes, I think the fact that you can do the work in your own space and in your own time is really helping. I think it's a very good idea. Going to university was the best thing I have ever done. I found it was more fun than I expected, and the benefits outweighed the disadvantages. I learned so much about myself, and I'm very proud of my accomplishments!",
        phrases: [
          { en: "resumed my studies", ru: "возобновил учёбу" },
          { en: "made up my mind", ru: "принял решение" },
          { en: "graduating in April", ru: "заканчиваю в апреле" },
          { en: "administrative work", ru: "административная работа" },
          { en: "low pay", ru: "низкая зарплата", tip: "A" },
          { en: "monotonous nature of the work", ru: "монотонный характер работы" },
          { en: "your own space and your own time", ru: "своё пространство и своё время", tip: "F" },
          { en: "the best thing I have ever done", ru: "лучшее, что я когда-либо сделал", tip: "G" },
          { en: "benefits outweighed the disadvantages", ru: "плюсы перевесили минусы" },
          { en: "proud of my accomplishments", ru: "горжусь своими достижениями", tip: "G" }
        ],
        chunks: []
      },
      {
        id: "Mary",
        label: "Mary",
        fullText:
          "What had you been doing before you went to university? That's a right decision, indeed. As for me, I went to university at more or less the normal age. I was actually 21 at the time. But I did so miserably that the university suggested that I do not return. Since then I've been basically wasting my time. You see, one day I was fiddling around on the web and found some information about distance learning. It's fabulous if you can't take the time out to go to proper hidden classes, because you can work it around your own schedule. Of course, I will have deadlines to meet, but they're not the same as the in-class sort. Handing things in doesn't depend on anyone else's office hours or class times, which is really handy. I will only have to contact my tutors when I want feedback, or when I'm required to do an oral quiz or exam. And I expect my ability to study to be much better than it used to be and things come much more easily. While I still see some of the work as a chore, at least this time around I'm actually enjoying it.",
        phrases: [
          { en: "more or less the normal age", ru: "примерно обычный возраст", tip: "C" },
          { en: "I was actually 21", ru: "мне было 21" },
          { en: "did so miserably", ru: "училась очень плохо" },
          { en: "suggested that I do not return", ru: "предложили мне не возвращаться" },
          { en: "distance learning", ru: "дистанционное обучение", tip: "F" },
          { en: "It's fabulous", ru: "это великолепно", tip: "F" },
          { en: "take the time out", ru: "выделить время" },
          { en: "work it around your own schedule", ru: "подстроить под своё расписание", tip: "D/F" },
          { en: "deadlines to meet", ru: "соблюдать дедлайны" },
          { en: "office hours or class times", ru: "чужие часы приёма и время занятий" },
          { en: "really handy", ru: "очень удобно", tip: "F" },
          { en: "oral quiz or exam", ru: "устный тест или экзамен" },
          { en: "much better than it used to be", ru: "намного лучше, чем раньше", tip: "E" },
          { en: "actually enjoying it", ru: "действительно получаю удовольствие" }
        ],
        chunks: []
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
