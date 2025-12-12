'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Button, keyframes } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

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
    opacity: 0.4;
  }
  50% {
    opacity: 0.7;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
`;

export default function AboutSection() {
    return (
        <Box
            id="about"
            sx={{
                py: 10,
                background: 'linear-gradient(180deg, #ffffff 0%, #fef6f8 50%, #ffffff 100%)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
                        radial-gradient(circle at 30% 20%, rgba(181, 32, 65, 0.06) 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(63, 110, 227, 0.06) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(124, 156, 255, 0.04) 0%, transparent 60%)
                    `,
                    pointerEvents: 'none',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b52041' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    opacity: 0.3,
                    pointerEvents: 'none',
                },
            }}
        >
            {/* Decorative lost items - sketches */}
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="5" width="40" height="85" rx="8" fill="none" stroke="rgba(63, 110, 227, 0.18)" stroke-width="2"/>
                        <rect x="15" y="15" width="30" height="60" rx="2" fill="none" stroke="rgba(63, 110, 227, 0.15)" stroke-width="1.5"/>
                        <circle cx="30" cy="82" r="4" fill="none" stroke="rgba(63, 110, 227, 0.2)" stroke-width="1.5"/>
                        <line x1="20" y1="10" x2="40" y2="10" stroke="rgba(63, 110, 227, 0.15)" stroke-width="1.5"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '12%',
                    right: '6%',
                    width: '70px',
                    opacity: 0.7,
                    animation: `${float} 5s ease-in-out infinite`,
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="80" height="50" rx="5" fill="none" stroke="rgba(181, 32, 65, 0.18)" stroke-width="2"/>
                        <rect x="15" y="15" width="70" height="18" rx="3" fill="none" stroke="rgba(181, 32, 65, 0.15)" stroke-width="1.5"/>
                        <circle cx="75" cy="45" r="5" fill="none" stroke="rgba(181, 32, 65, 0.22)" stroke-width="2"/>
                        <line x1="15" y1="40" x2="60" y2="40" stroke="rgba(181, 32, 65, 0.12)" stroke-width="1"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    bottom: '22%',
                    left: '4%',
                    width: '125px',
                    opacity: 0.6,
                    animation: `${float} 6s ease-in-out infinite 1s`,
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
                        <rect x="15" y="20" width="50" height="65" rx="8" fill="none" stroke="rgba(124, 156, 255, 0.18)" stroke-width="2"/>
                        <rect x="25" y="30" width="30" height="35" rx="4" fill="none" stroke="rgba(124, 156, 255, 0.15)" stroke-width="1.5"/>
                        <circle cx="28" cy="15" r="6" fill="none" stroke="rgba(124, 156, 255, 0.2)" stroke-width="1.5"/>
                        <circle cx="52" cy="15" r="6" fill="none" stroke="rgba(124, 156, 255, 0.2)" stroke-width="1.5"/>
                        <path d="M 28 15 Q 40 5 52 15" fill="none" stroke="rgba(124, 156, 255, 0.2)" stroke-width="2"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '58%',
                    right: '8%',
                    width: '90px',
                    opacity: 0.6,
                    animation: `${float} 7s ease-in-out infinite 2s`,
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={`data:image/svg+xml,${encodeURIComponent(`
                                <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                  <!-- Rounded background -->
                                  <rect x="50" y="50" width="500" height="500" rx="80" fill="#e3f2fd" opacity="0.95"/>
                                  
                                  <!-- Central platform/system representation -->
                                  <g transform="translate(300, 280)">
                                    <!-- Main platform circle -->
                                    <circle cx="0" cy="0" r="80" fill="#1976d2"/>
                                    <circle cx="0" cy="0" r="65" fill="#42a5f5"/>
                                    <circle cx="0" cy="0" r="50" fill="white"/>
                                    
                                    <!-- Traista T logo in center -->
                                    <text x="0" y="20" font-size="60" font-weight="bold" fill="#1976d2" text-anchor="middle" font-family="Arial, sans-serif">T</text>
                                  </g>
                                  
                                  <!-- Organizations connecting to platform (top) -->
                                  <g transform="translate(300, 120)">
                                    <!-- Building icon -->
                                    <rect x="-30" y="-35" width="60" height="50" rx="4" fill="#ff9800"/>
                                    <rect x="-25" y="-30" width="20" height="15" rx="2" fill="#fff3e0"/>
                                    <rect x="5" y="-30" width="20" height="15" rx="2" fill="#fff3e0"/>
                                    <rect x="-25" y="-10" width="20" height="15" rx="2" fill="#fff3e0"/>
                                    <rect x="5" y="-10" width="20" height="15" rx="2" fill="#fff3e0"/>
                                    <rect x="-10" y="10" width="20" height="8" rx="1" fill="#fff3e0"/>
                                    
                                    <!-- Connection line -->
                                    <line x1="0" y1="20" x2="0" y2="80" stroke="#1976d2" stroke-width="4" stroke-dasharray="5,5"/>
                                    <circle cx="0" cy="20" r="6" fill="#ff9800"/>
                                  </g>
                                  
                                  <!-- Travelers/Customers connecting (bottom) -->
                                  <g transform="translate(300, 450)">
                                    <!-- Group of people representation -->
                                    <circle cx="-25" cy="-10" r="18" fill="#4caf50"/>
                                    <circle cx="0" cy="-10" r="18" fill="#4caf50"/>
                                    <circle cx="25" cy="-10" r="18" fill="#4caf50"/>
                                    
                                    <!-- Happy faces -->
                                    <g fill="white">
                                      <circle cx="-30" cy="-14" r="2"/>
                                      <circle cx="-20" cy="-14" r="2"/>
                                      <path d="M -30 -5 Q -25 -1 -20 -5" stroke="white" stroke-width="2" fill="none"/>
                                      
                                      <circle cx="-5" cy="-14" r="2"/>
                                      <circle cx="5" cy="-14" r="2"/>
                                      <path d="M -5 -5 Q 0 -1 5 -5" stroke="white" stroke-width="2" fill="none"/>
                                      
                                      <circle cx="20" cy="-14" r="2"/>
                                      <circle cx="30" cy="-14" r="2"/>
                                      <path d="M 20 -5 Q 25 -1 30 -5" stroke="white" stroke-width="2" fill="none"/>
                                    </g>
                                    
                                    <!-- Connection line -->
                                    <line x1="0" y1="-30" x2="0" y2="-90" stroke="#1976d2" stroke-width="4" stroke-dasharray="5,5"/>
                                    <circle cx="0" cy="-30" r="6" fill="#4caf50"/>
                                  </g>
                                  
                                  <!-- Lost items flowing (left side) -->
                                  <g transform="translate(140, 280)">
                                    <!-- Items stack -->
                                    <rect x="-25" y="-40" width="50" height="30" rx="5" fill="#e91e63" opacity="0.8"/>
                                    <circle cx="0" cy="-10" r="15" fill="#9c27b0" opacity="0.8"/>
                                    <rect x="-20" y="10" width="40" height="25" rx="4" fill="#ff9800" opacity="0.8"/>
                                    
                                    <!-- Arrow pointing to platform -->
                                    <path d="M 50 0 L 100 0" stroke="#1976d2" stroke-width="5" fill="none"/>
                                    <path d="M 90 -10 L 100 0 L 90 10" fill="#1976d2"/>
                                  </g>
                                  
                                  <!-- Found items returning (right side) -->
                                  <g transform="translate(460, 280)">
                                    <!-- Items with checkmarks -->
                                    <circle cx="0" cy="-30" r="20" fill="#4caf50" opacity="0.9"/>
                                    <path d="M -8 -30 L -2 -23 L 10 -38" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
                                    
                                    <circle cx="-10" cy="10" r="20" fill="#4caf50" opacity="0.9"/>
                                    <path d="M -18 10 L -12 17 L 0 2" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
                                    
                                    <circle cx="15" cy="30" r="20" fill="#4caf50" opacity="0.9"/>
                                    <path d="M 7 30 L 13 37 L 25 22" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
                                    
                                    <!-- Arrow coming from platform -->
                                    <path d="M -100 0 L -50 0" stroke="#4caf50" stroke-width="5" fill="none"/>
                                    <path d="M -60 -10 L -50 0 L -60 10" fill="#4caf50"/>
                                  </g>
                                  
                                  <!-- Smart Tech badge -->
                                  <g transform="translate(450, 140)">
                                    <rect x="-45" y="-20" width="90" height="40" rx="20" fill="#9c27b0"/>
                                    <text x="0" y="8" font-size="18" font-weight="bold" fill="white" text-anchor="middle" font-family="Arial, sans-serif">SMART</text>
                                  </g>
                                  
                                  <!-- Free badge -->
                                  <g transform="translate(150, 140)">
                                    <circle cx="0" cy="0" r="35" fill="#4caf50"/>
                                    <text x="0" y="-5" font-size="20" font-weight="bold" fill="white" text-anchor="middle" font-family="Arial, sans-serif">FREE</text>
                                    <text x="0" y="15" font-size="14" fill="white" text-anchor="middle" font-family="Arial, sans-serif">Service</text>
                                  </g>
                                  
                                  <!-- Decorative elements -->
                                  <circle cx="120" cy="480" r="5" fill="#ffd54f"/>
                                  <circle cx="480" cy="480" r="5" fill="#ffd54f"/>
                                  <circle cx="100" cy="200" r="4" fill="#ffeb3b"/>
                                  <circle cx="500" cy="360" r="4" fill="#ffeb3b"/>
                                </svg>
                            `)}`}
                            alt="Traista Platform"
                            sx={{
                                width: '100%',
                                maxWidth: 500,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h2"
                            gutterBottom
                            sx={{
                                fontSize: { xs: '2rem', md: '3rem' },
                                fontWeight: 800,
                            }}
                        >
                            What is Traista? 💡
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            paragraph
                            sx={{
                                fontSize: { xs: '1.1rem', md: '1.3rem' },
                                fontWeight: 600,
                                lineHeight: 1.6,
                            }}
                        >
                            A modern lost and found platform born from the frustration of outdated recovery processes.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                            From airports to hotels, resorts and amusement parks - our intelligent platform has helped recover thousands of items across the US and internationally. All for free.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            href="https://traista.com/organizations/"
                            target="_blank"
                            sx={{
                                mt: 3,
                                px: 4,
                                py: 1.5,
                                fontSize: '1.05rem',
                                fontWeight: 700,
                                borderRadius: '8px',
                                boxShadow: '0 8px 24px rgba(181, 32, 65, 0.3)',
                                '&:hover': {
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 12px 32px rgba(181, 32, 65, 0.4)',
                                },
                                transition: 'all 0.3s',
                            }}
                        >
                            Find Out More
                        </Button>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 10, textAlign: 'center' }}>
                    <Typography
                        variant="h3"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '1.75rem', md: '2.5rem' },
                            fontWeight: 700,
                        }}
                    >
                        Our Mission
                    </Typography>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '1.2rem', md: '1.4rem' },
                            fontWeight: 500,
                            my: 3,
                            maxWidth: 800,
                            mx: 'auto',
                        }}
                    >
                        Reuniting people with their belongings through intelligent technology
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: 3,
                            my: 5,
                        }}
                    >
                        {['Free Service', 'Real-Time Tracking', 'Intuitive', 'Savings', 'Customer Satisfaction'].map((item, index) => (
                            <Box
                                key={item}
                                sx={{
                                    color: index % 2 === 0 ? '#3f6ee3' : '#10b981',
                                    px: 3,
                                    py: 1.5,
                                    border: '2px solid',
                                    borderColor: index % 2 === 0 ? '#3f6ee3' : '#10b981',
                                    borderRadius: '50px',
                                    fontWeight: 700,
                                    fontSize: '1.1rem',
                                    backgroundColor: index % 2 === 0
                                        ? 'rgba(63, 110, 227, 0.05)'
                                        : 'rgba(16, 185, 129, 0.05)',
                                }}
                            >
                                {item}
                            </Box>
                        ))}
                    </Box>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            maxWidth: 750,
                            mx: 'auto',
                            mt: 5,
                            fontSize: '1.05rem',
                            lineHeight: 1.8,
                            px: { xs: 2, md: 0 },
                        }}
                    >
                        Started in 2015 from a personal travel mishap, we've grown into a trusted solution for organizations worldwide. Every feature we build is shaped by customer feedback and our commitment to continuous improvement.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
