/**
 * Grammar practice · past simple workbook page (brackets, box, rewrite, prompts, letter, open gaps).
 */
(function (w) {
  var pack = w.__EGE_GRAMMAR_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  function both(list) {
    var out = [];
    var i;
    var s;
    for (i = 0; i < list.length; i++) {
      s = list[i];
      out.push(s);
      if (/[.!?]$/.test(s)) out.push(s.slice(0, -1));
      else out.push(s + ".");
    }
    return out;
  }

  function neg(verb) {
    return ["didn't " + verb, "did not " + verb, "didnt " + verb];
  }

  function gap(num, before, after, cue, answers, keyShow) {
    return {
      examNum: num,
      paragraph: 1,
      before: before,
      afterInline: after,
      afterTail: "",
      cue: cue,
      answers: answers,
      keyShow: keyShow
    };
  }

  pack.units.push({
    id: "u33-past-simple-window",
    unitOrder: 33,
    title: "Past simple · broke the window",
    examSection: "Practice · brackets",
    headerTitle: "Past simple",
    instructionHtml:
      "Раскройте скобки, поставив глаголы в <strong>past simple</strong>.",
    items: [
      gap(1, "Yesterday I ", " the kitchen window playing football in the garden.", "BREAK", ["broke"], "broke"),
      gap(2, "The bus ", " late, so we missed the beginning of the film.", "BE", ["was"], "was"),
      gap(3, "Karen didn't go to school yesterday because she ", " sick.", "FEEL", ["felt"], "felt"),
      gap(4, "Susan ", " her jeans to the party – she", "NOT WEAR", neg("wear"), "didn't wear"),
      gap("4b", "", " her new dress.", "WEAR", ["wore"], "wore"),
      gap(5, "Last night we ", " to the theatre to see a ballet.", "GO", ["went"], "went"),
      gap(6, "", " the dog out for a walk this morning?", "JASON / TAKE", ["did jason take"], "Did Jason take"),
      gap(7, "'Where ", " your mobile?' 'I", "YOU / FIND", ["did you find"], "did you find"),
      gap("7b", "", " it under my bed!'", "FIND", ["found"], "found"),
      gap(8, "Our grandparents ", " emails but they", "NOT SEND", neg("send"), "didn't send"),
      gap("8b", "", " letters.", "WRITE", ["wrote"], "wrote")
    ]
  });

  pack.units.push({
    id: "u34-past-simple-wallet",
    unitOrder: 34,
    title: "Past simple · Tom's ticket",
    examSection: "Practice · word box",
    headerTitle: "Past simple",
    instructionHtml:
      "Заполните пропуски, поставив глаголы в <strong>past simple</strong>. <strong>become · buy · come · draw · not leave · pay · see · spend</strong>",
    items: [
      gap(1, "I forgot my wallet, so Tom ", " for my ticket.", "PAST SIMPLE", ["paid"], "paid"),
      gap(2, "We didn't invite Harry to the party, but he ", " anyway.", "PAST SIMPLE", ["came"], "came"),
      gap(3, "She started her career as an engineer, but then ", " a writer.", "PAST SIMPLE", ["became"], "became"),
      gap(4, "I ", " this dress in the sales for only 20 pounds!", "PAST SIMPLE", ["bought"], "bought"),
      gap(5, "", " you", "SEE", ["did"], "Did"),
      gap("5b", "", " Peter and Sally at the meeting yesterday?", "SEE", ["see"], "see"),
      gap(6, "Eugene ", " the party until after eleven o'clock.", "NOT LEAVE", neg("leave"), "didn't leave"),
      gap(7, "I asked Tess about her house and she ", " a picture of it for me.", "PAST SIMPLE", ["drew"], "drew"),
      gap(8, "Last week I ", " about 60 pounds on new school books.", "PAST SIMPLE", ["spent"], "spent")
    ]
  });

  pack.units.push({
    id: "u35-past-simple-rewrite",
    unitOrder: 35,
    title: "Past simple · rewrite",
    examSection: "Practice · rewrite",
    headerTitle: "Rewrite in past simple",
    wideGaps: true,
    instructionHtml:
      "Перепишите предложения, поставив глаголы в <strong>past simple</strong>.",
    items: [
      gap(1, "The trees in her garden grow really tall. ", "", "WRITE", both(["The trees in her garden grew really tall."]), "The trees in her garden grew really tall."),
      gap(2, "He says his father builds their house. ", "", "WRITE", both(["He said his father built their house."]), "He said his father built their house."),
      gap(3, "Do you do anything interesting at the weekend? ", "", "WRITE", both(["Did you do anything interesting at the weekend?"]), "Did you do anything interesting at the weekend?"),
      gap(4, "I tell him I don't have a sister. ", "", "WRITE", both([
        "I told him I didn't have a sister.",
        "I told him I did not have a sister."
      ]), "I told him I didn't have a sister."),
      gap(5, "I wake up early and make breakfast for everyone. ", "", "WRITE", both(["I woke up early and made breakfast for everyone."]), "I woke up early and made breakfast for everyone."),
      gap(6, "Does the film begin at seven? ", "", "WRITE", both(["Did the film begin at seven?"]), "Did the film begin at seven?"),
      gap(7, "What subject does she teach? ", "", "WRITE", both(["What subject did she teach?"]), "What subject did she teach?"),
      gap(8, "Dave eats a lot but he doesn't have anything to drink. ", "", "WRITE", both([
        "Dave ate a lot but he didn't have anything to drink.",
        "Dave ate a lot but he did not have anything to drink."
      ]), "Dave ate a lot but he didn't have anything to drink.")
    ]
  });

  pack.units.push({
    id: "u36-past-simple-jeff",
    unitOrder: 36,
    title: "Past simple · Jeff's phone",
    examSection: "Practice · sentences",
    headerTitle: "Make sentences",
    wideGaps: true,
    instructionHtml:
      "Составьте предложения, употребив глагол в <strong>past simple</strong>.",
    items: [
      gap(1, "Jeff / lose / his mobile phone / but we / find / it / this morning ", "", "WRITE", both([
        "Jeff lost his mobile phone but we found it this morning.",
        "Jeff lost his mobile phone, but we found it this morning."
      ]), "Jeff lost his mobile phone but we found it this morning."),
      gap(2, "he / run fast / and / catch / the bus / in time ", "", "WRITE", both([
        "He ran fast and caught the bus in time."
      ]), "He ran fast and caught the bus in time."),
      gap(3, "your parents / give / you / a new tablet / for your birthday? ", "", "WRITE", both([
        "Did your parents give you a new tablet for your birthday?"
      ]), "Did your parents give you a new tablet for your birthday?"),
      gap(4, "I / not know / that / Mr Smith / teach / at your school ", "", "WRITE", both([
        "I didn't know that Mr Smith taught at your school.",
        "I did not know that Mr Smith taught at your school."
      ]), "I didn't know that Mr Smith taught at your school."),
      gap(5, "Grace / blow out / the candles / and / the guests / sing / 'Happy Birthday' ", "", "WRITE", both([
        "Grace blew out the candles and the guests sang 'Happy Birthday'.",
        "Grace blew out the candles and the guests sang Happy Birthday."
      ]), "Grace blew out the candles and the guests sang 'Happy Birthday'."),
      gap(6, "I / leave / my school bag / at your house / yesterday/? ", "", "WRITE", both([
        "Did I leave my school bag at your house yesterday?"
      ]), "Did I leave my school bag at your house yesterday?")
    ]
  });

  pack.units.push({
    id: "u37-past-simple-sam",
    unitOrder: 37,
    title: "Past simple · Hi Sam",
    examSection: "Practice · letter",
    headerTitle: "Hi Sam",
    instructionHtml:
      "Заполните пропуски, используя данные глаголы в <strong>past simple</strong>. <strong>be (x2) · make · meet · not go · not see · say · sit · take · tell</strong>",
    items: [
      gap(1, "Hi Sam, It ", " good to hear your news. Lenny", "BE", ["was"], "was"),
      gap(2, "", " you were ill, so I'm glad you are better. Did you watch the big match on TV last night? I", "SAY", ["said"], "said"),
      gap(3, "", " it because my parents", "NOT SEE", neg("see"), "didn't see"),
      gap(4, "", " me to see a play. The actors", "TAKE", ["took"], "took"),
      gap(5, "", " very good but the play was quite boring and I didn't enjoy it very much. I", "BE", ["were"], "were"),
      gap(6, "", " in my seat, wishing I was at home watching the football!! Any more news? Oh, yes! I", "SIT", ["sat"], "sat"),
      gap(7, "", " Katie the other day and she", "MEET", ["met"], "met"),
      gap(8, "", " me about this new club for teenagers. She asked me to go with her right then, but I had homework to do, so I", "TELL", ["told"], "told"),
      gap(9, "", ". But we", "NOT GO", neg("go"), "didn't go"),
      gap(10, "", " a date for another day. Well, that's all my news. Joe", "MAKE", ["made"], "made")
    ]
  });

  pack.units.push({
    id: "u38-past-simple-hockey",
    unitOrder: 38,
    title: "Past simple · hockey",
    examSection: "Practice · open gaps",
    headerTitle: "Past simple",
    instructionHtml:
      "Заполните пропуски, используя глаголы в <strong>past simple</strong>. Некоторые предложения могут быть отрицательными.",
    items: [
      gap(1, "We ", " the other team at hockey and", "PAST SIMPLE", ["beat"], "beat"),
      gap("1b", "", " the cup.", "PAST SIMPLE", ["won"], "won"),
      gap(2, "Tom wasn't hungry so he ", " anything for lunch.", "PAST SIMPLE", neg("eat"), "didn't eat"),
      gap(3, "Last night she ", " a letter to her aunt.", "PAST SIMPLE", ["wrote"], "wrote"),
      gap(4, "Peter ", " the answer to the question, but the teacher didn't ask him.", "PAST SIMPLE", ["knew"], "knew"),
      gap(5, "He was so thirsty, he ", " three glasses of water.", "PAST SIMPLE", ["drank"], "drank"),
      gap(6, "I'm sure I ", " it back in the box last night.", "PAST SIMPLE", ["put"], "put")
    ]
  });
})(typeof window !== "undefined" ? window : this);
