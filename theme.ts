'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f6ee3', // Traista Primary
            light: '#7c9cff',
            dark: '#0044af',
            contrastText: '#fff',
        },
        secondary: {
            main: '#b52041', // Traista Secondary
            light: '#e84a6f',
            dark: '#7f001b',
            contrastText: '#fff',
        },
        background: {
            default: '#fafafa',
            paper: '#ffffff',
        },
        error: {
            main: '#ef4444',
        },
        success: {
            main: '#10b981',
        },
        info: {
            main: '#06b6d4',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 800,
            fontSize: '3.5rem',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontWeight: 800,
            fontSize: '2.75rem',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontWeight: 700,
            fontSize: '2.25rem',
            lineHeight: 1.3,
        },
        h4: {
            fontWeight: 700,
            fontSize: '1.75rem',
            lineHeight: 1.4,
        },
        h5: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.5,
        },
        h6: {
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.6,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 12,
                    fontWeight: 600,
                    fontSize: '1rem',
                    padding: '12px 28px',
                    boxShadow: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        boxShadow: '0 10px 40px rgba(63, 110, 227, 0.25)',
                        transform: 'translateY(-2px)',
                    },
                },
                sizeLarge: {
                    padding: '14px 36px',
                    fontSize: '1.1rem',
                },
                contained: {
                    backgroundColor: '#3f6ee3',
                    '&:hover': {
                        backgroundColor: '#0044af',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                    },
                },
            },
        },
    },
});

export default theme;
