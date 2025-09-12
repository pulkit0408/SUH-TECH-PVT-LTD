import Card from "./TestimonalsCard";

const Testimonials = () => {
  return (
    <section
      className="relative py-20"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Text */}
        <div className="text-center mb-12">
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-5xl brand-gradient-text">
            What Our Clients Say About Us
          </h2>
          <p className="subheading text-gray-300 mt-3 max-w-2xl mx-auto">
            Hear from businesses and creators across India who trusted us for
            game development and web app solutions.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
          <Card
            testimonial="The game our team envisioned was brought to life beautifully by their developers. Smooth gameplay, stunning visuals, and timely delivery – couldn't have asked for more."
            image="avatar1.png"
            name="Rahul Sharma"
            role="Indie Game Developer"
            rating={5}
          />
          <Card
            testimonial="We approached them for a custom web application for our e-learning platform. The UI/UX is modern, responsive, and exactly what we wanted. Their technical skills are top-notch."
            image="avatar2.png"
            name="Neha Kapoor"
            role="EdTech Founder"
            rating={5}
          />
          <Card
            testimonial="From game mechanics to backend integration, their team handled everything perfectly. Their expertise in both gaming and web apps is rare and valuable."
            image="avatar3.png"
            name="Amit Verma"
            role="Startup Owner"
            rating={5}
          />
          <Card
            testimonial="We needed a multiplayer game for our community, and they delivered a flawless experience. The project was on time and exceeded our expectations."
            image="avatar4.png"
            name="Sneha Iyer"
            role="Community Manager"
            rating={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
