import { Link } from "react-router-dom";
export default function Section2() {
  return (
    <section className="my-8">
      <div className="h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
        <div className="mb-3">
          <h2 className="text-3xl font-bold">Our Products</h2>
        </div>

        <div className="mb-5">
          <Link
            to="/products#sea-products"
            className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
            style={{
              background: "url(/assets/home/products/3.webp) center",
              backgroundSize: "cover",
            }}
          >
            <div className="h-48"></div>
            <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
              Fish
            </h2>
            <div className="flex w-full items-center text-sm text-gray-300 font-medium">
              <div>
                <i className="mdi mdi-thumb-up"></i> Know More &rarr;
              </div>
            </div>
          </Link>
        </div>
        <div className="mb-5">
          <Link
            to="/products#poultry-products"
            className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
            style={{
              background: "url(/assets/home/products/2.webp) center",
              backgroundSize: "cover",
            }}
          >
            <div className="h-48"></div>
            <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
              Poultry
            </h2>
            <div className="flex w-full items-center text-sm text-gray-300 font-medium">
              <div>
                <i className="mdi mdi-thumb-up"></i> Know More &rarr;
              </div>
            </div>
          </Link>
        </div>
        <div className="mb-5">
          <Link
            to="/products#meat-products"
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
            <div className="flex w-full items-center text-sm text-gray-300 font-medium">
              <div>
                <i className="mdi mdi-thumb-up"></i> Know More &rarr;
              </div>
            </div>
          </Link>
        </div>

        {/* <div className="mb-3">
          <h1 className="text-3xl font-bold">Yesterday</h1>
          <p className="text-sm text-gray-500 uppercase font-bold">
            WEDNESDAY 5 AUGUST
          </p>
        </div>
        <div className="flex -mx-1 mb-5">
          <div className="w-1/2 px-1">
            <Link
              to="/products"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-24"></div>
              <h3 className="text-lg font-bold text-white leading-tight">
                DJ Dan Spins The Wheels
              </h3>
            </Link>
            <Link
              to="/products"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1534329539061-64caeb388c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-32"></div>
              <h3 className="text-lg font-bold text-white leading-tight">
                Top Travels Destinations For 2020
              </h3>
            </Link>
          </div>
          <div className="w-1/2 px-1">
            <Link
              to="/products"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1526661934280-676cef25bc9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-32"></div>
              <h3 className="text-lg font-bold text-white leading-tight">
                M&S Launches New Makeup Range!
              </h3>
            </Link>
            <Link
              to="/products"
              className="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center",
                backgroundSize: "cover",
              }}
            >
              <div className="h-24"></div>
              <h3 className="text-lg font-bold text-white leading-tight">
                APT Set To Be A&nbsp;Ripper
              </h3>
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
}
