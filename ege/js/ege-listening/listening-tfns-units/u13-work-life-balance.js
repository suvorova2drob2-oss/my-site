/**
 * ЕГЭ Listening TFNS · Unit 13 · Work-life balance (Noah & Samantha).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u13-work-life-balance",
    unitOrder: 13,
    title: "Unit 13 · Work-life balance",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Noah & Samantha · work-life balance",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/13/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2013%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>диалог</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть:</strong> кто что предпочитает в кафе, сколько лет училась Samantha, что именно сказано/не сказано о Noah.</p>",
    statements: [
      { letter: "A", text: "Noah prefers sitting in the corner." },
      { letter: "B", text: "Noah and Samantha are school friends." },
      { letter: "C", text: "Samantha will take a cup of coffee." },
      { letter: "D", text: "It took Samantha more than 4 years to graduate." },
      { letter: "E", text: "Noah has his Bachelor's degree in medicine." },
      { letter: "F", text: "Noah is not happy about his summer job." },
      { letter: "G", text: "Noah and Samantha have their snacks served." }
    ],
    key: {
      A: "f",
      B: "ns",
      C: "t",
      D: "t",
      E: "ns",
      F: "ns",
      G: "f"
    },
    dialogueParagraphs: [
      {
        turns: [
          { speaker: "Noah", text: "Samantha, over here. Hi!" },
          { speaker: "Samantha", text: "Hey, long time no see..." },
          { speaker: "Noah", text: "Oh, yeah! Shall we sit by the window?" },
          {
            speaker: "Samantha",
            text:
              "Actually, I'd prefer to sit in the corner. That booth looks cosy and I don't like being on display."
          },
          {
            speaker: "Noah",
            text:
              "Your wish is my command. I usually sit at the counter, but any place will do. I love this cafe. They serve amazing coffee and refreshing smoothies. Fancy anything?"
          },
          { speaker: "Samantha", text: "I'm a fan of milkshakes. Do you remember spending nights over banana-and-chocolate ice-cream?" },
          { speaker: "Noah", text: "Believe me, I do. Then a banana milkshake for you and one Latte for me. I'm a bit sleepy today, so I hope caffeine will do the trick." },
          { speaker: "Samantha", text: "Hm. I think I'll go with Latte as well. Don't feel like having cold drink today." }
        ]
      },
      {
        turns: [
          { speaker: "Noah", text: "Sure. Rumor has it that you've finally graduated." },
          { speaker: "Samantha", text: "What do you mean 'finally'? It didn't take long and I was the best student in my course." },
          { speaker: "Noah", text: "But it wasn't four years either, was it?" },
          {
            speaker: "Samantha",
            text:
              "No, it wasn't. I did take a couple of internships at the hospital while studying, which added a year and a half to my education. Well, nearly 6 years, all right. What about you?"
          },
          { speaker: "Noah", text: "I've done my Bachelor's and I will get my Master's in half a year. What's the most useful thing you got from your studies?" }
        ]
      },
      {
        turns: [
          {
            speaker: "Samantha",
            text:
              "I guess, that was a concept that I should be able to maintain the work-life balance. My professors say that these days companies encourage their employees to bring what they call their whole self to work, and that we shouldn't be tempted by that."
          },
          {
            speaker: "Noah",
            text:
              "I agree with them. I've had a summer internship with one company. Everything there was about optimizing my personality. The community. The sense that I was not working for a salary but to make the world a better place. I was in love with my work; body, mind, heart and soul. But I soon realised that what they actually wanted is to expand the company's profits."
          },
          { speaker: "Samantha", text: "Harsh reality, yeah. You love your work but it doesn't love you back." },
          { speaker: "Noah", text: "Indeed. And my love to work and my energy are limited. And life is more than work." },
          { speaker: "Samantha", text: "I couldn't agree more. According to one of my textbooks, work is labour exchanged for salary. It shouldn't turn into an all-encompassing sacrifice of our time and energy." },
          { speaker: "Noah", text: "My grandma wouldn't agree with you here. She used to say that I should love my work." },
          { speaker: "Samantha", text: "I don't mean that we should hate our job, but we shouldn't become work-obsessed." },
          { speaker: "Noah", text: "Yeah. But, we got distracted. Let's order our drinks and maybe some snacks. What do you think?" },
          { speaker: "Samantha", text: "Yeah. Could you please pass me the menu?" }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        answer: "f",
        keyLineRu: "Samantha prefers the corner; Noah usually sits at the counter.",
        evidencePromptRu: "<strong>A.</strong> Найдите, кто выбирает corner.",
        segments: [
          { kind: "hit", sol: "e", text: "I'd prefer to sit in the corner" },
          { kind: "hit", sol: "e", text: "I usually sit at the counter" }
        ]
      },
      {
        letter: "B",
        answer: "ns",
        keyLineRu: "They know each other, but school friends is not stated.",
        evidencePromptRu: "<strong>B.</strong> Проверьте, есть ли school friends.",
        segments: [
          { kind: "hit", sol: "e", text: "long time no see", explainRu: "Они знакомы, но school friends не сказано → NS." }
        ]
      },
      {
        letter: "C",
        answer: "t",
        keyLineRu: "Samantha chooses Latte as well.",
        evidencePromptRu: "<strong>C.</strong> Найдите Latte as well.",
        segments: [
          { kind: "hit", sol: "e", text: "I think I'll go with Latte as well" }
        ]
      },
      {
        letter: "D",
        answer: "t",
        keyLineRu: "Nearly 6 years, so more than 4.",
        evidencePromptRu: "<strong>D.</strong> Найдите nearly 6 years.",
        segments: [
          { kind: "hit", sol: "e", text: "nearly 6 years" }
        ]
      },
      {
        letter: "E",
        answer: "ns",
        keyLineRu: "Noah has done his Bachelor's, but field is not stated.",
        evidencePromptRu: "<strong>E.</strong> Проверьте, сказана ли medicine.",
        segments: [
          { kind: "hit", sol: "e", text: "I've done my Bachelor's", explainRu: "Field medicine не сказан → NS." }
        ]
      },
      {
        letter: "F",
        answer: "ns",
        keyLineRu: "Noah describes internship critically, but happy/not happy about summer job is not stated directly.",
        evidencePromptRu: "<strong>F.</strong> Проверьте, есть ли оценка summer job.",
        segments: [
          { kind: "hit", sol: "e", text: "I've had a summer internship with one company", explainRu: "Есть internship, но не формулировка not happy about summer job → NS." }
        ]
      },
      {
        letter: "G",
        answer: "f",
        keyLineRu: "They are about to order drinks and maybe snacks; snacks are not served.",
        evidencePromptRu: "<strong>G.</strong> Найдите order / menu.",
        segments: [
          { kind: "hit", sol: "e", text: "Let's order our drinks and maybe some snacks" },
          { kind: "hit", sol: "e", text: "pass me the menu", explainRu: "Ещё только заказывают → False." }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Noah",
        label: "Noah",
        fullText:
          "Samantha, over here. Hi! Oh, yeah! Shall we sit by the window? Your wish is my command. I usually sit at the counter, but any place will do. I love this cafe. They serve amazing coffee and refreshing smoothies. Fancy anything? Believe me, I do. Then a banana milkshake for you and one Latte for me. I'm a bit sleepy today, so I hope caffeine will do the trick. Sure. Rumor has it that you've finally graduated. But it wasn't four years either, was it? I've done my Bachelor's and I will get my Master's in half a year. What's the most useful thing you got from your studies? I agree with them. I've had a summer internship with one company. Everything there was about optimizing my personality. The community. The sense that I was not working for a salary but to make the world a better place. I was in love with my work; body, mind, heart and soul. But I soon realised that what they actually wanted is to expand the company's profits. Indeed. And my love to work and my energy are limited. And life is more than work. My grandma wouldn't agree with you here. She used to say that I should love my work. Yeah. But, we got distracted. Let's order our drinks and maybe some snacks. What do you think?",
        phrases: [
          { en: "sit by the window", ru: "сесть у окна" },
          { en: "I usually sit at the counter", ru: "я обычно сижу у стойки", tip: "A" },
          { en: "refreshing smoothies", ru: "освежающие смузи" },
          { en: "caffeine will do the trick", ru: "кофеин поможет" },
          { en: "finally graduated", ru: "наконец-то окончила" },
          { en: "Bachelor's", ru: "степень бакалавра", tip: "E · NS" },
          { en: "summer internship", ru: "летняя стажировка", tip: "F" },
          { en: "optimizing my personality", ru: "оптимизация моей личности" },
          { en: "expand the company's profits", ru: "увеличить прибыль компании" },
          { en: "life is more than work", ru: "жизнь — это больше, чем работа" },
          { en: "order our drinks and maybe some snacks", ru: "заказать напитки и, может, закуски", tip: "G" }
        ],
        chunks: [{ text: "Samantha, over here. Hi! Oh, yeah! Shall we sit by the window? Your wish is my command. I usually sit at the counter, but any place will do. I love this cafe. They serve amazing coffee and refreshing smoothies. Fancy anything?", showText: true }, { text: "Believe me, I do. Then a banana milkshake for you and one Latte for me. I'm a bit sleepy today, so I hope caffeine will do the trick. Sure. Rumor has it that you've finally graduated.", showText: true }, { text: "I've done my Bachelor's and I will get my Master's in half a year. What's the most useful thing you got from your studies? I've had a summer internship with one company. Everything there was about optimizing my personality.", showText: true }, { text: "The sense that I was not working for a salary but to make the world a better place. I was in love with my work; body, mind, heart and soul. But I soon realised that what they actually wanted is to expand the company's profits.", showText: true }, { text: "Indeed. And my love to work and my energy are limited. And life is more than work. Yeah. But, we got distracted. Let's order our drinks and maybe some snacks. What do you think?", showText: false }]
      },
      {
        id: "Samantha",
        label: "Samantha",
        fullText:
          "Hey, long time no see... Actually, I'd prefer to sit in the corner. That booth looks cosy and I don't like being on display. I'm a fan of milkshakes. Do you remember spending nights over banana-and-chocolate ice-cream? Hm. I think I'll go with Latte as well. Don't feel like having cold drink today. What do you mean 'finally'? It didn't take long and I was the best student in my course. No, it wasn't. I did take a couple of internships at the hospital while studying, which added a year and a half to my education. Well, nearly 6 years, all right. What about you? I guess, that was a concept that I should be able to maintain the work-life balance. My professors say that these days companies encourage their employees to bring what they call their whole self to work, and that we shouldn't be tempted by that. Harsh reality, yeah. You love your work but it doesn't love you back. I couldn't agree more. According to one of my textbooks, work is labour exchanged for salary. It shouldn't turn into an all-encompassing sacrifice of our time and energy. I don't mean that we should hate our job, but we shouldn't become work-obsessed. Yeah. Could you please pass me the menu?",
        phrases: [
          { en: "sit in the corner", ru: "сесть в углу", tip: "A" },
          { en: "being on display", ru: "быть на виду" },
          { en: "Latte as well", ru: "тоже латте", tip: "C" },
          { en: "best student in my course", ru: "лучшая студентка на курсе" },
          { en: "internships at the hospital", ru: "стажировки в больнице" },
          { en: "nearly 6 years", ru: "почти 6 лет", tip: "D" },
          { en: "work-life balance", ru: "баланс работы и личной жизни" },
          { en: "whole self to work", ru: "всё своё «я» на работу" },
          { en: "work is labour exchanged for salary", ru: "работа — это труд в обмен на зарплату" },
          { en: "work-obsessed", ru: "одержимый работой" },
          { en: "pass me the menu", ru: "передай мне меню", tip: "G" }
        ],
        chunks: [{ text: "Hey, long time no see... Actually, I'd prefer to sit in the corner. That booth looks cosy and I don't like being on display.", showText: true }, { text: "I'm a fan of milkshakes. Do you remember spending nights over banana-and-chocolate ice-cream? Hm. I think I'll go with Latte as well. Don't feel like having cold drink today.", showText: true }, { text: "What do you mean 'finally'? It didn't take long and I was the best student in my course. No, it wasn't. I did take a couple of internships at the hospital while studying, which added a year and a half to my education. Well, nearly 6 years, all right.", showText: true }, { text: "I guess, that was a concept that I should be able to maintain the work-life balance. My professors say that these days companies encourage their employees to bring what they call their whole self to work, and that we shouldn't be tempted by that.", showText: true }, { text: "According to one of my textbooks, work is labour exchanged for salary. It shouldn't turn into an all-encompassing sacrifice of our time and energy. I don't mean that we should hate our job, but we shouldn't become work-obsessed. Could you please pass me the menu?", showText: false }]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
