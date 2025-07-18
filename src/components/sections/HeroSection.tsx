import React from 'react';
import { Button } from '../ui';
import { CONTENT } from '../../constants/content';
import coverVideo from '../../assets/videos/cover_video.mp4';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative text-white overflow-hidden h-screen">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        
      >
        <source src={coverVideo} type="video/mp4" />
      </video>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
            {CONTENT.HOME.HERO.HEADLINE}
            <br className="hidden sm:block" />
            <span className="block sm:inline bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-2 sm:mt-0 sm:ml-4">
              {CONTENT.HOME.HERO.SUBHEADLINE}
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            {CONTENT.HOME.HERO.DESCRIPTION}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-blue-900 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <span className="flex items-center justify-center">
                {CONTENT.HOME.HERO.CTA}
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
