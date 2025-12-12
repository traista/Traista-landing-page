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
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import theme from '../../theme';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function FAQsPage() {
    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    // Sketch-style decorative items
    const phoneSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 140'%3E%3Crect x='10' y='10' width='60' height='120' fill='none' stroke='%2310b981' stroke-width='2.5' rx='8'/%3E%3Ccircle cx='40' cy='115' r='8' fill='none' stroke='%2310b981' stroke-width='2'/%3E%3Cline x1='30' y1='25' x2='50' y2='25' stroke='%2310b981' stroke-width='2'/%3E%3C/svg%3E`;

    const walletSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 100'%3E%3Crect x='10' y='20' width='120' height='70' fill='none' stroke='%233f6ee3' stroke-width='2.5' rx='5'/%3E%3Crect x='90' y='40' width='30' height='30' fill='none' stroke='%233f6ee3' stroke-width='2.5' rx='3'/%3E%3Ccircle cx='105' cy='55' r='5' fill='none' stroke='%233f6ee3' stroke-width='2'/%3E%3Cline x1='20' y1='35' x2='70' y2='35' stroke='%233f6ee3' stroke-width='2'/%3E%3C/svg%3E`;

    const laptopSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 140'%3E%3Crect x='20' y='10' width='160' height='100' fill='none' stroke='%233f6ee3' stroke-width='3' rx='5'/%3E%3Crect x='10' y='110' width='180' height='20' fill='none' stroke='%233f6ee3' stroke-width='3' rx='3'/%3E%3Cline x1='100' y1='110' x2='100' y2='130' stroke='%233f6ee3' stroke-width='2'/%3E%3C/svg%3E`;

    const backpackSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 140'%3E%3Cpath d='M30 40 L30 120 L90 120 L90 40 Z' fill='none' stroke='%23b52041' stroke-width='2.5'/%3E%3Cpath d='M35 40 L35 20 L85 20 L85 40' fill='none' stroke='%23b52041' stroke-width='2.5'/%3E%3Cpath d='M40 50 L40 80 M80 50 L80 80' stroke='%23b52041' stroke-width='2'/%3E%3Ccircle cx='45' cy='90' r='4' fill='none' stroke='%23b52041' stroke-width='2'/%3E%3Ccircle cx='75' cy='90' r='4' fill='none' stroke='%23b52041' stroke-width='2'/%3E%3C/svg%3E`;

    const keysSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 120'%3E%3Ccircle cx='25' cy='25' r='15' fill='none' stroke='%2310b981' stroke-width='2.5'/%3E%3Ccircle cx='25' cy='25' r='8' fill='none' stroke='%2310b981' stroke-width='2'/%3E%3Cline x1='35' y1='35' x2='75' y2='75' stroke='%2310b981' stroke-width='2.5'/%3E%3Crect x='65' y='70' width='15' height='8' fill='none' stroke='%2310b981' stroke-width='2'/%3E%3Crect x='65' y='82' width='10' height='6' fill='none' stroke='%2310b981' stroke-width='2'/%3E%3C/svg%3E`;

    const idCardSketch = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 90'%3E%3Crect x='10' y='10' width='120' height='70' fill='none' stroke='%23b52041' stroke-width='2.5' rx='5'/%3E%3Ccircle cx='35' cy='35' r='12' fill='none' stroke='%23b52041' stroke-width='2'/%3E%3Cline x1='55' y1='25' x2='110' y2='25' stroke='%23b52041' stroke-width='2'/%3E%3Cline x1='55' y1='35' x2='100' y2='35' stroke='%23b52041' stroke-width='2'/%3E%3Cline x1='55' y1='45' x2='95' y2='45' stroke='%23b52041' stroke-width='2'/%3E%3Cline x1='20' y1='60' x2='120' y2='60' stroke='%23b52041' stroke-width='2'/%3E%3C/svg%3E`;

    const faqs = [
        {
            question: 'How much does Traista cost?',
            answer: 'Traista is completely FREE for both individuals and organizations. There are no hidden fees, no subscription charges, and no premium tiers. We believe in providing a valuable service at no cost to help reunite people with their lost items.',
        },
        {
            question: 'How do I file a claim for a lost item?',
            answer: 'Filing a claim is simple! Click on "File a Claim" button on our homepage, fill out the form with details about your lost item (description, location where lost, date, etc.), and submit. You\'ll receive a claim number to track your item\'s status.',
        },
        {
            question: 'How can I track my claim?',
            answer: 'After filing a claim, you can track its status by clicking "My Claim" in the navigation menu and signing in with your email. You\'ll see real-time updates on whether your item has been found, is being processed, or is ready for shipping.',
        },
        {
            question: 'Do I have to pay for shipping?',
            answer: 'Yes, customers are responsible for shipping costs when their item is being returned to them. However, we offer bulk shipping discounts through our integrated carriers, so you get the best rates possible. The organization does not charge any handling fees.',
        },
        {
            question: 'What types of organizations use Traista?',
            answer: 'Traista is used by airports, hotels, resorts, museums, national parks, amusement parks, cinemas, zoos, and many other organizations that handle lost and found items. Any organization that deals with customer or visitor belongings can benefit from our platform.',
        },
        {
            question: 'How quickly can items be returned?',
            answer: 'Once an item is found and marked in the system, customers are notified immediately. They can then pay for shipping, and the organization can print the label right away. Shipping time depends on the carrier and service selected by the customer.',
        },
        {
            question: 'Is my personal information secure?',
            answer: 'Absolutely! We take data security very seriously. All personal information is encrypted and stored securely. We are PCI compliant through our payment partner Stripe, and we never share your information with third parties without your consent.',
        },
        {
            question: 'What happens if my item is not found?',
            answer: 'If your item is not found within a reasonable timeframe, the organization will mark the claim as "not found" in the system, and you\'ll be notified. You can keep your claim active in case the item turns up later.',
        },
        {
            question: 'Can organizations customize the platform?',
            answer: 'Yes! Organizations get a custom branded link for their claim forms. They can also configure notification preferences, manage multiple locations, and customize their dashboard. We continuously add features based on customer feedback.',
        },
        {
            question: 'How do I sign up my organization?',
            answer: 'Organizations can sign up for free by clicking the "Organizations" menu and then "Sign Up for Free". The onboarding process is quick and straightforward, with minimal setup required. Our team is available to help with any questions.',
        },
        {
            question: 'What if I need help or have issues?',
            answer: 'We offer dedicated customer service for both individuals and organizations. You can reach us through the Contact Us page, and we\'ll respond promptly. We also have a 99.9% uptime guarantee backed by our cloud infrastructure partners.',
        },
        {
            question: 'Can I file a claim on behalf of someone else?',
            answer: 'Yes, you can file a claim for another person. Just make sure to provide accurate contact information for the person who lost the item so they can receive updates and arrange shipping if the item is found.',
        },
        {
            question: 'What items can be reported as lost?',
            answer: 'You can report any personal belongings - phones, laptops, bags, wallets, keys, clothing, jewelry, documents, and more. Just provide as much detail as possible (brand, color, distinguishing features) to help with identification.',
        },
        {
            question: 'How does the smart matching algorithm work?',
            answer: 'Our platform uses intelligent matching to connect lost item reports with found items in the organization\'s inventory. It analyzes descriptions, dates, locations, and other factors to suggest potential matches, making the recovery process faster and more efficient.',
        },
        {
            question: 'Can I edit my claim after submitting it?',
            answer: 'Yes, you can update your claim details by signing into "My Claim". This is helpful if you remember additional information about your item or need to update your contact information or shipping address.',
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
                    src={phoneSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 600,
                        left: 80,
                        width: 65,
                        opacity: 0.6,
                        animation: 'float 5s ease-in-out infinite 1s',
                    }}
                />
                <Box
                    component="img"
                    src={walletSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 900,
                        right: 60,
                        width: 110,
                        opacity: 0.5,
                        animation: 'float 7s ease-in-out infinite 2s',
                    }}
                />
                <Box
                    component="img"
                    src={backpackSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 1200,
                        left: 90,
                        width: 95,
                        opacity: 0.6,
                        animation: 'float 6s ease-in-out infinite 1.5s',
                    }}
                />
                <Box
                    component="img"
                    src={keysSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 1500,
                        right: 120,
                        width: 80,
                        opacity: 0.5,
                        animation: 'float 5s ease-in-out infinite 0.5s',
                    }}
                />
                <Box
                    component="img"
                    src={idCardSketch}
                    alt=""
                    sx={{
                        position: 'absolute',
                        top: 1800,
                        left: 70,
                        width: 105,
                        opacity: 0.6,
                        animation: 'float 7s ease-in-out infinite 2.5s',
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
                                <HelpOutlineIcon sx={{ fontSize: 45, color: '#ffffff' }} />
                            </Box>
                            <Typography
                                variant="h2"
                                component="h1"
                                fontWeight={700}
                                gutterBottom
                                sx={{ color: '#ffffff' }}
                            >
                                Frequently Asked Questions
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ maxWidth: 700, mx: 'auto', mb: 2, color: 'rgba(255, 255, 255, 0.9)' }}
                            >
                                Got questions? We've got answers. Find everything you need to know about Traista.
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

                {/* Contact CTA */}
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
                                Still Have Questions?
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                Can't find the answer you're looking for? Our friendly team is here to help.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href="/#contact" style={{ textDecoration: 'none' }}>
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
                                        Contact Us
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
