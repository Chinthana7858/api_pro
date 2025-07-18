import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">API PRO</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 max-w-md">
              The all-in-one platform for API management. Build, deploy, and scale your APIs with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors">
                  API Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-gray-400">
            © 2025 API PRO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
