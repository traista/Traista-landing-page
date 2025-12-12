'use client';

import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    IconButton,
    Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                py: 6,
                mt: 8,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" gutterBottom fontWeight={700}>
                            Traista
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Lost & Found Solutions for airports, hotels, resorts, and everything in between.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton
                                aria-label="Facebook"
                                sx={{ color: 'white' }}
                                href="https://www.facebook.com/traistapp/"
                                target="_blank"
                            >
                                <FacebookIcon />
                            </IconButton>
                            <IconButton
                                aria-label="Twitter"
                                sx={{ color: 'white' }}
                                href="https://twitter.com/traistapp"
                                target="_blank"
                            >
                                <TwitterIcon />
                            </IconButton>
                            <IconButton
                                aria-label="Instagram"
                                sx={{ color: 'white' }}
                                href="https://www.instagram.com/traistapp/"
                                target="_blank"
                            >
                                <InstagramIcon />
                            </IconButton>
                            <IconButton
                                aria-label="YouTube"
                                sx={{ color: 'white' }}
                                href="https://www.youtube.com/channel/UCc7aTGgHLTRJJvEbW31TZEg"
                                target="_blank"
                            >
                                <YouTubeIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom fontWeight={600}>
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#home" color="inherit" underline="hover">
                                Home
                            </Link>
                            <Link href="#how-it-works" color="inherit" underline="hover">
                                How It Works
                            </Link>
                            <Link href="#about" color="inherit" underline="hover">
                                About Us
                            </Link>
                            <Link href="https://portal.traista.com/claim" color="inherit" underline="hover" target="_blank">
                                My Claim
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom fontWeight={600}>
                            Resources
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="/faqs" color="inherit" underline="hover">
                                FAQs
                            </Link>
                            <Link href="#contact" color="inherit" underline="hover">
                                Contact Us
                            </Link>
                            <Link href="/organizations" color="inherit" underline="hover">
                                Organizations
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom fontWeight={600}>
                            Legal
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="https://traista.com/privacy-policy/" color="inherit" underline="hover" target="_blank">
                                Privacy Policy
                            </Link>
                            <Link href="https://traista.com/terms-and-conditions-tos/" color="inherit" underline="hover" target="_blank">
                                Terms & Conditions
                            </Link>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.2)' }} />

                <Typography variant="body2" align="center">
                    ©Copyright 2016-2025 Traista. All Rights Reserved. Chandler, AZ
                </Typography>
            </Container>
        </Box>
    );
}
