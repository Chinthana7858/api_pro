import React from 'react';
import { HeroSection, FeaturesSection, SocialProofSection } from '../components';

export const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <SocialProofSection />
    </main>
  );
};
