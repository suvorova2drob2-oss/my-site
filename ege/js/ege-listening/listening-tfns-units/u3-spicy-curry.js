/**
 * ЕГЭ Listening TFNS · Unit 3 · Spicy curry (Tom & Jessica).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u3-spicy-curry",
    unitOrder: 3,
    title: "Unit 3 · Spicy curry",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Tom & Jessica · capsaicin rescue",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/3/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%203%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>разговор двух друзей</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Главный навык:</strong> три решения — не угадывай «по смыслу».</p>" +
      "<ul>" +
      "<li><strong>True (+)</strong> — в диалоге <em>прямо сказано</em> (*mouth is on fire* → A).</li>" +
      "<li><strong>False (−)</strong> — в тексте <em>наоборот</em> (broth, не water → E).</li>" +
      "<li><strong>Not stated (?)</strong> — тема <em>не звучит</em> (Jessica про heat ≠ «enjoys spicy food» → B).</li>" +
      "<li>Ловушка: milk / dairy — True для D, но «drinking milk wouldn't do much» — уточнение про жир, не отмена dairy.</li>" +
      "</ul>",
    statements: [
      { letter: "A", text: "The curry Tom's cooked is too spicy for him." },
      { letter: "B", text: "Jessica enjoys extremely spicy food." },
      { letter: "C", text: "Tom found science classes boring." },
      { letter: "D", text: "Dairy products help cool down spicy food." },
      { letter: "E", text: "Jessica recommends adding water to the curry." },
      { letter: "F", text: "Tom wants to add more vegetables to the curry." },
      { letter: "G", text: "Jessica suggests cooking another dish." }
    ],
    key: {
      A: "t",
      B: "ns",
      C: "t",
      D: "t",
      E: "f",
      F: "t",
      G: "f"
    },
    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Tom",
            text:
              "Ugh, Jessica! I think I've used too much chilli pepper powder in the curry. My mouth is on fire!"
          },
          {
            speaker: "Jessica",
            text:
              "Whoa, Tom, that's some serious heat in this chilli, indeed! Did you, by any chance, confuse the teaspoons with the tablespoons for the chilli powder?"
          },
          {
            speaker: "Tom",
            text: "Uh, maybe? It looked like such a small amount in the recipe..."
          },
          {
            speaker: "Jessica",
            text:
              "Yeah, it happens to the best of us. Relax, there are ways to cool things down a bit!"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Tom",
            text:
              "Really? How? Because right now, I'm pretty sure I could breathe fire like a real fire-breathing dragon."
          },
          {
            speaker: "Jessica",
            text:
              "Okay, okay, deep breaths. Panic won't help. Listen, remember that stuff we learned in science about milk and spicy food?"
          },
          { speaker: "Tom", text: "Ugh, not the science lecture again." },
          {
            speaker: "Jessica",
            text:
              "No big lecture, just a handy trick! The thing is, milk has this protein called casein, and that protein loves to grab onto the spicy stuff in chilli peppers, capsaicin."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Tom",
            text: "Capsaicin, huh? Sounds fancy for mouth-fire."
          },
          {
            speaker: "Jessica",
            text:
              "Yeah, that is the scientific term for the fire in your mouth. So, the milk protein traps the capsaicin and stops it from burning your taste buds. It is basically a spicy food antidote."
          },
          {
            speaker: "Tom",
            text:
              "Wow, that's kind of fascinating! So, I just drink a whole glass and become a human fire extinguisher?"
          },
          {
            speaker: "Jessica",
            text:
              "Ugh, not the most pleasant image, Tom. Actually, drinking milk wouldn't do much. You want something with a bit more fat, like yoghurt or sour cream. The fat helps grab onto the capsaicin too."
          },
          {
            speaker: "Tom",
            text: "Hmm, interesting. What if I don't like fat dairy products?"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Jessica",
            text:
              "No problem! You can add some broth to the curry. The downside is it might weaken the other flavours a bit. Another option is some starchy side dishes like rice, potatoes, or even bread. The starch can soak up some of the capsaicin as well."
          },
          {
            speaker: "Tom",
            text:
              "Brilliant! We have some jasmine rice cooking already. Maybe I can even add some extra veggies to balance the spice. And, Jessica, you know so many useful things! Maybe I should've paid more attention in Science after all... although, who knew it would be about spicy food survival?"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Jessica",
            text:
              "Science is everywhere, Tom, even in the kitchen! Look, next time you're feeling adventurous with the chillies, start slow and taste as you go. We can always add more, but taking it away is a whole other story."
          },
          {
            speaker: "Tom",
            text:
              "Hey, if all else fails, we now know milk is our spicy food superhero! Thanks, Jessica!"
          },
          {
            speaker: "Jessica",
            text:
              "Now let's get to work, Tom! It's time we saved this curry and enjoyed a hopefully less explosive meal!"
          }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        key: "t",
        paragraphIndex: 0,
        keyLineRu: "True — too much chilli; mouth is on fire.",
        explainRu:
          "Tom прямо говорит, что переборщил с порошком — curry слишком острый для него.",
        evidencePromptRu: "Найди жалобу Tom на остроту.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "I've used too much chilli pepper powder in the curry"
          },
          { kind: "hit", sol: "e", text: "My mouth is on fire" }
        ]
      },
      {
        letter: "B",
        key: "ns",
        paragraphIndex: 0,
        keyLineRu: "Not stated — нравится ли Jessica extremely spicy food — не сказано.",
        nsExplainRu:
          "Jessica отмечает serious heat, но нигде не говорит, что <em>enjoys</em> extremely spicy food.",
        evidencePromptRu: "Прочитай абзац — отмечать нечего.",
        segments: []
      },
      {
        letter: "C",
        key: "t",
        paragraphIndex: 1,
        keyLineRu: "True — not the science lecture again.",
        explainRu:
          "Tom раздражён «наукой» — science lectures ему скучны / не нравятся.",
        evidencePromptRu: "Найди реакцию Tom на science lecture.",
        segments: [
          { kind: "hit", sol: "e", text: "Ugh, not the science lecture again" }
        ]
      },
      {
        letter: "D",
        key: "t",
        paragraphIndex: 2,
        keyLineRu: "True — milk / yoghurt / sour cream cool down capsaicin.",
        explainRu:
          "Casein и fat dairy neutralize capsaicin — dairy помогает «потушить» остроту.",
        evidencePromptRu: "Найди объяснение про milk и yoghurt/sour cream.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "the milk protein traps the capsaicin and stops it from burning your taste buds"
          },
          {
            kind: "hit",
            sol: "e",
            text: "something with a bit more fat, like yoghurt or sour cream"
          }
        ]
      },
      {
        letter: "E",
        key: "f",
        paragraphIndex: 3,
        keyLineRu: "False — Jessica советует broth, не water.",
        explainRu:
          "Add some broth — не water; вода в записи не рекомендуется.",
        evidencePromptRu: "Найди, что Jessica предлагает добавить в curry.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "You can add some broth to the curry"
          }
        ]
      },
      {
        letter: "F",
        key: "t",
        paragraphIndex: 3,
        keyLineRu: "True — add some extra veggies to balance the spice.",
        explainRu:
          "Tom сам предлагает добавить овощи, чтобы сбалансировать остроту.",
        evidencePromptRu: "Найди фразу Tom про veggies.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "add some extra veggies to balance the spice"
          }
        ]
      },
      {
        letter: "G",
        key: "f",
        paragraphIndex: 4,
        keyLineRu: "False — saved this curry, не another dish.",
        explainRu:
          "Jessica предлагает спасти <em>этот</em> curry — не готовить другое блюдо.",
        evidencePromptRu: "Найди финал Jessica про saving the curry.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "It's time we saved this curry"
          }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Tom",
        label: "Tom",
        fullText:
          "Ugh, Jessica! I think I've used too much chilli pepper powder in the curry. My mouth is on fire! Uh, maybe? It looked like such a small amount in the recipe... Really? How? Because right now, I'm pretty sure I could breathe fire like a real fire-breathing dragon. Ugh, not the science lecture again. Capsaicin, huh? Sounds fancy for mouth-fire. Wow, that's kind of fascinating! So, I just drink a whole glass and become a human fire extinguisher? Hmm, interesting. What if I don't like fat dairy products? Brilliant! We have some jasmine rice cooking already. Maybe I can even add some extra veggies to balance the spice. And, Jessica, you know so many useful things! Maybe I should've paid more attention in Science after all... although, who knew it would be about spicy food survival? Hey, if all else fails, we now know milk is our spicy food superhero! Thanks, Jessica!",
        phrases: [
          {
            en: "used too much chilli pepper powder",
            ru: "переборщил с перечным порошком",
            tip: "A · True"
          },
          { en: "My mouth is on fire", ru: "рот горит", tip: "A · True" },
          { en: "It looked like such a small amount in the recipe", ru: "в рецепте казалось, что нужно мало" },
          {
            en: "Ugh, not the science lecture again",
            ru: "только не снова научная лекция",
            tip: "C · True · boring"
          },
          { en: "What if I don't like fat dairy products?", ru: "а если не люблю жирные молочные продукты?" },
          {
            en: "add some extra veggies to balance the spice",
            ru: "добавить овощей, чтобы сбалансировать остроту",
            tip: "F · True"
          },
          { en: "milk is our spicy food superhero", ru: "молоко — спасение от острой еды", tip: "D · dairy" }
        ],
        chunks: [
          {
            text:
              "Ugh, Jessica! … My mouth is on fire! … cool things down a bit!",
            showText: true
          },
          {
            text:
              "Really? How? … not the science lecture again.",
            showText: true
          },
          {
            text:
              "Capsaicin, huh? … What if I don't like fat dairy products?",
            showText: true
          },
          {
            text:
              "Brilliant! … spicy food survival?",
            showText: true
          },
          {
            text:
              "Hey, if all else fails … Thanks, Jessica!",
            showText: true
          }
        ]
      },
      {
        id: "Jessica",
        label: "Jessica",
        fullText:
          "Whoa, Tom, that's some serious heat in this chilli, indeed! Did you, by any chance, confuse the teaspoons with the tablespoons for the chilli powder? Yeah, it happens to the best of us. Relax, there are ways to cool things down a bit! Okay, okay, deep breaths. Panic won't help. Listen, remember that stuff we learned in science about milk and spicy food? No big lecture, just a handy trick! The thing is, milk has this protein called casein, and that protein loves to grab onto the spicy stuff in chilli peppers, capsaicin. Yeah, that is the scientific term for the fire in your mouth. So, the milk protein traps the capsaicin and stops it from burning your taste buds. It is basically a spicy food antidote. Ugh, not the most pleasant image, Tom. Actually, drinking milk wouldn't do much. You want something with a bit more fat, like yoghurt or sour cream. The fat helps grab onto the capsaicin too. No problem! You can add some broth to the curry. The downside is it might weaken the other flavours a bit. Another option is some starchy side dishes like rice, potatoes, or even bread. The starch can soak up some of the capsaicin as well. Science is everywhere, Tom, even in the kitchen! Look, next time you're feeling adventurous with the chillies, start slow and taste as you go. We can always add more, but taking it away is a whole other story. Now let's get to work, Tom! It's time we saved this curry and enjoyed a hopefully less explosive meal!",
        phrases: [
          { en: "confuse the teaspoons with the tablespoons", ru: "перепутать чайные и столовые ложки" },
          { en: "cool things down a bit", ru: "немного «остудить» остроту" },
          { en: "Panic won't help", ru: "паника не поможет" },
          { en: "a handy trick", ru: "полезный приём" },
          { en: "a spicy food antidote", ru: "противоядие от острой еды", tip: "D · True" },
          {
            en: "yoghurt or sour cream",
            ru: "йогурт или сметана",
            tip: "D · dairy + fat"
          },
          {
            en: "add some broth to the curry",
            ru: "добавить бульон в карри",
            tip: "E · False — не water"
          },
          { en: "starchy side dishes like rice, potatoes, or even bread", ru: "крахмалистые гарниры: рис, картофель, хлеб" },
          { en: "start slow and taste as you go", ru: "начинай понемногу и пробуй по ходу" },
          { en: "taking it away is a whole other story", ru: "«убрать остроту» — совсем другое дело" },
          {
            en: "saved this curry",
            ru: "спасти это карри",
            tip: "G · False — не another dish"
          }
        ],
        chunks: [
          {
            text:
              "Whoa, Tom … cool things down a bit!",
            showText: true
          },
          {
            text:
              "Okay, okay, deep breaths … capsaicin.",
            showText: true
          },
          {
            text:
              "Yeah, that is the scientific term … grab onto the capsaicin too.",
            showText: true
          },
          {
            text:
              "No problem! … soak up some of the capsaicin as well.",
            showText: true
          },
          {
            text:
              "Science is everywhere … less explosive meal!",
            showText: true
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
