'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navigation />
            <main>
                <HeroSection />
                <FeaturesSection />
                <StatsSection />
                <HowItWorksSection />
                <AboutSection />
                <TestimonialsSection />
                <ContactSection />
            </main>
            <Footer />
        </ThemeProvider>
    );
}
