'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Button, keyframes } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
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

const steps = [
    {
        number: 1,
        title: 'File a Claim',
        description: 'Customer files a claim for their item left at the organization location',
        icon: DescriptionIcon,
        color: '#3f6ee3',
        lightColor: '#e3ecff',
    },
    {
        number: 2,
        title: 'Organization Is Notified',
        description: 'Claim displays in the dashboard at the organization location',
        icon: NotificationsActiveIcon,
        color: '#ff9800',
        lightColor: '#fff3e0',
    },
    {
        number: 3,
        title: 'Item Is Found',
        description: 'Staff updates claim as item found via dashboard, customer is notified',
        icon: CheckCircleIcon,
        color: '#4caf50',
        lightColor: '#e8f5e9',
    },
    {
        number: 4,
        title: 'Payment',
        description: 'Customer pays shipping service desired, system creates a label in organization dashboard',
        icon: PaymentIcon,
        color: '#b52041',
        lightColor: '#fce4ec',
    },
    {
        number: 5,
        title: 'Item Is Shipped',
        description: 'Staff at organization location ships the item utilizing the shipping label created by our system',
        icon: LocalShippingIcon,
        color: '#0044af',
        lightColor: '#e3f2fd',
    },
    {
        number: 6,
        title: 'Happiness',
        description: 'Item is delivered and in the hands of the customer. Claim automatically updates, no more follow ups from staff.',
        icon: SentimentVerySatisfiedIcon,
        color: '#7c9cff',
        lightColor: '#f3f5ff',
    },
];

export default function HowItWorksSection() {
    return (
        <Box
            id="how-it-works"
            sx={{
                py: 10,
                background: 'linear-gradient(180deg, #ffffff 0%, #f0f4ff 50%, #ffffff 100%)',
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
                        radial-gradient(circle at 20% 30%, rgba(63, 110, 227, 0.08) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(181, 32, 65, 0.08) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(124, 156, 255, 0.05) 0%, transparent 60%)
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
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233f6ee3' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    opacity: 0.4,
                    pointerEvents: 'none',
                },
            }}
        >
            {/* Decorative lost items - sketches */}
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="5" width="40" height="85" rx="8" fill="none" stroke="rgba(63, 110, 227, 0.15)" stroke-width="2"/>
                        <rect x="15" y="15" width="30" height="60" rx="2" fill="none" stroke="rgba(63, 110, 227, 0.12)" stroke-width="1.5"/>
                        <circle cx="30" cy="82" r="4" fill="none" stroke="rgba(63, 110, 227, 0.15)" stroke-width="1.5"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '15%',
                    right: '5%',
                    width: '60px',
                    opacity: 0.6,
                    animation: `${float} 4s ease-in-out infinite`,
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="80" height="50" rx="5" fill="none" stroke="rgba(181, 32, 65, 0.15)" stroke-width="2"/>
                        <rect x="15" y="15" width="70" height="18" rx="3" fill="none" stroke="rgba(181, 32, 65, 0.12)" stroke-width="1.5"/>
                        <circle cx="75" cy="45" r="5" fill="none" stroke="rgba(181, 32, 65, 0.15)" stroke-width="2"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '3%',
                    width: '90px',
                    opacity: 0.6,
                    animation: `${rotate} 30s linear infinite`,
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            {/* Additional decorative elements */}
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
                        <rect x="15" y="20" width="50" height="65" rx="8" fill="none" stroke="rgba(255, 152, 0, 0.12)" stroke-width="2"/>
                        <rect x="25" y="30" width="30" height="35" rx="4" fill="none" stroke="rgba(255, 152, 0, 0.1)" stroke-width="1.5"/>
                        <circle cx="28" cy="15" r="6" fill="none" stroke="rgba(255, 152, 0, 0.12)" stroke-width="1.5"/>
                        <circle cx="52" cy="15" r="6" fill="none" stroke="rgba(255, 152, 0, 0.12)" stroke-width="1.5"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '45%',
                    left: '8%',
                    width: '70px',
                    opacity: 0.5,
                    animation: `${float} 5s ease-in-out infinite 1s`,
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="5" width="80" height="55" rx="3" fill="none" stroke="rgba(76, 175, 80, 0.12)" stroke-width="2"/>
                        <rect x="5" y="60" width="90" height="8" rx="2" fill="none" stroke="rgba(76, 175, 80, 0.1)" stroke-width="2"/>
                        <rect x="20" y="15" width="60" height="40" rx="2" fill="none" stroke="rgba(76, 175, 80, 0.1)" stroke-width="1.5"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '60%',
                    right: '10%',
                    width: '85px',
                    opacity: 0.5,
                    animation: `${rotate} 35s linear infinite reverse`,
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
            <Box
                component="img"
                src={`data:image/svg+xml,${encodeURIComponent(`
                    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="15" fill="none" stroke="rgba(124, 156, 255, 0.15)" stroke-width="2"/>
                        <circle cx="25" cy="25" r="8" fill="none" stroke="rgba(124, 156, 255, 0.12)" stroke-width="1.5"/>
                        <line x1="35" y1="25" x2="70" y2="25" stroke="rgba(124, 156, 255, 0.15)" stroke-width="2"/>
                    </svg>
                `)}`}
                sx={{
                    position: 'absolute',
                    top: '8%',
                    left: '12%',
                    width: '65px',
                    opacity: 0.5,
                    animation: `${float} 6s ease-in-out infinite 2s`,
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
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 800,
                    }}
                >
                    So, how does this work? 🔍
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 8, maxWidth: 800, mx: 'auto', fontSize: { xs: '1rem', md: '1.25rem' } }}
                >
                    In a nutshell, fairly simple. We simplified the process for organizations and their staff who handle lost and found items, but also for the customers that are looking for their items left behind.
                </Typography>

                <Grid container spacing={4}>
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        background: `linear-gradient(135deg, ${step.lightColor} 0%, white 100%)`,
                                        border: 2,
                                        borderColor: 'transparent',
                                        borderRadius: 4,
                                        position: 'relative',
                                        overflow: 'visible',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                            borderColor: step.color,
                                            transform: 'translateY(-12px) scale(1.02)',
                                            boxShadow: `0 12px 40px ${step.color}30`,
                                        },
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: -2,
                                            left: -2,
                                            right: -2,
                                            bottom: -2,
                                            background: `linear-gradient(135deg, ${step.color} 0%, ${step.lightColor} 100%)`,
                                            borderRadius: 4,
                                            zIndex: -1,
                                            opacity: 0,
                                            transition: 'opacity 0.4s',
                                        },
                                        '&:hover::before': {
                                            opacity: 0.1,
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: 4, textAlign: 'center', position: 'relative' }}>
                                        <Box
                                            sx={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: '50%',
                                                bgcolor: step.color,
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 800,
                                                fontSize: '1.5rem',
                                                position: 'absolute',
                                                top: -25,
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                boxShadow: `0 4px 20px ${step.color}40`,
                                                border: '4px solid white',
                                            }}
                                        >
                                            {step.number}
                                        </Box>
                                        <Avatar
                                            sx={{
                                                width: 90,
                                                height: 90,
                                                bgcolor: step.color,
                                                mx: 'auto',
                                                mt: 4,
                                                mb: 3,
                                                boxShadow: `0 8px 24px ${step.color}30`,
                                                transition: 'all 0.3s',
                                                '&:hover': {
                                                    transform: 'scale(1.1) rotate(5deg)',
                                                },
                                            }}
                                        >
                                            <IconComponent sx={{ fontSize: 48 }} />
                                        </Avatar>
                                        <Typography variant="h5" gutterBottom fontWeight={700} sx={{ color: step.color, mb: 2 }}>
                                            {step.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
                                            {step.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>

                <Box sx={{ textAlign: 'center', mt: 8 }}>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => window.open('https://portal.traista.com/claim', '_blank')}
                        sx={{
                            px: 6,
                            py: 2,
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            borderRadius: '8px',
                            boxShadow: '0 8px 24px rgba(63, 110, 227, 0.3)',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 12px 32px rgba(63, 110, 227, 0.4)',
                            },
                            transition: 'all 0.3s',
                        }}
                    >
                        File A Claim
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
