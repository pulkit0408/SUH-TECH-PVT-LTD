import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ServicesSection = () => {
  const [currentService, setCurrentService] = useState(0);

  const services = [
    {
      icon: "📱",
      title: "Mobile App Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      icon: "🎨",
      title: "Web Design & Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      icon: "🧪",
      title: "Software Testing Service",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      icon: "💻",
      title: "Custom Software Development",
      description:
        "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
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
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="heading-lg text-3xl sm:text-4xl lg:text-5xl text-center mb-16 tracking-tight brand-gradient-text"
        >
          Services we offer
        </h2>

        <div className="relative">
          {/* Services Carousel */}
          <div className="flex items-center justify-center">
            <div className="grid lg:grid-cols-3 gap-8 w-full max-w-6xl">
              {/* Previous Service */}
              <div className="hidden lg:block animate-fadeInLeft">
                <div
                  className="rounded-2xl p-8 text-center opacity-50 transform scale-90 backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(30,30,50,0.6)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl shadow-md"
                    style={{
                      background:
                        "linear-gradient(135deg, #4a5568 0%, #2d3748 100%)",
                    }}
                  >
                    {
                      services[
                        (currentService - 1 + services.length) % services.length
                      ].icon
                    }
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {
                      services[
                        (currentService - 1 + services.length) % services.length
                      ].title
                    }
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)", opacity: 0.7 }}
                  >
                    {services[
                      (currentService - 1 + services.length) % services.length
                    ].description.substring(0, 90)}
                    ...
                  </p>
                </div>
              </div>

              {/* Current Service */}
              <div className="lg:col-span-1 animate-fadeIn">
                <div
                  className="rounded-2xl p-10 text-center transition-all shadow-xl hover:shadow-purple-500/30 hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%)",
                    border: "2px solid var(--accent-primary)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl shadow-lg"
                    style={{ background: "var(--accent-gradient)" }}
                  >
                    {services[currentService].icon}
                  </div>
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    {services[currentService].title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {services[currentService].description}
                  </p>
                </div>
              </div>

              {/* Next Service */}
              <div className="hidden lg:block animate-fadeInRight">
                <div
                  className="rounded-2xl p-8 text-center opacity-50 transform scale-90 backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(30,30,50,0.6)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl shadow-md"
                    style={{
                      background:
                        "linear-gradient(135deg, #4a5568 0%, #2d3748 100%)",
                    }}
                  >
                    {services[(currentService + 1) % services.length].icon}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {services[(currentService + 1) % services.length].title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)", opacity: 0.7 }}
                  >
                    {services[
                      (currentService + 1) % services.length
                    ].description.substring(0, 90)}
                    ...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevService}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 shadow-lg rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-purple-500/40"
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
            }}
          >
            <ChevronLeft
              className="w-6 h-6"
            />
          </button>
          <button
            onClick={nextService}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 shadow-lg rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-purple-500/40"
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
            }}
          >
            <ChevronRight
              className="w-6 h-6"
            />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-10 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentService(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentService
                    ? "scale-125 shadow-md"
                    : "opacity-50"
                }`}
                style={{
                  backgroundColor:
                    index === currentService
                      ? "var(--accent-primary)"
                      : "var(--text-secondary)",
                }}
              />
            ))}
          </div>

          {/* Service Counter */}
          <div className="flex justify-center mt-4">
            <span
              className="text-sm font-medium tracking-wide"
              style={{ color: "var(--text-secondary)" }}
            >
              0{currentService + 1} / 0{services.length}
            </span>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
