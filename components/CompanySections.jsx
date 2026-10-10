import Link from "next/link";
import { company, services } from "@/lib/company";
export function PageBanner({ title }) {
  return (
    <section className="breadcrumb-area">
      <div
        className="breadcrumb-style-1 mb-10"
        style={{
          backgroundImage: "url(/assets/img/banner/about-us-banner.jpg)",
        }}
      >
        <div className="container">
          <h1 className="breadcrumb-title">{title}</h1>
          <div className="breadcrumb-list">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export function ServicesSection() {
  return (
    <section className="ras-section">
      <div className="container">
        <div className="title">
          <span className="title-sm">RAS Coating</span>
          <h2 className="section_title">Our Services</h2>
        </div>
        <div className="ras-services">
          {services.map((service) => (
            <Link
              className="ras-service-card"
              href={"/" + service.slug}
              key={service.slug}
            >
              <img
                src={service.image}
                alt={service.name + " application"}
                loading="lazy"
              />
              <div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className="ras-link">Explore service →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export function TeamSection() {
  return (
    <section className="ras-section ras-team-section">
      <div className="container">
        <h2 className="section_title">Meet Our Team</h2>
        <div className="ras-team">
          {company.contacts.map((person) => (
            <article className="ras-contact-card" key={person.tel}>
              <span className="ras-person-initial" aria-hidden="true">
                {person.name[0]}
              </span>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              <a href={"tel:" + person.tel}>{person.phone}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
