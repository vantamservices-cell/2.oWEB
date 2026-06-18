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
    title: 'VANTAM | Practical support for international students in the Netherlands',
    description:
      'Practical support for international students from arrival planning to everyday student life in the Netherlands, including orientation, housing support, first-month setup, and defined first-year help.',
  },
  uk: {
    title: 'VANTAM | Практична підтримка для міжнародних студентів у Нідерландах',
    description:
      'Практична підтримка для міжнародних студентів від підготовки до приїзду до повсякденного студентського життя в Нідерландах, включно з орієнтацією, житловою підтримкою, першим місяцем після приїзду та визначеною допомогою на перший рік.',
  },
  ru: {
    title: 'VANTAM | Практическая поддержка для международных студентов в Нидерландах',
    description:
      'Практическая поддержка для международных студентов от подготовки к приезду до повседневной студенческой жизни в Нидерландах, включая ориентацию, жилищную поддержку, первый месяц после приезда и определённую помощь на первый год.',
  },
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

export function resolveLocale(value: string | undefined | null): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function absoluteLocaleUrl(locale: Locale, pathname = '') {
  return `${SITE_ORIGIN}${localePath(locale, pathname)}`;
}

export function localePath(locale: Locale, pathname = '') {
  const suffix = pathname.startsWith('/') ? pathname : pathname ? `/${pathname}` : '';
  return `/${locale}${suffix}`;
}

export function localeAlternates(pathname = '') {
  return {
    en: absoluteLocaleUrl('en', pathname),
    uk: absoluteLocaleUrl('uk', pathname),
    ru: absoluteLocaleUrl('ru', pathname),
    'x-default': absoluteLocaleUrl('en', pathname),
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
