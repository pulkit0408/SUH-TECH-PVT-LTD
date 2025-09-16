import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const slides = [
    "https://images.unsplash.com/photo-1527443224154-c4f2a9d4a80a?w=1920&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&fit=crop",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <footer className="relative border-t border-[var(--border-color)] overflow-hidden">
      {/* Crossfade Background */}
      <div className="absolute inset-0 -z-10">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-[1500ms] ${
              i === index ? "opacity-30 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img
              src={src}
              alt="Footer background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 parallax-overlay" />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="logo_Suh.jpg"
              alt="SUH TECH"
              className="w-10 h-10 rounded-full"
            />
            <h2 className="text-lg font-bold text-white">SUH TECH</h2>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-4 h-4 text-[var(--accent-primary)]" />
            <a
              href="mailto:info@suhtech.top"
              className="hover:text-[var(--accent-primary)]"
            >
              info@suhtech.top
            </a>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Delivering innovative, high-quality digital solutions with
            excellence, creativity, and timely delivery since 2024.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#services"
                className="hover:text-[var(--accent-primary)]"
              >
                Web Development
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-[var(--accent-primary)]"
              >
                Mobile Applications
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-[var(--accent-primary)]"
              >
                AI Solutions
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-[var(--accent-primary)]"
              >
                Cloud Services
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-white font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#contact" className="hover:text-[var(--accent-primary)]">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[var(--accent-primary)]">
                Our Story
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Address */}
        <div className="space-y-6">
          {/* Section Title */}
          <h3 className="text-xl font-semibold text-white tracking-wide mb-2">
            Social Profiles
          </h3>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 rounded-full border border-[var(--border-color)] 
                 text-gray-300 hover:text-white 
                 transition-all duration-300 ease-in-out transform
                 hover:scale-110 hover:-rotate-3
                 hover:border-[#1877F2] hover:shadow-lg hover:shadow-blue-500/40"
            >
              <Facebook className="w-5 h-5" />
            </a>

            <a
              href="https://www.instagram.com/suhtechpvtltd?igsh=M3cwM2Vkb2Y4eDI5"
              className="p-3 rounded-full border border-[var(--border-color)] 
                 text-gray-300 hover:text-white 
                 transition-all duration-300 ease-in-out transform
                 hover:scale-110 hover:-rotate-3
                 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/40"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="p-3 rounded-full border border-[var(--border-color)] 
                 text-gray-300 hover:text-white 
                 transition-all duration-300 ease-in-out transform
                 hover:scale-110 hover:-rotate-3
                 hover:border-[#0077B5] hover:shadow-lg hover:shadow-blue-600/40"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://x.com/suhtechpvt?t=ts0tMtGlnbzZT4MEBSohsQ&s=08"
              className="p-3 rounded-full border border-[var(--border-color)] 
                 text-gray-300 hover:text-white 
                 transition-all duration-300 ease-in-out transform
                 hover:scale-110 hover:-rotate-3
                 hover:border-[#1DA1F2] hover:shadow-lg hover:shadow-sky-500/40"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Address Block */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-md">
            <p className="text-sm text-gray-400 leading-relaxed">
              <span className="text-white font-semibold text-base">
                Address:
              </span>
              <br />
              Habitech Crystal Mall,
              <br />
              Knowledge Park III,
              <br />
              4th Floor, D-8, Greater Noida,
              <br />
              India
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative mb-5 flex justify-evenly border-t border-[var(--border-color)] text-center py-4 text-xs text-[var(--text-secondary)]">
        © 2025 SUH TECH PRIVATE LIMITED. All rights reserved.
        <div className="">
          <ul className="space-x-6">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms and condition</a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
