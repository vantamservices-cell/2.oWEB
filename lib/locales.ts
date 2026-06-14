export const LOCALES = ['en', 'uk', 'ru'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';
export const SITE_ORIGIN = 'https://www.vantam.xyz';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  uk: 'UA',
  ru: 'RU',
};

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  uk: 'Українська',
  ru: 'Русский',
};

export const LOCALE_METADATA: Record<Locale, {title: string; description: string}> = {
  en: {
    title: 'VANTAM | Practical support before, during and after arrival',
    description:
      'VANTAM supports people moving to the Netherlands with pre-arrival preparation, housing and rental-application support, and practical settlement after arrival.',
  },
  uk: {
    title: 'VANTAM | Практична підтримка до, під час і після приїзду',
    description:
      'VANTAM підтримує людей, які переїжджають до Нідерландів, з підготовкою до приїзду, житлом і орендними заявками, а також практичним облаштуванням після приїзду.',
  },
  ru: {
    title: 'VANTAM | Практическая поддержка до, во время и после приезда',
    description:
      'VANTAM помогает людям, которые переезжают в Нидерланды, с подготовкой к приезду, жильём и арендными заявками, а также практическим обустройством после приезда.',
  },
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

export function resolveLocale(value: string | undefined | null): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function absoluteLocaleUrl(locale: Locale, pathname = '') {
  const suffix = pathname.startsWith('/') ? pathname : pathname ? `/${pathname}` : '';
  return `${SITE_ORIGIN}/${locale}${suffix}`;
}

export function localeAlternates() {
  return {
    en: absoluteLocaleUrl('en'),
    uk: absoluteLocaleUrl('uk'),
    ru: absoluteLocaleUrl('ru'),
    'x-default': absoluteLocaleUrl('en'),
  } as const;
}

export function swapLocale(pathname: string, nextLocale: Locale) {
  const cleanedPath = pathname === '/' ? '' : pathname;
  const segments = cleanedPath.split('/').filter(Boolean);
  if (segments.length === 0) return `/${nextLocale}`;
  if (isLocale(segments[0])) {
    segments[0] = nextLocale;
    return `/${segments.join('/')}`;
  }
  return `/${nextLocale}${cleanedPath.startsWith('/') ? cleanedPath : `/${cleanedPath}`}`;
}

