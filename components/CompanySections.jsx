import Link from "next/link";
import { services, clients } from "@/lib/company";
export function PageBanner({ title, image = "/assets/img/banner/about-us-banner.jpg" }) {
  return (
    <section className="breadcrumb-area">
      <div
        className="breadcrumb-style-1 mb-10"
        style={{
          backgroundImage: `url(${image})`,
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
              {service.image && <img
                src={service.image}
                alt={service.name + " application"}
                loading="lazy"
              />}
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
export function ClientsSection() {
  return (
    <section className="ras-section ras-clients">
      <div className="container">
        <span className="title-sm">Trusted By</span>
        <h2 className="section_title">Our Clients</h2>
        <ul className="ras-client-grid">
          {clients.map((client) => (
            <li key={client.name} className={"ras-client-card" + (client.logo ? " has-logo" : "")}>
              {client.logo ? (
                <img src={client.logo} alt={client.name} loading="lazy" />
              ) : (
                <svg
                  className="ras-client-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" />
                  <path d="M14 10h5a1 1 0 0 1 1 1v10" />
                  <path d="M2 21h20M8 8h2M8 12h2M8 16h2" />
                </svg>
              )}
              {!client.logo ? <span>{client.name}</span> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
