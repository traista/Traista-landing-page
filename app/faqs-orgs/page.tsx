'use client';

import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Paper,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BusinessIcon from '@mui/icons-material/Business';
import theme from '../../theme';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function FAQsOrgsPage() {
    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    // Sketch-style decorative items
    const laptopSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 140'%3E%3Crect x='20' y='10' width='160' height='100' fill='none' stroke='%233f6ee3' stroke-width='3' rx='5'/%3E%3Crect x='10' y='110' width='180' height='20' fill='none' stroke='%233f6ee3' stroke-width='3' rx='3'/%3E%3Cline x1='100' y1='110' x2='100' y2='130' stroke='%233f6ee3' stroke-width='2'/%3E%3C/svg%3E`;

    const backpackSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 140'%3E%3Cpath d='M30 40 L30 120 L90 120 L90 40 Z' fill='none' stroke='%23b52041' stroke-width='2.5'/%3E%3Cpath d='M35 40 L35 20 L85 20 L85 40' fill='none' stroke='%23b52041' stroke-width='2.5'/%3E%3Cpath d='M40 50 L40 80 M80 50 L80 80' stroke='%23b52041' stroke-width='2'/%3E%3Ccircle cx='45' cy='90' r='4' fill='none' stroke='%23b52041' stroke-width='2'/%3E%3Ccircle cx='75' cy='90' r='4' fill='none' stroke='%23b52041' stroke-width='2'/%3E%3C/svg%3E`;

    const keysSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 120'%3E%3Ccircle cx='25' cy='25' r='15' fill='none' stroke='%2310b981' stroke-width='2.5'/%3E%3Ccircle cx='25' cy='25' r='8' fill='none' stroke='%2310b981' stroke-width='2'/%3E%3Cline x1='35' y1='35' x2='75' y2='75' stroke='%2310b981' stroke-width='2.5'/%3E%3Crect x='65' y='70' width='15' height='8' fill='none' stroke='%2310b981' stroke-width='2'/%3E%3Crect x='65' y='82' width='10' height='6' fill='none' stroke='%2310b981' stroke-width='2'/%3E%3C/svg%3E`;

    const faqs = [
        {
            question: 'Why is this free?',
            answer: 'We believe in providing value to organizations and their customers without financial barriers. Our platform is completely free to use with no hidden costs, subscriptions, or premium tiers. We are committed to helping organizations improve their lost and found operations at no expense.',
        },
        {
            question: 'Is this difficult to use?',
            answer: 'Not at all! Our platform is designed to be intuitive and user-friendly. Most staff members can start using it with minimal to no training. The dashboard is clean and straightforward, making it easy to manage claims, communicate with customers, and process returns.',
        },
        {
            question: 'Will this affect my current procedures and operations overall?',
            answer: 'Traista is designed to enhance your existing procedures, not disrupt them. It streamlines the lost and found process by automating communication, tracking, and shipping label creation. Your staff will spend less time on repetitive tasks like phone calls and emails, allowing them to focus on more important responsibilities.',
        },
        {
            question: 'Who provides customer support to the customers and their claims?',
            answer: 'Traista provides dedicated customer support for both organizations and end customers. While your staff manages the claims through the dashboard, our support team is available to assist with any technical issues or questions. This ensures smooth operations without adding burden to your team.',
        },
        {
            question: 'Who manages shipping label creation? Who are the shipping carriers?',
            answer: 'Shipping labels are automatically generated through our integrated system once the customer pays for shipping. We partner with major carriers including FedEx, UPS, and DHL. Your staff simply prints the label directly from the dashboard and attaches it to the package - no manual data entry or carrier website navigation required.',
        },
        {
            question: "Why aren't you using USPS? It is the least expensive option.",
            answer: 'While USPS can be cost-effective for some shipments, we focus on carriers that provide robust tracking, insurance options, and reliable delivery times. Our bulk discounts with FedEx, UPS, and DHL often result in competitive pricing while offering better tracking capabilities and customer service, which is crucial for valuable lost items.',
        },
        {
            question: 'Do I have to upgrade or replace my current lost and found software?',
            answer: 'No! Traista can work alongside your existing systems or replace them entirely - the choice is yours. Many organizations use Traista as their primary solution because it handles everything from claim filing to shipping, but you can integrate it however works best for your operations.',
        },
        {
            question: 'We currently have a process, why should we use this?',
            answer: 'Even if your current process works, Traista can make it significantly more efficient. Benefits include: automated customer communication (reducing phone calls and emails), instant claim notifications, integrated payment processing, automatic shipping label creation, real-time tracking for customers, and reduced administrative workload. Plus, it\'s free to try with no commitment.',
        },
        {
            question: 'Who pays for shipping and how? Do I have to be PCI compliant?',
            answer: 'Customers pay for their own shipping directly through the platform. We handle all payment processing through our PCI-compliant partner, Stripe. Your organization never handles credit card information, so you don\'t need to worry about PCI compliance for this service. The system creates the shipping label only after successful payment.',
        },
        {
            question: 'Do I have to upgrade to a specific printer for shipping labels?',
            answer: 'No special printer is required! Shipping labels can be printed on any standard office printer. The labels are formatted as standard PDF documents that work with regular 8.5" x 11" paper. You can also use dedicated label printers if you prefer, but it\'s not necessary.',
        },
        {
            question: 'Can any business or organization use this solution?',
            answer: 'Absolutely! Traista is designed for any organization that handles lost and found items. This includes airports, hotels, resorts, museums, national parks, amusement parks, theaters, zoos, universities, convention centers, sports venues, and more. If you deal with customer or visitor belongings, Traista can help.',
        },
        {
            question: 'Do you offer training?',
            answer: 'While our platform is designed to be so intuitive that training isn\'t typically necessary, we do provide onboarding support and documentation. Our team is available to walk your staff through the system and answer any questions during the initial setup. We also provide ongoing support as needed.',
        },
        {
            question: 'Data Security',
            answer: 'We take data security very seriously. All personal information is encrypted both in transit and at rest. We are PCI compliant through our payment partner Stripe. Our platform uses industry-standard security protocols, and we have a 99.9% uptime guarantee backed by our cloud infrastructure partners. We never share customer data with third parties without consent.',
        },
        {
            question: 'Do you partner with other similar lost and found or inventory management companies?',
            answer: 'We focus on being a standalone, comprehensive solution rather than partnering with competitors. However, we are open to integrations with complementary services that enhance the lost and found experience. If you have specific integration needs, please contact us to discuss possibilities.',
        },
    ];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navigation />
            <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh' }}>
                {/* Decorative sketch items */}
                <Box
                    component="img"
                    src={laptopSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 450,
                        right: 100,
                        width: 140,
                        opacity: 0.5,
                        animation: 'float 6s ease-in-out infinite',
                        '@keyframes float': {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                    }}
                />
                <Box
                    component="img"
                    src={backpackSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 900,
                        left: 80,
                        width: 95,
                        opacity: 0.6,
                        animation: 'float 7s ease-in-out infinite 1.5s',
                    }}
                />
                <Box
                    component="img"
                    src={keysSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 1400,
                        right: 90,
                        width: 80,
                        opacity: 0.5,
                        animation: 'float 5s ease-in-out infinite 0.5s',
                    }}
                />

                {/* Hero Section */}
                <Box
                    sx={{
                        background: 'linear-gradient(180deg, #0044af 0%, #3f6ee3 50%, #0044af 100%)',
                        pt: 12,
                        pb: 6,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <Container maxWidth="lg">
                        <Box textAlign="center">
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mx: 'auto',
                                    mb: 3,
                                    border: '2px solid rgba(255, 255, 255, 0.3)',
                                }}
                            >
                                <BusinessIcon sx={{ fontSize: 45, color: '#ffffff' }} />
                            </Box>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontWeight={700}
                                gutterBottom
                                sx={{ color: '#ffffff' }}
                            >
                                FAQs for Organizations
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ maxWidth: 700, mx: 'auto', mb: 2, color: 'rgba(255, 255, 255, 0.9)' }}
                            >
                                Common questions from organizations about implementing Traista's lost and found platform.
                            </Typography>
                        </Box>
                    </Container>
                </Box>

                {/* FAQs Section */}
                <Container maxWidth="md" sx={{ py: 6, pb: 10 }}>
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index + 1}`}
                            onChange={handleChange(`panel${index + 1}`)}
                            elevation={0}
                            sx={{
                                mb: 2,
                                border: '2px solid',
                                borderColor: expanded === `panel${index + 1}` ? '#3f6ee3' : '#e5e7eb',
                                borderRadius: '12px !important',
                                '&:before': { display: 'none' },
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    borderColor: '#3f6ee3',
                                    boxShadow: '0 4px 12px rgba(63, 110, 227, 0.15)',
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon
                                        sx={{
                                            color: expanded === `panel${index + 1}` ? '#3f6ee3' : '#6b7280',
                                            fontSize: 32,
                                        }}
                                    />
                                }
                                sx={{
                                    minHeight: 72,
                                    px: 3,
                                    '&.Mui-expanded': {
                                        minHeight: 72,
                                        borderBottom: '1px solid #e5e7eb',
                                    },
                                    '& .MuiAccordionSummary-content': {
                                        my: 2,
                                    },
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    fontWeight={600}
                                    sx={{
                                        color: expanded === `panel${index + 1}` ? '#0044af' : '#1f2937',
                                        fontSize: '1.1rem',
                                    }}
                                >
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ px: 3, py: 3 }}>
                                <Typography
                                    color="text.secondary"
                                    sx={{
                                        fontSize: '1rem',
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Container>

                {/* CTA Section */}
                <Box
                    sx={{
                        background: 'linear-gradient(135deg, #3f6ee3 0%, #0044af 100%)',
                        py: 6,
                    }}
                >
                    <Container maxWidth="md">
                        <Paper
                            elevation={0}
                            sx={{
                                p: 5,
                                background: 'rgba(255, 255, 255, 0.95)',
                                borderRadius: '16px',
                                textAlign: 'center',
                            }}
                        >
                            <Typography variant="h4" fontWeight={700} gutterBottom sx={{ color: '#0044af' }}>
                                Ready to Get Started?
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                Join other organizations using our free lost and found platform.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href="https://portal.traista.com/account/signup" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                    <Box
                                        component="button"
                                        sx={{
                                            bgcolor: '#3f6ee3',
                                            color: '#ffffff',
                                            px: 4,
                                            py: 1.5,
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            borderRadius: '8px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textTransform: 'none',
                                            '&:hover': {
                                                bgcolor: '#0044af',
                                                transform: 'translateY(-2px)',
                                            },
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        Sign Up Now
                                    </Box>
                                </a>
                                <a href="/" style={{ textDecoration: 'none' }}>
                                    <Box
                                        component="button"
                                        sx={{
                                            bgcolor: 'transparent',
                                            color: '#3f6ee3',
                                            px: 4,
                                            py: 1.5,
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            borderRadius: '8px',
                                            border: '2px solid #3f6ee3',
                                            cursor: 'pointer',
                                            textTransform: 'none',
                                            '&:hover': {
                                                bgcolor: '#f0f9ff',
                                                transform: 'translateY(-2px)',
                                            },
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        Back to Home
                                    </Box>
                                </a>
                            </Box>
                        </Paper>
                    </Container>
                </Box>
            </Box>
            <Footer />
        </ThemeProvider>
    );
}
