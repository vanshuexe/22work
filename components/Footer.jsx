import Link from "next/link";
import Logo from "@/components/Logo";
import { company, services } from "@/lib/company";
export default function Footer() {
  return (
    <footer className="footer-area fix">
      <div className="footer-wrap footer-style-1 nblue-bg">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <Link
                href="/"
                aria-label="RAS Coating home"
                className="ras-footer-logo"
              >
                <Logo />
              </Link>
              <p className="clr-white-2">
                PU flooring, epoxy flooring, waterproofing, self leveling, car parking, epoxy coving and
                industrial floor coating solutions in Pune.
              </p>
            </div>
            <div className="col-lg-3">
              <div className="quiklinks">
                <h4 className="section-24">Our Services</h4>
                <ul>
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link href={"/" + service.slug}>{service.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="quiklinks">
                <h4 className="section-24">Get in Touch</h4>
                <p className="clr-white">{company.address}</p>
                <a href={"mailto:" + company.email}>{company.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="container">
          <p className="ras-copyright">
            © {new Date().getFullYear()} RAS Coating. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
