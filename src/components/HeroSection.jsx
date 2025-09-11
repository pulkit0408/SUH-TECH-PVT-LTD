import { useEffect, useMemo, useState } from "react";

const HeroSection = () => {
  const slides = useMemo(
    () => [
      {
        key: "web",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop",
        heading: "Web Development",
        sub: "Custom websites and web applications built with cutting-edge technologies.",
        color: "from-blue-500 via-cyan-500 to-teal-500"
      },
      {
        key: "app",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&h=1080&fit=crop",
        heading: "Mobile App Development",
        sub: "Native iOS and Android applications with seamless user experience.",
        color: "from-purple-500 via-pink-500 to-rose-500"
      },
      {
        key: "seo",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
        heading: "SEO & Digital Marketing",
        sub: "Drive organic growth and maximize your online presence effectively.",
        color: "from-green-500 via-emerald-500 to-teal-500"
      },
      {
        key: "cloud",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop",
        heading: "Cloud Solutions",
        sub: "Scalable infrastructure and DevOps solutions for modern businesses.",
        color: "from-orange-500 via-amber-500 to-yellow-500"
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Word-by-word typing animation (no sound)
  useEffect(() => {
    const currentHeading = slides[index].heading;
    const words = currentHeading.split(' ');
    setDisplayText("");
    setIsTyping(true);

    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = "";

    const typeInterval = setInterval(() => {
      if (wordIndex < words.length) {
        const word = words[wordIndex];

        if (charIndex < word.length) {
          currentWord += word[charIndex];
          charIndex++;
        } else {
          // Word completed, add space and move to next word
          setDisplayText((prevText) => prevText + currentWord + (wordIndex < words.length - 1 ? " " : ""));
          currentWord = "";
          charIndex = 0;
          wordIndex++;
        }

        // Update display with current progress
        if (charIndex > 0) {
          const completedWords = words.slice(0, wordIndex).join(" ");
          setDisplayText(completedWords + (completedWords ? " " : "") + currentWord);
        }
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 120);

    return () => clearInterval(typeInterval);
  }, [index, slides]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  const current = slides[index];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.key}
            className={`absolute inset-0 transition-all duration-1000 ${
              i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.heading}
              className="w-full h-full object-cover"
            />
            {/* Professional dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>
          </div>
        ))}
      </div>

      {/* Professional grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,150,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,150,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Company Badge */}
              <div className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-full">
                <div className="flex space-x-1 mr-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
                </div>
                <span className="text-white font-medium">Premier IT Solutions</span>
              </div>

              {/* Main Heading with Typing Effect */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className={`hero-heading font-inter whitespace-nowrap overflow-hidden text-ellipsis leading-tight tracking-tight font-extrabold bg-gradient-to-r ${current.color} bg-clip-text text-transparent text-3xl sm:text-5xl lg:text-6xl xl:text-6xl`}>
                  {displayText}
                  {isTyping && (
                    <span className="inline-block w-1 bg-white animate-ping ml-2">|</span>
                  )}
                </h1>
              </div>

              {/* Subtitle */}
              <div className="transform transition-all duration-700 translate-y-0 opacity-100">
                <p className="hero-sub font-poppins text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl">
                  {current.sub}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <a href="#contact" className="group relative px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold btn-quote">
                  <span className="relative z-10 flex items-center">
                    Request a Free Quote
                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="btn-quote-glow"></span>
                </a>

                <a href="#portfolio" className="px-7 sm:px-8 py-3 sm:py-3.5 bg-transparent border-2 border-white/30 text-white font-semibold text-sm sm:text-base rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                  Our Work
                </a>
              </div>

              {/* Professional Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-white/10">
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}>
                    500+
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">Projects</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}>
                    150+
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">Clients</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}>
                    24/7
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">Support</div>
                </div>
              </div>
            </div>

            {/* Right Side - Service Preview */}
            <div className="relative">
              {/* Main Service Card */}
              <div className="relative">
                {/* Animated border */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${current.color} rounded-2xl blur-sm opacity-60 animate-pulse`}></div>

                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
                  {/* Service Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${current.color} flex items-center justify-center shadow-lg`}>
                        {current.key === 'web' && (
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                          </svg>
                        )}
                        {current.key === 'app' && (
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                          </svg>
                        )}
                        {current.key === 'seo' && (
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                          </svg>
                        )}
                        {current.key === 'cloud' && (
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="font-inter text-lg sm:text-2xl font-bold text-white">{current.heading}</h3>
                        <p className="font-poppins text-gray-400">Professional Service</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-medium">Active</span>
                    </div>
                  </div>

                  {/* Progress Indicators */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm mb-2">
                        <span className="text-gray-400">Performance</span>
                        <span className="text-white">98%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${current.color} rounded-full transition-all duration-1000 w-[98%]`}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm mb-2">
                        <span className="text-gray-400">Quality Score</span>
                        <span className="text-white">95%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${current.color} rounded-full transition-all duration-1000 delay-200 w-[95%]`}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs sm:text-sm mb-2">
                        <span className="text-gray-400">Client Satisfaction</span>
                        <span className="text-white">100%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${current.color} rounded-full transition-all duration-1000 delay-400 w-full`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Navigation Dots */}
              <div className="flex justify-center mt-6 sm:mt-8 space-x-4">
                {slides.map((slide, i) => (
                  <button
                    key={slide.key}
                    onClick={() => setIndex(i)}
                    className={`relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                      i === index
                        ? 'scale-125'
                        : 'scale-100 hover:scale-110'
                    }`}
                  >
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${slide.color} ${
                      i === index ? 'opacity-100' : 'opacity-40'
                    }`}></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
