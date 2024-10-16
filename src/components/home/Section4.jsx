import { Link } from "react-router-dom";
export default function Section4() {
  return (
    <section className="bg-white">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-600 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Who We Are
          </h2>
          <p className="mb-4">
            ROWAD ALNAJAH, we specialize in the trading of top-quality food and
            beverage products. With a strong network of suppliers and partners,
            we aim to bring the best of global flavors to our customers. Our
            commitment to excellence ensures that every product we provide meets
            the highest standards of safety, freshness, and taste.
          </p>
          <Link
            to="/about-us"
            className="inline-flex items-center font-medium text-blue-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700 p-2"
          >
            Learn more &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="/assets/home/about-1.webp"
            alt="fisherman"
            loading="lazy"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="/assets/home/about-2.webp"
            alt="boat"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
