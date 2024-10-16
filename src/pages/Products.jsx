import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SeaProducts from "../components/products/SeaProducts.jsx";
import MeatProducts from "../components/products/MeatProducts.jsx";
import PoultryProducts from "../components/products/PoultryProducts.jsx";

export default function Products() {
  const seaRef = useRef(null);
  const meatRef = useRef(null);
  const poultryRef = useRef(null);
  const topRef = useRef(null);

  // Get the current location (including hash)
  const location = useLocation();

  useEffect(() => {
    const handleScrollToSection = () => {
      const hash = location.hash; // Get the current hash from the URL
      switch (hash) {
        case "#sea-products":
          seaRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "#meat-products":
          meatRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "#poultry-products":
          poultryRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          topRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
      }
    };

    // Call the function initially to handle scroll on page load
    handleScrollToSection();

    // Optionally, you can also watch location changes for hash updates
    // It automatically triggers on changes like navigation or hash update
  }, [location]);

  return (
    <>
      <SEOHelmetProductsPage />
      <div ref={topRef}></div>
      <section className="my-8">
        <div className="h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
          <div className="mb-3">
            <h2 className="text-3xl font-bold">Our Products</h2>
          </div>
          {/* Sea Products Section */}
          <div ref={seaRef} className="my-2">
            <SeaProducts />
          </div>

          {/* Meat Products Section */}
          <div ref={meatRef} className="my-2">
            <MeatProducts />
          </div>

          {/* Poultry Products Section */}
          <div ref={poultryRef} className="my-2">
            <PoultryProducts />
          </div>

          {/* <div className="mb-3">
            <h1 className="text-3xl font-bold">Yesterday</h1>
            <p className="text-sm text-gray-500 uppercase font-bold">
              WEDNESDAY 5 AUGUST
            </p>
          </div>
          <div className="flex -mx-1 mb-5">
            <div className="w-1/2 px-1">
              <Link
                to="/products"
                className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-24"></div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  DJ Dan Spins The Wheels
                </h3>
              </Link>
              <Link
                to="/products"
                className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1534329539061-64caeb388c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-32"></div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Top Travels Destinations For 2020
                </h3>
              </Link>
            </div>
            <div className="w-1/2 px-1">
              <Link
                to="/products"
                className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1526661934280-676cef25bc9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-32"></div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  M&S Launches New Makeup Range!
                </h3>
              </Link>
              <Link
                to="/products"
                className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-24"></div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  APT Set To Be A&nbsp;Ripper
                </h3>
              </Link>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

function SEOHelmetProductsPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Our Products | RN Dubai</title>
        <meta
          name="description"
          content="Explore the wide range of premium food and beverage products offered by ROWAD ALNAJAH. We ensure the highest quality, safety, and freshness in every product."
        />
        <meta
          name="keywords"
          content="RN Dubai, Products, ROWAD ALNAJAH, food and beverage products, premium quality, fresh food, Dubai food trading"
        />
        <meta
          name="author"
          content="ROWAD ALNAJAH For Food & Beverages Trading co. L.L.C"
        />
        <meta
          property="og:title"
          content="Our Products | RN-Dubai: ROWAD ALNAJAH For Food & Beverages Trading co. L.L.C"
        />
        <meta
          property="og:description"
          content="Browse the premium food and beverage products offered by ROWAD ALNAJAH, ensuring freshness, safety, and quality."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://rn-dubai2.vercel.app/products"
        />
      </Helmet>
    </HelmetProvider>
  );
}
