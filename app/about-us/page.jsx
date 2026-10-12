import {
  PageBanner,
  ServicesSection,
} from "@/components/CompanySections";
export const metadata = {
  title: "About Us",
  description:
    "Meet RAS Coating, the team in Chikhali, Pune for industrial flooring, coatings and waterproofing.",
};
function Icon({ children }) {
  return (
    <svg
      className="ras-about-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
const aboutPoints = [
  {
    title: "Epoxy Flooring",
    icon: (
      <>
        <path d="M3 17h18" />
        <path d="M5 17V9l7-4 7 4v8" />
        <path d="M9 17v-4h6v4" />
      </>
    ),
  },
  {
    title: "PU Coating",
    icon: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  },
  {
    title: "Waterproofing",
    icon: (
      <>
        <path d="M12 3 4 6v6c0 4.5 3.4 7.8 8 9 4.6-1.2 8-4.5 8-9V6l-8-3z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
];
const approach = [
  {
    title: "Site Assessment",
    text: "We review the floor or surface condition and your operating requirements before recommending a system.",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
  },
  {
    title: "System Selection",
    text: "The coating or flooring system is matched to the substrate, usage and project specifications.",
    icon: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="9" cy="6" r="2" fill="currentColor" />
        <circle cx="15" cy="12" r="2" fill="currentColor" />
        <circle cx="8" cy="18" r="2" fill="currentColor" />
      </>
    ),
  },
  {
    title: "Careful Execution",
    text: "Surface preparation and application are carried out with attention to workmanship and finish.",
    icon: (
      <>
        <path d="M14 4 20 10 10 20H4v-6L14 4z" />
        <path d="m12 6 6 6" />
      </>
    ),
  },
  {
    title: "Handover & Support",
    text: "We review the finished work with you and stay available for follow-up questions.",
    icon: (
      <>
        <path d="m5 12 4 4 10-10" />
      </>
    ),
  },
];
export default function About() {
  return (
    <main>
      <PageBanner title="About RAS Coating" image="/assets/hero-generated/about-banner.png" />
      <section className="ras-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <h2 className="section_title">About Us</h2>
              <p>
                RAS Coating is a trusted service provider specializing in
                epoxy flooring, PU coating, and waterproofing solutions. We are
                committed to delivering quality workmanship, reliable services,
                and long-lasting protection for industrial and commercial
                projects.
              </p>
              <p>
                We work across epoxy flooring, PU flooring, self-leveling
                flooring, car parking coatings, epoxy coving and waterproofing,
                with solutions tailored to each project's requirements.
              </p>
              <ul className="ras-about-points">
                {aboutPoints.map((point) => (
                  <li key={point.title}>
                    <Icon>{point.icon}</Icon>
                    <span>{point.title}</span>
                  </li>
                ))}
              </ul>
              <p className="ras-about-founder">
                <Icon>
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
                </Icon>
                <span>
                  <strong>Founder:</strong> Mr. Ramesh Singh
                </span>
              </p>
              <p className="ras-about-quote">
                <Icon>
                  <path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z" />
                </Icon>
                <span>
                  At RAS Coating, our goal is to build relationships through
                  quality, commitment, and customer satisfaction
                </span>
              </p>
            </div>
            <div className="col-lg-5">
              <img
                className="ras-about-photo"
                src="/assets/hero-generated/about-flooring.png"
                alt="Professional workers applying an industrial floor coating"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="ras-section ras-founder-section">
        <div className="container">
          <span className="title-sm">Leadership</span>
          <h2 className="section_title">Founder</h2>
          <div className="ras-founder-card">
            <div className="ras-founder-avatar" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </div>
            <div>
              <h3>Mr. Ramesh Singh</h3>
              <p className="ras-founder-role">Founder, RAS Coating</p>
              <p>
                Mr. Ramesh Singh founded RAS Coating to deliver dependable
                flooring, coating and waterproofing work, with a focus on
                quality workmanship and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ras-section">
        <div className="container">
          <span className="title-sm">How We Work</span>
          <h2 className="section_title">Our Working Approach</h2>
          <ul className="ras-approach">
            {approach.map((step, i) => (
              <li key={step.title}>
                <Icon>{step.icon}</Icon>
                <h3>
                  <span>{i + 1}.</span> {step.title}
                </h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ServicesSection />
    </main>
  );
}
