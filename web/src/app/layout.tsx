import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/footer/Footer';
import { BRAND } from '@/shared';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.canonicalUrl),
  title: {
    default: `${BRAND.name} | ${BRAND.tagline} — Next-Gen IT, SAP, AI & Infrastructure`,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
  keywords: [
    'JSJ INFOTECH',
    'Autonomous by Design',
    'SAP S/4HANA India',
    'Enterprise AI',
    'Autonomous Drone Technology',
    'Smart Infrastructure HVAC AMC',
    'Government IT Digitisation',
    'Cybersecurity Sovereign India',
  ],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BRAND.canonicalUrl,
    siteName: BRAND.name,
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: BRAND.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: BRAND.description,
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
};

export const viewport: Viewport = {
  themeColor: '#0070F2',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND.name,
    legalName: BRAND.legalName,
    url: BRAND.canonicalUrl,
    logo: `${BRAND.canonicalUrl}/logo.png`,
    description: BRAND.description,
    telephone: BRAND.phone,
    email: BRAND.supportEmail,
    sameAs: [BRAND.linkedinUrl],
    address: {
      '@type': 'PostalAddress',
      streetAddress: BRAND.address.street,
      addressLocality: BRAND.address.city,
      addressRegion: BRAND.address.state,
      addressCountry: 'IN',
    },
    knowsAbout: [
      'SAP S/4HANA Implementation',
      'Artificial Intelligence & Computer Vision',
      'Autonomous Drone Surveying',
      'HVAC Facility Maintenance AMC',
      'Zero-Trust Cybersecurity',
    ],
  };

  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BRAND.name,
    alternateName: 'JSJ Infotech',
    url: BRAND.canonicalUrl,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#12171C] selection:bg-[#D1EFFF] selection:text-[#0057D2]">
        <Header />
        <main className="flex-1 pt-[65px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
