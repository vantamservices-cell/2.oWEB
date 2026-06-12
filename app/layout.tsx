import type {Metadata} from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VANTAM — Premium Netherlands Relocation Strategy & Proposals',
  description: 'Strategic analysis, agency proposals, and client-facing offers for VANTAM Support Service in the Netherlands.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="uk" className={`${inter.variable} ${manrope.variable} font-sans antialiased text-slate-900 bg-slate-50 scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen">
        {children}
      </body>
    </html>
  );
}

