import fs from "node:fs/promises";
import path from "node:path";

const manifest = JSON.parse(await fs.readFile("source/image-cleanup.json", "utf8"));
const results = JSON.parse((await fs.readFile("source/clean-service-images.json", "utf8")).replace(/^\uFEFF/, ""));
if (results.length !== manifest.length) throw new Error("Finish every service image before applying replacements.");
const replacements = [];
for (const entry of manifest) {
  const result = results.find((item) => item.rel === entry.rel);
  if (!result) throw new Error(`Missing cleaned image: ${entry.rel}`);
  await fs.access(path.join("public", result.clean));
  for (const alias of entry.aliases) replacements.push([`/${alias}`, `/${result.clean}`]);
}
await fs.access("public/assets/clean-services/service-banner.png");
replacements.push(["/assets/img/banner/concrete-style-banner.jpg", "/assets/clean-services/service-banner.png"]);
async function update(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await update(file);
    else if (/\.(jsx|js|css)$/.test(entry.name)) {
      const original = await fs.readFile(file, "utf8");
      let content = original;
      for (const [from, to] of replacements) content = content.replaceAll(from, to);
      if (content !== original) await fs.writeFile(file, content);
    }
  }
}
for (const directory of ["app", "components", "lib"]) await update(directory);
console.log(`Applied ${results.length} cleaned photos and shared service banner to thumbnails and enlarged views.`);
