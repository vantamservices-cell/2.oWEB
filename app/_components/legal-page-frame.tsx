'use client';

import Link from 'next/link';
import {Moon, Sun} from 'lucide-react';
import type {ReactNode} from 'react';
import {useEffect, useState} from 'react';

import type {LegalFooterLink} from '../../lib/legal-navigation';

type LegalPageFrameProps = {
  homeHref: string;
  backHomeLabel: string;
  themeToggleLightLabel: string;
  themeToggleDarkLabel: string;
  footerNote: string;
  footerBusinessMeta: ReactNode;
  footerLinks: LegalFooterLink[];
  children: ReactNode;
};

export default function LegalPageFrame({
  homeHref,
  backHomeLabel,
  themeToggleLightLabel,
  themeToggleDarkLabel,
  footerNote,
  footerBusinessMeta,
  footerLinks,
  children,
}: LegalPageFrameProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const syncTheme = () => setTheme(mediaQuery.matches ? 'dark' : 'light');

    syncTheme();
    mediaQuery.addEventListener('change', syncTheme);
    return () => mediaQuery.removeEventListener('change', syncTheme);
  }, []);

  return (
    <div className="vantam-site privacy-site" data-theme={theme}>
      <header className="privacy-topbar">
        <div className="site-container privacy-topbar-inner">
          <Link href={homeHref} className="privacy-brand" aria-label="VANTAM">
            VANTAM
          </Link>
          <div className="privacy-topbar-actions">
            <Link href={homeHref} className="privacy-home-link">
              {backHomeLabel}
            </Link>
            <button
              type="button"
              className="theme-toggle privacy-theme-toggle"
              aria-label={theme === 'light' ? themeToggleDarkLabel : themeToggleLightLabel}
              onClick={() => setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))}
            >
              {theme === 'light' ? <Moon /> : <Sun />}
            </button>
          </div>
        </div>
      </header>
      {children}
      <footer className="site-footer privacy-footer">
        <div className="site-container privacy-footer-layout">
          <div className="footer-copy">
            <p>{footerNote}</p>
            <p className="footer-business-meta">{footerBusinessMeta}</p>
          </div>
          <div className="footer-contact-links">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
