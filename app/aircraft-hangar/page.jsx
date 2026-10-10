import Link from "next/link";
import { HeroSlider, GalleryLink } from "@/components/Interactions";

export const metadata = {
  title: "Aircraft Hangar",
  description:
    "Aircraft Hangar from RAS Coating. Explore flooring for pharmaceutical, food, healthcare and industrial facilities.",
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
            <h1 className={"breadcrumb-title"}>{"Aircraft Hangar"}</h1>
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
              <span className={"active"}>{"Aircraft Hangar"}</span>
            </div>
          </div>
        </div>
      </section>
      <section
        className={"product-area"}
        style={{ backgroundImage: "url(/assets/img/bg/pattern.png)" }}
      >
        <div className={"container"}>
          <div className={"row justify-content-center align-items-center"}>
            <div className={"col-lg-8 col-md-8 col-sm-12"}>
              <div className={"product_block prod-mb"}>
                <p>
                  {
                    "Aircraft hangars are large, enclosed structures designed for housing, servicing, and protecting aircraft. They offer wide-span, column-free spaces with high structural strength and durability."
                  }
                </p>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6"}>
              <div className={"product_block"}>
                <img
                  src={"/assets/img/products-images/aircraft-hangar.jpg"}
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
                    src={"/assets/img/products-images/aircraft/1.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={"/assets/img/products-images/aircraft/1-big.jpg"}
                    >
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6"}>
              <div className={"gallery-single-box product-gallery"}>
                <div className={"gallery-thumb"}>
                  <img
                    src={"/assets/img/products-images/aircraft/2.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={"/assets/img/products-images/aircraft/2-big.jpg"}
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
