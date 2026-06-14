(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u13-arctic-foxes",
    unitLabel: "Unit 13",
    title: "Arctic foxes",
    lead:
      "Задание 1 · чтение вслух. Песцы в Арктике — 2 абзаца.",
    paragraphs: [
      "Arctic foxes live on the land and sea ice within the Arctic Circle. Winter in the Arctic is unlike winter in most parts of the world. From October to February, the sun never rises to shine warmth and light.",
      "Luckily, these small foxes have some useful adaptations for living in the icy Arctic. Their long, fluffy tails act like a blanket, keeping the fox warm when it wraps the tail around its body to sleep. Their feet also have a layer of thick fur, like built-in snow boots. This helps muffle an arctic fox's footsteps, making it harder for prey to hear them. And their white coats make it difficult for predators such as wolves, polar bears, and golden eagles to spot them among the ice and snow. When it's not trying to keep warm or avoid predators, an arctic fox is on the hunt for food. They prefer to eat small rodents called lemmings, but when times are tough, they'll eat whatever they can find: insects and berries."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "arctic-circle",
        label: "Arctic Circle",
        match: ["arctic circle"],
        hint: "ARctic Circle — within the Arctic Circle."
      },
      {
        id: "adaptations",
        label: "useful adaptations",
        match: ["adaptations"],
        hint: "ad-ap-TAY-shions — for living in the icy Arctic."
      },
      {
        id: "muffle",
        label: "muffle footsteps",
        match: ["muffle"],
        hint: "MUF-fle — приглушать шаги; harder for prey to hear."
      },
      {
        id: "prey",
        label: "prey",
        match: ["prey"],
        hint: "PREY — добыча; predators vs prey."
      },
      {
        id: "golden-eagles",
        label: "golden eagles",
        match: ["golden eagles"],
        hint: "GOLD-en EA-gles — в списке predators."
      },
      {
        id: "rodents",
        label: "rodents called lemmings",
        match: ["rodents", "lemmings"],
        hint: "RO-dents / LEM-mings — small rodents called lemmings."
      },
      {
        id: "built-in",
        label: "built-in snow boots",
        match: ["built-in", "built in"],
        hint: "BUILT-in — like built-in snow boots."
      },
      {
        id: "predators",
        label: "predators such as wolves",
        match: ["predators"],
        hint: "PRED-a-tors — wolves, polar bears, golden eagles (rising list)."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "October to February — даты чётко",
      "Список predators: wolves, polar bears, golden eagles",
      "muffle, lemmings, adaptations — без запинки",
      "Интонация в конце — falling"
    ]
  });
})(typeof window !== "undefined" ? window : this);
