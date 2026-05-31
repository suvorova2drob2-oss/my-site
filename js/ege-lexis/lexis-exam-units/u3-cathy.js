/**
 * ЕГЭ Lexis Exam · Unit 3 · Cathy (задания 30–36).
 */
(function (w) {
  var pack = w.__EGE_LEXIS_EXAM__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u3-cathy",
    unitOrder: 3,
    title: "Unit 3 · Cathy",
    examSection: "§30–36",
    headerTitle: "Cathy",
    subtitle:
      "Read the text and choose one answer (A–D) for each gap. Tasks 30–36.",
    instructionHtml:
      "Прочитайте текст и выберите <strong>один</strong> вариант ответа (A–D) для каждого пропуска. Номера в тексте совпадают с номерами в колонке справа.",
    passage:
      "Cathy left work and got in her car. It was already dark, bitter cold, and the roads were icy. But it was only two miles to her elder sister's house, and Cathy [[30]] it safely. She let herself in the back door when she got there, and her nephews were [[31]] TV in the basement playroom. You could hear it all the way up to the front door. And as usual, the house was a mess. No one ever cared. Keeping house was not Sue's strong suit, and she made no apology for it. John, her husband, was used to it and didn't seem to see it. [[32]] the mess annoyed him, he cleaned it up himself.\n\nCathy found Sue in the kitchen, getting dinner ready. It was pot roast, which seemed like a hearty meal for a cold night. \"How was work?\" Sue asked, as she checked on the pot roast and smiled at Cathy. They were very different, but there was a sisterly bond between them. Sue blamed their mother for [[33]] Cathy to be a dreamer. Sue [[34]] fun of her when Cathy had written a paper once in high school about her favourite hero of all time, and she wanted to marry a man like him. Cathy loved stories from another century, preferably set in France, which her sister thought would never [[35]] to a real man. Cathy still [[36]] to marry someone like her hero anyway.",
    items: [
      {
        options: ["arrived", "reached", "entered", "achieved"],
        correctIndex: 1,
        skillRu: "Глагол + место / цель поездки: <em>reach</em> + объект («добраться до …»).",
        explainCorrect:
          "Два мили до дома сестры — Cathy <strong>reached it safely</strong>: «благополучно добралась (до дома)».",
        trapRu:
          "<em>Arrive</em> не ставят с прямым объектом (*arrived it); <em>enter</em> — «войти внутрь», а не «доехать».",
        explainIfChosen: {
          "0": "<em>Arrive</em> нуждается в предлоге: <em>arrive at/in the house</em>, не <em>arrived it</em>.",
          "2": "<em>Entered it</em> = «вошла в него» — она уже заходит через back door дальше; здесь про дорогу.",
          "3": "<em>Achieved it</em> = «достигла цели» — не про поездку по льду к дому."
        }
      },
      {
        options: ["watching", "looking", "viewing", "seeing"],
        correctIndex: 0,
        skillRu: "Коллокация: <em>watch TV</em> — «смотреть телевизор».",
        explainCorrect:
          "Племянники в playroom <strong>were watching TV</strong> — устойчивое «смотрели телевизор».",
        trapRu:
          "Все глаголы «видеть / смотреть», но с <em>TV</em> в бытовом английском почти всегда <em>watch</em>.",
        explainIfChosen: {
          "1": "<em>Looking TV</em> — неверно; <em>look at</em> телевизор не говорят так же естественно, как <em>watch</em>.",
          "2": "<em>Viewing</em> — более официально («просмотр контента»), не про детей в подвале.",
          "3": "<em>Seeing TV</em> = «видеть телевизор (глазами)», не «смотреть передачу»."
        }
      },
      {
        options: ["Whenever", "Wherever", "Whoever", "Whatever"],
        correctIndex: 0,
        skillRu: "Союз времени: <em>Whenever …</em> — «когда / всякий раз, когда …».",
        explainCorrect:
          "<strong>Whenever the mess annoyed him</strong>, he cleaned it up — «когда беспорядок его раздражал, убирал сам».",
        trapRu:
          "Похожие <em>‑ever</em>-слова: нужен именно «когда», а не «где / кто / что».",
        explainIfChosen: {
          "1": "<em>Wherever</em> = «где бы ни» — беспорядок не про место.",
          "2": "<em>Whoever</em> = «кто бы ни» — нужен не человек.",
          "3": "<em>Whatever</em> = «что бы ни» — после идёт «the mess», не «whatever mess»."
        }
      },
      {
        options: ["promoting", "impressing", "encouraging", "insisting"],
        correctIndex: 2,
        skillRu: "Глагол + <em>someone to be</em>: <em>encourage someone to be …</em>.",
        explainCorrect:
          "Sue винила мать за то, что та <strong>encouraging Cathy to be a dreamer</strong> — «поощряла Cathy быть мечтательницей».",
        trapRu:
          "После <em>for</em> нужен gerund; с <em>to be</em> подходит <em>encouraging</em>, не <em>insisting</em> без <em>on</em>.",
        explainIfChosen: {
          "0": "<em>Promoting</em> + <em>to be a dreamer</em> — неестественно («продвигала быть мечтательницей»).",
          "1": "<em>Impressing Cathy to be</em> — неверная конструкция.",
          "3": "<em>Insisting</em> обычно <em>insist on</em> или <em>insist that</em>, не <em>insisting someone to be</em>."
        }
      },
      {
        options: ["kept", "held", "made", "took"],
        correctIndex: 2,
        skillRu: "Устойчивое выражение: <em>make fun of someone</em> — «подшучивать, высмеивать».",
        explainCorrect:
          "Sue <strong>made fun of her</strong> за сочинение о герое — классическая фраза «подшутила / посмеялась».",
        trapRu:
          "Только <em>make</em> образует <em>make fun of</em>; <em>take fun</em>, <em>keep fun</em> — не существуют.",
        explainIfChosen: {
          "0": "<em>Kept fun of</em> — не говорят; нужен <em>make fun of</em>.",
          "1": "<em>Held fun of</em> — то же, неустойчиво.",
          "3": "<em>Took fun of</em> — неверно; правильно <em>make fun of</em> или <em>poke fun at</em>."
        }
      },
      {
        options: ["amuse", "amaze", "attract", "appeal"],
        correctIndex: 3,
        skillRu: "Глагол + <em>to</em>: <em>appeal to someone</em> — «быть привлекательным / нравиться».",
        explainCorrect:
          "Sue думала, что романтические истории <strong>would never appeal to a real man</strong> — «никогда не понравятся / не заинтересуют настоящего мужчину».",
        trapRu:
          "После пропуска идёт <em>to a real man</em> — нужен глагол с <em>appeal to</em>, не <em>amuse to</em>.",
        explainIfChosen: {
          "0": "<em>Amuse to a man</em> — неверная конструкция; <em>amuse</em> не берёт <em>to</em> так.",
          "1": "<em>Amaze to</em> — то же; «удивлять» не про «нравиться мужчине».",
          "2": "<em>Attract to</em> возможно, но здесь типичнее <em>appeal to</em> (= «быть привлекательным для»)."
        }
      },
      {
        options: ["inquire", "insist", "intend", "inspire"],
        correctIndex: 2,
        skillRu: "Глагол + <em>to‑infinitive</em>: <em>intend to marry</em> — «намереваться выйти замуж».",
        explainCorrect:
          "Несмотря на насмешки, Cathy <strong>still intended to marry</strong> someone like her hero — «всё равно намеревалась выйти замуж за такого мужчину».",
        trapRu:
          "После «still» и перед «to marry» нужен глагол намерения — <em>intend to</em>, не <em>inspire to</em>.",
        explainIfChosen: {
          "0": "<em>Inquire to marry</em> — «спрашивать о замужестве» — бессмысленно.",
          "1": "<em>Insist to marry</em> — говорят <em>insist on marrying</em> или <em>insist that</em>.",
          "3": "<em>Inspire to marry</em> — «вдохновлять выйти замуж»; субъект Cathy сама намерена, не «вдохновляется»."
        }
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
