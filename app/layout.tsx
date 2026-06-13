import type {Metadata} from 'next';
import {Manrope} from 'next/font/google';
import './globals.css'; // Global styles

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VANTAM | Practical housing and relocation support',
  description: 'Multilingual practical support for international students, expats and families in the Netherlands, including housing preparation, application support, Arrival Setup and practical relocation coordination.',
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
