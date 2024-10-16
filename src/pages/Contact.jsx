import { Helmet, HelmetProvider } from "react-helmet-async";
import ContactInfo from "../components/contact/ContactInfo";
import Social from "../components/contact/Social";
import Map from "../components/contact/Map";
import ContactForm from "../components/contact/ContactForm";
export default function Contact() {
  return (
    <>
      <SEOHelmetContactPage />

      <section
        className="m-auto pt-32  w-screen relative pb-10 md:px-20 bg-gradient-to-r from-[#0b3e27] to-[#197149]" // Equivalent to padding-top and padding-bottom: 80px;
        style={{
          "--grid-row-no-full-width": "960px",
          "--grid-row-full-width": "1920px",
          "--grid-row-spacing-unit": "8px",
          "--grid-row-top-level-padding": "16px",
          "--grid-row-top-level-padding-lg": "8px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 p-8 mx-auto min-w-full bg-[#e6eceb] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
          <div>
            <h1 className="text-3xl font-extrabold">{"Let's Talk"}</h1>
            <p className="text-sm text-gray-500 mt-3">
              {
                "Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help."
              }
            </p>
            <ContactInfo />
            <Social />
            <Map />
          </div>

          <ContactForm/>
        </div>
      </section>
    </>
  );
}
function SEOHelmetContactPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Contact Us | RN Dubai</title>
        <meta
          name="description"
          content="Get in touch with RN Dubai for inquiries about our premium food and beverage trading services. We're here to assist you with any questions or requests."
        />
        <meta
          name="keywords"
          content="RN Dubai, Contact, food and beverage inquiries, ROWAD ALNAJAH contact, Dubai trading, customer support"
        />
        <meta
          name="author"
          content="ROWAD ALNAJAH For Food & Beverages Trading co. L.L.C"
        />
        <meta
          property="og:title"
          content="Contact Us | RN-Dubai: ROWAD ALNAJAH For Food & Beverages Trading co. L.L.C"
        />
        <meta
          property="og:description"
          content="Contact ROWAD ALNAJAH to learn more about our food and beverage products, partnerships, and trading services in Dubai."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://rn-dubai2.vercel.app/contact-us"
        />
      </Helmet>
    </HelmetProvider>
  );
}
