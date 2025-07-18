import React from 'react';
import { Card } from '../ui';
import { CONTENT } from '../../constants/content';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {CONTENT.HOME.FEATURES.TITLE}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CONTENT.HOME.FEATURES.ITEMS.map((feature, index) => (
            <Card key={index} variant="elevated" className="text-center h-full p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
