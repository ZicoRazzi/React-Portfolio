import React from 'react';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ServiceSection from '../components/ServiceSection';
import RecommendationsSection from '../components/RecommendationsSection';
import ContactBanner from '../components/ContactBanner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
      <RecommendationsSection />
      <ContactBanner />
    </div>
  );
}
