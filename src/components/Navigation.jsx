import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
    { name: "Careers", href: "/careers" },
    { name: "Portfolio", href: "/Portfolio" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
        isScrolled ? "backdrop-blur-md bg-gradient-to-r from-white/10 to-blue-900/10 shadow-lg" : "bg-transparent"
      }`}
      style={{ WebkitBackdropFilter: "blur(14px)", borderColor: "rgba(180,180,255,0.12)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        {/* Logo Branding */}
        <div className="flex items-center gap-3 cursor-pointer">
          <a href="/#home" className="flex items-center">
            <img className="rounded-full w-14 h-14 shadow border border-white/20" src="logo_Suh.jpg" alt="Logo" />
            <span className="ml-3 text-xl font-extrabold tracking-wide bg-gradient-to-r from-purple-400 via-blue-400 to-blue-800 bg-clip-text text-transparent uppercase">
              SUH TECH
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-base font-semibold text-white/90 hover:text-purple-300 transition-colors duration-200"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute left-1/2 bottom-1 -translate-x-1/2 w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transition-all duration-300"></span>
            </a>
          ))}

          {/* Contact Button (primary) */}
          <a
            href="/#contact"
            className="ml-4 px-5 py-2 rounded-full font-semibold shadow text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 ring-purple-400 transition-all border border-white/20 flex items-center gap-2"
            style={{ minWidth: 120 }}
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none border border-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="w-7 h-7 text-purple-300" />
          ) : (
            <Menu className="w-7 h-7 text-purple-300" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/70 animate-fadeIn backdrop-blur-sm flex flex-col items-center justify-start pt-24 px-6">
          <div className="w-full max-w-xs bg-gradient-to-b from-blue-900/80 to-purple-900/90 rounded-3xl shadow-2xl py-8 px-4 border border-white/10">
            <nav className="flex flex-col gap-4 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-2 text-lg text-white/80 font-semibold rounded-md hover:bg-purple-700/20 hover:text-white active:bg-purple-700/50 transition-colors text-center"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full mt-4 rounded-full py-3 text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 ring-purple-400 text-center border border-white/20"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
