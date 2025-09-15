import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const LeaderCard = ({ name, role, image, description }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Create short preview text (first 80 characters for better mobile display)
  const shortDescription =
    description.length > 80
      ? description.substring(0, 80) + "..."
      : description;

  return (
    <div className="group h-full w-full">
      <div
        className="relative h-full bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#16213e] rounded-3xl border border-[rgba(255,255,255,0.08)] overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-[#6366f1]/20 hover:border-[rgba(99,102,241,0.4)] hover:scale-105 cursor-pointer backdrop-blur-sm"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-[#8b5cf6]/5 to-[#ec4899]/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        {/* Moving gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6366f1]/5 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>

        {/* Content Container */}
        <div className="h-full flex flex-col p-4 sm:p-5 lg:p-6 relative z-10">
          {/* Profile Section */}
          <div className="text-center mb-4 sm:mb-6">
            {/* Profile Image */}
            <div className="relative inline-block mb-3 sm:mb-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] p-0.5 group-hover:animate-spin-slow">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#0a0a1a] to-[#1a1a2e]">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          name
                        )}&background=6366f1&color=ffffff&size=96`;
                      }}
                    />
                  </div>
                </div>
                {/* Pulsing Status */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5">
                  <div className="w-full h-full bg-emerald-500 rounded-full border-2 border-[#0a0a1a] relative">
                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Name & Role */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:via-[#8b5cf6] group-hover:to-[#ec4899] leading-tight">
                {name}
              </h3>
              <p className="text-[#6366f1] text-xs sm:text-sm lg:text-base font-medium bg-[rgba(99,102,241,0.1)] px-2 sm:px-3 py-1 rounded-full inline-block border border-[rgba(99,102,241,0.2)] group-hover:bg-[rgba(99,102,241,0.2)] group-hover:border-[rgba(99,102,241,0.4)] transition-all duration-300">
                {role}
              </p>
            </div>
          </div>

          {/* Animated Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent mb-4 sm:mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6366f1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-full group-hover:translate-x-full"></div>
          </div>

          {/* Description Section */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Description Text */}
            <div className="mb-4 sm:mb-6 min-h-16 sm:min-h-20">
              <p className="text-[#a0a0a0] text-xs sm:text-sm lg:text-base leading-relaxed text-center transition-all duration-300 group-hover:text-[#b8b8b8]">
                {isExpanded ? description : shortDescription}
              </p>
            </div>

            {/* Company Badge */}
            <div className="text-center">
              <div className="transition-all duration-300 group-hover:scale-105">
                <p className="text-[#6366f1] text-xs font-medium bg-[rgba(99,102,241,0.1)] px-3 sm:px-4 py-2 rounded-full border border-[rgba(99,102,241,0.2)] inline-block group-hover:bg-[rgba(99,102,241,0.2)] group-hover:border-[rgba(99,102,241,0.4)] group-hover:text-white transition-all duration-300">
                  SUH TECH Team Member
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Corner Decorations */}
        <div className="absolute top-0 right-0 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-bl from-[#6366f1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-gradient-to-tr from-[#8b5cf6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#6366f1] rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#8b5cf6] rounded-full animate-ping animation-delay-300"></div>
          <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-[#ec4899] rounded-full animate-ping animation-delay-700"></div>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
