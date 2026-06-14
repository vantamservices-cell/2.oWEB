import type {Metadata} from 'next';
import {Manrope} from 'next/font/google';
import './globals.css'; // Global styles
import {DEFAULT_LOCALE, isLocale} from '../lib/locales';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vantam.xyz'),
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

type RootLayoutProps = {
  children: React.ReactNode;
  params?: Promise<{lang?: string}>;
};

export default async function RootLayout({children, params}: RootLayoutProps) {
  const routeParams = params ? await params : undefined;
  const lang = isLocale(routeParams?.lang) ? routeParams.lang : DEFAULT_LOCALE;

  return (
    <html lang={lang} className={`${manrope.variable} antialiased`}>
      <body suppressHydrationWarning className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
