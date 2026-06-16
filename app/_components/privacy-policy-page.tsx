import Link from 'next/link';

import {BUSINESS, BUSINESS_LOCATION} from '../../lib/business';
import {legalFooterLinks} from '../../lib/legal-navigation';
import {
  formatPrivacyLastUpdated,
  getPrivacyContactLinks,
  PRIVACY_COPY,
} from '../../lib/privacy';
import type {Locale} from '../../lib/locales';
import LegalPageFrame from './legal-page-frame';

type PrivacyPolicyPageProps = {
  lang: Locale;
};

export default function PrivacyPolicyPage({lang}: PrivacyPolicyPageProps) {
  const copy = PRIVACY_COPY[lang];
  const contact = getPrivacyContactLinks(lang);
  const updated = formatPrivacyLastUpdated(lang);
  const homeHref = `/${lang}`;

  return (
    <LegalPageFrame
      homeHref={homeHref}
      backHomeLabel={copy.backHomeLabel}
      themeToggleLightLabel={copy.themeToggleLightLabel}
      themeToggleDarkLabel={copy.themeToggleDarkLabel}
      footerNote={copy.footerNote}
      footerBusinessMeta={
        <>
          <strong translate="no">{BUSINESS.registeredBusinessName}</strong> • <span translate="no">KvK {BUSINESS.kvkNumber}</span> • {BUSINESS_LOCATION[lang]}
        </>
      }
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

          <section className="privacy-contact" aria-labelledby="privacy-contact-title">
            <div className="privacy-contact-copy">
              <p>{copy.contactLead}</p>
              <h2 id="privacy-contact-title">{copy.contactTitle}</h2>
              <p>{copy.contactSummary}</p>
            </div>
            <div className="privacy-contact-grid">
              <a href={contact.emailHref}>
                <span>{copy.emailLabel}</span>
                <strong translate="no">{contact.email}</strong>
              </a>
              <a href={contact.phoneHref}>
                <span>{copy.phoneLabel}</span>
                <strong translate="no">{contact.phone}</strong>
              </a>
              <a href={contact.whatsappHref} target="_blank" rel="noreferrer noopener" aria-label={contact.whatsappAriaLabel}>
                <span>{copy.whatsappLabel}</span>
                <strong translate="no">{contact.whatsapp}</strong>
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
            <Link href={homeHref} className="button button-secondary">
              {copy.backHomeLabel}
            </Link>
            <p className="privacy-return-note">{copy.footerNote}</p>
          </div>
        </div>
      </main>
    </LegalPageFrame>
  );
}
