import { section3_paragraphs } from "../../data/about.js";
export default function Section3() {
  return (
    <section className="bg-white py-10 px-5 md:p-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col py-2">
        <h4 className="text-6xl font-medium text-center text-black mb-8">
          Our Numbers
          <div className="font-manrope font-bold text-5xl text-gradient mb-6 text-center mt-10">
            1K+
          </div>
          <p className="text-lg text-gray-500 leading-7 text-center">
            We have distributed over 1 thousand products to satisfied customers
            across various regions.
          </p>
        </h4>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 xl:gap-14 lg:flex-row lg:justify-between">
          {section3_paragraphs?.map((el, i) => (
            <div className="w-full lg:w-1/3" key={`${el}-${i}`}>
              <div className="font-manrope font-bold text-5xl text-gradient mb-6 text-center">
                {el?.title}
              </div>
              <p className="text-lg text-gray-500 leading-7 text-center">
                {el?.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
