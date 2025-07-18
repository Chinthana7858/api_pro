import React, { useState, useEffect } from 'react';
import { Card } from '../components';
import { CONTENT } from '../constants/content';
import { apiService } from '../services/api';
import type { User } from '../services/api';

export const AboutPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const userData = await apiService.getUsers();
        setUsers(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch team data');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className="py-12 sm:py-16 md:py-20">
      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {CONTENT.ABOUT.MISSION.TITLE}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-6 sm:mb-8">
            {CONTENT.ABOUT.MISSION.HEADLINE}
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card variant="elevated" className="text-center">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              {CONTENT.ABOUT.MISSION.DESCRIPTION}
            </p>
          </Card>
        </div>
      </section>


      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {CONTENT.ABOUT.TEAM.TITLE}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Meet the talented individuals who make API PRO possible.
          </p>
        </div>

        {loading && (
          <div className="text-center py-8 sm:py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-sm sm:text-base text-gray-600">Loading team members...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-8 sm:py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6 max-w-md mx-auto">
              <p className="text-sm sm:text-base text-red-700">{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {users.map((user) => (
              <Card
                key={user.id}
                variant="elevated"
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {user.name}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-600 font-medium mb-2">
                    @{user.username}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    {user.email}
                  </p>
                  {user.website && (
                    <a
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-blue-600 hover:text-blue-700 font-medium inline-flex items-center transition-colors duration-200"
                    >
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {user.website}
                    </a>
                  )}
                </div>
                
                <div className="pt-3 sm:pt-4 border-t border-gray-100">
                  <p className="text-xs sm:text-sm text-gray-500">
                    {user.company.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    "{user.company.catchPhrase}"
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};
