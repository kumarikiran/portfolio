import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/sections/HeroSection';
import TimelineSection from '../components/sections/TimelineSection';
import PublicationsSection from '../components/sections/PublicationsSection';
import TalksSection from '../components/sections/TalksSection';
import GallerySection from '../components/sections/Gallery';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TimelineSection />
      <PublicationsSection />
      <TalksSection />
      <GallerySection />
      <ContactSection />
    </>
  );
};

export default Home;