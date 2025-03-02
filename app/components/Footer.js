import { Linkedin, MessageCircle } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-4 py-4 mt-10">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-between items-center text-center md:text-left">
        {/* Left Section */}
        <div className="w-full md:w-auto mb-3 md:mb-0">
          <h2 className="text-lg font-semibold text-yellow-400">PaperNest</h2>
          <p className="text-xs mt-1">Your source for NIT Srinagar past papers.</p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex space-x-4 text-sm">
          <a href="/" className="hover:text-yellow-400 transition">Home</a>
          <a href="/" className="hover:text-yellow-400 transition">Previous Papers</a>
          <a href="/about" className="hover:text-yellow-400 transition">About</a>
        </div>

        {/* Right Section - Socials */}
        <div className="flex space-x-3 mt-3 md:mt-0 text-lg">
        {/* Social Media Icons */}
<div className="flex justify-center space-x-6 mt-4">
  <a href="https://www.linkedin.com/in/prakash-palsaniya" target="_blank" rel="noopener noreferrer">
    <Linkedin className="w-6 h-6 text-blue-400 hover:text-[#38BDF8] transition-all" />
  </a>
  <a href="https://wa.me/918290682001" target="_blank" rel="noopener noreferrer">
    <MessageCircle className="w-6 h-6 text-green-400 hover:text-[#38BDF8] transition-all" />
  </a>
</div>

        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-500 mt-2">
        © {new Date().getFullYear()} PaperNest. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
