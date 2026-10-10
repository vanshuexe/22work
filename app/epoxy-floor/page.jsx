import Link from "next/link";
import { HeroSlider, GalleryLink } from "@/components/Interactions";

export const metadata = {
  title: "Epoxy Floor",
  description:
    "Epoxy Floor from RAS Coating. Explore flooring for pharmaceutical, food, healthcare and industrial facilities.",
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
            <h1 className={"breadcrumb-title"}>{"Epoxy Floor"}</h1>
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
              <span className={"active"}>{"Epoxy Floor"}</span>
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
                    "A wide range, from standard coating to self levelers & very high chemical resistant antistatic floor to suit every production pattern."
                  }
                </p>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6"}>
              <div className={"product_block"}>
                <img
                  src={"/assets/img/products-images/epoxy-floor.jpg"}
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
                    src={"/assets/img/products-images/epoxy-floor/1.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={"/assets/img/products-images/epoxy-floor/1.jpg"}
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
                    src={"/assets/img/products-images/epoxy-floor/2.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={"/assets/img/products-images/epoxy-floor/2-big.jpg"}
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
                    src={"/assets/img/products-images/epoxy-floor/3.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={"/assets/img/products-images/epoxy-floor/3.jpg"}
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
                    src={"/assets/img/products-images/epoxy-floor/4.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={"/assets/img/products-images/epoxy-floor/4.jpg"}
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
                    src={"/assets/img/products-images/epoxy-floor/5.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={"/assets/img/products-images/epoxy-floor/5-big.jpg"}
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
                    src={"/assets/img/products-images/epoxy-floor/6.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={"/assets/img/products-images/epoxy-floor/6-big.jpg"}
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
                    src={"/assets/img/products-images/epoxy-floor/7.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={"/assets/img/products-images/epoxy-floor/7-big.jpg"}
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
                    src={"/assets/img/products-images/epoxy-floor/8.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={"/assets/img/products-images/epoxy-floor/8-big.jpg"}
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
