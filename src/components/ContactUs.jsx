import React from "react";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h4 className="text-lg font-semibold text-purple-400 mb-2 tracking-wide uppercase">
            Contact Us
          </h4>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Let’s Connect Together
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let’s talk and build something amazing.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration */}
          <div className="flex justify-center">
            <img
              src="contactUs.png"
              alt="Contact illustration"
              className="w-[480px] h-[420px] max-w-md object-contain drop-shadow-xl animate-fadeInLeft"
            />
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-2xl shadow-2xl backdrop-blur-md animate-fadeInRight">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-purple-500/40 transform hover:-translate-y-1 transition-all duration-300"
                style={{ background: "var(--accent-gradient)" }}
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            {
              Icon: Mail,
              title: "Email Us",
              text: "info@suhtech.top",
              link: "mailto:info@suhtech.top",
            },
            {
              Icon: Phone,
              title: "Call Us",
              text: "+91 9211056355",
              link: "tel:+919211056355",
            },
            {
              Icon: Linkedin,
              title: "LinkedIn",
              text: "Connect with us",
              link: "https://www.linkedin.com/company/suh-tech",
            },
            {
              Icon: MapPin,
              title: "Visit Us",
              text: "Habitech Crystal Mall, Knowledge Park III, 4th Floor, D-8, Greater Noida",
              link: "https://www.google.com/maps/place/Habitech+Crystal+Mall,+Knowledge+Park+III,+Greater+Noida",
            },
          ].map(({ Icon, title, text, link }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md bg-gradient-to-br from-indigo-900/40 to-purple-900/40 hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300 flex flex-col"
            >
              <Icon className="w-8 h-8 text-purple-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
              <p className="text-gray-300 text-sm">{text}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulseSlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.35;
          }
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.9s ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.9s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulseSlow 7s infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactUs;
