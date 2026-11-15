import type { Metadata, Viewport } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import '@/styles/globals.css';
import { site } from '@/content/site';
import { AnnouncementStrip } from '@/components/layout/AnnouncementStrip';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/motion/SmoothScroll';

// next/font self-hosts at build time; no runtime Google Fonts calls (NFR-10).
const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter', display: 'swap', preload: false });
const interTight = Inter_Tight({ subsets: ['latin', 'latin-ext'], variable: '--font-inter-tight', display: 'swap', weight: ['600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'JSJ INFOTECH | Enterprise IT, SAP with SGN, AI, Drones, Software, Smart Infrastructure', template: '%s | JSJ INFOTECH' },
  description: site.description,
  openGraph: { siteName: site.name, type: 'website', images: ['/og-image.png'] },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
};

export const viewport: Viewport = { themeColor: '#16132a', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-3 focus:text-ink">
          Skip to content
        </a>
        <SmoothScroll />
        <AnnouncementStrip />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
