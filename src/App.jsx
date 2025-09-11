import React from "react";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InhouseProducts from "./components/InhouseProducts";
import LeadersPage from "./components/LeadersPage"; // ✅ Import
import Navigation from "./components/Navigation";
import RotatingBannerSection from "./components/RotatingBannerSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50/0 to-blue-50/0">
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <TeamSection />
      <RotatingBannerSection />
      <LeadersPage /> {/* ✅ New Leaders Section */}
      <InhouseProducts />
      <BlogSection />
      <section id="contact">
        <ContactUs/>
      </section>
      <Footer/>
    </div>
  );
};

export default App;
