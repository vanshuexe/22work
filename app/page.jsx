import Link from "next/link";
import { HeroSlider, GalleryLink } from "@/components/Interactions";
import { ServicesSection, TeamSection } from "@/components/CompanySections";
import { company } from "@/lib/company";
export const metadata = {
  title: "RAS Coating | Industrial Flooring & Waterproofing in Pune",
  description:
    "RAS Coating in Chikhali, Pune: PU flooring, epoxy flooring, waterproofing, self leveling and industrial floor coating solutions.",
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
                src="/assets/img/home-about1.jpg"
                alt="Industrial floor surface"
              />
            </div>
            <div className="col-lg-6">
              <span className="title-sm">Welcome to RAS Coating</span>
              <h2 className="section_title">
                Flooring & coating solutions for your space
              </h2>
              <p>
                Based in Chikhali, Pune, RAS Coating provides PU flooring, epoxy
                flooring, waterproofing, self leveling and all types of
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
      <TeamSection />
      <section className="ras-section">
        <div className="container">
          <h2 className="section_title">Flooring Applications</h2>
          <div className="ras-gallery">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <GalleryLink
                key={n}
                href={`/assets/img/gallery/gallery${n}${[2, 4, 6].includes(n) ? "-big" : ""}.jpg`}
              >
                <img
                  src={`/assets/img/gallery/gallery${n}.jpg`}
                  alt="Industrial flooring application"
                  loading="lazy"
                />
              </GalleryLink>
            ))}
          </div>
        </div>
      </section>
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
