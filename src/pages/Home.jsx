import { memo } from "react"; // Import React and memo
import { Helmet, HelmetProvider } from "react-helmet-async";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section4 from "../components/home/Section4";

// Wrap Section1 with React.memo
const MemoizedSection1 = memo(Section1);
// Memoize Section2
const MemoizedSection2 = memo(Section2);
// Memoize Section4
const MemoizedSection4 = memo(Section4);

export default function Home() {
  return (
    <>
      <SEOHelmetHomePage />
      <MemoizedSection1 /> {/* Use MemoizedSection1 */}
      <MemoizedSection2 /> {/* Use MemoizedSection2 */}
      {/* <Section3 /> */}
      <MemoizedSection4 /> {/* Use MemoizedSection4 */}
    </>
  );
}
function SEOHelmetHomePage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home | RN Dubai</title>
        <meta
          name="description"
          content="Welcome to RN Dubai's homepage - At ROWAD ALNAJAH, we specialize in the trading of top-quality food and beverage products. With a strong network of suppliers and partners, we aim to bring the best of global flavors to our customers. Our commitment to excellence ensures that every product we provide meets the highest standards of safety, freshness, and taste."
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
          content="Home | RN-Dubai: ROWAD ALNAJAH For Food & Beverages Trading co. L.L.C"
        />
        <meta
          property="og:description"
          content="Learn more about RN Dubai on our homepage. ROWAD ALNAJAH is committed to bringing the best of global food and beverages to Dubai with a focus on quality, safety, and freshness."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rn-dubai2.vercel.app" />
      </Helmet>
    </HelmetProvider>
  );
}
