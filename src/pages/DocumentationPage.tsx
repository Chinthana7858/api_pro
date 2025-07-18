import React, { useState } from 'react';
import { Card } from '../components';
import { CONTENT } from '../constants/content';

export const DocumentationPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('get-users');
  const navigation = CONTENT.DOCUMENTATION.NAVIGATION;
  const content = CONTENT.DOCUMENTATION.CONTENT;

  return (
    <main className="py-12 sm:py-16 md:py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {CONTENT.DOCUMENTATION.TITLE}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Everything you need to integrate with our powerful API platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card variant="elevated" className="lg:sticky lg:top-24">
              <nav className="space-y-4 sm:space-y-6">
                {navigation.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3">
                      {section.category}
                    </h3>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => {
                        const isActive = activeSection === link.href.replace('#', '') || 
                          ('active' in link && link.active);
                        return (
                          <li key={linkIndex}>
                            <button
                              onClick={() => setActiveSection(link.href.replace('#', ''))}
                              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                                isActive
                                  ? 'bg-blue-100 text-blue-700 font-medium'
                                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                              }`}
                            >
                              {link.name}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card variant="elevated">
              <div className="prose max-w-none">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {content.ENDPOINT}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                    {content.DESCRIPTION}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 sm:mb-6 space-y-2 sm:space-y-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      GET
                    </span>
                    <code className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded">
                      /v1/users
                    </code>
                  </div>
                </div>

                {/* Example Request */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Example Request</h3>
                  <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
                    <pre className="text-green-400 text-xs sm:text-sm">
                      <code>{content.REQUEST_EXAMPLE}</code>
                    </pre>
                  </div>
                  <button className="mt-2 text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Copy to clipboard
                  </button>
                </div>

                {/* Example Response */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    Example Response 
                    <span className="ml-2 text-xs sm:text-sm text-green-600 font-normal">(200 OK)</span>
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
                    <pre className="text-green-400 text-xs sm:text-sm">
                      <code>{content.RESPONSE_EXAMPLE}</code>
                    </pre>
                  </div>
                  <button className="mt-2 text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Copy to clipboard
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};
