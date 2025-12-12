'use client';

import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Container,
    useMediaQuery,
    useTheme,
    Menu,
    MenuItem,
    Slide,
    useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const navItems = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
];

const organizationsSubmenu = [
    { label: 'Sign In/Sign Up', href: 'https://portal.traista.com/account/signin' },
    { label: 'How It Works', href: '/organizations' },
    { label: 'FAQs', href: '/faqs-orgs' },
];

interface HideOnScrollProps {
    children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 10) {
                setShow(true);
            } else if (currentScrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <Slide appear={false} direction="down" in={show}>
            {children}
        </Slide>
    );
}

export default function Navigation() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSubmenuClick = (href: string) => {
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (href.startsWith('http')) {
            window.open(href, '_blank');
        } else {
            window.location.href = href;
        }
        handleClose();
    };
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        if (href.startsWith('#')) {
            // Check if we're on a different page
            if (window.location.pathname !== '/') {
                // Navigate to home page with hash
                window.location.href = '/' + href;
            } else {
                // Already on home page, just scroll
                setTimeout(() => {
                    const element = document.querySelector(href);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        } else if (href.startsWith('http')) {
            window.open(href, '_blank');
        } else {
            window.location.href = href;
        }
    };

    const drawer = (
        <Box sx={{ width: 280, bgcolor: '#fafafa', height: '100%' }} role="presentation">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2.5, bgcolor: '#ffffff', borderBottom: '1px solid #e0e0e0' }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        cursor: 'pointer',
                        '&:hover': {
                            opacity: 0.8,
                        }
                    }}
                    onClick={() => {
                        handleDrawerToggle();
                        handleNavClick('/');
                    }}
                >
                    Traista
                </Typography>
                <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.secondary' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List sx={{ px: 2, py: 3 }}>
                <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemButton
                        sx={{
                            borderRadius: '8px',
                            bgcolor: '#f0f4ff',
                            '&:hover': { bgcolor: '#e3f2fd' }
                        }}
                    >
                        <ListItemText
                            primary="Organizations"
                            primaryTypographyProps={{
                                fontWeight: 700,
                                fontSize: '0.95rem',
                                color: 'primary.main'
                            }}
                        />
                    </ListItemButton>
                </ListItem>
                {organizationsSubmenu.map((item) => (
                    <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
                        <ListItemButton
                            onClick={() => handleSubmenuClick(item.href)}
                            sx={{
                                pl: 4,
                                borderRadius: '8px',
                                '&:hover': { bgcolor: '#f5f5f5' }
                            }}
                        >
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontSize: '0.9rem',
                                    color: 'text.secondary'
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                        <ListItemButton
                            onClick={() => handleNavClick(item.href)}
                            sx={{
                                borderRadius: '8px',
                                '&:hover': { bgcolor: '#f5f5f5' }
                            }}
                        >
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    color: 'text.primary'
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Box sx={{ mt: 3, px: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={() => {
                            window.open('https://portal.traista.com', '_blank');
                            setMobileOpen(false);
                        }}
                        sx={{
                            borderColor: '#3f6ee3',
                            color: '#3f6ee3',
                            py: 1.5,
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            borderRadius: '8px',
                            textTransform: 'none',
                            borderWidth: '2px',
                            '&:hover': {
                                borderColor: '#0044af',
                                bgcolor: '#f0f4ff',
                                borderWidth: '2px',
                            },
                        }}
                    >
                        Track My Claim
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => {
                            window.open('https://portal.traista.com/claim', '_blank');
                            setMobileOpen(false);
                        }}
                        sx={{
                            bgcolor: '#3f6ee3',
                            color: '#ffffff',
                            py: 1.5,
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            borderRadius: '8px',
                            textTransform: 'none',
                            boxShadow: '0 2px 8px rgba(63, 110, 227, 0.25)',
                            '&:hover': {
                                bgcolor: '#0044af',
                                boxShadow: '0 4px 12px rgba(63, 110, 227, 0.35)',
                            },
                        }}
                    >
                        File New Claim
                    </Button>
                </Box>
            </List>
        </Box>
    );

    return (
        <>
            <HideOnScroll>
                <AppBar position="fixed" elevation={2} sx={{ bgcolor: 'white', color: 'primary.main' }}>
                    <Container maxWidth="lg">
                        <Toolbar disableGutters sx={{ py: 1.5 }}>
                            <Box
                                component="a"
                                href="/"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    flexGrow: isMobile ? 1 : 0,
                                    mr: 4,
                                    textDecoration: 'none',
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/logo.png"
                                    alt="Traista Logo"
                                    sx={{
                                        height: 36,
                                        width: 36,
                                    }}
                                />
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        color: 'primary.main',
                                    }}
                                >
                                    Traista
                                </Typography>
                            </Box>

                            {!isMobile ? (
                                <>
                                    <Box sx={{ flexGrow: 1, display: 'flex', gap: 0.5 }}>
                                        <Button
                                            onClick={handleClick}
                                            endIcon={<KeyboardArrowDownIcon />}
                                            sx={{
                                                color: 'text.primary',
                                                fontWeight: 600,
                                                fontSize: '0.95rem',
                                                px: 2,
                                                position: 'relative',
                                                '&:hover': {
                                                    bgcolor: 'transparent',
                                                    color: 'primary.main',
                                                },
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    bottom: 8,
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    width: open ? '70%' : 0,
                                                    height: '3px',
                                                    bgcolor: 'primary.main',
                                                    borderRadius: '3px',
                                                    transition: 'width 0.3s ease',
                                                },
                                                '&:hover::after': {
                                                    width: '70%',
                                                },
                                            }}
                                        >
                                            Organizations
                                        </Button>
                                        {navItems.map((item) => (
                                            <Button
                                                key={item.label}
                                                onClick={() => handleNavClick(item.href)}
                                                sx={{
                                                    color: 'text.primary',
                                                    fontWeight: 600,
                                                    fontSize: '0.95rem',
                                                    px: 2,
                                                    position: 'relative',
                                                    '&:hover': {
                                                        bgcolor: 'transparent',
                                                        color: 'primary.main',
                                                    },
                                                    '&::after': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        bottom: 8,
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        width: 0,
                                                        height: '3px',
                                                        bgcolor: 'primary.main',
                                                        borderRadius: '3px',
                                                        transition: 'width 0.3s ease',
                                                    },
                                                    '&:hover::after': {
                                                        width: '70%',
                                                    },
                                                }}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </Box>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'organizations-button',
                                        }}
                                        sx={{
                                            '& .MuiPaper-root': {
                                                borderRadius: '8px',
                                                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                                mt: 1,
                                            },
                                        }}
                                    >
                                        {organizationsSubmenu.map((item) => (
                                            <MenuItem
                                                key={item.label}
                                                onClick={() => handleSubmenuClick(item.href)}
                                                sx={{
                                                    py: 1.5,
                                                    px: 3,
                                                    '&:hover': {
                                                        bgcolor: '#f0f9ff',
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <Button
                                            variant="outlined"
                                            onClick={() => window.open('https://portal.traista.com/claim', '_blank')}
                                            sx={{
                                                borderRadius: '8px',
                                                fontWeight: 700,
                                                px: 3,
                                                borderWidth: '2px',
                                                '&:hover': {
                                                    borderWidth: '2px',
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 4px 12px rgba(63, 110, 227, 0.2)',
                                                },
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            File New Claim
                                        </Button>
                                        <Button
                                            variant="contained"
                                            onClick={() => window.open('https://portal.traista.com', '_blank')}
                                            sx={{
                                                borderRadius: '8px',
                                                fontWeight: 700,
                                                px: 3,
                                                boxShadow: '0 4px 12px rgba(63, 110, 227, 0.3)',
                                                '&:hover': {
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 6px 20px rgba(63, 110, 227, 0.4)',
                                                },
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            Track My Claim
                                        </Button>
                                    </Box>
                                </>
                            ) : (
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="end"
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        bgcolor: '#f0f4ff',
                                        color: 'primary.main',
                                        borderRadius: '8px',
                                        width: 48,
                                        height: 48,
                                        '&:hover': {
                                            bgcolor: '#e3f2fd',
                                            transform: 'scale(1.05)',
                                        },
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    <MenuIcon sx={{ fontSize: 28 }} />
                                </IconButton>
                            )}
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
                    }
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}
