/**
 * Prep Course CMS — tree: folder → section → exercise.
 * Persistence: js/prep-site-content.js → localStorage (shared site key + tab sync).
 */
(function () {
  var CONFIG_URL = "config.json";
  var ENGINES = [{ id: "part1-mc-cloze", label: "Multiple Choice Cloze (Part 1)" }];

  var state = {
    config: null,
    selected: null,
    mode: "admin",
    /** Структура курса (папки/секции) в localStorage только после «Save course». */
    courseDirty: false
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
      title: "My courses",
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
    if (!payload.title || !String(payload.title).trim()) errs.push("Exercise title is required.");
    if (!payload.passage || !String(payload.passage).trim()) errs.push("Passage text with gaps [[1]]… is required.");
    var nums = gapNums(payload.passage);
    if (!nums.length) errs.push("Add at least one gap [[1]] (use “Make gap from selection”).");
    var max = nums.length ? nums[nums.length - 1] : 0;
    for (var k = 1; k <= max; k++) {
      if (nums.indexOf(k) === -1) {
        errs.push("Gaps must run in order 1…" + max + " (missing [[" + k + "]]).");
        break;
      }
    }
    if (payload.passage.indexOf("[[0]]") !== -1) {
      if (!payload.example || !payload.example.letter || !String(payload.example.text || "").trim()) {
        errs.push("For [[0]] set the example letter and text.");
      }
    }
    if (nums.length !== (payload.items || []).length) {
      errs.push("Number of answer blocks must match the number of gaps.");
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
    if (!f || !f.sections) return null;
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

  function syncSaveCourseUi() {
    var btn = $("btnSaveCourse");
    var hint = $("courseUnsavedHint");
    if (btn) btn.disabled = state.mode !== "admin" || !state.courseDirty;
    if (hint) {
      hint.style.display = state.mode === "admin" && state.courseDirty ? "inline" : "none";
    }
  }

  function markCourseDirty() {
    if (state.mode !== "admin") return;
    state.courseDirty = true;
    syncSaveCourseUi();
  }

  function flushCourseStorage() {
    saveLocal();
    state.courseDirty = false;
    syncSaveCourseUi();
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
    nf.title = (f.title || "Course") + " (copy)";
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
    ns.title = (s.title || "Section") + " (copy)";
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
        var nt = prompt("New folder name:", f.title);
        if (!nt || !nt.trim()) return;
        f.title = nt.trim();
        markCourseDirty();
        renderAll();
        return;
      }
      if (act === "dup-folder") {
        state.config.folders.push(remountFolder(f));
        markCourseDirty();
        var last = state.config.folders[state.config.folders.length - 1];
        state.selected = { type: "folder", folderId: last.id };
        renderAll();
        return;
      }
      if (act === "del-folder") {
        if (!confirm("Delete folder “" + f.title + "” and everything inside?")) return;
        state.config.folders = state.config.folders.filter(function (x) {
          return x.id !== fid;
        });
        clearSelectionIfDeletedFolder(fid);
        markCourseDirty();
        renderAll();
        return;
      }
      if (act === "rename-section") {
        var s = findSection(fid, sid);
        if (!s) return;
        var ns = prompt("New section name:", s.title);
        if (!ns || !ns.trim()) return;
        s.title = ns.trim();
        markCourseDirty();
        renderAll();
        return;
      }
      if (act === "dup-section") {
        var s2 = findSection(fid, sid);
        if (!s2) return;
        f.sections.push(remountSection(s2));
        markCourseDirty();
        var lastS = f.sections[f.sections.length - 1];
        state.selected = { type: "section", folderId: fid, sectionId: lastS.id };
        renderAll();
        return;
      }
      if (act === "del-section") {
        var s3 = findSection(fid, sid);
        if (!s3) return;
        if (!confirm("Delete section “" + s3.title + "” and all exercises?")) return;
        f.sections = f.sections.filter(function (x) {
          return x.id !== sid;
        });
        clearSelectionIfDeletedSection(fid, sid);
        markCourseDirty();
        renderAll();
      }
    });
  }

  function renderTree() {
    var el = $("treePanel");
    var cfg = state.config;
    var adm = state.mode === "admin";
    var html = '<div class="tree-head">Course structure</div><ul class="tree-list">';
    cfg.folders.forEach(function (f) {
      var selF = state.selected && state.selected.folderId === f.id && state.selected.type === "folder";
      var toolsF = adm
        ? '<span class="tree-tools">' +
          '<button type="button" class="tico" title="Rename" data-tree-act="rename-folder" data-fid="' +
          esc(f.id) +
          '">✎</button>' +
          '<button type="button" class="tico" title="Duplicate" data-tree-act="dup-folder" data-fid="' +
          esc(f.id) +
          '">⎘</button>' +
          '<button type="button" class="tico danger" title="Delete" data-tree-act="del-folder" data-fid="' +
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
        esc((f.title || "").trim() || (f.subtitle || "").trim() || (f.type === "activity" ? "Activity" : "Folder")) +
        "</button>" +
        toolsF +
        "</div>";
      html += "<ul>";
      (f.sections || []).forEach(function (s) {
        var selS =
          state.selected && state.selected.folderId === f.id && state.selected.sectionId === s.id && state.selected.type === "section";
        var toolsS = adm
          ? '<span class="tree-tools">' +
            '<button type="button" class="tico" title="Rename" data-tree-act="rename-section" data-fid="' +
            esc(f.id) +
            '" data-sid="' +
            esc(s.id) +
            '">✎</button>' +
            '<button type="button" class="tico" title="Duplicate" data-tree-act="dup-section" data-fid="' +
            esc(f.id) +
            '" data-sid="' +
            esc(s.id) +
            '">⎘</button>' +
            '<button type="button" class="tico danger" title="Delete" data-tree-act="del-section" data-fid="' +
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
      "<h2>Welcome</h2>" +
      "<p class=\"muted\">Course structure (folders, sections, exercises) is written to the browser only when you tap <strong>Save course</strong>. The inline editor still has <strong>Save exercise</strong> for the open card. The hub (<code>index.html</code>) updates after a save. For hosted students to see changes, run <strong>git push</strong> with an updated <code>course-cms/config.json</code> when you export or copy from the repo. " +
      (state.mode === "admin"
        ? "Left: folder → section → exercise. For folders and sections: ✎ ⎘ ✕."
        : "Pick an exercise on the left and tap Open.") +
      "</p></div>";
  }

  function renderFolderPanel(f) {
    var admin = state.mode === "admin";
    if (!admin) {
      $("mainPanel").innerHTML =
        '<div class="panel-inner">' +
        "<h2>" +
        esc(f.title) +
        '</h2><p class="muted">Choose a section:</p><ul class="item-list">' +
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
      '<p class="muted">Course folder. Inside are sections (subfolders).</p>' +
      '<div class="row-btns"><button type="button" class="btn primary" id="btnAddSec">+ Section</button></div>' +
      "</div>";
    $("btnAddSec").addEventListener("click", function () {
      var name = prompt("Section name (e.g. Use of English):", "Use of English");
      if (!name) return;
      f.sections.push({ id: genId("sec"), title: name.trim(), items: [] });
      markCourseDirty();
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
      "<p class=\"muted\">Section inside “" +
      esc(f.title) +
      "”.</p>" +
      (admin
        ? '<div class="row-btns">' +
          '<button type="button" class="btn primary" id="btnAddEx">+ Exercise</button>' +
          "</div>" +
          '<ul class="item-list">' +
          s.items
            .map(function (it) {
              return (
                "<li><strong>" +
                esc(it.title) +
                '</strong> <span class="eng">' +
                esc(it.engine) +
                '</span> <span class="muted" style="font-size:0.8rem;">— click in the tree</span></li>'
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
                '">Open</button></li>'
              );
            })
            .join("") +
          "</ul>") +
      "</div>";
    if (admin) {
      $("btnAddEx").addEventListener("click", function () {
        var title = prompt("Exercise title:", "New exercise");
        if (!title) return;
        var engine = ENGINES[0].id;
        var payload = {
          title: title.trim(),
          subtitle: "",
          passage: "Paste your text here. Select a word and click “Make gap from selection”.\n\nSecond [[1]].",
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
        markCourseDirty();
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
        alert("Could not store exercise for the player.");
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
        encodeURIComponent("Back to course");
      window.location.href = url;
      return;
    }
    alert("This engine type is not wired up yet: " + it.engine);
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
        '</p><button type="button" class="btn primary" id="btnPlay">Open exercise</button></div>';
      $("btnPlay").addEventListener("click", function () {
        playItem(it);
      });
      return;
    }

    $("mainPanel").innerHTML =
      '<div class="panel-inner">' +
      "<h2>Editor: " +
      esc(it.title) +
      "</h2>" +
      '<div class="field"><label>Card title</label><input type="text" id="fldCardTitle" /></div>' +
      '<div class="field"><label>Title in exercise</label><input type="text" id="fldTitle" /></div>' +
      '<div class="field"><label>Subtitle / instructions</label><input type="text" id="fldSub" /></div>' +
      '<div class="field"><label>Text (paste full text, select a word → “Make gap from selection”)</label>' +
      '<textarea id="fldPassage" spellcheck="false"></textarea></div>' +
      '<div class="toolbar">' +
      '<button type="button" class="btn primary" id="btnMakeGap">Make gap from selection</button>' +
      '<button type="button" class="btn" id="btnEx0">Insert example [[0]] at cursor</button>' +
      "</div>" +
      '<div class="field row">' +
      '<label>Example (0): letter</label><input type="text" id="fldExL" maxlength="1" style="width:48px"/>' +
      '<label>text after —</label><input type="text" id="fldExT" style="flex:1"/></div>' +
      '<div class="field import-row">' +
      "<label>Import options for gap #</label>" +
      '<input type="number" id="fldImpN" min="1" value="1" style="width:64px"/>' +
      '<input type="text" id="fldImpLine" placeholder="word1, word2, word3, word4" style="flex:1"/>' +
      '<button type="button" class="btn" id="btnImp">Import options</button>' +
      "</div>" +
      '<div id="gapBlocks"></div>' +
      '<p class="err" id="editErr"></p>' +
      '<div class="row-btns"><button type="button" class="btn primary" id="btnSaveIt">Save exercise</button></div>' +
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
            '<div class="gap-card"><div class="gap-h">Gap (' +
            num +
            ')</div>' +
            opts +
            '<div class="cor-row"><label>Correct</label><select data-idx="' +
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
        $("editErr").textContent = "Select a word or phrase in the text.";
        return;
      }
      var sel = ta.value.slice(a, b);
      if (!sel.trim()) {
        $("editErr").textContent = "Selection is empty.";
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
        $("editErr").textContent = "Enter a gap number ≥ 1.";
        return;
      }
      var parts = line.split(/[,;|]/).map(function (x) {
        return x.trim();
      });
      if (parts.length < 4) {
        $("editErr").textContent = "Need four options separated by comma (or ; |).";
        return;
      }
      var nums = gapNums($("fldPassage").value);
      var idx = nums.indexOf(n);
      if (idx === -1) {
        $("editErr").textContent = "No [[" + n + "]] in the text.";
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
      flushCourseStorage();
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
      if (wantFolder && state.mode === "student") {
        var wfLock = state.config.folders.find(function (x) {
          return x.id === wantFolder;
        });
        if (wfLock && wfLock.studentLocked === true) {
          alert("This folder is locked for students.");
          var back = sp.get("back");
          if (back) {
            location.replace(decodeURIComponent(back));
          } else {
            history.back();
          }
          return;
        }
      }
      $("cmsTitle").textContent = state.config.title || "Courses";
      $("modeBadge").textContent = state.mode === "admin" ? "Admin" : "Student";
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
        var t = prompt("Folder (course) name:", "New course");
        if (!t) return;
        state.config.folders.push({ id: genId("fold"), title: t.trim(), sections: [] });
        markCourseDirty();
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
            markCourseDirty();
            state.selected = null;
            renderAll();
          } catch (e) {
            alert("Could not read JSON.");
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

      var btnSv = $("btnSaveCourse");
      if (btnSv && !btnSv.getAttribute("data-wired")) {
        btnSv.setAttribute("data-wired", "1");
        btnSv.addEventListener("click", function () {
          flushCourseStorage();
        });
      }
      if (!document.documentElement.getAttribute("data-cms-unload")) {
        document.documentElement.setAttribute("data-cms-unload", "1");
        window.addEventListener("beforeunload", function (e) {
          if (state.mode === "admin" && state.courseDirty) {
            e.preventDefault();
            e.returnValue = "";
          }
        });
      }
      syncSaveCourseUi();
    }

    function continueBoot() {
      var data = loadLocalSync();
      state.config = data && data.folders ? data : defaultConfig();
      if (!state.config.folders) state.config.folders = [];
      (state.config.folders || []).forEach(function (fd) {
        if (!fd.sections) fd.sections = [];
      });
      state.courseDirty = false;

      if (state.config.folders.length) {
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
              title: "New course",
              sections: [{ id: genId("sec"), title: "Use of English", items: [] }]
            });
          }
          if (state.mode === "student") {
            saveLocal();
            state.courseDirty = false;
          } else {
            markCourseDirty();
          }
          wireUi();
        })
        .catch(function () {
          if (state.mode === "admin") {
            state.config.folders.push({
              id: genId("fold"),
              title: "New course",
              sections: [{ id: genId("sec"), title: "Use of English", items: [] }]
            });
          }
          if (state.mode === "student") {
            saveLocal();
            state.courseDirty = false;
          } else {
            markCourseDirty();
          }
          wireUi();
        });
    }

    if (typeof PrepSiteContent !== "undefined" && PrepSiteContent.hydrateFromCloud) {
      PrepSiteContent.hydrateFromCloud().finally(continueBoot);
    } else {
      continueBoot();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
