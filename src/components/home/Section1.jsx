import { Link } from "react-router-dom";

export default function Section1() {
  return (
    <section
      id="hero"
      className="relative h-full overflow-hidden bg-cover bg-center pb-20 before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/assets/home/hero.webp')`, // Add a gradient overlay with opacity

        backgroundAttachment: "fixed", // Fix the background image
      }}
    >
      {/* <img
        src="https://picsum.photos/seed/picsum/1900/850"
        className="absolute top-0 left-0 min-h-full ob"
        alt=""
      /> */}
      <div className="md:static xl:static 2xl:static inset-x-1/2	md:inset-0 flex justify-center items-center mt-24 p-10 md:p-20">
        <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center">
          <div className="col-span-6">
            <span className="uppercase text-white text-xs font-bold mb-2 block">
              WE ARE EXPERTS
            </span>
            <h1 className="text-white font-extrabold text-4xl md:text-5xl mb-8">
              Bringing Quality Food Beverages to Your Table
            </h1>

            <Link
              to="/products"
              className="inline-block mt-8 text-white uppercase py-2 md:py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
