export const company = {
  name: "RAS Coating",
  email: "rascoating@gmail.com",
  address:
    "Building No. A8/601, Ashwariyam Hamara, Gat No. 94, Dehu-Alandi Road, Chikhali, Pune - 412114, Maharashtra, India.",
};
export const services = [
  {
    name: "PU Flooring",
    slug: "polyurethane-floor",
    applications: ["Industrial plants and production areas","Areas needing chemical or temperature resistance","Spaces that need regular cleaning"],
    scope: "Surface assessment, system selection, application and finishing.",
    image: "/assets/pu-floor/green-floor.jpeg",
    description:
      "Polyurethane flooring systems are suitable for selected industrial environments, including applications that require resistance to chemicals, temperature variations, or regular cleaning.",
  },
  {
    name: "Epoxy Flooring",
    slug: "epoxy-floor",
    applications: ["Factories, warehouses and workshops","Commercial and service areas","Zones needing easy maintenance or chemical protection"],
    scope: "Floor inspection, preparation, system selection and application.",
    image: "/assets/epoxy-floor/industrial-floor.jpeg",
    description:
      "Epoxy flooring provides a seamless, durable surface for many industrial and commercial applications, with abrasion resistance, easy maintenance and protection against specified chemicals depending on the system.",
  },
  {
    name: "Waterproofing",
    slug: "waterproofing",
    applications: ["Roofs and terraces","Other suitable surfaces exposed to moisture","Sheet membrane and coating systems"],
    scope: "Site inspection, surface preparation and waterproofing application.",
    image: "/assets/waterproofing/red-roof.jpeg",
    galleryTitle: "Waterproofing Coating",
    gallery: [
      { src: "/assets/waterproofing/red-roof.jpeg", alt: "Red waterproofing coating on an open roof" },
      { src: "/assets/waterproofing/grey-terrace.jpeg", alt: "Grey waterproofing coating on a terrace beneath a staircase" },
      { src: "/assets/waterproofing/grey-terrace-view.jpeg", alt: "Another view of the grey waterproofed terrace" },
      { src: "/assets/waterproofing/roof-coating.jpeg", alt: "Waterproofing coating on a rooftop beside the building" },
    ],
    sections: [
      {
        title: "Sheet Waterproofing",
        photos: [
          { src: "/assets/waterproofing/sheet-rolls.jpeg", alt: "Sheet waterproofing membrane rolls at the project site" },
          { src: "/assets/waterproofing/sheet-installation.jpeg", alt: "Sheet waterproofing membrane installed across a construction site" },
        ],
      },
    ],
    description:
      "RAS Coating provides waterproofing solutions for roofs, terraces, and other suitable surfaces to help prevent water ingress and protect structures from moisture-related damage.",
  },
  {
    name: "Self Leveling",
    slug: "self-leveling",
    applications: ["Floors that need a smooth, even finish","Industrial and commercial interiors","Areas with equipment and regular movement"],
    scope: "Substrate preparation, levelling application and finishing.",
    image: "/assets/self-leveling/finished-floor.jpeg",
    galleryTitle: "Self Leveling Work",
    gallery: [
      { src: "/assets/self-leveling/floor-application.jpeg", alt: "Self leveling grey floor during application" },
      { src: "/assets/self-leveling/finished-floor.jpeg", alt: "Finished self leveling floor around electrical equipment" },
    ],
    description:
      "Self leveling flooring for a smooth, even surface. Discuss substrate preparation, finish and project requirements with RAS Coating.",
  },
  {
    name: "Car Parking",
    slug: "car-parking",
    applications: ["Indoor and covered parking floors","Walkways and driving lanes","Bay, number and direction markings"],
    scope: "Floor coating with line, bay and arrow marking.",
    image: "/assets/car-parking/direction-markings.jpeg",
    galleryTitle: "Car Parking Work",
    gallery: [
      { src: "/assets/car-parking/direction-markings.jpeg", alt: "Car parking floor with white direction markings" },
      { src: "/assets/car-parking/green-walkway.jpeg", alt: "Green walkway alongside a coated parking floor" },
      { src: "/assets/car-parking/floor-coating.jpeg", alt: "Grey floor coating in an indoor parking area" },
      { src: "/assets/car-parking/parking-bays.jpeg", alt: "Yellow lines and numbers marking car parking bays" },
      { src: "/assets/car-parking/arrow-marking.jpeg", alt: "White direction arrow on the parking floor" },
      { src: "/assets/car-parking/bay-numbering.jpeg", alt: "Parking bay numbers being applied with stencils" },
    ],
    description:
      "Floor coating solutions for car parking areas. Discuss your parking surface, traffic and marking requirements with RAS Coating.",
  },
  {
    name: "Epoxy Coving",
    slug: "epoxy-coving",
    applications: ["Floor-to-wall junctions","Clean and hygienic work areas","Corners that need a continuous, easy-to-clean edge"],
    scope: "Coving profile formation and finishing along walls.",
    image: "/assets/epoxy-coving/yellow-coving.jpeg",
    galleryTitle: "Epoxy Coving Work",
    gallery: [
      { src: "/assets/epoxy-coving/yellow-coving.jpeg", alt: "Yellow epoxy coving along a white wall and blue floor" },
      { src: "/assets/epoxy-coving/blue-floor-coving.jpeg", alt: "Epoxy coving around wall corners beside a blue floor" },
      { src: "/assets/epoxy-coving/coving-application.jpeg", alt: "Epoxy coving being applied along a floor-to-wall junction" },
    ],
    description:
      "Epoxy coving for floor-to-wall junctions. Contact our team to discuss your site and finish requirements.",
  },
  {
    name: "All Types of Industrial Floor Coating Solution",
    slug: "industrial-floor-coating",
    applications: ["Industrial facilities and plants","Commercial spaces","Mixed requirements across one site"],
    scope: "Site review and a coating solution matched to the floor and its use.",
    image: "/assets/pu-floor/green-floor.jpeg",
    galleryTitle: "Our Coating Work",
    gallery: [
      { src: "/assets/epoxy-floor/industrial-floor.jpeg", alt: "Epoxy flooring with blue walkways in an industrial facility" },
      { src: "/assets/waterproofing/red-roof.jpeg", alt: "Red waterproofing coating on a rooftop" },
      { src: "/assets/self-leveling/finished-floor.jpeg", alt: "Self leveling floor around electrical equipment" },
      { src: "/assets/car-parking/direction-markings.jpeg", alt: "Car parking floor coating with direction markings" },
      { src: "/assets/epoxy-coving/yellow-coving.jpeg", alt: "Yellow epoxy coving along a wall beside a blue floor" },
    ],
    description:
      "Industrial floor coating solutions selected around your facility, floor condition and intended use.",
  },
];
// Add a `logo` path (e.g. "/assets/clients/lt.svg") to show a real logo;
// otherwise a generic SVG icon is shown beside the name.
export const clients = [
  { name: "L&T", logo: "/assets/clients/lt.svg" },
  { name: "Adani Wilmar", logo: "/assets/clients/adani-wilmar.svg" },
  { name: "Rohan Builders", logo: "/assets/clients/rohan.png" },
  { name: "Jubilant FoodWorks", logo: "/assets/clients/jubilant.png" },
  { name: "Suraj Buildcon" },
  { name: "B&R Group" },
  { name: "Zydus", logo: "/assets/clients/zydus.jpg" },
  { name: "Intas", logo: "/assets/clients/intas.png" },
];
