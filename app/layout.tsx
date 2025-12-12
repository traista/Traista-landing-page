import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../theme'

export const metadata: Metadata = {
    title: 'Traista - Lost & Found Solutions',
    description: 'Web-based lost and found platform for airports, hotels, resorts and more. Free, easy to use, and intelligent.',
    icons: {
        icon: [
            { url: '/logo.png', sizes: '32x32', type: 'image/png' },
            { url: '/logo.png', sizes: '16x16', type: 'image/png' },
        ],
        apple: '/logo.png',
        shortcut: '/logo.png',
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
