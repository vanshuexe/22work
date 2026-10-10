import {
  PageBanner,
  ServicesSection,
  TeamSection,
} from "@/components/CompanySections";
export const metadata = {
  title: "About Us",
  description:
    "Meet RAS Coating, the team in Chikhali, Pune for industrial flooring, coatings and waterproofing.",
};
export default function About() {
  return (
    <main>
      <PageBanner title="About RAS Coating" />
      <section className="ras-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <h2 className="section_title">
                Industrial flooring & coating solutions
              </h2>
              <p>
                RAS Coating is based in Chikhali, Pune, Maharashtra. Our
                services include PU flooring, epoxy flooring, waterproofing,
                self leveling and all types of industrial floor coating
                solution.
              </p>
              <p>
                Contact Ramesh Singh, Owner; Sunil Kumar, Project Coordinator;
                or Prithviraj, Office In-Charge to discuss your project.
              </p>
            </div>
            <div className="col-lg-5">
              <img
                className="ras-about-photo"
                src="/assets/img/about-img.jpg"
                alt="Industrial flooring application"
              />
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
      <ServicesSection />
    </main>
  );
}
