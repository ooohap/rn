import { meatProducts } from "../../data/products";
export default function MeatProducts() {
  return (
    <>
      <div className="mb-5" id="meat-products">
        <div
          className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
          style={{
            background: "url(/assets/home/products/1.webp) center",
            backgroundSize: "cover",
          }}
        >
          <div className="h-48"></div>
          <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
            Meat
          </h2>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {meatProducts?.map((el) => (
          <div
            className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
            key={el?.id}
          >
            <img
              src={el?.image}
              alt={el?.name}
              className="h-56 w-full object-cover"
              loading="lazy"
            />

            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase">{el.name}</h3>
              <span className="text-gray-500 mt-2">{el?.short} </span>
              <span className="text-gray-500 mt-2">{el?.rating} / 5</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
