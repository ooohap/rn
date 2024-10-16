import React, { useState, useMemo } from "react"; // Import React
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useLocation, Link } from "react-router-dom";

import Logo from "./Logo";

// Memoize navItems array
const navItems = [
  { id: 1, text: "Home", href: "/" },
  { id: 2, text: "Products", href: "/products" },
  { id: 3, text: "About Us", href: "/about-us" },
  { id: 4, text: "Contact Us", href: "/contact-us" },
];

// New NavItem component
const NavItem = React.memo(function NavItem({ href, isActive, text, onClick }) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={`block p-2 m-2 cursor-pointer duration-300 hover:bg-[#005048] hover:bg-opacity-20 ${
        isActive && "border-b-2 border-[#b5c7c4] text-[#e6eceb]"
      }`}
    >
      {text}
    </Link>
  );
});

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const location = useLocation(); // get current path

  // Memoize current path
  const currentPath = useMemo(() => location.pathname, [location.pathname]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`absolute flex justify-between items-center h-24 w-full mx-auto px-6 text-gray-200 top-0 left-0 right-0 z-50 transition-colors duration-300 bg-gradient-to-r from-[#0b3e27] to-[#197149]`}
    >
      <Logo cssStyles={"text-2xl ml-3 font-bold tracking-widest	border p-1"} />

      {/* Desktop Navbar */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            href={item.href}
            text={item.text}
            isActive={currentPath === item.href} // Use memoized currentPath
          />
        ))}
      </ul>

      {/* Mobile Navbar Toggle */}
      <div onClick={handleNav} className="block md:hidden z-50 cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navbar */}
      <ul
        className={
          nav
            ? `fixed md:hidden left-0 top-0 w-[60%] h-full  bg-gradient-to-r from-[#0b3e27] to-[#197149] ease-in-out duration-500 z-50 pt-2`
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <Logo
          cssStyles={"w-full text-2xl font-bold text-gray-100 m-4 ml-0 mr-auto"}
        />

        {navItems.map((item) => (
          <NavItem
            key={item.id}
            href={item.href}
            text={item.text}
            isActive={currentPath === item.href} // Use memoized currentPath
            onClick={() => setNav(false)}
          />
        ))}
      </ul>
    </div>
  );
}
