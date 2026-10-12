import Link from "next/link";
import { PageBanner, ServicesSection, ClientsSection } from "@/components/CompanySections";
export const metadata = {
  title: "Client Enquiries",
  description:
    "Discuss your flooring and coating project with RAS Coating in Pune.",
};
export default function Clients() {
  return (
    <main>
      <PageBanner title="Our Clients" />
      <section className="ras-section">
        <div className="container">
          <h2 className="section_title">Tell us about your project</h2>
          <p>
            Looking for PU flooring, epoxy flooring, waterproofing, self
            leveling or an industrial floor coating solution? Contact our team
            with your site location and requirements.
          </p>
          <Link href="/contact-us" className="btn-read">
            Contact RAS Coating →
          </Link>
        </div>
      </section>
      <ClientsSection />
      <ServicesSection />
    </main>
  );
}
