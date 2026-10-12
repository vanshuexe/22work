import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackToTop, GalleryProvider } from "@/components/Interactions";
import "./globals.css";

export const metadata = {
  title: {
    default: "RAS Coating | Industrial Flooring",
    template: "%s | RAS Coating",
  },
  description:
    "RAS Coating in Pune: PU flooring, epoxy flooring, waterproofing, self leveling, car parking, epoxy coving and industrial floor coating solutions.",
  icons: { icon: "/assets/ras-icon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body>
        <GalleryProvider>
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </GalleryProvider>
      </body>
    </html>
  );
}
