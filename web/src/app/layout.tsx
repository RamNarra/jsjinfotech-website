import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/ui/JsonLd';
import { BRAND } from '@/shared';
import '@/styles/globals.css';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'optional' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap', preload: false });

const siteTitle = `${BRAND.name} — Technology & project execution, Hyderabad`;

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.canonicalUrl),
  title: { default: siteTitle, template: `%s | ${BRAND.name}` },
  description: BRAND.description,
  applicationName: BRAND.name,
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BRAND.canonicalUrl,
    siteName: BRAND.name,
    title: siteTitle,
    description: BRAND.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — ${BRAND.tagline}`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: BRAND.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND.name,
  url: BRAND.canonicalUrl,
  description: BRAND.description,
  telephone: BRAND.phone,
  email: BRAND.supportEmail,
  sameAs: [BRAND.linkedinUrl],
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${BRAND.address.street}, ${BRAND.address.area}`,
    addressLocality: BRAND.address.city,
    addressRegion: BRAND.address.state,
    addressCountry: 'IN',
  },
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND.name,
  url: BRAND.canonicalUrl,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={organization} />
        <JsonLd data={website} />
        <a
          href="#main"
          className="sr-only rounded-md bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 pt-[var(--header-h)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
