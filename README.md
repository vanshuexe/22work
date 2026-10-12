# RAS Coating — Next.js

RAS Coating website with 11 pages, shared navigation/footer, local assets, React sliders and an accessible image gallery.

The supplied business card provides the exact logo, Pune office address, email, three contacts and five services. Edit `lib/company.js` to update these centrally. The logo uses a CSS crop of the unchanged business-card image. The Contact Us page also displays the full card, telephone/email links and an address-based map.

Run `npm run dev` for development. Run `npm run build` followed by `npm start` for production. Open http://127.0.0.1:3217. With the server running, `npm run verify` checks all 11 pages, company details, assets, removed services, legacy HTML redirects and SEO endpoints.

Pages: Home, About Us, Client Enquiries, Contact Us, and seven services: PU Flooring, Epoxy Flooring, Waterproofing, Self Leveling, Car Parking, Epoxy Coving and Industrial Floor Coating. Service galleries use the supplied project photographs.

Set `NEXT_PUBLIC_SITE_URL` before deployment to configure the sitemap domain. Maps require an internet connection.

Original HTML snapshots and import scripts are retained for reference. The converter refuses to overwrite the RAS customizations. Existing flooring photos are application illustrations; the previous business identity, client logos and company-history claims are removed from the live pages.


