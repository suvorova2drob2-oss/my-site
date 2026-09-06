/**
 * OGE Listening MC · Unit 3 · Вариант 3 · Tasks 1–4.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u3-variant3-listening-mc",
    unitOrder: 3,
    title: "Unit 3 · Short texts A–D",
    examSection: "Tasks 1–4",
    headerTitle: "Culinary course · camping · films · university",
    audioSrc: "audio/u3/listening-3.mp3",
    questionListStart: 1,
    instructionHtml:
      "Вы услышите <strong>четыре коротких текста</strong>, обозначенных буквами <strong>A, B, C, D</strong>. В заданиях <strong>1–4</strong> запишите цифру <strong>1, 2 или 3</strong>. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p>Один текст = один номер. Сначала пойми ситуацию, потом ищи парафраз в вариантах.</p>",
    shortTexts: [
      {
        label: "A",
        body:
          "The course is suitable for anyone. If you have no skills but have the enthusiasm for cooking, you are welcome! The only thing you have to do to become our student is to offer one recipe for our collection. On this shelf, you can see the cookery books with our students' best recipes. Yours may be published here, too. As for the products to cook with, don't worry, you don't need to bring anything. We provide all the ingredients, including salt and pepper."
      },
      {
        label: "B",
        body:
          "Hi, Paul, it's Jim. Just a quick reminder about our camping trip tomorrow. Don't take any food with you! My mum has prepared loads of sandwiches, buns and biscuits for us. There's more than enough and it's taken almost all of the room in my rucksack. Could you put the box with antiseptics and bandages in your bag? Do not forget about that first-aid stuff, as we are going to rent mountain bikes there, so scratches and injuries may happen anytime. See you tomorrow!"
      },
      {
        label: "C",
        body:
          "Sarah: At last, Rick! The homework is done! Would you like to watch a film?\nRick: As a kind of reward? Yeah... We can watch 'Summer time', which is a sweet romantic film most girls love. Is it ok, Sarah?\nSarah: Very funny! But I don't like stupid sweet films.\nRick: Ok-ok! Let it be an action, then, with a superhero saving the world. Lots of special effects. It's called 'The last chance'. Or... it's just occurred to me, 'The noble family'. It's a historical drama.\nSarah: I like historical films but it's a serial I believe, isn't it?\nRick: I think so... Yes.\nSarah: We've just no time for it, so let it be that action film about the superhero.\nRick: The action? Ok. Fine. That is my first choice too."
      },
      {
        label: "D",
        body:
          "Lisa: So, Jeff, is it settled? We're all applying to the City University, right?\nJeff: Hold on, Lisa. Just a moment. Are you saying Nick and Peter are going to study there too?\nLisa: Of course. And Johanna and Sarah. Their parents are happy with their decision.\nJeff: I'm not sure mine will support it too much. They want me to look around first, try different jobs, gain work experience — you know, just to find out what I really want to do as a career.\nLisa: Don't you know it yet?\nJeff: Nope. But I'll join you, yes. Learning together will be fun."
      }
    ],
    questions: [
      {
        examNum: 1,
        prompt: "To join the culinary course, you need to…",
        key: 2,
        choices: [
          { num: 1, text: "have basic skills in cooking." },
          { num: 2, text: "add a recipe for the cookery book." },
          { num: 3, text: "bring the required ingredients." }
        ],
        explainRu: "Offer one recipe for our collection."
      },
      {
        examNum: 2,
        prompt: "What should Paul take with him to the camping site?",
        key: 3,
        choices: [
          { num: 1, text: "His bicycle." },
          { num: 2, text: "Some food." },
          { num: 3, text: "A first-aid kit." }
        ],
        explainRu: "Antiseptics and bandages — first-aid stuff."
      },
      {
        examNum: 3,
        prompt: "What are Rick and Sarah going to watch?",
        key: 1,
        choices: [
          { num: 1, text: "An action film." },
          { num: 2, text: "A romantic comedy." },
          { num: 3, text: "A historical drama." }
        ],
        explainRu: "They choose the action film about the superhero."
      },
      {
        examNum: 4,
        prompt: "Jeff wants to enter the university because…",
        key: 3,
        choices: [
          { num: 1, text: "his parents advise him to do this." },
          { num: 2, text: "he is sure about his career choice." },
          { num: 3, text: "his friends are going there too." }
        ],
        explainRu: "Nick, Peter, Johanna and Sarah are applying too."
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
