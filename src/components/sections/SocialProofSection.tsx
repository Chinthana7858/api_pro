import React from 'react';
import { CONTENT } from '../../constants/content';

export const SocialProofSection: React.FC = () => {
  const logos = {
    'InnovateCorp': '/src/assets/companyLogos/InnovateCorp.png',
    'QuantumLeap Tech': '/src/assets/companyLogos/QuantumLeap.png',
    'DataWeave Solutions': '/src/assets/companyLogos/DataWeave.png',
    'NextGen Systems': '/src/assets/companyLogos/NextGen.png',
    'Apex Digital': '/src/assets/companyLogos/Apex.png',
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            {CONTENT.HOME.SOCIAL_PROOF.TITLE}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center opacity-60">
          {CONTENT.HOME.SOCIAL_PROOF.COMPANIES.map((company, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logos[company as keyof typeof logos]}
                alt={company}
                className="h-8 sm:h-10 md:h-12 object-contain transition-all duration-300"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<div class="text-sm sm:text-base md:text-lg font-semibold text-gray-600 text-center">${company}</div>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
