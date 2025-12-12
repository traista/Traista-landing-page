'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Alert, Paper, keyframes } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import SubjectIcon from '@mui/icons-material/Subject';
import SendIcon from '@mui/icons-material/Send';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFormData(prev => ({ ...prev, [field]: value }));

        // Clear error when user starts typing
        if (errors[field as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }

        // Clear submit status when editing
        if (submitStatus !== 'idle') {
            setSubmitStatus('idle');
        }
    };

    const validateForm = () => {
        const newErrors = {
            name: '',
            email: '',
            subject: '',
            message: '',
        };

        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
            isValid = false;
        } else if (formData.subject.trim().length < 3) {
            newErrors.subject = 'Subject must be at least 3 characters';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (validateForm()) {
            // Here you would typically send the form data to your backend
            console.log('Form submitted:', formData);
            setSubmitStatus('success');

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } else {
            setSubmitStatus('error');
        }
    };

    return (
        <Box
            id="contact"
            sx={{
                py: 10,
                background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 50%, #ffffff 100%)',
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
                        radial-gradient(circle at 30% 20%, rgba(63, 110, 227, 0.08) 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)
                    `,
                    pointerEvents: 'none',
                },
            }}
        >
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <MessageIcon
                        sx={{
                            fontSize: 60,
                            color: 'primary.main',
                            opacity: 0.2,
                            mb: 2,
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
                        }}
                    >
                        Get In Touch 💬
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        color="text.secondary"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            fontWeight: 500,
                        }}
                    >
                        Questions? Feedback? We'd love to hear from you
                    </Typography>
                </Box>

                {submitStatus === 'success' && (
                    <Alert severity="success" sx={{ mb: 3 }}>
                        Thank you for your message! We'll get back to you soon.
                    </Alert>
                )}

                {submitStatus === 'error' && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        Please correct the errors below and try again.
                    </Alert>
                )}

                <Paper
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    elevation={0}
                    sx={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
                        p: { xs: 3, md: 5 },
                        borderRadius: 4,
                        border: '2px solid',
                        borderColor: 'transparent',
                        boxShadow: '0 8px 32px rgba(63, 110, 227, 0.15)',
                        transition: 'all 0.3s',
                        '&:hover': {
                            boxShadow: '0 12px 40px rgba(63, 110, 227, 0.2)',
                            borderColor: 'primary.main',
                        },
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                required
                                value={formData.name}
                                onChange={handleChange('name')}
                                error={!!errors.name}
                                helperText={errors.name}
                                InputProps={{
                                    startAdornment: <PersonIcon sx={{ mr: 1, color: 'action.active' }} />,
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: 'white',
                                        '&:hover': {
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'primary.main',
                                            },
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                variant="outlined"
                                required
                                value={formData.email}
                                onChange={handleChange('email')}
                                error={!!errors.email}
                                helperText={errors.email}
                                InputProps={{
                                    startAdornment: <EmailIcon sx={{ mr: 1, color: 'action.active' }} />,
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: 'white',
                                        '&:hover': {
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'primary.main',
                                            },
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Subject"
                                variant="outlined"
                                required
                                value={formData.subject}
                                onChange={handleChange('subject')}
                                error={!!errors.subject}
                                helperText={errors.subject}
                                InputProps={{
                                    startAdornment: <SubjectIcon sx={{ mr: 1, color: 'action.active' }} />,
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: 'white',
                                        '&:hover': {
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'primary.main',
                                            },
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Message"
                                multiline
                                rows={6}
                                variant="outlined"
                                required
                                value={formData.message}
                                onChange={handleChange('message')}
                                error={!!errors.message}
                                helperText={errors.message}
                                InputProps={{
                                    startAdornment: <MessageIcon sx={{ mr: 1, color: 'action.active', alignSelf: 'flex-start', mt: 2 }} />,
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: 'white',
                                        '&:hover': {
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'primary.main',
                                            },
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                fullWidth
                                endIcon={<SendIcon />}
                                sx={{
                                    py: 1.8,
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 16px rgba(63, 110, 227, 0.3)',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 6px 24px rgba(63, 110, 227, 0.4)',
                                    },
                                    transition: 'all 0.3s',
                                }}
                            >
                                Send Message
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}
