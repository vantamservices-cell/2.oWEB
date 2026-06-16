import type {MetadataRoute} from 'next';
import {LOCALES, absoluteLocaleUrl} from '../lib/locales';

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((lang) => [
    {
      url: absoluteLocaleUrl(lang),
    },
    {
      url: absoluteLocaleUrl(lang, '/privacy'),
    },
    {
      url: absoluteLocaleUrl(lang, '/terms'),
    },
    {
      url: absoluteLocaleUrl(lang, '/withdrawal'),
    },
    {
      url: absoluteLocaleUrl(lang, '/withdraw'),
    },
  ]);
}
