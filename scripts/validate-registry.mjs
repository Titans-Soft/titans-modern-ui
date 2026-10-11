import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const reg = JSON.parse(readFileSync(join(root, "registry.json"), "utf8"));

const errors = [];
const names = new Set();
for (const [idx, item] of reg.items.entries()) {
  for (const key of ["name", "titleAr", "titleEn", "descriptionAr", "category", "files", "usage", "prompt"]) {
    if (!item[key] || (Array.isArray(item[key]) && item[key].length === 0)) errors.push(`items[${idx}].${key} missing`);
  }
  if (names.has(item.name)) errors.push(`duplicate name: ${item.name}`);
  names.add(item.name);
  if (!/^[a-z0-9-]+$/.test(item.name)) errors.push(`bad name (kebab-case required): ${item.name}`);
}

if (errors.length) {
  console.error("[titans] registry INVALID:\n- " + errors.join("\n- "));
  process.exit(1);
}
console.log(`[titans] registry OK: ${reg.items.length} items`);
