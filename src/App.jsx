import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import AboutSection from "./components/AboutSection";
import LeadersPage from "./components/LeadersPage"; // ✅ Import
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
      <AboutSection />
      <section id="services">
        <ServicesSection />
      </section>
      <TeamSection />
      <LeadersPage /> {/* ✅ New Leaders Section */}
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default App;
