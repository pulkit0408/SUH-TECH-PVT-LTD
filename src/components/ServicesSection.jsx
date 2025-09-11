import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesSection = () => {
  const [currentService, setCurrentService] = useState(0);

  const services = [
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },
    {
      icon: "🎨",
      title: "Web Design & Development",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },
    {
      icon: "🧪",
      title: "Software Testing Service",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },
    {
      icon: "💻",
      title: "Software Testing",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    }
  ];

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const interval = setInterval(nextService, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center text-white mb-16 tracking-tight">
          Services we offer
        </h2>

        <div className="relative">
          {/* Services Carousel */}
          <div className="flex items-center justify-center">
            <div className="grid lg:grid-cols-3 gap-8 w-full max-w-6xl">
              {/* Previous Service (Hidden on mobile) */}
              <div className="hidden lg:block">
                <div className="bg-gray-800 rounded-2xl p-8 text-center opacity-60 transform scale-90 border border-gray-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">
                    {services[(currentService - 1 + services.length) % services.length].icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-200 mb-4">
                    {services[(currentService - 1 + services.length) % services.length].title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {services[(currentService - 1 + services.length) % services.length].description.substring(0, 100)}...
                  </p>
                </div>
              </div>

              {/* Current Service */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-white/20 rounded-2xl p-8 text-center transform hover:scale-105 transition-all shadow-2xl">
                  <div className="w-20 h-20 bg-white rounded-full mx-auto mb-6 flex items-center justify-center text-3xl shadow-lg">
                    {services[currentService].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                    {services[currentService].title}
                  </h3>
                  <p className="text-gray-100 leading-relaxed text-lg font-light">
                    {services[currentService].description}
                  </p>
                </div>
              </div>

              {/* Next Service (Hidden on mobile) */}
              <div className="hidden lg:block">
                <div className="bg-gray-800 rounded-2xl p-8 text-center opacity-60 transform scale-90 border border-gray-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">
                    {services[(currentService + 1) % services.length].icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-200 mb-4">
                    {services[(currentService + 1) % services.length].title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {services[(currentService + 1) % services.length].description.substring(0, 100)}...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevService}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800 border border-gray-600 shadow-lg rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button 
            onClick={nextService}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800 border border-gray-600 shadow-lg rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentService(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentService 
                    ? 'bg-white' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Service Counter */}
          <div className="flex justify-center mt-4">
            <span className="text-sm text-gray-300 font-medium tracking-wider">
              0{currentService + 1} — 0{services.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;