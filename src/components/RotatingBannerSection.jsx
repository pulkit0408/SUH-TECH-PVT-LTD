import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const RotatingBannerSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      title: "Leading companies trust us to develop software",
      subtitle: "Delivering innovative solutions for Fortune 500 companies",
      stats: "500+ Projects Delivered",
      titleGradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Trusted by global enterprises worldwide",
      subtitle: "Building scalable solutions that drive business growth",
      stats: "98% Client Satisfaction",
      titleGradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Innovation meets reliability in every project",
      subtitle: "Transforming ideas into powerful digital experiences",
      stats: "24/7 Support Available",
      titleGradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Your success is our priority",
      subtitle: "Partner with us for cutting-edge technology solutions",
      stats: "10+ Years Experience",
      titleGradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #ec4899 100%)",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
  ];

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(nextBanner, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden min-h-[600px] bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          key={`image-${currentBanner}`}
          src={banners[currentBanner].image}
          alt="Background"
          className="w-full h-full object-cover opacity-20 transition-opacity duration-1000 ease-in-out"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Banner Content */}
          <div className="banner-content">
            <h1
              key={`title-${currentBanner}`}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slideInUp"
              style={{
                background: banners[currentBanner].titleGradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'slideInUp 0.8s ease-out forwards, gradientShift 3s ease-in-out infinite'
              }}
            >
              {banners[currentBanner].title}
            </h1>

            <p
              key={`subtitle-${currentBanner}`}
              className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slideInUp animation-delay-200"
            >
              {banners[currentBanner].subtitle}
            </p>

            <div
              key={`stats-${currentBanner}`}
              className="inline-block backdrop-blur-md px-8 py-4 rounded-full font-semibold text-lg animate-slideInUp animation-delay-400 border border-white/20"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                color: 'white'
              }}
            >
              {banners[currentBanner].stats}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <button
              onClick={prevBanner}
              className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Banner Indicators */}
            <div className="flex space-x-3">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentBanner
                      ? "w-8 h-3 bg-white"
                      : "w-3 h-3 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextBanner}
              className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="w-full bg-white/10 rounded-full h-1 border border-white/10">
              <div
                className="bg-gradient-to-r from-white to-white/80 h-1 rounded-full transition-all duration-4000 ease-linear"
                style={{
                  width: `${((currentBanner + 1) / banners.length) * 100}%`
                }}
              />
            </div>
            <p className="text-white/50 text-sm mt-2">
              {currentBanner + 1} of {banners.length}
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .banner-content h1,
        .banner-content p,
        .banner-content div {
          transition: all 0.6s ease-in-out;
        }

        .transition-all.duration-4000 {
          transition-duration: 4s;
        }
      `}</style>
    </section>
  );
};

export default RotatingBannerSection;
