/**
 * Listening Part 3 — Art restoration (Track 9.4): shared with index.html and vocabulary-tic-tac-toe.
 * Sync answer substrings with `audio-practice/art-restoration-data.js` where needed.
 *
 * P3 Art restoration — one row per teaching item.
 * keyword: headword (Word Bank title, flip back “target phrase”).
 * definition: English sense only; must NOT parrot the idiom, quote the script chunk, or name the key phrase
 *   (so flip / hints test recall, not reading the answer on the same side as the “definition”).
 * paraphrase: short hint for games; keep free of the exact target wording where possible.
 * ans: exact script substring for games (Track 9.4).
 */
var ART_REST_LISTEN_DATA = [
    {
        keyword: 'Get your teeth into (sth)',
        paraphrase: 'to start a difficult, interesting job and work at it with real energy and commitment',
        definition:
            'To throw yourself with enthusiasm into work that is demanding and worth your full attention, not a casual or half-hearted go.',
        ans: 'get my teeth into'
    },
    {
        keyword: 'Knock sth out',
        paraphrase: 'to do or complete something in a very short time, often without great care for finish',
        definition:
            'To deliver or complete something in a very short time, often in a hasty, rough way — speed matters more than polish; similar in tone to bashing or rattling something off in no time.',
        ans: 'knock out a Klimt or a Monet in no time'
    },
    {
        keyword: 'The bottom line',
        paraphrase: 'the main point, the one thing that really matters when everything else is cleared away',
        definition:
            'The decisive fact or the main result when the argument is stripped to what really counts, not the surrounding detail or decoration.',
        ans: 'the bottom line is'
    },
    {
        keyword: 'Go out the window',
        paraphrase: 'to stop being valid; to be abandoned, like a rule or deadline that no longer applies',
        definition:
            'Said of a plan, limit, or promise that is set aside, ignored, or no longer in force, as if it no longer mattered.',
        ans: 'goes out the window'
    },
    {
        keyword: 'Cast an eye over (sth)',
        paraphrase: 'to look at something fairly quickly, to check, assess, or get an overall impression',
        definition:
            'To look through or skim something quickly in order to size it up, check it, or get an overall impression, not a full read.',
        ans: "cast an eye over what I'm doing"
    },
    {
        keyword: 'Have an ace up your sleeve',
        paraphrase: 'a secret advantage you keep in reserve and only show when you need to win a point',
        definition:
            'A private advantage you keep in reserve and play only at the right moment, when it can change the outcome. Others may think you are out of options.',
        ans: 'ace up my sleeve'
    },
    {
        keyword: 'Get the picture',
        paraphrase: 'to understand what is really going on; to see the point of the situation',
        definition:
            'To understand the situation as a whole; to grasp what is going on, not just a single detail. Here the field is visual art, so the colloquial form and the subject echo each other in passing.',
        ans: 'get the picture'
    },
    {
        keyword: 'Chock full of',
        paraphrase: 'so full that there is almost no room left; packed with something',
        definition:
            'Completely or tightly full — an informal, emphatic way to say a space, schedule, or list has almost no spare room, crammed with people, things, or material.',
        ans: 'chock full of masterpieces from throughout the ages'
    },
    {
        keyword: 'Day in, day out',
        paraphrase: 'every day, in the same way, without a break, especially when the routine is dull',
        definition:
            'A phrase for sameness: the same monotonous pattern repeated every single day, often used for boredom, but also to stress sheer persistence over time.',
        ans: 'day in day out'
    },
    {
        keyword: 'Ringing endorsement',
        paraphrase: 'a loud, unambiguous, whole-hearted statement of support or approval',
        definition:
            'Loud, unambiguous, whole-hearted public praise. In a negative line in the same script, the speaker inverts the idea: the situation is a weak, almost ironic form of that praise, not a strong one.',
        ans: 'a ringing endorsement'
    },
    {
        keyword: 'Finely honed skills',
        paraphrase: 'expert skills that have been practised and refined until they are very sharp and precise',
        definition:
            'Professional ability shaped and refined by long practice until the work is precise, controlled, and at a very high level — the opposite of rough, amateur, or unpractised output.',
        ans: 'finely honed technical skills'
    },
    {
        keyword: 'More often than not',
        paraphrase: 'in most cases; on most occasions; more times than the opposite is true',
        definition:
            'In the majority of cases; the usual tendency, while still allowing the occasional exception. A neutral, slightly formal “usually.”',
        ans: 'more often than not'
    },
    {
        keyword: 'Contingent on',
        paraphrase: 'depending on a particular condition; only true or possible if something else is true',
        definition:
            'A formal, precise way to say that a result is conditional: it only holds if something else proves to be the case, often in policy, law, or academic style.',
        ans: "contingent on the problems we uncover as we go along"
    },
    {
        keyword: 'At the outset',
        paraphrase: 'at the very beginning, when a process or project is first set up, not late on',
        definition:
            'Right at the start of a process, when a team or a plan is first being set up, before mid-project or late adjustments. The time focus is the very first stage.',
        ans: 'at the outset'
    },
    {
        keyword: 'Hours on end',
        paraphrase: 'for a very long, continuous stretch of time, often without a proper break',
        definition:
            'A long, unbroken stretch of time on one and the same activity, often to suggest weariness, monotony, or deep concentration, rather than a short sitting.',
        ans: 'for hours on end'
    },
    {
        keyword: 'Paint-by-numbers gig',
        paraphrase: 'a mechanical, rule-following job with no need for real judgment, like filling in a template',
        definition:
            'A job that is mechanical, by-the-book, and leaves no real room for judgment or creativity — a metaphor from hobby kits with numbered areas and fixed colours, where you only fill in, not design.',
        ans: 'paint by numbers gig'
    },
    {
        keyword: 'Not be stretched (not being stretched)',
        paraphrase: 'if work does not “stretch” you, it is too easy and does not use your real level',
        definition:
            'In professional use, a role should challenge you at the right level. If it does not, the work is too light: you are not using your real ability, you are not growing, and the job under-uses you.',
        ans: "feel like I'm being stretched"
    },
    {
        keyword: 'Historical accuracy',
        paraphrase: 'how faithfully a restored object or display matches the known facts of the past',
        definition:
            'The requirement for serious museums: treatment, materials, and labelling are defensible in light of what is known of the real past, before a piece may be shown in public in that setting.',
        ans: 'historically accurate before they are allowed to go on display to the public'
    }
];
