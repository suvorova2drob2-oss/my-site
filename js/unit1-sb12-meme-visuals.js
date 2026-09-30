/**
 * Unit 1 SB 1.2 — premium meme scenes (Lifestyle-style bright illustrations, SVG).
 * No target phrase on image. window.UNIT1_SB12_MEME_SCENE(id)
 */
(function (global) {
  "use strict";

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  function uri(body) {
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img">' +
      "<defs>" +
      '<filter id="sh" x="-20%" y="-20%" width="140%" height="140%">' +
      '<feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0f172a" flood-opacity="0.25"/>' +
      "</filter>" +
      '<filter id="soft" x="-10%" y="-10%" width="120%" height="120%">' +
      '<feGaussianBlur stdDeviation="1.2"/>' +
      "</filter>" +
      "</defs>" +
      body +
      "</svg>";
    return "data:image/svg+xml," + encodeURIComponent(svg);
  }

  function sky(a, b) {
    return (
      '<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="' +
      a +
      '"/><stop offset="100%" stop-color="' +
      b +
      '"/></linearGradient>'
    );
  }

  function frame(skyTop, skyBot, ground, inner) {
    return (
      sky(skyTop, skyBot) +
      '<rect width="512" height="512" fill="url(#sky)"/>' +
      '<ellipse cx="256" cy="520" rx="320" ry="90" fill="' +
      ground +
      '" opacity="0.35"/>' +
      '<rect y="360" width="512" height="152" fill="' +
      ground +
      '"/>' +
      '<circle cx="420" cy="88" r="46" fill="#fde68a" opacity="0.95" filter="url(#sh)"/>' +
      '<rect x="8" y="8" width="496" height="496" rx="28" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="4"/>' +
      inner
    );
  }

  function head(x, y, r, hair) {
    return (
      '<circle cx="' +
      x +
      '" cy="' +
      y +
      '" r="' +
      r +
      '" fill="#fdba74" filter="url(#sh)"/>' +
      '<path d="M' +
      (x - r) +
      " " +
      (y - 4) +
      " Q" +
      x +
      " " +
      (y - r - 8) +
      " " +
      (x + r) +
      " " +
      (y - 4) +
      '" fill="' +
      hair +
      '"/>'
    );
  }

  function body(x, y, w, h, color) {
    return (
      '<rect x="' +
      (x - w / 2) +
      '" y="' +
      y +
      '" width="' +
      w +
      '" height="' +
      h +
      '" rx="18" fill="' +
      color +
      '" filter="url(#sh)"/>'
    );
  }

  function person(x, y, opts) {
    opts = opts || {};
    var hair = opts.hair || "#1e293b";
    var shirt = opts.shirt || "#38bdf8";
    var pants = opts.pants || "#334155";
    var arm = opts.arm || "";
    return (
      head(x, y - 42, 28, hair) +
      body(x, y - 8, 56, 72, shirt) +
      '<rect x="' +
      (x - 22) +
      '" y="' +
      (y + 64) +
      '" width="20" height="52" rx="10" fill="' +
      pants +
      '"/>' +
      '<rect x="' +
      (x + 2) +
      '" y="' +
      (y + 64) +
      '" width="20" height="52" rx="10" fill="' +
      pants +
      '"/>' +
      arm
    );
  }

  function house(x, y, scale, color) {
    var s = scale || 1;
    return (
      '<g transform="translate(' +
      x +
      "," +
      y +
      ") scale(" +
      s +
      ')" filter="url(#sh)">' +
      '<rect x="-40" y="-10" width="80" height="70" rx="4" fill="' +
      (color || "#fef3c7") +
      '"/>' +
      '<path d="M-48 -10 L0 -52 L48 -10 Z" fill="#f87171"/>' +
      '<rect x="-12" y="20" width="24" height="40" rx="3" fill="#78350f"/>' +
      '<rect x="18" y="0" width="16" height="16" rx="2" fill="#7dd3fc" opacity="0.9"/>' +
      "</g>"
    );
  }

  var SCENES = {
    "sp1-easy": frame(
      "#bae6fd",
      "#fef9c3",
      "#86efac",
      house(100, 340, 0.85, "#fde68a") +
        house(190, 330, 1, "#fef3c7") +
        house(290, 325, 1.1, "#fff") +
        house(400, 335, 0.9, "#fde68a") +
        person(256, 300, {
          shirt: "#c084fc",
          arm:
            '<path d="M228 268 L180 240" stroke="#fdba74" stroke-width="10" stroke-linecap="round"/>' +
            '<path d="M284 268 L332 230" stroke="#fdba74" stroke-width="10" stroke-linecap="round"/>'
        }) +
        person(190, 295, { shirt: "#fbbf24", hair: "#57534e" })
    ),
    "sp1-fed-up": frame(
      "#cbd5e1",
      "#e2e8f0",
      "#94a3b8",
      '<rect x="60" y="200" width="90" height="70" rx="6" fill="#d97706" filter="url(#sh)"/>' +
        '<rect x="130" y="170" width="90" height="70" rx="6" fill="#b45309" filter="url(#sh)"/>' +
        '<rect x="200" y="210" width="90" height="70" rx="6" fill="#d97706" filter="url(#sh)"/>' +
        '<rect x="280" y="180" width="100" height="80" rx="6" fill="#92400e" filter="url(#sh)"/>' +
        person(320, 310, {
          shirt: "#64748b",
          arm:
            '<ellipse cx="350" cy="250" rx="22" ry="18" fill="#fdba74" transform="rotate(-20 350 250)"/>'
        }) +
        '<path d="M300 220 Q320 200 340 225" stroke="#475569" stroke-width="3" fill="none" opacity="0.6"/>'
    ),
    "sp1-got-rid": frame(
      "#7dd3fc",
      "#fef08a",
      "#4ade80",
      '<rect x="40" y="280" width="120" height="80" rx="8" fill="#a8a29e" filter="url(#sh)"/>' +
        '<text x="100" y="330" font-size="28" text-anchor="middle" fill="#fff" font-family="system-ui">£</text>' +
        '<path d="M180 300 L240 260" stroke="#f97316" stroke-width="6"/>' +
        '<ellipse cx="360" cy="280" rx="110" ry="70" fill="#38bdf8" filter="url(#sh)"/>' +
        '<path d="M300 280 Q360 220 420 260" fill="#fde047"/>' +
        '<rect x="330" y="250" width="14" height="50" fill="#854d0e" rx="3"/>' +
        person(150, 320, { shirt: "#ef4444" })
    ),
    "sp1-said-do": frame(
      "#e0f2fe",
      "#fce7f3",
      "#bbf7d0",
      '<rect x="80" y="220" width="352" height="120" rx="16" fill="#fff" opacity="0.85" filter="url(#sh)"/>' +
        person(180, 300, { shirt: "#6366f1" }) +
        person(340, 300, { shirt: "#ec4899", hair: "#713f12" }) +
        '<ellipse cx="260" cy="240" rx="70" ry="40" fill="#fff" stroke="#94a3b8" stroke-width="3"/>' +
        '<text x="260" y="252" font-size="42" text-anchor="middle" fill="#64748b" font-family="Georgia,serif">?</text>'
    ),
    "sp1-not-like-him": frame(
      "#ddd6fe",
      "#fef3c7",
      "#86efac",
      '<rect x="320" y="120" width="140" height="100" rx="8" fill="#fff" filter="url(#sh)"/>' +
        '<path d="M340 160 L380 140 L420 170 L400 200 Z" fill="#4ade80" opacity="0.5"/>' +
        person(220, 310, {
          shirt: "#0ea5e9",
          arm:
            '<rect x="248" y="228" width="36" height="12" rx="6" fill="#fdba74" transform="rotate(-30 266 234)"/>'
        }) +
        '<path d="M200 250 Q210 235 225 245" stroke="#334155" stroke-width="4" fill="none"/>'
    ),
    "sp2-stressed": frame(
      "#fecaca",
      "#fed7aa",
      "#d6d3d1",
      '<rect x="100" y="180" width="200" height="120" rx="10" fill="#475569" filter="url(#sh)"/>' +
        '<rect x="120" y="200" width="160" height="90" rx="4" fill="#1e293b"/>' +
        '<path d="M320 140 L320 200" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>' +
        '<ellipse cx="320" cy="210" rx="12" ry="18" fill="#38bdf8"/>' +
        person(280, 320, {
          shirt: "#64748b",
          hair: "#44403c",
          arm: '<path d="M250 260 L230 230" stroke="#475569" stroke-width="8" stroke-linecap="round"/>'
        })
    ),
    "sp2-wondering": frame(
      "#bae6fd",
      "#ecfccb",
      "#86efac",
      '<rect x="60" y="260" width="180" height="20" rx="10" fill="#a3e635" filter="url(#sh)"/>' +
        person(160, 300, { shirt: "#22c55e", hair: "#713f12" }) +
        person(340, 300, {
          shirt: "#f472b6",
          arm:
            '<path d="M310 250 L280 220" stroke="#fdba74" stroke-width="10" stroke-linecap="round"/>'
        })
    ),
    "sp2-firsthand": frame(
      "#c7d2fe",
      "#fef9c3",
      "#bbf7d0",
      '<rect x="40" y="140" width="200" height="160" rx="12" fill="#1e293b" filter="url(#sh)"/>' +
        '<rect x="60" y="160" width="160" height="100" rx="6" fill="#38bdf8" opacity="0.35"/>' +
        '<rect x="272" y="160" width="200" height="160" rx="12" fill="#fff" filter="url(#sh)"/>' +
        person(360, 290, { shirt: "#6366f1" }) +
        person(420, 290, { shirt: "#14b8a6", hair: "#57534e" }) +
        '<ellipse cx="372" cy="220" rx="40" ry="22" fill="#fef3c7"/>'
    ),
    "sp3-get-by": frame(
      "#fde68a",
      "#fed7aa",
      "#d4d4d8",
      '<rect x="120" y="240" width="272" height="100" rx="12" fill="#78716c" filter="url(#sh)"/>' +
        '<ellipse cx="256" cy="290" rx="50" ry="30" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>' +
        '<circle cx="230" cy="285" r="8" fill="#eab308"/><circle cx="256" cy="292" r="8" fill="#eab308"/>' +
        person(200, 320, { shirt: "#3b82f6" }) +
        person(310, 320, { shirt: "#ec4899", hair: "#292524" })
    ),
    "sp3-applications": frame(
      "#e0e7ff",
      "#fce7f3",
      "#cbd5e1",
      '<rect x="280" y="120" width="90" height="60" rx="6" fill="#fff" filter="url(#sh)"/>' +
        '<rect x="300" y="100" width="90" height="60" rx="6" fill="#fef3c7" filter="url(#sh)"/>' +
        '<rect x="320" y="80" width="90" height="60" rx="6" fill="#fff" filter="url(#sh)"/>' +
        '<rect x="340" y="60" width="90" height="60" rx="6" fill="#fecdd3" filter="url(#sh)"/>' +
        person(200, 310, { shirt: "#6366f1" }) +
        '<rect x="130" y="220" width="140" height="90" rx="8" fill="#334155" filter="url(#sh)"/>'
    ),
    "sp3-borrowing": frame(
      "#fef3c7",
      "#ffedd5",
      "#d6d3d1",
      person(160, 310, { shirt: "#94a3b8", hair: "#57534e" }) +
        person(100, 300, { shirt: "#f97316", hair: "#78716c" }) +
        person(220, 300, { shirt: "#fb7185", hair: "#44403c" }) +
        person(340, 310, {
          shirt: "#38bdf8",
          arm:
            '<path d="M320 260 L300 230 M360 260 L380 230" stroke="#fdba74" stroke-width="10" stroke-linecap="round"/>'
        }) +
        '<ellipse cx="280" cy="250" rx="40" ry="24" fill="#fef08a" stroke="#ca8a04" stroke-width="2" opacity="0.9"/>'
    ),
    "sp3-sell-car": frame(
      "#bae6fd",
      "#fef9c3",
      "#a8a29e",
      '<rect x="140" y="260" width="220" height="80" rx="16" fill="#ef4444" filter="url(#sh)"/>' +
        '<rect x="170" y="240" width="160" height="50" rx="10" fill="#fca5a5"/>' +
        '<circle cx="180" cy="340" r="22" fill="#1e293b"/><circle cx="320" cy="340" r="22" fill="#1e293b"/>' +
        '<rect x="230" y="200" width="100" height="36" rx="6" fill="#fff" filter="url(#sh)"/>' +
        '<rect x="238" y="208" width="84" height="20" rx="4" fill="#22c55e"/>' +
        person(380, 310, { shirt: "#64748b" })
    ),
    "sp5-gained": frame(
      "#7dd3fc",
      "#c4b5fd",
      "#86efac",
      '<ellipse cx="256" cy="200" rx="140" ry="90" fill="#fff" opacity="0.5" filter="url(#soft)"/>' +
        '<rect x="180" y="160" width="60" height="40" rx="4" fill="#f87171" transform="rotate(-8 210 180)"/>' +
        '<rect x="260" y="150" width="60" height="40" rx="4" fill="#4ade80" transform="rotate(6 290 170)"/>' +
        '<rect x="220" y="200" width="70" height="44" rx="4" fill="#38bdf8" transform="rotate(-4 255 222)"/>' +
        person(256, 320, {
          shirt: "#6366f1",
          arm:
            '<rect x="120" y="260" width="50" height="70" rx="8" fill="#78350f" transform="rotate(-15 145 295)"/>'
        })
    ),
    "sp5-finding-work": frame(
      "#bbf7d0",
      "#bae6fd",
      "#94a3b8",
      '<rect x="160" y="140" width="192" height="100" rx="8" fill="#cbd5e1" filter="url(#sh)"/>' +
        person(200, 310, { shirt: "#22c55e" }) +
        person(310, 310, { shirt: "#3b82f6", hair: "#1c1917" }) +
        '<rect x="200" y="250" width="50" height="66" rx="4" fill="#fff" filter="url(#sh)"/>' +
        '<rect x="290" y="250" width="50" height="66" rx="4" fill="#fff" filter="url(#sh)"/>'
    ),
    "sp5-benefits-person": frame(
      "#ecfccb",
      "#fef3c7",
      "#86efac",
      '<rect x="320" y="200" width="100" height="120" rx="6" fill="#fff" opacity="0.45" transform="rotate(8 370 260)"/>' +
        '<path d="M256 340 L256 180 Q256 120 290 140 Q320 160 300 200 Q280 240 256 260 Z" fill="#22c55e" filter="url(#sh)"/>' +
        person(180, 320, { shirt: "#8b5cf6" })
    ),
    "sp5-tolerant": frame(
      "#fde68a",
      "#fbcfe8",
      "#a7f3d0",
      person(160, 310, { shirt: "#ef4444", hair: "#1c1917" }) +
        person(256, 300, { shirt: "#3b82f6" }) +
        person(352, 310, { shirt: "#14b8a6", hair: "#713f12" }) +
        '<path d="M140 260 Q256 220 372 260" stroke="#f472b6" stroke-width="4" fill="none" opacity="0.7"/>'
    ),
    "sp5-employable": frame(
      "#ddd6fe",
      "#bae6fd",
      "#cbd5e1",
      person(200, 310, { shirt: "#6366f1" }) +
        person(310, 310, { shirt: "#ec4899", hair: "#44403c" }) +
        '<rect x="220" y="160" width="72" height="72" rx="36" fill="#fef08a" filter="url(#sh)"/>' +
        '<path d="M246 196 L256 176 L266 196 L256 210 Z" fill="#f59e0b"/>'
    ),
    "sp5-optimism": frame(
      "#fef08a",
      "#fed7aa",
      "#86efac",
      person(200, 310, {
        shirt: "#f97316",
        arm:
          '<path d="M228 240 L210 200" stroke="#fdba74" stroke-width="10" stroke-linecap="round"/>'
      }) +
        person(320, 310, { shirt: "#64748b", hair: "#57534e" })
    ),
    "sp5-value-home": frame(
      "#bae6fd",
      "#fce7f3",
      "#bbf7d0",
      '<rect x="300" y="180" width="140" height="100" rx="8" fill="#fff" filter="url(#sh)"/>' +
        '<rect x="320" y="200" width="100" height="60" rx="4" fill="#7dd3fc"/>' +
        house(340, 290, 0.55, "#fde68a") +
        person(200, 310, {
          shirt: "#38bdf8",
          arm:
            '<ellipse cx="230" cy="270" rx="28" ry="20" fill="#fef3c7" filter="url(#sh)"/>'
        })
    ),
    "sp8-strange-dishes": frame(
      "#fed7aa",
      "#fecdd3",
      "#d6d3d1",
      '<ellipse cx="256" cy="280" rx="120" ry="40" fill="#fff" filter="url(#sh)"/>' +
        '<circle cx="210" cy="260" r="28" fill="#a855f7"/>' +
        '<circle cx="256" cy="250" r="32" fill="#22c55e"/>' +
        '<circle cx="300" cy="265" r="26" fill="#f97316"/>' +
        person(256, 330, { shirt: "#0ea5e9", hair: "#1c1917" })
    ),
    "sp8-slow-pace": frame(
      "#7dd3fc",
      "#fef08a",
      "#fde047",
      '<rect x="80" y="200" width="120" height="24" rx="12" fill="#854d0e" filter="url(#sh)"/>' +
        '<circle cx="140" cy="212" r="18" fill="#fef3c7"/>' +
        '<path d="M100 260 Q180 300 260 260" stroke="#16a34a" stroke-width="6" fill="none"/>' +
        person(360, 310, { shirt: "#eab308", hair: "#57534e" })
    ),
    "sp8-dressing": frame(
      "#fbcfe8",
      "#ddd6fe",
      "#c4b5fd",
      person(180, 310, { shirt: "#94a3b8" }) +
        person(280, 300, { shirt: "#ec4899", hair: "#1c1917" }) +
        person(380, 300, { shirt: "#8b5cf6", hair: "#713f12" }) +
        '<path d="M260 180 L280 120 L300 180 L320 130 L340 190" stroke="#f472b6" stroke-width="3" fill="none"/>'
    ),
    "sp8-scruffy": frame(
      "#e2e8f0",
      "#fef3c7",
      "#cbd5e1",
      person(180, 310, { shirt: "#64748b", pants: "#475569" }) +
        person(300, 295, { shirt: "#1e293b", hair: "#0f172a" }) +
        person(380, 295, { shirt: "#be123c", hair: "#44403c" })
    )
  };

  global.UNIT1_SB12_MEME_SCENE = function (id) {
    var key = String(id || "").trim();
    if (SCENES[key]) return uri(SCENES[key]);
    return uri(
      frame(
        "#bae6fd",
        "#fef3c7",
        "#86efac",
        '<text x="256" y="260" font-size="22" text-anchor="middle" fill="#475569" font-family="system-ui,sans-serif">' +
          esc("SB 1.2") +
          "</text>"
      )
    );
  };
})(typeof window !== "undefined" ? window : globalThis);
