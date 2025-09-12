const Card = ({ name, role, rating, testimonial }) => {
  // Extract initials from the name
  const getInitials = (fullName) =>
    fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <div className="flex flex-col items-center max-w-[360px] sm:max-w-[400px] w-full py-8 px-6 sm:px-8 rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-xl text-center group shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
      {/* Testimonial Text */}
      <p className="font-poppins text-gray-300 text-sm sm:text-base leading-relaxed sm:leading-[30px] font-normal italic">
        “{testimonial}”
      </p>

      {/* Stars */}
      <div className="flex justify-center mt-4 space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={`text-lg sm:text-xl transition-colors duration-200 ${
              i < rating ? "text-yellow-400 drop-shadow-glow" : "text-gray-600"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center mt-6">
        {/* Avatar with initials */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
          {getInitials(name)}
        </div>
        <h3 className="font-inter mt-3 text-white font-semibold text-base sm:text-lg tracking-wide">
          {name}
        </h3>
        <p className="font-poppins text-gray-400 text-xs sm:text-sm mt-1">
          {role}
        </p>
      </div>
    </div>
  );
};

export default Card;
