import { section2_paragraphs } from "../../data/about.js";
export default function Section2() {
  return (
    <section
      className="p-10 md:p-24 mx-auto bg-gradient-to-r from-[#0b3e27] to-[#197149]"
      style={{
        "--grid-row-no-full-width": "960px",
        "--grid-row-full-width": "1920px",
        "--grid-row-spacing-unit": "8px",
        "--grid-row-top-level-padding": "16px",
        "--grid-row-top-level-padding-lg": "8px",
      }}
    >
      <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[var(--grid-row-full-width)] mx-auto px-8 min-w-full">
        {/* First Column */}
        <div className="flex flex-col items-center p-5 my-auto mb-20 md:mb-auto">
          <h3 className="text-5xl font-medium text-center text-white mb-8">
            The Finest Food Beverage
          </h3>
          <a
            href="/products"
            className="bg-[#4be4cc] text-[#2c2c2c] py-2 px-4 rounded"
            target="_self"
            rel="noopener"
          >
            Know More
          </a>
        </div>

        {/* Second Column */}
        <div className="flex items-center flex-col my-auto mb-10 md:mb-auto">
          {section2_paragraphs.map((par, i) => (
            <p className="text-[#ffffff] text-center mb-3" key={`${par}-${i}`}>
              {par}
            </p>
          ))}
        </div>

        {/* Third Column (Image Container for 3rd and 4th Images) */}
        <div className="flex  gap-4 justify-center w-full col-span-2 ">
          {/* Third Element (Image 1) */}
          <div className="w-max">
            <img
              src="/assets/about/cut-1.jpg"
              className="w-56 h-auto md:mb-10"
              alt="Product Image 1"
            />
          </div>

          {/* Fourth Element (Image 2) */}
          <div className="w-max">
            <img
              src="/assets/about/cut-2.jpg"
              className="w-56 h-auto md:mt-10"
              alt="Product Image 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
