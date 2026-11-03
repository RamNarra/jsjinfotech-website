import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import '@/styles/globals.css';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jsjinfotech.co.in'),
  title: 'JSJ INFOTECH — Coming soon',
  description: 'JSJ INFOTECH is rebuilding its website. Back soon.',
};

export const viewport: Viewport = {
  themeColor: '#05070d',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
