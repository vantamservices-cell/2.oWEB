import type {Metadata} from 'next';
import {notFound} from 'next/navigation';

import VantamHome from '../_components/vantam-home';
import {
  absoluteLocaleUrl,
  LOCALES,
  LOCALE_METADATA,
  localeAlternates,
  type Locale,
} from '../../lib/locales';

type LocalePageProps = {
  params: Promise<{lang: string}>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({lang}));
}

export async function generateMetadata({params}: LocalePageProps): Promise<Metadata> {
  const {lang: rawLang} = await params;
  if (!LOCALES.includes(rawLang as Locale)) notFound();
  const lang = rawLang as Locale;
  const metadata = LOCALE_METADATA[lang];

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: absoluteLocaleUrl(lang),
      languages: localeAlternates(),
    },
    openGraph: {
      type: 'website',
      url: absoluteLocaleUrl(lang),
      title: metadata.title,
      description: metadata.description,
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
      title: metadata.title,
      description: metadata.description,
      images: ['https://www.vantam.xyz/brand/vantam-logo-source.png'],
    },
  };
}

export default async function LocalePage({params, searchParams}: LocalePageProps) {
  const {lang: rawLang} = await params;
  if (!LOCALES.includes(rawLang as Locale)) notFound();
  const lang = rawLang as Locale;
  const resolvedSearchParams = await searchParams;
  const search = new URLSearchParams();

  for (const [key, value] of Object.entries(resolvedSearchParams ?? {})) {
    if (Array.isArray(value)) {
      value.forEach((item) => search.append(key, item));
      continue;
    }
    if (typeof value === 'string') search.set(key, value);
  }

  return <VantamHome lang={lang} pathname={`/${lang}`} searchString={search.toString()} />;
}
