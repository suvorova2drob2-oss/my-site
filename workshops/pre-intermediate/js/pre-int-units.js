/**
 * Pre-intermediate workshop — unit map + speaking goals (Lifestyle Pre-int TOC).
 */
(function (global) {
  var UNITS = [
    {
      id: "jobs",
      num: 1,
      title: "Jobs",
      icon: "💼",
      accent: "#fb923c",
      tint: "rgba(251, 146, 60, 0.16)",
      avatar: "img/avatars/jobs.svg",
      blurb: "Work life · routines · arrangements · what a job involves",
      goals: [
        "ask and answer common questions about jobs",
        "talk about what you're doing at work at the moment",
        "talk about arrangements and appointments",
        "recognise and use collocations",
        "describe what different jobs involve",
      ],
    },
    {
      id: "shops",
      num: 2,
      title: "Shops",
      icon: "🛍️",
      accent: "#38bdf8",
      tint: "rgba(56, 189, 248, 0.16)",
      avatar: "img/avatars/shops.svg",
      blurb: "Shopping · compliments · problems · shop talk",
      goals: [
        "talk about shopping and things you buy",
        "make and respond to compliments",
        "talk about problems you can have with shopping",
        "offer help",
        "compare places and products",
        "have conversations with shop assistants",
      ],
    },
    {
      id: "getting-there",
      num: 3,
      title: "Getting there",
      icon: "🗺️",
      accent: "#f472b6",
      tint: "rgba(244, 114, 182, 0.16)",
      avatar: "img/avatars/getting-there.svg",
      blurb: "Places · directions · travel stories · being late",
      goals: [
        "talk about buildings and places",
        "ask for and give directions",
        "tell stories better",
        "apologise for being late",
        "talk about different ways of travelling",
        "describe problems you can have on journeys",
      ],
    },
    {
      id: "eat",
      num: 4,
      title: "Eat",
      icon: "🍽️",
      accent: "#fbbf24",
      tint: "rgba(251, 191, 36, 0.16)",
      avatar: "img/avatars/eat.svg",
      blurb: "Restaurants · menus · meals · food habits",
      goals: [
        "describe restaurants and meals",
        "discuss where and what to eat",
        "talk about your experiences",
        "understand menus and explain dishes",
        "ask and answer questions in a restaurant",
        "talk about typical foods and eating habits",
      ],
      beats: [
        {
          id: "favourite-place",
          label: "A favourite place",
          teacher:
            "Beat 1 · restaurant talk. Paper = fuel for chunks. Highlighted marks = targets. Steal stems about YOUR places to eat.",
          blocks: ["read", "context"],
          phrases: [
            {
              en: "There’s a little Japanese place near my office, which does great sushi",
              ru: "есть небольшое японское кафе у офиса, где отличный суши",
            },
            {
              en: "It often gets really busy",
              ru: "часто бывает очень людно",
            },
            {
              en: "wait for a while to get a seat",
              ru: "подождать, пока освободится место",
            },
            {
              en: "The service is great",
              ru: "обслуживание отличное",
            },
            {
              en: "The staff are always really friendly",
              ru: "персонал всегда очень дружелюбный",
            },
            {
              en: "have a big selection of vegetarian dishes",
              ru: "иметь большой выбор вегетарианских блюд",
            },
            {
              en: "have plenty to choose from",
              ru: "есть из чего выбрать",
            },
            {
              en: "the first time I went there",
              ru: "когда я первый раз туда пошёл / пошла",
            },
            {
              en: "it was really good value",
              ru: "это было очень выгодно / хорошее соотношение цены и качества",
            },
            {
              en: "the portions were much smaller",
              ru: "порции были гораздо меньше",
            },
            {
              en: "I went there once, and I had this dish which tasted disgusting, but when I complained about it, the waiter was quite rude.",
              ru: "я был(а) там однажды, блюдо было отвратительным, а когда я пожаловался / пожаловалась, официант был грубым",
            },
            {
              en: "They have a fixed menu, and there isn’t much choice.",
              ru: "у них фиксированное меню, и выбора почти нет",
            },
            {
              en: "There are usually just two or three options for each course.",
              ru: "обычно всего два–три варианта на каждое блюдо",
            },
            {
              en: "sit outside on the terrace there",
              ru: "посидеть снаружи на террасе",
            },
            {
              en: "get an incredible view over the city",
              ru: "открывается невероятный вид на город",
            },
            {
              en: "I had this amazing seafood dish",
              ru: "я взял(а) потрясающее блюдо из морепродуктов",
            },
            {
              en: "it was all really delicious",
              ru: "всё было очень вкусно",
            },
          ],
          read: {
            letter: "A",
            title: "Places to eat",
            subtitle: "Block 1 · restaurants · service · value",
            html:
              "<p><strong>Talking about places to eat</strong></p>" +
              "<p>There’s a little Japanese place near my office, which does great sushi! It often gets really busy, so you sometimes have to wait for a while to get a seat.</p>" +
              "<p>We often go to a small Spanish place near here. The service is great. The staff are always really friendly. They have a big selection of vegetarian dishes, so you’ll have plenty to choose from.</p>" +
              "<p>The first time I went there, it was really good value, but I went there again recently and it was quite expensive and the portions were much smaller! I went there once, and I had this dish which tasted disgusting, but when I complained about it, the waiter was quite rude.</p>" +
              "<p>They have a fixed menu, and there isn’t much choice. There are usually just two or three options for each course. It’s great. You can sit outside on the terrace there and get an incredible view over the city. I really want to go there again. I had this amazing seafood dish when I went there. In fact it was all really delicious, but it’s also really expensive.</p>",
          },
          context: {
            tone: "Steal the highlighted chunks · finish them about places YOU eat",
            meanings: [
              "does great sushi = serves / cooks really good sushi. Steal: a little … place … which does great …",
              "gets really busy = crowded · hard to get a table.",
              "good value = worth the money (not only ‘cheap’).",
              "portions = how much food on the plate.",
              "there isn’t much choice = few options on the menu.",
              "on the terrace = outdoor seating · view talk.",
              "get an incredible view over the city = you can see the city beautifully from there.",
            ],
          },
          speak: {
            mission:
              "60–90 s · steal highlighted chunks (finish them about YOUR places).",
            starters: [
              "There’s a little … place near … which does great …",
              "It often gets really busy, so …",
              "The service is great · the staff are always really friendly…",
              "It was really good value, but …",
              "You can sit outside on the terrace and get an incredible view…",
            ],
            questions: [
              {
                q: "Tell me about a little place near you which does great food. Does it get really busy?",
                examples: [
                  "There’s a little … place near … which does great …",
                  "It often gets really busy · wait for a while to get a seat.",
                ],
              },
              {
                q: "Where is the service great — and are the staff always really friendly?",
                examples: [
                  "The service is great. The staff are always really friendly.",
                  "They have a big selection of … · you’ll have plenty to choose from.",
                ],
              },
              {
                q: "Have you ever had really good value… then gone back and found the portions much smaller? Or a dish that tasted disgusting?",
                examples: [
                  "The first time I went there · it was really good value → later the portions were much smaller.",
                  "I went there once, and I had this dish which tasted disgusting, but when I complained about it, the waiter was quite rude.",
                ],
              },
              {
                q: "Terrace with a view — or a fixed menu with two or three options?",
                examples: [
                  "They have a fixed menu, and there isn’t much choice. There are usually just two or three options for each course.",
                  "Sit outside on the terrace · get an incredible view over the city · I had this amazing … dish · it was all really delicious.",
                ],
              },
            ],
          },
          drill: {
            mode: "ladder",
            title: "Ladder drill · stepped partners",
            how: "Echo all Cool Words → place ×3 → new (service) ×3 → new (value / complaint) ×3 → new (fixed menu / view) ×3 → all together",
            bigIdea:
              "First repeat the paper phrases · then drill one paragraph at a time · introduce the next batch · drill again.",
            echo: [
              {
                en: "There’s a little Japanese place near my office, which does great sushi",
                ru: "есть небольшое японское кафе у офиса, где отличный суши",
                audio: "audio/drill/eat1-japanese-place.mp3?v=1",
              },
              {
                en: "It often gets really busy",
                ru: "часто бывает очень людно",
                audio: "audio/drill/eat1-often-gets-busy.mp3?v=1",
              },
              {
                en: "wait for a while to get a seat",
                ru: "подождать, пока освободится место",
                audio: "audio/drill/eat1-wait-for-a-seat.mp3?v=1",
              },
              {
                en: "The service is great",
                ru: "обслуживание отличное",
                audio: "audio/drill/eat1-service-is-great.mp3?v=1",
              },
              {
                en: "The staff are always really friendly",
                ru: "персонал всегда очень дружелюбный",
                audio: "audio/drill/eat1-staff-friendly.mp3?v=1",
              },
              {
                en: "have a big selection of vegetarian dishes",
                ru: "иметь большой выбор вегетарианских блюд",
                audio: "audio/drill/eat1-big-selection.mp3?v=1",
              },
              {
                en: "have plenty to choose from",
                ru: "есть из чего выбрать",
                audio: "audio/drill/eat1-plenty-to-choose.mp3?v=1",
              },
              {
                en: "the first time I went there",
                ru: "когда я первый раз туда пошёл / пошла",
                audio: "audio/drill/eat1-first-time.mp3?v=1",
              },
              {
                en: "it was really good value",
                ru: "это было очень выгодно",
                audio: "audio/drill/eat1-good-value.mp3?v=1",
              },
              {
                en: "the portions were much smaller",
                ru: "порции были гораздо меньше",
                audio: "audio/drill/eat1-portions-smaller.mp3?v=1",
              },
              {
                en: "I went there once, and I had this dish which tasted disgusting, but when I complained about it, the waiter was quite rude.",
                ru: "я был(а) там однажды — блюдо отвратительное, официант грубый",
                audio: "audio/drill/eat1-tasted-disgusting-full.mp3?v=1",
              },
              {
                en: "They have a fixed menu, and there isn’t much choice.",
                ru: "у них фиксированное меню, выбора почти нет",
                audio: "audio/drill/eat1-fixed-menu.mp3?v=1",
              },
              {
                en: "There are usually just two or three options for each course.",
                ru: "обычно два–три варианта на каждое блюдо",
                audio: "audio/drill/eat1-two-three-options.mp3?v=1",
              },
              {
                en: "sit outside on the terrace there",
                ru: "посидеть снаружи на террасе",
                audio: "audio/drill/eat1-sit-outside-terrace.mp3?v=1",
              },
              {
                en: "get an incredible view over the city",
                ru: "открывается невероятный вид на город",
                audio: "audio/drill/eat1-incredible-view.mp3?v=1",
              },
              {
                en: "I had this amazing seafood dish",
                ru: "я взял(а) потрясающее блюдо из морепродуктов",
                audio: "audio/drill/eat1-amazing-seafood.mp3?v=1",
              },
              {
                en: "it was all really delicious",
                ru: "всё было очень вкусно",
                audio: "audio/drill/eat1-really-delicious.mp3?v=1",
              },
            ],
            stages: [
              {
                type: "echo",
                label: "1 · Echo · all Cool Words",
                tip: "Repeat every paper phrase first · then drill paragraph by paragraph.",
              },
              {
                type: "partners",
                label: "2 · Place & busy · ×4",
                tip: "First paragraph only · four partners · new place each time.",
                promptA: "Is there a good place near you?",
                promptAudio: "audio/drill/eat1-q-good-place.mp3?v=1",
                modelB:
                  "There’s a little … place near … which does great …. It often gets really busy, so you sometimes have to wait for a while to get a seat.",
                inventPrompt:
                  "Name {{slot}} and one food it does well.",
                stems: [
                  "There’s a little … place … which does great …",
                  "It often gets really busy",
                  "wait for a while to get a seat",
                ],
                partners: [
                  { name: "Maya", slot: "a cafe near work", voice: "f" },
                  { name: "Leo", slot: "a place near home", voice: "m" },
                  {
                    name: "Sam",
                    slot: "somewhere you went last weekend",
                    voice: "f",
                  },
                  { name: "Alex", slot: "a place near the station", voice: "m" },
                ],
              },
              {
                type: "partners",
                label: "3 · Service · new phrases · ×4",
                tip: "New batch from paragraph 2 · service + selection · ×4 partners.",
                promptA: "What about the service there?",
                promptAudio: "audio/drill/eat1-q-service.mp3?v=1",
                modelB:
                  "The service is great. The staff are always really friendly. They have a big selection of … dishes, so you’ll have plenty to choose from.",
                inventPrompt:
                  "Add one detail about {{slot}} (smile, speed, vegetarian options…).",
                stems: [
                  "The service is great",
                  "The staff are always really friendly",
                  "have a big selection of … dishes",
                  "have plenty to choose from",
                ],
                partners: [
                  { name: "Maya", slot: "the staff / speed", voice: "f" },
                  { name: "Leo", slot: "vegetarian choice", voice: "m" },
                  { name: "Sam", slot: "how friendly they are", voice: "f" },
                  { name: "Alex", slot: "waiting time", voice: "m" },
                ],
              },
              {
                type: "partners",
                label: "4 · Value & complaint · new · ×4",
                tip: "New batch from paragraph 3 · value / portions / disgusting dish · ×4.",
                promptA: "Have you ever had a dish that tasted disgusting?",
                promptAudio: "audio/drill/eat1-q-complaint.mp3?v=1",
                modelB:
                  "The first time I went there, it was really good value, but I went there again recently and it was quite expensive and the portions were much smaller! I went there once, and I had this dish which tasted disgusting, but when I complained about it, the waiter was quite rude.",
                inventPrompt:
                  "Invent one detail about {{slot}} (price, portions, or a rude waiter).",
                stems: [
                  "the first time I went there",
                  "it was really good value",
                  "the portions were much smaller",
                  "I went there once, and I had this dish which tasted disgusting, but when I complained about it, the waiter was quite rude.",
                ],
                partners: [
                  {
                    name: "Maya",
                    slot: "a place that got more expensive",
                    voice: "f",
                  },
                  {
                    name: "Leo",
                    slot: "smaller portions than before",
                    voice: "m",
                  },
                  {
                    name: "Sam",
                    slot: "a dish that tasted disgusting",
                    voice: "f",
                  },
                  { name: "Alex", slot: "a rude waiter", voice: "m" },
                ],
              },
              {
                type: "partners",
                label: "5 · Fixed menu & view · new · ×4",
                tip: "New batch from paragraph 4 · fixed menu / choice / terrace / delicious · ×4.",
                promptA: "What about the menu — is there much choice?",
                promptAudio: "audio/drill/eat1-q-fixed-menu.mp3?v=1",
                modelB:
                  "They have a fixed menu, and there isn’t much choice. There are usually just two or three options for each course. It’s great. You can sit outside on the terrace there and get an incredible view over the city. I had this amazing seafood dish when I went there. In fact it was all really delicious, but it’s also really expensive.",
                inventPrompt:
                  "Invent one detail about {{slot}} (fixed menu, terrace, view, or a dish).",
                stems: [
                  "They have a fixed menu, and there isn’t much choice.",
                  "There are usually just two or three options for each course.",
                  "sit outside on the terrace there",
                  "get an incredible view over the city",
                  "I had this amazing … dish",
                  "it was all really delicious",
                ],
                partners: [
                  {
                    name: "Maya",
                    slot: "a fixed-menu place",
                    voice: "f",
                  },
                  {
                    name: "Leo",
                    slot: "a terrace with a view",
                    voice: "m",
                  },
                  {
                    name: "Sam",
                    slot: "an amazing dish you’d order again",
                    voice: "f",
                  },
                  { name: "Alex", slot: "a cheap terrace lunch", voice: "m" },
                ],
              },
              {
                type: "choice",
                label: "6 · All together",
                tip: "Put every paragraph in one go · stems + hint model stay on screen.",
                hintDefault: true,
                options: [
                  {
                    title: "Full picture",
                    prompt:
                      "Tell a friend about YOUR place end to end — food, busy nights, service, money, complaint, menu, and why you’d go back (or not).",
                    cover: [
                      "place + food (Japanese / Spanish / …)",
                      "busy · wait for a seat",
                      "service · staff · choice of dishes",
                      "the first time I went there · value · portions",
                      "tasted disgusting · complained · waiter rude",
                      "fixed menu · two or three options · terrace · view · delicious?",
                    ],
                    stems: [
                      "There’s a little … place … which does great …",
                      "It often gets really busy",
                      "wait for a while to get a seat",
                      "The service is great",
                      "The staff are always really friendly",
                      "the first time I went there",
                      "it was really good value",
                      "the portions were much smaller",
                      "I went there once, and I had this dish which tasted disgusting, but when I complained about it, the waiter was quite rude.",
                      "They have a fixed menu, and there isn’t much choice.",
                      "There are usually just two or three options for each course.",
                      "sit outside on the terrace there",
                      "get an incredible view over the city",
                      "it was all really delicious",
                    ],
                    model:
                      "There’s a little Japanese place near my office, which does great sushi! It often gets really busy, so you sometimes have to wait for a while to get a seat. The service is great — the staff are always really friendly. The first time I went there, it was really good value, but recently the portions were much smaller. I went there once, and I had this dish which tasted disgusting, but when I complained about it, the waiter was quite rude. They have a fixed menu, and there isn’t much choice. There are usually just two or three options for each course. Still — you can sit outside on the terrace there and get an incredible view over the city. I had this amazing seafood dish · it was all really delicious, but it’s also really expensive.",
                  },
                  {
                    title: "Recommend",
                    prompt:
                      "Recommend a place with a terrace and a view. Why go back?",
                    stems: [
                      "sit outside on the terrace there",
                      "get an incredible view over the city",
                      "I had this amazing … dish",
                      "it was all really delicious",
                    ],
                    model:
                      "It’s great — you can sit outside on the terrace there and get an incredible view over the city. I had this amazing … dish · it was all really delicious.",
                  },
                  {
                    title: "Warn a friend",
                    prompt:
                      "Warn a friend: bad value / smaller portions / disgusting dish / rude waiter.",
                    stems: [
                      "the first time I went there",
                      "it was really good value",
                      "the portions were much smaller",
                      "I went there once, and I had this dish which tasted disgusting, but when I complained about it, the waiter was quite rude.",
                    ],
                    model:
                      "The first time I went there, it was really good value. Later: expensive and the portions were much smaller. I went there once, and I had this dish which tasted disgusting, but when I complained about it, the waiter was quite rude.",
                  },
                  {
                    title: "Fixed menu",
                    prompt:
                      "Describe a place with a fixed menu and little choice.",
                    stems: [
                      "They have a fixed menu, and there isn’t much choice.",
                      "There are usually just two or three options for each course.",
                      "The service is great",
                    ],
                    model:
                      "They have a fixed menu, and there isn’t much choice. There are usually just two or three options for each course. The service is great, though.",
                  },
                ],
              },
            ],
          },
          time: "12–16 min",
        },
        {
          id: "deciding-where",
          label: "Deciding where",
          teacher:
            "Beat 2 · Track 19 dialogue (Sarah & Victor). Paper = fuel for chunks. Steal lines for deciding where to eat together.",
          blocks: ["read", "context"],
          phrases: [
            {
              en: "Are you hungry?",
              ru: "ты голодный / голодная?",
            },
            {
              en: "Do you want to get something to eat?",
              ru: "хочешь взять что-нибудь поесть?",
            },
            {
              en: "I’d love to, yeah. Where are you thinking of going?",
              ru: "с удовольствием. а куда ты думаешь пойти?",
            },
            {
              en: "Have you ever been there?",
              ru: "ты когда-нибудь там был(а)?",
            },
            {
              en: "Yeah, I go there a lot.",
              ru: "да, я часто туда хожу.",
            },
            {
              en: "I actually went there yesterday.",
              ru: "вообще-то я был(а) там вчера.",
            },
            {
              en: "I’d rather not, if you don’t mind.",
              ru: "лучше не надо, если ты не против.",
            },
            {
              en: "And I actually don’t really feel like anything very spicy today.",
              ru: "и вообще мне сегодня не очень хочется чего-то очень острого.",
            },
            {
              en: "I’m happy to go somewhere else.",
              ru: "я с удовольствием пойду куда-нибудь ещё.",
            },
            {
              en: "How about that?",
              ru: "как насчёт этого?",
            },
            {
              en: "To be honest, I don’t really like seafood.",
              ru: "честно говоря, мне не очень нравятся морепродукты.",
            },
            {
              en: "I prefer meat.",
              ru: "я предпочитаю мясо.",
            },
            {
              en: "Well, why don’t we go to … instead.",
              ru: "ну тогда почему бы нам не пойти в … вместо этого.",
            },
            {
              en: "I’ve never heard of it.",
              ru: "я никогда о нём не слышал(а).",
            },
            {
              en: "Where is it?",
              ru: "а где это?",
            },
            {
              en: "It’s about fifteen minutes’ walk from here.",
              ru: "это примерно пятнадцать минут пешком отсюда.",
            },
            {
              en: "It’s just round the corner from the bus station.",
              ru: "это сразу за углом от автобусной станции.",
            },
            {
              en: "I’ve been there a few times.",
              ru: "я там уже несколько раз был(а).",
            },
            {
              en: "I haven’t ever had Turkish food.",
              ru: "я никогда не пробовал(а) турецкую еду.",
            },
            {
              en: "You’re joking.",
              ru: "ты шутишь.",
            },
            {
              en: "You’ll love it.",
              ru: "тебе понравится.",
            },
            {
              en: "They do lots of grilled meat, but they also have a great selection of other dishes, so there’s plenty to choose from.",
              ru: "у них много мяса на гриле, но и отличный выбор других блюд — есть из чего выбрать.",
            },
            {
              en: "It sounds great.",
              ru: "звучит отлично.",
            },
            {
              en: "The only problem is that it gets really busy, so sometimes you have to wait a while to get a table.",
              ru: "единственная проблема — там бывает очень людно, и иногда приходится подождать столик.",
            },
            {
              en: "Can we ring them to check they have a table?",
              ru: "а можем позвонить им и проверить, есть ли столик?",
            },
            {
              en: "I guess so.",
              ru: "наверное, да.",
            },
            {
              en: "Let me see if I can find their number on my phone.",
              ru: "сейчас посмотрю, найду ли их номер в телефоне.",
            },
          ],
          read: {
            letter: "B",
            title: "Deciding where to eat",
            subtitle: "Block 2 · Track 19 · Sarah & Victor",
            html:
              "<p><strong>S = Sarah, V = Victor</strong></p>" +
              "<p><strong>S:</strong> So Victor. Are you hungry?</p>" +
              "<p><strong>V:</strong> Yeah, a bit.</p>" +
              "<p><strong>S:</strong> Do you want to get something to eat?</p>" +
              "<p><strong>V:</strong> I’d love to, yeah. Where are you thinking of going?</p>" +
              "<p><strong>S:</strong> Well, there’s a really nice Thai place just down the road. Have you ever been there?</p>" +
              "<p><strong>V:</strong> Yeah, I go there a lot. I actually went there yesterday.</p>" +
              "<p><strong>S:</strong> Oh right. So maybe you don’t want to go there again today.</p>" +
              "<p><strong>V:</strong> I’d rather not, If you don’t mind. And I actually don’t really feel like anything very spicy today.</p>" +
              "<p><strong>S:</strong> OK. No problem. I’m happy to go somewhere else.</p>" +
              "<p><strong>V:</strong> There’s a nice seafood restaurant near the big department store. How about that?</p>" +
              "<p><strong>S:</strong> To be honest, I don’t really like seafood. I prefer meat.</p>" +
              "<p><strong>V:</strong> Well, why don’t we go to Selale instead. Have you been there?</p>" +
              "<p><strong>S:</strong> No. I’ve never heard of it. Where is it?</p>" +
              "<p><strong>V:</strong> It’s about fifteen minutes’ walk from here. It’s just round the corner from the bus station.</p>" +
              "<p><strong>S:</strong> Oh, OK. And what kind of restaurant is it?</p>" +
              "<p><strong>V:</strong> It’s Turkish. It’s really good. I’ve been there a few times.</p>" +
              "<p><strong>S:</strong> Really? I haven’t ever had Turkish food.</p>" +
              "<p><strong>V:</strong> You’re joking. You’ll love it. They do lots of grilled meat, but they also have a great selection of other dishes, so there’s plenty to choose from.</p>" +
              "<p><strong>S:</strong> It sounds great.</p>" +
              "<p><strong>V:</strong> Yeah. The only problem is that it gets really busy, so sometimes you have to wait a while to get a table.</p>" +
              "<p><strong>S:</strong> Oh right, well can we ring them to check they have a table?</p>" +
              "<p><strong>V:</strong> I guess so. Let me see if I can find their number on my phone.</p>",
          },
          context: {
            tone: "Steal whole dialogue lines · decide where to eat with a partner",
            meanings: [
              "Do you want to get something to eat? = invite to go for a meal.",
              "I’d rather not, if you don’t mind. = soft polite no.",
              "And I actually don’t really feel like anything very spicy today. = full soft refusal + reason.",
              "I’ve been there a few times. = you’ve tried the place before.",
              "You’re joking. / You’ll love it. = surprise + encourage.",
              "The only problem is that it gets really busy… = warn before booking.",
              "Can we ring them to check they have a table? = phone to confirm.",
              "I guess so. / Let me see if I can find their number on my phone. = agree + next action.",
            ],
          },
          speak: {
            mission:
              "60–90 s · steal whole lines from the dialogue · decide where YOU and a friend will eat.",
            starters: [
              "Do you want to get something to eat?",
              "Where are you thinking of going?",
              "I’d rather not, if you don’t mind.",
              "And I actually don’t really feel like anything very spicy today.",
              "Can we ring them to check they have a table?",
            ],
            questions: [
              {
                q: "Invite a friend to get something to eat. Ask where they’re thinking of going.",
                examples: [
                  "Are you hungry? Do you want to get something to eat?",
                  "Where are you thinking of going?",
                ],
              },
              {
                q: "Softly refuse a place (you went yesterday / don’t feel like spicy). Offer to go somewhere else.",
                examples: [
                  "I’d rather not, if you don’t mind.",
                  "And I actually don’t really feel like anything very spicy today. I’m happy to go somewhere else.",
                ],
              },
              {
                q: "Suggest a place, say what kind it is, and where it is.",
                examples: [
                  "Well, why don’t we go to … instead. I’ve been there a few times.",
                  "It’s about fifteen minutes’ walk from here. It’s just round the corner from the bus station.",
                ],
              },
              {
                q: "Warn that it gets busy — and suggest ringing to check a table.",
                examples: [
                  "The only problem is that it gets really busy, so sometimes you have to wait a while to get a table.",
                  "Can we ring them to check they have a table? — I guess so. Let me see if I can find their number on my phone.",
                ],
              },
            ],
          },
          drill: {
            mode: "ladder",
            title: "Ladder drill · deciding where",
            how: "Echo chunk → drill ×3 → swap roles → Echo next chunk → drill ×3 → swap → … → assemble",
            bigIdea:
              "One meaning-chunk at a time: first repeat its lines, then hear→say with 3 partners, swap roles, then the next chunk.",
            stages: [
              {
                type: "echo",
                label: "1 · Echo · Invite & place",
                tip: "Repeat every line from this chunk · then you drill it.",
                echo: [
                  {
                    en: "Are you hungry?",
                    ru: "ты голодный / голодная?",
                    audio: "audio/drill/eat2-s-are-you-hungry.mp3?v=1",
                  },
                  {
                    en: "Yeah, a bit.",
                    ru: "да, немного.",
                    audio: "audio/drill/eat2-v-yeah-a-bit.mp3?v=1",
                  },
                  {
                    en: "Do you want to get something to eat?",
                    ru: "хочешь взять что-нибудь поесть?",
                    audio: "audio/drill/eat2-s-want-eat.mp3?v=1",
                  },
                  {
                    en: "I’d love to, yeah. Where are you thinking of going?",
                    ru: "с удовольствием. а куда ты думаешь пойти?",
                    audio: "audio/drill/eat2-v-love-where.mp3?v=1",
                  },
                  {
                    en: "Well, there’s a really nice Thai place just down the road. Have you ever been there?",
                    ru: "есть отличное тайское место чуть дальше по улице. ты там бывал(а)?",
                    audio: "audio/drill/eat2-s-place-thai.mp3?v=1",
                  },
                  {
                    en: "Yeah, I go there a lot. I actually went there yesterday.",
                    ru: "да, я часто туда хожу. я там вчера был(а).",
                    audio: "audio/drill/eat2-v-go-a-lot.mp3?v=1",
                  },
                ],
              },
              {
                type: "dialogue",
                label: "2 · Drill · Invite & place",
                tip: "Hear Sarah → say Victor BIG → Said → next Sarah line plays. ×4 partners (Thai / Italian / Turkish). Then swap: you are Sarah.",
                youStartAs: "V",
                thenSwapTo: "S",
                roleNames: { S: "Sarah (S)", V: "Victor (V)" },
                partners: [
                  { name: "Maya", slot: "Thai", voice: "f" },
                  { name: "Leo", slot: "Italian", voice: "m" },
                  { name: "Sam", slot: "Turkish", voice: "f" },
                  { name: "Alex", slot: "Spanish", voice: "m" },
                ],
                turns: [
                  {
                    who: "S",
                    text: "Are you hungry?",
                    audio: "audio/drill/eat2-s-are-you-hungry.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "Yeah, a bit.",
                    audio: "audio/drill/eat2-v-yeah-a-bit.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "Do you want to get something to eat?",
                    audio: "audio/drill/eat2-s-want-eat.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "I’d love to, yeah. Where are you thinking of going?",
                    audio: "audio/drill/eat2-v-love-where.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "Well, there’s a really nice {{slot}} place just down the road. Have you ever been there?",
                    audioBySlot: {
                      Thai: "audio/drill/eat2-s-place-thai.mp3?v=1",
                      Italian: "audio/drill/eat2-s-place-italian.mp3?v=1",
                      Turkish: "audio/drill/eat2-s-place-turkish.mp3?v=1",
                      Spanish: "audio/drill/eat2-s-place-spanish.mp3?v=1",
                    },
                  },
                  {
                    who: "V",
                    text: "Yeah, I go there a lot. I actually went there yesterday.",
                    audio: "audio/drill/eat2-v-go-a-lot.mp3?v=1",
                  },
                ],
              },
              {
                type: "echo",
                label: "3 · Echo · Soft no",
                tip: "New chunk · repeat these lines · then drill.",
                echo: [
                  {
                    en: "Oh right. So maybe you don’t want to go there again today.",
                    ru: "а, понятно. может, сегодня туда снова не хочется.",
                    audio: "audio/drill/eat2-s-oh-right-again.mp3?v=1",
                  },
                  {
                    en: "I’d rather not, if you don’t mind. And I actually don’t really feel like anything very spicy today.",
                    ru: "лучше не надо, если ты не против. и мне сегодня не очень хочется острого.",
                    audio: "audio/drill/eat2-v-rather-spicy.mp3?v=1",
                  },
                  {
                    en: "OK. No problem. I’m happy to go somewhere else.",
                    ru: "ок, без проблем. я с радостью пойду куда-нибудь ещё.",
                    audio: "audio/drill/eat2-s-somewhere-else.mp3?v=1",
                  },
                ],
              },
              {
                type: "dialogue",
                label: "4 · Drill · Soft no",
                tip: "Hear → say · ×4 as Victor · then swap · lead as Sarah ×4.",
                youStartAs: "V",
                thenSwapTo: "S",
                roleNames: { S: "Sarah (S)", V: "Victor (V)" },
                partners: [
                  { name: "Maya", slot: "spicy", voice: "f" },
                  { name: "Leo", slot: "spicy", voice: "m" },
                  { name: "Sam", slot: "spicy", voice: "f" },
                  { name: "Alex", slot: "spicy", voice: "m" },
                ],
                turns: [
                  {
                    who: "S",
                    text: "Oh right. So maybe you don’t want to go there again today.",
                    audio: "audio/drill/eat2-s-oh-right-again.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "I’d rather not, if you don’t mind. And I actually don’t really feel like anything very spicy today.",
                    audio: "audio/drill/eat2-v-rather-spicy.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "OK. No problem. I’m happy to go somewhere else.",
                    audio: "audio/drill/eat2-s-somewhere-else.mp3?v=1",
                  },
                ],
              },
              {
                type: "echo",
                label: "5 · Echo · Suggest Turkish",
                tip: "New chunk · seafood → Selale · You’ll love it · repeat all lines.",
                echo: [
                  {
                    en: "There’s a nice seafood restaurant near the big department store. How about that?",
                    ru: "есть хороший ресторан морепродуктов у большого универмага. как насчёт него?",
                    audio: "audio/drill/eat2-v-seafood-how.mp3?v=1",
                  },
                  {
                    en: "To be honest, I don’t really like seafood. I prefer meat.",
                    ru: "честно говоря, мне не очень нравятся морепродукты. я предпочитаю мясо.",
                    audio: "audio/drill/eat2-s-no-seafood.mp3?v=1",
                  },
                  {
                    en: "Well, why don’t we go to Selale instead. Have you been there?",
                    ru: "ну а почему бы нам не пойти в Selale вместо этого. ты там был(а)?",
                    audio: "audio/drill/eat2-v-selale.mp3?v=1",
                  },
                  {
                    en: "No. I’ve never heard of it. Where is it?",
                    ru: "нет. никогда не слышал(а). а где это?",
                    audio: "audio/drill/eat2-s-never-heard.mp3?v=1",
                  },
                  {
                    en: "It’s about fifteen minutes’ walk from here. It’s just round the corner from the bus station.",
                    ru: "примерно пятнадцать минут пешком. сразу за углом от автобусной станции.",
                    audio: "audio/drill/eat2-v-fifteen.mp3?v=1",
                  },
                  {
                    en: "Oh, OK. And what kind of restaurant is it?",
                    ru: "а, ок. а что это за ресторан?",
                    audio: "audio/drill/eat2-s-what-kind.mp3?v=1",
                  },
                  {
                    en: "It’s Turkish. It’s really good. I’ve been there a few times.",
                    ru: "турецкий. очень хороший. я там уже несколько раз был(а).",
                    audio: "audio/drill/eat2-v-turkish-few.mp3?v=1",
                  },
                  {
                    en: "Really? I haven’t ever had Turkish food.",
                    ru: "правда? я никогда не пробовал(а) турецкую еду.",
                    audio: "audio/drill/eat2-s-turkish-food.mp3?v=1",
                  },
                  {
                    en: "You’re joking. You’ll love it. They do lots of grilled meat, but they also have a great selection of other dishes, so there’s plenty to choose from.",
                    ru: "ты шутишь. тебе понравится. много мяса на гриле и отличный выбор других блюд.",
                    audio: "audio/drill/eat2-v-joking-love.mp3?v=1",
                  },
                  {
                    en: "It sounds great.",
                    ru: "звучит отлично.",
                    audio: "audio/drill/eat2-s-sounds-great.mp3?v=1",
                  },
                ],
              },
              {
                type: "dialogue",
                label: "6 · Drill · Suggest Turkish",
                tip: "This chunk Victor starts · say V → hear S → … ×3 · then swap: you are Sarah.",
                youStartAs: "V",
                thenSwapTo: "S",
                roleNames: { S: "Sarah (S)", V: "Victor (V)" },
                partners: [
                  { name: "Maya", slot: "Selale", voice: "f" },
                  { name: "Leo", slot: "Selale", voice: "m" },
                  { name: "Sam", slot: "Selale", voice: "f" },
                  { name: "Alex", slot: "Selale", voice: "m" },
                ],
                turns: [
                  {
                    who: "V",
                    text: "There’s a nice seafood restaurant near the big department store. How about that?",
                    audio: "audio/drill/eat2-v-seafood-how.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "To be honest, I don’t really like seafood. I prefer meat.",
                    audio: "audio/drill/eat2-s-no-seafood.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "Well, why don’t we go to Selale instead. Have you been there?",
                    audio: "audio/drill/eat2-v-selale.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "No. I’ve never heard of it. Where is it?",
                    audio: "audio/drill/eat2-s-never-heard.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "It’s about fifteen minutes’ walk from here. It’s just round the corner from the bus station.",
                    audio: "audio/drill/eat2-v-fifteen.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "Oh, OK. And what kind of restaurant is it?",
                    audio: "audio/drill/eat2-s-what-kind.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "It’s Turkish. It’s really good. I’ve been there a few times.",
                    audio: "audio/drill/eat2-v-turkish-few.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "Really? I haven’t ever had Turkish food.",
                    audio: "audio/drill/eat2-s-turkish-food.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "You’re joking. You’ll love it. They do lots of grilled meat, but they also have a great selection of other dishes, so there’s plenty to choose from.",
                    audio: "audio/drill/eat2-v-joking-love.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "It sounds great.",
                    audio: "audio/drill/eat2-s-sounds-great.mp3?v=1",
                  },
                ],
              },
              {
                type: "echo",
                label: "7 · Echo · Book a table",
                tip: "Last chunk · busy · ring · phone · repeat, then drill.",
                echo: [
                  {
                    en: "Yeah. The only problem is that it gets really busy, so sometimes you have to wait a while to get a table.",
                    ru: "да. единственная проблема — бывает очень людно, иногда приходится ждать столик.",
                    audio: "audio/drill/eat2-v-busy.mp3?v=1",
                  },
                  {
                    en: "Oh right, well can we ring them to check they have a table?",
                    ru: "а, понятно — а можем позвонить и проверить, есть ли столик?",
                    audio: "audio/drill/eat2-s-ring.mp3?v=1",
                  },
                  {
                    en: "I guess so. Let me see if I can find their number on my phone.",
                    ru: "наверное да. дай посмотрю, найду ли номер в телефоне.",
                    audio: "audio/drill/eat2-v-guess-phone.mp3?v=1",
                  },
                ],
              },
              {
                type: "dialogue",
                label: "8 · Drill · Book a table",
                tip: "Victor starts · ×4 partners · then swap · you are Sarah ×3.",
                youStartAs: "V",
                thenSwapTo: "S",
                roleNames: { S: "Sarah (S)", V: "Victor (V)" },
                partners: [
                  { name: "Maya", slot: "tonight", voice: "f" },
                  { name: "Leo", slot: "Friday", voice: "m" },
                  { name: "Sam", slot: "Saturday", voice: "f" },
                  { name: "Alex", slot: "Sunday", voice: "m" },
                ],
                turns: [
                  {
                    who: "V",
                    text: "Yeah. The only problem is that it gets really busy, so sometimes you have to wait a while to get a table.",
                    audio: "audio/drill/eat2-v-busy.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "Oh right, well can we ring them to check they have a table?",
                    audio: "audio/drill/eat2-s-ring.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "I guess so. Let me see if I can find their number on my phone.",
                    audio: "audio/drill/eat2-v-guess-phone.mp3?v=1",
                  },
                ],
              },
              {
                type: "choice",
                label: "9 · All together",
                tip: "Full Sarah–Victor decide-where talk · scene cards in order · stems + hint.",
                hintDefault: true,
                options: [
                  {
                    title: "Full decide",
                    prompt:
                      "Act the whole dialogue with a partner — follow the 4 scene cards.",
                    cover: [
                      "1 Invite and place (Thai / Italian / Turkish)",
                      "2 Soft no · somewhere else",
                      "3 Seafood → Selale · You’ll love it",
                      "4 Busy · ring · find their number",
                    ],
                    cues: [
                      {
                        img: "img/drill/eat2-cue-invite.png",
                        label: "1 · Invite",
                      },
                      {
                        img: "img/drill/eat2-cue-thai.png",
                        label: "2 · Soft no",
                      },
                      {
                        img: "img/drill/eat2-cue-turkish.png",
                        label: "3 · Suggest",
                      },
                      {
                        img: "img/drill/eat2-cue-phone.png",
                        label: "4 · Ring",
                      },
                    ],
                    stems: [
                      "Are you hungry?",
                      "Do you want to get something to eat?",
                      "I’d love to, yeah. Where are you thinking of going?",
                      "I’d rather not, if you don’t mind.",
                      "And I actually don’t really feel like anything very spicy today.",
                      "I’m happy to go somewhere else.",
                      "You’re joking.",
                      "You’ll love it.",
                      "Can we ring them to check they have a table?",
                      "I guess so.",
                      "Let me see if I can find their number on my phone.",
                    ],
                    model:
                      "S: Are you hungry? Do you want to get something to eat? — V: I’d love to, yeah. Where are you thinking of going? — … Thai place … — V: I’d rather not… spicy today. — S: happy to go somewhere else. — V: seafood… — … Selale … You’ll love it… — V: only problem… busy… — S: can we ring them… — V: I guess so. Let me see if I can find their number on my phone.",
                  },
                ],
              },
            ],
          },
          time: "12–16 min",
        },
        {
          id: "suggestions",
          label: "Suggestions",
          teacher:
            "Beat 3 · Contextual drilling: same suggestion moves · Ex. 12 places change one by one (one say each) · not ×4 partners.",
          blocks: ["read", "context"],
          phrases: [
            {
              en: "Where do you want to go?",
              ru: "куда ты хочешь пойти?",
            },
            {
              en: "There’s a nice … place round the corner",
              ru: "есть хорошее кафе/место за углом",
            },
            {
              en: "How about that?",
              ru: "как насчёт этого?",
            },
            {
              en: "To be honest, I don’t really feel like … today",
              ru: "честно говоря, мне сегодня не очень хочется …",
            },
            {
              en: "Well, why don’t we go to … instead",
              ru: "ну а почему бы нам не пойти в … вместо этого?",
            },
            {
              en: "I went there once but I had a dish that tasted disgusting",
              ru: "я был(а) там однажды, но блюдо на вкус было отвратительным",
            },
            {
              en: "I had pizza yesterday",
              ru: "я ел(а) пиццу вчера",
            },
            {
              en: "there isn’t much choice",
              ru: "выбора почти нет",
            },
            {
              en: "last time the service was bad",
              ru: "в прошлый раз обслуживание было плохим",
            },
            {
              en: "order a takeaway",
              ru: "заказать еду на вынос",
            },
          ],
          read: {
            letter: "C",
            title: "Making and responding to suggestions",
            subtitle: "Block 3 · Developing conversations",
            html:
              "<p><strong>Look at how we make suggestions and respond to them.</strong></p>" +
              "<p><strong>A:</strong> Where do you want to go?</p>" +
              "<p><strong>B:</strong> There’s a nice Indian place round the corner. How about that?</p>" +
              "<p><strong>A:</strong> To be honest, I don’t really feel like a curry today.</p>" +
              "<p><strong>B:</strong> Well, why don’t we go to Prego instead.</p>" +
              "<p><strong>A:</strong> Oh, I went there once but I had a dish that tasted disgusting.</p>",
          },
          context: {
            tone: "Pattern: suggest → soft refuse → new suggest · steal the bold moves",
            meanings: [
              "How about that? = Do you like this idea?",
              "To be honest, I don’t really feel like … = soft no + reason (mood / taste today).",
              "Well, why don’t we go to … instead = offer plan B.",
              "I went there once but… = soft pushback with a past story.",
              "order a takeaway = get food delivered / to take home (not eat in).",
            ],
          },
          speak: {
            mission:
              "Build the same 5-line pattern with a partner · steal the stems.",
            starters: [
              "Where do you want to go?",
              "There’s a nice … place …. How about that?",
              "To be honest, I don’t really feel like … today.",
              "Well, why don’t we go to … instead.",
            ],
            questions: [
              {
                q: "Run the model: Indian place → don’t feel like curry → Prego → tasted disgusting.",
                examples: [
                  "How about that?",
                  "To be honest, I don’t really feel like a curry today.",
                ],
              },
              {
                q: "Change the food: pizza / Mexican / cafe / Harvey’s — keep the same soft refusal + new suggest.",
                examples: [
                  "I had pizza yesterday · why don’t we go to the Thai place next to it.",
                  "Last time the service was bad · why don’t we order a takeaway.",
                ],
              },
            ],
          },
          drill: {
            mode: "ladder",
            title: "Contextual drilling · suggestions",
            how: "Echo Cool Words → contextual chain (same phrases · new place each time · one say) → done",
            bigIdea:
              "Suggest → soft refuse → suggest again. Phrases stay; only the place / names change.",
            echo: [
              {
                en: "How about that?",
                ru: "как насчёт этого?",
                audio: "audio/drill/eat3-how-about-that.mp3?v=1",
              },
              {
                en: "To be honest, I don’t really feel like … today",
                ru: "честно говоря, мне сегодня не очень хочется …",
                audio: "audio/drill/eat3-dont-feel-like.mp3?v=1",
              },
              {
                en: "Well, why don’t we go to … instead",
                ru: "почему бы нам не пойти в … вместо этого?",
                audio: "audio/drill/eat3-why-dont-we-go.mp3?v=1",
              },
              {
                en: "There’s a nice … place round the corner",
                ru: "есть хорошее место за углом",
                audio: "audio/drill/eat3-nice-place-corner.mp3?v=1",
              },
              {
                en: "I went there once but I had a dish that tasted disgusting",
                ru: "я был(а) там раз, но блюдо было отвратительным",
                audio: "audio/drill/eat3-tasted-disgusting.mp3?v=1",
              },
              {
                en: "there isn’t much choice",
                ru: "выбора почти нет",
                audio: "audio/drill/eat3-isnt-much-choice.mp3?v=1",
              },
              {
                en: "last time the service was bad",
                ru: "в прошлый раз обслуживание было плохим",
                audio: "audio/drill/eat3-service-was-bad.mp3?v=1",
              },
              {
                en: "order a takeaway",
                ru: "заказать еду на вынос",
                audio: "audio/drill/eat3-order-takeaway.mp3?v=1",
              },
            ],
            stages: [
              {
                type: "echo",
                label: "1 · Echo · Cool Words",
                tip: "Repeat the moves once · then contextual drilling (situations change, phrases don’t).",
              },
              {
                type: "contextual",
                label: "2 · Contextual drilling · Ex. 12",
                tip: "One say per situation · same stems · only the place / names change · continue to the next.",
                promptA: "Where do you want to go?",
                inventPrompt:
                  "Run suggest → soft refuse → new suggest for THIS place.",
                stems: [
                  "There’s a nice … place …",
                  "How about that?",
                  "To be honest, I don’t really feel like … today",
                  "Well, why don’t we go to … instead",
                  "I went there once but I had a dish that tasted disgusting",
                  "I had pizza yesterday",
                  "there isn’t much choice",
                  "last time the service was bad",
                  "order a takeaway",
                ],
                contexts: [
                  {
                    kicker: "Model · before Ex. 12",
                    title: "Indian place → Prego",
                    parts: [
                      "nice Indian place round the corner",
                      "don’t really feel like a curry today",
                      "Prego · tasted disgusting",
                    ],
                    inventPrompt:
                      "Indian place → don’t feel like curry → Prego → tasted disgusting.",
                    model:
                      "There’s a nice Indian place round the corner. How about that? — To be honest, I don’t really feel like a curry today. — Well, why don’t we go to Prego instead. — Oh, I went there once but I had a dish that tasted disgusting.",
                  },
                  {
                    kicker: "Ex. 12 · Situation 1",
                    title: "Gino’s Pizzas",
                    parts: [
                      "Gino’s Pizzas",
                      "pizza yesterday",
                      "the Thai place next to it",
                    ],
                    inventPrompt:
                      "Gino’s → don’t feel like pizza (had it yesterday) → Thai place next to it.",
                    model:
                      "There’s a nice place — Gino’s Pizzas. How about that? — To be honest, I don’t really feel like pizza today · I had pizza yesterday. — Well, why don’t we go to the Thai place next to it instead.",
                  },
                  {
                    kicker: "Ex. 12 · Situation 2",
                    title: "Mexican place by the river",
                    parts: [
                      "Mexican place by the river",
                      "don’t feel like",
                      "the seafood place near here",
                    ],
                    inventPrompt:
                      "Mexican by the river → soft refuse → seafood near here.",
                    model:
                      "There’s a nice Mexican place by the river. How about that? — To be honest, I don’t really feel like Mexican today. — Well, why don’t we go to the seafood place near here instead.",
                  },
                  {
                    kicker: "Ex. 12 · Situation 3",
                    title: "Cafe round the corner",
                    parts: [
                      "cafe round the corner",
                      "not much choice",
                      "a Chinese restaurant",
                    ],
                    inventPrompt:
                      "Cafe → there isn’t much choice → Chinese restaurant.",
                    model:
                      "There’s a cafe round the corner. How about that? — To be honest… there isn’t much choice. — Well, why don’t we go to a Chinese restaurant instead.",
                  },
                  {
                    kicker: "Ex. 12 · Situation 4",
                    title: "Harvey’s restaurant",
                    parts: [
                      "Harvey’s restaurant",
                      "last time service bad",
                      "order a takeaway",
                    ],
                    inventPrompt:
                      "Harvey’s → last time service was bad → order a takeaway.",
                    model:
                      "Harvey’s restaurant — How about that? — Last time the service was bad. — Well, why don’t we order a takeaway instead.",
                  },
                ],
              },
              {
                type: "choice",
                label: "3 · Freer · your places",
                tip: "Optional · invent YOUR places with the same moves · 40–50 s.",
                hintDefault: true,
                options: [
                  {
                    title: "Your night out",
                    prompt:
                      "Suggest a real place near you · soft refuse · suggest again · keep the book moves.",
                    stems: [
                      "There’s a nice … place …",
                      "How about that?",
                      "To be honest, I don’t really feel like … today",
                      "Well, why don’t we go to … instead",
                    ],
                    model:
                      "There’s a nice … place …. How about that? — To be honest, I don’t really feel like … today. — Well, why don’t we go to … instead.",
                  },
                ],
              },
            ],
          },
          time: "10–14 min",
        },
        {
          id: "in-the-restaurant",
          label: "In the restaurant",
          teacher:
            "Beat 4 · restaurant dialogue (Waiter ↔ Customer). Same ladder as Deciding where: Echo → drill ×4 → swap ×4 · memory on 3 · record on 4.",
          blocks: ["read", "context"],
          phrases: [
            {
              en: "How many people is it?",
              ru: "сколько вас человек?",
            },
            {
              en: "Have you booked?",
              ru: "вы бронировали?",
            },
            {
              en: "Do you mind waiting?",
              ru: "вы не против подождать?",
            },
            {
              en: "Is this table here OK?",
              ru: "этот столик вам подходит?",
            },
            {
              en: "Would you like a high chair?",
              ru: "вам нужен детский стульчик?",
            },
            {
              en: "Are you ready to order?",
              ru: "вы готовы сделать заказ?",
            },
            {
              en: "Could you just give us two more minutes?",
              ru: "можно нам ещё пару минут?",
            },
            {
              en: "Could I have … for starters, please?",
              ru: "можно мне … на закуску, пожалуйста?",
            },
            {
              en: "I’ll have the … for my main course",
              ru: "на основное я возьму …",
            },
            {
              en: "I’ll go for the …",
              ru: "я выберу …",
            },
            {
              en: "Does it contain any meat?",
              ru: "там есть мясо?",
            },
            {
              en: "I’m vegetarian",
              ru: "я вегетарианец / вегетарианка",
            },
            {
              en: "Sparkling or still?",
              ru: "газированная или негазированная?",
            },
            {
              en: "Just tap water, please",
              ru: "просто водопроводную воду, пожалуйста",
            },
            {
              en: "Could we have a small plate for our son?",
              ru: "можно маленькую тарелку для сына?",
            },
            {
              en: "I’ll get the waiter",
              ru: "я позову официанта",
            },
            {
              en: "Could you get us a cloth, please?",
              ru: "не могли бы вы принести нам тряпку / салфетку?",
            },
            {
              en: "Would you like to see the dessert menu?",
              ru: "хотите посмотреть меню десертов?",
            },
            {
              en: "I’m really full",
              ru: "я очень сыт / сыта",
            },
            {
              en: "I couldn’t eat another thing",
              ru: "я больше ничего не могу съесть",
            },
            {
              en: "Could we have the bill, please?",
              ru: "можно счёт, пожалуйста?",
            },
            {
              en: "Shall we leave a tip?",
              ru: "оставим чаевые?",
            },
            {
              en: "Service is included",
              ru: "обслуживание включено",
            },
            {
              en: "That really is good value for money",
              ru: "это действительно отличное соотношение цены и качества",
            },
          ],
          read: {
            letter: "D",
            title: "In the restaurant",
            subtitle: "Block 4 · waiter & customers",
            html:
              "<p><strong>C1 = customer 1, C2 = customer 2, W = waiter</strong></p>" +
              "<p><strong>1</strong></p>" +
              "<p><strong>W:</strong> How many people is it?</p>" +
              "<p><strong>C1:</strong> There are three of us.</p>" +
              "<p><strong>W:</strong> And have you booked?</p>" +
              "<p><strong>C1:</strong> No. Is that a problem?</p>" +
              "<p><strong>W:</strong> No, but do you mind waiting?</p>" +
              "<p><strong>C1:</strong> How long?</p>" +
              "<p><strong>W:</strong> Maybe ten or fifteen minutes.</p>" +
              "<p><strong>C2:</strong> OK. That’s fine.</p>" +
              "<p><strong>C1:</strong> Could I change the baby somewhere?</p>" +
              "<p><strong>W:</strong> I’m afraid we don’t have any special facilities. You can use the toilet. It’s not very big, though.</p>" +
              "<p><strong>C1:</strong> That’s OK.</p>" +
              "<p><strong>W:</strong> It’s just at the end there, down the stairs.</p>" +
              "<p><strong>2</strong></p>" +
              "<p><strong>W:</strong> Is this table here OK?</p>" +
              "<p><strong>C1:</strong> Yeah, this is fine. Thank you.</p>" +
              "<p><strong>W:</strong> Would you like a high chair for the little girl?</p>" +
              "<p><strong>C1:</strong> That’d be great. Thanks. He’s actually a boy, though!</p>" +
              "<p><strong>W:</strong> Oh, I’m so sorry! Anyway, here are your menus. I’ll get the chair.</p>" +
              "<p><strong>3</strong></p>" +
              "<p><strong>W:</strong> Are you ready to order?</p>" +
              "<p><strong>C1:</strong> Not quite. Could you just give us two more minutes?</p>" +
              "<p><strong>W:</strong> Yes, of course.</p>" +
              "<p>…</p>" +
              "<p><strong>C2:</strong> Right. OK. Could I have the grilled squid for starters, please? And for my main course, I think I’ll have the chicken.</p>" +
              "<p><strong>W:</strong> Uh-huh, and what kind of potatoes would you like?</p>" +
              "<p><strong>C2:</strong> Roast potatoes, please.</p>" +
              "<p><strong>W:</strong> OK.</p>" +
              "<p><strong>C1:</strong> I’ll go for the aubergines stuffed with rice for my main course, please. And the soup of the day? Does it contain any meat? I’m vegetarian.</p>" +
              "<p><strong>W:</strong> Yes. I’m afraid it’s got lamb in it.</p>" +
              "<p><strong>C1:</strong> Oh, OK. Well, I’ll just have the tomato and avocado salad, then. And could we get some water as well?</p>" +
              "<p><strong>W:</strong> Of course. Sparkling or still?</p>" +
              "<p><strong>C1:</strong> Just tap water, please, if possible.</p>" +
              "<p><strong>W:</strong> Sure.</p>" +
              "<p><strong>C2:</strong> And could we have a small plate for our son? We’d like to share our dishes with him.</p>" +
              "<p><strong>4</strong></p>" +
              "<p><strong>C1:</strong> Oh, dear – what a mess!</p>" +
              "<p><strong>C2:</strong> I’ll get the waiter. Er, excuse me. I’m really sorry, but could you get us a cloth, please? My son’s dropped some water on the floor.</p>" +
              "<p><strong>W:</strong> Certainly madam. I’ll just go and get one.</p>" +
              "<p><strong>C2:</strong> Thank you.</p>" +
              "<p><strong>5</strong></p>" +
              "<p><strong>W:</strong> Would you like to see the dessert menu?</p>" +
              "<p><strong>C1:</strong> I’m OK, thanks. I’m really full, but if you want something …</p>" +
              "<p><strong>C2:</strong> No, no. I couldn’t eat another thing. It was lovely, though. Could I just have a coffee, please?</p>" +
              "<p><strong>C1:</strong> Me too. Thank you.</p>" +
              "<p><strong>6</strong></p>" +
              "<p><strong>C1:</strong> Could we have the bill, please?</p>" +
              "<p><strong>W:</strong> Yes, of course.</p>" +
              "<p><strong>C1:</strong> Great. Thanks.</p>" +
              "<p><strong>C2:</strong> That’s very reasonable, isn’t it? Shall we leave a tip?</p>" +
              "<p><strong>C1:</strong> No, look. Service is included.</p>" +
              "<p><strong>C2:</strong> Wow. Then that really is good value for money. We should come here again sometime.</p>",
          },
          context: {
            tone: "Restaurant service English · arrive · order · sort a mess · pay",
            meanings: [
              "Have you booked? = Do you have a reservation?",
              "Do you mind waiting? = Is a short wait OK?",
              "high chair = chair for a small child at the table.",
              "I’ll go for … = I’ll choose … (ordering).",
              "Does it contain any meat? = Is there meat in it? (vegetarian check).",
              "Sparkling or still? = fizzy or non-fizzy water.",
              "tap water = water from the tap (not bottled).",
              "Could you get us a cloth? = Please bring something to wipe a spill.",
              "I’m really full / I couldn’t eat another thing = no dessert.",
              "Service is included = tip already in the bill.",
              "good value for money = worth the price.",
            ],
          },
          speak: {
            mission:
              "Steal waiter / customer lines · role-play short restaurant turns.",
            starters: [
              "Have you booked? · Do you mind waiting?",
              "Are you ready to order? · Could you just give us two more minutes?",
              "I’ll have … · I’ll go for … · Does it contain any meat?",
              "Sparkling or still? · Just tap water, please.",
              "Could we have the bill, please? · Service is included.",
            ],
            questions: [
              {
                q: "Arrive with three people, no booking — ask how long to wait.",
                examples: [
                  "There are three of us. Have you booked? — No. Do you mind waiting?",
                  "How long? — Maybe ten or fifteen minutes.",
                ],
              },
              {
                q: "Order: starter + main + potatoes; check if soup has meat.",
                examples: [
                  "Could I have … for starters … I’ll have the chicken.",
                  "Does it contain any meat? I’m vegetarian.",
                ],
              },
              {
                q: "Ask for tap water and a small plate to share with a child.",
                examples: [
                  "Just tap water, please, if possible.",
                  "Could we have a small plate for our son?",
                ],
              },
              {
                q: "Spill → cloth; then bill + tip talk.",
                examples: [
                  "Could you get us a cloth, please?",
                  "Could we have the bill? · Shall we leave a tip? · Service is included.",
                ],
              },
            ],
          },
          drill: {
            mode: "ladder",
            title: "Ladder · in the restaurant",
            how: "Echo chunk → drill ×4 (Customer) → swap Waiter ×4 → next chunk · memory on 3 · record on 4 · assemble",
            bigIdea:
              "Same engine as Deciding where: Waiter ↔ Customer, one scene chunk at a time.",
            stages: [
              {
                type: "echo",
                label: "1 · Echo · Arrive",
                tip: "Repeat this chunk · then drill as Customer ×4 · swap Waiter ×4.",
                echo: [
                  {
                    en: "How many people is it?",
                    ru: "сколько вас человек?",
                    audio: "audio/drill/eat4-w-how-many.mp3?v=1",
                  },
                  {
                    en: "There are three of us.",
                    ru: "нас трое.",
                    audio: "audio/drill/eat4-c-three-of-us.mp3?v=1",
                  },
                  {
                    en: "And have you booked?",
                    ru: "а вы бронировали?",
                    audio: "audio/drill/eat4-w-have-you-booked.mp3?v=1",
                  },
                  {
                    en: "No. Is that a problem?",
                    ru: "нет. это проблема?",
                    audio: "audio/drill/eat4-c-no-problem.mp3?v=1",
                  },
                  {
                    en: "No, but do you mind waiting?",
                    ru: "нет, но вы не против подождать?",
                    audio: "audio/drill/eat4-w-mind-waiting.mp3?v=1",
                  },
                  {
                    en: "How long?",
                    ru: "сколько?",
                    audio: "audio/drill/eat4-c-how-long.mp3?v=1",
                  },
                  {
                    en: "Maybe ten or fifteen minutes.",
                    ru: "может, десять–пятнадцать минут.",
                    audio: "audio/drill/eat4-w-ten-fifteen.mp3?v=1",
                  },
                  {
                    en: "OK. That’s fine.",
                    ru: "ок. нормально.",
                    audio: "audio/drill/eat4-c-thats-fine.mp3?v=1",
                  },
                ],
              },
              {
                type: "dialogue",
                label: "2 · Drill · Arrive",
                tip: "Hear Waiter → say Customer BIG → Said. ×4. Then swap: you are Waiter.",
                youStartAs: "V",
                thenSwapTo: "S",
                roleNames: { S: "Waiter (W)", V: "Customer (C)" },
                partners: [
                  { name: "Maya", slot: "tonight", voice: "f" },
                  { name: "Leo", slot: "Friday", voice: "m" },
                  { name: "Sam", slot: "Saturday", voice: "f" },
                  { name: "Alex", slot: "Sunday", voice: "m" },
                ],
                turns: [
                  {
                    who: "S",
                    text: "How many people is it?",
                    audio: "audio/drill/eat4-w-how-many.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "There are three of us.",
                    audio: "audio/drill/eat4-c-three-of-us.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "And have you booked?",
                    audio: "audio/drill/eat4-w-have-you-booked.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "No. Is that a problem?",
                    audio: "audio/drill/eat4-c-no-problem.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "No, but do you mind waiting?",
                    audio: "audio/drill/eat4-w-mind-waiting.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "How long?",
                    audio: "audio/drill/eat4-c-how-long.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "Maybe ten or fifteen minutes.",
                    audio: "audio/drill/eat4-w-ten-fifteen.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "OK. That’s fine.",
                    audio: "audio/drill/eat4-c-thats-fine.mp3?v=1",
                  },
                ],
              },
              {
                type: "echo",
                label: "3 · Echo · Table",
                tip: "New chunk · table OK · high chair · menus.",
                echo: [
                  {
                    en: "Is this table here OK?",
                    ru: "этот столик вам подходит?",
                    audio: "audio/drill/eat4-w-table-ok.mp3?v=1",
                  },
                  {
                    en: "Yeah, this is fine. Thank you.",
                    ru: "да, нормально. спасибо.",
                    audio: "audio/drill/eat4-c-fine-thanks.mp3?v=1",
                  },
                  {
                    en: "Would you like a high chair for the little girl?",
                    ru: "вам нужен детский стульчик для девочки?",
                    audio: "audio/drill/eat4-w-high-chair.mp3?v=1",
                  },
                  {
                    en: "That’d be great. Thanks. He’s actually a boy, though!",
                    ru: "было бы здорово. спасибо. он на самом деле мальчик!",
                    audio: "audio/drill/eat4-c-high-chair-boy.mp3?v=1",
                  },
                  {
                    en: "Oh, I’m so sorry! Anyway, here are your menus. I’ll get the chair.",
                    ru: "ой, извините! вот ваши меню. я принесу стульчик.",
                    audio: "audio/drill/eat4-w-menus-chair.mp3?v=1",
                  },
                ],
              },
              {
                type: "dialogue",
                label: "4 · Drill · Table",
                tip: "Hear Waiter → say Customer · ×4 · then swap Waiter ×4.",
                youStartAs: "V",
                thenSwapTo: "S",
                roleNames: { S: "Waiter (W)", V: "Customer (C)" },
                partners: [
                  { name: "Maya", slot: "tonight", voice: "f" },
                  { name: "Leo", slot: "Friday", voice: "m" },
                  { name: "Sam", slot: "Saturday", voice: "f" },
                  { name: "Alex", slot: "Sunday", voice: "m" },
                ],
                turns: [
                  {
                    who: "S",
                    text: "Is this table here OK?",
                    audio: "audio/drill/eat4-w-table-ok.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "Yeah, this is fine. Thank you.",
                    audio: "audio/drill/eat4-c-fine-thanks.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "Would you like a high chair for the little girl?",
                    audio: "audio/drill/eat4-w-high-chair.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "That’d be great. Thanks. He’s actually a boy, though!",
                    audio: "audio/drill/eat4-c-high-chair-boy.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "Oh, I’m so sorry! Anyway, here are your menus. I’ll get the chair.",
                    audio: "audio/drill/eat4-w-menus-chair.mp3?v=1",
                  },
                ],
              },
              {
                type: "echo",
                label: "5 · Echo · Order",
                tip: "New chunk · order · vegetarian check · tap water · small plate.",
                echo: [
                  {
                    en: "Are you ready to order?",
                    ru: "вы готовы сделать заказ?",
                    audio: "audio/drill/eat4-w-ready-order.mp3?v=1",
                  },
                  {
                    en: "Not quite. Could you just give us two more minutes?",
                    ru: "ещё нет. можно нам ещё пару минут?",
                    audio: "audio/drill/eat4-c-two-minutes.mp3?v=1",
                  },
                  {
                    en: "Does it contain any meat? I’m vegetarian.",
                    ru: "там есть мясо? я вегетарианец / вегетарианка.",
                    audio: "audio/drill/eat4-c-veg-check.mp3?v=1",
                  },
                  {
                    en: "Just tap water, please, if possible.",
                    ru: "просто водопроводную воду, пожалуйста, если можно.",
                    audio: "audio/drill/eat4-c-tap-water.mp3?v=1",
                  },
                  {
                    en: "And could we have a small plate for our son?",
                    ru: "а можно маленькую тарелку для сына?",
                    audio: "audio/drill/eat4-c-small-plate.mp3?v=1",
                  },
                ],
              },
              {
                type: "dialogue",
                label: "6 · Drill · Order",
                tip: "Order chunk · main = {{slot}} (chicken/salmon/lamb/pasta) · ×4 · swap Waiter.",
                youStartAs: "V",
                thenSwapTo: "S",
                roleNames: { S: "Waiter (W)", V: "Customer (C)" },
                partners: [
                  { name: "Maya", slot: "chicken", voice: "f" },
                  { name: "Leo", slot: "salmon", voice: "m" },
                  { name: "Sam", slot: "lamb", voice: "f" },
                  { name: "Alex", slot: "pasta", voice: "m" },
                ],
                turns: [
                  {
                    who: "S",
                    text: "Are you ready to order?",
                    audio: "audio/drill/eat4-w-ready-order.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "Not quite. Could you just give us two more minutes?",
                    audio: "audio/drill/eat4-c-two-minutes.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "Yes, of course.",
                    audio: "audio/drill/eat4-w-of-course.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "Right. OK. Could I have the grilled squid for starters, please? And for my main course, I think I’ll have the {{slot}}.",
                    audioBySlot: {
                      chicken: "audio/drill/eat4-c-order-chicken.mp3?v=1",
                      salmon: "audio/drill/eat4-c-order-salmon.mp3?v=1",
                      lamb: "audio/drill/eat4-c-order-lamb.mp3?v=1",
                      pasta: "audio/drill/eat4-c-order-pasta.mp3?v=1",
                    },
                  },
                  {
                    who: "S",
                    text: "Uh-huh, and what kind of potatoes would you like?",
                    audio: "audio/drill/eat4-w-potatoes.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "Roast potatoes, please.",
                    audio: "audio/drill/eat4-c-roast.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "I’ll go for the aubergines stuffed with rice for my main course, please. And the soup of the day? Does it contain any meat? I’m vegetarian.",
                    audio: "audio/drill/eat4-c-veg-check.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "Yes. I’m afraid it’s got lamb in it.",
                    audio: "audio/drill/eat4-w-lamb-soup.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "Oh, OK. Well, I’ll just have the tomato and avocado salad, then. And could we get some water as well?",
                    audio: "audio/drill/eat4-c-salad-water.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "Of course. Sparkling or still?",
                    audio: "audio/drill/eat4-w-sparkling.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "Just tap water, please, if possible.",
                    audio: "audio/drill/eat4-c-tap-water.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "Sure.",
                    audio: "audio/drill/eat4-w-sure.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "And could we have a small plate for our son? We’d like to share our dishes with him.",
                    audio: "audio/drill/eat4-c-small-plate.mp3?v=1",
                  },
                ],
              },
              {
                type: "echo",
                label: "7 · Echo · Spill",
                tip: "New chunk · mess · cloth.",
                echo: [
                  {
                    en: "Oh, dear — what a mess!",
                    ru: "ой — какая лужа!",
                    audio: "audio/drill/eat4-c-what-mess.mp3?v=1",
                  },
                  {
                    en: "I’ll get the waiter. Er, excuse me. I’m really sorry, but could you get us a cloth, please? My son’s dropped some water on the floor.",
                    ru: "я позову официанта… извините, можно тряпку? сын пролил воду.",
                    audio: "audio/drill/eat4-c-cloth.mp3?v=1",
                  },
                  {
                    en: "Certainly madam. I’ll just go and get one.",
                    ru: "конечно. сейчас принесу.",
                    audio: "audio/drill/eat4-w-certainly-cloth.mp3?v=1",
                  },
                  {
                    en: "Thank you.",
                    ru: "спасибо.",
                    audio: "audio/drill/eat4-c-thank-you.mp3?v=1",
                  },
                ],
              },
              {
                type: "dialogue",
                label: "8 · Drill · Spill",
                tip: "Customer starts · ×4 · then swap Waiter ×4.",
                youStartAs: "V",
                thenSwapTo: "S",
                roleNames: { S: "Waiter (W)", V: "Customer (C)" },
                partners: [
                  { name: "Maya", slot: "tonight", voice: "f" },
                  { name: "Leo", slot: "Friday", voice: "m" },
                  { name: "Sam", slot: "Saturday", voice: "f" },
                  { name: "Alex", slot: "Sunday", voice: "m" },
                ],
                turns: [
                  {
                    who: "V",
                    text: "Oh, dear — what a mess!",
                    audio: "audio/drill/eat4-c-what-mess.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "I’ll get the waiter. Er, excuse me. I’m really sorry, but could you get us a cloth, please? My son’s dropped some water on the floor.",
                    audio: "audio/drill/eat4-c-cloth.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "Certainly madam. I’ll just go and get one.",
                    audio: "audio/drill/eat4-w-certainly-cloth.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "Thank you.",
                    audio: "audio/drill/eat4-c-thank-you.mp3?v=1",
                  },
                ],
              },
              {
                type: "echo",
                label: "9 · Echo · Dessert & bill",
                tip: "Last chunk · full · coffee · bill · tip · service included.",
                echo: [
                  {
                    en: "Would you like to see the dessert menu?",
                    ru: "хотите меню десертов?",
                    audio: "audio/drill/eat4-w-dessert.mp3?v=1",
                  },
                  {
                    en: "I’m OK, thanks. I’m really full.",
                    ru: "мне ничего, спасибо. я очень сыт / сыта.",
                    audio: "audio/drill/eat4-c-really-full.mp3?v=1",
                  },
                  {
                    en: "No, no. I couldn’t eat another thing. It was lovely, though. Could I just have a coffee, please?",
                    ru: "нет. я больше ничего не могу. было чудесно. можно кофе?",
                    audio: "audio/drill/eat4-c-couldnt-eat.mp3?v=1",
                  },
                  {
                    en: "Could we have the bill, please?",
                    ru: "можно счёт, пожалуйста?",
                    audio: "audio/drill/eat4-c-bill.mp3?v=1",
                  },
                  {
                    en: "That’s very reasonable, isn’t it? Shall we leave a tip?",
                    ru: "очень разумная цена, да? оставим чаевые?",
                    audio: "audio/drill/eat4-c-tip.mp3?v=1",
                  },
                  {
                    en: "No, look. Service is included.",
                    ru: "нет, смотри. обслуживание включено.",
                    audio: "audio/drill/eat4-c-service.mp3?v=1",
                  },
                  {
                    en: "Wow. Then that really is good value for money.",
                    ru: "вау. тогда это действительно отличное соотношение цены и качества.",
                    audio: "audio/drill/eat4-c-good-value.mp3?v=1",
                  },
                ],
              },
              {
                type: "dialogue",
                label: "10 · Drill · Dessert & bill",
                tip: "Hear Waiter dessert → Customer · bill · tip · ×4 · swap Waiter.",
                youStartAs: "V",
                thenSwapTo: "S",
                roleNames: { S: "Waiter (W)", V: "Customer (C)" },
                partners: [
                  { name: "Maya", slot: "tonight", voice: "f" },
                  { name: "Leo", slot: "Friday", voice: "m" },
                  { name: "Sam", slot: "Saturday", voice: "f" },
                  { name: "Alex", slot: "Sunday", voice: "m" },
                ],
                turns: [
                  {
                    who: "S",
                    text: "Would you like to see the dessert menu?",
                    audio: "audio/drill/eat4-w-dessert.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "I’m OK, thanks. I’m really full.",
                    audio: "audio/drill/eat4-c-really-full.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "No, no. I couldn’t eat another thing. It was lovely, though. Could I just have a coffee, please?",
                    audio: "audio/drill/eat4-c-couldnt-eat.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "Could we have the bill, please?",
                    audio: "audio/drill/eat4-c-bill.mp3?v=1",
                  },
                  {
                    who: "S",
                    text: "Yes, of course.",
                    audio: "audio/drill/eat4-w-yes-bill.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "That’s very reasonable, isn’t it? Shall we leave a tip?",
                    audio: "audio/drill/eat4-c-tip.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "No, look. Service is included.",
                    audio: "audio/drill/eat4-c-service.mp3?v=1",
                  },
                  {
                    who: "V",
                    text: "Wow. Then that really is good value for money. We should come here again sometime.",
                    audio: "audio/drill/eat4-c-good-value.mp3?v=1",
                  },
                ],
              },
              {
                type: "choice",
                label: "11 · All together",
                tip: "Full restaurant night · scene cards · stems + hint.",
                hintDefault: true,
                options: [
                  {
                    title: "Full restaurant",
                    prompt:
                      "Run arrive → table → order → spill → bill with a partner.",
                    cover: [
                      "1 Arrive · no booking · wait",
                      "2 Table · high chair",
                      "3 Order · vegetarian · tap water",
                      "4 Spill · cloth",
                      "5 Dessert · bill · tip · service included",
                    ],
                    stems: [
                      "Have you booked?",
                      "Do you mind waiting?",
                      "Is this table here OK?",
                      "Would you like a high chair…?",
                      "Are you ready to order?",
                      "Could you just give us two more minutes?",
                      "Does it contain any meat? I’m vegetarian.",
                      "Just tap water, please, if possible.",
                      "Could you get us a cloth, please?",
                      "I couldn’t eat another thing.",
                      "Could we have the bill, please?",
                      "Shall we leave a tip?",
                      "Service is included",
                      "That really is good value for money",
                    ],
                    model:
                      "W: How many people… booked? — C: three · no · how long? — … table OK · high chair… — order · two more minutes · vegetarian · tap water · small plate — spill · cloth — dessert? · really full · bill · tip? · service included · good value for money.",
                  },
                ],
              },
            ],
          },
          time: "12–16 min",
        },
      ],
      finale: {
        prompt:
          "Improv a full night out: decide where (Beats 2–3) · talk about the place (Beat 1) · then play a short restaurant scene (Beat 4).",
      },
      homework: {
        note:
          "Record 45–60 s: arrive (no booking), order one dish + ask about meat/water, then ask for the bill. Use 4+ tape phrases.",
      },
    },
    {
      id: "relax",
      num: 5,
      title: "Relax",
      icon: "🧘",
      accent: "#a78bfa",
      tint: "rgba(167, 139, 250, 0.16)",
      avatar: "img/avatars/relax.svg",
      blurb: "Free time · sports · plans · stress vs chill",
      goals: [
        "talk about activities, places and equipment",
        "introduce negative comments",
        "make plans and arrange what to do",
        "talk about watching and doing different sports",
        "compare three or more things",
        "discuss relaxing and stressful experiences",
      ],
    },
    {
      id: "family-friends",
      num: 6,
      title: "Family and friends",
      icon: "🤝",
      accent: "#a3e635",
      tint: "rgba(163, 230, 53, 0.16)",
      avatar: "img/avatars/family-friends.svg",
      blurb: "People · character · similarities · social media",
      goals: [
        "describe people you know",
        "explain who people are – and which people you mean",
        "ask and answer common questions",
        "discuss similarities and differences",
        "describe character and abilities",
        "discuss uses of social media and online habits",
      ],
    },
    {
      id: "your-place",
      num: 7,
      title: "Your place",
      icon: "🏠",
      accent: "#22d3ee",
      tint: "rgba(34, 211, 238, 0.16)",
      avatar: "img/avatars/your-place.svg",
      blurb: "Hometown · area · guests · permission",
      goals: [
        "explain where you are from",
        "describe your town and area",
        "ask useful questions when staying with people",
        "ask for permission to do things",
        "show guests round your house or apartment",
      ],
    },
    {
      id: "education",
      num: 8,
      title: "Education",
      icon: "🎓",
      accent: "#2dd4bf",
      tint: "rgba(45, 212, 191, 0.16)",
      avatar: "img/avatars/education.svg",
      blurb: "School & uni · futures · systems · cheating",
      goals: [
        "describe your academic experiences",
        "respond with surprise to negative sentences",
        "talk about future situations",
        "talk about the education system in your country",
        "discuss cheating in education – and in other areas of life",
      ],
    },
    {
      id: "mind-body",
      num: 9,
      title: "Mind and body",
      icon: "💊",
      accent: "#94a3b8",
      tint: "rgba(148, 163, 184, 0.18)",
      avatar: "img/avatars/mind-body.svg",
      blurb: "Illness · advice · instructions · medicines",
      goals: [
        "describe common illnesses and their symptoms",
        "give advice and understand medical advice",
        "ask and answer common questions about illness",
        "give instructions",
        "understand instructions on medicines",
      ],
    },
    {
      id: "places-to-stay",
      num: 10,
      title: "Places to stay",
      icon: "🏨",
      accent: "#67e8f9",
      tint: "rgba(103, 232, 249, 0.16)",
      avatar: "img/avatars/places-to-stay.svg",
      blurb: "Hotels · booking · problems · past habits",
      goals: [
        "describe places you stayed in",
        "book somewhere to stay",
        "apologise for bad news",
        "explain and deal with problems in hotels",
        "talk about imagined situations",
        "talk about past habits",
      ],
    },
    {
      id: "science-nature",
      num: 11,
      title: "Science and nature",
      icon: "🔬",
      accent: "#c4b5fd",
      tint: "rgba(196, 181, 253, 0.16)",
      avatar: "img/avatars/science-nature.svg",
      blurb: "Weather · news · animals · research · headlines",
      goals: [
        "talk about the weather",
        "discuss and respond to news stories",
        "talk about animals",
        "tell better stories",
        "talk about scientists and research",
        "understand newspaper headlines",
      ],
    },
    {
      id: "on-the-phone",
      num: 12,
      title: "On the phone",
      icon: "📱",
      accent: "#fb7185",
      tint: "rgba(251, 113, 133, 0.16)",
      avatar: "img/avatars/on-the-phone.svg",
      blurb: "Calls · messages · reporting · new words",
      goals: [
        "talk about different kinds of phones",
        "give and take phone messages",
        "ask for people and explain where people are",
        "work out the meaning of new words",
        "explain stories and report crimes",
        "report what people said",
      ],
    },
    {
      id: "culture",
      num: 13,
      title: "Culture",
      icon: "🎬",
      accent: "#4ade80",
      tint: "rgba(74, 222, 128, 0.16)",
      avatar: "img/avatars/culture.svg",
      blurb: "Films · feelings · books & music · how long…",
      goals: [
        "describe different kinds of films",
        "say what you have heard about things",
        "talk about how things make you feel",
        "talk about the film industry and culture",
        "discuss your favourite music, books or films",
        "ask how long people have been doing things",
      ],
    },
    {
      id: "stuff",
      num: 14,
      title: "Stuff",
      icon: "📦",
      accent: "#fdba74",
      tint: "rgba(253, 186, 116, 0.16)",
      avatar: "img/avatars/stuff.svg",
      blurb: "Objects · where things are · gifts · planet",
      goals: [
        "talk about common household objects",
        "explain where things are in a house",
        "describe things, people and places that you don't know the names of",
        "talk about food shopping",
        "discuss some environmental issues",
        "talk about suitable gifts",
      ],
    },
    {
      id: "money",
      num: 15,
      title: "Money",
      icon: "💰",
      accent: "#86efac",
      tint: "rgba(134, 239, 172, 0.16)",
      avatar: "img/avatars/money.svg",
      blurb: "Economy · prices · numbers · money problems",
      goals: [
        "talk about the economy",
        "use time phrases to say when things happen",
        "compare prices",
        "talk about money issues and problems",
        "say different kinds of numbers",
      ],
    },
    {
      id: "events",
      num: 16,
      title: "Events",
      icon: "🎉",
      accent: "#fde047",
      tint: "rgba(253, 224, 71, 0.16)",
      avatar: "img/avatars/events.svg",
      blurb: "Parties · history · dates · special days",
      goals: [
        "describe different kinds of parties and events",
        "ask and answer linked questions",
        "explain major historical events in a country's history",
        "say different dates",
        "talk about special days in your life",
      ],
    },
  ];

  function getUnit(id) {
    for (var i = 0; i < UNITS.length; i++) {
      if (UNITS[i].id === id) return UNITS[i];
    }
    return null;
  }

  /** Same shell beats as Speaking Intensive (Eating Out etc.) — names filled later by you */
  function defaultBeats(n) {
    n = n || 4;
    var out = [];
    for (var i = 1; i <= n; i++) {
      out.push({
        id: "beat-" + i,
        label: "Beat " + i,
        teacher: "Read → cool words → talk. Content later.",
        blocks: ["read", "context"],
        phrases: [],
        read: {
          letter: String(i),
          title: "Text coming soon",
          html: "<p>Drop a short reading passage here for this beat.</p>",
        },
        speak: {
          mission: "Answer in English · use the tape phrases.",
          questions: ["What stood out — and why?"],
        },
      });
    }
    return out;
  }

  var BLOCK_META = {
    read: {
      title: "Read the extract",
      hint: "Notice the highlighted chunks in context",
    },
    phrases: {
      title: "Notice these lines",
      hint: "Cool chunks · on the tape",
    },
    context: {
      title: "Meaning & lexis",
      hint: "How natives use it",
    },
    speak: {
      title: "Talk about it",
      hint: "Discussion · steal tape phrases",
    },
    vocab: {
      title: "Vocabulary",
      hint: "Word pairs · gaps",
    },
  };

  /** Intensive-shaped theme so intensive-lesson.js can run unchanged */
  function toTheme(u) {
    if (!u) return null;
    var hasCustomBeats = !!(u.beats && u.beats.length);
    return {
      id: u.id,
      num: u.num,
      title: u.title,
      icon: u.icon,
      tagline: u.tagline || u.blurb || "",
      goal: u.goal || {
        title: "Speaking goals · what they leave with",
        learn: u.goals || [],
        teacherTip:
          "Paste beat names and texts when ready — until then this is the Intensive shell (Beat 1–4).",
      },
      beats: hasCustomBeats ? u.beats : defaultBeats(4),
      finale: u.finale || {
        prompt:
          "Improv with the tape — fill beats when you paste the pack.",
      },
      homework: u.homework || {
        note: "Reread · 45 s voice with 2 tape phrases.",
      },
    };
  }

  function getTheme(id) {
    return toTheme(getUnit(id));
  }

  function buildFlow(theme) {
    var beats = (theme && theme.beats) || defaultBeats(4);
    var screens = beats.map(function (b, i) {
      return {
        kind: "beat",
        id: b.id || "beat-" + (i + 1),
        label: b.label || "Beat " + (i + 1),
        short: String(i + 1),
        teacher: b.teacher || "",
        blocks: b.blocks || ["read", "context"],
        phrases: b.phrases || [],
        read: b.read || null,
        context: b.context || null,
        speak: b.speak || null,
        drill: b.drill || null,
        vocab: b.vocab || null,
        optional: !!b.optional,
        time: b.time || "8–12 min",
      };
    });
    screens.push({
      kind: "finale",
      id: "finale",
      label: "Improv",
      short: "★",
      teacher:
        "Cool words stay on screen. Improvise — use as many tape phrases as you can.",
      prompt:
        (theme && theme.finale && theme.finale.prompt) ||
        "Improvise with the tape phrases.",
      questions: (theme && theme.finale && theme.finale.questions) || [],
      time: "10–15 min",
    });
    screens.push({
      kind: "homework",
      id: "homework",
      label: "Homework",
      short: "HW",
      teacher: "Take-home speaking — text + voice.",
      note:
        (theme && theme.homework && theme.homework.note) ||
        "Reread one beat · 45–60 s voice with 2 tape phrases.",
      questions: (theme && theme.homework && theme.homework.questions) || [],
      time: "15–20 min",
    });
    return screens;
  }

  function allPhrases(theme) {
    var list = [];
    var seen = {};
    ((theme && theme.beats) || []).forEach(function (b) {
      (b.phrases || []).forEach(function (p) {
        var en =
          p && typeof p === "object"
            ? String(p.en || p.phrase || p.text || "")
            : String(p || "");
        var k = en.toLowerCase();
        if (!k || seen[k]) return;
        seen[k] = 1;
        list.push(p);
      });
    });
    return list;
  }

  global.PRE_INT_UNITS = UNITS;
  global.PRE_INT_getUnit = getUnit;
  global.PRE_INT_getTheme = getTheme;

  /* intensive-lesson.js expects these names */
  global.B2_INTENSIVE_BLOCK_META = BLOCK_META;
  global.B2_INTENSIVE_THEMES = UNITS.map(toTheme);
  global.B2_INTENSIVE_getTheme = getTheme;
  global.B2_INTENSIVE_buildFlow = buildFlow;
  global.B2_INTENSIVE_allPhrases = allPhrases;
  global.B2_INTENSIVE_STEPS = [];
})(typeof window !== "undefined" ? window : globalThis);
