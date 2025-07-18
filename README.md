# API PRO - API Management Platform

A modern, responsive React application for API management built with TypeScript, Vite, and Tailwind CSS.

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful, responsive design built with Tailwind CSS
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🔒 **Type Safety** - Full TypeScript support for robust development
- 🧩 **Component Architecture** - Well-organized, reusable component structure

## 🧠 AI Tools Used

### 1. **Lovable** – *UI Design Assistant*
I used **Lovable** to generate and refine the UI designs for all five pages of the website. It provided design structure, layout ideas, and visual inspiration for the homepage, pricing cards, team section, and form elements. This accelerated the prototyping process and ensured a consistent, modern look throughout the site.

### 2. **GitHub Copilot** – *AI Code Assistant*
I used **GitHub Copilot** as my coding assistant throughout the project. It helped with:
- Structuring React + TypeScript components
- Writing reusable UI elements
- Creating API fetching logic
- Managing props and state
- Handling form interactions and layout adjustments

Copilot saved time by suggesting boilerplate and completing repetitive code blocks effectively.

---

## 📝 Notes & Key Decisions

- The project was built with **React + TypeScript** and powered by **Vite** for fast build times.
- I used **Tailwind CSS** for a utility-first, fully responsive design system.
- A **background video** is implemented in the Hero Section with controlled playback speed for a smooth visual experience.
- Team data is dynamically fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) and rendered using profile cards.
- All assets and components are organized into modular folders (`assets`, `components`, `pages`, `services`) for scalability and maintainability.
- The site is **fully responsive** and tested across **mobile, tablet, and desktop** screens.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Chinthana7858/api_pro
   cd api-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
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
---

