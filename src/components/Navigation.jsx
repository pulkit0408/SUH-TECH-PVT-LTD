import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">W</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">We developers</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About us</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Case Studies</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Blog</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">How it Works</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Hire</a>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105">
              Contact us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600">About us</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600">Services</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600">Case Studies</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600">Blog</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600">How it Works</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600">Hire</a>
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg mt-2">
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