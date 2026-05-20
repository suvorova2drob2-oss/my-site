/**
 * Unit content and hub tiles. Add UNITS[n] + UNITS_HUB[n] for new units.
 * Unit 8 actionKey values are wired in index.html (U8_ACTIVITY_ACTIONS: u8_treasureHub, u8_lexicalEnv, u8_speakRetell).
 */
(function (global) {
    'use strict';

    global.UNITS_HUB_ORDER = [8, 9];

    global.UNITS_HUB = {
        8: {
            screen: 'screen-unit8',
            cls: 'unit-tile unit-8',
            html:
                '<strong>Unit 8</strong><span>Environment collocations</span><span style="display:block;color:var(--muted);font-size:10px;margin-top:6px;line-height:1.3;">Lexical trainer + Vocab Gym (Unit 9 engine) + Use of English &middot; Word formation</span>'
        },
        9: {
            screen: 'screen-unit9',
            cls: 'unit-tile unit-9',
            html:
                '<strong>Unit 9</strong><span>Vocabulary &middot; Exam only</span><span style="display:block;color:var(--primary);font-size:10px;margin-top:6px;line-height:1.3;">Reading: The robots are taking over</span>'
        }
    };

    global.UNITS = {
        8: {
            activityHub: {
                treasure: {
                    title: 'Treasure Hunt',
                    lead: 'Match paraphrases to exact phrases in the passage, as in Unit 9. Three short readings: environment, politics & society, industry & law.',
                    readings: [
                        {
                            title: 'Unit 8 — environment & policy lexis',
                            line1: 'Tap the phrase that matches each paraphrase. +1 to total score per correct match.',
                            line2: 'A Environment → B Politics & society → C Industry & law',
                            actionKey: 'u8_treasureHub'
                        }
                    ]
                },
                lexical: {
                    title: 'Lexical trainer',
                    lead: 'Two packs: Environment collocations and Environment collocations 2 — type the missing chunk using the hint. Three hearts per pack.',
                    readings: [
                        {
                            title: 'Environment collocations',
                            line1: 'Keywords: catastrophe, disposal, erosion, habitats, tourism, waste, wind farms · 2–3 word gaps + hints',
                            line2: 'Full-sentence prompts · seven chunks to master',
                            actionKey: 'u8_lexicalEnv'
                        },
                        {
                            title: 'Environment collocations 2',
                            line1: 'Council waste services, habitats, floods, sustainable growth, landfill, reefs, coastlines · seven gaps',
                            line2: 'Same typed-gap mechanic as pack 1 · vocabulary box style',
                            actionKey: 'u8_lexicalEnv2'
                        }
                    ]
                },
                speaking: {
                    title: 'Speaking trainer',
                    lead: 'Read the full article, then timed retell with key phrases only (40 s), same flow as Unit 9.',
                    readings: [
                        {
                            title: 'ACT NOW SAYS PUBLIC OPINION',
                            line1: 'Step 1: full text · Step 2: retell with phrase tags · 40 s timer',
                            line2: 'Environment article with collocations filled in',
                            actionKey: 'u8_speakRetell'
                        }
                    ]
                },
                exams: {
                    title: 'Exams',
                    lead: 'Exam tasks per reading will be listed here after you attach materials.',
                    readings: []
                }
            },
            treasureHunt: {
                envTasks: [
                    {
                        syn: 'A speed of change never seen before (very common for describing climate shifts)',
                        id: '1'
                    },
                    {
                        syn: 'A place where something spreads or multiplies; in a figurative sense a "hotbed" (literal: nesting / breeding place)',
                        id: '2'
                    },
                    { syn: 'Alarmingly high contamination in air or water', id: '3' },
                    { syn: 'Delicate ocean habitats easily disrupted by stressors', id: '4' }
                ],
                polTasks: [
                    { syn: 'A well-known advocacy / pressure organisation', id: '1' },
                    { syn: 'Lower than at any point on record (ratings, morale, support)', id: '2' },
                    { syn: 'Calm or win over people who attack the policy', id: '3' },
                    { syn: 'No real follow-through on what was publicly promised', id: '4' }
                ],
                indTasks: [
                    { syn: 'Illegally disposing of dangerous industrial rubbish', id: '1' },
                    { syn: 'Officially given stronger supervision / monitoring powers', id: '2' }
                ]
            },
            lexicalEnv: {
                /** Must match data-speakers on #u8-lex-reading-env in index.html */
                packSpeaker: 'Environment collocations',
                collocations: [
                    {
                        hint: 'A very serious disaster affecting nature, climate or ecosystems',
                        before: 'Scientists warned that unchecked warming might cause an ',
                        after: ' on a scale we have rarely seen.',
                        ans: 'environmental catastrophe'
                    },
                    {
                        hint: 'The organised process of getting rid of rubbish or materials safely',
                        before: 'The city invested in modern ',
                        after: ' so less plastic reaches rivers and seas.',
                        ans: 'waste disposal'
                    },
                    {
                        hint: 'Gradual wearing away of soil or land, often by wind or water',
                        before: 'Farmers planted trees along the slope to slow ',
                        after: ' after heavy storms.',
                        ans: 'soil erosion'
                    },
                    {
                        hint: 'Natural places where plants and animals live in the wild',
                        before: 'The reserve was designed to protect ',
                        after: ' for rare birds and insects.',
                        ans: 'natural habitats'
                    },
                    {
                        hint: 'Travel that tries not to harm nature or local communities',
                        before: 'The island promotes ',
                        after: ' instead of unchecked hotel sprawl.',
                        ans: 'sustainable tourism'
                    },
                    {
                        hint: 'Harmful rubbish from industry or chemicals',
                        before: 'Strict rules cover transport of ',
                        after: ' from industrial sites.',
                        ans: 'toxic waste'
                    },
                    {
                        hint: 'Groups of turbines that produce electricity from wind, often at sea',
                        before: 'Several countries are expanding ',
                        after: ' in shallow coastal waters.',
                        ans: 'offshore wind farms'
                    }
                ]
            },
            lexicalEnv2: {
                /** Must match data-speakers on #u8-lex-reading-env2 in index.html */
                packSpeaker: 'Environment collocations 2',
                collocations: [
                    {
                        hint: 'Regular service that picks up rubbish from homes (often arranged by the council)',
                        before: 'It will take a concerted effort from all citizens to convince the council that the frequency of our ',
                        after: ' should be increased.',
                        ans: 'waste collection'
                    },
                    {
                        hint: 'Protecting natural places where plants and animals live (e.g. forests and jungles)',
                        before: 'The last international meeting of climate experts described ',
                        after: ', especially forests and jungles, as the most important issue facing humanity today.',
                        ans: 'habitat preservation'
                    },
                    {
                        hint: 'A severe disaster affecting nature or ecosystems (here: flooding on a huge scale)',
                        before: 'This ',
                        after: ' was caused by the river, which burst its banks and flooded after torrential rains.',
                        ans: 'ecological catastrophe'
                    },
                    {
                        hint: 'Meeting today\u2019s needs without compromising those of future generations',
                        before: 'Agriculture should be more focused on ',
                        after: ", irrespective of the challenges and costs involved. We should be able to meet society's needs today without compromising those of tomorrow.",
                        ans: 'sustainable development'
                    },
                    {
                        hint: 'Rubbish produced in homes (often contrasted with industrial waste)',
                        before: 'Some countries still send far too much of their ',
                        after: ' to landfill instead of investing in upgrading recycling facilities.',
                        ans: 'household waste'
                    },
                    {
                        hint: 'A natural underwater environment where sea life lives (e.g. a coral reef)',
                        before: 'The pollution levels in a ',
                        after: ' like a coral reef only have to increase slightly before they have devastating effects on the wildlife.',
                        ans: 'marine habitat'
                    },
                    {
                        hint: 'The wearing away of land along the coast by the sea',
                        before: 'Governments of low-lying countries must address the continued ',
                        after: ' that is affecting communities living by the sea.',
                        ans: 'coastal erosion'
                    }
                ]
            },
            speakingTrainer: {
                retellRounds: [
                    {
                        title: 'ACT NOW SAYS PUBLIC OPINION',
                        accent: '#22c55e',
                        fullText:
                            'Astonishingly, just 30% of local citizens think the council is doing enough to prevent an ecological catastrophe, according to a recent survey by a prominent campaign group. Following major storms over the past few weeks, coastal erosion is said to be increasing at an unprecedented rate. The impact of this is not just alarming to homeowners on that stretch of land, but also to local wildlife groups, who point to the cliffs as breeding ground for puffins, amongst other species. ' +
                            'A series of newspaper articles exposing the shocking levels of plastic pollution on our beaches has resulted in more being done to promote sustainable tourism in the region, especially ahead of peak seasons, such as summer. With opinion polls already at an all-time low, it is perhaps no surprise that meetings are now said to be hurriedly taking place with the MP for the region. In an apparent bid to appease critics who point to his lack of action on the renewable energy pledge he made two years ago, discussions are reported to be centred on the option of building several offshore wind farms on our eastern coastline. ' +
                            'However, development of such a project is sure to concern sea life charities, who are bound to point to the impact such a project would have on already fragile marine habitats. Since the national scandal three years ago, which found a number of factories to have been dumping hazardous waste into the sea, killing fish populations, charities have been granted more oversight of the area. While this has led to more responsible waste disposal in the area, fish populations are still said to be below previous levels.',
                        phrases: [
                            'ecological catastrophe',
                            'prominent campaign group',
                            'coastal erosion',
                            'unprecedented rate',
                            'breeding ground',
                            'shocking levels of plastic pollution',
                            'sustainable tourism',
                            'at an all-time low',
                            'appease critics',
                            'lack of action on the renewable energy pledge',
                            'offshore wind farms',
                            'fragile marine habitats',
                            'dumping hazardous waste',
                            'granted more oversight',
                            'waste disposal'
                        ]
                    }
                ]
            }
        }
    };
    global.SPEAK_U8_ROUNDS = global.UNITS[8].speakingTrainer.retellRounds;
})(typeof window !== 'undefined' ? window : this);
