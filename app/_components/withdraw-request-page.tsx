'use client';

import Link from 'next/link';
import {useEffect, useRef, useState, type FormEvent} from 'react';

import {BUSINESS, BUSINESS_LOCATION} from '../../lib/business';
import {legalFooterLinks, withdrawalPath} from '../../lib/legal-navigation';
import {type Locale} from '../../lib/locales';
import {
  formatWithdrawalRequestTimestamp,
  WITHDRAWAL_REQUEST_COPY,
  WITHDRAWAL_REQUEST_ROUTE_LABELS,
  withdrawalRequestPath,
} from '../../lib/withdrawal-request';
import LegalPageFrame from './legal-page-frame';

type WithdrawRequestPageProps = {
  lang: Locale;
};

type FormState = 'form' | 'review' | 'success';

export default function WithdrawRequestPage({lang}: WithdrawRequestPageProps) {
  const copy = WITHDRAWAL_REQUEST_COPY[lang];
  const startedAtRef = useRef<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState<FormState>('form');
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [publicReference, setPublicReference] = useState('');
  const [submittedAt, setSubmittedAt] = useState('');
  const [pendingAcknowledgement, setPendingAcknowledgement] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    contractReference: '',
    serviceDescription: '',
    confirmWithdrawal: false,
    website: '',
  });

  useEffect(() => {
    if (startedAtRef.current === null) startedAtRef.current = Date.now();
  }, []);

  useEffect(() => {
    if (step === 'success') successRef.current?.focus();
  }, [step]);

  const homeHref = `/${lang}`;
  const infoHref = withdrawalPath(lang);
  const footerLinks = legalFooterLinks(lang).filter((link) => link.href !== withdrawalRequestPath(lang));
  const footerBusinessMeta = (
    <>
      <strong translate="no">{BUSINESS.registeredBusinessName}</strong> • <span translate="no">KvK {BUSINESS.kvkNumber}</span> • {BUSINESS_LOCATION[lang]}
    </>
  );

  function updateField<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((current) => ({...current, [key]: value}));
    if (errorMessage) setErrorMessage('');
  }

  function handleReview() {
    const node = formRef.current;
    if (!node) return;
    if (!node.checkValidity()) {
      node.reportValidity();
      return;
    }
    setStep('review');
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.confirmWithdrawal || submitting) return;

    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/withdrawal', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          contractReference: form.contractReference,
          serviceDescription: form.serviceDescription,
          locale: lang,
          confirmWithdrawal: true,
          website: form.website,
          formStartedAt: startedAtRef.current ?? Date.now(),
        }),
      });

      const data = await response.json() as
        | {status: 'acknowledged'; publicReference: string; submittedAt: string}
        | {status: 'received_pending_acknowledgement'; publicReference: string; submittedAt: string}
        | {error: string};

      const hasSuccessShape =
        'status' in data
        && typeof data.publicReference === 'string'
        && typeof data.submittedAt === 'string';

      if (!response.ok || !hasSuccessShape) {
        setErrorMessage(copy.errorMessage);
        setSubmitting(false);
        return;
      }

      setPublicReference(data.publicReference);
      setSubmittedAt(data.submittedAt);
      setPendingAcknowledgement(data.status === 'received_pending_acknowledgement');
      setStep('success');
    } catch {
      setErrorMessage(copy.errorMessage);
    } finally {
      setSubmitting(false);
    }
  }

  const submittedTimestamp = submittedAt ? formatWithdrawalRequestTimestamp(lang, submittedAt) : '';
  const reviewButtonDisabled = submitting || !form.name || !form.email || !form.contractReference || !form.serviceDescription;

  return (
    <LegalPageFrame
      homeHref={homeHref}
      backHomeLabel={copy.backHomeLabel}
      themeToggleLightLabel={copy.themeToggleLightLabel}
      themeToggleDarkLabel={copy.themeToggleDarkLabel}
      footerNote={copy.footerNote}
      footerBusinessMeta={footerBusinessMeta}
      footerLinks={footerLinks}
    >
      <main id="main" className="privacy-main">
        <div className="site-container withdraw-shell">
          <header className="privacy-hero withdraw-hero">
            <p className="privacy-kicker">{WITHDRAWAL_REQUEST_ROUTE_LABELS[lang]}</p>
            <h1>{copy.title}</h1>
            <p className="privacy-summary">{copy.summary}</p>
            <div className="privacy-meta">
              <span>{copy.stepOneLabel}</span>
              <strong>{copy.stepTwoLabel}</strong>
            </div>
            <div className="privacy-return withdraw-hero-actions">
              <Link href={infoHref} className="button button-secondary">
                {copy.infoButtonText}
              </Link>
              <p className="privacy-return-note">{copy.introText}</p>
            </div>
          </header>

          <div className="withdraw-layout">
            <section className="withdraw-card withdraw-intro" aria-labelledby="withdraw-intro-title">
              <p className="privacy-kicker">{copy.introTitle}</p>
              <h2 id="withdraw-intro-title">{copy.formTitle}</h2>
              <p>{copy.formText}</p>
              <p className="withdraw-note">{copy.confirmationNotice}</p>
            </section>

            <section className="withdraw-card withdraw-form-card" aria-label={step === 'form' ? copy.formTitle : copy.reviewTitle}>
              <form ref={formRef} className="withdraw-form" onSubmit={handleSubmit}>
                <input type="hidden" name="locale" value={lang} />
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor={`withdraw-website-${lang}`}>Website</label>
                  <input
                    id={`withdraw-website-${lang}`}
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(event) => updateField('website', event.target.value)}
                  />
                </div>

                {step === 'form' ? (
                  <>
                    <div className="withdraw-card-heading">
                      <p>{copy.stepOneLabel}</p>
                      <h2 id="withdraw-form-title">{copy.formTitle}</h2>
                      <p>{copy.formText}</p>
                    </div>

                    <div className="withdraw-form-grid">
                      <label className="withdraw-field full">
                        <span>{copy.nameLabel}</span>
                        <input
                          name="name"
                          type="text"
                          required
                          maxLength={120}
                          autoComplete="name"
                          placeholder={copy.namePlaceholder}
                          value={form.name}
                          onChange={(event) => updateField('name', event.target.value)}
                        />
                      </label>

                      <label className="withdraw-field full">
                        <span>{copy.emailLabel}</span>
                        <input
                          name="email"
                          type="email"
                          required
                          maxLength={254}
                          autoComplete="email"
                          placeholder={copy.emailPlaceholder}
                          value={form.email}
                          onChange={(event) => updateField('email', event.target.value)}
                        />
                      </label>

                      <label className="withdraw-field full">
                        <span>{copy.contractReferenceLabel}</span>
                        <input
                          name="contractReference"
                          type="text"
                          required
                          maxLength={120}
                          placeholder={copy.contractReferencePlaceholder}
                          value={form.contractReference}
                          onChange={(event) => updateField('contractReference', event.target.value)}
                        />
                      </label>

                      <label className="withdraw-field full">
                        <span>{copy.serviceDescriptionLabel}</span>
                        <textarea
                          name="serviceDescription"
                          rows={4}
                          required
                          maxLength={160}
                          placeholder={copy.serviceDescriptionPlaceholder}
                          value={form.serviceDescription}
                          onChange={(event) => updateField('serviceDescription', event.target.value)}
                        />
                      </label>
                    </div>

                    <div className="withdraw-actions">
                      <button type="button" className="button button-primary" onClick={handleReview} disabled={reviewButtonDisabled}>
                        {copy.reviewButtonLabel}
                      </button>
                    </div>
                  </>
                ) : null}

                {step === 'review' ? (
                  <>
                    <div className="withdraw-card-heading">
                      <p>{copy.stepTwoLabel}</p>
                      <h2>{copy.reviewTitle}</h2>
                      <p>{copy.reviewText}</p>
                    </div>

                    <div className="withdraw-review">
                      <div className="withdraw-summary-list" aria-label={copy.reviewTitle}>
                        <div className="withdraw-summary-item">
                          <span>{copy.reviewNameLabel}</span>
                          <strong>{form.name}</strong>
                        </div>
                        <div className="withdraw-summary-item">
                          <span>{copy.reviewEmailLabel}</span>
                          <strong>{form.email}</strong>
                        </div>
                        <div className="withdraw-summary-item">
                          <span>{copy.reviewContractReferenceLabel}</span>
                          <strong>{form.contractReference}</strong>
                        </div>
                        <div className="withdraw-summary-item">
                          <span>{copy.reviewServiceDescriptionLabel}</span>
                          <strong>{form.serviceDescription}</strong>
                        </div>
                        <div className="withdraw-summary-item">
                          <span>{copy.reviewLocaleLabel}</span>
                          <strong>{lang}</strong>
                        </div>
                      </div>

                      <label className="withdraw-consent">
                        <input
                          name="confirmWithdrawal"
                          type="checkbox"
                          required
                          checked={form.confirmWithdrawal}
                          onChange={(event) => updateField('confirmWithdrawal', event.target.checked)}
                        />
                        <span>{copy.confirmLabel}</span>
                      </label>

                      <div className="withdraw-actions">
                        <button type="button" className="button button-secondary" onClick={() => setStep('form')} disabled={submitting}>
                          {copy.editButtonLabel}
                        </button>
                        <button type="submit" className="button button-primary" disabled={submitting || !form.confirmWithdrawal}>
                          {copy.submitButtonLabel}
                        </button>
                      </div>
                    </div>
                  </>
                ) : null}

                {errorMessage ? (
                  <p className="withdraw-error" role="alert">{errorMessage}</p>
                ) : null}
              </form>
            </section>

            {step === 'success' ? (
              <section
                ref={successRef}
                className="withdraw-card withdraw-success"
                role="status"
                tabIndex={-1}
                aria-live="polite"
                aria-labelledby="withdraw-success-title"
              >
                <p className="privacy-kicker">{pendingAcknowledgement ? copy.successPendingText : copy.successText}</p>
                <h2 id="withdraw-success-title">{copy.successTitle}</h2>
                <div className="withdraw-success-grid">
                  <div className="withdraw-summary-item">
                    <span>{copy.publicReferenceLabel}</span>
                    <strong translate="no">{publicReference}</strong>
                  </div>
                  <div className="withdraw-summary-item">
                    <span>{copy.submittedAtLabel}</span>
                    <strong>{submittedTimestamp}</strong>
                  </div>
                </div>
                <p className="withdraw-note">{copy.receiptNote}</p>
                <p className="withdraw-note">{copy.keepEmailNote}</p>
                {pendingAcknowledgement ? <p className="withdraw-note">{copy.pendingAckNote}</p> : null}
                <div className="withdraw-actions">
                  <Link href={infoHref} className="button button-secondary">
                    {copy.infoButtonText}
                  </Link>
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </main>
    </LegalPageFrame>
  );
}
