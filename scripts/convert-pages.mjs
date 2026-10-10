import fs from "node:fs/promises";
import { parse } from "parse5";
if (
  await fs
    .access("lib/company.js")
    .then(() => true)
    .catch(() => false)
) {
  throw new Error(
    "This site has been customized for RAS Coating. The legacy converter would overwrite those changes. Edit app/ pages directly.",
  );
}

const voidTags = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);
const attributeNames = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  allowfullscreen: "allowFullScreen",
  frameborder: "frameBorder",
  colspan: "colSpan",
  rowspan: "rowSpan",
  cellspacing: "cellSpacing",
  cellpadding: "cellPadding",
  stroke: "stroke",
  "stroke-width": "strokeWidth",
  "fill-rule": "fillRule",
};
const booleanAttrs = new Set([
  "allowfullscreen",
  "disabled",
  "checked",
  "multiple",
  "required",
  "autofocus",
  "readonly",
]);
const routeTitles = {
  index: "Home",
  "about-us": "About Us",
  "epoxy-floor": "Epoxy Floor",
  "polyurethane-floor": "Polyurethane Floor",
  "mma-floor": "MMA Floor",
  "chemical-lining": "Chemical Lining",
  "terrazzo-floor": "Terrazzo Floor",
  "concrete-styles": "Concrete Styles",
  "aircraft-hangar": "Aircraft Hangar",
  applications: "Applications",
  clients: "Clients",
  "contact-us": "Contact Us",
};
const attr = (node, name) =>
  node.attrs?.find((a) => a.name === name)?.value || "";
function find(node, predicate) {
  if (predicate(node)) return node;
  for (const child of node.childNodes || []) {
    const result = find(child, predicate);
    if (result) return result;
  }
}
function localize(value) {
  return value
    .replace(/(?:https:\/\/www\.briteproofings\.com\/)?assets\//g, "/assets/")
    .replace(/(?<![\w/])index\.html/g, "/")
    .replace(/(?<![\w/])([\w-]+)\.html/g, "/$1")
    .replace(/^mailto:\s+/, "mailto:");
}
function jsx(node) {
  if (node.nodeName === "#text") {
    const value = node.value.replace(/\s+/g, " ");
    return value.trim() ? `{${JSON.stringify(value)}}` : "";
  }
  if (!node.tagName || ["script", "style"].includes(node.tagName)) return "";
  let tag = node.tagName;
  if (tag === "div" && attr(node, "class").includes("hero-slider-initial"))
    return "<HeroSlider />";
  if (tag === "div" && attr(node, "class").includes("about-slider-active"))
    return "<ClientCarousel />";
  if (tag === "a" && attr(node, "data-fancybox")) tag = "GalleryLink";
  else if (tag === "a" && /^(?:[\w-]+\.html|\/)/.test(attr(node, "href")))
    tag = "Link";
  const attrs = node.attrs
    .map((a) => {
      if (/^on/.test(a.name) || a.name === "data-fancybox") return "";
      const name = attributeNames[a.name] || a.name;
      let value = localize(a.value);
      if (a.name === "style") {
        const style = Object.fromEntries(
          value
            .split(";")
            .filter((s) => s.includes(":"))
            .map((s) => {
              const index = s.indexOf(":");
              return [
                s
                  .slice(0, index)
                  .trim()
                  .replace(/-([a-z])/g, (_, c) => c.toUpperCase()),
                s.slice(index + 1).trim(),
              ];
            }),
        );
        return ` style={${JSON.stringify(style)}}`;
      }
      if (booleanAttrs.has(a.name)) return ` ${name}={true}`;
      if (value.startsWith("javascript:")) value = "#";
      return ` ${name}={${JSON.stringify(value)}}`;
    })
    .join("");
  const extra =
    node.tagName === "img" && !node.attrs.some((a) => a.name === "alt")
      ? ` alt={${JSON.stringify(attr(node, "src").includes("/client") ? "Brite Proofings client" : "Brite Proofings flooring project")}}`
      : node.tagName === "iframe"
        ? ' title="Brite Proofings Mumbai office location" loading="lazy"'
        : "";
  if (voidTags.has(node.tagName)) return `<${tag}${attrs}${extra} />`;
  return `<${tag}${attrs}${extra}>${(node.childNodes || []).map(jsx).join("")}</${tag}>`;
}
const imports = `import Link from 'next/link';\nimport { HeroSlider, ClientCarousel, GalleryLink } from '@/components/Interactions';\n`;
for (const [slug, title] of Object.entries(routeTitles)) {
  const document = parse(await fs.readFile(`source/${slug}.html`, "utf8"));
  const main = find(document, (n) => n.tagName === "main");
  if (!main) throw new Error(`Missing main content: ${slug}`);
  const dir = slug === "index" ? "app" : `app/${slug}`;
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(
    `${dir}/page.jsx`,
    `${imports}\nexport const metadata = { title: ${JSON.stringify(title)}, description: ${JSON.stringify(`${title === "Home" ? "Industrial flooring solutions" : title} from Brite Proofings. Explore flooring for pharmaceutical, food, healthcare and industrial facilities.`)} };\n\nexport default function Page() {\n  return (${jsx(main)});\n}\n`,
  );
}
const footerScript = await fs.readFile("public/assets/js/footer.js", "utf8");
const footerHtml = [
  ...footerScript.matchAll(/document\.write\('([\s\S]*?)'\);/g),
]
  .map((m) => m[1])
  .join("")
  .replace(/<script>[\s\S]*?<\/script>/g, String(new Date().getFullYear()))
  .replace(/<div class="footer-social">[\s\S]*?<\/div>/, "");
const footer = find(parse(footerHtml), (n) => n.tagName === "footer");
await fs.writeFile(
  "components/Footer.jsx",
  `import Link from 'next/link';\nexport default function Footer() { return (${jsx(footer)}); }\n`,
);
console.log(
  `Converted ${Object.keys(routeTitles).length} pages to native JSX and shared footer.`,
);
