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
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Careers", href: "#careers" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-200 ${
        isScrolled
          ? "backdrop-blur-xl bg-[rgba(15,15,35,0.7)] shadow-md"
          : "bg-transparent"
      }`}
      style={{ borderColor: "var(--border-color)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="flex items-center justify-center shadow-md">
              <img className="rounded-full w-20" src="logo_Suh.jpg" alt="Logo" />
            </div>
            <span
              className="text-xl font-bold tracking-wide"
              style={{ color: "var(--text-primary)" }}
            >
              SUH TECH PVT PTD
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium transition-colors duration-300 hover:text-purple-400"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button
              className="text-white px-6 py-2 rounded-xl shadow-md transition-all transform hover:scale-105 hover:shadow-lg"
              style={{ background: "var(--accent-gradient)" }}
            >
              Contact us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: "var(--text-primary)" }}
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 shadow-xl border-t animate-slideDown"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border-color)",
            }}
          >
            <div className="px-4 py-3 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-base transition-colors hover:text-purple-400"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.name}
                </a>
              ))}
              <button
                className="w-full text-white px-6 py-2 rounded-xl shadow-md transition-all hover:scale-105"
                style={{ background: "var(--accent-gradient)" }}
              >
                Contact us
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
