import Link from "next/link";
import { HeroSlider, GalleryLink } from "@/components/Interactions";

export const metadata = {
  title: "Terrazzo Floor",
  description:
    "Terrazzo Floor from RAS Coating. Explore flooring for pharmaceutical, food, healthcare and industrial facilities.",
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
            <h1 className={"breadcrumb-title"}>{"Terrazzo Floor"}</h1>
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
              <span className={"active"}>{"Terrazzo Floor"}</span>
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
                    "Terrazzo floors blend beauty and strength, showcasing colorful chips in a sleek, polished surface. Customizable in endless design combinations, they bring art to the floor."
                  }
                </p>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6"}>
              <div className={"product_block"}>
                <img
                  src={"/assets/img/products-images/terrazzo-floor.jpg"}
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
                    src={"/assets/img/products-images/terrazzo-floor/1.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/terrazzo-floor/1-big.jpg"
                      }
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
                    src={"/assets/img/products-images/terrazzo-floor/2.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/terrazzo-floor/2-big.jpg"
                      }
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
                    src={"/assets/img/products-images/terrazzo-floor/3.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/terrazzo-floor/3-big.jpg"
                      }
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
                    src={"/assets/img/products-images/terrazzo-floor/4.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/terrazzo-floor/4-big.jpg"
                      }
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
                    src={"/assets/img/products-images/terrazzo-floor/5.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/terrazzo-floor/5-big.jpg"
                      }
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
                    src={"/assets/img/products-images/terrazzo-floor/6.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/terrazzo-floor/6-big.jpg"
                      }
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
                    src={"/assets/img/products-images/terrazzo-floor/7.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/terrazzo-floor/7-big.jpg"
                      }
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
                    src={"/assets/img/products-images/terrazzo-floor/8.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/terrazzo-floor/8-big.jpg"
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
