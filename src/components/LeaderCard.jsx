import React, { useState } from "react";

const LeaderCard = ({ name, role, image, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Create short preview text (first 100 characters)
  const shortDescription = description.length > 100
    ? description.substring(0, 100) + "..."
    : description;

  return (
    <div className="group h-full w-full max-w-sm mx-auto">
      <div
        className="relative h-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl border border-[rgba(255,255,255,0.1)] overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl hover:border-[rgba(99,102,241,0.3)] hover:scale-102 cursor-pointer"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 via-transparent to-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Content Container with Consistent Padding */}
        <div className="h-full flex flex-col p-6">

          {/* Profile Section */}
          <div className="text-center mb-6">
            {/* Profile Image */}
            <div className="relative inline-block mb-4">
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#1a1a2e]">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                {/* Online Status */}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#1a1a2e]">
                  <div className="w-full h-full bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            </div>

            {/* Name & Role */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-1 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#8b5cf6]">
                {name}
              </h3>
              <p className="text-[#6366f1] text-sm font-medium">
                {role}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent mb-6 transition-all duration-300 group-hover:via-[rgba(99,102,241,0.3)]"></div>

          {/* Description Section - Always Same Layout */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Description Text - No Height Change */}
            <div className="mb-6 min-h-20">
              <p className="text-[#a0a0a0] text-sm leading-relaxed text-center transition-all duration-300">
                {isExpanded ? description : shortDescription}
              </p>
            </div>

            {/* Company Badge */}
            <div className="text-center">
              <div className="transition-all duration-300 group-hover:scale-105">
                <p className="text-[#6366f1] text-xs font-medium bg-[rgba(99,102,241,0.1)] px-4 py-2 rounded-full border border-[rgba(99,102,241,0.2)] inline-block">
                  SUH TECH Team Member
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#6366f1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-[#8b5cf6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <style jsx>{`
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        .min-h-20 {
          min-height: 5rem;
        }
      `}</style>
    </div>
  );
};

export default LeaderCard;
