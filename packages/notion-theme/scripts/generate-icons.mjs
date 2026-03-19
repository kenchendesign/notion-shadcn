import { readdirSync, readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ndsDir = join(__dirname, "../src/icons/nds");
const iconDirs = readdirSync(ndsDir).sort();

const variants = ["default", "fill", "fillSmall", "small"];
const lines = [];

for (const iconName of iconDirs) {
  const iconPath = join(ndsDir, iconName);
  for (const variant of variants) {
    const filePath = join(iconPath, `${variant}.icon.tsx`);
    if (existsSync(filePath)) {
      const content = readFileSync(filePath, "utf-8");
      const match = content.match(/export const (\w+Icon): LoadedIconFunction/);
      if (match) {
        const exportPath =
          variant === "default"
            ? `./nds/${iconName}/default.icon`
            : `./nds/${iconName}/${variant}.icon`;
        lines.push(`export { ${match[1]} } from "${exportPath}";`);
      }
    }
  }
}

const output = `// Auto-generated — do not edit manually.
// Run \`pnpm generate:icons\` to regenerate.
export { Icon } from "./Icon";
export type { IconProps, IconColor, IconWeight } from "./Icon";
export { ICON_SIZE } from "./iconUtils";
export type { IconSize, LoadedIconFunction, IconDefinition } from "./iconUtils";

${lines.join("\n")}
`;

writeFileSync(join(__dirname, "../src/icons/index.ts"), output);
console.log(`Generated ${lines.length} icon exports`);
