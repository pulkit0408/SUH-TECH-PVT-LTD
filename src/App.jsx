// App.jsx
import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
    </div>
  );
};

export default App;