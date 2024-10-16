const navItems = [
  { id: 1, text: "Home", href: "/" },
  { id: 2, text: "Products", href: "/products" },
  { id: 3, text: "About Us", href: "/about-us" },
  { id: 4, text: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 p-10 font-[sans-serif] tracking-wide pb-0">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {navItems.map((el) => (
            <div className="px-5 py-2" key={el.id}>
              <a
                href={el.href}
                className="relative text-base leading-6 text-gray-500 hover:text-white  after:bg-white after:absolute after:h-1 after:w-0 after:-bottom-2 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              >
                {el.text}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rn-dubai"
            className="text-[#105033] hover:text-[#197049] bg-white p-1.5"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              className="w-7 h-7"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.452 20.452h-3.555V15.19c0-1.257-.024-2.878-1.755-2.878-1.755 0-2.022 1.37-2.022 2.781v5.359h-3.555V9h3.414v1.563h.048c.476-.9 1.636-1.846 3.366-1.846 3.6 0 4.267 2.369 4.267 5.452v6.283zM4.852 7.433a2.07 2.07 0 110-4.141 2.07 2.07 0 010 4.141zm-1.778 13.02h3.556V9h-3.556v11.453z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:info@rn-dubai.com"
            className="text-[#105033] hover:text-[#197049] bg-white p-1.5"
          >
            <span className="sr-only">Email</span>
            <svg
              className="w-7 h-7"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 13.065l8.53-5.957H3.47L12 13.065zm0 1.405l-9-6.3v10.255h18V8.17l-9 6.3z" />
            </svg>
          </a>

          {/* Phone */}
          <a
            href="tel:+971501029662"
            className="text-[#105033] hover:text-[#197049] bg-white p-1.5 m-auto"
          >
            <span className="sr-only">Phone</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2025 RN-Dubai, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
