import type {Metadata} from 'next';
import {notFound} from 'next/navigation';

import WithdrawRequestPage from '../../_components/withdraw-request-page';
import {LOCALES, type Locale, absoluteLocaleUrl, localeAlternates} from '../../../lib/locales';
import {WITHDRAWAL_REQUEST_COPY} from '../../../lib/withdrawal-request';

type WithdrawRouteProps = {
  params: Promise<{lang: string}>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({lang}));
}

export async function generateMetadata({params}: WithdrawRouteProps): Promise<Metadata> {
  const {lang: rawLang} = await params;
  if (!LOCALES.includes(rawLang as Locale)) notFound();
  const lang = rawLang as Locale;
  const copy = WITHDRAWAL_REQUEST_COPY[lang];

  return {
    title: copy.seoTitle,
    description: copy.seoDescription,
    alternates: {
      canonical: absoluteLocaleUrl(lang, '/withdraw'),
      languages: localeAlternates('/withdraw'),
    },
    openGraph: {
      type: 'website',
      url: absoluteLocaleUrl(lang, '/withdraw'),
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

export default async function WithdrawRoute({params}: WithdrawRouteProps) {
  const {lang: rawLang} = await params;
  if (!LOCALES.includes(rawLang as Locale)) notFound();
  const lang = rawLang as Locale;

  return <WithdrawRequestPage lang={lang} />;
}
