import React from 'react';
import { Button, Card } from '../ui';
import { CONTENT } from '../../constants/content';

export const PricingSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {CONTENT.PRICING.TITLE}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            {CONTENT.PRICING.SUBTITLE}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CONTENT.PRICING.PLANS.map((plan, index) => (
            <Card 
              key={index} 
              variant="elevated" 
              className={`text-center relative ${
                plan.popular ? 'ring-2 ring-blue-500 lg:scale-105' : ''
              } p-4 sm:p-6`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="pt-4 sm:pt-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-sm sm:text-base text-gray-600">{plan.period}</span>
                </div>
                
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm sm:text-base text-gray-600 flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-center">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  className="w-full text-sm sm:text-base"
                  size="md"
                >
                  {plan.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
