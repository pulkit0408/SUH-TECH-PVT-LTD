import { ChevronRight, Play } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="w-16 h-1 bg-gradient-to-r from-gray-500 to-gray-300 mb-6"></div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Leading companies trust us
              <br />
              to{" "}
              <span className="text-gray-100 font-extrabold">
                develop software
              </span>
            </h2>

            <p className="text-gray-200 text-xl leading-relaxed mb-8 font-light">
              We{" "}
              <span className="text-white font-bold">
                add development capacity
              </span>{" "}
              to tech teams. Our value isn't limited to building teams but is
              equally distributed across the project lifecycle. We are a custom
              software development company that guarantees the successful
              delivery of your project.
            </p>

            <button className="group inline-flex items-center text-gray-100 font-bold hover:text-white transition-colors text-lg">
              See more Informations
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Video/Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <img
                src="teamWork.mp4"
                alt="Team working together"
                className="w-full h-80 object-cover"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-gray-600 transition-colors transform hover:scale-110">
                  <Play
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                  />
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full opacity-10 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full opacity-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
