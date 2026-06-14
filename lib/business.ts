import type {Locale} from './locales';

export const BUSINESS = {
  publicBrandName: 'VANTAM',
  registeredBusinessName: 'VANTAM Services',
  kvkNumber: '42080058',
  operatingCity: 'The Hague',
  operatingCountry: 'Netherlands',
  whatsappDisplayNumber: '+31 6 42 28 81 70',
  whatsappNormalizedNumber: '31642288170',
  whatsappBaseUrl: 'https://wa.me/31642288170',
} as const;

export const BUSINESS_LOCATION: Record<Locale, string> = {
  en: 'The Hague, Netherlands',
  uk: 'Гаага, Нідерланди',
  ru: 'Гаага, Нидерланды',
};

export const WHATSAPP_MESSAGE: Record<Locale, string> = {
  en: 'Hello, I would like to ask about VANTAM services.',
  uk: 'Вітаю! Хочу дізнатися більше про послуги VANTAM.',
  ru: 'Здравствуйте! Хочу узнать больше об услугах VANTAM.',
};

export function getWhatsAppUrl(locale: Locale) {
  return `${BUSINESS.whatsappBaseUrl}?text=${encodeURIComponent(WHATSAPP_MESSAGE[locale])}`;
}

export function getBusinessFooterLine(locale: Locale) {
  return `${BUSINESS.registeredBusinessName} • KvK ${BUSINESS.kvkNumber} • ${BUSINESS_LOCATION[locale]}`;
}

export function getBusinessPrintFooterLine(locale: Locale) {
  return `${BUSINESS.publicBrandName} / ${BUSINESS_LOCATION[locale].toUpperCase()} / KVK ${BUSINESS.kvkNumber} / ${BUSINESS.whatsappDisplayNumber}`;
}

export function getWhatsAppAriaLabel(locale: Locale) {
  return locale === 'uk'
    ? 'Відкрити чат WhatsApp Business'
    : locale === 'ru'
      ? 'Открыть чат WhatsApp Business'
      : 'Open WhatsApp Business chat';
}
