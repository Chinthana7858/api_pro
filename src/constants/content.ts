export const CONTENT = {
  HOME: {
    HERO: {
      HEADLINE: 'Effortless API Management.',
      SUBHEADLINE: 'Powerful Results.',
      DESCRIPTION: 'API PRO is the all-in-one platform designed to take your APIs from development to production with unparalleled speed, security, and AI-driven insights.',
      CTA: 'Get Started for Free',
    },
    FEATURES: {
      TITLE: 'Everything You Need in One Platform',
      ITEMS: [
        {
          title: 'AI-Powered Analytics',
          description: 'Go beyond basic metrics. Understand your API usage with intelligent, real-time insights and predictive analytics to stay ahead of demand.',
          icon: '🤖',
        },
        {
          title: 'Bank-Grade Security',
          description: 'Protect your endpoints with OAuth 2.0, API key management, and automated threat detection. Your data\'s integrity is our top priority.',
          icon: '🔒',
        },
        {
          title: 'Superior Developer Experience',
          description: 'With auto-generated documentation and a seamless CLI, we make building and integrating APIs a joy, not a chore. Cut your development time in half.',
          icon: '⚡',
        },
      ],
    },
    SOCIAL_PROOF: {
      TITLE: 'Trusted by the World\'s Most Innovative Companies',
      COMPANIES: [
        'InnovateCorp',
        'QuantumLeap Tech',
        'DataWeave Solutions',
        'NextGen Systems',
        'Apex Digital',
      ],
    },
  },
  ABOUT: {
    MISSION: {
      TITLE: 'Our Mission',
      HEADLINE: 'We Empower Developers to Build The Future.',
      DESCRIPTION: 'In today\'s digital world, APIs are the backbone of innovation. Yet, managing them has become increasingly complex. API PRO was founded on a simple principle: to give developers and businesses the tools they need to build, manage, and scale their APIs without the headache. We handle the complexity, so you can focus on creating amazing products.',
    },
    TEAM: {
      TITLE: 'The Team Behind API PRO',
    },
  },
  PRICING: {
    TITLE: 'Simple, Transparent Pricing for Teams of All Sizes',
    SUBTITLE: 'Start for free and scale as you go. No hidden fees, ever.',
    PLANS: [
      {
        name: 'Starter',
        price: '$0',
        period: '/ month',
        features: [
          '1 Project',
          '10,000 API Calls/mo',
          'Basic Analytics',
          'Community Support',
        ],
        cta: 'Start for Free',
        popular: false,
      },
      {
        name: 'Pro',
        price: '$49',
        period: '/ month',
        features: [
          '10 Projects',
          '1 Million API Calls/mo',
          'AI-Powered Analytics',
          'Advanced Security',
          'Email Support',
        ],
        cta: 'Choose Pro',
        popular: true,
      },
      {
        name: 'Enterprise',
        price: 'Let\'s Talk',
        period: '',
        features: [
          'Unlimited Projects',
          'Custom API Call Volume',
          'On-Premise Deployment',
          'Security Audits',
          'Dedicated 24/7 Support',
        ],
        cta: 'Contact Sales',
        popular: false,
      },
    ],
  },
  DOCUMENTATION: {
    TITLE: 'API PRO Developer Documentation',
    NAVIGATION: [
      {
        category: 'GETTING STARTED',
        links: [
          { name: 'Authentication', href: '#authentication' },
        ],
      },
      {
        category: 'CORE RESOURCES',
        links: [
          { name: 'GET /users', href: '#get-users', active: true },
          { name: 'POST /users', href: '#post-users' },
          { name: 'GET /analytics', href: '#get-analytics' },
          { name: 'GET /logs', href: '#get-logs' },
        ],
      },
    ],
    CONTENT: {
      ENDPOINT: 'GET /v1/users',
      DESCRIPTION: 'Retrieves a list of all users associated with your project.',
      REQUEST_EXAMPLE: `fetch('https://api.apipro.com/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));`,
      RESPONSE_EXAMPLE: `{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "created_at": "2024-01-15T10:30:00Z"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com",
      "created_at": "2024-01-16T14:45:00Z"
    }
  ],
  "total": 2,
  "page": 1,
  "per_page": 10
}`,
    },
  },
  CONTACT: {
    TITLE: 'Get In Touch',
    SUBTITLE: 'Have a technical question, a sales inquiry, or just want to chat? We\'d love to hear from you.',
    FORM: {
      FIELDS: {
        NAME: 'Full Name',
        EMAIL: 'Work Email',
        COMPANY: 'Company Name (Optional)',
        MESSAGE: 'Message',
      },
      CTA: 'Send Message',
    },
    DETAILS: [
      {
        title: 'Our Office',
        content: '123 Tech Avenue, Innovation City, Connectiville 45678',
        icon: '📍',
      },
      {
        title: 'Email Us',
        content: 'hello@apipro.com',
        icon: '✉️',
      },
      {
        title: 'Call Us',
        content: '+1 (555) 123-4567',
        icon: '📞',
      },
    ],
  },
} as const;
