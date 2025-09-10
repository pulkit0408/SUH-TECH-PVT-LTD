import { ChevronRight, Play } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mb-6"></div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Leading companies trust us
              <br />
              to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                develop software
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We{" "}
              <span className="text-purple-600 font-semibold">
                add development capacity
              </span>{" "}
              to tech teams. Our value isn't limited to building teams but is
              equally distributed across the project lifecycle. We are a custom
              software development company that guarantees the successful
              delivery of your project.
            </p>

            <button className="group inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
              See more Informations
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Video/Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white to-purple-50 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="teamWork.mp4"
                alt="Team working together"
                className="w-full h-80 object-cover"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-purple-700 transition-colors transform hover:scale-110">
                  <Play
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                  />
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
