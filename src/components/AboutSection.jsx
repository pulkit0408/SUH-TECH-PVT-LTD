const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="row-span-2 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <img
              src="About1.png"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <img
              src="About2.png"
              alt="Typing on laptop"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <img
              src="About3.png"
              alt="Planning project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div>
          <h4 className="text-lg font-semibold text-purple-400 mb-2">
            About Us
          </h4>
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl brand-gradient-text mb-6">
            Designing the future of your business.
          </h2>
          <p className="subheading text-base sm:text-lg leading-relaxed text-gray-300 mb-8">
            At <span className="font-semibold text-white">SUH TECH PRIVATE LIMITED</span>, we specialize in delivering innovative technology
            solutions that drive business success. From product development and
            digital marketing to game design and startup consultancy, we combine
            expertise with passion to create impactful results.
            <br />
            <br />
            We value your time — and your vision. Partner with us to build
            solutions that empower your growth in the digital age.
          </p>
          <button className="btn btn-solid">
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
