import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQs for Organizations',
    description: 'Frequently asked questions for airports, hotels, resorts, and organizations using Traista lost and found software. Setup, features, and pricing information.',
};

export default function FAQsOrgsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
