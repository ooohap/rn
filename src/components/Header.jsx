import React from "react"; // Import React
import Navbar from "./headers/Navbar";

const MemoizedNavbar = React.memo(Navbar); // Wrap Navbar with React.memo

export default function Header() {
  return (
    <header id="home" className="relative w-full mb-32">
      <div className="relative text-center text-gray-400">
        <MemoizedNavbar /> {/* Use MemoizedNavbar */}
      </div>
    </header>
  );
}
