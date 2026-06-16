import type {Locale} from './locales';
import {localePath} from './locales';
import {privacyPath} from './privacy';

export type LegalFooterLink = {
  href: string;
  label: string;
};

export const LEGAL_ROUTE_LABELS: Record<Locale, {privacy: string; terms: string; withdrawal: string; withdraw: string}> = {
  en: {
    privacy: 'Privacy Policy',
    terms: 'General Terms',
    withdrawal: 'Withdrawal Information',
    withdraw: 'Withdraw from a contract',
  },
  uk: {
    privacy: 'Політика конфіденційності',
    terms: 'Загальні умови',
    withdrawal: 'Інформація про відмову',
    withdraw: 'Відмовитися від договору',
  },
  ru: {
    privacy: 'Политика конфиденциальности',
    terms: 'Общие условия',
    withdrawal: 'Информация об отказе',
    withdraw: 'Отказаться от договора',
  },
};

export function termsPath(locale: Locale) {
  return localePath(locale, '/terms');
}

export function withdrawalPath(locale: Locale) {
  return localePath(locale, '/withdrawal');
}

export function withdrawRequestPath(locale: Locale) {
  return localePath(locale, '/withdraw');
}

export function legalFooterLinks(locale: Locale): LegalFooterLink[] {
  const labels = LEGAL_ROUTE_LABELS[locale];

  return [
    {href: privacyPath(locale), label: labels.privacy},
    {href: termsPath(locale), label: labels.terms},
    {href: withdrawalPath(locale), label: labels.withdrawal},
    {href: withdrawRequestPath(locale), label: labels.withdraw},
  ];
}
