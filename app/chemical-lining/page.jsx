import Link from "next/link";
import { HeroSlider, GalleryLink } from "@/components/Interactions";

export const metadata = {
  title: "Chemical Lining",
  description:
    "Chemical Lining from RAS Coating. Explore flooring for pharmaceutical, food, healthcare and industrial facilities.",
};

export default function Page() {
  return (
    <main>
      <section className={"breadcrumb-area"}>
        <div
          className={"breadcrumb-style-1 mb-10"}
          style={{
            backgroundImage:
              "url(/assets/img/banner/concrete-style-banner.jpg)",
          }}
        >
          <div className={"container"}>
            <h1 className={"breadcrumb-title"}>{"Chemical Lining"}</h1>
            <div className={"breadcrumb-list"}>
              <span>
                <Link href={"/"}>{"Home"}</Link>
              </span>
              <span>
                <i className={"fa-regular fa-angles-right"}></i>
              </span>
              <span>{"Products"}</span>
              <span>
                <i className={"fa-regular fa-angles-right"}></i>
              </span>
              <span className={"active"}>{"Chemical Lining"}</span>
            </div>
          </div>
        </div>
      </section>
      <section
        className={"product-area mma-area"}
        style={{ backgroundImage: "url(/assets/img/bg/pattern.png)" }}
      >
        <div className={"container"}>
          <div className={"row justify-content-center align-items-center"}>
            <div className={"col-lg-8 col-md-8 col-sm-12"}>
              <div className={"product_block prod-mb"}>
                <p>
                  {
                    "Tough polymer formulation for tough environment, secondary containment area, process floor, pits & trenches. A range of linings which can withstand strong ultra-corrosive environment & perform under extreme physical conditions."
                  }
                </p>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6"}>
              <div className={"product_block"}>
                <img
                  src={"/assets/img/products-images/chemical-lining.jpg"}
                  alt={"Industrial flooring application"}
                />
                <div className={"shape1 rotate-me"}>
                  <img
                    src={"/assets/img/circle-shape.png"}
                    alt={"Industrial flooring application"}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className={"p_hr"} />
          <div className={"row"}>
            <div className={"col-lg-3 col-md-4 col-sm-6"}>
              <div className={"gallery-single-box product-gallery"}>
                <div className={"gallery-thumb"}>
                  <img
                    src={"/assets/img/products-images/chemical-lining/1.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/chemical-lining/1-big.jpg"
                      }
                    >
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
