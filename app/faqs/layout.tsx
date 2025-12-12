import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQs - Frequently Asked Questions',
    description: 'Common questions about Traista lost and found platform. Learn how to file a claim, track items, and recover your lost belongings.',
};

export default function FAQsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
