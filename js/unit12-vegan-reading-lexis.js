/**
 * Unit 12 · Reading Part 7 — Going vegan · Cool phrases by speaker (A–E).
 * Drawer: phrase + Sense (definition) + In the text (context line).
 * window.FCE_U12_VEGAN_READING_LEXIS
 */
(function (W) {
  "use strict";

  var SPEAKERS = [
    {
      id: "jack",
      letter: "A",
      label: "A · Jack",
      phrases: [
        {
          en: "go vegan",
          tip: "Start eating only plant-based food — no meat, fish, dairy or eggs.",
          context:
            "I first wanted to go vegan a few years ago, when I was about thirteen, and learnt about the effects of the meat industry on the environment."
        },
        {
          en: "better informed about",
          tip: "Know more facts and understand something more clearly before deciding.",
          context:
            "But my mum told me to wait until I was older and better informed about what being vegan meant."
        },
        {
          en: "sound advice",
          tip: "Sensible, reliable guidance that is worth following.",
          context:
            "It was probably sound advice, though I now know it was partly because she couldn't face cooking special meals for me."
        },
        {
          en: "couldn't face cooking special meals for me",
          tip: "Felt unable or unwilling to deal with preparing separate vegan dishes.",
          context:
            "It was probably sound advice, though I now know it was partly because she couldn't face cooking special meals for me."
        },
        {
          en: "I totally get that",
          tip: "I completely understand and accept the reason.",
          context:
            "I totally get that, though, and don't hold it against her."
        },
        {
          en: "don't hold it against her",
          tip: "Not stay angry or blame her for what happened.",
          context:
            "I totally get that, though, and don't hold it against her."
        },
        {
          en: "don't bear a grudge",
          tip: "Not keep lasting anger or resentment (same idea as don't hold it against her).",
          context:
            "I totally get that, though, and don't hold it against her."
        },
        {
          en: "very much aware of the extra effort",
          tip: "Clearly recognise that something takes hosts more work than usual.",
          context:
            "Now that I am a vegan, I'm very much aware of the extra effort involved for non-vegans who invite me round for a meal."
        },
        {
          en: "invariably amazed at",
          tip: "Always very surprised by (in a positive way) — every time, without exception.",
          context:
            "I always offer to take a dessert, and the other dinner guests are invariably amazed at how delicious it is."
        }
      ],
      speaking: {
        groups: [
          {
            title: "Веганство и экология",
            kicker: "🌱 Going Vegan & Environment",
            questions: [
              "Why do you think so many young people decide to go vegan nowadays? Is it always about protecting the planet?",
              "Imagine a friend wants to change their diet drastically. Should they wait until they are better informed about nutrition, or just start right away?"
            ]
          },
          {
            title: "Отношения с родителями и компромиссы",
            kicker: "👥 Family & Advice",
            questions: [
              "When parents give us limitations, is it usually sound advice, or are they just trying to make their own lives easier?",
              "If your child suddenly changed their diet, would you support them, or would you feel like you couldn't face cooking special meals for them?",
              "If a parent refuses to buy you something expensive, would you totally get that, or would it be hard not to hold it against them?",
              "Is it easy for you to forgive people, or do you usually bear a grudge for a long time when someone doesn't support your ideas?"
            ]
          },
          {
            title: "Гости и социальная жизнь",
            kicker: "🍽️ Social Life & Hosting",
            questions: [
              "When you invite people over, are you very much aware of the extra effort needed to cook for guests with special dietary habits (like gluten-free or vegan)?",
              "Think about the best dish you have ever tried at a party. Were you invariably amazed at its taste, or did you expect it to be good?"
            ]
          }
        ]
      }
    },
    {
      id: "sarah",
      letter: "B",
      label: "B · Sarah",
      phrases: [
        {
          en: "missing out on essential nutrients",
          tip: "Not getting enough of the vitamins and minerals the body needs.",
          context:
            "My parents were worried I was missing out on essential nutrients and that this could have serious consequences for me."
        },
        {
          en: "warning of the pitfalls",
          tip: "Articles that highlight dangers, problems or hidden risks.",
          context:
            "My dad had the biggest problem with it, and he kept sending me articles warning of the pitfalls of a plant-based diet."
        },
        {
          en: "put his mind at rest",
          tip: "Help him stop worrying; make him feel reassured.",
          context:
            "I tried to put his mind at rest by telling him I was taking supplements, but that just served to reinforce his idea that I wasn't eating properly."
        },
        {
          en: "I was taking supplements",
          tip: "I was using extra vitamins/minerals in pills or powders to support my diet.",
          context:
            "I tried to put his mind at rest by telling him I was taking supplements, but that just served to reinforce his idea that I wasn't eating properly."
        },
        {
          en: "reinforce his idea",
          tip: "Make his belief stronger — here, that she was not eating properly.",
          context:
            "I tried to put his mind at rest by telling him I was taking supplements, but that just served to reinforce his idea that I wasn't eating properly."
        },
        {
          en: "they've both gradually come to accept",
          tip: "Over time, both parents slowly started to OK her vegan lifestyle.",
          context:
            "Over time, though, they've both gradually come to accept my change to veganism, and that's really important to me, because it's a major part of who I am."
        }
      ],
      speaking: {
        groups: [
          {
            title: "Риски рациона и добавки",
            kicker: "💊 Nutrients, pitfalls & supplements",
            questions: [
              "Do you agree that people who go vegan risk missing out on essential nutrients? How can they prevent this?",
              "If someone wants to try a strict diet, should they focus on the benefits, or is it more important to read articles warning of the pitfalls?",
              "If a person tells you they are taking supplements, does it make you think they are healthy, or does it reinforce the idea that their diet is incomplete?"
            ]
          },
          {
            title: "Спокойствие близких и принятие",
            kicker: "🤝 Peace of Mind & Acceptance",
            questions: [
              "What is the best way to put your parents' minds at rest when you are making a major, risky life change?",
              "Think about a time you had a big disagreement with someone. Have they gradually come to accept your point of view over time, or do they still bear a grudge?",
              "Why is it so important for us that our family gradually comes to accept the things that are a major part of who we are?"
            ]
          }
        ]
      }
    },
    {
      id: "maya",
      letter: "C",
      label: "C · Maya",
      phrases: [
        {
          en: "kept at it faithfully",
          tip: "Continued the vegan diet consistently, without giving up.",
          context:
            "My sister has kept at it faithfully for over five years and shown amazing willpower."
        },
        {
          en: "threw in the towel",
          tip: "Gave up; stopped trying (informal).",
          context:
            "There were too many types of food I missed, and I threw in the towel after a few months."
        },
        {
          en: "On the plus side",
          tip: "Used to introduce a positive point after something negative.",
          context:
            "On the plus side, I learnt a surprising amount about nutrition and the health benefits of certain foods."
        }
      ],
      speaking: {
        groups: [
          {
            title: "Сила воли и «сдаться»",
            kicker: "💪 Willpower & giving up",
            questions: [
              "If someone has kept at it faithfully for over five years, does it show amazing willpower, or has it just become an effortless habit for them?",
              "When you try a new hobby or a difficult challenge, do you usually stick to it, or have you ever thrown in the towel after just a few months?",
              "If a person tries to go vegan but throws in the towel because they miss their favourite food, should we hold it against them?"
            ]
          },
          {
            title: "Уроки после неудачи",
            kicker: "✨ On the plus side",
            questions: [
              "Think about a time you failed a test or a project. On the plus side, did you learn any valuable lessons from that experience?"
            ]
          }
        ]
      }
    },
    {
      id: "justin",
      letter: "D",
      label: "D · Justin",
      phrases: [
        {
          en: "make the switch overnight",
          tip: "Change to a vegan diet all at once, immediately — not step by step.",
          context:
            "Many people try to make the switch overnight and it can prove too much, so they give up and go back to their vegetarian or meat-based diet."
        },
        {
          en: "do it in stages",
          tip: "Change gradually, one step at a time.",
          context:
            "The key is to do it in stages. It gives you time to work out what works for you and what doesn't."
        },
        {
          en: "reassure my parents",
          tip: "Calm their fears and convince them I was safe and knew what I was doing.",
          context:
            "If I had any questions or concerns, like which health supplements to take, how to reassure my parents I knew what I was doing, or where to buy vegan products, there was always someone who could give me the benefit of their knowledge and experience."
        },
        {
          en: "the benefit of their knowledge and experience",
          tip: "Use what others already know and have lived through to help you.",
          context:
            "If I had any questions or concerns, like which health supplements to take, how to reassure my parents I knew what I was doing, or where to buy vegan products, there was always someone who could give me the benefit of their knowledge and experience."
        }
      ],
      speaking: {
        groups: [
          {
            title: "Как менять привычки",
            kicker: "🔄 Overnight vs in stages",
            questions: [
              "When people want to change their lifestyle or habit, is it better to make the switch overnight or is it wiser to do it in stages? Why?",
              "Think about a time you tried to change a habit and threw in the towel. Did you try to make the switch overnight, or did you do it in stages?"
            ]
          },
          {
            title: "Родители и наставники",
            kicker: "🤝 Parents & mentors",
            questions: [
              "If a teenager decides to change their lifestyle, what is the best way for them to reassure their parents that they know what they are doing?",
              "When you start something completely new, do you prefer to figure it out by yourself, or do you look for someone who can give you the benefit of their knowledge and experience?"
            ]
          }
        ]
      }
    },
    {
      id: "rhona",
      letter: "E",
      label: "E · Rhona",
      phrases: [
        {
          en: "I wish I'd done it ages ago",
          tip: "I regret not starting much earlier — I should have changed sooner.",
          context:
            "I've only recently changed to a plant-based diet. I wish I'd done it ages ago."
        },
        {
          en: "high time I took a stand against",
          tip: "It was definitely the right moment to speak up and refuse to accept something wrong.",
          context:
            "I'd become increasingly aware of the suffering we cause to animals by what we eat, and I felt it was high time I took a stand against the way we treat them."
        },
        {
          en: "let alone cook it",
          tip: "Not even the more difficult thing (here: they won't try vegan food, and cooking it is even less likely).",
          context:
            "My friends only ever want to meet up in burger restaurants, and my parents seem determined not to try vegan food, let alone cook it, which is disappointing"
        },
        {
          en: "not asking much to show a little interest",
          tip: "A small amount of effort or curiosity would be reasonable — not a big demand.",
          context:
            "it's not asking much for them to show a little interest."
        },
        {
          en: "gradually getting the hang of it",
          tip: "Slowly learning how to do it well and feeling more confident.",
          context:
            "So, anyway, I just cook all my meals for myself now. I'm gradually getting the hang of it, and I like the independence it brings."
        }
      ],
      speaking: {
        groups: [
          {
            title: "Раньше начать и говорить «нет»",
            kicker: "🌱 Sooner & taking a stand",
            questions: [
              "Think about a good habit you recently started (like exercising or reading). Do you feel like you wish you'd done it ages ago?",
              "In what situations do you think it is high time to take a stand against something you see in society or at school?"
            ]
          },
          {
            title: "Семья, друзья и поддержка",
            kicker: "🤝 Interest & disappointment",
            questions: [
              "If someone's family refuses to even try vegan food, let alone cook it, is it fair for that person to feel disappointed?",
              "When a friend is going through a major life change, do you agree that it's not asking much to show a little interest in their new lifestyle?"
            ]
          },
          {
            title: "Новый навык",
            kicker: "📈 Getting the hang of it",
            questions: [
              "Remember when you started learning a completely new skill (like driving, cooking, or a language). How long did it take before you were gradually getting the hang of it?"
            ]
          }
        ]
      }
    }
  ];

  function drawerSpeakers() {
    return SPEAKERS.map(function (sp) {
      return {
        id: sp.id,
        letter: sp.letter,
        label: sp.label,
        phrases: sp.phrases.map(function (p) {
          return {
            en: p.en,
            ru: p.ru || "",
            context: p.context || "",
            tip: p.tip || ""
          };
        }),
        speaking: sp.speaking || null
      };
    });
  }

  W.FCE_U12_VEGAN_READING_LEXIS = {
    speakers: SPEAKERS,
    drawerSpeakers: drawerSpeakers,
    id: "u12-vegan-reading",
    label: "Part 7 · Going vegan"
  };
})(typeof window !== "undefined" ? window : globalThis);
