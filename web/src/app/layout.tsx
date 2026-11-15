import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { site } from '@/content/site';
import { AnnouncementStrip } from '@/components/layout/AnnouncementStrip';
import { Header } from '@/components/layout/Header';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/motion/SmoothScroll';

// next/font self-hosts at build time; no runtime Google Fonts calls (NFR-10).
const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter', display: 'swap', preload: false });
const grotesk = Space_Grotesk({ subsets: ['latin', 'latin-ext'], variable: '--font-grotesk', display: 'swap', weight: ['500', '600', '700'] });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jbmono', display: 'swap', weight: ['400', '500'], preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'JSJ INFOTECH | Enterprise IT, SAP with SGN, AI, Drones, Software, Smart Infrastructure', template: '%s | JSJ INFOTECH' },
  description: site.description,
  openGraph: { siteName: site.name, type: 'website', images: ['/og-image.png'] },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
};

export const viewport: Viewport = { themeColor: '#05040b', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-3 focus:text-ink">
          Skip to content
        </a>
        <SmoothScroll />
        <AnnouncementStrip />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
