import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-gray-900/95 backdrop-blur-md shadow-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">W</span>
            </div>
            <span className="text-xl font-semibold text-white">We developers</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About us</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Hire</a>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-2 rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all transform hover:scale-105 border border-gray-600">
              Contact us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg border-t border-gray-800">
            <div className="px-4 py-2 space-y-2">
              <a href="#" className="block py-2 text-gray-300 hover:text-white">About us</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white">Services</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white">Case Studies</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white">Blog</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white">How it Works</a>
              <a href="#" className="block py-2 text-gray-300 hover:text-white">Hire</a>
              <button className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-2 rounded-lg mt-2 border border-gray-600">
                Contact us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;