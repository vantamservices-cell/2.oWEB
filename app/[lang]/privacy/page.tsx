import type {Metadata} from 'next';
import {notFound} from 'next/navigation';

import PrivacyPolicyPage from '../../_components/privacy-policy-page';
import {LOCALES, type Locale, absoluteLocaleUrl, localeAlternates} from '../../../lib/locales';
import {PRIVACY_COPY} from '../../../lib/privacy';

type PrivacyRouteProps = {
  params: Promise<{lang: string}>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({lang}));
}

export async function generateMetadata({params}: PrivacyRouteProps): Promise<Metadata> {
  const {lang: rawLang} = await params;
  if (!LOCALES.includes(rawLang as Locale)) notFound();
  const lang = rawLang as Locale;
  const copy = PRIVACY_COPY[lang];

  return {
    title: copy.seoTitle,
    description: copy.seoDescription,
    alternates: {
      canonical: absoluteLocaleUrl(lang, '/privacy'),
      languages: localeAlternates('/privacy'),
    },
    openGraph: {
      type: 'website',
      url: absoluteLocaleUrl(lang, '/privacy'),
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

export default async function PrivacyRoute({params}: PrivacyRouteProps) {
  const {lang: rawLang} = await params;
  if (!LOCALES.includes(rawLang as Locale)) notFound();
  const lang = rawLang as Locale;

  return <PrivacyPolicyPage lang={lang} />;
}
