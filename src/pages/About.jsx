import { memo } from "react"; // Import React and memo
import Section1 from "../components/about/Section1";
import Section2 from "../components/about/Section2";
import Section3 from "../components/about/Section3";
import Section4 from "../components/about/Section4";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MemoizedSection2 = memo(Section2); // Wrap Section2 with React.memo

export default function About() {
  return (
    <>
      <SEOHelmetAboutPage />
      <Section1 />
      <MemoizedSection2 /> {/* Use the memoized version of Section2 */}
      <Section3 />
      <Section4 />
    </>
  );
}

function SEOHelmetAboutPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About Us | RN Dubai</title>
        <meta
          name="description"
          content="Learn more about ROWAD ALNAJAH and our mission to bring the best global food and beverage products to Dubai. Our focus is on safety, quality, and taste."
        />
        <meta
          name="keywords"
          content="RN Dubai, About Us, ROWAD ALNAJAH, food and beverage trading, premium products, Dubai food distribution"
        />
        <meta
          name="author"
          content="ROWAD ALNAJAH For Food & Beverages Trading co. L.L.C"
        />
        <meta
          property="og:title"
          content="About Us | RN-Dubai: ROWAD ALNAJAH For Food & Beverages Trading co. L.L.C"
        />
        <meta
          property="og:description"
          content="Discover the story of ROWAD ALNAJAH and our dedication to providing top-quality food and beverage products in Dubai."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://rn-dubai2.vercel.app/about-us"
        />
      </Helmet>
    </HelmetProvider>
  );
}
