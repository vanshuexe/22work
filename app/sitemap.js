export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3217";
  return [
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
  ].map((slug) => ({
    url: `${base}/${slug}`,
    changeFrequency: "monthly",
    priority: slug ? 0.7 : 1,
  }));
}
