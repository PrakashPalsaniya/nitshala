const Footer = () => {
    return (
      <footer className="bg-black text-gray-300 px-4 py-4 mt-10">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-between items-center text-center md:text-left">
          {/* Left Section */}
          <div className="w-full md:w-auto mb-3 md:mb-0">
            <h2 className="text-lg font-semibold text-white">PaperNest</h2>
            <p className="text-xs mt-1">Your source for NIT Srinagar past papers.</p>
          </div>
  
          {/* Middle Section - Quick Links */}
          <div className="flex space-x-4 text-sm">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/" className="hover:text-white transition">Previous Papers</a>
            <a href="/about" className="hover:text-white transition">About</a>
          </div>
  
          {/* Right Section - Socials (Optional) */}
          <div className="flex space-x-3 mt-3 md:mt-0 text-lg">
            <a href="/" className="hover:text-white transition">📘</a>
            <a href="/" className="hover:text-white transition">🐦</a>
            <a href="/about" className="hover:text-white transition">📷</a>
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
  