/**
 * Exam numbered gaps — 4 fragments, gaps 1–8, phrase bank drag + click.
 * window.FCE_EXAM_NUMBERED_GAPS.mount({ root, unit, backHref, backLabel })
 */
(function (W) {
  "use strict";

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function parseDeckQuery(raw, deckIds) {
    if (!raw) return null;
    var picked = raw
      .split(",")
      .map(function (s) {
        return s.trim();
      })
      .filter(Boolean);
    if (!picked.length) return null;
    return deckIds.filter(function (id) {
      return picked.indexOf(id) >= 0;
    });
  }

  function renderFragmentParts(parts) {
    return parts
      .map(function (p) {
        if (p.t === "text") return escapeHtml(p.v);
        return (
          '<span class="eng-drop-pair"><span class="eng-g">(' +
          p.n +
          ')</span> <span class="eng-drop-zone empty" data-gap="' +
          p.n +
          '" data-label="' +
          p.n +
          '" title="Gap ' +
          p.n +
          '"></span></span>'
        );
      })
      .join("");
  }

  function renderDeckHtml(pack) {
    var fragments = (pack.fragments || [])
      .map(function (frag, i) {
        return (
          '<section class="eng-block" aria-labelledby="eng-' +
          escapeHtml(pack.id) +
          "-f" +
          i +
          '">' +
          '<h2 id="eng-' +
          escapeHtml(pack.id) +
          "-f" +
          i +
          '">' +
          escapeHtml(frag.heading) +
          "</h2>" +
          "<p>" +
          renderFragmentParts(frag.parts) +
          "</p>" +
          "</section>"
        );
      })
      .join("");

    var keyItems = (pack.answers || [])
      .map(function (a) {
        return "<li>" + escapeHtml(a.text) + "</li>";
      })
      .join("");

    var writeLines = [1, 2, 3, 4, 5, 6, 7, 8]
      .map(function () {
        return "<li>_________________________________________________</li>";
      })
      .join("");

    return (
      '<div class="eng-play-layout" data-deck-panel="' +
      escapeHtml(pack.id) +
      '">' +
      '<div class="eng-text-col">' +
      fragments +
      '<div class="eng-write-lines no-print">' +
      "<h3>Для печати: ответы в одной колонке</h3>" +
      "<ol>" +
      writeLines +
      "</ol>" +
      "</div>" +
      '<details class="eng-key">' +
      "<summary>Ключ (для преподавателя)</summary>" +
      "<ol>" +
      keyItems +
      "</ol>" +
      "</details>" +
      "</div>" +
      '<aside class="eng-word-bank-col" aria-label="Phrase bank">' +
      '<div class="eng-word-bank">' +
      "<h2>Фрагменты (перетащите в текст)</h2>" +
      '<p class="hint">8 фраз, порядок сверху — случайный. Сюда же можно сбрасывать лишние.</p>' +
      '<div class="eng-bank" data-bank="' +
      escapeHtml(pack.id) +
      '" aria-live="polite" aria-dropeffect="move"></div>' +
      '<div class="eng-toolbar">' +
      '<button type="button" data-shuffle="' +
      escapeHtml(pack.id) +
      '">Перемешать банк</button>' +
      '<button type="button" data-reset="' +
      escapeHtml(pack.id) +
      '">Сбросить всё</button>' +
      '<button type="button" data-check="' +
      escapeHtml(pack.id) +
      '">Проверить</button>' +
      "</div>" +
      '<p class="eng-msg-bar" data-msg="' +
      escapeHtml(pack.id) +
      '" role="status"></p>' +
      "</div>" +
      "</aside>" +
      "</div>"
    );
  }

  function shuffleChildren(el) {
    var list = [].slice.call(el.children);
    for (var i = list.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = list[i];
      list[i] = list[j];
      list[j] = t;
    }
    list.forEach(function (n) {
      el.appendChild(n);
    });
  }

  function wireDeck(pack, panelEl) {
    var bank = panelEl.querySelector('[data-bank="' + pack.id + '"]');
    var msgBar = panelEl.querySelector('[data-msg="' + pack.id + '"]');
    if (!bank || bank.getAttribute("data-wired") === "1") return;
    bank.setAttribute("data-wired", "1");

    var selectedChip = null;

    function makeChip(n, text) {
      var b = document.createElement("div");
      b.className = "eng-chip";
      b.setAttribute("draggable", "true");
      b.setAttribute("data-n", String(n));
      b.setAttribute("tabindex", "0");
      b.textContent = text;
      return b;
    }

    function allChips() {
      return [].slice.call(panelEl.querySelectorAll(".eng-chip"));
    }

    function clearSelect() {
      if (selectedChip) {
        selectedChip.classList.remove("pulse-select");
        selectedChip = null;
      }
    }

    function fixEmptyZones() {
      [].forEach.call(panelEl.querySelectorAll(".eng-drop-zone"), function (z) {
        if (z.querySelector(".eng-chip")) {
          z.classList.remove("empty");
          z.classList.add("has-chip");
        } else {
          z.classList.add("empty");
          z.classList.remove("has-chip");
        }
      });
    }

    function placeChipInZone(chip, zone) {
      if (!zone || !chip) return;
      var prev = zone.querySelector(".eng-chip");
      if (prev && prev !== chip) {
        bank.appendChild(prev);
      }
      zone.innerHTML = "";
      zone.appendChild(chip);
      fixEmptyZones();
    }

    function moveToBank(chip) {
      if (!chip || !chip.classList.contains("eng-chip")) return;
      bank.appendChild(chip);
      fixEmptyZones();
    }

    function hookChip(chip) {
      chip.addEventListener("dragstart", function (e) {
        clearSelect();
        e.dataTransfer.setData("text/plain", chip.getAttribute("data-n") || "");
        e.dataTransfer.effectAllowed = "move";
        chip.setAttribute("data-drag", "1");
      });
      chip.addEventListener("dragend", function () {
        chip.removeAttribute("data-drag");
      });
      chip.addEventListener("click", function (e) {
        e.stopPropagation();
        if (selectedChip === chip) {
          clearSelect();
          return;
        }
        clearSelect();
        selectedChip = chip;
        chip.classList.add("pulse-select");
      });
      chip.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          chip.click();
        }
      });
    }

    function buildBank() {
      bank.innerHTML = "";
      (pack.answers || []).forEach(function (a) {
        var c = makeChip(a.n, a.text);
        hookChip(c);
        bank.appendChild(c);
      });
      shuffleChildren(bank);
    }

    [].forEach.call(panelEl.querySelectorAll(".eng-drop-zone"), function (zone) {
      zone.addEventListener("dragover", function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      });
      zone.addEventListener("drop", function (e) {
        e.preventDefault();
        var id = e.dataTransfer.getData("text/plain");
        var chip = [].find.call(allChips(), function (c) {
          return c.getAttribute("data-n") === id;
        });
        if (!chip) return;
        placeChipInZone(chip, zone);
        clearSelect();
        msgBar.textContent = "";
        msgBar.className = "eng-msg-bar";
      });
      zone.addEventListener("click", function () {
        if (!selectedChip) return;
        var prev = zone.querySelector(".eng-chip");
        if (prev && prev !== selectedChip) {
          bank.appendChild(prev);
        }
        placeChipInZone(selectedChip, zone);
        clearSelect();
        msgBar.textContent = "";
        msgBar.className = "eng-msg-bar";
      });
    });

    bank.addEventListener("dragover", function (e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      bank.classList.add("drag-over");
    });
    bank.addEventListener("dragleave", function (e) {
      if (!bank.contains(e.relatedTarget)) bank.classList.remove("drag-over");
    });
    bank.addEventListener("drop", function (e) {
      e.preventDefault();
      bank.classList.remove("drag-over");
      var id = e.dataTransfer.getData("text/plain");
      var chip = [].find.call(allChips(), function (c) {
        return c.getAttribute("data-n") === id;
      });
      if (chip) moveToBank(chip);
      clearSelect();
    });
    bank.addEventListener("click", function (e) {
      if (e.target.classList && e.target.classList.contains("eng-chip")) return;
      if (selectedChip) {
        moveToBank(selectedChip);
        clearSelect();
      }
    });

    var btnShuffle = panelEl.querySelector('[data-shuffle="' + pack.id + '"]');
    var btnReset = panelEl.querySelector('[data-reset="' + pack.id + '"]');
    var btnCheck = panelEl.querySelector('[data-check="' + pack.id + '"]');

    if (btnShuffle) {
      btnShuffle.addEventListener("click", function () {
        var inBank = [].filter.call(bank.querySelectorAll(".eng-chip"), function (c) {
          return c.parentNode === bank;
        });
        inBank.forEach(function (c) {
          bank.appendChild(c);
        });
        shuffleChildren(bank);
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        [].forEach.call(panelEl.querySelectorAll(".eng-drop-zone"), function (z) {
          var c = z.querySelector(".eng-chip");
          if (c) bank.appendChild(c);
          z.classList.add("empty");
          z.classList.remove("has-chip");
        });
        buildBank();
        msgBar.textContent = "Все фрагменты снова в банке.";
        msgBar.className = "eng-msg-bar";
      });
    }

    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        var ok = 0;
        var total = 8;
        [].forEach.call(panelEl.querySelectorAll(".eng-drop-zone"), function (z) {
          var c = z.querySelector(".eng-chip");
          var g = parseInt(z.getAttribute("data-gap") || "0", 10);
          if (c && parseInt(c.getAttribute("data-n") || "0", 10) === g) ok += 1;
        });
        if (ok === total) {
          msgBar.textContent = "Верно: все 8 пропусков.";
          msgBar.className = "eng-msg-bar ok";
        } else {
          msgBar.textContent = "Совпало: " + ok + " из 8. Подправьте варианты.";
          msgBar.className = "eng-msg-bar bad";
        }
      });
    }

    panelEl.addEventListener("click", function (e) {
      if (
        e.target.closest(".eng-chip") ||
        e.target.closest(".eng-drop-zone") ||
        e.target === bank ||
        e.target.closest('[data-shuffle="' + pack.id + '"]') ||
        e.target.closest('[data-reset="' + pack.id + '"]') ||
        e.target.closest('[data-check="' + pack.id + '"]')
      ) {
        return;
      }
      clearSelect();
    });

    buildBank();
  }

  function mount(opts) {
    var root = typeof opts.root === "string" ? document.querySelector(opts.root) : opts.root;
    if (!root) return;

    var unit = parseInt(opts.unit, 10) || 1;
    var decks =
      (W.FCE_EXAM_NUMBERED_GAPS_DECKS && W.FCE_EXAM_NUMBERED_GAPS_DECKS.getDecks(unit)) || [];
    var backHref = opts.backHref || "unit" + unit + "-class-games.html";
    var backLabel = opts.backLabel || "Class Games";

    function syncCoolPhrases(deckId) {
      if (unit !== 1) return;
      var bridge = W.FCE_U1_COOL_PHRASES;
      if (!bridge) return;
      if (deckId) bridge.sync(deckId);
      else if (typeof bridge.clear === "function") bridge.clear();
    }

    root.innerHTML =
      '<div class="eng-shell">' +
      '  <div class="eng-nav-top" style="margin-bottom:14px;">' +
      '    <a href="' +
      escapeHtml(backHref) +
      '" style="color:#7dd3fc;font-weight:600;text-decoration:none;">' +
      escapeHtml("← " + backLabel) +
      "</a>" +
      "  </div>" +
      '  <div id="engPickScreen"></div>' +
      '  <div id="engPlayScreen" style="display:none;">' +
      '    <header class="eng-top">' +
      '      <h1 id="engPlayTitle">Экзамен: вставьте пропуски (точные фразы из текста)</h1>' +
      '      <p class="ins">Слева — текст, справа — <strong>фрагменты</strong>. Перетащите каждую фразу в пропуск <strong>(1)–(8)</strong> или: <strong>клик</strong> по фразе, затем <strong>клик</strong> по пустому пропуску. Вернуть в банк: перетяните в серую зону справа или снимите, кликнув по чипу, затем по банку.</p>' +
      '      <p class="eng-nav"><button type="button" id="engBtnChangeTexts" style="background:none;border:none;padding:0;color:#7dd3fc;font-weight:600;cursor:pointer;font:inherit;">← Выбрать другой текст</button></p>' +
      "    </header>" +
      '    <div id="engDeckTabs" class="eng-deck-tabs" hidden></div>' +
      '    <div id="engDeckPanels"></div>' +
      "  </div>" +
      "</div>";

    var pickScreen = root.querySelector("#engPickScreen");
    var playScreen = root.querySelector("#engPlayScreen");
    var deckTabs = root.querySelector("#engDeckTabs");
    var deckPanels = root.querySelector("#engDeckPanels");
    var playTitle = root.querySelector("#engPlayTitle");
    var btnChangeTexts = root.querySelector("#engBtnChangeTexts");

    var activeDecks = [];
    var activeDeckId = null;

    function showDeck(deckId) {
      activeDeckId = deckId;
      deckPanels.querySelectorAll("[data-deck-panel]").forEach(function (panelWrap) {
        var pid = panelWrap.getAttribute("data-deck-panel");
        panelWrap.style.display = pid === deckId ? "" : "none";
      });
      deckTabs.querySelectorAll(".eng-deck-tab").forEach(function (tab) {
        tab.classList.toggle("is-active", tab.getAttribute("data-tab") === deckId);
      });
      var deck = activeDecks.find(function (d) {
        return d.id === deckId;
      });
      if (deck) {
        playTitle.textContent = "Экзамен: " + deck.title;
      }
      syncCoolPhrases(deckId);
    }

    function startPlay(selectedIds) {
      activeDecks = decks.filter(function (d) {
        return selectedIds.indexOf(d.id) >= 0;
      });
      if (!activeDecks.length) return;

      pickScreen.style.display = "none";
      playScreen.style.display = "block";

      deckPanels.innerHTML = activeDecks.map(renderDeckHtml).join("");
      activeDecks.forEach(function (pack) {
        var panel = deckPanels.querySelector('[data-deck-panel="' + pack.id + '"]');
        if (panel) wireDeck(pack, panel);
      });

      if (activeDecks.length > 1) {
        deckTabs.hidden = false;
        deckTabs.innerHTML = activeDecks
          .map(function (d) {
            return (
              '<button type="button" class="eng-deck-tab" data-tab="' +
              escapeHtml(d.id) +
              '">' +
              escapeHtml(d.label) +
              "</button>"
            );
          })
          .join("");
        deckTabs.querySelectorAll(".eng-deck-tab").forEach(function (tab) {
          tab.addEventListener("click", function () {
            showDeck(tab.getAttribute("data-tab"));
          });
        });
      } else {
        deckTabs.hidden = true;
        deckTabs.innerHTML = "";
      }

      showDeck(activeDecks[0].id);
    }

    function renderPicker() {
      syncCoolPhrases(null);
      document.title = "Unit " + unit + " — Exam gaps 1–8";
      if (!decks.length) {
        pickScreen.innerHTML =
          '<div class="eng-empty">' +
          "<p><strong>Экзамен (как на листе)</strong></p>" +
          "<p>Для Unit " +
          unit +
          " пока нет текстов. Добавьте колоды в <code>js/fce-exam-numbered-gaps-decks.js</code>.</p>" +
          "</div>";
        pickScreen.style.display = "block";
        playScreen.style.display = "none";
        return;
      }

      var deckIds = decks.map(function (d) {
        return d.id;
      });
      var qDecks = parseDeckQuery(new URLSearchParams(location.search).get("decks"), deckIds);
      var defaultChecked = qDecks || deckIds.slice();

      var rows = decks
        .map(function (deck) {
          var checked = defaultChecked.indexOf(deck.id) >= 0 ? " checked" : "";
          return (
            '<label class="eng-pick-row" data-deck="' +
            escapeHtml(deck.id) +
            '">' +
            '<input type="checkbox" name="engDeck" value="' +
            escapeHtml(deck.id) +
            '"' +
            checked +
            " />" +
            '<div class="eng-pick-main"><strong>' +
            escapeHtml(deck.label) +
            "</strong><span>" +
            escapeHtml(deck.title) +
            " · " +
            escapeHtml(deck.blurb) +
            "</span></div>" +
            "</label>"
          );
        })
        .join("");

      pickScreen.innerHTML =
        '<header class="eng-top">' +
        "<h1>Экзамен (как на листе)</h1>" +
        '<p class="ins">4 фрагмента текста, пропуски <strong>(1)–(8)</strong>. Слева текст, справа банк фраз — drag and drop или клик.</p>' +
        "</header>" +
        '<div class="eng-pick-panel">' +
        "<h2 style=\"font-size:0.85rem;text-transform:uppercase;letter-spacing:0.08em;color:#7dd3fc;margin-bottom:10px;\">Тексты Unit " +
        unit +
        "</h2>" +
        '<p class="eng-pick-lead">Отметьте галочками, какие тексты открыть. Можно выбрать оба — переключение вкладками сверху.</p>' +
        '<div class="eng-pick-list" id="engPickList">' +
        rows +
        "</div>" +
        '<div class="eng-toolbar"><button type="button" id="engBtnStartPick">Начать</button></div>' +
        "</div>";

      pickScreen.style.display = "block";
      playScreen.style.display = "none";

      pickScreen.querySelectorAll(".eng-pick-row").forEach(function (row) {
        var input = row.querySelector('input[type="checkbox"]');
        row.addEventListener("click", function (e) {
          if (e.target === input) return;
          input.checked = !input.checked;
        });
      });

      pickScreen.querySelector("#engBtnStartPick").addEventListener("click", function () {
        var selected = [];
        pickScreen.querySelectorAll('input[name="engDeck"]:checked').forEach(function (cb) {
          selected.push(cb.value);
        });
        if (!selected.length) return;
        startPlay(selected);
      });

      if (qDecks && qDecks.length) {
        startPlay(qDecks);
      }
    }

    btnChangeTexts.addEventListener("click", function () {
      renderPicker();
    });

    renderPicker();
  }

  W.FCE_EXAM_NUMBERED_GAPS = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
