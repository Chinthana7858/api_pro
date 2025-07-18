# API PRO - API Management Platform

A modern, responsive React application for API management built with TypeScript, Vite, and Tailwind CSS. API PRO provides a comprehensive platform for managing APIs with features like documentation, pricing plans, team management, and more.

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful, responsive design built with Tailwind CSS
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🔒 **Type Safety** - Full TypeScript support for robust development
- 🧩 **Component Architecture** - Well-organized, reusable component structure
- 🎬 **Video Background** - Engaging hero section with video background
- 📊 **API Documentation** - Interactive API documentation with examples
- 👥 **Team Management** - Dynamic team member display with API integration
- 💳 **Pricing Plans** - Responsive pricing cards with feature comparison
- 📞 **Contact Forms** - Functional contact forms with validation

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd api-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if you're using yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser**
   
   The application will automatically open in your default browser at:
   ```
   http://localhost:5173
   ```

   If the port 5173 is in use, Vite will automatically find the next available port.

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Builds the app for production to the `dist` folder |
| `npm run lint` | Runs ESLint to check for code quality issues |
| `npm run preview` | Previews the production build locally |

## 🏗️ Project Structure

```
api-pro/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/
│   ├── assets/            # Images, videos, and other assets
│   │   ├── videos/        # Video files (cover_video.mp4)
│   │   └── companyLogos/  # Company logo images
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Basic UI components (Button, Card, Input, etc.)
│   │   ├── layout/       # Layout components (Header, Footer, Layout)
│   │   └── sections/     # Page sections (Hero, Features, Pricing, etc.)
│   ├── constants/        # Application constants and content
│   ├── pages/           # Page components
│   ├── services/        # API services and utilities
│   ├── App.tsx          # Main application component
│   ├── App.css          # Global styles
│   ├── index.css        # Tailwind CSS imports
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🎨 Tech Stack

- **Framework**: React 19.1.0
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router DOM 7.7.0
- **Linting**: ESLint 9.30.1
- **Code Quality**: TypeScript ESLint 8.35.1

## 🌐 Browser Support

API PRO is optimized for modern browsers and supports:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Mobile devices**: 320px - 640px
- **Tablets**: 640px - 1024px
- **Laptops**: 1024px - 1440px
- **Desktops**: 1440px+

## 🔧 Development

### Adding New Components

1. Create your component in the appropriate directory under `src/components/`
2. Export it from the relevant `index.ts` file
3. Import and use it in your pages or other components

### Styling Guidelines

- Use Tailwind CSS utility classes for styling
- Follow the responsive design patterns established in existing components
- Maintain consistent spacing using Tailwind's spacing scale

### Code Quality

The project includes ESLint configuration for maintaining code quality:

```bash
# Run linting
npm run lint

# Auto-fix linting issues where possible
npm run lint -- --fix
```

## 🚀 Production Build

To create a production build:

```bash
npm run build
```

This will:
- Compile TypeScript to JavaScript
- Bundle and optimize all assets
- Generate a `dist/` folder with production-ready files

To preview the production build locally:

```bash
npm run preview
```

## 🔄 API Integration

The application includes mock API services for demonstration. To integrate with a real API:

1. Update the API service files in `src/services/`
2. Replace mock endpoints with your actual API URLs
3. Update the data types in the service files as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests and linting: `npm run lint`
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

**Port already in use**
- Vite will automatically find an available port, typically 5174 or 5175

**Build errors**
- Ensure all dependencies are installed: `npm install`
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

**TypeScript errors**
- Check your TypeScript version matches the project requirements
- Run `npm run build` to see all TypeScript errors

**Styling issues**
- Ensure Tailwind CSS is properly configured
- Check that the CSS imports are correct in `src/index.css`

### Getting Help

If you encounter any issues:
1. Check the browser console for error messages
2. Ensure you're using Node.js version 16+
3. Try clearing your browser cache
4. Restart the development server

---

Built with ❤️ using React, TypeScript, and Vite
