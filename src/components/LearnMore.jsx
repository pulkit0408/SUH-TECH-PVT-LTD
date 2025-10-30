import {
    ArrowRight,
    Award,
    Cloud,
    Code,
    Eye,
    Search,
    Smartphone,
    Target,
    TrendingUp,
    Users,
} from "lucide-react";
import React, { useContext } from "react";
import ContactUsModalContext from "./ContactUsModalContext";

const LearnMore = () => {
  const { openModal } = useContext(ContactUsModalContext);
  return (
    <div className="mb-10" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Hero Section */}
      <div
        className="relative py-16 sm:py-20 overflow-hidden"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <p className="text-purple-400 text-sm font-medium uppercase tracking-wide">
                Learn More About Us
              </p>
            </div>
            <h1 className="heading-lg text-3xl sm:text-4xl lg:text-5xl brand-gradient-text mb-6 leading-tight">
              Designing the Future of Your Business
            </h1>
            <p className="subheading text-xl text-gray-300 leading-relaxed">
              Discover how we're transforming businesses with cutting-edge
              technology solutions, expert development, and a commitment to
              digital excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl rounded-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Our Mission"
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Our Mission
                </h2>
              </div>

              <p className="subheading text-lg text-gray-300 leading-relaxed">
                At{" "}
                <span className="font-semibold text-white">
                  SUH TECH PRIVATE LIMITED
                </span>
                , we are dedicated to delivering innovative technology solutions
                that drive business success. From product development and
                digital marketing to game design and startup consultancy, we
                combine expertise with passion to create impactful results.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg mt-1 border border-purple-500/20">
                    <Code className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Innovation First
                    </h3>
                    <p className="text-gray-400">
                      Leveraging cutting-edge technologies to build solutions
                      that give you a competitive edge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg mt-1 border border-purple-500/20">
                    <Users className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Client Partnership
                    </h3>
                    <p className="text-gray-400">
                      We value your time and vision, partnering with you to
                      build solutions that empower growth.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg mt-1 border border-purple-500/20">
                    <Award className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Quality Standards
                    </h3>
                    <p className="text-gray-400">
                      Maintaining excellence in every project with meticulous
                      attention to detail and performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div
        className="py-16 sm:py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Our Vision
                </h2>
              </div>

              <p className="subheading text-lg text-gray-300 leading-relaxed">
                To be the leading technology partner for businesses seeking
                digital transformation. We envision a world where innovative
                technology solutions are accessible to every business, driving
                growth and success in the digital age.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg mt-1 border border-blue-500/20">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Digital Excellence
                    </h3>
                    <p className="text-gray-400">
                      Creating world-class digital solutions that set new
                      standards in the industry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg mt-1 border border-blue-500/20">
                    <Target className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Future-Ready Solutions
                    </h3>
                    <p className="text-gray-400">
                      Building scalable, adaptable solutions that grow with your
                      business needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg mt-1 border border-blue-500/20">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Long-term Partnership
                    </h3>
                    <p className="text-gray-400">
                      Building lasting relationships that extend beyond project
                      completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="Our Vision"
                className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h4 className="text-lg font-semibold text-purple-400 mb-2">
              Our Services
            </h4>
            <h2 className="heading-lg text-3xl sm:text-4xl brand-gradient-text mb-6">
              Our Expertise
            </h2>
            <p className="subheading text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your
              business growth in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white/5 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-purple-500/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Web Development
              </h3>
              <p className="text-gray-400">
                Custom websites and web applications built with cutting-edge
                technologies.
              </p>
            </div>

            <div className="group bg-white/5 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-purple-500/50">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Mobile Apps
              </h3>
              <p className="text-gray-400">
                Native iOS and Android applications with seamless user
                experience.
              </p>
            </div>

            <div className="group bg-white/5 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-purple-500/50">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                SEO & Marketing
              </h3>
              <p className="text-gray-400">
                Drive organic growth and maximize your online presence
                effectively.
              </p>
            </div>

            <div className="group bg-white/5 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-purple-500/50">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Cloud Solutions
              </h3>
              <p className="text-gray-400">
                Scalable infrastructure and DevOps solutions for modern
                businesses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div
        className="py-16 sm:py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h4 className="text-lg font-semibold text-purple-400 mb-2">
              Our Achievements
            </h4>
            <h2 className="heading-lg text-3xl sm:text-4xl brand-gradient-text mb-6">
              Our Impact in Numbers
            </h2>
            <p className="subheading text-lg text-gray-300 max-w-2xl mx-auto">
              These numbers represent our commitment to delivering exceptional
              technology solutions and creating meaningful impact for our
              clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="relative mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-white">500+</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Projects Delivered
              </h3>
              <p className="text-gray-400">
                Successfully completed projects across various domains
              </p>
            </div>

            <div className="text-center group bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="relative mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-white">150+</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Happy Clients
              </h3>
              <p className="text-gray-400">
                Businesses transformed with our solutions
              </p>
            </div>

            <div className="text-center group bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="relative mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Support Available
              </h3>
              <p className="text-gray-400">
                Round-the-clock assistance for your peace of mind
              </p>
            </div>

            <div className="text-center group bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="relative mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl font-bold text-white">98%</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Client Satisfaction
              </h3>
              <p className="text-gray-400">
                Consistently high satisfaction ratings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div
        className="py-16 sm:py-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8 relative z-10">
          <h2 className="heading-lg text-3xl sm:text-4xl brand-gradient-text mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="subheading text-xl text-gray-300 mb-8 leading-relaxed">
            Partner with us to build innovative solutions that empower your
            growth in the digital age. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              className="btn btn-quote inline-flex items-center justify-center group"
              onClick={openModal}
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border-2 border-purple-500 text-white font-medium px-8 py-4 hover:bg-purple-500/10 transition-all duration-200"
            >
              <span className="text-sm lg:text-base font-semibold">
                View Our Work
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
