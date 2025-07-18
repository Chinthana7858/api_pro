import React, { useState } from 'react';
import { Card, Input, Textarea, Button } from '../components';
import { CONTENT } from '../constants';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  message: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ fullName: '', email: '', company: '', message: '' });
  };

  return (
    <main className="py-12 sm:py-16 md:py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {CONTENT.CONTACT.TITLE}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {CONTENT.CONTACT.SUBTITLE}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card variant="elevated">
              {submitted ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    size="md"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label={CONTENT.CONTACT.FORM.FIELDS.NAME}
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange('fullName')}
                      required
                      placeholder="John Doe"
                    />
                    <Input
                      label={CONTENT.CONTACT.FORM.FIELDS.EMAIL}
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      required
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <Input
                    label={CONTENT.CONTACT.FORM.FIELDS.COMPANY}
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange('company')}
                    placeholder="Your Company Name"
                  />
                  
                  <Textarea
                    label={CONTENT.CONTACT.FORM.FIELDS.MESSAGE}
                    value={formData.message}
                    onChange={handleInputChange('message')}
                    required
                    rows={6}
                    placeholder="Tell us about your project or how we can help you..."
                  />
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting || !formData.fullName || !formData.email || !formData.message}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? 'Sending...' : CONTENT.CONTACT.FORM.CTA}
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            {CONTENT.CONTACT.DETAILS.map((detail, index) => (
              <Card
                key={index}
                variant="elevated"
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{detail.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {detail.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {detail.content}
                </p>
                {detail.title === 'Email Us' && (
                  <a
                    href={`mailto:${detail.content}`}
                    className="inline-block mt-2 text-sm sm:text-base text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    Send Email
                  </a>
                )}
                {detail.title === 'Call Us' && (
                  <a
                    href={`tel:${detail.content}`}
                    className="inline-block mt-2 text-sm sm:text-base text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    Call Now
                  </a>
                )}
              </Card>
            ))}         
          </div>
        </div>
      </div>
    </main>
  );
};
