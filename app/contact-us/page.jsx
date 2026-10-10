import { company } from "@/lib/company";
import { PageBanner, TeamSection } from "@/components/CompanySections";
export const metadata = {
  title: "Contact Us",
  description:
    "Contact RAS Coating in Chikhali, Pune. Ramesh Singh: +91 63947 13287. Email rascoating@gmail.com.",
};
export default function Contact() {
  const mapQuery = encodeURIComponent(company.address);
  return (
    <main>
      <PageBanner title="Contact RAS Coating" />
      <section className="ras-section">
        <div className="container">
          <div className="ras-office">
            <div>
              <span className="title-sm">Get in Touch</span>
              <h2 className="section_title">Our Pune Office</h2>
              <address>{company.address}</address>
              <a className="ras-email" href={"mailto:" + company.email}>
                {company.email}
              </a>
              <p>
                For flooring, coating or waterproofing enquiries, call one of
                our team members below.
              </p>
              <a
                className="btn-read"
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
              >
                Get Directions →
              </a>
            </div>
            <img
              src="/assets/ras-business-card.jpeg"
              alt="RAS Coating business card with office address, team contact numbers and services"
            />
          </div>
        </div>
      </section>
      <TeamSection />
      <section className="ras-section">
        <div className="container">
          <iframe
            className="ras-map"
            title="RAS Coating address in Chikhali, Pune"
            src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
