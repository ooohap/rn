import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

// Base URL of your site
const BASE_URL = "https://www.rn-dubai.com";

// Define the static routes for your app
const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/products", changefreq: "monthly", priority: 0.9 },
  { url: "/about-us", changefreq: "monthly", priority: 0.8 },
  { url: "/contact-us", changefreq: "monthly", priority: 0.7 },
  // Add more routes here as needed
];

const generateSitemap = () => {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  const writeStream = createWriteStream("./public/sitemap.xml"); // Output location

  sitemap.pipe(writeStream);

  // Add each route to the sitemap
  routes.forEach((route) => sitemap.write(route));

  // Close the stream
  sitemap.end();

  streamToPromise(sitemap)
    .then(() => console.log("Sitemap generated successfully!"))
    .catch((err) => console.error("Error generating sitemap:", err));
};

// Run the generator
generateSitemap();
