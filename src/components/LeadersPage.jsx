import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
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
        "As co-founder of SUH TECH PRIVATE LIMITED, I am passionate about delivering innovative, high-quality solutions. Our team is dedicated to providing digital excellence across all services. We prioritize our clients' needs and ensure timely, tailored solutions that drive growth and success in today's evolving digital world.",
    },
    {
      name: "Ankit Kumar",
      role: "CTO",
      image: "ankit_pic.jpg",
      description:
        "As the Chief Technology Officer at SUH TECH PRIVATE LIMITED, I am dedicated to driving innovation and building cutting-edge technological solutions that empower our clients. My focus is on aligning technology strategy with business goals, ensuring robust system architecture, scalability, and security.",
    },
    {
      name: "Sahil",
      role: "Game Developer",
      image: "sahil.jpg",
      description:
        "As a Game Developer at SUH TECH PRIVATE LIMITED, I combine creativity with technical expertise to craft engaging, immersive, and visually stunning gaming experiences. I work across multiple platforms and technologies to bring ideas to life, from concept design to final deployment. My goal is to create games that not only entertain but also inspire and connect with players worldwide.",
    },
    {
      name: "Soumya Sindhu",
      role: "Product Manager",
      image: "somya.jpg",
      description:
        "As a Product Manager at SUH TECH PRIVATE LIMITED, I bridge the gap between business strategy, technology, and customer needs. I lead the product lifecycle from ideation to launch, ensuring that every feature and improvement delivers real value to users while aligning with company goals. By collaborating closely with cross-functional teams—engineering, design, and marketing—I translate vision into actionable roadmaps and drive execution. My goal is to build innovative, user-centric products that not only solve problems but also create lasting impact in the market.",
    },
    {
      name: "Samiksha Umbrje",
      role: "UI/UX Designer",
      image: "samiksha.jpg",
      description:
        "As a UI/UX Designer at SUH TECH PRIVATE LIMITED, I focus on creating seamless, intuitive, and visually engaging digital experiences that put users at the center. I transform complex ideas into clear and elegant interfaces by combining design thinking, user research, and creativity. From wireframes and prototypes to final designs, I ensure every interaction feels natural, consistent, and impactful. By collaborating with product managers, developers, and stakeholders, I bridge the gap between user needs and business goals. My mission is to craft designs that not only look great but also deliver measurable value, making technology more accessible, enjoyable, and human.",
    },
    {
      name: "Akriti Nanda",
      role: "Front-End Intern",
      image: "akriti.jpg",
      description:
        "As a Frontend Intern at SUH TECH PRIVATE LIMITED, I contribute to building responsive, user-friendly, and scalable web applications. I translate design concepts and product requirements into clean, efficient code while ensuring seamless performance across devices. By working closely with senior developers, designers, and product managers, I gain hands-on experience in modern frontend technologies and best practices. My focus is on writing maintainable code, learning continuously, and delivering features that enhance the overall user experience. This role allows me to strengthen my technical foundation while contributing to real-world projects that make a meaningful impact.",
    },
  ];

  const controls = useAnimation();
  const containerRef = useRef(null);
  const isHovered = useRef(false);
  const cardHoveredRef = useRef(false);

  useEffect(() => {
    const cardWidth = 280 + 24;
    const totalWidth = cardWidth * leaders.length;

    const animate = () => {
      if (!isHovered.current && !cardHoveredRef.current) {
        controls.start({
          x: [0, -totalWidth],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          },
        });
      }
    };

    animate();

    return () => {
      controls.stop();
    };
  }, [controls, leaders.length]);

  const handleCardHover = (isHovering) => {
    cardHoveredRef.current = isHovering;
    if (isHovering) {
      controls.stop();
    } else {
      const cardWidth = 280 + 24;
      const totalWidth = cardWidth * leaders.length;

      controls.start({
        x: [0, -totalWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    }
  };

  const handleHoverStart = () => {
    isHovered.current = true;
    if (!cardHoveredRef.current) {
      controls.stop();
    }
  };

  const handleHoverEnd = () => {
    isHovered.current = false;
    if (!cardHoveredRef.current) {
      const cardWidth = 280 + 24;
      const totalWidth = cardWidth * leaders.length;

      controls.start({
        x: [0, -totalWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    }
  };

  return (
    <section
      id="leaders"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a0a0a] via-[#0f0f23] to-[#1a1a2e] relative overflow-hidden min-h-screen"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.1),transparent)]"></div>

      <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16 relative z-10">
        <div className="inline-block">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 bg-clip-text bg-gradient-to-r from-white via-[#6366f1] to-[#8b5cf6] leading-tight">
            Meet Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] animate-gradient-x">
              Team
            </span>
          </h2>
        </div>
        <p className="mt-4 sm:mt-6 text-[#a0a0a0] text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
          The brilliant minds behind SUH TECH PRIVATE LIMITED – leading with
          innovation, dedication, and visionary expertise to shape the future of
          technology.
        </p>
      </div>

      <div className="relative w-full overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6"
          animate={controls}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        >
          {[...leaders, ...leaders, ...leaders].map((leader, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[320px] lg:w-[380px] flex-shrink-0"
              style={{ minHeight: "450px" }}
            >
              <LeaderCard {...leader} onHoverChange={handleCardHover} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute left-0 top-0 w-20 sm:w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-20"></div>
      <div className="absolute right-0 top-0 w-20 sm:w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-20"></div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-700 {
          animation-delay: 700ms;
        }

        .min-h-16 {
          min-height: 4rem;
        }

        .min-h-20 {
          min-height: 5rem;
        }

        @media (max-width: 640px) {
          .min-h-16 {
            min-height: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default LeadersPage;
