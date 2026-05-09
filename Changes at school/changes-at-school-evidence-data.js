/**
 * Track 3.2 — Evidence Hunt (GEP-style) per speaker.
 * correctLetter is used only inside this file for comments; not shown in UI.
 */
(function () {
  var G = window;

  G.U3_CHANGES_OPTION_TEXT = {
    A: "The change has resulted in a number of new problems.",
    B: "Too many changes have been introduced.",
    C: "The change is insufficient to solve a problem.",
    D: "We should have been consulted about the change.",
    E: "The change is being made for selfish reasons.",
    F: "Most parents support the change.",
    G: "The change has brought unexpected benefits.",
    H: "Most of the teachers feel the change is unnecessary."
  };

  /** @type {Array<object>} */
  G.U3_CHANGES_EVIDENCE_LABS = [
    {
      speaker: 1,
      correctLetter: "E",
      evidenceIds: ["sch", "heart", "mot"],
      distractorKeys: ["D", "G"],
      evidenceLine:
        "Шаг 1. Найди три фразы, где говорящий обвиняет руководство в личных мотивах / пиаре, а не в интересах детей.",
      distractorLine:
        "Шаг 2. Две фразы толкают к ошибочным строкам A–H: кликни их (станут красными с меткой [! буква]).",
      wrongEvidenceToast:
        "Это не про «эгоистичные причины». Ищи схемы директора, её интересы и мотивы.",
      segments: [
        { kind: "plain", text: "Next year we're starting lessons at 10, rather than 9 every day. The head says teenagers need more sleep than adults, and " },
        { kind: "distractor", key: "G", text: "they'll be more receptive during class if they come in an hour later" },
        { kind: "plain", text: ". It's a fairly radical idea and it's attracting a lot of attention from the press. I just think it's " },
        { kind: "evidence", id: "sch", text: "another one of the head's schemes to get publicity for herself" },
        { kind: "plain", text: ". " },
        { kind: "evidence", id: "heart", text: "She clearly has her own interests at heart rather than those of the kids" },
        { kind: "plain", text: ". " },
        { kind: "distractor", key: "D", text: "Perhaps I should have spoken out at the consultation meeting" },
        { kind: "plain", text: ", but she's got the support of the whole teaching staff, and " },
        { kind: "evidence", id: "mot", text: "they don't seem to care that her motives are all wrong" },
        { kind: "plain", text: "." }
      ]
    },
    {
      speaker: 2,
      correctLetter: "D",
      evidenceIds: ["habit", "say", "dept"],
      distractorKeys: ["H", "E"],
      evidenceLine:
        "Шаг 1. Три фразы про то, что решения приняли без участия коллег / без консультации.",
      distractorLine:
        "Шаг 2. Два «крючка» к неверным вариантам из списка A–H.",
      wrongEvidenceToast:
        "Нужны фразы именно про отсутствие консультации, а не про усталость от книги или про заказ комплектов.",
      segments: [
        { kind: "plain", text: "I'm really fed up with our head of department. We all are. As well as having absolutely no interpersonal skills, he has a habit of " },
        { kind: "evidence", id: "habit", text: "making changes without bothering to find out what anyone else thinks first" },
        { kind: "plain", text: ". He told us in a meeting last week that we're going to be using a different coursebook for Year 8 next term, and " },
        { kind: "distractor", key: "E", text: "he's ordered three class sets already" },
        { kind: "plain", text: ". I'm not saying that a change wasn't necessary — " },
        { kind: "distractor", key: "H", text: "I think we're all a bit tired of the book we're using at the moment" },
        { kind: "plain", text: " — but I do think " },
        { kind: "evidence", id: "say", text: "he could have let us have some say in the matter before going ahead" },
        { kind: "plain", text: ". " },
        { kind: "evidence", id: "dept", text: "It's no way to run a department" },
        { kind: "plain", text: "." }
      ]
    },
    {
      speaker: 3,
      correctLetter: "H",
      evidenceIds: ["ages", "waste", "coll"],
      distractorKeys: ["F", "D"],
      evidenceLine:
        "Шаг 1. Три фразы, где говорящий и коллеги считают нововведение лишним пустяком / тратой времени.",
      distractorLine:
        "Шаг 2. Два отрезка, которые могут увести к неверной букве из списка.",
      wrongEvidenceToast:
        "Ищи формулировки про трату времени, возраст коллег и объём работы — не про аргументы директора.",
      segments: [
        { kind: "plain", text: "Until now, a student's end-of-term report consisted of a mark for each subject, followed by a summarising comment from the tutor. " },
        { kind: "distractor", key: "D", text: "With the new system, each subject teacher has to write a comment as well" },
        { kind: "plain", text: " – and since I teach maths to as many as two hundred students every year, " },
        { kind: "evidence", id: "ages", text: "it'll take me absolutely ages" },
        { kind: "plain", text: ". " },
        { kind: "distractor", key: "F", text: "The head says the tutor's comment isn't enough to give parents a full picture of how their child's getting on" },
        { kind: "plain", text: ", but I think it's fine as long as it's carefully written. Most parents won't read the comments anyway – they're just interested in the marks. " },
        { kind: "evidence", id: "waste", text: "It's a waste of time as far as I'm concerned" },
        { kind: "plain", text: ", and I know " },
        { kind: "evidence", id: "coll", text: "the majority of my colleagues feel the same" },
        { kind: "plain", text: "." }
      ]
    },
    {
      speaker: 4,
      correctLetter: "C",
      evidenceIds: ["step", "still", "tough"],
      distractorKeys: ["A", "E"],
      evidenceLine:
        "Шаг 1. Три фразы: мера полезна, но недостаточна; проблема остаётся; руководство слишком мягкое.",
      distractorLine:
        "Шаг 2. Кликни два дистрактора (красные метки с неверной буквой A–H).",
      wrongEvidenceToast:
        "Нужно про «мало / недостаточно», а не только про то, что стало «не лучше» или про аргумент директора про другие школы.",
      segments: [
        { kind: "distractor", key: "A", text: "The situation in Year 10 is not much better than it was before" },
        { kind: "plain", text: ". " },
        { kind: "evidence", id: "step", text: "Mixing up the classes like that – splitting up the troublemakers – is a step in the right direction, but it doesn't go far enough" },
        { kind: "plain", text: ". " },
        { kind: "evidence", id: "still", text: "They're still there, and they're still causing disruption to lessons" },
        { kind: "plain", text: ". The head should have asked the parents to come in and got the kids to make certain guarantees in front of them, made them promise to improve their behaviour and so on. Then if the promises aren't kept, expel them from the school. We told her that, but she said " },
        { kind: "distractor", key: "E", text: "expelling them would just create problems for other schools" },
        { kind: "plain", text: ". " },
        { kind: "evidence", id: "tough", text: "She needs to be much tougher" },
        { kind: "plain", text: "." }
      ]
    },
    {
      speaker: 5,
      correctLetter: "A",
      evidenceIds: ["bad", "acous", "throat"],
      distractorKeys: ["G", "C"],
      evidenceLine:
        "Шаг 1. Три фразы о новых трудностях после перевода в другой кабинет (шум, акустика, здоровье/сон).",
      distractorLine:
        "Шаг 2. Два фрагмента, которые могли бы сбить на неверный вариант A–H.",
      wrongEvidenceToast:
        "Ищи явные проблемы: «хуже чем раньше», акустика, горло, солнце. Не кликай просто про «стеклопакет» или один только факт переселения.",
      segments: [
        { kind: "plain", text: "There's some building work going on outside the music room. " },
        { kind: "distractor", key: "G", text: "The windows are double glazed" },
        { kind: "plain", text: ", but they're not thick enough to keep out the noise, so " },
        { kind: "distractor", key: "C", text: "I've been moved to a room on the other side of the school" },
        { kind: "plain", text: ". I've changed rooms many times before, but " },
        { kind: "evidence", id: "bad", text: "never to one as bad as this" },
        { kind: "plain", text: ". " },
        { kind: "evidence", id: "acous", text: "The ceiling's high and the acoustics are terrible for the piano" },
        { kind: "plain", text: ". Plus " },
        { kind: "evidence", id: "throat", text: "I have to shout to make myself heard, so my throat is suffering" },
        { kind: "plain", text: ". And then the sun streams in during the afternoon and sends the kids to sleep. I'm telling you, as soon as the work's finished, I'm moving straight back to my old room." }
      ]
    }
  ];
})();
