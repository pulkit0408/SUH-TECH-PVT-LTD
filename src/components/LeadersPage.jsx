import React, { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import LeaderCard from "./LeaderCard";

const LeadersPage = () => {
  const leaders = [
    {
      name: "M Jha",
      role: "Founder",
      image: "m2.jpg",
      description:
        "As the founder of SUH TECH PRIVATE LIMITED, I am incredibly proud of the talented team we've built and the innovative solutions we create. Our mission has always been to empower businesses by providing exceptional technology services with a focus on quality, creativity, and timely delivery.",
    },
    {
      name: "M. Mayank",
      role: "Co-Founder",
      image: "mayank.jpg",
      description:
        "As co-founder of SUH TECH PRIVATE LIMITED, I am passionate about delivering innovative, high-quality solutions. Our team is dedicated to providing digital excellence across all services. We prioritize our clients’ needs and ensure timely, tailored solutions that drive growth and success in today’s evolving digital world.",
    },
    {
      name: "Ankit Kumar",
      role: "CTO",
      image: "ankit_pic.jpg",
      description:
        "As the Chief Technology Officer at SUH TECH PRIVATE LIMITED, I am dedicated to driving innovation and building cutting-edge technological solutions that empower our clients. My focus is on aligning technology strategy with business goals, ensuring robust system architecture, scalability, and security.",
    },
    {
      name: "Pulkit Pandey",
      role: "Head of IT",
      image: "pulkit_pic.jpg",
      description:
        "As the Head of IT at SUH TECH PRIVATE LIMITED, I oversee the infrastructure, systems, and networks that power our operations. My role is to ensure seamless technology integration, optimized performance, and uncompromising security. I am committed to leveraging the latest advancements to keep our IT ecosystem agile, reliable, and scalable, enabling our teams to focus on delivering exceptional solutions to clients.",
    },
    {
      name: "Sahil",
      role: "Game Developer",
      image: "sahil.jpg",
      description:
        "As a Game Developer at SUH TECH PRIVATE LIMITED, I combine creativity with technical expertise to craft engaging, immersive, and visually stunning gaming experiences. I work across multiple platforms and technologies to bring ideas to life, from concept design to final deployment. My goal is to create games that not only entertain but also inspire and connect with players worldwide.",
    },
  ];

  const controls = useAnimation();
  const x = useMotionValue(0);

  // Function to start marquee animation
  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 25,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const handleHoverStart = () => {
    controls.stop(); // pause
  };

  const handleHoverEnd = () => {
    startAnimation(); // resume
  };

  return (
    <section
      id="leaders"
      className="py-20 px-6 bg-[var(--bg-primary)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
          Meet Our{" "}
          <span className="bg-clip-text text-transparent bg-[var(--accent-gradient)]">
            Team
          </span>
        </h2>
      </div>

      {/* Smooth auto-scrolling carousel */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 px-6"
          animate={controls}
          style={{ x }}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          {[...leaders, ...leaders].map((leader, index) => (
            <div
              key={index}
              className="w-[calc(100%/3-1rem)] flex-shrink-0 h-[400px]"
            >
              <LeaderCard {...leader} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LeadersPage;
