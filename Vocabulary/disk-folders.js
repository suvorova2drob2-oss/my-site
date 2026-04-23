/**
 * Unit 9 — Vocabulary on disk: список папок для Vocabulary/index.html.
 * Добавляя пакет: заведите каталог на диске, затем запись в U9_VOCAB_DISK_FOLDERS.
 * engine: задел под тип движка (пока метка; CMS не используется).
 */
(function (global) {
  var U9_VOCAB_DISK_FOLDERS = [
    {
      href: "idioms/index.html",
      title: "idioms",
      descriptionHtml:
        "<span><em>Idioms: Art and creativity</em> &mdash; micro-speaking.html and freer-practice.html</span>",
      engine: "idioms-speaking"
    },
    {
      href: "prepositional-phrases/index.html",
      title: "prepositional phrases",
      descriptionHtml:
        "<span>Tasks 1&ndash;5 on disk; core + progress in <code>js/</code> (see hub).</span>",
      engine: "prepositional-phrases"
    },
    {
      href: "describing-art-architecture/index.html",
      title: "vocabulary &mdash; describing art and architecture",
      descriptionHtml:
        "<span>Interior design article &mdash; Speaking trainer, Treasure Hunt, disk exercises, Lexical trainer typed gaps + Level 9 lexical games; data in <code>js/interior-design-vocab-core.js</code>.</span>",
      engine: "interior-vocab"
    }
  ];

  function mountFolders(containerId) {
    var el = typeof containerId === "string" ? document.getElementById(containerId) : containerId;
    if (!el) return;
    el.innerHTML = U9_VOCAB_DISK_FOLDERS.map(function (f) {
      return (
        '<a class="folder" href="' +
        f.href +
        '" data-engine="' +
        String(f.engine == null ? "" : f.engine).replace(/"/g, "&quot;") +
        '"><strong>' +
        f.title +
        "</strong>" +
        f.descriptionHtml +
        '<div class="go">Folder &rarr; open</div></a>'
      );
    }).join("");
  }

  global.U9VocabDiskFolders = {
    folders: U9_VOCAB_DISK_FOLDERS,
    mount: mountFolders
  };
})(typeof window !== "undefined" ? window : this);
