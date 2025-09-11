import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-purple-900/80 backdrop-blur-md shadow-sm border-b border-purple-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">W</span>
            </div>
            <span className="text-xl font-semibold text-white">We developers</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-purple-200 hover:text-white transition-colors font-medium">About us</a>
            <a href="#" className="text-purple-200 hover:text-white transition-colors font-medium">Services</a>
            <a href="#" className="text-purple-200 hover:text-white transition-colors font-medium">Case Studies</a>
            <a href="#" className="text-purple-200 hover:text-white transition-colors font-medium">Blog</a>
            <a href="#" className="text-purple-200 hover:text-white transition-colors font-medium">How it Works</a>
            <a href="#" className="text-purple-200 hover:text-white transition-colors font-medium">Hire</a>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold shadow-lg">
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-purple-900/95 backdrop-blur-md shadow-lg border-t border-purple-700/30">
            <div className="px-4 py-2 space-y-2">
              <a href="#" className="block py-2 text-purple-200 hover:text-white font-medium">About us</a>
              <a href="#" className="block py-2 text-purple-200 hover:text-white font-medium">Services</a>
              <a href="#" className="block py-2 text-purple-200 hover:text-white font-medium">Case Studies</a>
              <a href="#" className="block py-2 text-purple-200 hover:text-white font-medium">Blog</a>
              <a href="#" className="block py-2 text-purple-200 hover:text-white font-medium">How it Works</a>
              <a href="#" className="block py-2 text-purple-200 hover:text-white font-medium">Hire</a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg mt-2 font-semibold">
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