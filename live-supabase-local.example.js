/**
 * Локальные URL и публичный ключ live-сессии + опции облака курса.
 * Имя файла — историческое; в корне копия называется live-supabase-local.js (см. .gitignore).
 * В index.html до этого подключается js/prep-remote-defaults.js — пока нет ключа, live и облако выключены.
 *
 * Скопируйте этот файл → live-supabase-local.js в корне проекта и подставьте значения
 * от вашего бэкенда (текущий драйвер в коде; при переезде, например, на Yandex — новые
 * endpoint и ключ, имена window.* можно заменит в одном месте вместе с драйвером).
 *
 * Не публикуйте service / write-секреты в открытом фронте; __PREP_CLOUD_WRITE_SECRET__ — только
 * на машине, где публикуете курс, не в git.
 */

window.__LIVE_SUPABASE_URL__ = "https://YOUR_LIVE_BACKEND_BASE";
window.__LIVE_SUPABASE_KEY__ = "YOUR_PUBLIC_ANON_LIKE_KEY";

/** Секрет записи Prep Cloud (Edge / HTTP, как настроит разработчик). Не публикуй и не коммить. */
window.__PREP_CLOUD_WRITE_SECRET__ = "YOUR_LONG_RANDOM_PREP_CLOUD_SECRET";

/**
 * База для абсолютной ссылки ученику при открытии index через file:// (иначе только query в адресе).
 * По умолчанию как npm run start (порт 3000). Подставьте свой порт, если отличается.
 */
window.__PREP_LIVE_PUBLIC_ORIGIN__ = window.__PREP_LIVE_PUBLIC_ORIGIN__ || "http://localhost:3000";
