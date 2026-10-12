import Link from "next/link";
import { HeroSlider } from "@/components/Interactions";
import { ServicesSection } from "@/components/CompanySections";
import { company } from "@/lib/company";
export const metadata = {
  title: "RAS Coating | Industrial Flooring & Waterproofing in Pune",
  description:
    "RAS Coating in Chikhali, Pune: PU flooring, epoxy flooring, waterproofing, self leveling, car parking, epoxy coving and industrial floor coating solutions.",
};
export default function Home() {
  return (
    <main>
      <section className="hero-section hero-2 bg-cover fix">
        <div className="wrapper">
          <HeroSlider />
        </div>
      </section>
      <section className="ras-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <img
                className="ras-about-photo"
                src="/assets/hero-generated/welcome-flooring.png"
                alt="Professional floor coating work in an industrial facility"
              />
            </div>
            <div className="col-lg-6">
              <span className="title-sm">Welcome to RAS Coating</span>
              <h2 className="section_title">
                Flooring & coating solutions for your space
              </h2>
              <p>
                Based in Chikhali, Pune, RAS Coating provides PU flooring, epoxy
                flooring, waterproofing, self leveling, car parking, epoxy coving and all types of
                industrial floor coating solutions.
              </p>
              <p>
                Speak with our team about your site, surface condition and
                project requirements.
              </p>
              <Link className="btn-read" href="/contact-us">
                Discuss Your Project →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
      <section className="ras-cta">
        <div className="container">
          <h2>Let’s discuss your flooring requirements</h2>
          <p>{company.address}</p>
          <a className="btn-white" href={"mailto:" + company.email}>
            Email {company.email}
          </a>
        </div>
      </section>
    </main>
  );
}
