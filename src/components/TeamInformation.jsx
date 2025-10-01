import React from "react";
import {
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  Shield,
  TrendingUp,
  Globe,
  Heart,
  Zap,
  Award,
  CheckCircle,
  Code,
  Rocket,
} from "lucide-react";

const TeamInformation = () => {
  return (
    <div className="mb-10" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Hero Section */}
      <div
        className="relative py-16 sm:py-20 overflow-hidden"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <p className="text-purple-400 text-sm font-medium uppercase tracking-wide">
                About Our Team
              </p>
            </div>
            <h1 className="heading-lg text-3xl sm:text-4xl lg:text-5xl brand-gradient-text mb-6 leading-tight">
              Meet SUH TECH PRIVATE LIMITED
            </h1>
            <p className="subheading text-xl text-gray-300 leading-relaxed">
              A passionate team of developers, designers, and strategists
              dedicated to transforming your vision into powerful digital
              solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl rounded-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Our Team"
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Who We Are
                </h2>
              </div>

              <p className="subheading text-lg text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">
                  SUH TECH PRIVATE LIMITED
                </span>{" "}
                is a forward-thinking technology company specializing in custom
                software development, product design, and digital
                transformation. We bring together a diverse team of experts who
                are passionate about creating solutions that make a real
                difference.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Founded with a vision to empower businesses through technology,
                we've grown into a trusted partner for companies seeking to
                innovate and scale. Our team combines technical excellence with
                creative thinking to deliver solutions that not only meet your
                requirements but exceed your expectations.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">Expert Team</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">
                    Proven Track Record
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div
        className="py-16 sm:py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h4 className="text-lg font-semibold text-purple-400 mb-2">
              Our Values
            </h4>
            <h2 className="heading-lg text-3xl sm:text-4xl brand-gradient-text mb-6">
              What Drives Us Forward
            </h2>
            <p className="subheading text-lg text-gray-300 max-w-2xl mx-auto">
              Our core values shape every decision we make and every solution we
              create for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Innovation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We constantly explore new technologies and approaches to deliver
                cutting-edge solutions that give you a competitive advantage.
              </p>
            </div>

            <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Integrity
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We believe in transparent communication, honest partnerships,
                and delivering on our promises every single time.
              </p>
            </div>

            <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Excellence
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Quality is non-negotiable. We maintain the highest standards in
                every project, ensuring exceptional results.
              </p>
            </div>

            <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Collaboration
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Your success is our success. We work closely with you as a
                partner, not just a service provider.
              </p>
            </div>

            <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Agility</h3>
              <p className="text-gray-400 leading-relaxed">
                We adapt quickly to changes and challenges, ensuring your
                project stays on track and within budget.
              </p>
            </div>

            <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Global Perspective
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We bring international best practices and global insights to
                every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Our Approach
                </h2>
              </div>

              <p className="subheading text-lg text-gray-300 leading-relaxed">
                We follow a structured yet flexible methodology that ensures
                project success while adapting to your unique needs and
                requirements.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg mt-1 border border-purple-500/20">
                    <span className="text-purple-400 font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Discovery & Planning
                    </h3>
                    <p className="text-gray-400">
                      We start by understanding your business goals, challenges,
                      and target audience to create a comprehensive project
                      roadmap.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg mt-1 border border-blue-500/20">
                    <span className="text-blue-400 font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Design & Development
                    </h3>
                    <p className="text-gray-400">
                      Our team creates intuitive designs and robust code,
                      ensuring your solution is both beautiful and functional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-500/10 rounded-lg mt-1 border border-green-500/20">
                    <span className="text-green-400 font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Testing & Quality Assurance
                    </h3>
                    <p className="text-gray-400">
                      Rigorous testing ensures your product is bug-free, secure,
                      and performs flawlessly across all platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-orange-500/10 rounded-lg mt-1 border border-orange-500/20">
                    <span className="text-orange-400 font-bold">04</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Launch & Support
                    </h3>
                    <p className="text-gray-400">
                      We handle deployment and provide ongoing support to ensure
                      your solution continues to deliver value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="Our Approach"
                className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div
        className="py-16 sm:py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h4 className="text-lg font-semibold text-purple-400 mb-2">
              Why Choose Us
            </h4>
            <h2 className="heading-lg text-3xl sm:text-4xl brand-gradient-text mb-6">
              The SUH TECH Advantage
            </h2>
            <p className="subheading text-lg text-gray-300 max-w-2xl mx-auto">
              We combine technical expertise with business understanding to
              deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <Code className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Technical Expertise
                </h3>
              </div>
              <p className="text-gray-400">
                Our developers are proficient in the latest technologies and
                frameworks, ensuring modern, scalable solutions.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <Rocket className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Fast Delivery
                </h3>
              </div>
              <p className="text-gray-400">
                We use agile methodologies to deliver working solutions quickly
                without compromising on quality.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                  <Award className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Proven Results
                </h3>
              </div>
              <p className="text-gray-400">
                With 500+ successful projects, we have a track record of
                delivering solutions that exceed expectations.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <Users className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Dedicated Team
                </h3>
              </div>
              <p className="text-gray-400">
                You get a dedicated team that understands your business and is
                committed to your success.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-pink-500/10 rounded-lg border border-pink-500/20">
                  <Shield className="w-5 h-5 text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Security First
                </h3>
              </div>
              <p className="text-gray-400">
                We implement industry-standard security practices to protect
                your data and users.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                  <TrendingUp className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Scalable Solutions
                </h3>
              </div>
              <p className="text-gray-400">
                We build solutions that grow with your business, ensuring
                long-term value and flexibility.
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
            Ready to Work With Us?
          </h2>
          <p className="subheading text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how we can help you achieve your business goals with
            our innovative technology solutions. Your success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn btn-quote inline-flex items-center justify-center group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border-2 border-purple-500 text-white font-medium px-8 py-4 hover:bg-purple-500/10 transition-all duration-200"
            >
              <span className="text-sm lg:text-base font-semibold">
                View Our Portfolio
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInformation;
