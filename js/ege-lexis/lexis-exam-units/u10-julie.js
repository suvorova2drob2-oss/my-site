/**
 * ЕГЭ Lexis Exam · Unit 10 · Julie (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u10-julie",
    unitOrder: 10,
    title: "Unit 10 · Julie",
    examSection: "§30–36",
    headerTitle: "Julie",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "Julie always thumbed a ride back to college, but never told her parents. She knew they wouldn't [[30]]. Her father would drive her to the station on the first day of term, when she would hang [[31]] on the platform until she was certain he was on his way back home. She would then walk the couple of miles to the freeway, stand near the edge of a road and hold out her hand with the thumb raised as a signal for a vehicle to stop and take her to the city. There were two good reasons why Julie [[32]] to thumb a ride back to Hartford rather than take a bus or train. Twelve round trips a year meant she could save over a hundred dollars, which was important. Her parents could [[33]] afford any extra expenses. In any case Dad and Ma had already made quite enough sacrifices to ensure she could [[34]] college, without causing them any further expense.\n\n[[35]], Julie's second reason for preferring to thumb rides was that when she graduated she wanted to be a writer, and during the past three years she'd met some fascinating people on the short journey from home to college, who were often willing to share their experiences with a stranger they were unlikely to meet again. Julie had golden rules about who she wouldn't [[36]] a ride from. Truck drivers were top of the list. In fact, she avoided most drivers under the age of sixty, especially those behind the wheel of a sports car.",
    items: [
      {
        options: ["assume", "approve", "achieve", "adopt"],
        correctIndex: 1,
        skillRu: "Глагол одобрения: <em>wouldn't approve (of it)</em> — «не одобрили бы».",
        explainCorrect:
          "Она не говорила родителям о автостопе — знала, что они <strong>wouldn't approve</strong> — «не одобрили бы».",
        trapRu:
          "<em>Assume / achieve / adopt</em> не подходят к «родители не ___ hitchhiking».",
        explainIfChosen: {
          "0": "<em>Wouldn't assume</em> — «не предположили бы» — не про моральное одобрение.",
          "2": "<em>Wouldn't achieve</em> — «не достигли бы» — бессмысленно.",
          "3": "<em>Wouldn't adopt</em> — «не приняли бы (правило)» — не то."
        }
      },
      {
        options: ["across", "aside", "apart", "around"],
        correctIndex: 3,
        skillRu: "Фразовый глагол: <em>hang around</em> — «бездельничать / ждать, слоняясь».",
        explainCorrect:
          "She would <strong>hang around on the platform</strong> — «висела на платформе / ждала», пока отец уедет.",
        trapRu:
          "<em>Hang across / hang apart</em> — не говорят; нужен <em>hang around</em>.",
        explainIfChosen: {
          "0": "<em>Hang across the platform</em> — «висеть через платформу» — нет.",
          "1": "<em>Hang aside</em> — не идиома.",
          "2": "<em>Hang apart</em> — не говорят."
        }
      },
      {
        options: ["preferred", "enjoyed", "pleased", "admired"],
        correctIndex: 0,
        skillRu: "Глагол + to‑infinitive: <em>prefer to thumb a ride</em>.",
        explainCorrect:
          "Two reasons why Julie <strong>preferred to thumb a ride</strong> — «предпочитала ловить попутку».",
        trapRu:
          "<em>Pleased / admired to thumb</em> — грамматика не сходится; нужен <em>preferred to</em>.",
        explainIfChosen: {
          "1": "<em>Enjoyed to thumb</em> — обычно <em>enjoy thumbing</em> или <em>enjoyed thumbing</em>.",
          "2": "<em>Pleased to thumb</em> — «была рада» — не «предпочитала».",
          "3": "<em>Admired to thumb</em> — «восхищалась автостопом» — не то."
        }
      },
      {
        options: ["rarely", "hardly", "really", "nearly"],
        correctIndex: 1,
        skillRu: "Наречие: <em>can hardly afford</em> — «едва могут позволить».",
        explainCorrect:
          "Her parents could <strong>hardly afford any extra expenses</strong> — «едва могли позволить лишние траты».",
        trapRu:
          "<em>Rarely afford</em> — редко; <em>hardly afford</em> — «почти не могут» — сильнее и точнее.",
        explainIfChosen: {
          "0": "<em>Rarely afford</em> — «редко могли позволить» — возможно, но <em>hardly afford</em> устойчивее.",
          "2": "<em>Really afford</em> — «действительно могли» — против «экономить 100 dollars».",
          "3": "<em>Nearly afford</em> — «почти могли» — слабее нужного смысла."
        }
      },
      {
        options: ["enrol", "enlist", "attend", "register"],
        correctIndex: 2,
        skillRu: "Глагол + college: <em>attend college</em> — «учиться в колледже».",
        explainCorrect:
          "Sacrifices to ensure she could <strong>attend college</strong> — «ходить / учиться в колледже».",
        trapRu:
          "<em>Enrol college</em> — нужно <em>enrol in</em>; <em>attend college</em> — прямо и естественно.",
        explainIfChosen: {
          "0": "<em>Enrol college</em> — нужно <em>enrol in college</em> или <em>enrol at</em>.",
          "1": "<em>Enlist college</em> — «записаться в армию» — не то.",
          "3": "<em>Register college</em> — <em>register for courses</em>, не <em>register college</em>."
        }
      },
      {
        options: ["Although", "Conversely", "Therefore", "However"],
        correctIndex: 3,
        skillRu: "Союз: <em>However</em> — «однако / вторая причина» (переход ко 2‑й).",
        explainCorrect:
          "<strong>However</strong>, Julie's second reason… — «однако / при этом вторая причина» после блока про деньги.",
        trapRu:
          "<em>Therefore</em> = следствие; вторая причина — дополнение, не результат первой → <em>However</em>.",
        explainIfChosen: {
          "0": "<em>Although</em> + clause; здесь сразу <em>Julie's second reason</em> — нужен <em>However</em>.",
          "1": "<em>Conversely</em> — «наоборот» — слишком резко для второй причины.",
          "2": "<em>Therefore</em> — «поэтому» — вторая причина не вывод из первой."
        }
      },
      {
        options: ["agree", "allow", "accept", "admit"],
        correctIndex: 2,
        skillRu: "Коллокация: <em>accept a ride from someone</em> — «принять подвезти».",
        explainCorrect:
          "Who she wouldn't <strong>accept a ride from</strong> — «от кого не согласилась бы принять подвозку».",
        trapRu:
          "<em>Agree a ride from</em> — не говорят; стандартно <em>accept a ride from</em>.",
        explainIfChosen: {
          "0": "<em>Agree a ride from</em> — нужно <em>agree to accept a ride</em>.",
          "1": "<em>Allow a ride from</em> — «разрешить поездку от» — Julie сама решает, не «allow».",
          "3": "<em>Admit a ride from</em> — «признать / допустить» — не та коллокация."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
