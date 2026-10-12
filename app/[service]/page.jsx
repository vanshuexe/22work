import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/company";
import { PageBanner } from "@/components/CompanySections";
import { GalleryLink } from "@/components/Interactions";
const newServices = services.filter((s) =>
  !["polyurethane-floor", "epoxy-floor"].includes(s.slug),
);
export const dynamicParams = false;
export function generateStaticParams() {
  return newServices.map((s) => ({ service: s.slug }));
}
export async function generateMetadata({ params }) {
  const { service } = await params;
  const item = newServices.find((s) => s.slug === service);
  return { title: item?.name || "Service", description: item?.description };
}
export default async function ServicePage({ params }) {
  const { service } = await params;
  const item = newServices.find((s) => s.slug === service);
  if (!item) notFound();
  return (
    <main>
      <PageBanner title={item.name} image={item.gallery ? item.image : undefined} />
      <section className="ras-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className={item.image ? "col-lg-7" : "col-lg-12"}>
              <h2 className="section_title">{item.name}</h2>
              <p>{item.description}</p>
              <p>
                Share your site location, floor area and requirements with our
                team to discuss the next steps.
              </p>
              <Link href="/contact-us" className="btn-read">
                Discuss Your Project →
              </Link>
            </div>
            {item.image && <div className="col-lg-5">
              <img
                className="ras-about-photo"
                src={item.image}
                alt={item.name + " application"}
              />
            </div>}
          </div>
          {item.gallery && (
            <div className="row mt-5">
              {item.galleryTitle && <div className="col-12"><h2 className="section_title">{item.galleryTitle}</h2></div>}
              {item.gallery.map((photo) => (
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
          )}
          {item.sections?.map((section) => (
            <section className="mt-5" key={section.title}>
              <h2 className="section_title">{section.title}</h2>
              <div className="row">
                {section.photos.map((photo) => (
                  <div className="col-md-6" key={photo.src}>
                    <div className="gallery-single-box product-gallery">
                      <div className="gallery-thumb">
                        <img src={photo.src} alt={photo.alt} loading="lazy" style={{ width: "100%", height: "260px", objectFit: "cover" }} />
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
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
