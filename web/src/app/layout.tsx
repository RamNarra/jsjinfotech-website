import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import '@/styles/globals.css';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jsjinfotech.co.in'),
  title: 'Under Maintenance',
  description: 'Under Maintenance',
};

export const viewport: Viewport = {
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#fbfbfd' }, { media: '(prefers-color-scheme: dark)', color: '#000000' }],
  colorScheme: 'light dark',
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
