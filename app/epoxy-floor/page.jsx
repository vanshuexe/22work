import Link from "next/link";
import { services } from "@/lib/company";
import { GalleryLink } from "@/components/Interactions";

export const metadata = {
  title: "Epoxy Floor",
  description: "Epoxy Floor from RAS Coating. Explore flooring for pharmaceutical, food, healthcare and industrial facilities.",
};

const photos = [
  { src: "/assets/epoxy-floor/grey-hall.jpeg", alt: "Glossy grey epoxy flooring in a large hall" },
  { src: "/assets/epoxy-floor/industrial-floor.jpeg", alt: "Grey epoxy flooring with blue walkways in an industrial facility" },
  { src: "/assets/epoxy-floor/green-floor.jpeg", alt: "Green epoxy flooring around industrial tanks" },
];

export default function Page() {
  return (
    <main>
      <section className="breadcrumb-area">
        <div className="breadcrumb-style-1 mb-10" style={{ backgroundImage: "url(/assets/epoxy-floor/industrial-floor.jpeg)" }}>
          <div className="container">
            <h1 className="breadcrumb-title">Epoxy Floor</h1>
            <div className="breadcrumb-list">
              <span><Link href="/">Home</Link></span>
              <span><i className="fa-regular fa-angles-right" aria-hidden="true" /></span>
              <span>Products</span>
              <span><i className="fa-regular fa-angles-right" aria-hidden="true" /></span>
              <span className="active">Epoxy Floor</span>
            </div>
          </div>
        </div>
      </section>
      <section className="product-area" style={{ backgroundImage: "url(/assets/img/bg/pattern.png)" }}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="product_block prod-mb">
                <h2>Industrial Epoxy Flooring</h2>
                <p>Epoxy flooring provides a seamless, durable surface for many industrial and commercial applications.</p>
                <p>Depending on the selected system, it can offer abrasion resistance, easy maintenance, and protection against specified chemicals. System selection depends on the floor condition and the project's operational requirements.</p>
                {(() => { const item = services.find((x) => x.slug === "epoxy-floor"); return item ? (
                  <div className="ras-detail">
                    <h3>Applications</h3>
                    <ul>{item.applications.map((a) => <li key={a}>{a}</li>)}</ul>
                    <p><strong>Scope:</strong> {item.scope}</p>
                  </div>
                ) : null; })()}
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product_block">
                <img src={photos[1].src} alt={photos[1].alt} />
                <div className="shape1 rotate-me">
                  <img src="/assets/img/circle-shape.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <hr className="p_hr" />
          <div className="row">
            {photos.map((photo) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={photo.src}>
                <div className="gallery-single-box product-gallery">
                  <div className="gallery-thumb">
                    <img src={photo.src} alt={photo.alt} loading="lazy" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                    <div className="plus-icon">
                      <GalleryLink className="video-vemo-icon" href={photo.src}>
                        <i className="fa fa-plus" aria-hidden="true" />
                      </GalleryLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

