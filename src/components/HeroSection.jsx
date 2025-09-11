
const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 bg-gray-900/80 backdrop-blur-sm">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Great <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">Product</span> is
                <br />
                <span className="text-white">built by great</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100">teams</span>
              </h1>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We help build and manage a team of world-class developers 
                to bring your vision to life
              </p>
              
              <button className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-gray-600 hover:to-gray-700 transition-all transform hover:scale-105 shadow-lg border border-gray-600">
                Let's get started!
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-800">
              {/* Team Illustration */}
              <img src="suh_logo.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full opacity-10 blur-3xl transform -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;