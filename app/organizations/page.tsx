'use client';

import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import theme from '../../theme';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function OrganizationsPage() {
    // Sketch-style decorative items
    const laptopSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 140'%3E%3Crect x='20' y='10' width='160' height='100' fill='none' stroke='%233f6ee3' stroke-width='3' rx='5'/%3E%3Crect x='10' y='110' width='180' height='20' fill='none' stroke='%233f6ee3' stroke-width='3' rx='3'/%3E%3Cline x1='100' y1='110' x2='100' y2='130' stroke='%233f6ee3' stroke-width='2'/%3E%3C/svg%3E`;

    const phoneSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 140'%3E%3Crect x='10' y='10' width='60' height='120' fill='none' stroke='%2310b981' stroke-width='2.5' rx='8'/%3E%3Ccircle cx='40' cy='115' r='8' fill='none' stroke='%2310b981' stroke-width='2'/%3E%3Cline x1='30' y1='25' x2='50' y2='25' stroke='%2310b981' stroke-width='2'/%3E%3C/svg%3E`;

    const backpackSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 140'%3E%3Cpath d='M30 40 L30 120 L90 120 L90 40 Z' fill='none' stroke='%23b52041' stroke-width='2.5'/%3E%3Cpath d='M35 40 L35 20 L85 20 L85 40' fill='none' stroke='%23b52041' stroke-width='2.5'/%3E%3Cpath d='M40 50 L40 80 M80 50 L80 80' stroke='%23b52041' stroke-width='2'/%3E%3Ccircle cx='45' cy='90' r='4' fill='none' stroke='%23b52041' stroke-width='2'/%3E%3Ccircle cx='75' cy='90' r='4' fill='none' stroke='%23b52041' stroke-width='2'/%3E%3C/svg%3E`;

    const walletSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 90'%3E%3Crect x='10' y='20' width='100' height='60' fill='none' stroke='%233f6ee3' stroke-width='2.5' rx='5'/%3E%3Crect x='70' y='35' width='30' height='30' fill='none' stroke='%233f6ee3' stroke-width='2.5' rx='3'/%3E%3Ccircle cx='85' cy='50' r='4' fill='%233f6ee3'/%3E%3C/svg%3E`;

    const keysSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 140'%3E%3Ccircle cx='50' cy='30' r='20' fill='none' stroke='%2310b981' stroke-width='2.5'/%3E%3Ccircle cx='50' cy='30' r='10' fill='none' stroke='%2310b981' stroke-width='2'/%3E%3Cline x1='50' y1='50' x2='50' y2='120' stroke='%2310b981' stroke-width='3'/%3E%3Crect x='40' y='80' width='20' height='8' fill='none' stroke='%2310b981' stroke-width='2'/%3E%3Crect x='40' y='100' width='20' height='8' fill='none' stroke='%2310b981' stroke-width='2'/%3E%3C/svg%3E`;

    const idCardSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 90'%3E%3Crect x='10' y='15' width='120' height='70' fill='none' stroke='%23b52041' stroke-width='2.5' rx='5'/%3E%3Ccircle cx='35' cy='45' r='15' fill='none' stroke='%23b52041' stroke-width='2'/%3E%3Cline x1='60' y1='35' x2='110' y2='35' stroke='%23b52041' stroke-width='2'/%3E%3Cline x1='60' y1='50' x2='100' y2='50' stroke='%23b52041' stroke-width='2'/%3E%3Cline x1='60' y1='65' x2='90' y2='65' stroke='%23b52041' stroke-width='2'/%3E%3C/svg%3E`;

    const sunglassesSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 50'%3E%3Cellipse cx='30' cy='25' rx='22' ry='15' fill='none' stroke='%237c9cff' stroke-width='2'/%3E%3Cellipse cx='90' cy='25' rx='22' ry='15' fill='none' stroke='%237c9cff' stroke-width='2'/%3E%3Cpath d='M 52 25 Q 60 20 68 25' fill='none' stroke='%237c9cff' stroke-width='2'/%3E%3Cline x1='8' y1='25' x2='2' y2='28' stroke='%237c9cff' stroke-width='2'/%3E%3Cline x1='112' y1='25' x2='118' y2='28' stroke='%237c9cff' stroke-width='2'/%3E%3C/svg%3E`;

    const cameraSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 80'%3E%3Crect x='10' y='20' width='80' height='50' rx='5' fill='none' stroke='%233f6ee3' stroke-width='2'/%3E%3Ccircle cx='55' cy='45' r='18' fill='none' stroke='%233f6ee3' stroke-width='2'/%3E%3Ccircle cx='55' cy='45' r='12' fill='none' stroke='%233f6ee3' stroke-width='1.5'/%3E%3Crect x='35' y='10' width='20' height='10' rx='2' fill='none' stroke='%233f6ee3' stroke-width='1.5'/%3E%3Ccircle cx='22' cy='32' r='4' fill='none' stroke='%233f6ee3' stroke-width='1.5'/%3E%3C/svg%3E`;

    const headphonesSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 90'%3E%3Cpath d='M 20 50 Q 20 15 50 15 Q 80 15 80 50' fill='none' stroke='%23b52041' stroke-width='2.5'/%3E%3Crect x='10' y='48' width='18' height='28' rx='4' fill='none' stroke='%23b52041' stroke-width='2'/%3E%3Crect x='72' y='48' width='18' height='28' rx='4' fill='none' stroke='%23b52041' stroke-width='2'/%3E%3Crect x='14' y='52' width='10' height='20' rx='2' fill='none' stroke='%23b52041' stroke-width='1.5'/%3E%3Crect x='76' y='52' width='10' height='20' rx='2' fill='none' stroke='%23b52041' stroke-width='1.5'/%3E%3C/svg%3E`;

    const watchSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 70 90'%3E%3Crect x='15' y='25' width='40' height='40' rx='8' fill='none' stroke='%2310b981' stroke-width='2'/%3E%3Ccircle cx='35' cy='45' r='15' fill='none' stroke='%2310b981' stroke-width='1.5'/%3E%3Cline x1='35' y1='45' x2='35' y2='35' stroke='%2310b981' stroke-width='2'/%3E%3Cline x1='35' y1='45' x2='42' y2='45' stroke='%2310b981' stroke-width='2'/%3E%3Crect x='25' y='15' width='20' height='10' rx='2' fill='none' stroke='%2310b981' stroke-width='1.5'/%3E%3Crect x='25' y='65' width='20' height='10' rx='2' fill='none' stroke='%2310b981' stroke-width='1.5'/%3E%3C/svg%3E`;

    const passportSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 100'%3E%3Crect x='10' y='10' width='60' height='80' rx='3' fill='none' stroke='%237c9cff' stroke-width='2'/%3E%3Ccircle cx='40' cy='35' r='12' fill='none' stroke='%237c9cff' stroke-width='1.5'/%3E%3Cline x1='25' y1='55' x2='55' y2='55' stroke='%237c9cff' stroke-width='1.5'/%3E%3Cline x1='25' y1='63' x2='50' y2='63' stroke='%237c9cff' stroke-width='1.5'/%3E%3Cline x1='25' y1='71' x2='55' y2='71' stroke='%237c9cff' stroke-width='1.5'/%3E%3Cline x1='25' y1='79' x2='45' y2='79' stroke='%237c9cff' stroke-width='1.5'/%3E%3C/svg%3E`;

    const features = [
        {
            icon: <DashboardIcon sx={{ fontSize: 40 }} />,
            title: 'Custom Link for Forms',
            description: 'Get a custom branded link for your organization. Customers use this mobile-ready form to file claims easily.',
            color: '#10b981',
        },
        {
            icon: <NotificationsActiveIcon sx={{ fontSize: 40 }} />,
            title: 'Dashboard & Notifications',
            description: 'Claims appear on your dashboard instantly. Get real-time notifications for every new claim at your location.',
            color: '#3f6ee3',
        },
        {
            icon: <ChatBubbleOutlineIcon sx={{ fontSize: 40 }} />,
            title: 'Built-in Communication',
            description: 'Communicate directly from the dashboard. Ask for details, mark items as found or not found - all in one place.',
            color: '#b52041',
        },
        {
            icon: <PaymentIcon sx={{ fontSize: 40 }} />,
            title: 'Integrated Payments',
            description: 'Full PCI compliance through our partner Stripe. No more manual credit card handling or forms.',
            color: '#10b981',
        },
        {
            icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
            title: 'Shipping Integration',
            description: 'Print shipping labels directly from your dashboard. Bulk discounts passed to your customers.',
            color: '#3f6ee3',
        },
        {
            icon: <SentimentVerySatisfiedIcon sx={{ fontSize: 40 }} />,
            title: 'Customer Happiness',
            description: 'Free service, easy process, happy customers. Improves satisfaction ratings and employee efficiency.',
            color: '#b52041',
        },
    ];

    const benefits = [
        'No installation required - web-based solution',
        'Minimal to no training needed for staff',
        'Reduce phone calls and emails',
        'Forever upgrades as we improve',
        'Works for airports, hotels, resorts, museums, and more',
        '99.9% uptime guarantee',
        'Dedicated customer service',
        'Completely FREE to use',
    ];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navigation />
            <Box sx={{ bgcolor: '#ffffff', position: 'relative' }}>
                {/* Decorative sketch items */}
                <Box
                    component="img"
                    src={laptopSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 650,
                        right: 80,
                        width: 140,
                        opacity: 0.4,
                        animation: 'float 6s ease-in-out infinite',
                        '@keyframes float': {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                        zIndex: 10,
                    }}
                />
                <Box
                    component="img"
                    src={phoneSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 900,
                        left: 60,
                        width: 65,
                        opacity: 0.5,
                        animation: 'float 5s ease-in-out infinite 1s',
                        zIndex: 10,
                    }}
                />
                <Box
                    component="img"
                    src={backpackSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 1400,
                        right: 100,
                        width: 95,
                        opacity: 0.4,
                        animation: 'float 7s ease-in-out infinite 2s',
                        zIndex: 10,
                    }}
                />
                <Box
                    component="img"
                    src={walletSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 1800,
                        left: 120,
                        width: 85,
                        opacity: 0.45,
                        animation: 'float 6.5s ease-in-out infinite 1.5s',
                        zIndex: 10,
                    }}
                />
                <Box
                    component="img"
                    src={keysSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 2200,
                        right: 150,
                        width: 75,
                        opacity: 0.5,
                        animation: 'float 5.5s ease-in-out infinite 0.5s',
                        zIndex: 10,
                    }}
                />
                <Box
                    component="img"
                    src={idCardSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 1100,
                        left: 90,
                        width: 80,
                        opacity: 0.45,
                        animation: 'float 6s ease-in-out infinite 2.5s',
                        zIndex: 10,
                    }}
                />
                <Box
                    component="img"
                    src={sunglassesSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 1600,
                        right: 120,
                        width: 100,
                        opacity: 0.5,
                        animation: 'float 6.5s ease-in-out infinite 1s',
                        zIndex: 10,
                    }}
                />
                <Box
                    component="img"
                    src={cameraSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 2000,
                        left: 70,
                        width: 105,
                        opacity: 0.45,
                        animation: 'float 7s ease-in-out infinite 0.5s',
                        zIndex: 10,
                    }}
                />
                <Box
                    component="img"
                    src={headphonesSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 2500,
                        right: 90,
                        width: 95,
                        opacity: 0.5,
                        animation: 'float 5.5s ease-in-out infinite 2s',
                        zIndex: 10,
                    }}
                />
                <Box
                    component="img"
                    src={watchSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 2300,
                        left: 110,
                        width: 80,
                        opacity: 0.45,
                        animation: 'float 6s ease-in-out infinite 1.5s',
                        zIndex: 10,
                    }}
                />
                <Box
                    component="img"
                    src={passportSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 2700,
                        right: 140,
                        width: 85,
                        opacity: 0.5,
                        animation: 'float 6.5s ease-in-out infinite 0.8s',
                        zIndex: 10,
                    }}
                />

                {/* Hero Section */}
                <Box
                    sx={{
                        background: 'linear-gradient(180deg, #0044af 0%, #3f6ee3 50%, #0044af 100%)',
                        pt: 12,
                        pb: 8,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Pattern overlay */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            opacity: 0.3,
                        }}
                    />
                    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                        <Box textAlign="center" mb={6}>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontWeight={700}
                                gutterBottom
                                sx={{ color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
                            >
                                Empower Your Organization to Serve Better
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{ maxWidth: 800, mx: 'auto', mb: 4, color: 'rgba(255,255,255,0.95)' }}
                            >
                                Free software platform for airports, hotels, resorts, museums, and any organization
                                that handles lost and found items
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                href="https://portal.traista.com/account/signup"
                                target="_blank"
                                sx={{
                                    bgcolor: '#ffffff',
                                    color: '#0044af',
                                    px: 5,
                                    py: 2,
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                                    '&:hover': {
                                        bgcolor: '#f0f9ff',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 6px 30px rgba(0,0,0,0.3)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                Sign Up for Free
                            </Button>
                        </Box>
                    </Container>
                </Box>

                {/* How It Works Section */}
                <Box
                    sx={{
                        py: 8,
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)',
                    }}
                >
                    {/* Radial gradient overlay */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '10%',
                            right: '-10%',
                            width: 500,
                            height: 500,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(63, 110, 227, 0.08) 0%, transparent 70%)',
                            pointerEvents: 'none',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: '20%',
                            left: '-10%',
                            width: 400,
                            height: 400,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)',
                            pointerEvents: 'none',
                        }}
                    />
                    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography
                            variant="h3"
                            component="h2"
                            fontWeight={700}
                            textAlign="center"
                            mb={6}
                            sx={{ color: '#0044af' }}
                        >
                            How It Works
                        </Typography>
                        <Grid container spacing={4}>
                            {[
                                {
                                    step: '1',
                                    title: 'Customer Files a Claim',
                                    description: 'Customer reports a lost item on our site or yours, and the claim shows up on your dashboard',
                                    color: '#10b981',
                                },
                                {
                                    step: '2',
                                    title: 'Item is Found',
                                    description: 'If the item is ready to be sent, your staff clicks one button to trigger the process',
                                    color: '#3f6ee3',
                                },
                                {
                                    step: '3',
                                    title: 'Customer Pays Label',
                                    description: 'Customer pays for the shipping label and system creates it in your dashboard',
                                    color: '#b52041',
                                },
                                {
                                    step: '4',
                                    title: 'Item is Shipped',
                                    description: 'Label can be printed directly from dashboard by any staff with access',
                                    color: '#10b981',
                                },
                            ].map((item) => (
                                <Grid item xs={12} md={6} key={item.step}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 4,
                                            height: '100%',
                                            border: '2px solid',
                                            borderColor: `${item.color}20`,
                                            borderTop: `4px solid ${item.color}`,
                                            borderRadius: '12px',
                                            bgcolor: '#ffffff',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: `0 8px 24px ${item.color}30`,
                                                borderColor: `${item.color}40`,
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: '50%',
                                                bgcolor: `${item.color}15`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mb: 2,
                                            }}
                                        >
                                            <Typography variant="h4" fontWeight={700} sx={{ color: item.color }}>
                                                {item.step}
                                            </Typography>
                                        </Box>
                                        <Typography variant="h6" fontWeight={600} gutterBottom>
                                            {item.title}
                                        </Typography>
                                        <Typography color="text.secondary">{item.description}</Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* Features Section */}
                <Box
                    sx={{
                        py: 8,
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'linear-gradient(180deg, #0044af 0%, #3f6ee3 50%, #0044af 100%)',
                    }}
                >
                    {/* Pattern overlay */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                            opacity: 0.5,
                        }}
                    />
                    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography
                            variant="h3"
                            component="h2"
                            fontWeight={700}
                            textAlign="center"
                            mb={6}
                            sx={{ color: '#ffffff' }}
                        >
                            What's Included
                        </Typography>
                        <Grid container spacing={4}>
                            {features.map((feature, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 4,
                                            height: '100%',
                                            textAlign: 'center',
                                            bgcolor: 'rgba(255, 255, 255, 0.95)',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(255, 255, 255, 0.3)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                                                bgcolor: '#ffffff',
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 80,
                                                height: 80,
                                                borderRadius: '16px',
                                                background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mx: 'auto',
                                                mb: 3,
                                                color: feature.color,
                                            }}
                                        >
                                            {feature.icon}
                                        </Box>
                                        <Typography variant="h6" fontWeight={600} gutterBottom>
                                            {feature.title}
                                        </Typography>
                                        <Typography color="text.secondary">{feature.description}</Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* Benefits Section */}
                <Box
                    sx={{
                        py: 8,
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)',
                    }}
                >
                    {/* Decorative circles */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '20%',
                            left: '-5%',
                            width: 300,
                            height: 300,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(63, 110, 227, 0.06) 0%, transparent 70%)',
                            pointerEvents: 'none',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: '10%',
                            right: '-5%',
                            width: 350,
                            height: 350,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
                            pointerEvents: 'none',
                        }}
                    />
                    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography
                            variant="h3"
                            component="h2"
                            fontWeight={700}
                            textAlign="center"
                            mb={6}
                            sx={{ color: '#0044af' }}
                        >
                            Why Organizations Choose Traista
                        </Typography>
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <List>
                                    {benefits.map((benefit, index) => (
                                        <ListItem key={index} sx={{ py: 1 }}>
                                            <ListItemIcon>
                                                <CheckCircleIcon sx={{ color: '#10b981', fontSize: 28 }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={benefit}
                                                primaryTypographyProps={{
                                                    fontSize: '1.1rem',
                                                    fontWeight: 500,
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 5,
                                        background: 'linear-gradient(135deg, #3f6ee3 0%, #0044af 100%)',
                                        color: '#ffffff',
                                        borderRadius: '16px',
                                        textAlign: 'center',
                                        boxShadow: '0 8px 32px rgba(63, 110, 227, 0.25)',
                                    }}
                                >
                                    <Typography variant="h4" fontWeight={700} gutterBottom>
                                        Trusted by Leading Organizations
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                                        Airports, hotels, museums, national parks, and more use Traista to simplify their
                                        lost and found process
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                                        {['EWR', 'MDW', 'PHX', 'ORD', 'LGA', 'OGG', 'MSY', 'IAH'].map((code) => (
                                            <Box
                                                key={code}
                                                sx={{
                                                    bgcolor: 'rgba(255,255,255,0.2)',
                                                    px: 3,
                                                    py: 1,
                                                    borderRadius: '50px',
                                                    fontSize: '0.9rem',
                                                    fontWeight: 600,
                                                    border: '2px solid rgba(255,255,255,0.3)',
                                                }}
                                            >
                                                {code}
                                            </Box>
                                        ))}
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* CTA Section */}
                <Box
                    sx={{
                        background: 'linear-gradient(135deg, #b52041 0%, #d63465 100%)',
                        py: 8,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Pattern overlay */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                            opacity: 0.2,
                        }}
                    />
                    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                        <Box textAlign="center">
                            <Typography variant="h3" fontWeight={700} gutterBottom sx={{ color: '#ffffff' }}>
                                Ready to Get Started?
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 4, color: 'rgba(255,255,255,0.95)' }}>
                                Join other smart organizations using our free solution. No credit card required.
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                href="https://portal.traista.com/account/signup"
                                target="_blank"
                                sx={{
                                    bgcolor: '#ffffff',
                                    color: '#b52041',
                                    px: 6,
                                    py: 2,
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                                    '&:hover': {
                                        bgcolor: '#f0f9ff',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 6px 30px rgba(0,0,0,0.3)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                Sign Up for Free
                            </Button>
                        </Box>
                    </Container>
                </Box>
            </Box>
            <Footer />
        </ThemeProvider>
    );
}
