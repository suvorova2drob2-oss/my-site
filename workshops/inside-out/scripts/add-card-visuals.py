import re

path = r"c:\Users\a9191\Desktop\my-site\workshops\inside-out\js\inside-out-workshop.js"
text = open(path, encoding="utf-8").read()

card_art = {
    "s01e01": "img/pdf/s1-p01-img02.png",
    "s01e02": "img/pdf/s1-p03-img01.png",
    "s01e03": "img/pdf/s1-page-04.png",
    "s01e04": "img/pdf/s1-p05-img01.png",
    "s01e05": "img/pdf/s2pdf-p02-img01.png",
    "s01e06": "img/pdf/s2pdf-page-04.png",
    "s01e07": "img/pdf/s2pdf-p05-img01.png",
    "s01e08": "img/pdf/s2pdf-p06-img01.png",
    "s01e09": "img/pdf/s2pdf-p07-img01.png",
    "s01e10": "img/pdf/s2pdf-p08-img01.png",
}

card_phrases = {
    "s01e01": [
        "Isn't that great?",
        "Things couldn't be better",
        "Look out! Sharp turn.",
        "He doesn't love us anymore.",
    ],
    "s01e02": [
        "Guys, you're overreacting",
        "Step on it, Daddy.",
        "Can you die from moving?",
        "It smells like something died in here",
    ],
    "s01e03": [
        "an empty room is an opportunity",
        "We're in solitary confinement.",
        "I'm starting to envy the dead mouse.",
        "Riley can't live here.",
    ],
    "s01e04": [
        "Who puts broccoli on pizza?",
        "you ruined pizza",
        "My Dad's got a steel stomach.",
        "definitely not when Dad was singing.",
    ],
    "s01e05": [
        "I'm having a breakdown.",
        "Try to think of something funny.",
        "milk came out of her nose",
        "Everything just starts feeling droopy.",
    ],
    "s01e06": [
        "My nerves are shut.",
        "the missing van",
        "it could be worse.",
        "this move has been a bust.",
    ],
    "s01e07": [
        "skip school tomorrow",
        "no one should see us",
        "cry until we can't breathe",
        "scream that curse word we know",
    ],
    "s01e08": [
        'spell "meteor"',
        "stands out today and also blends in",
        "They're judging us.",
        "we're crying at school.",
    ],
    "s01e09": [
        "keep it subtle",
        "She's never acted like this before.",
        "Signal the husband.",
    ],
    "s01e10": [
        "Is it garbage night?",
        "I could strangle him right now.",
        "School was great, all right?",
        "Well, that was a disaster.",
    ],
}

for sid, art in card_art.items():
    text = re.sub(
        rf'(id: "{sid}",[\s\S]*?)coverThumb: "[^"]+"',
        rf'\1cardArt: "{art}",\n      coverThumb: "{art}"',
        text,
        count=1,
    )
    phrases = card_phrases[sid]
    arr = ",\n        ".join('"' + p.replace('"', '\\"') + '"' for p in phrases)
    if f'id: "{sid}"' in text and "cardPhrases:" not in text.split(f'id: "{sid}"')[1].split("beats:")[0]:
        text = re.sub(
            rf'(id: "{sid}",[\s\S]*?coverThumb: "[^"]+",)',
            rf"\1\n      cardPhrases: [\n        {arr}\n      ],",
            text,
            count=1,
        )

# beat() blocks without separate phrases column — phrases live in watch panel
text = text.replace(
    'blocks: ["watch", "phrases", "context", "speak"],',
    'blocks: ["watch", "context", "speak"],',
)

open(path, "w", encoding="utf-8").write(text)
print("ok")
