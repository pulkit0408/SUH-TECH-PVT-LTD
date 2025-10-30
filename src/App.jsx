import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import CareersPage from "./components/Carrer";
import ContactUs from "./components/ContactUs";
import ContactUsModal from "./components/ContactUsModal";
import ContactUsModalContext from "./components/ContactUsModalContext";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InhouseProducts from "./components/InhouseProducts";
import LeadersPage from "./components/LeadersPage";
import LearnMore from "./components/LearnMore";
import Navigation from "./components/Navigation";
import PortfolioSection from "./components/Portfolio";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RotatingBannerSection from "./components/RotatingBannerSection";
import ServicesSection from "./components/ServicesSection";
import TeamInformation from "./components/TeamInformation";
import TeamSection from "./components/TeamSection";
import TermsAndConditions from "./components/TermsAndConditions";
import Testimonials from "./components/Testimonals";

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

// Portfolio Page Layout Component
const PortfolioPageLayout = () => <PortfolioSection />;

// Privacy Policy Page Layout Component
const PrivacyPolicyPageLayout = () => <PrivacyPolicy />;

// Terms and Conditions Page Layout Component
const TermsAndConditionsPageLayout = () => <TermsAndConditions />;

// Learn More Page Layout Component
const LearnMorePageLayout = () => <LearnMore />;

// App-wide context for opening/closing the Contact modal (now separate file)

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <ContactUsModalContext.Provider value={{ openModal }}>
      <Router>
        <div className="min-h-screen mt-15 bg-gradient-to-br from-purple-50/0 to-blue-50/0">
          <Navigation />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/careers" element={<CareersPageLayout />} />
            <Route path="/portfolio" element={<PortfolioPageLayout />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPageLayout />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditionsPageLayout />}
            />
            <Route path="/learn-more" element={<LearnMorePageLayout />} />
            <Route path="/team-information" element={<TeamInformation/>} />
          </Routes>
          <ContactUsModal open={showModal} onClose={closeModal} />
          <Footer />
        </div>
      </Router>
    </ContactUsModalContext.Provider>
  );
};

export default App;
