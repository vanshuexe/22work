import Link from "next/link";
import { HeroSlider, GalleryLink } from "@/components/Interactions";

export const metadata = {
  title: "MMA Floor",
  description:
    "MMA Floor from RAS Coating. Explore flooring for pharmaceutical, food, healthcare and industrial facilities.",
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
            <h1 className={"breadcrumb-title"}>{"MMA Floor"}</h1>
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
              <span className={"active"}>{"MMA Floor"}</span>
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
                    "A wide range of fast track floors with very quick turnaround time to minimize production shut down."
                  }
                </p>
              </div>
            </div>
            <div className={"col-lg-3 col-md-4 col-sm-6"}>
              <div className={"product_block"}>
                <img
                  src={"/assets/img/products-images/mma-floor.jpg"}
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
        </div>
      </section>
    </main>
  );
}
