import { services } from "@/lib/company";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3217";
  return [
    "",
    "about-us",
    "clients",
    "contact-us",
    ...services.map((service) => service.slug),
  ].map((slug) => ({
    url: `${base}/${slug}`,
    changeFrequency: "monthly",
    priority: slug ? 0.7 : 1,
  }));
}
