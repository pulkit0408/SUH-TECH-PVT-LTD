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
          <div className="relative z-10">
            <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 bg-white/50 backdrop-blur-sm">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Great <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Product</span> is
                <br />
                <span className="text-gray-900">built by great</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">teams</span>
              </h1>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We help build and manage a team of world-class developers 
                to bring your vision to life
              </p>
              
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg">
                Let's get started!
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
              {/* Team Illustration */}
              <img src="suh_logo.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl transform -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
