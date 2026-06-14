/**
 * ЕГЭ Listening TFNS · Unit 10 · Greek competition (Sean & Jinny).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u10-greek-competition",
    unitOrder: 10,
    title: "Unit 10 · Greek competition",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Sean & Jinny · Greek competition",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/10/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2010%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>диалог</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть:</strong></p>" +
      "<ul>" +
      "<li><strong>A</strong> — Sean says they have been studying Greek for 4 years, not since he was 4 → False.</li>" +
      "<li><strong>B</strong> — The Greek Legends is near Sean's bed → True.</li>" +
      "<li><strong>C</strong> — Sean has already chosen the story about Athena → True.</li>" +
      "<li><strong>D</strong> — Jinny is sceptical: <em>You're kidding</em>, <em>It's worse</em> → True.</li>" +
      "<li><strong>E</strong> — Sean suggests drawing a poster, but Jinny's drawing ability is not stated.</li>" +
      "<li><strong>F</strong> — they should submit the DVD to the judges, not upload to Internet → False.</li>" +
      "<li><strong>G</strong> — Jinny says the deadline is reasonable → True.</li>" +
      "</ul>",
    statements: [
      { letter: "A", text: "Sean has been studying Greek since he was 4." },
      { letter: "B", text: "Sean keeps his favourite book near his bed." },
      { letter: "C", text: "Jinny has chosen a story for the competition." },
      { letter: "D", text: "Jinny is skeptical about the idea of the competition." },
      { letter: "E", text: "Jinny is good at drawing posters." },
      { letter: "F", text: "The play should be uploaded to the Internet." },
      { letter: "G", text: "Jinny thinks they have enough time to prepare." }
    ],
    key: {
      A: "f",
      B: "t",
      C: "t",
      D: "t",
      E: "ns",
      F: "f",
      G: "t"
    },
    dialogueParagraphs: [
      {
        turns: [
          { speaker: "Sean", text: "Hi, Jinny! Have you heard the news?" },
          { speaker: "Jinny", text: "You've won the first prize in a competition?" },
          { speaker: "Sean", text: "Not yet. But I'm going to and you'll help me." },
          { speaker: "Jinny", text: "Wow. You're kidding." }
        ]
      },
      {
        turns: [
          {
            speaker: "Sean",
            text:
              "I'm not! I've found information on the Internet about a competition for young learners, which is open to all pupils who are innovative and creative. We've already been studying Greek for 4 years. I think that it's such a nice opportunity to show everyone how interesting the language and the culture of Greece is."
          },
          {
            speaker: "Jinny",
            text:
              "I knew that you love Greek, but I didn't know that you're crazy about it."
          },
          {
            speaker: "Sean",
            text:
              "I am. You know that The Greek Legends is my favourite book. As always near my bed, and I can re-read particular parts whenever I want. Anyway, will you help me?"
          }
        ]
      },
      {
        turns: [
          { speaker: "Jinny", text: "First of all, tell me what should we do?" },
          {
            speaker: "Sean",
            text:
              "We need to choose a story. Actually, I've already chosen one: it's a story about Athena, the birth of Athena, to be exact. Then, we should write the script, as it's a theatrical competition..."
          },
          {
            speaker: "Jinny",
            text:
              "Oh, and afterwards, probably, we'll need people ready to spend all their free time sewing costumes, memorizing lines, and rehearsing without a break for lunch."
          },
          { speaker: "Sean", text: "It's not that bad..." },
          {
            speaker: "Jinny",
            text:
              "Definitely, not. It's worse. We don't know how to write scripts, we don't have many friends who speak Greek and who are interested in acting."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Sean",
            text:
              "Well. As for the script, we can do a search on Internet and find some books or articles of famous Hollywood scriptwriters. They might be very helpful. I've already seen one. Then, you can draw a \"Wanted\" poster and put it at the board near the drama classroom. Believe me, in two days we'll have an eager and enthusiastic team."
          },
          {
            speaker: "Jinny",
            text:
              "Ok. What will be next? Do we need to perform our play live in front of the audience or can we film it?"
          },
          {
            speaker: "Sean",
            text:
              "In the spring, we should submit the DVD to the judges. So, we have about 5 months to rehearse, perform, film and crop and edit, and..."
          },
          {
            speaker: "Jinny",
            text:
              "Ok, sounds as if you have a plan. And the deadline is reasonable. Let's try and see what happens. Who knows, maybe we will triumph in this international competition."
          }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        answer: "f",
        keyLineRu: "They have been studying Greek for 4 years, not since Sean was 4.",
        evidencePromptRu: "<strong>A.</strong> Найдите, сколько лет они изучают Greek.",
        segments: [
          { kind: "hit", sol: "e", text: "We've already been studying Greek for 4 years", explainRu: "4 years ≠ since he was 4 → False." }
        ]
      },
      {
        letter: "B",
        answer: "t",
        keyLineRu: "Sean says The Greek Legends is always near his bed.",
        evidencePromptRu: "<strong>B.</strong> Найдите favourite book near bed.",
        segments: [
          { kind: "hit", sol: "e", text: "The Greek Legends is my favourite book. As always near my bed", explainRu: "Прямое подтверждение → True." }
        ]
      },
      {
        letter: "C",
        answer: "t",
        keyLineRu: "Sean has already chosen the story.",
        evidencePromptRu: "<strong>C.</strong> Найдите already chosen.",
        segments: [
          { kind: "hit", sol: "e", text: "I've already chosen one", explainRu: "История уже выбрана → True." }
        ]
      },
      {
        letter: "D",
        answer: "t",
        keyLineRu: "Jinny is sceptical: You're kidding / It's worse.",
        evidencePromptRu: "<strong>D.</strong> Найдите скепсис Jinny.",
        segments: [
          { kind: "hit", sol: "e", text: "You're kidding", explainRu: "Сомнение." },
          { kind: "hit", sol: "e", text: "It's worse", explainRu: "Скептическая оценка → True." }
        ]
      },
      {
        letter: "E",
        answer: "ns",
        keyLineRu: "Sean suggests drawing a poster, but Jinny's skill is not stated.",
        evidencePromptRu: "<strong>E.</strong> Проверьте, сказано ли, что Jinny is good at drawing.",
        segments: [
          { kind: "hit", sol: "e", text: "you can draw a \"Wanted\" poster", explainRu: "Предложение нарисовать есть, умение не оценивается → Not Stated." }
        ]
      },
      {
        letter: "F",
        answer: "f",
        keyLineRu: "They should submit the DVD to the judges, not upload it.",
        evidencePromptRu: "<strong>F.</strong> Найдите, куда отправляют DVD.",
        segments: [
          { kind: "hit", sol: "e", text: "submit the DVD to the judges", explainRu: "Не upload to Internet → False." }
        ]
      },
      {
        letter: "G",
        answer: "t",
        keyLineRu: "Jinny says the deadline is reasonable.",
        evidencePromptRu: "<strong>G.</strong> Найдите оценку deadline.",
        segments: [
          { kind: "hit", sol: "e", text: "the deadline is reasonable", explainRu: "Времени достаточно → True." }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Sean",
        label: "Sean",
        fullText:
          "Hi, Jinny! Have you heard the news? Not yet. But I'm going to and you'll help me. I'm not! I've found information on the Internet about a competition for young learners, which is open to all pupils who are innovative and creative. We've already been studying Greek for 4 years. I think that it's such a nice opportunity to show everyone how interesting the language and the culture of Greece is. I am. You know that The Greek Legends is my favourite book. As always near my bed, and I can re-read particular parts whenever I want. Anyway, will you help me? We need to choose a story. Actually, I've already chosen one: it's a story about Athena, the birth of Athena, to be exact. Then, we should write the script, as it's a theatrical competition... It's not that bad... Well. As for the script, we can do a search on Internet and find some books or articles of famous Hollywood scriptwriters. They might be very helpful. I've already seen one. Then, you can draw a \"Wanted\" poster and put it at the board near the drama classroom. Believe me, in two days we'll have an eager and enthusiastic team. In the spring, we should submit the DVD to the judges. So, we have about 5 months to rehearse, perform, film and crop and edit, and...",
        phrases: [
          { en: "heard the news", ru: "слышала новости?" },
          { en: "you'll help me", ru: "ты мне поможешь" },
          { en: "competition for young learners", ru: "конкурс для молодых учащихся" },
          { en: "innovative and creative", ru: "новаторские и творческие" },
          { en: "studying Greek for 4 years", ru: "изучаем греческий 4 года", tip: "A · False" },
          { en: "language and the culture of Greece", ru: "язык и культура Греции" },
          { en: "The Greek Legends", ru: "The Greek Legends", tip: "B" },
          { en: "near my bed", ru: "рядом с моей кроватью", tip: "B · True" },
          { en: "re-read particular parts", ru: "перечитывать отдельные части" },
          { en: "I've already chosen one", ru: "я уже выбрал одну", tip: "C · True" },
          { en: "the birth of Athena", ru: "рождение Athena" },
          { en: "theatrical competition", ru: "театральный конкурс" },
          { en: "famous Hollywood scriptwriters", ru: "известные голливудские сценаристы" },
          { en: "draw a Wanted poster", ru: "нарисовать плакат Wanted", tip: "E · NS" },
          { en: "eager and enthusiastic team", ru: "увлечённая и восторженная команда" },
          { en: "submit the DVD to the judges", ru: "отправить DVD судьям", tip: "F · False" },
          { en: "about 5 months", ru: "около 5 месяцев", tip: "G" }
        ],
        chunks: [
          { text: "Hi, Jinny! Have you heard the news? Not yet. But I'm going to and you'll help me.", showText: true },
          { text: "I'm not! I've found information on the Internet about a competition for young learners, which is open to all pupils who are innovative and creative. We've already been studying Greek for 4 years.", showText: true },
          { text: "I think that it's such a nice opportunity to show everyone how interesting the language and the culture of Greece is.", showText: true },
          { text: "I am. You know that The Greek Legends is my favourite book. As always near my bed, and I can re-read particular parts whenever I want. Anyway, will you help me?", showText: true },
          { text: "We need to choose a story. Actually, I've already chosen one: it's a story about Athena, the birth of Athena, to be exact. Then, we should write the script, as it's a theatrical competition...", showText: true },
          { text: "Well. As for the script, we can do a search on Internet and find some books or articles of famous Hollywood scriptwriters. They might be very helpful. I've already seen one.", showText: true },
          { text: "Then, you can draw a \"Wanted\" poster and put it at the board near the drama classroom. Believe me, in two days we'll have an eager and enthusiastic team.", showText: true },
          { text: "In the spring, we should submit the DVD to the judges. So, we have about 5 months to rehearse, perform, film and crop and edit, and...", showText: false }
        ]
      },
      {
        id: "Jinny",
        label: "Jinny",
        fullText:
          "You've won the first prize in a competition? Wow. You're kidding. I knew that you love Greek, but I didn't know that you're crazy about it. First of all, tell me what should we do? Oh, and afterwards, probably, we'll need people ready to spend all their free time sewing costumes, memorizing lines, and rehearsing without a break for lunch. Definitely, not. It's worse. We don't know how to write scripts, we don't have many friends who speak Greek and who are interested in acting. Ok. What will be next? Do we need to perform our play live in front of the audience or can we film it? Ok, sounds as if you have a plan. And the deadline is reasonable. Let's try and see what happens. Who knows, maybe we will triumph in this international competition.",
        phrases: [
          { en: "won the first prize", ru: "выиграл первый приз" },
          { en: "You're kidding", ru: "ты шутишь", tip: "D · skepticism" },
          { en: "crazy about it", ru: "без ума от этого" },
          { en: "what should we do", ru: "что нам делать?" },
          { en: "sewing costumes", ru: "шить костюмы" },
          { en: "memorizing lines", ru: "учить реплики" },
          { en: "rehearsing without a break for lunch", ru: "репетировать без перерыва на обед" },
          { en: "It's worse", ru: "ещё хуже", tip: "D · True" },
          { en: "don't know how to write scripts", ru: "не умеем писать сценарии" },
          { en: "don't have many friends who speak Greek", ru: "мало друзей, которые говорят по-гречески" },
          { en: "perform our play live", ru: "играть пьесу вживую" },
          { en: "film it", ru: "снять её" },
          { en: "deadline is reasonable", ru: "срок разумный", tip: "G · True" },
          { en: "triumph in this international competition", ru: "победить в этом международном конкурсе" }
        ],
        chunks: [
          { text: "You've won the first prize in a competition? Wow. You're kidding.", showText: true },
          { text: "I knew that you love Greek, but I didn't know that you're crazy about it. First of all, tell me what should we do?", showText: true },
          { text: "Oh, and afterwards, probably, we'll need people ready to spend all their free time sewing costumes, memorizing lines, and rehearsing without a break for lunch.", showText: true },
          { text: "Definitely, not. It's worse. We don't know how to write scripts, we don't have many friends who speak Greek and who are interested in acting.", showText: true },
          { text: "Ok. What will be next? Do we need to perform our play live in front of the audience or can we film it?", showText: true },
          { text: "Ok, sounds as if you have a plan. And the deadline is reasonable. Let's try and see what happens. Who knows, maybe we will triumph in this international competition.", showText: false }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
