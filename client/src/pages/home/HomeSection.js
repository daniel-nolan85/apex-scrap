import React from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import ContactSection from './ContactSection';
import IconsSection from './IconsSection';
import ReviewSection from './ReviewSection';
import ScrapVehicleSection from './ScrapVehicleSection';

const HomeSection = () => {
  return (
    <>
      <Banner />
      <IconsSection />
      <ScrapVehicleSection />
      <ReviewSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomeSection;
