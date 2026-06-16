import type {Metadata} from 'next';
import {notFound} from 'next/navigation';

import {BUSINESS, BUSINESS_LOCATION, getWhatsAppAriaLabel, getWhatsAppUrl} from '../../../lib/business';
import {legalFooterLinks} from '../../../lib/legal-navigation';
import {LOCALES, type Locale, absoluteLocaleUrl, localeAlternates} from '../../../lib/locales';
import LegalPageFrame from '../../_components/legal-page-frame';
import {TERMS_COPY, TERMS_PDF_PATH, formatTermsEffectiveDate} from '../../../lib/terms';

type TermsRouteProps = {
  params: Promise<{lang: string}>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({lang}));
}

export async function generateMetadata({params}: TermsRouteProps): Promise<Metadata> {
  const {lang: rawLang} = await params;
  if (!LOCALES.includes(rawLang as Locale)) notFound();
  const lang = rawLang as Locale;
  const copy = TERMS_COPY[lang];

  return {
    title: copy.seoTitle,
    description: copy.seoDescription,
    alternates: {
      canonical: absoluteLocaleUrl(lang, '/terms'),
      languages: localeAlternates('/terms'),
    },
    openGraph: {
      type: 'website',
      url: absoluteLocaleUrl(lang, '/terms'),
      title: copy.seoTitle,
      description: copy.seoDescription,
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
      title: copy.seoTitle,
      description: copy.seoDescription,
      images: ['https://www.vantam.xyz/brand/vantam-logo-source.png'],
    },
  };
}

export default async function TermsRoute({params}: TermsRouteProps) {
  const {lang: rawLang} = await params;
  if (!LOCALES.includes(rawLang as Locale)) notFound();
  const lang = rawLang as Locale;
  const copy = TERMS_COPY[lang];
  const homeHref = `/${lang}`;
  const updated = formatTermsEffectiveDate(lang);
  const footerBusinessMeta = (
    <>
      <strong translate="no">{BUSINESS.registeredBusinessName}</strong> • <span translate="no">KvK {BUSINESS.kvkNumber}</span> • {BUSINESS_LOCATION[lang]}
    </>
  );

  return (
    <LegalPageFrame
      homeHref={homeHref}
      backHomeLabel={copy.backHomeLabel}
      themeToggleLightLabel={copy.themeToggleLightLabel}
      themeToggleDarkLabel={copy.themeToggleDarkLabel}
      footerNote={copy.footerNote}
      footerBusinessMeta={footerBusinessMeta}
      footerLinks={legalFooterLinks(lang)}
    >
      <main id="main" className="privacy-main">
        <div className="site-container privacy-shell">
          <header className="privacy-hero">
            <p className="privacy-kicker">{copy.lastUpdatedLabel}</p>
            <h1>{copy.title}</h1>
            <p className="privacy-summary">{copy.summary}</p>
            <div className="privacy-meta">
              <span>{copy.lastUpdatedLabel}</span>
              <strong>{updated}</strong>
            </div>
            {lang === 'en' ? (
              <div className="privacy-return" style={{marginTop: '1.2rem'}}>
                <a href={TERMS_PDF_PATH} className="button button-secondary" download>
                  {copy.referencePdfLabel}
                </a>
                <p className="privacy-return-note">{copy.referencePdfNote}</p>
              </div>
            ) : null}
          </header>

          <div className="privacy-layout">
            <nav className="privacy-toc" aria-label={copy.tocLabel}>
              <p>{copy.tocLabel}</p>
              <ol>
                {copy.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <article className="privacy-content">
              {copy.sections.map((section) => (
                <section key={section.id} id={section.id} className="privacy-section section-anchor">
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </article>
          </div>

          <section className="privacy-contact" aria-labelledby="terms-contact-title">
            <div className="privacy-contact-copy">
              <p>{copy.contactLead}</p>
              <h2 id="terms-contact-title">{copy.contactTitle}</h2>
              <p>{copy.contactSummary}</p>
            </div>
            <div className="privacy-contact-grid">
              <a href={BUSINESS.publicEmailMailto}>
                <span>{copy.emailLabel}</span>
                <strong translate="no">{BUSINESS.publicEmail}</strong>
              </a>
              <a href={BUSINESS.phoneTelHref}>
                <span>{copy.phoneLabel}</span>
                <strong translate="no">{BUSINESS.phoneDisplayNumber}</strong>
              </a>
              <a href={getWhatsAppUrl(lang)} target="_blank" rel="noreferrer noopener" aria-label={getWhatsAppAriaLabel(lang)}>
                <span>{copy.whatsappLabel}</span>
                <strong translate="no">{BUSINESS.whatsappDisplayNumber}</strong>
              </a>
            </div>
            <p className="privacy-contact-note">{copy.contactNote}</p>
            <p className="privacy-contact-meta">
              <strong translate="no">{BUSINESS.registeredBusinessName}</strong>
              <span translate="no">KvK {BUSINESS.kvkNumber}</span>
              <span>{BUSINESS_LOCATION[lang]}</span>
            </p>
          </section>

          <div className="privacy-return">
            <a href={homeHref} className="button button-secondary">
              {copy.backHomeLabel}
            </a>
            <p className="privacy-return-note">{copy.footerNote}</p>
          </div>
        </div>
      </main>
    </LegalPageFrame>
  );
}
