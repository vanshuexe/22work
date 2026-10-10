"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { company, services } from "@/lib/company";

const products = [
  ...services.map((service) => [service.name, service.slug]),
  ["MMA Floor", "mma-floor"],
  ["Chemical Lining", "chemical-lining"],
  ["Terrazzo Floor", "terrazzo-floor"],
  ["Concrete Styles", "concrete-styles"],
  ["Aircraft Hangar", "aircraft-hangar"],
];
const links = [
  ["Home", "/"],
  ["About us", "/about-us"],
  ["Applications", "/applications"],
  ["Enquiries", "/clients"],
  ["Contact us", "/contact-us"],
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  const close = () => {
    setOpen(false);
    setProductsOpen(false);
  };
  const item = ([label, href]) => (
    <li key={href} className={pathname === href ? "active" : ""}>
      <Link
        href={href}
        aria-current={pathname === href ? "page" : undefined}
        onClick={close}
      >
        {label}
      </Link>
    </li>
  );
  return (
    <header className="site-header">
      <div className="main-header" id="header-sticky">
        <div className="header-area">
          <div className="container">
            <div className="header-top-area">
              <div className="header-top-left d-flex">
                <div className="info d-flex">
                  <i className="fa-sharp fa-solid fa-envelope" />
                  <a href={"mailto:" + company.email}>{company.email}</a>
                </div>
                <div className="info d-flex">
                  <i className="fa-sharp fa-solid fa-phone" />
                  <a href={"tel:" + company.contacts[0].tel}>
                    {company.contacts[0].phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="header-bottom-area">
              <div className="site-navigation">
                <div className="header-logo">
                  <Link href="/" aria-label="RAS Coating home" onClick={close}>
                    <Logo />
                  </Link>
                </div>
                <button
                  className="mobile-toggle"
                  type="button"
                  aria-label={open ? "Close navigation" : "Open navigation"}
                  aria-expanded={open}
                  aria-controls="site-menu"
                  onClick={() => setOpen(!open)}
                >
                  {open ? "✕" : "☰"}
                </button>
                <div className={`main-menu site-menu ${open ? "is-open" : ""}`}>
                  <nav id="site-menu" aria-label="Main navigation">
                    <ul>
                      {links.slice(0, 2).map(item)}
                      <li
                        className={`products-menu ${productsOpen ? "expanded" : ""} ${products.some((p) => pathname === "/" + p[1]) ? "active" : ""}`}
                      >
                        <button
                          type="button"
                          className="products-toggle"
                          aria-expanded={productsOpen}
                          aria-controls="products-menu"
                          onClick={() => setProductsOpen(!productsOpen)}
                        >
                          Services <span aria-hidden="true">+</span>
                        </button>
                        <ul className="submenu" id="products-menu">
                          {products.map(([label, slug]) => (
                            <li key={slug}>
                              <Link
                                href={"/" + slug}
                                aria-current={
                                  pathname === "/" + slug ? "page" : undefined
                                }
                                onClick={close}
                              >
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      {links.slice(2).map(item)}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
