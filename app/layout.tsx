import type {Metadata} from 'next';
import {Manrope} from 'next/font/google';
import {headers} from 'next/headers';
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
};

function resolveHtmlLang(requestUrl: string | null) {
  if (!requestUrl) {
    return DEFAULT_LOCALE;
  }

  const pathname = requestUrl.startsWith('http')
    ? new URL(requestUrl).pathname
    : requestUrl.split('?')[0] ?? '/';
  const locale = pathname.split('/')[1];

  return isLocale(locale) ? locale : DEFAULT_LOCALE;
}

export default async function RootLayout({children}: RootLayoutProps) {
  const headersList = await headers();
  const lang = resolveHtmlLang(headersList.get('next-url'));

  return (
    <html lang={lang} className={`${manrope.variable} antialiased`}>
      <body suppressHydrationWarning className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
