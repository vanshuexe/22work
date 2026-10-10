import fs from "node:fs/promises";
import path from "node:path";

const origin = "https://www.briteproofings.com/";
const pages = [
  "about-us",
  "epoxy-floor",
  "polyurethane-floor",
  "mma-floor",
  "chemical-lining",
  "terrazzo-floor",
  "concrete-styles",
  "aircraft-hangar",
  "applications",
  "clients",
  "contact-us",
];
const queue = new Set();
const done = new Set();
const failures = [];
await fs.mkdir("source", { recursive: true });
await fs.copyFile("index.html", "source/index.html");
function discover(text, base) {
  for (const match of text.matchAll(
    /(?:src|href)\s*=\s*["']([^"']+)["']|url\(\s*["']?([^"')\s]+)["']?\s*\)/g,
  )) {
    const raw = match[1] || match[2];
    if (/^(data:|javascript:|mailto:|tel:|#)/i.test(raw)) continue;
    let url;
    try {
      url = new URL(raw, base.endsWith(".js") ? origin : base);
    } catch {
      continue;
    }
    if (
      url.origin === new URL(origin).origin &&
      url.pathname.startsWith("/assets/")
    )
      queue.add(url.pathname.slice(1));
  }
}
await Promise.all(
  pages.map(async (name) => {
    const url = origin + name + ".html";
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${url}: ${response.status}`);
    const html = await response.text();
    await fs.writeFile(`source/${name}.html`, html);
    discover(html, url);
  }),
);
discover(await fs.readFile("source/index.html", "utf8"), origin);
queue.add("assets/js/header.js");
queue.add("assets/js/footer.js");
while ([...queue].some((item) => !done.has(item))) {
  const batch = [...queue].filter((item) => !done.has(item)).slice(0, 12);
  await Promise.all(
    batch.map(async (item) => {
      done.add(item);
      try {
        const response = await fetch(origin + item);
        if (!response.ok) throw new Error(String(response.status));
        const buffer = Buffer.from(await response.arrayBuffer());
        const output = path.join("public", item);
        await fs.mkdir(path.dirname(output), { recursive: true });
        await fs.writeFile(output, buffer);
        if (/\.css$/.test(item) || /\/(header|footer)\.js$/.test(item))
          discover(buffer.toString("utf8"), origin + item);
      } catch (error) {
        failures.push({ item, error: error.message });
      }
    }),
  );
  console.log(`Downloaded ${done.size} of ${queue.size} assets`);
}
await fs.mkdir("public/assets/fonts", { recursive: true });
const fontResponse = await fetch(
  "https://fonts.gstatic.com/s/outfit/v15/QGYvz_MVcBeNP4NJtEtq.woff2",
);
if (!fontResponse.ok) throw new Error("Unable to download Outfit font");
await fs.writeFile(
  "public/assets/fonts/outfit-latin.woff2",
  Buffer.from(await fontResponse.arrayBuffer()),
);
const mainCss = await fs.readFile("public/assets/css/main.css", "utf8");
await fs.writeFile(
  "public/assets/css/main.css",
  mainCss.replace(
    /@import url\("https:\/\/fonts.googleapis.com[^"]+"\);/,
    '@font-face { font-family: "Outfit"; font-style: normal; font-weight: 100 900; font-display: swap; src: url("/assets/fonts/outfit-latin.woff2") format("woff2"); }',
  ),
);
await fs.writeFile(
  "source/download-report.json",
  JSON.stringify(
    { pages: ["index", ...pages], assets: done.size, failures },
    null,
    2,
  ),
);
console.log(
  JSON.stringify({ pages: pages.length + 1, assets: done.size, failures }),
);
