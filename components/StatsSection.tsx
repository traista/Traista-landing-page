'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, keyframes } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import BadgeIcon from '@mui/icons-material/Badge';

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
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

const pulse = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
`;

const stats = [
    { number: 2547, label: 'Laptops', icon: LaptopMacIcon },
    { number: 1572, label: 'Cell Phones', icon: PhoneAndroidIcon },
    { number: 6538, label: 'Keys and Jewelry', icon: VpnKeyIcon },
    { number: 8759, label: 'IDs, Passports', icon: BadgeIcon },
];

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <div ref={elementRef}>{count.toLocaleString()}</div>;
}

export default function StatsSection() {
    return (
        <Box sx={{
            py: 12,
            background: 'linear-gradient(135deg, #0044af 0%, #7c9cff 100%)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)',
                pointerEvents: 'none',
            }
        }}>
            {/* Decorative lost items - sketches */}
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="5" width="80" height="55" rx="3" fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-width="2"/>
                        <rect x="5" y="60" width="90" height="8" rx="2" fill="none" stroke="rgba(255, 255, 255, 0.2)" stroke-width="2"/>
                        <rect x="20" y="15" width="60" height="40" rx="2" fill="none" stroke="rgba(255, 255, 255, 0.18)" stroke-width="1.5"/>
                        <line x1="50" y1="15" x2="50" y2="55" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '8%',
                    left: '6%',
                    width: '115px',
                    opacity: 0.7,
                    animation: `${rotate} 25s linear infinite`,
                    pointerEvents: 'none',
                }}
            />
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 100 65" xmlns="http://www.w3.org/2000/svg">
                        <rect x="5" y="5" width="90" height="55" rx="5" fill="none" stroke="rgba(255, 255, 255, 0.22)" stroke-width="2"/>
                        <circle cx="25" cy="25" r="10" fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1.5"/>
                        <line x1="42" y1="20" x2="85" y2="20" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1.5"/>
                        <line x1="42" y1="28" x2="75" y2="28" stroke="rgba(255, 255, 255, 0.18)" stroke-width="1.5"/>
                        <line x1="15" y1="44" x2="85" y2="44" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    bottom: '12%',
                    right: '7%',
                    width: '95px',
                    opacity: 0.6,
                    animation: `${pulse} 3s ease-in-out infinite`,
                    pointerEvents: 'none',
                }}
            />
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="15" fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-width="2"/>
                        <circle cx="25" cy="25" r="8" fill="none" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1.5"/>
                        <line x1="35" y1="25" x2="70" y2="25" stroke="rgba(255, 255, 255, 0.25)" stroke-width="2"/>
                        <line x1="42" y1="20" x2="42" y2="30" stroke="rgba(255, 255, 255, 0.25)" stroke-width="2"/>
                        <line x1="52" y1="20" x2="52" y2="30" stroke="rgba(255, 255, 255, 0.25)" stroke-width="2"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '12%',
                    width: '75px',
                    opacity: 0.6,
                    animation: `${rotate} 20s linear infinite reverse`,
                    pointerEvents: 'none',
                }}
            />
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                    variant="h2"
                    align="center"
                    gutterBottom
                    sx={{
                        mb: 2,
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        fontWeight: 900,
                    }}
                >
                    Items Reunited 🎉
                </Typography>
                <Typography variant="h6" align="center" sx={{ mb: 8, opacity: 0.95, fontSize: '1.3rem' }}>
                    Successfully shipped to their happy owners
                </Typography>

                <Grid container spacing={4}>
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <Grid item xs={6} md={3} key={index}>
                                <Box
                                    sx={{
                                        textAlign: 'center',
                                        animation: `${fadeInScale} 0.6s ease-out ${index * 0.1}s backwards`,
                                        p: 3,
                                        borderRadius: 4,
                                        backdropFilter: 'blur(10px)',
                                        backgroundColor: 'rgba(255,255,255,0.15)',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            transform: 'translateY(-8px) scale(1.05)',
                                            backgroundColor: 'rgba(255,255,255,0.25)',
                                            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                                        }
                                    }}
                                >
                                    <IconComponent sx={{
                                        fontSize: 60,
                                        mb: 2,
                                        opacity: 1,
                                    }} />
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontWeight: 900,
                                            mb: 1,
                                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                                        }}
                                    >
                                        <CountUp end={stat.number} />
                                    </Typography>
                                    <Typography variant="h6" sx={{ opacity: 0.9 }}>
                                        {stat.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
}
