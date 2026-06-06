/**
 * EGE Speaking · Task 4 — model monologues + criteria (patch after unit loads).
 */
(function (w) {
  var pack = w.__EGE_SPEAKING_TASK4_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;

  var MODELS = {
    "u1-studying-languages": {
      modelMonologue:
        "Hi Alex! I\u2019ve found two photos for our school project \u201cStudying foreign languages\u201d and I\u2019d like to tell you why I think they\u2019ll work perfectly.\n\n" +
        "The first picture shows a group lesson in a bright classroom. There is a teacher at the whiteboard and several students sitting around a table with books and notebooks. They look as if they are practising speaking or doing a task together as a class.\n\n" +
        "In the second photo, a teenager is studying alone at home. He is wearing headphones and working on a laptop, and there is a dog resting beside the desk. It is clearly an online or self-study way of learning a language.\n\n" +
        "The main difference is that in the first image learning is social and guided by a teacher, while in the second one the student is independent and uses technology at home. Both photos still show the same topic \u2014 different ways of studying foreign languages.\n\n" +
        "I believe these illustrations are an excellent choice for our project because they show traditional classroom learning and modern online learning side by side.\n\n" +
        "One advantage of studying in a classroom is that you can ask the teacher questions immediately and practise speaking with classmates. Another plus is that the teacher controls the pace and helps you avoid basic mistakes.\n\n" +
        "Online learning also has strong points. You can study whenever you want and choose apps or courses that fit your level. It is often more flexible if you have a busy schedule.\n\n" +
        "However, classroom lessons can be tiring because you have to follow the whole group\u2019s speed, and travelling to school takes extra time. Online study, in contrast, may feel lonely and it is easier to get distracted by social media or games at home.\n\n" +
        "As for me, I would prefer a mix, but if I had to choose one way, I\u2019d go for classroom lessons for speaking practice, because live communication motivates me and I learn pronunciation better when the teacher listens to me.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие другу; кратко Photo 1 и Photo 2; главное различие (класс vs дом/онлайн); почему обе картинки подходят к теме \u00abStudying foreign languages\u00bb."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого способа)",
          criteria:
            "Classroom: вопросы учителю, speaking с одноклассниками, контроль темпа. Online: гибкий график, свой уровень, удобно при занятости."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого способа)",
          criteria:
            "Classroom: темп группы, дорога/время. Online: одиночество, отвлечения (телефон, игры), сложнее с произношением без обратной связи."
        },
        {
          title: "4 · Opinion \u2014 prefer + why",
          criteria:
            "As for me / I would prefer \u2026 + чёткое because: личный аргумент (speaking, мотивация, pronunciation, дисциплина и т.д.)."
        }
      ],
      tips: [
        "Начните с голосового приветствия другу \u2014 это Task 4, не монолог экзаменатору.",
        "Описывайте фото через there is/are, look as if, seem to \u2014 не только Present Continuous.",
        "Различия привязывайте к теме проекта (ways of studying), а не \u00abна улице / в комнате\u00bb.",
        "Advantages и disadvantages \u2014 по одному блоку на classroom и online (минимум 4 пункта в сумме).",
        "Финал: prefer + because + прощание в стиле ЕГЭ (feedback + Bye).",
        "Цель \u2014 12\u201315 предложений за 3 минуты, без длинных пауз."
      ]
    },
    "u2-modern-inventions": {
      modelMonologue:
        "Hi Kate! I\u2019ve just found two photos for our school project \u201cModern inventions\u201d and I\u2019d like to tell you why I chose them.\n\n" +
        "The first picture shows a young woman kneeling in front of an open washing machine and putting clothes inside. She looks cheerful, as if doing laundry has become quick and easy thanks to this appliance.\n\n" +
        "In the second photo, there is a woman in a kitchen standing next to a multicooker with the lid open. She is holding a recipe and seems to be preparing a meal with this modern device instead of using a traditional stove.\n\n" +
        "The main difference is that the first invention is designed for washing clothes, while the second one is used for cooking food. However, both photos show how technology saves time and effort in everyday household chores.\n\n" +
        "I think these illustrations are a great choice for our project because they represent two different areas of home life where modern inventions have changed people\u2019s routines.\n\n" +
        "One advantage of a washing machine is that you don\u2019t have to wash clothes by hand, so you save a lot of time and energy. Another plus is that it cleans large loads evenly and you can do something else while it is working.\n\n" +
        "A multicooker also has clear benefits. It can cook several dishes automatically and often keeps food warm, which is convenient for busy families. Some models even have programmes for soup, porridge or stew.\n\n" +
        "Still, both inventions have disadvantages. A washing machine uses electricity and water, and if it breaks down, repairs can be expensive. A multicooker takes up space on the counter and you still need to prepare ingredients and wash it after cooking.\n\n" +
        "As for me, I\u2019d prefer a washing machine because I do laundry more often than I cook complicated meals, and I really hate hand-washing. For me, clean clothes without extra effort matter more in daily life.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 washing machine / laundry; Photo 2 \u2014 multicooker / cooking; различие (стирка vs готовка); обе картинки про modern inventions в быту."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого типа)",
          criteria:
            "Washing machine: экономия времени, не стирать вручную, большие загрузки. Multicooker: автоматическое приготовление, программы, удобство для занятых."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого типа)",
          criteria:
            "Washing machine: электричество/вода, поломки/ремонт. Multicooker: место на кухне, подготовка продуктов, мытьё после готовки."
        },
        {
          title: "4 · Opinion \u2014 you\u2019d prefer + why",
          criteria:
            "I\u2019d prefer \u2026 because \u2026 \u2014 личный аргумент (как часто пользуешься, что важнее в daily life)."
        }
      ],
      tips: [
        "Тема проекта \u2014 modern inventions, не просто \u00abдве женщины дома\u00bb.",
        "Photo 1 = washing machine (laundry), Photo 2 = multicooker (cooking) \u2014 разные типы изобретений.",
        "Advantages/disadvantages \u2014 отдельно про каждый прибор, не смешивай в одну кучу.",
        "В opinion используй формулировку из задания: which invention you\u2019d prefer and why.",
        "12\u201315 предложений, голосовое сообщение другу (Hi \u2026 / feedback + Bye)."
      ]
    },
    "u3-places-where-people-live": {
      modelMonologue:
        "Hi Sam! I\u2019ve found two photos for our school project \u201cPlaces where people live\u201d and I\u2019d like to explain why I think they are suitable.\n\n" +
        "The first picture shows a courtyard between tall apartment blocks. There is a swing and a bench, and a child is playing on the swing. It looks like a typical place where city families spend time near their flats.\n\n" +
        "In the second photo, a family is standing in the yard of a detached house. The man is holding a shovel, as if he has been gardening, and there is plenty of open space and greenery around the building.\n\n" +
        "The main difference is that the first image shows life in a block of flats in an urban area, while the second one shows a private house in a quieter, more rural setting. Both pictures still illustrate where people can live and spend their daily life.\n\n" +
        "I believe these photos are a good choice for our project because they compare two common types of housing in Russia and show how the environment around a home can be different.\n\n" +
        "One advantage of living in a flat in the city is that shops, schools and transport are usually nearby, so you save time on travelling. Another plus is that children can play in a shared yard and meet neighbours easily.\n\n" +
        "Living in a private house also has benefits. You often have more space, fresh air and a garden where you can relax or grow plants. It can feel calmer and more private than a busy courtyard.\n\n" +
        "However, city flats have drawbacks too. There may be noise from neighbours, limited space inside the flat and crowded playgrounds. A house in the countryside or suburbs can be expensive to maintain, and you may need a car to reach shops or school.\n\n" +
        "As for me, I prefer living in a city flat because my school and friends are close, and I don\u2019t want to spend hours getting to the centre every day. For my lifestyle, convenience matters most.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 двор + многоэтажки / city flat; Photo 2 \u2014 частный дом + семья / rural-suburban; различие привязано к places where people live."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого места)",
          criteria:
            "City flat: инфраструктура рядом, экономия времени, детская площадка во дворе. House: больше пространства, воздух, сад, тишина/приватность."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого места)",
          criteria:
            "Flat: шум соседей, мало места, crowded yard. House: расходы на содержание, нужна машина, далеко до школы/магазинов."
        },
        {
          title: "4 · Opinion \u2014 prefer + why",
          criteria:
            "I prefer \u2026 because \u2026 \u2014 личный аргумент (школа, друзья, удобство, природа, семья)."
        }
      ],
      tips: [
        "Тема \u2014 places of living (flat vs house), а не просто \u00abдвор и качели\u00bb.",
        "Различия объясняйте через тип жилья: urban block of flats vs detached house.",
        "Advantages и disadvantages \u2014 отдельно про город и про дом/пригород.",
        "Концовка по образцу ЕГЭ: These were my thoughts \u2026 feedback \u2026 Bye!",
        "12\u201315 предложений, говорите непрерывно."
      ]
    },
    "u4-protecting-environment": {
      modelMonologue:
        "Hi Maria! I\u2019ve found two photos for our school project \u201cProtecting the environment\u201d and I\u2019d like to explain why I chose them.\n\n" +
        "The first picture shows a group of young people in a park or green area. They are bending down and collecting litter into bags, as if they are taking part in a clean-up or volunteering event.\n\n" +
        "In the second photo, there is a person standing at an indoor recycling station. They are putting waste into separate containers for plastic bottles and paper, which shows careful sorting at home or in a public place.\n\n" +
        "The main difference is that in the first image people protect nature through direct action outdoors, while in the second one an individual reduces pollution by recycling everyday rubbish. Both photos still show practical ways of caring for the environment.\n\n" +
        "I think these illustrations are perfect for our project because they represent community volunteering and personal recycling \u2014 two common approaches to environmental protection.\n\n" +
        "One advantage of volunteer clean-ups is that they quickly make parks and streets cleaner and raise awareness among local residents. Another plus is that young people learn to work as a team and feel they can really change their neighbourhood.\n\n" +
        "Recycling also has clear benefits. It saves natural resources and reduces the amount of waste sent to landfills. When people sort plastic and paper regularly, it becomes a useful habit for the whole family.\n\n" +
        "However, both ways have disadvantages. Clean-ups depend on free time and good weather, and the effect may be short-term if people keep dropping litter. Recycling requires extra effort and not every area has convenient bins or clear instructions.\n\n" +
        "As for me, I prefer volunteering in clean-ups because I enjoy being outdoors and seeing immediate results. For me, working together with classmates is more motivating than sorting rubbish alone at home.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 volunteer clean-up outdoors; Photo 2 \u2014 recycling/sorting waste; различие (прямое действие vs переработка); связь с protecting the environment."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого способа)",
          criteria:
            "Clean-up: чистота парка, awareness, teamwork. Recycling: экономия ресурсов, меньше landfill, полезная привычка."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого способа)",
          criteria:
            "Clean-up: нужно время, погода, эффект может быть кратковременным. Recycling: лишние усилия, не везде есть удобные контейнеры."
        },
        {
          title: "4 · Opinion \u2014 prefer + why",
          criteria:
            "I prefer \u2026 because \u2026 \u2014 личный аргумент (outdoors, immediate results, teamwork, habit at home)."
        }
      ],
      tips: [
        "Тема \u2014 ways of protecting the environment, не просто \u00abлюди на улице / в помещении\u00bb.",
        "Photo 1 = volunteering / litter pick-up; Photo 2 = recycling bins.",
        "Advantages и disadvantages \u2014 отдельно про каждый способ.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!",
        "12\u201315 предложений, говорите непрерывно."
      ]
    },
    "u5-sports-for-every-season": {
      modelMonologue:
        "Hi Dan! I\u2019ve found two photos for our school project \u201cSports for every season\u201d and I\u2019d like to tell you why I picked them.\n\n" +
        "The first picture shows a woman playing tennis on an outdoor court. She is holding a racket and looks ready to hit the ball, which makes me think of a warm-weather sport people enjoy in spring or summer.\n\n" +
        "In the second photo, there are people playing ice hockey on a frozen outdoor rink. You can see sticks, a small goal and snow around, so it is clearly a typical winter activity in cold countries like Russia.\n\n" +
        "The main difference is that tennis is usually played when the weather is mild and sunny, while ice hockey needs ice and low temperatures. However, both photos show how people can stay active in different seasons.\n\n" +
        "I believe these illustrations are a great choice for our project because they compare a summer sport and a winter sport side by side.\n\n" +
        "One advantage of tennis is that it improves coordination and stamina, and you can play it with a friend or in pairs. Another plus is that it does not require heavy equipment \u2014 just a racket, a ball and a court.\n\n" +
        "Ice hockey also has strong points. It develops speed, teamwork and reaction, and for many teenagers in Russia it is a popular way to spend winter weekends with classmates.\n\n" +
        "Still, both kinds of sports have disadvantages. Tennis depends on good weather and an available court, which may be expensive or far from home. Ice hockey needs special skates, protective gear and safe ice, so it can cost more and be harder to organise.\n\n" +
        "As for me, I prefer tennis because I am not very confident on skates and I like playing outdoors when it is warm. For my lifestyle, a summer sport feels more comfortable and easier to practise regularly.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 tennis / warm season; Photo 2 \u2014 ice hockey / winter; различие через сезон и условия; связь с sports for every season."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого вида спорта)",
          criteria:
            "Tennis: coordination, stamina, можно играть вдвоём, простое оборудование. Hockey: speed, teamwork, популярен зимой в России."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого вида спорта)",
          criteria:
            "Tennis: погода, доступ к корту, стоимость. Hockey: коньки, защита, безопасный лёд, организация/цена."
        },
        {
          title: "4 · Opinion \u2014 prefer + why",
          criteria:
            "I prefer \u2026 because \u2026 \u2014 личный аргумент (сезон, навыки, комфорт, регулярность)."
        }
      ],
      tips: [
        "Тема \u2014 sports for different seasons, не просто \u00abдва вида спорта\u00bb.",
        "Photo 1 = tennis (summer/warm); Photo 2 = ice hockey (winter/cold).",
        "Различия привязывайте к сезону и условиям, а не только к \u00abна корте / на льду\u00bb.",
        "Advantages и disadvantages \u2014 отдельно про tennis и hockey.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!"
      ]
    },
    "u6-food-choices": {
      modelMonologue:
        "Hi Lisa! I\u2019ve found two photos for our school project \u201cFood choices\u201d and I\u2019d like to explain why I think they work well.\n\n" +
        "The first picture shows a large hamburger with several layers and some french fries in the background. It looks like typical fast food that many teenagers buy when they are in a hurry.\n\n" +
        "In the second photo, a person is holding a big bowl of fresh salad with green leaves and vegetables. It clearly represents a healthy, light meal that people choose when they want to eat more natural food.\n\n" +
        "The main difference is that the first image shows processed fast food that is often high in fat and calories, while the second one shows homemade-style healthy food full of vitamins. Both photos still illustrate how we decide what to eat every day.\n\n" +
        "I believe these illustrations are perfect for our project because they compare junk food and healthy food \u2014 two opposite types of diet many students discuss at school.\n\n" +
        "One advantage of fast food is that it saves time: you can order a burger and eat it on the way without cooking. Another plus is that it often tastes good and is easy to find in any city.\n\n" +
        "Healthy food like salads also has benefits. It gives you energy without making you feel heavy, and fresh vegetables help your body stay fit and support your immune system.\n\n" +
        "However, both types of food have disadvantages. Fast food can be bad for your health if you eat it too often, and it may contain too much salt and sugar. Salads take time to prepare, fresh ingredients cost more, and a light meal may not keep you full for long if you have a busy day.\n\n" +
        "As for me, I prefer healthy food because I do sport twice a week and I want to feel energetic at school. I still eat fast food sometimes, but a fresh salad is my usual choice.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 burger / fast food; Photo 2 \u2014 salad / healthy food; различие (junk vs healthy); связь с food choices."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого типа)",
          criteria:
            "Fast food: быстро, удобно, вкусно, доступно. Healthy food: vitamins, energy, fit body, immune system."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого типа)",
          criteria:
            "Fast food: вред при частом употреблении, salt/sugar. Salad: время готовки, цена, может не насытить."
        },
        {
          title: "4 · Opinion \u2014 prefer + why",
          criteria:
            "I prefer \u2026 because \u2026 \u2014 личный аргумент (sport, energy, habit, иногда fast food)."
        }
      ],
      tips: [
        "Тема \u2014 food choices (fast food vs healthy), не просто \u00abеда на столе\u00bb.",
        "Photo 1 = hamburger + fries; Photo 2 = salad bowl.",
        "Advantages и disadvantages \u2014 отдельно про каждый тип еды.",
        "Можно упомянуть teenagers / school context \u2014 уместно для проекта.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!"
      ]
    },
    "u7-keeping-fit": {
      modelMonologue:
        "Hi Tom! I\u2019ve found two photos for our school project \u201cKeeping fit\u201d and I\u2019d like to explain why I chose them.\n\n" +
        "The first picture shows several children jumping and splashing in water outdoors. They look full of energy, as if they are playing and exercising at the same time in a pool or by the sea.\n\n" +
        "In the second photo, there is a group of adults in a bright fitness studio. They are sitting on mats and doing stretching or yoga exercises together under the guidance of an instructor.\n\n" +
        "The main difference is that in the first image people keep fit through informal outdoor activity and fun, while in the second one they follow an organised indoor class. Both photos still show different ways of staying healthy and active.\n\n" +
        "I think these illustrations are perfect for our project because they compare spontaneous water play and structured group training.\n\n" +
        "One advantage of active outdoor play is that it feels natural and enjoyable, so children and teenagers may exercise longer without noticing tiredness. Another plus is fresh air and sunlight, which are good for mood and general health.\n\n" +
        "Group fitness or yoga classes also have benefits. A trainer can correct your movements and help you avoid injury, and regular classes make it easier to build a stable habit.\n\n" +
        "However, both ways have disadvantages. Outdoor water activities depend on the season and weather, and they may not suit everyone. Indoor classes often require a membership fee and fixed timetable, which can be difficult if you are busy with school.\n\n" +
        "As for me, I prefer organised fitness classes because I need a clear plan and a coach who motivates me. For my character, structured training works better than playing in water from time to time.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 water play outdoors; Photo 2 \u2014 yoga/fitness class indoors; различие (informal vs organised); связь с keeping fit."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого способа)",
          criteria:
            "Outdoor play: fun, fresh air, sunlight, не замечаешь усталости. Indoor class: trainer, безопасность, stable habit."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого способа)",
          criteria:
            "Outdoor: погода, сезон, не для всех. Indoor: fee, fixed timetable, school workload."
        },
        {
          title: "4 · Opinion \u2014 prefer + why",
          criteria:
            "I prefer \u2026 because \u2026 \u2014 личный аргумент (plan, coach, character, habit)."
        }
      ],
      tips: [
        "Тема \u2014 ways of keeping fit, не просто \u00abлюди занимаются\u00bb.",
        "Photo 1 = active water play outdoors; Photo 2 = yoga/fitness class indoors.",
        "Различия: spontaneous vs organised, outdoor vs indoor.",
        "Advantages и disadvantages \u2014 отдельно про каждый способ.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!"
      ]
    },
    "u8-birthday-celebrations": {
      modelMonologue:
        "Hi Emma! I\u2019ve found two photos for our school project \u201cBirthday celebrations\u201d and I\u2019d like to tell you why I picked them.\n\n" +
        "The first picture shows a small family sitting at a table at home. There is a birthday cake with candles, and parents with two children look as if they are celebrating quietly together.\n\n" +
        "In the second photo, a large group of children are having a party. There are balloons, decorations and a long table with snacks, and everyone seems excited and ready to have fun with friends.\n\n" +
        "The main difference is that the first celebration is intimate and family-centred, while the second one is a big social event with many classmates or neighbours. Both photos still show how people can mark a birthday in different ways.\n\n" +
        "I believe these illustrations are a great choice for our project because they compare a home family party and a large friends\u2019 party.\n\n" +
        "One advantage of a family celebration is that it feels warm and personal, and you can spend quality time with people who know you best. Another plus is that it is usually cheaper and easier to organise at home.\n\n" +
        "A big party with friends also has benefits. Children can play games together, make new memories and feel special when so many people come to congratulate them.\n\n" +
        "However, both kinds of celebrations have disadvantages. A quiet family party may seem boring if you love noisy company, and a large party can be expensive for parents and tiring for younger children.\n\n" +
        "As a child, I preferred big parties with friends because I loved games, music and running around with my classmates. For me, a birthday was a chance to feel like the centre of attention in a large cheerful group.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 family at home / cake; Photo 2 \u2014 many children / party; различие (intimate vs big social); связь с birthday celebrations."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого вида)",
          criteria:
            "Family party: warm, personal, cheaper, easy at home. Friends\u2019 party: games, memories, feel special, social fun."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого вида)",
          criteria:
            "Family: may seem boring. Big party: expensive, tiring, noisy, организация."
        },
        {
          title: "4 · Opinion \u2014 preferred as a child + why",
          criteria:
            "As a child, I preferred \u2026 because \u2026 \u2014 прошедшее время, личное воспоминание (games, friends, attention)."
        }
      ],
      tips: [
        "В пункте 4 — именно as a child / when I was little, не только сейчас.",
        "Photo 1 = family home party; Photo 2 = big friends\u2019 party.",
        "Различия через scale и atmosphere, не только \u00abза столом / в зале\u00bb.",
        "Advantages и disadvantages — отдельно про каждый вид праздника.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!"
      ]
    },
    "u9-keeping-young": {
      modelMonologue:
        "Hi Nick! I\u2019ve found two photos for our school project \u201cKeeping young\u201d and I\u2019d like to explain why I chose them.\n\n" +
        "The first picture shows an elderly man and woman riding bicycles through a green park. They look active and cheerful, as if regular exercise helps them stay fit and full of energy.\n\n" +
        "In the second photo, there is an older man sitting outdoors and playing an acoustic guitar. He seems relaxed and happy, which shows that a creative hobby can also make people feel young in spirit.\n\n" +
        "The main difference is that the first image focuses on physical activity done together, while the second one shows mental and emotional stimulation through music. Both photos still illustrate ways elderly people can keep a youthful attitude to life.\n\n" +
        "I think these illustrations are perfect for our project because they compare sport and a leisure hobby as two approaches to staying young.\n\n" +
        "One advantage of cycling for seniors is that it strengthens the heart and muscles without putting too much stress on the joints. Another plus is that a couple can enjoy fresh air and spend quality time together.\n\n" +
        "Playing a musical instrument also has benefits for elderly people. It trains memory and concentration, and it can reduce stress after a long day at home.\n\n" +
        "However, both ways have disadvantages. Cycling may be unsafe on busy roads or in bad weather, and not every pensioner feels confident on a bike. Learning or practising guitar requires patience, and aching fingers or poor hearing can make it harder to enjoy music.\n\n" +
        "As for my elderly relatives, they prefer quiet hobbies like reading and gardening rather than active sport, because my grandmother says loud traffic frightens her and my grandfather prefers calm activities he can do at his own pace.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 cycling / physical activity; Photo 2 \u2014 guitar / creative hobby; различие (body vs mind/spirit); связь с keeping young for elderly."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого способа)",
          criteria:
            "Cycling: heart, muscles, fresh air, time together. Guitar: memory, concentration, reduces stress, youthful spirit."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого способа)",
          criteria:
            "Cycling: traffic, weather, safety, confidence. Guitar: patience, health limits (fingers, hearing)."
        },
        {
          title: "4 · Opinion \u2014 elderly relatives prefer + why",
          criteria:
            "My elderly relatives prefer \u2026 because \u2026 \u2014 про бабушку/дедушку, личный пример, calm vs active."
        }
      ],
      tips: [
        "Тема — keeping young **for elderly people**, не про подростков.",
        "Photo 1 = cycling; Photo 2 = playing guitar — physical vs creative.",
        "В пункте 4 — **your elderly relatives**, не only I prefer.",
        "Advantages/disadvantages — с точки зрения пожилых людей.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!"
      ]
    },
    "u10-toys-for-kids": {
      modelMonologue:
        "Hi Anna! I\u2019ve found two photos for our school project \u201cToys for kids\u201d and I\u2019d like to tell you why I picked them.\n\n" +
        "The first picture shows a young boy lying on the floor and looking at a toy robot in front of him. He seems fascinated, as if the robot can move or make sounds and keep his attention for a long time.\n\n" +
        "In the second photo, a girl is sitting on a rug wearing a doctor\u2019s coat and a stethoscope. She is examining a soft teddy bear, which shows imaginative role-play with a traditional plush toy.\n\n" +
        "The main difference is that the first image shows a modern electronic toy, while the second one shows a classic soft toy used for creative games. Both photos still illustrate how different toys shape children\u2019s play.\n\n" +
        "I believe these illustrations are perfect for our project because they compare high-tech gadgets and simple plush toys.\n\n" +
        "One advantage of electronic toys like robots is that they can teach basic logic and reaction skills and may prepare children for technology they will use at school. Another plus is that they are exciting and can entertain a child for hours.\n\n" +
        "Soft toys and role-play sets also have benefits. They help kids develop empathy and imagination when they act out stories, and a teddy bear often becomes a comforting friend at bedtime.\n\n" +
        "However, both types of toys have disadvantages. Electronic toys need batteries, they can break easily and sometimes make children spend too much time in front of a screen or alone with a gadget. Plush toys get dirty quickly, and after a few years a child may lose interest in them.\n\n" +
        "As a kid, I preferred electronic toys because I loved robots and remote-control cars and felt proud when I could make them work. For me, modern toys were more exciting than playing doctor with a teddy bear.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 robot / electronic toy; Photo 2 \u2014 teddy bear / role-play; различие (modern vs traditional); связь с toys for kids."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого типа)",
          criteria:
            "Electronic: logic, reaction, technology, exciting. Plush/role-play: empathy, imagination, comfort at bedtime."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого типа)",
          criteria:
            "Electronic: batteries, breaks, too much screen/solitary play. Plush: gets dirty, child loses interest."
        },
        {
          title: "4 · Opinion \u2014 preferred as a kid + why",
          criteria:
            "As a kid, I preferred \u2026 because \u2026 \u2014 прошедшее время, личное воспоминание."
        }
      ],
      tips: [
        "Тема — types of toys, не просто \u00abмальчик и девочка\u00bb.",
        "Photo 1 = robot (electronic); Photo 2 = teddy + doctor role-play (soft/traditional).",
        "Пункт 4 — as a kid, как в задании.",
        "Advantages/disadvantages — отдельно про каждый тип игрушек.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!"
      ]
    },
    "u11-family-weekend": {
      modelMonologue:
        "Hi Chris! I\u2019ve found two photos for our school project \u201cA family weekend\u201d and I\u2019d like to explain why I chose them.\n\n" +
        "The first picture shows a family of three sitting on a blanket in a park. The parents and their daughter are having a picnic on the grass with trees around them, and they look relaxed in the open air.\n\n" +
        "In the second photo, the same kind of family is sitting close together at home. The daughter is holding a small puppy, and everyone is smiling, as if they are enjoying a quiet day indoors.\n\n" +
        "The main difference is that in the first image the family spends the weekend outdoors in nature, while in the second one they stay at home and focus on cosy time together with a pet. Both photos still show how families can rest at the weekend.\n\n" +
        "I think these illustrations are perfect for our project because they compare an active outdoor weekend and a calm home weekend.\n\n" +
        "One advantage of a picnic in the park is that children can run, breathe fresh air and change scenery after a busy week at school. Another plus is that parents and kids can talk without phones and household chores around them.\n\n" +
        "Staying at home also has benefits. The family can rest on the sofa, watch a film or play with a pet without packing bags or worrying about the weather.\n\n" +
        "However, both ways have disadvantages. An outdoor picnic depends on good weather, and you need to prepare food and carry everything to the park. A home weekend may become boring if you do the same things every Saturday, and children may spend too much time online.\n\n" +
        "As for me, I prefer spending a family weekend outdoors because I love walking in the park and eating outside when the weather is warm. For me, a change of place helps the whole family recharge.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 picnic in park; Photo 2 \u2014 at home with pet; различие (outdoor vs indoor); связь с a family weekend."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого способа)",
          criteria:
            "Outdoor picnic: fresh air, run, change scenery, talk without chores. At home: rest, film, pet, no packing, no weather worry."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого способа)",
          criteria:
            "Picnic: weather, prepare food, carry things. Home: boring routine, too much screen time."
        },
        {
          title: "4 · Opinion \u2014 prefer + why",
          criteria:
            "I prefer \u2026 because \u2026 \u2014 личный аргумент (nature, weather, recharge, cosy home)."
        }
      ],
      tips: [
        "Тема — ways of spending a **family** weekend, не просто \u00abсемья на фото\u00bb.",
        "Photo 1 = picnic outdoors; Photo 2 = quiet time at home (+ pet).",
        "Различия через setting и activity, привязанные к weekend.",
        "Advantages/disadvantages — отдельно про каждый вариант.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!"
      ]
    },
    "u12-best-way-to-travel": {
      modelMonologue:
        "Hi Mark! I\u2019ve found two photos for our school project \u201cThe best way to travel\u201d and I\u2019d like to explain why I chose them.\n\n" +
        "The first picture shows a young woman sitting comfortably in a seat on a plane. She is smiling, as if she is enjoying a long-distance journey without much effort.\n\n" +
        "In the second photo, a person is riding a mountain bike on a dirt path in the hills. They are wearing a helmet and sportswear, which shows active travel in the open air.\n\n" +
        "The main difference is that the first image shows passive travel by public transport, while the second one shows independent active travel by bicycle. Both photos still illustrate different ways of moving from place to place.\n\n" +
        "I think these illustrations are perfect for our project because they compare fast comfortable transport and slow adventurous cycling.\n\n" +
        "One advantage of travelling by plane is that you can cover huge distances in a few hours and arrive ready to explore a new city or country. Another plus is that you can relax, read or sleep during the trip.\n\n" +
        "Cycling also has strong points. You can enjoy nature, stop wherever you want and keep fit at the same time. It is often cheaper than buying flight tickets.\n\n" +
        "However, both types of travelling have disadvantages. Flights can be expensive, and airports may be crowded and stressful. Cycling is slower, depends on weather and physical fitness, and it is hard to carry heavy luggage on a bike.\n\n" +
        "As for me, I\u2019d prefer travelling by plane because I want to see distant places during school holidays and I don\u2019t always have enough time for a long bike tour. For me, speed and comfort matter more than adventure on the road.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 plane / public transport; Photo 2 \u2014 mountain bike; различие (passive vs active); связь с the best way to travel."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого типа)",
          criteria:
            "Plane: distance, speed, relax/read/sleep. Cycling: nature, freedom to stop, fitness, cheaper."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого типа)",
          criteria:
            "Plane: expensive, crowded airports, stress. Cycling: slow, weather, fitness, heavy luggage."
        },
        {
          title: "4 · Opinion \u2014 you\u2019d prefer + why",
          criteria:
            "I\u2019d prefer \u2026 because \u2026 \u2014 личный аргумент (time, comfort, adventure, budget)."
        }
      ],
      tips: [
        "Тема — types of **travelling**, не просто \u00abдевушка в самолёте / человек на велосипеде\u00bb.",
        "Photo 1 = plane (long-distance, passive); Photo 2 = cycling (active, outdoor).",
        "Различия: speed, comfort, activity, environment.",
        "Advantages/disadvantages — отдельно про каждый тип.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!"
      ]
    },
    "u13-club-to-join": {
      modelMonologue:
        "Hi Julia! I\u2019ve found two photos for our school project \u201cA club to join\u201d and I\u2019d like to explain why I chose them.\n\n" +
        "The first picture shows a group of teenagers playing football on an outdoor pitch. One player is jumping for the ball, and the others are working together as a team.\n\n" +
        "In the second photo, several pairs are dancing in a studio. They are holding hands and practising steps, which looks like a dance club lesson.\n\n" +
        "The main difference is that the first club is based on team sport outdoors, while the second one is an indoor creative activity focused on movement and music. Both photos still show how students can spend free time after school.\n\n" +
        "I believe these illustrations are perfect for our project because they compare a sports club and a dance club.\n\n" +
        "One advantage of joining a football club is that you become stronger, learn discipline and make friends through teamwork. Another plus is that regular training helps you stay fit and release stress after classes.\n\n" +
        "A dance club also has benefits. It improves coordination and posture, and many students enjoy expressing themselves to music in pairs or small groups.\n\n" +
        "However, both types of clubs have disadvantages. Football can lead to injuries, depends on good weather for outdoor training and may require expensive boots and equipment. Dance classes often need special shoes, a fee for the studio and a partner, which not everyone has.\n\n" +
        "As for me, I would prefer to join a football club because I love team sports and competition more than ballroom dancing. For me, scoring a goal with classmates is more exciting than learning dance steps.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 football / sports club outdoors; Photo 2 \u2014 dance club indoors; различие (team sport vs creative dance); связь с a club to join."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого типа)",
          criteria:
            "Football: fitness, discipline, teamwork, friends, stress release. Dance: coordination, posture, self-expression, music."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого типа)",
          criteria:
            "Football: injuries, weather, equipment cost. Dance: fee, shoes, partner needed."
        },
        {
          title: "4 · Opinion \u2014 prefer to join + why",
          criteria:
            "I would prefer to join \u2026 because \u2026 \u2014 личный аргумент (team spirit, competition, music, shyness)."
        }
      ],
      tips: [
        "Тема — types of **clubs**, не просто \u00abспорт и танцы\u00bb.",
        "Photo 1 = football club; Photo 2 = dance club.",
        "Различия: outdoor team sport vs indoor creative activity.",
        "Advantages/disadvantages — отдельно про каждый клуб.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!"
      ]
    },
    "u14-capturing-nature": {
      modelMonologue:
        "Hi Oliver! I\u2019ve found two photos for our school project \u201cCapturing Nature\u201d and I\u2019d like to explain why I chose them.\n\n" +
        "The first picture shows an artist standing outdoors in front of an easel and painting a landscape. He seems to be working slowly, trying to show the colours and mood of the scene by hand.\n\n" +
        "In the second photo, a person is standing on a hill and holding a camera or a smartphone to photograph a wide valley below. It looks like a quick way to save a beautiful view in a digital image.\n\n" +
        "The main difference is that the first image represents a painted picture created through traditional art, while the second one shows photography as a modern method of capturing nature. Both photos still illustrate how people keep memories of the natural world.\n\n" +
        "I think these illustrations are perfect for our project because they compare painting and photography as two types of nature images.\n\n" +
        "One advantage of a painting is that the artist can express personal feelings and change details to make the landscape more impressive. Another plus is that a handmade picture often looks unique and can become a special gift.\n\n" +
        "Photography also has benefits. You can take many shots in a few seconds and share them instantly with friends on social media. A good photo can record tiny details that are hard to paint accurately.\n\n" +
        "However, both types of images have disadvantages. Painting takes a lot of time, skill and art supplies, and the result may not look exactly like real nature. Photos depend on equipment and light, and they may look ordinary if everyone takes similar pictures from the same viewpoint.\n\n" +
        "As for me, I\u2019d prefer to have photographs of nature because I am not good at drawing and I like capturing moments quickly during trips. For me, a clear photo on my phone is more practical than waiting hours for a painting to dry.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 artist / painting outdoors; Photo 2 \u2014 photography / phone or camera; различие (handmade art vs digital photo); связь с capturing nature."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого типа)",
          criteria:
            "Painting: personal feelings, unique, gift, artistic expression. Photography: fast, many shots, share online, accurate details."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого типа)",
          criteria:
            "Painting: time, skill, supplies, not exact copy. Photography: equipment, light, similar tourist shots."
        },
        {
          title: "4 · Opinion \u2014 you\u2019d prefer to have + why",
          criteria:
            "I\u2019d prefer to have \u2026 because \u2026 \u2014 личный аргумент (skill, speed, trips, practicality)."
        }
      ],
      tips: [
        "Тема — types of **images of nature** (painting vs photo), не просто \u00abчеловек на природе\u00bb.",
        "Photo 1 = plein air painting; Photo 2 = landscape photography.",
        "Различия: traditional art vs modern technology.",
        "Advantages/disadvantages — отдельно про каждый тип изображения.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!"
      ]
    },
    "u15-spending-time-with-friends": {
      modelMonologue:
        "Hi Sophie! I\u2019ve found two photos for our school project \u201cSpending time with friends\u201d and I\u2019d like to explain why I chose them.\n\n" +
        "The first picture shows a group of teenagers walking along a path in a forest with backpacks on their shoulders. They look as if they are hiking together and enjoying nature.\n\n" +
        "In the second photo, four friends are sitting around a table indoors. They are talking and doing something together, perhaps studying, playing a board game or working on a small project.\n\n" +
        "The main difference is that in the first image friends spend time actively outdoors, while in the second one they stay inside and focus on a calm shared activity at the table. Both photos still show how teenagers can socialise.\n\n" +
        "I think these illustrations are perfect for our project because they compare an outdoor adventure with friends and a cosy indoor meeting.\n\n" +
        "One advantage of hiking with friends is that you get fresh air, exercise and new impressions from the trip. Another plus is that shared challenges, like climbing a hill, can make friendships stronger.\n\n" +
        "Spending time indoors also has benefits. You can talk without rushing, help each other with homework or enjoy a game even when the weather is bad.\n\n" +
        "However, both ways have disadvantages. A long hike may be tiring, and you need suitable clothes and good weather. Indoor meetings can feel boring if you do the same thing every week, and it is easy to get distracted by phones.\n\n" +
        "As for me, I would prefer hiking with friends because I spend enough time at a desk at school and I love exploring parks and forests at the weekend. For me, active time together is more memorable than sitting indoors.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 hiking outdoors; Photo 2 \u2014 indoor activity at table; различие (active outdoor vs calm indoor); связь с spending time with friends."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого способа)",
          criteria:
            "Hiking: fresh air, exercise, impressions, stronger friendship. Indoor: talk, homework help, games, bad weather OK."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого способа)",
          criteria:
            "Hiking: tiring, clothes, weather. Indoor: boring routine, phone distraction."
        },
        {
          title: "4 · Opinion \u2014 prefer + why",
          criteria:
            "I would prefer \u2026 because \u2026 \u2014 личный аргумент (school desk, nature, memorable moments)."
        }
      ],
      tips: [
        "Тема — ways of **spending time with friends**, не просто \u00abподростки вместе\u00bb.",
        "Photo 1 = hiking / outdoor adventure; Photo 2 = indoor table activity.",
        "Различия: outdoor active vs indoor calm/social.",
        "Advantages/disadvantages — отдельно про каждый вариант.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!"
      ]
    },
    "u16-taking-notes": {
      modelMonologue:
        "Hi Ben! I\u2019ve found two photos for our school project \u201cTaking notes\u201d and I\u2019d like to explain why I chose them.\n\n" +
        "The first picture shows a close-up of a hand writing in a notebook with a pen. It looks like a student is putting down key ideas on paper during a lesson or while reading a textbook.\n\n" +
        "In the second photo, a person is typing on a laptop keyboard. This clearly represents digital note-taking on a computer instead of using a traditional exercise book.\n\n" +
        "The main difference is that the first method is handwritten and paper-based, while the second one is electronic and stored on a device. Both photos still show how learners save information for later revision.\n\n" +
        "I think these illustrations are perfect for our project because they compare pen-and-paper notes and typed notes.\n\n" +
        "One advantage of writing by hand is that it helps many students remember material better because the brain is more active. Another plus is that you do not need electricity or Wi-Fi, and you can draw diagrams quickly in the margin.\n\n" +
        "Typing on a laptop also has benefits. Notes are easy to edit, search and copy, and you can store hundreds of pages in one folder without heavy bags.\n\n" +
        "However, both ways have disadvantages. Handwritten notes can be messy, easy to lose and slow to rewrite if you make mistakes. Digital notes depend on a charged battery, and it is tempting to switch to social media instead of studying.\n\n" +
        "As for me, I prefer taking notes by hand for studying because I remember formulas and vocabulary better when I write them myself. For exam preparation, a paper notebook still works best for me.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 notebook + pen; Photo 2 \u2014 laptop typing; различие (handwritten vs digital); связь с taking notes."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого способа)",
          criteria:
            "Handwritten: memory, diagrams, no Wi-Fi. Digital: edit, search, copy, light storage."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого способа)",
          criteria:
            "Handwritten: messy, slow, easy to lose. Digital: battery, distractions (social media)."
        },
        {
          title: "4 · Opinion \u2014 prefer for studying + why",
          criteria:
            "I prefer \u2026 for studying because \u2026 \u2014 личный аргумент (memory, exam prep, habits)."
        }
      ],
      tips: [
        "Тема — ways of **taking notes**, не просто \u00abруки и тетрадь / ноутбук\u00bb.",
        "Photo 1 = pen and paper; Photo 2 = laptop typing.",
        "Пункт 4 — prefer **for studying**, как в задании.",
        "Advantages/disadvantages — отдельно про каждый способ.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!"
      ]
    },
    "u17-family-meals": {
      modelMonologue:
        "Hi Laura! I\u2019ve found two photos for our school project \u201cFamily meals\u201d and I\u2019d like to explain why I chose them.\n\n" +
        "The first picture shows a family eating together at home in the kitchen. The mother is serving food, while the father and their child are sitting at the table in a cosy domestic atmosphere.\n\n" +
        "In the second photo, the same kind of family is having a meal in a restaurant or café. They are sitting by a window, and the setting looks brighter and more formal than a home kitchen.\n\n" +
        "The main difference is that the first meal is home-cooked and private, while the second one takes place in a public place with restaurant service. Both photos still show how families can share food together.\n\n" +
        "I believe these illustrations are perfect for our project because they compare eating at home and dining out as a family.\n\n" +
        "One advantage of family meals at home is that parents can cook healthy dishes and control ingredients, and the atmosphere is relaxed because nobody is watching. Another plus is that it is usually cheaper than visiting a café every weekend.\n\n" +
        "Eating in a restaurant also has benefits. Nobody has to wash dishes afterwards, and the family can try new cuisine and celebrate a special day in a pleasant environment.\n\n" +
        "However, both types of meals have disadvantages. Cooking at home takes time and energy after work, and children may complain about the same dishes. Restaurant meals can be expensive, noisy and less healthy if you order fast food or desserts too often.\n\n" +
        "As for me, I\u2019d prefer family meals at home because I like my mum\u2019s soup and we can talk without rushing when the waiter comes. For everyday life, a warm kitchen table feels more comfortable than a crowded café.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 home kitchen; Photo 2 \u2014 restaurant/café; различие (private/home-cooked vs public/service); связь с family meals."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого типа)",
          criteria:
            "At home: healthy control, relaxed, cheaper. Restaurant: no dishes, new cuisine, special celebration."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого типа)",
          criteria:
            "Home: time, energy, same dishes. Restaurant: expensive, noisy, less healthy options."
        },
        {
          title: "4 · Opinion \u2014 you\u2019d prefer + why",
          criteria:
            "I\u2019d prefer \u2026 because \u2026 \u2014 личный аргумент (comfort, mum\u2019s cooking, no rush)."
        }
      ],
      tips: [
        "Тема — **types of family meals** (at home vs in a restaurant).",
        "Photo 1 = home kitchen; Photo 2 = café/restaurant.",
        "Различия: private vs public, home-cooked vs ordered food.",
        "Advantages/disadvantages — отдельно про каждый тип.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!"
      ]
    },
    "u18-winter-holidays": {
      modelMonologue:
        "Hi Mike! I\u2019ve found two photos for our school project \u201cWinter holidays\u201d and I\u2019d like to explain why I chose them.\n\n" +
        "The first picture shows two people walking along a snowy path in a forest. They are holding hands and surrounded by tall trees covered with snow, which looks like a quiet outdoor winter trip.\n\n" +
        "In the second photo, a group of relatives or friends are sitting around a table indoors. There is plenty of food on the table, and one person is wearing a festive hat, so it looks like a holiday celebration at home.\n\n" +
        "The main difference is that in the first image people spend the winter holiday actively in nature, while in the second one they stay inside and enjoy a social family dinner. Both photos still show how Russians can rest during the cold season.\n\n" +
        "I think these illustrations are perfect for our project because they compare an outdoor winter walk and a cosy indoor feast.\n\n" +
        "One advantage of spending holidays outdoors is that fresh air and exercise help you stay healthy and reduce stress after exams. Another plus is that snowy landscapes are beautiful and give you unforgettable photos and memories.\n\n" +
        "A festive dinner at home also has benefits. The whole family can talk for hours, share traditional dishes and feel warm without travelling far in freezing weather.\n\n" +
        "However, both ways have disadvantages. Outdoor walks depend on cold and icy conditions, and you need warm clothes and good boots. Long indoor celebrations may lead to overeating, and guests can feel tired if the evening lasts too late.\n\n" +
        "As a child, I preferred festive dinners at home because I loved New Year presents, tasty food and playing with cousins in a warm room. For me, holiday magic was connected with the table, music and a decorated tree rather than long walks in the snow.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 snowy forest walk; Photo 2 \u2014 indoor festive dinner; различие (outdoor active vs indoor social); связь с winter holidays."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого способа)",
          criteria:
            "Outdoor: fresh air, exercise, beautiful snow, memories. Indoor: family talk, traditional dishes, warm, no travel in cold."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого способа)",
          criteria:
            "Outdoor: cold, ice, warm clothes needed. Indoor: overeating, late tired guests."
        },
        {
          title: "4 · Opinion \u2014 preferred as a child + why",
          criteria:
            "As a child, I preferred \u2026 because \u2026 \u2014 прошедшее время, New Year, cousins, tree, magic at home."
        }
      ],
      tips: [
        "Тема — ways of spending **winter holidays**, не просто \u00abзима\u00bb.",
        "Photo 1 = walk in snowy forest; Photo 2 = festive dinner indoors.",
        "Пункт 4 — **as a child**, как в задании.",
        "Advantages/disadvantages — отдельно про каждый вариант.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!"
      ]
    },
    "u19-getting-to-school": {
      modelMonologue:
        "Hi Alex! I\u2019ve found two photos for our school project \u201cGetting to school\u201d and I\u2019d like to explain why I chose them.\n\n" +
        "The first picture shows a group of children with backpacks boarding a large bus. It looks like a school bus that takes pupils to school together every morning.\n\n" +
        "In the second photo, a girl with a backpack is standing next to a car outside. It seems that her parents are driving her to school by private car.\n\n" +
        "The main difference is that in the first image students use public or school transport, while in the second one a family uses their own vehicle. Both photos still show how teenagers can reach school in the morning.\n\n" +
        "I think these illustrations are perfect for our project because they compare travelling by bus and going by car.\n\n" +
        "One advantage of a school bus is that parents do not need to worry about traffic every day, and children can chat with classmates on the way. Another plus is that one bus replaces many cars, which is better for the environment.\n\n" +
        "Going by car also has benefits. You arrive faster on cold or rainy days, and parents can drop you right near the entrance without waiting at a bus stop.\n\n" +
        "However, both ways have disadvantages. A bus follows a fixed route and timetable, so you may be late if it is stuck in traffic. A family car costs money for fuel and parking, and parents lose time when they drive during rush hour.\n\n" +
        "As for me, I\u2019d prefer going by bus because my friends travel on the same route and we can revise homework together. For me, independent travel with classmates is more fun than sitting silently in the car with my dad.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 school bus; Photo 2 \u2014 car drop-off; различие (public/school transport vs private car); связь с getting to school."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого способа)",
          criteria:
            "Bus: parents free, chat with classmates, eco-friendly. Car: faster in bad weather, door-to-door, no bus stop wait."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого способа)",
          criteria:
            "Bus: fixed timetable, traffic delays. Car: fuel, parking, rush hour, parents\u2019 time."
        },
        {
          title: "4 · Opinion \u2014 you\u2019d prefer + why",
          criteria:
            "I\u2019d prefer \u2026 because \u2026 \u2014 личный аргумент (friends, independence, comfort)."
        }
      ],
      tips: [
        "Тема — ways of **getting to school**, не просто \u00abтранспорт\u00bb.",
        "Photo 1 = school bus; Photo 2 = car / parents\u2019 drop-off.",
        "Различия: shared public transport vs private family car.",
        "Advantages/disadvantages — отдельно про bus и car.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!"
      ]
    },
    "u20-playing-games": {
      modelMonologue:
        "Hi Kate! I\u2019ve found two photos for our school project \u201cPlaying games\u201d and I\u2019d like to explain why I chose them.\n\n" +
        "The first picture shows four friends sitting around a table and playing a board game. They are smiling and looking at the pieces, which creates a lively face-to-face atmosphere.\n\n" +
        "In the second photo, two teenagers are sitting on a sofa and playing a video game on a large TV screen. They are holding controllers and focusing on the action on the screen.\n\n" +
        "The main difference is that the first image shows a traditional tabletop game played in a group, while the second one shows a digital game that depends on a console and a screen. Both photos still illustrate how young people spend their free time.\n\n" +
        "I believe these illustrations are perfect for our project because they compare board games and video games as two popular types of entertainment.\n\n" +
        "One advantage of board games is that players talk directly to each other, learn to follow rules and develop logical thinking. Another plus is that you do not need electricity, and the whole family can join one evening.\n\n" +
        "Video games also have benefits. They train reaction and coordination, offer exciting plots and allow you to play online with friends who live far away.\n\n" +
        "However, both types of games have disadvantages. Board games can take a long time to set up, and some teenagers may find them boring compared with fast computer action. Video games may cause eye strain, and it is easy to spend hours in front of the screen instead of doing homework or sport.\n\n" +
        "As for me, I prefer board games because I enjoy laughing with friends at the same table and discussing our moves aloud. For me, real communication during a game is more important than winning on a virtual level.\n\n" +
        "These were my thoughts on the photos. I\u2019d be interested to hear your impressions. Please give me some feedback. Bye!",
      modelSections: [
        {
          title: "1 · Описание + различия + связь с проектом",
          criteria:
            "Приветствие; Photo 1 \u2014 board game / group at table; Photo 2 \u2014 video game / TV; различие (face-to-face vs screen); связь с playing games."
        },
        {
          title: "2 · Advantages (1\u20132 для каждого типа)",
          criteria:
            "Board games: communication, rules, logic, no electricity, family. Video games: reaction, plots, online friends."
        },
        {
          title: "3 · Disadvantages (1\u20132 для каждого типа)",
          criteria:
            "Board games: slow setup, may seem boring. Video games: eye strain, too much screen time, homework neglected."
        },
        {
          title: "4 · Opinion \u2014 prefer + why",
          criteria:
            "I prefer \u2026 because \u2026 \u2014 личный аргумент (communication, fun, competition)."
        }
      ],
      tips: [
        "Тема — **types of games** (board vs video), не просто \u00abлюди играют\u00bb.",
        "Photo 1 = board game at table; Photo 2 = console/TV game.",
        "Различия: social face-to-face vs screen-based play.",
        "Advantages/disadvantages — отдельно про каждый тип.",
        "Концовка: These were my thoughts \u2026 feedback \u2026 Bye!"
      ]
    }
  };

  var i;
  for (i = 0; i < pack.units.length; i++) {
    var u = pack.units[i];
    var m = MODELS[u.id];
    if (!m) continue;
    if (m.modelMonologue) u.modelMonologue = m.modelMonologue;
    if (m.modelSections) u.modelSections = m.modelSections;
    if (m.tips) u.tips = m.tips;
  }
})(typeof window !== "undefined" ? window : this);
