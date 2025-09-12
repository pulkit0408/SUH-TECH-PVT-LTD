import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InhouseProducts from "./components/InhouseProducts";
import LeadersPage from "./components/LeadersPage";
import Navigation from "./components/Navigation";
import RotatingBannerSection from "./components/RotatingBannerSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import Testimonials from "./components/Testimonals";
import CareersPage from "./components/Carrer";

// Home Page Component
const HomePage = () => (
  <>
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
    <LeadersPage />
    <InhouseProducts />
    <BlogSection />
    <Testimonials />
    <section id="contact">
      <ContactUs />
    </section>
  </>
);

// Careers Page Layout Component
const CareersPageLayout = () => <CareersPage />;

const App = () => {
  return (
    <Router>
      <div className="min-h-screen mt-15 bg-gradient-to-br from-purple-50/0 to-blue-50/0">
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<CareersPageLayout />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
