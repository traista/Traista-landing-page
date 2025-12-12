# Traista Landing Page

A modern, responsive landing page for Traista - Lost & Found Solutions platform.

## Features

- Built with Next.js 14 and React 18
- Material-UI (MUI) components for beautiful, modern design
- Fully responsive design for all devices
- TypeScript for type safety
- Smooth scrolling navigation
- Beautiful animations and transitions
- Contact form
- Testimonials section
- Stats showcase
- "How It Works" process flow

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Traista-landing-page/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page integrating all sections
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Header navigation
│   ├── HeroSection.tsx   # Hero banner with CTA
│   ├── FeaturesSection.tsx    # Features showcase
│   ├── StatsSection.tsx       # Statistics display
│   ├── HowItWorksSection.tsx  # Process flow
│   ├── AboutSection.tsx       # About Traista
│   ├── TestimonialsSection.tsx # Customer reviews
│   ├── ContactSection.tsx     # Contact form
│   └── Footer.tsx             # Footer with links
├── theme.ts              # MUI theme configuration
├── package.json
├── tsconfig.json
└── next.config.js

```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Material-UI (MUI)** - Component library
- **@mui/icons-material** - Icon library
- **Emotion** - CSS-in-JS styling

## Color Palette

- **Primary Blue**: #1976d2
- **Secondary Orange**: #ff9800
- **Accent Green**: #4caf50

## License

©Copyright 2016-2025 Traista. All Rights Reserved.
