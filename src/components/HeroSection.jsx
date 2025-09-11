
const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="border-2 border-dashed border-purple-400/30 rounded-xl p-8 bg-purple-900/20 backdrop-blur-sm">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Great <span className="text-white">Product</span> is
                <br />
                <span className="text-purple-100">built by great</span> <span className="text-white font-extrabold">teams</span>
              </h1>
              
              <p className="text-purple-200 text-xl mb-8 leading-relaxed font-light">
                We help build and manage a team of world-class developers 
                to bring your vision to life
              </p>
              
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl">
                Let's get started!
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-800/50 to-blue-800/50 rounded-2xl p-8 shadow-2xl border border-purple-600/30 backdrop-blur-sm">
              {/* Team Illustration */}
              <img src="suh_logo.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20 blur-3xl transform -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;