import type {Metadata} from 'next';
import {Manrope} from 'next/font/google';
import './globals.css'; // Global styles

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vantam.xyz'),
  title: {
    default: 'VANTAM | Practical support before, during and after arrival',
    template: '%s | VANTAM',
  },
  description:
    'VANTAM supports international people in the Netherlands with housing and rental-application help, pre-arrival preparation, and practical settlement after arrival.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.vantam.xyz/',
    title: 'VANTAM | Practical support before, during and after arrival',
    description:
      'VANTAM supports international people in the Netherlands with housing and rental-application help, pre-arrival preparation, and practical settlement after arrival.',
    siteName: 'VANTAM',
    images: [
      {
        url: '/brand/vantam-logo-source.png',
        width: 2023,
        height: 315,
        alt: 'VANTAM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VANTAM | Practical support before, during and after arrival',
    description:
      'VANTAM supports international people in the Netherlands with housing and rental-application help, pre-arrival preparation, and practical settlement after arrival.',
    images: ['https://www.vantam.xyz/brand/vantam-logo-source.png'],
  },
  icons: {
    icon: [
      {
        url: 'https://www.vantam.xyz/brand/vantam-logo-source.png',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: 'https://www.vantam.xyz/brand/vantam-logo-source.png',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="uk" className={`${manrope.variable} antialiased`}>
      <body suppressHydrationWarning className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
