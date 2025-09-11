const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 animate-fadeInLeft text-center lg:text-left">
            <div
              className="border-2 border-dashed rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-lg"
              style={{
                borderColor: "var(--accent-primary)",
                backgroundColor: "rgba(99, 102, 241, 0.08)",
              }}
            >
              <h1
                className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Your End-to-End{" "}
                <span className="text-transparent bg-clip-text">Digital</span>
                <br />
                <span className="text-transparent bg-clip-text">
                  Transformation
                </span>{" "}
                <span style={{ color: "var(--text-primary)" }}>Partner</span>
              </h1>

              <p
                className="text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                style={{ color: "var(--text-secondary)" }}
              >
                We deliver web development, marketing, SEO, and CI/CD automation
                — helping businesses innovate, grow, and stay ahead.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all transform hover:scale-110 hover:shadow-purple-500/40 hover:shadow-xl text-white"
                  style={{ background: "var(--accent-gradient)" }}
                >
                  Portfolio
                </button>
                <button
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition-all transform hover:scale-105 border-2 hover:shadow-lg"
                  style={{
                    borderColor: "var(--accent-primary)",
                    backgroundColor: "transparent",
                  }}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-2">
            {/* Top Row: Game + Websites */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              {/* Left Image - Game */}
              <div className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="w-72 h-56 xs:w-80 xs:h-64 sm:w-72 sm:h-64 lg:w-72 lg:h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
                  <img
                    src="ludo_game.jpg"
                    alt="Game Development"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Working on Game
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Leveling up, one game at a time
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Image - Websites */}
              <div className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="w-72 h-44 xs:w-80 xs:h-48 sm:w-72 sm:h-48 lg:w-72 lg:h-48 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
                  <img
                    src="image.png"
                    alt="Working on Websites"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-base sm:text-lg font-semibold">
                      Working On Websites
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300">
                      Crafting digital experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Apps */}
            <div className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105">
              <div className="w-72 h-56 xs:w-80 xs:h-64 sm:w-72 sm:h-64 lg:w-72 lg:h-64 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
                <img
                  src="apps.png"
                  alt="Working on Apps"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Working on Apps
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Mobile innovation at its best
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div
        className="absolute top-1/2 left-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full opacity-25 blur-3xl transform -translate-y-1/2 animate-pulse-slow"
        style={{
          background:
            "linear-gradient(135deg, rgba(139, 92, 246, 0.35) 0%, rgba(236, 72, 153, 0.35) 100%)",
        }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-44 sm:h-44 lg:w-56 lg:h-56 rounded-full opacity-25 blur-3xl animate-pulse-slow"
        style={{
          background:
            "linear-gradient(135deg, rgba(59, 130, 246, 0.35) 0%, rgba(34, 211, 238, 0.35) 100%)",
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
