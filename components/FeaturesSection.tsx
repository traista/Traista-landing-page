'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, keyframes } from '@mui/material';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ForumIcon from '@mui/icons-material/Forum';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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
    opacity: 0.4;
  }
  50% {
    opacity: 0.7;
  }
`;

const features = [
    {
        title: 'ZERO COST 💸',
        icon: MoneyOffIcon,
        gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
        bgColor: 'rgba(16, 185, 129, 0.1)',
        items: [
            'Completely free forever',
            'No setup fees, no subscriptions',
            'Dedicated support at no charge',
        ],
    },
    {
        title: 'SIMPLE TO USE 👍',
        icon: TouchAppIcon,
        gradient: 'linear-gradient(135deg, #3f6ee3 0%, #7c9cff 100%)',
        bgColor: 'rgba(63, 110, 227, 0.1)',
        items: [
            'Get started in under 5 minutes',
            'Intuitive for staff and travelers',
            'Continuous improvements, always free',
        ],
    },
    {
        title: 'SMART & FAST ⚡',
        icon: TrendingUpIcon,
        gradient: 'linear-gradient(135deg, #b52041 0%, #e63958 100%)',
        bgColor: 'rgba(181, 32, 65, 0.1)',
        items: [
            'Smart matching reunites items faster',
            'Automated notifications & shipping',
            'Reduces manual work by 70%',
        ],
    },
];

export default function FeaturesSection() {
    return (
        <Box sx={{
            py: 12,
            background: 'linear-gradient(180deg, #f8f9ff 0%, #fafafa 100%)',
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
                    radial-gradient(circle at 20% 20%, rgba(63, 110, 227, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(181, 32, 65, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 50% 50%, rgba(124, 156, 255, 0.05) 0%, transparent 70%)
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
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233f6ee3' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                opacity: 0.6,
                pointerEvents: 'none',
            }
        }}>
            {/* Decorative lost items - sketches */}
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
                        <rect x="15" y="20" width="50" height="65" rx="8" fill="none" stroke="rgba(63, 110, 227, 0.25)" stroke-width="2"/>
                        <rect x="25" y="30" width="30" height="35" rx="4" fill="none" stroke="rgba(63, 110, 227, 0.2)" stroke-width="1.5"/>
                        <circle cx="28" cy="15" r="6" fill="none" stroke="rgba(63, 110, 227, 0.25)" stroke-width="1.5"/>
                        <circle cx="52" cy="15" r="6" fill="none" stroke="rgba(63, 110, 227, 0.25)" stroke-width="1.5"/>
                        <path d="M 28 15 Q 40 5 52 15" fill="none" stroke="rgba(63, 110, 227, 0.25)" stroke-width="2"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '8%',
                    width: '85px',
                    opacity: 0.6,
                    animation: `${rotate} 30s linear infinite`,
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="5" width="40" height="85" rx="8" fill="none" stroke="rgba(181, 32, 65, 0.22)" stroke-width="2"/>
                        <rect x="15" y="15" width="30" height="60" rx="2" fill="none" stroke="rgba(181, 32, 65, 0.18)" stroke-width="1.5"/>
                        <circle cx="30" cy="82" r="4" fill="none" stroke="rgba(181, 32, 65, 0.25)" stroke-width="1.5"/>
                        <line x1="20" y1="10" x2="40" y2="10" stroke="rgba(181, 32, 65, 0.2)" stroke-width="1.5"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '6%',
                    width: '65px',
                    opacity: 0.6,
                    animation: `${pulse} 4s ease-in-out infinite`,
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="80" height="50" rx="5" fill="none" stroke="rgba(63, 110, 227, 0.22)" stroke-width="2"/>
                        <rect x="15" y="15" width="70" height="18" rx="3" fill="none" stroke="rgba(63, 110, 227, 0.18)" stroke-width="1.5"/>
                        <circle cx="75" cy="45" r="5" fill="none" stroke="rgba(63, 110, 227, 0.25)" stroke-width="2"/>
                        <line x1="15" y1="40" x2="60" y2="40" stroke="rgba(63, 110, 227, 0.15)" stroke-width="1"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '45%',
                    left: '5%',
                    width: '120px',
                    opacity: 0.6,
                    animation: `${rotate} 20s linear infinite reverse`,
                    pointerEvents: 'none',
                    zIndex: 0,
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
                    Why Choose Traista? 🚀
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    sx={{ mb: 8, color: 'text.secondary', maxWidth: '700px', mx: 'auto' }}
                >
                    Everything you need to manage lost & found items efficiently and delightfully
                </Typography>

                <Grid container spacing={4}>
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <Grid item xs={12} md={4} key={index}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        borderRadius: 5,
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        animation: `${slideIn} 0.6s ease-out ${index * 0.15}s backwards`,
                                        position: 'relative',
                                        overflow: 'hidden',
                                        background: 'white',
                                        border: '1px solid rgba(0,0,0,0.06)',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '6px',
                                            background: feature.gradient,
                                        },
                                        '&:hover': {
                                            transform: 'translateY(-12px)',
                                            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 4 }}>
                                        <Box
                                            sx={{
                                                mb: 3,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    background: feature.gradient,
                                                    color: 'white',
                                                    p: 2,
                                                    borderRadius: 3,
                                                    display: 'inline-flex',
                                                    mb: 2,
                                                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                                                }}
                                            >
                                                <IconComponent sx={{ fontSize: 40 }} />
                                            </Box>
                                            <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
                                                {feature.title}
                                            </Typography>
                                        </Box>
                                        <Box component="ul" sx={{ pl: 2, m: 0, listStyle: 'none' }}>
                                            {feature.items.map((item, i) => (
                                                <Typography
                                                    component="li"
                                                    key={i}
                                                    variant="body1"
                                                    sx={{
                                                        mb: 2,
                                                        color: 'text.secondary',
                                                        pl: 2,
                                                        position: 'relative',
                                                        '&::before': {
                                                            content: '"✓"',
                                                            position: 'absolute',
                                                            left: -8,
                                                            fontWeight: 'bold',
                                                            background: feature.gradient,
                                                            WebkitBackgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent',
                                                        }
                                                    }}
                                                >
                                                    {item}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
}
