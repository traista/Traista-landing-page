'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Rating, Avatar, keyframes } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

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
    transform: translateY(-10px);
  }
`;

const testimonials = [
    {
        name: 'Frank M.',
        location: 'Sacramento, CA',
        rating: 5,
        text: "Left my laptop at security... NOT my finest moment 😅 But seriously, Traista made getting it back so easy. They shipped it straight to my hotel - lifesaver!",
    },
    {
        name: 'Cheryl V.',
        location: 'Farmington, OH',
        rating: 5,
        text: "The claim form is gorgeous and super intuitive. I'm honestly shocked this didn't exist sooner. Our airport uses it and travelers love how simple everything is!",
    },
    {
        name: 'Mark G.',
        location: 'Milwaukee, WI',
        rating: 4,
        text: "We brought this up in our last management meeting - it's that good. I work at an airport and travelers actually thank us now because the process is so smooth. Never thought I'd see the day!",
    },
    {
        name: 'Sam W.',
        location: 'New York, NY',
        rating: 4,
        text: "Had to go back and forth with the airport a bit, but once we got it sorted, the claim and shipping label process was phenomenal. And completely FREE. Seriously, thank you!!",
    },
    {
        name: 'Martha C.',
        location: 'Santa Barbara, CA',
        rating: 4,
        text: "So... I left ONE snowboard boot at the hotel (yeah, don't ask 😂). The packaging was a little weird but hey, it's a single boot! Hotel used Traista and had everything sorted crazy fast.",
    },
    {
        name: 'Jackie T.',
        location: 'Denver, CO',
        rating: 5,
        text: "Filled out the whole claim on my phone while waiting for my Uber. The tracking dashboard is clean and easy to follow. Can't believe services like this are just... out there, for free!",
    },
];

function getInitials(name: string) {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('');
}

export default function TestimonialsSection() {
    return (
        <Box
            sx={{
                py: 10,
                background: 'linear-gradient(180deg, #0044af 0%, #3f6ee3 50%, #0044af 100%)',
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
                        radial-gradient(circle at 20% 30%, rgba(124, 156, 255, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)
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
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    pointerEvents: 'none',
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <FormatQuoteIcon
                        sx={{
                            fontSize: 60,
                            color: '#7c9cff',
                            opacity: 0.4,
                            mb: 2,
                            animation: `${float} 3s ease-in-out infinite`,
                        }}
                    />
                    <Typography
                        variant="h2"
                        align="center"
                        gutterBottom
                        sx={{
                            mb: 2,
                            fontSize: { xs: '2rem', md: '2.75rem' },
                            fontWeight: 800,
                            color: 'white',
                        }}
                    >
                        Lost & found process made easy ⭐
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            maxWidth: 700,
                            mx: 'auto',
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            fontWeight: 500,
                            color: 'rgba(255, 255, 255, 0.8)',
                        }}
                    >
                        Stories from people who've recovered their belongings
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {testimonials.map((testimonial, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                elevation={0}
                                sx={{
                                    height: '100%',
                                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
                                    border: '2px solid',
                                    borderColor: 'transparent',
                                    borderRadius: 3,
                                    transition: 'all 0.3s',
                                    animation: `${fadeInUp} 0.6s ease-out ${index * 0.1}s backwards`,
                                    position: 'relative',
                                    overflow: 'visible',
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        boxShadow: '0 12px 32px rgba(63, 110, 227, 0.2)',
                                        transform: 'translateY(-8px)',
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: -2,
                                        left: -2,
                                        right: -2,
                                        bottom: -2,
                                        background: 'linear-gradient(135deg, #3f6ee3, #10b981)',
                                        borderRadius: 3,
                                        zIndex: -1,
                                        opacity: 0,
                                        transition: 'opacity 0.3s',
                                    },
                                    '&:hover::before': {
                                        opacity: 0.1,
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <FormatQuoteIcon
                                        sx={{
                                            fontSize: 40,
                                            color: 'primary.main',
                                            opacity: 0.15,
                                            mb: 2,
                                        }}
                                    />
                                    <Rating
                                        value={testimonial.rating}
                                        readOnly
                                        sx={{
                                            mb: 2,
                                            '& .MuiRating-iconFilled': {
                                                color: '#ffc107',
                                            },
                                        }}
                                    />
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{
                                            mb: 3,
                                            fontSize: '1rem',
                                            lineHeight: 1.7,
                                            fontStyle: 'italic',
                                        }}
                                    >
                                        "{testimonial.text}"
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                                        <Avatar
                                            sx={{
                                                bgcolor: index % 2 === 0 ? 'primary.main' : '#10b981',
                                                mr: 2,
                                                width: 48,
                                                height: 48,
                                                fontWeight: 700,
                                            }}
                                        >
                                            {getInitials(testimonial.name)}
                                        </Avatar>
                                        <Box>
                                            <Typography variant="subtitle1" fontWeight={700}>
                                                {testimonial.name}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                                                {testimonial.location}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
