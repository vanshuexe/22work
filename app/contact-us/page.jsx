import { company } from "@/lib/company";
import { PageBanner } from "@/components/CompanySections";
import { ContactForm } from "@/components/ContactForm";
export const metadata = {
  title: "Contact Us",
  description:
    "Contact RAS Coating in Chikhali, Pune. Email rascoating@gmail.com.",
};
export default function Contact() {
  const mapQuery = encodeURIComponent(company.address);
  return (
    <main>
      <PageBanner title="Contact RAS Coating" image="/assets/hero-generated/contact-banner.png" />
      <section className="ras-section">
        <div className="container">
          <div className="ras-office" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <span className="title-sm">Get in Touch</span>
              <h2 className="section_title">Our Pune Office</h2>
              <address>{company.address}</address>
              <a className="ras-email" href={"mailto:" + company.email}>
                {company.email}
              </a>
              <p>
                For flooring, coating or waterproofing enquiries, email our team.
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
          </div>
        </div>
      </section>
      <section className="ras-section">
        <div className="container">
          <span className="title-sm">Leave a Message</span>
          <h2 className="section_title">Get in Touch With Us</h2>
          <p>Tell us about your project and our team will get back to you.</p>
          <ContactForm />
        </div>
      </section>
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
