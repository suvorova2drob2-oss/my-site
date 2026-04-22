/**
 * Prep Course CMS — дерево: папка → раздел → задание.
 * Сохранение: js/prep-site-content.js → localStorage (единый ключ для всего сайта + синхронизация вкладок).
 */
(function () {
  var CONFIG_URL = "config.json";
  var ENGINES = [{ id: "part1-mc-cloze", label: "Multiple Choice Cloze (Part 1)" }];

  var state = {
    config: null,
    selected: null,
    mode: "admin"
  };

  function $(id) {
    return document.getElementById(id);
  }

  function genId(p) {
    return (p || "id") + "_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 7);
  }

  function deepClone(o) {
    return JSON.parse(JSON.stringify(o));
  }

  function defaultConfig() {
    return {
      version: 1,
      title: "Мои курсы",
      folders: []
    };
  }

  function gapNums(passage) {
    var re = /\[\[(\d+)\]\]/g;
    var set = {};
    var m;
    while ((m = re.exec(String(passage || ""))) !== null) {
      var n = parseInt(m[1], 10);
      if (n > 0) set[n] = true;
    }
    return Object.keys(set)
      .map(function (x) {
        return parseInt(x, 10);
      })
      .sort(function (a, b) {
        return a - b;
      });
  }

  function maxGap(passage) {
    var nums = gapNums(passage);
    return nums.length ? nums[nums.length - 1] : 0;
  }

  function syncItemsToPassage(passage, items) {
    var nums = gapNums(passage);
    var out = [];
    for (var i = 0; i < nums.length; i++) {
      var prev = items && items[i];
      if (prev && prev.options && prev.options.length === 4) {
        out.push({ options: prev.options.slice(), correctIndex: Number(prev.correctIndex) || 0 });
      } else {
        out.push({ options: ["", "", "", ""], correctIndex: 0 });
      }
    }
    return out;
  }

  function validatePayload(payload) {
    var errs = [];
    if (!payload.title || !String(payload.title).trim()) errs.push("Нужен заголовок задания.");
    if (!payload.passage || !String(payload.passage).trim()) errs.push("Нужен текст с пропусками [[1]]…");
    var nums = gapNums(payload.passage);
    if (!nums.length) errs.push("Добавь хотя бы один пропуск [[1]] (кнопка «Сделать вопросом»).");
    var max = nums.length ? nums[nums.length - 1] : 0;
    for (var k = 1; k <= max; k++) {
      if (nums.indexOf(k) === -1) {
        errs.push("Пропуски должны идти подряд 1…" + max + " (сейчас не хватает [[" + k + "]]).");
        break;
      }
    }
    if (payload.passage.indexOf("[[0]]") !== -1) {
      if (!payload.example || !payload.example.letter || !String(payload.example.text || "").trim()) {
        errs.push("Для [[0]] укажи букву и текст примера.");
      }
    }
    if (nums.length !== (payload.items || []).length) {
      errs.push("Число блоков ответов должно совпадать с числом пропусков.");
    }
    return errs;
  }

  function findFolder(id) {
    return state.config.folders.find(function (f) {
      return f.id === id;
    });
  }

  function findSection(fid, sid) {
    var f = findFolder(fid);
    if (!f) return null;
    return f.sections.find(function (s) {
      return s.id === sid;
    });
  }

  function findItem(fid, sid, iid) {
    var s = findSection(fid, sid);
    if (!s) return null;
    return s.items.find(function (it) {
      return it.id === iid;
    });
  }

  function saveLocal() {
    try {
      if (typeof PrepSiteContent !== "undefined" && PrepSiteContent.save) {
        PrepSiteContent.save(state.config);
        return;
      }
    } catch (e0) {}
    try {
      localStorage.setItem("prep-site-content-v1", JSON.stringify(state.config));
    } catch (e) {}
  }

  function loadLocalSync() {
    if (typeof PrepSiteContent !== "undefined" && PrepSiteContent.load) {
      return PrepSiteContent.load();
    }
    try {
      var raw = localStorage.getItem("prep-site-content-v1");
      if (raw) return JSON.parse(raw);
    } catch (e2) {}
    return null;
  }

  function remountFolder(f) {
    var nf = deepClone(f);
    nf.id = genId("fold");
    nf.title = (f.title || "Курс") + " (копия)";
    nf.sections = ((nf.sections) || []).map(function (s) {
      var ns = deepClone(s);
      ns.id = genId("sec");
      ns.items = (ns.items || []).map(function (it) {
        var ni = deepClone(it);
        ni.id = genId("ex");
        return ni;
      });
      return ns;
    });
    return nf;
  }

  function remountSection(s) {
    var ns = deepClone(s);
    ns.id = genId("sec");
    ns.title = (s.title || "Раздел") + " (копия)";
    ns.items = (ns.items || []).map(function (it) {
      var ni = deepClone(it);
      ni.id = genId("ex");
      return ni;
    });
    return ns;
  }

  function clearSelectionIfDeletedFolder(fid) {
    if (!state.selected) return;
    if (state.selected.folderId === fid) state.selected = null;
  }

  function clearSelectionIfDeletedSection(fid, sid) {
    if (!state.selected) return;
    if (state.selected.folderId === fid && state.selected.sectionId === sid) state.selected = null;
  }

  function bindTreeActions(el) {
    el.addEventListener("click", function (ev) {
      var tool = ev.target.closest("[data-tree-act]");
      if (!tool) return;
      ev.preventDefault();
      ev.stopPropagation();
      if (state.mode !== "admin") return;
      var act = tool.getAttribute("data-tree-act");
      var fid = tool.getAttribute("data-fid");
      var sid = tool.getAttribute("data-sid");
      var f = findFolder(fid);
      if (!f) return;
      if (act === "rename-folder") {
        var nt = prompt("Новое название папки:", f.title);
        if (!nt || !nt.trim()) return;
        f.title = nt.trim();
        saveLocal();
        renderAll();
        return;
      }
      if (act === "dup-folder") {
        state.config.folders.push(remountFolder(f));
        saveLocal();
        var last = state.config.folders[state.config.folders.length - 1];
        state.selected = { type: "folder", folderId: last.id };
        renderAll();
        return;
      }
      if (act === "del-folder") {
        if (!confirm("Удалить папку «" + f.title + "» и всё внутри?")) return;
        state.config.folders = state.config.folders.filter(function (x) {
          return x.id !== fid;
        });
        clearSelectionIfDeletedFolder(fid);
        saveLocal();
        renderAll();
        return;
      }
      if (act === "rename-section") {
        var s = findSection(fid, sid);
        if (!s) return;
        var ns = prompt("Новое название раздела:", s.title);
        if (!ns || !ns.trim()) return;
        s.title = ns.trim();
        saveLocal();
        renderAll();
        return;
      }
      if (act === "dup-section") {
        var s2 = findSection(fid, sid);
        if (!s2) return;
        f.sections.push(remountSection(s2));
        saveLocal();
        var lastS = f.sections[f.sections.length - 1];
        state.selected = { type: "section", folderId: fid, sectionId: lastS.id };
        renderAll();
        return;
      }
      if (act === "del-section") {
        var s3 = findSection(fid, sid);
        if (!s3) return;
        if (!confirm("Удалить раздел «" + s3.title + "» и все задания?")) return;
        f.sections = f.sections.filter(function (x) {
          return x.id !== sid;
        });
        clearSelectionIfDeletedSection(fid, sid);
        saveLocal();
        renderAll();
      }
    });
  }

  function renderTree() {
    var el = $("treePanel");
    var cfg = state.config;
    var adm = state.mode === "admin";
    var html = '<div class="tree-head">Структура курса</div><ul class="tree-list">';
    cfg.folders.forEach(function (f) {
      var selF = state.selected && state.selected.folderId === f.id && state.selected.type === "folder";
      var toolsF = adm
        ? '<span class="tree-tools">' +
          '<button type="button" class="tico" title="Переименовать" data-tree-act="rename-folder" data-fid="' +
          esc(f.id) +
          '">✎</button>' +
          '<button type="button" class="tico" title="Копировать" data-tree-act="dup-folder" data-fid="' +
          esc(f.id) +
          '">⎘</button>' +
          '<button type="button" class="tico danger" title="Удалить" data-tree-act="del-folder" data-fid="' +
          esc(f.id) +
          '">✕</button></span>'
        : "";
      html +=
        '<li class="tree-folder"><div class="tree-row">' +
        '<button type="button" class="tree-line tree-grow' +
        (selF ? " is-sel" : "") +
        '" data-sel="folder" data-fid="' +
        f.id +
        '">📁 ' +
        esc(f.title) +
        "</button>" +
        toolsF +
        "</div>";
      html += "<ul>";
      f.sections.forEach(function (s) {
        var selS =
          state.selected && state.selected.folderId === f.id && state.selected.sectionId === s.id && state.selected.type === "section";
        var toolsS = adm
          ? '<span class="tree-tools">' +
            '<button type="button" class="tico" title="Переименовать" data-tree-act="rename-section" data-fid="' +
            esc(f.id) +
            '" data-sid="' +
            esc(s.id) +
            '">✎</button>' +
            '<button type="button" class="tico" title="Копировать" data-tree-act="dup-section" data-fid="' +
            esc(f.id) +
            '" data-sid="' +
            esc(s.id) +
            '">⎘</button>' +
            '<button type="button" class="tico danger" title="Удалить" data-tree-act="del-section" data-fid="' +
            esc(f.id) +
            '" data-sid="' +
            esc(s.id) +
            '">✕</button></span>'
          : "";
        html +=
          '<li><div class="tree-row">' +
          '<button type="button" class="tree-line tree-indent tree-grow' +
          (selS ? " is-sel" : "") +
          '" data-sel="section" data-fid="' +
          f.id +
          '" data-sid="' +
          s.id +
          '">📂 ' +
          esc(s.title) +
          "</button>" +
          toolsS +
          "</div>";
        html += "<ul>";
        s.items.forEach(function (it) {
          var selI =
            state.selected &&
            state.selected.folderId === f.id &&
            state.selected.sectionId === s.id &&
            state.selected.itemId === it.id &&
            state.selected.type === "item";
          html +=
            '<li><button type="button" class="tree-line tree-item tree-grow' +
            (selI ? " is-sel" : "") +
            '" data-sel="item" data-fid="' +
            f.id +
            '" data-sid="' +
            s.id +
            '" data-iid="' +
            it.id +
            '">📝 ' +
            esc(it.title) +
            " <span class=\"eng\">" +
            esc(it.engine) +
            "</span></button></li>";
        });
        html += "</ul></li>";
      });
      html += "</ul></li>";
    });
    html += "</ul>";
    el.innerHTML = html;
    el.querySelectorAll("button[data-sel]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var t = btn.getAttribute("data-sel");
        var fid = btn.getAttribute("data-fid");
        if (t === "folder") {
          state.selected = { type: "folder", folderId: fid };
        } else if (t === "section") {
          state.selected = { type: "section", folderId: fid, sectionId: btn.getAttribute("data-sid") };
        } else {
          state.selected = {
            type: "item",
            folderId: fid,
            sectionId: btn.getAttribute("data-sid"),
            itemId: btn.getAttribute("data-iid")
          };
        }
        renderAll();
      });
    });
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderWelcome() {
    $("mainPanel").innerHTML =
      '<div class="panel-inner">' +
      "<h2>Добро пожаловать</h2>" +
      "<p class=\"muted\">Всё сохраняется в браузер автоматически при кнопках «Сохранить». На главной (<code>index.html</code>) те же папки появляются в сетке сразу. Чтобы ученики на сервере увидели обновление после правок, сделай <strong>git push</strong> (файл <code>course-cms/config.json</code> можно обновить из репозитория при деплое). " +
      (state.mode === "admin"
        ? "Слева: папка → раздел → задание. У папок и разделов: ✎ ⎘ ✕."
        : "Выбери задание слева и нажми «Открыть».") +
      "</p></div>";
  }

  function renderFolderPanel(f) {
    var admin = state.mode === "admin";
    if (!admin) {
      $("mainPanel").innerHTML =
        '<div class="panel-inner">' +
        "<h2>" +
        esc(f.title) +
        '</h2><p class="muted">Выбери раздел:</p><ul class="item-list">' +
        f.sections
          .map(function (s) {
            return (
              '<li><button type="button" class="linklike js-open-sec" data-sid="' +
              esc(s.id) +
              '">' +
              esc(s.title) +
              "</button></li>"
            );
          })
          .join("") +
        "</ul></div>";
      $("mainPanel").querySelectorAll(".js-open-sec").forEach(function (b) {
        b.addEventListener("click", function () {
          state.selected = { type: "section", folderId: f.id, sectionId: b.getAttribute("data-sid") };
          renderAll();
        });
      });
      return;
    }
    $("mainPanel").innerHTML =
      '<div class="panel-inner">' +
      "<h2>" +
      esc(f.title) +
      "</h2>" +
      '<p class="muted">Папка курса. Внутри — разделы (подпапки).</p>' +
      '<div class="row-btns"><button type="button" class="btn primary" id="btnAddSec">+ Раздел</button></div>' +
      "</div>";
    $("btnAddSec").addEventListener("click", function () {
      var name = prompt("Название раздела (например Use of English):", "Use of English");
      if (!name) return;
      f.sections.push({ id: genId("sec"), title: name.trim(), items: [] });
      saveLocal();
      state.selected = { type: "section", folderId: f.id, sectionId: f.sections[f.sections.length - 1].id };
      renderAll();
    });
  }

  function renderSectionPanel(f, s) {
    var admin = state.mode === "admin";
    $("mainPanel").innerHTML =
      '<div class="panel-inner">' +
      "<h2>" +
      esc(s.title) +
      "</h2>" +
      "<p class=\"muted\">Раздел внутри «" +
      esc(f.title) +
      "».</p>" +
      (admin
        ? '<div class="row-btns">' +
          '<button type="button" class="btn primary" id="btnAddEx">+ Задание</button>' +
          "</div>" +
          '<ul class="item-list">' +
          s.items
            .map(function (it) {
              return (
                "<li><strong>" +
                esc(it.title) +
                '</strong> <span class="eng">' +
                esc(it.engine) +
                '</span> <span class="muted" style="font-size:0.8rem;">— клик в дереве слева</span></li>'
              );
            })
            .join("") +
          "</ul>"
        : '<ul class="item-list">' +
          s.items
            .map(function (it) {
              return (
                "<li><strong>" +
                esc(it.title) +
                '</strong> <button type="button" class="btn small play-btn" data-play="' +
                esc(it.id) +
                '">Открыть</button></li>'
              );
            })
            .join("") +
          "</ul>") +
      "</div>";
    if (admin) {
      $("btnAddEx").addEventListener("click", function () {
        var title = prompt("Название задания:", "Новое упражнение");
        if (!title) return;
        var engine = ENGINES[0].id;
        var payload = {
          title: title.trim(),
          subtitle: "",
          passage: "Paste your text here. Select a word and click «Сделать вопросом».\n\nSecond [[1]].",
          example: null,
          items: [{ options: ["", "", "", ""], correctIndex: 0 }]
        };
        payload.items = syncItemsToPassage(payload.passage, []);
        s.items.push({
          id: genId("ex"),
          title: title.trim(),
          engine: engine,
          payload: payload
        });
        saveLocal();
        var last = s.items[s.items.length - 1];
        state.selected = { type: "item", folderId: f.id, sectionId: s.id, itemId: last.id };
        renderAll();
      });
    }
    $("mainPanel").querySelectorAll(".play-btn").forEach(function (b) {
      b.addEventListener("click", function () {
        var iid = b.getAttribute("data-play");
        var it = s.items.find(function (x) {
          return x.id === iid;
        });
        if (it) playItem(it);
      });
    });
  }

  function playItem(it) {
    if (it.engine === "part1-mc-cloze") {
      var key = "cms_sess_" + it.id.replace(/[^a-zA-Z0-9_-]/g, "_");
      try {
        sessionStorage.setItem(key, JSON.stringify(it.payload));
      } catch (e) {
        alert("Не удалось сохранить задание для плеера.");
        return;
      }
      var back = encodeURIComponent(location.pathname + location.search.split("#")[0]);
      var url =
        "../use-of-english/part1-mc-cloze/index.html?context=" +
        encodeURIComponent("cms_" + it.id) +
        "&sessionKey=" +
        encodeURIComponent(key) +
        "&back=" +
        back +
        "&backLabel=" +
        encodeURIComponent("К курсу");
      window.location.href = url;
      return;
    }
    alert("Этот тип движка пока не подключён: " + it.engine);
  }

  function renderItemEditor(f, s, it) {
    var p = it.payload;
    var admin = state.mode === "admin";
    if (!admin) {
      $("mainPanel").innerHTML =
        '<div class="panel-inner"><h2>' +
        esc(it.title) +
        '</h2><p class="muted">' +
        esc(it.engine) +
        '</p><button type="button" class="btn primary" id="btnPlay">Открыть задание</button></div>';
      $("btnPlay").addEventListener("click", function () {
        playItem(it);
      });
      return;
    }

    $("mainPanel").innerHTML =
      '<div class="panel-inner">' +
      "<h2>Редактор: " +
      esc(it.title) +
      "</h2>" +
      '<div class="field"><label>Название карточки</label><input type="text" id="fldCardTitle" /></div>' +
      '<div class="field"><label>Заголовок в упражнении</label><input type="text" id="fldTitle" /></div>' +
      '<div class="field"><label>Подзаголовок / инструкция</label><input type="text" id="fldSub" /></div>' +
      '<div class="field"><label>Текст (вставь целиком, выдели слово → «Сделать вопросом»)</label>' +
      '<textarea id="fldPassage" spellcheck="false"></textarea></div>' +
      '<div class="toolbar">' +
      '<button type="button" class="btn primary" id="btnMakeGap">Сделать вопросом из выделения</button>' +
      '<button type="button" class="btn" id="btnEx0">Вставить пример [[0]] в позицию курсора</button>' +
      "</div>" +
      '<div class="field row">' +
      '<label>Пример (0): буква</label><input type="text" id="fldExL" maxlength="1" style="width:48px"/>' +
      '<label>текст после —</label><input type="text" id="fldExT" style="flex:1"/></div>' +
      '<div class="field import-row">' +
      "<label>Импорт вариантов для пропуска №</label>" +
      '<input type="number" id="fldImpN" min="1" value="1" style="width:64px"/>' +
      '<input type="text" id="fldImpLine" placeholder="word1, word2, word3, word4" style="flex:1"/>' +
      '<button type="button" class="btn" id="btnImp">Импорт вариантов</button>' +
      "</div>" +
      '<div id="gapBlocks"></div>' +
      '<p class="err" id="editErr"></p>' +
      '<div class="row-btns"><button type="button" class="btn primary" id="btnSaveIt">Сохранить задание</button></div>' +
      "</div>";

    $("fldCardTitle").value = it.title;
    $("fldTitle").value = p.title || "";
    $("fldSub").value = p.subtitle || "";
    $("fldPassage").value = p.passage || "";
    $("fldExL").value = (p.example && p.example.letter) || "";
    $("fldExT").value = (p.example && p.example.text) || "";

    function redrawGaps() {
      var passage = $("fldPassage").value;
      var nums = gapNums(passage);
      p.items = syncItemsToPassage(passage, p.items);
      var host = $("gapBlocks");
      host.innerHTML = nums
        .map(function (num, idx) {
          var itm = p.items[idx] || { options: ["", "", "", ""], correctIndex: 0 };
          var letters = ["A", "B", "C", "D"];
          var opts = letters
            .map(function (L, j) {
              return (
                '<div class="opt-row"><span class="L">' +
                L +
                '</span><input type="text" class="opt-inp" data-idx="' +
                idx +
                '" data-oj="' +
                j +
                '" value="' +
                esc(itm.options[j]) +
                '"/></div>'
              );
            })
            .join("");
          return (
            '<div class="gap-card"><div class="gap-h">Пропуск (' +
            num +
            ')</div>' +
            opts +
            '<div class="cor-row"><label>Верный</label><select data-idx="' +
            idx +
            '" class="sel-cor">' +
            [0, 1, 2, 3]
              .map(function (k) {
                return (
                  "<option value=\"" +
                  k +
                  '"' +
                  (Number(itm.correctIndex) === k ? " selected" : "") +
                  ">" +
                  letters[k] +
                  "</option>"
                );
              })
              .join("") +
            "</select></div></div>"
          );
        })
        .join("");
      host.querySelectorAll(".opt-inp").forEach(function (inp) {
        inp.addEventListener("input", function () {
          var idx = parseInt(inp.getAttribute("data-idx"), 10);
          var j = parseInt(inp.getAttribute("data-oj"), 10);
          if (!p.items[idx]) p.items[idx] = { options: ["", "", "", ""], correctIndex: 0 };
          p.items[idx].options[j] = inp.value;
        });
      });
      host.querySelectorAll(".sel-cor").forEach(function (sel) {
        sel.addEventListener("change", function () {
          var idx = parseInt(sel.getAttribute("data-idx"), 10);
          if (!p.items[idx]) p.items[idx] = { options: ["", "", "", ""], correctIndex: 0 };
          p.items[idx].correctIndex = parseInt(sel.value, 10) || 0;
        });
      });
    }

    $("fldPassage").addEventListener("input", function () {
      p.passage = $("fldPassage").value;
      p.items = syncItemsToPassage(p.passage, p.items);
      redrawGaps();
    });

    $("btnMakeGap").addEventListener("click", function () {
      var ta = $("fldPassage");
      var a = ta.selectionStart;
      var b = ta.selectionEnd;
      if (a == null || b == null || a >= b) {
        $("editErr").textContent = "Выдели слово или фразу в тексте.";
        return;
      }
      var sel = ta.value.slice(a, b);
      if (!sel.trim()) {
        $("editErr").textContent = "Выделение пустое.";
        return;
      }
      var next = maxGap(ta.value) + 1;
      ta.value = ta.value.slice(0, a) + "[[" + next + "]]" + ta.value.slice(b);
      p.passage = ta.value;
      p.items = syncItemsToPassage(p.passage, p.items);
      $("editErr").textContent = "";
      redrawGaps();
    });

    $("btnEx0").addEventListener("click", function () {
      var ta = $("fldPassage");
      var pos = ta.selectionStart != null ? ta.selectionStart : ta.value.length;
      ta.value = ta.value.slice(0, pos) + "[[0]]" + ta.value.slice(pos);
      p.passage = ta.value;
      p.items = syncItemsToPassage(p.passage, p.items);
      redrawGaps();
    });

    $("btnImp").addEventListener("click", function () {
      var n = parseInt($("fldImpN").value, 10);
      var line = ($("fldImpLine").value || "").trim();
      if (!isFinite(n) || n < 1) {
        $("editErr").textContent = "Укажи номер пропуска ≥ 1.";
        return;
      }
      var parts = line.split(/[,;|]/).map(function (x) {
        return x.trim();
      });
      if (parts.length < 4) {
        $("editErr").textContent = "Нужно четыре варианта, разделённых запятой (или ; |).";
        return;
      }
      var nums = gapNums($("fldPassage").value);
      var idx = nums.indexOf(n);
      if (idx === -1) {
        $("editErr").textContent = "В тексте нет [[" + n + "]].";
        return;
      }
      p.items = syncItemsToPassage($("fldPassage").value, p.items);
      p.items[idx] = {
        options: [parts[0], parts[1], parts[2], parts[3]],
        correctIndex: p.items[idx] ? p.items[idx].correctIndex : 0
      };
      $("editErr").textContent = "";
      redrawGaps();
    });

    $("btnSaveIt").addEventListener("click", function () {
      it.title = $("fldCardTitle").value.trim() || it.title;
      p.title = $("fldTitle").value.trim();
      p.subtitle = $("fldSub").value.trim();
      p.passage = $("fldPassage").value;
      if (p.passage.indexOf("[[0]]") !== -1) {
        p.example = {
          letter: ($("fldExL").value || "C").trim().toUpperCase().slice(0, 1),
          text: ($("fldExT").value || "").trim()
        };
      } else {
        p.example = null;
      }
      p.items = syncItemsToPassage(p.passage, p.items);
      var errs = validatePayload(p);
      $("editErr").textContent = errs.join(" ");
      if (errs.length) return;
      saveLocal();
      renderTree();
    });

    redrawGaps();
  }

  function renderMain() {
    if (!state.selected) {
      renderWelcome();
      return;
    }
    var sel = state.selected;
    if (sel.type === "folder") {
      var f = findFolder(sel.folderId);
      if (f) renderFolderPanel(f);
      return;
    }
    if (sel.type === "section") {
      var f2 = findFolder(sel.folderId);
      var s = findSection(sel.folderId, sel.sectionId);
      if (f2 && s) renderSectionPanel(f2, s);
      return;
    }
    if (sel.type === "item") {
      var f3 = findFolder(sel.folderId);
      var s2 = findSection(sel.folderId, sel.sectionId);
      var it = findItem(sel.folderId, sel.sectionId, sel.itemId);
      if (f3 && s2 && it) renderItemEditor(f3, s2, it);
    }
  }

  function renderAll() {
    renderTree();
    renderMain();
  }

  function boot() {
    var sp = new URLSearchParams(location.search);
    state.mode = sp.get("mode") === "student" ? "student" : "admin";
    var wantFolder = sp.get("folder");

    function wireUi() {
      $("cmsTitle").textContent = state.config.title || "Курсы";
      $("modeBadge").textContent = state.mode === "admin" ? "Админ" : "Студент";
      $("modeBadge").className = "badge " + (state.mode === "admin" ? "b-admin" : "b-student");

      var adminBar = $("adminBar");
      if (adminBar) adminBar.style.display = state.mode === "admin" ? "flex" : "none";

      $("btnModeAdmin").addEventListener("click", function () {
        var q = new URLSearchParams(location.search);
        q.set("mode", "admin");
        location.search = q.toString();
      });
      $("btnModeStudent").addEventListener("click", function () {
        var q2 = new URLSearchParams(location.search);
        q2.set("mode", "student");
        location.search = q2.toString();
      });
      $("btnAddFolder").addEventListener("click", function () {
        var t = prompt("Название папки (курс):", "Новый курс");
        if (!t) return;
        state.config.folders.push({ id: genId("fold"), title: t.trim(), sections: [] });
        saveLocal();
        var nf = state.config.folders[state.config.folders.length - 1];
        state.selected = { type: "folder", folderId: nf.id };
        renderAll();
      });
      $("btnImportFile").addEventListener("change", function (ev) {
        var f = ev.target.files && ev.target.files[0];
        ev.target.value = "";
        if (!f) return;
        var r = new FileReader();
        r.onload = function () {
          try {
            var j = JSON.parse(r.result);
            if (!j.folders) throw new Error("bad");
            state.config = j;
            saveLocal();
            state.selected = null;
            renderAll();
          } catch (e) {
            alert("Не удалось прочитать JSON.");
          }
        };
        r.readAsText(f, "UTF-8");
      });
      $("btnImportFileTrigger").addEventListener("click", function () {
        $("btnImportFile").click();
      });

      if (!$("treePanel").getAttribute("data-tree-bound")) {
        $("treePanel").setAttribute("data-tree-bound", "1");
        bindTreeActions($("treePanel"));
      }

      state.selected = state.selected || null;
      if (wantFolder) {
        var wf = state.config.folders.find(function (x) {
          return x.id === wantFolder;
        });
        if (wf) state.selected = { type: "folder", folderId: wf.id };
      }
      if (!state.selected && state.config.folders[0]) {
        state.selected = { type: "folder", folderId: state.config.folders[0].id };
      }
      renderAll();
    }

    var data = loadLocalSync();
    state.config = data && data.folders ? data : defaultConfig();
    if (!state.config.folders) state.config.folders = [];

    if (state.config.folders.length) {
      saveLocal();
      wireUi();
      return;
    }

    fetch(CONFIG_URL, { cache: "no-store" })
      .then(function (r) {
        return r.ok ? r.json() : null;
      })
      .then(function (j) {
        if (j && j.folders && j.folders.length) {
          state.config = j;
        } else if (state.mode === "admin") {
          state.config.folders.push({
            id: genId("fold"),
            title: "Новый курс",
            sections: [{ id: genId("sec"), title: "Use of English", items: [] }]
          });
        }
        saveLocal();
        wireUi();
      })
      .catch(function () {
        if (state.mode === "admin") {
          state.config.folders.push({
            id: genId("fold"),
            title: "Новый курс",
            sections: [{ id: genId("sec"), title: "Use of English", items: [] }]
          });
        }
        saveLocal();
        wireUi();
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
