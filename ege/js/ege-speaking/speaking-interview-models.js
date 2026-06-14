/**
 * EGE Speaking · Task 3 — interview model answers (100 entries).
 * Patches __EGE_SPEAKING_INTERVIEW_DATA__.units after unit packs load.
 */
(function (w) {
  var pack = w.__EGE_SPEAKING_INTERVIEW_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;

  var MODELS = {
    "v1-interview": [
      {
        text:
          "Yes, I have a cat called Barsik. He is very friendly and loves playing with a ball in the evening.",
        criteria:
          "Ответить, есть ли питомец; назвать животное и добавить 1–2 детали."
      },
      {
        text:
          "In Russia cats and dogs are the most popular pets, and many families also keep hamsters or fish. Some people in flats prefer smaller animals because they need less space.",
        criteria:
          "Назвать 2–3 популярных вида домашних животных в России и кратко пояснить."
      },
      {
        text:
          "Usually children help with feeding and walking, but parents take main responsibility for vet visits and buying food. In my family my mum feeds our cat every day.",
        criteria:
          "Кто в семье ухаживает за питомцем: дети, родители, распределение обязанностей."
      },
      {
        text:
          "I think cities should build more shelters and run free sterilisation programmes. People also need to think carefully before they buy a pet and not abandon it.",
        criteria:
          "Предложить 1–2 конкретные меры против бездомных животных."
      },
      {
        text:
          "Yes, I believe children benefit because pets teach them to be kind and responsible. Playing with an animal also helps kids relax after school.",
        criteria:
          "Да/нет + аргумент: ответственность, забота, эмоции, общение."
      }
    ],
    "v2-interview": [
      {
        text:
          "It happens from time to time, especially before difficult tests in maths or chemistry. Not everyone does it, but some classmates look at their neighbour's paper.",
        criteria:
          "Как часто одноклассники списывают; пример ситуации или предмета."
      },
      {
        text:
          "Yes, a friend once asked me to let him copy my homework because he had forgotten his notebook. I refused because it is not fair to the teacher and to other students.",
        criteria:
          "Был ли такой случай; почему согласился или отказал."
      },
      {
        text:
          "Students often cheat when they are under time pressure or afraid of a bad mark. Sometimes they copy homework when they have too many tasks and little free time.",
        criteria:
          "2–3 типичные ситуации: стресс, нехватка времени, страх оценки."
      },
      {
        text:
          "Most teachers take away the test paper and give a low mark for that task. Some teachers also call the student's parents and explain that cheating is unacceptable.",
        criteria:
          "Что делает учитель: оценка, беседа, родители."
      },
      {
        text:
          "Schools should explain why honesty matters and make tests less stressful. Teachers can also design tasks where copying is harder, for example oral answers or open questions.",
        criteria:
          "1–2 предложения: воспитание, формат заданий, меньше давления."
      }
    ],
    "v3-interview": [
      {
        text:
          "I live in a medium-sized city not far from Moscow. It is quite green, with parks and a river, but traffic can be heavy in the morning.",
        criteria:
          "Город или село; описать место 1–2 признаками."
      },
      {
        text:
          "Yes, I enjoy living here because my school and friends are nearby and there are cinemas and sports centres. Sometimes I wish it were quieter, but overall I am happy.",
        criteria:
          "Нравится ли жить там; плюсы и/или минусы с пояснением."
      },
      {
        text:
          "A tourist should visit our old town centre and the local museum first. There is also a beautiful park on the hill with a nice view of the city.",
        criteria:
          "2–3 места в своём районе, которые стоит посетить."
      },
      {
        text:
          "Many young people move to big cities because there are more universities and better job opportunities. Life there also offers more entertainment, concerts and modern services.",
        criteria:
          "Причины переезда: учёба, работа, досуг, инфраструктура."
      },
      {
        text:
          "I would like more cycle lanes and cleaner air in my area. I would also build a bigger youth centre where teenagers could meet and do sports after school.",
        criteria:
          "Что улучшить: экология, транспорт, досуг, инфраструктура."
      }
    ],
    "v4-interview": [
      {
        text:
          "My friends and I sort rubbish at home and take batteries to special containers. We also try not to waste water when we brush our teeth.",
        criteria:
          "Что лично делаешь ты и друзья: сортировка, экономия ресурсов."
      },
      {
        text:
          "Yes, it is important because pollution affects our health and the climate. If everyone makes small green choices, the planet will be safer for future generations.",
        criteria:
          "Важно ли «быть зелёным»; аргумент: экология, здоровье, будущее."
      },
      {
        text:
          "In my region people often plant trees in spring and clean parks on volunteer days. Local authorities also encourage recycling by placing separate bins in the streets.",
        criteria:
          "Местные способы защиты природы: акции, переработка, посадки."
      },
      {
        text:
          "Schools can organise eco-lessons and recycling projects in every class. They could also start a school garden so students learn to care for plants.",
        criteria:
          "Как школа может привить экопривычки: уроки, проекты, практика."
      },
      {
        text:
          "I would use public transport more often instead of asking my parents to drive me everywhere. I would also buy fewer plastic bottles and take a reusable cup to school.",
        criteria:
          "Личные изменения в образе жизни ради планеты."
      }
    ],
    "v5-interview": [
      {
        text:
          "I listen to pop and indie music the most because the songs are catchy and easy to sing along to. They also help me switch off after a long day at school.",
        criteria:
          "Жанр музыки + почему нравится."
      },
      {
        text:
          "Yes, I am really into a Russian band called Mumiy Troll and I also like some songs by Monetochka. Their lyrics are interesting and they sound modern.",
        criteria:
          "Назвать 1–2 российских исполнителей/группы и кратко пояснить."
      },
      {
        text:
          "When I study I prefer calm instrumental music without words because lyrics distract me. When I relax I listen to louder tracks with a good rhythm.",
        criteria:
          "Разная музыка для учёбы и отдыха; объяснить почему."
      },
      {
        text:
          "Yes, I play the guitar and I have been learning for about three years. I practise twice a week and sometimes play for my family at home.",
        criteria:
          "Играешь ли на инструменте; какой и как давно/как часто."
      },
      {
        text:
          "I would like to meet Ed Sheeran because he writes honest songs and plays the guitar beautifully. I would ask him how he creates melodies and how he deals with stage fright.",
        criteria:
          "Кого встретить и почему; 1–2 детали или вопроса."
      }
    ],
    "v6-interview": [
      {
        text:
          "Gardening is not very popular with teenagers because most of us live in flats and have little free time. However, some students help their grandparents in the country in summer.",
        criteria:
          "Популярно ли садоводство у подростков; почему да/нет."
      },
      {
        text:
          "I prefer plants inside my home because they make the room cosy and fresh. Outside plants need more care and depend on the weather.",
        criteria:
          "Комнатные или уличные растения; аргумент."
      },
      {
        text:
          "The most difficult thing for me is remembering to water them regularly. I also find it hard to know when a plant needs more light or a bigger pot.",
        criteria:
          "Главная трудность ухода: полив, свет, время, знания."
      },
      {
        text:
          "In my region I see a lot of birch trees, lilac and sunflowers in gardens. In parks there are also roses and lilies in summer.",
        criteria:
          "Какие растения/цветы типичны для региона."
      },
      {
        text:
          "Yes, on Women's Day on 8 March people give flowers, especially tulips and mimosa. In May many families also plant flowers and trees near their homes.",
        criteria:
          "Традиции с растениями/цветами в России (праздник, обычай)."
      }
    ],
    "v7-interview": [
      {
        text:
          "My favourite subjects are English and literature, and I also quite like history. History helps me understand how our country was formed and why events happened.",
        criteria:
          "Любимые предметы; нравится ли история и почему."
      },
      {
        text:
          "I think Peter the Great influenced Russia the most because he modernised the army and opened Russia to Europe. His reforms changed life in our country for centuries.",
        criteria:
          "Историческая личность + её влияние на Россию."
      },
      {
        text:
          "It is very important to study national history because it teaches us to respect our culture and learn from past mistakes. Without history we cannot understand the present.",
        criteria:
          "Зачем изучать историю страны: идентичность, уроки прошлого."
      },
      {
        text:
          "Students should study history for at least several years at school because one year is not enough to cover main periods. I think history lessons until grade 9 or 10 are reasonable.",
        criteria:
          "Сколько лет/классов изучать историю и почему."
      },
      {
        text:
          "I would like to see the 1960s space programme with my own eyes, when Gagarin flew into space. It was a time of great hope and scientific achievement.",
        criteria:
          "Какой период истории России хотел бы увидеть; пояснение."
      }
    ],
    "v8-interview": [
      {
        text:
          "In my region there are charities that help elderly people and animal shelters that need volunteers. Some schools also run eco-volunteer groups that clean parks.",
        criteria:
          "Какие волонтёрские организации есть в регионе."
      },
      {
        text:
          "I think volunteering is more popular today than ten years ago because young people follow social media campaigns and care about ecology. Many students also need volunteer hours for their portfolios.",
        criteria:
          "Сравнение с 10 годами назад; аргумент."
      },
      {
        text:
          "Yes, volunteering is important because it teaches teenagers to help others and work in a team. It also gives useful experience before choosing a future job.",
        criteria:
          "Важно ли волонтёрство для молодёжи; 1–2 причины."
      },
      {
        text:
          "Yes, I volunteered at a city library during a book festival last year. I wanted to try something useful and meet people who love reading.",
        criteria:
          "Был ли опыт волонтёрства; если нет — почему; если да — где/зачем."
      },
      {
        text:
          "In the future I would like to take part in an environmental project, for example planting trees or cleaning a river bank. I would also like to help organise events for children.",
        criteria:
          "Какой волонтёрский опыт хотел бы получить в будущем."
      }
    ],
    "v9-interview": [
      {
        text:
          "I catch a cold two or three times a year, usually in winter. The last time I fell ill was in February when I had a sore throat and stayed at home for three days.",
        criteria:
          "Как часто болеешь; когда последний раз и чем."
      },
      {
        text:
          "In my home town there is a polyclinic, a hospital and several pharmacies. We also have a dental clinic and a small sports medicine centre.",
        criteria:
          "Какие медучреждения есть в родном городе."
      },
      {
        text:
          "In some ways people are healthier now because medicine is better and many people do sport. However, young people today sit too much at screens and eat fast food, so not everything has improved.",
        criteria:
          "Здоровее ли люди сейчас; аргумент «за» и/или «против»."
      },
      {
        text:
          "The most frequent problems are poor eyesight from phones and computers, back pain from sitting and stress before exams. Some teenagers also sleep too little.",
        criteria:
          "2–3 типичные проблемы здоровья у молодёжи в стране."
      },
      {
        text:
          "Parents should encourage teenagers to sleep enough and eat regular meals at home. They can also do sport together and limit screen time in the evening.",
        criteria:
          "Что родители могут сделать: режим, питание, спорт, экраны."
      }
    ],
    "v10-interview": [
      {
        text:
          "Yes, I have already decided that I want to become a software engineer. I am interested in computers and I enjoy solving logical problems.",
        criteria:
          "Решил ли будущую профессию; кратко назвать или сказать «ещё нет»."
      },
      {
        text:
          "After school I plan to enter a technical university and study programming. I would like to work in IT and maybe create useful apps for people.",
        criteria:
          "Планы: вуз, специальность, кем хотел бы работать."
      },
      {
        text:
          "Yes, my parents' opinion is important because they know my strengths and want the best for me. However, the final choice should be mine because I will study and work in this field.",
        criteria:
          "Важно ли мнение родителей; баланс «слушать» vs «решать самому»."
      },
      {
        text:
          "Problems appear when parents push a career the teenager does not like, for example law or medicine. Another problem is when the family argues about money and job stability.",
        criteria:
          "1–2 конфликта при выборе профессии в семье."
      },
      {
        text:
          "I would advise them to try different school clubs and talk to people who work in interesting jobs. They should not panic — there is still time to explore and change their mind.",
        criteria:
          "Совет подростку без выбора: пробовать, спрашивать, не спешить."
      }
    ],
    "v11-interview": [
      {
        text:
          "I live in a big city with more than a million people. It is busy and noisy, but there are many museums, shops and places where teenagers can spend time.",
        criteria:
          "Большой город или маленький; описать атмосферу."
      },
      {
        text:
          "Most people use the metro and buses because parking is expensive and traffic jams are common. Many students also use ride-hailing apps when they are in a hurry.",
        criteria:
          "Основной транспорт в городе/посёлке."
      },
      {
        text:
          "Big cities are mostly safe for teenagers if you stay in busy areas and come home before late evening. However, you should be careful in empty streets and always tell your parents where you are.",
        criteria:
          "Безопасны ли мегаполисы для подростков; почему да/нет."
      },
      {
        text:
          "One serious problem is air pollution from cars and factories. For example, in winter smog sometimes covers the city and people with asthma feel worse.",
        criteria:
          "Проблема большого города + конкретный пример."
      },
      {
        text:
          "I would introduce more electric buses and encourage people to use bikes. I would also plant more trees along main roads to clean the air.",
        criteria:
          "Меры для решения названной проблемы."
      }
    ],
    "v12-interview": [
      {
        text:
          "I have a small family — my parents, my younger brother and me, so four people in total. We also often visit my grandparents at weekends.",
        criteria:
          "Большая или малая семья; сколько человек."
      },
      {
        text:
          "I feel closest to my mum because she always listens to me and supports me at school. We can talk about anything, even when I am upset or tired.",
        criteria:
          "С кем ближе всего и почему."
      },
      {
        text:
          "We always celebrate New Year together at home with a big dinner and presents. On my birthday the whole family goes out to a café or the cinema.",
        criteria:
          "1–2 семейные традиции, которые соблюдаете."
      },
      {
        text:
          "Yes, I like these traditions because they bring us together and create warm memories. Sometimes I get a bit bored with long meals, but I still enjoy the atmosphere.",
        criteria:
          "Нравятся ли традиции; аргумент."
      },
      {
        text:
          "When I have my own family I would like to keep Sunday lunches and trips to the countryside. I would also start a tradition of reading books together in the evening.",
        criteria:
          "Какие традиции хотел бы перенести в свою будущую семью."
      }
    ],
    "v13-interview": [
      {
        text:
          "I think my lifestyle is quite healthy because I do sport three times a week and try not to skip breakfast. However, I sometimes stay up too late doing homework.",
        criteria:
          "Здоровый ли образ жизни; аргументы «за» и/или «против»."
      },
      {
        text:
          "My friends and I enjoy swimming, football and fitness classes at school. In winter we also go skiing when there is enough snow.",
        criteria:
          "Каким спортом занимаетесь вы и друзья."
      },
      {
        text:
          "Fast food, pizza and sweet drinks are very popular among young people in Russia. They are tasty but not very healthy if you eat them every day.",
        criteria:
          "Популярная еда у молодёжи; здоровая ли она."
      },
      {
        text:
          "Schools can offer more PE lessons and healthy meals in the canteen. They could also invite doctors to talk about sleep, screen time and balanced diet.",
        criteria:
          "Как школа поддерживает ЗОЖ: спорт, питание, просветительство."
      },
      {
        text:
          "I would go to bed earlier and spend less time on social networks before sleep. I would also drink more water instead of sugary juice.",
        criteria:
          "Что изменил бы в своём режиме для более здоровой жизни."
      }
    ],
    "v14-interview": [
      {
        text:
          "At school I learn English as my main foreign language and I also study German as a second language. We have four or five lessons a week.",
        criteria:
          "Какие иностранные языки изучаешь в школе."
      },
      {
        text:
          "It is important because a foreign language helps you travel, read information online and communicate with people from other countries. It also opens your mind to new cultures.",
        criteria:
          "Зачем человеку иностранный язык в целом."
      },
      {
        text:
          "Yes, foreign languages are important for a career today because many companies work internationally. Even in Russia employers often ask for English in CVs.",
        criteria:
          "Важны ли языки для карьеры сейчас; аргумент."
      },
      {
        text:
          "English is the most popular language among employers because it is the language of business and the Internet. Chinese and German are also in demand in trade and engineering.",
        criteria:
          "Какие языки ценят работодатели; почему."
      },
      {
        text:
          "Foreign languages are needed the most in tourism, international business and IT. Doctors and scientists also need English to read articles and take part in conferences.",
        criteria:
          "Профессии, где языки особенно нужны; пояснение."
      }
    ],
    "v15-interview": [
      {
        text:
          "I think spending holidays with school friends is a good idea because you share the same interests and it is fun. However, it is also nice to rest with family sometimes.",
        criteria:
          "Хорошая ли идея каникулы с одноклассниками; почему."
      },
      {
        text:
          "During school holidays I usually sleep longer, meet friends and help my parents at home. In summer I sometimes go to the countryside or visit relatives in another city.",
        criteria:
          "Как проводишь каникулы: отдых, друзья, поездки."
      },
      {
        text:
          "Yes, in primary school I spent holidays mostly playing outside and visiting my grandparents. Now I have more homework and I also prepare for exams during breaks.",
        criteria:
          "Отличался ли отдых в начальной школе от нынешнего."
      },
      {
        text:
          "Last winter I read two books in English and watched educational videos about history. I also revised maths topics that were difficult for me in autumn.",
        criteria:
          "Как использовал каникулы для самообразования."
      },
      {
        text:
          "Yes, I would prefer longer holidays because sometimes two weeks is not enough to rest and travel. A bit more free time would also help me recover before a new term.",
        criteria:
          "Хотел бы более длинные каникулы; краткое пояснение."
      }
    ],
    "v16-interview": [
      {
        text:
          "Yes, I think it is important to protect nature because we depend on clean air, water and forests. If we destroy the environment, life will become harder for everyone.",
        criteria:
          "Важно ли защищать природу; аргумент."
      },
      {
        text:
          "In my region people collect rubbish in parks and there are campaigns to plant trees every spring. Local factories are also checked so that they do not pollute rivers too much.",
        criteria:
          "Способы защиты окружающей среды в регионе."
      },
      {
        text:
          "Ten years ago fewer people sorted waste and there were fewer eco programmes on TV. However, even then many families saved electricity and did not throw rubbish into forests.",
        criteria:
          "Как заботились о планете 10 лет назад; сравнение с сейчас."
      },
      {
        text:
          "In my opinion everyone is responsible — citizens, companies and the government. We should all reduce waste, and the state should make strict laws against pollution.",
        criteria:
          "Кто отвечает за экологию: люди, бизнес, государство."
      },
      {
        text:
          "In the future cities should use more renewable energy and public transport. Schools should teach ecology from an early age so children grow up with green habits.",
        criteria:
          "1–2 меры для улучшения экологической ситуации."
      }
    ],
    "v17-interview": [
      {
        text:
          "I am from the Moscow region. It is famous for its historical towns, such as Sergiev Posad, and for beautiful nature not far from the capital.",
        criteria:
          "Из какого региона; чем он известен."
      },
      {
        text:
          "Yes, I think my region is popular with tourists because many people want to see old monasteries and quiet countryside near Moscow. Coach tours are quite common at weekends.",
        criteria:
          "Популярен ли регион у туристов; почему."
      },
      {
        text:
          "Most local sights are related to history, for example churches and museums. There are also some new attractions like modern art centres and adventure parks for families.",
        criteria:
          "Исторические достопримечательности; есть ли новые."
      },
      {
        text:
          "The best season to visit is late spring or early autumn because the weather is warm and nature is beautiful. Summer can be hot, and winter is good only if you like snow and skiing.",
        criteria:
          "Лучший сезон для визита; аргумент."
      },
      {
        text:
          "I would recommend a foreigner to visit the Trinity Lavra in Sergiev Posad and walk in Kolomna, an old town with kremlin walls. They show real Russian history and architecture.",
        criteria:
          "2–3 места, которые посоветовал бы иностранцу."
      }
    ],
    "v18-interview": [
      {
        text:
          "Yes, I use the Internet every day for homework, messaging and watching videos. It is so convenient that I hardly imagine my life without it.",
        criteria:
          "Как часто пользуешься интернетом; зачем."
      },
      {
        text:
          "I use social networks to chat with friends, share photos and follow news about music and sport. Sometimes I also join school groups to get homework reminders.",
        criteria:
          "Для чего используешь соцсети."
      },
      {
        text:
          "It is very important to protect your identity online because strangers can steal photos or personal data. Teenagers should not share their address, phone number or passwords.",
        criteria:
          "Зачем защищать личность в соцсетях."
      },
      {
        text:
          "People worry when shopping online because they are afraid of fraud and low-quality goods. They also do not know if their bank card details will stay safe.",
        criteria:
          "Почему беспокоятся при покупках в интернете."
      },
      {
        text:
          "Companies should use strong passwords and two-step verification for accounts. Users should also update apps regularly and never click on suspicious links in messages.",
        criteria:
          "1–2 меры против утечки данных."
      }
    ],
    "v19-interview": [
      {
        text:
          "After school I usually do homework and then go to the drama club twice a week. I also play basketball with friends on Fridays.",
        criteria:
          "Чем занимаешься после школы; ходишь ли в кружки."
      },
      {
        text:
          "In primary school I attended an art club and sang in the school choir. We also had short sport sections after lessons.",
        criteria:
          "Какие кружки были в начальной школе."
      },
      {
        text:
          "The most popular clubs among my friends are English conversation, robotics and dance. Many students also join the school newspaper.",
        criteria:
          "Самые популярные школьные кружки у друзей."
      },
      {
        text:
          "School clubs help teenagers make friends, develop talents and feel more confident. They also teach teamwork and time management outside regular lessons.",
        criteria:
          "Польза кружков: навыки, друзья, уверенность."
      },
      {
        text:
          "Partly yes, because students know what their peers enjoy and can organise interesting events. However, a teacher should still supervise so that everything is safe and fair.",
        criteria:
          "Должны ли кружки вести ученики; аргумент за/против."
      }
    ],
    "v20-interview": [
      {
        text:
          "I use electronic devices every day — my smartphone, laptop and tablet. My favourite one is my laptop because I need it for school projects and learning programming.",
        criteria:
          "Как часто пользуешься гаджетами; какие любимые."
      },
      {
        text:
          "Yes, computer skills are necessary for everyone because study, work and banking are online now. Even simple tasks like sending a document require basic digital literacy.",
        criteria:
          "Нужны ли IT-навыки всем; аргумент."
      },
      {
        text:
          "The most important skills today are safe Internet use, working with documents and basic coding or data analysis. People should also know how to protect passwords and avoid scams.",
        criteria:
          "2–3 ключевых компьютерных навыка сейчас."
      },
      {
        text:
          "Possible dangers include cyberbullying, viruses and addiction to screens. Some teenagers also share too much personal information and become victims of fraud.",
        criteria:
          "Опасности цифрового мира: безопасность, зависимость, мошенничество."
      },
      {
        text:
          "I would suggest free computer courses for older people at local libraries and more IT lessons at school. Community centres could also run workshops on safe Internet use for all ages.",
        criteria:
          "Идеи, как улучшить компьютерную грамотность в регионе."
      }
    ]
  };

  var i;
  for (i = 0; i < pack.units.length; i++) {
    var u = pack.units[i];
    if (MODELS[u.id]) u.modelAnswers = MODELS[u.id];
  }
})(typeof window !== "undefined" ? window : this);
