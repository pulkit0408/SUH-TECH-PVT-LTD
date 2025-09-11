import React from "react";

const LeaderCard = ({ name, role, image, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Profile Image */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[var(--accent-primary)] mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4 leading-relaxed">
        "{description}"
      </p>

      {/* Name */}
      <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)]">
        {name}
      </h3>

      {/* Role */}
      <span className="text-sm sm:text-base text-[var(--accent-primary)]">
        {role}
      </span>
    </div>
  );
};

export default LeaderCard;
