import fs from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";

const routes = [
  "",
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
  "waterproofing",
  "self-leveling",
  "industrial-floor-coating",
];
const base = process.env.TEST_SITE_URL || "http://127.0.0.1:3217";
const failures = [];
for (const route of routes) {
  const response = await fetch(`${base}/${route}`);
  const html = await response.text();
  try {
    assert.equal(response.status, 200, `${route || "/"} status`);
    assert.match(html, /<main[\s>]/, "Missing main content");
    assert.match(html, /RAS Coating/, "Missing site identity");
    assert.doesNotMatch(
      html,
      /Brite Proofings|brppl\.co\.in|3100 3433/,
      "Outdated business identity",
    );
    for (const detail of [
      "rascoating@gmail.com",
      "Ramesh Singh",
      "Sunil Kumar",
      "Prithviraj",
      "63947 13287",
      "73584 78323",
      "90829 06436",
      "Ashwariyam Hamara",
      "412114",
    ])
      assert.ok(html.includes(detail), `Missing company detail: ${detail}`);
    assert.doesNotMatch(
      html,
      /<base\s|localhost:5173|<script[^>]+assets\/js/,
      "Legacy runtime dependency",
    );
    for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)/g))
      await fs.access(path.join("public", decodeURIComponent(match[1])));
    console.log(`PASS /${route}`);
  } catch (e) {
    failures.push(`${route}: ${e.message}`);
  }
}
for (const route of ["index", ...routes.filter(Boolean)]) {
  const response = await fetch(`${base}/${route}.html`, { redirect: "manual" });
  if (response.status !== 308)
    failures.push(`Missing legacy redirect /${route}.html`);
}
const missing = await fetch(`${base}/missing-page`);
if (missing.status !== 404) failures.push("Missing page must return 404");
for (const route of ["robots.txt", "sitemap.xml"]) {
  const response = await fetch(`${base}/${route}`);
  if (response.status !== 200) failures.push(`Missing /${route}`);
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(
  "All 15 routes, RAS company details, linked assets, legacy redirects, 404 and SEO endpoints passed.",
);
