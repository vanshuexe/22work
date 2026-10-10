import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/company";
import { PageBanner, TeamSection } from "@/components/CompanySections";
const newServices = services.filter((s) =>
  ["waterproofing", "self-leveling", "industrial-floor-coating"].includes(
    s.slug,
  ),
);
export const dynamicParams = false;
export function generateStaticParams() {
  return newServices.map((s) => ({ service: s.slug }));
}
export async function generateMetadata({ params }) {
  const { service } = await params;
  const item = newServices.find((s) => s.slug === service);
  return { title: item?.name || "Service", description: item?.description };
}
export default async function ServicePage({ params }) {
  const { service } = await params;
  const item = newServices.find((s) => s.slug === service);
  if (!item) notFound();
  return (
    <main>
      <PageBanner title={item.name} />
      <section className="ras-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <h2 className="section_title">{item.name}</h2>
              <p>{item.description}</p>
              <p>
                Share your site location, floor area and requirements with our
                team to discuss the next steps.
              </p>
              <Link href="/contact-us" className="btn-read">
                Discuss Your Project →
              </Link>
            </div>
            <div className="col-lg-5">
              <img
                className="ras-about-photo"
                src={item.image}
                alt={item.name + " application"}
              />
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
    </main>
  );
}
