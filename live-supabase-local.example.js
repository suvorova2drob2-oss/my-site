/**
 * ПЕРВЫЙ ШАГ (сделайте один раз на своём компьютере)
 *
 * 1) В проводнике / в Cursor: скопируйте этот файл и назовите копию
 *    live-supabase-local.js
 *    Папка та же, что у live-room-supabase-demo.html — корень проекта my-site.
 *
 * 2) Откройте Supabase → ваш проект → шестерёнка Project Settings → раздел API:
 *    - поле "Project URL" → вставьте ниже вместо плейсхолдера в __LIVE_SUPABASE_URL__;
 *    - поле "anon" / "Publishable" (публичный ключ) → вместо плейсхолдера в __LIVE_SUPABASE_KEY__.
 *    Ключи сюда в чат не отправляйте; service_role в браузер не кладите.
 *
 * 3) Сохраните live-supabase-local.js. Он в .gitignore — в репозиторий не попадёт.
 *
 * 4) Дальше: запустите сайт локально из корня (не открывайте HTML двойным щелчком)
 *    и откройте live-room-supabase-demo.html через сервер.
 */

window.__LIVE_SUPABASE_URL__ = "https://YOUR_REF.supabase.co";
window.__LIVE_SUPABASE_KEY__ = "YOUR_PUBLISHABLE_OR_ANON_KEY";

/**
 * База для абсолютной ссылки ученику при открытии index через file:// (иначе будет только index.html?...).
 * По умолчанию совпадает с npm run start (порт 3000). Для Live Server укажите свой порт, например 5500.
 */
window.__PREP_LIVE_PUBLIC_ORIGIN__ = window.__PREP_LIVE_PUBLIC_ORIGIN__ || "http://localhost:3000";
