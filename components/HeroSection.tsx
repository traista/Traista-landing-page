'use client';

import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, Grid, keyframes } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default function HeroSection() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box
            id="home"
            sx={{
                position: 'relative',
                minHeight: { xs: '90vh', md: '95vh' },
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #0044af 0%, #3f6ee3 50%, #7c9cff 100%)',
                color: 'white',
                overflow: 'hidden',
                pt: { xs: '64px', md: '80px' },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        radial-gradient(circle at 15% 30%, rgba(181, 32, 65, 0.15) 0%, transparent 40%),
                        radial-gradient(circle at 85% 70%, rgba(124, 156, 255, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)
                    `,
                    pointerEvents: 'none',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '-50%',
                    right: '-5%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                    animation: `${pulse} 4s ease-in-out infinite`,
                    pointerEvents: 'none',
                },
            }}
        >
            {/* Decorative animated lost items - sketches */}
            {/* Large Laptop Sketch */}
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="5" width="80" height="55" rx="3" fill="none" stroke="rgba(255, 255, 255, 0.3)" stroke-width="2"/>
                        <rect x="5" y="60" width="90" height="8" rx="2" fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-width="2"/>
                        <rect x="20" y="15" width="60" height="40" rx="2" fill="none" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1.5"/>
                        <line x1="50" y1="15" x2="50" y2="55" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '15%',
                    left: '8%',
                    width: '160px',
                    opacity: 0.7,
                    animation: `${float} 4s ease-in-out infinite`,
                    pointerEvents: 'none',
                    transform: `translateY(${scrollY * 0.15}px)`,
                    transition: 'transform 0.1s ease-out',
                }}
            />
            {/* Small Phone Sketch */}
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="5" width="40" height="85" rx="8" fill="none" stroke="rgba(181, 32, 65, 0.35)" stroke-width="2"/>
                        <rect x="15" y="15" width="30" height="60" rx="2" fill="none" stroke="rgba(181, 32, 65, 0.25)" stroke-width="1.5"/>
                        <circle cx="30" cy="82" r="4" fill="none" stroke="rgba(181, 32, 65, 0.3)" stroke-width="1.5"/>
                        <line x1="20" y1="10" x2="40" y2="10" stroke="rgba(181, 32, 65, 0.25)" stroke-width="1.5"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '10%',
                    width: '70px',
                    opacity: 0.7,
                    animation: `${rotate} 20s linear infinite`,
                    pointerEvents: 'none',
                    transform: `translateY(${scrollY * -0.2}px)`,
                    transition: 'transform 0.1s ease-out',
                }}
            />
            {/* Medium Backpack Sketch */}
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
                        <rect x="15" y="20" width="50" height="65" rx="8" fill="none" stroke="rgba(124, 156, 255, 0.35)" stroke-width="2"/>
                        <rect x="25" y="30" width="30" height="35" rx="4" fill="none" stroke="rgba(124, 156, 255, 0.25)" stroke-width="1.5"/>
                        <circle cx="28" cy="15" r="6" fill="none" stroke="rgba(124, 156, 255, 0.3)" stroke-width="1.5"/>
                        <circle cx="52" cy="15" r="6" fill="none" stroke="rgba(124, 156, 255, 0.3)" stroke-width="1.5"/>
                        <path d="M 28 15 Q 40 5 52 15" fill="none" stroke="rgba(124, 156, 255, 0.3)" stroke-width="2"/>
                        <line x1="30" y1="45" x2="50" y2="45" stroke="rgba(124, 156, 255, 0.2)" stroke-width="1"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '55%',
                    left: '5%',
                    width: '105px',
                    opacity: 0.7,
                    animation: `${pulse} 3s ease-in-out infinite`,
                    pointerEvents: 'none',
                    transform: `translateY(${scrollY * 0.25}px)`,
                    transition: 'transform 0.1s ease-out',
                }}
            />
            {/* Large Wallet Sketch */}
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="80" height="50" rx="5" fill="none" stroke="rgba(255, 255, 255, 0.3)" stroke-width="2"/>
                        <rect x="15" y="15" width="70" height="18" rx="3" fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1.5"/>
                        <circle cx="75" cy="45" r="5" fill="none" stroke="rgba(255, 255, 255, 0.35)" stroke-width="2"/>
                        <line x1="15" y1="40" x2="60" y2="40" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '12%',
                    right: '12%',
                    width: '130px',
                    opacity: 0.6,
                    animation: `${float} 5s ease-in-out infinite 0.5s`,
                    pointerEvents: 'none',
                    transform: `translateY(${scrollY * -0.18}px)`,
                    transition: 'transform 0.1s ease-out',
                }}
            />
            {/* Medium ID Card Sketch */}
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 100 65" xmlns="http://www.w3.org/2000/svg">
                        <rect x="5" y="5" width="90" height="55" rx="5" fill="none" stroke="rgba(181, 32, 65, 0.32)" stroke-width="2"/>
                        <circle cx="25" cy="25" r="10" fill="none" stroke="rgba(181, 32, 65, 0.28)" stroke-width="1.5"/>
                        <line x1="42" y1="20" x2="85" y2="20" stroke="rgba(181, 32, 65, 0.25)" stroke-width="1.5"/>
                        <line x1="42" y1="28" x2="75" y2="28" stroke="rgba(181, 32, 65, 0.22)" stroke-width="1.5"/>
                        <line x1="15" y1="44" x2="85" y2="44" stroke="rgba(181, 32, 65, 0.2)" stroke-width="1"/>
                        <line x1="15" y1="52" x2="75" y2="52" stroke="rgba(181, 32, 65, 0.2)" stroke-width="1"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    bottom: '35%',
                    left: '4%',
                    width: '110px',
                    opacity: 0.65,
                    animation: `${rotate} 25s linear infinite reverse`,
                    pointerEvents: 'none',
                    transform: `translateY(${scrollY * 0.22}px)`,
                    transition: 'transform 0.1s ease-out',
                }}
            />
            {/* Small Keys Sketch */}
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="15" fill="none" stroke="rgba(255, 255, 255, 0.3)" stroke-width="2"/>
                        <circle cx="25" cy="25" r="8" fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1.5"/>
                        <line x1="35" y1="25" x2="70" y2="25" stroke="rgba(255, 255, 255, 0.3)" stroke-width="2"/>
                        <line x1="42" y1="20" x2="42" y2="30" stroke="rgba(255, 255, 255, 0.3)" stroke-width="2"/>
                        <line x1="52" y1="20" x2="52" y2="30" stroke="rgba(255, 255, 255, 0.3)" stroke-width="2"/>
                        <line x1="62" y1="20" x2="62" y2="30" stroke="rgba(255, 255, 255, 0.3)" stroke-width="2"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '38%',
                    right: '6%',
                    width: '90px',
                    opacity: 0.6,
                    animation: `${pulse} 4s ease-in-out infinite 1s`,
                    pointerEvents: 'none',
                    transform: `translateY(${scrollY * -0.12}px)`,
                    transition: 'transform 0.1s ease-out',
                }}
            />
            {/* Sunglasses Sketch */}
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="30" cy="25" rx="22" ry="15" fill="none" stroke="rgba(124, 156, 255, 0.35)" stroke-width="2"/>
                        <ellipse cx="90" cy="25" rx="22" ry="15" fill="none" stroke="rgba(124, 156, 255, 0.35)" stroke-width="2"/>
                        <path d="M 52 25 Q 60 20 68 25" fill="none" stroke="rgba(124, 156, 255, 0.35)" stroke-width="2"/>
                        <line x1="8" y1="25" x2="2" y2="28" stroke="rgba(124, 156, 255, 0.3)" stroke-width="2"/>
                        <line x1="112" y1="25" x2="118" y2="28" stroke="rgba(124, 156, 255, 0.3)" stroke-width="2"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '70%',
                    right: '15%',
                    width: '100px',
                    opacity: 0.65,
                    animation: `${float} 6s ease-in-out infinite 1.5s`,
                    pointerEvents: 'none',
                    transform: `translateY(${scrollY * 0.18}px)`,
                    transition: 'transform 0.1s ease-out',
                }}
            />
            {/* Watch Sketch */}
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 70 90" xmlns="http://www.w3.org/2000/svg">
                        <rect x="15" y="25" width="40" height="40" rx="8" fill="none" stroke="rgba(255, 255, 255, 0.32)" stroke-width="2"/>
                        <circle cx="35" cy="45" r="15" fill="none" stroke="rgba(255, 255, 255, 0.28)" stroke-width="1.5"/>
                        <line x1="35" y1="45" x2="35" y2="35" stroke="rgba(255, 255, 255, 0.3)" stroke-width="2"/>
                        <line x1="35" y1="45" x2="42" y2="45" stroke="rgba(255, 255, 255, 0.3)" stroke-width="2"/>
                        <rect x="25" y="15" width="20" height="10" rx="2" fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1.5"/>
                        <rect x="25" y="65" width="20" height="10" rx="2" fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1.5"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    bottom: '12%',
                    left: '12%',
                    width: '80px',
                    opacity: 0.6,
                    animation: `${rotate} 30s linear infinite`,
                    pointerEvents: 'none',
                    transform: `translateY(${scrollY * -0.1}px)`,
                    transition: 'transform 0.1s ease-out',
                }}
            />
            {/* Headphones Sketch */}
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 100 90" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 20 50 Q 20 15 50 15 Q 80 15 80 50" fill="none" stroke="rgba(181, 32, 65, 0.35)" stroke-width="2.5"/>
                        <rect x="10" y="48" width="18" height="28" rx="4" fill="none" stroke="rgba(181, 32, 65, 0.32)" stroke-width="2"/>
                        <rect x="72" y="48" width="18" height="28" rx="4" fill="none" stroke="rgba(181, 32, 65, 0.32)" stroke-width="2"/>
                        <rect x="14" y="52" width="10" height="20" rx="2" fill="none" stroke="rgba(181, 32, 65, 0.25)" stroke-width="1.5"/>
                        <rect x="76" y="52" width="10" height="20" rx="2" fill="none" stroke="rgba(181, 32, 65, 0.25)" stroke-width="1.5"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '65%',
                    right: '8%',
                    width: '95px',
                    opacity: 0.65,
                    animation: `${pulse} 5s ease-in-out infinite 2s`,
                    pointerEvents: 'none',
                    transform: `translateY(${scrollY * 0.2}px)`,
                    transition: 'transform 0.1s ease-out',
                }}
            />
            {/* Passport Sketch */}
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="60" height="80" rx="3" fill="none" stroke="rgba(124, 156, 255, 0.35)" stroke-width="2"/>
                        <circle cx="40" cy="35" r="12" fill="none" stroke="rgba(124, 156, 255, 0.28)" stroke-width="1.5"/>
                        <line x1="25" y1="55" x2="55" y2="55" stroke="rgba(124, 156, 255, 0.25)" stroke-width="1.5"/>
                        <line x1="25" y1="63" x2="50" y2="63" stroke="rgba(124, 156, 255, 0.22)" stroke-width="1.5"/>
                        <line x1="25" y1="71" x2="55" y2="71" stroke="rgba(124, 156, 255, 0.22)" stroke-width="1.5"/>
                        <line x1="25" y1="79" x2="45" y2="79" stroke="rgba(124, 156, 255, 0.2)" stroke-width="1.5"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    bottom: '25%',
                    right: '4%',
                    width: '85px',
                    opacity: 0.6,
                    animation: `${float} 7s ease-in-out infinite 0.8s`,
                    pointerEvents: 'none',
                    transform: `translateY(${scrollY * -0.16}px)`,
                    transition: 'transform 0.1s ease-out',
                }}
            />
            {/* Camera Sketch */}
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="20" width="80" height="50" rx="5" fill="none" stroke="rgba(255, 255, 255, 0.32)" stroke-width="2"/>
                        <circle cx="55" cy="45" r="18" fill="none" stroke="rgba(255, 255, 255, 0.3)" stroke-width="2"/>
                        <circle cx="55" cy="45" r="12" fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1.5"/>
                        <rect x="35" y="10" width="20" height="10" rx="2" fill="none" stroke="rgba(255, 255, 255, 0.28)" stroke-width="1.5"/>
                        <circle cx="22" cy="32" r="4" fill="none" stroke="rgba(255, 255, 255, 0.3)" stroke-width="1.5"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '48%',
                    left: '3%',
                    width: '105px',
                    opacity: 0.65,
                    animation: `${rotate} 35s linear infinite reverse`,
                    pointerEvents: 'none',
                    transform: `translateY(${scrollY * 0.14}px)`,
                    transition: 'transform 0.1s ease-out',
                }}
            />
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 8 }, px: { xs: 3, sm: 3, md: 3 } }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                                fontWeight: 900,
                                mb: 3,
                                background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                animation: `${fadeInUp} 0.8s ease-out`,
                                lineHeight: 1.1,
                                px: { xs: 2, sm: 0 },
                            }}
                        >
                            Lost Something?
                            <br />
                            <Box component="span" sx={{
                                color: '#ffffff',
                                textShadow: '0 2px 10px rgba(255,255,255,0.3)',
                                fontSize: { xs: '1.75rem', sm: '3rem', md: '3.5rem' },
                                display: 'inline-block',
                            }}>
                                We'll Help You Find It ✨
                            </Box>
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 5,
                                opacity: 0.95,
                                fontSize: { xs: '1.1rem', sm: '1.4rem', md: '1.6rem' },
                                fontWeight: 500,
                                animation: `${fadeInUp} 0.8s ease-out 0.2s backwards`,
                                maxWidth: '600px',
                                lineHeight: 1.6,
                                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                                padding: { xs: '12px 16px', sm: '12px 0' },
                            }}
                        >
                            Free platform connecting travelers and organizations to recover lost items
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', animation: `${fadeInUp} 0.8s ease-out 0.4s backwards`, px: { xs: 2, sm: 0 } }}>
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<SearchIcon />}
                                onClick={() => window.open('https://portal.traista.com/claim', '_blank')}
                                sx={{
                                    bgcolor: '#b52041',
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    px: 5,
                                    py: 2,
                                    borderRadius: '50px',
                                    boxShadow: '0 10px 40px rgba(181, 32, 65, 0.4)',
                                    fontWeight: 700,
                                    '&:hover': {
                                        bgcolor: '#7f001b',
                                        transform: 'translateY(-4px) scale(1.02)',
                                        boxShadow: '0 15px 50px rgba(181, 32, 65, 0.5)',
                                    },
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            >
                                I Lost Something
                            </Button>
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<BusinessIcon />}
                                onClick={() => window.open('https://portal.traista.com/account/signup', '_blank')}
                                sx={{
                                    bgcolor: '#0044af',
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    px: 5,
                                    py: 2,
                                    borderRadius: '50px',
                                    boxShadow: '0 10px 40px rgba(0, 68, 175, 0.4)',
                                    fontWeight: 700,
                                    '&:hover': {
                                        bgcolor: '#002d7a',
                                        transform: 'translateY(-4px) scale(1.02)',
                                        boxShadow: '0 15px 50px rgba(0, 68, 175, 0.5)',
                                    },
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            >
                                I'm an Organization
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'block' },
                                textAlign: 'center',
                                animation: `${float} 3s ease-in-out infinite`,
                            }}
                        >
                            <Box
                                component="img"
                                src={`data:image/svg+xml,${encodeURIComponent(`
                                    <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                      <!-- Rounded background -->
                                      <rect x="50" y="50" width="500" height="500" rx="80" fill="white" opacity="0.95"/>
                                      
                                      <!-- Scattered items around -->
                                      <!-- Laptop (top left) -->
                                      <g transform="translate(120, 120)">
                                        <rect x="0" y="5" width="90" height="60" rx="3" fill="#64b5f6"/>
                                        <rect x="-5" y="65" width="100" height="8" rx="2" fill="#42a5f5"/>
                                        <rect x="10" y="15" width="70" height="40" rx="2" fill="#e3f2fd"/>
                                      </g>
                                      
                                      <!-- Phone (top right) -->
                                      <g transform="translate(430, 130) rotate(15)">
                                        <rect x="0" y="0" width="50" height="85" rx="8" fill="#1976d2"/>
                                        <rect x="5" y="10" width="40" height="60" rx="2" fill="#e3f2fd"/>
                                        <circle cx="25" cy="77" r="4" fill="#90caf9"/>
                                      </g>
                                      
                                      <!-- Keys (bottom left) -->
                                      <g transform="translate(130, 420) rotate(-20)">
                                        <circle cx="0" cy="0" r="18" fill="none" stroke="#ff9800" stroke-width="4"/>
                                        <rect x="15" y="-5" width="40" height="10" rx="2" fill="#ff9800"/>
                                        <rect x="20" y="-8" width="3" height="16" fill="#ff9800"/>
                                        <rect x="30" y="-8" width="3" height="16" fill="#ff9800"/>
                                        <rect x="40" y="-8" width="3" height="16" fill="#ff9800"/>
                                      </g>
                                      
                                      <!-- Wallet (bottom right area) -->
                                      <g transform="translate(420, 430)">
                                        <rect x="0" y="0" width="80" height="55" rx="5" fill="#4caf50"/>
                                        <rect x="5" y="5" width="70" height="20" rx="3" fill="#81c784"/>
                                        <circle cx="65" cy="40" r="5" fill="#2e7d32"/>
                                      </g>
                                      
                                      <!-- Backpack (right side) -->
                                      <g transform="translate(460, 260)">
                                        <rect x="0" y="15" width="50" height="70" rx="8" fill="#e91e63"/>
                                        <rect x="10" y="20" width="30" height="40" rx="4" fill="#f48fb1"/>
                                        <circle cx="15" cy="10" r="6" fill="#c2185b"/>
                                        <circle cx="35" cy="10" r="6" fill="#c2185b"/>
                                        <path d="M 15 10 Q 25 -5 35 10" fill="none" stroke="#c2185b" stroke-width="3"/>
                                      </g>
                                      
                                      <!-- Sunglasses (left side) -->
                                      <g transform="translate(100, 280) rotate(-25)">
                                        <ellipse cx="0" cy="0" rx="20" ry="15" fill="#424242"/>
                                        <ellipse cx="45" cy="0" rx="20" ry="15" fill="#424242"/>
                                        <line x1="20" y1="0" x2="25" y2="0" stroke="#424242" stroke-width="4"/>
                                        <path d="M -20 0 Q -25 -5 -30 -8" stroke="#424242" stroke-width="3" fill="none"/>
                                        <path d="M 65 0 Q 70 -5 75 -8" stroke="#424242" stroke-width="3" fill="none"/>
                                      </g>
                                      
                                      <!-- Large Magnifying Glass with Watch inside -->
                                      <g transform="translate(280, 280)">
                                        <!-- Magnifying glass circle -->
                                        <circle cx="0" cy="0" r="110" fill="white" stroke="#ff9800" stroke-width="12"/>
                                        <circle cx="0" cy="0" r="110" fill="#fff3e0" opacity="0.3"/>
                                        
                                        <!-- Watch inside magnifying glass (enlarged) -->
                                        <g transform="scale(1.8)">
                                          <!-- Watch body -->
                                          <circle cx="0" cy="0" r="28" fill="#1976d2" stroke="#0d47a1" stroke-width="2"/>
                                          <circle cx="0" cy="0" r="24" fill="white"/>
                                          
                                          <!-- Watch numbers -->
                                          <text x="0" y="-15" text-anchor="middle" font-size="8" fill="#333">12</text>
                                          <text x="15" y="5" text-anchor="middle" font-size="8" fill="#333">3</text>
                                          <text x="0" y="20" text-anchor="middle" font-size="8" fill="#333">6</text>
                                          <text x="-15" y="5" text-anchor="middle" font-size="8" fill="#333">9</text>
                                          
                                          <!-- Watch hands -->
                                          <line x1="0" y1="0" x2="0" y2="-12" stroke="#333" stroke-width="2" stroke-linecap="round"/>
                                          <line x1="0" y1="0" x2="8" y2="5" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
                                          <circle cx="0" cy="0" r="2" fill="#ff9800"/>
                                          
                                          <!-- Watch straps -->
                                          <rect x="-6" y="28" width="12" height="15" rx="2" fill="#1976d2"/>
                                          <rect x="-6" y="-43" width="12" height="15" rx="2" fill="#1976d2"/>
                                        </g>
                                        
                                        <!-- Found checkmark -->
                                        <circle cx="50" cy="-50" r="25" fill="#4caf50"/>
                                        <path d="M 40 -50 L 47 -43 L 62 -58" stroke="white" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                                        
                                        <!-- Magnifying glass handle -->
                                        <rect x="75" y="75" width="18" height="90" rx="9" fill="#ff9800"/>
                                        <rect x="78" y="78" width="12" height="84" rx="6" fill="#ffb74d"/>
                                      </g>
                                      
                                      <!-- FOUND text -->
                                      <text x="300" y="520" font-size="36" font-weight="bold" fill="#4caf50" text-anchor="middle" font-family="Arial, sans-serif">FOUND!</text>
                                      
                                      <!-- Sparkles -->
                                      <circle cx="150" cy="200" r="4" fill="#ffd54f"/>
                                      <circle cx="165" cy="190" r="3" fill="#ffeb3b"/>
                                      <circle cx="450" cy="210" r="4" fill="#ffd54f"/>
                                      <circle cx="470" cy="200" r="3" fill="#ffeb3b"/>
                                      <circle cx="180" cy="470" r="4" fill="#ffd54f"/>
                                      <circle cx="440" cy="360" r="3" fill="#ffeb3b"/>
                                    </svg>
                                `)}`}
                                alt="Lost and Found"
                                sx={{
                                    width: '100%',
                                    maxWidth: 450,
                                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
