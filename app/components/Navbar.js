"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">NIT Shala</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="hover:text-gray-300 transition">Home</Link>
          <Link href="#" className="hover:text-gray-300 transition">Previous Papers</Link>
         
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link href="#" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link href="#" className="text-gray-300 hover:text-white transition">Previous Papers</Link>
          <Link href="#" className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
            Upload Paper
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
