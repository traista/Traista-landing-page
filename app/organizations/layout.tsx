import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Lost & Found Software for Organizations',
    description: 'Free lost and found management software for airports, hotels, resorts, and museums. Custom branded links, real-time notifications, integrated payments and shipping.',
    openGraph: {
        title: 'Lost & Found Software for Organizations | Traista',
        description: 'Free lost and found management software for airports, hotels, resorts, and museums. Streamline your lost property process.',
        type: 'website',
    },
};

export default function OrganizationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
