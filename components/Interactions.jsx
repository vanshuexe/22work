"use client";

import Link from "next/link";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import "swiper/css";

const heroSlides = [
  {
    label: "RAS Coating",
    title: "Industrial & Residential Flooring or Coatings",
    text: "Professional flooring, coating, and waterproofing solutions for industrial and commercial projects.",
    href: "/contact-us",
    cta: "Contact Us",
  },
  {
    label: "Epoxy & PU Flooring",
    title: "Durable Floors Built for Your Site",
    text: "Epoxy, PU and self-leveling floor systems selected around your floor condition and operating requirements.",
    href: "/epoxy-floor",
    cta: "Explore Flooring",
  },
  {
    label: "Waterproofing & Parking",
    title: "Protection for Roofs, Terraces and Parking Floors",
    text: "Waterproofing and car parking coatings that help protect structures and keep surfaces in working order.",
    href: "/waterproofing",
    cta: "Explore Waterproofing",
  },
];

export function HeroSlider() {
  return (
    <Swiper
      className="hero-slider-initial"
      modules={[Navigation, Autoplay, A11y]}
      loop
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation={{ prevEl: ".hero-button-prev", nextEl: ".hero-button-next" }}
    >
      {heroSlides.map((slide, index) => {
        const n = index + 1;
        return (
        <SwiperSlide key={n}>
          <div
            className="image-layer"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.12)), url(/assets/hero-generated/hero-${n}.png)`,
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="heroleft_content">
                  <h6 className="sub-title">{slide.label}</h6>
                  {index === 0 ? <h1>{slide.title}</h1> : <h2 className="hero-title">{slide.title}</h2>}
                  <p>{slide.text}</p>
                  <div className="hero-btn">
                    <div className="btn-box">
                      <Link className="btn-white" href={slide.href}>
                        {slide.cta}{" "}
                        <i className="fa-regular fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        );
      })}
      <div className="hero-slider-btn">
        <button
          type="button"
          aria-label="Previous slide"
          className="hero-button-prev slider-btn"
        >
          <i className="fa-light fa-arrow-left-long" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="hero-button-next slider-btn"
        >
          <i className="fa-sharp fa-light fa-arrow-right-long" />
        </button>
      </div>
    </Swiper>
  );
}

const GalleryContext = createContext(null);
export function GalleryProvider({ children }) {
  const [active, setActive] = useState(null);
  const [images, setImages] = useState([]);
  const dialog = useRef(null);
  const returnFocus = useRef(null);
  const pathname = usePathname();
  useEffect(() => {
    setActive(null);
  }, [pathname]);
  const open = (href, trigger) => {
    returnFocus.current = trigger;
    setImages([
      ...new Set(
        [...document.querySelectorAll("[data-gallery-image]")].map((el) =>
          el.getAttribute("href"),
        ),
      ),
    ]);
    setActive(href);
  };
  const close = () => {
    setActive(null);
    returnFocus.current?.focus();
  };
  const move = (direction) =>
    setActive(
      (current) =>
        images[
          (images.indexOf(current) + direction + images.length) % images.length
        ],
    );
  useEffect(() => {
    if (!active) return;
    const modal = dialog.current;
    modal?.showModal();
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const keyboard = (e) => {
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", keyboard);
    return () => {
      modal?.close();
      document.body.style.overflow = oldOverflow;
      document.removeEventListener("keydown", keyboard);
    };
  }, [active, images]);
  return (
    <GalleryContext.Provider value={open}>
      {children}
      {active && (
        <dialog
          ref={dialog}
          className="gallery-dialog"
          aria-label="Flooring project image gallery"
          onCancel={(e) => {
            e.preventDefault();
            close();
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button
            type="button"
            className="gallery-close"
            aria-label="Close gallery"
            onClick={close}
          >
            ✕
          </button>
          <button
            type="button"
            className="gallery-prev"
            aria-label="Previous image"
            onClick={() => move(-1)}
          >
            ‹
          </button>
          <figure>
            <img src={active} alt="Industrial flooring application enlarged" />
            <figcaption>
              {images.indexOf(active) + 1} / {images.length}
            </figcaption>
          </figure>
          <button
            type="button"
            className="gallery-next"
            aria-label="Next image"
            onClick={() => move(1)}
          >
            ›
          </button>
        </dialog>
      )}
    </GalleryContext.Provider>
  );
}
export function GalleryLink({ href, children, ...props }) {
  const open = useContext(GalleryContext);
  return (
    <a
      {...props}
      href={href}
      data-gallery-image
      aria-label="View flooring project image"
      onClick={(e) => {
        e.preventDefault();
        open(href, e.currentTarget);
      }}
    >
      {children}
    </a>
  );
}
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    visible && (
      <button
        type="button"
        id="back-top"
        className="back-to-top show"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fa-regular fa-arrow-up" />
      </button>
    )
  );
}
