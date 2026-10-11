import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const reg = JSON.parse(readFileSync(join(root, "registry.json"), "utf8"));

let count = 0;
for (const item of reg.items) {
  // 1) source copy: registry/<name>.json
  const srcDir = join(root, "registry");
  if (!existsSync(srcDir)) mkdirSync(srcDir, { recursive: true });
  writeFileSync(join(srcDir, `${item.name}.json`), JSON.stringify(item, null, 2) + "\n");
  // 2) served copy: public/r/<name>.json (docs download endpoint /r/<name>.json)
  const pubDir = join(root, "public", "r");
  if (!existsSync(pubDir)) mkdirSync(pubDir, { recursive: true });
  writeFileSync(join(pubDir, `${item.name}.json`), JSON.stringify(item, null, 2) + "\n");
  count++;
}
// 3) served index
writeFileSync(join(root, "public", "r", "index.json"), JSON.stringify({ name: reg.name, count, items: reg.items.map((i) => i.name) }, null, 2) + "\n");
console.log(`[titans] registry built: ${count} items → registry/ + public/r/`);
