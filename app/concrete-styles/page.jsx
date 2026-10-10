import Link from "next/link";
import { HeroSlider, GalleryLink } from "@/components/Interactions";

export const metadata = {
  title: "Concrete Styles",
  description:
    "Concrete Styles from RAS Coating. Explore flooring for pharmaceutical, food, healthcare and industrial facilities.",
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
            <h1 className={"breadcrumb-title"}>{"Concrete Styles"}</h1>
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
              <span className={"active"}>{"Concrete Styles"}</span>
            </div>
          </div>
        </div>
      </section>
      <section
        className={"product-area concrete-product"}
        style={{ backgroundImage: "url(/assets/img/bg/pattern.png)" }}
      >
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-lg-12"}>
              <div className={"product_block prod-mb"}>
                <p>
                  {
                    "We at RAS Coating do understand that there is a streak of creativity in all of us and hence we let your creativity flow on the floor with designs, colours, graphics and logos in Special Display Areas, Display windows, Shopping floors, Showroom Approach and in many more zones."
                  }
                </p>
              </div>
            </div>
            <div className={"col-lg-5"}>
              <div
                className={"product_img_main wow fadeInUp"}
                data-wow-delay={"0.3s"}
              ></div>
            </div>
            <div className={"col-lg-7"}>
              <div
                className={"product_main_content wow fadeInUp"}
                data-wow-delay={"0.9s"}
              >
                <div className={"inner_title"}>
                  <h2 className={"section_title"}>
                    {"Concrete styles offer you :"}
                  </h2>
                </div>
                <ul>
                  <li>
                    {
                      "Perfect floors to cheer up your mood with versatile techniques that can bring creative mood to the fore."
                    }
                  </li>
                  <li>
                    {
                      "Help you Design each floor passionately, differently and artistically"
                    }
                  </li>
                  <li>{"Create logos, Abstracts on Concrete"}</li>
                  <li>{"Expand your expanse"}</li>
                  <li>
                    {
                      "Create customized style luxury. Revolutionize your interior with that touch of class that is expected from hotel industry. RAS Coating offers Impeccable concrete styles with easy cleaning properties that could symbolize your hotel to be a place of prosperity, harmony and nobility in areas of Reception, Business centers, Banquet Halls, Lounges, Executive Runs, Restaurant & Bars, Kitchens and much more.."
                    }
                  </li>
                </ul>
              </div>
            </div>
            <div className={"col-lg-12"}>
              <div className={"product_block_text prod-mt"}>
                <p>
                  {
                    "Choose from a variety of colours, combinations and design for each sector of your Home floor from the kitchen to the dining hall or your Bathroom. It’s an assurance with every purchase that you will just love the new feeling, each time you walk into a different area in your house.."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"things-area wow fadeInUp"} data-wow-delay={"0.3s"}>
        <div className={"container"}>
          <div className={"row justify-content-center"}>
            <div className={"col-lg-12"}>
              <div className={"inner_title"}>
                <h2 className={"section_title"}>
                  {"Just to mention a few highlights:"}
                </h2>
              </div>
            </div>
            <div className={"col-lg-7"}>
              <div className={"few_highlights_block"}>
                <div className={"row"}>
                  <div className={"col-lg-12"}>
                    <div className={"hightlights_inner"}>
                      <div className={"hightlights_bg"}>
                        <p>
                          <i className={"fa-sharp fa-light fa-check"}></i>
                          {" Seamless"}
                        </p>
                      </div>
                      <div className={"hightlights_bg"}>
                        <p>
                          <i className={"fa-sharp fa-light fa-check"}></i>
                          {" Stain Resistance"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={"col-lg-12"}>
                    <div className={"hightlights_inner"}>
                      <div className={"hightlights_bg"}>
                        <p>
                          <i className={"fa-sharp fa-light fa-check"}></i>
                          {" Water Resistant"}
                        </p>
                      </div>
                      <div className={"hightlights_bg"}>
                        <p>
                          <i className={"fa-sharp fa-light fa-check"}></i>
                          {" Easy to clean"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={"col-lg-12"}>
                    <div className={"hightlights_inner"}>
                      <div className={"hightlights_bg"}>
                        <p>
                          <i className={"fa-sharp fa-light fa-check"}></i>
                          {" Durable"}
                        </p>
                      </div>
                      <div className={"hightlights_bg"}>
                        <p>
                          <i className={"fa-sharp fa-light fa-check"}></i>
                          {" Low Maintenance"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={"col-lg-12"}>
                    <div className={"hightlights_inner"}>
                      <div className={"hightlights_bg"}>
                        <p>
                          <i className={"fa-sharp fa-light fa-check"}></i>
                          {" Chemically Resistant"}
                        </p>
                      </div>
                      <div className={"hightlights_bg"}>
                        <p>
                          <i className={"fa-sharp fa-light fa-check"}></i>
                          {" Versatile"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-5 col-md-8"}>
              <div className={"highlights_img"}>
                <img
                  src={"/assets/img/hightlights-concrete.jpg"}
                  alt={"Industrial flooring application"}
                />
              </div>
            </div>
          </div>
          <hr className={"p_hr"} />
          <div className={"row"}>
            <div className={"col-lg-3 col-md-4 col-sm-6"}>
              <div className={"gallery-single-box product-gallery"}>
                <div className={"gallery-thumb"}>
                  <img
                    src={"/assets/img/products-images/concrete-style/1.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/concrete-style/1-big.jpg"
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
                    src={"/assets/img/products-images/concrete-style/2.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/concrete-style/2-big.jpg"
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
                    src={"/assets/img/products-images/concrete-style/3.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/concrete-style/3-big.jpg"
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
                    src={"/assets/img/products-images/concrete-style/4.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={"/assets/img/products-images/concrete-style/4.jpg"}
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
                    src={"/assets/img/products-images/concrete-style/5.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/concrete-style/5-big.jpg"
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
                    src={"/assets/img/products-images/concrete-style/6.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/concrete-style/6-big.jpg"
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
                    src={"/assets/img/products-images/concrete-style/7.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/concrete-style/7-big.jpg"
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
                    src={"/assets/img/products-images/concrete-style/8.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/concrete-style/8-big.jpg"
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
                    src={"/assets/img/products-images/concrete-style/9.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/concrete-style/9-big.jpg"
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
                    src={"/assets/img/products-images/concrete-style/10.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/concrete-style/10-big.jpg"
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
                    src={"/assets/img/products-images/concrete-style/11.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink
                      className={"video-vemo-icon"}
                      href={
                        "/assets/img/products-images/concrete-style/11-big.jpg"
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
