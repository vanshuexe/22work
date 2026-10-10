import Link from "next/link";
import { HeroSlider, GalleryLink } from "@/components/Interactions";

export const metadata = {
  title: "Applications",
  description:
    "Applications from RAS Coating. Explore flooring for pharmaceutical, food, healthcare and industrial facilities.",
};

export default function Page() {
  return (
    <main>
      <section className={"breadcrumb-area"}>
        <div
          className={"breadcrumb-style-1 mb-10"}
          style={{
            backgroundImage: "url(/assets/img/banner/about-us-banner.jpg)",
          }}
        >
          <div className={"container"}>
            <h1 className={"breadcrumb-title"}>{"Applications"}</h1>
            <div className={"breadcrumb-list"}>
              <span>
                <Link href={"/"}>{"Home"}</Link>
              </span>
              <span>
                <i className={"fa-regular fa-angles-right"}></i>
              </span>
              <span className={"active"}>{"Applications"}</span>
            </div>
          </div>
        </div>
      </section>
      <section
        className={"applications-area"}
        style={{ backgroundImage: "url(/assets/img/bg/pattern.png)" }}
      >
        <div className={"container"}>
          <div className={"row justify-content-center align-items-center"}>
            <div className={"col-lg-3 col-md-4 col-sm-6"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/1.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/1.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/2.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/2.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/3.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/3.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/4.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/4.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/5.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/5.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/6.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/6.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/7.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/7.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/8.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/8.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/9.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/9.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/10.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/10-big.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/11.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/11-big.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/12.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/12-big.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/13.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/13.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/14.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/14.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/15.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/15-big.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/16.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/16-big.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/17.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/17-big.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/18.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/18-big.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/19.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/19.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/20.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/20.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/21.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/21.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/22.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/22-big.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/23.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/23-big.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/24.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/24.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/25.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/25.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/26.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/26.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/27.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/27.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/28.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/28.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/29.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/29.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/30.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/30-big.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/31.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/31-big.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/32.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/32-big.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/33.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/33-big.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/34.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/34-big.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/35.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/35-big.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/36.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/36.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/37.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/37.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/38.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/38.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/39.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/39.jpg"}>
                      <i className={"fa fa-plus"}></i>
                    </GalleryLink>
                  </div>
                </div>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6 g-3"}>
              <div className={"application-single-box"}>
                <div className={"application-thumb"}>
                  <img
                    src={"/assets/img/applications/40.jpg"}
                    alt={"Industrial flooring application"}
                  />
                  <div className={"plus-icon"}>
                    <GalleryLink href={"/assets/img/applications/40-big.jpg"}>
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
