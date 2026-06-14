/**
 * ЕГЭ Reading — Matching Headlines, юнит 12 (гардероб, осознанное потребление, slow fashion).
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u12-slow-fashion",
    unitOrder: 12,
    title: "Unit 12 · Slow fashion",
    instructionHtml:
      "<strong>Раздел 2. Чтение §10.</strong> Установите соответствие между текстами A–G и заголовками 1–8. Занесите свои ответы в таблицу. Используйте каждую цифру только один раз. В задании один заголовок <strong>лишний</strong>.",

    paragraphs: [
      {
        letter: "A",
        text:
          "As Joan Crawford once advised: \"Care for your clothes like the good friends they are.\" Something has definitely gone wrong if you find it easier to buy a new outfit in your lunch hour instead of going through a pile of clothes on your floor for something that isn't creased or dirty, or both. So take more time to organise your clothes and try storing winter and summer clothes separately. It helps calm the shopping panic and feel excited every time those old friends reappear again and again.",
        evidence: {
          support: [
            "take more time to organise your clothes",
            "storing winter and summer clothes separately.",
            "It helps calm the shopping panic"
          ],
          distract: [
            "Something has definitely gone wrong if you find it easier to buy a new outfit in your lunch hour"
          ]
        }
      },
      {
        letter: "B",
        text:
          "Even if you're never going to start making dresses from scratch, you can make your wardrobe better with little more than a YouTube tutorial and a hotel sewing kit. Clothes are sometimes abandoned for the smallest of reasons, such as an uncomfortable neckline or a scratchy label. You shouldn't be afraid of using the scissors. Learn a few basic skills and you can replace buttons and zips, patch up the worn-out leg of your best-loved jeans and restyle secondhand finds to fit you perfectly.",
        evidence: {
          support: [
            "Clothes are sometimes abandoned for the smallest of reasons,",
            "patch up the worn-out leg of your best-loved jeans",
            "restyle secondhand finds to fit you perfectly."
          ],
          distract: [
            "Even if you're never going to start making dresses from scratch,"
          ]
        }
      },
      {
        letter: "C",
        text:
          "If you are fussy about wearing a stranger's hand-me-downs, deadstock is a sustainable compromise. Usually, these are clothes that were never sold because of small defects or oversupply. Searching \"deadstock\" on sites such as Etsy and eBay will return great items from across the decades that might have been destined for the bin or burning. Likewise, clothes which are available for sale at a reduced price is a common sight in charity shops. If you care about our planet, give those extra items a loving home.",
        evidence: {
          support: [
            "deadstock is a sustainable compromise.",
            "clothes that were never sold because of small defects or oversupply.",
            "might have been destined for the bin or burning."
          ],
          distract: [
            "If you are fussy about wearing a stranger's hand-me-downs,"
          ]
        }
      },
      {
        letter: "D",
        text:
          "Fashion has its negative effects both on our planet and on people. Who made our clothes? Which materials were used? Fashion brands begin to understand that people care about those things and sometimes share false information to present an environmentally responsible public image. Luckily, there are apps which help us to shop consciously. They have rated more than 2,000 brands on their treatment of people, the planet and animals, providing an at-a-glance verdict from \"great\" to \"avoid\".",
        evidence: {
          support: [
            "there are apps which help us to shop consciously.",
            "They have rated more than 2,000 brands",
            "providing an at-a-glance verdict from \"great\" to \"avoid\"."
          ],
          distract: [
            "Fashion brands begin to understand that people care about those things"
          ]
        }
      },
      {
        letter: "E",
        text:
          "The cheapest way to reduce one's role in fashion negative effect on the environment is to stop buying. And yet for many of us, the simple idea of doing so is enough to give us the shakes. I promised to buy nothing brand-new for a year, and documented the results in my book — but if a whole year is too difficult, start smaller. Challenge yourself to three months, or even just one. It takes time for your brain to break the cycle of positive emotions and feelings usually associated with buying a new fashionable outfit.",
        evidence: {
          support: [
            "The cheapest way to reduce one's role in fashion negative effect on the environment is to stop buying.",
            "I promised to buy nothing brand-new for a year,",
            "break the cycle of positive emotions and feelings usually associated with buying a new fashionable outfit."
          ],
          distract: [
            "if a whole year is too difficult, start smaller."
          ]
        }
      },
      {
        letter: "F",
        text:
          "Just like deleting your ex's number and blocking their social networks profile, a fast-fashion breakup involves admin. So go through your inbox and unsubscribe from all shopping emails — even those from the golfing supplies outlet you bought your uncle's Christmas present from in 2012. Then filter your social media feeds. Unfollow all the influencers whose pastel-hued grids exist to persuade you to buy things, and replace them with slow fashion supporters, who are fighting to reduce piles of commercial waste.",
        evidence: {
          support: [
            "unsubscribe from all shopping emails",
            "Then filter your social media feeds.",
            "Unfollow all the influencers whose pastel-hued grids exist to persuade you to buy things,"
          ],
          distract: [
            "Just like deleting your ex's number and blocking their social networks profile,"
          ]
        }
      },
      {
        letter: "G",
        text:
          "Patience is a virtue and timing is everything, especially when it comes to an impulse purchase — usually clothes that people buy suddenly and without planning beforehand. There are brands that only make what customers want. By doing so, they minimise waste and manage their labour more effectively. Made-to-order fashion is the cure to fast fashion's need for speed. Plus, it's a good way to test your own loyalty to a trend. If you can't wait a few weeks for that new outfit, maybe it wasn't such a must-have after all.",
        evidence: {
          support: [
            "There are brands that only make what customers want.",
            "Made-to-order fashion is the cure to fast fashion's need for speed.",
            "If you can't wait a few weeks for that new outfit, maybe it wasn't such a must-have after all."
          ],
          distract: [
            "Patience is a virtue and timing is everything, especially when it comes to an impulse purchase"
          ]
        }
      }
    ],

    headlines: [
      { num: 1, text: "Arrange and order" },
      { num: 2, text: "Do your homework" },
      { num: 3, text: "Give it a second chance" },
      { num: 4, text: "Recognise the real need" },
      { num: 5, text: "Just stop shopping" },
      { num: 6, text: "No longer in a mailing list" },
      { num: 7, text: "Rescue the rejects" },
      { num: 8, text: "Switch to pre-order" }
    ],

    key: { A: 1, B: 3, C: 7, D: 2, E: 5, F: 6, G: 8 },
    extraHeadlineNum: 4,

    explanationsRu: {
      A:
        "Организация гардероба, отдельно зимнее/летнее, меньше паники — <strong>наведи порядок</strong> (<strong>1</strong>).",
      B:
        "Мелкий ремонт, заплатка, новая пуговица, переделка секонда — <strong>второй шанс</strong> вещи (<strong>3</strong>).",
      C:
        "<strong>Дедсток</strong>, брак/залежалый товар, «спасение» от утилизации и благотворительные цены — <strong>спасти отбракованное</strong> (<strong>7</strong>).",
      D:
        "Приложения и рейтинги брендов, осознанная покупка — сначала <strong>разузнать / подготовиться</strong> (<strong>2</strong>).",
      E:
        "<strong>Перестать покупать</strong> новое, эксперимент на месяцы — ядро абзаца (<strong>5</strong>).",
      F:
        "<strong>Отписаться</strong> от рассылок магазинов и почистить ленту — как выйти из «почты промо» (<strong>6</strong>).",
      G:
        "<strong>Сделано под заказ</strong>, ждать пару недель, проверка «надо ли оно тебе» — <strong>pre-order / made-to-order</strong> (<strong>8</strong>)."
    },

    extraExplainRu:
      "Лишним остаётся <strong>4 — Recognise the real need</strong>: мысль «отличить импульс от настоящей необходимости» мелькает в конце <strong>G</strong>, но заголовок абзаца <strong>G</strong> про <strong>заказное производство и ожидание</strong> (<strong>8</strong>). Если в сборнике иначе — сверьте с официальным ключом.",

    quickPhrases: [
      { en: "organise your clothes", ru: "привести одежду в порядок / организовать хранение" },
      { en: "shopping panic", ru: "паника «нечего надеть — бежать в магазин»" },
      { en: "from scratch", ru: "с нуля (шить с самого начала)" },
      { en: "scratchy label", ru: "царапающийся ярлык" },
      { en: "patch up", ru: "залатать, подштопать" },
      { en: "secondhand finds", ru: "находки с секонд-хенда" },
      { en: "hand-me-downs", ru: "переданная из рук в руки одежда" },
      { en: "deadstock", ru: "дедсток (непроданный товар на складе)" },
      { en: "oversupply", ru: "избыточный выпуск, перепроизводство" },
      { en: "charity shops", ru: "благотворительные магазины подержанных вещей" },
      { en: "shop consciously", ru: "покупать осознанно" },
      { en: "at-a-glance verdict", ru: "оценка «в одно касание», с первого взгляда" },
      { en: "brand-new", ru: "совсем новый (ни разу не ношенный)" },
      { en: "unsubscribe", ru: "отписаться (от рассылки)" },
      { en: "influencers", ru: "инфлюенсеры, лидеры мнений в соцсетях" },
      { en: "impulse purchase", ru: "импульсивная покупка" },
      { en: "made-to-order", ru: "пошив под заказ, по индивидуальному заказу" },
      { en: "minimise waste", ru: "сократить отходы" },
      { en: "must-have", ru: "«обязательная вещь», must-have (мода)" },
      { en: "fast fashion", ru: "быстрая мода (массово и дёшево)" },
      { en: "slow fashion", ru: "медленная мода (качество, этика, меньше покупок)" },
      {
        en: "something that isn't creased or dirty, or both",
        ru: "вещь без складок и без пятен"
      },
      {
        en: "deadstock is a sustainable compromise",
        ru: "дедсток — компромисс между экологией и «не чужие руки-передачи»"
      },
      {
        en: "documented the results in my book",
        ru: "описала результаты эксперимента в книге"
      },
      {
        en: "a fast-fashion breakup involves admin",
        ru: "«расставание» с быстрой модой требует рутины: почта, фильтры"
      },
      {
        en: "Patience is a virtue and timing is everything",
        ru: "терпение — добродетель, а выбор момента решает всё"
      },
      {
        en: "test your own loyalty to a trend",
        ru: "проверить, насколько вы правда верны модному тренду"
      },
      {
        en: "buy a new outfit in your lunch hour",
        ru: "купить новый наряд за обеденный перерыв"
      }
    ],

    tapPhrases: [
      {
        en: "take more time to organise your clothes and try storing winter and summer clothes separately.",
        ru: "больше времени на порядок в шкафу и раздельное хранение зимних и летних вещей"
      },
      {
        en: "patch up the worn-out leg of your best-loved jeans",
        ru: "залатать стёртую штанину любимых джинсов"
      },
      {
        en: "might have been destined for the bin or burning.",
        ru: "могли бы отправиться в мусор или на сжигание"
      },
      {
        en: "They have rated more than 2,000 brands on their treatment of people, the planet and animals,",
        ru: "приложения оценили тысячи брендов по отношению к людям, планете и животным"
      },
      {
        en: "I promised to buy nothing brand-new for a year,",
        ru: "обещание год не покупать ничего совсем нового"
      },
      {
        en: "unsubscribe from all shopping emails",
        ru: "отписаться от всех торговых рассылок"
      },
      {
        en: "Made-to-order fashion is the cure to fast fashion's need for speed.",
        ru: "мода под заказ — противоядие гонке быстрой моды"
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
