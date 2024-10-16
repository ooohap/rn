import { section1_paragraphs } from "../../data/about.js";
export default function Section1() {
  return (
    <section
      id="about"
      className="relative h-full overflow-hidden bg-cover bg-center pb-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/about/cover.webp')`, // Add a gradient overlay with opacity

        backgroundAttachment: "fixed", // Fix the background image
      }}
    >
      <div className="md:static xl:static 2xl:static inset-x-1/2	md:inset-0 flex justify-center items-center mt-24">
        <div className="bg-gradient-to-r from-[#0b3e27] to-[#197149] text-[#f0ebec] p-16 md:p-20 rounded-2xl shadow-lg max-w-md  md:max-w-2xl lg:max-w-4xl mt-10 mx-auto ">
          <h1 className="text-4xl font-bold text-center mb-4">
            The Strength of a Big Group
          </h1>
          <h5 className="text-lg text-center mb-4">Since 2020</h5>
          <div className="text-base  text-left  space-y-6 w-full flex flex-col break-words	">
            {section1_paragraphs.map((el, i) => (
              <p key={`paragraph-${i}`}>{el}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
