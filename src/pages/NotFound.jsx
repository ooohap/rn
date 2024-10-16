import { Helmet, HelmetProvider } from "react-helmet-async";
import ErrorComponent from "../components/ErrorComponent";
export default function NotFound() {
  const error = { status: "404" };
  return (
    <>
      <SEOHelmetNotFoundPage />
      <ErrorComponent error={error} />
    </>
  );
}
function SEOHelmetNotFoundPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Page Not Found | RN Dubai</title>
        <meta
          name="description"
          content="Welcome to RN Dubai's this page not found."
        />
        <meta
          name="keywords"
          content="RN Dubai, Food and Beverage, Home, food and beverage trading, premium products, ROWAD ALNAJAH, food distribution, global flavors, safety and freshness, beverages, Dubai"
        />
        <meta
          name="author"
          content="ROWAD ALNAJAH For Food & Beverages Trading co. L.L.C"
        />
        <meta
          property="og:title"
          content="Not found | RN-Dubai: ROWAD ALNAJAH For Food & Beverages Trading co. L.L.C"
        />
        <meta
          property="og:description"
          content="Learn more about RN Dubai on our homepage. ROWAD ALNAJAH is committed to bringing the best of global food and beverages to Dubai with a focus on quality, safety, and freshness."
        />
        <meta property="og:type" content="website" />
      </Helmet>
    </HelmetProvider>
  );
}
