import { readFileSync, writeFileSync, copyFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = join(__dirname, "../src/css");
const distDir = join(__dirname, "../dist");
const pkgRoot = join(__dirname, "..");

// Copy to dist/ for programmatic imports
copyFileSync(join(srcDir, "palette.css"), join(distDir, "palette.css"));
copyFileSync(join(srcDir, "theme.css"), join(distDir, "theme.css"));

// Concatenate into a single self-contained theme.css at the package root.
// This is what users @import — no nested @import chain that PostCSS/Tailwind
// can't resolve through package.json exports.
const palette = readFileSync(join(srcDir, "palette.css"), "utf-8");
const theme = readFileSync(join(srcDir, "theme.css"), "utf-8");

const bundled = [
  "/* notion-shadcn — bundled theme (palette + semantic tokens + shadcn bridge) */",
  "/* https://github.com/kenchendesign/notion-shadcn */",
  "",
  palette.trim(),
  "",
  theme
    .replace(/@import\s+["']\.\/palette\.css["'];?\s*/g, "")
    .trim(),
].join("\n");

writeFileSync(join(pkgRoot, "theme.css"), bundled);
console.log("CSS files copied to dist/ and bundled theme.css written to package root.");
