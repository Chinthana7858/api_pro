export const API_CONFIG = {
  BASE_URL: 'https://jsonplaceholder.typicode.com',
  ENDPOINTS: {
    USERS: '/users',
    POSTS: '/posts',
    COMMENTS: '/comments',
  },
  TIMEOUT: 10000,
} as const;

export const APP_CONFIG = {
  COMPANY_NAME: 'API PRO',
  CONTACT: {
    EMAIL: 'hello@apipro.com',
    PHONE: '+1 (555) 123-4567',
    ADDRESS: '123 Tech Avenue, Innovation City, Connectiville 45678',
  },
  SOCIAL_LINKS: {
    GITHUB: 'https://github.com/apipro',
    TWITTER: 'https://twitter.com/apipro',
    LINKEDIN: 'https://linkedin.com/company/apipro',
  },
} as const;

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Documentation', href: '/documentation' },
  { name: 'Contact Us', href: '/contact' },
] as const;
