import type {Metadata} from 'next';
import {Manrope} from 'next/font/google';
import './globals.css'; // Global styles

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VANTAM | Practical support before, during and after arrival',
  description: 'Multilingual practical support in the Netherlands across housing and rental help, pre-arrival preparation and practical settlement after arrival.',
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
