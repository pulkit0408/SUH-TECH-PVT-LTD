import { ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

const TeamSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(console.error);
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleMuteUnmute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      className="py-20 relative overflow-hidden parallax-bg"
      style={{
        backgroundColor: "var(--bg-primary)",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1527443224154-c4f2a9d4a80a?w=1920&h=1080&fit=crop)",
      }}
    >
      <div className="absolute inset-0 parallax-overlay pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div
              className="w-16 h-1 mb-6"
              style={{ background: "var(--accent-gradient)" }}
            ></div>

            <h2
              className="font-inter text-3xl lg:text-5xl font-bold mb-6 leading-tight text-white"
            >
              <span className="text-white">Leading companies trust us</span>
              <br />
              <span className="brand-gradient-text">to develop software</span>
            </h2>

            <p
              className="font-poppins text-base lg:text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              We
              <span
                className="font-semibold"
                style={{ color: "var(--accent-primary)" }}
              >
                {" "}add development capacity{" "}
              </span>
              to tech teams. Our value isn't limited to building teams but is
              equally distributed across the project lifecycle. We are a custom
              software development company that guarantees the successful
              delivery of your project.
            </p>

            <button
              className="group inline-flex p-3 rounded-xl items-center font-semibold btn-quote transition-colors"
            >
              See more Informations
              <ChevronRight className="ml-2 w-5 h-5 brand-gradient-text transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Video/Image */}
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
              }}
            >
              {/* Video with fallback image */}
              <div className="relative w-full h-80">
                <video
                  ref={videoRef}
                  id="teamVideo"
                  src="teamWork.mp4"
                  className="w-full h-full object-cover"
                  playsInline
                  preload="metadata"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "flex";
                  }}
                ></video>

                {/* Fallback content when video doesn't exist */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)",
                    display: "none",
                  }}
                >
                  <div className="text-center">
                    <div
                      className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ background: "var(--accent-gradient)" }}
                    >
                      <Play
                        className="w-12 h-12 text-white ml-1"
                        fill="currentColor"
                      />
                    </div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Team Collaboration
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Watch how our teams work together
                    </p>
                  </div>
                </div>
              </div>

              {/* Play / Pause Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <button
                  className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 text-white pointer-events-auto"
                  style={{ background: "var(--accent-gradient)" }}
                  onClick={handlePlayPause}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8" fill="currentColor" />
                  ) : (
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  )}
                </button>
              </div>

              {/* Mute / Unmute Button (only when playing) */}
              {isPlaying && (
                <div className="absolute top-4 right-4">
                  <button
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl text-white"
                    style={{ background: "var(--accent-gradient)" }}
                    onClick={handleMuteUnmute}
                  >
                    {isMuted ? (
                      <VolumeX className="w-6 h-6" />
                    ) : (
                      <Volume2 className="w-6 h-6" />
                    )}
                  </button>
                </div>
              )}

              {/* Decorative Elements */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(251, 191, 36, 0.3) 0%, rgba(245, 158, 11, 0.3) 100%)",
                }}
              ></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-20 blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.3) 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
