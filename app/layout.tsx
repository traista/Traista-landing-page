import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../theme'

export const metadata: Metadata = {
    metadataBase: new URL('https://traista.com'),
    title: {
        default: 'Traista - Lost & Found Platform for Organizations',
        template: '%s | Traista'
    },
    description: 'Free web-based lost and found platform connecting travelers with airports, hotels, resorts, and organizations. Recover lost items quickly and easily with our intelligent matching system.',
    keywords: ['lost and found', 'lost items', 'airport lost and found', 'hotel lost and found', 'lost property', 'found items', 'claim lost items', 'recover lost belongings', 'travel', 'baggage claim'],
    authors: [{ name: 'Traista' }],
    creator: 'Traista',
    publisher: 'Traista',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://traista.com',
        siteName: 'Traista',
        title: 'Traista - Lost & Found Platform for Organizations',
        description: 'Free web-based lost and found platform connecting travelers with airports, hotels, resorts, and organizations. Recover lost items quickly and easily.',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'Traista Lost and Found Platform',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Traista - Lost & Found Platform for Organizations',
        description: 'Free web-based lost and found platform connecting travelers with organizations. Recover lost items quickly and easily.',
        images: ['/logo.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/logo.png', sizes: '32x32', type: 'image/png' },
            { url: '/logo.png', sizes: '16x16', type: 'image/png' },
        ],
        apple: '/logo.png',
        shortcut: '/logo.png',
    },
    verification: {
        google: 'google-site-verification-code-here',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
                <link rel="shortcut icon" href="/logo.png" />
            </head>
            <body>{children}</body>
        </html>
    )
}
