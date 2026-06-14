'use client';

import Link from 'next/link';
import {Moon, Sun} from 'lucide-react';
import type {ReactNode} from 'react';
import {useEffect, useState} from 'react';

type PrivacyPageFrameProps = {
  homeHref: string;
  backHomeLabel: string;
  themeToggleLightLabel: string;
  themeToggleDarkLabel: string;
  children: ReactNode;
};

export default function PrivacyPageFrame({
  homeHref,
  backHomeLabel,
  themeToggleLightLabel,
  themeToggleDarkLabel,
  children,
}: PrivacyPageFrameProps) {
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
    </div>
  );
}
