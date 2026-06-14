/**
 * Unit 12 · SB Track 12.1 — Disabled access to national parks (Part 3 MC).
 */
(function (w) {
  "use strict";

  var pack = w.__CPE_LISTENING_P3_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u12-sb12-1-disabled-access",
    title: "Disabled access to national parks",
    trackLabel: "RF_C2_SB_Track 12.1",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/cpe/12/RF_C2_SB_Track%2012.1.mp3",
    instructionHtml:
      "You will hear part of a discussion in which <strong>Alex Rogers</strong> from a community action group and <strong>Nadiya Thompson</strong> from the National Parks Service are discussing disabled access to national parks and other outdoor spaces. For questions <strong>1–5</strong>, choose the answer (<strong>A</strong>, <strong>B</strong>, <strong>C</strong> or <strong>D</strong>) which fits best according to what you hear.",
    questions: [
      {
        num: 1,
        prompt: "What is Alex's opinion about the National Parks Service?",
        key: "C",
        choices: [
          {
            letter: "A",
            text: "It fails to understand the needs of disabled walkers.",
          },
          {
            letter: "B",
            text: "It has only provided the bare minimum of disabled access.",
          },
          {
            letter: "C",
            text: "It prioritises disabled access less than other organisations.",
          },
          {
            letter: "D",
            text: "It imagines disabled people have little interest in hiking.",
          },
        ],
        explainEn:
          "Alex contrasts national parks with urban sectors (transport, buildings, hospitality) that are \"making great strides\" in accessibility — inclusivity is \"absent in our national parks\" by comparison.",
        distractorWrongEn: {
          A: "Alex stresses lack of access on trails, not that the service misunderstands needs.",
          B: "He does not frame the issue as a bare minimum already provided.",
          D: "Nadiya later says disabled people are keen to get outdoors; Alex does not say they lack interest.",
        },
      },
      {
        num: 2,
        prompt: "According to Nadiya, the new disabled access plan came about",
        key: "B",
        choices: [
          {
            letter: "A",
            text: "because of pressure from organisations with vested interests.",
          },
          {
            letter: "B",
            text: "after negotiations between disparate groups of people.",
          },
          {
            letter: "C",
            text: "by approaching the problem with a different mindset.",
          },
          {
            letter: "D",
            text: "due to revisions in the process for enacting new policies.",
          },
        ],
        explainEn:
          "Nadiya says complaints led to \"a lot of consultation with charities, local government and health experts\" before a proposal was finalised.",
        distractorWrongEn: {
          A: "She mentions community groups' complaints, not vested-interest lobbying.",
          C: "A new mindset is not presented as the driver of the plan.",
          D: "Policy-process revisions are not mentioned.",
        },
      },
      {
        num: 3,
        prompt: "When discussing the National Parks Service, both Alex and Nadiya agree that",
        key: "A",
        choices: [
          {
            letter: "A",
            text: "it should take the lead on securing more funding.",
          },
          {
            letter: "B",
            text: "it has failed to grasp the extent of the issue.",
          },
          {
            letter: "C",
            text: "it needs guidance from a wider range of experts.",
          },
          {
            letter: "D",
            text: "it has been slow to enact the necessary changes.",
          },
        ],
        explainEn:
          "Nadiya cites lack of funding as a major obstacle and explains funding applications; Alex agrees this is a good approach and that they want to be involved in presenting the case.",
        distractorWrongEn: {
          B: "Nadiya emphasises commitment and progress; both focus on funding, not failure to understand scale.",
          C: "Consultation already happened; the shared point is securing resources.",
          D: "Alex is frustrated about pace, but Nadiya stresses active work — they align on funding strategy instead.",
        },
      },
      {
        num: 4,
        prompt: "When discussing her work, Alex reveals her hope to help disabled people",
        key: "A",
        choices: [
          {
            letter: "A",
            text: "have a higher degree of self-belief.",
          },
          {
            letter: "B",
            text: "be more inspirational.",
          },
          {
            letter: "C",
            text: "take more risks.",
          },
          {
            letter: "D",
            text: "be more observant of the natural beauty.",
          },
        ],
        explainEn:
          "Alex takes wheelchair users hiking \"to give them the confidence they need to open their eyes to the possibilities\" and to challenge themselves.",
        distractorWrongEn: {
          B: "Their experiences may inspire others, but Alex's aim for participants is confidence.",
          C: "She urges adventure, but the core goal stated is confidence/self-belief.",
          D: "Observing beauty is not the focus of her explanation.",
        },
      },
      {
        num: 5,
        prompt: "Why do some schemes not get implemented in national parks?",
        key: "C",
        choices: [
          {
            letter: "A",
            text: "Their complexity makes them impractical in many parks.",
          },
          {
            letter: "B",
            text: "It is difficult to get agreement on the finer details.",
          },
          {
            letter: "C",
            text: "They are neglected in favour of more urgent matters.",
          },
          {
            letter: "D",
            text: "The National Parks Service does not have sufficient resources.",
          },
        ],
        explainEn:
          "Nadiya says some plans \"lay idle on someone's desk, gathering dust while other things take priority\" despite initiatives being thought up.",
        distractorWrongEn: {
          A: "Complexity is not given as the reason schemes stall.",
          B: "Disagreement on details is not mentioned.",
          D: "Funding is discussed earlier; here she points to priorities, not only lack of money.",
        },
      },
    ],
    transcriptParagraphs: [
      {
        speaker: "I",
        text:
          "Today we're discussing access to hiking trails in our outdoor spaces and specifically national parks. With me are Alex Rogers from local community action group, Access All Areas, who advocate for improved access for people with disabilities, and Nadiya Thompson from the National Parks Service. Alex, let's start with you. Could you give us an outline of what the key issues are for disabled people in this particular context.",
      },
      {
        speaker: "A",
        text:
          "Sure. Our countryside is criss-crossed by a network of fantastic walking and hiking trails, many of which can be found in national parks, and yet the vast majority of them are completely inaccessible to those people living with disabilities. This is in contrast to many urban settings where provision is quickly becoming more widespread. I mean just think about public transport, municipal buildings, hospitality and tourism. These sectors have been making great strides in accessibility either due to legal obligations or for commercial reasons. It sends a positive message about inclusivity that is absent in our national parks.",
      },
      {
        speaker: "I",
        text: "Nadiya, how would you respond to that?",
      },
      {
        speaker: "N",
        text:
          "The National Parks Service is fully committed to improving accessibility and is working hard to implement positive changes in this area as soon as possible. We understand full well that disabled people have as much right as everyone else and are just as keen to get out and about in our beautiful natural spaces. In recent years complaints have been mounting up from groups such as yours, Alex, and after a lot of consultation with charities, local government and health experts, I believe we've now got a solid and workable proposal finalised which will improve access for wheelchair users, as well as for people with other health conditions or impairments.",
      },
      {
        speaker: "A",
        text:
          "While it's good that a plan has finally been agreed on, it's a shame that it takes so much effort to move things in the right direction. Community action groups like mine have to constantly pile on the pressure on the National Parks Service in order to effect change and this can be a very frustrating process.",
      },
      {
        speaker: "N",
        text:
          "I can appreciate Alex's frustration with the situation, but we have made progress over the last decade. One of the largest obstacles standing in the way of what we want to achieve is a lack of funding both government and private. Our current funding applications aim to highlight the benefits of spending time in nature and the service's responsibility to provide access for all citizens and it's why we are consulting people like Alex to help us present our case in the best possible light.",
      },
      {
        speaker: "I",
        text: "Alex, do you think this is a good approach?",
      },
      {
        speaker: "A",
        text:
          "I agree, it's something that we have been trying to get involved in for years. However, I have to say that we have little power as an organisation in terms of attracting investment, although we can continue to advocate for the health benefits.",
      },
      {
        speaker: "I",
        text: "Nadiya, is this a fair assessment of the situation in your view?",
      },
      {
        speaker: "N",
        text:
          "In my view, yes, it is. We see the role of community action groups as more connected with campaigning and raising awareness among the disabled community. Their data gathering is also a valuable support.",
      },
      {
        speaker: "A",
        text:
          "We focus on encouraging participation; you know, taking groups of wheelchair users on a hike to give them the confidence they need to open their eyes to the possibilities. We want to urge them on to be more adventurous and challenge themselves through outdoor activities like hiking. More than just inspirational, their lived experiences can be very powerful at persuading people of the need to upgrade paths and trails so that they are wheelchair-friendly and cater for people with other disabilities, such as prosthetic limbs. We have started running workshops for the national parks service employees so they can learn about the achievements of disabled hikers in places with proper access. It's about getting everyone on board to change the mindset of wider society.",
      },
      {
        speaker: "I",
        text:
          "Yes, I see how they could be really meaningful to a lot of people. How have the parks service employees reacted to these workshops?",
      },
      {
        speaker: "N",
        text:
          "Very enthusiastically in all the parks we've tried them in. Working with Alex on this has not only been really enlightening but also given us a fresh perspective on why it's needed. Actually, among the national parks and other organisations that manage outdoor spaces, there are plenty of initiatives being thought up, but the key thing is that we have to actually go through with them and not just pay them lip service. Unfortunately, some of these plans can lay idle on someone's desk, gathering dust while other things take priority.",
      },
      {
        speaker: "I",
        text: "Ah, right. And do you have any way of addressing this?",
      },
      {
        speaker: "N",
        text: "We're trying to make Alex and groups like hers more of an integral part of what we do.",
      },
      {
        speaker: "A",
        text: "And we are delighted to bring a raft of experience to the table.",
      },
    ],

    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Alex",
            text:
              "Sure. Our countryside is criss-crossed by a network of fantastic walking and hiking trails, many of which can be found in national parks, and yet the vast majority of them are completely inaccessible to those people living with disabilities. This is in contrast to many urban settings where provision is quickly becoming more widespread. I mean just think about public transport, municipal buildings, hospitality and tourism. These sectors have been making great strides in accessibility either due to legal obligations or for commercial reasons. It sends a positive message about inclusivity that is absent in our national parks.",
          },
        ],
      },
      {
        turns: [
          {
            speaker: "Nadiya",
            text:
              "The National Parks Service is fully committed to improving accessibility and is working hard to implement positive changes in this area as soon as possible. We understand full well that disabled people have as much right as everyone else and are just as keen to get out and about in our beautiful natural spaces. In recent years complaints have been mounting up from groups such as yours, Alex, and after a lot of consultation with charities, local government and health experts, I believe we've now got a solid and workable proposal finalised which will improve access for wheelchair users, as well as for people with other health conditions or impairments.",
          },
        ],
      },
      {
        turns: [
          {
            speaker: "Alex",
            text:
              "While it's good that a plan has finally been agreed on, it's a shame that it takes so much effort to move things in the right direction. Community action groups like mine have to constantly pile on the pressure on the National Parks Service in order to effect change and this can be a very frustrating process.",
          },
          {
            speaker: "Nadiya",
            text:
              "I can appreciate Alex's frustration with the situation, but we have made progress over the last decade. One of the largest obstacles standing in the way of what we want to achieve is a lack of funding both government and private. Our current funding applications aim to highlight the benefits of spending time in nature and the service's responsibility to provide access for all citizens and it's why we are consulting people like Alex to help us present our case in the best possible light.",
          },
          {
            speaker: "Alex",
            text:
              "I agree, it's something that we have been trying to get involved in for years. However, I have to say that we have little power as an organisation in terms of attracting investment, although we can continue to advocate for the health benefits.",
          },
        ],
      },
      {
        turns: [
          {
            speaker: "Alex",
            text:
              "We focus on encouraging participation; you know, taking groups of wheelchair users on a hike to give them the confidence they need to open their eyes to the possibilities. We want to urge them on to be more adventurous and challenge themselves through outdoor activities like hiking. More than just inspirational, their lived experiences can be very powerful at persuading people of the need to upgrade paths and trails so that they are wheelchair-friendly and cater for people with other disabilities, such as prosthetic limbs.",
          },
        ],
      },
      {
        turns: [
          {
            speaker: "Nadiya",
            text:
              "Actually, among the national parks and other organisations that manage outdoor spaces, there are plenty of initiatives being thought up, but the key thing is that we have to actually go through with them and not just pay them lip service. Unfortunately, some of these plans can lay idle on someone's desk, gathering dust while other things take priority.",
          },
        ],
      },
    ],

    huntLabs: [
      {
        num: 1,
        key: "C",
        paragraphIndex: 0,
        evidencePromptEn:
          "Mark the contrast between urban sectors and national parks on accessibility.",
        explainEn:
          "Other sectors are \"making great strides\"; inclusivity is \"absent in our national parks\".",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text:
              "positive message about inclusivity that is absent in our national parks",
          },
          {
            kind: "hit",
            sol: "d",
            text: "completely inaccessible to those people living with disabilities",
            wrongOption: "A",
            distractExplainEn:
              "Alex describes missing access on trails — not that the service fails to understand walkers' needs.",
          },
        ],
      },
      {
        num: 2,
        key: "B",
        paragraphIndex: 1,
        evidencePromptEn:
          "Find the phrase about how the plan was developed.",
        explainEn:
          "The plan followed consultation with charities, local government and health experts.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text:
              "after a lot of consultation with charities, local government and health experts",
          },
          {
            kind: "hit",
            sol: "d",
            text: "complaints have been mounting up from groups such as yours",
            wrongOption: "A",
            distractExplainEn:
              "Community pressure is mentioned, not organisations with vested interests.",
          },
        ],
      },
      {
        num: 3,
        key: "A",
        paragraphIndex: 2,
        evidencePromptEn:
          "Mark the shared point about funding and presenting the case.",
        explainEn:
          "Nadiya cites lack of funding and consulting Alex; Alex agrees the approach is right.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "lack of funding both government and private",
          },
          {
            kind: "hit",
            sol: "d",
            text: "takes so much effort to move things in the right direction",
            wrongOption: "D",
            distractExplainEn:
              "Alex's frustration about pace — not what both speakers agree the service should do.",
          },
        ],
      },
      {
        num: 4,
        key: "A",
        paragraphIndex: 3,
        evidencePromptEn:
          "Find what Alex hopes to give disabled hikers.",
        explainEn:
          "She wants to give them \"confidence\" to see new possibilities.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text:
              "give them the confidence they need to open their eyes to the possibilities",
          },
          {
            kind: "hit",
            sol: "d",
            text: "More than just inspirational",
            wrongOption: "B",
            distractExplainEn:
              "Their stories may inspire others — Alex's aim for participants is confidence/self-belief.",
          },
        ],
      },
      {
        num: 5,
        key: "C",
        paragraphIndex: 4,
        evidencePromptEn:
          "Mark why good schemes sometimes never happen.",
        explainEn:
          "Plans sit idle while \"other things take priority\".",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text:
              "lay idle on someone's desk, gathering dust while other things take priority",
          },
          {
            kind: "hit",
            sol: "d",
            text: "plenty of initiatives being thought up",
            wrongOption: "A",
            distractExplainEn:
              "Ideas exist — the problem is implementation, not that schemes are too complex.",
          },
        ],
      },
    ],
  });
})(typeof window !== "undefined" ? window : globalThis);
