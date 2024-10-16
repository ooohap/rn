import { section4_paragraphs } from "../../data/about.js";
export default function Section4() {
  return (
    <section className="py-10 px-5 md:p-32 bg-gradient-to-r from-[#0b3e27] to-[#197149]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col py-2 text-white mb-10">
        <h4 className="text-6xl font-medium text-center mb-8">Our Values</h4>
        <h5 className="text-3xl font-medium text-center mb-8">
          What defines Us
        </h5>
      </div>
      <div className="grid gap-8 mt-10 grid-cols-1 md:grid-cols-2 text-white">
        {section4_paragraphs?.map((el, i) => (
          <div
            className="px-6 py-8 overflow-hidden rounded-md "
            key={`${el?.title} ${i}`}
          >
            <h2 className="text-3xl font-medium text-center">{el?.title}</h2>
            <p className="max-w-md mt-4 text-gray-200 text-center mx-auto">
              {el?.paragraph}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
