import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import type { Plugin } from "vite";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;

const SKIP_DIRS = new Set([
  "node_modules",
  "dist",
  "publish-cpe",
  "publish-ege",
  "publish-fce",
  ".git",
  "course-cms",
  ".cursor",
  "supabase",
]);

function* walkHtmlFiles(dir: string, rel = ""): Generator<string> {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    const r = rel ? `${rel}/${ent.name}` : ent.name;
    if (ent.isDirectory()) {
      if (SKIP_DIRS.has(ent.name)) continue;
      yield* walkHtmlFiles(full, r);
    } else if (ent.isFile() && ent.name.endsWith(".html")) {
      yield r.split(path.sep).join("/");
    }
  }
}

/** Rollup input keys must be safe identifiers. */
function rollupInputKey(relPosix: string): string {
  const base = relPosix.replace(/\.html$/i, "");
  let k = base.replace(/\//g, "__");
  k = k.replace(/[^a-zA-Z0-9_]/g, "_");
  if (!k) k = "page";
  if (/^\d/.test(k)) k = "p_" + k;
  if (k === "index") return "main";
  return k;
}

function liveSupabaseFallback(): Plugin {
  return {
    name: "prep-live-supabase-fallback",
    enforce: "pre",
    resolveId(id) {
      const leaf = id.split(/[/\\]/).pop() || "";
      if (leaf !== "live-supabase-local.js") return null;
      const real = path.join(root, "live-supabase-local.js");
      if (fs.existsSync(real)) return path.resolve(real);
      const ex = path.join(root, "live-supabase-local.example.js");
      if (fs.existsSync(ex)) return path.resolve(ex);
      return null;
    },
  };
}

/** Legacy pages use classic <script src> (non-ESM). Opt out of Vite bundling for those tags. */
function viteIgnoreClassicScripts(): Plugin {
  return {
    name: "prep-vite-ignore-classic-scripts",
    enforce: "pre",
    transformIndexHtml(html) {
      return html.replace(
        /<script(\s+[^>]*\bsrc\s*=\s*["'][^"']+["'][^>]*)>/gi,
        (full, attrs) => {
          if (/\btype\s*=\s*["']module["']/i.test(attrs)) return full;
          if (/\bvite-ignore\b/i.test(attrs)) return full;
          return `<script vite-ignore${attrs}>`;
        }
      );
    },
  };
}

/**
 * Classic scripts and co-located JSON are referenced by URL (?src=published-….json, ../../js/…)
 * but not imported into the Rollup graph. With publicDir: false they would be missing from dist/.
 */
function copyLegacyStaticAssets(): Plugin {
  let outDir = path.join(root, "dist");
  return {
    name: "prep-copy-legacy-static",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const jsSrc = path.join(root, "js");
      const jsDest = path.join(outDir, "js");
      if (fs.existsSync(jsSrc)) {
        fs.cpSync(jsSrc, jsDest, { recursive: true });
      }

      const liveReal = path.join(root, "live-supabase-local.js");
      const liveEx = path.join(root, "live-supabase-local.example.js");
      const liveDest = path.join(outDir, "live-supabase-local.js");
      if (fs.existsSync(liveReal)) {
        fs.copyFileSync(liveReal, liveDest);
      } else if (fs.existsSync(liveEx)) {
        fs.copyFileSync(liveEx, liveDest);
      }

      const uoe = path.join(root, "use-of-english");
      if (fs.existsSync(uoe)) {
        function walkJson(dir: string) {
          for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
            const full = path.join(dir, ent.name);
            if (ent.isDirectory()) {
              walkJson(full);
            } else if (ent.isFile() && ent.name.endsWith(".json")) {
              const rel = path.relative(root, full);
              const dest = path.join(outDir, rel.split(path.sep).join("/"));
              fs.mkdirSync(path.dirname(dest), { recursive: true });
              fs.copyFileSync(full, dest);
            }
          }
        }
        walkJson(uoe);
      }

      /** Co-located classic scripts (e.g. exam trainer/*.js) are vite-ignore and not emitted by Rollup. */
      function copyViteIgnoredScriptsFromBuiltHtml(dir: string) {
        for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
          const full = path.join(dir, ent.name);
          if (ent.isDirectory()) {
            copyViteIgnoredScriptsFromBuiltHtml(full);
            continue;
          }
          if (!ent.isFile() || !ent.name.endsWith(".html")) continue;

          const html = fs.readFileSync(full, "utf8");
          const dirInOut = path.dirname(full);
          const relHtml = path.relative(outDir, full);
          const sourceHtmlPath = path.join(root, relHtml);

          for (const m of html.matchAll(/<script\s+[^>]*?>/gi)) {
            const tag = m[0];
            if (!/\bvite-ignore\b/i.test(tag)) continue;
            const sm = /\bsrc\s*=\s*["']([^"']+)["']/i.exec(tag);
            if (!sm) continue;
            const src = sm[1].trim();
            if (
              !src ||
              /^(?:https?:)?\/\//i.test(src) ||
              src.startsWith("/") ||
              src.startsWith("data:")
            ) {
              continue;
            }
            const destFile = path.resolve(dirInOut, src);
            const sourceFile = path.resolve(path.dirname(sourceHtmlPath), src);
            if (!fs.existsSync(sourceFile)) continue;
            fs.mkdirSync(path.dirname(destFile), { recursive: true });
            fs.copyFileSync(sourceFile, destFile);
          }
        }
      }
      copyViteIgnoredScriptsFromBuiltHtml(outDir);
    },
  };
}

const input: Record<string, string> = {};
for (const rel of walkHtmlFiles(root)) {
  input[rollupInputKey(rel)] = path.resolve(root, rel);
}

export default defineConfig({
  root,
  publicDir: false,
  plugins: [liveSupabaseFallback(), viteIgnoreClassicScripts(), copyLegacyStaticAssets()],
  appType: "mpa",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 6000,
    rollupOptions: {
      input,
    },
  },
  server: {
    port: 5173,
    strictPort: false,
  },
});
