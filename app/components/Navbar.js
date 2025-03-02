"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide text-yellow-400">PaperNest</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-9">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link href="/notes" className="hover:text-yellow-400 transition">Notes</Link>
          <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 mt-2 rounded-lg">
          <Link href="/" className="block py-2 text-gray-300 hover:text-yellow-400 transition">Home</Link>
          <Link href="/notes" className="block py-2 text-gray-300 hover:text-yellow-400 transition">Notes</Link>
          <Link href="/about" className="block py-2 text-gray-300 hover:text-yellow-400 transition">About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
